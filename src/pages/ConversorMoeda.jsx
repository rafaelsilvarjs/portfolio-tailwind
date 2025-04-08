import React, { useState, useEffect } from "react";

export default function ConversorMoeda() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("BRL");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!amount || isNaN(amount)) return;

    const fetchConversion = async () => {
      setError("");
      setResult(null);

      try {
        if (from === to) {
          setResult(amount);
          return;
        }

        const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error("Erro na resposta da API");

        const data = await response.json();
        setResult(data.rates[to]);
      } catch (err) {
        setError("Erro na conversão. Tente novamente.");
      }
    };

    fetchConversion();
  }, [amount, from, to]);

  return (
    <div className="min-h-[400px] p-4 bg-gray-800 rounded-xl text-white shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">
        💱 Conversor de Moeda
      </h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 rounded mb-4 text-black"
        placeholder="Valor"
      />

      <div className="flex gap-4 mb-4">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="flex-1 p-2 rounded text-black"
        >
          <option value="BRL">BRL</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="flex-1 p-2 rounded text-black"
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      {error && <p className="text-red-400 text-center">{error}</p>}

      {result && (
        <p className="text-center text-lg text-green-400">
          {amount} {from} = {result.toFixed(2)} {to}
        </p>
      )}
    </div>
  );
}








