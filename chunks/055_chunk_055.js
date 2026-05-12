                    className:
                      "absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#A38F72]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#A38F72]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-0 bottom-0 left-0 w-full bg-gradient-to-b from-transparent via-[#A38F72]/20 to-transparent animate-[scan_3s_ease-in-out_infinite]",
                  }),
                  e.jsx(O0, {
                    className:
                      "absolute w-48 h-48 text-[#A38F72]/10 animate-[spin_30s_linear_infinite]",
                    strokeWidth: 0.5,
                  }),
                  e.jsxs("div", {
                    className:
                      "relative w-32 h-32 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-tr from-[#A38F72] to-white rotate-45 opacity-50 blur-xl",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-2 bg-gradient-to-bl from-[#2C2A29] to-[#121212] rotate-45 border-2 border-[#A38F72] z-10 shadow-2xl flex items-center justify-center",
                        children: e.jsx(Sg, {
                          className: "w-12 h-12 text-[#FDFCF8]",
                          strokeWidth: 1,
                        }),
                      }),
                      e.jsx(Xn, {
                        className:
                          "w-8 h-8 text-white z-20 absolute -top-4 -right-4 animate-pulse",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-1 border-l-2 border-[#A38F72] pl-6 relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 -left-1.5 w-2.5 h-2.5 bg-[#0A0A0A] border-2 border-[#A38F72] rounded-full",
                  }),
                  e.jsx("h2", {
                    className:
                      "text-[10px] tracking-[0.4em] text-[#A38F72] uppercase mb-1",
                    children: "Material Analysis",
                  }),
                  e.jsx("h1", {
                    className:
                      "text-3xl font-serif text-[#FDFCF8] mb-6 tracking-wider",
                    children: "一阶回忆碎片",
                  }),
                  e.jsxs("div", {
                    className: "space-y-4 mb-8",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-end justify-between border-b border-[#5A5550]/50 pb-2",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] text-[#8C857B] uppercase tracking-widest",
                            children: "Origin",
                          }),
                          e.jsx("span", {
                            className: "text-sm font-serif text-[#E5E0D8]",
                            children: "Season 04 - 星空瞭望塔",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-end justify-between border-b border-[#5A5550]/50 pb-2",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] text-[#8C857B] uppercase tracking-widest",
                            children: "Resonance Lv.",
                          }),
                          e.jsx("span", {
                            className: "text-sm font-serif text-[#E5E0D8]",
                            children: "Class A",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-end justify-between border-b border-[#5A5550]/50 pb-2",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] text-[#8C857B] uppercase tracking-widest",
                            children: "Timestamp",
                          }),
                          e.jsx("span", {
                            className: "text-sm font-serif text-[#E5E0D8]",
                            children: new Date().toISOString().slice(0, 10),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-[#1A1A1A] border border-[#5A5550] p-4 relative",
                    children: [
                      e.jsx(LI, {
                        className:
                          "absolute -top-3 -right-3 w-6 h-6 text-[#A38F72]/40",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-[#8C857B] tracking-widest uppercase mb-2",
                        children: "Memory Decoded",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs leading-relaxed text-[#D4C4B7] font-serif italic",
                        children:
                          "你们在凌晨完成了天空的拼图，这段记忆已被压缩并封存于陈列室。",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    rn = () =>
      e.jsxs("div", {
        className:
          "absolute inset-0 z-[70] bg-[#1A1817] flex flex-col animate-in slide-in-from-bottom-12 duration-700 overflow-hidden",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 opacity-10",
            style: {
              backgroundImage: "radial-gradient(#A38F72 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            },
          }),
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-4 flex items-center justify-between relative z-20",
            children: [
              e.jsxs("button", {
                type: "button",
                onClick: () => E("showroom"),
                className:
                  "flex items-center gap-2 text-[#A38F72] hover:text-[#FDFCF8] transition-colors group",
                children: [
                  e.jsx(un, {
                    className:
                      "w-5 h-5 group-hover:-translate-x-1 transition-transform",
                  }),
                  e.jsx("span", {
                    className: "text-[10px] tracking-[0.3em] uppercase",
                    children: "Close File",
                  }),
                ],
              }),
              e.jsx(x8, { className: "w-4 h-4 text-[#5A5550]" }),
            ],
          }),
          e.jsx("div", {
            className:
              "flex-1 flex flex-col justify-center px-6 pb-20 relative z-10",
            children: e.jsxs("div", {
              className:
                "relative w-full bg-[#FDFCF8] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[-1deg] hover:rotate-0 transition-transform duration-500 ease-out border border-[#D4C4B7]",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#000_0.5px,transparent_0.5px)] [background-size:8px_8px]",
                }),
                e.jsxs("div", {
                  className: "p-8",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex justify-between items-start border-b-2 border-[#2C2A29] pb-4 mb-8",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("h2", {
                              className:
                                "text-3xl font-serif text-[#2C2A29] tracking-tight mb-1",
                              children: "关系画像",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-[10px] tracking-[0.2em] text-[#8C857B] uppercase font-mono",
                              children: [
                                (
                                  (tt == null ? void 0 : tt.seasonNo) ||
                                  "Season --"
                                ).toUpperCase(),
                                " // Archived",
                              ],
                            }),
                          ],
                        }),
                        e.jsx(xc, { className: "w-12 h-12 text-[#2C2A29]" }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mb-10 text-center relative",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute left-0 right-0 top-1/2 h-[1px] bg-[#E5E0D8] -z-10",
                        }),
                        e.jsx("span", {
                          className:
                            "bg-[#FDFCF8] px-4 text-[10px] text-[#A38F72] uppercase tracking-[0.3em]",
                          children: "Resonance Score",
                        }),
                        e.jsxs("div", {
                          className: "mt-2 flex items-end justify-center gap-1",
                          children: [
                            e.jsx("span", {
                              className: "text-7xl font-serif text-[#2C2A29]",
                              children:
                                (tt == null ? void 0 : tt.score) ?? "--",
                            }),
                            e.jsx("span", {
                              className: "text-3xl text-[#2C2A29] pb-1",
                              children: "%",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[9px] uppercase tracking-widest text-[#A38F72] mb-2 border-l-2 border-[#A38F72] pl-2",
                              children: "TA Observation Report",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[13px] leading-relaxed text-[#2C2A29] font-serif bg-[#F5F3ED] p-4 border border-[#E5E0D8]",
                              children:
                                (tt == null ? void 0 : tt.diary) ||
                                "暂无归档日记内容。",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[9px] uppercase tracking-widest text-[#A38F72] mb-3 border-l-2 border-[#A38F72] pl-2",
                              children: "Assigned Tags",
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children:
                                Array.isArray(tt == null ? void 0 : tt.tags) &&
                                tt.tags.length > 0
                                  ? tt.tags
                                      .slice(0, 4)
                                      .map((ot, st) =>
                                        e.jsxs(
                                          "span",
                                          {
                                            className:
                                              st === 0
                                                ? "px-3 py-1 bg-[#2C2A29] text-[#FDFCF8] text-[10px] uppercase tracking-widest font-medium"
                                                : "px-3 py-1 border border-[#2C2A29] text-[#2C2A29] text-[10px] uppercase tracking-widest",
                                            children: ["# ", ot],
                                          },
                                          `${(tt == null ? void 0 : tt.id) || "archive"}_${st}`,
                                        ),
                                      )
                                  : e.jsx("span", {
                                      className:
                                        "px-3 py-1 border border-[#D4C4B7] text-[#8C857B] text-[10px] uppercase tracking-widest",
                                      children: "# 暂无标签",
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
          }),
        ],
      }),
    wt = () => {
      var ot;
      return e.jsxs("div", {
        className:
          "absolute inset-0 z-[60] bg-[#121212] flex flex-col items-center justify-center p-6 animate-in fade-in duration-700 overflow-hidden text-[#FDFCF8]",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 opacity-10 pointer-events-none",
            style: {
              backgroundImage:
                "radial-gradient(circle at center, #A38F72 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#A38F72]/30 rounded-full animate-[spin_40s_linear_infinite] border-dashed",
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#5A5550]/20 rounded-full animate-[spin_60s_linear_infinite_reverse]",
          }),
          e.jsxs("div", {
            className:
              "absolute left-8 top-[calc(env(safe-area-inset-top,0px)+48px)]",
            children: [
              e.jsx("p", {
                className: "text-[8px] tracking-[0.4em] text-[#A38F72] mb-1",
                children: "SYSTEM.REWARD.CLAIM",
              }),
              e.jsxs("p", {
                className: "text-[10px] font-serif text-[#5A5550]",
                children: [
                  "ITEM NO. ",
                  te ? String(te.label || "").toUpperCase() : "--",
                ],
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => E(null),
            className:
              "absolute right-8 top-[calc(env(safe-area-inset-top,0px)+48px)] w-8 h-8 flex items-center justify-center border border-[#A38F72] text-[#A38F72] hover:bg-[#A38F72] hover:text-[#121212] transition-colors z-10 rounded-full",
            children: e.jsx(Ts, { className: "w-4 h-4" }),
          }),
          e.jsxs("div", {
            className:
              "relative w-full max-w-[280px] p-2 border border-[#5A5550] bg-[#1A1A1A] shadow-[0_0_50px_rgba(163,143,114,0.15)] z-10 group mt-4",
            children: [
              e.jsx("div", {
                className: "absolute -top-1 -left-1 w-2 h-2 bg-[#A38F72]",
              }),
              e.jsx("div", {
                className: "absolute -top-1 -right-1 w-2 h-2 bg-[#A38F72]",
              }),
              e.jsx("div", {
                className: "absolute -bottom-1 -left-1 w-2 h-2 bg-[#A38F72]",
              }),
              e.jsx("div", {
                className: "absolute -bottom-1 -right-1 w-2 h-2 bg-[#A38F72]",
              }),
              e.jsxs("div", {
                className:
                  "border border-[#5A5550] border-dashed p-8 flex flex-col items-center relative overflow-hidden bg-[#121212]",
                children: [
                  e.jsx(O0, {
                    className:
                      "absolute -top-12 -right-12 w-36 h-36 text-[#FDFCF8]/5 animate-[spin_20s_linear_infinite]",
                    strokeWidth: 0.5,
                  }),
                  e.jsx("p", {
                    className:
                      "text-[10px] uppercase tracking-widest text-[#A38F72] mb-10 border-b border-[#A38F72] pb-1 z-10 relative",
                    children: "Artifact Unlocked",
                  }),
                  e.jsxs("div", {
                    className:
                      "relative w-28 h-28 mb-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-700",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-tr from-[#A38F72] to-[#FDFCF8] rotate-45 opacity-60 blur-[6px] group-hover:blur-xl transition-all duration-700",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-3 bg-gradient-to-bl from-[#2C2A29] to-[#5A5550] rotate-45 border border-[#A38F72] z-10 flex items-center justify-center shadow-inner",
                        children: e.jsx(Sg, {
                          className: "w-10 h-10 text-[#A38F72] rotate-12",
                          strokeWidth: 1,
                        }),
                      }),
                      e.jsx(Xn, {
                        className:
                          "w-5 h-5 text-[#FDFCF8] z-20 absolute -top-1 -right-1 animate-pulse",
                      }),
                      e.jsx(Xn, {
                        className:
                          "w-3 h-3 text-[#A38F72] z-20 absolute -bottom-2 -left-2 animate-bounce",
                      }),
                    ],
                  }),
                  e.jsx("h3", {
                    className:
                      "text-2xl font-serif text-[#FDFCF8] mb-3 relative z-10",
                    children: te
                      ? `${String(te.label || "").toUpperCase()} 阶段奖励`
                      : "暂无可领取奖励",
                  }),
                  e.jsx("p", {
                    className:
                      "text-[11px] text-[#8C857B] text-center leading-relaxed font-serif italic mb-8 relative z-10",
                    children: te
                      ? `已达到第 ${te.dayThreshold} 天里程碑，可手动领取本阶段碎片。`
                      : "继续推进赛季天数并维持低失败率，即可解锁下一阶段奖励。",
                  }),
                  e.jsx("div", {
                    className: "flex gap-1 w-full justify-center opacity-40",
                    children: [1, 2, 4, 1, 3, 2, 5, 1, 2].map((st, $t) =>
                      e.jsx(
                        "div",
                        {
                          className: "h-4 bg-[#A38F72]",
                          style: { width: `${st * 2}px` },
                        },
                        $t,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("button", {
            type: "button",
            disabled: !te || Te,
            onClick: () => te && ct(te),
            className:
              "mt-12 text-[#FDFCF8] text-[11px] tracking-[0.3em] uppercase border border-[#A38F72] px-8 py-4 hover:bg-[#A38F72] hover:text-[#121212] transition-colors relative z-10 flex items-center gap-3 group disabled:opacity-40",
            children: [
              e.jsx(xc, {
                className: "w-4 h-4 group-hover:scale-110 transition-transform",
              }),
              Te ? "领取中..." : te ? "收录至陈列室" : "等待解锁",
            ],
          }),
          (ot = F == null ? void 0 : F.lastClaimStory) != null && ot.content
            ? e.jsxs("div", {
                className:
                  "mt-5 w-full max-w-[320px] border border-[#5A5550] bg-[#1A1A1A]/90 p-3 text-[11px] text-[#D4C4B7] leading-relaxed",
                children: [
                  e.jsx("p", {
                    className:
                      "text-[9px] tracking-widest text-[#A38F72] mb-1 uppercase",
                    children: "Char 吐槽记录",
                  }),
                  F.lastClaimStory.content,
                ],
              })
            : null,
        ],
      });
    },
    xs = () => {
      var ot, st, $t;
      return e.jsx("div", {
        className:
          "absolute inset-0 z-[60] bg-[#2C2A29]/60 backdrop-blur-sm flex flex-col justify-end",
        children: e.jsxs("div", {
          className:
            "relative w-full h-[85vh] bg-[#FDFCF8] text-[#2C2A29] rounded-t-[32px] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-full duration-500 border-t border-[#D4C4B7]",
          children: [
            e.jsx("div", {
              className:
                "absolute top-4 left-4 right-4 bottom-4 border border-[#D4C4B7] pointer-events-none",
            }),
            e.jsxs("div", {
              className: "p-10 flex-1 relative overflow-y-auto mt-4",
              children: [
                e.jsxs("div", {
                  className:
                    "flex justify-between items-stretch gap-3 mb-8 border-b border-[#E5E0D8] pb-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-stretch gap-2.5 min-w-0 flex-1",
                      children: [
                        e.jsx("div", {
                          className: "shrink-0 flex items-center",
                          children: e.jsxs("div", {
                            className:
                              "relative p-1.5 border border-[#2C2A29] bg-[#FDFCF8]",
                            children: [
                              e.jsx("div", {
                                className:
                                  "pointer-events-none absolute inset-[2px] border border-[#A38F72]/35",
                                "aria-hidden": !0,
                              }),
                              e.jsx(xc, {
                                className: "relative w-5 h-5 text-[#2C2A29]",
                                strokeWidth: 1.25,
                              }),
                            ],
                          }),
                        }),
                        e.jsx("div", {
                          className: "flex-1 min-w-0 flex items-center py-0.5",
                          children: e.jsx("div", {
                            className:
                              "grid grid-cols-4 divide-x divide-[#E8E0D4]/80 w-full",
                            children: [
                              {
                                label: "总天数",
                                value: Q,
                                tone: "text-[#2C2A29]",
                              },
                              {
                                label: "当前天",
                                value: x,
                                tone: "text-[#2C2A29]",
                              },
                              {
                                label: "成功",
                                value: Ve,
                                tone: "text-[#4A6350]",
                              },
                              {
                                label: "失败",
                                value: ve,
                                tone: "text-[#7A4E48]",
                              },
                            ].map((Ft) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "px-1.5 py-0 text-center first:pl-1",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[7px] tracking-[0.12em] text-[#9A9186]",
                                      children: Ft.label,
                                    }),
                                    e.jsx("p", {
                                      className: `mt-0.5 font-serif text-[12px] tabular-nums leading-none tracking-tight ${Ft.tone}`,
                                      children: Ft.value,
                                    }),
                                  ],
                                },
                                Ft.label,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "shrink-0 flex flex-col justify-center items-end text-right pl-2",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[8px] tracking-[0.2em] text-[#8C857B]",
                          children: "灵魂回响",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[11px] font-serif text-[#2C2A29] mt-0.5 tabular-nums",
                          children: "NO. 8829-04",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("h2", {
                  className:
                    "text-3xl font-serif leading-tight mb-2 text-[#2C2A29]",
                  children: "关系画像报告",
                }),
                e.jsx("p", {
                  className: "text-xs text-[#8C857B] mb-6",
                  children: "赛季总结算与数据留存",
                }),
                e.jsxs("div", {
                  className: "flex items-end gap-2 mb-8",
                  children: [
                    e.jsx("span", {
                      className: "text-6xl text-[#A38F72] font-serif",
                      children:
                        ((ot = $ == null ? void 0 : $.draft) == null
                          ? void 0
                          : ot.score) ?? "?",
                    }),
                    e.jsx("span", {
                      className: "text-2xl text-[#A38F72] mb-1",
                      children: "分",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative border border-[#E5E0D8] p-6 bg-[#F5F3ED] mb-8",
                  children: [
                    e.jsx("div", {
                      className: "absolute top-0 left-0 w-3 h-3 bg-[#2C2A29]",
                    }),
                    e.jsxs("p", {
                      className:
                        "text-[10px] text-[#A38F72] tracking-widest mb-3 font-medium flex items-center gap-2",
                      children: [
                        e.jsx(kl, { className: "w-3 h-3" }),
                        " 伴侣观察日记",
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-sm leading-loose text-[#5A5550] font-serif",
                      children: [
                        "“",
                        ((st = $ == null ? void 0 : $.draft) == null
                          ? void 0
                          : st.diary) || "？",
                        "”",
                      ],
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className:
                    "text-[10px] text-[#A38F72] tracking-widest mb-3 font-medium flex items-center gap-2",
                  children: [
                    e.jsx(kl, { className: "w-3 h-3" }),
                    " 本季特质标签分析",
                  ],
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children:
                    Array.isArray(
                      ($t = $ == null ? void 0 : $.draft) == null
                        ? void 0
                        : $t.tags,
                    ) && $.draft.tags.length > 0
                      ? $.draft.tags
                          .slice(0, 5)
                          .map((Ft, es) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  es === 0
                                    ? "px-3 py-1.5 border border-[#2C2A29] text-[10px] font-medium text-[#2C2A29]"
                                    : "px-3 py-1.5 border border-[#D4C4B7] text-[#8C857B] text-[10px]",
                                children: ["# ", Ft],
                              },
                              `report_tag_${es}`,
                            ),
                          )
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className:
                                "px-3 py-1.5 border border-[#2C2A29] text-[10px] font-medium text-[#2C2A29]",
                              children: "# ?",
                            }),
                            e.jsx("div", {
                              className:
                                "px-3 py-1.5 border border-[#D4C4B7] text-[#8C857B] text-[10px]",
                              children: "# ?",
                            }),
                            e.jsx("div", {
                              className:
                                "px-3 py-1.5 border border-[#D4C4B7] text-[#8C857B] text-[10px]",
                              children: "# ?",
                            }),
                          ],
                        }),
                }),
                T.length > 0
                  ? e.jsxs("div", {
                      className:
                        "mt-8 border border-[#E5E0D8] bg-white p-4 space-y-3",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] text-[#A38F72] tracking-widest",
                          children: "赛季事件轨迹",
                        }),
                        e.jsx("div", {
                          className: "space-y-2",
                          children: T.slice(0, 5).map((Ft) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "text-[11px] text-[#5A5550] border-b border-[#F0ECE4] pb-2",
                                children: [
                                  e.jsxs("p", {
                                    children: [
                                      "Day ",
                                      Ft.dayIndex,
                                      " · ",
                                      Ft.title,
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className: "text-[#8C857B]",
                                    children: [
                                      "结果：",
                                      Ft.matched ? "共鸣" : "分歧",
                                      " · 选择 ",
                                      Ft.selectedOptionId,
                                      " / TA ",
                                      Ft.aiOptionId,
                                    ],
                                  }),
                                ],
                              },
                              Ft.id,
                            ),
                          ),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            e.jsxs("div", {
              className: "p-6 pt-0 relative z-10 bg-[#FDFCF8]",
              children: [
                e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: Kt,
                      disabled: $.status === "loading" || Te,
                      className:
                        "group flex-1 min-w-0 relative p-1 bg-[#2C2A29] shadow-[0_10px_24px_rgba(44,42,41,0.18)] disabled:opacity-40",
                      children: [
                        e.jsx("span", {
                          className:
                            "pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700",
                        }),
                        e.jsxs("span", {
                          className:
                            "border border-[#5A5550] bg-[#1E1C1B] py-3.5 flex items-center justify-center gap-2 text-[11px] tracking-[0.22em] text-[#FDFCF8]",
                          children: [
                            e.jsx(Wr, {
                              className: "w-4 h-4 text-[#A38F72] shrink-0",
                            }),
                            $.status === "loading" || Te
                              ? "生成中…"
                              : "生成报告",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: fs,
                      disabled: !($ != null && $.draft),
                      className:
                        "flex-1 min-w-0 relative p-1 bg-[#2C2A29] shadow-[0_12px_30px_rgba(44,42,41,0.2)] active:scale-[0.99] transition-transform disabled:opacity-40",
                      children: e.jsxs("span", {
                        className:
                          "border border-[#5A5550] bg-[#1E1C1B] py-3.5 flex items-center justify-center gap-2 text-[#FDFCF8] text-[11px] tracking-[0.22em]",
                        children: [
                          e.jsx(On, {
                            className: "w-4 h-4 text-[#A38F72] shrink-0",
                          }),
                          "保存档案",
                        ],
                      }),
                    }),
                  ],
                }),
                $.errorText
                  ? e.jsx("p", {
                      className:
                        "text-[11px] text-rose-600 mt-3 border border-rose-200 bg-rose-50 px-2 py-1",
                      children: $.errorText,
                    })
                  : null,
                e.jsxs("div", {
                  className:
                    "mt-6 flex items-end justify-center gap-5 flex-wrap",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: gt,
                      className:
                        "text-[11px] font-serif text-[#6B645B] tracking-[0.12em] bg-transparent border-0 border-b border-[#B8AEA0] rounded-none pb-1 px-1 cursor-pointer hover:text-[#2C2A29] hover:border-[#A38F72] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2A29]",
                      children: "放弃本轮挑战并开始新一轮",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => E(null),
                      "aria-label": "关闭",
                      className:
                        "shrink-0 mb-[3px] flex items-center justify-center border-0 border-b border-[#B8AEA0] bg-transparent pb-1 text-[#6B645B] transition-colors hover:border-[#A38F72] hover:text-[#2C2A29] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C2A29]",
                      children: e.jsx(Ts, {
                        className: "h-[12px] w-[12px]",
                        strokeWidth: 1.75,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    };
  return e.jsxs("div", {
    className: "h-full w-full bg-[#F7F5EF] text-[#2C2A29] flex flex-col",
    children: [
      e.jsxs("header", {
        className: `${bs || ss || _s ? "hidden" : "px-4 py-3 border-b border-[#E5E0D8] flex items-center justify-between"}`,
        children: [
          e.jsxs("button", {
            type: "button",
            onClick: t,
            className: "text-xs flex items-center gap-1 text-[#6D655A]",
            children: [e.jsx(Xr, { className: "w-4 h-4" }), " 返回"],
          }),
          e.jsxs("div", {
            className: "text-right",
            children: [
              e.jsx("p", {
                className: "text-[10px] tracking-widest text-[#9A8E7C]",
                children: "SEASON JOURNEY",
              }),
              e.jsx("p", { className: "text-xs font-medium", children: c }),
            ],
          }),
        ],
      }),
      e.jsxs("main", {
        className: `${bs || ss || _s ? "flex-1 overflow-hidden p-0" : "flex-1 overflow-y-auto px-4 py-4 space-y-4"}`,
        children: [
          !bs && !ss && !_s && W
            ? e.jsx("div", {
                className:
                  "border border-rose-200 bg-rose-50 text-rose-700 text-xs px-3 py-2 rounded",
                children: W,
              })
            : null,
          bs ? qs() : null,
          ss ? Bs() : null,
          _s ? Js() : null,
          !_s &&
            (c === "active" ||
              c === "completed_success" ||
              c === "completed_failed" ||
              c === "abandoned") &&
            e.jsxs("section", {
              className: "border border-[#E5E0D8] bg-white p-4 space-y-3",
              children: [
                e.jsx("h2", {
                  className: "text-sm font-semibold",
                  children: "2) 任务生成与执行",
                }),
                e.jsxs("p", {
                  className: "text-xs text-[#6D655A]",
                  children: [
                    "时长 ",
                    Q,
                    " 天 ·",
                    " ",
                    u.themeType === "daily"
                      ? "日常向"
                      : `自定义(${u.customThemeText || "未命名"})`,
                    " ·",
                    " ",
                    u.difficulty,
                  ],
                }),
                c === "active" ||
                c === "completed_success" ||
                c === "completed_failed" ||
                c === "abandoned"
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className: "grid grid-cols-4 gap-2",
                          children: [
                            e.jsxs("div", {
                              className:
                                "border border-[#E5E0D8] p-2 text-center",
                              children: [
                                e.jsx("p", {
                                  className: "text-[10px] text-[#9A8E7C]",
                                  children: "当前天",
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: x,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "border border-[#E5E0D8] p-2 text-center",
                              children: [
                                e.jsx("p", {
                                  className: "text-[10px] text-[#9A8E7C]",
                                  children: "失败天",
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: ve,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "border border-[#E5E0D8] p-2 text-center",
                              children: [
                                e.jsx("p", {
                                  className: "text-[10px] text-[#9A8E7C]",
                                  children: "重生成",
                                }),
                                e.jsxs("p", {
                                  className: "text-sm",
                                  children: [v, "/3"],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "border border-[#E5E0D8] p-2 text-center",
                              children: [
                                e.jsx("p", {
                                  className: "text-[10px] text-[#9A8E7C]",
                                  children: "结果",
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children:
                                    (k == null ? void 0 : k.status) || "进行中",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Xe
                          ? e.jsxs("div", {
                              className:
                                "border border-[#EFEAE0] p-3 space-y-2",
                              children: [
                                e.jsxs("p", {
                                  className: "text-xs font-medium",
                                  children: [
                                    "Day ",
                                    Xe.dayIndex,
                                    " · 状态：",
                                    Xe.status || "pending",
                                  ],
                                }),
                                (Xe.tasks || []).map((ot) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "border border-[#F0ECE4] p-2 text-xs space-y-2",
                                      children: [
                                        e.jsx("p", { children: ot.title }),
                                        e.jsxs("p", {
                                          className: "text-[#8A7F70]",
                                          children: [
                                            "判定：",
                                            ot.judgeMode === "manual_ai"
                                              ? "手动提交 + TA判定"
                                              : "自动判定",
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          children: [
                                            "任务状态：",
                                            ot.status || "pending",
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className: "flex gap-2 flex-wrap",
                                          children: [
                                            e.jsx("button", {
                                              type: "button",
                                              className:
                                                "border px-2 py-1 disabled:opacity-40",
                                              onClick: () => Qe(ot.taskId),
                                              disabled: _t || ut,
                                              children: "切换完成",
                                            }),
                                            ot.judgeMode === "manual_ai"
                                              ? e.jsx("button", {
                                                  type: "button",
                                                  className:
                                                    "border px-2 py-1 disabled:opacity-40",
                                                  onClick: () => me(ot),
                                                  disabled: Te || _t || ut,
                                                  children: "提交检查",
                                                })
                                              : null,
                                            ot.status === "failed"
                                              ? e.jsx("button", {
                                                  type: "button",
                                                  className:
                                                    "border px-2 py-1 disabled:opacity-40",
                                                  onClick: () => Pt(ot),
                                                  disabled: Te || ut,
                                                  children: "发起异议",
                                                })
                                              : null,
                                          ],
                                        }),
                                      ],
                                    },
                                    ot.taskId,
                                  ),
                                ),
                                e.jsxs("div", {
                                  className: "flex gap-2 flex-wrap",
                                  children: [
                                    e.jsxs("button", {
                                      type: "button",
                                      onClick: Wt,
                                      disabled: v >= 3 || ut,
                                      className:
                                        "border px-2 py-1 text-xs disabled:opacity-40 flex items-center gap-1",
                                      children: [
                                        e.jsx(nw, { className: "w-3 h-3" }),
                                        " 重生成当日任务",
                                      ],
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      className:
                                        "border px-2 py-1 text-xs disabled:opacity-40",
                                      onClick: () => vt("failed"),
                                      disabled: ut || _t,
                                      children: "记为当天失败",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      className:
                                        "border px-2 py-1 text-xs disabled:opacity-40",
                                      onClick: nt,
                                      disabled: ut,
                                      children: "放弃当天（记失败）",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      className:
                                        "border px-2 py-1 text-xs disabled:opacity-40",
                                      onClick: ae,
                                      disabled: ut,
                                      children: "下一天",
                                    }),
                                  ],
                                }),
                                v >= 3
                                  ? e.jsx("p", {
                                      className: "text-[11px] text-rose-600",
                                      children:
                                        "重生成次数已耗尽（3/3），只能继续挑战或记失败/放弃。",
                                    })
                                  : null,
                                _t
                                  ? e.jsx("p", {
                                      className: "text-[11px] text-[#8A7F70]",
                                      children:
                                        "当前天已判为失败或放弃，不能再直接勾选完成。",
                                    })
                                  : null,
                              ],
                            })
                          : null,
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              className:
                                "flex-1 border border-rose-200 text-rose-600 py-2 text-xs disabled:opacity-40",
                              onClick: It,
                              disabled: ut,
                              children: "放弃整季（立即失败）",
                            }),
                            e.jsx("button", {
                              type: "button",
                              className:
                                "flex-1 bg-[#2C2A29] text-white py-2 text-xs disabled:opacity-40",
                              onClick: Xt,
                              disabled: ut,
                              children: "提前结算 / 到期结算",
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          !_s && N.length > 0
            ? e.jsxs("section", {
                className: "border border-[#E5E0D8] bg-white p-4 space-y-2",
                children: [
                  e.jsx("h2", {
                    className: "text-sm font-semibold",
                    children: "4) 复议记录",
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children: N.slice(0, 8).map((ot) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "border border-[#F0ECE4] p-2 text-[11px] text-[#5E5448]",
                          children: [
                            e.jsxs("p", {
                              children: ["Day ", ot.dayIndex, " · ", ot.taskId],
                            }),
                            e.jsxs("p", {
                              children: [
                                "复议结果：",
                                ot.decision,
                                " · 最终状态：",
                                ot.finalTaskStatus,
                              ],
                            }),
                            e.jsxs("p", {
                              className: "text-[#8A7F70]",
                              children: ["理由：", ot.reason],
                            }),
                          ],
                        },
                        `${ot.taskId}-${ot.at}`,
                      ),
                    ),
                  }),
                ],
              })
            : null,
          !_s && k
            ? e.jsxs("section", {
                className: "border border-[#E5E0D8] bg-white p-4 space-y-2",
                children: [
                  e.jsx("h2", {
                    className: "text-sm font-semibold",
                    children: "3) 结算结果",
                  }),
                  e.jsxs("p", {
                    className: "text-xs",
                    children: [
                      "失败天数 ",
                      k.failedDays ?? ve,
                      "/",
                      k.totalDays ?? Q,
                      "，失败占比",
                      " ",
                      typeof k.failRatio == "number"
                        ? `${(k.failRatio * 100).toFixed(1)}%`
                        : "--",
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-xs flex items-center gap-1",
                    children: [
                      k.status === "success"
                        ? e.jsx(q5, { className: "w-4 h-4 text-emerald-600" })
                        : e.jsx(Mh, { className: "w-4 h-4 text-rose-600" }),
                      k.status === "success" ? "赛季成功" : "赛季失败",
                    ],
                  }),
                  k.status === "failed"
                    ? e.jsxs("p", {
                        className:
                          "text-[11px] text-[#8A7F70] flex items-center gap-1",
                        children: [
                          e.jsx(W5, { className: "w-3 h-3" }),
                          "判定规则：失败占比 ",
                          ">",
                          " 10% 即赛季失败",
                        ],
                      })
                    : null,
                ],
              })
            : null,
        ],
      }),
      _s && M === "task" ? Xs() : null,
      _s && M === "event" ? gn() : null,
      _s && M === "showroom" ? sn() : null,
      _s && M === "artifact_detail" ? ln() : null,
      _s && M === "dossier_detail" ? rn() : null,
      _s && M === "reward" ? wt() : null,
      _s && M === "report" ? xs() : null,
    ],
  });
}
const kJ = {
  memory_rewrite: { title: "回忆改写", subtitle: "Memory Rewrite" },
  season_journey: { title: "赛季旅程", subtitle: "Season Journey" },
};
function SJ(t, s) {
  const n = t == null ? void 0 : t.compassFeatureState;
  if (!n || typeof n != "object") return {};
  const a = n[s];
  return a && typeof a == "object" ? a : {};
}
function _J({
  featureId: t,
  contact: s,
  space: n,
  onBack: a,
  onUpdateSpace: r,
  onPushFeatureSummary: i,
  runtime: o = {},
}) {
  const c = "calc(env(safe-area-inset-top, 0px) + 50px)",
    d = SJ(n, t),
    u = kJ[t] || { title: "罗盘功能", subtitle: "Compass" },
    f = (p) => {
      if (typeof r != "function") return;
      const m =
          n != null &&
          n.compassFeatureState &&
          typeof n.compassFeatureState == "object"
            ? n.compassFeatureState
            : {},
        h = { ...(m[t] || {}), ...p, updatedAt: Date.now() };
      r({ compassFeatureState: { ...m, [t]: h } });
    };
  return t === "memory_rewrite"
    ? e.jsx(UV, {
        featureId: t,
        contact: s,
        space: n,
        onBack: a,
        onUpdateSpace: r,
        onPushFeatureSummary: i,
        runtime: o,
      })
    : t === "season_journey"
      ? e.jsx(NJ, {
          onBack: a,
          contact: s,
          featureId: t,
          initialState: d,
          onStateChange: f,
          onPushFeatureSummary: i,
          runtime: o,
        })
      : e.jsxs("div", {
          className:
            "flex h-full w-full flex-col items-center justify-center bg-[#FDFCFB] p-8 text-center",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: a,
              className:
                "absolute left-4 z-30 text-[11px] uppercase tracking-[0.22em] text-[#5F5B53] transition-opacity hover:opacity-70",
              style: { top: c },
              children: "Back",
            }),
            e.jsx("p", {
              className:
                "text-[10px] uppercase tracking-[0.35em] text-[#A39A86]",
              children: u.subtitle,
            }),
            e.jsx("h2", {
              className:
                "mt-3 font-serif text-3xl tracking-wider text-[#1A1A1A]",
              children: u.title,
            }),
            e.jsx("p", {
              className: "mt-5 text-sm text-[#7A7770]",
              children: "该入口当前不可用，请从罗盘选择其他功能。",
            }),
          ],
        });
}
const gi = {
    bgPattern:
      "radial-gradient(#FFB7B2 20%, transparent 20%), radial-gradient(#FFB7B2 20%, transparent 20%)",
    bgColor: "#FFF0F5",
    ink: "#6B5B55",
  },
  im = {
    meBar: "linear-gradient(90deg,#FFE4E8,#FF9AA2)",
    taBar: "linear-gradient(90deg,#FFD6DC,#FF7D95)",
    resonanceRight: "linear-gradient(180deg,#FFC8D4,#FF8FA3)",
  },
  zi =
    "font-['Comic_Sans_MS','Chalkboard_SE','Varela_Round','Nunito','sans-serif']",
  Zb = ["food", "shopping", "transport", "entertainment", "others"],
  dd = {
    food: {
      icon: QT,
      color: "#D4A373",
      bg: "#FFF3E0",
      label: "Yummy",
      border: "#E6CCB2",
    },
    shopping: {
      icon: md,
      color: "#FF9AA2",
      bg: "#FFEBEE",
      label: "Buy!",
      border: "#FFCDD2",
    },
    transport: {
      icon: NT,
      color: "#90CAF9",
      bg: "#E3F2FD",
      label: "GoGo",
      border: "#BBDEFB",
    },
    entertainment: {
      icon: CI,
      color: "#CE93D8",
      bg: "#F3E5F5",
      label: "Play",
      border: "#E1BEE7",
    },
    others: {
      icon: Gi,
      color: "#FFCC80",
      bg: "#FFF8E1",
      label: "Misc",
      border: "#FFE0B2",
    },
  };
function Fk(t, s = []) {
  if (dd[t]) return dd[t];
  const n = s.find((a) => a.id === t);
  return n
    ? {
        icon: null,
        emoji: n.icon || "📌",
        color: n.color || "#999",
        bg: `${n.color || "#999"}20`,
        border: n.color || "#ccc",
        label: n.name || "自定义",
      }
    : dd.others;
}
function Ff(t) {
  const s = t.direction === "income" ? "income" : "expense",
    n = ["user", "ai", "both"].includes(t.payer) ? t.payer : "user";
  return {
    ...t,
    direction: s,
    payer: n,
    amount: Number(t.amount) || 0,
    createdAt: t.createdAt ?? t.date ?? Date.now(),
    updatedAt: t.updatedAt ?? t.date ?? Date.now(),
  };
}
const AJ = ({ y: t }) =>
    e.jsxs("div", {
      className:
        "absolute left-3 w-6 h-6 z-30 flex items-center justify-center",
      style: { top: t },
      children: [
        e.jsx("div", {
          className:
            "w-full h-2 bg-gradient-to-b from-[#FAD0C4] to-[#E6A99C] rounded-full shadow-sm",
        }),
        e.jsx("div", {
          className:
            "absolute w-2 h-full bg-gradient-to-r from-[#FAD0C4] to-[#E6A99C] rounded-full shadow-sm",
        }),
      ],
    }),
  L0 = ({
    color: t,
    pattern: s,
    rotate: n = -2,
    width: a = "80px",
    top: r,
    left: i,
    right: o,
  }) =>
    e.jsxs("div", {
      className:
        "absolute h-6 z-20 shadow-sm flex items-center justify-center overflow-hidden opacity-90",
      style: {
        backgroundColor: t,
        transform: `rotate(${n}deg)`,
        top: r,
        left: i,
        right: o,
        width: a,
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%)",
      },
      children: [
        s === "dot" &&
          e.jsx("div", {
            className: "absolute inset-0 opacity-30",
            style: {
              backgroundImage: "radial-gradient(white 20%, transparent 20%)",
              backgroundSize: "8px 8px",
            },
          }),
        s === "stripe" &&
          e.jsx("div", {
            className: "absolute inset-0 opacity-30",
            style: {
              backgroundImage:
                "repeating-linear-gradient(45deg, white, white 2px, transparent 2px, transparent 6px)",
            },
          }),
      ],
    }),
  zk = ({ onClick: t, icon: s, color: n, label: a, active: r }) =>
    e.jsxs(We.button, {
      whileHover: { scale: 1.1, y: -2 },
      whileTap: { scale: 0.9 },
      onClick: t,
      className: `relative inline-flex flex-col items-center gap-1 group ${r ? "scale-110" : "opacity-80 hover:opacity-100"}`,
      children: [
        e.jsx("div", {
          className: `w-10 h-10 rounded-xl shadow-sm flex items-center justify-center text-white transition-all border-2 ${r ? "border-[#FFB7B2] ring-2 ring-[#FFB7B2]/30" : "border-white"}`,
          style: { backgroundColor: n },
          children: e.jsx(s, { size: 18 }),
        }),
        e.jsx("span", {
          className:
            "absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 px-2 rounded-full whitespace-nowrap pointer-events-none",
          children: a,
        }),
      ],
    }),
  CJ = pn.memo(
    ({
      transaction: t,
      categoryConfig: s,
      onDelete: n,
      onViewDetail: a,
      onToggleProductDesc: r,
      expandedProductDescId: i,
      onPreviewImage: o,
      partnerName: c,
    }) => {
      const d = s || dd.others,
        u = d.icon,
        f = t.rotation || 0,
        p = t.source === "ai",
        m = t.direction === "income",
        h = m ? `+¥${t.amount}` : `-¥${t.amount}`,
        g = !!(t.productDesc && t.productDesc.trim()),
        x = g && i === t.id,
        y = (b) => {
          if ((b.stopPropagation(), g && r)) {
            r(t.id);
            return;
          }
          t.source !== "ai" && t.image && o && o(t);
        },
        v = (b) => {
          (b.stopPropagation(), a == null || a(t));
        };
      return e.jsxs("div", {
        className:
          "relative bg-white p-2 pb-8 shadow-md rounded-lg border-2 border-white transition-transform hover:scale-105 hover:z-10 group cursor-pointer",
        style: { transform: `rotate(${f}deg)` },
        children: [
          e.jsx("button", {
            onClick: (b) => {
              (b.stopPropagation(), n(t.id));
            },
            className:
              "absolute -top-2 -right-2 w-6 h-6 bg-[#FF9AA2] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-20 hover:scale-110",
            children: e.jsx(_n, { size: 12 }),
          }),
          e.jsx(L0, {
            color: p ? "#FFD6E0" : d.border,
            pattern: "dot",
            width: "40px",
            top: "-10px",
            left: "35%",
            rotate: -5,
          }),
          e.jsx("div", {
            role: "button",
            tabIndex: g ? 0 : -1,
            onClick: y,
            onKeyDown: (b) => g && b.key === "Enter" && y(b),
            className: `aspect-square rounded-lg border-2 border-dashed flex items-center justify-center mb-2 relative overflow-hidden p-2 text-center ${g ? "cursor-pointer" : "cursor-default"}`,
            style: { borderColor: d.border, backgroundColor: d.bg },
            children: x
              ? e.jsx("div", {
                  className:
                    "w-full h-full overflow-y-auto overscroll-contain rounded touch-pan-y",
                  style: {
                    WebkitOverflowScrolling: "touch",
                    touchAction: "pan-y",
                  },
                  onTouchStart: (b) => b.stopPropagation(),
                  onTouchMove: (b) => b.stopPropagation(),
                  children: e.jsx("div", {
                    className:
                      "text-xs text-left leading-relaxed text-[#6B5B55] whitespace-pre-wrap pr-1",
                    children: t.productDesc,
                  }),
                })
              : t.image
                ? e.jsx("img", {
                    src: t.image,
                    alt: "",
                    className: "w-full h-full object-cover",
                  })
                : u
                  ? e.jsx(u, { size: 28, style: { color: d.color } })
                  : e.jsx("span", {
                      className: "text-2xl",
                      title: d.label,
                      children: d.emoji || "📌",
                    }),
          }),
          e.jsxs("div", {
            role: "button",
            tabIndex: 0,
            onClick: v,
            onKeyDown: (b) => b.key === "Enter" && v(b),
            className: "text-center min-w-0",
            children: [
              e.jsx("div", {
                className: `font-bold text-lg font-mono ${m ? "text-emerald-600" : gi.ink}`,
                children: h,
              }),
              e.jsx("div", {
                className: `text-xs text-gray-400 ${zi} truncate px-1`,
                children: t.note || d.label,
              }),
            ],
          }),
        ],
      });
    },
  );
function MJ(t, s) {
  var n;
  return (n = t == null ? void 0 : t.messages) != null && n.length
    ? t.messages.filter((a) => {
        const r = a.timestamp;
        if (r == null) return !1;
        const i = new Date(r);
        if (isNaN(i.getTime()) || (a.type && a.type !== "text")) return !1;
        const o = a.text ?? a.content;
        return !o || typeof o != "string" || !o.trim()
          ? !1
          : i.toLocaleDateString() === s;
      })
    : [];
}
function Mx(t) {
  const s = new Date(t);
  s.setHours(0, 0, 0, 0);
  const n = s.getDay(),
    a = n === 0 ? -6 : 1 - n,
    r = new Date(s);
  r.setDate(s.getDate() + a);
  const i = new Date(r);
  return (
    i.setDate(r.getDate() + 6),
    i.setHours(23, 59, 59, 999),
    [r.getTime(), i.getTime()]
  );
}
function Rk(t, s) {
  const n = new Date(t);
  return n.getFullYear() === s.getFullYear() && n.getMonth() === s.getMonth();
}
function _m(t) {
  const s = new Date(t);
  return isNaN(s.getTime())
    ? ""
    : (s.setHours(12, 0, 0, 0), s.toLocaleDateString());
}
function Xb(t, s) {
  return _m(t) === _m(s);
}
function Tx({ value: t, max: s, color: n, trackClass: a, slim: r }) {
  const i = s <= 0 ? 0 : Math.min(100, (t / s) * 100),
    o = t > 0 ? Math.max(i, r ? 6 : 9) : 0,
    c = r ? "h-[3px]" : "h-[5px]";
  return e.jsx("div", {
    className: `w-full ${c} rounded-full overflow-hidden ${a || "bg-white/45 shadow-[inset_0_1px_3px_rgba(80,60,70,0.08)]"}`,
    children: e.jsx(We.div, {
      initial: !1,
      animate: { width: `${o}%` },
      transition: { type: "spring", stiffness: 400, damping: 34 },
      className: `h-full rounded-full ${r ? "" : "shadow-[0_0_12px_rgba(255,155,162,0.22)]"}`,
      style: { background: n },
    }),
  });
}
function Ix({ className: t = "" }) {
  return e.jsxs("div", {
    className: `relative h-3 w-4 shrink-0 ${t}`,
    title: "共振日",
    "aria-label": "共振日",
    children: [
      e.jsx("span", {
        className:
          "absolute left-0 top-0.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#FFD4DA] to-[#FF9AA2] ring-[1.5px] ring-white shadow-sm",
      }),
      e.jsx("span", {
        className:
          "absolute right-0 top-0.5 h-2.5 w-2.5 rounded-full ring-[1.5px] ring-white shadow-sm",
        style: { background: im.resonanceRight },
      }),
    ],
  });
}
function Pk(t, s = 400, n = 0.8) {
  return new Promise((a, r) => {
    const i = new Image(),
      o = URL.createObjectURL(t);
    ((i.onload = () => {
      URL.revokeObjectURL(o);
      const c = i.width,
        d = i.height,
        u = c > s ? s / c : 1,
        f = document.createElement("canvas");
      ((f.width = Math.round(c * u)),
        (f.height = Math.round(d * u)),
        f.getContext("2d").drawImage(i, 0, 0, f.width, f.height));
      try {
        const m = f.toDataURL("image/jpeg", n);
        a(m);
      } catch (m) {
        r(m);
      }
    }),
      (i.onerror = () => {
        (URL.revokeObjectURL(o), r(new Error("图片加载失败")));
      }),
      (i.src = o));
  });
}
const TJ = ({ onBack: t, contact: s }) => {
    var bt, ns;
    const {
        chats: n,
        createChat: a,
        getRoleBoundUser: r,
        callApi: i,
        sendMessage: o,
        triggerAiReply: c,
        receiveMessage: d,
      } = vn(),
      { getSpace: u, updateSpace: f } = Bu(),
      p = s ? `couple_ledger_${s.id}` : "couple_ledger_transactions",
      m = s ? `couple_ledger_categories_${s.id}` : "couple_ledger_categories",
      h = s ? `couple_ledger_challenge_${s.id}` : null,
      [g, x] = Yn(p, []),
      [y, v] = Yn(m, []),
      [b, N] = l.useState("daily"),
      [w, _] = l.useState(() => new Date()),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(null),
      [E, S] = l.useState(!1),
      [j, T] = l.useState(null),
      [I, L] = l.useState("user"),
      [B, F] = l.useState(!1),
      [D, $] = l.useState("AI"),
      [P, z] = l.useState("我"),
      [O, Z] = l.useState(!1),
      [K, q] = l.useState(!1),
      [V, ne] = l.useState(""),
      [le, ie] = l.useState("all"),
      [X, je] = l.useState("all"),
      [xe, ye] = l.useState("all"),
      [R, oe] = l.useState("timeDesc"),
      [ee, H] = l.useState(null),
      [Y, U] = l.useState(null),
      [ce, pe] = l.useState(null),
      [se, Te] = l.useState(!1),
      [ke, W] = l.useState(7),
      [ue, re] = l.useState("11:00"),
      [he, ge] = l.useState("20:30"),
      [J, G] = l.useState(!1),
      [we, Q] = l.useState(!0),
      [ve, Ve] = l.useState(!1),
      [Ae, te] = l.useState(!1),
      [Se, Fe] = l.useState(!1),
      [$e, tt] = l.useState(!1),
      Xe = l.useRef(!1),
      ht = l.useRef([]);
    ht.current = g || [];
    const Pe = s ? s.nickname || s.name || "TA" : D,
      ut = s
        ? ((bt = r == null ? void 0 : r(s)) == null ? void 0 : bt.name) || "我"
        : P,
      _t = s != null && s.id ? u(s.id) : null,
      Ee = (_t == null ? void 0 : _t.ledgerChatAssistEnabled) === !0,
      fe = (ce == null ? void 0 : ce.inviteStatus) === "accepted",
      He = (ce == null ? void 0 : ce.inviteStatus) === "pending",
      Ie = (ce == null ? void 0 : ce.inviteStatus) === "rejected",
      Ce = !ce;
    (l.useEffect(() => {
      if (s) return;
      (async () => {
        const Le = await be.get("chat_app_contacts", []),
          yt = (Array.isArray(Le) ? Le : []).filter(
            (ze) =>
              ze &&
              ze.isBuiltinHelpAssistant !== !0 &&
              String(ze.id) !== "builtin_help_tutorial_ai",
          );
        yt != null && yt[0] && $(yt[0].name || "AI");
        const rt = await be.get("chat_app_user", {});
        rt != null && rt.name && z(rt.name);
      })();
    }, [s]),
      l.useEffect(() => {
        if (!s || Xe.current || (g && g.length > 0)) return;
        ((Xe.current = !0),
          (async () => {
            const Le = await be.get("couple_ledger_transactions", []);
            if (
              Array.isArray(Le) &&
              Le.length > 0 &&
              window.confirm("检测到之前的记账数据，是否迁移到当前空间？")
            ) {
              const _e = Le.map(Ff);
              x(_e);
            }
          })());
      }, [s, g == null ? void 0 : g.length, x]),
      l.useEffect(() => {
        if (!h) return;
        let Ge = !1;
        return (
          (async () => {
            const _e = await be.get(h, null);
            Ge ||
              (_e &&
                typeof _e == "object" &&
                (pe(_e),
                _e.totalDays && W(_e.totalDays),
                _e.autoTime && re(_e.autoTime),
                _e.remindTime && ge(_e.remindTime)));
          })(),
          () => {
            Ge = !0;
          }
        );
      }, [h]),
      l.useEffect(() => {
        if (!h || !(s != null && s.id)) return;
        const Ge = (Le) => {
          var _e;
          ((_e = Le.detail) == null ? void 0 : _e.contactId) === s.id &&
            be.get(h, null).then((yt) => {
              yt && typeof yt == "object" && pe(yt);
            });
        };
        return (
          window.addEventListener("couple_ledger_checkin_updated", Ge),
          () => window.removeEventListener("couple_ledger_checkin_updated", Ge)
        );
      }, [h, s == null ? void 0 : s.id]),
      l.useEffect(() => {
        se || Ve(!1);
      }, [se]),
      l.useEffect(() => {
        ce || te(!1);
      }, [ce]),
      l.useEffect(() => {
        Se || tt(!1);
      }, [Se]));
    const [Re, De] = l.useState(""),
      [at, ft] = l.useState("expense"),
      [vt, Oe] = l.useState("user"),
      [Qe, Ye] = l.useState("food"),
      [Ze, Ue] = l.useState(""),
      [me, jt] = l.useState(null),
      [Gt, Pt] = l.useState(""),
      [Wt, ct] = l.useState(!1),
      [Kt, fs] = l.useState(""),
      [gt, ae] = l.useState("📌"),
      [nt, It] = l.useState("#FF9AA2"),
      Xt = (Ge) => {
        x(Ge);
      },
      bs = async () => {
        if (!h) {
          alert("请从情侣空间进入记账后再配置打卡挑战");
          return;
        }
        const Ge = Number(ke) || 0;
        if (!Number.isFinite(Ge) || Ge <= 0) {
          alert("坚持天数需要是大于 0 的数字");
          return;
        }
        const Le = (ue || "").trim(),
          _e = (he || "").trim();
        if (!/^\d{1,2}:\d{2}$/.test(Le) || !/^\d{1,2}:\d{2}$/.test(_e)) {
          alert("时间格式请使用 HH:mm，例如 11:00 或 20:30");
          return;
        }
        const yt = !!(we && s && ce == null);
        try {
          G(!0);
          const rt = Date.now();
          let ze;
          fe
            ? (ze = "accepted")
            : ce == null
              ? (ze = yt ? "pending" : void 0)
              : (ze = ce.inviteStatus);
          const lt = {
            contactId: (s == null ? void 0 : s.id) ?? null,
            totalDays: Ge,
            autoTime: Le,
            remindTime: _e,
            startedAt: fe
              ? ce.startedAt
              : (ce == null ? void 0 : ce.startedAt) || rt,
            aiCheckinDates: (ce == null ? void 0 : ce.aiCheckinDates) || {},
            ...(ze != null ? { inviteStatus: ze } : {}),
          };
          if (
            (await be.set(h, lt),
            window.dispatchEvent(
              new CustomEvent(nd, {
                detail: { contactId: s == null ? void 0 : s.id },
              }),
            ),
            pe(lt),
            Te(!1),
            yt)
          ) {
            const it = (r == null ? void 0 : r(s)) ?? {},
              Ht = n == null ? void 0 : n.find((os) => os.contactId === s.id),
              is =
                (Ht == null ? void 0 : Ht.id) ?? (a == null ? void 0 : a(s.id));
            is &&
              typeof o == "function" &&
              (o(
                is,
                `一起记账打卡 · 想和你坚持 ${Ge} 天`,
                null,
                "couple_ledger_checkin_invite",
                {
                  totalDays: Ge,
                  autoTime: Le,
                  remindTime: _e,
                  fromName: it.name || ut,
                  fromAvatar: it.avatar,
                  checkinInviteStatus: "pending",
                },
              ),
              setTimeout(() => {
                typeof c == "function" && c(is);
              }, 600));
          }
        } catch {
          alert("保存打卡挑战配置失败，请稍后重试");
        } finally {
          G(!1);
        }
      },
      ss = l.useCallback(() => {
        (ce && (W(ce.totalDays), re(ce.autoTime), ge(ce.remindTime)), Te(!0));
      }, [ce]),
      _s = async () => {
        if (
          h &&
          window.confirm(`确定取消当前打卡任务？

取消后需重新向 TA 发送邀请才能再次开始（会清空本空间的打卡挑战配置）。`)
        )
          try {
            (G(!0),
              await be.remove(h),
              window.dispatchEvent(
                new CustomEvent(nd, {
                  detail: { contactId: s == null ? void 0 : s.id },
                }),
              ),
              pe(null),
              W(7),
              re("11:00"),
              ge("20:30"),
              Q(!0),
              Te(!1));
          } catch {
            alert("取消失败，请稍后重试");
          } finally {
            G(!1);
          }
      },
      qs = async () => {
        const Ge = parseFloat(Re);
        if (!Re || isNaN(Ge) || Ge <= 0) {
          alert("请输入有效金额（大于 0）");
          return;
        }
        const Le = Math.round(Ge * 100) / 100;
        let _e = "";
        if (me)
          try {
            _e = await Pk(me);
          } catch {
            alert("图片处理失败");
            return;
          }
        const yt = Date.now(),
          rt = Ff({
            id: yt + Math.random(),
            amount: Le,
            direction: at,
            payer: vt,
            category: Qe,
            note: (Ze || "").trim(),
            date: yt,
            mood: "happy",
            source: "user",
            rotation: Math.random() * 6 - 3,
            image: _e || void 0,
            createdAt: yt,
            updatedAt: yt,
          });
        (Xt([rt, ...g]),
          De(""),
          Ue(""),
          ft("expense"),
          Oe("user"),
          Ye("food"),
          jt(null),
          Pt(""),
          k(!1));
      },
      Bs = l.useCallback(
        (Ge) => {
          if (window.confirm("确定要撕掉这张记录吗？")) {
            const Le = g.filter((_e) => _e.id !== Ge);
            Xt(Le);
          }
        },
        [g],
      ),
      Js = l.useCallback(
        async (Ge, Le = {}) => {
          var is, os, as;
          const { silent: _e = !1, auto: yt = !1 } = Le,
            rt = (vs, ts) => (ts && !_e && alert(ts), { ok: !1, reason: vs });
          if (!s) return rt("no_contact", "请从情侣空间进入记账");
          const ze = n == null ? void 0 : n.find((vs) => vs.contactId === s.id);
          if (!ze) return rt("no_chat", "先和 TA 聊几句再来生成吧");
          const lt = Ge.toLocaleDateString(),
            it = MJ(ze, lt);
          if (!it.length) return rt("no_messages", "这天还没有和 TA 的聊天哦");
          if (
            yt &&
            (ht.current || []).some(
              (ts) => ts.source === "ai" && ts.fromChatDay === lt,
            )
          )
            return { ok: !1, reason: "already_exists" };
          const Ht = it
            .map((vs) => {
              const ts = vs.sender === "me" ? ut : Pe,
                ys = (vs.text ?? vs.content ?? "").trim().slice(0, 200);
              return `${ts}: ${ys}`;
            })
            .join(
              `
`,
            )
            .slice(0, 3e3);
          yt || F(!0);
          try {
            const vs = `请严格遵循系统提示中的【角色人设/性格】与【世界书/世界观/记忆】设定（如有），再结合下面对话内容，生成记账。

根据以下【${lt}】${ut}与${Pe}的对话，生成【${Pe}（TA）】当天的记账记录。注意：生成的是 TA（${Pe}）自己的支出与收入，不是用户${ut}的消费记录。

对话内容：
${Ht}

要求：必须返回纯 JSON 数组格式，不要包含任何 markdown 标记或其他文字。每条记录包含：
- amount：数字，10-500
- direction：只能是 "expense"（支出）或 "income"（收入）
- category：只能是 food/shopping/transport/entertainment/others
- note：简短可爱描述（这条记账的事由）
- productDesc：该笔消费/收入的商品或项目的一段话文字描述（1-3 句话，会展示在卡片上，与对话内容相关）
- mood：happy/excited/calm/romantic 等
- aiComment：TA（${Pe}）对这条自己的记账的内心想法、心声或吐槽（第一人称）。不要太短，至少 3 句话（例如 3-6 句），围绕这笔记账与对话内容展开；不要强行限制字数，但也不要只有一句话。

风格可爱、与对话内容相关，3-8 条。`;
            let ts = "";
            if (typeof i == "function")
              ts = await i(
                [{ role: "user", content: vs }],
                s,
                "couple_ledger_from_chat",
                (ze == null ? void 0 : ze.settings) || {},
                [],
                [],
                [],
                !1,
                "",
                (r == null ? void 0 : r(s)) ?? null,
                null,
                null,
                { chatId: ze == null ? void 0 : ze.id },
              );
            else {
              const xt = await be.get("phone_apiConfig");
              if (!(xt != null && xt.endpoint) || !(xt != null && xt.key))
                return (
                  _e || alert("请先在设置中配置 API Key"),
                  { ok: !1, reason: "no_api_config" }
                );
              ts =
                ((as =
                  (os =
                    (is = (
                      await (
                        await fetch(`${xt.endpoint}/v1/chat/completions`, {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${xt.key}`,
                          },
                          body: JSON.stringify({
                            model: xt.model || "gpt-3.5-turbo",
                            messages: [{ role: "user", content: vs }],
                            temperature: 0.7,
                          }),
                        })
                      ).json()
                    ).choices) == null
                      ? void 0
                      : is[0]) == null
                    ? void 0
                    : os.message) == null
                  ? void 0
                  : as.content) ?? "";
            }
            let ys = [];
            try {
              const xt = ts.match(/\[[\s\S]*\]/);
              xt ? (ys = JSON.parse(xt[0])) : (ys = JSON.parse(ts));
            } catch {
              return rt("parse_error", "生成的数据格式有误，请重试");
            }
            const Vs = new Date(Ge);
            Vs.setHours(12, 0, 0, 0);
            const pt = Vs.getTime(),
              qe = Ge.toLocaleDateString(),
              dt = ys.map((xt, zt) => {
                const ms = xt.direction === "income" ? "income" : "expense";
                return Ff({
                  id: Date.now() + zt + Math.random(),
                  amount: Number(xt.amount) || 0,
                  direction: ms,
                  payer: "ai",
                  category: Zb.includes(xt.category) ? xt.category : "others",
                  note: xt.note,
                  productDesc:
                    typeof xt.productDesc == "string"
                      ? xt.productDesc.trim()
                      : void 0,
                  date: pt - zt * 1e3 * 60 * 30,
                  mood: xt.mood || "happy",
                  source: "ai",
                  aiComment: xt.aiComment,
                  rotation: Math.random() * 6 - 3,
                  fromChatDay: qe,
                  createdAt: pt,
                  updatedAt: pt,
                });
              });
            if (yt)
              x((xt) =>
                xt.some((zt) => zt.source === "ai" && zt.fromChatDay === qe)
                  ? xt
                  : [...dt, ...xt],
              );
            else {
              const xt = g.filter(
                (ms) => ms.source === "ai" && ms.fromChatDay === qe,
              );
              let zt = g;
              (xt.length > 0 &&
                window.confirm(`当天已有 ${xt.length} 条 TA 的记录，是否覆盖？

确定 = 覆盖当天 TA 记录后重新生成
取消 = 追加到现有记录后`) &&
                (zt = g.filter(
                  (Cs) => !(Cs.source === "ai" && Cs.fromChatDay === qe),
                )),
                Xt([...dt, ...zt]));
            }
            return (
              _e || alert(`成功根据聊天生成 ${dt.length} 条记录！`),
              { ok: !0, count: dt.length }
            );
          } catch (vs) {
            return (
              _e ||
                alert(
                  (vs == null ? void 0 : vs.message) ||
                    "生成失败，请检查网络或配置",
                ),
              { ok: !1, reason: "api_error", error: vs }
            );
          } finally {
            yt || F(!1);
          }
        },
        [s, n, ut, Pe, i, r, x, g, Xt],
      ),
      Xs = async () => {
        await Js(w, { silent: !1, auto: !1 });
      };
    l.useEffect(() => {
      if (!(s != null && s.id)) return;
      const Ge = s.id,
        Le = p,
        _e = h,
        yt = (ze) => {
          var lt;
          ((lt = ze.detail) == null ? void 0 : lt.contactId) === Ge &&
            be.get(Le, []).then((it) => {
              Array.isArray(it) && x(it);
            });
        },
        rt = (ze) => {
          var lt;
          ((lt = ze.detail) == null ? void 0 : lt.contactId) !== Ge ||
            !_e ||
            be.get(_e, null).then((it) => {
              it && typeof it == "object" && pe(it);
            });
        };
      return (
        window.addEventListener(ih, yt),
        window.addEventListener(nd, rt),
        () => {
          (window.removeEventListener(ih, yt),
            window.removeEventListener(nd, rt));
        }
      );
    }, [s == null ? void 0 : s.id, p, h, x]);
    const gn = l.useMemo(() => (g || []).map(Ff), [g]),
      sn = l.useMemo(() => {
        const Ge = new Date(w),
          Le = Ge.toLocaleDateString();
        return gn.filter((_e) => {
          try {
            const yt = new Date(_e.date);
            if (isNaN(yt.getTime())) return !1;
            if (b === "daily") return yt.toLocaleDateString() === Le;
            if (b === "weekly") {
              const [rt, ze] = Mx(Ge);
              return yt.getTime() >= rt && yt.getTime() <= ze;
            }
            return b === "monthly" ? Rk(_e.date, Ge) : !0;
          } catch {
            return !1;
          }
        });
      }, [gn, b, w]),
      ln = l.useMemo(() => {
        if (b !== "weekly" && b !== "monthly") return [];
        const Ge = new Date(w);
        return gn.filter((Le) => {
          const _e = new Date(Le.date);
          if (isNaN(_e.getTime())) return !1;
          if (b === "weekly") {
            const [yt, rt] = Mx(Ge);
            return _e.getTime() >= yt && _e.getTime() <= rt;
          }
          return Rk(Le.date, Ge);
        });
      }, [gn, b, w]),
      rn = l.useMemo(() => {
        const Ge = new Map();
        for (const Le of ln) {
          const _e = _m(new Date(Le.date));
          if (!_e) continue;
          Ge.has(_e) || Ge.set(_e, { userVol: 0, aiVol: 0, userN: 0, aiN: 0 });
          const yt = Ge.get(_e),
            rt = Number(Le.amount) || 0;
          Le.source === "ai"
            ? ((yt.aiVol += rt), (yt.aiN += 1))
            : ((yt.userVol += rt), (yt.userN += 1));
        }
        return Ge;
      }, [ln]),
      wt = l.useMemo(() => {
        let Ge = 1;
        for (const Le of rn.values()) Ge = Math.max(Ge, Le.userVol, Le.aiVol);
        return Ge;
      }, [rn]),
      xs = l.useMemo(() => {
        let Ge = 0;
        for (const Le of rn.values()) Le.userN > 0 && Le.aiN > 0 && (Ge += 1);
        return Ge;
      }, [rn]),
      ot = l.useMemo(() => {
        if (b !== "weekly") return [];
        const [Ge] = Mx(w),
          Le = ["一", "二", "三", "四", "五", "六", "日"],
          _e = [];
        for (let yt = 0; yt < 7; yt++) {
          const rt = new Date(Ge);
          rt.setDate(rt.getDate() + yt);
          const ze = _m(rt),
            lt = rn.get(ze) || { userVol: 0, aiVol: 0, userN: 0, aiN: 0 };
          _e.push({
            date: rt,
            key: ze,
            weekday: Le[yt],
            userVol: lt.userVol,
            aiVol: lt.aiVol,
            userN: lt.userN,
            aiN: lt.aiN,
            resonance: lt.userN > 0 && lt.aiN > 0,
          });
        }
        return _e;
      }, [b, w, rn]),
      st = l.useMemo(() => {
        if (b !== "monthly") return [];
        const Ge = new Date(w),
          Le = Ge.getFullYear(),
          _e = Ge.getMonth(),
          yt = new Date(Le, _e, 1),
          rt = new Date(Le, _e + 1, 0),
          ze = yt.getDay(),
          lt = ze === 0 ? 6 : ze - 1,
          it = rt.getDate(),
          Ht = [];
        for (let os = 0; os < lt; os++)
          Ht.push({ type: "pad", key: `mpad-${os}` });
        for (let os = 1; os <= it; os++) {
          const as = new Date(Le, _e, os),
            vs = _m(as),
            ts = rn.get(vs) || { userVol: 0, aiVol: 0, userN: 0, aiN: 0 };
          Ht.push({
            type: "day",
            date: as,
            dayNum: os,
            key: vs,
            userVol: ts.userVol,
            aiVol: ts.aiVol,
            userN: ts.userN,
            aiN: ts.aiN,
            resonance: ts.userN > 0 && ts.aiN > 0,
          });
        }
        const is = Ht.length % 7;
        if (is !== 0)
          for (let os = 0; os < 7 - is; os++)
            Ht.push({ type: "pad", key: `mpad-end-${os}` });
        return Ht;
      }, [b, w, rn]),
      $t = l.useMemo(() => {
        let Ge = 0,
          Le = 0,
          _e = 0,
          yt = 0;
        for (const rt of ln) {
          const ze = Number(rt.amount) || 0,
            lt = rt.source === "ai";
          rt.direction === "income"
            ? lt
              ? (yt += ze)
              : (Le += ze)
            : lt
              ? (_e += ze)
              : (Ge += ze);
        }
        return { userE: Ge, userI: Le, aiE: _e, aiI: yt };
      }, [ln]),
      Ft = l.useCallback((Ge) => {
        const Le = new Date(Ge);
        (Le.setHours(12, 0, 0, 0), _(Le), N("daily"));
      }, []),
      es = l.useMemo(() => {
        let Ge = sn.filter(
          (rt) => rt.source === I || (!rt.source && I === "user"),
        );
        const Le = (V || "").trim().toLowerCase();
        (Le &&
          (Ge = Ge.filter((rt) => (rt.note || "").toLowerCase().includes(Le))),
          le === "expense" &&
            (Ge = Ge.filter((rt) => rt.direction !== "income")),
          le === "income" &&
            (Ge = Ge.filter((rt) => rt.direction === "income")),
          X !== "all" && (Ge = Ge.filter((rt) => rt.category === X)),
          xe !== "all" && (Ge = Ge.filter((rt) => rt.payer === xe)));
        const _e = (rt, ze) =>
            new Date(rt.date).getTime() - new Date(ze.date).getTime(),
          yt = (rt, ze) => rt.amount - ze.amount;
        return (
          R === "timeDesc"
            ? (Ge = [...Ge].sort((rt, ze) => _e(ze, rt)))
            : R === "timeAsc"
              ? (Ge = [...Ge].sort(_e))
              : R === "amountDesc"
                ? (Ge = [...Ge].sort((rt, ze) => yt(ze, rt)))
                : R === "amountAsc" && (Ge = [...Ge].sort(yt)),
          Ge
        );
      }, [sn, I, V, le, X, xe, R]),
      At = l.useMemo(() => {
        const Ge = sn.filter(
          (yt) => yt.source === I || (!yt.source && I === "user"),
        );
        let Le = 0,
          _e = 0;
        return (
          Ge.forEach((yt) => {
            yt.direction === "income" ? (_e += yt.amount) : (Le += yt.amount);
          }),
          { expense: Le, income: _e, net: _e - Le }
        );
      }, [sn, I]),
      Jt = l.useMemo(() => {
        const Ge = {};
        return (
          es.forEach((Le) => {
            try {
              const _e = new Date(Le.date);
              if (isNaN(_e.getTime())) return;
              const yt = _e.toLocaleDateString("zh-CN", {
                month: "numeric",
                day: "numeric",
              });
              (Ge[yt] || (Ge[yt] = []), Ge[yt].push(Le));
            } catch {}
          }),
          Object.entries(Ge)
            .map(([Le, _e]) => ({ date: Le, items: _e }))
            .sort((Le, _e) => {
              const yt = Le.items[0] ? new Date(Le.items[0].date).getTime() : 0;
              return (
                (_e.items[0] ? new Date(_e.items[0].date).getTime() : 0) - yt
              );
            })
        );
      }, [es]),
      Vt = b === "daily" ? "当日" : b === "weekly" ? "本周" : "本月",
      qt = l.useMemo(() => {
        try {
          return new Date(w).toLocaleDateString("zh-CN", {
            month: "long",
            day: "numeric",
          });
        } catch {
          return "";
        }
      }, [w]),
      Lt =
        !!(V && V.trim()) ||
        le !== "all" ||
        X !== "all" ||
        xe !== "all" ||
        R !== "timeDesc",
      Qt = l.useMemo(() => {
        try {
          return new Date(w).getFullYear();
        } catch {
          return "";
        }
      }, [w]),
      js = l.useMemo(() => {
        if (b !== "weekly") return null;
        const Ge = new Date(w),
          [Le] = Mx(Ge),
          _e = new Date(Le),
          yt = new Date(Le);
        return (
          yt.setDate(yt.getDate() + 6),
          {
            y: _e.getFullYear(),
            m1: _e.getMonth() + 1,
            d1: _e.getDate(),
            m2: yt.getMonth() + 1,
            d2: yt.getDate(),
          }
        );
      }, [w, b]),
      cs = l.useMemo(() => {
        if (b !== "monthly") return null;
        const Ge = new Date(w);
        return {
          y: Ge.getFullYear(),
          m: Ge.getMonth() + 1,
          mZh: Ge.toLocaleDateString("zh-CN", { month: "long" }),
        };
      }, [w, b]),
      Ne = () => {
        const Ge = new Date(w);
        (b === "daily"
          ? Ge.setDate(Ge.getDate() - 1)
          : b === "weekly"
            ? Ge.setDate(Ge.getDate() - 7)
            : Ge.setMonth(Ge.getMonth() - 1),
          _(Ge));
      },
      Je = () => {
        const Ge = new Date(w);
        (b === "daily"
          ? Ge.setDate(Ge.getDate() + 1)
          : b === "weekly"
            ? Ge.setDate(Ge.getDate() + 7)
            : Ge.setMonth(Ge.getMonth() + 1),
          _(Ge));
      },
      St = (Ge) => {
        (M(Ge), S(!1), T(null));
      },
      Be = () => {
        C && (T({ ...C }), S(!0));
      },
      Ke = async () => {
        if (!j || !C) return;
        const Ge = parseFloat(j.amount);
        if (isNaN(Ge) || Ge <= 0) {
          alert("请输入有效金额");
          return;
        }
        const Le = gn.map((_e) =>
          _e.id === C.id
            ? Ff({
                ..._e,
                ...j,
                amount: Math.round(Ge * 100) / 100,
                updatedAt: Date.now(),
              })
            : _e,
        );
        (Xt(Le), M(null), S(!1), T(null));
      },
      Nt = (Ge) => {
        var _e;
        const Le = (_e = Ge.target.files) == null ? void 0 : _e[0];
        Le &&
          (Pk(Le)
            .then((yt) => T((rt) => rt && { ...rt, image: yt }))
            .catch(() => alert("图片处理失败")),
          (Ge.target.value = ""));
      };
    return e.jsxs("div", {
      className: `h-full w-full relative overflow-hidden flex flex-col ${zi}`,
      style: { backgroundColor: gi.bgColor },
      children: [
        e.jsx("div", {
          className: "absolute inset-0 opacity-30",
          style: {
            backgroundImage: gi.bgPattern,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          },
        }),
        e.jsx("div", { className: "h-12 w-full shrink-0 z-50" }),
        e.jsxs("div", {
          className: "pl-6 pr-0 pb-2 flex items-start z-40 relative",
          children: [
            e.jsx("div", {
              className: "w-1/3 flex items-start",
              children: e.jsx(zk, {
                onClick: t,
                icon: Xr,
                color: "#B5EAD7",
                label: "返回",
              }),
            }),
            e.jsx("div", {
              className: "w-1/3 flex justify-center items-start",
              children: e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(We.button, {
                    type: "button",
                    whileHover: { scale: 1.1, y: -2 },
                    whileTap: { scale: 0.9 },
                    onClick: () => L("ai"),
                    className: `w-10 h-10 rounded-xl shadow-sm flex items-center justify-center overflow-hidden border-2 transition-all shrink-0 ${I === "ai" ? "border-[#FFB7C5] ring-2 ring-[#FFB7B2]/35" : "border-white"}`,
                    style: {
                      backgroundColor: I === "ai" ? "#FFD6E2" : "#E0E0E0",
                    },
                    title: Pe,
                    "aria-label": Pe,
                    children:
                      s != null && s.avatar
                        ? e.jsx("img", {
                            src: s.avatar,
                            alt: "",
                            className: "w-full h-full object-cover",
                          })
                        : e.jsx(pT, { size: 18, className: "text-white" }),
                  }),
                  e.jsxs("div", {
                    className:
                      "relative w-6 h-10 flex items-center justify-center pointer-events-none select-none",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-6 h-px bg-gradient-to-r from-[#FFDAC1] via-[#FFB7B2] to-[#FFB7B2] opacity-45",
                      }),
                      e.jsx(zn, {
                        size: 12,
                        className: "absolute text-[#FF9AA2]/70",
                      }),
                    ],
                  }),
                  e.jsx(We.button, {
                    type: "button",
                    whileHover: { scale: 1.1, y: -2 },
                    whileTap: { scale: 0.9 },
                    onClick: () => L("user"),
                    className: `w-10 h-10 rounded-xl shadow-sm flex items-center justify-center overflow-hidden border-2 transition-all shrink-0 ${I === "user" ? "border-[#FFB7B2] ring-2 ring-[#FFB7B2]/30" : "border-white"}`,
                    style: {
                      backgroundColor: I === "user" ? "#FFB7B2" : "#E0E0E0",
                    },
                    title: ut,
                    "aria-label": ut,
                    children:
                      (ns = r == null ? void 0 : r(s)) != null && ns.avatar
                        ? e.jsx("img", {
                            src: r(s).avatar,
                            alt: "",
                            className: "w-full h-full object-cover",
                          })
                        : e.jsx(wr, { size: 18, className: "text-white" }),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "w-1/3 flex justify-end items-start pr-6",
              children: e.jsx(zk, {
                onClick: Xs,
                icon: B ? ao : Xn,
                color: "#FFDAC1",
                label: B ? "生成中..." : "根据聊天生成",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "flex-1 px-3 pb-6 overflow-hidden flex justify-center relative z-10",
          children: e.jsxs("div", {
            className: "w-full max-w-2xl h-full relative flex flex-col",
            children: [
              ce
                ? e.jsxs("div", {
                    className: "mb-2 space-y-1",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between gap-2 text-[11px] text-[#6B5B55] bg-white/60 border border-white rounded-2xl px-3 py-1 shadow-[0_4px_10px_rgba(255,155,162,0.18)]",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [
                              e.jsx("span", {
                                className:
                                  "inline-flex h-4 w-4 rounded-full bg-[#FFB7B2] text-white items-center justify-center text-[10px] font-bold shrink-0",
                                children: "♥",
                              }),
                              e.jsx("span", {
                                className: "truncate",
                                children: fe
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-semibold text-[#7EC8B8]",
                                          children: "打卡进行中",
                                        }),
                                        " · ",
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: ce.totalDays,
                                        }),
                                        " 天",
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        "已开启 ",
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: ce.totalDays,
                                        }),
                                        " 天一起记账打卡",
                                      ],
                                    }),
                              }),
                              e.jsx("button", {
                                type: "button",
                                "aria-label": "查看打卡说明",
                                "aria-expanded": Ae,
                                onClick: (Ge) => {
                                  (Ge.stopPropagation(), te((Le) => !Le));
                                },
                                className: `shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${Ae ? "border-[#7EC8B8] bg-[#E8F6F3] text-[#2A8F7A]" : "border-[#FFE4E1] bg-white/90 text-[#C4A69A] hover:border-[#7EC8B8]/50"}`,
                                children: e.jsx(xl, {
                                  size: 14,
                                  strokeWidth: 2,
                                }),
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: ss,
                            className:
                              "shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-[#FFFCF9] border border-[#FFDAC1] text-[#C7777D]",
                            children: fe ? "查看/调整" : "调整",
                          }),
                        ],
                      }),
                      e.jsx(Os, {
                        initial: !1,
                        children: Ae
                          ? e.jsx(We.div, {
                              initial: { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: { height: 0, opacity: 0 },
                              transition: { duration: 0.2 },
                              className: "overflow-hidden",
                              children: e.jsx("div", {
                                className:
                                  "rounded-xl border border-[#E8F5F2] bg-white/85 px-3 py-2 text-[10px] leading-relaxed text-[#8C7A6D]",
                                children: fe
                                  ? "与 TA 的打卡约定进行中。点右侧可打开面板修改天数与时间（不会重复发邀请）；只有取消任务清空后重新保存并勾选，才会再发邀请卡片。"
                                  : "打卡配置已保存。点「调整」修改；仅首次创建且勾选时发邀请。点侧栏心形钮也可打开面板。",
                              }),
                            })
                          : null,
                      }),
                    ],
                  })
                : null,
              e.jsxs("div", {
                className:
                  "flex-1 bg-[#FFFCF9] rounded-[2rem] shadow-xl relative overflow-hidden flex border-4 border-white",
                children: [
                  e.jsxs("div", {
                    className:
                      "w-14 h-full bg-[#FFF5F7] border-r border-[#FFEBEE] relative flex flex-col items-center py-6 z-20 justify-between",
                    children: [
                      e.jsx("div", {
                        className:
                          "flex flex-col gap-12 mt-4 w-full items-center relative h-1/2",
                        children: [...Array(4)].map((Ge, Le) =>
                          e.jsx(AJ, { y: 20 + Le * 80 }, Le),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col gap-3 mb-4 items-center",
                        children: [
                          s
                            ? e.jsx(We.button, {
                                type: "button",
                                onClick: () => Fe(!0),
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.9 },
                                className: `w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 border-white transition-all ${Ee ? "ring-2 ring-offset-1 ring-[#FF9AA2]/70 opacity-100" : "opacity-90 hover:opacity-100"}`,
                                style: {
                                  background: Ee
                                    ? "linear-gradient(145deg, #FFB7B2 0%, #FF9AA2 50%, #FF758C 100%)"
                                    : "linear-gradient(145deg, #FFF5F7 0%, #FFE4E8 45%, #FFD6DC 100%)",
                                },
                                "aria-label": Ee
                                  ? "聊天帮忙记账（已开启）"
                                  : "聊天里帮忙记账",
                                title: Ee
                                  ? "聊天帮忙记账 · 已开启 · 点按设置"
                                  : "在聊天里用口令弹出记账确认 · 点按开启",
                                children: e.jsx(Ar, {
                                  size: 14,
                                  className: Ee
                                    ? "text-white"
                                    : "text-[#C26B77]",
                                  strokeWidth: 2.25,
                                }),
                              })
                            : null,
                          s
                            ? e.jsx(We.button, {
                                type: "button",
                                onClick: ss,
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.9 },
                                className: `w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 border-white transition-all ${ce ? "ring-2 ring-offset-1 ring-[#7EC8B8]/60 opacity-100" : "opacity-90 hover:opacity-100"}`,
                                style: { backgroundColor: "#7EC8B8" },
                                "aria-label": fe
                                  ? "一起记账打卡（进行中）"
                                  : ce
                                    ? "一起记账打卡（已开启）"
                                    : "一起记账打卡",
                                title: fe
                                  ? "打卡任务进行中 · 点击查看或取消"
                                  : ce
                                    ? "一起记账打卡 · 已开启"
                                    : "一起记账打卡",
                                children: e.jsx(Hy, {
                                  size: 14,
                                  className: "text-white",
                                }),
                              })
                            : null,
                          e.jsx(We.button, {
                            type: "button",
                            onClick: () => k(!0),
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 },
                            className:
                              "w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 border-white transition-all opacity-90 hover:opacity-100",
                            style: { backgroundColor: "#FF9AA2" },
                            "aria-label": "记一笔",
                            title: "记一笔",
                            children: e.jsx(ea, {
                              size: 14,
                              className: "text-white",
                            }),
                          }),
                          e.jsx(We.button, {
                            type: "button",
                            onClick: () => q((Ge) => !Ge),
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 },
                            className: `w-8 h-8 rounded-full flex items-center justify-center shadow-sm border-2 border-white transition-all ${K ? "ring-2 ring-offset-1 ring-[#FFB7B2]/50" : "opacity-90 hover:opacity-100"}`,
                            style: { backgroundColor: "#FFD1D9" },
                            "aria-label": "筛选与搜索",
                            title: "筛选与搜索",
                            children: e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx(pr, {
                                  size: 14,
                                  className: "text-white",
                                }),
                                Lt &&
                                  e.jsx("span", {
                                    className:
                                      "absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF3B30] border border-white",
                                  }),
                              ],
                            }),
                          }),
                          [
                            { id: "daily", label: "日", color: "#FFB7B2" },
                            { id: "weekly", label: "周", color: "#FFDAC1" },
                            { id: "monthly", label: "月", color: "#E2F0CB" },
                          ].map((Ge) =>
                            e.jsx(
                              We.button,
                              {
                                onClick: () => N(Ge.id),
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.9 },
                                className: `w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-[10px] font-bold text-white border-2 border-white transition-all ${b === Ge.id ? "ring-2 ring-offset-1 ring-[#FFB7B2]/50" : "opacity-80 hover:opacity-100"}`,
                                style: { backgroundColor: Ge.color },
                                children: Ge.label,
                              },
                              Ge.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex-1 relative overflow-hidden flex flex-col bg-[#FFFCF9]",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 pointer-events-none opacity-30",
                        style: {
                          backgroundImage:
                            "radial-gradient(#E0E0E0 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                        },
                      }),
                      e.jsxs("div", {
                        className:
                          "flex-1 overflow-y-auto custom-scrollbar px-4 py-6 relative z-10",
                        children: [
                          e.jsx(Os, {
                            children:
                              K &&
                              e.jsx(We.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                className: "absolute inset-0 z-40",
                                onClick: () => q(!1),
                                children: e.jsxs(We.div, {
                                  initial: { x: -20, opacity: 0 },
                                  animate: { x: 0, opacity: 1 },
                                  exit: { x: -20, opacity: 0 },
                                  transition: { type: "spring", bounce: 0.2 },
                                  className:
                                    "absolute left-0 top-0 bottom-0 w-[16.5rem] bg-[#FFFCF9] border-r border-[#F3D7D9] shadow-xl p-3",
                                  onClick: (Ge) => Ge.stopPropagation(),
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-2",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-sm font-semibold text-[#6B5B55]",
                                          children: "筛选",
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          className:
                                            "p-1 rounded-full hover:bg-[#FFB7B2]/15 text-[#6B5B55]",
                                          onClick: () => q(!1),
                                          "aria-label": "关闭筛选",
                                          children: e.jsx(Ts, { size: 18 }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        e.jsxs("div", {
                                          className: "relative",
                                          children: [
                                            e.jsx(pr, {
                                              size: 14,
                                              className:
                                                "absolute left-3 top-1/2 -translate-y-1/2 text-[#BFA9A3]",
                                            }),
                                            e.jsx("input", {
                                              type: "text",
                                              value: V,
                                              onChange: (Ge) =>
                                                ne(Ge.target.value),
                                              placeholder: "搜索备注",
                                              className:
                                                "w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-white text-[#6B5B55] outline-none border border-[#F3D7D9] focus:border-[#FFB7B2] focus:ring-2 focus:ring-[#FFB7B2]/20",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[11px] text-[#8A7B76] mb-1",
                                              children: "类型",
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "inline-flex w-full rounded-xl overflow-hidden border border-[#F3D7D9] bg-white",
                                              children: [
                                                { v: "all", l: "全部" },
                                                { v: "expense", l: "支出" },
                                                { v: "income", l: "收入" },
                                              ].map((Ge) =>
                                                e.jsx(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    onClick: () => ie(Ge.v),
                                                    className: `flex-1 px-3 py-2 text-xs transition-colors ${le === Ge.v ? "bg-[#FFB7B2]/25 text-[#6B5B55] font-semibold" : "text-[#8A7B76] hover:bg-[#FFB7B2]/10"}`,
                                                    children: Ge.l,
                                                  },
                                                  Ge.v,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[11px] text-[#8A7B76] mb-1",
                                              children: "分类",
                                            }),
                                            e.jsxs("select", {
                                              value: X,
                                              onChange: (Ge) =>
                                                je(Ge.target.value),
                                              className:
                                                "w-full px-3 py-2 text-xs rounded-xl bg-white text-[#6B5B55] border border-[#F3D7D9] outline-none focus:border-[#FFB7B2]",
                                              children: [
                                                e.jsx("option", {
                                                  value: "all",
                                                  children: "全部分类",
                                                }),
                                                Zb.map((Ge) =>
                                                  e.jsx(
                                                    "option",
                                                    {
                                                      value: Ge,
                                                      children: dd[Ge].label,
                                                    },
                                                    Ge,
                                                  ),
                                                ),
                                                (y || []).map((Ge) =>
                                                  e.jsx(
                                                    "option",
                                                    {
                                                      value: Ge.id,
                                                      children: Ge.name,
                                                    },
                                                    Ge.id,
                                                  ),
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[11px] text-[#8A7B76] mb-1",
                                              children: "谁付的",
                                            }),
                                            e.jsxs("select", {
                                              value: xe,
                                              onChange: (Ge) =>
                                                ye(Ge.target.value),
                                              className:
                                                "w-full px-3 py-2 text-xs rounded-xl bg-white text-[#6B5B55] border border-[#F3D7D9] outline-none focus:border-[#FFB7B2]",
                                              children: [
                                                e.jsx("option", {
                                                  value: "all",
                                                  children: "全部",
                                                }),
                                                e.jsx("option", {
                                                  value: "user",
                                                  children: "我付",
                                                }),
                                                e.jsx("option", {
                                                  value: "ai",
                                                  children: "TA 付",
                                                }),
                                                e.jsx("option", {
                                                  value: "both",
                                                  children: "一起",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[11px] text-[#8A7B76] mb-1",
                                              children: "排序",
                                            }),
                                            e.jsxs("select", {
                                              value: R,
                                              onChange: (Ge) =>
                                                oe(Ge.target.value),
                                              className:
                                                "w-full px-3 py-2 text-xs rounded-xl bg-white text-[#6B5B55] border border-[#F3D7D9] outline-none focus:border-[#FFB7B2]",
                                              children: [
                                                e.jsx("option", {
                                                  value: "timeDesc",
                                                  children: "时间 · 新→旧",
                                                }),
                                                e.jsx("option", {
                                                  value: "timeAsc",
                                                  children: "时间 · 旧→新",
                                                }),
                                                e.jsx("option", {
                                                  value: "amountDesc",
                                                  children: "金额 · 高→低",
                                                }),
                                                e.jsx("option", {
                                                  value: "amountAsc",
                                                  children: "金额 · 低→高",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        Lt &&
                                          e.jsx("button", {
                                            type: "button",