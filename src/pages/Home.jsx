import React from 'react';
import Header from '../layout/Header';
import DevCompanion from '../components/DevCompanion';
import Warningmessage from '../components/Warningmessage';

const Home = () => {
  return (
   <div className="bg-[#0F172A] min-h-screen text-white px-4 py-6">
      <Warningmessage/> 
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        <main className="mt-4">
        <DevCompanion />
      </main>
      </div>
    </div>
  );
};

export default Home;
