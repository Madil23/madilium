import React from 'react';
import { Zap, Shield, Smartphone } from 'lucide-react';

export const Hero = () => {
  return (
    // L'ID "home" est crucial pour que la navigation fonctionne
    <div id="home" className="bg-stone-950 py-24 text-center px-4">
       <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
         One Tap. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Infinite Possibilities.</span>
       </h1>
       <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16">
         The premium NFC card that connects your digital world to the physical one. Choose your material, customize your landing page, and start sharing instantly.
       </p>

       <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
         {/* Feature 1 */}
         <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-cyan-400 border border-white/10 shadow-lg shadow-cyan-900/20">
               <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg">Instant Sharing</h3>
            <p className="text-gray-500 text-sm">No app required for receivers.</p>
         </div>
         {/* Feature 2 */}
         <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-cyan-400 border border-white/10 shadow-lg shadow-cyan-900/20">
               <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg">Premium Materials</h3>
            <p className="text-gray-500 text-sm">PMMA Acrylic or Natural Wood.</p>
         </div>
         {/* Feature 3 */}
         <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-cyan-400 border border-white/10 shadow-lg shadow-cyan-900/20">
               <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-lg">Custom Profile</h3>
            <p className="text-gray-500 text-sm">5+ Pro Templates included.</p>
         </div>
       </div>
    </div>
  );
};