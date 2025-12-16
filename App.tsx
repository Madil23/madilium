import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductConfigurator } from './components/ProductConfigurator';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-white selection:bg-cyan-500/30">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <ProductConfigurator />
      </main>
    </div>
  );
}

export default App;