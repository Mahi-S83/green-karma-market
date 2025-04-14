
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/home/HeroBanner';
import CategoryPreview from '@/components/home/CategoryPreview';
import ProductGrid from '@/components/products/ProductGrid';
import DailyEcoTip from '@/components/home/DailyEcoTip';
import EcoNews from '@/components/home/EcoNews';
import { categories, products } from '@/data/products';
import { barterItems } from '@/data/barter';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BarterItemGrid from '@/components/barter/BarterItemGrid';
import ChatBot from '@/components/chat/ChatBot';
import ChatBotButton from '@/components/chat/ChatBotButton';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
  // Get featured barter items (first 4)
  const featuredBarterItems = barterItems.slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories */}
      <CategoryPreview categories={categories} />

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-800">Featured Products</h2>
            <Link to="/products" className="text-forest-600 hover:text-forest-800 flex items-center">
              View All Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Featured Barter Items */}
      <section className="py-12 bg-forest-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-800">Featured Barter Items</h2>
            <Link to="/barter" className="text-forest-600 hover:text-forest-800 flex items-center">
              View All Barter Items
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <BarterItemGrid items={featuredBarterItems} />
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white">
              <Link to="/barter">Join Our Barter Community</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Eco Tips and News */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <DailyEcoTip />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-forest-800">Why Choose Eco-Friendly?</h2>
              <p className="mb-4">
                By choosing eco-friendly, sustainable products, you're helping to reduce waste, conserve natural resources, and minimize your environmental footprint.
              </p>
              <p className="mb-4">
                Our products are carefully selected to meet high standards for sustainability, ensuring they're:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Made from renewable or recycled materials</li>
                <li>Designed to be reusable or biodegradable</li>
                <li>Produced using environmentally responsible processes</li>
                <li>Free from harmful chemicals and toxins</li>
                <li>Packaged with minimal or plastic-free materials</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="outline" className="border-forest-600 text-forest-700 hover:bg-forest-100">
                  <Link to="/about">Learn About Our Mission</Link>
                </Button>
                <Button asChild className="bg-forest-600 hover:bg-forest-700 text-white">
                  <Link to="/barter">Visit Our Barter Exchange</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco News Section */}
      <EcoNews />
      
      {/* Chat Bot */}
      <ChatBotButton isOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)} />
      <ChatBot isOpen={isChatOpen} />
    </MainLayout>
  );
};

export default Index;
