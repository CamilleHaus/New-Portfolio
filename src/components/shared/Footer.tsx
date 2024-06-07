import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary">
      <div className="w-[70%] mx-auto max-w-[1450px] flex justify-between items-center py-6 text-white">
        <h5 className="text-xl font-bold">Camille Haus</h5>
        <div className="flex flex-col gap-2">
          <div className="flex gap-6 justify-end text-xl">
            <p><FaLinkedin /></p>
            <p><FaGithubSquare /></p>
          </div>
          <p>Email: camille_haus@hotmail.com</p>
        </div>
      </div>
      <div className="bg-tertiary text-center py-1 text-primary">&copy;Todos os direitos reservados</div>
    </footer>
  );
};

export default Footer;
