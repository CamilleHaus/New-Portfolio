import Image from "next/image";
import Button from "../shared/Button";

const banner = () => {
  return (
    <section className="w-full bg-primary text-white">
      <div className="w-[70%] mx-auto max-w-[1450px] flex gap-20">
        <div className="mt-10 flex flex-col gap-10 py-4 items-start">
          <h1 className="text-6xl font-bold">Bem-vindo ao meu Portfólio!</h1>
          <p className="text-2xl">
            Uma desenvolvedora em formação buscando sua primeira oportunidade no
            mercado de trabalho
          </p>
          <Button />
        </div>
        <img
          src={"/assets/foto.png"}
          alt="Image de Perfil"
          width={450}
          height={450}
          className="max-md:hidden"
        />
      </div>
    </section>
  );
};

export default banner;
