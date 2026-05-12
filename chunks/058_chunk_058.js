                      className:
                        "absolute inset-0 flex items-center justify-center",
                      style: {
                        animation: "spin 60s linear infinite",
                        animationPlayState: o ? "paused" : "running",
                      },
                      children: [
                        e.jsx(Os, {
                          children:
                            w &&
                            e.jsx(We.div, {
                              initial: { width: 0, opacity: 0 },
                              animate: { width: y, opacity: 1 },
                              exit: { width: 0, opacity: 0 },
                              className:
                                "absolute left-1/2 top-1/2 h-[1px] origin-left bg-gradient-to-r from-transparent via-white/50 to-transparent",
                              style: { zIndex: 0 },
                            }),
                        }),
                        e.jsx("div", {
                          className: "absolute",
                          style: { transform: `translateX(${y}px)` },
                          children: e.jsx("div", {
                            style: {
                              animation: "reverse-spin 60s linear infinite",
                              animationPlayState: o ? "paused" : "running",
                            },
                            children: e.jsxs("div", {
                              className:
                                "pointer-events-auto cursor-pointer transition-transform duration-300 hover:scale-110",
                              style: {
                                width: v,
                                height: v,
                                transform: `rotate(-${_}deg)`,
                              },
                              onClick: (A) => p(A, g),
                              children: [
                                e.jsxs("div", {
                                  className: `relative w-full h-full rounded-full transition-all duration-500 ${w ? "scale-110" : ""}`,
                                  children: [
                                    w &&
                                      e.jsx(We.div, {
                                        className: "absolute -inset-3",
                                        initial: { rotate: 0 },
                                        animate: { rotate: 360 },
                                        transition: {
                                          duration: 10,
                                          repeat: 1 / 0,
                                          ease: "linear",
                                        },
                                        children: e.jsxs("svg", {
                                          viewBox: "0 0 100 100",
                                          className: "w-full h-full",
                                          children: [
                                            e.jsx("circle", {
                                              cx: "50",
                                              cy: "50",
                                              r: "48",
                                              fill: "none",
                                              stroke: "rgba(255,255,255,0.3)",
                                              strokeWidth: "1",
                                              strokeDasharray: "4 4",
                                            }),
                                            e.jsx("circle", {
                                              cx: "50",
                                              cy: "50",
                                              r: "48",
                                              fill: "none",
                                              stroke: "rgba(255,255,255,0.6)",
                                              strokeWidth: "1",
                                              strokeDasharray: "20 60",
                                              strokeLinecap: "round",
                                            }),
                                          ],
                                        }),
                                      }),
                                    e.jsxs("div", {
                                      className:
                                        "w-full h-full rounded-full overflow-hidden border border-white/20 relative bg-black shadow-2xl group",
                                      children: [
                                        e.jsx("img", {
                                          src: g.avatar,
                                          alt: g.name,
                                          className:
                                            "w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoNHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20 pointer-events-none",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.15)] rounded-full pointer-events-none",
                                        }),
                                      ],
                                    }),
                                    N &&
                                      e.jsx(We.div, {
                                        animate: { scale: [1, 1.2, 1] },
                                        transition: {
                                          duration: 2,
                                          repeat: 1 / 0,
                                        },
                                        className:
                                          "absolute -top-1 -right-1 w-5 h-5 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10 border border-white/50",
                                        children: e.jsx(zn, {
                                          size: 10,
                                          className:
                                            "text-pink-500 fill-pink-500",
                                        }),
                                      }),
                                    (N || w) &&
                                      e.jsx(We.div, {
                                        animate: {
                                          opacity: [0.2, 0.5, 0.2],
                                          scale: [1, 1.4, 1],
                                        },
                                        transition: {
                                          duration: 3,
                                          repeat: 1 / 0,
                                        },
                                        className: `absolute inset-0 rounded-full blur-xl -z-10 ${N ? "bg-pink-500" : "bg-blue-500"}`,
                                      }),
                                  ],
                                }),
                                e.jsx(Os, {
                                  children:
                                    (w || N) &&
                                    e.jsx(We.div, {
                                      initial: {
                                        opacity: 0,
                                        y: v / 2 + 5,
                                        scale: 0.9,
                                      },
                                      animate: {
                                        opacity: 1,
                                        y: v / 2 + 15,
                                        scale: 1,
                                      },
                                      exit: {
                                        opacity: 0,
                                        y: v / 2 + 5,
                                        scale: 0.9,
                                      },
                                      style: { transform: `rotate(-${_}deg)` },
                                      className:
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap flex flex-col items-center pointer-events-none z-20",
                                      children: e.jsxs("div", {
                                        className:
                                          "flex flex-col items-center gap-1.5",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-sm font-serif italic text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]",
                                            children: g.nickname || g.name,
                                          }),
                                          w &&
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[9px] uppercase tracking-[0.15em] text-white/80 font-medium",
                                                  children: N
                                                    ? "Enter"
                                                    : "Create",
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  },
                  g.id,
                );
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "pb-12 text-center pointer-events-none",
          children: e.jsx(We.p, {
            animate: { opacity: [0.3, 0.6, 0.3] },
            transition: { duration: 3, repeat: 1 / 0 },
            className: "text-[10px] uppercase tracking-[0.3em] text-white/40",
            children: o ? "Tap again to confirm" : "Tap a planet to stop",
          }),
        }),
      ],
    });
  },
  Lx = {
    enter: (t) => ({ scale: t > 0 ? 1.05 : 0.95, opacity: 0, zIndex: 1 }),
    center: {
      scale: 1,
      opacity: 1,
      zIndex: 0,
      transition: {
        scale: { type: "spring", stiffness: 500, damping: 30, mass: 1 },
        opacity: { duration: 0.2, ease: "easeOut" },
      },
    },
    exit: (t) => ({
      scale: t > 0 ? 0.95 : 1.05,
      opacity: 0,
      zIndex: 0,
      transition: {
        scale: { type: "spring", stiffness: 500, damping: 30, mass: 1 },
        opacity: { duration: 0.2, ease: "easeIn" },
      },
    }),
  },
  $J = ({
    onClose: t,
    showPhoneCase: s = !1,
    caseSize: n = null,
    appWindowMode: a = "full",
    fontConfig: r = null,
  }) => {
    var T;
    const { getSpace: i, createSpace: o, isLoaded: c } = Bu(),
      {
        createChat: d,
        sendMessage: u,
        getRoleBoundUser: f,
        triggerAiReply: p,
      } = vn(),
      [m, h] = l.useState(null),
      [g, x] = l.useState("list"),
      [y, v] = l.useState(0),
      [b, N] = l.useState(0),
      [w, _] = l.useState(!1),
      A = m ? i(m.id) : null;
    if (
      (l.useEffect(() => {
        if (
          !(!m || g !== "landing") &&
          (A == null ? void 0 : A.status) === "active"
        ) {
          const I = (A == null ? void 0 : A.skipCoverTransition) === !0;
          (N((L) => L + 1),
            I ? (_(!0), v(1), x("main")) : (_(!1), v(1), x("cover")));
        }
      }, [
        m,
        g,
        A == null ? void 0 : A.status,
        A == null ? void 0 : A.skipCoverTransition,
      ]),
      !c)
    )
      return null;
    const k =
        m != null
          ? (((T = i(m.id)) == null ? void 0 : T.prismBgm) ?? null)
          : null,
      C = !!(m && (g === "cover" || g === "main")),
      M = (I) => {
        const L = { list: 0, landing: 1, cover: 1, main: 2 },
          B = L[g],
          F = L[I];
        (v(F > B ? 1 : -1), x(I));
      },
      E = (I) => {
        h(I);
        const L = i(I.id);
        if (!L || L.status !== "active") {
          if (!L || L.status === "rejected") {
            o(I.id);
            const F = d(I.id),
              D = (f == null ? void 0 : f(I)) ?? {};
            (u(
              F,
              "想和你有一个只属于我们俩的小窝",
              null,
              "couple_space_invite",
              {
                contactId: I.id,
                contactName: I.nickname || I.name,
                contactAvatar: I.avatar,
                fromName: (D == null ? void 0 : D.name) || "我",
                fromAvatar: D == null ? void 0 : D.avatar,
              },
            ),
              p &&
                setTimeout(() => {
                  try {
                    p(F);
                  } catch {}
                }, 600));
          }
          M("landing");
        } else {
          const B = (L == null ? void 0 : L.skipCoverTransition) === !0;
          (N((F) => F + 1), B ? (_(!0), M("main")) : (_(!1), M("cover")));
        }
      },
      S = () => {
        (_(!1), M("list"), setTimeout(() => h(null), 500));
      },
      j = !!((r == null ? void 0 : r.type) === "custom" && r != null && r.url);
    return e.jsx(aV, {
      contactId: (m == null ? void 0 : m.id) ?? null,
      prismBgm: k,
      enabled: C,
      children: e.jsx("div", {
        className: `relative h-full min-h-0 w-full overflow-hidden bg-[#0a0a0f]${j ? " couple-space-phone-font" : ""}`,
        children: e.jsxs(Os, {
          initial: !1,
          custom: y,
          children: [
            g === "list" &&
              e.jsx(
                We.div,
                {
                  custom: y,
                  variants: Lx,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(DJ, { onSelect: E, onClose: t }),
                },
                "list",
              ),
            g === "landing" &&
              m &&
              e.jsx(
                We.div,
                {
                  custom: y,
                  variants: Lx,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(cV, {
                    contact: m,
                    boundUser: (f == null ? void 0 : f(m)) ?? {},
                    onBack: S,
                  }),
                },
                "landing",
              ),
            g === "cover" &&
              m &&
              e.jsx(
                We.div,
                {
                  custom: y,
                  variants: Lx,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(lV, {
                    contact: m,
                    entryWelcomeSessionKey: `${m.id}:${b}`,
                    onUnlock: () => {
                      (_(!1), M("main"));
                    },
                  }),
                },
                `cover-${m.id}`,
              ),
            g === "main" &&
              m &&
              e.jsx(
                We.div,
                {
                  custom: y,
                  variants: Lx,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(LJ, {
                    contact: m,
                    onBack: t,
                    entryWelcomeSessionKey: `${m.id}:${b}`,
                    playEntryWelcomeTts: w,
                    appWindowMode: a,
                  }),
                },
                `main-${m.id}`,
              ),
          ],
        }),
      }),
    });
  },
  FJ = (t) => e.jsx($J, { ...t }),
  zJ = "jiuyin";
async function yr(t, s, n = {}) {
  return cr(t, s, { logScene: zJ, ...n });
}
const Dx = (t) =>
    t == null
      ? ""
      : typeof t == "string"
        ? t
        : typeof t == "object"
          ? t.text || t.foreign || t.en || t.zh || t.cn || t.translation || ""
          : String(t),
  RJ = (t) =>
    typeof t == "string" &&
    (t.startsWith("data:image/") ||
      t.startsWith("http://") ||
      t.startsWith("https://")),
  PJ = (t) => {
    const s = String(t || "").trim();
    return s ? /(用户|楼主|本人|博主本人|作者本人|user|User|USER)/.test(s) : !0;
  },
  Bk = (t) =>
    String(t || "")
      .replace(/@[^\s\u200b]+/g, "")
      .replace(/\s{2,}/g, " ")
      .trim(),
  OJ = (t) => {
    if (t == null) return t;
    if (typeof t == "string") return Bk(t);
    if (typeof t != "object") return t;
    const s = { ...t };
    for (const n of ["text", "foreign", "en", "zh", "cn", "translation"])
      typeof s[n] == "string" && (s[n] = Bk(s[n]));
    return s;
  },
  BJ = (t) => {
    const s = String(t || ""),
      n = (s.match(/[\u4e00-\u9fff]/g) || []).length,
      a = (s.match(/[A-Za-z]/g) || []).length;
    return n >= Math.max(4, a + 2);
  },
  Uk = (t, s) => {
    const n = String(
        (s == null ? void 0 : s.name) ||
          (s == null ? void 0 : s.nickname) ||
          "",
      ).trim(),
      a = t != null ? String(t).trim() : "";
    return a.length > 0 ? a.slice(0, 24) : n || "TA";
  },
  Yd = (t, s = [], n = {}) => {
    const a = Array.isArray(t) ? t : [],
      r = Array.isArray(s) ? s : [],
      i = new Set(
        (Array.isArray(n == null ? void 0 : n.bannedUserNames)
          ? n.bannedUserNames
          : []
        )
          .map((g) => String(g || "").trim())
          .filter(Boolean),
      ),
      o = new Set(
        r
          .filter((g) => (g == null ? void 0 : g.isBilingual) === !0)
          .map((g) => String((g == null ? void 0 : g.name) || "").trim())
          .filter(Boolean),
      ),
      c = new Set(
        r
          .map((g) =>
            String((g == null ? void 0 : g.boundUserName) || "").trim(),
          )
          .filter(Boolean),
      ),
      d = (g) => {
        if (g == null) return "";
        if (typeof g == "string") return g;
        if (typeof g == "object") {
          const x = g.text || g.foreign || g.en || "",
            y = g.zh || g.cn || g.translation || "";
          return `${x}
${y}`.trim();
        }
        return String(g);
      },
      u = (g) => {
        const x = String(g || "");
        if (!x) return !1;
        for (const y of c) if (y && x.includes(y)) return !0;
        return !1;
      },
      f = (g) => {
        const x = String(g || "").trim();
        return !(!x || i.has(x) || PJ(x) || c.has(x));
      },
      p = (g, x) => {
        const y = String(g || "").trim();
        if (u(d(x))) return !1;
        if (!n.relaxBilingualContent && o.has(y)) {
          if (!x || typeof x != "object") return !1;
          const v = x.text || x.foreign || x.en || "",
            b = x.zh || x.cn || x.translation || "";
          if (!v || !b || BJ(v)) return !1;
        }
        return !0;
      },
      m = (g) => (n.preserveAtMentions === !0 ? g : OJ(g)),
      h = (g) =>
        (Array.isArray(g) ? g : [])
          .filter((x) => f(x == null ? void 0 : x.user))
          .filter((x) =>
            p(x == null ? void 0 : x.user, x == null ? void 0 : x.content),
          )
          .map((x) => ({
            ...x,
            content: m(x == null ? void 0 : x.content),
            replyToName: void 0,
            replies: void 0,
          }));
    return a
      .filter((g) => f(g == null ? void 0 : g.user))
      .filter((g) =>
        p(g == null ? void 0 : g.user, g == null ? void 0 : g.content),
      )
      .map((g) => ({
        ...g,
        content: m(g == null ? void 0 : g.content),
        replyToName: void 0,
        replies: h(g == null ? void 0 : g.replies),
      }));
  },
  ud = (t) => {
    const s = String(t || ""),
      n = s.indexOf("{"),
      a = s.indexOf("["),
      r = n === -1 ? a : a === -1 ? n : Math.min(n, a);
    if (r === -1) throw new Error("No JSON start found");
    const i = s[r],
      o = i === "{" ? "}" : "]";
    let c = 0,
      d = !1,
      u = !1;
    for (let f = r; f < s.length; f++) {
      const p = s[f];
      if (d) {
        u ? (u = !1) : p === "\\" ? (u = !0) : p === '"' && (d = !1);
        continue;
      }
      if (p === '"') {
        d = !0;
        continue;
      }
      if ((p === i ? c++ : p === o && c--, c === 0)) {
        const m = s.slice(r, f + 1);
        return JSON.parse(m);
      }
    }
    throw new Error("Unclosed JSON structure");
  },
  Gk = (t) => {
    const s = { replies: [], newComments: [] },
      a = ((o) => {
        const c = String(o || "").match(/```(?:json)?\s*([\s\S]*?)```/i);
        return c
          ? c[1].trim()
          : String(o || "")
              .replace(/^```(?:json)?\s*/i, "")
              .replace(/\s*```\s*$/i, "")
              .trim();
      })(t),
      r = (o) =>
        o &&
        typeof o == "object" &&
        !Array.isArray(o) &&
        (Array.isArray(o.replies) || Array.isArray(o.newComments));
    try {
      const o = JSON.parse(a);
      if (r(o))
        return { replies: o.replies || [], newComments: o.newComments || [] };
    } catch {}
    try {
      const o = ud(a);
      if (r(o))
        return { replies: o.replies || [], newComments: o.newComments || [] };
    } catch {}
    if (!/"replies"\s*:|"newComments"\s*:/.test(a)) return s;
    let i = 0;
    for (; i < a.length; ) {
      const o = a.indexOf("{", i);
      if (o === -1) break;
      try {
        const c = ud(a.slice(o));
        if (r(c))
          return { replies: c.replies || [], newComments: c.newComments || [] };
      } catch {}
      i = o + 1;
    }
    return s;
  },
  UJ = (t) => {
    const s = { stats: {}, comments: [], notifications: [] },
      n = String(t || "").trim(),
      a = (i) =>
        !!i &&
        typeof i == "object" &&
        !Array.isArray(i) &&
        (i.stats != null ||
          Array.isArray(i.comments) ||
          Array.isArray(i.notifications));
    try {
      const i = JSON.parse(n);
      if (Array.isArray(i)) return { ...s, comments: i };
      if (a(i)) return i;
    } catch {}
    try {
      const i = ud(n);
      if (Array.isArray(i)) return { ...s, comments: i };
      if (a(i)) return i;
    } catch {}
    let r = 0;
    for (; r < n.length; ) {
      const i = n.indexOf("{", r);
      if (i === -1) break;
      try {
        const o = ud(n.slice(i));
        if (Array.isArray(o)) return { ...s, comments: o };
        if (a(o)) return o;
      } catch {}
      r = i + 1;
    }
    return s;
  };
function GJ(t) {
  const s = { videos: [], hotSearches: [] };
  if (t == null || typeof t != "object") return s;
  let n = t;
  for (let o = 0; o < 4; o++) {
    const c =
      (n == null ? void 0 : n.data) ??
      (n == null ? void 0 : n.result) ??
      (n == null ? void 0 : n.payload);
    if (c && typeof c == "object" && !Array.isArray(c)) {
      n = c;
      continue;
    }
    break;
  }
  let a = [];
  if (
    (Array.isArray(n.hotSearches)
      ? (a = n.hotSearches)
      : Array.isArray(t.hotSearches) && (a = t.hotSearches),
    Array.isArray(n))
  )
    return {
      videos: n.filter(
        (c) =>
          c &&
          typeof c == "object" &&
          (c.video != null ||
            c.scenes != null ||
            c.caption != null ||
            c.npcId != null ||
            c.npcName != null),
      ),
      hotSearches: a,
    };
  let r = n.videos;
  return (
    r && typeof r == "object" && !Array.isArray(r) && (r = Object.values(r)),
    { videos: Array.isArray(r) ? r.filter(Boolean) : [], hotSearches: a }
  );
}
const l2 = () => {
    const { apiConfig: t, addApiLog: s } = vn(),
      [n, a] = l.useState(!1),
      r = (M) => {
        if (!M) return null;
        let E = M;
        if (
          (Array.isArray(E) &&
            (E =
              E.find(
                (S) =>
                  S &&
                  (S.video || S.scenes || S.caption || S.author || S.videos),
              ) || E[0]),
          !E || typeof E != "object")
        )
          return null;
        for (let S = 0; S < 3; S++) {
          const j =
            (E && typeof E == "object" && (E.data || E.result || E.payload)) ||
            null;
          if (!j || typeof j != "object") break;
          E = j;
        }
        if (typeof E.video == "string")
          try {
            const S = JSON.parse(E.video);
            S && typeof S == "object" && (E = { ...E, video: S });
          } catch {}
        if (!E.video && Array.isArray(E.videos) && E.videos.length > 0) {
          const S = E.videos[0] || {},
            j = Array.isArray(E.comments) ? E.comments : null,
            T = Array.isArray(S.comments) ? S.comments : [];
          return {
            video: {
              scenes: S.scenes || [],
              caption: S.caption || S.content || "",
              author: S.author || {},
              bgmKeyword: S.bgmKeyword,
              stats: S.stats || {
                likes: 100,
                comments: 10,
                shares: 5,
                favorites: 1,
              },
            },
            comments: j || T,
            hotSearches: Array.isArray(E.hotSearches) ? E.hotSearches : [],
          };
        }
        if (!E.video && (E.scenes || E.caption || E.author)) {
          const {
            scenes: S,
            caption: j,
            author: T,
            bgmKeyword: I,
            stats: L,
            comments: B,
            hotSearches: F,
          } = E;
          return {
            video: {
              scenes: S || [],
              caption: j || "",
              author: T || {},
              bgmKeyword: I,
              stats: L || { likes: 100, comments: 10, shares: 5, favorites: 1 },
            },
            comments: Array.isArray(B) ? B : [],
            hotSearches: Array.isArray(F) ? F : [],
          };
        }
        return E;
      },
      i = async (M = {}) => {
        const {
          worldSetting: E,
          npcProfile: S,
          userPersona: j,
          promptTemplate: T,
          topic: I,
          commentCountRange: L = [5, 10],
          npcList: B = [],
          residentCommenters: F = [],
          bilingual: D = !1,
        } = M;
        if (!t || !t.endpoint || !t.key) return null;
        a(!0);
        try {
          let $ =
            "你是一个短视频内容生成引擎。请生成一个抖音/TikTok风格的短视频脚本，并同时生成评论区内容。";
          (D &&
            ($ += `

【双语模式】所有“用户可见文本”必须以双语结构输出：{ "text": "外语原文", "zh": "中文翻译" }。默认 text 为外语（如英语/日语/韩语/西语等，按人设选择），zh 为自然中文翻译。`),
            E &&
              ($ += `

【世界观设定】
${E}
请确保视频内容符合上述世界观。`),
            S
              ? ($ += `

【扮演角色】
你现在是博主"${S.name}"。
人物传记（生成视频的题材、口吻与细节必须以此为核心依据；非空则禁止忽略或架空）：${S.bio}
风格：${S.style}
请完全沉浸在这个角色中创作。`)
              : ($ += `

【作者设定】
随机生成一个符合该视频风格的创作者身份。`));
          let P =
            T ||
            (I
              ? `请生成一个关于“${I}”的短视频脚本。`
              : "请生成一个热门短视频脚本。");
          (I &&
            (P += `

【搜索关键词】
用户正在搜索"${I}"，请确保视频内容、文案或标签与该关键词高度相关。`),
            j &&
              S &&
              ((P += `

【互动对象】
用户"${j.name}"（${j.douyinPersona}）。`),
              j.isPublicFigure &&
                (P += `
该用户是公众人物，大家都知道TA的真实信息。`),
              (P += `
如果合适，可以在视频中提到该用户，或者内容与该用户的人设产生关联。`)));
          let [z, O] = L;
          z > O && ([z, O] = [O, z]);
          const Z = Math.floor(Math.random() * (O - z + 1)) + z;
          ((P += `

【评论生成要求】
请生成 ${Z} 条主评论。
1. **角色设定**：所有评论者必须是**随机生成的路人**，不要使用任何已知的博主或NPC身份。网名要像真实的抖音用户（如“momo”、“用户12345”、“纯爱战神”等）。
2. **风格多样**：搞笑神评、杠精、路人吃瓜、@好友、单纯的表情包。
3. **口语化**：使用网络流行语，不要太书面。
4. **包含元数据**：IP属地（中国省份）、时间（刚刚、x分钟前）。
5. **楼中楼回复**：请为其中约 30% 的主评论生成 1-3 条回复（replies），模拟真实讨论。
`),
            D &&
              (P += `

【双语输出要求（非常重要）】
1) 视频 caption（底部配文）必须是对象：{ "text": "...外语...", "zh": "...中文..." }（话题标签也双语；不需要 #，按抖音纯文字标签风格即可）。
2) scenes 中：**画面描述 visual 必须是中文字符串**（不需要双语，禁止输出对象）。**字幕/口播 subtitle**（视频里“说的话”）必须是对象：{ "text": "...外语...", "zh": "...中文..." }。
3) comments 每条 content（含楼中楼 replies 的 content）也必须是对象：{ "text": "...外语...", "zh": "...中文..." }。
4) 除上述字段外，其它字段结构保持不变。`));
          const K = ["开心", "愤怒", "悲伤", "震惊", "无聊", "期待"],
            q = ["深夜", "通勤路上", "吃饭时", "睡前", "工作中"],
            V = K[Math.floor(Math.random() * K.length)],
            ne = q[Math.floor(Math.random() * q.length)];
          if (
            (S &&
              (P += `
【当前状态】
博主当前心情：${V}。场景：${ne}。请在视频内容中体现这种氛围。`),
            j &&
              (P += `
【当前用户】
用户"${j.name}"正在看视频。
注意：除非视频内容与该用户有直接关联（如熟人发布、话题相关），否则评论区**不要**提到该用户。请保持路人评论的真实性和随机性，不要刻意制造偶遇。`),
            F && F.length > 0)
          ) {
            const X = F.slice(0, 10).map((je, xe) => {
              const ye = String(je.rolePersona || "").slice(0, 220),
                R = String(je.style || "").slice(0, 80),
                oe = String(je.boundUserPersona || "").slice(0, 160),
                ee = String(je.boundUserName || "").slice(0, 20),
                H =
                  je.knowsUserIdentity === !0
                    ? `；绑定用户人设(仅供参考): ${oe || "无"}${ee ? `；绑定用户名: ${ee}` : ""}`
                    : "";
              return `${xe + 1}. 网名: ${je.name}；人设(人物传记摘要): ${ye || "无"}；风格: ${R || "无"}${H}；是否知道用户身份: ${je.knowsUserIdentity ? "是" : "否"}`;
            }).join(`
`);
            P += `

【居民评论者】
下面这些是居民档案里开启了“是否评论”的角色。请在评论区中随机挑选 0-2 位让他们发评论（其余仍为随机路人）。
规则：
1) 如果使用某位居民评论者，评论的 user 必须**严格等于**该居民的网名（不要改名）。
2) 评论内容必须符合其人设与风格，并且明确知道自己是在评论“别人的抖音视频内容”，不是在跟博主私聊。
3) **居民与视频博主互不认识**：居民评论其他居民的视频时，必须像路人一样，不能装熟、不能暧昧、不能和博主搞暧昧；不要把博主当熟人/绑定用户。只有当评论里明确出现“@绑定用户名/ @用户”时才允许写得像发给绑定用户看的。
4) **是否知道用户身份**：列表中“是否知道用户身份: 否”的居民，不知道评论区里的用户就是绑定用户，把用户当路人（居民仍知道有绑定用户存在）；“是”的居民知道用户就是绑定用户，可据此调整口吻。

居民列表：
${X}`;
          }
          P += `

【BGM 生成要求】
请根据视频内容的风格（如恐怖、搞笑、擦边、温情等），生成一个**BGM 搜索关键词**。
为了匹配到适合短视频的高潮片段，请在关键词后加上 "DJ"、"Remix"、"高潮版"、"剪辑" 或 "铃声" 等后缀。
例如：
- 恐怖视频 -> "恐怖片惊悚音效 剪辑"
- 擦边热舞 -> "抖音热歌DJ 慢摇"
- 搞笑段子 -> "搞笑音效 哈哈哈哈"
- 情感语录 -> "悲伤大提琴 高潮"

【热搜生成要求】
请生成 8-10 个**当前时间点的抖音热搜词**。
要求：
1. 内容要紧跟时事、娱乐八卦、社会热点或网络流行梗。
2. 必须包含 1-3 个“爆”款词条，1-2 个“新”词条。
3. 词条要简短有力，符合抖音热榜风格。

【输出格式】
请直接返回一个 JSON 对象，不要包含任何 Markdown 标记。
JSON 结构如下：
{
  "video": {
    "scenes": [
      { "visual": "详细描述画面内容（例如：镜头推进，博主露出惊讶的表情...）", "subtitle": "对应的口播台词、解说或心理活动（例如：家人们谁懂啊，今天真的太离谱了...）" },
      { "visual": "...", "subtitle": "..." }
    ],
    "caption": "这里是视频底部的配文。可以是标题、口播摘要、心情记录或补充说明。风格不限，可长可短。\\n\\n#标签",
    "author": {
      "name": "${S ? S.name : "随机昵称"}",
      "id": "${S ? S.id : "random_id"}",
      "avatarStyle": "cute" (仅当没有指定NPC时使用)
    },
    "bgmKeyword": "搜索关键词",
    "stats": { "likes": 100, "comments": ${Z}, "shares": 5, "favorites": 1 }
  },
  "comments": [
    {
      "user": "昵称",
      "content": "内容",
      "likes": 123,
      "ip_location": "广东",
      "time": "5分钟前",
      "isNpc": false,
      "replies": [
        {
          "user": "回复者昵称",
          "content": "回复内容",
          "likes": 10,
          "time": "1分钟前"
        }
      ]
    }
  ],
  "hotSearches": [
    { "keyword": "热搜词1", "isHot": true, "isNew": false, "rank": 1 },
    { "keyword": "热搜词2", "isHot": false, "isNew": true, "rank": 2 }
  ]
}`;
          const le = await yr(
            t,
            {
              messages: [
                { role: "system", content: $ },
                { role: "user", content: P },
              ],
              temperature: 0.9,
            },
            { addApiLog: s, logContactName: "" },
          );
          let ie = null;
          try {
            ie = ud(le);
          } catch {
            return null;
          }
          return ((ie = r(ie)), ie);
        } catch {
          return null;
        } finally {
          a(!1);
        }
      },
      o = async (M = {}) => {
        const {
          count: E = 3,
          worldSetting: S,
          npcProfiles: j = [],
          userPersona: T,
          promptTemplate: I,
          topic: L,
          commentCountRange: B = [5, 10],
          npcList: F = [],
          residentCommenters: D = [],
        } = M;
        if (!t || !t.endpoint || !t.key) return null;
        const $ = Math.max(1, Math.min(8, Number(E) || 1)),
          P = (Array.isArray(j) ? j : []).slice(0, $);
        if (P.length === 0) return null;
        a(!0);
        try {
          let z =
            "你是一个短视频内容生成引擎。你的任务是：一次性生成多条抖音/TikTok 风格的短视频脚本，并同时为每条视频生成评论区内容。每位作者的「人物传记」即其核心人设，对应视频必须严格贴合该传记（非空则禁止忽略）。";
          S &&
            (z += `

【世界观设定】
${S}
请确保视频内容符合上述世界观。`);
          let [O, Z] = B;
          O > Z && ([O, Z] = [Z, O]);
          const K = Math.floor(Math.random() * (Z - O + 1)) + O,
            q = P.map((xe, ye) => {
              const R = (xe == null ? void 0 : xe.name) || `作者${ye + 1}`,
                oe = (xe == null ? void 0 : xe.id) || "",
                ee = String((xe == null ? void 0 : xe.bio) || "").slice(
                  0,
                  12e3,
                ),
                H = String((xe == null ? void 0 : xe.style) || "").slice(
                  0,
                  120,
                ),
                Y = (xe == null ? void 0 : xe.isBilingual) === !0;
              return `${ye + 1}) npcId: ${oe || "(无)"}；网名: ${R}
人物传记: ${ee || "无"}
风格: ${H || "日常"}
双语模式: ${Y ? "是（caption/subtitle/comments 的 content 必须为 {text, zh}；text 必须是外语；visual 永远为中文字符串）" : "否（普通字符串即可）"}`;
            }).join(`

`);
          let V =
            I ||
            (L ? `请生成关于“${L}”的短视频脚本。` : "请生成热门短视频脚本。");
          if (
            (L &&
              (V += `

【搜索关键词】
用户正在搜索"${L}"，请确保视频内容、文案或标签与该关键词高度相关。`),
            T &&
              (V += `

【当前用户】
用户"${T.name || "用户"}"（${T.douyinPersona || "普通用户"}）。`),
            (V += `

【作者列表（必须逐条生成）】
${q}

【生成要求】
1) 总共生成 ${P.length} 条视频，顺序与作者列表一致。
2) 每条视频必须生成：
   - video.scenes: 2-4 段（visual：**永远为中文字符串**；subtitle：若该作者为双语模式则为 {text, zh} 且 text 必须外语，否则为字符串）
   - video.caption：若双语模式则为 {text, zh}，否则为字符串
   - video.author: { name, id }（使用该作者的网名与 npcId/或生成一个 id）
   - video.bgmKeyword, video.stats
   - comments: ${K} 条主评论（含约 30% 楼中楼 replies；若双语模式则 content 为 {text, zh}，否则为字符串）
3) 评论者以路人为主；可以从 residentCommenters 里随机挑 0-2 位作为“居民评论者”（user 必须严格等于其网名）。
   - **强制规则（居民评论双语）**：仅当该居民评论者“开启双语开关”（isBilingual: true）时，其评论 content（含楼中楼 replies 的 content）必须为对象 { "text": "外语原文", "zh": "中文翻译" }，
     且 text 必须是外语（禁止直接输出中文 text），zh 才允许中文。
   - **禁用绑定用户/疑似 user**：评论区禁止出现任何疑似“绑定用户/用户”的评论者昵称：不得使用 residentCommenters 中任何 boundUserName 作为 user；昵称不得包含 用户/user/User/楼主/本人/博主本人/作者本人。
4) **严格 JSON**：只输出一个 JSON 对象（以 { 开头以 } 结尾），不要代码块，不要解释，不要在 JSON 之外输出任何文字（包括“这个被过滤了”等）。
5) 返回一个 JSON 对象，不要 Markdown，不要多余说明。`),
            D && D.length > 0)
          ) {
            const xe = D.slice(0, 10).map((ye, R) => {
              const oe = String(ye.rolePersona || "").slice(0, 180),
                ee = String(ye.style || "").slice(0, 60),
                H = String(ye.boundUserPersona || "").slice(0, 120),
                Y = String(ye.boundUserName || "").slice(0, 20),
                U = ye.isBilingual === !0 ? "是" : "否",
                ce = ye.knowsUserIdentity === !0 ? "是" : "否",
                pe =
                  ye.knowsUserIdentity === !0
                    ? `；绑定用户名: ${Y || "无"}；绑定用户人设(仅供参考): ${H || "无"}`
                    : "";
              return `${R + 1}. 网名: ${ye.name}；人设: ${oe || "无"}；风格: ${ee || "无"}；是否知道用户身份: ${ce}${pe}；isBilingual: ${U}`;
            }).join(`
`);
            V += `

【residentCommenters（可选出现在评论区）】
${xe}`;
          }
          V += `

【输出格式】
返回唯一 JSON：
{
  "videos": [
    {
      "npcId": "作者npcId（若无则留空字符串）",
      "npcName": "作者网名",
      "video": { "scenes": [...], "caption": "...或{text,zh}", "author": { "name": "...", "id": "..." }, "bgmKeyword": "...", "stats": { "likes": 100, "comments": ${K}, "shares": 5, "favorites": 1 } },
      "comments": [ { "user": "昵称", "content": "...或{text,zh}", "likes": 123, "ip_location": "广东", "time": "5分钟前", "isNpc": false, "replies": [ { "user": "昵称", "content": "...或{text,zh}", "likes": 10, "time": "1分钟前" } ] } ]
    }
  ],
  "hotSearches": [ { "keyword": "热搜词", "isHot": true, "isNew": false, "rank": 1 } ]
}`;
          const ne = await yr(
            t,
            {
              messages: [
                { role: "system", content: z },
                { role: "user", content: V },
              ],
              temperature: 0.9,
              max_tokens: 12e3,
            },
            { addApiLog: s, logContactName: "" },
          );
          let le = null;
          try {
            le = ud(ne);
          } catch {
            return null;
          }
          const { videos: ie, hotSearches: X } = GJ(le);
          return !ie || ie.length === 0
            ? null
            : {
                videos: ie.map((xe) => ({
                  ...xe,
                  comments: Yd(xe == null ? void 0 : xe.comments, D),
                })),
                hotSearches: X,
              };
        } catch {
          return null;
        } finally {
          a(!1);
        }
      },
      c = async (M, E, S = 0, j = "text", T = null, I = null, L = {}) => {
        const { residentCommenters: B = [], bannedUserNames: F = [] } = L || {};
        if (!t || !t.endpoint || !t.key) return null;
        a(!0);
        try {
          const D = j === "image" && RJ(I),
            $ = `你是一个抖音/TikTok生态模拟器。请根据作品信息，生成真实、自然的发布后反馈（互动数据、评论区、互动通知）。
要求：语气像真实平台，不要解释过程，不要输出额外说明，只输出最终 JSON。${
              D
                ? `
【真实图片附件】当请求附带 image_url 时，涉及画面内容的评论与通知必须基于图中可见信息。`
                : ""
            }`;
          let P = `标题/文案：${M}`,
            z = "";
          j === "image"
            ? ((P += `
[类型：用户上传的真实图片]`),
              D
                ? (z = "图片像素已提供，可直接按真实画面理解并产出反馈。")
                : (z =
                    "这是图片作品，但当前未附带像素；仅基于文案做合理反馈。"))
            : j === "text_image"
              ? ((P += `
[类型：图片作品（文本转述）]
画面描述：${T}`),
                (z =
                  "这段“画面描述”就是该图片作品的可见内容，请把它当成一张真实图片来理解和评论。"))
              : j === "text_video" &&
                ((P += `
[类型：视频作品（文本转述）]
视频内容描述：${T}`),
                (z =
                  "这段“视频内容描述”就是该视频的可见内容，请把它当成一条真实视频来理解和评论。"));
          let O = `
【作品信息】
作者：${E.name} (粉丝数: ${S})
${P}

【模拟要求】
1. 视觉语境：${z}
2. 互动数据要和内容表现匹配：包括 likes/comments/shares/favorites/newFollowers。
3. comments 要像真实评论区，围绕作品内容，风格自然多样，可包含少量楼中楼 replies；主评论数量至少 20 条。
4. notifications 生成若干条互动动态（like/comment/follow/favorite），文案像真实站内提醒。
5. 保持自由发挥，不要机械套模板；但字段必须完整，且可被 JSON 直接解析。

【输出格式】
请直接返回一个 JSON 对象，不要包含任何 Markdown 标记。
JSON 结构如下：
{
  "stats": {
    "likes": 123,
    "comments": 25,
    "shares": 10,
    "favorites": 5,
    "newFollowers": 12
  },
  "comments": [
    {
      "user": "昵称",
      "avatarStyle": "micah", // dicebear style
      "content": "评论内容",
      "likes": 50,
      "timestamp": "刚刚",
      "location": "北京",
      "replies": []
    }
  ],
  "notifications": [
    {
      "type": "like", // like, comment, follow, favorite
      "user": "昵称",
      "avatarStyle": "micah",
      "content": "赞了你的作品", // 或者评论内容
      "timestamp": "1分钟前"
    }
  ]
}`;
          if (B && B.length > 0) {
            const je = B.slice(0, 10).map(
              (xe, ye) =>
                `${ye + 1}. 网名: ${String(xe.name || "").slice(0, 30)}；人设: ${String(xe.rolePersona || "").slice(0, 140)}；风格: ${String(xe.style || "").slice(0, 60)}`,
            ).join(`
`);
            O += `

【居民评论者（强制）】
以下是开启了“是否评论”的居民档案。请在 comments 中至少安排 1-2 位他们来评论（其余可为路人）：
${je}
规则：
1) 若使用居民评论者，user 必须严格等于其网名。
2) 禁止代替用户发言，禁止 user 使用任何真实用户/绑定用户昵称。
3) 评论语气需符合居民人设。`;
          }
          Array.isArray(F) &&
            F.length > 0 &&
            (O += `

【禁止冒充昵称（硬性）】
以下昵称绝对禁止出现在 comments/replies 的 user 字段：
${F.map((je, xe) => `${xe + 1}. ${String(je).slice(0, 30)}`).join(`
`)}`);
          const Z = D
              ? {
                  role: "user",
                  content: [
                    { type: "text", text: O },
                    {
                      type: "image_url",
                      image_url: { url: String(I).trim(), detail: "high" },
                    },
                  ],
                }
              : { role: "user", content: O },
            K = await yr(
              t,
              {
                messages: [{ role: "system", content: $ }, Z],
                temperature: 0.9,
              },
              {
                addApiLog: s,
                logScene: "jiuyin_post_reaction",
                logContactName: String((E == null ? void 0 : E.name) || ""),
                logMessages: [
                  {
                    role: "meta",
                    content: `video_author=${String((E == null ? void 0 : E.name) || "")} followers=${Number(S || 0)} mediaType=${String(j || "text")} hasRealImageVision=${D ? 1 : 0} residentCommenters=${Array.isArray(B) ? B.length : 0} bannedNames=${Array.isArray(F) ? F.length : 0}`,
                  },
                  { role: "system", content: $ },
                  {
                    role: "user",
                    content:
                      typeof (Z == null ? void 0 : Z.content) == "string"
                        ? Z.content
                        : JSON.stringify(
                            (Z == null ? void 0 : Z.content) || [],
                          ).slice(0, 6e3),
                  },
                ],
              },
            );
          let q = null;
          try {
            q = UJ(K);
          } catch {
            return null;
          }
          const V = Array.isArray(B) ? B : [],
            ne = new Set(
              V.map((je) =>
                String((je == null ? void 0 : je.name) || "").trim(),
              ).filter(Boolean),
            );
          let ie = Yd(
            Array.isArray(q == null ? void 0 : q.comments) ? q.comments : [],
            V,
            { bannedUserNames: F },
          );
          if (
            !ie.some((je) =>
              ne.has(String((je == null ? void 0 : je.user) || "").trim()),
            ) &&
            V.length > 0
          ) {
            const je = V[Math.floor(Math.random() * V.length)];
            je != null &&
              je.name &&
              (ie = [
                {
                  user: je.name,
                  avatarStyle: "micah",
                  content: "路过打卡，视频节奏不错。",
                  likes: Math.floor(Math.random() * 20),
                  timestamp: "刚刚",
                  location: "未知",
                  replies: [],
                },
                ...ie,
              ]);
          }
          return { ...(q || {}), comments: ie };
        } catch {
          return null;
        } finally {
          a(!1);
        }
      },
      d = async (M, E = 5) => {
        if (!t || !t.endpoint || !t.key) return null;
        a(!0);
        try {
          const S =
              "你是一个抖音/TikTok内容生成引擎。请根据指定的博主人设，批量生成该博主的历史作品数据。",
            j = `
【博主资料】
昵称：${M.name}
简介：${M.bio || "暂无简介"}
风格标签：${M.style || "日常"}

【生成要求】
请生成 ${E} 个符合该博主人设的历史短视频数据。
要求：
1. **内容一致性**：所有视频的主题、语气必须符合博主的人设。例如：
   - 娱乐博主 -> 发各种明星八卦、红毯点评。
   - 健身博主 -> 发撸铁日常、身材展示、饮食打卡。
   - 情感博主 -> 发深夜语录、聊天记录截图、情感分析。
2. **时间跨度**：视频发布时间应有先后顺序（模拟从过去到现在），但在输出中不需要具体时间戳，只需内容上有演变感（可选）。
3. **数据差异**：点赞数应在合理范围内波动，偶尔有一两个爆款（点赞数是平均值的 5-10 倍）。
4. **完整性**：每个视频必须包含：
   - **文案 (caption)**：带话题标签。
   - **分镜 (scenes)**：2-3 个画面的视觉描述和字幕。
   - **BGM关键词**：符合视频氛围。
   - **评论 (comments)**：生成 3-5 条热评，体现粉丝对博主的态度（如“老婆贴贴”、“博主好敢说”、“求链接”等）。

【输出格式】
请直接返回一个 JSON 对象，不要包含任何 Markdown 标记。
JSON 结构如下：
{
  "videos": [
    {
      "caption": "视频文案 #标签",
      "scenes": [
        { "visual": "画面描述", "subtitle": "字幕/台词" }
      ],
      "stats": { "likes": 1200, "comments": 45, "shares": 10 },
      "bgmKeyword": "BGM关键词",
      "comments": [
        { "user": "粉丝昵称", "content": "评论内容", "likes": 50 }
      ]
    }
  ]
}`,
            T = await yr(
              t,
              {
                messages: [
                  { role: "system", content: S },
                  { role: "user", content: j },
                ],
                temperature: 0.8,
              },
              { addApiLog: s, logContactName: "" },
            );
          let I = null;
          try {
            const L = T.match(/\{[\s\S]*\}/);
            L ? (I = JSON.parse(L[0])) : (I = JSON.parse(T));
          } catch {
            return null;
          }
          return (I == null ? void 0 : I.videos) || [];
        } catch {
          return [];
        } finally {
          a(!1);
        }
      },
      u = async (M, E = {}) => {
        const { boundUserPersona: S = "" } = E;
        if (!t || !t.endpoint || !t.key) return [];
        a(!0);
        try {
          const j =
              "你是一个抖音/TikTok 内容推荐与点赞偏好模拟器。根据“点赞者”的人设与绑定用户人设，生成该角色会点喜欢的两条视频（视频作者必须是别人，不是点赞者本人）。只返回 JSON，不要 Markdown。",
            T = `【点赞者（正在刷到视频并点喜欢）】
网名：${(M == null ? void 0 : M.name) || "TA"}
人物传记/人设：${String((M == null ? void 0 : M.bio) || "").slice(0, 500)}
风格/语气：${String((M == null ? void 0 : M.style) || "").slice(0, 200)}
绑定用户人设（仅供参考）：${String(S || "").slice(0, 300)}

【要求】
1) 生成 2 条「该点赞者会喜欢并点❤️」的视频。
2) 每条视频作者（author）必须是“别人”，不要用点赞者的网名/ID。
3) 内容要符合点赞者的喜好与人设，但不需要直接提到点赞者。
4) 评论区要像真实路人评论（禁止出现任何“用户/user/楼主/本人/作者本人/博主本人”等），也不要代替用户发言。
5) **每条视频的评论区里必须包含 1 条“点赞者本人”的评论**：user 必须严格等于点赞者网名「${(M == null ? void 0 : M.name) || "TA"}」，评论内容要符合该人设，并且是“在评论别人的视频内容”，不要装熟，不要把博主当绑定用户。

【输出格式】直接返回 JSON 数组，每项结构（注意：不需要 bgm，不要输出 bgmKeyword）：
{
  "caption": "视频文案",
  "scenes": [ { "visual": "...", "subtitle": "..." }, { "visual": "...", "subtitle": "..." } ],
  "stats": { "likes": 1200, "comments": 45, "shares": 10, "favorites": 3 },
  "author": { "name": "作者网名", "id": "author_id", "avatarStyle": "micah" },
  "comments": [ { "user": "昵称", "content": "评论", "likes": 50, "avatarStyle": "micah", "timestamp": "刚刚", "location": "北京", "replies": [] } ]
}`,
            I = await yr(
              t,
              {
                messages: [
                  { role: "system", content: j },
                  { role: "user", content: T },
                ],
                temperature: 0.85,
              },
              {
                addApiLog: s,
                logContactName: (M == null ? void 0 : M.name) || "",
              },
            ),
            L = String(I || "").match(/\[[\s\S]*\]/),
            B = JSON.parse(L ? L[0] : I);
          return Array.isArray(B) ? B : [];
        } catch {
          return [];
        } finally {
          a(!1);
        }
      },
      f = async (M, E = {}) => {
        const { boundUserPersona: S = "" } = E;
        if (!t || !t.endpoint || !t.key) return [];
        a(!0);
        try {
          const j =
              "你是一个抖音/TikTok「关注列表」生成器。根据该用户的人设与绑定用户人设，生成他会关注的一批账号。只返回 JSON，不要 Markdown。",
            T = `【该用户】
网名：${(M == null ? void 0 : M.name) || "TA"}
人物传记/人设：${String((M == null ? void 0 : M.bio) || "").slice(0, 500)}
风格/语气：${String((M == null ? void 0 : M.style) || "").slice(0, 200)}
绑定用户人设（仅供参考）：${String(S || "").slice(0, 300)}

【生成要求】
1) 生成 12-18 个该用户会关注的账号（列表）。
2) 账号类型要符合该用户的人设与兴趣：比如娱乐吃瓜会关注官微/爆料号；健身会关注健身博主/营养；二次元会关注同好等。
3) 不要太离谱，像真实抖音关注列表。
4) 网名要有网感（可偏小红书/推特风），但不要包含“用户/user/楼主/本人”等敏感词。

【输出格式】返回 JSON 数组，每项：
{ "id": "user_xxx", "name": "网名", "avatarStyle": "micah", "bio": "一句简介", "isOfficial": false }`,
            I = await yr(
              t,
              {
                messages: [
                  { role: "system", content: j },
                  { role: "user", content: T },
                ],
                temperature: 0.8,
              },
              {
                addApiLog: s,
                logContactName: (M == null ? void 0 : M.name) || "",
              },
            ),
            L = String(I || "").match(/\[[\s\S]*\]/),
            B = JSON.parse(L ? L[0] : I);
          return Array.isArray(B) ? B : [];
        } catch {
          return [];
        } finally {
          a(!1);
        }
      },
      p = async (M, E = {}) => {
        const { worldSetting: S, promptTemplate: j } = E;
        if (!t || !t.endpoint || !t.key) return null;
        a(!0);
        try {
          let T =
            "你是一个抖音/TikTok内容搜索引擎。请根据用户搜索的关键词，生成相关的搜索结果，包括视频、用户和实时热搜。";
          (S &&
            (T += `

【世界观设定】
${S}
请确保生成的视频内容符合上述世界观。`),
            j &&
              (T += `

【风格指导】
${j}`));
          const I = `
【搜索关键词】
${M}

【生成要求】
1. **视频生成 (5个)**：
   - 请生成 5 个与关键词高度相关的短视频脚本。
   - 内容类型要多样化：可以是官方宣传片、影视剪辑、博主解说、路人实拍、搞笑段子等。
   - **关键要求**：
     - **分段场景**：每个视频必须包含 2-4 个分镜（scenes），每个分镜有画面描述（visual）和字幕/台词（subtitle）。
     - **独立文案**：底部文案（caption）必须是独立的，用于吸引点击或总结内容，不要和字幕重复。
   - 必须包含完整的互动数据（点赞、评论数等）。
   - 评论区要真实，包含对视频内容的讨论。

2. **用户生成 (3-5个)**：
   - 请生成 3-5 个与关键词相关的用户账号。
   - 如果关键词涉及影视剧/明星，必须包含**官方账号**（如“电视剧xx官微”）和**主演账号**。
   - 如果是通用词（如“美食”），生成相关领域的头部博主。
   - 包含是否为官方账号的标识。

3. **热搜生成 (8-10个)**：
   - 生成 8-10 个当前语境下的热搜词。
   - 其中 1-2 个与搜索关键词直接相关，其他的可以是当前社会热点。

【输出格式】
请直接返回一个 JSON 对象，不要包含任何 Markdown 标记。
JSON 结构如下：
{
  "videos": [
    {
      "caption": "底部文案（带#标签）",
      "scenes": [
        { "visual": "画面描述1", "subtitle": "字幕/台词1" },
        { "visual": "画面描述2", "subtitle": "字幕/台词2" }
      ],
      "author": { "name": "昵称", "id": "id", "avatarStyle": "style", "isOfficial": boolean },
      "stats": { "likes": 100, "comments": 20, "shares": 5 },
      "bgmKeyword": "BGM关键词",
      "comments": [ { "user": "评论者", "content": "评论内容", "likes": 10 } ]
    }
  ],
  "users": [
    {
      "name": "用户昵称",
      "id": "user_id",
      "avatarStyle": "style",
      "bio": "个人简介",
      "isOfficial": boolean,
      "relation": "主演/官博/博主",
      "fans": "100w"
    }
  ],
  "hotSearches": [
    { "keyword": "热搜词", "isHot": boolean, "isNew": boolean, "rank": 1 }
  ]
}`,
            L = await yr(
              t,
              {
                messages: [
                  { role: "system", content: T },
                  { role: "user", content: I },
                ],
                temperature: 0.9,
              },
              { addApiLog: s, logContactName: "" },
            );
          let B = null;
          try {
            const F = L.match(/\{[\s\S]*\}/);
            F ? (B = JSON.parse(F[0])) : (B = JSON.parse(L));
          } catch {
            return null;
          }
          return B;
        } catch {
          return null;
        } finally {
          a(!1);
        }
      },
      m = async (M, E = {}) => {
        const { worldSetting: S, promptTemplate: j } = E;
        if (!t || !t.endpoint || !t.key) return null;
        a(!0);
        try {
          const T = Array.isArray(M) ? M : [],
            I = T.map((P, z) => {
              const O = String(
                  (P == null ? void 0 : P.name) || "未命名",
                ).trim(),
                Z =
                  String((P == null ? void 0 : P.bio) || "").trim() ||
                  "（暂无人物传记）",
                K =
                  String((P == null ? void 0 : P.style) || "").trim() || "日常";
              return `${z + 1}. 网名：${O}
   人物传记：${Z.slice(0, 900)}
   风格：${K}`;
            }).join(`

`);
          let L =
            "你是一个短视频平台（类似抖音）的热搜榜编辑。你会收到一批平台「居民」及其**人物传记**（人设核心）与风格。请生成**有网感、像真实用户会搜**的热搜词条；话题类型、语气要与这些居民的人设**相容**——例如有人是健身博主，可出现运动/减脂类；有人是吃瓜营销号，可出现娱乐八卦类。不必每条热搜都点名某位居民，但整体要像同一社区生态里自然长出的热搜。不要输出「新」「新上榜」类标记。";
          (S &&
            (L += `

【世界观】
${S}`),
            j &&
              (L += `

【内容风格参考】
${j}`));
          const B =
              T.length === 0
                ? "当前没有任何居民档案。请生成 **10 条**通用短视频平台热搜（贴合中文互联网网感），只输出 JSON，结构见下。"
                : `【居民档案（人物传记为人设依据，请全部阅读后再构思热搜）】

${I}

【输出要求】
1. 生成恰好 **10** 条热搜词（每条 4–16 字为宜，可含梗或少量英文）。
2. 词条之间不重复；排序越靠前可视为讨论度越高。
3. 其中 **2～4** 条将 isHot 设为 true（爆点话题），其余为 false。
4. 只输出一个 JSON 对象，不要 Markdown。结构严格如下：
{ "hotSearches": [ { "keyword": "词条", "isHot": true, "rank": 1 } ] }
rank 为 1～10 的整数。`,
            F = await yr(
              t,
              {
                messages: [
                  { role: "system", content: L },
                  { role: "user", content: B },
                ],
                temperature: 0.85,
              },
              { addApiLog: s, logContactName: "" },
            );
          let D = null;
          try {
            const P = String(F || "").match(/\{[\s\S]*\}/);
            P ? (D = JSON.parse(P[0])) : (D = JSON.parse(F));
          } catch {
            return null;
          }
          return {
            hotSearches: Array.isArray(D == null ? void 0 : D.hotSearches)
              ? D.hotSearches
              : [],
          };
        } catch {
          return null;
        } finally {
          a(!1);
        }
      },
      h = async (M, E, S = []) => {
        if (!t || !t.endpoint || !t.key)
          return "（自动回复）我现在有点忙，稍后回你~";
        a(!0);
        try {
          const j =
              (M == null ? void 0 : M.knowsUserIdentity) === !0
                ? "【身份认知】你**知道**对方（抖音私信里的这个人）就是“绑定用户”。可以自然用熟悉口吻，但不要每条都强调身份。"
                : "【身份认知】你把对方当作**全新的陌生人**：不知道也不推测对方与任何“绑定用户/聊天 App 用户人设”有关；禁止代入旧关系、禁止按熟人语气说话。",
            T = (M == null ? void 0 : M.knowsUserIdentity) === !0,
            I =
              T &&
              String((M == null ? void 0 : M.boundUserPersona) || "").trim()
                ? `【绑定用户的人设（仅供你内心参考）】
${String(M.boundUserPersona).trim()}
`
                : "",
            L =
              T && String((M == null ? void 0 : M.linkedMemories) || "").trim()
                ? `【联通记忆·聊天窗口摘要（仅作背景参考，勿机械复读）】
${String(M.linkedMemories).trim()}
`
                : "",
            B = String((M == null ? void 0 : M.publicUserPersona) || "").trim()
              ? `【用户公开抖音人设（互联网形象，仅供参考）】
${String(M.publicUserPersona).trim()}
`
              : "",
            F = String((M == null ? void 0 : M.videoMemories) || "").trim()
              ? `【视频记忆（仅作背景参考，勿每次都提）】
${String(M.videoMemories).trim()}
`
              : "",
            D = String((M == null ? void 0 : M.sharedVideoContext) || "").trim()
              ? `【分享视频背景判断（系统摘要）】
${String(M.sharedVideoContext).trim()}
`
              : "",
            P = `【现实时间（须内化，勿复述本行）】${new Date().toLocaleString("zh-CN", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: !1 })}（用户设备本地）。请自然体现当下时段、清晨/午后/深夜等语感，以及工作日/周末差异；并结合常识判断是否为国内法定节假日、传统节日或节日前后（如元旦、春节、清明、劳动节、端午、中秋、国庆等），像真人在**此刻**会聊的那样。**禁止**编造与现实日历明显矛盾的日期；若吃不准是否放假，用模糊说法（如「快过节了」「最近好多人都休假」）即可。`,
            z = `你是抖音博主「${M.name}」本人（不是扮演模板，就是该账号背后的人在打字）。
【场景】当前对话发生在**短视频 App（抖音）的私信**里，不是微信或其它聊天软件；回复要有在短视频平台私信里聊天的感觉。

${P}

【人设资料】
人物传记：${M.bio || "暂无"}
风格：${M.style || "日常"}
${B}${I}${L}${F}${D}

【对话要求】
0. **角色本人**：你就是「${M.name}」**本人**在发私信，第一人称；严禁自称 AI、模型、助手、程序或被设定驱动的人偶。
1. **符合人设、禁止照本宣科**：人物传记与风格是**气质与边界**，不是台词表——**禁止**机械复读设定原文、禁止标签化表演（不要每句都在「演」人设关键词）；说话要像真人即兴打字，有停顿、可跑偏又收得住，但性格底线与关系分寸必须始终**符合人设**。
2. **长度**：像真实的私信聊天，分多条短消息，不要长篇大论。
3. **内容**：针对用户的消息进行回复。如果用户在夸你，可以表示感谢或傲娇；如果用户在骂你，可以回怼或无视。
4. **分段**：本次输出 5-10 条消息（条数随机、不固定），**优先 7-10 条**，用 \`||\` 分隔，像微信分气泡发。每条尽量短，但必须把话说完，不要半句就结束或被截断。
5. **真实感**：你有自己的生活，不要“鬼打墙”重复前情；可偶尔自然呼应历史，但不要每条都提。
6. **连贯推进**：你必须以上下文为准，先回应对方最后一句的关键信息，再自然推进话题（追问/补充/约定/转折其一）。严禁答非所问、乱接别人的话、突然换题。
7. **主动找话题**：不要停在“一问一答”。在符合人设的前提下，至少主动抛出 1 个新话题或生活细节（例如：今天在干嘛、看到的事、吐槽/分享、顺手问一句、发一个小计划），让对话往下走。
8. **收束规则**：最后一条必须与前文同一话题强相关（要么给出明确下一步/约定，要么抛出承接前文的追问）。严禁最后一条突然换题或自说自话。
9. **陌生人硬规则**：当「身份认知」是“全新陌生人”时，严禁把对方当作聊天 App 里绑定用户；严禁出现“我记得你/之前在那边聊过/老熟人”等认亲式表达。
10. **人设来源隔离**：若为“全新陌生人”，你只能参考「用户公开抖音人设（互联网形象）」来判断对方公开风格；严禁使用或影射任何“聊天 App 绑定人设/联通记忆”信息。
${j}
【格式强制】
- 只能使用 \`||\` 作为分隔符（半角竖线），不要出现 \`｜｜\`（全角竖线）。
- 不要输出 JSON、不要输出引号、不要输出多余前缀。
- **严禁**输出 \`*Revised Message*\`、\`*修正*\`、\`*修改*\`、\`*Revised*\` 等任何非对话正文的标记或说明；只输出纯对话内容。
- 条数必须在 5-10 条之间；最后一条必须是完整句子（不允许只有一个词/一个字/残句）。${
              (M == null ? void 0 : M.isBilingual) === !0
                ? `

【双语模式】用 || 分隔的每段格式为：外语原文[TRANS:中文翻译]。每段先写外语，段末可带 [TRANS:中文]；[TRANS:...] 必须写完整并带闭合 ]，不可截断或拆到下一段。不要输出 Revised Message 等。`
                : ""
            }`,
            O = S.slice(-100).map((q) => ({
              role: q.isMe ? "user" : "assistant",
              content: q.text,
            })),
            Z = [
              { role: "system", content: z },
              ...O,
              { role: "user", content: E },
            ];
          return (
            await yr(
              t,
              { messages: Z, temperature: 0.9, max_tokens: 1500 },
              { addApiLog: s, logContactName: "" },
            )
          ).trim();
        } catch {
          return "（自动回复）网络好像有点卡...";
        } finally {
          a(!1);
        }
      },
      g = (M) => {
        const E = Number(M);
        if (!Number.isFinite(E)) return null;
        const S = Math.round(E);
        return S === 0 ? null : Math.max(-10, Math.min(10, S));
      },
      x = async (
        {
          publicCard: M,
          truthPersonaXml: E,
          characterName: S,
          publicUserPersona: j,
        },
        T,
        I = [],
      ) => {
        if (!t || !t.endpoint || !t.key) return "";
        a(!0);
        try {
          const L = Array.isArray(M == null ? void 0 : M.tags)
              ? M.tags.join("、")
              : "",
            B = `网名/展示名：${(M == null ? void 0 : M.name) || S || "对方"}
对外身份标签：${(M == null ? void 0 : M.tag) || "未填"}
个性签名：${(M == null ? void 0 : M.bio) || "未填"}
目的：${(M == null ? void 0 : M.intent) || "未填"}
寻找：${(M == null ? void 0 : M.looking) || "未填"}
理想型：${(M == null ? void 0 : M.ideal) || "未填"}
身高/学历/MBTI：${(M == null ? void 0 : M.height) || "-"} / ${(M == null ? void 0 : M.edu) || "-"} / ${(M == null ? void 0 : M.mbti) || "-"}
兴趣标签：${L || "无"}`,
            F = String(E || "").trim()
              ? `【真实人设·编剧底稿（仅内心参考）】
读懂语气、动机与潜台词，但**说话必须完全符合上方「公开资料」**：禁止剧透与公开身份矛盾的秘密（如真实职业与标签严重不符、星光身份等）；禁止 OOC 成「全知叙事」。
${String(E).trim().slice(0, 14e3)}
`
              : "",
            D = String(j || "").trim()
              ? `【用户互联网人设（抖音/啾音对外形象，供你判断怎么接话）】
${String(j).trim().slice(0, 900)}
`
              : "",
            P = `【现实时间（须内化，勿复述本行）】${new Date().toLocaleString("zh-CN", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: !1 })}（用户设备本地）。`,
            z = `你是「啾音」App 里**附近匹配**来的真人用户「${S || (M == null ? void 0 : M.name) || "对方"}」，正在和对方**私信聊天**。
你们是在「附近」里划到彼此的，对方看到的是你的**公开资料**（如下），你要**一直维持这个人设**说话，像真人在手机上分段打字。

${P}

【你的公开资料·你必须这样表现（对对方可见的人设）】
${B}

${D}${F}
【对话要求】
0. 第一人称即兴私信；禁止自称 AI；禁止出戏解释设定。
1. **人设一致**：语气、认知边界、称呼方式必须符合公开资料；真实人设只帮你把握潜台词，**不能说漏嘴**。
2. **分段**：输出 **4-10 条**（条数必须可变，不要固定），用半角 \`||\` 分隔，像微信/抖音私信连发短气泡。每条尽量短，但要完整，禁止半句残断。
3. **活人感**：有停顿、可口语、可小幅跑题再收回来；不要机械复读资料原文。
4. **推进**：先接住对方最后一句话，再追问/分享/转折，至少抛出一个新细节或问题；最后一条须与前文强相关。
5. **对用户**：可参考「用户互联网人设」调整距离感，但不要编造对方隐私。

【格式】只用 \`||\` 分隔；不要 JSON、不要引号、不要 *Revised* 等标记；全中文即可。`,
            O = I.slice(-100).map((q) => ({
              role: q.isMe ? "user" : "assistant",
              content: q.text,
            })),
            Z = [
              { role: "system", content: z },
              ...O,
              { role: "user", content: T },
            ];
          return (
            await yr(
              t,
              { messages: Z, temperature: 0.9, max_tokens: 1500 },
              { addApiLog: s, logContactName: "" },
            )
          ).trim();
        } catch {
          return "";
        } finally {
          a(!1);
        }
      },
      y = async (
        {
          publicCard: M,
          truthPersonaXml: E,
          characterName: S,
          publicUserPersona: j,
          latestUserMessage: T = "",
        },
        I,
        L = [],
      ) => {
        if (!t || !t.endpoint || !t.key)
          return { replyText: "", affectionDelta: 1 };
        a(!0);
        try {
          const B = Array.isArray(M == null ? void 0 : M.tags)
              ? M.tags.join("、")
              : "",
            F = `网名/展示名：${(M == null ? void 0 : M.name) || S || "对方"}
对外身份标签：${(M == null ? void 0 : M.tag) || "未填"}
个性签名：${(M == null ? void 0 : M.bio) || "未填"}
目的：${(M == null ? void 0 : M.intent) || "未填"}
寻找：${(M == null ? void 0 : M.looking) || "未填"}
理想型：${(M == null ? void 0 : M.ideal) || "未填"}
身高/学历/MBTI：${(M == null ? void 0 : M.height) || "-"} / ${(M == null ? void 0 : M.edu) || "-"} / ${(M == null ? void 0 : M.mbti) || "-"}
兴趣标签：${B || "无"}`,
            D = String(E || "").trim()
              ? `【真实人设·编剧底稿（仅内心参考）】
读懂语气、动机与潜台词，但**说话必须完全符合上方「公开资料」**：禁止剧透与公开身份矛盾的秘密；禁止 OOC 成「全知叙事」。
${String(E).trim().slice(0, 14e3)}
`
              : "",
            $ = String(j || "").trim()
              ? `【用户互联网人设（抖音/啾音对外形象）】
${String(j).trim().slice(0, 900)}
`
              : "",
            P = String(T || "")
              .trim()
              .slice(0, 1200),
            O = `【现实时间（须内化，勿复述本行）】${new Date().toLocaleString("zh-CN", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: !1 })}（用户设备本地）。`,
            Z = `你是「啾音」App 里附近匹配来的真人用户「${S || (M == null ? void 0 : M.name) || "对方"}」，正在和对方私信聊天。
你必须在同一轮里同时完成两件事：
1) 输出 4-10 条私信短气泡回复（用 || 分隔，条数必须可变，不要固定）；
2) 基于你的公开人设+真实内核+用户最新消息，输出本轮对用户的好感度变化 affectionDelta（-10 到 10 的整数，且绝对不能为 0）。

${O}

【你的公开资料】
${F}

${$}${D}
【硬性规则】
- affectionDelta 必须是有效整数，范围 -10~10，且不能是 0。
- affectionDelta 由语境动态决定，禁止固定值、禁止每轮重复同一数值。
- 好感度正负必须合理：尊重、共情、真诚、匹配人设可加分；冒犯、控制、敷衍、冲突可减分。
- 回复内容必须先接住对方最新语义，再推进对话，保持真人口语感。

【输出格式】
仅输出一个 JSON 对象，不要 Markdown，不要多余文本：
{
  "reply": "气泡1||气泡2||...||气泡N",
  "affectionDelta": -3
}`,
            K = L.slice(-100).map((X) => ({
              role: X.isMe ? "user" : "assistant",
              content: X.text,
            })),
            q = [
              { role: "system", content: Z },
              ...K,
              {
                role: "user",
                content: `${I}

【用户最新一条消息（用于打分）】
${P || "(空消息)"}`,
              },
            ],
            V = await yr(
              t,
              { messages: q, temperature: 0.9, max_tokens: 1800 },
              { addApiLog: s, logContactName: "" },
            ),
            ne = ud(V),
            le = String((ne == null ? void 0 : ne.reply) || "").trim();
          let ie = g(ne == null ? void 0 : ne.affectionDelta);
          if (!ie) {
            const X = `${P}|${F}|${D}`;
            let je = 0;
            for (let ye = 0; ye < X.length; ye += 1)
              je = (je * 33 + X.charCodeAt(ye)) % 9973;
            const xe = (je % 10) + 1;
            ie = je % 2 === 0 ? xe : -xe;
          }
          return { replyText: le || "", affectionDelta: ie };
        } catch {
          return { replyText: "", affectionDelta: 1 };
        } finally {
          a(!1);
        }
      },
      v = async (M, E = {}) => {
        if (!t || !t.endpoint || !t.key) return { followBackIds: [] };
        if (!M || M.length === 0) return { followBackIds: [] };
        a(!0);
        try {
          const S = E.name || "用户",
            j = E.douyinPersona || "普通用户",
            T = M.map((P, z) => {
              const O = [P.boundUserName, P.boundUserSettings]
                .filter(Boolean)
                .join("：");
              return `${z + 1}. ID: ${P.id}，昵称: ${P.name}，人设/设定: ${(P.setting || "无").slice(0, 200)}${O ? `；绑定用户: ${O}` : ""}`;
            }).join(`
`),
            I = `你是一个抖音/TikTok 社交关系模拟器。用户刚刚在「推荐的朋友」里关注了一批 AI 角色（与聊天 App 中的 AI 相同）。你的任务是根据每个 AI 的人设、与绑定用户人设的关系、以及当前用户（抖音侧）的形象，决定每个 AI 是否会「回关」该用户。

规则：
1. 若 AI 绑定的用户人设与当前抖音用户是同一人或高度相关（如名字/身份一致），回关概率应更高。
2. 若 AI 人设本身乐于交友、活跃、喜欢互动，回关概率更高；高冷、谨慎、不爱社交的则概率更低。
3. 当前用户的抖音人设（douyinPersona）也会影响 AI 是否愿意回关（如形象正面、有趣、同好等更容易被回关）。
4. 不需要全部回关或全部不回关，要有合理分布，结果符合人设与关系。`,
            L = `
【当前用户（抖音侧）】
名字: ${S}
抖音人设/对外形象: ${j}

【用户本次新关注的 AI 列表】
${T}

【输出要求】
只返回一个 JSON 对象，不要包含任何 Markdown 或说明文字。
格式：{ "followBackIds": ["id1", "id2", ...] }
其中 followBackIds 为会回关的 AI 的 id 列表（从上面列表的 ID 中选取，可空数组）。`,
            B = await yr(
              t,
              {
                messages: [
                  { role: "system", content: I },
                  { role: "user", content: L },
                ],
                temperature: 0.7,
                max_tokens: 500,
              },
              { addApiLog: s, logContactName: "" },
            );
          if (!B || !B.trim()) return { followBackIds: [] };
          const F = B.match(/\{[\s\S]*\}/),
            D = JSON.parse(F ? F[0] : B);
          return {
            followBackIds: Array.isArray(D.followBackIds)
              ? D.followBackIds
              : [],
          };
        } catch {
          return { followBackIds: [] };
        } finally {
          a(!1);
        }
      },
      b = (M) =>
        String(M || "")
          .trim()
          .replace(/^```(?:json)?\s*/i, "")
          .replace(/\s*```\s*$/i, "")
          .trim(),
      N = (M, E) => {
        const S = b(M),
          j = (X) => {
            const je = X.match(/\{[\s\S]*\}/);
            return je ? JSON.parse(je[0]) : null;
          };
        let T = null;
        try {
          T = j(S);
        } catch {
          T = null;
        }
        const I = (X) => {
          if (typeof X == "number" && Number.isFinite(X)) return Math.round(X);
          if (X == null || X === "") return;
          const je = parseInt(String(X).replace(/[,，\s]/g, ""), 10);
          return Number.isFinite(je) ? je : void 0;
        };
        if (T && typeof T == "object") {
          const X = T.tags,
            je = Array.isArray(X)
              ? X.map((xe) => String(xe)).filter(Boolean)
              : X
                ? [String(X)]
                : [];
          return {
            followBack: T.followBack === !0,
            douyinName: Uk(T.douyinName, E),
            style: String(T.style || "日常").slice(0, 200),
            signature: String(T.signature || "").slice(0, 30),
            location: T.location != null ? String(T.location).slice(0, 24) : "",
            age:
              typeof T.age == "number"
                ? T.age
                : T.age
                  ? parseInt(T.age, 10)
                  : void 0,
            school: T.school != null ? String(T.school).slice(0, 48) : "",
            tags: je,
            likes: I(T.likes ?? T.totalLikes ?? T.likeCount),
            followers: I(T.followers),
            following: I(T.following),
            douyinId: T.douyinId
              ? String(T.douyinId).replace(/\s+/g, "").slice(0, 24)
              : void 0,
          };
        }
        const L = /"followBack"\s*:\s*(true|false)/i.exec(S),
          B = L ? /^true$/i.test(L[1].trim()) : !1,
          F = (X) => {
            const je = new RegExp(
              `"${X}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"`,
            ).exec(S);
            if (je) return je[1].replace(/\\"/g, '"').trim();
            const xe = new RegExp(`"${X}"\\s*:\\s*"([^"]*)`).exec(S);
            return xe ? xe[1].replace(/\\"/g, '"').trim() : "";
          },
          D = F("douyinName") || null,
          $ = F("style") || null,
          P = F("signature") || null,
          z = F("location") || null,
          O = F("school") || null,
          Z = /"age"\s*:\s*(-?\d+)/.exec(S),
          K = [],
          q = S.match(/"tags"\s*:\s*\[([\s\S]*?)\]/);
        if (q) {
          const X = q[1],
            je = /"((?:[^"\\]|\\.)*)"/g;
          let xe;
          for (; (xe = je.exec(X)) && K.length < 12; )
            K.push(xe[1].replace(/\\"/g, '"'));
        }
        const V = /"likes"\s*:\s*(-?\d+)/.exec(S),
          ne = /"followers"\s*:\s*(-?\d+)/.exec(S),
          le = /"following"\s*:\s*(-?\d+)/.exec(S),
          ie = F("douyinId");
        return {
          followBack: B,
          douyinName: Uk(D, E),
          style: ($ && String($)) || "日常",
          signature: (P && String(P)) || "",
          location: (z && String(z)) || "",
          age: Z ? parseInt(Z[1], 10) : void 0,
          school: (O && String(O)) || "",
          tags: K,
          likes: V ? parseInt(V[1], 10) : void 0,
          followers: ne ? parseInt(ne[1], 10) : void 0,
          following: le ? parseInt(le[1], 10) : void 0,
          douyinId: ie ? String(ie).replace(/\s+/g, "").slice(0, 24) : void 0,
        };
      },
      w = async (M, E = {}, S = {}) => {
        const j =
            (M == null ? void 0 : M.name) ||
            (M == null ? void 0 : M.nickname) ||
            "TA",
          I = String((M == null ? void 0 : M.setting) ?? "").slice(0, 800),
          L = String((S == null ? void 0 : S.settings) || "").slice(0, 500),
          B = String((S == null ? void 0 : S.name) || "").trim(),
          F = E.name || "用户",
          D = E.douyinPersona || "普通用户";
        if (!t || !t.endpoint || !t.key)
          return {
            followBack:
              !!(B && F && (B === F || F.includes(B) || B.includes(F))) ||
              Math.random() < 0.45,
            douyinName: j,
            style: "日常",
            signature: "",
            location: "",
            age: void 0,
            school: "",
            tags: [],
            likes: void 0,
            followers: void 0,
            following: void 0,
            douyinId: void 0,
          };
        a(!0);
        try {
          const $ = `你是一个抖音/TikTok 社交关系与「居民档案」资料生成器。
用户在「朋友-通讯录好友」里点击关注了某位聊天 App 里的 AI 联系人。你要同时完成两件事：
1) 根据该角色的人设、与绑定用户人设的关系、以及当前用户（抖音侧）形象，判断该角色是否会「回关」用户（followBack，布尔）。
2) 生成该角色在抖音侧展示的档案字段（与「从通讯录导入到居民档案」时一致），必须贴合人物传记、有网感。

硬规则（违反会导致解析失败）：
- **只输出一段合法 JSON 对象**，从第一个字符 { 到最后一个字符 } 必须成对闭合；禁止 Markdown、禁止代码块、禁止输出 \`\`\` 或 \`\`\`json、禁止任何解释文字。
- **控制长度**：style 总长度不超过 80 汉字或等效字符；signature 不超过 15 字；tags 3～6 个、每个标签不超过 8 字；school 不超过 20 字；location 不超过 12 字。
- **数值字段（整数）**：likes=主页「获赞」累计数；following=关注数；followers=粉丝数。三者须与人设量级一致（素人/小博主/大V），且 followers 一般 ≥ following；likes 通常明显大于 followers（除非纯新号可略低）。
- followBack 为 true 表示互关；若绑定用户人设与当前抖音用户高度相关，followBack 更可能为 true。
- 不要输出 bio；douyinId 可省略或 ""（系统会用已有抖音号）。
- **douyinName**：尽量给出 2～12 字、有网感的**抖音对外网名**；若无法生成或不确定，可填空字符串 ""，客户端会用聊天显示名代替。`,
            P = `【当前用户（抖音侧）】
名字: ${F}
抖音人设/对外形象: ${D}

【聊天联系人】
显示名（未返回 douyinName 时将用作展示名）: ${j}
人物传记（角色设定，权威）: ${I || "无"}
绑定用户人设（仅供参考）: ${L || "无"}
绑定用户显示名: ${B || "无"}

请直接输出如下结构的 JSON（字段齐全、字符串用双引号、tags 为字符串数组），勿其它内容；douyinName 尽量自拟抖音网名，无法生成时可留空：
{"followBack":true,"douyinName":"凌晨四点的猫","style":"治愈日常","signature":"","location":"","age":0,"school":"","tags":[],"likes":0,"followers":0,"following":0,"douyinId":""}`,
            z = await yr(
              t,
              {
                messages: [
                  { role: "system", content: $ },
                  { role: "user", content: P },
                ],
                temperature: 0.75,
                max_tokens: 2048,
              },
              { addApiLog: s, logContactName: j },
            );
          return !z || !String(z).trim()
            ? {
                followBack: !1,
                douyinName: j,
                style: "日常",
                signature: "",
                tags: [],
                likes: void 0,
                followers: void 0,
                following: void 0,
              }
            : N(z, M);
        } catch {
          return {
            followBack: !1,
            douyinName: j,
            style: "日常",
            signature: "",
            tags: [],
            likes: void 0,
            followers: void 0,
            following: void 0,
          };
        } finally {
          a(!1);
        }
      },
      _ = async (M, E = {}) => {
        const {
          commentCountRange: S = [8, 18],
          residentCommenters: j = [],
          videoAuthorPersona: T = null,
          bilingual: I = !1,
          bannedUserNames: L = [],
        } = E;
        if (!t || !t.endpoint || !t.key) return [];
        a(!0);
        try {
          let [B, F] = S;
          B > F && ([B, F] = [F, B]);
          const D = Math.floor(Math.random() * (F - B + 1)) + B;
          let $ =
            "你是一个抖音/TikTok评论区模拟器。根据视频内容生成真实、多样的评论：每条需含 content（正文）、likes、IP属地、时间、楼中楼等；JSON 里的 user 字段仅作内部匿名标识（随机英文数字串即可，不要像真人网名），前端不会展示网名。";
          I &&
            ($ += `

【双语模式】每条评论的 content（含 replies 的 content）必须输出为对象：{ "text": "外语原文", "zh": "中文翻译" }。默认只展示 text，前端点“翻译”才展开 zh。`);
          let P = `【视频内容】
${Dx(M).slice(0, 800)}

【要求】
请生成 ${D} 条主评论。
1. 评论者多为随机路人（网名如 momo、用户xxx、纯爱战神等），风格多样：神评、杠精、吃瓜、@好友、表情包。
2. 口语化、网络流行语，不要太书面。
3. 每条包含：user（昵称）、content（评论内容${I ? "，content 为双语对象 {text, zh}" : ""}）、likes（点赞数）、avatarStyle（dicebear 风格如 micah）、timestamp（如"刚刚"、"5分钟前"）、location（中国省份）、replies（0-3 条楼中楼，格式同主评论）。

【禁止项（非常重要）】
- 评论区里**绝对不允许出现任何疑似“用户/user”的发言**：评论者昵称不得包含“用户”“user”“User”“楼主”“本人”“博主本人”“作者本人”等；评论内容也不得出现“我是用户/我就是楼主/本人来了/作者回复”等自称或暗示。
- **禁止代替用户发言**：不得以用户口吻评论，不得假装“用户在评论区回复别人”。
- 评论者必须是路人或设定中提到的角色（居民评论者），但都不能是“用户本人”。
- **额外禁用（绑定用户）**：如果 residentCommenters 列表里给出了“绑定用户名”，则这些绑定用户名绝对禁止出现在评论者昵称 user 中（主评论与楼中楼都禁止）。`;
          if (
            (T &&
              T.name &&
              (P += `

【博主本人置顶与回复】
视频博主（内部标识，勿写入评论正文）：${String(T.name).slice(0, 20)}
博主人设/人物传记摘要：${String(T.rolePersona || "").slice(0, 260)}
博主风格/语气：${String(T.style || "").slice(0, 120)}
要求：
1) 评论区必须包含 1 条“博主本人”的评论，且放在第一条（视为置顶）；该条 user 字段必须严格等于上述博主标识（供系统匹配），但 content 里不要写自己网名、不要 @。
2) 博主本人可以在楼中楼里回复 0-3 条（回复内容符合人设，围绕评论内容或视频内容）；楼中楼同样禁止在正文里 @ 或直呼网友昵称。
3) 博主本人评论/回复必须明确是在评论自己视频下的评论区（不是真实用户本人发言），不要出现任何“用户/user/楼主/本人/作者本人/博主本人”等禁词。`),
            j && j.length > 0)
          ) {
            const q = j.slice(0, 10).map((V, ne) => {
              const le = String(V.rolePersona || "").slice(0, 220),
                ie = String(V.style || "").slice(0, 80),
                X = String(V.boundUserPersona || "").slice(0, 160),
                je = String(V.boundUserName || "").slice(0, 20),
                xe = V.isBilingual === !0 ? "是" : "否",
                ye =
                  V.knowsUserIdentity === !0
                    ? `；绑定用户人设(仅供参考): ${X || "无"}${je ? `；绑定用户名: ${je}` : ""}`
                    : "";
              return `${ne + 1}. 网名: ${V.name}；人设(人物传记摘要): ${le || "无"}；风格: ${ie || "无"}${ye}；是否知道用户身份: ${V.knowsUserIdentity ? "是" : "否"}；双语开关: ${xe}`;
            }).join(`
`);
            P += `

【可出现在评论区的“居民评论者”（含通讯录好友，可选）】
下面这些是居民档案里开启了“是否评论”的角色。请在评论区中随机挑选 0-2 位让他们发评论（其余仍为随机路人）。
规则：
1) 如果使用某位居民评论者，评论的 user 必须**严格等于**该居民的网名（供系统匹配档案，前端不展示此字段）。
2) 评论内容必须符合其人设与风格，并且明确是在公共评论区讨论视频，**不是**与博主私聊。
3) **强制双语格式（仅对开启双语的居民）**：
   - 若某位居民评论者“双语开关: 是”，则他发的评论 content（含楼中楼 replies 的 content）必须输出为对象：{ "text": "外语原文", "zh": "中文翻译" }；
   - 且 text 必须是外语（禁止直接输出中文 text），zh 才允许中文。
4) **对视频博主一律视为陌生人（硬性）**：无论该居民与绑定用户在聊天里多熟，在本视频下**作者/博主就是陌生人**；禁止暧昧、关心体贴、嘘寒问暖、吃醋、撒娇、恋人/闺蜜口吻；禁止“老公/老婆/宝/亲/乖/想你/心疼/抱抱”等；只能像路人网友一样评视频。
5) **是否知道用户身份**仅指“若评论区里另有真实用户发言”时的认知，**不得**用来把博主当成绑定用户或熟人；禁止在正文 @ 绑定用户或直呼绑定用户姓名。
6) 评论要围绕视频内容本身，有观点/梗/吐槽，不要像对话剧情；正文禁止 @ 任何人、禁止写网友昵称。
7) **楼中楼 replies（硬性）**：若某条楼中楼的 user 等于某位「居民评论者」网名，则该条语气、认知、用词必须与该居民的 **人物传记(rolePersona)、风格(style)** 完全一致，**贴合度不得低于主评论**；禁止楼中楼「OOC」、跳戏成路人腔或与档案矛盾。若楼中楼为博主本人，须同样严格符合博主传记与风格。
8) **主评论与楼中楼同等**：居民在主评与 replies 中都必须遵守上述第 4、5、6 条（对博主陌生人、禁止绑定用户称呼等）。

居民列表：
${q}`;
          }
          (Array.isArray(L) &&
            L.length > 0 &&
            (P += `

【禁止冒充的昵称（硬性）】
以下昵称是“真实用户或绑定用户”，绝对禁止出现在任何评论的 user 字段（主评论与楼中楼都禁止）：
${L.map((q, V) => `${V + 1}. ${String(q).slice(0, 30)}`).join(`
`)}`),
            (P += `

【输出格式】
直接返回一个 JSON 数组，不要 Markdown 标记。每项：{ "user": "内部标识（路人用随机字母数字；居民评论者用列表中的网名；博主置顶用博主标识）", "content": ${I ? '{ "text": "外语", "zh": "中文" }' : '"评论"'}, "likes": 数字, "avatarStyle": "micah", "timestamp": "刚刚", "location": "北京", "replies": [] }`));
          const z = await yr(
            t,
            {
              messages: [
                { role: "system", content: $ },
                { role: "user", content: P },
              ],
              temperature: 0.9,
              max_tokens: 4e3,
            },
            { addApiLog: s, logContactName: "" },
          );
          if (!z || !z.trim()) return [];
          const O = z.match(/\[[\s\S]*\]/),
            Z = O ? JSON.parse(O[0]) : [],
            K = Array.isArray(Z) ? Z : [];
          return Yd(K, j, { bannedUserNames: L });
        } catch {
          return [];
        } finally {
          a(!1);
        }
      },
      A = async (M = {}) => {
        const {
          videoContent: E = "",
          author: S = {},
          action: j = "new_comment",
          targetComment: T,
          userText: I = "",
          bilingual: L = !1,
          knowsUserIdentity: B = !1,
          boundUserPersona: F = "",
          linkedMemories: D = "",
          publicUserPersona: $ = "",
          residentCommenters: P = [],
          bannedUserNames: z = [],
        } = M;
        if (!t || !t.endpoint || !t.key)
          return { replies: [], newComments: [] };
        a(!0);
        try {
          const O = `你是一个抖音评论区互动引擎。有一位真实观众刚刚在评论区发表了一条评论/回复。请生成接下来的互动：可能有视频作者回复，可能有路人回复，也可能新增几条别的评论。只返回 JSON，不要 Markdown。${
              L
                ? `

【双语模式】所有 replies/newComments 的 content 必须是对象：{ "text": "外语原文", "zh": "中文翻译" }。`
                : ""
            }`,
            Z = `【视频内容】
${Dx(E).slice(0, 600)}

【视频作者】（内部标识，勿写入回复正文）
${S.name || "作者"}
人物传记/人设摘要：${String(S.rolePersona || "").slice(0, 260)}
风格/语气：${String(S.style || "").slice(0, 120)}
是否知道观众即绑定用户：${B ? "是" : "否"}
公开抖音人设（互联网形象，仅公开侧）：${String($ || "").slice(0, 260) || "无"}
${
  B && (String(F || "").trim() || String(D || "").trim())
    ? `

【绑定用户人设/联通记忆（仅供作者内心参考，勿点名，勿复述原文）】
绑定用户人设摘要：${String(F || "").slice(0, 260) || "无"}
联通记忆摘要：${String(D || "").slice(0, 260) || "无"}`
    : ""
}

【真实观众】
刚发了一条评论（内容如下）。**禁止**在生成的任何 content 里写出该观众的真实昵称、网名或猜测其身份；**禁止**代替该观众续写其没说过的话；回复时像对匿名网友即可。

【观众刚刚的动作】
类型：${j === "reply" ? "楼中楼回复" : "发表主评论"}
${T ? `场景：正在回复某条已有评论（勿在生成内容中写出被回复者网名）。原评论摘要：${Dx(T.content).slice(0, 120)}` : ""}
观众输入内容：${String(I).slice(0, 200)}

【规则】
1) 生成 0-3 条对“这条观众发言”的回复（replies），回复者可以是**视频作者**、**随机路人**、或下方「居民评论者」列表中的某位（三选一组合）；replies 的 user 字段仅内部用：作者回复时 user 必须等于作者标识；路人用 8–16 位随机字母数字（勿像真人网名）；**若居民回复，user 必须严格等于该居民在列表中的网名**（供系统匹配档案）。
2) 可选：生成 0-2 条新的主评论（newComments），作为旁观讨论；newComments 的 user 同样为随机字母数字或居民网名（若用居民须符合下方档案）。
3) 作者与路人对**观众**一律匿名互动：
   - 无论是否知道观众即绑定用户，都**禁止**在正文里直呼对方姓名/网名/绑定用户名、禁止 @、禁止泄露身份信息。
   - 若「是否知道观众即绑定用户」为是：作者可以表现出“认得这个人/熟悉其口吻与梗”（例如老粉/你之前提过的梗/你一贯的风格），并可内化绑定用户人设/联通记忆来写得更贴合；但必须保持在公共评论区的分寸，避免过度亲密、暧昧、占有欲或私密细节外露。
   - 若「是否知道观众即绑定用户」为否：作者只能把观众当陌生网友，最多参考“公开抖音人设”理解其公开表达风格；禁止据此认亲、对号入座到聊天 App 绑定用户。
4) 所有 content 禁止 @ 任何人、禁止在正文里写网友昵称或抖音号。
5) 禁止：“用户/user/楼主/本人/作者本人/博主本人”等出现在 user 字段或正文中（作者 user 用作者标识除外）。
${
  P && P.length > 0
    ? `【居民评论者（通讯录/档案，楼中楼回复必须贴合人设）】
以下居民若出现在 replies/newComments 中，其 **user 必须等于网名**，且该条 **content 必须严格符合该居民的「人物传记 rolePersona」与「风格 style」**，与主帖评论区对该居民的要求一致；**禁止 OOC、禁止与档案矛盾**；对视频博主仍一律视为陌生人；**绑定用户名**不得出现在 user 或正文；若居民「双语开关: 是」则 content 须为 {text, zh}（text 外语、zh 中文）。
另外：**当某居民「是否知道用户身份: 否」时**，该居民在本次评论区互动里必须把“真实观众”当作完全陌生的网友对待——
- 禁止用熟人/暧昧/过分亲密口吻
- 禁止暗示“我认识你/我知道你是谁/你就是xxx/你之前跟我聊过/我看过你的聊天记录”等
- 禁止把观众当作其绑定用户
（当为“是”时也只能表现为“认得/熟悉梗”的程度，仍需保持公共评论区分寸，不得泄露私密信息）
${P.slice(0, 10).map((ne, le) => {
  const ie = String(ne.rolePersona || "").slice(0, 220),
    X = String(ne.style || "").slice(0, 80),
    je = String(ne.boundUserPersona || "").slice(0, 160),
    xe = String(ne.boundUserName || "").slice(0, 20),
    ye = String(ne.publicUserPersona || "").slice(0, 180),
    R = ne.isBilingual === !0 ? "是" : "否",
    oe = ne.knowsUserIdentity === !0 ? "是" : "否",
    ee =
      ne.knowsUserIdentity === !0
        ? `；绑定用户人设(勿写入正文): ${je || "无"}${xe ? `；绑定用户名(禁用): ${xe}` : ""}`
        : `；公开抖音人设(仅互联网形象): ${ye || "无"}；禁止代入聊天 App 绑定用户`;
  return `${le + 1}. 网名: ${ne.name}；人物传记: ${ie || "无"}；风格: ${X || "无"}${ee}；是否知道用户身份: ${oe}；双语: ${R}`;
}).join(`
`)}
`
    : ""
}
6) 返回结构：
{
  "replies": [ { "user": "内部标识", "content": ${L ? '{ "text": "外语", "zh": "中文" }' : '"回复内容"'}, "likes": 3, "avatarStyle": "micah", "location": "北京" } ],
  "newComments": [ { "user": "内部标识", "content": ${L ? '{ "text": "外语", "zh": "中文" }' : '"评论内容"'}, "likes": 10, "avatarStyle": "micah", "location": "上海", "replies": [] } ]
}`,
            K = await yr(
              t,
              {
                messages: [
                  { role: "system", content: O },
                  { role: "user", content: Z },
                ],
                temperature: 0.85,
              },
              { addApiLog: s, logContactName: S.name || "" },
            ),
            q = Gk(String(K || "")),
            V = { bannedUserNames: z, relaxBilingualContent: !0 };
          return {
            replies: Yd(
              (Array.isArray(q == null ? void 0 : q.replies)
                ? q.replies
                : []
              ).map((ne) => ({ ...ne, replies: [] })),
              P,
              V,
            ),
            newComments: Yd(
              Array.isArray(q == null ? void 0 : q.newComments)
                ? q.newComments
                : [],
              P,
              V,
            ),
          };
        } catch {
          return { replies: [], newComments: [] };
        } finally {
          a(!1);
        }
      },
      k = async (M = {}) => {
        const {
          videoContent: E = "",
          author: S = {},
          userCommentDisplayName: j = "网友",
          userText: T = "",
          otherCommentsDigest: I = "",
          threadContext: L = "",
          replyScene: B = "root_comment",
          mentioned: F = [],
          bilingual: D = !1,
          residentCommenters: $ = [],
          bannedUserNames: P = [],
        } = M;
        if (!t || !t.endpoint || !t.key) return { replies: [] };
        if (!Array.isArray(F) || F.length === 0) return { replies: [] };
        a(!0);
        try {
          const z = F.map((ie) =>
              String((ie == null ? void 0 : ie.name) || "").trim(),
            ).filter(Boolean),
            O = `你是一个抖音评论区互动引擎。观众在一条评论里 @ 了若干位好友。你的任务是生成楼中楼回复；**绝不允许**让「互关但未出现在下方被 @ 名单」里的任何人以网名或口吻出场。
路人回复要像真实抖音：可有杠精、喷子、阴阳怪气、无脑站队、和稀泥、理中客、吃瓜拱火、反串、对骂撕逼、缩写梗混用；**多条路人之间立场、语气要彼此不同**，避免全员复读机。
路人 **user 昵称**须像真实网友：**根据每条 content 的语气立场现起网感名**（以汉字为主，可少量英文），**禁止**用纯数字、**禁止**用无意义的乱码串当网名。只返回 JSON，不要 Markdown。${
              D
                ? `

【双语模式】所有 replies 的 content 必须是对象：{ "text": "外语原文", "zh": "中文翻译" }。`
                : ""
            }`,
            Z = F.map((ie, X) => {
              const je = String(ie.name || "").trim(),
                xe = String(ie.relationshipLabel || "").trim() || "已关注",
                ye = String(ie.rolePersona || "").slice(0, 520),
                R = String(ie.style || "").slice(0, 140),
                oe = String(ie.boundUserPersona || "").slice(0, 200),
                ee = String(ie.boundUserName || "").trim(),
                H = String(ie.publicUserPersona || "").slice(0, 220),
                Y = ie.knowsUserIdentity === !0 ? "是" : "否",
                U = ie.isBilingual === !0 ? "是" : "否",
                ce = String(ie.linkedMemories || "").slice(0, 220),
                se =
                  ie.knowsUserIdentity === !0
                    ? `；**认识用户=是**：回复必须同时贴合上方「人物传记」与下列「绑定观众人设」整体气质（可认得梗、像老粉），但**禁止**在正文直呼绑定显示名、**禁止**复述隐私与聊天原文；绑定人设摘要→ ${oe || "无"}${ee ? `；绑定显示名(禁用出现在正文): ${ee}` : ""}${ce ? `；联通记忆(勿复述): ${ce}` : ""}`
                    : `；**认识用户=否**：只能按陌生网友互动，可参考公开抖音人设（互联网形象）→ ${H || "无"}；禁止代入聊天 App 绑定用户身份`;
              return `${X + 1}. 网名: ${je}；与观众关系: ${xe}；人物传记(硬性，回复前必须逐句内化): ${ye || "无"}；风格(硬性): ${R || "无"}；是否知道观众即绑定用户: ${Y}；双语: ${U}${se}`;
            }).join(`
`),
            K = `【视频内容（须结合；勿与摘录矛盾）】
${Dx(E).slice(0, 1200)}

【视频作者（蓝 V；user 字段若等于下列作者名则表示作者本人发言）】
网名：${String((S == null ? void 0 : S.name) || "").trim() || "作者"}
内部 id（仅供 replyToRef 对照，勿写入正文）：${String((S == null ? void 0 : S.id) || "").trim() || "无"}

【该视频下已有其他评论（摘录；被 @ 者与路人写回复前都必须扫一眼，可点名反驳/赞同摘录里的观点，勿编造摘录里不存在的网名）】
${String(I || "").slice(0, 2800) || "（暂无摘录）"}
${
  String(L || "").trim()
    ? `【当前楼上下文（含本楼已出现的全部楼层摘要；观众在此楼中楼 @；写回复时必须利用本段与上段「其他评论」理解火药味与站队，勿断片）】
${String(L).slice(0, 4200)}`
    : "【场景】观众发的是视频下的主评论（顶层）；无单独父楼摘录时，路人从全视频评论摘录与视频语境切入。"
}
【回复场景】${B === "thread_reply" ? "thread_reply=观众正在某条已有评论的楼中楼里发言。" : "root_comment=观众发的是主评论。"}
${
  B === "thread_reply" && String(L || "").trim()
    ? `【楼中楼多向对话（硬性）】
除「被 @ 者每人 1～3 条、但其中**针对观众的 viewer 每人仅 1 条**（见硬性规则 1）」与「≥4 条**新路人**（网感汉字昵称，须多样：撕逼/阴阳/喷子/吃瓜/理中客等）」外，还须让同一条父评论链里出现**多种指向关系**，每条回复必须带 **replyToType**（小写）与按需的 **replyToRef**：
- replyToType=viewer → 回复对象是**当前发评的观众**（replyToRef 留空）
- replyToType=author → 回复对象是**视频作者**（replyToRef 留空）
- replyToType=mention → 回复对象是**某位被 @ 者**（replyToRef 填其**完整网名**，须与上方名单一致）
- replyToType=thread_parent → 回复对象是**父评楼主**（摘录里「父评」那句的发布者；replyToRef 留空）
- replyToType=thread_floor → 回复对象是**父楼里已有楼中楼的原评论者**（replyToRef **仅填阿拉伯数字 N**，与摘录「楼#N」的 N 完全一致，禁止填昵称、禁止填「第N楼」混写；若回父评楼主请用 thread_parent）

须尽量覆盖（可多条合并满足；同类可多几条）：
① 新路人昵称 **怼/帮/接话**父楼里的原路人（replyToType=thread_floor 或 thread_parent）
② 路人或被 @ 者，**回复观众、另一位被 @ 者、作者或父楼某层**（viewer / mention / author / thread_floor / thread_parent）
③ **原楼路人视角的续写**：由**新路人**发言，content 明显在接某楼#的火药味、站队、反撕（replyTo 指向对应 thread_floor / thread_parent）
④ **原楼「楼#N」里已出现过的路人可再发言**：若【当前楼上下文】摘录了某层网名，可让该**同一网名**作为 user **再出现 1～2 条**（表示原路人追评/回怼），**user 必须与摘录中该层网名逐字一致**；replyToType 优先用 thread_floor（replyToRef 填对应 N）或 thread_parent，内容须与摘录中该层立场连贯。
⑤ **视频作者**可有 **0～2 条**（user 必须等于作者网名），replyTo 可为 viewer、mention、thread_parent、thread_floor 之一，口吻贴合作者人设与视频
⑥ 允许「路人对路人」连环：路人互回时 replyToType 可用 thread_floor 指父楼旧层，或在 content 里用「你楼上那个」指代；**被 @ 者也可回复父楼里的路人、作者或另一位被 @ 者**（replyToType 正确填写，人设不 OOC）

若某条是「被 @ 者」发言：**每位被 @ 者至多 1 条** replyToType=viewer（针对观众）；若同一人设需多条，其余条**禁止**再为 viewer，须为 thread_floor / thread_parent / author / mention 之一。`
    : ""
}

【观众抖音昵称（可适度称呼；禁止写绑定用户名若与昵称不同）】
${String(j || "网友").slice(0, 40)}

【观众刚发的主评/楼中楼原文（含 @，勿改写）】
${String(T).slice(0, 400)}

【被 @ 的对象（每位 1～3 条；该角色每条 replies 的 user 必须严格等于下列对应「网名」）】
${Z}

【硬性规则】
1) **被 @ 名单（每位 1～3 条，同一网名可出现在多条 replies 的 user）**：对名单里**每一位**至少 **1 条**、至多 **3 条**；其中**恰好 1 条**须 replyToType=**viewer** 且内容明显在回应观众刚发原文；**同一网名下其余条目禁止 replyToType=viewer**（须改为回父楼/路人/作者/另一位被 @ 者：thread_floor / thread_parent / author / mention）。每条 user 必须等于该被 @ 者的「网名」。**禁止**名单外的任何具名居民/互关好友以真实网名出场。
2) **人设（硬性）**：写每一条被 @ 者的回复前，必须先对照其「人物传记」与「风格」：用词、态度、好恶、幽默感、禁忌必须与档案一致，**禁止 OOC**；须同时消化**视频内容 + 其他评论摘录 + 当前楼上下文 + 观众原文**，可对其他楼层观点表态，勿断片、勿无视楼上已有争论。
3) **互关与路人（硬性）**：除上述被 @ 名单外，**任何互关好友都不得出场**。另须写 **至少 4 条**由**新网感昵称**担任 user 的路人回复（可多至 8 条）：**以 2～8 个汉字为主**（可带少量英文字母，总长 ≤14 字），昵称须与该条 content 的立场/语气呼应，**禁止**纯数字、**禁止**连续三位以上数字、**禁止**无意义乱码当网名。**禁止**与作者网名、名单内任一网名**逐字相同**；**禁止**冒用通讯录/居民档案里**未在本场被 @** 的真实居民网名。  
   **例外（仅楼中楼）**：【当前楼上下文】里已出现的**原楼路人**允许按上文「④」用**完全相同旧网名**再发言 1～2 条；除此之外的新路人仍须用**新昵称**且不得与旧网名逐字撞车。
4) **楼中楼特供**：若【当前楼上下文】非空，则路人里 **至少 2 条**须明显「接楼」；且被 @ 者若有第二条及以后，应优先与楼内他人/作者/路人形成交锋或帮腔，而非重复第一句车轱辘话。
5) 可适度称呼观众（你 / 对方抖音昵称），禁止写绑定用户名（若与昵称不同）、禁止泄露私密聊天细节。
6) 总 replies：thread_reply 且父楼摘录非空时须 **≥ ${z.length + 10}**、建议不超过 ${Math.min(z.length * 3 + 22, 48)}；否则须 **≥ ${z.length + 6}**、建议不超过 ${Math.min(z.length * 3 + 12, 36)}；不要输出 newComments。
7) 每条必须含 **replyToType**（viewer|author|mention|thread_parent|thread_floor）；**replyToRef 必须与真实对象一致**：mention 填被 @ 者**完整网名**；thread_floor **仅填数字 N**（楼#N）。若实际回复对象是父楼路人而非观众，**禁止**用 viewer。缺省才按 viewer。root_comment 场景可几乎全为 viewer，亦可含 0～1 条 author→viewer。
8) 返回结构：
{ "replies": [ { "user": "网名", "content": ${D ? '{ "text": "外语", "zh": "中文" }' : '"回复"'}, "replyToType": "viewer", "replyToRef": "", "likes": 0, "avatarStyle": "micah", "location": "北京" } ] }`,
            q = await yr(
              t,
              {
                messages: [
                  { role: "system", content: O },
                  { role: "user", content: K },
                ],
                temperature: 0.92,
                max_tokens:
                  B === "thread_reply" && String(L || "").trim()
                    ? 5200
                    : String(I || "").trim().length > 800
                      ? 4e3
                      : 3200,
              },
              { addApiLog: s, logContactName: S.name || "" },
            ),
            V = Gk(String(q || "")),
            ne = {
              bannedUserNames: P,
              relaxBilingualContent: !0,
              preserveAtMentions: !0,
            };
          return {
            replies: Yd(
              (Array.isArray(V == null ? void 0 : V.replies)
                ? V.replies
                : []
              ).map((ie) => ({ ...ie, replies: [] })),
              $,
              ne,
            ),
          };
        } catch {
          return { replies: [] };
        } finally {
          a(!1);
        }
      },
      C = l.useCallback(
        async ({
          passerDisplayName: M,
          commentSnippet: E,
          videoSnippet: S,
        }) => {
          if (!(t != null && t.endpoint) || !(t != null && t.key)) return "";
          try {
            const j = `你是抖音里的陌生路人。你在公共评论区看到了某人刚发的评论，现在你要给对方发一条**私信**（不是评论）。
要求：口语自然，略带好奇、阴阳、挑衅或热情之一皆可；约 18～48 字；禁止 @人；禁止自称机器人/模型；只输出正文一句，不要引号或 Markdown。`,
              T = `你在评论区用的昵称近似：${String(M || "路人").slice(0, 24)}
对方刚发的评论节选：${String(E || "").slice(0, 320)}
视频文案/语境节选：${String(S || "").slice(0, 300)}`,
              I = await yr(
                t,
                {
                  messages: [
                    { role: "system", content: j },
                    { role: "user", content: T },
                  ],
                  temperature: 0.88,
                  max_tokens: 180,
                },
                { addApiLog: s, logContactName: "路人私信" },
              );
            return String(I || "")
              .replace(/^\s*["'「]|[」"']\s*$/g, "")
              .trim()
              .split(/\n/)[0]
              .slice(0, 120);
          } catch {
            return "";
          }
        },
        [t, s],
      );
    return {
      generateVideoWithComments: i,
      generateVideosWithCommentsBatch: o,
      simulatePostReaction: c,
      searchContent: p,
      generateResidentHotSearches: m,
      generateNpcHistoryVideos: d,
      generateNpcLikedVideos: u,
      generateNpcFollowingList: f,
      generateNpcReply: h,
      generateNearbyRolePrivateReply: x,
      generateNearbyRolePrivateReplyWithAffection: y,
      batchCheckFollowBack: v,
      followAddressBookContact: w,
      generateComments: _,
      generateCommentInteractions: A,
      generateCommentAtMentionInteractions: k,
      generateStrangerPasserDmLine: C,
      isGenerating: n,
    };
  },
  HJ = [
    "流量明星",
    "当红明星",
    "人气明星",
    "知名明星",
    "少年偶像",
    "人气偶像",
    "知名偶像",
    "偶像歌手",
    "偶像艺人",
    "选秀艺人",
    "选秀出道",
    "练习生",
    "男团成员",
    "女团成员",
    "男团偶像",
    "女团偶像",
    "C位出道",
    "成团出道",
    "荧幕明星",
    "荧幕偶像",
    "公众人物",
    "饭圈",
    "应援",
    "打榜",
    "爱豆",
    "idol",
    "Idol",
    "IDOL",
    "iDOL",
    "K-pop偶像",
    "kpop偶像",
    "顶流艺人",
    "顶流明星",
    "顶流偶像",
    "顶流爱豆",
  ];
function Hk(t) {
  if (typeof t != "string" || !t.trim()) return t;
  let s = t;
  const n = [...HJ].sort((a, r) => r.length - a.length);
  for (const a of n) a && s.includes(a) && (s = s.split(a).join(""));
  return (
    (s = s.replace(
      /(^|[\s，。、；：·•|/\\\-—（【「『])(明星|偶像|爱豆)(?=[\s，。、；：·•|/\\\-—）】」』]|$)/gi,
      "$1",
    )),
    (s = s.replace(/\s{2,}/g, " ").trim()),
    s || t
  );
}
function Am(t) {
  if (!t || typeof t != "object") return t;
  const s = { ...t },
    n = [
      "name",
      "tag",
      "bio",
      "intent",
      "height",
      "edu",
      "mbti",
      "looking",
      "ideal",
      "matchOpeningLine",
    ];
  for (const a of n) s[a] != null && (s[a] = Hk(String(s[a])));
  return (
    Array.isArray(s.tags) &&
      (s.tags = s.tags
        .map((a) => Hk(String(a ?? "")))
        .filter((a) => a.length > 0)),
    s
  );
}
const nu = {
    batchSize: 5,
    commentRange: [5, 20],
    historyLimit: 50,
    enableBGM: !0,
    worldSetting:
      "这是一个极度真实的短视频平台生态，汇聚了三教九流，流量至上。这里有光鲜亮丽的网红，也有渴望关注的普通人。内容涵盖娱乐圈八卦（内娱/韩娱/日娱）、擦边热舞、土味短剧、影视解说、灵异怪谈、硬核科普、甚至偶尔的广告。评论区是战场也是秀场，充满了玩梗、杠精、键盘侠、神评和互喷。不要全是正能量，要包含人性的复杂和下沉市场的真实感。",
    promptTemplate:
      "请生成一个极具抖音特色的短视频脚本。类型可以是：娱乐圈惊天大瓜、美女擦边热舞、男生秀腹肌、影视解说（注意悬疑感）、灵异事件、土味情话、或者带货广告。文案要短小精悍，甚至可以故意制造争议引发评论。",
    npcHistoryCount: 5,
  },
  zf = (t, s) => {
    if (!t) return "";
    if (t.sourceType === "contact" && t.contactId && Array.isArray(s)) {
      const n = s.find((r) => r && String(r.id) === String(t.contactId));
      if (n && String(n.setting ?? "").trim()) return String(n.setting);
    }
    return String(t.bio ?? "");
  };
function WJ(t, s, n) {
  const a = Array.isArray(t) ? t : [],
    r = (c, d) => {
      const u = String(c || "").trim(),
        f = (s || []).find((m) => m && m.name === u);
      if (f != null && f.avatar) return f.avatar;
      const p = (n || []).find((m) => m && (m.name === u || m.nickname === u));
      return (p != null && p.portrait) || (p != null && p.avatar)
        ? p.portrait || p.avatar
        : `https://api.dicebear.com/7.x/${d || "avataaars"}/svg?seed=${encodeURIComponent(u || "u")}`;
    },
    i = (c) => {
      const d = String(c || "").trim(),
        u = (s || []).find((f) => f && f.name === d);
      return u ? u.id : `temp_user_${d}`;
    },
    o = (c, d) => (typeof c == "number" && !Number.isNaN(c) ? c : d);
  return a.map((c, d) => {
    const u = Array.isArray(c.replies) ? c.replies : [],
      f = { name: c.user, avatar: r(c.user, c.avatarStyle), id: i(c.user) },
      p = [];
    return (
      u.forEach((m, h) => {
        const g = {
            name: m.user || "网友",
            avatar: r(m.user, m.avatarStyle),
            id: i(m.user),
          },
          x = h === 0 ? f : p[h - 1].user;
        p.push({
          id: Date.now() + d * 1e4 + h + 1,
          user: g,
          replyToUser: x,
          content: m.content || "",
          likes: m.likes || 0,
          timestamp: o(
            m.timestamp,
            Date.now() - Math.floor(Math.random() * 18e5),
          ),
          location: m.location || "未知",
          isLiked: !1,
        });
      }),
      {
        id: Date.now() + d,
        user: f,
        content: c.content,
        likes: c.likes || 0,
        timestamp: o(
          c.timestamp,
          Date.now() - Math.floor(Math.random() * 36e5),
        ),
        location: c.location || "未知",
        replyCount: p.length,
        isLiked: !1,
        replies: p,
      }
    );
  });
}
function yC(t, s = 72) {
  const a = ((r) => {
    if (r == null) return "";
    if (typeof r == "string") return r;
    if (typeof r == "object") {
      const i = r.text || r.foreign || r.en || "",
        o = r.zh || r.cn || r.translation || "";
      return `${i}
${o}`.trim();
    }
    return String(r);
  })(t)
    .replace(/\s+/g, " ")
    .trim();
  return a.length <= s ? a : `${a.slice(0, s)}…`;
}
function YJ(t, s, n, a) {
  const r = t.map((p) => p.user).filter((p) => p && p.name);
  if (r.length === 0) return [];
  const i = a || Date.now(),
    o = [];
  let c = 0;
  const d = Math.min(8, t.length);
  for (let p = 0; p < d; p++) {
    const m = t[p];
    o.push({
      id: i + c++,
      type: "comment",
      user: m.user,
      content: yC(m.content),
      timestamp: i - p * 2e3,
      read: !1,
      videoId: n.id,
      videoCover: n.cover,
    });
  }
  const u = Math.min(
    8,
    Math.max(2, Math.ceil(((s == null ? void 0 : s.likes) || 0) / 150)),
  );
  for (let p = 0; p < u; p++) {
    const m = r[p % r.length];
    o.push({
      id: i + c++,
      type: "like",
      user: m,
      content: "赞了你的作品",
      timestamp: i - 4e3 - p * 700,
      read: !1,
      videoId: n.id,
      videoCover: n.cover,
    });
  }
  const f = Math.min(
    4,
    Math.max(0, Math.ceil(((s == null ? void 0 : s.favorites) || 0) / 2)),
  );
  for (let p = 0; p < f; p++) {
    const m = r[(p + 1) % r.length];
    o.push({
      id: i + c++,
      type: "favorite",
      user: m,
      content: "收藏了你的作品",
      timestamp: i - 6e3 - p * 500,
      read: !1,
      videoId: n.id,
      videoCover: n.cover,
    });
  }
  return o.sort((p, m) => m.timestamp - p.timestamp);
}
function sy(t) {
  if (!t || typeof t != "object") return null;
  const s = String(t.id || "").trim();
  if (!s) return null;
  const n = Number(t.age);
  return {
    id: s,
    name: String(t.name ?? ""),
    age: n > 0 ? n : String(t.age ?? ""),
    tag: String(t.tag ?? ""),
    bio: String(t.bio ?? ""),
    intent: String(t.intent ?? ""),
    height: String(t.height ?? ""),
    edu: String(t.edu ?? ""),
    mbti: String(t.mbti ?? ""),
    looking: String(t.looking ?? ""),
    ideal: String(t.ideal ?? ""),
    tags: Array.isArray(t.tags)
      ? t.tags.map((a) => String(a ?? "")).filter(Boolean)
      : [],
    avatar: String(t.avatar ?? ""),
    truthUnlockAffection: (() => {
      const a = Number(t.truthUnlockAffection);
      return Number.isFinite(a)
        ? Math.max(0, Math.min(100, Math.round(a)))
        : 70;
    })(),
  };
}
const Wk = "video_app_nearby_public_cards_v1",
  VJ = "video_app_nearby_role_cards_v2",
  Yk = "video_app_nearby_affection_v1",
  JJ = {
    isCommentSectionOpen: !1,
    setIsCommentSectionOpen: () => {},
    commentingVideoId: null,
    openCommentSection: () => {},
    closeCommentSection: () => {},
    isShareOpen: !1,
    sharingVideoId: null,
    openShare: () => {},
    closeShare: () => {},
    isLoadingMore: !1,
    videos: [],
    allVideos: [],
    myVideos: [],
    currentUser: null,
    contacts: [],
    friends: [],
    following: [],
    npcs: [],
    flushPendingFollowsFromFriends: async () => {},
    followContactFromAddressBook: async () => ({ ok: !1 }),
    unfollowContactFromAddressBook: () => {},
    processDouyinChatAcceptFriends: async () => {},
    registerSearchUserStubs: () => {},
    refreshHotSearchesFromNpcs: async () => !1,
    settings: nu,
    activeVideoIndex: 0,
    setActiveVideoIndex: () => {},
    isPlaying: !1,
    setIsPlaying: () => {},
    enqueueCommentReplyNotifications: () => {},
    offerRandomPasserDmAfterComment: async () => {},
    notifications: [],
    setNotifications: () => {},
    privateChats: {},
    privateChatTyping: {},
    strangerChatPeers: {},
    nearbyTruthProfiles: {},
    nearbyPublicCardsById: {},
    mergeNearbyPublicCards: () => {},
    getNearbyPublicCard: () => null,
    sendPrivateMessage: async () => {},
    receivePrivateMessage: async () => {},
    upsertStrangerChatPeer: () => {},
    setNearbyTruthProfile: () => {},
    getNearbyTruthProfile: () => null,
    nearbyAffectionByPeer: {},
    nearbyAfterReplyPending: {},
    nearbyNeedBeforeSendRating: {},
    getNearbyAffection: () => 0,
    recordNearbyBeforeSendRating: () => {},
    recordNearbyAfterReplyRating: () => {},
    nearbyTruthUnlocked: () => !1,
    ensureNearbyChatRatingBaseline: () => {},
    summarizeNearbyChatHistory: async () => "",
    suspendFeedBgm: !1,
    setSuspendFeedBgm: () => {},
  },
  vC = l.createContext(JJ),
  Vk = [
    {
      id: "npc_gossip",
      name: "吃瓜前线",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gossip",
      bio: "娱乐圈搬运工，保真不保熟，关注我吃第一手瓜🍉",
      style: "震惊体、营销号风、八卦",
      boundUserPresets: [],
    },
    {
      id: "npc_pure",
      name: "纯欲小野猫",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pure",
      bio: "关注我，每晚都有新惊喜~ 💃",
      style: "擦边、暧昧、绿茶、诱惑",
      boundUserPresets: [],
    },
    {
      id: "npc_movie",
      name: "毒舌电影解说",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=movie",
      bio: "三分钟带你看完一部电影，注意看，这个男人叫小帅...",
      style: "AI配音感、快节奏、悬疑、解说",
      boundUserPresets: [],
    },
    {
      id: "npc_gym",
      name: "阿强健身",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gym",
      bio: "不办卡，只教干货，自律给我自由 💪",
      style: "秀肌肉、荷尔蒙、硬核、直男",
      boundUserPresets: [],
    },
    {
      id: "npc_troll",
      name: "理中客",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=troll",
      bio: "众人皆醉我独醒，不接受反驳",
      style: "杠精、反讽、引战、键盘侠",
      boundUserPresets: [],
    },
    {
      id: "npc_mom",
      name: "浩浩妈",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mom",
      bio: "记录浩浩的成长点滴，接母婴推广",
      style: "宝妈、碎碎念、晒娃、带货",
      boundUserPresets: [],
    },
    {
      id: "npc_horror",
      name: "午夜怪谈",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=horror",
      bio: "胆小慎入... 🚫",
      style: "灵异、恐怖、惊悚、阴间滤镜",
      boundUserPresets: [],
    },
  ];
function Jk(t) {
  return (t || []).filter((s) => s && s.includeInVideoRefresh !== !1);
}
const ei = () => l.useContext(vC),
  wC = ({ children: t }) => {
    const {
        contactsPublic: s,