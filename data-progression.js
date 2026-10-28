// ===== Sistemas de progressão: mapa, artefactos, conquistas — MISSÃO CIBERSEGURANÇA =====
// MAP_REGIONS, ARTEFACTS, ARTEFACT_SETS, SET_REACTIONS, ACHIEVEMENTS_DEFS

// Mantém os 20 níveis e a sua dificuldade intactos (só o TEMA de cada
// nível mudou, ver data-levels.js). Os 4 mundos e as posições dos bosses
// mantêm-se exatamente iguais à estrutura original.
export const MAP_REGIONS = [
  { id:"origens",        icon:"🎃", name:"Floresta Assombrada dos Vírus", sub:"Abóboras, fatos, doces, morcegos e o Rei Abóbora",      levels:[0,1,2,3,4],
    mapBg:"mundo1_n1e2.webp",
    nodePos:[{x:9,y:80.0},{x:28,y:66.1},{x:47,y:63.8},{x:63,y:56.9},{x:68,y:29.3}] },
  { id:"desenvolvimento",icon:"🏰", name:"Castelo das Palavras-Passe",    sub:"Aranhas, fantasmas, bruxas, monstros e o Fantasma Hacker",    levels:[5,6,7,8],
    mapBg:"mundo2_n6.webp",
    nodePos:[{x:8,y:81.1},{x:33,y:62.7},{x:56,y:61.5},{x:65,y:36.2}] },
  { id:"protecao",       icon:"🪦", name:"Cemitério das Mensagens Malditas", sub:"Esqueletos, tradições, Lua e a Bruxa do Phishing",  levels:[9,10,11,12,13,14],
    mapBg:"mundo3_n10e11.webp",
    nodePos:[{x:7,y:82.3},{x:18,y:59.2},{x:36,y:65.0},{x:56,y:70.7},{x:66,y:47.7},{x:68,y:30.4}] },
  { id:"participacao",   icon:"🕯️", name:"Mansão das Sombras Digitais",  sub:"Poções, histórias, segurança e o Senhor das Sombras",   levels:[15,16,17,18,19],
    mapBg:"mundo4_n16e17.webp",
    nodePos:[{x:10,y:84.6},{x:33,y:73.0},{x:47,y:52.3},{x:66,y:73.0},{x:72,y:27.0}] },
  { id:"base",           icon:"🏠", name:"Base do VanBerto's",            sub:"O teu ponto de partida",                           levels:[] },
];

