
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample eco tips
const ecoTips = [
  {
    id: 1,
    title: "Reduce plastic use with reusable bottles",
    content: "A single reusable water bottle can save an average of 156 plastic bottles annually. If just one person switches to a reusable bottle, that's potentially 15 pounds of plastic waste prevented each year."
  },
  {
    id: 2,
    title: "Compost your food waste",
    content: "About 28% of what we throw away is food and yard waste. Composting these materials can reduce landfill methane emissions and create nutrient-rich soil for your garden."
  },
  {
    id: 3,
    title: "Try bamboo toothbrushes",
    content: "Over 4.7 billion plastic toothbrushes end up in landfills and oceans annually. Bamboo alternatives are biodegradable and just as effective for oral hygiene."
  },
  {
    id: 4,
    title: "Use reusable cloth bags",
    content: "The average plastic bag is used for just 12 minutes but takes over 500 years to degrade. A single cloth bag can replace hundreds of plastic bags over its lifetime."
  },
  {
    id: 5,
    title: "Switch to beeswax wraps",
    content: "Reusable beeswax wraps can replace plastic wrap and aluminum foil for food storage. They're washable, reusable for up to a year, and completely compostable at the end of their life."
  },
  {
    id: 6,
    title: "Try shampoo and soap bars",
    content: "Liquid personal care products typically contain 80-95% water and come in plastic containers. Switching to solid bars eliminates plastic packaging and reduces your carbon footprint from shipping."
  },
  {
    id: 7,
    title: "Opt for reusable menstrual products",
    content: "A menstrual cup or reusable pads can prevent thousands of disposable products from entering landfills over a person's lifetime, while saving money in the long run."
  }
];

const DailyEcoTip = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Get a random tip when component mounts
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ecoTips.length);
    setCurrentTipIndex(randomIndex);
  }, []);
  
  const currentTip = ecoTips[currentTipIndex];

  const getNewTip = () => {
    setIsLoading(true);
    // Generate a new random index different from current
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * ecoTips.length);
    } while (newIndex === currentTipIndex);
    
    // Simulate loading for better UX
    setTimeout(() => {
      setCurrentTipIndex(newIndex);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Card className="bg-gradient-to-br from-nature-50 to-nature-100 border-nature-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl text-nature-800">
          <Lightbulb className="mr-2 h-5 w-5 text-nature-600" />
          Daily Eco Fact
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-4 bg-nature-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-nature-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-nature-200 rounded w-5/6"></div>
          </div>
        ) : (
          <>
            <h3 className="font-medium mb-2">{currentTip.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{currentTip.content}</p>
          </>
        )}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={getNewTip}
          disabled={isLoading}
          className="w-full mt-2 border-nature-300 hover:bg-nature-200 text-sm"
        >
          {isLoading ? "Loading..." : "Show Another Tip"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyEcoTip;
