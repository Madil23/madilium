import React, { useState } from 'react';
import { Logo } from './Logo';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour scroller en douceur vers une section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Ferme le menu mobile si ouvert
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-stone-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo : Retour en haut de page */}
          <div onClick={() => scrollToSection('home')} className="flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <Logo />
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('configurator')} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
              Personnaliser
            </button>
            <button className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-not-allowed opacity-50">
              Templates (Bientôt)
            </button>
          </div>

          {/* Boutons Action */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('configurator')}
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-stone-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors"
            >
              Commander
              <ShoppingBag className="w-4 h-4" />
            </button>
            
            {/* Bouton Menu Mobile */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Visible seulement sur petit écran) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('configurator')}
              className="block w-full text-left px-3 py-3 text-base font-medium text-white hover:bg-white/5 rounded-md"
            >
              Personnaliser sa carte
            </button>
            <button 
              onClick={() => scrollToSection('configurator')}
              className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-stone-950 bg-cyan-400 rounded-xl"
            >
              Commander maintenant
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};