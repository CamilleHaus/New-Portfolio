import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const aboutMe = () => {
  return (
    <div className="w-full bg-primary bg-opacity-80 text-black">
      <div className="w-[70%] mx-auto max-w-[1450px] flex gap-20 py-14 max-md:flex-col text-tertiary">
        <div className="w-[25%] border-l border-tertiary pl-4">
          <h2 className="text-4xl uppercase font-bold">Sobre mim</h2>
          <div className="flex gap-2 text-3xl mt-4">
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaGithubSquare />
            </p>
          </div>
        </div>
        <p className="w-[75%] text-justify leading-8">
          Depois de 3 anos na indústria de Recrutamento de TI, onde tive meu
          primeiro contato com programação, resolvi fazer a transição de
          carreira. Desde então, comecei meu curso de FullStack na Kenzie
          Academy e venho me apaixonando pela área todos os dias.
          Tive a chance de participar por alguns meses de um projeto para um
          serviço de venda de Canvas e isso só me consolidou que eu fiz a escolha
          certa. Agora, procuro uma oportunidade onde poderei evoluir ainda mais
          e aplicar tudo que aprendi até agora.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
