import { FaFileDownload } from "react-icons/fa";

const button = () => {
  return (
    <button className="border-2 rounded-full py-3 px-4 flex items-center gap-2">
      <FaFileDownload /> Baixe meu currículo!
    </button>
  );
};

export default button;
