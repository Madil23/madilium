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

      // 4. STYLE CREATIVE / BLOB (Organique, Artistique, Liquide)
      case 'creative':
        return (
          <div className="h-full bg-[#fae8ff] text-slate-800 overflow-hidden relative font-sans">
             {/* Formes d'arrière-plan (Blobs) */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
             <div className="absolute top-40 -left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
             <div className="absolute -bottom-10 right-10 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>

             <div className="relative z-10 h-full overflow-y-auto custom-scrollbar flex flex-col p-6">
                
                {/* Avatar Asymétrique */}
                <div className="self-center mb-6 relative">
                   <div className="w-32 h-32 bg-white p-1 shadow-xl rotate-3 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden transition-all hover:rotate-0 hover:scale-105 duration-500">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" className="w-full h-full object-cover scale-110" />
                   </div>
                   <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold rotate-6">
                      Hello! 👋
                   </div>
                </div>

                <div className="text-center mb-8">
                   <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1">
                      {profile.name}
                   </h2>
                   <p className="font-medium text-slate-600 italic">
                      ✨ {profile.title} ✨
                   </p>
                </div>

                {/* Carte Bio en Verre (Glassmorphism) */}
                <div className="bg-white/30 backdrop-blur-md border border-white/40 p-5 rounded-3xl shadow-lg mb-6 text-sm text-slate-700 font-medium leading-relaxed">
                   {profile.bio}
                </div>

                {/* Boutons Flottants */}
                <div className="space-y-3 mt-auto">
                   <button className="w-full py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-purple-900 font-bold rounded-2xl shadow-lg shadow-purple-500/10 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      Voir mon Portfolio
                   </button>
                   <button className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-1">
                      Collaborer
                   </button>
                </div>
             </div>
          </div>
        );

      // 5. STYLE CEO / EXECUTIVE (Luxe, Minimaliste, Fashion)
      case 'ceo':
        return (
          <div className="h-full bg-[#050505] text-white overflow-y-auto font-serif flex flex-col items-center pt-12 px-8 relative">
            {/* Cadre fin décoratif */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>

            <div className="mb-8 relative group cursor-pointer">
              <div className="w-28 h-28 rounded-full border-[0.5px] border-white/30 p-2 transition-all duration-700 group-hover:border-white/60">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" className="w-full h-full rounded-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <h2 className="text-xl font-light tracking-[0.3em] uppercase text-center mb-3">
               {profile.name}
            </h2>
            
            <div className="h-[1px] w-12 bg-white/30 mb-3"></div>

            <p className="text-white/50 text-[10px] tracking-[0.4em] uppercase mb-10 text-center">
               {profile.title}
            </p>
            
            <div className="w-full space-y-5 max-w-[240px]">
              <button className="w-full py-3 border-b border-white/10 text-white/60 hover:text-white hover:border-white transition-all duration-500 text-[10px] tracking-[0.25em] uppercase text-center hover:bg-white/5">
                Biography
              </button>
              <button className="w-full py-3 border-b border-white/10 text-white/60 hover:text-white hover:border-white transition-all duration-500 text-[10px] tracking-[0.25em] uppercase text-center hover:bg-white/5">
                Works & Legacy
              </button>
              <button className="w-full py-3 border-b border-white/10 text-white/60 hover:text-white hover:border-white transition-all duration-500 text-[10px] tracking-[0.25em] uppercase text-center hover:bg-white/5">
                Press Inquiries
              </button>
            </div>

            <div className="mt-auto mb-10 opacity-20">
               <span className="font-serif italic text-2xl">M</span>
            </div>
          </div>
        );

      // 6. STYLE DEVELOPER (Terminal, Matrix, Geek)
      case 'developer':
        return (
          <div className="h-full bg-[#1e1e1e] text-[#d4d4d4] overflow-y-auto font-mono p-4 text-xs leading-relaxed selection:bg-[#264f78]">
            {/* Barre de titre fenêtre */}
            <div className="flex gap-2 mb-4 opacity-50 border-b border-white/10 pb-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
               <span className="ml-2 text-[10px]">user — -zsh — 80x24</span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2">
                   <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">whoami</span>
                </p>
                <div className="bg-[#2d2d2d] p-3 rounded border-l-2 border-green-500 shadow-lg">
                   <p className="text-green-400 font-bold text-sm">✓ {profile.name}</p>
                   <p className="opacity-70 mt-1">{profile.title} @ {profile.company}</p>
                </div>
              </div>

              <div>
                 <p className="mb-2">
                   <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">cat</span> profile.json
                </p>
                <div className="pl-2 border-l border-white/10">
                   <p><span className="text-pink-500">const</span> <span className="text-blue-400">data</span> = {'{'}</p>
                   <div className="pl-4 text-[#ce9178]">
                      <p>"location": <span className="text-[#b5cea8]">"{profile.location}"</span>,</p>
                      <p>"status": <span className="text-[#b5cea8]">"Open to work"</span>,</p>
                      <p>"skills": [<span className="text-[#b5cea8]">"React"</span>, <span className="text-[#b5cea8]">"Node"</span>, <span className="text-[#b5cea8]">"TS"</span>]</p>
                   </div>
                   <p>{'};'}</p>
                </div>
              </div>

              <div>
                 <p className="mb-2">
                   <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">sh</span> run-contact.sh
                </p>
                <div className="space-y-2 mt-2">
                   <button className="w-full text-left bg-[#333] hover:bg-[#444] p-2 rounded flex gap-2 items-center group transition-colors border border-transparent hover:border-green-500/50">
                      <span className="text-green-500 group-hover:animate-pulse">▶</span> 
                      <span>GitHub Profile</span>
                   </button>
                   <button className="w-full text-left bg-[#333] hover:bg-[#444] p-2 rounded flex gap-2 items-center group transition-colors border border-transparent hover:border-blue-500/50">
                      <span className="text-blue-500 group-hover:animate-pulse">▶</span> 
                      <span>Send Email</span>
                   </button>
                </div>
              </div>

              <div className="mt-8 animate-pulse">
                 <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> <span className="w-2 h-4 bg-gray-500 inline-block align-middle ml-1"></span>
              </div>
            </div>
          </div>
        );

      // 7. STYLE INSTAGRAM / INFLUENCER (Visuel, Familier)
      case 'instagram':
        return (
          <div className="h-full bg-white text-black overflow-y-auto font-sans">
             {/* Top Bar (Pseudo) */}
             <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100 sticky top-0 bg-white z-10">
                <span className="font-bold text-lg">{profile.name.toLowerCase().replace(' ', '_')}</span>
                <div className="flex gap-4">
                   <svg aria-label="Notifications" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.956-5.197 7.227-.255.225-.509.48-.777.782-.694.776-1.222 1.372-1.714 1.913a3.67 3.67 0 0 1-3.618 0c-.492-.54-1.02-1.137-1.714-1.913-.268-.302-.522-.557-.777-.782C5.152 14.078 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.533.85.847.744.832 1.545 1.729 2.152 2.404a5.672 5.672 0 0 0 7.014 0c.61-.678 1.414-1.576 2.152-2.404.281-.314.567-.601.85-.847 2.464-2.143 5.015-4.36 5.015-7.97a6.985 6.985 0 0 0-6.756-5.218Z"></path></svg>
                   <svg aria-label="Options" className="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="20" y2="20"></line></svg>
                </div>
             </div>

             {/* Header Profil */}
             <div className="px-4 py-4">
                <div className="flex items-center justify-between mb-4">
                   {/* Avatar avec Story Ring */}
                   <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-orange-500 to-fuchsia-600">
                      <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1529139574466-a302d2753cd4?w=800&q=80" className="w-full h-full object-cover" />
                      </div>
                   </div>
                   {/* Stats */}
                   <div className="flex flex-1 justify-around text-center ml-4">
                      <div>
                         <div className="font-bold text-lg">1,254</div>
                         <div className="text-xs text-gray-900">Posts</div>
                      </div>
                      <div>
                         <div className="font-bold text-lg">45.2K</div>
                         <div className="text-xs text-gray-900">Followers</div>
                      </div>
                      <div>
                         <div className="font-bold text-lg">342</div>
                         <div className="text-xs text-gray-900">Following</div>
                      </div>
                   </div>
                </div>

                {/* Bio */}
                <div>
                   <h1 className="font-bold text-sm">{profile.name}</h1>
                   <div className="text-sm text-gray-500">{profile.title}</div>
                   <div className="text-sm whitespace-pre-line mt-1">
                      {profile.bio}
                      <br/>📍 {profile.location}
                      <br/>👇 Check my links!
                   </div>
                   <div className="mt-1 font-bold text-sm text-[#00376b] hover:underline cursor-pointer">
                      madilium.com/profile
                   </div>
                </div>

                {/* Boutons Action */}
                <div className="flex gap-2 mt-4">
                   <button className="flex-1 bg-[#efefef] hover:bg-[#dbdbdb] py-1.5 rounded-lg text-sm font-semibold transition-colors">
                      Follow
                   </button>
                   <button className="flex-1 bg-[#efefef] hover:bg-[#dbdbdb] py-1.5 rounded-lg text-sm font-semibold transition-colors">
                      Message
                   </button>
                   <button className="bg-[#efefef] hover:bg-[#dbdbdb] px-2 rounded-lg text-sm font-semibold transition-colors">
                      <User className="w-4 h-4" />
                   </button>
                </div>
             </div>

             {/* Highlights (Stories à la une) */}
             <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar mb-4">
                {[1,2,3,4].map((i) => (
                   <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 p-1">
                         <div className="w-full h-full rounded-full bg-gray-300 overflow-hidden">
                            <img src={`https://picsum.photos/seed/${i+50}/200`} className="w-full h-full object-cover" />
                         </div>
                      </div>
                      <span className="text-xs">Travel {i}</span>
                   </div>
                ))}
             </div>

             {/* Tab Bar (Grille / Reels) */}
             <div className="flex border-t border-gray-200">
                <div className="flex-1 py-3 flex justify-center border-b border-black">
                   <svg aria-label="Posts" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                </div>
                <div className="flex-1 py-3 flex justify-center text-gray-400">
                   <svg aria-label="Reels" height="24" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path></svg>
                </div>
             </div>

             {/* Grille Photo */}
             <div className="grid grid-cols-3 gap-0.5 mb-2">
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                   <div key={i} className="aspect-square bg-gray-100 relative group overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i+10}/300`} className="w-full h-full object-cover" />
                   </div>
                ))}
             </div>
          </div>
        );

      // 8. STYLE BENTO GRID (Apple, Moderne, Modulaire)
      case 'bento':
        return (
          <div className="h-full bg-[#f2f2f7] text-gray-900 overflow-y-auto font-sans p-4 custom-scrollbar">
             <div className="grid grid-cols-2 gap-3 pb-8">
                
                {/* Carte Principale Profil (Prend 2 colonnes) */}
                <div className="col-span-2 bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-50 to-transparent"></div>
                   <div className="w-24 h-24 bg-white rounded-full mb-3 p-1 shadow-sm relative z-10">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80" className="w-full h-full rounded-full object-cover" />
                   </div>
                   <h2 className="font-bold text-xl leading-tight relative z-10">{profile.name}</h2>
                   <p className="text-gray-500 text-sm relative z-10">{profile.title}</p>
                   <div className="flex gap-2 mt-4 relative z-10">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">UI/UX</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">Product</span>
                   </div>
                </div>
                
                {/* Carte LinkedIn (Bleu) */}
                <div className="bg-[#0077b5] p-4 rounded-3xl shadow-sm flex flex-col justify-between text-white aspect-square hover:opacity-90 transition-opacity cursor-pointer relative group">
                   <Linkedin className="w-8 h-8" />
                   <div>
                      <span className="block text-xs opacity-80 uppercase tracking-wider">Connect on</span>
                      <span className="font-bold text-lg">LinkedIn</span>
                   </div>
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">↗</div>
                </div>
                
                {/* Carte Site Web (Noir) */}
                <div className="bg-black p-4 rounded-3xl shadow-sm flex flex-col justify-between text-white aspect-square hover:opacity-90 transition-opacity cursor-pointer relative group">
                   <Globe className="w-8 h-8" />
                   <div>
                      <span className="block text-xs opacity-80 uppercase tracking-wider">Visit my</span>
                      <span className="font-bold text-lg">Portfolio</span>
                   </div>
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">↗</div>
                </div>

                {/* Carte Bio (Prend 2 colonnes) */}
                <div className="col-span-2 bg-white p-5 rounded-3xl shadow-sm text-sm text-gray-600 leading-relaxed flex items-start gap-3">
                   <div className="text-2xl">❝</div>
                   <p className="pt-1">{profile.bio}</p>
                </div>

                {/* Carte Map (Image) */}
                <div className="col-span-2 h-32 bg-gray-200 rounded-3xl shadow-sm overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" className="w-full h-full object-cover opacity-80" />
                   <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold">{profile.location}</span>
                   </div>
                </div>

                {/* Carte Email (Large) */}
                <div className="col-span-2 bg-[#34c759] text-white p-4 rounded-[2rem] shadow-lg shadow-green-500/20 flex items-center justify-between cursor-pointer hover:bg-[#30b753] transition-colors">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                         <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-bold">Contact Me</span>
                   </div>
                   <span className="bg-white text-[#34c759] px-4 py-2 rounded-full text-xs font-bold">Email</span>
                </div>
             </div>
          </div>
        );

        // 9. STYLE MÉDICAL / SANTÉ (Propre, Rassurant, Doctolib-like)
      case 'medical':
         return (
            <div className="h-full bg-slate-50 text-slate-800 overflow-y-auto font-sans relative">
               {/* En-tête colorée courbe */}
               <div className="h-32 bg-gradient-to-r from-[#0096c7] to-[#00b4d8] rounded-b-[40%] relative shrink-0"></div>
               
               <div className="px-6 relative z-10 -mt-16 flex flex-col h-full">
                  {/* Carte Profil Flottante */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 text-center mb-6">
                     <div className="w-24 h-24 mx-auto bg-white rounded-full p-1 -mt-16 mb-3 shadow-sm relative">
                        <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" className="w-full h-full rounded-full object-cover" />
                        <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px]">✓</div>
                     </div>
                     
                     <h2 className="text-xl font-bold text-slate-900 mb-1">Dr. {profile.name}</h2>
                     <p className="text-[#0096c7] font-semibold text-sm mb-4 uppercase tracking-wide">{profile.title}</p>
                     
                     <div className="flex justify-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Chirurgie</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">Esthétique</span>
                     </div>
                  </div>
                  
                  {/* Bouton RDV Principal */}
                  <button className="w-full bg-[#0077b6] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/10 mb-6 flex items-center justify-center gap-2 hover:bg-[#023e8a] transition-colors">
                     <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs">📅</div>
                     Prendre Rendez-vous
                  </button>

                  <div className="space-y-4 mb-8">
                     {/* Carte Info : Adresse */}
                     <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-[#0077b6] shrink-0">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="font-bold text-sm text-slate-900">Cabinet Médical</h3>
                           <p className="text-sm text-slate-500 mt-1">{profile.location}</p>
                           <p className="text-xs text-blue-500 mt-2 font-medium">Voir sur la carte →</p>
                        </div>
                     </div>

                     {/* Carte Info : Téléphone */}
                     <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0">
                           <Phone className="w-5 h-5" />
                        </div>
                        <div>
                           <h3 className="font-bold text-sm text-slate-900">Secrétariat</h3>
                           <p className="text-sm text-slate-500 mt-1">01 45 67 89 10</p>
                           <p className="text-xs text-green-600 mt-2 font-medium">Appeler maintenant →</p>
                        </div>
                     </div>
                  </div>

                  {/* Section Présentation */}
                  <div className="mb-8">
                     <h3 className="font-bold text-slate-900 mb-2 pl-1">Présentation</h3>
                     <p className="text-sm leading-relaxed text-slate-600 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                        {profile.bio}
                     </p>
                  </div>
               </div>
            </div>
         );

         // 10. STYLE JURIDIQUE / AVOCAT (Sérieux, Traditionnel)
      case 'lawyer':
         return (
            <div className="h-full bg-[#f8f5f2] text-[#1e293b] overflow-y-auto font-serif relative border-[16px] border-[#1e3a8a]">
               {/* En-tête formel */}
               <div className="bg-[#1e3a8a] p-6 text-center text-white relative">
                  <div className="w-20 h-20 mx-auto bg-[#f8f5f2] p-1 rounded-sm shadow-lg mb-3">
                     <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" className="w-full h-full object-cover grayscale" />
                  </div>
                  <h2 className="text-xl font-bold tracking-wide uppercase border-b border-[#cca43b] inline-block pb-1 mb-1">Maître {profile.name.split(' ').pop()}</h2>
                  <p className="text-[#cca43b] text-xs uppercase tracking-widest">{profile.title}</p>
               </div>

               <div className="p-6">
                  {/* Citation / Devise */}
                  <div className="text-center mb-6 italic text-slate-500 text-sm border-l-2 border-[#cca43b] pl-4 mx-4">
                     "Défendre vos droits avec intégrité et excellence depuis 15 ans."
                  </div>

                  {/* Boutons d'action Formels */}
                  <div className="space-y-3 mb-8 font-sans">
                     <button className="w-full py-3 bg-[#1e3a8a] text-white uppercase text-xs font-bold tracking-widest hover:bg-[#172554] transition-colors shadow-md">
                        Consultation
                     </button>
                     <button className="w-full py-3 border border-[#1e3a8a] text-[#1e3a8a] uppercase text-xs font-bold tracking-widest hover:bg-[#1e3a8a] hover:text-white transition-colors">
                        Secrétariat
                     </button>
                  </div>

                  {/* Domaines d'intervention */}
                  <div className="border-t border-slate-300 pt-4">
                     <h3 className="text-center font-bold text-sm uppercase mb-4 text-[#1e3a8a]">Expertises</h3>
                     <ul className="space-y-2 text-sm text-center">
                        <li className="bg-white p-2 shadow-sm border border-slate-200">Droit des Affaires</li>
                        <li className="bg-white p-2 shadow-sm border border-slate-200">Contentieux Commercial</li>
                        <li className="bg-white p-2 shadow-sm border border-slate-200">Propriété Intellectuelle</li>
                     </ul>
                  </div>
               </div>
               
               {/* Pied de page */}
               <div className="bg-[#1e3a8a] text-[#cca43b] text-[10px] text-center py-2 absolute bottom-0 w-full font-sans uppercase tracking-wider">
                  Barreau de Paris
               </div>
            </div>
         );

         // 11. STYLE COACH SPORTIF (Dynamique, Bold)
      case 'sport':
         return (
            <div className="h-full bg-[#171717] text-white overflow-hidden relative font-sans italic uppercase">
               {/* Background dynamique */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#bef264] rounded-full blur-[80px] opacity-20"></div>

               <div className="relative z-10 h-full flex flex-col p-6">
                  {/* Header Impactant */}
                  <div className="mb-6 border-l-8 border-[#bef264] pl-4">
                     <h2 className="text-4xl font-black leading-[0.85] mb-1">
                        TRAIN<br/>WITH<br/><span className="text-[#bef264]">{profile.name.split(' ')[0]}</span>
                     </h2>
                     <p className="text-sm font-bold text-gray-400 not-italic tracking-wider">Elite Performance Coach</p>
                  </div>

                  {/* Photo en action (Masque clip-path) */}
                  <div className="flex-1 bg-gray-800 mb-6 relative overflow-hidden skew-x-[-10deg] border-2 border-[#bef264]">
                     <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" className="w-full h-full object-cover scale-125 skew-x-[10deg]" />
                     <div className="absolute bottom-0 left-0 bg-[#bef264] text-black px-4 py-1 font-black text-xl skew-x-[10deg] origin-bottom-left">
                        GO HARD
                     </div>
                  </div>

                  {/* Stats Rapides */}
                  <div className="flex justify-between mb-6 not-italic">
                     <div className="text-center">
                        <span className="block text-2xl font-black text-[#bef264]">12+</span>
                        <span className="text-[10px] text-gray-400 font-bold">Years Exp</span>
                     </div>
                     <div className="text-center">
                        <span className="block text-2xl font-black text-[#bef264]">500</span>
                        <span className="text-[10px] text-gray-400 font-bold">Transformations</span>
                     </div>
                     <div className="text-center">
                        <span className="block text-2xl font-black text-[#bef264]">PRO</span>
                        <span className="text-[10px] text-gray-400 font-bold">Certified</span>
                     </div>
                  </div>

                  {/* Boutons Action */}
                  <div className="space-y-3 not-italic">
                     <button className="w-full py-4 bg-[#bef264] text-black font-black text-lg tracking-tighter hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(190,242,100,0.4)] clip-path-slant">
                        JOIN THE TEAM
                     </button>
                     <button className="w-full py-3 bg-transparent border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-black transition-colors">
                        FREE PROGRAM
                     </button>
                  </div>
               </div>
            </div>
         );

         // 12. STYLE RESTAURANT / HOSPITALITY (Élégant, Menu)
      case 'restaurant':
         return (
            <div className="h-full bg-[#121212] text-[#e5e5e5] overflow-y-auto font-serif text-center p-4">
               {/* Cadre décoratif style Menu */}
               <div className="h-full border-[1px] border-[#d4af37] p-4 flex flex-col relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121212] px-4">
                     <span className="text-[#d4af37] text-2xl">★</span>
                  </div>

                  {/* Logo / Nom */}
                  <div className="mt-8 mb-6">
                     <h2 className="text-3xl text-[#d4af37] mb-2 tracking-widest uppercase">{profile.company}</h2>
                     <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mb-2"></div>
                     <p className="text-xs font-sans uppercase tracking-[0.2em] text-gray-400">Par Chef {profile.name.split(' ')[0]}</p>
                  </div>

                  {/* Image Plat Signature */}
                  <div className="aspect-square w-full mb-6 overflow-hidden rounded-full border border-[#d4af37]/30 p-2">
                     <div className="w-full h-full rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?w=800&q=80" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                     </div>
                  </div>

                  {/* Citation Chef */}
                  <p className="italic text-gray-400 text-sm mb-8 px-4 font-light">
                     "{profile.bio}"
                  </p>

                  {/* Boutons Actions (Style Boutons Dorés) */}
                  <div className="mt-auto space-y-4 font-sans mb-6">
                     <button className="w-full py-3 bg-[#d4af37] text-[#121212] font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                        Réserver une table
                     </button>
                     <button className="w-full py-3 border border-[#d4af37] text-[#d4af37] font-bold uppercase tracking-widest text-xs hover:bg-[#d4af37]/10 transition-colors">
                        Voir la Carte
                     </button>
                  </div>

                  {/* Infos Pratiques */}
                  <div className="font-sans text-[10px] text-gray-500 uppercase tracking-widest border-t border-[#d4af37]/30 pt-4">
                     <p className="mb-1">{profile.location}</p>
                     <p>Ouvert Mar - Sam • 19h - 23h</p>
                  </div>
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