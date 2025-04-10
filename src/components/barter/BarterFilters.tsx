
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BarterFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  conditionFilter: string;
  setConditionFilter: (condition: string) => void;
  availableForFilter: string[];
  handleAvailabilityChange: (value: string) => void;
  showFilterPanel: boolean;
  setShowFilterPanel: (show: boolean) => void;
  locations: string[];
  categories: string[];
}

const BarterFilters = ({
  searchTerm,
  setSearchTerm,
  locationFilter,
  setLocationFilter,
  categoryFilter,
  setCategoryFilter,
  conditionFilter,
  setConditionFilter,
  availableForFilter,
  handleAvailabilityChange,
  showFilterPanel,
  setShowFilterPanel,
  locations,
  categories
}: BarterFiltersProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        {/* Filter toggle button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowFilterPanel(!showFilterPanel)}
          className="flex items-center gap-1"
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span className="hidden sm:inline">Filters</span>
          {(locationFilter || categoryFilter || conditionFilter || availableForFilter.length > 0) && (
            <Badge className="ml-1 bg-forest-600 text-white h-5 w-5 p-0 flex items-center justify-center rounded-full">
              {[
                locationFilter ? 1 : 0, 
                categoryFilter ? 1 : 0, 
                conditionFilter ? 1 : 0, 
                availableForFilter.length > 0 ? 1 : 0
              ].filter(Boolean).length}
            </Badge>
          )}
        </Button>
      </div>

      {/* Search and Filters panel */}
      <div className={`mb-6 ${showFilterPanel ? 'block' : 'hidden'}`}>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center justify-between">
              <span>Filter Items</span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setLocationFilter('');
                  setCategoryFilter('');
                  setConditionFilter('');
                  setAvailabilityChange([]);
                }}
                className="text-xs h-8"
              >
                Clear All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search items..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium block mb-2">Location</label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All locations" />
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

              <div>
                <label className="text-sm font-medium block mb-2">Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    {categories.map(category => category && (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Condition</label>
                <Select value={conditionFilter} onValueChange={setConditionFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Any condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any condition</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="like-new">Like New</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="worn">Worn</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Available For</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="exchange" 
                      checked={availableForFilter.includes('exchange')}
                      onCheckedChange={() => handleAvailabilityChange('exchange')}
                    />
                    <label htmlFor="exchange" className="text-sm">Exchange</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="donation" 
                      checked={availableForFilter.includes('donation')}
                      onCheckedChange={() => handleAvailabilityChange('donation')}
                    />
                    <label htmlFor="donation" className="text-sm">Donation</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="loan" 
                      checked={availableForFilter.includes('loan')}
                      onCheckedChange={() => handleAvailabilityChange('loan')}
                    />
                    <label htmlFor="loan" className="text-sm">Loan</label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BarterFilters;
