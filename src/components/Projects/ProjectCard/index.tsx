import { IProjectCard } from "@/interfaces/project.interface";
import { useProject } from "@/providers/ProjectContext";

const ProjectCard: React.FC<IProjectCard> = ({ project }) => {
  const { closeProjectModal } = useProject();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary bg-opacity-80 shadow-lg w-[600px] max-h-[615px] p-1 flex flex-col max-sm:w-[90%] max-sm:h-[500px]">
        <div className="border-2 border-primary h-[100%] p-8 bg-projects bg-cover flex flex-col justify-between gap-6 max-sm:overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between border-b border-primary border-opacity-20">
              <h4 className="uppercase font-bold text-2xl text-primary">{project.title}</h4>
              <button onClick={closeProjectModal} className="mb-4 text-primary">
                X
              </button>
            </div>
            <span className="uppercase">{project.responsive ? "Responsivo" : "Não responsivo"}</span>
            <p className="font-bold">{project.subtitle}</p>
            <p className="text-justify leading-7 max-md:pb-6 max-md:text-lg">{project.description}</p>
          </div>
          <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
            <a className="text-blue-500 text-primary" href={project.github} target="_blank">
              Acesse o Github do Projeto
            </a>
            <a className="text-primary" href={project.vercel} target="_blank">Teste aqui 🖥️</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
