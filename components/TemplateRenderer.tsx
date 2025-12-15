import React from 'react';
import { UserProfile, TemplateStyle } from '../types';
import { Mail, Globe, Linkedin, Twitter, Instagram, Smartphone } from 'lucide-react';

interface Props {
  profile: UserProfile;
  template: TemplateStyle;
}

const IconMap: Record<string, React.ReactNode> = {
  email: <Mail size={18} />,
  website: <Globe size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  instagram: <Instagram size={18} />,
};

const LinkButton: React.FC<{ link: any, className?: string, iconClassName?: string }> = ({ link, className, iconClassName }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-3 w-full py-3 px-4 transition-all duration-300 ${className}`}
  >
    <span className={iconClassName}>{IconMap[link.platform] || <Globe size={18} />}</span>
    <span className="font-medium capitalize">{link.platform}</span>
  </a>
);

// --- Template 1: Modern Minimal ---
const ModernMinimal: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-white text-gray-900 flex flex-col items-center p-8 overflow-y-auto">
    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl mb-6 mt-8">
      <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
    </div>
    <h1 className="text-2xl font-bold tracking-tight mb-1">{profile.name}</h1>
    <p className="text-gray-500 font-medium mb-4">{profile.title}</p>
    <p className="text-center text-gray-600 text-sm mb-8 leading-relaxed max-w-xs">
      {profile.bio}
    </p>
    <div className="w-full space-y-3">
      {profile.links.map(link => (
        <LinkButton
          key={link.id}
          link={link}
          className="bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 shadow-sm hover:shadow-md text-gray-800"
        />
      ))}
    </div>
  </div>
);

// --- Template 2: Neon Cyber ---
const NeonCyber: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-black text-white flex flex-col items-center p-6 overflow-y-auto relative">
    <div className="absolute inset-0 bg-[url('https://picsum.photos/id/134/400/800')] opacity-20 bg-cover bg-center" />
    <div className="z-10 w-full flex flex-col items-center">
      <div className="w-28 h-28 mb-6 mt-10 relative">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 blur-lg opacity-75 animate-pulse"></div>
        <img src={profile.avatarUrl} alt={profile.name} className="relative w-full h-full object-cover rounded-xl border-2 border-white/20" />
      </div>
      <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 uppercase tracking-widest">
        {profile.name}
      </h1>
      <p className="text-cyan-100 text-sm tracking-wider mb-8 border-b border-cyan-500/30 pb-2">{profile.title}</p>
      
      <div className="w-full space-y-4">
        {profile.links.map(link => (
          <LinkButton
            key={link.id}
            link={link}
            className="bg-black/50 backdrop-blur-md border border-cyan-500/50 hover:bg-cyan-900/30 text-cyan-50 rounded-none clip-path-slant"
            iconClassName="text-cyan-400"
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm w-full">
        <p className="text-xs text-purple-200 text-center font-mono">{profile.bio}</p>
      </div>
    </div>
  </div>
);

// --- Template 3: Professional ---
const Professional: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-slate-50 text-slate-800 flex flex-col overflow-y-auto">
    <div className="bg-slate-900 h-40 w-full relative shrink-0">
      <div className="absolute -bottom-12 left-6 p-1 bg-white rounded-lg shadow-sm">
        <img src={profile.avatarUrl} alt={profile.name} className="w-24 h-24 rounded-md object-cover" />
      </div>
    </div>
    <div className="mt-14 px-6 mb-6">
      <h1 className="text-2xl font-serif font-bold text-slate-900">{profile.name}</h1>
      <p className="text-slate-600 font-medium">{profile.title}</p>
      <p className="mt-4 text-sm text-slate-600 leading-relaxed border-l-2 border-slate-300 pl-4 italic">
        {profile.bio}
      </p>
    </div>
    <div className="px-6 space-y-2 pb-8">
      <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Connect</h3>
      {profile.links.map(link => (
        <LinkButton
          key={link.id}
          link={link}
          className="bg-white border-b border-slate-200 hover:pl-6 text-left justify-start rounded-none"
          iconClassName="text-slate-900"
        />
      ))}
    </div>
  </div>
);

// --- Template 4: Nature Eco ---
const NatureEco: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-[#fdfbf7] text-[#4a4a4a] flex flex-col items-center p-6 overflow-y-auto">
    <div className="w-full flex justify-center mt-8 mb-6">
       <div className="p-2 border-2 border-dashed border-[#8c9c85] rounded-full">
         <img src={profile.avatarUrl} alt={profile.name} className="w-28 h-28 rounded-full object-cover grayscale-[20%]" />
       </div>
    </div>
    <h1 className="text-3xl font-serif text-[#3e4a3d] mb-1">{profile.name}</h1>
    <p className="text-[#8c9c85] font-medium tracking-wide text-sm mb-6 uppercase">{profile.title}</p>
    
    <div className="w-full bg-[#e8ebe6] p-6 rounded-2xl mb-6 relative">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3e4a3d] text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">About</span>
        <p className="text-center text-sm font-serif italic leading-6">"{profile.bio}"</p>
    </div>

    <div className="w-full grid grid-cols-2 gap-3">
      {profile.links.map(link => (
        <a
          key={link.id}
          href={link.url}
          className="flex flex-col items-center justify-center p-4 bg-[#fff] rounded-xl shadow-[4px_4px_0px_#8c9c85] hover:translate-y-1 hover:shadow-none transition-all border border-[#3e4a3d]/10 text-[#3e4a3d]"
        >
          <span className="mb-2">{IconMap[link.platform]}</span>
          <span className="text-xs font-bold uppercase">{link.platform}</span>
        </a>
      ))}
    </div>
  </div>
);

// --- Template 5: Vibrant Social ---
const VibrantSocial: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white flex flex-col overflow-y-auto">
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-32 h-32 rounded-3xl rotate-3 bg-white/20 backdrop-blur-md p-2 shadow-2xl mb-6">
        <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover rounded-2xl -rotate-3" />
      </div>
      <h1 className="text-4xl font-black drop-shadow-md mb-2">{profile.name}</h1>
      <div className="inline-block bg-white text-pink-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform -rotate-1">
        {profile.title}
      </div>
    </div>
    <div className="bg-white text-gray-800 rounded-t-[2.5rem] p-8 pb-12 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <p className="text-center text-gray-500 mb-8 font-medium">{profile.bio}</p>
      <div className="space-y-3">
        {profile.links.map(link => (
          <LinkButton
            key={link.id}
            link={link}
            className="bg-gray-100 hover:bg-gray-200 rounded-2xl font-bold shadow-sm"
            iconClassName="text-pink-600"
          />
        ))}
      </div>
    </div>
  </div>
);

export const TemplateRenderer: React.FC<Props> = ({ profile, template }) => {
  switch (template) {
    case TemplateStyle.NEON_CYBER: return <NeonCyber profile={profile} />;
    case TemplateStyle.PROFESSIONAL: return <Professional profile={profile} />;
    case TemplateStyle.NATURE_ECO: return <NatureEco profile={profile} />;
    case TemplateStyle.VIBRANT_SOCIAL: return <VibrantSocial profile={profile} />;
    case TemplateStyle.MODERN_MINIMAL:
    default: return <ModernMinimal profile={profile} />;
  }
};