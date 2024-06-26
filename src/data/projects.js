import TheBooks from "../../public/the-books.png";
import Kenziehub from "../../public/Kenziehub.png";
import ExploreX from "../../public/explore-X.png"

export const projects = [
  {
    id: 0,
    image: ExploreX,
    title: "ExploreX",
    responsive: true,
    subtitle: "Blog Interativo com Autenticação e Filtragem",
    description:
      "Neste projeto, foquei em aprimorar meu conhecimento em Tailwind e explorar novas ferramentas, como o Auth.js (anteriormente NextAuth). Durante o desenvolvimento, realizei a migração da versão 4 para a versão 5 do Auth.js, após a conclusão inicial do projeto. Este projeto é um blog onde os usuários podem criar suas próprias postagens, adicionar imagens, descrições e categorias. Além disso, é possível visualizar as postagens, o autor e a data de criação, bem como filtrar postagens com base na categoria. Utilizei o Prisma como ORM e o MongoDB como banco de dados principal. Para renderizar o carrossel de projetos, utilizei a biblioteca React Slick. Planejo futuras melhorias, incluindo a integração do NodeMailer para tornar o formulário de contato funcional, a implementação do React Hot Toast para o sistema de notificações e aprimoramentos na estilização.",
    github:
      "https://github.com/CamilleHaus/ExploreX",
    vercel: "https://explore-nextjs-camillehaus-camillehaus-projects.vercel.app/",
  },
  {
    id: 1,
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
    id: 2,
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
