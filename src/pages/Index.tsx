
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/home/HeroBanner';
import CategoryPreview from '@/components/home/CategoryPreview';
import ProductGrid from '@/components/products/ProductGrid';
import DailyEcoTip from '@/components/home/DailyEcoTip';
import EcoNews from '@/components/home/EcoNews';
import { categories, products } from '@/data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { barterItems } from '@/data/barter';
import BarterItemGrid from '@/components/barter/BarterItemGrid';

const Index = () => {
  // Get featured products (first 4)
  const featuredProducts = products.slice(0, 4);
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
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-nature-600 hover:text-nature-800 flex items-center">
              View All Products
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Eco Tips and News */}
      <section className="py-12 bg-nature-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <DailyEcoTip />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Why Choose Eco-Friendly?</h2>
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
              <Button asChild variant="outline" className="border-nature-600 text-nature-700 hover:bg-nature-100">
                <Link to="/about">Learn More About Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Barter Exchange */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Barter Exchange</h2>
              <p className="text-muted-foreground mt-2">Trade items you no longer need with other eco-conscious community members</p>
            </div>
            <Link to="/barter" className="text-earth-600 hover:text-earth-800 flex items-center">
              View All Listings
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <BarterItemGrid items={featuredBarterItems} />
        </div>
      </section>

      {/* Eco News Section */}
      <EcoNews />
    </MainLayout>
  );
};

export default Index;
