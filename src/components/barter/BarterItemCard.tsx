
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandHeart, MessageCircle } from 'lucide-react';
import { BarterItem } from '@/types/barter';

interface BarterItemCardProps {
  item: BarterItem;
}

const BarterItemCard = ({ item }: BarterItemCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link to={`/barter/${item.id}`} className="overflow-hidden">
        <div className="aspect-square overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>

      <CardContent className="flex-grow p-4">
        <h3 className="font-medium text-base line-clamp-2">
          <Link to={`/barter/${item.id}`} className="hover:text-nature-600 transition-colors">
            {item.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 mt-1">{item.description}</p>
        <div className="mt-2">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Posted by:</span> {item.owner}
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Location:</span> {item.location}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="font-medium">Looking to exchange for:</span> {item.exchangeFor}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full text-xs bg-earth-50 border-earth-200 hover:bg-earth-100 text-earth-700"
        >
          <HandHeart className="mr-1 h-3.5 w-3.5" />
          Offer Exchange
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-xs"
        >
          <MessageCircle className="mr-1 h-3.5 w-3.5" />
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BarterItemCard;
