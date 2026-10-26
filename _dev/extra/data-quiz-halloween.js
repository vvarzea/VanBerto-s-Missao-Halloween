// ===== Conteúdo educativo e perguntas do quiz — MISSÃO HALLOWEEN =====
// HISTORY, QUIZ_TIPS, QUIZ_ARTICLE, QUIZ_BY_THEME, QUIZ_BY_THEME_AVANCADO
// Os nomes internos dos 20 temas (historia_internet, palavras_passe, …) vêm do jogo original de cibersegurança
// e mantêm-se, para não mexer no resto do código; o conteúdo de cada um é sobre o Halloween (ver THEME_NAMES).
// Alinhado por artIdx (0-19), na mesma ordem dos 20 níveis.

export const HISTORY = [
  {
    title: "🎃 A História do Halloween",
    text: "O Halloween celebra-se na noite de 31 de outubro e tem mais de 2000 anos. Nasceu entre os povos celtas, que festejavam o Samhain, o fim do verão e das colheitas. Acreditavam que, nessa noite, os espíritos andavam à solta, por isso acendiam fogueiras e usavam disfarces. O nome vem de «All Hallows’ Eve», a véspera do Dia de Todos os Santos, a 1 de novembro."
  },
  {
    title: "🎃 Abóboras e Lanternas",
    text: "A abóbora é um fruto que cresce a partir de sementes e é feito sobretudo de água. A tradição de esculpir lanternas vem da Irlanda, onde se esculpiam nabos. Os emigrantes irlandeses levaram o costume para os Estados Unidos, onde descobriram que as abóboras eram maiores e mais fáceis de esculpir. A lenda de «Jack da Lanterna» explica o nome «jack-o’-lantern»."
  },
  {
    title: "🎃 Fatos e Máscaras",
    text: "Antigamente, as pessoas usavam máscaras e disfarces no Samhain para se confundirem com os espíritos. Hoje, os fatos de Halloween são divertidos: bruxas, vampiros, fantasmas, esqueletos… Mas é importante escolher um fato seguro: que não tape a vista, que não arraste pelo chão e, à noite, com cores claras ou fitas refletoras."
  },
  {
    title: "🎃 Doces ou Travessuras",
    text: "«Doces ou travessuras!» é a frase que as crianças dizem ao tocar às portas na noite de Halloween. Quem abre a porta oferece doces. Em Portugal, existe uma tradição parecida: o Pão-por-Deus, a 1 de novembro, em que as crianças pedem pão, fruta e doces de porta em porta. Vai sempre acompanhado por um adulto!"
  },
  {
    title: "🦇 Os Morcegos",
    text: "Os morcegos são os únicos mamíferos que voam de verdade. Usam a ecolocalização: emitem sons agudos e escutam o eco para saber onde estão os obstáculos e os insetos. Dormem pendurados de cabeça para baixo e comem muitos insetos, como os mosquitos. Em Portugal há várias espécies de morcegos, e todas são protegidas."
  },
  {
    title: "🕷️ Aranhas e Teias",
    text: "As aranhas têm oito patas e fazem parte dos aracnídeos, não dos insetos. Muitas tecem teias de seda para apanhar insetos. A seda é muito fina e, para a sua espessura, muito resistente. A maioria das aranhas é inofensiva para as pessoas e ajuda a controlar moscas e mosquitos."
  },
  {
    title: "👻 Fantasmas e Sombras",
    text: "Os fantasmas são personagens de histórias: dizem que são espíritos de pessoas que já morreram. Mas muitos «fantasmas» têm explicações simples: sombras, correntes de ar, ruídos de madeira antiga ou até um lençol! Cientistas e curiosos gostam de investigar e descobrir a explicação por trás de cada mistério."
  },
  {
    title: "🧙 Bruxas e Vassouras",
    text: "As bruxas são personagens de contos: usam chapéu pontiagudo, vassoura e caldeirão. Antigamente, por falta de conhecimento, algumas pessoas foram acusadas injustamente de bruxaria. Hoje sabemos que não há bruxas com poderes mágicos: as bruxas do Halloween são só fantasia e diversão!"
  },
  {
    title: "🧛 Monstros Famosos",
    text: "Drácula, Frankenstein, múmias e lobisomens são monstros famosos de livros e filmes. O romance «Drácula» foi escrito por Bram Stoker e publicado em 1897. «Frankenstein» foi escrito por Mary Shelley, em 1818: Frankenstein é o nome do cientista, e a criatura nem nome tem! As múmias vêm do Antigo Egito, onde os corpos eram preservados e envolvidos em faixas de linho."
  },
  {
    title: "💀 Esqueletos e Ossos",
    text: "O esqueleto é a estrutura de ossos que sustenta o corpo e protege os órgãos. Um adulto tem 206 ossos; os bebés nascem com mais, cerca de 300, porque alguns se juntam à medida que crescemos. O crânio protege o cérebro, as costelas protegem o coração e os pulmões, e o fémur, na coxa, é o osso mais comprido do corpo."
  },
  {
    title: "🕯️ Todos os Santos e Pão-por-Deus",
    text: "Em Portugal, o dia 1 de novembro é o Dia de Todos os Santos, feriado nacional. Nesse dia, as famílias lembram quem já partiu e levam flores aos cemitérios. Em muitas terras, as crianças vão de porta em porta pedir o Pão-por-Deus e recebem pão, fruta e doces. A 2 de novembro é o Dia de Finados. A 11 de novembro, no São Martinho, assam-se castanhas no magusto."
  },
  {
    title: "🌍 Halloween pelo Mundo",
    text: "No México, celebra-se o Dia de Muertos a 1 e 2 de novembro: as famílias fazem altares com fotografias, comida e flores de cempasúchil (cravos-de-defunto) e enfeitam caveiras de açúcar. Na Irlanda, onde o Halloween nasceu, ainda se fazem fogueiras e jogos. Nos Estados Unidos, o Halloween tornou-se uma grande festa com «doces ou travessuras»."
  },
  {
    title: "🌕 A Lua e a Noite",
    text: "A Lua não tem luz própria: reflete a luz do Sol. Dá a volta à Terra em cerca de 27 dias e passa por fases: lua nova, quarto crescente, lua cheia e quarto minguante. De uma lua cheia à seguinte passam cerca de 29 dias e meio. À noite, as pupilas dos teus olhos abrem-se para deixar entrar mais luz."
  },
  {
    title: "🦉 Animais da Noite",
    text: "Muitos animais são noturnos: dormem de dia e andam de noite. As corujas caçam em silêncio e conseguem rodar a cabeça cerca de 270 graus. Os gatos veem bem com pouca luz e têm pupilas que se abrem muito no escuro. Os gatos pretos têm má fama por causa de superstições, mas são iguais aos outros e merecem o mesmo carinho!"
  },
  {
    title: "🍬 Doces e Dentes",
    text: "Os doces são muito saborosos, mas têm muito açúcar. O excesso de açúcar pode causar cáries, porque as bactérias da boca transformam o açúcar em ácidos que estragam os dentes. Por isso, depois de comeres doces, lava os dentes ou, pelo menos, bebe água. Na noite de Halloween, escolhe e partilha os doces com moderação."
  },
  {
    title: "🧪 Poções e Ciência",
    text: "Numa «poção» de Halloween, a magia é ciência! Quando misturas bicarbonato de sódio com vinagre, forma-se dióxido de carbono, um gás, e aparecem muitas bolhas. O sumo de couve-roxa muda de cor com ácidos e bases, por isso é um indicador. O gelo seco é dióxido de carbono sólido, a cerca de −78 °C, e faz um fumo branco; nunca se toca com as mãos! Faz experiências sempre com um adulto."
  },
  {
    title: "📖 Histórias e Lendas",
    text: "As histórias de Halloween contam-se à luz de uma lanterna. As lendas passam de pessoa para pessoa e vão mudando ao longo do tempo. Em Portugal, há lendas de lobisomens, de bruxas e de casas assombradas. Também podes inventar a tua própria história de Halloween: precisas de um herói, de um mistério e de um final!"
  },
  {
    title: "🔢 A Matemática do Halloween",
    text: "Conta, soma e descobre padrões no Halloween! Quantos doces recolheste? Quantas abóboras há na fila? Podes organizar os doces em grupos, fazer metades e descobrir padrões, como laranja, preto, laranja, preto… A simetria também aparece nas abóboras e nos morcegos: se dobrares ao meio, os dois lados são iguais!"
  },
  {
    title: "🔦 Halloween em Segurança",
    text: "Para um Halloween seguro: vai sempre com um adulto ou em grupo, leva uma lanterna, veste cores claras ou fitas refletoras e escolhe um fato onde vejas bem. Atravessa nas passadeiras e visita só casas com a luz da entrada acesa. Nunca entres em casa de desconhecidos e mostra os doces a um adulto antes de os comeres. Em caso de emergência, liga para o 112."
  },
  {
    title: "🏆 A Grande Final do Halloween",
    text: "Chegaste ao fim da aventura! O Halloween junta história, ciência, natureza, matemática, tradições e segurança. Aprendeste sobre o Samhain, as abóboras, os morcegos, as aranhas, os esqueletos, a Lua e muito mais. Agora és um verdadeiro Guardião do Halloween: diverte-te, sê curioso e cuida sempre de ti e dos outros!"
  },
];

