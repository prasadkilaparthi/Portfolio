import React from "react";
import aboutPic from "../assets/aboutpic.png";

const About = () => {
  return (
    <section className="py-20 bg-indigo-200" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutPic} />
        <article>
        <h2 className="text-3xl font-semi-bold text-gray-900">About Me</h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          I have <span className="font-semibold">1.8+ years of experience</span>{" "}
          in <span className="font-semibold">full-stack development</span>, with
          expertise in both <span className="font-semibold">frontend</span> and{" "}
          <span className="font-semibold">backend development</span>. My journey
          in technology has been centered around building dynamic and responsive
          applications using <span className="font-semibold">React</span>,
          creating user-friendly interfaces, and delivering seamless web
          experiences.
        </p>
        <p className="mt-4 text-gray-600 leading-relaxed">
          On the backend, I focus on building scalable and efficient server-side
          applications using <span className="font-semibold">.NET</span> and its
          robust ecosystem. I am actively enhancing my skills in designing
          RESTful APIs, implementing{" "}
          <span className="font-semibold">microservices architecture</span>, and
          optimizing backend performance to support modern and scalable web
          solutions.
        </p>
      </article>
      </div>
      
    </section>
  );
};

export default About;
