# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Sabish — a React SPA with an AI chatbot assistant powered by Groq.

## Commands

All commands run from `react-app/`:

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Type-check (tsc -b) then build for production
npm run lint      # ESLint across all files
npm run preview   # Serve the production build locally
```

There are no tests. No single-test command exists.

## Environment

Copy `react-app/.env.example` to `react-app/.env.local` and set:

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

The AI chatbot silently falls back to pattern-matched responses when this key is absent or the API fails.

## Architecture

```
react-app/src/
├── App.tsx              # Root — owns chat state, scroll tracking, section orchestration
├── main.tsx             # React 19 strict-mode entry point
├── components/          # One file per page section + shared UI
│   ├── Navigation.tsx   # Sticky nav with active-section highlighting (driven by App scroll state)
│   ├── Home.tsx         # Hero with animated role cycling
│   ├── About.tsx        # Skills & background (largest component)
│   ├── Experience.tsx   # Timeline
│   ├── Projects.tsx     # Project cards
│   ├── FloatingButtons.tsx  # Chatbot UI + WhatsApp button (consumes aiService)
│   ├── AwardPopup.tsx   # Modal for awards
│   ├── AnimatedBackground.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── services/
│   └── aiService.ts     # Singleton — Groq SDK, Llama 3.1-8B-Instant, 10-message history window
└── hooks/
    └── useScrollReveal.tsx  # Intersection Observer for scroll-in animations
```

**State flow:** `App.tsx` holds chat open/close state and passes it down to `FloatingButtons` and `Navigation`. Scroll position in `App.tsx` drives the active section highlight in `Navigation`.

**AI service:** `aiService.ts` is a module-level singleton. It calls Groq's API with a system prompt that identifies the assistant as "Sabish's AI Assistant." On API failure it returns pattern-matched fallback strings keyed to topics (skills, projects, experience, contact, etc.).

## Tech Stack

- **React 19** + **TypeScript 5** (strict, `noUnusedLocals`, `noUnusedParameters`)
- **Vite 7** — `groq-sdk` is excluded from pre-bundling (`optimizeDeps.exclude`)
- **Tailwind CSS 4** via Vite plugin
- **Groq SDK 0.35** — browser-side, streaming disabled
- **ESLint 9** with `typescript-eslint`, `react-hooks`, `react-refresh` plugins
