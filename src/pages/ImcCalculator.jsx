import { useState } from "react";

export default function ImcCalculator() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);

    if (!pesoFloat || !alturaFloat || alturaFloat === 0) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }

    const imc = pesoFloat / (alturaFloat * alturaFloat);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso ideal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau I";
    else if (imc < 40) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III";

    setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Calculadora de IMC</h1>
      <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="p-2 text-black mb-2 rounded"
      />
      <input
        type="number"
        step="0.01"
        placeholder="Altura (m)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        className="p-2 text-black mb-2 rounded"
      />
      <button
        onClick={calcularIMC}
        className="bg-blue-600 px-4 py-2 rounded text-white"
      >
        Calcular
      </button>
      <p className="mt-4 text-lg font-medium">{resultado}</p>
    </div>
  );
}


