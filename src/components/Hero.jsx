import React from 'react';
import { profile } from '../assets';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse items-center justify-between w-full space-y-reverse lg:flex-row space-y-7 lg:space-y-0">
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-xl font-bold leading-normal text-center lg:text-left lg:text-5xl text-pretty font-merriweather text-onSurface">
          Developer who falling in ❤️ with <span className="italic">Material You</span>{' '}
          <sup className="text-sm lg:text-xl">[3]</sup>
        </h1>
        <p className="text-md text-center lg:text-left lg:w-[85%] lg:text-2xl font-medium text-onSurfaceVariant pt-3 lg:pt-7 text-pretty">
          Experience building products from UI/UX Design to Web Development.
        </p>
        <div className="flex items-center justify-center space-x-6 lg:justify-start pt-7 lg:pt-12">
          <a
            href="https://s.id/23FlQ"
            target="_blank"
            className="px-8 py-4 text-base font-semibold text-surface rounded-full bg-primary hover:bg-[#09573E]">
            Showcases
          </a>
          <a
            href="https://s.id/23Fmq"
            target="_blank"
            className="px-8 py-4 text-base font-semibold border-2 rounded-3xl text-primary border-primary hover:bg-primary hover:bg-opacity-10">
            Resume
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <img
          src={profile}
          alt="Maulana Fadilah"
          className="w-1/2 rounded-[56px] lg:rounded-[96px] lg:ml-14"
        />
      </div>
    </section>
  );
};

export default Hero;
