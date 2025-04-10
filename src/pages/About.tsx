
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Leaf, Recycle, HandHeart, Globe, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      {/* Hero section */}
      <div className="bg-gradient-to-br from-nature-700 to-nature-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Green Karma Market</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We're on a mission to make sustainable living accessible and affordable for everyone. 
            Through our eco-friendly marketplace and barter exchange system, we aim to reduce waste 
            and promote a circular economy.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Green Karma Market began with a simple observation: people wanted to make more sustainable choices,
                but often found eco-friendly alternatives too expensive or difficult to find.
              </p>
              <p className="mb-4 text-muted-foreground">
                We started as a small pop-up shop in Mumbai in 2018, offering a curated selection of plastic-free 
                alternatives to everyday items. The response was overwhelming, showing us that there was a real 
                desire for accessible sustainable products.
              </p>
              <p className="text-muted-foreground">
                In 2020, we launched our online marketplace to reach more people across India. We added the barter 
                exchange system in 2022 to further promote reuse and reduce waste in our communities.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80" 
                  alt="Market stall with eco-friendly products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-nature-50 p-6 rounded-lg shadow-lg hidden md:block">
                <Leaf className="h-12 w-12 text-nature-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-nature-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-nature-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Recycle className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We believe in products that are made to last, created from renewable or recycled materials, 
                and designed to minimize environmental impact throughout their lifecycle.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-nature-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <HandHeart className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster a community of like-minded individuals who share resources, knowledge, and items 
                through our barter system to reduce consumption and waste together.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-nature-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-nature-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">
                We're committed to raising awareness about environmental issues and sharing practical, 
                accessible ways for everyone to reduce their ecological footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Commitment</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <ShieldCheck className="h-6 w-6 text-nature-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Product Vetting</h3>
                  <p className="text-muted-foreground">
                    Every product in our marketplace goes through a rigorous vetting process to ensure it meets 
                    our sustainability standards. We look at materials, manufacturing processes, packaging, 
                    and end-of-life considerations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Recycle className="h-6 w-6 text-nature-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Circular Economy</h3>
                  <p className="text-muted-foreground">
                    We promote a circular economy through our barter exchange system and by prioritizing 
                    products that can be reused, repaired, or recycled at the end of their life.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Users className="h-6 w-6 text-nature-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Ethical Partnerships</h3>
                  <p className="text-muted-foreground">
                    We partner with ethical suppliers who prioritize fair labor practices, safe working 
                    conditions, and environmental responsibility. We believe sustainability includes both 
                    environmental and social considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-earth-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Every purchase and barter exchange helps build a more sustainable future. 
            Together, we can make eco-friendly choices the new normal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/products" className="bg-nature-600 hover:bg-nature-700 text-white px-6 py-3 rounded-md font-medium">
              Shop Eco-Friendly Products
            </a>
            <a href="/barter" className="bg-earth-600 hover:bg-earth-700 text-white px-6 py-3 rounded-md font-medium">
              Join Barter Exchange
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
