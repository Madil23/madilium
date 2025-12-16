import React, { useState } from 'react';
import { Globe, Instagram, Send, Palette, Layout, Smartphone } from 'lucide-react';

// --- LISTE DES 15 TEMPLATES ---
const TEMPLATES = [
  { id: 'modern', name: 'Modern Clean', color: 'bg-stone-100' },
  { id: 'neon', name: 'Cyberpunk Neon', color: 'bg-black' },
  { id: 'luxury', name: 'Luxury Gold', color: 'bg-neutral-900' },
  { id: 'glass', name: 'Glassmorphism', color: 'bg-blue-300' },
  { id: 'retro', name: 'Retro 90s', color: 'bg-yellow-400' },
  { id: 'nature', name: 'Organic Eco', color: 'bg-emerald-100' },
  { id: 'vibrant', name: 'Vibrant Gradient', color: 'bg-purple-500' },
  { id: 'dark_stealth', name: 'Dark Stealth', color: 'bg-stone-800' },
  { id: 'pastel', name: 'Soft Pastel', color: 'bg-rose-200' },
  { id: 'corporate', name: 'Corporate Pro', color: 'bg-blue-800' },
  { id: 'monochrome', name: 'Monochrome', color: 'bg-white' },
  { id: 'clay', name: 'Neumorphism', color: 'bg-gray-200' },
  { id: 'editorial', name: 'Editorial Serif', color: 'bg-orange-50' },
  { id: 'tech', name: 'Tech Outline', color: 'bg-slate-900' },
  { id: 'bento', name: 'Bento Grid', color: 'bg-indigo-50' },
];

