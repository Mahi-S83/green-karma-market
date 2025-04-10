
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Bamboo Cutlery Set",
    description: "Portable bamboo cutlery set with knife, fork, spoon and chopsticks. Perfect for on-the-go meals without plastic waste.",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1584346133934-2ea624dc1a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "kitchen",
    badges: ["sustainable", "organic"],
    materials: ["bamboo"],
    stock: 45,
    rating: 4.8,
    ecoAttributes: ["plastic-free", "biodegradable", "zero-waste"]
  },
  {
    id: "2",
    name: "Organic Cotton Produce Bags",
    description: "Set of 5 reusable organic cotton mesh bags for fruits and vegetables shopping. Durable and machine washable.",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1611404064750-3b9ada0ee888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "home",
    badges: ["organic", "recycled"],
    materials: ["organic-cotton"],
    stock: 32,
    rating: 4.7,
    ecoAttributes: ["plastic-free", "zero-waste", "compostable"]
  },
  {
    id: "3",
    name: "Stainless Steel Water Bottle",
    description: "1L double-walled vacuum insulated water bottle. Keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 899,
    imageUrl: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "personal",
    badges: ["sustainable"],
    materials: ["recycled-plastic"],
    stock: 38,
    rating: 4.9,
    ecoAttributes: ["plastic-free", "zero-waste"]
  },
  {
    id: "4",
    name: "Coconut Bowl Set",
    description: "Set of 2 handcrafted coconut bowls with bamboo spoons. Perfect for smoothie bowls, salads or display.",
    price: 650,
    imageUrl: "https://images.unsplash.com/photo-1578761617802-2519b0500192?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "kitchen",
    badges: ["organic", "recycled"],
    materials: ["bamboo"],
    stock: 28,
    rating: 4.5,
    ecoAttributes: ["vegan", "biodegradable", "zero-waste"]
  },
  {
    id: "5",
    name: "Recycled Paper Journal",
    description: "A5 journal with 200 recycled paper pages. Perfect for notes, journaling or sketching.",
    price: 275,
    imageUrl: "https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "home",
    badges: ["recycled"],
    materials: ["recycled-plastic"],
    stock: 52,
    rating: 4.3,
    ecoAttributes: ["biodegradable"]
  },
  {
    id: "6",
    name: "Organic Beeswax Wraps",
    description: "Set of 3 reusable beeswax food wraps. A sustainable alternative to plastic wrap for food storage.",
    price: 425,
    imageUrl: "https://images.unsplash.com/photo-1613766259482-50853565d97c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "kitchen",
    badges: ["organic", "sustainable"],
    materials: ["organic-cotton"],
    stock: 20,
    rating: 4.6,
    ecoAttributes: ["plastic-free", "biodegradable", "zero-waste"]
  },
  {
    id: "7",
    name: "Bamboo Toothbrush Set",
    description: "Pack of 4 biodegradable bamboo toothbrushes with charcoal-infused bristles.",
    price: 299,
    imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "personal",
    badges: ["organic", "sustainable"],
    materials: ["bamboo"],
    stock: 37,
    rating: 4.7,
    ecoAttributes: ["plastic-free", "biodegradable", "zero-waste"]
  },
  {
    id: "8",
    name: "Jute Market Bag",
    description: "Large capacity jute market bag with comfortable handles. Durable and perfect for grocery shopping.",
    price: 399,
    imageUrl: "https://images.unsplash.com/photo-1619538189823-3a7c1b61d297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "home",
    badges: ["organic", "sustainable"],
    materials: ["jute"],
    stock: 42,
    rating: 4.4,
    ecoAttributes: ["plastic-free", "biodegradable"]
  },
  {
    id: "9",
    name: "Cork Yoga Mat",
    description: "Premium eco-friendly cork yoga mat with natural rubber base. Non-slip and antimicrobial.",
    price: 1899,
    imageUrl: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "garden",
    badges: ["sustainable"],
    materials: ["cork"],
    stock: 15,
    rating: 4.9,
    ecoAttributes: ["vegan", "biodegradable"]
  },
  {
    id: "10",
    name: "Handmade Shea Butter Soap",
    description: "Natural, cold-processed shea butter soap. Free from parabens, SLS and plastic packaging.",
    price: 199,
    imageUrl: "https://images.unsplash.com/photo-1600857544200-b2f468e9b2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "personal",
    badges: ["organic", "sustainable"],
    materials: [],
    stock: 60,
    rating: 4.8,
    ecoAttributes: ["plastic-free", "vegan", "zero-waste"]
  },
  {
    id: "11",
    name: "Recycled Glass Storage Jars",
    description: "Set of 3 airtight storage jars made from recycled glass. Perfect for pantry organization.",
    price: 750,
    imageUrl: "https://images.unsplash.com/photo-1588017316637-592d086b281f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "kitchen",
    badges: ["recycled", "sustainable"],
    materials: [],
    stock: 25,
    rating: 4.5,
    ecoAttributes: ["plastic-free", "zero-waste"]
  },
  {
    id: "12",
    name: "Organic Hemp Face Mask",
    description: "Washable and reusable face mask made from organic hemp and cotton. Breathable and comfortable fit.",
    price: 249,
    imageUrl: "https://images.unsplash.com/photo-1586942593568-29361efcd571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    category: "personal",
    badges: ["organic"],
    materials: [],
    stock: 30,
    rating: 4.2,
    ecoAttributes: ["plastic-free", "zero-waste"]
  }
];

export const categories = [
  {
    id: "home",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Sustainable alternatives for your home"
  },
  {
    id: "personal",
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1600857544200-b2f468e9b2b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Natural, plastic-free personal care"
  },
  {
    id: "kitchen",
    name: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1584346133934-2ea624dc1a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Eco-friendly kitchen essentials"
  },
  {
    id: "fashion",
    name: "Sustainable Fashion",
    image: "https://images.unsplash.com/photo-1619538189823-3a7c1b61d297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Ethical and sustainable clothing"
  },
  {
    id: "garden",
    name: "Garden & Outdoors",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    description: "Eco-friendly gardening supplies"
  }
];
