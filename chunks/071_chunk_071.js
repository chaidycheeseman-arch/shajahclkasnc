                                                                    {
                                                                      type: "button",
                                                                      disabled:
                                                                        j,
                                                                      onClick:
                                                                        async () => {
                                                                          try {
                                                                            const X =
                                                                              R4(
                                                                                K ==
                                                                                  null
                                                                                  ? void 0
                                                                                  : K.blocks,
                                                                                {
                                                                                  title: `${$.call_name || z} · 扮演卡`,
                                                                                  fallbackText:
                                                                                    K ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : K.long_profile,
                                                                                },
                                                                              );
                                                                            (await navigator.clipboard.writeText(
                                                                              X ||
                                                                                K.long_profile,
                                                                            ),
                                                                              h(
                                                                                "已复制 Markdown 扮演卡",
                                                                              ),
                                                                              setTimeout(
                                                                                () =>
                                                                                  h(
                                                                                    "",
                                                                                  ),
                                                                                2e3,
                                                                              ));
                                                                          } catch {
                                                                            (h(
                                                                              "复制失败",
                                                                            ),
                                                                              setTimeout(
                                                                                () =>
                                                                                  h(
                                                                                    "",
                                                                                  ),
                                                                                2e3,
                                                                              ));
                                                                          }
                                                                        },
                                                                      className:
                                                                        "border border-[var(--e-mint)]/35 px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--e-mint)] hover:bg-[var(--e-mint)]/10 disabled:opacity-40",
                                                                      children:
                                                                        "COPY",
                                                                    },
                                                                  ),
                                                                ],
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "p-2.5 sm:p-3",
                                                                children: [
                                                                  e.jsx(dl, {
                                                                    text: K.long_profile,
                                                                    className: `font-mono text-[10px] leading-relaxed sm:text-[11px] ${x ? "text-slate-700" : "text-[var(--e-mint)]/90"}`,
                                                                  }),
                                                                  Array.isArray(
                                                                    q,
                                                                  ) && q.length
                                                                    ? e.jsx(
                                                                        "ul",
                                                                        {
                                                                          className:
                                                                            "mt-3 space-y-1 border-t border-[var(--e-line)] pt-3 font-mono text-[9px] text-[var(--e-muted)]",
                                                                          children:
                                                                            q.map(
                                                                              (
                                                                                X,
                                                                                je,
                                                                              ) =>
                                                                                e.jsxs(
                                                                                  "li",
                                                                                  {
                                                                                    className:
                                                                                      "flex gap-2",
                                                                                    children:
                                                                                      [
                                                                                        e.jsx(
                                                                                          "span",
                                                                                          {
                                                                                            className:
                                                                                              "text-[var(--e-cyan)]",
                                                                                            children:
                                                                                              "::",
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "span",
                                                                                          {
                                                                                            children:
                                                                                              X,
                                                                                          },
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                  je,
                                                                                ),
                                                                            ),
                                                                        },
                                                                      )
                                                                    : null,
                                                                ],
                                                              }),
                                                            ],
                                                          })
                                                        : null,
                                                    ],
                                                  })
                                                : null,
                                            ],
                                          }),
                                        ],
                                      },
                                      `${z}-${P}`,
                                    );
                                  },
                                ),
                              }),
                            ],
                          })
                        : null,
                      Array.isArray(
                        (D = g.settlementLore) == null
                          ? void 0
                          : D.unresolved_hooks,
                      ) && g.settlementLore.unresolved_hooks.length
                        ? e.jsxs("section", {
                            className:
                              "mb-8 overflow-hidden border border-dashed border-[var(--e-line-accent)]",
                            children: [
                              e.jsxs("button", {
                                type: "button",
                                onClick: () => _(($) => !$),
                                className:
                                  "flex w-full items-center justify-between gap-2 border-b border-[var(--e-line)] bg-[var(--e-black)] px-3 py-2.5 text-left transition hover:bg-[var(--e-overlay-50)]",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(Gl, {
                                        size: 12,
                                        className: "text-[var(--e-muted)]",
                                        strokeWidth: 1.5,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-mono text-[8px] uppercase tracking-[0.24em] text-[var(--e-muted)]",
                                        children: "OPEN_CHANNELS · HOOKS",
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "hidden font-mono text-[8px] text-[var(--e-dim)] sm:inline",
                                        children: ["· ", w ? "收起" : "展开"],
                                      }),
                                    ],
                                  }),
                                  e.jsx(aa, {
                                    size: 15,
                                    strokeWidth: 1.5,
                                    className: `shrink-0 text-[var(--e-muted)] transition-transform ${w ? "rotate-180" : ""}`,
                                  }),
                                ],
                              }),
                              w
                                ? e.jsx("ul", {
                                    className:
                                      "divide-y divide-[var(--e-line)] bg-[var(--e-raised)]/50",
                                    children:
                                      g.settlementLore.unresolved_hooks.map(
                                        ($, P) =>
                                          e.jsxs(
                                            "li",
                                            {
                                              className:
                                                "flex gap-2.5 px-3 py-3 font-mono text-[10px] leading-relaxed text-[var(--e-soft)] sm:px-4 sm:text-[11px]",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "shrink-0 pt-0.5 font-mono text-[8px] text-[#FF3B30]",
                                                  children: String(
                                                    P + 1,
                                                  ).padStart(2, "0"),
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "min-w-0 text-[var(--e-body)]",
                                                  children: $,
                                                }),
                                              ],
                                            },
                                            P,
                                          ),
                                      ),
                                  })
                                : null,
                            ],
                          })
                        : null,
                    ],
                  }),
                })
              : e.jsx("ul", {
                  className:
                    "min-h-0 flex-1 space-y-0 overflow-y-auto overscroll-y-contain px-3 py-3 scrollbar-hide sm:px-4",
                  children: t.length
                    ? t.map(($) =>
                        e.jsx(
                          "li",
                          {
                            className:
                              "border-b border-[var(--e-line)] last:border-b-0",
                            children: e.jsxs("button", {
                              type: "button",
                              onClick: () => u($.id),
                              className:
                                "group flex w-full items-center gap-3 px-2 py-4 text-left transition hover:bg-[var(--e-hover)] sm:gap-4 sm:px-3 sm:py-5",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-0.5 shrink-0 self-stretch bg-[#FF3B30] opacity-0 transition group-hover:opacity-100",
                                }),
                                e.jsx("span", {
                                  className:
                                    "flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-black)] text-xl sm:h-12 sm:w-12 sm:text-2xl",
                                  children: $.coverEmoji,
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "truncate font-mono text-sm font-bold uppercase tracking-tight text-[var(--e-contrast)] sm:text-base",
                                      children: $.title,
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "mt-1 font-mono text-[9px] uppercase tracking-wider text-[var(--e-dim)]",
                                      children: new Date(
                                        $.createdAt,
                                      ).toLocaleString(),
                                    }),
                                  ],
                                }),
                                e.jsx(wl, {
                                  className:
                                    "h-4 w-4 shrink-0 text-[var(--e-dim)] opacity-40 transition group-hover:translate-x-0.5 group-hover:opacity-100",
                                  strokeWidth: 1.5,
                                }),
                              ],
                            }),
                          },
                          $.id,
                        ),
                      )
                    : e.jsx("li", {
                        className:
                          "border border-dashed border-[var(--e-line-strong)] bg-[var(--e-raised)] px-5 py-16 text-center",
                        children: e.jsxs("p", {
                          className:
                            "font-mono text-xs leading-relaxed text-[var(--e-dim)]",
                          children: [
                            "暂无远征归档。",
                            e.jsx("br", {}),
                            e.jsx("span", {
                              className: "text-[var(--e-muted)]",
                              children:
                                "在枢纽完成远征结算后，可将真相包写入此处。",
                            }),
                          ],
                        }),
                      }),
                }),
          ],
        });
  },
  MZ = ({ onSend: t }) => {
    const [s, n] = l.useState(""),
      [a, r] = l.useState(!1),
      [i, o] = l.useState(null),
      c = async () => {
        if (!s) return;
        r(!0);
        const d = await t(s);
        (d && d.success && (o(d.data), n("")), r(!1));
      };
    return e.jsx("div", {
      className:
        "absolute inset-0 z-10 flex min-h-0 flex-col items-center justify-center overflow-y-auto overscroll-y-contain px-8 py-6 pt-20 scrollbar-hide",
      children: i
        ? e.jsxs("div", {
            className:
              "w-full max-w-md shrink-0 animate-in fade-in zoom-in duration-500",
            children: [
              e.jsx("div", {
                className:
                  "bg-[var(--e-surface)] border border-[var(--e-line-strong)] p-6 relative group overflow-hidden",
                children: e.jsxs("div", {
                  className:
                    "relative z-10 flex flex-col items-center text-center",
                  children: [
                    e.jsx("div", {
                      className: "text-6xl mb-4 animate-bounce",
                      children: i.icon,
                    }),
                    e.jsxs("div", {
                      className:
                        "text-[10px] px-2 py-0.5 border mb-2 uppercase tracking-wider border-[var(--e-line-accent)] text-[var(--e-muted)]",
                      children: [i.rarity, " 级实体"],
                    }),
                    e.jsx("h3", {
                      className:
                        "text-xl font-bold text-[var(--e-primary)] mb-2",
                      children: i.name,
                    }),
                    e.jsxs("p", {
                      className:
                        "text-xs text-[var(--e-soft)] font-mono leading-relaxed mb-4 line-clamp-4",
                      children: ['"', i.description, '"'],
                    }),
                    e.jsx("div", {
                      className:
                        "w-full border-t border-[var(--e-line)] pt-4 mt-2",
                      children: e.jsxs("p", {
                        className: "text-[10px] text-[var(--e-dim)] italic",
                        children: ["系统回响: ", i.reply],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("button", {
                onClick: () => o(null),
                className:
                  "w-full mt-4 py-3 border border-[var(--e-line-strong)] text-[var(--e-muted)] hover:text-[var(--e-primary)] hover:border-[var(--e-primary)] transition-all font-mono text-xs uppercase",
                children: "发起新传输",
              }),
            ],
          })
        : e.jsxs("div", {
            className: "w-full max-w-md shrink-0",
            children: [
              e.jsxs("div", {
                className:
                  "mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--e-dim)]",
                children: [
                  e.jsx("span", { children: "输入流" }),
                  e.jsx("span", { children: "就绪" }),
                ],
              }),
              e.jsxs("div", {
                className: "relative group",
                children: [
                  e.jsx("textarea", {
                    value: s,
                    onChange: (d) => n(d.target.value),
                    placeholder: "在此输入数据...",
                    className:
                      "w-full h-48 bg-[var(--e-black)] border border-[var(--e-line-strong)] p-4 font-mono text-sm text-[var(--e-primary)] placeholder-[var(--e-line-strong)] focus:border-[var(--e-contrast)] focus:outline-none resize-none transition-colors",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#FF3B30]",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-6 flex items-center gap-4",
                children: [
                  e.jsx("div", {
                    className: "flex-1 h-[1px] bg-[var(--e-hover)]",
                  }),
                  e.jsxs("button", {
                    onClick: c,
                    disabled: !s || a,
                    className: `px-8 py-3 bg-[var(--e-cta)] text-black font-bold font-mono tracking-widest hover:bg-[var(--e-cta-hover)] active:scale-95 transition-all flex items-center gap-2 ${!s || a ? "opacity-50 cursor-not-allowed" : ""}`,
                    children: [
                      a ? "处理中..." : "开始上传",
                      e.jsx(Xr, { className: "rotate-[135deg]", size: 16 }),
                    ],
                  }),
                ],
              }),
            ],
          }),
    });
  },
  TZ = () => {
    const {
        onClose: t,
        inventory: s,
        coins: n,
        scavengeItem: a,
        isScavenging: r,
        craftItems: i,
        identifyItem: o,
        discardItem: c,
        sendItem: d,
        uiScheme: u,
        toggleUiScheme: f,
        startSandbox: p,
        resolveSandboxNode: m,
        continueStory: h,
        saveSandboxState: g,
        loadSandboxState: x,
        expeditionLetingBinding: y,
        saveExpeditionLetingBinding: v,
        expeditionBgmInfo: b,
        expeditionBgmIsPlaying: N,
        toggleExpeditionLetingPlayback: w,
        resetExpeditionLetingAudioUi: _,
        expeditionArchives: A,
        finalizeExpeditionSettlement: k,
        saveExpeditionArchive: C,
        expandEchoCharacterCodex: M,
        isFinalizingSettlement: E,
      } = uZ(),
      [S, j] = l.useState("SCANNER"),
      [T, I] = l.useState(null),
      [L, B] = l.useState(!1),
      [F, D] = l.useState(null),
      [$, P] = l.useState(null),
      z = s.filter((V) => V.status === "unidentified"),
      O = s.filter((V) => V.status === "identified"),
      Z = pn.useCallback(() => P(null), []),
      K = pn.useCallback((V) => {
        (V != null && String(V).trim() && P(String(V).trim()), j("SETTLEMENT"));
      }, []),
      q = async () => {
        const V = await a();
        V &&
          V.success !== !1 &&
          setTimeout(() => {
            const ne = s.find((le) => le.status === "unidentified");
            (V.id ? I(V) : ne && I(ne), j("LAB"));
          }, 1500);
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 bg-[var(--e-page)] text-[var(--e-primary)] font-sans overflow-hidden select-none",
      style: QQ(u),
      children: [
        e.jsx(mZ, { uiScheme: u }),
        e.jsx(pZ, { coins: n, onClose: t }),
        e.jsxs(Os, {
          mode: "wait",
          children: [
            S === "SCANNER" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "absolute inset-0",
                  children: [
                    e.jsx(wZ, {
                      onScan: q,
                      isScanning: r,
                      hasSignal: z.length > 0,
                      uiScheme: u,
                      onToggleUiScheme: f,
                    }),
                    z.length > 0 &&
                      e.jsxs(We.button, {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        onClick: () => {
                          (I(z[0]), j("LAB"));
                        },
                        className:
                          "absolute bottom-32 left-1/2 -translate-x-1/2 bg-[#FF3B30] text-black px-4 py-2 font-mono text-xs font-bold border border-[#FF3B30] flex items-center gap-2 hover:bg-red-500",
                        children: [
                          e.jsx(Wr, { size: 12 }),
                          "发现异常波动 [",
                          z.length,
                          "]",
                        ],
                      }),
                  ],
                },
                "scanner",
              ),
            S === "LAB" &&
              (T
                ? e.jsx(
                    We.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className: "absolute inset-0",
                      children: e.jsx(jZ, {
                        uiScheme: u,
                        item: T,
                        onProcess: (V, ne) => {
                          (o(V, ne), B(!0));
                        },
                        onDiscard: (V) => {
                          (c(V), I(null));
                          const ne = s.find(
                            (le) => le.status === "unidentified" && le.id !== V,
                          );
                          ne ? I(ne) : j("SCANNER");
                        },
                      }),
                    },
                    "lab",
                  )
                : e.jsxs("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center font-mono text-xs text-[var(--e-dim)]",
                    children: [
                      "未装载样本",
                      e.jsx("button", {
                        onClick: () => j("SCANNER"),
                        className:
                          "absolute mt-8 underline text-[var(--e-soft)]",
                        children: "返回搜寻",
                      }),
                    ],
                  })),
            S === "CRAFT" &&
              e.jsx(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "absolute inset-0",
                  children: e.jsx(NZ, {
                    inventory: s,
                    onCraft: i,
                    onCraftSuccess: (V) => {
                      (I(V), B(!0));
                    },
                    isProcessing: r,
                  }),
                },
                "craft",
              ),
            S === "NEXUS" &&
              e.jsx(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "absolute inset-0 min-h-0 overflow-hidden",
                  children: e.jsx(SZ, {
                    inventory: s,
                    coins: n,
                    onStart: p,
                    onResolve: m,
                    isProcessing: r,
                    saveSandboxState: g,
                    loadSandboxState: x,
                    expeditionLetingBinding: y,
                    saveExpeditionLetingBinding: v,
                    expeditionBgmInfo: b,
                    expeditionBgmIsPlaying: N,
                    toggleExpeditionLetingPlayback: w,
                    resetExpeditionLetingAudioUi: _,
                    uiScheme: u,
                    finalizeExpeditionSettlement: k,
                    saveExpeditionArchive: C,
                    isFinalizingSettlement: E,
                    onExpeditionArchived: K,
                  }),
                },
                "nexus",
              ),
            S === "VAULT" &&
              e.jsx(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "absolute inset-0",
                  children: e.jsx(_Z, {
                    items: O,
                    onDiscard: c,
                    setTheaterModeItem: D,
                  }),
                },
                "vault",
              ),
            S === "SETTLEMENT" &&
              e.jsx(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "absolute inset-0",
                  children: e.jsx(CZ, {
                    archives: A,
                    expandEchoCharacterCodex: M,
                    onSpiritSend: async (V) => await d(V),
                    uiScheme: u,
                    focusArchiveId: $,
                    onFocusArchiveConsumed: Z,
                  }),
                },
                "settlement",
              ),
          ],
        }),
        e.jsx(Os, {
          children:
            L &&
            T &&
            e.jsx(yZ, {
              item: T,
              title: S === "CRAFT" ? "融合成功" : "分析完成",
              onClose: () => {
                (B(!1), I(null), j("VAULT"));
              },
            }),
        }),
        e.jsx(Os, {
          children:
            F &&
            e.jsx(bZ, { item: F, onClose: () => D(null), continueStory: h }),
        }),
        e.jsx(vZ, {
          mode: S,
          setMode: (V) => {
            (V === "LAB" && !T && z.length > 0 && I(z[0]), j(V));
          },
        }),
        e.jsx("div", {
          className:
            "absolute inset-4 border border-[var(--e-frame)] pointer-events-none rounded-xl",
        }),
        e.jsx("div", {
          className:
            "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--e-surface)] z-50 rounded-b-xl",
        }),
      ],
    });
  },
  IZ = ({ onClose: t }) => e.jsx(dZ, { onClose: t, children: e.jsx(TZ, {}) }),
  EZ = {
    ai_phone: Ah,
    couple: zn,
    meet: Xn,
    book: Rm,
    douyin: vr,
    encounter: q1,
    camera: qo,
    calculator: J5,
    weather: Th,
    echo: Om,
    leting: vr,
    bubble: Ar,
    meihua_share: Yl,
    system: Bm,
    settings: Co,
    chat: Ar,
    mail: Ac,
    phone: Zr,
  },
  LZ = {
    ai_phone: {
      color: "text-violet-500",
      bgBlob: "from-violet-100 via-purple-50 to-fuchsia-50",
      tag: "查岗",
    },
    couple: {
      color: "text-rose-500",
      bgBlob: "from-rose-100 via-pink-50 to-amber-50",
      tag: "情侣",
    },
    meet: {
      color: "text-amber-500",
      bgBlob: "from-amber-100 via-yellow-50 to-orange-50",
      tag: "遇见",
    },
    book: {
      color: "text-emerald-500",
      bgBlob: "from-emerald-100 via-teal-50 to-cyan-50",
      tag: "世界书",
    },
    douyin: {
      color: "text-pink-500",
      bgBlob: "from-pink-100 via-rose-50 to-red-50",
      tag: "啾音",
    },
    encounter: {
      color: "text-rose-400",
      bgBlob: "from-rose-100 via-pink-50 to-fuchsia-50",
      tag: "邂逅",
    },
    camera: {
      color: "text-sky-500",
      bgBlob: "from-sky-100 via-blue-50 to-indigo-50",
      tag: "随身",
    },
    calculator: {
      color: "text-stone-600",
      bgBlob: "from-stone-100 via-neutral-50 to-zinc-50",
      tag: "回忆封存室",
    },
    weather: {
      color: "text-cyan-500",
      bgBlob: "from-cyan-100 via-sky-50 to-blue-50",
      tag: "昨日气象局",
    },
    echo: {
      color: "text-teal-500",
      bgBlob: "from-teal-100 via-emerald-50 to-green-50",
      tag: "回响",
    },
    leting: {
      color: "text-fuchsia-500",
      bgBlob: "from-fuchsia-100 via-pink-50 to-rose-50",
      tag: "乐听",
    },
    bubble: {
      color: "text-slate-600",
      bgBlob: "from-slate-100 via-gray-50 to-stone-50",
      tag: "艺术季刊",
    },
    meihua_share: {
      color: "text-amber-600",
      bgBlob: "from-amber-50 via-yellow-50 to-orange-50",
      tag: "辑录",
    },
    system: {
      color: "text-stone-600",
      bgBlob: "from-stone-100 via-amber-50/30 to-stone-50",
      tag: "控制面板",
    },
    settings: {
      color: "text-slate-500",
      bgBlob: "from-slate-100 via-gray-50 to-neutral-50",
      tag: "设置",
    },
    chat: {
      color: "text-blue-500",
      bgBlob: "from-blue-100 via-indigo-50 to-violet-50",
      tag: "聊天",
    },
    mail: {
      color: "text-orange-500",
      bgBlob: "from-orange-100 via-amber-50 to-yellow-50",
      tag: "邮件",
    },
    phone: {
      color: "text-green-500",
      bgBlob: "from-green-100 via-emerald-50 to-teal-50",
      tag: "电话",
    },
  },
  P4 = [
    "settings",
    "system",
    "chat",
    "couple",
    "douyin",
    "encounter",
    "meet",
    "book",
    "mail",
    "camera",
    "calculator",
    "weather",
    "echo",
    "leting",
    "bubble",
    "meihua_share",
    "phone",
    "ai_phone",
  ],
  DZ = SS.map((t) => {
    var s;
    return {
      id: t,
      name: ((s = ad[t]) == null ? void 0 : s.zh) || t,
      icon: EZ[t] || ui,
      ...LZ[t],
    };
  }),
  fy = [...DZ].sort((t, s) => {
    const n = P4.indexOf(t.id),
      a = P4.indexOf(s.id),
      r = n === -1 ? 999 : n,
      i = a === -1 ? 999 : a;
    return r !== i ? r - i : String(t.id).localeCompare(String(s.id));
  }),
  $Z = () =>
    e.jsx("style", {
      dangerouslySetInnerHTML: {
        __html: `
    /* 噪点背景纹理 */
    .help-app-noise-bg {
      background-color: #F7F6F3;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
    }

    /* 高级阴影 */
    .help-app-shadow-soft { box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.04); }
    .help-app-shadow-float { box-shadow: 0 32px 64px -16px rgba(0, 0, 0, 0.12), 0 8px 24px -8px rgba(0, 0, 0, 0.06); }
    .help-app-shadow-inner { box-shadow: inset 0 2px 4px rgba(255,255,255,0.8), inset 0 -2px 4px rgba(0,0,0,0.02); }
    
    /* 毛玻璃效果 */
    .help-app-glass-heavy { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(24px) saturate(180%); -webkit-backdrop-filter: blur(24px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.9); }
    .help-app-glass-light { background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5); }
    
    /* 隐藏滚动条 */
    .help-app-no-scrollbar::-webkit-scrollbar { display: none; }
    .help-app-no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    
    /* 动画 */
    @keyframes helpRevealUp { 0% { opacity: 0; transform: translateY(30px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
    .help-app-animate-reveal { animation: helpRevealUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    
    @keyframes helpFadeScale { 0% { opacity: 0; transform: scale(0.9); filter: blur(4px); } 100% { opacity: 1; transform: scale(1); filter: blur(0); } }
    .help-app-animate-fade-scale { animation: helpFadeScale 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }

    @keyframes helpFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    .help-app-animate-float { animation: helpFloat 6s ease-in-out infinite; }

    /* 文本截断 */
    .help-app-line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

    /* 教程正文排版 */
    .help-tutorial-section { font-weight: 600; color: #1c1917; letter-spacing: 0.02em; }
    .help-tutorial-step { font-weight: 600; color: #44403c; }
    .help-tutorial-list-item { padding-left: 0.5rem; border-left: 2px solid #e7e5e4; }
    .help-tutorial-num { font-weight: 600; color: #78716c; min-width: 1.5rem; }
    .help-tutorial-callout { border-left: 4px solid #a8a29e; }
    .help-tutorial-step-card { background: linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%); }

    .help-tutorial-content-root { counter-reset: tutorial-h2 tutorial-h3; }
    .help-tutorial-md-h2 {
      counter-increment: tutorial-h2;
      counter-reset: tutorial-h3 tutorial-h4;
      font-size: 1.48rem;
      font-weight: 800;
      color: #0c0a09;
      letter-spacing: -0.025em;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      line-height: 1.32;
    }
    .help-tutorial-md-h2:first-child { margin-top: 0; }
    .help-tutorial-md-h2 .help-tutorial-md-h2-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 1.85rem;
      height: 1.85rem;
      margin-right: 0.55rem;
      border-radius: 0.5rem;
      background: linear-gradient(135deg, #1c1917 0%, #44403c 100%);
      color: #fafaf9;
      font-size: 0.72rem;
      font-weight: 800;
      vertical-align: middle;
    }
    .help-tutorial-md-h2 .help-tutorial-md-h2-badge::before { content: counter(tutorial-h2); }
    .help-tutorial-md-h3 {
      counter-increment: tutorial-h3;
      counter-reset: tutorial-h4;
      font-size: 1.24rem;
      font-weight: 800;
      color: #0c0a09;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      padding-bottom: 0.35rem;
      border-bottom: 2px solid #d6d3d1;
      line-height: 1.38;
    }
    .help-tutorial-md-h3 .help-tutorial-md-h3-num::before {
      content: counter(tutorial-h3) ".";
      margin-right: 0.45rem;
      font-weight: 800;
      color: #78716c;
      font-size: 0.92em;
    }
    .help-tutorial-md-h3 .help-tutorial-md-h3-num { display: inline; }
    .help-tutorial-md-h4 {
      counter-increment: tutorial-h4;
      font-size: 1.07rem;
      font-weight: 700;
      color: #1c1917;
      margin-top: 1.1rem;
      margin-bottom: 0.35rem;
      line-height: 1.45;
    }
    .help-tutorial-md-h3 + .help-tutorial-md-h4 { margin-top: 0.6rem; }
    .help-tutorial-md-h4 .help-tutorial-md-h4-num::before {
      content: counter(tutorial-h4) ")";
      margin-right: 0.35rem;
      font-weight: 700;
      color: #a8a29e;
      font-size: 0.88em;
    }
    .help-tutorial-content-root strong.help-tutorial-em,
    .help-tutorial-content-root mark.help-tutorial-em {
      font-weight: 600 !important;
      color: #292524 !important;
      font-size: 1.02em !important;
      font-style: normal !important;
      background: #e7e5e4 !important;
      padding: 0.08em 0.22em !important;
      border-radius: 4px !important;
      box-shadow: none !important;
    }
    .help-tutorial-content-root em.help-tutorial-it {
      font-style: italic !important;
      font-weight: 500 !important;
      color: #44403c !important;
    }
    .help-tutorial-content-root .help-tutorial-ul {
      text-decoration: underline !important;
      text-underline-offset: 0.14em !important;
      text-decoration-thickness: 1px !important;
      color: inherit !important;
    }
  `,
      },
    });
function FZ(t) {
  return t == null || typeof t != "string"
    ? ""
    : t
        .replace(/\uFF0A/g, "*")
        .replace(/\u2217/g, "*")
        .replace(/\uFE61/g, "*")
        .replace(/\u204E/g, "*");
}
const zZ = {
  fontWeight: 600,
  color: "#292524",
  fontSize: "1.02em",
  lineHeight: 1.45,
  fontStyle: "normal",
  background: "#e7e5e4",
  padding: "0.08em 0.22em",
  borderRadius: "4px",
  display: "inline",
};
function RZ(t, s) {
  for (let n = s; n < t.length; n++)
    if (t[n] === "*" && t[n + 1] !== "*") return n;
  return -1;
}
function PZ(t, s) {
  for (let n = s; n < t.length; n++)
    if (t[n] === "*") {
      if (t[n + 1] === "*") {
        n++;
        continue;
      }
      return n;
    }
  return -1;
}
function ou(t) {
  if (t == null || t === "") return null;
  const s = [];
  let n = 0,
    a = 0;
  for (; a < t.length; ) {
    const r = t.indexOf("__", a),
      i = RZ(t, a);
    let o = -1,
      c = null;
    if (
      (r !== -1 && (i === -1 || r < i)
        ? ((o = r), (c = "u"))
        : i !== -1 && ((o = i), (c = "i")),
      c === null)
    ) {
      s.push(t.slice(a));
      break;
    }
    if ((o > a && s.push(t.slice(a, o)), c === "u")) {
      const d = t.indexOf("__", o + 2);
      if (d === -1) {
        s.push(t.slice(o));
        break;
      }
      const u = t.slice(o + 2, d);
      (s.push(
        e.jsx(
          "span",
          {
            className: "help-tutorial-ul",
            style: {
              textDecoration: "underline",
              textUnderlineOffset: "0.14em",
            },
            children: ou(u),
          },
          n++,
        ),
      ),
        (a = d + 2));
      continue;
    }
    if (c === "i") {
      const d = PZ(t, o + 1);
      if (d === -1) {
        (s.push(t.slice(o, o + 1)), (a = o + 1));
        continue;
      }
      if (d === o + 1) {
        (s.push(t.slice(o, o + 1)), (a = o + 1));
        continue;
      }
      const u = t.slice(o + 1, d);
      (s.push(
        e.jsx(
          "em",
          {
            className: "help-tutorial-it",
            style: { fontStyle: "italic", fontWeight: 500, color: "#57534e" },
            children: ou(u),
          },
          n++,
        ),
      ),
        (a = d + 1));
      continue;
    }
  }
  return s.length === 0
    ? null
    : s.length === 1
      ? s[0]
      : e.jsx(e.Fragment, { children: s });
}
function Gr({ children: t }) {
  if (t == null || t === "") return null;
  if (typeof t != "string") return t;
  const s = FZ(t);
  if (!s.includes("**")) {
    const i = ou(s);
    return i ?? s;
  }
  const n = [];
  let a = 0,
    r = 0;
  for (; a < s.length; ) {
    const i = s.indexOf("**", a);
    if (i === -1) {
      const d = ou(s.slice(a));
      d != null && n.push(e.jsx(l.Fragment, { children: d }, r++));
      break;
    }
    if (i > a) {
      const d = ou(s.slice(a, i));
      d != null && n.push(e.jsx(l.Fragment, { children: d }, r++));
    }
    const o = s.indexOf("**", i + 2);
    if (o === -1) {
      n.push(e.jsx("span", { children: s.slice(i) }, r++));
      break;
    }
    const c = s.slice(i + 2, o);
    (n.push(
      e.jsx(
        "strong",
        { className: "help-tutorial-em", style: zZ, children: ou(c) ?? c },
        r++,
      ),
    ),
      (a = o + 2));
  }
  return e.jsx(e.Fragment, { children: n });
}
function Jx(t, s, n) {
  if (s === "---" || s === "***")
    return e.jsx(
      "hr",
      {
        className:
          "my-7 border-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent",
      },
      n,
    );
  if (/^###\s+/.test(s)) {
    const o = s.replace(/^###\s+/, ""),
      c = /^\d+[．.．,，、）)]\s*/.test(o);
    return e.jsxs(
      "h4",
      {
        className: "help-tutorial-md-h4",
        children: [
          !c &&
            e.jsx("span", {
              className: "help-tutorial-md-h4-num",
              "aria-hidden": !0,
            }),
          e.jsx(Gr, { children: o }),
        ],
      },
      n,
    );
  }
  if (/^##\s+/.test(s)) {
    const o = s.replace(/^##\s+/, ""),
      c = /^\d+[．.．,，、）)]\s*/.test(o);
    return e.jsxs(
      "h3",
      {
        className: "help-tutorial-md-h3",
        children: [
          !c &&
            e.jsx("span", {
              className: "help-tutorial-md-h3-num",
              "aria-hidden": !0,
            }),
          e.jsx(Gr, { children: o }),
        ],
      },
      n,
    );
  }
  if (/^#\s+/.test(s)) {
    const o = s.replace(/^#\s+/, ""),
      c = /^[一二三四五六七八九十百]{1,4}[、,]/.test(o);
    return e.jsxs(
      "h2",
      {
        className: "help-tutorial-md-h2",
        children: [
          !c &&
            e.jsx("span", {
              className: "help-tutorial-md-h2-badge",
              "aria-hidden": !0,
            }),
          e.jsx("span", {
            className: "align-middle",
            children: e.jsx(Gr, { children: o }),
          }),
        ],
      },
      n,
    );
  }
  if (/^第[一二三四五六七八九十\d]+步[：:]\s*/.test(s))
    return e.jsxs(
      "h4",
      {
        className:
          "text-base font-extrabold text-stone-900 flex items-center gap-2 tracking-tight",
        children: [
          e.jsx("span", {
            className: "w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0",
          }),
          e.jsx(Gr, { children: s }),
        ],
      },
      n,
    );
  if (/^[·•]\s*/.test(s) || /^\s*[·•]\s+/.test(t) || /^[-–]\s+/.test(s)) {
    const o = s
      .replace(/^[·•]\s*/, "")
      .replace(/^\s*[·•]\s+/, "")
      .replace(/^[-–]\s+/, "");
    return e.jsxs(
      "div",
      {
        className: "flex gap-3 py-1.5 text-[15px] text-stone-800",
        children: [
          e.jsx("span", {
            className: "text-amber-600 shrink-0 mt-0.5 font-black",
            children: "·",
          }),
          e.jsx("span", {
            className: "flex-1 min-w-0",
            style: { lineHeight: 1.78 },
            children: e.jsx(Gr, { children: o }),
          }),
        ],
      },
      n,
    );
  }
  const a = s.match(/^(\d+)\.\s+(.*)$/);
  if (a)
    return e.jsxs(
      "div",
      {
        className: "flex gap-3 py-1.5 text-[15px] text-stone-800",
        children: [
          e.jsxs("span", {
            className:
              "text-stone-500 font-extrabold shrink-0 tabular-nums w-6 text-right",
            children: [a[1], "."],
          }),
          e.jsx("span", {
            className: "flex-1 min-w-0",
            style: { lineHeight: 1.78 },
            children: e.jsx(Gr, { children: a[2] }),
          }),
        ],
      },
      n,
    );
  if (s.length <= 28 && /[：:]$/.test(s))
    return e.jsx(
      "p",
      {
        className:
          "text-[13px] font-extrabold text-stone-800 mt-5 mb-1 tracking-wide",
        children: e.jsx(Gr, { children: s }),
      },
      n,
    );
  if (s.length > 48 && /[。；]/.test(s)) {
    const o = s
      .split(new RegExp("(?<=[。；])", "g"))
      .map((c) => c.trim())
      .filter(Boolean);
    return o.length <= 1
      ? e.jsx(
          "p",
          {
            className: "text-[15px] text-stone-800",
            style: { lineHeight: 1.82 },
            children: e.jsx(Gr, { children: s }),
          },
          n,
        )
      : e.jsx(
          "div",
          {
            className: "space-y-3",
            children: o.map((c, d) =>
              e.jsx(
                "p",
                {
                  className: "text-[15px] text-stone-800",
                  style: { lineHeight: 1.82 },
                  children: e.jsx(Gr, { children: c }),
                },
                `${n}-${d}`,
              ),
            ),
          },
          n,
        );
  }
  return e.jsx(
    "p",
    {
      className: "text-[15px] text-stone-800",
      style: { lineHeight: 1.82 },
      children: e.jsx(Gr, { children: s }),
    },
    n,
  );
}
function OZ({ content: t }) {
  if (!t || typeof t != "string") return null;
  const s = t.split(/\n\n+/).filter(Boolean),
    n = [];
  return (
    s.forEach((a, r) => {
      var h;
      const i = a
        .split(
          `
`,
        )
        .filter((g) => g.trim() !== "");
      if (i.length === 0) return;
      if (i.length === 1) {
        const g = i[0].trim();
        if (g === "---" || g === "***") {
          n.push(
            e.jsx(
              "hr",
              {
                className:
                  "my-8 border-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent",
              },
              `hr-${r}`,
            ),
          );
          return;
        }
        if (
          /^###\s/.test(g) ||
          /^##\s/.test(g) ||
          /^#\s/.test(g) ||
          /^第[一二三四五六七八九十\d]+步[：:]/.test(g)
        ) {
          n.push(Jx(i[0], g, `mdsolo-${r}`));
          return;
        }
      }
      if (i.length === 1 && /^【.+】$/.test(i[0].trim())) {
        n.push(
          e.jsxs(
            "div",
            {
              className: "mt-10 first:mt-0 pt-1",
              children: [
                e.jsx("div", {
                  className:
                    "h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent mb-5",
                  "aria-hidden": !0,
                }),
                e.jsxs("h2", {
                  className:
                    "help-tutorial-md-h2 !mt-0 flex flex-wrap items-center gap-x-2 gap-y-1",
                  children: [
                    e.jsx("span", {
                      className: "help-tutorial-md-h2-badge",
                      "aria-hidden": !0,
                    }),
                    e.jsx("span", {
                      className:
                        "text-[1.42rem] font-black text-stone-900 tracking-tight",
                      children: e.jsx(Gr, { children: i[0].trim() }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "h-1 bg-gradient-to-r from-stone-400/90 to-transparent mt-3 mb-1 max-w-[5rem] rounded-full",
                  "aria-hidden": !0,
                }),
              ],
            },
            `sec-${r}`,
          ),
        );
        return;
      }
      const o = i[0].trim(),
        c =
          /^(.+小结)[：:]?\s*$/.test(o) ||
          /^注意[：:]?\s*$/.test(o) ||
          /^重要[：:]?\s*$/.test(o) ||
          /^提示[：:]?\s*$/.test(o),
        d = /^(小结|注意|重要|提示)[：:]?\s+/.test(o) && o.length < 120;
      if (i.length >= 1 && (c || (i.length === 1 && d))) {
        const g = i.slice(1),
          x = d
            ? (h = o.match(/^(小结|注意|重要|提示)[：:]?\s*/)) == null
              ? void 0
              : h[1]
            : null,
          y = d ? o.replace(/^(小结|注意|重要|提示)[：:]?\s*/, "") : null;
        n.push(
          e.jsxs(
            "div",
            {
              className:
                "help-tutorial-callout mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-100",
              children: [
                !d &&
                  e.jsx("p", {
                    className: "text-sm font-extrabold text-amber-950 mb-2",
                    children: e.jsx(Gr, { children: o }),
                  }),
                d &&
                  x &&
                  e.jsx("p", {
                    className:
                      "text-xs font-extrabold text-amber-900/90 mb-1.5 uppercase tracking-wide",
                    children: x,
                  }),
                e.jsxs("div", {
                  className: "space-y-2 text-stone-800 text-[15px]",
                  style: { lineHeight: 1.72 },
                  children: [
                    d && y
                      ? e.jsx("p", { children: e.jsx(Gr, { children: y }) })
                      : null,
                    g.map((v, b) => {
                      const N = v.trim();
                      return /^[·•]\s*/.test(N)
                        ? e.jsxs(
                            "div",
                            {
                              className: "flex gap-2",
                              children: [
                                e.jsx("span", {
                                  className: "text-amber-600 font-bold",
                                  children: "·",
                                }),
                                e.jsx("span", {
                                  children: e.jsx(Gr, {
                                    children: N.replace(/^[·•]\s*/, ""),
                                  }),
                                }),
                              ],
                            },
                            b,
                          )
                        : N
                          ? e.jsx(
                              "p",
                              { children: e.jsx(Gr, { children: N }) },
                              b,
                            )
                          : null;
                    }),
                  ],
                }),
              ],
            },
            `callout-${r}`,
          ),
        );
        return;
      }
      const u = o.match(/^第([一二三四五六七八九十\d]+)步[：:]\s*(.*)$/);
      if (u && i.length > 1) {
        const g = `第${u[1]}步`,
          x = u[2] || "";
        n.push(
          e.jsxs(
            "div",
            {
              className:
                "help-tutorial-step-card mt-5 p-4 rounded-2xl border border-stone-100 shadow-sm",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    e.jsx("span", {
                      className:
                        "w-7 h-7 rounded-lg bg-stone-200/80 text-stone-600 text-xs font-bold flex items-center justify-center shrink-0",
                      children: g,
                    }),
                    x &&
                      e.jsx("span", {
                        className: "text-[15px] font-extrabold text-stone-900",
                        children: e.jsx(Gr, { children: x }),
                      }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-0.5 pl-0",
                  children: i.slice(1).map((y, v) => {
                    const b = `b${r}-l${v}`,
                      N = y.trim();
                    return Jx(y, N, b);
                  }),
                }),
              ],
            },
            `step-${r}`,
          ),
        );
        return;
      }
      const f = [];
      let p = [];
      const m = (g, x) => {
        if (x.length === 0) return;
        const y = g.match(/^第([一二三四五六七八九十\d]+)步[：:]\s*(.*)$/),
          v = y ? `第${y[1]}步` : "",
          b = (y && y[2]) || g;
        f.push(
          e.jsxs(
            "div",
            {
              className:
                "help-tutorial-step-card mt-5 p-4 rounded-2xl border border-stone-100 shadow-sm",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-3",
                  children: [
                    v &&
                      e.jsx("span", {
                        className:
                          "w-7 h-7 rounded-lg bg-stone-200/80 text-stone-600 text-xs font-bold flex items-center justify-center shrink-0",
                        children: v,
                      }),
                    e.jsx("span", {
                      className: "text-[15px] font-extrabold text-stone-900",
                      children: e.jsx(Gr, { children: b }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-0.5",
                  children: x.map((N, w) => Jx(N, N.trim(), `sl-${w}`)),
                }),
              ],
            },
            `step-${f.length}`,
          ),
        );
      };
      (i.forEach((g, x) => {
        const y = g.trim(),
          v = `b${r}-l${x}`;
        if (/^第[一二三四五六七八九十\d]+步[：:]\s*/.test(y)) {
          (p.length > 0 && (m(p[0], p.slice(1)), (p = [])), (p = [y]));
          return;
        }
        if (p.length > 0) {
          p.push(g);
          return;
        }
        f.push(Jx(g, y, v));
      }),
        p.length > 0 && m(p[0], p.slice(1)),
        n.push(
          e.jsx("div", { className: "space-y-4", children: f }, `block-${r}`),
        ));
    }),
    e.jsx("div", {
      className:
        "help-tutorial-content-root help-tutorial-body text-[15px] max-w-[42rem] leading-relaxed space-y-7 text-stone-800",
      children: n,
    })
  );
}
function BZ({ onClose: t, onOpenHelpAssistantChat: s }) {
  const [n, a] = l.useState(fy[0]),
    [r, i] = l.useState(!1),
    [o, c] = l.useState(""),
    [d, u] = l.useState(null),
    f = l.useRef(null),
    p = l.useRef(null),
    m = l.useRef(0);
  (l.useEffect(() => {
    const x = () => {
      try {
        const y = sessionStorage.getItem("help_pending_tutorial_id");
        if (!y) return;
        sessionStorage.removeItem("help_pending_tutorial_id");
        const v = ld.find((N) => N.id === y);
        if (!v) return;
        const b = fy.find((N) => N.id === v.appId);
        (b && a(b), u(v));
      } catch {}
    };
    return (
      x(),
      window.addEventListener("phone_help_tutorial_pending", x),
      () => window.removeEventListener("phone_help_tutorial_pending", x)
    );
  }, []),
    l.useEffect(() => {
      if (r) {
        p.current && (m.current = p.current.scrollTop);
        const x = document.body.style.overflow,
          y = document.documentElement.style.overflow;
        return (
          (document.body.style.overflow = "hidden"),
          (document.documentElement.style.overflow = "hidden"),
          () => {
            ((document.body.style.overflow = x),
              (document.documentElement.style.overflow = y));
          }
        );
      } else
        setTimeout(() => {
          p.current && (p.current.scrollTop = m.current);
        }, 0);
    }, [r]));
  const h = l.useMemo(() => ld.filter((x) => x.appId === n.id), [n]),
    g = l.useMemo(() => {
      if (!o.trim()) return [];
      const x = o.trim().toLowerCase(),
        y = [];
      return (
        ld.forEach((v) => {
          const b = v.title.toLowerCase().includes(x),
            N = v.tags.some((C) => C.toLowerCase().includes(x)),
            w = v.desc && v.desc.toLowerCase().includes(x),
            _ = v.content || "",
            A = _.length > 0 && _.toLowerCase().includes(x);
          if (!b && !N && !w && !A) return;
          let k = null;
          if (A && _) {
            const C = _.toLowerCase().indexOf(x),
              M = 28,
              E = 52,
              S = Math.max(0, C - M),
              j = Math.min(_.length, C + x.length + E);
            let T = _.slice(S, j);
            (S > 0 && (T = "…" + T),
              j < _.length && (T = T + "…"),
              (k = T.trim()));
          }
          y.push({ ...v, _matchInTitle: b, _matchInContent: A, _snippet: k });
        }),
        y.sort((v, b) => {
          const N = (w) =>
            (w._matchInTitle ? 4 : 0) +
            (w.tags.some((_) => _.toLowerCase().includes(x)) ? 2 : 0) +
            (w._matchInContent && !w._matchInTitle ? 1 : 0);
          return N(b) - N(v);
        }),
        y
      );
    }, [o]);
  return e.jsxs("div", {
    className:
      "absolute inset-0 min-h-0 help-app-noise-bg overflow-hidden font-sans",
    children: [
      e.jsx($Z, {}),
      e.jsxs("div", {
        className: "absolute inset-0 overflow-hidden flex flex-col min-h-0",
        children: [
          e.jsxs("div", {
            className:
              "relative w-full flex-shrink-0 pb-14 px-6 overflow-hidden",
            style: { paddingTop: "calc(92px + env(safe-area-inset-top, 0px))" },
            children: [
              !d &&
                e.jsxs("div", {
                  className:
                    "absolute left-0 right-0 z-50 px-6 flex justify-between items-center pointer-events-none",
                  style: { top: "calc(32px + env(safe-area-inset-top, 0px))" },
                  children: [
                    e.jsx("button", {
                      onClick: t,
                      className:
                        "w-11 h-11 rounded-full help-app-glass-heavy flex items-center justify-center text-stone-800 hover:scale-105 active:scale-95 transition-all duration-300 help-app-shadow-soft pointer-events-auto",
                      children: e.jsx(Kn, {
                        size: 20,
                        className: "rotate-180 ml-[-1px]",
                        strokeWidth: 2.5,
                      }),
                    }),
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => {
                        if (typeof s == "function") {
                          s();
                          return;
                        }
                        window.dispatchEvent(
                          new CustomEvent("phone_launch_app", {
                            detail: { appId: "chat", openHelpAssistant: !0 },
                          }),
                        );
                      },
                      className:
                        "help-app-glass-heavy h-11 px-3.5 rounded-full help-app-shadow-soft flex items-center gap-1.5 pointer-events-auto hover:scale-[1.02] active:scale-95 transition-transform",
                      children: [
                        e.jsx(Xn, {
                          size: 12,
                          className: "text-amber-500 shrink-0",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[11px] font-bold text-stone-800 tracking-wide whitespace-nowrap",
                          children: "小助手",
                        }),
                      ],
                    }),
                  ],
                }),
              e.jsxs("div", {
                className:
                  "absolute top-[-10%] right-[-20%] w-[120%] h-[120%] opacity-60 pointer-events-none",
                children: [
                  e.jsx("div", {
                    className: `absolute inset-0 bg-gradient-to-br ${n.bgBlob} mix-blend-multiply transition-colors duration-1000 ease-in-out`,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-white/40 blur-3xl help-app-animate-float",
                    style: { animationDelay: "0s" },
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-[10%] left-[20%] w-48 h-48 rounded-full bg-white/30 blur-2xl help-app-animate-float",
                    style: { animationDelay: "-3s" },
                  }),
                ],
              }),
              e.jsxs(
                "div",
                {
                  className:
                    "relative z-10 flex flex-col items-start help-app-animate-fade-scale mt-8",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-4 mb-5",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className: `absolute inset-0 bg-gradient-to-br ${n.bgBlob} blur-xl opacity-80`,
                            }),
                            e.jsx("div", {
                              className:
                                "relative w-12 h-12 rounded-[16px] help-app-glass-heavy flex items-center justify-center text-stone-800 help-app-shadow-float border border-white/60",
                              children: e.jsx(n.icon, {
                                size: 22,
                                strokeWidth: 2,
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-black tracking-[0.3em] uppercase text-stone-400 mb-0.5",
                              children: "EXPLORE",
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold text-stone-800 bg-white/50 px-2 py-0.5 rounded-md backdrop-blur-sm w-fit",
                              children: n.tag,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("h1", {
                      className:
                        "text-[36px] font-black text-stone-900 leading-[1.1] mb-3 tracking-tight",
                      children: [
                        n.name,
                        e.jsx("span", {
                          className:
                            "block text-stone-400 font-normal italic text-[24px] mt-1",
                          children: "Masterclass.",
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-stone-500 font-medium text-[14px] max-w-[90%] leading-relaxed border-l-2 border-stone-300 pl-4",
                      children: [
                        "深入探索 ",
                        n.name,
                        " 的核心功能与隐藏技巧，解锁更高级的使用体验。",
                      ],
                    }),
                  ],
                },
                n.id,
              ),
            ],
          }),
          e.jsx("div", {
            className: "flex-shrink-0 px-6 mb-4 relative z-20 -mt-6",
            children: e.jsx("div", {
              className:
                "flex overflow-x-auto help-app-no-scrollbar gap-2 pb-4 -mx-6 px-6 mask-linear-fade",
              children: fy.map((x) => {
                const y = n.id === x.id;
                return e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      (a(x), u(null));
                    },
                    className: `flex-shrink-0 h-12 px-6 rounded-full text-[14px] font-bold transition-all duration-500 flex items-center gap-2.5 ${y ? "bg-stone-900 text-white help-app-shadow-float scale-105" : "bg-white/60 text-stone-500 hover:bg-white hover:text-stone-800 help-app-shadow-soft backdrop-blur-md border border-white/40"}`,
                    children: [
                      y &&
                        e.jsx(x.icon, {
                          size: 16,
                          strokeWidth: 2.5,
                          className: "text-white/80",
                        }),
                      x.name,
                    ],
                  },
                  x.id,
                );
              }),
            }),
          }),
          e.jsxs("div", {
            ref: p,
            className:
              "flex-1 min-h-0 px-6 pb-32 overflow-y-auto help-app-no-scrollbar relative z-10",
            children: [
              e.jsx("div", {
                className: "flex items-end justify-between mb-6",
                children: e.jsxs("h2", {
                  className: "text-2xl font-bold text-stone-900",
                  children: [
                    "Featured",
                    e.jsxs("span", {
                      className:
                        "block text-[12px] font-sans font-bold text-stone-400 tracking-widest uppercase mt-1",
                      children: ["精选教程 · ", h.length, " 篇"],
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "space-y-6",
                children:
                  h.length === 0
                    ? e.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center py-20 text-center help-app-glass-light rounded-[32px] border border-white/50",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-20 h-20 rounded-full bg-white/50 flex items-center justify-center text-stone-300 mb-6 help-app-shadow-inner",
                            children: e.jsx(ui, { size: 32, strokeWidth: 1.5 }),
                          }),
                          e.jsx("p", {
                            className: "text-xl font-bold text-stone-800 mb-2",
                            children: "暂无内容",
                          }),
                          e.jsx("p", {
                            className: "text-stone-400 text-sm font-medium",
                            children: "该分类下的教程正在筹备中",
                          }),
                        ],
                      })
                    : h.map((x, y) =>
                        e.jsxs(
                          "div",
                          {
                            role: "button",
                            tabIndex: 0,
                            onClick: () => u(x),
                            onKeyDown: (v) => v.key === "Enter" && u(x),
                            className:
                              "group relative bg-white/80 backdrop-blur-xl rounded-[32px] p-6 cursor-pointer help-app-shadow-soft border border-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 help-app-animate-reveal overflow-hidden",
                            style: { animationDelay: `${y * 0.1}s` },
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-stone-100 to-transparent rounded-bl-[100px] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                              }),
                              e.jsxs("div", {
                                className: "relative z-10 flex flex-col h-full",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-start mb-4",
                                    children: [
                                      e.jsx("div", {
                                        className: "flex gap-2",
                                        children: e.jsx("span", {
                                          className:
                                            "px-3 py-1.5 rounded-xl bg-stone-900 text-white text-[10px] font-black tracking-widest uppercase shadow-sm",
                                          children: x.tags[0],
                                        }),
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-500 help-app-shadow-inner",
                                        children: e.jsx(Kn, {
                                          size: 18,
                                          strokeWidth: 2.5,
                                          className: "ml-0.5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("h3", {
                                    className:
                                      "text-[22px] font-bold text-stone-900 leading-[1.3] mb-3 group-hover:text-stone-600 transition-colors pr-8",
                                    children: x.title,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[14px] text-stone-500 leading-relaxed font-medium help-app-line-clamp-3 mb-6 flex-1",
                                    children: e.jsx(Gr, {
                                      children: x.desc || "",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between pt-4 border-t border-stone-100",
                                    children: [
                                      e.jsxs("span", {
                                        className:
                                          "text-[12px] font-bold text-stone-400 flex items-center gap-2",
                                        children: [
                                          x.type === "video"
                                            ? e.jsx(q2, { size: 14 })
                                            : e.jsx(ui, { size: 14 }),
                                          x.duration,
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[11px] font-bold text-stone-300 uppercase tracking-widest group-hover:text-stone-800 transition-colors duration-300",
                                        children: "Read More",
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
          }),
          e.jsx("div", {
            className: "absolute bottom-8 right-6 z-30",
            children: e.jsx("button", {
              type: "button",
              onClick: () => i(!0),
              className:
                "w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center help-app-shadow-float hover:scale-110 active:scale-95 transition-all duration-300 group",
              children: e.jsx(pr, {
                size: 24,
                strokeWidth: 2,
                className:
                  "group-hover:rotate-12 transition-transform duration-300",
              }),
            }),
          }),
        ],
      }),
      e.jsx("div", {
        className: `absolute inset-0 z-50 bg-stone-900/40 backdrop-blur-sm flex items-end justify-center transition-opacity duration-500 ${r ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
        onClick: () => i(!1),
        children: e.jsxs("div", {
          className: `w-full h-[85%] min-h-0 bg-[#F9F8F6] rounded-t-[32px] shadow-2xl flex flex-col transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${r ? "translate-y-0" : "translate-y-full"}`,
          onClick: (x) => x.stopPropagation(),
          style: { paddingBottom: "env(safe-area-inset-bottom, 0px)" },
          children: [
            e.jsx("div", {
              className: "w-full flex justify-center pt-3 pb-1 flex-shrink-0",
              onClick: () => i(!1),
              children: e.jsx("div", {
                className: "w-12 h-1.5 bg-stone-300/50 rounded-full",
              }),
            }),
            e.jsxs("div", {
              className: "px-6 pt-2 pb-4 flex-shrink-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    e.jsx("h2", {
                      className: "text-2xl font-bold text-stone-900",
                      children: "Search",
                    }),
                    e.jsx("button", {
                      onClick: () => i(!1),
                      className:
                        "w-8 h-8 rounded-full bg-stone-200/50 flex items-center justify-center text-stone-500 hover:bg-stone-200 transition-colors",
                      children: e.jsx(Ts, { size: 16, strokeWidth: 2.5 }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "relative group",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                      children: e.jsx(pr, {
                        size: 18,
                        className:
                          "text-stone-400 group-focus-within:text-stone-800 transition-colors",
                        strokeWidth: 2.5,
                      }),
                    }),
                    e.jsx("input", {
                      ref: f,
                      type: "text",
                      placeholder: "搜索教程...",
                      value: o,
                      onChange: (x) => c(x.target.value),
                      className:
                        "w-full bg-white border-2 border-transparent focus:border-stone-900 rounded-2xl py-3.5 pl-11 pr-10 text-stone-900 font-bold text-[15px] placeholder:text-stone-400 placeholder:font-medium outline-none transition-all shadow-sm",
                    }),
                    o &&
                      e.jsx("button", {
                        type: "button",
                        onClick: () => c(""),
                        className:
                          "absolute inset-y-0 right-0 pr-3 flex items-center",
                        children: e.jsx("div", {
                          className:
                            "w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-300",
                          children: e.jsx(Ts, { size: 12, strokeWidth: 3 }),
                        }),
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex-1 overflow-y-auto px-6 help-app-no-scrollbar min-h-0 overscroll-contain touch-pan-y",
              style: {
                paddingBottom:
                  "calc(2.5rem + env(safe-area-inset-bottom, 0px))",
                WebkitOverflowScrolling: "touch",
              },
              children: [
                o &&
                  g.length > 0 &&
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] font-black text-stone-400 tracking-[0.2em] uppercase mb-3 mt-2",
                        children: "Results",
                      }),
                      g.map((x, y) => {
                        var v;
                        return e.jsxs(
                          "div",
                          {
                            role: "button",
                            tabIndex: 0,
                            onClick: () => {
                              (u(x), i(!1));
                            },
                            onKeyDown: (b) =>
                              b.key === "Enter" && (u(x), i(!1)),
                            className:
                              "group bg-white rounded-[20px] p-4 cursor-pointer help-app-shadow-soft border border-stone-100 hover:border-stone-900 transition-all help-app-animate-reveal",
                            style: { animationDelay: `${y * 0.05}s` },
                            children: [
                              e.jsx("h4", {
                                className:
                                  "text-[16px] font-bold text-stone-900 leading-snug mb-2 group-hover:text-stone-600",
                                children: x.title,
                              }),
                              x._snippet &&
                                e.jsx("p", {
                                  className:
                                    "text-stone-500 text-[13px] leading-relaxed mb-2 line-clamp-2",
                                  children: e.jsx(Gr, { children: x._snippet }),
                                }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] font-black text-stone-800 bg-stone-100 px-2 py-1 rounded-md uppercase tracking-widest",
                                    children:
                                      ((v = ad[x.appId]) == null
                                        ? void 0
                                        : v.zh) || x.appId,
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] font-bold text-stone-400 flex items-center gap-1",
                                    children: [
                                      e.jsx(ui, { size: 10 }),
                                      " ",
                                      x.duration,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          x.id,
                        );
                      }),
                    ],
                  }),
                !o &&
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] font-black text-stone-400 tracking-[0.2em] uppercase mb-3 mt-2",
                        children: "Popular",
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          "情侣头像",
                          "群聊",
                          "邮件",
                          "回忆封存",
                          "设置",
                        ].map((x, y) =>
                          e.jsx(
                            "span",
                            {
                              role: "button",
                              tabIndex: 0,
                              onClick: () => c(x),
                              onKeyDown: (v) => v.key === "Enter" && c(x),
                              className:
                                "px-4 py-2.5 bg-white text-stone-700 text-[13px] font-bold rounded-xl border border-stone-200 cursor-pointer hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all help-app-shadow-sm help-app-animate-reveal",
                              style: { animationDelay: `${y * 0.05}s` },
                              children: x,
                            },
                            x,
                          ),
                        ),
                      }),
                    ],
                  }),
                o &&
                  g.length === 0 &&
                  e.jsxs("div", {
                    className: "text-center pt-16",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-300 mx-auto mb-4",
                        children: e.jsx(pr, { size: 24, strokeWidth: 1.5 }),
                      }),
                      e.jsx("p", {
                        className: "text-lg font-bold text-stone-800 mb-1",
                        children: "No Results",
                      }),
                      e.jsx("p", {
                        className: "text-stone-500 font-medium text-xs",
                        children: "换个关键词试试看",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: `absolute inset-0 bg-[#F9F8F6] z-40 flex flex-col transition-transform duration-500 cubic-bezier(0.2, 0.8, 0.2, 1) ${d ? "translate-y-0" : "translate-y-full"}`,
        children: [
          e.jsxs("div", {
            className:
              "absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-[#F9F8F6] to-transparent",
            style: { paddingTop: "calc(36px + env(safe-area-inset-top, 0px))" },
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => u(null),
                className:
                  "w-11 h-11 rounded-full help-app-glass-heavy flex items-center justify-center text-stone-800 hover:scale-105 active:scale-95 transition-all duration-300 help-app-shadow-soft",
                children: e.jsx(Kn, {
                  size: 24,
                  className: "rotate-90 ml-[-2px]",
                  strokeWidth: 2.5,
                }),
              }),
              e.jsx("div", {
                className:
                  "w-11 h-11 rounded-full help-app-glass-heavy flex items-center justify-center text-stone-800 hover:scale-105 active:scale-95 transition-all duration-300 help-app-shadow-soft",
                children: e.jsx(Yl, { size: 18, strokeWidth: 2 }),
              }),
            ],
          }),
          d &&
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto help-app-no-scrollbar pb-32",
              children: [
                e.jsxs("div", {
                  className:
                    "relative w-full aspect-[4/5] max-h-[60vh] bg-stone-200 overflow-hidden",
                  children: [
                    e.jsx("img", {
                      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
                      alt: "",
                      className: "w-full h-full object-cover",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-[#F9F8F6]/40 to-transparent",
                    }),
                    d.type === "video" &&
                      e.jsx("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center pb-20",
                        children: e.jsx("div", {
                          className:
                            "w-20 h-20 rounded-full help-app-glass-heavy flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform cursor-pointer",
                          children: e.jsx(q2, {
                            size: 36,
                            strokeWidth: 1.5,
                            className: "ml-1 text-stone-900",
                          }),
                        }),
                      }),
                    e.jsxs("div", {
                      className: "absolute bottom-0 left-0 right-0 px-6 pb-8",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3 mb-4",
                          children: [
                            e.jsx("span", {
                              className:
                                "px-3 py-1.5 rounded-xl bg-stone-900 text-white text-[10px] font-black tracking-widest uppercase shadow-sm",
                              children: d.tags[0],
                            }),
                            e.jsxs("span", {
                              className:
                                "px-3 py-1.5 rounded-xl bg-white/80 backdrop-blur-md text-stone-800 text-[10px] font-black tracking-widest uppercase shadow-sm flex items-center gap-1.5",
                              children: [
                                e.jsx(ui, { size: 12 }),
                                " ",
                                d.duration,
                              ],
                            }),
                          ],
                        }),
                        e.jsx("h1", {
                          className:
                            "text-[36px] font-black text-stone-900 leading-[1.1] tracking-tight",
                          children: d.title,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "px-6 -mt-2 relative z-10 pb-12",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[17px] font-semibold text-stone-700 leading-relaxed mb-8 border-l-[3px] border-amber-400/70 pl-4",
                      children: e.jsx(Gr, { children: d.desc || "" }),
                    }),
                    e.jsx("div", {
                      className: "max-w-none",
                      children: d.content
                        ? e.jsx("div", {
                            className:
                              "rounded-2xl bg-white/95 backdrop-blur-sm border border-stone-200/90 p-6 sm:p-9 shadow-[0_4px_28px_-6px_rgba(0,0,0,0.08)]",
                            children: e.jsx(OZ, { content: d.content }),
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("p", {
                                className: "text-stone-500 leading-loose",
                                children:
                                  "此处将展示该教程的完整正文与步骤。为了保持设计感，正文排版应采用较大的行距、优雅的字体和适当的段落间距。",
                              }),
                              e.jsxs("div", {
                                className:
                                  "my-8 p-6 bg-white rounded-[24px] help-app-shadow-soft border border-stone-100",
                                children: [
                                  e.jsx("h4", {
                                    className:
                                      "text-xl font-bold text-stone-900 mb-3",
                                    children: "Pro Tip",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-stone-500 text-sm leading-relaxed m-0",
                                    children:
                                      "你可以先在列表中浏览各应用分类，或通过底部搜索按钮查找特定关键词。",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-stone-500 leading-loose",
                                children:
                                  "后续可接入 Markdown 或富文本渲染器，支持图片、引用、代码块等丰富格式。",
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
  });
}
const Po = {
    paper: [
      { id: "rice", name: "宣纸", color: "#fcfcfc", texture: null },
      { id: "cream", name: "米黄", color: "#fdfbf0", texture: null },
      { id: "gray", name: "素灰", color: "#f5f5f5", texture: null },
      {
        id: "custom",
        name: "自定义",
        color: "#ffffff",
        texture: "none",
        isCustom: !0,
      },
    ],
    font: [
      { id: "song", name: "宋体", family: '"Noto Serif SC", "SimSun", serif' },
      { id: "kai", name: "楷体", family: '"KaiTi", "STKaiti", serif' },
      { id: "ming", name: "明体", family: '"PMingLiU", serif' },
    ],
  },
  UZ = 6e5,
  GZ = Cl;
function HZ(t) {
  return (t || []).map((s) => {
    const n = String(s.text ?? "");
    return s.sender === "me"
      ? { role: "user", content: n }
      : { role: "assistant", content: n };
  });
}
async function pc({
  apiConfig: t,
  contact: s,
  effectiveUser: n,
  messagesToApi: a,
  addApiLog: r,
  scene: i = "chat",
  timeoutMs: o,
  logScene: c,
}) {
  if (!(t != null && t.endpoint) || !(t != null && t.key))
    return "请先在设置中配置API。";
  const d =
      s && typeof s == "object"
        ? s
        : {
            id: "mail_unknown",
            name: "来信人",
            nickname: "来信人",
            setting: "",
          },
    u = n && typeof n == "object" ? n : {};
  let f = "";
  try {
    f = Ou(d, u, i, {}, [], [], [], "", !1, "", [], null, "", "", "", "", "");
  } catch {
    const y =
        (d == null ? void 0 : d.name) ||
        (d == null ? void 0 : d.nickname) ||
        "来信人",
      v =
        (u == null ? void 0 : u.realName) ||
        (u == null ? void 0 : u.name) ||
        "对方";
    f = `你是${y}。你正在给${v}写信或回复，请直接输出正文内容，不要输出JSON或代码块。`;
  }
  const p = HZ(a),
    m = [{ role: "system", content: f }, ...p],
    h = o ?? (i === "system_generation" ? UZ : GZ),
    g = c ?? (i === "system_generation" ? "mail_system_generation" : "mail");
  try {
    return await cr(
      t,
      { messages: m, temperature: t.temperature ?? 0.7 },
      {
        addApiLog: r,
        logScene: g,
        logContactName: (s == null ? void 0 : s.name) ?? "",
        timeoutMs: h,
      },
    );
  } catch {
    return "抱歉，我暂时无法回复。";
  }
}
const GC = l.createContext(),
  WZ = ({ children: t, onClose: s }) => {
    const {
        apiConfig: n,
        addApiLog: a,
        user: r,
        chats: i,
        getRoleBoundUser: o,
        contactsPublic: c,
      } = vn(),
      [d, u] = l.useState("cover"),
      [f, p] = l.useState(null),
      [m, h] = l.useState(null),
      [g, x] = l.useState(null),
      [y, v] = l.useState([]),
      [b, N] = l.useState({}),
      [w, _] = l.useState([]),
      [A, k] = l.useState([]),
      [C, M] = l.useState(!1),
      [E, S] = l.useState(null),
      [j, T] = l.useState([]),
      [I, L] = l.useState(100),
      [B, F] = l.useState(1),
      [D, $] = l.useState(0),
      [P, z] = l.useState(!1),
      [O, Z] = l.useState([]),
      [K, q] = l.useState(null),
      [V, ne] = l.useState([]),
      [le, ie] = l.useState({ Tech: 0, Magic: 0, Antique: 0 }),
      [X, je] = l.useState(!1),
      xe = l.useRef([]),
      ye = l.useRef(!1),
      R = l.useRef(!1);
    l.useEffect(() => {
      xe.current = A;
    }, [A]);
    const oe = () => {
        S(null);
      },
      [ee, H] = l.useState({
        paper: Po.paper[0],
        font: Po.font[0],
        layout: "vertical",
        lineHeight: 1.5,
        letterSpacing: 0.1,
        paragraphSpacing: 1.5,
        fontSize: 1.05,
        fontColor: "#2c2c2c",
        customPaperUrl: null,
        customPaperId: null,
        customFonts: [],
      });
    (l.useEffect(() => {
      v(Array.isArray(c) ? c.filter((Pe) => !Kl(Pe)) : []);
    }, [c]),
      l.useEffect(() => {
        (async () => {
          var ut;
          try {
            const _t = await Rr("theme");
            if (_t && !R.current && !ye.current) {
              ye.current = !0;
              let Qe = {
                layout: "vertical",
                lineHeight: 1.5,
                letterSpacing: 0.1,
                paragraphSpacing: 1.5,
                fontSize: 1.05,
                fontColor: "#2c2c2c",
                customPaperUrl: null,
                customPaperId: null,
                customFonts: [],
                ..._t,
                paper: (() => {
                  const me = _t.paper;
                  if (!me) return Po.paper[0];
                  const jt = Po.paper.find((Gt) => Gt.id === (me.id || me));
                  return jt
                    ? { ...me, ...jt }
                    : typeof me == "object"
                      ? me
                      : Po.paper[0];
                })(),
                font: (() => {
                  const me = _t.font;
                  if (!me) return Po.font[0];
                  const Gt = [...Po.font, ...(_t.customFonts || [])].find(
                    (Pt) => Pt.id === (me.id || me),
                  );
                  return Gt
                    ? { ...me, ...Gt }
                    : typeof me == "object"
                      ? me
                      : Po.font[0];
                })(),
              };
              const Ye = async (me) => {
                if (!(me != null && me.fontBlobId) || !me.isCustom) return me;
                try {
                  const jt = await _4(me.fontBlobId);
                  if (jt) return { ...me, url: URL.createObjectURL(jt) };
                } catch {}
                return me;
              };
              (ut = Qe.customFonts) != null &&
                ut.length &&
                (Qe.customFonts = await Promise.all(Qe.customFonts.map(Ye)));
              const Ze = [...Po.font, ...(Qe.customFonts || [])],
                Ue = Qe.font;
              if (Ue) {
                const me = Ze.find((jt) => jt.id === (Ue.id || Ue));
                Qe.font = me ? { ...Ue, ...me } : await Ye(Ue);
              }
              if (Qe.customPaperId)
                try {
                  const me = await _4(Qe.customPaperId);
                  me && (Qe.customPaperUrl = URL.createObjectURL(me));
                } catch {}
              H(Qe);
            }
            const Ee = await Rr("letters");
            Ee && N(Ee);
            const fe = await Rr("inboxLetters");
            if (fe && Array.isArray(fe)) {
              const Qe = Array.from(
                new Map(fe.map((Ye) => [Ye.id, Ye])).values(),
              );
              _(Qe);
            }
            const He = await Rr("pendingLetters");
            if (He && Array.isArray(He)) {
              const Qe = He.map((Ze) => ({
                  ...Ze,
                  deliverTime:
                    Ze.deliverTime != null
                      ? Number(Ze.deliverTime)
                      : Ze.deliverTime,
                })).filter((Ze) => Ze.id),
                Ye = new Map(Qe.map((Ze) => [Ze.id, Ze]));
              k(Array.from(Ye.values()));
            }
            const Ie = await Rr("appraiser_inventory");
            Ie && T(Ie);
            const Ce = await Rr("appraiser_coins");
            Ce && L(Ce);
            const Re = await Rr("appraiser_level");
            Re && F(Re);
            const De = await Rr("appraiser_exp");
            De && $(De);
            const at = await Rr("appraiser_history");
            at && Z(at);
            const ft = await Rr("market_news");
            ft && q(ft);
            const vt = await Rr("market_commissions");
            vt && ne(vt);
            const Oe = await Rr("market_reputation");
            Oe && ie(Oe);
          } catch {
          } finally {
            je(!0);
          }
        })();
      }, []),
      l.useEffect(() => {
        X && Sa("appraiser_inventory", j);
      }, [j, X]),
      l.useEffect(() => {
        X && Sa("appraiser_coins", I);
      }, [I, X]),
      l.useEffect(() => {
        X && Sa("appraiser_level", B);
      }, [B, X]),
      l.useEffect(() => {
        X && Sa("appraiser_exp", D);
      }, [D, X]),
      l.useEffect(() => {
        X && Sa("appraiser_history", O);
      }, [O, X]),
      l.useEffect(() => {
        X && Sa("market_news", K);
      }, [K, X]),
      l.useEffect(() => {
        X && Sa("market_commissions", V);
      }, [V, X]),
      l.useEffect(() => {
        X && Sa("market_reputation", le);
      }, [le, X]),
      l.useEffect(() => {
        X && Sa("pendingLetters", A);
      }, [A, X]));
    const Y = (Pe) => {
        (p(d), u(Pe));
      },
      U = {
        id: "chrono_appraiser_spirit",
        name: "时空鉴定系统",
        nickname: "System",
        setting: "你是一个负责生成异世界物品数据的系统核心。",
      },
      ce = async () => {
        const Pe = `
你是一个连接多元宇宙的“时空黑市”情报官。请生成今天的市场行情新闻。
新闻应该简短、神秘，并能影响特定类型物品的价格。

物品类型(Tag)包括：
- Tech (科技/赛博)
- Magic (魔法/奇幻)
- Antique (古董/历史)
- Bio (生物/有机)
- Abstract (抽象/概念)

请生成 JSON 格式：
{
  "headline": "新闻标题（如：第7维度发生以太风暴，魔法物品魔力激增！）",
  "content": "简短的新闻内容（50字以内）。",
  "trends": [
    { "tag": "Magic", "multiplier": 1.5, "reason": "魔力激增" },
    { "tag": "Tech", "multiplier": 0.8, "reason": "芯片短缺" }
  ]
}
`;
        try {
          const ut = await pc({
            apiConfig: n,
            contact: U,
            effectiveUser: r,
            messagesToApi: [{ sender: "me", text: Pe }],
            addApiLog: a,
            scene: "chat",
          });
          let _t = null;
          try {
            const Ee = ut.match(/\{[\s\S]*\}/);
            Ee ? (_t = JSON.parse(Ee[0])) : (_t = JSON.parse(ut));
          } catch {
            _t = {
              headline: "时空乱流趋于平稳",
              content: "今日市场波动较小，适合平稳交易。",
              trends: [],
            };
          }
          (q({ date: new Date().toLocaleDateString(), ..._t }), await pe());
        } catch {}
      },
      pe = async () => {
        const Pe = ["Tech", "Magic", "Antique"],
          ut = Array(3)
            .fill(0)
            .map((_t, Ee) => ({
              id: Date.now() + Ee,
              faction: Pe[Ee % Pe.length],
              npc: `Agent ${String.fromCharCode(65 + Ee)}`,
              description: `急需一件${Pe[Ee % Pe.length]}类的物品用于研究。`,
              requirement: { tag: Pe[Ee % Pe.length], minRarity: "N" },
              reward: { coins: 100 + Math.floor(Math.random() * 200), exp: 50 },
            }));
        ne(ut);
      },
      se = (Pe, ut) => {
        var at, ft;
        const _t = V.find((vt) => vt.id === Pe),
          Ee = j.find((vt) => vt.id === ut);
        if (!_t || !Ee) return { success: !1, message: "无效的请求" };
        const fe = { N: 1, R: 2, SR: 3, SSR: 4 },
          He = fe[Ee.rarity] || 1,
          Ie = fe[_t.requirement.minRarity] || 1,
          Ce = (
            Ee.name +
            Ee.description +
            (((at = Ee.tags) == null ? void 0 : at.join("")) || "") +
            (((ft = Ee.keywords) == null ? void 0 : ft.join("")) || "")
          ).toLowerCase(),
          Re = _t.requirement.tag.toLowerCase();
        return Ce.includes(Re)
          ? He < Ie
            ? {
                success: !1,
                message: `物品稀有度过低 (需: ${_t.requirement.minRarity})`,
              }
            : (T((vt) => vt.filter((Oe) => Oe.id !== ut)),
              L((vt) => vt + _t.reward.coins),
              ie((vt) => ({ ...vt, [_t.faction]: (vt[_t.faction] || 0) + 10 })),
              ne((vt) => vt.filter((Oe) => Oe.id !== Pe)),
              { success: !0, message: `委托完成！收入 +${_t.reward.coins}` })
          : {
              success: !1,
              message: `物品属性不符 (需: ${_t.requirement.tag})`,
            };
      },
      Te = async (Pe, ut) => {
        z(!0);
        try {
          const _t = `
【时空合成系统 - 拟人化剧场模式】
玩家将以下两个“存在”放入了合成台，试图观测它们相遇后的命运：

角色/物品 A: ${Pe.name}
- 原型: ${Pe.description}
- 背景/原主: ${Pe.owner || "未知"} (${Pe.owner_story ? Pe.owner_story.slice(0, 100) : "无记录"})

角色/物品 B: ${ut.name}
- 原型: ${ut.description}
- 背景/原主: ${ut.owner || "未知"} (${ut.owner_story ? ut.owner_story.slice(0, 100) : "无记录"})

请发挥极致的想象力，将这两个物品进行**拟人化**（如果它们本身不是生物），并演绎它们相遇后的故事。
它们可能是失散多年的恋人、跨越维度的宿敌、或者是相依为命的流浪者。
新的物品是它们命运交织后的**结晶**或**共同形态**。

返回严格的 JSON 格式（无 Markdown 标记）：
{
  "success": true,
  "name": "命运结晶名称",
  "icon": "emoji",
  "rarity": "R" | "SR" | "SSR",
  "description": "对这个结合体的诗意描述（30-50字）。",
  "relationship": "简短定义它们的关系（如：相爱相杀、互为镜像、主仆契约等）。",
  "story": "一段沉浸式的开场剧情（300-500字）。
要求：
1. 必须拟人化。赋予 Item A 和 Item B 性格、台词和心理活动。
2. 描写它们在时空缝隙中初次相遇/重逢的场景。不仅是物理碰撞，更是灵魂对话。
3. 设置一个悬念或冲突，等待玩家介入（不要写完结的故事，这是一个互动剧场的开端）。
4. 文笔要极具画面感，可以是赛博朋克、古风玄幻或现代都市风格。",
  "tags": ["Relationship", "Drama", "Story"]
}
`,
            Ee = await pc({
              apiConfig: n,
              contact: U,
              effectiveUser: r,
              messagesToApi: [{ sender: "me", text: _t }],
              addApiLog: a,
              scene: "chat",
            });
          let fe = null;
          try {
            const Ie = Ee.match(/\{[\s\S]*\}/);
            Ie ? (fe = JSON.parse(Ie[0])) : (fe = JSON.parse(Ee));
          } catch {
            fe = {
              success: !1,
              name: "未知的灰烬",
              icon: "🌫️",
              rarity: "N",
              description: "合成失败的产物。",
              tags: ["Abstract"],
            };
          }
          const He = {
            id: Date.now().toString(),
            status: "identified",
            ...fe,
            parents: [Pe, ut],
            timestamp: Date.now(),
          };
          return (
            T((Ie) => {
              const Ce = Ie.filter((Re) => Re.id !== Pe.id && Re.id !== ut.id);
              return [He, ...Ce];
            }),
            He
          );
        } catch {
          const Ee = {
            id: Date.now().toString(),
            status: "identified",
            name: "合成残渣",
            icon: "⚫",
            rarity: "N",
            description:
              "合成过程中发生了未知的时空坍缩（可能是由于神经网络连接不稳定）。",
            story:
              "在这个时间线上，奇迹没有发生。只留下了一团无法解析的混沌物质。",
            tags: ["Failure"],
            timestamp: Date.now(),
          };
          return (
            T((fe) => {
              const He = fe.filter((Ie) => Ie.id !== Pe.id && Ie.id !== ut.id);
              return [Ee, ...He];
            }),
            Ee
          );
        } finally {
          z(!1);
        }
      },
      ke = async () => {
        if (I < 10) return { error: "Not enough coins" };
        (L((He) => He - 10), z(!0));
        const Pe = [
            "古代中国 (如唐宋元明清，古风)",
            "民国时期 (1912-1949，上海滩/北平)",
            "现代社会 (2000-2025，写字楼/便利店/地铁/校园)",
            "近未来 (2050-2100，轻度赛博)",
            "西方中世纪 (剑与魔法/城堡)",
            "维多利亚时代 (蒸汽朋克/雾都)",
            "末日废土 (核爆后/辐射)",
            "抽象维度 (梦境/情绪/数据流)",
            "史前时代 (恐龙/原始人)",
            "童话世界 (会说话的动物/魔法物品)",
          ],
          ut = [
            "温暖治愈",
            "悲伤遗憾",
            "悬疑惊悚",
            "幽默荒诞",
            "热血励志",
            "平淡日常中的奇迹",
          ],
          _t = Pe[Math.floor(Math.random() * Pe.length)],
          Ee = ut[Math.floor(Math.random() * ut.length)],
          fe = `
你现在是【时空鉴定所】的系统核心。请从无限多元宇宙的时间流中截获一个漂流的“存在”。

本次探索锁定的时空坐标如下（**必须**严格遵守此设定）：
【时代/背景】：${_t}
【情感基调】：${Ee}

请根据上述锁定的背景，生成一个极具该时代特色、符合该基调的物品。
不要总是生成神秘的、科幻的东西！如果是现代社会，它可以是一张过期的电影票、一个蓝牙耳机；如果是古代中国，它可以是一把断裂的木梳、一个生锈的铜钱。
要体现出**生活气息**和**人情味**，或者是该时空特有的**历史厚重感**。

这个“存在”不一定是实物，它可以是：
1. 具体的物品（如：生锈的剑柄、打了一半的毛衣、一片发光的羽毛、一只破损的芯片）。
2. 抽象的概念或情绪（如：被遗忘的童年、一公斤的悲伤、夏天的风）。
3. 某种命运的具象化（如：一段未寄出的遗言、战争结束那天的雨水）。

原持有者（owner）不一定是人类！它可以是：
- 具体的某个人（如：深夜加班的程序员、长安城的卖炭翁）。
- 动植物（如：一只流浪猫、一棵活了千年的古树）。
- 非生物（如：一个有了自我意识的扫地机器人、一个幽灵）。

稀有度概率：N(50%), R(30%), SR(15%), SSR(5%)。

要求生成严格的 JSON 格式数据（不要包含Markdown代码块标记，只返回纯JSON），所有文本内容必须使用中文：
{
  "type": "box" | "bag" | "capsule" | "fragment", // 包裹外观类型，抽象物品可以用 fragment
  "condition": "dirty" | "wet" | "rusty" | "encrusted" | "ethereal" | "glowing", // 状态，抽象物品可以用 ethereal(虚无) 或 glowing
  "keywords": ["线索词1", "线索词2", "线索词3"], // 3个线索，对于抽象物品，可以是侧面描写（如“咸涩的味道”、“冰冷的触感”）
  "name": "物品/概念全名",
  "icon": "emoji", // 最符合意境的 emoji
  "rarity": "N" | "R" | "SR" | "SSR",
  "description": "鉴定后的外观/形态描述。语言风格请根据来源调整（古风、科幻、童话、散文等）。",
  "origin": "来源时空坐标（请发挥创意，例如：公元1099年 十字军东征路上的枯井、第7维度·色彩尽头、2004年·放学后的操场...）",
  "owner": "原持有者名字或代号（如：流浪猫'花卷'、编号89757、森林之灵...）",
  "owner_story": "原持有者的人物/生物小传（至少300字）。这是一个独立且完整的故事，必须使用第三人称。请像写一篇短篇小说或特写文章那样，分段落撰写（段落间使用 \\n\\n 分隔）。如果是动物或非人生物，请以它们的视角或关于它们的传说来写。详细描述其身份背景、性格（或习性）、生命轨迹以及最终命运。要有血有肉，通过这个个体折射出那个时空的独特风貌。",
  "memory_fragment": "一段第一人称的物品残留记忆（30-60字）。使用极致的感官描写（视觉、听觉、触觉、嗅觉），让玩家仿佛身临其境感受那一刻的场景。",
  "composition": "物质构成（极具创意的成分，例如：橡木+一丝执念、100%纯度的月光、生锈的铁+干涸的血迹...）",
  "story": "一段极具感染力的短篇故事（200-400字）。这是物品本身的故事，侧重于它所经历的那个核心场景。请使用第三人称。不要只是概括，而是要讲述一个完整的、有画面感的场景。要有起承转合，有环境氛围描写，有情感波动。它可以是关于离别、遗憾、希望、残酷的命运或温暖的瞬间。让读者读完后能感到意难平或深深的共鸣。这部分是物品的“记忆”。",
  "value": number, // 估值 (N:10-99, R:100-499, SR:500-1999, SSR:2000-9999)
  "options": ["干扰选项1", "干扰选项2", "正确选项"], // 3个选项
  "answer": "正确选项"
}
`;
        try {
          const He = await pc({
            apiConfig: n,
            contact: U,
            effectiveUser: r,
            messagesToApi: [{ sender: "me", text: fe }],
            addApiLog: a,
            scene: "chat",
          });
          let Ie = null;
          try {
            const Re = He.match(/\{[\s\S]*\}/);
            Re ? (Ie = JSON.parse(Re[0])) : (Ie = JSON.parse(He));
          } catch {
            Ie = {
              type: "box",
              condition: "dirty",
              keywords: ["金属", "滴答声", "旧"],
              name: "旧怀表",
              icon: "🕰️",
              rarity: "N",
              description: "一个布满灰尘的旧盒子。",
              story: "这是一个普通的时间记录工具。",
              owner: "未知旅人",
              owner_story:
                "一个迷失在时间缝隙中的旅人，关于他的记录已不可考...",
              sender: "Unknown",
              world: "Earth",
              value: 20,
              options: ["指南针", "旧怀表", "计步器"],
              answer: "旧怀表",
            };
          }
          const Ce = {
            id: Date.now().toString(),
            status: "unidentified",
            ...Ie,
            timestamp: Date.now(),
          };
          return (T((Re) => [Ce, ...Re]), Ce);
        } catch {
          const Ie = {
            id: Date.now().toString(),
            status: "unidentified",
            type: "fragment",
            condition: "ethereal",
            keywords: ["离线", "数据", "残留"],
            name: "以太碎片",
            icon: "🧊",
            rarity: "N",
            description: "系统在无法连接到高维时空时捕获的低维投影。",
            story: "当时空网络断开时，只有这些微弱的信号还能被捕捉到。",
            origin: "Localhost",
            owner: "System",
            timestamp: Date.now(),
          };
          return (T((Ce) => [Ie, ...Ce]), Ie);
        } finally {
          z(!1);
        }
      },
      W = (Pe, ut) => {
        T((_t) =>
          _t.map((Ee) => {
            if (Ee.id === Pe) {
              const fe = Ee.answer
                  ? Ee.answer === ut
                  : Ee.name.includes(ut) ||
                    ut.includes(Ee.name) ||
                    ut === Ee.name,
                He = {
                  ...Ee,
                  status: "identified",
                  identifiedAt: Date.now(),
                  isPerfect: fe,
                };
              return (
                fe &&
                  $((Ie) => {
                    const Ce = Ie + (Ee.value || 10),
                      Re = Math.floor(Ce / 1e3) + 1;
                    return (Re > B && F(Re), Ce);
                  }),
                Z((Ie) => (Ie.find((Ce) => Ce.id === Pe) ? Ie : [He, ...Ie])),
                He
              );
            }
            return Ee;
          }),
        );
      },
      ue = (Pe) => {
        const ut = j.find((_t) => _t.id === Pe);
        if (ut) {
          let _t = 1;
          if (K && K.trends) {
            const fe = (ut.name + ut.description).toLowerCase();
            K.trends.forEach((He) => {
              fe.includes(He.tag.toLowerCase()) && (_t *= He.multiplier);
            });
          }
          const Ee = Math.floor((ut.value || 10) * _t);
          return (
            L((fe) => fe + Ee),
            T((fe) => fe.filter((He) => He.id !== Pe)),
            Ee
          );
        }
        return 0;
      },
      re = (Pe) => {
        const ut = j.find((_t) => _t.id === Pe);
        (ut && ut.value && L((_t) => _t + Math.floor(ut.value * 0.1)),
          T((_t) => _t.filter((Ee) => Ee.id !== Pe)));
      },
      he = async (Pe, ut) => {
        const _t = [
            "侧重心理描写：深入角色的内心世界，描写他们的犹豫、渴望或恐惧。",
            "侧重环境氛围：通过光影、声音、气味来烘托当前场景的独特气氛。",
            "侧重动作细节：详细描写角色的微表情、肢体语言和物理互动。",
            "侧重哲理隐喻：用诗意的语言将当前的事件与更大的命运或时空概念联系起来。",
            "侧重对话张力：通过言语交锋或沉默的留白来体现角色间的关系。",
            "意识流风格：打破常规的时间顺序，穿插闪回或幻觉。",
          ],
          Ee = [
            "无需额外转折，自然推进。",
            "无需额外转折，自然推进。",
            "突然发生了一个微小的意外（如物品掉落、天气突变、噪音干扰）。",
            "角色突然回忆起关于'原主'的一个模糊片段。",
            "周围的时空场出现了一瞬间的不稳定波动。",
            "角色对玩家的意图产生了一丝误解或特别的兴趣。",
          ],
          fe = _t[Math.floor(Math.random() * _t.length)],
          He = Ee[Math.floor(Math.random() * Ee.length)],
          Ce = `
你是一个高级互动小说系统的核心 AI (Dungeon Master)。
我们正在共同创作一个关于“拟人化物品”在时空缝隙中的故事。

【当前剧情上下文】：
${Pe.slice(-10).map((Re) =>
  Re.type === "user"
    ? `玩家: ${Re.text}`
    : Re.type === "narrative"
      ? `旁白/剧情: ${Re.text}`
      : `系统: ${Re.text}`,
).join(`
`)}

【玩家的最新行动/回应】：
"${ut}"

【本次生成的导演指令】（必须严格遵守）：
1. **叙事风格**：${fe}
2. **剧情扰动**：${He}
3. **格式要求**：
   - **严禁**使用列表、要点（1. 2. 3.）或分条陈述。
   - 必须像正规的小说/散文一样，使用**自然段落**。
   - 段落之间用 "\\n\\n" 分隔。
   - 就像在写一本书的某一章，而不是在写报告。

【内容要求】：
- **字数**：必须充实，不少于 300 字。不要偷懒。
- **沉浸感**：调动读者的感官（视觉、听觉、触觉）。不要只写“发生了什么”，要写“感觉到了什么”。
- **交互性**：如果玩家试图对话，请让角色自然回应。如果玩家试图行动，请生动描述结果。
- 不要随意结束故事，除非玩家明确想要结束或达成了某种终局。
- 返回的内容不要包含 "系统:" 或 "AI:" 前缀，直接返回纯净的剧情文本。

返回 JSON 格式：
{
  "text": "生成的剧情文本（纯文本，段落式）",
  "isEnd": false // 是否达到故事结局
}
`;
        try {
          const Re = await pc({
            apiConfig: n,