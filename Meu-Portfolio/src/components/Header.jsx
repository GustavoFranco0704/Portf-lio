function Header() {
  return (
    <header className="bg-[#0f1120] shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img
            src="/GF.svg"
            alt="logo"
            className="w-14 h-14"
        />
        <nav>
          <ul className="flex space-x-8 font-serif text-gray-500 text-lg">
            <li>
              <a href="#home" className="hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500">Projetos</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500">Sobre mim</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
  
}

export default Header