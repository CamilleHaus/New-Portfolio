"use client";

import { projects } from "../../data/projects.js";
import ProjectCard from "@/components/Projects/ProjectCard/index";
import { useProject } from "@/providers/ProjectContext/index";
import Image from "next/image.js";

const Projects: React.FC = () => {
  const { isOpen, selectedProject, openProjectModal } = useProject();

  return (
    <div className="w-full bg-tertiary max-md:bg-none ">
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col">
        <h3 className="text-3xl py-4 mt-16 mb-8 font-bold uppercase text-primary border-b border-primary">Meus projetos</h3>
        <div>
          <ul className="grid grid-cols-2 gap-6 mb-24 max-md:grid-cols-1">
            {projects.map((project) => (
              <li
                key={project.id}
                className="shadow-custom bg-primary bg-opacity-80"
              >
                <Image
                  src={project.image}
                  alt="Image do projeto"
                  className="rounded-t-lg px-8 pt-12 pb-6"
                />
                <div className="flex justify-between text-white uppercase px-8 pb-6 font-bold">
                  <h6 className="text-lg">{project.title}</h6>
                  <button onClick={() => openProjectModal(project)}>
                    Ver mais
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {isOpen && selectedProject && <ProjectCard project={selectedProject} />}
      </div>
    </div>
  );
};

export default Projects;
