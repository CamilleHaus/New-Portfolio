import Link from "next/link";
import { projects } from "../../data/projects.js";
import ProjectCard from "@/components/Projects/ProjectCard/page";

const Projects = () => {
  return (
    <div className="w-full bg-projects bg-cover max-md:bg-none ">
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col items-center">
        <h3 className="text-5xl py-4 mt-16 mb-8 font-bold">Meus projetos</h3>
        <div>
          <ul className="grid grid-cols-3 gap-6 mb-8 max-md:grid-cols-1">
            {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
