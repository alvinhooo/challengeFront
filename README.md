Hospital das Clínicas - InovaCare
Um sistema moderno e intuitivo para agendamento de consultas e exames médicos, desenvolvido com React, TypeScript e Tailwind CSS.

📋 Sobre o Projeto

O Hospital das Clínicas é uma plataforma web desenvolvida para facilitar o agendamento de consultas médicas e exames laboratoriais. O sistema oferece uma interface moderna, intuitiva e totalmente responsiva, proporcionando uma experiência excepcional aos usuários.

👥 Equipe
Desenvolvedores

Álvaro Freitas Miranda - Desenvolvedor Front End
GitHub: @alvinhooo
LinkedIn: Álvaro Freitas Miranda

Vitor Viana Carneiro Deroldo - Desenvolvedor Back End
GitHub: @vderoldo7
LinkedIn: Vitor Deroldo

Rafael Pascotte Mercadante - Desenvolvedor Back End
GitHub: @RPascotte15
LinkedIn: Rafael Pascotte Mercadante

Instituição

FIAP - Faculdade de Informática e Administração Paulista
Curso: Tecnologia em Desenvolvimento de Sistemas para Internet
Equipe: InovaCare - Turma: 1TDSPI

📼 Vídeo de apresentação:
https://youtu.be/RLw0At3wVt8


Link do github:
https://github.com/Challenge-Fiap-2025/SprintFront04.git


URL do deploy no VERCEL:
https://challenge-front-delta.vercel.app/

🎯 Objetivos

Facilitar o agendamento de consultas e exames
Oferecer uma interface moderna e acessível
Demonstrar boas práticas de desenvolvimento React
Implementar autenticação e rotas protegidas
Utilizar componentes reutilizáveis com props

✨ Funcionalidades



🩺 Agendamentos

Consultas médicas por especialidade
Exames laboratoriais
Busca e filtros avançados
Modal com detalhes das especialidades

🎨 Interface

Design moderno com Tailwind CSS
Animações suaves e micro-interações
Efeitos glassmorphism
Tema azul e branco
Totalmente responsivo

⚡ Funcionalidades Avançadas

Componentes reutilizáveis
Hooks customizados
Validação de formulários

🛠 Tecnologias Utilizadas

Frontend
React 19+ - Biblioteca JavaScript para interfaces
TypeScript - Tipagem estática para JavaScript
Tailwind CSS - Framework CSS utilitário
React Router DOM - Roteamento para SPAs
React Icons - Biblioteca de ícones
Ferramentas de Desenvolvimento
Vite - Build tool e dev server
ESLint - Linter para JavaScript/TypeScript

📁 Estrutura do Projeto
src/
├── assets/                # imagens e ícones do projeto
│   ├── alvaro.jpg
│   ├── hops.jpg
│   ├── hospital.jpeg
│   ├── hospital.jpg
│   ├── hospital.webp
│   ├── logo.png
│   ├── rafael.jpg
│   ├── react.svg
│   └── vitor.jpg
│
├── components/            # componentes reutilizáveis
│   ├── CardIntegrantes.tsx
│   ├── Footer.tsx
│   └── Header.tsx
│
├── data/                  # arquivos de dados
│   └── IntegrantesData.ts
│
├── pages/                 # páginas principais
│   ├── Assistente.tsx
│   ├── ContatoForm.tsx
│   ├── Faq.tsx
│   ├── Home.tsx
│   ├── IntegranteDetail.tsx
│   ├── Integrantes.tsx
│   ├── Sobre.tsx
│   └── Solucao.tsx
│
├── routes/                # configuração das rotas
│   └── AppRoutes.tsx
|
|                          # conexão com a API
├── services/
|    └── Api.ts
|
├── types/
|    └── ApiTypes.ts
│
|
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts


🚀 Como Executar

Pré-requisitos
Node.js 18+
npm ou yarn
Instalação
Clone o repositório
git clone https://github.com/Challenge-Fiap-2025/Challenge_frontend2
cd Challenge_frontend2
Instale as dependências
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
npm install react-icons
Execute o projeto
npm run dev
Acesse no navegador
http://localhost:5173
Scripts Disponíveis
npm run dev      # Inicia o servidor de desenvolvimento


🎨 Conceitos Implementados

🪝 Hooks
useState - Gerenciamento de estado local
useEffect - Efeitos colaterais e ciclo de vida
useNavigate - Navegação programática
useParams - Acessa os parâmetros dinâmicos da URL, permitindo obter valores como IDs ou slugs de rotas.
Hooks Customizados - useForm, useLocalStorage, useAuth

🔧 Props

Tipagem com TypeScript - Interfaces para props
Props opcionais - Valores padrão
Props condicionais - Renderização condicional
Event handlers - Funções como props
Children props - Composição de componentes

🛣 Rotas

BrowserRouter - Roteamento principal
Routes & Route - Definição de rotas
NavLink - Links com estado ativo
Rotas protegidas - Controle de acesso
Navegação programática - useNavigate
Estado de navegação - Passagem de dados entre rotas

📱 Funcionalidades por Página

🏠 Home
Hero section com animações
Apresentação dos serviços
Estatísticas do hospital
Localização com mapa integrado

🔐 Login/Cadastro

Formulários com validação
Autenticação simulada
Persistência de credenciais
Redirecionamento inteligente

📞 Contato

Formulário de contato
Informações do hospital
Mapa de localização
Múltiplos canais de comunicação

🎯 Destaques Técnicos

Arquitetura
Componentização - Componentes reutilizáveis
Separação de responsabilidades - Hooks, contexts, utils
Tipagem forte - TypeScript em todo o projeto
Padrões modernos - Hooks, Custom Hooks
Performance
Lazy loading - Carregamento otimizado
Memoização - useCallback para otimização
Bundle splitting - Vite para builds otimizados
UX/UI
Design responsivo - Mobile-first
Animações suaves - Transições CSS
Feedback visual - Estados de loading e erro
Acessibilidade - Boas práticas

📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Tecnologia em Desenvolvimento de Sistemas para Internet da FIAP.
Desenvolvido com ❤ para a saúde

[🏥 Hospital das Clínicas] | [📧 Contato] | [📱 (11) 2661-0000]




