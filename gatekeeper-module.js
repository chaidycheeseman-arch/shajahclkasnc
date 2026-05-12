        (c.onsuccess = () => i(c.result)),
        (c.onupgradeneeded = (d) => {
          const u = d.target.result;
          u.objectStoreNames.contains(n) ||
            u.createObjectStore(n, { keyPath: "id" });
        }));
    }),
    r = await new Promise((i, o) => {
      const c = a.transaction(n, "readonly"),
        d = c.objectStore(n).getAll();
      ((d.onerror = () => o(d.error)),
        (d.onsuccess = () => i(d.result || [])),
        (c.onerror = () => o(c.error)));
    });
  return { version: 1, exportedAt: new Date().toISOString(), rows: r };
}
async function m2() {
  const t = {},
    s = [
      "phone_",
      "chat_app_",
      "chat_",
      "chatApp_blocked_friend_requests_v1",
      "world_books",
      "video_app_",
      "meet_app_",
      "portable_",
      "memory_archive_",
      "yesterday_bureau_",
      "couple_",
      "bubble_",
      "netease_",
      "widget_",
      "device_",
      "user_",
      "settings_",
      "last_viewed_",
      "backstage_",
      "vinyl_",
      "photo_frame_",
      "jilu_",
      "douyin_",
      "puzzle_",
      "gatekeeper_",
      "encounter_bazaar_",
      "reading_app_",
    ],
    n = (r) => s.some((i) => r.startsWith(i) || r === i),
    a = await be.getAllKeys();
  for (const r of a) n(r) && (t[r] = await be.get(r));
  try {
    const r = await rte();
    r && r.items && r.items.length && (t[mp] = r);
  } catch {}
  try {
    const r = await ite();
    r && Array.isArray(r.rows) && r.rows.length && (t[mg] = r);
  } catch {}
  try {
    const r = await qQ(),
      i = await KQ();
    ((t.mail_app_db_settings = r), (t.mail_app_db_files = i));
  } catch {}
  if (typeof window < "u" && window.localStorage) {
    const r = {};
    try {
      const i = localStorage.length;
      for (let o = 0; o < i; o++) {
        const c = localStorage.key(o);
        c && (nte(c) || ate(c)) && (r[c] = localStorage.getItem(c));
      }
    } catch {}
    Object.keys(r).length && (t.__localStorage_app_patch__ = r);
  }
  return t;
}
async function D1(t) {
  if (!Object.values(t).some(Boolean))
    throw new Error("请至少勾选一个要导出的分区");
  const s = await m2(),
    n = t6(s, t),
    a = Object.keys(n),
    r = new fp();
  return (
    r.file(
      "manifest.json",
      tp({
        format: L1,
        version: 1,
        exportedAt: new Date().toISOString(),
        keys: a,
        sectionSelections: t,
      }),
    ),
    a.forEach((i, o) => {
      r.file(`entries/${String(o).padStart(6, "0")}.json`, tp(n[i]));
    }),
    r.generateAsync({ type: "blob", compression: "DEFLATE" })
  );
}
async function ote({
  email: t,
  password: s,
  displayName: n,
  activationCode: a,
  deviceId: r,
  sessionSlotId: i,
  userAgent: o,
  ip: c,
}) {
  const d = "https://hrnebfpykywhqxtlqusc.supabase.co",
    u =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhybmViZnB5a3l3aHF4dGxxdXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5ODk1OTksImV4cCI6MjA4NDU2NTU5OX0.b3ydkE7_Y7QHpJ-Ud0Fp18Dw2LAvQOh1rEQKyAh0y6s",
    f = `${d.replace(/\/$/, "")}/functions/v1/gate-register`,
    p = { hasSupabaseUrl: !!d, hasAnonKey: !!u, endpoint: f },
    m = f;
  let h = null;
  try {
    const g = new AbortController();
    h = setTimeout(() => g.abort(), 15e3);
    const x = await fetch(m, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${u}`,
          apikey: u,
        },
        signal: g.signal,
        body: JSON.stringify({
          email: t,
          password: s,
          displayName: n,
          activationCode: a,
          deviceId: r,
          sessionSlotId: i ?? null,
          userAgent: o ?? (typeof navigator < "u" ? navigator.userAgent : null),
          ip: c ?? null,
        }),
      }),
      y = await x.json().catch(() => ({}));
    return x.ok
      ? y
      : {
          ok: !1,
          error: (y == null ? void 0 : y.error) || "request_failed",
          status: x.status,
          debug: (y == null ? void 0 : y.debug) || null,
          diagnostic: p,
        };
  } catch (g) {
    return {
      ok: !1,
      error: "network_error",
      diagnostic: {
        ...p,
        message: String((g == null ? void 0 : g.message) || g || ""),
      },
    };
  } finally {
    h && clearTimeout(h);
  }
}
async function lte(t) {
  return (!("serviceWorker" in navigator) || !("PushManager" in window), null);
}
async function cte() {
  return "Notification" in window
    ? await Notification.requestPermission()
    : "denied";
}
const s6 = [
    {
      number: "01",
      title: "应用性质",
      paragraphs: [
        "本应用为个人/演示项目，模拟手机界面与多种功能模块，供学习与体验使用。",
      ],
    },
    {
      number: "02",
      title: "AI 与第三方服务",
      paragraphs: [
        "AI 对话、语音合成（TTS）、地图等功能依赖您自行配置的第三方 API（如兼容 OpenAI 的接口、ElevenLabs、Minimax、高德地图等）。经由这些接口产生的内容与结果由相应服务商提供，本应用仅作展示与转发，请您知悉并遵守各服务商的条款与隐私政策；涉及内容准确性、合法性或安全性的问题，建议以服务商说明为准。",
        "本应用可能使用 Supabase（门禁与访问控制、推送、系统配置、辑录发现页）、Firebase 等后端服务，相关数据的收集、存储与处理遵循上述服务商的政策；门禁与设备授权状态存于 Supabase，需联网使用。",
      ],
    },
    {
      number: "03",
      title: "数据与隐私",
      paragraphs: [
        "部分数据存储于您设备本地（或浏览器存储），包括设置、聊天记录、邮件、桌面布局等。备份与恢复请您自行操作并妥善保管导出数据。使用第三方服务时，数据可能被发送至对应服务商，建议您了解相关策略并自行评估是否接受。",
      ],
    },
    {
      number: "04",
      title: "版权与使用规范",
      paragraphs: [
        "禁止与本项目混用或绑定的资源：禁止使用与酒馆（SillyTavern）相关的一切资源用于本应用或与本应用捆绑分发；禁止在未获授权的情况下使用其他「小手机」类项目或类似产品的代码、资源、配置等。上述行为均视为对开发者与原创作者的权益侵害。",
        "禁止二传二改与未授权传播：未经同意，禁止对本应用进行再打包、二传、二改后以「本应用」或衍生名义对外分发、销售或商用。",
        "本应用及其内容的著作权与相关权益归开发者所有。您在使用中应尊重创作者劳动成果，遵守所在地法律法规；违规使用可能导致法律追责或被禁止使用。",
      ],
    },
    {
      number: "05",
      title: "使用须知与免责",
      paragraphs: [
        "使用本应用即表示您已阅读并理解上述内容。我们无法对第三方 API 接口服务的内容、可用性或合规性作保证，请您理性使用、注意数据与隐私安全。",
        "请勿将本应用用于违法、违规或侵犯他人权益的用途。未成年人建议在监护人指导下使用。感谢您对本项目的支持与理解。",
      ],
    },
  ],
  dte = ({ onAgree: t }) => {
    const s = l.useRef(null),
      n = l.useRef(null),
      [a, r] = l.useState(!1),
      i = l.useCallback(() => {
        const c = n.current,
          d = s.current;
        if (!c || !d) return;
        const u = c.getBoundingClientRect(),
          f = d.getBoundingClientRect(),
          p =
            u.top >= f.top &&
            u.top <= f.bottom + 20 &&
            u.bottom >= f.bottom - 20;
        r((m) => (p ? !0 : m));
      }, []);
    l.useEffect(() => {
      const c = s.current,
        d = n.current;
      if (!c || !d) return;
      const u = new IntersectionObserver(
        (f) => {
          var p;
          (p = f[0]) != null && p.isIntersecting && r(!0);
        },
        { root: c, rootMargin: "0px 0px 24px 0px", threshold: 0 },
      );
      return (u.observe(d), () => u.disconnect());
    }, []);
    const o = () => i();
    return e.jsx("div", {
      className:
        "fixed inset-0 z-[100] flex items-center justify-center bg-black/10 backdrop-blur-md p-4 sm:p-6",
      children: e.jsxs(We.div, {
        initial: { scale: 0.9, opacity: 0, rotateX: 10 },
        animate: { scale: 1, opacity: 1, rotateX: 0 },
        transition: { type: "spring", stiffness: 200, damping: 20 },
        className:
          "relative w-full max-w-[360px] max-h-[90vh] flex flex-col bg-[#FDFBF9] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60",
        children: [
          e.jsxs("div", {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            children: [
              e.jsx("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                },
              }),
              e.jsx("div", {
                className:
                  "absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-100/30 rounded-full blur-3xl",
              }),
              e.jsx("div", {
                className:
                  "absolute top-40 -left-20 w-56 h-56 bg-gradient-to-tr from-blue-200/20 to-purple-100/20 rounded-full blur-3xl",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "relative z-10 flex flex-col min-h-0 p-6 sm:p-8",
            children: [
              e.jsxs("div", {
                className:
                  "flex justify-between items-start mb-4 flex-shrink-0",
                children: [
                  e.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] font-bold tracking-[0.3em] text-gray-400 uppercase",
                        children: "法律与使用须知",
                      }),
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] font-mono text-gray-300 mt-1",
                        children: "DISCLAIMER",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center",
                    children: e.jsx(ro, {
                      size: 14,
                      className: "text-gray-400",
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mb-4 relative flex-shrink-0",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-3xl font-serif text-gray-900 leading-tight tracking-tight",
                    children: "免责声明",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-12 h-[1px] bg-gray-900",
                  }),
                ],
              }),
              e.jsxs("div", {
                ref: s,
                onScroll: o,
                className:
                  "flex-1 min-h-0 overflow-y-auto overscroll-contain py-2 -mx-1 px-1",
                style: { maxHeight: "50vh" },
                children: [
                  e.jsx("div", {
                    className: "absolute left-0 w-[1px] h-0",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className: "space-y-5",
                    children: s6.map(({ number: c, title: d, paragraphs: u }) =>
                      e.jsxs(
                        "div",
                        {
                          className: "space-y-2",
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-[0.625rem] font-bold tracking-widest text-gray-500 uppercase",
                              children: [c, " · ", d],
                            }),
                            u.map((f, p) =>
                              e.jsx(
                                "p",
                                {
                                  className:
                                    "text-sm text-gray-600 font-serif leading-relaxed",
                                  children: f,
                                },
                                p,
                              ),
                            ),
                          ],
                        },
                        c,
                      ),
                    ),
                  }),
                  e.jsx("div", {
                    ref: n,
                    className: "h-4 flex-shrink-0",
                    "aria-hidden": !0,
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "flex-shrink-0 mt-6 pt-5 border-t border-gray-100 flex justify-end items-center",
                children: e.jsxs("button", {
                  type: "button",
                  onClick: t,
                  disabled: !a,
                  className: [
                    "group flex items-center gap-2 pl-6 py-2.5 pr-2 rounded-full text-[0.625rem] font-bold tracking-widest uppercase transition-all",
                    a
                      ? "bg-gray-900 text-white hover:pr-4"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed",
                  ].join(" "),
                  children: [
                    e.jsx("span", {
                      children: a ? "同意并继续" : "请滚动到底部阅读",
                    }),
                    a &&
                      e.jsx("div", {
                        className:
                          "w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-colors",
                        children: e.jsx(Kn, { size: 12 }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  n6 = 15e3,
  ute = 8e3,
  fte = 12e3,
  p5 = 6e3;
async function My(t, s = n6) {
  try {
    const { data: n, error: a } = await Promise.race([
      t.auth.getSession(),
      new Promise((r, i) =>
        setTimeout(() => i(new Error("GET_SESSION_TIMEOUT")), s),
      ),
    ]);
    return (n == null ? void 0 : n.session) ?? null;
  } catch (n) {
    return (String((n == null ? void 0 : n.message) || n), null);
  }
}
async function o0(t, s = fte) {
  try {
    return await Promise.race([
      be.get(t),
      new Promise((n, a) =>
        setTimeout(() => a(new Error("ASYNC_STORAGE_READ_TIMEOUT")), s),
      ),
    ]);
  } catch {
    return null;
  }
}
const x5 = 32e3,
  $0 = "gatekeeper_ui_approved";
function h5() {
  var t;
  if (typeof window > "u") return null;
  try {
    const s = _M();
    if (s != null && s.id) return s;
    for (let n = 0; n < localStorage.length; n++) {
      const a = localStorage.key(n);
      if (!a || !a.includes("-auth-token")) continue;
      const r = localStorage.getItem(a);
      if (!r) continue;
      const i = JSON.parse(r),
        o =
          (i == null ? void 0 : i.user) ??
          ((t = i == null ? void 0 : i.currentSession) == null
            ? void 0
            : t.user);
      if (o != null && o.id) return o;
    }
  } catch {}
  return null;
}
function g5(t) {
  const s = String(t || "")
    .trim()
    .toLowerCase();
  return s === "active"
    ? "approved"
    : new Set([
          "pending",
          "approved",
          "rejected",
          "revoked",
          "banned",
          "expired",
        ]).has(s)
      ? s
      : "unknown";
}
function mte() {
  if (typeof window > "u") return "unknown";
  try {
    let t = SM();
    if (!t)
      for (let r = 0; r < localStorage.length; r++) {
        const i = localStorage.key(r);
        if (i && i.includes("auth-token") && localStorage.getItem(i)) {
          t = !0;
          break;
        }
      }
    const s = localStorage.getItem("d-ai_asyncStorage:device_id"),
      n = s != null && s !== "" && s !== "null";
    if (sessionStorage.getItem($0) === "1" && (t || n)) return "approved";
    if (t || n) return "loading";
  } catch {}
  return "unknown";
}
const au = "d-ai_gate_web_device_id",
  $m = "d-ai_gate_web_session_slot_id",
  Ty = "d-ai_gate_web_session_slot_id_ls",
  pte = "d-ai-gate-slot-channel",
  xte = 8 * 60 * 1e3;
function b5() {
  try {
    sessionStorage.removeItem(au);
  } catch {}
}
function hte() {
  try {
    const t = sessionStorage.getItem($m);
    if (typeof t == "string" && t.trim().length > 0) {
      const a = t.trim();
      try {
        localStorage.setItem(Ty, a);
      } catch {}
      return a;
    }
    const s = localStorage.getItem(Ty);
    if (typeof s == "string" && s.trim().length > 0) {
      const a = s.trim();
      return (sessionStorage.setItem($m, a), a);
    }
    const n = crypto.randomUUID();
    sessionStorage.setItem($m, n);
    try {
      localStorage.setItem(Ty, n);
    } catch {}
    return n;
  } catch {
    return crypto.randomUUID();
  }
}
const Iy = "gatekeeper_apply_history",
  y5 = "gatekeeper_disclaimer_agreed",
  v5 = 5,
  Yf = "gatekeeper_runtime_status_v1",
  gte = 10 * 60 * 1e3,
  w5 = (t) =>
    t === "device_id" ||
    t.startsWith("gatekeeper_") ||
    t.startsWith("d-ai_gate_") ||
    t.includes("auth-token"),
  j5 = (t) =>
    t.includes("auth-token") ||
    t.startsWith("d-ai_gate_") ||
    t.startsWith("gatekeeper_") ||
    t === "d-ai_asyncStorage:device_id",
  bte = (t) => {
    const s = atob(String(t || "")),
      n = new Uint8Array(s.length);
    for (let a = 0; a < s.length; a++) n[a] = s.charCodeAt(a);
    return n.buffer;
  },
  yte = [
    {
      title: "审核较慢",
      body: "人工审核通常需要较长时间，无法保证即时通过，请耐心等待。",
    },
    {
      title: "建议优先使用激活码",
      body: "激活码可立即进入，无需等待审核，建议优先使用。",
    },
    {
      title: "缺少激活码",
      body: "若暂时没有激活码，请到售后群联系管理员获取激活码。",
    },
    {
      title: "超过 4 小时仍未通过",
      body: "若提交申请后超过 4 小时仍未通过，你可先在本页「取消」当前申请，再到售后群向管理员索取激活码。",
    },
    {
      title: "申请身份须与初次一致",
      body: "请务必保证本次填写的姓名 / 申请 ID（如 QQ 号+昵称）与初次申请所用格式一致，否则审核可能无法对应到你的申请。",
    },
  ],
  $1 = l.createContext(null),
  N5 = () => {
    if (typeof window > "u") return null;
    const t = window.visualViewport;
    return t ? Math.round(t.height) : null;
  },
  Ey = (t) =>
    t === "approved" ||
    t === "pending" ||
    t === "device_selection_required" ||
    t === "unknown" ||
    t === "device_blocked" ||
    t === "banned" ||
    t === "expired" ||
    t === "rejected" ||
    t === "revoked" ||
    t === "error",
  l0 = (t) =>
    t === "approved" ||
    t === "pending" ||
    t === "device_selection_required" ||
    t === "device_blocked",
  vte = ({ children: t }) => {
    var Vs;
    const [s, n] = l.useState(mte),
      a = l.useRef(s);
    (l.useLayoutEffect(() => {
      a.current = s;
    }, [s]),
      l.useEffect(() => {
        try {
          s === "approved"
            ? sessionStorage.setItem($0, "1")
            : s !== "loading" && sessionStorage.removeItem($0);
        } catch {}
      }, [s]));
    const [r, i] = l.useState(""),
      [o, c] = l.useState(""),
      [d, u] = l.useState(""),
      [f, p] = l.useState(""),
      [m, h] = l.useState(!1),
      [g, x] = l.useState(""),
      [y, v] = l.useState(""),
      [b, N] = l.useState(""),
      [w, _] = l.useState([]),
      [A, k] = l.useState(""),
      [C, M] = l.useState(""),
      [E, S] = l.useState(""),
      [j, T] = l.useState(!1),
      [I, L] = l.useState(() => hte()),
      B = l.useRef(crypto.randomUUID()),
      F = l.useRef(null),
      D = 10 * 60 * 1e3,
      $ = 60 * 1e3,
      P = 30 * 60 * 1e3,
      z = 5 * 60 * 1e3,
      O = 60 * 60 * 1e3,
      Z = 800,
      K = 5,
      q = 30 * 60 * 1e3,
      V = l.useRef(0),
      ne = l.useRef(0),
      le = l.useRef({ value: null, at: 0 }),
      ie = l.useRef(!1),
      X = l.useRef(0),
      je = l.useRef(null),
      xe = l.useRef(null),
      [ye, R] = l.useState(!1),
      [oe, ee] = l.useState(!1),
      [H, Y] = l.useState(() => h5()),
      [U, ce] = l.useState("login"),
      [pe, se] = l.useState(!1),
      [Te, ke] = l.useState(!1),
      [W, ue] = l.useState(""),
      [re, he] = l.useState(""),
      [ge, J] = l.useState(""),
      [G, we] = l.useState(""),
      [Q, ve] = l.useState(() => N5()),
      [Ve, Ae] = l.useState([]),
      [te, Se] = l.useState(null),
      [Fe, $e] = l.useState(!1),
      [tt, Xe] = l.useState(!1),
      [ht, Pe] = l.useState(!1),
      [ut, _t] = l.useState(10),
      Ee = l.useRef(null),
      fe = l.useRef(null),
      He = l.useRef(null),
      Ie = l.useRef(!1),
      Ce = l.useRef(""),
      Re = l.useRef(0),
      De = l.useRef(0),
      [at, ft] = l.useState([]),
      [vt, Oe] = l.useState(!1),
      Qe = l.useRef(!1),
      Ye = l.useCallback((pt) => {
        const dt = `[${new Date().toISOString().slice(11, 23)}] ${pt}`;
        ft((xt) => (xt.length >= 120 ? [...xt.slice(-119), dt] : [...xt, dt]));
      }, []),
      Ze = 2e4,
      Ue = 8e3,
      me = 1e4,
      [jt, Gt] = l.useState(!0),
      [Pt, Wt] = l.useState(0),
      [ct, Kt] = l.useState({
        open: !1,
        title: "",
        message: "",
        sections: null,
        minWaitMs: null,
        onConfirm: () => {},
      }),
      fs = {
        invalid_email: "请填写有效邮箱地址。",
        weak_password: "密码至少 8 位。",
        invalid_display_name: "QQ 号长度为 1～64 字。",
        invalid_format: "激活码格式不正确（至少 8 位字母或数字）。",
        missing_device: "设备标识异常，请刷新页面后重试。",
        email_taken: "该邮箱已注册，请直接登录。",
        rate_limited: "尝试过于频繁，请约 15 分钟后再试。",
        race_lost: "注册冲突，请重试一次。",
        not_found: "激活码不存在，请核对后重试。",
        used: "该激活码已被使用。",
        voided: "该激活码已作废。",
        expired: "该激活码已过期。",
        batch_voided: "该批激活码已停用。",
        already_registered: "该账号已登记，请登录。",
        server_error: "服务器异常，请稍后重试。",
        auth_create_failed: "创建账号失败，请更换邮箱或稍后重试。",
        network_error: "网络异常，请检查连接。",
        request_failed: "请求失败，请稍后重试。",
        missing_anon_key:
          "注册配置缺失（Anon Key），请联系管理员检查手机端环境变量。",
      },
      gt = (pt, qe, dt, xt = null, zt = null) => {
        Kt({
          open: !0,
          title: pt,
          message: qe,
          onConfirm: dt,
          sections: xt,
          minWaitMs: zt != null && zt > 0 ? zt : null,
        });
      },
      ae = () => {
        Kt((pt) => ({ ...pt, open: !1 }));
      },
      nt = (pt) => {
        if (
          (Ye(
            `[门禁·容错] 验证失败 ${ne.current + 1}/${K}：${String((pt == null ? void 0 : pt.message) || pt || "").slice(0, 100)}`,
          ),
          (ne.current += 1),
          ne.current < K)
        ) {
          (je.current && (clearTimeout(je.current), (je.current = null)),
            (je.current = setTimeout(() => {
              ((je.current = null),
                Ye("[门禁·容错] 将静默重试 checkGateAuth / checkStatus"));
              const qe = H == null ? void 0 : H.id;
              if (qe) {
                es(qe);
                return;
              }
              const dt = r || Ce.current;
              dt && At(dt);
            }, 1200)));
          return;
        }
        (je.current && (clearTimeout(je.current), (je.current = null)),
          F.current && (clearInterval(F.current), (F.current = null)),
          Ye("[门禁·容错] 已达重试上限，退回登录并提示验证服务异常"),
          n("unknown"),
          ce("login"),
          h(!1),
          x("验证服务暂时异常，请重新登录后重试。"));
      },
      It = () => {
        ne.current = 0;
      },
      Xt = (pt, qe) => {
        F.current && clearTimeout(F.current);
        const dt = Math.floor(qe * (0.05 + Math.random() * 0.1));
        F.current = setTimeout(pt, qe + dt);
      },
      bs = (pt) => {
        const qe = String((pt == null ? void 0 : pt.code) || ""),
          dt = String((pt == null ? void 0 : pt.message) || pt || "");
        return (
          dt.includes("TIMEOUT") ||
          dt.includes("Failed to fetch") ||
          dt.includes("NetworkError") ||
          dt.includes("network") ||
          qe === "57014"
        );
      },
      ss = async (pt, qe, dt) => {
        const xt = () =>
          Promise.race([
            pt(),
            new Promise((zt, ms) => setTimeout(() => ms(new Error(dt)), qe)),
          ]);
        try {
          return await xt();
        } catch (zt) {
          if (!bs(zt)) throw zt;
          return (await new Promise((ms) => setTimeout(ms, Z)), await xt());
        }
      };
    l.useEffect(() => {
      if (typeof window > "u" || typeof BroadcastChannel > "u") return;
      const pt = B.current,
        qe = crypto.randomUUID();
      let dt = !1;
      const xt = new BroadcastChannel(pte),
        zt = (Cs) => {
          const us = (Cs == null ? void 0 : Cs.data) || {};
          !us ||
            typeof us != "object" ||
            (us.type === "slot-check" &&
              us.slotId === I &&
              us.sender !== pt &&
              xt.postMessage({
                type: "slot-check-reply",
                slotId: I,
                requestId: us.requestId,
                sender: pt,
              }),
            us.type === "slot-check-reply" &&
              us.slotId === I &&
              us.requestId === qe &&
              us.sender !== pt &&
              (dt = !0));
        };
      (xt.addEventListener("message", zt),
        xt.postMessage({
          type: "slot-check",
          slotId: I,
          requestId: qe,
          sender: pt,
        }));
      const ms = window.setTimeout(() => {
        if (dt) {
          const Cs = crypto.randomUUID();
          try {
            sessionStorage.setItem($m, Cs);
          } catch {}
          (L(Cs),
            Ye(
              "[门禁·窗口槽] BroadcastChannel 检测到同 slot 多实例，已换新 session_slot_id",
            ));
        }
        try {
          (xt.removeEventListener("message", zt), xt.close());
        } catch {}
      }, 350);
      return () => {
        window.clearTimeout(ms);
        try {
          (xt.removeEventListener("message", zt), xt.close());
        } catch {}
      };
    }, [I]);
    const _s = l.useCallback(
        async (pt = {}) => {
          const { clearUserName: qe = !1 } = pt;
          (Ye(`[门禁·清理] clearGateIdentityState clearUserName=${qe}`),
            (Re.current += 1),
            (De.current += 1),
            Y(null),
            i(""),
            _([]),
            k(""),
            M(""),
            S(""),
            (ie.current = !1),
            je.current && (clearTimeout(je.current), (je.current = null)));
          try {
            (sessionStorage.removeItem($0), sessionStorage.removeItem($m));
          } catch {}
          (b5(),
            await be.removeItem("device_id").catch(() => {}),
            qe && (await be.removeItem("user_name").catch(() => {})),
            await be.removeItem(Yf).catch(() => {}));
        },
        [Ye],
      ),
      qs = l.useCallback(async () => {
        try {
          if (!("serviceWorker" in navigator) || !("PushManager" in window))
            return (
              Ye("[门禁·设备ID] push 恢复跳过：浏览器无 SW/Push API"),
              null
            );
          if (!(await navigator.serviceWorker.getRegistrations()).length)
            return (
              Ye("[门禁·设备ID] push 恢复跳过：无 Service Worker 注册"),
              null
            );
          const dt = await (
              await Promise.race([
                navigator.serviceWorker.ready,
                new Promise((Cs, us) =>
                  setTimeout(() => us(new Error("SW_READY_TIMEOUT")), 4e3),
                ),
              ])
            ).pushManager.getSubscription(),
            xt = dt == null ? void 0 : dt.endpoint;
          if (!xt)
            return (
              Ye("[门禁·设备ID] push 恢复跳过：无 push subscription"),
              null
            );
          const { data: zt, error: ms } = await Wa.from("push_subscriptions")
            .select("device_id")
            .eq("endpoint", xt)
            .single();
          return ms
            ? (Ye(`[门禁·设备ID] push 表查询失败 code=${ms.code || "—"}`), null)
            : (zt != null &&
                zt.device_id &&
                Ye(
                  `[门禁·设备ID] push 恢复成功 id.len=${String(zt.device_id).length}`,
                ),
              (zt == null ? void 0 : zt.device_id) || null);
        } catch (pt) {
          return (
            Ye(
              `[门禁·设备ID] push 恢复异常 ${String((pt == null ? void 0 : pt.message) || pt).slice(0, 80)}`,
            ),
            null
          );
        }
      }, [Ye]),
      Bs = 4,
      Js = 8e3,
      Xs = 400,
      gn = l.useCallback(async () => {
        const pt = (xt) => {
            const zt = String(xt).trim();
            i(zt);
            try {
              sessionStorage.setItem(au, zt);
            } catch {}
            return (
              sd("device_id", zt),
              be.set("device_id", zt).catch(() => {}),
              zt
            );
          },
          qe = lu("device_id");
        if (typeof qe == "string" && qe.trim().length > 0)
          return (Ye("[门禁·设备ID] 来源=localStorage 同步镜像"), pt(qe));
        try {
          const xt = sessionStorage.getItem(au);
          if (typeof xt == "string" && xt.trim().length > 0)
            return (Ye("[门禁·设备ID] 来源=sessionStorage"), pt(xt));
        } catch {}
        for (let xt = 0; xt < Bs; xt++) {
          xt > 0 && (await new Promise((ms) => setTimeout(ms, Xs)));
          const zt = await o0("device_id", Js);
          if (typeof zt == "string" && zt.trim().length > 0)
            return (
              Ye(`[门禁·设备ID] 来源=IndexedDB 第${xt + 1}次读取命中`),
              pt(zt)
            );
        }
        Ye("[门禁·设备ID] IndexedDB 多次读取为空，尝试 push 恢复或新 UUID");
        try {
          const xt = await Promise.race([
            qs(),
            new Promise((zt) => setTimeout(() => zt(null), 5e3)),
          ]);
          if (typeof xt == "string" && xt.trim().length > 0)
            return (
              Ye("[门禁·设备ID] 来源=push 表恢复（5s 内）"),
              pt(xt.trim())
            );
        } catch {}
        Ye("[门禁·设备ID] 来源=新生成 UUID（无历史 device_id）");
        const dt = crypto.randomUUID();
        return pt(dt);
      }, [qs, Ye]),
      sn = async (pt) => {
        try {
          const qe = Date.now();
          if (qe - V.current < O) return;
          ((V.current = qe),
            await Wa.from("gate_user_access")
              .update({ last_active_at: new Date().toISOString() })
              .eq("user_id", pt));
        } catch {}
      },
      ln = (pt, qe = {}) => {
        const dt =
            typeof document < "u" && document.visibilityState !== "visible",
          xt = qe.forcePending === !0 ? (dt ? z : $) : dt ? P : D;
        Xt(() => {
          es(pt);
        }, xt);
      },
      rn = (pt) => {
        const qe = String((pt == null ? void 0 : pt.code) || ""),
          dt = String((pt == null ? void 0 : pt.message) || "");
        return (
          qe === "42883" ||
          dt.includes("function") ||
          dt.includes("Could not find the function")
        );
      },
      wt = (pt) =>
        Array.isArray(pt)
          ? pt
              .map((qe) => {
                const dt = String(
                    (qe == null ? void 0 : qe.session_slot_id) || "",
                  ).trim(),
                  xt = String(
                    (qe == null ? void 0 : qe.device_id) ||
                      (qe == null ? void 0 : qe.id) ||
                      "",
                  ).trim(),
                  zt = dt || xt;
                if (!zt) return null;
                const ms =
                    String(
                      (qe == null ? void 0 : qe.device_label) ||
                        (qe == null ? void 0 : qe.device_name) ||
                        (qe == null ? void 0 : qe.user_agent) ||
                        "",
                    ).trim() || `窗口 ${zt.slice(0, 8)}`,
                  Cs =
                    (qe == null ? void 0 : qe.last_active_at) ||
                    (qe == null ? void 0 : qe.updated_at) ||
                    (qe == null ? void 0 : qe.created_at) ||
                    null;
                return {
                  id: zt,
                  title: ms,
                  lastActive: Cs,
                  slotId: dt,
                  deviceId: xt,
                };
              })
              .filter(Boolean)
          : [],
      xs = (pt) => {
        if (!pt) return "最近活跃：未知";
        const qe = new Date(pt);
        if (Number.isNaN(qe.getTime())) return "最近活跃：未知";
        const dt = (xt) => String(xt).padStart(2, "0");
        return `最近活跃：${qe.getFullYear()}-${dt(qe.getMonth() + 1)}-${dt(qe.getDate())} ${dt(qe.getHours())}:${dt(qe.getMinutes())}`;
      },
      ot = (pt, qe) => {
        (Ye(
          `[门禁·通过] finalizeAuthApproved uid=${String(pt).slice(0, 8)}… dev.len=${String(qe).length}`,
        ),
          (ie.current = !0),
          (X.current = Date.now()),
          sn(pt),
          Ne(qe),
          ln(pt),
          n("approved"));
      },
      st = (pt, qe, dt) => {
        var zt;
        const xt = wt(dt).filter((ms) => ms.slotId !== I);
        return xt.length
          ? (Ye(`[门禁·选设备] 打开替换界面 可选数=${xt.length}`),
            M(pt),
            k(qe),
            _(xt),
            S(((zt = xt[0]) == null ? void 0 : zt.id) || ""),
            n("device_selection_required"),
            x(""),
            !0)
          : (Ye(
              `[门禁·选设备] 无可用替换项 raw=${Array.isArray(dt) ? dt.length : 0} 过滤后=0（可能仅本窗口）`,
            ),
            !1);
      },
      $t = async (pt, qe) => {
        Ye(
          "[门禁·选设备] tryOpenDeviceSelection：先 RPC gate_prepare_device_login",
        );
        try {
          const dt = await Promise.race([
              Wa.rpc("gate_prepare_device_login", {
                p_device_id: qe,
                p_session_slot_id: I,
                p_user_agent:
                  typeof navigator < "u" ? navigator.userAgent : null,
                p_ip: null,
              }),
              new Promise((ms, Cs) =>
                setTimeout(() => Cs(new Error("GATE_PREPARE_TIMEOUT")), 12e3),
              ),
            ]),
            xt = dt == null ? void 0 : dt.data,
            zt = dt == null ? void 0 : dt.error;
          if (zt)
            Ye(
              `[门禁·选设备] gate_prepare 失败 code=${zt.code || "—"} ${String(zt.message || "").slice(0, 72)}`,
            );
          else if (!zt) {
            const ms =
              (xt == null ? void 0 : xt.current_devices) ||
              (xt == null ? void 0 : xt.devices) ||
              [];
            if (
              (Ye(
                `[门禁·选设备] gate_prepare 返回 ok=${xt == null ? void 0 : xt.ok} err=${(xt == null ? void 0 : xt.error) || "—"}列表条数=${ms.length}`,
              ),
              st(pt, qe, ms))
            )
              return !0;
          }
        } catch (dt) {
          Ye(
            `[门禁·选设备] gate_prepare 异常 ${String((dt == null ? void 0 : dt.message) || dt).slice(0, 80)}`,
          );
        }
        return (Ye("[门禁·选设备] 兜底直查 gate_devices 表"), Ft(pt, qe));
      },
      Ft = async (pt, qe) => {
        try {
          const { data: dt, error: xt } = await Wa.from("gate_devices")
            .select("device_id, user_agent, updated_at, created_at")
            .eq("user_id", pt)
            .order("updated_at", { ascending: !1, nullsFirst: !1 })
            .limit(10);
          if (xt) throw xt;
          return (
            Ye(`[门禁·选设备] gate_devices 查询成功条数=${(dt || []).length}`),
            st(pt, qe, dt || [])
          );
        } catch (dt) {
          return (
            Ye(
              `[门禁·选设备] gate_devices 查询失败 ${String((dt == null ? void 0 : dt.message) || dt).slice(0, 100)}`,
            ),
            x(
              `无法读取设备列表：${String((dt == null ? void 0 : dt.message) || dt || "未知错误")}`,
            ),
            M(pt),
            k(qe),
            _([]),
            S(""),
            n("device_selection_required"),
            !1
          );
        }
      },
      es = async (pt, qe = {}) => {
        const dt =
            (qe == null ? void 0 : qe.requireInteractiveSelection) === !0,
          xt = ++Re.current;
        ((Ce.current = pt),
          Ye(
            `[门禁·邮箱] checkGateAuth 开始 seq=${xt} uid=${String(pt).slice(0, 8)}… forcePrepare=${!!(qe != null && qe.forceDevicePrepare)} interactive=${!!dt}`,
          ));
        try {
          const { data: zt, error: ms } = await Promise.race([
            Wa.from("gate_user_access")
              .select(
                "status, display_name, is_banned, expires_at, reject_reason",
              )
              .eq("user_id", pt)
              .single(),
            new Promise((Rs, Rt) =>
              setTimeout(() => Rt(new Error("GATEKEEPER_STATUS_TIMEOUT")), Ze),
            ),
          ]);
          if (ms) {
            if (xt !== Re.current) return;
            if (
              (Ye(
                `[门禁·邮箱] gate_user_access 错误 code=${ms.code || "—"} ${String(ms.message || "").slice(0, 80)}`,
              ),
              ms.code === "PGRST116")
            ) {
              (Ye(
                "[门禁·邮箱] 无门禁记录(PGRST116)，视为未注册：已登出并切到注册页",
              ),
                await Wa.auth.signOut(),
                await _s(),
                x("该邮箱尚未完成激活码注册，请先注册。"),
                n("unknown"),
                ce("register"));
              return;
            }
            if (l0(a.current)) {
              Ye(
                "[门禁·邮箱] 忽略 gate_user_access 瞬时错误，保持当前门禁界面",
              );
              return;
            }
            nt(ms);
            return;
          }
          if (xt !== Re.current) return;
          if ((It(), zt != null && zt.is_banned)) {
            (Ye("[门禁·邮箱] 账号已封禁"),
              n("banned"),
              N(zt.reject_reason || ""));
            return;
          }
          if (
            zt != null &&
            zt.expires_at &&
            new Date(zt.expires_at) < new Date()
          ) {
            (Ye("[门禁·邮箱] 账号已过有效期 expires_at"), n("expired"));
            return;
          }
          const Cs = g5(zt.status);
          Ye(`[门禁·邮箱] gate_user_access OK uiStatus=${Cs}`);
          const us = Cs === "approved" && !ie.current;
          (n(us || (Cs === "approved" && dt) ? "loading" : Cs),
            N(zt.reject_reason || ""),
            zt.display_name &&
              (c(zt.display_name),
              we(zt.display_name),
              be.set("user_name", zt.display_name)),
            ["rejected", "revoked", "banned", "expired"].includes(Cs)
              ? (Ye(`[门禁·邮箱] 终态=${Cs}，停止轮询`),
                F.current && (clearInterval(F.current), (F.current = null)))
              : Cs === "approved"
                ? (async () => {
                    try {
                      if (xt !== Re.current) return;
                      if (
                        ie.current &&
                        a.current === "approved" &&
                        !dt &&
                        !(qe != null && qe.forceDevicePrepare) &&
                        Date.now() - X.current < xte
                      ) {
                        Ye("[门禁·设备] 已跳过预检（节流窗口内且容量已校验）");
                        return;
                      }
                      Ye("[门禁·设备] ensureDeviceIdForAuth 开始");
                      const Rs = await gn();
                      Ye(
                        `[门禁·设备] ensureDeviceIdForAuth 完成 id.len=${String(Rs).length}`,
                      );
                      const Rt = await Promise.race([
                        Je(),
                        new Promise((cn) => setTimeout(() => cn(null), 8e3)),
                      ]);
                      let Es = !1;
                      try {
                        const cn = await ss(
                            () =>
                              Wa.rpc("gate_prepare_device_login", {
                                p_device_id: Rs,
                                p_session_slot_id: I,
                                p_user_agent:
                                  typeof navigator < "u"
                                    ? navigator.userAgent
                                    : null,
                                p_ip: Rt,
                              }),
                            2e4,
                            "GATE_PREPARE_TIMEOUT",
                          ),
                          fn = cn == null ? void 0 : cn.error,
                          Rn = cn == null ? void 0 : cn.data;
                        if (
                          (fn &&
                            rn(fn) &&
                            Ye(
                              "[门禁·设备] gate_prepare RPC 在库中不存在或不可用，走 touch/选设备兜底",
                            ),
                          fn && !rn(fn))
                        )
                          Ye(
                            `[门禁·设备] gate_prepare RPC 错误 ${String(fn.message || fn.code || "").slice(0, 80)}`,
                          );
                        else if (!fn && Rn) {
                          if (
                            ((Es = !0),
                            Ye(
                              `[门禁·设备] gate_prepare ok=${Rn.ok} err=${Rn.error || "—"} already=${!!Rn.already_exists} needs_selection=${!!Rn.needs_selection}`,
                            ),
                            Rn.ok === !0 &&
                              Rn.needs_selection === !0 &&
                              Ye(
                                "[门禁·设备] gate_prepare 要求 needs_selection，不自动 gate_confirm",
                              ),
                            xt === Re.current &&
                              Rn.ok === !1 &&
                              Rn.error === "device_limit_reached" &&
                              st(
                                pt,
                                Rs,
                                Rn.current_devices || Rn.devices || [],
                              ))
                          ) {
                            (Ye(
                              "[门禁·设备] 设备已满(device_limit_reached)，已进入选设备界面",
                            ),
                              (ie.current = !0));
                            return;
                          }
                          if (
                            xt === Re.current &&
                            Rn.ok === !1 &&
                            (Rn.error === "device_blocked_by_admin" ||
                              Rn.error === "device_slot_evicted")
                          ) {
                            if (
                              (Ye(
                                `[门禁·设备] 被拒绝 err=${Rn.error}，尝试选设备或展示 device_blocked`,
                              ),
                              (ie.current = !0),
                              Rn.error === "device_slot_evicted")
                            ) {
                              await $t(pt, Rs);
                              return;
                            }
                            (F.current &&
                              (clearInterval(F.current), (F.current = null)),
                              n("device_blocked"),
                              N(
                                Rn.error === "device_slot_evicted"
                                  ? "当前账号可登录设备数已达上限，本机已被移出登录名单。可改用已登录设备，或重新登录并手动选择替换设备。"
                                  : "管理员已移除此设备的登录登记。请联系管理员解除限制后再试。",
                              ));
                            return;
                          }
                          if (
                            (Rn.ok === !1 && (Es = !1),
                            Es &&
                              Rn.ok === !0 &&
                              Rn.needs_selection !== !0 &&
                              Rn.already_exists !== !0)
                          ) {
                            const Qn = await ss(
                              () =>
                                Wa.rpc("gate_confirm_device_login", {
                                  p_device_id: Rs,
                                  p_session_slot_id: I,
                                  p_replace_session_slot_id: null,
                                  p_user_agent:
                                    typeof navigator < "u"
                                      ? navigator.userAgent
                                      : null,
                                }),
                              2e4,
                              "GATE_CONFIRM_TIMEOUT",
                            );
                            Qn != null && Qn.error
                              ? (Ye(
                                  `[门禁·设备] gate_confirm 自动登记失败 ${String(Qn.error.message || Qn.error.code || "").slice(0, 80)}`,
                                ),
                                (Es = !1))
                              : (Ye("[门禁·设备] gate_confirm 自动登记成功"),
                                (ie.current = !0));
                          }
                        }
                      } catch (cn) {
                        Ye(
                          `[门禁·设备] gate_prepare/confirm 段异常 ${String((cn == null ? void 0 : cn.message) || cn).slice(0, 100)}`,
                        );
                      }
                      if (!Es) {
                        if (await $t(pt, Rs)) {
                          ((ie.current = !0),
                            Ye("[门禁·设备] 兜底选设备流程已打开"));
                          return;
                        }
                        if (xt !== Re.current) return;
                        (Ye(
                          "[门禁·设备] 容量校验不可用：无 prepare 成功且无法列出设备，暂停放行",
                        ),
                          n("device_selection_required"),
                          _([]),
                          S(""),
                          M(pt),
                          k(Rs),
                          x(
                            "容量校验服务暂不可用，已暂停自动放行。请稍后重试；若持续失败，请联系管理员检查 Supabase 门禁 SQL 升级。",
                          ));
                        return;
                      }
                      let nn, Hs;
                      if (!Es)
                        try {
                          const cn = await ss(
                            () =>
                              Wa.rpc("gate_touch_device", {
                                p_device_id: Rs,
                                p_user_agent:
                                  typeof navigator < "u"
                                    ? navigator.userAgent
                                    : null,
                                p_ip: Rt,
                              }),
                            2e4,
                            "GATE_TOUCH_TIMEOUT",
                          );
                          ((nn = cn == null ? void 0 : cn.data),
                            (Hs = cn == null ? void 0 : cn.error));
                        } catch (cn) {
                          Hs = cn;
                        }
                      if (
                        (Hs &&
                          Ye(
                            `[门禁·设备] gate_touch 错误 ${String(Hs.message || Hs.code || "").slice(0, 80)}`,
                          ),
                        nn && nn.ok === !0 && Ye("[门禁·设备] gate_touch 成功"),
                        xt === Re.current &&
                          nn &&
                          nn.ok === !1 &&
                          (nn.error === "device_blocked_by_admin" ||
                            nn.error === "device_slot_evicted"))
                      ) {
                        if (
                          (Ye(`[门禁·设备] gate_touch 拒绝 err=${nn.error}`),
                          nn.error === "device_slot_evicted")
                        ) {
                          await $t(pt, Rs);
                          return;
                        }
                        (F.current &&
                          (clearInterval(F.current), (F.current = null)),
                          n("device_blocked"),
                          N(
                            nn.error === "device_slot_evicted"
                              ? "当前账号可登录设备数已达上限，本机已被移出登录名单。若需在本机继续使用，请重新登录并在满额提醒中选择替换设备。"
                              : "管理员已移除此设备的登录登记。恢复方式：请管理员在后台对该设备「解除限制」，或在本机退出账号后换一台未受限设备登录。",
                          ));
                        return;
                      }
                      if (xt !== Re.current) return;
                      (It(), ot(pt, Rs));
                    } catch (Rs) {
                      Ye(
                        `[门禁·邮箱] approved 后续异常: ${String((Rs == null ? void 0 : Rs.message) || Rs).slice(0, 120)}`,
                      );
                    }
                  })()
                : Cs === "pending" &&
                  (Ye("[门禁·邮箱] 状态=pending，启动邮箱门禁轮询"),
                  ln(pt, { forcePending: !0 })));
        } catch (zt) {
          if (xt !== Re.current) return;
          if (
            (Ye(
              `[门禁·邮箱] checkGateAuth 失败: ${String((zt == null ? void 0 : zt.message) || zt).slice(0, 120)}`,
            ),
            l0(a.current))
          ) {
            Ye("[门禁·邮箱] 忽略 checkGateAuth 超时/异常，保持当前界面");
            return;
          }
          nt(zt);
        }
      };
    (l.useEffect(() => {
      try {
        new URLSearchParams(window.location.search).get("gate_diag") === "1" &&
          (sessionStorage.setItem("gatekeeper_diag", "1"), Oe(!0));
      } catch {}
    }, []),
      l.useEffect(() => {
        if (!(s === "loading" || (s === "approved" && te === null))) {
          Qe.current = !1;
          return;
        }
        Qe.current ||
          ((Qe.current = !0),
          Ye(`监测启动 status=${s} disclaimer=${String(te)} channel=main`));
        let qe = !1;
        try {
          qe = sessionStorage.getItem("gatekeeper_diag") === "1";
        } catch {}
        qe && Oe(!0);
        const dt = window.setTimeout(() => {
          (Oe(!0), Ye("已超过 5 秒仍处于门禁加载，已自动展开诊断面板"));
        }, 5e3);
        return () => clearTimeout(dt);
      }, [s, te, Ye]),
      l.useEffect(() => {
        let pt = null;
        const qe = () => {
          pt != null && (clearTimeout(pt), (pt = null));
        };
        ((pt = window.setTimeout(() => {
          (Ye(
            `[门禁·init] watchdog ${Math.round(x5 / 1e3)}s：若仍 loading 则退回登录入口`,
          ),
            n((ms) =>
              ms === "loading"
                ? (Ye("[门禁·init] watchdog 触发：status 由 loading → unknown"),
                  "unknown")
                : ms,
            ));
        }, x5)),
          (async () => {
            try {
              Ye("init: 并行拉会话与 device_id");
              const [ms, Cs, us] = await Promise.all([
                My(Wa, ute),
                o0("device_id", p5),
                o0("user_name", p5),
              ]);
              let Rs = Cs;
              if (!Rs) {
                const Rt = lu("device_id");
                if (typeof Rt == "string" && Rt.trim().length > 0)
                  Rs = Rt.trim();
                else
                  try {
                    const Es = sessionStorage.getItem(au);
                    typeof Es == "string" &&
                      Es.trim().length > 0 &&
                      (Rs = Es.trim());
                  } catch {}
              }
              if (ms != null && ms.user) {
                (Y(ms.user),
                  Ye(`init: 已有会话 uid=${String(ms.user.id).slice(0, 8)}…`),
                  a.current !== "approved" && n("loading"),
                  await es(ms.user.id));
                return;
              }
              if (Rs) {
                (Ye(
                  `[门禁·init] 无邮箱会话，走设备门禁 device=${String(Rs).slice(0, 8)}…`,
                ),
                  i(Rs),
                  us && c(us),
                  a.current !== "approved" && n("loading"),
                  At(Rs));
                return;
              }
              (Ye(
                "[门禁·init] 新访客：无会话无 device_id，展示登录；后台尝试 push 恢复",
              ),
                n("unknown"),
                ce("login"),
                (async () => {
                  const Rt = await Promise.race([
                    qs(),
                    new Promise((Es) => setTimeout(() => Es(null), Ue)),
                  ]);
                  if (Rt) {
                    (Ye(
                      `[门禁·init] push 恢复得到 device=${String(Rt).slice(0, 8)}…，转 checkStatus`,
                    ),
                      i(Rt),
                      sd("device_id", Rt),
                      await be.set("device_id", Rt).catch(() => {}));
                    try {
                      sessionStorage.setItem(au, Rt);
                    } catch {}
                    (n("loading"), At(Rt));
                  }
                })());
            } catch (ms) {
              (Ye(
                `[门禁·init] init 异常 ${String((ms == null ? void 0 : ms.message) || ms).slice(0, 120)}`,
              ),
                nt(ms));
            } finally {
              qe();
            }
          })());
        const {
          data: { subscription: xt },
        } = Wa.auth.onAuthStateChange(async (ms, Cs) => {
          if (
            (ms !== "TOKEN_REFRESHED" &&
              Ye(`auth ${ms} hasUser=${!!(Cs != null && Cs.user)}`),
            ms === "INITIAL_SESSION")
          ) {
            if ((K2(), Cs != null && Cs.user)) {
              Y(Cs.user);
              const Rs =
                a.current === "unknown" ||
                a.current === "device_blocked" ||
                a.current === "error";
              if (Ey(a.current))
                try {
                  await es(Cs.user.id, { requireInteractiveSelection: Rs });
                } catch {}
              else {
                n("loading");
                try {
                  await es(Cs.user.id, { requireInteractiveSelection: Rs });
                } catch {}
              }
            }
            return;
          }
          if (Cs != null && Cs.user) {
            if (
              (Y(Cs.user),
              ms === "TOKEN_REFRESHED" ||
                ((ms === "SIGNED_IN" || ms === "USER_UPDATED") &&
                  a.current === "approved" &&
                  ie.current))
            )
              return;
            ms === "SIGNED_IN" && a.current === "unknown" && n("loading");
            const Rs =
              ms === "SIGNED_IN" &&
              (a.current === "unknown" ||
                a.current === "device_blocked" ||
                a.current === "error");
            if (Ey(a.current)) {
              try {
                await es(Cs.user.id, { requireInteractiveSelection: Rs });
              } catch {}
              return;
            }
            (n("loading"),
              await es(Cs.user.id, { requireInteractiveSelection: Rs }));
            return;
          }
          if (ms === "SIGNED_OUT") {
            (Ye("[门禁·会话] SIGNED_OUT：清除会话态，退回登录页"),
              K2(),
              Y(null),
              n("unknown"),
              ce("login"));
            return;
          }
          const us = await My(Wa);
          if (us != null && us.user) {
            Y(us.user);
            const Rs =
              a.current === "unknown" ||
              a.current === "device_blocked" ||
              a.current === "error";
            if (Ey(a.current)) {
              try {
                await es(us.user.id, { requireInteractiveSelection: Rs });
              } catch {}
              return;
            }
            (n("loading"),
              await es(us.user.id, { requireInteractiveSelection: Rs }));
          }
        });
        return (
          (async () => {
            try {
              const { data: ms } = await Wa.from("system_config")
                .select("announcement")
                .eq("id", 1)
                .single();
              ms != null && ms.announcement && v(ms.announcement);
            } catch {}
          })(),
          () => {
            (qe(),
              je.current && (clearTimeout(je.current), (je.current = null)),
              xt.unsubscribe(),
              F.current && clearInterval(F.current));
          }
        );
      }, []),
      l.useEffect(() => {
        let pt = !1;
        return (
          (async () => {
            try {
              const qe = await be.get(Yf);
              if (!qe || typeof qe != "object") return;
              const dt = Number(qe.updatedAt || 0);
              if (!Number.isFinite(dt) || Date.now() - dt > gte) {
                await be.removeItem(Yf).catch(() => {});
                return;
              }
              if (
                !new Set([
                  "approved",
                  "pending",
                  "unknown",
                  "device_blocked",
                  "device_selection_required",
                ]).has(qe.status)
              )
                return;
              const zt = h5();
              if (
                (qe.userId && zt != null && zt.id && qe.userId !== zt.id) ||
                pt
              )
                return;
              (typeof qe.deviceId == "string" &&
                qe.deviceId.trim().length > 0 &&
                i(qe.deviceId.trim()),
                (a.current === "loading" || a.current === "unknown") &&
                  n(qe.status));
            } catch {}
          })(),
          () => {
            pt = !0;
          }
        );
      }, []),
      l.useEffect(() => {
        if (
          !new Set([
            "approved",
            "pending",
            "unknown",
            "device_blocked",
            "device_selection_required",
          ]).has(s)
        ) {
          (s === "loading" || s === "error") &&
            be.removeItem(Yf).catch(() => {});
          return;
        }
        const qe = {
          status: s,
          userId: (H == null ? void 0 : H.id) || null,
          deviceId: r || null,
          source: H != null && H.id ? "auth" : "device",
          updatedAt: Date.now(),
        };
        be.set(Yf, qe).catch(() => {});
      }, [s, H == null ? void 0 : H.id, r]),
      l.useEffect(() => {
        s === "approved" && be.get(y5).then((pt) => Se(pt === !0));
      }, [s]),
      l.useEffect(() => {
        s === "unknown" &&
          be.get(Iy).then((pt) => {
            const qe = Array.isArray(pt) ? pt.slice(0, v5) : [];
            Ae(qe);
          });
      }, [s]),
      l.useEffect(() => {
        if (!Fe) return;
        Xe(!1);
        const pt = window.setTimeout(() => {
          const qe = Ee.current,
            dt = fe.current;
          if (!qe || !dt) return;
          const xt = qe.getBoundingClientRect(),
            zt = dt.getBoundingClientRect();
          (qe.scrollHeight <= qe.clientHeight + 8 ||
            (zt.top >= xt.top && zt.top <= xt.bottom + 24)) &&
            Xe(!0);
        }, 100);
        return () => clearTimeout(pt);
      }, [Fe]),
      l.useEffect(() => {
        if (!Fe) return;
        const pt = Ee.current,
          qe = fe.current;
        if (!pt || !qe) return;
        const dt = new IntersectionObserver(
          (xt) => {
            var zt;
            (zt = xt[0]) != null && zt.isIntersecting && Xe(!0);
          },
          { root: pt, rootMargin: "0px 0px 32px 0px", threshold: 0 },
        );
        return (dt.observe(qe), () => dt.disconnect());
      }, [Fe]),
      l.useEffect(() => {
        if (!tt || !He.current || !Ee.current) return;
        const pt = window.requestAnimationFrame(() => {
          var qe;
          (qe = He.current) == null ||
            qe.scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
        return () => cancelAnimationFrame(pt);
      }, [tt]),
      l.useEffect(() => {
        if (!Fe) return;
        Pe(!1);
        const pt = Math.ceil(me / 1e3);
        _t(pt);
        let qe = 0;
        const dt = window.setInterval(() => {
          qe += 1;
          const xt = Math.max(0, pt - qe);
          (_t(xt), qe >= pt && (Pe(!0), window.clearInterval(dt)));
        }, 1e3);
        return () => window.clearInterval(dt);
      }, [Fe]),
      l.useEffect(() => {
        if (!ct.open) return;
        const pt = ct.minWaitMs;
        if (!pt || pt <= 0) {
          (Gt(!0), Wt(0));
          return;
        }
        Gt(!1);
        const qe = Math.ceil(pt / 1e3);
        Wt(qe);
        let dt = 0;
        const xt = window.setInterval(() => {
          dt += 1;
          const zt = Math.max(0, qe - dt);
          (Wt(zt), dt >= qe && (Gt(!0), window.clearInterval(xt)));
        }, 1e3);
        return () => window.clearInterval(xt);
      }, [ct.open, ct.minWaitMs]),
      l.useEffect(() => {
        const pt = window.visualViewport;
        if (!pt) return;
        const qe = () => {
          const dt = N5();
          dt != null && ve(dt);
        };
        return (
          qe(),
          pt.addEventListener("resize", qe),
          pt.addEventListener("scroll", qe),
          window.addEventListener("resize", qe),
          window.addEventListener("orientationchange", qe),
          () => {
            (pt.removeEventListener("resize", qe),
              pt.removeEventListener("scroll", qe),
              window.removeEventListener("resize", qe),
              window.removeEventListener("orientationchange", qe));
          }
        );
      }, []));
    const At = async (pt) => {
        const qe = ++De.current;
        ((Ce.current = pt),
          Ye(
            `[门禁·设备门禁] checkStatus 开始 seq=${qe} id=${String(pt).slice(0, 8)}…`,
          ));
        try {
          const { data: dt, error: xt } = await Promise.race([
            Wa.from("access_requests")
              .select("status, name, is_banned, expires_at, reject_reason")
              .eq("device_id", pt)
              .single(),
            new Promise((zt, ms) =>
              setTimeout(() => ms(new Error("GATEKEEPER_STATUS_TIMEOUT")), Ze),
            ),
          ]);
          if (xt) {
            if (qe !== De.current) return;
            if (xt.code === "PGRST116") {
              if (!Ie.current) {
                Ie.current = !0;
                const zt = await Promise.race([
                  qs(),
                  new Promise((ms) => setTimeout(() => ms(null), Ue)),
                ]);
                if (zt && zt !== pt) {
                  if (qe !== De.current) return;
                  (i(zt),
                    sd("device_id", zt),
                    await be.set("device_id", zt),
                    At(zt));
                  return;
                }
              }
              n("unknown");
              return;
            }
            if (l0(a.current)) return;
            nt(xt);
            return;
          }
          if (dt) {
            if (qe !== De.current) return;
            if ((It(), dt.is_banned)) {
              (Ye("[门禁·设备门禁] 申请已封禁"), n("banned"));
              return;
            }
            if (dt.expires_at && new Date(dt.expires_at) < new Date()) {
              (Ye("[门禁·设备门禁] 申请已过期"), n("expired"));
              return;
            }
            const zt = g5(dt.status);
            (Ye(`[门禁·设备门禁] access_requests OK uiStatus=${zt}`),
              n(zt),
              N(dt.reject_reason || ""),
              dt.name && (c(dt.name), be.set("user_name", dt.name)),
              ["rejected", "revoked", "banned", "expired"].includes(zt)
                ? (Ye(`[门禁·设备门禁] 终态=${zt}，停止轮询`),
                  F.current && (clearInterval(F.current), (F.current = null)))
                : zt === "approved"
                  ? (Ye("[门禁·设备门禁] 已批准：touch 活跃 + push + 轮询"),
                    js(pt),
                    Ne(pt),
                    cs(pt, { status: "approved" }))
                  : zt === "pending" &&
                    (Ye("[门禁·设备门禁] 待审核：轮询 access_requests"),
                    cs(pt, { status: "pending" })));
          } else {
            if (qe !== De.current) return;
            (Ye("[门禁·设备门禁] 查询无 data，status→unknown"), n("unknown"));
          }
        } catch (dt) {
          if (qe !== De.current) return;
          if (
            (Ye(
              `[门禁·设备门禁] checkStatus 异常 ${String((dt == null ? void 0 : dt.message) || dt).slice(0, 120)}`,
            ),
            l0(a.current))
          ) {
            Ye("[门禁·设备门禁] 忽略超时/异常，保持当前界面");
            return;
          }
          nt(dt);
        }
      },
      Jt = async () => {
        var dt;
        if (
          (Ye("[门禁·重试] 用户点击「重试门禁」"),
          (ne.current = 0),
          x(""),
          H != null && H.id)
        ) {
          (Ye(
            `[门禁·重试] 走邮箱门禁 uid=${String(H.id).slice(0, 8)}… forcePrepare`,
          ),
            n("loading"),
            await es(H.id, { forceDevicePrepare: !0 }));
          return;
        }
        const pt = await My(Wa, n6);
        if ((dt = pt == null ? void 0 : pt.user) != null && dt.id) {
          (Ye(
            `[门禁·重试] 恢复会话后走邮箱门禁 uid=${String(pt.user.id).slice(0, 8)}…`,
          ),
            Y(pt.user),
            n("loading"),
            await es(pt.user.id, { forceDevicePrepare: !0 }));
          return;
        }
        const qe = Ce.current || r || (await o0("device_id", 8e3));
        if (!qe) {
          (Ye("[门禁·重试] 无 userId/deviceId，退回 unknown"), n("unknown"));
          return;
        }
        (Ye(`[门禁·重试] 走设备门禁 id=${String(qe).slice(0, 8)}…`),
          n("loading"),
          await At(qe));
      },
      Vt = async () => {
        Ye("[门禁·重试] 用户从邮箱门禁页重试");
        const pt = (H == null ? void 0 : H.id) || Ce.current;
        if (!pt) {
          (Ye("[门禁·重试] 无 uid，退回 unknown"), n("unknown"));
          return;
        }
        const qe = r || (await be.get("device_id"));
        if (s === "device_blocked" && qe) {
          (Ye("[门禁·重试] device_blocked：尝试重新打开选设备"),
            await $t(pt, qe));
          return;
        }
        (n("loading"), await es(pt, { forceDevicePrepare: !0 }));
      },
      qt = async () => {
        if (!A || !C || !E) {
          (Ye("[门禁·选设备] 确认替换：参数不全，退回 approved态"),
            n("approved"));
          return;
        }
        (Ye(`[门禁·选设备] 用户确认替换 replaceSlot=${String(E).slice(0, 8)}…`),
          T(!0),
          x(""));
        try {
          const pt = await Promise.race([
              Wa.rpc("gate_confirm_device_login", {
                p_device_id: A,
                p_session_slot_id: I,
                p_replace_session_slot_id: E || null,
                p_user_agent:
                  typeof navigator < "u" ? navigator.userAgent : null,
              }),
              new Promise((xt, zt) =>
                setTimeout(() => zt(new Error("GATE_CONFIRM_TIMEOUT")), 2e4),
              ),
            ]),
            qe = pt == null ? void 0 : pt.error,
            dt = pt == null ? void 0 : pt.data;
          if (qe) throw qe;
          if ((dt == null ? void 0 : dt.ok) === !1)
            throw new Error(
              (dt == null ? void 0 : dt.error) || "DEVICE_CONFIRM_FAILED",
            );
          (Ye("[门禁·选设备] gate_confirm 手动替换成功，即将放行"),
            _([]),
            k(""),
            M(""),
            S(""),
            ot(C, A));
        } catch (pt) {
          Ye(
            `[门禁·选设备] gate_confirm 失败 ${String((pt == null ? void 0 : pt.message) || pt).slice(0, 100)}`,
          );
          const qe = String((pt == null ? void 0 : pt.message) || pt || "");
          qe.includes("replace_device_not_found")
            ? x("替换目标不存在，请先点“重新检测设备列表”再重试。")
            : qe.includes("replace_session_required")
              ? x("请先选择要下线的设备。")
              : qe.includes("device_blocked_by_admin")
                ? x("当前设备已被管理员限制，请联系管理员解除后再试。")
                : x(`设备替换失败：${qe || "未知错误"}`);
        } finally {
          T(!1);
        }
      },
      Lt = async () => {
        (Ye("[门禁·选设备] 用户取消替换：登出并清理门禁身份"),
          await Wa.auth.signOut(),
          await _s(),
          _([]),
          k(""),
          M(""),
          S(""),
          n("unknown"),
          ce("login"));
      },
      Qt = () => {
        if (!o.trim()) {
          x("请填写姓名");
          return;
        }
        if (!d.trim()) {
          x("请填写访问理由");
          return;
        }
        (x(""),
          $e(!1),
          gt(
            "确认提交申请",
            "请再次核对：申请 ID 是否按规定格式填写（如 QQ 号+昵称），如果非初次使用，请确保申请 ID 与初次申请所用格式一致。提交后将进入人工审核。",
            Nt,
          ));
      },
      js = async (pt) => {
        try {
          const qe = Date.now();
          if (qe - V.current < O) return;
          ((V.current = qe),
            await Wa.from("access_requests")
              .update({ last_active_at: new Date().toISOString() })
              .eq("device_id", pt));
        } catch {}
      },
      cs = (pt, qe = {}) => {
        const dt =
            typeof document < "u" && document.visibilityState !== "visible",
          xt = qe.status || s,
          zt =
            qe.forcePendingInterval || xt === "pending"
              ? dt
                ? z
                : $
              : dt
                ? P
                : D;
        Xt(() => At(pt), zt);
      },
      Ne = async (pt) => {
        try {
          (await cte()) === "granted" && (await lte(pt));
        } catch {}
      },
      Je = async () => {
        const pt = Date.now();
        if (le.current.value && pt - le.current.at < q) return le.current.value;
        try {
          const qe = new AbortController(),
            dt = window.setTimeout(() => qe.abort(), 8e3),
            xt = await fetch("https://api.ipify.org?format=json", {
              signal: qe.signal,
            });
          window.clearTimeout(dt);
          const zt = await xt.json(),
            ms = (zt == null ? void 0 : zt.ip) || null;
          return ((le.current = { value: ms, at: pt }), ms);
        } catch {
          return null;
        }
      },
      St = async () => {
        (Ye("[门禁·登录] 提交 signInWithPassword"), h(!0), x(""));
        try {
          const { error: pt } = await Wa.auth.signInWithPassword({
            email: W.trim().toLowerCase(),
            password: re,
          });
          if (pt) throw pt;
          (n("loading"), Ye("[门禁·登录] Auth 成功，等待 checkGateAuth"));
        } catch (pt) {
          const qe = String((pt == null ? void 0 : pt.message) || pt || "");
          (Ye(`[门禁·登录] 失败 ${qe.slice(0, 100)}`),
            /invalid login credentials|invalid/i.test(qe)
              ? x("邮箱或密码错误")
              : x(qe || "登录失败"));
        } finally {
          h(!1);
        }
      },
      Be = async () => {
        if ((x(""), !W.trim() || !re || !G.trim() || !f.trim())) {
          x("请填写邮箱、QQ 号、密码与激活码");
          return;
        }
        if (re.length < 8) {
          x(fs.weak_password);
          return;
        }
        if (re !== ge) {
          x("两次输入的密码不一致");
          return;
        }
        h(!0);
        try {
          Ye("[门禁·注册] 开始：ensureDeviceId + registerWithActivationCode");
          const pt = await gn(),
            qe = await Je(),
            dt = await ote({
              email: W.trim().toLowerCase(),
              password: re,
              displayName: G.trim(),
              activationCode: f.trim(),
              deviceId: pt,
              sessionSlotId: I,
              ip: qe,
            });
          if (!(dt != null && dt.ok)) {
            const zt = (dt == null ? void 0 : dt.error) || "server_error";
            Ye(
              `[门禁·注册] 服务端返回失败 key=${zt} http=${(dt == null ? void 0 : dt.status) ?? "—"} hasDiag=${!!(dt != null && dt.diagnostic)}`,
            );
            const ms = fs[zt] || `注册失败：${zt}`,
              Cs = dt != null && dt.status ? `（HTTP ${dt.status}）` : "",
              us =
                dt != null && dt.diagnostic
                  ? `
诊断：url=${dt.diagnostic.hasSupabaseUrl ? "ok" : "missing"}, anon=${dt.diagnostic.hasAnonKey ? "ok" : "missing"}${dt.diagnostic.endpoint ? `, endpoint=${dt.diagnostic.endpoint}` : ""}${dt.diagnostic.message ? `, msg=${dt.diagnostic.message}` : ""}`
                  : "",
              Rs =
                dt != null && dt.debug
                  ? `
服务端：code=${dt.debug.code ?? "-"}, message=${dt.debug.message ?? "-"}`
                  : "";
            x(`${ms}${Cs}${us}${Rs}`);
            return;
          }
          Ye("[门禁·注册] 激活码注册成功，尝试自动登录");
          const { error: xt } = await Wa.auth.signInWithPassword({
            email: W.trim().toLowerCase(),
            password: re,
          });
          xt
            ? (Ye(
                `[门禁·注册] 自动登录失败 ${String(xt.message || "").slice(0, 80)}`,
              ),
              x("注册成功，但自动登录失败，请手动登录"),
              ce("login"))
            : Ye("[门禁·注册] 自动登录成功，后续走门禁校验");
        } catch (pt) {
          (Ye(
            `[门禁·注册] 异常 ${String((pt == null ? void 0 : pt.message) || pt).slice(0, 100)}`,
          ),
            x("注册失败，请稍后重试"));
        } finally {
          h(!1);
        }
      },
      Ke = (pt) => {
        const qe = String((pt == null ? void 0 : pt.message) || pt || ""),
          dt = pt == null ? void 0 : pt.code;
        return qe.includes("Failed to fetch") ||
          qe.includes("NetworkError") ||
          qe.includes("Load failed")
          ? "网络异常，请检查连接后重试"
          : dt === "42501" ||
              /permission denied|row-level security|new row violates row-level security/i.test(
                qe,
              )
            ? "服务端拒绝写入（权限策略），请稍后再试或联系管理员"
            : dt === "42703" || /column .* does not exist/i.test(qe)
              ? "数据库字段与当前版本不一致，请联系管理员更新表结构"
              : dt === "23505" || /duplicate key|unique constraint/i.test(qe)
                ? "记录冲突，请刷新页面后重试"
                : /QuotaExceededError|exceeded|IndexedDB|storage/i.test(qe)
                  ? "本机存储已满或不可用，请清理浏览器数据后重试"
                  : "申请失败，请稍后重试";
      },
      Nt = async () => {
        (ae(),
          Ye("[门禁·人工申请] 提交 access_requests（新 device_id）"),
          h(!0),
          x(""));
        try {
          const pt = crypto.randomUUID(),
            qe = navigator.userAgent,
            dt = await Je();
          V.current = 0;
          const { error: xt } = await Wa.from("access_requests").insert([
            {
              device_id: pt,
              name: o.trim(),
              reason: d.trim(),
              user_agent: qe,
              ip_address: dt,
              status: "pending",
              access_source: "manual",
              request_count: 1,
              history: [{ action: "apply", time: new Date().toISOString() }],
              updated_at: new Date().toISOString(),
              last_active_at: new Date().toISOString(),
            },
          ]);
          if (xt) throw xt;
          (Ye(
            `[门禁·人工申请] 写入成功 pending device=${String(pt).slice(0, 8)}…`,
          ),
            sd("device_id", pt),
            await be.set("device_id", pt));
          try {
            sessionStorage.setItem(au, pt);
          } catch {}
          await be.set("user_name", o.trim());
          const zt = await be.get(Iy),
            ms = Array.isArray(zt) ? zt : [],
            Cs = [
              {
                name: o.trim(),
                reason: d.trim(),
                submittedAt: new Date().toISOString(),
              },
              ...ms,
            ].slice(0, v5);
          (await be.set(Iy, Cs),
            Ae(Cs),
            i(pt),
            n("pending"),
            se(!1),
            cs(pt, { status: "pending" }));
        } catch (pt) {
          (Ye(
            `[门禁·人工申请] 失败 code=${(pt == null ? void 0 : pt.code) ?? "—"} ${String((pt == null ? void 0 : pt.message) || pt).slice(0, 100)}`,
          ),
            x(Ke(pt)));
        } finally {
          h(!1);
        }
      },
      bt = () => {
        const pt = Ve[0];
        pt && (c(pt.name || ""), u(pt.reason || ""));
      },
      ns = async () => {
        (F.current && (clearTimeout(F.current), (F.current = null)),
          (V.current = 0),
          (ne.current = 0),
          (ie.current = !1),
          (X.current = 0),
          await Wa.auth.signOut(),
          Y(null),
          ue(""),
          he(""),
          J(""),
          n("unknown"),
          ce("login"),
          se(!1),
          ke(!1),
          x(""),
          u(""),
          p(""),
          N(""));
      },
      Ge = () => {
        const pt = r;
        (F.current && (clearInterval(F.current), (F.current = null)),
          (V.current = 0),
          n("unknown"),
          x(""),
          u(""),
          p(""),
          N(""),
          b5(),
          be.removeItem("device_id").catch(() => {}),
          i(""),
          pt &&
            Wa.from("access_requests")
              .delete()
              .eq("device_id", pt)
              .then(({ error: qe }) => {}));
      },
      Le = l.useCallback(async () => {
        const pt = r || (await be.get("device_id"));
        if (!pt) return !1;
        try {
          if (H != null && H.id) {
            const { error: zt } = await Wa.from("gate_devices")
              .delete()
              .eq("user_id", H.id)
              .eq("device_id", pt);
            if (zt) throw zt;
            return (
              await Wa.auth.signOut(),
              await _s({ clearUserName: !0 }),
              !0
            );
          }
          const { data: qe } = await Wa.from("access_requests")
              .select("history")
              .eq("device_id", pt)
              .single(),
            dt = [
              ...((qe == null ? void 0 : qe.history) || []),
              { action: "user_revoke", time: new Date().toISOString() },
            ],
            { error: xt } = await Wa.from("access_requests")
              .update({
                status: "revoked",
                history: dt,
                updated_at: new Date().toISOString(),
              })
              .eq("device_id", pt);
          if (xt) throw xt;
          return (await _s({ clearUserName: !0 }), !0);
        } catch {
          return !1;
        }
      }, [H, _s, r]),
      _e = async () => {
        if (r) {
          (h(!0), x(""));
          try {
            const { data: pt } = await Wa.from("access_requests")
                .select("history")
                .eq("device_id", r)
                .single(),
              qe = [
                ...((pt == null ? void 0 : pt.history) || []),
                { action: "reapply", time: new Date().toISOString() },
              ],
              { error: dt } = await Wa.from("access_requests")
                .update({
                  status: "pending",
                  history: qe,
                  updated_at: new Date().toISOString(),
                })
                .eq("device_id", r);
            if (dt) throw dt;
            (n("pending"),
              cs(r, { forcePendingInterval: !0, status: "pending" }));
          } catch {
            x("重新申请失败，请稍后再试");
          } finally {
            h(!1);
          }
        }
      },
      yt = async (pt) => {
        const qe = Array.isArray(pt == null ? void 0 : pt.items)
          ? pt.items
          : [];
        if (typeof indexedDB > "u" || qe.length === 0) return;
        const dt = "ChatApp_Audio",
          xt = "audios_v2",
          zt = 2,
          ms = await new Promise((Cs, us) => {
            const Rs = indexedDB.open(dt, zt);
            ((Rs.onerror = () => us(Rs.error)),
              (Rs.onsuccess = () => Cs(Rs.result)),
              (Rs.onupgradeneeded = (Rt) => {
                const Es = Rt.target.result;
                Es.objectStoreNames.contains(xt) || Es.createObjectStore(xt);
              }));
          });
        await new Promise((Cs, us) => {
          const Rs = ms.transaction(xt, "readwrite"),
            Rt = Rs.objectStore(xt);
          for (const Es of qe)
            !(Es != null && Es.key) ||
              !(Es != null && Es.base64) ||
              Rt.put(
                { type: Es.type || "audio/mpeg", buffer: bte(Es.base64) },
                String(Es.key),
              );
          ((Rs.oncomplete = () => Cs()), (Rs.onerror = () => us(Rs.error)));
        });
      },
      rt = async (pt) => {
        const qe = Array.isArray(pt == null ? void 0 : pt.rows) ? pt.rows : [];
        if (typeof indexedDB > "u" || qe.length === 0) return;
        const dt = "july-ovo-single-custom-prompt-presets",
          xt = 1,
          zt = "presets",
          ms = await new Promise((Cs, us) => {
            const Rs = indexedDB.open(dt, xt);
            ((Rs.onerror = () => us(Rs.error)),
              (Rs.onsuccess = () => Cs(Rs.result)),
              (Rs.onupgradeneeded = (Rt) => {
                const Es = Rt.target.result;
                Es.objectStoreNames.contains(zt) ||
                  Es.createObjectStore(zt, { keyPath: "id" });
              }));
          });
        await new Promise((Cs, us) => {
          const Rs = ms.transaction(zt, "readwrite"),
            Rt = Rs.objectStore(zt);
          for (const Es of qe) !Es || Es.id == null || Rt.put(Es);
          ((Rs.oncomplete = () => Cs()), (Rs.onerror = () => us(Rs.error)));
        });
      },
      ze = async () => {
        if (!ye) {
          (R(!0), x(""));
          try {
            const pt = await m2(),
              qe = {};
            for (const [ms, Cs] of Object.entries(pt || {}))
              if (!w5(ms)) {
                if (ms === "__localStorage_app_patch__") {
                  const us = {},
                    Rs = typeof Cs == "object" && Cs ? Cs : {};
                  for (const [Rt, Es] of Object.entries(Rs))
                    Es == null || j5(Rt) || (us[Rt] = Es);
                  Object.keys(us).length && (qe[ms] = us);
                  continue;
                }
                if (ms === mp) {
                  const us = Array.isArray(Cs == null ? void 0 : Cs.items)
                    ? Cs.items
                    : [];
                  qe[ms] = {
                    ...Cs,
                    items: us
                      .filter(
                        (Rs) =>
                          (Rs == null ? void 0 : Rs.key) &&
                          (Rs == null ? void 0 : Rs.base64),
                      )
                      .map((Rs) => ({
                        key: String(Rs.key),
                        type: Rs.type || "audio/mpeg",
                        base64: Rs.base64,
                      })),
                  };
                  continue;
                }
                qe[ms] = Cs;
              }
            const dt = new Blob([JSON.stringify(qe, null, 2)], {
                type: "application/json",
              }),
              xt = URL.createObjectURL(dt),
              zt = document.createElement("a");
            ((zt.href = xt),
              (zt.download = `gate-emergency-backup-${new Date().toISOString().slice(0, 10)}.json`),
              zt.click(),
              URL.revokeObjectURL(xt));
          } catch (pt) {
            x(
              `导出失败：${String((pt == null ? void 0 : pt.message) || pt || "未知错误")}`,
            );
          } finally {
            R(!1);
          }
        }
      },
      lt = async (pt) => {
        for (const [qe, dt] of Object.entries(pt || {}))
          if (!w5(qe)) {
            if (qe === mp) {
              await yt(dt);
              continue;
            }
            if (qe === mg) {
              await rt(dt);
              continue;
            }
            if (qe === "mail_app_db_settings") {
              const xt = Array.isArray(dt) ? dt : [];
              for (const zt of xt) await Sa(zt.key, zt.value);
              continue;
            }
            if (qe === "mail_app_db_files") {
