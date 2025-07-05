import React from 'react';
import Card from './Card';
import '../index.css';

const CodeAnswerCard = () => {
  const cardDetails = [
    { label: 'Debug this code', icon: '🧩' },
    { label: 'Optimize performance', icon: '⚡' },
    { label: 'Explain concept', icon: '💡' },
    { label: 'Best practices', icon: '</>' },
  ];

  const handleCardClick = (label) => {
    console.log("Selected option:", label);
  };

  return (
    <div className="bg-[#111827] text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-[#1F2937] p-6 rounded-xl w-full max-w-6xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold">Ask Your Question</h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {cardDetails.map((item, idx) => (
            <Card
              key={idx}
              icon={item.icon}
              label={item.label}
              onClick={() => handleCardClick(item.label)}
              className="bg-[#374151] hover:bg-[#4B5563] text-white rounded-md p-3 text-sm flex flex-col items-center justify-center space-y-1"
            />
          ))}
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Ask me anything about your code... (e.g., 'Why is this React hook not working?', 'How to optimize this function?')"
          className="w-full h-28 bg-[#0F172A] text-white rounded-md p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Ask Button */}
        <button className="w-full bg-[#1D4ED8] hover:bg-[#2563EB] text-white rounded-md py-3 text-sm flex items-center justify-center space-x-2">
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
          <span>Ask AI</span>
        </button>
      </div>
    </div>
  );
};

export default CodeAnswerCard;
