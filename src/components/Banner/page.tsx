import Image from "next/image";
import Button from "../shared/Button";

const banner = () => {
  return (
    <section className="w-full bg-wave bg-cover">
      <div className="w-[70%] mx-auto max-w-[1450px] flex gap-20 py-10">
        <div className="mt-10 flex flex-col gap-10 py-4 items-start text-primary">
          <h1 className="text-6xl font-bold">Bem-vindo ao meu Portfólio!</h1>
          <p className="text-2xl">
            Uma desenvolvedora em formação buscando sua primeira oportunidade no
            mercado de trabalho
          </p>
          <Button />
        </div>
        <img
          src={"/assets/file.png"}
          alt="Image de Perfil"
          width={500}
          height={500}
          className="max-md:hidden"
        />
      </div>
    </section>
  );
};

export default banner;
