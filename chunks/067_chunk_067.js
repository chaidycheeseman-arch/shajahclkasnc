      } catch {}
      (await Yq(Ae),
        p((tt) =>
          (tt || []).map((Xe) =>
            String(Xe.id) === String(Ae)
              ? { ...Xe, sold: !0, soldAt: Date.now() }
              : Xe,
          ),
        ),
        v((tt) =>
          tt && String(tt.id) === String(Ae)
            ? { ...tt, sold: !0, soldAt: Date.now() }
            : tt,
        ),
        _((tt) =>
          tt && String(tt.id) === String(Ae)
            ? { ...tt, sold: !0, soldAt: Date.now() }
            : tt,
        ),
        L(""),
        F(""),
        $(""));
    }, [I, D, B, w, C, u]),
    he = l.useCallback(() => {
      y && (le(!1), _(y), N(!0));
    }, [y]),
    ge = l.useCallback(async () => {
      const Q = ne;
      (await U(), Q && (le(!1), r == null || r()));
    }, [U, ne, r]),
    J = l.useCallback(() => {
      const Q = [...C].reverse().find((Ve) => Ve.type === "order_card");
      if (!Q) return;
      const ve = document.getElementById(`bazaar-order-${Q.id}`);
      ve == null || ve.scrollIntoView({ behavior: "smooth", block: "center" });
    }, [C]),
    G = {
      fontFamily: "'Playfair Display','Times New Roman','Noto Serif SC',serif",
    };
  return e.jsxs("div", {
    className:
      "h-full w-full bg-[#050505] text-[#E5E5E5] flex flex-col relative overflow-hidden",
    children: [
      e.jsx("style", {
        children: `
        @keyframes encounter-bazaar-typing-dot {
          0%, 80%, 100% { transform: scale(0.45); opacity: 0.35; }
          40% { transform: scale(1); opacity: 1; }
        }
        .encounter-bazaar-typing-dot {
          animation: encounter-bazaar-typing-dot 1.2s infinite ease-in-out;
        }
        .encounter-bazaar-typing-dot:nth-of-type(1) { animation-delay: 0s; }
        .encounter-bazaar-typing-dot:nth-of-type(2) { animation-delay: -1s; }
        .encounter-bazaar-typing-dot:nth-of-type(3) { animation-delay: -0.8s; }
      `,
      }),
      e.jsx("header", {
        className: "shrink-0 p-8 pt-16 border-b border-white/5",
        children: e.jsxs("div", {
          className: "flex items-start justify-between gap-4",
          children: [
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("span", {
                  className:
                    "text-[9px] tracking-[0.35em] text-[#E2A6B7] block font-light",
                  children: "匿名寄售",
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: t,
                  className: "mt-2 text-left w-full group",
                  title: "返回桌面",
                  "aria-label": "返回桌面",
                  children: e.jsx("h1", {
                    className:
                      "serif italic text-4xl text-white group-active:opacity-80 transition-opacity",
                    style: {
                      fontFamily: "'Playfair Display','Times New Roman',serif",
                    },
                    children: "匿名集市",
                  }),
                }),
                g
                  ? e.jsx("p", {
                      className:
                        "mt-3 text-[11px] text-zinc-500 font-light leading-snug pr-2",
                      children: g,
                    })
                  : null,
              ],
            }),
            e.jsx("div", {
              className: "shrink-0 pt-10",
              children: e.jsxs("button", {
                type: "button",
                title: "刷新寄售列表",
                "aria-label": "刷新",
                onClick: ee,
                disabled: m,
                className:
                  "flex items-center gap-2 text-[14px] italic text-[#E2A6B7] hover:text-[#f0c4d2] disabled:opacity-40 transition-colors py-1 tracking-[0.08em]",
                style: G,
                children: [
                  m
                    ? e.jsx(Or, {
                        size: 15,
                        strokeWidth: 1.5,
                        className: "animate-spin shrink-0 opacity-90",
                      })
                    : null,
                  e.jsx("span", { children: m ? "刷新中" : "刷新" }),
                ],
              }),
            }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "flex-1 min-h-0 overflow-y-auto pb-[120px]",
        children:
          f.length === 0
            ? e.jsxs("div", {
                className:
                  "px-8 py-20 text-center text-[13px] text-zinc-500 font-light leading-relaxed",
                children: [
                  "暂无寄售条目。请先在聊天 App 中与角色",
                  e.jsx("strong", {
                    className: "text-zinc-400 font-normal",
                    children: "单聊",
                  }),
                  "几句，再点右上角刷新（将读取联系人与最近私聊，增量生成并写入本机存储）。",
                ],
              })
            : f.map((Q) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => H(Q),
                    className:
                      "w-full text-left border-b border-white/[0.04] px-8 py-6 active:bg-white/[0.02] relative",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-[8px] text-pink-200",
                            children: j4(Q.seller),
                          }),
                          e.jsx("div", {
                            className:
                              "flex-grow text-[9px] tracking-wider text-zinc-600 truncate",
                            children: Q.seller,
                          }),
                          e.jsx("div", {
                            className: "serif text-sm text-[#E2A6B7] shrink-0",
                            children: Q.price,
                          }),
                        ],
                      }),
                      e.jsx("h2", {
                        className: "serif italic text-3xl mb-6 text-white",
                        style: {
                          fontFamily:
                            "'Playfair Display','Times New Roman',serif",
                        },
                        children: Q.name,
                      }),
                      e.jsxs("div", {
                        className:
                          "w-full aspect-video bg-[#0f0f0f] rounded border border-[rgba(226,166,183,0.08)] relative overflow-hidden flex items-center justify-center",
                        onClick: (ve) => ce(ve, Q.id),
                        role: "presentation",
                        children: [
                          Q.sold
                            ? e.jsx(k4, {
                                className: "absolute right-3 top-3 z-[15]",
                              })
                            : null,
                          e.jsx("div", {
                            className: `absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[20px] bg-black/60 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${A.has(Q.id) ? "opacity-0 pointer-events-none scale-110" : ""}`,
                            children: e.jsx("span", {
                              className:
                                "text-[9px] tracking-[0.25em] text-white/45",
                              children: "点击查看外观",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center pointer-events-none text-[56px] font-black text-[rgba(226,166,183,0.04)] select-none leading-none",
                            children: Q.tag,
                          }),
                          e.jsxs("div", {
                            className:
                              "relative z-[1] text-center px-8 pointer-events-none",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[8px] text-[#E2A6B7] tracking-[0.2em] block mb-3",
                                children: "外观描述",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[13px] font-light text-zinc-300 leading-relaxed text-left",
                                children: N4(Q),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  Q.id,
                ),
              ),
      }),
      e.jsx("div", {
        className:
          "absolute inset-0 z-[1000] flex flex-col bg-[#050505] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
        style: {
          transform: y ? "translateY(0)" : "translateY(100%)",
          opacity: y ? 1 : 0,
          pointerEvents: y ? "auto" : "none",
        },
        "aria-hidden": !y,
        children: e.jsx("div", {
          className: "flex-1 min-h-0 overflow-y-auto",
          children: e.jsx("div", {
            className: "px-8 pb-28",
            style: { paddingTop: NQ },
            children:
              y &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4 mb-6",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-zinc-900 border border-pink-300/10 flex items-center justify-center text-pink-200 text-xs font-medium shrink-0",
                        children: j4(y.seller),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[8px] text-zinc-500 tracking-[0.2em] mb-1",
                            children: "匿名卖家",
                          }),
                          e.jsx("div", {
                            className:
                              "text-sm font-medium tracking-tight text-white truncate",
                            children: y.seller,
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: Y,
                        className:
                          "shrink-0 p-2 -mr-2 text-zinc-500 hover:text-white transition-colors rounded-full self-center",
                        "aria-label": "关闭详情",
                        children: e.jsx(bQ, {}),
                      }),
                    ],
                  }),
                  e.jsx("h2", {
                    className:
                      "serif italic text-3xl sm:text-4xl leading-tight text-white mb-6",
                    style: {
                      fontFamily: "'Playfair Display','Times New Roman',serif",
                    },
                    children: y.name,
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-3 mb-6",
                    children: [
                      e.jsx("span", {
                        className:
                          "bg-white/5 border border-white/10 px-3 py-1 text-[9px] text-zinc-400 tracking-wide",
                        children: y.condition,
                      }),
                      e.jsxs("span", {
                        className:
                          "bg-white/5 border border-white/10 px-3 py-1 text-[9px] text-[#E2A6B7] tracking-wide",
                        children: ["归档编号 #", gQ(y.id)],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm font-light text-zinc-400 mb-8 leading-relaxed",
                    children: y.intro,
                  }),
                  e.jsx("div", {
                    className: "text-3xl text-[#E2A6B7] mb-8 serif",
                    children: y.price,
                  }),
                  e.jsxs("div", {
                    className:
                      "relative w-full h-56 mb-4 rounded bg-[#0f0f0f] border border-[rgba(226,166,183,0.08)] overflow-hidden flex items-center justify-center cursor-pointer",
                    onClick: (Q) => ce(Q, y.id),
                    role: "presentation",
                    children: [
                      y.sold
                        ? e.jsx(k4, {
                            className: "absolute right-3 top-3 z-[15]",
                          })
                        : null,
                      e.jsx("div", {
                        className: `absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[20px] bg-black/60 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${A.has(y.id) ? "opacity-0 pointer-events-none scale-110" : ""}`,
                        children: e.jsx("span", {
                          className:
                            "text-[9px] tracking-[0.25em] text-white/45",
                          children: "点击查看外观",
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center pointer-events-none text-[72px] font-black text-[rgba(226,166,183,0.04)] select-none leading-none",
                        children: y.tag,
                      }),
                      e.jsxs("div", {
                        className:
                          "relative z-[1] text-center px-6 pointer-events-none max-h-[85%] overflow-y-auto",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[8px] text-[#E2A6B7] tracking-[0.2em] block mb-3",
                            children: "外观描述",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[13px] font-light text-zinc-300 leading-relaxed text-left",
                            children: N4(y),
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.hookLine || y.desc
                    ? e.jsx("p", {
                        className:
                          "text-[13px] text-zinc-500 font-light mb-8 leading-relaxed border-l-2 border-[#E2A6B7]/30 pl-3",
                        children: String(y.hookLine || y.desc || "").trim(),
                      })
                    : null,
                  e.jsxs("div", {
                    className:
                      "p-6 border border-white/5 bg-white/[0.02] rounded",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[9px] tracking-[0.2em] text-[#E2A6B7] mb-3",
                        children: "物品规格",
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm font-light text-zinc-400 leading-relaxed",
                        children: y.spec,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mt-16 border-t border-white/5 pt-10",
                    children: [
                      e.jsx("h4", {
                        className:
                          "text-[9px] tracking-[0.25em] text-[#E2A6B7] mb-8 font-medium",
                        children: "围观评论",
                      }),
                      e.jsx("div", {
                        className: "space-y-6",
                        children: (Array.isArray(y.comments)
                          ? y.comments
                          : []
                        ).map((Q, ve) =>
                          e.jsxs(
                            "div",
                            {
                              children: [
                                e.jsx("div", {
                                  className: "text-[10px] text-zinc-500 mb-1",
                                  children: Q.user || "@_",
                                }),
                                e.jsx("div", {
                                  className: "text-sm font-light text-zinc-400",
                                  children: Q.text,
                                }),
                              ],
                            },
                            `${Q.user}-${ve}`,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: he,
                    className:
                      "w-full py-5 mt-12 bg-[#E2A6B7] text-black font-bold text-[11px] tracking-[0.2em] rounded-sm",
                    children: "发起对话",
                  }),
                ],
              }),
          }),
        }),
      }),
      e.jsxs("div", {
        className:
          "absolute inset-0 z-[1100] flex flex-col bg-[#050505] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
        style: {
          transform: b ? "translateY(0)" : "translateY(100%)",
          opacity: b ? 1 : 0,
          pointerEvents: b ? "auto" : "none",
        },
        "aria-hidden": !b,
        children: [
          e.jsxs("header", {
            className:
              "shrink-0 px-[30px] pb-3 border-b border-white/[0.03] backdrop-blur-[10px] flex flex-col",
            style: { paddingTop: kQ },
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-start gap-3",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: ge,
                    className:
                      "min-w-0 flex-1 text-left rounded-sm -mx-1 px-1 py-1 transition-opacity active:opacity-75 hover:opacity-90 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E2A6B7]/50",
                    title: ne ? "返回 The Echoes" : "返回",
                    "aria-label": ne ? "返回 The Echoes" : "返回上一页",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[9px] uppercase tracking-[0.3em] text-[#E2A6B7] serif italic mb-1 truncate",
                        style: {
                          fontFamily:
                            "'Playfair Display','Times New Roman',serif",
                        },
                        children: (w == null ? void 0 : w.name) || "商品",
                      }),
                      e.jsx("h3", {
                        className: "serif text-2xl text-white truncate",
                        style: {
                          fontFamily:
                            "'Playfair Display','Times New Roman',serif",
                        },
                        children: (w == null ? void 0 : w.price) || "¥ 0.00",
                      }),
                      e.jsx("span", {
                        className:
                          "text-[8px] text-zinc-600 tracking-[0.15em] mt-1 block",
                        children: ne ? "点击返回 Echoes" : "点击返回",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex flex-col items-end shrink-0 pt-1",
                    children: e.jsx("button", {
                      type: "button",
                      onClick: () => {
                        Te ? J() : T(!0);
                      },
                      className:
                        "bg-[#E2A6B7] text-black px-5 py-2.5 mt-5 text-[10px] font-bold tracking-widest rounded-sm",
                      children: Te ? "已拍下" : "立即拍下",
                    }),
                  }),
                ],
              }),
              q
                ? e.jsx("p", {
                    className:
                      "text-[11px] text-zinc-500 mt-2 font-light leading-snug",
                    children: q,
                  })
                : null,
            ],
          }),
          e.jsxs("div", {
            className:
              "flex-1 min-h-0 overflow-y-auto px-5 py-4 space-y-3 scrollbar-none",
            children: [
              C.length === 0 &&
                e.jsx("div", {
                  className:
                    "text-center opacity-10 text-[8px] tracking-[0.5em] uppercase py-10 text-white",
                  children: "Secure Line Established",
                }),
              C.map((Q) =>
                Q.type === "order_card"
                  ? e.jsx(
                      "div",
                      {
                        id: `bazaar-order-${Q.id}`,
                        className:
                          "flex justify-end w-full overflow-x-hidden px-0.5",
                        children: e.jsx("div", {
                          className: "w-full max-w-[min(100%,380px)]",
                          children: e.jsx(jQ, {
                            item: Q.item,
                            recipientName: Q.recipientName,
                            phone: Q.phone,
                            address: Q.address,
                          }),
                        }),
                      },
                      Q.id,
                    )
                  : e.jsx(
                      "div",
                      {
                        className: `flex ${Q.isMe ? "justify-end" : "justify-start"} items-end overflow-x-hidden`,
                        children: e.jsx("div", {
                          className: `relative min-w-0 max-w-[85%] w-fit ${Q.isMe ? "order-first mr-2 flex flex-col items-end" : "ml-2"}`,
                          children: e.jsx("div", {
                            className: `text-[14px] leading-snug break-words rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.2)] min-w-0 w-fit max-w-full px-3 py-2 ${Q.isMe ? "bg-[linear-gradient(45deg,#E2A6B7,#8E626E)] text-black font-medium" : "bg-[rgba(15,15,15,0.8)] border border-white/[0.05] text-white/90 font-normal"}`,
                            style: { fontFamily: hQ },
                            children: Q.translation
                              ? e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("div", { children: Q.text }),
                                    e.jsx("div", {
                                      className:
                                        "my-2 border-t border-dashed border-white/30",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[13px] text-white/85 leading-snug",
                                      children: Q.translation,
                                    }),
                                  ],
                                })
                              : Q.text,
                          }),
                        }),
                      },
                      Q.id,
                    ),
              ),
              Z ? e.jsx(wQ, {}) : null,
              e.jsx("div", { ref: P }),
            ],
          }),
          e.jsx("div", {
            className:
              "shrink-0 bg-[#050505] px-[30px] pt-[30px] pb-[50px] border-t border-white/5",
            children: e.jsxs("div", {
              className:
                "flex items-center gap-5 pb-2 border-b border-white/10",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: ue,
                  disabled: Z || !(w != null && w.contactId),
                  className:
                    "text-[#E2A6B7] opacity-70 hover:opacity-100 disabled:opacity-25 transition-opacity shrink-0",
                  title: "催卖家回话（读人设与单聊习惯）",
                  "aria-label": "催卖家回复",
                  children: e.jsx(yQ, { className: Z ? "animate-pulse" : "" }),
                }),
                e.jsx("input", {
                  type: "text",
                  value: E,
                  onChange: (Q) => S(Q.target.value),
                  onKeyDown: (Q) => {
                    Q.key === "Enter" && se();
                  },
                  placeholder: "Type your narrative...",
                  className:
                    "flex-1 bg-transparent border-none text-white text-[16px] font-extralight outline-none min-w-0",
                  style: { fontWeight: 200 },
                }),
                e.jsx("button", {
                  type: "button",
                  className:
                    "text-[#E2A6B7] opacity-80 hover:opacity-100 disabled:opacity-30",
                  onClick: se,
                  disabled: !E.trim(),
                  "aria-label": "发送",
                  children: e.jsx(vQ, {}),
                }),
              ],
            }),
          }),
        ],
      }),
      j &&
        e.jsx("div", {
          className:
            "absolute inset-0 z-[3000] flex items-center justify-center bg-black/95 px-[30px]",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": `${z}-checkout-title`,
          children: e.jsxs("div", {
            className:
              "w-full max-w-[400px] bg-[#0a0a0a] p-10 border border-[rgba(226,166,183,0.2)] rounded",
            children: [
              e.jsx("h3", {
                id: `${z}-checkout-title`,
                className: "serif italic text-2xl mb-8 text-[#E2A6B7]",
                style: {
                  fontFamily: "'Playfair Display','Times New Roman',serif",
                },
                children: "确认订单 / CHECKOUT",
              }),
              e.jsx("input", {
                type: "text",
                className:
                  "w-full bg-transparent border-0 border-b border-[#222] py-4 text-white text-sm outline-none mb-6 placeholder:text-zinc-600",
                placeholder: "姓名 / NAME",
                value: I,
                onChange: (Q) => L(Q.target.value),
              }),
              e.jsx("input", {
                type: "tel",
                className:
                  "w-full bg-transparent border-0 border-b border-[#222] py-4 text-white text-sm outline-none mb-6 placeholder:text-zinc-600",
                placeholder: "联系电话 / PHONE",
                value: B,
                onChange: (Q) => F(Q.target.value),
              }),
              e.jsx("input", {
                type: "text",
                className:
                  "w-full bg-transparent border-0 border-b border-[#222] py-4 text-white text-sm outline-none mb-6 placeholder:text-zinc-600",
                placeholder: "收货地址 / ADDRESS",
                value: D,
                onChange: (Q) => $(Q.target.value),
              }),
              e.jsxs("div", {
                className: "flex justify-between items-center mt-6",
                children: [
                  e.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[9px] text-zinc-500 uppercase font-bold",
                        children: "Total Amount",
                      }),
                      e.jsx("span", {
                        className: "serif text-xl text-white",
                        children: w == null ? void 0 : w.price,
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: re,
                    className:
                      "bg-[#E2A6B7] text-black px-8 py-3 text-[10px] font-bold tracking-widest uppercase",
                    children: "Confirm & Pay",
                  }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                className:
                  "mt-10 text-[9px] text-zinc-600 uppercase tracking-[0.3em] w-full text-center",
                onClick: () => T(!1),
                children: "Cancel Transaction",
              }),
            ],
          }),
        }),
    ],
  });
};
function zC({ card: t, onClose: s }) {
  if (!t) return null;
  const n = Array.isArray(t.tags) ? t.tags : [];
  return e.jsxs("div", {
    className:
      "absolute inset-0 z-[60] bg-[#050505] flex flex-col overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "relative h-[23.1vh] overflow-hidden flex-shrink-0",
        children: [
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-b from-[#f3b3c7] via-[#ce84a8] to-[#6f405e]",
          }),
          e.jsx("div", {
            className: "absolute -inset-12 bg-[#f8c7d8]/55 blur-3xl",
          }),
          e.jsx("button", {
            type: "button",
            onClick: s,
            className:
              "absolute top-[4.5rem] right-6 h-8 w-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center z-10",
            "aria-label": "关闭详情",
            children: e.jsx(Ts, { size: 14 }),
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "relative -mt-12 rounded-t-[32px] bg-[#050505] px-8 pt-8 pb-8 flex-1 min-h-0 overflow-y-auto",
        children: [
          e.jsxs("div", {
            className: "flex items-end justify-between mb-6",
            children: [
              e.jsxs("div", {
                className: "min-w-0 pr-3",
                children: [
                  e.jsx("h2", {
                    className: "text-4xl text-white break-words",
                    children: `${t.name}, ${t.age}`,
                  }),
                  e.jsx("div", {
                    className:
                      "text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8b5968] mt-1 break-words",
                    children: t.tag,
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "px-3 py-1.5 bg-[#111] rounded text-[10px] uppercase tracking-widest border border-white/10 text-white/60 shrink-0",
                children: t.intent,
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex flex-wrap gap-2 mb-8",
            children: n.map((a) =>
              e.jsx(
                "span",
                {
                  className:
                    "px-4 py-2 text-[11px] tracking-[0.08em] rounded-lg border border-[#d894a7]/20 text-[#d894a7] bg-[#d894a7]/10",
                  children: a,
                },
                a,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "mb-8",
            children: [
              e.jsx("h3", {
                className:
                  "text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 font-bold",
                children: "档案档案 / INFO",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-y-6 gap-x-4",
                children: [
                  e.jsxs("div", {
                    className: "border-l border-white/10 pl-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[10px] text-white/40 uppercase tracking-wider mb-1",
                        children: "身高 Height",
                      }),
                      e.jsx("div", {
                        className: "text-[14px] text-white/90",
                        children: t.height,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-l border-white/10 pl-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[10px] text-white/40 uppercase tracking-wider mb-1",
                        children: "学历 Edu",
                      }),
                      e.jsx("div", {
                        className: "text-[14px] text-white/90",
                        children: t.edu,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-l border-white/10 pl-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[10px] text-white/40 uppercase tracking-wider mb-1",
                        children: "人格 MBTI",
                      }),
                      e.jsx("div", {
                        className: "text-[14px] text-white/90",
                        children: t.mbti,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-l border-white/10 pl-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[10px] text-white/40 uppercase tracking-wider mb-1",
                        children: "寻找 Seeking",
                      }),
                      e.jsx("div", {
                        className: "text-[14px] text-white/90",
                        children: t.looking,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mb-2",
            children: [
              e.jsx("h3", {
                className:
                  "text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 font-bold",
                children: "理想契合 / IDEAL TYPE",
              }),
              e.jsxs("p", {
                className:
                  "text-[15px] leading-relaxed text-white/70 font-light italic",
                children: ['"', t.ideal, '"'],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const _Q = ({ className: t = "", width: s = 60, height: n = 20 }) =>
    e.jsx("svg", {
      width: s,
      height: n,
      viewBox: "0 0 60 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      "aria-hidden": !0,
      children: e.jsx("path", {
        d: "M0 10H15L18 2L22 18L25 10H60",
        stroke: "currentColor",
        strokeWidth: "1.2",
        fill: "none",
      }),
    }),
  AQ = ({ className: t = "", size: s = 20 }) =>
    e.jsx("svg", {
      width: s,
      height: s,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      className: t,
      "aria-hidden": !0,
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.2",
        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      }),
    }),
  CQ = ({ className: t = "", size: s = 20 }) =>
    e.jsx("svg", {
      width: s,
      height: s,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      className: t,
      "aria-hidden": !0,
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.2",
        d: "M14 5l7 7-7 7M5 12h16",
      }),
    }),
  MQ = ({ onCommit: t }) => {
    const [s, n] = l.useState(0),
      [a, r] = l.useState(!1),
      i = (d) => {
        if (a) return;
        const u = d.currentTarget.getBoundingClientRect(),
          f = d.clientX - u.left,
          p = Math.max(0, Math.min(1, f / u.width));
        n(Math.round(p * 20 - 10));
      },
      o =
        s >= 0
          ? { left: "50%", width: `${s * 5}%`, background: "#E2A6B7" }
          : {
              left: `${50 + s * 5}%`,
              width: `${Math.abs(s) * 5}%`,
              background: "#444",
            },
      c = `${s > 0 ? "+" : ""}${s}`;
    return e.jsxs("div", {
      className:
        "mt-3 flex items-center gap-3 pl-2 animate-[fadeIn_0.5s_ease_forwards]",
      children: [
        e.jsx("span", {
          className:
            "text-[11px] min-w-[28px] text-right italic text-[#E2A6B7]",
          style: { fontFamily: "'Playfair Display','Times New Roman',serif" },
          children: c,
        }),
        e.jsx("div", {
          className: "relative w-[120px] h-5 flex items-center",
          children: e.jsx("div", {
            className: "w-full h-[2px] bg-white/10 relative cursor-pointer",
            onClick: i,
            role: "presentation",
            children: e.jsx("div", {
              className: "absolute h-full transition-all duration-200",
              style: o,
            }),
          }),
        }),
        e.jsx("button", {
          type: "button",
          onClick: () => {
            a || (t(s === 0 ? 1 : s), r(!0));
          },
          className: `text-[9px] tracking-[2px] uppercase font-bold px-2 py-0.5 rounded ${a ? "bg-[#333] text-[#666] cursor-default" : "bg-[#E2A6B7] text-black"}`,
          children: a ? "Done" : "AFF",
        }),
      ],
    });
  },
  TQ = ({ size: t = 26, className: s }) =>
    e.jsxs("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: s,
      children: [
        e.jsx("path", {
          d: "M12.5 19.5c-4.2 0-7.5-3.1-7.5-7 0-1.2.3-2.3.8-3.3L4.5 4.5l4.9 1.2c1-.5 2.1-.8 3.3-.8 4.1 0 7.3 3.2 7.3 7.1 0 3.9-3.4 7-7.5 7Z",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinejoin: "round",
        }),
        e.jsx("path", {
          d: "M12 9v6M9 12h6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round",
        }),
      ],
    }),
  IQ = ({ duration: t, text: s }) =>
    e.jsxs("div", {
      className: "flex flex-col min-w-[120px]",
      children: [
        e.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [
            e.jsx("div", {
              className:
                "w-6 h-6 bg-white rounded-full flex items-center justify-center",
              children: e.jsx(xr, {
                size: 12,
                className: "text-blue-600 ml-0.5",
                fill: "currentColor",
              }),
            }),
            e.jsxs("div", {
              className: "flex items-center space-x-0.5",
              children: [
                e.jsx("div", {
                  className: "w-0.5 h-2 bg-white/60 rounded-full",
                }),
                e.jsx("div", {
                  className: "w-0.5 h-3 bg-white/80 rounded-full",
                }),
                e.jsx("div", { className: "w-0.5 h-4 bg-white rounded-full" }),
                e.jsx("div", {
                  className: "w-0.5 h-3 bg-white/80 rounded-full",
                }),
                e.jsx("div", {
                  className: "w-0.5 h-2 bg-white/60 rounded-full",
                }),
              ],
            }),
            e.jsxs("span", {
              className: "text-white font-medium text-sm",
              children: [t, '"'],
            }),
          ],
        }),
        s &&
          e.jsx("div", {
            className:
              "mt-2 pt-2 border-t border-white/20 text-white text-[15px]",
            children: s,
          }),
      ],
    }),
  EQ = ({ onClose: t, user: s, onViewProfile: n, onVideoClick: a }) => {
    const {
        currentUser: r,
        privateChats: i,
        privateChatTyping: o,
        sendPrivateMessage: c,
        deletePrivateMessage: d,
        updatePrivateMessage: u,
        triggerPrivateReply: f,
        npcs: p,
        strangerChatPeers: m = {},
        getNearbyTruthProfile: h,
        getNearbyPublicCard: g,
        getNearbyAffection: x,
        nearbyAfterReplyPending: y = {},
        nearbyNeedBeforeSendRating: v = {},
        recordNearbyBeforeSendRating: b,
        recordNearbyAfterReplyRating: N,
        ensureNearbyChatRatingBaseline: w,
        summarizeNearbyChatHistory: _,
      } = ei(),
      [A, k] = l.useState(""),
      [C, M] = l.useState(null),
      [E, S] = l.useState(() => new Set()),
      [j, T] = l.useState(!1),
      [I, L] = l.useState([]),
      [B, F] = l.useState(null),
      [D, $] = l.useState(!1),
      [P, z] = l.useState(!1),
      [O, Z] = l.useState(!1),
      [K, q] = l.useState(""),
      [V, ne] = l.useState(!1),
      [le, ie] = l.useState(!1),
      [X, je] = l.useState(!1),
      [xe, ye] = l.useState(!1),
      [R, oe] = l.useState(null),
      ee = l.useRef(null),
      H = l.useRef(!1),
      Y = l.useRef(null),
      U = l.useRef(0),
      ce = l.useRef(0),
      pe = l.useRef(null),
      se = l.useRef(null),
      Te = l.useRef(null),
      ke = 3,
      W = 24,
      ue = (me) => {
        S((jt) => {
          const Gt = new Set(jt);
          return (Gt.has(me) ? Gt.delete(me) : Gt.add(me), Gt);
        });
      },
      re = (me) =>
        (typeof me == "string" ? me : "")
          .replace(/\s*\[TRANS:\s*[^\]]*$/gi, "")
          .trim() || "…",
      he = l.useCallback((me) => {
        (T(!0), L([me]));
      }, []),
      ge = l.useCallback((me) => {
        var jt;
        return (jt = me == null ? void 0 : me.touches) != null && jt[0]
          ? me.touches[0].clientX
          : ((me == null ? void 0 : me.clientX) ?? 0);
      }, []),
      J = l.useCallback((me) => {
        var jt;
        return (jt = me == null ? void 0 : me.touches) != null && jt[0]
          ? me.touches[0].clientY
          : ((me == null ? void 0 : me.clientY) ?? 0);
      }, []),
      G = l.useCallback(
        (me, jt) => {
          j ||
            ((U.current = ge(me)),
            (ce.current = J(me)),
            (Y.current = setTimeout(() => he(jt), 500)));
        },
        [j, he, ge, J],
      ),
      we = l.useCallback(
        (me) => {
          if (j) return;
          const jt = ge(me) - U.current,
            Gt = J(me) - ce.current;
          (Math.abs(jt) > 5 || Math.abs(Gt) > 5) &&
            Y.current &&
            (clearTimeout(Y.current), (Y.current = null));
        },
        [j, ge, J],
      ),
      Q = l.useCallback(() => {
        Y.current && (clearTimeout(Y.current), (Y.current = null));
      }, []),
      ve = l.useCallback(
        (me) => {
          j || (Y.current = setTimeout(() => he(me), 500));
        },
        [j, he],
      ),
      Ve = l.useCallback(() => {
        Y.current && (clearTimeout(Y.current), (Y.current = null));
      }, []),
      Ae = l.useCallback((me) => {
        L((jt) =>
          jt.includes(me) ? jt.filter((Gt) => Gt !== me) : [...jt, me],
        );
      }, []),
      te = () => {
        !(s != null && s.id) ||
          typeof d != "function" ||
          (d($e.id, I), T(!1), L([]));
      },
      Se = () => {
        if (I.length !== 1 || !(s != null && s.id)) return;
        const me = I[0],
          Gt = (i[$e.id] || []).find((Pt) => Pt.id === me);
        Gt &&
          (Gt.type === "text" || !Gt.type) &&
          typeof Gt.text == "string" &&
          (F(me), k(Gt.text), T(!1), L([]));
      },
      Fe = () => {
        (F(null), k(""));
      },
      $e = (() => {
        if (!s) return s;
        const me = (s == null ? void 0 : s.id) != null ? String(s.id) : "",
          jt = (p || []).find(
            (Pt) =>
              Pt &&
              (Pt.id === s.id ||
                String(Pt.douyinId || "") === me ||
                String(Pt.contactId || "") === me ||
                Pt.id === s.douyinId),
          );
        if (jt)
          return {
            ...s,
            id: jt.id,
            name: jt.name || s.name,
            avatar: jt.avatar || s.avatar,
          };
        const Gt = m[s == null ? void 0 : s.id];
        return Gt
          ? { ...s, name: Gt.name || s.name, avatar: Gt.avatar || s.avatar }
          : s;
      })(),
      tt = $e && i[$e.id] ? i[$e.id] : [],
      Xe = h == null ? void 0 : h($e == null ? void 0 : $e.id),
      ht = $e != null && $e.id ? (g == null ? void 0 : g($e.id)) : null,
      Pe = !!(ht || Xe),
      ut = ($e == null ? void 0 : $e.id) != null ? String($e.id) : "",
      _t = ut && typeof x == "function" ? x(ut) : 0,
      Ee = Math.max(
        0,
        Math.min(
          100,
          Number(ht == null ? void 0 : ht.truthUnlockAffection) || 70,
        ),
      ),
      fe = _t >= Ee,
      He = [...tt]
        .reverse()
        .find((me) => me && me.type === "shared_video" && me.sharedVideo),
      Ie = tt.length ? tt[tt.length - 1] : null,
      Ce =
        Pe &&
        ut &&
        !(o != null && o[ut]) &&
        Ie &&
        !Ie.isMe &&
        Ie.type !== "system",
      Re = Pe && ut && (y == null ? void 0 : y[ut]),
      De = Re,
      at =
        I.length === 1 &&
        (() => {
          const me = tt.find((jt) => jt.id === I[0]);
          return (
            me &&
            me.type !== "system" &&
            (me.type === "text" || !me.type) &&
            typeof me.text == "string"
          );
        })(),
      ft = (me = "smooth") => {
        var jt;
        (jt = ee.current) == null || jt.scrollIntoView({ behavior: me });
      };
    (l.useLayoutEffect(() => {
      s != null && s.id && ((H.current = !1), ft("auto"), (H.current = !0));
    }, [s == null ? void 0 : s.id]),
      l.useEffect(() => {
        if (!H.current) {
          (ft("auto"), (H.current = !0));
          return;
        }
        ft("smooth");
      }, [tt]),
      l.useEffect(() => {
        s != null && s.id && ft("smooth");
      }, [
        s == null ? void 0 : s.id,
        o == null ? void 0 : o[s == null ? void 0 : s.id],
      ]));
    const vt = () => {
        if (
          (ft("smooth"),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => ft("smooth"));
          }),
          setTimeout(() => ft("smooth"), 180),
          typeof window < "u" && window.visualViewport)
        ) {
          const me = () => ft("smooth");
          window.visualViewport.addEventListener("resize", me, { once: !0 });
        }
      },
      Oe = () => {
        if (!s || (!B && Re)) return;
        if (B) {
          (typeof u == "function" && u($e.id, B, { text: A.trim() || " " }),
            F(null),
            k(""));
          return;
        }
        if (!A.trim()) return;
        const me = C || ((He == null ? void 0 : He.id) ?? null);
        (c($e.id, A, me), k(""), M(null));
      },
      Qe = (me) => {
        me.key === "Enter" && !me.shiftKey && (me.preventDefault(), Oe());
      },
      Ye = l.useCallback(() => {
        const me = pe.current;
        if (!me) return;
        const jt = W * ke;
        ((me.style.height = "auto"),
          (me.style.maxHeight = `${jt}px`),
          (me.style.height = `${Math.min(me.scrollHeight, jt)}px`),
          (me.style.overflowY = me.scrollHeight > jt ? "auto" : "hidden"));
      }, []);
    l.useEffect(() => {
      Ye();
    }, [A, Ye]);
    const Ze = l.useCallback(async (me) => {
        var Gt;
        const jt = String(me || "").trim();
        if (!jt) return !1;
        try {
          if (
            (Gt = navigator == null ? void 0 : navigator.clipboard) != null &&
            Gt.writeText
          )
            return (await navigator.clipboard.writeText(jt), !0);
        } catch {}
        try {
          const Pt = document.createElement("textarea");
          ((Pt.value = jt),
            (Pt.style.position = "fixed"),
            (Pt.style.opacity = "0"),
            document.body.appendChild(Pt),
            Pt.focus(),
            Pt.select());
          const Wt = document.execCommand("copy");
          return (document.body.removeChild(Pt), !!Wt);
        } catch {
          return !1;
        }
      }, []),
      Ue = l.useCallback(async () => {
        if (
          !(!ut || typeof _ != "function") &&
          ($(!1), Z(!0), ie(!1), !String(K || "").trim())
        ) {
          ne(!0);
          try {
            const me = await _(ut);
            q(String(me || "").trim() || "暂无可总结内容。");
          } finally {
            ne(!1);
          }
        }
      }, [ut, _, K]);
    return (
      l.useEffect(() => {
        !ut || !Pe || (tt.length === 0 && typeof w == "function" && w(ut));
      }, [ut, Pe, tt.length, w]),
      l.useEffect(() => {
        if (!Pe || !ut) return;
        const me = Number(_t);
        if (!Number.isFinite(me)) return;
        const jt = se.current;
        if (jt == null) {
          se.current = me;
          return;
        }
        const Gt = Math.round((me - jt) * 10) / 10;
        ((se.current = me),
          !(!Number.isFinite(Gt) || Gt === 0) &&
            (oe(Gt),
            Te.current && clearTimeout(Te.current),
            (Te.current = setTimeout(() => oe(null), 1500))));
      }, [_t, Pe, ut]),
      l.useEffect(
        () => () => {
          Te.current && clearTimeout(Te.current);
        },
        [],
      ),
      e.jsxs("div", {
        className: `h-full w-full flex flex-col z-50 absolute top-0 left-0 ${Pe ? "bg-[#050505] text-white" : "bg-[#f2f3f5]"}`,
        children: [
          e.jsxs("div", {
            className: `px-[30px] pt-[60px] pb-5 flex justify-between items-end ${Pe ? "border-b border-white/[0.03] backdrop-blur-[10px]" : "border-b border-gray-200/50 bg-[#f2f3f5]"}`,
            children: [
              e.jsxs("div", {
                className: "flex items-end gap-3 min-w-0",
                children: [
                  Pe
                    ? null
                    : e.jsx("button", {
                        type: "button",
                        onClick: t,
                        "aria-label": "返回",
                        children: e.jsx(un, {
                          size: 26,
                          className: "text-black",
                        }),
                      }),
                  e.jsx("div", {
                    className: Pe
                      ? "cursor-pointer active:opacity-90 min-w-0"
                      : "cursor-pointer active:opacity-90",
                    onClick: () => {
                      if (Pe) {
                        t();
                        return;
                      }
                      n && $e && n($e.id);
                    },
                    role: "presentation",
                    children: Pe
                      ? e.jsxs("div", {
                          className: "min-w-0 -mt-12",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[9px] uppercase tracking-[0.3em] text-[#E2A6B7] italic",
                              style: {
                                fontFamily:
                                  "'Playfair Display','Times New Roman',serif",
                              },
                              children: "Chapter 04",
                            }),
                            e.jsx("h1", {
                              className: "text-[24px] leading-tight text-white",
                              style: {
                                fontFamily:
                                  "'Playfair Display','Times New Roman',serif",
                              },
                              children:
                                ($e == null ? void 0 : $e.name) ||
                                (s == null ? void 0 : s.name) ||
                                "Lyra Vesper",
                            }),
                          ],
                        })
                      : e.jsx("div", {
                          className:
                            "flex items-center gap-1.5 min-w-0 max-w-[65vw]",
                          children: e.jsx("span", {
                            className:
                              "text-[17px] font-medium text-black truncate",
                            children:
                              ($e == null ? void 0 : $e.name) ||
                              (s == null ? void 0 : s.name) ||
                              "用户",
                          }),
                        }),
                  }),
                ],
              }),
              Pe && ut
                ? e.jsxs("div", {
                    className: "flex flex-col items-end gap-2 shrink-0",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => $(!0),
                        className:
                          "mt-2 translate-y-5 px-1 py-1 -mr-1 rounded-md text-[#E2A6B7] hover:text-[#f0bfd0] active:opacity-80",
                        "aria-label": "打开设置",
                        children: e.jsx(_Q, {
                          className: "text-current",
                          width: 60,
                          height: 20,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsxs("span", {
                            className:
                              "text-[9px] uppercase tracking-[0.3em] text-[#E2A6B7]",
                            children: [
                              "Resonance ",
                              e.jsx("span", {
                                className: "tabular-nums",
                                children: _t.toFixed(1),
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => $(!0),
                            className:
                              "h-8 w-8 -mr-1 rounded-full text-[#E2A6B7]/90 hover:text-[#E2A6B7] active:opacity-80 flex items-center justify-center",
                            "aria-label": "设置",
                            children: e.jsx(zn, {
                              size: 14,
                              fill: "currentColor",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : e.jsx("button", {
                    type: "button",
                    className: "flex items-center shrink-0",
                    onClick: () => $(!0),
                    "aria-label": "更多设置",
                    children: e.jsx(MoreHorizontal, {
                      size: 26,
                      className: "text-black",
                    }),
                  }),
            ],
          }),
          e.jsxs("div", {
            className: `flex-1 overflow-y-auto ${Pe ? "px-5 py-4 space-y-3" : "p-4 space-y-4"}`,
            children: [
              Pe &&
                R != null &&
                e.jsx("div", {
                  className:
                    "pointer-events-none sticky top-2 z-20 flex justify-center",
                  children: e.jsx("div", {
                    className: `px-3 py-1 rounded-full text-[12px] tracking-[0.12em] border backdrop-blur-[8px] animate-[fadeIn_0.2s_ease_forwards] ${R > 0 ? "text-[#f8c7d7] border-[#E2A6B7]/45 bg-[#E2A6B7]/10" : "text-white/80 border-white/20 bg-white/[0.06]"}`,
                    style: {
                      fontFamily: "'Playfair Display','Times New Roman',serif",
                    },
                    children: `${R > 0 ? "+" : ""}${R}`,
                  }),
                }),
              tt.length === 0 &&
                e.jsxs("div", {
                  className: "text-center text-gray-400 text-sm mt-10",
                  children: ["开始和 ", s == null ? void 0 : s.name, " 聊天吧"],
                }),
              tt.map((me) => {
                var Gt, Pt, Wt;
                if ((me == null ? void 0 : me.type) === "system")
                  return e.jsxs(
                    "div",
                    {
                      className:
                        "w-full flex justify-center items-center gap-2",
                      onTouchStart: () => ve(me.id),
                      onTouchEnd: Q,
                      onTouchMove: Ve,
                      onMouseDown: () => ve(me.id),
                      onMouseUp: Q,
                      onMouseLeave: Ve,
                      onClick: () => j && Ae(me.id),
                      children: [
                        j &&
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${I.includes(me.id) ? "bg-[#fe2c55] border-[#fe2c55]" : "border-gray-300 bg-white"}`,
                            children:
                              I.includes(me.id) &&
                              e.jsx(On, {
                                size: 12,
                                className: "text-white",
                                strokeWidth: 3,
                              }),
                          }),
                        e.jsx("div", {
                          className:
                            "text-[12px] text-gray-400 px-3 py-1 rounded-full bg-transparent",
                          children: me.text,
                        }),
                      ],
                    },
                    me.id,
                  );
                const jt = I.includes(me.id);
                return e.jsx(
                  "div",
                  {
                    className: `flex ${me.isMe ? "justify-end" : "justify-start"} items-end overflow-x-hidden ${j ? "pr-2" : ""}`,
                    onTouchStart: (ct) => G(ct, me.id),
                    onTouchMove: we,
                    onTouchEnd: Q,
                    onMouseDown: (ct) => G(ct, me.id),
                    onMouseMove: (ct) => ct.buttons === 1 && we(ct),
                    onMouseUp: Q,
                    onMouseLeave: Q,
                    onClick: () => j && Ae(me.id),
                    children: e.jsxs("div", {
                      className: `flex space-x-2 ${me.isMe ? "w-full justify-end" : "w-full min-w-0"} items-end`,
                      children: [
                        j &&
                          !me.isMe &&
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mb-1 ${jt ? "bg-[#fe2c55] border-[#fe2c55]" : "border-gray-300 bg-white"}`,
                            children:
                              jt &&
                              e.jsx(On, {
                                size: 12,
                                className: "text-white",
                                strokeWidth: 3,
                              }),
                          }),
                        !me.isMe &&
                          !Pe &&
                          e.jsx("img", {
                            src:
                              ($e == null ? void 0 : $e.avatar) ||
                              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
                            alt: "avatar",
                            className:
                              "w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0",
                          }),
                        e.jsx("div", {
                          className: `relative min-w-0 max-w-[85%] ${me.isMe ? "w-fit max-w-[70vw] order-first mr-2 flex flex-col items-end" : "w-fit ml-2"}`,
                          children: e.jsxs("div", {
                            className: `relative min-w-0 ${(me.isMe, "w-fit max-w-full")}`,
                            children: [
                              e.jsx("div", {
                                className: `${me.type === "shared_video" ? "p-0 bg-transparent shadow-none rounded-none" : `text-[15px] leading-[1.7] break-words ${Pe ? "px-3 py-2 rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.2)]" : "px-[22px] py-[18px] rounded-xl"}`} min-w-0 ${(me.isMe, "w-fit max-w-full")} ${me.type === "shared_video" ? "" : me.isMe ? (Pe ? "bg-[linear-gradient(45deg,#E2A6B7,#8E626E)] text-black font-medium" : "bg-[#ea7ea6] text-white") : Pe ? "bg-[rgba(15,15,15,0.8)] border border-white/[0.05] text-white/90 font-light" : "bg-black text-white shadow-sm"}`,
                                children:
                                  me.type === "voice"
                                    ? e.jsx(IQ, {
                                        duration: me.duration,
                                        text: me.text,
                                      })
                                    : me.type === "shared_video" &&
                                        me.sharedVideo
                                      ? e.jsx("div", {
                                          className: "w-[90px] max-w-[45vw]",
                                          children: e.jsx("div", {
                                            className:
                                              "rounded-2xl overflow-hidden shadow-sm cursor-pointer active:opacity-90",
                                            onClick: (ct) => {
                                              var Kt;
                                              (ct.stopPropagation(),
                                                typeof a == "function" &&
                                                  (Kt = me.sharedVideo) !=
                                                    null &&
                                                  Kt.id &&
                                                  a(me.sharedVideo.id));
                                            },
                                            role: "button",
                                            title: "打开视频",
                                            children: e.jsxs("div", {
                                              className:
                                                "relative w-full aspect-[9/16] bg-gradient-to-b from-gray-800 to-black",
                                              children: [
                                                (Gt = me.sharedVideo) != null &&
                                                Gt.thumbnail
                                                  ? e.jsx("img", {
                                                      src: me.sharedVideo
                                                        .thumbnail,
                                                      alt: "",
                                                      className:
                                                        "absolute inset-0 w-full h-full object-cover",
                                                    })
                                                  : null,
                                                e.jsx("div", {
                                                  className:
                                                    "absolute inset-x-0 top-1/2 -translate-y-1/2 p-2",
                                                  children: e.jsxs("div", {
                                                    className:
                                                      "bg-black/40 backdrop-blur-[1px] rounded-lg px-2 py-1",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "text-white text-[10px] leading-snug line-clamp-2",
                                                        children: (() => {
                                                          var Kt,
                                                            fs,
                                                            gt,
                                                            ae,
                                                            nt;
                                                          const ct =
                                                            ((fs =
                                                              (Kt =
                                                                me.sharedVideo) ==
                                                              null
                                                                ? void 0
                                                                : Kt.firstScene) ==
                                                            null
                                                              ? void 0
                                                              : fs.visual) ??
                                                            ((nt =
                                                              (ae =
                                                                (gt =
                                                                  me.sharedVideo) ==
                                                                null
                                                                  ? void 0
                                                                  : gt.scenes) ==
                                                              null
                                                                ? void 0
                                                                : ae[0]) == null
                                                              ? void 0
                                                              : nt.visual) ??
                                                            "";
                                                          return ct &&
                                                            typeof ct ==
                                                              "object"
                                                            ? ct.zh ||
                                                                ct.cn ||
                                                                ct.translation ||
                                                                ct.text ||
                                                                ""
                                                            : String(
                                                                ct || "",
                                                              ).trim() ||
                                                                "（无画面描述）";
                                                        })(),
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-white/90 text-[10px] leading-snug line-clamp-1 mt-0.5",
                                                        children: (() => {
                                                          var Kt, fs;
                                                          const ct =
                                                            (fs =
                                                              (Kt =
                                                                me.sharedVideo) ==
                                                              null
                                                                ? void 0
                                                                : Kt.firstScene) ==
                                                            null
                                                              ? void 0
                                                              : fs.subtitle;
                                                          return ct &&
                                                            typeof ct ==
                                                              "object"
                                                            ? ct.zh ||
                                                                ct.cn ||
                                                                ct.translation ||
                                                                ct.text ||
                                                                ""
                                                            : String(
                                                                ct || "",
                                                              ).trim();
                                                        })(),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "absolute left-2 bottom-2",
                                                  children: e.jsx("div", {
                                                    className:
                                                      "bg-black/35 backdrop-blur-[1px] rounded-full px-2 py-0.5",
                                                    children: e.jsxs("div", {
                                                      className:
                                                        "text-white text-[10px] font-semibold truncate max-w-[72px]",
                                                      children: [
                                                        "@",
                                                        ((Wt =
                                                          (Pt =
                                                            me.sharedVideo) ==
                                                          null
                                                            ? void 0
                                                            : Pt.author) == null
                                                          ? void 0
                                                          : Wt.name) || "作者",
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        })
                                      : e.jsxs(e.Fragment, {
                                          children: [
                                            re(me.text),
                                            !me.isMe &&
                                              me.translation &&
                                              E.has(me.id) &&
                                              e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "border-t border-dashed border-gray-300 mt-2 pt-2",
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "text-gray-800 font-semibold text-[14px] mt-1 leading-snug",
                                                    children: me.translation,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                              }),
                              !me.isMe &&
                                me.translation &&
                                !j &&
                                e.jsx("button", {
                                  type: "button",
                                  onClick: (ct) => {
                                    (ct.stopPropagation(), ue(me.id));
                                  },
                                  className: `absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-3 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border ${E.has(me.id) ? "text-gray-500 bg-gray-100 border-gray-200 hover:bg-gray-200" : "text-[#03CCD9] bg-[#03CCD9]/10 border-transparent hover:bg-[#03CCD9]/20"}`,
                                  title: E.has(me.id) ? "收起翻译" : "显示翻译",
                                  children: e.jsx(Pm, {
                                    size: 12,
                                    strokeWidth: 2,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        me.isMe &&
                          !Pe &&
                          e.jsx("img", {
                            src:
                              (r == null ? void 0 : r.avatar) ||
                              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                            alt: "avatar",
                            className:
                              "w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0",
                          }),
                        j &&
                          me.isMe &&
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mb-1 ${jt ? "bg-[#fe2c55] border-[#fe2c55]" : "border-gray-300 bg-white"}`,
                            children:
                              jt &&
                              e.jsx(On, {
                                size: 12,
                                className: "text-white",
                                strokeWidth: 3,
                              }),
                          }),
                      ],
                    }),
                  },
                  me.id,
                );
              }),
              Ce &&
                e.jsx("div", {
                  className: "flex justify-start pr-2 -mt-3 mb-1",
                  children: e.jsx(MQ, {
                    onCommit: (me) => {
                      ut && typeof N == "function" && N(ut, me);
                    },
                  }),
                }),
              $e &&
                (o == null ? void 0 : o[$e.id]) &&
                e.jsx("div", {
                  className: "flex justify-start items-start",
                  children: e.jsx("div", {
                    className: `max-w-[85%] ${Pe ? "" : "ml-2"}`,
                    children: e.jsx("div", {
                      className: `px-3 rounded-xl w-fit ${Pe ? "bg-[rgba(15,15,15,0.8)] border border-white/[0.05] text-white" : "bg-black text-white shadow-sm"} h-[40px] flex items-center`,
                      children: e.jsxs("span", {
                        className:
                          "inline-flex items-center gap-1 leading-none",
                        children: [
                          e.jsx("span", {
                            className:
                              "dy-typing-dot w-1.5 h-1.5 bg-white/70 rounded-full",
                          }),
                          e.jsx("span", {
                            className:
                              "dy-typing-dot w-1.5 h-1.5 bg-white/70 rounded-full",
                          }),
                          e.jsx("span", {
                            className:
                              "dy-typing-dot w-1.5 h-1.5 bg-white/70 rounded-full",
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              e.jsx("div", { ref: ee }),
            ],
          }),
          e.jsx("div", {
            className: `${Pe ? "bg-[#050505] px-[30px] pt-[30px] pb-[50px]" : "bg-[#f2f3f5] px-3 py-2 pb-6"}`,
            children: j
              ? e.jsxs("div", {
                  className:
                    "bg-white rounded-xl px-3 py-2.5 flex items-center justify-between shadow-sm",
                  children: [
                    e.jsxs("span", {
                      className: "text-[14px] text-gray-600 font-medium",
                      children: ["已选 ", I.length, " 条"],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [
                        I.length === 1 &&
                          at &&
                          e.jsx("button", {
                            type: "button",
                            onClick: Se,
                            className:
                              "p-2 rounded-lg text-gray-600 hover:bg-gray-100",
                            title: "编辑",
                            children: e.jsx(_c, { size: 20 }),
                          }),
                        e.jsx("button", {
                          type: "button",
                          onClick: te,
                          className:
                            "p-2 rounded-lg text-red-500 hover:bg-red-50",
                          title: "删除",
                          children: e.jsx(_n, { size: 20 }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (T(!1), L([]));
                          },
                          className:
                            "p-2 rounded-lg text-gray-400 hover:bg-gray-100",
                          title: "取消",
                          children: e.jsx(Ts, { size: 20 }),
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    null,
                    e.jsxs("div", {
                      className: `flex items-center gap-5 pb-2 ${Pe ? "border-b border-white/10" : "bg-white rounded-xl px-2 py-2.5 shadow-sm"}`,
                      children: [
                        B &&
                          e.jsx("button", {
                            type: "button",
                            onClick: Fe,
                            className:
                              "mr-2 p-1.5 rounded-full text-gray-500 hover:bg-gray-100 shrink-0 flex items-center justify-center",
                            title: "取消编辑",
                            children: e.jsx(Ts, { size: 20 }),
                          }),
                        !B &&
                          !Pe &&
                          e.jsx("button", {
                            type: "button",
                            className:
                              "mr-3 ml-1 cursor-pointer shrink-0 p-0 border-0 bg-transparent text-[#cf4f7f] active:opacity-70",
                            title: "快捷回复",
                            "aria-label": "快捷回复",
                            onClick: () => {
                              De ||
                                ($e != null &&
                                  $e.id &&
                                  typeof f == "function" &&
                                  f($e.id));
                            },
                            children: e.jsx(TQ, {
                              size: 26,
                              className: "text-[#cf4f7f]",
                            }),
                          }),
                        Pe
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  className:
                                    "text-[#E2A6B7] opacity-80 hover:opacity-100 transition-transform hover:scale-110",
                                  onClick: () => {
                                    De ||
                                      ($e != null &&
                                        $e.id &&
                                        typeof f == "function" &&
                                        f($e.id));
                                  },
                                  "aria-label": "快捷回复",
                                  children: e.jsx(AQ, {}),
                                }),
                                e.jsx("input", {
                                  ref: pe,
                                  value: A,
                                  onChange: (me) => k(me.target.value),
                                  onKeyDown: Qe,
                                  onFocus: vt,
                                  onClick: vt,
                                  placeholder: "Type your narrative...",
                                  className:
                                    "flex-1 bg-transparent border-none text-white text-[16px] font-[200] outline-none min-w-0",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  className:
                                    "text-[#E2A6B7] opacity-80 hover:opacity-100 transition-transform hover:scale-110",
                                  onClick: Oe,
                                  "aria-label": "发送",
                                  disabled: !A.trim(),
                                  children: e.jsx(CQ, {}),
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("textarea", {
                                  ref: pe,
                                  value: A,
                                  onChange: (me) => k(me.target.value),
                                  onKeyDown: Qe,
                                  onFocus: vt,
                                  onClick: vt,
                                  onInput: Ye,
                                  placeholder: B
                                    ? "修改后发送"
                                    : C
                                      ? "回复分享的视频…"
                                      : "发送消息",
                                  rows: 1,
                                  className:
                                    "flex-1 bg-transparent text-black text-[16px] placeholder-gray-400 outline-none min-w-0 resize-none overflow-y-auto py-1 leading-6 max-h-[4.5rem]",
                                  style: { minHeight: W + "px" },
                                }),
                                e.jsx("div", {
                                  className:
                                    "flex items-center shrink-0 mr-0.5",
                                  children: A.trim()
                                    ? e.jsx("button", {
                                        type: "button",
                                        onClick: Oe,
                                        className:
                                          "flex items-center justify-center w-9 h-9 rounded-full bg-[#e36a95] shadow-[0_2px_8px_rgba(227,106,149,0.45)] active:scale-95 transition-transform",
                                        "aria-label": "发送",
                                        children: e.jsx(ri, {
                                          size: 17,
                                          className: "text-white",
                                          strokeWidth: 2.4,
                                        }),
                                      })
                                    : e.jsx(Y1, {
                                        size: 26,
                                        className: "text-[#cf4f7f]",
                                        strokeWidth: 1.5,
                                      }),
                                }),
                              ],
                            }),
                      ],
                    }),
                  ],
                }),
          }),
          D &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("button", {
                  type: "button",
                  className:
                    "absolute inset-0 bg-black/70 z-[70] backdrop-blur-[4px]",
                  onClick: () => $(!1),
                  "aria-label": "关闭菜单",
                }),
                e.jsxs("div", {
                  className:
                    "absolute left-1/2 top-1/2 z-[71] w-[280px] max-w-[88vw] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-[#E2A6B7]/25 bg-[linear-gradient(180deg,#121012_0%,#0a0a0b_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(226,166,183,0.12)] px-4 py-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "mb-3 text-center text-[10px] uppercase tracking-[0.35em] text-[#E2A6B7]/80",
                      children: "Nocturne Menu",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: `w-full text-left px-4 py-3 rounded-xl text-sm transition-colors ${Xe ? "text-[#f5d7e1] bg-white/[0.03] hover:bg-[#E2A6B7]/10" : "text-white/35 bg-white/[0.02] cursor-not-allowed"}`,
                      disabled: !Xe,
                      onClick: () => {
                        Xe && ($(!1), z(!0));
                      },
                      children: "真实人设",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: `w-full text-left mt-2 px-4 py-3 rounded-xl text-sm transition-colors ${ht ? "text-[#f5d7e1] bg-white/[0.03] hover:bg-[#E2A6B7]/10" : "text-white/35 bg-white/[0.02] cursor-not-allowed"}`,
                      disabled: !ht,
                      onClick: () => {
                        ht && ($(!1), ye(!0));
                      },
                      children: "公开信息",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: `w-full text-left mt-2 px-4 py-3 rounded-xl text-sm transition-colors ${ut ? "text-[#f5d7e1] bg-white/[0.03] hover:bg-[#E2A6B7]/10" : "text-white/35 bg-white/[0.02] cursor-not-allowed"}`,
                      disabled: !ut,
                      onClick: Ue,
                      children: "总结聊天记录",
                    }),
                  ],
                }),
              ],
            }),
          P &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("button", {
                  type: "button",
                  className:
                    "absolute inset-0 bg-black/75 z-[72] backdrop-blur-[6px]",
                  onClick: () => z(!1),
                  "aria-label": "关闭真实人设",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 z-[73] flex items-center justify-center pointer-events-none",
                  children: e.jsxs("div", {
                    className:
                      "relative w-[82%] max-w-[320px] max-h-[80vh] bg-[linear-gradient(165deg,#121212_0%,#080808_100%)] border border-[#E2A6B7]/20 rounded-[4px] px-[30px] pt-10 pb-8 shadow-[0_50px_100px_rgba(0,0,0,0.8)] pointer-events-auto overflow-visible",
                    children: [
                      e.jsx("div", {
                        className: `absolute left-1/2 -top-[25px] -translate-x-1/2 w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(226,166,183,0.2)] ${fe ? "bg-[#E2A6B7] text-[#080808] border border-transparent shadow-[0_0_30px_rgba(226,166,183,0.4)]" : "bg-[#080808] text-[#E2A6B7] border border-[#E2A6B7]"}`,
                        children: e.jsx("svg", {
                          width: "20",
                          height: "20",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          "aria-hidden": !0,
                          children: fe
                            ? e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5",
                                d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
                              })
                            : e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5",
                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z",
                              }),
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "text-center mb-[30px] border-b border-[#E2A6B7]/10 pb-5",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[9px] tracking-[0.4em] uppercase text-[#E2A6B7] italic block mb-2",
                            style: {
                              fontFamily:
                                "'Playfair Display','Times New Roman',serif",
                            },
                            children: "Classified",
                          }),
                          e.jsx("h2", {
                            className: "text-[28px] italic -tracking-[0.02em]",
                            style: {
                              fontFamily:
                                "'Playfair Display','Times New Roman',serif",
                            },
                            children: "真实人设",
                          }),
                          e.jsx("div", {
                            className: "mt-3 flex justify-center",
                            children: e.jsx("button", {
                              type: "button",
                              className:
                                "px-3 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase border border-[#E2A6B7]/35 text-[#f3c4d4] hover:bg-[#E2A6B7]/10",
                              onClick: async () => {
                                (await Ze(Xe || "")) &&
                                  (je(!0), setTimeout(() => je(!1), 1200));
                              },
                              children: X ? "已复制" : "复制",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "relative max-h-[46vh] overflow-y-auto pr-1",
                        children: [
                          fe
                            ? null
                            : e.jsx("div", {
                                className:
                                  "absolute inset-0 z-10 flex items-start justify-center pt-3 pointer-events-none",
                                children: e.jsxs("p", {
                                  className:
                                    "text-[12px] text-[#f2c9d7] text-center font-medium leading-snug",
                                  children: ["好感度达到 ", Ee, " 解锁正文"],
                                }),
                              }),
                          e.jsx("div", {
                            className: `transition-all duration-700 ${fe ? "blur-0 select-text pointer-events-auto" : "blur-[12px] select-none pointer-events-none"}`,
                            children: e.jsx("div", {
                              className: "flex flex-col gap-6",
                              children: e.jsxs("section", {
                                children: [
                                  e.jsx("h4", {
                                    className:
                                      "text-[10px] uppercase tracking-[0.2em] text-[#8E626E] mb-2",
                                    children: "Core Identity / 核心本质",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[15px] leading-[1.7] font-light text-white/80 whitespace-pre-wrap break-words",
                                    style: {
                                      fontFamily:
                                        "'Playfair Display','Times New Roman',serif",
                                    },
                                    children: Xe || "暂无真实人设",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "mt-10 text-[9px] text-center text-white/20 tracking-[0.1em] uppercase",
                        children: "Nocturne Archives © Private Access Only",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          xe &&
            ht &&
            e.jsx("div", {
              className: "absolute inset-0 z-[74]",
              children: e.jsx(zC, { card: ht, onClose: () => ye(!1) }),
            }),
          O &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("button", {
                  type: "button",
                  className:
                    "absolute inset-0 bg-black/75 z-[75] backdrop-blur-[6px]",
                  onClick: () => Z(!1),
                  "aria-label": "关闭聊天总结",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 z-[76] flex items-center justify-center pointer-events-none",
                  children: e.jsxs("div", {
                    className:
                      "relative w-[84%] max-w-[340px] max-h-[78vh] bg-[linear-gradient(165deg,#121212_0%,#080808_100%)] border border-[#E2A6B7]/20 rounded-[8px] px-5 pt-6 pb-5 shadow-[0_50px_100px_rgba(0,0,0,0.8)] pointer-events-auto",
                    children: [
                      e.jsxs("div", {
                        className:
                          "text-center border-b border-[#E2A6B7]/10 pb-4",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[9px] tracking-[0.4em] uppercase text-[#E2A6B7] italic",
                            children: "Synopsis",
                          }),
                          e.jsx("h3", {
                            className: "mt-1 text-[22px] italic",
                            style: {
                              fontFamily:
                                "'Playfair Display','Times New Roman',serif",
                            },
                            children: "聊天总结",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "mt-4 max-h-[48vh] overflow-y-auto pr-1 text-[14px] leading-[1.7] text-white/85 whitespace-pre-wrap break-words",
                        children: V
                          ? "正在总结聊天记录…"
                          : K || "暂无可总结内容。",
                      }),
                      e.jsx("div", {
                        className: "mt-4 flex justify-end",
                        children: e.jsx("button", {
                          type: "button",
                          className:
                            "px-3 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase border border-[#E2A6B7]/35 text-[#f3c4d4] hover:bg-[#E2A6B7]/10",
                          onClick: async () => {
                            (await Ze(K || "")) &&
                              (ie(!0), setTimeout(() => ie(!1), 1200));
                          },
                          children: le ? "已复制" : "复制",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        ],
      })
    );
  };
function LQ(t) {
  const n = String(t || "")
    .replace(/```(?:json)?/gi, "")
    .trim();
  if (!n) throw new Error("Empty response body");
  const a = (d) =>
      !!d &&
      typeof d == "object" &&
      (Array.isArray(d.cards) || Array.isArray(d.truthProfiles)),
    r = (d) => {
      const u = String(d || "").trim();
      if (!u) return null;
      try {
        return JSON.parse(u);
      } catch {
        return null;
      }
    },
    i = (d, u) => {
      const f = d[u];
      if (f !== "{" && f !== "[") return null;
      const p = f === "{" ? "}" : "]";
      let m = 0,
        h = !1,
        g = !1;
      for (let x = u; x < d.length; x += 1) {
        const y = d[x];
        if (h) {
          g ? (g = !1) : y === "\\" ? (g = !0) : y === '"' && (h = !1);
          continue;
        }
        if (y === '"') {
          h = !0;
          continue;
        }
        if ((y === f && (m += 1), y === p && (m -= 1), m === 0))
          return r(d.slice(u, x + 1));
      }
      return null;
    },
    o = r(n);
  if (a(o) || o) return o;
  let c = null;
  for (let d = 0; d < n.length; d += 1) {
    const u = n[d];
    if (u !== "{" && u !== "[") continue;
    const f = i(n, d);
    if (f && (c || (c = f), a(f))) return f;
  }
  if (c) return c;
  throw new Error("No complete JSON payload found");
}
const DQ = `realPersona 必须是**一段合法 XML 字符串**，且**仅有唯一根节点** \`<character>…</character>\`，**不得**在 \`</character>\` 之后再输出任何兄弟根标签。

根内一级子节点**顺序固定**且**缺一不可**（仅此 11 段，到此为止）：
basic_info, appearance, personality, abilities, background, relationships, emotional_core, core_conflict, behavioral_symbols, key_events, quotes。

层级与标签名必须与下列骨架一致（每个 <item>、<quote>、<event>、<name>、<role> 等子节点都要出现）。把该骨架视为**固定模板（类似正则/填空格式）**：**只允许往现有标签内填入文字**，不得新增、删除、改名、调序任何标签。**禁止**在正文里写「待定」「未详」「略」「TBD」等占位；**每一个**叶子节点都必须输出**具体、可演可写**的中文内容，**禁止**空标签或整段留白。
**排版**：在 realPersona 这一整段 XML 字符串内，须**分段换行**以利阅读——例如每个一级子节点闭合后换行；同一标签内若句子较长，可在句末标点后换行；**不得**拆断标签名或破坏 XML 合法结构。

<character>
  <basic_info><name/><former_name/><gender/><age/><occupation/><origin/><current_status/></basic_info>
  <appearance>
    <hair><item/><item/></hair>
    <features><item/><item/><item/></features>
    <body><item/><item/></body>
    <style><item/><item/></style>
  </appearance>
  <personality>
    <core_traits><item/><item/></core_traits>
    <inner_traits><item/><item/><item/></inner_traits>
    <behavior_patterns><item/><item/><item/><item/></behavior_patterns>
    <values><item/><item/><item/></values>
  </personality>
  <abilities>
    <primary_skill><item/><item/><item/></primary_skill>
    <artistic_traits><item/><item/></artistic_traits>
    <craft><item/><item/></craft>
  </abilities>
  <background>
    <origin_story><item/><item/><item/></origin_story>
    <trauma><item/><item/><item/></trauma>
    <psychological_impact><item/><item/><item/></psychological_impact>
    <migration><item/><item/></migration>
  </background>
  <relationships>
    <key_partner><name/><dynamic><item/><item/><item/></dynamic><role><item/><item/></role></key_partner>
    <group_context><name/><role/><dynamic><item/><item/></dynamic></group_context>
    <antagonist><name/><role/><impact><item/><item/></impact></antagonist>
  </relationships>
  <emotional_core>
    <love><item/><item/><item/></love>
    <fear><item/><item/><item/></fear>
    <desire><item/><item/><item/></desire>
  </emotional_core>
  <core_conflict>
    <internal><item/><item/></internal>
    <external><item/><item/><item/></external>
  </core_conflict>
  <behavioral_symbols>
    <symbol><item/><item/><item/></symbol>
    <metaphor><item/><item/></metaphor>
  </behavioral_symbols>
  <key_events>
    <event/><event/><event/><event/><event/>
  </key_events>
  <quotes>
    <quote/><quote/><quote/>
  </quotes>
</character>

**禁止**输出 \`extended_background\`、\`critical_event\`、\`survival_phase\`（含 division_of_labor 等）、\`intimate_daily\`、\`relationship_redefinition\`、\`psychological_extension\` 及任何与上列 11 段平级或嵌套于其外的扩展块；若叙事需要，请**压缩写入** background / key_events / quotes 等**已有**节点内，勿另起结构。再次强调：realPersona 只允许是该模板的“填空结果”。

XML 内正文用**简练中文**，整体要有**苏感**：靠细节、留白、克制与具体处境让人心软或上头，**不靠**说教、堆砌设定。禁止油腻（土味情话、刻意霸总腔、套路撩拨）、禁止**霸总文学套路**（全员臣服、占有欲宣言、邪魅一笑式描写）、禁止中二（尬燃宣言、契约体、动漫反派口吻、中二金句）。quotes 须像**真人说的话**，短、生活化。`;
async function $Q(t, s, n = {}) {
  if (!(t != null && t.endpoint) || !(t != null && t.key))
    throw new Error("API not configured");
  const a = !!n.facadeStyleEnabled,
    r = String(n.facadeStyleText || "").trim(),
    i =
      a && r
        ? `

【本次刷新·前台定制】用户指定下列气质/题材/关键词（**只**用于 cards 各字段与二级页展示文案；**不得**据此简化或改写 realPersona 的 XML 结构与深度）。请让网名、签名、tag、intent、tags、height/edu/mbti/looking/ideal 等**整体贴合**这些关键词，但仍禁止油腻、霸总套路、中二。**若**用户关键词含明星/爱豆/偶像/艺人等：**cards 与二级页仍不得展示台前明星身份**（须用普通人设掩护），真实星光设定**只写进** realPersona。
${r}`
        : a && !r
          ? `

【本次刷新·前台定制】开关已开但用户未填关键词：前台资料仍按默认男主向规则生成，realPersona 规则不变。`
          : "",
    o = `你是「啾音·附近」角色编剧。只输出合法 JSON，不要 markdown。
硬性规则：
1) 一次只生成 **2** 位角色，均为**成年男性**，整体要**小说男主向**且具备**苏感**：让人愿意停驻的气质张力，靠**具体细节、克制、处境与潜台词**营造，**不靠**喊口号、堆设定、尬撩。两位须**差异明显**，并落在**不同气质象限**（可自行发明职业与经历）。
   允许出现「危险/反派感/渣感」角色（可 0~1 位），但必须保持**迷人、可信、有吸引力**，呈现为“会让人上头但不安全”的小说男主气质；禁止脸谱化恶人、低俗油腻和幼稚中二。
   **气质谱系（仅作方向，禁止照抄下列任何标签原文、示例职业或示例句；须原创具体人设）**：例如——意气风发少年感链路；温柔年上/稳妥包容；阴郁破碎或黏着依恋气质；生活化人夫/育儿感；沉重而专注的深情；直球年下、野心与坦率并存；高岭疏离、禁欲或非人感边缘；异域或旧时代剪影等。**禁止**把用户可能给出的类型名原样贴进输出当人设名。
2) **前台资料层**（cards 全部字段，含二级详情页会用到的 height/edu/mbti/looking/ideal/tags/intent/tag/name/bio、**matchOpeningLine** 等）：模拟**真实社交/约会产品里的个人页**——对外展示可与真实底稿不一致。字段可全真、全假或混合，读起来像**真人会填的资料**。
   **【明星/爱豆/偶像 · 公开层禁令】**：若 realPersona 实为艺人、偶像、爱豆、男团/女团、流量艺人、练习生等，**cards 与二级页展示必须完全扮演普通人公开身份**（如后期、剪辑、编导助理、品牌文案、咖啡师、课程顾问、独立摄影等），**不得**在任一 card 字段或可推断语境中出现：**明星、偶像、爱豆、艺人（特指台前艺人）、顶流、练习生、出道、成团、C位、饭圈、应援、打榜、宣发、巡演**等或同义表达；网名与签名也不得暗示艺人身份。**仅** truthProfiles.realPersona（XML）内可写真实艺人设定与行业细节；**matchOpeningLine** 也必须符合「普通人设」口吻，不得剧透星光身份。
   **bio（卡片个性签名）【核心约束】**：必须是**生活化的潜台词**，或**符合人设的当下状态**（一两句即可），暗中**点出核心性格、身份感或萌点**；可略带网感与留白。**禁止**喊口号、**禁止**中二台词（如「错的不是我」类宣言）、禁止说明书/简历句式、禁止油腻土味。语气参考方向：**少年感**可用天气/体感一句带过；**稳妥型**可用日常关照式半句；**阴郁黏着**可用短促催促或冷感陈述——均须**自己重写**，勿复用任何给定例句。
3) **后台真人设**（truthProfiles.realPersona）：叙事**底稿**，须**完整、具体**填满规则中的 **<character> 全部节点**（至 quotes 为止）：**禁止**「待定」类占位；XML 内**统一自洽**；**禁止**再输出 survival_phase / intimate_daily 等已废除的扩展根标签；若需写到相处或危机，请并入 background、key_events、quotes 等已有节点；适当**换行分段**；要有苏感与文学质感；禁止油腻、霸总套路、中二；禁止涉黄涉政。
4) **绝对禁止**（前台与 XML 通用）：油腻话术、霸总文学腔、中二口号与尬燃台词。
5) **匹配后啾音私信开场**（每条 card 必须含 **matchOpeningLine**）：**一条字符串**，**恰好一句**（角色第一视角、像在啾音里刚发给你的私信，可含逗号但不要拆成多句）。创作时须**同时**：①心里对齐 **realPersona**；②嘴上**扮演**该卡**公开人设**（网名、bio、tag、二级页等），**禁止**剧透真实底稿；**禁止**万能搭讪（如「匹配成功」「愿意聊聊吗」「在吗」）；禁止油腻霸总中二。`,
    c = `请输出 JSON（仅此一个对象）：
**id 规则**：每条 card 的 id 必须为**全局唯一**字符串，禁止照抄示例里的 nearby_001；请自行生成，例如 \`nearby_\` + 8 位随机字母数字，或 \`nb_\` + 时间戳片段 + 序号，确保每次刷新互不重复。

{
  "cards": [
    {
      "id": "nearby_示例勿抄_请换唯一id",
      "name": "网名或昵称，简洁",
      "age": 28,
      "tag": "对外身份（可假）",
      "bio": "生活化潜台词或状态一句，含性格/身份/萌点暗示，禁止口号与中二",
      "intent": "目的，短",
      "height": "如 182cm",
      "edu": "学历，短",
      "mbti": "如 INTJ",
      "looking": "寻找，短",
      "ideal": "理想型，一两句，像真人择偶观而非霸总宣言",
      "tags": ["标签1","标签2","标签3"],
      "matchOpeningLine": "一句角色发来的开场私信，扮演公开人设"
    }
  ],
  "truthProfiles": [
    { "id": "与对应 card.id 一致", "realPersona": "仅 <character>...</character> 单根，内层至 quotes 止，见规则" }
  ]
}

硬性要求：
1) cards **恰好 2** 条；truthProfiles **恰好 2** 条，且 id 与 cards **一一对应**；**禁止**两条 card 使用相同 id，**禁止**使用占位 id（如固定 nearby_001）。
2) 两位男主**苏感与气质象限区分明确**；**bio 每条建议不超过 36 字**，遵守上文【bio 核心约束】与【明星/爱豆/偶像 · 公开层禁令】；intent/looking/ideal 等须**简洁、具体**，整体男主向但不油腻不霸总不中二。
3) 每条 card **必须**含 **matchOpeningLine**：**单个非空字符串，且为一句**；内容遵守上文第 5 点。
4) 每条 card 的 height、edu、mbti、tags 等可与 realPersona 矛盾或部分虚构，但**单条前台资料内部不要自相矛盾到离谱**；realPersona 须**全篇实质内容**并与 XML 各段**逻辑自洽**。
5) 每个 realPersona 必须满足：${DQ}${i}`,
    d = await yr(
      t,
      {
        messages: [
          { role: "system", content: o },
          { role: "user", content: c },
        ],
        temperature: 0.85,
        max_tokens: 12e3,
      },
      { addApiLog: s, logContactName: "" },
    ),
    u = LQ(d),
    f = Array.isArray(u == null ? void 0 : u.cards) ? u.cards.slice(0, 2) : [],
    p = Array.isArray(u == null ? void 0 : u.truthProfiles)
      ? u.truthProfiles
      : [];
  if (f.length !== 2) throw new Error("API returned invalid card count");
  return { cards: f, truthProfiles: p };
}
const Em = "video_app_nearby_role_cards_v2",
  iy = "video_app_nearby_ui_settings_v1",
  Lm = "video_app_nearby_consumed_role_ids_v1";
async function FQ(t) {
  const s = String(t),
    n = await be.get(Lm),
    a = Array.isArray(n) ? n.map(String) : [];
  a.includes(s) || (a.push(s), await be.set(Lm, a));
}
const hu =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="40" fill="#AEAEB2"/>
      <circle cx="40" cy="28" r="13.5" fill="#F2F2F7"/>
      <ellipse cx="40" cy="60" rx="22" ry="15.5" fill="#F2F2F7"/>
    </svg>`),
  zQ = [hu],
  T1 = { useCustomStyle: !1, styleTags: "" };
function RQ(t) {
  return t.length ? t[Math.floor(Math.random() * t.length)] : hu;
}
function PQ(t) {
  return !t || t === hu;
}
function OQ(t) {
  const s = String((t == null ? void 0 : t.matchOpeningLine) ?? "").trim();
  if (s) return s.replace(/\s+/g, " ").slice(0, 280);
  const n = t == null ? void 0 : t.matchOpeningLines;
  if (Array.isArray(n) && n.length) {
    const r = String(n[0] ?? "").trim();
    if (r) return r.replace(/\s+/g, " ").slice(0, 280);
  }
  return `${String((t == null ? void 0 : t.name) || "").trim() || "我"}，回我一下？`;
}
async function BQ(t) {
  try {
    const s = await be.get(Em),
      n =
        s != null && s.truthMap && typeof s.truthMap == "object"
          ? s.truthMap
          : {};
    await be.set(Em, { cards: t, truthMap: n });
  } catch {}
}
function S4(t) {
  return !t || typeof t != "object"
    ? { ...T1 }
    : {
        useCustomStyle: !!t.useCustomStyle,
        styleTags: typeof t.styleTags == "string" ? t.styleTags : "",
      };
}
function UQ(t, s) {
  const n =
    `${String((t == null ? void 0 : t.tag) || "")} ${String((t == null ? void 0 : t.bio) || "")} ${String((t == null ? void 0 : t.intent) || "")} ${String(s || "")}`.toLowerCase();
  let a = 70;
  (/慢热|高冷|防备|戒备|边界|谨慎|理性|试探|距离感|不信任/.test(n) && (a += 12),
    /纯爱|真诚|治愈|温柔|依赖|缺爱|想被理解|渴望陪伴|社恐/.test(n) && (a += 4),
    /主动|直球|热情|外向|爱分享|开朗|好相处|健谈|乐观/.test(n) && (a -= 8),
    /暧昧|撩|海王|玩咖|轻松|随缘|快乐至上/.test(n) && (a -= 5));
  const r = String(
    (t == null ? void 0 : t.id) || (t == null ? void 0 : t.name) || "",
  );
  let i = 0;
  for (let c = 0; c < r.length; c += 1) i += r.charCodeAt(c);
  const o = (i % 7) - 3;
  return Math.max(50, Math.min(92, Math.round(a + o)));
}
const GQ = ({
    refreshToken: t = 0,
    contentTopClassName: s = "pt-10",
    onRefresh: n,
    onBack: a,
  }) => {
    const { apiConfig: r, addApiLog: i } = vn(),
      {
        receivePrivateMessage: o,
        upsertStrangerChatPeer: c,
        setNearbyTruthProfile: d,
        mergeNearbyPublicCards: u,
        currentUser: f,
      } = ei(),
      [p, m] = l.useState(null),
      [h, g] = l.useState(null),
      [x, y] = l.useState([]),
      [v, b] = l.useState(!1),
      [N, w] = l.useState(""),
      [_, A] = l.useState(!1),
      [k, C] = l.useState(() => ({ ...T1 })),
      [M, E] = l.useState(() => ({ ...T1 })),
      [S, j] = l.useState(!1),
      [T, I] = l.useState({ id: "", dir: "" }),
      L = l.useRef(null),
      B = l.useRef(x);
    (l.useEffect(() => {
      B.current = x;
    }, [x]),
      l.useEffect(() => {
        let q = !1;
        return (
          (async () => {
            const V = await be.get(iy);
            if (q) return;
            const ne = S4(V);
            C(ne);
          })(),
          () => {
            q = !0;
          }
        );
      }, []));
    const F = l.useCallback(() => {
        (E({ ...k }), j(!1), A(!0));
      }, [k]),
      D = l.useCallback(async () => {
        const q = { useCustomStyle: M.useCustomStyle, styleTags: M.styleTags };
        (C(q), await be.set(iy, q), j(!0), setTimeout(() => j(!1), 2e3));
      }, [M]),
      $ = async () => {
        (b(!0), w(""));
        try {
          const q = await be.get(iy),
            V = S4(q),
            ne = [...zQ],
            le = await $Q(r, i, {
              facadeStyleEnabled: V.useCustomStyle,
              facadeStyleText: V.styleTags.trim(),
            }),
            X = (
              Array.isArray(le.truthProfiles) ? le.truthProfiles : []
            ).reduce((ye, R) => {
              const oe = String((R == null ? void 0 : R.id) || "").trim(),
                ee = String((R == null ? void 0 : R.realPersona) || "").trim();
              return (oe && ee && (ye[oe] = ee), ye);
            }, {}),
            je = le.cards.map((ye, R) => {
              const oe = String(ye.id || `nearby_api_${Date.now()}_${R}`),
                ee = X[oe] || "";
              return Am({
                id: String(ye.id || `nearby_api_${Date.now()}_${R}`),
                name: String(ye.name || `附近用户${R + 1}`),
                age: Number(ye.age) > 0 ? Number(ye.age) : 24 + R,
                tag: String(ye.tag || "身份待核验"),
                bio: String(ye.bio || "个性签名暂未公开"),
                intent: String(ye.intent || "先交个朋友"),
                height: String(ye.height || "未知"),
                edu: String(ye.edu || "未知"),
                mbti: String(ye.mbti || "未知"),
                looking: String(ye.looking || "未知"),
                ideal: String(ye.ideal || "聊得来就好"),
                tags: Array.isArray(ye.tags) ? ye.tags.slice(0, 6) : [],
                avatar: RQ(ne),
                matchOpeningLine: String(ye.matchOpeningLine ?? "").trim(),
                truthUnlockAffection: UQ(ye, ee),
              });
            });
          await be.set(Lm, []);
          const xe = je;
          (y(xe),
            u(je),
            m(null),
            g(null),
            await be.set(Em, { cards: xe, truthMap: X }));
        } catch {
          w("API 返回成功，但内容解析失败，请检查 JSON 是否完整");
        } finally {
          b(!1);
        }
      };
    (l.useEffect(() => {
      let q = !1;
      return (
        (async () => {
          var ie;
          const [V, ne] = await Promise.all([be.get(Em), be.get(Lm)]);
          if (q) return;
          const le = new Set((Array.isArray(ne) ? ne : []).map(String));
          if ((ie = V == null ? void 0 : V.cards) != null && ie.length) {
            const X = V.cards.map((xe) => Am({ ...xe }));
            u(X);
            let je = X.filter((xe) => !le.has(String(xe.id)));
            (je.length === 0 && (await be.set(Lm, []), (je = X)), y(je));
          }
        })(),
        () => {
          q = !0;
        }
      );
    }, [u]),
      l.useEffect(() => {
        if (L.current === null) {
          L.current = t;
          return;
        }
        t !== L.current && ((L.current = t), t > 0 && $());
      }, [t]));
    const P = x[0] || null,
      z = l.useMemo(() => x, [x]),
      O = l.useMemo(() => x.find((q) => q.id === p) || null, [x, p]),
      Z = l.useCallback(() => {
        g(null);
      }, []),
      K = async (q) => {
        var le;
        const V = B.current[0];
        if (!V) return;
        (I({ id: String(V.id), dir: q === "right" ? "like" : "nope" }),
          setTimeout(() => I({ id: "", dir: "" }), 240),
          await FQ(V.id),
          m((ie) => (ie === V.id ? null : ie)));
        const ne = B.current.slice(1);
        if ((y(ne), await BQ(ne), q === "right")) {
          const ie = V;
          setTimeout(() => g(ie), 220);
          const X = await be.get(Em),
            je =
              (le = X == null ? void 0 : X.truthMap) == null
                ? void 0
                : le[ie.id],
            xe = ie.avatar || hu;
          (c == null || c(ie.id, { name: ie.name, avatar: xe }),
            je && (d == null || d(ie.id, je)),
            u([ie]),
            o(ie.id, OQ(ie)));
        }
      };
    return e.jsxs("div", {
      className:
        "h-full w-full bg-[#080808] text-[#e5e5e5] relative overflow-hidden flex justify-center",
      children: [
        e.jsxs("div", {
          className: `w-full max-w-[430px] h-full flex flex-col px-6 pb-[100px] ${s} bg-[radial-gradient(circle_at_50%_0%,rgba(226,166,183,0.05)_0%,transparent_70%)]`,
          children: [
            e.jsx("header", {
              className: "mt-8 mb-6 z-10",
              children: e.jsxs("div", {
                className:
                  "flex items-center justify-center gap-4 text-[12px] tracking-[0.42em] uppercase text-[#E2A6B7] font-light",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => (a == null ? void 0 : a()),
                    className: "text-center active:opacity-80",
                    style: {
                      fontFamily: "'Playfair Display','Times New Roman',serif",
                    },
                    "aria-label": "返回",
                    children: "Nocturne",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => (n == null ? void 0 : n()),
                    className: "text-center active:opacity-80",
                    style: {
                      fontFamily: "'Playfair Display','Times New Roman',serif",
                    },
                    "aria-label": "刷新附近卡片",
                    children: "Archives",
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "flex-1 relative min-h-0 overflow-hidden [perspective:2000px]",
              children:
                z.length === 0
                  ? e.jsx("div", {
                      className:
                        "h-full flex items-center justify-center text-white/20 tracking-[0.22em] text-xs uppercase italic",
                      style: {
                        fontFamily:
                          "'Playfair Display','Times New Roman',serif",
                      },
                      children:
                        x.length === 0
                          ? e.jsx("span", { children: "End of the chapter." })
                          : e.jsx("span", { children: "End of the chapter." }),
                    })
                  : z
                      .map((q, V) => ({ item: q, offset: V }))
                      .reverse()
                      .map(({ item: q, offset: V }) =>
                        e.jsx(
                          "div",
                          {
                            className:
                              "absolute left-0 right-0 mx-auto top-[10px] w-full h-[88%]",
                            style: {
                              transform:
                                V === 0
                                  ? "translateY(0px) scale(1)"
                                  : `translateY(${V * 12}px) scale(${1 - V * 0.04})`,
                              opacity: V > 2 ? 0 : 1,
                              zIndex: z.length - V,
                              pointerEvents: V === 0 ? "auto" : "none",
                              transition:
                                "all 0.6s cubic-bezier(0.23,1,0.32,1)",
                            },
                            children: e.jsxs("button", {
                              type: "button",
                              onClick: () => {
                                V === 0 && m(q.id);
                              },
                              className:
                                "relative z-[1] h-full w-full rounded-[4px] overflow-y-auto no-scrollbar text-left p-10 border border-white/[0.03]",
                              style: {
                                background:
                                  "linear-gradient(145deg,#121212,#0A0A0A)",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                              },
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute -top-5 -right-5 text-[280px] leading-none font-bold italic text-[#E2A6B7]/[0.03] select-none pointer-events-none",
                                  style: {
                                    fontFamily:
                                      "'Playfair Display','Times New Roman',serif",
                                  },
                                  children:
                                    String(q.name || "?")
                                      .trim()
                                      .charAt(0)
                                      .toUpperCase() || "?",
                                }),
                                V === 0 && T.id === String(q.id)
                                  ? e.jsx("div", {
                                      className: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] px-10 py-3.5 border-2 text-[40px] font-black tracking-[0.28em] z-20 ${T.dir === "like" ? "text-[#E2A6B7] border-[#E2A6B7]" : "text-[#444] border-[#444]"}`,
                                      style: {
                                        fontFamily:
                                          "'Playfair Display','Times New Roman',serif",
                                      },
                                      children:
                                        T.dir === "like" ? "LIKE" : "NOPE",
                                    })
                                  : null,
                                e.jsx("div", {
                                  className:
                                    "relative z-10 flex items-start justify-between pb-6 border-b border-[#E2A6B7]/10",
                                  children: e.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-[10px] tracking-[0.3em] text-[#E2A6B7] font-semibold",
                                        style: {
                                          fontFamily:
                                            "'Playfair Display','Times New Roman',serif",
                                        },
                                        children:
                                          String(q.id || "").toUpperCase() ||
                                          `VOL.${String(V + 1).padStart(3, "0")}`,
                                      }),
                                      e.jsxs("h2", {
                                        className:
                                          "text-[42px] leading-tight text-white -tracking-[0.02em] mt-1",
                                        style: {
                                          fontFamily:
                                            "'Playfair Display','Times New Roman',serif",
                                        },
                                        children: [q.name, ", ", q.age],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "text-[11px] tracking-[0.2em] uppercase text-[#8E626E] mt-1",
                                        children: [
                                          q.tag || "Identity",
                                          " / ",
                                          q.mbti || "UNKN",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "relative z-10 my-6 flex-1",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[40px] leading-none text-[#E2A6B7]/50 mb-5",
                                      style: {
                                        fontFamily:
                                          "'Playfair Display','Times New Roman',serif",
                                      },
                                      children: "“",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[20px] leading-[1.6] text-white/85 font-light",
                                      style: {
                                        fontFamily:
                                          "'Playfair Display','Times New Roman',serif",
                                      },
                                      children: q.bio,
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "relative z-10 flex flex-wrap gap-3",
                                  children: (Array.isArray(q.tags)
                                    ? q.tags
                                    : [q.mbti, q.looking]
                                  )
                                    .filter(Boolean)
                                    .slice(0, 3)
                                    .map((ne) =>
                                      e.jsx(
                                        "span",
                                        {
                                          className:
                                            "text-[10px] py-1.5 text-white/40 border-b border-white/10 uppercase tracking-[0.15em]",
                                          children: String(ne),
                                        },
                                        String(ne),
                                      ),
                                    ),
                                }),
                              ],
                            }),
                          },
                          q.id,
                        ),
                      ),
            }),
            v &&
              e.jsxs("div", {
                className:
                  "absolute top-24 left-1/2 -translate-x-1/2 z-20 text-xs bg-black/55 px-3 py-1.5 rounded-full flex items-center gap-2",
                children: [
                  e.jsx(Sn, { size: 13, className: "animate-spin" }),
                  " 正在刷新附近角色...",
                ],
              }),
            !!N &&
              e.jsx("div", {
                className:
                  "absolute top-32 left-1/2 -translate-x-1/2 z-20 text-[11px] text-rose-200",
                children: N,
              }),
            e.jsxs("div", {
              className:
                "mb-2 flex items-center justify-center gap-6 pt-5 z-10",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => K("left"),
                  className:
                    "w-[52px] h-[52px] rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-[#e5e5e5] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 active:scale-90",
                  disabled: !P,
                  "aria-label": "无感",
                  children: e.jsx("svg", {
                    width: "20",
                    height: "20",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.8",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => K("right"),
                  className:
                    "w-[52px] h-[52px] rounded-full flex items-center justify-center bg-[#E2A6B7] text-[#080808] border-0 transition-all duration-300 hover:-translate-y-0.5 active:scale-90",
                  style: { boxShadow: "0 8px 20px rgba(226,166,183,0.25)" },
                  disabled: !P,
                  "aria-label": "中意",
                  children: e.jsx("svg", {
                    width: "22",
                    height: "22",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                    }),
                  }),
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: F,
                  className:
                    "w-[42px] h-[42px] rounded-full flex items-center justify-center border-0 bg-transparent text-white/30 transition-all duration-300 hover:text-[#E2A6B7] hover:-translate-y-0.5 active:scale-90",
                  "aria-label": "附近设置",
                  children: e.jsx(Co, { size: 18, strokeWidth: 1.5 }),
                }),
              ],
            }),
          ],
        }),
        O && e.jsx(zC, { card: O, onClose: () => m(null) }),
        !!h &&
          e.jsxs("div", {
            className:
              "absolute inset-0 z-[70] bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center",
            children: [
              e.jsx("span", {
                className:
                  "text-[10px] uppercase font-bold mb-4 tracking-[0.6em] text-[#d894a7] [text-shadow:0_0_20px_rgba(216,148,167,0.5)]",
                children: "Mutual Attraction",
              }),
              e.jsx("h2", {
                className: "text-5xl text-white mb-12 italic",
                children: "灵感交汇",
              }),
              e.jsx("div", {
                className: "flex items-center justify-center mb-12 relative",
                children: (() => {
                  const q = (f == null ? void 0 : f.avatar) || hu,
                    V = h.avatar || hu,
                    ne = PQ(q);
                  return e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("img", {
                        src: q,
                        className: `w-32 h-32 ${ne ? "rounded-[10px]" : "rounded-full"} border border-white/20 object-cover relative z-10`,
                        alt: "本人",
                        style: { boxShadow: "-10px 0 30px rgba(0,0,0,0.5)" },
                      }),
                      e.jsx("div", {
                        className: "w-8 h-px bg-white/20 relative z-0 -mx-2",
                      }),
                      e.jsx("img", {
                        src: V,
                        className:
                          "w-32 h-32 rounded-full border border-[#d894a7] object-cover relative z-10",
                        alt: "对方",
                        style: {
                          boxShadow: "10px 0 30px rgba(216,148,167,0.2)",
                        },
                      }),
                    ],
                  });
                })(),
              }),
              e.jsx("button", {
                type: "button",
                onClick: Z,
                className:
                  "bg-white text-black px-12 py-4 rounded-lg font-bold uppercase tracking-widest text-[11px] hover:bg-gray-200",
                children: "开始对话",
              }),
            ],
          }),
        _ &&
          e.jsxs("div", {
            className:
              "absolute inset-0 z-[85] bg-[#050505] flex flex-col overflow-hidden",
            children: [
              e.jsxs("div", {
                className:
                  "flex-shrink-0 px-4 pt-[calc(3.5rem+env(safe-area-inset-top,0px))] pb-4 border-b border-white/10 flex items-center justify-between gap-3",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => A(!1),
                    className:
                      "h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center shrink-0",
                    "aria-label": "关闭设置",
                    children: e.jsx(Ts, { size: 18 }),
                  }),
                  e.jsx("div", {
                    className:
                      "text-[15px] font-medium text-white/90 tracking-wide",
                    children: "附近设置",
                  }),
                  e.jsx("div", { className: "w-10 shrink-0" }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-4 py-6 space-y-8",
                children: [
                  e.jsxs("section", {
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between gap-4 mb-3",