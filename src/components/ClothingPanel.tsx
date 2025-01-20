import React from 'react';
import { ClothingItem } from './ClothingItem';
import { cn } from "@/lib/utils";

const CLOTHING_ITEMS = [
  {
    id: 'stockings1',
    name: 'Black Stockings',
    image: '/lovable-uploads/5d5ce8e7-bb32-426f-be23-cc38d48fc107.png',
    wearingImage: '/lovable-uploads/5d5ce8e7-bb32-426f-be23-cc38d48fc107.png',
    category: 'stockings'
  },
  {
    id: 'tights1',
    name: 'Sheer Tights',
    image: '/placeholder.svg',
    wearingImage: '/placeholder.svg',
    category: 'tights'
  },
  {
    id: 'skirt1',
    name: 'Pleated Skirt',
    image: '/placeholder.svg',
    wearingImage: '/placeholder.svg',
    category: 'skirts'
  },
  {
    id: 'top1',
    name: 'Basic Top',
    image: '/placeholder.svg',
    wearingImage: '/placeholder.svg',
    category: 'tops'
  }
];

interface ClothingPanelProps {
  onSelectItem: (itemId: string) => void;
  selectedItems: string[];
  className?: string;
}

export const ClothingPanel: React.FC<ClothingPanelProps> = ({
  onSelectItem,
  selectedItems,
  className
}) => {
  return (
    <div className={cn("clothing-panel", className)}>
      {CLOTHING_ITEMS.map((item) => (
        <ClothingItem
          key={item.id}
          name={item.name}
          image={item.image}
          onClick={() => onSelectItem(item.id)}
          isSelected={selectedItems.includes(item.id)}
        />
      ))}
    </div>
  );
};