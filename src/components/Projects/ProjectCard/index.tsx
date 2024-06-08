import { IProjectCard } from "@/interfaces/project.interface";
import { useProject } from "@/providers/ProjectContext";

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  const { closeProjectModal } = useProject();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg w-[600px] h-[500px] p-8 flex flex-col">
        <div className="flex justify-between">
          <h4 className="uppercase font-bold text-xl">{project.title}</h4>
          <button onClick={closeProjectModal} className="mb-4 text-red-500">
            X
          </button>
        </div>
        <span>{project.responsive ? "Responsivo" : "Não responsivo"}</span>
        <p className="text-justify">{project.description}</p>
        <a className="text-blue-500" href={project.github} target="_blank">
          Acesse o Github do Projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
