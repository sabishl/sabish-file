import { Groq } from 'groq-sdk';
import { RESUME_CONTENT } from '../data/resumeContent';

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY || '',
  dangerouslyAllowBrowser: true,
});

export interface ChatMessage {
  role: 'user' | 'model';
  parts: Array<{ text: string }>;
}

const SYSTEM_PROMPT = `You are Sabish's portfolio assistant — a friendly, conversational AI on his personal portfolio website. Your only job is to help visitors learn about Sabish.

Here is Sabish's complete resume. Use ONLY this information to answer questions:

---
${RESUME_CONTENT}
---

## Rules you must always follow:

1. **Only answer from the resume above.** If a visitor asks something not covered in the resume (e.g. hobbies, favourite movies, opinions), say: "I don't have that information about Sabish — but feel free to reach out to him directly at lsabish2001@gmail.com!"

2. **Never invent or assume facts.** Do not add skills, projects, companies, or dates that are not in the resume. If unsure, say you don't know.

3. **Redirect off-topic questions warmly.** If someone asks a general question unrelated to Sabish (e.g. "how do I learn React?", "what's the capital of France?", "write me a poem"), reply like this:
   "Ha, I wish I could help with that! I'm only set up to answer questions about Sabish — his skills, experience, and projects. Is there something about him you'd like to know? 😊"

4. **Be conversational and friendly**, not stiff or corporate. Short, clear answers work best. Use bullet points when listing things.

5. **When someone wants to contact Sabish**, always share: email (lsabish2001@gmail.com), phone (+91 90953 99164), LinkedIn (linkedin.com/in/sabish-l), and mention the WhatsApp button on the site.`;

class AIService {
  private chatHistory: ChatMessage[] = [];

  constructor() {
    this.chatHistory = [];
  }

  async generateResponse(userMessage: string): Promise<string> {
    try {
      type GroqRole = 'system' | 'user' | 'assistant';

      const groqMessages: { role: GroqRole; content: string }[] = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...this.chatHistory.map(msg => ({
          role: (msg.role === 'model' ? 'assistant' : 'user') as GroqRole,
          content: msg.parts[0]?.text || '',
        })),
        { role: 'user', content: userMessage },
      ];

      const chatCompletion = await groq.chat.completions.create({
        messages: groqMessages,
        model: 'llama-3.1-8b-instant',
        temperature: 0.3,
        max_completion_tokens: 512,
        top_p: 1,
        stream: false,
        stop: null,
      });

      const response =
        chatCompletion.choices[0]?.message?.content ||
        "I'm having a bit of trouble right now — please try again in a moment!";

      this.chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });
      this.chatHistory.push({ role: 'model', parts: [{ text: response }] });

      // Keep last 10 exchanges (20 messages)
      if (this.chatHistory.length > 20) {
        this.chatHistory = this.chatHistory.slice(-20);
      }

      return response;
    } catch (error) {
      console.error('Groq API error:', error);
      return this.generateFallbackResponse(userMessage);
    }
  }

  private generateFallbackResponse(userMessage: string): string {
    const msg = userMessage.toLowerCase();

    // Greetings
    if (msg.match(/^(hi|hello|hey|hii|howdy|sup)\b/)) {
      return "Hi there! 👋 I'm Sabish's portfolio assistant. You can ask me anything about his skills, projects, experience, or how to get in touch with him!";
    }

    // Skills
    if (msg.includes('skill') || msg.includes('tech') || msg.includes('stack') || msg.includes('know') || msg.includes('language')) {
      return `Sabish's technical skills include:\n\n**Languages:** Java, Python, JavaScript\n**Frontend:** React.js, HTML5, CSS3\n**Backend:** Node.js (Express), FastAPI, Flask\n**Databases:** PostgreSQL, MongoDB, MySQL\n**AI & Automation:** RAG, LLM Integration, Prompt Engineering (BMAD), N8N\n**DevOps:** Docker (Basic), VPS Deployment, Coolify\n**Tools:** Git, Postman, Claude, GitHub Copilot`;
    }

    // Experience / work
    if (msg.includes('experience') || msg.includes('work') || msg.includes('job') || msg.includes('company') || msg.includes('wisright')) {
      return `Sabish worked at **WisRight Technologies, Chennai** (July 2025 – January 2026) as a Full Stack Developer (AI-Integrated Applications).\n\nHe built React.js frontends, scalable Node.js/Python APIs, optimized PostgreSQL schemas, integrated RAG-based AI workflows, and deployed Dockerized apps on VPS.`;
    }

    // Projects
    if (msg.includes('project') || msg.includes('built') || msg.includes('portfolio') || msg.includes('matrimony') || msg.includes('lms') || msg.includes('whatsapp') || msg.includes('crm')) {
      return `Sabish has built three major projects:\n\n1. **TrueFriend Matrimony** — Admin panel for a live matrimony platform with 18K+ users (MERN Stack, JWT Auth)\n2. **AI-Integrated LMS** — Learning management system with Kimi LLM, RAG, and Whisper speech recognition (React, Node, PostgreSQL)\n3. **WhatsApp CRM** — Full CRM system with LLM-powered automation and speech-to-text (React, Node, MongoDB)`;
    }

    // Education
    if (msg.includes('education') || msg.includes('study') || msg.includes('degree') || msg.includes('college') || msg.includes('university') || msg.includes('cgpa') || msg.includes('gpa')) {
      return `Sabish studied at **Ramco Institute of Technology**, completing his B.E in Computer Science and Engineering with a CGPA of **7.89**, graduating in **2025**.`;
    }

    // Contact
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('phone') || msg.includes('linkedin') || msg.includes('hire') || msg.includes('whatsapp')) {
      return `You can reach Sabish through:\n\n📧 **Email:** lsabish2001@gmail.com\n📞 **Phone:** +91 90953 99164\n💼 **LinkedIn:** linkedin.com/in/sabish-l\n💬 You can also use the **WhatsApp button** on this page for the fastest reply!`;
    }

    // Award / certification
    if (msg.includes('award') || msg.includes('certificate') || msg.includes('achievement') || msg.includes('oracle')) {
      return `Sabish won the **Best Project Award** from the Oracle Team for building an Admission Management System using Oracle APEX during college.\n\nHe's also certified in **Build AI-Powered Apps** from CodeWithMosh.`;
    }

    // Help
    if (msg.includes('help') || msg.includes('what can you')) {
      return `I can tell you about:\n- Sabish's **skills** and tech stack\n- His **work experience** at WisRight Technologies\n- The **projects** he's built\n- His **education** at Ramco Institute of Technology\n- **How to contact** him\n\nWhat would you like to know?`;
    }

    // Off-topic / default redirect
    return `Ha, I wish I could help with that! I'm only set up to answer questions about Sabish — his skills, experience, and projects. Is there something about him you'd like to know? 😊`;
  }

  clearHistory(): void {
    this.chatHistory = [];
  }

  getChatHistory(): ChatMessage[] {
    return this.chatHistory;
  }
}

export const aiService = new AIService();
