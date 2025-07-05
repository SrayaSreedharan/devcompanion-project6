import React from 'react';
import Header from '../layout/Header';
import Tabs from '../layout/Tabs';
import CodeContextInput from '../CodeContext/CodeContextInput';
import CodeAnswerCard from '../components/CodeAnswerCard';

const Home = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        <Tabs />
        <CodeContextInput />
        <CodeAnswerCard />
      </div>
    </div>
  );
};

export default Home;
