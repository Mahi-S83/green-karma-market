
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import EcoBadge from '@/components/ui/eco-badge';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="overflow-hidden">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-wrap gap-1">
              {product.badges.map((badge) => (
                <EcoBadge key={badge} variant={badge as any} />
              ))}
            </div>
          )}
        </div>
      </Link>

      <CardContent className="flex-grow p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-base line-clamp-2">
              <Link to={`/product/${product.id}`} className="hover:text-nature-600 transition-colors">
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <p className="font-bold text-lg price">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
        <Button variant="outline" size="sm" className="rounded-full text-xs bg-nature-50 border-nature-200 hover:bg-nature-100">
          <ShoppingCart className="mr-1 h-3.5 w-3.5" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
