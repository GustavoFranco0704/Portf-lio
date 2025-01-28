function About() {
  return (
    <section
      id="about"
      className="py-36 bg-[#090e16] text-white flex justify-center items-center"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-center justify-between gap-8 ">
        
        <div className="flex-shrink-0 md:w-1/2 flex justify-center items-center md:justify-center ">
          <img
            src="/programando.jpg"
            alt="Gustavo Franco"
            className="w-60 h-60 md:w-60 md:h-60 object-cover rounded-full"
          />
        </div>

        
        <div className="md:w-1/2">
          <h1 className="text-4xl font-serif font-extrabold mb-4 text-[#32245f]">
            Sobre mim
          </h1>
          <p className="text-lg mb-4">Me chamo Gustavo Franco da Silva. Prazer!</p>
          <ul className="space-y-3 text-base list-disc list-inside">
            <li>
              💻 Há mais de 2 anos desenvolvendo e programando interfaces com
              JavaScript, React JS e Tailwind CSS.
            </li>
            <li>
              🎓 Graduando em Análise e Desenvolvimento de Sistemas pela INFNET.
            </li>
            <li>
              🚀 Conhecimento em desenvolvimento Front-end com React, Tailwind, React Native. Back-End com Node, Java, Python e Banco de dados SQL, Prisma e MongoDB.
            </li>
            <li>✨ Sempre em busca de conhecimento.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

