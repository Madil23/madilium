import React from 'react';
import { Wifi } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20">
        <Wifi className="w-6 h-6 text-white rotate-90" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-white leading-none">
          Madilium
        </span>
        <span className="text-[10px] font-medium tracking-widest text-gray-400 uppercase">
          NFC Solutions
        </span>
      </div>
    </div>
  );
};