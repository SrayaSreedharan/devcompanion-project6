import React from 'react';
import { Code2 } from 'lucide-react'; // Optional icon library (or use emoji)

const CodeContextInput = () => {
  return (
    <div className="bg-[#1F2937] rounded-lg p-4 border border-gray-700 w-full max-w-5xl mx-auto">
      <div className="flex items-center space-x-2 mb-2">
        {/* Icon and Title */}
        <span className="text-white text-xl">
          <Code2 className="w-5 h-5 inline-block mr-1" />
        </span>
        <h3 className="text-white font-semibold text-lg">Code Context <span className="text-gray-400">(Optional)</span></h3>
      </div>

      {/* Textarea */}
      <textarea
        placeholder="Paste your code here for context..."
        className="w-full min-h-[200px] bg-[#0F172A] text-gray-300 text-sm rounded-md p-4 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default CodeContextInput;
