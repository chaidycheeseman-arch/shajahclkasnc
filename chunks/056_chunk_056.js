                                            onClick: () => {
                                              (ne(""),
                                                ie("all"),
                                                je("all"),
                                                ye("all"),
                                                oe("timeDesc"));
                                            },
                                            className:
                                              "w-full px-3 py-2 text-xs rounded-xl border border-[#F3D7D9] bg-white text-[#8A7B76] hover:bg-[#FFF0F5]",
                                            children: "清空筛选",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                          }),
                          b === "daily" &&
                            e.jsxs("div", {
                              className:
                                "mb-6 flex items-start justify-between gap-2",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex min-w-0 flex-1 items-center gap-2",
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: Ne,
                                      className:
                                        "shrink-0 rounded-full p-1 text-[#6B5B55] hover:bg-[#FFB7B2]/20",
                                      "aria-label": "上一日",
                                      title: "上一日",
                                      children: e.jsx(un, { size: 20 }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "relative flex min-w-0 flex-col items-start gap-0",
                                      children: [
                                        !!Qt &&
                                          e.jsx("div", {
                                            className:
                                              "text-base font-bold tracking-wider text-[#8B7355]",
                                            children: Qt,
                                          }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: () => Z((Ge) => !Ge),
                                          className: "text-left",
                                          children: e.jsx("span", {
                                            className: `text-lg font-bold ${gi.ink}`,
                                            children: qt,
                                          }),
                                        }),
                                        O &&
                                          e.jsx("div", {
                                            className:
                                              "absolute left-0 top-full z-30 mt-1 rounded-lg border border-[#FFEBEE] bg-white p-2 shadow-lg",
                                            children: e.jsx("input", {
                                              type: "date",
                                              value: w
                                                .toISOString()
                                                .slice(0, 10),
                                              onChange: (Ge) => {
                                                const Le = new Date(
                                                  Ge.target.value,
                                                );
                                                (isNaN(Le.getTime()) || _(Le),
                                                  Z(!1));
                                              },
                                              className:
                                                "rounded-lg border border-[#FFB7B2] px-2 py-1.5 text-sm text-[#6B5B55]",
                                            }),
                                          }),
                                        e.jsxs("div", {
                                          className:
                                            "text-[11px] text-[#9E8E88]",
                                          children: ["日期 · ", Vt],
                                        }),
                                      ],
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: Je,
                                      className:
                                        "shrink-0 rounded-full p-1 text-[#6B5B55] hover:bg-[#FFB7B2]/20",
                                      "aria-label": "下一日",
                                      title: "下一日",
                                      children: e.jsx(Kn, { size: 20 }),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative min-w-[7rem] shrink-0 rotate-2 rounded-lg border border-[#FFF59D] bg-[#FFF9C4] p-2 text-center shadow-sm",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute -top-2 left-1/2 h-3 w-8 -translate-x-1/2 bg-[#FFCC80]/50",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "px-0.5 text-[10px] font-bold text-[#FBC02D]",
                                      children: [
                                        I === "user" ? "我的" : Pe,
                                        " · ",
                                        Vt,
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "mt-0.5 text-xs text-gray-500",
                                      children: ["支 ¥", At.expense.toFixed(0)],
                                    }),
                                    e.jsxs("div", {
                                      className: "text-xs text-emerald-600",
                                      children: ["收 ¥", At.income.toFixed(0)],
                                    }),
                                    e.jsxs("div", {
                                      className: `text-sm font-bold ${gi.ink}`,
                                      children: ["净 ¥", At.net.toFixed(0)],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          b === "weekly" &&
                            js &&
                            e.jsxs("div", {
                              className: "mb-5 space-y-3",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "relative overflow-hidden rounded-2xl border border-[#F5D0D8] border-l-4 border-l-[#FFB7B2] bg-gradient-to-r from-[#FFFCFC] via-white to-[#FFFAFB] p-3 shadow-[0_2px_12px_rgba(190,120,130,0.06)]",
                                  children: e.jsxs("div", {
                                    className: "flex items-stretch gap-2",
                                    children: [
                                      e.jsx(We.button, {
                                        type: "button",
                                        whileTap: { scale: 0.92 },
                                        onClick: Ne,
                                        className:
                                          "flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl border-2 border-[#FFE4E8] bg-white text-[#C0707D] shadow-sm hover:border-[#FFB7B2]/50 hover:bg-[#FFF5F7]",
                                        "aria-label": "上一周",
                                        title: "上一周",
                                        children: e.jsx(un, { size: 20 }),
                                      }),
                                      e.jsxs("div", {
                                        className: "relative min-w-0 flex-1",
                                        children: [
                                          e.jsx("p", {
                                            className: `mb-1 text-center text-[9px] font-bold tracking-[0.18em] text-[#D88998] ${zi}`,
                                            children: "本周轨迹",
                                          }),
                                          e.jsxs("div", {
                                            className: "relative px-1 py-1",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "pointer-events-none absolute left-2 right-2 top-[42%] h-0.5 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#FFB7B2]/20 from-[4%] via-[#FFDAC1]/55 via-[50%] to-[#FFB7B2]/25 to-[96%]",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "relative z-[1] flex justify-between gap-0 px-0.5",
                                                children: ot.map((Ge) => {
                                                  const Le = Xb(
                                                    Ge.date,
                                                    new Date(),
                                                  );
                                                  return e.jsxs(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      title: `周${Ge.weekday} ${Ge.date.getMonth() + 1}/${Ge.date.getDate()}`,
                                                      onClick: () =>
                                                        Ft(Ge.date),
                                                      className:
                                                        "flex flex-col items-center gap-0.5",
                                                      children: [
                                                        e.jsx("span", {
                                                          className: `h-2.5 w-2.5 rounded-full border-2 border-white shadow-sm transition ${Le ? "scale-125 bg-[#FF9AA2] ring-2 ring-[#FFB7B2]/40" : "bg-[#FFD6DE] hover:bg-[#FFC9D4]"}`,
                                                        }),
                                                        e.jsx("span", {
                                                          className: `text-[8px] font-bold leading-none ${Le ? "text-[#C45D6F]" : "text-[#B8959E]"}`,
                                                          children: Ge.weekday,
                                                        }),
                                                      ],
                                                    },
                                                    Ge.key,
                                                  );
                                                }),
                                              }),
                                            ],
                                          }),
                                          e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Z((Ge) => !Ge),
                                            className:
                                              "mt-1 w-full rounded-xl border border-transparent py-1.5 text-center transition hover:border-[#FFE4E8] hover:bg-[#FFF8FA]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB7B2]/25",
                                            children: [
                                              e.jsxs("div", {
                                                className: `text-sm font-bold leading-snug text-[#4A3F3C] ${zi}`,
                                                children: [
                                                  js.m1,
                                                  "月",
                                                  js.d1,
                                                  "日 — ",
                                                  js.m2,
                                                  "月",
                                                  js.d2,
                                                  "日",
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "font-mono text-[10px] text-[#B8959E]",
                                                children: js.y,
                                              }),
                                            ],
                                          }),
                                          O &&
                                            e.jsx("div", {
                                              className:
                                                "absolute left-1/2 top-full z-30 mt-1 -translate-x-1/2 rounded-xl border border-[#F0D0D8] bg-white p-2 shadow-lg",
                                              children: e.jsx("input", {
                                                type: "date",
                                                value: w
                                                  .toISOString()
                                                  .slice(0, 10),
                                                onChange: (Ge) => {
                                                  const Le = new Date(
                                                    Ge.target.value,
                                                  );
                                                  (isNaN(Le.getTime()) || _(Le),
                                                    Z(!1));
                                                },
                                                className:
                                                  "rounded-lg border border-[#FFB7B2] px-2 py-1.5 text-sm text-[#6B5B55]",
                                              }),
                                            }),
                                        ],
                                      }),
                                      e.jsx(We.button, {
                                        type: "button",
                                        whileTap: { scale: 0.92 },
                                        onClick: Je,
                                        className:
                                          "flex h-10 w-10 shrink-0 items-center justify-center self-center rounded-xl border-2 border-[#FFE4E8] bg-white text-[#C0707D] shadow-sm hover:border-[#FFB7B2]/50 hover:bg-[#FFF5F7]",
                                        "aria-label": "下一周",
                                        title: "下一周",
                                        children: e.jsx(Kn, { size: 20 }),
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex flex-wrap justify-center gap-2 px-0.5",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 rounded-full border border-[#FFD6DE] bg-white px-2.5 py-1 text-[9px] tabular-nums text-[#6B5B55] shadow-sm",
                                      children: [
                                        e.jsx(Ix, { className: "scale-90" }),
                                        e.jsx("span", {
                                          className:
                                            "font-black text-[#5C403F]",
                                          children: xs,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 rounded-full border border-[#FFE4E8] bg-[#FFF8FA] px-2.5 py-1 text-[9px] tabular-nums text-[#6B5B55]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "h-2 w-2 rounded-full bg-[#FFB7B2] ring-1 ring-white",
                                        }),
                                        e.jsx("span", {
                                          className: "font-bold text-[#C0707D]",
                                          children: "我",
                                        }),
                                        e.jsx("span", {
                                          children: $t.userE.toFixed(0),
                                        }),
                                        e.jsxs("span", {
                                          className: "text-emerald-600/85",
                                          children: ["/", $t.userI.toFixed(0)],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 rounded-full border border-[#FFE4E8] bg-[#FFF8FA] px-2.5 py-1 text-[9px] tabular-nums text-[#6B5B55]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "h-2 w-2 rounded-full ring-1 ring-white",
                                          style: {
                                            background:
                                              "linear-gradient(135deg,#FFC9D4,#FF8FA3)",
                                          },
                                        }),
                                        e.jsx("span", {
                                          className: "font-bold text-[#C0707D]",
                                          children: "TA",
                                        }),
                                        e.jsx("span", {
                                          children: $t.aiE.toFixed(0),
                                        }),
                                        e.jsxs("span", {
                                          className: "text-emerald-600/85",
                                          children: ["/", $t.aiI.toFixed(0)],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          b === "monthly" &&
                            cs &&
                            e.jsxs("div", {
                              className: "mb-4 space-y-2",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "relative flex min-h-[4.25rem] gap-0",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "relative flex w-3 shrink-0 flex-col items-center rounded-l-2xl border-2 border-r-0 border-[#FFD6DE] bg-gradient-to-b from-[#FFEEF2] via-[#FFF5F8] to-[#FFFAFB] py-2 shadow-inner",
                                      "aria-hidden": !0,
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "h-full w-1 rounded-full bg-gradient-to-b from-[#FFB7B2]/55 via-[#FFB7B2]/35 to-[#FFDAC1]/25",
                                        }),
                                        e.jsx(zn, {
                                          className:
                                            "mt-1.5 h-3 w-3 rotate-6 text-[#FFB7B2]/55",
                                          fill: "currentColor",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex min-w-0 flex-1 items-center gap-1.5 rounded-r-2xl border-2 border-l-0 border-[#FFD6DE] bg-white/95 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
                                      children: [
                                        e.jsx(We.button, {
                                          type: "button",
                                          whileTap: { scale: 0.92 },
                                          onClick: Ne,
                                          className:
                                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E8D4DA] bg-[#FFFAFB] text-[#9A6B78] hover:border-[#FFB7B2]/45 hover:bg-[#FFF5F7]",
                                          "aria-label": "上一月",
                                          title: "上一月",
                                          children: e.jsx(un, { size: 18 }),
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: () => Z((Ge) => !Ge),
                                          className:
                                            "min-w-0 flex-1 rounded-xl border border-dashed border-[#FFE4E8] bg-[#FFFCFC]/90 px-2 py-1.5 text-center transition hover:border-[#FFD6DE] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB7B2]/25",
                                          children: [
                                            e.jsx("div", {
                                              className: `text-[9px] font-bold tracking-[0.2em] text-[#D88998] ${zi}`,
                                              children: "月历墙 · 当前",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "mt-0.5 flex items-baseline justify-center gap-1",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "text-[1.5rem] font-bold tabular-nums leading-none text-[#E87B8A]",
                                                  children: String(
                                                    cs.m,
                                                  ).padStart(2, "0"),
                                                }),
                                                e.jsx("span", {
                                                  className: `text-sm font-bold text-[#6B4E52] ${zi}`,
                                                  children: "月",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: `text-[11px] text-[#8A7570] ${zi}`,
                                              children: [cs.mZh, " ", cs.y],
                                            }),
                                          ],
                                        }),
                                        e.jsx(We.button, {
                                          type: "button",
                                          whileTap: { scale: 0.92 },
                                          onClick: Je,
                                          className:
                                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E8D4DA] bg-[#FFFAFB] text-[#9A6B78] hover:border-[#FFB7B2]/45 hover:bg-[#FFF5F7]",
                                          "aria-label": "下一月",
                                          title: "下一月",
                                          children: e.jsx(Kn, { size: 18 }),
                                        }),
                                      ],
                                    }),
                                    O &&
                                      e.jsx("div", {
                                        className:
                                          "absolute left-1/2 top-full z-30 mt-1.5 -translate-x-1/2 rounded-xl border border-[#F0D0D8] bg-white p-2 shadow-lg",
                                        children: e.jsx("input", {
                                          type: "date",
                                          value: w.toISOString().slice(0, 10),
                                          onChange: (Ge) => {
                                            const Le = new Date(
                                              Ge.target.value,
                                            );
                                            (isNaN(Le.getTime()) || _(Le),
                                              Z(!1));
                                          },
                                          className:
                                            "rounded-lg border border-[#FFB7B2] px-2 py-1.5 text-sm text-[#6B5B55]",
                                        }),
                                      }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex flex-wrap justify-center gap-2 px-1",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 rounded-full border border-[#FFD6DE] bg-white px-2.5 py-1 text-[9px] tabular-nums text-[#6B5B55] shadow-sm",
                                      children: [
                                        e.jsx(Ix, { className: "scale-90" }),
                                        e.jsx("span", {
                                          className:
                                            "font-black text-[#5C403F]",
                                          children: xs,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 rounded-full border border-[#FFE4E8] bg-[#FFF8FA] px-2.5 py-1 text-[9px] tabular-nums text-[#6B5B55]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "h-2 w-2 rounded-full bg-[#FFB7B2] ring-1 ring-white",
                                        }),
                                        e.jsx("span", {
                                          className: "font-bold text-[#C0707D]",
                                          children: "我",
                                        }),
                                        e.jsx("span", {
                                          children: $t.userE.toFixed(0),
                                        }),
                                        e.jsxs("span", {
                                          className: "text-emerald-600/85",
                                          children: ["/", $t.userI.toFixed(0)],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 rounded-full border border-[#FFE4E8] bg-[#FFF8FA] px-2.5 py-1 text-[9px] tabular-nums text-[#6B5B55]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "h-2 w-2 rounded-full ring-1 ring-white",
                                          style: {
                                            background:
                                              "linear-gradient(135deg,#FFC9D4,#FF8FA3)",
                                          },
                                        }),
                                        e.jsx("span", {
                                          className: "font-bold text-[#C0707D]",
                                          children: "TA",
                                        }),
                                        e.jsx("span", {
                                          children: $t.aiE.toFixed(0),
                                        }),
                                        e.jsxs("span", {
                                          className: "text-emerald-600/85",
                                          children: ["/", $t.aiI.toFixed(0)],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          b === "daily"
                            ? e.jsx("div", {
                                className: "space-y-8 pb-20",
                                children:
                                  Jt.length === 0
                                    ? e.jsxs("div", {
                                        className:
                                          "flex flex-col items-center justify-center py-20",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-32 h-32 bg-[#FFF0F5] rounded-full flex items-center justify-center mb-4 animate-bounce",
                                            children: e.jsx(zn, {
                                              size: 40,
                                              className: "text-[#FFB7B2]",
                                            }),
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-[#FFB7B2] font-bold",
                                            children: B
                                              ? "正在根据聊天生成..."
                                              : "还没有记录哦~",
                                          }),
                                        ],
                                      })
                                    : Jt.map((Ge) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className: "relative",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 mb-4",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-2 h-2 rounded-full bg-[#FFB7B2]",
                                                  }),
                                                  e.jsx("span", {
                                                    className: `font-bold text-[#FFB7B2] ${zi}`,
                                                    children: Ge.date,
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "h-px flex-1 bg-[#FFB7B2]/30 border-b border-dashed border-[#FFB7B2]",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "grid grid-cols-2 gap-3",
                                                children: Ge.items.map((Le) =>
                                                  e.jsx(
                                                    "div",
                                                    {
                                                      className: "col-span-1",
                                                      children: e.jsx(CJ, {
                                                        transaction: Le,
                                                        categoryConfig: Fk(
                                                          Le.category,
                                                          y || [],
                                                        ),
                                                        onDelete: Bs,
                                                        onViewDetail: St,
                                                        onToggleProductDesc: (
                                                          _e,
                                                        ) =>
                                                          H((yt) =>
                                                            yt === _e
                                                              ? null
                                                              : _e,
                                                          ),
                                                        expandedProductDescId:
                                                          ee,
                                                        onPreviewImage: (_e) =>
                                                          U(_e),
                                                        partnerName: Pe,
                                                      }),
                                                    },
                                                    Le.id,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          },
                                          Ge.date,
                                        ),
                                      ),
                              })
                            : b === "weekly"
                              ? e.jsxs("div", {
                                  className: "relative pb-20",
                                  children: [
                                    e.jsx(L0, {
                                      color: "#FFB7B2",
                                      pattern: "dot",
                                      width: "64px",
                                      top: "-4px",
                                      left: "12%",
                                      rotate: -3,
                                    }),
                                    e.jsxs("div", {
                                      className: "relative mt-3 pl-1",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "pointer-events-none absolute left-3 top-2 bottom-3 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FFB7B2]/55 via-[#FFDAC1]/35 to-[#FFE8EE]/20",
                                        }),
                                        e.jsx("ul", {
                                          className:
                                            "relative z-[1] space-y-2.5",
                                          children: ot.map((Ge) => {
                                            const Le = Xb(Ge.date, new Date()),
                                              _e = `${Ge.date.getMonth() + 1}/${Ge.date.getDate()} · ${Ge.userVol.toFixed(0)} / ${Ge.aiVol.toFixed(0)}`,
                                              yt = Ge.userN + Ge.aiN > 0;
                                            return e.jsxs(
                                              "li",
                                              {
                                                className: "relative",
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "absolute left-3 top-[1.1rem] z-[2] h-3 w-3 -translate-x-1/2 rounded-full border-[2.5px] border-white bg-[#FFB7B2] shadow-[0_0_0_2px_rgba(255,183,178,0.25)]",
                                                  }),
                                                  e.jsxs(We.button, {
                                                    type: "button",
                                                    title: _e,
                                                    whileTap: { scale: 0.99 },
                                                    onClick: () => Ft(Ge.date),
                                                    className: `ml-6 flex w-[calc(100%-0.125rem)] items-stretch gap-3 rounded-2xl border-2 px-2.5 py-2 text-left transition ${Le ? "border-[#FFB7B2] bg-white shadow-[0_4px_14px_rgba(255,155,162,0.2)]" : "border-[#F5D0D8]/90 bg-[#FFFCFC]/95 hover:border-[#FFB7B2]/45 hover:bg-white"}`,
                                                    children: [
                                                      e.jsxs("div", {
                                                        className:
                                                          "flex w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-[#FFE4E8] bg-gradient-to-b from-white to-[#FFF5F7] py-1 shadow-inner",
                                                        children: [
                                                          e.jsx("span", {
                                                            className: `text-[9px] font-bold leading-none text-[#D88998] ${zi}`,
                                                            children:
                                                              Ge.weekday,
                                                          }),
                                                          e.jsx("span", {
                                                            className:
                                                              "mt-0.5 text-base font-black leading-none tabular-nums text-[#5C403F]",
                                                            children:
                                                              Ge.date.getDate(),
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsxs("div", {
                                                        className:
                                                          "min-w-0 flex-1 space-y-1.5",
                                                        children: [
                                                          e.jsxs("div", {
                                                            className:
                                                              "flex items-center justify-between gap-2",
                                                            children: [
                                                              Ge.resonance
                                                                ? e.jsx(Ix, {
                                                                    className:
                                                                      "scale-[0.88]",
                                                                  })
                                                                : e.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "h-3 w-3",
                                                                    },
                                                                  ),
                                                              e.jsx("span", {
                                                                className:
                                                                  "text-[8px] tabular-nums text-[#D4A5AE]",
                                                                children: yt
                                                                  ? `${Ge.userN}/${Ge.aiN}`
                                                                  : "·",
                                                              }),
                                                            ],
                                                          }),
                                                          e.jsx(Tx, {
                                                            value: Ge.userVol,
                                                            max: wt,
                                                            color: im.meBar,
                                                            slim: !0,
                                                          }),
                                                          e.jsx(Tx, {
                                                            value: Ge.aiVol,
                                                            max: wt,
                                                            color: im.taBar,
                                                            slim: !0,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              Ge.key,
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : e.jsx("div", {
                                  className: "pb-20",
                                  children: e.jsxs("div", {
                                    className: "flex min-h-0 gap-0",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "relative flex w-3 shrink-0 flex-col items-center rounded-l-2xl border-2 border-r-0 border-[#FFD6DE] bg-gradient-to-b from-[#FFEEF2] via-[#FFF5F8] to-[#FFFAFB] py-3 shadow-inner",
                                        "aria-hidden": !0,
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "h-full w-1 rounded-full bg-gradient-to-b from-[#FFB7B2]/55 via-[#FFB7B2]/35 to-[#FFDAC1]/25",
                                          }),
                                          e.jsx(zn, {
                                            className:
                                              "mt-2 h-3 w-3 rotate-6 text-[#FFB7B2]/50",
                                            fill: "currentColor",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "min-w-0 flex-1 rounded-r-2xl border-2 border-l-0 border-[#FFD6DE] bg-white/95 py-2 pl-1.5 pr-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "mb-1.5 flex items-end justify-between border-b-2 border-dashed border-[#FFE4E8] px-1 pb-1.5",
                                            children: [
                                              e.jsx("span", {
                                                className: `text-[9px] font-bold tracking-[0.2em] text-[#D88998] ${zi}`,
                                                children: "月历墙",
                                              }),
                                              e.jsx(Gi, {
                                                className:
                                                  "h-3.5 w-3.5 text-[#FFDAC1]",
                                                strokeWidth: 1.8,
                                                fill: "#FFF5F0",
                                              }),
                                            ],
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "grid grid-cols-7 gap-px bg-[#FFE8EE]/80 px-0.5",
                                            children: [
                                              "一",
                                              "二",
                                              "三",
                                              "四",
                                              "五",
                                              "六",
                                              "日",
                                            ].map((Ge) =>
                                              e.jsx(
                                                "div",
                                                {
                                                  className:
                                                    "bg-[#FFF8FA] py-1 text-center text-[8px] font-bold text-[#C0707D]",
                                                  children: Ge,
                                                },
                                                Ge,
                                              ),
                                            ),
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "mt-px grid grid-cols-7 gap-px bg-[#FFE8EE]/60 p-px",
                                            children: st.map((Ge) => {
                                              if (Ge.type === "pad")
                                                return e.jsx(
                                                  "div",
                                                  {
                                                    className:
                                                      "min-h-[3.6rem] bg-[#FFFBFC]/80",
                                                    "aria-hidden": !0,
                                                  },
                                                  Ge.key,
                                                );
                                              const Le = Xb(
                                                  Ge.date,
                                                  new Date(),
                                                ),
                                                _e = `${Ge.date.toLocaleDateString("zh-CN")} · ${Ge.userVol.toFixed(0)} / ${Ge.aiVol.toFixed(0)}`,
                                                yt = Ge.userN + Ge.aiN > 0;
                                              return e.jsxs(
                                                We.button,
                                                {
                                                  type: "button",
                                                  title: _e,
                                                  whileTap: { scale: 0.97 },
                                                  onClick: () => Ft(Ge.date),
                                                  className: `flex min-h-[3.6rem] flex-col bg-white px-1 py-1 text-left transition ${Le ? "ring-2 ring-inset ring-[#FFB7B2] ring-offset-0" : yt ? "bg-[#FFFCFD]" : "hover:bg-[#FFF8FA]"}`,
                                                  children: [
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex items-start justify-between gap-0.5",
                                                      children: [
                                                        e.jsx("span", {
                                                          className:
                                                            "text-[11px] font-black tabular-nums text-[#4A3F3C]",
                                                          children: Ge.dayNum,
                                                        }),
                                                        Ge.resonance &&
                                                          e.jsx(Ix, {
                                                            className:
                                                              "scale-[0.65] opacity-95",
                                                          }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "mb-0.5 mt-0.5 flex gap-0.5",
                                                      children: [
                                                        e.jsx("span", {
                                                          className: `h-1 w-1 rounded-full ${Ge.userN > 0 ? "bg-[#FFB7B2]" : "bg-[#F0E4E8]/55"}`,
                                                        }),
                                                        e.jsx("span", {
                                                          className: `h-1 w-1 rounded-full ${Ge.aiN > 0 ? "" : "bg-[#F0E4E8]/55"}`,
                                                          style:
                                                            Ge.aiN > 0
                                                              ? {
                                                                  background:
                                                                    "linear-gradient(135deg,#FFB5C5,#FF8FA3)",
                                                                }
                                                              : void 0,
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "mt-auto flex flex-col gap-px",
                                                      children: [
                                                        e.jsx(Tx, {
                                                          value: Ge.userVol,
                                                          max: wt,
                                                          color: im.meBar,
                                                          slim: !0,
                                                        }),
                                                        e.jsx(Tx, {
                                                          value: Ge.aiVol,
                                                          max: wt,
                                                          color: im.taBar,
                                                          slim: !0,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                Ge.key,
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
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
        e.jsx(Os, {
          children:
            A &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 bg-[#6B5B55]/20 backdrop-blur-sm z-50 flex items-center justify-center p-6",
              onClick: () => k(!1),
              children: e.jsxs(We.div, {
                initial: { scale: 0.5, rotate: -10 },
                animate: { scale: 1, rotate: 0 },
                exit: { scale: 0.5, rotate: 10 },
                transition: { type: "spring", bounce: 0.6 },
                className: "bg-white w-full max-w-xs shadow-2xl relative",
                style: {
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 98%, 95% 100%, 90% 98%, 85% 100%, 80% 98%, 75% 100%, 70% 98%, 65% 100%, 60% 98%, 55% 100%, 50% 98%, 45% 100%, 40% 98%, 35% 100%, 30% 98%, 25% 100%, 20% 98%, 15% 100%, 10% 98%, 5% 100%, 0 98%)",
                },
                onClick: (Ge) => Ge.stopPropagation(),
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#FFB7B2]/80 transform rotate-1 shadow-sm backdrop-blur-sm z-20",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 pointer-events-none opacity-10",
                    style: {
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 23px, #000 24px)",
                    },
                  }),
                  e.jsxs("div", {
                    className: "p-6 pt-8 relative z-10",
                    children: [
                      e.jsx("h3", {
                        className: `text-lg font-bold ${gi.ink} mb-4 text-center ${zi}`,
                        children: "记一笔",
                      }),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: () => ft("expense"),
                                className: `flex-1 py-1.5 rounded-lg text-sm font-medium border-2 ${at === "expense" ? "bg-[#FFEBEE] border-[#FF9AA2] text-[#C62828]" : "border-gray-200 text-gray-500"}`,
                                children: "支出",
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => ft("income"),
                                className: `flex-1 py-1.5 rounded-lg text-sm font-medium border-2 ${at === "income" ? "bg-emerald-50 border-emerald-400 text-emerald-700" : "border-gray-200 text-gray-500"}`,
                                children: "收入",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-baseline justify-center gap-1 border-b-2 border-dashed border-[#FFB7B2] pb-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-xl font-bold text-[#FFB7B2] shrink-0",
                                children: "¥",
                              }),
                              e.jsx("input", {
                                type: "number",
                                step: "0.01",
                                min: "0",
                                value: Re,
                                onChange: (Ge) => De(Ge.target.value),
                                className:
                                  "flex-1 min-w-0 w-24 max-w-32 text-2xl font-bold text-[#6B5B55] outline-none bg-transparent text-center",
                                placeholder: "0",
                                autoFocus: !0,
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "flex flex-wrap gap-1.5 justify-center",
                            children: [10, 20, 50, 100, 200].map((Ge) =>
                              e.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () =>
                                    De((Le) => (parseFloat(Le) || 0) + Ge + ""),
                                  className:
                                    "px-2.5 py-1 rounded-full text-xs font-medium bg-[#FFF0F5] text-[#FF9AA2] border border-[#FFB7B2]/50",
                                  children: ["+", Ge],
                                },
                                Ge,
                              ),
                            ),
                          }),
                          e.jsx("div", {
                            className: "flex gap-1.5",
                            children: [
                              { v: "user", l: "我付" },
                              { v: "ai", l: "TA付" },
                              { v: "both", l: "一起" },
                            ].map(({ v: Ge, l: Le }) =>
                              e.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => Oe(Ge),
                                  className: `flex-1 py-1.5 rounded-lg text-xs font-medium border-2 ${vt === Ge ? "border-[#FFB7B2] bg-[#FFF0F5] text-[#6B5B55]" : "border-gray-200 text-gray-400"}`,
                                  children: Le,
                                },
                                Ge,
                              ),
                            ),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", {
                                className: "text-[10px] text-gray-400 mb-1",
                                children: "分类",
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-5 gap-1.5",
                                children: [
                                  Object.entries(dd).map(([Ge, Le]) => {
                                    const _e = Le.icon;
                                    return e.jsx(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => Ye(Ge),
                                        className: `aspect-square rounded-full flex items-center justify-center transition-all border-2 shrink-0 ${Qe === Ge ? "ring-2 ring-[#FFB7B2]/40" : ""}`,
                                        style: {
                                          borderColor:
                                            Qe === Ge
                                              ? Le.color
                                              : "transparent",
                                          backgroundColor:
                                            Qe === Ge ? Le.bg : "#F9FAFB",
                                        },
                                        children: e.jsx(_e, {
                                          size: 18,
                                          style: { color: Le.color },
                                        }),
                                      },
                                      Ge,
                                    );
                                  }),
                                  (y || []).map((Ge) =>
                                    e.jsx(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => Ye(Ge.id),
                                        className: `aspect-square rounded-full flex items-center justify-center transition-all border-2 shrink-0 text-lg ${Qe === Ge.id ? "ring-2 ring-[#FFB7B2]/40" : ""}`,
                                        style: {
                                          borderColor:
                                            Qe === Ge.id
                                              ? Ge.color || "#999"
                                              : "transparent",
                                          backgroundColor:
                                            Qe === Ge.id
                                              ? `${Ge.color || "#999"}20`
                                              : "#F9FAFB",
                                        },
                                        title: Ge.name,
                                        children: Ge.icon || "📌",
                                      },
                                      Ge.id,
                                    ),
                                  ),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => ct(!0),
                                className:
                                  "mt-1 text-[10px] text-[#FF9AA2] hover:underline",
                                children: "+ 自定义分类",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                className: "hidden",
                                id: "ledger-add-image",
                                onChange: (Ge) => {
                                  var _e;
                                  const Le =
                                    (_e = Ge.target.files) == null
                                      ? void 0
                                      : _e[0];
                                  if (Le) {
                                    jt(Le);
                                    const yt = new FileReader();
                                    ((yt.onload = () => Pt(yt.result)),
                                      yt.readAsDataURL(Le));
                                  }
                                  Ge.target.value = "";
                                },
                              }),
                              e.jsxs("label", {
                                htmlFor: "ledger-add-image",
                                className:
                                  "flex items-center gap-2 p-2 rounded-lg border border-dashed border-[#FFB7B2] text-[#6B5B55] text-xs cursor-pointer hover:bg-[#FFF0F5]",
                                children: [
                                  e.jsx(Eh, { size: 16 }),
                                  Gt
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("img", {
                                            src: Gt,
                                            alt: "",
                                            className:
                                              "w-10 h-10 object-cover rounded",
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: (Ge) => {
                                              (Ge.preventDefault(),
                                                jt(null),
                                                Pt(""));
                                            },
                                            className: "text-[#FF9AA2]",
                                            children: "移除",
                                          }),
                                        ],
                                      })
                                    : "添加照片（选填）",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: Ze,
                            onChange: (Ge) => Ue(Ge.target.value),
                            maxLength: 30,
                            className:
                              "w-full bg-[#F9FAFB] rounded-lg px-4 py-2.5 outline-none text-sm text-[#6B5B55] placeholder-gray-400 border border-gray-200 focus:border-[#FFB7B2]",
                            placeholder: "备注（选填）",
                          }),
                          e.jsxs("button", {
                            onClick: qs,
                            className:
                              "w-full py-2.5 bg-[#FFB7B2] text-white rounded-lg text-sm font-bold shadow-md transform active:scale-95 flex items-center justify-center gap-2 hover:bg-[#FF8A94] transition-colors",
                            children: [
                              e.jsx(Xn, { size: 14, className: "shrink-0" }),
                              "完成",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            se &&
            s &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 z-[55] flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#3d3530]/25 via-[#6B5B55]/20 to-[#FFB7B2]/10 backdrop-blur-[3px]",
              onClick: () => Te(!1),
              children: e.jsxs(We.div, {
                initial: { scale: 0.92, opacity: 0, y: 16 },
                animate: { scale: 1, opacity: 1, y: 0 },
                exit: { scale: 0.92, opacity: 0, y: 16 },
                transition: { type: "spring", stiffness: 420, damping: 28 },
                className:
                  "relative w-full max-w-[340px] rounded-[26px] border-2 border-white/95 shadow-[0_28px_60px_-12px_rgba(126,200,184,0.42),0_12px_28px_-8px_rgba(255,155,162,0.22)] overflow-hidden",
                onClick: (Ge) => Ge.stopPropagation(),
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-[#FFFCF9] via-[#F4FFFA] to-[#FFF5F8] pointer-events-none",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -top-24 -right-20 w-48 h-48 rounded-full bg-[#B8E5D9]/45 blur-3xl pointer-events-none",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -bottom-20 -left-16 w-44 h-44 rounded-full bg-[#FFD6DC]/40 blur-3xl pointer-events-none",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 opacity-[0.07] pointer-events-none",
                    style: {
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 22px, #6B5B55 23px)",
                    },
                    "aria-hidden": !0,
                  }),
                  e.jsxs("div", {
                    className: "relative z-10 px-5 pt-5 pb-5",
                    children: [
                      e.jsx("div", {
                        className: "flex justify-center mb-3",
                        children: e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 rounded-2xl bg-[#7EC8B8]/35 blur-lg scale-110",
                              "aria-hidden": !0,
                            }),
                            e.jsx("div", {
                              className:
                                "relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl border-[3px] border-white bg-gradient-to-br from-[#8FD4C5] to-[#4FB8A5] shadow-[0_10px_28px_rgba(79,184,165,0.4)] -rotate-[5deg]",
                              children: e.jsx(Hy, {
                                className: "text-white h-9 w-9",
                                strokeWidth: 1.5,
                              }),
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "flex justify-center gap-1.5 mb-1",
                        "aria-hidden": !0,
                        children: Array.from({ length: 14 }).map((Ge, Le) =>
                          e.jsx(
                            "span",
                            {
                              className: "h-1 w-1 rounded-full bg-[#D7CCC8]/70",
                            },
                            Le,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "flex items-start justify-center gap-2 mb-2",
                        children: [
                          e.jsxs("div", {
                            className: "text-center flex-1 min-w-0",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[9px] font-bold tracking-[0.2em] text-[#A38D82]/90 uppercase mb-0.5",
                                children: "Duet Check-in",
                              }),
                              e.jsx("h3", {
                                className: `text-xl font-extrabold tracking-tight ${gi.ink} ${zi}`,
                                children: "一起记账打卡",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            "aria-expanded": ve,
                            "aria-label": ve ? "收起说明" : "查看说明",
                            onClick: () => Ve((Ge) => !Ge),
                            className: `mt-0.5 shrink-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${ve ? "border-[#7EC8B8] bg-[#E8F6F3] text-[#2A8F7A]" : "border-[#FFE4E1] bg-white/90 text-[#C4A69A] hover:border-[#7EC8B8]/60 hover:text-[#7EC8B8]"}`,
                            children: e.jsx(xl, { size: 18, strokeWidth: 2 }),
                          }),
                        ],
                      }),
                      e.jsx(Os, {
                        initial: !1,
                        children: ve
                          ? e.jsx(
                              We.div,
                              {
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: { duration: 0.22 },
                                className: "overflow-hidden mb-3",
                                children: e.jsx("div", {
                                  className:
                                    "rounded-2xl border border-[#E0F2EE] bg-white/80 px-3.5 py-2.5 text-[10px] leading-relaxed text-[#6B5B55] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
                                  children: fe
                                    ? e.jsxs("ul", {
                                        className:
                                          "list-disc space-y-1 pl-3.5 marker:text-[#7EC8B8]",
                                        children: [
                                          e.jsxs("li", {
                                            children: [
                                              "打卡已生效，可在下方直接",
                                              e.jsx("strong", {
                                                children: "修改天数与时间",
                                              }),
                                              "，保存后仅更新本机，不会发聊天邀请。",
                                            ],
                                          }),
                                          e.jsxs("li", {
                                            children: [
                                              "「AI 自动记账」在",
                                              e.jsx("strong", {
                                                children: "每天该时刻",
                                              }),
                                              "根据",
                                              e.jsx("strong", {
                                                children: "当天与 TA 的聊天",
                                              }),
                                              "调用 API 生成 TA 账本；「提醒打卡」在",
                                              e.jsx("strong", {
                                                children: "提醒时间",
                                              }),
                                              "调用一次 API，并把一句提醒作为 TA 的消息写入聊天。",
                                            ],
                                          }),
                                          e.jsxs("li", {
                                            children: [
                                              "调度在",
                                              e.jsx("strong", {
                                                children:
                                                  "本应用（聊天上下文）已加载",
                                              }),
                                              "时运行，不必打开情侣空间或记账页；关闭整个应用后该分钟不会触发。",
                                            ],
                                          }),
                                          e.jsx("li", {
                                            children:
                                              "若当天暂无聊天、已有人工生成过 TA 账本、或 API 失败，会自动记录状态且当日不再重试。",
                                          }),
                                          e.jsxs("li", {
                                            children: [
                                              e.jsx("strong", {
                                                children: "只有",
                                              }),
                                              "点「取消当前打卡任务」清空配置后，再新建打卡并勾选发送，才会再次向聊天插入邀请卡片。",
                                            ],
                                          }),
                                          e.jsx("li", {
                                            children:
                                              "取消任务仅影响本机数据，不会自动向 TA 发消息。",
                                          }),
                                        ],
                                      })
                                    : e.jsxs("ul", {
                                        className:
                                          "list-disc space-y-1 pl-3.5 marker:text-[#7EC8B8]",
                                        children: [
                                          e.jsx("li", {
                                            children:
                                              "填写坚持天数与两个时间（24 小时制，如 11:00、20:30）。",
                                          }),
                                          e.jsx("li", {
                                            children:
                                              "「AI 记账」时间为接受打卡后，每天自动根据聊天生成 TA 账本的触发时刻（与聊天同一套 API、人设注入）。",
                                          }),
                                          e.jsxs("li", {
                                            children: [
                                              e.jsx("strong", {
                                                children: "邀请卡片",
                                              }),
                                              "仅在你",
                                              e.jsx("strong", {
                                                children: "第一次保存",
                                              }),
                                              "且下方出现勾选框并勾选时发送；pending / 已接受后再改保存",
                                              e.jsx("strong", {
                                                children: "不会",
                                              }),
                                              "重复发卡片或触发邀请类 AI 回复。",
                                            ],
                                          }),
                                          e.jsx("li", {
                                            children:
                                              "TA 的回复里需包含系统识别的接受/拒绝指令（由模型按提示输出，无需你手打）。",
                                          }),
                                          e.jsx("li", {
                                            children:
                                              "若需重新发邀请，请先「取消当前打卡任务」清空配置，再重新保存并勾选发送。",
                                          }),
                                        ],
                                      }),
                                }),
                              },
                              "help",
                            )
                          : null,
                      }),
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          fe
                            ? e.jsx("div", {
                                className: "flex justify-center",
                                children: e.jsxs("span", {
                                  className:
                                    "inline-flex items-center gap-1.5 rounded-full border border-[#B8E5D9]/80 bg-gradient-to-r from-[#E8F8F4] to-[#F0FFFC] px-4 py-1.5 text-xs font-bold text-[#2A7D6C] shadow-sm",
                                  children: [
                                    e.jsxs("span", {
                                      className: "relative flex h-2 w-2",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7EC8B8] opacity-60",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "relative inline-flex h-2 w-2 rounded-full bg-[#7EC8B8]",
                                        }),
                                      ],
                                    }),
                                    "进行中",
                                  ],
                                }),
                              })
                            : null,
                          He
                            ? e.jsxs("p", {
                                className:
                                  "rounded-xl border border-amber-100/90 bg-amber-50/90 px-3 py-2 text-center text-[10px] leading-relaxed text-[#6D4C41]",
                                children: [
                                  "邀请已发到聊天，等待 TA 回复。你可修改下方约定后保存，",
                                  e.jsx("strong", { children: "不会" }),
                                  "再次发送邀请卡片。",
                                ],
                              })
                            : null,
                          Ie
                            ? e.jsx("p", {
                                className:
                                  "rounded-xl border border-rose-100/90 bg-rose-50/90 px-3 py-2 text-center text-[10px] leading-relaxed text-[#B71C1C]",
                                children:
                                  "本次邀请已被拒绝。请先点「取消当前打卡任务」清空配置后，再重新发起并勾选发送邀请。",
                              })
                            : null,
                          e.jsxs("div", {
                            className:
                              "rounded-[20px] border border-[#E8F5F2]/90 bg-white/70 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm space-y-3",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-bold uppercase tracking-wider text-[#7EC8B8]",
                                children: "约定",
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsxs("label", {
                                    className:
                                      "mb-1 flex items-center gap-1.5 text-[11px] font-bold text-[#6B5B55]",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "h-1.5 w-1.5 rounded-full bg-[#FF9AA2]",
                                      }),
                                      "坚持天数",
                                    ],
                                  }),
                                  e.jsx("input", {
                                    type: "number",
                                    min: 1,
                                    value: ke,
                                    onChange: (Ge) => W(Ge.target.value),
                                    className:
                                      "w-full rounded-xl border-2 border-[#F0F0F0] bg-[#FFFCF9] px-3 py-2.5 text-sm font-semibold text-[#6B5B55] outline-none transition-colors focus:border-[#7EC8B8]/70",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("label", {
                                        className:
                                          "mb-1 flex items-center gap-1.5 text-[11px] font-bold text-[#6B5B55]",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "h-1.5 w-1.5 rounded-full bg-[#7EC8B8]",
                                          }),
                                          "AI 记账",
                                        ],
                                      }),
                                      e.jsx("input", {
                                        type: "text",
                                        value: ue,
                                        onChange: (Ge) => re(Ge.target.value),
                                        placeholder: "11:00",
                                        className:
                                          "w-full rounded-xl border-2 border-[#F0F0F0] bg-[#FFFCF9] px-2.5 py-2 text-center font-mono text-sm text-[#6B5B55] outline-none focus:border-[#7EC8B8]/70",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("label", {
                                        className:
                                          "mb-1 flex items-center gap-1.5 text-[11px] font-bold text-[#6B5B55]",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "h-1.5 w-1.5 rounded-full bg-[#FFDAC1]",
                                          }),
                                          "提醒",
                                        ],
                                      }),
                                      e.jsx("input", {
                                        type: "text",
                                        value: he,
                                        onChange: (Ge) => ge(Ge.target.value),
                                        placeholder: "20:30",
                                        className:
                                          "w-full rounded-xl border-2 border-[#F0F0F0] bg-[#FFFCF9] px-2.5 py-2 text-center font-mono text-sm text-[#6B5B55] outline-none focus:border-[#7EC8B8]/70",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          fe
                            ? e.jsxs("p", {
                                className:
                                  "rounded-xl border border-[#C8E6D8]/80 bg-[#F0FBF7]/90 px-3 py-2 text-center text-[10px] leading-relaxed text-[#2A6B5C]",
                                children: [
                                  "保存调整仅写入本机，",
                                  e.jsx("strong", { children: "不会" }),
                                  "向聊天发邀请卡片，也",
                                  e.jsx("strong", { children: "不会" }),
                                  "触发 TA 自动回复。",
                                ],
                              })
                            : null,
                          Ce
                            ? e.jsxs("label", {
                                className:
                                  "flex cursor-pointer items-start gap-2.5 rounded-2xl border border-dashed border-[#D4ECE7] bg-[#FAFFFE]/90 px-3 py-2.5 transition-colors hover:border-[#7EC8B8]/50",
                                children: [
                                  e.jsx("input", {
                                    type: "checkbox",
                                    className:
                                      "mt-0.5 rounded border-[#7EC8B8] text-[#7EC8B8] focus:ring-[#7EC8B8]",
                                    checked: we,
                                    onChange: (Ge) => Q(Ge.target.checked),
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-[11px] font-medium leading-snug text-[#6B5B55]",
                                    children: [
                                      "保存时向聊天发送邀请卡片（仅本轮新建打卡有效）",
                                      e.jsx("span", {
                                        className:
                                          "mt-0.5 block text-[10px] font-normal text-[#A38D82]",
                                        children:
                                          "已有 pending/进行中记录后不再出现此项；要重发请先取消任务。详情点右上角 ?",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : null,
                          e.jsxs("div", {
                            className: "flex gap-2.5 pt-0.5",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: () => Te(!1),
                                className:
                                  "flex-1 rounded-2xl border-2 border-[#ECEFF1] bg-white/90 py-2.5 text-sm font-semibold text-[#6B5B55] hover:bg-[#FAFAFA]",
                                children: fe ? "关闭" : "取消",
                              }),
                              e.jsx("button", {
                                type: "button",
                                disabled: J,
                                onClick: bs,
                                className:
                                  "flex-[1.15] rounded-2xl py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(126,200,184,0.45)] bg-gradient-to-r from-[#8FD4C5] to-[#5EBEAA] hover:from-[#7EC8B8] hover:to-[#4FB8A5] disabled:opacity-60 active:scale-[0.98] transition-transform",
                                children: J
                                  ? "保存中…"
                                  : fe
                                    ? "保存调整"
                                    : "保存约定",
                              }),
                            ],
                          }),
                          ce
                            ? e.jsx("button", {
                                type: "button",
                                disabled: J,
                                onClick: _s,
                                className:
                                  "w-full rounded-2xl py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(229,115,115,0.45)] bg-gradient-to-r from-[#EF9A9A] to-[#E57373] hover:from-[#E57373] hover:to-[#EF5350] disabled:opacity-60 active:scale-[0.98] transition-transform",
                                children: J ? "处理中…" : "取消当前打卡任务",
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            Se &&
            s &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 z-[56] flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#3d3530]/22 via-[#6B5B55]/18 to-[#FFB7B2]/14 backdrop-blur-[3px]",
              onClick: () => Fe(!1),
              children: e.jsxs(We.div, {
                initial: { scale: 0.92, opacity: 0, y: 16 },
                animate: { scale: 1, opacity: 1, y: 0 },
                exit: { scale: 0.92, opacity: 0, y: 16 },
                transition: { type: "spring", stiffness: 420, damping: 28 },
                className:
                  "relative w-full max-w-[340px] rounded-[26px] border-2 border-white/95 shadow-[0_28px_60px_-12px_rgba(255,154,162,0.38),0_12px_28px_-8px_rgba(255,183,178,0.28)] overflow-hidden",
                onClick: (Ge) => Ge.stopPropagation(),
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-[#FFFCF9] via-[#FFF8F5] to-[#FFF5F8] pointer-events-none",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -top-24 -right-16 w-52 h-52 rounded-full bg-[#FFD6DC]/55 blur-3xl pointer-events-none",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -bottom-20 -left-12 w-48 h-48 rounded-full bg-[#FFDAC1]/40 blur-3xl pointer-events-none",
                    "aria-hidden": !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 opacity-[0.06] pointer-events-none",
                    style: {
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 22px, #C26B77 23px)",
                    },
                    "aria-hidden": !0,
                  }),
                  e.jsx(L0, {
                    color: "#FFD6DC",
                    pattern: "dot",
                    rotate: -3,
                    width: "88px",
                    top: "-6px",
                    left: "12%",
                  }),
                  e.jsx(L0, {
                    color: "#FFDAC1",
                    pattern: "stripe",
                    rotate: 4,
                    width: "72px",
                    top: "8px",
                    right: "10%",
                  }),
                  e.jsxs("div", {
                    className: "relative z-10 px-5 pt-7 pb-5",
                    children: [
                      e.jsx("div", {
                        className: "flex justify-center mb-3",
                        children: e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 rounded-2xl bg-[#FF9AA2]/45 blur-lg scale-110",
                              "aria-hidden": !0,
                            }),
                            e.jsxs("div", {
                              className:
                                "relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-2xl border-[3px] border-white bg-gradient-to-br from-[#FFB7B2] via-[#FF9AA2] to-[#FF758C] shadow-[0_12px_32px_rgba(255,117,140,0.38)] rotate-[4deg]",
                              children: [
                                e.jsx(Ar, {
                                  className: "text-white h-9 w-9",
                                  strokeWidth: 1.5,
                                }),
                                e.jsx(Xn, {
                                  className:
                                    "absolute -right-1 -top-1 h-4 w-4 text-[#FDE68A] drop-shadow-sm",
                                  strokeWidth: 2,
                                  "aria-hidden": !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "flex justify-center gap-1.5 mb-1",
                        "aria-hidden": !0,
                        children: Array.from({ length: 14 }).map((Ge, Le) =>
                          e.jsx(
                            "span",
                            {
                              className: "h-1 w-1 rounded-full",
                              style: {
                                background:
                                  Le % 3 === 0
                                    ? "rgba(255,154,162,0.9)"
                                    : Le % 3 === 1
                                      ? "rgba(255,218,193,0.95)"
                                      : "rgba(215,204,200,0.75)",
                              },
                            },
                            Le,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "flex items-start justify-center gap-2 mb-2",
                        children: [
                          e.jsxs("div", {
                            className: "text-center flex-1 min-w-0",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[9px] font-bold tracking-[0.22em] text-[#C26B77]/90 uppercase mb-0.5",
                                children: "Chat Ledger",
                              }),
                              e.jsx("h3", {
                                className: `text-xl font-extrabold tracking-tight ${gi.ink} ${zi}`,
                                children: "聊天里帮忙记账",
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[10px] text-[#8C7A6D] mt-1 leading-relaxed px-1",
                                children: [
                                  "在与 TA 的私聊里发送",
                                  e.jsx("strong", {
                                    className: "text-[#E85D75]",
                                    children: "约定口令 + 金额描述",
                                  }),
                                  "，会弹出确认面板；编辑后点「确认」才写入情侣手账。",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            "aria-expanded": $e,
                            "aria-label": $e ? "收起说明" : "查看口令与示例",
                            onClick: () => tt((Ge) => !Ge),
                            className: `mt-0.5 shrink-0 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${$e ? "border-[#FF9AA2] bg-[#FFF0F5] text-[#C26B77]" : "border-[#FFE4E1] bg-white/90 text-[#C4A69A] hover:border-[#FFB7B2]/70 hover:text-[#C26B77]"}`,
                            children: e.jsx(xl, { size: 18, strokeWidth: 2 }),
                          }),
                        ],
                      }),
                      e.jsx(Os, {
                        initial: !1,
                        children: $e
                          ? e.jsx(
                              We.div,
                              {
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: { duration: 0.22 },
                                className: "overflow-hidden mb-3",
                                children: e.jsxs("div", {
                                  className:
                                    "rounded-2xl border border-[#F3D7D9] bg-white/85 px-3.5 py-2.5 text-[10px] leading-relaxed text-[#6B5B55] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] space-y-2",
                                  children: [
                                    e.jsxs("p", {
                                      children: [
                                        "消息需以以下",
                                        e.jsx("strong", {
                                          children: "任一前缀",
                                        }),
                                        "开头（复制时注意全角括号）：",
                                      ],
                                    }),
                                    e.jsx("ul", {
                                      className:
                                        "list-disc pl-3.5 marker:text-[#FF9AA2] space-y-0.5",
                                      children: DA.map((Ge) =>
                                        e.jsx(
                                          "li",
                                          {
                                            children: e.jsx("code", {
                                              className:
                                                "rounded bg-[#FFF0F5] px-1 py-0.5 text-[#C26B77] font-semibold",
                                              children: Ge,
                                            }),
                                          },
                                          Ge,
                                        ),
                                      ),
                                    }),
                                    e.jsx("p", {
                                      className: "text-[#8C7A6D]",
                                      children:
                                        "前缀后面接平常说法即可，例如「支出 ¥36 奶茶」「收入 2000 工资」。",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "rounded-xl border border-dashed border-[#FFB7B2]/60 bg-[#FFFCF9] p-2 font-mono text-[9px] text-[#C26B77] leading-snug",
                                      children: [
                                        "【手账】记一笔 支出 ¥36 奶茶",
                                        e.jsx("br", {}),
                                        "#手账# 买咖啡¥28",
                                        e.jsx("br", {}),
                                        "＃手账＃ 收入 5000 奖金",
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              "chat-assist-help",
                            )
                          : null,
                      }),
                      e.jsxs("div", {
                        className:
                          "rounded-[20px] border border-[#F3D7D9]/95 bg-white/75 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm space-y-3",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-3",
                            children: [
                              e.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  e.jsxs("p", {
                                    className:
                                      "text-[11px] font-bold text-[#6B5B55] flex items-center gap-1.5",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "h-1.5 w-1.5 rounded-full bg-[#FF9AA2]",
                                      }),
                                      "在聊天 App 中启用",
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] text-[#A38D82] mt-0.5 leading-relaxed",
                                    children:
                                      "关闭后，聊天里即使用口令也不会识别、不弹窗，当作普通消息。",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                role: "switch",
                                "aria-checked": Ee,
                                onClick: () =>
                                  f(s.id, { ledgerChatAssistEnabled: !Ee }),
                                className: `relative h-8 w-[3.25rem] shrink-0 rounded-full border-2 transition-all duration-300 ${Ee ? "border-[#FFB7B2] bg-gradient-to-r from-[#FFD6DC] to-[#FF9AA2] shadow-[0_6px_16px_rgba(255,117,140,0.35)]" : "border-[#E8DDD8] bg-[#F5F0EB]"}`,
                                children: e.jsx("span", {
                                  className: `absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow-md border border-white/80 transition-transform duration-300 flex items-center justify-center ${Ee ? "translate-x-[1.35rem]" : "translate-x-0"}`,
                                  children: e.jsx("span", {
                                    className: `block h-2 w-2 rounded-full ${Ee ? "bg-[#FF5C7A]" : "bg-[#D7CCC8]"}`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Ee
                            ? e.jsx("div", {
                                className: "flex justify-center",
                                children: e.jsxs("span", {
                                  className:
                                    "inline-flex items-center gap-1.5 rounded-full border border-[#FFD6DC]/90 bg-gradient-to-r from-[#FFF5F7] to-[#FFF0F5] px-3.5 py-1.5 text-[10px] font-bold text-[#C26B77] shadow-sm",
                                  children: [
                                    e.jsxs("span", {
                                      className: "relative flex h-2 w-2",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF9AA2] opacity-55",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "relative inline-flex h-2 w-2 rounded-full bg-[#FF758C]",
                                        }),
                                      ],
                                    }),
                                    "已开启 · 带口令的消息将弹出记账确认",
                                  ],
                                }),
                              })
                            : e.jsx("p", {
                                className:
                                  "text-center text-[10px] text-[#A38D82]",
                                children: "关闭时聊天内不会写入情侣手账。",
                              }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => Fe(!1),
                        className:
                          "mt-4 w-full rounded-2xl border-2 border-[#F3D7D9] bg-white/90 py-2.5 text-sm font-semibold text-[#6B5B55] hover:bg-[#FFF5F7] transition-colors",
                        children: "完成",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            Wt &&
            e.jsx(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 bg-[#6B5B55]/40 backdrop-blur-sm z-[60] flex items-center justify-center p-6",
              onClick: () => ct(!1),
              children: e.jsxs(We.div, {
                initial: { scale: 0.9 },
                animate: { scale: 1 },
                exit: { scale: 0.9 },
                className:
                  "bg-white w-full max-w-xs rounded-2xl shadow-xl border-2 border-[#FFEBEE] p-4",
                onClick: (Ge) => Ge.stopPropagation(),
                children: [
                  e.jsx("h4", {
                    className: `text-sm font-bold ${gi.ink} mb-3`,
                    children: "自定义分类",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2 mb-2",
                    children: [
                      e.jsx("input", {
                        type: "text",
                        value: Kt,
                        onChange: (Ge) => fs(Ge.target.value),
                        placeholder: "名称",
                        className:
                          "flex-1 px-2 py-1.5 text-sm rounded-lg border border-[#FFEBEE]",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: gt,
                        onChange: (Ge) =>
                          ae(Ge.target.value.slice(0, 2) || "📌"),
                        placeholder: "图标",
                        className:
                          "w-12 text-center text-lg rounded-lg border border-[#FFEBEE]",
                      }),
                      e.jsx("input", {
                        type: "color",
                        value: nt,
                        onChange: (Ge) => It(Ge.target.value),
                        className:
                          "w-10 h-9 rounded border border-gray-200 cursor-pointer",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      const Ge = Kt.trim();
                      if (!Ge) return;
                      const Le = `custom_${Date.now()}`;
                      (v((_e) => [
                        ...(_e || []),
                        { id: Le, name: Ge, icon: gt || "📌", color: nt },
                      ]),
                        fs(""),
                        ae("📌"),
                        It("#FF9AA2"));
                    },
                    className:
                      "w-full py-1.5 rounded-lg text-sm font-medium bg-[#FFB7B2] text-white mb-3",
                    children: "添加",
                  }),
                  e.jsx("div", {
                    className: "max-h-32 overflow-y-auto space-y-1",
                    children: (y || []).map((Ge) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between py-1 border-b border-gray-100",
                          children: [
                            e.jsxs("span", {
                              className: "text-sm",
                              children: [Ge.icon, " ", Ge.name],
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () =>
                                v((Le) =>
                                  (Le || []).filter((_e) => _e.id !== Ge.id),
                                ),
                              className: "text-[#FF9AA2] text-xs",
                              children: "删除",
                            }),
                          ],
                        },
                        Ge.id,
                      ),
                    ),
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => ct(!1),
                    className:
                      "mt-3 w-full py-1.5 rounded-lg text-sm border border-gray-200 text-gray-600",
                    children: "关闭",
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            C &&
            (() => {
              const Ge = E && j ? j : C,
                Le = Fk(Ge.category, y || []),
                _e = Le.icon,
                yt = Ge.source === "ai",
                rt = !yt,
                ze = (() => {
                  try {
                    const it = new Date(Ge.date);
                    return isNaN(it.getTime())
                      ? "--"
                      : it.toLocaleString("zh-CN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        });
                  } catch {
                    return "--";
                  }
                })(),
                lt = (() => {
                  try {
                    const it = new Date(Ge.date);
                    return isNaN(it.getTime())
                      ? ""
                      : it.toISOString().slice(0, 16);
                  } catch {
                    return "";
                  }
                })();
              return e.jsx(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "absolute inset-0 bg-[#6B5B55]/25 backdrop-blur-sm z-50 flex items-center justify-center p-6",
                  onClick: () => {
                    (M(null), S(!1), T(null));
                  },
                  children: e.jsx(We.div, {
                    initial: { scale: 0.9, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.9, opacity: 0 },
                    transition: { type: "spring", bounce: 0.4 },
                    className:
                      "bg-white w-full max-w-sm rounded-2xl shadow-xl border-2 border-[#FFEBEE] overflow-hidden max-h-[90vh] overflow-y-auto",
                    onClick: (it) => it.stopPropagation(),
                    children: e.jsxs("div", {
                      className: "p-5 pt-6 relative",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (M(null), S(!1), T(null));
                          },
                          className:
                            "absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 text-[#6B5B55]",
                          "aria-label": "关闭",
                          children: e.jsx(Ts, { size: 20 }),
                        }),
                        e.jsx("h3", {
                          className: `text-lg font-bold ${gi.ink} mb-4 text-center ${zi}`,
                          children: E ? "编辑记录" : "记账详情",
                        }),
                        E && j
                          ? e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "类型",
                                    }),
                                    e.jsx("div", {
                                      className: "flex gap-2 mt-1",
                                      children: ["expense", "income"].map(
                                        (it) =>
                                          e.jsx(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () =>
                                                T(
                                                  (Ht) =>
                                                    Ht && {
                                                      ...Ht,
                                                      direction: it,
                                                    },
                                                ),
                                              className: `flex-1 py-1.5 rounded-lg text-sm border-2 ${j.direction === it ? "border-[#FFB7B2] bg-[#FFF0F5]" : "border-gray-200"}`,
                                              children:
                                                it === "expense"
                                                  ? "支出"
                                                  : "收入",
                                            },
                                            it,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "金额",
                                    }),
                                    e.jsx("input", {
                                      type: "number",
                                      step: "0.01",
                                      min: "0",
                                      value: j.amount,
                                      onChange: (it) =>
                                        T(
                                          (Ht) =>
                                            Ht && {
                                              ...Ht,
                                              amount: it.target.value,
                                            },
                                        ),
                                      className:
                                        "w-full mt-1 px-3 py-2 rounded-lg border border-[#FFEBEE] text-[#6B5B55]",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "谁付的",
                                    }),
                                    e.jsx("div", {
                                      className: "flex gap-1 mt-1",
                                      children: ["user", "ai", "both"].map(
                                        (it) =>
                                          e.jsx(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () =>
                                                T(
                                                  (Ht) =>
                                                    Ht && { ...Ht, payer: it },
                                                ),
                                              className: `flex-1 py-1 rounded-lg text-xs border-2 ${j.payer === it ? "border-[#FFB7B2] bg-[#FFF0F5]" : "border-gray-200"}`,
                                              children:
                                                it === "user"
                                                  ? "我"
                                                  : it === "ai"
                                                    ? "TA"
                                                    : "一起",
                                            },
                                            it,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "分类",
                                    }),
                                    e.jsxs("select", {
                                      value: j.category,
                                      onChange: (it) =>
                                        T(
                                          (Ht) =>
                                            Ht && {
                                              ...Ht,
                                              category: it.target.value,
                                            },
                                        ),
                                      className:
                                        "w-full mt-1 px-3 py-2 rounded-lg border border-[#FFEBEE] text-sm",
                                      children: [
                                        Zb.map((it) =>
                                          e.jsx(
                                            "option",
                                            {
                                              value: it,
                                              children: dd[it].label,
                                            },
                                            it,
                                          ),
                                        ),
                                        (y || []).map((it) =>
                                          e.jsx(
                                            "option",
                                            { value: it.id, children: it.name },
                                            it.id,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "备注",
                                    }),
                                    e.jsx("input", {
                                      type: "text",
                                      value: j.note || "",
                                      onChange: (it) =>
                                        T(
                                          (Ht) =>
                                            Ht && {
                                              ...Ht,
                                              note: it.target.value,
                                            },
                                        ),
                                      className:
                                        "w-full mt-1 px-3 py-2 rounded-lg border border-[#FFEBEE] text-sm",
                                      maxLength: 30,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "时间",
                                    }),
                                    e.jsx("input", {
                                      type: "datetime-local",
                                      value: lt,
                                      onChange: (it) => {
                                        const Ht = it.target.value;
                                        Ht &&
                                          T(
                                            (is) =>
                                              is && {
                                                ...is,
                                                date: new Date(Ht).getTime(),
                                              },
                                          );
                                      },
                                      className:
                                        "w-full mt-1 px-3 py-2 rounded-lg border border-[#FFEBEE] text-sm",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-gray-500",
                                      children: "图片",
                                    }),
                                    e.jsxs("div", {
                                      className: "mt-1 flex items-center gap-2",
                                      children: [
                                        e.jsx("input", {
                                          type: "file",
                                          accept: "image/*",
                                          className: "hidden",
                                          id: "detail-edit-image",
                                          onChange: Nt,
                                        }),
                                        e.jsx("label", {
                                          htmlFor: "detail-edit-image",
                                          className:
                                            "px-3 py-1.5 rounded-lg border border-[#FFB7B2] text-sm text-[#6B5B55] cursor-pointer",
                                          children: "更换",
                                        }),
                                        j.image &&
                                          e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx("img", {
                                                src: j.image,
                                                alt: "",
                                                className:
                                                  "w-12 h-12 object-cover rounded",
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () =>
                                                  T(
                                                    (it) =>
                                                      it && {
                                                        ...it,
                                                        image: "",
                                                      },
                                                  ),
                                                className:
                                                  "text-xs text-[#FF9AA2]",
                                                children: "移除",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-2 pt-2",
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: Ke,
                                      className:
                                        "flex-1 py-2 rounded-lg text-sm font-bold bg-[#FFB7B2] text-white",
                                      children: "保存",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        (S(!1), T(null));
                                      },
                                      className:
                                        "flex-1 py-2 rounded-lg text-sm border border-gray-200 text-gray-600",
                                      children: "取消",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-center gap-3 mb-4",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-12 h-12 rounded-full flex items-center justify-center",
                                      style: {
                                        backgroundColor: Le.bg,
                                        borderColor: Le.border,
                                        borderWidth: 2,
                                      },
                                      children: Ge.image
                                        ? e.jsx("img", {
                                            src: Ge.image,
                                            alt: "",
                                            className:
                                              "w-full h-full rounded-full object-cover",
                                          })
                                        : _e
                                          ? e.jsx(_e, {
                                              size: 24,
                                              style: { color: Le.color },
                                            })
                                          : e.jsx("span", {
                                              className: "text-xl",
                                              children: Le.emoji || "📌",
                                            }),
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsxs("div", {
                                          className: `text-2xl font-bold font-mono ${Ge.direction === "income" ? "text-emerald-600" : gi.ink}`,
                                          children: [
                                            Ge.direction === "income"
                                              ? "+"
                                              : "-",
                                            "¥",
                                            Ge.amount,
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: "text-xs text-gray-500",
                                          children: Le.label,
                                        }),
                                        Ge.payer &&
                                          Ge.payer !== "user" &&
                                          e.jsx("div", {
                                            className:
                                              "text-[10px] text-gray-400",
                                            children:
                                              Ge.payer === "ai"
                                                ? "TA 付"
                                                : Ge.payer === "both"
                                                  ? "一起"
                                                  : "",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("dl", {
                                  className: "space-y-2 text-sm",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex justify-between",
                                      children: [
                                        e.jsx("dt", {
                                          className: "text-gray-500",
                                          children: "备注",
                                        }),
                                        e.jsx("dd", {
                                          className: `${gi.ink} text-right max-w-[60%] break-words`,
                                          children: Ge.note || "—",
                                        }),
                                      ],
                                    }),
                                    Ge.productDesc &&
                                      e.jsxs("div", {
                                        className: "mt-2",
                                        children: [
                                          e.jsx("dt", {
                                            className:
                                              "text-gray-500 text-xs mb-1",
                                            children: "商品描述",
                                          }),
                                          e.jsx("dd", {
                                            className: `text-sm ${gi.ink} break-words`,
                                            children: Ge.productDesc,
                                          }),
                                        ],
                                      }),
                                    e.jsxs("div", {
                                      className: "flex justify-between",
                                      children: [
                                        e.jsx("dt", {
                                          className: "text-gray-500",
                                          children: "时间",
                                        }),
                                        e.jsx("dd", {
                                          className: gi.ink,
                                          children: ze,
                                        }),
                                      ],
                                    }),
                                    Ge.mood &&
                                      e.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                          e.jsx("dt", {
                                            className: "text-gray-500",
                                            children: "心情",
                                          }),
                                          e.jsx("dd", {
                                            className: gi.ink,
                                            children: Ge.mood,
                                          }),
                                        ],
                                      }),
                                    yt &&
                                      Ge.aiComment &&
                                      e.jsxs("div", {
                                        className:
                                          "mt-3 pt-3 border-t border-[#FFEBEE]",
                                        children: [
                                          e.jsxs("dt", {
                                            className:
                                              "text-gray-500 text-xs mb-1",
                                            children: [Pe, " 的心声"],
                                          }),
                                          e.jsx("dd", {
                                            className: `text-sm ${gi.ink}`,
                                            children: Ge.aiComment,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "mt-4 flex gap-2 flex-wrap",
                                  children: [
                                    rt &&
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: Be,
                                        className:
                                          "flex items-center gap-1 py-2 px-3 rounded-lg text-sm font-medium bg-[#E3F2FD] text-[#1976D2]",
                                        children: [
                                          e.jsx(_l, { size: 14 }),
                                          "编辑",
                                        ],
                                      }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        window.confirm(
                                          "确定要删除这条记录吗？",
                                        ) && (Bs(Ge.id), M(null));
                                      },
                                      className:
                                        "flex-1 py-2 rounded-lg text-sm font-medium bg-[#FFEBEE] text-[#FF9AA2] hover:bg-[#FFCDD2] transition-colors",
                                      children: "删除",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        (M(null), S(!1), T(null));
                                      },
                                      className:
                                        "flex-1 py-2 rounded-lg text-sm font-bold bg-[#FFB7B2] text-white hover:bg-[#FF8A94] transition-colors",
                                      children: "关闭",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                },
                "detail",
              );
            })(),
        }),
        e.jsx(Os, {
          children:
            (Y == null ? void 0 : Y.image) &&
            e.jsx(
              We.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "absolute inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4",
                onClick: () => U(null),
                children: e.jsxs(We.div, {
                  initial: { scale: 0.95, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.95, opacity: 0 },
                  transition: { type: "spring", bounce: 0.25 },
                  className: "relative w-full max-w-sm",
                  onClick: (Ge) => Ge.stopPropagation(),
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => U(null),
                      className:
                        "absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/90 text-[#6B5B55] shadow flex items-center justify-center",
                      "aria-label": "关闭图片预览",
                      children: e.jsx(Ts, { size: 18 }),
                    }),
                    e.jsx("div", {
                      className:
                        "bg-white rounded-2xl overflow-hidden border-2 border-white shadow-2xl",
                      children: e.jsx("img", {
                        src: Y.image,
                        alt: "",
                        className:
                          "w-full h-auto max-h-[70vh] object-contain bg-black",
                      }),
                    }),
                  ],
                }),
              },
              "preview-image",
            ),
        }),
      ],
    });
  },
  Ex = [
    {
      id: "white",
      name: "极简白",
      color: "#FAFAFA",
      vars: {
        "--bg-out": "#E5E5E5",
        "--bg-app": "#FAFAFA",
        "--bg-card": "#FFFFFF",
        "--text-main": "#18181b",
        "--text-muted": "#71717a",
        "--text-light": "#a1a1aa",
        "--border-main": "#e4e4e7",
        "--border-sub": "#f4f4f5",
        "--accent-bg": "#f4f4f5",
        "--inverse": "#ffffff",
      },
    },
    {
      id: "pink",
      name: "淡奶粉",
      color: "#FFF5F8",
      vars: {
        "--bg-out": "#FFF2F7",
        "--bg-app": "#FFF7FB",
        "--bg-card": "#FFFBFD",
        "--text-main": "#18181b",
        "--text-muted": "#71717a",
        "--text-light": "#a1a1aa",
        "--border-main": "#F7D2E6",
        "--border-sub": "#FFEAF6",
        "--accent-bg": "#FFEAF6",
        "--inverse": "#ffffff",
      },
    },
    {
      id: "blue",
      name: "淡奶蓝",
      color: "#F5FAFF",
      vars: {
        "--bg-out": "#EAF6FF",
        "--bg-app": "#F3FAFF",
        "--bg-card": "#FBFDFF",
        "--text-main": "#18181b",
        "--text-muted": "#71717a",
        "--text-light": "#a1a1aa",
        "--border-main": "#D5F0FF",
        "--border-sub": "#F0FAFF",
        "--accent-bg": "#F0FAFF",
        "--inverse": "#ffffff",
      },
    },
    {
      id: "yellow",
      name: "淡奶黄",
      color: "#FFFEF5",
      vars: {
        "--bg-out": "#FFF9E6",
        "--bg-app": "#FFFCF1",
        "--bg-card": "#FFFEF8",
        "--text-main": "#18181b",
        "--text-muted": "#71717a",
        "--text-light": "#a1a1aa",
        "--border-main": "#FFF0B8",
        "--border-sub": "#FFFAE0",
        "--accent-bg": "#FFFAE0",
        "--inverse": "#ffffff",
      },
    },
    {
      id: "green",
      name: "淡奶绿",
      color: "#F5FFF8",
      vars: {
        "--bg-out": "#F0FDF4",
        "--bg-app": "#F6FFF9",
        "--bg-card": "#F9FFFC",
        "--text-main": "#18181b",
        "--text-muted": "#71717a",
        "--text-light": "#a1a1aa",
        "--border-main": "#CAF8DD",
        "--border-sub": "#ECFFF3",
        "--accent-bg": "#ECFFF3",
        "--inverse": "#ffffff",
      },
    },
    {
      id: "black",
      name: "先锋黑",
      color: "#18181B",
      vars: {
        "--bg-out": "#000000",
        "--bg-app": "#121212",
        "--bg-card": "#18181B",
        "--text-main": "#FAFAFA",
        "--text-muted": "#A1A1AA",
        "--text-light": "#52525B",
        "--border-main": "#27272A",
        "--border-sub": "#1C1C1E",
        "--accent-bg": "#27272A",
        "--inverse": "#1C1C1E",
      },
    },
  ],
  ey = ({ onClick: t } = {}) =>
    e.jsx("div", {
      className: `flex gap-[2px] opacity-30 items-center h-4 ${t ? "cursor-pointer" : ""}`,
      role: t ? "button" : void 0,
      tabIndex: t ? 0 : -1,
      onClick: t || void 0,
      onKeyDown: (s) => {
        t && (s.key === "Enter" || s.key === " ") && t();
      },
      "aria-label": t ? "设置 TA 备忘录更新时间" : void 0,
      children: [...Array(12)].map((s, n) =>
        e.jsx(
          "div",
          {
            className: `bg-[var(--text-main)] ${n % 3 === 0 ? "w-[2px]" : "w-[1px]"} ${n % 2 === 0 ? "h-4" : "h-3"}`,
          },
          n,
        ),
      ),
    });
function IJ({ onBack: t, contact: s }) {
  var Ye;
  const [n, a] = l.useState("me"),
    [r, i] = l.useState("idle"),
    [o, c] = l.useState(null),
    [d, u] = l.useState(12),
    [f, p] = l.useState(""),
    [m, h] = l.useState("emotion"),
    [g, x] = l.useState([]),
    [y, v] = l.useState(null),
    [b, N] = l.useState(!1),
    [w, _] = l.useState(""),
    [A, k] = l.useState(""),
    [C, M] = l.useState("daily"),
    [E, S] = l.useState("2"),
    [j, T] = l.useState("2"),
    [I, L] = l.useState("60"),
    [B, F] = l.useState(0),
    [D, $] = l.useState(!1),
    P = s == null ? void 0 : s.id,
    z = P ? Su(P) : null,
    O = P ? yv(P) : null,
    Z = P ? `couple_memo_ta_sync_to_chat_${P}` : null,
    K = P ? `couple_memo_ai_comment_budget_${P}` : null,
    q = P ? `couple_memo_ai_comment_pending_${P}` : null,
    V = P ? `couple_memo_ai_comment_pending_last_updated_${P}` : null,
    ne = P ? `couple_memo_ai_comment_retry_limit_${P}` : null,
    le = P ? `couple_memo_ta_view_min_interval_ms_${P}` : null,
    ie = P ? `couple_memo_ui_theme_id_${P}` : null,
    [X, je] = l.useState(!1),
    [xe, ye] = l.useState(""),
    [R, oe] = l.useState(3),
    [ee, H] = l.useState(!1),
    [Y, U] = l.useState(null),
    {
      chats: ce,
      createChat: pe,
      getRoleBoundUser: se,
      sendMessage: Te,
      triggerAiReply: ke,
    } = vn(),
    W = l.useRef(0),
    ue = l.useRef(new Map()),
    re = l.useRef([]),
    he = l.useRef("preview"),
    ge = l.useRef(null),
    J = l.useRef(0),
    G = l.useRef(new Set()),
    we = 300 * 1e3,
    Q = (Ze, Ue, me) => Math.max(Ue, Math.min(me, Ze)),
    ve = (Ze) => {
      const Ue = Number(Ze);
      return Number.isFinite(Ue) ? Q(Math.floor(Ue), 1, 5) : 3;
    },
    Ve = (Ze) => {
      U((Ue) => (Ue === Ze ? null : Ze));
    },
    Ae = ({ helpKey: Ze }) =>
      e.jsx("button", {
        type: "button",
        onClick: () => Ve(Ze),
        className: `shrink-0 w-7 h-7 rounded-full border transition-colors flex items-center justify-center ${Y === Ze ? "bg-[var(--accent-bg)]/70 border-[var(--border-main)]/70 text-[var(--text-main)]" : "bg-[var(--bg-card)]/60 border-[var(--border-sub)]/90 text-[var(--text-light)] hover:bg-[var(--bg-card)] hover:text-[var(--text-main)]"}`,
        "aria-label": "显示/隐藏说明",
        "aria-pressed": Y === Ze,
        title: "说明",
        children: e.jsx(xl, { className: "w-4 h-4", strokeWidth: 1.5 }),
      }),
    te = ({ helpKey: Ze, children: Ue }) => {
      const me = Y === Ze;
      return e.jsx("div", {
        className: `transition-all duration-300 overflow-hidden ${me ? "max-h-44 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`,
        children: e.jsx("p", {
          className:
            "text-[13px] leading-relaxed text-[var(--text-muted)] font-light whitespace-pre-wrap",
          children: Ue,
        }),
      });
    },
    Se = (Ze) =>
      String(Ze || "")
        .replace(/\[\[DEL\]\]([\s\S]*?)\[\[\/DEL\]\]/g, "$1")
        .replace(/\[\[DEL\]\]/g, "")
        .replace(/\[\[\/DEL\]\]/g, ""),
    Fe = (Ze) => {
      const Ue = Number(Ze);
      if (!Number.isFinite(Ue) || Ue <= 0) return "";
      const me = new Date(Ue),
        jt = `${me.getMonth() + 1}月${me.getDate()}日`,
        Gt = me.toLocaleTimeString("zh-CN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
        });
      return `${jt} ${Gt}`;
    },
    $e = (Ze) => {
      const Ue = Number(Ze);
      return !Number.isFinite(Ue) || Ue <= 0
        ? ""
        : new Date(Ue).toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          });
    },
    tt = (Ze) => {
      const Ue = String(Ze || ""),
        me = /\[\[DEL\]\]([\s\S]*?)\[\[\/DEL\]\]/g;
      if (!me.test(Ue)) return Ue;
      me.lastIndex = 0;
      const jt = [];
      let Gt = 0,
        Pt;
      for (; (Pt = me.exec(Ue)) !== null; ) {
        const ct = Ue.slice(Gt, Pt.index);
        ct && jt.push(e.jsx(pn.Fragment, { children: ct }, `m-${jt.length}`));
        const Kt = String(Pt[1] ?? "");
        (jt.push(
          e.jsx(
            "span",
            {
              className: "line-through opacity-70 text-[var(--text-light)]",
              children: Kt,
            },
            `d-${jt.length}`,
          ),
        ),
          (Gt = me.lastIndex));
      }
      const Wt = Ue.slice(Gt);
      return (
        Wt && jt.push(e.jsx(pn.Fragment, { children: Wt }, `a-${jt.length}`)),
        jt
      );
    },
    Xe = (Ze) => {
      const Ue = Se(Ze),
        me = String(Ue || "")
          .replace(/\s+/g, "")
          .trim();
      if (!me) return [];
      const jt = me
        .split(new RegExp("(?<=[。！？!?])"))
        .map((Pt) => Pt.trim())
        .filter(Boolean);
      if (jt.length >= 3) return jt;
      const Gt = Q(Math.floor(me.length * 0.15), 18, 60);
      return [me.slice(0, Gt), me.slice(Gt, Gt * 2), me.slice(Gt * 2)];
    },
    ht = (Ze, Ue = null) => {
      const me = Xe(Ze);
      if (!me.length) return { previewText: "", style: "emotion" };
      const jt = [
          "害怕",
          "委屈",
          "难过",
          "心跳",
          "想你",
          "不安",
          "喜欢",
          "抓紧",
          "呼吸",
          "颤",
        ],
        Gt = [
          "今天",
          "发生",
          "然后",
          "当时",
          "我看见",
          "路上",
          "我们",
          "回到",
          "去",
          "遇到",
        ],
        Pt = [
          "可能",
          "好像",
          "不敢",
          "别",
          "只要",
          "只想",
          "应该",
          "假装",
          "装作",
          "如果",
          "也许",
        ],
        Wt = (ss, _s) =>
          _s.reduce((qs, Bs) => qs + (ss.includes(Bs) ? 1 : 0), 0),
        ct = me
          .map((ss) => ({
            text: ss,
            emotion: Wt(ss, jt),
            plot: Wt(ss, Gt),
            ambiguity: Wt(ss, Pt),
            len: ss.length,
          }))
          .map((ss) => {
            const _s = ss.len > 130 ? 0.7 : ss.len < 18 ? 0.6 : 1;
            return {
              ...ss,
              emotion: ss.emotion * _s,
              plot: ss.plot * _s,
              ambiguity: ss.ambiguity * _s,
            };
          }),
        Kt = ct.reduce(
          (ss, _s) => ({
            emotion: ss.emotion + _s.emotion,
            plot: ss.plot + _s.plot,
            ambiguity: ss.ambiguity + _s.ambiguity,
          }),
          { emotion: 0, plot: 0, ambiguity: 0 },
        ),
        gt = (() => {
          if (Ue) return Ue;
          const ss = [
              { id: "emotion", w: Kt.emotion + 1 },
              { id: "plot", w: Kt.plot + 1 },
              { id: "ambiguity", w: Kt.ambiguity + 1 },
            ],
            _s = ss.reduce((Js, Xs) => Js + Xs.w, 0),
            qs = Math.random() * _s;
          let Bs = 0;
          for (const Js of ss) if (((Bs += Js.w), qs <= Bs)) return Js.id;
          return "emotion";
        })(),
        ae =
          gt === "emotion" ? "emotion" : gt === "plot" ? "plot" : "ambiguity",
        nt = [...ct]
          .sort((ss, _s) => (_s[ae] || 0) - (ss[ae] || 0))
          .slice(0, 3),
        It = nt.length >= 3 && Math.random() < 0.6 ? 3 : 2,
        Xt = [];
      for (; Xt.length < It && Xt.length < nt.length; ) {
        const ss = Math.floor(Math.random() * nt.length),
          _s = nt[ss];
        !_s || Xt.includes(_s) || Xt.push(_s);
      }
      return (
        Xt.sort((ss, _s) => me.indexOf(ss.text) - me.indexOf(_s.text)),
        { previewText: Xt.map((ss) => ss.text).join(" "), style: gt }
      );
    },
    Pe = (Ze) => (Ze < 3e3 ? 0.05 : Ze < 8e3 ? 0.3 : Ze < 2e4 ? 0.65 : 0.95),
    ut = (Ze) => (Ze < 1e3 ? 0.95 : Ze < 5e3 ? 0.65 : Ze < 15e3 ? 0.3 : 0.1),
    _t = ({
      memo: Ze,
      dtPreview: Ue,
      dtContinue: me,
      reopenCount: jt,
      continueBurst: Gt,
    }) => {
      const Pt = ve(Ze == null ? void 0 : Ze.privacyLevel),
        Wt = { 1: 0.03, 2: 0.07, 3: 0.12, 4: 0.2, 5: 0.3 },
        ct = { 1: 0.15, 2: 0.25, 3: 0.4, 4: 0.55, 5: 0.7 },
        Kt = Wt[Pt] ?? 0.12,
        fs = ct[Pt] ?? 0.4,
        gt = jt <= 0 ? 0.05 : jt === 1 ? 0.35 : jt === 2 ? 0.7 : 0.95,
        ae = Gt <= 0 ? 0 : Gt <= 2 ? 0.2 : 0.35,
        nt = Q(gt * 0.7 + ae * 0.3, 0, 1),
        It = Pe(Ue),
        Xt = ut(me),
        bs = Q(0.34 * It + 0.34 * Xt + 0.32 * nt, 0, 1),
        ss = 1 / (1 + Math.exp(-6 * (bs - 0.5)));
      return { pCaught: Kt + (fs - Kt) * ss, privacyLevel: Pt };
    },
    Ee = ({
      dtPreview: Ze,
      dtContinue: Ue,
      reopenCount: me,
      continueBurst: jt,
    }) => {
      const Gt = [];
      return (
        Ze >= 8e3 ? Gt.push("stayed_long") : Ze >= 3e3 && Gt.push("stayed_mid"),
        Ue < 1e3 ? Gt.push("too_fast") : Ue < 5e3 && Gt.push("fast"),
        me >= 2 ? Gt.push("reopened") : me === 1 && Gt.push("opened_once"),
        jt >= 3 ? Gt.push("burst") : jt === 2 && Gt.push("burst2"),
        Array.from(new Set(Gt)).slice(0, 4)
      );
    },
    fe = (Ze) => {
      const Ue =
          String((Ze == null ? void 0 : Ze.title) || "").trim() || "（无标题）",
        me = Se(String((Ze == null ? void 0 : Ze.content) || ""))
          .replace(
            /\r?\n/g,
            `
`,
          )
          .trim(),
        jt = 3200,
        Gt = me.length > jt ? `${me.slice(0, jt)}…` : me;
      return { memoTitle: Ue, memoContentForAi: Gt };
    },
    He = async ({ memo: Ze, riskReasons: Ue }) => {
      const me = s == null ? void 0 : s.id;
      if (!me) return;
      const jt = Array.isArray(ce)
          ? ce.find((nt) => nt.contactId === me)
          : null,
        Gt =
          (jt == null ? void 0 : jt.id) ??
          (typeof pe == "function" ? pe(me) : null);
      if (!Gt) return;
      const Pt = (se == null ? void 0 : se(s)) ?? {},
        Wt =
          (Pt == null ? void 0 : Pt.name) ||
          (Pt == null ? void 0 : Pt.realName) ||
          "我",
        ct =
          (s == null ? void 0 : s.nickname) ||
          (s == null ? void 0 : s.name) ||
          "TA",
        Kt = J.current,
        fs = `memo_peek_alert_${Ze == null ? void 0 : Ze.id}_${Kt}`;
      if (G.current.has(fs)) return;
      G.current.add(fs);
      const { memoTitle: gt, memoContentForAi: ae } = fe(Ze);
      (Te == null ||
        Te(Gt, "偷看提醒", null, "memo_peek_alert", {
          userName: Wt,
          taName: ct,
          memoSerial: Ze == null ? void 0 : Ze.serial,
          privacyLevel: ve(Ze == null ? void 0 : Ze.privacyLevel),
          riskReasons: Ue,
          memoTitle: gt,
          memoContentForAi: ae,
        }),
        setTimeout(() => {
          typeof ke == "function" && ke(Gt);
        }, 600));
    },
    Ie = () => {