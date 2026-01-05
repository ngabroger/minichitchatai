'use client';

import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useChat } from '@/hooks/useChat';

export function ChatContainer() {
  const { messages, isLoading, handleSendMessage, messagesEndRef } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-100" style={{ fontFamily: "'Comic Sans MS', 'Trebuchet MS', cursive, sans-serif" }}>
      {/* Header */}
      <div className="bg-black text-white p-8 border-b-4 border-white shadow-lg">
        <h1 className="text-4xl font-bold mb-2" style={{ textShadow: '2px 2px 0px rgba(255, 255, 255, 0.3)' }}>
          CHIT CHAT AI
        </h1>
 
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-8 bg-gray-100">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-600">
              <p className="text-3xl font-bold mb-2">Mulai percakapan</p>
              <p className="text-lg">Ketik pesan Anda di bawah untuk memulai chat dengan AI</p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}