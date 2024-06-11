import { IoMdArrowDropright } from "react-icons/io";
import Button from "./Button";

const navBar = () => {
  const links = ["Sobre mim", "Projetos", "Contato"];

  return (
    <nav className="w-full bg-tertiary py-4">
      <div className="w-[70%] mx-auto max-w-[1450px] flex gap-20 justify-end max-sm:w-[85%] max-md:w-[85%] max-md:justify-center">
        <ul className="flex gap-10 items-center uppercase font-bold text-primary text-lg">
          <li className="hover:border-b hover:border-primary">
            <a href="#aboutMeSection">Sobre mim</a>
          </li>
          <li className="hover:border-b hover:border-primary">
            <a href="#projectSection">Projetos</a>
          </li>
          <li className="hover:border-b hover:border-primary">
            <a href="#contactSection">Contato</a>
          </li>
        </ul>
       <div className="max-sm:hidden max-md:hidden">
        <Button />
       </div>
      </div>
    </nav>
  );
};

export default navBar;
