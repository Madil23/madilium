import React, { useState } from 'react';
import { Globe, Instagram, Send } from 'lucide-react';

// Les choix de templates disponibles
const TEMPLATES = [
  { id: 'modern', name: 'Modern Minimal', labelClass: 'border-stone-700' },
  { id: 'neon', name: 'Neon Cyber', labelClass: 'border-cyan-500 bg-cyan-500/10 text-cyan-400' },
  { id: 'professional', name: 'Professional', labelClass: 'border-stone-700' },
  { id: 'nature', name: 'Nature Eco', labelClass: 'border-stone-700' },
  { id: 'vibrant', name: 'Vibrant Social', labelClass: 'border-stone-700' },
];

export const DigitalProfileConfigurator = () => {
  // État pour stocker les infos du profil et le template choisi
  const [profile, setProfile] = useState({
    name: 'Alex Morgan',
    title: 'Digital Artist & Designer',
    bio: 'Creating immersive digital experiences through code and design. Based in Paris.',
    template: 'neon', // Template par défaut
  });

  // Fonction générique pour mettre à jour les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Fonction pour construire les classes CSS de l'aperçu mobile selon le template
  const getPreviewClasses = () => {
    switch (profile.template) {
      case 'neon':
        return {
          container: 'bg-stone-900 border-cyan-500/30',
          textTitle: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500',
          textBody: 'text-gray-300',
          button: 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10',
          avatarRing: 'ring-cyan-500/50',
          bgEffect: 'bg-gradient-to-tr from-cyan-500/10 to-blue-500/10',
        };
      case 'modern':
        return {
          container: 'bg-white border-gray-200',
          textTitle: 'text-stone-950',
          textBody: 'text-gray-600',
          button: 'border-stone-300 text-stone-950 hover:bg-stone-100',
          avatarRing: 'ring-stone-200',
          bgEffect: 'bg-stone-50',
        };
      // Ajoutez d'autres cas (nature, professional...) ici plus tard
      default: // Fallback sur 'modern' si le template n'est pas encore défini
        return {
          container: 'bg-white border-gray-200',
          textTitle: 'text-stone-950',
          textBody: 'text-gray-600',
          button: 'border-stone-300 text-stone-950 hover:bg-stone-100',
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
            {/* Champ Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>
            {/* Champ Titre/Profession */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
                Professional Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={profile.title}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
              />
            </div>
            {/* Champ Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-400 mb-1">
                Short Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                value={profile.bio}
                onChange={handleChange}
                className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sélection du Template */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Choose Template</h3>
          <div className="flex flex-wrap gap-3">
            {TEMPLATES.map((template) => (
              <button
                key={template.id}
                onClick={() => setProfile({ ...profile, template: template.id })}
                className={`px-4 py-2 rounded-full border text-xs font-medium transition-all uppercase tracking-wider
                  ${profile.template === template.id 
                    ? template.labelClass 
                    : 'border-stone-800 text-gray-500 hover:border-stone-700 hover:text-gray-400'
                  }`}
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ----- Colonne Droite : Aperçu Mobile (Preview) ----- */}
      <div className="bg-stone-900/50 rounded-3xl p-8 flex items-center justify-center border border-white/5">
        {/* Cadre du téléphone */}
        <div className={`relative w-[280px] h-[580px] rounded-[3rem] border-4 overflow-hidden shadow-2xl transition-all duration-500 ${classes.container}`}>
          {/* Fond d'écran avec effet */}
          <div className={`absolute inset-0 ${classes.bgEffect} z-0`}></div>
          
          {/* Contenu du téléphone */}
          <div className="relative z-10 h-full flex flex-col p-6 pt-12">
            {/* Avatar et Infos principales */}
            <div className="text-center space-y-4 mb-8">
              <div className={`w-24 h-24 mx-auto rounded-2xl overflow-hidden ring-4 ${classes.avatarRing} shadow-xl relative group`}>
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" 
                  alt="Profile Placeholder" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                {/* Effet de lueur pour le thème Néon */}
                {profile.template === 'neon' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 to-transparent mix-blend-overlay"></div>
                )}
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${classes.textTitle}`}>
                  {profile.name || 'Your Name'}
                </h2>
                <p className={`text-sm ${classes.textBody}`}>
                  {profile.title || 'Your Title'}
                </p>
              </div>
            </div>

            {/* Boutons d'action (liens factices pour l'instant) */}
            <div className="space-y-3 mb-8">
              <button className={`w-full py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition-colors ${classes.button}`}>
                <Globe className="w-4 h-4" />
                <span>Website</span>
              </button>
              <button className={`w-full py-3 px-4 rounded-xl border flex items-center justify-center gap-2 transition-colors ${classes.button}`}>
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </button>
            </div>

            {/* Section Bio */}
            <div className={`text-center text-sm leading-relaxed ${classes.textBody}`}>
              <p>{profile.bio || 'Your bio will appear here...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};