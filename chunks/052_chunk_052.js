
若上一条无法解析，请**只**输出合法 JSON 对象，含 lines（2～8 个字符串，每句≤${vl}字）与 playerAction。`,
            },
          ],
          t,
          "system_generation",
          {},
          [],
          [],
          [],
          !1,
          "",
          h,
        )),
          (E = bk(A)),
          (S = sm(Sx(E == null ? void 0 : E.lines))),
          (E == null ? void 0 : E.playerAction) != null &&
            yk.has(String(E.playerAction).trim()) &&
            (j = String(E.playerAction).trim()));
      } catch {
        return { ok: !1, error: "parse_failed" };
      }
    return S.length < jx
      ? { ok: !1, error: "parse_failed" }
      : { ok: !0, lines: S, playerAction: j };
  }
  let k = kx(A);
  if (!k || !Array.isArray(k))
    try {
      ((A = await a(
        [
          {
            sender: "me",
            text: `${_}

若上一条无法解析，请**只**输出 JSON 数组，长度 2～8，每句≤${vl}字。`,
          },
        ],
        t,
        "system_generation",
        {},
        [],
        [],
        [],
        !1,
        "",
        h,
      )),
        (k = kx(A)));
    } catch {
      return { ok: !1, error: "parse_failed" };
    }
  if (!Array.isArray(k)) return { ok: !1, error: "parse_failed" };
  const C = sm(Sx(k));
  return C.length < jx
    ? { ok: !1, error: "parse_failed" }
    : {
        ok: !0,
        lines: C.length > tm ? C.slice(0, tm) : C,
        playerAction: "none",
      };
}
const _x = ["〇一", "〇二", "〇三", "〇四", "〇五"],
  IV = [
    "命中注定",
    "注定属于",
    "永生永世",
    "离不开你",
    "全世界只剩我们",
    "彻底沉沦",
    "灵魂绑定",
  ],
  nm = "星响",
  wk = 25,
  jk = 6,
  EV = `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700&family=Inter:wght@200;300;400;500&display=swap');

  :root {
    --bg-cream: #F9F8F6;
    --text-ink: #2B2824;
    --text-muted: #8C8881;
    --accent-dust: #E2DCD3;
    --accent-rose: #E6D4D4;
    --line-faint: rgba(43, 40, 36, 0.08);
  }

  .font-serif { font-family: 'Noto Serif SC', serif; }
  .font-sans-pm { font-family: 'Inter', sans-serif; }

  .texture-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.035'/%3E%3C/svg%3E");
    z-index: 50;
    mix-blend-mode: multiply;
  }

  .corner-mark { position: absolute; width: 6px; height: 6px; border-color: var(--text-ink); transition: all 0.3s ease; }
  .corner-tl { top: -1px; left: -1px; border-top: 1px solid; border-left: 1px solid; }
  .corner-tr { top: -1px; right: -1px; border-top: 1px solid; border-right: 1px solid; }
  .corner-bl { bottom: -1px; left: -1px; border-bottom: 1px solid; border-left: 1px solid; }
  .corner-br { bottom: -1px; right: -1px; border-bottom: 1px solid; border-right: 1px solid; }

  .vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 0.3em;
  }

  @keyframes slowBreath {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
    50% { transform: scale(1.08) rotate(5deg); opacity: 0.8; }
  }
  .animate-breath { animation: slowBreath 8s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

  @keyframes slideInUp {
    0% { transform: translateY(20px); opacity: 0; filter: blur(4px); }
    100% { transform: translateY(0); opacity: 1; filter: blur(0); }
  }
  .animate-slide-up { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;
function LV(t, s = "memory_rewrite") {
  const n = t == null ? void 0 : t.compassFeatureState;
  if (!n || typeof n != "object") return {};
  const a = n[s];
  return a && typeof a == "object" ? a : {};
}
function iu(t) {
  return String(t).padStart(2, "0");
}
function id(t) {
  const s = new Date(t);
  return `${iu(s.getMonth() + 1)}月${iu(s.getDate())}日`;
}
function DV(t) {
  const s = new Date(t || Date.now());
  return `${iu(s.getMonth() + 1)}-${iu(s.getDate())} ${iu(s.getHours())}:${iu(s.getMinutes())}`;
}
function Nk(t) {
  return !t || typeof t != "object"
    ? ""
    : `${String((t == null ? void 0 : t.id) || "")}__${Number((t == null ? void 0 : t.createdAt) || 0)}__${String((t == null ? void 0 : t.text) || "")}`;
}
function am(t) {
  if (!t || typeof t != "object") return "";
  const s = String((t == null ? void 0 : t.sourceType) || "chat").trim(),
    n = String(
      (t == null ? void 0 : t.text) ||
        (t == null ? void 0 : t.detailText) ||
        "",
    )
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160);
  return `${s}::${n}`;
}
function Ax(t = [], s = []) {
  const n = new Set((Array.isArray(s) ? s : []).filter(Boolean));
  return n.size === 0
    ? Array.isArray(t)
      ? t
      : []
    : (Array.isArray(t) ? t : []).filter((a) => !n.has(am(a)));
}
function Ub(t = "") {
  const s = String(t || ""),
    n = s.match(/如果当时我选择：([^；\n]+)/),
    a = s.match(/你会这样回应：([^；\n]+)/);
  return {
    roundOneAction: n ? String(n[1] || "").trim() : "",
    roundTwoAction: a ? String(a[1] || "").trim() : "",
  };
}
function ug(t) {
  const s = String(t || "");
  return s
    ? /吵|争|冷战|误会/.test(s)
      ? "误解 / 情绪"
      : /雨|夜|晚/.test(s)
        ? "雨夜 / 留白"
        : /新年|节日|生日/.test(s)
          ? "节点 / 仪式"
          : /电话|消息|回复/.test(s)
            ? "沟通 / 迟疑"
            : "日常 / 心绪"
    : "日常 / 片段";
}
function k1(t = "") {
  const s = String(t || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) return "";
  const n =
    s
      .split(/[。！？!?；;]/)
      .map((a) => a.trim())
      .find(Boolean) || s;
  return n.length <= 28 ? n : `${n.slice(0, 28)}...`;
}
function $V(t = "") {
  const s = String(t || "")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) return "";
  const n = s
    .split(/[。！？!?；;]/)
    .map((r) => r.trim())
    .filter(Boolean);
  if (n.length === 0) return k1(s);
  const a = n[Math.floor(Math.random() * n.length)] || n[0];
  return a.length <= 28 ? a : `${a.slice(0, 28)}...`;
}
function Wd(t = 0, s = []) {
  if (!Array.isArray(s) || s.length === 0) return "";
  const n = Math.abs(Number(t) || 0) % s.length;
  return String(s[n] || "").trim();
}
function Vu(t = {}) {
  const s =
    `${String((t == null ? void 0 : t.language) || "")} ${String((t == null ? void 0 : t.locale) || "")} ${String((t == null ? void 0 : t.roleSetting) || "")} ${String((t == null ? void 0 : t.styleAnchor) || "")}`.toLowerCase();
  return /japanese|日本|日语|ja\b|jp\b/.test(s)
    ? { code: "ja", label: "日语" }
    : /korean|韩国|韩语|ko\b|kr\b/.test(s)
      ? { code: "ko", label: "韩语" }
      : /english|美国|英国|英语|en\b|us\b|uk\b/.test(s)
        ? { code: "en", label: "英语" }
        : /french|法国|法语|fr\b/.test(s)
          ? { code: "fr", label: "法语" }
          : /german|德国|德语|de\b/.test(s)
            ? { code: "de", label: "德语" }
            : /spanish|西班牙|西语|es\b/.test(s)
              ? { code: "es", label: "西语" }
              : { code: "zh", label: "中文" };
}
function oC(t = "", s = "zh") {
  const n = String(t || "").trim();
  if (!n) return !1;
  const a = /[\u4e00-\u9fa5]/.test(n),
    r = /[\u3040-\u30ff]/.test(n),
    i = /[\uac00-\ud7af]/.test(n),
    o = /[A-Za-zÀ-ÿ]/.test(n);
  return s === "zh"
    ? a
    : s === "ja"
      ? r || /[\u31f0-\u31ff]/.test(n)
      : s === "ko"
        ? i
        : ["en", "fr", "de", "es"].includes(s)
          ? o && !a
          : !0;
}
function lC(t = "", s = {}, n = "chat") {
  const a = Vu(s).code,
    r = String(t || "")
      .replace(/\s+/g, " ")
      .trim(),
    i = r ? (r.length > 18 ? `${r.slice(0, 18)}...` : r) : "";
  return a === "en"
    ? n === "ai_daily_event"
      ? i
        ? `I kept replaying "${i}" in my head.`
        : "I keep thinking about how I should've handled it."
      : i
        ? `I saw "${i}" and still hesitated to say the real part.`
        : "I had more to say, but I held it back again."
    : a === "ja"
      ? n === "ai_daily_event"
        ? i
          ? `「${i}」が頭から離れない。`
          : "どう向き合うか、まだ考えてる。"
        : i
          ? `「${i}」を見て、また本音を飲み込んだ。`
          : "言いたいことはあったのに、また黙ってしまった。"
      : a === "ko"
        ? n === "ai_daily_event"
          ? i
            ? `"${i}"가 자꾸 머리에 남아.`
            : "어떻게 말해야 할지 아직 정리 중이야."
          : i
            ? `"${i}"를 보고도 진짜 말은 못 했어.`
            : "할 말은 많았는데 또 참았어."
        : a === "fr"
          ? n === "ai_daily_event"
            ? i
              ? `Cette phrase "${i}" tourne encore dans ma tete.`
              : "Je cherche encore la bonne maniere d'en parler."
            : i
              ? `En voyant "${i}", j'ai encore retenu la vraie phrase.`
              : "J'avais des choses a dire, mais je me suis encore retenu."
          : a === "de"
            ? n === "ai_daily_event"
              ? i
                ? `"${i}" geht mir nicht aus dem Kopf.`
                : "Ich ueberlege noch, wie ich es sagen soll."
              : i
                ? `Bei "${i}" habe ich den entscheidenden Satz wieder geschluckt.`
                : "Ich wollte viel sagen, aber ich habe wieder geschwiegen."
            : a === "es"
              ? n === "ai_daily_event"
                ? i
                  ? `"${i}" me sigue dando vueltas.`
                  : "Sigo pensando como decirlo bien."
                : i
                  ? `Al ver "${i}", volvi a guardarme la parte mas sincera.`
                  : "Tenia mucho que decir, pero me calle otra vez."
              : i
                ? `我盯着「${i}」看了很久，心里那句真话还是慢了半拍。`
                : "那一刻我其实有很多话想说，只是没找到最合适的开口。";
}
function FV(t = "", s = {}) {
  const n = String(t || "").trim();
  if (!n) return !0;
  const a = Vu(s).code;
  return !oC(n, a);
}
function cC(t = "", s = "chat", n = {}) {
  const a = String(t || "").trim(),
    r = `${String((n == null ? void 0 : n.styleAnchor) || "")} ${String((n == null ? void 0 : n.roleSetting) || "")}`,
    i = [...a].reduce((g, x) => g + x.charCodeAt(0), 0),
    o = Vu(n).code,
    c = {
      zh: {
        calm: [
          "先把情绪放低一点，把这件事说清楚",
          "不绕弯了，直接把介意的点讲明白",
          "先停两秒，再把真实想法说出来",
        ],
        direct: [
          "这次不装大度了，在意就是在意",
          "别猜了，我现在就把底线说清楚",
          "绕够了，今天把话摊开讲完",
        ],
        gentle: [
          "先确认你现在的状态，再说我的感受",
          "不抢结论，先把你那句听完整",
          "今天少一点试探，多一点真话",
        ],
        extras: [
          "那条删掉的消息，这次发出去",
          "先把现场处理好，再来谈我们",
          "不演客气了，态度我现在给你",
          "回避到这就够了，今天不再装没事",
          "先把误会拆开，再谈谁对谁错",
          "不硬撑了，这句我直接说",
        ],
      },
      en: {
        calm: [
          "Okay, breathe first, then say it clearly.",
          "No more circling, I'll say what bothered me.",
          "Pause for a second, then say the honest part.",
        ],
        direct: [
          "I'm done pretending I'm fine. I care.",
          "No guessing games. Here's my line.",
          "Enough detours, let's say it straight tonight.",
        ],
        gentle: [
          "Let me check how you're feeling first, then I'll share mine.",
          "No rushing conclusions, I want to hear you out.",
          "Less testing, more honesty this time.",
        ],
        extras: [
          "I'm sending that message I deleted.",
          "I'll settle this first, then talk about us.",
          "No polite mask now, I'll tell you my real stance.",
          "No more pretending I'm okay with this.",
          "Let's unpack the misunderstanding first.",
          "I'm not swallowing this sentence again.",
        ],
      },
      ja: {
        calm: [
          "まず気持ちを落ち着けて、ちゃんと話そう。",
          "遠回しはやめて、引っかかったところを言う。",
          "二秒だけ黙って、本音を出す。",
        ],
        direct: [
          "もう平気なふりはしない。気になるものは気になる。",
          "もう察し合いは終わり。境界線を言う。",
          "回り道は十分。今日ははっきり言う。",
        ],
        gentle: [
          "先に今の君の状態を確かめたい。",
          "結論を急がず、まず最後まで聞く。",
          "探り合いより、今日は正直に話す。",
        ],
        extras: [
          "消したメッセージ、今度は送る。",
          "先にこの場を整えてから、二人の話をする。",
          "取り繕わないで、今の温度を伝える。",
          "もう大丈夫なふりはしない。",
          "誤解をほどいてから次へ進む。",
          "この一言、もう飲み込まない。",
        ],
      },
      ko: {
        calm: [
          "먼저 숨 고르고, 할 말부터 정확히 말하자.",
          "돌려 말하지 말고, 걸렸던 지점을 짚자.",
          "잠깐 멈추고, 진짜 속마음을 꺼내자.",
        ],
        direct: [
          "괜찮은 척은 여기까지야. 난 분명히 신경 쓰여.",
          "눈치게임 그만, 내 기준을 지금 말할게.",
          "오늘은 돌아가지 말고 끝까지 솔직하게 말하자.",
        ],
        gentle: [
          "먼저 네 상태부터 확인하고 내 마음을 말할게.",
          "결론부터 밀지 말고, 네 말을 끝까지 들을게.",
          "떠보기는 줄이고, 이번엔 더 솔직해질래.",
        ],
        extras: [
          "지웠던 그 메시지, 이번엔 바로 보낼래.",
          "지금 상황부터 정리하고 우리 얘기하자.",
          "예의 차린 말투 말고, 지금 감정 그대로 말할래.",
          "괜찮은 척은 이제 그만할래.",
          "오해부터 풀고 다음 얘기로 넘어가자.",
          "이 한마디, 이번엔 삼키지 않을래.",
        ],
      },
      fr: {
        calm: [
          "D'abord je respire, puis je le dis clairement.",
          "Je n'esquive plus, je vais dire ce qui m'a blesse.",
          "Je fais une pause, puis je dis la partie vraie.",
        ],
        direct: [
          "J'arrete de faire semblant, oui ca me touche.",
          "On arrete de deviner, je pose ma limite.",
          "Assez de detours, ce soir je parle franchement.",
        ],
        gentle: [
          "Je regarde d'abord comment tu vas, puis je te dis ce que je ressens.",
          "Je ne force pas la conclusion, je veux t'ecouter jusqu'au bout.",
          "Moins de tests, plus d'honnetete cette fois.",
        ],
        extras: [
          "Le message efface, cette fois je l'envoie.",
          "Je regle d'abord la scene, puis je parle de nous.",
          "Je quitte le masque poli et je dis ma position.",
          "Je n'ai plus envie de faire semblant que ca va.",
          "On defait d'abord le malentendu.",
          "Cette phrase, je ne l'avale plus.",
        ],
      },
      de: {
        calm: [
          "Erst atmen, dann klar sagen, worum es geht.",
          "Kein Ausweichen mehr, ich sage was mich gestoert hat.",
          "Kurz stoppen und dann den ehrlichen Teil sagen.",
        ],
        direct: [
          "Ich hoere auf so zu tun als waere alles okay. Es ist mir wichtig.",
          "Kein Ratespiel mehr, ich ziehe jetzt die Grenze.",
          "Genug Umwege, heute rede ich klar.",
        ],
        gentle: [
          "Ich frage zuerst, wie es dir geht, dann sage ich meine Seite.",
          "Keine schnelle Schlussfolgerung, ich hoere dir zuerst zu.",
          "Weniger Testen, mehr Ehrlichkeit diesmal.",
        ],
        extras: [
          "Die geloeschte Nachricht sende ich diesmal ab.",
          "Ich klaere erst die Situation, dann rede ich ueber uns.",
          "Ich lasse die hoefliche Maske weg und sage klar, was ich will.",
          "Ich tue nicht mehr so, als waere alles okay.",
          "Wir loesen erst das Missverstaendnis.",
          "Diesen Satz schlucke ich nicht mehr runter.",
        ],
      },
      es: {
        calm: [
          "Primero respiro y luego lo digo claro.",
          "Nada de rodeos, voy a decir que me molesto.",
          "Pausa corta y despues digo la parte honesta.",
        ],
        direct: [
          "Ya no voy a fingir que estoy bien, me importa.",
          "Sin adivinar, te digo mi limite ahora.",
          "Basta de vueltas, hoy lo digo de frente.",
        ],
        gentle: [
          "Primero quiero saber como estas, luego te digo lo mio.",
          "No voy a correr a una conclusion, te escucho hasta el final.",
          "Menos pruebas, mas honestidad esta vez.",
        ],
        extras: [
          "Ese mensaje borrado, esta vez si lo envio.",
          "Primero ordeno esta situacion y luego hablo de nosotros.",
          "Sin mascara educada, te digo mi postura real.",
          "No voy a seguir fingiendo que no pasa nada.",
          "Primero desarmamos el malentendido.",
          "Esta frase ya no me la guardo.",
        ],
      },
    },
    d = c[o] || c.zh,
    u = d.calm,
    f = d.direct,
    p = d.gentle,
    m = /直球|外放|强势|主导|锋利/.test(r)
      ? f
      : /温柔|细腻|共情|耐心|照顾/.test(r)
        ? p
        : u;
  if (!a)
    return [
      Wd(i + 3, m) || m[0],
      Wd(i + 9, s === "ai_daily_event" ? f : p) || m[1] || m[0],
      Gb(n, s),
    ].filter(Boolean);
  if (s === "ai_daily_event") {
    const g = [...m, ...d.extras.slice(0, 3)];
    return [Wd(i + 1, g), Wd(i + 5, g), Gb(n, s)].filter(Boolean);
  }
  const h = [...m, ...d.extras.slice(3, 6)];
  return [Wd(i + 2, h), Wd(i + 7, h), Gb(n, s)].filter(Boolean);
}
function Gb(t = {}, s = "chat") {
  const n = String((t == null ? void 0 : t.styleAnchor) || "").trim(),
    a = String((t == null ? void 0 : t.roleSetting) || "").trim(),
    r = `${n} ${a}`,
    i = Vu(t).code,
    o = {
      zh: {
        calmDaily: "冷静先放一边，嫉妒是真的",
        calmChat: "逞强到这一步，还是在吃醋",
        directDaily: "当场说清楚：介意，而且不会退",
        directChat: "摊牌吧，在意到不想再装大度",
        defaultDaily: "不安和占有欲都摆在台面上，不再试探",
        defaultChat: "嘴硬没用了，占有欲就是占有欲",
      },
      en: {
        calmDaily: "I'll stay calm, but yes, I'm jealous.",
        calmChat: "I kept acting tough, but I was jealous.",
        directDaily:
          "Let's be clear right now: I mind it, and I'm not backing off.",
        directChat:
          "Fine, cards on the table. I care too much to fake indifference.",
        defaultDaily: "I'm done hiding the insecurity and possessiveness.",
        defaultChat: "The tough act is over. I wanted you all to myself.",
      },
      ja: {
        calmDaily: "冷静でいる。でも嫉妬してるのは本当だ。",
        calmChat: "強がってただけで、ちゃんと嫉妬してた。",
        directDaily: "今ここで言う。気にしてるし、引かない。",
        directChat: "もう隠さない。平気なふりは無理だ。",
        defaultDaily: "不安も独占欲も、もうごまかさない。",
        defaultChat: "強がりは終わり。独占したかった。",
      },
      ko: {
        calmDaily: "침착하려고 하지만, 질투하는 건 사실이야.",
        calmChat: "강한 척했지만, 사실 꽤 질투했어.",
        directDaily: "지금 분명히 말할게. 난 신경 쓰이고 물러서지 않아.",
        directChat: "이제 숨기지 않을게. 무심한 척은 못 하겠어.",
        defaultDaily: "불안도 독점욕도 더는 숨기지 않을래.",
        defaultChat: "버티는 척은 끝이야. 너를 놓치기 싫었어.",
      },
      fr: {
        calmDaily: "Je reste calme, mais oui, je suis jaloux.",
        calmChat: "J'ai fait le dur, mais j'etais jaloux.",
        directDaily:
          "Je le dis maintenant: oui, ca me derange, et je ne recule pas.",
        directChat:
          "D'accord, cartes sur table. Je tiens trop a toi pour faire semblant.",
        defaultDaily:
          "Je ne cache plus l'insecurite ni le besoin de te garder pres de moi.",
        defaultChat: "Le masque est tombe. Je voulais te garder pour moi.",
      },
      de: {
        calmDaily: "Ich bleibe ruhig, aber ja, ich bin eifersuechtig.",
        calmChat: "Ich habe stark getan, aber ich war eifersuechtig.",
        directDaily:
          "Ich sage es jetzt klar: Es stoert mich, und ich gehe nicht zurueck.",
        directChat:
          "Karten auf den Tisch. Ich fuehle zu viel, um gleichgueltig zu spielen.",
        defaultDaily: "Ich verstecke Unsicherheit und Besitzdenken nicht mehr.",
        defaultChat: "Die Fassade ist vorbei. Ich wollte dich fuer mich.",
      },
      es: {
        calmDaily: "Intento mantener la calma, pero si, tengo celos.",
        calmChat: "Me hice el fuerte, pero estaba celoso.",
        directDaily: "Lo digo ahora: me importa y no voy a ceder.",
        directChat:
          "Cartas sobre la mesa. Me importas demasiado para fingir indiferencia.",
        defaultDaily:
          "No voy a ocultar mas la inseguridad ni las ganas de tenerte cerca.",
        defaultChat: "Se acabo la pose. Te queria solo para mi.",
      },
    },
    c = o[i] || o.zh;
  return /冷|克制|理性|内敛|寡言|疏离|慢热/.test(r)
    ? s === "ai_daily_event"
      ? c.calmDaily
      : c.calmChat
    : /直球|外放|强势|主导|锋利/.test(r)
      ? s === "ai_daily_event"
        ? c.directDaily
        : c.directChat
      : s === "ai_daily_event"
        ? c.defaultDaily
        : c.defaultChat;
}
function dC(t = {}) {
  const s = String((t == null ? void 0 : t.roleSetting) || "")
      .replace(/\s+/g, " ")
      .trim(),
    n = String((t == null ? void 0 : t.styleAnchor) || "")
      .replace(/\s+/g, " ")
      .trim(),
    a = Array.isArray(t == null ? void 0 : t.toneBlacklist)
      ? t.toneBlacklist.map((r) => String(r || "").trim()).filter(Boolean)
      : [];
  return {
    roleSetting: s || "（未提供）",
    styleAnchor: n || "（未提供）",
    toneBlacklist: a.length > 0 ? a.join(" / ") : "（无）",
  };
}
function uC(t = [], s = "", n = "chat", a = {}) {
  dC(a);
  const r = Vu(a).code,
    o = (Array.isArray(t) ? t : [])
      .map((d) =>
        String(d || "")
          .replace(/^如果当时我/, "")
          .replace(/^如果我/, "")
          .replace(/^我会/, "")
          .replace(/[。！!]+$/g, "")
          .replace(/\s+/g, " ")
          .trim(),
      )
      .filter(Boolean)
      .filter((d) => oC(d, r)),
    c = [...new Set(o)];
  return c.length > 0 ? c.slice(0, 8) : cC(s, n, a).slice(0, 8);
}
function zV(t = {}) {
  const s = String((t == null ? void 0 : t.aiAction) || "").trim(),
    n = String((t == null ? void 0 : t.userResponse) || "").trim(),
    a = [];
  return (
    s && a.push(`如果当时我选择：${s}`),
    n && a.push(`你会这样回应：${n}`),
    a.join("；")
  );
}
function S1(t = []) {
  return !Array.isArray(t) || t.length === 0
    ? "（无绑定世界书）"
    : t.slice(0, 4).map((s, n) => {
        const a = String(
            (s == null ? void 0 : s.title) || `世界书${n + 1}`,
          ).trim(),
          i = (Array.isArray(s == null ? void 0 : s.entries) ? s.entries : [])
            .slice(0, 4)
            .map((o) => {
              const c = String((o == null ? void 0 : o.title) || "条目").trim(),
                d = String((o == null ? void 0 : o.content) || "")
                  .replace(/\s+/g, " ")
                  .trim()
                  .slice(0, 180);
              return `${c}：${d || "（空）"}`;
            }).join(`
`);
        return `【${a}】
${i || "（无条目）"}`;
      }).join(`

`);
}
function RV(t = []) {
  const s = new Set(),
    n = S1(t);
  return (
    (n.match(/「([^」]{2,8})」/g) || []).forEach((i) => {
      const o = i.replace(/[「」]/g, "").trim();
      o && o.length <= 8 && s.add(o);
    }),
    (
      n.match(
        /(?:NPC|角色|人物|同伴|朋友|同事|导师|队友)[：:\s]*([^\n，。；、]{2,10})/g,
      ) || []
    ).forEach((i) => {
      const o = i.replace(/.*[：:\s]/, "").trim();
      o && o.length <= 10 && s.add(o);
    }),
    [...s].slice(0, 8)
  );
}
function E0(t = "") {
  const s = String(t || "");
  return /吵|争|冷战|误会|顶嘴|生气/.test(s)
    ? "冲突"
    : /和好|道歉|解释|说开|抱住|牵手/.test(s)
      ? "和解"
      : /约定|答应|承诺|以后|长期/.test(s)
        ? "承诺"
        : /错过|遗憾|晚了|没说|来不及/.test(s)
          ? "遗憾"
          : "甜蜜";
}
function PV(t = "") {
  const s = String(t || "");
  return /分手|拉黑|彻底|冷战|失去/.test(s)
    ? 5
    : /吵|误会|拒绝|崩溃|失望/.test(s)
      ? 4
      : /晚安|回复慢|等|犹豫|沉默/.test(s)
        ? 3
        : 2;
}
function Hb(t = {}, s = 0, n = Date.now(), a = {}) {
  const r = String(
    (t == null ? void 0 : t.detailText) || (t == null ? void 0 : t.text) || "",
  )
    .replace(/\s+/g, " ")
    .trim();
  if (!r) return null;
  const i =
      (t == null ? void 0 : t.sourceType) === "ai_daily_event"
        ? "ai_daily_event"
        : "chat",
    o = r,
    d = String((t == null ? void 0 : t.theme) || "").trim() || E0(o),
    u = Number(t == null ? void 0 : t.stakes),
    f = Number.isFinite(u) ? Math.max(1, Math.min(5, Math.round(u))) : PV(o),
    p = Number(t == null ? void 0 : t.rewritePotential),
    m = Number.isFinite(p) ? Math.max(1, Math.min(5, Math.round(p))) : f,
    h = String((t == null ? void 0 : t.toneHint) || "").trim(),
    g = String(
      (t == null ? void 0 : t.monologue) ||
        (t == null ? void 0 : t.innerVoice) ||
        "",
    ).trim(),
    x = FV(g, a) ? lC(o, a, i) : g,
    y =
      String((t == null ? void 0 : t.keySentence) || "").trim() ||
      (i === "ai_daily_event" ? $V(o) : o),
    v = y,
    b = uC(
      Array.isArray(t == null ? void 0 : t.rewriteActions)
        ? t.rewriteActions
        : cC(o, i, a),
      o,
      i,
      a,
    ),
    N = Array.isArray(t == null ? void 0 : t.npcRefs)
      ? t.npcRefs
          .map((A) => String(A || "").trim())
          .filter(Boolean)
          .slice(0, 4)
      : [],
    w = Number(t == null ? void 0 : t.createdAt),
    _ = Number.isFinite(w) ? w : n - s * 36e5;
  return {
    id: String(
      (t == null ? void 0 : t.id) ||
        `${i === "ai_daily_event" ? "事件" : "片段"}_${s + 1}`,
    ),
    date: String((t == null ? void 0 : t.date) || id(_)),
    year: String((t == null ? void 0 : t.year) || new Date(_).getFullYear()),
    text: o,
    tags: String(
      (t == null ? void 0 : t.tags) || `${d} / ${ug(o).split(" / ")[0]}`,
    ),
    sourceType: i,
    theme: d,
    stakes: f,
    rewritePotential: m,
    toneHint: h,
    monologue: x,
    keySentence: y,
    displayText: v,
    rewriteActions: b,
    npcRefs: N,
    createdAt: _,
  };
}
function kk(t = []) {
  return [...t].sort((s, n) => {
    const a = Number(s == null ? void 0 : s.createdAt) || 0;
    return (Number(n == null ? void 0 : n.createdAt) || 0) - a;
  });
}
function Wb(t = {}, s = [], n = Date.now()) {
  const a = String((t == null ? void 0 : t.roleName) || nm).trim(),
    r = String((t == null ? void 0 : t.styleAnchor) || "理性克制").trim(),
    i = String((t == null ? void 0 : t.relationshipState) || "稳定期").trim(),
    o = RV(s),
    c = o[0] || "同事林舟",
    d = o[1] || "邻居程阿姨",
    u = o[2] || "旧友唐然";
  return [
    {
      id: "事件A",
      date: "今日",
      year: String(new Date(n).getFullYear()),
      text: `下午和${c}对排班，周末只剩一个空位。${a}盯着屏幕看了半天，想直接抢下来，又怕自己太越界。申请写了删、删了又补，快下班才按下发送。`,
      keySentence: `${a}在排班窗口前犹豫了很久，最后才把申请发出去。`,
      tags: "职场 / 克制",
      sourceType: "ai_daily_event",
      theme: "遗憾",
      stakes: 4,
      rewritePotential: 5,
      toneHint: `${r}，不煽情`,
      monologue: "想把这件事做成，也怕你觉得我擅自替你决定。",
      rewriteActions: [
        "我会把进度马上发你，不再让你等到最后",
        "这次我不装从容，我会直接说我想把时间留给你",
        "我先把决定摊开，再让你亲自选",
      ],
      npcRefs: [c],
    },
    {
      id: "事件B",
      date: "今日",
      year: String(new Date(n).getFullYear()),
      text: `晚饭时${d}随口问起近况，${a}只回了句“还行”。回去路上风有点大，TA把手机拿出来又塞回口袋，最后在备忘录里写了半页：下次该怎么说，才不敷衍也不失分寸。`,
      keySentence: `${a}被问近况时只说“还好”，一路都在想怎么更坦诚。`,
      tags: "社交 / 关系",
      sourceType: "ai_daily_event",
      theme: i.includes("修复") ? "和解" : "冲突",
      stakes: 3,
      rewritePotential: 4,
      toneHint: "自然口语，避免过度情话",
      monologue: "不是不想说，是还在找一个不伤人的说法。",
      rewriteActions: [
        "我不再说“还好”，我会把真实状况讲明白",
        "我会直说我介意，不再拿客套话挡着",
        "先把我的担心告诉你，再回应别人",
      ],
      npcRefs: [d],
    },
    {
      id: "事件C",
      date: "今日",
      year: String(new Date(n).getFullYear()),
      text: `中午${u}发来一张旧照片，刚好是那次闹僵后又和好的那天。${a}手指停在转发键上，想了几秒又退出来。最后没发，只把照片设成临时锁屏，走两步就会看一眼。`,
      keySentence: `${a}翻到旧照片想分享，却又把消息停在了草稿里。`,
      tags: "旧事 / 迟疑",
      sourceType: "ai_daily_event",
      theme: "遗憾",
      stakes: 3,
      rewritePotential: 4,
      toneHint: "细节化叙述",
      monologue: "想第一时间分享，又怕你正忙，怕我的出现打乱你。",
      rewriteActions: [
        "照片我会立刻发你，不再放在草稿里",
        "我先问你一句“现在能聊吗”，不再反复试探",
        "那次争吵没说完的话，我这次会补全",
      ],
      npcRefs: [u],
    },
    {
      id: "事件D",
      date: "今日",
      year: String(new Date(n).getFullYear()),
      text: `在便利店排队时，前面两个人吵得很凶。${a}第一反应是给你发句“你今天还好吗”，字都打好了，又觉得太突兀。结完账站在门口吹了会儿风，那句话删了又写，最后还是没发出去。`,
      keySentence: `${a}写了又删那句问候，在门口站了五分钟。`,
      tags: "街头 / 情绪",
      sourceType: "ai_daily_event",
      theme: "冲突",
      stakes: 4,
      rewritePotential: 5,
      toneHint: "克制但有情绪波动",
      monologue: "其实就想马上问你一句，怕太突兀才一直忍着。",
      rewriteActions: [
        "那句问候我会直接发，不再删了重写",
        "我会先说我不安，再问你今天到底怎么样",
        "这次我不硬撑，我先低头开口",
      ],
      npcRefs: [],
    },
    {
      id: "事件E",
      date: "今日",
      year: String(new Date(n).getFullYear()),
      text: `晚上整理行程时，发现下周居然有半天空档。${a}差点就把计划一口气定完，手都伸到确认键了，又停住。最后只留了三套备选，想着先把主动权给你。`,
      keySentence: `${a}把见面计划写成三种备选，还是没直接替你决定。`,
      tags: "计划 / 边界",
      sourceType: "ai_daily_event",
      theme: "承诺",
      stakes: 3,
      rewritePotential: 4,
      toneHint: "务实",
      monologue: "很想快点见到你，但也想让你有选择。",
      rewriteActions: [
        "我会先说我想见你，再把方案发你",
        "我不只谈安排，我会把期待和顾虑一起讲",
        "我先定一个时间点，再让你改",
      ],
      npcRefs: [],
    },
    {
      id: "事件F",
      date: "今日",
      year: String(new Date(n).getFullYear()),
      text: `临睡前翻到今天的聊天，停在那句“晚点再说”。${a}把手机扣在枕边，过一会儿又拿起来看。最后给自己设了提醒：明天中午前，不许再躲，把那段话完整说完。`,
      keySentence: `${a}给自己设了提醒：明天一定把没说完的话说完。`,
      tags: "夜晚 / 未尽",
      sourceType: "ai_daily_event",
      theme: "和解",
      stakes: 4,
      rewritePotential: 5,
      toneHint: "平静中带行动",
      monologue: "这次不想再拖了，明天必须把话说完。",
      rewriteActions: [
        "今晚我就把那段话说完，不再拖到明天",
        "我会承认我怕失去你，再把消息发出去",
        "我先把时间约死，不给自己回避空间",
      ],
      npcRefs: [],
    },
  ];
}
function Sk(t = []) {
  const s = (t || [])
    .map((r) =>
      String((r == null ? void 0 : r.text) || "")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean)
    .slice(-9);
  if (s.length === 0) {
    const r = Date.now();
    return [
      {
        id: _x[0],
        date: id(r - 864e5 * 3),
        year: String(new Date(r - 864e5 * 3).getFullYear()),
        text: "那天我们都很累，你说想先安静一会儿，我却把沉默理解成了冷淡。",
        tags: "疲惫 / 误读",
      },
      {
        id: _x[1],
        date: id(r - 864e5 * 2),
        year: String(new Date(r - 864e5 * 2).getFullYear()),
        text: "我明明想关心你，却因为语气太急，让那句话听起来像在指责。",
        tags: "关心 / 失真",
      },
      {
        id: _x[2],
        date: id(r - 864e5),
        year: String(new Date(r - 864e5).getFullYear()),
        text: "睡前那句晚安来得很晚，我们都在等对方先开口。",
        tags: "等待 / 晚安",
      },
    ];
  }
  const n = Date.now(),
    a = s.slice(-3);
  return a.map((r, i) => {
    const o = n - (a.length - i + 1) * 864e5;
    return {
      id: _x[i] || `〇${i + 1}`,
      date: id(o),
      year: String(new Date(o).getFullYear()),
      text: r,
      tags: ug(r),
    };
  });
}
function OV(t = [], s = 8) {
  const n = (Array.isArray(t) ? t : [])
      .map((i) => {
        const c = (
          typeof (i == null ? void 0 : i.text) == "string" ? i.text : ""
        ).trim();
        if (!c) return null;
        const d =
          Number(
            new Date(
              (i == null ? void 0 : i.timestamp) ||
                (i == null ? void 0 : i.createdAt) ||
                Date.now(),
            ).getTime(),
          ) || Date.now();
        return {
          id: `chat_${(i == null ? void 0 : i.id) || d}`,
          date: id(d),
          year: String(new Date(d).getFullYear()),
          text: c,
          tags: ug(c),
          sourceType: "chat",
          keySentence: c,
          rewriteActions: [],
          createdAt: d,
        };
      })
      .filter(Boolean),
    a = [],
    r = new Set();
  return (
    n.forEach((i) => {
      const o = `${i.text}__${i.createdAt}`;
      r.has(o) || (r.add(o), a.push(i));
    }),
    a
      .sort((i, o) => (o.createdAt || 0) - (i.createdAt || 0))
      .slice(0, Math.max(1, s))
  );
}
function Yb(t) {
  if (t == null) return null;
  if (typeof t == "object") return t;
  const s = String(t).trim(),
    n = s.match(/```(?:json)?\s*([\s\S]*?)```/i),
    a = n ? n[1].trim() : s,
    r = a.indexOf("{"),
    i = a.lastIndexOf("}");
  if (r < 0 || i <= r) return null;
  try {
    return JSON.parse(a.slice(r, i + 1));
  } catch {
    return null;
  }
}
function _k(t, s = "") {
  const n = String(
      (t == null ? void 0 : t.rewriteText) ||
        (t == null ? void 0 : t.newStory) ||
        "",
    ).trim(),
    a = Array.isArray(t == null ? void 0 : t.closingLines)
      ? t.closingLines
          .map((p) => String(p || "").trim())
          .filter(Boolean)
          .slice(0, 3)
      : [],
    r = String((t == null ? void 0 : t.summary) || "").trim(),
    i = String((t == null ? void 0 : t.highlight) || s || "").trim(),
    o = String((t == null ? void 0 : t.personaRationale) || "").trim(),
    c = Array.isArray(t == null ? void 0 : t.deltaHighlight)
      ? t.deltaHighlight
          .map((p) => String(p || "").trim())
          .filter(Boolean)
          .slice(0, 3)
      : [],
    d = ["none", "soft", "text_only"].includes(
      t == null ? void 0 : t.fallbackLevel,
    )
      ? t.fallbackLevel
      : "none",
    u = Number.isFinite(Number(t == null ? void 0 : t.personaConsistencyScore))
      ? Math.max(
          0,
          Math.min(100, Math.round(Number(t.personaConsistencyScore))),
        )
      : null,
    f = Number.isFinite(Number(t == null ? void 0 : t.greasyRiskScore))
      ? Math.max(0, Math.min(100, Math.round(Number(t.greasyRiskScore))))
      : null;
  return n
    ? {
        rewriteText: n,
        closingLines: a,
        summary: r,
        highlight: i,
        personaRationale: o,
        deltaHighlight: c,
        fallbackLevel: d,
        personaConsistencyScore: u,
        greasyRiskScore: f,
      }
    : null;
}
function Vb(t, s = {}) {
  const n = String((t == null ? void 0 : t.rewriteText) || "").trim();
  if (!n) return { personaScore: 40, greasyRisk: 70, needsRepair: !0 };
  const a = String((s == null ? void 0 : s.roleName) || "").trim(),
    r = String((s == null ? void 0 : s.styleAnchor) || "").trim();
  let i = 12;
  (IV.forEach((c) => {
    n.includes(c) && (i += 16);
  }),
    /(！！！|？？？)/.test(n) && (i += 10),
    /宝贝|宝宝|老婆|老公/.test(n) && r.includes("克制") && (i += 18));
  let o = 86;
  return (
    a && !n.includes(a) && !(t != null && t.personaRationale) && (o -= 12),
    r && !(t != null && t.personaRationale) && (o -= 8),
    (n.length < 90 || n.length > 260) && (o -= 10),
    i > 55 && (o -= 16),
    {
      personaScore: Math.max(0, Math.min(100, o)),
      greasyRisk: Math.max(0, Math.min(100, i)),
      needsRepair: i >= 55 || o < 68,
    }
  );
}
function BV(t = "") {
  const s = String(t || "").trim();
  if (!s) return [];
  const n = s
    .split(/\n+/)
    .map((o) => o.trim())
    .filter(Boolean);
  if (n.length > 1) return n;
  const r = (s.match(/[^。！？!?]+[。！？!?]?/g) || [s])
      .map((o) => o.trim())
      .filter(Boolean),
    i = [];
  for (let o = 0; o < r.length; o += 2) {
    const c = `${r[o] || ""}${r[o + 1] || ""}`.trim();
    c && i.push(c);
  }
  return i.length > 0 ? i : [s];
}
function UV({
  featureId: t = "memory_rewrite",
  contact: s,
  space: n,
  onBack: a,
  onUpdateSpace: r,
  runtime: i = {},
}) {
  const o = LV(n, t),
    c = l.useMemo(
      () =>
        `couple_space_memory_rewrite_state_${t}_${String((s == null ? void 0 : s.id) || "unknown")}`,
      [s == null ? void 0 : s.id, t],
    ),
    [d, u] = l.useState(""),
    [f, p] = l.useState("gallery"),
    [m, h] = l.useState(
      Ax(
        Array.isArray(o.memoryFragments) ? o.memoryFragments : [],
        Array.isArray(o.deletedFragmentKeys) ? o.deletedFragmentKeys : [],
      ),
    ),
    [g, x] = l.useState(o.activeMemoryFragment || null),
    [y, v] = l.useState(String(o.memoryRewritePrompt || "").trim()),
    [b, N] = l.useState(Number(o.coCreateStep || 1)),
    [w, _] = l.useState(
      o.coCreateState && typeof o.coCreateState == "object"
        ? o.coCreateState
        : { aiAction: "", userResponse: "" },
    ),
    [A, k] = l.useState(!1),
    [C, M] = l.useState(!1),
    [E, S] = l.useState(o.memoryRewriteResult || null),
    [j, T] = l.useState(o.memoryRoundOneResult || null),
    [I, L] = l.useState(o.guardMeta || null),
    [B, F] = l.useState(
      Array.isArray(o.deletedFragmentKeys) ? o.deletedFragmentKeys : [],
    ),
    [D, $] = l.useState(
      o.memoryArchiveMap && typeof o.memoryArchiveMap == "object"
        ? o.memoryArchiveMap
        : {},
    ),
    [P, z] = l.useState(""),
    [O, Z] = l.useState(!1),
    [K, q] = l.useState(String(o.customStyleGuide || "").trim()),
    [V, ne] = l.useState(String(o.customStyleGuide || "").trim()),
    le = l.useMemo(
      () =>
        typeof i.getLatestMessages == "function"
          ? i.getLatestMessages
          : () => [],
      [i.getLatestMessages],
    ),
    ie = l.useMemo(
      () =>
        typeof i.getPersonaSnapshot == "function"
          ? i.getPersonaSnapshot
          : () => {
              var ue;
              const W =
                ((ue = i.getRoleBoundUser) == null ? void 0 : ue.call(i, s)) ??
                {};
              return {
                roleName:
                  (s == null ? void 0 : s.name) ||
                  (s == null ? void 0 : s.remarkName) ||
                  (s == null ? void 0 : s.nickname) ||
                  nm,
                roleSetting: (s == null ? void 0 : s.setting) || "",
                userName: (W == null ? void 0 : W.name) || "用户",
                userSetting: (W == null ? void 0 : W.settings) || "",
                styleAnchor: "克制自然",
                toneBlacklist: ["油腻情话", "过度亲密称呼"],
                relationshipState: "稳定期",
              };
            },
      [s, i],
    ),
    X = l.useMemo(() => {
      const W = ie(s);
      return String(
        (W == null ? void 0 : W.roleName) ||
          (s == null ? void 0 : s.name) ||
          (s == null ? void 0 : s.remarkName) ||
          (s == null ? void 0 : s.nickname) ||
          nm,
      ).trim();
    }, [s, ie]),
    je = (W) => {
      const ue =
          n != null &&
          n.compassFeatureState &&
          typeof n.compassFeatureState == "object"
            ? n.compassFeatureState
            : {},
        re = { ...(ue[t] || {}), ...W, updatedAt: Date.now() };
      (typeof r == "function" && r({ compassFeatureState: { ...ue, [t]: re } }),
        be.set(c, re).catch(() => {}));
    },
    xe = Nk(g),
    ye = Array.isArray(D == null ? void 0 : D[xe]) ? D[xe] : [];
  (l.useEffect(() => {
    (Array.isArray(o.memoryFragments) && o.memoryFragments.length > 0) || h([]);
  }, [s == null ? void 0 : s.id]),
    l.useEffect(() => {
      let W = !1;
      return s != null && s.id
        ? (be.get(c, null).then((ue) => {
            if (W || !ue || typeof ue != "object") return;
            const re = Array.isArray(ue.deletedFragmentKeys)
                ? ue.deletedFragmentKeys.filter(Boolean)
                : [],
              he = Ax(
                Array.isArray(ue.memoryFragments) ? ue.memoryFragments : [],
                re,
              );
            (F(re),
              h(he),
              $(
                ue.memoryArchiveMap && typeof ue.memoryArchiveMap == "object"
                  ? ue.memoryArchiveMap
                  : {},
              ),
              T(ue.memoryRoundOneResult || null),
              q(String(ue.customStyleGuide || "").trim()),
              ne(String(ue.customStyleGuide || "").trim()));
            const ge = ue.activeMemoryFragment || null;
            ge && re.includes(am(ge)) ? x(null) : x(ge);
          }),
          () => {
            W = !0;
          })
        : () => {};
    }, [s == null ? void 0 : s.id, c]),
    l.useEffect(() => {
      const W = ie(s);
      h((ue) =>
        (Array.isArray(ue) ? ue : []).map((re) => ({
          ...re,
          rewriteActions: uC(
            re == null ? void 0 : re.rewriteActions,
            re == null ? void 0 : re.text,
            re == null ? void 0 : re.sourceType,
            W,
          ),
        })),
      );
    }, [s == null ? void 0 : s.id]));
  const R = async () => {
      var ut, _t;
      if (A) return;
      (k(!0), u(""));
      const W = le(s == null ? void 0 : s.id),
        ue = String(
          ((ut = W == null ? void 0 : W[W.length - 1]) == null
            ? void 0
            : ut.text) || "",
        ).trim(),
        re = ie(s);
      String((re == null ? void 0 : re.roleName) || nm).trim();
      const he = await Promise.resolve(
          typeof i.getWorldBooksContext == "function"
            ? i.getWorldBooksContext(s, W)
            : [],
        ),
        ge = S1(he),
        J = dC(re),
        G = Vu(re),
        we = String(K || "").trim()
          ? `【用户自定义文风（最高优先级）】
${String(K || "").trim()}
- 必须优先遵守以上文风指令；若与默认风格冲突，以用户自定义文风为准。`
          : "";
      let Q = [];
      const ve = OV(W, 8);
      if (typeof i.callApi == "function") {
        const Ee = `你是情侣空间“回忆素材引擎”。请严格基于人设与绑定世界书生成素材，不允许乱编 NPC。
你只能使用下方【人设快照】和【绑定世界书】中的信息；禁止引用任何未绑定角色、未绑定世界书、外部记忆或模型臆测设定。
你必须混合生成并满足：
- 总数 6~10 条
- 至少 3 条 chat 来源（从聊天抽取）
- 至少 3 条 ai_daily_event 来源（AI个人生活线 / 与NPC互动线 / 与用户相关线 可混合，不要求每条都与用户直接相关）
- ai_daily_event 必须更详细：包含场景、动作、当下决策，不少于65字
- 如世界书写明 NPC，优先使用该 NPC 名称；禁止发明世界书和人设之外的关键人物
- 事件要优先挖掘“TA平时克制/隐藏的一面”：可以有回避、自我防御、占有、嫉妒等动机，但必须在人设边界内，禁止极端违法暴力

只输出 JSON：
{
  "cards":[
    {
      "sourceType":"chat | ai_daily_event",
      "text":"chat:45~95字，ai_daily_event:85~160字；都要具体到场景动作，可改写，体现克制下真实动机",
      "keySentence":"若 sourceType=chat，这里必须填聊天窗口里出现过的一句原话（尽量逐字），一级列表将只展示这句",
      "monologue":"第一人称独白，18~45字，像TA在心里对自己说话，口语自然，避免抒情腔",
      "rewriteActions":["2~3条，AI想改写的行动，句式自由，不限定“如果当时我...”，必须严格符合角色人设口吻，优先“想做但平时没做”的行动"],
      "theme":"2~8字自由主题，按该条内容自拟，不限制在固定标签内",
      "tags":"两个短词，用 / 分隔",
      "stakes":1,
      "rewritePotential":1,
      "toneHint":"一句语气提示",
      "npcRefs":["可为空"]
    }
  ]
}

额外约束：
- 每条 rewriteActions 不要泛泛而谈，必须是可执行动作（有具体行为）
- 至少 2 条卡片体现“隐藏面/阴影面”动机（但仍保持角色一致，不 OOC）
- rewriteActions 禁止模板腔（如“先承认/先坦白/先说明”连用），要像当下会冒出来的一句话
- rewriteActions 用“碎碎念口吻”输出：像人正在心里嘀咕，不要公告体，不要条款体
- rewriteActions 用“心声口吻”，不要写成“我会/我要/我准备”这类行动说明句；优先“现在就想这样做/这样说”的表达
- 可以有阴暗心声（占有、嫉妒、控制、不甘），但要克制、冷静、贴近日常心理，而非喊口号
- 语言不要油腻，不要悬浮抒情，不要模板化鸡汤，不要古早言情腔
- 不同人设必须写出不同口吻：词汇密度、句长、情绪外露程度都要跟随人设变化，禁止“全员同款文风”
- 若角色设定显示非中文角色，则 monologue 与 rewriteActions 必须使用其母语；当前角色优先语言：${G.label}
- theme 不要套固定模板词，允许“回避后的示弱 / 没说出口的吃醋 / 迟到的解释”等具体主题短语
- ai_daily_event 的 text 不要写成流水账：必须有“环境细节 + 一个关键动作 + 一个心理转折”，读起来要有画面感
- 允许克制但不无聊：避免全是说明句，适当加入停顿、对话碎片、动作细节，让叙事有张力
- 叙事语感要求“自然可读”：像高质量小说里的日常段落，不要公文腔，不要为了文艺而文艺
- 禁止侮辱性表达
- 任何输出若超出【人设快照】和【绑定世界书】信息范围，宁可保守留白，不可编造
- 优先使用【人设语气锚点】约束措辞，不能被“聊天样本”带偏

文风执行细则：
- 说人话：像聊天框里会出现的句子，不写诗，不堆辞藻
- 少形容词，多可见动作与微反应（停顿、删改消息、视线、手势）
- 句长控制：短句与中句交替，避免整段抒情独白
- 不说“我很痛苦/我很爱”，改成行为化表达
- monologue 要像“心里冒出来的一句真话”，不是台词，不是鸡汤
- rewriteActions 要像“马上会做/会说”的具体动作或话，不要写成计划书

【人设快照】
${JSON.stringify(re)}
【人设语气锚点】
风格锚点：${J.styleAnchor}
角色设定：${J.roleSetting}
禁用语气：${J.toneBlacklist}
【绑定世界书】
${ge}
${
  we
    ? `
${we}
`
    : ""
}

上下文：
${
  (W || []).slice(-16).map(
    (fe) =>
      `${(fe == null ? void 0 : fe.sender) === "me" ? "我" : "TA"}：${
        String((fe == null ? void 0 : fe.text) || "")
          .replace(/\s+/g, " ")
          .trim() || "…"
      }`,
  ).join(`
`) || "（暂无）"
}`;
        try {
          const fe =
              ((_t = i.getRoleBoundUser) == null ? void 0 : _t.call(i, s)) ??
              {},
            He = await i.callApi(
              [{ sender: "me", text: Ee }],
              s,
              "system_generation",
              {},
              [],
              [],
              [],
              !1,
              "",
              fe,
            ),
            Ie = Yb(He);
          Q = Array.isArray(Ie == null ? void 0 : Ie.cards) ? Ie.cards : [];
        } catch {
          Q = [];
        }
      }
      if (Q.length === 0) {
        const Ee = {
            sourceType: "chat",
            text:
              ue ||
              "今天我们都想表达关心，却都怕语气太重，于是话到嘴边又收了回去。",
            tags: ug(ue),
          },
          fe = Sk(W).map((He) => ({ ...He, sourceType: "chat" }));
        Q = [Ee, ...fe, ...Wb(re, he)];
      }
      const Ve = Q.filter(
          (Ee) => (Ee == null ? void 0 : Ee.sourceType) === "chat",
        ).map((Ee, fe) => {
          var Ie;
          const He =
            ve.length > 0
              ? String(
                  ((Ie = ve[fe % ve.length]) == null
                    ? void 0
                    : Ie.keySentence) || "",
                ).trim()
              : "";
          return {
            ...Ee,
            keySentence:
              String((Ee == null ? void 0 : Ee.keySentence) || "").trim() || He,
          };
        }),
        Ae = Q.filter(
          (Ee) => (Ee == null ? void 0 : Ee.sourceType) === "ai_daily_event",
        ),
        te = [...Ve, ...Ae, ...ve, ...Wb(re, he)].slice(0, 24),
        Se = Date.now();
      let Fe = te
        .map((Ee, fe) =>
          Hb(
            {
              ...Ee,
              id: (Ee == null ? void 0 : Ee.id) || `今日_${fe + 1}`,
              date: fe === 0 ? "刚刚" : id(Se - fe * 864e5),
              year: String(new Date(Se).getFullYear()),
            },
            fe,
            Se,
            re,
          ),
        )
        .filter(Boolean);
      const $e = Sk(W)
          .map((Ee, fe) =>
            Hb(
              { ...Ee, sourceType: "chat", id: `聊天补充_${fe + 1}` },
              fe + Fe.length,
              Se + 3e4,
              re,
            ),
          )
          .filter(Boolean),
        tt = Wb(re, he, Se + 6e4)
          .map((Ee, fe) => Hb(Ee, fe + Fe.length, Se + 6e4, re))
          .filter(Boolean),
        Xe = Fe.some((Ee) => Ee.sourceType === "chat"),
        ht = Fe.some((Ee) => Ee.sourceType === "ai_daily_event");
      if (
        (Xe || (Fe = [...$e, ...Fe]),
        ht || (Fe = [...tt, ...Fe]),
        Fe.length < jk)
      ) {
        const Ee = [...$e, ...tt];
        Fe = [...Fe, ...Ee].slice(0, jk);
      }
      const Pe = Fe;
      if (
        ((Fe = Ax(Fe, B)),
        Pe.length > 0 &&
          Fe.length === 0 &&
          ((Fe = Pe), F([]), je({ deletedFragmentKeys: [] })),
        Fe.length === 0)
      ) {
        (u("今天的素材还在整理中，稍后再试一次。"), k(!1));
        return;
      }
      (h((Ee) => {
        const fe = kk(Ax([...Fe, ...Ee], B)).slice(0, wk);
        return (
          je({
            memoryFragments: fe,
            deletedFragmentKeys: B,
            status: "in_progress",
            eventSourcePolicy: "hybrid",
            deliveryPhase: "P1",
          }),
          fe
        );
      }),
        k(!1));
    },
    oe = (W) => {
      (x(W),
        v(""),
        N(1),
        _({ aiAction: "", userResponse: "" }),
        S(null),
        T(null),
        z(""),
        p("compose"),
        je({
          activeMemoryFragment: W,
          coCreateStep: 1,
          coCreateState: { aiAction: "", userResponse: "" },
          status: o.status || "in_progress",
          deliveryPhase: "P1",
        }));
    },
    ee = (W) => {
      const ue = String(W || "").trim();
      if (!ue) return;
      v(ue);
      const re = { ...w, aiAction: ue };
      (_(re), je({ coCreateState: re, memoryRewritePrompt: ue }));
    },
    H = (W) => {
      const ue = am(W),
        re = Array.from(new Set([...(B || []), ue]))
          .filter(Boolean)
          .slice(-240);
      (F(re),
        h((he) => {
          const ge = he.filter((G) => am(G) !== ue),
            J = am(g) === ue;
          return (
            J && (x(null), v(""), S(null), T(null), z(""), p("gallery")),
            je({
              memoryFragments: ge,
              deletedFragmentKeys: re,
              activeMemoryFragment: J ? null : g,
              status: ge.length > 0 ? "in_progress" : o.status || "in_progress",
            }),
            ge
          );
        }));
    },
    Y = (W, ue, re, he) => {
      const ge = String(ue || "").trim(),
        J = String((W == null ? void 0 : W.text) || "").trim(),
        G = String((re == null ? void 0 : re.roleName) || nm).trim(),
        we = String(
          (re == null ? void 0 : re.styleAnchor) || "克制自然",
        ).trim();
      return {
        rewriteText: `那一刻，原本的沉默被轻轻打断。${ge ? `我们选择了「${ge}」，` : ""}先把事实和感受说清楚，再决定下一步。没有戏剧化反转，只有慢慢靠近：误会没有被放大，情绪也被安稳接住。`,
        closingLines: [
          `${G}：改写不一定轰烈，先把话说清楚就很好。`,
          "有时候，真正的改变只是提早一步表达。",
        ],
        summary: J
          ? `基于原片段「${J.slice(0, 18)}...」完成改写`
          : "已完成本次回忆改写",
        highlight: ge || "先开口表达在意",
        personaRationale: `按「${we}」语气收敛，避免夸张表达。`,
        deltaHighlight: ["先确认事实，再表达情绪", "把冲突从对抗改为协商"],
        fallbackLevel: he != null && he.needsRepair ? "text_only" : "soft",
        personaConsistencyScore: (he == null ? void 0 : he.personaScore) ?? 72,
        greasyRiskScore: (he == null ? void 0 : he.greasyRisk) ?? 22,
      };
    },
    U = async () => {
      var Fe, $e;
      if (!g) return;
      const W = ie(s),
        ue = le(s == null ? void 0 : s.id),
        re = await Promise.resolve(
          typeof i.getWorldBooksContext == "function"
            ? i.getWorldBooksContext(s, ue)
            : [],
        ),
        he = S1(re),
        ge = String(y || "").trim(),
        J = String(K || "").trim()
          ? `【用户自定义文风（最高优先级）】
${String(K || "").trim()}
- 必须优先遵守以上文风指令；若与默认风格冲突，以用户自定义文风为准。`
          : "";
      if (!ge) return;
      (u(""), p("weaving"));
      const G = Date.now();
      let we = null;
      const Q = b <= 1,
        ve = String((w == null ? void 0 : w.aiAction) || "").trim(),
        Ve = String((E == null ? void 0 : E.rewriteText) || "").trim();
      if (typeof i.callApi == "function") {
        const tt = Q
          ? `你是情侣空间“回忆改写”引擎。当前是第一回合，根据原始回忆和AI想改写的行动，生成一条平行结局。只输出 JSON：
{
  "rewriteText":"120~220字，具体、自然、有动作细节，禁止油腻措辞",
  "closingLines":["1~3句收尾，符合人设口吻"],
  "summary":"20~60字",
  "highlight":"一句最关键改变",
  "personaRationale":"一句话解释如何符合人设",
  "deltaHighlight":["2~3条关键差异点"],
  "fallbackLevel":"none"
}

【人设快照】
${JSON.stringify(W)}
【绑定世界书】
${he}
${
  J
    ? `
${J}
`
    : ""
}
【语气硬规则】
- 禁止使用“命中注定/永生永世/离不开你”等油腻表达
- 语气保持克制自然，优先事实与行为细节
- 如果来源是 ai_daily_event，可提及 NPC，但不要抢走主叙事
- 只能使用以上人设与绑定世界书信息；若信息不足请保守表达，禁止编造
- 文风细腻但不浮夸：参考“名著式留白叙事”（情绪潜流+动作细节），不要喊口号

原始回忆：
${g.text}

回忆来源：${g.sourceType === "ai_daily_event" ? "当天事件" : "聊天片段"}
主题：${g.theme || E0(g.text)}

AI想改写的行动：
${ge}`
          : `你是情侣空间“回忆改写”引擎。当前是第二回合，要在第一回合结果上继续共创。用户给出了“我会怎么回应”，请基于该回应更新平行结局。只输出 JSON：
{
  "rewriteText":"120~260字，具体、自然、有动作细节，禁止油腻措辞",
  "closingLines":["1~3句收尾，符合人设口吻"],
  "summary":"20~60字",
  "highlight":"一句最关键改变",
  "personaRationale":"一句话解释如何符合人设",
  "deltaHighlight":["2~3条关键差异点"],
  "fallbackLevel":"none"
}

【人设快照】
${JSON.stringify(W)}
【绑定世界书】
${he}
${
  J
    ? `
${J}
`
    : ""
}
【语气硬规则】
- 禁止使用“命中注定/永生永世/离不开你”等油腻表达
- 语气保持克制自然，优先事实与行为细节
- 保留第一回合的主线，不要跳脱到无关剧情
- 只能使用以上人设与绑定世界书信息；若信息不足请保守表达，禁止编造
- 文风细腻但不浮夸：参考“名著式留白叙事”（情绪潜流+动作细节），不要喊口号

原始回忆：
${g.text}

第一回合AI行动：
${ve || "（未提供）"}

第一回合平行回响：
${Ve || "（未生成）"}

第二回合用户回应：
${ge}`;
        try {
          const Xe =
              ((Fe = i.getRoleBoundUser) == null ? void 0 : Fe.call(i, s)) ??
              {},
            ht = await i.callApi(
              [{ sender: "me", text: tt }],
              s,
              "system_generation",
              {},
              [],
              [],
              [],
              !1,
              "",
              Xe,
            ),
            Pe = _k(Yb(ht), ge);
          Pe && (we = Pe);
        } catch {
          we = null;
        }
      }
      let Ae = Vb(we, W);
      if (we && Ae.needsRepair && typeof i.callApi == "function") {
        const tt = `请在不改变事件核心结果的前提下，将下面文本收敛为更自然的人设口吻。只输出 JSON：
{
  "rewriteText":"120~220字",
  "closingLines":["1~2句"],
  "summary":"20~50字",
  "highlight":"一句关键改变",
  "personaRationale":"一句说明",
  "fallbackLevel":"soft"
}

人设快照：${JSON.stringify(W)}
${J ? `用户自定义文风（最高优先级）：${String(K || "").trim()}` : ""}
原文：${we.rewriteText}`;
        try {
          const Xe =
              (($e = i.getRoleBoundUser) == null ? void 0 : $e.call(i, s)) ??
              {},
            ht = await i.callApi(
              [{ sender: "me", text: tt }],
              s,
              "system_generation",
              {},
              [],
              [],
              [],
              !1,
              "",
              Xe,
            ),
            Pe = _k(Yb(ht), ge);
          Pe && ((we = { ...we, ...Pe }), (Ae = Vb(we, W)));
        } catch {}
      }
      we || ((we = Y(g, ge, W, Ae)), (Ae = Vb(we, W)));
      const te = Date.now() - G,
        Se = Math.max(0, 2200 - te);
      window.setTimeout(() => {
        const tt = Q ? 2 : 3,
          Xe = Q ? { ...w, aiAction: ge } : { ...w, userResponse: ge },
          ht = Q ? we : j;
        (S(we),
          Q && T(we),
          L(Ae),
          N(tt),
          _(Xe),
          Q && v(""),
          p("split"),
          je({
            status: "in_progress",
            activeMemoryFragment: g,
            coCreateState: Xe,
            coCreateStep: tt,
            memoryRewritePrompt: Q ? Xe.aiAction : ge,
            memoryRewriteResult: we,
            memoryRoundOneResult: ht,
            guardMeta: Ae,
            fallbackLevel:
              we.fallbackLevel || (Ae.needsRepair ? "soft" : "none"),
            personaConsistencyScore:
              we.personaConsistencyScore ?? Ae.personaScore,
            greasyRiskScore: we.greasyRiskScore ?? Ae.greasyRisk,
            eventSourcePolicy: "hybrid",
            deliveryPhase: "P1",
          }));
      }, Se);
    },
    ce = async () => {
      if (!E || C) return;
      if (b < 3) {
        u("请先完成第二回合共创，再进行封存。");
        return;
      }
      const W = zV(w),
        ue = Nk(g),
        re = Ub(W),
        he = {
          id: `arc_${Date.now()}`,
          at: Date.now(),
          sourceType: (g == null ? void 0 : g.sourceType) || "chat",
          theme:
            (g == null ? void 0 : g.theme) ||
            E0((g == null ? void 0 : g.text) || ""),
          prompt: W,
          roundOneAction: String(
            (w == null ? void 0 : w.aiAction) || re.roundOneAction || "",
          ).trim(),
          roundOneRewrite: String(
            (j == null ? void 0 : j.rewriteText) || "",
          ).trim(),
          roundTwoAction: String(
            (w == null ? void 0 : w.userResponse) || re.roundTwoAction || "",
          ).trim(),
          rewriteText: String(
            (E == null ? void 0 : E.rewriteText) || "",
          ).trim(),
          summary: String((E == null ? void 0 : E.summary) || "").trim(),
          highlight: String((E == null ? void 0 : E.highlight) || "").trim(),
        },
        ge = {
          ...D,
          [ue]: [
            he,
            ...(Array.isArray(D == null ? void 0 : D[ue]) ? D[ue] : []),
          ].slice(0, 12),
        };
      (M(!0),
        $(ge),
        je({
          status: "resolved",
          resolvedAt: Date.now(),
          activeMemoryFragment: g,
          coCreateState: w,
          coCreateStep: b,
          memoryRewritePrompt: W,
          memoryRewriteResult: E,
          memoryRoundOneResult: j,
          guardMeta: I,
          memoryArchiveMap: ge,
          memoryWrites: [
            {
              writeType: "memory_rewrite",
              sourceType: (g == null ? void 0 : g.sourceType) || "chat",
              theme:
                (g == null ? void 0 : g.theme) ||
                E0((g == null ? void 0 : g.text) || ""),
              text: (E == null ? void 0 : E.rewriteText) || "",
              summary: (E == null ? void 0 : E.summary) || "",
              highlight: (E == null ? void 0 : E.highlight) || "",
              at: Date.now(),
            },
          ],
          eventSourcePolicy: "hybrid",
          deliveryPhase: "P1",
        }),
        p("compose"),
        S(null),
        T(null),
        v(""),
        N(1),
        _({ aiAction: "", userResponse: "" }),
        M(!1));
    },
    pe = () =>
      e.jsxs("div", {
        className: "flex flex-col h-full relative z-10 animate-slide-up",
        children: [
          e.jsxs("div", {
            className:
              "pt-8 px-8 pb-6 flex justify-between items-start relative",
            children: [
              e.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  e.jsx("span", {
                    className:
                      "font-serif text-lg tracking-widest text-[var(--text-ink)]",
                    children: "平行时空",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[8px] tracking-[0.3em] text-[var(--text-muted)] uppercase",
                    children: "Parallel Memories",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col items-end",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => Z(!0),
                    className:
                      "font-serif text-sm tracking-widest text-[var(--text-ink)] border-b border-dashed border-[var(--line-faint)] hover:border-[var(--text-ink)] transition-colors",
                    title: "点击设置本功能文风",
                    children: "卷 〇一",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[8px] tracking-[0.2em] text-[var(--text-muted)] uppercase border-t border-[var(--text-muted)] pt-0.5 mt-0.5",
                    children: "Vol. 01",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "px-8 mb-8",
            children: e.jsx("button", {
              type: "button",
              onClick: a,
              className: "relative inline-block text-left cursor-pointer",
              children: e.jsxs("h1", {
                className:
                  "font-serif text-[42px] leading-tight text-[var(--text-ink)] font-light tracking-wide relative inline-block",
                children: [
                  "记忆残片",
                  e.jsx("span", {
                    className:
                      "text-[var(--accent-rose)] text-5xl absolute -top-2 -right-4 font-sans",
                    children: ".",
                  }),
                ],
              }),
            }),
          }),
          e.jsxs("div", {
            onClick: R,
            className:
              "group relative border-y border-[var(--line-faint)] py-5 px-8 cursor-pointer hover:bg-white/30 transition-all duration-500 overflow-hidden",
            children: [
              e.jsx("div", {
                className:
                  "absolute left-0 top-0 w-1 h-full bg-[var(--text-ink)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500",
              }),
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-5",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full border border-[var(--text-ink)] flex items-center justify-center relative bg-[var(--bg-cream)]",
                        children: A
                          ? e.jsx("div", {
                              className:
                                "w-4 h-4 bg-[var(--text-ink)] rounded-sm animate-spin",
                              style: { animationDuration: "3s" },
                            })
                          : e.jsx($h, {
                              className: "w-4 h-4 text-[var(--text-ink)]",
                            }),
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          e.jsx("span", {
                            className:
                              "font-serif text-[15px] tracking-[0.15em] text-[var(--text-ink)] mb-0.5",
                            children: A ? "正在凝聚光阴..." : "凝练今日碎片",
                          }),
                          e.jsxs("span", {
                            className:
                              "text-[9px] text-[var(--text-muted)] tracking-wider",
                            children: [X, " 正在聆听未尽之言"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(so, {
                    className:
                      "w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-ink)] transform group-hover:translate-x-2 transition-all duration-300",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex-1 overflow-y-auto no-scrollbar px-8 mt-6 pb-12 relative",
            children: [
              e.jsx("div", {
                className:
                  "absolute left-[39px] top-0 bottom-0 w-[1px] bg-[var(--line-faint)] -z-10",
              }),
              e.jsxs("div", {
                className:
                  "text-[10px] tracking-[0.3em] text-[var(--text-muted)] mb-8 flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className: "w-6 h-[1px] bg-[var(--text-muted)]",
                  }),
                  e.jsx("span", {
                    className: "font-serif",
                    children: "岁月档案",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "space-y-10",
                children: kk(m)
                  .slice(0, wk)
                  .map((W, ue) =>
                    e.jsxs(
                      "div",
                      {
                        onClick: () => oe(W),
                        className: "relative pl-10 cursor-pointer group",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: (re) => {
                              (re.stopPropagation(), H(W));
                            },
                            "aria-label": "删除片段",
                            title: "删除片段",
                            className:
                              "absolute left-[-6px] top-0 w-4 h-4 flex items-center justify-center",
                            children: e.jsx("span", {
                              className:
                                "w-[5px] h-[5px] bg-[var(--bg-cream)] border border-[var(--text-muted)] group-hover:bg-[var(--text-ink)] group-hover:border-[var(--text-ink)] transform group-hover:scale-150 transition-all duration-300",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "flex items-baseline gap-3 mb-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-serif text-sm tracking-widest text-[var(--text-ink)]",
                                children: W.date,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] tracking-widest text-[var(--text-muted)]",
                                children: W.year,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[9px] tracking-widest px-2 py-0.5 border border-[var(--line-faint)] text-[var(--text-muted)] ml-auto bg-white/20",
                                children: W.tags,
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "mb-3 flex items-center gap-2",
                            children: e.jsx("span", {
                              className:
                                "text-[9px] px-2 py-0.5 border border-[var(--line-faint)] text-[var(--text-muted)] bg-white/50",
                              children:
                                W.sourceType === "ai_daily_event"
                                  ? "当天事件"
                                  : "聊天片段",
                            }),
                          }),
                          e.jsxs("p", {
                            className:
                              "font-serif text-[16px] leading-relaxed text-[#555] group-hover:text-[var(--text-ink)] transition-colors duration-300 text-justify",
                            children: [
                              '"',
                              W.sourceType === "chat"
                                ? W.keySentence || k1(W.text)
                                : W.displayText || W.keySentence || k1(W.text),
                              '"',
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-serif tracking-[0.2em] text-[var(--text-ink)]",
                                children: "尝试改写",
                              }),
                              e.jsx("div", {
                                className: "w-12 h-[1px] bg-[var(--text-ink)]",
                              }),
                            ],
                          }),
                        ],
                      },
                      `${W.id}-${ue}`,
                    ),
                  ),
              }),
            ],
          }),
        ],
      }),
    se = () =>
      e.jsxs("div", {
        className:
          "flex flex-col h-full min-h-0 relative z-10 animate-slide-up bg-white/30 backdrop-blur-[2px]",
        children: [
          e.jsxs("div", {
            className: "p-6 flex items-center justify-between",
            children: [
              e.jsx("button", {
                onClick: () => p("gallery"),
                className:
                  "w-10 h-10 flex items-center justify-center border border-[var(--line-faint)] rounded-full hover:bg-[var(--text-ink)] hover:text-white transition-all duration-500",
                children: e.jsx(un, { className: "w-4 h-4" }),
              }),
              e.jsxs("div", {
                className:
                  "text-[10px] tracking-[0.2em] text-[var(--text-muted)] font-serif uppercase flex items-center gap-2",
                children: [
                  e.jsx("span", { children: g == null ? void 0 : g.date }),
                  e.jsx("span", {
                    className: "w-1 h-1 bg-[var(--accent-rose)] rounded-full",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "flex-1 min-h-0 overflow-y-auto no-scrollbar px-8 pb-[calc(env(safe-area-inset-bottom,0px)+36px)]",
            children: e.jsxs("div", {
              className: "flex flex-col pt-1",
              children: [
                e.jsxs("div", {
                  className:
                    "relative flex-1 border border-[var(--line-faint)] p-8 flex flex-col bg-[var(--bg-cream)]/50 shadow-sm group",
                  children: [
                    e.jsx("div", {
                      className:
                        "corner-mark corner-tl group-hover:w-3 group-hover:h-3",
                    }),
                    e.jsx("div", {
                      className:
                        "corner-mark corner-tr group-hover:w-3 group-hover:h-3",
                    }),
                    e.jsx("div", {
                      className:
                        "corner-mark corner-bl group-hover:w-3 group-hover:h-3",
                    }),
                    e.jsx("div", {
                      className:
                        "corner-mark corner-br group-hover:w-3 group-hover:h-3",
                    }),
                    e.jsxs("div", {
                      className: "flex justify-between items-start mb-6",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[11px] tracking-[0.4em] text-[var(--text-muted)] font-serif border-b border-[var(--text-muted)] pb-1",
                          children: "现实轨迹",
                        }),
                        e.jsx("div", {
                          className:
                            "text-[8px] text-[var(--text-muted)] uppercase tracking-widest",
                          children: "Origin",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex-1 flex items-center justify-center relative px-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute text-[80px] font-serif text-[var(--line-faint)] leading-none -z-10 -top-4 -left-2 select-none",
                          children: "「",
                        }),
                        e.jsx("p", {
                          className:
                            "font-serif text-[18px] leading-[2] text-[var(--text-ink)] text-center",
                          children: g == null ? void 0 : g.text,
                        }),
                        e.jsx("div", {
                          className:
                            "absolute text-[80px] font-serif text-[var(--line-faint)] leading-none -z-10 -bottom-8 -right-2 select-none",
                          children: "」",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-8 pt-6 border-t border-[var(--line-faint)] flex items-start gap-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "font-serif text-[12px] tracking-widest text-[var(--text-ink)] mt-0.5 border border-[var(--text-ink)] px-2 py-1 bg-white",
                          children: X,
                        }),
                        e.jsxs("div", {
                          className:
                            "text-[13px] font-serif text-[#666] leading-relaxed tracking-wide",
                          children: [
                            "如果时光倒流回那一刻。",
                            e.jsx("br", {}),
                            "你想怎么重新书写这个故事？",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "font-serif text-[11px] tracking-widest text-[var(--text-muted)] mb-2",
                      children: "第一回合 · TA想改写的行动",
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: (Array.isArray(
                        g == null ? void 0 : g.rewriteActions,
                      )
                        ? g.rewriteActions
                        : []
                      )
                        .slice(0, 8)
                        .map((W) =>
                          e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => ee(W),
                              className: `font-serif text-[11px] tracking-wide border px-3 py-1.5 transition-colors ${String(y || "").trim() === W ? "text-[var(--text-ink)] border-[var(--text-ink)] bg-white" : "text-[var(--text-muted)] border-[var(--line-faint)] bg-white/45 hover:border-[var(--text-ink)] hover:text-[var(--text-ink)]"}`,
                              children: W,
                            },
                            W,
                          ),
                        ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-7 relative",
                  children: [
                    e.jsxs("div", {
                      className:
                        "absolute left-0 top-3 font-serif text-sm text-[var(--text-muted)] flex items-center gap-2",
                      children: [
                        e.jsx("span", { children: "倘若" }),
                        e.jsx("div", {
                          className:
                            "w-[1px] h-3 bg-[var(--text-muted)] rotate-[15deg]",
                        }),
                      ],
                    }),
                    e.jsx("input", {
                      type: "text",
                      value: y,
                      onChange: (W) => v(W.target.value),
                      placeholder: "我紧紧抱住了你...",
                      className:
                        "w-full bg-transparent border-b border-[var(--text-ink)] py-3 pl-14 pr-12 text-[15px] font-serif text-[var(--text-ink)] placeholder:text-[#BBB] focus:outline-none transition-colors",
                    }),
                    e.jsx("button", {
                      onClick: U,
                      className: `absolute right-0 top-1 w-10 h-10 flex items-center justify-center transition-all duration-500 rounded-full border border-transparent ${String(y || "").trim() && b <= 1 ? "bg-[var(--text-ink)] text-[var(--bg-cream)] hover:scale-105 shadow-lg" : "text-[#CCC] border-[var(--line-faint)] opacity-50 pointer-events-none"}`,
                      children: e.jsx(VI, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
                g
                  ? e.jsxs("div", {
                      className:
                        "mt-6 border border-[var(--line-faint)] bg-white/50 px-4 py-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "font-serif text-[11px] tracking-widest text-[var(--text-muted)] mb-1",
                          children: "独白心声",
                        }),
                        e.jsx("p", {
                          className:
                            "font-serif text-[13px] leading-relaxed text-[#666]",
                          children:
                            String(
                              (g == null ? void 0 : g.monologue) || "",
                            ).trim() ||
                            lC(
                              g == null ? void 0 : g.text,
                              ie(s),
                              g == null ? void 0 : g.sourceType,
                            ),
                        }),
                      ],
                    })
                  : null,
                ye.length > 0
                  ? e.jsxs("div", {
                      className:
                        "mt-6 border border-[var(--line-faint)] bg-white/55 px-4 py-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "font-serif text-[11px] tracking-widest text-[var(--text-muted)]",
                              children: "已封存回响",
                            }),
                            e.jsxs("div", {
                              className: "text-[10px] text-[var(--text-muted)]",
                              children: [ye.length, " 条"],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "space-y-3",
                          children: ye.map((W) =>
                            e.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () =>
                                  z((ue) => (ue === W.id ? "" : W.id)),
                                className:
                                  "w-full text-left border border-[var(--line-faint)] bg-white/75 px-3 py-3 hover:border-[var(--text-ink)] transition-colors",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-1.5",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] tracking-widest text-[var(--text-muted)]",
                                        children: DV(W.at),
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-[9px] px-2 py-0.5 border border-[var(--line-faint)] text-[var(--text-muted)] bg-white/70",
                                            children:
                                              W.sourceType === "ai_daily_event"
                                                ? "当天事件"
                                                : "聊天片段",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[10px] text-[var(--text-muted)]",
                                            children:
                                              P === W.id ? "收起" : "展开",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "font-serif text-[12px] leading-relaxed text-[var(--text-ink)]",
                                    children:
                                      W.summary || W.highlight || "已完成封存",
                                  }),
                                  P === W.id
                                    ? e.jsxs("div", {
                                        className: "mt-2 space-y-2",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "border border-[var(--line-faint)] bg-white/70 px-2.5 py-2",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] tracking-widest text-[var(--text-muted)] mb-1",
                                                children: "第一回合 · TA行动",
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "font-serif text-[12px] leading-relaxed text-[var(--text-ink)]",
                                                children: String(
                                                  W.roundOneAction ||
                                                    Ub(W.prompt)
                                                      .roundOneAction ||
                                                    "未记录",
                                                ).trim(),
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "border border-[var(--line-faint)] bg-white/70 px-2.5 py-2",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] tracking-widest text-[var(--text-muted)] mb-1",
                                                children: "第二回合 · 你的回应",
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "font-serif text-[12px] leading-relaxed text-[var(--text-ink)]",
                                                children: String(
                                                  W.roundTwoAction ||
                                                    Ub(W.prompt)
                                                      .roundTwoAction ||
                                                    "未记录",
                                                ).trim(),
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "border border-[var(--line-faint)] bg-white/70 px-2.5 py-2",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] tracking-widest text-[var(--text-muted)] mb-1",
                                                children: "第一回合回响",
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "font-serif text-[11px] leading-relaxed text-[#666]",
                                                children:
                                                  String(
                                                    W.roundOneRewrite ||
                                                      "未记录",
                                                  ).trim() || "未记录",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "border border-[var(--line-faint)] bg-white/70 px-2.5 py-2",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] tracking-widest text-[var(--text-muted)] mb-1",
                                                children: "第二回合回响",
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "font-serif text-[11px] leading-relaxed text-[#666]",
                                                children:
                                                  String(
                                                    W.rewriteText || "未记录",
                                                  ).trim() || "未记录",
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : e.jsx("p", {
                                        className:
                                          "mt-1 font-serif text-[11px] leading-relaxed text-[#666] line-clamp-3",
                                        children: W.rewriteText,
                                      }),
                                ],
                              },
                              W.id,
                            ),
                          ),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          }),
        ],
      }),
    Te = () =>
      e.jsxs("div", {
        className:
          "flex flex-col h-full relative z-10 items-center justify-center p-6 animate-slide-up",
        children: [
          e.jsxs("div", {
            className:
              "relative w-64 h-64 flex items-center justify-center mb-16",
            children: [
              e.jsx("div", {
                className:
                  "absolute w-56 h-56 rounded-full border-[0.5px] border-[var(--text-muted)] opacity-20 animate-[spin_20s_linear_infinite]",
              }),
              e.jsx("div", {
                className:
                  "absolute w-40 h-40 rounded-full border-[0.5px] border-[var(--text-ink)] opacity-10 animate-[spin_15s_linear_infinite_reverse]",
              }),
              e.jsx("div", {
                className:
                  "absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[var(--accent-rose)]/50 to-transparent blur-3xl animate-breath",
              }),
              e.jsx("div", {
                className:
                  "absolute w-32 h-32 rounded-full bg-gradient-to-bl from-[var(--accent-dust)]/60 to-transparent blur-2xl animate-breath",
                style: { animationDelay: "2s" },
              }),
              e.jsx("div", {
                className:
                  "w-[1px] h-32 bg-gradient-to-b from-transparent via-[var(--text-ink)] to-transparent animate-pulse opacity-40",
              }),
              e.jsx("div", {
                className:
                  "absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-[var(--text-ink)] to-transparent animate-pulse opacity-40",
              }),
              e.jsx(Xn, {
                className:
                  "absolute text-[var(--text-ink)] w-5 h-5 opacity-50 animate-pulse",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-col items-center gap-4 text-center",
            children: [
              e.jsx("span", {
                className:
                  "font-serif text-2xl tracking-[0.3em] text-[var(--text-ink)] pl-[0.3em]",
                children: "时空交织中",
              }),
              e.jsx("span", {
                className:
                  "text-[10px] tracking-[0.4em] text-[var(--text-muted)] uppercase border-t border-[var(--line-faint)] pt-4",
                children: "Weaving Parallel Timeline",
              }),
              e.jsxs("span", {
                className:
                  "font-serif text-xs text-[#888] tracking-widest mt-2 opacity-80",
                children: [X, " 正在演算另一种结局..."],
              }),
            ],
          }),
        ],
      }),
    ke = () =>
      e.jsxs("div", {
        className:
          "flex flex-col h-full min-h-0 relative z-10 animate-[fadeIn_1s_ease-out]",
        children: [
          e.jsxs("div", {
            className:
              "px-8 pt-10 pb-2 flex justify-between items-end z-20 relative",
            children: [
              e.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  e.jsx("span", {
                    className:
                      "font-serif text-lg tracking-widest text-[var(--text-ink)]",
                    children: "命运分叉点",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[8px] tracking-[0.3em] text-[var(--text-muted)] uppercase",
                    children: "Divergence",
                  }),
                ],
              }),
              e.jsxs("button", {
                onClick: () => p("gallery"),
                className:
                  "font-serif text-[11px] border-b border-[var(--text-ink)] pb-0.5 tracking-widest text-[var(--text-ink)] hover:text-[var(--text-muted)] transition-colors flex items-center gap-1",
                children: [e.jsx(un, { className: "w-3 h-3" }), " 返回"],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex-1 min-h-0 relative px-8 py-8 pb-[calc(env(safe-area-inset-bottom,0px)+150px)] overflow-y-auto no-scrollbar",
            children: [
              e.jsxs("svg", {
                className:
                  "absolute left-[47px] top-[40px] w-[60px] h-[calc(100%-80px)] pointer-events-none",
                preserveAspectRatio: "none",
                overflow: "visible",
                children: [
                  e.jsx("line", {
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "100%",
                    stroke: "var(--text-muted)",
                    strokeWidth: "1",
                    strokeDasharray: "3 3",
                    opacity: "0.4",
                  }),
                  e.jsx("path", {
                    id: "branchPath",
                    d: "M 0,20 C 0,80 40,60 40,120 L 40,1000",
                    stroke: "var(--text-ink)",
                    strokeWidth: "1.5",
                    fill: "none",
                  }),
                  e.jsx("circle", {
                    cx: "0",
                    cy: "20",
                    r: "3",
                    fill: "var(--bg-cream)",
                    stroke: "var(--text-muted)",
                    strokeWidth: "1.5",
                  }),
                  e.jsx("circle", {
                    cx: "40",
                    cy: "120",
                    r: "3.5",
                    fill: "var(--text-ink)",
                  }),
                  e.jsxs("circle", {
                    r: "2",
                    fill: "var(--accent-rose)",
                    filter: "drop-shadow(0 0 2px rgba(230,212,212,1))",
                    children: [
                      e.jsx("animateMotion", {
                        dur: "3s",
                        repeatCount: "1",
                        fill: "freeze",
                        keyPoints: "0;1",
                        keyTimes: "0;1",
                        calcMode: "linear",
                        children: e.jsx("mpath", { href: "#branchPath" }),
                      }),
                      e.jsx("animate", {
                        attributeName: "opacity",
                        values: "1;0",
                        dur: "0.5s",
                        begin: "2.5s",
                        fill: "freeze",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "pl-10 opacity-40 hover:opacity-100 transition-all duration-500 mb-12 relative origin-left scale-[0.98]",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-3",
                    children: [
                      e.jsx("span", {
                        className:
                          "font-serif text-[11px] tracking-widest text-[var(--text-muted)]",
                        children: "原初现实",
                      }),
                      e.jsx("span", {
                        className:
                          "text-[8px] text-[var(--text-muted)] uppercase tracking-wider",
                        children: "Reality",
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className:
                      "font-serif text-[14px] leading-relaxed text-[#666] line-clamp-2",
                    children: ["“", g == null ? void 0 : g.text, "”"],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "pl-[70px] relative animate-slide-up",
                style: { animationDelay: "0.5s" },
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "font-serif text-[13px] tracking-[0.2em] text-[var(--text-ink)] font-medium",
                        children: "平行回响",
                      }),
                      e.jsx("span", {
                        className:
                          "font-serif text-[9px] tracking-widest text-white bg-[var(--text-ink)] px-1.5 py-0.5",
                        children: "新生",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "relative p-6 bg-white shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-[var(--line-faint)]",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-[var(--bg-cream)] 50%, transparent 50% border-r border-b border-[var(--line-faint)]",
                      }),
                      e.jsx("div", {
                        className:
                          "font-serif text-[15px] leading-[2] text-[var(--text-ink)] text-justify space-y-3",
                        children: (() => {
                          const W =
                              (E == null ? void 0 : E.rewriteText) ||
                              "那天我们在雨中吵架了，你转身刚要走，我冲过去从背后紧紧抱住了你。伞掉在地上，你愣了一下，轻轻叹了口气，反手握住了我的手。",
                            ue = String(
                              (E == null ? void 0 : E.highlight) ||
                                "我冲过去从背后紧紧抱住了你",
                            ).trim(),
                            re = BV(W);
                          let he = !1;
                          return re.map((ge, J) => {
                            if (!he && ue) {
                              const G = ge.indexOf(ue);
                              if (G >= 0)
                                return (
                                  (he = !0),
                                  e.jsxs(
                                    "p",
                                    {
                                      children: [
                                        ge.slice(0, G),
                                        e.jsx("span", {
                                          className:
                                            "bg-[var(--accent-rose)]/40 px-1 mx-0.5",
                                          children: ue,
                                        }),
                                        ge.slice(G + ue.length),
                                      ],
                                    },
                                    `rw_${J}`,
                                  )
                                );
                            }
                            return e.jsx("p", { children: ge }, `rw_${J}`);
                          });
                        })(),
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 pt-5 border-t border-[var(--line-faint)] flex items-start gap-4",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-7 h-7 shrink-0 rounded-sm border border-[#C55A5A] text-[#C55A5A] flex items-center justify-center font-serif text-[10px] transform rotate-[-5deg] opacity-80",
                            children: X,
                          }),
                          e.jsx("div", {
                            className:
                              "font-serif text-[13px] text-[#555] leading-relaxed tracking-wide italic",
                            children:
                              ((E == null ? void 0 : E.closingLines) &&
                                E.closingLines[0]) ||
                              "你看，只要一点微小的改变，结局便被改写。这段新的记忆，已为你妥善安放。",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              b < 3
                ? e.jsxs("div", {
                    className: "pl-[70px] mt-8 relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute left-[-30px] top-5 w-[1px] h-[calc(100%-40px)] bg-[var(--line-faint)] border-l border-dashed border-[var(--text-muted)]/70",
                      }),
                      e.jsxs("div", {
                        className:
                          "relative border border-[var(--line-faint)] bg-white/80 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.03)]",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-[var(--bg-cream)] 50%, transparent 50% border-r border-b border-[var(--line-faint)]",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsx("div", {
                                className:
                                  "font-serif text-[11px] tracking-widest text-[var(--text-muted)]",
                                children: "第二回合 · 你的行动",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[9px] tracking-widest text-[var(--text-muted)] uppercase",
                                children: "Round 02",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-[12px] leading-relaxed text-[#6f6961] mb-4 font-serif",
                            children: "请输入你这一回合的行动。",
                          }),
                          e.jsx("textarea", {
                            value: y,
                            onChange: (W) => v(W.target.value),
                            placeholder: "输入你的行动...",
                            rows: 4,
                            className:
                              "w-full resize-none bg-transparent border border-[var(--line-faint)] px-3 py-2 text-[14px] leading-relaxed font-serif text-[var(--text-ink)] placeholder:text-[#B8B2AA] focus:outline-none focus:border-[var(--text-ink)]",
                          }),
                          e.jsx("div", {
                            className: "mt-4 flex justify-end",
                            children: e.jsx("button", {
                              type: "button",
                              onClick: U,
                              className: `h-9 px-4 text-[11px] tracking-widest border transition-colors ${String(y || "").trim() ? "border-[var(--text-ink)] bg-[var(--text-ink)] text-white" : "border-[var(--line-faint)] text-[var(--text-muted)] opacity-50 pointer-events-none"}`,
                              children: "提交第二回合",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          }),
          e.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[var(--bg-cream)] via-[var(--bg-cream)] to-transparent z-30",
            children: e.jsxs("button", {
              onClick: ce,
              disabled: C || b < 3,
              className:
                "w-full bg-[var(--text-ink)] text-white py-4 flex items-center justify-center gap-3 hover:bg-black transition-all duration-300 shadow-xl shadow-black/10 group disabled:opacity-60 disabled:hover:bg-[var(--text-ink)]",
              children: [
                e.jsx("span", {
                  className:
                    "font-serif text-[14px] tracking-[0.3em] font-medium group-hover:tracking-[0.4em] transition-all",
                  children: C
                    ? "封存中..."
                    : b < 3
                      ? "请先完成第二回合"
                      : "封存这段回响",
                }),
                e.jsx(aI, { className: "w-4 h-4 opacity-70" }),
              ],
            }),
          }),
        ],
      });
  return e.jsxs("div", {
    className: "relative h-full w-full overflow-hidden",
    children: [
      e.jsxs("div", {
        className:
          "relative h-full w-full overflow-hidden bg-[var(--bg-cream)] font-sans-pm",
        style: { paddingTop: "calc(env(safe-area-inset-top, 0px) + 10px)" },
        children: [
          e.jsx("style", { children: EV }),
          e.jsx("div", { className: "texture-overlay" }),
          f === "gallery" && pe(),
          f === "compose" && se(),
          f === "weaving" && Te(),
          f === "split" && ke(),
        ],
      }),
      d
        ? e.jsx("div", {
            className:
              "pointer-events-none absolute left-4 right-4 z-40 rounded-xl border border-rose-200/80 bg-rose-50/95 px-3 py-2 text-center text-xs text-rose-700 shadow-sm",
            style: { top: "calc(env(safe-area-inset-top, 0px) + 56px)" },
            children: d,
          })
        : null,
      O
        ? e.jsx("div", {
            className:
              "absolute inset-0 z-50 bg-black/35 backdrop-blur-[1px] flex items-center justify-center px-6",
            children: e.jsxs("div", {
              className:
                "w-full max-w-[560px] bg-[var(--bg-cream)] border border-[var(--line-faint)] shadow-2xl p-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className:
                            "font-serif text-[16px] tracking-wide text-[var(--text-ink)]",
                          children: "自定义文风",
                        }),
                        e.jsx("div", {
                          className:
                            "text-[11px] text-[var(--text-muted)] mt-1",
                          children:
                            "保存后，“凝练素材 + 回忆改写”都会优先遵循这里的文风。",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className:
                        "text-[12px] text-[var(--text-muted)] hover:text-[var(--text-ink)]",
                      onClick: () => {
                        (ne(K), Z(!1));
                      },
                      children: "关闭",
                    }),
                  ],
                }),
                e.jsx("textarea", {
                  value: V,
                  onChange: (W) => ne(W.target.value),
                  placeholder:
                    "例：用冷静克制的第一人称，少比喻，多动作细节；句子自然口语，不要抒情堆砌。",
                  rows: 8,
                  className:
                    "w-full resize-none bg-white/75 border border-[var(--line-faint)] px-3 py-2 text-[13px] leading-relaxed font-serif text-[var(--text-ink)] placeholder:text-[#B8B2AA] focus:outline-none focus:border-[var(--text-ink)]",
                }),
                e.jsx("div", {
                  className: "mt-3 text-[11px] text-[var(--text-muted)]",
                  children:
                    "留空即使用系统默认文风。建议写清：语气、人设、句长、禁用表达、是否使用母语。",
                }),
                e.jsxs("div", {
                  className: "mt-4 flex items-center justify-end gap-2",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      className:
                        "h-9 px-4 text-[11px] tracking-widest border border-[var(--line-faint)] text-[var(--text-muted)] hover:border-[var(--text-ink)] hover:text-[var(--text-ink)]",
                      onClick: () => {
                        ne("");
                      },
                      children: "清空",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className:
                        "h-9 px-5 text-[11px] tracking-widest border border-[var(--text-ink)] bg-[var(--text-ink)] text-white",
                      onClick: () => {
                        const W = String(V || "").trim();
                        (q(W), je({ customStyleGuide: W }), Z(!1));
                      },
                      children: "保存文风",
                    }),
                  ],
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
function GV(t) {
  if (t == null) return null;
  const s = String(t).trim(),
    n = s.match(/```(?:json)?\s*([\s\S]*?)```/i),
    a = n ? n[1].trim() : s,
    r = a.indexOf("{"),
    i = a.lastIndexOf("}");
  if (r < 0 || i <= r) return null;
  try {
    return JSON.parse(a.slice(r, i + 1));
  } catch {
    return null;
  }
}
function Ju(t, s, n) {
  const a = (s == null ? void 0 : s.name) || "用户",
    r =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "AI";
  return (n || []).slice(-20).map((i) => {
    const o = (i == null ? void 0 : i.sender) === "me" ? a : r,
      c = String((i == null ? void 0 : i.text) || "")
        .replace(/\s+/g, " ")
        .trim();
    return `${o}：${c || "…"}`;
  });
}
function Ku(t) {
  const s = Math.floor(Number(t) || 7);
  return Math.max(3, Math.min(21, s));
}
function fC(t) {
  return t === "hard"
    ? { min: 3, max: 4 }
    : t === "normal"
      ? { min: 2, max: 3 }
      : { min: 1, max: 2 };
}
const r2 = 15e4,
  HV = 15e4;
function WV(t) {
  const s = Ku(t == null ? void 0 : t.totalDays),
    n = fC(t == null ? void 0 : t.difficulty).max,
    a = Array.from({ length: s }).map((r, i) => ({
      dayIndex: i + 1,
      status: "pending",
      tasks: Array.from({ length: n }).map((o, c) => ({
        taskId: `fallback_day_${i + 1}_task_${c + 1}`,
        title: `第${i + 1}天任务 ${c + 1}`,
        type:
          (t == null ? void 0 : t.themeType) === "custom"
            ? "manual_check"
            : "auto_check",
        judgeMode:
          (t == null ? void 0 : t.themeType) === "custom"
            ? "manual_ai"
            : "auto",
        status: "pending",
      })),
    }));
  return {
    planId: `fallback_plan_${Date.now()}`,
    days: a,
    displayText: "已按当前配置生成赛季计划（兜底模式）。",
  };
}
function YV(t) {
  const s = String(t || "")
    .trim()
    .toLowerCase();
  return s === "accepted"
    ? "accepted"
    : s === "rejected"
      ? "rejected"
      : s === "counter_proposal"
        ? "counter_proposal"
        : "accepted";
}
function VV({ contact: t, boundUser: s, recentLines: n, seasonConfig: a }) {
  const r =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "AI",
    i = (t == null ? void 0 : t.setting) || "（无详细设定）",
    o = (s == null ? void 0 : s.name) || "用户",
    c = (s == null ? void 0 : s.settings) || "（无）",
    d = n.length
      ? n.join(`
`)
      : "（暂无最近聊天）",
    u =
      (a == null ? void 0 : a.themeType) === "daily"
        ? "日常向"
        : `自定义：${(a == null ? void 0 : a.customThemeText) || "未命名"}`;
  return `你是情侣空间赛季旅程协商引擎。根据双方人设与最近聊天，判断是否接受用户提出的赛季方案。