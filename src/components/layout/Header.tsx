
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search, 
  Leaf, 
  HandHeart,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-forest-600" />
            <span className="text-xl font-bold text-forest-800">The Eco Loop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-forest-800 hover:text-forest-600 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-forest-800 hover:text-forest-600 font-medium">
              Products
            </Link>
            <Link to="/barter" className="text-forest-800 hover:text-forest-600 font-medium">
              Barter
            </Link>
            <Link to="/about" className="text-forest-800 hover:text-forest-600 font-medium">
              About Us
            </Link>
          </nav>

          {/* Search, Cart, and Login */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search"
                placeholder="Search products..."
                className="w-64 pl-8 rounded-full bg-muted/50 border-forest-200 focus-visible:ring-forest-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart" aria-label="Shopping cart">
                <ShoppingCart className="h-5 w-5 text-forest-700" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/barter" aria-label="Barter items">
                <HandHeart className="h-5 w-5 text-forest-700" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="bg-forest-50 border-forest-200 hover:bg-forest-100 text-forest-700">
              <Link to="/login">
                <LogIn className="mr-1 h-4 w-4" />
                Login
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-forest-800 hover:text-forest-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-forest-800 hover:text-forest-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/barter" 
                className="text-forest-800 hover:text-forest-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Barter
              </Link>
              <Link 
                to="/about" 
                className="text-forest-800 hover:text-forest-600 font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-8 rounded-full bg-muted/50 border-forest-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button type="submit" className="sr-only">Search</Button>
              </form>
              <div className="flex space-x-4 pt-2">
                <Button variant="ghost" size="icon" asChild className="flex-1">
                  <Link to="/cart" className="flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-5 w-5 text-forest-700" />
                    <span>Cart</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="flex-1">
                  <Link to="/barter" className="flex items-center justify-center space-x-2">
                    <HandHeart className="h-5 w-5 text-forest-700" />
                    <span>Barter</span>
                  </Link>
                </Button>
              </div>
              <Button variant="outline" size="sm" asChild className="bg-forest-50 border-forest-200 hover:bg-forest-100 text-forest-700 mt-2">
                <Link to="/login" className="flex items-center justify-center w-full">
                  <LogIn className="mr-1 h-4 w-4" />
                  Login
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
