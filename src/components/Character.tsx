import React from 'react';
import { cn } from "@/lib/utils";

interface CharacterProps {
  wearingItems: string[];
  className?: string;
}

export const Character: React.FC<CharacterProps> = ({ wearingItems, className }) => {
  return (
    <div className={cn("character-container", className)}>
      {/* Base character */}
      <img
        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
        alt="Character"
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
      
      {/* Render wearing items */}
      {wearingItems.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="Clothing item"
          className="absolute inset-0 w-full h-full object-cover rounded-lg animate-fade-in"
        />
      ))}
    </div>
  );
};