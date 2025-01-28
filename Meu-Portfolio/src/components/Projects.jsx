function Projects() {
  return (
    <section id="projects" className="py-8 bg-gray-900  ">
      <div className="container w-full max-w-full px-6">
        
        <h3 className="text-4xl font-bold text-gray-400 text-center mt-8 mb-8 font-serif">
          Projetos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 justify-items-center mt-10 mb-10"  >
          <div className="group relative bg-gray-800  shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-80 p-6">
            <img
              src="/manutencao.jpg"
              alt="Projeto Previsão"
              className="w-full h-40 object-cover mt-10 rounded-lg shadow-md"
            />
            <div className="p-4 justify-items-center">
              <h4 className="text-xl font-bold text-white mb-2">Em execução</h4>
              <p className="text-gray-400 p-4 ">
                Sistema de cadastro com autenticação, RestApi e banco de dados nele vai ser possível se cadastrar e ver os usuários cadastrados.
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gray-800  shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-80 p-6">
            <img
              src="/previsao.png"
              alt="Projeto Surfbot"
              className="w-full h-40 object-cover mt-10 rounded-lg shadow-md" />
            <div className="p-4 justify-items-center">
              <h4 className="text-xl font-bold text-white mb-2">Previsão do tempo</h4>
              <p className="text-gray-400 p-4 ">
                Site de previsão do tempo, nele é possível realizar consultas sobre o tempo digitando a cidade, usei <span className="font-bold">React, Tailwind CSS</span>e conectado a uma <span className="font-bold">API</span>.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;