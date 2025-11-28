import { Groq } from 'groq-sdk';

// Initialize Groq with your API key
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY || '',
  dangerouslyAllowBrowser: true
});

export interface ChatMessage {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}

class AIService {
  private chatHistory: ChatMessage[] = [];

  constructor() {
    // Initialize with a system prompt
    this.chatHistory = [{
      role: 'user',
      parts: [{ text: 'You are Sabish\'s AI Assistant, a helpful and friendly AI that helps users learn about Sabish\'s skills, projects, experience, and contact information. Be conversational, professional, and informative. Respond as if you are representing Sabish personally.' }]
    }];
  }

  async generateResponse(userMessage: string): Promise<string> {
    try {
      // Convert chat history to Groq format and add system message
      const groqMessages = this.chatHistory.map(msg => ({
        role: msg.role === 'model' ? 'assistant' : msg.role,
        content: msg.parts[0]?.text || ''
      }));

      // Add system message for context
      groqMessages.unshift({
        role: 'system',
        content: 'You are Sabish\'s AI Assistant, a helpful and friendly AI that helps users learn about Sabish\'s skills, projects, experience, and contact information. Be conversational, professional, and informative. Respond as if you are representing Sabish personally. Sabish is a skilled software developer with expertise in React, TypeScript, Node.js, Python, and modern web technologies. He has professional experience in software development and is passionate about creating innovative solutions. His contact information: email - lsabish2001@gmail.com, phone - +91 90953 99164, LinkedIn - https://www.linkedin.com/in/sabish-l'
      });

      // Add user message to Groq messages
      groqMessages.push({
        role: 'user',
        content: userMessage
      });

      // Generate response using Groq with streaming disabled for browser
      const chatCompletion = await groq.chat.completions.create({
        messages: groqMessages,
        model: "llama-3.1-8b-instant",
        temperature: 1,
        max_completion_tokens: 1024,
        top_p: 1,
        stream: false,
        stop: null
      });

      const response = chatCompletion.choices[0]?.message?.content || "I'm having trouble generating a response right now. Please try again.";

      // Add user message to chat history
      this.chatHistory.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      // Add model response to chat history
      this.chatHistory.push({
        role: 'model',
        parts: [{ text: response }]
      });

      // Keep only last 10 messages to maintain context
      if (this.chatHistory.length > 10) {
        this.chatHistory = this.chatHistory.slice(-10);
      }

      return response;
    } catch (error) {
      console.error('Error generating AI response:', error);

      // Fallback to intelligent responses when API fails
      return this.generateFallbackResponse(userMessage);
    }
  }

  private generateFallbackResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();

    // Skills related responses
    if (message.includes('skill') || message.includes('technologies') || message.includes('tech stack')) {
      return "Sabish is skilled in React, TypeScript, Node.js, Python, and various web technologies. He has experience with frontend development, backend systems, and modern web frameworks. His technical toolkit includes JavaScript, HTML/CSS, Git, and cloud platforms.";
    }

    // Experience related responses
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
      return "Sabish has professional experience in software development, working on various projects ranging from web applications to system architecture. He's passionate about creating efficient, scalable solutions and staying current with industry trends.";
    }

    // Projects related responses
    if (message.includes('project') || message.includes('portfolio') || message.includes('work') || message.includes('built')) {
      return "Sabish has worked on several impressive projects including web applications, mobile apps, and system designs. Each project demonstrates his problem-solving abilities and attention to detail. You can check out his projects section for specific examples!";
    }

    // Contact related responses
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
      return "You can contact Sabish via email at lsabish2001@gmail.com or phone at +91 90953 99164. He's also active on LinkedIn and typically responds within a day. Feel free to reach out for collaborations or opportunities!";
    }

    // About related responses
    if (message.includes('about') || message.includes('who') || message.includes('background')) {
      return "Sabish is a passionate software developer with a strong foundation in computer science and a love for creating innovative solutions. He's dedicated to continuous learning and delivering high-quality code that makes a positive impact.";
    }

    // Education related responses
    if (message.includes('education') || message.includes('study') || message.includes('degree') || message.includes('college')) {
      return "Sabish has a strong educational background in computer science or related fields, complemented by continuous self-learning and professional development. He believes in staying updated with the latest technologies and best practices.";
    }

    // General greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('hii')) {
      return "Hello! I'm Sabish's AI assistant. How can I help you learn more about Sabish's skills, experience, projects, or anything else you'd like to know?";
    }

    // Help related responses
    if (message.includes('help') || message.includes('what can you do')) {
      return "I can help you learn about Sabish's professional background, technical skills, work experience, projects, and contact information. Feel free to ask me anything specific, or I can give you an overview of his capabilities!";
    }

    // Default response
    return "That's a great question! Based on what I know about Sabish, he's a talented software developer with expertise in modern web technologies. If you have specific questions about his skills, experience, projects, or how to contact him, I'd be happy to provide more detailed information!";
  }

  // Clear chat history
  clearHistory(): void {
    this.chatHistory = [{
      role: 'user',
      parts: [{ text: 'You are Sabish\'s AI Assistant, a helpful and friendly AI that helps users learn about Sabish\'s skills, projects, experience, and contact information. Be conversational, professional, and informative. Respond as if you are representing Sabish personally.' }]
    }];
  }

  // Get current chat history
  getChatHistory(): ChatMessage[] {
    return this.chatHistory;
  }
}

export const aiService = new AIService();