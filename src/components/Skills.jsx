import React from "react";
import { skills } from "../assets/Data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-indigo-200" id="skills">
      <div className="text-center border-b border-gray-300 pb-6 mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-800 text-left tracking-wide">
          Tech Stack
        </h2>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
