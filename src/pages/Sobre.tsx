import fachadaImg from "../assets/hospital.webp"
import fotoImg from "../assets/hospital.jpg"
import Foto2Img from "../assets/hospital.jpeg"

export default function Sobre(){
  return (
    <main className="bg-gray-100 py-10 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-blue-700">Hospital das Clínicas</h1>
          <p className="text-gray-600">Um Pouco Sobre Nós</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">História e Tradição</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O Hospital das Clínicas possui uma trajetória marcada pela excelência no cuidado à saúde e pela inovação em práticas médicas. Ao longo dos anos, consolidou-se como referência nacional e internacional, unindo tradição, tecnologia e compromisso com a vida. Sua história reflete dedicação à comunidade e constante evolução para atender às necessidades da população com qualidade e humanização.
          </p>
          <img src={fachadaImg} alt="Fachada" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Missão, Visão e Valores</h2>
          <p className="text-gray-700 leading-relaxed">
            Missão: Oferecer atendimento de saúde de alta qualidade, com foco na humanização e na inovação científica.
            Visão: Ser reconhecido como um centro de referência em saúde, ensino e pesquisa, contribuindo para o avanço da medicina e para o bem-estar da sociedade.
            Valores: Ética, respeito, inclusão, compromisso com a vida, excelência profissional e responsabilidade social.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Atendimento e Especialidades</h2>
          <p className="text-gray-700 leading-relaxed mb-4">O Hospital das Clínicas disponibiliza uma ampla gama de especialidades médicas, garantindo atendimento integral e especializado. Entre as áreas de destaque estão: clínica médica, cirurgia, pediatria, ginecologia, ortopedia, cardiologia, neurologia, oncologia, entre muitas outras. Essa diversidade permite oferecer cuidados completos e personalizados, sempre com suporte de equipes qualificadas e infraestrutura moderna.</p>
          <img src={fotoImg} alt="Equipe" className="w-full rounded-lg shadow-md" />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Pesquisa e Ensino</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Além de centro de atendimento, o Hospital das Clínicas também desempenha papel fundamental na formação acadêmica e na produção científica. Como hospital universitário, integra-se às principais universidades do país, promovendo ensino de qualidade, desenvolvimento de pesquisas inovadoras e disseminação de conhecimento. Essa integração fortalece o compromisso com a ciência e com a constante melhoria dos serviços de saúde oferecidos à população.</p>
          <img src={Foto2Img} alt="Pesquisa" className="w-full rounded-lg shadow-md" />
        </section>
      </div>
    </main>
  )
}

