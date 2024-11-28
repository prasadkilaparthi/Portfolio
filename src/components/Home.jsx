import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import profile from "../assets/profilepic1.svg";

const Home = () => {
  return (
    <>
      <section className="bg-indigo-200 py-24 " id='home'>
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
          {/* Left Column: Text Content */}
          <article className="order-2 md:order-1">
            <h1 className="text-5xl sm:text-7xl font-bold text-indigo-800 hover:motion-preset-compress motion-duration-1000 cursor-pointer">
              I'm Prasad
            </h1>
            <p className="mt-4 text-xl sm:text-3xl text-gray-800 tracking-wide">
              Full stack developer
            </p>
            <p className="mt-2 text-md sm:text-lg text-gray-700 tracking-wide">
              I'm a passionate developer with a strong background in front-end
              development and back-end.
            </p>
            <div className="flex gap-6 mt-6">
              <a href="https://leetcode.com/u/prasad1016/">
                <SiLeetcode className="h-8 w-8 text-gray-600 hover:text-orange-400" />
              </a>
              <a href="https://www.linkedin.com/in/durga-prasad-kilaparthi-61a41b1b2/">
                <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-blue-600" />
              </a>
              <a href="https://github.com/prasadkilaparthi">
                <FaGithub className="h-8 w-8 text-gray-600 hover:text-black" />
              </a>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://drive.google.com/file/d/1EZlZZZI9OkoXNx1yHtZpWB21z9WLVg75/view?usp=drivesdk"
                className="bg-blue-500 text-white py-2 px-6 capitalize rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Open CV
              </a>
              <a
                href="https://drive.google.com/file/d/1EZlZZZI9OkoXNx1yHtZpWB21z9WLVg75/export?format=pdf"
                className="bg-blue-500 text-white py-2 px-6 capitalize rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Download CV
              </a>
            </div>
          </article>

          {/* Right Column: Image */}
          <article className="order-1  md:order-2">
            <img
              src={profile}
              className="h-80 lg:h-90 rounded-xl mx-auto md:mx-0"
              alt="Profile"
            />
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
