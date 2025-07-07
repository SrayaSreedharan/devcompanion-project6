import React from 'react';
import DevCompanion from '../components/DevCompanion';

const Home = () => {
  return (

    <div className="min-h-screen bg-[#0f172a] text-white">
      <header className="p-4 text-center border-b border-gray-700">
        <h1 className="text-3xl font-bold">\uD83D\uDCA1 Dev Companion</h1>
        <p className="text-sm text-gray-400">Your AI-powered Stack Overflow assistant</p>
      </header>
      <main className="mt-4">
        <DevCompanion />
      </main>
    </div>
  );
};
  

export default Home;
