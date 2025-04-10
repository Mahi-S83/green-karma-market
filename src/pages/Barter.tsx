
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BarterItemGrid from '@/components/barter/BarterItemGrid';
import BarterForm from '@/components/barter/BarterForm';
import { barterItems } from '@/data/barter';
import { Button } from '@/components/ui/button';
import { Plus, X, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Barter = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  // Filter barter items based on search term and location
  const filteredItems = barterItems.filter(item => {
    const matchesSearch = !searchTerm || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.exchangeFor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !locationFilter || item.location.includes(locationFilter);
    
    return matchesSearch && matchesLocation;
  });

  // Get unique locations from barter items
  const locations = Array.from(new Set(barterItems.map(item => item.location.split(', ')[0])));

  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-earth-100 to-earth-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-earth-900 mb-4">Barter Exchange</h1>
            <p className="text-lg text-earth-700 mb-6">
              Trade items you no longer need with other eco-conscious community members.
              Reduce waste and find treasures through our barter exchange system.
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-earth-600 hover:bg-earth-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              List an Item for Barter
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search items..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-64">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Barter items grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or be the first to list an item!</p>
            <Button 
              onClick={() => setShowForm(true)}
              className="mt-4 bg-earth-600 hover:bg-earth-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              List an Item
            </Button>
          </div>
        ) : (
          <BarterItemGrid items={filteredItems} />
        )}
      </div>

      {/* Barter form dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>List an Item for Barter</DialogTitle>
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
