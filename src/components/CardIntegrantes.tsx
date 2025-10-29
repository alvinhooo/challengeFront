import type { Integrante } from "../data/IntegrantesData";

interface CardProps {
  integrante: Integrante;
  onClick?: () => void;
}

export default function CardIntegrante({ integrante, onClick }: CardProps) {
  return (
    <article
      className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transition hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img
        src={integrante.foto}
        alt={`Foto de ${integrante.nome}`}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-lg">{integrante.nome}</h3>
      <p className="text-gray-600">
        RM: {integrante.rm} | Turma: {integrante.turma}
      </p>
      <p className="mt-2">
        <a
          href={integrante.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href={integrante.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </article>
  );
}
