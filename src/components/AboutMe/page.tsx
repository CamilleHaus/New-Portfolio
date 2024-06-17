import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const aboutMe = () => {
  return (
    <div
      className="w-full bg-primary bg-opacity-80 text-black"
      id="aboutMeSection"
    >
      <div
        className="w-[70%] mx-auto max-w-[1450px] flex gap-20 py-14 max-md:flex-col text-tertiary 
      max-sm:w-[80%] max-sm:gap-10 max-md:w-[85%] max-md:gap-10 max-2md:w-[80%]"
      >
        <div className="w-[25%] border-l border-tertiary pl-4 max-sm:w-[85%] max-md:w-[100%]">
          <h2 className="text-4xl uppercase font-bold">Sobre mim</h2>
          <div className="flex gap-2 text-3xl mt-4">
            <a href="https://www.linkedin.com/in/camillehaus/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/CamilleHaus" target="_blank">
              <FaGithubSquare />
            </a>
          </div>
        </div>
        <p className="w-[75%] text-justify leading-8 max-sm:w-[100%] max-md:text-lg max-md:w-[100%] max-sm:text-base">
          Após três anos de experiência na indústria de Recrutamento de TI, onde
          tive meu primeiro contato com programação, decidi fazer a transição de
          carreira. Desde então, iniciei meu curso de FullStack na Kenzie
          Academy e desenvolvi uma verdadeira paixão pela área. Durante esse
          período, tive a oportunidade de participar de um projeto voltado para
          um serviço de venda de Canvas, o que reforçou minha convicção de que
          escolhi o caminho certo. Agora, estou em busca de uma oportunidade que
          me permita continuar evoluindo e aplicar todo o conhecimento adquirido
          até o momento.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
