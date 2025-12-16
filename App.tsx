import React from 'react';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white selection:bg-cyan-500/30">
      <Navbar />
      
      {/* Section Héro Temporaire pour voir le résultat */}
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Le futur de votre <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Networking Digital
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Bientôt ici : Le configurateur de cartes NFC Madilium avec plus de 15 templates personnalisables.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;