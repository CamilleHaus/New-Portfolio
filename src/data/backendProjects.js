import Planner from "../../public/plannerBE.png";
import JobAPI from "../../public/job-api.png";

export const backendProjects = [
  {
    id: 0,
    image: Planner,
    title: "Plann.er - Backend",
    techs: "Node - Fastify - Prisma - PostGres",
    description:
      "Aplicação desenvolvida durante a trilha de conhecimento da NLW, onde criamos um Planner de viagem em Node.js, utilizando a biblioteca do Fastify para construção de rotas e também o Zod para validação de dados. Mais detalhes sobre a aplicação no ReadMe no link do Github",
    github: "https://github.com/CamilleHaus/Plann.er_BE",
  },
  {
    id: 1,
    image: JobAPI,
    title: "Job API",
    techs: "Node - Express - Prisma - PostGres",
    description:
      "API desenvolvida com 3 rotas principais: Opportunity, Applications and Users. Onde é possível que o usuário realize autenticação, cadastre oportunidades de trabalho e também crie aplicações de trabalho. Mais detalhes sobre cada rota, seus métodos HTTP, corpos de requisições/respostas e possíveis erros estão documentos no ReadMe da aplicação. Junto com intruções para uso e testagem da mesma.",
    github: "https://github.com/CamilleHaus/job-API",
  },
];
