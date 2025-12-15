import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Madilium Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback if image is missing during dev
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerText = 'MADILIUM (Upload logo.png)';
        }}
      />
    </div>
  );
};