export const ARTEFACTS = [
  // idx 0-4 — Conjunto: Fundamentos
  { emoji:"🎃", name:"Selo Celta", short:"A História do Halloween", color:"#40d0ff", glow:"rgba(64,208,255,0.6)", vanberto:"Samhain: há mais de 2000 anos!", set:0 },
  { emoji:"🏮", name:"Lanterna Mágica", short:"Abóboras e Lanternas", color:"#ffd700", glow:"rgba(255,215,0,0.6)", vanberto:"Uma luz dentro da abóbora!", set:0 },
  { emoji:"🎭", name:"Máscara Segura", short:"Fatos e Máscaras", color:"#ff9060", glow:"rgba(255,144,96,0.6)", vanberto:"Vê bem e fica visível!", set:0 },
  { emoji:"🍬", name:"Doce Encantado", short:"Doces ou Travessuras", color:"#80ffb0", glow:"rgba(128,255,176,0.6)", vanberto:"Sempre com um adulto!", set:0 },
  { emoji:"🦇", name:"Asa de Morcego", short:"Os Morcegos", color:"#e0409a", glow:"rgba(224,64,154,0.6)", vanberto:"Veem com os ouvidos!", set:0 },
  // idx 5-9 — Conjunto: Comunicação
  { emoji:"🕸️", name:"Teia Dourada", short:"Aranhas e Teias", color:"#c0a0ff", glow:"rgba(192,160,255,0.6)", vanberto:"Oito patas e muita seda!", set:1 },
  { emoji:"👻", name:"Lençol Fantasma", short:"Fantasmas e Sombras", color:"#60e060", glow:"rgba(96,224,96,0.6)", vanberto:"Todo o susto tem explicação!", set:1 },
  { emoji:"🧹", name:"Vassoura Mágica", short:"Bruxas e Vassouras", color:"#ffa040", glow:"rgba(255,160,64,0.6)", vanberto:"Só fantasia e diversão!", set:1 },
  { emoji:"🧟", name:"Faixa de Múmia", short:"Monstros Famosos", color:"#8a5cff", glow:"rgba(138,92,255,0.6)", vanberto:"Drácula, Frankenstein e companhia!", set:1 },
  { emoji:"💀", name:"Caveira Brilhante", short:"Esqueletos e Ossos", color:"#ffe060", glow:"rgba(255,224,96,0.6)", vanberto:"206 ossos e muito cálcio!", set:1 },
  // idx 10-14 — Conjunto: Proteção
  { emoji:"🕯️", name:"Vela de Todos os Santos", short:"Todos os Santos", color:"#60ffff", glow:"rgba(96,255,255,0.6)", vanberto:"Tradições que unem famílias!", set:2 },
  { emoji:"🌍", name:"Globo Assombrado", short:"Halloween pelo Mundo", color:"#ffc060", glow:"rgba(255,192,96,0.6)", vanberto:"Cada país, uma tradição!", set:2 },
  { emoji:"🌕", name:"Lua Cheia", short:"A Lua e a Noite", color:"#80c8ff", glow:"rgba(128,200,255,0.6)", vanberto:"Reflete a luz do Sol!", set:2 },
  { emoji:"🦉", name:"Pena de Coruja", short:"Animais da Noite", color:"#ff6060", glow:"rgba(255,96,96,0.6)", vanberto:"Noturnos e muito atentos!", set:2 },
  { emoji:"🧺", name:"Saco do Pão-por-Deus", short:"O Pão-por-Deus", color:"#ffd080", glow:"rgba(255,208,128,0.6)", vanberto:"Pão, broas e romãs!", set:2 },
  // idx 15-19 — Conjunto: Identidade
  { emoji:"🧪", name:"Poção Borbulhante", short:"Poções e Ciência", color:"#c080ff", glow:"rgba(192,128,255,0.6)", vanberto:"A magia é ciência!", set:3 },
  { emoji:"📖", name:"Livro de Lendas", short:"Histórias e Lendas", color:"#ff80a0", glow:"rgba(255,128,160,0.6)", vanberto:"Início, meio e fim!", set:3 },
  { emoji:"🔢", name:"Abóbora dos Números", short:"A Matemática do Halloween", color:"#60d0ff", glow:"rgba(96,208,255,0.6)", vanberto:"Somar, dividir e descobrir padrões!", set:3 },
  { emoji:"🔦", name:"Lanterna de Segurança", short:"Halloween em Segurança", color:"#80ff80", glow:"rgba(128,255,128,0.6)", vanberto:"Acompanhado e visível!", set:3 },
  { emoji:"🏆", name:"Taça do Halloween", short:"A Grande Final", color:"#ff6b35", glow:"rgba(255,107,53,0.6)", vanberto:"Guardião do Halloween!", set:3 },
];

export const ARTEFACT_SETS = [
  { name:"Guardiões da Floresta", icon:"🎃", bonus:150 },
  { name:"Guardiões do Castelo",  icon:"🏰", bonus:150 },
  { name:"Guardiões do Cemitério", icon:"🪦", bonus:150 },
  { name:"Guardiões da Mansão",   icon:"🕯️", bonus:200 },
];

export const SET_REACTIONS = [
  "🎃 Conjunto da FLORESTA completo! Os vírus não passam!",
  "🏰 Conjunto do CASTELO completo! As tuas contas estão protegidas!",
  "🪦 Conjunto do CEMITÉRIO completo! Ninguém te engana com phishing!",
  "🕯️ Conjunto COMPLETO! GUARDIÃO SUPREMO do Halloween digital!",
];

export const ACHIEVEMENTS_DEFS = [
  { id:"primeiros_passos", tier:"🥉", name:"Primeiros Passos",        desc:"Completa o primeiro nível." },
  { id:"curioso",          tier:"🥉", name:"Curioso",                  desc:"Lê 10 curiosidades." },
  { id:"explorador",       tier:"🥈", name:"Explorador",               desc:"Encontra todos os segredos de um nível." },
  { id:"sabio",            tier:"🥈", name:"Sábio",                    desc:"Acerta 20 perguntas." },
  { id:"caca_tesouros",    tier:"🏆", name:"Caçador de Tesouros",      desc:"Encontra todas as salas secretas do jogo." },
  { id:"guardiao",         tier:"🥇", name:"Guardião do Halloween Digital",desc:"Completa o jogo." },
  { id:"mestre",           tier:"🥇", name:"Mestre VanBerto's",        desc:"Acerta todas as perguntas à primeira tentativa." },
  { id:"lenda",            tier:"🏆", name:"Lenda Digital",            desc:"100% de conclusão — todos os níveis e todas as estrelas." },
];
