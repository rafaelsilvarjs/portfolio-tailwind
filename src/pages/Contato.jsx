import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contato() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8">Fale comigo</h1>

      <form
        className="w-full max-w-lg bg-gray-800 p-6 rounded-xl shadow space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block mb-1">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            placeholder="rafael.eng99@gmail.com"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1">Mensagem</label>
          <textarea
            placeholder="Escreva sua mensagem..."
            className="w-full px-4 py-2 rounded bg-gray-700 text-white h-32 resize-none focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Enviar
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-400">
        <p className="mb-2">Ou entre em contato diretamente:</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 justify-center">
            <FaEnvelope /> 
            <a href="mailto:rafael.eng99@gmail.com" className="text-blue-400 hover:underline">rafael.eng99@gmail.com</a>
          </li>
          <li className="flex items-center gap-2 justify-center">
            <FaWhatsapp />
            <a href="https://wa.me/5511978836877" target="_blank" className="text-blue-400 hover:underline">(11) 97883-6877</a>
          </li>
          <li className="flex items-center gap-2 justify-center">
            <FaLinkedin />
            <a href="https://linkedin.com/in/rafael-silva-9b6525229" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/rafael-silva-9b6525229</a>
          </li>
          <li className="flex items-center gap-2 justify-center">
            <FaGithub />
            <a href="https://github.com/rafaelsilvarjs" target="_blank" className="text-blue-400 hover:underline">github.com/rafaelsilvarjs</a>
          </li>
        </ul>
      </div>
    </div>
  );
}