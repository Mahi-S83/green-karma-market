
import React from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatBotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatBotButton = ({ isOpen, onClick }: ChatBotButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-lg flex items-center justify-center bg-forest-600 hover:bg-forest-700"
      aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <Bot className="h-6 w-6 text-white" />
      )}
    </Button>
  );
};

export default ChatBotButton;
