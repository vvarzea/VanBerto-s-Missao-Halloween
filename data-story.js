// ===== Conteúdo narrativo — MISSÃO CIBERSEGURANÇA =====
// Ficheiro puramente de dados, sem lógica de jogo.

const _ORDEM_MUNDOS = [0, 5, 9, 12, 4, 11, 2, 16, 1, 7, 14, 3, 13, 15, 8, 17, 6, 10, 18, 19]; // nível i usa o tema antigo _ORDEM_MUNDOS[i] (reordenado pelos 4 mundos)
export const REGION_INTRO = {
  origens: {
    vanberto: "Esta floresta está cheia de ficheiros suspeitos... vamos descobrir os vírus e proteger o computador!",
    arrival: "Bem-vindo à Floresta Assombrada dos Vírus — a Internet, os dispositivos e o malware. 🦇 Há abóboras a brilhar entre as árvores e o Rei Malware esconde-se algures! 🎃"
  },
  desenvolvimento: {
    vanberto: "Este castelo guarda as chaves digitais... não deixemos os fantasmas entrar nas contas!",
    arrival: "Bem-vindo ao Castelo das Palavras-Passe Perdidas — palavras-passe fortes e dados pessoais protegidos. 👻 Os fantasmas guardiões andam à solta! 🔐"
  },
  protecao: {
    vanberto: "Estas mensagens brilham no escuro... vamos descobrir quais são falsas!",
    arrival: "Bem-vindo ao Cemitério das Mensagens Malditas — phishing, notícias falsas e links suspeitos. 🪦 A Bruxa do Phishing está a preparar mensagens tentadoras! ✉️"
  },
  participacao: {
    vanberto: "Estamos quase lá! Sinto todas as ameaças juntas nas sombras desta mansão...",
    arrival: "Bem-vindo à Mansão das Sombras Digitais — privacidade, fotografias, desconhecidos e segurança online. 🧪 O Senhor das Sombras espera pelo desafio final! 🕯️"
  }
};

// "{N}" é substituído pelo número real de saltos necessários (def.hp, já
// com o +1 do modo Difícil aplicado) no momento em que o texto é mostrado —
// ver startBossFight() em dia-crianca.js. Nunca escrever o número aqui
// diretamente: antes disto, os 4 textos tinham sempre "3 vezes" fixo, o que
// ficava errado no modo Difícil (onde o boss aguenta 4 saltos).
export const BOSS_OBJECTIVE = {
  virus_gigante: "Desvia-te dos ficheiros infetados 🦠 que o Rei Malware atira e salta-lhe em cima {N} vezes para o vencer!",
  // CORRIGIDO — este texto ainda descrevia a bola "?" roxa genérica de
  // antes do redesenho "pirata-hacker" (ver orbTexture:"boss_proj_hook" e
  // hookDrift em data-bosses.js): o ataque deste boss já tinha passado a
  // ser um anzol lançado na horizontal, mas o letreiro nunca foi atualizado.
  monstro_phishing: "Desvia-te dos feitiços de palavras-passe 🔑 que o Fantasma Hacker lança e salta-lhe em cima {N} vezes para o vencer!",
  robo_spam: "A Bruxa do Phishing patrulha depressa a espalhar mensagens falsas ✉️ — apanha o ritmo e salta-lhe em cima {N} vezes para o vencer!",
  // CORRIGIDO (pedido: "no nível do último boss faz isto, não quero nada
  // disto") — este texto ainda descrevia o teletransporte antigo ("ele
  // teleporta-se... assim que ele reaparecer"), que já foi removido (ver
  // movementType em data-bosses.js: passou de "teleport" para "patrol",
  // mais rápido que todos os outros 3, mas nunca desaparece do ecrã). O
  // texto ficava a prometer um comportamento que já não existe.
  espiao_sombras: "O Senhor das Sombras Digitais anda muito depressa a atirar orbes sombrios 🔮! Salta-lhe em cima {N} vezes para o vencer!"
};

// Diálogo de boss, por boss.
// "reaction" = fala do VanBerto's ANTES do boss se apresentar (pressentir o perigo).
// "rally"    = fala do VanBerto's DEPOIS da ameaça do boss, mesmo antes do combate começar.
export const BOSS_INTRO_VB = {
  virus_gigante: {
    reaction: "Ugh, esta floresta está cheia de ficheiros suspeitos... alguma coisa aqui não está nada bem.",
    rally: "Vamos mostrar ao Rei Malware que um dispositivo protegido é mais forte!"
  },
  monstro_phishing: {
    reaction: "Há um fantasma a rondar as nossas contas... alguém quer adivinhar as palavras-passe!",
    rally: "Não vai resultar! As nossas palavras-passe são fortes e secretas!"
  },
  robo_spam: {
    reaction: "Estas mensagens brilham demais para serem de confiança... é um feitiço de phishing!",
    rally: "Não vamos clicar em links suspeitos! Vamos verificar sempre a origem!"
  },
  espiao_sombras: {
    reaction: "Está tudo tão escuro aqui dentro... como se todas as ameaças se tivessem juntado.",
    rally: "As sombras não resistem quando protegemos a nossa privacidade e pedimos ajuda!"
  }
};

