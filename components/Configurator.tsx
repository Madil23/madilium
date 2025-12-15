import React, { useState } from 'react';
import { TemplateRenderer } from './TemplateRenderer';
import { ProductPreview } from './ProductPreview';
import { AppState, MaterialType, CardColor, TemplateStyle, SocialLink, SocialPlatform } from '../types';
import { Smartphone, Layers, User, Share2, Plus, Trash2, Check, ShoppingBag } from 'lucide-react';

const INITIAL_STATE: AppState = {
  profile: {
    name: "Alex Morgan",
    title: "Digital Artist & Designer",
    bio: "Creating immersive digital experiences through code and design. Based in Paris.",
    avatarUrl: "https://picsum.photos/seed/alex/400/400",
    links: [
      { id: '1', platform: 'website', url: 'https://madilium.com' },
      { id: '2', platform: 'instagram', url: 'https://instagram.com' }
    ]
  },
  template: TemplateStyle.NEON_CYBER,
  product: {
    material: MaterialType.PMMA,
    color: CardColor.BLACK,
    quantity: 1
  }
};

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  'website', 'email', 'instagram', 'linkedin', 'twitter', 'facebook', 
  'youtube', 'tiktok', 'whatsapp', 'telegram', 'snapchat', 'discord', 
  'twitch', 'spotify', 'github', 'behance', 'dribbble', 'paypal', 'custom'
];

// Helper to render a static mini-preview of templates
const TemplateThumbnail: React.FC<{ template: TemplateStyle, selected: boolean, onClick: () => void }> = ({ template, selected, onClick }) => {
  // We simulate the "Vibe" of the template via CSS classes
  let bgClass = "bg-white";
  let fgClass = "bg-gray-200";
  let accentClass = "bg-gray-400";
  let font = "font-sans";

  switch (template) {
    case TemplateStyle.NEON_CYBER: bgClass="bg-black"; fgClass="bg-cyan-900"; accentClass="bg-purple-500"; break;
    case TemplateStyle.PROFESSIONAL: bgClass="bg-slate-50"; fgClass="bg-slate-800"; accentClass="bg-slate-300"; break;
    case TemplateStyle.NATURE_ECO: bgClass="bg-[#fdfbf7]"; fgClass="bg-[#8c9c85]"; accentClass="bg-[#3e4a3d]"; break;
    case TemplateStyle.VIBRANT_SOCIAL: bgClass="bg-gradient-to-br from-pink-500 to-yellow-500"; fgClass="bg-white"; accentClass="bg-pink-500"; break;
    case TemplateStyle.GLASS_MORPHISM: bgClass="bg-gradient-to-tr from-blue-300 to-pink-300"; fgClass="bg-white/40"; accentClass="bg-white/60"; break;
    case TemplateStyle.LUXURY_SERIF: bgClass="bg-[#111]"; fgClass="bg-[#D4AF37]"; accentClass="bg-[#D4AF37]"; break;
    case TemplateStyle.DEVELOPER_TERM: bgClass="bg-[#0d1117]"; fgClass="bg-[#30363d]"; accentClass="bg-[#58a6ff]"; font="font-mono"; break;
    case TemplateStyle.RETRO_80S: bgClass="bg-[#120024]"; fgClass="bg-[#ff00de]"; accentClass="bg-[#00f0ff]"; break;
    case TemplateStyle.INFLUENCER_GLOW: bgClass="bg-orange-100"; fgClass="bg-white"; accentClass="bg-pink-400"; break;
    case TemplateStyle.CORPORATE_CLEAN: bgClass="bg-gray-100"; fgClass="bg-[#004e92]"; accentClass="bg-white"; break;
    case TemplateStyle.MINIMAL_MONO: bgClass="bg-white"; fgClass="bg-black"; accentClass="bg-black"; break;
    case TemplateStyle.GAMER_RGB: bgClass="bg-[#0a0a0a]"; fgClass="bg-red-600"; accentClass="bg-blue-600"; break;
    case TemplateStyle.ARTISTIC_BRUSH: bgClass="bg-[#f3f0e8]"; fgClass="bg-[#d4a373]"; accentClass="bg-stone-600"; break;
    case TemplateStyle.CREATIVE_PORTFOLIO: bgClass="bg-stone-100"; fgClass="bg-black"; accentClass="bg-white"; break;
    default: break; // Modern minimal default
  }

  return (
    <button 
      onClick={onClick}
      className={`relative flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${selected ? 'ring-2 ring-madilium-accent bg-stone-800' : 'hover:bg-stone-800/50'}`}
    >
      <div className={`w-full aspect-[9/16] rounded-lg shadow-sm overflow-hidden flex flex-col items-center pt-2 gap-1 border border-stone-700/50 ${bgClass}`}>
        {/* Fake Header/Avatar */}
        <div className={`w-6 h-6 rounded-full ${fgClass} opacity-80`} />
        {/* Fake Lines */}
        <div className={`w-12 h-1 rounded-full ${accentClass} opacity-60`} />
        <div className={`w-16 h-1 rounded-full ${accentClass} opacity-40`} />
        {/* Fake Buttons */}
        <div className={`mt-2 w-16 h-3 rounded ${fgClass} opacity-50`} />
        <div className={`w-16 h-3 rounded ${fgClass} opacity-50`} />
      </div>
      <span className={`text-[10px] uppercase font-bold text-center max-w-full leading-tight ${selected ? 'text-white' : 'text-stone-500'}`}>
        {template.replace(/_/g, ' ')}
      </span>
    </button>
  )
}

