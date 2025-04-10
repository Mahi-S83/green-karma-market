
import React from 'react';
import { BarterItem } from '@/types/barter';
import BarterItemGrid from '@/components/barter/BarterItemGrid';
import BarterEmptyState from '@/components/barter/BarterEmptyState';

interface BarterTabContentProps {
  items: BarterItem[];
  type: 'all' | 'exchange' | 'donation' | 'loan';
  onListItem: () => void;
}

const BarterTabContent = ({ items, type, onListItem }: BarterTabContentProps) => {
  if (items.length === 0) {
    return <BarterEmptyState type={type} onListItem={onListItem} />;
  }

  return <BarterItemGrid items={items} />;
};

export default BarterTabContent;
