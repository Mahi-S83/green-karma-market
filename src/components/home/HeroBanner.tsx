
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-nature-700 to-nature-500 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sustainable Living, Positive Impact
          </h1>
          <p className="text-lg md:text-xl mb-8 text-nature-50">
            Discover eco-friendly, sustainable products that help reduce waste and protect our planet. Every purchase makes a difference.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-nature-800 hover:bg-nature-50">
              <Link to="/products">
                Shop All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/barter">
                Explore Barter Exchange
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
