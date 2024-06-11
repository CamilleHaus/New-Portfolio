import { RiTailwindCssFill } from "react-icons/ri";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Tecnologies = () => {
  const icons = [
    { Icon: RiTailwindCssFill, color: "#FFFFFF", name: "Tailwind" },
    { Icon: FaCss3Alt, color: "#FFFFFF", name: "CSS" },
    { Icon: FaHtml5, color: "#FFFFFF", name: "HTML" },
    { Icon: FaReact, color: "#FFFFFF", name: "React" },
    { Icon: IoLogoJavascript, color: "#FFFFFF", name: "JavaScript" },
    { Icon: FaNodeJs, color: "#FFFFFF", name: "NodeJS" },
    { Icon: FaAngular, color: "#FFFFFF", name: "Angular" },
    { Icon: SiPrisma, color: "#FFFFFF", name: "Prisma" },
    { Icon: BiLogoPostgresql, color: "#FFFFFF", name: "Postgres" },
  ];

  return (
    <div className="w-full bg-tertiary py-10">
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col pt-10 max-sm:w-[80%] max-md:w-[85%]">
        <h4 className="text-3xl font-bold mb-8 uppercase text-primary border-b border-primary py-4">
          Meus conhecimentos
        </h4>
        <ul className="grid gap-8 grid-cols-5 max-md:flex max-md:overflow-x-auto max-md:flex-nowrap">
          {icons.map((icon, index) => (
            <div className="bg-primary bg-opacity-80 shadow-sm shadow-primary text-white gap-2 flex flex-col items-center p-2">
              <li key={index} className="p-4 border-2 mt-2 max-md:p-2">
                <icon.Icon className="text-9xl" />
              </li>
              <p className="w-[100%] text-center pb-2 font-bold uppercase">{icon.name}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;
