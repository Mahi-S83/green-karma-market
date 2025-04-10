
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface BarterHeroProps {
  onListItem: () => void;
}

const BarterHero = ({ onListItem }: BarterHeroProps) => {
  return (
    <div className="bg-gradient-to-br from-forest-100 to-forest-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">The Eco Loop Barter</h1>
          <p className="text-lg text-forest-700 mb-6">
            Trade, donate or loan items you no longer need with other eco-conscious community members.
            Give new life to pre-loved items and discover treasures through our barter exchange system.
          </p>
          <Button 
            onClick={onListItem}
            className="bg-forest-600 hover:bg-forest-700 text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            List an Item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BarterHero;
