import React from 'react';
import logoImg from '../assets/images/regenerated_image_1792137091747.png';

interface MpLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const MpLogo: React.FC<MpLogoProps> = ({ 
  className = "h-8 w-auto", 
  glow = true
}) => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Subtle, soft ambient glow effect to blend seamlessly with the dark background */}
      {glow && (
        <div 
          className="absolute -inset-1 bg-[#00E85B]/25 blur-md rounded-full opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" 
          aria-hidden="true" 
        />
      )}
      
      {/* Completely pure white #FFFFFF logo with zero background box and soft luminous glow */}
      <img
        src={logoImg}
        alt="FITNESS FIRST Official MP Monogram"
        className={`${className} relative z-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.85)] drop-shadow-[0_0_16px_rgba(0,230,83,0.55)] transition-transform`}
      />
    </div>
  );
};
