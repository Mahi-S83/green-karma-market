
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import BarterItemGrid from '@/components/barter/BarterItemGrid';
import BarterForm from '@/components/barter/BarterForm';
import { barterItems } from '@/data/barter';
import { Button } from '@/components/ui/button';
import { Plus, X, Filter, Search, SlidersHorizontal, Tags, BadgeCheck } from 'lucide-react';
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const Barter = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');
  const [availableForFilter, setAvailableForFilter] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('exchange');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  
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

  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-forest-100 to-forest-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">The Eco Loop Barter</h1>
            <p className="text-lg text-forest-700 mb-6">
              Trade, donate or loan items you no longer need with other eco-conscious community members.
              Give new life to pre-loved items and discover treasures through our barter exchange system.
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-forest-600 hover:bg-forest-700 text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              List an Item
            </Button>
          </div>
        </div>
      </div>

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
                      setAvailableForFilter([]);
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

          {/* Results summary */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''}
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              variant="outline"
              size="sm"
              className="bg-forest-50 border-forest-200 hover:bg-forest-100 text-forest-700"
            >
              <Plus className="mr-1 h-3.5 w-3.5" />
              List Item
            </Button>
          </div>

          {/* Tab content */}
          <TabsContent value="all">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No items found</h3>
                <p className="text-muted-foreground">Try adjusting your search filters or be the first to list an item!</p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-forest-600 hover:bg-forest-700 text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  List an Item
                </Button>
              </div>
            ) : (
              <BarterItemGrid items={filteredItems} />
            )}
          </TabsContent>
          <TabsContent value="exchange">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No exchange items found</h3>
                <p className="text-muted-foreground">Be the first to list an item for exchange!</p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-forest-600 hover:bg-forest-700 text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  List for Exchange
                </Button>
              </div>
            ) : (
              <BarterItemGrid items={filteredItems} />
            )}
          </TabsContent>
          <TabsContent value="donation">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No donations found</h3>
                <p className="text-muted-foreground">Be the first to donate an item!</p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-forest-600 hover:bg-forest-700 text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Offer Donation
                </Button>
              </div>
            ) : (
              <BarterItemGrid items={filteredItems} />
            )}
          </TabsContent>
          <TabsContent value="loan">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No loan items found</h3>
                <p className="text-muted-foreground">Be the first to offer an item for loan!</p>
                <Button 
                  onClick={() => setShowForm(true)}
                  className="mt-4 bg-forest-600 hover:bg-forest-700 text-white"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Offer for Loan
                </Button>
              </div>
            ) : (
              <BarterItemGrid items={filteredItems} />
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Barter Information Accordions */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-forest-800">How The Eco Loop Barter Works</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-forest-700">What is The Eco Loop Barter?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">The Eco Loop Barter is our community exchange platform where you can trade, donate, or loan eco-friendly items you no longer need.</p>
                <p>This initiative supports our mission of sustainability by extending the lifecycle of products and reducing waste.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-forest-700">How to Exchange Items</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a listing by clicking the "List an Item" button</li>
                  <li>Choose "Exchange" as one of the availability options</li>
                  <li>Be specific about what you're looking to receive in return</li>
                  <li>When someone is interested, you'll receive a contact message</li>
                  <li>Arrange a mutually convenient location and time to complete the exchange</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-forest-700">How to Donate Items</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">To donate items:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a listing and select the "Donation" option</li>
                  <li>Provide clear photos and an accurate description</li>
                  <li>Specify any pickup requirements or limitations</li>
                  <li>Arrange for pickup or delivery once someone expresses interest</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-forest-700">How to Loan Items</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Our loan system allows you to share items that are only occasionally used:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>List your item and select the "Loan" option</li>
                  <li>Specify the maximum duration of the loan in days</li>
                  <li>Clearly state any conditions for borrowing</li>
                  <li>Consider creating a simple agreement with the borrower</li>
                  <li>Arrange for pickup/return or delivery</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-forest-700">Community Guidelines</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Be honest about the condition of your items</li>
                  <li>Respond to inquiries promptly and respectfully</li>
                  <li>Honor your commitments for exchanges, donations, or loans</li>
                  <li>Meet in safe, public locations for exchanges</li>
                  <li>Provide feedback after successful transactions</li>
                  <li>Only list items that are legal and appropriate</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="bg-forest-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center text-forest-800">Popular Barter Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Kitchen & Dining', 'Home & Living', 'Garden & Outdoors', 'Fashion & Accessories'].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer overflow-hidden bg-white border-forest-100">
                <CardContent className="p-6">
                  <div className="mb-3 mx-auto">
                    {index === 0 && <img src="https://images.unsplash.com/photo-1584346133934-2ea624dc1a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt={category} className="w-16 h-16 object-cover rounded-full mx-auto" />}
                    {index === 1 && <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt={category} className="w-16 h-16 object-cover rounded-full mx-auto" />}
                    {index === 2 && <img src="https://images.unsplash.com/photo-1628944682084-831f35256aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt={category} className="w-16 h-16 object-cover rounded-full mx-auto" />}
                    {index === 3 && <img src="https://images.unsplash.com/photo-1606036525923-525fa3b35465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt={category} className="w-16 h-16 object-cover rounded-full mx-auto" />}
                  </div>
                  <h3 className="font-medium">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

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
