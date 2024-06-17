import Image from "next/image";
import Button from "../shared/Button";

const banner = () => {
  return (
    <section className="w-full bg-wave bg-cover">
      <div className="w-[70%] mx-auto max-w-[1450px] flex gap-20 py-10 max-sm:w-[80%] max-md:w-[85%] max-2md:w-[80%]">
        <div className="mt-10 flex flex-col gap-10 py-4 items-start text-primary">
          <h1 className="text-6xl font-bold max-sm:text-5xl max-sm:leading-16">Bem-vindo ao meu Portfólio!</h1>
          <p className="text-xl max-sm:text-base">
            Uma desenvolvedora em formação em busca de uma oportunidade no
            mercado de trabalho. Neste portfólio, apresento meus projetos e
            compartilho um pouco sobre minha trajetória.
          </p>
          <Button />
        </div>
        <img
          src={"/file.png"}
          alt="Image de Perfil"
          width={450}
          height={450}
          className="max-md:hidden max-2md:hidden"
        />
      </div>
    </section>
  );
};

export default banner;
