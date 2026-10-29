// ===== Frases soltas e mensagens de "tempero" — MISSÃO CIBERSEGURANÇA =====
// PRAISE, PAUSE_TIPS, LEVEL_ENTRY_PHRASES, DYNAMIC_MSGS_CORRECT, DYNAMIC_MSGS_WRONG,
// VB_LEVEL_INTRO, VB_HIT, VB_QUIZ_CORRECT, VB_QUIZ_WRONG, VB_STAR_POWER, VB_PERFECT_LEVEL

export const PRAISE = ["🌟 Excelente!", "🛡️ Muito bem!", "🔐 Boa resposta!", "🎉 Fantástico!", "✨ Brilhante!", "🏆 Continua assim!", "🎃 Que resposta de arrepiar... de tão boa!", "🦇 Resposta digna de um Guardião!", "👻 Nem os fantasmas te enganam!", "🧙 Que feitiço de resposta!"];

// PAUSE_TIPS são sobre MECÂNICAS de jogo (agachar, super-salto, power-ups,
// tipos de vilão), não sobre o tema — mantidos tal como no original.
export const PAUSE_TIPS = [
  "🔽 <b>Agachar:</b> Prime ↓, S ou o botão 'Agachar' para te esquivares de ataques altos e passares por baixo de obstáculos!",
  "💡 <b>Star Power:</b> Apanha a estrela ⭐ e atropela vilões durante 8 segundos — +50 pontos cada!",
  "🛡️ <b>Escudo:</b> Fica invencível por 8s e absorve um golpe de qualquer vilão.",
  "🦅 <b>Asas:</b> Dão um segundo salto no ar — ótimo para plataformas altas!",
  "❓ <b>Bloco surpresa:</b> Passa por cima dos blocos <b>❓</b> para revelar itens escondidos!",
  "🟠 <b>Trampolim:</b> Salta numa plataforma laranja para voar muito mais alto que o normal.",
  "🥇 <b>Bónus:</b> Completa um nível sem perder vidas para ganhar +50 pontos extra!",
  "🔴 Trapalhão — lento e previsível. 🔵 Saltitão — salta às vezes. 🟢 Perseguilão — persegue-te!",
  "❤️ <b>Coração:</b> Apanha-o para ganhar +1 vida (máximo 5 ao mesmo tempo).",
  "🦘 <b>Nível dos Trampolins:</b> Os vãos são intransponíveis sem trampolim — procura-os no chão!",
  "🔥 <b>Nível da Lava:</b> O chão queima! Mantém-te sempre em cima das plataformas.",
  "🏃 <b>Nível da Esteira:</b> Todas as plataformas se movem — observa o ritmo antes de saltar!"
];

// Frase curta mostrada ao entrar em cada nível — alinhada por posição no
// array LEVELS (0-19), NÃO por artIdx.
export const LEVEL_ENTRY_PHRASES = [
  "O Halloween nasceu há mais de 2000 anos! 🎃",
  "Uma abóbora, uma luz e muita magia! 🏮",
  "Escolhe um fato seguro e divertido! 🎭",
  "Doces ou travessuras? Vai sempre acompanhado! 🍬",
  "Os morcegos veem com os ouvidos! 🦇",
  "Oito patas, uma teia e muita paciência! 🕸️",
  "Nem todo o susto é o que parece! 👻",
  "Bruxas e vassouras: só fantasia! 🧙",
  "Drácula, múmias e lobisomens! 🧟",
  "206 ossos num só esqueleto! 💀",
  "Pão-por-Deus e Todos os Santos! 🕯️",
  "Cada país festeja à sua maneira! 🌍",
  "A Lua só brilha com a luz do Sol! 🌕",
  "A noite é das corujas e dos gatos! 🦉",
  "Pão por Deus, bolinho no saco! 🧺",
  "A ciência faz poções de verdade! 🧪",
  "Conta uma história de arrepiar! 📖",
  "Com números, até os doces se contam! 🔢",
  "Halloween seguro é Halloween feliz! 🔦",
  "A grande final do Halloween! 🏆"
];

export const DYNAMIC_MSGS_CORRECT = [
  "🌟 Fantástico!", "✨ Excelente!", "🎉 És incrível!",
  "🛡️ Sabia que conseguias!", "🏆 Tesouro protegido!", "🔐 Muito bem!"
];

