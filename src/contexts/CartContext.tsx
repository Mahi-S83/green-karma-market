
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product } from '@/types/product';
import { toast } from "sonner";

// Define the shape of a cart item
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the shape of the cart context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize cart from localStorage if available
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Calculate total price and item count
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if the product is already in the cart
      const existingItemIndex = prevItems.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex > -1) {
        // Product exists in cart, update quantity
        const newItems = [...prevItems];
        const newQuantity = newItems[existingItemIndex].quantity + quantity;
        
        // Make sure we don't exceed available stock
        if (newQuantity > product.stock) {
          toast.error(`Sorry, only ${product.stock} items available`);
          newItems[existingItemIndex].quantity = product.stock;
        } else {
          newItems[existingItemIndex].quantity = newQuantity;
          toast.success(`${quantity} more added to cart`);
        }
        return newItems;
      } else {
        // Product is not in cart, add it
        if (quantity > product.stock) {
          toast.error(`Sorry, only ${product.stock} items available`);
          quantity = product.stock;
        }
        toast.success(`${product.name} added to cart`);
        return [...prevItems, { product, quantity }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.product.id !== productId);
      toast.success("Item removed from cart");
      return newItems;
    });
  };

  // Update quantity of a product in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      const itemIndex = newItems.findIndex(item => item.product.id === productId);
      
      if (itemIndex > -1) {
        const product = newItems[itemIndex].product;
        // Make sure we don't exceed available stock or go below 1
        if (quantity > product.stock) {
          toast.error(`Sorry, only ${product.stock} items available`);
          newItems[itemIndex].quantity = product.stock;
        } else if (quantity < 1) {
          // If quantity is less than 1, remove the item
          return newItems.filter(item => item.product.id !== productId);
        } else {
          newItems[itemIndex].quantity = quantity;
        }
      }
      return newItems;
    });
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared");
  };

  // Provide the cart context value
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Create a hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
