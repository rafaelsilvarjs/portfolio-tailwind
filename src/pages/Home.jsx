import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-10">
      
      {/* Conteúdo esquerdo */}
      <div className="md:w-1/2 space-y-4">
        <p className="text-sm text-blue-400">Hello World! Meu nome é</p>
        <h1 className="text-4xl md:text-5xl font-bold">Rafael Silva</h1>
        <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold">
          Analista de Dados Sênior e Full Stack Developer
        </h2>
        <p className="text-lg text-gray-300">
          Transformo dados em insights e aplicações web modernas. Tenho
          experiência sólida em Power BI, Python, JavaScript, HTML, CSS, SQL e
          MongoDB. Especialista em ETL, dashboards e soluções visuais integradas
          com OutSystems e Looker Studio.
        </p>

        {/* Botões */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://wa.me/5511978836877"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow transition"
          >
            Contate-me
          </a>
          <a
            href="https://github.com/rafaelsilvarjs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rafael-silva-9b6525229"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Vídeo do Robô IUI à direita */}
      <div className="md:w-1/2 flex justify-center">
        <video
          src="/videos/iui_apresentacao_pt.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-[36rem] h-72 rounded-lg shadow-lg object-cover"
        ></video>
      </div>
    </div>
  );
}








