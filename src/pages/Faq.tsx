
  const faqs = [
    { q: "Como acesso a rede local do hospital?", a: "Conecte-se ao Wi-Fi interno: HC-AcessoLocal e abra seu navegador." },
    { q: "Preciso de internet para usar?", a: "Não, o sistema funciona sem internet externa." },
    { q: "Preciso de um celular para me cadastrar?", a: "Não, o hospital disponibiliza computadores gratuitos para quem não tem dispositivo." },
    { q: "Quais serviços estão disponíveis no portal?", a: "Acessar resultados de exames, agendar consultas e visualizar orientações médicas básicas." },
    { q: "Qualquer pessoa pode acessar o sistema?", a: "Não. O acesso é restrito a pacientes e profissionais autorizados." },
    { q: "É possível agendar consultas pelo portal local?", a: "Sim, o sistema permite agendamento pela rede interna." },
    { q: "O portal está disponível 24 horas?", a: "Sim, o acesso ao portal local está disponível o tempo todo dentro da rede do hospital." },
    { q: "O sistema é seguro?", a: "Sim, todos os dados são protegidos por criptografia e monitorados pela equipe de TI." },
  ];
   

  export default function Faq(){
  return (
    <main className="bg-gray-100 py-10 px-6 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">Perguntas Frequentes</h2>
        <section className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i}>
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}