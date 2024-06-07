import { IProjectCard } from "@/interfaces/project.interface";
import Image from "next/image";

const ProjectCard = ({ project }: IProjectCard) => {

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
          return text.slice(0, maxLength) + '...';
        }
        return text;
      };


  return (
    <li key={project.id} className="shadow-custom rounded-lg bg-white">
      <Image
        src={project.image}
        alt="Image do projeto"
        className="rounded-t-lg border-x-8 border-t-8 border-white"
      />
      <div className="px-4 flex flex-col gap-3 mt-4">
        <h4 className="uppercase font-bold text-lg">{project.title}</h4>
        <span>{project.responsive}</span>
        <p className="text-justify">{truncateText(project.description, 200)}</p>
        <a>Ver mais</a>
        <a href={project.github} target="_blank" className="mb-4">Acesse o Github do Projeto</a>
      </div>
    </li>
  );
};

export default ProjectCard;
