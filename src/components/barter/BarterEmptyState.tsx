
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface BarterEmptyStateProps {
  type: 'all' | 'exchange' | 'donation' | 'loan';
  onListItem: () => void;
}

const BarterEmptyState = ({ type, onListItem }: BarterEmptyStateProps) => {
  const messages = {
    all: {
      title: "No items found",
      description: "Try adjusting your search filters or be the first to list an item!",
      buttonText: "List an Item"
    },
    exchange: {
      title: "No exchange items found",
      description: "Be the first to list an item for exchange!",
      buttonText: "List for Exchange"
    },
    donation: {
      title: "No donations found",
      description: "Be the first to donate an item!",
      buttonText: "Offer Donation"
    },
    loan: {
      title: "No loan items found",
      description: "Be the first to offer an item for loan!",
      buttonText: "Offer for Loan"
    }
  };

  const { title, description, buttonText } = messages[type];

  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Button 
        onClick={onListItem}
        className="mt-4 bg-forest-600 hover:bg-forest-700 text-white"
      >
        <Plus className="mr-2 h-4 w-4" />
        {buttonText}
      </Button>
    </div>
  );
};

export default BarterEmptyState;
