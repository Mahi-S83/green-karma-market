
import React from 'react';
import BarterItemCard from '@/components/barter/BarterItemCard';
import { BarterItem } from '@/types/barter';

interface BarterItemGridProps {
  items: BarterItem[];
}

const BarterItemGrid = ({ items }: BarterItemGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map((item) => (
        <BarterItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BarterItemGrid;
