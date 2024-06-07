import TheBooks from "../../public/assets/the-books.png";
import Kenziehub from "../../public/assets/Kenziehub.png";

export const projects = [
    {
      id: 0,
      image: TheBooks,
      title: "The Books",
      responsive: false,
      description:
        "Projeto focado no aprendizado da lógica de filtragem de items de forma individual e simultânea. Utilizando do AXIOS para renderização de API's e CONTEXTO para o gerenciamento de estados. Projeto realizado em REACT, componetizado e estilizado com SASS.",
      github: "https://github.com/CamilleHaus/the_books",
    },
    {
      id: 1,
      image: Kenziehub,
      title: "Kenziehub",
      responsive: true,
      description:
        "Projeto focado no aprendizado da páginas de registro e login com autenticação e validação de campos utilizando SCHEMA e ZOD. Utilizando do AXIOS para renderização de API's e todos os métodos HTTP (GET, POST, PUT/PATCH e DELETE). Também foi feita proteção de rotas e utilizado CONTEXTO para melhor organização do código. Projeto realizado em REACT, componetizado e estilizado em SASS.",
      github: "https://github.com/Kenzie-Academy-Brasil-Developers/m3_sprint4_Kenzie_hub_camille_haus",
    },
  ];