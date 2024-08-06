import Planner from "../../public/plannerBE.png";
import JobAPI from "../../public/job-api.png";
import CardapioAPI from "../../public/cardapio_api.png";
import CarsCatalogAPI from "../../public/cars_catalog_API.png";

export const backendProjects = [
  {
    id: 0,
    image: CardapioAPI,
    title: "Cardápio API",
    techs: "Node - Express - JavaScript - REST - Postgres - Prisma - Jest - Swagger",
    description:
      "API para simulação de um sistema de delivery, onde podemos inserir restaurantes, suas receitas e categorias. Nesse projeto, foram utilizados todos os métodos HTTP, validação de token/ID's e dos corpos de requisição com implementação de middlewares. Foram criadas rotas privadas e públicas. Para garantir o funcionamento do código de forma completa, também foram implementados testes unitários e de integração com o JEST. Testando não apenas as possibilidades de sucesso, mas também como suas possíveis mensagens de erro. Também houve a implementação de documentação da API utilizando o Swagger. Outras bibliotecas utilizadas incluem o ZOD para os schemas e o Tsyringe para injeção de dependências. ",
    github: "https://github.com/CamilleHaus/API_Cardapio",
  },
  {
    id: 1,
    image: CarsCatalogAPI,
    title: "Catálogo de Carros",
    techs: "Node - Express - JavaScript - REST - Postgres - Prisma - Jest - Swagger",
    description:
      "API de catalogação de carros, onde lidamos com duas rotas principais, /cars e /users. Nesse projeto, foram utilizados todos os métodos HTTP, validação de token e dos corpos de requisição com implementação de middlewares. Foram criadas rotas privadas e públicas. Para garantir o funcionamento do código de forma completa, também foram implementados testes unitários e de integração com o JEST. Também houve a implementação de documentação da API utilizando o Swagger. Outras bibliotecas utilizadas incluem o ZOD para os schemas e o Tsyringe para injeção de dependências.",
    github: "https://github.com/CamilleHaus/-BE--API_Cars-Catalog",
  },
  {
    id: 2,
    image: Planner,
    title: "Plann.er - Backend",
    techs: "Node - Fastify - Prisma - PostGres",
    description:
      "Aplicação desenvolvida durante a trilha de conhecimento da NLW, onde criamos um Planner de viagem em Node.js, utilizando a biblioteca do Fastify para construção de rotas e também o Zod para validação de dados. Mais detalhes sobre a aplicação no ReadMe no link do Github",
    github: "https://github.com/CamilleHaus/Plann.er_BE",
  },
  {
    id: 3,
    image: JobAPI,
    title: "Job API",
    techs: "Node - Express - Prisma - PostGres",
    description:
      "API desenvolvida com 3 rotas principais: Opportunity, Applications and Users. Onde é possível que o usuário realize autenticação, cadastre oportunidades de trabalho e também crie aplicações de trabalho. Mais detalhes sobre cada rota, seus métodos HTTP, corpos de requisições/respostas e possíveis erros estão documentos no ReadMe da aplicação. Junto com intruções para uso e testagem da mesma.",
    github: "https://github.com/CamilleHaus/job-API",
  },
];
