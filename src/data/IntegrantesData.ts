import vitorImg from '../assets/vitor.jpg';
import alvaroImg from '../assets/alvaro.jpg';
import rafaelImg from '../assets/rafael.jpg';


export interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
  descricao?: string;
}

export const integrantes: Integrante[] = [
  {
    nome: "Victor Viana Carneiro",
    rm: "565537",
    turma: "1TDSPI",
    github: "https://github.com/vderoldo7",
    linkedin: "https://www.linkedin.com/in/vitor-deroldo-7ab140360",
    foto: vitorImg,
    descricao: "Desenvolvedor front-end"
  },
  {
    nome: "Alvaro Freitas Miranda",
    rm: "565364",
    turma: "1TDSPI",
    github: "https://github.com/alvinhooo",
    linkedin: "https://www.linkedin.com/in/alvaro-miranda",
    foto: alvaroImg,
    descricao: "UX / Research"
  },
  {
    nome: "Rafael Pascotte",
    rm: "564928",
    turma: "1TDSPI",
    github: "https://github.com/RPascotte15",
    linkedin: "https://www.linkedin.com/in/rafael-pascotte-mercadante",
    foto: rafaelImg,
    descricao: "Back-end / Integrações"
  },
];