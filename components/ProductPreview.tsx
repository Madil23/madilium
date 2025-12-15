import React from 'react';
import { MaterialType, CardColor, ProductConfig } from '../types';
import { Nfc } from 'lucide-react';

interface Props {
  config: ProductConfig;
}

export const ProductPreview: React.FC<Props> = ({ config }) => {
  
  // Determine overlay color style based on config
  const getOverlayStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = { 
      mixBlendMode: 'multiply', // 'multiply' works best for darkening/tinting a light base image
      opacity: 0.8 
    };

    // WOOD
    if (config.material === MaterialType.WOOD) {
      if (config.color === CardColor.WOOD_OAK) return { ...baseStyle, backgroundColor: '#A0522D', opacity: 0.6 };
      if (config.color === CardColor.WOOD_WALNUT) return { ...baseStyle, backgroundColor: '#5C4033', opacity: 0.7 };
      if (config.color === CardColor.WOOD_BAMBOO) return { ...baseStyle, backgroundColor: '#E3C699', opacity: 0.5 };
      if (config.color === CardColor.WOOD_EBONY) return { ...baseStyle, backgroundColor: '#2A2420', opacity: 0.85 };
    }
    
    // PMMA / METAL
    if (config.material === MaterialType.PMMA) {
      if (config.color === 'transparent') return { backgroundColor: 'transparent', opacity: 0 };
      if (config.color === CardColor.WHITE) return { backgroundColor: '#ffffff', mixBlendMode: 'soft-light', opacity: 0.5 };
      if (config.color === CardColor.BLACK) return { backgroundColor: '#000000', mixBlendMode: 'multiply', opacity: 0.9 };
      
      // Metallic Gradients
      if (config.color === CardColor.GOLD) {
        return { 
          backgroundImage: 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)', 
          mixBlendMode: 'color', 
          opacity: 0.8 
        };
      }
      if (config.color === CardColor.ROSE_GOLD) {
        return { 
          backgroundImage: 'linear-gradient(135deg, #e6b2b2, #f5d0d0, #d49090, #e6b2b2)', 
          mixBlendMode: 'color', 
          opacity: 0.8 
        };
      }
      if (config.color === CardColor.SILVER) {
        return { 
          backgroundImage: 'linear-gradient(135deg, #e0e0e0, #ffffff, #a0a0a0, #d0d0d0)', 
          mixBlendMode: 'hard-light', 
          opacity: 0.6 
        };
      }

      // Default Standard Colors
      return { ...baseStyle, backgroundColor: config.color };
    }

    return {};
  };

  const overlayStyle = getOverlayStyle();

  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <div className="relative w-full max-w-sm group">
        
        {/* Glow effect behind the card */}
        <div 
            className="absolute inset-0 blur-3xl rounded-full transform scale-75 group-hover:scale-90 transition-transform duration-700 pointer-events-none"
            style={{ 
                backgroundColor: config.color === CardColor.GOLD ? '#b38728' : 
                                 config.color === CardColor.ROSE_GOLD ? '#e6b2b2' : 
                                 'rgba(0, 212, 255, 0.2)' 
            }}
        />

        <div className="relative w-full aspect-[1.586/1] transition-transform duration-500 transform group-hover:scale-105 group-hover:-rotate-1">
          
          {/* Base Image */}
          <img 
            src="/card.png" 
            alt="Madilium NFC Card" 
            className="w-full h-full object-contain drop-shadow-2xl relative z-10" 
          />

          {/* Color/Material Tint Overlay */}
          <div 
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              maskImage: 'url(/card.png)',
              WebkitMaskImage: 'url(/card.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              ...overlayStyle
            }}
          />

          {/* Wood Grain Texture Overlay (only visible if Wood is selected) */}
          {config.material === MaterialType.WOOD && (
            <div 
              className="absolute inset-0 z-20 opacity-30 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                maskImage: 'url(/card.png)',
                WebkitMaskImage: 'url(/card.png)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          )}

          {/* Shine effect (Enhanced for metallic) */}
          <div 
            className="absolute inset-0 z-30 bg-gradient-to-tr from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
             style={{
              maskImage: 'url(/card.png)',
              WebkitMaskImage: 'url(/card.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
             }}
          />

        </div>

        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-full">
           <span className="text-xs text-stone-500 uppercase tracking-wider font-mono">
            {config.material} — {config.color.replace('_', ' ')}
          </span>
        </div>
      </div>
    </div>
  );
};