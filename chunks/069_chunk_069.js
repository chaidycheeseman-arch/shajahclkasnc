          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse",
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,var(--e-noise-line)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_3px,3px_100%] pointer-events-none",
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--e-vignette)_100%)]",
            }),
          ],
        }),
  pZ = ({ onClose: t, coins: s }) =>
    e.jsxs("div", {
      className:
        "absolute top-0 left-0 right-0 h-28 flex justify-between items-start p-6 pt-14 z-50 pointer-events-none",
      children: [
        e.jsxs("button", {
          onClick: t,
          className: "pointer-events-auto flex items-center gap-2 group",
          children: [
            e.jsx("div", {
              className:
                "w-8 h-8 flex items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-black)] text-[var(--e-contrast)] group-hover:bg-white group-hover:text-black transition-colors",
              children: e.jsx(Xr, { size: 16 }),
            }),
            e.jsx("span", {
              className:
                "font-mono text-[10px] tracking-widest text-[var(--e-muted)] group-hover:text-[var(--e-contrast)] transition-colors",
              children: "断开连接",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex flex-col items-end",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("span", {
                  className:
                    "font-mono text-xl font-bold text-[var(--e-contrast)] tracking-tighter",
                  children: s.toLocaleString().padStart(6, "0"),
                }),
                e.jsx("span", {
                  className: "text-[10px] bg-white text-black px-1 font-bold",
                  children: "PTS",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-1 mt-1",
              children: [
                e.jsx("div", {
                  className:
                    "w-1.5 h-1.5 bg-[#FF3B30] rounded-full animate-pulse",
                }),
                e.jsx("span", {
                  className:
                    "font-mono text-[9px] text-[var(--e-dim)] uppercase",
                  children: "ECHO SYSTEM ONLINE",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  dl = ({ text: t, className: s }) =>
    t
      ? e.jsx("div", {
          className: s,
          children: t
            .split(
              `
`,
            )
            .map((n, a) =>
              e.jsx(
                "p",
                { className: n.trim() ? "mb-4 last:mb-0" : "h-2", children: n },
                a,
              ),
            ),
        })
      : null,
  xZ = ({ text: t, onComplete: s, speed: n = 20, className: a }) => {
    const [r, i] = l.useState("");
    return (
      l.useEffect(() => {
        let o = 0;
        const c = setInterval(() => {
          o < t.length
            ? (i((d) => d + t.charAt(o)), o++)
            : (clearInterval(c), s && s());
        }, n);
        return () => clearInterval(c);
      }, [t, n]),
      e.jsx("div", {
        className: a,
        children: r
          .split(
            `
`,
          )
          .map((o, c) =>
            e.jsx(
              "p",
              { className: o ? "mb-4 last:mb-0" : "h-4", children: o },
              c,
            ),
          ),
      })
    );
  },
  hZ = ({ x: t, y: s, options: n, onClose: a }) =>
    e.jsx("div", {
      className: "fixed inset-0 z-[999] bg-transparent",
      onClick: a,
      children: e.jsx(We.div, {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        style: { top: s, left: t },
        className:
          "absolute bg-[var(--e-surface)] border border-[var(--e-line-strong)] shadow-xl backdrop-blur-md rounded overflow-hidden min-w-[120px]",
        children: n.map((r, i) =>
          e.jsxs(
            "button",
            {
              onClick: (o) => {
                (o.stopPropagation(), r.action(), a());
              },
              className:
                "w-full text-left px-4 py-3 text-xs font-mono text-[var(--e-primary)] hover:bg-[var(--e-hover)] hover:text-[var(--e-cyan)] border-b border-[var(--e-line)] last:border-0 flex items-center gap-2",
              children: [r.icon, r.label],
            },
            i,
          ),
        ),
      }),
    }),
  gZ = ({ item: t, onClose: s }) =>
    e.jsx(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "absolute inset-0 z-[70] flex items-center justify-center px-6 bg-[var(--e-overlay-90)] backdrop-blur-md",
      onClick: s,
      children: e.jsxs(We.div, {
        initial: { scale: 0.9, y: 20 },
        animate: { scale: 1, y: 0 },
        className:
          "relative flex max-h-[85vh] w-full max-w-sm flex-col overflow-hidden border border-[var(--e-line-strong)] bg-[var(--e-raised)] min-h-0",
        onClick: (n) => n.stopPropagation(),
        children: [
          e.jsx("div", {
            className:
              "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF3B30] to-transparent",
          }),
          e.jsxs("div", {
            className:
              "p-6 border-b border-[var(--e-line)] flex justify-between items-start",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className:
                      "font-mono text-[10px] text-[var(--e-muted)] mb-1 uppercase tracking-widest",
                    children: "原持有者",
                  }),
                  e.jsx("h2", {
                    className:
                      "text-xl font-bold text-[var(--e-contrast)] tracking-tight",
                    children: t.owner,
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: s,
                className:
                  "text-[var(--e-muted)] hover:text-[var(--e-contrast)]",
                children: e.jsx(Ts, { size: 20 }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "min-h-0 flex-1 overflow-y-auto p-6 scrollbar-hide",
            children: [
              e.jsxs("div", {
                className: "mb-6 flex gap-4 opacity-50",
                children: [
                  e.jsx(wr, { size: 32, strokeWidth: 1 }),
                  e.jsx("div", {
                    className: "mt-4 h-[1px] flex-1 bg-[var(--e-line-strong)]",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "space-y-4 font-serif text-sm leading-loose text-[var(--e-body)]",
                children: t.owner_story
                  ? t.owner_story
                      .split(
                        `
`,
                      )
                      .filter(Boolean)
                      .map((n, a) =>
                        e.jsx(
                          "p",
                          { className: "indent-6 text-justify", children: n },
                          a,
                        ),
                      )
                  : e.jsx("p", {
                      className: "italic text-[var(--e-muted)]",
                      children: "数据损坏，未找到生平记录。",
                    }),
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "p-4 border-t border-[var(--e-line)] bg-[var(--e-raised)]",
            children: e.jsxs("div", {
              className:
                "flex justify-between items-center text-[10px] text-[var(--e-dim)] font-mono",
              children: [
                e.jsxs("span", { children: ["记录编号: ", t.id.slice(0, 8)] }),
                e.jsx("span", { children: "绝密档案" }),
              ],
            }),
          }),
        ],
      }),
    }),
  bZ = ({ item: t, onClose: s, continueStory: n }) => {
    var _;
    const [a, r] = l.useState([]),
      [i, o] = l.useState(""),
      [c, d] = l.useState(!1),
      [u, f] = l.useState(!1),
      p = l.useRef(null),
      [m, h] = l.useState(null);
    (l.useEffect(() => {
      (async () => {
        (d(!0), f(!0));
        const k = {
          type: "system",
          text: `[SYSTEM] 正在重构记忆扇区...
[TARGET] ${t.name} (R:${t.rarity})
[SYNC] 100% 连接建立`,
        };
        let C = t.story;
        ((!C || C.length < 50) &&
          ((C =
            t.description ||
            "这也是一段模糊的记忆。你试图聚焦，但只有零星的碎片..."),
          t.parents &&
            t.parents.length === 2 &&
            (C = `空气中弥漫着${t.parents[0].name}留下的气息，与${t.parents[1].name}的余温交织在一起。

这并非巧合。在某种不可抗力的作用下，${t.parents[0].owner || "某人"}和${t.parents[1].owner || "某人"}的命运轨迹在此刻重叠。

你注视着这个新诞生的物体，它仿佛正在诉说着一段未完的故事...`)),
          setTimeout(() => {
            (r([k]),
              setTimeout(() => {
                (r((M) => [...M, { type: "narrative", text: C }]), d(!1));
              }, 800));
          }, 1e3));
      })();
    }, [t]),
      l.useEffect(() => {
        var A;
        (A = p.current) == null || A.scrollIntoView({ behavior: "smooth" });
      }, [a, c, u]));
    const g = async (A = null, k = null) => {
        if ((!i.trim() && !A) || c || u) return;
        const C = A || i;
        (A || o(""),
          k || r((M) => [...M, { type: "user", text: C }]),
          d(!0),
          f(!0));
        try {
          let M;
          if (k) {
            const E = k[k.length - 1];
            if (E.type === "user") {
              const S = k.slice(0, -1);
              M = await n(S, E.text);
            } else M = await n(k, "（继续）");
          } else M = await n(a, C);
          r((E) => [...E, { type: "narrative", text: M.text, isEnd: M.isEnd }]);
        } catch {
          r((E) => [
            ...E,
            { type: "system", text: "错误：记忆数据流中断。链接已断开。" },
          ]);
        } finally {
          d(!1);
        }
      },
      x = (A) => {
        r((k) => k.filter((C, M) => M !== A));
      },
      y = (A) => {
        const k = a.slice(0, A);
        (r(k), g("REROLL_TRIGGER", k));
      },
      v = l.useRef(null),
      b = (A, k, C) => {
        v.current = setTimeout(() => {
          const M = A.touches[0];
          h({ x: M.clientX, y: M.clientY, index: k, type: C });
        }, 500);
      },
      N = () => {
        v.current && clearTimeout(v.current);
      },
      w = (A, k, C) => {
        (A.preventDefault(),
          h({ x: A.clientX, y: A.clientY, index: k, type: C }));
      };
    return e.jsxs(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "absolute inset-0 z-[80] bg-[var(--e-deep)] flex flex-col font-sans overflow-hidden",
      children: [
        m &&
          e.jsx(hZ, {
            x: m.x,
            y: m.y,
            onClose: () => h(null),
            options: [
              {
                label: "删除记录",
                icon: e.jsx(dL, { size: 12 }),
                action: () => x(m.index),
              },
              ...(m.type === "narrative"
                ? [
                    {
                      label: "重新生成 (Reroll)",
                      icon: e.jsx(X1, { size: 12 }),
                      action: () => y(m.index),
                    },
                  ]
                : []),
            ],
          }),
        e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none overflow-hidden",
          children: [
            e.jsx(We.div, {
              animate: { opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] },
              transition: { duration: 10, repeat: 1 / 0, ease: "easeInOut" },
              className:
                "absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_50%)]",
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]",
            }),
            e.jsx("div", {
              className:
                "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--e-deep)] via-[var(--e-deep-80)] to-transparent z-10",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--e-deep)] via-[var(--e-deep-90)] to-transparent z-10",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "absolute top-0 left-0 right-0 z-20 flex justify-between items-start px-6 pt-10 bg-gradient-to-b from-[var(--e-deep)] via-[var(--e-deep-90)] to-transparent pb-8",
          children: [
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsxs(We.div, {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.5 },
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]",
                    }),
                    e.jsx("span", {
                      className:
                        "text-[10px] font-mono tracking-[0.2em] text-[var(--e-tw-50)] uppercase",
                      children: "Memory Dive",
                    }),
                  ],
                }),
                e.jsx(We.h2, {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.7 },
                  className:
                    "text-[var(--e-tw-90)] font-serif text-lg tracking-wide italic",
                  children: t.name,
                }),
              ],
            }),
            e.jsxs("button", {
              onClick: s,
              className:
                "group flex items-center gap-2 px-3 py-1.5 border border-[var(--e-border-glass-10)] rounded-full hover:bg-white/10 hover:border-[var(--e-border-glass-30)] transition-all backdrop-blur-sm",
              children: [
                e.jsx("span", {
                  className:
                    "text-[9px] font-mono text-[var(--e-tw-50)] uppercase tracking-widest group-hover:text-[var(--e-contrast)] transition-colors",
                  children: "Abort",
                }),
                e.jsx(Ts, {
                  size: 12,
                  className:
                    "text-[var(--e-tw-50)] group-hover:text-[var(--e-contrast)]",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "relative z-10 min-h-0 flex-1 overflow-y-auto px-8 pb-32 pt-28 scrollbar-hide mask-image-gradient",
          children: e.jsxs("div", {
            className: "max-w-xl mx-auto space-y-8",
            children: [
              a.map((A, k) => {
                const C = k === a.length - 1;
                return A.type === "system"
                  ? e.jsx(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        className: "flex justify-center my-8",
                        onContextMenu: (M) => w(M, k, A.type),
                        onTouchStart: (M) => b(M, k, A.type),
                        onTouchEnd: N,
                        children: e.jsx("span", {
                          className:
                            "text-[9px] font-mono text-cyan-500/70 border border-cyan-500/20 px-2 py-1 tracking-widest uppercase bg-cyan-950/10 backdrop-blur-md",
                          children: A.text,
                        }),
                      },
                      k,
                    )
                  : A.type === "user"
                    ? e.jsx(
                        We.div,
                        {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          className: "flex justify-end my-6 group",
                          onContextMenu: (M) => w(M, k, A.type),
                          onTouchStart: (M) => b(M, k, A.type),
                          onTouchEnd: N,
                          children: e.jsx("div", {
                            className:
                              "max-w-[80%] pl-6 border-l-2 border-[var(--e-border-glass-20)] text-[var(--e-tw-60)] font-serif italic text-sm leading-relaxed text-right cursor-pointer hover:border-[var(--e-border-glass-50)] transition-colors",
                            children: A.text,
                          }),
                        },
                        k,
                      )
                    : e.jsxs(
                        We.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          className: "relative pl-6 group",
                          onContextMenu: (M) => w(M, k, A.type),
                          onTouchStart: (M) => b(M, k, A.type),
                          onTouchEnd: N,
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute left-0 top-1 bottom-1 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:via-[var(--e-border-glass-50)] transition-colors",
                            }),
                            e.jsx("div", {
                              className:
                                "text-[var(--e-primary)] font-serif text-base md:text-lg leading-loose tracking-wide shadow-black drop-shadow-lg cursor-pointer",
                              children: C
                                ? e.jsx(xZ, {
                                    text: A.text,
                                    speed: 30,
                                    onComplete: () => f(!1),
                                    className: "",
                                  })
                                : A.text
                                    .split(
                                      `
`,
                                    )
                                    .map((M, E) =>
                                      e.jsx(
                                        "p",
                                        {
                                          className: M
                                            ? "mb-4 last:mb-0"
                                            : "h-4",
                                          children: M,
                                        },
                                        E,
                                      ),
                                    ),
                            }),
                            A.attribute_check &&
                              e.jsxs(We.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                className:
                                  "mt-4 mb-2 p-3 bg-[var(--e-overlay-50)] border border-[var(--e-line-strong)] inline-block font-mono text-xs",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "text-[var(--e-muted)] mb-2 uppercase tracking-widest",
                                    children: [
                                      "System Check: ",
                                      A.attribute_check.attribute,
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsxs("span", {
                                        children: [
                                          "Target: ",
                                          A.attribute_check.target,
                                        ],
                                      }),
                                      e.jsxs("span", {
                                        children: [
                                          "Roll:",
                                          " ",
                                          e.jsx("span", {
                                            className: A.attribute_check
                                              .is_success
                                              ? "text-[var(--e-mint)]"
                                              : "text-[#FF3B30]",
                                            children: A.attribute_check.roll,
                                          }),
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className: `px-2 py-0.5 border ${A.attribute_check.is_success ? "border-[var(--e-mint)] text-[var(--e-mint)]" : "border-[#FF3B30] text-[#FF3B30]"}`,
                                        children: A.attribute_check.is_success
                                          ? "SUCCESS"
                                          : "FAILED",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            A.discoverable &&
                              e.jsxs(We.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                className: "mt-4 mb-2 flex items-center gap-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 flex items-center justify-center bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700]",
                                    children:
                                      A.discoverable.type === "intel"
                                        ? e.jsx(Gl, { size: 14 })
                                        : e.jsx(Ko, { size: 14 }),
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "text-[10px] text-[#FFD700] font-mono uppercase tracking-widest",
                                        children: [
                                          "New ",
                                          A.discoverable.type,
                                          " Found",
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "text-sm font-bold text-[var(--e-contrast)]",
                                        children: A.discoverable.name,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            A.isEnd &&
                              e.jsx(We.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { delay: 2 },
                                className: "mt-8 flex justify-center",
                                children: e.jsx("div", {
                                  className: "h-px w-16 bg-white/20",
                                }),
                              }),
                          ],
                        },
                        k,
                      );
              }),
              c &&
                !u &&
                e.jsx("div", {
                  className: "flex justify-center py-4",
                  children: e.jsx(Wr, {
                    size: 16,
                    className: "text-[var(--e-tw-30)] animate-spin",
                  }),
                }),
              e.jsx("div", { className: "h-24", ref: p }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "absolute bottom-6 left-0 right-0 px-6 z-30 flex justify-center",
          children: e.jsxs("div", {
            className: "w-full max-w-xl relative",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-[var(--e-raised)]/90 backdrop-blur-xl border border-[var(--e-line-strong)] rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] -skew-x-2",
              }),
              e.jsxs("div", {
                className:
                  "relative z-10 flex items-center p-1 overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className:
                      "pl-4 pr-2 text-[var(--e-cyan)] font-mono text-xs select-none flex items-center gap-1 animate-pulse",
                    children: [
                      e.jsx("span", { children: ">" }),
                      e.jsx("span", { children: "_" }),
                    ],
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: i,
                    onChange: (A) => o(A.target.value),
                    onKeyDown: (A) => A.key === "Enter" && g(),
                    placeholder: u ? "正在接收信号..." : "输入行动指令...",
                    disabled:
                      c ||
                      u ||
                      ((_ = a[a.length - 1]) == null ? void 0 : _.isEnd),
                    className:
                      "flex-1 min-w-0 bg-transparent border-none text-[var(--e-primary)] placeholder-[var(--e-dim)] font-mono text-sm focus:outline-none focus:ring-0 py-3 selection:bg-[var(--e-cyan)] selection:text-black caret-[var(--e-cyan)]",
                    autoFocus: !0,
                    spellCheck: !1,
                  }),
                  e.jsx("button", {
                    onClick: () => g(),
                    disabled: !i.trim() || c || u,
                    className:
                      "p-3 text-[#333] hover:text-[var(--e-cyan)] disabled:opacity-0 transition-colors",
                    children: e.jsx(ri, { size: 16 }),
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "absolute -bottom-1 left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-[#00FFFF]/30 to-transparent",
              }),
              e.jsxs("div", {
                className:
                  "absolute -top-6 right-0 text-[9px] font-mono text-[var(--e-dim)] tracking-widest uppercase flex items-center gap-2",
                children: [
                  e.jsx("span", {
                    children: c ? "UPLINK BUSY" : "UPLINK READY",
                  }),
                  e.jsx("div", {
                    className: `w-1 h-1 ${c ? "bg-[#FF3B30] animate-ping" : "bg-[var(--e-cyan)]"}`,
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  yZ = ({ item: t, onClose: s, title: n = "分析完成" }) =>
    e.jsx(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "absolute inset-0 z-[60] flex items-center justify-center px-6 bg-[var(--e-overlay-90)] backdrop-blur-md",
      children: e.jsxs(We.div, {
        initial: { scale: 0.9, y: 20 },
        animate: { scale: 1, y: 0 },
        className:
          "flex max-h-[85vh] w-full max-w-sm min-h-0 flex-col overflow-hidden border border-[var(--e-line-strong)] bg-[var(--e-raised)]",
        children: [
          e.jsx("div", {
            className: "h-2 bg-gradient-to-r from-[#FF3B30] to-transparent",
          }),
          e.jsxs("div", {
            className:
              "p-6 border-b border-[var(--e-line)] flex justify-between items-start",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className: "font-mono text-[10px] text-[#FF3B30] mb-1",
                    children: n,
                  }),
                  e.jsx("h2", {
                    className:
                      "text-2xl font-bold text-[var(--e-contrast)] tracking-tight",
                    children: t.name,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: `text-xs px-2 py-1 border ${t.rarity === "SSR" ? "border-yellow-500 text-yellow-500" : t.rarity === "SR" ? "border-purple-500 text-purple-500" : "border-cyan-500 text-cyan-500"}`,
                children: [t.rarity, "级"],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "min-h-0 flex-1 space-y-6 overflow-y-auto p-6 scrollbar-hide",
            children: [
              e.jsx("div", {
                className:
                  "flex justify-center border border-dashed border-[var(--e-line)] bg-[var(--e-surface)] py-6",
                children: e.jsx("span", {
                  className:
                    "text-8xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]",
                  children: t.icon,
                }),
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  t.origin &&
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx(kl, {
                          size: 14,
                          className: "text-[var(--e-muted)] mt-0.5 shrink-0",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-[var(--e-muted)] uppercase",
                              children: "来源时空",
                            }),
                            e.jsx("div", {
                              className: "text-xs text-[var(--e-primary)]",
                              children: t.origin,
                            }),
                          ],
                        }),
                      ],
                    }),
                  t.owner &&
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx(wr, {
                          size: 14,
                          className: "text-[var(--e-muted)] mt-0.5 shrink-0",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-[var(--e-muted)] uppercase",
                              children: "原持有者",
                            }),
                            e.jsx("div", {
                              className: "text-xs text-[var(--e-primary)]",
                              children: t.owner,
                            }),
                          ],
                        }),
                      ],
                    }),
                  t.composition &&
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx(Bi, {
                          size: 14,
                          className: "text-[var(--e-muted)] mt-0.5 shrink-0",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-[var(--e-muted)] uppercase",
                              children: "物质构成",
                            }),
                            e.jsx("div", {
                              className: "text-xs text-[var(--e-primary)]",
                              children: t.composition,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "border-t border-[var(--e-line)] pt-4",
                children: [
                  e.jsx("div", {
                    className:
                      "font-mono text-[10px] text-[var(--e-muted)] mb-2 uppercase",
                    children: "核心记忆",
                  }),
                  e.jsx("div", {
                    className:
                      "text-xs text-[var(--e-body)] leading-relaxed italic border-l-2 border-[var(--e-line-strong)] pl-3 space-y-2",
                    children: t.story
                      ? t.story
                          .split(
                            `
`,
                          )
                          .filter(Boolean)
                          .map((a, r) => e.jsx("p", { children: a }, r))
                      : e.jsx("p", { children: t.description }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "p-4 border-t border-[var(--e-line)] bg-[var(--e-raised)]",
            children: e.jsxs("button", {
              onClick: s,
              className:
                "w-full py-3 bg-[var(--e-cta)] text-black font-bold text-xs uppercase tracking-widest hover:bg-[var(--e-cta-hover)] active:scale-95 transition-all flex items-center justify-center gap-2",
              children: [e.jsx(Ko, { size: 14 }), "归档保存"],
            }),
          }),
        ],
      }),
    }),
  vZ = ({ mode: t, setMode: s }) => {
    const n = [
      { id: "SCANNER", label: "搜寻" },
      { id: "LAB", label: "分析" },
      { id: "CRAFT", label: "合成" },
      { id: "NEXUS", label: "枢纽" },
      { id: "VAULT", label: "档案" },
      { id: "SETTLEMENT", label: "结算" },
    ];
    return e.jsx("div", {
      className: "absolute bottom-8 left-6 right-6 z-50",
      children: e.jsx("div", {
        className:
          "bg-[var(--e-raised)] border border-[var(--e-line)] p-1 flex justify-between items-center backdrop-blur-md overflow-x-auto no-scrollbar",
        children: n.map((a) =>
          e.jsxs(
            "button",
            {
              onClick: () => s(a.id),
              className: `relative flex-1 py-4 px-2 flex flex-col items-center justify-center gap-1 transition-all group overflow-hidden shrink-0 ${t === a.id ? "bg-[var(--e-surface2)]" : "hover:bg-[var(--e-surface)]"}`,
              children: [
                t === a.id &&
                  e.jsx(We.div, {
                    layoutId: "activeTab",
                    className:
                      "absolute top-0 left-0 w-full h-[2px] bg-[#FF3B30]",
                  }),
                e.jsx("span", {
                  className: `font-mono text-[9px] tracking-[0.1em] uppercase transition-colors whitespace-nowrap ${t === a.id ? "text-[var(--e-contrast)] font-bold" : "text-[var(--e-dim)] group-hover:text-[var(--e-soft)]"}`,
                  children: a.label,
                }),
                t === a.id &&
                  e.jsx("div", {
                    className: "w-1 h-1 bg-[#FF3B30] rounded-full mt-1",
                  }),
              ],
            },
            a.id,
          ),
        ),
      }),
    });
  },
  wZ = ({
    onScan: t,
    isScanning: s,
    hasSignal: n,
    uiScheme: a,
    onToggleUiScheme: r,
  }) =>
    e.jsxs("div", {
      className:
        "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
      children: [
        e.jsxs("div", {
          className:
            "relative w-[300px] h-[300px] flex items-center justify-center",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 border border-[var(--e-line)] rounded-full opacity-50",
            }),
            e.jsx("div", {
              className:
                "absolute inset-8 border border-[var(--e-line)] rounded-full opacity-30 border-dashed",
            }),
            e.jsx(We.div, {
              animate: { rotate: 360 },
              transition: { duration: 4, repeat: 1 / 0, ease: "linear" },
              className:
                "absolute inset-0 rounded-full border-t border-[#FF3B30] opacity-50 shadow-[0_0_20px_rgba(255,59,48,0.2)]",
            }),
            e.jsxs("button", {
              type: "button",
              onClick: t,
              disabled: s,
              className:
                "pointer-events-auto w-32 h-32 bg-[var(--e-black)] border border-[var(--e-line-strong)] hover:border-[#FF3B30] active:scale-95 transition-all rounded-full flex flex-col items-center justify-center z-10 group",
              children: [
                e.jsx("div", {
                  className: `text-[var(--e-line-strong)] group-hover:text-[var(--e-contrast)] transition-colors ${s ? "animate-pulse text-[#FF3B30]" : ""}`,
                  children: e.jsx(Mc, { size: 32, strokeWidth: 1 }),
                }),
                e.jsx("span", {
                  className:
                    "font-mono text-[9px] text-[var(--e-dim)] mt-2 group-hover:text-[var(--e-muted)]",
                  children: s ? "扫描中..." : "启动扫描",
                }),
              ],
            }),
            n &&
              e.jsx(We.div, {
                initial: { scale: 0, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                className:
                  "absolute top-10 right-10 w-3 h-3 bg-[#FF3B30] rounded-full animate-ping",
              }),
          ],
        }),
        e.jsxs("button", {
          type: "button",
          "aria-label": a === "day" ? "切换为黑夜界面" : "切换为白昼界面",
          onClick: () => r(),
          className:
            "pointer-events-auto absolute bottom-36 left-1/2 w-[min(100%,220px)] -translate-x-1/2 rounded-md border border-[var(--e-line)] bg-[var(--e-raised)]/90 px-3 py-2 text-center shadow-sm backdrop-blur-sm transition-transform active:scale-[0.98]",
          children: [
            e.jsx("p", {
              className:
                "font-mono text-[10px] text-[var(--e-dim)] tracking-widest uppercase mb-1",
              children: "第七区",
            }),
            e.jsx("div", {
              className: "mb-1 flex justify-center gap-1",
              children: [...Array(5)].map((i, o) =>
                e.jsx("div", { className: "h-3 w-1 bg-[var(--e-hover)]" }, o),
              ),
            }),
            e.jsx("span", {
              className:
                "font-mono text-[8px] leading-tight text-[var(--e-muted)]",
              children:
                a === "day"
                  ? "白昼界面 · 点击切回黑夜"
                  : "黑夜界面 · 点击切换白昼",
            }),
          ],
        }),
      ],
    }),
  jZ = ({ item: t, onProcess: s, onDiscard: n, uiScheme: a }) => {
    const r = l.useRef(null),
      [i, o] = l.useState(0),
      [c, d] = l.useState(!1),
      [u, f] = l.useState(0),
      [p, m] = l.useState(!1),
      [h, g] = l.useState(""),
      [x, y] = l.useState(null),
      [v, b] = l.useState(0),
      N = pn.useMemo(() => fZ(t), [t]);
    l.useEffect(() => {
      const _ = r.current;
      if (!_) return;
      const A = _.getContext("2d"),
        k = _.width,
        C = _.height;
      if (((A.fillStyle = "#111"), A.fillRect(0, 0, k, C), N === "wet")) {
        ((A.fillStyle = "#1a2332"),
          A.fillRect(0, 0, k, C),
          (A.font = "10px monospace"),
          (A.fillStyle = "#2d3b4e"));
        for (let E = 0; E < 50; E++)
          A.fillText(
            Math.random() > 0.5 ? "1" : "0",
            Math.random() * k,
            Math.random() * C,
          );
      } else if (N === "rusty") {
        ((A.fillStyle = "#2a1d1d"), A.fillRect(0, 0, k, C));
        for (let E = 0; E < 100; E++)
          ((A.fillStyle = Math.random() > 0.5 ? "#3a2525" : "#1f1515"),
            A.fillRect(
              Math.random() * k,
              Math.random() * C,
              Math.random() * 10,
              Math.random() * 2,
            ));
      } else ((A.fillStyle = "#181818"), A.fillRect(0, 0, k, C));
      ((A.strokeStyle = "rgba(255,255,255,0.05)"), (A.lineWidth = 1));
      const M = 40;
      for (let E = 0; E <= k; E += M) (A.moveTo(E, 0), A.lineTo(E, C));
      for (let E = 0; E <= C; E += M) (A.moveTo(0, E), A.lineTo(k, E));
      A.stroke();
    }, [t, N, a]);
    const w = () => {
      var j;
      const _ = uy[i];
      if ((y(null), !_.match.includes(N))) {
        (b((T) => T + 1),
          navigator.vibrate && navigator.vibrate(200),
          y({
            type: "error",
            message: `错误：协议不匹配，请尝试 [${((j = uy.find((T) => T.match.includes(N))) == null ? void 0 : j.name) || "通用分析"}]`,
          }),
          setTimeout(() => y(null), 3e3));
        return;
      }
      m(!0);
      const A = r.current,
        k = A.getContext("2d"),
        C = [
          "正在重构物质层...",
          "检测到残留情感波动...",
          "同步率 42%...",
          "正在解除时空封印...",
          "读取以太指纹...",
          "解析历史坐标...",
        ];
      let M = u,
        E = 0;
      const S = setInterval(() => {
        var T;
        ((M += 0.05),
          f(M),
          E++,
          E % 5 === 0 && g(C[Math.floor(Math.random() * C.length)]),
          (k.globalCompositeOperation = "destination-out"));
        for (let I = 0; I < 5; I++) {
          const L = Math.random() * A.width,
            B = Math.random() * A.height,
            F = Math.random() * 50 + 20;
          (k.beginPath(), k.rect(L, B, F, F), k.fill());
        }
        M >= 1 &&
          (clearInterval(S),
          m(!1),
          g("分析完成"),
          s(t.id, ((T = t.options) == null ? void 0 : T[0]) || "Unknown"));
      }, 50);
    };
    return e.jsxs("div", {
      className:
        "absolute inset-0 flex min-h-0 flex-col overflow-hidden pt-24 pb-24 px-6",
      children: [
        e.jsxs("div", {
          className:
            "flex shrink-0 justify-between items-end mb-6 font-mono text-[10px] text-[var(--e-dim)] uppercase",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", { children: ["样本编号: ", t.id.slice(0, 8)] }),
                e.jsxs("div", {
                  className: "text-[#FF3B30] flex items-center gap-2",
                  children: [
                    "检测到：",
                    N === "dirty"
                      ? "污浊"
                      : N === "wet"
                        ? "潮湿"
                        : N === "rusty"
                          ? "锈蚀"
                          : N === "ethereal"
                            ? "虚空反应"
                            : N,
                    x &&
                      e.jsx(We.span, {
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                        className:
                          "bg-[#FF3B30] text-black px-1 font-bold animate-pulse",
                        children: "!",
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-right flex flex-col items-end",
              children: [
                e.jsxs("div", {
                  children: ["完整度: ", (100 - u * 100).toFixed(1), "%"],
                }),
                e.jsxs("button", {
                  onClick: () => d(!0),
                  className:
                    "text-[#FF3B30] hover:bg-[#FF3B30]/10 px-2 py-0.5 mt-1 -mr-2 flex items-center gap-1 transition-colors",
                  children: [e.jsx(_n, { size: 10 }), "丢弃样本"],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            x &&
            e.jsx(We.div, {
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
              className:
                "absolute top-[85px] left-6 right-6 bg-[#FF3B30]/10 border border-[#FF3B30] z-20 overflow-hidden",
              children: e.jsxs("div", {
                className:
                  "px-3 py-2 text-[10px] font-mono text-[#FF3B30] font-bold flex items-center gap-2",
                children: [e.jsx(Ts, { size: 12 }), x.message],
              }),
            }),
        }),
        e.jsxs("div", {
          className:
            "relative min-h-0 flex-1 bg-[var(--e-canvas)] border border-[var(--e-line)] overflow-hidden group",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center text-[120px] filter grayscale opacity-80",
              children: t.icon,
            }),
            e.jsx("canvas", {
              ref: r,
              width: window.innerWidth * 2,
              height: window.innerHeight * 2,
              className:
                "absolute inset-0 w-full h-full object-cover opacity-90",
            }),
            e.jsx(Os, {
              children:
                p &&
                e.jsx(
                  We.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none",
                    children: e.jsx("span", {
                      className:
                        "bg-[var(--e-overlay-50)] backdrop-blur px-2 py-1 text-[#FF3B30] font-mono text-xs border border-[#FF3B30]/30",
                      children: h,
                    }),
                  },
                  h,
                ),
            }),
            e.jsx("div", {
              className:
                "absolute inset-4 border border-[var(--e-line-strong)] border-dashed pointer-events-none",
            }),
            e.jsx("div", {
              className:
                "absolute top-4 left-4 w-2 h-2 border-t border-l border-[var(--e-contrast)]",
            }),
            e.jsx("div", {
              className:
                "absolute top-4 right-4 w-2 h-2 border-t border-r border-[var(--e-contrast)]",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[var(--e-contrast)]",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[var(--e-contrast)]",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-0 left-0 h-1 bg-[#FF3B30] transition-all duration-200",
              style: { width: `${u * 100}%` },
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "mt-6 flex h-24 shrink-0 items-center justify-between gap-4",
          children: [
            e.jsx("div", {
              className:
                "flex min-w-0 flex-1 gap-2 overflow-x-auto no-scrollbar",
              children: uy.map((_, A) => {
                const k = _.match.includes(N),
                  C = i === A;
                return e.jsxs(
                  "button",
                  {
                    onClick: () => o(A),
                    className: `relative h-16 aspect-square border flex flex-col items-center justify-center gap-1 transition-all shrink-0 ${C ? "border-[var(--e-contrast)] bg-[var(--e-hover)] text-[var(--e-contrast)]" : k ? "border-[#FF3B30]/50 bg-[#FF3B30]/10 text-[#FF3B30]" : "border-[var(--e-line)] bg-[var(--e-black)] text-[var(--e-dim)]"}`,
                    children: [
                      k &&
                        !C &&
                        e.jsx("div", {
                          className:
                            "absolute top-1 right-1 w-1.5 h-1.5 bg-[#FF3B30] rounded-full animate-pulse",
                        }),
                      _.icon,
                      e.jsx("span", {
                        className: "text-[8px] font-mono uppercase",
                        children: _.name,
                      }),
                    ],
                  },
                  _.id,
                );
              }),
            }),
            e.jsx(We.button, {
              onClick: w,
              animate: v ? { x: [-5, 5, -5, 5, 0] } : {},
              transition: { duration: 0.4 },
              disabled: p,
              className: `h-16 aspect-square ${x ? "bg-[var(--e-line-strong)] border-[#FF3B30] text-[#FF3B30]" : "bg-[#FF3B30] text-black border-[#FF3B30] hover:bg-red-500"} font-bold flex items-center justify-center border active:scale-95 transition-all`,
              children: p
                ? e.jsx(Wr, { className: "animate-spin" })
                : x
                  ? e.jsx(Ts, {})
                  : e.jsx(wp, {}),
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            c &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 z-50 flex items-center justify-center bg-[var(--e-overlay-80)] backdrop-blur-sm px-8",
              children: e.jsxs("div", {
                className:
                  "w-full bg-[var(--e-surface)] border border-[#FF3B30] p-6 text-center",
                children: [
                  e.jsx("div", {
                    className: "text-[#FF3B30] mb-2 animate-pulse",
                    children: e.jsx(_n, { size: 32, className: "mx-auto" }),
                  }),
                  e.jsx("h3", {
                    className: "text-[var(--e-contrast)] font-bold mb-2",
                    children: "终止分析程序？",
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-[var(--e-soft)] mb-6",
                    children: [
                      "样本将从缓冲区中永久移除。",
                      e.jsx("br", {}),
                      "此操作无法撤销。",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx("button", {
                        onClick: () => d(!1),
                        className:
                          "flex-1 py-2 border border-[var(--e-line-strong)] text-[var(--e-soft)] text-xs font-mono hover:bg-[var(--e-hover)]",
                        children: "取消",
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          (n(t.id), d(!1));
                        },
                        className:
                          "flex-1 py-2 bg-[#FF3B30] text-black text-xs font-bold font-mono hover:bg-red-600",
                        children: "丢弃",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  NZ = ({ inventory: t, onCraft: s, onCraftSuccess: n, isProcessing: a }) => {
    const [r, i] = l.useState([]),
      [o, c] = l.useState(null),
      d = (f) => {
        a ||
          (r.find((p) => p.id === f.id)
            ? i((p) => p.filter((m) => m.id !== f.id))
            : r.length < 2 && i((p) => [...p, f]));
      },
      u = async () => {
        if (r.length !== 2) return;
        const f = await s(r[0], r[1]);
        f
          ? (i([]), n && n(f))
          : navigator.vibrate && navigator.vibrate([100, 50, 100]);
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 flex min-h-0 flex-col overflow-hidden pt-24 pb-24",
      children: [
        e.jsxs("div", {
          className:
            "min-h-0 flex-1 overflow-y-auto overscroll-y-contain scrollbar-hide",
          children: [
            e.jsx("div", {
              className: "flex justify-center mb-6",
              children: e.jsx("div", {
                className:
                  "inline-block border border-[var(--e-mint)]/30 px-3 py-1 font-mono text-xs uppercase text-[var(--e-mint)]",
                children: "物质融合协议 V2.0",
              }),
            }),
            e.jsxs("div", {
              className:
                "relative mb-4 flex h-40 items-center justify-center gap-4 px-6",
              children: [
                a &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 z-10 flex items-center justify-center bg-[var(--e-overlay-50)] backdrop-blur-sm",
                    children: e.jsx(Wr, {
                      className: "text-[var(--e-mint)] animate-spin",
                      size: 32,
                    }),
                  }),
                e.jsx("div", {
                  onClick: () => !a && r[0] && c(r[0]),
                  className: `w-20 h-20 border ${r[0] ? "border-[var(--e-mint)] bg-[var(--e-mint)]/5" : "border-[var(--e-line-strong)] border-dashed"} flex items-center justify-center cursor-pointer transition-all`,
                  children: r[0]
                    ? e.jsx("div", {
                        className: "text-3xl",
                        children: r[0].icon,
                      })
                    : e.jsx("span", {
                        className: "text-[#333] text-[9px]",
                        children: "A",
                      }),
                }),
                e.jsx("div", {
                  className: "text-[#333]",
                  children: e.jsx(wp, { size: 16 }),
                }),
                e.jsx("div", {
                  onClick: () => !a && r[1] && c(r[1]),
                  className: `w-20 h-20 border ${r[1] ? "border-[var(--e-mint)] bg-[var(--e-mint)]/5" : "border-[var(--e-line-strong)] border-dashed"} flex items-center justify-center cursor-pointer transition-all`,
                  children: r[1]
                    ? e.jsx("div", {
                        className: "text-3xl",
                        children: r[1].icon,
                      })
                    : e.jsx("span", {
                        className: "text-[#333] text-[9px]",
                        children: "B",
                      }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "mb-6 px-6",
              children: e.jsx("button", {
                onClick: u,
                disabled: r.length !== 2 || a,
                className: `w-full py-3 font-mono text-xs font-bold uppercase tracking-widest border transition-all
                        ${r.length === 2 && !a ? "bg-[var(--e-mint)] text-black border-[var(--e-mint)] hover:bg-white hover:border-[var(--e-contrast)]" : "bg-transparent text-[#333] border-[var(--e-line-strong)] cursor-not-allowed"}`,
                children: a
                  ? "融合进行中..."
                  : r.length === 2
                    ? "启动融合"
                    : "请装载两个素材",
              }),
            }),
            e.jsxs("div", {
              className: "border-t border-[var(--e-line)] px-6 pb-12 pt-4",
              children: [
                e.jsx("h4", {
                  className:
                    "mb-3 font-mono text-[10px] uppercase text-[var(--e-dim)]",
                  children: "可用素材库",
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-4 gap-2",
                  children: [
                    t
                      .filter((f) => f.status === "identified")
                      .map((f) => {
                        const p = r.find((m) => m.id === f.id);
                        return e.jsx(
                          "button",
                          {
                            onClick: () => c(f),
                            className: `aspect-square border flex flex-col items-center justify-center gap-1 transition-all
                                    ${p ? "border-[var(--e-mint)] opacity-50 bg-[var(--e-mint)]/10" : "border-[var(--e-line)] bg-[var(--e-black)] hover:border-[var(--e-line-accent)]"}`,
                            children: e.jsx("span", {
                              className:
                                "text-xl filter grayscale hover:grayscale-0",
                              children: f.icon,
                            }),
                          },
                          f.id,
                        );
                      }),
                    t.filter((f) => f.status === "identified").length === 0 &&
                      e.jsx("div", {
                        className:
                          "col-span-4 py-4 text-center font-mono text-xs text-[#333]",
                        children: "素材库为空",
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            o &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 z-50 flex items-center justify-center bg-[var(--e-overlay-80)] backdrop-blur-sm px-6",
              onClick: () => c(null),
              children: e.jsxs("div", {
                className:
                  "w-full max-w-sm bg-[var(--e-surface)] border border-[var(--e-line-strong)] overflow-hidden",
                onClick: (f) => f.stopPropagation(),
                children: [
                  e.jsxs("div", {
                    className:
                      "p-4 border-b border-[var(--e-line)] flex items-center gap-4",
                    children: [
                      e.jsx("span", {
                        className: "text-4xl",
                        children: o.icon,
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className: "text-[var(--e-contrast)] font-bold",
                            children: o.name,
                          }),
                          e.jsxs("div", {
                            className: "text-[10px] text-[var(--e-muted)]",
                            children: [o.rarity, " 级"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "p-4 max-h-[200px] overflow-y-auto text-xs text-[var(--e-body)] leading-relaxed",
                    children: [
                      o.description,
                      o.origin &&
                        e.jsxs("div", {
                          className: "mt-2 text-[10px] text-[var(--e-muted)]",
                          children: ["来源: ", o.origin],
                        }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "p-4 bg-[var(--e-black)] border-t border-[var(--e-line)]",
                    children: r.find((f) => f.id === o.id)
                      ? e.jsx("button", {
                          onClick: () => {
                            (d(o), c(null));
                          },
                          className:
                            "w-full py-2 border border-[#FF3B30] text-[#FF3B30] font-mono text-xs uppercase hover:bg-[#FF3B30] hover:text-black",
                          children: "移除 (Remove)",
                        })
                      : e.jsx("button", {
                          onClick: () => {
                            r.length < 2 && (d(o), c(null));
                          },
                          disabled: r.length >= 2,
                          className: `w-full py-2 font-mono text-xs uppercase border
                                    ${r.length >= 2 ? "border-[var(--e-line-strong)] text-[var(--e-dim)] cursor-not-allowed" : "border-[var(--e-mint)] text-[var(--e-mint)] hover:bg-[var(--e-mint)] hover:text-black"}`,
                          children: r.length >= 2 ? "槽位已满" : "装载 (Load)",
                        }),
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  };
async function kZ(t, s) {
  const n = Array.isArray(t) ? t.filter(Boolean) : [],
    a = await dS(n),
    r = new Set(
      (s || [])
        .map((o) => String((o == null ? void 0 : o.key) ?? ""))
        .filter(Boolean),
    ),
    i = a.map((o) => ({
      key: o.key,
      bookTitle: o.bookTitle,
      entryTitle: o.title,
      content: o.content,
      include: r.has(o.key),
    }));
  for (const o of s || []) {
    const c = String((o == null ? void 0 : o.key) ?? "");
    !c ||
      i.some((d) => d.key === c) ||
      i.push({
        key: c,
        bookTitle: String(o.bookTitle || "世界观"),
        entryTitle: String(o.entryTitle || "条目"),
        content: typeof o.content == "string" ? o.content : "",
        include: !0,
      });
  }
  return i;
}
const SZ = ({
    inventory: t,
    coins: s,
    onStart: n,
    onResolve: a,
    isProcessing: r,
    saveSandboxState: i,
    loadSandboxState: o,
    expeditionLetingBinding: c,
    saveExpeditionLetingBinding: d,
    expeditionBgmInfo: u,
    expeditionBgmIsPlaying: f,
    toggleExpeditionLetingPlayback: p,
    resetExpeditionLetingAudioUi: m,
    uiScheme: h,
    finalizeExpeditionSettlement: g,
    saveExpeditionArchive: x,
    isFinalizingSettlement: y,
    onExpeditionArchived: v,
  }) => {
    var Jt, Vt, qt, Lt, Qt, js, cs, Ne, Je, St;
    const { contactsPublic: b, user: N, userPresets: w } = vn(),
      [_, A] = l.useState("PREPARE"),
      [k, C] = l.useState([]),
      [M, E] = l.useState([]),
      [S, j] = l.useState("balanced"),
      [T, I] = l.useState(""),
      [L, B] = l.useState([]),
      [F, D] = l.useState({}),
      [$, P] = l.useState(null),
      [z, O] = l.useState(""),
      [Z, K] = l.useState(!1),
      [q, V] = l.useState(!1),
      [ne, le] = l.useState(!1),
      [ie, X] = l.useState(!1),
      [je, xe] = l.useState(!1),
      [ye, R] = l.useState(!1),
      [oe, ee] = l.useState(!1),
      [H, Y] = l.useState(null),
      [U, ce] = l.useState([]),
      [pe, se] = l.useState(null),
      [Te, ke] = l.useState(""),
      [W, ue] = l.useState(!1),
      [re, he] = l.useState(null),
      [ge, J] = l.useState(!1),
      [G, we] = l.useState(null),
      [Q, ve] = l.useState(!0),
      [Ve, Ae] = l.useState(!1),
      te = l.useRef([]),
      Se = l.useRef(0),
      [Fe, $e] = l.useState(null),
      [tt, Xe] = l.useState([]),
      [ht, Pe] = l.useState(null),
      [ut, _t] = l.useState(100),
      [Ee, fe] = l.useState(0),
      [He, Ie] = l.useState({ weather: "clear", atmosphere: "calm" }),
      [Ce, Re] = l.useState([]),
      [De, at] = l.useState([]),
      [ft, vt] = l.useState(!1),
      [Oe, Qe] = l.useState(null),
      [Ye, Ze] = l.useState(null),
      [Ue, me] = l.useState(null),
      [jt, Gt] = l.useState(!1),
      [Pt, Wt] = l.useState(""),
      [ct, Kt] = l.useState(!1),
      [fs, gt] = l.useState(null),
      ae = l.useRef(null);
    (l.useEffect(() => {
      (async () => {
        const Ke = await o();
        Ke && !Ke.expeditionEnded && K(!0);
      })();
    }, []),
      l.useEffect(() => {
        let Be = !1;
        return (
          (async () => {
            if (!M.length) {
              Be || (B([]), D({}));
              return;
            }
            const Ke = await dS(M);
            Be ||
              (B(Ke),
              D((Nt) => {
                const bt = { ...Nt };
                for (const Ge of Ke) bt[Ge.key] === void 0 && (bt[Ge.key] = !0);
                const ns = new Set(Ke.map((Ge) => Ge.key));
                for (const Ge of Object.keys(bt)) ns.has(Ge) || delete bt[Ge];
                return bt;
              }));
          })(),
          () => {
            Be = !0;
          }
        );
      }, [M.join("|")]),
      l.useEffect(() => {
        if (!re) return;
        (Array.isArray(w) ? w : []).some(
          (Ke) => Ke && String(Ke.id) === String(re),
        ) || he(null);
      }, [w, re]),
      l.useEffect(() => {
        const Be = M.length,
          Ke = Se.current;
        (Be > 0 && Ke === 0 && L.length > 0 && ue(!0),
          (Se.current = Be),
          Be === 0 && ue(!1));
      }, [M.length, L.length]));
    const nt = pn.useCallback(
        async (
          Be,
          { contactIds: Ke, activeSnaps: Nt, message: bt, choiceId: ns },
        ) => {
          const Ge = Array.isArray(Ke) && Ke.length ? Ke : M;
          let Le = await kZ(Ge, Nt);
          (!Le.length &&
            Array.isArray(Nt) &&
            Nt.length &&
            (Le = Nt.map((_e) => ({
              key: String(_e.key),
              bookTitle: String(_e.bookTitle || "世界观"),
              entryTitle: String(_e.entryTitle || "条目"),
              content: typeof _e.content == "string" ? _e.content : "",
              include: !0,
            }))),
            ce(Le),
            Y(Be),
            se(ns ?? null),
            ke(bt || "请求失败。"),
            ee(!0));
        },
        [M],
      ),
      It = async () => {
        var Nt, bt, ns, Ge;
        const Be =
            ((Nt = Fe == null ? void 0 : Fe.expeditionCompanions) == null
              ? void 0
              : Nt.map((Le) => Le.id).filter(Boolean)) || M,
          Ke = {
            phase: _,
            selectedItems: k,
            customTheme: z,
            expeditionCompanionIds: Be,
            expeditionTonePresetId:
              ((bt = Fe == null ? void 0 : Fe.expeditionTone) == null
                ? void 0
                : bt.tonePresetId) ?? S,
            expeditionToneCustom:
              ((ns = Fe == null ? void 0 : Fe.expeditionTone) == null
                ? void 0
                : ns.toneCustom) ?? T,
            expeditionUserPresetId:
              _ === "EXPEDITION"
                ? (((Ge = Fe == null ? void 0 : Fe.expeditionPlayerSnapshot) ==
                  null
                    ? void 0
                    : Ge.presetId) ?? null)
                : re,
            session: Fe,
            history: tt,
            currentNode: ht,
            health: ut,
            tension: Ee,
            environment: He,
            statusEffects: Ce,
            discoverables: De,
            expeditionEnded: ft,
            endData: Oe,
            settlementLore: Ye,
            settlementError: Ue,
            expeditionSettlementArchived: ct,
            timestamp: Date.now(),
          };
        await i(Ke);
      },
      Xt = async () => {
        var Ke, Nt, bt, ns, Ge, Le, _e, yt;
        const Be = await o();
        if (Be) {
          (A(Be.phase), C(Be.selectedItems || []));
          const rt = Array.isArray(Be.expeditionCompanionIds)
            ? Be.expeditionCompanionIds
            : ((Nt =
                (Ke = Be.session) == null ? void 0 : Ke.expeditionCompanions) ==
              null
                ? void 0
                : Nt.map((it) => it.id).filter(Boolean)) || [];
          (E(rt),
            j(
              ((ns = (bt = Be.session) == null ? void 0 : bt.expeditionTone) ==
              null
                ? void 0
                : ns.tonePresetId) ||
                Be.expeditionTonePresetId ||
                "balanced",
            ),
            I(
              ((Le = (Ge = Be.session) == null ? void 0 : Ge.expeditionTone) ==
              null
                ? void 0
                : Le.toneCustom) ??
                Be.expeditionToneCustom ??
                "",
            ));
          const ze =
              Be.expeditionUserPresetId ??
              ((yt =
                (_e = Be.session) == null
                  ? void 0
                  : _e.expeditionPlayerSnapshot) == null
                ? void 0
                : yt.presetId) ??
              null,
            lt = Array.isArray(w) ? w : [];
          (ze
            ? lt.length > 0 &&
              !lt.some((it) => it && String(it.id) === String(ze))
              ? he(null)
              : he(String(ze))
            : he(null),
            O(Be.customTheme || ""),
            $e(Be.session),
            Xe(Be.history || []),
            Pe(Be.currentNode),
            _t(Be.health),
            fe(Be.tension),
            Ie(Be.environment),
            Re(Be.statusEffects || []),
            at(Be.discoverables || []),
            vt(Be.expeditionEnded),
            Qe(Be.endData),
            Ze(Be.settlementLore ?? null),
            me(Be.settlementError ?? null),
            Kt(Be.expeditionSettlementArchived === !0),
            ve(!0),
            Ae(!1));
        }
      },
      bs = pn.useMemo(
        () =>
          k.reduce(
            (Be, Ke) => {
              var Nt, bt, ns, Ge;
              return {
                computation:
                  Be.computation +
                  (((Nt = Ke.attributes) == null ? void 0 : Nt.computation) ||
                    0),
                force:
                  Be.force +
                  (((bt = Ke.attributes) == null ? void 0 : bt.force) || 0),
                perception:
                  Be.perception +
                  (((ns = Ke.attributes) == null ? void 0 : ns.perception) ||
                    0),
                stress_resist:
                  Be.stress_resist +
                  (((Ge = Ke.attributes) == null ? void 0 : Ge.stress_resist) ||
                    0),
              };
            },
            { computation: 0, force: 0, perception: 0, stress_resist: 0 },
          ),
        [k],
      ),
      ss = pn.useMemo(() => {
        const Be = M.reduce((Ge, Le) => {
            const _e = (b || []).find((yt) => String(yt.id) === String(Le));
            return (
              Ge +
              (typeof (_e == null ? void 0 : _e.setting) == "string"
                ? _e.setting.length
                : 0)
            );
          }, 0),
          Ke = L.reduce(
            (Ge, Le) =>
              F[Le.key] === !1 ? Ge : Ge + (Le.content || "").length,
            0,
          );
        let Nt = 0;
        if (re) {
          const Ge = (w || []).find((Le) => Le && String(Le.id) === String(re));
          Nt =
            typeof (Ge == null ? void 0 : Ge.settings) == "string"
              ? Ge.settings.length
              : 0;
        } else
          Nt =
            typeof (N == null ? void 0 : N.settings) == "string"
              ? N.settings.length
              : 0;
        const bt = Be + Ke + Nt + 2800,
          ns = Math.ceil(bt / 1.8);
        return {
          personaChars: Be,
          wbChars: Ke,
          playerSettingChars: Nt,
          approxTokens: ns,
        };
      }, [M, b, L, F, re, w, N == null ? void 0 : N.settings]);
    l.useEffect(() => {
      var Be;
      (Be = ae.current) == null || Be.scrollIntoView({ behavior: "smooth" });
    }, [tt, r, Oe, Ue, y, jt, ct]);
    const _s = pn.useCallback(async () => {
        if (!(!Fe || !Oe || ct) && !jt) {
          (Gt(!0), me(null), Wt(""));
          try {
            let Be = Ye;
            if (!Be) {
              const Nt = await g({ session: Fe, history: tt, endPayload: Oe });
              if (!Nt.success) {
                me(Nt.message || "结算生成失败");
                return;
              }
              ((Be = Nt.settlement_lore), Ze(Be));
            }
            const Ke = await x({
              session: Fe,
              history: tt,
              endData: Oe,
              settlementLore: Be,
              archiveScope: "full",
              includeTruth: !0,
              includeHooks: !0,
              includeBoss: !0,
              selectedNpcIds: null,
            });
            if (!Ke.success) {
              me(Ke.message || "写入结算库失败");
              return;
            }
            (Ze(null),
              me(null),
              Kt(!0),
              Wt("已切换至结算"),
              v == null || v(Ke.archive.id),
              await It());
          } finally {
            Gt(!1);
          }
          setTimeout(() => Wt(""), 2800);
        }
      }, [Fe, Oe, Ye, ct, jt, g, x, tt, v, It]),
      qs = pn.useCallback(() => {
        (me(null), _s());
      }, [_s]);
    l.useEffect(() => {
      (ve(!0), Ae(!1));
    }, [ht == null ? void 0 : ht.title]);
    const Bs = (Be) => {
        (k.find((Ke) => Ke.id === Be.id)
          ? C((Ke) => Ke.filter((Nt) => Nt.id !== Be.id))
          : k.length < 3 && C((Ke) => [...Ke, Be]),
          P(null));
      },
      Js = async (Be) => {
        var Nt, bt, ns, Ge;
        if (k.length === 0) return { ok: !1 };
        if (z && s < 50) return { ok: !1 };
        (A("EXPEDITION"),
          _t(100),
          Xe([]),
          Pe(null),
          vt(!1),
          Qe(null),
          Ze(null),
          me(null),
          Kt(!1),
          Re([]),
          at([]),
          fe(0),
          J(!1),
          ve(!0),
          Ae(!1),
          (te.current = Be));
        const Ke = await n(k, z, {
          companionContactIds: M,
          tonePresetId: S,
          toneCustom: T,
          expeditionWorldbookSnapshots: Be,
          expeditionUserPresetId: re,
        });
        if (Ke.success && Ke.session) {
          ($e(Ke.session),
            Pe(Ke.session.node),
            Ke.session.tension !== void 0 && fe(Ke.session.tension),
            Ke.session.environment && Ie(Ke.session.environment),
            Xe([{ type: "node", data: Ke.session.node }]),
            J(!0));
          const Le = {
            phase: "EXPEDITION",
            selectedItems: k,
            customTheme: z,
            expeditionCompanionIds:
              ((Nt = Ke.session.expeditionCompanions) == null
                ? void 0
                : Nt.map((_e) => _e.id).filter(Boolean)) || [],
            expeditionTonePresetId:
              ((bt = Ke.session.expeditionTone) == null
                ? void 0
                : bt.tonePresetId) ?? S,
            expeditionToneCustom:
              ((ns = Ke.session.expeditionTone) == null
                ? void 0
                : ns.toneCustom) ?? T,
            expeditionUserPresetId:
              ((Ge = Ke.session.expeditionPlayerSnapshot) == null
                ? void 0
                : Ge.presetId) ??
              re ??
              null,
            session: Ke.session,
            history: [{ type: "node", data: Ke.session.node }],
            currentNode: Ke.session.node,
            health: 100,
            tension: Ke.session.tension || 0,
            environment: Ke.session.environment,
            statusEffects: [],
            discoverables: [],
            expeditionEnded: !1,
            endData: null,
            expeditionSettlementArchived: !1,
            timestamp: Date.now(),
          };
          return (
            await i(Le),
            K(!0),
            ee(!1),
            Y(null),
            ce([]),
            se(null),
            ke(""),
            { ok: !0 }
          );
        }
        return (
          A("PREPARE"),
          nt("start", {
            contactIds: M,
            activeSnaps: te.current,
            message:
              (Ke == null ? void 0 : Ke.message) ||
              "时空乱流干扰了信号，远征未能成行。",
          }),
          { ok: !1 }
        );
      },
      Xs = async () => {
        const Be = L.filter((Ke) => F[Ke.key] !== !1).map((Ke) => ({
          key: Ke.key,
          bookTitle: Ke.bookTitle,
          entryTitle: Ke.title,
          content: Ke.content,
        }));
        await Js(Be);
      },
      gn = async () => {
        const Be = U.filter((Nt) => Nt.include !== !1).map(
            ({ include: Nt, ...bt }) => ({
              key: bt.key,
              bookTitle: bt.bookTitle,
              entryTitle: bt.entryTitle,
              content: bt.content,
            }),
          ),
          Ke = new Map(U.map((Nt) => [Nt.key, Nt.include !== !1]));
        (D((Nt) => {
          const bt = { ...Nt };
          for (const ns of L) bt[ns.key] = Ke.has(ns.key) ? Ke.get(ns.key) : !1;
          return bt;
        }),
          ee(!1),
          await Js(Be));
      },
      sn = () => {
        Z ? V(!0) : Xs();
      },
      ln = () => {
        X(!0);
      },
      rn = () => {
        (A("PREPARE"), X(!1), J(!1), we(null), ve(!0), Ae(!1), Kt(!1), m());
      },
      wt = async (Be, Ke) => {
        var ns, Ge;
        if (r || ft) return { ok: !1 };
        const Nt =
          (ns = Be.node.options.find((Le) => Le.id === Ke)) == null
            ? void 0
            : ns.text;
        (Xe((Le) => [...Le, { type: "choice", text: Nt }]), Pe(null));
        const bt = await a(Be, Ke);
        if (bt.success && bt.data) {
          const Le = bt.data;
          if (Le.resolution) {
            Xe((rt) => [...rt, { type: "resolution", data: Le.resolution }]);
            const yt = Math.min(
              100,
              Math.max(0, ut + (Le.resolution.health_change || 0)),
            );
            (_t(yt),
              Le.resolution.status_effect &&
                Re((rt) => {
                  const ze = rt.find(
                    (lt) => lt.name === Le.resolution.status_effect.name,
                  );
                  return ze
                    ? rt.map((lt) =>
                        lt.name === ze.name
                          ? {
                              ...lt,
                              duration: Le.resolution.status_effect.duration,
                            }
                          : lt,
                      )
                    : [...rt, Le.resolution.status_effect];
                }),
              Le.resolution.discoverable &&
                at((rt) =>
                  rt.find((ze) => ze.name === Le.resolution.discoverable.name)
                    ? rt
                    : [...rt, Le.resolution.discoverable],
                ));
          }
          (Le.tension !== void 0 && fe(Le.tension),
            Le.environment && Ie(Le.environment),
            Re((yt) =>
              yt
                .map((rt) => ({ ...rt, duration: rt.duration - 1 }))
                .filter((rt) => rt.duration > 0),
            ));
          const _e = Math.min(
            100,
            Math.max(
              0,
              ut +
                (((Ge = Le.resolution) == null ? void 0 : Ge.health_change) ||
                  0),
            ),
          );
          if (Le.is_end || _e <= 0)
            (vt(!0), Qe(Le), Ze(null), me(null), Kt(!1), await i(null), K(!1));
          else {
            const yt = {
              ...Be,
              node: Le.next_node,
              currentNodeIndex: Be.currentNodeIndex + 1,
              quest:
                Be.quest &&
                typeof Le.quest_phase_note == "string" &&
                Le.quest_phase_note.trim()
                  ? {
                      ...Be.quest,
                      phase_note: Le.quest_phase_note.trim().slice(0, 400),
                    }
                  : Be.quest,
            };
            ($e(yt),
              Pe(Le.next_node),
              Xe((rt) => [...rt, { type: "node", data: Le.next_node }]));
          }
          return (ee(!1), Y(null), ce([]), se(null), ke(""), { ok: !0 });
        }
        return (
          Xe((Le) => Le.slice(0, -1)),
          Pe(Be.node),
          nt("resolve", {
            contactIds: (Be.expeditionCompanions || [])
              .map((Le) => Le.id)
              .filter(Boolean),
            activeSnaps: Be.expeditionWorldbookSnapshots,
            message:
              (bt == null ? void 0 : bt.message) ||
              "时空乱流干扰了信号，节点推进失败。",
            choiceId: Ke,
          }),
          { ok: !1 }
        );
      },
      xs = async (Be) => {
        r || ft || (await wt(Fe, Be));
      },
      ot = async () => {
        if (H !== "resolve" || !pe || !Fe) return;
        const Be = U.filter((Nt) => Nt.include !== !1).map(
            ({ include: Nt, ...bt }) => bt,
          ),
          Ke = { ...Fe, expeditionWorldbookSnapshots: Be };
        ($e(Ke), ee(!1), await wt(Ke, pe));
      },
      st = e.jsx(dg, {
        open: je,
        onClose: () => xe(!1),
        binding: c,
        onSave: d,
        variant: "echo",
        echoUiScheme: h,
        rootPosition: "absolute",
        sheetTitle: "配乐链路绑定",
        sheetDescription:
          "在乐听中选择本机或网易云歌单作为音源池。绑定后各节点由 AI 从池内选曲并由乐听输出；未绑定则不建立曲库上行、保持静默。",
      }),
      $t = e.jsx(Os, {
        children:
          oe &&
          e.jsx(We.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-[220] flex items-center justify-center bg-[var(--e-overlay-90)] backdrop-blur-sm px-4 py-8",
            children: e.jsxs("div", {
              className:
                "flex h-auto max-h-[85vh] w-full max-w-md flex-col overflow-hidden border border-[#FF9500]/50 bg-[var(--e-raised)] shadow-[0_0_40px_rgba(255,149,0,0.12)]",
              children: [
                e.jsx("div", {
                  className:
                    "border-b border-[var(--e-line-strong)] px-4 py-3 font-mono text-xs uppercase tracking-widest text-[#FF9500]",
                  children: "远征信号过载 · 减载重试",
                }),
                e.jsx("div", {
                  className:
                    "border-b border-[var(--e-line)] px-4 py-2 font-mono text-[10px] text-[var(--e-soft)]",
                  children: Te,
                }),
                e.jsx("div", {
                  className:
                    "px-4 py-2 font-mono text-[9px] leading-relaxed text-[var(--e-muted)]",
                  children:
                    H === "start"
                      ? "可取消勾选部分世界书条目以降低上下文长度，然后点击下方「重新生成」。若无世界书，多为网络或模型限制，也可直接重试。"
                      : "取消勾选部分世界书条目后，重新推演你刚才选择的行动。",
                }),
                e.jsx("div", {
                  className:
                    "min-h-0 flex-1 space-y-2 overflow-y-auto overscroll-y-contain px-4 py-2 scrollbar-hide",
                  children:
                    U.length === 0
                      ? e.jsx("p", {
                          className:
                            "font-mono text-[10px] leading-relaxed text-[var(--e-muted)]",
                          children:
                            "本局未附带世界书条目。若反复失败，请检查 API 或稍后在准备页减少同行设定量。",
                        })
                      : U.map((Be) =>
                          e.jsxs(
                            "label",
                            {
                              className:
                                "flex cursor-pointer items-start gap-2 rounded border border-[var(--e-line)] bg-[var(--e-overlay-60)] p-2 font-mono text-[9px] text-[var(--e-body)]",
                              children: [
                                e.jsx("input", {
                                  type: "checkbox",
                                  className: "mt-0.5 shrink-0 accent-[#FF9500]",
                                  checked: Be.include !== !1,
                                  onChange: () =>
                                    ce((Ke) =>
                                      Ke.map((Nt) =>
                                        Nt.key === Be.key
                                          ? {
                                              ...Nt,
                                              include: Nt.include === !1,
                                            }
                                          : Nt,
                                      ),
                                    ),
                                }),
                                e.jsxs("span", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-[var(--e-cyan)]/80",
                                      children: Be.bookTitle,
                                    }),
                                    e.jsx("span", {
                                      className: "text-[var(--e-mid)]",
                                      children: " / ",
                                    }),
                                    Be.entryTitle,
                                  ],
                                }),
                              ],
                            },
                            Be.key,
                          ),
                        ),
                }),
                e.jsxs("div", {
                  className: "flex gap-2 border-t border-[var(--e-line)] p-3",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => {
                        (ee(!1), Y(null), ce([]), se(null), ke(""));
                      },
                      className:
                        "flex-1 border border-[var(--e-line-accent)] py-2 font-mono text-xs text-[var(--e-soft)] hover:border-[var(--e-muted)] hover:text-[var(--e-body)]",
                      children: "关闭",
                    }),
                    H === "start" &&
                      e.jsx("button", {
                        type: "button",
                        onClick: () => void gn(),
                        className:
                          "flex-1 bg-[var(--e-cyan)] py-2 font-mono text-xs font-bold text-black hover:bg-white",
                        children: "重新生成",
                      }),
                    H === "resolve" &&
                      e.jsx("button", {
                        type: "button",
                        onClick: () => void ot(),
                        className:
                          "flex-1 bg-[var(--e-cyan)] py-2 font-mono text-xs font-bold text-black hover:bg-white",
                        children: "重新生成",
                      }),
                  ],
                }),
              ],
            }),
          }),
      }),
      Ft = e.jsx(Os, {
        children:
          W &&
          e.jsx(We.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-[215] flex items-end justify-center bg-[var(--e-overlay-80)] backdrop-blur-sm sm:items-center sm:px-4",
            onClick: () => ue(!1),
            children: e.jsxs(We.div, {
              initial: { y: 48, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: 48, opacity: 0 },
              transition: { type: "spring", damping: 28, stiffness: 320 },
              onClick: (Be) => Be.stopPropagation(),
              className:
                "flex max-h-[82vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-[#00FFFF]/30 bg-[var(--e-raised-tint)] shadow-[0_-12px_48px_rgba(0,0,0,0.55)] sm:rounded-2xl",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between border-b border-[var(--e-line)] px-4 py-3",
                  children: [
                    e.jsx("span", {
                      className:
                        "font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--e-cyan)]",
                      children: "世界书条目",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => ue(!1),
                      className:
                        "rounded p-1.5 text-[var(--e-muted)] hover:bg-[var(--e-white-5-hover)] hover:text-[var(--e-contrast)]",
                      "aria-label": "关闭",
                      children: e.jsx(Ts, { size: 18 }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-3 scrollbar-hide",
                  children: M.length
                    ? L.length === 0
                      ? e.jsx("p", {
                          className:
                            "font-mono text-[10px] leading-relaxed text-[var(--e-muted)]",
                          children:
                            "暂无绑定到这些联系人的世界书或条目为空。可在「世界书」App 中绑定并添加条目。",
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("div", {
                              className: "mb-2 flex justify-end gap-1",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () =>
                                    D(
                                      Object.fromEntries(
                                        L.map((Be) => [Be.key, !0]),
                                      ),
                                    ),
                                  className:
                                    "rounded border border-[var(--e-line-strong)] px-2 py-0.5 text-[8px] text-[var(--e-soft)] hover:border-[var(--e-cyan)] hover:text-[var(--e-cyan)]",
                                  children: "全选",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () =>
                                    D(
                                      Object.fromEntries(
                                        L.map((Be) => [Be.key, !1]),
                                      ),
                                    ),
                                  className:
                                    "rounded border border-[var(--e-line-strong)] px-2 py-0.5 text-[8px] text-[var(--e-soft)] hover:border-[#FF9500] hover:text-[#FF9500]",
                                  children: "全不选",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "space-y-2",
                              children: L.map((Be) => {
                                const Ke = F[Be.key] !== !1;
                                return e.jsxs(
                                  "label",
                                  {
                                    className:
                                      "flex cursor-pointer items-start gap-2 rounded-md border border-[var(--e-line)] bg-[var(--e-overlay-50)] p-2.5 font-mono text-[9px] text-[var(--e-body)] hover:border-[var(--e-line-strong)]",
                                    children: [
                                      e.jsx("input", {
                                        type: "checkbox",
                                        className:
                                          "mt-0.5 shrink-0 accent-[var(--e-cyan)]",
                                        checked: Ke,
                                        onChange: () =>
                                          D((Nt) => ({ ...Nt, [Be.key]: !Ke })),
                                      }),
                                      e.jsxs("span", {
                                        className: "min-w-0",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-[var(--e-cyan)]/90",
                                            children: Be.bookTitle,
                                          }),
                                          e.jsx("span", {
                                            className: "text-[var(--e-mid)]",
                                            children: " / ",
                                          }),
                                          e.jsx("span", { children: Be.title }),
                                          Be.content
                                            ? e.jsx("span", {
                                                className:
                                                  "mt-1 block line-clamp-2 text-[var(--e-muted)]",
                                                title: Be.content,
                                                children: Be.content,
                                              })
                                            : null,
                                        ],
                                      }),
                                    ],
                                  },
                                  Be.key,
                                );
                              }),
                            }),
                            e.jsxs("p", {
                              className: `mt-3 font-mono text-[9px] leading-relaxed ${ss.approxTokens > 1e4 ? "text-[#FF9500]" : "text-[var(--e-mid)]"}`,
                              children: [
                                "粗算上下文：约 ",
                                e.jsx("span", {
                                  className: "text-[var(--e-body)]",
                                  children: ss.approxTokens,
                                }),
                                " ",
                                "tokens（同行人设",
                                ss.personaChars,
                                " 字 + 本人设定 ",
                                ss.playerSettingChars,
                                " 字 + 勾选世界书 ",
                                ss.wbChars,
                                " 字 + 模板余量）。",
                                ss.approxTokens > 12e3
                                  ? " 体量较大，生成可能失败。"
                                  : "",
                              ],
                            }),
                          ],
                        })
                    : e.jsx("p", {
                        className:
                          "font-mono text-[10px] leading-relaxed text-[var(--e-muted)]",
                        children: "请先选择至少一位同行者。",
                      }),
                }),
                e.jsx("div", {
                  className: "border-t border-[var(--e-line)] p-3",
                  children: e.jsx("button", {
                    type: "button",
                    onClick: () => ue(!1),
                    className:
                      "w-full bg-[var(--e-cyan)] py-3 font-mono text-sm font-bold text-black hover:bg-white",
                    children: "完成",
                  }),
                }),
              ],
            }),
          }),
      }),
      es = e.jsx(Os, {
        children:
          ge &&
          (Fe == null ? void 0 : Fe.quest) &&
          e.jsx(We.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-[225] flex items-end justify-center bg-[var(--e-overlay-85)] backdrop-blur-sm sm:items-center sm:px-4",
            onClick: () => J(!1),
            children: e.jsxs(We.div, {
              initial: { y: 44, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: 44, opacity: 0 },
              transition: { type: "spring", damping: 26, stiffness: 320 },
              onClick: (Be) => Be.stopPropagation(),
              className:
                "mx-auto flex max-h-[min(85dvh,560px)] w-full max-w-md flex-col overflow-hidden rounded-t-2xl border border-[#FF9500]/35 bg-[var(--e-raised)] shadow-[0_0_48px_rgba(255,149,0,0.12)] sm:rounded-2xl",
              children: [
                e.jsxs("div", {
                  className: "border-b border-[var(--e-line-strong)] px-4 py-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[9px] font-mono uppercase tracking-[0.25em] text-[#FF9500]/90",
                      children: "副本主线 · 信号同步",
                    }),
                    e.jsx("h3", {
                      className:
                        "mt-1 font-mono text-base font-bold leading-snug text-[var(--e-primary)]",
                      children: Fe.quest.headline,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-y-contain px-4 py-3 scrollbar-hide",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className:
                            "mb-1 text-[9px] font-mono uppercase tracking-wider text-[var(--e-muted)]",
                          children: "目标",
                        }),
                        e.jsx("p", {
                          className:
                            "font-mono text-xs leading-relaxed text-[var(--e-body)]",
                          children: Fe.quest.objective,
                        }),
                      ],
                    }),
                    Fe.quest.stakes_if_fail
                      ? e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className:
                                "mb-1 text-[9px] font-mono uppercase tracking-wider text-[var(--e-muted)]",
                              children: "失败代价",
                            }),
                            e.jsx("p", {
                              className:
                                "font-mono text-xs leading-relaxed text-[#FF9500]/85",
                              children: Fe.quest.stakes_if_fail,
                            }),
                          ],
                        })
                      : null,
                    Fe.quest.phase_note
                      ? e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className:
                                "mb-1 text-[9px] font-mono uppercase tracking-wider text-[var(--e-muted)]",
                              children: "当前阶段",
                            }),
                            e.jsx("p", {
                              className:
                                "font-mono text-xs leading-relaxed text-[var(--e-soft)]",
                              children: Fe.quest.phase_note,
                            }),
                          ],
                        })
                      : null,
                    e.jsx("p", {
                      className:
                        "border-t border-[var(--e-line)] pt-3 font-mono text-[9px] leading-relaxed text-[var(--e-mid)]",
                      children:
                        "副本中的陌生人物与势力仅在剧情里逐步露面，此处不剧透。",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "border-t border-[var(--e-line)] p-3",
                  children: e.jsx("button", {
                    type: "button",
                    onClick: () => J(!1),
                    className:
                      "w-full bg-[#FF9500] py-3 font-mono text-xs font-bold uppercase tracking-widest text-black hover:bg-white",
                    children: "已知悉",
                  }),
                }),
              ],
            }),
          }),
      }),
      At = (() => {
        const Be = G == null ? void 0 : G.npc,
          Ke = Be ? z4(Be.role_tag) : !1,
          Nt =
            Be && Array.isArray(Be.eerie_echoes)
              ? Be.eerie_echoes.filter(Boolean)
              : [],
          bt =
            Be && !Ke
              ? [
                  { k: "立场", v: Be.stance },
                  { k: "身份标签", v: Be.role_tag },
                  { k: "第一眼印象", v: Be.signal_sketch },
                  { k: "此刻在忙什么", v: Be.agenda_one_line },
                ].filter((Ge) => Ge.v != null && String(Ge.v).trim() !== "")
              : [],
          ns =
            Ke &&
            Be &&
            (String(Be.signal_sketch || "").trim() ||
              Nt.length > 0 ||
              String(Be.voice_register || "").trim() ||
              String(Be.demeanor_one_line || "").trim());
        return e.jsx(Os, {
          children:
            Be &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "fixed inset-0 z-[226] flex items-end justify-center bg-[var(--e-overlay-85)] backdrop-blur-sm sm:items-center sm:px-4",
              onClick: () => we(null),
              children: e.jsxs(We.div, {
                initial: { y: 44, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 44, opacity: 0 },
                transition: { type: "spring", damping: 26, stiffness: 320 },
                onClick: (Ge) => Ge.stopPropagation(),
                className: `mx-auto flex max-h-[min(85dvh,620px)] w-full max-w-md flex-col overflow-hidden rounded-t-2xl border bg-[var(--e-raised)] shadow-[0_0_40px_rgba(0,255,255,0.1)] sm:rounded-2xl ${Ke ? "border-[#FF3B30]/35 shadow-[0_0_36px_rgba(255,59,48,0.08)]" : "border-[#00FFFF]/35"}`,
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-start justify-between gap-3 border-b border-[var(--e-line-strong)] px-4 py-3",
                    children: [
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("div", {
                            className: `text-[9px] font-mono uppercase tracking-[0.25em] ${Ke ? "text-[#FF3B30]/90" : "text-[var(--e-cyan)]/90"}`,
                            children: Ke
                              ? "威胁体 · 删节信道"
                              : "现场人物 · 简录",
                          }),
                          e.jsx("h3", {
                            className:
                              "mt-1 truncate font-mono text-base font-bold leading-snug text-[var(--e-primary)]",
                            children: Be.call_name || "未命名",
                          }),
                          G.nodeTitle
                            ? e.jsxs("div", {
                                className:
                                  "mt-1 truncate font-mono text-[9px] text-[var(--e-mid)]",
                                children: ["节点「", G.nodeTitle, "」"],
                              })
                            : null,
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => we(null),
                        className:
                          "shrink-0 rounded border border-[var(--e-line-strong)] p-1.5 text-[var(--e-muted)] transition hover:border-[var(--e-cyan)]/50 hover:text-[var(--e-cyan)]",
                        "aria-label": "关闭",
                        children: e.jsx(Ts, { size: 16 }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-y-contain px-4 py-3 scrollbar-hide font-mono text-xs leading-relaxed",
                    children: Ke
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("p", {
                              className:
                                "border-l-2 border-[var(--e-cyan)]/35 pl-2.5 text-[10px] leading-relaxed text-[var(--e-mid)]",
                              children:
                                "以下仅为噪声里截获的诱饵与碎片，完整威胁图谱不可在此信道解析；执念与隐秘互动请读正文肌理。",
                            }),
                            Be.signal_sketch
                              ? e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "mb-1 text-[9px] uppercase tracking-wider text-[var(--e-muted)]",
                                      children: "表层触影",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "whitespace-pre-wrap text-[var(--e-body)]",
                                      children: Be.signal_sketch,
                                    }),
                                  ],
                                })
                              : null,
                            Nt.length > 0
                              ? e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "mb-1.5 text-[9px] uppercase tracking-wider text-[var(--e-muted)]",
                                      children: "杂音碎片",
                                    }),
                                    e.jsx("ul", {
                                      className: "list-none space-y-2",
                                      children: Nt.map((Ge, Le) =>
                                        e.jsxs(
                                          "li",
                                          {
                                            className:
                                              "border-l border-[var(--e-line-strong)] pl-2.5 text-[var(--e-body)]",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "mr-1.5 font-mono text-[9px] text-[var(--e-cyan)]/45",
                                                children: String(
                                                  Le + 1,
                                                ).padStart(2, "0"),
                                              }),
                                              Ge,
                                            ],
                                          },
                                          `${Le}-${Ge.slice(0, 8)}`,
                                        ),
                                      ),
                                    }),
                                  ],
                                })
                              : null,
                            Be.voice_register
                              ? e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "mb-1 text-[9px] uppercase tracking-wider text-[var(--e-muted)]",
                                      children: "声纹残影",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "whitespace-pre-wrap text-[var(--e-body)]",
                                      children: Be.voice_register,
                                    }),
                                  ],
                                })
                              : null,
                            Be.demeanor_one_line
                              ? e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "mb-1 text-[9px] uppercase tracking-wider text-[var(--e-muted)]",
                                      children: "气质裂隙",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "whitespace-pre-wrap text-[var(--e-body)]",
                                      children: Be.demeanor_one_line,
                                    }),
                                  ],
                                })
                              : null,
                            ns
                              ? null
                              : e.jsx("p", {
                                  className: "text-[var(--e-mid)]",
                                  children: "信号过弱，只余正文里的影子……",
                                }),
                          ],
                        })
                      : bt.length
                        ? bt.map((Ge) =>
                            e.jsxs(
                              "div",
                              {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "mb-1 text-[9px] uppercase tracking-wider text-[var(--e-muted)]",
                                    children: Ge.k,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "whitespace-pre-wrap text-[var(--e-body)]",
                                    children: String(Ge.v),
                                  }),
                                ],
                              },
                              Ge.k,
                            ),
                          )
                        : e.jsx("p", {
                            className: "text-[var(--e-mid)]",
                            children: "暂无简录，细节见正文剧情。",
                          }),
                  }),
                  e.jsx("div", {
                    className: "border-t border-[var(--e-line)] p-3",
                    children: e.jsx("button", {
                      type: "button",
                      onClick: () => we(null),
                      className:
                        "w-full bg-[var(--e-cyan)] py-3 font-mono text-xs font-bold uppercase tracking-widest text-black hover:bg-white",
                      children: "关闭",
                    }),
                  }),
                ],
              }),
            }),
        });
      })();
    return _ === "PREPARE"
      ? e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              className:
                "absolute inset-0 flex min-h-0 flex-col overflow-hidden bg-[var(--e-page)] pt-24 pb-24",
              children: [
                e.jsxs("div", {
                  className:
                    "min-h-0 flex-1 overflow-y-auto overscroll-y-contain scrollbar-hide",
                  children: [
                    e.jsx("div", {
                      className: "flex justify-center mb-4",
                      children: e.jsx("div", {
                        className:
                          "inline-block border border-[#00FFFF]/30 px-3 py-1 font-mono text-xs uppercase text-[var(--e-cyan)]",
                        children: "因果律沙盘：远征协议",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "px-6 mb-4",
                      children: [
                        e.jsxs("div", {
                          className:
                            "text-[10px] text-[var(--e-dim)] font-mono uppercase mb-2 flex justify-between",
                          children: [
                            e.jsx("span", { children: "时空坐标锚定" }),
                            e.jsx("span", {
                              className:
                                z && s < 50
                                  ? "text-[#FF3B30]"
                                  : "text-[var(--e-muted)]",
                              children: "消耗: 50 PTS",
                            }),
                          ],
                        }),
                        e.jsx("input", {
                          type: "text",
                          value: z,
                          onChange: (Be) => O(Be.target.value),
                          placeholder:
                            "输入指定主题 (如: 中世纪丧尸) - 为空则随机",
                          className:
                            "w-full bg-[var(--e-surface)] border border-[var(--e-line-strong)] p-3 text-xs text-[var(--e-primary)] placeholder-[var(--e-dim)] font-mono focus:border-[var(--e-cyan)] focus:outline-none transition-colors",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "px-6 mb-4",
                      children: e.jsxs("div", {
                        className:
                          "bg-[var(--e-surface)] border border-[var(--e-line-strong)] p-3 font-mono text-[10px]",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[var(--e-muted)] mb-2 uppercase border-b border-[var(--e-line)] pb-1",
                            children: "预计小队总属性",
                          }),
                          e.jsxs("div", {
                            className:
                              "grid grid-cols-2 gap-2 text-[var(--e-body)]",
                            children: [
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsx("span", { children: "算力 (COMP):" }),
                                  " ",
                                  e.jsx("span", {
                                    className: "text-[var(--e-cyan)]",
                                    children: bs.computation,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsx("span", { children: "武力 (FORC):" }),
                                  " ",
                                  e.jsx("span", {
                                    className: "text-[#FF3B30]",
                                    children: bs.force,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsx("span", { children: "感知 (PERC):" }),
                                  " ",
                                  e.jsx("span", {
                                    className: "text-[var(--e-mint)]",
                                    children: bs.perception,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between",
                                children: [
                                  e.jsx("span", { children: "抗压 (STRS):" }),
                                  " ",
                                  e.jsx("span", {
                                    className: "text-[var(--e-primary)]",
                                    children: bs.stress_resist,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className: "flex justify-center gap-4 px-6 mb-6",
                      children: [0, 1, 2].map((Be) => {
                        const Ke = k[Be];
                        return e.jsx(
                          "div",
                          {
                            onClick: () => Ke && P(Ke),
                            className: `w-16 h-16 border flex flex-col items-center justify-center cursor-pointer transition-colors ${Ke ? "border-[#00FFFF] bg-[var(--e-cyan)]/10" : "border-[var(--e-line-strong)] border-dashed bg-[var(--e-raised)]"}`,
                            children: Ke
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx("span", {
                                      className: "text-2xl mb-1",
                                      children: Ke.icon,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[8px] text-[var(--e-cyan)] truncate w-full text-center px-1 font-mono",
                                      children: Ke.name,
                                    }),
                                  ],
                                })
                              : e.jsxs("span", {
                                  className:
                                    "text-[10px] text-[var(--e-dim)] font-mono",
                                  children: ["SLOT ", Be + 1],
                                }),
                          },
                          Be,
                        );
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "px-6 mb-4 overflow-hidden rounded-sm border border-[var(--e-line-warm)] bg-gradient-to-br from-[var(--e-grad-from)] via-[var(--e-canvas)] to-[var(--e-grad-end)] shadow-[inset_0_1px_0_var(--e-scan-tint)] transition-all hover:border-[var(--e-cyan)]/30",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => xe(!0),
                          className: "group w-full px-4 py-3 text-left",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[9px] font-mono uppercase tracking-[0.28em] text-[var(--e-cyan)]/55 group-hover:text-[var(--e-cyan)]/85",
                              children: "乐听 · 配乐",
                            }),
                            e.jsx("div", {
                              className:
                                "mt-1 text-[11px] font-mono text-[var(--e-soft)] leading-snug group-hover:text-[var(--e-body)]",
                              children: c
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("span", {
                                        className: "text-[var(--e-cyan)]/90",
                                        children: "已绑定",
                                      }),
                                      " ",
                                      e.jsx("span", {
                                        className: "text-[var(--e-body)]",
                                        children: c.playlistName,
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "mt-0.5 block text-[10px] text-[var(--e-mid)]",
                                        children: [
                                          c.source === "netease"
                                            ? "网易云"
                                            : "本机",
                                          " · 点击更换",
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsx("span", {
                                    className: "text-[var(--e-muted)]",
                                    children: "未绑定 · 点此处选择歌单",
                                  }),
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => R((Be) => !Be),
                          className:
                            "flex w-full items-center justify-center gap-1 border-t border-[var(--e-line)] py-1.5 font-mono text-[9px] uppercase tracking-wider text-[var(--e-mid)] transition hover:bg-[var(--e-overlay-40)] hover:text-[var(--e-soft)]",
                          "aria-expanded": ye,
                          children: [
                            "协议说明",
                            e.jsx(aa, {
                              className: `h-3 w-3 transition-transform ${ye ? "rotate-180" : ""}`,
                              strokeWidth: 2,
                            }),
                          ],
                        }),
                        e.jsx(Os, {
                          initial: !1,
                          children:
                            ye &&
                            e.jsx(We.div, {
                              initial: { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: { height: 0, opacity: 0 },
                              transition: { duration: 0.2 },
                              className:
                                "overflow-hidden border-t border-[var(--e-line)]",
                              children: e.jsx("p", {
                                className:
                                  "px-4 py-2.5 font-mono text-[9px] leading-relaxed text-[var(--e-muted)]",
                                children:
                                  "绑定后各节点由 AI 从歌单池内选曲并由乐听播放；未绑定则不向模型提供曲库、远征内无配乐生成。",
                              }),
                            }),