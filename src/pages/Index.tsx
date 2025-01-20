import { useState } from 'react';
import { Character } from '@/components/Character';
import { ClothingPanel } from '@/components/ClothingPanel';
import { toast } from "sonner";

const Index = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelectItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const newItems = prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId];
      
      toast(prev.includes(itemId) ? "Item removed" : "Item added");
      return newItems;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ee9ca7] to-[#ffdde1] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Fashion Dress-Up
        </h1>
        
        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          <Character
            wearingItems={selectedItems}
            className="mb-8 md:mb-0"
          />
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Clothing Items</h2>
            <ClothingPanel
              onSelectItem={handleSelectItem}
              selectedItems={selectedItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;