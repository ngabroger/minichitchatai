'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Message } from '@/types/chat';
import { sendMessage } from '@/lib/api';
import { generateId } from '@/lib/utils';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      const userMessage: Message = {
        id: generateId(),
        content: content.trim(),
        role: 'user',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      try {
        const response = await sendMessage(userMessage.content);

        if (response.success) {
          const assistantMessage: Message = {
            id: generateId(),
            content: response.message,
            role: 'assistant',
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, assistantMessage]);
        }
      } catch (error) {
        console.error('Error in chat:', error);
        const errorMessage: Message = {
          id: generateId(),
          content: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
          role: 'assistant',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { messages, isLoading, handleSendMessage, messagesEndRef };
}