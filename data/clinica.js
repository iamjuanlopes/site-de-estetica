/* ==========================================================================
   TUDO QUE MUDA DE UMA CLÍNICA PRA OUTRA ESTÁ NESTE ARQUIVO.
   Pra adaptar o modelo pra um cliente real, edite só aqui (e troque as fotos
   em img/). Não precisa mexer no HTML, no CSS nem no JS.
   Clínica, pessoas, preços e depoimentos abaixo são FICTÍCIOS.
   ========================================================================== */

const CLINICA = {
  nome: 'Espaço Aurora',
  assinatura: 'Estética Avançada',
  cidade: 'Resende – RJ',

  // Só números, com código do país. É o que monta os links do WhatsApp.
  whatsapp: '5524999990000',
  whatsappVisivel: '(24) 99999-0000',
  instagram: 'espacoaurora.estetica',
  facebook: '',                      // deixe vazio se a clínica não tiver

  /* Foto grande do topo, dentro de img/. A versão menor é opcional e serve pra
     o celular não baixar a foto grande — o número no fim do nome é a largura
     dela em pixels. Se a foto for recorte em PNG sem fundo, o site mostra a
     pessoa inteira sobre a cor do painel (--foto-fundo no css). */
  fotoHero: 'hero-rosto.jpg',
  fotoHeroPequena: 'hero-rosto-500.jpg',
  /* true quando a foto já vem com fundo liso ou recortada: aí a pessoa
     aparece inteira, sem corte. false pra foto comum, que preenche o painel. */
  fotoHeroRecorte: false,
  desenvolvidoPor: 'Éden',           // assinatura no rodapé

  endereco: 'Rua das Palmeiras, 120 – Centro',
  cidadeUf: 'Resende – RJ, 27510-000',
  // Usado no botão "abrir no Google Maps"
  mapa: 'https://www.google.com/maps/search/?api=1&query=Rua+das+Palmeiras+120+Centro+Resende+RJ',

  horarios: [
    ['Segunda a sexta', '9h às 19h'],
    ['Sábado', '9h às 14h'],
    ['Domingo', 'fechado'],
  ],

  // Frase que já vai escrita no WhatsApp quando a pessoa clica num botão geral
  mensagemPadrao: 'Oi! Vi o site e queria agendar um horário.',

  // Aparecem logo abaixo do topo da página
  selos: [
    ['4,9', 'no Google, com 87 avaliações'],
    ['8 anos', 'cuidando da pele de Resende'],
    ['+2.400', 'atendimentos realizados'],
  ],
};

/* Serviços — a ordem aqui é a ordem na página.
   A página não mostra preço de propósito: valor se conversa no WhatsApp,
   depois da avaliação.
   foto: nome do arquivo em img/ (sem a versão -480, que o site monta sozinho) */
const SERVICOS = [
  {
    nome: 'Limpeza de pele profunda',
    foto: 'serv-limpeza',
    duracao: '1h20',
    texto: 'Extração, vapor de ozônio, máscara calmante e protetor. Indicada pra pele oleosa, cravos e poros dilatados.',
  },
  {
    nome: 'Protocolo facial anti-idade',
    foto: 'serv-facial',
    duracao: '1h',
    texto: 'Peeling suave, microagulhamento e ativos de vitamina C. Trabalha linhas finas, manchas e firmeza.',
  },
  {
    nome: 'Drenagem linfática',
    foto: 'serv-drenagem',
    duracao: '50 min',
    texto: 'Reduz inchaço e retenção de líquido. Muito procurada no pós-operatório e nas semanas antes de um evento.',
  },
  {
    nome: 'Massagem relaxante',
    foto: 'serv-massagem',
    duracao: '1h',
    texto: 'Óleo morno, pressão ajustada ao seu corpo e foco em pescoço, ombros e lombar — onde o estresse trava.',
  },
  {
    nome: 'Pedras quentes',
    foto: 'serv-pedras',
    duracao: '1h10',
    texto: 'Pedras aquecidas sobre os pontos de tensão. Solta a musculatura mais fundo do que a massagem tradicional.',
  },
  {
    nome: 'Design de sobrancelhas',
    foto: 'serv-sobrancelha',
    duracao: '40 min',
    texto: 'Mapeamento do formato do seu rosto, limpeza com pinça e henna opcional. Sai pronta pra semana.',
  },
];

const PASSOS = [
  ['Você chama no WhatsApp', 'Conta o que te incomoda e a gente já sugere o horário mais próximo.'],
  ['Avaliação sem custo', 'Na primeira visita a gente olha sua pele e monta o protocolo — sem empurrar pacote.'],
  ['Seu horário fixo', 'Quem faz sessão contínua sai com o próximo horário marcado e lembrete no WhatsApp.'],
];

const DEPOIMENTOS = [
  {
    nome: 'Carolina M.',
    detalhe: 'cliente há 2 anos',
    texto: 'Cheguei com a pele muito oleosa e cheia de cravos. Depois de quatro limpezas eu parei de usar base pra trabalhar. Nunca me empurraram nada que eu não precisasse.',
  },
  {
    nome: 'Fernanda R.',
    detalhe: 'drenagem pós-operatória',
    texto: 'Fiz as sessões logo depois da cirurgia. O inchaço baixou muito mais rápido do que eu esperava e me explicaram cada etapa.',
  },
  {
    nome: 'Juliana P.',
    detalhe: 'protocolo facial',
    texto: 'O lugar é calmo, cheiroso e o horário sai na hora marcada. Isso pra mim vale tanto quanto o resultado.',
  },
];

const FAQ = [
  ['Precisa marcar antes?', 'Sim. O atendimento é individual e um horário de cada vez, então encaixe de última hora é raro. Chame no WhatsApp que a gente vê o horário mais próximo.'],
  ['Qual a forma de pagamento?', 'Pix, dinheiro e cartão em até 3x sem juros. Pacotes de sessão podem ser divididos no cartão.'],
  ['Como funciona a avaliação?', 'A primeira conversa é sem custo e sem compromisso: a gente olha sua pele, entende sua rotina e diz o que faz sentido — inclusive quando o melhor é não fazer nada agora.'],
  ['Posso remarcar?', 'Pode, avisando com 4 horas de antecedência. Como o horário fica reservado só pra você, remarcação em cima da hora ocupa a vaga de outra pessoa.'],
  ['Tem estacionamento?', 'Tem vaga na rua em frente e um estacionamento pago a 50 metros, na mesma calçada.'],
];
