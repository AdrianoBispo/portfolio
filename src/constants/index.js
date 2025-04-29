import {
  webDeveloperIcon,
  mobileIcon,
  uxUiIcon,
  calculadora,
  jogoDoNumeroSecreto,
  igniteFeed,
  igniteTimer,
  dtMoney,
  bytebank,
  meteora,
  tocaSom,
  pongGame,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  angular,
  typescript,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  saelBmw,
  portoDigital,
  rocketseat,
  alura,
} from "../assets/index";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mim",
  },
  {
    id: "experience",
    title: "Experiencia",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "UX/UI Design",
    icon: uxUiIcon,
  },
  {
    title: "Desenvolvedor Web",
    icon: webDeveloperIcon,
  },
  {
    title: "Desenvolvedor Mobile",
    icon: mobileIcon,
  },
];

const technologies = [
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Monitor do Embarque Digital",
    company_name: "Porto Digital",
    icon: portoDigital,
    iconBg: "#FFF",
    date: "03/2025 - Atualmente",
    points: [
      "Presto suporte nas oficinas e palestras ministradas pelo Porto Digital ou pelas empresas parceiras e seus sócios, verificando os equipamentos de som, transmissão de vídeo e ambiente;",
      "Presto suporte a equipe administrativa do Porto Digital nos eventos do Embarque Digital(Ex: Selo RH de Impacto e Família Embarcada);",
      "Presto suporte na preservação e cuidado das máquinas do laboratório, conferindo armazenamento, acesso a internet, instalação, atualização e ausência de softwares;",
      "Presto suporte compartilhando e divulgando eventos ou comunicados no canal das turmas do Embarque Digital;",
    ],
  },
  {
    title: "Auxiliar de Garantia",
    company_name: "Sael BMW",
    icon: saelBmw,
    iconBg: "#FFF",
    date: "06/2024 - 01/2025",
    points: [
      "Atuei na análise e processamento de pedidos de garantia, garantindo a conformidade com os padrões da BMW;",
      "Fui responsável também pelo acompanhamento dos reparos e serviços realizados, assegurando a qualidade e a satisfação do cliente.",
    ],
  },
];

const projects = [
  {
    id: 1,
    name: "Calculadora",
    description: "Calculadora simples feita utilizando HTML, CSS e JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
    ],
    image: calculadora,
    source_code_link: "https://github.com/AdrianoBispo/calculadora",
  },
  {
    id: 2,
    name: "Jogo do Nº Secreto JS",
    description:
      "O jogo do número secreto em JavaScript consiste em um programa que escolhe um número aleatório entre 1 e 100 e o jogador tenta adivinhar esse número. O programa dá dicas ao jogador ('maior' ou 'menor') a cada tentativa, até que o jogador acerte.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
    ],
    image: jogoDoNumeroSecreto,
    source_code_link:
      "https://github.com/AdrianoBispo/embarque-digital-trilha-javascript/tree/master/numero-secreto-js-parte1",
  },
  {
    id: 3,
    name: "Meteora",
    description:
      "O projeto Meteora é um e-commerce fictício de roupas e acessórios online. Esse projeto foi feito com o Bootstrap 5 e desenvolvido através do curso 'Bootstrap 5: crie uma loja virtual' da Alura.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
      {
        name: "Bootstrap 5",
        color: "text-purple-400",
      },
    ],
    image: meteora,
    source_code_link: "https://github.com/AdrianoBispo/meteora",
  },
  {
    id: 4,
    name: "Toca Som",
    description:
      "O TocaSom é um joguinho simples feito com HTML, CSS e Javascript onde a cada tecla pressionada é emitido o som do instrumento musical bateria.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
    ],
    image: tocaSom,
    source_code_link: "https://github.com/AdrianoBispo/tocaSom",
  },
  {
    id: 5,
    name: "Pong Game",
    description:
      "O Pong Game é uma recriação do clássico jogo Pong, onde dois jogadores controlam barras para rebater uma bola em um campo de jogo. O jogo foi desenvolvido com HTML e CSS para a estrutura e estilização do jogo e JavaScript para a lógica do jogo e manipulação do DOM.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
    ],
    image: pongGame,
    source_code_link: "https://github.com/AdrianoBispo/pong-game",
  },
  {
    id: 6,
    name: "Bytebank",
    description:
      "É uma aplicação que simula um banco virtual, permitindo o desenvolvimento e teste de diversas funcionalidades, como registro de agências, clientes, contas correntes e transações.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
      {
        name: "Typescript",
        color: "text-blue-500",
      },
    ],
    image: bytebank,
    source_code_link:
      "https://github.com/AdrianoBispo/formacao-typescript-alura",
  },
  {
    id: 7,
    name: "Ignite Feed",
    description:
      "Ignite feed é um projeto simples que simula o feed de uma rede social, com funcionalidades de comentários, likes e apagar comentário.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
      {
        name: "Typescript",
        color: "text-blue-500",
      },
      {
        name: "React",
        color: "text-cyan-300",
      },
    ],
    image: igniteFeed,
    source_code_link: "https://github.com/AdrianoBispo/formacao-react-rocketseat/tree/master/ignite/ignite-feed",
  },
  {
    id: 8,
    name: "Ignite Timer",
    description:
      "O Ignite Timer é um projeto que permite ao usuário cronometrar as suas tarefas no dia a dia, além de lhe permite ver um histórico de todos as tarefas já realizadas.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
      {
        name: "Typescript",
        color: "text-blue-500",
      },
      {
        name: "React",
        color: "text-cyan-300",
      },
    ],
    image: igniteTimer,
    source_code_link: "https://github.com/AdrianoBispo/formacao-react-rocketseat/tree/master/ignite/ignite-timer",
  },
  {
    id: 8,
    name: "DT Money",
    description:
      "A ideia deste projeto é criar um controle financeiro para o usuário. Nele o usuário pode adicionar as entradas e saídas financeiras do seu dia-a-dia.",
    tags: [
      {
        name: "HTML",
        color: "text-orange-600",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-300",
      },
      {
        name: "Typescript",
        color: "text-blue-500",
      },
      {
        name: "React",
        color: "text-cyan-300",
      },
    ],
    image: dtMoney,
    source_code_link: "https://github.com/AdrianoBispo/formacao-react-rocketseat/tree/master/dt-money",
  },
];

const certifications = [
  {
    id: 1,
    certification: "Formação A Partir do Zero: HTML e CSS para Projetos Web",
    name: "Alura",
    date: "Out 2024",
    image: alura,
  },
  {
    id: 2,
    certification: "Formação a Partir do Zero: Iniciante em Programação",
    name: "Alura",
    date: "Fev 2025",
    image: alura,
  },
  {
    id: 3,
    certification:
      "Formação Aprenda a Programar em Javascript com Foco no Back-end",
    name: "Alura",
    date: "Fev 2025",
    image: alura,
  },
  {
    id: 4,
    certification: "Formação Modelagem de Dados",
    name: "Alura",
    date: "Mar 2025",
    image: alura,
  },
  {
    id: 5,
    certification: "Formação Aplique Typescript no Front-End",
    name: "Alura",
    date: "Mar 2025",
    image: alura,
  },
  {
    id: 6,
    certification: "Fundamentos do React",
    name: "Rocketseat",
    date: "Mar 2025",
    image: rocketseat,
  },
];

export { services, technologies, experiences, certifications, projects };
