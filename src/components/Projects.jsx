import { projects } from "../assets/Data";
import ProjectsCard from "../components/ProjectCard";
const Projects = () => {
  return (
    <section className="py-20 align-element bg-indigo-200" id="projects">
      <h2 className="text-3xl font-semi-bold text-gray-900">Projects</h2>
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
