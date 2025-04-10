
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface BarterResultsSummaryProps {
  itemCount: number;
  onListItem: () => void;
}

const BarterResultsSummary = ({ itemCount, onListItem }: BarterResultsSummaryProps) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      <p className="text-sm text-muted-foreground">
        Showing {itemCount} item{itemCount !== 1 ? 's' : ''}
      </p>
      <Button 
        onClick={onListItem}
        variant="outline"
        size="sm"
        className="bg-forest-50 border-forest-200 hover:bg-forest-100 text-forest-700"
      >
        <Plus className="mr-1 h-3.5 w-3.5" />
        List Item
      </Button>
    </div>
  );
};

export default BarterResultsSummary;
