                                        }),
                                        Te
                                          ? e.jsxs("p", {
                                              id: "npc-msg",
                                              className:
                                                "serif-regular text-base italic text-zinc-500 flex items-center gap-2",
                                              children: [
                                                e.jsxs("span", {
                                                  className:
                                                    "inline-flex gap-1",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce",
                                                      style: {
                                                        animationDelay: "0ms",
                                                      },
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce",
                                                      style: {
                                                        animationDelay: "150ms",
                                                      },
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce",
                                                      style: {
                                                        animationDelay: "300ms",
                                                      },
                                                    }),
                                                  ],
                                                }),
                                                "等待角色行动…",
                                              ],
                                            })
                                          : e.jsx("p", {
                                              id: "npc-msg",
                                              className:
                                                "serif-regular text-lg italic text-zinc-300",
                                              children: N,
                                            }),
                                      ],
                                    }),
                                    e.jsxs("section", {
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-micro mb-2 text-zinc-700",
                                          children: "宿命碎块 / YOUR DESTINY",
                                        }),
                                        e.jsx("div", {
                                          id: "hand",
                                          className: "flex flex-wrap gap-2",
                                          children: _.map((fe, He) =>
                                            e.jsx(
                                              "div",
                                              {
                                                className: `dice-cell ${He < M ? "revealed" : ""} ${fe % 2 === 0 ? "active" : ""}`,
                                                children: fe,
                                              },
                                              `${fe}-${He}`,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "oracle-dice-actions space-y-3 bg-white/5 p-4 rounded-sm border border-white/10",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className: "text-micro mb-2",
                                          children: "意志宣告 / YOUR WILL",
                                        }),
                                        e.jsx("input", {
                                          type: "text",
                                          id: "user-manifesto",
                                          value: $,
                                          onChange: (fe) => P(fe.target.value),
                                          placeholder: "向星辰吐露你的谎言...",
                                          className:
                                            "bg-transparent border-b border-white/10 w-full py-2 text-sm focus:outline-none focus:border-white transition-colors italic",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 gap-4 border-y border-white/5 py-3",
                                      children: [
                                        e.jsxs("div", {
                                          className: "text-center",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-micro block mb-1 text-zinc-500",
                                              children: "因果重数",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center justify-center gap-4",
                                              children: [
                                                e.jsx("button", {
                                                  onClick: () => tt(-1),
                                                  className:
                                                    "text-zinc-600 hover:text-white text-xl",
                                                  children: "-",
                                                }),
                                                e.jsx("span", {
                                                  id: "ui-count",
                                                  className:
                                                    "serif-bold text-2xl text-white",
                                                  children: S,
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => tt(1),
                                                  className:
                                                    "text-zinc-600 hover:text-white text-xl",
                                                  children: "+",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "text-center border-l border-white/5",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-micro block mb-1 text-zinc-500",
                                              children: "神谕位阶",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center justify-center gap-4",
                                              children: [
                                                e.jsx("button", {
                                                  onClick: () => Xe(-1),
                                                  className:
                                                    "text-zinc-600 hover:text-white text-xl",
                                                  children: "-",
                                                }),
                                                e.jsx("span", {
                                                  id: "ui-point",
                                                  className:
                                                    "serif-bold text-2xl text-white",
                                                  children: T,
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => Xe(1),
                                                  className:
                                                    "text-zinc-600 hover:text-white text-xl",
                                                  children: "+",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex flex-col gap-2",
                                      children: [
                                        e.jsx("button", {
                                          onClick: ht,
                                          disabled: Te,
                                          className:
                                            "btn-galaxy bg-white text-black font-bold py-3 tracking-[0.5em] text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                                          children: "以此立誓 / SWEAR",
                                        }),
                                        e.jsx("button", {
                                          onClick: () => ut("player"),
                                          className:
                                            "btn-galaxy text-zinc-500 border-zinc-900 py-2 text-[0.55rem] tracking-[0.4em]",
                                          children: "揭开尘世之面 / REVEAL",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("footer", {
                          className:
                            "flex justify-between items-center pt-3 border-t border-white/5 text-[0.5rem] text-zinc-800",
                          children: [
                            e.jsx("p", {
                              className: "tracking-[0.6em] uppercase italic",
                              children: "星辰不语，唯有观测",
                            }),
                            e.jsx("p", {
                              id: "sys-clock",
                              className: "font-mono tracking-widest opacity-50",
                              children: ge,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    id: "result-layer",
                    className: `page-layer flex items-center justify-center z-[2000] bg-black/95 ${x === "result" ? "" : "hidden-layer"}`,
                    style: { backdropFilter: "blur(20px)" },
                    children: e.jsxs("div", {
                      className:
                        "text-center max-w-sm w-full p-10 border border-white/10 bg-zinc-950",
                      children: [
                        e.jsx("h3", {
                          id: "res-status",
                          className:
                            "serif-bold text-6xl mb-2 italic tracking-tighter",
                          children: ne != null && ne.win ? "超脱" : "湮灭",
                        }),
                        e.jsxs("p", {
                          id: "res-detail",
                          className:
                            "text-micro mb-6 text-zinc-600 tracking-widest",
                          children: [
                            "因果实相: ",
                            (ne == null ? void 0 : ne.actual) ?? "—",
                            " / 虚妄宣告: ",
                            (ne == null ? void 0 : ne.declared) ?? "—",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mb-6",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-micro mb-2 text-zinc-500 uppercase tracking-widest",
                              children: "你的点数",
                            }),
                            e.jsx("div", {
                              className: "flex justify-center gap-2 mb-4",
                              children: _.map((fe, He) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: "dice-cell revealed",
                                    children: fe,
                                  },
                                  `p-${He}-${fe}`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-micro mb-2 text-zinc-500 uppercase tracking-widest",
                              children: [p, "的点数"],
                            }),
                            e.jsx("div", {
                              id: "npc-hand",
                              className: "flex justify-center gap-2 mb-12",
                              children: k.map((fe, He) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `dice-cell revealed ${fe % 2 === 0 ? "active" : ""}`,
                                    children: fe,
                                  },
                                  `npc-${He}-${fe}`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          id: "punishment",
                          className:
                            "text-[0.65rem] italic text-zinc-400 mb-6 leading-relaxed",
                          children: _t,
                        }),
                        (ne == null ? void 0 : ne.win) &&
                          e.jsx("div", {
                            className: "mb-8 text-left",
                            children: H
                              ? e.jsx("p", {
                                  className:
                                    "text-[0.65rem] text-zinc-500 italic",
                                  children: "已发送，角色已在聊天中回复",
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsxs("label", {
                                      className:
                                        "block text-[0.6rem] text-zinc-500 uppercase tracking-widest mb-2",
                                      children: ["给", p, "的惩罚"],
                                    }),
                                    e.jsx("input", {
                                      type: "text",
                                      value: oe,
                                      onChange: (fe) => ee(fe.target.value),
                                      placeholder:
                                        "输入惩罚内容，发送后角色会在聊天里回复",
                                      className:
                                        "w-full bg-white/5 border border-white/20 text-white text-sm px-3 py-2 rounded placeholder-zinc-500 focus:border-white/50 outline-none mb-2",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: async () => {
                                        const fe = oe.trim();
                                        if (!(!fe || !a || !c || H)) {
                                          Y(!0);
                                          try {
                                            (d &&
                                              d(
                                                a,
                                                fe,
                                                null,
                                                "dice_punishment_card",
                                                { content: fe },
                                              ),
                                              await Ee({
                                                userWon: !0,
                                                punishmentText: fe,
                                                onSent: () => {
                                                  (ue(!0),
                                                    setTimeout(() => {
                                                      (ue(!1),
                                                        s == null || s());
                                                    }, 1800));
                                                },
                                              }));
                                          } catch {
                                            Y(!1);
                                          }
                                        }
                                      },
                                      disabled: !oe.trim() || H,
                                      className:
                                        "btn-galaxy w-full py-3 tracking-widest disabled:opacity-40 disabled:cursor-not-allowed",
                                      children: "发送",
                                    }),
                                  ],
                                }),
                          }),
                        e.jsx("button", {
                          onClick: () => {
                            te();
                          },
                          className:
                            "btn-galaxy w-full bg-white text-black font-bold py-4 tracking-[0.8em]",
                          children: "轮回重塑",
                        }),
                        W &&
                          e.jsx("div", {
                            className:
                              "fixed inset-0 z-[9999] flex items-center justify-center bg-black/70",
                            onClick: () => {
                              (ue(!1), s == null || s());
                            },
                            children: e.jsxs("div", {
                              className:
                                "bg-zinc-900 border border-white/20 rounded-lg px-8 py-6 text-center shadow-xl",
                              onClick: (fe) => fe.stopPropagation(),
                              children: [
                                e.jsx("p", {
                                  className: "text-white font-medium mb-4",
                                  children: "已经送达",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  className: "btn-galaxy py-2 px-6 text-sm",
                                  onClick: () => {
                                    (ue(!1), s == null || s());
                                  },
                                  children: "确定",
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        : null
    );
  },
  yW = ({ show: t, onClose: s, members: n = [], onSelect: a }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsx("h3", {
                className: "text-lg font-bold text-[#5d4037] mb-2 text-center",
                children: "选择投喂对象",
              }),
              e.jsx("p", {
                className: "text-xs text-gray-400 text-center mb-4",
                children: "给哪位群成员点外卖？",
              }),
              e.jsx("div", {
                className: "space-y-2 max-h-56 overflow-y-auto",
                children: n.map((r) =>
                  e.jsxs(
                    "button",
                    {
                      onClick: () => a(r),
                      className:
                        "w-full flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-[#efebe9] hover:border-[#8d6e63] hover:bg-[#fff8e1] transition-colors text-left",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-10 h-10 rounded-full bg-[#ffecb3] flex items-center justify-center text-[#5d4037] overflow-hidden",
                          children: r.avatar
                            ? e.jsx("img", {
                                src: r.avatar,
                                alt: "",
                                className: "w-full h-full object-cover",
                              })
                            : e.jsx(wr, { size: 20 }),
                        }),
                        e.jsx("div", {
                          className: "flex-1 min-w-0",
                          children: e.jsx("span", {
                            className:
                              "text-sm font-bold text-[#5d4037] block truncate",
                            children:
                              r.remark || r.name || r.nickname || "未命名",
                          }),
                        }),
                      ],
                    },
                    r.id,
                  ),
                ),
              }),
            ],
          }),
        })
      : null,
  vW = ({ show: t, onClose: s, onSelectType: n }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsx("h3", {
                className: "text-lg font-bold text-[#5d4037] mb-6 text-center",
                children: "点外卖",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsxs("button", {
                    onClick: () => n("ta"),
                    className:
                      "aspect-square bg-[#fff8e1] border-2 border-[#ffe0b2] rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-[#ffecb3] flex items-center justify-center text-[#ff6f00]",
                        children: e.jsx(zn, {
                          size: 24,
                          className: "fill-[#ff6f00]",
                        }),
                      }),
                      e.jsx("span", {
                        className: "text-sm font-bold text-[#5d4037]",
                        children: "为 TA 点",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => n("me"),
                    className:
                      "aspect-square bg-white border-2 border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600",
                        children: e.jsx(Dh, { size: 24 }),
                      }),
                      e.jsx("span", {
                        className: "text-sm font-bold text-[#5d4037]",
                        children: "为自己点",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  wW = ({
    show: t,
    onClose: s,
    type: n,
    foodName: a,
    setFoodName: r,
    foodPrice: i,
    setFoodPrice: o,
    onSend: c,
    targetMember: d = null,
  }) => {
    if (!t) return null;
    const u = d ? d.remark || d.name || d.nickname || "TA" : null;
    return e.jsx("div", {
      className:
        "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
      children: e.jsxs("div", {
        className:
          "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative",
        children: [
          e.jsx("button", {
            onClick: s,
            className:
              "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
            children: e.jsx(Ts, { size: 20 }),
          }),
          e.jsx("h3", {
            className: "text-lg font-bold text-[#5d4037] mb-1 text-center",
            children: n === "ta" ? (u ? `投喂 ${u}` : "投喂 TA") : "求投喂",
          }),
          e.jsx("p", {
            className: "text-xs text-gray-400 text-center mb-6",
            children:
              n === "ta"
                ? u
                  ? `给 ${u} 点一份美味的外卖吧`
                  : "给 TA 点一份美味的外卖吧"
                : "发起代付申请，让 TA 买单",
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "text-xs font-bold text-[#8d6e63] ml-1 mb-1 block",
                    children: "商品名称",
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: a,
                    onChange: (f) => r(f.target.value),
                    placeholder: "例如：炸鸡啤酒",
                    className:
                      "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037]",
                    autoFocus: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "text-xs font-bold text-[#8d6e63] ml-1 mb-1 block",
                    children: "价格",
                  }),
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("span", {
                        className:
                          "absolute left-4 top-1/2 -translate-y-1/2 text-[#8d6e63] font-bold",
                        children: "¥",
                      }),
                      e.jsx("input", {
                        type: "number",
                        value: i,
                        onChange: (f) => o(f.target.value),
                        placeholder: "0.00",
                        className:
                          "w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037]",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: c,
                disabled: !a.trim() || !i.trim(),
                className:
                  "w-full py-3 bg-[#8d6e63] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#795548] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2",
                children: "发送",
              }),
            ],
          }),
        ],
      }),
    });
  },
  jW = ({ data: t, onClose: s, onAction: n, disableAccept: a = !1 }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[100] bg-black/30 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300",
          children: e.jsxs("div", {
            className:
              "relative w-full max-w-xs bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 border border-gray-100",
            children: [
              e.jsx("div", {
                className:
                  "h-2 bg-gradient-to-r from-[#fce4ec] via-[#f8bbd0] to-[#fce4ec]",
              }),
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1.5 hover:bg-gray-50 rounded-full text-gray-400 transition-colors z-10",
                children: e.jsx(Ts, { size: 18 }),
              }),
              e.jsxs("div", {
                className: "p-8 flex flex-col items-center",
                children: [
                  e.jsx("div", {
                    className:
                      "w-16 h-16 rounded-full bg-[#fff0f5] flex items-center justify-center mb-6 shadow-sm",
                    children: e.jsx(Dh, {
                      size: 24,
                      className: "text-[#ec407a]",
                    }),
                  }),
                  e.jsx("h2", {
                    className:
                      "text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-1",
                    children: "Payment Request",
                  }),
                  e.jsx("div", {
                    className:
                      "text-2xl font-serif font-bold text-[#2c2c2c] mb-8",
                    children: "Bon Appétit",
                  }),
                  e.jsxs("div", {
                    className:
                      "w-full bg-[#fafafa] rounded-xl p-5 mb-8 border border-gray-100 relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-r border-gray-100",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-l border-gray-100",
                      }),
                      e.jsx("div", {
                        className: "flex justify-between items-start mb-2",
                        children: e.jsx("span", {
                          className:
                            "text-sm font-medium text-[#4a4a4a] leading-relaxed flex-1 mr-4",
                          children: t.item,
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-end border-t border-dashed border-gray-200 pt-3 mt-2",
                        children: [
                          e.jsx("span", {
                            className: "text-[10px] text-gray-400 font-mono",
                            children: "TOTAL",
                          }),
                          e.jsxs("span", {
                            className:
                              "text-2xl font-mono font-bold text-[#ec407a]",
                            children: ["¥", t.price],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className:
                      "text-xs text-gray-400 text-center mb-8 font-light italic",
                    children: '"A small treat for a sweet day."',
                  }),
                  e.jsxs("div", {
                    className: "w-full grid grid-cols-2 gap-4",
                    children: [
                      e.jsx("button", {
                        onClick: () => n("reject"),
                        className:
                          "py-3.5 rounded-xl border border-gray-200 text-gray-500 font-medium text-xs hover:bg-gray-50 transition-colors",
                        children: "Decline",
                      }),
                      e.jsxs("button", {
                        onClick: () => {
                          a || n == null || n("accept");
                        },
                        disabled: a,
                        className: `py-3.5 rounded-xl bg-[#2c2c2c] text-white font-medium text-xs shadow-lg transition-colors flex items-center justify-center gap-2 ${a ? "opacity-60 cursor-not-allowed hover:bg-[#2c2c2c]" : "hover:bg-black"}`,
                        children: [e.jsx(On, { size: 14 }), "Pay Bill"],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "h-1.5 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMiIgZmlsbD0iI2Y1ZjVmNSIvPjwvc3ZnPg==')] opacity-50",
              }),
            ],
          }),
        })
      : null;
function NW({
  show: t,
  onClose: s,
  friendName: n,
  groupName: a,
  messages: r = [],
  roleName: i,
  roleAvatar: o,
  isBoundUserChat: c = !1,
  userAvatar: d,
}) {
  if (!t) return null;
  const u = `https://api.dicebear.com/7.x/avataaars/svg?seed=${i || "role"}`,
    f = d || "https://api.dicebear.com/7.x/avataaars/svg?seed=user";
  if (c) {
    const h = i || "对方";
    return e.jsx("div", {
      className: "forward-chat-overlay",
      onClick: s,
      children: e.jsxs("div", {
        className: "forward-chat-modal",
        onClick: (g) => g.stopPropagation(),
        children: [
          e.jsxs("header", {
            className: "forward-chat-header",
            children: [
              e.jsx("button", {
                type: "button",
                className: "forward-chat-close",
                onClick: s,
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 18, strokeWidth: 2.2 }),
              }),
              e.jsxs("div", {
                className: "forward-chat-header-inner",
                children: [
                  e.jsx("p", {
                    className: "forward-chat-eyebrow",
                    children: "与 TA 的对话",
                  }),
                  e.jsx("h1", { className: "forward-chat-title", children: h }),
                  e.jsx("div", { className: "forward-chat-header-rule" }),
                ],
              }),
              e.jsx("div", { className: "forward-chat-header-spacer" }),
            ],
          }),
          e.jsx("div", {
            className: "forward-chat-body",
            children:
              r.length === 0
                ? e.jsx("p", {
                    className: "forward-chat-empty",
                    children: "暂无记录",
                  })
                : e.jsx("div", {
                    className: "forward-chat-list",
                    children: r.map((g, x) =>
                      g.sender === "role"
                        ? e.jsxs(
                            "div",
                            {
                              className: "forward-chat-row row-left",
                              children: [
                                e.jsx("span", {
                                  className: "forward-chat-sender-label",
                                  children: h,
                                }),
                                e.jsx("div", {
                                  className:
                                    "forward-chat-bubble bubble-received",
                                  children: e.jsx("p", {
                                    className: "forward-chat-bubble-text",
                                    children: g.text,
                                  }),
                                }),
                              ],
                            },
                            x,
                          )
                        : e.jsxs(
                            "div",
                            {
                              className: "forward-chat-row row-right",
                              children: [
                                e.jsx("div", {
                                  className: "forward-chat-bubble bubble-sent",
                                  children: e.jsx("p", {
                                    className: "forward-chat-bubble-text",
                                    children: g.text,
                                  }),
                                }),
                                e.jsx("img", {
                                  src: f,
                                  alt: "",
                                  className: "forward-chat-role-avatar",
                                  "aria-hidden": !0,
                                }),
                              ],
                            },
                            x,
                          ),
                    ),
                  }),
          }),
        ],
      }),
    });
  }
  const p = a ? `${a}（群聊）` : n || "聊天记录",
    m = a ? "群聊" : n || "朋友";
  return e.jsx("div", {
    className: "forward-chat-overlay",
    onClick: s,
    children: e.jsxs("div", {
      className: "forward-chat-modal",
      onClick: (h) => h.stopPropagation(),
      children: [
        e.jsxs("header", {
          className: "forward-chat-header",
          children: [
            e.jsx("button", {
              type: "button",
              className: "forward-chat-close",
              onClick: s,
              "aria-label": "关闭",
              children: e.jsx(Ts, { size: 18, strokeWidth: 2.2 }),
            }),
            e.jsxs("div", {
              className: "forward-chat-header-inner",
              children: [
                e.jsx("p", {
                  className: "forward-chat-eyebrow",
                  children: a ? "群聊" : "私聊",
                }),
                e.jsx("h1", { className: "forward-chat-title", children: p }),
                e.jsx("div", { className: "forward-chat-header-rule" }),
              ],
            }),
            e.jsx("div", { className: "forward-chat-header-spacer" }),
          ],
        }),
        e.jsx("div", {
          className: "forward-chat-body",
          children:
            r.length === 0
              ? e.jsx("p", {
                  className: "forward-chat-empty",
                  children: "暂无记录",
                })
              : e.jsx("div", {
                  className: "forward-chat-list",
                  children: r.map((h, g) =>
                    h.sender === "role"
                      ? e.jsxs(
                          "div",
                          {
                            className: "forward-chat-row row-right",
                            children: [
                              e.jsx("div", {
                                className: "forward-chat-bubble bubble-sent",
                                children: e.jsx("p", {
                                  className: "forward-chat-bubble-text",
                                  children: h.text,
                                }),
                              }),
                              e.jsx("img", {
                                src: o || u,
                                alt: "",
                                className: "forward-chat-role-avatar",
                              }),
                            ],
                          },
                          g,
                        )
                      : e.jsxs(
                          "div",
                          {
                            className: "forward-chat-row row-left",
                            children: [
                              e.jsx("span", {
                                className: "forward-chat-sender-label",
                                children: m,
                              }),
                              e.jsx("div", {
                                className:
                                  "forward-chat-bubble bubble-received",
                                children: e.jsx("p", {
                                  className: "forward-chat-bubble-text",
                                  children: h.text,
                                }),
                              }),
                            ],
                          },
                          g,
                        ),
                  ),
                }),
        }),
      ],
    }),
  });
}
const kW = (t) => `portable_gashapon_eggs_${t}`,
  SW = (t) => `portable_gashapon_eggs_with_${t}`,
  v1 = (t) => `portable_gashapon_backpack_${t}`,
  Cb = (t, s) => (s ? SW(t) : kW(t)),
  bh = {
    Secret: "秘密",
    BadDeed: "坏事",
    Coupon: "和好券",
    Memory: "时光胶囊",
  },
  _W = ({ item: t, onClose: s, showPhoneCase: n = !0 }) =>
    t
      ? e.jsxs("div", {
          className: `manga-reader-vertical active ${n ? "with-phone-case" : ""}`,
          style: { zIndex: 8e3 },
          children: [
            e.jsx("button", {
              type: "button",
              onClick: s,
              className: "manga-detail-close",
              "aria-label": "关闭",
              children: e.jsx(Ts, { size: 16, strokeWidth: 3 }),
            }),
            e.jsxs("div", {
              className: "manga-scroll-view",
              children: [
                e.jsxs("div", {
                  className: "manga-title-block",
                  children: [
                    e.jsx("h1", {
                      className: "manga-main-title",
                      children: t.name,
                    }),
                    e.jsx("span", {
                      className: "manga-sub-type",
                      children: bh[t.type] || t.type,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "comic-panel",
                  children: [
                    e.jsx("span", { className: "panel-label", children: "01" }),
                    e.jsx("p", {
                      className: "panel-text",
                      children: t.sceneDesc || "",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "comic-panel panel-reason-style",
                  children: [
                    e.jsx("span", { className: "panel-label", children: "02" }),
                    e.jsx("p", {
                      className: "panel-text",
                      children: t.reason || "",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "comic-panel panel-voice-style",
                  children: [
                    e.jsx("span", { className: "panel-label", children: "03" }),
                    e.jsx("p", {
                      className: "panel-text voice-text",
                      children: t.heartVoice || "",
                    }),
                  ],
                }),
                e.jsx("div", { className: "manga-end", children: "— END —" }),
              ],
            }),
          ],
        })
      : null,
  AW = ({
    show: t,
    onClose: s,
    onSelectSolo: n,
    onSelectWithRole: a,
    contact: r,
  }) => {
    if (!t) return null;
    const i =
      (r == null ? void 0 : r.nickname) ||
      (r == null ? void 0 : r.name) ||
      "TA";
    return e.jsx("div", {
      className: "gasha-choice-overlay",
      children: e.jsxs("div", {
        className: "gasha-choice-modal",
        children: [
          e.jsx("button", {
            type: "button",
            onClick: s,
            className: "gasha-choice-close",
            "aria-label": "关闭",
            children: e.jsx(Ts, { size: 14, strokeWidth: 3 }),
          }),
          e.jsxs("div", {
            className: "gasha-choice-title-row",
            children: [
              e.jsx("span", {
                className: "gasha-choice-title-block",
                children: "命",
              }),
              e.jsx("span", {
                className:
                  "gasha-choice-title-block gasha-choice-title-block--alt",
                children: "运",
              }),
              e.jsx("span", {
                className: "gasha-choice-title-block",
                children: "扭",
              }),
              e.jsx("span", {
                className:
                  "gasha-choice-title-block gasha-choice-title-block--alt",
                children: "蛋",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "gasha-choice-options",
            children: [
              e.jsxs("button", {
                type: "button",
                onClick: () => {
                  (n(), s());
                },
                className: "gasha-choice-option",
                children: [
                  e.jsx("span", {
                    className:
                      "gasha-choice-option-icon gasha-choice-option-icon--solo",
                    children: e.jsx(wr, { size: 22, strokeWidth: 2.5 }),
                  }),
                  e.jsx("span", {
                    className: "gasha-choice-option-label",
                    children: "一个人抽",
                  }),
                ],
              }),
              e.jsxs("button", {
                type: "button",
                onClick: () => {
                  (a == null || a(), s());
                },
                className: "gasha-choice-option",
                children: [
                  e.jsx("span", {
                    className:
                      "gasha-choice-option-icon gasha-choice-option-icon--with",
                    children: e.jsx(Vi, { size: 22, strokeWidth: 2.5 }),
                  }),
                  e.jsxs("span", {
                    className: "gasha-choice-option-label",
                    children: ["和", i, "一起抽"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  CW = ({
    show: t,
    onClose: s,
    role: n,
    contact: a,
    chatId: r,
    callApi: i,
    getEffectiveUser: o,
    getRoleBoundUser: c,
    chats: d,
    onDrawComplete: u,
    showPhoneCase: f = !0,
    withCharacter: p = !1,
    sendMessage: m,
    triggerAiReply: h,
  }) => {
    const [g, x] = l.useState([]),
      [y, v] = l.useState(!1),
      [b, N] = l.useState(!1),
      [w, _] = l.useState(null),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(!1),
      [E, S] = l.useState(!1),
      j = a == null ? void 0 : a.id;
    (l.useEffect(() => {
      if (t) {
        S(!1);
        const $ = setTimeout(() => S(!0), 50);
        return () => clearTimeout($);
      }
      S(!1);
    }, [t]),
      l.useEffect(() => {
        if (!t || !j) return;
        const $ = Cb(j, p);
        (async () => {
          const z = await be.get($, []);
          x(Array.isArray(z) ? z : []);
        })();
      }, [t, j, p]));
    const T = async () => {
        var K;
        if (!n || !i || !j || y) return;
        const $ = (c == null ? void 0 : c(a)) ?? {},
          P = ($ == null ? void 0 : $.name) || "用户",
          z = (d || []).find((q) => q.contactId === j),
          O =
            ((K = z == null ? void 0 : z.messages) == null
              ? void 0
              : K.slice(-20)) ?? [],
          Z = O.length
            ? O.map(
                (q) =>
                  `${q.sender === "me" ? P : (a == null ? void 0 : a.name) || "角色"}：${(q.text || "").replace(/\n/g, " ")}`,
              ).join(`
`)
            : "无";
        v(!0);
        try {
          const q = `角色人设：${(a == null ? void 0 : a.name) || (n == null ? void 0 : n.name) || "角色"}，${(n == null ? void 0 : n.setting) || "无"}
绑定用户（非全局）：${P}，用户人设：${($ == null ? void 0 : $.settings) || "无"}
最近聊天（参考）：${Z}`,
            ne = [
              {
                sender: "me",
                text: p
                  ? `[系统指令：和角色一起抽。生成 8 个扭蛋：前 4 个为**角色的**（角色自己的秘密/坏事/和好券/时光胶囊），后 4 个为**用户的**（用户/对方的秘密/坏事/和好券/时光胶囊）。四种类型混合。

${q}

**硬性规定**：sceneDesc、reason、heartVoice 全部**只能用第三人称**叙述（如：他/她/角色名/对方），**禁止使用第一人称（我）和第二人称（你）**。心声 heartVoice 也必须是第三人称描写。

要求：
1. 返回 JSON 数组，共 8 个对象，前 4 个角色、后 4 个用户。不要 Markdown 代码块。
2. 格式：{ "type": "Secret|BadDeed|Coupon|Memory", "name": "物品名称", "sceneDesc": "情景约50字（第三人称）", "reason": "原因约70字（第三人称）", "heartVoice": "心声约80字（第三人称）" }
直接返回 JSON 数组。`
                  : `[系统指令：根据角色人设与绑定用户人设、以及最近聊天（仅作参考，角色有自己的生活），生成 8 个扭蛋物品。每个扭蛋类型随机混合以下四种之一：
1. **秘密 (Secret)**：角色不敢说的话。
2. **坏事 (BadDeed)**：角色偷偷做的小坏事或恶作剧。
3. **和好券 (Coupon)**：用于缓解关系的道具。
4. **时光胶囊 (Memory)**：关于过去的某个物品/回忆。

角色人设：
- 名字：${(a == null ? void 0 : a.name) || (n == null ? void 0 : n.name) || "角色"}
- 人设：${(n == null ? void 0 : n.setting) || "无"}

绑定用户（非全局）：${P}，用户人设：${($ == null ? void 0 : $.settings) || "无"}

最近聊天（参考，勿完全依赖）：
${Z}

要求：
1. 返回一个 JSON 数组，共 8 个对象，不要 Markdown 代码块。
2. 每个对象格式：
{
  "type": "Secret|BadDeed|Coupon|Memory",
  "name": "物品名称（中文，简短）",
  "sceneDesc": "当时的情景描述，约50字",
  "reason": "背后的原因，约70字",
  "heartVoice": "角色第一人称私密心声，约80字"
}
3. 8 个扭蛋中四种类型都要有，名称和内容要符合该角色人设，有私密感、手帐感。
直接返回 JSON 数组，不要其他说明。`,
                timestamp: new Date().toISOString(),
              },
            ],
            le = await i(
              ne,
              a || n,
              "system_generation",
              {},
              [],
              [],
              [],
              !1,
              "",
              $,
            );
          let ie = [];
          try {
            const X = le.match(/\[[\s\S]*\]/),
              je = X ? X[0] : le;
            ((ie = JSON.parse(je)),
              Array.isArray(ie) || (ie = []),
              (ie = ie
                .slice(0, 8)
                .map((xe, ye) => ({
                  id: `egg_${Date.now()}_${ye}`,
                  type:
                    xe.type ||
                    ["Secret", "BadDeed", "Coupon", "Memory"][ye % 4],
                  name: xe.name || `扭蛋${ye + 1}`,
                  sceneDesc: xe.sceneDesc || "",
                  reason: xe.reason || "",
                  heartVoice: xe.heartVoice || "",
                  ...(p && { about: ye < 4 ? "character" : "user" }),
                }))));
          } catch {}
          if (ie.length > 0) {
            const X = Cb(j, p);
            (await be.set(X, ie), x(ie));
          }
        } catch {
          alert("生成失败，请重试");
        } finally {
          v(!1);
        }
      },
      I = async () => {
        const $ = Cb(j, p),
          P = p && m && g.length >= 2;
        if (g.length < (P ? 2 : 1) || b || !j) return;
        (N(!0),
          P && (M(!0), await new Promise((ne) => setTimeout(ne, 700)), M(!1)),
          await new Promise((ne) => setTimeout(ne, 200)));
        const z = Math.floor(Math.random() * g.length),
          O = g[z];
        let Z = g.filter((ne, le) => le !== z),
          K = null;
        if (P && Z.length > 0) {
          const ne = Math.floor(Math.random() * Z.length);
          ((K = Z[ne]), (Z = Z.filter((le, ie) => ie !== ne)));
        }
        (await be.set($, Z), x(Z));
        const q = await be.get(v1(j), []),
          V = Array.isArray(q) ? [...q] : [];
        if (
          (P &&
            K &&
            V.push({
              ...K,
              id: K.id || `role_${Date.now()}`,
              drawnAt: Date.now(),
            }),
          V.push({ ...O, drawnAt: Date.now() }),
          await be.set(v1(j), V),
          _(P && K ? K : O),
          N(!1),
          P && K && m)
        ) {
          const ne = O;
          (async () => {
            let le = "给你抽到了这个～";
            if (i && a)
              try {
                const je = [
                    {
                      sender: "me",
                      text: `你是${(a == null ? void 0 : a.name) || "角色"}。对方刚抽到了一个扭蛋，物品名：「${ne.name}」。你把这个扭蛋送给对方，请用第一人称、一句话（15字以内）对对方说，要自然可爱。只返回这一句话，不要引号不要解释。`,
                      timestamp: new Date().toISOString(),
                    },
                  ],
                  ye = (
                    (await i(
                      je,
                      a,
                      "system_generation",
                      {},
                      [],
                      [],
                      [],
                      !1,
                      "",
                      (c == null ? void 0 : c(a)) || {},
                    )) || ""
                  )
                    .replace(/^["']|["']$/g, "")
                    .trim().split(`
`)[0];
                ye && ye.length < 30 && (le = ye);
              } catch {}
            const ie = m(r, le, null, "gashapon_card", {
              sender: "them",
              itemName: ne.name,
              itemType: ne.type,
              sceneDesc: ne.sceneDesc,
              reason: ne.reason,
              heartVoice: ne.heartVoice,
            });
            h && setTimeout(() => h(r, !1, "", null, null, ie || void 0), 600);
          })();
        }
      },
      L = () => {
        w && k(!0);
      },
      B = () => {
        (k(!1), _(null), u == null || u());
      },
      F = [
        "ball-pattern-1",
        "ball-pattern-2",
        "ball-pattern-3",
        "ball-pattern-4",
      ];
    if (!t) return null;
    const D = ($, P) =>
      e.jsxs("div", {
        className: `manga-reader-vertical active ${f ? "with-phone-case" : ""}`,
        style: { zIndex: 8e3 },
        children: [
          e.jsx("button", {
            type: "button",
            onClick: P,
            className: "manga-detail-close",
            "aria-label": "关闭",
            children: e.jsx(Ts, { size: 16, strokeWidth: 3 }),
          }),
          e.jsxs("div", {
            className: "manga-scroll-view",
            children: [
              e.jsxs("div", {
                className: "manga-title-block",
                children: [
                  e.jsx("h1", {
                    className: "manga-main-title",
                    children: $.name,
                  }),
                  e.jsx("span", {
                    className: "manga-sub-type",
                    children: bh[$.type] || $.type,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "comic-panel",
                children: [
                  e.jsx("span", { className: "panel-label", children: "01" }),
                  e.jsx("p", {
                    className: "panel-text",
                    children: $.sceneDesc,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "comic-panel panel-reason-style",
                children: [
                  e.jsx("span", { className: "panel-label", children: "02" }),
                  e.jsx("p", { className: "panel-text", children: $.reason }),
                ],
              }),
              e.jsxs("div", {
                className: "comic-panel panel-voice-style",
                children: [
                  e.jsx("span", { className: "panel-label", children: "03" }),
                  e.jsx("p", {
                    className: "panel-text voice-text",
                    children: $.heartVoice,
                  }),
                ],
              }),
              e.jsx("div", { className: "manga-end", children: "— END —" }),
            ],
          }),
        ],
      });
    return A && w
      ? D(w, B)
      : e.jsxs("div", {
          className: `gasha-modal ${E ? "active" : ""} ${f ? "with-phone-case" : ""}`,
          style: { zIndex: 7e3 },
          children: [
            e.jsx("div", {
              className: "title-design-container",
              children: ["命", "运", "扭", "蛋"].map(($, P) =>
                e.jsx("div", { className: "title-block", children: $ }, P),
              ),
            }),
            e.jsx("button", {
              type: "button",
              onClick: s,
              className: "gasha-modal-close",
              "aria-label": "关闭",
              children: e.jsx(Ts, { size: 16, strokeWidth: 3 }),
            }),
            e.jsxs("div", {
              className: "gasha-machine-noir",
              children: [
                e.jsx("div", {
                  className: "sphere-window",
                  children: Array.from({ length: 8 }).map(($, P) => {
                    const z = g[P],
                      O = !z,
                      Z = F[P % 4];
                    return e.jsx(
                      "div",
                      {
                        className: `ball-noir ${O ? "empty" : Z}`,
                        role: "presentation",
                        children: z ? "?" : "",
                      },
                      (z == null ? void 0 : z.id) || `slot-${P}`,
                    );
                  }),
                }),
                e.jsxs("div", {
                  className: "control-panel",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: T,
                      disabled: y,
                      className: "refresh-tag",
                      children: [
                        e.jsx(Or, {
                          size: 14,
                          className: y ? "animate-spin" : "",
                        }),
                        "刷新扭蛋",
                      ],
                    }),
                    e.jsxs("button", {
                      type: "button",
                      onClick: I,
                      disabled: g.length === 0 || b,
                      className: "push-btn",
                      children: [
                        e.jsx(Nl, {
                          size: 14,
                          className: "inline mr-1 -mt-0.5",
                        }),
                        "抽取",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            C &&
              e.jsx("div", {
                className: "gasha-role-drawing-popup",
                children: e.jsx("div", {
                  className: "gasha-role-drawing-inner",
                  children: e.jsxs("span", {
                    className: "gasha-role-drawing-text",
                    children: [
                      (a == null ? void 0 : a.nickname) ||
                        (a == null ? void 0 : a.name) ||
                        "TA",
                      "也在抽取",
                    ],
                  }),
                }),
              }),
            e.jsx("div", {
              className: "gasha-toast-overlay",
              children: e.jsxs("div", {
                className: `gasha-toast-card ${w && !A ? "active" : ""}`,
                onClick: w ? L : void 0,
                role: w ? "button" : "presentation",
                tabIndex: w ? 0 : -1,
                onKeyDown: ($) => w && $.key === "Enter" && L(),
                children: [
                  e.jsx("div", {
                    className: "toast-icon",
                    children: e.jsx(Nl, { size: 16 }),
                  }),
                  e.jsxs("div", {
                    className: "toast-info",
                    children: [
                      e.jsx("span", {
                        className: "toast-title",
                        children: w ? w.name : "—",
                      }),
                      e.jsx("span", {
                        className: "toast-sub",
                        children: w ? "点击查看详情" : "",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
  },
  MW = ({
    show: t,
    onClose: s,
    contact: n,
    chatId: a,
    sendMessage: r,
    triggerAiReply: i,
    showPhoneCase: o = !0,
  }) => {
    const [c, d] = l.useState([]),
      [u, f] = l.useState(null),
      [p, m] = l.useState(!1),
      [h, g] = l.useState(null),
      x = pn.useRef(null),
      y = n == null ? void 0 : n.id;
    (l.useEffect(() => {
      if (t) {
        m(!1);
        const w = setTimeout(() => m(!0), 50);
        return () => clearTimeout(w);
      }
      m(!1);
    }, [t]),
      l.useEffect(() => {
        if (!t || !y) return;
        (async () => {
          const _ = await be.get(v1(y), []);
          d(Array.isArray(_) ? _ : []);
        })();
      }, [t, y]));
    const v = (w) => {
        !a ||
          !r ||
          !i ||
          (r(a, `[扭蛋卡片] ${w.name}`, null, "gashapon_card", {
            itemName: w.name,
            itemType: w.type,
            sceneDesc: w.sceneDesc,
            reason: w.reason,
            heartVoice: w.heartVoice,
          }),
          g(null),
          s(),
          setTimeout(() => i(a), 800));
      },
      b = (w) => {
        if (x.current) {
          (clearTimeout(x.current), (x.current = null));
          return;
        }
        x.current = setTimeout(() => {
          ((x.current = null), f(w));
        }, 250);
      },
      N = (w, _) => {
        (_.preventDefault(),
          _.stopPropagation(),
          x.current && (clearTimeout(x.current), (x.current = null)),
          g(w));
      };
    return t
      ? u
        ? e.jsxs("div", {
            className: `manga-reader-vertical active ${o ? "with-phone-case" : ""}`,
            style: { zIndex: 8e3 },
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => f(null),
                className: "manga-detail-close",
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 16, strokeWidth: 3 }),
              }),
              e.jsxs("div", {
                className: "manga-scroll-view",
                children: [
                  e.jsxs("div", {
                    className: "manga-title-block",
                    children: [
                      e.jsx("h1", {
                        className: "manga-main-title",
                        children: u.name,
                      }),
                      e.jsx("span", {
                        className: "manga-sub-type",
                        children: bh[u.type] || u.type,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "comic-panel",
                    children: [
                      e.jsx("span", {
                        className: "panel-label",
                        children: "01",
                      }),
                      e.jsx("p", {
                        className: "panel-text",
                        children: u.sceneDesc,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "comic-panel panel-reason-style",
                    children: [
                      e.jsx("span", {
                        className: "panel-label",
                        children: "02",
                      }),
                      e.jsx("p", {
                        className: "panel-text",
                        children: u.reason,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "comic-panel panel-voice-style",
                    children: [
                      e.jsx("span", {
                        className: "panel-label",
                        children: "03",
                      }),
                      e.jsx("p", {
                        className: "panel-text voice-text",
                        children: u.heartVoice,
                      }),
                    ],
                  }),
                  e.jsx("div", { className: "manga-end", children: "— END —" }),
                ],
              }),
            ],
          })
        : e.jsxs("div", {
            className: `gasha-backpack-fullscreen ${p ? "active" : ""} ${o ? "with-phone-case" : ""}`,
            children: [
              e.jsxs("div", {
                className: "manga-bag-header",
                children: [
                  e.jsxs("div", {
                    className: "manga-bag-title-row",
                    children: [
                      e.jsx("span", {
                        className: "manga-bag-title-block",
                        children: "背",
                      }),
                      e.jsx("span", {
                        className:
                          "manga-bag-title-block manga-bag-title-block--alt",
                        children: "包",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: s,
                    className: "manga-close-btn",
                    "aria-label": "关闭",
                    children: e.jsx(Ts, { size: 18 }),
                  }),
                ],
              }),
              c.length === 0
                ? e.jsx("div", {
                    className:
                      "flex-1 flex items-center justify-center text-[#8d6e63] text-sm py-12",
                    children: "背包里还没有扭蛋",
                  })
                : e.jsx("div", {
                    className: "manga-bag-grid",
                    children: c.map((w) =>
                      e.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: () => b(w),
                          onDoubleClick: (_) => N(w, _),
                          className: "manga-bag-item",
                          children: [
                            e.jsx("span", {
                              className: "manga-bag-item-icon",
                              children: e.jsx(qE, { size: 20, strokeWidth: 2 }),
                            }),
                            e.jsx("span", {
                              className: "manga-bag-item-name",
                              children: w.name,
                            }),
                            e.jsx("span", {
                              className: "manga-bag-item-type",
                              children: bh[w.type] || w.type,
                            }),
                          ],
                        },
                        w.id || w.drawnAt,
                      ),
                    ),
                  }),
              h &&
                e.jsx("div", {
                  className: "gasha-choice-overlay",
                  onClick: () => g(null),
                  children: e.jsxs("div", {
                    className: "gasha-send-confirm-modal",
                    onClick: (w) => w.stopPropagation(),
                    children: [
                      e.jsxs("p", {
                        className: "gasha-send-confirm-title",
                        children: [
                          "是否发送给",
                          (n == null ? void 0 : n.nickname) ||
                            (n == null ? void 0 : n.name) ||
                            "TA",
                          "？",
                        ],
                      }),
                      e.jsx("p", {
                        className: "gasha-send-confirm-name",
                        children: h.name,
                      }),
                      e.jsxs("div", {
                        className: "gasha-send-confirm-actions",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: () => g(null),
                            className:
                              "gasha-send-confirm-btn gasha-send-confirm-cancel",
                            children: "取消",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => v(h),
                            className:
                              "gasha-send-confirm-btn gasha-send-confirm-ok",
                            children: "发送",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
      : null;
  },
  TW = ({
    show: t,
    onClose: s,
    summaries: n,
    chatId: a,
    generateSummary: r,
    isGenerating: i,
    chat: o,
    allChats: c = [],
    contacts: d = [],
    updateChatSettings: u,
    deleteSummary: f,
    updateSummary: p,
    calculateTokenEstimate: m,
    archives: h = {},
    bindSummaryToArchive: g,
    unbindSummaryFromArchive: x,
    unbindSummaryFromCurrentSession: y,
    removeSummaryFromArchive: v,
    updateSummaryInArchive: b,
    updateArchiveSettings: N,
  }) => {
    var xe, ye, R, oe, ee, H, Y, U, ce, pe;
    const [w, _] = l.useState(!1),
      [A, k] = l.useState({ system: 0, history: 0, total: 0 }),
      [C, M] = l.useState(null),
      [E, S] = l.useState(""),
      [j, T] = l.useState(null),
      [I, L] = l.useState(null),
      [B, F] = l.useState(!1),
      { reduceMotion: D } = Yu();
    if (
      (l.useEffect(() => {
        if (t && m) {
          const se = m(a);
          k(se);
        }
      }, [
        t,
        a,
        m,
        (xe = o == null ? void 0 : o.settings) == null
          ? void 0
          : xe.momentsLimit,
        (ye = o == null ? void 0 : o.settings) == null
          ? void 0
          : ye.contextLimit,
      ]),
      l.useEffect(() => {
        t || (M(null), S(""), T(null), L(null));
      }, [t]),
      !t)
    )
      return null;
    const $ = (o == null ? void 0 : o.currentArchiveId) ?? null,
      P = h[a] || [],
      z = ((o == null ? void 0 : o.memberIds) || [])
        .map((se) => (Array.isArray(d) ? d.find((Te) => Te.id === se) : null))
        .filter(Boolean),
      O =
        (R = o == null ? void 0 : o.settings) != null &&
        R.readSingleChatMemoryByMember &&
        typeof o.settings.readSingleChatMemoryByMember == "object"
          ? o.settings.readSingleChatMemoryByMember
          : {},
      K = (
        $ === null
          ? (() => {
              const se = (n[a] || []).map((ue) => ({
                  ...ue,
                  archiveId: ue.archiveId ?? null,
                })),
                Te = (P || []).flatMap((ue) =>
                  (ue.summaries || []).map((re) => ({
                    ...re,
                    archiveId: re.archiveId ?? ue.id,
                  })),
                ),
                ke = new Set(),
                W = [];
              for (const ue of [...se, ...Te])
                ke.has(ue.id) || (ke.add(ue.id), W.push(ue));
              return (
                W.sort(
                  (ue, re) =>
                    new Date(ue.timestamp || 0) - new Date(re.timestamp || 0),
                ),
                W
              );
            })()
          : ((oe = (P || []).find((se) => se.id === $)) == null
              ? void 0
              : oe.summaries) || []
      ).map((se) => ({ ...se, archiveId: se.archiveId ?? $ })),
      q = (se) =>
        (P || []).filter((Te) =>
          (Te.summaries || []).some((ke) => ke.id === se),
        ),
      V = (se) => (n[a] || []).some((Te) => Te.id === se),
      ne = () => {
        _(!0);
      },
      le = (se) => {
        (_(!1), r(a, se));
      },
      ie = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: D ? 0 : 0.4, ease: "easeOut" },
        },
        exit: { opacity: 0, transition: { duration: D ? 0 : 0.3 } },
      },
      X = {
        hidden: D ? { opacity: 1, y: 0 } : { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: D ? 0 : 0.5, ease: "easeOut" },
        },
      },
      je = "group-summary-limit-input";
    return e.jsxs(We.div, {
      className:
        "absolute inset-0 z-[60] bg-[#FDFBF7] flex flex-col overflow-hidden",
      variants: ie,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      children: [
        e.jsxs("div", {
          className:
            "px-8 pt-16 pb-8 flex justify-between items-start bg-[#FDFBF7] z-20",
          children: [
            e.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("span", { className: "w-8 h-[1px] bg-gray-900" }),
                    e.jsx("p", {
                      className:
                        "text-[10px] font-serif tracking-[0.3em] text-gray-400 uppercase",
                      children: "NEURAL ARCHIVES · 群聊",
                    }),
                  ],
                }),
                e.jsx("h1", {
                  className:
                    "text-5xl font-serif text-gray-900 italic tracking-tight",
                  children: "记忆中枢",
                }),
                e.jsxs("p", {
                  className: "text-[10px] font-mono text-gray-400 mt-1",
                  children: ["ID: ", a.slice(0, 8).toUpperCase()],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => {
                (navigator.vibrate && navigator.vibrate(20), s());
              },
              className:
                "w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 group",
              children: e.jsx(Ts, {
                size: 20,
                className:
                  "group-hover:rotate-90 transition-transform duration-500",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto no-scrollbar px-8 pb-20",
          children: e.jsxs("div", {
            className: "space-y-12",
            children: [
              e.jsxs(We.div, {
                variants: X,
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-white p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden group",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[80px] -mr-6 -mt-6 transition-transform duration-700 group-hover:scale-110",
                      }),
                      e.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-start mb-6",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                                children: "令牌消耗",
                              }),
                              e.jsx(Wr, {
                                size: 16,
                                className: "text-gray-300",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-baseline gap-2 mb-4",
                            children: [
                              e.jsx("span", {
                                className: "text-4xl font-serif text-gray-900",
                                children: A.total,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-gray-400",
                                children: "令牌",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "w-full h-1 bg-gray-100 rounded-full overflow-hidden flex",
                            children: [
                              e.jsx("div", {
                                className: "h-full bg-gray-900",
                                style: {
                                  width: `${A.total ? (A.system / A.total) * 100 : 0}%`,
                                },
                              }),
                              e.jsx("div", {
                                className: "h-full bg-gray-300",
                                style: {
                                  width: `${A.total ? (A.history / A.total) * 100 : 0}%`,
                                },
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-4 mt-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 bg-gray-900 rounded-full",
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] text-gray-500 font-mono",
                                    children: ["系统: ", A.system],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 bg-gray-300 rounded-full",
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] text-gray-500 font-mono",
                                    children: ["历史: ", A.history],
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
                      "bg-gray-900 p-6 text-white shadow-lg flex flex-col justify-between group cursor-pointer relative overflow-hidden",
                    onClick: ne,
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      e.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                            children: "操作",
                          }),
                          e.jsx(wp, { size: 16, className: "text-yellow-400" }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className: "text-xl font-serif italic mb-1",
                            children: "提取记忆档案",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400",
                            children: "将当前对话转化为长期记忆",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "absolute bottom-6 right-6",
                        children: i
                          ? e.jsx(Or, {
                              size: 24,
                              className: "animate-spin text-white",
                            })
                          : e.jsx(wl, {
                              size: 24,
                              className:
                                "text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(We.div, {
                variants: X,
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      e.jsx(Co, { size: 14, className: "text-gray-400" }),
                      e.jsx("span", {
                        className:
                          "text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                        children: "参数",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "bg-white p-6 border border-gray-100 space-y-4",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-2",
                            children: e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-widest text-gray-900 uppercase",
                              children: "读取单聊记忆（按成员）",
                            }),
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-gray-400 leading-relaxed",
                            children:
                              "为每个群成员单独配置：是否在群聊回复时读取该成员与用户的单聊记忆与聊天记录。",
                          }),
                          z.length === 0
                            ? e.jsx("div", {
                                className: "text-[10px] text-gray-400 italic",
                                children: "暂无群成员",
                              })
                            : e.jsx("div", {
                                className: "space-y-3",
                                children: z.map((se) => {
                                  const Te = se.id,
                                    ke = (O == null ? void 0 : O[Te]) || {},
                                    W = !!ke.enabled,
                                    ue = ke.chatId || "",
                                    re = ke.rounds || 10,
                                    he = (Array.isArray(c) ? c : []).filter(
                                      (J) =>
                                        J &&
                                        !J.isGroup &&
                                        J.contactId != null &&
                                        String(J.contactId) === String(Te),
                                    ),
                                    ge =
                                      se.remark ||
                                      se.nickname ||
                                      se.name ||
                                      "成员";
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "border border-gray-100 bg-gray-50/40 p-4",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center justify-between gap-4",
                                          children: [
                                            e.jsxs("div", {
                                              className: "min-w-0",
                                              children: [
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm font-serif text-gray-900 truncate",
                                                  children: [
                                                    ge,
                                                    e.jsxs("span", {
                                                      className:
                                                        "text-[10px] text-gray-400 font-mono ml-2",
                                                      children: [
                                                        "(",
                                                        String(Te).slice(0, 6),
                                                        ")",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("p", {
                                                  className:
                                                    "text-[10px] text-gray-400 mt-1",
                                                  children:
                                                    "读取该成员对应单聊的记忆与最近对话",
                                                }),
                                              ],
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                const J = { ...(O || {}) };
                                                ((J[Te] = {
                                                  ...(J[Te] || {}),
                                                  enabled: !W,
                                                }),
                                                  u(a, {
                                                    readSingleChatMemoryByMember:
                                                      J,
                                                  }));
                                              },
                                              className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${W ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                              children: W ? "已开启" : "未开启",
                                            }),
                                          ],
                                        }),
                                        W &&
                                          e.jsxs("div", {
                                            className:
                                              "pt-4 mt-3 border-t border-gray-100 space-y-3",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between gap-3",
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] font-mono text-gray-500",
                                                    children: "选择单聊窗口",
                                                  }),
                                                  e.jsxs("select", {
                                                    value: ue,
                                                    onChange: (J) => {
                                                      const G = {
                                                        ...(O || {}),
                                                      };
                                                      ((G[Te] = {
                                                        ...(G[Te] || {}),
                                                        chatId: J.target.value,
                                                      }),
                                                        u(a, {
                                                          readSingleChatMemoryByMember:
                                                            G,
                                                        }));
                                                    },
                                                    className:
                                                      "flex-1 ml-3 bg-white border border-gray-200 px-2 py-2 text-xs outline-none focus:border-gray-900 font-serif text-gray-800",
                                                    children: [
                                                      e.jsx("option", {
                                                        value: "",
                                                        children: "（未选择）",
                                                      }),
                                                      he.map((J) =>
                                                        e.jsxs(
                                                          "option",
                                                          {
                                                            value: J.id,
                                                            children: [
                                                              ge,
                                                              " (",
                                                              String(
                                                                J.id,
                                                              ).slice(0, 6),
                                                              ")",
                                                            ],
                                                          },
                                                          J.id,
                                                        ),
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center justify-between gap-3",
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] font-mono text-gray-500",
                                                    children: "读取轮数",
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      e.jsx("input", {
                                                        type: "number",
                                                        min: "1",
                                                        max: "200",
                                                        value: re,
                                                        onChange: (J) => {
                                                          const G = Math.max(
                                                              1,
                                                              Math.min(
                                                                200,
                                                                parseInt(
                                                                  J.target
                                                                    .value,
                                                                ) || 10,
                                                              ),
                                                            ),
                                                            we = {
                                                              ...(O || {}),
                                                            };
                                                          ((we[Te] = {
                                                            ...(we[Te] || {}),
                                                            rounds: G,
                                                          }),
                                                            u(a, {
                                                              readSingleChatMemoryByMember:
                                                                we,
                                                            }));
                                                        },
                                                        className:
                                                          "w-16 bg-white border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-[10px] font-mono text-gray-400",
                                                        children: "回合",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      ],
                                    },
                                    Te,
                                  );
                                }),
                              }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-white p-6 border border-gray-100 flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                children: "朋友圈读取范围",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-gray-400",
                                children: "AI 参考的最近动态数量",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("input", {
                                type: "number",
                                value:
                                  ((ee = o == null ? void 0 : o.settings) ==
                                  null
                                    ? void 0
                                    : ee.momentsLimit) || 5,
                                onChange: (se) =>
                                  u(a, {
                                    momentsLimit: parseInt(se.target.value),
                                  }),
                                className:
                                  "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-gray-400",
                                children: "条",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-white p-6 border border-gray-100 flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                children: "短期记忆容量",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-gray-400",
                                children:
                                  "AI 记住的历史回合数（用户一发 + AI 一回 = 一回合）",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("input", {
                                type: "number",
                                value:
                                  ((H = o == null ? void 0 : o.settings) == null
                                    ? void 0
                                    : H.contextLimit) || 50,
                                onChange: (se) =>
                                  u(a, {
                                    contextLimit: parseInt(se.target.value),
                                  }),
                                className:
                                  "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-gray-400",
                                children: "回合",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "bg-white p-6 border border-gray-100",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                    children: "自动归档",
                                  }),
                                  e.jsx("p", {
                                    className: "text-[10px] text-gray-400",
                                    children: "定期自动生成记忆档案",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => {
                                  var se;
                                  return u(a, {
                                    autoSummaryEnabled: !(
                                      (se = o == null ? void 0 : o.settings) !=
                                        null && se.autoSummaryEnabled
                                    ),
                                  });
                                },
                                className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(Y = o == null ? void 0 : o.settings) != null && Y.autoSummaryEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                children:
                                  (U = o == null ? void 0 : o.settings) !=
                                    null && U.autoSummaryEnabled
                                    ? "已开启"
                                    : "未开启",
                              }),
                            ],
                          }),
                          ((ce = o == null ? void 0 : o.settings) == null
                            ? void 0
                            : ce.autoSummaryEnabled) &&
                            e.jsxs("div", {
                              className:
                                "pt-4 border-t border-gray-50 flex items-center justify-between animate-in slide-in-from-top-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-mono text-gray-500",
                                  children: "触发阈值",
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-[10px] text-gray-400",
                                      children: "每",
                                    }),
                                    e.jsx("input", {
                                      type: "number",
                                      value:
                                        ((pe =
                                          o == null ? void 0 : o.settings) ==
                                        null
                                          ? void 0
                                          : pe.summaryThreshold) || 10,
                                      onChange: (se) =>
                                        u(a, {
                                          summaryThreshold: parseInt(
                                            se.target.value,
                                          ),
                                        }),
                                      className:
                                        "w-12 bg-transparent border-b border-gray-300 focus:border-gray-900 text-center font-mono text-sm outline-none transition-colors",
                                    }),
                                    e.jsx("span", {
                                      className: "text-[10px] text-gray-400",
                                      children: "回合触发",
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
              e.jsxs(We.div, {
                variants: X,
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx(Wl, { size: 14, className: "text-gray-400" }),
                          e.jsx("span", {
                            className:
                              "text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                            children: "档案流",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => F((se) => !se),
                        className:
                          "w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[10px] text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors",
                        title: "档案流说明",
                        children: "?",
                      }),
                    ],
                  }),
                  B &&
                    e.jsx("div", {
                      className:
                        "text-[10px] text-gray-500 leading-relaxed bg-gray-50 border border-gray-100 rounded-lg p-3",
                      children:
                        "线上总结以记忆为中心。提取记忆后，可为每条记忆选择绑定到「当前会话」或指定线上存档（点击每条记忆的「绑定到存档」）。",
                    }),
                  e.jsx("div", {
                    className: "space-y-4",
                    children:
                      K.length === 0
                        ? e.jsx("div", {
                            className:
                              "flex flex-col items-center justify-center py-12 border border-gray-200 border-dashed bg-gray-50/50",
                            children: e.jsx("span", {
                              className:
                                "text-[10px] font-mono text-gray-400 uppercase tracking-widest",
                              children: "暂无数据",
                            }),
                          })
                        : e.jsx("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: K.map((se, Te) =>
                              e.jsxs(
                                We.div,
                                {
                                  initial: { opacity: 0, y: 20 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: { delay: Te * 0.05 },
                                  className:
                                    "bg-white border border-gray-200 p-5 relative group hover:shadow-lg transition-all duration-300",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute top-0 left-0 bottom-0 w-1 bg-gray-900",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute top-2 right-2 flex gap-1",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-1 h-1 bg-gray-300 rounded-full",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-1 h-1 bg-gray-300 rounded-full",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-1 h-1 bg-gray-300 rounded-full",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "pl-3",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex justify-between items-start mb-3",
                                          children: [
                                            e.jsxs("div", {
                                              children: [
                                                e.jsxs("span", {
                                                  className:
                                                    "text-[10px] font-mono text-gray-400 block mb-1",
                                                  children: [
                                                    new Date(
                                                      se.timestamp,
                                                    ).toLocaleDateString(),
                                                    " ",
                                                    new Date(
                                                      se.timestamp,
                                                    ).toLocaleTimeString(),
                                                  ],
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[10px] font-bold tracking-widest text-gray-900 uppercase bg-gray-100 px-1",
                                                  children: se.range,
                                                }),
                                                g &&
                                                  (() => {
                                                    const ke = V(se.id),
                                                      W = q(se.id);
                                                    if (!ke && W.length === 0)
                                                      return null;
                                                    const ue = [];
                                                    return (
                                                      ke && ue.push("当前会话"),
                                                      W.forEach((re) =>
                                                        ue.push(re.name),
                                                      ),
                                                      e.jsxs("span", {
                                                        className:
                                                          "text-[10px] text-gray-500 mt-1 block",
                                                        children: [
                                                          "已绑定: ",
                                                          ue.join("、"),
                                                        ],
                                                      })
                                                    );
                                                  })(),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "relative flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                              children:
                                                C !== se.id
                                                  ? e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsx("button", {
                                                          onClick: (ke) => {
                                                            (ke.stopPropagation(),
                                                              T(
                                                                j === se.id
                                                                  ? null
                                                                  : se.id,
                                                              ),
                                                              L(null));
                                                          },
                                                          className:
                                                            "p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors",
                                                          title: "更多",
                                                          children: e.jsx(Ih, {
                                                            size: 16,
                                                          }),
                                                        }),
                                                        j === se.id &&
                                                          e.jsxs(e.Fragment, {
                                                            children: [
                                                              e.jsx("div", {
                                                                className:
                                                                  "fixed inset-0 z-10",
                                                                onClick: () => {
                                                                  (T(null),
                                                                    L(null));
                                                                },
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "absolute right-0 top-6 z-20 min-w-[140px] bg-white border border-gray-200 rounded-lg shadow-lg py-1 text-left",
                                                                children: [
                                                                  e.jsxs(
                                                                    "button",
                                                                    {
                                                                      onClick:
                                                                        () => {
                                                                          (M(
                                                                            se.id,
                                                                          ),
                                                                            S(
                                                                              se.content ||
                                                                                "",
                                                                            ),
                                                                            T(
                                                                              null,
                                                                            ));
                                                                        },
                                                                      className:
                                                                        "w-full px-3 py-2 text-left text-[12px] text-gray-700 hover:bg-gray-50 flex items-center gap-2",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            _l,
                                                                            {
                                                                              size: 12,
                                                                            },
                                                                          ),
                                                                          "编辑",
                                                                        ],
                                                                    },
                                                                  ),
                                                                  g &&
                                                                    e.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "relative",
                                                                        children:
                                                                          [
                                                                            e.jsxs(
                                                                              "button",
                                                                              {
                                                                                onClick:
                                                                                  () =>
                                                                                    L(
                                                                                      I ===
                                                                                        se.id
                                                                                        ? null
                                                                                        : se.id,
                                                                                    ),
                                                                                className:
                                                                                  "w-full px-3 py-2 text-left text-[12px] text-gray-700 hover:bg-gray-50 flex items-center justify-between",
                                                                                children:
                                                                                  [
                                                                                    "绑定到存档",
                                                                                    e.jsx(
                                                                                      aa,
                                                                                      {
                                                                                        size: 12,
                                                                                        className: `transition-transform ${I === se.id ? "rotate-180" : ""}`,
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            I ===
                                                                              se.id &&
                                                                              e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "bg-gray-50 border-t border-gray-100 py-1 max-h-40 overflow-y-auto",
                                                                                  children:
                                                                                    [
                                                                                      e.jsxs(
                                                                                        "button",
                                                                                        {
                                                                                          onClick:
                                                                                            () => {
                                                                                              (V(
                                                                                                se.id,
                                                                                              ) &&
                                                                                              y
                                                                                                ? y(
                                                                                                    a,
                                                                                                    se.id,
                                                                                                  )
                                                                                                : g(
                                                                                                    a,
                                                                                                    se.id,
                                                                                                    null,
                                                                                                  ),
                                                                                                T(
                                                                                                  null,
                                                                                                ),
                                                                                                L(
                                                                                                  null,
                                                                                                ));
                                                                                            },
                                                                                          className: `w-full px-3 py-1.5 text-left text-[11px] hover:bg-gray-100 flex items-center justify-between ${V(se.id) ? "text-gray-900 font-medium" : "text-gray-600"}`,
                                                                                          children:
                                                                                            [
                                                                                              "当前会话",
                                                                                              V(
                                                                                                se.id,
                                                                                              ) &&
                                                                                                e.jsx(
                                                                                                  "span",
                                                                                                  {
                                                                                                    className:
                                                                                                      "text-[10px]",
                                                                                                    children:
                                                                                                      "✓ 已绑定",
                                                                                                  },
                                                                                                ),
                                                                                            ],
                                                                                        },
                                                                                      ),
                                                                                      P.map(
                                                                                        (
                                                                                          ke,
                                                                                        ) => {
                                                                                          const W =
                                                                                            (
                                                                                              ke.summaries ||
                                                                                              []
                                                                                            ).some(
                                                                                              (
                                                                                                ue,
                                                                                              ) =>
                                                                                                ue.id ===
                                                                                                se.id,
                                                                                            );
                                                                                          return e.jsxs(
                                                                                            "button",
                                                                                            {
                                                                                              onClick:
                                                                                                () => {
                                                                                                  (W &&
                                                                                                  x
                                                                                                    ? x(
                                                                                                        a,
                                                                                                        ke.id,
                                                                                                        se.id,
                                                                                                      )
                                                                                                    : g(
                                                                                                        a,
                                                                                                        se.id,
                                                                                                        ke.id,
                                                                                                      ),
                                                                                                    T(
                                                                                                      null,
                                                                                                    ),
                                                                                                    L(
                                                                                                      null,
                                                                                                    ));
                                                                                                },
                                                                                              className: `w-full px-3 py-1.5 text-left text-[11px] hover:bg-gray-100 flex items-center justify-between ${W ? "text-gray-900 font-medium" : "text-gray-600"}`,
                                                                                              children:
                                                                                                [
                                                                                                  ke.name,
                                                                                                  W &&
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "text-[10px]",
                                                                                                        children:
                                                                                                          "✓ 已绑定",
                                                                                                      },
                                                                                                    ),
                                                                                                ],
                                                                                            },
                                                                                            ke.id,
                                                                                          );
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                  e.jsxs(
                                                                    "button",
                                                                    {
                                                                      onClick:
                                                                        () => {
                                                                          (confirm(
                                                                            "确定销毁这份档案吗？",
                                                                          ) &&
                                                                            (v &&
                                                                              q(
                                                                                se.id,
                                                                              ).forEach(
                                                                                (
                                                                                  ke,
                                                                                ) =>
                                                                                  v(
                                                                                    a,
                                                                                    ke.id,
                                                                                    se.id,
                                                                                  ),
                                                                              ),
                                                                            f(
                                                                              a,
                                                                              se.id,
                                                                            )),
                                                                            T(
                                                                              null,
                                                                            ),
                                                                            L(
                                                                              null,
                                                                            ));
                                                                        },
                                                                      className:
                                                                        "w-full px-3 py-2 text-left text-[12px] text-red-500 hover:bg-red-50 flex items-center gap-2",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            _n,
                                                                            {
                                                                              size: 12,
                                                                            },
                                                                          ),
                                                                          "删除",
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                      ],
                                                    })
                                                  : null,
                                            }),
                                          ],
                                        }),
                                        C === se.id
                                          ? e.jsxs("div", {
                                              className: "space-y-3",
                                              children: [
                                                e.jsx("textarea", {
                                                  value: E,
                                                  onChange: (ke) =>
                                                    S(ke.target.value),
                                                  className:
                                                    "w-full min-h-[120px] p-3 text-xs text-gray-600 leading-relaxed font-serif border border-gray-200 focus:border-gray-900 outline-none resize-y bg-gray-50/50",
                                                  placeholder:
                                                    "编辑记忆摘要内容...",
                                                  autoFocus: !0,
                                                }),
                                                e.jsxs("div", {
                                                  className: "flex gap-2",
                                                  children: [
                                                    e.jsxs("button", {
                                                      onClick: () => {
                                                        E.trim() &&
                                                          (se.archiveId && b
                                                            ? b(
                                                                a,
                                                                se.archiveId,
                                                                se.id,
                                                                E.trim(),
                                                              )
                                                            : p(
                                                                a,
                                                                se.id,
                                                                E.trim(),
                                                              ),
                                                          M(null),
                                                          S(""));
                                                      },
                                                      className:
                                                        "flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-black transition-colors",
                                                      children: [
                                                        e.jsx(oo, { size: 12 }),
                                                        "保存",
                                                      ],
                                                    }),
                                                    e.jsx("button", {
                                                      onClick: () => {
                                                        (M(null), S(""));
                                                      },
                                                      className:
                                                        "px-3 py-1.5 border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase hover:border-gray-900 hover:text-gray-900 transition-colors",
                                                      children: "取消",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            })
                                          : e.jsx("p", {
                                              className:
                                                "text-xs text-gray-600 leading-relaxed font-serif text-justify line-clamp-4 group-hover:line-clamp-none transition-all",
                                              children: se.content,
                                            }),
                                      ],
                                    }),
                                  ],
                                },
                                se.id,
                              ),
                            ),
                          }),
                  }),
                ],
              }),
            ],
          }),
        }),
        w &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-20 bg-black/20 backdrop-blur-sm flex items-end animate-in fade-in duration-200",
            onClick: () => _(!1),
            children: e.jsxs("div", {
              className:
                "w-full bg-white p-8 space-y-6 animate-in slide-in-from-bottom duration-300",
              onClick: (se) => se.stopPropagation(),
              children: [
                e.jsx("h3", {
                  className:
                    "text-center text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                  children: "选择提取范围",
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 bg-gray-50 p-4 border border-gray-100",