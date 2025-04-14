import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, HandHeart, Clock, MapPin, User } from 'lucide-react';
import { barterItems } from '@/data/barter';
import { BarterItem } from '@/types/barter';
import { toast } from "sonner";

const BarterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<BarterItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      const foundItem = barterItems.find(item => item.id === id) || null;
      setItem(foundItem);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleExchangeOffer = () => {
    toast.success("Exchange offer sent! The owner will contact you soon.");
  };

  // Ensure image URL is valid by providing a fallback
  const getValidImageUrl = (url?: string) => {
    return url && url.trim() !== '' 
      ? url 
      : 'https://images.unsplash.com/photo-1604762512526-b7ce049b5764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
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
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
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

  if (!item) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
          <p className="text-muted-foreground mb-6">The barter item you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/barter">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Barter Exchange
            </Link>
          </Button>
        </div>
      </MainLayout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-6 hover:bg-transparent hover:text-earth-700"
        >
          <Link to="/barter">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Barter Exchange
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item Image */}
          <div>
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img
                  src={getValidImageUrl(item?.imageUrl)}
                  alt={item?.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // Fallback image if the primary one fails to load
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1604762512526-b7ce049b5764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </Card>
          </div>

          {/* Item Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6 text-sm">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-earth-600" />
                <span>Posted by: {item.owner}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-earth-600" />
                <span>Location: {item.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-earth-600" />
                <span>Posted on: {formatDate(item.createdAt)}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-2">Description</h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div className="p-4 bg-earth-50 rounded-lg mb-6 border border-earth-100">
              <h3 className="font-medium mb-2 flex items-center">
                <HandHeart className="mr-2 h-4 w-4 text-earth-600" />
                Looking to Exchange For:
              </h3>
              <p>{item.exchangeFor}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleExchangeOffer}
                className="bg-earth-600 hover:bg-earth-700 text-white"
              >
                <HandHeart className="mr-2 h-4 w-4" />
                Offer Exchange
              </Button>
              <Button variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Owner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BarterDetail;
