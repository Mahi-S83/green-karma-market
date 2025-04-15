import React, { useState, useRef, useEffect } from 'react';
import { Send, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ChatMessage, { MessageType } from './ChatMessage';
import { products } from '@/data/products';

interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen: boolean;
}

const ChatBot = ({ isOpen }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m EcoBot, your sustainable shopping assistant. Here are some questions you can ask me:' + 
      '\n\n• "What bamboo products do you have?"' +
      '\n• "Find me organic kitchen items"' +
      '\n• "Show me eco-friendly products under ₹500"' +
      '\n• "Tell me about sustainable materials"' +
      '\n• "What makes your products eco-friendly?"',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowercaseMsg = userMessage.toLowerCase();
    
    // Product search handling
    if (lowercaseMsg.includes('product') || lowercaseMsg.includes('recommend') || lowercaseMsg.includes('suggest')) {
      if (lowercaseMsg.includes('bamboo') || lowercaseMsg.includes('kitchen')) {
        const bambooProd = products.filter(p => p.materials?.includes('bamboo') || p.category === 'kitchen');
        if (bambooProd.length > 0) {
          return `I found some eco-friendly bamboo products: ${bambooProd.slice(0, 2).map(p => `${p.name} (₹${p.price})`).join(', ')}. Would you like to know more about any of these?`;
        }
      }
      
      if (lowercaseMsg.includes('organic') || lowercaseMsg.includes('natural')) {
        const organicProds = products.filter(p => p.badges?.includes('organic'));
        if (organicProds.length > 0) {
          return `Here are some organic products: ${organicProds.slice(0, 2).map(p => `${p.name} (₹${p.price})`).join(', ')}. These products are certified organic and eco-friendly!`;
        }
      }
    }

    // Price inquiries
    if (lowercaseMsg.includes('price') || lowercaseMsg.includes('cost')) {
      const priceMatches = products.filter(p => 
        lowercaseMsg.includes(p.name.toLowerCase()) || 
        lowercaseMsg.includes(p.category.toLowerCase())
      );
      if (priceMatches.length > 0) {
        return `The price of ${priceMatches[0].name} is ₹${priceMatches[0].price}. It's a great sustainable choice!`;
      }
    }

    // Material inquiries
    if (lowercaseMsg.includes('material') || lowercaseMsg.includes('made of')) {
      const materialProducts = products.filter(p => p.materials && p.materials.length > 0);
      return `Our products use sustainable materials like ${[...new Set(materialProducts.flatMap(p => p.materials || []))].join(', ')}. Would you like to know about specific products?`;
    }

    // Eco-friendly benefits
    if (lowercaseMsg.includes('eco') || lowercaseMsg.includes('environment') || lowercaseMsg.includes('sustainable')) {
      const ecoProducts = products.filter(p => p.ecoAttributes && p.ecoAttributes.length > 0);
      if (ecoProducts.length > 0) {
        const randomProduct = ecoProducts[Math.floor(Math.random() * ecoProducts.length)];
        return `Our ${randomProduct.name} is eco-friendly because it's ${randomProduct.ecoAttributes?.join(' and ')}. Would you like to know more about our sustainable products?`;
      }
    }

    // Categories inquiry
    if (lowercaseMsg.includes('category') || lowercaseMsg.includes('type')) {
      const categories = [...new Set(products.map(p => p.category))];
      return `We have products in these categories: ${categories.join(', ')}. Which category interests you?`;
    }

    // Default responses
    const defaultResponses = [
      "I can help you find eco-friendly products. Would you like to know about our bamboo products, organic items, or sustainable materials?",
      "Let me know if you're interested in specific product categories like kitchen, personal care, or home items.",
      "I can tell you about our products' eco-friendly features, materials, and prices. What would you like to know?",
      "Ask me about our sustainable products, their environmental benefits, or specific materials used!"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Generate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const suggestedQuestions = [
    "What bamboo products do you have?",
    "Find me organic kitchen items",
    "Show me eco-friendly products under ₹500",
    "Tell me about sustainable materials",
    "What makes your products eco-friendly?",
    "Which products are best for zero waste living?",
    "Recommend products in the personal care category",
  ];

  const handleSuggestedQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[60vh] bg-white rounded-lg shadow-xl flex flex-col border border-gray-200">
      <div className="bg-forest-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-medium">EcoBot Assistant</h3>
          <p className="text-xs opacity-90">Ask me about sustainable products</p>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-forest-700"
          onClick={() => {
            const questionContainer = document.getElementById('suggested-questions');
            if (questionContainer) {
              questionContainer.classList.toggle('hidden');
            }
          }}
        >
          <HelpCircle className="h-5 w-5" />
        </Button>
      </div>
      
      <div id="suggested-questions" className="bg-forest-50 p-3 hidden">
        <h4 className="text-sm font-semibold mb-2 text-forest-800">Try asking me:</h4>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm" 
              className="text-xs border-forest-600 text-forest-700 hover:bg-forest-100"
              onClick={() => handleSuggestedQuestion(q)}
            >
              {q}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            type={message.type}
            content={message.content}
            timestamp={message.timestamp}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex gap-2">
        <Input
          type="text"
          placeholder="Ask about our eco-friendly products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="icon" className="bg-forest-600 hover:bg-forest-700">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ChatBot;
