import React from 'react';
import Header from '../layout/Header';
import Tabs from '../layout/Tabs';
import CodeContextInput from '../CodeContext/CodeContextInput';
import CodeAnswerCard from '../components/CodeAnswerCard';

const Home = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white px-4 py-8 space-y-10">
      <Header/>
      <Tabs/>
      <CodeContextInput/>
      <CodeAnswerCard/>
    </div>
  );
};

export default Home;
