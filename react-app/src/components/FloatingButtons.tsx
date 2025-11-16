import type { FC } from 'react';
import React, { useState, useEffect } from 'react';
import './FloatingButtons.css';
import aiBotLogo from '../assets/ai-bot-logo.png';
import { aiService } from '../services/aiService';

interface FloatingButtonsProps {
  isChatOpen: boolean;
  toggleChat: () => void;
}

const FloatingButtons: FC<FloatingButtonsProps> = ({ isChatOpen, toggleChat }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean; timestamp: Date }[]>([
    { text: "Hi! I'm Sabish's AI Assistant. How can I help you today? You can ask me about Sabish's skills, projects, experience, or contact information.", isUser: false, timestamp: new Date() }
  ]);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Auto-resize textarea
  const autoResizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 128) + 'px';
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    autoResizeTextarea();
  }, [message]);

  const whatsappNumber = '919095399164'; // Format: country code + number without '+'
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
  };

  const handleToggleChat = () => {
    toggleChat();
  };

  // Focus on input when chat opens
  useEffect(() => {
    if (isChatOpen) {
      // Focus on input when chat opens
      const input = document.getElementById('chat-input');
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    }
  }, [isChatOpen]);

  const handleSendMessage = async () => {
    if (message.trim() && !isLoading) {
      const userMessage = message.trim();

      // Add user message
      setMessages(prev => [...prev, {
        text: userMessage,
        isUser: true,
        timestamp: new Date()
      }]);

      // Clear input
      setMessage('');

      // Set loading state
      setIsLoading(true);

      try {
        // Get AI response
        const aiResponse = await aiService.generateResponse(userMessage);

        // Add AI response
        setMessages(prev => [...prev, {
          text: aiResponse,
          isUser: false,
          timestamp: new Date()
        }]);
      } catch (error) {
        console.error('Error in AI service:', error);
        setMessages(prev => [...prev, {
          text: "I'm having trouble connecting right now. Please try again or contact Sabish directly via WhatsApp.",
          isUser: false,
          timestamp: new Date()
        }]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-2 sm:gap-3">

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="group relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-300 hover:via-green-400 hover:to-green-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center justify-center border border-green-300/20 hover:border-green-300/40 overflow-hidden"
          aria-label="Contact on WhatsApp"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* WhatsApp Icon with modern styling */}
          <svg className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 filter drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900/95 backdrop-blur-sm text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-gray-700">
            💬 Chat on WhatsApp
          </span>

          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full shadow-md flex items-center justify-center">
            <span className="text-[10px] font-bold">1</span>
          </span>
        </button>

        {/* AI Assistant Button */}
        <button
          onClick={handleToggleChat}
          className={`group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 hover:from-violet-400 hover:via-purple-500 hover:to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 flex items-center justify-center border border-purple-300/20 hover:border-purple-300/40 overflow-hidden ${isChatOpen ? 'ring-2 ring-purple-300 ring-offset-2 ring-offset-purple-900 animate-pulse' : ''}`}
          aria-label="AI Assistant"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Sparkle effects */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

          {/* AI Assistant Icon with Logo */}
          {isChatOpen ? (
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 relative z-10 filter drop-shadow-sm transition-all duration-300 ${
              isChatOpen ? 'rotate-45 scale-100' : 'rotate-0 scale-100'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative z-10">
              <img
                src={aiBotLogo}
                alt="AI Assistant"
                className={`w-7 h-7 sm:w-9 sm:h-9 object-cover rounded-lg filter drop-shadow-sm transition-all duration-300 group-hover:scale-110 ${
                  isChatOpen ? 'scale-0 rotate-180' : 'scale-100 rotate-0'
                }`}
              />
            </div>
          )}

          {/* Status indicator */}
          {isChatOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full animate-pulse shadow-md"></span>
          )}

          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900/95 backdrop-blur-sm text-white text-xs sm:text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-gray-700">
            🤖 {isChatOpen ? 'Close' : 'Open'} AI Assistant
          </span>
        </button>
      </div>

      {/* ChatGPT-style Chatbot Popup */}
      <div
        className={`fixed bottom-20 sm:bottom-24 right-2 sm:right-4 w-[calc(100vw-1rem)] sm:w-[380px] h-[60vh] sm:h-[480px] bg-white shadow-2xl z-50 flex flex-col border border-gray-200 rounded-xl transform transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] origin-bottom-right ${
          isChatOpen
            ? 'translate-y-0 opacity-100 scale-100 rotate-0'
            : 'translate-y-4 opacity-0 scale-75 rotate-3 pointer-events-none'
        }`}
      >
        {/* Enhanced Chat Header */}
        <div className={`bg-white border-b border-gray-200 px-4 py-3 rounded-t-xl flex items-center justify-between shadow-sm transition-all duration-500 delay-100 ${
          isChatOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
        }`}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md animate-pulse">
                <img
                  src={aiBotLogo}
                  alt="AI Assistant"
                  className="w-5 h-5 object-cover rounded filter drop-shadow-sm"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm animate-ping"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Sabish AI Assistant</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="text-green-500">●</span>
                Active now
              </p>
            </div>
          </div>
          <button
            onClick={handleToggleChat}
            className="hover:bg-gray-100 rounded-lg p-2 transition-all duration-200 text-gray-500 hover:text-gray-700"
            title="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ChatGPT-style Messages */}
        <div className={`flex-1 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 transition-all duration-500 delay-200 ${
          isChatOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`} id="chat-messages">
          <div className="max-w-3xl mx-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`border-b border-gray-100 ${msg.isUser ? 'bg-gray-50' : 'bg-white'} transition-all duration-300 ${
                  isChatOpen ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                }`}
                style={{ animationDelay: `${isChatOpen ? idx * 100 : 0}ms` }}
              >
                <div className="flex gap-3 p-3">
                  {/* Avatar */}
                  <div className="flex-shrink-0 mt-1">
                    {msg.isUser ? (
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <img
                          src={aiBotLogo}
                          alt="AI"
                          className="w-4 h-4 object-cover rounded filter drop-shadow-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Message content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-gray-800">
                        {msg.isUser ? 'You' : 'Sabish AI'}
                      </span>
                      <span className="text-xs text-gray-400">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      {idx === messages.length - 1 && !msg.isUser && isLoading && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      )}
                    </div>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {msg.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Enhanced Input Area */}
        <div className={`border-t border-gray-200 bg-white p-4 rounded-b-xl transition-all duration-500 delay-300 ${
          isChatOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="max-w-full">
            <div className="relative flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-xl focus-within:border-purple-400 focus-within:bg-white focus-within:shadow-sm transition-all duration-200 focus-within:scale-[1.02]">
              <textarea
                ref={textareaRef}
                id="chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask anything about Sabish..."
                rows={1}
                className="flex-1 px-4 py-3 bg-transparent text-gray-800 placeholder-gray-400 border-0 focus:outline-none text-sm resize-none max-h-32 min-h-[44px] overflow-y-auto"
              />
              <div className="flex items-center gap-1 p-2">
                <button
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors duration-200"
                  title="Attach file"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || isLoading}
                  className="p-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white rounded-lg transition-colors duration-200 disabled:cursor-not-allowed relative"
                  title="Send message"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </div>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <span className="text-green-600 flex items-center gap-1">
                {isLoading ? 'Thinking...' : 'AI Assistant'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
