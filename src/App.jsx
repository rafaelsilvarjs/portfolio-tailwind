import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboards from "./pages/Dashboards";
import JavaScript from "./pages/JavaScript";
import Python from "./pages/Python";
import Contato from "./pages/Contato";
import CpfValidator from "./pages/CpfValidator";
import ImcCalculator from "./pages/ImcCalculator";
import ConversorMoeda from "./pages/ConversorMoeda";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 flex gap-4 justify-center flex-wrap shadow-md">
        <Link to="/" className="hover:text-blue-400 font-semibold">Início</Link>
        <Link to="/dashboards" className="hover:text-blue-400 font-semibold">Dashboards</Link>
        <Link to="/javascript" className="hover:text-blue-400 font-semibold">JavaScript</Link>
        <Link to="/python" className="hover:text-blue-400 font-semibold">Python</Link>
        <Link to="/contato" className="hover:text-blue-400 font-semibold">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/python" element={<Python />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/validador-cpf" element={<CpfValidator />} />
        <Route path="/imc" element={<ImcCalculator />} />
        <Route path="/conversor-moeda" element={<ConversorMoeda />} />
      </Routes>
    </div>
  );
}








