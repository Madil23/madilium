import React, { useState } from 'react';
import { TemplateRenderer } from './TemplateRenderer';
import { ProductPreview } from './ProductPreview';
import { AppState, MaterialType, CardColor, TemplateStyle, SocialLink } from '../types';
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
                <div className="flex flex-wrap gap-3">
                  {state.product.material === MaterialType.PMMA ? (
                    <>
                      <button onClick={() => updateProduct('color', CardColor.BLACK)} className={`w-12 h-12 rounded-full bg-black border-2 ${state.product.color === CardColor.BLACK ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Black" />
                      <button onClick={() => updateProduct('color', CardColor.WHITE)} className={`w-12 h-12 rounded-full bg-white border-2 ${state.product.color === CardColor.WHITE ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="White" />
                      <button onClick={() => updateProduct('color', CardColor.CLEAR)} className={`w-12 h-12 rounded-full bg-gray-500/20 border-2 ${state.product.color === CardColor.CLEAR ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Transparent" />
                    </>
                  ) : (
                    <>
                       <button onClick={() => updateProduct('color', CardColor.WOOD_WALNUT)} className={`w-12 h-12 rounded-full bg-[#5C4033] border-2 ${state.product.color === CardColor.WOOD_WALNUT ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Walnut" />
                       <button onClick={() => updateProduct('color', CardColor.WOOD_OAK)} className={`w-12 h-12 rounded-full bg-[#A0522D] border-2 ${state.product.color === CardColor.WOOD_OAK ? 'border-madilium-accent scale-110' : 'border-stone-700'}`} title="Oak" />
                    </>
                  )}
                </div>
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                   {Object.values(TemplateStyle).map(t => (
                     <button
                        key={t}
                        onClick={() => setState(prev => ({ ...prev, template: t }))}
                        className={`p-2 text-xs rounded-lg border transition-all ${state.template === t ? 'bg-madilium-accent text-black border-madilium-accent font-bold' : 'border-stone-700 text-stone-400 hover:border-stone-500'}`}
                     >
                       {t.replace('_', ' ')}
                     </button>
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
                        className="bg-stone-900 text-white text-xs p-2 rounded border border-stone-700 focus:outline-none"
                      >
                        <option value="website">Website</option>
                        <option value="instagram">Instagram</option>
                        <option value="twitter">Twitter</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="email">Email</option>
                      </select>
                      <input 
                        type="text" 
                        value={link.url}
                        onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                        placeholder="https://..."
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