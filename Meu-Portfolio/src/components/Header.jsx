import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0f1120] shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src="/GF.svg" alt="logo" className="w-14 h-14" />

        <button className="text-gray-500 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={32} /> : <FiMenu size={32} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-serif text-gray-500 text-lg">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projetos</a></li>
            <li><a href="#about" className="hover:text-blue-500">Sobre mim</a></li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#0f1120] shadow-md">
          <ul className="flex flex-col space-y-4 font-serif text-gray-500 text-lg p-6">
            <li><a href="#home" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projetos</a></li>
            <li><a href="#about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Sobre mim</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

