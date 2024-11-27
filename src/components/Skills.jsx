import React from "react";
import { skills } from "../assets/Data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="py-0 align-element bg-indigo-200" id="skills">
      <div className="border-b border-gray-200 pb-5">
        <h2 className="text-3xl font-medium tracking-wider">Tech Stack</h2>
      </div>
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
            <SkillCard key = {skill.id} {...skill}/>
        ))}
      </div>
    </section>
  );
};

export default Skills;
