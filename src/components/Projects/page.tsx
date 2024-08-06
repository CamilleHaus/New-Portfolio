"use client";

import { projects } from "../../data/projects.js";
import ProjectCard from "@/components/Projects/ProjectCard/index";
import { useProject } from "@/providers/ProjectContext/index";
import Image from "next/image.js";
import Slider from "react-slick";
import { backendProjects } from "../../data/backendProjects.js";
import ProjectCardBE from "./ProjectCardBE/index";

const Projects: React.FC = () => {
  const {
    isOpen,
    selectedProject,
    openProjectModal,
    selectedBackendProject,
    openBEProjectModal,
    closeBEProjectModal,
  } = useProject();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-projects bg-cover" id="projectSection">
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col max-sm:w-[85%] max-md:w-[85%] max-2md:w-[80%] pb-44 max-md:pb-20">
        <h3 className="text-3xl py-4 mt-16 mb-8 font-bold uppercase text-primary border-b border-primary max-sm:text-2xl flex items-center justify-between">
          Meus projetos 
          <p className="text-sm">Número de projetos: {projects.length}</p>
        </h3>
        <div>
          <div>
          </div>
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <div className="shadow-custom bg-primary bg-opacity-80">
                  <Image
                    src={project.image}
                    alt="Image do projeto"
                    className="rounded-t-lg px-8 pt-12 pb-4 max-2md:pt-6 max-2md:px-4 max-sm:pb-2"
                  />
                  <div className="flex justify-between text-white uppercase px-8 pb-4 font-bold">
                    <h6 className="text-lg">{project.title}</h6>
                    <button onClick={() => openProjectModal(project)}>
                      Ver mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {isOpen && selectedProject && <ProjectCard project={selectedProject} />}

        {/* BACKEND ABAIXO */}

        <div>
          <h4 className="text-2xl py-4 mt-16 mb-8 font-bold uppercase text-primary border-b border-primary max-sm:text-2xl flex items-center justify-between">
            Backend
            <p className="text-sm">Número de projetos: {backendProjects.length}</p>
          </h4>
          <div>
            <Slider {...settings}>
              {backendProjects.map((backend) => (
                <div key={backend.id} className="px-4">
                  <div className="shadow-custom bg-primary bg-opacity-80">
                    <Image
                      src={backend.image}
                      alt="Image do projeto"
                      className="rounded-t-lg px-8 pt-12 pb-4 max-2md:pt-6 max-2md:px-4 max-sm:pb-2"
                    />
                    <div className="flex justify-between text-white uppercase px-8 pb-4 font-bold">
                      <h6 className="text-lg">{backend.title}</h6>
                      <button onClick={() => openBEProjectModal(backend)}>
                        Ver mais
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {isOpen && selectedBackendProject && (
            <ProjectCardBE backend={selectedBackendProject} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
