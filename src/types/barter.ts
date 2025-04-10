
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
}
