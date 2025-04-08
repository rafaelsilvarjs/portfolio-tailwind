import React from "react";

export default function JavaScript() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-12">Projetos JavaScript</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Validador de CPF */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">🔍 Validador de CPF</h2>
          <div className="w-full max-w-xs bg-gray-900 p-4 rounded-lg shadow-inner">
            <h3 className="text-center text-lg font-semibold mb-3">Validador de CPF</h3>
            <input
              type="text"
              placeholder="Digite o CPF"
              className="w-full p-2 rounded text-black mb-3"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
              Validar
            </button>
          </div>
        </div>

        {/* Calculadora de IMC */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-md flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">⚖️ Calculadora de IMC</h2>
          <div className="w-full max-w-xs bg-gray-900 p-4 rounded-lg shadow-inner">
            <h3 className="text-center text-lg font-semibold mb-3">Calculadora de IMC</h3>
            <input
              type="number"
              placeholder="Peso (kg)"
              className="w-full p-2 rounded text-black mb-3"
            />
            <input
              type="number"
              placeholder="Altura (m)"
              className="w-full p-2 rounded text-black mb-3"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
              Calcular
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





