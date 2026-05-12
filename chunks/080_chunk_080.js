                                    (C(!0), o());
                                  },
                                  className:
                                    "mt-3 w-full py-2.5 rounded-xl bg-red-900 text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-red-950 transition-colors",
                                  children: "重试",
                                }),
                              ],
                            })
                          : null,
                        V.map((J) => {
                          var ht;
                          const {
                              msg: G,
                              sourceIdx: we,
                              rowKey: Q,
                              isLastThemRow: ve,
                            } = J,
                            Ve =
                              ((ht = G.text) == null ? void 0 : ht.trim()) ??
                              G.text,
                            Ae = G.translation
                              ? String(G.translation).trim()
                              : "",
                            te = G.sender === "them" && !!G.translation,
                            Fe = te && F[Q] ? Ae : Ve,
                            $e = G.sender === "them" && ve && !k,
                            tt = G.sender === "me" && we === K && K >= 0,
                            Xe = e.jsx("div", {
                              role: te ? "button" : void 0,
                              tabIndex: te ? 0 : void 0,
                              onClick: () => {
                                te && D((Pe) => ({ ...Pe, [Q]: !Pe[Q] }));
                              },
                              onKeyDown: (Pe) => {
                                te &&
                                  (Pe.key === "Enter" || Pe.key === " ") &&
                                  (Pe.preventDefault(),
                                  D((ut) => ({ ...ut, [Q]: !ut[Q] })));
                              },
                              className: `box-border inline-block w-max max-w-full min-w-0 px-5 py-3 align-top text-left rounded-2xl text-sm leading-normal shadow-sm transition-all duration-300 font-sans ${G.sender === "me" ? "bg-[#1a1a1a] text-white rounded-br-sm" : `bg-white text-[#1a1a1a] rounded-bl-sm border border-[#1a1a1a]/5${te ? " cursor-pointer active:opacity-90" : ""}`}`,
                              children: e.jsx("div", {
                                className: "whitespace-pre-wrap break-words",
                                children: Fe,
                              }),
                            });
                          return e.jsx(
                            "div",
                            {
                              className: `flex w-full min-w-0 ${G.sender === "me" ? "justify-end" : "justify-start"} animate-fade-in-up`,
                              children:
                                G.sender === "me"
                                  ? $ === we
                                    ? e.jsxs("div", {
                                        className:
                                          "flex w-full max-w-[85%] flex-col gap-2",
                                        children: [
                                          e.jsx("textarea", {
                                            ref: Z,
                                            value: z,
                                            onChange: (Pe) =>
                                              O(Pe.target.value),
                                            onKeyDown: (Pe) => {
                                              (Pe.key === "Escape" &&
                                                (Pe.preventDefault(), le()),
                                                Pe.key === "Enter" &&
                                                  (Pe.ctrlKey || Pe.metaKey) &&
                                                  (Pe.preventDefault(), ne()));
                                            },
                                            rows: 4,
                                            className:
                                              "w-full min-h-[5.5rem] resize-y rounded-2xl border border-[#1a1a1a]/15 bg-white px-4 py-3 text-sm text-[#1a1a1a] shadow-sm outline-none focus:border-[#1a1a1a]/35",
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex justify-end gap-2 font-sans",
                                            children: [
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: le,
                                                className:
                                                  "rounded-full px-4 py-1.5 text-xs text-[#1a1a1a]/60 transition-colors hover:bg-[#1a1a1a]/5",
                                                children: "取消",
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: ne,
                                                className:
                                                  "rounded-full bg-[#1a1a1a] px-4 py-1.5 text-xs text-white transition-colors hover:bg-black/90",
                                                children: "完成",
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : tt
                                      ? e.jsxs("div", {
                                          className:
                                            "inline-flex max-w-[85%] min-w-0 items-center gap-1 group",
                                          children: [
                                            e.jsx("button", {
                                              type: "button",
                                              "aria-label": "编辑",
                                              onClick: () => {
                                                (P(we),
                                                  O(String(G.text ?? "")));
                                              },
                                              className:
                                                "shrink-0 rounded-full p-1.5 text-[#1a1a1a]/45 transition-all hover:bg-[#1a1a1a]/[0.06] hover:text-[#1a1a1a]/80 active:scale-95 max-sm:pointer-events-auto max-sm:opacity-45 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100",
                                              children: e.jsx(_l, {
                                                size: 15,
                                                strokeWidth: 2,
                                              }),
                                            }),
                                            e.jsx("div", {
                                              className: "min-w-0 max-w-full",
                                              children: Xe,
                                            }),
                                          ],
                                        })
                                      : e.jsx("div", {
                                          className:
                                            "w-fit max-w-[85%] min-w-0",
                                          children: Xe,
                                        })
                                  : $e
                                    ? e.jsxs("div", {
                                        className:
                                          "inline-flex max-w-[85%] min-w-0 items-center gap-1 group",
                                        children: [
                                          e.jsx("div", {
                                            className: "min-w-0 max-w-full",
                                            children: Xe,
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            "aria-label": "重新生成",
                                            onClick: (Pe) => {
                                              (Pe.stopPropagation(),
                                                D({}),
                                                i() && C(!0));
                                            },
                                            className:
                                              "shrink-0 rounded-full p-1.5 text-[#1a1a1a]/45 transition-all hover:bg-[#1a1a1a]/[0.06] hover:text-[#1a1a1a]/80 active:scale-95 max-sm:pointer-events-auto max-sm:opacity-45 sm:pointer-events-none sm:opacity-0 sm:group-hover:pointer-events-auto sm:group-hover:opacity-100",
                                            children: e.jsx(Or, {
                                              size: 15,
                                              strokeWidth: 2,
                                            }),
                                          }),
                                        ],
                                      })
                                    : e.jsx("div", {
                                        className: "w-fit max-w-[85%] min-w-0",
                                        children: Xe,
                                      }),
                            },
                            Q,
                          );
                        }),
                        k &&
                          e.jsx("div", {
                            className: "flex justify-start animate-fade-in-up",
                            children: e.jsxs("div", {
                              className:
                                "bg-white text-[#1a1a1a]/40 rounded-2xl rounded-bl-sm border border-[#1a1a1a]/5 shadow-sm px-4 py-3 flex items-center gap-1",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-[#1a1a1a]/40 rounded-full animate-bounce",
                                  style: { animationDelay: "0ms" },
                                }),
                                e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-[#1a1a1a]/40 rounded-full animate-bounce",
                                  style: { animationDelay: "150ms" },
                                }),
                                e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-[#1a1a1a]/40 rounded-full animate-bounce",
                                  style: { animationDelay: "300ms" },
                                }),
                              ],
                            }),
                          }),
                        e.jsx("div", { ref: X }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-none pb-12 pt-6 px-8 relative z-10",
                children: [
                  f === "dialing" &&
                    e.jsxs("div", {
                      className: "flex flex-col items-center gap-6",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-sm text-[#1a1a1a]/50 font-serif italic",
                          children: "点击麦克风回复",
                        }),
                        e.jsxs("div", {
                          className: "grid grid-cols-3 gap-8 items-center",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex flex-col items-center gap-2 opacity-40",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-16 h-16 rounded-full flex items-center justify-center bg-white border border-[#1a1a1a]/5",
                                  children: e.jsx(hl, {
                                    size: 24,
                                    strokeWidth: 1.5,
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.625rem] text-[#1a1a1a]/30 font-sans uppercase tracking-widest",
                                  children: "语音",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col items-center gap-2",
                              children: [
                                e.jsx("button", {
                                  onClick: () => {
                                    (u == null || u(), n());
                                  },
                                  className:
                                    "w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center shadow-xl shadow-red-500/20 hover:bg-[#ff4f44] active:scale-95 transition-all duration-200",
                                  children: e.jsx(Zr, {
                                    size: 32,
                                    className: "rotate-[135deg] text-white",
                                    fill: "currentColor",
                                    strokeWidth: 0,
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.625rem] text-[#1a1a1a]/30 font-sans uppercase tracking-widest",
                                  children: "挂断",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-col items-center gap-2 opacity-40",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-16 h-16 rounded-full flex items-center justify-center bg-white border border-[#1a1a1a]/5 text-[#1a1a1a]/50",
                                  children: e.jsx(e5, { size: 24 }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.625rem] text-[#1a1a1a]/30 font-sans uppercase tracking-widest",
                                  children: "录音",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  f === "connected" &&
                    (M
                      ? e.jsx("div", {
                          ref: je,
                          className: "w-full",
                          children: e.jsx("form", {
                            onSubmit: re,
                            children: e.jsx("input", {
                              type: "text",
                              value: _,
                              onChange: (J) => A(J.target.value),
                              onFocus: W,
                              onClick: W,
                              placeholder: "输入文字说话...",
                              autoFocus: !0,
                              className:
                                "w-full bg-white border border-[#1a1a1a]/10 rounded-full pl-6 pr-4 py-4 text-[#1a1a1a] placeholder-[#1a1a1a]/20 focus:border-[#1a1a1a]/30 outline-none shadow-sm font-sans text-sm transition-all",
                            }),
                          }),
                        })
                      : e.jsxs("div", {
                          className: "grid grid-cols-3 gap-8 items-center",
                          children: [
                            e.jsxs("div", {
                              className: "flex flex-col items-center gap-2",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => E(!0),
                                  className:
                                    "w-16 h-16 rounded-full flex items-center justify-center bg-white text-[#1a1a1a] border border-[#1a1a1a]/5 hover:border-[#1a1a1a]/20 transition-all duration-200",
                                  children: e.jsx(hl, {
                                    size: 24,
                                    strokeWidth: 1.5,
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.625rem] text-[#1a1a1a]/30 font-sans uppercase tracking-widest",
                                  children: "语音",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col items-center gap-2",
                              children: [
                                e.jsx("button", {
                                  onClick: () => {
                                    (u == null || u(), n());
                                  },
                                  className:
                                    "w-20 h-20 bg-[#FF3B30] rounded-full flex items-center justify-center shadow-xl shadow-red-500/20 hover:bg-[#ff4f44] active:scale-95 transition-all duration-200",
                                  children: e.jsx(Zr, {
                                    size: 32,
                                    className: "rotate-[135deg] text-white",
                                    fill: "currentColor",
                                    strokeWidth: 0,
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.625rem] text-[#1a1a1a]/30 font-sans uppercase tracking-widest",
                                  children: "挂断",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col items-center gap-2",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => (S ? se(!0) : Te()),
                                  className: `w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 ${S ? "bg-[#FF3B30] text-white shadow-lg" : "bg-white text-[#1a1a1a] border border-[#1a1a1a]/5 hover:border-[#1a1a1a]/20"}`,
                                  children: e.jsx(e5, { size: 24 }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.625rem] text-[#1a1a1a]/30 font-sans uppercase tracking-widest",
                                  children: S ? `录音 ${ce(T)}` : "录音",
                                }),
                              ],
                            }),
                          ],
                        })),
                ],
              }),
              (L || S) &&
                e.jsx("div", {
                  className:
                    "absolute inset-0 z-[60] pointer-events-none flex items-center justify-center",
                  children: e.jsx("div", {
                    className:
                      "px-5 py-3 rounded-2xl bg-black/70 text-white text-xs font-sans tracking-widest shadow-xl backdrop-blur-md",
                    children: L || `正在录音 ${ce(T)}`,
                  }),
                }),
            ],
          })
  );
}
function uee({ onClose: t }) {
  const [s, n] = l.useState("keypad"),
    a = () => {
      switch (s) {
        case "recents":
          return e.jsx(eee, { onClose: t });
        case "contacts":
          return e.jsx(nee, { onClose: t });
        case "keypad":
          return e.jsx(X4, {});
        case "voicemail":
          return e.jsx(cee, { onClose: t });
        default:
          return e.jsx(X4, {});
      }
    };
  return e.jsxs("div", {
    className:
      "h-full w-full bg-[#f9f9f9] flex flex-col text-[#1a1a1a] font-sans relative",
    children: [
      e.jsx(dee, {}),
      e.jsx("div", {
        className: "flex-1 overflow-hidden relative",
        children: a(),
      }),
      e.jsxs("div", {
        className:
          "h-20 bg-[#f9f9f9] flex items-center justify-around px-8 pb-6 pt-2",
        children: [
          e.jsx(s0, {
            icon: Dr,
            isActive: s === "recents",
            onClick: () => n("recents"),
          }),
          e.jsx(s0, {
            icon: Vi,
            isActive: s === "contacts",
            onClick: () => n("contacts"),
          }),
          e.jsx(s0, {
            icon: Zr,
            isActive: s === "keypad",
            onClick: () => n("keypad"),
          }),
          e.jsx(s0, {
            icon: f3,
            isActive: s === "voicemail",
            onClick: () => n("voicemail"),
          }),
        ],
      }),
    ],
  });
}
function s0({ icon: t, isActive: s, onClick: n }) {
  return e.jsx("button", {
    onClick: n,
    className: `flex flex-col items-center justify-center transition-all duration-300 p-2 rounded-full ${s ? "text-[#1a1a1a]" : "text-[#1a1a1a]/20 hover:text-[#1a1a1a]/40"}`,
    children: e.jsx(t, {
      size: 26,
      strokeWidth: s ? 2.5 : 2,
      className: "transition-all duration-300",
    }),
  });
}
function fee(t) {
  return (Array.isArray(t) ? t : []).map((s) => {
    const n = s == null ? void 0 : s.sender,
      a = String(
        (s == null ? void 0 : s.text) ?? (s == null ? void 0 : s.content) ?? "",
      );
    return { role: n === "me" ? "user" : "assistant", content: a };
  });
}
async function lo({
  apiConfig: t,
  addApiLog: s,
  messages: n,
  role: a,
  scene: r = "portable_general",
  effectiveUser: i = {},
}) {
  const c = [
    {
      role: "system",
      content: `你是 PortableApp（随身）专属 AI 助手。
你只服务于随身模块里的资产与故事生成场景（车辆、里程、乘客、设备、包袋及其故事）。
严格遵循用户消息中的格式要求输出，不添加额外说明，不输出与要求无关内容。
若要求返回 JSON，则仅返回可解析 JSON，不使用 Markdown 代码块。`,
    },
    ...fee(n),
  ];
  return cr(
    t,
    { messages: c, temperature: (t == null ? void 0 : t.temperature) ?? 0.7 },
    {
      addApiLog: s,
      logScene: r,
      logContactName: (a == null ? void 0 : a.name) ?? "",
    },
  );
}
const t5 = (t, s) => `portable_bag_items_${t}_${s}`,
  yy = (t, s) => `portable_bag_items_version_${t}_${s}`,
  vy = (t, s) => `portable_bag_fav_items_${t}_${s}`,
  s5 = (t, s, n, a) => `portable_bag_item_story_${t}_${s}_${n}_v${a}`,
  mee = ({ bag: t, role: s, onBack: n }) => {
    const {
        getRoleBoundUser: a,
        chats: r = [],
        apiConfig: i,
        addApiLog: o,
      } = vn(),
      [c, d] = l.useState([]),
      [u, f] = l.useState([]),
      [p, m] = l.useState(!1),
      [h, g] = l.useState(null),
      [x, y] = l.useState(null),
      [v, b] = l.useState(!1),
      N = l.useRef(null),
      w = l.useRef(!1);
    l.useEffect(() => {
      (async () => {
        if (!(s != null && s.id) || !(t != null && t.id)) {
          (d([]), f([]));
          return;
        }
        const [j, T] = await Promise.all([
          be.get(t5(s.id, t.id), []),
          be.get(vy(s.id, t.id), []),
        ]);
        (d(Array.isArray(j) ? j : []), f(Array.isArray(T) ? T : []));
      })();
    }, [s == null ? void 0 : s.id, t == null ? void 0 : t.id]);
    const _ = (S) => u.some((j) => j.id === S.id || j.name === S.name),
      A = async (S) => {
        if (!(s != null && s.id) || !(t != null && t.id)) return;
        const j = vy(s.id, t.id),
          T = await be.get(j, []),
          I = Array.isArray(T) ? [...T] : [],
          L = I.findIndex((B) => B.id === S.id || B.name === S.name);
        (L >= 0 ? I.splice(L, 1) : I.push({ id: S.id, name: S.name }),
          await be.set(j, I),
          f(I));
      },
      k = async () => {
        if (!s || !t || p) return;
        const S = (a == null ? void 0 : a(s)) ?? {};
        m(!0);
        try {
          const T = [
              {
                sender: "me",
                text: `[系统指令：根据角色人设，生成「这一只包」里会放的东西。角色有多只不同的包（公文包、书包、背包、买菜包等），每只包里的东西不同；当前针对的是：${t.nickname}（${t.brand}，${t.type}）。请仅针对这只包的特点与用途生成其包内物品，不要与角色其他包混淆。

角色人设：
- 名字：${s.name}
- 人设：${s.setting || "无"}

要求：
1. 生成 10～12 项，返回 JSON 数组，不要 Markdown 代码块。
2. 每项格式：{ "name": "物品名称（中文）" }
3. 物品要符合「这只包」的类型与使用场景（如公文包多文件/笔，买菜包多环保袋/零钱等），可含日常、私密、杂物，根据人设真实自然。
4. 直接返回 JSON 数组，不要其他说明。`,
                timestamp: new Date().toISOString(),
              },
            ],
            I = await lo({
              apiConfig: i,
              addApiLog: o,
              messages: T,
              role: s,
              scene: "portable_bag_items",
              effectiveUser: S,
            });
          let L = [];
          try {
            const B = I.match(/\[[\s\S]*\]/),
              F = B ? B[0] : I;
            ((L = JSON.parse(F)),
              Array.isArray(L) || (L = []),
              (L = L.slice(0, 12).map((D, $) => ({
                id: `item_${$}`,
                name:
                  typeof D == "string"
                    ? D
                    : D.name || D.label || `物品 ${$ + 1}`,
              }))));
          } catch {}
          if (L.length > 0) {
            const B = await be.get(vy(s.id, t.id), []),
              F = Array.isArray(B) ? B : [],
              D = [...F, ...L.filter((P) => !F.some((z) => z.name === P.name))],
              $ = Date.now();
            (await be.set(t5(s.id, t.id), D),
              await be.set(yy(s.id, t.id), $),
              d(D));
          }
        } catch {
          alert("生成失败，请重试");
        } finally {
          m(!1);
        }
      },
      C = c.length > 0,
      M = async (S) => {
        var L;
        (g(S), y(null));
        const j = await be.get(yy(s.id, t.id), 0),
          T = s5(s.id, t.id, S.id, j),
          I = await be.get(T, null);
        if (I && typeof I == "string") {
          y(I);
          return;
        }
        b(!0);
        try {
          const B = (a == null ? void 0 : a(s)) ?? {},
            F = (B == null ? void 0 : B.name) || "TA",
            D = r.find((q) => q.contactId === s.id),
            $ =
              ((L = D == null ? void 0 : D.messages) == null
                ? void 0
                : L.slice(-24)) ?? [],
            P = $.length
              ? $.map(
                  (q) =>
                    `${q.sender === "me" ? F : s.name}：${(q.text || "").replace(/\n/g, " ")}`,
                ).join(`
`)
              : "无",
            O = [
              {
                sender: "me",
                text: `[系统指令：根据以下信息，用「第一人称」（角色本人）写一段关于「${S.name}」的完整故事。这是角色包里的物品，要写出质感、私密感和个人感。

角色人设：
- 名字：${s.name}
- 人设：${s.setting || "无"}

绑定用户人设（角色资料里绑定的用户，非全局）：
- 名字：${F}
- 用户人设：${(B == null ? void 0 : B.settings) || "无"}

最近聊天记录（可作语气与关系参考）：
${P}

物品信息：${S.name}（来自包「${t.nickname}」，${t.brand}）

要求：
1. 全文第一人称（我），语气简洁但有细节。
2. 内容包含：放在包的哪里或什么私密位置、为什么在这里、和我的关系或回忆、角色心声。可以适当展开，有画面感。
3. 分成 3～5 段，每段 2～4 句，整体 220～350 字，让内容够填满一页再分栏。
4. 直接输出故事正文，不要标题、不要小标题，不要 Markdown 代码块。段落之间用两个换行符分隔。`,
                timestamp: new Date().toISOString(),
              },
            ],
            K = (
              (await lo({
                apiConfig: i,
                addApiLog: o,
                messages: O,
                role: s,
                scene: "portable_story_bag_item",
                effectiveUser: B,
              })) || ""
            ).trim();
          if (K) {
            y(K);
            const q = await be.get(yy(s.id, t.id), 0);
            await be.set(s5(s.id, t.id, S.id, q), K);
          }
        } catch {
          y("生成失败，请稍后重试。");
        } finally {
          b(!1);
        }
      },
      E = () => {
        (g(null), y(null), b(!1));
      };
    if (h) {
      const S = x ? x.split(/\n\n+/).filter((j) => j.trim()) : [];
      return e.jsxs("div", {
        className:
          "bag-detail-page bag-item-detail-page h-full flex flex-col animate-fade-in",
        children: [
          e.jsxs("header", {
            className: "bag-detail-header bag-item-detail-header",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: E,
                className: "bag-detail-back",
                "aria-label": "返回",
                children: "BACK",
              }),
              e.jsx("div", {}),
            ],
          }),
          e.jsx("div", {
            className: "bag-item-article-wrap",
            children: v
              ? e.jsxs("div", {
                  className: "bag-item-article-loading",
                  children: [
                    e.jsx("div", { className: "bag-item-article-spinner" }),
                    e.jsx("p", { children: "生成中…" }),
                  ],
                })
              : x
                ? e.jsxs("article", {
                    className: "bag-item-article",
                    children: [
                      e.jsx("h1", {
                        className: "bag-item-article-title",
                        children: h.name,
                      }),
                      e.jsx("div", {
                        className: "bag-item-article-rule",
                        "aria-hidden": !0,
                      }),
                      e.jsx("div", {
                        className: "bag-item-article-body",
                        children: S.map((j, T) =>
                          e.jsx(
                            "p",
                            {
                              className: "bag-item-article-p",
                              children: j.trim(),
                            },
                            T,
                          ),
                        ),
                      }),
                    ],
                  })
                : null,
          }),
        ],
      });
    }
    return e.jsxs("div", {
      className: "bag-detail-page h-full flex flex-col animate-fade-in",
      children: [
        e.jsxs("header", {
          className: "bag-detail-header",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: n,
              className: "bag-detail-back",
              "aria-label": "返回",
              children: "BACK",
            }),
            e.jsx("button", {
              type: "button",
              onClick: k,
              disabled: p,
              className: `bag-detail-refresh ${p ? "opacity-50" : ""}`,
              "aria-label": "刷新",
              children: e.jsx(Ai, {
                size: 18,
                className: p ? "animate-spin" : "",
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "bag-detail-main",
          children: [
            e.jsxs("div", {
              className: "bag-detail-hero",
              children: [
                e.jsx("h1", {
                  className: "bag-detail-title",
                  children: t.nickname,
                }),
                e.jsxs("p", {
                  className: "bag-detail-meta",
                  children: [t.brand, " · ", t.type],
                }),
              ],
            }),
            !C &&
              !p &&
              e.jsxs("div", {
                className: "bag-detail-empty",
                children: [
                  e.jsx("p", {
                    className: "bag-detail-empty-label",
                    children: "包里暂无内容",
                  }),
                  e.jsx("p", {
                    className: "bag-detail-empty-hint",
                    children: "点击右上角刷新生成",
                  }),
                ],
              }),
            C &&
              e.jsxs("div", {
                className: "bag-detail-section",
                children: [
                  e.jsx("h2", {
                    className: "bag-detail-section-title",
                    children: "包里有什么",
                  }),
                  e.jsx("div", {
                    className: "bag-detail-grid",
                    children: c.map((S, j) =>
                      e.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: () => {
                            if (w.current) {
                              w.current = !1;
                              return;
                            }
                            M(S);
                          },
                          onKeyDown: (T) => T.key === "Enter" && M(S),
                          onContextMenu: (T) => {
                            (T.preventDefault(), A(S));
                          },
                          onTouchStart: () => {
                            N.current = setTimeout(() => {
                              ((w.current = !0), A(S));
                            }, 500);
                          },
                          onTouchEnd: () => {
                            N.current &&
                              (clearTimeout(N.current), (N.current = null));
                          },
                          className:
                            "bag-detail-card bag-detail-card-clickable relative",
                          style: { animationDelay: `${j * 0.04}s` },
                          children: [
                            e.jsx("span", {
                              className: "bag-detail-card-num",
                              children: String(j + 1).padStart(2, "0"),
                            }),
                            e.jsx("span", {
                              className: "bag-detail-card-name",
                              children: S.name,
                            }),
                            _(S) &&
                              e.jsx(zn, {
                                size: 14,
                                className:
                                  "absolute top-2 right-2 fill-red-500 text-red-500",
                                "aria-hidden": !0,
                              }),
                          ],
                        },
                        `${S.id}-${j}`,
                      ),
                    ),
                  }),
                ],
              }),
            p &&
              !C &&
              e.jsxs("div", {
                className: "bag-detail-loading",
                children: [
                  e.jsx("div", { className: "bag-detail-spinner" }),
                  e.jsx("p", { children: "生成中…" }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  wy = (t) => `portable_bags_${t}`,
  jy = (t) => `portable_fav_bags_${t}`,
  pee = ({ role: t, onBack: s, onBagSelect: n }) => {
    const {
        getRoleBoundUser: a,
        chats: r = [],
        apiConfig: i,
        addApiLog: o,
      } = vn(),
      [c, d] = l.useState([]),
      [u, f] = l.useState([]),
      [p, m] = l.useState(!1);
    l.useEffect(() => {
      (async () => {
        if (!(t != null && t.id)) {
          (d([]), f([]));
          return;
        }
        const [y, v] = await Promise.all([
          be.get(wy(t.id), []),
          be.get(jy(t.id), []),
        ]);
        (d(Array.isArray(y) ? y : []), f(Array.isArray(v) ? v : []));
      })();
    }, [t == null ? void 0 : t.id]);
    const h = async (x, y) => {
        if ((y && y.stopPropagation(), !(t != null && t.id))) return;
        const v = jy(t.id),
          b = await be.get(v, []),
          N = Array.isArray(b) ? [...b] : [],
          w = N.indexOf(x.id);
        (w >= 0 ? N.splice(w, 1) : N.push(x.id), await be.set(v, N), f(N));
      },
      g = async () => {
        var w;
        if (!t || p) return;
        const x = (a == null ? void 0 : a(t)) ?? {},
          y = (x == null ? void 0 : x.name) || "TA",
          v = r.find((_) => _.contactId === t.id),
          b =
            ((w = v == null ? void 0 : v.messages) == null
              ? void 0
              : w.slice(-24)) ?? [],
          N = b.length
            ? b.map(
                (_) =>
                  `${_.sender === "me" ? y : t.name}：${(_.text || "").replace(/\n/g, " ")}`,
              ).join(`
`)
            : "无";
        m(!0);
        try {
          const A = [
              {
                sender: "me",
                text: `[系统指令：请严格根据「角色人设 + 绑定用户人设（非全局用户）+ 最近聊天记录」生成该角色会拥有的包包列表。包包必须符合角色人设，可以是公文包、书包、背包、买菜包、托特包、手袋等，也可能包含「${y}的包」（角色帮${y}背的）。每只包要有昵称和牌子。

角色人设：
- 名字：${t.name}
- 昵称：${t.nickname || t.name}
- 人设：${t.setting || "无"}
- 性别：${t.gender || "未知"}

绑定用户人设（角色资料里绑定的用户，非全局）：
- 名字：${y}
- 用户人设：${(x == null ? void 0 : x.settings) || "无"}
- 备注：${t.remark || "无"}

最近聊天记录：
${N}

要求：
1. 生成 2～5 只包，返回 JSON 数组，不要 Markdown 代码块。
2. 每项格式：{ "id": "唯一ID（如 b1, b2）", "nickname": "包昵称（角色或${y}取的，中文）", "brand": "牌子（中文，如爱马仕、无印良品、某小众牌）", "type": "类型（公文包/书包/背包/买菜包/托特包/手袋/${y}的包 等）" }
3. 包的类型和牌子要符合角色身份与品味；可以有「${y}的包」表示角色常帮${y}背的那只。
4. 直接返回 JSON 数组，不要其他说明。`,
                timestamp: new Date().toISOString(),
              },
            ],
            k = await lo({
              apiConfig: i,
              addApiLog: o,
              messages: A,
              role: t,
              scene: "portable_bag_list",
              effectiveUser: x,
            });
          let C = [];
          try {
            const M = k.match(/\[[\s\S]*\]/),
              E = M ? M[0] : k;
            ((C = JSON.parse(E)),
              Array.isArray(C) || (C = []),
              (C = C.slice(0, 5).map((S, j) => ({
                id: S.id || `b${j + 1}`,
                nickname: S.nickname || S.name || `包 ${j + 1}`,
                brand: S.brand || "—",
                type: S.type || "手袋",
              }))));
          } catch {}
          if (C.length > 0) {
            const [M, E] = await Promise.all([
                be.get(wy(t.id), []),
                be.get(jy(t.id), []),
              ]),
              S = Array.isArray(M) ? M : [],
              j = Array.isArray(E) ? E : [],
              I = [
                ...S.filter((L) => L && j.includes(L.id)),
                ...C.filter((L) => !j.includes(L.id)),
              ];
            (await be.set(wy(t.id), I), d(I));
          }
        } catch {
          alert("生成失败，请重试");
        } finally {
          m(!1);
        }
      };
    return e.jsxs("div", {
      className: "bag-list-page h-full flex flex-col animate-fade-in bg-white",
      children: [
        e.jsxs("div", {
          className: "portable-list-header-alt",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between mb-1",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: s,
                  className:
                    "text-[9px] font-medium tracking-[0.2em] text-gray-500 hover:text-gray-700 transition-colors",
                  children: "← BACK",
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: g,
                  disabled: p,
                  className: `text-gray-400 hover:text-gray-600 transition-colors ${p ? "opacity-50 cursor-not-allowed" : ""}`,
                  "aria-label": "刷新",
                  children: e.jsx(Ai, {
                    size: 16,
                    className: p ? "animate-spin" : "",
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "mt-6",
              children: [
                e.jsx("h1", {
                  className:
                    "font-serif-display font-light text-3xl tracking-tight leading-none text-gray-900 mb-1",
                  children: "BAGS",
                }),
                e.jsx("p", {
                  className:
                    "text-[10px] text-gray-400 tracking-[0.15em] uppercase font-medium mt-2",
                  children: "高定手袋",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "bag-list-scroll flex-1 overflow-y-auto no-scrollbar pb-12",
          children:
            c.length === 0
              ? e.jsxs("div", {
                  className:
                    "h-full flex items-center justify-center flex-col opacity-30",
                  children: [
                    e.jsx("div", {
                      className: "text-3xl font-serif-display mb-2",
                      children: "空",
                    }),
                    e.jsx("div", {
                      className: "text-[10px] tracking-widest",
                      children: "暂无包包",
                    }),
                    e.jsx("div", {
                      className: "text-[9px] text-gray-400 mt-4",
                      children: "点击刷新生成包包",
                    }),
                  ],
                })
              : c.map((x, y) =>
                  e.jsxs(
                    "div",
                    {
                      role: "button",
                      tabIndex: 0,
                      onClick: () => n(x),
                      onKeyDown: (v) => v.key === "Enter" && n(x),
                      className:
                        "bag-list-card group cursor-pointer animate-fade-in relative",
                      style: { animationDelay: `${y * 0.08}s` },
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: (v) => h(x, v),
                          className:
                            "absolute top-3 right-3 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10",
                          "aria-label": u.includes(x.id) ? "取消收藏" : "收藏",
                          children: e.jsx(zn, {
                            size: 18,
                            className: u.includes(x.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-400",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "bag-list-card-body",
                          children: [
                            e.jsx("span", {
                              className: "bag-list-card-brand",
                              children: x.brand,
                            }),
                            e.jsx("h3", {
                              className: "bag-list-card-title",
                              children: x.nickname,
                            }),
                            e.jsx("span", {
                              className: "bag-list-card-type",
                              children: x.type,
                            }),
                            e.jsx("div", {
                              className: "bag-list-card-rule",
                              "aria-hidden": !0,
                            }),
                            e.jsxs("div", {
                              className: "bag-list-card-cta",
                              children: [
                                e.jsx("span", { children: "查看内容" }),
                                e.jsx("span", {
                                  className: "bag-list-card-arrow",
                                  children: "→",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    x.id,
                  ),
                ),
        }),
      ],
    });
  },
  n0 = (t, s) => `portable_fav_vehicles_${t}_${s}`,
  Ny = (t) => `portable_fav_smarthomes_${t}`,
  n5 = ({
    category: t,
    role: s,
    onCategorySelect: n,
    onVehicleSelect: a,
    onSmartHomeSelect: r,
    onBack: i,
  }) => {
    const o = vn(),
      c = o == null ? void 0 : o.apiConfig,
      d = o == null ? void 0 : o.addApiLog,
      u = o == null ? void 0 : o.getRoleBoundUser,
      f = (o == null ? void 0 : o.chats) ?? [],
      [p, m] = l.useState([]),
      [h, g] = l.useState([]),
      [x, y] = l.useState([]),
      [v, b] = l.useState([]),
      [N, w] = l.useState(!1),
      _ = s ? (s.nickname || s.name).toUpperCase().replace(/\s+/g, " ") : "";
    l.useEffect(() => {
      (async () => {
        if (!(s != null && s.id)) {
          (m([]), g([]), y([]), b([]));
          return;
        }
        if (t === "motor") {
          const [D, $] = await Promise.all([
            be.get(`portable_vehicles_${s.id}_motor`, []),
            be.get(n0(s.id, "motor"), []),
          ]);
          (m(Array.isArray(D) && D.length > 0 ? D : []),
            y(Array.isArray($) ? $ : []),
            g([]),
            b([]));
        } else if (t === "nonMotor") {
          const [D, $] = await Promise.all([
            be.get(`portable_vehicles_${s.id}_nonMotor`, []),
            be.get(n0(s.id, "nonMotor"), []),
          ]);
          (m(Array.isArray(D) && D.length > 0 ? D : []),
            y(Array.isArray($) ? $ : []),
            g([]),
            b([]));
        } else if (t === "smartHome") {
          const [D, $] = await Promise.all([
            be.get(`portable_smarthomes_${s.id}`, []),
            be.get(Ny(s.id), []),
          ]);
          (g(Array.isArray(D) && D.length > 0 ? D : []),
            b(Array.isArray($) ? $ : []),
            m([]),
            y([]));
        } else (m([]), g([]), y([]), b([]));
      })();
    }, [s == null ? void 0 : s.id, t]);
    const A = async (F, D) => {
        if (
          (D && D.stopPropagation(),
          !(s != null && s.id) || (t !== "motor" && t !== "nonMotor"))
        )
          return;
        const $ = n0(s.id, t),
          P = await be.get($, []),
          z = Array.isArray(P) ? [...P] : [],
          O = z.indexOf(F.id);
        (O >= 0 ? z.splice(O, 1) : z.push(F.id), await be.set($, z), y(z));
      },
      k = async (F, D) => {
        if (
          (D && D.stopPropagation(), !(s != null && s.id) || t !== "smartHome")
        )
          return;
        const $ = Ny(s.id),
          P = await be.get($, []),
          z = Array.isArray(P) ? [...P] : [],
          O = z.indexOf(F.id);
        (O >= 0 ? z.splice(O, 1) : z.push(F.id), await be.set($, z), b(z));
      },
      C = async () => {
        var F;
        if (!(!s || N) && !(t !== "motor" && t !== "nonMotor")) {
          w(!0);
          try {
            const D = t === "motor",
              $ = D ? "机动车（汽车）" : "非机动车（摩托车、电动车、自行车等）",
              P = D ? "油车用油量，电车用电量" : "非机动车都是电量",
              z = (u == null ? void 0 : u(s)) ?? {},
              O = (z == null ? void 0 : z.name) || "TA",
              Z = f.find((X) => X.contactId === s.id),
              K =
                ((F = Z == null ? void 0 : Z.messages) == null
                  ? void 0
                  : F.slice(-24)) ?? [],
              q = K.length
                ? K.map(
                    (X) =>
                      `${X.sender === "me" ? O : s.name}：${(X.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              ne = [
                {
                  sender: "me",
                  text: `[系统指令：请严格根据「角色人设 + 绑定用户人设（非全局用户）+ 最近聊天记录」生成该角色拥有的${$}。必须是该角色符合自己人设会有的车，不要随机生成。

角色人设（必读，决定车的气质与选择）：
- 名字：${s.name}
- 昵称：${s.nickname || s.name}
- 人设：${s.setting || "无"}
- 性别：${s.gender || "未知"}

绑定用户人设（非全局用户，角色资料里绑定的用户，影响角色生活场景）：
- 名字：${O}
- 用户人设：${(z == null ? void 0 : z.settings) || "无"}
- 备注：${s.remark || "无"}

最近聊天记录（可推断角色当下状态与喜好）：
${q}

要求：
1. 生成1-3辆${$}（根据角色人设和经济状况决定数量），每辆车都必须是该角色会真正拥有、符合其性格与境遇的车，不要随机凑数。
2. 每辆车需要包含以下字段（返回JSON数组，不要包含Markdown代码块标记）：
   {
     "id": "唯一ID（如${D ? "m1, m2" : "n1, n2"}）",
     "type": "${t}",
     "name": "车昵称（必须全部中文，角色自己取的，符合人设，例如：小闪电、黑武士、我的小破车）",
     "model": "车子型号（必须全部用中文表述，${D ? "如：特斯拉 Model 3、宝马 iX3、比亚迪汉" : "如：捷安特 TCR、九号 Max G30、维斯帕 946"}，禁止纯英文）",
     "plate": "车牌号（格式如京A·12345。不要随机。必须是角色定制选号或花钱买下的他人车牌，对角色有特殊意义）",
     "plateStory": "车牌背后的故事（80～150字，第一人称「我」，写清这块牌的特殊意义和来历）",
     "fuel": 电量百分比（0-100的整数，${P}）,
     "mileage": "公里数（格式：12,345 或 5,200，用逗号分隔千位，必须是字符串）",
     "location": "当前位置（城市+具体地点，必须中文，如：北京市朝阳区、上海市外滩）",
     "passengers": []
   }

3. 车昵称、车型号、当前位置全部使用中文；车名和车型号禁止纯英文，须用中文表述（如特斯拉、宝马、比亚迪汉、捷安特等）。
4. 车昵称和车型号要符合角色人设、经济状况与品味，不能随机。
5. 车牌号与 plateStory 要求同上；plateStory 第一人称「我」。
6. 电量、公里数合理；公里数字符串格式，千位逗号分隔。
7. 这是${$}，不要生成${D ? "非机动车" : "机动车"}。

直接返回JSON数组，不要其他文字说明。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              le = await lo({
                apiConfig: c,
                addApiLog: d,
                messages: ne,
                role: s,
                scene: "portable_vehicle",
                effectiveUser: z,
              });
            let ie = [];
            try {
              const X = le.match(/\[[\s\S]*\]/);
              (X ? (ie = JSON.parse(X[0])) : (ie = JSON.parse(le)),
                Array.isArray(ie) || (ie = [ie]),
                (ie = ie.map((Y, U) => {
                  const ce = t;
                  return {
                    id: Y.id || `${ce}_${U + 1}`,
                    type: ce,
                    name: Y.name || "未命名车辆",
                    model: Y.model || "未知型号",
                    plate: Y.plate || "未上牌",
                    plateStory: Y.plateStory || Y.plate_story || "",
                    fuel:
                      typeof Y.fuel == "number"
                        ? Math.max(0, Math.min(100, Y.fuel))
                        : Math.max(0, Math.min(100, parseInt(Y.fuel) || 0)),
                    mileage:
                      typeof Y.mileage == "string"
                        ? Y.mileage
                        : String(Y.mileage || "0").replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            ",",
                          ),
                    location: Y.location || "未知位置",
                    passengers: Array.isArray(Y.passengers) ? Y.passengers : [],
                    dashCamImg:
                      "https://images.unsplash.com/photo-1503376763036-066120622c74?w=600&q=80",
                  };
                })));
              const je = `portable_vehicles_${s.id}_${t}`,
                [xe, ye] = await Promise.all([
                  be.get(je, []),
                  be.get(n0(s.id, t), []),
                ]),
                R = Array.isArray(xe) ? xe : [],
                oe = Array.isArray(ye) ? ye : [],
                H = [
                  ...R.filter((Y) => Y && oe.includes(Y.id)),
                  ...ie.filter((Y) => !oe.includes(Y.id)),
                ];
              (await be.set(je, H),
                (t === "motor" || t === "nonMotor") && m(H));
            } catch {
              alert("生成失败，请检查API配置或重试");
            }
          } catch (D) {
            alert("生成失败：" + (D.message || "未知错误"));
          } finally {
            w(!1);
          }
        }
      };
    if (!t)
      return e.jsxs("div", {
        className: "portable-dashboard",
        children: [
          e.jsxs("header", {
            className: "portable-dashboard-header",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: i,
                className: "portable-dashboard-back",
                "aria-label": "返回",
                children: e.jsx(un, { size: 24, strokeWidth: 2 }),
              }),
              e.jsxs("div", {
                className: "portable-dashboard-identity",
                children: [
                  e.jsx("span", {
                    className: "portable-dashboard-name",
                    children: _,
                  }),
                  s.avatar
                    ? e.jsx("img", {
                        src: s.avatar,
                        alt: "",
                        className: "portable-dashboard-avatar img-bw",
                      })
                    : e.jsx("div", {
                        className: "portable-dashboard-avatar-ph",
                        "aria-hidden": !0,
                      }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "portable-dashboard-grid",
            children: [
              e.jsxs("div", {
                role: "button",
                tabIndex: 0,
                onClick: () => n("motor"),
                onKeyDown: (F) => F.key === "Enter" && n("motor"),
                className:
                  "portable-dashboard-tile portable-dashboard-tile--motor",
                "aria-label": "机动车",
                children: [
                  e.jsx("span", {
                    className: "portable-dashboard-tile-num",
                    children: "01",
                  }),
                  e.jsx("div", {
                    className: "portable-dashboard-tile-dot",
                    "aria-hidden": !0,
                  }),
                  e.jsxs("div", {
                    className: "portable-dashboard-tile-body",
                    children: [
                      e.jsx("h2", {
                        className: "portable-dashboard-tile-title",
                        children: "机动车",
                      }),
                      e.jsx("p", {
                        className: "portable-dashboard-tile-sub",
                        children: "收藏",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                role: "button",
                tabIndex: 0,
                onClick: () => n("smartHome"),
                onKeyDown: (F) => F.key === "Enter" && n("smartHome"),
                className: "portable-dashboard-tile",
                "aria-label": "智能家居",
                children: [
                  e.jsx("span", {
                    className: "portable-dashboard-tile-num",
                    children: "02 HOME",
                  }),
                  e.jsx("div", {
                    className: "portable-dashboard-tile-dot",
                    "aria-hidden": !0,
                  }),
                  e.jsxs("div", {
                    className:
                      "portable-dashboard-tile-body portable-dashboard-tile-body--end",
                    children: [
                      e.jsx("h3", {
                        className: "portable-dashboard-tile-title",
                        children: "智能",
                      }),
                      e.jsx("p", {
                        className: "portable-dashboard-tile-sub",
                        children: "智能家居",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                role: "button",
                tabIndex: 0,
                onClick: () => n("bag"),
                onKeyDown: (F) => F.key === "Enter" && n("bag"),
                className: "portable-dashboard-tile",
                "aria-label": "高定手袋",
                children: [
                  e.jsx("span", {
                    className: "portable-dashboard-tile-num",
                    children: "03 BAGS",
                  }),
                  e.jsx("div", {
                    className: "portable-dashboard-tile-dot",
                    "aria-hidden": !0,
                  }),
                  e.jsxs("div", {
                    className: "portable-dashboard-tile-body",
                    children: [
                      e.jsx("h3", {
                        className: "portable-dashboard-tile-title",
                        children: "奢品",
                      }),
                      e.jsx("p", {
                        className: "portable-dashboard-tile-sub",
                        children: "高定手袋",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                role: "button",
                tabIndex: 0,
                onClick: () => n("nonMotor"),
                onKeyDown: (F) => F.key === "Enter" && n("nonMotor"),
                className:
                  "portable-dashboard-tile portable-dashboard-tile--full",
                "aria-label": "非机动车",
                children: [
                  e.jsxs("div", {
                    className: "portable-dashboard-tile-body",
                    children: [
                      e.jsx("h2", {
                        className: "portable-dashboard-tile-title",
                        children: "两轮",
                      }),
                      e.jsx("p", {
                        className: "portable-dashboard-tile-sub",
                        children: "摩托车与自行车",
                      }),
                    ],
                  }),
                  e.jsx("span", {
                    className: "portable-dashboard-tile-cta",
                    children: "GO",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    const M = t === "motor",
      E = t === "nonMotor",
      S = t === "smartHome";
    let j = [],
      T = "",
      I = "";
    M || E
      ? ((j = p), (T = M ? "MOTOR LIST" : "2-WHEELS"), (I = "Select Vehicle"))
      : S && ((j = h), (T = "PROPERTIES"), (I = "Select Residence"));
    const L = async () => {
        if (!(!s || N)) {
          w(!0);
          try {
            const F = (u == null ? void 0 : u(s)) ?? {},
              D = (F == null ? void 0 : F.name) || "TA",
              P = [
                {
                  sender: "me",
                  text: `[系统指令：请根据以下角色人设，生成该角色拥有的房产/智能家居信息。

角色信息：
- 名字：${s.name}
- 昵称：${s.nickname || s.name}
- 人设：${s.setting || "无"}
- 性别：${s.gender || "未知"}

绑定用户人设（角色资料里绑定的用户，角色眼中的用户）：
- 名字：${D}
- 用户人设：${(F == null ? void 0 : F.settings) || "无"}
- 备注：${s.remark || "无"}

要求：
1. 生成1-3个房产/智能家居（根据角色人设和生活轨迹决定）。可以是住宅、也可以是角色的店铺、公司等。
2. 每条记录需要包含以下字段（返回JSON数组，不要包含Markdown代码块标记）：
   {
     "id": "唯一ID（如h1, h2）",
     "propertyType": "房产类型（必须为以下之一：'家'、'店铺'、'公司'。住宅填'家'，角色开的店填'店铺'，角色公司/工作室填'公司'）",
     "name": "房子名字（角色自己取的，要符合人设与类型。家：'云顶别墅'、'小窝一号'；店铺：'XX咖啡馆'、'深夜食堂'；公司：'XX工作室'、'某某科技'等）",
     "sub": "小区/地址（家：小区名+楼栋；店铺/公司：街道或商圈地址）",
     "area": "面积（例如：'597m²'、'120m²'、'45m²'，可选）",
     "devices": {
       "tv": "Netflix",
       "fridge": "-18°C",
       "curtain": "80%",
       "vacuum": "Charging",
       "tub": "Heating",
       "light": "Scene: Reading",
       "mirror": "23°C Sunny",
       "toilet": "Ready",
       "trash": "Empty",
       "scale": "46.5kg"
     }
   }

3. **房子名字要求**：
   - 要符合角色人设和性格
   - 要有网感、幽默感
   - 可以是中英文混合
   - 例如：'Tomson Riviera'、'The Bulgari'、'云顶别墅'、'小窝一号'、'梦想小屋'等

4. **小区/地址要求**：
   - 要符合角色人设和经济状况
   - 可以是真实或虚构的小区名
   - 例如：'汤臣一品 A栋'、'宝格丽公寓'、'XX小区 3号楼'等

5. devices字段请保持上述示例的格式和结构，不要修改

6. 房产数量要根据角色人设决定（可能一个，可能多个）

直接返回JSON数组，不要其他文字说明。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              z = await lo({
                apiConfig: c,
                addApiLog: d,
                messages: P,
                role: s,
                scene: "portable_home",
                effectiveUser: F,
              });
            let O = [];
            try {
              const Z = z.match(/\[[\s\S]*\]/);
              (Z ? (O = JSON.parse(Z[0])) : (O = JSON.parse(z)),
                Array.isArray(O) || (O = [O]),
                (O = O.map((je, xe) => {
                  const ye = {
                    tv: "Netflix",
                    fridge: "-18°C",
                    curtain: "80%",
                    vacuum: "Charging",
                    tub: "Heating",
                    light: "Scene: Reading",
                    mirror: "23°C Sunny",
                    toilet: "Ready",
                    trash: "Empty",
                    scale: "46.5kg",
                  };
                  return {
                    id: je.id || `home_${Date.now()}_${xe}`,
                    propertyType:
                      je.propertyType === "店铺" || je.propertyType === "公司"
                        ? je.propertyType
                        : "家",
                    name: je.name || "未命名房产",
                    sub: je.sub || "未知地址",
                    area: je.area || "100m²",
                    img: je.img || "",
                    devices: je.devices || ye,
                  };
                })));
              const K = `portable_smarthomes_${s.id}`,
                [q, V] = await Promise.all([
                  be.get(K, []),
                  be.get(Ny(s.id), []),
                ]),
                ne = Array.isArray(q) ? q : [],
                le = Array.isArray(V) ? V : [],
                X = [
                  ...ne.filter((je) => je && le.includes(je.id)),
                  ...O.filter((je) => !le.includes(je.id)),
                ];
              (await be.set(K, X), g(X));
            } catch {
              alert("生成失败，请检查API配置或重试");
            }
          } catch (F) {
            alert("生成失败：" + (F.message || "未知错误"));
          } finally {
            w(!1);
          }
        }
      },
      B = () => {
        M || E ? C() : S && L();
      };
    return e.jsxs("div", {
      className: `h-full flex flex-col animate-fade-in ${S || M || E ? "bg-white" : "bg-[#F0F0F0]"}`,
      children: [
        S
          ? e.jsxs("div", {
              className: "portable-list-header-alt",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-1",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: i,
                      className:
                        "text-[9px] font-medium tracking-[0.2em] text-gray-500 hover:text-gray-700 transition-colors",
                      children: "← BACK",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: B,
                      disabled: N,
                      className: `text-gray-400 hover:text-gray-600 transition-colors ${N ? "opacity-50 cursor-not-allowed" : ""}`,
                      "aria-label": "刷新",
                      children: e.jsx(Ai, {
                        size: 16,
                        className: N ? "animate-spin" : "",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-6",
                  children: [
                    e.jsx("h1", {
                      className:
                        "font-serif-display font-light text-3xl tracking-tight leading-none text-gray-900 mb-1",
                      children: T,
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] text-gray-400 tracking-[0.15em] uppercase font-medium mt-2",
                      children: I,
                    }),
                  ],
                }),
              ],
            })
          : M
            ? e.jsxs("div", {
                className: "portable-list-header-alt",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: i,
                        className:
                          "text-[9px] font-medium tracking-[0.2em] text-gray-500 hover:text-gray-700 transition-colors",
                        children: "← BACK",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: B,
                        disabled: N,
                        className: `text-gray-400 hover:text-gray-600 transition-colors ${N ? "opacity-50 cursor-not-allowed" : ""}`,
                        "aria-label": "刷新",
                        children: e.jsx(Ai, {
                          size: 16,
                          className: N ? "animate-spin" : "",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mt-6",
                    children: [
                      e.jsx("h1", {
                        className:
                          "font-serif-display font-light text-3xl tracking-tight leading-none text-gray-900 mb-1",
                        children: T,
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-gray-400 tracking-[0.15em] uppercase font-medium mt-2",
                        children: I,
                      }),
                    ],
                  }),
                ],
              })
            : E
              ? e.jsxs("div", {
                  className: "portable-list-header-alt",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-1",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: i,
                          className:
                            "text-[9px] font-medium tracking-[0.2em] text-gray-500 hover:text-gray-700 transition-colors",
                          children: "← BACK",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: B,
                          disabled: N,
                          className: `text-gray-400 hover:text-gray-600 transition-colors ${N ? "opacity-50 cursor-not-allowed" : ""}`,
                          "aria-label": "刷新",
                          children: e.jsx(Ai, {
                            size: 16,
                            className: N ? "animate-spin" : "",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-6",
                      children: [
                        e.jsx("h1", {
                          className:
                            "font-serif-display font-light text-3xl tracking-tight leading-none text-gray-900 mb-1",
                          children: T,
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-gray-400 tracking-[0.15em] uppercase font-medium mt-2",
                          children: I,
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsxs("div", {
                  className: "portable-list-header",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: i,
                      className:
                        "text-[10px] font-bold tracking-[0.2em] flex items-center gap-1 hover:text-gray-500 transition",
                      children: "BACK",
                    }),
                    e.jsxs("div", {
                      className: "text-right",
                      children: [
                        e.jsx("span", {
                          className:
                            "block font-serif-display font-black text-xl tracking-tighter leading-none",
                          children: T,
                        }),
                        e.jsx("span", {
                          className:
                            "text-[9px] text-gray-400 tracking-[0.2em] uppercase",
                          children: I,
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: B,
                      disabled: N,
                      className: `hover:rotate-180 transition duration-700 p-2 ${N ? "opacity-50 cursor-not-allowed" : ""}`,
                      "aria-label": "刷新",
                      children: e.jsx(Ai, {
                        size: 20,
                        className: N ? "animate-spin" : "",
                      }),
                    }),
                  ],
                }),
        e.jsx("div", {
          className: `flex-1 overflow-y-auto no-scrollbar ${S || M || E ? "px-8 pb-12" : "px-6 pb-6"}`,
          children:
            !j || j.length === 0
              ? e.jsxs("div", {
                  className:
                    "h-full flex items-center justify-center flex-col opacity-30",
                  children: [
                    e.jsx("div", {
                      className: "text-3xl font-serif-display mb-2",
                      children: "空",
                    }),
                    e.jsx("div", {
                      className: "text-[10px] tracking-widest",
                      children: "暂无资产",
                    }),
                    e.jsx("div", {
                      className: "text-[9px] text-gray-400 mt-4",
                      children: S
                        ? "点击刷新按钮生成房产"
                        : "点击刷新按钮生成车辆",
                    }),
                  ],
                })
              : S
                ? j.map((F, D) =>
                    e.jsxs(
                      "div",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: () => r(F),
                        onKeyDown: ($) => $.key === "Enter" && r(F),
                        className:
                          "portable-home-card group cursor-pointer animate-fade-in relative",
                        style: { animationDelay: `${D * 0.1}s` },
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: ($) => k(F, $),
                            className:
                              "absolute top-3 right-3 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10",
                            "aria-label": v.includes(F.id)
                              ? "取消收藏"
                              : "收藏",
                            children: e.jsx(zn, {
                              size: 18,
                              className: v.includes(F.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "home-card-number",
                            children: ["0", D + 1],
                          }),
                          e.jsxs("div", {
                            className: "home-card-body",
                            children: [
                              e.jsx("h3", {
                                className: "home-card-title",
                                children: F.name,
                              }),
                              e.jsxs("div", {
                                className: "home-card-meta",
                                children: [
                                  e.jsx("span", {
                                    className: "home-card-address",
                                    children: F.sub || "—",
                                  }),
                                  e.jsx("span", {
                                    className: "home-card-area",
                                    children: F.area || "—",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "home-card-cta",
                                children: [
                                  e.jsx("span", { children: "查看详情" }),
                                  e.jsx("span", { children: "→" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      F.id,
                    ),
                  )
                : E
                  ? j.map((F, D) =>
                      e.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: () => a(F, E),
                          onKeyDown: ($) => $.key === "Enter" && a(F, E),
                          className:
                            "portable-nonmotor-card group cursor-pointer animate-fade-in relative",
                          style: { animationDelay: `${D * 0.1}s` },
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: ($) => A(F, $),
                              className:
                                "absolute top-3 right-3 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10",
                              "aria-label": x.includes(F.id)
                                ? "取消收藏"
                                : "收藏",
                              children: e.jsx(zn, {
                                size: 18,
                                className: x.includes(F.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-400",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "nonmotor-card-body",
                              children: [
                                e.jsx("h3", {
                                  className: "nonmotor-card-title",
                                  children: F.name,
                                }),
                                e.jsxs("div", {
                                  className: "nonmotor-card-info",
                                  children: [
                                    e.jsx("span", {
                                      className: "nonmotor-card-model",
                                      children: F.model,
                                    }),
                                    e.jsx("span", {
                                      className: "nonmotor-card-plate",
                                      children: F.plate,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "nonmotor-card-cta",
                                  children: [
                                    e.jsx("span", { children: "查看详情" }),
                                    e.jsx("span", { children: "→" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        F.id,
                      ),
                    )
                  : j.map((F, D) =>
                      e.jsxs(
                        "div",
                        {
                          role: "button",
                          tabIndex: 0,
                          onClick: () => a(F, E),
                          onKeyDown: ($) => $.key === "Enter" && a(F, E),
                          className:
                            "portable-vehicle-card group cursor-pointer animate-fade-in relative",
                          style: { animationDelay: `${D * 0.1}s` },
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: ($) => A(F, $),
                              className:
                                "absolute top-3 right-3 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10",
                              "aria-label": x.includes(F.id)
                                ? "取消收藏"
                                : "收藏",
                              children: e.jsx(zn, {
                                size: 18,
                                className: x.includes(F.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-400",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "vehicle-card-body",
                              children: [
                                e.jsxs("div", {
                                  className: "vehicle-card-header",
                                  children: [
                                    e.jsx("h3", {
                                      className: "vehicle-card-title",
                                      children: F.name,
                                    }),
                                    e.jsx("div", {
                                      className: "vehicle-card-plate",
                                      children: F.plate,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "vehicle-card-info",
                                  children: [
                                    e.jsx("span", {
                                      className: "vehicle-card-model",
                                      children: F.model,
                                    }),
                                    e.jsxs("div", {
                                      className: "vehicle-card-cta",
                                      children: [
                                        e.jsx("span", { children: "查看详情" }),
                                        e.jsx("span", { children: "→" }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        F.id,
                      ),
                    ),
        }),
      ],
    });
  },
  xee = {
    tv: "Living Room TV",
    fridge: "冰箱",
    curtain: "自动窗帘",
    vacuum: "Robot Vacuum",
    tub: "智能浴缸",
    light: "感应灯",
    mirror: "全身镜",
    toilet: "智能马桶",
    trash: "垃圾桶",
    scale: "体脂秤",
  },
  hee = ({ deviceKey: t, home: s, role: n, onBack: a, onRecordClick: r }) => {
    const i = vn(),
      o = i == null ? void 0 : i.apiConfig,
      c = i == null ? void 0 : i.addApiLog,
      d = (i == null ? void 0 : i.chats) ?? [],
      u = i == null ? void 0 : i.getRoleBoundUser,
      f = (u == null ? void 0 : u(n)) ?? {},
      [p, m] = l.useState([]),
      [h, g] = l.useState(!1),
      x = xee[t] || t;
    l.useEffect(() => {
      (async () => {
        if (!(n != null && n.id) || !(s != null && s.id) || !t) return;
        const M = `portable_device_records_${n.id}_${s.id}_${t}`,
          E = await be.get(M, []);
        Array.isArray(E) && E.length > 0 && m(E);
      })();
    }, [n == null ? void 0 : n.id, s == null ? void 0 : s.id, t]);
    const y = async () => {
        var C;
        if (!(!n || !s || !t || h)) {
          g(!0);
          try {
            const M = new Date(),
              E = [];
            for (let Z = 0; Z < 30; Z++) {
              const K = new Date(M);
              (K.setDate(K.getDate() - (29 - Z)), E.push(K));
            }
            const S = (f == null ? void 0 : f.name) || "TA",
              j =
                s.propertyType === "店铺" || s.propertyType === "公司"
                  ? s.propertyType
                  : "家",
              T = d.find((Z) => Z.contactId === n.id),
              I =
                ((C = T == null ? void 0 : T.messages) == null
                  ? void 0
                  : C.slice(-30)) ?? [],
              L = I.length
                ? I.map(
                    (Z) =>
                      `${Z.sender === "me" ? S : n.name}：${(Z.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              B = [s.name, s.sub, s.area].filter(Boolean).join("，");
            let F = "";
            switch (t) {
              case "tv":
                F =
                  "电视观看内容(电影/私密录像/新闻)、观看者(独处/共度)、氛围。";
                break;
              case "fridge":
                F = "电冰箱取用了什么食物/饮品(酒/冰块)、深夜觅食、做饭场景。";
                break;
              case "curtain":
                F =
                  "自动窗帘开关原因(为了看风景/为了私密亲热/为了睡觉)、光线描述。";
                break;
              case "vacuum":
                F =
                  "扫地机器清扫了什么区域(卧室/战场打扫)、是否被宠物/人干扰。";
                break;
              case "light":
                F = "感应灯触发时间(深夜起夜/回家)、灯光颜色氛围(暧昧/明亮)。";
                break;
              case "trash":
                F = "智能垃圾桶。丢弃了什么(外卖/私密物品/纸团)、打包时间。";
                break;
              case "tub":
                F =
                  "智能浴缸：泡澡时长、温度、入浴剂(玫瑰/牛奶)、独浴还是共浴、放松心情。";
                break;
              case "mirror":
                F =
                  "智能全身镜：照镜子时的穿搭(穿搭/睡衣/裸体)、身材审视、自恋想法、合照。";
                break;
              case "toilet":
                F = "智能马桶：使用时长(思考人生/刷手机)、健康监测功能触发。";
                break;
              case "scale":
                F =
                  "智能体脂秤：肌肉量变化、对身材的焦虑或满意。必须包含角色的体脂率、肌肉量等数据。";
                break;
              default:
                F = "设备使用情况。";
            }
            const D = E.map((Z) => Z.toISOString().split("T")[0]).join("、"),
              P = [
                {
                  sender: "me",
                  text: `[系统指令：请根据以下角色人设、当前所在房产、智能家居信息生成该设备过去30天内的使用记录。最近聊天记录仅作参考，角色有自己的生活，不要全部依赖聊天内容。

角色信息：
- 名字：${n.name}
- 昵称：${n.nickname || n.name}
- 人设：${n.setting || "无"}
- 性别：${n.gender || "未知"}

用户信息（角色资料中绑定的用户人设）：
- 名字：${S}
- 备注：${n.remark || "无"}
- 用户人设：${(f == null ? void 0 : f.settings) || "无"}

当前所在房产（所有记录必须发生在本房产内）：
- 房产类型：${j}
- 房产名：${s.name}
- 地址：${s.sub || "—"}
${s.area ? `- 面积：${s.area}` : ""}

${
  j === "家"
    ? ""
    : `**【重要】本房产是「${j}」而非住宅。生成内容必须符合工作/营业场所：使用人可包含店员、员工、顾客、邻居、访客等，场景为办公/营业/日常经营，勿出现私密、暧昧、居家专属描写。**

`
}

最近聊天记录（仅作语气与关系参考，勿全部依赖；角色有独立生活轨迹）：
${L}

设备信息：
- 设备名称：${x}
- 设备类型：${t}

日期范围（过去30天内，任选日期，格式 YYYY-MM-DD）：
${D}

要求：
1. 生成过去30天内在「当前房产」（${s.name}）内的使用记录，共8-12条；日期分散在30天内。
2. **禁止**生成仅有${S}单人使用设备的记录（每条记录的使用人须包含角色本人，或为角色+他人/访客/员工/顾客等，不能只有用户一人）。
3. **时间不冲突**：角色可能有多处房产（家/公司/店铺），同一日期同一时段只能在一个地点。请合理分配时间段（如工作日白天在店铺/公司则家中记录多为早晚或休息日），避免与常理矛盾。
4. 每条记录需要包含以下字段（返回JSON数组，不要包含Markdown代码块标记）：
   {
     "id": "唯一ID（如r1, r2）",
     "date": "日期（YYYY-MM-DD，从上述30天范围任选）",
     "time": "时间（HH:mm）",
     "location": "地点（家：客厅/卧室/浴室等；店铺公司：前台/办公室/休息区等）",
     "users": "使用人（角色必在其中；可含${S}、访客、店员、员工、顾客、邻居等，多人用顿号或&连接）",
     "content": "使用记录内容（杂志感文案，50-150字）",
     "isFavorited": false
   }

5. **严格要求**：
   - 优先角色在场的使用场景；可包含角色与${S}共同、或角色与店员/员工/顾客/邻居等。
   - 禁止仅有${S}单人使用的记录。
   - ${j !== "家" ? `本房产为${j}，内容须符合场所性质，勿私密暧昧。` : "多场景可含日常与私密，须符合人设与关系。"}
   - ${t === "scale" ? `体脂秤须包含角色体脂率、肌肉量等数据，不要生成${S}的数据。` : ""}
   - 真实日期与时间，从上述范围选择。
   - ${F}

6. **杂志感文案**：content 字段 50-150 字，有故事感和画面感，符合角色性格与生活轨迹。直接返回 JSON 数组，不要其他文字说明。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              z = await lo({
                apiConfig: o,
                addApiLog: c,
                messages: P,
                role: n,
                scene: "portable_device_records",
                effectiveUser: f,
              });
            let O = [];
            try {
              const Z = z.match(/\[[\s\S]*\]/);
              (Z ? (O = JSON.parse(Z[0])) : (O = JSON.parse(z)),
                Array.isArray(O) || (O = [O]));
              const K = `portable_device_records_${n.id}_${s.id}_${t}`,
                q = await be.get(K, []),
                V = new Map();
              (q.forEach((je) => {
                if (je.isFavorited) {
                  const xe = `${je.date}_${je.time}_${(je.content || "").slice(0, 50)}`;
                  V.set(xe, je);
                }
              }),
                (O = O.map((je, xe) => {
                  const ye = `${je.date || E[0].toISOString().split("T")[0]}_${je.time || "12:00"}_${(je.content || "使用记录").slice(0, 50)}`,
                    R = V.get(ye);
                  return {
                    id:
                      (R == null ? void 0 : R.id) ||
                      je.id ||
                      `record_${Date.now()}_${xe}`,
                    date: je.date || E[0].toISOString().split("T")[0],
                    time: je.time || "12:00",
                    location: je.location || "未知",
                    users:
                      je.users != null
                        ? Array.isArray(je.users)
                          ? je.users.join("、")
                          : String(je.users)
                        : "—",
                    content: je.content || "使用记录",
                    isFavorited: !!R,
                  };
                })));
              const ne = q.filter((je) => je.isFavorited),
                le = new Set(
                  ne.map(
                    (je) =>
                      `${je.date}_${je.time}_${(je.content || "").slice(0, 50)}`,
                  ),
                ),
                ie = O.filter((je) => {
                  const xe = `${je.date}_${je.time}_${(je.content || "").slice(0, 50)}`;
                  return !le.has(xe) && !je.isFavorited;
                }),
                X = [...ne, ...ie];
              (X.sort((je, xe) => {
                const ye = new Date(je.date + "T" + je.time);
                return new Date(xe.date + "T" + xe.time) - ye;
              }),
                await be.set(K, X),
                m(X));
            } catch {
              alert("生成失败，请检查API配置或重试");
            }
          } catch (M) {
            alert("生成失败：" + (M.message || "未知错误"));
          } finally {
            g(!1);
          }
        }
      },
      v = async (C) => {
        const M = p.map((S) =>
            S.id === C ? { ...S, isFavorited: !S.isFavorited } : S,
          ),
          E = `portable_device_records_${n.id}_${s.id}_${t}`;
        (await be.set(E, M), m(M));
      },
      b = (C) => {
        const M = new Date(C),
          E = new Date(),
          S = new Date(E);
        if ((S.setDate(S.getDate() - 1), M.toDateString() === E.toDateString()))
          return "今天";
        if (M.toDateString() === S.toDateString()) return "昨天";
        {
          const j = M.toLocaleDateString("zh-CN", { weekday: "short" }),
            T = M.toLocaleDateString("zh-CN", {
              month: "long",
              day: "numeric",
            });
          return `${j} ${T}`;
        }
      },
      N = (C) =>
        new Date(C).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        }),
      w = p.reduce((C, M) => {
        const E = M.date;
        return (C[E] || (C[E] = []), C[E].push(M), C);
      }, {}),
      _ = Object.keys(w).sort((C, M) => new Date(M) - new Date(C)),
      k =
        {
          tv: "cinema",
          fridge: "pantry",
          curtain: "zen",
          vacuum: "vacuum",
          light: "vogue",
          trash: "polaroid",
          tub: "vogue",
          mirror: "vogue",
          toilet: "zen",
          scale: "lab",
        }[t] || "vogue";
    return e.jsxs("div", {
      className: `device-detail-modal device-theme-${k}`,
      children: [
        e.jsxs("div", {
          className: "device-header",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: a,
              className:
                "text-[10px] font-bold tracking-[0.2em] text-gray-600 hover:text-gray-800 transition",
              children: "BACK",
            }),
            e.jsx("div", { className: "flex-1" }),
            e.jsx("button", {
              type: "button",
              onClick: y,
              disabled: h,
              className: `hover:rotate-180 transition duration-700 p-2 text-gray-500 ${h ? "opacity-50 cursor-not-allowed" : ""}`,
              "aria-label": "刷新",
              children: e.jsx(Ai, {
                size: 20,
                className: h ? "animate-spin" : "",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "device-scroll no-scrollbar",
          children:
            h && p.length === 0
              ? e.jsxs("div", {
                  className: "device-loading-box",
                  children: [
                    e.jsx("div", { className: "device-load-spinner" }),
                    e.jsx("div", {
                      className: "device-load-text",
                      children: "GENERATING",
                    }),
                  ],
                })
              : p.length === 0
                ? e.jsx("div", {
                    className: "device-container",
                    children: e.jsxs("div", {
                      className:
                        "h-full flex items-center justify-center flex-col text-gray-400",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-3xl font-serif-display mb-2 text-gray-500",
                          children: "EMPTY",
                        }),
                        e.jsx("div", {
                          className: "text-[10px] tracking-widest",
                          children: "NO RECORDS",
                        }),
                        e.jsx("div", {
                          className: "text-[9px] mt-4",
                          children: "点击刷新生成记录",
                        }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className: `device-container device-layout-${k}`,
                    children: _.map((C, M) => {
                      const E = w[C];
                      return e.jsxs(
                        "div",
                        {
                          className: `device-card-${k}`,
                          style: { animationDelay: `${M * 0.1}s` },
                          children: [
                            k === "cinema" &&
                              e.jsxs("div", {
                                className: "device-card-cinema",
                                children: [
                                  e.jsx("div", {
                                    className: "device-cin-date",
                                    children: N(C).split(" ")[0],
                                  }),
                                  E.map((S) => {
                                    const j = S.users || "—";
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "device-cin-frame cursor-pointer",
                                        onClick: () => r && r(S),
                                        children: [
                                          e.jsx("div", {
                                            className: "device-cin-viewfinder",
                                          }),
                                          e.jsxs("div", {
                                            className: "device-cin-content",
                                            children: [
                                              e.jsx("div", {
                                                className: "device-cin-header",
                                                children: e.jsxs("div", {
                                                  className:
                                                    "device-cin-time-location",
                                                  children: [
                                                    S.time,
                                                    " · ",
                                                    S.location,
                                                  ],
                                                }),
                                              }),
                                              e.jsxs("div", {
                                                className: "device-cin-user",
                                                children: ["使用人 · ", j],
                                              }),
                                              e.jsx("div", {
                                                className: "device-cin-text",
                                                children: S.content,
                                              }),
                                              e.jsxs("div", {
                                                className: "device-cin-footer",
                                                children: [
                                                  e.jsxs("span", {
                                                    className:
                                                      "device-cin-users",
                                                    children: ["使用人 ", j],
                                                  }),
                                                  e.jsx("button", {
                                                    type: "button",
                                                    onClick: (T) => {
                                                      (T.stopPropagation(),
                                                        v(S.id));
                                                    },
                                                    className: `device-cin-fav ${S.isFavorited ? "text-rose-400" : "text-gray-600"}`,
                                                    children: e.jsx(zn, {
                                                      size: 14,
                                                      className: S.isFavorited
                                                        ? "fill-current"
                                                        : "",
                                                      strokeWidth: 1.5,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      S.id,
                                    );
                                  }),
                                ],
                              }),
                            k === "blueprint" &&
                              e.jsx(e.Fragment, {
                                children: E.map((S) => {
                                  const j = S.users || "—";
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "device-card-blueprint cursor-pointer",
                                      onClick: () => r && r(S),
                                      children: [
                                        e.jsxs("div", {
                                          className: "device-bp-meta",
                                          children: [
                                            e.jsxs("div", {
                                              className: "device-bp-date",
                                              children: [
                                                b(S.date),
                                                " ",
                                                S.time,
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className: "device-bp-date",
                                              children: S.location,
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: "device-bp-text",
                                          children: S.content,
                                        }),
                                        e.jsxs("div", {
                                          className: "device-bp-users",
                                          children: [
                                            "使用人 · ",
                                            j,
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: (T) => {
                                                (T.stopPropagation(), v(S.id));
                                              },
                                              className: `ml-2 ${S.isFavorited ? "text-rose-500" : "text-gray-400"}`,
                                              children: e.jsx(zn, {
                                                size: 12,
                                                className: S.isFavorited
                                                  ? "fill-current"
                                                  : "",
                                                strokeWidth: 1.5,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    S.id,
                                  );
                                }),
                              }),
                            k === "polaroid" &&
                              e.jsxs("div", {
                                className: "device-card-polaroid",
                                children: [
                                  e.jsx("div", {
                                    className: "device-polaroid-date",
                                    children: N(C).split(" ")[0],
                                  }),
                                  E.map((S) => {
                                    const j = S.users || "—";
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "device-polaroid-note cursor-pointer",
                                        onClick: () => r && r(S),
                                        children: [
                                          e.jsx("div", {
                                            className: "device-polaroid-text",
                                            children: S.content,
                                          }),
                                          e.jsxs("div", {
                                            className: "device-polaroid-meta",
                                            children: [
                                              e.jsxs("span", {
                                                children: [
                                                  S.time,
                                                  " · ",
                                                  S.location,
                                                  e.jsxs("span", {
                                                    className:
                                                      "device-polaroid-users",
                                                    children: [" · 使用人 ", j],
                                                  }),
                                                ],
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: (T) => {
                                                  (T.stopPropagation(),
                                                    v(S.id));
                                                },
                                                className: `device-polaroid-fav ${S.isFavorited ? "text-rose-400" : "text-stone-400"}`,
                                                children: e.jsx(zn, {
                                                  size: 14,
                                                  className: S.isFavorited
                                                    ? "fill-current"
                                                    : "",
                                                  strokeWidth: 1.5,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      S.id,
                                    );
                                  }),
                                ],
                              }),
                            k === "vacuum" &&
                              e.jsxs("div", {
                                className: "device-card-vacuum",
                                children: [
                                  e.jsx("div", {
                                    className: "device-vacuum-date",
                                    children: N(C).split(" ")[0],
                                  }),
                                  E.map((S) => {
                                    const j = S.users || "—";
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "device-vacuum-note cursor-pointer",
                                        onClick: () => r && r(S),
                                        children: [
                                          e.jsx("div", {
                                            className: "device-vacuum-text",
                                            children: S.content,
                                          }),
                                          e.jsxs("div", {
                                            className: "device-vacuum-meta",
                                            children: [
                                              e.jsxs("span", {
                                                children: [
                                                  S.time,
                                                  " · ",
                                                  S.location,
                                                  e.jsxs("span", {
                                                    className:
                                                      "device-vacuum-users",
                                                    children: [" · 使用人 ", j],
                                                  }),
                                                ],
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: (T) => {
                                                  (T.stopPropagation(),
                                                    v(S.id));
                                                },
                                                className: `device-vacuum-fav ${S.isFavorited ? "text-rose-400" : "text-gray-500"}`,
                                                children: e.jsx(zn, {
                                                  size: 14,
                                                  className: S.isFavorited
                                                    ? "fill-current"
                                                    : "",
                                                  strokeWidth: 1.5,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      S.id,
                                    );
                                  }),
                                ],
                              }),
                            k === "zen" &&
                              e.jsx(e.Fragment, {
                                children: E.map((S) => {
                                  const j = S.users || "—";
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "device-card-zen cursor-pointer",
                                      onClick: () => r && r(S),
                                      children: [
                                        e.jsxs("div", {
                                          className: "device-zen-time",
                                          children: [S.time, " · ", S.location],
                                        }),
                                        e.jsxs("div", {
                                          className: "device-zen-user",
                                          children: ["使用人 · ", j],
                                        }),
                                        e.jsx("div", {
                                          className: "device-zen-text",
                                          children: S.content,
                                        }),
                                        e.jsx("div", {
                                          className: "device-zen-meta",
                                          children: e.jsx("button", {
                                            type: "button",
                                            onClick: (T) => {
                                              (T.stopPropagation(), v(S.id));
                                            },
                                            className: `${S.isFavorited ? "text-rose-400" : "text-gray-300"}`,
                                            children: e.jsx(zn, {
                                              size: 12,
                                              className: S.isFavorited
                                                ? "fill-current"
                                                : "",
                                              strokeWidth: 1.5,
                                            }),
                                          }),
                                        }),
                                      ],
                                    },
                                    S.id,
                                  );
                                }),
                              }),
                            k === "vogue" &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("div", {
                                    className: "device-vogue-date",
                                    children: N(C).split(" ")[0],
                                  }),
                                  e.jsx("div", {
                                    className: "device-vogue-line",
                                  }),
                                  e.jsx("div", {
                                    className: "device-vogue-content",
                                    children: E.map((S) => {
                                      const j = S.users || "—";
                                      return e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "mb-12 last:mb-0 cursor-pointer",
                                          onClick: () => r && r(S),
                                          children: [
                                            e.jsx("div", {
                                              className: "device-vogue-text",
                                              children: S.content,
                                            }),
                                            e.jsxs("div", {
                                              className: "device-vogue-meta",
                                              children: [
                                                e.jsx("span", {
                                                  children: S.time,
                                                }),
                                                e.jsx("span", {
                                                  children: "·",
                                                }),
                                                e.jsx("span", {
                                                  children: S.location,
                                                }),
                                                e.jsx("span", {
                                                  children: "·",
                                                }),
                                                e.jsxs("span", {
                                                  className:
                                                    "device-vogue-users",
                                                  children: ["使用人 ", j],
                                                }),
                                                e.jsx("button", {
                                                  type: "button",
                                                  onClick: (T) => {
                                                    (T.stopPropagation(),
                                                      v(S.id));
                                                  },
                                                  className: `ml-auto p-1 ${S.isFavorited ? "text-rose-500" : "text-gray-300"}`,
                                                  children: e.jsx(zn, {
                                                    size: 14,
                                                    className: S.isFavorited
                                                      ? "fill-current"
                                                      : "",
                                                    strokeWidth: 1.5,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        S.id,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            k === "lab" &&
                              e.jsxs("div", {
                                className: "device-card-lab",
                                children: [
                                  e.jsx("div", {
                                    className: "device-lab-date",
                                    children: N(C).split(" ")[0],
                                  }),
                                  E.map((S) => {
                                    const j = S.users || "—";
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "device-lab-record cursor-pointer",
                                        onClick: () => r && r(S),
                                        children: [
                                          e.jsx("div", {
                                            className: "device-lab-header",
                                            children: e.jsxs("div", {
                                              children: [
                                                e.jsx("div", {
                                                  className: "device-lab-time",
                                                  children: S.time,
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "device-lab-location",
                                                  children: S.location,
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsx("div", {
                                            className: "device-lab-text",
                                            children: S.content,
                                          }),
                                          e.jsxs("div", {
                                            className: "device-lab-footer",
                                            children: [
                                              e.jsxs("span", {
                                                className: "device-lab-users",
                                                children: ["使用人 ", j],
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: (T) => {
                                                  (T.stopPropagation(),
                                                    v(S.id));
                                                },
                                                className: `device-lab-fav ${S.isFavorited ? "text-rose-500" : "text-gray-400"}`,
                                                children: e.jsx(zn, {
                                                  size: 14,
                                                  className: S.isFavorited
                                                    ? "fill-current"
                                                    : "",
                                                  strokeWidth: 1.5,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      S.id,
                                    );
                                  }),
                                ],
                              }),
                            k === "pantry" &&
                              e.jsxs("div", {
                                className: "device-card-pantry",
                                children: [
                                  e.jsxs("div", {
                                    className: "device-pantry-date-section",
                                    children: [
                                      e.jsx("div", {
                                        className: "device-pantry-date",
                                        children: N(C).split(" ")[0],
                                      }),
                                      e.jsx("div", {
                                        className: "device-pantry-date-sub",
                                        children: N(C)
                                          .split(" ")
                                          .slice(1)
                                          .join(" "),
                                      }),
                                    ],
                                  }),
                                  E.map((S) => {
                                    const j = S.users || "—";
                                    return e.jsx(
                                      "div",
                                      {
                                        className:
                                          "device-pantry-record cursor-pointer",
                                        onClick: () => r && r(S),
                                        children: e.jsxs("div", {
                                          className: "device-pantry-photo",
                                          children: [
                                            e.jsxs("div", {
                                              className: "device-pantry-header",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "device-pantry-header-left",
                                                  children: [
                                                    e.jsx("span", {
                                                      children: S.time,
                                                    }),
                                                    e.jsx("span", {
                                                      children: S.location,
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "device-pantry-header-right",
                                                  children: "REC",
                                                }),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className: "device-pantry-text",
                                              children: S.content,
                                            }),
                                            e.jsxs("div", {
                                              className: "device-pantry-meta",
                                              children: [
                                                e.jsxs("span", {
                                                  className:
                                                    "device-pantry-users",
                                                  children: ["使用人 ", j],
                                                }),
                                                e.jsx("button", {
                                                  type: "button",
                                                  onClick: (T) => {
                                                    (T.stopPropagation(),
                                                      v(S.id));
                                                  },
                                                  className: `device-pantry-fav ${S.isFavorited ? "text-rose-500" : "text-gray-400"}`,
                                                  children: e.jsx(zn, {
                                                    size: 12,
                                                    className: S.isFavorited
                                                      ? "fill-current"
                                                      : "",
                                                    strokeWidth: 1.5,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      S.id,
                                    );
                                  }),
                                ],
                              }),
                          ],
                        },
                        C,
                      );
                    }),
                  }),
        }),
      ],
    });
  },
  gee = {
    tv: "Living Room TV",
    fridge: "冰箱",
    curtain: "自动窗帘",
    vacuum: "Robot Vacuum",
    tub: "智能浴缸",
    light: "感应灯",
    mirror: "全身镜",
    toilet: "智能马桶",
    trash: "垃圾桶",
    scale: "体脂秤",
  },
  bee = ({ record: t, deviceKey: s, home: n, role: a, onBack: r }) => {
    const i = vn(),
      o = i == null ? void 0 : i.apiConfig,
      c = i == null ? void 0 : i.addApiLog,
      d = (i == null ? void 0 : i.chats) ?? [],
      u = i == null ? void 0 : i.getRoleBoundUser,
      f = (u == null ? void 0 : u(a)) ?? {},
      [p, m] = l.useState(""),
      [h, g] = l.useState(""),
      [x, y] = l.useState(!1),
      [v, b] = l.useState([]),
      [N, w] = l.useState(!1),
      A =
        {
          tv: "cinema",
          fridge: "pantry",
          curtain: "zen",
          vacuum: "vacuum",
          light: "vogue",
          trash: "polaroid",
          tub: "vogue",
          mirror: "vogue",
          toilet: "zen",
          scale: "lab",
        }[s] || "vogue",
      k = gee[s] || s,
      C = (E) =>
        new Date(E).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        }),
      M = async () => {
        var E, S;
        if (!(!a || !n || !s || !t || x)) {
          y(!0);
          try {
            const j = (f == null ? void 0 : f.name) || "TA",
              T = d.find((ne) => ne.contactId === a.id),
              I =
                ((E = T == null ? void 0 : T.messages) == null
                  ? void 0
                  : E.slice(-30)) ?? [],
              L = I.length
                ? I.map(
                    (ne) =>
                      `${ne.sender === "me" ? j : a.name}：${(ne.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              B = [n.name, n.sub, n.area].filter(Boolean).join("，"),
              D = [
                {
                  sender: "me",
                  text: `[系统指令：请根据以下角色人设、智能家居信息、当前所在房子、最近聊天记录和设备使用记录，生成一个500-800字的详细故事。

角色信息：
- 名字：${a.name}
- 昵称：${a.nickname || a.name}
- 人设：${a.setting || "无"}
- 性别：${a.gender || "未知"}

用户信息（角色资料中绑定的用户人设，角色眼中的用户）：
- 名字：${j}
- 备注：${a.remark || "无"}
- 用户人设：${(f == null ? void 0 : f.settings) || "无"}

当前所在房子（明确这是在哪个房子里）：
- ${B || `${n.name}，${n.sub}`}

房产信息：
- 房产名：${n.name}
- 地址：${n.sub}
${n.area ? `- 面积：${n.area}` : ""}

最近聊天记录（供参考语气与关系）：
${L}

设备信息：
- 设备名称：${k}
- 设备类型：${s}

使用记录信息：
- 日期：${t.date}
- 时间：${t.time}
- 地点：${t.location}