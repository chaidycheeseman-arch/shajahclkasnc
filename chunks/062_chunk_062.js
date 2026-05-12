                      className:
                        "h-9 w-9 rounded-full object-cover shrink-0 border border-[#c5a059]/40",
                    })
                  : null,
                e.jsxs("div", {
                  className: "min-w-0 text-left",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[13px] font-medium text-amber-100/90 truncate",
                      children: n,
                    }),
                    a > 1 &&
                      e.jsxs("p", {
                        className:
                          "mt-0.5 text-[11px] tabular-nums text-amber-200/75",
                        children: ["×", a],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function BK({ index: t, showcaseKey: s }) {
  const n = l.useRef(null);
  return (
    l.useEffect(() => {
      const a = setTimeout(() => {
        const r = n.current;
        if (!r) return;
        const i = Math.random() * 12 + 8;
        ((r.style.width = `${i}px`), (r.style.height = `${i * 0.8}px`));
        const o = Math.random() * 120 - 10;
        ((r.style.left = `${o}vw`), (r.style.top = "-20px"));
        const c = Math.random() * 4e3 + 4e3,
          d = (Math.random() - 0.5) * 300,
          u = Math.random() * 720;
        r.animate(
          [
            {
              transform: "translate(0, 0) rotate(0deg) rotateY(0deg)",
              opacity: 0,
            },
            { opacity: 0.8, offset: 0.1 },
            { opacity: 0.8, offset: 0.8 },
            {
              transform: `translate(${d}px, 110vh) rotate(${u}deg) rotateY(${u / 2}deg)`,
              opacity: 0,
            },
          ],
          { duration: c, easing: "cubic-bezier(0.37, 0, 0.63, 1)" },
        );
      }, t * 50);
      return () => clearTimeout(a);
    }, [t, s]),
    e.jsx("div", { ref: n, className: "dy-sakura-petal", "aria-hidden": !0 })
  );
}
function UK({
  showcaseKey: t,
  giftLine: s,
  name: n,
  count: a,
  senderAvatar: r,
}) {
  const [i, o] = l.useState(!1),
    [c, d] = l.useState(!1),
    u = l.useId(),
    f = String(s || "").trim();
  return (
    l.useEffect(() => {
      (o(!1), d(!1));
      let p = !1;
      const m = requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            p || (o(!0), d(!0));
          });
        }),
        h = setTimeout(() => {
          p || (o(!1), d(!1));
        }, 6e3);
      return () => {
        ((p = !0), cancelAnimationFrame(m), clearTimeout(h));
      };
    }, [t]),
    e.jsxs("div", {
      className:
        "relative flex flex-col items-center justify-center w-full max-w-[min(92vw,280px)] pointer-events-none",
      children: [
        e.jsx("div", {
          className: "dy-sakura-atmosphere-glow",
          style: { opacity: c ? 1 : 0 },
          "aria-hidden": !0,
        }),
        e.jsx("div", {
          className:
            "fixed inset-0 z-[253] overflow-hidden pointer-events-none",
          "aria-hidden": !0,
          children: Array.from({ length: 60 }).map((p, m) =>
            e.jsx(BK, { index: m, showcaseKey: t }, `${u}-sakura-${t}-${m}`),
          ),
        }),
        e.jsx("div", {
          className: `dy-sakura-gift-stage ${i ? "dy-sakura-gift-stage--active" : ""}`,
          children: e.jsx("div", {
            className: "dy-sakura-gift-container",
            children: e.jsxs("div", {
              className: "dy-sakura-memoir-folder",
              children: [
                e.jsx("div", { className: "dy-sakura-embossed-border" }),
                e.jsx("div", {
                  className: "dy-sakura-ribbon",
                  children: e.jsx("span", {
                    className: "dy-sakura-ribbon-text",
                    children: "Exclusive",
                  }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("div", {
                      className: "w-2 h-2 rounded-full bg-pink-100 shrink-0",
                    }),
                    e.jsx("div", {
                      className: "text-[7px] text-gray-300 tracking-[0.3em]",
                      children: "PRIVATE ARCHIVE",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "dy-sakura-gift-title dy-sakura-gift-title--pink",
                  children: ["Sakura", e.jsx("br", {}), "memories"],
                }),
                e.jsx("p", {
                  className: "dy-sakura-gift-line",
                  children: f || "暂无送礼台词",
                }),
                e.jsxs("div", {
                  className: "dy-sakura-gift-corner-en",
                  children: [
                    "A fleeting moment of beauty,",
                    e.jsx("br", {}),
                    "captured in the dance of spring.",
                  ],
                }),
              ],
            }),
          }),
        }),
        e.jsxs("div", {
          className:
            "relative z-[256] mt-6 w-full max-w-[min(90vw,17rem)] pt-3 border-t border-white/[0.07] text-center",
          children: [
            e.jsx("p", {
              className: "text-[10px] text-white/38 tracking-widest",
              children: "FROM",
            }),
            e.jsxs("div", {
              className: "mt-1 flex items-center justify-center gap-2 min-w-0",
              children: [
                String(r || "").trim()
                  ? e.jsx("img", {
                      src: String(r).trim(),
                      alt: "",
                      className:
                        "h-9 w-9 rounded-full object-cover shrink-0 border border-pink-200/25",
                    })
                  : null,
                e.jsxs("div", {
                  className: "min-w-0 text-left",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[13px] font-medium text-amber-100/90 truncate",
                      children: n,
                    }),
                    a > 1 &&
                      e.jsxs("p", {
                        className:
                          "mt-0.5 text-[11px] tabular-nums text-amber-200/75",
                        children: ["×", a],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
const GK = { fontFamily: '"Noto Serif SC","Songti SC",Georgia,serif' };
function HK({ giftId: t, giftLabel: s, name: n, count: a, senderAvatar: r }) {
  const i = String(r || "").trim(),
    o = e.jsxs("div", {
      className: "pt-2 border-t border-white/[0.07] text-left",
      children: [
        e.jsx("p", {
          className: "text-[10px] text-white/38 tracking-widest",
          children: "FROM",
        }),
        e.jsxs("div", {
          className: "mt-1 flex items-center gap-2 min-w-0",
          children: [
            i
              ? e.jsx("img", {
                  src: i,
                  alt: "",
                  className:
                    "h-9 w-9 rounded-full object-cover shrink-0 border border-amber-500/25",
                })
              : null,
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("p", {
                  className:
                    "text-[13px] font-medium text-amber-100/90 truncate",
                  children: n,
                }),
                a > 1 &&
                  e.jsxs("p", {
                    className:
                      "mt-0.5 text-[11px] tabular-nums text-amber-200/75",
                    children: ["×", a],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  switch (t) {
    case "g1":
      return e.jsxs("div", {
        className:
          "relative overflow-hidden rounded-[1.2rem] border border-amber-500/18 bg-gradient-to-b from-[#14110d] via-[#0a0908] to-black shadow-[0_36px_90px_-24px_rgba(0,0,0,0.88)] dy-live-liquid-glass-fine",
        children: [
          e.jsx("div", {
            className:
              "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent",
          }),
          e.jsx("div", {
            className:
              "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-10%,rgba(212,175,55,0.14),transparent_55%)]",
          }),
          e.jsxs("div", {
            className: "relative px-4 pt-5 pb-1 text-center",
            children: [
              e.jsxs("div", {
                className:
                  "mx-auto inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-black/45 px-3 py-1 backdrop-blur-sm",
                children: [
                  e.jsx("span", {
                    className: "h-1 w-1 rounded-full bg-amber-400/70",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[7px] tracking-[0.5em] text-amber-200/60 uppercase",
                    children: "Philatelic Issue",
                  }),
                  e.jsx("span", {
                    className: "h-1 w-1 rounded-full bg-amber-400/70",
                  }),
                ],
              }),
              e.jsx("p", {
                className:
                  "mt-3 text-[16px] leading-snug text-amber-50/95 tracking-tight",
                style: GK,
                children: s,
              }),
              e.jsx("p", {
                className:
                  "mt-1.5 text-[9px] tracking-[0.28em] text-white/28 uppercase",
                children: "Commemorative · 邮务典藏",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "relative mx-4 mt-3 mb-4 rounded-xl border border-amber-600/20 bg-gradient-to-br from-amber-950/25 via-black/50 to-zinc-950/80 p-[1px] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
            children: e.jsx("div", {
              className:
                "rounded-[0.65rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(251,191,36,0.08),transparent_50%)] px-4 py-6",
              children: e.jsxs("div", {
                className:
                  "relative mx-auto aspect-square w-[min(58vw,11.5rem)] rounded-lg border border-amber-500/15 bg-gradient-to-b from-black/50 to-stone-950/60 p-3 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.75)]",
                children: [
                  e.jsx("div", {
                    className:
                      "pointer-events-none absolute inset-2 rounded border border-dashed border-amber-600/15",
                  }),
                  e.jsx("div", {
                    className:
                      "pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_42%,rgba(0,0,0,0.2)_100%)]",
                  }),
                  e.jsx("div", {
                    className:
                      "relative flex h-full items-center justify-center",
                    children: e.jsx(yh, {
                      id: "g1",
                      className:
                        "w-[82%] h-auto drop-shadow-[0_10px_28px_rgba(0,0,0,0.65)]",
                    }),
                  }),
                ],
              }),
            }),
          }),
          e.jsx("div", {
            className: "border-t border-amber-500/10 bg-black/40 px-4 py-2.5",
            children: e.jsx("p", {
              className:
                "text-center text-[8px] tracking-[0.22em] text-white/22 uppercase",
              children: "Archival mount · 无酸衬纸",
            }),
          }),
          e.jsx("div", { className: "px-4 pb-4 pt-1", children: o }),
        ],
      });
    default:
      return null;
  }
}
function WK({
  active: t,
  onAdvance: s,
  hasMore: n,
  resolveNpcAvatar: a,
  viewerAvatar: r,
  streamerAvatar: i,
  profileCoverUrl: o,
  streamerName: c,
}) {
  if (!t) return null;
  const { gift_id: d, name: u, giftLabel: f, count: p, showcaseKey: m } = t,
    h = d === "g6",
    g = d === "g5",
    x = d === "g2",
    y = d === "g4",
    v = d === "g3",
    b = l.useMemo(
      () =>
        t
          ? t.kind === "user" && r
            ? r
            : t.kind === "resident" && t.resident_id && a
              ? a(t.resident_id)
              : null
          : null,
      [t, a, r],
    );
  return e.jsxs("div", {
    role: "button",
    tabIndex: 0,
    className:
      "absolute inset-0 z-[254] flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-black/52 via-black/68 to-black/78 backdrop-blur-[3px] cursor-pointer outline-none",
    onClick: s,
    onKeyDown: (N) => {
      (N.key === "Enter" || N.key === " ") &&
        (N.preventDefault(), s == null || s());
    },
    children: [
      h
        ? e.jsx(
            "div",
            {
              className:
                "dy-live-gift-show dy-live-gift-show--g6 relative w-full max-w-[min(92vw,18rem)] pointer-events-none flex flex-col items-center",
              children: e.jsx(OK, {
                showcaseKey: m,
                giftLabel: f,
                name: u,
                count: p,
                senderAvatar: b || void 0,
              }),
            },
            m,
          )
        : g
          ? e.jsx(
              "div",
              {
                className:
                  "dy-live-gift-show dy-live-gift-show--g5-sakura relative w-full max-w-[min(94vw,22rem)] pointer-events-none flex flex-col items-center",
                children: e.jsx(UK, {
                  showcaseKey: m,
                  giftLine: String(
                    (t == null ? void 0 : t.gift_line) || "",
                  ).trim(),
                  name: u,
                  count: p,
                  senderAvatar: b || void 0,
                }),
              },
              m,
            )
          : x
            ? e.jsx(
                "div",
                {
                  className:
                    "dy-live-gift-show dy-live-gift-show--g2-ice relative w-full max-w-[min(100vw,24rem)] pointer-events-none flex flex-col items-center",
                  children: e.jsx(IK, {
                    showcaseKey: m,
                    giftLabel: f,
                    giftLine: String(
                      (t == null ? void 0 : t.gift_line) || "",
                    ).trim(),
                    name: u,
                    count: p,
                    senderAvatar: b || void 0,
                  }),
                },
                m,
              )
            : y
              ? e.jsx(
                  "div",
                  {
                    className:
                      "dy-live-gift-show dy-live-gift-show--g4-echo relative w-full max-w-[min(96vw,24rem)] pointer-events-none flex flex-col items-center",
                    children: e.jsx(DK, {
                      showcaseKey: m,
                      coverUrl: i,
                      g4_echo: t == null ? void 0 : t.g4_echo,
                      g4_song_title: t == null ? void 0 : t.g4_song_title,
                      g4_quote: t == null ? void 0 : t.g4_quote,
                      name: u,
                      count: p,
                      senderAvatar: b || void 0,
                    }),
                  },
                  m,
                )
              : v
                ? e.jsx(
                    "div",
                    {
                      className:
                        "dy-live-gift-show dy-live-gift-show--g3-folio relative w-full max-w-[min(96vw,24rem)] pointer-events-none flex flex-col items-center",
                      children: e.jsx(TK, {
                        showcaseKey: m,
                        profileCoverUrl: o,
                        streamerName: c,
                        senderName: u,
                        giftLabel: f,
                        g3_title: t == null ? void 0 : t.g3_title,
                        g3_poem: t == null ? void 0 : t.g3_poem,
                        name: u,
                        count: p,
                        senderAvatar: b || void 0,
                      }),
                    },
                    m,
                  )
                : e.jsx(
                    "div",
                    {
                      className: `dy-live-gift-show dy-live-gift-show--${d} relative w-full max-w-[min(94vw,22rem)] pointer-events-none`,
                      children: e.jsx(HK, {
                        giftId: d,
                        giftLabel: f,
                        name: u,
                        count: p,
                        senderAvatar: b || void 0,
                      }),
                    },
                    m,
                  ),
      e.jsx("p", {
        className:
          "mt-5 text-[10px] tracking-[0.2em] text-white/38 uppercase pointer-events-none",
        children: n ? "点击 · 下一个" : "点击 · 关闭",
      }),
    ],
  });
}
const l4 = () =>
    e.jsx("svg", {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#a67b7f",
      strokeWidth: "1",
      "aria-hidden": !0,
      children: e.jsx("path", { d: "m15 18-6-6 6-6" }),
    }),
  YK = ({
    profileOpen: t,
    giftsOpen: s,
    onCloseProfile: n,
    onOpenGifts: a,
    onCloseGifts: r,
    giftDetailId: i = null,
    onOpenGiftDetail: o,
    onBackGiftDetail: c,
    streamer: d,
    profileCoverUrl: u,
    giftCounts: f = {},
    giftLedger: p = {},
    resolveNpcAvatar: m,
    viewerAvatar: h,
    viewerMergeName: g,
  }) => {
    const x = String((d == null ? void 0 : d.signature) || "").trim(),
      y = (S) =>
        !S || !String(S).trim()
          ? null
          : String(S)
              .split(/(@[^\s\u200b]+)/g)
              .map((T, I) =>
                T.startsWith("@")
                  ? e.jsx(
                      "span",
                      { className: "text-[#2b5aed] mr-1", children: T },
                      I,
                    )
                  : T,
              ),
      v = i ? _r.find((S) => S.id === i) : null,
      b = l.useMemo(
        () =>
          i
            ? [...d2(p[i] || [], g)].sort(
                (j, T) => (T.count || 0) - (j.count || 0),
              )
            : [],
        [i, p, g],
      ),
      N = String((d == null ? void 0 : d.name) || "Host").trim(),
      w = N.indexOf(" "),
      _ = w > 0 ? N.slice(0, w) : N,
      A = w > 0 ? N.slice(w + 1) : "",
      k = new Date().getFullYear(),
      C = t && !s,
      M = s && !i,
      E = s && !!i;
    return !t && !s
      ? null
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx("button", {
              type: "button",
              className:
                "absolute inset-0 z-[260] bg-black/38 backdrop-blur-[2px]",
              "aria-label": "关闭",
              onClick: n,
            }),
            e.jsx("div", {
              className: `dy-float-panel ${s ? "dy-float-panel--deep" : ""}`,
              children: e.jsxs("div", {
                className: "dy-float-page-wrap",
                children: [
                  e.jsxs("div", {
                    className: `dy-float-page items-center text-center ${C ? "dy-float-page--active" : ""}`,
                    "aria-hidden": !C,
                    children: [
                      e.jsx("span", {
                        className: "dy-float-mag-subtitle",
                        children: "The Private Edition",
                      }),
                      e.jsx("div", {
                        className: "dy-float-avatar-wrap",
                        children: e.jsx("img", { src: d.avatar, alt: "" }),
                      }),
                      e.jsx("h1", {
                        className: "dy-float-mag-title",
                        children: A
                          ? e.jsxs(e.Fragment, {
                              children: [
                                _,
                                " ",
                                e.jsx("span", {
                                  className: "italic",
                                  style: {
                                    fontFamily: "'Playfair Display', serif",
                                  },
                                  children: A,
                                }),
                              ],
                            })
                          : _,
                      }),
                      e.jsx("p", {
                        className:
                          "mt-8 text-[11px] text-[#8a7375] leading-relaxed tracking-[0.25em] font-light max-w-[200px]",
                        children: x
                          ? y(x)
                          : "L'esthétique de la douceur dans chaque détail.",
                      }),
                      e.jsx("div", {
                        className:
                          "mt-4 w-1 h-12 bg-gradient-to-b from-rose-100 to-transparent mx-auto",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: a,
                        className: "dy-float-art-btn",
                        children: "开启典藏馆",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: `dy-float-page items-start overflow-y-auto dy-live-scrollbar-hide ${M ? "dy-float-page--active" : ""}`,
                    "aria-hidden": !M,
                    children: [
                      e.jsxs("div", {
                        className:
                          "w-full flex justify-between items-end mb-10 shrink-0",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[9px] uppercase tracking-[0.4em] text-rose-300 block mb-1",
                                children: "Room No.01",
                              }),
                              e.jsx("h2", {
                                className:
                                  "text-2xl text-[#4a3a3b] tracking-wide",
                                style: {
                                  fontFamily: "'Playfair Display', serif",
                                },
                                children: "Collections",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: r,
                            className:
                              "mb-1 p-1 rounded-full hover:bg-rose-50/80 active:scale-95",
                            "aria-label": "返回",
                            children: e.jsx(l4, {}),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "grid grid-cols-3 gap-y-8 gap-x-5 w-full shrink-0",
                        children: _r.map((S) => {
                          const j = Math.max(0, Number(f[S.id]) || 0),
                            T = Math.max(1, Number(S.units) || 1),
                            I = Math.min(100, Math.round((j / T) * 100));
                          return e.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => (o == null ? void 0 : o(S.id)),
                              className:
                                "dy-float-gift-item text-left border-0 bg-transparent p-0 cursor-pointer",
                              children: [
                                e.jsxs("span", {
                                  className: "dy-float-gift-count",
                                  children: [j, "/", T],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "dy-float-gift-circle relative [&_svg]:max-h-[2.35rem] w-full",
                                  children: [
                                    e.jsx(yh, {
                                      id: S.id,
                                      className:
                                        "max-h-[2.35rem] w-auto opacity-90",
                                      coverUrl:
                                        S.id === "g4"
                                          ? d == null
                                            ? void 0
                                            : d.avatar
                                          : void 0,
                                      profileCoverUrl:
                                        S.id === "g3" ? u : void 0,
                                    }),
                                    (() => {
                                      const L = kC(p[S.id] || [], g);
                                      if (!L) return null;
                                      const B =
                                        L.kind === "resident" &&
                                        L.resident_id &&
                                        m
                                          ? m(L.resident_id)
                                          : L.kind === "user" && h
                                            ? h
                                            : null;
                                      return B
                                        ? e.jsx("img", {
                                            src: B,
                                            alt: "",
                                            className:
                                              "absolute bottom-0 right-0 z-10 h-[22px] w-[22px] rounded-full border-2 border-white object-cover shadow-md",
                                          })
                                        : e.jsx("span", {
                                            className:
                                              "absolute -bottom-1 left-1/2 z-10 max-w-[118%] -translate-x-1/2 truncate rounded-md border border-rose-100/80 bg-white/95 px-1 py-0.5 text-center text-[8px] leading-tight text-[#6d5c5e] shadow-sm",
                                            children: L.name,
                                          });
                                    })(),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: "dy-float-gift-label w-full",
                                  children: S.name,
                                }),
                                e.jsx("div", {
                                  className: "dy-float-progress-track",
                                  children: e.jsx("div", {
                                    className: "dy-float-progress-fill",
                                    style: { width: `${I}%` },
                                  }),
                                }),
                              ],
                            },
                            S.id,
                          );
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "mt-auto pt-6 flex justify-between items-center w-full shrink-0",
                        children: e.jsxs("div", {
                          className:
                            "text-[8px] text-rose-200 tracking-[0.6em] uppercase",
                          children: ["Archives — ", k],
                        }),
                      }),
                      e.jsx("div", {
                        className: "dy-float-page-num",
                        children: "02",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: `dy-float-page items-start overflow-hidden ${E ? "dy-float-page--active" : ""}`,
                    "aria-hidden": !E,
                    children: [
                      e.jsxs("div", {
                        className:
                          "w-full flex justify-between items-end mb-6 shrink-0",
                        children: [
                          e.jsxs("div", {
                            className: "min-w-0 pr-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[9px] uppercase tracking-[0.35em] text-rose-300 block mb-1",
                                children: "Record",
                              }),
                              e.jsx("h2", {
                                className:
                                  "text-lg text-[#4a3a3b] tracking-wide truncate",
                                style: {
                                  fontFamily: "'Playfair Display', serif",
                                },
                                children: v ? `${v.name} · 送礼记录` : "",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: c,
                            className:
                              "mb-1 p-1 rounded-full hover:bg-rose-50/80 active:scale-95 shrink-0",
                            "aria-label": "返回典藏馆",
                            children: e.jsx(l4, {}),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "flex-1 min-h-0 overflow-y-auto w-full dy-live-scrollbar-hide pr-0.5",
                        children:
                          !v || b.length === 0
                            ? e.jsx("p", {
                                className:
                                  "text-center text-[13px] text-[#8a7375] py-10",
                                children: "暂无送礼记录",
                              })
                            : e.jsx("ul", {
                                className: "flex flex-col gap-2.5 pb-10",
                                children: b.map((S) => {
                                  const j =
                                      S.kind === "resident" && S.resident_id,
                                    T = S.kind === "user",
                                    I =
                                      j && m
                                        ? m(S.resident_id)
                                        : T && h
                                          ? h
                                          : null;
                                  return e.jsxs(
                                    "li",
                                    {
                                      className:
                                        "dy-float-detail-row px-3 py-2.5 flex items-center gap-2.5",
                                      children: [
                                        I
                                          ? e.jsx("img", {
                                              src: I,
                                              alt: "",
                                              className:
                                                "w-9 h-9 rounded-full object-cover shrink-0 border border-rose-100/80",
                                            })
                                          : null,
                                        e.jsxs("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            e.jsxs("p", {
                                              className:
                                                "text-[13px] font-medium text-[#4a3a3b] truncate",
                                              children: [
                                                S.name,
                                                e.jsxs("span", {
                                                  className:
                                                    "text-[#a67b7f] tabular-nums font-semibold ml-1",
                                                  children: [
                                                    "×",
                                                    S.count != null
                                                      ? S.count
                                                      : 1,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            j
                                              ? e.jsx("p", {
                                                  className:
                                                    "text-[10px] text-[#a67b7f]/80 mt-0.5",
                                                  children: "通讯录居民",
                                                })
                                              : null,
                                            T
                                              ? e.jsx("p", {
                                                  className:
                                                    "text-[10px] text-[#a67b7f]/80 mt-0.5",
                                                  children: "本场用户",
                                                })
                                              : null,
                                          ],
                                        }),
                                      ],
                                    },
                                    S.id,
                                  );
                                }),
                              }),
                      }),
                      e.jsx("div", {
                        className: "dy-float-page-num",
                        children: "03",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
  };
function VK({
  open: t,
  onClose: s,
  boardTitle: n = "今日星晖礼赞榜",
  pvpEnabled: a,
  onPvpToggle: r,
  loadingPvp: i,
  rows: o = [],
}) {
  const { champion: c, listRows: d } = l.useMemo(
    () =>
      o != null && o.length
        ? { champion: o[0], listRows: o.slice(1) }
        : { champion: null, listRows: [] },
    [o],
  );
  if (!t) return null;
  const u = a ? "dy-live-art-rank-panel--pvp" : "",
    f = new Date().getFullYear();
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("button", {
        type: "button",
        className:
          "dy-live-art-rank-backdrop fixed inset-0 z-[258] border-0 p-0 cursor-pointer",
        "aria-label": "关闭",
        onClick: s,
      }),
      e.jsxs("div", {
        className: "dy-live-art-rank-widget",
        role: "dialog",
        "aria-modal": !0,
        onClick: (p) => p.stopPropagation(),
        children: [
          e.jsxs("button", {
            type: "button",
            className: "dy-live-art-rank-toggle",
            "aria-label": "关闭日榜",
            onClick: (p) => {
              (p.stopPropagation(), s == null || s());
            },
            children: [
              e.jsx("span", {
                className:
                  "dy-live-art-rank-toggle-line dy-live-art-rank-toggle-line--1",
              }),
              e.jsx("span", {
                className:
                  "dy-live-art-rank-toggle-line dy-live-art-rank-toggle-line--2",
              }),
            ],
          }),
          e.jsxs("div", {
            className: `dy-live-art-rank-panel ${u}`,
            children: [
              e.jsxs("div", {
                className: "dy-live-art-rank-rose-wrap",
                children: [
                  e.jsxs("header", {
                    className: "dy-live-art-rank-header",
                    children: [
                      e.jsx("span", {
                        className: "dy-live-art-rank-tagline",
                        children: "The Art of Ranking",
                      }),
                      e.jsx("h2", {
                        className: "dy-live-art-rank-title",
                        children: n,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "dy-live-art-pvp-row",
                    children: [
                      e.jsx("span", {
                        className: "dy-live-art-pvp-label",
                        children: "Competitive Mode",
                      }),
                      e.jsx("button", {
                        type: "button",
                        role: "switch",
                        "aria-checked": a,
                        disabled: i,
                        onClick: (p) => {
                          (p.stopPropagation(), r == null || r(!a));
                        },
                        className: `dy-live-art-switch ${a ? "dy-live-art-switch--on" : ""}`,
                        children: e.jsx("span", {
                          className: "dy-live-art-switch-knob",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "dy-live-art-rank-merge",
                    children: [
                      e.jsxs("section", {
                        className: "dy-live-art-champion",
                        children: [
                          e.jsxs("div", {
                            className: "dy-live-art-orbit-wrap",
                            children: [
                              e.jsx("div", {
                                className: "dy-live-art-orbit-ring",
                                children: e.jsx("div", {
                                  className: "dy-live-art-orbit-dot",
                                }),
                              }),
                              e.jsx("div", {
                                className: "dy-live-art-avatar-ring",
                                children:
                                  c && a && !i
                                    ? e.jsx("img", {
                                        src: c.avatarUrl,
                                        alt: "",
                                        className: c.isMe
                                          ? "dy-live-art-champion-face--user"
                                          : "",
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "dy-live-art-avatar-placeholder h-full w-full rounded-full",
                                        "aria-hidden": !0,
                                      }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "dy-live-art-champion-meta",
                            children:
                              c && a && !i
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("h3", {
                                        className: "dy-live-art-champion-name",
                                        children: c.name,
                                      }),
                                      e.jsxs("p", {
                                        className: "dy-live-art-champion-score",
                                        children: [
                                          "¥",
                                          c.yuan.toLocaleString("zh-CN", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }),
                                          " ",
                                          "· Vol.",
                                          String(c.rank).padStart(2, "0"),
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("h3", {
                                        className: "dy-live-art-champion-name",
                                        children: i
                                          ? "…"
                                          : a
                                            ? "—"
                                            : "虚位以待",
                                      }),
                                      e.jsx("p", {
                                        className: "dy-live-art-champion-score",
                                        children: i
                                          ? "calibrating…"
                                          : a
                                            ? "暂无榜一数据"
                                            : "开启 PK 后同步本场礼赞",
                                      }),
                                    ],
                                  }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "dy-live-art-rank-list dy-live-scrollbar-hide",
                        children: i
                          ? e.jsx("div", {
                              className: "dy-live-art-rank-loader",
                              children: e.jsx(Sn, {
                                className: "h-7 w-7 animate-spin",
                                strokeWidth: 1.65,
                              }),
                            })
                          : a
                            ? o.length === 0
                              ? e.jsx("p", {
                                  className: "dy-live-art-rank-placeholder",
                                  children: "暂无排行数据",
                                })
                              : d.length === 0
                                ? e.jsx("p", {
                                    className: "dy-live-art-rank-placeholder",
                                    children: "榜二及以下虚位",
                                  })
                                : d.map((p) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className: `dy-live-art-rank-row ${p.isMe ? "dy-live-art-rank-row--me" : ""}`,
                                        children: [
                                          e.jsx("span", {
                                            className: "dy-live-art-rank-idx",
                                            children: String(p.rank).padStart(
                                              2,
                                              "0",
                                            ),
                                          }),
                                          e.jsx("img", {
                                            src: p.avatarUrl,
                                            alt: "",
                                            className: `dy-live-art-list-avatar ${p.isMe ? "dy-live-art-list-avatar--user" : "dy-live-art-list-avatar--npc"}`,
                                          }),
                                          e.jsxs("div", {
                                            className: "dy-live-art-row-info",
                                            children: [
                                              e.jsxs("p", {
                                                className:
                                                  "dy-live-art-row-name",
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "dy-live-art-pvp-badge",
                                                    "aria-hidden": !0,
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "min-w-0 truncate",
                                                    children: p.name,
                                                  }),
                                                  p.isMe
                                                    ? e.jsx("span", {
                                                        className:
                                                          "dy-live-art-tag-me",
                                                        children: "我",
                                                      })
                                                    : null,
                                                  p.isOpponent
                                                    ? e.jsx("span", {
                                                        className:
                                                          "dy-live-art-tag-opp",
                                                        children: "对手",
                                                      })
                                                    : null,
                                                ],
                                              }),
                                              e.jsxs("p", {
                                                className:
                                                  "dy-live-art-row-score",
                                                children: [
                                                  "¥",
                                                  p.yuan.toLocaleString(
                                                    "zh-CN",
                                                    {
                                                      minimumFractionDigits: 2,
                                                      maximumFractionDigits: 2,
                                                    },
                                                  ),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      p.key,
                                    ),
                                  )
                            : e.jsx("p", {
                                className: "dy-live-art-rank-placeholder",
                                children:
                                  "开启竞技模式以载入虚拟对手与同榜路人主播",
                              }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("footer", {
                className: "dy-live-art-rank-footer",
                children: [
                  e.jsx("span", {
                    className: "dy-live-art-footer-lbl",
                    children: "Synchronized Live",
                  }),
                  e.jsxs("span", {
                    className: "dy-live-art-footer-lbl dy-live-art-footer-ed",
                    children: ["Ed. ", f],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function JK({
  open: t,
  onClose: s,
  streamerAvatar: n,
  streamerName: a,
  topGifterAvatar: r,
  topGifterName: i,
  smallAvatars: o = [],
}) {
  return t
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx("button", {
            type: "button",
            className:
              "dy-live-rank-one-celebration-backdrop fixed inset-0 z-[251] border-0 p-0 cursor-pointer",
            "aria-label": "关闭",
            onClick: s,
          }),
          e.jsxs("div", {
            className:
              "dy-float-panel dy-float-panel--center dy-float-panel--celebration dy-float-panel--celebration-under-gifts dy-live-rank-one-celebration-panel flex flex-col items-center text-center h-auto min-h-[300px]",
            role: "dialog",
            "aria-modal": !0,
            onClick: (c) => c.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "dy-live-rank-one-celebration-ornament",
                "aria-hidden": !0,
                children: [
                  e.jsx("span", {
                    className: "dy-live-rank-one-celebration-ornament-line",
                  }),
                  e.jsx("span", {
                    className: "dy-live-rank-one-celebration-kicker",
                    children: "星晖之巅",
                  }),
                  e.jsx("span", {
                    className: "dy-live-rank-one-celebration-ornament-line",
                  }),
                ],
              }),
              e.jsx("h3", {
                className: "dy-live-rank-one-celebration-title",
                children: "登顶今日礼赞榜",
              }),
              e.jsxs("p", {
                className: "dy-live-rank-one-celebration-lead",
                children: ["你与「", i || "观众", "」暂列贡献焦点"],
              }),
              e.jsxs("div", {
                className: "dy-live-rank-one-celebration-duo",
                children: [
                  e.jsxs("div", {
                    className: "dy-live-rank-one-celebration-portrait",
                    children: [
                      e.jsx("span", {
                        className: "dy-live-rank-one-celebration-portrait-ring",
                      }),
                      e.jsx("img", {
                        src: n,
                        alt: "",
                        className: "dy-live-rank-one-celebration-face",
                      }),
                      e.jsx("span", {
                        className:
                          "dy-live-rank-one-celebration-portrait-label",
                        children: a,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "dy-live-rank-one-celebration-portrait dy-live-rank-one-celebration-portrait--gift",
                    children: [
                      e.jsx("span", {
                        className: "dy-live-rank-one-celebration-portrait-ring",
                      }),
                      e.jsx("img", {
                        src: r,
                        alt: "",
                        className: "dy-live-rank-one-celebration-face",
                      }),
                      e.jsx("span", {
                        className:
                          "dy-live-rank-one-celebration-portrait-label dy-live-rank-one-celebration-portrait-label--accent",
                        children: i || "贡献第一",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "dy-live-rank-one-celebration-small-row",
                children: o
                  .slice(0, 2)
                  .map((c, d) =>
                    e.jsx(
                      "span",
                      {
                        className: "dy-live-rank-one-celebration-small-wrap",
                        children: e.jsx("img", {
                          src: c.url,
                          alt: "",
                          className: "dy-live-rank-one-celebration-small-face",
                        }),
                      },
                      d,
                    ),
                  ),
              }),
              e.jsx("button", {
                type: "button",
                onClick: s,
                className: "dy-live-rank-one-celebration-cta",
                children: "收下祝福",
              }),
            ],
          }),
        ],
      })
    : null;
}
const Ox = () => `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
  KK = 0.14;
function c4(t, s, n) {
  const a = String(n || "").trim(),
    r = Array.isArray(t) ? t : [],
    i = Array.isArray(s) ? s : [],
    o = (u) =>
      String((u == null ? void 0 : u.kind) || "").toLowerCase() !== "user";
  if (!a) return { items: r, gift_events: i.filter(o) };
  const c = r.filter((u) =>
      String((u == null ? void 0 : u.type) || "").toLowerCase() !== "virtual"
        ? !0
        : String((u == null ? void 0 : u.name) || "").trim() !== a,
    ),
    d = i.filter(
      (u) =>
        !(
          !o(u) ||
          (String((u == null ? void 0 : u.kind) || "").toLowerCase() ===
            "virtual" &&
            String((u == null ? void 0 : u.name) || "").trim() === a)
        ),
    );
  return { items: c, gift_events: d };
}
const d4 =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#AEAEB2"/>
      <circle cx="40" cy="28" r="13.5" fill="#F2F2F7"/>
      <ellipse cx="40" cy="60" rx="22" ry="15.5" fill="#F2F2F7"/>
    </svg>`);
async function qK(t, s, n) {
  var o, c;
  const a = (t.title || t.name || "BGM").trim(),
    i =
      (
        t.artist ||
        (Array.isArray(t.ar) ? t.ar.map((d) => d.name).join(" / ") : "") ||
        "未知"
      ).trim() || "未知";
  if (t.source === "netease_user" && t.platformId != null) {
    const d = await s(t.platformId);
    if (!d) return null;
    let u = t.cover;
    if ((!u || String(u).includes("default")) && t.platformId)
      try {
        const f = await n(t.platformId);
        (c = (o = f == null ? void 0 : f[0]) == null ? void 0 : o.al) != null &&
          c.picUrl &&
          (u = f[0].al.picUrl);
      } catch {}
    return {
      id: t.id,
      name: a,
      author: i,
      cover: u || null,
      url: d,
      _blob: !1,
    };
  }
  if (t.source === "local" && t.fileBlob instanceof Blob) {
    const d = await t.fileBlob.arrayBuffer(),
      u = new Blob([d], { type: t.fileBlob.type || "audio/mpeg" }),
      f = URL.createObjectURL(u);
    return {
      id: t.id,
      name: a,
      author: i,
      cover: t.cover || null,
      url: f,
      _blob: !0,
    };
  }
  return t.url
    ? {
        id: t.id,
        name: a,
        author: i,
        cover: t.cover || null,
        url: t.url,
        _blob: !1,
      }
    : null;
}
function QK({ className: t }) {
  return e.jsx("span", {
    className: `inline-flex h-[18px] w-[18px] items-center justify-center gap-[3px] ${t || ""}`,
    children: [0, 1, 2].map((s) =>
      e.jsx(
        "span",
        {
          className: "h-[3px] w-[3px] rounded-full bg-white/95",
          style: {
            animation: `dy-live-typing-dot 1.05s ease-in-out ${s * 0.16}s infinite`,
          },
        },
        s,
      ),
    ),
  });
}
function ZK({ className: t }) {
  const n = `liveRecvHeart_${l.useId().replace(/:/g, "")}`;
  return e.jsxs("svg", {
    className: t,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": !0,
    children: [
      e.jsx("defs", {
        children: e.jsxs("linearGradient", {
          id: n,
          x1: "3",
          y1: "4",
          x2: "21",
          y2: "20",
          gradientUnits: "userSpaceOnUse",
          children: [
            e.jsx("stop", {
              offset: "0",
              stopColor: "#fff",
              stopOpacity: "0.92",
            }),
            e.jsx("stop", {
              offset: "0.4",
              stopColor: "#fecdd3",
              stopOpacity: "0.95",
            }),
            e.jsx("stop", {
              offset: "1",
              stopColor: "#fb7185",
              stopOpacity: "0.88",
            }),
          ],
        }),
      }),
      e.jsx("path", {
        d: "M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z",
        fill: "none",
        stroke: `url(#${n})`,
        strokeWidth: "1.45",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
function u4({ n: t }) {
  return !t || t <= 0
    ? null
    : e.jsxs("span", {
        className:
          "dy-live-liquid-glass-fine inline-flex items-center gap-1 pl-0.5 pr-1.5 py-0.5 rounded-full bg-white/[0.07] shrink-0 border border-zinc-500/25 text-white",
        children: [
          e.jsx("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            className: "shrink-0",
            "aria-hidden": !0,
            children: e.jsx("path", {
              d: "M12 2.5l2.47 6.02h6.58l-5.19 3.9 1.87 6.1L12 15.2 6.27 18.52l1.87-6.1-5.19-3.9h6.58L12 2.5z",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.15",
              strokeLinejoin: "round",
            }),
          }),
          e.jsx("span", {
            className: "text-[10px] font-bold tabular-nums leading-none",
            children: t,
          }),
        ],
      });
}
const XK = ({
    config: t,
    npcs: s,
    contacts: n,
    currentUser: a,
    userPersona: r,
    onEndLive: i,
  }) => {
    var Jt, Vt, qt, Lt, Qt, js, cs;
    const {
        apiConfig: o,
        addApiLog: c,
        chats: d,
        user: u,
        deductFromWallet: f,
      } = vn(),
      { fetchMusicUrl: p, fetchSongDetail: m, fetchPlaylistDetail: h } = Ii(),
      g = l.useRef(null),
      x = l.useRef(null),
      y = l.useRef(null),
      v = (t == null ? void 0 : t.storageScopeId) ?? "user",
      b = l.useMemo(() => {
        if (
          (t == null ? void 0 : t.hostMode) === "npc" &&
          t != null &&
          t.npcHost
        ) {
          const Ke = t.npcHost,
            Nt = String(Ke.name || "").trim() || "主播",
            bt = encodeURIComponent(Nt),
            ns =
              Ke.avatar ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${bt}`,
            Ge = String(Ke.signature || "").trim();
          return { name: Nt, avatar: ns, signature: Ge };
        }
        const Ne = String((a == null ? void 0 : a.name) || "").trim() || "主播",
          Je = encodeURIComponent(Ne),
          St =
            (a == null ? void 0 : a.avatar) ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${Je}`,
          Be = String((a == null ? void 0 : a.signature) || "").trim();
        return { name: Ne, avatar: St, signature: Be };
      }, [t == null ? void 0 : t.hostMode, t == null ? void 0 : t.npcHost, a]),
      N = l.useMemo(
        () =>
          (t == null ? void 0 : t.coverDataUrl) ||
          (a == null ? void 0 : a.cover) ||
          "",
        [t == null ? void 0 : t.coverDataUrl, a == null ? void 0 : a.cover],
      ),
      [w, _] = l.useState(!1),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(!1),
      [E, S] = l.useState([]),
      j = l.useCallback(() => {
        (k(!1), _(!1), je(null));
      }, []),
      T = l.useCallback(
        (Ne) => {
          if (!Array.isArray(Ne) || !Ne.length) return;
          const Je = String((a == null ? void 0 : a.name) || "").trim();
          S((St) => {
            const Be = new Map();
            St.forEach((Ke) => Be.set(Ke.key, { ...Ke }));
            for (const Ke of Ne) {
              const bt =
                  ay(Ke.gift_id).price *
                  Math.min(9, Math.max(1, parseInt(Ke.count, 10) || 1)),
                ns =
                  Ke.kind === "resident" &&
                  Ke.resident_id != null &&
                  String(Ke.resident_id).trim() !== "";
              let Ge = Ke.kind === "user";
              !Ge &&
                !ns &&
                Je &&
                String(Ke.name || "").trim() === Je &&
                (Ge = !0);
              const Le = ns
                  ? `r:${String(Ke.resident_id)}`
                  : Ge
                    ? "u:viewer"
                    : `v:${String(Ke.name || "观众").trim()}`,
                _e = String(
                  Ke.name || (ns ? "居民" : Ge ? "我" : "观众"),
                ).trim(),
                yt = Be.get(Le) || {
                  key: Le,
                  name: _e,
                  kind: ns ? "resident" : Ge ? "user" : "virtual",
                  residentId: ns ? String(Ke.resident_id) : null,
                  yuan: 0,
                };
              ((yt.yuan = (yt.yuan || 0) + bt),
                _e && (yt.name = _e),
                Be.set(Le, yt));
            }
            return Array.from(Be.values()).sort((Ke, Nt) => Nt.yuan - Ke.yuan);
          });
        },
        [a == null ? void 0 : a.name],
      ),
      [I, L] = l.useState(120),
      [B, F] = l.useState(() => 4800 + Math.floor(Math.random() * 1200)),
      [D, $] = l.useState(!0),
      [P, z] = l.useState(!1),
      [O, Z] = l.useState([]),
      [K, q] = l.useState([]),
      [V, ne] = l.useState(() =>
        Object.fromEntries(_r.map((Ne) => [Ne.id, 0])),
      ),
      [le, ie] = l.useState(() =>
        Object.fromEntries(_r.map((Ne) => [Ne.id, []])),
      ),
      [X, je] = l.useState(null),
      [xe, ye] = l.useState(!1),
      R = l.useRef([]),
      oe = l.useRef(null),
      ee = l.useRef(null),
      [H, Y] = l.useState(null),
      [U, ce] = l.useState(0),
      [pe, se] = l.useState(""),
      [Te, ke] = l.useState(!1),
      [W, ue] = l.useState(null),
      [re, he] = l.useState(""),
      [ge, J] = l.useState(!1),
      [G, we] = l.useState(!1),
      [Q, ve] = l.useState(!1),
      [Ve, Ae] = l.useState(!1),
      [te, Se] = l.useState("今日星晖礼赞榜"),
      [Fe, $e] = l.useState(""),
      [tt, Xe] = l.useState(0),
      [ht, Pe] = l.useState([]),
      [ut, _t] = l.useState(!1),
      [Ee, fe] = l.useState(!1),
      He = l.useRef(null),
      Ie = l.useRef(null),
      [Ce, Re] = l.useState([]),
      [De, at] = l.useState(!1),
      ft = l.useRef(null),
      vt = l.useRef(() => {}),
      Oe = l.useRef([]),
      Qe = l.useRef(new Map()),
      Ye = l.useRef(null);
    Oe.current = Ce;
    const Ze = l.useMemo(
        () => (t == null ? void 0 : t.hostMode) !== "npc",
        [t == null ? void 0 : t.hostMode],
      ),
      Ue = l.useMemo(() => {
        const Ne = Ye.current;
        return Ne
          ? _r.reduce((Je, St) => {
              const Be = V[St.id] ?? 0,
                Ke = Ne[St.id] ?? 0;
              return Je + Math.max(0, Be - Ke) * St.price;
            }, 0)
          : 0;
      }, [V]),
      me = l.useMemo(
        () =>
          !Ze || !Q || !Fe
            ? []
            : [
                ...[
                  {
                    key: "me",
                    kind: "user",
                    name: b.name,
                    yuan: Ue,
                    avatarUrl: b.avatar,
                    isMe: !0,
                    isOpponent: !1,
                  },
                  {
                    key: "opp",
                    kind: "opponent",
                    name: Fe,
                    yuan: tt,
                    avatarUrl: d4,
                    isMe: !1,
                    isOpponent: !0,
                  },
                  ...ht.map((St, Be) => ({
                    key: St.id || `c${Be}`,
                    kind: "crowd",
                    name: St.name,
                    yuan: St.yuan,
                    avatarUrl: d4,
                    isMe: !1,
                    isOpponent: !1,
                  })),
                ],
              ]
                .sort((St, Be) => Be.yuan - St.yuan)
                .map((St, Be) => ({ ...St, rank: Be + 1 })),
        [Ze, Q, Fe, b.name, b.avatar, Ue, tt, ht],
      ),
      jt = l.useMemo(() => {
        if (!Ze || !Q || !me.length) return null;
        const Ne = me.find((Je) => Je.isMe);
        return Ne ? `第${Ne.rank}名` : null;
      }, [Ze, Q, me]),
      Gt = l.useRef(!1);
    Gt.current = !!(
      Ze &&
      Q &&
      me.length > 0 &&
      ((Jt = me[0]) == null ? void 0 : Jt.isMe) === !0
    );
    const Pt = l.useCallback(
        (Ne) => {
          if (!Ne) return null;
          const Je = (s || []).find((Be) => Be && String(Be.id) === String(Ne));
          return Je != null && Je.avatar
            ? Je.avatar
            : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(String((Je == null ? void 0 : Je.name) || Ne || "r"))}`;
        },
        [s],
      ),
      Wt = l.useMemo(() => {
        const Ne = E[0],
          Je = E[1],
          St = E[2],
          Be = (Ke) =>
            Ke
              ? Ke.kind === "resident" && Ke.residentId
                ? Pt(Ke.residentId)
                : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(Ke.name || "g")}`
              : null;
        return {
          topGifterName: (Ne == null ? void 0 : Ne.name) || "观众",
          topGifterAvatar: Be(Ne) || b.avatar,
          smallAvatars: [Je, St].filter(Boolean).map((Ke) => ({ url: Be(Ke) })),
        };
      }, [E, Pt, b.avatar]),
      ct = l.useCallback((Ne) => {
        if (!Ne) return;
        const Je = Qe.current.get(Ne);
        Je && clearTimeout(Je);
        const St = setTimeout(() => {
          (q((Be) => Be.filter((Ke) => Ke.id !== Ne)), Qe.current.delete(Ne));
        }, 3200);
        Qe.current.set(Ne, St);
      }, []);
    l.useEffect(
      () => () => {
        (Qe.current.forEach(clearTimeout), Qe.current.clear());
      },
      [],
    );
    const Kt = l.useCallback(async () => {
      var St;
      if ((t == null ? void 0 : t.hostMode) === "npc") {
        const Be =
          (St = t == null ? void 0 : t.npcHost) == null ? void 0 : St.id;
        if (Be == null) return [];
        const Ke = (s || []).find((_e) => _e && String(_e.id) === String(Be));
        if (!Ke) return [];
        const Nt = Tm(Ke, n),
          bt = await A1(Ke),
          Ge = Ke.linkMemory === !0 ? C1(Ke, d, 5) : "",
          Le = Ke.knowsUserIdentity === !0;
        return [
          {
            resident_id: String(Ke.id),
            name: String(Ke.name || "").trim(),
            fan_level: _1(Ke.id),
            knows_user_identity: Le,
            resident_character_bio: Nt.slice(0, 800),
            douyin_memory_inject: bt,
            linked_chat_snippets_last5_rounds: Ge,
          },
        ];
      }
      const Ne = TC(s, t.visibility, t.excludedNpcIds),
        Je = [];
      for (const Be of Ne) {
        const Ke = Tm(Be, n),
          Nt = await A1(Be),
          ns = Be.linkMemory === !0 ? C1(Be, d, 5) : "",
          Ge = Be.knowsUserIdentity === !0;
        Je.push({
          resident_id: String(Be.id),
          name: String(Be.name || "").trim(),
          fan_level: _1(Be.id),
          knows_user_identity: Ge,
          resident_character_bio: Ke.slice(0, 800),
          douyin_memory_inject: Nt,
          linked_chat_snippets_last5_rounds: ns,
        });
      }
      return Je;
    }, [
      s,
      n,
      d,
      t.visibility,
      t.excludedNpcIds,
      t == null ? void 0 : t.hostMode,
      (Vt = t == null ? void 0 : t.npcHost) == null ? void 0 : Vt.id,
    ]);
    l.useEffect(() => {
      let Ne = !1;
      return (
        (async () => {
          const Je = await Kt();
          Ne || (Re(Je), at(!0));
        })(),
        () => {
          Ne = !0;
        }
      );
    }, [Kt]);
    const fs = l.useCallback(
        () =>
          O.slice(-24)
            .map((Ne) => `${Ne.name} Lv.${Ne.level}: ${Ne.text}`)
            .join(
              `
`,
            )
            .slice(0, 6e3),
        [O],
      ),
      gt = l.useMemo(() => {
        const Ne = new Set();
        return (
          O.forEach((Je) => {
            Je.kind === "resident" &&
              Je.residentId &&
              Ne.add(String(Je.residentId));
          }),
          Array.from(Ne)
        );
      }, [O]),
      ae = l.useMemo(
        () =>
          [
            (a == null ? void 0 : a.name) &&
              `用户真实称呼/账号名：${String(a.name).trim()}`,
            (a == null ? void 0 : a.bio) &&
              `用户本人简介：${String(a.bio).trim()}`,
            (a == null ? void 0 : a.signature) &&
              `签名：${String(a.signature).trim()}`,
          ]
            .filter(Boolean)
            .join(
              `
`,
            )
            .slice(0, 900),
        [a],
      ),
      nt = l.useMemo(() => {
        var Ne;
        return (t == null ? void 0 : t.hostMode) !== "npc" ||
          !((Ne = t == null ? void 0 : t.npcHost) != null && Ne.id)
          ? null
          : (s || []).find(
              (Je) => Je && String(Je.id) === String(t.npcHost.id),
            ) || null;
      }, [
        t == null ? void 0 : t.hostMode,
        (qt = t == null ? void 0 : t.npcHost) == null ? void 0 : qt.id,
        s,
      ]),
      It = l.useMemo(() => (nt ? Tm(nt, n).slice(0, 1200) : ""), [nt, n]),
      Xt = (nt == null ? void 0 : nt.knowsUserIdentity) === !0,
      bs = l.useMemo(
        () =>
          ((t == null ? void 0 : t.hostMode) === "npc"
            ? [
                (t == null ? void 0 : t.title) && `本场标题：${t.title}`,
                (b == null ? void 0 : b.name) && `主播展示名：${b.name}`,
              ]
            : [
                r == null ? void 0 : r.douyinPersona,
                (t == null ? void 0 : t.title) && `本场标题：${t.title}`,
              ]
          )
            .filter(Boolean)
            .join(
              `
`,
            )
            .slice(0, 600),
        [
          r,
          t == null ? void 0 : t.title,
          t == null ? void 0 : t.hostMode,
          b == null ? void 0 : b.name,
        ],
      ),
      ss = l.useMemo(
        () =>
          _r
            .map((Ne) => {
              const Je = Math.max(0, Number(V[Ne.id]) || 0),
                St = Math.max(1, Number(Ne.units) || 1),
                Be = Je >= St,
                Ke = Be ? 0 : St - Je;
              return Be
                ? `${Ne.name}（${Ne.id}）：已收${Je}/${St}件，该档已满`
                : `${Ne.name}（${Ne.id}）：已收${Je}/${St}件，该档未满，还差${Ke}件凑满`;
            })
            .join("；"),
        [V],
      ),
      _s = l.useMemo(() => {
        const Ne = [];
        return (
          _r.forEach((Je) => {
            (le[Je.id] || []).forEach((Be) => {
              Ne.push({
                at: Be.at || 0,
                line: `${Be.name} 送了「${Je.name}」×${Be.count != null ? Be.count : 1}`,
              });
            });
          }),
          Ne.sort((Je, St) => St.at - Je.at),
          Ne.slice(0, 15).map((Je) => Je.line).join(`
`)
        );
      }, [le]),
      qs = l.useMemo(
        () =>
          _r.map((Ne) => `${Ne.id}「${Ne.name}」约${Ne.price}元/件`).join("；"),
        [],
      ),
      Bs = l.useMemo(
        () =>
          E.length
            ? E.map((Ne, Je) => {
                const St =
                  Ne.kind === "resident" && Ne.residentId != null
                    ? `通讯录居民 resident_id=${String(Ne.residentId)}`
                    : Ne.kind === "user"
                      ? "本场进房用户（客户端记录，非 NPC）"
                      : "虚拟观众";
                return `第${Je + 1}名：${Ne.name}（${St}）累计折算约 ${Math.round(Ne.yuan)} 元`;
              }).join(`
`)
            : "本场尚无打赏折算记录。",
        [E],
      ),
      Js = String((a == null ? void 0 : a.name) || "").trim(),
      Xs = l.useMemo(
        () =>
          _r.map((Ne) => {
            const Je = kC(le[Ne.id] || [], Js);
            if (!Je)
              return `${Ne.name}（${Ne.id}）：当前无标署（该档尚无送礼记录）`;
            const St = Je.count != null ? Je.count : 1;
            return Je.kind === "resident" && Je.resident_id
              ? `${Ne.name}（${Ne.id}）：标署为 ${Je.name}（resident_id=${String(Je.resident_id)}），该档送出件数 ${St}（标署=该档件数最多者）`
              : Je.kind === "user"
                ? `${Ne.name}（${Ne.id}）：标署为 ${Je.name}（本场用户），该档送出件数 ${St}（标署=该档件数最多者）`
                : `${Ne.name}（${Ne.id}）：标署为 ${Je.name}（虚拟观众），该档送出件数 ${St}`;
          }).join(`
`),
        [le, Js],
      );
    (l.useEffect(() => {
      xe &&
        (Ye.current ||
          (Ye.current = Object.fromEntries(
            _r.map((Ne) => [Ne.id, V[Ne.id] ?? 0]),
          )));
    }, [xe, V]),
      l.useEffect(() => {
        let Ne = !1;
        return (
          ye(!1),
          (async () => {
            const { counts: Je, ledger: St } = await dK(_r, v);
            Ne || (ne(Je), ie(St), ye(!0));
          })(),
          () => {
            Ne = !0;
          }
        );
      }, [v]),
      l.useEffect(() => {
        xe && uK(V, le, _r, v);
      }, [xe, V, le, v]),
      l.useEffect(
        () => () => {
          (oe.current && (clearTimeout(oe.current), (oe.current = null)),
            (ee.current = null));
        },
        [],
      ),
      l.useEffect(() => {
        ((ft.current = null),
          Z([]),
          q([]),
          se(""),
          S([]),
          we(!1),
          ve(!1),
          Ae(!1),
          Se("今日星晖礼赞榜"),
          $e(""),
          Xe(0),
          Pe([]),
          _t(!1),
          fe(!1),
          (He.current = null),
          (Ie.current = null),
          L(120),
          F(4800 + Math.floor(Math.random() * 1200)),
          (Ye.current = null),
          (R.current = []),
          (ee.current = null),
          Y(null),
          ce(0),
          oe.current && (clearTimeout(oe.current), (oe.current = null)),
          $(!0));
      }, [t == null ? void 0 : t.liveSessionKey]),
      l.useEffect(() => {
        const Ne = t == null ? void 0 : t.letingBinding,
          Je = x.current;
        if (!(Ne != null && Ne.playlistId) || !(Ne != null && Ne.source) || !Je)
          return;
        let St = !1;
        return (
          (y.current = null),
          (async () => {
            const Be = await pu(Ne, h);
            if (St || !Be.length) return;
            const Ke = Be[Math.floor(Math.random() * Be.length)],
              Nt = await qK(Ke, p, m);
            if (St || !(Nt != null && Nt.url)) return;
            Nt._blob && (y.current = Nt.url);
            const bt = x.current;
            !bt ||
              St ||
              ((bt.loop = !0),
              (bt.volume = 0.65),
              (bt.src = Nt.url),
              bt.play().catch(() => {}));
          })(),
          () => {
            ((St = !0), Je.pause(), Je.removeAttribute("src"), Je.load());
            const Be = y.current;
            if (((y.current = null), Be))
              try {
                URL.revokeObjectURL(Be);
              } catch {}
          }
        );
      }, [t == null ? void 0 : t.letingBinding, p, m, h]));
    const gn = l.useCallback(() => {
        oe.current && (clearTimeout(oe.current), (oe.current = null));
      }, []),
      sn = l.useCallback(() => {
        oe.current = null;
        const Ne = R.current.shift() ?? null;
        ((ee.current = Ne),
          ce(R.current.length),
          Y(Ne),
          Ne && (oe.current = setTimeout(sn, 4200)));
      }, []),
      ln = l.useCallback(() => {
        gn();
        const Ne = R.current.shift() ?? null;
        ((ee.current = Ne),
          ce(R.current.length),
          Y(Ne),
          Ne && (oe.current = setTimeout(sn, 4200)));
      }, [gn, sn]),
      rn = l.useCallback(
        (Ne) => {
          if (
            ((Ne || []).forEach((St) => {
              R.current.push({
                ...St,
                giftLabel: ay(St.gift_id).name,
                showcaseKey: Ox(),
              });
            }),
            ce(R.current.length),
            ee.current != null)
          )
            return;
          const Je = R.current.shift() ?? null;
          ((ee.current = Je), Y(Je), Je && (oe.current = setTimeout(sn, 4200)));
        },
        [sn],
      ),
      wt = l.useCallback(
        (Ne = {}) => {
          if (!Ze || !Q) return;
          if (!!Ne.aggressive) {
            (Xe((St) => St + Math.floor(160 + Math.random() * 420)),
              Pe((St) =>
                St.map((Be) => ({
                  ...Be,
                  yuan: Be.yuan + Math.floor(85 + Math.random() * 260),
                })),
              ));
            return;
          }
          (Xe(
            (St) =>
              St + (Math.random() < 0.52 ? Math.floor(Math.random() * 86) : 0),
          ),
            Pe((St) =>
              St.map((Be) => ({
                ...Be,
                yuan:
                  Be.yuan +
                  (Math.random() < 0.27 ? Math.floor(Math.random() * 42) : 0),
              })),
            ));
        },
        [Ze, Q],
      ),
      xs = l.useCallback(
        async (Ne) => {
          if (!Ne) {
            (ve(!1), $e(""), Pe([]), (He.current = null), (Ie.current = null));
            return;
          }
          if (!Q) {
            if (!(o != null && o.key)) {
              alert("请先在设置中配置 API Key");
              return;
            }
            (ve(!0), Ae(!0));
            try {
              const Je = [
                  r == null ? void 0 : r.douyinPersona,
                  r == null ? void 0 : r.bio,
                  a == null ? void 0 : a.bio,
                ]
                  .filter(Boolean)
                  .join(
                    `
`,
                  )
                  .slice(0, 1200),
                St = await eK(o, c, {
                  streamerName: b.name,
                  liveTitle: t.title,
                  userPersonaBlock: Je,
                });
              (Se(String(St.board_display_name || "今日星晖礼赞榜").trim()),
                $e(String(St.opponent_name || "夜航对手").trim()),
                Xe(Math.max(80, Number(St.opponent_yuan_seed) || 2e3)));
              const Be = Array.isArray(St.crowd_anchors)
                ? St.crowd_anchors
                : [];
              (Pe(
                Be.slice(0, 3).map((Ke, Nt) => ({
                  id: `ca_${Nt}`,
                  name: String(
                    (Ke == null ? void 0 : Ke.name) || `星播${Nt + 1}`,
                  ).trim(),
                  yuan: Math.max(0, Number(Ke == null ? void 0 : Ke.yuan) || 0),
                })),
              ),
                (He.current = null),
                (Ie.current = null));
            } catch {
              ve(!1);
            } finally {
              Ae(!1);
            }
          }
        },
        [o, c, b.name, t.title, r, a == null ? void 0 : a.bio, Q],
      ),
      ot = l.useCallback(
        (Ne) => {
          const Je = Oe.current || Ce;
          let St = rK(Array.isArray(Ne) ? Ne : []);
          if ((Array.isArray(Ne) || (St = aK(Je)), !St.length)) return;
          (ne((Nt) => lK(Nt, St, _r)), ie((Nt) => oK(Nt, St, _r)));
          const Be = String((a == null ? void 0 : a.avatar) || "").trim(),
            Ke = St.map((Nt) => {
              const bt = ay(Nt.gift_id),
                ns = Nt.kind === "user";
              return {
                id: Ox(),
                kind: "gift",
                residentId:
                  Nt.kind === "resident" ? String(Nt.resident_id || "") : null,
                giftFromKind: Nt.kind,
                viewerAvatar: ns && Be ? Be : null,
                name: Nt.name,
                level: 0,
                text: `${Nt.name} 送了 ${bt.name}${Nt.count > 1 ? ` ×${Nt.count}` : ""}`,
              };
            });
          (Z((Nt) => [...Nt, ...Ke]), rn(St), T(St));
        },
        [Ce, rn, T, a == null ? void 0 : a.avatar],
      ),
      st = l.useCallback(
        (Ne, Je, St = []) => {
          var Le;
          const Be = new Map(
              (Je || []).map((_e) => [String(_e.resident_id), _e.fan_level]),
            ),
            Ke = new Set((St || []).map(String)),
            Nt = new Set(),
            bt = [],
            ns = [],
            Ge =
              (t == null ? void 0 : t.hostMode) === "npc" &&
              ((Le = t == null ? void 0 : t.npcHost) == null
                ? void 0
                : Le.id) != null
                ? String(t.npcHost.id)
                : "";
          ((Array.isArray(Ne) ? Ne : []).forEach((_e, yt) => {
            const rt = _e.type === "resident",
              ze = rt ? String(_e.resident_id || "") : "",
              lt = !!Ge && rt && ze === Ge,
              it = rt && Be.has(ze) ? Be.get(ze) : Number(_e.level) || 12,
              Ht = rt ? it : Number(_e.level) || 8,
              is = String(_e.name || "观众").trim() || "观众",
              os = String(_e.text || "").trim();
            if (!os) return;
            const as = Ox();
            let vs = rt && _e.is_entry === !0,
              ts = String(_e.entry_line || "").trim();
            if (
              (rt &&
                ze &&
                !Ke.has(ze) &&
                (Ke.add(ze),
                lt || vs || ((vs = !0), (ts = ts || `${is} 进来了`))),
              bt.push({
                id: as,
                kind: rt ? "resident" : "virtual",
                residentId: rt ? ze : null,
                name: is,
                level: Ht,
                text: os,
                hostResident: lt,
              }),
              rt && vs && ze && !lt)
            ) {
              if (Nt.has(ze)) return;
              Nt.add(ze);
              const ys = ts || `${is} 进来了`,
                Vs = `e_${as}_${Date.now()}_${yt}`;
              ns.push({
                id: Vs,
                residentId: ze,
                name: is,
                level: Ht,
                line: ys,
                at: Date.now() + yt,
              });
            }
          }),
            bt.length && Z((_e) => [..._e, ...bt]),
            ns.length &&
              (q((_e) => [..._e, ...ns]), ns.forEach((_e) => ct(_e.id))));
        },
        [
          ct,
          t == null ? void 0 : t.hostMode,
          (Lt = t == null ? void 0 : t.npcHost) == null ? void 0 : Lt.id,
        ],
      );
    (l.useEffect(() => {
      if (!De || !xe) return;
      const Ne = (t == null ? void 0 : t.liveSessionKey) ?? "default";
      if (ft.current === Ne) return;
      ft.current = Ne;
      const Je = t == null ? void 0 : t.presetOpening;
      if (Je && Array.isArray(Je.items) && Je.items.length > 0) {
        const Be = Number(Je.viewer_count_base);
        (Number.isFinite(Be) && Be > 10 && L(Math.floor(Be)),
          st(Je.items, Oe.current, []),
          Je.gift_events != null && ot(Je.gift_events),
          wt(),
          $(!1));
        return;
      }
      if (!(o != null && o.key)) {
        $(!1);
        return;
      }
      let St = !1;
      return (
        $(!0),
        (async () => {
          try {
            const Be = Oe.current,
              Ke = await jC(o, c, {
                streamerName: b.name,
                liveTitle: t.title,
                coverHint: t.title,
                residentBriefs: Be,
                npcHostMode: (t == null ? void 0 : t.hostMode) === "npc",
                anchorResidentBio: It,
                anchorKnowsUserIdentity: Xt,
                viewerDouyinDisplayName:
                  String((a == null ? void 0 : a.name) || "").trim() || "用户",
                viewerPersonaForAnchorBlock: Xt ? ae : "",
              });
            if (St) return;
            const Nt = Number(Ke.viewer_count_base);
            Number.isFinite(Nt) && Nt > 10 && L(Math.floor(Nt));
            const bt =
              (t == null ? void 0 : t.hostMode) === "npc"
                ? c4(Ke.items, Ke.gift_events, a == null ? void 0 : a.name)
                : { items: Ke.items, gift_events: Ke.gift_events };
            (st(bt.items, Be, []),
              bt.gift_events != null && ot(bt.gift_events),
              wt());
          } catch {
          } finally {
            St || $(!1);
          }
        })(),
        () => {
          ((St = !0), ft.current === Ne && (ft.current = null));
        }
      );
    }, [
      De,
      xe,
      o,
      c,
      t == null ? void 0 : t.title,
      t == null ? void 0 : t.liveSessionKey,
      t == null ? void 0 : t.presetOpening,
      st,
      ot,
      wt,
      b.name,
      t == null ? void 0 : t.hostMode,
      It,
      Xt,
      a == null ? void 0 : a.name,
      ae,
    ]),
      l.useEffect(() => {
        if (!Ze || !Q || !me.length) {
          Q || ((He.current = null), (Ie.current = null));
          return;
        }
        const Ne = me[0],
          Je = (Ne == null ? void 0 : Ne.key) ?? null,
          St = He.current;
        ((Ne != null && Ne.isMe) || (Ie.current = null),
          (Ne == null ? void 0 : Ne.isMe) === !0 &&
            St != null &&
            St !== "me" &&
            Ie.current !== St &&
            ((Ie.current = St),
            _t(!0),
            fe(!0),
            (async () => {
              try {
                if (!(o != null && o.key)) return;
                const Ke = E[0],
                  Nt = await tK(o, c, {
                    streamerName: b.name,
                    liveTitle: t.title,
                    topGifterName: (Ke == null ? void 0 : Ke.name) || "",
                    userTipYuan: Ue,
                  }),
                  bt = Array.isArray(Nt == null ? void 0 : Nt.items)
                    ? Nt.items
                    : [];
                bt.length && st(bt, Oe.current || [], gt);
              } catch {
              } finally {
                fe(!1);
              }
            })()),
          (He.current = Je));
      }, [
        Ze,
        Q,
        me,
        o,
        c,
        b.name,
        Ue,
        E,
        st,
        gt,
        t == null ? void 0 : t.title,
      ]),
      l.useEffect(() => {
        const Ne = setInterval(() => {
          (L((Je) => Je + Math.floor(Math.random() * 4)),
            F((Je) => Je + Math.floor(Math.random() * 4) + 1));
        }, 4e3);
        return () => clearInterval(Ne);
      }, []),
      l.useEffect(() => {
        const Ne = g.current;
        Ne && (Ne.scrollTop = Ne.scrollHeight);
      }, [O.length, K.length, D]));
    const $t = async () => {
        const Ne = pe.trim();
        if (!Ne || !(o != null && o.key)) return;
        se("");
        const Je = Ox(),
          St = String((a == null ? void 0 : a.name) || "").trim() || "我",
          Be = String((a == null ? void 0 : a.avatar) || "").trim();
        Z((Ke) => [
          ...Ke,
          {
            id: Je,
            kind: "me",
            residentId: null,
            name: St,
            level: 0,
            text: Ne,
            viewerAvatar: Be || void 0,
          },
        ]);
      },
      Ft = l.useCallback(() => {
        var St;
        if (!W || !xe) return;
        const Ne = W;
        try {
          f(
            Ne.price,
            `啾音直播礼物：${Ne.name}（→${b.name}）`,
            (St = u == null ? void 0 : u.wallet) != null && St.password
              ? re
              : void 0,
          );
        } catch (Be) {
          alert((Be == null ? void 0 : Be.message) || "支付失败");
          return;
        }
        const Je = String((a == null ? void 0 : a.name) || "").trim() || "我";
        (ot([
          {
            kind: "user",
            name: Je,
            gift_id: Ne.id,
            count: 1,
            gift_line: `送你一份「${Ne.name}」～`,
          },
        ]),
          wt(),
          ue(null),
          he(""),
          ke(!1));
      }, [
        W,
        xe,
        f,
        re,
        ot,
        wt,
        a == null ? void 0 : a.name,
        b.name,
        (Qt = u == null ? void 0 : u.wallet) == null ? void 0 : Qt.password,
      ]),
      es = (Ne) => {
        var yt, rt;
        (J(!1), pK({ title: t.title, dmCount: O.length }));
        const Je = Ye.current,
          St = _r.reduce((ze, lt) => {
            const it = V[lt.id] ?? 0,
              Ht = (Je == null ? void 0 : Je[lt.id]) ?? 0;
            return ze + Math.max(0, it - Ht) * lt.price;
          }, 0),
          Be = new Set(),
          Ke = [];
        O.forEach((ze) => {
          if (ze.kind !== "resident" || !ze.residentId) return;
          const lt = String(ze.residentId);
          if (Be.has(lt)) return;
          Be.add(lt);
          const it = (s || []).find((os) => String(os.id) === lt);
          if (!it) return;
          const Ht = s4(it, n),
            is = String(it.name || ze.name || "").trim();
          Ke.push({ resident_id: lt, real_name: Ht || is, screen_name: is });
        });
        const Nt = _r
            .map((ze) => {
              const lt = V[ze.id] ?? 0,
                it = (Je == null ? void 0 : Je[ze.id]) ?? 0,
                Ht = Math.max(0, lt - it);
              return Ht
                ? `「${ze.name}」${Ht}件×¥${ze.price}＝¥${(Ht * ze.price).toFixed(2)}`
                : null;
            })
            .filter(Boolean)
            .join("；"),
          bt = E.length
            ? E.slice(0, 20).map(
                (ze, lt) =>
                  `${lt + 1}. ${ze.name}${ze.kind === "resident" ? "（居民）" : ze.kind === "user" ? "（用户）" : "（观众）"} 约¥${ze.yuan.toFixed(2)}`,
              ).join(`
`)
            : "",
          ns = (t == null ? void 0 : t.hostMode) === "npc",
          Ge =
            ns && (yt = t == null ? void 0 : t.npcHost) != null && yt.id
              ? (s || []).find((ze) => String(ze.id) === String(t.npcHost.id))
              : null,
          Le = Ge ? String(s4(Ge, n) || "").trim() : "",
          _e = String((a == null ? void 0 : a.name) || "").trim();
        i == null ||
          i({
            sessionId: `live_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
            title: t.title,
            coverDataUrl: t.coverDataUrl ?? null,
            viewerCount: I,
            likeCount: B,
            giftAmountYuan: St,
            giftBreakdownText: Nt,
            tipRankingText: bt,
            dmDigest: fs(),
            userRealName: ns ? Le || b.name : _e || b.name,
            userDisplayName: b.name,
            hostKind: ns ? "npc" : "user",
            npcHostId:
              ns &&
              ((rt = t == null ? void 0 : t.npcHost) == null
                ? void 0
                : rt.id) != null
                ? String(t.npcHost.id)
                : null,
            hostRealNameForRecord: ns ? Le || b.name : _e || b.name,
            residents: Ke,
            includeSettlementSummary: Ne,
          });
      };
    vt.current = es;
    const At = async () => {
      if (!(o != null && o.key)) {
        alert("请先在设置中配置 API Key");
        return;
      }
      if (!xe) return;
      const Ne =
          (t == null ? void 0 : t.hostMode) === "npc" &&
          Array.isArray(Ce) &&
          Ce.length === 1,
        Je = Ne && Math.random() < KK;
      z(!0);
      try {
        const St = await QJ(o, c, {
            streamerName: b.name,
            liveTitle: t.title,
            userInput: pe.trim(),
            recentDmDigest: fs(),
            residentBriefs: Ce,
            residentIdsSeenInLive: gt,
            userRealPersonaBlock: ae,
            streamPublicPersonaBlock: bs,
            giftHallDigest: ss,
            recentGiftDigest: _s,
            giftTierPriceDigest: qs,
            donationRankDigest: Bs,
            giftAttributionDigest: Xs,
            npcHostMode: (t == null ? void 0 : t.hostMode) === "npc",
            anchorResidentBio: It,
            anchorKnowsUserIdentity: Xt,
            viewerDouyinDisplayName:
              String((a == null ? void 0 : a.name) || "").trim() || "用户",
            anchorMayEndStream: Je,
          }),
          Be =
            (t == null ? void 0 : t.hostMode) === "npc"
              ? c4(St.items, St.gift_events, a == null ? void 0 : a.name)
              : { items: St.items, gift_events: St.gift_events },
          Ke =
            Ne &&
            (t == null ? void 0 : t.hostMode) === "npc" &&
            (St == null ? void 0 : St.anchor_end_stream) === !0;
        Ne && (Je || Ke)
          ? (_i.flushSync(() => {
              (st(Be.items, Ce, gt), ot(Be.gift_events));
            }),
            setTimeout(() => vt.current(!0), 0))
          : (st(Be.items, Ce, gt), ot(Be.gift_events));
      } catch {
      } finally {
        (z(!1), wt({ aggressive: Gt.current }));
      }
    };
    return e.jsxs("div", {
      className: "absolute inset-0 z-[250] flex flex-col bg-black text-white",
      children: [
        e.jsx("audio", {
          ref: x,
          className: "hidden",
          playsInline: !0,
          preload: "none",
        }),
        e.jsxs("div", {
          className: "relative flex-1 flex flex-col min-h-0",
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-center bg-cover opacity-90",
              style: {
                backgroundImage: t.coverDataUrl
                  ? `url(${t.coverDataUrl})`
                  : void 0,
                backgroundColor: "#111",
              },
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80 pointer-events-none",
            }),
            e.jsxs("div", {
              className:
                "relative z-10 flex items-start justify-between pt-12 px-3 gap-2",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col items-stretch gap-1.5 min-w-0 max-w-[min(78vw,18rem)]",
                  children: [
                    e.jsxs("div", {
                      className:
                        "dy-live-liquid-glass-fine flex items-center gap-2 max-w-[min(72vw,16rem)] rounded-full bg-white/[0.1] backdrop-blur-md pl-1.5 pr-3 py-1.5",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (M(!1), _(!0));
                          },
                          className:
                            "shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-white/35 ring-offset-2 ring-offset-black/50",
                          "aria-label": "查看主播资料",
                          children: e.jsx("img", {
                            src: b.avatar,
                            alt: "",
                            className:
                              "w-9 h-9 rounded-full object-cover border border-white/20 pointer-events-none",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            e.jsx("div", {
                              className: "text-sm font-semibold truncate",
                              children: b.name,
                            }),
                            e.jsxs("div", {
                              className:
                                "text-[10px] text-white/55 tabular-nums tracking-tight",
                              children: [B.toLocaleString(), " Likes"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Ze
                      ? e.jsx("div", {
                          className:
                            "w-full max-w-[min(72vw,16rem)] pl-1.5 box-border",
                          children: e.jsxs("button", {
                            type: "button",
                            onClick: () => we(!0),
                            className:
                              "dy-live-liquid-glass-fine inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white/90 tabular-nums border border-white/10 active:scale-[0.98]",
                            "aria-expanded": G,
                            "aria-label": "今日日榜",
                            children: [
                              e.jsx("span", {
                                className: "text-white/70",
                                children: "日榜",
                              }),
                              Q && jt
                                ? e.jsx("span", {
                                    className: "text-amber-100/95",
                                    children: jt,
                                  })
                                : e.jsx("span", {
                                    className: "text-white/45",
                                    children: "轻触查看",
                                  }),
                            ],
                          }),
                        })
                      : null,
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 shrink-0",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => M((Ne) => !Ne),
                      className:
                        "dy-live-liquid-glass-fine flex items-center justify-center rounded-full bg-white/[0.1] backdrop-blur-md px-3 py-1.5 text-xs text-white/90 tabular-nums min-w-[2.5rem] active:scale-[0.98]",
                      "aria-expanded": C,
                      "aria-label": "本场打赏排名",
                      children: I,
                    }),
                    e.jsx("button", {
                      type: "button",
                      "aria-label": "关闭直播",
                      onClick: () => J(!0),
                      className:
                        "dy-live-liquid-glass-fine w-8 h-8 rounded-full bg-white/[0.1] backdrop-blur-md flex items-center justify-center active:scale-95 text-white",
                      children: e.jsx(Ts, { size: 17, strokeWidth: 2.25 }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "relative z-10 flex-1 flex flex-col justify-end px-3 pb-2 pointer-events-none min-h-0",
              children: e.jsx("div", {
                className:
                  "pointer-events-auto self-start w-full max-w-[75vw] flex flex-col items-start gap-2 max-h-[74%] min-h-0",
                children: e.jsx("div", {
                  className:
                    "relative w-full flex-1 min-h-0 max-h-[min(68vh,560px)]",
                  children: e.jsx("div", {
                    ref: g,
                    className:
                      "dy-live-scrollbar-hide relative z-0 h-full overflow-y-auto overflow-x-hidden overscroll-y-contain touch-pan-y py-2 pl-0 pr-1",
                    children: e.jsxs("div", {
                      className:
                        "min-h-full flex flex-col justify-end gap-2.5 items-start",
                      children: [
                        K.map((Ne) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "dy-dm-stack-in inline-block w-max max-w-[75vw]",
                              children: e.jsx("div", {
                                className:
                                  "dy-live-liquid-glass rounded-2xl px-3 py-2 text-[13px] leading-snug bg-gradient-to-br from-fuchsia-500/22 via-violet-500/18 to-cyan-500/18 backdrop-blur-md text-white/95",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 min-w-0 max-w-[75vw]",
                                  children: [
                                    e.jsx("img", {
                                      src: Pt(Ne.residentId),
                                      alt: "",
                                      className:
                                        "w-6 h-6 rounded-full object-cover shrink-0",
                                    }),
                                    Ne.level > 0 && e.jsx(u4, { n: Ne.level }),
                                    e.jsxs("p", {
                                      className:
                                        "min-w-0 flex-1 text-[13px] leading-snug break-words text-white/95",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: Ne.name,
                                        }),
                                        e.jsx("span", {
                                          className: "text-white",
                                          children: "：",
                                        }),
                                        e.jsx("span", {
                                          className: "text-white/88",
                                          children: Ne.line,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            },
                            Ne.id,
                          ),
                        ),
                        D &&
                          e.jsx("div", {
                            className:
                              "dy-dm-stack-in dy-live-liquid-glass self-start inline-block w-max max-w-[75vw] text-xs text-white/80 rounded-full px-3 py-1.5 bg-white/[0.08] backdrop-blur-md",
                            children: "生成弹幕中…",
                          }),
                        O.map((Ne) => {
                          if (Ne.kind === "gift") {
                            const Ke = Ne.residentId
                              ? Pt(Ne.residentId)
                              : Ne.viewerAvatar ||
                                (Ne.giftFromKind === "user"
                                  ? String(
                                      (a == null ? void 0 : a.avatar) || "",
                                    ).trim()
                                  : "") ||
                                null;
                            return e.jsx(
                              "div",
                              {
                                className:
                                  "dy-dm-stack-in self-start inline-block w-max max-w-[75vw]",
                                children: e.jsx("div", {
                                  className:
                                    "dy-live-liquid-glass rounded-2xl px-3 py-2 text-[13px] leading-snug bg-gradient-to-br from-amber-500/18 via-rose-500/10 to-violet-500/12 border border-amber-200/15 backdrop-blur-md text-white/95",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center gap-1.5 min-w-0 max-w-[75vw]",
                                    children: [
                                      Ke
                                        ? e.jsx("img", {
                                            src: Ke,
                                            alt: "",
                                            className:
                                              "w-6 h-6 rounded-full object-cover shrink-0 self-center border border-amber-200/20",
                                          })
                                        : null,
                                      e.jsx("p", {
                                        className:
                                          "min-w-0 flex-1 text-[13px] leading-snug break-words",
                                        children: e.jsx("span", {
                                          className:
                                            "font-semibold text-amber-100/95",
                                          children: Ne.text,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              Ne.id,
                            );
                          }
                          const Je =
                            Ne.kind === "resident" && Ne.residentId
                              ? Pt(Ne.residentId)
                              : null;
                          if (Ne.kind === "me") {
                            const Ke =
                              Ne.viewerAvatar ||
                              String(
                                (a == null ? void 0 : a.avatar) || "",
                              ).trim();
                            return e.jsx(
                              "div",
                              {
                                className:
                                  "dy-dm-stack-in self-start inline-block w-max max-w-[75vw]",
                                children: e.jsx("div", {
                                  className:
                                    "dy-live-liquid-glass rounded-2xl px-3 py-2 text-[13px] leading-snug bg-cyan-500/14 backdrop-blur-md text-white",
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center gap-1.5 min-w-0 max-w-[75vw]",
                                    children: [
                                      Ke
                                        ? e.jsx("img", {
                                            src: Ke,
                                            alt: "",
                                            className:
                                              "w-6 h-6 rounded-full object-cover shrink-0 self-center border border-cyan-200/25",
                                          })
                                        : null,
                                      e.jsxs("p", {
                                        className:
                                          "min-w-0 flex-1 break-words text-white/95",
                                        children: [
                                          e.jsx("span", {
                                            className: "font-semibold",
                                            children: Ne.name,
                                          }),
                                          e.jsx("span", {
                                            className: "text-white",
                                            children: "：",
                                          }),
                                          e.jsx("span", { children: Ne.text }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              Ne.id,
                            );
                          }
                          const Be =
                            Ne.kind === "resident" && Ne.hostResident === !0;
                          return e.jsx(
                            "div",
                            {
                              className:
                                "dy-dm-stack-in self-start inline-block w-max max-w-[75vw]",
                              children: e.jsx("div", {
                                className: `dy-live-liquid-glass rounded-2xl px-2.5 py-1.5 text-[13px] leading-snug backdrop-blur-md ${Be ? "bg-black border border-white/15 text-white/95" : "bg-white/[0.06] text-white/95"}`,
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 min-w-0 max-w-[75vw]",
                                  children: [
                                    Je &&
                                      e.jsx("img", {
                                        src: Je,
                                        alt: "",
                                        className:
                                          "w-6 h-6 rounded-full object-cover shrink-0 self-center",
                                      }),
                                    Ne.level > 0 && e.jsx(u4, { n: Ne.level }),
                                    e.jsxs("p", {
                                      className:
                                        "min-w-0 flex-1 text-[13px] leading-snug break-words",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: Ne.name,
                                        }),
                                        e.jsx("span", {
                                          className: "text-white",
                                          children: "：",
                                        }),
                                        e.jsx("span", {
                                          className: Be
                                            ? "text-white/90"
                                            : "text-white/88",
                                          children: Ne.text,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            },
                            Ne.id,
                          );
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
            e.jsx(WK, {
              active: H,
              onAdvance: ln,
              hasMore: U > 0,
              resolveNpcAvatar: Pt,
              viewerAvatar:
                String((a == null ? void 0 : a.avatar) || "").trim() || void 0,
              streamerAvatar: b.avatar,
              profileCoverUrl: N,
              streamerName: b.name,
            }),
            C
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("button", {
                      type: "button",
                      className:
                        "absolute inset-0 z-[255] bg-black/35 backdrop-blur-[1px]",
                      "aria-label": "关闭打赏排名",
                      onClick: () => M(!1),
                    }),
                    e.jsxs("div", {
                      className: "dy-live-rank-panel",
                      children: [
                        e.jsxs("div", {
                          className: "dy-live-rank-header",
                          children: [
                            e.jsx("h1", {
                              className: "dy-live-rank-title",
                              children: "星光纪事",
                            }),
                            e.jsx("p", {
                              className: "dy-live-rank-subtitle",
                              children: "本场典藏榜单",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "dy-live-rank-list dy-live-scrollbar-hide",
                          children:
                            E.length === 0
                              ? e.jsx("p", {
                                  className: "dy-live-rank-empty",
                                  children: "暂无打赏记录",
                                })
                              : E.map((Ne, Je) => {
                                  const St =
                                      Ne.kind === "resident" && Ne.residentId
                                        ? Pt(Ne.residentId)
                                        : (Ne.kind === "user" &&
                                            String(
                                              (a == null ? void 0 : a.avatar) ||
                                                "",
                                            ).trim()) ||
                                          null,
                                    Be = String(Je + 1).padStart(2, "0"),
                                    Ke = Je === 0,
                                    Nt = Je === 1 || Je === 2,
                                    bt = Ne.yuan.toLocaleString("zh-CN", {
                                      minimumFractionDigits: 2,
                                      maximumFractionDigits: 2,
                                    });
                                  return e.jsxs(
                                    "div",
                                    {
                                      className: `dy-live-rank-item ${Ke ? "dy-live-rank-item--top1" : ""} ${Nt ? "dy-live-rank-item--toptier" : ""}`,
                                      children: [
                                        e.jsx("span", {
                                          className: `dy-live-rank-num tabular-nums ${Nt ? "dy-live-rank-num--italic" : ""}`,
                                          children: Be,
                                        }),
                                        e.jsx("div", {
                                          className: "dy-live-rank-avatar",
                                          children: St
                                            ? e.jsx("img", { src: St, alt: "" })
                                            : e.jsx("span", {
                                                className:
                                                  "block w-full h-full rounded-full bg-gradient-to-br from-slate-200 to-slate-300",
                                                "aria-hidden": !0,
                                              }),
                                        }),
                                        e.jsxs("div", {
                                          className: "dy-live-rank-user-info",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "dy-live-rank-user-name",
                                              children: Ne.name,
                                            }),
                                            e.jsx("p", {
                                              className: "dy-live-rank-meta",
                                              children:
                                                Ne.kind === "resident"
                                                  ? "通讯录居民"
                                                  : Ne.kind === "user"
                                                    ? "本场用户"
                                                    : "观众",
                                            }),