import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png"

export default function Header(){
  return (
    <header>
      <div className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto flex items-center gap-4 p-4">
          <img src={logoImg} alt="logo" className="w-12 h-12" />
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
          </div>
        </div>
      </div>

      <nav className="bg-blue-700">
        <div className="max-w-6xl mx-auto">
          <ul className="flex justify-center gap-8 text-white  p-3">
            <li className="hover:text-blue-800"><Link to="/">Início</Link></li>
            <li className="hover:text-blue-800"><Link to="/integrantes">Integrantes</Link></li>
            <li className="hover:text-blue-800"><Link to="/faq">FAQ</Link></li>
            <li className="hover:text-blue-800"><Link to="/contato">Contato</Link></li>
            <li className="hover:text-blue-800"><Link to="/solucao">Solução</Link></li>
            <li className="hover:text-blue-800"><Link to="/sobre">Sobre</Link></li>
            <li className="hover:text-blue-800"><Link to="/assistente">Assistente</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

