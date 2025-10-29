import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Assistente() {
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (listening) {
      const t = setTimeout(() => {
        setListening(false);
        alert("Áudio processado (simulado)");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [listening]);

  return (
    <main className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4 min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm text-center">
        <section className="flex items-center justify-center mb-4">
          <img
            src="https://img.icons8.com/ios-filled/50/user-female-circle.png"
            alt="AIDA avatar"
            className="w-12 h-12 mr-3"
          />
          <div>
            <h2 className="text-xl font-bold">AIDA</h2>
            <p className="text-sm text-gray-500">Assistente Inteligente de Digitalização</p>
          </div>
        </section>

        <div className="bg-gray-200 rounded-lg py-2 px-3 text-gray-700 mb-4">Como posso ajudar?</div>

        <div className="flex flex-col space-y-3 mb-6">
          <button onClick={() => navigate("/contato")} className="flex items-center justify-start bg-black text-white rounded-lg px-4 py-2">
            📅 Marcar consulta
          </button>
          <button className="flex items-center justify-start bg-black text-white rounded-lg px-4 py-2">
            📄 Ver resultados de exames
          </button>
          <button className="flex items-center justify-start bg-black text-white rounded-lg px-4 py-2">
            ✉️ Enviar mensagem para o médico
          </button>
          <button className="flex items-center justify-start bg-black text-white rounded-lg px-4 py-2">
            🎥 Falar com o médico
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setListening((s) => !s)}
            className={`rounded-full p-3 text-2xl ${listening ? "bg-red-500 text-white" : "bg-gray-200"}`}
            aria-pressed={listening}
            aria-label="Ativar microfone"
          >
            🎤
          </button>
        </div>
      </div>
    </main>
  );
}