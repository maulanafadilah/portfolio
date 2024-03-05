import React from 'react';
import {
  laravel,
  reactLogo,
  tailwind,
  mysql,
  github,
  figma,
  viteLogo,
  illustrator
} from '../assets';
import Marquee from 'react-fast-marquee';

const Skills = () => {
  const skills = [
    {
      id: 'laravel',
      icon: laravel
    },
    {
      id: 'react',
      icon: reactLogo
    },
    {
      id: 'vite',
      icon: viteLogo
    },
    {
      id: 'tailwind',
      icon: tailwind
    },
    {
      id: 'mysql',
      icon: mysql
    },
    {
      id: 'github',
      icon: github
    },
    {
      id: 'figma',
      icon: figma
    },
    {
      id: 'illustrator',
      icon: illustrator
    }
  ];

  return (
    <section id="skills" className="w-full py-12">
      <Marquee pauseOnHover speed={75}>
        {skills.map((skill, index) => (
          <img
            src={skill.icon}
            alt={skill.id}
            key={skill.id}
            className="h-10 mr-16 lg:h-12 lg:mr-36"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
