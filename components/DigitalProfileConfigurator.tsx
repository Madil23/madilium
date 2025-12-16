import React, { useState } from 'react';
import { Globe, Instagram, Send, Linkedin, Mail, Phone, MapPin, Briefcase, User } from 'lucide-react';

// --- LISTE DES 12 TEMPLATES (Avec des structures différentes) ---
const TEMPLATES = [
  { id: 'linkedin', name: 'Network Pro', icon: '👔', desc: 'Style LinkedIn classique' },
  { id: 'cinematic', name: 'Cinematic', icon: '🎬', desc: 'Plein écran immersif' },
  { id: 'artisan', name: 'Artisan / Manuel', icon: '🛠️', desc: 'Robuste et lisible' },
  { id: 'creative', name: 'Creative Blob', icon: '🎨', desc: 'Formes organiques' },
  { id: 'ceo', name: 'Executive CEO', icon: 'gem', desc: 'Minimalisme de luxe' },
  { id: 'developer', name: 'Dev Terminal', icon: '💻', desc: 'Style codeur rétro' },
  { id: 'instagram', name: 'Influencer', icon: '📸', desc: 'Visuel et centré' },
  { id: 'bento', name: 'Bento Grid', icon: '🍱', desc: 'Blocs modernes Apple' },
  { id: 'medical', name: 'Santé / Médical', icon: '🏥', desc: 'Propre et rassurant' },
  { id: 'lawyer', name: 'Juridique', icon: '⚖️', desc: 'Sérieux et traditionnel' },
  { id: 'sport', name: 'Coach Sportif', icon: '💪', desc: 'Dynamique et fort' },
  { id: 'restaurant', name: 'Hospitality', icon: '🍽️', desc: 'Élégant et accueillant' },
];

