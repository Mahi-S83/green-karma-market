
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { barterItems } from '@/data/barter';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BarterForm from '@/components/barter/BarterForm';
import BarterHero from '@/components/barter/BarterHero';
import BarterFilters from '@/components/barter/BarterFilters';
import BarterTabContent from '@/components/barter/BarterTabContent';
import BarterResultsSummary from '@/components/barter/BarterResultsSummary';
import BarterInfoAccordion from '@/components/barter/BarterInfoAccordion';
import BarterCategoryCards from '@/components/barter/BarterCategoryCards';
import { useSearchParams } from 'react-router-dom';

const Barter = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');
  const [availableForFilter, setAvailableForFilter] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('exchange');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [searchParams] = useSearchParams();
  
  // Handle URL search param on component mount
  useEffect(() => {
    const searchParam = searchParams.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
      setShowFilterPanel(true);
    }
  }, [searchParams]);
  
  // Handle checkbox changes for availability filters
  const handleAvailabilityChange = (value: string) => {
    setAvailableForFilter(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };
  
  // Filter barter items based on search term, location, and other filters
  const filteredItems = barterItems.filter(item => {
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.exchangeFor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !locationFilter || item.location.includes(locationFilter);
    
    const matchesCategory = !categoryFilter || item.category === categoryFilter;
    
    const matchesCondition = !conditionFilter || item.condition === conditionFilter;
    
    const matchesAvailability = availableForFilter.length === 0 || 
      (item.availableFor && availableForFilter.some(filter => item.availableFor?.includes(filter as any)));
    
    // Filter by tab
    const matchesTab = activeTab === 'all' || 
      (activeTab === 'exchange' && item.availableFor?.includes('exchange')) ||
      (activeTab === 'donation' && item.availableFor?.includes('donation')) ||
      (activeTab === 'loan' && item.availableFor?.includes('loan'));
    
    return matchesSearch && matchesLocation && matchesCategory && matchesCondition && matchesAvailability && matchesTab;
  });

  // Get unique locations from barter items
  const locations = Array.from(new Set(barterItems.map(item => item.location.split(', ')[0])));
  
  // Get unique categories from barter items
  const categories = Array.from(new Set(barterItems.map(item => item.category).filter(Boolean)));

  // Handler for opening the item listing form
  const handleOpenListItemForm = () => {
    setShowForm(true);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <BarterHero onListItem={handleOpenListItemForm} />

      <div className="container mx-auto px-4 py-8">
        {/* Barter Tabs */}
        <Tabs 
          defaultValue="exchange" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-muted">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="exchange">For Exchange</TabsTrigger>
              <TabsTrigger value="donation">Donations</TabsTrigger>
              <TabsTrigger value="loan">For Loan</TabsTrigger>
            </TabsList>
          </div>

          {/* Filters section */}
          <BarterFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            conditionFilter={conditionFilter}
            setConditionFilter={setConditionFilter}
            availableForFilter={availableForFilter}
            handleAvailabilityChange={handleAvailabilityChange}
            showFilterPanel={showFilterPanel}
            setShowFilterPanel={setShowFilterPanel}
            locations={locations}
            categories={categories}
          />

          {/* Results summary */}
          <BarterResultsSummary 
            itemCount={filteredItems.length} 
            onListItem={handleOpenListItemForm} 
          />

          {/* Tab content */}
          <TabsContent value="all">
            <BarterTabContent 
              items={filteredItems} 
              type="all" 
              onListItem={handleOpenListItemForm} 
            />
          </TabsContent>
          <TabsContent value="exchange">
            <BarterTabContent 
              items={filteredItems} 
              type="exchange" 
              onListItem={handleOpenListItemForm} 
            />
          </TabsContent>
          <TabsContent value="donation">
            <BarterTabContent 
              items={filteredItems} 
              type="donation" 
              onListItem={handleOpenListItemForm} 
            />
          </TabsContent>
          <TabsContent value="loan">
            <BarterTabContent 
              items={filteredItems} 
              type="loan" 
              onListItem={handleOpenListItemForm} 
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Barter Information Accordions */}
      <BarterInfoAccordion />

      {/* Featured Categories */}
      <BarterCategoryCards />

      {/* Barter form dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>List an Item</DialogTitle>
            <DialogDescription>
              Fill out the details about your item. Be descriptive to attract potential exchanges.
            </DialogDescription>
          </DialogHeader>
          <BarterForm />
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Barter;
