
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandHeart, MessageCircle, Clock, Tag, Leaf, Award } from 'lucide-react';
import { BarterItem } from '@/types/barter';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface BarterItemCardProps {
  item: BarterItem;
}

const BarterItemCard = ({ item }: BarterItemCardProps) => {
  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  // Helper function to get condition badge color
  const getConditionColor = (condition?: string) => {
    switch (condition) {
      case 'new':
        return 'bg-green-500 text-white';
      case 'like-new':
        return 'bg-emerald-500 text-white';
      case 'good':
        return 'bg-teal-500 text-white';
      case 'fair':
        return 'bg-amber-500 text-white';
      case 'worn':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Ensure image URL is valid by providing a fallback
  const imageUrl = item.imageUrl && item.imageUrl.trim() !== '' 
    ? item.imageUrl 
    : 'https://images.unsplash.com/photo-1604762512526-b7ce049b5764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md border-forest-100">
      <Link to={`/barter/${item.id}`} className="overflow-hidden">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={imageUrl}
            alt={item.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              // Fallback image if the primary one fails to load
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1604762512526-b7ce049b5764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }}
          />
          {item.condition && (
            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item.condition)}`}>
              {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
            </div>
          )}
          
          {item.certifications && item.certifications.length > 0 && (
            <div className="absolute bottom-2 left-2 flex gap-1">
              {item.certifications.map((cert, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="bg-forest-600/80 p-1 rounded-full">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{cert}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          )}
        </div>
      </Link>

      <CardContent className="flex-grow p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {item.availableFor && item.availableFor.map((type) => (
            <Badge key={type} variant="outline" className="text-xs capitalize border-forest-300 text-forest-800">
              {type}
            </Badge>
          ))}
          {item.category && (
            <Badge variant="secondary" className="text-xs bg-bark-100 text-bark-800 border-none">
              {item.category}
            </Badge>
          )}
          {item.sustainability && (
            <Badge className="text-xs bg-forest-100 text-forest-800 border-none">
              <Leaf className="mr-1 h-3 w-3" />
              Sustainable
            </Badge>
          )}
        </div>

        <h3 className="font-medium text-base line-clamp-2">
          <Link to={`/barter/${item.id}`} className="hover:text-forest-600 transition-colors">
            {item.title}
          </Link>
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mt-1">{item.description}</p>
        
        <div className="mt-2 space-y-1">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Posted by:</span> {item.owner}
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Location:</span> {item.location}
          </p>
          
          {item.estimatedValue !== undefined && (
            <p className="text-xs text-forest-700 font-medium">
              Est. Value: ₹{item.estimatedValue}
            </p>
          )}
          
          <p className="text-xs text-muted-foreground mt-1">
            <span className="font-medium">Looking for:</span> {item.exchangeFor}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="flex items-center gap-1 mt-2 flex-wrap">
              <Tag className="h-3 w-3 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">
                {item.tags.join(', ')}
              </p>
            </div>
          )}
          
          {item.materials && item.materials.length > 0 && (
            <p className="text-xs text-forest-700">
              <span className="font-medium">Materials:</span> {item.materials.join(', ')}
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex flex-col space-y-2">
        <div className="flex items-center justify-between w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full text-xs bg-forest-50 border-forest-200 hover:bg-forest-100 text-forest-700"
          >
            <HandHeart className="mr-1 h-3.5 w-3.5" />
            Exchange
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs"
          >
            <MessageCircle className="mr-1 h-3.5 w-3.5" />
            Contact
          </Button>
        </div>
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            <span>{formatDate(item.createdAt)}</span>
          </div>
          {item.duration && item.availableFor?.includes('loan') && (
            <div className="flex items-center">
              <span>Loan: {item.duration} days</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BarterItemCard;