export const DigitalProfileConfigurator = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Morgan',
    title: 'Digital Artist',
    bio: 'Creating immersive digital experiences. Based in Paris.',
    template: 'neon',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // --- LOGIQUE DES STYLES UNIQUES (Le Moteur Graphique) ---
  const getTemplateStyle = () => {
    switch (profile.template) {
      case 'neon': // Style Cyberpunk
        return {
          container: 'bg-stone-950 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]',
          font: 'font-mono',
          avatar: 'rounded-xl ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] grayscale hover:grayscale-0',
          title: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-black uppercase tracking-widest',
          sub: 'text-cyan-600',
          body: 'text-gray-400',
          button: 'bg-black border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black rounded-none uppercase tracking-widest text-xs',
          bgEffect: 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black',
        };
      case 'luxury': // Style Luxe Or & Noir
        return {
          container: 'bg-[#0a0a0a] border-amber-600/50',
          font: 'font-serif',
          avatar: 'rounded-full ring-4 ring-amber-500/50 grayscale-[0.5]',
          title: 'text-amber-500 font-medium tracking-[0.2em] uppercase',
          sub: 'text-amber-200/60 italic',
          body: 'text-neutral-400 font-light',
          button: 'bg-transparent border border-amber-700 text-amber-500 hover:bg-amber-900/20 rounded-sm',
          bgEffect: 'bg-gradient-to-b from-neutral-900 to-black',
        };
      case 'glass': // Style Verre (iPhone style)
        return {
          container: 'bg-gradient-to-br from-purple-500 to-blue-600 border-white/20',
          font: 'font-sans',
          avatar: 'rounded-[2rem] ring-4 ring-white/30 shadow-xl',
          title: 'text-white font-bold drop-shadow-md',
          sub: 'text-blue-100',
          body: 'text-white/90 font-medium',
          button: 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-2xl shadow-lg',
          bgEffect: '',
        };
      case 'retro': // Style Années 90 / Pixel
        return {
          container: 'bg-[#ffcc00] border-black border-4',
          font: 'font-mono',
          avatar: 'rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
          title: 'text-black font-black uppercase tracking-tighter',
          sub: 'bg-white text-black px-1 inline-block font-bold border-2 border-black',
          body: 'text-black font-bold',
          button: 'bg-white border-4 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none rounded-none',
          bgEffect: 'bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]',
        };
      case 'nature': // Style Écologique Doux
        return {
          container: 'bg-[#f1f8e9] border-[#a5d6a7]',
          font: 'font-sans',
          avatar: 'rounded-[2rem] ring-4 ring-[#81c784] ring-offset-4 ring-offset-[#f1f8e9]',
          title: 'text-[#2e7d32] font-bold tracking-tight',
          sub: 'text-[#558b2f]',
          body: 'text-[#33691e]',
          button: 'bg-[#c8e6c9] text-[#1b5e20] hover:bg-[#a5d6a7] rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm',
          bgEffect: '',
        };
      case 'vibrant': // Style Instagram Gradient
        return {
          container: 'bg-white border-purple-200',
          font: 'font-sans',
          avatar: 'rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600',
          title: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-extrabold',
          sub: 'text-purple-400 font-medium',
          body: 'text-gray-600',
          button: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 rounded-full border-none hover:scale-105',
          bgEffect: '',
        };
      case 'dark_stealth': // Style Militaire Sombre
        return {
          container: 'bg-[#1c1c1c] border-[#333]',
          font: 'font-sans',
          avatar: 'rounded-md ring-1 ring-[#444] opacity-80',
          title: 'text-[#e0e0e0] font-bold uppercase tracking-widest text-sm',
          sub: 'text-[#666] text-xs uppercase',
          body: 'text-[#888] text-sm font-mono',
          button: 'bg-[#2a2a2a] border-l-4 border-l-cyan-700 text-gray-300 hover:bg-[#333] rounded-sm text-left px-6',
          bgEffect: '',
        };
      case 'pastel': // Style Doux et Rond
        return {
          container: 'bg-[#fff0f5] border-pink-200',
          font: 'font-sans',
          avatar: 'rounded-full ring-8 ring-white shadow-sm',
          title: 'text-slate-700 font-black tracking-tight text-3xl',
          sub: 'text-pink-400 font-bold',
          body: 'text-slate-500',
          button: 'bg-white text-slate-600 hover:bg-pink-100 hover:text-pink-500 rounded-3xl shadow-sm border border-pink-100 font-bold',
          bgEffect: '',
        };
      case 'corporate': // Style Entreprise Sérieux
        return {
          container: 'bg-slate-50 border-slate-300',
          font: 'font-sans',
          avatar: 'rounded-lg ring-1 ring-slate-200 shadow-md',
          title: 'text-slate-900 font-bold',
          sub: 'text-blue-700 font-semibold uppercase text-xs tracking-wider',
          body: 'text-slate-600 text-sm leading-relaxed',
          button: 'bg-blue-700 text-white hover:bg-blue-800 rounded-md shadow-lg shadow-blue-900/20',
          bgEffect: 'bg-slate-100',
        };
      case 'monochrome': // Style Noir et Blanc Artistique
        return {
          container: 'bg-white border-black',
          font: 'font-sans',
          avatar: 'rounded-none filter grayscale contrast-125 border-b-4 border-black',
          title: 'text-black font-black italic text-4xl tracking-tighter',
          sub: 'text-black bg-gray-200 px-2 font-medium',
          body: 'text-black font-medium border-l-2 border-black pl-4',
          button: 'bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-none transition-colors duration-0',
          bgEffect: '',
        };
      case 'clay': // Style Neumorphism (Soft UI)
        return {
          container: 'bg-[#e0e5ec] border-white/40',
          font: 'font-sans',
          avatar: 'rounded-full shadow-[9px_9px_16px_rgb(163,177,198),-9px_-9px_16px_rgba(255,255,255,0.5)] border-4 border-[#e0e5ec]',
          title: 'text-slate-600 font-bold',
          sub: 'text-slate-400',
          body: 'text-slate-500',
          button: 'bg-[#e0e5ec] text-slate-600 rounded-xl shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] border-none',
          bgEffect: '',
        };
      case 'editorial': // Style Magazine de Mode
        return {
          container: 'bg-[#fdfbf7] border-stone-200',
          font: 'font-serif',
          avatar: 'aspect-[3/4] rounded-none object-cover border border-stone-800 p-1',
          title: 'text-stone-900 font-serif text-4xl italic',
          sub: 'text-stone-500 font-sans text-xs uppercase tracking-[0.3em] border-b border-stone-300 pb-2 mb-2',
          body: 'text-stone-600 font-serif leading-loose',
          button: 'bg-transparent border-b border-stone-900 text-stone-900 hover:text-stone-500 rounded-none text-left px-0',
          bgEffect: '',
        };
      case 'tech': // Style Schéma Technique
        return {
          container: 'bg-[#0f172a] border-blue-500/30',
          font: 'font-mono',
          avatar: 'rounded-full border border-dashed border-blue-500 p-1 opacity-80',
          title: 'text-blue-400 font-normal',
          sub: 'text-slate-500 text-xs',
          body: 'text-slate-400 text-xs border-l border-blue-500/20 pl-2',
          button: 'bg-slate-900/50 border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 rounded-sm text-xs',
          bgEffect: 'bg-[linear-gradient(rgba(30,58,138,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,0.1)_1px,transparent_1px)] [background-size:20px_20px]',
        };
      case 'bento': // Style Grille Apple/Bento
        return {
          container: 'bg-gray-100 border-gray-200',
          font: 'font-sans',
          avatar: 'rounded-[20px] shadow-sm bg-white p-1',
          title: 'text-gray-900 font-bold tracking-tight',
          sub: 'text-gray-500 font-medium',
          body: 'text-gray-600 bg-white p-3 rounded-2xl shadow-sm text-sm',
          button: 'bg-white text-gray-900 hover:bg-gray-50 rounded-2xl shadow-sm border border-gray-100 font-semibold',
          bgEffect: '',
        };
      default: // Modern Minimal (Fallback)
        return {
          container: 'bg-white border-gray-200',
          font: 'font-sans',
          avatar: 'rounded-full ring-4 ring-gray-50',
          title: 'text-gray-900 font-bold',
          sub: 'text-gray-500',
          body: 'text-gray-600',
          button: 'bg-gray-50 text-gray-900 hover:bg-gray-100 rounded-xl border border-gray-200',
          bgEffect: '',
        };
    }
  };

  const style = getTemplateStyle();

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in pb-12">
      {/* ----- COLONNE GAUCHE : ÉDITEUR ----- */}
      <div className="space-y-8">
        <div className="bg-stone-900/50 p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-cyan-400" />
            Profile Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Full Name</label>
              <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Job Title</label>
              <input type="text" name="title" value={profile.title} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">Bio</label>
              <textarea name="bio" rows={3} value={profile.bio} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyan-500 outline-none transition-all resize-none" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-cyan-400" />
            Choose Style ({TEMPLATES.length})
          </h3>
          <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => setProfile({ ...profile, template: t.id })}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group
                  ${profile.template === t.id ? 'border-cyan-500 ring-1 ring-cyan-500 bg-stone-800' : 'border-stone-800 bg-stone-900 hover:border-stone-600'}
                `}
              >
                <div className={`w-full h-12 rounded-lg mb-2 ${t.color} shadow-inner`}></div>
                <span className={`text-[10px] font-bold uppercase tracking-wider block truncate ${profile.template === t.id ? 'text-white' : 'text-gray-500'}`}>
                    {t.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----- COLONNE DROITE : PRÉVISUALISATION LIVE ----- */}
      <div className="sticky top-24">
        <div className="bg-stone-900 rounded-[3rem] p-8 border border-white/5 flex items-center justify-center relative shadow-2xl shadow-black/50">
           <div className="absolute top-6 flex gap-2 opacity-30">
              <Smartphone className="w-4 h-4 text-white" />
              <span className="text-xs text-white font-mono">LIVE PREVIEW</span>
           </div>

           {/* LE TÉLÉPHONE */}
           <div className={`relative w-[300px] h-[600px] rounded-[2.5rem] border-[8px] overflow-hidden shadow-2xl transition-all duration-500 ${style.container} ${style.font}`}>
              
              {/* Fond à effets */}
              <div className={`absolute inset-0 z-0 ${style.bgEffect}`}></div>

              {/* Contenu scrollable */}
              <div className="relative z-10 h-full flex flex-col p-6 overflow-y-auto no-scrollbar">
                 
                 {/* Header Profil */}
                 <div className="mt-8 mb-8 flex flex-col items-center text-center">
                    <div className={`w-28 h-28 mb-4 overflow-hidden transition-all duration-300 ${style.avatar}`}>
                       <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                    </div>
                    <h2 className={`text-2xl leading-tight mb-1 transition-all ${style.title}`}>
                       {profile.name}
                    </h2>
                    <p className={`text-sm transition-all ${style.sub}`}>
                       {profile.title}
                    </p>
                 </div>

                 {/* Liens */}
                 <div className="space-y-4 mb-8">
                    <button className={`w-full py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 ${style.button}`}>
                       <Globe className="w-4 h-4" />
                       <span className="font-semibold text-sm">Portfolio</span>
                    </button>
                    <button className={`w-full py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 ${style.button}`}>
                       <Instagram className="w-4 h-4" />
                       <span className="font-semibold text-sm">Instagram</span>
                    </button>
                    <button className={`w-full py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 ${style.button}`}>
                       <Layout className="w-4 h-4" />
                       <span className="font-semibold text-sm">LinkedIn</span>
                    </button>
                 </div>

                 {/* Bio */}
                 <div className="mt-auto mb-4">
                    <p className={`text-center text-sm px-2 ${style.body}`}>
                       "{profile.bio}"
                    </p>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </div>
  );
};