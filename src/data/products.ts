
import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: "1",
    name: "Bamboo Cutlery Set",
    description: "Portable bamboo cutlery set with knife, fork, spoon and chopsticks. Perfect for on-the-go meals without plastic waste.",
    price: 499,
    imageUrl: "https://images.unsplash.com/photo-1584346233277-6ba261100c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1584916447972-ce4b11a80b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1607613009906-55638d22169a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1607006344380-b4775bac758c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1622022526458-530fa6599fb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sustainable alternatives for your home"
  },
  {
    id: "personal",
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1607006344380-b4775bac758c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Natural, plastic-free personal care"
  },
  {
    id: "kitchen",
    name: "Kitchen & Dining",
    image: "https://images.unsplash.com/photo-1584346233277-6ba261100c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly kitchen essentials"
  },
  {
    id: "fashion",
    name: "Sustainable Fashion",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ethical and sustainable clothing"
  },
  {
    id: "garden",
    name: "Garden & Outdoors",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly gardening supplies"
  }
];
