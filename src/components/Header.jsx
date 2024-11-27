import React from "react";
import { Links } from "../assets/Data";

const Header = () => {
  return (
    <nav className="bg-indigo-200">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-4xl font-bold sm:text-left">
          <span className="block text-indigo-600">Durga Prasad</span>
          <span className="block text-cyan-600 text-2xl">
            Full-Stack developer
          </span>
        </h2>
        <div className="flex justify-center mt-4 sm:mt-0 gap-x-8">
          {Links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="text-2xl font-bold tracking-wide hover:text-indigo-600 duration-300 relative group"
              >
                {text}
                <span className="block h-1 bg-indigo-600 scale-x-0 group-hover:scale-x-100 duration-300 origin-left"></span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
