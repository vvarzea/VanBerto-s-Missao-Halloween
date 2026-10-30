// ===== Conteúdo educativo e perguntas do quiz — MISSÃO HALLOWEEN =====
// HISTORY (20 cartões «Sabias que…?»), QUIZ_TIPS, QUIZ_ARTICLE e três bancos de perguntas:
//   QUIZ_BY_THEME          → Fácil (3 opções)
//   QUIZ_BY_THEME_AVANCADO → Difícil (4 opções)
//   QUIZ_BY_THEME_EXTREMO  → Extremo (4 opções; perguntas extremas + difíceis)
// Chaves h00–h19 = os 20 níveis; hb1–hb4 = os 4 bosses (revisão do respetivo mundo + enigmas).

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
    title: "🧺 O Pão-por-Deus",
    text: "O Pão-por-Deus é uma tradição portuguesa do Dia de Todos os Santos, a 1 de novembro. Nesse dia, as crianças saem cedo, em pequenos grupos, a pedir de porta em porta e a recitar versos. Recebem pão, broas, bolos, romãs e frutos secos, que guardam num saco de pano. Há quem defenda que ficou mais conhecida depois do terramoto de Lisboa, a 1 de novembro de 1755. Em Coimbra, na véspera, as crianças pediam «bolinhos e bolinhós». Hoje convive com o Dia das Bruxas: é bom manter as duas tradições!"
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
  h00: "O Halloween é na noite de 31 de outubro, a véspera do Dia de Todos os Santos.",
  h01: "Uma abóbora esculpida com uma luz lá dentro chama-se «jack-o’-lantern».",
  h02: "Escolhe um fato onde vejas bem e que não te faça tropeçar.",
  h03: "Só deves ir a casas com a luz da entrada acesa, sempre com um adulto.",
  h04: "Os morcegos não são perigosos e ajudam-nos a comer mosquitos.",
  h05: "A maioria das aranhas é inofensiva e ajuda-nos a controlar os insetos.",
  h06: "Quase todos os «sustos» têm uma explicação simples. Investiga e descobre!",
  h07: "As bruxas do Halloween são só fantasia: diverte-te e não acredites em superstições.",
  h08: "Frankenstein é o nome do cientista, não o do monstro!",
  h09: "Os teus ossos precisam de cálcio e de exercício para crescerem fortes.",
  h10: "Em família, também se recordam e celebram as nossas tradições portuguesas.",
  h11: "Cada país tem a sua forma de recordar e celebrar esta altura do ano.",
  h12: "A Lua só brilha porque reflete a luz do Sol.",
  h13: "Os gatos pretos não dão azar: são animais como os outros!",
  h14: "No Pão-por-Deus, o saco de pano enche-se de pão, broas, romãs e boa vizinhança!",
  h15: "A ciência faz bolhas, cores e «fumo»: pede sempre a um adulto para te ajudar.",
  h16: "Inventa uma história com início, meio e fim: até o susto mais pequeno conta!",
  h17: "Os padrões e as contas estão em todo o lado, até nas abóboras!",
  h18: "Em emergência, liga 112. E mostra sempre os doces a um adulto.",
  h19: "Diverte-te, sê curioso e cuida de ti e dos outros!",
  hb1: "Rei Abóbora: és um verdadeiro Guardião do Halloween!",
  hb2: "Cuidado com as teias e os fantasmas: investiga sempre!",
  hb3: "No Pão-por-Deus e no Dia de Todos os Santos, a partilha e a memória contam!",
  hb4: "Diverte-te, sê curioso e cuida de ti e dos outros!",
};

export const QUIZ_ARTICLE = {
  h00: null,
  h01: null,
  h02: null,
  h03: null,
  h04: null,
  h05: null,
  h06: null,
  h07: null,
  h08: null,
  h09: null,
  h10: null,
  h11: null,
  h12: null,
  h13: null,
  h14: null,
  h15: null,
  h16: null,
  h17: null,
  h18: null,
  h19: null,
  hb1: null,
  hb2: null,
  hb3: null,
  hb4: null,
};

