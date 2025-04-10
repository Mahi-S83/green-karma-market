
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BarterCategoryCards = () => {
  const categories = [
    {
      name: 'Kitchen & Dining',
      image: 'https://images.unsplash.com/photo-1584346133934-2ea624dc1a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Garden & Outdoors',
      image: 'https://images.unsplash.com/photo-1628944682084-831f35256aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Fashion & Accessories',
      image: 'https://images.unsplash.com/photo-1606036525923-525fa3b35465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <div className="bg-forest-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-forest-800">Popular Barter Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white border-forest-100">
              <CardContent className="p-6">
                <div className="mb-3 mx-auto">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-16 h-16 object-cover rounded-full mx-auto" 
                  />
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarterCategoryCards;
