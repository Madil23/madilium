import React, { useState } from 'react';
import { ShoppingBag, Wifi, Box, Smartphone } from 'lucide-react';
// IMPORTANT : On importe le nouveau composant
import { DigitalProfileConfigurator } from './DigitalProfileConfigurator';

export const ProductConfigurator = () => {
  // États pour la partie "Carte Physique"
  const [material, setMaterial] = useState('pmma');
  const [finish, setFinish] = useState('black');
  
  // État pour savoir quel onglet est actif (physique ou digital)
  const [activeTab, setActiveTab] = useState<'physical' | 'digital'>('physical');

  return (
    <div className="bg-stone-950 py-24 px-4" id="configurator">
      <div className="max-w-6xl mx-auto">
        {/* En-tête de section */}
        <div className="text-center mb-16 space-y-4">
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
             Build Your Madilium
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">
             Customize the physical card and craft your unique digital identity.
           </p>
        </div>

        {/* Barre d'onglets (Tabs) pour basculer entre Physique et Digital */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-stone-900/80 rounded-2xl border border-white/10 backdrop-blur-sm">
              <button 
                onClick={() => setActiveTab('physical')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'physical' ? 'bg-cyan-500 text-stone-950 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Box className="w-4 h-4" />
                Physical Product
              </button>
              <button 
                onClick={() => setActiveTab('digital')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === 'digital' ? 'bg-cyan-500 text-stone-950 shadow-lg shadow-cyan-500/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <Smartphone className="w-4 h-4" />
                Digital Profile
              </button>
          </div>
        </div>

        {/* Contenu conditionnel : On affiche l'un OU l'autre */}
        <div className="bg-stone-900/30 rounded-[2.5rem] border border-white/5 p-8 md:p-12 backdrop-blur-sm">
          
          {/* ----- CAS 1 : Onglet "Physical Product" actif ----- */}
          {activeTab === 'physical' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
               {/* Colonne Gauche : Choix Matériaux/Finitions */}
               <div className="space-y-10">
                  <div className="space-y-6">
                     <h3 className="text-xl font-bold text-white flex items-center gap-2">
                       <Box className="w-5 h-5 text-cyan-400" />
                       Choose Material
                     </h3>
                     <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={() => setMaterial('pmma')}
                          className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 group ${material === 'pmma' ? 'border-cyan-500 bg-cyan-950/30 shadow-md' : 'border-stone-800 bg-stone-900/50 hover:border-stone-700 hover:bg-stone-900/80'}`}
                        >
                           <span className="block text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">PMMA</span>
                           <span className="text-sm text-gray-400">High Gloss Acrylic</span>
                        </button>
                        <button 
                          onClick={() => setMaterial('wood')}
                          className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 group ${material === 'wood' ? 'border-cyan-500 bg-cyan-950/30 shadow-md' : 'border-stone-800 bg-stone-900/50 hover:border-stone-700 hover:bg-stone-900/80'}`}
                        >
                           <span className="block text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">WOOD</span>
                           <span className="text-sm text-gray-400">Natural Finish</span>
                        </button>
                     </div>
                  </div>

                  {/* Sélecteur de Finition (visible uniquement pour PMMA) */}
                  <div className={`space-y-6 transition-all duration-500 ${material === 'wood' ? 'opacity-50 grayscale pointer-events-none' : 'opacity-100'}`}>
                     <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        </div>
                       Select Finish
                     </h3>
                     <div className="flex gap-6">
                        {['black', 'white', 'matte'].map((finishOption) => (
                          <button 
                            key={finishOption}
                            onClick={() => setMaterial('pmma') || setFinish(finishOption)}
                            className={`w-14 h-14 rounded-full border-2 transition-all duration-300 transform hover:scale-110 ${finish === finishOption && material === 'pmma' ? 'border-cyan-500 ring-4 ring-cyan-500/20 scale-110' : 'border-stone-700 hover:border-stone-500'}
                              ${finishOption === 'black' ? 'bg-black' : ''}
                              ${finishOption === 'white' ? 'bg-white' : ''}
                              ${finishOption === 'matte' ? 'bg-stone-800' : ''}
                            `}
                            title={finishOption.charAt(0).toUpperCase() + finishOption.slice(1)}
                            disabled={material === 'wood'}
                          />
                        ))}
                     </div>
                  </div>

                  {/* Prix et Action */}
                  <div className="pt-10 border-t border-white/10">
                     <div className="flex justify-between items-baseline mb-8">
                        <span className="text-gray-400 font-medium">Unit Price</span>
                        <span className="text-4xl font-bold text-white">$29.99</span>
                     </div>
                     <button className="w-full py-4 bg-white text-stone-950 font-bold text-lg rounded-2xl hover:bg-cyan-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-white/10">
                        <ShoppingBag className="w-6 h-6" />
                        Order Now
                     </button>
                  </div>
               </div>

               {/* Colonne Droite : Aperçu de la carte 3D */}
               <div className="bg-stone-900/50 rounded-3xl p-8 md:p-12 aspect-square flex flex-col items-center justify-center relative overflow-hidden border border-white/5 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* La carte elle-même */}
                  <div className={`relative w-full max-w-md aspect-[1.586/1] rounded-3xl shadow-2xl transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-1 flex items-center justify-center border-2 backdrop-blur-xl
                     ${material === 'pmma' && finish === 'black' ? 'bg-black/90 border-stone-800 text-white shadow-black/50' : ''}
                     ${material === 'pmma' && finish === 'white' ? 'bg-white/90 border-white text-stone-950 shadow-white/20' : ''}
                     ${material === 'pmma' && finish === 'matte' ? 'bg-stone-800/90 border-stone-700 text-white shadow-black/50' : ''}
                     ${material === 'wood' ? 'bg-[#5c4033]/90 border-[#3e2b22] text-white shadow-[#3e2b22]/50 bg-[url("https://images.unsplash.com/photo-1589207274588-697324090500?q=80&w=1000&auto=format&fit=crop")] bg-cover bg-blend-overlay' : ''}
                  `}>
                      {/* Reflets brillants pour PMMA */}
                      {material === 'pmma' && (
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent skew-y-12 transform -translate-y-1/2"></div>
                        </div>
                      )}
                      
                      {/* Contenu de la carte */}
                      <div className="flex flex-col items-center gap-6 relative z-10">
                         <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${material === 'pmma' && finish === 'white' ? 'border-stone-950' : 'border-white/80'}`}>
                            <Wifi className="w-8 h-8 rotate-90" />
                         </div>
                         <span className="font-bold tracking-[0.3em] text-lg">MADILIUM</span>
                      </div>
                  </div>
                  
                  <div className="mt-12 text-center relative z-10">
                     <h3 className="text-white text-2xl font-bold mb-2">Madilium NFC Tag</h3>
                     <p className="text-gray-400 font-medium">Tap to share instantly. Premium {material === 'pmma' ? 'Acrylic' : 'Wood'}.</p>
                  </div>
               </div>
            </div>
          )}

          {/* ----- CAS 2 : Onglet "Digital Profile" actif ----- */}
          {activeTab === 'digital' && (
            // On affiche le nouveau composant qu'on vient de créer
            <DigitalProfileConfigurator />
          )}
          
        </div>
      </div>
    </div>
  );
};