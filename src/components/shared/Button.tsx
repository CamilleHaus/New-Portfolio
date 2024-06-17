import { IoMdArrowDropright } from "react-icons/io";

const button = () => {
  return (
    <div className="flex uppercase py-2 px-12 border-2 border-primary uppercase font-bold text-primary gap-2 max-sm:text-sm max-sm:px-6">
      <p className="flex items-center">
        Download my CV <IoMdArrowDropright />
      </p>
      <div className="flex gap-2 max-sm:items-center">
        <a
          href="/currículoPortugues.pdf"
          target="_blank"
          className="hover:border-b hover:border-primary"
        >
          PT
        </a>
        <span>/</span>
        <a
          href="/currículoIngles.pdf"
          target="_blank"
          className="hover:border-b hover:border-primary"
        >
          EN
        </a>
      </div>
    </div>
  );
};

export default button;
