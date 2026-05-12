                      children: e.jsxs("div", {
                        className:
                          "relative mx-auto w-full max-h-[min(72vh,560px)] overflow-hidden rounded-[1.35rem] border border-rose-100/90 bg-[#fffdf8] shadow-[0_-16px_48px_rgba(45,35,40,0.12)]",
                        onClick: (bs) => bs.stopPropagation(),
                        style: {
                          backgroundImage:
                            "radial-gradient(rgba(236,72,153,0.06) 1px, transparent 1px), radial-gradient(rgba(139,92,246,0.05) 1px, transparent 1px)",
                          backgroundSize: "14px 14px, 18px 18px",
                          backgroundPosition: "0 0, 7px 9px",
                        },
                        children: [
                          e.jsx("div", {
                            className:
                              "pointer-events-none absolute left-8 right-8 top-0 h-4 -translate-y-1/2 rounded-sm bg-gradient-to-r from-rose-200/85 via-pink-100/75 to-violet-100/80 opacity-95 shadow-sm",
                          }),
                          e.jsxs("div", {
                            className:
                              "max-h-[min(72vh,560px)] overflow-y-auto px-4 pb-5 pt-7",
                            children: [
                              e.jsx("p", {
                                className:
                                  "mb-1 text-center font-serif text-[11px] font-medium tracking-[0.35em] text-rose-900/55",
                                children: "HAND · 备选",
                              }),
                              e.jsx("p", {
                                className:
                                  "mb-4 text-center text-[13px] font-medium text-stone-700/90",
                                children: "挑一句留在气泡里",
                              }),
                              It !== 0 &&
                                e.jsxs("button", {
                                  type: "button",
                                  className:
                                    "mb-3 w-full rounded-2xl border border-dashed border-rose-200/80 bg-white/70 px-3 py-2.5 text-left text-[12px] text-stone-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition active:scale-[0.99]",
                                  onClick: () => Xt(0),
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "mb-0.5 block text-[10px] font-medium tracking-wide text-rose-400/90",
                                      children: "① 第一句",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "line-clamp-3 whitespace-pre-wrap break-words text-stone-700",
                                      children: nt[0],
                                    }),
                                  ],
                                }),
                              [1, 2].map((bs) =>
                                e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => Xt(bs),
                                    className: `mb-2 w-full rounded-2xl border px-3 py-3 text-left text-[13px] leading-relaxed shadow-sm transition active:scale-[0.99] ${It === bs ? "border-rose-300/90 bg-white ring-2 ring-rose-200/80" : "border-stone-100/90 bg-white/85 hover:border-rose-100"}`,
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "mb-1 block text-[10px] font-medium tracking-wide text-violet-400/90",
                                        children:
                                          bs === 1 ? "② 备选一" : "③ 备选二",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "whitespace-pre-wrap break-words text-stone-800/95",
                                        children: nt[bs],
                                      }),
                                    ],
                                  },
                                  bs,
                                ),
                              ),
                            ],
                          }),
                        ],
                      }),
                    });
                  })()
                : null,
              document.body,
            ),
        ],
      });
    },
  );