export const QUIZ_BY_THEME = {
  h00: [
    { q:"Porque se celebra o Halloween a 31 de outubro?", a:[{t:"Porque é a véspera do Dia de Todos os Santos.",ok:true},{t:"Porque é o primeiro dia do inverno.",ok:false},{t:"Porque era o início do ano celta.",ok:false}], exp:"O Halloween celebra-se na véspera do Dia de Todos os Santos, que é a 1 de novembro." },
    { q:"Que povo antigo está associado à festa do Samhain?", a:[{t:"Os Romanos.",ok:false},{t:"Os Celtas.",ok:true},{t:"Os Egípcios.",ok:false}], exp:"O Samhain era uma celebração dos povos celtas associada ao fim das colheitas e à passagem para a parte mais escura do ano." },
    { q:"Que cores estão tradicionalmente associadas ao Halloween?", a:[{t:"Azul e branco.",ok:false},{t:"Verde e amarelo.",ok:false},{t:"Laranja e preto.",ok:true}], exp:"O laranja está associado às abóboras e ao outono, enquanto o preto evoca a noite e o mistério." },
    { q:"Que tradição está associada ao Halloween moderno?", a:[{t:"Esculpir abóboras e colocar luzes no seu interior.",ok:true},{t:"Decorar ovos para oferecer na primavera.",ok:false},{t:"Acender fogueiras para celebrar o solstício de verão.",ok:false}], exp:"As lanternas de abóbora tornaram-se um dos símbolos mais conhecidos do Halloween." },
    { q:"O que significa a palavra inglesa «Halloween», na sua origem?", a:[{t:"Noite dos Espíritos.",ok:false},{t:"Véspera de Todos os Santos.",ok:true},{t:"Festa das Colheitas.",ok:false}], exp:"A palavra deriva da expressão inglesa All Hallows’ Eve, associada à véspera do Dia de Todos os Santos." },
    { q:"Em que dia se celebra o Dia de Todos os Santos?", a:[{t:"1 de novembro.",ok:true},{t:"25 de dezembro.",ok:false},{t:"1 de janeiro.",ok:false}], exp:"O Dia de Todos os Santos celebra-se a 1 de novembro; o Halloween é a noite anterior." },
    { q:"Em que país o Halloween se tornou uma grande festa popular entre as crianças?", a:[{t:"Nos Estados Unidos.",ok:true},{t:"No Egito.",ok:false},{t:"Na China.",ok:false}], exp:"Muitas tradições chegaram aos Estados Unidos com emigrantes europeus, sobretudo irlandeses, e ali ganharam a forma que hoje conhecemos." },
    { q:"Segundo as crenças dos Celtas, o que podia acontecer na noite do Samhain?", a:[{t:"Os espíritos podiam visitar o mundo dos vivos.",ok:true},{t:"O Sol deixava de nascer durante um ano.",ok:false},{t:"Os animais começavam a falar.",ok:false}], exp:"Os Celtas acreditavam que, nessa noite, a fronteira entre o mundo dos vivos e o dos espíritos ficava mais fraca." },
  ],
  h01: [
    { q:"O que é uma «jack-o’-lantern»?", a:[{t:"Uma máscara usada pelos antigos Celtas.",ok:false},{t:"Uma abóbora esculpida e iluminada.",ok:true},{t:"Uma bebida tradicional de Halloween.",ok:false}], exp:"A jack-o’-lantern é uma lanterna decorativa tradicionalmente feita com uma abóbora esculpida." },
    { q:"O que se retira normalmente do interior da abóbora antes de a esculpir?", a:[{t:"As sementes e a polpa.",ok:true},{t:"As raízes e as folhas.",ok:false},{t:"A casca exterior e o caule inteiro.",ok:false}], exp:"Retira-se a polpa e as sementes para criar espaço no interior." },
    { q:"Porque se utiliza uma luz dentro da abóbora esculpida?", a:[{t:"Para conservar a abóbora durante vários meses.",ok:false},{t:"Para fazer crescer novas abóboras.",ok:false},{t:"Para iluminar os recortes e criar um efeito decorativo.",ok:true}], exp:"A luz atravessa as aberturas e torna visível a cara esculpida." },
    { q:"Que vegetal era tradicionalmente esculpido em algumas regiões da Irlanda antes da popularização da abóbora?", a:[{t:"O pepino.",ok:false},{t:"O nabo.",ok:true},{t:"A batata.",ok:false}], exp:"Em algumas tradições irlandesas utilizavam-se nabos para fazer lanternas." },
    { q:"Qual é a forma mais segura de iluminar uma abóbora decorativa dentro de casa?", a:[{t:"Com uma vela junto a cortinas.",ok:false},{t:"Com um fósforo aceso no interior.",ok:false},{t:"Com uma luz LED a pilhas.",ok:true}], exp:"Uma luz LED a pilhas evita a chama aberta e reduz o risco de incêndio." },
    { q:"O que se pode fazer com as sementes da abóbora, depois de bem lavadas?", a:[{t:"Torrá-las no forno e comê-las.",ok:true},{t:"Deitá-las sempre fora, porque são venenosas.",ok:false},{t:"Plantá-las dentro da lanterna acesa.",ok:false}], exp:"As sementes de abóbora são comestíveis: podem ser torradas e também plantadas para nascerem novas abóboras." },
    { q:"Quem deve manusear a faca para cortar a casca da abóbora?", a:[{t:"Um adulto.",ok:true},{t:"Uma criança pequena sozinha.",ok:false},{t:"Qualquer pessoa, mesmo sem cuidado.",ok:false}], exp:"A casca é dura e a faca é perigosa: o corte deve ser feito por um adulto. As crianças podem ajudar a desenhar o rosto e a limpar o interior." },
    { q:"Em que estação do ano há mais abóboras prontas a colher para o Halloween?", a:[{t:"No outono.",ok:true},{t:"Na primavera.",ok:false},{t:"No verão.",ok:false}], exp:"As abóboras colhem-se sobretudo no outono, por isso são tão usadas nas decorações de outubro." },
  ],
  h02: [
    { q:"Qual é a principal função das fitas refletoras num fato de Halloween?", a:[{t:"Tornar o fato impermeável.",ok:false},{t:"Ajudar a pessoa a ser vista quando há pouca luz.",ok:true},{t:"Impedir que o fato se suje.",ok:false}], exp:"As fitas refletem a luz dos faróis e aumentam a visibilidade." },
    { q:"Que característica deve ter uma máscara utilizada na rua?", a:[{t:"Deve permitir ver claramente e respirar sem dificuldade.",ok:true},{t:"Deve tapar completamente os olhos.",ok:false},{t:"Deve ser tão grande que cubra toda a cabeça.",ok:false}], exp:"A visão e a respiração não devem ser comprometidas pelo disfarce." },
    { q:"Qual destas escolhas é mais segura para andar na rua à noite?", a:[{t:"Uma capa comprida que arrasta no chão.",ok:false},{t:"Um fato escuro sem qualquer elemento refletor.",ok:false},{t:"Um fato que permite andar livremente e tem elementos refletores.",ok:true}], exp:"O fato deve permitir movimentação segura e tornar a pessoa mais visível." },
    { q:"O que deves fazer antes de utilizar uma maquilhagem nova?", a:[{t:"Misturá-la com tinta para ficar mais resistente.",ok:false},{t:"Verificar se é adequada à pele e seguir as instruções de utilização.",ok:true},{t:"Aplicá-la diretamente nos olhos para testar a cor.",ok:false}], exp:"A maquilhagem deve ser própria para a pele e utilizada de acordo com as instruções." },
    { q:"Qual é a melhor atitude quando um fato deixa de servir?", a:[{t:"Deitá-lo sempre no lixo indiferenciado.",ok:false},{t:"Queimá-lo para libertar espaço.",ok:false},{t:"Guardá-lo para reutilização, doá-lo ou transformá-lo.",ok:true}], exp:"Reutilizar e doar roupa ajuda a reduzir o desperdício." },
    { q:"Que calçado é mais seguro para andar na rua com um fato?", a:[{t:"Sapatos confortáveis que não escorregam.",ok:true},{t:"Pantufas largas e sem sola.",ok:false},{t:"Sapatos de salto muito alto.",ok:false}], exp:"Com calçado confortável e bem preso ao pé evitam-se quedas, sobretudo no escuro." },
    { q:"Para que serve levar uma pequena lanterna ao andar na rua à noite?", a:[{t:"Para ver o caminho e ser mais visível.",ok:true},{t:"Para tornar o fato mais pesado.",ok:false},{t:"Para gastar as pilhas mais depressa.",ok:false}], exp:"Uma pequena lanterna ajuda a ver o chão e faz com que os condutores te vejam melhor." },
    { q:"Que materiais podes reutilizar para fazer um fato em casa?", a:[{t:"Roupa velha, cartão e lençóis.",ok:true},{t:"Fios elétricos e pilhas gastas.",ok:false},{t:"Produtos de limpeza e velas.",ok:false}], exp:"Reutilizar roupa e cartão poupa dinheiro e evita lixo; os fios, as pilhas e os produtos de limpeza são perigosos." },
  ],
  h03: [
    { q:"Que frase se diz ao tocar à porta no Halloween?", a:[{t:"Doces ou travessuras!",ok:true},{t:"Bom dia, quero sopa!",ok:false},{t:"Feliz Natal!",ok:false}], exp:"A frase tradicional é «Doces ou travessuras!»." },
    { q:"Com quem deves ir pedir doces?", a:[{t:"Sozinho às escuras",ok:false},{t:"Com um adulto ou em grupo",ok:true},{t:"Com um desconhecido",ok:false}], exp:"Vai sempre acompanhado por um adulto." },
    { q:"Que casas se visitam no «doces ou travessuras»?", a:[{t:"As que estão às escuras e fechadas",ok:false},{t:"As casas abandonadas e sem janelas",ok:false},{t:"As que têm a luz da entrada acesa",ok:true}], exp:"A luz acesa indica que os moradores estão a receber visitas." },
    { q:"O que deves fazer antes de comer os doces?", a:[{t:"Mostrá-los a um adulto",ok:true},{t:"Comer tudo de uma vez",ok:false},{t:"Trocá-los com um desconhecido",ok:false}], exp:"Um adulto confirma se os doces estão bem fechados." },
    { q:"Como se chama a tradição portuguesa parecida, a 1 de novembro?", a:[{t:"Magusto",ok:false},{t:"Pão-por-Deus",ok:true},{t:"Entrudo",ok:false}], exp:"No Pão-por-Deus, as crianças pedem pão, fruta e doces." },
    { q:"Quando se pede o Pão-por-Deus?", a:[{t:"No Natal",ok:false},{t:"Na Páscoa",ok:false},{t:"A 1 de novembro",ok:true}], exp:"O Pão-por-Deus é sobretudo a 1 de novembro." },
    { q:"O que dizes quando recebes um doce?", a:[{t:"Obrigado!",ok:true},{t:"Dá-me mais!",ok:false},{t:"Não gosto.",ok:false}], exp:"Dizer obrigado é boa educação." },
    { q:"O que fazes se ninguém responder à porta?", a:[{t:"Entro para ver se está alguém dentro de casa",ok:false},{t:"Sigo para outra casa, sem insistir",ok:true},{t:"Grito muito alto até alguém aparecer à porta",ok:false}], exp:"Se ninguém abre, respeita e segue em frente." },
    { q:"Como se chama também o Halloween, em Portugal?", a:[{t:"Dia dos Reis",ok:false},{t:"Dia da Árvore",ok:false},{t:"Dia das Bruxas",ok:true}], exp:"Em Portugal, também se diz «Dia das Bruxas»." },
    { q:"Quantas vezes por dia se devem lavar os dentes?", a:[{t:"Pelo menos duas",ok:true},{t:"Nenhuma",ok:false},{t:"Uma vez por semana",ok:false}], exp:"Devemos lavar os dentes pelo menos duas vezes por dia." },
    { q:"O que deves fazer depois de comer doces?", a:[{t:"Dormir sem lavar os dentes",ok:false},{t:"Lavar os dentes ou beber água",ok:true},{t:"Comer mais doces",ok:false}], exp:"Lavar os dentes ou beber água ajuda a proteger-te." },
  ],
  h04: [
    { q:"Qual é o único mamífero que consegue voar de verdade?", a:[{t:"O esquilo",ok:false},{t:"O morcego",ok:true},{t:"O pinguim",ok:false}], exp:"Os morcegos são os únicos mamíferos capazes de voo ativo; outros mamíferos, como os esquilos-voadores, planam, mas não voam ativamente." },
    { q:"Como dormem os morcegos?", a:[{t:"Em pé, como as vacas",ok:false},{t:"Dentro de ninhos de pássaros",ok:false},{t:"Pendurados de cabeça para baixo",ok:true}], exp:"Os morcegos penduram-se de cabeça para baixo para descansar." },
    { q:"Os morcegos são…", a:[{t:"Mamíferos",ok:true},{t:"Aves",ok:false},{t:"Insetos",ok:false}], exp:"Os morcegos têm pelo e amamentam as crias, por isso são mamíferos." },
    { q:"O que comem muitos morcegos?", a:[{t:"Pedras pequenas apanhadas no chão",ok:false},{t:"Insetos, como os mosquitos",ok:true},{t:"Gelados de morango e de chocolate",ok:false}], exp:"Muitos morcegos comem insetos." },
    { q:"Quando estão os morcegos mais ativos?", a:[{t:"Ao meio-dia",ok:false},{t:"Só de manhã",ok:false},{t:"À noite",ok:true}], exp:"Os morcegos são animais noturnos." },
    { q:"Os morcegos têm penas?", a:[{t:"Não, têm pelo e asas de pele",ok:true},{t:"Sim, penas coloridas como as aves",ok:false},{t:"Só nas asas, que têm penas pequeninas",ok:false}], exp:"Os morcegos são mamíferos, por isso têm pelo." },
    { q:"Onde se escondem muitos morcegos de dia?", a:[{t:"No mar, debaixo das ondas e dos barcos",ok:false},{t:"Em grutas e telhados",ok:true},{t:"Nas nuvens, onde ninguém consegue chegar",ok:false}], exp:"Escondem-se em sítios escuros e sossegados." },
    { q:"Com que voam os morcegos?", a:[{t:"Com hélices",ok:false},{t:"Com penas de águia",ok:false},{t:"Com asas de pele",ok:true}], exp:"As asas são feitas de uma pele fina entre os dedos." },
  ],
  h05: [
    { q:"Quantas patas tem uma aranha?", a:[{t:"Seis",ok:false},{t:"Quatro",ok:false},{t:"Oito",ok:true}], exp:"As aranhas têm oito patas." },
    { q:"Para que serve a teia da aranha?", a:[{t:"Para apanhar insetos",ok:true},{t:"Para guardar água",ok:false},{t:"Para fazer sombra",ok:false}], exp:"Muitas aranhas usam a teia como armadilha para apanhar insetos." },
    { q:"As aranhas são…", a:[{t:"Insetos",ok:false},{t:"Aracnídeos",ok:true},{t:"Peixes",ok:false}], exp:"As aranhas são aracnídeos e não insetos." },
    { q:"Quantas patas tem um inseto?", a:[{t:"Oito",ok:false},{t:"Dez",ok:false},{t:"Seis",ok:true}], exp:"Os insetos têm seis patas." },
    { q:"De que é feita a teia?", a:[{t:"De seda produzida pela aranha",ok:true},{t:"De algodão apanhado nos campos",ok:false},{t:"De plástico deitado nos caixotes",ok:false}], exp:"A aranha produz a seda no seu próprio corpo." },
    { q:"Quem tece a teia?", a:[{t:"A abelha",ok:false},{t:"A aranha",ok:true},{t:"A minhoca",ok:false}], exp:"As aranhas tecem teias de seda." },
    { q:"De que se alimentam muitas aranhas?", a:[{t:"De pão",ok:false},{t:"De folhas",ok:false},{t:"De insetos",ok:true}], exp:"Muitas aranhas caçam insetos." },
    { q:"Onde se veem mais teias de aranha?", a:[{t:"Em cantos e entre ramos",ok:true},{t:"No fundo do mar, entre as algas e as pedras",ok:false},{t:"Dentro de blocos de gelo, no polo norte",ok:false}], exp:"As aranhas prendem a teia a sítios firmes." },
  ],
  h06: [
    { q:"Os fantasmas são…", a:[{t:"Personagens de histórias e lendas",ok:true},{t:"Animais reais que vivem em casas",ok:false},{t:"Seres que moram na superfície da Lua",ok:false}], exp:"Os fantasmas fazem parte de histórias e lendas." },
    { q:"Que objeto simples se usa muitas vezes para fazer um fantasma?", a:[{t:"Uma panela",ok:false},{t:"Um lençol branco",ok:true},{t:"Um guarda-chuva",ok:false}], exp:"Um lençol com dois buracos para os olhos é o fato de fantasma mais clássico." },
    { q:"O que faz estalar a madeira das casas antigas?", a:[{t:"Os fantasmas a dançar de noite no sótão",ok:false},{t:"As abóboras a mexer-se dentro do cesto",ok:false},{t:"As mudanças de temperatura e a idade da madeira",ok:true}], exp:"A madeira dilata e contrai com a temperatura e por isso range." },
    { q:"O que é uma sombra?", a:[{t:"Uma zona escura feita por um objeto que tapa a luz",ok:true},{t:"Um bicho pequenino que vive debaixo das pedras",ok:false},{t:"Uma cor nova que só se vê com a lanterna acesa",ok:false}], exp:"Quando um objeto tapa a luz, forma-se uma sombra." },
    { q:"Que luz é mais segura numa casa assombrada de brincar?", a:[{t:"Velas junto às cortinas",ok:false},{t:"Luzes de pilhas ou LED",ok:true},{t:"Fósforos acesos",ok:false}], exp:"As luzes de pilhas ou LED não têm chama, por isso são mais seguras." },
    { q:"O que é preciso para se formar uma sombra?", a:[{t:"Só escuridão",ok:false},{t:"Água e sol",ok:false},{t:"Luz e um objeto",ok:true}], exp:"Uma sombra forma-se quando um objeto tapa a luz." },
    { q:"O que podes fazer com uma lanterna e as mãos?", a:[{t:"Sombras chinesas",ok:true},{t:"Fogo, se encostares as mãos à lâmpada",ok:false},{t:"Eco, se bateres palmas contra a parede",ok:false}], exp:"As mãos fazem figuras de sombras na parede." },
    { q:"O que se ouve quando gritas numa gruta?", a:[{t:"Trovão",ok:false},{t:"Eco",ok:true},{t:"Música",ok:false}], exp:"O som bate nas paredes e volta." },
  ],
  h07: [
    { q:"Que objeto usam as bruxas das histórias para voar?", a:[{t:"Um skate",ok:false},{t:"Uma vassoura",ok:true},{t:"Um guarda-chuva grande",ok:false}], exp:"Nas histórias, as bruxas voam em vassouras." },
    { q:"Que chapéu usa uma bruxa?", a:[{t:"Um boné de beisebol",ok:false},{t:"Um capacete de obras",ok:false},{t:"Um chapéu pontiagudo",ok:true}], exp:"O chapéu pontiagudo é o símbolo da bruxa." },
    { q:"Onde preparam as bruxas as poções, nas histórias?", a:[{t:"Num caldeirão",ok:true},{t:"Num frigorífico",ok:false},{t:"Numa mochila",ok:false}], exp:"O caldeirão é o «tacho» mágico das bruxas." },
    { q:"Que animal acompanha muitas vezes a bruxa nas histórias?", a:[{t:"Um elefante",ok:false},{t:"Um gato preto",ok:true},{t:"Um golfinho",ok:false}], exp:"O gato preto é o companheiro clássico da bruxa." },
    { q:"As bruxas de Halloween são…", a:[{t:"Cientistas reais",ok:false},{t:"Professoras de voo",ok:false},{t:"Personagens de fantasia",ok:true}], exp:"São só personagens de fantasia." },
    { q:"O que há num caldeirão de bruxa, nas histórias?", a:[{t:"Uma poção",ok:true},{t:"Uma pizza",ok:false},{t:"Um gelado",ok:false}], exp:"Nas histórias, o caldeirão serve para fazer poções." },
    { q:"Que cores se associam às bruxas das histórias?", a:[{t:"Rosa e amarelo",ok:false},{t:"Preto e roxo",ok:true},{t:"Azul e branco",ok:false}], exp:"O preto e o roxo são as cores clássicas." },
    { q:"As bruxas de Halloween usam…", a:[{t:"Poderes reais, que aprenderam em escolas secretas",ok:false},{t:"Aviões a jato, para voarem pela noite fora",ok:false},{t:"Fantasia e magia de faz de conta",ok:true}], exp:"São personagens de fantasia." },
  ],
  h08: [
    { q:"Que monstro tem dentes pontiagudos e capa preta?", a:[{t:"O robô",ok:false},{t:"O dinossauro",ok:false},{t:"O vampiro",ok:true}], exp:"O vampiro, como o Drácula, tem presas e uma capa." },
    { q:"De onde vêm as múmias?", a:[{t:"Do Antigo Egito",ok:true},{t:"Da Islândia",ok:false},{t:"Da Austrália",ok:false}], exp:"As múmias mais famosas vêm do Antigo Egito." },
    { q:"Com que eram envolvidas as múmias?", a:[{t:"Com folhas de alface",ok:false},{t:"Com faixas de linho",ok:true},{t:"Com papel de embrulho",ok:false}], exp:"Os corpos eram envolvidos em faixas de linho." },
    { q:"Que monstro se transforma quando há lua cheia?", a:[{t:"O fantasma",ok:false},{t:"O esqueleto",ok:false},{t:"O lobisomem",ok:true}], exp:"Nas lendas, o lobisomem transforma-se com a lua cheia." },
    { q:"Quem criou a criatura na história de Frankenstein?", a:[{t:"Um cientista",ok:true},{t:"Uma bruxa",ok:false},{t:"Um vampiro",ok:false}], exp:"Na história, a criatura é criada por um cientista." },
    { q:"O Drácula é um…", a:[{t:"Lobisomem",ok:false},{t:"Vampiro",ok:true},{t:"Fantasma",ok:false}], exp:"O Drácula é o vampiro mais famoso." },
    { q:"Que monstro tem parafusos no pescoço, na imagem popular?", a:[{t:"O Drácula, o vampiro de capa preta e dentes",ok:false},{t:"A múmia, enrolada em faixas de linho velhas",ok:false},{t:"A criatura de Frankenstein",ok:true}], exp:"É o aspeto popular da criatura de Frankenstein." },
    { q:"Onde se passa a história das múmias?", a:[{t:"No Egito",ok:true},{t:"Na Lapónia",ok:false},{t:"No Brasil",ok:false}], exp:"As múmias vêm do Antigo Egito." },
  ],
  h09: [
    { q:"Quantos ossos tem um adulto?", a:[{t:"206",ok:true},{t:"60",ok:false},{t:"2000",ok:false}], exp:"Um adulto tem 206 ossos." },
    { q:"Que osso protege o cérebro?", a:[{t:"O fémur",ok:false},{t:"O crânio",ok:true},{t:"A costela",ok:false}], exp:"O crânio é a «caixa» de ossos que protege o cérebro." },
    { q:"O que protegem as costelas?", a:[{t:"Os pés e os dedos dos pés",ok:false},{t:"Os dentes e a língua toda",ok:false},{t:"O coração e os pulmões",ok:true}], exp:"As costelas formam uma «gaiola» à volta do coração e dos pulmões." },
    { q:"Que alimento ajuda a ter ossos fortes?", a:[{t:"O leite, por causa do cálcio",ok:true},{t:"Os rebuçados, por causa do açúcar",ok:false},{t:"Os refrigerantes, por causa das bolhas",ok:false}], exp:"O leite tem cálcio, que fortalece os ossos." },
    { q:"Para que serve o esqueleto?", a:[{t:"Faz crescer o cabelo e as unhas rapidamente",ok:false},{t:"Sustenta o corpo e protege os órgãos",ok:true},{t:"Dá a cor à pele e aos olhos todos",ok:false}], exp:"Sem esqueleto, o corpo não se aguentava em pé." },
    { q:"Que osso fica na cabeça?", a:[{t:"O fémur",ok:false},{t:"A rótula",ok:false},{t:"O crânio",ok:true}], exp:"O crânio protege o cérebro." },
    { q:"Como se chama o sítio onde dois ossos se encontram?", a:[{t:"Articulação",ok:true},{t:"Cabelo",ok:false},{t:"Unha",ok:false}], exp:"As articulações permitem dobrar o corpo." },
    { q:"Que alimentos têm cálcio?", a:[{t:"Rebuçados",ok:false},{t:"Leite e iogurte",ok:true},{t:"Batatas fritas",ok:false}], exp:"Os lacticínios são ricos em cálcio." },
  ],
  h10: [
    { q:"Que dia é o Dia de Todos os Santos?", a:[{t:"31 de outubro",ok:false},{t:"1 de novembro",ok:true},{t:"25 de abril",ok:false}], exp:"Em Portugal, o Dia de Todos os Santos assinala-se a 1 de novembro." },
    { q:"O que recebem as crianças no Pão-por-Deus?", a:[{t:"Só legumes crus",ok:false},{t:"Só brinquedos grandes",ok:false},{t:"Pão, fruta e doces",ok:true}], exp:"Tradicionalmente dão-se pão, fruta e doces." },
    { q:"O que se leva aos cemitérios no Dia de Todos os Santos?", a:[{t:"Flores",ok:true},{t:"Balões de festa",ok:false},{t:"Bolas de futebol",ok:false}], exp:"As famílias levam flores para recordar quem já partiu." },
    { q:"Que fruto seco se assa no magusto de São Martinho?", a:[{t:"Bananas",ok:false},{t:"Castanhas",ok:true},{t:"Maçãs",ok:false}], exp:"No magusto assam-se castanhas." },
    { q:"Em que dia se celebra o São Martinho?", a:[{t:"11 de março",ok:false},{t:"11 de agosto",ok:false},{t:"11 de novembro",ok:true}], exp:"O São Martinho celebra-se a 11 de novembro." },
    { q:"Em que mês é o São Martinho?", a:[{t:"Novembro",ok:true},{t:"Maio",ok:false},{t:"Agosto",ok:false}], exp:"O São Martinho é a 11 de novembro." },
    { q:"Que flores se levam muitas vezes aos cemitérios, em Portugal?", a:[{t:"Aloés",ok:false},{t:"Crisântemos",ok:true},{t:"Cardos",ok:false}], exp:"Os crisântemos são as flores tradicionais dessa altura." },
    { q:"O que quer dizer «Finados»?", a:[{t:"Os que nasceram",ok:false},{t:"Os que viajam",ok:false},{t:"Os que já partiram",ok:true}], exp:"Finados são os falecidos." },
    { q:"O Pão-por-Deus faz-se no mesmo dia que…", a:[{t:"O Dia de Todos os Santos",ok:true},{t:"O Dia de Reis, com o bolo-rei na mesa",ok:false},{t:"O São Martinho, com castanhas assadas",ok:false}], exp:"A tradição do Pão-por-Deus está associada ao Dia de Todos os Santos, a 1 de novembro, embora os costumes variem de região para região." },
  ],
  h11: [
    { q:"Que festa se celebra no México a 1 e 2 de novembro?", a:[{t:"O Carnaval, com desfiles e muitas máscaras",ok:false},{t:"A Páscoa, com ovos e amêndoas coloridas",ok:false},{t:"O Dia de Muertos, ou Dia dos Mortos",ok:true}], exp:"No Dia de Muertos recordam-se com alegria os familiares que já partiram." },
    { q:"Que flor enfeita muitos altares mexicanos?", a:[{t:"O cempasúchil, um cravo-de-defunto laranja",ok:true},{t:"A orquídea branca, que cresce nas árvores",ok:false},{t:"A tulipa preta, típica dos campos da Holanda",ok:false}], exp:"As flores laranja do cempasúchil enfeitam os altares." },
    { q:"Que doce em forma de caveira se faz no México?", a:[{t:"Bolas de chocolate",ok:false},{t:"Caveiras de açúcar",ok:true},{t:"Pirulitos de chapéu",ok:false}], exp:"As caveiras de açúcar são um símbolo do Dia de Muertos." },
    { q:"Onde nasceu o Halloween?", a:[{t:"No Japão, entre os antigos samurais",ok:false},{t:"Na Austrália, entre os povos do deserto",ok:false},{t:"Na Irlanda, entre os povos celtas",ok:true}], exp:"Os costumes do Halloween nasceram entre os celtas." },
    { q:"Em que país o Halloween é hoje uma enorme festa popular?", a:[{t:"Nos Estados Unidos",ok:true},{t:"Na Antártida",ok:false},{t:"No Vaticano",ok:false}], exp:"Nos Estados Unidos, o Halloween é uma festa muito popular." },
    { q:"Em que continente fica o México?", a:[{t:"Na Europa",ok:false},{t:"Na América",ok:true},{t:"Na Ásia",ok:false}], exp:"O México fica na América do Norte." },
    { q:"O que quer dizer «muertos»?", a:[{t:"Músicos",ok:false},{t:"Mestres",ok:false},{t:"Mortos",ok:true}], exp:"«Muertos» é «mortos» em espanhol." },
    { q:"Em que país se faziam lanternas de nabo?", a:[{t:"Na Irlanda",ok:true},{t:"No Egito",ok:false},{t:"Na Tailândia",ok:false}], exp:"A tradição das lanternas vem da Irlanda." },
    { q:"Qual destas tradições é portuguesa?", a:[{t:"O Dia de Muertos",ok:false},{t:"O Pão-por-Deus",ok:true},{t:"O Samhain",ok:false}], exp:"O Pão-por-Deus é um costume português; o Dia de Muertos é mexicano e o Samhain, celta." },
  ],
  h12: [
    { q:"A Lua tem luz própria?", a:[{t:"Não, reflete a luz do Sol",ok:true},{t:"Sim, como o Sol",ok:false},{t:"Só nas noites de Halloween",ok:false}], exp:"A Lua só brilha porque reflete a luz do Sol." },
    { q:"Como se chama a fase em que vemos a Lua toda iluminada?", a:[{t:"Lua nova",ok:false},{t:"Lua cheia",ok:true},{t:"Quarto minguante",ok:false}], exp:"Na lua cheia vemos o disco inteiro iluminado." },
    { q:"Quando vemos mais estrelas no céu?", a:[{t:"Ao meio-dia",ok:false},{t:"Debaixo de um teto",ok:false},{t:"Numa noite escura e limpa",ok:true}], exp:"Com céu escuro e sem nuvens vêem-se mais estrelas." },
    { q:"Que ave gosta de caçar de noite?", a:[{t:"A coruja",ok:true},{t:"A galinha",ok:false},{t:"O pardal",ok:false}], exp:"A coruja é uma ave noturna." },
    { q:"Qual é a nossa estrela mais próxima?", a:[{t:"A Lua",ok:false},{t:"O Sol",ok:true},{t:"Marte",ok:false}], exp:"O Sol é a estrela mais próxima da Terra. A Lua não é uma estrela." },
    { q:"Quantas luas tem a Terra?", a:[{t:"Duas",ok:false},{t:"Dez",ok:false},{t:"Uma",ok:true}], exp:"A Terra tem uma só Lua." },
    { q:"À volta de quê gira a Lua?", a:[{t:"Da Terra",ok:true},{t:"Só do Sol",ok:false},{t:"De Marte",ok:false}], exp:"A Lua orbita a Terra." },
    { q:"Quando se pode ver a Lua?", a:[{t:"Só às terças-feiras, depois do jantar",ok:false},{t:"De noite e, às vezes, de dia",ok:true},{t:"Só no verão, quando faz muito calor",ok:false}], exp:"A Lua vê-se de noite e, por vezes, também de dia." },
  ],
  h13: [
    { q:"Que ave caça à noite e tem olhos grandes?", a:[{t:"O pardal",ok:false},{t:"A coruja",ok:true},{t:"A andorinha",ok:false}], exp:"A coruja tem olhos grandes para ver bem no escuro." },
    { q:"Os gatos pretos dão azar?", a:[{t:"Não necessariamente; depende da espécie e das condições",ok:false},{t:"Só às sextas-feiras",ok:false},{t:"Não, é só uma superstição",ok:true}], exp:"Os gatos pretos são animais como os outros." },
    { q:"Como se chamam os animais ativos de noite?", a:[{t:"Noturnos",ok:true},{t:"Diurnos",ok:false},{t:"Aquáticos",ok:false}], exp:"Os animais noturnos andam ativos de noite." },
    { q:"Que animal faz «uh, uh» à noite?", a:[{t:"O cão",ok:false},{t:"A coruja",ok:true},{t:"A vaca",ok:false}], exp:"A coruja é conhecida pelo seu pio à noite." },
    { q:"Para que servem os bigodes do gato?", a:[{t:"Para cantar quando está contente",ok:false},{t:"Para voar quando vê um passarinho",ok:false},{t:"Para sentir o que está à volta",ok:true}], exp:"Os bigodes ajudam o gato a sentir o espaço." },
    { q:"Que animal tem olhos que brilham no escuro?", a:[{t:"O gato",ok:true},{t:"O peixe",ok:false},{t:"A galinha",ok:false}], exp:"Os olhos dos gatos refletem a luz." },
    { q:"Que insetos brilham à noite?", a:[{t:"As formigas",ok:false},{t:"Os pirilampos",ok:true},{t:"As joaninhas",ok:false}], exp:"Os pirilampos produzem luz." },
    { q:"Quando dormem os morcegos e as corujas?", a:[{t:"De noite",ok:false},{t:"Nunca",ok:false},{t:"De dia",ok:true}], exp:"São animais noturnos e dormem de dia." },
  ],
  h14: [
    { q:"Em que dia se pede o Pão-por-Deus?", a:[{t:"A 31 de outubro",ok:false},{t:"A 25 de dezembro",ok:false},{t:"A 1 de novembro",ok:true}], exp:"O Pão-por-Deus está associado ao Dia de Todos os Santos, a 1 de novembro, com costumes que variam entre localidades." },
    { q:"Quem costuma pedir o Pão-por-Deus?", a:[{t:"As crianças, de porta em porta",ok:true},{t:"Só os pastores, quando descem da serra",ok:false},{t:"Só os padeiros, quando fazem o pão do dia",ok:false}], exp:"São sobretudo as crianças que saem a pedir." },
    { q:"Onde se guardam as ofertas do Pão-por-Deus?", a:[{t:"Numa mala de viagem",ok:false},{t:"Num saco de pano",ok:true},{t:"Num balde de plástico",ok:false}], exp:"Os sacos de pano são os mais tradicionais." },
    { q:"O que se recebe no Pão-por-Deus?", a:[{t:"Só brinquedos grandes e jogos de tabuleiro",ok:false},{t:"Só gelados e refrigerantes de várias cores",ok:false},{t:"Pão, broas, fruta e frutos secos",ok:true}], exp:"Tradicionalmente dão-se pão, broas, bolos, romãs e frutos secos." },
    { q:"O que fazem as crianças ao pedir o Pão-por-Deus?", a:[{t:"Recitam ou cantam versos",ok:true},{t:"Dançam o vira, de mão dada, em círculo",ok:false},{t:"Tocam bateria à porta de cada casa",ok:false}], exp:"Em muitas terras pede-se com versos e lengalengas." },
    { q:"Completa o verso: «Pão por Deus, fiel de Deus, bolinho no…»", a:[{t:"Prato",ok:false},{t:"Saco",ok:true},{t:"Chão",ok:false}], exp:"Os versos variam de terra para terra; neste, o bolinho vai para o saco." },
    { q:"A que hora do dia se pede tradicionalmente o Pão-por-Deus?", a:[{t:"À meia-noite",ok:false},{t:"Só ao fim da tarde",ok:false},{t:"De manhã, bem cedinho",ok:true}], exp:"A tradição faz-se de manhã, logo cedo." },
    { q:"O Pão-por-Deus é uma tradição…", a:[{t:"Portuguesa",ok:true},{t:"Japonesa",ok:false},{t:"Egípcia",ok:false}], exp:"É um costume tradicional português." },
  ],
  h15: [
    { q:"O que acontece ao misturar bicarbonato de sódio com vinagre?", a:[{t:"Aparecem muitas bolhas",ok:true},{t:"Fica tudo congelado",ok:false},{t:"Aparece uma abóbora",ok:false}], exp:"A mistura liberta um gás e formam-se bolhas." },
    { q:"Que gás se forma nessa mistura?", a:[{t:"Hélio",ok:false},{t:"Dióxido de carbono",ok:true},{t:"Ouro líquido",ok:false}], exp:"A reação liberta dióxido de carbono." },
    { q:"Que legume roxo muda de cor em experiências?", a:[{t:"A cenoura",ok:false},{t:"A batata",ok:false},{t:"A couve-roxa",ok:true}], exp:"O sumo de couve-roxa muda de cor com ácidos e bases." },
    { q:"O que deves ter numa experiência?", a:[{t:"Óculos de proteção e um adulto por perto",ok:true},{t:"Nada, só as mãos e muita coragem",ok:false},{t:"Uma vela acesa perto do vinagre",ok:false}], exp:"A segurança vem sempre primeiro." },
    { q:"Quem faz experiências para descobrir como as coisas funcionam?", a:[{t:"Os fantasmas",ok:false},{t:"Os cientistas",ok:true},{t:"Os morcegos",ok:false}], exp:"Os cientistas fazem experiências e procuram explicações." },
    { q:"O que se mistura com vinagre para fazer bolhas?", a:[{t:"Sal grosso, daquele que se usa na cozinha",ok:false},{t:"Farinha de trigo, daquela que se usa nos bolos",ok:false},{t:"Bicarbonato de sódio",ok:true}], exp:"A mistura liberta dióxido de carbono." },
    { q:"Como se chama a ciência que estuda as substâncias?", a:[{t:"Química",ok:true},{t:"Geografia",ok:false},{t:"História",ok:false}], exp:"A química estuda as substâncias e as suas misturas." },
    { q:"O que se usa para medir líquidos?", a:[{t:"Uma régua de plástico, com marcas em centímetros",ok:false},{t:"Uma proveta ou um copo medidor",ok:true},{t:"Um relógio de pulso, com ponteiros e números",ok:false}], exp:"As provetas têm marcas para medir volumes." },
  ],
  h16: [
    { q:"O que é uma lenda?", a:[{t:"Uma receita de bolo escrita num caderno",ok:false},{t:"Uma história antiga passada de pessoa em pessoa",ok:true},{t:"Uma conta de somar com muitos números",ok:false}], exp:"As lendas são contadas há muito tempo e vão mudando." },
    { q:"Que partes tem uma boa história?", a:[{t:"Só o fim e mais nada",ok:false},{t:"Só música e muito barulho",ok:false},{t:"Início, meio e fim",ok:true}], exp:"Toda a história tem início, meio e fim." },
    { q:"Que luz é boa para contar histórias de medo em segurança?", a:[{t:"Uma lanterna",ok:true},{t:"Uma fogueira dentro de casa",ok:false},{t:"Um fósforo aceso",ok:false}], exp:"Uma lanterna ou luz LED é muito mais segura do que o fogo." },
    { q:"Como se chama quem escreve histórias?", a:[{t:"Padeiro ou padeira",ok:false},{t:"Escritor ou escritora",ok:true},{t:"Maquinista de comboios",ok:false}], exp:"Quem escreve histórias é escritor ou escritora." },
    { q:"Podes inventar a tua própria história de Halloween?", a:[{t:"Não, é proibido",ok:false},{t:"Só os adultos podem",ok:false},{t:"Sim, usando a imaginação",ok:true}], exp:"A imaginação é a melhor ferramenta de um contador de histórias." },
    { q:"Como se chama quem conta histórias?", a:[{t:"Contador de histórias",ok:true},{t:"Pintor de paredes e de quadros",ok:false},{t:"Cantor de óperas e de canções",ok:false}], exp:"Quem conta histórias é um contador de histórias." },
    { q:"Onde se encontram muitas histórias?", a:[{t:"Num semáforo",ok:false},{t:"Numa biblioteca",ok:true},{t:"Num frigorífico",ok:false}], exp:"As bibliotecas guardam milhares de histórias." },
    { q:"Que expressão abre muitas histórias?", a:[{t:"«Fim»",ok:false},{t:"«Obrigado»",ok:false},{t:"«Era uma vez»",ok:true}], exp:"«Era uma vez» é o começo clássico." },
  ],
  h17: [
    { q:"Tens 5 doces e recebes mais 4. Quantos ficas a ter?", a:[{t:"8",ok:false},{t:"10",ok:false},{t:"9",ok:true}], exp:"5 + 4 = 9." },
    { q:"Um saco tem 10 doces. Quantos doces há em 3 sacos?", a:[{t:"30",ok:true},{t:"13",ok:false},{t:"20",ok:false}], exp:"3 × 10 = 30." },
    { q:"Padrão: abóbora, morcego, abóbora, morcego… Qual vem a seguir?", a:[{t:"Morcego",ok:false},{t:"Abóbora",ok:true},{t:"Fantasma",ok:false}], exp:"O padrão repete abóbora e morcego, por isso segue-se a abóbora." },
    { q:"Tens 12 doces e dás metade a um amigo. Com quantos ficas?", a:[{t:"12",ok:false},{t:"4",ok:false},{t:"6",ok:true}], exp:"A metade de 12 é 6." },
    { q:"Quantas patas têm 2 aranhas?", a:[{t:"16",ok:true},{t:"8",ok:false},{t:"10",ok:false}], exp:"2 × 8 = 16." },
    { q:"Quantas asas têm 3 morcegos?", a:[{t:"3",ok:false},{t:"6",ok:true},{t:"9",ok:false}], exp:"3 × 2 = 6." },
    { q:"Tens 20 doces e comes 5. Quantos ficam?", a:[{t:"25",ok:false},{t:"10",ok:false},{t:"15",ok:true}], exp:"20 − 5 = 15." },
    { q:"Quantos dias tem outubro?", a:[{t:"31",ok:true},{t:"30",ok:false},{t:"28",ok:false}], exp:"Outubro tem 31 dias." },
  ],
  h18: [
    { q:"Que número ligas numa emergência, em Portugal?", a:[{t:"112",ok:true},{t:"100",ok:false},{t:"911",ok:false}], exp:"O 112 é o número europeu de emergência." },
    { q:"Entras em casa de um desconhecido para pedir doces?", a:[{t:"Sim, se for simpático",ok:false},{t:"Não, nunca entro",ok:true},{t:"Sim, se estiver escuro",ok:false}], exp:"Não entres em casas de desconhecidos; mantém-te com o grupo e com o adulto responsável." },
    { q:"Se te perderes do grupo, o que deves fazer?", a:[{t:"Ir sozinho para casa pelas ruas às escuras",ok:false},{t:"Seguir um desconhecido que diga que ajuda",ok:false},{t:"Ficar num sítio seguro e pedir ajuda a um adulto",ok:true}], exp:"Fica onde há luz e gente e pede ajuda a um adulto." },
    { q:"O que deves levar contigo à noite?", a:[{t:"Uma lanterna",ok:true},{t:"Uma bola",ok:false},{t:"Um guarda-sol",ok:false}], exp:"A lanterna ajuda-te a ver e a seres visto." },
    { q:"Quem deve ver os doces antes de os comeres?", a:[{t:"Um desconhecido",ok:false},{t:"Um adulto",ok:true},{t:"Ninguém",ok:false}], exp:"Um adulto confirma se os doces estão fechados e seguros." },
    { q:"Com quem combinas a hora de voltar a casa?", a:[{t:"Com um estranho",ok:false},{t:"Com ninguém",ok:false},{t:"Com um adulto",ok:true}], exp:"Combina sempre com um adulto." },
    { q:"Onde se atravessa a rua?", a:[{t:"Na passadeira",ok:true},{t:"Entre carros parados",ok:false},{t:"Numa curva",ok:false}], exp:"A passadeira é o sítio mais seguro." },
    { q:"O que fazes se te sentires com medo ou desconfortável?", a:[{t:"Escondo-me sozinho num sítio onde ninguém me veja",ok:false},{t:"Peço ajuda a um adulto de confiança",ok:true},{t:"Fico calado e não digo a ninguém o que se passa",ok:false}], exp:"Falar com um adulto de confiança ajuda sempre." },
  ],
  h19: [
    { q:"Qual destes animais é um aracnídeo?", a:[{t:"A formiga",ok:false},{t:"A aranha",ok:true},{t:"O morcego",ok:false}], exp:"A aranha é um aracnídeo, com oito patas." },
    { q:"O que acendiam os celtas no Samhain?", a:[{t:"O som de um trovão",ok:false},{t:"Lâmpadas elétricas",ok:false},{t:"Fogueiras",ok:true}], exp:"Os celtas acendiam fogueiras na noite do Samhain." },
    { q:"Que corpo celeste vemos cheio numa noite de lua cheia?", a:[{t:"A Lua",ok:true},{t:"O Sol",ok:false},{t:"Marte",ok:false}], exp:"Na lua cheia vemos o disco da Lua todo iluminado." },
    { q:"O que se pede no Pão-por-Deus?", a:[{t:"Dinheiro e cartões de oferta",ok:false},{t:"Pão, fruta e doces",ok:true},{t:"Brinquedos e jogos de ecrã",ok:false}], exp:"No Pão-por-Deus, as crianças recebem pão, fruta e doces." },
    { q:"Para que servem as fitas refletoras?", a:[{t:"Para fazer música quando andas depressa",ok:false},{t:"Para voares quando há muito vento",ok:false},{t:"Para os condutores te verem de noite",ok:true}], exp:"As fitas refletem a luz dos faróis." },
    { q:"O que é uma «jack-o’-lantern»?", a:[{t:"Uma abóbora esculpida com luz",ok:true},{t:"Um fantasma que vive dentro de uma lanterna",ok:false},{t:"Um doce de abóbora muito comprido e pegajoso",ok:false}], exp:"É a famosa lanterna de abóbora." },
    { q:"Que animal voa de noite e dorme de cabeça para baixo?", a:[{t:"O gato",ok:false},{t:"O morcego",ok:true},{t:"O galo",ok:false}], exp:"O morcego descansa de cabeça para baixo." },
    { q:"Que corpo gira à volta da Terra?", a:[{t:"O Sol",ok:false},{t:"Marte",ok:false},{t:"A Lua",ok:true}], exp:"A Lua é o satélite natural da Terra e orbita o nosso planeta." },
  ],
  hb1: [
    { q:"A abóbora misteriosa: Que fruto é tradicionalmente esculpido para fazer uma lanterna de Halloween?", a:[{t:"Melancia",ok:false},{t:"Maçã",ok:false},{t:"Abóbora",ok:true}], exp:"A abóbora é tradicionalmente esculpida e iluminada como decoração de Halloween." },
  ],
  hb2: [
    { q:"O animal da noite: Qual destes animais é conhecido por voar e estar ativo durante a noite?", a:[{t:"Morcego",ok:true},{t:"Galinha",ok:false},{t:"Ovelha",ok:false}], exp:"Muitas espécies de morcegos são noturnas e procuram alimento durante a noite." },
  ],
  hb3: [
    { q:"A conta dos doces: Tens 6 doces e recebes mais 3. Quantos doces tens agora?", a:[{t:"8",ok:false},{t:"9",ok:true},{t:"10",ok:false}], exp:"6 + 3 = 9." },
  ],
  hb4: [
    { q:"O código da porta: A porta abre com o número de patas de uma aranha. Qual é o código?", a:[{t:"6",ok:false},{t:"10",ok:false},{t:"8",ok:true}], exp:"Uma aranha tem oito patas." },
  ],
};

