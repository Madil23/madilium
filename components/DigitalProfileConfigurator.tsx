import React, { useState } from 'react';
import { 
  Globe, Instagram, Send, Linkedin, Mail, Phone, MapPin, Briefcase, 
  User, CheckCircle, Heart, Grid, MessageCircle, Play, Star, Shield, 
  Gavel, Dumbbell, Utensils, Zap, Layout, Code, Terminal, Activity,
  Award, Clock, Calendar, ChevronRight, Share2, MoreHorizontal
} from 'lucide-react';

// --- TYPES ---
export type TemplateId = 
  | 'linkedin' | 'cinematic' | 'artisan' | 'creative' 
  | 'ceo' | 'developer' | 'instagram' | 'bento' 
  | 'medical' | 'lawyer' | 'sport' | 'restaurant';

export interface ProfileData {
  name: string;
  title: string;
  company: string;
  bio: string;
  location: string;
  template: TemplateId;
  email: string;
  phone: string;
  website: string;
}

// --- CONFIGURATION DES TEMPLATES ---
const TEMPLATES: { id: TemplateId; name: string; icon: any; desc: string }[] = [
  { id: 'linkedin', name: 'Network Pro', icon: Linkedin, desc: 'Style professionnel classique' },
  { id: 'instagram', name: 'Influencer', icon: Instagram, desc: 'Visuel, grille et stories' },
  { id: 'bento', name: 'Bento Grid', icon: Layout, desc: 'Blocs modernes style Apple' },
  { id: 'cinematic', name: 'Cinematic', icon: Play, desc: 'Immersion plein écran' },
  { id: 'creative', name: 'Creative Blob', icon: Zap, desc: 'Formes organiques & dégradés' },
  { id: 'ceo', name: 'Executive CEO', icon: Star, desc: 'Minimalisme de luxe' },
  { id: 'developer', name: 'Dev Terminal', icon: Terminal, desc: 'Style codeur rétro' },
  { id: 'artisan', name: 'Artisan', icon: Briefcase, desc: 'Robuste et contrasté' },
  { id: 'lawyer', name: 'Juridique', icon: Gavel, desc: 'Sérieux et traditionnel' },
  { id: 'medical', name: 'Santé', icon: Activity, desc: 'Propre et rassurant' },
  { id: 'sport', name: 'Coach Sportif', icon: Dumbbell, desc: 'Dynamique et impactant' },
  { id: 'restaurant', name: 'Hospitality', icon: Utensils, desc: 'Élégant et accueillant' },
];

export default function DigitalProfileConfigurator() {
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Alex Morgan',
    title: 'Architecte d\'Intérieur',
    company: 'Morgan Design Studio',
    bio: 'Transformer vos espaces en expériences uniques. Une approche minimaliste pour un impact maximal.',
    location: 'Paris, France',
    template: 'linkedin',
    email: 'alex@morgan.design',
    phone: '+33 6 12 34 56 78',
    website: 'www.morgan.design'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // --- MOTEUR DE RENDU DES TEMPLATES ---
  const renderTemplate = () => {
    switch (profile.template) {
      
      // 1. LINKEDIN STYLE
      case 'linkedin':
        return (
          <div className="h-full bg-[#f3f2ef] text-black overflow-y-auto font-sans">
            <div className="h-32 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80')] bg-cover bg-center"></div>
            <div className="px-5 pb-8 relative">
              <div className="flex justify-between items-start -mt-12 mb-3">
                <div className="w-32 h-32 rounded-full border-[4px] border-white bg-white overflow-hidden shadow-sm relative z-10">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" className="w-full h-full object-cover" alt="Profile" />
                </div>
                <div className="mt-14 space-x-2">
                   <Briefcase className="w-5 h-5 text-gray-600 inline-block" />
                   <span className="text-xs font-semibold text-gray-700">{profile.company}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight flex items-center gap-1">
                  {profile.name} <CheckCircle className="w-4 h-4 text-blue-600 fill-blue-100" />
                </h2>
                <p className="text-gray-900 text-sm mt-1">{profile.title} chez {profile.company}</p>
                <p className="text-gray-500 text-xs flex items-center gap-1 mt-2">
                  <MapPin className="w-3 h-3" /> {profile.location} • <span className="text-blue-600 font-bold hover:underline cursor-pointer">Coordonnées</span>
                </p>
                <div className="text-xs text-blue-600 font-bold mt-2 hover:underline cursor-pointer">
                  500+ relations
                </div>
              </div>

              <div className="flex gap-2 mb-6">
                <button className="flex-1 bg-[#0a66c2] hover:bg-[#004182] text-white py-1.5 rounded-full font-bold text-sm transition-colors">Se connecter</button>
                <button className="flex-1 border border-gray-400 hover:bg-gray-100 text-gray-600 py-1.5 rounded-full font-bold text-sm transition-colors">Message</button>
                <button className="w-10 flex items-center justify-center border border-gray-400 text-gray-600 rounded-full font-bold text-sm">...</button>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
                <h3 className="font-bold text-lg mb-2">Infos</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{profile.bio}</p>
                <div className="space-y-2">
                   <div className="text-sm text-gray-500 flex items-center gap-2"><Mail className="w-4 h-4" /> {profile.email}</div>
                   <div className="text-sm text-gray-500 flex items-center gap-2"><Phone className="w-4 h-4" /> {profile.phone}</div>
                </div>
              </div>
            </div>
          </div>
        );

      // 2. CINEMATIC
      case 'cinematic':
        return (
          <div className="h-full bg-black text-white overflow-hidden relative font-sans group">
            <div className="absolute inset-0 transition-transform duration-[10s] ease-linear group-hover:scale-110">
              <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80" className="w-full h-full object-cover opacity-70" alt="Background" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute top-6 right-6 flex gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-red-500">Live Portfolio</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-4 z-10 pb-12">
              <div className="border-l-4 border-red-600 pl-5">
                <h2 className="text-5xl font-oswald font-bold uppercase tracking-tighter leading-none mb-2">{profile.name}</h2>
                <p className="text-red-500 font-bold tracking-[0.2em] text-xs uppercase">{profile.title}</p>
              </div>
              
              <p className="text-gray-300 text-sm line-clamp-3 font-light opacity-90 leading-relaxed border-t border-white/20 pt-4 mt-2">
                {profile.bio}
              </p>
              
              <div className="w-full grid grid-cols-2 gap-3 mt-6">
                <button className="bg-white text-black py-4 px-4 font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors">
                  Contact
                </button>
                <button className="border border-white/50 backdrop-blur-sm text-white py-4 px-4 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Play className="w-3 h-3 fill-current" /> Showreel
                </button>
              </div>
            </div>
          </div>
        );

      // 3. ARTISAN
      case 'artisan':
        return (
          <div className="h-full bg-stone-100 text-stone-800 overflow-y-auto font-sans p-6 border-[12px] border-stone-800 flex flex-col">
            <div className="border-b-4 border-stone-800 pb-6 mb-6 text-center">
              <div className="w-24 h-24 mx-auto bg-orange-600 rounded-sm mb-4 flex items-center justify-center text-white border-2 border-stone-800 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                 <Briefcase className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight leading-none mb-2">{profile.company}</h2>
              <p className="font-bold text-orange-700 text-sm bg-orange-100 inline-block px-2">{profile.name}</p>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="bg-white border-2 border-stone-800 p-4 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default">
                <h3 className="font-bold uppercase text-[10px] text-stone-400 mb-1">Spécialité</h3>
                <p className="font-bold text-lg">{profile.title}</p>
              </div>
              
              <div className="bg-stone-800 text-white p-4 shadow-[4px_4px_0px_0px_rgba(234,88,12,1)] relative">
                <div className="absolute top-0 right-0 p-1">
                   <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                </div>
                <p className="font-medium text-sm leading-relaxed italic">"{profile.bio}"</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full py-4 bg-orange-600 text-white font-black uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Devis Gratuit
              </button>
              <button className="w-full py-4 bg-white text-stone-900 border-2 border-stone-900 font-black uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Appeler
              </button>
            </div>
          </div>
        );

      // 4. CREATIVE (Nouveau)
      case 'creative':
        return (
          <div className="h-full bg-white text-slate-800 overflow-hidden relative font-sans">
             {/* Abstract Background */}
             <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
             <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

             <div className="relative z-10 h-full flex flex-col p-6">
                <div className="flex justify-between items-center mb-8">
                   <div className="text-xl font-bold tracking-tighter">● {profile.name.split(' ')[0]}</div>
                   <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white/50 backdrop-blur-md">
                      <Grid className="w-4 h-4" />
                   </div>
                </div>

                <div className="mb-8">
                   <div className="w-32 h-40 rounded-[2rem] overflow-hidden rotate-[-6deg] border-4 border-white shadow-xl mb-6 mx-auto bg-gray-100">
                      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" className="w-full h-full object-cover" />
                   </div>
                   <h1 className="text-4xl font-black text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                      {profile.title}
                   </h1>
                   <p className="text-center text-slate-500 font-medium">@{profile.name.replace(/\s/g, '').toLowerCase()}</p>
                </div>

                <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-sm mb-4">
                   <p className="text-sm font-medium leading-relaxed">
                      {profile.bio}
                   </p>
                </div>

                <div className="mt-auto grid grid-cols-4 gap-2">
                   <div className="bg-black text-white rounded-2xl col-span-3 py-4 flex items-center justify-center font-bold text-sm cursor-pointer hover:scale-105 transition-transform">
                      Let's Talk
                   </div>
                   <div className="bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors">
                      <Instagram className="w-5 h-5" />
                   </div>
                </div>
             </div>
          </div>
        );

      // 5. CEO / LUXE
      case 'ceo':
        return (
          <div className="h-full bg-[#0a0a0a] text-white overflow-y-auto font-serif flex flex-col items-center pt-16 px-8 border border-white/10">
            <div className="w-28 h-28 rounded-full border border-gray-800 p-1 mb-8 relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" className="w-full h-full rounded-full object-cover grayscale opacity-90" />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
                 <CheckCircle className="w-3 h-3" />
              </div>
            </div>
            
            <h2 className="text-2xl font-light tracking-[0.2em] uppercase text-center mb-2">{profile.name}</h2>
            <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase mb-12 border-b border-gray-800 pb-4">{profile.title}</p>
            
            <p className="text-center text-gray-400 text-xs leading-loose italic mb-10 max-w-[240px]">
               "{profile.bio}"
            </p>

            <div className="w-full space-y-5 max-w-xs mt-auto mb-12">
              <button className="w-full py-3 border border-gray-800 hover:bg-white hover:text-black transition-all text-[10px] tracking-[0.2em] uppercase text-center duration-500">
                Contact Office
              </button>
              <button className="w-full py-3 border border-gray-800 hover:bg-white hover:text-black transition-all text-[10px] tracking-[0.2em] uppercase text-center duration-500">
                Download Press Kit
              </button>
            </div>
          </div>
        );

      // 6. DEVELOPER
      case 'developer':
        return (
          <div className="h-full bg-[#1e1e1e] text-[#00ff41] overflow-y-auto font-mono p-6 relative">
             <div className="absolute top-0 left-0 right-0 h-6 bg-[#2d2d2d] flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-400">bash — 80x24</span>
             </div>

            <div className="mt-8">
              <p className="text-gray-500 text-xs mb-4">Last login: {new Date().toLocaleDateString()} on ttys000</p>
              
              <div className="mb-6">
                <p className="text-white mb-2"><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> <span className="text-pink-500">=</span> {'{'}</p>
                <div className="pl-6 space-y-1 text-sm text-yellow-300">
                  <p>name: <span className="text-green-300">'{profile.name}'</span>,</p>
                  <p>role: <span className="text-green-300">'{profile.title}'</span>,</p>
                  <p>stack: <span className="text-green-300">['React', 'TS', 'Node']</span>,</p>
                  <p>status: <span className="text-green-300">'Open to work'</span></p>
                </div>
                <p className="text-white mt-2">{'}'};</p>
              </div>
              
              <div className="bg-black/30 p-4 rounded border-l-2 border-[#00ff41] mb-6">
                <p className="text-gray-500 text-xs mb-1">// {profile.company}</p>
                <p className="text-sm opacity-90 typing-effect">{profile.bio}</p>
              </div>

              <div className="space-y-3">
                <button className="group w-full py-2 bg-[#00ff41]/5 border border-[#00ff41]/50 text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all text-sm text-left px-4 flex items-center gap-3">
                  <span className="text-pink-500 group-hover:text-black">$</span> ./contact-me.sh <span className="animate-cursor inline-block w-2 h-4 bg-[#00ff41] ml-1"></span>
                </button>
                <div className="grid grid-cols-2 gap-3">
                   <button className="py-2 border border-gray-700 text-gray-400 hover:border-white hover:text-white text-xs text-center transition-colors">GitHub</button>
                   <button className="py-2 border border-gray-700 text-gray-400 hover:border-white hover:text-white text-xs text-center transition-colors">LinkedIn</button>
                </div>
              </div>
            </div>
          </div>
        );

      // 7. INSTAGRAM STYLE (Nouveau)
      case 'instagram':
         return (
            <div className="h-full bg-white text-black overflow-y-auto font-sans">
               {/* Header */}
               <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-20">
                  <span className="font-bold text-lg">{profile.name.replace(/\s/g, '_').toLowerCase()}</span>
                  <div className="flex gap-4">
                     <PlusSquareIcon className="w-6 h-6" />
                     <MenuIcon className="w-6 h-6" />
                  </div>
               </div>

               {/* Bio Section */}
               <div className="px-4 py-4">
                  <div className="flex items-center gap-8 mb-4">
                     <div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" className="w-full h-full rounded-full border-2 border-white object-cover" />
                     </div>
                     <div className="flex-1 flex justify-around text-center">
                        <div>
                           <div className="font-bold text-lg">125</div>
                           <div className="text-xs text-gray-500">Posts</div>
                        </div>
                        <div>
                           <div className="font-bold text-lg">10.2k</div>
                           <div className="text-xs text-gray-500">Followers</div>
                        </div>
                        <div>
                           <div className="font-bold text-lg">450</div>
                           <div className="text-xs text-gray-500">Following</div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mb-4">
                     <h2 className="font-bold text-sm">{profile.name}</h2>
                     <p className="text-sm text-gray-500">{profile.title}</p>
                     <p className="text-sm mt-1">{profile.bio}</p>
                     <a href="#" className="text-sm text-blue-900 font-medium block mt-1">{profile.website}</a>
                  </div>

                  <div className="flex gap-2 mb-6">
                     <button className="flex-1 bg-gray-100 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">Follow</button>
                     <button className="flex-1 bg-gray-100 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">Message</button>
                  </div>
               </div>

               {/* Highlights */}
               <div className="flex gap-4 px-4 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                  {['Design', 'Travel', 'Work', 'Life'].map((item, i) => (
                     <div key={i} className="flex flex-col items-center gap-1 min-w-[60px]">
                        <div className="w-16 h-16 rounded-full border border-gray-200 p-1">
                           <div className="w-full h-full bg-gray-100 rounded-full"></div>
                        </div>
                        <span className="text-xs">{item}</span>
                     </div>
                  ))}
               </div>

               {/* Grid Tabs */}
               <div className="flex border-t border-gray-200">
                  <div className="flex-1 py-3 border-b border-black flex justify-center"><Grid className="w-5 h-5" /></div>
                  <div className="flex-1 py-3 flex justify-center text-gray-400"><Play className="w-5 h-5" /></div>
                  <div className="flex-1 py-3 flex justify-center text-gray-400"><User className="w-5 h-5" /></div>
               </div>

               {/* Photo Grid */}
               <div className="grid grid-cols-3 gap-0.5">
                  {[1,2,3,4,5,6,7,8,9].map((i) => (
                     <div key={i} className="aspect-square bg-gray-100 relative group overflow-hidden">
                        <img src={`https://source.unsplash.com/random/400x400?sig=${i}`} className="w-full h-full object-cover" />
                     </div>
                  ))}
               </div>
            </div>
         );

      // 8. BENTO GRID
      case 'bento':
        return (
          <div className="h-full bg-gray-50 text-gray-900 overflow-y-auto font-sans p-4">
             <div className="grid grid-cols-2 gap-3 h-full content-start">
                <div className="col-span-2 bg-white p-6 rounded-[2rem] shadow-sm flex flex-col items-center text-center relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-24 bg-blue-50/50 -z-0"></div>
                   <div className="w-24 h-24 bg-blue-100 rounded-full mb-3 overflow-hidden border-4 border-white z-10 shadow-sm">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80" className="w-full h-full object-cover" />
                   </div>
                   <h2 className="font-bold text-xl leading-tight">{profile.name}</h2>
                   <p className="text-gray-500 text-xs font-medium uppercase tracking-wide mt-1">{profile.title}</p>
                </div>
                
                <div className="bg-[#0077b5] p-5 rounded-[2rem] shadow-sm flex flex-col justify-between text-white aspect-square hover:scale-[1.02] transition-transform cursor-pointer">
                   <Linkedin className="w-8 h-8" />
                   <span className="font-bold text-sm">Connect</span>
                </div>
                
                <div className="bg-stone-900 p-5 rounded-[2rem] shadow-sm flex flex-col justify-between text-white aspect-square hover:scale-[1.02] transition-transform cursor-pointer">
                   <Globe className="w-8 h-8" />
                   <span className="font-bold text-sm">Website</span>
                </div>

                <div className="col-span-2 bg-white p-6 rounded-[2rem] shadow-sm text-sm text-gray-600 leading-relaxed flex items-center">
                   <p>{profile.bio}</p>
                </div>

                <div className="col-span-2 bg-orange-100 p-2 rounded-[2rem] flex items-center pr-6 hover:bg-orange-200 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-orange-800 uppercase">Contact</div>
                        <div className="text-sm font-medium text-orange-900">{profile.email}</div>
                    </div>
                </div>
             </div>
          </div>
        );

      // 9. MEDICAL
      case 'medical':
         return (
            <div className="h-full bg-white text-slate-800 overflow-y-auto font-sans relative">
               <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-50 rounded-bl-full z-0"></div>
               <div className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-20 h-20 rounded-2xl bg-cyan-100 border-4 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h2 className="text-xl font-bold text-slate-900">Dr. {profile.name.split(' ')[1]}</h2>
                        <span className="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase">{profile.title}</span>
                     </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                     <button className="w-full flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-cyan-200 transition-colors">
                        <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600"><Calendar size={18} /></div>
                        <div className="text-left">
                            <div className="text-xs text-gray-400 font-semibold uppercase">Disponibilité</div>
                            <div className="text-sm font-bold text-slate-700">Prendre Rendez-vous</div>
                        </div>
                        <ChevronRight className="ml-auto text-gray-300 w-5 h-5" />
                     </button>
                     
                     <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                        <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600"><MapPin size={18} /></div>
                        <div className="text-left">
                            <div className="text-xs text-gray-400 font-semibold uppercase">Cabinet</div>
                            <div className="text-sm font-bold text-slate-700">{profile.location}</div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl">
                     <h3 className="font-bold text-sm mb-3 text-slate-800 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-cyan-500" />
                        Spécialités & Parcours
                     </h3>
                     <p className="text-sm leading-relaxed text-slate-600">{profile.bio}</p>
                  </div>
               </div>
            </div>
         );

      // 10. LAWYER (Nouveau)
      case 'lawyer':
        return (
            <div className="h-full bg-slate-900 text-slate-200 overflow-y-auto font-serif">
                <div className="bg-[#1e293b] p-8 border-b border-amber-500/30 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-amber-500"></div>
                    <div className="w-24 h-24 mx-auto rounded-full border-2 border-amber-500/50 p-1 mb-4">
                        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80" className="w-full h-full rounded-full object-cover filter sepia-[.2]" />
                    </div>
                    <h2 className="text-2xl font-bold text-amber-50 mb-1">{profile.name}</h2>
                    <p className="text-amber-500 text-xs tracking-widest uppercase font-sans">{profile.company}</p>
                </div>
                
                <div className="p-8 space-y-8">
                    <div className="text-center">
                         <Gavel className="w-8 h-8 text-amber-600 mx-auto mb-4 opacity-80" />
                         <h3 className="text-lg font-medium text-white mb-2 font-sans uppercase tracking-wide">Expertise Juridique</h3>
                         <p className="text-slate-400 text-sm leading-relaxed italic">
                             "{profile.bio}"
                         </p>
                    </div>

                    <div className="space-y-4 font-sans">
                        <div className="border border-slate-700 p-4 rounded bg-slate-800/50 flex items-center justify-between hover:border-amber-500/50 transition-colors cursor-pointer">
                            <span className="text-sm font-medium">Droit des affaires</span>
                            <ChevronRight className="w-4 h-4 text-amber-600" />
                        </div>
                        <div className="border border-slate-700 p-4 rounded bg-slate-800/50 flex items-center justify-between hover:border-amber-500/50 transition-colors cursor-pointer">
                            <span className="text-sm font-medium">Contentieux</span>
                            <ChevronRight className="w-4 h-4 text-amber-600" />
                        </div>
                    </div>

                    <button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-sans uppercase text-xs font-bold py-4 tracking-widest transition-colors shadow-lg">
                        Consultation Initiale
                    </button>
                </div>
            </div>
        );

      // 11. SPORT (Nouveau)
      case 'sport':
        return (
            <div className="h-full bg-zinc-950 text-white overflow-hidden font-sans italic relative">
                {/* Background Text Overlay */}
                <div className="absolute top-0 left-0 text-[10rem] font-black text-white/5 rotate-90 origin-top-left whitespace-nowrap select-none pointer-events-none">
                    TRAIN HARD
                </div>

                <div className="relative z-10 flex flex-col h-full p-6">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                             <h2 className="text-4xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 leading-none mb-1">
                                 {profile.name.split(' ')[0]}
                             </h2>
                             <h2 className="text-4xl font-black uppercase text-white leading-none">
                                 {profile.name.split(' ')[1]}
                             </h2>
                        </div>
                        <Dumbbell className="w-10 h-10 text-lime-400 rotate-[-45deg]" />
                    </div>

                    <div className="mb-8 border-l-4 border-lime-400 pl-4">
                        <p className="text-xl font-bold uppercase text-gray-200">{profile.title}</p>
                        <p className="text-sm text-gray-500 not-italic mt-1">{profile.company}</p>
                    </div>

                    <div className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg mb-8 not-italic border border-white/10">
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {profile.bio}
                        </p>
                    </div>

                    <div className="mt-auto space-y-3 not-italic">
                        <button className="w-full py-4 bg-lime-500 hover:bg-lime-400 text-black font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-transform active:scale-95">
                             <span className="inline-block skew-x-[10deg]">Coaching 1:1</span>
                        </button>
                        <button className="w-full py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-black uppercase tracking-widest text-sm skew-x-[-10deg] transition-colors">
                             <span className="inline-block skew-x-[10deg]">Plans Training</span>
                        </button>
                    </div>
                </div>
            </div>
        );

      // 12. RESTAURANT
      case 'restaurant':
         return (
            <div className="h-full bg-[#1a1a1a] text-[#e5e5e5] overflow-y-auto font-serif text-center p-6 border-double border-[6px] border-[#d4af37] m-2">
               <div className="border-b border-[#d4af37] pb-8 mb-8 mt-4">
                  <div className="flex justify-center mb-4">
                     <Star className="w-4 h-4 text-[#d4af37]" />
                     <Star className="w-4 h-4 text-[#d4af37] mx-2" />
                     <Star className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <h2 className="text-4xl font-bold text-[#d4af37] mb-2 italic tracking-tight">{profile.company}</h2>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white font-sans mt-3">Fine Dining & Cocktails</p>
               </div>
               
               <div className="mb-10 relative">
                   <span className="text-6xl text-[#d4af37] absolute -top-4 left-0 opacity-20">"</span>
                   <p className="text-sm italic text-[#a3a3a3] leading-loose px-4">
                       {profile.bio}
                   </p>
                   <span className="text-6xl text-[#d4af37] absolute -bottom-8 right-0 opacity-20">"</span>
               </div>

               <div className="space-y-4 font-sans max-w-[200px] mx-auto">
                  <button className="w-full py-3 bg-[#d4af37] text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors duration-500">
                     Réserver une table
                  </button>
                  <button className="w-full py-3 border border-[#d4af37] text-[#d4af37] font-bold uppercase tracking-wider text-xs hover:bg-[#d4af37] hover:text-black transition-colors duration-500">
                     Voir le Menu
                  </button>
               </div>
               
               <div className="mt-12 text-[10px] text-[#666] font-sans uppercase tracking-widest border-t border-[#333] pt-6">
                  <p className="mb-2">{profile.location}</p>
                  <p>Ouvert Mar - Dim • 19h - 23h</p>
               </div>
            </div>
         );

      default:
        return <div>Template non trouvé</div>;
    }
  };

  // --- ICONS POUR HELPER ---
  const PlusSquareIcon = ({className}:{className?:string}) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
  );
  
  const MenuIcon = ({className}:{className?:string}) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in pb-20 p-8 max-w-7xl mx-auto">
      
      {/* ----- COLONNE GAUCHE : ÉDITEUR ----- */}
      <div className="space-y-8">
        <div className="bg-[#18181b] p-8 rounded-3xl border border-white/5 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Send className="w-5 h-5 text-cyan-400" />
            </div>
            Configuration du Profil
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
               <label className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">Nom complet</label>
               <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder-gray-700" placeholder="Ex: Jean Dupont" />
            </div>
            <div className="col-span-2 md:col-span-1">
               <label className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">Titre / Poste</label>
               <input type="text" name="title" value={profile.title} onChange={handleChange} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder-gray-700" placeholder="Ex: CEO" />
            </div>
            <div className="col-span-2">
               <label className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">Entreprise / Marque</label>
               <input type="text" name="company" value={profile.company} onChange={handleChange} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder-gray-700" />
            </div>
            <div className="col-span-2">
               <label className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">Bio / Description</label>
               <textarea name="bio" rows={3} value={profile.bio} onChange={handleChange} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none resize-none transition-all placeholder-gray-700 leading-relaxed" />
               <div className="text-right text-[10px] text-gray-600 mt-1">{profile.bio.length}/180</div>
            </div>
            <div className="col-span-2 md:col-span-1">
               <label className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">Email</label>
               <input type="text" name="email" value={profile.email} onChange={handleChange} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
            </div>
             <div className="col-span-2 md:col-span-1">
               <label className="text-xs text-gray-500 uppercase tracking-wider font-bold block mb-2">Localisation</label>
               <input type="text" name="location" value={profile.location} onChange={handleChange} className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3 px-2">
             <div className="p-2 bg-purple-500/10 rounded-lg">
                <Layout className="w-5 h-5 text-purple-400" />
             </div>
             Choisir le Design <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300 ml-2">{TEMPLATES.length}</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar pb-10">
            {TEMPLATES.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setProfile({ ...profile, template: t.id })}
                  className={`p-4 rounded-2xl border text-left transition-all relative group flex flex-col gap-3 h-full
                    ${profile.template === t.id 
                      ? 'border-cyan-500 bg-[#18181b] shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] ring-1 ring-cyan-500' 
                      : 'border-white/5 bg-[#18181b]/50 hover:bg-[#18181b] hover:border-white/20 hover:scale-[1.02]'}
                  `}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${profile.template === t.id ? 'bg-cyan-500 text-black' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'}`}>
                      <Icon size={20} />
                  </div>
                  <div>
                     <span className={`text-sm font-bold block mb-1 ${profile.template === t.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{t.name}</span>
                     <span className="text-[10px] text-gray-500 leading-tight block">{t.desc}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ----- COLONNE DROITE : APERÇU ----- */}
      <div className="sticky top-12 flex justify-center perspective-[2000px]">
        <div className="relative group transition-transform duration-700 ease-out transform-gpu hover:rotate-y-[-2deg] hover:rotate-x-[2deg]">
           {/* Glow Effect */}
           <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-blue-600/30 blur-3xl rounded-full opacity-40 animate-pulse pointer-events-none"></div>
           
           {/* CADRE TÉLÉPHONE */}
           <div className="relative w-[340px] h-[680px] bg-black rounded-[3.5rem] border-[12px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/20 z-10">
              
              {/* STATUS BAR (Fake) */}
              <div className="absolute top-0 left-0 right-0 h-12 z-50 flex justify-between items-end px-7 pb-2 mix-blend-difference text-white pointer-events-none">
                 <span className="text-xs font-semibold tracking-wide">9:41</span>
                 <div className="flex gap-1.5 items-center">
                    <Activity size={12} />
                    <div className="w-5 h-3 bg-white rounded-[2px] relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -right-0.5 w-0.5 h-1.5 bg-white rounded-r-[1px]"></div>
                    </div>
                 </div>
              </div>

              {/* DYNAMIC ISLAND (Fake) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 pointer-events-none"></div>

              {/* BARRE EN BAS (Home indicator) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-50 pointer-events-none mix-blend-difference"></div>

              {/* CONTENU DU TEMPLATE */}
              <div className="h-full w-full bg-white overflow-hidden rounded-[2.8rem]">
                 {renderTemplate()}
              </div>

           </div>
           
           {/* Reflection */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-[3.5rem] pointer-events-none z-20"></div>

           <div className="text-center mt-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Aperçu temps réel
              </div>
              <p className="text-gray-600 text-xs font-mono">340 x 680 • iPhone 14 Pro</p>
           </div>
        </div>
      </div>
    </div>
  );
}