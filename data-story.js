// ===== Conteúdo narrativo — MISSÃO CIBERSEGURANÇA =====
// Ficheiro puramente de dados, sem lógica de jogo.

export const REGION_INTRO = {
  origens: {
    vanberto: "Esta floresta está cheia de abóboras acesas e morcegos... vamos descobrir os segredos do Halloween!",
    arrival: "Bem-vindo à Floresta Assombrada dos Vírus — a origem do Halloween, as abóboras, os fatos, os doces e os morcegos. 🦇 O Rei Abóbora esconde-se algures! 🎃"
  },
  desenvolvimento: {
    vanberto: "Este castelo está cheio de fantasmas, teias e vassouras... mas sabemos que os sustos têm explicação!",
    arrival: "Bem-vindo ao Castelo das Palavras-Passe Perdidas — aranhas, fantasmas, bruxas e monstros famosos. 👻 O Fantasma Hacker guarda as chaves digitais! 🔐"
  },
  protecao: {
    vanberto: "Neste cemitério vamos descobrir tradições, a Lua e os animais da noite!",
    arrival: "Bem-vindo ao Cemitério das Mensagens Malditas — esqueletos, Todos os Santos, a Lua e os animais da noite. 🪦 A Bruxa do Phishing prepara mensagens tentadoras! ✉️"
  },
  participacao: {
    vanberto: "Estamos quase lá! Esta mansão guarda poções, histórias e o desafio final...",
    arrival: "Bem-vindo à Mansão das Sombras Digitais — poções, lendas, matemática e segurança. 🧪 O Senhor das Sombras espera pelo desafio final! 🕯️"
  }
};

// "{N}" é substituído pelo número real de saltos necessários (def.hp, já
// com o +1 do modo Difícil aplicado) no momento em que o texto é mostrado —
// ver startBossFight() em dia-crianca.js. Nunca escrever o número aqui
// diretamente: antes disto, os 4 textos tinham sempre "3 vezes" fixo, o que
// ficava errado no modo Difícil (onde o boss aguenta 4 saltos).
export const BOSS_OBJECTIVE = {
  virus_gigante: "Desvia-te das abóboras infetadas 🎃 que o Rei Abóbora atira e salta-lhe em cima {N} vezes para o vencer!",
  // CORRIGIDO — este texto ainda descrevia a bola "?" roxa genérica de
  // antes do redesenho "pirata-hacker" (ver orbTexture:"boss_proj_hook" e
  // hookDrift em data-bosses.js): o ataque deste boss já tinha passado a
  // ser um anzol lançado na horizontal, mas o letreiro nunca foi atualizado.
  monstro_phishing: "Desvia-te das chaves 🔑 que o Fantasma Hacker lança e salta-lhe em cima {N} vezes para o vencer!",
  robo_spam: "A Bruxa do Phishing patrulha depressa e atira morcegos 🦇 para apanhar — apanha o ritmo e salta-lhe em cima {N} vezes para o vencer!",
  // CORRIGIDO (pedido: "no nível do último boss faz isto, não quero nada
  // disto") — este texto ainda descrevia o teletransporte antigo ("ele
  // teleporta-se... assim que ele reaparecer"), que já foi removido (ver
  // movementType em data-bosses.js: passou de "teleport" para "patrol",
  // mais rápido que todos os outros 3, mas nunca desaparece do ecrã). O
  // texto ficava a prometer um comportamento que já não existe.
  espiao_sombras: "O Senhor das Sombras Digitais anda muito depressa a atirar morcegos 🦇! Salta-lhe em cima {N} vezes para o vencer!"
};

// Diálogo de boss, por boss.
// "reaction" = fala do VanBerto's ANTES do boss se apresentar (pressentir o perigo).
// "rally"    = fala do VanBerto's DEPOIS da ameaça do boss, mesmo antes do combate começar.
export const BOSS_INTRO_VB = {
  virus_gigante: {
    reaction: "Ugh, esta floresta está cheia de ficheiros suspeitos... alguma coisa aqui não está nada bem.",
    rally: "Vamos mostrar ao Rei Abóbora que um dispositivo protegido é mais forte!"
  },
  monstro_phishing: {
    reaction: "Há um fantasma a rondar as nossas contas... alguém quer adivinhar as palavras-passe!",
    rally: "Não vai resultar! As nossas palavras-passe são fortes e secretas!"
  },
  robo_spam: {
    reaction: "Estes morcegos brilham demais... há um feitiço no ar!",
    rally: "Vamos apanhar os morcegos e responder com coragem!"
  },
  espiao_sombras: {
    reaction: "Está tudo tão escuro aqui dentro... como se todas as ameaças se tivessem juntado.",
    rally: "As sombras não resistem quando somos corajosos e curiosos!"
  }
};

// Uma única fala de vitória por boss, ligada à competência que acabou de ser recuperada.
export const BOSS_VICTORY_VB = {
  virus_gigante: "Conseguimos! O Rei Abóbora foi derrotado e a floresta está protegida!",
  monstro_phishing: "Vencemos! O Fantasma Hacker não nos assusta! Sabemos muito mais agora!",
  robo_spam: "Feitiço desfeito! Agora sabemos mais sobre o Halloween e o Pão-por-Deus! 🧙",
  espiao_sombras: "A nossa curiosidade venceu as Sombras Digitais! Está tudo em segurança!"
};

