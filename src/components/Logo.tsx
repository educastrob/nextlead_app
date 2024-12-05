import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Next Lead Marketing Digital" 
        className="h-12"
      />
    </div>
  );
}