export const DigitalProfileConfigurator = () => {
  const [profile, setProfile] = useState({
    name: 'Alex Morgan',
    title: 'Architecte d\'Intérieur',
    company: 'Morgan Design Studio',
    bio: 'Transformer vos espaces en expériences uniques. Basé à Paris.',
    location: 'Paris, France',
    template: 'linkedin',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // --- LE MOTEUR DE RENDU (Chaque cas retourne un HTML différent) ---
  const renderTemplate = () => {
    switch (profile.template) {
      
      // 1. STYLE LINKEDIN (Network Pro) - Ultra Réaliste
      case 'linkedin':
        return (
          <div className="h-full bg-[#F3F2EF] text-black overflow-y-auto font-sans custom-scrollbar">
            {/* Bannière de couverture */}
            <div className="h-24 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80')] bg-cover bg-center relative">
               {/* Bouton retour simulé pour le réalisme */}
               <div className="absolute top-4 left-4 bg-black/40 p-1 rounded-full text-white backdrop-blur-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
               </div>
            </div>

            {/* En-tête Profil */}
            <div className="bg-white pb-4 mb-2 shadow-sm relative px-4">
              <div className="relative -top-12 mb-[-36px]">
                <div className="w-28 h-28 rounded-full border-[4px] border-white bg-white overflow-hidden shadow-sm inline-block relative">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" className="w-full h-full object-cover" />
                  {/* Badge "Open to work" (Cadre vert) - Optionnel */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#057642] opacity-0"></div> 
                </div>
              </div>

              <div className="mt-2">
                <h2 className="text-xl font-bold text-gray-900 leading-tight flex items-center gap-1">
                  {profile.name} 
                  <span className="text-gray-500 text-xs font-normal bg-gray-100 px-2 py-0.5 rounded-full ml-1">2e</span>
                </h2>
                <p className="text-sm text-gray-900 mt-1 leading-snug">{profile.title}</p>
                
                <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                  <span className="truncate max-w-[150px]">{profile.location}</span>
                  <span>•</span>
                  <span className="text-[#0a66c2] font-bold">Coordonnées</span>
                </div>

                <div className="flex items-center gap-1 mt-3 text-xs">
                  <span className="text-[#0a66c2] font-bold hover:underline cursor-pointer">500+ relations</span>
                </div>
              </div>

              {/* Boutons d'action Principaux */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-[#0a66c2] text-white py-1.5 rounded-full font-bold text-sm hover:bg-[#004182] transition-colors shadow-sm">
                  Se connecter
                </button>
                <button className="flex-1 border border-gray-600 text-gray-600 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 hover:border-gray-900 transition-colors">
                  Message
                </button>
                <button className="w-8 h-8 border border-gray-600 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100">
                   <span className="text-lg pb-2">...</span>
                </button>
              </div>
            </div>

            {/* Section Infos / Bio */}
            <div className="bg-white p-4 mb-2 shadow-sm">
              <h3 className="font-bold text-lg mb-2 text-gray-900">Infos</h3>
              <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-line">
                {profile.bio}
              </p>
            </div>

            {/* Section Activité (Stats fake pour le style) */}
            <div className="bg-white p-4 mb-2 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                 <div>
                    <h3 className="font-bold text-lg text-gray-900">Activité</h3>
                    <p className="text-xs text-[#0a66c2] font-bold hover:underline">1 245 abonnés</p>
                 </div>
                 <button className="text-xs border border-gray-600 text-gray-600 px-3 py-1 rounded-full font-bold">Voir tout</button>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                 <p className="font-bold text-gray-900 line-clamp-1">{profile.name} a partagé ceci</p>
                 <div className="mt-1 flex gap-2">
                    <div className="w-12 h-12 bg-gray-100 rounded-md bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200')] bg-cover"></div>
                    <p className="flex-1 text-xs line-clamp-2">Heureux d'annoncer notre nouveau partenariat avec Madilium pour transformer le networking digital ! 🚀 #Tech #Innovation</p>
                 </div>
              </div>
            </div>

            {/* Section Expérience (Dynamique avec les infos) */}
            <div className="bg-white p-4 mb-2 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Expérience</h3>
              
              <div className="flex gap-3 mb-4 last:mb-0">
                <div className="w-12 h-12 bg-gray-100 shrink-0 flex items-center justify-center">
                   {/* Logo Entreprise Simulé */}
                   <Briefcase className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                   <h4 className="font-bold text-sm text-gray-900">{profile.title}</h4>
                   <p className="text-sm text-gray-900">{profile.company}</p>
                   <p className="text-xs text-gray-500 mt-0.5">Janv. 2023 - Aujourd'hui • 1 an 2 mois</p>
                   <p className="text-xs text-gray-500">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Section Formation */}
            <div className="bg-white p-4 mb-8 shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Formation</h3>
              <div className="flex gap-3">
                 <div className="w-12 h-12 bg-gray-100 shrink-0 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                 </div>
                 <div>
                    <h4 className="font-bold text-sm text-gray-900">Université de Paris</h4>
                    <p className="text-sm text-gray-900">Master, Design & Communication</p>
                    <p className="text-xs text-gray-500 mt-0.5">2018 - 2020</p>
                 </div>
              </div>
            </div>
          </div>
        );

      // 2. STYLE CINEMATIC (Immersif / Netflix Style)
      case 'cinematic':
        return (
          <div className="h-full bg-black text-white overflow-hidden relative font-sans group">
            {/* Background Image avec effet de Zoom lent au survol */}
            <div className="absolute inset-0 overflow-hidden">
               <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" 
                  className="w-full h-full object-cover opacity-80 transition-transform duration-[20s] ease-linear group-hover:scale-110" 
                  alt="Background"
               />
               {/* Dégradé professionnel pour la lisibilité */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Contenu Overlay (Texte par-dessus l'image) */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-4 z-10">
              
              {/* Badge "FEATURED" style Cinema */}
              <div className="bg-[#E50914] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest mb-2 shadow-lg shadow-red-900/50">
                 Featured Talent
              </div>

              <div className="border-l-4 border-[#E50914] pl-5">
                {/* Nom scindé en 2 lignes pour effet dramatique */}
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                  {profile.name.split(' ')[0]}<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    {profile.name.split(' ')[1] || ''}
                  </span>
                </h2>
                <p className="text-gray-300 font-medium tracking-[0.2em] text-xs uppercase mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E50914]"></span>
                  {profile.title}
                </p>
              </div>

              {/* Bio style "Synopsis" */}
              <p className="text-gray-300 text-sm line-clamp-3 font-light opacity-90 leading-relaxed drop-shadow-md border-t border-white/10 pt-4 mt-2">
                "{profile.bio}"
              </p>

              {/* Boutons d'action style Player Vidéo */}
              <div className="w-full grid grid-cols-2 gap-3 mt-6">
                <button className="bg-white text-black py-3 px-4 font-bold uppercase tracking-widest text-[10px] hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 rounded-sm">
                   <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                   Showreel
                </button>
                <button className="backdrop-blur-md bg-white/10 border border-white/30 text-white py-3 px-4 font-bold uppercase tracking-widest text-[10px] hover:bg-white/20 transition-colors flex items-center justify-center gap-2 rounded-sm">
                   <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                   Contact
                </button>
              </div>
            </div>
          </div>
        );

      // 3. STYLE ARTISAN / MANUEL (Robuste, Chantier, Néo-Brutalisme)
      case 'artisan':
        return (
          <div className="h-full bg-[#f5f5f4] text-[#1c1917] overflow-y-auto font-sans p-6 border-[12px] border-[#1c1917] relative">
            {/* Texture subtile de fond pour faire "papier/mur" */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none"></div>

            <div className="relative z-10">
               {/* En-tête avec Logo encadré */}
               <div className="flex flex-col items-center mb-8">
                  <div className="w-24 h-24 bg-[#ea580c] border-4 border-[#1c1917] flex items-center justify-center text-white shadow-[4px_4px_0px_0px_#1c1917] mb-4">
                     <Briefcase className="w-12 h-12" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tighter text-center leading-none mb-1">
                     {profile.company || 'Morgan Construction'}
                  </h2>
                  <div className="bg-[#1c1917] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest transform -rotate-1">
                     {profile.title}
                  </div>
               </div>

               {/* Carte de visite "Scotchée" */}
               <div className="bg-white border-4 border-[#1c1917] p-5 mb-6 shadow-[8px_8px_0px_0px_rgba(28,25,23,0.2)] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#e5e5e5]/80 rotate-1 border border-gray-300/50 blur-[0.5px]"></div>
                  <h3 className="font-black uppercase text-sm text-[#ea580c] mb-2 flex items-center gap-2">
                     <User className="w-4 h-4" /> Contact Direct
                  </h3>
                  <p className="font-bold text-xl">{profile.name}</p>
                  <p className="font-medium text-gray-600 mt-1 text-sm border-t-2 border-dashed border-gray-300 pt-2 mt-2">
                     "{profile.bio}"
                  </p>
               </div>

               {/* Gros Boutons d'Action (Hard Shadows) */}
               <div className="space-y-4">
                  <button className="w-full py-4 bg-[#ea580c] border-4 border-[#1c1917] text-white font-black uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_#1c1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-3 group">
                     <Phone className="w-5 h-5 fill-current" />
                     Appeler maintenant
                  </button>
                  
                  <button className="w-full py-4 bg-white border-4 border-[#1c1917] text-[#1c1917] font-black uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_#1c1917] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-3">
                     <Mail className="w-5 h-5" />
                     Demander un Devis
                  </button>
               </div>

               {/* Pied de page Info */}
               <div className="mt-8 text-center border-t-4 border-[#1c1917] pt-4">
                  <p className="font-bold text-xs uppercase flex items-center justify-center gap-2">
                     <MapPin className="w-4 h-4 text-[#ea580c]" />
                     {profile.location}
                  </p>
                  <div className="mt-4 flex justify-center gap-1 opacity-50">
                     {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#1c1917]"></div>)}
                  </div>
               </div>
            </div>
          </div>
        );
        
      // 4. STYLE CEO / LUXE (Minimaliste, centré)
      case 'ceo':
        return (
          <div className="h-full bg-[#0a0a0a] text-white overflow-y-auto font-serif flex flex-col items-center pt-16 px-6">
            <div className="w-32 h-32 rounded-full border border-gray-800 p-1 mb-8">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" className="w-full h-full rounded-full object-cover grayscale opacity-80" />
            </div>
            <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-center mb-2">{profile.name}</h2>
            <p className="text-gray-500 text-xs tracking-[0.3em] uppercase mb-12">{profile.title}</p>
            
            <div className="w-full space-y-6 max-w-xs">
              <button className="w-full py-3 border-b border-gray-800 text-gray-400 hover:text-white hover:border-white transition-all text-xs tracking-widest uppercase text-center">
                Biography
              </button>
              <button className="w-full py-3 border-b border-gray-800 text-gray-400 hover:text-white hover:border-white transition-all text-xs tracking-widest uppercase text-center">
                Portfolio
              </button>
              <button className="w-full py-3 border-b border-gray-800 text-gray-400 hover:text-white hover:border-white transition-all text-xs tracking-widest uppercase text-center">
                Press Kit
              </button>
            </div>
            <div className="mt-auto mb-8 opacity-30">
               <Briefcase className="w-6 h-6" />
            </div>
          </div>
        );

      // 5. STYLE DEVELOPER (Terminal)
      case 'developer':
        return (
          <div className="h-full bg-[#1e1e1e] text-[#00ff41] overflow-y-auto font-mono p-6">
            <div className="border-b border-[#00ff41]/30 pb-4 mb-6">
              <p className="text-xs opacity-50">Last login: {new Date().toLocaleDateString()} on ttys000</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-white mb-2"><span className="text-pink-500">const</span> profile <span className="text-pink-500">=</span> {'{'}</p>
                <div className="pl-6 space-y-1 text-sm text-yellow-300">
                  <p>name: <span className="text-green-300">'{profile.name}'</span>,</p>
                  <p>role: <span className="text-green-300">'{profile.title}'</span>,</p>
                  <p>location: <span className="text-green-300">'{profile.location}'</span>,</p>
                </div>
                <p className="text-white mt-2">{'}'};</p>
              </div>
              
              <div className="bg-black/50 p-4 rounded border border-[#00ff41]/20">
                <p className="text-gray-400 text-xs mb-2">// Bio</p>
                <p className="text-sm opacity-80">{profile.bio}</p>
              </div>

              <div className="space-y-3">
                <button className="w-full py-2 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors text-sm text-left px-4 flex items-center gap-3">
                  <span className="text-pink-500">$</span> ./view-github.sh
                </button>
                <button className="w-full py-2 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-colors text-sm text-left px-4 flex items-center gap-3">
                  <span className="text-pink-500">$</span> ./send-email.sh
                </button>
              </div>
            </div>
          </div>
        );

      // 6. STYLE BENTO (Grille Apple/Moderne)
      case 'bento':
        return (
          <div className="h-full bg-gray-50 text-gray-900 overflow-y-auto font-sans p-4">
             <div className="grid grid-cols-2 gap-3 h-full content-start">
                <div className="col-span-2 bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center text-center">
                   <div className="w-20 h-20 bg-blue-100 rounded-full mb-3 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80" className="w-full h-full object-cover" />
                   </div>
                   <h2 className="font-bold text-lg leading-tight">{profile.name}</h2>
                   <p className="text-gray-500 text-xs">{profile.title}</p>
                </div>
                
                <div className="bg-blue-600 p-4 rounded-3xl shadow-sm flex flex-col justify-between text-white aspect-square">
                   <Linkedin className="w-6 h-6" />
                   <span className="font-bold text-sm">Connect</span>
                </div>
                
                <div className="bg-black p-4 rounded-3xl shadow-sm flex flex-col justify-between text-white aspect-square">
                   <Globe className="w-6 h-6" />
                   <span className="font-bold text-sm">Website</span>
                </div>

                <div className="col-span-2 bg-white p-5 rounded-3xl shadow-sm text-sm text-gray-600 leading-relaxed">
                   {profile.bio}
                </div>

                <button className="col-span-2 bg-emerald-500 text-white p-4 rounded-[2rem] font-bold shadow-lg shadow-emerald-200 mt-2">
                   Contact Me
                </button>
             </div>
          </div>
        );

      // 7. STYLE MEDICAL (Propre, rassurant)
      case 'medical':
         return (
            <div className="h-full bg-white text-slate-800 overflow-y-auto font-sans relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>
               <div className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h2 className="text-xl font-bold text-slate-900">{profile.name}</h2>
                        <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase">{profile.title}</span>
                     </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                     <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm"><Phone size={14} /></div>
                        <div className="text-sm font-medium">Prendre RDV</div>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm"><MapPin size={14} /></div>
                        <div className="text-sm font-medium">Cabinet Paris 8</div>
                     </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                     <h3 className="font-bold text-sm mb-2 text-slate-400 uppercase tracking-wider">Spécialités</h3>
                     <p className="text-sm leading-relaxed text-slate-600">{profile.bio}</p>
                  </div>
               </div>
            </div>
         );

      // 8. STYLE RESTAURANT (Élégant)
      case 'restaurant':
         return (
            <div className="h-full bg-[#1a1a1a] text-[#e5e5e5] overflow-y-auto font-serif text-center p-6 border-double border-4 border-[#d4af37] m-2">
               <div className="border-b border-[#d4af37] pb-6 mb-6">
                  <h2 className="text-3xl font-bold text-[#d4af37] mb-1 italic">{profile.company}</h2>
                  <p className="text-xs tracking-[0.3em] uppercase text-white">Fine Dining</p>
               </div>
               
               <p className="text-sm italic text-[#a3a3a3] mb-8">"{profile.bio}"</p>

               <div className="space-y-4 font-sans">
                  <button className="w-full py-3 bg-[#d4af37] text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors">
                     Réserver une table
                  </button>
                  <button className="w-full py-3 border border-[#d4af37] text-[#d4af37] font-bold uppercase tracking-wider text-xs hover:bg-[#d4af37] hover:text-black transition-colors">
                     Voir le Menu
                  </button>
               </div>
               
               <div className="mt-12 text-xs text-[#666]">
                  <p>{profile.location}</p>
                  <p>Ouvert 19h - 23h</p>
               </div>
            </div>
         );

      // DEFAUT (MODERN)
      default:
        return (
          <div className="h-full bg-white text-gray-900 overflow-y-auto font-sans p-6 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-1">{profile.name}</h2>
            <p className="text-gray-500 text-sm mb-6">{profile.title}</p>
            <div className="w-full space-y-3">
              <button className="w-full py-3 bg-black text-white rounded-xl font-medium">Site Web</button>
              <button className="w-full py-3 bg-gray-100 text-black rounded-xl font-medium">Email</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in pb-20">
      
      {/* ----- COLONNE GAUCHE : ÉDITEUR ----- */}
      <div className="space-y-8">
        <div className="bg-stone-900/50 p-6 rounded-3xl border border-white/5">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-cyan-400" />
            Détails du Profil
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
               <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Nom complet</label>
               <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" />
            </div>
            <div className="col-span-2 md:col-span-1">
               <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Titre / Poste</label>
               <input type="text" name="title" value={profile.title} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" />
            </div>
            <div className="col-span-2">
               <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Entreprise</label>
               <input type="text" name="company" value={profile.company} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" />
            </div>
            <div className="col-span-2">
               <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Localisation</label>
               <input type="text" name="location" value={profile.location} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none" />
            </div>
            <div className="col-span-2">
               <label className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Bio Courte</label>
               <textarea name="bio" rows={3} value={profile.bio} onChange={handleChange} className="w-full bg-stone-950 border border-white/10 rounded-lg px-3 py-2 text-white focus:border-cyan-500 outline-none resize-none" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
             <Briefcase className="w-5 h-5 text-cyan-400" />
             Choisir le Design ({TEMPLATES.length})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => setProfile({ ...profile, template: t.id })}
                className={`p-4 rounded-xl border text-left transition-all relative group flex flex-col gap-2
                  ${profile.template === t.id ? 'border-cyan-500 bg-stone-800 ring-1 ring-cyan-500' : 'border-stone-800 bg-stone-900/50 hover:bg-stone-800'}
                `}
              >
                <span className="text-2xl">{t.icon}</span>
                <div>
                   <span className={`text-sm font-bold block ${profile.template === t.id ? 'text-white' : 'text-gray-300'}`}>{t.name}</span>
                   <span className="text-[10px] text-gray-500 leading-tight">{t.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----- COLONNE DROITE : APERÇU ----- */}
      <div className="sticky top-24 flex justify-center">
        <div className="relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-2xl rounded-full opacity-50"></div>
           
           {/* CADRE TÉLÉPHONE */}
           <div className="relative w-[320px] h-[640px] bg-black rounded-[3rem] border-8 border-stone-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
              
              {/* STATUS BAR (Fake) */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 z-50 flex justify-between items-center px-6">
                 <span className="text-[10px] text-white font-medium">9:41</span>
                 <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                 </div>
              </div>

              {/* BARRE EN BAS (Home indicator) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50"></div>

              {/* CONTENU DU TEMPLATE */}
              {renderTemplate()}

           </div>
           
           <div className="text-center mt-6">
              <p className="text-gray-500 text-sm font-mono">Aperçu en temps réel</p>
           </div>
        </div>
      </div>
    </div>
  );
};