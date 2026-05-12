            e.jsx("div", {
              className:
                "pointer-events-none absolute right-[20%] top-[45%] opacity-60",
              style: {
                animation: "twinkle 4s ease-in-out infinite 1s",
                color: us.line,
              },
              children: e.jsx(Xn, {
                className:
                  "h-[clamp(0.5rem,2.5cqw,0.75rem)] w-[clamp(0.5rem,2.5cqw,0.75rem)]",
                strokeWidth: 1.5,
              }),
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute right-[30%] top-[18%] opacity-40",
              style: {
                animation: "twinkle 3.5s ease-in-out infinite 0.5s",
                color: us.accent,
              },
              children: e.jsx(zn, {
                className:
                  "h-[clamp(0.55rem,3cqw,0.85rem)] w-[clamp(0.55rem,3cqw,0.85rem)]",
                strokeWidth: 1.5,
              }),
            }),
            e.jsxs("div", {
              className: `relative z-20 flex min-h-0 flex-1 flex-col items-center justify-center transition-all delay-300 duration-1000 ${v ? "-mt-[2.5cqh] min-h-0 justify-start pb-[calc(env(safe-area-inset-bottom,0px)+clamp(7.5rem,30cqh,10rem))] pt-[clamp(0.25rem,1.5cqh,0.75rem)]" : "-mt-[4.74cqh] justify-center"} ${T ? "scale-100 opacity-100" : "scale-95 opacity-0"} ${R ? "pointer-events-none" : ""}`,
              children: [
                e.jsxs("div", {
                  className: `relative mt-[1.9cqh] flex items-center justify-center gap-[8.21cqw] transition-transform duration-700 ease-out ${v ? "translate-y-[90px]" : ""}`,
                  style: v
                    ? void 0
                    : { animation: "float 7s ease-in-out infinite" },
                  children: [
                    e.jsx("div", {
                      className:
                        "pointer-events-none absolute left-1/2 top-[60%] -z-10 h-[3.555cqh] w-[41.026cqw] -translate-x-1/2 -translate-y-1/2 opacity-60",
                      children: e.jsx("svg", {
                        viewBox: "0 0 160 30",
                        fill: "none",
                        strokeWidth: "1",
                        strokeDasharray: "3 4",
                        stroke: us.line,
                        children: e.jsx("path", { d: "M 0 0 Q 80 30 160 0" }),
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "group relative z-10 translate-y-[clamp(0.2rem,1.5cqh,0.5rem)] cursor-pointer transition-transform duration-500 hover:-translate-y-0.5",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className: `absolute -top-[4.15cqh] left-1/2 z-30 flex w-max -translate-x-1/2 transform items-center justify-center bg-transparent transition-transform focus:outline-none focus-visible:ring-2 ${R ? "pointer-events-auto cursor-pointer group-hover:-translate-y-[0.47cqh]" : "cursor-default"}`,
                          style: { "--tw-ring-color": us.aa(0.5) },
                          onClick: () => {
                            R && cn("bubbleLeft", "编辑左气泡文字");
                          },
                          children: e.jsx("div", {
                            className: `flex items-center gap-1 rounded-full border px-[clamp(0.5rem,2.8cqw,1rem)] py-[clamp(0.2rem,1cqh,0.45rem)] backdrop-blur-md ${R ? "ring-2" : ""}`,
                            style: {
                              borderColor: R ? us.aa(0.7) : us.glass.border,
                              backgroundColor: R
                                ? us.glass.strong
                                : us.glass.mid,
                              boxShadow: `0 5px 15px ${us.aa(0.15)}`,
                              ...(R ? { "--tw-ring-color": us.aa(0.3) } : {}),
                            },
                            children: e.jsx(
                              "span",
                              {
                                className: `font-modern prism-small max-w-[40cqw] min-h-[1.15em] font-medium tracking-wider prism-theme-bub ${ot ? "" : "truncate"} ${v && b != null && b.length && !ot ? "prism-listen-bubble-line" : ""}`,
                                children:
                                  v && ot
                                    ? e.jsxs("span", {
                                        className:
                                          "inline-flex items-center gap-[0.35em] align-middle",
                                        "aria-label": "正在输入",
                                        children: [
                                          e.jsx("span", {
                                            className: "prism-typing-dot",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "prism-typing-dot prism-typing-dot-d1",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "prism-typing-dot prism-typing-dot-d2",
                                          }),
                                        ],
                                      })
                                    : v && b != null && b.length
                                      ? (b[jt] ?? ut)
                                      : ut,
                              },
                              ot
                                ? "lt-typing"
                                : v && b != null && b.length
                                  ? `lt-${jt}`
                                  : "bubble-left",
                            ),
                          }),
                        }),
                        e.jsx("div", {
                          className:
                            "prism-avatar-ta relative flex shrink-0 items-center justify-center rounded-full border border-white/60 bg-gradient-to-tr from-white/90 to-white/40 backdrop-blur-md",
                          style: { boxShadow: `0 15px 30px ${us.aa(0.12)}` },
                          children: e.jsx("div", {
                            className:
                              "h-full w-full overflow-hidden rounded-full border border-white/80",
                            children: n
                              ? e.jsx("img", {
                                  src: n,
                                  alt: "TA",
                                  className:
                                    "h-full w-full object-cover grayscale-[10%] transition-transform duration-700 group-hover:scale-110",
                                })
                              : e.jsx("div", {
                                  className:
                                    "flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900",
                                  children: e.jsx("span", {
                                    className:
                                      "font-serif text-sm italic text-white/50 sm:text-base",
                                    children: "TA",
                                  }),
                                }),
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "pointer-events-auto absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2",
                      children: e.jsxs("button", {
                        type: "button",
                        "aria-label": "一起听记录",
                        className:
                          "prism-heart-mid relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-transform hover:scale-110 active:scale-[0.98]",
                        style: {
                          borderColor: us.heart.border,
                          backgroundColor: us.heart.bg,
                          boxShadow: `0 5px 15px ${us.aa(0.25)}`,
                        },
                        onClick: (de) => {
                          (de.stopPropagation(), qs(!0));
                        },
                        children: [
                          e.jsx("div", {
                            className:
                              "pointer-events-none absolute inset-[-3px] rounded-full border animate-[pulse-ring_2s_infinite]",
                            style: { borderColor: us.aa(0.35) },
                          }),
                          e.jsx(zn, {
                            className: "fill-current text-current",
                            strokeWidth: 1.5,
                            style: { color: us.accent },
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "group relative z-20 -translate-y-[clamp(0.15rem,1.2cqh,0.45rem)] cursor-pointer transition-transform duration-500 hover:-translate-y-2",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className: `absolute -top-[4.15cqh] left-1/2 z-30 flex w-max -translate-x-1/2 transform items-center justify-center bg-transparent transition-transform focus:outline-none focus-visible:ring-2 ${v ? "pointer-events-auto cursor-text group-hover:-translate-y-[0.47cqh]" : R ? "pointer-events-auto cursor-pointer group-hover:-translate-y-[0.47cqh]" : "cursor-default"}`,
                          style: { "--tw-ring-color": us.aa(0.5) },
                          onClick: () => {
                            var de, Me;
                            if (v) {
                              (Me =
                                (de = ae.current) == null
                                  ? void 0
                                  : de.focus) == null || Me.call(de);
                              return;
                            }
                            R && cn("bubbleRight", "编辑右气泡文字");
                          },
                          children: e.jsxs("div", {
                            className: `flex items-center gap-1 rounded-full border bg-gradient-to-r px-[clamp(0.5rem,2.8cqw,1rem)] py-[clamp(0.2rem,1cqh,0.45rem)] shadow-[0_8px_20px_rgba(200,180,170,0.2)] backdrop-blur-md ${R && !v ? "ring-2" : ""}`,
                            style: {
                              borderColor: R ? us.aa(0.7) : us.glass.border,
                              backgroundImage: `linear-gradient(to right, ${us.glass.strong}, ${us.glass.mid})`,
                              ...(R ? { "--tw-ring-color": us.aa(0.3) } : {}),
                            },
                            children: [
                              v
                                ? null
                                : e.jsx(Xn, {
                                    className:
                                      "h-[clamp(0.5rem,2.8cqw,0.75rem)] w-[clamp(0.5rem,2.8cqw,0.75rem)] shrink-0",
                                    strokeWidth: 1.5,
                                    style: { color: us.accent },
                                  }),
                              e.jsx("span", {
                                className: `font-modern prism-small max-w-[38cqw] truncate font-medium tracking-wider ${v && !Br ? "opacity-[0.62] prism-theme-muted" : "prism-theme-bub"}`,
                                children: v ? Br || "写一句心里话…" : Ee,
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "pointer-events-none absolute -inset-[clamp(4px,1cqw,10px)] -z-10 overflow-hidden rounded-full",
                          "aria-hidden": !0,
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full bg-white/28 blur-md",
                              style: { opacity: 0.55 },
                            }),
                            e.jsx("div", {
                              className:
                                "prism-user-bubble-glow-rise absolute -bottom-[38%] left-[-45%] right-[-45%] h-[185%] rounded-[50%] blur-md",
                              style: {
                                background: `linear-gradient(180deg, transparent 0%, ${us.aa(0.18)} 38%, rgba(255,255,255,0.42) 52%, transparent 72%)`,
                              },
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "prism-avatar-me relative flex shrink-0 items-center justify-center rounded-full border border-white bg-gradient-to-bl from-white/90 to-white/40 backdrop-blur-md",
                          style: { boxShadow: `0 20px 40px ${us.aa(0.25)}` },
                          children: e.jsx("div", {
                            className:
                              "h-full w-full overflow-hidden rounded-full border border-white/80 shadow-inner",
                            children: a
                              ? e.jsx("img", {
                                  src: a,
                                  alt: "Me",
                                  className:
                                    "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
                                })
                              : e.jsx("div", {
                                  className:
                                    "flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900",
                                  children: e.jsx("span", {
                                    className:
                                      "font-serif text-sm italic text-white/50 sm:text-base",
                                    children: "我",
                                  }),
                                }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                v
                  ? e.jsx("div", {
                      className: `pointer-events-auto mt-[calc(clamp(2.75rem,9cqh,4.25rem)+80px)] flex min-h-0 w-full max-w-lg flex-1 flex-col ${Js === "magazine" ? "px-[clamp(1rem,5.5cqw,1.85rem)]" : "px-3"}`,
                      children: e.jsx("div", {
                        className: "relative min-h-0 flex-1 overflow-hidden",
                        style: { maxHeight: "min(32vh, 240px)" },
                        children: e.jsx("div", {
                          className: `h-full max-h-[min(32vh,240px)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${Js === "magazine" ? "overflow-hidden px-0 py-0" : "overflow-y-auto overscroll-contain px-3 py-6"}`,
                          style:
                            Js === "magazine"
                              ? void 0
                              : {
                                  WebkitMaskImage:
                                    "linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                                  maskImage:
                                    "linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                                },
                          children: bs
                            ? e.jsx("p", {
                                className:
                                  "font-modern text-center text-[11px] opacity-60 prism-theme-muted",
                                children: "歌词加载中…",
                              })
                            : It.length > 0
                              ? Js === "magazine"
                                ? (() => {
                                    var gs;
                                    const de = bt,
                                      Me =
                                        de >= 0
                                          ? (gs = It[de]) == null
                                            ? void 0
                                            : gs.text
                                          : "",
                                      et =
                                        (Me == null ? void 0 : Me.length) ?? 0,
                                      Ct = de % 2 === 0,
                                      Dt = de % 3;
                                    let Ut = [
                                      "clamp(1.24rem,5.25cqw,1.62rem)",
                                      "clamp(1.15rem,4.75cqw,1.46rem)",
                                      "clamp(1.2rem,4.95cqw,1.54rem)",
                                    ][Dt % 3];
                                    et > 36
                                      ? (Ut = "clamp(1.05rem,4.15cqw,1.22rem)")
                                      : et > 24
                                        ? (Ut =
                                            "clamp(1.12rem,4.45cqw,1.34rem)")
                                        : et > 16 &&
                                          (Ut =
                                            "clamp(1.18rem,4.75cqw,1.42rem)");
                                    const ws = et > 14,
                                      Ls =
                                        et > 28
                                          ? "1.26em"
                                          : Dt === 0
                                            ? "1.58em"
                                            : Dt === 1
                                              ? "1.42em"
                                              : "1.5em",
                                      Ot = {
                                        initial: { opacity: 1 },
                                        animate: { opacity: 1 },
                                        exit: {
                                          opacity: 0,
                                          transition: {
                                            duration: 0.4,
                                            ease: [0.4, 0, 0.55, 1],
                                          },
                                        },
                                      },
                                      rs = {
                                        x: "clamp(0.55rem,3cqw,1.05rem)",
                                        y: "clamp(0,0.22cqh,0.06rem)",
                                      };
                                    return e.jsx("div", {
                                      className:
                                        "relative h-full min-h-[52px] w-full",
                                      children: e.jsx(Os, {
                                        mode: "wait",
                                        initial: !1,
                                        children: e.jsx(
                                          We.div,
                                          {
                                            custom: de,
                                            variants: Ot,
                                            initial: "initial",
                                            animate: "animate",
                                            exit: "exit",
                                            className: `max-w-[min(90cqw,19rem)] ${Ct ? "text-left" : "text-right"}`,
                                            style: {
                                              position: "absolute",
                                              zIndex: 1,
                                              ...(Ct
                                                ? { left: rs.x, top: rs.y }
                                                : {
                                                    right: rs.x,
                                                    bottom: rs.y,
                                                    transform:
                                                      "translate(-0.38rem, 3rem)",
                                                  }),
                                            },
                                            children: e.jsx("p", {
                                              className: `font-medium tracking-[0.03em] ${ws ? "prism-lyric-mag-multi" : ""} ${ur}`,
                                              style: {
                                                ...(kr
                                                  ? {}
                                                  : { fontFamily: kr }),
                                                color: Hs.bubble,
                                                fontSize: Ut,
                                                fontWeight:
                                                  Dt === 1 ? 540 : 650,
                                                lineHeight: ws ? 1.48 : 1.36,
                                                letterSpacing: ws
                                                  ? "0.025em"
                                                  : "0.04em",
                                                maxWidth: "min(90cqw, 18rem)",
                                                wordBreak: "break-word",
                                                overflowWrap: "anywhere",
                                                textWrap: ws
                                                  ? "balance"
                                                  : void 0,
                                              },
                                              children:
                                                Me && Me.length > 1
                                                  ? e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsx("span", {
                                                          className:
                                                            "inline-block align-top font-bold leading-none",
                                                          style: {
                                                            fontSize: Ls,
                                                            fontWeight: 750,
                                                            marginRight: Ct
                                                              ? "0.08em"
                                                              : "0.06em",
                                                            color: Hs.bubble,
                                                            verticalAlign: ws
                                                              ? "baseline"
                                                              : "text-top",
                                                          },
                                                          "aria-hidden": !0,
                                                          children: Me[0],
                                                        }),
                                                        e.jsx("span", {
                                                          className: ws
                                                            ? "opacity-[0.97]"
                                                            : void 0,
                                                          children: Me.slice(1),
                                                        }),
                                                      ],
                                                    })
                                                  : e.jsx("span", {
                                                      className: "font-bold",
                                                      style: {
                                                        fontWeight: 750,
                                                      },
                                                      children: Me,
                                                    }),
                                            }),
                                          },
                                          de,
                                        ),
                                      }),
                                    });
                                  })()
                                : e.jsx("div", {
                                    className:
                                      "flex flex-col gap-2.5 pb-2 text-center",
                                    children: It.map((de, Me) => {
                                      const et = Me === bt;
                                      return e.jsx(
                                        "p",
                                        {
                                          ref: et ? nt : void 0,
                                          className: `font-modern leading-relaxed transition-[opacity,transform,font-weight] duration-150 ${et ? `scale-[1.02] text-[clamp(0.78rem,3cqw,0.92rem)] font-semibold ${ur}` : `text-[clamp(0.65rem,2.65cqw,0.78rem)] ${mi}`}`,
                                          style: {
                                            ...(et
                                              ? kr
                                                ? {}
                                                : { fontFamily: kr }
                                              : Oa
                                                ? {}
                                                : { fontFamily: Oa }),
                                            color: et
                                              ? Hs.bubble
                                              : `color-mix(in srgb, ${Hs.bubble} 58%, #ffffff)`,
                                            opacity: et ? 1 : 0.82,
                                          },
                                          children: de.text,
                                        },
                                        `${Me}-${de.text.slice(0, 12)}`,
                                      );
                                    }),
                                  })
                              : e.jsx("p", {
                                  className:
                                    "font-modern px-2 text-center text-[11px] leading-relaxed opacity-55 prism-theme-muted",
                                  children:
                                    (Lt == null ? void 0 : Lt.source) ===
                                    "local"
                                      ? "本地音乐暂无歌词（可在乐听为本机歌曲导入同名 .lrc）"
                                      : "暂无歌词或未绑定网易云歌单",
                                }),
                        }),
                      }),
                    })
                  : null,
                v
                  ? null
                  : e.jsxs("div", {
                      className: `mt-[clamp(0.75rem,5cqh,2rem)] flex flex-col items-center px-2 ${R ? "pointer-events-auto" : ""}`,
                      children: [
                        e.jsx("span", {
                          className:
                            "font-luxury prism-days-num font-light tracking-widest prism-theme-pri drop-shadow-sm",
                          children: te,
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-2 flex items-center gap-[clamp(0.35rem,2cqw,0.75rem)]",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-px w-[clamp(1.25rem,6cqw,2.5rem)] opacity-70",
                              style: { backgroundColor: Hs.muted },
                            }),
                            e.jsx("span", {
                              className:
                                "font-modern prism-micro uppercase tracking-[0.5em] prism-theme-muted",
                              children: "Days of Love",
                            }),
                            e.jsx("div", {
                              className:
                                "h-px w-[clamp(1.25rem,6cqw,2.5rem)] opacity-70",
                              style: { backgroundColor: Hs.muted },
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          className: `font-script prism-quote mt-2 max-w-[min(92cqw,48rem)] bg-transparent text-center leading-snug prism-theme-pri opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent ${R ? "cursor-pointer rounded-md px-1 ring-2" : "cursor-default"}`,
                          style: {
                            "--tw-ring-color": R ? us.aa(0.35) : us.aa(0.5),
                          },
                          onClick: () => {
                            R && cn("loveQuote", "编辑签名语", !0);
                          },
                          children: Ce,
                        }),
                      ],
                    }),
              ],
            }),
            v
              ? e.jsxs(e.Fragment, {
                  children: [
                    fs
                      ? e.jsx("div", {
                          className:
                            "pointer-events-auto absolute bottom-[calc(env(safe-area-inset-bottom,0px)+clamp(6rem,25cqh,8rem)+30px)] left-3 right-3 z-[46] rounded-xl border border-amber-200/90 bg-amber-50/95 px-3 py-2 text-center text-[11px] text-amber-900 shadow-sm backdrop-blur-sm",
                          role: "status",
                          children: fs,
                        })
                      : null,
                    e.jsx("div", {
                      className:
                        "pointer-events-auto absolute bottom-0 left-0 right-0 z-[45] px-3 pb-[calc(max(1rem,calc(env(safe-area-inset-bottom,12px)+0.55rem))+30px)] pt-3",
                      style: {
                        background: `linear-gradient(to top, ${us.panelBg} 0%, ${us.aa(0.06)} 32%, ${us.aa(0.03)} 52%, transparent 88%)`,
                      },
                      children: e.jsxs("div", {
                        className:
                          "mx-auto flex max-w-lg items-center gap-1.5 rounded-full border px-[clamp(0.35rem,2cqw,0.65rem)] py-[clamp(0.3rem,1.2cqh,0.5rem)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl",
                        style: {
                          borderColor: us.glass.border,
                          backgroundImage: `linear-gradient(135deg, ${us.glass.strong}, ${us.glass.mid})`,
                          boxShadow: `0 12px 40px ${us.aa(0.14)}`,
                        },
                        children: [
                          e.jsx("button", {
                            type: "button",
                            disabled: ot,
                            onClick: ii,
                            "aria-label": "接收",
                            className:
                              "flex shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-1.5 transition enabled:active:scale-[0.96] disabled:opacity-45",
                            style: { color: Hs.bubble },
                            children: ot
                              ? e.jsx(mk, {
                                  className:
                                    "h-[1.15rem] w-[1.15rem] animate-pulse opacity-70",
                                })
                              : e.jsx(mk, {
                                  className: "h-[1.15rem] w-[1.15rem]",
                                }),
                          }),
                          e.jsx("input", {
                            ref: ae,
                            type: "text",
                            value: Pt,
                            onChange: (de) => Wt(de.target.value),
                            onKeyDown: (de) => {
                              de.key === "Enter" && (de.preventDefault(), pi());
                            },
                            placeholder: "此刻的心情…",
                            className:
                              "font-modern min-w-0 flex-1 bg-transparent text-[clamp(0.7rem,2.8cqw,0.85rem)] outline-none placeholder:opacity-45 placeholder:text-[color:var(--p-c4)]",
                            style: { color: Hs.bubble },
                            autoComplete: "off",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: pi,
                            "aria-label": "发送",
                            className:
                              "flex shrink-0 items-center justify-center rounded-full border-0 bg-transparent p-1.5 transition active:scale-[0.96]",
                            style: { color: Hs.bubble },
                            children: e.jsx(xV, {
                              className: "h-[1.15rem] w-[1.15rem]",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                })
              : null,
            e.jsx(Os, {
              children:
                v && gn
                  ? e.jsxs(We.div, {
                      className:
                        "pointer-events-auto absolute inset-0 z-[58] flex min-h-0 items-center justify-center p-3",
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": "歌词排版",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2 },
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className:
                            "absolute inset-0 bg-black/45 backdrop-blur-[2px]",
                          "aria-label": "关闭",
                          onClick: () => sn(!1),
                        }),
                        e.jsxs(We.div, {
                          className:
                            "relative z-10 max-h-[min(78vh,520px)] w-full max-w-[min(92vw,22rem)] overflow-y-auto overflow-x-hidden rounded-2xl border px-4 py-4 shadow-2xl",
                          style: {
                            borderColor: us.glass.border,
                            backgroundImage: `linear-gradient(165deg, ${us.glass.strong}, ${us.glass.mid})`,
                            boxShadow: `0 24px 48px ${us.aa(0.2)}`,
                          },
                          initial: { y: 12, opacity: 0, scale: 0.98 },
                          animate: { y: 0, opacity: 1, scale: 1 },
                          exit: { y: 8, opacity: 0 },
                          transition: {
                            type: "spring",
                            damping: 28,
                            stiffness: 360,
                          },
                          onClick: (de) => de.stopPropagation(),
                          children: [
                            e.jsxs("div", {
                              className:
                                "mb-3 flex items-center justify-between gap-2",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(m0, {
                                      className: "h-4 w-4 shrink-0",
                                      strokeWidth: 1.5,
                                      style: { color: Hs.bubble },
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "font-modern text-[13px] font-semibold tracking-wide",
                                      style: { color: Hs.bubble },
                                      children: "歌词展示",
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  className:
                                    "rounded-full p-1 opacity-70 transition hover:opacity-100",
                                  style: { color: Hs.muted },
                                  onClick: () => sn(!1),
                                  "aria-label": "关闭",
                                  children: e.jsx(Ts, {
                                    className: "h-4 w-4",
                                    strokeWidth: 1.5,
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "font-modern mb-4 text-[10px] leading-relaxed opacity-55 prism-theme-muted",
                              children: "仅在「一起听」界面切换歌词排版。",
                            }),
                            e.jsxs("div", {
                              className: "mb-1",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "font-modern mb-2 text-[10px] uppercase tracking-[0.2em] opacity-50 prism-theme-muted",
                                  children: "排版",
                                }),
                                e.jsxs("div", {
                                  className: "flex rounded-full border p-0.5",
                                  style: { borderColor: us.aa(0.2) },
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      className: `font-modern flex-1 rounded-full py-1.5 text-[11px] transition ${Js === "default" ? "shadow-sm" : "opacity-55"}`,
                                      style: {
                                        backgroundColor:
                                          Js === "default"
                                            ? us.glass.chip
                                            : "transparent",
                                        color: Hs.bubble,
                                      },
                                      onClick: () => {
                                        (Xs("default"),
                                          Le({ listenLyricLayout: "default" }));
                                      },
                                      children: "默认",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      className: `font-modern flex-1 rounded-full py-1.5 text-[11px] transition ${Js === "magazine" ? "shadow-sm" : "opacity-55"}`,
                                      style: {
                                        backgroundColor:
                                          Js === "magazine"
                                            ? us.glass.chip
                                            : "transparent",
                                        color: Hs.bubble,
                                      },
                                      onClick: () => {
                                        (Xs("magazine"),
                                          Le({
                                            listenLyricLayout: "magazine",
                                          }));
                                      },
                                      children: "杂志一句",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "font-modern mt-2 text-[9px] leading-relaxed opacity-45 prism-theme-muted",
                                  children:
                                    "「杂志一句」：仅当前句；偶数句左上、奇数句右下，换句时仅渐隐后切下一句（无滑入闪烁）。",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
            }),
            v
              ? null
              : e.jsx("div", {
                  className: `prism-dock absolute bottom-0 left-0 right-0 z-30 transition-transform delay-500 duration-1000 ${T ? "translate-y-0" : "translate-y-full"}`,
                  children: e.jsxs("div", {
                    ref: O,
                    className: `prism-wheel absolute left-1/2 top-[clamp(1.5rem,6cqh,3.75rem)] flex -translate-x-1/2 select-none flex-col items-center overflow-hidden rounded-full border-t-[1.5px] pt-[clamp(0.75rem,3.5cqh,2rem)] backdrop-blur-2xl ${R ? "cursor-default" : "cursor-grab active:cursor-grabbing"}`,
                    style: {
                      touchAction: "pan-y",
                      borderTopColor: us.wheel.border,
                      backgroundColor: us.wheel.bg,
                      boxShadow: us.wheel.shadow,
                      ...(R
                        ? {
                            outline: `2px solid ${us.aa(0.25)}`,
                            outlineOffset: 0,
                          }
                        : {}),
                    },
                    onPointerDownCapture: pt,
                    onPointerDown: vs,
                    onPointerMove: ts,
                    onPointerUp: ys,
                    onPointerCancel: ys,
                    onPointerLeave: Vs,
                    children: [
                      e.jsx("div", {
                        className: "prism-orbit-clip",
                        children: e.jsx("div", {
                          className:
                            "prism-orbit-spin absolute inset-0 will-change-transform transition-transform",
                          style: {
                            transform: `rotate(${L}deg)`,
                            transformOrigin: "50% 50%",
                            transitionDuration: F ? "0ms" : "100ms",
                          },
                          children: rt.map((de) => {
                            const Me =
                                50 + Se * Math.sin((de.angle * Math.PI) / 180),
                              et =
                                50 - Se * Math.cos((de.angle * Math.PI) / 180),
                              Ct = (He == null ? void 0 : He[de.id]) || {},
                              Dt = Ct.iconColor || re.muted,
                              Mt = Ct.labelColor || re.secondary,
                              Ut = ee === de.id,
                              ws = j == null ? void 0 : j[de.id],
                              Ls = (ws == null ? void 0 : ws.kind) || "",
                              Ot = String(
                                (ws == null ? void 0 : ws.text) || "",
                              ).trim(),
                              rs =
                                Ls === "progress"
                                  ? "bg-violet-500 text-white"
                                  : Ls === "reward"
                                    ? "bg-emerald-500 text-white"
                                    : Ls === "new"
                                      ? "bg-rose-500 text-white"
                                      : "";
                            return e.jsxs(
                              "div",
                              {
                                "data-prism-menu": de.id,
                                className:
                                  "prism-orbit-hit absolute flex min-h-[44px] min-w-[44px] flex-col items-center justify-center group cursor-pointer",
                                style: {
                                  left: `${Me}%`,
                                  top: `${et}%`,
                                  transform: `translate(-50%, -50%) rotate(${-L}deg)`,
                                  transition: F
                                    ? "none"
                                    : "transform 100ms ease-out",
                                },
                                onPointerDown: () => {
                                  ye.current = !1;
                                },
                                onClick: () => {
                                  R && (ye.current || (H(de.id), U(!0)));
                                },
                                children: [
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "pointer-events-none absolute inset-0 scale-[1.3] rounded-full border border-dashed opacity-0 transition-all duration-500 group-hover:scale-[1.4] group-hover:opacity-100",
                                        style: { borderColor: us.aa(0.42) },
                                      }),
                                      e.jsxs("div", {
                                        className: `prism-menu-orbit-btn relative z-10 flex items-center justify-center rounded-full border-[1.5px] backdrop-blur-md transition-colors hover:-translate-y-0.5 ${Ut && R ? "ring-2 ring-offset-2 ring-offset-transparent" : !R && Ut ? "ring-2" : ""}`,
                                        style: {
                                          color: Dt,
                                          borderColor: us.glass.border,
                                          backgroundImage: `linear-gradient(to bottom right, ${us.glass.strong}, ${us.glass.mid})`,
                                          boxShadow: `0 8px 20px ${us.aa(0.15)}`,
                                          ...(Ut
                                            ? { "--tw-ring-color": us.accent }
                                            : {}),
                                        },
                                        children: [
                                          Ct.iconSvg
                                            ? e.jsx("div", {
                                                className:
                                                  "prismCustomIcon prism-icon-in-orbit",
                                                style: { color: Dt },
                                                dangerouslySetInnerHTML: {
                                                  __html: Ct.iconSvg,
                                                },
                                              })
                                            : e.jsx(de.icon, {
                                                className:
                                                  "prism-icon-in-orbit",
                                                strokeWidth: 1.5,
                                              }),
                                          rs
                                            ? e.jsx("span", {
                                                className: `absolute -right-[0.28cqw] -top-[0.1cqh] rounded-full px-[0.35cqw] py-[0.12cqh] text-[1.42cqw] font-medium leading-none shadow-sm ${rs}`,
                                                children: Ot || "新",
                                              })
                                            : yt.has(de.id)
                                              ? null
                                              : e.jsx("div", {
                                                  className:
                                                    "absolute right-[1.03cqw] top-[0.64cqh] h-[0.64cqw] w-[0.64cqw] rounded-full bg-white shadow-sm",
                                                }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className: `font-modern mt-[0.95cqh] max-w-[22cqw] truncate text-[2.15cqw] tracking-wide transition-colors drop-shadow-sm group-hover:opacity-90 ${R && Ut ? "rounded px-0.5 ring-1" : ""}`,
                                    style: {
                                      color: Mt,
                                      ...(R && Ut
                                        ? { "--tw-ring-color": us.aa(0.45) }
                                        : {}),
                                    },
                                    children: de.zh,
                                  }),
                                ],
                              },
                              de.id,
                            );
                          }),
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "prism-wheel-gear group pointer-events-none absolute left-1/2 top-[20.833%] z-20 flex -translate-x-1/2 flex-col items-center",
                        children: e.jsxs("div", {
                          className:
                            "pointer-events-auto flex cursor-pointer flex-col items-center",
                          onPointerDown: (de) => {
                            var Me;
                            if (
                              (de.stopPropagation(),
                              typeof ((Me = de.currentTarget) == null
                                ? void 0
                                : Me.setPointerCapture) == "function")
                            )
                              try {
                                de.currentTarget.setPointerCapture(
                                  de.pointerId,
                                );
                              } catch {}
                            ye.current = !1;
                          },
                          onPointerUp: (de) => {
                            (de.stopPropagation(),
                              !ye.current &&
                                (oe((Me) => {
                                  var Ct;
                                  const et = !Me;
                                  return (
                                    et
                                      ? (H(
                                          ee ||
                                            ((Ct = rt[0]) == null
                                              ? void 0
                                              : Ct.id),
                                        ),
                                        U(!0))
                                      : (H(null), U(!1)),
                                    et
                                  );
                                }),
                                D(!1),
                                (q.current = !1),
                                (ye.current = !1)));
                          },
                          children: [
                            e.jsxs("div", {
                              className: `prism-gear-btn relative flex items-center justify-center rounded-full border transition-all duration-300 ${R ? "scale-105 ring-2" : "group-hover:scale-105"}`,
                              style: {
                                borderColor: R
                                  ? us.aa(0.8)
                                  : us.gearIdle.border,
                                backgroundImage: R
                                  ? `linear-gradient(to top right, ${us.gearEdit.from}, ${us.gearEdit.to})`
                                  : `linear-gradient(to top right, ${us.gearIdle.from}, ${us.gearIdle.to})`,
                                boxShadow: us.gearShadow,
                                ...(R ? { "--tw-ring-color": us.aa(0.5) } : {}),
                              },
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-[clamp(3px,0.6cqw,6px)] rounded-full border",
                                  style: {
                                    borderColor: us.aa(0.35),
                                    background: `linear-gradient(to bottom, ${us.aa(0.14)}, transparent)`,
                                  },
                                }),
                                e.jsx(z8, {
                                  className: "relative z-10",
                                  strokeWidth: 1.5,
                                  style: {
                                    color: R ? us.accent2 : us.softIcon,
                                  },
                                }),
                                e.jsxs("div", {
                                  className: `pointer-events-none absolute -top-[clamp(2rem,8cqh,2.75rem)] flex items-center gap-1 rounded-full px-[clamp(0.45rem,2cqw,0.75rem)] py-[clamp(0.2rem,0.9cqh,0.35rem)] shadow-lg backdrop-blur transition-opacity duration-300 ${R ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
                                  style: {
                                    backgroundColor: R
                                      ? us.aa(0.95)
                                      : us.glass.strong,
                                  },
                                  children: [
                                    e.jsx(Xn, {
                                      className:
                                        "h-[clamp(0.55rem,2.8cqw,0.8rem)] w-[clamp(0.55rem,2.8cqw,0.8rem)]",
                                      strokeWidth: 1.5,
                                      style: {
                                        color: R ? "#ffffff" : us.bgmIcon,
                                      },
                                    }),
                                    e.jsx("span", {
                                      className: `font-modern prism-micro font-medium tracking-wider ${R ? "text-white" : "prism-theme-sec"}`,
                                      children: R ? "完成定制" : "定制空间",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("span", {
                              className: `font-luxury prism-small mt-[clamp(0.35rem,1.5cqh,0.75rem)] italic ${R ? "font-medium" : "prism-theme-sec"}`,
                              style: R ? { color: us.accent2 } : void 0,
                              children: R ? "编辑中" : "Atelier",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
            ft
              ? e.jsx("div", {
                  className:
                    "absolute inset-0 z-[65] flex items-end justify-center bg-black/35 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-20 backdrop-blur-[2px] sm:items-center sm:pb-6",
                  role: "presentation",
                  onClick: () => vt(null),
                  children: e.jsxs("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "prism-text-modal-title",
                    className:
                      "w-full max-w-md rounded-2xl border p-4 backdrop-blur-md",
                    style: {
                      borderColor: "var(--ps-input-border)",
                      backgroundColor:
                        us.id === "black"
                          ? "rgba(28,28,36,0.97)"
                          : "rgba(255,252,250,0.98)",
                      boxShadow: "0 24px 64px var(--ps-a-22)",
                      color: "var(--ps-text-h)",
                    },
                    onClick: (de) => de.stopPropagation(),
                    children: [
                      e.jsx("p", {
                        id: "prism-text-modal-title",
                        className:
                          "font-luxury ps-t-h text-lg font-medium italic tracking-wide",
                        children: ft.title,
                      }),
                      ft.multiline
                        ? e.jsx("textarea", {
                            className:
                              "font-modern mt-3 min-h-[5.5rem] w-full resize-y rounded-xl border px-3 py-2.5 text-sm leading-relaxed outline-none focus:ring-2",
                            style: {
                              borderColor: "var(--ps-input-border)",
                              backgroundColor: "var(--ps-input-bg)",
                              color: "var(--ps-text-h)",
                              "--tw-ring-color": "var(--ps-a-45)",
                            },
                            rows: 4,
                            value: ft.value,
                            onChange: (de) =>
                              vt(
                                (Me) => Me && { ...Me, value: de.target.value },
                              ),
                            autoFocus: !0,
                          })
                        : e.jsx("input", {
                            type: "text",
                            className:
                              "font-modern mt-3 w-full rounded-xl border px-3 py-2.5 text-sm outline-none focus:ring-2",
                            style: {
                              borderColor: "var(--ps-input-border)",
                              backgroundColor: "var(--ps-input-bg)",
                              color: "var(--ps-text-h)",
                              "--tw-ring-color": "var(--ps-a-45)",
                            },
                            value: ft.value,
                            onChange: (de) =>
                              vt(
                                (Me) => Me && { ...Me, value: de.target.value },
                              ),
                            autoFocus: !0,
                          }),
                      e.jsxs("div", {
                        className: "mt-4 flex justify-end gap-2",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            className:
                              "font-modern rounded-full border px-4 py-2 text-[0.72rem] font-medium tracking-wide backdrop-blur-sm",
                            style: {
                              borderColor: "var(--ps-line)",
                              backgroundColor: "var(--ps-glass-mid)",
                              color: "var(--ps-text-body)",
                            },
                            onClick: () => vt(null),
                            children: "取消",
                          }),
                          e.jsx("button", {
                            type: "button",
                            className:
                              "font-modern rounded-full border px-4 py-2 text-[0.72rem] font-semibold tracking-wide shadow-sm",
                            style: {
                              borderColor: "var(--ps-a-45)",
                              background: "var(--ps-primary-btn)",
                              color: "var(--ps-accent-2)",
                            },
                            onClick: fn,
                            children: "保存",
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : null,
            Y &&
              R &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "关闭空间工坊",
                    className:
                      "absolute inset-0 z-[55] border-0 p-0 backdrop-blur-[10px] transition-opacity",
                    style: { background: "var(--ps-atelier-scrim)" },
                    onClick: () => U(!1),
                  }),
                  e.jsxs("div", {
                    className:
                      "prism-atelier-sheet absolute bottom-0 left-0 right-0 z-[56] flex max-h-[min(82vh,40rem)] flex-col overflow-hidden rounded-t-[2rem] border",
                    style: {
                      borderColor: "var(--ps-sheet-border)",
                      boxShadow: "var(--ps-sheet-shadow)",
                    },
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "prism-atelier-title",
                    children: [
                      e.jsx("div", {
                        className: "pointer-events-none absolute inset-0",
                        style: { background: "var(--ps-atelier-bg)" },
                      }),
                      e.jsx("div", {
                        className:
                          "pointer-events-none absolute -right-[20%] -top-[30%] h-[min(55vw,280px)] w-[min(55vw,280px)] rounded-full blur-[80px]",
                        style: {
                          animation:
                            "prism-atelier-breathe 8s ease-in-out infinite",
                          backgroundColor: "var(--ps-bloom-2)",
                        },
                      }),
                      e.jsx("div", {
                        className:
                          "pointer-events-none absolute -left-[15%] top-[20%] h-[min(48vw,220px)] w-[min(48vw,220px)] rounded-full blur-[72px]",
                        style: {
                          animation:
                            "prism-atelier-breathe 10s ease-in-out infinite 1.2s",
                          backgroundColor: "var(--ps-bloom-1)",
                        },
                      }),
                      e.jsx("div", {
                        className:
                          "pointer-events-none absolute bottom-0 left-1/2 h-[45%] w-[120%] -translate-x-1/2 blur-2xl",
                        style: {
                          background:
                            "linear-gradient(to top, var(--ps-a-08), transparent)",
                        },
                        "aria-hidden": !0,
                      }),
                      e.jsx("div", {
                        className:
                          "pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-multiply",
                        style: {
                          backgroundImage:
                            "radial-gradient(var(--ps-dot-grid) 1px, transparent 1px)",
                          backgroundSize: "14px 14px",
                        },
                        "aria-hidden": !0,
                      }),
                      e.jsx("div", {
                        className:
                          "pointer-events-none absolute left-1/2 top-6 h-24 w-24 -translate-x-1/2 opacity-[0.11]",
                        children: e.jsx("div", {
                          className:
                            "absolute inset-0 rounded-full border border-dashed border-[color:var(--ps-text-h)]",
                          style: {
                            animation:
                              "prism-atelier-orbit-slow 28s linear infinite",
                          },
                        }),
                      }),
                      e.jsxs("div", {
                        className: "relative flex min-h-0 flex-1 flex-col",
                        children: [
                          e.jsxs("header", {
                            className: "relative shrink-0 px-5 pb-2 pt-4",
                            children: [
                              e.jsx("div", {
                                className: "mb-3 flex justify-center",
                                "aria-hidden": !0,
                                children: e.jsx("div", {
                                  className:
                                    "h-[3px] w-14 rounded-full bg-gradient-to-r from-transparent to-transparent",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(to right, transparent, var(--ps-accent), transparent)",
                                    boxShadow: "0 0 18px var(--ps-a-50)",
                                  },
                                }),
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-start justify-between gap-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "min-w-0 pt-0.5",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "font-script ps-t-script text-[clamp(1.35rem,4.5vw,1.65rem)] leading-none opacity-95",
                                        children: "Créer ensemble",
                                      }),
                                      e.jsx("h2", {
                                        id: "prism-atelier-title",
                                        className:
                                          "font-luxury ps-t-h mt-1.5 text-[clamp(1.45rem,4.8vw,1.75rem)] font-medium italic tracking-tight",
                                        children: "L'Atelier",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "font-modern ps-t-muted mt-2 max-w-[16rem] text-[9px] font-medium uppercase leading-relaxed tracking-[0.38em]",
                                        children:
                                          "星轨工坊 · 只为此刻的二人宇宙",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    className:
                                      "group relative mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border backdrop-blur-md transition",
                                    style: {
                                      borderColor: "var(--ps-glass-border)",
                                      backgroundColor: "var(--ps-glass-mid)",
                                      color: "var(--ps-text-body)",
                                      boxShadow: "0 10px 36px var(--ps-a-18)",
                                    },
                                    "aria-label": "关闭",
                                    onClick: () => U(!1),
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "pointer-events-none absolute inset-0 rounded-full ring-0 transition group-hover:ring-2",
                                        style: {
                                          "--tw-ring-color": "var(--ps-a-25)",
                                        },
                                      }),
                                      e.jsx(Ts, {
                                        className:
                                          "relative h-[1.1rem] w-[1.1rem]",
                                        strokeWidth: 2,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "pointer-events-none mx-auto mt-4 h-px max-w-[12rem] bg-gradient-to-r from-transparent to-transparent opacity-90",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(to right, transparent, var(--ps-line), transparent)",
                                },
                                "aria-hidden": !0,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-1",
                            children: [
                              e.jsxs("section", {
                                className:
                                  "ps-card relative mb-5 overflow-hidden rounded-[1.4rem] p-4 backdrop-blur-xl",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl",
                                    style: {
                                      backgroundColor: "var(--ps-a-12)",
                                    },
                                    "aria-hidden": !0,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "relative flex items-start gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "prism-atelier-sec-icon ps-ico flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                                        children: e.jsx(Xn, {
                                          className: "h-[1.15rem] w-[1.15rem]",
                                          strokeWidth: 1.65,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-modern ps-t-soft text-[9px] font-semibold uppercase tracking-[0.32em]",
                                            children: "Stargate",
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-luxury ps-t-h mt-0.5 text-base font-medium italic",
                                            children: "星门",
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "font-modern ps-t-body mt-2 text-[0.62rem] leading-relaxed",
                                            children: [
                                              "开启时，经",
                                              e.jsx("strong", {
                                                className:
                                                  "font-medium ps-t-strong",
                                                children: "星空封面",
                                              }),
                                              "长按进入罗盘；关闭则",
                                              e.jsx("strong", {
                                                className:
                                                  "font-medium ps-t-strong",
                                                children: "直达罗盘",
                                              }),
                                              "。欢迎语与 BGM 始终在「进入后的第一屏」轻响。",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        type: "button",
                                        role: "switch",
                                        "aria-checked": !p,
                                        disabled: typeof m != "function",
                                        onClick: () => {
                                          typeof m == "function" && m(!p);
                                        },
                                        className: `relative mt-1 h-9 w-[3.6rem] shrink-0 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.07)] transition-all duration-300 disabled:opacity-45 ${p ? "" : "ring-2 ring-offset-2"}`,
                                        style: p
                                          ? {
                                              background:
                                                "linear-gradient(to right, var(--ps-switch-off-from), var(--ps-switch-off-to))",
                                            }
                                          : {
                                              background:
                                                "linear-gradient(to bottom right, var(--ps-switch-on-from), var(--ps-switch-on-to))",
                                              "--tw-ring-color":
                                                "var(--ps-a-45)",
                                              "--tw-ring-offset-color":
                                                "var(--ps-switch-ring-offset)",
                                            },
                                        children: [
                                          e.jsx("span", {
                                            className: `absolute top-1 flex h-7 w-7 items-center justify-center rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-all duration-300 ${p ? "left-1" : "left-[calc(100%-1.75rem-0.25rem)]"}`,
                                            style: {
                                              backgroundColor:
                                                us.id === "black"
                                                  ? "rgba(36,36,44,0.95)"
                                                  : "#ffffff",
                                            },
                                            "aria-hidden": !0,
                                            children: e.jsx("span", {
                                              className:
                                                "block h-2 w-2 rounded-full",
                                              style: {
                                                backgroundColor: p
                                                  ? "var(--ps-switch-knob-off)"
                                                  : "var(--ps-switch-knob-on)",
                                              },
                                            }),
                                          }),
                                          e.jsx("span", {
                                            className: "sr-only",
                                            children: p
                                              ? "当前已跳过星空过渡页"
                                              : "当前显示星空过渡页",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("section", {
                                className:
                                  "ps-card relative mb-5 overflow-hidden rounded-[1.4rem] p-4 backdrop-blur-xl",
                                children: [
                                  e.jsxs("div", {
                                    className: "mb-3 flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "prism-atelier-sec-icon ps-ico flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                                        children: e.jsx(Za, {
                                          className: "h-[1.15rem] w-[1.15rem]",
                                          strokeWidth: 1.65,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-modern ps-t-soft text-[9px] font-semibold uppercase tracking-[0.32em]",
                                            children: "Atmosphere",
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-luxury ps-t-h text-base font-medium italic",
                                            children: "氛围画廊",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "relative rounded-[1.05rem] p-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
                                    style: {
                                      background: "var(--ps-grad-frame)",
                                    },
                                    children: e.jsxs("div", {
                                      className:
                                        "relative aspect-[2.1/1] w-full overflow-hidden rounded-[0.95rem] sm:aspect-[2.4/1]",
                                      style: {
                                        background:
                                          "var(--ps-gallery-fallback)",
                                      },
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 bg-cover bg-center",
                                          style: {
                                            backgroundImage: tt
                                              ? `url(${JSON.stringify(tt)})`
                                              : void 0,
                                          },
                                          "aria-hidden": !0,
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "pointer-events-none absolute inset-0",
                                          style: {
                                            background:
                                              "var(--ps-gallery-veil)",
                                          },
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "pointer-events-none absolute left-2.5 top-2.5 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/50",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "pointer-events-none absolute right-2.5 top-2.5 h-6 w-6 rounded-tr-md border-r-2 border-t-2 border-white/50",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "pointer-events-none absolute bottom-2.5 left-2.5 h-6 w-6 rounded-bl-md border-b-2 border-l-2 border-white/40",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "pointer-events-none absolute bottom-2.5 right-2.5 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/40",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-2 p-3",
                                          children: [
                                            e.jsxs("button", {
                                              type: "button",
                                              className:
                                                "font-modern inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.65rem] font-semibold tracking-wide backdrop-blur-md transition",
                                              style: {
                                                borderColor:
                                                  "var(--ps-glass-border)",
                                                backgroundColor:
                                                  "var(--ps-glass-strong)",
                                                color: "var(--ps-text-h)",
                                                boxShadow:
                                                  "var(--ps-float-btn-shadow)",
                                              },
                                              onClick: Ht,
                                              children: [
                                                e.jsx(Ta, {
                                                  className:
                                                    "h-3.5 w-3.5 text-[color:var(--ps-accent-2)]",
                                                  strokeWidth: 2,
                                                }),
                                                "更换壁纸",
                                              ],
                                            }),
                                            e.jsxs("button", {
                                              type: "button",
                                              disabled: ms,
                                              className:
                                                "font-modern inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-[0.65rem] font-medium tracking-wide text-white/95 shadow-sm backdrop-blur-md transition enabled:hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-40",
                                              onClick: it,
                                              children: [
                                                e.jsx(Pr, {
                                                  className: "h-3.5 w-3.5",
                                                  strokeWidth: 2,
                                                }),
                                                "恢复默认",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("section", {
                                className:
                                  "ps-card relative mb-5 overflow-hidden rounded-[1.4rem] p-4 backdrop-blur-xl",
                                children: [
                                  e.jsxs("div", {
                                    className: "mb-3 flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "prism-atelier-sec-icon ps-ico flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                                        children: e.jsx(X8, {
                                          className: "h-[1.15rem] w-[1.15rem]",
                                          strokeWidth: 1.65,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-modern ps-t-soft text-[9px] font-semibold uppercase tracking-[0.32em]",
                                            children: "Interface",
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-luxury ps-t-h text-base font-medium italic",
                                            children: "罗盘界面主题",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "font-modern ps-t-body mb-3 text-[0.62rem] leading-relaxed",
                                    children: [
                                      "作用于",
                                      e.jsx("strong", {
                                        className: "font-medium ps-t-strong",
                                        children: "罗盘主界面",
                                      }),
                                      "（壁纸之上的底色与玻璃氛围）、",
                                      e.jsx("strong", {
                                        className: "font-medium ps-t-strong",
                                        children: "空间工坊",
                                      }),
                                      "与",
                                      e.jsx("strong", {
                                        className: "font-medium ps-t-strong",
                                        children: "绑定歌单",
                                      }),
                                      "弹窗；记账、备忘录等子页面不变。",
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "grid grid-cols-2 gap-2 sm:grid-cols-3",
                                    children: uV.map((de) => {
                                      const Me = up[de];
                                      if (!Me) return null;
                                      const et = Cs === de;
                                      return e.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () =>
                                            Le({
                                              uiShellTheme: de,
                                              themeColors: ge(I0(de)),
                                            }),
                                          className: `font-modern flex min-h-[3rem] items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-left text-[0.65rem] font-semibold tracking-wide transition ${et ? "ring-2" : ""}`,
                                          style: et
                                            ? {
                                                borderColor: "var(--ps-a-70)",
                                                backgroundColor:
                                                  "var(--ps-glass-strong)",
                                                boxShadow:
                                                  "0 10px 28px var(--ps-a-18)",
                                                "--tw-ring-color":
                                                  "var(--ps-a-25)",
                                                color: "var(--ps-text-h)",
                                              }
                                            : {
                                                borderColor:
                                                  "var(--ps-card-border)",
                                                backgroundColor:
                                                  "var(--ps-glass-mid)",
                                                color: "var(--ps-text-h)",
                                              },
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "h-8 w-8 shrink-0 rounded-full border-2 shadow-inner",
                                              style: {
                                                borderColor:
                                                  "var(--ps-glass-border)",
                                                background: `linear-gradient(145deg, ${Me.accent}, ${Me.panelBg})`,
                                              },
                                              "aria-hidden": !0,
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "min-w-0 flex-1 leading-snug",
                                              children: Me.label,
                                            }),
                                          ],
                                        },
                                        de,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("section", {
                                className:
                                  "ps-card relative mb-5 overflow-hidden rounded-[1.4rem] p-4 backdrop-blur-xl",
                                children: [
                                  e.jsxs("div", {
                                    className: "mb-3 flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "prism-atelier-sec-icon ps-ico flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                                        children: e.jsx(_o, {
                                          className: "h-[1.15rem] w-[1.15rem]",
                                          strokeWidth: 1.65,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-modern ps-t-soft text-[9px] font-semibold uppercase tracking-[0.32em]",
                                            children: "Chromatic",
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-luxury ps-t-h text-base font-medium italic",
                                            children: "字色星图",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-2 gap-2.5",
                                    children: [
                                      {
                                        key: "primary",
                                        label: "主标题 / 数字",
                                        hint: "Primary",
                                      },
                                      {
                                        key: "secondary",
                                        label: "副文案",
                                        hint: "Secondary",
                                      },
                                      {
                                        key: "muted",
                                        label: "弱提示",
                                        hint: "Muted",
                                      },
                                      {
                                        key: "bubble",
                                        label: "气泡内字",
                                        hint: "Bubble",
                                      },
                                    ].map(({ key: de, label: Me, hint: et }) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "rounded-2xl border p-3 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
                                          style: {
                                            borderColor:
                                              "var(--ps-card-border)",
                                            backgroundColor:
                                              "var(--ps-glass-mid)",
                                          },
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-modern ps-t-soft text-[8px] font-medium uppercase tracking-[0.22em]",
                                              children: et,
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "font-luxury ps-t-h mt-0.5 text-[0.72rem] italic",
                                              children: Me,
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "mt-2.5 flex items-center gap-2.5",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "relative flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full shadow-[0_4px_16px_var(--ps-a-12)] ring-2",
                                                  style: {
                                                    "--tw-ring-color":
                                                      "var(--ps-glass-border)",
                                                    background: `linear-gradient(145deg, ${he(Hs[de])}, ${he(Hs[de])})`,
                                                  },
                                                  children: e.jsx("input", {
                                                    type: "color",
                                                    className:
                                                      "prism-color-input absolute inset-0 h-full w-full cursor-pointer rounded-full opacity-0",
                                                    value: he(Hs[de]),
                                                    onChange: (Ct) => {
                                                      const Dt = ge(
                                                          nn ? Es : De,
                                                        ),
                                                        Mt = ge({
                                                          ...Dt,
                                                          [de]: Ct.target.value,
                                                        });
                                                      (at(Mt),
                                                        Le({
                                                          themeColors: Mt,
                                                        }));
                                                    },
                                                  }),
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "font-modern ps-t-strong truncate text-[0.58rem] tracking-[0.08em]",
                                                  children: he(Hs[de]),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        de,
                                      ),
                                    ),
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    className:
                                      "font-modern mt-3 flex w-full items-center justify-center gap-2 rounded-full border py-2.5 text-[0.62rem] font-medium tracking-[0.12em] shadow-sm backdrop-blur-sm transition",
                                    style: {
                                      borderColor: "var(--ps-line)",
                                      backgroundColor: "var(--ps-glass-mid)",
                                      color: "var(--ps-text-body)",
                                    },
                                    onClick: () => {
                                      const de = ge(I0(Cs));
                                      (at(de), Le({ themeColors: de }));
                                    },
                                    children: [
                                      e.jsx(Pr, {
                                        className: "h-3.5 w-3.5 opacity-70",
                                        strokeWidth: 2,
                                      }),
                                      "恢复为当前界面主题字色",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("section", {
                                className:
                                  "ps-card relative mb-5 overflow-hidden rounded-[1.4rem] p-4 backdrop-blur-xl",
                                children: [
                                  e.jsxs("div", {
                                    className: "mb-3 flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "prism-atelier-sec-icon ps-ico flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                                        children: e.jsx(Al, {
                                          className: "h-[1.15rem] w-[1.15rem]",
                                          strokeWidth: 1.65,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-modern ps-t-soft text-[9px] font-semibold uppercase tracking-[0.32em]",
                                            children: "Typography",
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-luxury ps-t-h text-base font-medium italic",
                                            children: "排印工坊",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "rounded-2xl border p-3.5 backdrop-blur-sm",
                                    style: {
                                      borderColor: "var(--ps-card-border)",
                                      backgroundColor: "var(--ps-glass-mid)",
                                    },
                                    children: [
                                      e.jsxs("p", {
                                        className:
                                          "font-modern ps-t-body text-[0.62rem] leading-relaxed",
                                        children: [
                                          "支持",
                                          e.jsx("strong", {
                                            className:
                                              "font-medium ps-t-strong",
                                            children: "图床字体直链",
                                          }),
                                          "或",
                                          e.jsx("strong", {
                                            className:
                                              "font-medium ps-t-strong",
                                            children: "本地上传",
                                          }),
                                          "（推荐 .woff2）。直链将尝试内联；需图床允许 CORS，否则走外链加载。",
                                        ],
                                      }),
                                      e.jsx("input", {
                                        type: "url",
                                        inputMode: "url",
                                        placeholder: "https://…/YourFont.woff2",
                                        className:
                                          "font-modern mt-3 w-full rounded-xl border px-3 py-2.5 text-[0.65rem] outline-none focus:ring-2",
                                        style: {
                                          borderColor: "var(--ps-input-border)",
                                          backgroundColor: "var(--ps-input-bg)",
                                          color: "var(--ps-text-h)",
                                          "--tw-ring-color": "var(--ps-a-35)",
                                        },
                                        value: Ye,
                                        onChange: (de) => Ze(de.target.value),
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "mt-2.5 flex flex-wrap gap-2",
                                        children: [
                                          e.jsx("button", {
                                            type: "button",
                                            className:
                                              "font-modern inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.62rem] font-semibold tracking-wide shadow-sm transition",
                                            style: {
                                              borderColor: "var(--ps-line)",
                                              backgroundColor:
                                                "var(--ps-glass-strong)",
                                              color: "var(--ps-text-strong)",
                                            },
                                            onClick: Ya,
                                            children: "应用链接",
                                          }),
                                          e.jsxs("button", {
                                            type: "button",
                                            className:
                                              "font-modern inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.62rem] font-semibold tracking-wide shadow-sm transition",
                                            style: {
                                              borderColor: "var(--ps-a-40)",
                                              background:
                                                "var(--ps-primary-btn)",
                                              color: "var(--ps-accent-2)",
                                              boxShadow:
                                                "0 6px 20px var(--ps-a-15)",
                                            },
                                            onClick: () => {
                                              var de;
                                              return (de = se.current) == null
                                                ? void 0
                                                : de.click();
                                            },
                                            children: [
                                              e.jsx(Ta, {
                                                className: "h-3.5 w-3.5",
                                                strokeWidth: 2,
                                              }),
                                              "上传字体",
                                            ],
                                          }),
                                          ra
                                            ? e.jsxs("button", {
                                                type: "button",
                                                className:
                                                  "font-modern inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.62rem] font-medium tracking-wide",
                                                style: {
                                                  borderColor: "var(--ps-line)",
                                                  backgroundColor:
                                                    "var(--ps-glass-mid)",
                                                  color: "var(--ps-text-body)",
                                                },
                                                onClick: Fr,
                                                children: [
                                                  e.jsx(Pr, {
                                                    className: "h-3.5 w-3.5",
                                                    strokeWidth: 2,
                                                  }),
                                                  "恢复默认",
                                                ],
                                              })
                                            : null,
                                        ],
                                      }),
                                      ra
                                        ? e.jsxs("p", {
                                            className:
                                              "font-modern ps-t-muted mt-2.5 border-t pt-2.5 text-[0.56rem] tracking-wide",
                                            style: {
                                              borderColor: "var(--ps-divider)",
                                            },
                                            children: [
                                              "已启用 ·",
                                              " ",
                                              Oe != null && Oe.url
                                                ? e.jsxs(e.Fragment, {
                                                    children: [
                                                      "外链",
                                                      Oe.format
                                                        ? ` · ${Oe.format}`
                                                        : "",
                                                    ],
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                    children: [
                                                      "本地 / 已内联",
                                                      Oe != null && Oe.format
                                                        ? ` · ${Oe.format}`
                                                        : "",
                                                    ],
                                                  }),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("section", {
                                className:
                                  "ps-card relative mb-1 overflow-hidden rounded-[1.4rem] p-4 backdrop-blur-xl",
                                children: [
                                  e.jsxs("div", {
                                    className: "mb-3 flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "prism-atelier-sec-icon ps-ico flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                                        children: e.jsx(JE, {
                                          className: "h-[1.15rem] w-[1.15rem]",
                                          strokeWidth: 1.65,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-modern ps-t-soft text-[9px] font-semibold uppercase tracking-[0.32em]",
                                            children: "Orbit marks",
                                          }),
                                          e.jsx("h3", {
                                            className:
                                              "font-luxury ps-t-h text-base font-medium italic",
                                            children: "轨道徽记",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "prism-atelier-scroll-mask -mx-1 flex gap-2.5 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] px-1",
                                    children: rt.map((de) => {
                                      const Me = qe === de.id,
                                        et =
                                          (He == null ? void 0 : He[de.id]) ||
                                          {},
                                        Ct = et.iconColor || re.muted;
                                      return e.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => H(de.id),
                                          className: `relative flex shrink-0 flex-col items-center gap-1.5 rounded-2xl border px-3 py-2.5 transition ${Me ? "border-[color:var(--ps-a-45)] bg-white/95 shadow-[0_12px_36px_var(--ps-a-22)] ring-2 ring-[color:var(--ps-a-25)]" : "border-white/65 bg-white/40 hover:border-[color:var(--ps-a-35)] hover:bg-white/75"}`,
                                          children: [
                                            Me
                                              ? e.jsx("span", {
                                                  className:
                                                    "pointer-events-none absolute -top-0.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[color:var(--ps-accent)] to-transparent opacity-90",
                                                })
                                              : null,
                                            e.jsx("div", {
                                              className: `flex h-11 w-11 items-center justify-center rounded-full border bg-gradient-to-br from-white to-white/50 shadow-inner ${Me ? "border-[color:var(--ps-a-40)]" : "border-white/80"}`,
                                              style: { color: Ct },
                                              children: et.iconSvg
                                                ? e.jsx("div", {
                                                    className:
                                                      "prismCustomIcon flex h-5 w-5 items-center justify-center overflow-hidden [&_svg]:max-h-5 [&_svg]:max-w-5",
                                                    style: { color: Ct },
                                                    dangerouslySetInnerHTML: {
                                                      __html: et.iconSvg,
                                                    },
                                                  })
                                                : e.jsx(de.icon, {
                                                    className: "h-5 w-5",
                                                    strokeWidth: 1.5,
                                                  }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "font-modern ps-t-strong max-w-[4.75rem] truncate text-[0.58rem] font-medium tracking-wide",
                                              children: de.zh,
                                            }),
                                          ],
                                        },
                                        de.id,
                                      );
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "relative mt-4 space-y-4 overflow-hidden rounded-2xl border p-4 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                                    style: {
                                      borderColor: "var(--ps-card-border)",
                                      background:
                                        "linear-gradient(to bottom, var(--ps-glass-strong), var(--ps-glass-mid))",
                                    },
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-bl-full blur-2xl",
                                        style: {
                                          backgroundColor: "var(--ps-a-08)",
                                        },
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "font-luxury ps-t-h relative text-[0.72rem] italic",
                                        children: [
                                          "正在编辑 ·",
                                          " ",
                                          e.jsx("span", {
                                            className: "font-medium not-italic",
                                            children:
                                              ((Yt = rt.find(
                                                (de) => de.id === qe,
                                              )) == null
                                                ? void 0
                                                : Yt.zh) ?? "—",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "relative grid grid-cols-2 gap-4",
                                        children: [
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("label", {
                                                className:
                                                  "font-modern ps-t-muted mb-2 block text-[9px] uppercase tracking-[0.24em]",
                                                children: "图标色",
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  e.jsx("input", {
                                                    type: "color",
                                                    className:
                                                      "prism-color-input h-12 w-12 shrink-0 cursor-pointer rounded-full border-[3px] shadow-[0_6px_20px_var(--ps-a-12)]",
                                                    style: {
                                                      borderColor:
                                                        "var(--ps-glass-border)",
                                                    },
                                                    value: xt,
                                                    onChange: (de) =>
                                                      ze(qe, {
                                                        iconColor:
                                                          de.target.value,
                                                      }),
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "font-modern ps-t-strong truncate text-[0.6rem] tracking-wider",
                                                    children: xt,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("label", {
                                                className:
                                                  "font-modern ps-t-muted mb-2 block text-[9px] uppercase tracking-[0.24em]",
                                                children: "标签色",
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-3",
                                                children: [
                                                  e.jsx("input", {
                                                    type: "color",
                                                    className:
                                                      "prism-color-input h-12 w-12 shrink-0 cursor-pointer rounded-full border-[3px] shadow-[0_6px_20px_var(--ps-a-12)]",
                                                    style: {
                                                      borderColor:
                                                        "var(--ps-glass-border)",
                                                    },
                                                    value: zt,
                                                    onChange: (de) =>
                                                      ze(qe, {
                                                        labelColor:
                                                          de.target.value,
                                                      }),
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "font-modern ps-t-strong truncate text-[0.6rem] tracking-wider",
                                                    children: zt,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "relative flex flex-wrap gap-2 border-t pt-4",
                                        style: {
                                          borderColor: "var(--ps-divider)",
                                        },
                                        children: [
                                          e.jsxs("button", {
                                            type: "button",
                                            className:
                                              "font-modern inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.62rem] font-semibold tracking-wide transition",
                                            style: {
                                              borderColor: "var(--ps-a-40)",
                                              background:
                                                "var(--ps-primary-btn)",
                                              color: "var(--ps-accent-2)",
                                              boxShadow:
                                                "0 6px 22px var(--ps-a-14)",
                                            },
                                            onClick: () => {
                                              var de;
                                              return (de = pe.current) == null
                                                ? void 0
                                                : de.click();
                                            },
                                            children: [
                                              e.jsx(Ta, {
                                                className: "h-3.5 w-3.5",
                                                strokeWidth: 2,
                                              }),
                                              "上传 SVG",
                                            ],
                                          }),
                                          dt.iconSvg
                                            ? e.jsx("button", {
                                                type: "button",
                                                className:
                                                  "font-modern inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[0.62rem] font-medium tracking-wide transition",
                                                style: {
                                                  borderColor: "var(--ps-line)",
                                                  backgroundColor:
                                                    "var(--ps-glass-strong)",
                                                  color: "var(--ps-text-body)",
                                                },
                                                onClick: () => lt(qe),
                                                children: "恢复默认图标",
                                              })
                                            : null,
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
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  aC = 13,
  vl = 48,
  jx = 2,
  tm = 8;
function rC(t, s = aC) {
  const n = String(t).trim();
  if (!n) return [];
  const a = [...n],
    r = [];
  for (let i = 0; i < a.length; i += s) r.push(a.slice(i, i + s).join(""));
  return r;
}
function sm(t, s = tm, n = vl) {
  if (!Array.isArray(t)) return [];
  const a = [];
  for (const r of t)
    for (const i of rC(r, n)) {
      if (a.length >= s) return a;
      a.push(i);
    }
  return a;
}
function iC(t, s, n = aC) {
  if (!Array.isArray(t)) return [];
  const a = [];
  for (const r of t)
    for (const i of rC(r, n)) {
      if (a.length >= s) return a;
      a.push(i);
    }
  return a;
}
function xk(t) {
  if (t == null) return null;
  const s = String(t).trim(),
    n = s.match(/```(?:json)?\s*([\s\S]*?)```/i),
    a = n ? n[1].trim() : s,
    r = a.indexOf("["),
    i = a.lastIndexOf("]");
  if (r < 0 || i <= r) return null;
  try {
    return JSON.parse(a.slice(r, i + 1));
  } catch {
    return null;
  }
}
function hk(t) {
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
function $f(t) {
  return Array.isArray(t) ? t.map((s) => String(s).trim()).filter(Boolean) : [];
}
function jV(t, s, n, a) {
  const r =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    i = (t == null ? void 0 : t.setting) || "（无详细设定）",
    o = (s == null ? void 0 : s.name) || "用户",
    c = (s == null ? void 0 : s.settings) || "（无）",
    d =
      n.length > 0
        ? n.join(`
`)
        : "（无：情侣空间一起听界面内未留下文本记录）",
    u =
      a.length > 0
        ? a.join(`
`)
        : "（尚无最近单聊）";
  return `【系统任务】用户刚刚在情侣空间**结束**了「一起听」。${r} 需要像在微信里**连发 4～10 条**短消息，表达听完歌后的余韵、心情、想对 ${o} 说的话；语气自然、符合人设，可呼应下方「一起听界面记录」与「最近单聊」。

【硬性要求】
- 仅输出一个 **JSON 数组**（字符串元素），长度 **4～10**，每条适合单独一条聊天气泡；**每条最多 13 个字符**（含标点），超长请拆成多条数组元素；不要 Markdown，不要数组以外的任何文字。
- 整段语义连贯、像一个真人分段发消息，禁止前言不搭后语或自相矛盾。
- 主题是「刚一起听完歌之后」的反应，不要写成拒绝邀请或刚开始听。

【一起听界面记录（情侣空间内，用户/角色气泡文案，按时间顺序）】
${d}

【最近单聊摘要（与同一角色，最多约 15 条，新→旧或旧→新均可参考）】
${u}

【角色】${r}
人设：${i}

【绑定用户】${o}
用户人设：${c}`;
}
async function NV({
  contact: t,
  getLatestMessages: s,
  createChat: n,
  getRoleBoundUser: a,
  callApi: r,
  receiveMessage: i,
  apiConfigured: o,
  loadListenTogetherHistory: c,
}) {
  if (!o) return { ok: !1, error: "api_not_configured" };
  const d = n == null ? void 0 : n(t.id);
  if (!d || typeof i != "function") return { ok: !1, error: "no_chat" };
  const u = (a == null ? void 0 : a(t)) ?? {},
    f = (u == null ? void 0 : u.name) || "用户",
    p =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色";
  let m = [];
  try {
    m = typeof c == "function" ? await c(t.id) : [];
  } catch {
    m = [];
  }
  const h = (Array.isArray(m) ? m : []).slice(-50).map((_) => {
      const A = (_ == null ? void 0 : _.from) === "user" ? f : p,
        k = String((_ == null ? void 0 : _.text) || "")
          .replace(/\s+/g, " ")
          .trim();
      return `${A}：${k || "…"}`;
    }),
    y = ((typeof s == "function" ? s(t.id) : []) || []).slice(-15).map((_) => {
      const A = _.sender === "me" ? f : p,
        k = String(_.text || "")
          .replace(/\s+/g, " ")
          .trim();
      return `${A}：${k || "…"}`;
    }),
    v = jV(t, u, h, y),
    b = async (_) => {
      const A = _
        ? `${v}

${_}`
        : v;
      return r(
        [{ sender: "me", text: A }],
        t,
        "system_generation",
        {},
        [],
        [],
        [],
        !1,
        "",
        u,
      );
    };
  let N;
  try {
    N = await b();
  } catch {
    return { ok: !1, error: "api_failed" };
  }
  let w = $f(xk(N));
  if (w.length < 4) {
    const _ = hk(N);
    _ != null && _.messages
      ? (w = $f(_.messages))
      : _ != null && _.lines && (w = $f(_.lines));
  }
  if (w.length < 4 || w.length > 10) {
    try {
      N = await b(
        "若上一条无法解析，请**只**输出 JSON 数组，长度严格在 4～10 之间，元素为角色发的短句字符串。",
      );
    } catch {
      return { ok: !1, error: "retry_failed" };
    }
    if (((w = $f(xk(N))), w.length < 4)) {
      const _ = hk(N);
      _ != null && _.messages && (w = $f(_.messages));
    }
  }
  if (w.length < 4) return { ok: !1, error: "parse_failed" };
  if (((w = iC(w, 10)), w.length < 4)) return { ok: !1, error: "parse_failed" };
  try {
    await i(d, w.join("||"));
  } catch {
    return { ok: !1, error: "receive_failed" };
  }
  return { ok: !0 };
}
function Nx(t) {
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
function gk(t) {
  if (t == null) return null;
  const s = String(t).trim(),
    n = s.match(/```(?:json)?\s*([\s\S]*?)```/i),
    a = n ? n[1].trim() : s,
    r = a.indexOf("["),
    i = a.lastIndexOf("]");
  if (r < 0 || i <= r) return null;
  try {
    return JSON.parse(a.slice(r, i + 1));
  } catch {
    return null;
  }
}
function kV(t, s, n) {
  const a =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    r = (t == null ? void 0 : t.setting) || "（无详细设定）",
    i = (s == null ? void 0 : s.name) || "用户",
    o = (s == null ? void 0 : s.settings) || "（无）",
    c =
      n.length > 0
        ? n.join(`
`)
        : "（尚无最近消息）";
  return `【系统任务】用户在「情侣空间」转盘点击了「一起听」，向 ${a} 发起邀请。请根据人设、绑定用户人设与最近私聊，判断角色是否愿意此刻与对方「一起听」（情绪上的一起陪伴/共享氛围，不必涉及真实音乐播放器）。

【角色】${a}
人设：${r}

【绑定用户】${i}
用户人设：${o}

【最近最多 10 条单聊摘要】
${c}

请仅输出一个 JSON 对象（不要 Markdown），格式严格如下：
{
  "agree": true 或 false,
  "rejectMessages": ["...", ...],
  "acceptBubbleLines": ["...", ...]
}

规则：
- 若 agree 为 false：rejectMessages 为 4～10 条字符串，角色口吻，每条适合单独一条聊天气泡；**每条最多 13 个字符**（超长请拆成多条字符串）；acceptBubbleLines 置为 []。
- 若 agree 为 true：rejectMessages 置为 []；acceptBubbleLines 为 **2～8 条**字符串，是角色同意后想对对方说的话；**每条最多 ${vl} 字**；**各句字数须长短不一**；**严格符合人设、禁止 OOC**；**数组顺序即轮播顺序**，须语义连贯、前后衔接，禁止前后矛盾或前言不搭后语。
- 不要输出 JSON 以外的任何文字。`;
}
function SV(t, s, n) {
  const a =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    r = (t == null ? void 0 : t.setting) || "（无详细设定）",
    i = (s == null ? void 0 : s.name) || "用户",
    o = (s == null ? void 0 : s.settings) || "（无）",
    c = n.length
      ? n.join(`
`)
      : "（尚无最近消息）";
  return `【系统任务】用户在情侣空间邀请「一起听」，${a} 需要拒绝。请严格以该角色口吻，生成 4～10 条**独立的**短回复（适合聊天软件逐条发送），表示暂时不能一起听或婉拒，符合人设。**每条最多 13 个字符**（含标点）；超长请拆成多条 messages。

【角色】${a} 人设：${r}
【绑定用户】${i} 人设：${o}
【最近聊天摘要】
${c}

请只输出一个 JSON 对象，格式：{"messages":["第1条","第2条",...]}，messages 数组长度必须在 4～10 之间。不要其它文字。`;
}
function _V(t, s, n) {
  const a =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    r = (t == null ? void 0 : t.setting) || "（无详细设定）",
    i = (s == null ? void 0 : s.name) || "用户",
    o = (s == null ? void 0 : s.settings) || "（无）",
    c = n.length
      ? n.join(`
`)
      : "（尚无最近消息）";
  return `【系统任务】${a} 已同意与 ${i} 在情侣空间「一起听」。请输出该角色此刻想对对方说的 **2～8 句**话（每句独立、口语、**严格符合人设、禁止 OOC**），用于界面头像旁气泡**按数组顺序**轮播。

【硬性要求】**每一句最多 ${vl} 个字符**；超长请拆成多条数组元素。**各句字数须长短不一**，禁止每句都差不多长。数组顺序即播放顺序；整段须同一语境、语义连贯、层层递进，禁止前后矛盾或前言不搭后语。

【角色】人设：${r}
【用户】人设：${o}
【最近聊天摘要】
${c}

请只输出 JSON 数组，例如 ["第一句","第二句"]，长度 2～8。不要 Markdown，不要其它文字。`;
}
function Hd(t) {
  return Array.isArray(t) ? t.map((s) => String(s).trim()).filter(Boolean) : [];
}
async function AV({
  contact: t,
  getLatestMessages: s,
  createChat: n,
  getRoleBoundUser: a,
  callApi: r,
  receiveMessage: i,
  apiConfigured: o,
}) {
  if (!o) return { ok: !1, error: "api_not_configured" };
  const c = (a == null ? void 0 : a(t)) ?? {},
    d = n == null ? void 0 : n(t.id);
  if (!d || !i) return { ok: !1, error: "no_chat" };
  const f = ((typeof s == "function" ? s(t.id) : []) || []).slice(-10),
    p = (c == null ? void 0 : c.name) || "用户",
    m =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    h = f.map((_) => {
      const A = _.sender === "me" ? p : m,
        k = String(_.text || "")
          .replace(/\s+/g, " ")
          .trim();
      return `${A}：${k || "…"}`;
    }),
    g = async (_) => {
      const A = kV(t, c, h),
        k = _
          ? `${A}

${_}`
          : A;
      return r(
        [{ sender: "me", text: k }],
        t,
        "system_generation",
        {},
        [],
        [],
        [],
        !1,
        "",
        c,
      );
    };
  let x;
  try {
    x = await g();
  } catch {
    return { ok: !1, error: "decision_api_failed" };
  }
  let y = Nx(x);
  if (!y)
    try {
      ((x = await g(
        "若上一条无法解析，请重新输出且**仅**输出合法 JSON 对象，键名 agree、rejectMessages、acceptBubbleLines 不变。",
      )),
        (y = Nx(x)));
    } catch {
      return { ok: !1, error: "decision_parse_failed" };
    }
  if (!y) return { ok: !1, error: "decision_parse_failed" };
  const v = !!y.agree;
  let b = Hd(y.rejectMessages);
  if (!v) {
    if (b.length < 4 || b.length > 10) {
      let _;
      try {
        _ = await r(
          [{ sender: "me", text: SV(t, c, h) }],
          t,
          "system_generation",
          {},
          [],
          [],
          [],
          !1,
          "",
          c,
        );
      } catch {
        return { ok: !1, error: "reject_api_failed" };
      }
      const A = Nx(_);
      if (((b = Hd(A == null ? void 0 : A.messages)), b.length < 4)) {
        const k = gk(_);
        b = Hd(k);
      }
      if (b.length < 4 || b.length > 10)
        return { ok: !1, error: "reject_parse_failed" };
    }
    if (((b = iC(b, 10)), b.length < 4))
      return { ok: !1, error: "reject_parse_failed" };
    try {
      await i(d, b.join("||"));
    } catch {
      return { ok: !1, error: "receive_failed" };
    }
    return { ok: !0, agree: !1 };
  }
  const N = async (_) => {
    const A = _V(t, c, h),
      k = _
        ? `${A}

${_}`
        : A;
    let C;
    try {
      C = await r(
        [{ sender: "me", text: k }],
        t,
        "system_generation",
        {},
        [],
        [],
        [],
        !1,
        "",
        c,
      );
    } catch {
      return null;
    }
    let M = gk(C);
    if (((M = Hd(M)), M.length < 2)) {
      const E = Nx(C);
      E != null && E.acceptBubbleLines
        ? (M = Hd(E.acceptBubbleLines))
        : E != null && E.lines && (M = Hd(E.lines));
    }
    return ((M = sm(M)), M.length >= 2 && M.length <= 8 ? M : null);
  };
  let w = await N();
  return (
    w ||
      (w = await N(
        `若上一条无法解析，请**只**输出 JSON 数组，长度 2～8，每句≤${vl}字。`,
      )),
    !w || w.length < 2
      ? { ok: !1, error: "accept_lines_failed" }
      : { ok: !0, agree: !0, acceptBubbleLines: w }
  );
}
function n2(t) {
  const s = String(t || "").trim();
  return s
    ? s.length > 2800
      ? `${s.slice(0, 2800)}…`
      : s
    : "（暂无歌词文本；可结合歌名与氛围发挥，但不要编造带引号的「假歌词」）";
}
function kx(t) {
  if (t == null) return null;
  const s = String(t).trim(),
    n = s.match(/```(?:json)?\s*([\s\S]*?)```/i),
    a = n ? n[1].trim() : s,
    r = a.indexOf("["),
    i = a.lastIndexOf("]");
  if (r < 0 || i <= r) return null;
  try {
    return JSON.parse(a.slice(r, i + 1));
  } catch {
    return null;
  }
}
function bk(t) {
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
const yk = new Set(["none", "next", "prev", "changePlaylist"]),
  a2 = "（暂无播放次数统计）";
function CV({
  contact: t,
  boundUser: s,
  recentLines: n,
  playlistLabel: a,
  trackTitle: r,
  trackArtist: i,
  userBubbleText: o,
  sessionPlayContext: c,
  lyricLinesBlock: d,
}) {
  const u =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    f = (t == null ? void 0 : t.setting) || "（无详细设定）",
    p = (s == null ? void 0 : s.name) || "用户",
    m = (s == null ? void 0 : s.settings) || "（无）",
    h = n.length
      ? n.join(`
`)
      : "（尚无最近消息）",
    g =
      [a && `歌单：${a}`, r && `当前曲目：${r}`, i && `艺人：${i}`]
        .filter(Boolean)
        .join("；") || "（未绑定或未在播放）",
    x = (o || "").trim() || "（用户尚未输入）",
    y = (c || "").trim() || a2,
    v = n2(d);
  return `【系统任务】两人正在情侣空间「一起听」。用户（绑定用户）刚才在界面里发了一句心里话/状态（显示在用户头像旁气泡）：「${x}」

请扮演角色 ${u}，结合当前播放环境、人设、歌词节选与最近聊天，输出 **2～8 句**「听歌感悟或回应对方」的台词（口语、**严格符合人设、禁止 OOC**），用于左侧角色头像上方气泡**按数组顺序**轮播。

【硬性要求】
- **每一句最多 ${vl} 个字符**（汉字、字母、标点均算 1 个）；若一句会超长，请拆成**多条数组元素**，不要挤在同一条字符串里。
- **各句字数要有明显长短差异**，禁止每句都差不多长、像机械分行；短句可以很短，长句可以写满到上限附近。
- **听歌感悟至少有一句要落到歌词上**：当下方有歌词节选时，**至少引用或点出其中某一整句或半句**（用「」括起原词或明确说是哪一句）；无歌词节选时，只可结合歌名与氛围，**不要编造带引号的假歌词**。
- 数组长度须在 **2～8** 之间。
- JSON 数组的**下标顺序即播放顺序**，禁止乱序、禁止重排数组。
- 须**同一语境、语义连贯**，禁止前后矛盾、跳题、前言不搭后语。

【角色】${u}
人设：${f}

【绑定用户】${p}
用户人设：${m}

【音乐环境】${g}

【本曲歌词节选（供引用；无则按上文说明处理）】
${v}

【本次一起听 · 播放统计】
${y}

【最近最多 10 条单聊摘要】
${h}

请只输出 JSON 数组，2～8 个字符串，不要 Markdown，不要其它说明文字。`;
}
function MV({
  contact: t,
  boundUser: s,
  recentLines: n,
  playlistLabel: a,
  trackTitle: r,
  trackArtist: i,
  userBubbleText: o,
  sessionPlayContext: c,
  lyricLinesBlock: d,
}) {
  const u =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    f = (t == null ? void 0 : t.setting) || "（无详细设定）",
    p = (s == null ? void 0 : s.name) || "用户",
    m = (s == null ? void 0 : s.settings) || "（无）",
    h = n.length
      ? n.join(`
`)
      : "（尚无最近消息）",
    g =
      [a && `歌单：${a}`, r && `当前曲目：${r}`, i && `艺人：${i}`]
        .filter(Boolean)
        .join("；") || "（未绑定或未在播放）",
    x = (o || "").trim() || "（用户尚未输入）",
    y = (c || "").trim() || a2,
    v = n2(d),
    b = vl;
  return `【系统任务】两人正在情侣空间「一起听」，用户刚才的头像旁气泡文案：「${x}」

请扮演角色 ${u}，结合人设、歌词节选、最近单聊与当前播放信息。本次回复需要**同时**：
1）输出轮播台词 lines（**2～8 句**，口语、**严格符合人设、禁止 OOC**；**每一句字符串最多 ${b} 个字符**，超长则拆成多条 lines 元素）；
2）决定角色是否要**操作一起听播放器**：playerAction。

【playerAction 含义】
- "none"：不切歌、不换歌单，只说话。
- "next"：角色想切到**下一首**（例如不喜欢当前曲、想快进、想换心情）。
- "prev"：角色想**上一首**（例如想再听刚才那首、手滑了想倒回去）。
- "changePlaylist"：角色想**换一个歌单**（例如当前歌单整体不对味、想换一批歌）。

【硬性要求】
- **各句字数要有明显长短差异**，禁止每句都差不多长。
- **听歌感悟至少有一句要落到歌词上**：有歌词节选时至少引用或点出其中一句（用「」）；无节选时不要编造假歌词。
- 约 **50%～72%** 的情境下，角色会依据**人设**做出 next / prev / changePlaylist 之一；人设与「不爱动播放器」冲突时须多用 "none"。**禁止**为凑概率而与人设矛盾。
- lines 总条数须在 **2～8**；每条字符串 **≤${b} 字**。
- 当 playerAction 不是 "none" 时，lines **必须**先体现动机或情绪，并有一句对操作的确认/吐槽，整体连贯。
- lines 数组顺序即轮播顺序；禁止与 playerAction 语义冲突。

【角色】${u}
人设：${f}

【绑定用户】${p}
用户人设：${m}

【音乐环境】${g}

【本曲歌词节选（供引用）】
${v}

【本次一起听 · 播放统计】
${y}

【最近最多 10 条单聊摘要】
${h}

请**只输出一个 JSON 对象**（不要 Markdown），格式严格如下：
{
  "lines": ["第1句", "第2句", ...],
  "playerAction": "none" | "next" | "prev" | "changePlaylist"
}`;
}
function TV({
  contact: t,
  boundUser: s,
  recentLines: n,
  playlistLabel: a,
  trackTitle: r,
  trackArtist: i,
  userBubbleText: o,
  trackEventReason: c,
  sessionPlayContext: d,
  lyricLinesBlock: u,
}) {
  const f =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    p = (t == null ? void 0 : t.setting) || "（无详细设定）",
    m = (s == null ? void 0 : s.name) || "用户",
    h = (s == null ? void 0 : s.settings) || "（无）",
    g = n.length
      ? n.join(`
`)
      : "（尚无最近消息）",
    x = (o || "").trim() || "（无）",
    y = (d || "").trim() || a2,
    v = n2(u),
    b = vl,
    N = r || "未知曲目",
    w = i || "";
  let _ = "";
  return (
    c === "user_next"
      ? (_ = "用户刚点了「下一首」，播放器已切到当前这首。")
      : c === "user_prev"
        ? (_ = "用户刚点了「上一首」，播放器已切到当前这首。")
        : c === "user_pick"
          ? (_ = "用户刚从歌单列表里点选了一首，播放器已切到当前这首。")
          : c === "char_next"
            ? (_ = `角色「${f}」刚在「一起听」里切到下一首，播放器已切到当前这首。`)
            : c === "char_prev"
              ? (_ = `角色「${f}」刚在「一起听」里切到上一首，播放器已切到当前这首。`)
              : c === "auto_skip_fail"
                ? (_ = "上一首因资源等原因无法播放，已自动跳到当前这首。")
                : (_ = "上一首已播放完毕，播放器已自动切到当前这首。"),
    `【系统任务】两人正在情侣空间「一起听」。${_}

【当前曲目】${N}${w ? ` — ${w}` : ""}
【歌单】${a || "未知"}
用户头像旁气泡状态：「${x}」

请扮演角色 ${f}，结合人设、歌词节选与最近单聊，输出 **2～8 句**（口语、**严格符合人设、禁止 OOC**），表达角色对**刚换到这首歌**的即时反应；用于左侧角色头像上方气泡**按数组顺序**轮播。
本轮**仅**输出听歌反应，**不要**在文本中假装再切歌、不要输出任何播放器指令。

【本曲歌词节选（供引用）】
${v}

【本次一起听 · 播放统计】
${y}

【硬性要求】
- **每一句最多 ${b} 个字符**；超长请拆成多条数组元素。
- **各句字数要有明显长短差异**；有歌词节选时**至少有一句用「」点出某句具体歌词**；无节选时不要编造假歌词。
- 数组长度 **2～8**；须语义连贯、符合「刚切歌」情境。

【角色】${f}
人设：${p}

【绑定用户】${m}
用户人设：${h}

【最近最多 10 条单聊摘要】
${g}

请只输出 JSON 数组，2～8 个字符串，不要 Markdown，不要其它说明文字。`
  );
}
function Sx(t) {
  return Array.isArray(t) ? t.map((s) => String(s).trim()).filter(Boolean) : [];
}
async function vk({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  apiConfigured: r,
  playlistLabel: i,
  trackTitle: o,
  trackArtist: c,
  userBubbleText: d,
  allowDjInteraction: u = !1,
  trackEventReason: f = null,
  sessionPlayContext: p = "",
  lyricLinesBlock: m = "",
}) {
  if (!r) return { ok: !1, error: "api_not_configured" };
  const h = (n == null ? void 0 : n(t)) ?? {},
    x = ((typeof s == "function" ? s(t.id) : []) || []).slice(-10),
    y = (h == null ? void 0 : h.name) || "用户",
    v =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    b = x.map((E) => {
      const S = E.sender === "me" ? y : v,
        j = String(E.text || "")
          .replace(/\s+/g, " ")
          .trim();
      return `${S}：${j || "…"}`;
    }),
    N = {
      contact: t,
      boundUser: h,
      recentLines: b,
      playlistLabel: i || "",
      trackTitle: o || "",
      trackArtist: c || "",
      userBubbleText: d,
      sessionPlayContext: p,
      lyricLinesBlock: m,
    },
    w = async () => {
      const E = TV({ ...N, trackEventReason: f });
      let S;
      try {
        S = await a(
          [{ sender: "me", text: E }],
          t,
          "system_generation",
          {},
          [],
          [],
          [],
          !1,
          "",
          h,
        );
      } catch {
        return { ok: !1, error: "api_failed" };
      }
      let j = kx(S);
      if (!j || !Array.isArray(j))
        try {
          ((S = await a(
            [
              {
                sender: "me",
                text: `${E}

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
            (j = kx(S)));
        } catch {
          return { ok: !1, error: "parse_failed" };
        }
      if (!Array.isArray(j)) return { ok: !1, error: "parse_failed" };
      const T = sm(Sx(j));
      return T.length < jx
        ? { ok: !1, error: "parse_failed" }
        : {
            ok: !0,
            lines: T.length > tm ? T.slice(0, tm) : T,
            playerAction: "none",
          };
    };
  if (
    f === "ended" ||
    f === "user_next" ||
    f === "user_prev" ||
    f === "user_pick" ||
    f === "char_next" ||
    f === "char_prev" ||
    f === "auto_skip_fail"
  )
    return w();
  const _ = u ? MV(N) : CV(N);
  let A;
  try {
    A = await a(
      [{ sender: "me", text: _ }],
      t,
      "system_generation",
      {},
      [],
      [],
      [],
      !1,
      "",
      h,
    );
  } catch {
    return { ok: !1, error: "api_failed" };
  }
  if (u) {
    let E = bk(A),
      S = sm(Sx(E == null ? void 0 : E.lines)),
      j = "none";
    if (
      ((E == null ? void 0 : E.playerAction) != null &&
        yk.has(String(E.playerAction).trim()) &&
        (j = String(E.playerAction).trim()),
      S.length < jx)
    )
      try {
        ((A = await a(
          [
            {
              sender: "me",
              text: `${_}