export const QUIZ_TIPS = {
  historia_internet: "O Halloween é na noite de 31 de outubro, a véspera do Dia de Todos os Santos.",
  palavras_passe: "Uma abóbora esculpida com uma luz lá dentro chama-se «jack-o’-lantern».",
  dados_pessoais: "Escolhe um fato onde vejas bem e que não te faça tropeçar.",
  instituicoes_apoio: "Só deves ir a casas com a luz da entrada acesa, sempre com um adulto.",
  virus_malware: "Os morcegos não são perigosos e ajudam-nos a comer mosquitos.",
  jogos_seguros: "A maioria das aranhas é inofensiva e ajuda-nos a controlar os insetos.",
  pegada_digital: "Quase todos os «sustos» têm uma explicação simples. Investiga e descobre!",
  fake_news: "As bruxas do Halloween são só fantasia: diverte-te e não acredites em superstições.",
  phishing: "Frankenstein é o nome do cientista, não o do monstro!",
  dispositivos: "Os teus ossos precisam de cálcio e de exercício para crescerem fortes.",
  regras_familia: "Em família, também se recordam e celebram as nossas tradições portuguesas.",
  wifi_publico: "Cada país tem a sua forma de recordar e celebrar esta altura do ano.",
  copias_seguranca: "A Lua só brilha porque reflete a luz do Sol.",
  acessibilidade_digital: "Os gatos pretos não dão azar: são animais como os outros!",
  spam_compras: "Doces com moderação e dentes bem lavados!",
  denuncia_conteudo: "A ciência faz bolhas, cores e «fumo»: pede sempre a um adulto para te ajudar.",
  identidade_digital: "Inventa uma história com início, meio e fim: até o susto mais pequeno conta!",
  privacidade: "Os padrões e as contas estão em todo o lado, até nas abóboras!",
  contacto_desconhecidos: "Em emergência, liga 112. E mostra sempre os doces a um adulto.",
  direitos_digitais: "Diverte-te, sê curioso e cuida de ti e dos outros!",
};

// Sem «artigo» associado: cada tema usa só a dica acima.
export const QUIZ_ARTICLE = {
  historia_internet: null,
  palavras_passe: null,
  dados_pessoais: null,
  instituicoes_apoio: null,
  virus_malware: null,
  jogos_seguros: null,
  pegada_digital: null,
  fake_news: null,
  phishing: null,
  dispositivos: null,
  regras_familia: null,
  wifi_publico: null,
  copias_seguranca: null,
  acessibilidade_digital: null,
  spam_compras: null,
  denuncia_conteudo: null,
  identidade_digital: null,
  privacidade: null,
  contacto_desconhecidos: null,
  direitos_digitais: null,
};

export const THEME_NAMES = {
  historia_internet: "A História do Halloween",
  palavras_passe: "Abóboras e Lanternas",
  dados_pessoais: "Fatos e Máscaras",
  instituicoes_apoio: "Doces ou Travessuras",
  virus_malware: "Os Morcegos",
  jogos_seguros: "Aranhas e Teias",
  pegada_digital: "Fantasmas e Sombras",
  fake_news: "Bruxas e Vassouras",
  phishing: "Monstros Famosos",
  dispositivos: "Esqueletos e Ossos",
  regras_familia: "Todos os Santos e Pão-por-Deus",
  wifi_publico: "Halloween pelo Mundo",
  copias_seguranca: "A Lua e a Noite",
  acessibilidade_digital: "Animais da Noite",
  spam_compras: "Doces e Dentes",
  denuncia_conteudo: "Poções e Ciência",
  identidade_digital: "Histórias e Lendas",
  privacidade: "A Matemática do Halloween",
  contacto_desconhecidos: "Halloween em Segurança",
  direitos_digitais: "A Grande Final do Halloween",
};


