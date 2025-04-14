import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import EcoBadge from '@/components/ui/eco-badge';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      const foundProduct = products.find(p => p.id === id) || null;
      setProduct(foundProduct);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  // Ensure image URL is valid by providing a fallback
  const getValidImageUrl = (url?: string) => {
    return url && url.trim() !== '' 
      ? url 
      : 'https://images.unsplash.com/photo-1584346233277-6ba261100c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-gray-200 rounded"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3 mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-6 hover:bg-transparent hover:text-nature-700"
        >
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img
                  src={getValidImageUrl(product?.imageUrl)}
                  alt={product?.name}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // Fallback image if the primary one fails to load
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584346233277-6ba261100c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </Card>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating || 0) 
                      ? "fill-amber-400 text-amber-400" 
                      : "text-gray-300"} 
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.rating?.toFixed(1)}
                </span>
              </div>
              {product.stock > 0 ? (
                <span className="text-sm text-green-600">In Stock ({product.stock} available)</span>
              ) : (
                <span className="text-sm text-red-600">Out of Stock</span>
              )}
            </div>
            
            <div className="text-2xl font-bold mb-4 price">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            {product.badges && product.badges.length > 0 && (
              <div className="mb-4">
                <h3 className="font-medium mb-2">Eco Certifications:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.badges.map(badge => (
                    <EcoBadge key={badge} variant={badge as any} />
                  ))}
                </div>
              </div>
            )}

            {product.materials && product.materials.length > 0 && (
              <div className="mb-4">
                <h3 className="font-medium mb-2">Materials:</h3>
                <div className="flex flex-wrap gap-1">
                  {product.materials.map(material => (
                    <span key={material} className="text-sm bg-nature-100 text-nature-800 px-2 py-1 rounded">{material.replace('-', ' ')}</span>
                  ))}
                </div>
              </div>
            )}

            {product.ecoAttributes && product.ecoAttributes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Environmental Benefits:</h3>
                <div className="flex flex-wrap gap-1">
                  {product.ecoAttributes.map(attr => (
                    <span key={attr} className="text-sm bg-earth-100 text-earth-800 px-2 py-1 rounded">{attr.replace('-', ' ')}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center mb-6">
              <div className="flex items-center border rounded-md mr-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-lg"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10 text-lg"
                  onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="bg-nature-600 hover:bg-nature-700 text-white"
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-medium mb-2">Eco-Friendly Promise:</h3>
              <p className="text-sm text-muted-foreground">
                This product meets our strict sustainability standards. It is designed to reduce waste, minimize environmental impact, and can be recycled or reused at the end of its life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
