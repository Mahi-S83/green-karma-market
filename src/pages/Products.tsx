
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/filters/ProductFilters';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Get min and max prices from products
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  
  // Get category from URL params if exists
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    
    if (categoryParam) {
      // Apply category filter from URL
      const filtered = products.filter(product => product.category === categoryParam);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location.search]);

  // Handle filter changes from filter component
  const handleFilterChange = (filters: any) => {
    setLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      const filtered = products.filter(product => {
        // Price filter
        if (product.price < filters.price[0] || product.price > filters.price[1]) {
          return false;
        }
        
        // Category filter
        if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
          return false;
        }
        
        // Material filter
        if (filters.materials.length > 0 && (!product.materials || !product.materials.some(m => filters.materials.includes(m)))) {
          return false;
        }
        
        // Eco attributes filter
        if (filters.ecoAttributes.length > 0 && (!product.ecoAttributes || !product.ecoAttributes.some(a => filters.ecoAttributes.includes(a)))) {
          return false;
        }
        
        return true;
      });
      
      setFilteredProducts(filtered);
      setLoading(false);
    }, 300);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Eco-Friendly Products</h1>
          <p className="text-muted-foreground">
            Browse our selection of sustainable, eco-friendly products to reduce your environmental footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="md:col-span-1">
            <ProductFilters 
              onFilterChange={handleFilterChange} 
              minPrice={minPrice} 
              maxPrice={maxPrice}
            />
          </div>
          
          {/* Products grid */}
          <div className="md:col-span-3">
            {/* Results summary */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-square bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
