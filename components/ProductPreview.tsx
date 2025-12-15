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

    if (config.material === MaterialType.WOOD) {
      if (config.color === CardColor.WOOD_OAK) return { ...baseStyle, backgroundColor: '#A0522D', opacity: 0.6 };
      if (config.color === CardColor.WOOD_WALNUT) return { ...baseStyle, backgroundColor: '#5C4033', opacity: 0.7 };
    }
    
    if (config.material === MaterialType.PMMA) {
      if (config.color === 'transparent') return { backgroundColor: 'transparent', opacity: 0 };
      if (config.color === CardColor.WHITE) return { backgroundColor: '#ffffff', mixBlendMode: 'soft-light', opacity: 0.5 };
      if (config.color === CardColor.BLACK) return { backgroundColor: '#000000', mixBlendMode: 'multiply', opacity: 0.9 };
      return { ...baseStyle, backgroundColor: config.color };
    }

    return {};
  };

  const overlayStyle = getOverlayStyle();

  return (
    <div className="w-full flex flex-col items-center justify-center p-8">
      <div className="relative w-full max-w-sm group">
        
        {/* Glow effect behind the card */}
        <div className="absolute inset-0 bg-madilium-accent/20 blur-3xl rounded-full transform scale-75 group-hover:scale-90 transition-transform duration-700 pointer-events-none" />

        <div className="relative w-full aspect-[1.586/1] transition-transform duration-500 transform group-hover:scale-105 group-hover:-rotate-1">
          
          {/* Base Image */}
          <img 
            src="/card.png" 
            alt="Madilium NFC Card" 
            className="w-full h-full object-contain drop-shadow-2xl relative z-10" 
          />

          {/* Color/Material Tint Overlay */}
          {/* This assumes the card.png is a transparent PNG with the card cut out. 
              The overlay is clipped to the image using mask-image if browser supports, 
              or we rely on the image being a block. 
              Since we can't easily mask an arbitrary PNG client-side without canvas, 
              we apply the filter to a container that matches the image, or simply overlay a div 
              that matches the approximate shape if it was simple. 
              
              BETTER APPROACH for arbitrary images: 
              We can't perfectly tint a complex shape PNG with a simple div overlay unless we use -webkit-mask-box-image or similar.
              However, assuming the user wants to see the image they uploaded primarily:
          */}
          
          {/* Simple overlay for rectangular cards, or if the user provides specific colored images we would swap sources. 
              Here we attempt a CSS filter on the image itself for simple hue rotations, or a mask.
          */}
          
          {/* Option A: Tinting using an absolute div with mask-image (requires the same image as mask) */}
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

          {/* Shine effect */}
          <div 
            className="absolute inset-0 z-30 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
            {config.material} — {config.color === 'transparent' ? 'Clear' : config.color}
          </span>
        </div>
      </div>
    </div>
  );
};