import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0f1120] text-white py-4 flex justify-center ">
      <div className="container flex justify-center items-center w-full ">
        <p className="text-sm mr-4">
          Desenvolvido por: <span className="font-semibold">Gustavo Franco</span>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/gustavofranco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-200"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/gustavo-franco-da-silva-7708291b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-200"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
