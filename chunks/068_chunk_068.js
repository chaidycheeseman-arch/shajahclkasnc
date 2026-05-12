                        children: [
                          e.jsx("h3", {
                            className:
                              "text-[11px] uppercase tracking-[0.35em] text-[#d894a7]",
                            children: "自定义前台风格",
                          }),
                          e.jsx("button", {
                            type: "button",
                            role: "switch",
                            "aria-checked": M.useCustomStyle,
                            onClick: () =>
                              E((q) => ({
                                ...q,
                                useCustomStyle: !q.useCustomStyle,
                              })),
                            className: `relative h-8 w-[46px] shrink-0 rounded-full transition-colors ${M.useCustomStyle ? "bg-[#d894a7]" : "bg-white/15"}`,
                            children: e.jsx("span", {
                              className: `absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform ${M.useCustomStyle ? "left-[22px]" : "left-1"}`,
                            }),
                          }),
                        ],
                      }),
                      e.jsx("textarea", {
                        value: M.styleTags,
                        onChange: (q) =>
                          E((V) => ({ ...V, styleTags: q.target.value })),
                        disabled: !M.useCustomStyle,
                        className:
                          "w-full min-h-[88px] rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white/90 placeholder:text-white/25 focus:outline-none focus:ring-1 focus:ring-[#d894a7]/50 resize-y disabled:opacity-35 disabled:pointer-events-none",
                        placeholder:
                          "例如：港风、智性恋、冷感、胶片摄影爱好者…",
                        spellCheck: !1,
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: D,
                    className:
                      "w-full py-3.5 rounded-2xl bg-[#d894a7] text-black text-[14px] font-semibold",
                    children: "保存设置",
                  }),
                  S &&
                    e.jsx("p", {
                      className: "text-center text-[12px] text-emerald-400/90",
                      children: "已保存",
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  HQ = ({ onOpenChat: t, onOpenBazaarThread: s, onBack: n }) => {
    const {
        privateChats: a = {},
        strangerChatPeers: r = {},
        getNearbyPublicCard: i,
        getNearbyTruthProfile: o,
      } = ei(),
      [c, d] = l.useState([]);
    l.useEffect(() => {
      let m = !0;
      return (
        Jq().then((h) => {
          m && d(Array.isArray(h) ? h : []);
        }),
        () => {
          m = !1;
        }
      );
    }, []);
    const u = l.useMemo(() => {
        const m = [];
        return a
          ? (Object.entries(a).forEach(([h, g]) => {
              if (
                !Array.isArray(g) ||
                g.length === 0 ||
                !(
                  r[h] ||
                  (i == null ? void 0 : i(h)) ||
                  (o == null ? void 0 : o(h))
                )
              )
                return;
              const y = r[h],
                v = i == null ? void 0 : i(h),
                b = g[g.length - 1],
                N =
                  (y == null ? void 0 : y.name) ||
                  (v == null ? void 0 : v.name) ||
                  h,
                w =
                  (y == null ? void 0 : y.avatar) ||
                  (v == null ? void 0 : v.avatar) ||
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop";
              m.push({
                kind: "nearby",
                id: h,
                name: N,
                avatar: w,
                subtitle: (b == null ? void 0 : b.text) ?? "",
                timestamp: (b == null ? void 0 : b.timestamp) ?? 0,
                isUnread: !(b != null && b.isMe),
                user: { id: h, name: N, avatar: w },
              });
            }),
            m.sort((h, g) => (g.timestamp || 0) - (h.timestamp || 0)))
          : m;
      }, [a, r, i, o]),
      f = l.useMemo(
        () =>
          [
            ...c.map((h) => ({
              kind: "bazaar",
              id: `bazaar-${h.listingId}`,
              listingId: h.listingId,
              name: h.name,
              seller: h.seller,
              subtitle: h.subtitle,
              timestamp: h.timestamp || 0,
              isUnread: !1,
              hasOrder: h.hasOrder,
            })),
            ...u,
          ].sort((h, g) => (g.timestamp || 0) - (h.timestamp || 0)),
        [c, u],
      ),
      p = (m) => {
        if (!m) return "";
        const h = new Date(m),
          g = new Date();
        if (
          h.getFullYear() === g.getFullYear() &&
          h.getMonth() === g.getMonth() &&
          h.getDate() === g.getDate()
        )
          return h
            .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            .toUpperCase();
        const y = Math.floor(
          (g.setHours(0, 0, 0, 0) - new Date(h).setHours(0, 0, 0, 0)) / 864e5,
        );
        return y === 1
          ? "Yesterday"
          : y > 1 && y < 7
            ? h.toLocaleDateString([], { weekday: "long" })
            : h.toLocaleDateString([], { day: "2-digit", month: "short" });
      };
    return e.jsx("div", {
      className: "h-full w-full bg-[#080808] text-[#e5e5e5] overflow-y-auto",
      children: e.jsxs("div", {
        className:
          "w-full max-w-[430px] min-h-full mx-auto px-6 pt-[60px] pb-[120px] bg-[linear-gradient(180deg,rgba(226,166,183,0.03)_0%,transparent_30%)]",
        children: [
          e.jsxs("header", {
            className: "mb-4 border-b border-white/10 pb-3",
            children: [
              e.jsx("span", {
                className:
                  "mb-3 block text-[10px] uppercase tracking-[0.5em] text-[#E2A6B7] italic",
                style: {
                  fontFamily: "'Playfair Display','Times New Roman',serif",
                },
                children: "Archives",
              }),
              e.jsx("h1", {
                className:
                  "text-[36px] leading-none -tracking-[0.03em] italic cursor-pointer active:opacity-80",
                style: {
                  fontFamily: "'Playfair Display','Times New Roman',serif",
                },
                onClick: () => (n == null ? void 0 : n()),
                role: "button",
                "aria-label": "返回桌面",
                children: "The Echoes",
              }),
            ],
          }),
          f.length === 0
            ? e.jsx("div", {
                className: "py-20 text-center text-white/35 text-sm",
                children: "暂无会话：去首页匹配，或在集市发起议价",
              })
            : e.jsx("div", {
                className: "flex flex-col",
                children: f.map((m, h) =>
                  e.jsxs(
                    "button",
                    {
                      type: "button",
                      className:
                        "group relative flex w-full items-start border-b border-white/[0.04] py-6 text-left transition-all duration-300 active:bg-white/[0.02] active:pl-2",
                      onClick: () => {
                        m.kind === "bazaar"
                          ? s == null || s(m.listingId)
                          : t == null || t(m.user);
                      },
                      children: [
                        e.jsx("div", {
                          className:
                            "min-w-10 pt-1 text-[9px] font-semibold text-[#8E626E]",
                          children: `${String(h + 1).padStart(2, "0")}/`,
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            e.jsxs("div", {
                              className:
                                "mb-1.5 flex items-end justify-between gap-2",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center min-w-0 gap-2",
                                  children: [
                                    m.kind === "bazaar"
                                      ? e.jsx("div", {
                                          className:
                                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2A6B7]/35 bg-[#E2A6B7]/10",
                                          children: e.jsx(md, {
                                            className: "h-4 w-4 text-[#E2A6B7]",
                                            strokeWidth: 1.5,
                                            "aria-hidden": !0,
                                          }),
                                        })
                                      : null,
                                    e.jsxs("div", {
                                      className: "flex min-w-0 flex-col",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-2 min-w-0",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "truncate text-[18px] font-normal -tracking-[0.01em]",
                                              style: {
                                                fontFamily:
                                                  "'Playfair Display','Times New Roman',serif",
                                              },
                                              children: m.name,
                                            }),
                                            m.kind === "bazaar"
                                              ? e.jsx("span", {
                                                  className:
                                                    "shrink-0 rounded-sm border border-[#E2A6B7]/40 bg-[#E2A6B7]/10 px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-[0.12em] text-[#E2A6B7]",
                                                  children: "集市",
                                                })
                                              : null,
                                            m.isUnread
                                              ? e.jsx("span", {
                                                  className:
                                                    "ml-0.5 h-1 w-1 shrink-0 rounded-full bg-[#E2A6B7] shadow-[0_0_10px_#E2A6B7]",
                                                })
                                              : null,
                                          ],
                                        }),
                                        m.kind === "bazaar" && m.seller
                                          ? e.jsx("span", {
                                              className:
                                                "truncate text-[10px] text-zinc-500",
                                              children: m.seller,
                                            })
                                          : null,
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className:
                                    "shrink-0 text-[9px] uppercase tracking-[0.1em] text-[#A1A1AA]",
                                  children: p(m.timestamp),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "truncate pl-0 text-[13px] leading-[1.5] font-light text-[#A1A1AA]/80",
                              children:
                                m.kind === "bazaar" && m.hasOrder
                                  ? e.jsx("span", {
                                      className: "text-[#E2A6B7]/90",
                                      children: m.subtitle || "…",
                                    })
                                  : m.subtitle || "…",
                            }),
                          ],
                        }),
                      ],
                    },
                    m.id,
                  ),
                ),
              }),
        ],
      }),
    });
  },
  WQ = ({ onClose: t, showPhoneCase: s, caseSize: n }) => {
    const [a, r] = l.useState("home"),
      [i, o] = l.useState(0),
      [c, d] = l.useState(null),
      [u, f] = l.useState(!1),
      [p, m] = l.useState(null);
    l.useCallback((v) => {
      d(v);
    }, []);
    const h = l.useCallback(() => {
        d(null);
      }, []),
      g = l.useCallback((v) => {
        v &&
          (r("bazaar"),
          m({ listingId: String(v), openChat: !0, fromEchoes: !0 }));
      }, []),
      x = l.useCallback(() => m(null), []),
      y = !c && !u;
    return e.jsxs("div", {
      className: "h-full w-full bg-black flex flex-col relative font-sans",
      children: [
        e.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden relative",
          children: c
            ? e.jsx(EQ, {
                onClose: h,
                user: c,
                onViewProfile: () => {},
                onVideoClick: () => {},
              })
            : a === "home"
              ? e.jsx("div", {
                  className: "h-full w-full relative",
                  children: e.jsx(GQ, {
                    refreshToken: i,
                    contentTopClassName: "pt-10",
                    onBack: t,
                    onRefresh: () => o((v) => v + 1),
                  }),
                })
              : a === "bazaar"
                ? e.jsx(SQ, {
                    onClose: t,
                    onOverlayDepthChange: f,
                    bazaarResumeRequest: p,
                    onBazaarResumeConsumed: x,
                    onLeaveChatToEchoes: () => r("messages"),
                  })
                : e.jsx(HQ, {
                    onOpenChat: (v) => {
                      d(v);
                    },
                    onOpenBazaarThread: g,
                    onBack: t,
                  }),
        }),
        y &&
          e.jsxs("div", {
            className:
              "absolute bottom-[30px] left-1/2 z-30 -translate-x-1/2 flex items-center gap-1.5 rounded-[30px] border border-white/10 bg-[rgba(18,18,18,0.8)] p-1.5 text-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-[20px]",
            children: [
              e.jsxs("button", {
                type: "button",
                title: "Home",
                "aria-label": "Home",
                onClick: () => r("home"),
                className: `flex items-center gap-2 rounded-3xl px-4 py-2.5 transition-all duration-300 ${a === "home" ? "bg-[rgba(226,166,183,0.12)] text-[#E2A6B7] shadow-[inset_0_0_0_1px_rgba(226,166,183,0.15)]" : "text-white/40"}`,
                children: [
                  e.jsx(Ko, { size: 20, strokeWidth: 1.5 }),
                  a === "home" &&
                    e.jsx("span", {
                      className:
                        "text-[11px] tracking-[0.12em] uppercase font-medium italic serif",
                      children: "Home",
                    }),
                ],
              }),
              e.jsxs("button", {
                type: "button",
                title: "Bazaar",
                "aria-label": "Bazaar",
                onClick: () => r("bazaar"),
                className: `flex items-center gap-2 rounded-3xl px-4 py-2.5 transition-all duration-300 ${a === "bazaar" ? "bg-[rgba(226,166,183,0.12)] text-[#E2A6B7] shadow-[inset_0_0_0_1px_rgba(226,166,183,0.15)]" : "text-white/40"}`,
                children: [
                  e.jsx(md, { size: 20, strokeWidth: 1.5 }),
                  a === "bazaar" &&
                    e.jsx("span", {
                      className:
                        "text-[11px] tracking-[0.12em] uppercase font-medium italic serif",
                      children: "Bazaar",
                    }),
                ],
              }),
              e.jsxs("button", {
                type: "button",
                title: "Chat",
                "aria-label": "Chat",
                onClick: () => r("messages"),
                className: `flex items-center gap-2 rounded-3xl px-4 py-2.5 transition-all duration-300 ${a === "messages" ? "bg-[rgba(226,166,183,0.12)] text-[#E2A6B7] shadow-[inset_0_0_0_1px_rgba(226,166,183,0.15)]" : "text-white/40"}`,
                children: [
                  e.jsx(Ar, { size: 20, strokeWidth: 1.5 }),
                  a === "messages" &&
                    e.jsx("span", {
                      className:
                        "text-[11px] tracking-[0.12em] uppercase font-medium italic serif",
                      children: "Chat",
                    }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  YQ = (t) => e.jsx(wC, { children: e.jsx(WQ, { ...t }) }),
  VQ = "MailAppDB",
  JQ = 1,
  bi = { SETTINGS: "settings", FILES: "files" },
  Qu = () =>
    new Promise((t, s) => {
      const n = indexedDB.open(VQ, JQ);
      ((n.onerror = (a) => s("Database error: " + a.target.error)),
        (n.onupgradeneeded = (a) => {
          const r = a.target.result;
          (r.objectStoreNames.contains(bi.SETTINGS) ||
            r.createObjectStore(bi.SETTINGS, { keyPath: "key" }),
            r.objectStoreNames.contains(bi.FILES) ||
              r.createObjectStore(bi.FILES, { keyPath: "id" }));
        }),
        (n.onsuccess = (a) => t(a.target.result)));
    }),
  Sa = async (t, s) => {
    const n = await Qu();
    return new Promise((a, r) => {
      const c = n
        .transaction([bi.SETTINGS], "readwrite")
        .objectStore(bi.SETTINGS)
        .put({ key: t, value: s });
      ((c.onsuccess = () => a()), (c.onerror = (d) => r(d.target.error)));
    });
  },
  Rr = async (t) => {
    const s = await Qu();
    return new Promise((n, a) => {
      const o = s
        .transaction([bi.SETTINGS], "readonly")
        .objectStore(bi.SETTINGS)
        .get(t);
      ((o.onsuccess = (c) => {
        var d;
        return n((d = c.target.result) == null ? void 0 : d.value);
      }),
        (o.onerror = (c) => a(c.target.error)));
    });
  },
  jh = async (t, s) => {
    const n = await Qu();
    return new Promise((a, r) => {
      const c = n
        .transaction([bi.FILES], "readwrite")
        .objectStore(bi.FILES)
        .put({ id: t, file: s, timestamp: Date.now() });
      ((c.onsuccess = () => a(t)), (c.onerror = (d) => r(d.target.error)));
    });
  },
  _4 = async (t) => {
    const s = await Qu();
    return new Promise((n, a) => {
      const o = s
        .transaction([bi.FILES], "readonly")
        .objectStore(bi.FILES)
        .get(t);
      ((o.onsuccess = (c) => {
        var d;
        return n((d = c.target.result) == null ? void 0 : d.file);
      }),
        (o.onerror = (c) => a(c.target.error)));
    });
  },
  KQ = async () => {
    const t = await Qu();
    return new Promise((s, n) => {
      const i = t
        .transaction([bi.FILES], "readonly")
        .objectStore(bi.FILES)
        .getAll();
      ((i.onsuccess = (o) => s(o.target.result)),
        (i.onerror = (o) => n(o.target.error)));
    });
  },
  qQ = async () => {
    const t = await Qu();
    return new Promise((s, n) => {
      const i = t
        .transaction([bi.SETTINGS], "readonly")
        .objectStore(bi.SETTINGS)
        .getAll();
      ((i.onsuccess = (o) => s(o.target.result)),
        (i.onerror = (o) => n(o.target.error)));
    });
  },
  oy = "echo_ui_scheme";
function A4(t) {
  return t === "day" ? "day" : "night";
}
function QQ(t) {
  return t === "day"
    ? {
        "--e-page": "#ffffff",
        "--e-deep": "#ffffff",
        "--e-deep-80": "rgba(255, 255, 255, 0.92)",
        "--e-deep-90": "rgba(255, 255, 255, 0.96)",
        "--e-canvas": "#fafafa",
        "--e-raised": "#ffffff",
        "--e-raised-tint": "#f8fafc",
        "--e-surface": "#e2e8f0",
        "--e-surface2": "#f1f5f9",
        "--e-surface-90": "rgba(226, 232, 240, 0.92)",
        "--e-line": "#e2e8f0",
        "--e-line-80": "rgba(226, 232, 240, 0.85)",
        "--e-line-strong": "#cbd5e1",
        "--e-line-accent": "#94a3b8",
        "--e-line-warm": "#e2e8f0",
        "--e-line-inner": "#e2e8f0",
        "--e-divider-strong": "rgba(203, 213, 225, 0.85)",
        "--e-mid": "#64748b",
        "--e-dim": "#64748b",
        "--e-muted": "#64748b",
        "--e-soft": "#64748b",
        "--e-body": "#475569",
        "--e-primary": "#0f172a",
        "--e-contrast": "#0f172a",
        "--e-black": "#f1f5f9",
        "--e-hover": "#e2e8f0",
        "--e-hover-strong": "#cbd5e1",
        "--e-grad-from": "#ffffff",
        "--e-grad-to": "#fafafa",
        "--e-grad-end": "#f5f5f5",
        "--e-placeholder": "#94a3b8",
        "--e-mid-soft": "#64748b",
        "--e-hover-text": "#475569",
        "--e-overlay": "rgba(15, 23, 42, 0.55)",
        "--e-overlay-soft": "rgba(15, 23, 42, 0.42)",
        "--e-overlay-mid": "rgba(148, 163, 184, 0.35)",
        "--e-overlay-40": "rgba(148, 163, 184, 0.22)",
        "--e-overlay-50": "rgba(148, 163, 184, 0.28)",
        "--e-overlay-60": "rgba(148, 163, 184, 0.32)",
        "--e-overlay-70": "rgba(148, 163, 184, 0.38)",
        "--e-overlay-80": "rgba(15, 23, 42, 0.4)",
        "--e-overlay-85": "rgba(15, 23, 42, 0.48)",
        "--e-overlay-90": "rgba(15, 23, 42, 0.55)",
        "--e-cyan": "#0284c7",
        "--e-mint": "#059669",
        "--e-tw-50": "rgba(15, 23, 42, 0.45)",
        "--e-tw-60": "rgba(15, 23, 42, 0.55)",
        "--e-tw-90": "rgba(15, 23, 42, 0.92)",
        "--e-tw-30": "rgba(148, 163, 184, 0.45)",
        "--e-border-glass-10": "rgba(15, 23, 42, 0.08)",
        "--e-border-glass-20": "rgba(15, 23, 42, 0.12)",
        "--e-border-glass-30": "rgba(15, 23, 42, 0.2)",
        "--e-border-glass-50": "rgba(15, 23, 42, 0.35)",
        "--e-glass-hover-10": "rgba(15, 23, 42, 0.06)",
        "--e-white-5-hover": "rgba(15, 23, 42, 0.04)",
        "--e-vignette": "rgba(241, 245, 249, 0.72)",
        "--e-scan-tint": "rgba(2, 132, 199, 0.04)",
        "--e-noise-line": "rgba(15, 23, 42, 0.06)",
        "--e-grid": "rgba(15, 23, 42, 0.06)",
        "--e-narrative-glow": "rgba(148, 163, 184, 0.18)",
        "--e-frame": "transparent",
        "--e-cta": "#e2e8f0",
        "--e-cta-hover": "#ffffff",
      }
    : {
        "--e-page": "#050505",
        "--e-deep": "#020202",
        "--e-deep-80": "rgba(2, 2, 2, 0.8)",
        "--e-deep-90": "rgba(2, 2, 2, 0.9)",
        "--e-canvas": "#080808",
        "--e-raised": "#0a0a0a",
        "--e-raised-tint": "#0a0a0c",
        "--e-surface": "#111111",
        "--e-surface2": "#1a1a1a",
        "--e-surface-90": "rgba(17, 17, 17, 0.9)",
        "--e-line": "#222222",
        "--e-line-80": "rgba(34, 34, 34, 0.8)",
        "--e-line-strong": "#333333",
        "--e-line-accent": "#444444",
        "--e-line-warm": "#2a2a2a",
        "--e-line-inner": "#1a1a1a",
        "--e-divider-strong": "rgba(51, 51, 51, 0.8)",
        "--e-mid": "#555555",
        "--e-dim": "#444444",
        "--e-muted": "#666666",
        "--e-soft": "#888888",
        "--e-body": "#cccccc",
        "--e-primary": "#eaeaea",
        "--e-contrast": "#ffffff",
        "--e-black": "#000000",
        "--e-hover": "#222222",
        "--e-hover-strong": "#111111",
        "--e-grad-from": "#0a1012",
        "--e-grad-to": "#060808",
        "--e-grad-end": "#040404",
        "--e-placeholder": "#3a3a3a",
        "--e-mid-soft": "#9a9a9a",
        "--e-hover-text": "#aaaaaa",
        "--e-overlay": "rgba(0, 0, 0, 0.9)",
        "--e-overlay-soft": "rgba(0, 0, 0, 0.8)",
        "--e-overlay-mid": "rgba(0, 0, 0, 0.5)",
        "--e-overlay-40": "rgba(0, 0, 0, 0.4)",
        "--e-overlay-50": "rgba(0, 0, 0, 0.5)",
        "--e-overlay-60": "rgba(0, 0, 0, 0.6)",
        "--e-overlay-70": "rgba(0, 0, 0, 0.7)",
        "--e-overlay-80": "rgba(0, 0, 0, 0.8)",
        "--e-overlay-85": "rgba(0, 0, 0, 0.85)",
        "--e-overlay-90": "rgba(0, 0, 0, 0.9)",
        "--e-cyan": "#00ffff",
        "--e-mint": "#00ff9d",
        "--e-tw-50": "rgba(255, 255, 255, 0.5)",
        "--e-tw-60": "rgba(255, 255, 255, 0.6)",
        "--e-tw-90": "rgba(255, 255, 255, 0.9)",
        "--e-tw-30": "rgba(255, 255, 255, 0.3)",
        "--e-border-glass-10": "rgba(255, 255, 255, 0.1)",
        "--e-border-glass-20": "rgba(255, 255, 255, 0.2)",
        "--e-border-glass-30": "rgba(255, 255, 255, 0.3)",
        "--e-border-glass-50": "rgba(255, 255, 255, 0.5)",
        "--e-glass-hover-10": "rgba(255, 255, 255, 0.1)",
        "--e-white-5-hover": "rgba(255, 255, 255, 0.05)",
        "--e-vignette": "rgba(0, 0, 0, 0.8)",
        "--e-scan-tint": "rgba(255, 255, 255, 0.03)",
        "--e-noise-line": "rgba(0, 0, 0, 0.1)",
        "--e-grid": "rgba(255, 255, 255, 0.05)",
        "--e-narrative-glow": "rgba(0, 0, 0, 0.35)",
        "--e-frame": "rgba(255, 255, 255, 0.02)",
        "--e-cta": "#eaeaea",
        "--e-cta-hover": "#ffffff",
      };
}
const RC = l.createContext(void 0),
  ZQ =
    "你是 Echo App 的时空鉴定与叙事引擎。严格按用户消息中的格式与字段要求输出；若要求 JSON，则只返回可解析 JSON，不要 Markdown 代码块。";
function XQ(t) {
  return (Array.isArray(t) ? t : []).map((s) => {
    const n = s == null ? void 0 : s.sender,
      a = String(
        (s == null ? void 0 : s.text) ?? (s == null ? void 0 : s.content) ?? "",
      );
    return { role: n === "me" ? "user" : "assistant", content: a };
  });
}
async function dc({
  apiConfig: t,
  addApiLog: s,
  messages: n,
  logScene: a = "echo_general",
  logContactName: r = "Echo",
  systemPrompt: i,
}) {
  const c = [
    {
      role: "system",
      content: typeof i == "string" && i.trim() ? i.trim() : ZQ,
    },
    ...XQ(n),
  ];
  return cr(
    t,
    { messages: c, temperature: (t == null ? void 0 : t.temperature) ?? 0.7 },
    { addApiLog: s, logScene: a, logContactName: r },
  );
}
const Yx = "echo_expedition_archives_v1",
  C4 = 60;
function PC(t) {
  return t && typeof t == "object" && !Array.isArray(t)
    ? {
        third_person_arc: String(
          t.third_person_arc ?? t.third_person_story ?? "",
        )
          .trim()
          .slice(0, 9e3),
        first_person_soliloquy: String(
          t.first_person_soliloquy ??
            t.first_person_voice ??
            t.inner_monologue ??
            "",
        )
          .trim()
          .slice(0, 4e3),
      }
    : typeof t == "string" && t.trim()
      ? { third_person_arc: t.trim().slice(0, 9e3), first_person_soliloquy: "" }
      : { third_person_arc: "", first_person_soliloquy: "" };
}
function Nh(t) {
  const s = PC(t);
  return { third: s.third_person_arc, first: s.first_person_soliloquy };
}
function Dm(t) {
  if (!t || typeof t != "object") return { third: "", first: "" };
  let s = String(t.third_person_arc ?? t.third_person_story ?? "")
    .trim()
    .slice(0, 4500);
  const n = String(
    t.first_person_soliloquy ?? t.first_person_voice ?? t.inner_monologue ?? "",
  )
    .trim()
    .slice(0, 2e3);
  return (
    s ||
      (s = String(t.story ?? "")
        .trim()
        .slice(0, 4500)),
    { third: s, first: n }
  );
}
function M4(t) {
  if (!t || typeof t != "object") return null;
  const s = Array.isArray(t.npc_epilogues)
      ? t.npc_epilogues
          .map((a) => {
            const r = String(
                (a == null ? void 0 : a.third_person_arc) ??
                  (a == null ? void 0 : a.third_person_story) ??
                  "",
              )
                .trim()
                .slice(0, 4500),
              i = String(
                (a == null ? void 0 : a.first_person_soliloquy) ??
                  (a == null ? void 0 : a.first_person_voice) ??
                  (a == null ? void 0 : a.inner_monologue) ??
                  "",
              )
                .trim()
                .slice(0, 2e3),
              o = String((a == null ? void 0 : a.story) ?? "")
                .trim()
                .slice(0, 4500);
            return {
              scene_npc_id: String(
                (a == null ? void 0 : a.scene_npc_id) ??
                  (a == null ? void 0 : a.id) ??
                  "",
              )
                .trim()
                .slice(0, 48),
              call_name: String((a == null ? void 0 : a.call_name) ?? "")
                .trim()
                .slice(0, 80),
              role_tag: String((a == null ? void 0 : a.role_tag) ?? "")
                .trim()
                .slice(0, 48),
              third_person_arc: r || o,
              first_person_soliloquy: i,
              story: o,
            };
          })
          .filter((a) => a.scene_npc_id || a.call_name)
          .slice(0, 14)
      : [],
    n = Array.isArray(t.unresolved_hooks)
      ? t.unresolved_hooks
          .map((a) =>
            String(a ?? "")
              .trim()
              .slice(0, 420),
          )
          .filter(Boolean)
          .slice(0, 18)
      : [];
  return {
    truth_story: String(t.truth_story ?? "")
      .trim()
      .slice(0, 9e3),
    boss_epilogue: PC(t.boss_epilogue),
    npc_epilogues: s,
    unresolved_hooks: n,
  };
}
function T4(t, s = 7e3) {
  if (!Array.isArray(t)) return "";
  const n = [];
  for (const a of t)
    if ((a == null ? void 0 : a.type) === "node" && a.data) {
      const r = String(a.data.title || "").slice(0, 120),
        i = String(a.data.situation_summary || "").slice(0, 280);
      let o = "";
      (Array.isArray(a.data.scene_npcs) &&
        a.data.scene_npcs.length &&
        (o = JSON.stringify(a.data.scene_npcs).slice(0, 2200)),
        n.push(`[节点] ${r}
${i}
${o}`));
    } else
      (a == null ? void 0 : a.type) === "choice"
        ? n.push(`[选择] ${String(a.text || "").slice(0, 400)}`)
        : (a == null ? void 0 : a.type) === "resolution" &&
          a.data &&
          n.push(`[结果] ${String(a.data.description || "").slice(0, 520)}`);
  return n
    .join(
      `
---
`,
    )
    .slice(0, s);
}
function eZ() {
  return `arch_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}
const tZ = 4800,
  sZ = 1600,
  nZ = 480,
  aZ = 3200;
function rZ(t) {
  if (!Array.isArray(t) || !t.length) return [];
  const s = 120;
  return (t.length > s ? t.slice(0, s) : t)
    .map((a, r) => {
      if (
        (a == null ? void 0 : a.type) === "node" &&
        a.data &&
        typeof a.data == "object"
      ) {
        const i = a.data;
        let o = "";
        if (Array.isArray(i.scene_npcs) && i.scene_npcs.length)
          try {
            o = JSON.stringify(i.scene_npcs).slice(0, aZ);
          } catch {
            o = "";
          }
        return {
          type: "node",
          index: r,
          data: {
            title: String(i.title || "").slice(0, 220),
            situation_summary: String(i.situation_summary || "").slice(0, 800),
            description: String(i.description || "").slice(0, tZ),
            scene_npcs_json: o,
            options: Array.isArray(i.options)
              ? i.options.map((c) => ({
                  id: String((c == null ? void 0 : c.id) ?? "").slice(0, 64),
                  text: String((c == null ? void 0 : c.text) ?? "").slice(
                    0,
                    360,
                  ),
                }))
              : [],
          },
        };
      }
      if ((a == null ? void 0 : a.type) === "choice")
        return {
          type: "choice",
          index: r,
          text: String(a.text || "").slice(0, nZ),
        };
      if (
        (a == null ? void 0 : a.type) === "resolution" &&
        a.data &&
        typeof a.data == "object"
      ) {
        const i = a.data;
        return {
          type: "resolution",
          index: r,
          data: {
            title: String(i.title || "").slice(0, 120),
            description: String(i.description || "").slice(0, sZ),
          },
        };
      }
      return null;
    })
    .filter(Boolean);
}
function iZ(t, s = 11e3) {
  if (!Array.isArray(t) || !t.length) return "";
  const n = [];
  let a = 0;
  for (const r of t)
    if (r.type === "node" && r.data) {
      a++;
      const i = r.data;
      (n.push(`---节点${a}---`),
        i.title && n.push(`标题: ${i.title}`),
        i.situation_summary && n.push(`摘要: ${i.situation_summary}`),
        i.description && n.push(`正文: ${i.description}`),
        i.scene_npcs_json && n.push(`scene_npcs(JSON): ${i.scene_npcs_json}`),
        Array.isArray(i.options) &&
          i.options.length &&
          n.push(
            `选项: ${i.options
              .map((o) => `${o.id}:${o.text}`)
              .join(" | ")
              .slice(0, 1800)}`,
          ));
    } else if (r.type === "choice") n.push("---玩家选择---", r.text || "");
    else if (r.type === "resolution" && r.data) {
      const i = r.data.title
        ? `${r.data.title}
`
        : "";
      n.push("---推进结果---", `${i}${r.data.description || ""}`);
    }
  return n
    .join(
      `
`,
    )
    .slice(0, s);
}
function OC(t) {
  if (!Array.isArray(t) || !t.length) return "";
  const s = ["## 远征剧情回顾", ""];
  let n = 0;
  for (const a of t)
    if (a.type === "node" && a.data) {
      n++;
      const r = a.data;
      (s.push(`### 节点 ${n}${r.title ? ` · ${r.title}` : ""}`, ""),
        r.situation_summary && s.push(r.situation_summary, ""),
        r.description && s.push(r.description, ""));
    } else
      a.type === "choice"
        ? s.push("> **选择**", "", a.text || "", "")
        : a.type === "resolution" &&
          a.data &&
          s.push(
            "#### 推进结果",
            "",
            a.data.title
              ? `*${a.data.title}*

`
              : "",
            a.data.description || "",
            "",
          );
  return s
    .join(
      `
`,
    )
    .trim();
}
const I4 = "echo_expedition_leting_binding";
function oZ(t) {
  const n = String(t ?? "").trim(),
    a = n.indexOf("{");
  if (a < 0) throw new Error("no json");
  let r = 0,
    i = !1,
    o = !1;
  for (let c = a; c < n.length; c++) {
    const d = n[c];
    if (i) {
      if (o) {
        o = !1;
        continue;
      }
      if (d === "\\") {
        o = !0;
        continue;
      }
      d === '"' && (i = !1);
      continue;
    }
    if (d === '"') {
      i = !0;
      continue;
    }
    if (d === "{") r++;
    else if (d === "}" && (r--, r === 0)) return JSON.parse(n.slice(a, c + 1));
  }
  throw new Error("no json");
}
function lZ(t, s) {
  const n = Array.isArray(t) ? t.map(String).filter(Boolean).slice(0, 3) : [],
    a = Array.isArray(s) ? s : [];
  return n
    .map((r) => a.find((i) => i && String(i.id) === String(r)))
    .filter(Boolean)
    .map((r) => {
      const i = String((r.name || r.nickname || "未命名").trim() || "未命名"),
        c =
          (typeof r.setting == "string" ? r.setting.trim() : "") ||
          "（该角色在聊天侧未填写详细人设：请根据称呼合理扮演；禁止编造用户现实世界隐私、住址、真实关系或通讯录信息。）";
      return { id: String(r.id), name: i, personaSnapshot: c };
    });
}
function ly() {
  return `【叙事笔法（远征·强制）】
- **文风锚点（华语恐怖无限流 / 生存惊悚，可模仿、禁止抄袭）**：只学**镜头感、信息差、规则压迫、细感官与代入节奏**；禁止照搬任何作品的剧情线、专有规则条文、角色名、名台词、名场面或标志性道具/地点。可重点参照（择长化用、须改写为本局原创设定）：
  1)《无限恐怖》——小队生死压强、任务倒计时与副本切换的节奏感；
  2)《地狱公寓》——等待与日常缝隙里的窒息、细节层层咬人；
  3)《我有一座恐怖屋》——场景调查的黏着感与线索铺陈；
  4)《超级惊悚直播》——临场压迫、民俗/都市怪谈与声画细节的颗粒度；
  5)《惊悚乐园》——信息战与剪辑式叙事节奏（不必学其玩梗口吻，可取「冷硬推进」）；
  6)《死亡万花筒》——门内外规则差、机关与心理压迫的细写；
  7)《全球高考》——考场式规则博弈下的高压与窒息间距；
  8)《地球上线》——游戏化规则下的冷硬生存感；
  9)《画怖》——意象与隐喻层的恐怖（忌晦涩到读不懂）；
  10)《我在惊悚游戏里封神》——副本叙事密度、群像高光与规则爆点（勿抄梗）；
  11)《轮回乐园》——长线副本里动作与异状交织的持续推进（勿堆空打）。
- 副本感来自**信息差、规则压力与层层递进的细感官**，不靠形容词堆「好可怕」、不靠旁白断言「气氛诡异」。
- **环境与恐怖要写进肌理**：声（远近、断续、材质回响、是否像人声）、光（色温、频闪、被挡住的反光）、空气（温湿梯度、尘、锈、消毒水或霉）、皮肤上的刺麻或胃里的沉坠——让读者听见、触到、嗅到「哪里不对」。
- **若有同行者**：人与人的张力放在**危机里的贴身细节**（体温差、呼吸距、衣料轻擦、掌心冷汗、递物时指尖一滞、压到耳边的半句或故意没说完的停顿）；心动与在意从这些细节里**渗出来**，要有后劲；禁止为刷存在感硬塞尬聊、舞台式告白、工具人式大吼安慰或土味情话。
- 少用对用户外貌、身材、凝视、脸红心跳的长篇描写；叙事用「你」。
- 细腻≠堆砌同义词：在遵守 JSON 里「短段 + \\n\\n」版式的前提下写层次。`;
}
function E4(t) {
  return Array.isArray(t)
    ? t.map((s, n) => ({
        id:
          String((s == null ? void 0 : s.id) ?? `npc_${n + 1}`)
            .trim()
            .slice(0, 48) || `npc_${n + 1}`,
        call_name: String((s == null ? void 0 : s.call_name) ?? "")
          .trim()
          .slice(0, 80),
        stance: String((s == null ? void 0 : s.stance) ?? "未知")
          .trim()
          .slice(0, 24),
        role_tag: String((s == null ? void 0 : s.role_tag) ?? "")
          .trim()
          .slice(0, 36),
        voice_register: String((s == null ? void 0 : s.voice_register) ?? "")
          .trim()
          .slice(0, 40),
        demeanor_one_line: String(
          (s == null ? void 0 : s.demeanor_one_line) ?? "",
        )
          .trim()
          .slice(0, 120),
        obsession_toward_player: String(
          (s == null ? void 0 : s.obsession_toward_player) ?? "",
        )
          .trim()
          .slice(0, 180),
        interaction_beat: String(
          (s == null ? void 0 : s.interaction_beat) ?? "",
        )
          .trim()
          .slice(0, 220),
        arc_delta: String((s == null ? void 0 : s.arc_delta) ?? "")
          .trim()
          .slice(0, 220),
        agenda_one_line: String((s == null ? void 0 : s.agenda_one_line) ?? "")
          .trim()
          .slice(0, 160),
        signal_sketch: String((s == null ? void 0 : s.signal_sketch) ?? "")
          .trim()
          .slice(0, 96),
        eerie_echoes: (() => {
          if (Array.isArray(s == null ? void 0 : s.eerie_echoes))
            return s.eerie_echoes
              .map((i) =>
                String(i ?? "")
                  .trim()
                  .slice(0, 40),
              )
              .filter(Boolean)
              .slice(0, 4);
          const r =
            typeof (s == null ? void 0 : s.eerie_echoes) == "string"
              ? s.eerie_echoes.trim()
              : "";
          return r
            ? r
                .split(/\n|；|;|｜|\|/)
                .map((i) => i.trim().slice(0, 40))
                .filter(Boolean)
                .slice(0, 4)
            : [];
        })(),
      }))
    : [];
}
function cZ(t) {
  if (!t || typeof t != "object") return null;
  const s = String(t.codename_or_rumor ?? t.codename ?? "")
      .trim()
      .slice(0, 80),
    n = String(t.trace_description ?? "")
      .trim()
      .slice(0, 220),
    a = String(t.shadow_agenda ?? "")
      .trim()
      .slice(0, 120),
    r = String(t.proxy_scene_npc_id ?? "")
      .trim()
      .slice(0, 48),
    i = String(t.dm_pivot ?? "")
      .trim()
      .slice(0, 280),
    o = t.physical_presence_node1 === !0;
  return !s && !n && !i && !a
    ? null
    : {
        codename_or_rumor: s || "未名之影",
        physical_presence_node1: o,
        trace_description: n || "",
        shadow_agenda: a,
        proxy_scene_npc_id: r || null,
        dm_pivot: i,
      };
}
function L4(t) {
  return `【副本人物·执念与隐秘互动（强制）】
- 须与上文【玩家身份】锚定一致：NPC/Boss 对「你」的牵引、误认、渴望或克制，要能**落到该人设的可感细节上**；Boss 的 obsession 内部锚点须像「只对你这种______的人会生效」而非泛泛占有。
- 每名 scene_npc 须**彼此岔开**：年龄感（孩童/少年/中年/老者择其一写清）、性别气质、声口、身份与**执念类型**至少岔开两项；禁止复制粘贴「冷漠猎人 / 疯笑小丑 / 温柔杀手」等同一模具换皮。
- 执念忌空泛：少用每局重复的「想得到你的灵魂」；多用**可演的行为动机**——仪式缺一环只认你、把你错认成某人却拒绝被纠正、嫉妒你还像活人、需要你的承诺当规则锚点、想把你的恐惧腌成贡品、欠你一声道歉却用越界来还，等，**随节点加深或扭曲**，勿开局写死后全程复读同一句。
- **终局对立面**：须存在可追踪的**核心威胁体**（Boss 或其代理/残影）；**首次 API 返回**即须在根对象 boss_seed 中立项（见开局 JSON），节点一即可「无真身」但有痕；第 2～4 节点收紧伏笔，**靠近第 5 节点或结局时**须让其对「你」的执念**兑现、反噬或受挫**，与主线成败挂钩。
- **NPC 跨节点**：**优先沿用**上一节点 scene_npcs 中仍合理在场的 **id** 深挖（信任、怀疑、秘密层层剥开）；非必要勿每格全员换血；若增新人，宜为**增量**并交代来路，忌「每节点一批全新路人脸」。
- 恐怖靠**分寸与信息差**；心动靠「危险地懂你、危险地需要你」——停顿、距离、物件、举手之劳的越界；少用对用户外貌、身材、凝视、脸红心跳的长篇描写。
- **玩家可见档案 vs DM 内部锚点**：scene_npcs 须拆两类——**signal_sketch**（每人必填，≤36 字：像便签/指示牌上的**印象诱饵**，勾起好奇但**不剧透内核**；普通 NPC 宜极短）；**eerie_echoes**（仅 **大关底 Boss**：role_tag 为 boss 或中文「关底/终局/主脑/核心威胁」等时**必填**，字符串数组 **2～3** 条，每条≤28 字：像杂音、传闻碎片、物证错位、错频半句，**禁止**出现「他的执念是」「只想得到你」等直白解说）。**obsession_toward_player、interaction_beat、arc_delta** 仍须填写完整供你续写下一段，措辞为**内部推演锚点**（可写清动机逻辑），但**禁止**在剧情里让人物大段嘴上自曝；这些字段**不会**原样展示给玩家 UI，勿写成「给玩家的说明文」口吻。
- **普通 NPC**（非上述大关底 Boss）：scene_npcs 从简——voice_register、demeanor_one_line 可省略或各≤14 字；interaction_beat、arc_delta 各≤56 字即可，忌长篇人物小传。
${
  t
    ? `
【有同行时的 NPC 执念（强制）】
- 聊天同行者在场：**不可**把副本互动全写给同行者而把玩家晾在一边；每名**重要** scene_npc 对「你」仍须保留**至少一处**带隐私感的偏执或试探（可极短：称谓偏差、只朝你伸手、一句只给你听的条件），并自然形成**三角张力**（执念指向你 vs 同行者的遮挡/不信/担忧——择其自然，勿狗血抢戏盖过主线）。`
    : `
【独处加深（强制：无聊天同行者）】
- 本局没有从聊天侧点名的同行角色：副本原生 NPC/头目的台词、视线与悬念**更多落在「你」身上**（仍禁止低俗骚扰与露骨性描写）；**每个节点**至少 **2 次**只对「你」发生的互动时刻（不必同一人：可规则贴耳、错认、遗物套上你手腕、只对你亮出的门路、镜里多一瞬影、指名你的旧称呼等），都要有**恐怖底色 + 一丝不该心动的心动**（被需要、被选中、被「懂」的错觉或陷阱感），禁土味情话与工业糖精。`
}
`;
}
function D4(t) {
  if (!t.length) return "";
  const s = t.map(
    (n, a) => `### 同行者${a + 1}：「${n.name}」（内部id:${n.id}）
【人设快照·本局生效】以下文本为本局开局时从聊天角色卡截取，全程以本段为准；禁止引用或暗示「真实聊天记录」；不得引入快照未提及的用户现实隐私。
${n.personaSnapshot}`,
  ).join(`

`);
  return `【同行协议（强制）】
- 本局共有 ${t.length} 名「聊天侧角色」与玩家同行。玩家是人类操作者（叙事用「你」称呼玩家即可）。
- 以玩家抉择为主轴；每位同行者须「在场」——每节点每人至少一处**可感知的在场痕迹**（对白、呼吸节奏、小动作、与用户的空间牵连择一即可），宜**细而克制**，与上文「叙事笔法」一致，禁止只写互怼独白把用户晾在一边。
- 三个选项（A/B/C）中至少一项与某同行者的立场、技能或关系钩子明显相关（可点名）。
- 本局为虚构平行时间线跑团，勿将剧情断言为现实世界事实。

${s}
`;
}
const D0 = [
  {
    id: "balanced",
    label: "自由均衡",
    dmHint: "动作、悬疑与人际张力可自然混合，不强行锁死单一路线。",
  },
  {
    id: "combat",
    label: "并肩作战",
    dmHint: "偏掩护、突围、资源与阵地对抗；小队协作与装备博弈高光多。",
  },
  {
    id: "trust",
    label: "信任危机",
    dmHint: "偏怀疑、隐瞒、承诺试炼与关系拉扯；避免为狗血而脱离当前危机。",
  },
  {
    id: "mystery",
    label: "悬疑营救",
    dmHint: "偏线索拼图、倒计时、目标安危与反转压力；信息不完全。",
  },
  {
    id: "cosmic",
    label: "诡异侵染",
    dmHint: "偏未知规则、理智边界、非人逻辑与压抑氛围；少解释多体验。",
  },
  {
    id: "haunted_yearning",
    label: "灵异心动",
    dmHint:
      "恐怖无限流压强为底，情感张力偏「觊觎玩家本人」：Boss 与关键副本 NPC 的执念须**锚定为你这人**（你的习惯、口癖、承诺、体温、被误认的替身感等），互动里的心动须藏在**灵异与规则的缝隙**里——只对「你」失效的条款、半句不说完的停顿、危险地懂你、克制到发疼的偏袒；一律**细写分寸与感官**（声线距、呼吸差、指尖滞空、物件越界），禁油腻直球撩、土味情话与霸总式占有独白；惊悚与心动同频推进，忌工业糖精。",
  },
  {
    id: "social",
    label: "台面博弈",
    dmHint: "偏谈判、阵营、规则内交锋与话术陷阱；冲突主要在人际与权谋。",
  },
];
function BC(t) {
  const n =
      (typeof (t == null ? void 0 : t.toneCustom) == "string"
        ? t.toneCustom.trim()
        : ""
      ).slice(0, 600) || null,
    a =
      typeof (t == null ? void 0 : t.tonePresetId) == "string"
        ? t.tonePresetId.trim()
        : "",
    r =
      D0.find((i) => i.id === a) ||
      D0.find((i) => i.id === "balanced") ||
      D0[0];
  return {
    tonePresetId: r.id,
    tonePresetLabel: r.label,
    toneDmHint: r.dmHint,
    toneCustom: n,
  };
}
function $4(t) {
  const s = t == null ? void 0 : t.expeditionTone;
  return s &&
    typeof s.tonePresetLabel == "string" &&
    typeof s.toneDmHint == "string"
    ? {
        tonePresetId:
          typeof s.tonePresetId == "string" ? s.tonePresetId : "balanced",
        tonePresetLabel: s.tonePresetLabel,
        toneDmHint: s.toneDmHint,
        toneCustom:
          typeof s.toneCustom == "string" && s.toneCustom.trim()
            ? s.toneCustom.trim()
            : null,
      }
    : BC({});
}
function cy(t) {
  if (!(t != null && t.tonePresetLabel)) return "";
  const s = t.toneCustom
    ? `
【玩家自定义补充（本局有效，须与预设协调、勿忽略）】
${t.toneCustom}`
    : "";
  return `【本局基调 / 叙事重心（开局快照）】
- 预设：「${t.tonePresetLabel}」—— ${t.toneDmHint}
- 整体剧情与冲突分配应**明显贴合**上述重心；允许少量其它元素调剂节奏。${s}
`;
}
const kh = 3200;
function UC(t, s, n) {
  const a = typeof n == "string" ? n.trim() : "",
    r = Array.isArray(s) ? s : [],
    i = a ? r.find((u) => u && String(u.id) === a) : null,
    o = String((t == null ? void 0 : t.name) ?? "")
      .trim()
      .slice(0, 48);
  if (i) {
    const u = String(
        i.userName ?? i.name ?? (t == null ? void 0 : t.name) ?? "",
      )
        .trim()
        .slice(0, 48),
      p = (typeof i.settings == "string" ? i.settings.trim() : "").slice(0, kh),
      m = String(i.name ?? i.userName ?? "预设")
        .trim()
        .slice(0, 64);
    return {
      name: u || o || "我",
      settings: p,
      presetId: String(i.id),
      presetLabel: m || "预设",
    };
  }
  const d = (
    typeof (t == null ? void 0 : t.settings) == "string"
      ? t.settings.trim()
      : ""
  ).slice(0, kh);
  return { name: o || "我", settings: d, presetId: null, presetLabel: null };
}
function dy(t, s, n) {
  const a = t == null ? void 0 : t.expeditionPlayerSnapshot;
  return a && typeof a == "object"
    ? {
        name:
          String(a.name ?? "我")
            .trim()
            .slice(0, 48) || "我",
        settings: typeof a.settings == "string" ? a.settings.slice(0, kh) : "",
        presetId:
          a.presetId != null && String(a.presetId).trim()
            ? String(a.presetId).trim()
            : null,
        presetLabel:
          a.presetLabel != null && String(a.presetLabel).trim()
            ? String(a.presetLabel).trim().slice(0, 64)
            : null,
      }
    : UC(s, n, null);
}
function Vx(t) {
  const s = String((t == null ? void 0 : t.name) ?? "")
      .trim()
      .slice(0, 48),
    a = (
      typeof (t == null ? void 0 : t.settings) == "string"
        ? t.settings.trim()
        : ""
    ).slice(0, kh),
    r = s || "我",
    i =
      typeof (t == null ? void 0 : t.presetLabel) == "string" &&
      t.presetLabel.trim()
        ? t.presetLabel.trim().slice(0, 64)
        : "",
    o = i
      ? `【玩家身份（聊天 App「我的」·已保存人设「${i}」·本局锚定）】`
      : "【玩家身份（聊天 App「我的」·当前生效人设）】",
    c = i
      ? `【玩家身份（聊天 App「我的」·已保存人设「${i}」·本局锚定）】`
      : "【玩家身份（聊天 App「我的」·当前生效人设·本局锚定）】",
    d = i
      ? `以下为该**已保存人设预设**中的**本人设定**（称呼锚点：「${r}」）。副本内所有 NPC、尤其 **Boss**，对「你」的执念、试探、渴望或压抑的心动，都必须能**扣住这份人设里的具体棱面**来写（习惯、口癖、脆弱、锋芒、节奏感等），让读者感到是针对**这个人**，而不是换谁都能成立的流水线撩拨。`
      : `以下为玩家在聊天软件里保存的**本人设定**（称呼锚点：「${r}」）。副本内所有 NPC、尤其 **Boss**，对「你」的执念、试探、渴望或压抑的心动，都必须能**扣住这份人设里的具体棱面**来写（习惯、口癖、脆弱、锋芒、节奏感等），让读者感到是针对**这个人**，而不是换谁都能成立的流水线撩拨。`;
  return a
    ? `${c}
${d}

【本人设定正文】
${a}

【与上述人设扣写的互动原则（强制）】
- **细腻优先**：张力与暧昧写在**呼吸间距、声线迟半拍、指尖停在半途、错位的温柔、规则替你做的选择**里；用「差一点就碰到又收回」的节制，替代直球告白、壁咚与油腻身体速写。
- **心动要带刺**：动心须与危险同频——来自被懂、被需要、被误认成「唯一」，但立刻让读者感到**代价**；少用对用户外貌、身材、脸红心跳的堆叠描写。
- **Boss 内部锚点 obsession_toward_player**：须能在逻辑上**对应到上文设定中的可抓特质**（供你续写），叙事里**隐性化用**，禁止角色大段嘴上自曝「我的执念是…」。
- **禁止**：编造设定里未提及的现实隐私（住址、手机、公司真名等）；不要把设定整段复制进 NPC 台词；禁止土味情话文体与霸总语录。`
    : `${o}
- 该来源中**未填写**详细「本人设定」段落：叙事仍以第二人称「你」为主；必要时可自然使用称呼「${r}」，勿堆砌。
- **NPC/Boss 对玩家的牵引**须从副本规则、信息差与感官细节里**自然生长**；禁止因缺设定而用油腻万能句（霸总式占有、廉价情话、肉体凝视堆叠、工业糖精）硬凑暧昧心动。
- 若写 Boss「想得到你」类执念，须**机制化/仪式化/误解化**呈现，并用**分寸与回收**写心动，忌表面调情与尬撩。`;
}
function F4(t) {
  return !Array.isArray(t) || !t.length
    ? ""
    : `【世界书素材（本局开局快照）】
下列设定仅供本局虚构跑团化用；勿引入未列出条目中的专有设定；勿声称其为现实世界事实。
${t.map(
  (
    n,
    a,
  ) => `### 世界书条目 ${a + 1}：《${String(n.bookTitle || "世界观")}》· ${String(n.entryTitle || "条目")}
${String(n.content || "")}`,
).join(`

`)}
`;
}
const dZ = ({ children: t, onClose: s }) => {
    const {
        apiConfig: n,
        addApiLog: a,
        contactsPublic: r,
        user: i,
        userPresets: o,
      } = vn(),
      { fetchPlaylistDetail: c } = Ii(),
      [d, u] = l.useState(null),
      [f, p] = l.useState(null),
      [m, h] = l.useState(!1),
      [g, x] = l.useState("night"),
      y = l.useRef(null),
      v = l.useRef(null),
      b = l.useRef([]);
    (l.useEffect(() => {
      y.current = f;
    }, [f]),
      l.useEffect(() => {
        let pe = !1;
        return (
          (async () => {
            try {
              const se = await Rr(I4);
              pe || u(se || null);
            } catch {}
          })(),
          () => {
            pe = !0;
          }
        );
      }, []),
      l.useEffect(() => {
        let pe = !1;
        return (
          (async () => {
            try {
              const se = await Rr(oy);
              pe || x(A4(se));
            } catch {}
          })(),
          () => {
            pe = !0;
          }
        );
      }, []));
    const N = l.useCallback((pe) => {
        const se = A4(pe);
        (x(se), Sa(oy, se).catch((Te) => {}));
      }, []),
      w = l.useCallback(() => {
        x((pe) => {
          const se = pe === "day" ? "night" : "day";
          return (Sa(oy, se).catch((Te) => {}), se);
        });
      }, []);
    (l.useEffect(() => {
      const pe = (se) => {
        var ue;
        const { songId: Te, isPlaying: ke } = se.detail || {},
          W = (ue = y.current) == null ? void 0 : ue.trackId;
        W != null && Te === W && h(!!ke);
      };
      return (
        window.addEventListener(ep, pe),
        () => window.removeEventListener(ep, pe)
      );
    }, []),
      l.useEffect(
        () => () => {
          var pe;
          (pe = y.current) != null &&
            pe.trackId &&
            window.dispatchEvent(new CustomEvent(bm));
        },
        [],
      ));
    const _ = async (pe) => {
        u(pe);
        try {
          await Sa(I4, pe);
        } catch {}
        pe || (p(null), h(!1), (v.current = null), (b.current = []));
      },
      A = l.useCallback(() => {
        (window.dispatchEvent(new CustomEvent(bm)),
          p(null),
          h(!1),
          (v.current = null),
          (b.current = []));
      }, []),
      k = l.useCallback(() => {
        const pe = v.current,
          se = b.current;
        pe &&
          window.dispatchEvent(
            new CustomEvent(Xm, {
              detail: { song: pe, queue: se.length ? se : [pe] },
            }),
          );
      }, []),
      C = async (pe, se) => {
        if (!(pe != null && pe.playlistId) || !(pe != null && pe.source) || !se)
          return;
        const Te = await pu(pe, c);
        if (!Te.length) return;
        const { track: ke } = CA(se, Te);
        ke &&
          ((v.current = ke),
          (b.current = Te),
          window.dispatchEvent(
            new CustomEvent(Xm, { detail: { song: ke, queue: Te } }),
          ),
          p({
            title: ke.title || ke.name || "未知曲目",
            artist: ke.artist || "",
            trackId: ke.id,
          }),
          h(!0));
      },
      M = async (pe) => {
        if (!(pe != null && pe.playlistId) || !(pe != null && pe.source))
          return { catalogText: "", tracks: [] };
        const se = await pu(pe, c);
        if (!se.length) return { catalogText: "", tracks: [] };
        const { text: Te } = AA(se);
        return {
          catalogText: `

【远征配乐协议】玩家已在「乐听」绑定配乐歌单。下列为当前曲库（仅允许从中选择，编号从 1 开始）：
${Te}

你必须在 JSON 根对象中加入字段 "expedition_bgm"：{ "song_catalog_index": <1 到 ${Math.min(se.length, 100)} 的整数> }。
请根据当前场景氛围、紧张度与环境，从曲库中选**最贴切**的一首；index 必须与下列编号一致。`,
          tracks: se,
        };
      },
      [E, S] = l.useState([]),
      [j, T] = l.useState(100),
      [I, L] = l.useState(1),
      [B, F] = l.useState(0),
      [D, $] = l.useState(!1),
      [P, z] = l.useState([]),
      [O, Z] = l.useState([]),
      [K, q] = l.useState(!1),
      [V, ne] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        try {
          const se = await Rr("appraiser_inventory");
          se && S(se);
          const Te = await Rr("appraiser_coins");
          Te && T(Te);
          const ke = await Rr("appraiser_level");
          ke && L(ke);
          const W = await Rr("appraiser_exp");
          W && F(W);
          const ue = await Rr("appraiser_history");
          ue && z(ue);
          const re = await Rr(Yx);
          Array.isArray(re) && Z(re.slice(0, C4));
        } catch {
        } finally {
          ne(!0);
        }
      })();
    }, []),
      l.useEffect(() => {
        V && Sa("appraiser_inventory", E);
      }, [E, V]),
      l.useEffect(() => {
        V && Sa("appraiser_coins", j);
      }, [j, V]),
      l.useEffect(() => {
        V && Sa("appraiser_level", I);
      }, [I, V]),
      l.useEffect(() => {
        V && Sa("appraiser_exp", B);
      }, [B, V]),
      l.useEffect(() => {
        V && Sa("appraiser_history", P);
      }, [P, V]));
    const le = {
        id: "echo_system_core",
        name: "时空鉴定系统",
        nickname: "System",
        setting: "你是一个负责生成异世界物品数据的系统核心。",
      },
      ie = async (pe, se) => {
        $(!0);
        try {
          const Te = `
【时空合成系统 - 拟人化剧场模式】
玩家将以下两个“存在”放入了合成台，试图观测它们相遇后的命运：

角色/物品 A: ${pe.name}
- 原型: ${pe.description}
- 背景/原主: ${pe.owner || "未知"} (${pe.owner_story ? pe.owner_story.slice(0, 100) : "无记录"})

角色/物品 B: ${se.name}
- 原型: ${se.description}
- 背景/原主: ${se.owner || "未知"} (${se.owner_story ? se.owner_story.slice(0, 100) : "无记录"})

请发挥极致的想象力，将这两个物品进行**拟人化**（如果它们本身不是生物），并演绎它们相遇后的故事。
它们可能是失散多年的恋人、跨越维度的宿敌、或者是相依为命的流浪者。
新的物品是它们命运交织后的**结晶**或**共同形态**。

返回严格的 JSON 格式（无 Markdown 标记）：
{
  "success": true,
  "name": "命运结晶名称",
  "icon": "emoji",
  "rarity": "R" | "SR" | "SSR",
  "description": "对这个结合体的诗意描述（30-50字）。",
  "relationship": "简短定义它们的关系（如：相爱相杀、互为镜像、主仆契约等）。",
  "story": "一段沉浸式的开场剧情（300-500字）。
要求：
1. 必须拟人化。赋予 Item A 和 Item B 性格、台词和心理活动。
2. 描写它们在时空缝隙中初次相遇/重逢的场景。不仅是物理碰撞，更是灵魂对话。
3. 设置一个悬念或冲突，等待玩家介入（不要写完结的故事，这是一个互动剧场的开端）。
4. 文笔要极具画面感，可以是赛博朋克、古风玄幻或现代都市风格。",
  "tags": ["Relationship", "Drama", "Story"],
  "attributes": {
    "computation": number, // 算力/黑客/理智属性 (0-100)
    "force": number, // 武力/破坏/防御属性 (0-100)
    "perception": number, // 感知/敏锐/玄学属性 (0-100)
    "stress_resist": number // 抗压/意志/耐力属性 (0-100)
  },
  "passive_skill": "结合原物品特性生成的一个进阶被动技能名称（如：量子破甲、绝对共情、以太屏蔽等）"
}
`,
            ke = await dc({
              apiConfig: n,
              addApiLog: a,
              messages: [{ sender: "me", text: Te }],
              logScene: "echo_craft",
              logContactName: le.name,
            });
          let W = null;
          try {
            const re = ke.match(/\{[\s\S]*\}/);
            re ? (W = JSON.parse(re[0])) : (W = JSON.parse(ke));
          } catch {
            W = {
              success: !1,
              name: "未知的灰烬",
              icon: "🌫️",
              rarity: "N",
              description: "合成失败的产物。",
              tags: ["Abstract"],
              attributes: {
                computation: 0,
                force: 0,
                perception: 0,
                stress_resist: 1,
              },
              passive_skill: "厄运",
            };
          }
          const ue = {
            id: Date.now().toString(),
            status: "identified",
            ...W,
            parents: [pe, se],
            timestamp: Date.now(),
          };
          return (
            S((re) => {
              const he = re.filter((ge) => ge.id !== pe.id && ge.id !== se.id);
              return [ue, ...he];
            }),
            ue
          );
        } catch {
          const ke = {
            id: Date.now().toString(),
            status: "identified",
            name: "合成残渣",
            icon: "⚫",
            rarity: "N",
            description:
              "合成过程中发生了未知的时空坍缩（可能是由于神经网络连接不稳定）。",
            story:
              "在这个时间线上，奇迹没有发生。只留下了一团无法解析的混沌物质。",
            tags: ["Failure"],
            timestamp: Date.now(),
            attributes: {
              computation: 0,
              force: 1,
              perception: 0,
              stress_resist: 0,
            },
            passive_skill: "负能量",
          };
          return (
            S((W) => {
              const ue = W.filter((re) => re.id !== pe.id && re.id !== se.id);
              return [ke, ...ue];
            }),
            ke
          );
        } finally {
          $(!1);
        }
      },
      X = async () => {
        if (j < 10) return { error: "Not enough coins" };
        (T((ue) => ue - 10), $(!0));
        const pe = [
            "古代中国 (如唐宋元明清，古风)",
            "民国时期 (1912-1949，上海滩/北平)",
            "现代社会 (2000-2025，写字楼/便利店/地铁/校园)",
            "近未来 (2050-2100，轻度赛博)",
            "西方中世纪 (剑与魔法/城堡)",
            "维多利亚时代 (蒸汽朋克/雾都)",
            "末日废土 (核爆后/辐射)",
            "抽象维度 (梦境/情绪/数据流)",
            "史前时代 (恐龙/原始人)",
            "童话世界 (会说话的动物/魔法物品)",
          ],
          se = [
            "温暖治愈",
            "悲伤遗憾",
            "悬疑惊悚",
            "幽默荒诞",
            "热血励志",
            "平淡日常中的奇迹",
          ],
          Te = pe[Math.floor(Math.random() * pe.length)],
          ke = se[Math.floor(Math.random() * se.length)],
          W = `
你现在是【时空鉴定所】的系统核心。请从无限多元宇宙的时间流中截获一个漂流的“存在”。

本次探索锁定的时空坐标如下（**必须**严格遵守此设定）：
【时代/背景】：${Te}
【情感基调】：${ke}

请根据上述锁定的背景，生成一个极具该时代特色、符合该基调的物品。
不要总是生成神秘的、科幻的东西！如果是现代社会，它可以是一张过期的电影票、一个蓝牙耳机；如果是古代中国，它可以是一把断裂的木梳、一个生锈的铜钱。
要体现出**生活气息**和**人情味**，或者是该时空特有的**历史厚重感**。

这个“存在”不一定是实物，它可以是：
1. 具体的物品（如：生锈的剑柄、打了一半的毛衣、一片发光的羽毛、一只破损的芯片）。
2. 抽象的概念或情绪（如：被遗忘的童年、一公斤的悲伤、夏天的风）。
3. 某种命运的具象化（如：一段未寄出的遗言、战争结束那天的雨水）。

原持有者（owner）不一定是人类！它可以是：
- 具体的某个人（如：深夜加班的程序员、长安城的卖炭翁）。
- 动植物（如：一只流浪猫、一棵活了千年的古树）。
- 非生物（如：一个有了自我意识的扫地机器人、一个幽灵）。

稀有度概率：N(50%), R(30%), SR(15%), SSR(5%)。

要求生成严格的 JSON 格式数据（不要包含Markdown代码块标记，只返回纯JSON），所有文本内容必须使用中文：
{
  "type": "box" | "bag" | "capsule" | "fragment", // 包裹外观类型，抽象物品可以用 fragment
  "condition": "dirty" | "wet" | "rusty" | "encrusted" | "ethereal" | "glowing", // 状态，抽象物品可以用 ethereal(虚无) 或 glowing
  "keywords": ["线索词1", "线索词2", "线索词3"], // 3个线索，对于抽象物品，可以是侧面描写（如“咸涩的味道”、“冰冷的触感”）
  "name": "物品/概念全名",
  "icon": "emoji", // 最符合意境的 emoji
  "rarity": "N" | "R" | "SR" | "SSR",
  "description": "鉴定后的外观/形态描述。语言风格请根据来源调整（古风、科幻、童话、散文等）。",
  "origin": "来源时空坐标（请发挥创意，例如：公元1099年 十字军东征路上的枯井、第7维度·色彩尽头、2004年·放学后的操场...）",
  "owner": "原持有者名字或代号（如：流浪猫'花卷'、编号89757、森林之灵...）",
  "owner_story": "原持有者的人物/生物小传（至少300字）。这是一个独立且完整的故事，必须使用第三人称。请像写一篇短篇小说或特写文章那样，分段落撰写（段落间使用 \\n\\n 分隔）。如果是动物或非人生物，请以它们的视角或关于它们的传说来写。详细描述其身份背景、性格（或习性）、生命轨迹以及最终命运。要有血有肉，通过这个个体折射出那个时空的独特风貌。",
  "memory_fragment": "一段第一人称的物品残留记忆（30-60字）。使用极致的感官描写（视觉、听觉、触觉、嗅觉），让玩家仿佛身临挂境感受那一刻的场景。",
  "composition": "物质构成（极具创意的成分，例如：橡木+一丝执念、100%纯度的月光、生锈的铁+干涸的血迹...）",
  "story": "一段极具感染力的短篇故事（200-400字）。这是物品本身的故事，侧重于它所经历的那个核心场景。请使用第三人称。不要只是概括，而是要讲述一个完整的、有画面感的场景。要有起承转合，有环境氛围描写，有情感波动。它可以是关于离别、遗憾、希望、残酷的命运或温暖的瞬间。让读者读完后能感到意难平或深深的共鸣。这部分是物品的“记忆”。",
  "value": number, // 估值 (N:10-99, R:100-499, SR:500-1999, SSR:2000-9999)
  "options": ["干扰选项1", "干扰选项2", "正确选项"], // 3个选项
  "answer": "正确选项",
  "attributes": {
    "computation": number, // 算力/黑客/理智属性 (0-100)
    "force": number, // 武力/破坏/防御属性 (0-100)
    "perception": number, // 感知/敏锐/玄学属性 (0-100)
    "stress_resist": number // 抗压/意志/耐力属性 (0-100)
  },
  "passive_skill": "根据物品特性生成的一个被动技能名称（如：破甲、共情、信息屏蔽、破魔等）"
}
`;
        try {
          const ue = await dc({
            apiConfig: n,
            addApiLog: a,
            messages: [{ sender: "me", text: W }],
            logScene: "echo_scavenge",
            logContactName: le.name,
          });
          let re = null;
          try {
            const ge = ue.match(/\{[\s\S]*\}/);
            ge ? (re = JSON.parse(ge[0])) : (re = JSON.parse(ue));
          } catch {
            re = {
              type: "box",
              condition: "dirty",
              keywords: ["未知", "旧", "神秘"],
              name: "模糊的包裹",
              icon: "🕰️",
              rarity: "N",
              description: "一个布满灰尘的旧盒子。",
              story: "这是一个普通的时间记录工具。",
              owner: "未知旅人",
              owner_story:
                "一个迷失在时间缝隙中的旅人，关于他的记录已不可考...",
              memory_fragment:
                "滴答...滴答...是时间流逝的声音，还是心跳的回响？",
              composition: "黄铜 + 时间的尘埃",
              value: 20,
              options: ["指南针", "旧怀表", "计步器"],
              answer: "旧怀表",
              attributes: {
                computation: 10,
                force: 5,
                perception: 20,
                stress_resist: 15,
              },
              passive_skill: "怀旧共鸣",
            };
          }
          const he = {
            id: Date.now().toString(),
            status: "unidentified",
            ...re,
            timestamp: Date.now(),
          };
          return (S((ge) => [he, ...ge]), he);
        } catch {
          const re = {
            id: Date.now().toString(),
            status: "unidentified",
            type: "fragment",
            condition: "ethereal",
            keywords: ["离线", "数据", "残留"],
            name: "以太碎片",
            icon: "🧊",
            rarity: "N",
            description: "系统在无法连接到高维时空时捕获的低维投影。",
            story: "当时空网络断开时，只有这些微弱的信号还能被捕捉到。",
            origin: "Localhost",
            owner: "System",
            timestamp: Date.now(),
            attributes: {
              computation: 30,
              force: 0,
              perception: 10,
              stress_resist: 5,
            },
            passive_skill: "数据伪装",
          };
          return (S((he) => [re, ...he]), re);
        } finally {
          $(!1);
        }
      },
      je = (pe, se) => {
        S((Te) =>
          Te.map((ke) => {
            if (ke.id === pe) {
              const W = ke.answer
                  ? ke.answer === se
                  : ke.name.includes(se) || se.includes(ke.name),
                ue = {
                  ...ke,
                  status: "identified",
                  identifiedAt: Date.now(),
                  isPerfect: W,
                };
              return (
                W &&
                  F((re) => {
                    const he = re + (ke.value || 10),
                      ge = Math.floor(he / 1e3) + 1;
                    return (ge > I && L(ge), he);
                  }),
                z((re) => (re.find((he) => he.id === pe) ? re : [ue, ...re])),
                ue
              );
            }
            return ke;
          }),
        );
      },
      xe = (pe) => {
        const se = E.find((Te) => Te.id === pe);
        (se && se.value && T((Te) => Te + Math.floor(se.value * 0.1)),
          S((Te) => Te.filter((ke) => ke.id !== pe)));
      },
      ye = async (pe, se) => {
        const Te = [
            "侧重心理描写：深入角色的内心世界，描写他们的犹豫、渴望或恐惧。",
            "侧重环境氛围：通过光影、声音、气味来烘托当前场景的独特气氛。",
            "侧重动作细节：详细描写角色的微表情、肢体语言和物理互动。",
            "侧重哲理隐喻：用诗意的语言将当前的事件与更大的命运或时空概念联系起来。",
            "侧重对话张力：通过言语交锋或沉默的留白来体现角色间的关系。",
            "意识流风格：打破常规的时间顺序，穿插闪回或幻觉。",
          ],
          ke = [
            "无需额外转折，自然推进。",
            "无需额外转折，自然推进。",
            "突然发生了一个微小的意外（如物品掉落、天气突变、噪音干扰）。",
            "角色突然回忆起关于'原主'的一个模糊片段。",
            "周围的时空场出现了一瞬间的不稳定波动。",
            "角色对玩家的意图产生了一丝误解或特别的兴趣。",
          ],
          W = Te[Math.floor(Math.random() * Te.length)],
          ue = ke[Math.floor(Math.random() * ke.length)],
          he = `
你是一个高级互动小说系统的核心 AI (Dungeon Master)。
我们正在共同创作一个关于“拟人化物品”在时空缝隙中的故事。

【当前剧情上下文】：
${pe
  .slice(-10)
  .map((ge) =>
    ge.type === "user"
      ? `玩家: ${ge.text}`
      : ge.type === "narrative"
        ? `旁白/剧情: ${ge.text}`
        : `系统: ${ge.text}`,
  ).join(`
`)}

【玩家的最新行动/回应】：
"${se}"

【本次生成的导演指令】（必须严格遵守）：
1. **叙事风格**：${W}
2. **剧情扰动**：${ue}
3. **格式要求**：
   - **严禁**使用列表、要点（1. 2. 3.）或分条陈述。
   - 必须像正规的小说/散文一样，使用**自然段落**。
   - 段落之间用 "\\n\\n" 分隔。
   - 就像在写一本书的某一章，而不是在写报告。

【内容要求】：
- **字数**：必须充实，不少于 300 字。不要偷懒。
- **沉浸感**：调动读者的感官（视觉、听觉、触觉）。不要只写“发生了什么”，要写“感觉到了什么”。
- **交互性**：如果玩家试图对话，请让角色自然回应。如果玩家试图行动，请生动描述结果。
- 不要随意结束故事，除非玩家明确想要结束或达成了某种终局。
- 返回的内容不要包含 "系统:" 或 "AI:" 前缀，直接返回纯净的剧情文本。

返回 JSON 格式：
{
  "text": "生成的剧情文本（纯文本，段落式）",
  "isEnd": false // 是否达到故事结局
}
`;
        try {
          const ge = await dc({
            apiConfig: n,
            addApiLog: a,
            messages: [{ sender: "me", text: he }],
            logScene: "echo_story_continue",
            logContactName: le.name,
          });
          let J = null;
          try {
            const G = ge.match(/\{[\s\S]*\}/);
            G ? (J = JSON.parse(G[0])) : (J = JSON.parse(ge));
          } catch {
            J = { text: ge, isEnd: !1 };
          }
          return J;
        } catch {
          return {
            text: "（时空通讯受到干扰，只能听到沙沙的杂音... 请重试）",
            isEnd: !1,
          };
        }
      },
      R = async (pe) => {
        $(!0);
        try {
          const se = `
用户写下了这段心事/故事，试图将其具象化为一个物品丢入时空缝隙：
"${pe}"

请根据这段文字的情感色彩和内容，将其转化为一个具体的物品或抽象的概念。
例如：
- 悲伤的故事 -> "未干的泪痕" 或 "蓝色的雨云"
- 愤怒的故事 -> "燃烧的荆棘"
- 怀旧的故事 -> "生锈的八音盒"

要求生成严格的 JSON 格式数据（不要包含Markdown代码块标记，只返回纯JSON）：
{
  "name": "物品/概念名称",
  "icon": "emoji",
  "rarity": "N" | "R" | "SR",
  "description": "对这个具象化物品的唯美描述",
  "value": number, // 给予用户的回馈金币 (10-100)
  "reply": "系统对这次转化的简短评价（如：'这是一个沉重的故事，时空因它而颤抖。'）",
  "attributes": {
    "computation": number, // 算力/黑客/理智属性 (0-100)
    "force": number, // 武力/破坏/防御属性 (0-100)
    "perception": number, // 感知/敏锐/玄学属性 (0-100)
    "stress_resist": number // 抗压/意志/耐力属性 (0-100)
  },
  "passive_skill": "根据故事内容生成的一个被动技能名称（如：执念、复仇、守护等）"
}
`,
            Te = await dc({
              apiConfig: n,
              addApiLog: a,
              messages: [{ sender: "me", text: se }],
              logScene: "echo_send",
              logContactName: le.name,
            });
          let ke = null;
          try {
            const W = Te.match(/\{[\s\S]*\}/);
            W ? (ke = JSON.parse(W[0])) : (ke = JSON.parse(Te));
          } catch {
            ke = {
              name: "模糊的思绪",
              icon: "💭",
              rarity: "N",
              description: "一段无法被完全解析的记忆碎片。",
              value: 15,
              reply: "你的声音已消散在风中。",
              attributes: {
                computation: 5,
                force: 0,
                perception: 10,
                stress_resist: 5,
              },
              passive_skill: "迷惘",
            };
          }
          return (T((W) => W + (ke.value || 10)), { success: !0, data: ke });
        } catch {
          return {
            success: !0,
            data: {
              name: "未寄出的信",
              icon: "📫",
              rarity: "N",
              description:
                "由于某种阻力，你的心事没能传达给时空彼岸，只留下了这一纸空文。",
              value: 5,
              reply: "信号丢失... 请稍后再试。",
              attributes: {
                computation: 0,
                force: 0,
                perception: 20,
                stress_resist: 5,
              },
              passive_skill: "遗憾",
            },
          };
        } finally {
          $(!1);
        }
      },
      oe = async (pe, se = "", Te = {}) => {
        $(!0);
        const ke = lZ(Te == null ? void 0 : Te.companionContactIds, r),
          W = D4(ke),
          ue = ke.map(({ id: Pe, name: ut, personaSnapshot: _t }) => ({
            id: Pe,
            name: ut,
            personaSnapshot: _t,
          })),
          re = BC(Te),
          he = cy(re),
          ge = Array.isArray(
            Te == null ? void 0 : Te.expeditionWorldbookSnapshots,
          )
            ? Te.expeditionWorldbookSnapshots
                .filter((Pe) => Pe && typeof Pe.content == "string")
                .map((Pe, ut) => ({
                  key: String(Pe.key || `wb_${ut}`),
                  bookTitle: String(Pe.bookTitle || "世界观").slice(0, 240),
                  entryTitle: String(Pe.entryTitle || "条目").slice(0, 240),
                  content: Pe.content,
                }))
            : [],
          J = F4(ge),
          G = UC(i, o, Te == null ? void 0 : Te.expeditionUserPresetId);
        if (se && j < 50)
          return (
            $(!1),
            { success: !1, message: "PTS 不足，无法锁定自定义坐标" }
          );
        const we = [
            "被赛博精神病感染的地下黑拳赛场",
            "古代皇陵中苏醒的兵马俑军团",
            "由于魔法实验失败而导致重力倒转的法师塔",
            "一列永远无法到达终点的幽灵高铁",
            "深网中最底层的逻辑迷宫",
            "一个只有孩子们存在，但所有人都在慢慢消失的游乐园",
            "停尸间改建的网红直播间：打赏榜与往生者名单同步跳动",
            "湖底打捞上来的教堂：水位线以上与以下时间流速不同",
            "废弃医院夜班：病历栏里夹着与玩家携带物同号的枯黄便签",
            "全楼邻居同时装修，只有你家门外永远安静且门缝渗出冷香",
            "商场午夜单行道：小票末行印着与你入检代号相同的条码",
            "民俗庙会最后一班戏台：戏文唱的是玩家尚未做出的选择",
            "太空残骸里的语音日志：声纹像玩家再慢半拍",
            "暴雨中的跨江大桥：导航显示「你已到达」，但桥墩在倒退",
          ],
          Q = se || we[Math.floor(Math.random() * we.length)],
          ve = pe.map((Pe) => {
            var ut, _t, Ee, fe;
            return `[${Pe.name}]: 算力${((ut = Pe.attributes) == null ? void 0 : ut.computation) || 0}, 武力${((_t = Pe.attributes) == null ? void 0 : _t.force) || 0}, 感知${((Ee = Pe.attributes) == null ? void 0 : Ee.perception) || 0}, 抗压${((fe = Pe.attributes) == null ? void 0 : fe.stress_resist) || 0} | 技能: ${Pe.passive_skill || "无"}`;
          }).join(`
`),
          { catalogText: Ve } = await M(d),
          Ae = !!Ve,
          te = Ae
            ? `,
  "expedition_bgm": { "song_catalog_index": <1 到曲库首数之间的整数> }`
            : "",
          Se = Ae
            ? ""
            : `
【配乐】玩家未绑定乐听歌单：请勿输出 bgm_keywords、expedition_bgm 或任何配乐相关字段。`,
          Fe = ly(),
          $e = Vx(G),
          tt = L4(ke.length > 0),
          Xe = ke.length
            ? "详细的剧情描述（不少于400字）。首入副本须立住压迫：威胁与异常通过**细密感官层次**落地；若有同行者，与用户之间的在意与张力主要通过**临场贴身细节**（体温、呼吸、咫尺心音、停顿、碰触分寸）含蓄写出，避免对白式硬撩。少用对用户外貌凝视的长写。剧情须**落实 scene_npcs 每条 interaction_beat**（可拆进对白与动作，禁止只写在 JSON 里却不出现）。"
            : "详细的剧情描述（不少于400字）。首入危机须以**细密感官**写清声、触、光、温湿与身体本能的不对劲，忌空泛「很诡异」式套话。剧情须**落实 scene_npcs 每条 interaction_beat**（可拆进对白与动作，禁止只写在 JSON 里却不出现）。",
          ht = `
你是一个跑团地下城主(DM)。玩家的小队正潜入一个极度危险的平行时间线。
【时间线背景】：${Q}
${he}
${Fe}
${$e}
${tt}
【玩家携带的武装/物品】：
${ve}
${W}
${J}
${Ve}
${Se}

请为这次潜入行动生成【初始节点】。远征总共将包含5个节点，目前是第1个。
请根据环境、本局基调、**玩家本人设定**、携带物品${ke.length ? "与同行者人设" : ""}${ge.length ? "与世界书勾选条目" : ""}，描绘小队刚刚着陆/进入时面临的初始状况或危机，并提供3个供玩家选择的应对方案。

【副本可玩性（强制）】
- 本局必须有**唯一、可讲完的主线任务**（可被第1～5节点逐步推进，在第5节点或结局落地为成功/失败/阶段性结局）；禁止全程只有氛围与碎片调查却说不清「玩家到底要完成什么」。
- 必须有**至少1名副本原生 NPC**（非聊天同行者）：须有名或稳定称呼（职务/外号/体征锚点），与玩家产生对白、交易、阻拦、求助、欺骗或规则宣读之一；NPC 须在剧情里承担信息或障碍，不得无对白的背景板。scene_npcs 字段仅供结构连贯，**叙事中须让其从场景里自然现身**，禁止开篇用「人物表/名单」式旁白把 NPC 一次性剧透列完。
- scene_npcs：每人必填 **signal_sketch**；仍须填 **obsession_toward_player、interaction_beat、arc_delta**（DM 内部续写锚点，叙事里隐性化用、忌嘴炮自曝）；**大关底 Boss**（role_tag 为 boss 或中文关底/终局/主脑/核心威胁）须额外 **eerie_echoes**（2～3 条悬念碎片，禁直述执念）。至少一人 role_tag 含 boss / lieutenant / herald / warden 之一或中文同义（威胁轴心可非人类）。
- 【Boss 开局埋根（第 1 次 API·强制）】根对象 **boss_seed** 与 node 平级（见 JSON）。**physical_presence_node1** 多数为 false：Boss **可不真人露面**，但 boss_seed.trace_description 所写隐秘痕迹**必须**落实进 node.description（例：代理人诱导你去某处、暗中替你挡一次规则却不说破、只有你能对上的物证、镜里多一瞬不同步的影、错频里叫出你设定里的口癖等）；boss_seed.proxy_scene_npc_id 若非 null，须等于某条 scene_npcs 条目的 id（该 NPC 可表现为诱导/庇护/假中立之一）。
- 【NPC 连续性（开局即遵守）】节点一即可安排 **1～2 名**可跨节点延续的 id（不必在本节点写满一生，但要留「下次还想追问」的钩子）；**禁止**为凑数每节点换全新班底（后续 API 亦同）。
- 每个节点的选项 text 必须是**具体动作或抉择**；并附带 blurb 字段（≤28字）用玩家能懂的话说明「选这个大致在推进主线的哪一步/冒什么险」，禁止三条选项语义雷同或全是空泛「继续观察」。

返回严格的 JSON 格式：
{
  "background": "当前时间线的具体描述",
  "quest": {
    "headline": "本局主线一句话标题（≤24字）",
    "objective": "玩家本局要达成的核心目标（须在第5节点前后可被判定完成或失败，50字内）",
    "stakes_if_fail": "若主线失败或放任会怎样的代价（一句）",
    "phase_note": "当前处于主线的哪一阶段/当务之急（1～2句，随节点推进在后续 API 中可被覆盖更新）"
  },
  "environment": {
    "weather": "rain|fog|neon|dark|clear",
    "atmosphere": "tense|calm|eerie|hostile",
    "description": "简短但含**一句具体感官**（声/光/触/味之一）的环境收束，忌空泛套话"
  },
  "tension": 20,
  "boss_seed": {
    "codename_or_rumor": "传闻/代号式称呼（≤24字，勿直写真名剧终）",
    "physical_presence_node1": false,
    "trace_description": "本节点叙事必须落实的隐秘痕迹一句（可感、可复述；Boss 可无真身）",
    "shadow_agenda": "诱导路线|暗中庇护|窃走半秒心跳|规则偏袒等之一，简短",
    "proxy_scene_npc_id": "与 scene_npcs 某 id 一致，或 null",
    "dm_pivot": "【DM 内部】Boss 偏执内核一行，供后续节点收紧，勿写成台词自曝"
  },
  "node": {
    "title": "节点名称（如：突破外围防火墙）",
    "situation_summary": "用第二人称写清此刻处局与当务之急（2句内，让玩家知道自己在干嘛）",
    "scene_npcs": [
      {
        "id": "npc_1",
        "call_name": "可称呼名或职务",
        "stance": "中立|敌对|引导|未知",
        "role_tag": "boss|lieutenant|herald|warden|witness|merchant|child|elder|other 之一或中文同义",
        "signal_sketch": "≤36字：给玩家的便签式印象诱饵，勾起兴趣但不剧透内核（禁写「执念是…」）",
        "eerie_echoes": ["仅大关底 Boss 必填：≤28字杂音碎片1", "碎片2", "碎片3"],
        "voice_register": "可选；普通 NPC 可省略或≤14字",
        "demeanor_one_line": "可选；普通 NPC 可省略或≤14字",
        "obsession_toward_player": "【DM 内部锚点，勿对玩家 UI 直出】偏执动机一句，供续写；叙事中隐性化用、禁角色自曝式解说",
        "interaction_beat": "【DM 内部】本节点对「你」的隐秘试探一句；普通 NPC ≤56字",
        "arc_delta": "【DM 内部】人设递进；普通 NPC ≤56字",
        "agenda_one_line": "此刻想从玩家小队得到什么/拦什么（一句）"
      }
    ],
    "description": "${Xe}剧情中须落实 scene_npcs 的对白或互动；请务必频繁使用 \\n\\n 进行分段，每段控制在 2-4 行以内，保持阅读节奏轻快，不要出现大段文字。",
    "options": [
      { "id": "A", "text": "玩家看到的具体行动句", "blurb": "选这个大致在推进主线哪一步（≤28字）" },
      { "id": "B", "text": "…", "blurb": "…" },
      { "id": "C", "text": "…", "blurb": "…" }
    ]
  }${te}
}
`;
        try {
          const Pe = await dc({
            apiConfig: n,
            addApiLog: a,
            messages: [{ sender: "me", text: ht }],
            logScene: "echo_expedition_start",
            logContactName: le.name,
          });
          let ut = null;
          try {
            const _t = Pe.match(/\{[\s\S]*\}/);
            _t ? (ut = JSON.parse(_t[0])) : (ut = JSON.parse(Pe));
          } catch {
            throw new Error("Parse failed");
          }
          if (ut && typeof ut == "object") {
            if (
              (!ut.quest || typeof ut.quest != "object"
                ? (ut.quest = {
                    headline: "异常时间线中的求生与规则",
                    objective:
                      "弄清副本核心威胁与出局条件，取得能终结异常或脱困的关键，并在资源耗尽前完成。",
                    stakes_if_fail:
                      "理智归零或核心任务失败将导致困死或被侵染。",
                    phase_note:
                      "第1步：确认位置、直接威胁与可供交涉或利用的副本人物。",
                  })
                : (ut.quest = {
                    headline: String(ut.quest.headline || "主线").slice(0, 80),
                    objective: String(ut.quest.objective || "").slice(0, 220),
                    stakes_if_fail: String(
                      ut.quest.stakes_if_fail != null
                        ? ut.quest.stakes_if_fail
                        : "",
                    ).slice(0, 160),
                    phase_note: String(
                      ut.quest.phase_note != null ? ut.quest.phase_note : "",
                    ).slice(0, 220),
                  }),
              ut.node &&
                typeof ut.node == "object" &&
                (typeof ut.node.situation_summary != "string" &&
                  (ut.node.situation_summary = ""),
                (ut.node.scene_npcs = E4(ut.node.scene_npcs)),
                Array.isArray(ut.node.options)))
            ) {
              const _t = ["A", "B", "C"];
              ut.node.options = ut.node.options.map((Ee, fe) => ({
                id:
                  String((Ee == null ? void 0 : Ee.id) ?? "")
                    .trim()
                    .slice(0, 8) ||
                  _t[fe] ||
                  "X",
                text: String((Ee == null ? void 0 : Ee.text) ?? "").slice(
                  0,
                  400,
                ),
                blurb: String(
                  (Ee == null ? void 0 : Ee.blurb) != null
                    ? Ee.blurb
                    : (Ee == null ? void 0 : Ee.player_intent) != null
                      ? Ee.player_intent
                      : "",
                ).slice(0, 40),
              }));
            }
            ut.boss_seed = cZ(ut.boss_seed);
          }
          return (
            Ae && ut.expedition_bgm && (await C(d, ut.expedition_bgm)),
            se && T((_t) => _t - 50),
            {
              success: !0,
              session: {
                ...ut,
                selectedItems: pe,
                currentNodeIndex: 1,
                background: Q,
                expeditionCompanions: ue,
                expeditionTone: re,
                expeditionWorldbookSnapshots: ge,
                expeditionPlayerSnapshot: G,
              },
            }
          );
        } catch {
          return { success: !1, message: "时空乱流干扰了信号，远征未能成行。" };
        } finally {
          $(!1);
        }
      },
      ee = l.useCallback(
        async ({ session: pe, history: se, endPayload: Te }) => {
          var ke;
          if (!pe || !Te)
            return { success: !1, message: "缺少会话或结算数据。" };
          q(!0);
          try {
            const W = $4(pe),
              ue = cy(W),
              re = T4(se, 7200),
              he = Vx(dy(pe, i, o)),
              ge = ly(),
              J =
                pe.quest && typeof pe.quest == "object"
                  ? JSON.stringify(pe.quest).slice(0, 2e3)
                  : "",
              G =
                pe.boss_seed && typeof pe.boss_seed == "object"
                  ? JSON.stringify(pe.boss_seed).slice(0, 1200)
                  : "",
              we = String(Te.summary ?? "").slice(0, 1200),
              Q = !!Te.is_success,
              ve = `你是 Echo 远征 DM 与悬疑向编剧。本局已结束，请输出**结算真相包**（虚构副本内补完）。文笔要有**钩子与镜头感**：信息差、具体感官、一句钉心的反转或代价；**禁止**流水账式「然后…接着…最后…」堆砌、禁止百科说明体、禁止空洞形容词断言「很恐怖」。

${ue}
${ge}
${he}

【本局背景】
${String(pe.background || "").slice(0, 2e3)}

【开局任务快照】
${J}

【Boss 种子（若有）】
${G}

【结局状态】
- 成/败：${Q ? "成功" : "失败或中断"}
- 结局旁白摘要：${we}

【远征过程压缩日志（含各节点 NPC 结构与选择）】
${re || "（日志过短或无）"}

请严格返回可解析 JSON（无 Markdown 代码块），结构如下：
{
  "truth_story": "**全程第三人称**（他/她/其人/这名角色/玩家们等），**禁止**用第二人称「你」指代玩家。550～1100 字，\\n\\n 分段。必须包含：①一句抓人的开场钩子；②回收主线因果与误导（写清谁利用了什么规则/信息差）；③让读者想继续追问的缺口（不要全解释光）。少形容词断言，多可复述的细节与动作后果。",
  "boss_epilogue": {
    "third_person_arc": "第三人称「他/她/它/其人」写 Boss：只写**本局内已发生之事**的收束与余波——权谋、仪式、误解、代价、残迹、代理人、规则反噬等；可写未露真身时的影子与后果。420～900 字，\\n\\n 分段。要有戏剧张力与具体画面，不要年表式流水账。",
    "first_person_soliloquy": "第一人称「我」独白心声，**紧接**在第三人称段落之后供玩家阅读：80～220 字；短句与留白，像心里漏出来的一句半句；可偏执、可自嘲、可压抑、可疯，但必须与上文第三人称事实**情绪对齐**，禁止突然 OOC 卖萌或土味情话。"
  },
  "npc_epilogues": [
    {
      "scene_npc_id": "与远征日志 scene_npcs 的 id 严格一致",
      "call_name": "称呼",
      "role_tag": "可选",
      "third_person_arc": "第三人称写该 NPC **黑化/异化/立场反转之前**仍属「正常、可共情」时的侧写短篇：日常、职业、牵挂、弱点或尚未扭曲时的选择，220～520 字，\\n\\n 分段；是**常态故事**而非本局收束流水账。若角色在日志中从未正常：可写其被副本吞噬**前一日**、坊间传闻中的旧面目或与伏笔呼应的虚构补完，仍须第三人称。",
      "first_person_soliloquy": "**黑化之后**的第一人称「我」独白：执念、自嘲、恨意、恐惧或残存人性的一线，80～220 字；短句与留白，须与上文「常态侧写」形成对照，禁止 OOC 卖萌或土味情话。"
    }
  ],
  "unresolved_hooks": [ "悬念短句1", "短句2" ]
}

硬性要求：
- Boss 与每条 npc 都必须同时给出 third_person_arc 与 first_person_soliloquy；两段**不可混用人称**，第三段全程第三人称，独白段全程第一人称。
- npc_epilogues 至少 1 条且须对应日志中出现过的关键副本 NPC（非聊天侧同行者）；每条须遵守「third_person_arc＝黑化前常态故事、first_person_soliloquy＝黑化后独白」分工。若 Boss 在日志里有独立 scene_npc id，**也要**在 npc_epilogues 里单开一条：同上分工；boss_epilogue 仍写关底威胁轴心/执念本体（与 NPC 条**视角不同**、勿整段复制）。
- unresolved_hooks 3～6 条，每条 18～72 字，像预告片旁白，忌空洞提问。
- 禁止编造用户现实世界隐私；尊重结局成败事实。`,
              Ve = await dc({
                apiConfig: n,
                addApiLog: a,
                messages: [{ sender: "me", text: ve }],
                logScene: "echo_expedition_finalize",
                logContactName: le.name,
              });
            let Ae = null;
            try {
              const $e = Ve.match(/\{[\s\S]*\}/);
              $e ? (Ae = JSON.parse($e[0])) : (Ae = JSON.parse(Ve));
            } catch {
              throw new Error("Parse failed");
            }
            const te = M4(Ae),
              Se = te ? Nh(te.boss_epilogue) : { third: "", first: "" },
              Fe =
                ((ke = te == null ? void 0 : te.npc_epilogues) == null
                  ? void 0
                  : ke.some(($e) => Dm($e).third || Dm($e).first)) ?? !1;
            return !te || (!te.truth_story && !(Se.third || Se.first) && !Fe)
              ? { success: !1, message: "模型返回的结算内容为空，请重试。" }
              : { success: !0, settlement_lore: te };
          } catch (W) {
            return {
              success: !1,
              message:
                (W == null ? void 0 : W.message) === "Parse failed"
                  ? "结算文本无法解析，请重试。"
                  : "结算生成失败，请稍后重试。",
            };
          } finally {
            q(!1);
          }
        },
        [n, a, i, o],
      ),
      H = l.useCallback(
        async ({
          session: pe,
          history: se,
          endData: Te,
          settlementLore: ke,
          archiveScope: W = "full",
          includeTruth: ue = !0,
          includeHooks: re = !0,
          includeBoss: he = !0,
          selectedNpcIds: ge = null,
          coverEmoji: J,
          titleLabel: G,
        }) => {
          var Ve, Ae, te, Se, Fe;
          const we = M4(ke);
          if (!we)
            return {
              success: !1,
              message: "尚无有效结算档案，请先生成或等待生成完成。",
            };
          let Q;
          if (W === "full") Q = we;
          else {
            const $e = new Set((ge || []).map(String));
            Q = {
              truth_story: ue ? we.truth_story : "",
              boss_epilogue: he ? we.boss_epilogue : "",
              npc_epilogues:
                Array.isArray(ge) && ge.length
                  ? (we.npc_epilogues || []).filter((tt) =>
                      $e.has(String(tt.scene_npc_id)),
                    )
                  : we.npc_epilogues || [],
              unresolved_hooks: re ? we.unresolved_hooks : [],
            };
          }
          const ve = {
            id: eZ(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
            title:
              (G && String(G).trim()) ||
              String(
                ((Ve = pe == null ? void 0 : pe.quest) == null
                  ? void 0
                  : Ve.headline) || "",
              ).slice(0, 36) ||
              "远征归档",
            coverEmoji: (J && String(J).trim().slice(0, 8)) || "📌",
            sessionLight: {
              background: String(
                (pe == null ? void 0 : pe.background) || "",
              ).slice(0, 600),
              tonePresetLabel:
                (Ae = pe == null ? void 0 : pe.expeditionTone) == null
                  ? void 0
                  : Ae.tonePresetLabel,
              questHeadline: String(
                ((te = pe == null ? void 0 : pe.quest) == null
                  ? void 0
                  : te.headline) || "",
              ).slice(0, 80),
            },
            historyDigest: T4(se, 5e3),
            expeditionHistoryReplay: rZ(se),
            endSnapshot: {
              is_success: !!(Te != null && Te.is_success),
              summary: String((Te == null ? void 0 : Te.summary) || "").slice(
                0,
                800,
              ),
              finalRewardName:
                (Se = Te == null ? void 0 : Te.finalReward) == null
                  ? void 0
                  : Se.name,
              finalRewardIcon:
                (Fe = Te == null ? void 0 : Te.finalReward) == null
                  ? void 0
                  : Fe.icon,
            },
            settlementLore: Q,
            characterCodex: {},
            expeditionPlayerSnapshot:
              (pe == null ? void 0 : pe.expeditionPlayerSnapshot) ?? null,
          };
          return (
            Z(($e) => {
              const tt = [ve, ...$e].slice(0, C4);
              return (V && Sa(Yx, tt).catch((Xe) => {}), tt);
            }),
            { success: !0, archive: ve }
          );
        },
        [V],
      ),
      Y = l.useCallback(
        async (pe, se) => {
          let Te = null;
          return (
            Z((ke) => {
              const W = ke.findIndex((re) => re.id === pe);
              if (W < 0) return ke;
              Te = { ...ke[W], ...se, updatedAt: Date.now() };
              const ue = [...ke];
              return ((ue[W] = Te), V && Sa(Yx, ue).catch((re) => {}), ue);
            }),
            Te
              ? { success: !0, archive: Te }
              : { success: !1, message: "未找到归档。" }
          );
        },
        [V],
      ),
      U = l.useCallback(
        async ({ archiveId: pe, npcKey: se, mode: Te }) => {
          var Q, ve;
          const ke = String(se || "").trim();
          if (!pe || !ke) return { success: !1, message: "参数不完整。" };
          const W = O.find((Ve) => Ve.id === pe);
          if (!W) return { success: !1, message: "归档不存在。" };
          const ue = W.settlementLore;
          let re = "";
          if (ke === "__boss__") {
            const Ve = Nh(ue == null ? void 0 : ue.boss_epilogue);
            re = `【Boss 结算·第三人称经历】
${Ve.third}

【Boss 结算·第一人称独白】
${Ve.first}`.slice(0, 2800);
          } else {
            const Ve = ((ue == null ? void 0 : ue.npc_epilogues) || []).find(
              (te) => String(te.scene_npc_id) === ke,
            );
            if (!Ve)
              return { success: !1, message: "未找到该角色的结算片段。" };
            const Ae = Dm(Ve);
            re = `【称呼】${Ve.call_name || ke}（${Ve.role_tag || "NPC"}）
【黑化前·常态故事（第三人称）】
${Ae.third}

【黑化后·独白（第一人称）】
${Ae.first}`.slice(0, 2800);
          }
          const he =
              iZ(W.expeditionHistoryReplay, 10500) ||
              String(W.historyDigest || "").slice(0, 9e3),
            ge =
              ((ve = (Q = W.characterCodex) == null ? void 0 : Q[ke]) == null
                ? void 0
                : ve.versions) || [],
            J = ge.length ? String(ge[ge.length - 1].long_profile || "") : "",
            we = `你是「聊天 App 用人设编辑」：输出给**另一套对话 AI**阅读的**执行规格**（虚构），不是小说、不是远征叙事续写。

【体裁铁律】
- 全文（含 chat_playbook_markdown、long_profile 与各字符串字段）须为**客观、精炼**的说明/档案体：短句、分条、可执行；**禁止**无限流式感官堆砌、**禁止**第二人称副本腔、**禁止**把剧情当人设大段复述。
- 从材料中只提炼**稳定身份、口癖、价值观、对玩家距离感、可说什么/不可说什么**；剧情事实若需出现，用一两句第三人称**备忘式**点到即可，勿展开成故事段落。
- chat_playbook_markdown 是**操作手册**（标题 + 条列），勿写成文学段落；long_profile 是**人类可扫的档案摘要**（第三人称），仍须克制、非故事体。

${
  Te === "append" && J
    ? `【既有设定（须承接、可修订矛盾之处）】
${J.slice(0, 4e3)}

`
    : ""
}
【远征过程纪要（归档保留；仅作事实与出场核对；勿模仿其文风写人设）】
${he || "（无归档剧情流；仅以下结算材料。）"}

【本局结算中的该角色材料（须承接；提炼为扮演规则，勿整段改写成人设散文）】
${re}

【玩家本人锚点（隐性化用：扮演时如何「对这个人」反应，勿整段照抄进角色台词）】
${Vx(dy({ expeditionPlayerSnapshot: W.expeditionPlayerSnapshot }, i, o)).slice(0, 1200)}

【输出】只返回**一个**可被 JSON.parse 解析的 JSON 对象（不要 Markdown 代码围栏、不要前后说明文字）。字符串内的换行写成 \\n，引号须转义。
- chat_playbook_markdown：800～1600 字；**操作手册式** Markdown（多级标题 + 短条列），让执行 AI 一眼能照做；禁止副本叙事口吻。
- 下列各字段为结构化摘要（与 markdown 一致、勿自相矛盾），措辞仍须客观、可执行。

字段与类型示例（键名须完全一致；值替换成你的生成结果）：
{
  "display_name": "对外主称呼",
  "alias_and_role": "外号/职务/身份标签一行",
  "appearance_body": "外貌、体态、气质符号物、辨识特征；180～320字，第三人称",
  "voice_and_speech": "声线、语速、口癖、常用句骨架、断句习惯、禁用口吻；180～320字",
  "personality_core": "性格主轴、缺陷、对外/对内反差；200～360字",
  "values_and_fears": "在乎什么、怕失去什么、底线；120～220字",
  "addressing_the_user": "怎么称呼玩家、距离感（敬/昵/阴阳/克制）、试探与停顿习惯；120～220字",
  "relationship_to_player": "与玩家在本局后的关系暗示、张力分寸、可写与不可写；200～320字",
  "reply_playbook_bullets": ["扮演执行要点1（≤60字）", "要点2", "要点3", "要点4", "要点5"],
  "first_message_suggestions": ["自然开场示例1", "示例2"],
  "taboos_for_actor_ai": ["扮演禁止1", "禁止2", "禁止3"],
  "quotable_hooks": ["意象或短句钩子1", "钩子2"],
  "chat_playbook_markdown": "见上文要求",
  "long_profile": "第三人称档案式综叙，客观克制，500～800字，\\n\\n 分段；不写剧情复述、不用远征副本文风"
}

禁止编造玩家现实隐私；与结算材料冲突处以结算材料为准。`;
          try {
            const Ve = await dc({
              apiConfig: n,
              addApiLog: a,
              messages: [{ sender: "me", text: we }],
              logScene: "echo_expedition_codex_expand",
              logContactName: le.name,
            });
            let Ae = null;
            try {
              Ae = oZ(Ve);
            } catch {
              throw new Error("Parse failed");
            }
            (Ae &&
              Ae.reply_playbook_bullets == null &&
              Array.isArray(Ae.reply_playbook_bulbles) &&
              (Ae.reply_playbook_bullets = Ae.reply_playbook_bulbles),
              delete Ae.character_sheet_xml);
            const te = String(
                (Ae == null ? void 0 : Ae.chat_playbook_markdown) ?? "",
              ).trim(),
              Se = String((Ae == null ? void 0 : Ae.long_profile) ?? "").trim(),
              Fe = {
                at: Date.now(),
                mode: Te === "append" ? "append" : "regenerate",
                blocks: Ae,
                long_profile: String((te || Se || "").slice(0, 14e3)),
              },
              $e = Te === "append" ? [...ge, Fe] : [Fe];
            return (
              Z((tt) => {
                const Xe = tt.findIndex((_t) => _t.id === pe);
                if (Xe < 0) return tt;
                const ht = tt[Xe],
                  Pe = { ...(ht.characterCodex || {}) };
                Pe[ke] = { versions: $e };
                const ut = [...tt];
                return (
                  (ut[Xe] = {
                    ...ht,
                    characterCodex: Pe,
                    updatedAt: Date.now(),
                  }),
                  V && Sa(Yx, ut).catch((_t) => {}),
                  ut
                );
              }),
              { success: !0 }
            );
          } catch (Ve) {
            return {
              success: !1,
              message:
                (Ve == null ? void 0 : Ve.message) === "Parse failed"
                  ? "解析失败，请重试。"
                  : "生成失败",
            };
          }
        },
        [n, a, O, i, o, V],
      ),
      ce = async (pe, se) => {
        var ut, _t;
        $(!0);
        const ke = (
            Array.isArray(pe.expeditionCompanions)
              ? pe.expeditionCompanions
              : []
          ).map((Ee) => ({
            id: String((Ee == null ? void 0 : Ee.id) ?? ""),
            name: String(
              ((Ee == null ? void 0 : Ee.name) || "未命名").trim() || "未命名",
            ),
            personaSnapshot:
              typeof (Ee == null ? void 0 : Ee.personaSnapshot) == "string" &&
              Ee.personaSnapshot.trim()
                ? Ee.personaSnapshot.trim()
                : "（本局人设快照缺失：仅用已给出的称呼保守扮演，勿臆造用户现实隐私。）",
          })),
          W = D4(ke.filter((Ee) => Ee.id)),
          ue = $4(pe),
          re = cy(ue),
          he = Array.isArray(pe.expeditionWorldbookSnapshots)
            ? pe.expeditionWorldbookSnapshots
            : [],
          ge = F4(he),
          J = pe.selectedItems.map((Ee) => {
            var fe, He, Ie, Ce;
            return `[${Ee.name}]: 算力${((fe = Ee.attributes) == null ? void 0 : fe.computation) || 0}, 武力${((He = Ee.attributes) == null ? void 0 : He.force) || 0}, 感知${((Ie = Ee.attributes) == null ? void 0 : Ie.perception) || 0}, 抗压${((Ce = Ee.attributes) == null ? void 0 : Ce.stress_resist) || 0} | 技能: ${Ee.passive_skill || "无"}`;
          }).join(`
`),
          { catalogText: G } = await M(d),
          we = !!G,
          Q = we
            ? `,
  "expedition_bgm": { "song_catalog_index": <1 到曲库首数之间的整数> }`
            : "",
          ve = we
            ? ""
            : `
【配乐】玩家未绑定乐听歌单：请勿输出 expedition_bgm 或任何配乐相关字段。`,
          Ve = ly(),
          Ae = Vx(dy(pe, i, o)),
          te = L4(ke.filter((Ee) => Ee.id).length > 0),
          Se = ke.filter((Ee) => Ee.id).length > 0,
          Fe = Se
            ? "玩家行动的结果剧情描述（不少于400字）。连锁反应与成败须配**细密感官**（声层远近、材质回响、体温冷汗、肌肉僵松等）；若有同行者，与用户之间的联结用**贴身临场细节**含蓄托出，忌为互动而尬聊或舞台式表演。少用对用户外貌凝视的长写。若上一节点 NPC 仍合理在场，可择其一落实其对「你」执念的**一瞬**（不必全员出场）。"
            : "玩家行动的结果剧情描述（不少于400字）。写出动作过程、连锁反应与**层层落地的感官细节**（尤其听觉与触觉），避免空泛吓人句。若上一节点 NPC 仍合理在场，可择其一落实其对「你」执念的**一瞬**。",
          $e = Se
            ? "下一节点剧情（不少于400字）。延续规则/未知压迫，环境与身体本能反应写细；同行者在场以**含蓄体感与分寸**暗示，与「叙事笔法」一致。少用对用户外貌的长写。须**落实 next_node.scene_npcs 每条 interaction_beat**。"
            : "下一节点剧情（不少于400字）。压迫与异常须通过**细感官**推进，忌只写表面形容词。须**落实 next_node.scene_npcs 每条 interaction_beat**（无同行时 NPC 与「你」的互动可略多但仍须克制有层次）。",
          tt =
            pe.quest && typeof pe.quest == "object"
              ? JSON.stringify(pe.quest, null, 0)
              : "（若缺失则根据时间线背景与上文自洽补全主线，不得与已发生剧情矛盾）",
          Xe =
            Array.isArray((ut = pe.node) == null ? void 0 : ut.scene_npcs) &&
            pe.node.scene_npcs.length
              ? JSON.stringify(pe.node.scene_npcs, null, 0)
              : "（上一节点未登记 NPC 则本节点须补齐至少 1 名副本 NPC）",
          ht =
            pe.boss_seed && typeof pe.boss_seed == "object"
              ? JSON.stringify(pe.boss_seed, null, 0)
              : "（首节点未写入 boss_seed 则从已发生剧情自洽，勿与已埋伏笔矛盾）",
          Pe = `
你是一个跑团地下城主(DM)。玩家的小队正在极度危险的平行时间线中探索。
【时间线背景】：${pe.background}
${re}
${Ve}
${Ae}
${te}
【当前节点进度】：${pe.currentNodeIndex}/5
【玩家携带的武装/物品】：
${J}
${W}
${ge}
${G}
${ve}

【本局主线快照】（headline/objective/stakes_if_fail 禁止擅自改写；只可通过剧情推进揭示；用顶层 quest_phase_note 更新 phase_note）
${tt}
【上一节点现场 NPC 快照】
${Xe}
【Boss 开局埋根快照】（首 API 生成，后续节点须咬合收紧，勿自相矛盾）
${ht}
【NPC 续写】**优先保留**快照中仍合理在场的 **id** 深挖（关系、秘密、态度递进写在 arc_delta）；同 id 须继承 obsession_toward_player 内核并逐步扭曲或加深；**非必要勿全员换血**——新 id 须为增量并交代来路，且须换一套执念逻辑，忌与快照内他人撞型。

【上一节点】：${pe.node.title}
【剧情描述】：${pe.node.description}
【玩家选择的选项】：${(_t = pe.node.options.find((Ee) => Ee.id === se)) == null ? void 0 : _t.text}

请根据玩家的选择、本局基调、**玩家本人设定（上文【玩家身份】）**、携带的物品属性以及小队状态${ke.length ? "与同行者人设快照" : ""}${he.length ? "与世界书快照条目" : ""}，推演该选择的【结果】，并生成【下一节点】（如果当前是第5个节点，则生成结局）。
【副本可玩性（强制）】
- resolution 叙事中须让读者感到**主线在推进或受挫**（成功/暴露/新障碍皆可），禁止只写氛围与打斗却与「要完成的任务」脱节。
- 若未结局：next_node 必须含 situation_summary、scene_npcs（至少 1 名副本 NPC）、options 每条必含 blurb；副本 NPC 须继续有可互动性（对白/条件/阻拦），不得全员蒸发。**优先沿用**上一快照 id（≥1 名熟面孔延续），全员替换须有强剧情理由；若增新人，宜**增量 1 名**并写清来路。
- 若未结局：scene_npcs 每人须含 signal_sketch、obsession_toward_player、interaction_beat、arc_delta；**大关底 Boss** 须含 eerie_echoes（2～3 条）；至少一人 role_tag 含 boss / lieutenant / herald / warden 之一或中文同义（威胁轴心可非人类）；**叙事与 JSON 一致**（玩家侧悬念靠 signal_sketch + eerie_echoes，执念只活在叙事肌理里）。
- 若本局存在 boss_seed：resolution 与 next_node 须**咬合**其中 trace / proxy / shadow_agenda 线索，允许 Boss 仍不露真身但「痕更深」；禁止另起一套与 boss_seed 矛盾的终局威胁叙事。
- 若未结局：三条选项须**分工明确**（调查/硬闯/交易或谈判等），blurb 须让玩家理解选完大概在赌什么、推进哪条主线子目标。
注意：请使用掷骰判定(attribute_check)来决定玩家行动是否成功，并可能带来理智值(health_change)和紧张度(tension)的改变。每次行动后【必须】让玩家发现新的物品或情报(discoverable)；discoverable 的 description、process 同样要写**具体质感与感官**（形貌、触感、声、味择多），忌空洞清单句。
${ke.length ? "若尚未结束：resolution 与 next_node 须落实「同行协议」与「叙事笔法」——每人至少一处**细而克制**的在场痕迹；选项仍须与同行者挂钩。" : ""}
${he.length ? "若有世界书素材：剧情与发现物可呼应其中设定，但仍勿引入快照外的世界书条目。" : ""}

返回严格的 JSON 格式：
{
  "quest_phase_note": "覆盖更新 quest.phase_note（1～2句）；若 is_end 为 true 则交代相对主线的结局落点",
  "resolution": {
    "description": "${Fe}请务必频繁使用 \\n\\n 进行分段，每段控制在 2-4 行以内，保持阅读节奏轻快，不要出现大段文字。",
    "health_change": 0, // 理智值变化（-30 到 +10，负数表示受损）
    "attribute_check": { // (可选)
      "attribute": "computation|force|perception|stress_resist", // 判定的属性
      "target": 50, // 目标难度(0-100)
      "roll": 65, // 玩家加上物品属性后的总掷骰结果(0-100)
      "is_success": true // 是否大于等于目标难度
    },
    "status_effect": { // (可选)
      "name": "状态名称，如：流血、启发",
      "type": "buff|debuff",
      "duration": 3 // 持续回合数
    },
    "discoverable": { // (必须提供！每次调用API都必须触发物品或情报的发现)
      "name": "物品/情报名称",
      "type": "intel|item",
      "description": "具体物品或情报的详细外观/内容描述（不少于200字）",
      "process": "发生过程：详细描写发现该物品/情报的经过（不少于200字）"
    }
  },
  "environment": { // 动态环境变化
    "weather": "rain|fog|neon|dark|clear",
    "atmosphere": "tense|calm|eerie|hostile",
    "description": "简短但含一句具体感官（声/光/触/味之一），忌空泛套话"
  },
  "tension": 45, // 当前场景的紧张度，0 到 100
  "is_end": ${pe.currentNodeIndex >= 5 ? "true" : "false"}, // 是否远征结束（第5节点后必须为true，或者中途理智归零团灭也是true）
  "is_success": true, // 如果结束，是否生还并成功解决核心危机
  "summary": "DM对这次远征的一句话总结", // 如果结束
  "reward": { // 如果成功结束，生成一个顶级战利品，否则为 null
     "name": "战利品名称",
     "icon": "emoji",
     "rarity": "SR",
     "description": "唯美的描述",
     "story": "它的来历",
     "passive_skill": "被动技能",
     "attributes": { "computation": 0, "force": 0, "perception": 0, "stress_resist": 0 }
  },
  "next_node": { // 如果未结束，提供下一个节点的剧情和选项。如果已结束则可以为 null
    "title": "下一节点名称",
    "situation_summary": "第二人称：此刻处局与当务之急（2句内）",
    "scene_npcs": [
      {
        "id": "npc_1",
        "call_name": "称呼",
        "stance": "中立|敌对|引导|未知",
        "role_tag": "boss|lieutenant|herald|warden|witness|…",
        "signal_sketch": "≤36字 玩家便签印象",
        "eerie_echoes": ["大关底 Boss：碎片1", "碎片2", "碎片3"],
        "voice_register": "可选",
        "demeanor_one_line": "可选",
        "obsession_toward_player": "【DM 内部】",
        "interaction_beat": "【DM 内部】",
        "arc_delta": "【DM 内部】",
        "agenda_one_line": "此刻议程（一句）"
      }
    ],
    "description": "${$e}须落实 scene_npcs 互动；请务必频繁使用 \\n\\n 进行分段，每段控制在 2-4 行以内。",
    "options": [
      { "id": "A", "text": "具体行动句", "blurb": "推进主线的含义（≤28字）" },
      { "id": "B", "text": "…", "blurb": "…" },
      { "id": "C", "text": "…", "blurb": "…" }
    ]
  }${Q}
}
`;
        try {
          const Ee = await dc({
            apiConfig: n,
            addApiLog: a,
            messages: [{ sender: "me", text: Pe }],
            logScene: "echo_expedition_resolve",
            logContactName: le.name,
          });
          let fe = null;
          try {
            const Ie = Ee.match(/\{[\s\S]*\}/);
            Ie ? (fe = JSON.parse(Ie[0])) : (fe = JSON.parse(Ee));
          } catch {
            throw new Error("Parse failed");
          }
          if (fe && typeof fe == "object") {
            typeof fe.quest_phase_note != "string" &&
              (fe.quest_phase_note = "");
            const Ie = fe.next_node;
            if (
              Ie &&
              typeof Ie == "object" &&
              (typeof Ie.situation_summary != "string" &&
                (Ie.situation_summary = ""),
              (Ie.scene_npcs = E4(Ie.scene_npcs)),
              Array.isArray(Ie.options))
            ) {
              const Ce = ["A", "B", "C"];
              Ie.options = Ie.options.map((Re, De) => ({
                id:
                  String((Re == null ? void 0 : Re.id) ?? "")
                    .trim()
                    .slice(0, 8) ||
                  Ce[De] ||
                  "X",
                text: String((Re == null ? void 0 : Re.text) ?? "").slice(
                  0,
                  400,
                ),
                blurb: String(
                  (Re == null ? void 0 : Re.blurb) != null
                    ? Re.blurb
                    : (Re == null ? void 0 : Re.player_intent) != null
                      ? Re.player_intent
                      : "",
                ).slice(0, 40),
              }));
            }
          }
          let He = null;
          return (
            fe.is_end &&
              fe.is_success &&
              fe.reward &&
              ((He = {
                id: Date.now().toString(),
                status: "identified",
                type: "fragment",
                condition: "ethereal",
                keywords: ["远征", "战利品"],
                origin: pe.background,
                owner: "无名潜入者",
                ...fe.reward,
                timestamp: Date.now(),
              }),
              S((Ie) => [He, ...Ie])),
            fe.is_end
              ? (window.dispatchEvent(new CustomEvent(bm)), h(!1))
              : we && fe.expedition_bgm && (await C(d, fe.expedition_bgm)),
            { success: !0, data: { ...fe, finalReward: He } }
          );
        } catch {
          return { success: !1, message: "时空乱流干扰了信号，节点推进失败。" };
        } finally {
          $(!1);
        }
      };
    return e.jsx(RC.Provider, {
      value: {
        onClose: s,
        inventory: E,
        coins: j,
        shopLevel: I,
        isScavenging: D,
        appraisalHistory: P,
        scavengeItem: X,
        identifyItem: je,
        discardItem: xe,
        craftItems: ie,
        continueStory: ye,
        sendItem: R,
        startSandbox: oe,
        resolveSandboxNode: ce,
        saveSandboxState: (pe) => Sa("echo_sandbox_save", pe),
        loadSandboxState: () => Rr("echo_sandbox_save"),
        expeditionLetingBinding: d,
        saveExpeditionLetingBinding: _,
        expeditionBgmInfo: f,
        expeditionBgmIsPlaying: m,
        toggleExpeditionLetingPlayback: k,
        resetExpeditionLetingAudioUi: A,
        expeditionArchives: O,
        isFinalizingSettlement: K,
        finalizeExpeditionSettlement: ee,
        saveExpeditionArchive: H,
        updateExpeditionArchive: Y,
        expandEchoCharacterCodex: U,
        uiScheme: g,
        setUiScheme: N,
        toggleUiScheme: w,
      },
      children: t,
    });
  },
  uZ = () => {
    const t = l.useContext(RC);
    if (t == null)
      throw new Error("useEcho must be used within a EchoProvider");
    return t;
  },
  uy = [
    {
      id: "cloth",
      name: "净化协议",
      label: "净化",
      icon: e.jsx(Mc, { size: 18 }),
      match: ["dirty", "normal"],
    },
    {
      id: "dryer",
      name: "蒸发作业",
      label: "蒸发",
      icon: e.jsx(Wr, { size: 18 }),
      match: ["wet"],
    },
    {
      id: "hammer",
      name: "物理破拆",
      label: "破拆",
      icon: e.jsx(P0, { size: 18 }),
      match: ["rusty"],
    },
    {
      id: "wand",
      name: "以太调谐",
      label: "调谐",
      icon: e.jsx(eT, { size: 18 }),
      match: ["ethereal"],
    },
  ];
function z4(t) {
  const s = String(t || "").trim();
  return s
    ? /^boss$/i.test(s)
      ? !0
      : /终局|关底|主脑|核心威胁|大关底|黑幕/i.test(s)
    : !1;
}
function R4(t, { title: s = "扮演卡导出", fallbackText: n = "" } = {}) {
  const a = { ...(t && typeof t == "object" ? t : {}) };
  delete a.character_sheet_xml;
  const r = [],
    i = String(s || "扮演卡导出").trim() || "扮演卡导出";
  r.push(`# ${i}`, "");
  const o = (f, p) => {
    const m = String(p ?? "").trim();
    m && r.push(`## ${f}`, "", m, "");
  };
  (o("称呼", a.display_name),
    o("外号 / 身份标签", a.alias_and_role),
    o("外貌与辨识", a.appearance_body),
    o("声线与说话方式", a.voice_and_speech),
    o("性格内核", a.personality_core),
    o("价值与恐惧", a.values_and_fears),
    o("对玩家的称呼", a.addressing_the_user),
    o("与玩家的关系", a.relationship_to_player));
  const c = (f, p) => {
    !Array.isArray(p) ||
      !p.filter(Boolean).length ||
      (r.push(`## ${f}`, ""),
      p.forEach((m) => r.push(`- ${String(m).trim()}`)),
      r.push(""));
  };
  (c("扮演执行要点", a.reply_playbook_bullets),
    c("开场示例", a.first_message_suggestions),
    c("扮演禁忌", a.taboos_for_actor_ai),
    c("意象钩子", a.quotable_hooks));
  const d = String(a.chat_playbook_markdown ?? "").trim();
  (d && r.push("---", "", "## 扮演执行稿", "", d, ""),
    o("整合长文", a.long_profile));
  let u = r
    .join(
      `
`,
    )
    .trim();
  if (!u) {
    const f = String(n ?? "").trim();
    f &&
      (u = `# ${i}

${f}`);
  }
  return u;
}
const fZ = (t) => {
    let n = ((r) => {
      const i = ["dirty", "wet", "rusty", "ethereal"],
        o = r == null ? void 0 : r.toLowerCase();
      return i.includes(o) ? o : o === "normal" ? "dirty" : null;
    })(t.condition);
    if (n) return n;
    const a = (t.name + t.description).toLowerCase();
    return ["泪", "水", "湿", "雨", "海", "雪", "泣"].some((r) => a.includes(r))
      ? "wet"
      : ["锈", "石", "铁", "硬", "固", "封"].some((r) => a.includes(r))
        ? "rusty"
        : ["光", "梦", "魂", "影", "魔", "咒", "幻"].some((r) => a.includes(r))
          ? "ethereal"
          : "dirty";
  },
  mZ = ({ uiScheme: t }) =>
    t === "day"
      ? null
      : e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none z-0 overflow-hidden",