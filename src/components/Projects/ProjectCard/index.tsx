import { IProjectCard } from "@/interfaces/project.interface";
import { useProject } from "@/providers/ProjectContext";
import { useState } from "react";

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  const { closeProjectModal } = useProject();

  return (
    <div className="px-4 flex flex-col gap-3 mt-4">
      <h4 className="uppercase font-bold text-lg">{project.title}</h4>
      <span>{project.responsive ? "Responsivo" : "Não responsivo"}</span>
      <p className="text-justify">{project.description}</p>
      <a>Ver mais</a>
      <a href={project.github} target="_blank" className="mb-4">
        Acesse o Github do Projeto
      </a>
      <button onClick={() => closeProjectModal()}>X</button>
    </div>
  );
};

export default ProjectCard;
