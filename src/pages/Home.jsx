import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Bem-vindo ao portfólio de Rafael Silva
      </h1>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Português
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
          English
        </button>
      </div>

      <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
        <video autoPlay muted controls className="w-full h-full object-cover">
          <source src="/videos/iui_apresentacao_pt.mp4" type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      </div>

      <p className="text-lg text-center text-gray-300">
        Escolha uma aplicação acima para testar.
      </p>
    </div>
  );
}

export default Home;
