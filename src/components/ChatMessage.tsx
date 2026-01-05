'use client';

import { Message } from '@/types/chat';
import { formatTime } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex mb-6 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs px-5 py-3 border-4 border-black rounded-2xl shadow-lg ${
          isUser
            ? 'bg-black text-white rounded-br-none'
            : 'bg-white text-black rounded-bl-none'
        }`}
      >
        <p className="text-base leading-relaxed mb-2">{message.content}</p>
        <p className={`text-xs ${isUser ? 'text-gray-400' : 'text-gray-600'}`}>
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
}