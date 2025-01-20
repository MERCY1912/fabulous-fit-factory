import React from 'react';
import { cn } from "@/lib/utils";

interface ClothingItemProps {
  name: string;
  image: string;
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
}

export const ClothingItem: React.FC<ClothingItemProps> = ({
  name,
  image,
  onClick,
  isSelected,
  className
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "clothing-item p-2 bg-white rounded-lg shadow-md",
        isSelected && "ring-2 ring-primary",
        className
      )}
    >
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-md" />
      <p className="mt-2 text-sm text-center font-medium">{name}</p>
    </div>
  );
};