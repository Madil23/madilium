import React from 'react';
import { Logo } from './Logo';
import { ShoppingBag, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo à gauche */}
          <div className="flex-shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Menu central (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Nos Cartes
            </button>
            <button className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Fonctionnalités
            </button>
            <button className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Templates
            </button>
          </div>

          {/* Boutons à droite */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors">
              Commander
              <ShoppingBag className="w-4 h-4" />
            </button>
            {/* Menu Mobile Icon */}
            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};