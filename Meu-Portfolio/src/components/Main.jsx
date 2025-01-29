import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "./Button";

function Main() {
  return (
    <main id="#home" className=" min-h-screen  pt-24 pb-12 bg-[#090e16] flex justify-items-center">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 ">
        <div className="flex-1 flex justify-center gap-8 ">
          <img
            src="/imagem.jpg"
            alt="Foto do desenvolvedor"
            className="w-66 h-66 rounded-full shadow-lg object-cover"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-serif font-extrabold mb-4 text-[#32245f] animate-bounce mt-10  ">
            Gustavo Franco
          </h2>
          <p className="text-gray-600 font-serif text-lg mb-4">
            Desenvolvedor Front-End
          </p>
          <div className="flex justify-center items-center gap-4 mb-10 lg:justify-start lg:items-start">
            <a
              href="https://github.com/gustavofranco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition duration-200"
            >
              <FaGithub size={40} className="bg-[#84868a] p-2 rounded-full"/>
            </a>
            <a
              href="https://linkedin.com/in/gustavo-franco-da-silva-7708291b9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition duration-200"

            >
              <FaLinkedin size={40} className="bg-[#84868a] p-2 rounded-full"/>
            </a>
          </div>
          <div>
            <Button/>
          </div>
          
        </div>
      </div>
    </main>
  );
}

export default Main;
