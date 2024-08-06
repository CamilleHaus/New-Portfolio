import TheBooks from "../../public/the-books.png";
import Kenziehub from "../../public/Kenziehub.png";
import ExploreX from "../../public/explore-X.png";
import ECommerce from "../../public/e-commerce.png";
import Planner from "../../public/planner.png";

export const projects = [
  {
    id: 0,
    image: ECommerce,
    title: "E-Commerce",
    responsive: true,
    subtitle: "Projeto de E-commerce de Camisas",
    description:
      "Projeto de E-commerce, utilizando tecnologias como Next, Tailwind, Auth.js e Stripe. Nele, foquei em aprender um pouco mais sobre o universo de vendas, como a estrutura desse tipo de aplicação funciona e como integramos os produtos e pagamentos. Mais informações no ReadMe do projeto, no link do Github",
    github: "https://github.com/CamilleHaus/e-commerce-project",
    vercel: null,
  },
  {
    id: 1,
    image: Planner,
    title: "Planner",
    responsive: false,
    subtitle: "Planner de Viagens",
    description:
      "Projeto realizado durante a trilha de React da NLW. Realizado em React, Tailwind e outras bibliotecas auxiliares. Nesse planner, é possível selecionar as datas da sua viagem, convidar acompanhantes, cadastrar as atividades, adiconar links relevantes e também há confirmação de participação através de email. Esse projeto ainda terá features adiconadas. Como alteração de data depois de confirmação de trip e renderização dinâmica de links. Para testagem completa, clone o projeto e seu backend que também est;a dísponivel nesse site",
    github: "https://github.com/CamilleHaus/Plann.er",
    vercel: null,
  },
  {
    id: 2,
    image: ExploreX,
    title: "ExploreX",
    responsive: true,
    subtitle: "Blog Interativo com Autenticação e Filtragem",
    description:
      "Neste projeto, foquei em aprimorar meu conhecimento em Tailwind e explorar novas ferramentas, como o Auth.js (anteriormente NextAuth). Durante o desenvolvimento, realizei a migração da versão 4 para a versão 5 do Auth.js, após a conclusão inicial do projeto. Este projeto é um blog onde os usuários podem criar suas próprias postagens, adicionar imagens, descrições e categorias. Além disso, é possível visualizar as postagens, o autor e a data de criação, bem como filtrar postagens com base na categoria. Utilizei o Prisma como ORM e o MongoDB como banco de dados principal. Para renderizar o carrossel de projetos, utilizei a biblioteca React Slick. Planejo futuras melhorias, incluindo a integração do NodeMailer para tornar o formulário de contato funcional, a implementação do React Hot Toast para o sistema de notificações e aprimoramentos na estilização.",
    github: "https://github.com/CamilleHaus/ExploreX",
    vercel:
      "https://explore-nextjs-camillehaus-camillehaus-projects.vercel.app/",
  },
  {
    id: 3,
    image: Kenziehub,
    title: "Kenziehub",
    responsive: true,
    subtitle: "Projeto de Registro e Login com Autenticação",
    description:
      "Este projeto tem como foco o aprendizado das páginas de registro e login, com autenticação e validação de campos utilizando Schema e ZOD. Utiliza AXIOS para renderização de APIs, incorporando todos os métodos HTTP (GET, POST, PUT/PATCH e DELETE). Além disso, implementa a proteção de rotas e utiliza CONTEXTO para melhor organização do código. Desenvolvido em REACT, com componentização e estilização em SASS.",
    github:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m3_sprint4_Kenzie_hub_camille_haus",
    vercel: "https://kenziehub-camillehaus-camillehaus-projects.vercel.app/",
  },
  {
    id: 4,
    image: TheBooks,
    title: "The Books",
    responsive: false,
    subtitle: "Projeto de Filtragem de Itens",
    description:
      "Este projeto foca no aprendizado da lógica de filtragem de itens de forma individual e simultânea. Utiliza AXIOS para manipulação de rotas de APIs e CONTEXTO para gerenciamento de estados e centralização da lógica. Desenvolvido em REACT, com reutilização de componentes e estilização com SASS.",
    github: "https://github.com/CamilleHaus/the_books",
    vercel: "https://the-books-camillehaus-camillehaus-projects.vercel.app/",
  },
];
