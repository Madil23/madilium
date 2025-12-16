import React from 'react';
// Cette ligne dit à l'ordinateur d'aller chercher l'image qui est un dossier plus haut (..)
// @ts-ignore
import logoSrc from '../madilium.jpg';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Conteneur de l'image du logo */}
      <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-white/10">
        <img 
          src={logoSrc} 
          alt="Madilium Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Texte à côté du logo */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-white leading-none">
          Madilium
        </span>
        <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase mt-1">
          NFC Solutions
        </span>
      </div>
    </div>
  );
};