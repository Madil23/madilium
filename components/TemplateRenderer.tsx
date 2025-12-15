import React from 'react';
import { UserProfile, TemplateStyle } from '../types';
import { 
  Mail, Globe, Linkedin, Twitter, Instagram, Facebook, Youtube, 
  MessageCircle, Phone, Ghost, Gamepad2, Music, Github, Dribbble, 
  Palette, DollarSign, Link as LinkIcon 
} from 'lucide-react';

interface Props {
  profile: UserProfile;
  template: TemplateStyle;
}

// --- Icons ---
const IconMap: Record<string, React.ReactNode> = {
  email: <Mail size={18} />,
  website: <Globe size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  instagram: <Instagram size={18} />,
  facebook: <Facebook size={18} />,
  youtube: <Youtube size={18} />,
  tiktok: <span className="font-bold text-lg leading-none">♪</span>, // Custom simple icon
  whatsapp: <Phone size={18} />,
  telegram: <MessageCircle size={18} />,
  snapchat: <Ghost size={18} />,
  discord: <Gamepad2 size={18} />,
  twitch: <Gamepad2 size={18} />,
  spotify: <Music size={18} />,
  github: <Github size={18} />,
  behance: <Palette size={18} />,
  dribbble: <Dribbble size={18} />,
  paypal: <DollarSign size={18} />,
  custom: <LinkIcon size={18} />,
};