// Uma única fala de vitória por boss, ligada à competência que acabou de ser recuperada.
export const BOSS_VICTORY_VB = {
  virus_gigante: "Conseguimos! A floresta está limpa e o nosso dispositivo protegido!",
  monstro_phishing: "Vencemos! As nossas contas estão seguras com palavras-passe fortes!",
  robo_spam: "Feitiço desfeito! Agora sabemos reconhecer mensagens falsas e links suspeitos!",
  espiao_sombras: "A nossa privacidade venceu as Sombras Digitais! Está tudo seguro!"
};

// Frases curtas mostradas (sem parar o jogo, só um "floatie") sempre que se
// apanha um objeto de conhecimento no combate do Fantasma Hacker.
export const KNOWLEDGE_FACTS = [
  "🔐 Uma boa palavra-passe protege-nos.",
  "🔗 Nunca clicar em links suspeitos.",
  "🌟 Cibersegurança é um hábito diário.",
  "🧠 Pensar antes de clicar é um super-poder.",
  "🆘 Pedir ajuda também é proteger-nos."
];

// Falas curtas do boss em marcos de HP durante o combate.
export const BOSS_HP_TAUNTS = {
  virus_gigante: {
    atStart: ["Vou multiplicar-me sem parar!", "Não me consegues apanhar!", "Infeto todos os ficheiros da floresta!"],
    hp2: ["Argh! Isso picou...", "Não contava com esse salto!", "Ainda tenho força de sobra!"],
    hp1: ["Não... o antivírus é forte demais!", "Isto não pode ser...", "Estou a ser eliminado!"]
  },
  monstro_phishing: {
    atStart: ["Vou adivinhar as tuas palavras-passe!", "Uhuhuhu! Ninguém me escapa!", "Achas mesmo que me vais vencer?"],
    hp2: ["Isso foi sorte!", "Não contava com esse alerta...", "Grrr, tenta outra vez!"],
    hp1: ["Não! As palavras-passe eram fortes demais!", "Isto não pode ser...", "A segurança... é mais forte!"]
  },
  robo_spam: {
    atStart: ["Tenho mensagens tentadoras só para ti!", "Não me apanhas, sou rápida demais!", "Clica no link, clica no link!"],
    hp2: ["Essa estragou-me o feitiço!", "Não contava com essa pancada!", "Ainda tenho muitas mensagens para enviar!"],
    hp1: ["Não... estão todas a ser descobertas!", "O meu feitiço... está a falhar!", "Isto não pode ser!"]
  },
  espiao_sombras: {
    atStart: ["Todas as ameaças estão comigo!", "Nunca me vais apanhar no ar!", "Ninguém escapa às Sombras Digitais!"],
    hp2: ["Impossível! Consegues ver-me na sombra?", "Isso não devia ter acontecido...", "Grrr, mais rápido da próxima vez!"],
    hp1: ["Não... a tua segurança está a vencer!", "As sombras... estão a desaparecer!", "Isto não pode ser o fim!"]
  }
};

// Um "letreiro"/NPC por nível — alinhado por artIdx (0-19), tal como HISTORY[].
export const NPC_SIGNS = [
  { emoji:"🌐", text:"Sabias que a primeira página web foi publicada em 1991?" },
  { emoji:"🔐", text:"Uma palavra-passe com 12 ou mais carateres é muito mais difícil de adivinhar!" },
  { emoji:"🪪", text:"Nunca partilhes a tua morada ou telefone com quem só conheces online." },
  { emoji:"🆘", text:"Linha Internet Segura: 800 21 90 90 (gratuita, dias úteis). Em perigo, liga 112!" },
  { emoji:"🦠", text:"Um antivírus atualizado é como uma vacina para o teu computador!" },
  { emoji:"🎮", text:"Sabias que os jogos têm uma idade mínima recomendada (PEGI) escrita na caixa?" },
  { emoji:"👣", text:"Tudo o que publicas online deixa uma pegada digital — pensa sempre antes de publicar!" },
  { emoji:"📰", text:"Antes de acreditares numa notícia chocante, procura-a noutra fonte de confiança." },
  { emoji:"🎣", text:"Um link urgente e suspeito é quase sempre um sinal de phishing!" },
  { emoji:"💻", text:"Atualizar o teu telemóvel ou computador fecha portas a quem quer atacar." },
  { emoji:"👨‍👩‍👧", text:"Combinar regras de ecrã com a família ajuda todos a navegar com equilíbrio." },
  { emoji:"📶", text:"Em Wi-Fi público, evita iniciar sessão em contas com dados importantes." },
  { emoji:"💾", text:"Uma cópia de segurança pode salvar-te de perder um trabalho inteiro!" },
  { emoji:"♿", text:"Leitores de ecrã e legendas tornam a internet acessível a todos!" },
  { emoji:"🛒", text:"Uma oferta boa demais para ser verdade... normalmente não é verdade." },
  { emoji:"📢", text:"O botão de denúncia existe para te proteger — usa-o sem medo!" },
  { emoji:"🧑‍💻", text:"A maioria das redes sociais só permite criar conta a partir dos 13 anos." },
  { emoji:"🔒", text:"Pede sempre autorização antes de publicares uma foto com outras pessoas." },
  { emoji:"🚫", text:"Se um desconhecido insistir para guardares segredo, conta sempre a um adulto." },
  { emoji:"⚖️", text:"Sabias que, desde 2021, a ONU reconhece direitos das crianças também online?" }
];
NPC_SIGNS.splice(0, 20, ..._ORDEM_MUNDOS.map(i => NPC_SIGNS[i]));
