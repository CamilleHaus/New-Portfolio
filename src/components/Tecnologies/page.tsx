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
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col">
        <h4 className="text-5xl font-bold mb-8 text-center">
          Meus conhecimentos
        </h4>
        <ul className="grid gap-8 grid-cols-5 max-md:grid-cols-2 max-md:overflow-hidden">
          {icons.map((icon, index) => (
            <div className="bg-primary bg-opacity-80 shadow-md shadow-primary text-white rounded gap-2 flex flex-col items-center">
              <li key={index} className="p-4 border-2 mt-2 max-md:p-0">
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
