import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary">
      <div className="w-[70%] mx-auto max-w-[1450px] flex justify-between items-center pb-6 text-white max-sm:flex-col max-sm:gap-4">
        <div className="flex items-center gap-4 text-xl max-sm:pt-4">
          <h5 className="text-xl font-bold">Camille Haus</h5>
          <a href="https://www.linkedin.com/in/camillehaus/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/CamilleHaus" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
        <p>Email: camille_haus@hotmail.com</p>
        <p>&copy;Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
