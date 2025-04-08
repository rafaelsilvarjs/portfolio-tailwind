export default function CpfValidator() {
  const validarCPF = () => {
    const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
    const resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      resultado.innerText = "CPF inválido.";
      return;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let dig1 = (soma * 10) % 11;
    if (dig1 === 10) dig1 = 0;
    if (dig1 !== parseInt(cpf[9])) {
      resultado.innerText = "CPF inválido.";
      return;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    let dig2 = (soma * 10) % 11;
    if (dig2 === 10) dig2 = 0;
    resultado.innerText = dig2 !== parseInt(cpf[10]) ? "CPF inválido." : "✅ CPF válido!";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Validador de CPF</h1>
      <input id="cpf" className="p-2 text-black rounded mb-4" placeholder="Digite o CPF" />
      <button onClick={validarCPF} className="bg-blue-600 px-4 py-2 rounded text-white">Validar</button>
      <p id="resultado" className="mt-4 text-lg font-medium"></p>
    </div>
  );
}