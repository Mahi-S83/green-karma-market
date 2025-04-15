
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="bg-nature-100 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-12 w-12 text-nature-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <div className="flex justify-center">
              <Button asChild>
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Browse Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Your Cart</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex flex-col md:flex-row border-b py-4 last:border-b-0 last:pb-0">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <Link to={`/product/${item.product.id}`}>
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="rounded-lg w-full h-32 md:h-28 object-cover"
                      />
                    </Link>
                  </div>
                  <div className="md:w-3/4 md:pl-4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="text-lg font-medium">{item.product.name}</h3>
                      </Link>
                      <p className="font-semibold text-forest-700">
                        ${(item.product.price / 100).toFixed(2)}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 rounded-none rounded-l-md"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="px-3 py-1 text-center w-10">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="h-8 w-8 rounded-none rounded-r-md"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-between">
              <Button variant="outline" asChild>
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={clearCart}
                className="text-red-500 border-red-200 hover:bg-red-50"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>{item.product.name} (x{item.quantity})</span>
                    <span>${((item.product.price * item.quantity) / 100).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>${(totalPrice / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total</span>
                  <span>${(totalPrice / 100).toFixed(2)}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-forest-600 hover:bg-forest-700">
                Proceed to Checkout
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Eco-friendly packaging included with your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
