                              className:
                                "text-[0.85rem] font-normal text-[#666] mb-1.5 flex items-center",
                              children: [
                                "随风",
                                e.jsx("span", {
                                  className:
                                    "flex-1 h-px bg-gradient-to-r from-[#eee] to-transparent ml-2.5",
                                }),
                              ],
                            }),
                            e.jsx("ul", {
                              className: "list-none p-0 m-0",
                              children: j.abandoned.map((T) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className:
                                      "mb-1.5 flex items-center gap-2 min-w-0",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "flex-1 min-w-0 text-left text-[0.95rem] leading-normal text-[#bbb] line-through cursor-pointer py-0.5 border-0 border-b border-transparent hover:border-[#bbb] transition-colors break-words bg-transparent p-0 font-inherit rounded-none shadow-none",
                                        onClick: () => {
                                          (g(T), f("wishDetail"));
                                        },
                                        children: T.title,
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "shrink-0 text-[11px] text-red-600/85 px-1.5 py-0.5 rounded active:opacity-75",
                                        onClick: () => A(T.id, "abandoned"),
                                        children: "删除",
                                      }),
                                    ],
                                  },
                                  T.id,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
              e.jsx("div", {
                className: "shrink-0 px-6 pt-2 pb-3 bg-white",
                children: e.jsx("p", {
                  className:
                    "text-center text-[10px] leading-tight text-[#bbb] mb-0",
                  children: "凡是过往 · 皆为序章",
                }),
              }),
            ],
          }),
        }),
      });
    }
    return e.jsxs("div", {
      className: `h-full w-full flex flex-col bg-[#fcfcfc] text-[#1a1a1a] overflow-hidden ${M}`,
      style: E,
      children: [
        e.jsxs("div", {
          className:
            "px-6 pb-3 flex items-center gap-3 border-b border-black/5 shrink-0",
          style: S,
          children: [
            e.jsx("button", {
              type: "button",
              onClick: s,
              className: "p-2 -ml-2 text-[#1a1a1a]/60",
              "aria-label": "返回",
              children: e.jsx(un, { size: 22 }),
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className:
                    "text-[10px] uppercase tracking-[0.25em] text-black/40",
                  children: "心愿清单",
                }),
                e.jsx("h1", {
                  className: "text-xl italic font-light",
                  children: "心愿卡片",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto px-6 py-4 space-y-3 pb-24",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: k,
              disabled: x,
              className:
                "w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-black/15 rounded-xl text-sm tracking-widest text-black/70 hover:bg-black/5 transition-colors disabled:opacity-55 disabled:pointer-events-none",
              children: [
                x
                  ? e.jsx(Sn, { size: 18, className: "animate-spin shrink-0" })
                  : e.jsx(ea, { size: 18 }),
                x ? "正在生成…" : "添加新心愿",
              ],
            }),
            c.length === 0 && !x
              ? e.jsx("p", {
                  className: "text-center text-sm text-black/40 pt-8",
                  children: "还没有心愿卡片，点击上方生成一辑心愿便签",
                })
              : e.jsx("ul", {
                  className: "space-y-2 list-none p-0 m-0",
                  children: c.map((j) => {
                    const T =
                      j.done.length + j.doing.length + j.abandoned.length;
                    return e.jsxs(
                      "li",
                      {
                        className: "flex items-stretch gap-2",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => {
                              (m(j.id), f("note"));
                            },
                            className:
                              "flex-1 min-w-0 text-left px-3.5 py-2.5 rounded-xl bg-white border border-black/8 shadow-sm hover:shadow-md transition-shadow",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "font-medium text-[0.95rem] leading-snug",
                                children: [
                                  "心愿辑 · ",
                                  j.pastYear,
                                  " → ",
                                  j.presentYear,
                                ],
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[11px] text-black/45 mt-1 tracking-wider",
                                children: [
                                  "已偿 ",
                                  j.done.length,
                                  " · 正在 ",
                                  j.doing.length,
                                  " · 随风 ",
                                  j.abandoned.length,
                                  T > 0
                                    ? ` · ${String(j.createdAt).slice(0, 10)}`
                                    : "",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => _(j.id),
                            className:
                              "shrink-0 self-center px-3 py-2 rounded-lg text-[12px] text-red-600/90 hover:bg-red-50 active:opacity-80",
                            children: "删除",
                          }),
                        ],
                      },
                      j.id,
                    );
                  }),
                }),
          ],
        }),
      ],
    });
  },
  Qi = {
    enter: (t) => ({ scale: t > 0 ? 1.05 : 0.95, opacity: 0, zIndex: 1 }),
    center: {
      scale: 1,
      opacity: 1,
      zIndex: 0,
      transition: {
        scale: { type: "spring", stiffness: 500, damping: 30, mass: 1 },
        opacity: { duration: 0.2, ease: "easeOut" },
      },
    },
    exit: (t) => ({
      scale: t > 0 ? 0.95 : 1.05,
      opacity: 0,
      zIndex: 0,
      transition: {
        scale: { type: "spring", stiffness: 500, damping: 30, mass: 1 },
        opacity: { duration: 0.2, ease: "easeIn" },
      },
    }),
  },
  JG = ({
    onClose: t,
    apiConfig: s,
    initialTracePayload: n,
    onConsumeTracePayload: a,
    showPhoneCase: r = !1,
    caseSize: i = null,
    fontConfig: o = { type: "default" },
  }) => {
    const { contactsPublic: c } = vn(),
      d = Array.isArray(c) ? c.filter((w) => !Kl(w)) : [],
      [u, f] = l.useState("list"),
      [p, m] = l.useState(null),
      [h, g] = l.useState(0),
      [x, y] = l.useState(null);
    l.useEffect(() => {
      if (!(n != null && n.contactId) || !(d != null && d.length)) return;
      const w = d.find((_) => _.id === n.contactId);
      w && (m(w), f("trace"), g(1), y(n.pageIndex ?? 0), a && a());
    }, [
      n == null ? void 0 : n.contactId,
      n == null ? void 0 : n.pageIndex,
      d,
      a,
    ]);
    const v = (w) => {
        const _ = {
            list: 0,
            gate: 1,
            mind: 2,
            diary: 3,
            trace: 3,
            plan: 3,
            browser: 3,
            mood: 3,
            dream: 3,
            music: 3,
            wallet: 3,
            pastSelf: 3,
            wishList: 3,
          },
          A = _[u] || 0,
          k = _[w] || 0;
        (g(k > A ? 1 : -1), f(w));
      },
      b = () => {
        u === "mind" || u === "gate"
          ? v("list")
          : u !== "list"
            ? v("mind")
            : t();
      },
      N = u === "list" ? "bg-black" : "bg-[#fcfcfc]";
    return e.jsxs("div", {
      className: `h-full w-full overflow-hidden relative transition-colors duration-500 ${N}`,
      children: [
        e.jsxs(Os, {
          initial: !1,
          custom: h,
          children: [
            u === "list" &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(MG, {
                    contacts: d,
                    onSelect: (w) => {
                      (m(w), v("gate"));
                    },
                    onClose: t,
                  }),
                },
                "list",
              ),
            u === "gate" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(DG, {
                    contact: p,
                    onUnlock: () => v("mind"),
                    onBack: () => v("list"),
                  }),
                },
                "gate",
              ),
            u === "mind" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(
                    TG,
                    {
                      contact: p,
                      onBack: () => v("list"),
                      onOpenDiary: () => v("diary"),
                      onOpenTrace: () => v("trace"),
                      onOpenPlan: () => v("plan"),
                      onOpenBrowser: () => v("browser"),
                      onOpenMood: () => v("mood"),
                      onOpenDream: () => v("dream"),
                      onOpenMusic: () => v("music"),
                      onOpenWallet: () => v("wallet"),
                      onOpenPastSelfArchive: () => v("pastSelf"),
                      onOpenWishList: () => v("wishList"),
                      apiConfig: s,
                    },
                    p.id,
                  ),
                },
                "mind",
              ),
            u === "wallet" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(OG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "wallet",
              ),
            u === "pastSelf" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(PG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "pastSelf",
              ),
            u === "wishList" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(VG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                    fontConfig: o,
                  }),
                },
                "wishList",
              ),
            u === "music" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(LG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                    showPhoneCase: r,
                    caseSize: i,
                  }),
                },
                "music",
              ),
            u === "dream" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(CG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "dream",
              ),
            u === "mood" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(IG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "mood",
              ),
            u === "trace" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(TA, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                    initialPageIndex: x,
                    onConsumedInitialPageIndex: () => y(null),
                  }),
                },
                "trace",
              ),
            u === "plan" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(MA, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "plan",
              ),
            u === "diary" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(AG, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "diary",
              ),
            u === "browser" &&
              p &&
              e.jsx(
                We.div,
                {
                  custom: h,
                  variants: Qi,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  className: "absolute inset-0 h-full w-full",
                  children: e.jsx(ZO, {
                    contact: p,
                    onBack: () => v("mind"),
                    apiConfig: s,
                  }),
                },
                "browser",
              ),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-20 z-[100] flex items-center justify-center group pointer-events-none",
          children: e.jsx("button", {
            onClick: b,
            className:
              "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all duration-300 active:scale-95 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 pointer-events-auto",
            title: "返回主界面",
            children: e.jsx(vp, { size: 20, strokeWidth: 2 }),
          }),
        }),
      ],
    });
  },
  KG = ({ book: t, onClick: s }) => {
    var n, a, r, i, o;
    return e.jsxs(We.div, {
      layoutId: `book-${t.id}`,
      onClick: s,
      className: "relative aspect-[3/4] cursor-pointer group",
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      children: [
        e.jsx("div", {
          className:
            "absolute -inset-0.5 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
          style: {
            background: `linear-gradient(45deg, ${t.color}, transparent, ${t.color})`,
            opacity: 0.3,
          },
        }),
        e.jsxs("div", {
          className:
            "absolute inset-0 rounded-[20px] overflow-hidden bg-white/80 border border-white/40 shadow-xl backdrop-blur-md",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 opacity-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-110",
              style: {
                background: `radial-gradient(circle at 50% 0%, ${t.color}, transparent 70%)`,
              },
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]",
            }),
            e.jsxs("div", {
              className:
                "relative h-full p-6 flex flex-col justify-between z-10",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [
                    e.jsx("div", {
                      className: "flex items-center gap-2",
                      children: e.jsxs("span", {
                        className:
                          "text-[10px] font-mono text-black/30 tracking-widest",
                        children: ["NO.", t.id.slice(-3)],
                      }),
                    }),
                    (((n = t.boundContacts) == null ? void 0 : n.length) > 0 ||
                      ((a = t.boundGroupChats) == null ? void 0 : a.length) >
                        0) &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-1 px-2 py-1 rounded-full bg-black/5 border border-black/5 backdrop-blur-sm",
                        children: [
                          e.jsx(Xn, { size: 8, className: "text-black/60" }),
                          e.jsx("span", {
                            className: "text-[10px] font-mono text-black/60",
                            children:
                              (((r = t.boundContacts) == null
                                ? void 0
                                : r.length) || 0) +
                              (((i = t.boundGroupChats) == null
                                ? void 0
                                : i.length) || 0),
                          }),
                        ],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsx("div", {
                      className: "w-8 h-1 bg-black/10 rounded-full mb-4",
                      style: { backgroundColor: t.color },
                    }),
                    e.jsx("h3", {
                      className:
                        "text-[#1A1A1A] font-serif text-3xl leading-[1.1] tracking-tight mix-blend-multiply line-clamp-3 group-hover:text-black transition-all",
                      children: t.title,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex justify-between items-end border-t border-black/5 pt-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[10px] font-mono text-black/30 uppercase tracking-wider",
                          children: "Entries",
                        }),
                        e.jsx("span", {
                          className:
                            "text-sm font-medium text-black/80 font-mono",
                          children:
                            ((o = t.entries) == null ? void 0 : o.length) || 0,
                        }),
                      ],
                    }),
                    e.jsx(We.div, {
                      className:
                        "w-8 h-8 rounded-full bg-black/5 flex items-center justify-center border border-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-300",
                      children: e.jsx(wl, { size: 14 }),
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
  qG = ({
    book: t,
    isEditing: s,
    contacts: n,
    groupChats: a = [],
    onUpdateBook: r,
    onDeleteBook: i,
    onAddEntry: o,
    onSelectEntry: c,
    onToggleBinding: d,
    onToggleGroupBinding: u,
  }) => {
    var f, p;
    return e.jsxs(
      We.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        className: "min-h-full flex flex-col",
        children: [
          !s &&
            e.jsxs("div", {
              className: "mb-10 relative px-2",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -top-10 -right-10 w-64 h-64 border-[20px] border-black/[0.02] rounded-full pointer-events-none",
                }),
                e.jsx("div", {
                  className:
                    "absolute top-10 -right-20 w-48 h-48 border-[2px] border-black/[0.03] rounded-full pointer-events-none border-dashed",
                }),
                e.jsx("div", {
                  className:
                    "absolute left-0 top-0 bottom-0 w-px bg-black/[0.05]",
                }),
                e.jsxs("div", {
                  className: "relative z-10 pl-8",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-col gap-6 mb-8",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className: "w-2 h-2 bg-black/20 rounded-full",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[10px] font-mono text-black/40 tracking-[0.2em]",
                              children: ["ARCHIVE_ID: ", t.id.slice(-6)],
                            }),
                          ],
                        }),
                        e.jsx("h2", {
                          className:
                            "text-4xl font-serif text-[#1A1A1A] leading-tight tracking-tight",
                          children: t.title,
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-4 text-[10px] font-mono text-black/30",
                          children: [
                            e.jsxs("span", {
                              className: "px-2 py-1 bg-black/[0.03] rounded",
                              children: ["REV. ", new Date().getFullYear()],
                            }),
                            e.jsx("span", { children: "//" }),
                            e.jsxs("span", {
                              children: [
                                "ENTRIES: ",
                                ((f = t.entries) == null ? void 0 : f.length) ||
                                  0,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "relative p-6 bg-white/50 border border-black/[0.03] rounded-lg backdrop-blur-sm",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-0 w-1 h-full bg-black/[0.05]",
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm text-[#1A1A1A]/70 leading-relaxed font-light",
                          children: t.description || "暂无描述。",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          s &&
            e.jsx(We.div, {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              className:
                "bg-white p-6 rounded-[24px] mb-6 shadow-xl shadow-black/[0.02] border border-black/[0.03] overflow-hidden relative flex-shrink-0",
              children: e.jsxs("div", {
                className: "relative z-10",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 mb-6 text-black/30 uppercase text-xs font-bold tracking-widest",
                    children: [
                      e.jsx(H0, { size: 14 }),
                      e.jsx("span", { children: "设置" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[10px] text-black/30 font-bold uppercase tracking-widest ml-1 mb-2 block",
                            children: "标题",
                          }),
                          e.jsx("input", {
                            value: t.title,
                            onChange: (m) => r(t.id, { title: m.target.value }),
                            className:
                              "w-full p-4 bg-[#FAFAFA] rounded-xl text-[#1A1A1A] text-sm outline-none focus:ring-1 focus:ring-black/5 transition-all font-serif border border-black/[0.03] placeholder-black/20",
                            placeholder: "世界名称",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[10px] text-black/30 font-bold uppercase tracking-widest ml-1 mb-2 block",
                            children: "描述",
                          }),
                          e.jsx("textarea", {
                            value: t.description,
                            onChange: (m) =>
                              r(t.id, { description: m.target.value }),
                            className:
                              "w-full p-4 bg-[#FAFAFA] rounded-xl text-[#1A1A1A] text-sm outline-none focus:ring-1 focus:ring-black/5 transition-all resize-none border border-black/[0.03] placeholder-black/20",
                            placeholder: "描述...",
                            rows: 3,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[10px] text-black/30 font-bold uppercase tracking-widest ml-1 mb-2 block",
                            children: "关联联系人",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                              n.map((m) => {
                                var h;
                                return e.jsxs(
                                  "button",
                                  {
                                    onClick: () => d(m.id),
                                    className: `px-3 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 border ${(h = t.boundContacts) != null && h.some((g) => String(g) === String(m.id)) ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md" : "bg-transparent text-black/40 border-black/5 hover:border-black/10 hover:text-black/60"}`,
                                    children: [e.jsx(wr, { size: 10 }), m.name],
                                  },
                                  m.id,
                                );
                              }),
                              n.length === 0 &&
                                e.jsx("span", {
                                  className: "text-xs text-black/20",
                                  children: "暂无联系人",
                                }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[10px] text-black/30 font-bold uppercase tracking-widest ml-1 mb-2 block",
                            children: "关联群聊",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-black/25 mb-2 pl-1 leading-relaxed",
                            children:
                              "绑定后，该书会作为「本群共享世界观」注入该群的 AI 回复（与单聊绑定联系人独立；条目若开启关键词则按群内最近聊天匹配）。",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                              a.map((m) => {
                                var h;
                                return e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () =>
                                      u == null ? void 0 : u(m.id),
                                    className: `px-3 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 border max-w-full ${(h = t.boundGroupChats) != null && h.some((g) => String(g) === String(m.id)) ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md" : "bg-transparent text-black/40 border-black/5 hover:border-black/10 hover:text-black/60"}`,
                                    children: [
                                      e.jsx(Vi, {
                                        size: 10,
                                        className: "flex-shrink-0",
                                      }),
                                      e.jsx("span", {
                                        className: "truncate",
                                        children: m.name,
                                      }),
                                    ],
                                  },
                                  m.id,
                                );
                              }),
                              a.length === 0 &&
                                e.jsx("span", {
                                  className: "text-xs text-black/20",
                                  children: "暂无群聊（请先在聊天里创建群）",
                                }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "pt-4 border-t border-black/[0.03]",
                        children: e.jsxs("button", {
                          onClick: () => i(t.id),
                          className:
                            "w-full py-3 bg-red-50 text-red-500 border border-red-100 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-100 transition-colors",
                          children: [e.jsx(_n, { size: 14 }), " 删除世界书"],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          e.jsxs("div", {
            className: "flex-1 space-y-3 pb-20",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between px-2 mb-2",
                children: [
                  e.jsx("span", {
                    className:
                      "text-[10px] font-bold text-black/20 uppercase tracking-widest",
                    children: "目录",
                  }),
                  e.jsx("span", {
                    className: "text-[10px] font-mono text-black/20",
                    children:
                      ((p = t.entries) == null ? void 0 : p.length) || 0,
                  }),
                ],
              }),
              t.entries.map((m, h) =>
                e.jsxs(
                  We.div,
                  {
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: h * 0.05 },
                    onClick: () => c(m),
                    className:
                      "group bg-white hover:bg-white p-5 rounded-[16px] cursor-pointer transition-all border border-black/[0.03] hover:border-black/[0.08] hover:shadow-sm relative overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute left-0 top-0 bottom-0 w-0.5 bg-black/[0.03] group-hover:bg-[#1A1A1A] transition-colors",
                      }),
                      e.jsxs("div", {
                        className: "flex justify-between items-center mb-1",
                        children: [
                          e.jsx("h3", {
                            className:
                              "font-serif text-[#1A1A1A] text-lg group-hover:text-black transition-colors",
                            children: m.title,
                          }),
                          e.jsx(Kn, {
                            size: 16,
                            className:
                              "text-black/10 group-hover:text-black/40 transition-colors group-hover:translate-x-1 duration-300",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs text-black/40 line-clamp-2 leading-relaxed font-light pl-0.5 group-hover:text-black/60 transition-colors",
                        children: m.content || "空条目...",
                      }),
                    ],
                  },
                  m.id,
                ),
              ),
              e.jsxs("button", {
                onClick: o,
                className:
                  "w-full py-4 border border-dashed border-black/10 rounded-[16px] text-black/30 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black/[0.02] hover:border-black/20 hover:text-black/50 transition-all group",
                children: [
                  e.jsx(ea, {
                    size: 16,
                    className:
                      "group-hover:rotate-90 transition-transform duration-300",
                  }),
                  " 新建条目",
                ],
              }),
            ],
          }),
        ],
      },
      "book-detail",
    );
  },
  QG = ({ entry: t, onClose: s, onUpdateEntry: n, onDeleteEntry: a }) =>
    e.jsxs(We.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { type: "spring", damping: 25, stiffness: 200 },
      className: "absolute inset-0 z-50 bg-[#FAFAFA] flex flex-col font-sans",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]",
            }),
            e.jsx("div", {
              className:
                "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/50 to-transparent opacity-80",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "px-6 py-4 pt-14 flex items-center justify-between sticky top-0 z-10 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-black/[0.03]",
          children: [
            e.jsx("button", {
              onClick: s,
              className:
                "w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-all text-[#1A1A1A]/60 -ml-2",
              children: e.jsx(un, { size: 24, strokeWidth: 1.5 }),
            }),
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsxs("div", {
                  className:
                    "px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.03] flex items-center gap-2",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-1.5 h-1.5 rounded-full bg-[#1A1A1A] animate-pulse",
                    }),
                    e.jsx("span", {
                      className:
                        "text-[10px] font-mono text-black/40 uppercase tracking-widest",
                      children: "编辑中",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => a(t.id),
                  className:
                    "w-10 h-10 flex items-center justify-center text-red-400 hover:bg-red-50 rounded-full transition-colors",
                  children: e.jsx(_n, { size: 18, strokeWidth: 1.5 }),
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto relative z-0",
          children: e.jsxs("div", {
            className: "max-w-3xl mx-auto p-8 pb-32",
            children: [
              e.jsx("div", {
                className: "group relative mb-8",
                children: e.jsx("input", {
                  value: t.title,
                  onChange: (r) => n(t.id, { title: r.target.value }),
                  className:
                    "w-full text-4xl font-serif font-medium bg-transparent border-none outline-none text-[#1A1A1A] placeholder-black/10 leading-tight",
                  placeholder: "未命名条目",
                }),
              }),
              e.jsx("div", {
                className: "mb-10",
                children: e.jsxs("div", {
                  className:
                    "bg-white p-5 rounded-[20px] border border-black/[0.03] shadow-sm shadow-black/[0.02]",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 text-black/40",
                          children: [
                            e.jsx(Xn, { size: 14 }),
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold uppercase tracking-widest",
                              children: "AI 上下文触发器",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: () =>
                            n(t.id, { useKeywords: !t.useKeywords }),
                          className:
                            "transition-colors focus:outline-none text-[#1A1A1A]",
                          children: t.useKeywords
                            ? e.jsx(lL, {
                                size: 24,
                                className: "text-[#1A1A1A]",
                              })
                            : e.jsx(iL, {
                                size: 24,
                                className: "text-black/20",
                              }),
                        }),
                      ],
                    }),
                    t.useKeywords &&
                      e.jsxs(We.div, {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "overflow-hidden",
                        children: [
                          e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx(yp, {
                                size: 12,
                                className:
                                  "absolute left-4 top-4 text-black/20",
                              }),
                              e.jsx("input", {
                                value: t.keywords || "",
                                onChange: (r) =>
                                  n(t.id, { keywords: r.target.value }),
                                className:
                                  "w-full bg-[#FAFAFA] p-3 pl-9 rounded-xl text-sm text-[#1A1A1A] outline-none placeholder-black/20 font-mono border border-black/[0.03] focus:border-black/10 transition-colors",
                                placeholder: "关键词：魔法、地点、角色...",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-black/30 mt-2 pl-1 font-medium",
                            children:
                              "这些关键词将在 AI 对话中触发此条目的上下文。",
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              e.jsx("textarea", {
                value: t.content,
                onChange: (r) => n(t.id, { content: r.target.value }),
                className:
                  "w-full min-h-[60vh] bg-transparent resize-none outline-none text-[#1A1A1A]/80 leading-loose text-lg font-serif placeholder-black/10 selection:bg-black/5",
                placeholder: "开始写作...",
              }),
            ],
          }),
        }),
      ],
    }),
  ZG = ({ newBookData: t, setNewBookData: s, onCancel: n, onCreate: a }) => {
    const r = [
        "#FFF0F5",
        "#FFF8E1",
        "#F0FFF4",
        "#E0F7FA",
        "#F3E5F5",
        "#F5F5F5",
      ],
      [i, o] = l.useState(null);
    l.useEffect(() => {
      t.color && t.color !== "#FF3B30" && o(t.color);
    }, []);
    const c = (f) => {
        (o(f), s({ ...t, color: f }));
      },
      d = t.title.trim().length > 0,
      u = new Date()
        .toLocaleDateString("en-US", { month: "short", day: "numeric" })
        .toUpperCase();
    return e.jsx("div", {
      className:
        "absolute inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px] p-4",
      children: e.jsxs(We.div, {
        className:
          "relative w-full max-w-[360px] min-h-[540px] rounded-[32px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-colors duration-700 ease-in-out",
        style: { backgroundColor: i || "#FFFFFF" },
        initial: { scale: 0.9, opacity: 0, y: 20 },
        animate: { scale: 1, opacity: 1, y: 0 },
        exit: { scale: 0.9, opacity: 0, y: 20 },
        transition: { type: "spring", duration: 0.5, bounce: 0.2 },
        children: [
          e.jsx("div", {
            className:
              "absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply",
          }),
          e.jsxs("div", {
            className:
              "relative z-10 flex items-center justify-between px-8 py-8",
            children: [
              e.jsxs("div", {
                className: "flex flex-col gap-1",
                children: [
                  e.jsx("span", {
                    className:
                      "text-[9px] font-bold tracking-[0.2em] text-black/20 uppercase",
                    children: "新建世界书",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[9px] font-mono text-black/40 tracking-widest",
                    children: u,
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: n,
                className:
                  "w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/40 hover:bg-black hover:text-white transition-all duration-300",
                children: e.jsx(Ts, { size: 16, strokeWidth: 1.5 }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "relative z-10 px-8 flex flex-col gap-10 mt-2",
            children: [
              e.jsxs("div", {
                className: "group relative",
                children: [
                  e.jsxs("label", {
                    className:
                      "flex items-center gap-2 text-[9px] font-bold text-black/30 tracking-[0.2em] uppercase mb-4",
                    children: [
                      e.jsx(yp, { size: 10, strokeWidth: 1.5 }),
                      "名称",
                    ],
                  }),
                  e.jsx("input", {
                    value: t.title,
                    onChange: (f) => s({ ...t, title: f.target.value }),
                    className:
                      "w-full bg-transparent text-5xl font-serif text-black placeholder-black/10 outline-none border-none p-0 focus:ring-0 transition-all leading-[1.1]",
                    placeholder: "未命名",
                    autoFocus: !0,
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-0 left-0 w-full h-px bg-black/5 group-focus-within:bg-black/20 transition-colors duration-500",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "group",
                children: [
                  e.jsxs("label", {
                    className:
                      "flex items-center gap-2 text-[9px] font-bold text-black/30 tracking-[0.2em] uppercase mb-4",
                    children: [
                      e.jsx(Xn, { size: 10, strokeWidth: 1.5 }),
                      "描述",
                    ],
                  }),
                  e.jsx("textarea", {
                    value: t.description,
                    onChange: (f) => s({ ...t, description: f.target.value }),
                    className:
                      "w-full bg-transparent text-sm text-black/60 placeholder-black/10 outline-none border-none p-0 focus:ring-0 resize-none h-24 leading-relaxed",
                    placeholder:
                      "可选：给自己看的备注，便于区分多本书。与联系人聊天时，详细世界观以书内条目为准。",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className:
                      "flex items-center gap-2 text-[9px] font-bold text-black/30 tracking-[0.2em] uppercase mb-5",
                    children: [
                      e.jsx(_o, { size: 10, strokeWidth: 1.5 }),
                      "色调",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-4",
                    children: [
                      r.map((f) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => c(f),
                            className:
                              "relative group w-10 h-10 rounded-[14px] transition-all duration-300 hover:scale-110 active:scale-95",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 rounded-[14px] shadow-sm border border-black/5",
                                style: { backgroundColor: f },
                              }),
                              i === f &&
                                e.jsx(We.div, {
                                  initial: { scale: 0.5, opacity: 0 },
                                  animate: { scale: 1, opacity: 1 },
                                  className:
                                    "absolute inset-[-4px] rounded-[18px] border border-black/10",
                                }),
                              i === f &&
                                e.jsx(We.div, {
                                  initial: { scale: 0 },
                                  animate: { scale: 1 },
                                  className:
                                    "absolute inset-0 flex items-center justify-center",
                                  children: e.jsx(On, {
                                    size: 14,
                                    className: "text-black/40",
                                    strokeWidth: 2,
                                  }),
                                }),
                            ],
                          },
                          f,
                        ),
                      ),
                      e.jsxs("label", {
                        className: `relative w-10 h-10 rounded-[14px] border border-dashed border-black/10 flex items-center justify-center cursor-pointer transition-all hover:border-black/30 hover:bg-black/5 ${i ? "" : "bg-black/5"}`,
                        children: [
                          e.jsx(ea, {
                            size: 16,
                            className: "text-black/30",
                            strokeWidth: 1.5,
                          }),
                          e.jsx("input", {
                            type: "color",
                            className:
                              "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                            value: i || "#FFFFFF",
                            onChange: (f) => c(f.target.value),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "relative z-10 mt-auto p-8 pt-6",
            children: e.jsxs("button", {
              onClick: a,
              disabled: !d,
              className:
                "group relative w-full py-5 bg-[#1A1A1A] text-white rounded-2xl font-medium text-xs tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-[0.98] disabled:opacity-20 disabled:cursor-not-allowed disabled:scale-100 transition-all shadow-xl shadow-black/5 overflow-hidden flex items-center justify-between px-8",
              children: [
                e.jsx("span", { className: "relative z-10", children: "创建" }),
                e.jsx("div", {
                  className:
                    "relative z-10 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300",
                  children: e.jsx(so, { size: 12, strokeWidth: 2 }),
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                  style: { backgroundColor: i || "#FFFFFF" },
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  XG = [
    {
      id: "1",
      title: "默认世界观",
      description: "通用的世界设定",
      color: "#E8DCCA",
      boundContacts: [],
      boundGroupChats: [],
      entries: [
        { id: "e1", title: "背景", content: "这是一个充满魔法与科技的世界..." },
      ],
    },
  ],
  eH = ({ onClose: t }) => {
    const [s, n] = l.useState([]),
      [a, r] = l.useState([]),
      [i, o] = l.useState([]),
      [c, d] = l.useState(null),
      [u, f] = l.useState(!1),
      [p, m] = l.useState(!1),
      [h, g] = l.useState({ title: "", description: "", color: "#FF3B30" }),
      [x, y] = l.useState(null),
      v = [
        "#E0BBE4",
        "#957DAD",
        "#D291BC",
        "#FEC8D8",
        "#FFDFD3",
        "#B5EAD7",
        "#C7CEEA",
        "#E2F0CB",
      ],
      [b, N] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        try {
          const T = await be.get("world_books");
          T != null && Array.isArray(T) ? n(T) : n(XG);
        } catch {
        } finally {
          N(!0);
        }
      })();
    }, []),
      l.useEffect(() => {
        b && be.set("world_books", s);
      }, [s, b]),
      l.useEffect(() => {
        (async () => {
          const T = await be.get("chat_app_contacts");
          if (T) {
            const I = Array.isArray(T) ? T : [];
            r(
              I.filter(
                (L) =>
                  L &&
                  L.isBuiltinHelpAssistant !== !0 &&
                  String(L.id) !== "builtin_help_tutorial_ai",
              ),
            );
          }
        })();
      }, []),
      l.useEffect(() => {
        (async () => {
          try {
            const T = await be.get("chat_app_chats"),
              I = Array.isArray(T) ? T : [];
            o(
              I.filter((L) => L && L.isGroup === !0).map((L) => ({
                id: String(L.id),
                name: String(L.groupName || "群聊").trim() || "群聊",
              })),
            );
          } catch {
            o([]);
          }
        })();
      }, []),
      l.useEffect(() => {
        const j = (T) => {
          var L;
          const I = String(
            ((L = T.detail) == null ? void 0 : L.contactId) || "",
          );
          I &&
            (r((B) =>
              Array.isArray(B)
                ? B.filter((F) => String(F == null ? void 0 : F.id) !== I)
                : B,
            ),
            n((B) =>
              (B || []).map((F) => ({
                ...F,
                boundContacts: (F.boundContacts || []).filter(
                  (D) => String(D) !== I,
                ),
              })),
            ),
            d((B) => {
              if (!B) return B;
              const F = (B.boundContacts || []).filter((D) => String(D) !== I);
              return F.length === (B.boundContacts || []).length
                ? B
                : { ...B, boundContacts: F };
            }));
        };
        return (
          window.addEventListener(Jl, j),
          () => window.removeEventListener(Jl, j)
        );
      }, []));
    const w = () => {
        if (!h.title) return;
        const j = {
          id: Date.now().toString(),
          ...h,
          boundContacts: [],
          entries: [],
        };
        (n([...s, j]),
          m(!1),
          g({ title: "", description: "", color: "#E8DCCA" }));
      },
      _ = (j) => {
        window.confirm("确定要删除这本世界书吗？") &&
          (n(s.filter((T) => T.id !== j)),
          (c == null ? void 0 : c.id) === j && d(null));
      },
      A = (j, T) => {
        (n(s.map((I) => (I.id === j ? { ...I, ...T } : I))),
          (c == null ? void 0 : c.id) === j && d({ ...c, ...T }));
      },
      k = () => {
        const j = { id: Date.now().toString(), title: "新条目", content: "" },
          T = { ...c, entries: [...c.entries, j] };
        (A(c.id, T), y(j));
      },
      C = (j, T) => {
        const I = c.entries.map((B) => (B.id === j ? { ...B, ...T } : B)),
          L = { ...c, entries: I };
        (A(c.id, L), (x == null ? void 0 : x.id) === j && y({ ...x, ...T }));
      },
      M = (j) => {
        const T = c.entries.filter((I) => I.id !== j);
        (A(c.id, { entries: T }), (x == null ? void 0 : x.id) === j && y(null));
      },
      E = (j) => {
        const T = String(j),
          I = c.boundContacts || [],
          L = I.some((B) => String(B) === T)
            ? I.filter((B) => String(B) !== T)
            : [...I, T];
        A(c.id, { boundContacts: L });
      },
      S = (j) => {
        const T = String(j),
          I = c.boundGroupChats || [],
          L = I.some((B) => String(B) === T)
            ? I.filter((B) => String(B) !== T)
            : [...I, T];
        A(c.id, { boundGroupChats: L });
      };
    return e.jsxs("div", {
      className:
        "flex flex-col h-full bg-[#FAFAFA] relative overflow-hidden font-sans selection:bg-black/5 selection:text-black",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]",
            }),
            e.jsx("div", {
              className:
                "absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/50 to-transparent opacity-80",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "absolute top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pt-14 pointer-events-none",
          children: [
            e.jsx("div", {
              className: "pointer-events-auto flex items-center gap-4",
              children: c
                ? e.jsx("button", {
                    onClick: () => d(null),
                    className:
                      "w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-all text-[#1A1A1A] -ml-2 backdrop-blur-sm",
                    children: e.jsx(un, { size: 24, strokeWidth: 1.5 }),
                  })
                : e.jsxs("button", {
                    type: "button",
                    onClick: t,
                    className: "flex flex-col text-left cursor-pointer",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("h1", {
                            className:
                              "text-2xl font-serif text-[#1A1A1A] tracking-tight",
                            children: "世界书库",
                          }),
                          e.jsx("div", {
                            className:
                              "px-1.5 py-0.5 rounded-full bg-black/[0.03] border border-black/[0.03]",
                            children: e.jsx("span", {
                              className:
                                "text-[9px] font-mono text-black/40 block leading-none",
                              children: s.length,
                            }),
                          }),
                        ],
                      }),
                      e.jsx("span", {
                        className:
                          "text-[10px] text-black/30 font-medium tracking-widest uppercase mt-0.5 pl-0.5",
                        children: "Personal Archive",
                      }),
                    ],
                  }),
            }),
            e.jsx("div", {
              className: "pointer-events-auto flex items-center gap-2",
              children: c
                ? e.jsx("button", {
                    onClick: () => f(!u),
                    className: `p-2.5 rounded-full transition-all ${u ? "bg-[#1A1A1A] text-white shadow-lg" : "hover:bg-black/5 text-[#1A1A1A]/40"}`,
                    children: e.jsx(Co, { size: 20, strokeWidth: 1.5 }),
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("button", {
                        className:
                          "p-2.5 text-[#1A1A1A]/40 hover:bg-black/5 rounded-full transition-colors",
                        children: e.jsx(pr, { size: 20, strokeWidth: 1.5 }),
                      }),
                      e.jsx("button", {
                        onClick: () => m(!0),
                        className:
                          "p-2.5 bg-[#1A1A1A] text-white rounded-full shadow-lg hover:bg-black transition-all hover:scale-105 active:scale-95",
                        children: e.jsx(ea, { size: 20, strokeWidth: 1.5 }),
                      }),
                    ],
                  }),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "flex-1 overflow-y-auto relative z-0 p-6 no-scrollbar pb-24 pt-32",
          style: {
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 120px)",
          },
          children: e.jsx(Os, {
            mode: "wait",
            children: c
              ? e.jsx(qG, {
                  book: c,
                  isEditing: u,
                  contacts: a,
                  groupChats: i,
                  onUpdateBook: A,
                  onDeleteBook: _,
                  onAddEntry: k,
                  onSelectEntry: y,
                  onToggleBinding: E,
                  onToggleGroupBinding: S,
                })
              : e.jsx(
                  We.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    transition: { duration: 0.4, ease: "easeOut" },
                    children: e.jsxs("div", {
                      className: "grid grid-cols-2 gap-x-5 gap-y-8 pb-10",
                      children: [
                        s.map((j, T) =>
                          e.jsx(
                            We.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: T * 0.05 },
                              children: e.jsx(KG, {
                                book: j,
                                onClick: () => d(j),
                              }),
                            },
                            j.id,
                          ),
                        ),
                        s.length === 0 &&
                          e.jsxs("div", {
                            className:
                              "col-span-2 flex flex-col items-center justify-center py-32 text-white/20",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-20 h-20 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-6 animate-pulse",
                                children: e.jsx(Rm, {
                                  size: 32,
                                  strokeWidth: 1,
                                }),
                              }),
                              e.jsx("p", {
                                className: "text-sm font-mono text-white/40",
                                children: "暂无内容...",
                              }),
                              e.jsx("button", {
                                onClick: () => m(!0),
                                className:
                                  "mt-6 px-6 py-2 bg-white/10 border border-white/10 text-white rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all",
                                children: "初始化世界",
                              }),
                            ],
                          }),
                      ],
                    }),
                  },
                  "library",
                ),
          }),
        }),
        e.jsx(Os, {
          children:
            x &&
            e.jsx(QG, {
              entry: x,
              onClose: () => y(null),
              onUpdateEntry: C,
              onDeleteEntry: M,
            }),
        }),
        e.jsx(Os, {
          children:
            p &&
            e.jsx(ZG, {
              newBookData: h,
              setNewBookData: g,
              onCancel: () => m(!1),
              onCreate: w,
              colors: v,
            }),
        }),
        e.jsx("div", {
          className:
            "absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto",
          children: e.jsx("button", {
            onClick: t,
            className:
              "w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-black transition-all",
            children: e.jsx(vp, { size: 20 }),
          }),
        }),
      ],
    });
  },
  tl = "bubble_",
  iN = `${tl}userPersonas`,
  oN = `${tl}managers`,
  lN = `${tl}idols`,
  cN = `${tl}subscriptions`,
  dN = `${tl}currentPersonaId`,
  fb = (t) => `${tl}chat_${t}`,
  uN = (t) => `${tl}chat_settings_${t}`,
  mb = (t, s) => `${tl}daily_${t}_${s}`,
  pb = (t) => `${tl}sent_dates_${t}`,
  fN = (t) => `${tl}chat_bg_${t}`,
  xb = (t, s) => `${tl}proactive_${t}_${s}`,
  kf = (t) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`,
  tH = 3,
  or = {
    getUserPersonas: () => be.get(iN, []),
    setUserPersonas: (t) => be.set(iN, t),
    getManagers: () => be.get(oN, []),
    setManagers: (t) => be.set(oN, t),
    getIdols: () => be.get(lN, []),
    setIdols: (t) => be.set(lN, t),
    getSubscriptions: () => be.get(cN, {}),
    setSubscriptions: (t) => be.set(cN, t),
    getCurrentPersonaId: () => be.get(dN, null),
    setCurrentPersonaId: (t) => be.set(dN, t),
    getChatMessages: (t) => be.get(fb(t), []),
    setChatMessages: (t, s) => be.set(fb(t), s),
    clearChatMessages: (t) => be.set(fb(t), []),
    getChatSettings: (t) =>
      be.get(uN(t), {
        replyTimeSlots: [{ start: 16, end: 20 }],
        useReplyTime: !0,
        instantReply: !1,
        unlimitedMode: !1,
      }),
    setChatSettings: (t, s) => be.set(uN(t), s),
    getDailyCount: async (t) => {
      const s = kf(new Date());
      return (await be.get(mb(t, s), null)) ?? tH;
    },
    getDailyCountRaw: async (t) => {
      const s = kf(new Date());
      return be.get(mb(t, s), null);
    },
    setDailyCount: async (t, s) => {
      const n = kf(new Date());
      return be.set(mb(t, n), s);
    },
    getSentDates: (t) => be.get(pb(t), []),
    addSentDate: async (t, s) => {
      const n = await be.get(pb(t), []);
      n.includes(s) || (await be.set(pb(t), [...n, s].sort()));
    },
    getChatBg: (t) => be.get(fN(t), ""),
    setChatBg: (t, s) => be.set(fN(t), s || ""),
    getProactiveSlotsToday: async (t) => {
      const s = kf(new Date());
      return be.get(xb(t, s), []);
    },
    addProactiveSlotToday: async (t, s) => {
      const n = kf(new Date()),
        a = await be.get(xb(t, n), []);
      a.includes(s) || (await be.set(xb(t, n), [...a, s]));
    },
  },
  hb = () => `bubble_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
  IA = l.createContext(),
  Nd = () => l.useContext(IA),
  mN = 3,
  pN = 999999,
  sH = ({ children: t }) => {
    const s = vn(),
      n = s == null ? void 0 : s.callApi,
      a = (s == null ? void 0 : s.apiConfig) ?? {},
      r = s == null ? void 0 : s.playTTS,
      i = s == null ? void 0 : s.stopTTS,
      o = s == null ? void 0 : s.ttsConfig,
      c = s == null ? void 0 : s.unlockAudio,
      d = s == null ? void 0 : s.isPlaying,
      u = s == null ? void 0 : s.playingMessageId,
      [f, p] = l.useState(!1),
      [m, h] = l.useState([]),
      [g, x] = l.useState([]),
      [y, v] = l.useState([]),
      [b, N] = l.useState({}),
      [w, _] = l.useState(null);
    l.useEffect(() => {
      (async () => {
        const [ke, W, ue, re, he] = await Promise.all([
          or.getUserPersonas(),
          or.getManagers(),
          or.getIdols(),
          or.getSubscriptions(),
          or.getCurrentPersonaId(),
        ]);
        (h(Array.isArray(ke) ? ke : []),
          x(Array.isArray(W) ? W : []),
          v(Array.isArray(ue) ? ue : []),
          N(typeof re == "object" ? re : {}),
          _(he || null),
          p(!0));
      })();
    }, []);
    const A = async (ke) => {
        (h(ke), await or.setUserPersonas(ke));
      },
      k = async (ke) => {
        (x(ke), await or.setManagers(ke));
      },
      C = async (ke) => {
        (v(ke), await or.setIdols(ke));
      },
      M = async (ke) => {
        (N(ke), await or.setSubscriptions(ke));
      },
      E = async (ke) => {
        (_(ke), await or.setCurrentPersonaId(ke));
      },
      S = m.find((ke) => ke.id === w) || m[0],
      j = (ke) => {
        const W = { id: hb(), ...ke };
        (A([...m, W]), w || E(W.id));
      },
      T = (ke, W) => {
        A(m.map((ue) => (ue.id === ke ? { ...ue, ...W } : ue)));
      },
      I = (ke) => {
        var W;
        (A(m.filter((ue) => ue.id !== ke)),
          w === ke &&
            E(
              ((W = m.find((ue) => ue.id !== ke)) == null ? void 0 : W.id) ||
                null,
            ));
      },
      L = (ke) => {
        const W = { id: hb(), ...ke };
        k([...g, W]);
      },
      B = (ke, W) => {
        k(g.map((ue) => (ue.id === ke ? { ...ue, ...W } : ue)));
      },
      F = (ke) => {
        k(g.filter((W) => W.id !== ke));
      },
      D = (ke) =>
        g.filter((W) => {
          const ue = y.find((re) => re.managerId === W.id);
          return !ue || (ke && ue.id === ke);
        }),
      $ = (ke) => {
        const W = { id: hb(), ...ke };
        C([...y, W]);
      },
      P = (ke, W) => {
        C(y.map((ue) => (ue.id === ke ? { ...ue, ...W } : ue)));
      },
      z = (ke) => {
        C(y.filter((ue) => ue.id !== ke));
        const W = { ...b };
        (delete W[ke], M(W), or.clearChatMessages(ke));
      },
      O = (ke) => y.find((W) => W.id === ke),
      Z = (ke) => {
        const W = b[ke];
        return W ? new Date(W.end) > new Date() : !1;
      },
      K = (ke) => b[ke] || null,
      q = (ke) => {
        const W = b[ke];
        return !(W != null && W.useTrial);
      },
      V = (ke, W) => {
        const ue = new Date(),
          re = new Date(ue);
        (W ? re.setDate(re.getDate() + 3) : re.setMonth(re.getMonth() + 1),
          M({
            ...b,
            [ke]: {
              start: ue.toISOString(),
              end: re.toISOString(),
              useTrial: !!W,
            },
          }));
      },
      ne = () => y.filter((ke) => Z(ke.id)),
      le = (ke) => or.getChatMessages(ke),
      ie = (ke, W) => or.setChatMessages(ke, W),
      X = (ke) => or.getChatSettings(ke),
      je = (ke, W) => or.setChatSettings(ke, W),
      xe = () => Promise.resolve([]),
      ye = () => Promise.resolve(),
      R = async (ke) => {
        const W = await or.getChatSettings(ke);
        if (W != null && W.unlimitedMode) return pN;
        H(new Date());
        const ue = await or.getDailyCountRaw(ke);
        if (ue !== null) return ue;
        const re = await ee(ke),
          he = mN + Math.floor(re / 3);
        return (await or.setDailyCount(ke, he), he);
      },
      oe = async (ke) => {
        const W = await or.getChatSettings(ke);
        if (W != null && W.unlimitedMode) return;
        const ue = await or.getDailyCount(ke);
        await or.setDailyCount(ke, Math.max(0, ue - 1));
      },
      ee = async (ke) => {
        const W = await or.getSentDates(ke),
          ue = new Set(W),
          re = (J) =>
            `${J.getFullYear()}-${String(J.getMonth() + 1).padStart(2, "0")}-${String(J.getDate()).padStart(2, "0")}`,
          he = re(new Date());
        if (!ue.has(he)) {
          const J = new Date();
          J.setDate(J.getDate() - 1);
          let G = 0;
          for (let we = 0; we < 365; we++) {
            const Q = new Date(J);
            if ((Q.setDate(Q.getDate() - we), !ue.has(re(Q)))) break;
            G++;
          }
          return G;
        }
        let ge = 0;
        for (let J = 0; J < 365; J++) {
          const G = new Date();
          if ((G.setDate(G.getDate() - J), !ue.has(re(G)))) break;
          ge++;
        }
        return ge;
      },
      H = (ke) =>
        `${ke.getFullYear()}-${String(ke.getMonth() + 1).padStart(2, "0")}-${String(ke.getDate()).padStart(2, "0")}`,
      Te = {
        loaded: f,
        userPersonas: m,
        managers: g,
        idols: y,
        currentPersonaId: w,
        setCurrentPersonaId: E,
        currentPersona: S,
        addUserPersona: j,
        updateUserPersona: T,
        deleteUserPersona: I,
        addManager: L,
        updateManager: B,
        deleteManager: F,
        getAvailableManagers: D,
        addIdol: $,
        updateIdol: P,
        deleteIdol: z,
        getIdolById: O,
        isSubscribed: Z,
        getSubscription: K,
        canUseTrial: q,
        subscribe: V,
        getSubscribedIdols: ne,
        loadChatMessages: le,
        saveChatMessages: ie,
        loadChatSettings: X,
        saveChatSettings: je,
        loadFanMessageBatches: xe,
        saveFanMessageBatches: ye,
        getRemainingMessagesToday: R,
        consumeMessageCount: oe,
        getConsecutiveSentDays: ee,
        recordSentDate: async (ke) => {
          const W = new Date();
          await or.addSentDate(ke, H(W));
        },
        loadChatBg: (ke) => or.getChatBg(ke),
        saveChatBg: (ke, W) => or.setChatBg(ke, W),
        getProactiveSlotsToday: (ke) => or.getProactiveSlotsToday(ke),
        addProactiveSlotToday: (ke, W) => or.addProactiveSlotToday(ke, W),
        MSG_PER_DAY: mN,
        UNLIMITED_REMAINING: pN,
        callApi: n,
        apiConfig: a,
        playTTS: r,
        stopTTS: i,
        ttsConfig: o,
        unlockAudio: c,
        isPlaying: d,
        playingMessageId: u,
      };
    return e.jsx(IA.Provider, { value: Te, children: t });
  },
  nH = ({ onSelectIdol: t }) => {
    const { getSubscribedIdols: s } = Nd(),
      n = s();
    return e.jsx("div", {
      className: "px-10 mt-6 space-y-12 pb-20",
      children:
        n.length === 0
          ? e.jsx("div", {
              className:
                "p-20 text-center text-slate-300 text-[10px] tracking-[0.4em] uppercase",
              children: "尚未订阅艺术频道",
            })
          : n.map((a) =>
              e.jsxs(
                "button",
                {
                  onClick: () => (t == null ? void 0 : t(a.id)),
                  className:
                    "w-full flex items-start space-x-8 group cursor-pointer text-left",
                  children: [
                    e.jsxs("div", {
                      className: "relative flex-shrink-0",
                      children: [
                        e.jsx("img", {
                          src:
                            a.avatar ||
                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${a.id}`,
                          alt: "",
                          className:
                            "w-14 h-14 object-cover brightness-95 group-hover:brightness-100 transition-all duration-700",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute -bottom-1 -right-1 w-3 h-3 bg-black flex items-center justify-center",
                          children: e.jsx("div", {
                            className:
                              "w-1 h-1 bg-white rounded-full animate-pulse",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex-1 pt-2 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between items-baseline mb-3",
                          children: [
                            e.jsx("h3", {
                              className:
                                "font-serif text-2xl font-bold text-[var(--ink-black)]",
                              children: a.stageName || a.realName,
                            }),
                            e.jsx("span", {
                              className:
                                "text-[9px] text-slate-400 font-bold tracking-widest flex-shrink-0 ml-2",
                              children: "NEW",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "text-xs text-slate-400 line-clamp-2 leading-relaxed italic",
                          children: [
                            '"',
                            a.signature || "收到了一封来自远方的声音摘要...",
                            '"',
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                a.id,
              ),
            ),
    });
  },
  Kc = 3e3,
  aH = ({ idol: t, onClose: s, onSubscribed: n, onEdit: a }) => {
    var I;
    const {
        isSubscribed: r,
        subscribe: i,
        getSubscription: o,
        managers: c,
        deleteIdol: d,
        userPersonas: u,
      } = Nd(),
      { user: f, deductFromWallet: p } = vn(),
      m =
        t != null && t.userPersonaId
          ? u.find((L) => L.id === t.userPersonaId)
          : null,
      h = r(t.id),
      g = o(t.id),
      x = !(g != null && g.useTrial),
      y = new Date(),
      v = g && g.useTrial && new Date(g.end) <= y,
      b = g && !g.useTrial && new Date(g.end) <= y,
      N = v || b,
      [w, _] = l.useState(""),
      [A, k] = l.useState(!1),
      C = t.managerId ? c.find((L) => L.id === t.managerId) : null,
      M = C
        ? [C.company, C.name].filter(Boolean).join(" · ") ||
          C.name ||
          t.managerId
        : "—",
      E =
        ((I = f == null ? void 0 : f.wallet) == null ? void 0 : I.balance) ?? 0,
      S = (L) => {
        (i(t.id, L), n == null || n(), s());
      },
      j = () => {
        if ((_(""), E < Kc)) {
          _("余额不足，当前余额 ¥" + E.toFixed(2));
          return;
        }
        k(!0);
      },
      T = () => {
        var B, F;
        const L =
          (B = f == null ? void 0 : f.wallet) != null && B.password
            ? window.prompt("请输入支付密码：")
            : "";
        if (
          (F = f == null ? void 0 : f.wallet) != null &&
          F.password &&
          f.wallet.password !== L
        ) {
          _("支付密码错误");
          return;
        }
        try {
          (p(Kc, `艺术季刊订阅 · ${t.stageName || t.realName}`, L),
            i(t.id, !1),
            k(!1),
            n == null || n(),
            s());
        } catch (D) {
          _((D == null ? void 0 : D.message) || "扣款失败");
        }
      };
    return e.jsxs("div", {
      className:
        "bubble-app fixed inset-0 z-50 flex flex-col bg-white overflow-hidden",
      children: [
        e.jsxs("div", {
          className: "relative h-[40%] min-h-[200px] overflow-hidden",
          children: [
            e.jsx("img", {
              src:
                t.avatar ||
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${t.id}`,
              alt: "",
              className: "w-full h-full object-cover scale-110",
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent",
            }),
            e.jsx("button", {
              onClick: s,
              className:
                "absolute top-[78px] left-10 font-serif text-base font-bold tracking-widest text-white mix-blend-difference hover:opacity-80",
              children: "艺廊",
            }),
            a &&
              e.jsx("button", {
                onClick: () => a(t),
                className:
                  "absolute top-[78px] right-10 font-serif text-base font-bold tracking-widest text-white mix-blend-difference hover:opacity-80",
                children: "编辑",
              }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 px-10 -mt-16 relative z-10 bg-white pt-6 overflow-y-auto",
          children: [
            e.jsx("div", {
              className: "flex justify-between items-baseline mb-2",
              children: e.jsx("h1", {
                className:
                  "font-serif text-5xl font-bold tracking-tighter text-[var(--ink-black)]",
                children: t.screenName || t.stageName || t.realName,
              }),
            }),
            t.realName &&
              e.jsx("p", {
                className:
                  "text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-1 italic",
                children: t.realName,
              }),
            e.jsxs("p", {
              className:
                "text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4 italic",
              children: ["归属于 ", M],
            }),
            t.signature &&
              e.jsxs("p", {
                className:
                  "text-sm text-slate-600 italic border-l-[1px] border-black pl-6 mb-6",
                children: ["「 ", t.signature, " 」"],
              }),
            m &&
              e.jsxs("div", {
                className: "mb-12",
                children: [
                  e.jsx("p", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-2",
                    children: "鉴赏人",
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm text-slate-600 leading-relaxed italic border-l-[1px] border-black pl-8",
                    children: m.screenName || m.name || "未命名",
                  }),
                ],
              }),
            e.jsxs("div", {
              className:
                "flex items-center justify-between py-8 border-y border-slate-100 mb-12",
              children: [
                e.jsxs("div", {
                  className: "text-center flex-1",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-3xl font-serif font-bold text-[var(--ink-black)]",
                      children: t.collectors || "—",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-2",
                      children: "追随者",
                    }),
                  ],
                }),
                e.jsx("div", { className: "w-[0.5px] h-10 bg-slate-200" }),
                e.jsxs("div", {
                  className: "text-center flex-1",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-2xl font-serif font-bold text-[var(--ink-black)]",
                      children: t.styleCategory || "—",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-2",
                      children: "风格类别",
                    }),
                  ],
                }),
              ],
            }),
            w &&
              e.jsx("p", {
                className: "text-xs text-red-500 mb-4",
                children: w,
              }),
            h
              ? e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("button", {
                      disabled: !0,
                      className:
                        "w-full py-6 border border-slate-100 text-slate-300 text-[11px] font-black uppercase tracking-[0.6em]",
                      children: "已存入档案",
                    }),
                    e.jsx("button", {
                      onClick: () => {
                        window.confirm(
                          "取消订阅将删除该艺术家及所有聊天记录，是否继续？",
                        ) && (d(t.id), s());
                      },
                      className:
                        "w-full py-6 border border-red-200 text-red-600 hover:bg-red-50 text-[11px] font-black uppercase tracking-[0.6em] transition-colors",
                      children: "取消订阅（删除）",
                    }),
                  ],
                })
              : N
                ? e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] text-slate-500 mb-2",
                        children: "订阅已到期",
                      }),
                      e.jsxs("button", {
                        onClick: j,
                        disabled: E < Kc,
                        className:
                          "w-full py-6 bg-black text-white text-[11px] font-black uppercase tracking-[0.6em] hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: ["续期一个月 · ¥", Kc],
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      x &&
                        e.jsx("button", {
                          onClick: () => S(!0),
                          className:
                            "w-full py-6 border border-black/20 text-[var(--ink-black)] hover:bg-black/5 text-[11px] font-black uppercase tracking-[0.6em] transition-colors",
                          children: "免费试用 3 天",
                        }),
                      e.jsxs("button", {
                        onClick: j,
                        disabled: E < Kc,
                        className:
                          "w-full py-6 bg-black text-white text-[11px] font-black uppercase tracking-[0.6em] hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: ["订阅一个月 · ¥", Kc],
                      }),
                    ],
                  }),
          ],
        }),
        A &&
          e.jsx("div", {
            className:
              "fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-6",
            onClick: () => k(!1),
            children: e.jsxs("div", {
              className: "bubble-app bg-white max-w-sm w-full p-8 shadow-xl",
              onClick: (L) => L.stopPropagation(),
              children: [
                e.jsxs("p", {
                  className: "text-center text-[14px] mb-6",
                  children: ["是否确认付款 ¥", Kc, "？"],
                }),
                e.jsxs("div", {
                  className: "flex justify-center gap-6",
                  children: [
                    e.jsx("button", {
                      onClick: () => k(!1),
                      className:
                        "px-8 py-3 border border-slate-200 text-[11px] font-black uppercase tracking-widest",
                      children: "取消",
                    }),
                    e.jsxs("button", {
                      onClick: T,
                      className:
                        "flex items-center gap-2 px-8 py-3 bg-black text-white text-[11px] font-black uppercase tracking-widest hover:bg-black/90",
                      children: [
                        e.jsxs("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.5",
                          className: "opacity-80",
                          children: [
                            e.jsx("path", {
                              d: "M12 11v5M9 14h6M8 21h8a2 2 0 002-2v-5.5a1.5 1.5 0 00-1.5-1.5h-11A1.5 1.5 0 004 13.5V19a2 2 0 002 2z",
                            }),
                            e.jsx("path", {
                              d: "M8 21V7a2 2 0 012-2h4a2 2 0 012 2v14",
                            }),
                            e.jsx("path", { d: "M12 3v2" }),
                            e.jsx("path", { d: "M6 3v2" }),
                            e.jsx("path", { d: "M18 3v2" }),
                            e.jsx("path", {
                              d: "M9 10l1.5 1.5L12 10l1.5 1.5L15 10",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          ],
                        }),
                        "指纹支付",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  rH = ({ onAddIdol: t, onEditIdol: s }) => {
    const { idols: n, managers: a } = Nd(),
      [r, i] = l.useState(null),
      o = (d) => {
        (i(null), s == null || s(d));
      },
      c = (d) => {
        if (!d.managerId) return "—";
        const u = a.find((f) => f.id === d.managerId);
        return (u == null ? void 0 : u.name) || d.managerId;
      };
    return e.jsxs("div", {
      className: "px-10 py-6 pb-20",
      children: [
        e.jsx("p", {
          className:
            "text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em] mb-10",
          children: "特约入驻艺术家",
        }),
        n.length === 0
          ? e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center py-20 text-slate-400",
              children: [
                e.jsx("p", {
                  className: "text-sm",
                  children: "还没有添加偶像",
                }),
                e.jsx("p", {
                  className: "text-[10px] mt-2 uppercase tracking-widest",
                  children: "点击右上角添加，填写信息并绑定人设",
                }),
              ],
            })
          : e.jsx("div", {
              className: "grid grid-cols-2 gap-8",
              children: n.map((d) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => i(d),
                    className: "flex flex-col group cursor-pointer text-left",
                    children: [
                      e.jsxs("div", {
                        className:
                          "relative overflow-hidden aspect-[4/5] bg-slate-100 min-h-[120px]",
                        children: [
                          e.jsx("img", {
                            src:
                              d.avatar ||
                              `https://api.dicebear.com/7.x/avataaars/svg?seed=${d.id}`,
                            alt: "",
                            className:
                              "w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-out",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-6 left-6 vertical-text font-bold text-[10px] tracking-[0.5em] text-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity",
                            children: "ARTIST RECORD",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-3 flex justify-between items-end border-b border-black/5 pb-3",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-serif text-xl font-bold tracking-tighter text-[var(--ink-black)]",
                                children: d.stageName || d.realName,
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[9px] text-slate-400 uppercase tracking-widest mt-2",
                                children: [c(d), " // 视觉与听觉档案"],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "pb-1",
                            children: e.jsx(so, {
                              size: 20,
                              className: "text-slate-300",
                              strokeWidth: 1.5,
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  d.id,
                ),
              ),
            }),
        r &&
          e.jsx(aH, {
            idol: r,
            onClose: () => i(null),
            onSubscribed: () => i(null),
            onEdit: o,
          }),
      ],
    });
  },
  xN = ({ initial: t, onClose: s, onSave: n }) => {
    const [a, r] = l.useState(""),
      [i, o] = l.useState(""),
      [c, d] = l.useState(""),
      [u, f] = l.useState(""),
      [p, m] = l.useState(""),
      h = l.useRef(null);
    l.useEffect(() => {
      t &&
        (r(t.name || ""),
        o(t.persona || ""),
        d(t.signature || ""),
        f(t.screenName || ""),
        m(t.avatar || ""));
    }, [t]);
    const g = (y) => {
        var N;
        const v = (N = y.target.files) == null ? void 0 : N[0];
        if (!v) return;
        const b = new FileReader();
        ((b.onload = () => m(b.result)), b.readAsDataURL(v));
      },
      x = () => {
        n({ name: a, persona: i, signature: c, screenName: u, avatar: p });
      };
    return e.jsx("div", {
      className:
        "bubble-app fixed inset-0 z-50 flex flex-col bg-white overflow-hidden",
      children: e.jsxs("div", {
        className: "pt-[96px] px-12 pb-12 flex-1 overflow-y-auto",
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-16",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "font-serif text-xl font-bold tracking-widest text-[var(--ink-black)] hover:opacity-70",
                children: "档案",
              }),
              e.jsx("h2", {
                className:
                  "font-serif text-2xl font-bold text-[var(--ink-black)]",
                children: t ? "编辑身份" : "新身份登记",
              }),
              e.jsx("div", { className: "w-16" }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: (y) => {
              (y.preventDefault(), x());
            },
            className: "space-y-12",
            children: [
              e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  e.jsx("input", {
                    ref: h,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: g,
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      var y;
                      return (y = h.current) == null ? void 0 : y.click();
                    },
                    className:
                      "w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 hover:border-black/20 transition-colors bg-slate-50",
                    children: p
                      ? e.jsx("img", {
                          src: p,
                          alt: "",
                          className: "w-full h-full object-cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full flex items-center justify-center text-slate-400 text-[9px] uppercase",
                          children: "头像",
                        }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b border-black pb-4",
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "法定姓名",
                  }),
                  e.jsx("input", {
                    required: !0,
                    value: a,
                    onChange: (y) => r(y.target.value),
                    className:
                      "w-full font-serif text-2xl outline-none bg-transparent text-[var(--ink-black)]",
                    placeholder: "你的真实姓名",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b border-black pb-4",
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "展示昵称",
                  }),
                  e.jsx("input", {
                    required: !0,
                    value: u,
                    onChange: (y) => f(y.target.value),
                    className:
                      "w-full font-serif text-2xl outline-none bg-transparent text-[var(--ink-black)]",
                    placeholder: "显示名称",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b border-black pb-4",
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "个性签名",
                  }),
                  e.jsx("input", {
                    value: c,
                    onChange: (y) => d(y.target.value),
                    className:
                      "w-full font-serif text-xl outline-none bg-transparent text-[var(--ink-black)]",
                    placeholder: "一句话介绍自己",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "核心叙事",
                  }),
                  e.jsx("textarea", {
                    required: !0,
                    value: i,
                    onChange: (y) => o(y.target.value),
                    rows: 5,
                    className:
                      "w-full border border-slate-100 p-6 text-xs leading-relaxed outline-none focus:border-black bg-[#FDFDFD] text-[var(--ink-black)]",
                    placeholder: "描述你的性格、背景...",
                  }),
                ],
              }),
              e.jsx("button", {
                type: "submit",
                className:
                  "w-full py-8 bg-black text-white text-[11px] font-bold uppercase tracking-[0.8em]",
                children: "同步至云端",
              }),
            ],
          }),
        ],
      }),
    });
  },
  hN = ({ initial: t, onClose: s, onSave: n }) => {
    const [a, r] = l.useState(""),
      [i, o] = l.useState(""),
      [c, d] = l.useState(""),
      [u, f] = l.useState(""),
      p = l.useRef(null);
    l.useEffect(() => {
      t &&
        (r(t.name || ""),
        o(t.company || ""),
        d(t.persona || ""),
        f(t.avatar || ""));
    }, [t]);
    const m = (g) => {
        var v;
        const x = (v = g.target.files) == null ? void 0 : v[0];
        if (!x) return;
        const y = new FileReader();
        ((y.onload = () => f(y.result)), y.readAsDataURL(x));
      },
      h = () => {
        n({ name: a, company: i, persona: c, avatar: u });
      };
    return e.jsx("div", {
      className:
        "bubble-app fixed inset-0 z-50 flex flex-col bg-white overflow-hidden",
      children: e.jsxs("div", {
        className: "pt-[96px] px-12 pb-12 flex-1 overflow-y-auto",
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-16",
            children: [
              e.jsx("h2", {
                className:
                  "font-serif text-4xl font-bold text-[var(--ink-black)]",
                children: t ? "编辑经纪人" : "新经纪人登记",
              }),
              e.jsx("button", {
                onClick: s,
                className: "p-2 rounded-full hover:bg-black/5",
                children: e.jsx(Ts, {
                  size: 24,
                  strokeWidth: 1.5,
                  className: "text-[var(--ink-black)]",
                }),
              }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: (g) => {
              (g.preventDefault(), h());
            },
            className: "space-y-12",
            children: [
              e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  e.jsx("input", {
                    ref: p,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: m,
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      var g;
                      return (g = p.current) == null ? void 0 : g.click();
                    },
                    className:
                      "w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 hover:border-black/20 transition-colors bg-slate-50",
                    children: u
                      ? e.jsx("img", {
                          src: u,
                          alt: "",
                          className: "w-full h-full object-cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full flex items-center justify-center text-slate-400 text-[10px] uppercase",
                          children: "头像",
                        }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b border-black pb-4",
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "经纪人姓名",
                  }),
                  e.jsx("input", {
                    required: !0,
                    value: a,
                    onChange: (g) => r(g.target.value),
                    className:
                      "w-full font-serif text-2xl outline-none bg-transparent text-[var(--ink-black)]",
                    placeholder: "经纪人姓名",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b border-black pb-4",
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "所属娱乐公司机构",
                  }),
                  e.jsx("input", {
                    value: i,
                    onChange: (g) => o(g.target.value),
                    className:
                      "w-full font-serif text-2xl outline-none bg-transparent text-[var(--ink-black)]",
                    placeholder: "公司 / 经纪机构名称",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "人设 / 说话风格",
                  }),
                  e.jsx("textarea", {
                    value: c,
                    onChange: (g) => d(g.target.value),
                    rows: 4,
                    className:
                      "w-full border border-slate-100 p-6 text-xs leading-relaxed outline-none focus:border-black bg-[#FDFDFD] text-[var(--ink-black)]",
                    placeholder: "经纪人性格、说话风格...",
                  }),
                ],
              }),
              e.jsx("button", {
                type: "submit",
                className:
                  "w-full py-8 bg-black text-white text-[11px] font-bold uppercase tracking-[0.8em]",
                children: "同步至云端",
              }),
            ],
          }),
        ],
      }),
    });
  },
  iH = () => {
    const {
        userPersonas: t,
        managers: s,
        currentPersonaId: n,
        setCurrentPersonaId: a,
        addUserPersona: r,
        updateUserPersona: i,
        deleteUserPersona: o,
        addManager: c,
        updateManager: d,
        deleteManager: u,
      } = Nd(),
      [f, p] = l.useState(null),
      [m, h] = l.useState(null),
      [g, x] = l.useState(!1),
      [y, v] = l.useState(!1),
      [b, N] = l.useState(!1),
      w = t.find((_) => _.id === n) || t[0] || {};
    return e.jsxs("div", {
      className: "px-10 pt-8 pb-24",
      children: [
        e.jsxs("div", {
          className: "mb-16",
          children: [
            e.jsxs("div", {
              className: "flex items-center space-x-8 mb-10",
              children: [
                e.jsx("div", {
                  className:
                    "w-14 h-14 bg-black flex items-center justify-center text-white flex-shrink-0 overflow-hidden rounded-sm",
                  style:
                    w != null && w.avatar
                      ? { background: `url(${w.avatar}) center/cover` }
                      : {},
                  children:
                    !(w != null && w.avatar) &&
                    e.jsx("span", {
                      className: "font-serif text-2xl font-bold",
                      children: ((w == null ? void 0 : w.screenName) ||
                        (w == null ? void 0 : w.name) ||
                        "未")[0],
                    }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("h2", {
                      className:
                        "font-serif text-3xl font-bold mb-1 text-[var(--ink-black)]",
                      children:
                        (w == null ? void 0 : w.screenName) ||
                        (w == null ? void 0 : w.name) ||
                        "未命名",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em]",
                      children: "身份：授权鉴赏人",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-2",
                  children: e.jsx("button", {
                    onClick: () => w && p(w),
                    className:
                      "p-2 rounded-full hover:bg-black/5 text-slate-500",
                    children: e.jsx(_l, { size: 16 }),
                  }),
                }),
              ],
            }),
            e.jsxs("p", {
              className:
                "text-sm text-slate-600 leading-relaxed italic border-l-[1px] border-black pl-6 mb-8",
              children: [
                "「 ",
                (w == null ? void 0 : w.signature) || "暂无个性签名",
                " 」",
              ],
            }),
            e.jsx("button", {
              onClick: () => N(!0),
              className:
                "text-[10px] font-bold uppercase tracking-[0.3em] border-b border-black/20 pb-2 hover:border-black transition-colors",
              children: "切换馆藏身份",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "pt-8 border-t border-black/5",
          children: [
            e.jsxs("div", {
              className: "flex justify-between items-center mb-6",
              children: [
                e.jsx("p", {
                  className:
                    "text-[9px] font-bold text-slate-300 uppercase tracking-[0.5em]",
                  children: "经纪人",
                }),
                e.jsx("button", {
                  onClick: () => v(!0),
                  className:
                    "text-[9px] font-bold uppercase tracking-widest text-slate-400 hover:text-black",
                  children: "新建经纪人",
                }),
              ],
            }),
            e.jsx("div", {
              className: "space-y-6",
              children: s.map((_) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between group",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center space-x-6",
                        children: [
                          e.jsx("img", {
                            src:
                              _.avatar ||
                              `https://api.dicebear.com/7.x/avataaars/svg?seed=${_.id}`,
                            alt: "",
                            className: "w-8 h-8 object-cover rounded-full",
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs font-bold tracking-widest text-[var(--ink-black)]",
                            children: _.name || "未命名",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex gap-1 opacity-0 group-hover:opacity-100",
                        children: [
                          e.jsx("button", {
                            onClick: () => h(_),
                            className: "p-2 text-slate-400 hover:text-black",
                            children: e.jsx(_l, { size: 14 }),
                          }),
                          e.jsx("button", {
                            onClick: () => u(_.id),
                            className: "p-2 text-red-400 hover:text-red-600",
                            children: e.jsx(_n, { size: 14 }),
                          }),
                        ],
                      }),
                    ],
                  },
                  _.id,
                ),
              ),
            }),
          ],
        }),
        g &&
          e.jsx(xN, {
            onClose: () => x(!1),
            onSave: (_) => {
              (r(_), x(!1));
            },
          }),
        f &&
          e.jsx(xN, {
            initial: f,
            onClose: () => p(null),
            onSave: (_) => {
              (i(f.id, _), p(null));
            },
          }),
        y &&
          e.jsx(hN, {
            onClose: () => v(!1),
            onSave: (_) => {
              (c(_), v(!1));
            },
          }),
        b &&
          e.jsx("div", {
            className:
              "bubble-app fixed inset-0 z-50 flex flex-col bg-white overflow-y-auto",