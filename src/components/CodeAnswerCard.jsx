import React from 'react';
import Card from './Card';
import { Bug, Zap, Lightbulb, Code } from 'lucide-react';

const CodeAnswerCard = ({ selectedPrompt, onPromptSelect, question, onQuestionChange, onAskAI, loading }) => {
  const cardDetails = [
    { label: 'Debug this code', icon: <Bug size={15} /> },
    { label: 'Optimize performance', icon: <Zap size={15} /> },
    { label: 'Explain concept', icon: <Lightbulb size={15} /> },
    { label: 'Best practices', icon: <Code size={15} /> },
  ];

  return (
    <div className="bg-[#1F2937] p-6 rounded-xl w-full shadow-md space-y-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold">Ask Your Question</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {cardDetails.map((item, idx) => (
          <Card
            key={idx}
            icon={item.icon}
            label={item.label}
            onClick={() => onPromptSelect(item.label)}
            className={`bg-[#374151] hover:bg-[#4B5563] text-white rounded-md p-3 text-sm flex flex-col items-center justify-center space-y-1 ${
              selectedPrompt === item.label ? 'ring-2 ring-blue-500' : ''
            }`}
          />
        ))}
      </div>
      <textarea
        placeholder="Ask me anything about your code... (e.g., 'Why is this React hook not working?', 'How to optimize this function?')"
        value={question}
        onChange={(e) => onQuestionChange(e.target.value)}
        className="w-full h-28 bg-[#0F172A] text-white text-sm rounded-md p-4 resize-none border-2 border-transparent focus:border-white focus:ring-0 focus:outline-none transition-colors duration-200"
      />
      <button
        onClick={onAskAI}
        disabled={loading}
        className="w-full bg-[#1D4ED8] hover:bg-[#2563EB] text-white rounded-md py-2 text-sm flex items-center justify-center space-x-2 disabled:opacity-50"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 12H2m10 10l-4-4m4 4l4-4m-4-16l-4 4m4-4l4 4"
          />
        </svg>
        <span>{loading ? 'Thinking...' : 'Ask AI'}</span>
      </button>
    </div>
  );
};

export default CodeAnswerCard;