const LinkButton: React.FC<{ link: any, className?: string, iconClassName?: string }> = ({ link, className, iconClassName }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-3 w-full py-3 px-4 transition-all duration-300 ${className}`}
  >
    <span className={iconClassName}>{IconMap[link.platform] || <LinkIcon size={18} />}</span>
    <span className="font-medium capitalize">{link.platform}</span>
  </a>
);

// --- ORIGINAL TEMPLATES (1-5) ---

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
        <a key={link.id} href={link.url} className="flex flex-col items-center justify-center p-4 bg-[#fff] rounded-xl shadow-[4px_4px_0px_#8c9c85] hover:translate-y-1 hover:shadow-none transition-all border border-[#3e4a3d]/10 text-[#3e4a3d]">
          <span className="mb-2">{IconMap[link.platform]}</span>
          <span className="text-xs font-bold uppercase">{link.platform}</span>
        </a>
      ))}
    </div>
  </div>
);

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
          <LinkButton key={link.id} link={link} className="bg-gray-100 hover:bg-gray-200 rounded-2xl font-bold shadow-sm" iconClassName="text-pink-600" />
        ))}
      </div>
    </div>
  </div>
);

// --- NEW TEMPLATES (6-15) ---

// 6. Glass Morphism
const GlassMorphism: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 flex flex-col items-center p-6 overflow-y-auto relative">
    <div className="absolute top-10 left-[-20px] w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-0 right-[-20px] w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    
    <div className="z-10 w-full flex flex-col items-center mt-10">
      <div className="p-1 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl mb-6">
        <img src={profile.avatarUrl} alt={profile.name} className="w-24 h-24 rounded-full" />
      </div>
      <h1 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{profile.name}</h1>
      <p className="text-white/80 font-medium mb-8 bg-white/10 px-4 py-1 rounded-full text-xs backdrop-blur-sm border border-white/20">{profile.title}</p>
      
      <div className="w-full space-y-3">
        {profile.links.map(link => (
          <LinkButton
            key={link.id}
            link={link}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white hover:bg-white/30 shadow-lg"
          />
        ))}
      </div>
      
      <div className="mt-8 text-white/90 text-center text-sm font-light italic bg-black/10 p-4 rounded-xl backdrop-blur-md">
        {profile.bio}
      </div>
    </div>
  </div>
);

// 7. Luxury Serif
const LuxurySerif: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-[#111] text-[#D4AF37] flex flex-col items-center p-8 overflow-y-auto border-4 border-[#D4AF37] m-auto">
    <div className="w-full text-center border-b border-[#D4AF37]/30 pb-6 mb-6">
      <div className="w-24 h-24 mx-auto rounded-full border-2 border-[#D4AF37] p-1 mb-4">
        <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full rounded-full object-cover grayscale" />
      </div>
      <h1 className="text-2xl font-serif tracking-widest uppercase">{profile.name}</h1>
      <p className="text-[10px] tracking-[0.2em] mt-2 text-[#fff]/70">{profile.title}</p>
    </div>
    
    <p className="text-center font-serif italic text-white/80 text-sm mb-8 leading-relaxed">
      "{profile.bio}"
    </p>
    
    <div className="w-full space-y-4">
      {profile.links.map(link => (
        <a key={link.id} href={link.url} className="block w-full text-center py-3 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black transition-colors uppercase text-xs tracking-widest">
          {link.platform}
        </a>
      ))}
    </div>
  </div>
);

// 8. Developer Terminal
const DeveloperTerm: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-[#0d1117] text-[#58a6ff] font-mono flex flex-col p-4 overflow-y-auto">
    <div className="border border-[#30363d] rounded-lg p-4 h-full bg-[#0d1117]">
      <div className="flex gap-2 mb-4 border-b border-[#30363d] pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="mb-6">
        <p className="text-gray-400">$ whoami</p>
        <div className="flex gap-4 items-center mt-2 ml-2">
          <img src={profile.avatarUrl} alt="avatar" className="w-16 h-16 rounded border border-[#30363d]" />
          <div>
            <h1 className="text-xl font-bold text-[#c9d1d9]">root@{profile.name.replace(/\s+/g, '').toLowerCase()}</h1>
            <p className="text-sm text-[#8b949e]">{profile.title}</p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-400">$ cat bio.txt</p>
        <p className="ml-2 mt-1 text-[#c9d1d9] text-sm">{profile.bio}</p>
      </div>
      <div>
        <p className="text-gray-400">$ ls ./links</p>
        <div className="mt-2 space-y-2 pl-2">
          {profile.links.map(link => (
             <a key={link.id} href={link.url} className="flex items-center gap-2 text-[#7ee787] hover:underline cursor-pointer">
               <span>➜</span>
               <span className="capitalize">{link.platform}</span>
             </a>
          ))}
          <span className="animate-pulse text-[#c9d1d9]">_</span>
        </div>
      </div>
    </div>
  </div>
);

// 9. Creative Portfolio
const CreativePortfolio: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-stone-100 text-stone-900 flex flex-col p-6 overflow-y-auto">
    <div className="flex justify-between items-end mb-8 border-b-2 border-black pb-4">
      <h1 className="text-4xl font-black leading-none max-w-[60%]">{profile.name.split(' ').map((n, i) => <div key={i}>{n}</div>)}</h1>
      <div className="w-16 h-16 bg-black rounded-full overflow-hidden">
        <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="mb-8">
      <span className="bg-black text-white px-2 py-1 text-xs font-bold uppercase">{profile.title}</span>
      <p className="mt-4 text-lg font-medium leading-snug">{profile.bio}</p>
    </div>
    <div className="grid grid-cols-1 gap-4">
      {profile.links.map((link, i) => (
        <a key={link.id} href={link.url} className="group relative bg-white border-2 border-black p-4 h-24 flex items-between justify-between hover:bg-black hover:text-white transition-colors">
          <span className="font-bold text-xl self-end">{link.platform}</span>
          <span className="absolute top-2 right-2 text-xs font-mono">0{i+1}</span>
          <span className="self-start opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
      ))}
    </div>
  </div>
);

// 10. Retro 80s
const Retro80s: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-[#120024] text-[#ff00de] flex flex-col items-center p-6 overflow-y-auto">
    <div className="w-full absolute top-0 h-1/2 bg-gradient-to-b from-[#2d0055] to-transparent -z-0"></div>
    {/* Grid Floor */}
    <div 
      className="absolute bottom-0 w-full h-1/2 -z-0"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 0, 222, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 222, 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        transform: 'perspective(300px) rotateX(60deg) translateY(50px)'
      }}
    />
    
    <div className="z-10 flex flex-col items-center w-full">
      <div className="w-32 h-32 rounded-full border-4 border-[#00f0ff] shadow-[0_0_20px_#00f0ff] overflow-hidden mb-4 mt-8">
        <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover" />
      </div>
      
      <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff00de] to-[#00f0ff] drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)] mb-2 uppercase italic transform -skew-x-12">
        {profile.name}
      </h1>
      
      <div className="bg-[#ff00de] text-black font-bold px-4 py-1 text-xs transform skew-x-12 mb-8 box-shadow-[4px_4px_0px_#00f0ff]">
        {profile.title}
      </div>

      <div className="w-full space-y-4">
        {profile.links.map(link => (
          <a key={link.id} href={link.url} className="block w-full bg-black/60 border border-[#00f0ff] p-3 text-center text-[#00f0ff] font-mono tracking-widest hover:bg-[#00f0ff] hover:text-black hover:shadow-[0_0_15px_#00f0ff] transition-all">
            {link.platform.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  </div>
);

// 11. Influencer Glow
const InfluencerGlow: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-white flex flex-col overflow-y-auto">
    <div className="h-48 w-full bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 relative shrink-0"></div>
    <div className="px-6 relative -mt-16 flex flex-col items-center">
      <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
        <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover" />
      </div>
      <h1 className="mt-3 text-2xl font-bold text-gray-800">{profile.name}</h1>
      <p className="text-gray-500 text-sm mb-4">{profile.title}</p>
      <div className="flex gap-2 mb-6">
        {profile.links.slice(0,3).map(l => (
          <div key={l.id} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
             {IconMap[l.platform]}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-600 text-sm mb-6 bg-gray-50 p-4 rounded-xl w-full">
        {profile.bio}
      </p>
      <div className="w-full space-y-3 pb-8">
        {profile.links.map(link => (
          <LinkButton key={link.id} link={link} className="bg-gradient-to-r from-orange-100 to-pink-100 hover:to-pink-200 text-gray-800 rounded-xl font-bold shadow-sm" />
        ))}
      </div>
    </div>
  </div>
);

// 12. Corporate Clean
const CorporateClean: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-gray-50 text-gray-800 flex flex-col overflow-y-auto">
    <div className="bg-[#004e92] p-8 pb-12 rounded-b-[3rem] text-white text-center shadow-lg">
      <div className="w-24 h-24 mx-auto rounded-full bg-white p-1 mb-3">
        <img src={profile.avatarUrl} alt="" className="w-full h-full rounded-full object-cover" />
      </div>
      <h1 className="text-xl font-bold">{profile.name}</h1>
      <p className="opacity-80 text-sm">{profile.title}</p>
    </div>
    <div className="p-6 -mt-8">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">About</h3>
        <p className="text-sm leading-relaxed">{profile.bio}</p>
      </div>
      <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 ml-1">Contact</h3>
      <div className="space-y-2">
        {profile.links.map(link => (
          <a key={link.id} href={link.url} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:border-[#004e92] transition-colors">
            <span className="text-[#004e92]">{IconMap[link.platform]}</span>
            <span className="font-medium text-sm capitalize">{link.platform}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// 13. Minimal Mono
const MinimalMono: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-white text-black flex flex-col p-8 overflow-y-auto">
    <div className="border-b-4 border-black pb-8 mb-8">
      <h1 className="text-5xl font-black uppercase tracking-tighter leading-[0.8] mb-4">{profile.name}</h1>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-black">
           <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover grayscale contrast-150" />
        </div>
        <p className="font-bold text-sm max-w-[150px]">{profile.title}</p>
      </div>
    </div>
    <div className="space-y-4">
      {profile.links.map(link => (
        <a key={link.id} href={link.url} className="flex justify-between items-center py-4 border-b border-gray-200 hover:bg-black hover:text-white hover:px-2 transition-all cursor-pointer">
          <span className="text-xl font-bold lowercase">{link.platform}</span>
          <span>→</span>
        </a>
      ))}
    </div>
    <div className="mt-auto pt-8">
       <p className="text-xs font-mono">{profile.bio}</p>
    </div>
  </div>
);

// 14. Gamer RGB
const GamerRGB: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-[#0a0a0a] text-white flex flex-col overflow-y-auto relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500"></div>
    <div className="p-6 flex flex-col items-center">
      <div className="w-32 h-32 relative mb-6 mt-4">
        <div className="absolute inset-0 bg-red-600 rounded-lg rotate-6 opacity-50"></div>
        <div className="absolute inset-0 bg-blue-600 rounded-lg -rotate-6 opacity-50"></div>
        <img src={profile.avatarUrl} alt="" className="relative w-full h-full object-cover rounded-lg border-2 border-white z-10" />
      </div>
      <h1 className="text-3xl font-bold tracking-tighter mb-1 font-[Impact,sans-serif] tracking-wide">{profile.name.toUpperCase()}</h1>
      <div className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded uppercase font-bold mb-6">LVL 99 {profile.title}</div>
      
      <div className="w-full border-t border-gray-800 pt-6">
        {profile.links.map(link => (
          <a key={link.id} href={link.url} className="flex items-center gap-4 mb-3 bg-[#1a1a1a] p-3 rounded clip-path-polygon hover:bg-[#2a2a2a] hover:text-red-500 transition-colors border-l-4 border-transparent hover:border-red-500">
             {IconMap[link.platform]}
             <span className="font-bold uppercase tracking-wider text-sm">{link.platform}</span>
          </a>
        ))}
      </div>
      <div className="mt-4 p-4 bg-[#111] w-full rounded border border-gray-800 text-gray-400 text-xs font-mono">
        &gt; {profile.bio}
      </div>
    </div>
  </div>
);

// 15. Artistic Brush
const ArtisticBrush: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="h-full w-full bg-[#f3f0e8] text-[#333] flex flex-col items-center p-8 overflow-y-auto">
    <div className="absolute top-0 left-0 w-full h-64 bg-[#e6dcc5] rounded-b-[50%] -z-0 transform scale-x-150"></div>
    <div className="z-10 w-full flex flex-col items-center mt-8">
      <div className="w-36 h-36 relative mb-6">
        <svg viewBox="0 0 200 200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] fill-[#d4a373] opacity-50 z-[-1] rotate-12">
            <path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.5,-41.2C83.9,-26.8,88.5,-11.7,85.6,2.2C82.7,16.1,72.3,28.8,61.9,40.3C51.5,51.8,41.1,62.1,28.7,68.9C16.3,75.7,1.9,79,-11.6,78.2C-25.1,77.4,-37.7,72.5,-49.2,64.8C-60.7,57.1,-71.1,46.6,-77.8,33.7C-84.5,20.8,-87.5,5.5,-84.9,-8.8C-82.3,-23.1,-74.1,-36.4,-63.3,-46.1C-52.5,-55.8,-39.1,-61.9,-25.9,-68.9C-12.7,-75.9,0.3,-83.8,14.6,-85.4C28.9,-87,42.5,-83.3,45.7,-76.3Z" transform="translate(100 100)" />
        </svg>
        <img src={profile.avatarUrl} alt="" className="w-full h-full object-cover rounded-full border-4 border-white shadow-sm" />
      </div>
      <h1 className="text-3xl font-serif italic text-stone-800 mb-2">{profile.name}</h1>
      <p className="text-stone-500 font-medium mb-6 uppercase tracking-widest text-xs">{profile.title}</p>
      
      <p className="text-center font-serif text-stone-600 mb-8 leading-relaxed max-w-xs">{profile.bio}</p>
      
      <div className="w-full space-y-3">
        {profile.links.map(link => (
          <LinkButton 
            key={link.id} 
            link={link} 
            className="bg-white rounded-full border border-stone-200 shadow-[2px_4px_10px_rgba(0,0,0,0.05)] hover:bg-[#d4a373] hover:text-white transition-all" 
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
    
    // New
    case TemplateStyle.GLASS_MORPHISM: return <GlassMorphism profile={profile} />;
    case TemplateStyle.LUXURY_SERIF: return <LuxurySerif profile={profile} />;
    case TemplateStyle.DEVELOPER_TERM: return <DeveloperTerm profile={profile} />;
    case TemplateStyle.CREATIVE_PORTFOLIO: return <CreativePortfolio profile={profile} />;
    case TemplateStyle.RETRO_80S: return <Retro80s profile={profile} />;
    case TemplateStyle.INFLUENCER_GLOW: return <InfluencerGlow profile={profile} />;
    case TemplateStyle.CORPORATE_CLEAN: return <CorporateClean profile={profile} />;
    case TemplateStyle.MINIMAL_MONO: return <MinimalMono profile={profile} />;
    case TemplateStyle.GAMER_RGB: return <GamerRGB profile={profile} />;
    case TemplateStyle.ARTISTIC_BRUSH: return <ArtisticBrush profile={profile} />;
    
    case TemplateStyle.MODERN_MINIMAL:
    default: return <ModernMinimal profile={profile} />;
  }
};