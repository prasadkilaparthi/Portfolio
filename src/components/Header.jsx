import React from "react";
import { Links } from "../assets/Data";

const Header = () => {
  return (
    <nav className="bg-indigo-200 text-white-200 sticky top-0 shadow-lg">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Branding Section */}
        <h2 className="text-3xl font-bold text-center sm:text-left">
          <span className="block text-indigo-600 motion-preset-typewriter-[12] motion-duration-1500">
            Durga Prasad
          </span>
          <span className="block text-cyan-600 text-xl motion-preset-typewriter-[20] motion-duration-1500 sm:text-2xl">
            Full-Stack Developer
          </span>
          <span>
          </span>
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center mt-4 sm:mt-0 gap-x-6 gap-y-4">
          {Links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="text-lg sm:text-xl font-medium tracking-wide hover:text-indigo-600 duration-300 relative group"
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
