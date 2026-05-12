                            ],
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: p
                        ? "mx-6 mb-4 flex rounded-2xl border border-[#1a1a1a]/8 bg-[#1a1a1a]/[0.03] p-1"
                        : m
                          ? A
                          : "mx-6 mb-4 flex rounded-2xl border border-white/[0.08] bg-black/25 p-1",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => I("local"),
                          className: p
                            ? `relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-sans font-medium tracking-wide transition ${T === "local" ? "bg-white text-[#1a1a1a] shadow-sm ring-1 ring-[#1a1a1a]/8" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]/65"}`
                            : m
                              ? `flex flex-1 items-center justify-center gap-2 border-r border-[var(--e-line-strong)] py-2.5 text-[10px] font-mono uppercase tracking-wider transition last:border-r-0 ${T === "local" ? "bg-[var(--e-cyan)]/[0.08] text-[var(--e-cyan)]" : "text-[var(--e-muted)] hover:bg-[var(--e-surface)] hover:text-[var(--e-body)]"}`
                              : `relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-medium tracking-wide transition ${T === "local" ? "bg-white/10 text-white shadow-inner" : "text-white/40 hover:text-white/65"}`,
                          children: [
                            e.jsx(G0, {
                              className: "h-3.5 w-3.5 opacity-80",
                              strokeWidth: 1.75,
                            }),
                            "本机",
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => I("netease"),
                          className: p
                            ? `relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-sans font-medium tracking-wide transition ${T === "netease" ? "bg-white text-[#1a1a1a] shadow-sm ring-1 ring-[#1a1a1a]/8" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]/65"}`
                            : m
                              ? `flex flex-1 items-center justify-center gap-2 py-2.5 text-[10px] font-mono uppercase tracking-wider transition ${T === "netease" ? "bg-[var(--e-cyan)]/[0.08] text-[var(--e-cyan)]" : "text-[var(--e-muted)] hover:bg-[var(--e-surface)] hover:text-[var(--e-body)]"}`
                              : `relative flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-[11px] font-medium tracking-wide transition ${T === "netease" ? "bg-white/10 text-white shadow-inner" : "text-white/40 hover:text-white/65"}`,
                          children: [
                            e.jsx(ao, {
                              className: "h-3.5 w-3.5 opacity-80",
                              strokeWidth: 1.75,
                            }),
                            "网易云",
                          ],
                        }),
                      ],
                    }),
                    Z
                      ? e.jsx("div", {
                          className: p
                            ? "mx-6 mb-3 rounded-xl border border-red-200 bg-red-50/90 px-3 py-2 text-center text-[11px] text-red-700/90"
                            : m
                              ? "mx-6 mb-3 border border-[#FF3B30]/35 bg-[#FF3B30]/[0.06] px-3 py-2 text-center text-[10px] font-mono text-[#FF3B30]"
                              : "mx-6 mb-3 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-center text-[11px] text-red-200/90",
                          children: Z,
                        })
                      : null,
                    e.jsx("div", {
                      className: p
                        ? "min-h-0 flex-1 overflow-y-auto px-6 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#1a1a1a]/10"
                        : m
                          ? "min-h-0 flex-1 overflow-y-auto px-6 pb-4 scrollbar-hide"
                          : "min-h-0 flex-1 overflow-y-auto px-6 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10",
                      children: $
                        ? e.jsxs("div", {
                            className: p
                              ? "flex flex-col items-center justify-center gap-3 py-16 text-[#1a1a1a]/35"
                              : m
                                ? "flex flex-col items-center justify-center gap-3 py-16 text-[var(--e-muted)]"
                                : "flex flex-col items-center justify-center gap-3 py-16 text-white/35",
                            children: [
                              e.jsx(Sn, {
                                className: `h-7 w-7 animate-spin ${m ? "text-[var(--e-cyan)]/70" : ""}`,
                                strokeWidth: 1.25,
                              }),
                              e.jsx("span", {
                                className: p
                                  ? "text-[10px] font-sans uppercase tracking-[0.3em]"
                                  : m
                                    ? "text-[9px] font-mono uppercase tracking-[0.35em] text-[var(--e-muted)]"
                                    : "text-[10px] font-sans uppercase tracking-[0.3em]",
                                children: "载入列表",
                              }),
                            ],
                          })
                        : T === "local"
                          ? e.jsx("ul", {
                              className: `pb-6 ${m ? "space-y-1.5" : "space-y-2"}`,
                              children:
                                L.length === 0
                                  ? e.jsx("li", {
                                      className: p
                                        ? "py-12 text-center text-[12px] text-[#1a1a1a]/40"
                                        : m
                                          ? "border border-[var(--e-line)] bg-[var(--e-page)] py-10 text-center text-[10px] font-mono text-[var(--e-muted)]"
                                          : "py-12 text-center text-[12px] text-white/35",
                                      children:
                                        "暂无本机歌单，请先在乐听中创建并导入音乐",
                                    })
                                  : L.map((ce) => {
                                      const pe = z === `local_${ce.id}`,
                                        se =
                                          (n == null ? void 0 : n.source) ===
                                            "local" &&
                                          String(n.playlistId) ===
                                            String(ce.id);
                                      return e.jsx(
                                        "li",
                                        {
                                          children: e.jsxs("button", {
                                            type: "button",
                                            disabled: pe,
                                            onClick: () => ne(ce),
                                            className: p
                                              ? `flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${se ? "border-[#1a1a1a]/20 bg-[#1a1a1a]/[0.04] ring-1 ring-[#1a1a1a]/10" : "border-[#1a1a1a]/8 bg-white hover:border-[#1a1a1a]/15 hover:bg-[#fcfcfc]"}`
                                              : m
                                                ? k(se, pe)
                                                : `flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${se ? v : "border-white/[0.07] bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]"}`,
                                            children: [
                                              e.jsx("div", {
                                                className: p
                                                  ? "h-11 w-11 shrink-0 rounded-xl border border-[#1a1a1a]/8 bg-gradient-to-br from-[#1a1a1a]/[0.04] to-transparent"
                                                  : m
                                                    ? C
                                                    : "h-11 w-11 shrink-0 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent",
                                                style: ce.cover
                                                  ? {
                                                      backgroundImage: `url(${ce.cover})`,
                                                      backgroundSize: "cover",
                                                      backgroundPosition:
                                                        "center",
                                                    }
                                                  : void 0,
                                              }),
                                              e.jsxs("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                  e.jsx("p", {
                                                    className: p
                                                      ? "truncate text-sm font-medium text-[#1a1a1a]"
                                                      : m
                                                        ? "truncate text-xs font-mono text-[var(--e-primary)]"
                                                        : "truncate text-sm font-medium text-white/90",
                                                    children:
                                                      ce.name || "未命名歌单",
                                                  }),
                                                  e.jsx("p", {
                                                    className: p
                                                      ? "text-[10px] text-[#1a1a1a]/40"
                                                      : m
                                                        ? "text-[9px] font-mono text-[var(--e-muted)]"
                                                        : "text-[10px] text-white/35",
                                                    children: "本机 · 乐听",
                                                  }),
                                                ],
                                              }),
                                              pe
                                                ? e.jsx(Sn, {
                                                    className: p
                                                      ? "h-4 w-4 shrink-0 animate-spin text-[#1a1a1a]/40"
                                                      : m
                                                        ? "h-4 w-4 shrink-0 animate-spin text-[var(--e-cyan)]/60"
                                                        : "h-4 w-4 shrink-0 animate-spin text-white/50",
                                                  })
                                                : null,
                                            ],
                                          }),
                                        },
                                        ce.id,
                                      );
                                    }),
                            })
                          : S
                            ? e.jsx("ul", {
                                className: `pb-6 ${m ? "space-y-1.5" : "space-y-2"}`,
                                children:
                                  F.length === 0
                                    ? e.jsx("li", {
                                        className: p
                                          ? "py-12 text-center text-[12px] text-[#1a1a1a]/40"
                                          : m
                                            ? "border border-[var(--e-line)] bg-[var(--e-page)] py-10 text-center text-[10px] font-mono text-[var(--e-muted)]"
                                            : "py-12 text-center text-[12px] text-white/35",
                                        children: "暂无网易云歌单",
                                      })
                                    : F.map((ce) => {
                                        const pe = z === `ne_${ce.platformId}`,
                                          se =
                                            (n == null ? void 0 : n.source) ===
                                              "netease" &&
                                            String(n.playlistId) ===
                                              String(ce.platformId);
                                        return e.jsx(
                                          "li",
                                          {
                                            children: e.jsxs("button", {
                                              type: "button",
                                              disabled: pe,
                                              onClick: () => le(ce),
                                              className: p
                                                ? `flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${se ? "border-[#1a1a1a]/20 bg-[#1a1a1a]/[0.04] ring-1 ring-[#1a1a1a]/10" : "border-[#1a1a1a]/8 bg-white hover:border-[#1a1a1a]/15 hover:bg-[#fcfcfc]"}`
                                                : m
                                                  ? k(se, pe)
                                                  : `flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${se ? b : "border-white/[0.07] bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]"}`,
                                              children: [
                                                e.jsx("div", {
                                                  className: p
                                                    ? "h-11 w-11 shrink-0 rounded-xl border border-[#1a1a1a]/8 bg-[#1a1a1a]/[0.03]"
                                                    : m
                                                      ? C
                                                      : "h-11 w-11 shrink-0 rounded-xl border border-white/10 bg-white/5",
                                                  style: ce.cover
                                                    ? {
                                                        backgroundImage: `url(${ce.cover})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition:
                                                          "center",
                                                      }
                                                    : void 0,
                                                }),
                                                e.jsxs("div", {
                                                  className: "min-w-0 flex-1",
                                                  children: [
                                                    e.jsx("p", {
                                                      className: p
                                                        ? "truncate text-sm font-medium text-[#1a1a1a]"
                                                        : m
                                                          ? "truncate text-xs font-mono text-[var(--e-primary)]"
                                                          : "truncate text-sm font-medium text-white/90",
                                                      children: ce.name,
                                                    }),
                                                    e.jsxs("p", {
                                                      className: p
                                                        ? "text-[10px] text-[#1a1a1a]/40"
                                                        : m
                                                          ? "text-[9px] font-mono text-[var(--e-muted)]"
                                                          : "text-[10px] text-white/35",
                                                      children: [
                                                        "网易云 · ",
                                                        ce.trackCount != null
                                                          ? `${ce.trackCount} 首`
                                                          : "歌单",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                pe
                                                  ? e.jsx(Sn, {
                                                      className: p
                                                        ? "h-4 w-4 shrink-0 animate-spin text-[#1a1a1a]/40"
                                                        : m
                                                          ? "h-4 w-4 shrink-0 animate-spin text-[var(--e-cyan)]/60"
                                                          : "h-4 w-4 shrink-0 animate-spin text-white/50",
                                                    })
                                                  : null,
                                              ],
                                            }),
                                          },
                                          ce.id,
                                        );
                                      }),
                              })
                            : e.jsxs("p", {
                                className: p
                                  ? "py-14 text-center text-[12px] font-sans leading-relaxed text-[#1a1a1a]/45"
                                  : m
                                    ? "border border-[var(--e-line-strong)] bg-[var(--e-page)] py-12 text-center text-[10px] font-mono leading-relaxed text-[var(--e-soft)]"
                                    : "py-14 text-center text-[12px] leading-relaxed text-white/40",
                                children: [
                                  "请先在",
                                  " ",
                                  e.jsx("span", {
                                    className: p
                                      ? "text-[#1a1a1a]/75"
                                      : m
                                        ? "text-[var(--e-cyan)]/90"
                                        : "text-white/70",
                                    children: "乐听",
                                  }),
                                  " ",
                                  "中登录网易云账号",
                                ],
                              }),
                    }),
                    e.jsx("footer", {
                      className: p
                        ? "shrink-0 border-t border-[#1a1a1a]/8 bg-[#fafafa] px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
                        : m
                          ? "shrink-0 border-t border-[var(--e-line)] bg-[var(--e-raised)] px-6 py-3 pb-[max(1rem,env(safe-area-inset-bottom))]"
                          : "shrink-0 border-t border-white/[0.06] bg-black/20 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]",
                      children: e.jsxs("button", {
                        type: "button",
                        onClick: ie,
                        className: p
                          ? "flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#1a1a1a]/15 py-3 text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-[#1a1a1a]/45 transition hover:border-red-300 hover:bg-red-50/80 hover:text-red-700/85"
                          : m
                            ? "flex w-full items-center justify-center gap-2 border border-[var(--e-line-strong)] bg-[var(--e-page)] py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--e-muted)] transition hover:border-[#FF3B30]/50 hover:bg-[#FF3B30]/[0.06] hover:text-[#FF3B30]"
                            : "flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-200/90",
                        children: [
                          e.jsx(_n, {
                            className: "h-3.5 w-3.5",
                            strokeWidth: 1.75,
                          }),
                          "清除绑定",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    });
  },
  Pc = ({ children: t, reason: s }) => {
    const [n, a] = l.useState(!1);
    return s
      ? e.jsxs("span", {
          className: "relative inline-block cursor-pointer mx-0.5",
          onClick: () => a(!n),
          children: [
            t,
            e.jsx(Os, {
              children:
                n &&
                e.jsxs(We.span, {
                  initial: { opacity: 0, y: 5, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 5, scale: 0.9 },
                  className:
                    "absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded-sm shadow-lg whitespace-nowrap z-10 font-sans tracking-wider",
                  children: [
                    s,
                    e.jsx("div", {
                      className:
                        "absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45",
                    }),
                  ],
                }),
            }),
          ],
        })
      : t;
  },
  gG = ({ content: t, reason: s }) =>
    e.jsx(Pc, {
      reason: s,
      children: e.jsxs("span", {
        className: "relative text-gray-400",
        children: [
          t,
          e.jsx("span", {
            className:
              "absolute inset-x-0 top-1/2 h-0.5 bg-black/60 transform -rotate-2",
          }),
          e.jsx("span", {
            className:
              "absolute inset-x-0 top-1/2 h-0.5 bg-black/40 transform rotate-1",
          }),
        ],
      }),
    }),
  bG = ({ content: t, reason: s }) => {
    const [n, a] = l.useState(!0);
    return e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className: `transition-all duration-500 ${n ? "blur-sm select-none bg-black/5 px-1 rounded" : "blur-0 bg-transparent"}`,
        onClick: () => a(!n),
        children: t,
      }),
    });
  },
  yG = ({ content: t, reason: s }) =>
    e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className: "bg-[#fff9c4] px-1 rounded-sm",
        children: t,
      }),
    }),
  vG = ({ content: t, reason: s }) =>
    e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className: "inline-block animate-shake-fast",
        children: t,
      }),
    }),
  wG = ({ content: t, reason: s }) =>
    e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className:
          "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text font-bold",
        children: t,
      }),
    }),
  jG = ({ content: t, reason: s }) =>
    e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className: "inline-flex",
        children: t
          .split("")
          .map((n, a) =>
            e.jsx(
              We.span,
              {
                animate: { y: [0, -3, 0] },
                transition: {
                  duration: 0.6,
                  repeat: 1 / 0,
                  delay: a * 0.1,
                  ease: "easeInOut",
                },
                children: n,
              },
              a,
            ),
          ),
      }),
    }),
  NG = ({ content: t, reason: s }) => {
    const [n, a] = l.useState(!1);
    return e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className: `cursor-pointer px-1 rounded transition-all duration-300 ${n ? "bg-black/5 text-black" : "bg-black text-transparent select-none"}`,
        onClick: () => a(!n),
        children: t,
      }),
    });
  },
  kG = ({ content: t, reason: s }) =>
    e.jsx(Pc, {
      reason: s,
      children: e.jsx("span", {
        className: "font-bold text-[#ff4d00] inline-block",
        style: {
          textShadow: "0 0 4px #ffae00, 0 -2px 8px #ff0000",
          animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        },
        children: t,
      }),
    }),
  SG = ({ text: t, onComplete: s }) => {
    const [n, a] = l.useState([]),
      [r, i] = l.useState(0),
      o = pn.useMemo(() => {
        const c = [];
        let d = 0;
        const u =
          /\[(del|blur|highlight|shake|rainbow|wave|spoiler|fire):(.*?)(?::(.*?))?\]/g;
        let f;
        for (; (f = u.exec(t)) !== null; )
          (f.index > d &&
            c.push({ type: "text", content: t.slice(d, f.index) }),
            c.push({ type: f[1], content: f[2], reason: f[3] }),
            (d = u.lastIndex));
        return (
          d < t.length && c.push({ type: "text", content: t.slice(d) }),
          c
        );
      }, [t]);
    return (
      l.useEffect(() => {
        if (r < o.length) {
          const c = setTimeout(() => {
            (a((d) => [...d, o[r]]), i((d) => d + 1));
          }, 300);
          return () => clearTimeout(c);
        } else s && s();
      }, [r, o]),
      e.jsx("span", {
        children: n.map((c, d) =>
          e.jsx(
            "span",
            {
              children:
                c.type === "del"
                  ? e.jsx(gG, { content: c.content, reason: c.reason })
                  : c.type === "blur"
                    ? e.jsx(bG, { content: c.content, reason: c.reason })
                    : c.type === "highlight"
                      ? e.jsx(yG, { content: c.content, reason: c.reason })
                      : c.type === "shake"
                        ? e.jsx(vG, { content: c.content, reason: c.reason })
                        : c.type === "rainbow"
                          ? e.jsx(wG, { content: c.content, reason: c.reason })
                          : c.type === "wave"
                            ? e.jsx(jG, {
                                content: c.content,
                                reason: c.reason,
                              })
                            : c.type === "spoiler"
                              ? e.jsx(NG, {
                                  content: c.content,
                                  reason: c.reason,
                                })
                              : c.type === "fire"
                                ? e.jsx(kG, {
                                    content: c.content,
                                    reason: c.reason,
                                  })
                                : c.content,
            },
            d,
          ),
        ),
      })
    );
  },
  ob = co("leting");
async function pu(t, s) {
  if (!(t != null && t.playlistId) || !(t != null && t.source)) return [];
  if (t.source === "local") {
    const n = await ob.getSongsByPlaylist(t.playlistId);
    return Array.isArray(n) ? n : [];
  }
  if (t.source === "netease") {
    const n = `playlist_${t.playlistId}`;
    let a = await ob.getNeteaseCache(n);
    if (!(a != null && a.length) && typeof s == "function")
      try {
        const r = await s(t.playlistId);
        r != null &&
          r.length &&
          ((a = r.map((i) => ({
            id: `ne_${i.id}`,
            platformId: i.id,
            platform: "netease",
            title: i.name,
            artist: i.ar.map((o) => o.name).join(" / "),
            cover: i.al.picUrl,
            album: i.al.name,
            duration: i.dt / 1e3,
            source: "netease_user",
          }))),
          await ob.setNeteaseCache(n, a));
      } catch {}
    return Array.isArray(a) ? a : [];
  }
  return [];
}
function AA(t, s = 100) {
  const n = t.slice(0, s);
  return {
    text: n.map(
      (r, i) =>
        `${i + 1}. ${(r.title || r.name || "未知").trim()} — ${(r.artist || "").trim()}`,
    ).join(`
`),
    slice: n,
  };
}
const Nf = (t) => (t || "").trim().toLowerCase().replace(/\s+/g, "");
function CA(t, s) {
  const n = s.length,
    a = (d) => {
      const u = parseInt(d, 10);
      return Number.isFinite(u) && u >= 1 && u <= n
        ? { track: s[u - 1], catalogIndex: u - 1 }
        : null;
    };
  let r = a(t.song_catalog_index);
  if (
    (r || (r = a(t.catalog_index)),
    r || (r = a(t.playlist_song_index)),
    r || (r = a(t.diary_bgm_catalog_index)),
    r != null && r.track)
  )
    return r;
  const i = Nf(t.track_name),
    o = Nf(t.artist);
  let c = s.find(
    (d) => Nf(d.title || d.name) === i && Nf(d.artist || "") === o,
  );
  return (
    !c &&
      i &&
      (c = s.find((d) => {
        const u = Nf(d.title || d.name);
        return u === i || u.includes(i) || i.includes(u);
      })),
    c
      ? { track: c, catalogIndex: s.indexOf(c) }
      : { track: null, catalogIndex: -1 }
  );
}
const _G = 80,
  AG = ({ contact: t, onBack: s, apiConfig: n }) => {
    var q;
    const {
        chats: a,
        moments: r,
        addApiLog: i,
        getEffectiveUser: o,
        getRoleBoundUser: c,
      } = vn(),
      { fetchPlaylistDetail: d } = Ii(),
      u = l.useRef(d);
    u.current = d;
    const [f, p] = l.useState([]),
      [m, h] = l.useState(!1);
    l.useEffect(() => {
      (async () => {
        const ne = await be.get(`phone_app_diaries_${t.id}`);
        ne != null && p(ne);
      })();
    }, [t.id]);
    const [g, x] = l.useState(null),
      [y, v] = l.useState([]),
      [b, N] = l.useState(!1),
      [w, _] = l.useState(null),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(null),
      [E, S] = l.useState(!1),
      [j, T] = l.useState(null),
      I = l.useRef(null),
      L = l.useRef({ x: 0, y: 0 }),
      B = l.useRef(!1);
    l.useRef(0);
    const F = `phone_app_diary_leting_${t.id}`;
    l.useEffect(() => {
      (async () => {
        const ne = await be.get(F);
        M(ne && typeof ne == "object" ? ne : null);
      })();
    }, [t.id, F]);
    const D = (V) => {
      (M(V), V ? be.set(F, V) : be.remove(F));
    };
    l.useEffect(() => {
      f.length > 0 && be.set(`phone_app_diaries_${t.id}`, f);
    }, [f, t.id]);
    const $ = l.useCallback(async (V) => {
      if (!(V != null && V.diary_bgm)) return !1;
      const le = (
        await pu(
          { source: V.diary_bgm.source, playlistId: V.diary_bgm.playlistId },
          u.current,
        )
      )[V.diary_bgm.catalogIndex];
      return le
        ? (window.dispatchEvent(
            new CustomEvent(Xm, { detail: { song: le, queue: [le] } }),
          ),
          !0)
        : !1;
    }, []);
    (l.useEffect(() => {
      if (!g) return;
      let V = !1;
      return (
        (async () => {
          if (g.diary_bgm) {
            const ne = await $(g);
            !V && ne && N(!0);
            return;
          }
          V || N(!1);
        })(),
        () => {
          V = !0;
        }
      );
    }, [g, $]),
      l.useEffect(() => {
        if (!(g != null && g.diary_bgm)) {
          T(null);
          return;
        }
        let V = !1;
        return (
          (async () => {
            const le = (
              await pu(
                {
                  source: g.diary_bgm.source,
                  playlistId: g.diary_bgm.playlistId,
                },
                u.current,
              )
            )[g.diary_bgm.catalogIndex];
            V || T((le == null ? void 0 : le.id) ?? null);
          })(),
          () => {
            V = !0;
          }
        );
      }, [g == null ? void 0 : g.diary_bgm]),
      l.useEffect(() => {
        const V = (ne) => {
          const { songId: le, isPlaying: ie } = ne.detail || {},
            X = (g == null ? void 0 : g.leting_play_id) || j;
          !X || le !== X || N(!!ie);
        };
        return (
          window.addEventListener(ep, V),
          () => window.removeEventListener(ep, V)
        );
      }, [g == null ? void 0 : g.leting_play_id, j]));
    const P = async () => {
        if (g != null && g.diary_bgm) {
          await $(g);
          return;
        }
        audioRef.current &&
          (b ? audioRef.current.pause() : audioRef.current.play(), N(!b));
      },
      z = (V) => {
        (p((ne) => ne.filter((le) => le.id !== V)),
          _(null),
          (g == null ? void 0 : g.id) === V && x(null));
      },
      O = (V) => {
        if (g) {
          const ne = { ...g, userEmoji: V.emoji },
            le = f.map((ie) => (ie.id === g.id ? ne : ie));
          (p(le), x(ne), k(!1));
        }
      },
      Z = 5e3,
      K = async () => {
        (h(!0), v(["Thinking...", "Analyzing...", "Recalling..."]));
        try {
          if (!n || !n.key) {
            alert("请先在设置中配置 API Key");
            return;
          }
          let V = null,
            ne = "";
          if (C) {
            const U = await pu(C, d);
            if (!U.length) {
              alert("绑定的日记配乐歌单暂无曲目，请在乐听中补充或重新绑定");
              return;
            }
            const ce = AA(U, _G);
            ((V = ce.slice), (ne = ce.text));
          }
          const le = (o == null ? void 0 : o(t)) ?? {},
            ie = le.settings || "无",
            X = (c == null ? void 0 : c(t)) || {},
            je = String(X.realName || X.name || "用户").trim() || "用户",
            xe = a.find((U) => U.contactId === t.id),
            ye = xe
              ? xe.messages
                  .filter(
                    (U) => !U.type || U.type === "text" || U.type === "image",
                  )
                  .slice(-30)
                  .map(
                    (U) =>
                      `${U.sender === "me" ? `用户（${je}）` : "我"}: ${U.text}`,
                  ).join(`
`)
              : "无",
            R = r.slice(0, 10).map((U) => {
              const ce = Tc(U, le),
                pe = U.user.name === t.name || U.user.name === t.nickname;
              return `[${ce ? "用户" : pe ? "我" : U.user.name} 发布于 ${U.time}]: ${U.content}`;
            }).join(`
`),
            oe = `
[系统指令：生成日记]
请以你的角色身份（${t.name}），根据我们最近的聊天记录、朋友圈动态以及你的人设，写一篇今天的日记。

【当前状态】
用户设定：${ie}
你的设定：${t.setting}

【上下文信息】
1. 最近聊天记录（"用户"是对方，"我"是你自己）：
${ye}

2. 最近朋友圈动态：
${R || "无"}

3. 线下/遇见记忆总结（若已开启记忆互通，请融入日记）：
${(await Promise.race([Ql(t.id), new Promise((U, ce) => setTimeout(() => ce(new Error("timeout")), Z))]).catch(() => "")) || "无"}

【写作要求】
${ql(t.setting || "", "standard")}

1. 必须以第一人称写作。
2. 深度结合上下文：
   - 如果聊天中聊到了某个话题，日记里要体现你的后续思考或感受。
   - 如果用户发了朋友圈，你可以提到你的看法。
   - 如果你发了朋友圈，可以记录当时的心情。
3. 文风必须严格符合人设 (${t.setting})。
4. 字数 300-500 字。
5. 包含标题。
6. 提取 3-5 个关键词。
${
  C
    ? `7. **今日配乐（用户已绑定乐听歌单）**
   - **优先**：从下列曲库中选 **恰好一首** 与情绪契合的曲目，填写 **diary_bgm_catalog_index**（整数 1～${V.length}），且 **music** 必须与该序号对应行「序号. 歌名 — 歌手」中的歌名与歌手部分 **完全一致**（长横线「—」）。
   - **若曲库中无合适曲目**：可将 **music** 写为真实存在的「歌名 — 歌手」；此类情况**仅展示歌名、不会在日记页播放**（应用只播放曲库内能匹配到的曲目）。
曲库（序号从 1 开始）：
${ne}`
    : `7. 推荐一首符合心情的歌曲（**仅作文案展示**，未绑定乐听歌单时无法在日记页播放）。
   - 根据人设与日记推荐**真实存在**的歌曲；中文人设优先中文歌等，自行把握风格。
   - 格式："歌名 - 歌手" 或 "歌名 — 歌手"（例如 "晴天 - 周杰伦"）。`
}
8. 给出心情指数 (0-100)。
9. 给出心情类型 (happy, sad, calm, energetic, romantic, melancholy, inspired, thoughtful, lonely)。
10. 在文中灵活使用以下标记来丰富表现力（**必须至少使用 5 种不同的标记**，增加真实感）：
   - [del:内容:原因]：想写但又划掉的话（如害羞、写错、不想让人看到）。
   - [blur:内容:原因]：模糊不清的字迹（如泪痕、墨水晕开、手抖）。
   - [highlight:内容:原因]：重点标记或涂鸦。
   - [shake:内容:原因]：激动时的字迹潦草。
   - [rainbow:内容:原因]：开心时的多彩字迹。
   - [wave:内容:原因]：轻松愉快的波浪文字。
   - [spoiler:内容:原因]：隐藏的惊喜或秘密（点击可见）。
   - [fire:内容:原因]：愤怒或热情的火焰文字。
11. 严禁出现 "(user)" 这种括号解释。
12. 请根据【用户设定】中的描述来称呼用户，不要使用网名。如果设定中没有名字，就用"你"。
13. 生成今日运势：
    - fortune: 一句简短的运势（如“宜发呆”、“忌熬夜”）。
    - lucky_item: 一个具体的幸运物品（如“热咖啡”、“旧照片”）。
    - lucky_color: 一个幸运颜色（如“#FF5733”）。
14. 生成 **至少 3 个** 装饰贴纸的位置：
    - stickers: 数组，每个元素包含 { type: "star"|"heart"|"flower"|"music"|"moon"|"sun"|"cloud", x: 0-100, y: 0-100, rotation: -30到30 }。x/y 是百分比坐标。

【返回格式】
请仅返回以下 JSON 格式，不要包含其他内容：
{ 
  "title": "...", 
  "content": "...", 
  "mood": "emoji", 
  "weather": "天气", 
  "keywords": ["词1", "词2"], 
${
  C
    ? `  "diary_bgm_catalog_index": 1,
`
    : ""
}  "music": "${C ? "必须与曲库中该序号那一行完全一致" : "歌名 - 歌手"}", 
  "mood_score": 85, 
  "mood_type": "calm",
  "fortune": "...",
  "lucky_item": "...",
  "lucky_color": "#...",
  "stickers": [
    { "type": "star", "x": 10, "y": 20, "rotation": 15 }
  ]
}
`,
            ee = await cr(
              n,
              {
                messages: [
                  {
                    role: "system",
                    content: `你现在是 ${t.name}。${t.setting}`,
                  },
                  { role: "user", content: oe },
                ],
                temperature: 0.7,
              },
              {
                addApiLog: i,
                logScene: "diary",
                logContactName: (t == null ? void 0 : t.name) || "",
              },
            );
          let H = {};
          try {
            const U = ee.match(/\{[\s\S]*\}/);
            U
              ? (H = JSON.parse(U[0]))
              : (H = {
                  title: "无题",
                  content: ee,
                  mood: "😐",
                  weather: "未知",
                  keywords: [],
                  music: "Unknown",
                  mood_score: 50,
                  mood_type: "calm",
                  fortune: "平平淡淡才是真",
                  lucky_item: "空气",
                  lucky_color: "#000000",
                  stickers: [],
                });
          } catch {
            H = {
              title: "无题",
              content: ee,
              mood: "😐",
              weather: "未知",
              keywords: [],
              music: "Unknown",
              mood_score: 50,
              mood_type: "calm",
              fortune: "平平淡淡才是真",
              lucky_item: "空气",
              lucky_color: "#000000",
              stickers: [],
            };
          }
          if (C && V != null && V.length) {
            const U = String(H.music || "").split(/[—–-]/),
              ce = (U[0] || "").trim(),
              pe = (U[1] || "").trim(),
              { track: se, catalogIndex: Te } = CA(
                {
                  diary_bgm_catalog_index: H.diary_bgm_catalog_index,
                  song_catalog_index: H.diary_bgm_catalog_index,
                  track_name: ce,
                  artist: pe,
                },
                V,
              );
            (se && Te >= 0
              ? ((H.music = `${(se.title || se.name || "").trim()} — ${(se.artist || "").trim()}`),
                (H.diary_bgm = {
                  source: C.source,
                  playlistId: C.playlistId,
                  catalogIndex: Te,
                }),
                (H.leting_play_id = se.id))
              : (delete H.diary_bgm, delete H.leting_play_id),
              delete H.diary_bgm_catalog_index);
          } else
            (delete H.diary_bgm,
              delete H.diary_bgm_catalog_index,
              delete H.leting_play_id);
          const Y = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            ...H,
          };
          (p([Y, ...f]), x(Y));
        } catch (V) {
          alert((V == null ? void 0 : V.message) || "生成失败");
        } finally {
          (h(!1), v([]));
        }
      };
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-[#fcfcfc] font-serif text-[#1a1a1a]",
      children: [
        e.jsxs("div", {
          className:
            "pt-12 px-6 pb-4 flex items-center justify-between relative z-10 border-b border-[#1a1a1a]/5",
          children: [
            e.jsx("button", {
              onClick: s,
              className: "p-2 -ml-2 text-[#1a1a1a]/60 hover:text-[#1a1a1a]",
              children: e.jsx(un, { size: 24, strokeWidth: 1 }),
            }),
            e.jsx("h2", {
              className: "text-sm font-bold uppercase tracking-widest",
              children: "日记",
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => S(!0),
              className: "p-2 -mr-2 text-[#1a1a1a]/60 hover:text-[#1a1a1a]",
              title:
                C != null && C.playlistName
                  ? `当前：${C.playlistName}`
                  : "绑定乐听歌单",
              "aria-label":
                C != null && C.playlistName
                  ? `已绑定歌单 ${C.playlistName}`
                  : "绑定乐听歌单",
              children: e.jsx(Cc, { size: 24, strokeWidth: 1 }),
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 overflow-y-auto p-6 space-y-6 relative z-10 no-scrollbar pb-24",
          children: [
            e.jsx("button", {
              onClick: K,
              disabled: m,
              className:
                "w-full py-6 border border-dashed border-[#1a1a1a]/20 rounded-xl flex flex-col items-center justify-center gap-2 text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5 transition-colors disabled:opacity-50 group",
              children: m
                ? e.jsxs("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                      e.jsx(Sn, { size: 20, className: "animate-spin" }),
                      e.jsx("div", {
                        className: "flex gap-2 text-xs font-mono",
                        children: y.map((V, ne) =>
                          e.jsx(
                            "span",
                            { className: "animate-pulse", children: V },
                            ne,
                          ),
                        ),
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(ml, {
                        size: 20,
                        className:
                          "group-hover:-translate-y-1 transition-transform",
                      }),
                      e.jsx("span", {
                        className: "text-xs font-sans uppercase tracking-wider",
                        children: "记录今日",
                      }),
                    ],
                  }),
            }),
            e.jsx("div", {
              className:
                "relative border-l border-black/10 ml-3 pl-8 space-y-12",
              children: f.map((V) => {
                var ne;
                return e.jsxs(
                  We.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    onClick: (le) => {
                      if (B.current) {
                        (le.preventDefault(), le.stopPropagation());
                        return;
                      }
                      x(V);
                    },
                    onContextMenu: (le) => {
                      (le.preventDefault(), _(V.id));
                    },
                    onTouchStart: (le) => {
                      var ie;
                      ((ie = le.touches) != null &&
                        ie[0] &&
                        (L.current = {
                          x: le.touches[0].clientX,
                          y: le.touches[0].clientY,
                        }),
                        (I.current = setTimeout(() => {
                          ((B.current = !0), _(V.id));
                        }, 500)));
                    },
                    onTouchEnd: (le) => {
                      (I.current &&
                        (clearTimeout(I.current), (I.current = null)),
                        B.current &&
                          (le.cancelable && le.preventDefault(),
                          setTimeout(() => {
                            B.current = !1;
                          }, 300)));
                    },
                    onTouchMove: (le) => {
                      var ie;
                      if (I.current && (ie = le.touches) != null && ie[0]) {
                        const X = le.touches[0],
                          je = X.clientX - L.current.x,
                          xe = X.clientY - L.current.y;
                        je * je + xe * xe > 100 &&
                          (clearTimeout(I.current), (I.current = null));
                      }
                    },
                    onTouchCancel: () => {
                      I.current &&
                        (clearTimeout(I.current), (I.current = null));
                    },
                    className:
                      "relative cursor-pointer group bg-white p-4 rounded-lg shadow-sm border border-gray-100 select-none",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -left-[45px] top-6 w-2 h-2 rounded-full bg-black/20 group-hover:bg-black transition-colors",
                      }),
                      e.jsx("div", {
                        className: "text-[10px] font-mono text-gray-400 mb-1",
                        children: V.date,
                      }),
                      e.jsx("h3", {
                        className:
                          "text-xl font-bold italic mb-2 group-hover:underline decoration-1 underline-offset-4",
                        children: V.title,
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-gray-600 line-clamp-2 font-light leading-relaxed",
                        children: V.content.replace(/\[.*?:.*?\]/g, "..."),
                      }),
                      e.jsx("div", {
                        className: "flex gap-2 mt-3",
                        children:
                          (ne = V.keywords) == null
                            ? void 0
                            : ne.map((le, ie) =>
                                e.jsxs(
                                  "span",
                                  {
                                    className:
                                      "text-[9px] px-2 py-0.5 bg-black/5 rounded-full text-gray-500",
                                    children: ["#", le],
                                  },
                                  ie,
                                ),
                              ),
                      }),
                      e.jsx(Os, {
                        children:
                          w === V.id &&
                          e.jsx(We.div, {
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 },
                            exit: { opacity: 0, scale: 0.9 },
                            className:
                              "absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center rounded-lg z-20",
                            onClick: (le) => {
                              (le.stopPropagation(), !B.current && _(null));
                            },
                            children: e.jsxs("button", {
                              onClick: (le) => {
                                (le.stopPropagation(), !B.current && z(V.id));
                              },
                              className:
                                "bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-red-600 transition-colors flex items-center gap-2",
                              children: [e.jsx(_n, { size: 14 }), "删除"],
                            }),
                          }),
                      }),
                    ],
                  },
                  V.id,
                );
              }),
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            g &&
            e.jsxs(We.div, {
              initial: { opacity: 0, y: "100%" },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: "100%" },
              className: "absolute inset-0 z-50 bg-[#fcfcfc] flex flex-col",
              children: [
                e.jsxs("div", {
                  className:
                    "pt-12 px-6 pb-4 flex items-center justify-between border-b border-[#1a1a1a]/5",
                  children: [
                    e.jsx("button", {
                      onClick: () => x(null),
                      className: "p-2 -ml-2 hover:bg-black/5 rounded-full",
                      children: e.jsx(un, { size: 24, strokeWidth: 1 }),
                    }),
                    e.jsxs("div", {
                      className: "flex gap-4 text-xs font-mono text-gray-500",
                      children: [
                        e.jsx("span", { children: g.time }),
                        e.jsx("span", { children: g.weather }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-8 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-4 mb-8",
                      children: [
                        e.jsx("div", { className: "flex-1 h-px bg-black/10" }),
                        e.jsxs("div", {
                          className:
                            "flex flex-col items-center relative group",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-center mb-2 relative h-12",
                              children: [
                                e.jsx(We.div, {
                                  className:
                                    "text-4xl z-10 origin-bottom-right",
                                  animate: { rotate: g.userEmoji ? -10 : 0 },
                                  children: g.mood,
                                }),
                                g.userEmoji
                                  ? e.jsx(We.div, {
                                      initial: { scale: 0, x: -20, rotate: 0 },
                                      animate: { scale: 1, x: -8, rotate: 10 },
                                      className:
                                        "text-4xl z-20 origin-bottom-left drop-shadow-sm",
                                      children: g.userEmoji,
                                    })
                                  : e.jsx(We.button, {
                                      onClick: () => k(!A),
                                      className:
                                        "absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-dashed border-black/20 flex items-center justify-center text-black/20 hover:text-black/60 hover:border-black/60 transition-all hover:scale-110",
                                      whileHover: { rotate: 90 },
                                      children: e.jsx(ea, { size: 12 }),
                                    }),
                              ],
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[10px] font-bold uppercase tracking-widest text-black/40",
                              children: ["情绪分数：", g.mood_score || 50],
                            }),
                            e.jsx(Os, {
                              children:
                                A &&
                                e.jsxs(We.div, {
                                  initial: { opacity: 0, scale: 0.9, y: 10 },
                                  animate: { opacity: 1, scale: 1, y: 0 },
                                  exit: { opacity: 0, scale: 0.9, y: 10 },
                                  className: "absolute top-full mt-4 z-50",
                                  children: [
                                    e.jsx("div", {
                                      className: "fixed inset-0 z-40",
                                      onClick: () => k(!1),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "relative z-50 shadow-2xl rounded-2xl overflow-hidden border border-black/5",
                                      children: e.jsx(hG, {
                                        onEmojiClick: O,
                                        width: 300,
                                        height: 350,
                                        searchDisabled: !0,
                                        skinTonesDisabled: !0,
                                        previewConfig: { showPreview: !1 },
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                        e.jsx("div", { className: "flex-1 h-px bg-black/10" }),
                      ],
                    }),
                    e.jsx("h1", {
                      className:
                        "text-4xl font-bold italic mb-8 text-center leading-tight",
                      children: g.title,
                    }),
                    e.jsxs("div", {
                      className: "relative",
                      children: [
                        (q = g.stickers) == null
                          ? void 0
                          : q.map((V, ne) =>
                              e.jsxs(
                                We.div,
                                {
                                  initial: { opacity: 0, scale: 0 },
                                  animate: { opacity: 0.6, scale: 1 },
                                  transition: { delay: 1 + ne * 0.2 },
                                  className:
                                    "absolute pointer-events-none text-black/10 z-0",
                                  style: {
                                    left: `${V.x}%`,
                                    top: `${V.y}%`,
                                    rotate: `${V.rotation}deg`,
                                  },
                                  children: [
                                    V.type === "star" &&
                                      e.jsx(Gi, {
                                        size: 40,
                                        fill: "currentColor",
                                      }),
                                    V.type === "heart" &&
                                      e.jsx("svg", {
                                        width: "40",
                                        height: "40",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: e.jsx("path", {
                                          d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                                        }),
                                      }),
                                    V.type === "flower" &&
                                      e.jsx("svg", {
                                        width: "40",
                                        height: "40",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: e.jsx("path", {
                                          d: "M12 22c4.97 0 9-4.03 9-9-2.5 0-4.5-2-4.5-4.5 0-2.5 2-4.5 4.5-4.5-4.97 0-9 4.03-9 9 0 2.5-2 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5C3 17.97 7.03 22 12 22z",
                                        }),
                                      }),
                                    V.type === "music" &&
                                      e.jsx(Ji, { size: 40 }),
                                    V.type === "moon" &&
                                      e.jsx(Q1, {
                                        size: 40,
                                        fill: "currentColor",
                                      }),
                                    V.type === "sun" &&
                                      e.jsx(Q8, {
                                        size: 40,
                                        fill: "currentColor",
                                      }),
                                    V.type === "cloud" &&
                                      e.jsx(ao, {
                                        size: 40,
                                        fill: "currentColor",
                                      }),
                                  ],
                                },
                                ne,
                              ),
                            ),
                        e.jsx("div", {
                          className:
                            "prose prose-lg max-w-none font-serif leading-loose text-[#1a1a1a]/90 whitespace-pre-wrap first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left relative z-10",
                          children: e.jsx(SG, { text: g.content }),
                        }),
                      ],
                    }),
                    g.fortune &&
                      e.jsxs(We.div, {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.5 },
                        className: "mt-12 relative",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-[#fffcf5] rounded-xl border border-[#1a1a1a]/10 shadow-sm transform rotate-1",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 rounded-xl transform rotate-1",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#f0f0f0]/80 backdrop-blur-sm transform -rotate-2 shadow-sm z-20",
                          }),
                          e.jsxs("div", {
                            className:
                              "relative z-10 p-6 transform -rotate-1 bg-white rounded-xl border border-[#1a1a1a]/10 shadow-lg",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-start mb-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex flex-col",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]/40",
                                        children: "Daily Fortune",
                                      }),
                                      e.jsx("h3", {
                                        className:
                                          "text-xl font-serif italic mt-1",
                                        children: g.fortune,
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full bg-[#f8f8f8] flex items-center justify-center border border-[#1a1a1a]/5",
                                    children: e.jsx(Xn, {
                                      size: 20,
                                      className: "text-yellow-500",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "h-px w-full bg-gradient-to-r from-transparent via-[#1a1a1a]/10 to-transparent my-4",
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[9px] font-bold uppercase tracking-wider text-[#1a1a1a]/40",
                                        children: "Lucky Item",
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx(Gi, {
                                            size: 12,
                                            className: "text-[#1a1a1a]/20",
                                          }),
                                          e.jsx("span", {
                                            className: "text-sm font-medium",
                                            children: g.lucky_item,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[9px] font-bold uppercase tracking-wider text-[#1a1a1a]/40",
                                        children: "幸运色",
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-3 h-3 rounded-full border border-[#1a1a1a]/10 shadow-sm",
                                            style: {
                                              backgroundColor: g.lucky_color,
                                            },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-sm font-mono opacity-60",
                                            children: g.lucky_color,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className:
                        "mt-6 p-4 border border-black/10 rounded-sm flex items-center gap-4 bg-white shadow-sm",
                      children: [
                        e.jsx("div", {
                          className: `w-12 h-12 rounded-full flex items-center justify-center ${g.diary_bgm ? `bg-black cursor-pointer ${b ? "animate-spin-slow" : ""}` : "bg-black/25 cursor-not-allowed"}`,
                          onClick: P,
                          role: "button",
                          "aria-disabled": !g.diary_bgm,
                          children: b
                            ? e.jsx(Ji, { size: 20, className: "text-white" })
                            : e.jsx(ML, { size: 20, className: "text-white" }),
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs font-bold uppercase tracking-wider",
                              children: "配乐",
                            }),
                            e.jsx("p", {
                              className:
                                "text-sm italic text-gray-600 truncate",
                              children: g.music || "沉默",
                            }),
                            g.diary_bgm
                              ? e.jsx("p", {
                                  className:
                                    "text-[9px] font-sans text-[#1a1a1a]/38 mt-1 tracking-wide",
                                  children: "由乐听播放 · 来自已绑定歌单",
                                })
                              : e.jsx("p", {
                                  className:
                                    "text-[9px] font-sans text-[#1a1a1a]/38 mt-1 tracking-wide",
                                  children:
                                    "未带乐听歌单曲目信息的日记无法在此播放（不会使用外部音乐接口）",
                                }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "flex gap-0.5 items-end h-4",
                          children: [...Array(5)].map((V, ne) =>
                            e.jsx(
                              "div",
                              {
                                className: `w-1 bg-black/20 rounded-full ${b ? "animate-pulse" : ""}`,
                                style: {
                                  height: b ? `${Math.random() * 100}%` : "20%",
                                  animationDelay: `${ne * 0.1}s`,
                                },
                              },
                              ne,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
        e.jsx(dg, {
          open: E,
          onClose: () => S(!1),
          binding: C,
          onSave: D,
          variant: "paper",
          sheetTitle: "日记配乐歌单",
          rootPosition: "absolute",
        }),
      ],
    });
  },
  CG = ({ contact: t, onBack: s, apiConfig: n }) => {
    var M;
    const {
        chats: a,
        addApiLog: r,
        getEffectiveUser: i,
        getRoleBoundUser: o,
      } = vn(),
      c = yi((t == null ? void 0 : t.setting) || ""),
      [d, u] = l.useState([]),
      [f, p] = l.useState(null),
      [m, h] = l.useState("list"),
      [g, x] = l.useState(!1),
      [y, v] = l.useState("reality"),
      [b, N] = l.useState(""),
      [w, _] = l.useState(!1);
    (l.useEffect(() => {
      let E = !1;
      return (
        _(!1),
        (async () => {
          const S = await be.get(`phone_app_dream_history_${t.id}`);
          E || (S != null && Array.isArray(S) ? u(S) : u([]), _(!0));
        })(),
        () => {
          E = !0;
        }
      );
    }, [t.id]),
      l.useEffect(() => {
        w && be.set(`phone_app_dream_history_${t.id}`, d);
      }, [d, t.id, w]));
    const A = 5e3,
      k = async () => {
        x(!0);
        try {
          if (!n || !n.key) {
            alert("请先在设置中配置 API Key");
            return;
          }
          const S = ((i == null ? void 0 : i(t)) ?? {}).settings || "无",
            j = a == null ? void 0 : a.find((Z) => Z.contactId === t.id),
            T = pd(j == null ? void 0 : j.messages, t, o, 20),
            I = await Promise.race([
              Ql(t.id),
              new Promise((Z, K) =>
                setTimeout(() => K(new Error("timeout")), A),
              ),
            ]).catch(() => ""),
            L = t.setting || "",
            B = yi(L),
            F = ql(L, "standard");
          let D = "";
          const $ = b
            ? `【特别设定】：梦境必须包含或围绕关键词"${b}"展开。`
            : "";
          y === "reality"
            ? (D = `请以你的角色身份（${t.name}），根据你的人设和潜意识状态，描述一个梦境。如果最近的聊天记录（参考上下文）提供了有趣的素材，可以将其融入梦境；如果聊天记录平淡，请挖掘你人设中的过去、未来或深层恐惧/渴望，创造一个全新的梦境故事。梦境可以是美好的、怪诞的、悲伤的或惊悚的，风格不限。`)
            : (D = `请以你的角色身份（${t.name}），基于你的人设，打破现实的束缚，做一个“番外篇”梦境。${$} 这是一个平行时空或特殊情境下的梦境，请大胆想象，天马行空，创造一个引人入胜的故事。`);
          const P = `
[系统指令：生成深度梦境档案]
${D}
用户设定：${S}。

参考上下文：
【最近聊天】：
${T}

【线下/遇见记忆总结】（若已开启记忆互通，可融入梦境素材）
${I || "无"}

要求：
${F}

${B ? '【心声字段】**monologue**（梦醒后回应）须为心声双语对象 { "voice", "zh" }。' : "【心声字段】**monologue**（梦醒后回应）一律输出**简体中文字符串**（不要输出 JSON 对象、不要英文、不要“原文/译文/translation”标签）。"}

1. 梦境内容必须丰富完整，字数不得少于400字。
2. 内容结构：
   - 直接讲述梦境故事，不要使用“【梦境叙事】”或“【内心独白】”等任何标签。
   - 像写小说一样，详细描述梦中发生的具体事件、场景转换、人物互动。重点在于“发生了什么”和“看到了什么”，要有电影般的画面感和细节描写（光影、声音、触感）。
   - 自然地在叙事中穿插你的心理活动、潜意识的低语，以及梦醒后的怅然若失或深刻感悟。
   - 沉浸感第一，不要有“我做了一个梦”这样的开场白，直接进入梦境场景。

3. 梦境风格要具有象征性、超现实感或情感隐喻，符合你的人设。

4. 生成一个 JSON 对象，包含：
   - title: 梦境标题 (富有诗意)
   - content: 梦境的完整叙述 (包含情节和独白，400字以上，纯文本，不要带标签)
   - monologue: **心声双语** { "voice", "zh" }，梦醒后的简短独白 (富有情感)
   - interpretation: 对这个梦的自我解析或潜意识暗示
   - color_theme: 梦境的主色调 (hex code)
   - elements: 梦境中的关键元素数组
   - lucidity: 清醒度 (0-100)
   - emotion_analysis: 情感成分 (如 {"fear": 20, "hope": 50})
   - sensory_details: 梦中的感官细节数组 (如 ["冰冷的海水", "烧焦的味道", "刺眼的白光"])

返回格式示例：
{
  "title": "...",
  "content": "...",
  "monologue": { "voice": "…", "zh": "…" },
  "interpretation": "...",
  "color_theme": "#...",
  "elements": ["..."],
  "lucidity": 50,
  "emotion_analysis": {"...": 0},
  "sensory_details": ["..."]
}
`,
            z = await cr(
              n,
              {
                messages: [
                  { role: "system", content: `你现在是 ${t.name}。${L}` },
                  { role: "user", content: P },
                ],
                temperature: 0.9,
              },
              {
                addApiLog: r,
                logScene: "dream",
                logContactName: (t == null ? void 0 : t.name) || "",
              },
            );
          let O = null;
          try {
            const Z = z.match(/\{[\s\S]*\}/);
            Z && (O = JSON.parse(Z[0]));
          } catch {}
          if (O) {
            const Z = {
              ...O,
              id: Date.now(),
              date: new Date().toLocaleDateString(),
              timestamp: Date.now(),
            };
            (u((K) => [Z, ...K]), p(Z), h("detail"), N(""));
          }
        } catch (E) {
          alert((E == null ? void 0 : E.message) || "生成失败");
        } finally {
          x(!1);
        }
      },
      C = (E, S) => {
        (E.stopPropagation(),
          window.confirm("Forget this dream?") &&
            (u((j) => j.filter((T) => T.id !== S)),
            (f == null ? void 0 : f.id) === S && (p(null), h("list"))));
      };
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-[#0a0a0a] font-serif text-white",
      children: [
        e.jsx("div", {
          className:
            "absolute inset-0 opacity-30 transition-colors duration-1000",
          style: {
            background: f
              ? `radial-gradient(circle at 50% 50%, ${f.color_theme}40 0%, transparent 70%)`
              : "radial-gradient(circle at 50% 50%, #2a2a2a 0%, #000000 70%)",
          },
        }),
        e.jsx("div", {
          className:
            "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150",
        }),
        e.jsxs("div", {
          className:
            "pt-12 px-6 flex justify-between items-center relative z-20",
          children: [
            e.jsx("button", {
              onClick: () => (m === "list" ? s() : h("list")),
              className:
                "p-2 -ml-2 text-white/60 hover:text-white transition-colors",
              children: e.jsx(un, { size: 24, strokeWidth: 1 }),
            }),
            e.jsx("div", {
              className: "text-[10px] tracking-[0.3em] uppercase opacity-40",
              children: "梦境档案",
            }),
            e.jsx("div", { className: "w-6" }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto relative z-10 no-scrollbar",
          children: e.jsxs(Os, {
            mode: "wait",
            children: [
              m === "list" &&
                e.jsxs(
                  We.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    className: "p-6 space-y-4",
                    children: [
                      e.jsxs("div", {
                        onClick: () => h("create"),
                        className:
                          "bg-white/5 border border-white/10 p-6 rounded-lg cursor-pointer hover:bg-white/10 transition-colors group",
                        children: [
                          e.jsx("div", {
                            className:
                              "flex items-center justify-center h-12 w-12 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform",
                            children: e.jsx(ea, { size: 24 }),
                          }),
                          e.jsx("h3", {
                            className: "text-lg italic mb-1",
                            children: "记录新梦境",
                          }),
                          e.jsx("p", {
                            className: "text-xs opacity-50 font-sans",
                            children: "捕捉潜意识...",
                          }),
                        ],
                      }),
                      d.map((E) => {
                        var S;
                        return e.jsxs(
                          We.div,
                          {
                            layoutId: `dream-${E.id}`,
                            onClick: () => {
                              (p(E), h("detail"));
                            },
                            className:
                              "bg-white/5 border border-white/10 p-6 rounded-lg cursor-pointer hover:bg-white/10 transition-colors relative",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-start mb-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-sans uppercase tracking-widest opacity-40",
                                    children: E.date,
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: (j) => C(j, E.id),
                                    onPointerDown: (j) => j.stopPropagation(),
                                    className:
                                      "shrink-0 p-1 -m-1 text-white/35 hover:text-red-400 transition-colors rounded-md hover:bg-white/10",
                                    "aria-label": "删除梦境",
                                    children: e.jsx(_n, { size: 14 }),
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                className: "text-xl italic mb-2",
                                children: E.title,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs opacity-60 line-clamp-2 font-sans font-light",
                                children: E.content,
                              }),
                              e.jsx("div", {
                                className: "mt-4 flex gap-2",
                                children:
                                  (S = E.elements) == null
                                    ? void 0
                                    : S.slice(0, 3).map((j, T) =>
                                        e.jsx(
                                          "span",
                                          {
                                            className:
                                              "text-[9px] px-2 py-0.5 bg-white/5 rounded-full opacity-50",
                                            children: j,
                                          },
                                          T,
                                        ),
                                      ),
                              }),
                            ],
                          },
                          E.id,
                        );
                      }),
                    ],
                  },
                  "list",
                ),
              m === "create" &&
                e.jsxs(
                  We.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 20 },
                    className: "p-8 flex flex-col h-full justify-center",
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-3xl italic font-light mb-8 text-center",
                        children: "梦境织梦师",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-4 mb-8",
                        children: [
                          e.jsxs("button", {
                            onClick: () => v("reality"),
                            className: `flex-1 py-3 rounded-lg border transition-all ${y === "reality" ? "bg-white text-black border-white" : "bg-transparent text-white/40 border-white/10 hover:border-white/30"}`,
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs font-bold uppercase tracking-widest mb-1",
                                children: "现实",
                              }),
                              e.jsx("p", {
                                className: "text-[9px] opacity-60",
                                children: "基于回忆",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: () => v("fantasy"),
                            className: `flex-1 py-3 rounded-lg border transition-all ${y === "fantasy" ? "bg-white text-black border-white" : "bg-transparent text-white/40 border-white/10 hover:border-white/30"}`,
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs font-bold uppercase tracking-widest mb-1",
                                children: "幻想",
                              }),
                              e.jsx("p", {
                                className: "text-[9px] opacity-60",
                                children: "副线/平行宇宙",
                              }),
                            ],
                          }),
                        ],
                      }),
                      y === "fantasy" &&
                        e.jsxs("div", {
                          className: "mb-8",
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[10px] uppercase tracking-widest opacity-40 mb-2 block",
                              children: "梦境设定（可选）",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: b,
                              onChange: (E) => N(E.target.value),
                              placeholder:
                                "例如：古代、赛博朋克、如果我们早点相遇...",
                              className:
                                "w-full bg-transparent border-b border-white/20 py-2 text-xl font-light focus:outline-none focus:border-white/60 transition-colors placeholder:text-white/20",
                            }),
                          ],
                        }),
                      y === "reality" &&
                        e.jsx("div", {
                          className:
                            "mb-8 p-4 bg-white/5 rounded-lg border border-white/10",
                          children: e.jsx("p", {
                            className:
                              "text-xs font-light opacity-60 text-center",
                            children: "基于近期回忆与潜意识思绪。",
                          }),
                        }),
                      e.jsxs("button", {
                        onClick: k,
                        disabled: g,
                        className:
                          "w-full py-4 border border-white/20 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                        children: [
                          g
                            ? e.jsx(Sn, { size: 16, className: "animate-spin" })
                            : e.jsx(Q1, { size: 16 }),
                          g ? "正在织梦..." : "进入梦境",
                        ],
                      }),
                    ],
                  },
                  "create",
                ),
              m === "detail" &&
                f &&
                e.jsxs(
                  We.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: "p-8 pb-24",
                    children: [
                      e.jsxs(We.div, {
                        layoutId: `dream-${f.id}`,
                        className: "mb-8",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] font-sans uppercase tracking-widest opacity-40 mb-2",
                            children: f.date,
                          }),
                          e.jsx("h1", {
                            className:
                              "text-4xl italic font-light leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40",
                            children: f.title,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "prose prose-invert prose-sm font-light leading-loose opacity-80 mb-8 whitespace-pre-wrap",
                        children: f.content,
                      }),
                      f.monologue &&
                        e.jsx("div", {
                          className:
                            "mb-8 pl-4 border-l border-white/20 opacity-70 text-sm font-serif",
                          children: e.jsx(Yi, {
                            value: f.monologue,
                            voiceClassName: "italic",
                            forceZhOnly: !c,
                          }),
                        }),
                      f.emotion_analysis &&
                        e.jsxs("div", {
                          className: "mb-8 space-y-2",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] uppercase tracking-widest opacity-40",
                              children: "情绪光谱",
                            }),
                            e.jsx("div", {
                              className:
                                "flex h-1 rounded-full overflow-hidden bg-white/5",
                              children: Object.entries(f.emotion_analysis).map(
                                ([E, S], j) =>
                                  e.jsx(
                                    "div",
                                    {
                                      style: {
                                        width: `${S}%`,
                                        backgroundColor: [
                                          "#818cf8",
                                          "#f472b6",
                                          "#34d399",
                                        ][j % 3],
                                      },
                                      className: "h-full opacity-60",
                                    },
                                    E,
                                  ),
                              ),
                            }),
                            e.jsx("div", {
                              className:
                                "flex justify-between text-[9px] opacity-40 font-sans",
                              children: Object.entries(f.emotion_analysis).map(
                                ([E, S]) =>
                                  e.jsxs(
                                    "span",
                                    { children: [E, " ", S, "%"] },
                                    E,
                                  ),
                              ),
                            }),
                          ],
                        }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-2 mb-8",
                        children:
                          (M = f.elements) == null
                            ? void 0
                            : M.map((E, S) =>
                                e.jsx(
                                  "span",
                                  {
                                    className:
                                      "px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-wider bg-white/5",
                                    children: E,
                                  },
                                  S,
                                ),
                              ),
                      }),
                      f.sensory_details &&
                        f.sensory_details.length > 0 &&
                        e.jsxs("div", {
                          className: "mb-8",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] uppercase tracking-widest opacity-40 mb-2",
                              children: "感官碎片",
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-3",
                              children: f.sensory_details.map((E, S) =>
                                e.jsx(
                                  "span",
                                  {
                                    className:
                                      "text-xs opacity-60 border-b border-white/10 pb-0.5 italic",
                                    children: E,
                                  },
                                  S,
                                ),
                              ),
                            }),
                          ],
                        }),
                      e.jsxs("div", {
                        className:
                          "bg-white/5 p-6 rounded-sm border-l-2 border-white/20 backdrop-blur-sm",
                        children: [
                          e.jsx("p", {
                            className: "text-xs italic opacity-60 mb-2",
                            children: "解读",
                          }),
                          e.jsx("p", {
                            className: "text-sm font-light",
                            children: f.interpretation,
                          }),
                        ],
                      }),
                    ],
                  },
                  "detail",
                ),
            ],
          }),
        }),
      ],
    });
  },
  eN = "phone_app_pinned_contact_ids",
  MG = ({ contacts: t, onSelect: s, onClose: n }) => {
    const [a, r] = l.useState([]),
      [i, o] = l.useState(0),
      c = pn.useMemo(() => {
        if (!(t != null && t.length)) return [];
        const m = t.filter((g) => a.includes(g.id)),
          h = t.filter((g) => !a.includes(g.id));
        return [...m, ...h];
      }, [t, a]),
      d = c[i];
    l.useEffect(() => {
      be.get(eN, []).then((m) => r(Array.isArray(m) ? m : []));
    }, []);
    const u = () => {
        o((m) => (m + 1) % Math.max(1, c.length));
      },
      f = () => {
        o((m) => (m - 1 + Math.max(1, c.length)) % Math.max(1, c.length));
      },
      p = (m) => {
        if ((m.stopPropagation(), !d)) return;
        const h = a.includes(d.id) ? a.filter((x) => x !== d.id) : [...a, d.id];
        (r(h), be.set(eN, h));
        const g = h.includes(d.id) ? 0 : Math.max(0, i - 1);
        o(g);
      };
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-black font-serif text-white",
      children: [
        e.jsx(Os, {
          initial: !1,
          children: d
            ? e.jsxs(
                We.div,
                {
                  initial: { opacity: 0, scale: 1.05 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.6, ease: "easeInOut" },
                  className: "absolute inset-0 bg-cover bg-center",
                  style: {
                    backgroundImage: `url(${d.background || d.avatar})`,
                    zIndex: 0,
                  },
                  children: [
                    e.jsx("div", { className: "absolute inset-0 bg-black/30" }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60",
                    }),
                  ],
                },
                d.id,
              )
            : e.jsx("div", {
                className:
                  "absolute inset-0 flex items-center justify-center text-white/50",
                children: e.jsx("p", { children: "暂无联系人" }),
              }),
        }),
        e.jsxs("div", {
          className:
            "pt-16 px-6 flex justify-between items-center relative z-30",
          children: [
            e.jsx("button", {
              onClick: n,
              className:
                "p-2 -ml-2 text-white/80 hover:text-white transition-colors",
              children: e.jsx(un, { size: 24, strokeWidth: 1 }),
            }),
            e.jsx("div", {
              className: "text-[10px] tracking-[0.3em] uppercase opacity-80",
              children: "角色列表",
            }),
            e.jsx("div", { className: "w-6" }),
          ],
        }),
        e.jsx("div", {
          className:
            "flex-1 flex flex-col justify-end p-8 pb-24 relative z-20 pointer-events-none",
          children: e.jsx(Os, {
            mode: "wait",
            children:
              d &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: { opacity: 0, y: -20, filter: "blur(10px)" },
                  transition: { duration: 0.5, ease: "easeOut" },
                  className: "pointer-events-auto",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3 mb-4",
                      children: [
                        e.jsx("div", { className: "h-px w-8 bg-white/60" }),
                        e.jsxs("span", {
                          className:
                            "text-xs tracking-widest uppercase opacity-80",
                          children: ["编号 0", i + 1],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3 mb-2",
                      children: [
                        e.jsx("h1", {
                          className: "text-5xl font-light italic leading-tight",
                          children: d.nickname || d.name,
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: p,
                          className: `p-2 rounded-full transition-colors shrink-0 ${a.includes(d.id) ? "text-amber-400" : "text-white/50 hover:text-white/80"}`,
                          title: a.includes(d.id) ? "取消置顶" : "收藏置顶",
                          children: e.jsx(Gi, {
                            size: 22,
                            className: a.includes(d.id) ? "fill-current" : "",
                            strokeWidth: 1.5,
                          }),
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-sm opacity-70 font-sans font-light max-w-[80%] leading-relaxed mb-8",
                      children: d.signature || "数字灵魂，定格于静谧瞬间。",
                    }),
                    e.jsxs("button", {
                      onClick: () => s(d),
                      className:
                        "group flex items-center gap-3 text-sm tracking-widest uppercase hover:opacity-80 transition-opacity cursor-pointer",
                      children: [
                        e.jsx("span", {
                          className: "border-b border-white pb-1",
                          children: "探索",
                        }),
                        e.jsx(so, {
                          size: 16,
                          strokeWidth: 1,
                          className:
                            "group-hover:translate-x-1 transition-transform",
                        }),
                      ],
                    }),
                  ],
                },
                d.id,
              ),
          }),
        }),
        e.jsx("div", {
          className:
            "absolute inset-y-0 left-0 w-16 z-10 cursor-w-resize hover:bg-white/5 transition-colors",
          onClick: f,
        }),
        e.jsx("div", {
          className:
            "absolute inset-y-0 right-0 w-16 z-10 cursor-e-resize hover:bg-white/5 transition-colors",
          onClick: u,
        }),
        e.jsx("div", {
          className: "absolute top-0 left-0 right-0 flex h-1 z-30",
          children: c.map((m, h) =>
            e.jsx(
              "div",
              {
                className:
                  "flex-1 h-full bg-white/20 mx-0.5 first:ml-0 last:mr-0",
                children:
                  h === i &&
                  e.jsx(We.div, {
                    layoutId: "progress",
                    className: "h-full bg-white",
                    initial: { width: "0%" },
                    animate: { width: "100%" },
                    transition: { duration: 5, ease: "linear" },
                    onAnimationComplete: u,
                  }),
              },
              h,
            ),
          ),
        }),
      ],
    });
  },
  $r = (t, s = 800, n = 0.7) =>
    new Promise((a, r) => {
      const i = new FileReader();
      (i.readAsDataURL(t),
        (i.onload = (o) => {
          const c = new Image();
          ((c.src = o.target.result),
            (c.onload = () => {
              const d = document.createElement("canvas");
              let u = c.width,
                f = c.height;
              (u > s && ((f = Math.round((f * s) / u)), (u = s)),
                (d.width = u),
                (d.height = f),
                d.getContext("2d").drawImage(c, 0, 0, u, f));
              const m = d.toDataURL("image/jpeg", n);
              a(m);
            }),
            (c.onerror = (d) => r(d)));
        }),
        (i.onerror = (o) => r(o)));
    }),
  TG = ({
    contact: t,
    onBack: s,
    onOpenDiary: n,
    onOpenTrace: a,
    onOpenPlan: r,
    onOpenBrowser: i,
    onOpenMood: o,
    onOpenDream: c,
    onOpenMusic: d,
    onOpenWallet: u,
    onOpenPastSelfArchive: f,
    onOpenWishList: p,
    apiConfig: m,
  }) => {
    const h = yi((t == null ? void 0 : t.setting) || ""),
      [g, x] = l.useState([null, null, null, null]),
      [y, v] = l.useState(null),
      [b, N] = l.useState(null),
      w = l.useRef(null);
    l.useEffect(() => {
      (async () => {
        const [C, M] = await Promise.all([
          be.get(`phone_app_mood_${t.id}`),
          be.get(`phone_app_gallery_${t.id}`),
        ]);
        (C != null && N(C), M != null && x(M));
      })();
    }, [t.id]);
    const _ = (k) => {
        var C;
        (v(k), (C = w.current) == null || C.click());
      },
      A = async (k) => {
        const C = k.target.files[0];
        if (C && y !== null)
          try {
            const M = await $r(C, 600, 0.7);
            x((E) => {
              const S = [...E];
              return ((S[y] = M), be.set(`phone_app_gallery_${t.id}`, S), S);
            });
          } catch {}
      };
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-[#fcfcfc] font-serif text-[#1a1a1a]",
      children: [
        e.jsxs("div", {
          className:
            "pt-12 px-6 pb-6 flex items-center justify-between relative z-10",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className:
                    "text-[10px] text-[#1a1a1a]/40 uppercase tracking-[0.2em] mb-1",
                  children: "今日",
                }),
                e.jsx("h1", {
                  className: "text-3xl italic font-light",
                  children: t.nickname || t.name,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "w-12 h-12 relative cursor-pointer group",
              onClick: s,
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-black/5 rounded-[14px] rotate-6 transition-transform group-hover:rotate-12",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-[14px] overflow-hidden border-2 border-white shadow-sm bg-gray-100 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1",
                  children: e.jsx("img", {
                    src: t.avatar,
                    className: "w-full h-full object-cover",
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto px-6 pb-24 space-y-6 no-scrollbar",
          children: [
            e.jsxs("section", {
              className: "flex gap-4",
              children: [
                e.jsxs("div", {
                  className:
                    "flex-1 bg-black text-white p-4 rounded-sm flex flex-col justify-between relative overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute right-2 top-2 w-2 h-2 bg-green-500 rounded-full animate-pulse",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-widest opacity-60",
                      children: "状态",
                    }),
                    e.jsx("p", {
                      className: "text-lg font-light italic",
                      children: (b == null ? void 0 : b.status) || "离线",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent opacity-30",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex-1 bg-[#f0f0f0] p-4 rounded-sm flex flex-col justify-between",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[10px] uppercase tracking-widest opacity-40 text-black",
                      children: "电量",
                    }),
                    e.jsxs("div", {
                      className: "flex items-end gap-1",
                      children: [
                        e.jsx("span", {
                          className: "text-2xl font-light",
                          children: (b == null ? void 0 : b.battery) || "--",
                        }),
                        e.jsx("span", {
                          className: "text-xs mb-1",
                          children: "%",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (b == null ? void 0 : b.location) &&
              e.jsx("section", {
                children: e.jsxs("div", {
                  className:
                    "bg-white border border-[#1a1a1a]/5 p-4 flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center",
                          children: e.jsx(kl, {
                            size: 14,
                            className: "text-gray-400",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] uppercase tracking-widest opacity-40",
                              children: "位置",
                            }),
                            e.jsx("p", {
                              className: "text-sm font-medium",
                              children: b.location,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "w-2 h-2 rounded-full bg-blue-500 animate-pulse",
                    }),
                  ],
                }),
              }),
            e.jsxs("section", {
              onClick: () => o(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "心情共鸣",
                    }),
                    e.jsx(Wr, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsx("div", {
                  className: `p-6 rounded-sm relative overflow-hidden transition-all duration-500 group-hover:shadow-md ${b ? "bg-gradient-to-br from-gray-50 to-gray-100" : "bg-[#f5f5f5] group-hover:bg-[#f0f0f0]"}`,
                  children: b
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute top-0 right-0 p-4 opacity-5 text-6xl font-sans select-none pointer-events-none tracking-widest",
                            children: b.kaomoji,
                          }),
                          e.jsxs("div", {
                            className: "relative z-10",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-2xl drop-shadow-sm font-sans font-light tracking-wider",
                                    children: b.kaomoji,
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h3", {
                                        className:
                                          "text-xl font-serif italic leading-none",
                                        children: b.mood_display,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] font-sans uppercase tracking-widest opacity-40 mt-1",
                                        children: b.mood,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "text-sm leading-relaxed text-[#1a1a1a]/80 font-light border-l-2 border-[#1a1a1a]/10 pl-3",
                                children: e.jsx(Yi, {
                                  value: b.thought,
                                  voiceClassName: "italic",
                                  forceZhOnly: !h,
                                }),
                              }),
                              e.jsxs("div", {
                                className:
                                  "mt-4 flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity",
                                children: [
                                  e.jsx(Or, { size: 10 }),
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-sans uppercase tracking-wider",
                                    children: "点击更新",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute top-0 right-0 p-4 opacity-10 text-6xl font-sans",
                            children: '"',
                          }),
                          e.jsx("p", {
                            className:
                              "text-lg italic leading-relaxed text-[#1a1a1a]/80 relative z-10",
                            children: "点击感知心情共鸣...",
                          }),
                          e.jsxs("div", {
                            className: "mt-4 flex items-center gap-2",
                            children: [
                              e.jsx("span", {
                                className: "text-2xl opacity-50",
                                children: "✨",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-xs font-sans text-[#1a1a1a]/40 uppercase tracking-wider",
                                children: "共鸣",
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              ],
            }),
            e.jsx("section", {
              children: e.jsxs("div", {
                className:
                  "bg-white border border-[#1a1a1a]/5 p-6 relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className: "absolute top-2 left-2 text-[#1a1a1a]/5",
                    children: e.jsx(Xn, { size: 48, strokeWidth: 1 }),
                  }),
                  e.jsx("div", {
                    className:
                      "text-center text-sm font-serif leading-loose text-[#1a1a1a]/70 relative z-10",
                    children:
                      b != null && b.insight
                        ? e.jsx(Yi, {
                            value: b.insight,
                            voiceClassName: "italic",
                            forceZhOnly: !h,
                          })
                        : e.jsx("span", {
                            className: "italic",
                            children: "数字世界只是我们集体梦境的倒影。",
                          }),
                  }),
                  e.jsx("p", {
                    className:
                      "text-center text-[10px] font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/20 mt-4",
                    children: "每日洞察",
                  }),
                ],
              }),
            }),
            e.jsxs("section", {
              onClick: () => c(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "梦境记录",
                    }),
                    e.jsx(ao, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-[#1a1a1a] text-white p-6 flex items-center justify-between relative overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-indigo-900 to-black opacity-80",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsx("h3", {
                          className: "text-xl font-serif italic",
                          children: "潜意识",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] opacity-60 font-sans uppercase tracking-wider mt-1",
                          children: "探索梦境碎片",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "relative z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors",
                      children: e.jsx(Q1, { size: 20, strokeWidth: 1.5 }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              onClick: () => r(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "计划",
                    }),
                    e.jsx(Gy, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-[#1a1a1a] text-white p-6 flex items-center justify-between relative overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-700/40 via-transparent to-transparent",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] font-sans uppercase tracking-wider opacity-80",
                          children: "今日计划",
                        }),
                        e.jsx("h3", {
                          className: "text-2xl font-serif italic",
                          children: "角色日程",
                        }),
                        e.jsx("p", {
                          className: "text-xs opacity-60 font-light mt-1",
                          children: "查看与切换日期计划",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "relative z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors",
                      children: e.jsx(Gy, { size: 20, strokeWidth: 1.5 }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              onClick: () => a(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "行踪",
                    }),
                    e.jsx(kl, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-black text-white p-6 flex items-center justify-between relative overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-700/40 via-transparent to-transparent",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-1",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-2 h-2 rounded-full bg-green-500 animate-pulse",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] font-sans uppercase tracking-wider opacity-80",
                              children: "实时状态",
                            }),
                          ],
                        }),
                        e.jsx("h3", {
                          className: "text-2xl font-serif italic",
                          children: "开始查岗",
                        }),
                        e.jsx("p", {
                          className: "text-xs opacity-60 font-light mt-1",
                          children: "查看今日行程与证据",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "relative z-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors",
                      children: e.jsx(Y0, { size: 20, strokeWidth: 1.5 }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              onClick: () => n(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "日记",
                    }),
                    e.jsx(ui, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-white border border-[#1a1a1a]/10 p-6 flex items-center justify-between hover:bg-[#f9f9f9] transition-colors",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h3", {
                          className: "text-xl font-serif italic",
                          children: "秘密笔记",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-[#1a1a1a]/40 font-sans uppercase tracking-wider mt-1",
                          children: "阅读私密想法",
                        }),
                      ],
                    }),
                    e.jsx(so, {
                      size: 20,
                      strokeWidth: 1,
                      className:
                        "text-[#1a1a1a]/40 group-hover:translate-x-1 transition-transform",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              onClick: () => d(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "灵魂电台",
                    }),
                    e.jsx(vr, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative h-40 bg-[#fcfcfc] rounded-xl overflow-hidden group-hover:shadow-xl transition-all duration-500 border border-gray-100",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply",
                    }),
                    e.jsxs("div", {
                      className:
                        "absolute inset-0 flex items-center justify-between p-6 pl-8",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex flex-col justify-center z-10 space-y-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-1",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                                  children: "直播中",
                                }),
                              ],
                            }),
                            e.jsxs("h3", {
                              className:
                                "text-4xl font-serif italic text-[#1a1a1a] leading-[0.9]",
                              children: ["Soul", e.jsx("br", {}), "Radio"],
                            }),
                            e.jsx("div", {
                              className: "h-px w-8 bg-black/10 my-2",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[9px] font-sans font-medium text-gray-400 tracking-wider uppercase",
                              children: "FM 88.5 • Stereo",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "relative w-36 h-36 flex-shrink-0 mr-[-30px] group-hover:mr-[-15px] transition-all duration-500 ease-out",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full bg-black/20 blur-2xl transform translate-y-4 scale-90 opacity-60",
                            }),
                            e.jsxs("div", {
                              className:
                                "w-full h-full rounded-full bg-[#111] relative flex items-center justify-center shadow-2xl group-hover:rotate-[360deg] transition-transform duration-[8s] ease-linear ring-1 ring-white/10",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-full bg-[repeating-radial-gradient(#1a1a1a_0,#1a1a1a_2px,#2a2a2a_3px,#1a1a1a_4px)] opacity-90",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-full bg-[conic-gradient(transparent_0deg,rgba(255,255,255,0.15)_40deg,transparent_80deg,transparent_180deg,rgba(255,255,255,0.15)_220deg,transparent_260deg)] opacity-80 mix-blend-overlay",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "absolute w-14 h-14 rounded-full bg-[#f0f0f0] flex items-center justify-center shadow-[inset_0_0_10px_rgba(0,0,0,0.2)] z-10 overflow-hidden",
                                  children: [
                                    e.jsx("img", {
                                      src: t.avatar,
                                      className:
                                        "absolute inset-0 w-full h-full object-cover opacity-90",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute w-1.5 h-1.5 bg-[#111] rounded-full shadow-inner z-20",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center pointer-events-none",
                              children: e.jsx("div", {
                                className:
                                  "w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300",
                                children: e.jsx(xr, {
                                  size: 18,
                                  fill: "white",
                                  className: "text-white ml-1",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "相册",
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-[10px] text-gray-400",
                          children: "点击上传",
                        }),
                        e.jsx(Za, { size: 14, className: "opacity-40" }),
                      ],
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: w,
                      className: "hidden",
                      accept: "image/*",
                      onChange: A,
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-3 overflow-x-auto no-scrollbar pb-2",
                  children: g.map((k, C) =>
                    e.jsx(
                      "div",
                      {
                        onClick: () => _(C),
                        className:
                          "w-32 aspect-[3/4] flex-shrink-0 bg-gray-100 relative overflow-hidden group rounded-sm cursor-pointer hover:opacity-90 transition-opacity",
                        children: k
                          ? e.jsx("img", {
                              src: k,
                              className: "w-full h-full object-cover",
                            })
                          : e.jsx("div", {
                              className: `w-full h-full flex items-center justify-center ${C === 0 ? "bg-blue-50" : C === 1 ? "bg-pink-50" : C === 2 ? "bg-yellow-50" : "bg-green-50"}`,
                              children: e.jsx(ea, {
                                size: 24,
                                className: "text-gray-300",
                              }),
                            }),
                      },
                      C,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("section", {
              onClick: () => i(m),
              className: "cursor-pointer group",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 border-b border-[#1a1a1a]/5 pb-2",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-bold uppercase tracking-widest",
                      children: "发现",
                    }),
                    e.jsx(Lu, { size: 14, className: "opacity-40" }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-[#1a1a1a] text-white p-6 flex items-center justify-between relative overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300",
                  children: [
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsx("h3", {
                          className: "text-xl font-serif italic",
                          children: "浏览历史",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] opacity-60 font-sans uppercase tracking-wider mt-1",
                          children: "探索数字足迹",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors",
                      children: e.jsx(H5, { size: 20, strokeWidth: 1.5 }),
                    }),
                  ],