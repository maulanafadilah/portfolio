import { React, useState } from 'react';
import { close, menu } from '../assets';

const Navbar = () => {
  const navLinks = [
    {
      id: 'github',
      title: 'Github',
      link: 'https://github.com/maulanafadilah'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/maulanafadilah/'
    },
    {
      id: 'email',
      title: 'Email',
      link: 'mailto:maulanafadilah028@gmail.com'
    }
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-6">
      <h2 className="text-xl font-medium text-onSurface">© Code by Fadil</h2>
      <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
        {navLinks.map((nav, index) => (
          <li
            className={`font-medium cursor-pointer text-[16px] hover:text-primary text-onSurface ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            }`}
            key={nav.id}>
            <a href={nav.link} target="_blank">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-onSurface"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-4 bg-slate-200 bg-opacity-70 backdrop-blur-sm absolute top-16 mx-auto w-[calc(100%-3rem)] rounded-xl sidebar`}>
          <ul className="flex flex-col items-center justify-end flex-1 list-none">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] text-onSurface hover:bg-primary hover:bg-opacity-10 hover:text-primary w-full p-2 rounded-lg`}>
                <a href={nav.link} target="_blank">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
