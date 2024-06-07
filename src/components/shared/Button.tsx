import { FaFileDownload } from "react-icons/fa";

const button = () => {
  return (
    <button className="py-2 px-12 border-2 border-primary uppercase font-bold text-primary flex items-center gap-2">
      <FaFileDownload /> Baixe meu currículo!
    </button>
  );
};

export default button;
