
export interface BarterItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  owner: string;
  location: string;
  exchangeFor: string;
  contactInfo?: string;
  createdAt: string;
  condition?: "new" | "like-new" | "good" | "fair" | "worn";
  category?: string;
  availableFor?: ("exchange" | "donation" | "loan")[];
  estimatedValue?: number;
  duration?: number; // Duration in days for loan items
  preferredExchangeLocation?: string;
  tags?: string[];
  sustainability?: string; // Description of how the item is sustainable
  materials?: string[]; // Materials the item is made from
  brand?: string; // Brand or manufacturer
  dimensions?: string; // Size or dimensions
  weight?: string; // Weight of the item
  carbonFootprint?: string; // Carbon footprint information
  certifications?: string[]; // Eco certifications (e.g., "FSC", "Fair Trade")
  care?: string; // Care instructions
}