export const QUIZ_BY_THEME = {
  historia_internet: [
    { q:"Em que dia se celebra o Halloween?", a:[{t:"31 de outubro",ok:true},{t:"25 de dezembro",ok:false},{t:"1 de janeiro",ok:false}], exp:"O Halloween celebra-se na noite de 31 de outubro, na véspera do Dia de Todos os Santos." },
    { q:"Que povo antigo festejava o Samhain, que deu origem ao Halloween?", a:[{t:"Os gregos",ok:false},{t:"Os celtas",ok:true},{t:"Os japoneses",ok:false}], exp:"Foram os celtas que festejavam o Samhain, no fim do verão e das colheitas." },
    { q:"O que quer dizer o nome «Halloween», na origem?", a:[{t:"Noite das abóboras gigantes",ok:false},{t:"Festa dos morcegos e das corujas",ok:false},{t:"Véspera de Todos os Santos",ok:true}], exp:"«Halloween» vem de «All Hallows’ Eve», a véspera do Dia de Todos os Santos." },
    { q:"Que cores se associam ao Halloween?", a:[{t:"Laranja e preto",ok:true},{t:"Rosa e dourado",ok:false},{t:"Azul e branco",ok:false}], exp:"O laranja lembra as abóboras e as folhas de outono, e o preto lembra a noite." },
    { q:"Em que estação do ano é o Halloween, no hemisfério norte?", a:[{t:"Na primavera",ok:false},{t:"No outono",ok:true},{t:"No verão",ok:false}], exp:"O Halloween calha no outono, depois das colheitas." },
  ],
  palavras_passe: [
    { q:"Como se chama a abóbora esculpida com uma luz lá dentro?", a:[{t:"Chapéu de abóbora",ok:false},{t:"Lanterna de abóbora",ok:true},{t:"Bola de abóbora",ok:false}], exp:"É a famosa «jack-o’-lantern», a lanterna de abóbora." },
    { q:"O que se tira de dentro da abóbora antes de a esculpir?", a:[{t:"Só a casca laranja por fora",ok:false},{t:"As raízes e a terra toda",ok:false},{t:"As sementes e a polpa",ok:true}], exp:"Tiram-se as sementes e a polpa para deixar a abóbora oca." },
    { q:"Que cor tem a abóbora mais usada no Halloween?", a:[{t:"Laranja",ok:true},{t:"Azul",ok:false},{t:"Cinzenta",ok:false}], exp:"As abóboras de Halloween são laranja." },
    { q:"Para que serve a luz dentro da abóbora esculpida?", a:[{t:"Para a abóbora crescer mais",ok:false},{t:"Para a abóbora brilhar à noite",ok:true},{t:"Para a abóbora ficar mais doce",ok:false}], exp:"A luz faz brilhar a cara esculpida. Hoje usam-se luzes de pilhas, mais seguras que as velas." },
    { q:"O que se pode fazer com as sementes da abóbora?", a:[{t:"Usá-las como pilhas",ok:false},{t:"Fervê-las até virarem sumo",ok:false},{t:"Torrá-las e comê-las",ok:true}], exp:"As sementes de abóbora podem ser torradas e comidas." },
  ],
  dados_pessoais: [
    { q:"Porque usavam os celtas disfarces no Samhain?", a:[{t:"Para ganharem prémios nos concursos",ok:false},{t:"Para terem mais calor no inverno",ok:false},{t:"Para se confundirem com os espíritos",ok:true}], exp:"Pensavam que, com disfarces, os espíritos não os reconheciam." },
    { q:"O que deve ter uma boa máscara de Halloween?", a:[{t:"Buracos grandes para veres bem",ok:true},{t:"Nenhum buraco para os olhos",ok:false},{t:"Uma cauda muito comprida",ok:false}], exp:"Uma máscara não deve tapar a vista." },
    { q:"Que fato é mais seguro para andar na rua à noite?", a:[{t:"Um todo preto, para ninguém ver",ok:false},{t:"Um com cores claras ou fitas refletoras",ok:true},{t:"Um comprido que arrasta pelo chão",ok:false}], exp:"As cores claras e as fitas refletoras ajudam os condutores a ver-te." },
    { q:"O que podes levar para ver melhor no escuro?", a:[{t:"Uma almofada",ok:false},{t:"Um tapete",ok:false},{t:"Uma lanterna",ok:true}], exp:"Uma lanterna ajuda-te a ver e a seres visto." },
    { q:"Que cuidado deves ter com a maquilhagem de Halloween?", a:[{t:"Usar maquilhagem própria para a pele",ok:true},{t:"Usar tinta de parede que seja bonita",ok:false},{t:"Usar cola forte para fixar a máscara",ok:false}], exp:"Só se deve usar maquilhagem feita para a pele." },
  ],
  instituicoes_apoio: [
    { q:"Que frase se diz ao tocar à porta no Halloween?", a:[{t:"Doces ou travessuras!",ok:true},{t:"Bom dia, quero sopa!",ok:false},{t:"Feliz Natal!",ok:false}], exp:"A frase tradicional é «Doces ou travessuras!»." },
    { q:"Com quem deves ir pedir doces?", a:[{t:"Sozinho às escuras",ok:false},{t:"Com um adulto ou em grupo",ok:true},{t:"Com um desconhecido",ok:false}], exp:"Vai sempre acompanhado por um adulto." },
    { q:"Que casas se visitam no «doces ou travessuras»?", a:[{t:"As que estão às escuras e fechadas",ok:false},{t:"As casas abandonadas e sem janelas",ok:false},{t:"As que têm a luz da entrada acesa",ok:true}], exp:"A luz acesa indica que os moradores estão a receber visitas." },
    { q:"O que deves fazer antes de comer os doces?", a:[{t:"Mostrá-los a um adulto",ok:true},{t:"Comer tudo de uma vez",ok:false},{t:"Trocá-los com um desconhecido",ok:false}], exp:"Um adulto confirma se os doces estão bem fechados." },
    { q:"Como se chama a tradição portuguesa parecida, a 1 de novembro?", a:[{t:"Magusto",ok:false},{t:"Pão-por-Deus",ok:true},{t:"Entrudo",ok:false}], exp:"No Pão-por-Deus, as crianças pedem pão, fruta e doces." },
  ],
  virus_malware: [
    { q:"Qual é o único mamífero que consegue voar de verdade?", a:[{t:"O esquilo",ok:false},{t:"O morcego",ok:true},{t:"O pinguim",ok:false}], exp:"O morcego é o único mamífero com asas capazes de voar." },
    { q:"Como dormem os morcegos?", a:[{t:"Em pé, como as vacas",ok:false},{t:"Dentro de ninhos de pássaros",ok:false},{t:"Pendurados de cabeça para baixo",ok:true}], exp:"Os morcegos penduram-se de cabeça para baixo para descansar." },
    { q:"Os morcegos são…", a:[{t:"Mamíferos",ok:true},{t:"Aves",ok:false},{t:"Insetos",ok:false}], exp:"Os morcegos têm pelo e amamentam as crias, por isso são mamíferos." },
    { q:"O que comem muitos morcegos?", a:[{t:"Pedras pequenas apanhadas no chão",ok:false},{t:"Insetos, como os mosquitos",ok:true},{t:"Gelados de morango e de chocolate",ok:false}], exp:"Muitos morcegos comem insetos." },
    { q:"Quando estão os morcegos mais ativos?", a:[{t:"Ao meio-dia",ok:false},{t:"Só de manhã",ok:false},{t:"À noite",ok:true}], exp:"Os morcegos são animais noturnos." },
  ],
  jogos_seguros: [
    { q:"Quantas patas tem uma aranha?", a:[{t:"Seis",ok:false},{t:"Quatro",ok:false},{t:"Oito",ok:true}], exp:"As aranhas têm oito patas." },
    { q:"Para que serve a teia da aranha?", a:[{t:"Para apanhar insetos",ok:true},{t:"Para guardar água",ok:false},{t:"Para fazer sombra",ok:false}], exp:"Muitas aranhas usam a teia como armadilha para apanhar insetos." },
    { q:"As aranhas são…", a:[{t:"Insetos",ok:false},{t:"Aracnídeos",ok:true},{t:"Peixes",ok:false}], exp:"As aranhas são aracnídeos e não insetos." },
    { q:"Quantas patas tem um inseto?", a:[{t:"Oito",ok:false},{t:"Dez",ok:false},{t:"Seis",ok:true}], exp:"Os insetos têm seis patas." },
    { q:"De que é feita a teia?", a:[{t:"De seda produzida pela aranha",ok:true},{t:"De algodão apanhado nos campos",ok:false},{t:"De plástico deitado nos caixotes",ok:false}], exp:"A aranha produz a seda no seu próprio corpo." },
  ],
  pegada_digital: [
    { q:"Os fantasmas são…", a:[{t:"Personagens de histórias e lendas",ok:true},{t:"Animais reais que vivem em casas",ok:false},{t:"Seres que moram na superfície da Lua",ok:false}], exp:"Os fantasmas fazem parte de histórias e lendas." },
    { q:"Que objeto simples se usa muitas vezes para fazer um fantasma?", a:[{t:"Uma panela",ok:false},{t:"Um lençol branco",ok:true},{t:"Um guarda-chuva",ok:false}], exp:"Um lençol com dois buracos para os olhos é o fato de fantasma mais clássico." },
    { q:"O que faz estalar a madeira das casas antigas?", a:[{t:"Os fantasmas a dançar de noite no sótão",ok:false},{t:"As abóboras a mexer-se dentro do cesto",ok:false},{t:"As mudanças de temperatura e a idade da madeira",ok:true}], exp:"A madeira dilata e contrai com a temperatura e por isso range." },
    { q:"O que é uma sombra?", a:[{t:"Uma zona escura feita por um objeto que tapa a luz",ok:true},{t:"Um bicho pequeno que vive debaixo do chão",ok:false},{t:"Uma cor nova que só se vê com lanterna",ok:false}], exp:"Quando um objeto tapa a luz, forma-se uma sombra." },
    { q:"Que luz é mais segura numa casa assombrada de brincar?", a:[{t:"Velas junto às cortinas",ok:false},{t:"Luzes de pilhas ou LED",ok:true},{t:"Fósforos acesos",ok:false}], exp:"As luzes de pilhas ou LED não têm chama, por isso são mais seguras." },
  ],
  fake_news: [
    { q:"Que objeto usam as bruxas das histórias para voar?", a:[{t:"Um skate",ok:false},{t:"Uma vassoura",ok:true},{t:"Um guarda-chuva grande",ok:false}], exp:"Nas histórias, as bruxas voam em vassouras." },
    { q:"Que chapéu usa uma bruxa?", a:[{t:"Um boné de beisebol",ok:false},{t:"Um capacete de obras",ok:false},{t:"Um chapéu pontiagudo",ok:true}], exp:"O chapéu pontiagudo é o símbolo da bruxa." },
    { q:"Onde preparam as bruxas as poções, nas histórias?", a:[{t:"Num caldeirão",ok:true},{t:"Num frigorífico",ok:false},{t:"Numa mochila",ok:false}], exp:"O caldeirão é o «tacho» mágico das bruxas." },
    { q:"Que animal acompanha muitas vezes a bruxa nas histórias?", a:[{t:"Um elefante",ok:false},{t:"Um gato preto",ok:true},{t:"Um golfinho",ok:false}], exp:"O gato preto é o companheiro clássico da bruxa." },
    { q:"As bruxas de Halloween são…", a:[{t:"Cientistas reais",ok:false},{t:"Professoras de voo",ok:false},{t:"Personagens de fantasia",ok:true}], exp:"São só personagens de fantasia." },
  ],
  phishing: [
    { q:"Que monstro tem dentes pontiagudos e capa preta?", a:[{t:"O robô",ok:false},{t:"O dinossauro",ok:false},{t:"O vampiro",ok:true}], exp:"O vampiro, como o Drácula, tem presas e uma capa." },
    { q:"De onde vêm as múmias?", a:[{t:"Do Antigo Egito",ok:true},{t:"Da Islândia",ok:false},{t:"Da Austrália",ok:false}], exp:"As múmias mais famosas vêm do Antigo Egito." },
    { q:"Com que eram envolvidas as múmias?", a:[{t:"Com folhas de alface",ok:false},{t:"Com faixas de linho",ok:true},{t:"Com papel de embrulho",ok:false}], exp:"Os corpos eram envolvidos em faixas de linho." },
    { q:"Que monstro se transforma quando há lua cheia?", a:[{t:"O fantasma",ok:false},{t:"O esqueleto",ok:false},{t:"O lobisomem",ok:true}], exp:"Nas lendas, o lobisomem transforma-se com a lua cheia." },
    { q:"Quem criou a criatura na história de Frankenstein?", a:[{t:"Um cientista",ok:true},{t:"Uma bruxa",ok:false},{t:"Um vampiro",ok:false}], exp:"Na história, a criatura é criada por um cientista." },
  ],
  dispositivos: [
    { q:"Quantos ossos tem um adulto?", a:[{t:"206",ok:true},{t:"60",ok:false},{t:"2000",ok:false}], exp:"Um adulto tem 206 ossos." },
    { q:"Que osso protege o cérebro?", a:[{t:"O fémur",ok:false},{t:"O crânio",ok:true},{t:"A costela",ok:false}], exp:"O crânio é a «caixa» de ossos que protege o cérebro." },
    { q:"O que protegem as costelas?", a:[{t:"Os pés e os dedos dos pés",ok:false},{t:"Os dentes e a língua toda",ok:false},{t:"O coração e os pulmões",ok:true}], exp:"As costelas formam uma «gaiola» à volta do coração e dos pulmões." },
    { q:"Que alimento ajuda a ter ossos fortes?", a:[{t:"O leite, por causa do cálcio",ok:true},{t:"Os rebuçados, por causa do açúcar",ok:false},{t:"Os refrigerantes, por causa das bolhas",ok:false}], exp:"O leite tem cálcio, que fortalece os ossos." },
    { q:"Para que serve o esqueleto?", a:[{t:"Faz crescer o cabelo e as unhas rapidamente",ok:false},{t:"Sustenta o corpo e protege os órgãos",ok:true},{t:"Dá a cor à pele e aos olhos todos",ok:false}], exp:"Sem esqueleto, o corpo não se aguentava em pé." },
  ],
  regras_familia: [
    { q:"Que dia é o Dia de Todos os Santos?", a:[{t:"31 de outubro",ok:false},{t:"1 de novembro",ok:true},{t:"25 de abril",ok:false}], exp:"O Dia de Todos os Santos é a 1 de novembro." },
    { q:"O que recebem as crianças no Pão-por-Deus?", a:[{t:"Só legumes crus",ok:false},{t:"Só brinquedos grandes",ok:false},{t:"Pão, fruta e doces",ok:true}], exp:"Tradicionalmente dão-se pão, fruta e doces." },
    { q:"O que se leva aos cemitérios no Dia de Todos os Santos?", a:[{t:"Flores",ok:true},{t:"Balões de festa",ok:false},{t:"Bolas de futebol",ok:false}], exp:"As famílias levam flores para recordar quem já partiu." },
    { q:"Que fruto seco se assa no magusto de São Martinho?", a:[{t:"Bananas",ok:false},{t:"Castanhas",ok:true},{t:"Maçãs",ok:false}], exp:"No magusto assam-se castanhas." },
    { q:"Em que dia se celebra o São Martinho?", a:[{t:"11 de março",ok:false},{t:"11 de agosto",ok:false},{t:"11 de novembro",ok:true}], exp:"O São Martinho celebra-se a 11 de novembro." },
  ],
  wifi_publico: [
    { q:"Que festa se celebra no México a 1 e 2 de novembro?", a:[{t:"O Carnaval, com desfiles e muitas máscaras",ok:false},{t:"A Páscoa, com ovos e amêndoas coloridas",ok:false},{t:"O Dia de Muertos, ou Dia dos Mortos",ok:true}], exp:"No Dia de Muertos recordam-se com alegria os familiares que já partiram." },
    { q:"Que flor enfeita muitos altares mexicanos?", a:[{t:"O cempasúchil, um cravo-de-defunto laranja",ok:true},{t:"A orquídea branca, que cresce nas árvores",ok:false},{t:"A tulipa preta, típica dos campos da Holanda",ok:false}], exp:"As flores laranja do cempasúchil enfeitam os altares." },
    { q:"Que doce em forma de caveira se faz no México?", a:[{t:"Bolas de chocolate",ok:false},{t:"Caveiras de açúcar",ok:true},{t:"Pirulitos de chapéu",ok:false}], exp:"As caveiras de açúcar são um símbolo do Dia de Muertos." },
    { q:"Onde nasceu o Halloween?", a:[{t:"No Japão, entre os antigos samurais",ok:false},{t:"Na Austrália, entre os povos do deserto",ok:false},{t:"Na Irlanda, entre os povos celtas",ok:true}], exp:"Os costumes do Halloween nasceram entre os celtas." },
    { q:"Em que país o Halloween é hoje uma enorme festa popular?", a:[{t:"Nos Estados Unidos",ok:true},{t:"Na Antártida",ok:false},{t:"No Vaticano",ok:false}], exp:"Nos Estados Unidos, o Halloween é uma festa muito popular." },
  ],
  copias_seguranca: [
    { q:"A Lua tem luz própria?", a:[{t:"Não, reflete a luz do Sol",ok:true},{t:"Sim, como o Sol",ok:false},{t:"Só nas noites de Halloween",ok:false}], exp:"A Lua só brilha porque reflete a luz do Sol." },
    { q:"Como se chama a fase em que vemos a Lua toda iluminada?", a:[{t:"Lua nova",ok:false},{t:"Lua cheia",ok:true},{t:"Quarto minguante",ok:false}], exp:"Na lua cheia vemos o disco inteiro iluminado." },
    { q:"Quando vemos mais estrelas no céu?", a:[{t:"Ao meio-dia",ok:false},{t:"Debaixo de um teto",ok:false},{t:"Numa noite escura e limpa",ok:true}], exp:"Com céu escuro e sem nuvens vêem-se mais estrelas." },
    { q:"Que ave gosta de caçar de noite?", a:[{t:"A coruja",ok:true},{t:"A galinha",ok:false},{t:"O pardal",ok:false}], exp:"A coruja é uma ave noturna." },
    { q:"Qual é a nossa estrela mais próxima?", a:[{t:"A Lua",ok:false},{t:"O Sol",ok:true},{t:"Marte",ok:false}], exp:"O Sol é a estrela mais próxima da Terra. A Lua não é uma estrela." },
  ],
  acessibilidade_digital: [
    { q:"Que ave caça à noite e tem olhos grandes?", a:[{t:"O pardal",ok:false},{t:"A coruja",ok:true},{t:"A andorinha",ok:false}], exp:"A coruja tem olhos grandes para ver bem no escuro." },
    { q:"Os gatos pretos dão azar?", a:[{t:"Sim, sempre",ok:false},{t:"Só às sextas-feiras",ok:false},{t:"Não, é só uma superstição",ok:true}], exp:"Os gatos pretos são animais como os outros." },
    { q:"Como se chamam os animais ativos de noite?", a:[{t:"Noturnos",ok:true},{t:"Diurnos",ok:false},{t:"Aquáticos",ok:false}], exp:"Os animais noturnos andam ativos de noite." },
    { q:"Que animal faz «uh, uh» à noite?", a:[{t:"O cão",ok:false},{t:"A coruja",ok:true},{t:"A vaca",ok:false}], exp:"A coruja é conhecida pelo seu pio à noite." },
    { q:"Para que servem os bigodes do gato?", a:[{t:"Para cantar quando está contente",ok:false},{t:"Para voar quando vê um passarinho",ok:false},{t:"Para sentir o que está à volta",ok:true}], exp:"Os bigodes ajudam o gato a sentir o espaço." },
  ],
  spam_compras: [
    { q:"O que pode causar o excesso de açúcar nos dentes?", a:[{t:"Cabelo azul",ok:false},{t:"Asas",ok:false},{t:"Cáries",ok:true}], exp:"O açúcar em excesso estraga os dentes e causa cáries." },
    { q:"Quantas vezes por dia se devem lavar os dentes?", a:[{t:"Pelo menos duas",ok:true},{t:"Nenhuma",ok:false},{t:"Uma vez por semana",ok:false}], exp:"Devemos lavar os dentes pelo menos duas vezes por dia." },
    { q:"O que deves fazer depois de comer doces?", a:[{t:"Dormir sem lavar os dentes",ok:false},{t:"Lavar os dentes ou beber água",ok:true},{t:"Comer mais doces",ok:false}], exp:"Lavar os dentes ou beber água ajuda a proteger-te." },
    { q:"Qual destes é um lanche mais saudável?", a:[{t:"Rebuçados",ok:false},{t:"Gomas açucaradas",ok:false},{t:"Uma maçã",ok:true}], exp:"A fruta é um lanche mais saudável do que os doces." },
    { q:"Porque é bom partilhar os doces?", a:[{t:"É simpático e comes menos açúcar",ok:true},{t:"Para ficares sem nenhum",ok:false},{t:"Porque os doces ficam maiores",ok:false}], exp:"Partilhar é simpático e ajuda a não comer demasiado açúcar." },
  ],
  denuncia_conteudo: [
    { q:"O que acontece ao misturar bicarbonato de sódio com vinagre?", a:[{t:"Aparecem muitas bolhas",ok:true},{t:"Fica tudo congelado",ok:false},{t:"Aparece uma abóbora",ok:false}], exp:"A mistura liberta um gás e formam-se bolhas." },
    { q:"Que gás se forma nessa mistura?", a:[{t:"Hélio",ok:false},{t:"Dióxido de carbono",ok:true},{t:"Ouro líquido",ok:false}], exp:"A reação liberta dióxido de carbono." },
    { q:"Que legume roxo muda de cor em experiências?", a:[{t:"A cenoura",ok:false},{t:"A batata",ok:false},{t:"A couve-roxa",ok:true}], exp:"O sumo de couve-roxa muda de cor com ácidos e bases." },
    { q:"O que deves ter numa experiência?", a:[{t:"Óculos de proteção e um adulto por perto",ok:true},{t:"Nada, só as mãos e muita coragem",ok:false},{t:"Uma vela acesa perto do vinagre",ok:false}], exp:"A segurança vem sempre primeiro." },
    { q:"Quem faz experiências para descobrir como as coisas funcionam?", a:[{t:"Os fantasmas",ok:false},{t:"Os cientistas",ok:true},{t:"Os morcegos",ok:false}], exp:"Os cientistas fazem experiências e procuram explicações." },
  ],
  identidade_digital: [
    { q:"O que é uma lenda?", a:[{t:"Uma receita de bolo escrita num caderno",ok:false},{t:"Uma história antiga passada de pessoa em pessoa",ok:true},{t:"Uma conta de somar com muitos números",ok:false}], exp:"As lendas são contadas há muito tempo e vão mudando." },
    { q:"Que partes tem uma boa história?", a:[{t:"Só o fim e mais nada",ok:false},{t:"Só música e muito barulho",ok:false},{t:"Início, meio e fim",ok:true}], exp:"Toda a história tem início, meio e fim." },
    { q:"Que luz é boa para contar histórias de medo em segurança?", a:[{t:"Uma lanterna",ok:true},{t:"Uma fogueira dentro de casa",ok:false},{t:"Um fósforo aceso",ok:false}], exp:"Uma lanterna ou luz LED é muito mais segura do que o fogo." },
    { q:"Como se chama quem escreve histórias?", a:[{t:"Padeiro ou padeira",ok:false},{t:"Escritor ou escritora",ok:true},{t:"Maquinista de comboios",ok:false}], exp:"Quem escreve histórias é escritor ou escritora." },
    { q:"Podes inventar a tua própria história de Halloween?", a:[{t:"Não, é proibido",ok:false},{t:"Só os adultos podem",ok:false},{t:"Sim, usando a imaginação",ok:true}], exp:"A imaginação é a melhor ferramenta de um contador de histórias." },
  ],
  privacidade: [
    { q:"Tens 5 doces e recebes mais 4. Quantos ficas a ter?", a:[{t:"8",ok:false},{t:"10",ok:false},{t:"9",ok:true}], exp:"5 + 4 = 9." },
    { q:"Um saco tem 10 doces. Quantos doces há em 3 sacos?", a:[{t:"30",ok:true},{t:"13",ok:false},{t:"20",ok:false}], exp:"3 × 10 = 30." },
    { q:"Padrão: abóbora, morcego, abóbora, morcego… Qual vem a seguir?", a:[{t:"Morcego",ok:false},{t:"Abóbora",ok:true},{t:"Fantasma",ok:false}], exp:"O padrão repete abóbora e morcego, por isso segue-se a abóbora." },
    { q:"Tens 12 doces e dás metade a um amigo. Com quantos ficas?", a:[{t:"12",ok:false},{t:"4",ok:false},{t:"6",ok:true}], exp:"A metade de 12 é 6." },
    { q:"Quantas patas têm 2 aranhas?", a:[{t:"16",ok:true},{t:"8",ok:false},{t:"10",ok:false}], exp:"2 × 8 = 16." },
  ],
  contacto_desconhecidos: [
    { q:"Que número ligas numa emergência, em Portugal?", a:[{t:"112",ok:true},{t:"100",ok:false},{t:"911",ok:false}], exp:"O 112 é o número europeu de emergência." },
    { q:"Entras em casa de um desconhecido para pedir doces?", a:[{t:"Sim, se for simpático",ok:false},{t:"Não, nunca entro",ok:true},{t:"Sim, se estiver escuro",ok:false}], exp:"Nunca se entra em casa de desconhecidos." },
    { q:"Se te perderes do grupo, o que deves fazer?", a:[{t:"Ir sozinho para casa pelas ruas às escuras",ok:false},{t:"Seguir um desconhecido que diga que ajuda",ok:false},{t:"Ficar num sítio seguro e pedir ajuda a um adulto",ok:true}], exp:"Fica onde há luz e gente e pede ajuda a um adulto." },
    { q:"O que deves levar contigo à noite?", a:[{t:"Uma lanterna",ok:true},{t:"Uma bola",ok:false},{t:"Um guarda-sol",ok:false}], exp:"A lanterna ajuda-te a ver e a seres visto." },
    { q:"Quem deve ver os doces antes de os comeres?", a:[{t:"Um desconhecido",ok:false},{t:"Um adulto",ok:true},{t:"Ninguém",ok:false}], exp:"Um adulto confirma se os doces estão fechados e seguros." },
  ],
  direitos_digitais: [
    { q:"Qual destes animais é um aracnídeo?", a:[{t:"A formiga",ok:false},{t:"A aranha",ok:true},{t:"O morcego",ok:false}], exp:"A aranha é um aracnídeo, com oito patas." },
    { q:"O que acendiam os celtas no Samhain?", a:[{t:"Computadores",ok:false},{t:"Estufas",ok:false},{t:"Fogueiras",ok:true}], exp:"Os celtas acendiam fogueiras na noite do Samhain." },
    { q:"Que corpo celeste vemos cheio numa noite de lua cheia?", a:[{t:"A Lua",ok:true},{t:"O Sol",ok:false},{t:"Marte",ok:false}], exp:"Na lua cheia vemos o disco da Lua todo iluminado." },
    { q:"O que se pede no Pão-por-Deus?", a:[{t:"Dinheiro e cartões de oferta",ok:false},{t:"Pão, fruta e doces",ok:true},{t:"Brinquedos e jogos de ecrã",ok:false}], exp:"No Pão-por-Deus, as crianças recebem pão, fruta e doces." },
    { q:"Para que servem as fitas refletoras?", a:[{t:"Para fazer música quando andas depressa",ok:false},{t:"Para voares quando há muito vento",ok:false},{t:"Para os condutores te verem de noite",ok:true}], exp:"As fitas refletem a luz dos faróis." },
  ],
};

