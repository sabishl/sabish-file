import type { FC } from 'react';
import { useState, useEffect } from 'react';
import './FloatingButtons.css';

interface FloatingButtonsProps {
  isChatOpen: boolean;
  toggleChat: () => void;
}

const FloatingButtons: FC<FloatingButtonsProps> = ({ isChatOpen, toggleChat }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! I'm Sabish's AI Assistant. How can I help you today?", isUser: false }
  ]);

  const whatsappNumber = '919095399164'; // Format: country code + number without '+'
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
  };

  const handleToggleChat = () => {
    toggleChat();
  };

  // Add animation styles
  useEffect(() => {
    if (isChatOpen && !isAnimating) {
      // Focus on input when chat opens
      const input = document.getElementById('chat-input');
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    }
  }, [isChatOpen, isAnimating]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      setMessages([...messages, { text: message, isUser: true }]);
      
      // Clear input
      setMessage('');
      
      // Simulate AI response (you'll replace this with actual LLM integration)
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { text: "Thanks for your message! This AI assistant will be powered by LLM soon. For now, please contact me via WhatsApp or email.", isUser: false }
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse gap-3 sm:gap-4">

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="group relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-300 hover:via-green-400 hover:to-green-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 flex items-center justify-center border border-green-300/20 hover:border-green-300/40 overflow-hidden"
          aria-label="Contact on WhatsApp"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* WhatsApp Icon with modern styling */}
          <svg className="w-6 h-6 sm:w-8 sm:h-8 relative z-10 filter drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
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
          className={`group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 hover:from-violet-400 hover:via-purple-500 hover:to-indigo-500 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 flex items-center justify-center border border-purple-300/20 hover:border-purple-300/40 overflow-hidden ${isChatOpen ? 'ring-2 ring-purple-300 ring-offset-2 ring-offset-purple-900 animate-pulse' : ''}`}
          aria-label="AI Assistant"
        >
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Sparkle effects */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

          {/* AI Assistant Icon */}
          {isChatOpen ? (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 relative z-10 animate-rotate-in filter drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative z-10">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce-in filter drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs sm:text-sm font-bold">AI</span>
              </span>
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

      {/* AI Chatbot Popup */}
      <div
        className={`fixed bottom-20 sm:bottom-28 right-2 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[60vh] sm:h-[400px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border-2 border-gray-200 transform transition-all duration-300 ease-out ${
          isChatOpen
            ? 'translate-y-0 opacity-100 scale-100'
            : 'translate-y-full opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 text-white p-3 sm:p-4 rounded-t-2xl flex items-center justify-between shadow-xl border border-purple-300/20">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse border border-white/20">
              <div className="relative">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-[8px] sm:text-[10px] font-bold">AI</span>
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-lg">AI Assistant</h3>
              <p className="text-xs text-white/90 flex items-center gap-1">
                <span className="w-2 h-2 bg-gradient-to-br from-green-400 to-green-500 rounded-full animate-pulse shadow-sm"></span>
                <span className="font-medium">Online & Ready</span>
              </p>
            </div>
          </div>
          <button
            onClick={handleToggleChat}
            className="hover:bg-white/20 rounded-full p-1.5 sm:p-2 transition-all duration-200 hover:scale-110"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50 custom-scrollbar">
          <div className="space-y-3 sm:space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-message-in`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-2 transform transition-all duration-200 hover:scale-105 ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-800 border border-gray-200 shadow-md'
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed">{msg.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-3 sm:p-4 bg-white border-t border-gray-200 rounded-b-2xl">
          <div className="flex gap-2">
            <input
              id="chat-input"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 text-gray-800 text-sm sm:text-base transition-all duration-200"
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center animate-fade-in">
            🚀 Powered by AI • LLM integration coming soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
