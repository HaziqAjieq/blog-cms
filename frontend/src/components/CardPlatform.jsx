import React from 'react';

export default function CardPlatform({ platform }) {
  return (
    <div 
  key={platform.id}
  className="relative max-w-sm h-48 rounded-lg overflow-hidden cursor-pointer" // Set fixed height and rounded corners
  style={{ 
    backgroundImage: `url(${platform.icon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }}
>
  {/* Gradient overlay for better text visibility */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent hover:bg-black/30 transition-all duration-300"></div>
  
  {/* Platform name */}
  <span className="absolute bottom-4 left-4 text-white font-bold text-lg z-10">
    {platform.name}
  </span>
</div>
  );
}