// ===== HALLOWEEN — decoração da «Edição de Halloween» (morcegos a voar + névoa + luzinhas + botão «Morcegos») =====
// Fica isolado do resto do jogo: não mexe no Phaser nem no progresso. Para tirar o efeito, basta
// apagar a linha <script src="halloween.js"> do index.html (o jogo continua a funcionar sem ele).
// Os morcegos desenham-se num <canvas> por cima de tudo, sem apanhar cliques (pointer-events:none).

const FX_KEY = "vanbertos_halloween_morcegos_v1";   // "1" = ligados, "0" = desligados (só neste dispositivo)
const reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

function loadPref() {
  try { const v = localStorage.getItem(FX_KEY); if (v === "0") return false; if (v === "1") return true; } catch {}
  return !reduceMotion;                          // por omissão: ligados, a não ser que o sistema peça menos movimento
}
function savePref(v) { try { localStorage.setItem(FX_KEY, v ? "1" : "0"); } catch {} }

let fxOn = loadPref();

// ---------- Morcegos e névoa ----------
const canvas = document.createElement("canvas");
canvas.id = "hwFx";
canvas.setAttribute("aria-hidden", "true");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, bats = [], mist = [], raf = 0, last = 0;
// Modo económico automático: se o computador estiver lento, há menos morcegos e, em último caso, desliga-se
// (só nesta sessão — a escolha guardada no botão não é alterada).
let lite = 0;                                    // 0 = normal, 1 = menos morcegos e sem névoa/animação nas luzes, 2 = efeitos desligados
let prevRaw = 0, sumRaw = 0, nRaw = 0, startedAt = performance.now(), scale = 1;

