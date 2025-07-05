import React from 'react';
import { Code2 } from 'lucide-react';

const CodeContextInput = () => {
  return (
    <div className="bg-[#1F2937] rounded-lg px-4 pt-4 pb-2 border border-gray-700 w-full max-w-6xl mx-auto">
      <div className="flex items-center space-x-2 mb-2">
        <Code2 className="w-5 h-5 text-white" />
        <h3 className="text-2xl font-semibold">
          Code Context <span className="text-gray-400 text-base">(Optional)</span>
        </h3>
      </div>
      <textarea
        placeholder="Paste your code here for context..."
        className="w-full min-h-[160px] bg-[#0F172A] text-gray-300 text-sm rounded-md p-3 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CodeContextInput;
