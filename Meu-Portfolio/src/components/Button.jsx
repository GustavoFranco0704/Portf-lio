import { FiDownload } from "react-icons/fi";
function Button() {
  return (
    <a
      href="/curriculo.pdf" 
      download="Curriculo_Gustavo_Franco.pdf" 
      className="inline-flex bg-[#32245f] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all "
    >
      Baixar Currículo
      <FiDownload className="ml-2" size={22} />
    </a>
  );
}

export default Button;
