import React, { useState } from 'react';
import { Globe, Instagram, Send, Palette } from 'lucide-react';

// --- LISTE DES 10 TEMPLATES ---
const TEMPLATES = [
  { id: 'modern', name: 'Modern Minimal', color: 'bg-stone-200' },
  { id: 'neon', name: 'Neon Cyber', color: 'bg-cyan-500' },
  { id: 'professional', name: 'Professional', color: 'bg-slate-600' },
  { id: 'nature', name: 'Nature Eco', color: 'bg-emerald-600' },
  { id: 'vibrant', name: 'Vibrant Social', color: 'bg-purple-500' },
  { id: 'luxury', name: 'Luxury Gold', color: 'bg-amber-400' },
  { id: 'dark', name: 'Dark Stealth', color: 'bg-stone-900' },
  { id: 'pastel', name: 'Pastel Dream', color: 'bg-rose-300' },
  { id: 'corporate', name: 'Corporate Blue', color: 'bg-blue-700' },
  { id: 'sunset', name: 'Sunset Gradient', color: 'bg-orange-500' },
];

export const DigitalProfileConfigurator = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Morgan',
    title: 'Digital Artist & Designer',
    bio: 'Creating immersive digital experiences through code and design. Based in Paris.',
    template: 'neon',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // --- LOGIQUE DES STYLES POUR LES 10 TEMPLATES ---
  const getPreviewClasses = () => {
    switch (profile.template) {
      case 'neon':
        return {
          container: 'bg-stone-950 border-cyan-500/50 shadow-cyan-500/20',
          textTitle: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500',
          textSub: 'text-cyan-200',
          textBody: 'text-gray-300',
          button: 'bg-stone-900 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]',
          avatarRing: 'ring-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)]',
          bgEffect: 'bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-stone-950 to-stone-950',
        };
      case 'modern':
        return {
          container: 'bg-white border-gray-200',
          textTitle: 'text-stone-950',
          textSub: 'text-stone-500',
          textBody: 'text-gray-600',
          button: 'bg-stone-50 border-stone-200 text-stone-900 hover:bg-stone-100 hover:border-stone-400',
          avatarRing: 'ring-stone-100',
          bgEffect: 'bg-stone-50',
        };
      case 'professional':
        return {
          container: 'bg-slate-50 border-slate-200',
          textTitle: 'text-slate-900',
          textSub: 'text-slate-600',
          textBody: 'text-slate-700',
          button: 'bg-white border-slate-300 text-slate-800 shadow-sm hover:border-slate-500',
          avatarRing: 'ring-slate-300',
          bgEffect: 'bg-slate-100',
        };
      case 'nature':
        return {
          container: 'bg-[#f0fdf4] border-emerald-200',
          textTitle: 'text-emerald-900',
          textSub: 'text-emerald-700',
          textBody: 'text-emerald-800',
          button: 'bg-white border-emerald-300 text-emerald-800 hover:bg-emerald-50',
          avatarRing: 'ring-emerald-400',
          bgEffect: 'bg-gradient-to-b from-emerald-50 to-[#f0fdf4]',
        };
      case 'vibrant':
        return {
          container: 'bg-purple-950 border-purple-500/30',
          textTitle: 'text-white',
          textSub: 'text-fuchsia-300',
          textBody: 'text-purple-200',
          button: 'bg-purple-900/50 border-fuchsia-500/50 text-fuchsia-200 hover:bg-fuchsia-500/20',
          avatarRing: 'ring-fuchsia-500',
          bgEffect: 'bg-gradient-to-tr from-purple-900 via-fuchsia-900 to-purple-950',
        };
      case 'luxury':
        return {
          container: 'bg-neutral-900 border-amber-600/50',
          textTitle: 'text-amber-500',
          textSub: 'text-amber-200/80',
          textBody: 'text-neutral-400',
          button: 'bg-neutral-800 border-amber-600/40 text-amber-500 hover:bg-amber-900/20 hover:border-amber-500',
          avatarRing: 'ring-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
          bgEffect: 'bg-gradient-to-b from-neutral-900 to-black',
        };
      case 'dark':
        return {
          container: 'bg-black border-stone-800',
          textTitle: 'text-white',
          textSub: 'text-stone-400',
          textBody: 'text-stone-500',
          button: 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800 hover:text-white',
          avatarRing: 'ring-stone-800',
          bgEffect: 'bg-neutral-950',
        };
      case 'pastel':
        return {
          container: 'bg-[#fff1f2] border-rose-200',
          textTitle: 'text-rose-900',
          textSub: 'text-rose-500',
          textBody: 'text-rose-700',
          button: 'bg-white border-rose-200 text-rose-500 hover:bg-rose-50 rounded-full',
          avatarRing: 'ring-rose-300',
          bgEffect: 'bg-gradient-to-tr from-rose-100 to-orange-50',
        };
      case 'corporate':
        return {
          container: 'bg-white border-blue-200',
          textTitle: 'text-blue-900',
          textSub: 'text-blue-600 font-semibold',
          textBody: 'text-slate-600',
          button: 'bg-blue-600 border-transparent text-white hover:bg-blue-700 shadow-md',
          avatarRing: 'ring-blue-600',
          bgEffect: 'bg-blue-50',
        };
      case 'sunset':
        return {
          container: 'bg-orange-950 border-orange-500/30',
          textTitle: 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500',
          textSub: 'text-orange-200',
          textBody: 'text-orange-100/80',
          button: 'bg-orange-900/40 border-orange-400/30 text-orange-300 hover:bg-orange-500/20',
          avatarRing: 'ring-orange-500',
          bgEffect: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-orange-800',
        };
      default:
        return {
          container: 'bg-white border-gray-200',
          textTitle: 'text-stone-950',
          textSub: 'text-stone-500',
          textBody: 'text-gray-600',
          button: 'bg-stone-50 border-stone-200 text-stone-900 hover:bg-stone-100',
          avatarRing: 'ring-stone-200',
          bgEffect: 'bg-stone-50',
        };
    }
  };

  const classes = getPreviewClasses();

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in">
      {/* ----- Colonne Gauche : Formulaire d'édition ----- */}
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-cyan-400" />
            Profile Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Professional Title</label>
              <input
                type="text"
                name="title"
                value={profile.title}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Short Bio</label>
              <textarea
                name="bio"
                rows={3}
                value={profile.bio}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sélection du Template */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-cyan-400" />
            Select Template ({TEMPLATES.length})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => setProfile({ ...profile, template: template.id })}
                className={`p-3 rounded-xl border text-left transition-all group relative overflow-hidden
                  ${profile.template === template.id 
                    ? 'border-cyan-500 bg-stone-800' 
                    : 'border-stone-800 bg-stone-900/50 hover:border-stone-600'
                  }`}
              >
                <div className={`w-full h-8 rounded-md mb-2 ${template.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <span className={`text-xs font-bold uppercase tracking-wider block ${profile.template === template.id ? 'text-white' : 'text-gray-500'}`}>
                    {template.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----- Colonne Droite : Aperçu Mobile (Preview) ----- */}
      <div className="bg-stone-900/50 rounded-[2.5rem] p-8 flex items-center justify-center border border-white/5 relative">
        <div className="absolute top-4 right-6 text-xs font-mono text-gray-600">LIVE PREVIEW</div>
        
        {/* Cadre du téléphone */}
        <div className={`relative w-[300px] h-[600px] rounded-[3rem] border-[8px] overflow-hidden shadow-2xl transition-all duration-500 ${classes.container}`}>
          {/* Fond d'écran avec effet */}
          <div className={`absolute inset-0 ${classes.bgEffect} z-0`}></div>
          
          {/* Contenu du téléphone */}
          <div className="relative z-10 h-full flex flex-col p-6 pt-12 overflow-y-auto no-scrollbar">
            {/* Avatar et Infos principales */}
            <div className="text-center space-y-4 mb-8">
              <div className={`w-28 h-28 mx-auto rounded-full overflow-hidden ring-4 ${classes.avatarRing} transition-all duration-500`}>
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className={`text-2xl font-bold leading-tight mb-1 ${classes.textTitle}`}>
                  {profile.name || 'Your Name'}
                </h2>
                <p className={`text-sm font-medium tracking-wide ${classes.textSub}`}>
                  {profile.title || 'Your Title'}
                </p>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="space-y-4 mb-8">
              <button className={`w-full py-3.5 px-4 rounded-xl border flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${classes.button}`}>
                <Globe className="w-5 h-5" />
                <span className="font-semibold text-sm">Visit Website</span>
              </button>
              <button className={`w-full py-3.5 px-4 rounded-xl border flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${classes.button}`}>
                <Instagram className="w-5 h-5" />
                <span className="font-semibold text-sm">Instagram</span>
              </button>
            </div>

            {/* Section Bio */}
            <div className={`text-center text-sm leading-relaxed px-2 opacity-90 ${classes.textBody}`}>
              <p>{profile.bio || 'Your bio will appear here...'}</p>
            </div>
            
            {/* Pied de page factice */}
            <div className="mt-auto pt-8 flex justify-center opacity-30">
                <div className={`w-12 h-1 rounded-full ${classes.textBody === 'text-gray-300' ? 'bg-white' : 'bg-black'}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};