export const DYNAMIC_MSGS_WRONG = [
  "💪 Quase!", "🔄 Vamos tentar novamente!", "📚 Aprender também é vencer!",
  "❤️ Não desistas!", "💡 Próxima vez consegues!"
];

// Fala mais longa do VanBerto's à entrada de cada nível — indexada por
// posição no array LEVELS (0-19), NÃO por artIdx. O motor usa sempre
// VB_LEVEL_INTRO[0] no arranque do jogo (ver dia-crianca.js).
export const VB_LEVEL_INTRO = [
  "Hoje vamos descobrir a origem do Halloween! 🎃 Estás preparado?",
  "As abóboras iluminadas vêm de uma lenda antiga! 🏮 Vamos descobrir qual?",
  "Fatos e máscaras têm história! 🎭 Vamos aprender a escolher um fato seguro?",
  "Doces ou travessuras! 🍬 Vamos ver como pedir doces em segurança?",
  "Ouço asas por perto! 🦇 Vamos descobrir os segredos dos morcegos?",
  "Cuidado com as teias! 🕸️ Vamos descobrir como vivem as aranhas?",
  "Ouço ruídos estranhos! 👻 Vamos descobrir a explicação por trás dos sustos?",
  "Há vassouras a voar! 🧙 Vamos separar a fantasia da realidade?",
  "Monstros famosos à vista! 🧟 Vamos descobrir as suas histórias?",
  "Sinto ossos a ranger! 💀 Vamos aprender como é o nosso esqueleto?",
  "Em Portugal, também há tradições nesta altura! 🕯️ Vamos conhecê-las?",
  "O Halloween dá a volta ao mundo! 🌍 Vamos viajar pelas tradições?",
  "A Lua cheia ilumina o caminho! 🌕 Vamos descobrir os seus segredos?",
  "A noite está cheia de olhos a brilhar! 🦉 Vamos conhecer os animais noturnos?",
  "É dia de Pão-por-Deus! 🧺 Vamos descobrir esta tradição portuguesa?",
  "Vou preparar uma poção! 🧪 Vamos descobrir a ciência por trás da magia?",
  "Já sabes contar histórias de arrepiar? 📖 Vamos inventar uma?",
  "Há doces para contar! 🔢 Vamos fazer contas e descobrir padrões?",
  "Antes de a noite começar, vamos rever a segurança! 🔦 Estás pronto?",
  "Chegámos à grande final! 🏆 Vamos mostrar tudo o que aprendemos?"
];

export const VB_HIT = [
  "Ups! Perdemos uma vida, mas os heróis nunca desistem! 💪",
  "Autsch! Cuida-te! Os vilões estão rápidos hoje! 🔴",
  "Ai! Respira fundo e vamos de novo! ❤️",
  "Atenção aos vilões! Já consegues! 🛡️",
  "Não faz mal! Cada erro ensina algo novo! 📚",
  "Vamos lá, guerreiro digital! Ainda temos vidas! 🌟"
];

export const VB_QUIZ_CORRECT = [
  "INCRÍVEL! Sabias mesmo a resposta! 🏆",
  "Que craque! Tesouro recuperado! ✨",
  "Fantástico! Estou tão orgulhoso de ti! 🎉",
  "Isso mesmo! O Halloween agradece! 🎃",
  "Brilhante! Nada te escapa! 🌟",
  "Que resposta! Mereces uma estrela! ⭐"
];

export const VB_QUIZ_WRONG = [
  "Quase! Aprende e vai mais forte na próxima! 📖",
  "Não faz mal! Errar também é aprender! 💡",
  "Boa tentativa! Desta vez não foi, mas chegas lá! 💪",
  "Até os heróis erram — o importante é tentar! ❤️",
  "Relê a dica e tenta outra vez! 🔄"
];

export const VB_STAR_POWER = [
  "STAR POWER! Agora és IMPARÁVEL! ⭐",
  "Uau, a estrela! Vai atropelar tudo! 💥",
  "SUPER VANBERTO'S ATIVADO! 🌟",
  "Estrela apanhada! 8 segundos de glória! ✨"
];

export const VB_PERFECT_LEVEL = [
  "PERFEITO! Nenhuma vida perdida! Lendário! 🏆",
  "Uau! Passaste o nível sem um arranhão! ⭐",
  "Impecável! Guardião do Halloween nível máximo! 🌟",
  "Incrível! Isso merecia um bónus extra! 🎉"
];
