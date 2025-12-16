import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductConfigurator } from './components/ProductConfigurator';

function App() {
  return (
    // On applique le fond sombre et le texte blanc à toute l'application
    <div className="bg-stone-950 text-white selection:bg-cyan-500/30">
      {/* La Navbar est 'fixed', elle flotte au-dessus du reste */}
      <Navbar />
      
      {/* Le contenu principal. 'pt-20' laisse de la place pour la Navbar en haut */}
      {/* 'min-h-screen' assure que le fond couvre au moins tout l'écran */}
      <main className="pt-20 min-h-screen flex flex-col">
        {/* Les sections s'empilent les unes sous les autres */}
        <Hero />
        <ProductConfigurator />
      </main>
    </div>
  );
}

export default App;