export const Configurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'product' | 'profile'>('product');
  const [state, setState] = useState<AppState>(INITIAL_STATE);

  // -- Handlers --

  const updateProduct = (key: string, value: any) => {
    setState(prev => ({ ...prev, product: { ...prev.product, [key]: value } }));
  };

  const updateProfile = (key: string, value: string) => {
    setState(prev => ({ ...prev, profile: { ...prev.profile, [key]: value } }));
  };

  const addLink = () => {
    const newLink: SocialLink = { id: Date.now().toString(), platform: 'website', url: '' };
    setState(prev => ({
      ...prev,
      profile: { ...prev.profile, links: [...prev.profile.links, newLink] }
    }));
  };

  const removeLink = (id: string) => {
    setState(prev => ({
      ...prev,
      profile: { ...prev.profile, links: prev.profile.links.filter(l => l.id !== id) }
    }));
  };

  const updateLink = (id: string, key: keyof SocialLink, value: string) => {
    setState(prev => ({
      ...prev,
      profile: {
        ...prev.profile,
        links: prev.profile.links.map(l => l.id === id ? { ...l, [key]: value } : l)
      }
    }));
  };

  // -- UI Components --

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 min-h-screen">
      
      {/* LEFT COLUMN: Controls */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        
        {/* Navigation Tabs */}
        <div className="flex p-1 bg-stone-900 rounded-xl border border-stone-800">
          <button 
            onClick={() => setActiveTab('product')}
            className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all ${activeTab === 'product' ? 'bg-madilium-accent text-stone-950 shadow-lg' : 'text-stone-400 hover:text-white'}`}
          >
            <Layers size={18} /> Physical Product
          </button>
          <button 
             onClick={() => setActiveTab('profile')}
             className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-all ${activeTab === 'profile' ? 'bg-madilium-accent text-stone-950 shadow-lg' : 'text-stone-400 hover:text-white'}`}
          >
            <Smartphone size={18} /> Digital Profile
          </button>
        </div>

        {/* Settings Area */}
        <div className="flex-1 bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-2xl p-6 shadow-xl">
          
          {activeTab === 'product' ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Material</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[MaterialType.PMMA, MaterialType.WOOD].map(mat => (
                    <button
                      key={mat}
                      onClick={() => {
                        updateProduct('material', mat);
                        // Reset color to valid default for material
                        updateProduct('color', mat === MaterialType.WOOD ? CardColor.WOOD_WALNUT : CardColor.BLACK);
                      }}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${state.product.material === mat ? 'border-madilium-accent bg-stone-800 text-white' : 'border-stone-700 text-stone-500 hover:border-stone-600'}`}
                    >
                      <span className="font-bold">{mat}</span>
                      <span className="text-xs opacity-60">{mat === 'PMMA' ? 'High Gloss Acrylic' : 'Natural Finish'}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Select Finish</h3>
                {state.product.material === MaterialType.PMMA ? (
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Classic & Gloss</p>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => updateProduct('color', CardColor.BLACK)} className={`w-12 h-12 rounded-full bg-black border-2 ${state.product.color === CardColor.BLACK ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Black" />
                      <button onClick={() => updateProduct('color', CardColor.WHITE)} className={`w-12 h-12 rounded-full bg-white border-2 ${state.product.color === CardColor.WHITE ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="White" />
                      <button onClick={() => updateProduct('color', CardColor.CLEAR)} className={`w-12 h-12 rounded-full bg-gray-500/20 border-2 ${state.product.color === CardColor.CLEAR ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Transparent" />
                      <button onClick={() => updateProduct('color', CardColor.NAVY_BLUE)} className={`w-12 h-12 rounded-full bg-[#1a365d] border-2 ${state.product.color === CardColor.NAVY_BLUE ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Navy Blue" />
                      <button onClick={() => updateProduct('color', CardColor.EMERALD_GREEN)} className={`w-12 h-12 rounded-full bg-[#064e3b] border-2 ${state.product.color === CardColor.EMERALD_GREEN ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Emerald Green" />
                      <button onClick={() => updateProduct('color', CardColor.RED_VELVET)} className={`w-12 h-12 rounded-full bg-[#7f1d1d] border-2 ${state.product.color === CardColor.RED_VELVET ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Red Velvet" />
                    </div>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mt-4">Premium Metallic</p>
                    <div className="flex flex-wrap gap-3">
                      <button onClick={() => updateProduct('color', CardColor.GOLD)} className={`w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border-2 ${state.product.color === CardColor.GOLD ? 'border-white scale-110' : 'border-stone-700'}`} title="Gold" />
                      <button onClick={() => updateProduct('color', CardColor.ROSE_GOLD)} className={`w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 border-2 ${state.product.color === CardColor.ROSE_GOLD ? 'border-white scale-110' : 'border-stone-700'}`} title="Rose Gold" />
                      <button onClick={() => updateProduct('color', CardColor.SILVER)} className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 ${state.product.color === CardColor.SILVER ? 'border-white scale-110' : 'border-stone-700'}`} title="Silver" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                     <button onClick={() => updateProduct('color', CardColor.WOOD_WALNUT)} className={`w-12 h-12 rounded-full bg-[#5C4033] border-2 ${state.product.color === CardColor.WOOD_WALNUT ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Walnut" />
                     <button onClick={() => updateProduct('color', CardColor.WOOD_OAK)} className={`w-12 h-12 rounded-full bg-[#A0522D] border-2 ${state.product.color === CardColor.WOOD_OAK ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Oak" />
                     <button onClick={() => updateProduct('color', CardColor.WOOD_BAMBOO)} className={`w-12 h-12 rounded-full bg-[#E3C699] border-2 ${state.product.color === CardColor.WOOD_BAMBOO ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Bamboo" />
                     <button onClick={() => updateProduct('color', CardColor.WOOD_EBONY)} className={`w-12 h-12 rounded-full bg-[#2A2420] border-2 ${state.product.color === CardColor.WOOD_EBONY ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Ebony" />
                  </div>
                )}
              </div>
              
              <div className="pt-8 border-t border-stone-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-stone-400">Unit Price</span>
                  <span className="text-2xl font-bold text-white">$29.99</span>
                </div>
                 <button className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag size={20} />
                  Order Card
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              
              {/* Profile Inputs */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2"><User size={18} /> Profile Details</h3>
                <div className="grid grid-cols-1 gap-4">
                  <input 
                    type="text" 
                    value={state.profile.name} 
                    onChange={e => updateProfile('name', e.target.value)}
                    placeholder="Full Name"
                    className="bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:outline-none focus:border-madilium-accent"
                  />
                  <input 
                    type="text" 
                    value={state.profile.title} 
                    onChange={e => updateProfile('title', e.target.value)}
                    placeholder="Job Title"
                    className="bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:outline-none focus:border-madilium-accent"
                  />
                   <textarea 
                    value={state.profile.bio} 
                    onChange={e => updateProfile('bio', e.target.value)}
                    placeholder="Short Bio"
                    rows={3}
                    className="bg-stone-800 border border-stone-700 rounded-lg p-3 text-white focus:outline-none focus:border-madilium-accent"
                  />
                </div>
              </div>

              {/* Template Selection */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Choose Template</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-2">
                   {Object.values(TemplateStyle).map(t => (
                     <TemplateThumbnail 
                       key={t}
                       template={t}
                       selected={state.template === t}
                       onClick={() => setState(prev => ({ ...prev, template: t }))}
                     />
                   ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <div className="flex items-center justify-between mb-3">
                   <h3 className="text-lg font-bold text-white flex items-center gap-2"><Share2 size={18} /> Links</h3>
                   <button onClick={addLink} className="text-xs bg-stone-800 hover:bg-stone-700 text-white px-2 py-1 rounded flex items-center gap-1 border border-stone-700"><Plus size={12}/> Add</button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {state.profile.links.map(link => (
                    <div key={link.id} className="flex gap-2 items-start bg-stone-800/50 p-2 rounded-lg">
                      <select 
                        value={link.platform}
                        onChange={(e) => updateLink(link.id, 'platform', e.target.value as any)}
                        className="bg-stone-900 text-white text-xs p-2 rounded border border-stone-700 focus:outline-none w-28 capitalize"
                      >
                        {SOCIAL_PLATFORMS.map(p => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      <input 
                        type="text" 
                        value={link.url}
                        onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                        placeholder="Link URL"
                        className="flex-1 bg-stone-900 text-white text-xs p-2 rounded border border-stone-700 focus:outline-none"
                      />
                      <button onClick={() => removeLink(link.id)} className="p-2 text-red-400 hover:text-red-300">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Real-time Preview */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-stone-900/30 rounded-3xl p-4 md:p-12 border border-stone-800/50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {activeTab === 'product' ? (
           <div className="w-full max-w-md animate-in zoom-in duration-500">
             <ProductPreview config={state.product} />
             <div className="mt-8 text-center">
               <h2 className="text-2xl font-bold text-white mb-2">Madilium NFC Tag</h2>
               <p className="text-stone-400">
                 Tap to share instantly. Water resistant. Durable {state.product.material === MaterialType.WOOD ? 'Wood' : 'Acrylic'}.
               </p>
             </div>
           </div>
        ) : (
          /* Phone Frame Mockup */
          <div className="relative w-[300px] h-[600px] border-8 border-stone-950 bg-stone-900 rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-500">
            {/* Dynamic Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-stone-950 rounded-b-2xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-white overflow-hidden relative z-10 scrollbar-hide">
              <TemplateRenderer profile={state.profile} template={state.template} />
            </div>

             {/* Reflections */}
             <div className="absolute inset-0 border-[3px] border-white/10 rounded-[2.5rem] pointer-events-none z-30"></div>
          </div>
        )}
      </div>
    </div>
  );
};