export const QUIZ_BY_THEME_AVANCADO = {
  h00: [
    { q:"Qual era uma das principais características do Samhain?", a:[{t:"Assinalava o fim das colheitas e a chegada da época escura do ano.",ok:true},{t:"Celebrava o início das sementeiras da primavera.",ok:false},{t:"Marcava o início das férias de verão.",ok:false},{t:"Comemorava a construção das primeiras cidades romanas.",ok:false}], exp:"O Samhain estava associado à transição entre o período das colheitas e a época mais escura do ano." },
    { q:"Como chegaram muitas tradições do Halloween aos Estados Unidos?", a:[{t:"Foram levadas por exploradores egípcios.",ok:false},{t:"Foram criadas por escritores norte-americanos no século XX.",ok:false},{t:"Foram difundidas, entre outros meios, por emigrantes irlandeses.",ok:true},{t:"Foram introduzidas pelos primeiros astronautas.",ok:false}], exp:"Os emigrantes irlandeses contribuíram para levar tradições relacionadas com o Halloween para os Estados Unidos, onde foram adaptadas." },
    { q:"Qual é a relação histórica entre o Samhain e o Halloween?", a:[{t:"São exatamente a mesma celebração, sem diferenças.",ok:false},{t:"O Samhain é uma das tradições antigas que influenciaram o Halloween.",ok:true},{t:"O Samhain surgiu depois do Halloween moderno.",ok:false},{t:"As duas celebrações não têm qualquer relação conhecida.",ok:false}], exp:"O Halloween moderno desenvolveu-se através de várias influências históricas e culturais, incluindo tradições associadas ao Samhain." },
    { q:"Porque é importante distinguir a origem histórica de uma tradição das lendas associadas a ela?", a:[{t:"Porque as lendas são sempre falsas em todos os seus pormenores.",ok:false},{t:"Porque as tradições antigas nunca sofreram alterações.",ok:false},{t:"Porque as fontes históricas apenas estudam festas modernas.",ok:false},{t:"Porque uma tradição pode combinar factos históricos, crenças e elementos lendários.",ok:true}], exp:"A investigação histórica procura analisar fontes e evidências, enquanto as lendas podem incluir elementos transmitidos e alterados ao longo do tempo." },
    { q:"Qual destas afirmações descreve melhor a evolução do Halloween?", a:[{t:"Manteve exatamente os mesmos costumes desde a Antiguidade.",ok:false},{t:"Foi sempre uma festa exclusivamente infantil.",ok:false},{t:"Reuniu influências históricas e culturais ao longo do tempo.",ok:true},{t:"Foi criado apenas para promover a venda de doces.",ok:false}], exp:"Os costumes do Halloween foram sendo transformados e adaptados em diferentes épocas e lugares." },
  ],
  h01: [
    { q:"Porque se popularizaram as abóboras como lanternas nos Estados Unidos?", a:[{t:"Eram maiores e mais fáceis de esculpir do que os nabos habitualmente usados em algumas tradições.",ok:true},{t:"Eram os únicos frutos disponíveis durante o inverno.",ok:false},{t:"Produziam luz naturalmente depois do pôr do sol.",ok:false},{t:"Eram utilizadas como lanternas elétricas antes da invenção da eletricidade.",ok:false}], exp:"A abóbora revelou-se um material prático para adaptar a tradição das lanternas." },
    { q:"Do ponto de vista da Botânica, porque é que a abóbora é um fruto?", a:[{t:"Porque tem uma casca dura e uma cor intensa.",ok:false},{t:"Porque cresce sempre debaixo da terra.",ok:false},{t:"Porque é utilizada sobretudo em receitas doces.",ok:false},{t:"Porque se desenvolve a partir da flor e contém sementes.",ok:true}], exp:"Em Botânica, o fruto desenvolve-se a partir do ovário da flor e contém sementes." },
    { q:"Uma abóbora pesa 4,75 kg e outra pesa 3,60 kg. Qual é a massa total?", a:[{t:"7,35 kg.",ok:false},{t:"8,35 kg.",ok:true},{t:"8,25 kg.",ok:false},{t:"9,35 kg.",ok:false}], exp:"4,75 + 3,60 = 8,35 kg." },
    { q:"Uma lanterna utiliza uma luz LED durante 4 horas por noite, durante 6 noites. Durante quantas horas esteve ligada?", a:[{t:"10 horas.",ok:false},{t:"20 horas.",ok:false},{t:"24 horas.",ok:true},{t:"28 horas.",ok:false}], exp:"4 × 6 = 24 horas." },
    { q:"Qual é a principal vantagem de reutilizar uma abóbora decorativa artificial em vários Halloweens?", a:[{t:"Reduzir o desperdício e evitar comprar uma nova decoração todos os anos.",ok:true},{t:"Garantir que todas as abóboras ficam mais leves.",ok:false},{t:"Impedir que seja necessário limpar qualquer decoração.",ok:false},{t:"Fazer com que a decoração produza luz sem energia.",ok:false}], exp:"Reutilizar objetos pode reduzir o consumo de materiais e a produção de resíduos." },
  ],
  h02: [
    { q:"Um fato tem uma capa comprida e uma máscara que reduz a visão lateral. Qual é a decisão mais segura antes de sair?", a:[{t:"Sair assim, porque o aspeto é mais importante.",ok:false},{t:"Ajustar a capa e substituir ou adaptar a máscara para permitir ver bem.",ok:true},{t:"Caminhar apenas junto à estrada para ter mais espaço.",ok:false},{t:"Retirar os elementos refletores para melhorar o disfarce.",ok:false}], exp:"O disfarce deve permitir caminhar sem tropeçar e ver os perigos à volta." },
    { q:"Porque pode ser perigoso usar materiais muito inflamáveis perto de velas?", a:[{t:"Podem incendiar-se quando ficam expostos a uma chama.",ok:true},{t:"Impedem que a luz seja refletida.",ok:false},{t:"Tornam sempre o fato demasiado pesado.",ok:false},{t:"Fazem desaparecer a iluminação da divisão.",ok:false}], exp:"Materiais inflamáveis podem arder rapidamente quando entram em contacto com uma chama." },
    { q:"Duas máscaras têm o mesmo preço. Uma permite ver claramente e a outra limita o campo de visão. Qual deve ser escolhida para uma atividade na rua?", a:[{t:"A que limita mais a visão, porque é mais realista.",ok:false},{t:"Qualquer uma, porque o preço é igual.",ok:false},{t:"A que permite ver claramente, desde que também seja adequada e segura.",ok:true},{t:"A que cobre completamente o rosto, independentemente das condições.",ok:false}], exp:"A segurança e a visibilidade devem ter prioridade sobre o aspeto do disfarce." },
    { q:"Qual destas opções representa uma escolha mais sustentável para o Halloween?", a:[{t:"Comprar um fato novo todos os anos e deitar fora o anterior.",ok:false},{t:"Utilizar materiais descartáveis em todas as decorações.",ok:false},{t:"Substituir todas as peças do disfarce mesmo quando estão em bom estado.",ok:false},{t:"Criar um disfarce com roupa e materiais que já existem em casa.",ok:true}], exp:"Reutilizar materiais reduz o consumo e permite criar disfarces originais." },
    { q:"Uma criança vai atravessar uma rua durante uma atividade de Halloween. Qual é a medida mais importante?", a:[{t:"Atravessar rapidamente sem parar.",ok:false},{t:"Seguir um adulto, usar os locais adequados e confirmar que é seguro atravessar.",ok:true},{t:"Atravessar entre carros estacionados para encurtar o caminho.",ok:false},{t:"Confiar apenas nas fitas refletoras do fato.",ok:false}], exp:"Os elementos refletores ajudam na visibilidade, mas não substituem os cuidados de segurança rodoviária." },
  ],
  h03: [
    { q:"Que doces é mais seguro aceitar?", a:[{t:"Os embalados e fechados",ok:true},{t:"Os abertos e sem rótulo",ok:false},{t:"Os já trincados",ok:false},{t:"Os de um desconhecido na rua",ok:false}], exp:"Só se devem comer doces fechados e embalados, depois de um adulto ver." },
    { q:"Onde deves atravessar a rua na noite de Halloween?", a:[{t:"Em qualquer sítio, a correr muito depressa",ok:false},{t:"Na passadeira, depois de olhar para os dois lados",ok:true},{t:"Entre dois carros parados na estrada",ok:false},{t:"Com os olhos fechados, a contar até dez",ok:false}], exp:"Atravessa sempre na passadeira e com atenção." },
    { q:"Porque não se devem comer muitos doces seguidos?", a:[{t:"Porque os doces desaparecem logo do saco",ok:false},{t:"Porque ficas invisível durante a noite",ok:false},{t:"O açúcar em excesso faz mal aos dentes e à saúde",ok:true},{t:"Porque os doces ficam mais caros de repente",ok:false}], exp:"Comer muito açúcar causa cáries e pode dar dores de barriga." },
    { q:"Em que dia se celebra sobretudo o Pão-por-Deus?", a:[{t:"A 31 de outubro",ok:false},{t:"A 11 de novembro",ok:false},{t:"A 25 de dezembro",ok:false},{t:"A 1 de novembro",ok:true}], exp:"Celebra-se sobretudo a 1 de novembro, Dia de Todos os Santos." },
    { q:"Porque é importante ir a casas conhecidas?", a:[{t:"É mais seguro e os vizinhos esperam visitas",ok:true},{t:"Têm sempre mais doces do que as casas desconhecidas",ok:false},{t:"São sempre mais bonitas e mais bem decoradas",ok:false},{t:"Ficam todas perto da escola e do centro da cidade",ok:false}], exp:"Ir a casas conhecidas e com luz acesa é mais seguro." },
    { q:"O que significa «travessura» em «doces ou travessuras»?", a:[{t:"Um castigo que os pais dão às crianças",ok:false},{t:"Uma brincadeira ou partida",ok:true},{t:"Um prémio dado a quem recolhe mais doces",ok:false},{t:"Uma festa só para adultos, em casa",ok:false}], exp:"Neste contexto, «travessura» significa uma partida ou brincadeira; não deve causar danos nem pôr ninguém em perigo." },
    { q:"O que distingue o Pão-por-Deus do «doces ou travessuras»?", a:[{t:"O Pão-por-Deus é americano e o outro é português",ok:false},{t:"O Pão-por-Deus faz-se só à noite, em dezembro",ok:false},{t:"O Pão-por-Deus é português e faz-se a 1 de novembro",ok:true},{t:"Não há qualquer diferença entre os dois costumes",ok:false}], exp:"O «doces ou travessuras» vem da tradição anglo-saxónica e faz-se a 31 de outubro; o Pão-por-Deus é português e faz-se a 1 de novembro, de manhã." },
    { q:"Uma criança tem alergia a amendoins. O que deve fazer perante um doce sem lista de ingredientes?", a:[{t:"Comê-lo só um bocadinho para ver se faz mal ao corpo",ok:false},{t:"Partilhá-lo com um amigo que não tenha nenhuma alergia",ok:false},{t:"Retirar a embalagem e provar para perceber se tem amendoim",ok:false},{t:"Não o comer até um adulto confirmar que é seguro",ok:true}], exp:"Sem informação sobre os ingredientes, não é possível confirmar que o doce é seguro para alguém com alergia." },
  ],
  h04: [
    { q:"Como se chama a capacidade de «ver» com sons que os morcegos têm?", a:[{t:"Telepatia",ok:false},{t:"Ecolocalização",ok:true},{t:"Fotossíntese",ok:false},{t:"Hibernação",ok:false}], exp:"Na ecolocalização, o morcego emite sons e ouve o eco." },
    { q:"Como usam os morcegos a ecolocalização?", a:[{t:"Brilham no escuro para verem o caminho",ok:false},{t:"Cheiram o vento para saberem voar",ok:false},{t:"Emitem sons agudos e escutam o eco",ok:true},{t:"Sentem o calor do Sol nas asas",ok:false}], exp:"O eco diz-lhes onde estão os obstáculos e os insetos." },
    { q:"Porque são importantes os morcegos para a natureza?", a:[{t:"Fazem chover quando batem as asas juntos",ok:false},{t:"Limpam os rios comendo todo o lixo",ok:false},{t:"Produzem luz para iluminar as cidades",ok:false},{t:"Controlam insetos e ajudam a polinizar plantas",ok:true}], exp:"Muitos morcegos comem insetos e outros ajudam a polinizar plantas." },
    { q:"O que é a hibernação, que alguns morcegos fazem?", a:[{t:"Um sono muito longo para poupar energia",ok:true},{t:"Voar para outro continente no outono",ok:false},{t:"Uma dança de grupo feita à noite",ok:false},{t:"Uma caça noturna a insetos grandes",ok:false}], exp:"Na hibernação, o corpo gasta muito pouca energia durante o tempo frio." },
    { q:"O que é uma colónia de morcegos?", a:[{t:"Um tipo de gruta onde só vivem os filhotes",ok:false},{t:"Um grupo grande que vive junto",ok:true},{t:"Uma doença que só os morcegos apanham",ok:false},{t:"Um som muito agudo que só os cães conseguem ouvir",ok:false}], exp:"Muitos morcegos vivem em grupo." },
    { q:"Porque descansam os morcegos de cabeça para baixo?", a:[{t:"Porque têm o sangue frio e precisam de se aquecer ao sol",ok:false},{t:"Para se esconderem do Sol dentro das grutas escuras",ok:false},{t:"Assim levantam voo mais facilmente, deixando-se cair",ok:true},{t:"Porque não têm pés e não conseguem pousar de outra forma",ok:false}], exp:"Deixam-se cair e abrem as asas para levantar voo." },
    { q:"Que característica ajuda muitos morcegos a orientar-se e a localizar presas no escuro?", a:[{t:"A luz que emitem",ok:false},{t:"A visão infravermelha de todos os indivíduos",ok:false},{t:"O magnetismo das asas",ok:false},{t:"A ecolocalização",ok:true}], exp:"Muitas espécies emitem sons e interpretam os ecos para localizar obstáculos e alimento." },
    { q:"Qual destas afirmações sobre morcegos é verdadeira?", a:[{t:"São mamíferos",ok:true},{t:"Todos bebem sangue",ok:false},{t:"São aves noturnas",ok:false},{t:"Não têm pelos em nenhuma fase da vida",ok:false}], exp:"Os morcegos são mamíferos: têm pelo e as fêmeas alimentam as crias com leite." },
  ],
  h05: [
    { q:"A que grupo de animais pertencem as aranhas?", a:[{t:"Crustáceos",ok:false},{t:"Répteis",ok:false},{t:"Aracnídeos",ok:true},{t:"Anfíbios",ok:false}], exp:"Os aracnídeos têm oito patas e o corpo dividido em duas partes." },
    { q:"Qual é uma diferença entre aranhas e insetos?", a:[{t:"Os insetos têm oito patas e as aranhas seis",ok:false},{t:"As aranhas têm asas e os insetos não têm",ok:false},{t:"Os insetos não têm nenhuma pata no corpo",ok:false},{t:"As aranhas têm oito patas e os insetos seis",ok:true}], exp:"Contar as patas é a forma mais simples de distinguir." },
    { q:"Que animal também é um aracnídeo?", a:[{t:"O escorpião",ok:true},{t:"A formiga",ok:false},{t:"A abelha",ok:false},{t:"A borboleta",ok:false}], exp:"O escorpião tem oito patas e é parente das aranhas." },
    { q:"Porque são úteis as aranhas?", a:[{t:"Produzem mel e cera para as abelhas",ok:false},{t:"Comem insetos, como moscas e mosquitos",ok:true},{t:"Fazem as plantas crescer mais depressa",ok:false},{t:"Cantam à noite para os morcegos dormirem",ok:false}], exp:"As aranhas ajudam a controlar as populações de insetos." },
    { q:"Que parte do corpo da aranha produz a seda?", a:[{t:"As patas da frente, quando estão cansadas",ok:false},{t:"Os olhos, que produzem fios muito finos",ok:false},{t:"As fieiras, no abdómen",ok:true},{t:"A cabeça, que cospe a seda para o ar",ok:false}], exp:"As fieiras são pequenos tubos que fazem sair a seda." },
    { q:"Em quantas partes principais se divide o corpo de uma aranha?", a:[{t:"Três: cabeça, tórax e abdómen, como os insetos",ok:false},{t:"Quatro: cabeça, tórax, abdómen e cauda",ok:false},{t:"Cinco: uma parte para cada par de patas",ok:false},{t:"Duas: cefalotórax e abdómen",ok:true}], exp:"Os insetos têm três partes; as aranhas, duas." },
    { q:"Para que serve a teia de muitas aranhas?", a:[{t:"Para capturar presas e, em algumas espécies, proteger ovos",ok:true},{t:"Só para dormir pendurada, longe do chão e dos predadores",ok:false},{t:"Para produzir mel e cera, como fazem as abelhas",ok:false},{t:"Para respirar debaixo de água, nas poças e nos rios",ok:false}], exp:"As teias podem servir para capturar alimento e desempenhar outras funções, como proteger os ovos." },
    { q:"Qual é uma razão para não matar automaticamente uma aranha encontrada no jardim?", a:[{t:"Todas são inofensivas em qualquer situação",ok:false},{t:"Pode ajudar a controlar outros pequenos animais",ok:true},{t:"Produz flores",ok:false},{t:"Afasta todas as doenças",ok:false}], exp:"Muitas aranhas são predadoras e ajudam a controlar populações de insetos." },
  ],
  h06: [
    { q:"O que acontece à sombra de um objeto se o aproximares da luz?", a:[{t:"Fica mais pequena",ok:false},{t:"Pode mudar de posição e de tamanho conforme a luz",ok:false},{t:"Fica sem forma",ok:false},{t:"Fica maior",ok:true}], exp:"Quanto mais perto da luz está o objeto, maior é a sombra." },
    { q:"Porque se ouvem sons estranhos em casas muito antigas?", a:[{t:"A madeira, os canos e o vento fazem barulhos",ok:true},{t:"Os quadros e os espelhos falam à noite",ok:false},{t:"As paredes cantam músicas muito antigas",ok:false},{t:"As janelas têm voz própria e assobiam",ok:false}], exp:"Os sons têm causas naturais, como o vento e a madeira." },
    { q:"O que fazem os cientistas quando não percebem um mistério?", a:[{t:"Fogem com medo e não voltam mais",ok:false},{t:"Investigam, testam e procuram provas",ok:true},{t:"Esperam que o mistério desapareça sozinho",ok:false},{t:"Inventam uma resposta sem a testar",ok:false}], exp:"A ciência procura explicações apoiadas em observações, testes e provas." },
    { q:"O eco acontece quando o som…", a:[{t:"Fica preso numa vela acesa",ok:false},{t:"Se transforma em luz colorida",ok:false},{t:"Bate numa superfície e volta",ok:true},{t:"Desaparece no ar sem deixar nada",ok:false}], exp:"O eco é o som que bate numa superfície e regressa até nós." },
    { q:"Porque muda a sombra de tamanho ao longo do dia?", a:[{t:"A Terra encolhe",ok:false},{t:"As nuvens esticam-na",ok:false},{t:"O objeto cresce",ok:false},{t:"O Sol muda de posição no céu",ok:true}], exp:"Com o Sol mais baixo, as sombras ficam mais compridas." },
    { q:"O que é a névoa?", a:[{t:"Gotas minúsculas de água suspensas no ar",ok:true},{t:"Fumo de fogueira que sobe devagar para o céu",ok:false},{t:"Poeira de estrelas que cai durante a noite",ok:false},{t:"Um gás tóxico que sai dos cemitérios antigos",ok:false}], exp:"A névoa é feita de gotículas de água muito pequenas." },
    { q:"Um ruído assustador numa casa antiga é, por si só, prova de que há um fantasma?", a:[{t:"Sim, sempre, porque os fantasmas fazem sempre barulhos",ok:false},{t:"Não; deve procurar-se uma explicação verificável",ok:true},{t:"Sim, mas só se o ruído acontecer exatamente à meia-noite",ok:false},{t:"Só se as luzes estiverem apagadas e ninguém estiver em casa",ok:false}], exp:"Um som pode ter muitas causas; é importante investigar explicações naturais antes de tirar conclusões." },
  ],
  h07: [
    { q:"Porque acreditavam antigamente em bruxas?", a:[{t:"Por falta de conhecimento sobre doenças e fenómenos naturais",ok:true},{t:"Porque todas as casas tinham televisão e viam filmes de bruxas",ok:false},{t:"Porque as pessoas viam bruxas a voar todas as noites no céu",ok:false},{t:"Porque havia vassouras elétricas muito rápidas nas aldeias",ok:false}], exp:"Sem explicações científicas, as pessoas recorriam a superstições." },
    { q:"Porque se associava o gato preto às bruxas?", a:[{t:"Porque os gatos pretos voam",ok:false},{t:"Por superstições e lendas antigas",ok:true},{t:"Porque comem vassouras",ok:false},{t:"Porque falam com a Lua",ok:false}], exp:"É só superstição: os gatos pretos são animais como os outros." },
    { q:"O que é uma superstição?", a:[{t:"Uma lei da física descoberta por Newton",ok:false},{t:"Um tipo de poção que as bruxas fazem",ok:false},{t:"Uma crença sem provas científicas",ok:true},{t:"Uma doença que se apanha com o frio",ok:false}], exp:"As superstições não têm base científica." },
    { q:"Qual é a melhor forma de saber se uma história assustadora é verdadeira?", a:[{t:"Acreditar no primeiro que a conta",ok:false},{t:"Acreditar se tiver muitas partilhas online",ok:false},{t:"Acreditar se for muito assustadora",ok:false},{t:"Procurar provas e fontes de confiança",ok:true}], exp:"Para saber o que é verdade, é preciso confirmar em várias fontes de confiança." },
    { q:"Como se chama a ciência que estuda as plantas usadas em remédios?", a:[{t:"Botânica",ok:true},{t:"Astronomia",ok:false},{t:"Geologia",ok:false},{t:"Arqueologia",ok:false}], exp:"A botânica estuda as plantas." },
    { q:"Qual é a atitude mais científica perante uma superstição?", a:[{t:"Acreditar sem pensar",ok:false},{t:"Perguntar «que provas há?»",ok:true},{t:"Ter medo",ok:false},{t:"Ignorar tudo",ok:false}], exp:"A ciência pede provas." },
    { q:"Qual é a atitude correta perante uma mistura desconhecida apresentada como poção?", a:[{t:"Prová-la só um pouco, para descobrir o sabor que tem",ok:false},{t:"Cheirá-la muito de perto, com o nariz dentro do frasco",ok:false},{t:"Não a provar nem misturar sem supervisão adequada",ok:true},{t:"Juntá-la aos produtos de limpeza para ver o que acontece",ok:false}], exp:"Misturas desconhecidas podem ser perigosas; nunca se devem provar nem combinar produtos ao acaso." },
    { q:"Qual destas afirmações distingue melhor a magia das histórias da ciência?", a:[{t:"A ciência não precisa de provas porque confia na tradição",ok:false},{t:"Uma experiência científica deve ser repetível e testável",ok:false},{t:"Não há diferença nenhuma entre a magia das histórias e a ciência",ok:false},{t:"A ciência testa explicações através de observações e experiências",ok:true}], exp:"A ciência procura testar hipóteses com evidências observáveis e métodos verificáveis." },
  ],
  h08: [
    { q:"Quem escreveu o romance «Frankenstein»?", a:[{t:"Bram Stoker",ok:false},{t:"Mary Shelley",ok:true},{t:"Roald Dahl",ok:false},{t:"Hans Christian Andersen",ok:false}], exp:"Mary Shelley escreveu «Frankenstein» e publicou-o em 1818." },
    { q:"Quem escreveu o romance «Drácula»?", a:[{t:"Mary Shelley",ok:false},{t:"Júlio Verne",ok:false},{t:"Bram Stoker",ok:true},{t:"Charles Dickens",ok:false}], exp:"Bram Stoker publicou «Drácula» em 1897." },
    { q:"Em que ano foi publicado «Frankenstein»?", a:[{t:"1918",ok:false},{t:"1718",ok:false},{t:"2018",ok:false},{t:"1818",ok:true}], exp:"A primeira edição de «Frankenstein» é de 1818." },
    { q:"Em que região se passa a história do Drácula?", a:[{t:"Na Transilvânia, na Roménia",ok:true},{t:"Nos Pampas, na Argentina",ok:false},{t:"No Alasca, nos Estados Unidos",ok:false},{t:"No deserto do Sara, em África",ok:false}], exp:"A história do Drácula passa-se na Transilvânia, uma região da Roménia." },
    { q:"Que processo preservava os corpos no Antigo Egito?", a:[{t:"A fotossíntese",ok:false},{t:"A mumificação",ok:true},{t:"A condensação",ok:false},{t:"A reciclagem",ok:false}], exp:"A mumificação conservava os corpos durante séculos." },
    { q:"Em que século foram publicados «Frankenstein» e «Drácula»?", a:[{t:"No século XVI",ok:false},{t:"No século XX",ok:false},{t:"No século XIX",ok:true},{t:"No século XVIII",ok:false}], exp:"«Frankenstein» é de 1818 e «Drácula» de 1897." },
  ],
  h09: [
    { q:"Qual é o osso mais comprido do corpo humano?", a:[{t:"O úmero",ok:false},{t:"A tíbia",ok:false},{t:"O fémur",ok:true},{t:"O crânio",ok:false}], exp:"O fémur, na coxa, é o osso mais comprido." },
    { q:"Qual é o osso mais pequeno do corpo humano?", a:[{t:"O dedo grande do pé",ok:false},{t:"A rótula",ok:false},{t:"O cóccix",ok:false},{t:"O estribo, no ouvido",ok:true}], exp:"O estribo, no ouvido, mede apenas alguns milímetros." },
    { q:"Porque nascem os bebés com mais ossos do que os adultos?", a:[{t:"Alguns ossos vão-se juntando ao crescer",ok:true},{t:"Os ossos perdem-se pelo caminho ao crescer",ok:false},{t:"Os bebés têm ossos de borracha mole",ok:false},{t:"Os adultos doam ossos aos mais novos",ok:false}], exp:"Alguns ossos pequenos fundem-se à medida que crescemos." },
    { q:"Que mineral é essencial para ter ossos fortes?", a:[{t:"Ferro",ok:false},{t:"Cálcio",ok:true},{t:"Sódio",ok:false},{t:"Cloro",ok:false}], exp:"O cálcio é o mineral mais importante para os ossos." },
    { q:"O que faz a medula óssea?", a:[{t:"Guarda as memórias e os sonhos de cada pessoa",ok:false},{t:"Faz a digestão de tudo o que comemos",ok:false},{t:"Produz glóbulos do sangue",ok:true},{t:"Produz o suor que arrefece o corpo no verão",ok:false}], exp:"A medula, dentro dos ossos, fabrica células do sangue." },
    { q:"O que fazem os músculos em relação aos ossos?", a:[{t:"Protegem o cérebro dentro da caixa do crânio",ok:false},{t:"Produzem cálcio para os ossos ficarem fortes",ok:false},{t:"Fabricam o sangue que circula pelo corpo todo",ok:false},{t:"Puxam os ossos e fazem-nos mexer",ok:true}], exp:"Sem músculos, os ossos não se mexiam." },
    { q:"Qual é uma das funções do esqueleto?", a:[{t:"Proteger órgãos e dar suporte ao corpo",ok:true},{t:"Produzir luz",ok:false},{t:"Fazer o sangue circular sozinho",ok:false},{t:"Substituir todos os músculos",ok:false}], exp:"O esqueleto dá suporte ao corpo, protege órgãos e participa no movimento." },
  ],
  h10: [
    { q:"Que dia se celebra a 2 de novembro?", a:[{t:"O Dia de Reis",ok:false},{t:"O Dia da Árvore",ok:false},{t:"O Dia do Pai",ok:false},{t:"O Dia de Finados",ok:true}], exp:"A 2 de novembro celebra-se o Dia de Finados." },
    { q:"Em que estação do ano se celebra o magusto?", a:[{t:"No outono",ok:true},{t:"Na primavera",ok:false},{t:"No verão",ok:false},{t:"Na estação das flores",ok:false}], exp:"As castanhas apanham-se no outono." },
    { q:"Em Portugal, o Dia de Todos os Santos é…", a:[{t:"Um dia normal de aulas",ok:false},{t:"Feriado nacional",ok:true},{t:"Só um feriado local",ok:false},{t:"Um dia sem nome",ok:false}], exp:"O 1 de novembro é feriado nacional em Portugal." },
    { q:"Porque é importante manter tradições como o Pão-por-Deus?", a:[{t:"Dão sempre notas mais altas na escola",ok:false},{t:"Substituem a escola e os livros todos",ok:false},{t:"Ligam as gerações e mantêm viva a nossa cultura",ok:true},{t:"São obrigatórias por lei em todo o país",ok:false}], exp:"As tradições ligam avós, pais e filhos e mantêm viva a cultura." },
    { q:"O que é um magusto?", a:[{t:"Uma feira de livros",ok:false},{t:"Uma corrida de bicicletas",ok:false},{t:"Um tipo de pão",ok:false},{t:"Uma festa com castanhas assadas",ok:true}], exp:"O magusto celebra o outono com castanhas." },
    { q:"Porque se levam flores aos cemitérios?", a:[{t:"Para recordar com carinho quem já partiu",ok:true},{t:"Para enfeitar o chão do cemitério com muita cor",ok:false},{t:"Para as vender às pessoas que passam à porta",ok:false},{t:"Para afastar as aves que pousam nas campas",ok:false}], exp:"As flores são um gesto de saudade e respeito." },
    { q:"Qual é a ligação entre o Dia de Todos os Santos e o Pão-por-Deus?", a:[{t:"Não têm qualquer ligação",ok:false},{t:"As crianças pedem o Pão-por-Deus nesse dia",ok:true},{t:"O Pão-por-Deus é só no Natal",ok:false},{t:"O Pão-por-Deus é a 2 de novembro, sem exceção",ok:false}], exp:"O Pão-por-Deus faz-se tradicionalmente a 1 de novembro." },
    { q:"Qual é a melhor descrição do Pão-por-Deus em Portugal?", a:[{t:"Uma tradição igual em todas as localidades, sem variações regionais",ok:false},{t:"Uma festa exclusivamente de verão, feita na praia",ok:false},{t:"Uma tradição em que as crianças pedem ou recebem pão, fruta e doces",ok:true},{t:"Uma competição de disfarces entre as aldeias vizinhas",ok:false}], exp:"A tradição varia de região para região, mas está associada a pedidos e ofertas, muitas vezes de alimentos." },
    { q:"Como deves agir se uma tradição local for diferente daquela que conheces?", a:[{t:"Dizer que está errada",ok:false},{t:"Impedir que se realize",ok:false},{t:"Assumir que todas as localidades fazem igual",ok:false},{t:"Respeitar a comunidade e procurar saber mais",ok:true}], exp:"As tradições podem variar entre regiões; conhecê-las ajuda a respeitar o património cultural." },
  ],
  h11: [
    { q:"O que é uma «ofrenda» no Dia de Muertos?", a:[{t:"Um altar com fotografias, comida e flores",ok:true},{t:"Um desfile de carros antigos pelas ruas",ok:false},{t:"Uma corrida de bicicletas pela aldeia",ok:false},{t:"Um jogo de cartas jogado em família",ok:false}], exp:"A ofrenda é o altar onde se recordam os familiares." },
    { q:"Que língua se fala no México?", a:[{t:"Português",ok:false},{t:"Espanhol",ok:true},{t:"Francês",ok:false},{t:"Inglês",ok:false}], exp:"No México fala-se sobretudo espanhol." },
    { q:"Em que hemisfério o Halloween calha na primavera?", a:[{t:"No hemisfério norte",ok:false},{t:"Nos dois ao mesmo tempo",ok:false},{t:"No hemisfério sul",ok:true},{t:"Em nenhum",ok:false}], exp:"No hemisfério sul as estações estão invertidas, por isso outubro é primavera." },
    { q:"O que representa o Dia de Muertos?", a:[{t:"Um dia de medo e terror para as famílias",ok:false},{t:"Um concurso de fatos e máscaras assustadoras",ok:false},{t:"Uma corrida de abóboras pelas ruas da cidade",ok:false},{t:"Uma festa para recordar com alegria quem já partiu",ok:true}], exp:"É uma celebração cheia de cor, música e carinho." },
    { q:"Para que servem as caveiras de açúcar no Dia de Muertos?", a:[{t:"Decoram os altares e homenageiam quem partiu",ok:true},{t:"São jogadas como bolas nos desfiles que se fazem na rua",ok:false},{t:"São comidas depressa, antes de os altares estarem prontos",ok:false},{t:"Servem para afastar os mosquitos dos cemitérios à noite",ok:false}], exp:"As caveiras de açúcar são um símbolo de homenagem." },
    { q:"O que une muitas tradições de países diferentes?", a:[{t:"Usar sempre o mesmo fato em todos os países",ok:false},{t:"Recordar e festejar em comunidade",ok:true},{t:"Falar exatamente a mesma língua em todo o lado",ok:false},{t:"Comer o mesmo doce no mesmo dia do ano",ok:false}], exp:"Mesmo diferentes, juntam famílias e comunidades." },
    { q:"Em que país se tornou especialmente popular a tradição moderna de pedir «doces ou travessuras»?", a:[{t:"Antártida",ok:false},{t:"Nepal",ok:false},{t:"Estados Unidos",ok:true},{t:"Islândia exclusivamente",ok:false}], exp:"A tradição moderna de pedir doces tornou-se particularmente popular nos Estados Unidos, embora existam costumes semelhantes noutros locais." },
    { q:"Qual é uma forma respeitosa de conhecer tradições de Halloween de outros países?", a:[{t:"Dizer que são inferiores às tradições que já conhecemos",ok:false},{t:"Compará-las sem nunca ouvir as pessoas que as celebram",ok:false},{t:"Assumir que em todo o lado se celebra da mesma forma",ok:false},{t:"Pesquisar fontes fiáveis e reconhecer diferenças culturais",ok:true}], exp:"A pesquisa e o respeito pelas diferenças ajudam a compreender tradições culturais." },
  ],
  h12: [
    { q:"Quantos dias passam, aproximadamente, de uma lua cheia à seguinte?", a:[{t:"Cerca de 7 dias",ok:false},{t:"Cerca de 29 dias",ok:true},{t:"Cerca de 365 dias",ok:false},{t:"Cerca de 90 dias",ok:false}], exp:"Uma lunação demora cerca de 29 dias e meio." },
    { q:"Porque vemos fases diferentes da Lua?", a:[{t:"A Lua muda de tamanho todas as noites, como um balão",ok:false},{t:"As nuvens cobrem uma parte da Lua durante o mês",ok:false},{t:"Vemos partes diferentes da Lua iluminadas pelo Sol",ok:true},{t:"A Lua apaga-se e acende-se sozinha todas as semanas",ok:false}], exp:"A Lua orbita a Terra e vemos mais ou menos da face iluminada." },
    { q:"O que acontece às pupilas no escuro?", a:[{t:"Fecham-se por completo e ficam pretas",ok:false},{t:"Mudam conforme a posição da fonte de luz",ok:false},{t:"Mudam de cor conforme a hora do dia",ok:false},{t:"Abrem-se para entrar mais luz",ok:true}], exp:"Pupilas maiores deixam entrar mais luz, por isso vês melhor no escuro." },
    { q:"Como se chama a luz que os pirilampos produzem?", a:[{t:"Bioluminescência",ok:true},{t:"Eletricidade estática",ok:false},{t:"Fotossíntese das folhas",ok:false},{t:"Evaporação da água",ok:false}], exp:"A bioluminescência é a luz produzida por seres vivos." },
    { q:"Como se chama a fase em que não vemos a Lua iluminada?", a:[{t:"Lua cheia",ok:false},{t:"Lua nova",ok:true},{t:"Quarto crescente",ok:false},{t:"Eclipse",ok:false}], exp:"Na lua nova a face iluminada está virada para o lado contrário." },
    { q:"O que se vê num quarto crescente?", a:[{t:"Quatro cantos iluminados, como uma moldura de luz",ok:false},{t:"A Lua toda iluminada, com um círculo perfeito de luz",ok:false},{t:"Metade do disco iluminada, a aumentar",ok:true},{t:"Só uma sombra escura, sem nenhuma parte iluminada",ok:false}], exp:"Vê-se metade da Lua e a parte clara vai crescendo." },
    { q:"O que provoca principalmente o brilho da Lua que vemos da Terra?", a:[{t:"Luz própria produzida pela Lua",ok:false},{t:"Luz das estrelas concentrada na Lua",ok:false},{t:"Eletricidade no espaço",ok:false},{t:"Luz solar refletida pela superfície lunar",ok:true}], exp:"A Lua é visível sobretudo porque reflete a luz do Sol." },
  ],
  h13: [
    { q:"Até quantos graus consegue uma coruja rodar a cabeça?", a:[{t:"Cerca de 30 graus",ok:false},{t:"Cerca de 90 graus",ok:false},{t:"Cerca de 270 graus",ok:true},{t:"360 graus completos",ok:false}], exp:"As corujas rodam a cabeça cerca de 270 graus." },
    { q:"Porque veem bem os gatos com pouca luz?", a:[{t:"Têm pequenas lanternas escondidas nos olhos",ok:false},{t:"Cheiram a luz que vem das estrelas",ok:false},{t:"Dormem de olhos abertos o dia todo",ok:false},{t:"As pupilas abrem-se muito e aproveitam a luz que há",ok:true}], exp:"Os gatos têm olhos adaptados a pouca luz." },
    { q:"Como se chamam os animais ativos de dia?", a:[{t:"Diurnos",ok:true},{t:"Noturnos",ok:false},{t:"Subterrâneos",ok:false},{t:"Aquáticos",ok:false}], exp:"Os animais diurnos andam ativos durante o dia." },
    { q:"Porque são úteis as corujas aos agricultores?", a:[{t:"Regam as plantas com a água que guardam nas penas",ok:false},{t:"Comem ratos e outros animais que estragam as colheitas",ok:true},{t:"Cantam para as plantas crescerem mais depressa",ok:false},{t:"Fazem adubo a partir da luz da Lua e das estrelas",ok:false}], exp:"As corujas ajudam a proteger as colheitas." },
    { q:"O que é a visão noturna?", a:[{t:"Ver cores muito vivas",ok:false},{t:"Ver através de paredes",ok:false},{t:"Ver bem com pouca luz",ok:true},{t:"Ver o futuro",ok:false}], exp:"Alguns animais veem bem no escuro." },
    { q:"Porque voam as corujas quase sem fazer barulho?", a:[{t:"Têm asas muito pequenas, que quase não se mexem",ok:false},{t:"Voam tão alto que o som não chega ao chão",ok:false},{t:"Não têm asas e deslocam-se aos saltos pelo chão",ok:false},{t:"As penas macias reduzem o ruído das asas",ok:true}], exp:"As penas das corujas abafam o som do voo." },
    { q:"Qual destas aves é conhecida por ter adaptações para caçar à noite?", a:[{t:"Coruja",ok:true},{t:"Pavão",ok:false},{t:"Avestruz",ok:false},{t:"Pinguim-imperador",ok:false}], exp:"Muitas corujas têm adaptações visuais e auditivas úteis para caçar em condições de pouca luz." },
    { q:"Porque pode ser útil para um animal noturno ter uma audição apurada?", a:[{t:"Para produzir luz própria e ver melhor no escuro",ok:false},{t:"Para detetar sons de presas, predadores ou outros animais",ok:true},{t:"Para mudar de espécie quando chega a noite fria",ok:false},{t:"Para não precisar de comer durante o inverno todo",ok:false}], exp:"A audição pode ajudar a localizar alimento e detetar ameaças em ambientes escuros." },
  ],
  h14: [
    { q:"Que acontecimento de 1 de novembro de 1755 é muitas vezes ligado ao Pão-por-Deus?", a:[{t:"A fundação de Portugal",ok:false},{t:"A descoberta do Brasil",ok:false},{t:"Uma grande tempestade no mar",ok:false},{t:"O terramoto de Lisboa",ok:true}], exp:"Há quem defenda que a tradição ficou mais conhecida depois do terramoto, quando muitas famílias ficaram sem nada." },
    { q:"Em Coimbra, na véspera de 1 de novembro, o que pediam as crianças?", a:[{t:"Bolinhos e bolinhós",ok:true},{t:"Santoros e figos",ok:false},{t:"Pão e vinho",ok:false},{t:"Castanhas e nozes",ok:false}], exp:"Em Coimbra pedia-se «bolinhos e bolinhós», por vezes com uma abóbora vazia." },
    { q:"O que usavam em Coimbra, em alguns sítios, para recolher as ofertas?", a:[{t:"Um saco de plástico comprado na loja da aldeia",ok:false},{t:"Uma caixa de cartão ou uma abóbora vazia",ok:true},{t:"Um carrinho de mão cheio de palha",ok:false},{t:"Uma cesta de vime com uma tampa de madeira",ok:false}], exp:"A abóbora vazia, com dois buracos como olhos, também servia." },
    { q:"Que costume antigo das ilhas britânicas se parece com o Pão-por-Deus?", a:[{t:"O chá das cinco, servido em casas de campo ao fim da tarde",ok:false},{t:"A chegada do Pai Natal numa carruagem puxada por renas",ok:false},{t:"Os «soul cakes», bolos oferecidos em troca de orações",ok:true},{t:"O Carnaval de Londres, com desfiles de máscaras e carros",ok:false}], exp:"Pedia-se um bolo de porta em porta, em troca de orações pelos mortos." },
    { q:"O que distingue o Pão-por-Deus do «doces ou travessuras»?", a:[{t:"É americano e faz-se de noite, nos dias de Halloween",ok:false},{t:"Não há qualquer diferença entre os dois costumes",ok:false},{t:"É só para adultos e faz-se dentro das igrejas",ok:false},{t:"É português e faz-se a 1 de novembro, de manhã",ok:true}], exp:"O «doces ou travessuras» vem da tradição anglo-saxónica e faz-se a 31 de outubro, à noite." },
    { q:"Porque é importante manter o Pão-por-Deus vivo?", a:[{t:"Mantém a nossa cultura e a partilha entre vizinhos",ok:true},{t:"Dá sempre mais doces do que o Halloween dá",ok:false},{t:"É obrigatório por lei em todas as escolas",ok:false},{t:"Substitui as aulas durante a semana de novembro",ok:false}], exp:"As tradições ligam gerações, vizinhos e comunidades." },
    { q:"Qual destes alimentos pode fazer parte das ofertas tradicionais do Pão-por-Deus, dependendo da região?", a:[{t:"Baterias",ok:false},{t:"Castanhas ou frutos",ok:true},{t:"Pilhas",ok:false},{t:"Peças de computador",ok:false}], exp:"As ofertas variam, mas podem incluir frutos, pão, doces ou outros alimentos." },
    { q:"Porque se deve evitar afirmar que todas as localidades têm exatamente o mesmo costume?", a:[{t:"Porque nenhuma localidade tem tradições",ok:false},{t:"Porque só existe uma tradição no mundo",ok:false},{t:"Porque os costumes variam regionalmente",ok:true},{t:"Porque as tradições mudam a cada hora",ok:false}], exp:"Os costumes podem mudar de região para região e ao longo do tempo." },
  ],
  h15: [
    { q:"O que é o gelo seco?", a:[{t:"Dióxido de carbono sólido",ok:true},{t:"Água congelada sem sal",ok:false},{t:"Gelo muito pequeno",ok:false},{t:"Sal grosso",ok:false}], exp:"O gelo seco é dióxido de carbono no estado sólido." },
    { q:"Porque não se deve tocar no gelo seco com as mãos?", a:[{t:"Está tão quente que derrete as luvas e os sapatos",ok:false},{t:"Está tão frio, a cerca de −78 °C, que queima a pele",ok:true},{t:"É elétrico e dá choques muito fortes às crianças",ok:false},{t:"É pegajoso e fica colado aos dedos durante horas",ok:false}], exp:"O frio extremo pode causar queimaduras na pele." },
    { q:"Para que serve um indicador como o sumo de couve-roxa?", a:[{t:"Mede o peso exato de uma substância pequenina",ok:false},{t:"Aquece a água até ferver depressa e sem fogo",ok:false},{t:"Mostra pela cor se uma substância é ácida ou básica",ok:true},{t:"Limpa os vidros e deixa-os a brilhar de novo",ok:false}], exp:"A cor muda consoante a substância seja ácida ou básica." },
    { q:"Que tipo de mudança é a mistura de bicarbonato com vinagre?", a:[{t:"Uma fase da Lua",ok:false},{t:"Uma mudança de estação",ok:false},{t:"Uma fotografia",ok:false},{t:"Uma reação química",ok:true}], exp:"Formam-se substâncias novas, por isso é uma reação química." },
    { q:"O que é um ácido, como o vinagre?", a:[{t:"Uma substância de sabor azedo",ok:true},{t:"Uma pedra preciosa, muito dura e brilhante",ok:false},{t:"Um gás invisível que se encontra só em laboratórios",ok:false},{t:"Uma poção mágica que as bruxas inventaram",ok:false}], exp:"Os ácidos, como o vinagre e o limão, têm sabor azedo." },
    { q:"Porque se repete uma experiência várias vezes?", a:[{t:"Para gastar os ingredientes que sobraram do dia",ok:false},{t:"Para confirmar se o resultado se repete",ok:true},{t:"Porque é divertido fazer sempre a mesma coisa",ok:false},{t:"Para que ninguém repare nos erros do início",ok:false}], exp:"Repetir confirma os resultados." },
    { q:"O que é uma hipótese numa investigação científica?", a:[{t:"Uma resposta que nunca pode mudar",ok:false},{t:"Uma opinião sem possibilidade de verificação",ok:false},{t:"Uma explicação provisória que pode ser testada",ok:true},{t:"Uma conclusão antes de observar qualquer coisa",ok:false}], exp:"Uma hipótese é uma explicação provisória que pode ser avaliada com observações ou experiências." },
    { q:"Porque é importante mudar apenas uma variável de cada vez numa experiência simples?", a:[{t:"Para tornar os resultados impossíveis de comparar",ok:false},{t:"Para garantir que a hipótese está certa",ok:false},{t:"Para evitar registar dados",ok:false},{t:"Para perceber melhor o efeito dessa variável",ok:true}], exp:"Controlar as restantes condições ajuda a perceber qual variável pode ter causado a diferença observada." },
  ],
  h16: [
    { q:"Que elementos tem uma história de mistério?", a:[{t:"Só números e muitas contas difíceis",ok:false},{t:"Personagens, um problema e uma solução",ok:true},{t:"Só desenhos sem nenhuma palavra escrita",ok:false},{t:"Só sons e barulhos sem história",ok:false}], exp:"Uma boa história tem personagens, um problema e uma solução." },
    { q:"O que faz o narrador?", a:[{t:"Apaga as luzes",ok:false},{t:"Desenha o mapa",ok:false},{t:"Conta a história",ok:true},{t:"Cozinha os doces",ok:false}], exp:"O narrador é quem conta a história." },
    { q:"O que torna uma história de medo mais envolvente?", a:[{t:"Usar só palavras muito difíceis e raras",ok:false},{t:"Escrever tudo em letras maiúsculas",ok:false},{t:"Repetir sempre a mesma frase no fim",ok:false},{t:"Descrever sons, cheiros e o que se sente",ok:true}], exp:"Os pormenores dos sentidos fazem o leitor sentir a cena." },
    { q:"Se uma lenda tem várias versões, o que quer dizer?", a:[{t:"Foi sendo contada e alterada ao longo do tempo",ok:true},{t:"É sempre falsa e não se pode acreditar",ok:false},{t:"Foi escrita num só dia por uma só pessoa",ok:false},{t:"Só existe dentro de um livro antigo",ok:false}], exp:"Ao passar de boca em boca, as lendas vão mudando." },
    { q:"O que é o herói de uma história?", a:[{t:"O autor, que escreve a história no princípio do livro",ok:false},{t:"A personagem principal que enfrenta o problema",ok:true},{t:"O título, que aparece escrito na capa do livro",ok:false},{t:"O último capítulo, onde a história acaba de vez",ok:false}], exp:"O herói é quem tenta resolver o problema." },
    { q:"O que é o «clímax» de uma história?", a:[{t:"O título",ok:false},{t:"O primeiro parágrafo",ok:false},{t:"O momento de maior emoção",ok:true},{t:"O fim feliz",ok:false}], exp:"É o ponto mais intenso da história." },
    { q:"Porque podem existir versões diferentes da mesma lenda?", a:[{t:"Porque todas as versões são necessariamente falsas",ok:false},{t:"Porque uma lenda só pode ter uma frase",ok:false},{t:"Porque os livros mudam sozinhos",ok:false},{t:"Porque as histórias são transmitidas e reinterpretadas",ok:true}], exp:"A transmissão oral e as adaptações podem alterar pormenores ao longo do tempo." },
  ],
  h17: [
    { q:"Tens 36 doces para dividir igualmente por 4 amigos. Quantos recebe cada um?", a:[{t:"8",ok:false},{t:"12",ok:false},{t:"9",ok:true},{t:"6",ok:false}], exp:"36 ÷ 4 = 9." },
    { q:"Um morcego bate as asas 8 vezes por segundo. Quantas bate em 5 segundos?", a:[{t:"13",ok:false},{t:"45",ok:false},{t:"35",ok:false},{t:"40",ok:true}], exp:"8 × 5 = 40." },
    { q:"Uma abóbora pesa 3 kg e outra pesa 2 kg e meio. Quanto pesam juntas?", a:[{t:"5 kg e meio",ok:true},{t:"5 kg",ok:false},{t:"6 kg",ok:false},{t:"4 kg e meio",ok:false}], exp:"3 + 2,5 = 5,5 kg." },
    { q:"Qual é o próximo número da sequência 2, 4, 6, 8, …?", a:[{t:"9",ok:false},{t:"10",ok:true},{t:"12",ok:false},{t:"16",ok:false}], exp:"Soma-se sempre 2: depois do 8 vem o 10." },
    { q:"Uma abóbora custa 4 euros. Quanto custam 5 abóboras?", a:[{t:"9 euros",ok:false},{t:"16 euros",ok:false},{t:"20 euros",ok:true},{t:"25 euros",ok:false}], exp:"5 × 4 = 20." },
    { q:"Tens 3 sacos com 8 doces cada. Se deres metade a um amigo, quantos dás?", a:[{t:"8",ok:false},{t:"24",ok:false},{t:"6",ok:false},{t:"12",ok:true}], exp:"3 × 8 = 24 e metade de 24 é 12." },
    { q:"Uma abóbora pesa 3 kg e outra pesa 2,5 kg. Qual é o peso total?", a:[{t:"5,5 kg",ok:true},{t:"5 kg",ok:false},{t:"6 kg",ok:false},{t:"6,5 kg",ok:false}], exp:"3 + 2,5 = 5,5 kg." },
  ],
  h18: [
    { q:"Porque é bom andar em grupo no Halloween?", a:[{t:"Apanham-se sempre mais doces do que sozinho",ok:false},{t:"Assim ninguém nos consegue ver na rua",ok:false},{t:"Os adultos podem ficar a dormir em casa",ok:false},{t:"É mais seguro e há sempre alguém para ajudar",ok:true}], exp:"Em grupo, estamos mais seguros e visíveis." },
    { q:"Que roupa é mais visível para os condutores à noite?", a:[{t:"Cores claras ou com fitas refletoras",ok:true},{t:"Todo preto, sem nenhuma luz ou fita",ok:false},{t:"Castanho-escuro, da cor das árvores",ok:false},{t:"Verde muito escuro, como as folhas",ok:false}], exp:"As cores claras e as fitas refletoras fazem-te ver de longe." },
    { q:"O que fazes a um doce aberto, sem embalagem?", a:[{t:"Como-o logo",ok:false},{t:"Não o como e mostro-o a um adulto",ok:true},{t:"Guardo-o no bolso",ok:false},{t:"Troco-o com um desconhecido",ok:false}], exp:"Doces sem embalagem podem não ser seguros." },
    { q:"Se um desconhecido te oferecer boleia, o que fazes?", a:[{t:"Aceito, se ele me prometer doces e chocolate",ok:false},{t:"Aceito, se a casa dele for muito perto",ok:false},{t:"Digo que não, afasto-me e conto a um adulto",ok:true},{t:"Fico sozinho na rua a pensar no que fazer",ok:false}], exp:"Nunca aceites boleias de desconhecidos." },
    { q:"Que sinal mostra que podes ir a uma casa pedir doces?", a:[{t:"Porta aberta e a casa completamente às escuras",ok:false},{t:"Um cão a ladrar muito alto dentro do quintal",ok:false},{t:"Uma janela partida e um portão sem tranca",ok:false},{t:"Luz acesa na entrada ou decoração à porta",ok:true}], exp:"Uma luz acesa ou uma decoração pode indicar que a casa participa na tradição, mas deves seguir sempre as orientações do adulto responsável." },
    { q:"Porque é perigoso andar a olhar para o telemóvel na rua à noite?", a:[{t:"Não vês os carros nem os obstáculos",ok:true},{t:"A bateria gasta-se e o telemóvel desliga-se",ok:false},{t:"O ecrã aquece e pode queimar a mão da criança",ok:false},{t:"Perdes os doces que tens dentro do saco",ok:false}], exp:"Distraído, podes tropeçar ou não ver os carros." },
    { q:"O que deves fazer se te separares do grupo durante uma saída de Halloween?", a:[{t:"Ir sozinho para casa por um caminho que não conheces",ok:false},{t:"Procurar um adulto responsável ou um local seguro combinado",ok:true},{t:"Aceitar boleia de qualquer pessoa que pare ao pé de ti",ok:false},{t:"Esconder-te numa rua escura até alguém te encontrar",ok:false}], exp:"É importante combinar previamente o que fazer e procurar ajuda de um adulto responsável." },
    { q:"Porque deves atravessar a rua numa passadeira e depois de verificar o trânsito?", a:[{t:"Para chegar mais depressa sem olhar",ok:false},{t:"Porque os condutores podem não te ver ou não conseguir parar a tempo",ok:false},{t:"Para aumentar a segurança e ser mais visível",ok:true},{t:"Para evitar andar no passeio",ok:false}], exp:"Usa a passadeira quando disponível e confirma que os veículos pararam antes de atravessar." },
    { q:"O que fazer se um desconhecido te convidar a entrar em casa para escolher doces?", a:[{t:"Entrar sem avisar ninguém, porque a casa até parece segura",ok:false},{t:"Ir sozinho com ele, porque parece uma pessoa simpática",ok:false},{t:"Deixar o grupo para trás e escolher os doces sozinho",ok:false},{t:"Recusar e manter-te com o grupo ou adulto responsável",ok:true}], exp:"Não se deve entrar em casas de desconhecidos; é mais seguro permanecer com o grupo e o adulto responsável." },
  ],
  h19: [
    { q:"Que significa o Samhain para os celtas?", a:[{t:"O fim do verão e das colheitas",ok:true},{t:"O início da primavera e das flores",ok:false},{t:"O dia do rei e da sua família",ok:false},{t:"A festa do mar e dos pescadores",ok:false}], exp:"O Samhain é associado ao fim do verão e das colheitas nas tradições celtas." },
    { q:"Qual é a diferença entre um animal noturno e um diurno?", a:[{t:"O noturno está mais ativo à noite e o diurno durante o dia",ok:false},{t:"O noturno anda ativo de noite e o diurno de dia",ok:true},{t:"O diurno só voa e o noturno só nada",ok:false},{t:"Não há nenhuma diferença entre os dois",ok:false}], exp:"Os animais noturnos tendem a estar ativos durante a noite, embora os seus padrões variem conforme a espécie." },
    { q:"Porque é importante confirmar os doces com um adulto?", a:[{t:"Para os contar e escrever numa lista",ok:false},{t:"Para os pintar com cores de Halloween",ok:false},{t:"Para ver se estão fechados e seguros",ok:true},{t:"Para os esconder dentro de uma gaveta",ok:false}], exp:"Um adulto ajuda a garantir que os doces são seguros." },
    { q:"Porque é a abóbora considerada um fruto?", a:[{t:"Porque é muito doce e saborosa",ok:false},{t:"Porque tem uma cor laranja forte",ok:false},{t:"Porque cresce no chão da horta",ok:false},{t:"Porque tem sementes lá dentro",ok:true}], exp:"O fruto desenvolve-se a partir da flor e contém as sementes." },
    { q:"Qual destes monstros nasceu num livro de Mary Shelley?", a:[{t:"A criatura de Frankenstein",ok:true},{t:"O Drácula, o vampiro de capa preta e dentes",ok:false},{t:"O lobisomem, que se transforma com a lua cheia",ok:false},{t:"A múmia, enrolada em faixas de linho velhas",ok:false}], exp:"A criatura de Frankenstein foi criada por Mary Shelley." },
    { q:"Qual é um bom hábito depois de comer doces?", a:[{t:"Dormir logo",ok:false},{t:"Lavar os dentes",ok:true},{t:"Comer mais",ok:false},{t:"Esconder as embalagens",ok:false}], exp:"Lavar os dentes protege-os do açúcar." },
  ],
  hb1: [
    { q:"O enigma das quatro velas: Quatro velas estão acesas. Uma corrente de ar apaga duas. Quantas velas continuam acesas?", a:[{t:"0",ok:false},{t:"2",ok:true},{t:"4",ok:false},{t:"6",ok:false}], exp:"Duas velas continuam acesas; as outras duas apagaram-se." },
  ],
  hb2: [
    { q:"A sequência da bruxa: Qual é o próximo número: 5, 10, 20, 40, ...?", a:[{t:"45",ok:false},{t:"60",ok:false},{t:"80",ok:true},{t:"100",ok:false}], exp:"Cada número é o dobro do anterior: 40 × 2 = 80." },
  ],
  hb3: [
    { q:"A chave escondida: A chave não está na caixa vermelha nem na azul. Há apenas três caixas: vermelha, azul e verde. Onde está a chave?", a:[{t:"Vermelha",ok:false},{t:"Azul",ok:false},{t:"Não se pode saber",ok:false},{t:"Verde",ok:true}], exp:"Se não está nas caixas vermelha nem azul e só existem essas três, está na verde." },
  ],
  hb4: [
    { q:"O código final: O código tem dois algarismos: o primeiro é 7 − 3 e o segundo é 2 × 3. Qual é o código?", a:[{t:"46",ok:true},{t:"436",ok:false},{t:"34",ok:false},{t:"64",ok:false}], exp:"7 − 3 = 4 e 2 × 3 = 6; o código é 46." },
  ],
};

