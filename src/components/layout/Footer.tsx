
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <h2 className="text-xl font-bold">Green Karma Market</h2>
            </div>
            <p className="text-sm text-nature-100">
              Sustainable, eco-friendly products for a better planet. Join our mission to reduce waste and promote reusable alternatives.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-nature-100 hover:text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-nature-100 hover:text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-nature-100 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-nature-100">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/barter" className="hover:text-white transition-colors">Barter Exchange</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-nature-100">
              <li>
                <Link to="/products?category=home" className="hover:text-white transition-colors">Home & Living</Link>
              </li>
              <li>
                <Link to="/products?category=personal" className="hover:text-white transition-colors">Personal Care</Link>
              </li>
              <li>
                <Link to="/products?category=kitchen" className="hover:text-white transition-colors">Kitchen & Dining</Link>
              </li>
              <li>
                <Link to="/products?category=fashion" className="hover:text-white transition-colors">Sustainable Fashion</Link>
              </li>
              <li>
                <Link to="/products?category=garden" className="hover:text-white transition-colors">Garden & Outdoors</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-nature-100">
              <p>123 Green Street, Eco City</p>
              <p>India</p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:hello@greenkarma.com" className="hover:text-white transition-colors">
                  hello@greenkarma.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-nature-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-nature-100">
            © {new Date().getFullYear()} Green Karma Market. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-nature-100">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
