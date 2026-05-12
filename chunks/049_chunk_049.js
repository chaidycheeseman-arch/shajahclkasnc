                                                  "flex flex-col space-y-0.5 border-l-[0.5px] border-[#E8DCC4] pl-3 text-right",
                                                children: [
                                                  e.jsx("span", {
                                                    className: "text-[#C4B7A1]",
                                                    children: "发生地坐标",
                                                  }),
                                                  e.jsx("span", {
                                                    className: "text-[#5A554F]",
                                                    children: tt,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  G.id,
                                );
                              }),
                              (!((J = o.wallet) != null && J.transactions) ||
                                o.wallet.transactions.length === 0) &&
                                e.jsx("div", {
                                  className:
                                    "text-center text-[#A69B8A] py-12 font-mono text-[10px] tracking-widest",
                                  children: "暂无交易记录",
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
        }),
        $ &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-[61] bg-[#1D1C1A]/25 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
            children: e.jsxs("div", {
              className:
                "relative w-full max-w-xs bg-[#FAF9F6] rounded-[24px] border-[0.5px] border-[#E8DCC4] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden",
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 z-0 opacity-[0.03]",
                  style: {
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  },
                }),
                e.jsxs("div", {
                  className: "relative z-10 p-8",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-center mb-8",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-[9px] font-mono tracking-[0.3em] text-[#A69B8A] flex items-center",
                          children: [
                            e.jsx(Mc, { size: 10, className: "mr-1.5" }),
                            " 光学校验 · 入账",
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (P(!1), O(""));
                          },
                          className:
                            "p-1.5 -mr-1.5 rounded-full hover:bg-white/80 transition-colors text-[#8C7A5F] hover:text-[#1D1C1A]",
                          "aria-label": "关闭",
                          children: e.jsx(Ts, { size: 18, strokeWidth: 1.5 }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[8px] font-mono tracking-[0.25em] text-[#C4B7A1] uppercase mb-2 block",
                              children: "入账金额",
                            }),
                            e.jsx("input", {
                              type: "number",
                              value: z,
                              onChange: (G) => O(G.target.value),
                              placeholder: "0.00",
                              min: "0",
                              step: "0.01",
                              className:
                                "w-full bg-white border-[0.5px] border-[#E8DCC4] rounded-xl px-4 py-4 outline-none focus:border-[#BCA37F] transition-colors text-center tracking-wider font-mono text-lg text-[#1D1C1A] placeholder:text-[#C4B7A1] shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[7px] font-mono text-[#A69B8A] tracking-widest mt-2",
                              children: "通过后将直接计入钱包余额",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            try {
                              (h(z, "光学校验入账"),
                                P(!1),
                                O(""),
                                alert("光学校验通过，已成功入账"));
                            } catch (G) {
                              alert(
                                (G == null ? void 0 : G.message) || "入账失败",
                              );
                            }
                          },
                          className:
                            "w-full py-4 bg-white border-[0.5px] border-[#E8DCC4] rounded-xl font-bold text-[11px] tracking-widest text-[#1D1C1A] shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_20px_rgba(188,163,127,0.15)] hover:-translate-y-0.5 transition-all duration-300",
                          children: "执行光学校验",
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
            ne &&
            e.jsxs(We.div, {
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              transition: { type: "spring", damping: 25, stiffness: 200 },
              className:
                "chat-app-presets-modal absolute inset-0 z-50 bg-[#F9F7F2] flex flex-col",
              children: [
                e.jsxs("div", {
                  className:
                    "px-6 py-6 pt-12 flex items-center justify-between",
                  children: [
                    e.jsx("button", {
                      onClick: () => le(!1),
                      className:
                        "p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors",
                      children: e.jsx(Ts, {
                        size: 24,
                        className: "text-[#4A4A4A]",
                        strokeWidth: 1.5,
                      }),
                    }),
                    e.jsx("h1", {
                      className: "text-xl font-serif text-[#4A4A4A] italic",
                      children: "Presets",
                    }),
                    e.jsx("div", { className: "w-10" }),
                  ],
                }),
                e.jsx("div", {
                  className: "p-6 flex-1 overflow-y-auto no-scrollbar",
                  children: e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      d.map((G) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "bg-white p-4 rounded-[24px] shadow-sm border border-[#F5F5F5] flex items-center justify-between group hover:shadow-md transition-all",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-12 h-12 rounded-[16px] overflow-hidden bg-gray-100 border border-[#E5E5E5]",
                                    children: e.jsx("img", {
                                      src: G.avatar,
                                      alt: "Avatar",
                                      className: "w-full h-full object-cover",
                                      loading: "lazy",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "font-serif text-[#4A4A4A] text-lg italic",
                                        children: G.name,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "text-[10px] text-[#8D8D8D] uppercase tracking-wider",
                                        children: [
                                          Vo({
                                            name: G.userName ?? "",
                                            realName: G.realName ?? "",
                                          }),
                                          G.wechatId ? ` · ${G.wechatId}` : "",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                children: [
                                  e.jsx("button", {
                                    onClick: () => {
                                      (ce(G), le(!1));
                                    },
                                    className:
                                      "p-2 bg-[#F5F5F5] text-[#4A4A4A] rounded-full hover:bg-[#E5E5E5] transition-colors",
                                    title: "加载",
                                    children: e.jsx(Pr, { size: 16 }),
                                  }),
                                  e.jsx("button", {
                                    onClick: () => {
                                      window.confirm("删除此预设？") && p(G.id);
                                    },
                                    className:
                                      "p-2 bg-[#FFF0F0] text-[#D4A5A5] rounded-full hover:bg-[#FFE0E0] transition-colors",
                                    title: "删除",
                                    children: e.jsx(Ts, { size: 16 }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          G.id,
                        ),
                      ),
                      d.length === 0 &&
                        e.jsx("p", {
                          className:
                            "text-center text-[#8D8D8D] text-sm py-8 font-serif italic opacity-60",
                          children: "暂无已保存预设",
                        }),
                    ],
                  }),
                }),
              ],
            }),
        }),
        L &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-[60] bg-[#1D1C1A]/25 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
            children: e.jsxs("div", {
              className:
                "relative w-full max-w-xs bg-[#FAF9F6] rounded-[24px] border-[0.5px] border-[#E8DCC4] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden",
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 z-0 opacity-[0.03]",
                  style: {
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  },
                }),
                e.jsxs("div", {
                  className: "relative z-10 p-8",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-center mb-8",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-[9px] font-mono tracking-[0.3em] text-[#A69B8A] flex items-center",
                          children: [
                            e.jsx(Gm, { size: 10, className: "mr-1.5" }),
                            " 金库 · 支付密码",
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => B(!1),
                          className:
                            "p-1.5 -mr-1.5 rounded-full hover:bg-white/80 transition-colors text-[#8C7A5F] hover:text-[#1D1C1A]",
                          "aria-label": "关闭",
                          children: e.jsx(Ts, { size: 18, strokeWidth: 1.5 }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[8px] font-mono tracking-[0.25em] text-[#C4B7A1] uppercase mb-2 block",
                              children: "六位数字密码",
                            }),
                            e.jsx("input", {
                              type: "password",
                              value: F,
                              onChange: (G) => D(G.target.value),
                              placeholder: "••••••",
                              maxLength: 6,
                              className:
                                "w-full bg-white border-[0.5px] border-[#E8DCC4] rounded-xl px-4 py-4 outline-none focus:border-[#BCA37F] transition-colors text-center tracking-[0.5em] font-mono text-lg text-[#1D1C1A] placeholder:text-[#C4B7A1] shadow-[0_2px_8px_rgba(0,0,0,0.02)]",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[7px] font-mono text-[#A69B8A] tracking-widest mt-2",
                              children: "流动性校验 // 仅限数字",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            if (F.length !== 6) {
                              alert("请输入 6 位数字");
                              return;
                            }
                            (m(F), D(""), B(!1), alert("密码设置成功"));
                          },
                          className:
                            "w-full py-4 bg-white border-[0.5px] border-[#E8DCC4] rounded-xl font-bold text-[11px] tracking-widest text-[#1D1C1A] shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_20px_rgba(188,163,127,0.15)] hover:-translate-y-0.5 transition-all duration-300",
                          children: "确认设置",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        Z &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-[62] bg-[#1D1C1A]/25 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
            children: e.jsxs("div", {
              className:
                "relative w-full max-w-xs bg-[#FAF9F6] rounded-[24px] border-[0.5px] border-[#E8DCC4] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "must-fill-id-title",
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 z-0 opacity-[0.03]",
                  style: {
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  },
                }),
                e.jsxs("div", {
                  className: "relative z-10 p-8",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-start mb-4",
                      children: [
                        e.jsx("h2", {
                          id: "must-fill-id-title",
                          className:
                            "text-sm font-serif text-[#2D2D2D] font-bold tracking-wide pr-6",
                          children: "提示",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => K(!1),
                          className:
                            "p-1.5 -mr-1.5 rounded-full hover:bg-white/80 transition-colors text-[#8C7A5F] hover:text-[#1D1C1A] shrink-0",
                          "aria-label": "关闭",
                          children: e.jsx(Ts, { size: 18, strokeWidth: 1.5 }),
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-[13px] text-[#5A554F] leading-relaxed mb-6",
                      children: [
                        "请先填写",
                        e.jsx("strong", {
                          className: "text-[#2D2D2D]",
                          children: "微信号 ID",
                        }),
                        "，保存前为必填项，不能为空。",
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => K(!1),
                      className:
                        "w-full py-3.5 bg-[#2D2D2D] text-white rounded-xl text-xs font-bold tracking-widest shadow-lg hover:bg-[#1a1a1a] transition-colors",
                      children: "知道了",
                    }),
                  ],
                }),
              ],
            }),
          }),
        q &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-[62] bg-[#1D1C1A]/25 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
            children: e.jsxs("div", {
              className:
                "relative w-full max-w-xs bg-[#FAF9F6] rounded-[24px] border-[0.5px] border-[#E8DCC4] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "duplicate-id-title",
              children: [
                e.jsx("div", {
                  className: "absolute inset-0 z-0 opacity-[0.03]",
                  style: {
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                  },
                }),
                e.jsxs("div", {
                  className: "relative z-10 p-8",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-start mb-4",
                      children: [
                        e.jsx("h2", {
                          id: "duplicate-id-title",
                          className:
                            "text-sm font-serif text-[#2D2D2D] font-bold tracking-wide pr-6",
                          children: "无法保存",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => V(!1),
                          className:
                            "p-1.5 -mr-1.5 rounded-full hover:bg-white/80 transition-colors text-[#8C7A5F] hover:text-[#1D1C1A] shrink-0",
                          "aria-label": "关闭",
                          children: e.jsx(Ts, { size: 18, strokeWidth: 1.5 }),
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-[13px] text-[#5A554F] leading-relaxed mb-6",
                      children:
                        "该微信号 ID 已在预设库中存在，与现有身份冲突。请更换其他 ID 后再保存。",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => V(!1),
                      className:
                        "w-full py-3.5 bg-[#2D2D2D] text-white rounded-xl text-xs font-bold tracking-widest shadow-lg hover:bg-[#1a1a1a] transition-colors",
                      children: "知道了",
                    }),
                  ],
                }),
              ],
            }),
          }),
        e.jsx(Os, {
          children:
            ie &&
            e.jsxs(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "chat-app-beautify-modal absolute inset-0 z-[60] flex flex-col",
              children: [
                e.jsx("div", {
                  className: "beautify-modal-scrim absolute inset-0",
                  "aria-hidden": !0,
                  onClick: () => X(!1),
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: (G) => G.key === "Enter" && X(!1),
                }),
                e.jsx("div", {
                  className:
                    "relative z-10 flex flex-1 flex-col justify-center px-8 py-10 pointer-events-none",
                  children: e.jsxs("div", {
                    className: "beautify-magazine-panel pointer-events-auto",
                    children: [
                      e.jsx("p", {
                        className: "beautify-magazine-kicker",
                        children: "Appearance",
                      }),
                      e.jsx("h2", {
                        className: "beautify-magazine-title",
                        children: "美化主题",
                      }),
                      e.jsx("hr", { className: "beautify-magazine-rule" }),
                      e.jsxs("div", {
                        className: "beautify-magazine-fontblock",
                        children: [
                          e.jsx("p", {
                            className: "beautify-magazine-fontblock-title",
                            children: "聊天主字体",
                          }),
                          e.jsx("p", {
                            className: "beautify-magazine-fontblock-hint",
                            children: "仅影响文字大小，与系统「外观-字体」无关",
                          }),
                          e.jsxs("div", {
                            className: "beautify-magazine-fontblock-row",
                            children: [
                              e.jsx("span", { children: "启用" }),
                              e.jsx("button", {
                                type: "button",
                                role: "switch",
                                "aria-checked": N,
                                className: `beautify-magazine-switch ${N ? "beautify-magazine-switch--on" : ""}`,
                                onClick: () => w((G) => !G),
                                children: e.jsx("span", {
                                  className: "beautify-magazine-switch-knob",
                                }),
                              }),
                            ],
                          }),
                          N
                            ? e.jsxs("div", {
                                className: "beautify-magazine-fontblock-slider",
                                children: [
                                  e.jsxs("label", {
                                    className:
                                      "beautify-magazine-fontblock-label",
                                    htmlFor: "chat-app-user-font-px",
                                    children: [
                                      "基准字号",
                                      " ",
                                      Number.isInteger(_) ? _ : _.toFixed(1),
                                      "px",
                                    ],
                                  }),
                                  e.jsx("input", {
                                    id: "chat-app-user-font-px",
                                    type: "range",
                                    min: 10,
                                    max: 32,
                                    step: 0.5,
                                    value: _,
                                    onChange: (G) => A(Number(G.target.value)),
                                  }),
                                ],
                              })
                            : null,
                        ],
                      }),
                      e.jsxs("ul", {
                        className: "beautify-magazine-list",
                        children: [
                          e.jsx("li", {
                            children: e.jsx("button", {
                              type: "button",
                              onClick: ee,
                              className:
                                "beautify-magazine-item beautify-magazine-item--utility",
                              children: e.jsx("span", {
                                className: "beautify-magazine-item-label",
                                children: "移出背景",
                              }),
                            }),
                          }),
                          e.jsx("li", {
                            children: e.jsxs("button", {
                              type: "button",
                              "data-active": g === "default",
                              onClick: () => {
                                (x("default"), v(!1), X(!1));
                              },
                              className: "beautify-magazine-item",
                              children: [
                                e.jsx("span", {
                                  className: "beautify-magazine-item-label",
                                  children: "默认",
                                }),
                                e.jsx("span", {
                                  className: "beautify-magazine-item-mark",
                                  "aria-hidden": !0,
                                }),
                              ],
                            }),
                          }),
                          e.jsx("li", {
                            children: e.jsxs("button", {
                              type: "button",
                              "data-active": g === "icity",
                              onClick: () => {
                                (x("icity"), v(!1), X(!1));
                              },
                              className: "beautify-magazine-item",
                              children: [
                                e.jsx("span", {
                                  className: "beautify-magazine-item-label",
                                  children: "阅读",
                                }),
                                e.jsx("span", {
                                  className: "beautify-magazine-item-mark",
                                  "aria-hidden": !0,
                                }),
                              ],
                            }),
                          }),
                          e.jsx("li", {
                            children: e.jsxs("button", {
                              type: "button",
                              "data-active": g === "my_icity",
                              onClick: () => {
                                (x("my_icity"), v(!1), X(!1));
                              },
                              className: "beautify-magazine-item",
                              children: [
                                e.jsx("span", {
                                  className: "beautify-magazine-item-label",
                                  children: "简约",
                                }),
                                e.jsx("span", {
                                  className: "beautify-magazine-item-mark",
                                  "aria-hidden": !0,
                                }),
                              ],
                            }),
                          }),
                          e.jsx("li", {
                            children: e.jsxs("button", {
                              type: "button",
                              "data-active": g === "music",
                              onClick: () => {
                                (x("music"), v(!0), X(!1));
                              },
                              className: "beautify-magazine-item",
                              children: [
                                e.jsx("span", {
                                  className: "beautify-magazine-item-label",
                                  children: "音乐",
                                }),
                                e.jsx("span", {
                                  className: "beautify-magazine-item-mark",
                                  "aria-hidden": !0,
                                }),
                              ],
                            }),
                          }),
                          e.jsx("li", {
                            children: e.jsx("button", {
                              type: "button",
                              onClick: () => {
                                (R((G) => G + 1), xe(!0), X(!1));
                              },
                              className:
                                "beautify-magazine-item beautify-magazine-item--utility",
                              children: e.jsx("span", {
                                className: "beautify-magazine-item-label",
                                children: "自定义",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
        }),
        je
          ? e.jsx("div", {
              className:
                "absolute inset-0 z-[70] flex flex-col min-h-0 bg-[#F9F7F2]",
              children: e.jsx(ZY, { onClose: () => xe(!1) }, ye),
            })
          : null,
      ],
    });
  },
  sV = "chat_app_bg_image",
  dk = "chat_app_bg_updated",
  nV = ({ onClose: t, showPhoneCase: s = !0, caseSize: n }) => {
    const [a, r] = l.useState("chats"),
      [i, o] = l.useState(null),
      [c, d] = l.useState(null),
      [u, f] = l.useState(!1),
      [p, m] = l.useState(null),
      [h, g] = l.useState(!1),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(!1),
      [N, w] = l.useState(!1),
      [_, A] = l.useState(""),
      k = vn(),
      {
        createChat: C,
        createGroupChat: M,
        unreadMoments: E,
        clearUnreadMoments: S,
        activeChatId: j,
        setActiveChatId: T,
        chats: I,
        contacts: L,
        callState: B,
        themeCss: F,
        globalCss: D,
        beautifyCustomListCss: $,
        user: P,
        profileTheme: z,
        nightMode: O,
        chatAppUserFontEnabled: Z,
        chatAppUserFontPx: K,
      } = k || {},
      q = z === "icity",
      V = Number(K),
      ne = Number.isFinite(V) ? Math.min(32, Math.max(10, V)) : 16,
      le = Z ? ne / 16 : 1,
      ie = z === "default",
      X = (Array.isArray(I) ? I : []).reduce(
        (oe, ee) => oe + (Number(ee == null ? void 0 : ee.unread) || 0),
        0,
      );
    (l.useEffect(() => {
      let oe = !0;
      (async () => {
        const H = await be.get(sV, "");
        oe && typeof H == "string" && A(H);
      })();
      const ee = (H) => {
        var U;
        const Y =
          (U = H == null ? void 0 : H.detail) == null
            ? void 0
            : U.backgroundImage;
        typeof Y == "string" && A(Y);
      };
      return (
        window.addEventListener(dk, ee),
        () => {
          ((oe = !1), window.removeEventListener(dk, ee));
        }
      );
    }, []),
      l.useEffect(() => {
        let oe = !1;
        return (
          (async () => {
            try {
              const ee = await be.get("chat_css_presets");
              if (oe || ee == null || typeof sessionStorage > "u") return;
              sessionStorage.setItem(LA, JSON.stringify(ee));
            } catch {}
          })(),
          () => {
            oe = !0;
          }
        );
      }, []),
      l.useEffect(() => {
        v && y(!0);
      }, [v]),
      l.useEffect(() => {
        !v && !j && !i && !u && !c && y(!1);
      }, [v, j, i, u, c]),
      l.useEffect(() => {
        j || g(!1);
      }, [j]));
    const je = (oe) => {
        const ee = C(oe);
        T(ee);
      },
      xe = (oe) => {
        oe && T(oe);
      },
      ye = (oe) => {
        (navigator.vibrate && navigator.vibrate(20),
          r(oe),
          oe === "moments" && S());
      },
      R = () => {
        if (u)
          return e.jsx(qY, {
            onBack: () => f(!1),
            onSelectFavorite: (oe, ee) => {
              (T(oe), m(ee), f(!1));
            },
          });
        if (c) {
          const oe = (L || []).find((ee) => ee.id === c);
          return e.jsx(JA, {
            contact: oe,
            onBack: () => d(null),
            onSendMessage: (ee) => {
              (C(ee), T(C(ee)), d(null));
            },
            onViewMoments: (ee) => {
              (o(ee), d(null));
            },
            showPhoneCase: s,
            caseSize: n,
          });
        }
        if (i) return e.jsx(lk, { userId: i, onBack: () => o(null) });
        if (j)
          return B &&
            B.isGroup &&
            B.chatId === j &&
            !B.isMinimized &&
            (B.status === "outgoing" ||
              B.status === "connected" ||
              B.status === "incoming")
            ? e.jsx("div", {
                className: "flex-1 min-h-0 bg-[#EAEBEF]",
                "aria-hidden": !0,
              })
            : e.jsx(CY, {
                chatId: j,
                onBack: () => T(null),
                onViewContact: d,
                onSettingsVisibilityChange: g,
                showPhoneCase: s,
                caseSize: n,
              });
        switch (a) {
          case "chats":
            return e.jsx(ak, { onSelectChat: T, onClose: t });
          case "contacts":
            return e.jsx(KY, {
              onCreateChat: je,
              onViewUserMoments: o,
              onCreatedGroupChat: xe,
              onGoToGroupChats: (oe) => {
                (oe && T(oe), r("chats"));
              },
              onClose: t,
              onDockVisibilityChange: b,
              onDockToggleVisibilityChange: w,
            });
          case "moments":
            return e.jsx(lk, {
              onViewUser: o,
              onClose: t,
              onDockVisibilityChange: b,
            });
          case "profile":
            return e.jsx(tV, {
              onDockVisibilityChange: b,
              onDockCollapseChange: y,
              onDockToggleVisibilityChange: w,
              onOpenFavorites: () => f(!0),
            });
          default:
            return e.jsx(ak, { onSelectChat: T });
        }
      };
    return e.jsxs("div", {
      className: `chat-app-root flex flex-col h-full min-h-0 relative ${O ? "chat-app-night" : ""}`,
      style: {
        zoom: 1,
        "--app-font-scale": String(le),
        backgroundColor: O ? "#0f0f10" : "#F2F1F6",
        ...(_
          ? {
              backgroundImage: `url(${_})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      },
      children: [
        F ? e.jsx("style", { id: "chat-app-theme-css", children: F }) : null,
        D ? e.jsx("style", { id: "chat-app-global-css", children: D }) : null,
        ie && $
          ? e.jsx("style", { id: "chat-app-beautify-custom-list", children: $ })
          : null,
        e.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden relative",
          ...(q ? { "data-theme-icity": !0 } : {}),
          children: R(),
        }),
        B && B.status !== "idle" && e.jsx(NH, {}),
        !j &&
          !i &&
          !u &&
          !c &&
          e.jsx(e.Fragment, {
            children: e.jsxs(e.Fragment, {
              children: [
                (!v || !x) &&
                  e.jsx("div", {
                    className: `chat-app-dock absolute bottom-0 left-0 right-0 h-48 overflow-hidden z-50 transition-all duration-500 ease-in-out ${x ? "translate-y-[120px] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}`,
                    children: e.jsxs("div", {
                      className: x
                        ? "pointer-events-none"
                        : "pointer-events-auto",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute left-1/2 -translate-x-1/2 bottom-[-700px] w-[800px] h-[800px] bg-white/60 backdrop-blur-xl rounded-full border-t border-white/40 shadow-lg",
                        }),
                        e.jsxs("div", {
                          className:
                            "absolute left-1/2 bottom-[-300px] w-0 h-0 flex justify-center items-center pointer-events-auto",
                          children: [
                            e.jsxs("button", {
                              onClick: () => ye("chats"),
                              className: `absolute flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg ${a === "chats" ? "bg-black text-white scale-110 z-10" : "bg-white text-black hover:bg-gray-100"}`,
                              style: {
                                transform:
                                  "rotate(-22deg) translateY(-400px) rotate(22deg)",
                              },
                              children: [
                                e.jsx(Ar, { size: 20, strokeWidth: 2.5 }),
                                X > 0 &&
                                  e.jsx("div", {
                                    className:
                                      "absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-red-500 text-white rounded-full text-[10px] leading-[18px] font-bold text-center",
                                    children: X > 99 ? "99+" : X,
                                  }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => ye("contacts"),
                              className: `absolute flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg ${a === "contacts" ? "bg-black text-white scale-110 z-10" : "bg-white text-black hover:bg-gray-100"}`,
                              style: {
                                transform:
                                  "rotate(-8deg) translateY(-400px) rotate(8deg)",
                              },
                              children: e.jsx(Vi, {
                                size: 20,
                                strokeWidth: 2.5,
                              }),
                            }),
                            e.jsxs("button", {
                              onClick: () => ye("moments"),
                              className: `absolute flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg ${a === "moments" ? "bg-black text-white scale-110 z-10" : "bg-white text-black hover:bg-gray-100"}`,
                              style: {
                                transform:
                                  "rotate(8deg) translateY(-400px) rotate(-8deg)",
                              },
                              children: [
                                e.jsx(O0, { size: 20, strokeWidth: 2.5 }),
                                E &&
                                  e.jsx("div", {
                                    className:
                                      "absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-current",
                                  }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => ye("profile"),
                              className: `absolute flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg ${a === "profile" ? "bg-black text-white scale-110 z-10" : "bg-white text-black hover:bg-gray-100"}`,
                              style: {
                                transform:
                                  "rotate(22deg) translateY(-400px) rotate(-22deg)",
                              },
                              children: e.jsx(wr, {
                                size: 20,
                                strokeWidth: 2.5,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                e.jsx("div", {
                  className:
                    "absolute bottom-6 left-0 right-0 z-[60] h-12 pointer-events-none",
                  children: e.jsx("div", {
                    className:
                      "absolute left-1/2 top-0 -translate-x-1/2 pointer-events-auto",
                    children:
                      !N &&
                      e.jsx("button", {
                        onClick: () => {
                          (navigator.vibrate && navigator.vibrate(10),
                            y((oe) => !oe));
                        },
                        className:
                          "chat-app-dock-toggle flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg bg-white text-black hover:bg-gray-100 border border-gray-100",
                        "aria-label": x ? "展开底栏" : "收起底栏",
                        children: x
                          ? e.jsx(hp, { size: 20, strokeWidth: 2.5 })
                          : e.jsx(aa, { size: 20, strokeWidth: 2.5 }),
                      }),
                  }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  zb = co("leting"),
  QA = l.createContext(null),
  ZA = () => {
    const t = l.useContext(QA);
    if (!t)
      throw new Error("useCoupleSpaceBgm 须在 CoupleSpaceBgmProvider 内使用");
    return t;
  },
  aV = ({ children: t, contactId: s, prismBgm: n, enabled: a }) => {
    const [r, i] = l.useState("sequence"),
      [o, c] = l.useState(!1),
      [d, u] = l.useState(0),
      [f, p] = l.useState([]),
      [m, h] = l.useState(-1),
      [g, x] = l.useState(null),
      [y, v] = l.useState(0),
      [b, N] = l.useState(0),
      { fetchMusicUrl: w, fetchPlaylistDetail: _ } = Ii(),
      A = l.useRef(w),
      k = l.useRef(_);
    (l.useEffect(() => {
      A.current = w;
    }, [w]),
      l.useEffect(() => {
        k.current = _;
      }, [_]));
    const C = l.useRef(null),
      M = l.useRef(null),
      E = l.useRef([]),
      S = l.useRef(0),
      j = l.useRef(0),
      T = l.useRef("sequence"),
      I = l.useRef(""),
      L = l.useRef(null),
      B = l.useRef(!1);
    l.useEffect(() => {
      T.current = r;
    }, [r]);
    const F = l.useMemo(
      () =>
        !a || !s || !(n != null && n.playlistId) || !(n != null && n.source)
          ? ""
          : `${s}|${n.source}|${n.playlistId}`,
      [a, s, n == null ? void 0 : n.source, n == null ? void 0 : n.playlistId],
    );
    l.useEffect(() => {
      I.current = F;
    }, [F]);
    const D = l.useRef(n);
    D.current = n;
    const $ = l.useCallback(() => {
        var je;
        if (M.current) {
          try {
            URL.revokeObjectURL(M.current);
          } catch {}
          M.current = null;
        }
        const X = C.current;
        (X &&
          (X.pause(),
          X.removeAttribute("src"),
          (je = X.load) == null || je.call(X)),
          (E.current = []),
          c(!1),
          u(0),
          p([]),
          h(-1),
          x(null),
          v(0),
          N(0),
          i("sequence"),
          (T.current = "sequence"));
      }, []),
      P = l.useCallback(
        (X) => (
          (L.current = typeof X == "function" ? X : null),
          () => {
            L.current = null;
          }
        ),
        [],
      ),
      z = l.useCallback(() => {
        ((B.current = !0),
          window.setTimeout(() => {
            B.current = !1;
          }, 4500));
      }, []),
      O = l.useCallback(async (X, je, xe, ye) => {
        const R = C.current;
        if (
          !R ||
          !(X != null && X.length) ||
          (xe != null && xe !== "" && xe !== I.current)
        )
          return;
        const oe = ((je % X.length) + X.length) % X.length,
          ee = X[oe];
        if (!ee) return;
        if (M.current) {
          try {
            URL.revokeObjectURL(M.current);
          } catch {}
          M.current = null;
        }
        let H = null;
        try {
          if (ee.source === "netease_user" && ee.platformId != null)
            H = await A.current(ee.platformId);
          else if (ee.source === "local" && ee.fileBlob instanceof Blob) {
            const U = await ee.fileBlob.arrayBuffer(),
              ce = new Blob([U], { type: ee.fileBlob.type || "audio/mpeg" });
            ((H = URL.createObjectURL(ce)), (M.current = H));
          } else ee.url && (H = ee.url);
        } catch {}
        if (xe != null && xe !== "" && xe !== I.current) return;
        if (!H) {
          const U = oe + 1;
          U < X.length && O(X, U, xe, ye || "auto_skip_fail");
          return;
        }
        ((S.current = oe),
          x({
            title: ee.title || ee.name || "未知曲目",
            artist: ee.artist || "",
            platformId: ee.platformId != null ? ee.platformId : null,
            source: ee.source || null,
            lrc_data: typeof ee.lrc_data == "string" ? ee.lrc_data : "",
          }),
          (R.volume = 0.38),
          (R.src = H));
        try {
          await R.play();
        } catch {}
        const Y =
          ye === "ended" ||
          ye === "user_next" ||
          ye === "user_prev" ||
          ye === "user_pick" ||
          ye === "char_next" ||
          ye === "char_prev" ||
          ye === "auto_skip_fail";
        if (Y && B.current) {
          B.current = !1;
          return;
        }
        if (Y && typeof L.current == "function") {
          const U = ee.title || ee.name || "未知曲目",
            ce = ee.artist || "",
            pe = ee.platformId != null ? ee.platformId : null,
            se = ee.source || null;
          queueMicrotask(() => {
            var Te;
            try {
              (Te = L.current) == null ||
                Te.call(L, ye, {
                  title: U,
                  artist: ce,
                  platformId: pe,
                  source: se,
                });
            } catch {}
          });
        }
      }, []);
    (l.useEffect(() => {
      const X = C.current;
      if (!X) return;
      const je = () => c(!0),
        xe = () => c(!1),
        ye = () => {
          v(Number.isFinite(X.currentTime) ? X.currentTime : 0);
          const R = X.duration;
          Number.isFinite(R) && !Number.isNaN(R) && N(R);
        };
      return (
        X.addEventListener("play", je),
        X.addEventListener("pause", xe),
        X.addEventListener("timeupdate", ye),
        X.addEventListener("loadedmetadata", ye),
        X.addEventListener("durationchange", ye),
        X.addEventListener("seeked", ye),
        () => {
          (X.removeEventListener("play", je),
            X.removeEventListener("pause", xe),
            X.removeEventListener("timeupdate", ye),
            X.removeEventListener("loadedmetadata", ye),
            X.removeEventListener("durationchange", ye),
            X.removeEventListener("seeked", ye));
        }
      );
    }, []),
      l.useEffect(() => {
        const X = C.current;
        if (!X) return;
        const je = () => {
          const xe = E.current;
          if (!xe.length) return;
          const ye = T.current,
            R = S.current;
          if (ye === "single") {
            O(xe, R, I.current, "ended");
            return;
          }
          let oe;
          if (ye === "random" && xe.length > 1) {
            let ee = R,
              H = 0;
            for (; ee === R && H < 8; )
              ((ee = Math.floor(Math.random() * xe.length)), (H += 1));
            oe = ee;
          } else oe = (R + 1) % xe.length;
          O(xe, oe, I.current, "ended");
        };
        return (
          X.addEventListener("ended", je),
          () => X.removeEventListener("ended", je)
        );
      }, [O]));
    const Z = l.useCallback(() => {
        const X = C.current,
          je = E.current;
        !X || !je.length || (X.paused ? X.play().catch(() => {}) : X.pause());
      }, []),
      K = l.useCallback(
        (X) => {
          const je = E.current;
          if (!je.length) return;
          const xe = X === "char_next" ? "char_next" : "user_next",
            ye = S.current,
            R = T.current;
          let oe;
          if (R === "random" && je.length > 1) {
            let ee = ye,
              H = 0;
            for (; ee === ye && H < 8; )
              ((ee = Math.floor(Math.random() * je.length)), (H += 1));
            oe = ee;
          } else oe = (ye + 1) % je.length;
          O(je, oe, I.current, xe);
        },
        [O],
      ),
      q = l.useCallback(
        (X) => {
          const je = E.current;
          if (!je.length) return;
          const xe = X === "char_prev" ? "char_prev" : "user_prev",
            R = (S.current - 1 + je.length) % je.length;
          O(je, R, I.current, xe);
        },
        [O],
      ),
      V = l.useCallback(() => {
        i((X) => {
          const je = X === "single" ? "sequence" : "single";
          return ((T.current = je), je);
        });
      }, []),
      ne = l.useCallback(() => {
        i((X) => {
          const je = X === "random" ? "sequence" : "random";
          return ((T.current = je), je);
        });
      }, []),
      le = l.useCallback(
        (X) => {
          const je = E.current;
          if (!je.length) return;
          const xe = Number(X);
          if (!Number.isFinite(xe)) return;
          const ye = Math.floor(xe);
          ye < 0 || ye >= je.length || O(je, ye, I.current, "user_pick");
        },
        [O],
      );
    l.useEffect(() => {
      const X = ++j.current;
      if (($(), !F))
        return () => {
          j.current === X && $();
        };
      const je = F;
      let xe = !1;
      return (
        (async () => {
          const ye = D.current;
          if (!(ye != null && ye.playlistId)) return;
          let R = [];
          try {
            if (ye.source === "local")
              R = await zb.getSongsByPlaylist(ye.playlistId);
            else if (ye.source === "netease") {
              const oe = `playlist_${ye.playlistId}`,
                ee = await zb.getNeteaseCache(oe);
              if (ee != null && ee.length) R = ee;
              else if (typeof k.current == "function") {
                const H = await k.current(ye.playlistId);
                H != null &&
                  H.length &&
                  ((R = H.map((Y) => ({
                    id: `ne_${Y.id}`,
                    platformId: Y.id,
                    platform: "netease",
                    title: Y.name,
                    artist: Y.ar.map((U) => U.name).join(" / "),
                    cover: Y.al.picUrl,
                    album: Y.al.name,
                    duration: Y.dt / 1e3,
                    source: "netease_user",
                  }))),
                  await zb.setNeteaseCache(oe, R));
              }
            }
          } catch {}
          xe ||
            X !== j.current ||
            (je === I.current &&
              R.length &&
              ((E.current = R),
              (S.current = 0),
              u(R.length),
              p(
                R.map((oe) => ({
                  title: oe.title || oe.name || "未知曲目",
                  artist: oe.artist || "",
                  platformId: oe.platformId != null ? oe.platformId : null,
                  source: oe.source || null,
                })),
              ),
              h(0),
              await O(R, 0, je, "initial")));
        })(),
        () => {
          ((xe = !0), j.current === X && $());
        }
      );
    }, [F, $, O]);
    const ie = l.useMemo(
      () => ({
        bgmPlaying: o,
        bgmPlayMode: r,
        bgmQueueLength: d,
        bgmQueueList: f,
        bgmCurrentIndex: m,
        bgmTrackInfo: g,
        bgmCurrentTime: y,
        bgmDuration: b,
        onBgmTogglePlay: Z,
        onBgmPrev: q,
        onBgmNext: K,
        onBgmJumpToIndex: le,
        onBgmToggleSingleMode: V,
        onBgmToggleRandomMode: ne,
        registerTrackChangeListener: P,
        suppressNextTrackChangeNotification: z,
      }),
      [o, r, d, f, m, g, y, b, Z, q, K, le, V, ne, P, z],
    );
    return e.jsxs(QA.Provider, {
      value: ie,
      children: [
        e.jsx("audio", {
          ref: C,
          className: "hidden",
          playsInline: !0,
          preload: "auto",
        }),
        t,
      ],
    });
  };
function rV(t) {
  if (!t || typeof t != "object" || t.isRealVoice === !0) return !1;
  if ((t.type || "text") === "voice") return !0;
  const n = String(t.textPreview || t.text || "");
  return !!(
    n.includes("[语音]") ||
    n.includes("[VOICE]") ||
    n.includes("[/VOICE]")
  );
}
function iV(t, s) {
  var o;
  let n = t.text || t.content || t.textPreview || "";
  if ((!n || n === "[语音]") && Array.isArray(s)) {
    const c = s.find((u) => u.id === t.chatId),
      d =
        (o = c == null ? void 0 : c.messages) == null
          ? void 0
          : o.find((u) => u.id === t.messageId);
    d != null && d.text && (n = d.text);
  }
  const a = String(n || "")
      .replace(/^[\[［]语音消息[\]］]\s*/i, "")
      .replace(/[\[［]语音消息[\]］]/gi, "")
      .replace(/^\[voice\]\s*/i, "")
      .replace(/^\[VOICE\]\s*/i, "")
      .replace(/\[VOICE\](.*?)\[\/VOICE\]/gi, "$1")
      .replace(/\[语音\]/g, "")
      .trim(),
    r = String(t.contactName || "").trim(),
    i = a.slice(0, 42) || "语音";
  return r ? `${r} · ${i}` : i;
}
async function XA(t, s) {
  const n = [],
    a = () => {
      (n.forEach((c) => {
        try {
          URL.revokeObjectURL(c);
        } catch {}
      }),
        (n.length = 0));
    },
    r =
      t.audioUrl && !String(t.audioUrl).startsWith("blob:") ? t.audioUrl : null;
  if (
    r &&
    (r.startsWith("http://") ||
      r.startsWith("https://") ||
      r.startsWith("data:"))
  )
    return { url: r, revoke: a };
  const o = t.audioId || t.messageId;
  if (o)
    try {
      const c = await Ec(o);
      if (c) {
        const d = URL.createObjectURL(c);
        return (n.push(d), { url: d, revoke: a });
      }
    } catch {}
  return { url: null, revoke: a };
}
function oV(t, s) {
  return Array.isArray(t)
    ? t
        .filter((n) => {
          if (!rV(n)) return !1;
          const a =
              n.audioUrl &&
              !String(n.audioUrl).startsWith("blob:") &&
              (String(n.audioUrl).startsWith("http://") ||
                String(n.audioUrl).startsWith("https://") ||
                String(n.audioUrl).startsWith("data:")),
            r = n.audioId || n.messageId;
          return !!(a || r);
        })
        .map((n) => ({ ...n, _welcomeLabel: iV(n, s) }))
    : [];
}
function eC({
  entrySessionKey: t,
  favoriteId: s,
  favorites: n = [],
  chats: a = [],
  active: r = !0,
}) {
  const i = l.useRef(null),
    o = l.useRef(null),
    c = l.useRef(!1),
    d = l.useCallback(() => {
      var p;
      if (i.current) {
        try {
          i.current.pause();
        } catch {}
        i.current = null;
      }
      ((p = o.current) == null || p.call(o), (o.current = null));
    }, []),
    u = l.useCallback(async () => {
      if (!r || c.current) return;
      if (!s) {
        c.current = !0;
        return;
      }
      const p = (n || []).find((y) => y.id === s);
      if (!p) {
        c.current = !0;
        return;
      }
      const { url: m, revoke: h } = await XA(p);
      if (!m) {
        c.current = !0;
        return;
      }
      const g = new Audio(m);
      ((i.current = g), (o.current = h), (g.volume = 0.88));
      const x = () => {
        d();
      };
      (g.addEventListener("ended", x, { once: !0 }),
        g.addEventListener(
          "error",
          () => {
            ((c.current = !0), d());
          },
          { once: !0 },
        ));
      try {
        (await g.play(), (c.current = !0));
      } catch {
        (g.removeEventListener("ended", x), d());
      }
    }, [r, s, n, a, d]);
  return (
    l.useEffect(() => {
      if (!r) {
        (d(), (c.current = !1));
        return;
      }
      return (
        (c.current = !1),
        u(),
        () => {
          (d(), (c.current = !1));
        }
      );
    }, [r, t, u, d]),
    {
      onUserGestureRetry: l.useCallback(() => {
        (V5(), c.current || u());
      }, [u]),
    }
  );
}
const lV = ({ contact: t, onUnlock: s, entryWelcomeSessionKey: n }) => {
    var v;
    const { getSpace: a, sendHeartbeat: r } = Bu(),
      { favorites: i, chats: o } = vn(),
      c = a(t.id),
      [d, u] = l.useState(!1),
      { onUserGestureRetry: f } = eC({
        entrySessionKey: n,
        favoriteId:
          (v = c == null ? void 0 : c.coverWelcomeTts) == null
            ? void 0
            : v.favoriteId,
        favorites: i,
        chats: o,
        active: !0,
      }),
      p = new Date(),
      m = p.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
      h = p.toLocaleDateString("en-US", { weekday: "long" }),
      g = _v(c == null ? void 0 : c.startDate),
      x = () => {
        (f(), u(!0), r(t.id));
      },
      y = () => {
        u(!1);
      };
    return (
      l.useEffect(() => {
        let b;
        return (
          d &&
            (b = setTimeout(() => {
              s();
            }, 1500)),
          () => clearTimeout(b)
        );
      }, [d, s]),
      e.jsxs("div", {
        className:
          "h-full w-full bg-[#050508] relative overflow-hidden cursor-pointer select-none",
        onMouseDown: x,
        onMouseUp: y,
        onTouchStart: x,
        onTouchEnd: y,
        onMouseLeave: y,
        children: [
          e.jsx("style", {
            children: `
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shooting {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        .shooting-star {
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(90deg, white, transparent);
          animation: shooting 3s linear infinite;
          animation-delay: var(--delay);
          opacity: 0;
        }
      `,
          }),
          e.jsx("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [...Array(50)].map((b, N) =>
              e.jsx(
                "div",
                {
                  className: "star",
                  style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: Math.random() > 0.8 ? "3px" : "1px",
                    height: Math.random() > 0.8 ? "3px" : "1px",
                    "--duration": `${Math.random() * 3 + 2}s`,
                    "--delay": `${Math.random() * 2}s`,
                    boxShadow: Math.random() > 0.9 ? "0 0 4px white" : "none",
                  },
                },
                N,
              ),
            ),
          }),
          e.jsx("div", {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            children: [...Array(3)].map((b, N) =>
              e.jsx(
                "div",
                {
                  className: "shooting-star",
                  style: {
                    left: `${Math.random() * 50 + 50}%`,
                    top: `${Math.random() * 50}%`,
                    "--delay": `${Math.random() * 5 + 2}s`,
                  },
                },
                `shoot-${N}`,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "absolute inset-0 pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-[-10%] right-[-10%] w-[80%] h-[80%] rounded-full bg-purple-900/30 blur-[100px]",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-[-10%] left-[-10%] w-[80%] h-[80%] rounded-full bg-blue-900/30 blur-[100px]",
              }),
              e.jsx("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[80px]",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "relative z-10 h-full flex flex-col justify-between p-8 text-white/90",
            children: [
              e.jsxs("div", {
                className: "text-center pt-12",
                children: [
                  e.jsx("p", {
                    className:
                      "text-xs uppercase tracking-[0.4em] text-white/50 mb-3 font-medium",
                    children: h,
                  }),
                  e.jsx("h2", {
                    className:
                      "text-4xl font-serif italic text-white drop-shadow-lg",
                    children: m,
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/20 border-dashed animate-[spin_15s_linear_infinite_reverse]",
                      }),
                      e.jsxs(We.div, {
                        animate: { scale: d ? 0.9 : 1 },
                        className:
                          "relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)]",
                        children: [
                          e.jsx(zn, {
                            size: 36,
                            className: `transition-all duration-500 ${d ? "text-purple-400 fill-purple-400 scale-110" : "text-white/80"}`,
                            strokeWidth: 1.5,
                          }),
                          !d &&
                            e.jsx("div", {
                              className:
                                "absolute inset-0 rounded-full border border-white/30 animate-ping",
                            }),
                        ],
                      }),
                      d &&
                        [...Array(40)].map((b, N) =>
                          e.jsx(
                            We.div,
                            {
                              className:
                                "absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-purple-300 rounded-full pointer-events-none shadow-[0_0_2px_rgba(216,180,254,0.8)]",
                              initial: {
                                x: (Math.random() - 0.5) * 300,
                                y: (Math.random() - 0.5) * 300,
                                opacity: 0,
                                scale: 0,
                              },
                              animate: {
                                x: 0,
                                y: 0,
                                opacity: [0, 1, 0],
                                scale: [0, Math.random() * 1.5 + 0.5, 0],
                              },
                              transition: {
                                duration: Math.random() * 0.8 + 0.4,
                                repeat: 1 / 0,
                                ease: "easeIn",
                                delay: Math.random() * 0.2,
                              },
                            },
                            N,
                          ),
                        ),
                    ],
                  }),
                  e.jsx(We.p, {
                    animate: { opacity: d ? [0.5, 1, 0.5] : 1 },
                    transition: { duration: 1, repeat: 1 / 0 },
                    className:
                      "mt-8 text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium",
                    children: d ? "Connecting..." : "Tap to Connect",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-center pb-12 space-y-6",
                children: [
                  e.jsxs("p", {
                    className:
                      "text-lg font-serif italic text-white/80 max-w-[80%] mx-auto leading-relaxed",
                    children: [
                      '"',
                      (c == null ? void 0 : c.dailyMessage) ||
                        "Love is the bridge between two hearts.",
                      '"',
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-4 opacity-60",
                    children: [
                      e.jsx("div", { className: "h-px w-8 bg-white/30" }),
                      e.jsxs("span", {
                        className:
                          "text-xs font-sans uppercase tracking-widest text-white/80",
                        children: ["Day ", g],
                      }),
                      e.jsx("div", { className: "h-px w-8 bg-white/30" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  cV = ({ contact: t, boundUser: s = {}, onBack: n }) => {
    const { getSpace: a, deleteSpace: r } = Bu(),
      i = a(t.id),
      o = s == null ? void 0 : s.avatar,
      c = (s == null ? void 0 : s.name) || "我",
      d =
        (t == null ? void 0 : t.nickname) ||
        (t == null ? void 0 : t.name) ||
        "TA",
      [u, f] = l.useState(!1),
      p = l.useMemo(
        () =>
          Array.from({ length: 40 }).map((m, h) => ({
            id: h,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() > 0.7 ? 2 : 1,
            duration: 2 + Math.random() * 4,
            delay: Math.random() * 3,
          })),
        [],
      );
    return e.jsxs("div", {
      className:
        "h-full w-full bg-[#050508] relative overflow-hidden flex flex-col",
      children: [
        e.jsx("style", {
          children: `
        @keyframes twinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes orbit-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.4; }
        }
        @keyframes signal-send {
          0% { stroke-dashoffset: 120; opacity: 0.6; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `,
        }),
        e.jsxs("div", {
          className: "absolute inset-0 overflow-hidden pointer-events-none",
          children: [
            e.jsx(We.div, {
              animate: { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] },
              transition: { duration: 8, repeat: 1 / 0, ease: "easeInOut" },
              className:
                "absolute top-[-15%] left-[-15%] w-[70%] h-[70%] rounded-full bg-purple-900/25 blur-[90px]",
            }),
            e.jsx(We.div, {
              animate: { scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] },
              transition: {
                duration: 10,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 1,
              },
              className:
                "absolute bottom-[-15%] right-[-15%] w-[70%] h-[70%] rounded-full bg-blue-900/25 blur-[90px]",
            }),
            e.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-indigo-500/8 blur-[60px]",
            }),
          ],
        }),
        e.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          children: p.map((m) =>
            e.jsx(
              We.div,
              {
                className: "absolute bg-white rounded-full",
                style: {
                  left: `${m.x}%`,
                  top: `${m.y}%`,
                  width: m.size,
                  height: m.size,
                  boxShadow:
                    m.size > 1 ? "0 0 6px rgba(255,255,255,0.5)" : "none",
                },
                animate: { opacity: [0.2, 0.9, 0.2], scale: [0.9, 1.2, 0.9] },
                transition: {
                  duration: m.duration,
                  repeat: 1 / 0,
                  delay: m.delay,
                  ease: "easeInOut",
                },
              },
              m.id,
            ),
          ),
        }),
        e.jsx("div", {
          className:
            "relative z-10 flex justify-end items-center pt-12 pr-6 mt-1",
          children: e.jsxs("button", {
            type: "button",
            onClick: n,
            className:
              "landing-back group flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors duration-300",
            children: [
              e.jsx("span", {
                className:
                  "w-6 h-px bg-white/30 group-hover:bg-white/50 transition-colors",
              }),
              e.jsx("span", {
                className: "text-[9px] uppercase tracking-[0.35em] font-medium",
                children: "Back",
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className:
            "relative z-10 flex-1 flex flex-col items-center justify-center px-6",
          children: [
            e.jsxs("div", {
              className:
                "absolute inset-0 flex items-center justify-center pointer-events-none",
              children: [
                e.jsx("div", {
                  className:
                    "w-[320px] h-[320px] rounded-full border border-white/[0.06]",
                }),
                e.jsx("div", {
                  className:
                    "w-[240px] h-[240px] rounded-full border border-white/[0.08]",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative flex items-center justify-center gap-5",
              children: [
                e.jsxs("svg", {
                  className: "absolute pointer-events-none",
                  width: 200,
                  height: 80,
                  viewBox: "0 0 200 80",
                  fill: "none",
                  style: {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  },
                  children: [
                    e.jsx("path", {
                      d: "M 10 70 Q 100 -10 190 70",
                      stroke: "rgba(255,255,255,0.1)",
                      strokeWidth: "1",
                      fill: "none",
                      strokeDasharray: "5 4",
                    }),
                    (i == null ? void 0 : i.status) === "pending" &&
                      e.jsx(We.path, {
                        d: "M 10 70 Q 100 -10 190 70",
                        stroke: "rgba(216, 180, 254, 0.4)",
                        strokeWidth: "1.5",
                        fill: "none",
                        strokeDasharray: "280",
                        strokeDashoffset: "280",
                        initial: !1,
                        animate: { strokeDashoffset: 0 },
                        transition: {
                          duration: 2.2,
                          repeat: 1 / 0,
                          ease: "linear",
                        },
                      }),
                  ],
                }),
                e.jsxs(We.div, {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, ease: "easeOut" },
                  className:
                    "relative z-10 w-20 h-20 rounded-full border-2 border-white/20 shadow-[0_0_24px_rgba(139,92,246,0.25)] overflow-hidden bg-black",
                  children: [
                    e.jsx("img", {
                      src: t.avatar,
                      alt: d,
                      className: "w-full h-full object-cover",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none",
                    }),
                  ],
                }),
                e.jsx(We.div, {
                  animate: { scale: [1, 1.15, 1] },
                  transition: {
                    duration: 2.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                  },
                  className:
                    "relative z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/15",
                  children: e.jsx(zn, {
                    size: 20,
                    className: "text-pink-400/90 fill-pink-400/70",
                    strokeWidth: 1.5,
                  }),
                }),
                e.jsxs(We.div, {
                  initial: { scale: 0.8, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.1, ease: "easeOut" },
                  className:
                    "relative z-10 w-20 h-20 rounded-full border-2 border-white/20 shadow-[0_0_24px_rgba(59,130,246,0.2)] overflow-hidden bg-black",
                  children: [
                    o
                      ? e.jsx("img", {
                          src: o,
                          alt: c,
                          className: "w-full h-full object-cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center",
                          children: e.jsx("span", {
                            className:
                              "text-sm font-serif italic text-white/50",
                            children: "我",
                          }),
                        }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(We.p, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.25, duration: 0.5 },
              className: "mt-8 text-center max-w-[90%]",
              children: e.jsxs("span", {
                className:
                  "text-lg font-serif italic text-white/90 leading-relaxed",
                children: [
                  "邀请 ",
                  e.jsx("span", {
                    className: "text-white font-medium",
                    children: d,
                  }),
                  " 进入你的轨道",
                ],
              }),
            }),
            e.jsx(We.p, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.4, duration: 0.4 },
              className:
                "mt-1 text-[11px] text-white/40 uppercase tracking-[0.25em]",
              children: "— 只属于你们俩的宇宙 —",
            }),
            (i == null ? void 0 : i.status) === "pending" &&
              e.jsxs(We.div, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                className: "mt-12 w-full max-w-xs relative",
                children: [
                  e.jsxs("div", {
                    className: "text-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "h-px w-12 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[14px] font-serif italic text-white/80",
                        children: "信号已发出",
                      }),
                      e.jsxs("p", {
                        className: "mt-1 text-[12px] text-white/45",
                        children: ["去和 ", d, " 的聊天里，等 TA 的回应"],
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-4 flex items-center justify-center gap-2",
                        children: [
                          e.jsx(We.div, {
                            animate: { opacity: [0.4, 1, 0.4] },
                            transition: { duration: 1.8, repeat: 1 / 0 },
                            className: "w-1 h-1 rounded-full bg-violet-400/90",
                          }),
                          e.jsx("span", {
                            className:
                              "text-[10px] text-white/35 tracking-[0.2em] uppercase",
                            children: "in orbit",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (r(t.id), n == null || n());
                        },
                        className:
                          "mt-3 text-[12px] text-white/45 hover:text-white/70 transition-colors",
                        children: "取消邀请",
                      }),
                      e.jsx("div", {
                        className:
                          "h-px w-10 mx-auto mt-2 bg-gradient-to-r from-transparent via-white/20 to-transparent",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => f((m) => !m),
                    className:
                      "absolute top-0 right-0 p-1.5 rounded-full text-white/15 hover:text-white/35 transition-colors",
                    "aria-label": "说明",
                    children: e.jsx(xl, { size: 12, strokeWidth: 2 }),
                  }),
                  e.jsx(Os, {
                    children:
                      u &&
                      e.jsxs(We.div, {
                        initial: { opacity: 0, y: -4 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -4 },
                        className:
                          "absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 py-2.5 px-3 rounded-lg bg-black/90 border border-white/10 text-[10px] text-white/50 text-center shadow-xl z-20 backdrop-blur-md",
                        children: [
                          "邀请已发到与 ",
                          d,
                          " 的聊天，TA 会根据和你的关系决定是否接受。",
                        ],
                      }),
                  }),
                ],
              }),
            (i == null ? void 0 : i.status) === "rejected" &&
              e.jsxs(We.div, {
                initial: { opacity: 0, y: 14 },
                animate: { opacity: 1, y: 0 },
                className: "mt-12 text-center",
                children: [
                  e.jsx("div", {
                    className: "h-px w-10 mx-auto bg-white/10 mb-4",
                  }),
                  e.jsx(Mh, {
                    size: 18,
                    className: "mx-auto text-white/30 mb-2",
                  }),
                  e.jsxs("p", {
                    className: "text-[13px] font-serif italic text-white/55",
                    children: [d, " 还在别的轨道上"],
                  }),
                  e.jsx("p", {
                    className:
                      "mt-0.5 text-[10px] text-white/35 tracking-widest uppercase",
                    children: "下次再一起绕同一颗星",
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  dV = ({ open: t, avatar: s, name: n, message: a, onClose: r }) => {
    const [i, o] = l.useState(!1),
      [c, d] = l.useState(!1);
    return (
      l.useEffect(() => {
        if (t)
          (d(!0),
            navigator.vibrate && navigator.vibrate(50),
            requestAnimationFrame(() => o(!0)));
        else {
          o(!1);
          const u = setTimeout(() => d(!1), 500);
          return () => clearTimeout(u);
        }
      }, [t]),
      c
        ? e.jsx("div", {
            className: `pointer-events-auto absolute left-3 right-3 top-3 z-[80] transition-all duration-500 transform ${i ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}`,
            children: e.jsxs("div", {
              className:
                "bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-3 flex items-center gap-3 border border-gray-200/50",
              children: [
                e.jsx("img", {
                  src: s,
                  alt: n,
                  className: "w-10 h-10 rounded-full object-cover shrink-0",
                  loading: "lazy",
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-center gap-2",
                      children: [
                        e.jsx("h4", {
                          className: "font-bold text-sm text-gray-900 truncate",
                          children: n,
                        }),
                        e.jsx("span", {
                          className: "text-[10px] text-gray-400 shrink-0",
                          children: "刚刚",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-xs text-gray-600 truncate",
                      children: a,
                    }),
                  ],
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: (u) => {
                    (u.stopPropagation(), r == null || r());
                  },
                  className: "p-1 text-gray-400 hover:text-gray-600 shrink-0",
                  "aria-label": "关闭",
                  children: e.jsx(Ts, { size: 16 }),
                }),
              ],
            }),
          })
        : null
    );
  },
  N1 = (t) => {
    const s = String(t || "").trim();
    let n = s.startsWith("#") ? s.slice(1) : s;
    if (
      (n.length === 3 &&
        (n = n
          .split("")
          .map((o) => o + o)
          .join("")),
      !/^[0-9a-fA-F]{6}$/.test(n))
    )
      return "229, 169, 153";
    const a = parseInt(n.slice(0, 2), 16),
      r = parseInt(n.slice(2, 4), 16),
      i = parseInt(n.slice(4, 6), 16);
    return `${a}, ${r}, ${i}`;
  },
  Tu = "white",
  s2 = {
    h: "#36343C",
    body: "#55525E",
    muted: "#6F6C78",
    soft: "#9B98A3",
    strong: "#2C2A32",
    caption: "#858290",
  },
  up = {
    white: {
      label: "白色",
      rootBg: "#FDFBF9",
      panelBg: "#ffffff",
      overlay:
        "linear-gradient(to bottom, rgba(255,253,249,0.5), rgba(253,245,242,0.3), rgba(252,235,229,0.9))",
      accent: "#E5A999",
      accent2: "#C4786E",
      line: "#D8C3B5",
      softIcon: "#D8B4A8",
      lightInk: s2,
      wheel: {
        border: "rgba(255,255,255,0.8)",
        bg: "rgba(255,255,255,0.5)",
        shadow: "0 -20px 50px rgba(230,210,200,0.4)",
      },
      glass: {
        strong: "rgba(255,255,255,0.85)",
        mid: "rgba(255,255,255,0.7)",
        border: "rgba(255,255,255,0.8)",
        chip: "rgba(255,255,255,0.4)",
        chipHover: "rgba(255,255,255,0.55)",
        chipBorder: "rgba(255,255,255,0.6)",
      },
      heart: { border: "#ffffff", bg: "rgba(255,255,255,0.8)" },
      gearIdle: { border: "#ffffff", from: "#FFFDF9", to: "#FCEBE5" },
      gearEdit: { from: "#FFF5F2", to: "#FCE0D8" },
      bgmIcon: "#6E6A78",
      gearShadow: "0 15px 35px rgba(229,169,153,0.4)",
    },
    black: {
      label: "黑色",
      rootBg: "#07070a",
      panelBg: "#0a0a10",
      overlay:
        "linear-gradient(to bottom, rgba(8,8,12,0.52), rgba(18,18,24,0.62), rgba(5,5,8,0.94))",
      accent: "#E8A090",
      accent2: "#E8A090",
      line: "rgba(232,160,144,0.38)",
      softIcon: "rgba(232,160,144,0.55)",
      wheel: {
        border: "rgba(255,255,255,0.12)",
        bg: "rgba(26,26,34,0.78)",
        shadow: "0 -26px 60px rgba(0,0,0,0.58)",
      },
      glass: {
        strong: "rgba(38,38,48,0.9)",
        mid: "rgba(32,32,40,0.68)",
        border: "rgba(255,255,255,0.2)",
        chip: "rgba(255,255,255,0.07)",
        chipHover: "rgba(255,255,255,0.11)",
        chipBorder: "rgba(255,255,255,0.16)",
      },
      heart: { border: "rgba(255,255,255,0.22)", bg: "rgba(28,28,36,0.88)" },
      gearIdle: {
        border: "rgba(255,255,255,0.22)",
        from: "rgba(44,44,54,0.96)",
        to: "rgba(22,22,30,0.99)",
      },
      gearEdit: { from: "rgba(48,48,58,0.96)", to: "rgba(28,28,36,0.99)" },
      bgmIcon: "rgba(232,160,144,0.75)",
      gearShadow: "0 15px 40px rgba(232,160,144,0.22)",
      darkInk: {
        primary: "#E8EAEF",
        secondary: "#B4BAC8",
        muted: "#8B93A4",
        caption: "#9AA3B2",
      },
    },
    macaronPink: {
      label: "马卡龙淡粉",
      rootBg: "#FFFAFC",
      panelBg: "#FFFEFF",
      overlay:
        "linear-gradient(to bottom, rgba(255,250,252,0.72), rgba(255,242,248,0.5), rgba(255,232,242,0.82))",
      accent: "#F8C8D8",
      accent2: "#EEB8CC",
      line: "#F5E0E8",
      softIcon: "#F0D0DC",
      lightInk: {
        h: "#6A5460",
        body: "#86707C",
        muted: "#9E8894",
        soft: "#C4ADB8",
        strong: "#5A4654",
        caption: "#B8A0AC",
      },
      wheel: {
        border: "rgba(255,255,255,0.88)",
        bg: "rgba(255,253,254,0.62)",
        shadow: "0 -20px 50px rgba(248,200,216,0.18)",
      },
      glass: {
        strong: "rgba(255,255,255,0.92)",
        mid: "rgba(255,252,253,0.78)",
        border: "rgba(255,255,255,0.85)",
        chip: "rgba(255,250,252,0.52)",
        chipHover: "rgba(255,248,251,0.68)",
        chipBorder: "rgba(255,255,255,0.72)",
      },
      heart: { border: "#ffffff", bg: "rgba(255,253,254,0.88)" },
      gearIdle: { border: "#ffffff", from: "#FFFDFE", to: "#FFF0F5" },
      gearEdit: { from: "#FFF7FA", to: "#FFE8F0" },
      bgmIcon: "#A88898",
      gearShadow: "0 15px 35px rgba(248,200,216,0.28)",
    },
    macaronBlue: {
      label: "马卡龙淡蓝",
      rootBg: "#F8FBFE",
      panelBg: "#FDFFFF",
      overlay:
        "linear-gradient(to bottom, rgba(240,248,255,0.7), rgba(232,244,252,0.48), rgba(220,238,250,0.8))",
      accent: "#B8D8F4",
      accent2: "#A0C8EC",
      line: "#D8EAF8",
      softIcon: "#C8E2F6",
      lightInk: {
        h: "#4E5C6A",
        body: "#6A7684",
        muted: "#8896A4",
        soft: "#A8B6C4",
        strong: "#3F4C5A",
        caption: "#9CAAB8",
      },
      wheel: {
        border: "rgba(255,255,255,0.88)",
        bg: "rgba(252,253,255,0.6)",
        shadow: "0 -20px 50px rgba(184,216,244,0.16)",
      },
      glass: {
        strong: "rgba(255,255,255,0.92)",
        mid: "rgba(250,252,255,0.78)",
        border: "rgba(255,255,255,0.85)",
        chip: "rgba(244,250,255,0.5)",
        chipHover: "rgba(240,248,255,0.65)",
        chipBorder: "rgba(255,255,255,0.72)",
      },
      heart: { border: "#ffffff", bg: "rgba(252,253,255,0.88)" },
      gearIdle: { border: "#ffffff", from: "#FCFEFF", to: "#EEF6FD" },
      gearEdit: { from: "#F4FAFD", to: "#E2EEF8" },
      bgmIcon: "#6E8AA8",
      gearShadow: "0 15px 35px rgba(184,216,244,0.26)",
    },
    macaronGreen: {
      label: "马卡龙淡绿",
      rootBg: "#F6FCF9",
      panelBg: "#FEFFFF",
      overlay:
        "linear-gradient(to bottom, rgba(240,252,246,0.7), rgba(232,248,240,0.48), rgba(220,244,232,0.8))",
      accent: "#B8E6CC",
      accent2: "#9ED8B8",
      line: "#D8F0E2",
      softIcon: "#C8EAD6",
      lightInk: {
        h: "#4A5C54",
        body: "#66786E",
        muted: "#84968C",
        soft: "#A8B8AE",
        strong: "#3D4E46",
        caption: "#96A8A0",
      },
      wheel: {
        border: "rgba(255,255,255,0.88)",
        bg: "rgba(253,255,254,0.6)",
        shadow: "0 -20px 50px rgba(184,230,204,0.16)",
      },
      glass: {
        strong: "rgba(255,255,255,0.92)",
        mid: "rgba(250,255,252,0.78)",
        border: "rgba(255,255,255,0.85)",
        chip: "rgba(244,252,248,0.5)",
        chipHover: "rgba(240,252,246,0.65)",
        chipBorder: "rgba(255,255,255,0.72)",
      },
      heart: { border: "#ffffff", bg: "rgba(252,255,253,0.88)" },
      gearIdle: { border: "#ffffff", from: "#FCFEFD", to: "#EEF8F2" },
      gearEdit: { from: "#F2FAF5", to: "#E2F4EA" },
      bgmIcon: "#6E9884",
      gearShadow: "0 15px 35px rgba(184,230,204,0.26)",
    },
    gray: {
      label: "灰色",
      rootBg: "#ECECEF",
      panelBg: "#F5F5F7",
      overlay:
        "linear-gradient(to bottom, rgba(245,245,248,0.55), rgba(235,235,240,0.42), rgba(220,220,228,0.9))",
      accent: "#9A9AA8",
      accent2: "#7E7E8C",
      line: "#C6C6D0",
      softIcon: "#A8A8B4",
      lightInk: {
        h: "#4A4A54",
        body: "#666672",
        muted: "#858592",
        soft: "#A8A8B4",
        strong: "#3C3C48",
        caption: "#9696A2",
      },
      wheel: {
        border: "rgba(255,255,255,0.75)",
        bg: "rgba(255,255,255,0.48)",
        shadow: "0 -20px 48px rgba(120,120,135,0.18)",
      },
      glass: {
        strong: "rgba(255,255,255,0.86)",
        mid: "rgba(255,255,255,0.68)",
        border: "rgba(255,255,255,0.72)",
        chip: "rgba(255,255,255,0.38)",
        chipHover: "rgba(255,255,255,0.52)",
        chipBorder: "rgba(255,255,255,0.55)",
      },
      heart: { border: "#ffffff", bg: "rgba(255,255,255,0.78)" },
      gearIdle: { border: "#ffffff", from: "#FDFDFE", to: "#ECECEF" },
      gearEdit: { from: "#F4F4F6", to: "#DCDCE2" },
      bgmIcon: "#6E6E78",
      gearShadow: "0 15px 35px rgba(120,120,135,0.22)",
    },
  },
  uV = ["white", "black", "macaronPink", "macaronBlue", "macaronGreen", "gray"],
  fV = s2,
  I0 = (t) => {
    const s = Object.prototype.hasOwnProperty.call(up, t) ? t : Tu,
      n = up[s];
    if (s === "black") {
      const r = n.darkInk;
      return {
        primary: r.primary,
        secondary: r.secondary,
        muted: r.muted,
        bubble: n.accent2,
      };
    }
    const a = n.lightInk || fV;
    return {
      primary: a.h,
      secondary: a.body,
      muted: a.muted,
      bubble: n.accent2,
    };
  },
  tC = (t) => {
    const s = Object.prototype.hasOwnProperty.call(up, t) ? t : Tu,
      n = up[s],
      a = N1(n.accent),
      r = (i) => `rgba(${a},${i})`;
    return {
      id: s,
      label: n.label,
      rootBg: n.rootBg,
      panelBg: n.panelBg,
      overlay: n.overlay,
      accent: n.accent,
      accent2: n.accent2,
      line: n.line,
      softIcon: n.softIcon,
      wheel: n.wheel,
      glass: n.glass,
      heart: n.heart,
      gearIdle: n.gearIdle,
      gearEdit: n.gearEdit,
      bgmIcon: n.bgmIcon,
      gearShadow: n.gearShadow,
      accentRgb: a,
      aa: r,
      lightInk: n.lightInk ?? null,
      editInsetShadow: `inset 0 0 0 3px ${r(0.55)}, 0 0 0 1px ${r(0.25)}`,
    };
  },
  sC = (t) => {
    const s = t.aa,
      n = t.id === "black",
      a = t.glass,
      r = s2,
      i = N1(t.rootBg),
      o = t.accentRgb,
      c = (D) => `rgba(${o},${D})`,
      d = String(t.line || ""),
      u = !n && d.startsWith("#") ? N1(t.line) : null,
      f = n
        ? (() => {
            const D = t.darkInk || {
              primary: "#E8EAEF",
              secondary: "#B4BAC8",
              muted: "#8B93A4",
              caption: "#9AA3B2",
            };
            return {
              h: D.primary,
              body: D.secondary,
              muted: D.muted,
              soft: "rgba(168,176,190,0.72)",
              strong: "#ffffff",
              script: s(0.9),
              caption: D.caption,
            };
          })()
        : { ...(t.lightInk || r), script: t.accent2 },
      p = n
        ? "linear-gradient(to bottom, #181820, #12121a, #0e0e14)"
        : `linear-gradient(to bottom, ${t.gearIdle.from}, ${t.panelBg}, ${s(0.06)})`,
      m = n
        ? "linear-gradient(to bottom, #1a1a22, #14141a, #101018)"
        : `linear-gradient(to bottom, ${t.gearIdle.from}, ${t.panelBg}, ${s(0.04)})`,
      h = n
        ? "linear-gradient(to bottom right, rgba(46,46,58,0.96), rgba(34,34,44,0.92))"
        : `linear-gradient(to bottom right, rgba(255,255,255,0.92), ${s(0.04)}, ${s(0.1)})`,
      g = n
        ? "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(16,16,22,0.78), rgba(32,32,40,0.62))"
        : `linear-gradient(to bottom, rgba(${i},0.8), rgba(${i},0.36), rgba(${o},0.12))`,
      x = n
        ? "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(14,14,20,0.74), rgba(26,26,34,0.58))"
        : `linear-gradient(to bottom, rgba(${i},0.76), rgba(${o},0.16), rgba(${i},0.26))`,
      y = n
        ? `inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 28px ${s(0.22)}`
        : `inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 28px ${s(0.11)}`,
      v = u ? `rgba(${u},0.5)` : "rgba(232,213,205,0.88)",
      b = u ? `rgba(${u},0.38)` : "rgba(216,195,181,0.6)",
      N = `linear-gradient(152deg, ${s(0.48)}, ${t.accent2}, ${s(0.58)})`,
      w = `linear-gradient(to bottom right, ${s(0.34)}, ${s(0.2)})`,
      _ = `linear-gradient(to bottom right, ${s(0.18)}, ${s(0.08)})`,
      A = `linear-gradient(to top, ${s(0.38)}, ${s(0.12)}, transparent)`,
      k = n ? "#18181f" : t.panelBg,
      C = n
        ? "#25252d"
        : `color-mix(in srgb, ${t.panelBg} 86%, ${t.gearIdle.from} 14%)`,
      M = n
        ? "#2a2a32"
        : `color-mix(in srgb, ${t.panelBg} 93%, ${t.accent} 7%)`,
      E = n
        ? "#32323c"
        : `color-mix(in srgb, ${t.panelBg} 86%, ${t.accent} 14%)`,
      S = n
        ? "#202028"
        : `color-mix(in srgb, ${t.panelBg} 91%, ${t.accent} 9%)`,
      j = n ? "#2e2e38" : `color-mix(in srgb, ${t.panelBg} 88%, white 12%)`,
      T = n ? "#16161c" : t.panelBg,
      I = n
        ? "#2e2c34"
        : `color-mix(in srgb, ${t.panelBg} 90%, ${t.accent} 10%)`,
      L = n ? "#34343e" : `color-mix(in srgb, white 72%, ${t.panelBg} 28%)`,
      B = n
        ? "linear-gradient(to right, #3a2830, #2a2428)"
        : `linear-gradient(to right, ${t.gearEdit.from}, color-mix(in srgb, ${t.panelBg} 88%, ${t.accent} 12%))`,
      F = n ? "#3a3a44" : `color-mix(in srgb, ${t.panelBg} 82%, white 18%)`;
    return {
      "--ps-accent": t.accent,
      "--ps-accent-2": t.accent2,
      "--ps-line": t.line,
      "--ps-text-h": f.h,
      "--ps-text-body": f.body,
      "--ps-text-muted": f.muted,
      "--ps-text-soft": f.soft,
      "--ps-text-strong": f.strong,
      "--ps-text-script": f.script,
      "--ps-text-caption": f.caption,
      "--ps-atelier-bg": p,
      "--ps-modal-inner": m,
      "--ps-modal-scrim": g,
      "--ps-atelier-scrim": x,
      "--ps-card-bg": h,
      "--ps-card-border": n
        ? "rgba(255,255,255,0.11)"
        : "rgba(255,255,255,0.72)",
      "--ps-section-shadow": n
        ? "0 20px 56px rgba(0,0,0,0.38)"
        : `0 20px 56px ${c(0.065)}`,
      "--ps-glass-border": a.border,
      "--ps-glass-strong": a.strong,
      "--ps-glass-mid": a.mid,
      "--ps-dot-grid": n ? "rgba(240,236,230,0.055)" : c(0.055),
      "--ps-switch-off-from": n ? "#3a3a46" : s(0.2),
      "--ps-switch-off-to": n ? "#2e2e38" : s(0.08),
      "--ps-switch-on-from": t.accent,
      "--ps-switch-on-to": t.accent2,
      "--ps-switch-ring-offset": n ? "#1a1a22" : t.panelBg,
      "--ps-switch-knob-off": n ? s(0.55) : c(0.48),
      "--ps-switch-knob-on": t.accent,
      "--ps-grad-frame": `linear-gradient(135deg, rgba(255,255,255,0.95), ${s(0.32)}, rgba(255,255,255,0.78))`,
      "--ps-row-hover-shadow": s(0.14),
      "--ps-sec-icon-shadow": y,
      "--ps-sec-icon-border": s(0.25),
      "--ps-sec-icon-bg-from": n ? "rgba(48,48,58,0.96)" : "#ffffff",
      "--ps-sec-icon-bg-to": n ? "rgba(34,34,42,0.92)" : s(0.08),
      "--ps-footer-bg": `linear-gradient(to top, ${n ? "#16161c" : t.gearIdle.from}, ${n ? "#14141a" : t.panelBg})`,
      "--ps-player-bg": n
        ? "linear-gradient(to bottom right, rgba(42,42,52,0.96), rgba(30,30,38,0.92))"
        : `linear-gradient(to bottom right, ${s(0.06)}, ${t.panelBg}, ${s(0.12)})`,
      "--ps-player-border": n ? "rgba(255,255,255,0.12)" : s(0.32),
      "--ps-vinyl-ring-offset": n ? "#141418" : t.gearIdle.from,
      "--ps-primary-btn": `linear-gradient(to right, ${s(0.12)}, ${t.panelBg}, ${s(0.1)})`,
      "--ps-bloom-1": s(0.22),
      "--ps-bloom-2": s(0.18),
      "--ps-gallery-fallback": n
        ? "linear-gradient(to bottom right, rgba(42,38,48,0.92), rgba(22,20,28,0.96))"
        : _,
      "--ps-gallery-veil": n
        ? "linear-gradient(to top, rgba(0,0,0,0.5), rgba(24,22,28,0.14), transparent)"
        : A,
      "--ps-float-btn-shadow": n
        ? "0 6px 24px rgba(0,0,0,0.35)"
        : `0 6px 24px ${c(0.16)}`,
      "--ps-a-08": s(0.08),
      "--ps-a-10": s(0.1),
      "--ps-a-12": s(0.12),
      "--ps-a-14": s(0.14),
      "--ps-a-15": s(0.15),
      "--ps-a-18": s(0.18),
      "--ps-a-22": s(0.22),
      "--ps-a-25": s(0.25),
      "--ps-a-28": s(0.28),
      "--ps-a-35": s(0.35),
      "--ps-a-40": s(0.4),
      "--ps-a-45": s(0.45),
      "--ps-a-50": s(0.5),
      "--ps-a-55": s(0.55),
      "--ps-a-70": s(0.7),
      "--ps-a-95": s(0.95),
      "--ps-sheet-border": n
        ? "rgba(255,255,255,0.14)"
        : "rgba(255,255,255,0.55)",
      "--ps-sheet-shadow": n
        ? "0 -40px 120px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.06)"
        : `0 -40px 120px ${c(0.2)}, inset 0 0 0 1px rgba(255,255,255,0.35)`,
      "--ps-input-border": n ? "rgba(255,255,255,0.16)" : v,
      "--ps-input-bg": n ? "rgba(36,36,44,0.85)" : "rgba(255,255,255,0.92)",
      "--ps-divider": n ? "rgba(255,255,255,0.12)" : b,
      "--ps-tab-pill-bg": n
        ? "linear-gradient(to bottom right, rgba(44,44,54,0.96), rgba(30,30,38,0.92))"
        : `linear-gradient(to bottom right, #ffffff, ${t.panelBg}, ${s(0.09)})`,
      "--ps-tab-pill-shadow": `0 4px 20px ${s(0.16)}`,
      "--ps-alert-bg": n
        ? "linear-gradient(to right, rgba(72,48,52,0.42), rgba(40,36,42,0.48))"
        : `linear-gradient(to right, ${t.gearEdit.from}, ${s(0.08)})`,
      "--ps-chip-mist": n
        ? "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.04))"
        : `linear-gradient(to right, rgba(255,255,255,0.86), ${s(0.04)})`,
      "--ps-cover-mock": n
        ? "linear-gradient(to bottom right, rgba(50,50,60,0.96), rgba(36,36,44,0.98))"
        : `linear-gradient(to bottom right, ${s(0.12)}, ${s(0.05)})`,
      "--ps-vinyl-surface": n
        ? "linear-gradient(to bottom right, #3a3844, #26242e, #141418)"
        : N,
      "--ps-vinyl-spindle": n ? "#1a1a22" : t.rootBg,
      "--ps-vinyl-drop": n
        ? "0 8px 24px rgba(0,0,0,0.38)"
        : `0 8px 24px ${c(0.2)}`,
      "--ps-player-well-shadow": n
        ? "0 12px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)"
        : `0 12px 40px ${c(0.085)}, inset 0 1px 0 rgba(255,255,255,0.95)`,
      "--ps-list-row-shadow": n
        ? "0 4px 24px rgba(0,0,0,0.32)"
        : `0 4px 24px ${c(0.05)}`,
      "--ps-list-row-hover": `0 8px 32px ${s(0.11)}`,
      "--ps-play-main-shadow": `0 8px 28px ${s(0.3)}`,
      "--ps-complete-shadow": `0 6px 24px ${s(0.2)}`,
      "--ps-footer-divider": n ? "rgba(255,255,255,0.1)" : s(0.26),
      "--ps-mode-on-bg": s(n ? 0.18 : 0.11),
      "--ps-control-well": n ? "rgba(36,36,44,0.75)" : "rgba(255,255,255,0.72)",
      "--ps-control-shadow": n
        ? "0 4px 16px rgba(0,0,0,0.35)"
        : `0 4px 16px ${c(0.065)}`,
      "--ps-netease-mock": n
        ? "linear-gradient(to bottom right, #2a2a32, #121218)"
        : w,
      "--ps-row-highlight": n
        ? "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.03))"
        : `linear-gradient(to right, rgba(255,255,255,0.82), ${s(0.04)})`,
      "--ps-bgm-surface": k,
      "--ps-bgm-tab-track": C,
      "--ps-bgm-list-row": M,
      "--ps-bgm-list-row-hover": E,
      "--ps-bgm-player": S,
      "--ps-bgm-control": j,
      "--ps-bgm-footer": T,
      "--ps-bgm-highlight-row": I,
      "--ps-bgm-close-btn": L,
      "--ps-bgm-alert": B,
      "--ps-bgm-preview-split": F,
    };
  },
  Rb = co("leting"),
  mV = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');
  .couple-bgm-sheet { font-family: 'Jost', system-ui, sans-serif; }
  .couple-bgm-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
  @keyframes couple-bgm-breathe {
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.85; transform: scale(1.06); }
  }
  @keyframes couple-bgm-orbit {
    to { transform: rotate(360deg); }
  }
  .couple-bgm-scroll {
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--ps-accent) 45%, transparent) transparent;
  }
  .couple-bgm-scroll::-webkit-scrollbar { width: 5px; }
  .couple-bgm-scroll::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, color-mix(in srgb, var(--ps-accent) 55%, transparent), color-mix(in srgb, var(--ps-line) 50%, transparent));
    border-radius: 999px;
  }
  @keyframes couple-bgm-vinyl {
    to { transform: rotate(360deg); }
  }
  @keyframes couple-bgm-glow-pulse {
    0%, 100% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.85; transform: scale(1.04); }
  }
  @keyframes couple-bgm-eq-bar {
    0%, 100% { transform: scaleY(0.35); opacity: 0.5; }
    50% { transform: scaleY(1); opacity: 1; }
  }
  .couple-bgm-eq span {
    display: block;
    width: 3px;
    border-radius: 999px;
    background: linear-gradient(180deg, var(--ps-accent), var(--ps-line));
    transform-origin: center bottom;
    animation: couple-bgm-eq-bar 0.9s ease-in-out infinite;
  }
  .couple-bgm-eq span:nth-child(2) { animation-delay: 0.12s; }
  .couple-bgm-eq span:nth-child(3) { animation-delay: 0.24s; }
  .couple-bgm-eq span:nth-child(4) { animation-delay: 0.08s; }
  /* 相对 .prism-root：高度随外壳内屏 / 全屏 / 浮窗应用区变化；整体比旧版更矮 */
  .couple-bgm-sheet-modal {
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: min(calc(100% - 10px), 68dvh);
  }
  .couple-bgm-sheet-modal.couple-bgm-sheet-modal--floating {
    max-height: min(calc(100% - 8px), 92%);
  }
  @media (min-width: 640px) {
    .couple-bgm-sheet-modal {
      max-width: min(100%, 25rem);
      max-height: min(calc(100% - 16px), 70dvh, 440px);
    }
    .couple-bgm-sheet-modal.couple-bgm-sheet-modal--floating {
      max-height: min(calc(100% - 8px), 94%);
    }
  }
`,
  pV = ({
    open: t,
    onClose: s,
    currentBinding: n,
    onSave: a,
    bgmPlaying: r = !1,
    bgmPlayMode: i = "sequence",
    bgmQueueLength: o = 0,
    bgmQueueList: c = [],
    bgmCurrentIndex: d = -1,
    bgmTrackInfo: u = null,
    onBgmTogglePlay: f = () => {},
    onBgmPrev: p = () => {},
    onBgmNext: m = () => {},
    onBgmJumpToIndex: h = () => {},
    onBgmToggleSingleMode: g = () => {},
    onBgmToggleRandomMode: x = () => {},
    chatFavorites: y = [],
    chats: v = [],
    welcomeTtsFavoriteId: b = null,
    onSaveWelcomeTts: N = () => {},
    uiShellThemeId: w = Tu,
    appWindowMode: _ = "full",
  }) => {
    var ee;
    const A = sC(tC(w || Tu)),
      {
        fetchUserPlaylists: k,
        fetchPlaylistDetail: C,
        user: M,
        apiEndpoint: E,
      } = Ii(),
      [S, j] = l.useState("local"),
      [T, I] = l.useState([]),
      [L, B] = l.useState([]),
      [F, D] = l.useState(!1),
      [$, P] = l.useState(null),
      [z, O] = l.useState(""),
      [Z, K] = l.useState(null),
      [q, V] = l.useState(!1),
      ne = l.useRef(null),
      le = l.useRef(null),
      ie = l.useRef(null),
      X = l.useMemo(() => oV(y, v), [y, v]);
    (l.useEffect(() => {
      var H;
      t ||
        (K(null),
        V(!1),
        ne.current && (ne.current.pause(), (ne.current = null)),
        (H = le.current) == null || H.call(le),
        (le.current = null));
    }, [t]),
      l.useEffect(() => {
        if (!t || !q || d < 0) return;
        const H = window.requestAnimationFrame(() => {
          var ce, pe;
          const Y = ie.current,
            U =
              (ce = Y == null ? void 0 : Y.querySelector) == null
                ? void 0
                : ce.call(Y, `[data-bgm-q="${d}"]`);
          (pe = U == null ? void 0 : U.scrollIntoView) == null ||
            pe.call(U, { block: "nearest", behavior: "smooth" });
        });
        return () => window.cancelAnimationFrame(H);
      }, [t, q, d]));
    const je = () => {
        var H;
        (ne.current && (ne.current.pause(), (ne.current = null)),
          (H = le.current) == null || H.call(le),
          (le.current = null),
          K(null));
      },
      xe = async (H, Y) => {
        var se;
        if (
          ((se = Y == null ? void 0 : Y.stopPropagation) == null || se.call(Y),
          !(H != null && H.id))
        )
          return;
        if (Z === H.id) {
          je();
          return;
        }
        je();
        const { url: U, revoke: ce } = await XA(H);
        if (!U) return;
        le.current = ce;
        const pe = new Audio(U);
        ((ne.current = pe),
          (pe.onended = () => je()),
          (pe.onerror = () => je()),
          K(H.id),
          pe.play().catch(() => je()));
      };
    (l.useEffect(() => {
      t &&
        (O(""),
        j("local"),
        (async () => {
          D(!0);
          try {
            const H = await Rb.getAllPlaylists();
            I(Array.isArray(H) ? H : []);
          } catch {
            I([]);
          } finally {
            D(!1);
          }
        })());
    }, [t]),
      l.useEffect(() => {
        !t ||
          S !== "netease" ||
          !M ||
          (async () => {
            (D(!0), O(""));
            try {
              const H = await k(M.userId);
              B(
                (H || []).map((Y) => {
                  var U, ce;
                  return {
                    id: `ne_${Y.id}`,
                    platformId: Y.id,
                    name: Y.name,
                    cover: Y.coverImgUrl,
                    trackCount: Y.trackCount,
                    creator: (U = Y.creator) == null ? void 0 : U.nickname,
                    creatorId: (ce = Y.creator) == null ? void 0 : ce.userId,
                    source: "netease_user",
                  };
                }),
              );
            } catch {
              (O("加载网易云歌单失败"), B([]));
            } finally {
              D(!1);
            }
          })();
      }, [t, S, M, k]));
    const ye = async (H) => {
        if (H != null && H.id) {
          (P(`local_${H.id}`), O(""));
          try {
            const Y = await Rb.getSongsByPlaylist(H.id);
            if (!(Y != null && Y.length)) {
              O("该歌单暂无歌曲，请先在乐听中添加音乐");
              return;
            }
            (a({
              source: "local",
              playlistId: String(H.id),
              playlistName: H.name || "本地歌单",
            }),
              s());
          } catch {
            O("读取本地歌单失败");
          } finally {
            P(null);
          }
        }
      },
      R = async (H) => {
        if (H != null && H.platformId) {
          if (!E) {
            O("请先在乐听中配置网易云 API 地址并登录");
            return;
          }
          (P(`ne_${H.platformId}`), O(""));
          try {
            const Y = await C(H.platformId);
            if (!(Y != null && Y.length)) {
              O("该歌单暂无可用曲目或加载失败");
              return;
            }
            const U = Y.map((ce) => ({
              id: `ne_${ce.id}`,
              platformId: ce.id,
              platform: "netease",
              title: ce.name,
              artist: ce.ar.map((pe) => pe.name).join(" / "),
              cover: ce.al.picUrl,
              album: ce.al.name,
              duration: ce.dt / 1e3,
              source: "netease_user",
            }));
            (await Rb.setNeteaseCache(`playlist_${H.platformId}`, U),
              a({
                source: "netease",
                playlistId: String(H.platformId),
                playlistName: H.name || "网易云歌单",
              }),
              s());
          } catch {
            O("加载网易云歌单失败，请检查网络与登录状态");
          } finally {
            P(null);
          }
        }
      },
      oe = () => {
        (a(null), s());
      };
    return t
      ? e.jsxs("div", {
          className:
            "absolute inset-0 z-[200] box-border flex min-h-0 items-end justify-center pt-2 pl-[max(0.5rem,env(safe-area-inset-left,0px))] pr-[max(0.5rem,env(safe-area-inset-right,0px))] pb-[max(0.25rem,env(safe-area-inset-bottom,0px))] sm:items-center sm:justify-center sm:p-4 sm:pl-4 sm:pr-4 sm:pb-4 sm:pt-4",
          style: A,
          children: [
            e.jsx("style", { dangerouslySetInnerHTML: { __html: mV } }),
            e.jsx("button", {
              type: "button",
              className: