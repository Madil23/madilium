import React from 'react';
import ReactDOM from 'react-dom/client';
import { Zap, ShieldCheck, Smartphone } from 'lucide-react';
import { Configurator } from './Configurator';

// --- LOGO COMPONENT ---

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Madilium Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerText = 'MADILIUM';
        }}
      />
    </div>
  );
};

// --- APP LAYOUT COMPONENT ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-madilium-accent selection:text-black">
      
      {/* Header */}
      <nav className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Logo />
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-stone-300 hover:text-white transition-colors">How it works</a>
              <a href="#" className="text-stone-300 hover:text-white transition-colors">Templates</a>
              <a href="#" className="px-4 py-2 bg-white text-stone-950 rounded-full font-bold hover:bg-stone-200 transition-colors">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
             One Tap. <span className="text-transparent bg-clip-text bg-gradient-to-r from-madilium-accent to-purple-500">Infinite Possibilities.</span>
           </h1>
           <p className="text-xl text-stone-400 max-w-2xl mx-auto mb-10">
             The premium NFC card that connects your digital world to the physical one. Choose your material, customize your landing page, and start sharing instantly.
           </p>
        </div>
        
        {/* Features Strip */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-stone-800 py-8 mb-12">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-stone-900 rounded-full text-madilium-accent"><Zap size={24} /></div>
            <h3 className="font-bold text-white">Instant Sharing</h3>
            <p className="text-sm text-stone-500">No app required for receivers.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-stone-900 rounded-full text-madilium-accent"><ShieldCheck size={24} /></div>
            <h3 className="font-bold text-white">Premium Materials</h3>
            <p className="text-sm text-stone-500">PMMA Acrylic or Natural Wood.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-stone-900 rounded-full text-madilium-accent"><Smartphone size={24} /></div>
            <h3 className="font-bold text-white">Custom Profile</h3>
            <p className="text-sm text-stone-500">15+ Pro Templates included.</p>
          </div>
        </div>
      </section>

      {/* Main Configurator Area */}
      <section id="configurator" className="bg-gradient-to-b from-stone-950 to-stone-900 pb-24">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Build Your Madilium</h2>
          <p className="text-stone-400">Customize the physical card and your digital identity.</p>
        </div>
        <Configurator />
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo className="h-8 grayscale opacity-50" />
          <div className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Madilium. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- MOUNT ---

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);