import Button from "./Button";

const navBar = () => {
  const links = ["Sobre mim", "Projetos", "Contato"];
  return (
    <nav className="w-full bg-tertiary py-4">
      <div  className="w-[70%] mx-auto max-w-[1450px] flex gap-20 justify-end max-md:hidden">
        <ul className="flex gap-10 items-center uppercase font-bold text-primary text-lg">
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
        <Button />
      </div>
    </nav>
  );
};

export default navBar;