// Frases curtas mostradas (sem parar o jogo, só um "floatie") sempre que se
// apanha um objeto de conhecimento no combate do Fantasma Hacker.
export const KNOWLEDGE_FACTS = [
  "🎃 O Samhain foi a festa celta que deu origem ao Halloween.",
  "🧺 No Pão-por-Deus, as crianças recebem pão, broas e romãs.",
  "🦇 Os morcegos veem com os ouvidos: usam o eco!",
  "🌕 A Lua só brilha porque reflete a luz do Sol.",
  "🔦 Vai sempre acompanhado e leva uma lanterna."
];

// Falas curtas do boss em marcos de HP durante o combate.
export const BOSS_HP_TAUNTS = {
  virus_gigante: {
    atStart: ["Vou encher-te de abóboras!", "Não me consegues apanhar!", "Infeto todas as abóboras da floresta!"],
    hp2: ["Argh! Isso picou...", "Não contava com esse salto!", "Ainda tenho força de sobra!"],
    hp1: ["Não... a minha coroa está a ceder!", "Isto não pode ser...", "Estou a ser derrotado!"]
  },
  monstro_phishing: {
    atStart: ["Vou adivinhar as tuas palavras-passe!", "Uhuhuhu! Ninguém me escapa!", "Achas mesmo que me vais vencer?"],
    hp2: ["Isso foi sorte!", "Não contava com esse alerta...", "Grrr, tenta outra vez!"],
    hp1: ["Não! As palavras-passe eram fortes demais!", "Isto não pode ser...", "A segurança... é mais forte!"]
  },
  robo_spam: {
    atStart: ["Tenho cartas amaldiçoadas só para ti!", "Não me apanhas, sou rápida demais!", "Apanha os morcegos, apanha os morcegos! Hehehe!"],
    hp2: ["Essa estragou-me o feitiço!", "Não contava com essa pancada!", "Ainda tenho muitos morcegos para enviar!"],
    hp1: ["Não... estão todas a ser descobertas!", "O meu feitiço... está a falhar!", "Isto não pode ser!"]
  },
  espiao_sombras: {
    atStart: ["Todas as ameaças estão comigo!", "Os meus morcegos vão apanhar-te!", "Ninguém escapa às Sombras Digitais!"],
    hp2: ["Impossível! Consegues ver-me na sombra?", "Isso não devia ter acontecido...", "Grrr, mais rápido da próxima vez!"],
    hp1: ["Não... a tua segurança está a vencer!", "As sombras... estão a desaparecer!", "Isto não pode ser o fim!"]
  }
};

// Um "letreiro"/NPC por nível — alinhado por artIdx (0-19), tal como HISTORY[].
export const NPC_SIGNS = [
  { emoji:"🎃", text:"Sabias que o Halloween se celebra há mais de 2000 anos, desde o Samhain celta?" },
  { emoji:"🏮", text:"As primeiras lanternas eram feitas de nabos, na Irlanda!" },
  { emoji:"🎭", text:"Um fato com fitas refletoras ajuda os condutores a ver-te à noite." },
  { emoji:"🍬", text:"Em Portugal, o Pão-por-Deus é a 1 de novembro. Vai sempre com um adulto!" },
  { emoji:"🦇", text:"Os morcegos são os únicos mamíferos que voam de verdade!" },
  { emoji:"🕸️", text:"As aranhas têm oito patas, por isso não são insetos." },
  { emoji:"👻", text:"Quando aproximas um objeto da luz, a sua sombra fica maior!" },
  { emoji:"🧙", text:"As bruxas do Halloween são só fantasia: diverte-te sem acreditar em superstições." },
  { emoji:"🧟", text:"Frankenstein é o nome do cientista, não o do monstro!" },
  { emoji:"💀", text:"Um adulto tem 206 ossos, mas um bebé nasce com cerca de 300!" },
  { emoji:"🕯️", text:"O Dia de Todos os Santos, 1 de novembro, é feriado nacional em Portugal." },
  { emoji:"🌍", text:"No México, o Dia de Muertos recorda com alegria quem já partiu." },
  { emoji:"🌕", text:"A Lua não tem luz própria: reflete a luz do Sol." },
  { emoji:"🦉", text:"As corujas conseguem rodar a cabeça cerca de 270 graus!" },
  { emoji:"🧺", text:"No Pão-por-Deus, as crianças recebem pão, broas, romãs e frutos secos num saco de pano." },
  { emoji:"🧪", text:"Bicarbonato com vinagre faz bolhas porque liberta dióxido de carbono!" },
  { emoji:"📖", text:"Todas as boas histórias têm início, meio e fim." },
  { emoji:"🔢", text:"Se dobrares uma abóbora esculpida ao meio, os dois lados são iguais: é a simetria!" },
  { emoji:"🔦", text:"Em caso de emergência, liga 112." },
  { emoji:"🏆", text:"Diverte-te, sê curioso e cuida de ti e dos outros!" }
];
