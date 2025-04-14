
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// Sample news items
const newsItems = [
  {
    id: 1,
    title: "India Bans Single-Use Plastic Nationwide",
    summary: "The ban covers items like straws, cutlery, packaging, and more as part of the country's effort to reduce plastic pollution.",
    date: "2023-04-25",
    imageUrl: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 2,
    title: "New Recycling Center Opens in Bangalore",
    summary: "The state-of-the-art facility can process up to 500 tonnes of waste daily, focusing on plastics and e-waste.",
    date: "2023-05-12",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "#"
  },
  {
    id: 3,
    title: "Sustainable Fashion Initiative Gains Momentum",
    summary: "Local designers are pioneering eco-friendly textile innovations using traditional techniques and modern technology.",
    date: "2023-06-03",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    url: "#"
  }
];

const EcoNews = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Eco-Friendly News</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  variant="link" 
                  className="p-0 text-nature-600 hover:text-nature-800"
                  asChild
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Read full article
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoNews;
