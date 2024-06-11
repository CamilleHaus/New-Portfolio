import TheBooks from "../../public/assets/the-books.png";
import Kenziehub from "../../public/assets/Kenziehub.png";

export const projects = [
  {
    id: 0,
    image: TheBooks,
    title: "The Books",
    responsive: false,
    subtitle: "Projeto de Filtragem de Itens",
    description:
      "Este projeto foca no aprendizado da lógica de filtragem de itens de forma individual e simultânea. Utiliza AXIOS para manipulação de rotas de APIs e CONTEXTO para gerenciamento de estados e centralização da lógica. Desenvolvido em REACT, com reutilização de componentes e estilização com SASS.",
    github: "https://github.com/CamilleHaus/the_books",
    vercel: "",
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
    vercel: "",
  },
];
