
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
}
