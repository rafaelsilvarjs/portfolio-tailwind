import React from "react";
import CpfValidator from "./CpfValidator";
import ImcCalculator from "./ImcCalculator";
import ConversorMoeda from "./ConversorMoeda";

export default function JavaScript() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-12 tracking-wide">
        Projetos em JavaScript
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Validador de CPF */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-[1.01] transition-transform">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
            🔍 Validador de CPF
          </h2>
          <div className="scale-90 origin-top">
            <CpfValidator />
          </div>
        </div>

        {/* Calculadora de IMC */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-[1.01] transition-transform">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
            ⚖️ Calculadora de IMC
          </h2>
          <div className="scale-90 origin-top">
            <ImcCalculator />
          </div>
        </div>

        {/* Conversor de Moeda */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-[1.01] transition-transform">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">
            💱 Conversor de Moeda
          </h2>
          <div className="scale-90 origin-top">
            <ConversorMoeda />
          </div>
        </div>
      </div>
    </div>
  );
}