function makeBats() {
  const n = Math.max(3, Math.round(Math.max(4, Math.min(9, Math.round((W * H) / 150000))) * scale));
  bats = Array.from({ length: n }, () => newBat(true));
  mist = lite >= 1 ? [] : Array.from({ length: 5 }, () => ({
    x: Math.random() * W, y: H * (0.6 + Math.random() * 0.4),
    r: 90 + Math.random() * 120, v: 6 + Math.random() * 10, o: 0.05 + Math.random() * 0.05,
  }));
}
function newBat(anywhere) {
  const dir = Math.random() < 0.5 ? 1 : -1;
  return {
    x: anywhere ? Math.random() * W : (dir > 0 ? -30 : W + 30),
    y: 30 + Math.random() * H * 0.45,
    s: 0.6 + Math.random() * 0.7,                // tamanho
    v: (30 + Math.random() * 55) * dir,          // velocidade horizontal (px/s)
    a: Math.random() * Math.PI * 2,              // fase do bater de asas e do balanço
    f: 7 + Math.random() * 4,                    // frequência do bater de asas
    o: 0.55 + Math.random() * 0.3,               // opacidade
  };
}
function drawBat(b) {
  const flap = Math.sin(b.a * b.f * 0.35);       // -1..1
  ctx.save(); ctx.translate(b.x, b.y); ctx.scale(b.s * (b.v < 0 ? -1 : 1), b.s);
  ctx.globalAlpha = b.o; ctx.fillStyle = "#0d0420";
  ctx.beginPath(); ctx.ellipse(0, 0, 4, 5.5, 0, 0, Math.PI * 2); ctx.fill();               // corpo
  ctx.beginPath(); ctx.moveTo(-2.5, -4); ctx.lineTo(-1.5, -8); ctx.lineTo(0, -5); ctx.lineTo(1.5, -8); ctx.lineTo(2.5, -4); ctx.fill(); // orelhas
  for (const sg of [-1, 1]) {                    // asas
    const lift = -10 * flap;
    ctx.beginPath(); ctx.moveTo(sg * 3, -1);
    ctx.quadraticCurveTo(sg * 12, -9 + lift, sg * 22, -2 + lift * 0.6);
    ctx.quadraticCurveTo(sg * 18, 0 + lift * 0.3, sg * 15, 3 + lift * 0.2);
    ctx.quadraticCurveTo(sg * 11, 0, sg * 8, 4);
    ctx.quadraticCurveTo(sg * 5, 1, sg * 3, 5); ctx.closePath(); ctx.fill();
  }
  ctx.fillStyle = "#ffb347"; ctx.globalAlpha = Math.min(1, b.o + 0.2);                    // olhinhos
  ctx.beginPath(); ctx.arc(-1.6, -1.5, 0.9, 0, Math.PI * 2); ctx.arc(1.6, -1.5, 0.9, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}
function resize() {
  W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight;
  makeBats();
}
function degrade() {
  lite++;
  if (lite === 1) { scale = 0.5; makeBats(); lights.classList.add("lite"); }
  else if (lite >= 2) { fxAuto = false; apply(); }
}
let fxAuto = true;
function frame(t) {
  raf = 0;
  if (!fxOn || !fxAuto) { ctx.clearRect(0, 0, W, H); return; }
  raf = requestAnimationFrame(frame);
  if (document.hidden) { last = t; prevRaw = 0; return; }
  // mede o ritmo real do navegador (ignora os primeiros 4 s, em que o jogo ainda está a carregar)
  if (prevRaw && t - prevRaw < 500 && performance.now() - startedAt > 4000) {
    sumRaw += t - prevRaw; nRaw++;
    if (nRaw >= 90) { const mean = sumRaw / nRaw; sumRaw = 0; nRaw = 0; if (mean > 55 && lite < 2) degrade(); }
  }
  prevRaw = t;
  if (t - last < 33) return;                     // ~30 imagens/s chegam (poupa o computador)
  const dt = Math.min(0.1, (t - last) / 1000 || 0.033); last = t;
  ctx.clearRect(0, 0, W, H);
  for (const m of mist) {                        // névoa roxa a deslizar junto ao chão
    m.x += m.v * dt; if (m.x - m.r > W) m.x = -m.r;
    const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r);
    g.addColorStop(0, "rgba(190,140,255," + m.o + ")"); g.addColorStop(1, "rgba(190,140,255,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2); ctx.fill();
  }
  for (let i = 0; i < bats.length; i++) {
    const b = bats[i];
    b.a += dt; b.x += b.v * dt; b.y += Math.sin(b.a * 2.2) * 14 * dt;
    if ((b.v > 0 && b.x > W + 40) || (b.v < 0 && b.x < -40)) { bats[i] = newBat(false); continue; }
    drawBat(b);
  }
  ctx.globalAlpha = 1;
}
function apply() {
  const show = fxOn && fxAuto;
  canvas.style.display = show ? "block" : "none";
  if (show && !raf) raf = requestAnimationFrame(frame);
  if (!show) { cancelAnimationFrame(raf); raf = 0; ctx.clearRect(0, 0, W, H); }
  const btn = document.getElementById("btnNevoeiro");
  if (btn) {
    // em ecrãs estreitos o texto encurta-se, para a linha de botões do menu continuar numa só linha
    const narrow = window.matchMedia && window.matchMedia("(max-width: 480px)").matches;
    btn.textContent = (narrow ? "🦇 " : "🦇 Morcegos: ") + (fxOn && fxAuto ? "ON" : "OFF");
    btn.setAttribute("aria-label", "Morcegos: " + (fxOn && fxAuto ? "ligados" : "desligados"));
    btn.setAttribute("aria-pressed", String(fxOn));
  }
}

// ---------- Luzinhas de Halloween (fio no topo do ecrã) ----------
const lights = document.createElement("div");
lights.id = "hwLights";
lights.setAttribute("aria-hidden", "true");
const COLORS = ["#ff8a1f", "#9b4dff", "#7dff5a", "#ff8a1f"];
function buildLights() {
  const n = Math.max(8, Math.floor(window.innerWidth / 30));
  lights.textContent = "";
  for (let i = 0; i < n; i++) {
    const b = document.createElement("i");
    b.style.setProperty("--c", COLORS[i % COLORS.length]);
    b.style.animationDelay = ((i % 4) * 0.4) + "s";
    lights.appendChild(b);
  }
}

function init() {
  document.body.appendChild(canvas);
  resize(); apply();
  let rt = 0;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); apply(); }, 150); });
  const btn = document.getElementById("btnNevoeiro");
  if (btn) btn.addEventListener("click", () => {
    if (fxOn && !fxAuto) { fxAuto = true; lite = 0; scale = 1; lights.classList.remove("lite"); makeBats(); sumRaw = nRaw = 0; startedAt = performance.now(); } // tenta outra vez
    else { fxOn = !fxOn; savePref(fxOn); }
    apply();
  });
  window.__halloween = { isOn: () => fxOn && fxAuto, liteLevel: () => lite, setFx: (v) => { fxOn = !!v; savePref(fxOn); apply(); } };
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
