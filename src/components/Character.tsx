import React from 'react';
import { cn } from "@/lib/utils";

const CLOTHING_ITEMS = [
  {
    id: 'stockings1',
    wearingImage: '/lovable-uploads/5d5ce8e7-bb32-426f-be23-cc38d48fc107.png',
  },
  {
    id: 'tights1',
    wearingImage: '/placeholder.svg',
  },
  {
    id: 'skirt1',
    wearingImage: '/placeholder.svg',
  },
  {
    id: 'top1',
    wearingImage: '/placeholder.svg',
  }
];

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
      {wearingItems.map((itemId) => {
        const item = CLOTHING_ITEMS.find(item => item.id === itemId);
        if (!item) return null;
        
        return (
          <img
            key={itemId}
            src={item.wearingImage}
            alt="Clothing item"
            className="absolute inset-0 w-full h-full object-contain rounded-lg animate-fade-in"
          />
        );
      })}
    </div>
  );
};