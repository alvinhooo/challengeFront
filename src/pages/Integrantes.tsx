import { useNavigate } from "react-router-dom";
import CardIntegrante from "../components/CardIntegrantes";
import { integrantes } from "../data/IntegrantesData";


  

  export default function Integrantes(){

    const navigate = useNavigate();
    
  return (
    <main className="bg-gray-100 py-10 px-6 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">Equipe de Desenvolvimento</h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {integrantes.map((pessoa) => (
          <CardIntegrante
            key={pessoa.rm}
            integrante={pessoa}
            onClick={() => navigate(`/integrantes/${pessoa.rm}`)}
          />
        ))}
      </section>
    </main>
  )
}

