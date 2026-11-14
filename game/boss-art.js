/*************************************************
 * Arte dos bosses (imagens recortadas) — Halloween.
 * Cada boss é uma tira PNG (fundo transparente) com 7 expressões lado a lado. Aqui desenhamos, para cada um,
 * a textura "boss_<id>" (e as variantes _laugh / _ouch / _angry / _sad / _blink / _armsdown que o motor já usa)
 * numa tela de 232×232 — o dobro da antiga (116×116) — para a hitbox e o tamanho no ecrã ficarem iguais
 * (bossScale 0.75 em vez de 1.5).
 * Expressões da tira: 0 ameaçador · 1 sorriso · 2 piscar de olho · 3 atingido · 4 a rir · 5 furioso · 6 triste.
 *************************************************/
export const BOSS_ART = {
  virus_gigante:    { file: "boss-abobora.png",  cw: 258, ch: 230 },   // Rei Abóbora (mundo 1)
  monstro_phishing: { file: "boss-fantasma.png", cw: 241, ch: 248 },   // Fantasma Hacker (mundo 2)
  robo_spam:        { file: "boss-bruxa.png",    cw: 221, ch: 260 },   // Bruxa do Phishing (mundo 3)
  espiao_sombras:   { file: "boss-vampiro.png",  cw: 231, ch: 248 }    // Senhor das Sombras Digitais (mundo 4)
};
// variante do motor → coluna da tira
const VARIANTS = [["", 0], ["_laugh", 4], ["_ouch", 3], ["_angry", 5], ["_sad", 6], ["_blink", 2], ["_armsdown", 1]];

export function loadBossArt(scene) {
  Object.entries(BOSS_ART).forEach(([id, a]) => {
    if (!scene.textures.exists("bossimg_" + id)) scene.load.image("bossimg_" + id, a.file);
  });
}

function canvasTex(scene, key, w, h) {
  if (scene.textures.exists(key)) scene.textures.remove(key);
  const t = scene.textures.createCanvas(key, w, h);
  return { t, c: t.getContext() };
}

export function buildBossArt(scene) {
  const S = 232;
  Object.entries(BOSS_ART).forEach(([id, a]) => {
    const srcKey = "bossimg_" + id;
    if (!scene.textures.exists(srcKey)) return;                 // sem imagem → mantém o desenho antigo
    const img = scene.textures.get(srcKey).getSourceImage();
    if (!img || !img.width) return;
    const k = Math.min(210 / a.cw, 212 / a.ch);
    const w = a.cw * k, h = a.ch * k;
    const draw = (c, col) => {
      c.clearRect(0, 0, S, S);
      c.drawImage(img, col * a.cw, 0, a.cw, a.ch, (S - w) / 2, 214 - h, w, h);   // pés a ~107px do centro (como o desenho antigo)
    };
    const done = new Set();
    VARIANTS.forEach(([suffix, col]) => {
      const { t, c } = canvasTex(scene, "boss_" + id + suffix, S, S);
      draw(c, col); t.refresh(); done.add("boss_" + id + suffix);
    });
    // Qualquer outra variante do desenho antigo passa a mostrar a expressão normal
    scene.textures.getTextureKeys().filter(k2 => k2.startsWith("boss_" + id + "_") && !done.has(k2)).forEach(k2 => {
      const { t, c } = canvasTex(scene, k2, S, S);
      draw(c, 0); t.refresh();
    });
  });
}
