
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Filter, FilterX } from 'lucide-react';

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
  minPrice: number;
  maxPrice: number;
}

const ProductFilters = ({ onFilterChange, minPrice, maxPrice }: ProductFiltersProps) => {
  const [price, setPrice] = useState([minPrice, maxPrice]);
  const [categories, setCategories] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [ecoAttributes, setEcoAttributes] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handlePriceChange = (values: number[]) => {
    setPrice(values);
    applyFilters({ price: values });
  };

  const toggleCategory = (category: string) => {
    const updated = categories.includes(category)
      ? categories.filter(c => c !== category)
      : [...categories, category];
    setCategories(updated);
    applyFilters({ categories: updated });
  };

  const toggleMaterial = (material: string) => {
    const updated = materials.includes(material)
      ? materials.filter(m => m !== material)
      : [...materials, material];
    setMaterials(updated);
    applyFilters({ materials: updated });
  };

  const toggleEcoAttribute = (attribute: string) => {
    const updated = ecoAttributes.includes(attribute)
      ? ecoAttributes.filter(a => a !== attribute)
      : [...ecoAttributes, attribute];
    setEcoAttributes(updated);
    applyFilters({ ecoAttributes: updated });
  };

  const applyFilters = (updatedFilters: any) => {
    onFilterChange({
      price: updatedFilters.price || price,
      categories: updatedFilters.categories || categories,
      materials: updatedFilters.materials || materials,
      ecoAttributes: updatedFilters.ecoAttributes || ecoAttributes,
    });
  };

  const resetFilters = () => {
    setPrice([minPrice, maxPrice]);
    setCategories([]);
    setMaterials([]);
    setEcoAttributes([]);
    onFilterChange({
      price: [minPrice, maxPrice],
      categories: [],
      materials: [],
      ecoAttributes: [],
    });
  };

  const categoryOptions = [
    { id: 'home', label: 'Home & Living' },
    { id: 'personal', label: 'Personal Care' },
    { id: 'kitchen', label: 'Kitchen & Dining' },
    { id: 'fashion', label: 'Sustainable Fashion' },
    { id: 'garden', label: 'Garden & Outdoors' },
  ];

  const materialOptions = [
    { id: 'bamboo', label: 'Bamboo' },
    { id: 'organic-cotton', label: 'Organic Cotton' },
    { id: 'recycled-plastic', label: 'Recycled Plastic' },
    { id: 'jute', label: 'Jute' },
    { id: 'cork', label: 'Cork' },
  ];

  const ecoAttributeOptions = [
    { id: 'plastic-free', label: 'Plastic-Free' },
    { id: 'biodegradable', label: 'Biodegradable' },
    { id: 'compostable', label: 'Compostable' },
    { id: 'zero-waste', label: 'Zero Waste' },
    { id: 'vegan', label: 'Vegan' },
  ];

  return (
    <>
      {/* Mobile filter toggle */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={resetFilters}
          className="text-xs"
        >
          <FilterX className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>
      
      <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
        <div className="space-y-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider
              defaultValue={[minPrice, maxPrice]}
              min={minPrice}
              max={maxPrice}
              step={100}
              value={price}
              onValueChange={handlePriceChange}
              className="my-6"
            />
            <div className="flex items-center justify-between text-sm">
              <span>₹{price[0].toLocaleString('en-IN')}</span>
              <span>₹{price[1].toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Categories */}
          <Accordion type="single" collapsible defaultValue="categories">
            <AccordionItem value="categories">
              <AccordionTrigger className="font-medium py-2">Categories</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 mt-1">
                  {categoryOptions.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={categories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="text-sm cursor-pointer"
                      >
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Materials */}
          <Accordion type="single" collapsible defaultValue="materials">
            <AccordionItem value="materials">
              <AccordionTrigger className="font-medium py-2">Materials</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 mt-1">
                  {materialOptions.map((material) => (
                    <div key={material.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`material-${material.id}`}
                        checked={materials.includes(material.id)}
                        onCheckedChange={() => toggleMaterial(material.id)}
                      />
                      <Label
                        htmlFor={`material-${material.id}`}
                        className="text-sm cursor-pointer"
                      >
                        {material.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Eco Attributes */}
          <Accordion type="single" collapsible defaultValue="eco-attributes">
            <AccordionItem value="eco-attributes">
              <AccordionTrigger className="font-medium py-2">Eco Attributes</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 mt-1">
                  {ecoAttributeOptions.map((attribute) => (
                    <div key={attribute.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`attribute-${attribute.id}`}
                        checked={ecoAttributes.includes(attribute.id)}
                        onCheckedChange={() => toggleEcoAttribute(attribute.id)}
                      />
                      <Label
                        htmlFor={`attribute-${attribute.id}`}
                        className="text-sm cursor-pointer"
                      >
                        {attribute.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Reset button - desktop */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetFilters}
              className="w-full"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;