OA.displayName = "MessageList";
const iW = ({
    handleRegenerate: t,
    onTimeAdvanceClick: s,
    setShowTools: n,
    setShowTransferModal: a,
    onTransferClick: r,
    setShowRedPacketModal: i,
    setShowAlbumMenu: o,
    setShowVoiceModal: c,
    startVideoCall: d,
    contact: u,
    chat: f,
    setShowMemePanel: p,
    handleFoodOrderClick: m,
    setShowArchivePanel: h,
    onGashaponClick: g,
    onBackpackClick: x,
    onPasswordClick: y,
    onPollClick: v,
    onRelayClick: b,
  }) => {
    var _;
    if ((u == null ? void 0 : u.isBuiltinHelpAssistant) === !0) return null;
    const N = (f == null ? void 0 : f.isGroup) === !0,
      w =
        !((_ = f == null ? void 0 : f.settings) != null && _.realTime) &&
        typeof s == "function";
    return e.jsxs("div", {
      className: "tool-panel animate-in slide-in-from-bottom duration-300",
      children: [
        e.jsxs("div", {
          className: "flex gap-6 overflow-x-auto no-scrollbar pb-2",
          children: [
            e.jsxs("button", {
              onClick: t,
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(Or, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", {
                  className: "tool-label",
                  children: "重新生成",
                }),
              ],
            }),
            w &&
              e.jsxs("button", {
                onClick: () => {
                  (n(!1), s());
                },
                className: "tool-item group",
                children: [
                  e.jsx("div", {
                    className: "tool-icon-container group-active:scale-95",
                    children: e.jsx(Dr, { size: 24, className: "tool-icon" }),
                  }),
                  e.jsx("span", { className: "tool-label", children: "推进" }),
                ],
              }),
            e.jsxs("button", {
              onClick: () => {
                (n(!1), r ? r() : a(!0));
              },
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(zm, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", { className: "tool-label", children: "转账" }),
              ],
            }),
            N &&
              e.jsxs("button", {
                onClick: () => {
                  (n(!1), i == null || i(!0));
                },
                className: "tool-item group",
                children: [
                  e.jsx("div", {
                    className: "tool-icon-container group-active:scale-95",
                    children: e.jsx(Nl, { size: 24, className: "tool-icon" }),
                  }),
                  e.jsx("span", { className: "tool-label", children: "红包" }),
                ],
              }),
            e.jsxs("button", {
              onClick: () => o(!0),
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(Za, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", { className: "tool-label", children: "相册" }),
              ],
            }),
            e.jsxs("button", {
              onClick: () => {
                (n(!1), c(!0));
              },
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(hl, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", { className: "tool-label", children: "语音" }),
              ],
            }),
            e.jsxs("button", {
              onClick: () => {
                (n(!1), d(f == null ? void 0 : f.id));
              },
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(Vl, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", {
                  className: "tool-label",
                  children: "视频通话",
                }),
              ],
            }),
            N &&
              v &&
              e.jsxs("button", {
                onClick: () => {
                  (n(!1), v());
                },
                className: "tool-item group",
                children: [
                  e.jsx("div", {
                    className: "tool-icon-container group-active:scale-95",
                    children: e.jsx(ST, { size: 24, className: "tool-icon" }),
                  }),
                  e.jsx("span", { className: "tool-label", children: "投票" }),
                ],
              }),
            N &&
              b &&
              e.jsxs("button", {
                onClick: () => {
                  (n(!1), b());
                },
                className: "tool-item group",
                children: [
                  e.jsx("div", {
                    className: "tool-icon-container group-active:scale-95",
                    children: e.jsx(bE, { size: 24, className: "tool-icon" }),
                  }),
                  e.jsx("span", { className: "tool-label", children: "接龙" }),
                ],
              }),
            e.jsxs("button", {
              onClick: () => {
                (n(!1), p(!0));
              },
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(c3, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", { className: "tool-label", children: "表情包" }),
              ],
            }),
            e.jsxs("button", {
              onClick: m,
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(Dh, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", { className: "tool-label", children: "点餐" }),
              ],
            }),
            e.jsxs("button", {
              onClick: () => {
                (n(!1), h(!0));
              },
              className: "tool-item group",
              children: [
                e.jsx("div", {
                  className: "tool-icon-container group-active:scale-95",
                  children: e.jsx(Ko, { size: 24, className: "tool-icon" }),
                }),
                e.jsx("span", { className: "tool-label", children: "档案" }),
              ],
            }),
            !N &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("button", {
                    onClick: () => {
                      (n(!1), g == null || g());
                    },
                    className: "tool-item group",
                    children: [
                      e.jsx("div", {
                        className: "tool-icon-container group-active:scale-95",
                        children: e.jsx(Nl, {
                          size: 24,
                          className: "tool-icon",
                        }),
                      }),
                      e.jsx("span", {
                        className: "tool-label",
                        children: "扭蛋机",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => {
                      (n(!1), x == null || x());
                    },
                    className: "tool-item group",
                    children: [
                      e.jsx("div", {
                        className: "tool-icon-container group-active:scale-95",
                        children: e.jsx(sT, {
                          size: 24,
                          className: "tool-icon",
                        }),
                      }),
                      e.jsx("span", {
                        className: "tool-label",
                        children: "背包",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => {
                      (n(!1), y == null || y());
                    },
                    className: "tool-item group",
                    children: [
                      e.jsx("div", {
                        className: "tool-icon-container group-active:scale-95",
                        children: e.jsx(lr, {
                          size: 24,
                          className: "tool-icon",
                        }),
                      }),
                      e.jsx("span", {
                        className: "tool-label",
                        children: "密码",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0e0e0] rounded-full cursor-pointer",
          onClick: () => n(!1),
        }),
      ],
    });
  },
  oW = ({
    show: t,
    onClose: s,
    isCreatingArchive: n,
    setIsCreatingArchive: a,
    newArchiveName: r,
    setNewArchiveName: i,
    handleCreateArchive: o,
    archives: c,
    chatId: d,
    deleteArchive: u,
    handleLoadArchive: f,
    openingSets: p = [],
    selectedOpeningId: m,
    onStartWithOpening: h,
  }) => {
    if (!t) return null;
    const g = Array.isArray(p) && p.length > 0;
    return e.jsx("div", {
      className:
        "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-200",
      onClick: s,
      children: e.jsxs("div", {
        className:
          "w-full h-[70vh] bg-[#fffcf7] rounded-t-[32px] p-6 animate-in slide-in-from-bottom duration-300 shadow-2xl border-t border-white/50 flex flex-col",
        onClick: (x) => x.stopPropagation(),
        children: [
          e.jsx("div", {
            className: "flex justify-center mb-4",
            onClick: s,
            children: e.jsx("div", {
              className: "w-12 h-1 bg-gray-200 rounded-full cursor-pointer",
            }),
          }),
          e.jsxs("div", {
            className: "mb-6 flex items-center justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-bold text-[#5d4037]",
                    children: "聊天存档",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-gray-400",
                    children: "封存当前对话，开启新的篇章",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: () => a(!0),
                className:
                  "p-2 bg-[#8d6e63] text-white rounded-full shadow-md hover:bg-[#795548] transition-colors",
                children: e.jsx(ea, { size: 20 }),
              }),
            ],
          }),
          g &&
            h &&
            e.jsxs("div", {
              className:
                "mb-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm",
              children: [
                e.jsxs("h4", {
                  className:
                    "text-sm font-bold text-[#5d4037] mb-2 flex items-center gap-2",
                  children: [e.jsx(Ar, { size: 14 }), "选择开场白"],
                }),
                e.jsx("p", {
                  className: "text-[10px] text-gray-400 mb-3",
                  children:
                    "点击后将以该组开场白开始新对话；当前有内容会提示是否先封存",
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: p.map(({ id: x, name: y }) =>
                    e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => h(x),
                        className: `px-3 py-2 rounded-xl text-xs font-medium transition-colors ${m === x ? "bg-[#8d6e63] text-white shadow-sm" : "bg-gray-100 text-[#5d4037] hover:bg-[#e8e6e0]"}`,
                        children: y || "未命名",
                      },
                      x,
                    ),
                  ),
                }),
              ],
            }),
          n &&
            e.jsxs("div", {
              className:
                "mb-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm animate-in slide-in-from-top-2",
              children: [
                e.jsx("h4", {
                  className: "text-sm font-bold text-[#5d4037] mb-3",
                  children: "新建存档",
                }),
                e.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-2",
                  children: [
                    e.jsx("input", {
                      type: "text",
                      value: r,
                      onChange: (x) => i(x.target.value),
                      placeholder: "给存档起个名字...",
                      className:
                        "flex-1 min-w-0 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037]",
                      autoFocus: !0,
                    }),
                    e.jsx("button", {
                      onClick: o,
                      className:
                        "px-4 py-2 bg-[#8d6e63] text-white rounded-xl text-sm font-bold shadow-sm hover:bg-[#795548] shrink-0",
                      children: "封存",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-[10px] text-gray-400 mt-2 ml-1",
                  children: "注意：封存后，当前聊天界面将被清空。",
                }),
              ],
            }),
          e.jsx("div", {
            className: "flex-1 overflow-y-auto no-scrollbar space-y-3 pb-6",
            children:
              (c[d] || []).length === 0
                ? e.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center h-40 text-gray-300 gap-2",
                    children: [
                      e.jsx(Ko, { size: 32, className: "opacity-50" }),
                      e.jsx("span", {
                        className: "text-xs",
                        children: "暂无存档",
                      }),
                    ],
                  })
                : (c[d] || []).map((x) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group relative",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-start mb-2",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 rounded-full bg-[#f2f0ea] flex items-center justify-center text-[#8d6e63]",
                                    children: e.jsx(Ko, { size: 16 }),
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h4", {
                                        className:
                                          "text-sm font-bold text-[#5d4037]",
                                        children: x.name,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] text-gray-400 font-mono",
                                        children: new Date(
                                          x.timestamp,
                                        ).toLocaleString(),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                onClick: (y) => {
                                  (y.stopPropagation(),
                                    confirm("确定删除该存档吗？") &&
                                      u(d, x.id));
                                },
                                className:
                                  "p-1.5 text-gray-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors",
                                children: e.jsx(_n, { size: 14 }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "bg-gray-50 rounded-lg p-2 mb-3",
                            children: e.jsx("p", {
                              className:
                                "text-xs text-gray-500 line-clamp-2 italic",
                              children: x.lastMessage || "无预览内容",
                            }),
                          }),
                          e.jsxs("button", {
                            onClick: () => f(x.id),
                            className:
                              "w-full py-2 bg-[#f2f0ea] text-[#8d6e63] rounded-xl text-xs font-bold hover:bg-[#e8e6e0] transition-colors flex items-center justify-center gap-1",
                            children: [e.jsx(Or, { size: 12 }), "读取存档"],
                          }),
                        ],
                      },
                      x.id,
                    ),
                  ),
          }),
        ],
      }),
    });
  },
  lW = ({ show: t, onClose: s, onConfirm: n, onArchiveFirst: a }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative",
            children: [
              e.jsx("h3", {
                className: "text-lg font-bold text-[#5d4037] mb-2 text-center",
                children: "未保存的对话",
              }),
              e.jsxs("p", {
                className:
                  "text-sm text-gray-500 text-center mb-6 leading-relaxed",
                children: [
                  "当前聊天界面有正在进行的对话。直接读取存档将导致这些内容丢失。",
                  e.jsx("br", {}),
                  "建议先将当前对话封存。",
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  e.jsx("button", {
                    onClick: a,
                    className:
                      "w-full py-3 bg-[#8d6e63] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#795548] transition-colors",
                    children: "去存档",
                  }),
                  e.jsx("button", {
                    onClick: n,
                    className:
                      "w-full py-3 bg-white border border-red-200 text-red-400 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors",
                    children: "不保存，直接覆盖",
                  }),
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "w-full py-3 text-gray-400 text-sm font-medium hover:text-gray-600",
                    children: "取消",
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  cW = ({ show: t, onClose: s, onArchiveFirst: n, onOverwrite: a }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative",
            children: [
              e.jsx("h3", {
                className: "text-lg font-bold text-[#5d4037] mb-2 text-center",
                children: "当前有对话内容",
              }),
              e.jsxs("p", {
                className:
                  "text-sm text-gray-500 text-center mb-6 leading-relaxed",
                children: [
                  "以所选开场白开始新对话将清空当前内容。",
                  e.jsx("br", {}),
                  "请先封存当前对话，或直接覆盖。",
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  e.jsx("button", {
                    onClick: n,
                    className:
                      "w-full py-3 bg-[#8d6e63] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#795548] transition-colors",
                    children: "先封存再开始",
                  }),
                  e.jsx("button", {
                    onClick: a,
                    className:
                      "w-full py-3 bg-white border border-red-200 text-red-400 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors",
                    children: "直接覆盖",
                  }),
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "w-full py-3 text-gray-400 text-sm font-medium hover:text-gray-600",
                    children: "取消",
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  dW = ({
    show: t,
    onClose: s,
    callHistory: n,
    onSelectCall: a,
    toggleCallMemoryMode: r,
    onSummarizeCall: i,
    onDeleteCall: o,
  }) => {
    const c = pn.useRef(null),
      d = pn.useRef(!1),
      [u, f] = pn.useState(null),
      p = (g) => {
        ((d.current = !1),
          (c.current = setTimeout(() => {
            ((d.current = !0), confirm("确定要删除这条记录吗？") && o(g));
          }, 800)));
      },
      m = () => {
        c.current && clearTimeout(c.current);
      },
      h = (g) => {
        d.current || a(g);
      };
    return t
      ? e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: { type: "spring", stiffness: 300, damping: 30 },
          className:
            "absolute inset-0 z-50 bg-[#F9F8F6] flex flex-col font-serif",
          children: [
            e.jsx("div", {
              className: "pt-14 pb-6 px-8 bg-[#F9F8F6] z-10",
              children: e.jsxs("div", {
                className: "flex justify-between items-end mb-8",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx(We.h1, {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        className:
                          "text-4xl text-[#2C2C2C] font-light tracking-tight italic",
                        children: "通话记录",
                      }),
                      e.jsx(We.p, {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.1 },
                        className:
                          "text-xs text-[#8C8C8C] mt-2 font-sans tracking-widest uppercase",
                        children: "视频通话记录",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "text-[#2C2C2C] hover:opacity-50 transition-opacity mb-2",
                    children: e.jsx("span", {
                      className:
                        "text-xs font-sans uppercase tracking-widest border-b border-[#2C2C2C]",
                      children: "关闭",
                    }),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto px-4 pb-8 custom-scrollbar",
              children: e.jsx("div", {
                className: "space-y-3",
                children:
                  (n || []).length === 0
                    ? e.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center py-20 text-[#B0B0B0]",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-16 h-16 border border-[#E5E5E5] rounded-full flex items-center justify-center mb-4",
                            children: e.jsx(Dr, { size: 24, strokeWidth: 1 }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs font-sans tracking-[0.2em] uppercase",
                            children: "暂无记录",
                          }),
                        ],
                      })
                    : [...(n || [])].reverse().map((g, x) => {
                        const y = new Date(g.startTime),
                          v = y.toLocaleDateString("zh-CN", {
                            month: "short",
                            day: "numeric",
                          }),
                          b = y.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          });
                        return e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: x * 0.05 },
                            className:
                              "w-full group relative bg-white p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 border border-[#F0F0F0] select-none",
                            onTouchStart: () => p(g.id),
                            onTouchEnd: m,
                            onMouseDown: () => p(g.id),
                            onMouseUp: m,
                            onMouseLeave: m,
                            children: [
                              e.jsxs("div", {
                                onClick: () => h(g),
                                className:
                                  "flex items-center justify-between cursor-pointer",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-10 h-10 rounded-full bg-[#F5F5F0] flex items-center justify-center text-[#2C2C2C] border border-[#E5E5E5]",
                                        children: e.jsx(Vl, {
                                          size: 18,
                                          strokeWidth: 1.5,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("h3", {
                                            className:
                                              "text-lg font-medium font-serif leading-none mb-1.5 text-[#2C2C2C]",
                                            children: "视频通话",
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center space-x-2 text-[10px] text-[#999] font-sans uppercase tracking-wide",
                                            children: [
                                              e.jsx("span", { children: v }),
                                              e.jsx("span", {
                                                className:
                                                  "w-0.5 h-0.5 bg-[#999] rounded-full",
                                              }),
                                              e.jsx("span", { children: b }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "flex flex-col items-end",
                                    children: e.jsx("span", {
                                      className:
                                        "text-sm font-serif text-[#2C2C2C]",
                                      children: g.durationStr,
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "mt-4 pt-3 border-t border-[#F5F5F0] flex items-center justify-between",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] text-[#B0B0B0] font-sans uppercase tracking-widest",
                                        children: "记忆模式",
                                      }),
                                      e.jsx("button", {
                                        onClick: (N) => {
                                          (N.stopPropagation(), r(g.id));
                                        },
                                        className: `px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider transition-all border ${g.useSummary ? "bg-[#2C2C2C] text-white border-[#2C2C2C]" : "bg-white text-[#999] border-[#E5E5E5] hover:border-[#2C2C2C] hover:text-[#2C2C2C]"}`,
                                        children: g.useSummary
                                          ? "摘要"
                                          : "原文",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-3 ml-auto",
                                    children: [
                                      !!i &&
                                        e.jsx("button", {
                                          onClick: async (N) => {
                                            if ((N.stopPropagation(), !u)) {
                                              f(g.id);
                                              try {
                                                (await i(g.id),
                                                  alert("总结已生成"));
                                              } catch (w) {
                                                alert(
                                                  (w == null
                                                    ? void 0
                                                    : w.message) ||
                                                    "总结失败，请稍后重试",
                                                );
                                              } finally {
                                                f(null);
                                              }
                                            }
                                          },
                                          className: `text-[10px] font-sans uppercase tracking-widest transition-opacity ${u === g.id ? "text-[#999] cursor-wait" : "text-[#2C2C2C] hover:opacity-60"}`,
                                          children:
                                            u === g.id
                                              ? "总结中..."
                                              : g.summary
                                                ? "重生成总结"
                                                : "生成总结",
                                        }),
                                      g.summary &&
                                        e.jsxs("button", {
                                          onClick: (N) => {
                                            (N.stopPropagation(),
                                              alert(g.summary));
                                          },
                                          className:
                                            "flex items-center gap-1 text-[10px] text-[#2C2C2C] font-sans uppercase tracking-widest hover:opacity-60 transition-opacity",
                                          children: [
                                            e.jsx(ro, { size: 12 }),
                                            e.jsx("span", {
                                              children: "查看摘要",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-0 right-0 w-3 h-3 border-t border-r border-[#E5E5E5] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#E5E5E5] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity",
                              }),
                            ],
                          },
                          g.id,
                        );
                      }),
              }),
            }),
          ],
        })
      : null;
  },
  uW = ({ call: t, onClose: s, contact: n }) => {
    if (!t) return null;
    const a = new Date(t.startTime);
    return e.jsxs(We.div, {
      initial: { x: "100%" },
      animate: { x: 0 },
      exit: { x: "100%" },
      transition: { type: "spring", stiffness: 300, damping: 30 },
      className:
        "absolute inset-0 z-[60] bg-[#F9F8F6] flex flex-col font-serif",
      children: [
        e.jsxs("div", {
          className:
            "px-6 pt-14 pb-4 flex items-center justify-between bg-[#F9F8F6] z-10",
          children: [
            e.jsxs("button", {
              onClick: () => {
                (navigator.vibrate && navigator.vibrate(20), s());
              },
              className:
                "flex items-center space-x-2 text-[#2C2C2C] hover:opacity-60 transition-opacity group",
              children: [
                e.jsx("div", {
                  className:
                    "w-8 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center bg-white group-hover:border-[#2C2C2C] transition-colors",
                  children: e.jsx(un, { size: 16, strokeWidth: 1.5 }),
                }),
                e.jsx("span", {
                  className: "text-xs font-sans uppercase tracking-widest",
                  children: "返回",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "text-xs font-sans uppercase tracking-widest text-[#999]",
              children: ["档案编号 ", t.id.toString().slice(-4)],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 overflow-y-auto px-6 pb-10 custom-scrollbar relative",
          children: [
            e.jsxs(We.div, {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.2 },
              className:
                "bg-white p-8 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-[#F0F0F0] mb-6 relative overflow-hidden",
              children: [
                e.jsx("div", {
                  className: "absolute top-0 right-0 p-4 opacity-[0.03]",
                  children: e.jsx(yp, { size: 120 }),
                }),
                e.jsxs("div", {
                  className: "flex flex-col items-center relative z-10",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 rounded-full bg-[#F5F5F0] mb-4 p-1 border border-[#E5E5E5]",
                      children: e.jsx("div", {
                        className:
                          "w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center",
                        children:
                          n != null && n.avatar
                            ? e.jsx("img", {
                                src: n.avatar,
                                alt: n.name,
                                className:
                                  "w-full h-full object-cover grayscale contrast-110",
                                loading: "lazy",
                              })
                            : e.jsx("span", {
                                className: "text-2xl font-serif text-[#2C2C2C]",
                                children: n
                                  ? n.name[0]
                                  : e.jsx(wr, { size: 32, strokeWidth: 1 }),
                              }),
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "text-2xl font-serif text-[#2C2C2C] mb-1 text-center",
                      children: "视频通话记录",
                    }),
                    e.jsx("p", {
                      className:
                        "text-xs font-sans text-[#999] tracking-[0.2em] uppercase",
                      children: n ? n.name : "未知联系人",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(We.div, {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.3 },
              className: "grid grid-cols-2 gap-4 mb-6",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-white p-4 rounded-xl border border-[#F0F0F0] shadow-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-2 mb-2 text-[#999]",
                      children: [
                        e.jsx(Iu, { size: 12 }),
                        e.jsx("span", {
                          className:
                            "text-[10px] font-sans uppercase tracking-widest",
                          children: "日期",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-base font-serif text-[#2C2C2C]",
                      children: a.toLocaleDateString(),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-white p-4 rounded-xl border border-[#F0F0F0] shadow-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-2 mb-2 text-[#999]",
                      children: [
                        e.jsx(Dr, { size: 12 }),
                        e.jsx("span", {
                          className:
                            "text-[10px] font-sans uppercase tracking-widest",
                          children: "时长",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-base font-serif text-[#2C2C2C]",
                      children: t.durationStr,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(We.div, {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.4 },
              className:
                "bg-white rounded-xl border border-[#F0F0F0] shadow-sm overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "px-6 py-4 border-b border-[#F0F0F0] bg-[#FAFAFA] flex items-center justify-between",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-xs font-sans uppercase tracking-widest text-[#2C2C2C]",
                      children: "通话转录",
                    }),
                    e.jsx("div", {
                      className: "w-2 h-2 rounded-full bg-[#2C2C2C]",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "p-6 space-y-6",
                  children: t.messages.map((r, i) =>
                    e.jsxs(
                      "div",
                      {
                        className: `flex flex-col ${r.sender === "me" ? "items-end" : "items-start"}`,
                        children: [
                          e.jsx("div", {
                            className: `max-w-[85%] p-4 text-sm leading-relaxed font-serif ${r.sender === "me" ? "bg-[#2C2C2C] text-white rounded-2xl rounded-tr-sm" : "bg-[#F5F5F0] text-[#2C2C2C] rounded-2xl rounded-tl-sm"}`,
                            children: r.text,
                          }),
                          e.jsx("span", {
                            className:
                              "text-[10px] text-[#B0B0B0] mt-2 px-1 uppercase tracking-wide font-sans",
                            children:
                              r.sender === "me"
                                ? "我"
                                : n
                                  ? n.name.split(" ")[0]
                                  : "对方",
                          }),
                        ],
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  BA = l.createContext({ reduceMotion: !1 });
function Yu() {
  return l.useContext(BA);
}
function fW({ children: t }) {
  const [s, n] = l.useState(!1);
  l.useEffect(() => {
    const r = MH();
    return (
      n(r),
      r
        ? (document.body.dataset.reduceMotion = "true")
        : delete document.body.dataset.reduceMotion,
      () => delete document.body.dataset.reduceMotion
    );
  }, []);
  const a = l.useMemo(() => ({ reduceMotion: s }), [s]);
  return e.jsx(BA.Provider, { value: a, children: t });
}
const mW = ["一", "二", "三", "四", "五", "六", "日"],
  ic = 50;
function pW(t, s) {
  const n = (s || "").trim();
  if (!n) return t;
  const r = t.toLowerCase().indexOf(n.toLowerCase());
  if (r < 0) return t;
  const i = t.slice(0, r),
    o = t.slice(r, r + n.length),
    c = t.slice(r + n.length);
  return e.jsxs(e.Fragment, {
    children: [
      i,
      e.jsx("mark", {
        className:
          "bg-gray-900/[0.06] text-gray-900 underline decoration-gray-400/60 decoration-1 underline-offset-2",
        children: o,
      }),
      c,
    ],
  });
}
function MN(t, { isGroup: s, contacts: n, userName: a, peerName: r }) {
  if (t.sender === "me") return a || "我";
  if (s && t.contactId) {
    const i = (n || []).find((o) => o.id === t.contactId);
    return (
      (i == null ? void 0 : i.remark) ||
      (i == null ? void 0 : i.nickname) ||
      (i == null ? void 0 : i.name) ||
      "群成员"
    );
  }
  return r || "对方";
}
function xW({
  show: t,
  onClose: s,
  messages: n = [],
  isGroup: a = !1,
  contacts: r = [],
  userName: i = "我",
  peerName: o = "对方",
  onJumpToMessage: c,
}) {
  var le;
  const { reduceMotion: d } = Yu(),
    [u, f] = l.useState("date"),
    [p, m] = l.useState(() => new Date()),
    [h, g] = l.useState(null),
    [x, y] = l.useState(""),
    [v, b] = l.useState(""),
    [N, w] = l.useState(ic),
    [_, A] = l.useState(ic),
    k = l.useRef(null),
    C = l.useRef(null),
    M = l.useRef(null);
  (l.useEffect(() => {
    const ie = setTimeout(() => b(x), 280);
    return () => clearTimeout(ie);
  }, [x]),
    l.useEffect(() => {
      t && (m(new Date()), g(null), y(""), b(""), f("date"), w(ic), A(ic));
    }, [t]),
    l.useEffect(() => {
      w(ic);
    }, [h]),
    l.useEffect(() => {
      A(ic);
    }, [v]));
  const E = l.useMemo(() => fF(n), [n]),
    S = l.useMemo(() => {
      const ie = new Map();
      for (const [X, je] of E) ie.set(X, je.count);
      return ie;
    }, [E]),
    j = p.getFullYear(),
    T = p.getMonth(),
    I = l.useMemo(() => pF(j, T), [j, T]),
    L = l.useMemo(
      () => mF(n, v).sort((X, je) => od(je.timestamp) - od(X.timestamp)),
      [n, v],
    ),
    B = h ? (((le = E.get(h)) == null ? void 0 : le.messages) ?? []) : [],
    F = l.useMemo(() => B.slice(0, N), [B, N]),
    D = l.useMemo(() => L.slice(0, _), [L, _]),
    $ = B.length > F.length,
    P = L.length > D.length;
  (l.useEffect(() => {
    if (!t || u !== "date" || !h || !$) return;
    const ie = k.current,
      X = C.current;
    if (!ie || !X) return;
    const je = new IntersectionObserver(
      ([xe]) => {
        xe != null &&
          xe.isIntersecting &&
          w((ye) => Math.min(ye + ic, B.length));
      },
      { root: ie, rootMargin: "100px", threshold: 0 },
    );
    return (je.observe(X), () => je.disconnect());
  }, [t, u, h, $, B.length, F.length]),
    l.useEffect(() => {
      if (!t || u !== "keyword" || !v.trim() || !P) return;
      const ie = k.current,
        X = M.current;
      if (!ie || !X) return;
      const je = new IntersectionObserver(
        ([xe]) => {
          xe != null &&
            xe.isIntersecting &&
            A((ye) => Math.min(ye + ic, L.length));
        },
        { root: ie, rootMargin: "100px", threshold: 0 },
      );
      return (je.observe(X), () => je.disconnect());
    }, [t, u, v, P, L.length, D.length]));
  const z = () => {
      (m((ie) => new Date(ie.getFullYear(), ie.getMonth() - 1, 1)), g(null));
    },
    O = () => {
      (m((ie) => new Date(ie.getFullYear(), ie.getMonth() + 1, 1)), g(null));
    },
    Z = (ie) => {
      if (ie == null) return;
      const X = Xy(new Date(j, T, ie));
      g(X);
    },
    K = (ie) => {
      c == null || c(ie);
    },
    q = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: d ? 0 : 0.35, ease: "easeOut" },
      },
      exit: { opacity: 0, transition: { duration: d ? 0 : 0.25 } },
    },
    V = {
      hidden: d ? { opacity: 1, y: 0 } : { y: 14, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: d ? 0 : 0.45, ease: "easeOut" },
      },
    };
  if (!t) return null;
  const ne = `${j}年 ${T + 1}月`;
  return e.jsxs(We.div, {
    className:
      "absolute inset-0 z-[60] bg-[#FDFBF7] flex flex-col overflow-hidden",
    variants: q,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    children: [
      e.jsxs("div", {
        className:
          "px-6 pt-14 pb-6 flex justify-between items-end border-b border-gray-900/10 bg-[#FDFBF7]/90 backdrop-blur-sm sticky top-0 z-20",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className:
                  "text-[10px] font-serif tracking-[0.2em] text-gray-400 uppercase mb-1",
                children: "档案记录 • 检索",
              }),
              e.jsx("h1", {
                className: "text-3xl font-serif text-gray-900 italic",
                children: "查找记录",
              }),
              e.jsx("div", { className: "mt-3 h-px w-16 bg-gray-900/20" }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => {
              (navigator.vibrate && navigator.vibrate(18), s == null || s());
            },
            className:
              "w-10 h-10 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300",
            "aria-label": "关闭",
            children: e.jsx(Ts, { size: 18 }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "px-6 pt-6 pb-3 flex-shrink-0",
        children: e.jsxs("div", {
          className: "flex p-1 border border-gray-200 bg-white/80",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: () => f("date"),
              className: `flex-1 py-2.5 text-[10px] font-serif tracking-[0.18em] uppercase transition-all duration-300 ${u === "date" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-800"}`,
              children: "按日期",
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => f("keyword"),
              className: `flex-1 py-2.5 text-[10px] font-serif tracking-[0.18em] uppercase transition-all duration-300 ${u === "keyword" ? "bg-gray-900 text-white" : "text-gray-500 hover:text-gray-800"}`,
              children: "关键词",
            }),
          ],
        }),
      }),
      e.jsx("div", {
        ref: k,
        className: "flex-1 overflow-y-auto no-scrollbar px-6 pb-24",
        children: e.jsx(Os, {
          mode: "wait",
          children:
            u === "date"
              ? e.jsxs(
                  We.div,
                  {
                    initial: d ? !1 : { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: d ? void 0 : { opacity: 0, y: -6 },
                    transition: { duration: d ? 0 : 0.25 },
                    className: "space-y-8",
                    children: [
                      e.jsxs(We.div, {
                        variants: V,
                        initial: "hidden",
                        animate: "visible",
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-4",
                            children: [
                              e.jsx("span", {
                                className: "text-4xl font-serif text-gray-200",
                                children: "01",
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 flex-1 justify-end",
                                children: [
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: z,
                                    className:
                                      "w-9 h-9 border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300",
                                    "aria-label": "上一月",
                                    children: e.jsx(un, {
                                      size: 18,
                                      strokeWidth: 1.5,
                                    }),
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-lg italic text-gray-800 min-w-[7.5rem] text-center",
                                    children: ne,
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: O,
                                    className:
                                      "w-9 h-9 border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300",
                                    "aria-label": "下一月",
                                    children: e.jsx(Kn, {
                                      size: 18,
                                      strokeWidth: 1.5,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-white border border-gray-200 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] p-4",
                            children: [
                              e.jsx("div", {
                                className: "grid grid-cols-7 gap-y-2 mb-2",
                                children: mW.map((ie) =>
                                  e.jsx(
                                    "div",
                                    {
                                      className:
                                        "text-center text-[10px] font-serif tracking-widest text-gray-400 uppercase py-1",
                                      children: ie,
                                    },
                                    ie,
                                  ),
                                ),
                              }),
                              e.jsx("div", {
                                className: "grid grid-cols-7 gap-1",
                                children: I.map((ie, X) => {
                                  if (ie == null)
                                    return e.jsx(
                                      "div",
                                      { className: "aspect-square" },
                                      `e-${X}`,
                                    );
                                  const je = Xy(new Date(j, T, ie)),
                                    xe = S.get(je) || 0,
                                    ye = h === je;
                                  return e.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => Z(ie),
                                      className: `
                            aspect-square flex flex-col items-center justify-center text-sm font-serif relative
                            border transition-all duration-200
                            ${ye ? "border-gray-900 bg-black/[0.03] text-gray-900" : "border-transparent text-gray-700 hover:border-gray-200 hover:bg-[#FAFAF8]"}
                          `,
                                      children: [
                                        e.jsx("span", { children: ie }),
                                        xe > 0
                                          ? e.jsx("span", {
                                              className:
                                                "absolute bottom-1 w-1 h-1 rounded-full bg-gray-900",
                                              "aria-hidden": !0,
                                            })
                                          : null,
                                      ],
                                    },
                                    je,
                                  );
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(We.div, {
                        variants: V,
                        initial: "hidden",
                        animate: "visible",
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx("span", {
                                className: "text-4xl font-serif text-gray-200",
                                children: "02",
                              }),
                              e.jsx("h3", {
                                className:
                                  "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                                children: "当日摘录",
                              }),
                            ],
                          }),
                          h
                            ? B.length === 0
                              ? e.jsx("div", {
                                  className:
                                    "border border-gray-200 bg-white px-6 py-8 text-center",
                                  children: e.jsx("p", {
                                    className:
                                      "text-sm text-gray-500 font-serif italic",
                                    children: "这一天没有可显示的消息",
                                  }),
                                })
                              : e.jsxs("div", {
                                  className: "border border-gray-200 bg-white",
                                  children: [
                                    e.jsxs("p", {
                                      className:
                                        "px-4 py-2 text-[10px] font-mono text-gray-400 border-b border-gray-100",
                                      children: [
                                        "已显示 ",
                                        F.length,
                                        " / ",
                                        B.length,
                                        " 条",
                                        $ ? " · 下滑加载更多" : "",
                                      ],
                                    }),
                                    e.jsx("ul", {
                                      className: "divide-y divide-gray-100",
                                      children: F.map((ie) =>
                                        e.jsx(
                                          "li",
                                          {
                                            children: e.jsxs("button", {
                                              type: "button",
                                              onClick: () => K(ie.id),
                                              className:
                                                "w-full text-left px-4 py-3.5 flex gap-3 hover:bg-[#FAFAF8] transition-colors border-l-2 border-l-transparent hover:border-l-gray-900",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "flex-shrink-0 w-[4.5rem] font-mono text-[11px] text-gray-400 pt-0.5",
                                                  children: $w(ie),
                                                }),
                                                e.jsxs("span", {
                                                  className: "flex-1 min-w-0",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "block text-[10px] tracking-widest text-gray-400 uppercase mb-0.5",
                                                      children: MN(ie, {
                                                        isGroup: a,
                                                        contacts: r,
                                                        userName: i,
                                                        peerName: o,
                                                      }),
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-sm text-gray-800 line-clamp-2 leading-relaxed",
                                                      children: Dw(ie),
                                                    }),
                                                  ],
                                                }),
                                                e.jsx(Kn, {
                                                  className:
                                                    "flex-shrink-0 text-gray-300 mt-1",
                                                  size: 16,
                                                  strokeWidth: 1.5,
                                                }),
                                              ],
                                            }),
                                          },
                                          ie.id,
                                        ),
                                      ),
                                    }),
                                    $
                                      ? e.jsx("div", {
                                          ref: C,
                                          className: "h-4 w-full",
                                          "aria-hidden": !0,
                                        })
                                      : null,
                                  ],
                                })
                            : e.jsxs("div", {
                                className:
                                  "border border-dashed border-gray-200 bg-white/60 px-6 py-10 text-center",
                                children: [
                                  e.jsx(Iu, {
                                    className: "mx-auto mb-3 text-gray-300",
                                    size: 28,
                                    strokeWidth: 1.2,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-sm font-serif italic text-gray-500",
                                    children: "在月历中选择一天",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "mx-auto mt-4 h-px w-12 bg-gray-200",
                                  }),
                                ],
                              }),
                        ],
                      }),
                    ],
                  },
                  "date",
                )
              : e.jsxs(
                  We.div,
                  {
                    initial: d ? !1 : { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: d ? void 0 : { opacity: 0, y: -6 },
                    transition: { duration: d ? 0 : 0.25 },
                    className: "space-y-6",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          e.jsx("span", {
                            className: "text-4xl font-serif text-gray-200",
                            children: "01",
                          }),
                          e.jsx("h3", {
                            className:
                              "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                            children: "关键词",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative bg-white border border-gray-200 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] px-4 py-3 flex items-center gap-3",
                        children: [
                          e.jsx(pr, {
                            size: 20,
                            className: "text-gray-400 flex-shrink-0",
                            strokeWidth: 1.5,
                          }),
                          e.jsx("label", {
                            htmlFor: "chat-history-search-input",
                            className: "sr-only",
                            children: "搜索聊天内容",
                          }),
                          e.jsx("input", {
                            id: "chat-history-search-input",
                            value: x,
                            onChange: (ie) => y(ie.target.value),
                            placeholder: "输入关键词…",
                            className:
                              "flex-1 min-w-0 bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif text-gray-900 placeholder:text-gray-300 focus:border-gray-900 transition-colors",
                          }),
                        ],
                      }),
                      v.trim()
                        ? L.length === 0
                          ? e.jsx("div", {
                              className:
                                "border border-gray-200 bg-white px-6 py-8 text-center",
                              children: e.jsx("p", {
                                className:
                                  "text-sm text-gray-500 font-serif italic",
                                children: "未找到匹配内容",
                              }),
                            })
                          : e.jsxs("div", {
                              className: "border border-gray-200 bg-white",
                              children: [
                                e.jsxs("p", {
                                  className:
                                    "px-4 py-2 text-[10px] font-mono text-gray-400 border-b border-gray-100",
                                  children: [
                                    "已显示 ",
                                    D.length,
                                    " / ",
                                    L.length,
                                    " 条",
                                    P ? " · 下滑加载更多" : "",
                                  ],
                                }),
                                e.jsx("ul", {
                                  className: "divide-y divide-gray-100",
                                  children: D.map((ie) => {
                                    const X = Dw(ie, 160);
                                    return e.jsx(
                                      "li",
                                      {
                                        children: e.jsxs("button", {
                                          type: "button",
                                          onClick: () => K(ie.id),
                                          className:
                                            "w-full text-left px-4 py-3.5 flex gap-3 hover:bg-[#FAFAF8] transition-colors border-l-2 border-l-transparent hover:border-l-gray-900",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "flex-shrink-0 w-[4.5rem] font-mono text-[11px] text-gray-400 pt-0.5",
                                              children: $w(ie),
                                            }),
                                            e.jsxs("span", {
                                              className: "flex-1 min-w-0",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "block text-[10px] tracking-widest text-gray-400 uppercase mb-0.5",
                                                  children: MN(ie, {
                                                    isGroup: a,
                                                    contacts: r,
                                                    userName: i,
                                                    peerName: o,
                                                  }),
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-sm text-gray-800 line-clamp-2 leading-relaxed",
                                                  children: pW(X, v.trim()),
                                                }),
                                              ],
                                            }),
                                            e.jsx(Kn, {
                                              className:
                                                "flex-shrink-0 text-gray-300 mt-1",
                                              size: 16,
                                              strokeWidth: 1.5,
                                            }),
                                          ],
                                        }),
                                      },
                                      ie.id,
                                    );
                                  }),
                                }),
                                P
                                  ? e.jsx("div", {
                                      ref: M,
                                      className: "h-4 w-full",
                                      "aria-hidden": !0,
                                    })
                                  : null,
                              ],
                            })
                        : e.jsxs("div", {
                            className:
                              "border border-dashed border-gray-200 bg-white/60 px-6 py-10 text-center",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm font-serif italic text-gray-500",
                                children: "输入关键词定位消息",
                              }),
                              e.jsx("div", {
                                className: "mx-auto mt-4 h-px w-12 bg-gray-200",
                              }),
                            ],
                          }),
                    ],
                  },
                  "kw",
                ),
        }),
      }),
    ],
  });
}
const Ud = (t, s, n) => Math.max(s, Math.min(n, t)),
  hW = () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1),
  TN = () => {
    let t;
    do t = hW();
    while (UA(t));
    return t;
  },
  UA = (t) => {
    const s = Array.from(new Set(t)).sort((r, i) => r - i);
    if (s.length !== 5) return !1;
    const n = s[0];
    return s[4] - n === 4;
  },
  IN = (t) => t.every((s) => s === t[0]),
  gW = (t) => {
    const s = new Map();
    for (const n of t) s.set(n, (s.get(n) || 0) + 1);
    return s;
  },
  hx = (t, s, n) => {
    if (!Array.isArray(t) || t.length !== 5 || UA(t)) return 0;
    const a = gW(t),
      r = a.get(1) || 0;
    if (IN(t) && t[0] === 1) return s === 1 ? 5 : n ? 0 : 7;
    if (IN(t) && t[0] !== 1) {
      const o = t[0];
      return s === o ? 7 : 0;
    }
    if (!n && r === 2) {
      for (let o = 2; o <= 6; o++)
        if ((a.get(o) || 0) === 3 && s === o) return 6;
    }
    let i = a.get(s) || 0;
    return (!n && s !== 1 && (i += r), i);
  },
  EN = (t, s) => {
    if (!t) return { legal: !0 };
    if (!s) return { legal: !1, hint: "叫法无效" };
    const { count: n, point: a } = t,
      { count: r, point: i } = s;
    return typeof n != "number" || typeof a != "number"
      ? { legal: !0 }
      : r > n || (r === n && i > a)
        ? { legal: !0 }
        : r === n && i <= a
          ? { legal: !1, hint: "数量相同则点数必须更大" }
          : i === a && r <= n
            ? { legal: !1, hint: "点数相同则数量必须更多" }
            : { legal: !1, hint: "数量或点数必须比上家更大" };
  },
  _b = (t) => {
    if (!t || typeof t != "string") return null;
    const s = t
        .trim()
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim(),
      n = s.indexOf("{");
    if (n === -1) return null;
    let a = 0,
      r = -1;
    for (let o = n; o < s.length; o++)
      if ((s[o] === "{" && a++, s[o] === "}" && (a--, a === 0))) {
        r = o;
        break;
      }
    const i = r !== -1 ? s.slice(n, r + 1) : s;
    try {
      return JSON.parse(i);
    } catch {
      return null;
    }
  },
  Ef = (t) =>
    typeof t == "string" &&
    (t.includes("请先在设置中配置API") ||
      t.includes("抱歉") ||
      t.includes("暂时无法回复")),
  gx = (t) => `couple_space_signals_dice_bluff_state_${t}`,
  Ab = (t) => `couple_space_signals_dice_bluff_archives_${t}`,
  bx = () => Date.now(),
  bW = (t) => {
    const s = new Date(t),
      n = s.getFullYear(),
      a = String(s.getMonth() + 1).padStart(2, "0"),
      r = String(s.getDate()).padStart(2, "0"),
      i = String(s.getHours()).padStart(2, "0"),
      o = String(s.getMinutes()).padStart(2, "0");
    return `${n}-${a}-${r} ${i}:${o}`;
  },
  GA = ({
    show: t,
    onClose: s,
    contact: n,
    chatId: a,
    chats: r,
    callApi: i,
    getRoleBoundUser: o,
    receiveMessage: c,
    sendMessage: d,
    setChats: u,
    showPhoneCase: f = !0,
  }) => {
    const p =
        (n == null ? void 0 : n.nickname) ||
        (n == null ? void 0 : n.name) ||
        "TA",
      m = ((o == null ? void 0 : o(n)) ?? {}) || {},
      h = (m == null ? void 0 : m.name) || "我",
      g = n == null ? void 0 : n.id,
      [x, y] = l.useState("entry"),
      [v, b] = l.useState(!1),
      [N, w] = l.useState("“你所见的真实，不过是概率坍塌后的残渣。”"),
      [_, A] = l.useState([]),
      [k, C] = l.useState([]),
      [M, E] = l.useState(0),
      [S, j] = l.useState(3),
      [T, I] = l.useState(2),
      [L, B] = l.useState(!1),
      [F, D] = l.useState(null),
      [$, P] = l.useState(""),
      [z, O] = l.useState([]),
      [Z, K] = l.useState([]),
      [q, V] = l.useState(null),
      [ne, le] = l.useState(null),
      [ie, X] = l.useState(null),
      [je, xe] = l.useState([]),
      [ye, R] = l.useState(!1),
      [oe, ee] = l.useState(""),
      [H, Y] = l.useState(!1),
      U = l.useRef(!1),
      ce = l.useRef(!1),
      [pe, se] = l.useState(!1),
      [Te, ke] = l.useState(!1),
      [W, ue] = l.useState(!1),
      re = l.useRef(null),
      he = l.useRef(null),
      [ge, J] = l.useState(""),
      G = l.useRef(!1),
      we = l.useMemo(
        () =>
          Array.from({ length: 80 }).map((fe, He) => ({
            id: He,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2,
            duration: 3 + Math.random() * 5,
          })),
        [],
      ),
      Q = l.useMemo(() => (r || []).find((fe) => fe.id === a), [r, a]),
      ve = l.useMemo(
        () =>
          ((Q == null ? void 0 : Q.messages) || [])
            .slice(-20)
            .filter((Ie) => Ie && !Ie.isRecalled)
            .map((Ie) => {
              const Ce = Ie.sender === "me" ? h : p,
                Re = String(Ie.text || "")
                  .replace(/\s+/g, " ")
                  .trim();
              return Re ? `${Ce}: ${Re}` : null;
            })
            .filter(Boolean)
            .join(
              `
`,
            )
            .slice(0, 1200),
        [Q == null ? void 0 : Q.messages, h, p],
      );
    (l.useEffect(() => {
      if (!t) return;
      b(!1);
      const fe = setTimeout(() => b(!0), 50);
      return () => clearTimeout(fe);
    }, [t]),
      l.useEffect(() => {
        if (!t || !g) return;
        let fe = !1;
        return (
          (async () => {
            (R(!0), se(!0));
            try {
              const [He, Ie] = await Promise.all([
                be.get(Ab(g), []),
                be.get(gx(g), null),
              ]);
              if (fe) return;
              (xe(Array.isArray(He) ? He : []),
                Ie &&
                typeof Ie == "object" &&
                Ie.roleId === g &&
                Ie.layer === "app" &&
                Array.isArray(Ie.player) &&
                Array.isArray(Ie.npc)
                  ? (y("app"),
                    w(Ie.npcMsg || "“你所见的真实，不过是概率坍塌后的残渣。”"),
                    A(Ie.player),
                    C(Ie.npc),
                    j(typeof Ie.count == "number" ? Ie.count : 3),
                    I(typeof Ie.point == "number" ? Ie.point : 2),
                    B(!!Ie.isOneCalled),
                    D(Ie.lastCaller || null),
                    O(Array.isArray(Ie.log) ? Ie.log : []),
                    K(Array.isArray(Ie.callLog) ? Ie.callLog : []),
                    V(
                      Ie.rewardPack && typeof Ie.rewardPack == "object"
                        ? Ie.rewardPack
                        : null,
                    ),
                    X(Ie.matchId || null))
                  : y("entry"));
            } finally {
              fe || (R(!1), se(!1), (G.current = !0));
            }
          })(),
          () => {
            fe = !0;
          }
        );
      }, [t, g]),
      l.useEffect(() => {
        if (!t) return;
        const fe = () => {
          J(
            new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: !1,
            }),
          );
        };
        return (
          fe(),
          (he.current = setInterval(fe, 1e3)),
          () => {
            (he.current && clearInterval(he.current), (he.current = null));
          }
        );
      }, [t]),
      l.useEffect(() => {
        if (!t || x !== "app" || !_ || _.length !== 5) return;
        E(0);
        const fe = [];
        for (let He = 0; He < 5; He++)
          fe.push(
            setTimeout(() => {
              E((Ie) => Math.max(Ie, He + 1));
            }, He * 80),
          );
        return () => fe.forEach((He) => clearTimeout(He));
      }, [t, x, _]));
    const Ve = (fe, He, Ie = "") => {
        O((Ce) => [...Ce, { who: fe, msg: He, man: Ie }]);
      },
      Ae = (fe) => {
        K((He) => [...He, fe]);
      };
    l.useEffect(() => {
      if (!t || !g || !G.current || x !== "app") return;
      const fe = {
        v: 1,
        roleId: g,
        savedAt: bx(),
        layer: x,
        npcMsg: N,
        player: _,
        npc: k,
        count: S,
        point: T,
        isOneCalled: L,
        lastCaller: F,
        log: z,
        callLog: Z,
        rewardPack: q,
        matchId: ie,
      };
      be.set(gx(g), fe);
    }, [t, g, x, N, _, k, S, T, L, F, z, Z, q, ie]);
    const te = () => {
        (y("entry"),
          w("“你所见的真实，不过是概率坍塌后的残渣。”"),
          A([]),
          C([]),
          E(0),
          j(3),
          I(2),
          B(!1),
          D(null),
          P(""),
          O([]),
          K([]),
          V(null),
          le(null),
          X(null),
          Y(!1),
          ee(""),
          (U.current = !1),
          (ce.current = !1),
          g && be.remove(gx(g)));
      },
      Se = () => y("archive"),
      Fe = async () => {
        (y("app"),
          le(null),
          Y(!1),
          ee(""),
          (U.current = !1),
          (ce.current = !1),
          O([]),
          K([]),
          j(3),
          I(2),
          B(!1),
          D(null),
          E(0));
        const fe = `db-${bx()}-${Math.floor(Math.random() * 1e6)}`;
        X(fe);
        const He = TN(),
          Ie = TN();
        (A(He), C(Ie));
        const Ce = je.length > 0 && je[0].win ? "npc" : "player";
        Ve(
          "SYS",
          Ce === "player"
            ? `已摇骰：你有 5 颗骰子（仅你可见）。你的点数：${He.join(" ")}。${p} 也已摇完（你看不到TA的点数）。请先叫号（几个几），然后点击「以此立誓」。规则：之后每次叫号，数量或点数必须比上家更大（数量相同则点数更大，点数相同则数量更多）；1 被叫过后只能当 1 用。`
            : `已摇骰：你有 5 颗骰子（仅你可见）。你的点数：${He.join(" ")}。${p} 也已摇完。本轮由${p}先叫号，请等待TA行动。规则：每次叫号数量或点数必须比上家更大；1 被叫过后只能当 1 用。`,
        );
        try {
          if (i && n) {
            const Re = ((n == null ? void 0 : n.setting) || "无").slice(0, 800),
              De = ((m == null ? void 0 : m.settings) || "无").slice(0, 500),
              at = `【任务】你是${p}，正在和 ${h} 玩「吹牛摇骰子」（两人局）。
【角色人设】${Re}
【绑定用户人设】${De}
【最近聊天记录】
${ve || "（无）"}

请只返回一个 JSON（不要 markdown），字段如下：
{
  "openingLine": "一句很短的开场白（不泄露骰子点数）",
  "userWinReward": "如果${h}赢了，${p}给的奖励/甜蜜回馈（1句，暧昧或情侣空间风格）",
  "userLosePunishment": "如果${h}输了，${p}要的惩罚（1句，带点坏坏但不冒犯）",
  "npcWinReward": "如果${p}赢了，${p}自己的奖励（1句）",
  "npcLosePunishment": "如果${p}输了，${p}接受的惩罚（1句）"
}
约束：不要出现 emoji；不要出现括号解释；语气要符合你的人设与刚才聊天氛围。`,
              ft = await i(
                [{ role: "user", content: at }],
                n,
                "dice_bluff",
                {},
              );
            if (!Ef(ft)) {
              const vt = _b(ft);
              if (vt && typeof vt == "object") {
                V({
                  userWinReward: String(vt.userWinReward || "").trim(),
                  userLosePunishment: String(
                    vt.userLosePunishment || "",
                  ).trim(),
                  npcWinReward: String(vt.npcWinReward || "").trim(),
                  npcLosePunishment: String(vt.npcLosePunishment || "").trim(),
                });
                const Oe = String(vt.openingLine || "").trim();
                Oe && w(`“${Oe}”`);
              }
            }
          }
        } catch {}
        Ce !== "player" && (ke(!0), setTimeout(() => $e(Ie), 400));
      },
      $e = async (fe) => {
        const Ie = (() => {
          let at = 2,
            ft = -1;
          for (let vt = 2; vt <= 6; vt++) {
            const Oe = hx(fe, vt, !1);
            Oe > ft && ((ft = Oe), (at = vt));
          }
          return { count: 3, point: at };
        })();
        let Ce = "",
          Re = Ie.count,
          De = Ie.point;
        try {
          if (i && n) {
            const at = ((n == null ? void 0 : n.setting) || "无").slice(0, 900),
              ft = ((m == null ? void 0 : m.settings) || "无").slice(0, 600),
              vt = Array.isArray(fe) ? fe.join(" ") : "",
              Oe = `【任务】你是${p}，正在和 ${h} 玩「吹牛摇骰子」（两人局）。本轮由你先叫号（起叫至少 3 个某点，两人局规则）。

【角色人设】${at}
【绑定用户人设】${ft}
【最近聊天记录】
${ve || "（无）"}

【你的骰子】（仅你知道，不要泄露）${vt}

请先想一句短开场白（神谕降临里显示），再做出你的第一叫；并写下若本轮你赢了要给对方的惩罚（神谕时即定）。只返回一个 JSON（不要 markdown）：
{
  "chatLine": "一句很短的开场/撩拨（15字内，不泄露点数）",
  "count": 3,
  "point": 1-6 中选一个,
  "userLosePunishment": "如果本轮你赢了，你要给${h}的惩罚（1句，带点坏坏但不冒犯）"
}`,
              Qe = await i(
                [{ role: "user", content: Oe }],
                n,
                "dice_bluff",
                {},
              );
            if (!Ef(Qe)) {
              const Ye = _b(Qe) || {},
                Ze = String(Ye.chatLine || "")
                  .replace(/\s+/g, " ")
                  .trim();
              Ze && (Ce = Ze);
              const Ue = Number(Ye.count),
                me = Number(Ye.point);
              (Number.isFinite(Ue) &&
                Ue >= 3 &&
                (Re = Ud(Math.floor(Ue), 3, 99)),
                Number.isFinite(me) &&
                  me >= 1 &&
                  me <= 6 &&
                  (De = Math.floor(me)));
              let jt = String(Ye.userLosePunishment || "").trim();
              if (jt) V((Gt) => ({ ...Gt, userLosePunishment: jt }));
              else {
                const Gt = `【任务】你是${p}，正在和 ${h} 玩「吹牛摇骰子」。若本轮你赢了，你要给对方的惩罚（仅 1 句，带点坏坏但不冒犯）。
【角色人设】${((n == null ? void 0 : n.setting) || "无").slice(0, 500)}
只返回这一句惩罚内容，不要引号、不要 JSON、不要解释。`;
                try {
                  const Pt = await i(
                    [{ role: "user", content: Gt }],
                    n,
                    "dice_bluff",
                    {},
                  );
                  if (!Ef(Pt)) {
                    const Wt = String(Pt).replace(/\s+/g, " ").trim();
                    Wt.length > 0 &&
                      ((jt = Wt.slice(0, 80)),
                      V((ct) => ({ ...ct, userLosePunishment: jt })));
                  }
                } catch {}
              }
            }
          }
        } catch {
        } finally {
          ke(!1);
        }
        (w(Ce ? `"${Ce}"` : "神谕暂不可用，请检查网络或API设置。"),
          j(Re),
          I(De),
          B(De === 1),
          D("npc"),
          Ae({ who: "npc", type: "call", count: Re, point: De }),
          Ve(
            "NPC",
            `反制观测: 叫法 ${Re}个${De}点 · ${Re} 重位阶 [${De}] 之影`,
          ));
      },
      tt = (fe) => j((He) => Ud(He + fe, 1, 99)),
      Xe = (fe) =>
        I((He) => {
          let Ie = He + fe;
          return (Ie > 6 && (Ie = 1), Ie < 1 && (Ie = 6), Ie);
        }),
      ht = async () => {
        if (x !== "app" || F === "player" || ce.current) return;
        const fe = { count: S, point: T },
          He = (() => {
            const De = [...z].reverse();
            for (const at of De) {
              const ft = (at == null ? void 0 : at.msg) || "",
                vt = /(\d+)\s*重位阶\s*\[(\d)\]/.exec(ft);
              if (vt) return { count: Number(vt[1]), point: Number(vt[2]) };
            }
            return null;
          })(),
          { legal: Ie, hint: Ce } = EN(He, fe);
        if (!Ie) {
          Ve(
            "SYS",
            `叫错了：${Ce || "数量或点数必须比上家更大。数量相同则点数必须更大，点数相同则数量必须更多。"}`,
          );
          return;
        }
        const Re = L || T === 1;
        (B(Re),
          D("player"),
          Ae({
            who: "player",
            type: "call",
            count: S,
            point: T,
            man: $.trim(),
          }),
          Ve(
            "YOU",
            `宣告观测: 叫法 ${S}个${T}点 · ${S} 重位阶 [${T}] 之影`,
            $.trim(),
          ),
          P(""),
          (ce.current = !0),
          setTimeout(() => Pe({ count: S, point: T, isOneCalled: Re }), 600));
      },
      Pe = async (fe) => {
        const { count: He, point: Ie, isOneCalled: Ce } = fe;
        ke(!0);
        try {
          if (i && n) {
            const Ye = ((n == null ? void 0 : n.setting) || "无").slice(0, 900),
              Ze = ((m == null ? void 0 : m.settings) || "无").slice(0, 600),
              Ue = Array.isArray(k) ? k.join(" ") : "",
              me = `【任务】你是${p}，正在和 ${h} 玩「吹牛摇骰子」（两人局）。对方刚刚叫了「${He}个${Ie}点」。

【规则要点】
1) 叫法格式：M个N点。下一手必须在 M 或 N 至少一项严格大于上一手。
2) 1 为特殊点：若当前没人叫过 1，则 1 可当 2~6 任意点；一旦有人叫过 1，则 1 只能算 1。
3) 顺子：算 0（该盅不贡献点数）。
4) 假豹子：3个a+2个1 视作 6个a（若已叫1则只算3个a）。
5) 真豹子：5个a 视作 7个a。纯豹子：5个1 视作 7个任意点（若已叫1则只算5个1）。

【当前状态】
- 是否已叫过1：${Ce ? "是" : "否"}
- 你的骰子（仅你知道）：${Ue}
- 最近聊天记录（参考语气，不要照搬）：
${ve || "（无）"}

【要求】
你需要做出行动：要么加注（raise），要么直接开（open）。
叫号规则（必须严格遵守）：下一手必须比上一手更大。数量相同则点数必须更大（如上家 3个3，你可叫 3个4）；点数相同则数量必须更多（如上家 3个3，你可叫 4个3）。1 被叫过后只能当 1 用。
只返回一个 JSON（不要 markdown），格式：
{
  "action":"raise"|"open",
  "count": 数字(仅 action=raise 时，必须比上家数量大或数量相同且点数更大),
  "point": 1-6(仅 action=raise 时，必须合规),
  "chatLine":"一句短聊天（15字以内，情侣斗嘴/暧昧，不要泄露任何骰子点数）"
}
注意：如果你选择 raise，必须保证叫法合规；如果选择 open，请让 chatLine 像是你在质疑对方。`,
              jt = await i(
                [{ role: "user", content: me }],
                n,
                "dice_bluff",
                {},
              );
            if (!Ef(jt)) {
              const Gt = _b(jt) || {},
                Pt = String(Gt.action || "")
                  .trim()
                  .toLowerCase();
              let Wt = String(Gt.chatLine || "")
                .replace(/\s+/g, " ")
                .trim();
              if (
                (w(Wt ? `“${Wt}”` : "神谕暂不可用，请检查网络或API设置。"),
                Pt === "open")
              ) {
                (Ae({ who: "npc", type: "open" }),
                  Ve("NPC", "你所指的方向，并无星光。启动真理核验。"),
                  setTimeout(() => ut("npc"), 800));
                return;
              }
              let ct = Number(Gt.count),
                Kt = Number(Gt.point);
              (Number.isFinite(ct) || (ct = He + 1),
                Number.isFinite(Kt) || (Kt = Ie < 6 ? Ie + 1 : 1),
                (ct = Ud(Math.floor(ct), 1, 99)),
                (Kt = Ud(Math.floor(Kt), 1, 6)),
                EN({ count: He, point: Ie }, { count: ct, point: Kt }).legal ||
                  (Ie < 6
                    ? ((ct = He), (Kt = Ie + 1))
                    : ((ct = He + 1), (Kt = 1)),
                  (ct = Ud(ct, 1, 99)),
                  (Kt = Ud(Kt, 1, 6))),
                j(ct),
                I(Kt),
                Kt === 1 && B(!0),
                D("npc"),
                Ae({ who: "npc", type: "call", count: ct, point: Kt }),
                Ve(
                  "NPC",
                  `反制观测: 叫法 ${ct}个${Kt}点 · ${ct} 重位阶 [${Kt}] 之影`,
                ));
              return;
            }
          }
        } catch {
        } finally {
          (ke(!1), (ce.current = !1));
        }
        const Re = hx(k, Ie, Ce),
          De = 5,
          at = Ce || Ie === 1 ? 1 / 6 : 2 / 6,
          ft = Re + De * at;
        if (He > Math.ceil(ft + 1.2)) {
          (Ae({ who: "npc", type: "open" }),
            Ve("NPC", "你所指的方向，并无星光。启动真理核验。"),
            setTimeout(() => ut("npc"), 800));
          return;
        }
        const Oe = He + 1,
          Qe = Ie;
        (j(Oe),
          I(Qe),
          D("npc"),
          Ae({ who: "npc", type: "call", count: Oe, point: Qe }),
          Ve(
            "NPC",
            `反制观测: 叫法 ${Oe}个${Qe}点 · ${Oe} 重位阶 [${Qe}] 之影`,
          ),
          w("神谕暂不可用，请检查网络或API设置。"),
          (ce.current = !1));
      },
      ut = (fe) => {
        if (x !== "app") return;
        const He = hx(_, T, L),
          Ie = hx(k, T, L),
          Ce = He + Ie,
          Re = S,
          De = F,
          vt =
            (Ce >= Re ? De : De === "player" ? "npc" : "player") === "player";
        (le({ win: vt, actual: Ce, declared: Re, opener: fe }), y("result"));
        const Qe = q || {},
          Ye = vt
            ? Qe.userWinReward || "因果波函数已锚定，你胜过了神性的傲慢。"
            : Qe.userLosePunishment || "要乖乖听我的哦。";
        if (g) {
          const Ze = bx(),
            Ue = {
              id: ie || `db-${Ze}`,
              roleId: g,
              roleName: p,
              userName: h,
              startedAt: Ze,
              endedAt: Ze,
              win: vt,
              declared: Re,
              point: T,
              actual: Ce,
              isOneCalled: L,
              playerDice: _,
              npcDice: k,
              punishmentOrReward: Ye,
            };
          (async () => {
            const me = await be.get(Ab(g), []),
              jt = Array.isArray(me) ? me : [],
              Gt = [Ue, ...jt].slice(0, 50);
            (await be.set(Ab(g), Gt), await be.remove(gx(g)), xe(Gt));
          })();
        }
      },
      _t = l.useMemo(() => {
        if (!ne) return "";
        const fe = q || {};
        return ne.win
          ? fe.userWinReward || "因果波函数已锚定，你胜过了神性的傲慢。"
          : fe.userLosePunishment || "要乖乖听我的哦。";
      }, [ne, q]),
      Ee = async ({ userWon: fe, punishmentText: He, onSent: Ie }) => {
        if (!a || !c || !i || !n) return;
        const Ce = ((n == null ? void 0 : n.setting) || "无").slice(0, 600),
          Re = ((m == null ? void 0 : m.settings) || "无").slice(0, 400),
          De = fe
            ? `你是${p}，刚和 ${h} 玩完一局吹牛摇骰子，你输了。对方刚刚给你发了一张「惩罚卡片」，内容是：${He || "（无）"}
【角色人设】${Ce}
【绑定用户】${Re}
请根据人设主动回应这张惩罚：可以耍赖、撒娇、不服，也可以认怂遵守。回复 5～10 句短话，用英文双竖线 || 分隔每句（例如：才不要呢||你说了算咯||哼。）。不要引号、不要 JSON、不要解释，只返回用 || 分隔的多句话。`
            : `你是${p}，刚和 ${h} 玩完一局吹牛摇骰子，你赢了。你刚刚给对方发了一张「惩罚卡片」，内容是：${He || "（无）"}
【角色人设】${Ce}
【绑定用户】${Re}
请根据人设主动发一段回复：可以问对方会不会遵守、调侃、得意、催对方执行等。回复 5～10 句短话，用英文双竖线 || 分隔每句（例如：认输吧||惩罚可是你说的||要乖乖做哦。）。不要引号、不要 JSON、不要解释，只返回用 || 分隔的多句话。`;
        try {
          u &&
            u((ft) =>
              ft.map((vt) => (vt.id === a ? { ...vt, isTyping: !0 } : vt)),
            );
          const at = await i(
            [{ role: "user", content: De }],
            n,
            "dice_bluff",
            {},
          );
          if (at && !Ef(at)) {
            const ft = String(at).replace(/\s+/g, " ").trim();
            (ft.length > 0 &&
              (fe
                ? await c(a, ft)
                : await c(a, ft, null, null, null, null, {
                    type: "dice_punishment_card",
                    content: He || "",
                  })),
              Y(!0),
              Ie == null || Ie());
          }
        } catch {
        } finally {
          u &&
            u((at) =>
              at.map((ft) => (ft.id === a ? { ...ft, isTyping: !1 } : ft)),
            );
        }
      };
    return (
      l.useEffect(() => {
        if (
          x !== "result" ||
          !ne ||
          ne.win ||
          H ||
          U.current ||
          !a ||
          !c ||
          !i ||
          !n
        )
          return;
        U.current = !0;
        const He = (q || {}).userLosePunishment || "要乖乖听我的哦。";
        Ee({ userWon: !1, punishmentText: He });
      }, [x, ne, H, a, c, i, n, q]),
      l.useEffect(() => {
        if (Z.length === 0) return;
        const fe = Z[Z.length - 1];
        if ((fe == null ? void 0 : fe.who) !== "npc") return;
        const He = re.current;
        He &&
          requestAnimationFrame(() => {
            He.scrollTop = He.scrollHeight;
          });
      }, [Z]),
      t
        ? e.jsxs("div", {
            className: `fixed inset-0 z-[9000] ${f ? "with-phone-case" : ""}`,
            style: { background: "#000" },
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  (te(), s == null || s());
                },
                className:
                  "absolute right-4 z-[9500] text-white/60 hover:text-white transition-colors",
                style: { top: "48px" },
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 18, strokeWidth: 2.5 }),
              }),
              e.jsx("style", {
                children: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;900&family=Noto+Sans+SC:wght@300;400;700&display=swap');

        :root { --space-black: #000000; --accent-white: #ffffff; }
        .galaxy-root {
          background-color: var(--space-black);
          color: var(--accent-white);
          font-family: 'Noto Sans SC', sans-serif;
          margin: 0;
          overflow: hidden;
          height: 100vh;
          -webkit-font-smoothing: antialiased;
        }
        .serif-bold { font-family: 'Noto Serif SC', serif; font-weight: 900; }
        .serif-regular { font-family: 'Noto Serif SC', serif; font-weight: 400; }

        .stars-container {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: #000;
          overflow: hidden;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0.4;
          animation: twinkle var(--duration) infinite ease-in-out;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.4); }
        }

        .page-layer {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: var(--space-black);
          z-index: 10;
          padding-top: 48px;
          box-sizing: border-box;
        }
        .hidden-layer {
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px);
        }

        .btn-galaxy {
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.6rem;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          transition: all 0.3s;
          background: transparent;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .btn-galaxy:hover { background: #fff; color: #000; border-color: #fff; }
        .btn-disabled {
          border-color: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.2);
          cursor: not-allowed;
        }

        .main-viewport {
          height: calc(100vh - 48px);
          width: 100%;
          min-width: 100%;
          display: grid;
          grid-template-rows: auto 1fr auto;
          padding: 0.75rem 2.5rem;
          margin: 0 auto;
          gap: 0.35rem;
          box-sizing: border-box;
          max-width: calc(100vw - 4rem);
        }
        #app .main-viewport .game-grid {
          width: 100%;
          min-width: 0;
        }

        #chat-container {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(10, 10, 10, 0.6);
          backdrop-filter: blur(20px);
          padding: 0.5rem;
          overflow-y: auto;
          height: 200px;
          min-height: 200px;
          max-height: 200px;
          flex-shrink: 0;
        }
        #app .oracle-dice-column {
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        #app .oracle-dice-column .oracle-dice-scroll {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
        }
        #app .oracle-dice-column .oracle-dice-actions {
          flex-shrink: 0;
          margin-top: -0.5rem;
        }

        .dice-cell {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          opacity: 0;
          background: rgba(255, 255, 255, 0.05);
          transition: none;
          animation: none;
        }
        .dice-cell.revealed { opacity: 1; }
        .dice-cell.active { background: #fff; color: #000; border: none; }

        .val-display { font-size: 2rem; line-height: 1; color: #fff; transition: none; }
        .text-micro { font-size: 0.55rem; letter-spacing: 0.3em; color: #666; text-transform: uppercase; }

        .mode-card {
          width: 100%;
          max-width: 280px;
          text-align: center;
          padding: 3rem 1.5rem;
          border: 1px solid rgba(255,255,255,0.05);
          background: linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 100%);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
        }
        .mode-card:active:not(.disabled) { transform: scale(0.96); }
        .mode-card:hover:not(.disabled) {
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.04);
        }

        .log-item { border-bottom: 1px solid rgba(255,255,255,0.05); padding: 0.75rem 0; }
      `,
              }),
              e.jsxs("div", {
                className: "galaxy-root ",
                children: [
                  e.jsx("div", {
                    className: "stars-container",
                    id: "stars-bg",
                    children: we.map((fe) =>
                      e.jsx(
                        "div",
                        {
                          className: "star",
                          style: {
                            width: `${fe.size}px`,
                            height: `${fe.size}px`,
                            left: `${fe.left}%`,
                            top: `${fe.top}%`,
                            "--duration": `${fe.duration}s`,
                          },
                        },
                        fe.id,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    id: "entry-page",
                    className: `page-layer items-center justify-center p-6 ${x === "entry" ? "" : "hidden-layer"}`,
                    children: [
                      e.jsxs("div", {
                        className: "text-center mb-16 md:mb-24",
                        children: [
                          e.jsx("h1", {
                            className:
                              "serif-bold text-5xl md:text-7xl tracking-[0.5em] mb-6",
                            children: "星轨",
                          }),
                          e.jsx("p", {
                            className: "text-micro italic text-zinc-500",
                            children: "世间一切皆为观测之影 / 终端 0.9",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-center",
                        children: [
                          e.jsxs("div", {
                            className: "mode-card cursor-pointer group",
                            onClick: Se,
                            role: "button",
                            tabIndex: 0,
                            children: [
                              e.jsxs("div", {
                                className: "mb-10",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "serif-bold text-2xl mb-2 tracking-[0.2em] group-hover:text-white transition-colors",
                                    children: "虚空妄言",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[0.5rem] text-zinc-600 uppercase tracking-widest",
                                    children: "The Path of Deception",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "btn-galaxy w-full py-4 group-hover:bg-white group-hover:text-black",
                                children: "开启观测",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-2 right-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "mode-card disabled opacity-20 grayscale",
                            children: [
                              e.jsxs("div", {
                                className: "mb-10",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "serif-bold text-2xl mb-2 tracking-[0.2em]",
                                    children: "命定终局",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[0.5rem] text-zinc-600 uppercase tracking-widest",
                                    children: "Fate's Final Reckoning",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "btn-galaxy btn-disabled w-full py-4",
                                children: "尘世锁死",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    id: "archive-page",
                    className: `page-layer justify-center items-center p-8 ${x === "archive" ? "" : "hidden-layer"}`,
                    children: e.jsxs("div", {
                      className: "w-full max-w-lg",
                      children: [
                        e.jsxs("header", {
                          className: "mb-12 text-center",
                          children: [
                            e.jsx("div", {
                              className: "w-12 h-px bg-white/20 mx-auto mb-8",
                            }),
                            e.jsx("h2", {
                              className:
                                "serif-bold text-3xl tracking-[0.3em] mb-3 uppercase",
                              children: "因果残卷 / ARCHIVES",
                            }),
                            e.jsx("p", {
                              className: "text-micro text-zinc-600 italic",
                              children: ye
                                ? "在众星的注视下，残卷正在汇聚"
                                : `在众星的注视下，你曾有 ${je.length} 次对弈`,
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "mb-16",
                          children:
                            je.length === 0
                              ? e.jsx("div", {
                                  className:
                                    "py-10 text-center text-[0.65rem] text-zinc-700 tracking-widest",
                                  children: "暂无残卷",
                                })
                              : e.jsx("div", {
                                  className:
                                    "archive-list overflow-y-auto space-y-0 border border-white/10 rounded",
                                  style: { maxHeight: "220px" },
                                  children: je.map((fe, He) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className: `flex justify-between py-3 px-3 border-b border-white/5 text-[0.65rem] last:border-b-0 ${fe.win ? "text-zinc-400" : "text-zinc-700"}`,
                                        children: [
                                          e.jsxs("span", {
                                            className:
                                              "tracking-widest flex-1 min-w-0",
                                            children: [
                                              "卷轴 #",
                                              String(fe.id || "")
                                                .slice(-4)
                                                .padStart(4, "0"),
                                              " - 对峙 ",
                                              p,
                                              " ",
                                              "[",
                                              fe.win ? "胜过天意" : "坠入尘埃",
                                              "] · ",
                                              fe.declared,
                                              "个",
                                              fe.point,
                                              "点 / 实相 ",
                                              fe.actual,
                                            ],
                                          }),
                                          e.jsx("span", {
                                            className: `font-mono flex-shrink-0 ml-2 ${fe.win ? "opacity-50" : "opacity-30"}`,
                                            children: bW(
                                              fe.endedAt ||
                                                fe.startedAt ||
                                                bx(),
                                            ),
                                          }),
                                        ],
                                      },
                                      fe.id || He,
                                    ),
                                  ),
                                }),
                        }),
                        e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsx("button", {
                              onClick: Fe,
                              className:
                                "btn-galaxy w-full bg-white text-black font-bold py-5 tracking-[0.5em]",
                              children: "开启神谕同步",
                            }),
                            e.jsx("button", {
                              onClick: () => y("entry"),
                              className:
                                "w-full text-micro text-zinc-700 py-3 hover:text-white transition-colors",
                              children: "回归虚无",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    id: "app",
                    className: `page-layer ${x === "app" ? "" : "hidden-layer"}`,
                    children: e.jsxs("div", {
                      className: "main-viewport",
                      children: [
                        e.jsxs("header", {
                          className:
                            "flex justify-between items-end border-b border-white/10 pb-3",
                          children: [
                            e.jsx("div", {
                              children: e.jsx("h2", {
                                className:
                                  "serif-bold text-lg tracking-[0.4em] uppercase",
                                children: "虚空妄言 · 神谕态",
                              }),
                            }),
                            e.jsx("div", {
                              className: "text-right",
                              children: e.jsxs("span", {
                                className:
                                  "text-[0.5rem] text-zinc-600 uppercase tracking-[0.3em] animate-pulse",
                                children: ["因果链接已锚定 · ", p],
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "game-grid grid grid-cols-1 md:grid-cols-12 gap-8 w-full min-w-0",
                          children: [
                            e.jsxs("div", {
                              className:
                                "md:col-span-5 flex flex-col min-w-0 overflow-hidden",
                              children: [
                                e.jsx("p", {
                                  className: "text-micro mb-3 text-zinc-700",
                                  children:
                                    "因果律流转 / CAUSALITY FLOW（叫号记录）",
                                }),
                                e.jsx("div", {
                                  id: "chat-container",
                                  ref: re,
                                  children: e.jsx("div", {
                                    id: "chat-flow",
                                    children:
                                      Z.length === 0
                                        ? e.jsx("div", {
                                            className:
                                              "text-[0.65rem] text-zinc-600 italic py-4",
                                            children: "暂无叫号",
                                          })
                                        : Z.map((fe, He) => {
                                            const Ie =
                                                fe.who === "player"
                                                  ? h
                                                  : `神性 · ${p}`,
                                              Ce =
                                                fe.who === "player"
                                                  ? "text-white"
                                                  : "text-zinc-500",
                                              Re =
                                                fe.type === "open"
                                                  ? "开"
                                                  : typeof fe.count ==
                                                        "number" &&
                                                      typeof fe.point ==
                                                        "number"
                                                    ? `${fe.count}个${fe.point}点`
                                                    : "—";
                                            return e.jsxs(
                                              "div",
                                              {
                                                className: "log-item",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "flex justify-between items-baseline mb-1",
                                                    children: e.jsx("span", {
                                                      className: `${Ce} text-[0.55rem] font-bold tracking-[0.3em] uppercase`,
                                                      children: Ie,
                                                    }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "text-[0.7rem] text-zinc-400 font-light tracking-wide",
                                                    children: Re,
                                                  }),
                                                  fe.man
                                                    ? e.jsxs("div", {
                                                        className:
                                                          "text-[0.6rem] italic text-zinc-700 mt-2 pl-3 border-l border-zinc-900",
                                                        children: [
                                                          "“",
                                                          fe.man,
                                                          "”",
                                                        ],
                                                      })
                                                    : null,
                                                ],
                                              },
                                              `${He}-${fe.who}-${Re}`,
                                            );
                                          }),
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "oracle-dice-column md:col-span-7 flex flex-col md:border-l md:border-white/5 md:pl-10 min-w-0",
                              children: [
                                e.jsxs("div", {
                                  className: "oracle-dice-scroll space-y-3",
                                  children: [
                                    e.jsxs("section", {
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-micro mb-1 text-zinc-700",
                                          children: "神谕降临 / MORTIS SPEAKS",