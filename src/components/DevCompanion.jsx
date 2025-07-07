import React, { useState } from 'react';
import Tabs from '../layout/Tabs';
import CodeContextInput from '../CodeContext/CodeContextInput';
import CodeAnswerCard from './CodeAnswerCard';

import askOpenAI from '../utils/opnRouterApi';

const DevCompanion = () => {
  const [activeTab, setActiveTab] = useState('ask');
  const [question, setQuestion] = useState('');
  const [codeContext, setCodeContext] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    setLoading(true);
    try {
      const response = await askOpenAI(question, codeContext);
      setAnswer(response);
      setActiveTab('results');
    } catch (error) {
      setAnswer('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 text-white bg-[#0f172a] min-h-screen">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'ask' && (
        <div className="space-y-6 mt-6">
          <CodeContextInput value={codeContext} onChange={(e) => setCodeContext(e.target.value)} />
          <CodeAnswerCard
            selectedPrompt={selectedPrompt}
            onPromptSelect={(label) => {
              setSelectedPrompt(label);
              setQuestion(`${label}: `);
            }}
            question={question}
            onQuestionChange={setQuestion}
            onAskAI={handleAskAI}
            loading={loading}
          />
        </div>
      )}

      {activeTab === 'results' && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">AI Response</h3>
          <pre className="bg-[#1e293b] p-4 rounded-md text-sm whitespace-pre-wrap">{answer}</pre>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="mt-6 text-gray-400">
          <p>No history yet.</p>
        </div>
      )}
    </div>
  );
};

export default DevCompanion;