import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, Code, Database, ArrowDown } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowIcons(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-10 gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Lado esquerdo: texto e botões */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-blue-400">
          Rafael Silva
        </h1>
        <h2 className="text-xl md:text-2xl mb-4">
          <Typewriter
            options={{
              strings: [
                "Analista de Dados Sênior",
                "Full Stack Developer",
                "Especialista em Power BI e Python",
                "Criador de soluções digitais"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="max-w-xl mb-8 leading-relaxed">
          Tenho mais de 5 anos de experiência com análise de dados e desenvolvimento web. Crio soluções inteligentes utilizando Power BI, Python, HTML, CSS, e muito mais. Explore meus projetos!
        </p>

        <div className="flex gap-4 flex-wrap justify-center lg:justify-start mb-6">
          <Link
            to="/dashboards"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold shadow-md flex items-center gap-2 transition-transform hover:scale-105"
          >
            📊 Dashboards
          </Link>
          <Link
            to="/javascript"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold shadow-md flex items-center gap-2 transition-transform hover:scale-105"
          >
            💻 JavaScript
          </Link>
          <Link
            to="/python"
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-xl font-semibold shadow-md flex items-center gap-2 transition-transform hover:scale-105"
          >
            🐍 Python
          </Link>
        </div>

        {/* Redes sociais com delay e animação */}
        <div className="flex gap-4 justify-center lg:justify-start">
          {showIcons && (
            <>
              <motion.a
                href="https://wa.me/5511978836877"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                💬 Contate-me
              </motion.a>

              <motion.a
                href="https://github.com/rafaelsilvarjs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 px-5 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                🐙 GitHub
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/rafael-silva-9b6525229"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                💼 LinkedIn
              </motion.a>
            </>
          )}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 hidden lg:block mt-8"
        >
          <ArrowDown size={32} />
        </motion.div>
      </div>

      {/* Lado direito: foto profissional */}
      <div className="flex-1 flex justify-center">
        <img
          src="/images/perfil_real.jpg"
          alt="Foto de Rafael Silva"
          className="w-[350px] h-[430px] object-cover shadow-2xl border-4 border-blue-500"
        />
      </div>
    </motion.div>
  );
}

