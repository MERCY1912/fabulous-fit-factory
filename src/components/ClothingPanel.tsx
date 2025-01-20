import React from 'react';
import { ClothingItem } from './ClothingItem';
import { cn } from "@/lib/utils";

const CLOTHING_ITEMS = [
  {
    id: 'stockings1',
    name: 'Black Stockings',
    image: '/placeholder.svg',
    category: 'stockings'
  },
  {
    id: 'tights1',
    name: 'Sheer Tights',
    image: '/placeholder.svg',
    category: 'tights'
  },
  {
    id: 'skirt1',
    name: 'Pleated Skirt',
    image: '/placeholder.svg',
    category: 'skirts'
  },
  {
    id: 'top1',
    name: 'Basic Top',
    image: '/placeholder.svg',
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