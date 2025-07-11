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

## Key Technical Decisions (Dev Companion)

### 1. **React**
- **Chosen for a fast development experience and optimized build output**
- **Enables a modular component-based architecture**
- **Offers hot module replacement for rapid iteration**


### 2. **OpenRouter API Integration**
- **Chosen for flexible and multi-model AI access**
- **Simplifies AI query logic through a single API endpoint**
- **Secured via environment variables and rate-limited for safety**

### 3. **Tailwind CSS for UI**
- **Used for fast, utility-first styling with a clean developer theme**
- **Simplifies component-level customization and dark mode support**
- **Enables rapid prototyping of UI features like buttons, tabs, and cards**

### 4. **Prompt-Based Query System**
- **Designed to offer predefined prompts for debugging, optimization, explanation, and best practices**
- **Improves UX by guiding users toward relevant AI questions**
- **Allows future extensibility for custom prompt creation**

### 5. **Component-Based Widget System**
- **Built as reusable, isolated components (e.g., `Tabs`, `CodeContextInput`, `CodeAnswerCard`)**
- **Encourages scalability and ease of maintenance**
- **Supports adding future widgets like history, favorites, or saved answers**


## Challenges and Solutions

### 1. **Contextual AI Understanding**
- **Challenge**: Ensuring AI responses are relevant and based on user-pasted code
- **Solution**:
  - **Combined user questions with code context** before sending to the API
  - **Structured prompt formatting** to maintain clarity
  - **Selected models with strong multi-turn conversation capabilities**

### 2. **API Key Security**
- **Challenge**: Preventing API key exposure in a client-side 
- **Solution**:
  - **Used environment variables** (`REACT_APP_OPENROUTER_API_KEY`) in development
  - **Encouraged users to set keys via Vercel or .env** files
  - **Planned backend proxy for production use**


### 3. **Cross-Component State Management**
- **Challenge**: Sharing selected prompts, code context, and AI responses cleanly
- **Solution**:
  - **Used React hooks and local component state**
  - **Designed reusable, stateful components** (`CodeAnswerCard`, `CodeContextInput`)
  - **Kept logic minimal and easy to follow**

### 4. **User Experience**
- **Challenge**: Creating a developer-friendly UI that feels fast and intuitive
- **Solution**:
  - **Used Tailwind CSS** for responsive, theme-consistent design
  - **Provided predefined prompts** for common coding queries
  - **Added loading indicators and visual feedback** (e.g., `Thinking...`, copy buttons)

### 5. **AI Performance & Rate Limits**
- **Challenge**: Handling slow responses or rate-limited requests from OpenRouter
- **Solution**:
  - **Displayed fallback messages** when responses fail
  - **Logged errors for debugging**
  - **Prepared for future retry logic and usage metering**


