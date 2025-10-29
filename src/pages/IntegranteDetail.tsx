import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { integrantes } from "../data/IntegrantesData";
import type { Integrante } from "../data/IntegrantesData";

export default function IntegranteDetail(){
  const { rm } = useParams<{ rm: string }>();
  const [pessoa, setPessoa] = useState<Integrante | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (rm) {
      const found = integrantes.find((i) => i.rm === rm);
      setPessoa(found ?? null);
    }
  }, [rm]);

  if (!pessoa) {
    return (
      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <p className="mb-4">Integrante não encontrado.</p>
          <button onClick={() => navigate("/integrantes")} className="bg-blue-600 text-white px-4 py-2 rounded">Voltar</button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 py-10 px-6 min-h-[80vh] flex items-start justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-3xl">
        <div className="flex gap-6">
          <img src={pessoa.foto} alt={pessoa.nome} className="w-48 h-48 object-cover rounded-lg" />
          <div>
            <h2 className="text-2xl font-semibold">{pessoa.nome}</h2>
            <p className="text-gray-600">RM: {pessoa.rm} | Turma: {pessoa.turma}</p>
            <p className="mt-4 text-gray-700">{pessoa.descricao}</p>
            <p className="mt-4">
              <a href={pessoa.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>{" "}
              |{" "}
              <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

