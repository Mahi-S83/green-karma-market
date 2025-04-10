
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  badges?: string[];
  materials?: string[];
  stock: number;
  rating?: number;
  ecoAttributes?: string[];
}
