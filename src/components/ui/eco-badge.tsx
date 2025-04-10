
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';

type EcoBadgeVariant = 'organic' | 'recycled' | 'sustainable';

interface EcoBadgeProps {
  variant: EcoBadgeVariant;
  className?: string;
}

const EcoBadge = ({ variant, className }: EcoBadgeProps) => {
  const getIcon = () => {
    switch (variant) {
      case 'organic':
        return <Leaf className="h-3 w-3 mr-1" />;
      case 'recycled':
        return <Recycle className="h-3 w-3 mr-1" />;
      case 'sustainable':
        return <Sprout className="h-3 w-3 mr-1" />;
      default:
        return <Leaf className="h-3 w-3 mr-1" />;
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'organic':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'recycled':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'sustainable':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <Badge 
      variant="outline" 
      className={cn(
        'flex items-center border rounded-full px-2 py-0.5 text-xs font-medium', 
        getVariantClasses(),
        className
      )}
    >
      {getIcon()}
      <span className="capitalize">{variant}</span>
    </Badge>
  );
};

export default EcoBadge;
