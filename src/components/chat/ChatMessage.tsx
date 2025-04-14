
import React from 'react';
import { Bot, User } from 'lucide-react';

export type MessageType = 'user' | 'bot';

interface ChatMessageProps {
  type: MessageType;
  content: string;
  timestamp: Date;
}

const ChatMessage = ({ type, content, timestamp }: ChatMessageProps) => {
  const isUser = type === 'user';
  
  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
          <Bot className="h-5 w-5 text-forest-600" />
        </div>
      )}
      
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isUser 
          ? 'bg-forest-600 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 rounded-bl-none'
      }`}>
        <p className="text-sm">{content}</p>
        <p className="text-xs mt-1 opacity-70">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
      
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
