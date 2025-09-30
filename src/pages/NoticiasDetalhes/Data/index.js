import { Subtitles } from "lucide-react";

const noticias = [
  {
    id: 1,
    titulo:
      "Governo do Ceará reforça compromisso com realização de cirurgias eletivas e tratamento do câncer na Região Centro-Sul",
    data: "28 DE JULHO DE 2023 - 21:16",
    conteudo: [
       {
        tipo: "imagem",
        valor: "/estado.jpg",
      },
      {
        tipo: "texto",
        valor: `Em Iguatu, no Centro-Sul cearense, o Hospital e Maternidade Agenor Araújo (HMAA) 
        está credenciado desde maio deste ano para atender pacientes dentro do Plano Estadual de Redução 
        das Filas de Cirurgias Eletivas, Exames Complementares e Consultas Especializadas. Até o momento, 
        110 procedimentos foram realizados na unidade. Na tarde desta terça-feira (25), o governador Elmano de 
        Freitas visitou o Hospital, acompanhado de autoridades, e reforçou a parceria para ampliar acesso ao tratamento do câncer.`,
      },  
      {
        tipo: "imagem",
        valor: "/proadi.jpg",
      },
      {
        tipo: "texto",
        valor: `Lançado em abril de 2023, o Plano Estadual de Redução das Filas de Cirurgias Eletivas é desenvolvido 
        por meio da Sesa, que, além de realizar os procedimentos nos hospitais da rede estadual, convoca, via edital,
        clínicas, hospitais-polo e outros equipamentos de saúde para a realização de quase 29 mil cirurgias não urgentes.
        O investimento inicial na iniciativa é de R$ 135 milhões.`,
      },
      {
        tipo: "imagem",
        valor: "/victor.jpg",
      },
      {
        tipo: "texto",
        valor: `Durante a visita, o governador enfatizou que o Ceará tem dado celeridade para reduzir a espera por 
        cirurgias no Sistema Único de Saúde (SUS). “Queremos continuar intensificando esse trabalho para que a família
        cearense possa superar o sofrimento de ter alguém esperando uma cirurgia. Essa unidade tem tido destaque na
        realização de cirurgias. Nós acabamos de visitar pessoas de Cariús, Iguatu, Icó, da região inteira. Por isso,
        tenho muita clareza de que é importante ter um hospital-polo regional do Centro-Sul”, afirmou.`,
      },
      {
        tipo: "imagem",
        valor: "/solange.jpg",
      },
      {
        tipo: "texto",
        valor: `No que se refere ao plano estadual, entre as cirurgias já feitas na unidade hospitalar de Iguatu estão:
        cirurgia geral (96); ginecologia (07); ortopedia/traumatologia (04); otorrinolaringologia (02); pediátrica (01).
        Para atender à demanda, o equipamento reformou o Centro Cirurgico, renovou o parque tecnológico e ampliou a 
        estrutura da unidade com a criação de 20 leitos cirúrgicos, o que resultou em 70 leitos ao todo.`,
      },
      {
        tipo: "texto",
        valor: `A dona de casa Maria Célia Lima, de 47 anos, natural de Icó, já está no HMAA se preparando para uma cirurgia
         ginecológica. Ela, que descobriu a doença há cerca de sete anos, sentiu os sintomas se agravarem no último ano. 
         “Acredito e tenho esperança que [após a cirurgia] vai ficar bem melhor”, disse.`,
      },
      {
        tipo: "imagem",
        valor: "/agenor.jpg",
      },
      {
        tipo: "texto",
        valor: `Ainda segundo Elmano de Freitas, o Centro-Sul terá estrutura para receber pacientes em tratamento do câncer.
        “Tenho certeza que, para toda e qualquer pessoa com alguém que tem câncer na família, saber que essa pessoa não vai 
        ter que se deslocar para fazer o tratamento longe, podendo ser atendida em Iguatu, é uma situação de muito mais tranquilidade,
        paz para o coração dessa família e, especialmente, para a pessoa que vai fazer o tratamento. Eu me comprometi que levaremos o
       tratamento do câncer para todo o Ceará, para o Interior”.`,
      },
      {
        tipo: "imagem",
        valor: "/elmano.jpg",
      },
      {
        tipo: "texto",
        valor: `Além das cirurgias eletivas, a Sesa, por meio da Política de Incentivo Hospitalar (PIH), repassa cerca de R$ 460 mil 
        mensalmente ao HMAA para o custeio de dez leitos de Unidade de Terapia Intensiva (UTI), clínica médica e pediátrica. Há previsão
        para que a Comissão Intergestores Bipartite (CIB) delibere a ampliação em mais R$ 240 mil para abranger as clínicas de cirurgia,
        raumatologia e anestésica.`,
      },
      {
        subtitulo: "Mais investimento em saúde",  // Adiciona o subtítulo aqui
        tipo:"texto",
        valor:`O Ceará também é contemplado pelo Programa Nacional de Redução de Filas, do Governo Federal, contando com recurso de R$25,9 milhões
         e uma contrapartida estadual no valor de R$7,98 milhões, totalizando R$ 33,88 milhões para 15.900 cirurgias. Com os investimentos das iniciativas 
         federal e estadual, são quase R$ 170 milhões para realizar cerca de 45 mil procedimentos.`
      }
      
    ],
    tags: [
      "Centro-Sul",
      "Cirurgias Eletivas",
      "Compromisso",
      "Governo Do Estado",
      "Tratamento De Câncer",
    ],
    autores: [
      "Larissa Falcão - Ascom Casa Civil - Texto",
      "Thiago Gaspar - Casa Civil - Foto",
    ],
  },
  {
    id: 2,
    imagem: "/estado.jpg",
    titulo: "teste 1",
    data: "24/10/2024",
    texto: `Texto aqui.`,
    tags: ["Equipamentos", "Hospitalares", "Inovação"],
    autores: ["Equipe SC Medical"],
  },
  {
    id: 3,
    imagem: "/image.jpg",
    titulo: "teste 2",
    data: "28 DE JULHO DE 2023 - 21:16",
    texto: `Texto aqui.`,
    tags: [
      "Ficouro-Sul",
      "Cirurgias Eletivas",
      "Compromisso",
      "Governo Do Estado",
      "Tratamento De Câncer",
    ],
    autores: [
      "Lorista Felido - Ascron Casa Civil - Foto",
      "Thiago Gaspar - Casa Civil - Foto",
    ],
  },
  {
    id: 4,
    imagem: "/image.jpg",
    titulo: "teste 3",
    data: "28 DE JULHO DE 2023 - 21:16",
    texto: `Texto aqui.`,
    tags: [
      "Ficouro-Sul",
      "Cirurgias Eletivas",
      "Compromisso",
      "Governo Do Estado",
      "Tratamento De Câncer",
    ],
    autores: [
      "Lorista Felido - Ascron Casa Civil - Foto",
      "Thiago Gaspar - Casa Civil - Foto",
    ],
  },
];

export default noticias;