export const QUIZ_BY_THEME_EXTREMO = {
  h00: [
    { q:"Uma celebração antiga estava associada ao fim das colheitas e à passagem para a parte mais escura do ano. Qual é a conclusão mais fundamentada?", a:[{t:"Trata-se necessariamente de uma festa romana.",ok:false},{t:"O contexto é compatível com as tradições associadas ao Samhain.",ok:true},{t:"A celebração só pode ter surgido nos Estados Unidos.",ok:false},{t:"A festa assinalava obrigatoriamente o início da primavera.",ok:false}], exp:"O fim das colheitas e a transição sazonal são características associadas ao Samhain." },
    { q:"Uma tradição atual inclui costumes que já existiam há muitos séculos, mas também práticas mais recentes. O que podemos concluir?", a:[{t:"A tradição não pode ter uma origem antiga.",ok:false},{t:"Todos os costumes atuais existiam desde o primeiro dia.",ok:false},{t:"As tradições não mudam quando passam de um país para outro.",ok:false},{t:"Uma celebração pode conservar influências antigas e incorporar novos costumes.",ok:true}], exp:"As tradições culturais evoluem e podem adquirir novos significados ao longo do tempo." },
  ],
  h01: [
    { q:"Uma decoração tem 3 lanternas. Cada lanterna precisa de 2 pilhas e cada embalagem contém 4 pilhas. Qual é o número mínimo de embalagens necessárias para alimentar as 3 lanternas?", a:[{t:"1 embalagem.",ok:false},{t:"3 embalagens.",ok:false},{t:"4 embalagens.",ok:false},{t:"2 embalagens.",ok:true}], exp:"São necessárias 3 × 2 = 6 pilhas. Duas embalagens fornecem 8 pilhas, pelo que chegam." },
    { q:"Uma abóbora perdeu 20% da sua massa durante o armazenamento. Se inicialmente pesava 5 kg, qual é a sua massa depois dessa perda?", a:[{t:"4 kg.",ok:true},{t:"4,5 kg.",ok:false},{t:"3 kg.",ok:false},{t:"3,5 kg.",ok:false}], exp:"20% de 5 kg corresponde a 1 kg. Assim, 5 − 1 = 4 kg." },
  ],
  h02: [
    { q:"Um disfarce tem três problemas: a capa arrasta no chão, a máscara reduz a visão e o fato é pouco visível à noite. Qual é a melhor solução?", a:[{t:"Corrigir o comprimento, melhorar a visão e acrescentar elementos refletores.",ok:true},{t:"Manter tudo e levar apenas um saco de doces.",ok:false},{t:"Retirar os elementos refletores e caminhar mais depressa.",ok:false},{t:"Usar a máscara apenas quando se atravessa a rua.",ok:false}], exp:"A solução deve resolver os três riscos: tropeções, visão limitada e pouca visibilidade." },
    { q:"Um grupo quer criar um fato assustador com materiais reciclados. Qual é a melhor combinação de critérios?", a:[{t:"Utilizar qualquer material, mesmo que seja inflamável ou dificulte os movimentos.",ok:false},{t:"Escolher apenas materiais pretos para tornar o fato mais assustador.",ok:false},{t:"Priorizar o efeito visual, mesmo que o fato tape os olhos.",ok:false},{t:"Reutilizar materiais seguros, garantir liberdade de movimentos e acrescentar elementos refletores.",ok:true}], exp:"Um bom disfarce pode ser criativo, sustentável e seguro ao mesmo tempo." },
  ],
  h03: [
    { q:"Um grupo recebeu 28 doces e quer dividi-los igualmente por 4 crianças. Quantos recebe cada uma?", a:[{t:"6",ok:false},{t:"7",ok:true},{t:"8",ok:false},{t:"9",ok:false}], exp:"28 ÷ 4 = 7 doces por criança." },
    { q:"Uma embalagem está aberta e o doce não tem identificação. Qual é a decisão mais segura?", a:[{t:"Comê-lo se cheirar bem",ok:false},{t:"Comê-lo depois de lavar as mãos",ok:false},{t:"Não o comer e mostrá-lo a um adulto",ok:true},{t:"Dar metade a outra pessoa",ok:false}], exp:"Não se deve consumir um doce cuja embalagem e origem não permitam verificar se está em boas condições." },
    { q:"Tens 18 doces. Dás um terço a um amigo e depois dás mais 4 à tua irmã. Com quantos ficas?", a:[{t:"10",ok:false},{t:"12",ok:false},{t:"14",ok:false},{t:"8",ok:true}], exp:"Um terço de 18 é 6; 18 − 6 − 4 = 8." },
  ],
  h04: [
    { q:"Um morcego emite um som e ouve o eco 0,2 segundos depois. O que lhe pode indicar esse eco?", a:[{t:"A cor exata e a textura do objeto que está à sua frente",ok:false},{t:"A idade do objeto e o material de que é feito por dentro",ok:false},{t:"A distância e a posição aproximada de um obstáculo ou presa",ok:true},{t:"A temperatura do Sol e a hora a que vai nascer o dia",ok:false}], exp:"O tempo e as características do eco fornecem informação sobre a localização de objetos." },
    { q:"Qual é a razão mais importante para não tocar num morcego encontrado no chão?", a:[{t:"Pode ficar com frio e perder o pelo se lhe tocares",ok:false},{t:"É sempre venenoso e o veneno passa pela pele da mão",ok:false},{t:"Vai transformar-se num vampiro se lhe tocares à noite",ok:false},{t:"Pode estar doente ou assustado e morder; deve avisar-se um adulto",ok:true}], exp:"Um morcego caído pode estar doente ou ferido e pode morder. Por isso não se toca: avisa-se um adulto." },
    { q:"Se uma espécie de morcego comer muitos insetos durante a noite, que efeito pode ter?", a:[{t:"Ajudar a regular algumas populações de insetos",ok:true},{t:"Aumentar necessariamente todas as pragas",ok:false},{t:"Impedir a polinização em todo o mundo",ok:false},{t:"Transformar insetos em plantas",ok:false}], exp:"A predação de insetos por morcegos pode contribuir para o equilíbrio ecológico." },
  ],
  h05: [
    { q:"Uma aranha tem 8 patas. Quantas patas têm 7 aranhas, supondo que todas estão completas?", a:[{t:"48",ok:false},{t:"54",ok:false},{t:"64",ok:false},{t:"56",ok:true}], exp:"7 × 8 = 56 patas." },
    { q:"Uma teia tem 5 raios principais e cada raio liga-se a 6 pontos da espiral. Se contares apenas essas ligações, quantas são?", a:[{t:"30",ok:true},{t:"11",ok:false},{t:"25",ok:false},{t:"56",ok:false}], exp:"5 × 6 = 30 ligações, segundo a descrição simplificada do problema." },
  ],
  h06: [
    { q:"Uma lanterna está a 20 cm de uma figura e produz uma sombra grande na parede. Se aproximares a lanterna da figura, mantendo a parede no mesmo lugar, o que tende a acontecer?", a:[{t:"A sombra pode aumentar",ok:true},{t:"A sombra desaparece sempre",ok:false},{t:"A figura fica transparente",ok:false},{t:"A sombra passa a emitir luz",ok:false}], exp:"Ao aproximar a fonte de luz do objeto, a sombra projetada tende a aumentar." },
    { q:"Numa sala, vês uma sombra alongada de manhã e mais curta perto do meio-dia. Qual é a explicação mais provável?", a:[{t:"O objeto perdeu massa",ok:false},{t:"A posição aparente do Sol mudou",ok:true},{t:"A sombra está a fugir",ok:false},{t:"A luz deixou de viajar em linha reta",ok:false}], exp:"A altura aparente do Sol altera o ângulo da luz e o comprimento da sombra." },
  ],
  h07: [
    { q:"Uma bruxa fictícia mistura 150 ml de água com 75 ml de outro líquido colorido. Qual é o volume total, supondo que os volumes se somam?", a:[{t:"Porque todas as casas tinham televisão e viam filmes de bruxas",ok:false},{t:"225 ml",ok:true},{t:"Porque as pessoas viam bruxas a voar todas as noites no céu",ok:false},{t:"Porque havia vassouras elétricas muito rápidas nas aldeias",ok:false}], exp:"150 + 75 = 225 ml." },
    { q:"Num laboratório escolar, dois produtos de limpeza têm rótulos diferentes. O que deves fazer?", a:[{t:"Misturá-los depressa, só para ver a reação que acontece",ok:false},{t:"Provar uma gota de cada um para saber qual é qual",ok:false},{t:"Seguir as instruções do professor e nunca os misturar por iniciativa própria",ok:true},{t:"Aquecer os dois recipientes ao mesmo tempo no lume",ok:false}], exp:"Alguns produtos podem reagir perigosamente quando misturados; é essencial seguir as instruções de segurança." },
    { q:"Uma receita fictícia pede 2 partes de água por cada 1 parte de corante. Para 90 ml de mistura total, quanto corante é necessário?", a:[{t:"15 ml",ok:false},{t:"45 ml",ok:false},{t:"60 ml",ok:false},{t:"30 ml",ok:true}], exp:"A proporção tem 3 partes; 90 ÷ 3 = 30 ml por parte, logo 30 ml de corante." },
  ],
  h08: [
    { q:"Qual é a diferença entre o romance «Frankenstein» e muitas adaptações populares?", a:[{t:"O livro é um manual científico real, escrito por médicos de hoje",ok:false},{t:"Mary Shelley escreveu «Drácula» no mesmo ano de «Frankenstein»",ok:false},{t:"A criatura é simplificada nas adaptações e muitas vezes recebe o nome do cientista",ok:true},{t:"A obra original não tem qualquer personagem humana",ok:false}], exp:"Muitas adaptações alteram pormenores e usam «Frankenstein» para designar a criatura." },
    { q:"Que ano corresponde à publicação de «Drácula», de Bram Stoker?", a:[{t:"1818",ok:false},{t:"1905",ok:false},{t:"1922",ok:false},{t:"1897",ok:true}], exp:"O romance «Drácula» foi publicado em 1897." },
    { q:"Uma adaptação de uma lenda muda o local e o final da história. O que se pode concluir?", a:[{t:"As adaptações podem reinterpretar elementos da história original",ok:true},{t:"Deixa automaticamente de ser uma adaptação e passa a ser falsa",ok:false},{t:"Todas as versões antigas da lenda passam a ser inventadas",ok:false},{t:"O autor original reescreveu o livro depois de ter morrido",ok:false}], exp:"As adaptações podem alterar cenário, personagens ou desfecho para um novo público." },
  ],
  h09: [
    { q:"Qual destas combinações descreve corretamente o papel dos ossos e dos músculos?", a:[{t:"Os ossos contraem-se como músculos",ok:false},{t:"Os tendões produzem células nervosas",ok:false},{t:"Os músculos não participam no movimento",ok:false},{t:"Os músculos puxam os ossos através dos tendões",ok:true}], exp:"Os músculos contraem-se e, através dos tendões, puxam os ossos para produzir movimento." },
  ],
  h10: [
    { q:"Uma turma recolheu 24 peças de fruta para distribuir igualmente por 6 cabazes. Quantas peças ficam em cada cabaz?", a:[{t:"4",ok:true},{t:"3",ok:false},{t:"5",ok:false},{t:"6",ok:false}], exp:"24 ÷ 6 = 4 peças por cabaz." },
    { q:"Porque é importante explicar às crianças que o Pão-por-Deus não é igual em todo o país?", a:[{t:"Para eliminar a tradição e substituí-la por outra mais nova",ok:false},{t:"Para reconhecer a diversidade cultural e regional",ok:true},{t:"Para impedir que as famílias partilhem as histórias antigas",ok:false},{t:"Para trocar todas as festas locais por uma única festa",ok:false}], exp:"Reconhecer variações regionais ajuda a compreender e valorizar a diversidade cultural." },
  ],
  h11: [
  ],
  h12: [
    { q:"Porque não ocorre um eclipse lunar em todas as luas cheias?", a:[{t:"A Lua deixa de orbitar a Terra durante a maior parte do ano",ok:false},{t:"O Sol apaga-se durante algumas noites de lua cheia",ok:false},{t:"A órbita da Lua é inclinada em relação ao plano da órbita terrestre",ok:true},{t:"A Lua só fica iluminada uma vez por ano, em outubro",ok:false}], exp:"A inclinação da órbita lunar faz com que, na maioria das luas cheias, os três astros não fiquem alinhados o suficiente para ocorrer um eclipse." },
    { q:"Qual é a diferença entre o ciclo das fases lunares e o tempo que a Lua demora a dar uma volta à Terra em relação às estrelas?", a:[{t:"A Lua muda de tamanho todas as noites, como um balão",ok:false},{t:"As nuvens cobrem uma parte da Lua durante o mês",ok:false},{t:"A Lua apaga-se e acende-se sozinha todas as semanas",ok:false},{t:"O ciclo das fases é mais longo, cerca de 29,5 dias",ok:true}], exp:"O ciclo sinódico, de cerca de 29,5 dias, é mais longo do que o período orbital em relação às estrelas, de cerca de 27,3 dias." },
    { q:"Se a Lua está entre a Terra e o Sol, que fase vemos aproximadamente, quando o alinhamento permite observar a fase habitual?", a:[{t:"Lua nova",ok:true},{t:"Quarto crescente",ok:false},{t:"Lua cheia",ok:false},{t:"Quarto minguante",ok:false}], exp:"Na Lua nova, a Lua está aproximadamente na direção do Sol e a face iluminada fica voltada sobretudo para longe da Terra." },
  ],
  h13: [
    { q:"Um animal é observado sobretudo ao amanhecer e ao anoitecer. Como se pode descrever esse padrão de atividade?", a:[{t:"Diurno estrito",ok:false},{t:"Aquático",ok:false},{t:"Subterrâneo obrigatoriamente",ok:false},{t:"Crepuscular",ok:true}], exp:"Os animais crepusculares estão mais ativos ao amanhecer e ao anoitecer." },
    { q:"Por que motivo os animais noturnos não são todos iguais na forma como encontram alimento?", a:[{t:"Porque cada espécie tem adaptações e estratégias próprias",ok:true},{t:"Porque todos os animais noturnos usam ecolocalização como os morcegos",ok:false},{t:"Porque nenhum animal noturno consegue usar a visão",ok:false},{t:"Porque todos caçam exatamente as mesmas presas",ok:false}], exp:"As estratégias variam consoante a espécie, o habitat e o tipo de alimento." },
    { q:"Se a iluminação artificial noturna aumentar muito numa zona natural, que consequência pode ter?", a:[{t:"Não pode afetar nenhum animal",ok:false},{t:"Pode alterar o comportamento de algumas espécies",ok:true},{t:"Pode ajudar a regular o ciclo de atividade de algumas espécies",ok:false},{t:"Transforma animais diurnos em morcegos",ok:false}], exp:"A poluição luminosa pode interferir na orientação, alimentação e reprodução de algumas espécies." },
  ],
  h14: [
    { q:"Há 36 bolinhos para distribuir por 9 grupos. Se a distribuição for igual, quantos bolinhos recebe cada grupo?", a:[{t:"4",ok:true},{t:"3",ok:false},{t:"5",ok:false},{t:"6",ok:false}], exp:"36 ÷ 9 = 4 bolinhos por grupo." },
  ],
  h15: [
    { q:"Numa experiência, uma planta recebe água e luz, enquanto outra recebe água mas fica sem luz. Que variável foi alterada?", a:[{t:"A quantidade de água",ok:false},{t:"A exposição à luz",ok:true},{t:"A espécie de planta, necessariamente",ok:false},{t:"O recipiente, necessariamente",ok:false}], exp:"A exposição à luz é a variável que distingue as duas condições descritas." },
    { q:"Uma hipótese prevê que uma mistura ficará roxa, mas o resultado é azul. O que deve fazer quem investiga?", a:[{t:"Está tão quente que derrete as luvas e os sapatos",ok:false},{t:"É elétrico e dá choques muito fortes às crianças",ok:false},{t:"Registar o resultado real e rever a hipótese",ok:true},{t:"É pegajoso e fica colado aos dedos durante horas",ok:false}], exp:"Os resultados devem ser registados tal como são observados, mesmo quando não confirmam a hipótese." },
    { q:"Para comparar duas experiências de forma justa, o que deve manter-se igual, exceto a variável estudada?", a:[{t:"Mede o peso exato de uma substância pequenina",ok:false},{t:"Aquece a água até ferver depressa e sem fogo",ok:false},{t:"Limpa os vidros e deixa-os a brilhar de novo",ok:false},{t:"As condições relevantes",ok:true}], exp:"Manter as condições relevantes constantes permite comparar os efeitos da variável testada." },
  ],
  h16: [
    { q:"Uma história apresenta uma personagem que enfrenta um problema, falha e depois aprende com o erro. Que elemento narrativo está especialmente presente?", a:[{t:"Uma lista sem sequência",ok:false},{t:"Uma legenda de mapa",ok:false},{t:"Desenvolvimento da personagem",ok:true},{t:"Uma instrução técnica",ok:false}], exp:"As decisões e aprendizagens da personagem mostram o seu desenvolvimento ao longo da narrativa." },
    { q:"Qual é a diferença mais importante entre uma lenda e um relato histórico documentado?", a:[{t:"As lendas são sempre recentes e os relatos são sempre antigos",ok:false},{t:"Os relatos históricos não precisam de usar quaisquer fontes",ok:false},{t:"As lendas nunca têm personagens, só paisagens e animais",ok:false},{t:"A lenda pode ter partes imaginárias; o relato histórico procura provas",ok:true}], exp:"A investigação histórica procura sustentar afirmações com fontes e evidências, enquanto as lendas podem incorporar elementos fantásticos." },
  ],
  h17: [
    { q:"Há 48 doces. Um quarto são de chocolate e os restantes são de fruta. Quantos são de fruta?", a:[{t:"12",ok:false},{t:"24",ok:false},{t:"40",ok:false},{t:"36",ok:true}], exp:"Um quarto de 48 é 12; 48 − 12 = 36 doces de fruta." },
    { q:"Uma equipa resolve 3 enigmas em 4 minutos cada e demora mais 5 minutos a abrir uma porta. Quanto tempo demora no total?", a:[{t:"17 minutos",ok:true},{t:"12 minutos",ok:false},{t:"15 minutos",ok:false},{t:"20 minutos",ok:false}], exp:"3 × 4 + 5 = 17 minutos." },
    { q:"A sequência de pontos de uma poção é 2, 6, 18, 54... Qual é o próximo número se a regra se mantiver?", a:[{t:"108",ok:false},{t:"162",ok:true},{t:"216",ok:false},{t:"270",ok:false}], exp:"Cada termo é o anterior multiplicado por 3: 54 × 3 = 162." },
  ],
  h18: [
    { q:"Durante a saída, o grupo percebe que uma rua está mal iluminada e sem passeio. Qual é a decisão mais segura?", a:[{t:"Escolher um percurso mais seguro e avisar o adulto responsável",ok:true},{t:"Seguir pela estrada, porque tem menos pessoas a atrapalhar",ok:false},{t:"Correr para atravessar depressa e sem olhar para os carros",ok:false},{t:"Separar o grupo para cada um escolher o seu caminho",ok:false}], exp:"Deve escolher-se um percurso seguro, bem iluminado e adequado aos peões." },
    { q:"Um colega cai e parece ter-se magoado. Qual deve ser a primeira atitude?", a:[{t:"Obrigá-lo a levantar-se imediatamente, mesmo com dores",ok:false},{t:"Garantir a segurança do local e chamar um adulto responsável",ok:true},{t:"Deixar o colega sozinho e continuar a pedir os doces",ok:false},{t:"Dar-lhe um comprimido qualquer que alguém tenha na mochila",ok:false}], exp:"É importante proteger a pessoa de mais perigo e pedir ajuda a um adulto; não se devem administrar medicamentos ao acaso." },
    { q:"Uma decoração usa uma vela perto de uma cortina. Qual é o principal risco e a melhor alternativa?", a:[{t:"Risco de chuva; abrir a janela",ok:false},{t:"Risco de ruído; apagar a televisão",ok:false},{t:"Risco de incêndio; usar uma luz LED",ok:true},{t:"O risco depende da distância e dos materiais próximos",ok:false}], exp:"A chama pode incendiar materiais próximos; uma luz LED é uma alternativa mais segura." },
  ],
  h19: [
  ],
  hb1: [
  ],
  hb2: [
    { q:"As três pistas: O código tem três algarismos. O primeiro é 3 × 2. O segundo é o primeiro menos 2. O terceiro é a soma dos dois primeiros menos 5. Qual é o código?", a:[{t:"642",ok:false},{t:"463",ok:false},{t:"624",ok:false},{t:"645",ok:true}], exp:"Primeiro: 6; segundo: 4; terceiro: 6 + 4 − 5 = 5. Código correto: 645." },
  ],
  hb3: [
    { q:"A poção medida: Uma poção precisa de 3/4 de litro. Já tens 250 ml. Quantos mililitros faltam?", a:[{t:"500 ml",ok:true},{t:"250 ml",ok:false},{t:"400 ml",ok:false},{t:"750 ml",ok:false}], exp:"3/4 de litro são 750 ml; 750 − 250 = 500 ml." },
  ],
  hb4: [
    { q:"O padrão final: A sequência é 1, 4, 9, 16, 25, ... Qual é o próximo número?", a:[{t:"30",ok:false},{t:"36",ok:true},{t:"32",ok:false},{t:"49",ok:false}], exp:"São quadrados perfeitos: 1², 2², 3², 4², 5²; o próximo é 6² = 36." },
  ],
};


// Banco Extremo = perguntas extremas do nível + todo o banco Difícil do nível.
for (const k of Object.keys(QUIZ_BY_THEME_AVANCADO)) {
  QUIZ_BY_THEME_EXTREMO[k] = (QUIZ_BY_THEME_EXTREMO[k] || []).concat(QUIZ_BY_THEME_AVANCADO[k]);
}
// Bancos dos bosses = revisão do respetivo mundo (por referência, sem repetir texto) + os enigmas do boss.
const _MUNDOS_BOSS = { hb1: [0, 1, 2, 3, 4], hb2: [5, 6, 7, 8], hb3: [9, 10, 11, 12, 13, 14], hb4: [15, 16, 17, 18, 19] };
for (const [boss, niveis] of Object.entries(_MUNDOS_BOSS)) {
  for (const banco of [QUIZ_BY_THEME, QUIZ_BY_THEME_AVANCADO, QUIZ_BY_THEME_EXTREMO]) {
    banco[boss] = niveis.flatMap(i => banco["h" + String(i).padStart(2, "0")]).concat(banco[boss] || []);
  }
}

