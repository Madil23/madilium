import React, { useState } from 'react';
import { ShoppingBag, Wifi } from 'lucide-react';

export const ProductConfigurator = () => {
  // On gère l'état des choix (Matériau, Finition, Onglet)
  const [material, setMaterial] = useState('pmma'); // 'pmma' ou 'wood'
  const [finish, setFinish] = useState('black'); // 'black', 'white', ou 'matte'
  const [activeTab, setActiveTab] = useState('physical'); // 'physical' ou 'digital'

  return (
    <div className="bg-stone-950 py-16 px-4 border-t border-white/5" id="configurator">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Build Your Madilium</h2>
           <p className="text-gray-400">Customize the physical card and your digital identity.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
           {/* Colonne Gauche : Les Contrôles */}
           <div className="space-y-8">
              {/* Onglets (Tabs) */}
              <div className="flex p-1 bg-stone-900 rounded-lg border border-white/10">
                 <button 
                   onClick={() => setActiveTab('physical')}
                   className={`flex-1 py-3 text-sm font-medium rounded-md transition-all ${activeTab === 'physical' ? 'bg-cyan-500 text-stone-950 shadow-lg' : 'text-gray-400 hover:text-white'}`}
                 >
                   Physical Product
                 </button>
                 <button 
                    onClick={() => setActiveTab('digital')}
                    className={`flex-1 py-3 text-sm font-medium rounded-md transition-all ${activeTab === 'digital' ? 'bg-cyan-500 text-stone-950 shadow-lg' : 'text-gray-400 hover:text-white'}`}
                 >
                   Digital Profile
                 </button>
              </div>

              {/* Choix Matériau */}
              <div className="space-y-4">
                 <h3 className="text-white font-semibold">Choose Material</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setMaterial('pmma')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${material === 'pmma' ? 'border-cyan-500 bg-stone-900/50' : 'border-stone-800 bg-transparent hover:border-stone-700'}`}
                    >
                       <span className="block text-white font-bold text-lg">PMMA</span>
                       <span className="text-xs text-gray-400">High Gloss Acrylic</span>
                    </button>
                    <button 
                      onClick={() => setMaterial('wood')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${material === 'wood' ? 'border-cyan-500 bg-stone-900/50' : 'border-stone-800 bg-transparent hover:border-stone-700'}`}
                    >
                       <span className="block text-white font-bold text-lg">WOOD</span>
                       <span className="text-xs text-gray-400">Natural Finish</span>
                    </button>
                 </div>
              </div>

              {/* Choix Finition (Couleurs) */}
              <div className="space-y-4">
                 <h3 className="text-white font-semibold">Select Finish</h3>
                 <div className="flex gap-4">
                    <button 
                      onClick={() => setFinish('black')}
                      className={`w-12 h-12 rounded-full bg-black border-2 transition-all ${finish === 'black' ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-stone-700'}`}
                      title="Black"
                    />
                    <button 
                      onClick={() => setFinish('white')}
                      className={`w-12 h-12 rounded-full bg-white border-2 transition-all ${finish === 'white' ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-stone-700'}`}
                      title="White"
                    />
                    <button 
                      onClick={() => setFinish('matte')}
                      className={`w-12 h-12 rounded-full bg-stone-700 border-2 transition-all ${finish === 'matte' ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-stone-700'}`}
                      title="Matte Gray"
                    />
                 </div>
              </div>

              {/* Prix et Bouton Commander */}
              <div className="pt-8 border-t border-white/10">
                 <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-400">Unit Price</span>
                    <span className="text-3xl font-bold text-white">$29.99</span>
                 </div>
                 <button className="w-full py-4 bg-white text-stone-950 font-bold text-lg rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Order Card
                 </button>
              </div>
           </div>

           {/* Colonne Droite : Aperçu Visuel (Preview) */}
           <div className="bg-stone-900 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden border border-white/5">
              {/* Simulation de la carte */}
              <div className={`relative w-80 h-52 rounded-2xl shadow-2xl transition-all duration-500 flex items-center justify-center border border-white/10
                 ${material === 'pmma' && finish === 'black' ? 'bg-black text-white' : ''}
                 ${material === 'pmma' && finish === 'white' ? 'bg-white text-stone-950' : ''}
                 ${material === 'pmma' && finish === 'matte' ? 'bg-stone-800 text-white' : ''}
                 ${material === 'wood' ? 'bg-[#5c4033] text-white' : ''}
              `}>
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center opacity-80">
                        <Wifi className="w-6 h-6 rotate-90" />
                     </div>
                     <span className="font-bold tracking-widest text-sm opacity-90">MADILIUM</span>
                  </div>
              </div>
              
              <div className="mt-8 text-center">
                 <h3 className="text-white text-xl font-bold mb-1">Madilium NFC Tag</h3>
                 <p className="text-gray-400 text-sm">Tap to share instantly. Water resistant. Durable Acrylic.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};