export const QUIZ_BY_THEME_AVANCADO = {
  historia_internet: [
    { q:"O que celebravam os celtas no Samhain?", a:[{t:"O início do verão e das férias grandes",ok:false},{t:"O fim das colheitas e o início do inverno",ok:true},{t:"O nascimento de um rei muito antigo",ok:false},{t:"A chegada da primavera e das flores",ok:false}], exp:"O Samhain marcava o fim do verão e das colheitas e o início da época escura do ano." },
    { q:"Como se chama, em inglês, a noite que deu nome ao Halloween?", a:[{t:"Holy Night Party",ok:false},{t:"Ghost Evening",ok:false},{t:"All Hallows’ Eve",ok:true},{t:"Harvest Moon Day",ok:false}], exp:"All Hallows’ Eve significa «véspera de Todos os Santos»." },
    { q:"Que festa cristã se celebra a 1 de novembro, logo a seguir ao Halloween?", a:[{t:"O Dia de Reis, com bolo-rei",ok:false},{t:"O Corpo de Deus, com tapetes de flores",ok:false},{t:"A Páscoa, com ovos de chocolate",ok:false},{t:"O Dia de Todos os Santos",ok:true}], exp:"A 1 de novembro celebra-se o Dia de Todos os Santos." },
    { q:"Que país é muitas vezes apontado como berço de muitas tradições do Halloween?", a:[{t:"A Irlanda",ok:true},{t:"O Brasil",ok:false},{t:"A Austrália",ok:false},{t:"O Egito",ok:false}], exp:"Muitos costumes vieram da Irlanda e foram levados para os Estados Unidos por emigrantes irlandeses, no século XIX." },
  ],
  palavras_passe: [
    { q:"Que legume era esculpido na Irlanda antes de se usarem abóboras?", a:[{t:"Cenouras",ok:false},{t:"Alfaces",ok:false},{t:"Nabos",ok:true},{t:"Pepinos",ok:false}], exp:"Na Irlanda esculpiam-se nabos para fazer lanternas." },
    { q:"Na lenda, como se chamava o homem que deu origem à lanterna?", a:[{t:"Peter",ok:false},{t:"Sam",ok:false},{t:"Oliver",ok:false},{t:"Jack",ok:true}], exp:"A lenda fala de Jack, o Forreta, que ficou condenado a andar com uma lanterna." },
    { q:"Botanicamente, a abóbora é um…", a:[{t:"Fruto",ok:true},{t:"Tubérculo",ok:false},{t:"Raiz",ok:false},{t:"Folha",ok:false}], exp:"A abóbora é um fruto, porque tem sementes lá dentro." },
    { q:"Quanto da abóbora é água, aproximadamente?", a:[{t:"Cerca de 10%",ok:false},{t:"Cerca de 90%",ok:true},{t:"Cerca de 40%",ok:false},{t:"Cerca de 60%",ok:false}], exp:"A abóbora tem cerca de 90% de água." },
  ],
  dados_pessoais: [
    { q:"Porque pode ser perigoso um fato muito comprido?", a:[{t:"Atrai mais morcegos",ok:false},{t:"Faz a noite durar mais",ok:false},{t:"Estraga a lanterna",ok:false},{t:"Podes tropeçar e cair",ok:true}], exp:"Um fato que arrasta pode fazer-te tropeçar." },
    { q:"Que material é mais seguro num fato, perto de velas ou lanternas de chama?", a:[{t:"Um que não arda facilmente",ok:true},{t:"Papel de seda",ok:false},{t:"Algodão muito solto",ok:false},{t:"Fitas de plástico soltas",ok:false}], exp:"Materiais que ardem facilmente são perigosos perto do fogo." },
    { q:"Para que servem as fitas refletoras num fato?", a:[{t:"Fazem o fato mais quente e confortável",ok:false},{t:"Os condutores veem-te melhor à noite",ok:true},{t:"Afastam os mosquitos e os morcegos",ok:false},{t:"Mudam a cor do fato quando há luz",ok:false}], exp:"As fitas refletem a luz dos faróis dos carros." },
    { q:"O que é boa ideia fazer a um fato depois da festa?", a:[{t:"Atirá-lo ao mar depois de o usar",ok:false},{t:"Queimá-lo no quintal em dia de vento",ok:false},{t:"Guardá-lo, trocá-lo ou reutilizá-lo",ok:true},{t:"Enterrá-lo no jardim para sempre",ok:false}], exp:"Reutilizar fatos é bom para o ambiente e para a carteira." },
  ],
  instituicoes_apoio: [
    { q:"Que doces é mais seguro aceitar?", a:[{t:"Os embalados e fechados",ok:true},{t:"Os abertos e sem rótulo",ok:false},{t:"Os já trincados",ok:false},{t:"Os de um desconhecido na rua",ok:false}], exp:"Só se devem comer doces fechados e embalados, depois de um adulto ver." },
    { q:"Onde deves atravessar a rua na noite de Halloween?", a:[{t:"Em qualquer sítio, a correr muito depressa",ok:false},{t:"Na passadeira, depois de olhar para os dois lados",ok:true},{t:"Entre dois carros parados na estrada",ok:false},{t:"Com os olhos fechados, a contar até dez",ok:false}], exp:"Atravessa sempre na passadeira e com atenção." },
    { q:"Porque não se devem comer muitos doces seguidos?", a:[{t:"Porque os doces desaparecem logo do saco",ok:false},{t:"Porque ficas invisível durante a noite",ok:false},{t:"O açúcar em excesso faz mal aos dentes e à saúde",ok:true},{t:"Porque os doces ficam mais caros de repente",ok:false}], exp:"Comer muito açúcar causa cáries e pode dar dores de barriga." },
    { q:"Em que dia se celebra sobretudo o Pão-por-Deus?", a:[{t:"A 31 de outubro",ok:false},{t:"A 11 de novembro",ok:false},{t:"A 25 de dezembro",ok:false},{t:"A 1 de novembro",ok:true}], exp:"Celebra-se sobretudo a 1 de novembro, Dia de Todos os Santos." },
  ],
  virus_malware: [
    { q:"Como se chama a capacidade de «ver» com sons que os morcegos têm?", a:[{t:"Telepatia",ok:false},{t:"Ecolocalização",ok:true},{t:"Fotossíntese",ok:false},{t:"Hibernação",ok:false}], exp:"Na ecolocalização, o morcego emite sons e ouve o eco." },
    { q:"Como usam os morcegos a ecolocalização?", a:[{t:"Brilham no escuro para verem o caminho",ok:false},{t:"Cheiram o vento para saberem voar",ok:false},{t:"Emitem sons agudos e escutam o eco",ok:true},{t:"Sentem o calor do Sol nas asas",ok:false}], exp:"O eco diz-lhes onde estão os obstáculos e os insetos." },
    { q:"Porque são importantes os morcegos para a natureza?", a:[{t:"Fazem chover quando batem as asas juntos",ok:false},{t:"Limpam os rios comendo todo o lixo",ok:false},{t:"Produzem luz para iluminar as cidades",ok:false},{t:"Controlam insetos e ajudam a polinizar plantas",ok:true}], exp:"Muitos morcegos comem insetos e outros ajudam a polinizar plantas." },
    { q:"O que é a hibernação, que alguns morcegos fazem?", a:[{t:"Um sono muito longo para poupar energia",ok:true},{t:"Voar para outro continente no outono",ok:false},{t:"Uma dança de grupo feita à noite",ok:false},{t:"Uma caça noturna a insetos grandes",ok:false}], exp:"Na hibernação, o corpo gasta muito pouca energia durante o tempo frio." },
  ],
  jogos_seguros: [
    { q:"A que grupo de animais pertencem as aranhas?", a:[{t:"Crustáceos",ok:false},{t:"Répteis",ok:false},{t:"Aracnídeos",ok:true},{t:"Anfíbios",ok:false}], exp:"Os aracnídeos têm oito patas e o corpo dividido em duas partes." },
    { q:"Qual é uma diferença entre aranhas e insetos?", a:[{t:"Os insetos têm oito patas e as aranhas seis",ok:false},{t:"As aranhas têm asas e os insetos não têm",ok:false},{t:"Os insetos não têm nenhuma pata no corpo",ok:false},{t:"As aranhas têm oito patas e os insetos seis",ok:true}], exp:"Contar as patas é a forma mais simples de distinguir." },
    { q:"Que animal também é um aracnídeo?", a:[{t:"O escorpião",ok:true},{t:"A formiga",ok:false},{t:"A abelha",ok:false},{t:"A borboleta",ok:false}], exp:"O escorpião tem oito patas e é parente das aranhas." },
    { q:"Porque são úteis as aranhas?", a:[{t:"Produzem mel e cera para as abelhas",ok:false},{t:"Comem insetos, como moscas e mosquitos",ok:true},{t:"Fazem as plantas crescer mais depressa",ok:false},{t:"Cantam à noite para os morcegos dormirem",ok:false}], exp:"As aranhas ajudam a controlar as populações de insetos." },
  ],
  pegada_digital: [
    { q:"O que acontece à sombra de um objeto se o aproximares da luz?", a:[{t:"Fica mais pequena",ok:false},{t:"Desaparece sempre",ok:false},{t:"Fica sem forma",ok:false},{t:"Fica maior",ok:true}], exp:"Quanto mais perto da luz está o objeto, maior é a sombra." },
    { q:"Porque se ouvem sons estranhos em casas muito antigas?", a:[{t:"A madeira, os canos e o vento fazem barulhos",ok:true},{t:"Os quadros e os espelhos falam à noite",ok:false},{t:"As paredes cantam músicas muito antigas",ok:false},{t:"As janelas têm voz própria e assobiam",ok:false}], exp:"Os sons têm causas naturais, como o vento e a madeira." },
    { q:"O que fazem os cientistas quando não percebem um mistério?", a:[{t:"Fogem com medo e não voltam mais",ok:false},{t:"Investigam, testam e procuram provas",ok:true},{t:"Esperam que o mistério desapareça sozinho",ok:false},{t:"Inventam uma resposta sem a testar",ok:false}], exp:"A ciência procura sempre explicações com provas." },
    { q:"O eco acontece quando o som…", a:[{t:"Fica preso numa vela acesa",ok:false},{t:"Se transforma em luz colorida",ok:false},{t:"Bate numa superfície e volta",ok:true},{t:"Desaparece no ar sem deixar nada",ok:false}], exp:"O eco é o som que bate numa superfície e regressa até nós." },
  ],
  fake_news: [
    { q:"Porque acreditavam antigamente em bruxas?", a:[{t:"Por falta de conhecimento sobre doenças e fenómenos naturais",ok:true},{t:"Porque todas as casas tinham televisão e filmes",ok:false},{t:"Porque as pessoas viam bruxas a voar no céu",ok:false},{t:"Porque havia vassouras elétricas muito rápidas",ok:false}], exp:"Sem explicações científicas, as pessoas recorriam a superstições." },
    { q:"Porque se associava o gato preto às bruxas?", a:[{t:"Porque os gatos pretos voam",ok:false},{t:"Por superstições e lendas antigas",ok:true},{t:"Porque comem vassouras",ok:false},{t:"Porque falam com a Lua",ok:false}], exp:"É só superstição: os gatos pretos são animais como os outros." },
    { q:"O que é uma superstição?", a:[{t:"Uma lei da física descoberta por Newton",ok:false},{t:"Um tipo de poção que as bruxas fazem",ok:false},{t:"Uma crença sem provas científicas",ok:true},{t:"Uma doença que se apanha com o frio",ok:false}], exp:"As superstições não têm base científica." },
    { q:"Qual é a melhor forma de saber se uma história assustadora é verdadeira?", a:[{t:"Acreditar no primeiro que a conta",ok:false},{t:"Acreditar se tiver muitas partilhas online",ok:false},{t:"Acreditar se for muito assustadora",ok:false},{t:"Procurar provas e fontes de confiança",ok:true}], exp:"Para saber o que é verdade, é preciso confirmar em várias fontes de confiança." },
  ],
  phishing: [
    { q:"Quem escreveu o romance «Frankenstein»?", a:[{t:"Bram Stoker",ok:false},{t:"Mary Shelley",ok:true},{t:"Roald Dahl",ok:false},{t:"Hans Christian Andersen",ok:false}], exp:"Mary Shelley escreveu «Frankenstein» e publicou-o em 1818." },
    { q:"Quem escreveu o romance «Drácula»?", a:[{t:"Mary Shelley",ok:false},{t:"Júlio Verne",ok:false},{t:"Bram Stoker",ok:true},{t:"Charles Dickens",ok:false}], exp:"Bram Stoker publicou «Drácula» em 1897." },
    { q:"Em que ano foi publicado «Frankenstein»?", a:[{t:"1918",ok:false},{t:"1718",ok:false},{t:"2018",ok:false},{t:"1818",ok:true}], exp:"A primeira edição de «Frankenstein» é de 1818." },
    { q:"Em que região se passa a história do Drácula?", a:[{t:"Na Transilvânia, na Roménia",ok:true},{t:"Nos Pampas, na Argentina",ok:false},{t:"No Alasca, nos Estados Unidos",ok:false},{t:"No deserto do Sara, em África",ok:false}], exp:"A história do Drácula passa-se na Transilvânia, uma região da Roménia." },
  ],
  dispositivos: [
    { q:"Qual é o osso mais comprido do corpo humano?", a:[{t:"O úmero",ok:false},{t:"A tíbia",ok:false},{t:"O fémur",ok:true},{t:"O crânio",ok:false}], exp:"O fémur, na coxa, é o osso mais comprido." },
    { q:"Qual é o osso mais pequeno do corpo humano?", a:[{t:"O dedo grande do pé",ok:false},{t:"A rótula",ok:false},{t:"O cóccix",ok:false},{t:"O estribo, no ouvido",ok:true}], exp:"O estribo, no ouvido, mede apenas alguns milímetros." },
    { q:"Porque nascem os bebés com mais ossos do que os adultos?", a:[{t:"Alguns ossos vão-se juntando ao crescer",ok:true},{t:"Os ossos perdem-se pelo caminho ao crescer",ok:false},{t:"Os bebés têm ossos de borracha mole",ok:false},{t:"Os adultos doam ossos aos mais novos",ok:false}], exp:"Alguns ossos pequenos fundem-se à medida que crescemos." },
    { q:"Que mineral é essencial para ter ossos fortes?", a:[{t:"Ferro",ok:false},{t:"Cálcio",ok:true},{t:"Sódio",ok:false},{t:"Cloro",ok:false}], exp:"O cálcio é o mineral mais importante para os ossos." },
  ],
  regras_familia: [
    { q:"Que dia se celebra a 2 de novembro?", a:[{t:"O Dia de Reis",ok:false},{t:"O Dia da Árvore",ok:false},{t:"O Dia do Pai",ok:false},{t:"O Dia de Finados",ok:true}], exp:"A 2 de novembro celebra-se o Dia de Finados." },
    { q:"Em que estação do ano se celebra o magusto?", a:[{t:"No outono",ok:true},{t:"Na primavera",ok:false},{t:"No verão",ok:false},{t:"Na estação das flores",ok:false}], exp:"As castanhas apanham-se no outono." },
    { q:"Em Portugal, o Dia de Todos os Santos é…", a:[{t:"Um dia normal de aulas",ok:false},{t:"Feriado nacional",ok:true},{t:"Só um feriado local",ok:false},{t:"Um dia sem nome",ok:false}], exp:"O 1 de novembro é feriado nacional em Portugal." },
    { q:"Porque é importante manter tradições como o Pão-por-Deus?", a:[{t:"Dão sempre notas mais altas na escola",ok:false},{t:"Substituem a escola e os livros todos",ok:false},{t:"Ligam as gerações e mantêm viva a nossa cultura",ok:true},{t:"São obrigatórias por lei em todo o país",ok:false}], exp:"As tradições ligam avós, pais e filhos e mantêm viva a cultura." },
  ],
  wifi_publico: [
    { q:"O que é uma «ofrenda» no Dia de Muertos?", a:[{t:"Um altar com fotografias, comida e flores",ok:true},{t:"Um desfile de carros antigos pelas ruas",ok:false},{t:"Uma corrida de bicicletas pela aldeia",ok:false},{t:"Um jogo de cartas jogado em família",ok:false}], exp:"A ofrenda é o altar onde se recordam os familiares." },
    { q:"Que língua se fala no México?", a:[{t:"Português",ok:false},{t:"Espanhol",ok:true},{t:"Francês",ok:false},{t:"Inglês",ok:false}], exp:"No México fala-se sobretudo espanhol." },
    { q:"Em que hemisfério o Halloween calha na primavera?", a:[{t:"No hemisfério norte",ok:false},{t:"Nos dois ao mesmo tempo",ok:false},{t:"No hemisfério sul",ok:true},{t:"Em nenhum",ok:false}], exp:"No hemisfério sul as estações estão invertidas, por isso outubro é primavera." },
    { q:"O que representa o Dia de Muertos?", a:[{t:"Um dia de medo e terror para as famílias",ok:false},{t:"Um concurso de fatos e máscaras assustadoras",ok:false},{t:"Uma corrida de abóboras pelas ruas da cidade",ok:false},{t:"Uma festa para recordar com alegria quem já partiu",ok:true}], exp:"É uma celebração cheia de cor, música e carinho." },
  ],
  copias_seguranca: [
    { q:"Quantos dias passam, aproximadamente, de uma lua cheia à seguinte?", a:[{t:"Cerca de 7 dias",ok:false},{t:"Cerca de 29 dias",ok:true},{t:"Cerca de 365 dias",ok:false},{t:"Cerca de 90 dias",ok:false}], exp:"Uma lunação demora cerca de 29 dias e meio." },
    { q:"Porque vemos fases diferentes da Lua?", a:[{t:"A Lua muda de tamanho todas as noites",ok:false},{t:"As nuvens cobrem uma parte da Lua",ok:false},{t:"Vemos partes diferentes da Lua iluminadas pelo Sol",ok:true},{t:"A Lua apaga-se e acende-se sozinha",ok:false}], exp:"A Lua orbita a Terra e vemos mais ou menos da face iluminada." },
    { q:"O que acontece às pupilas no escuro?", a:[{t:"Fecham-se por completo e ficam pretas",ok:false},{t:"Ficam sempre iguais, com luz ou sem ela",ok:false},{t:"Mudam de cor conforme a hora do dia",ok:false},{t:"Abrem-se para entrar mais luz",ok:true}], exp:"Pupilas maiores deixam entrar mais luz, por isso vês melhor no escuro." },
    { q:"Como se chama a luz que os pirilampos produzem?", a:[{t:"Bioluminescência",ok:true},{t:"Eletricidade estática",ok:false},{t:"Fotossíntese das folhas",ok:false},{t:"Evaporação da água",ok:false}], exp:"A bioluminescência é a luz produzida por seres vivos." },
  ],
  acessibilidade_digital: [
    { q:"Até quantos graus consegue uma coruja rodar a cabeça?", a:[{t:"Cerca de 30 graus",ok:false},{t:"Cerca de 90 graus",ok:false},{t:"Cerca de 270 graus",ok:true},{t:"360 graus completos",ok:false}], exp:"As corujas rodam a cabeça cerca de 270 graus." },
    { q:"Porque veem bem os gatos com pouca luz?", a:[{t:"Têm pequenas lanternas escondidas nos olhos",ok:false},{t:"Cheiram a luz que vem das estrelas",ok:false},{t:"Dormem de olhos abertos o dia todo",ok:false},{t:"As pupilas abrem-se muito e aproveitam a luz que há",ok:true}], exp:"Os gatos têm olhos adaptados a pouca luz." },
    { q:"Como se chamam os animais ativos de dia?", a:[{t:"Diurnos",ok:true},{t:"Noturnos",ok:false},{t:"Subterrâneos",ok:false},{t:"Aquáticos",ok:false}], exp:"Os animais diurnos andam ativos durante o dia." },
    { q:"Porque são úteis as corujas aos agricultores?", a:[{t:"Regam as plantas com a água das penas",ok:false},{t:"Comem ratos e outros animais que estragam as colheitas",ok:true},{t:"Cantam para as plantas crescerem mais",ok:false},{t:"Fazem adubo a partir da luz da Lua",ok:false}], exp:"As corujas ajudam a proteger as colheitas." },
  ],
  spam_compras: [
    { q:"O que transforma o açúcar em ácidos na boca?", a:[{t:"A saliva fria",ok:false},{t:"A pasta de dentes",ok:false},{t:"A água",ok:false},{t:"As bactérias",ok:true}], exp:"As bactérias da boca transformam o açúcar em ácidos." },
    { q:"O que faz a pasta de dentes com flúor?", a:[{t:"Ajuda a fortalecer o esmalte",ok:true},{t:"Colore os dentes de branco brilhante",ok:false},{t:"Faz os dentes crescerem mais depressa",ok:false},{t:"Serve de cola para os dentes soltos",ok:false}], exp:"O flúor torna o esmalte mais resistente." },
    { q:"Como se chama a camada dura que protege os dentes?", a:[{t:"Gengiva",ok:false},{t:"Esmalte",ok:true},{t:"Saliva",ok:false},{t:"Cartilagem",ok:false}], exp:"O esmalte é a camada mais dura do corpo e protege os dentes." },
    { q:"Qual é uma boa forma de gerir os doces do Halloween?", a:[{t:"Comê-los todos na mesma noite toda",ok:false},{t:"Escondê-los debaixo da almofada",ok:false},{t:"Guardá-los e comer poucos por dia",ok:true},{t:"Trocá-los com desconhecidos na rua",ok:false}], exp:"Comer poucos doces por dia faz bem aos dentes e à barriga." },
  ],
  denuncia_conteudo: [
    { q:"O que é o gelo seco?", a:[{t:"Dióxido de carbono sólido",ok:true},{t:"Água congelada sem sal",ok:false},{t:"Gelo muito pequeno",ok:false},{t:"Sal grosso",ok:false}], exp:"O gelo seco é dióxido de carbono no estado sólido." },
    { q:"Porque não se deve tocar no gelo seco com as mãos?", a:[{t:"Está tão quente que derrete as luvas",ok:false},{t:"Está tão frio, a cerca de −78 °C, que queima a pele",ok:true},{t:"É elétrico e dá choques muito fortes",ok:false},{t:"É pegajoso e fica colado aos dedos",ok:false}], exp:"O frio extremo pode causar queimaduras na pele." },
    { q:"Para que serve um indicador como o sumo de couve-roxa?", a:[{t:"Mede o peso exato de uma substância",ok:false},{t:"Aquece a água até ferver depressa",ok:false},{t:"Mostra pela cor se uma substância é ácida ou básica",ok:true},{t:"Limpa os vidros e deixa-os a brilhar",ok:false}], exp:"A cor muda consoante a substância seja ácida ou básica." },
    { q:"Que tipo de mudança é a mistura de bicarbonato com vinagre?", a:[{t:"Uma fase da Lua",ok:false},{t:"Uma mudança de estação",ok:false},{t:"Uma fotografia",ok:false},{t:"Uma reação química",ok:true}], exp:"Formam-se substâncias novas, por isso é uma reação química." },
  ],
  identidade_digital: [
    { q:"Que elementos tem uma história de mistério?", a:[{t:"Só números e muitas contas difíceis",ok:false},{t:"Personagens, um problema e uma solução",ok:true},{t:"Só desenhos sem nenhuma palavra escrita",ok:false},{t:"Só sons e barulhos sem história",ok:false}], exp:"Uma boa história tem personagens, um problema e uma solução." },
    { q:"O que faz o narrador?", a:[{t:"Apaga as luzes",ok:false},{t:"Desenha o mapa",ok:false},{t:"Conta a história",ok:true},{t:"Cozinha os doces",ok:false}], exp:"O narrador é quem conta a história." },
    { q:"O que torna uma história de medo mais envolvente?", a:[{t:"Usar só palavras muito difíceis e raras",ok:false},{t:"Escrever tudo em letras maiúsculas",ok:false},{t:"Repetir sempre a mesma frase no fim",ok:false},{t:"Descrever sons, cheiros e o que se sente",ok:true}], exp:"Os pormenores dos sentidos fazem o leitor sentir a cena." },
    { q:"Se uma lenda tem várias versões, o que quer dizer?", a:[{t:"Foi sendo contada e alterada ao longo do tempo",ok:true},{t:"É sempre falsa e não se pode acreditar",ok:false},{t:"Foi escrita num só dia por uma só pessoa",ok:false},{t:"Só existe dentro de um livro antigo",ok:false}], exp:"Ao passar de boca em boca, as lendas vão mudando." },
  ],
  privacidade: [
    { q:"Tens 36 doces para dividir igualmente por 4 amigos. Quantos recebe cada um?", a:[{t:"8",ok:false},{t:"12",ok:false},{t:"9",ok:true},{t:"6",ok:false}], exp:"36 ÷ 4 = 9." },
    { q:"Um morcego bate as asas 8 vezes por segundo. Quantas bate em 5 segundos?", a:[{t:"13",ok:false},{t:"45",ok:false},{t:"35",ok:false},{t:"40",ok:true}], exp:"8 × 5 = 40." },
    { q:"Uma abóbora pesa 3 kg e outra pesa 2 kg e meio. Quanto pesam juntas?", a:[{t:"5 kg e meio",ok:true},{t:"5 kg",ok:false},{t:"6 kg",ok:false},{t:"4 kg e meio",ok:false}], exp:"3 + 2,5 = 5,5 kg." },
    { q:"Qual é o próximo número da sequência 2, 4, 6, 8, …?", a:[{t:"9",ok:false},{t:"10",ok:true},{t:"12",ok:false},{t:"16",ok:false}], exp:"Soma-se sempre 2: depois do 8 vem o 10." },
  ],
  contacto_desconhecidos: [
    { q:"Porque é bom andar em grupo no Halloween?", a:[{t:"Apanham-se sempre mais doces do que sozinho",ok:false},{t:"Assim ninguém nos consegue ver na rua",ok:false},{t:"Os adultos podem ficar a dormir em casa",ok:false},{t:"É mais seguro e há sempre alguém para ajudar",ok:true}], exp:"Em grupo, estamos mais seguros e visíveis." },
    { q:"Que roupa é mais visível para os condutores à noite?", a:[{t:"Cores claras ou com fitas refletoras",ok:true},{t:"Todo preto, sem nenhuma luz ou fita",ok:false},{t:"Castanho-escuro, da cor das árvores",ok:false},{t:"Verde muito escuro, como as folhas",ok:false}], exp:"As cores claras e as fitas refletoras fazem-te ver de longe." },
    { q:"O que fazes a um doce aberto, sem embalagem?", a:[{t:"Como-o logo",ok:false},{t:"Não o como e mostro-o a um adulto",ok:true},{t:"Guardo-o no bolso",ok:false},{t:"Troco-o com um desconhecido",ok:false}], exp:"Doces sem embalagem podem não ser seguros." },
    { q:"Se um desconhecido te oferecer boleia, o que fazes?", a:[{t:"Aceito, se ele me prometer doces e chocolate",ok:false},{t:"Aceito, se a casa dele for muito perto",ok:false},{t:"Digo que não, afasto-me e conto a um adulto",ok:true},{t:"Fico sozinho na rua a pensar no que fazer",ok:false}], exp:"Nunca aceites boleias de desconhecidos." },
  ],
  direitos_digitais: [
    { q:"Que significa o Samhain para os celtas?", a:[{t:"O fim do verão e das colheitas",ok:true},{t:"O início da primavera e das flores",ok:false},{t:"O dia do rei e da sua família",ok:false},{t:"A festa do mar e dos pescadores",ok:false}], exp:"O Samhain marcava o fim do verão e das colheitas." },
    { q:"Qual é a diferença entre um animal noturno e um diurno?", a:[{t:"O noturno só vive no mar e o diurno em terra",ok:false},{t:"O noturno anda ativo de noite e o diurno de dia",ok:true},{t:"O diurno só voa e o noturno só nada",ok:false},{t:"Não há nenhuma diferença entre os dois",ok:false}], exp:"Os animais noturnos dormem de dia e andam de noite." },
    { q:"Porque é importante confirmar os doces com um adulto?", a:[{t:"Para os contar e escrever numa lista",ok:false},{t:"Para os pintar com cores de Halloween",ok:false},{t:"Para ver se estão fechados e seguros",ok:true},{t:"Para os esconder dentro de uma gaveta",ok:false}], exp:"Um adulto ajuda a garantir que os doces são seguros." },
    { q:"Porque é a abóbora considerada um fruto?", a:[{t:"Porque é muito doce e saborosa",ok:false},{t:"Porque tem uma cor laranja forte",ok:false},{t:"Porque cresce no chão da horta",ok:false},{t:"Porque tem sementes lá dentro",ok:true}], exp:"Os frutos são as partes das plantas que guardam as sementes." },
  ],
};
