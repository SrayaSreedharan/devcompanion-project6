# Dev Companion – AI-Powered Stack Overflow Companion 

## Project Overview

**Dev Companion** is a React-based Chrome extension that acts as a mini Stack Overflow, powered by AI. It allows developers to:
- Paste or describe their code problem.
- Get instant, contextual suggestions, bug fixes, and optimization tips.
- Copy fixes with one click and continue coding faster.

---

## Features

- 🧠 **Context-Aware AI Assistance** using OpenRouter / OpenAI APIs  
- 💬 **Ask AI Anything** – Paste code, describe errors, or ask coding questions
- 🎨 **Clean, Developer-Themed UI** with dark mode support
- 📋 **One-Click Copy** of AI-suggested code


---

## Tech Stack

| Feature                     | Tech Used                             |
|-----------------------------|----------------------------------------|
| Frontend UI                 | React, TailwindCSS                     |
| AI Integration              | OpenRouter API / OpenAI                |                              
| Code Snippet Viewer         | react-syntax-highlighter               |

---
## How It Works

1. Open Dev Companion from your Chrome toolbar.
2. Paste your code or describe your issue.
3. Select a context prompt (e.g., “Debug this code” or “Optimize performance”).
4. Ask AI and get your answer instantly.
5. Copy the result and continue coding.

---
## API Key Setup (for local development)

To use OpenRouter or OpenAI:
1. Create a `.env` file in the root of your project.
2. Add:
   ```env
   REACT_APP_OPENROUTER_API_KEY=your_openrouter_api_key

## Installation

1. **Clone the repo**
2. **Run `npm install`**
3. **Add `.env`** with your API key:
4. **Build the extension:**
npm run build

