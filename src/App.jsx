import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-surface bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(180,248,227,.5)_100%)]"></div>

      <div className="container flex flex-col justify-between w-full h-full mx-auto">
        <div className="z-50 flex items-center justify-center w-full px-6 sm:px-16">
          <Navbar />
        </div>

        <div className="flex items-start justify-center w-full px-6 sm:px-16">
          <Hero />
        </div>

        <div className="flex items-center justify-center w`-full px-6 sm:px-16">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default App;
