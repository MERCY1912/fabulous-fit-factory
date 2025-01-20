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
        src="/lovable-uploads/4b8a9ebb-e9e2-47a2-b681-116d77f02606.png"
        alt="Base character model"
        className="absolute inset-0 w-full h-full object-contain rounded-lg"
      />
      
      {/* Render wearing items */}
      {wearingItems.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="Clothing item"
          className="absolute inset-0 w-full h-full object-contain rounded-lg animate-fade-in"
        />
      ))}
    </div>
  );
};