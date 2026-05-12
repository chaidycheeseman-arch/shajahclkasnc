          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          },
        }),
        e.jsx(We.div, {
          animate: { opacity: [0.2, 0.3, 0.2], scale: [1, 1.1, 1] },
          transition: { duration: 10, repeat: 1 / 0, ease: "easeInOut" },
          className:
            "absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-bl from-[#a63434]/5 to-transparent rounded-full blur-[80px] pointer-events-none",
        }),
        e.jsxs("div", {
          className: "px-8 pt-12 pb-6 flex justify-between items-end z-10",
          children: [
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsxs(We.h1, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  className:
                    "text-5xl font-light tracking-tighter leading-[0.9] cursor-pointer hover:opacity-80 transition-opacity",
                  onClick: c,
                  children: ["时光", e.jsx("br", {}), "信箱"],
                }),
                e.jsx(We.div, {
                  initial: { width: 0 },
                  animate: { width: 40 },
                  transition: { delay: 0.5, duration: 0.8 },
                  className: "h-[2px] bg-[#a63434] mt-3",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-right flex flex-col items-end gap-1",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-gray-400",
                  children: [
                    e.jsx($h, { size: 12 }),
                    e.jsx("span", {
                      className: "text-[0.625rem] tracking-[0.2em] uppercase",
                      children: "微风",
                    }),
                  ],
                }),
                e.jsx("span", {
                  className: "text-4xl font-light leading-none",
                  children: new Date().getDate(),
                }),
                e.jsx("span", {
                  className: "text-xs tracking-[0.3em] uppercase text-gray-400",
                  children: new Date().toLocaleDateString("zh-CN", {
                    month: "long",
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx(We.div, {
          className: "flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide z-10",
          variants: h,
          initial: "hidden",
          animate: "visible",
          children: e.jsxs("div", {
            className: "flex flex-col gap-4 h-full",
            children: [
              e.jsxs("div", {
                className: "flex gap-4 h-64",
                children: [
                  e.jsxs(We.div, {
                    variants: g,
                    onClick: () => u(!0),
                    className:
                      "flex-[2] bg-[#2c2c2c] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-sm rounded-bl-sm p-6 text-white flex flex-col justify-between relative overflow-hidden cursor-pointer group shadow-xl",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5",
                      }),
                      e.jsx(We.div, {
                        className:
                          "absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl",
                        animate: { scale: [1, 1.2, 1] },
                        transition: { duration: 4, repeat: 1 / 0 },
                      }),
                      e.jsxs("div", {
                        className:
                          "relative z-10 flex justify-between items-start",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors",
                            children: e.jsx(ml, { size: 18 }),
                          }),
                          e.jsx(We.div, {
                            whileHover: { rotate: 45 },
                            transition: { duration: 0.3 },
                            className:
                              "w-8 h-8 rounded-full bg-white text-[#2c2c2c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                            children: e.jsx(wl, { size: 16 }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          e.jsx("h3", {
                            className: "text-3xl font-light tracking-wide mb-1",
                            children: "写信",
                          }),
                          e.jsxs("p", {
                            className:
                              "text-[0.625rem] tracking-[0.2em] opacity-60 uppercase leading-relaxed",
                            children: [
                              "致未来的自己",
                              e.jsx("br", {}),
                              "致友人",
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex justify-end",
                        children: e.jsx(We.div, {
                          whileHover: { x: 5 },
                          className:
                            "text-xs tracking-widest border-b border-white/30 pb-1",
                          children: "开始写信",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex-1 flex flex-col gap-4",
                    children: [
                      e.jsxs(We.div, {
                        variants: g,
                        onClick: () => {
                          (p(!1), t("history"));
                        },
                        className: `flex-1 bg-white rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-sm rounded-br-sm p-5 flex flex-col justify-between cursor-pointer group transition-all shadow-sm hover:shadow-md relative overflow-hidden border ${f ? "border-[#a63434] shadow-[0_0_0_1px_#a63434]" : "border border-gray-100 hover:border-[#a63434]/30"}`,
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -right-4 -top-4 text-gray-50 opacity-50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500",
                            children: e.jsx(Ac, { size: 80, strokeWidth: 0.5 }),
                          }),
                          e.jsxs("div", {
                            className:
                              "relative z-10 flex justify-between items-start",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[0.625rem] tracking-[0.2em] text-gray-400 uppercase",
                                children: "收件箱",
                              }),
                              e.jsx("button", {
                                onClick: (x) => {
                                  (x.stopPropagation(), p(!0), i());
                                },
                                disabled: o,
                                className: `w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-20 ${f ? "bg-[#a63434] text-white" : "bg-gray-50 hover:bg-[#a63434] hover:text-white"}`,
                                title: "收信",
                                children: o
                                  ? e.jsx(Sn, {
                                      size: 14,
                                      className: "animate-spin",
                                    })
                                  : e.jsx(YT, { size: 14 }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "relative z-10",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-4xl font-light block text-[#2c2c2c] group-hover:translate-x-1 transition-transform",
                                children: n.length,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[0.625rem] text-gray-400 mt-1 block truncate",
                                children: o
                                  ? "收信中..."
                                  : m
                                    ? "新信件"
                                    : "暂无新信",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(We.div, {
                        variants: g,
                        onClick: () => t("pending"),
                        className:
                          "h-20 bg-[#f5f5f5] rounded-xl p-4 flex items-center justify-between cursor-pointer group hover:bg-[#eeeeee] transition-colors relative overflow-hidden",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity",
                            children: e.jsx(wl, {
                              size: 14,
                              className: "text-gray-400",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              e.jsx("span", {
                                className: "text-xl font-light",
                                children: a.length,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[0.5625rem] tracking-[0.2em] text-gray-400 uppercase",
                                children: "在途",
                              }),
                            ],
                          }),
                          e.jsx(Dr, {
                            size: 16,
                            className:
                              "text-gray-300 group-hover:text-[#a63434] transition-colors",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(We.div, {
                variants: g,
                onClick: () => t("bottle"),
                className:
                  "h-28 bg-gradient-to-r from-[#1e293b] to-[#0f172a] rounded-xl p-6 text-white flex items-center justify-between relative overflow-hidden cursor-pointer group shadow-lg",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]",
                  }),
                  e.jsx("svg", {
                    className:
                      "absolute bottom-0 left-0 w-full h-12 opacity-20 pointer-events-none",
                    viewBox: "0 0 100 20",
                    preserveAspectRatio: "none",
                    children: e.jsx(We.path, {
                      d: "M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z",
                      fill: "white",
                      animate: {
                        d: [
                          "M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z",
                          "M0 10 Q 25 0 50 10 T 100 10 V 20 H 0 Z",
                          "M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z",
                        ],
                      },
                      transition: {
                        duration: 5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                    }),
                  }),
                  e.jsxs("div", {
                    className: "relative z-10 flex flex-col gap-1",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("h3", {
                            className: "text-xl tracking-[0.2em] font-light",
                            children: "雪夜回望",
                          }),
                          e.jsx(Xn, {
                            size: 14,
                            className: "text-yellow-200 animate-pulse",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-[0.625rem] tracking-[0.1em] text-blue-200/80 uppercase",
                        children: "遗落的B面",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "relative z-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors bg-white/5 backdrop-blur-sm group-hover:scale-110 duration-500",
                    children: e.jsx(m3, {
                      size: 20,
                      className: "text-blue-300",
                    }),
                  }),
                ],
              }),
              e.jsxs(We.div, {
                variants: g,
                className: "flex-1 flex flex-col gap-4 mt-2",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex justify-between items-end px-1 border-b border-gray-100 pb-2",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-xs tracking-[0.3em] font-bold text-gray-400 uppercase",
                        children: "联系人",
                      }),
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] text-gray-300 font-serif italic",
                        children: "保持联系",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex gap-6 overflow-x-auto pb-4 scrollbar-hide items-center",
                    children: [
                      s.map((x, y) =>
                        e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, scale: 0.8 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { delay: 0.5 + y * 0.1 },
                            onClick: () => r(x),
                            className:
                              "flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer group",
                            children: [
                              e.jsxs("div", {
                                className: "relative",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-lg font-serif text-[#2c2c2c] group-hover:border-[#a63434] group-hover:text-[#a63434] transition-all duration-500 z-10 relative overflow-hidden",
                                    children: [
                                      (x.name || x.nickname)[0],
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-[#a63434] opacity-0 group-hover:opacity-5 transition-opacity duration-500",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 rounded-full border border-[#a63434] opacity-0 scale-110 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500",
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[0.625rem] font-serif text-gray-500 tracking-wider group-hover:text-[#2c2c2c] transition-colors",
                                children: x.name || x.nickname,
                              }),
                            ],
                          },
                          x.id,
                        ),
                      ),
                      s.length === 0 &&
                        e.jsx("div", {
                          className:
                            "w-full py-4 text-center text-xs text-gray-300 font-serif italic",
                          children: "等待添加联系人...",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(Os, {
          children: d && e.jsx(cX, { isOpen: d, onClose: () => u(!1) }),
        }),
      ],
    });
  },
  uX = ({ isOpen: t, onClose: s, target: n }) => {
    const { sendTimeCapsule: a } = sl(),
      [r, i] = l.useState("writing"),
      [o, c] = l.useState(""),
      d = () => {
        (s(),
          setTimeout(() => {
            (i("writing"), c(""));
          }, 500));
      },
      u = () => {
        if (!o.trim() || !a || !(n != null && n.id)) return;
        const f = 60 * 1e3;
        (a(o.trim(), n.id, Date.now() + f),
          i("sending"),
          setTimeout(() => {
            (i("success"), setTimeout(d, 1500));
          }, 2e3));
      };
    return t
      ? e.jsx(We.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-[#e0e0e0]/80 backdrop-blur-xl p-4 md:p-8",
          onClick: (f) => f.stopPropagation(),
          children: e.jsxs(We.div, {
            initial: { scale: 0.95, y: 20, opacity: 0 },
            animate: { scale: 1, y: 0, opacity: 1 },
            exit: { scale: 0.95, y: 20, opacity: 0 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            className:
              "relative w-full max-w-3xl h-[85vh] bg-white shadow-2xl overflow-hidden flex flex-col rounded-sm",
            onClick: (f) => f.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: d,
                className:
                  "absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 z-10",
                style: { top: "max(1rem, 16px)", right: "max(1rem, 16px)" },
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsxs(Os, {
                mode: "wait",
                children: [
                  r === "writing" &&
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "flex flex-col h-full",
                        children: [
                          e.jsxs("div", {
                            className:
                              "px-8 md:px-12 pt-12 pb-6 flex justify-between items-end border-b border-[#e6e6e6]/50",
                            children: [
                              e.jsxs("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-[10px] text-gray-400 tracking-[0.3em] uppercase",
                                    children: "回复给",
                                  }),
                                  e.jsx("h2", {
                                    className:
                                      "font-serif text-3xl text-[#2c2c2c] tracking-wide font-light",
                                    children: n ? n.name || n.nickname : "未知",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex flex-col items-end gap-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-[10px] text-gray-400 tracking-[0.2em] uppercase",
                                    children: new Date().toLocaleDateString(
                                      "zh-CN",
                                      {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                      },
                                    ),
                                  }),
                                  e.jsx("div", {
                                    className: "w-12 h-[1px] bg-[#d4af37]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "flex-1 px-8 md:px-12 py-8 relative overflow-hidden",
                            children: e.jsx("textarea", {
                              value: o,
                              onChange: (f) => c(f.target.value),
                              className:
                                "w-full h-full bg-transparent border-none resize-none focus:ring-0 p-0 font-serif text-lg text-[#2c2c2c] leading-[2.5rem] placeholder:text-gray-300/50",
                              placeholder: "提笔写下你的思念...",
                              autoFocus: !0,
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "px-8 md:px-12 pb-12 pt-6 flex justify-between items-center bg-gradient-to-t from-white to-transparent",
                            children: [
                              e.jsx("button", {
                                onClick: d,
                                className:
                                  "text-[10px] font-serif text-gray-400 hover:text-gray-600 tracking-[0.2em] uppercase transition-colors",
                                children: "放弃",
                              }),
                              e.jsxs("button", {
                                onClick: u,
                                disabled: !o.trim(),
                                className:
                                  "group flex items-center gap-3 px-8 py-3 bg-[#2c2c2c] text-white rounded-full hover:bg-black transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-xs tracking-[0.2em] uppercase",
                                    children: "发送信件",
                                  }),
                                  e.jsx(ri, {
                                    size: 12,
                                    className:
                                      "group-hover:translate-x-1 transition-transform",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-8 right-8 w-16 h-20 border border-gray-200 p-1 rotate-6 opacity-50 pointer-events-none hidden md:block",
                            children: e.jsx("div", {
                              className:
                                "w-full h-full bg-gray-100 flex items-center justify-center",
                              children: e.jsx("span", {
                                className:
                                  "text-[8px] text-gray-400 font-serif tracking-widest",
                                children: "邮戳",
                              }),
                            }),
                          }),
                        ],
                      },
                      "writing",
                    ),
                  r === "sending" &&
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center gap-8 bg-white/90 backdrop-blur-sm z-10",
                        children: [
                          e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center",
                                children: e.jsx(Ac, {
                                  size: 32,
                                  className: "text-[#2c2c2c] opacity-20",
                                }),
                              }),
                              e.jsx(We.div, {
                                className:
                                  "absolute inset-0 border-t-2 border-[#2c2c2c] rounded-full",
                                animate: { rotate: 360 },
                                transition: {
                                  duration: 1.5,
                                  repeat: 1 / 0,
                                  ease: "linear",
                                },
                              }),
                            ],
                          }),
                          e.jsx("span", {
                            className:
                              "font-serif text-gray-500 tracking-[0.3em] text-xs uppercase",
                            children: "发送中...",
                          }),
                        ],
                      },
                      "sending",
                    ),
                  r === "success" &&
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center gap-8 bg-white z-10",
                        children: [
                          e.jsx(We.div, {
                            initial: { scale: 0.8, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { duration: 0.5 },
                            className:
                              "w-24 h-24 rounded-full bg-[#2c2c2c] flex items-center justify-center shadow-xl",
                            children: e.jsx("svg", {
                              width: "32",
                              height: "32",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "white",
                              strokeWidth: "1.5",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: e.jsx("polyline", {
                                points: "20 6 9 17 4 12",
                              }),
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-center space-y-2",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-serif text-2xl text-[#2c2c2c] tracking-widest",
                                children: "发送成功",
                              }),
                              e.jsx("p", {
                                className:
                                  "font-serif text-xs text-gray-400 tracking-[0.2em] uppercase",
                                children: "信件已在路上",
                              }),
                            ],
                          }),
                        ],
                      },
                      "success",
                    ),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  fX = ({ puzzle: t, onUnlock: s }) => {
    const [n, a] = l.useState(""),
      [r, i] = l.useState(!1),
      o = () => {
        n.trim() === t.answer ? s() : (i(!0), setTimeout(() => i(!1), 1e3));
      };
    return e.jsx("div", {
      className:
        "absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md p-8",
      children: e.jsxs(We.div, {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        className:
          "w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 flex flex-col items-center gap-6",
        children: [
          e.jsx("div", {
            className:
              "w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center",
            children: e.jsx(lr, { size: 32, className: "text-gray-400" }),
          }),
          e.jsxs("div", {
            className: "text-center space-y-2",
            children: [
              e.jsx("h3", {
                className: "font-serif text-xl text-[#2c2c2c] tracking-widest",
                children: "Locked Letter",
              }),
              e.jsx("p", {
                className: "text-sm text-gray-500 font-serif",
                children: t.question,
              }),
            ],
          }),
          e.jsxs("div", {
            className: "w-full relative",
            children: [
              e.jsx("input", {
                type: "text",
                value: n,
                onChange: (c) => a(c.target.value),
                placeholder: "输入答案...",
                className: `w-full px-4 py-3 bg-gray-50 border rounded-lg text-center font-serif focus:outline-none transition-colors ${r ? "border-red-300 bg-red-50" : "border-gray-200 focus:border-gray-400"}`,
              }),
              r &&
                e.jsx(We.span, {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  className:
                    "absolute -bottom-6 left-0 right-0 text-center text-xs text-red-400 font-serif",
                  children: "答案错误",
                }),
            ],
          }),
          e.jsx("button", {
            onClick: o,
            className:
              "px-8 py-2 bg-[#2c2c2c] text-white rounded-full font-serif text-xs tracking-[0.2em] uppercase hover:bg-black transition-colors",
            children: "解锁",
          }),
          t.hint &&
            e.jsxs("p", {
              className: "text-xs text-gray-400 font-serif italic",
              children: ["提示：", t.hint],
            }),
        ],
      }),
    });
  },
  mX = () => {
    var _, A, k, C, M, E;
    const {
        selectedChar: t,
        selectedLetter: s,
        setSelectedLetter: n,
        navigateTo: a,
        theme: r,
        letters: i,
        contacts: o,
        isLoadingLetters: c,
        previousView: d,
      } = sl(),
      [u, f] = l.useState(!1),
      [p, m] = l.useState(!1),
      [h, g] = l.useState(!1),
      x = t ? i[t.id] || [] : [],
      y =
        t ||
        (s != null && s.fromContactId
          ? (o || []).find((S) => S.id === s.fromContactId)
          : null);
    (l.useEffect(() => {
      x.length > 0 && !s && n(x[0]);
    }, [x, s, n]),
      l.useEffect(() => {
        if (!s) return;
        if (!s.isPuzzle) {
          g(!0);
          return;
        }
        let S = !1;
        return (
          be.get(`puzzle_unlocked_${s.id}`).then((j) => {
            S || g(j === !0 || j === "true");
          }),
          () => {
            S = !0;
          }
        );
      }, [s]));
    const v = () => {
        (g(!0), s && be.set(`puzzle_unlocked_${s.id}`, !0));
      },
      b = r.layout === "vertical",
      N = s
        ? s.content
            .split(
              `
`,
            )
            .filter((S) => S.trim() !== "")
        : [],
      w =
        (s == null ? void 0 : s.userLetterContent) != null &&
        s.userLetterContent !== ""
          ? s.userLetterContent
              .split(
                `
`,
              )
              .filter((S) => S.trim() !== "")
          : [];
    return e.jsxs("div", {
      className:
        "w-full h-full relative flex flex-col overflow-hidden transition-colors duration-500",
      style: {
        backgroundColor:
          ((_ = r.paper) == null ? void 0 : _.color) || "#fcfcfc",
        backgroundImage:
          (A = r.paper) != null && A.isCustom && r.customPaperUrl
            ? `url(${r.customPaperUrl})`
            : ((k = r.paper) == null ? void 0 : k.texture) || void 0,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      onClick: () => f((S) => !S),
      children: [
        e.jsx(Os, {
          children:
            u &&
            e.jsxs(We.div, {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              transition: { duration: 0.5 },
              className:
                "absolute bottom-12 left-8 flex flex-col gap-8 z-50 pointer-events-none",
              children: [
                e.jsxs("button", {
                  onClick: (S) => {
                    (S.stopPropagation(),
                      a(
                        d === "settings"
                          ? t
                            ? "contactLetters"
                            : "history"
                          : d || "history",
                      ));
                  },
                  className:
                    "group pointer-events-auto flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-[1px] bg-[#2c2c2c] group-hover:w-12 transition-all duration-500",
                    }),
                    e.jsx("span", {
                      className:
                        "text-xs font-serif text-gray-500 group-hover:text-[#2c2c2c] transition-colors duration-500",
                      children: "返回",
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: (S) => {
                    (S.stopPropagation(), a("settings"));
                  },
                  className:
                    "group pointer-events-auto flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-[1px] bg-[#2c2c2c] group-hover:w-12 transition-all duration-500",
                    }),
                    e.jsx("span", {
                      className:
                        "text-xs font-serif text-gray-500 group-hover:text-[#2c2c2c] transition-colors duration-500",
                      children: "设定",
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: (S) => {
                    (S.stopPropagation(), m(!0));
                  },
                  className:
                    "group pointer-events-auto flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-[1px] bg-[#2c2c2c] group-hover:w-12 transition-all duration-500",
                    }),
                    e.jsx("span", {
                      className:
                        "text-xs font-serif text-gray-500 group-hover:text-[#2c2c2c] transition-colors duration-500",
                      children: "回信",
                    }),
                  ],
                }),
              ],
            }),
        }),
        e.jsx(Os, {
          children:
            p && e.jsx(uX, { isOpen: p, onClose: () => m(!1), target: y }),
        }),
        e.jsx("div", {
          className: `
            flex-1 relative z-10 pt-32 pb-12 px-8 md:px-16
            ${b ? "flex flex-row-reverse overflow-x-auto overflow-y-hidden scrollbar-hide" : "flex flex-col overflow-y-auto overflow-x-hidden scrollbar-hide"}
        `,
          children: e.jsx(Os, {
            mode: "wait",
            children: s
              ? e.jsxs(e.Fragment, {
                  children: [
                    !h &&
                      s.isPuzzle &&
                      e.jsx(fX, { puzzle: s.puzzle, onUnlock: v }),
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 1.5, ease: "easeOut" },
                        className: `
                      ${b ? "h-full flex flex-col flex-wrap content-start gap-16" : "w-full max-w-3xl mx-auto flex flex-col gap-12"}
                      ${!h && s.isPuzzle ? "blur-md opacity-50 pointer-events-none" : ""}
                    `,
                        style: {
                          writingMode: b ? "vertical-rl" : "horizontal-tb",
                          textOrientation: "upright",
                        },
                        children: [
                          w.length > 0 &&
                            e.jsxs("div", {
                              className: b ? "mb-12" : "mb-10",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "font-serif text-gray-500 opacity-90 mb-2",
                                  style: {
                                    fontSize: `${r.fontSize * 0.75}rem`,
                                    letterSpacing: `${r.letterSpacing}em`,
                                  },
                                  children: "我的去信",
                                }),
                                e.jsx("div", {
                                  className: `whitespace-pre-wrap border-l-2 border-gray-200 pl-4 ${b ? "" : "text-justify"}`,
                                  style: {
                                    fontFamily:
                                      ((C = r.font) == null
                                        ? void 0
                                        : C.family) || "serif",
                                    color: r.fontColor || "#2c2c2c",
                                    opacity: 0.9,
                                    lineHeight: r.lineHeight,
                                    letterSpacing: `${r.letterSpacing}em`,
                                    fontSize: `${r.fontSize * 0.95}rem`,
                                  },
                                  children: w.map((S, j) =>
                                    e.jsx(
                                      "p",
                                      {
                                        style: {
                                          marginBottom: b
                                            ? 0
                                            : `${r.paragraphSpacing * 0.8}rem`,
                                          marginLeft: b
                                            ? `${r.paragraphSpacing}rem`
                                            : 0,
                                        },
                                        children: S,
                                      },
                                      j,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          w.length > 0 &&
                            e.jsxs("p", {
                              className:
                                "font-serif text-gray-500 opacity-90 mb-2",
                              style: {
                                fontSize: `${r.fontSize * 0.75}rem`,
                                letterSpacing: `${r.letterSpacing}em`,
                              },
                              children: [
                                (s == null ? void 0 : s.signature) || "TA",
                                " 的回信",
                              ],
                            }),
                          e.jsx("div", {
                            className: `
                              whitespace-pre-wrap
                              ${b ? "" : "text-justify"}
                          `,
                            style: {
                              fontFamily:
                                ((M = r.font) == null ? void 0 : M.family) ||
                                "serif",
                              color: r.fontColor || "#2c2c2c",
                              textShadow: "0 0 1px rgba(0,0,0,0.1)",
                              lineHeight: r.lineHeight,
                              letterSpacing: `${r.letterSpacing}em`,
                              fontSize: `${r.fontSize}rem`,
                            },
                            children: N.map((S, j) =>
                              e.jsx(
                                "p",
                                {
                                  style: {
                                    marginBottom: b
                                      ? 0
                                      : `${r.paragraphSpacing}rem`,
                                    marginLeft: b
                                      ? `${r.paragraphSpacing}rem`
                                      : 0,
                                  },
                                  children: S,
                                },
                                j,
                              ),
                            ),
                          }),
                          e.jsxs("div", {
                            className: `
                          flex gap-4 opacity-80
                          ${b ? "items-start mt-0 pt-0 pr-8" : "flex-col items-end mt-16 pt-8 self-end"}
                      `,
                            style: {
                              fontFamily:
                                ((E = r.font) == null ? void 0 : E.family) ||
                                "serif",
                              color: r.fontColor || "#2c2c2c",
                            },
                            children: [
                              e.jsx("span", {
                                className: "font-medium",
                                style: {
                                  fontSize: `${r.fontSize * 0.9}rem`,
                                  letterSpacing: `${r.letterSpacing + 0.1}em`,
                                },
                                children: s.signature,
                              }),
                              e.jsx("span", {
                                className: "text-gray-500",
                                style: {
                                  fontSize: `${r.fontSize * 0.6}rem`,
                                  letterSpacing: `${r.letterSpacing + 0.05}em`,
                                },
                                children: s.lunarDate,
                              }),
                            ],
                          }),
                        ],
                      },
                      s.id,
                    ),
                  ],
                })
              : e.jsx(We.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "w-full h-full flex items-center justify-center",
                  children: e.jsxs("div", {
                    className: "text-center space-y-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-gray-400 font-serif tracking-widest text-lg",
                        children: c ? "正在展信..." : "暂无书信",
                      }),
                      c &&
                        e.jsxs("div", {
                          className: "flex justify-center gap-1",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-1 h-1 bg-gray-300 rounded-full animate-bounce",
                              style: { animationDelay: "0s" },
                            }),
                            e.jsx("div", {
                              className:
                                "w-1 h-1 bg-gray-300 rounded-full animate-bounce",
                              style: { animationDelay: "0.2s" },
                            }),
                            e.jsx("div", {
                              className:
                                "w-1 h-1 bg-gray-300 rounded-full animate-bounce",
                              style: { animationDelay: "0.4s" },
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
          }),
        }),
      ],
    });
  },
  pX = () => {
    const { navigateTo: t, pendingLetters: s } = sl(),
      n = () => {
        t("home");
      },
      a = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
      },
      r = {
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };
    return e.jsxs("div", {
      className:
        "w-full h-full flex flex-col bg-[#fcfcfc] relative overflow-hidden font-serif text-[#2c2c2c]",
      children: [
        e.jsx("div", {
          className: "absolute inset-0 opacity-[0.03] pointer-events-none",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          },
        }),
        e.jsx(We.div, {
          animate: {
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          },
          transition: { duration: 12, repeat: 1 / 0, ease: "easeInOut" },
          className:
            "absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-[100px] pointer-events-none",
        }),
        e.jsxs("div", {
          className:
            "relative z-20 px-8 pt-14 pb-6 flex justify-between items-end",
          children: [
            e.jsx("button", {
              onClick: n,
              className:
                "group flex items-center gap-2 text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors",
              children: e.jsx("div", {
                className:
                  "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white/50 backdrop-blur-sm",
                children: e.jsx(Xr, { size: 18, strokeWidth: 1.5 }),
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-col items-end",
              children: [
                e.jsx("span", {
                  className:
                    "text-[10px] font-serif text-gray-400 tracking-[0.3em] uppercase mb-1",
                  children: "In Transit",
                }),
                e.jsx("h1", {
                  className:
                    "text-3xl font-serif text-[#2c2c2c] tracking-widest font-light",
                  children: "在途信件",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "flex-1 relative z-10 px-6 pb-8 overflow-y-auto scrollbar-hide",
          children:
            s.length > 0
              ? e.jsxs(We.div, {
                  variants: a,
                  initial: "hidden",
                  animate: "visible",
                  className: "relative pl-8 pt-4 space-y-12",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute left-[19px] top-0 bottom-0 w-[1px] bg-gray-200",
                    }),
                    s.map((i, o) => {
                      const c = new Date(i.deliverTime),
                        d = i.to === "self";
                      return e.jsxs(
                        We.div,
                        {
                          variants: r,
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute -left-[21px] top-6 w-3 h-3 rounded-full bg-white border-2 border-[#2c2c2c] z-10",
                            }),
                            e.jsxs("div", {
                              className:
                                "bg-white border border-gray-100 rounded-sm p-6 shadow-sm hover:shadow-md transition-shadow duration-500 group relative overflow-hidden",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative z-10 flex justify-between items-start mb-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-xs tracking-[0.2em] text-gray-400 uppercase mb-1",
                                          children: "Expected Arrival",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-lg font-serif text-[#2c2c2c]",
                                          children: c.toLocaleDateString(),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-xs text-gray-400 font-serif mt-1",
                                          children: c.toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#2c2c2c] transition-colors",
                                      children: d
                                        ? e.jsx(sE, { size: 18 })
                                        : e.jsx(ri, { size: 18 }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "h-[1px] w-full bg-gray-100 mb-4",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 text-sm text-gray-500 font-serif",
                                  children: [
                                    e.jsx(kl, { size: 14 }),
                                    e.jsx("span", {
                                      children: d
                                        ? "To: Future Self"
                                        : `To: ${i.toName || "Unknown"}`,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "mt-4 space-y-2 opacity-30 select-none pointer-events-none filter blur-[2px]",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "h-2 bg-gray-300 rounded w-3/4",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "h-2 bg-gray-300 rounded w-full",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "h-2 bg-gray-300 rounded w-1/2",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute bottom-4 right-4 px-3 py-1 bg-gray-100 rounded-full text-[10px] tracking-widest uppercase text-gray-500",
                                  children: "Traveling",
                                }),
                              ],
                            }),
                          ],
                        },
                        i.id,
                      );
                    }),
                  ],
                })
              : e.jsxs(We.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className:
                    "h-full flex flex-col items-center justify-center text-gray-400 gap-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center",
                      children: e.jsx(Dr, {
                        size: 24,
                        className: "opacity-50",
                      }),
                    }),
                    e.jsx("span", {
                      className: "font-serif text-sm tracking-widest",
                      children: "暂无在途信件",
                    }),
                  ],
                }),
        }),
      ],
    });
  },
  xX = () => {
    const {
        theme: t,
        updateTheme: s,
        handleCustomUpload: n,
        handleCustomFontUrl: a,
        navigateTo: r,
        previousView: i,
      } = sl(),
      o = l.useRef(null),
      c = l.useRef(null),
      [d, u] = l.useState(""),
      [f, p] = l.useState(!1),
      m = () => {
        r(i || "home");
      },
      h = [...Po.font.filter((y) => !y.isCustom), ...(t.customFonts || [])],
      g = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      },
      x = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };
    return e.jsxs("div", {
      className:
        "w-full h-full flex flex-col bg-[#fcfcfc] relative overflow-hidden",
      children: [
        e.jsxs("div", {
          className:
            "absolute inset-0 pointer-events-none opacity-30 overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-gray-200/40 to-transparent rounded-full blur-3xl",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-gray-200/40 to-transparent rounded-full blur-3xl",
            }),
            e.jsx("div", {
              className: "absolute inset-0 opacity-[0.03]",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              },
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex items-center justify-between px-6 pb-6 pt-14 z-20 relative",
          children: [
            e.jsx("button", {
              onClick: m,
              className:
                "p-2 -ml-2 text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors rounded-full hover:bg-black/5",
              children: e.jsx(Xr, { size: 24, strokeWidth: 1.5 }),
            }),
            e.jsx("h2", {
              className:
                "text-lg font-serif text-[#2c2c2c] tracking-[0.3em] font-medium",
              children: "设定",
            }),
            e.jsx("div", { className: "w-8" }),
            " ",
          ],
        }),
        e.jsx(We.div, {
          className:
            "flex-1 overflow-y-auto px-8 pb-32 scrollbar-hide relative z-10",
          variants: g,
          initial: "hidden",
          animate: "visible",
          children: e.jsxs("div", {
            className: "max-w-md mx-auto space-y-10 pt-4",
            children: [
              e.jsxs(We.section, {
                variants: x,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4 mb-5",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] font-serif text-gray-400 tracking-[0.2em] uppercase",
                        children: "纸张",
                      }),
                      e.jsx("div", { className: "h-[1px] flex-1 bg-gray-100" }),
                      e.jsx("h3", {
                        className:
                          "text-base font-serif text-[#2c2c2c] tracking-widest",
                        children: "纸张",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-4 gap-4",
                    children: Po.paper.map((y) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => {
                            var v;
                            y.isCustom
                              ? (v = o.current) == null || v.click()
                              : s("paper", y);
                          },
                          className: `aspect-square rounded-full transition-all duration-500 relative group ${t.paper.id === y.id ? "scale-110 shadow-lg ring-1 ring-[#2c2c2c] ring-offset-4 ring-offset-[#fcfcfc]" : "hover:scale-105 opacity-80 hover:opacity-100"}`,
                          style: {
                            backgroundColor: y.color,
                            backgroundImage:
                              y.isCustom && t.customPaperUrl
                                ? `url(${t.customPaperUrl})`
                                : y.texture,
                            backgroundSize: "cover",
                            boxShadow:
                              t.paper.id === y.id
                                ? "0 10px 20px -5px rgba(0,0,0,0.1)"
                                : "none",
                          },
                          title: y.name,
                          children: [
                            y.isCustom &&
                              !t.customPaperUrl &&
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50/50 backdrop-blur-[1px]",
                                children: e.jsx(Ta, {
                                  size: 16,
                                  strokeWidth: 1.5,
                                }),
                              }),
                            y.isCustom &&
                              t.customPaperUrl &&
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full",
                                children: e.jsx(Ta, {
                                  size: 16,
                                  className: "text-white",
                                  strokeWidth: 1.5,
                                }),
                              }),
                            t.paper.id === y.id &&
                              e.jsx(We.div, {
                                layoutId: "paperCheck",
                                className:
                                  "absolute -bottom-1 -right-1 bg-[#2c2c2c] text-white rounded-full p-0.5 w-5 h-5 flex items-center justify-center z-10",
                                children: e.jsx(On, {
                                  size: 10,
                                  strokeWidth: 3,
                                }),
                              }),
                          ],
                        },
                        y.id,
                      ),
                    ),
                  }),
                  e.jsx("input", {
                    type: "file",
                    ref: o,
                    className: "hidden",
                    accept: "image/*",
                    onChange: (y) => {
                      var v;
                      (v = y.target.files) != null &&
                        v[0] &&
                        (n("paper", y.target.files[0]), (y.target.value = ""));
                    },
                  }),
                ],
              }),
              e.jsxs(We.section, {
                variants: x,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4 mb-5",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-base font-serif text-[#2c2c2c] tracking-widest",
                        children: "版式",
                      }),
                      e.jsx("div", { className: "h-[1px] flex-1 bg-gray-100" }),
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] font-serif text-gray-400 tracking-[0.2em] uppercase",
                        children: "版式",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex gap-4",
                    children: [
                      { id: "vertical", label: "竖排", icon: $M },
                      { id: "horizontal", label: "横排", icon: sL },
                    ].map((y) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => s("layout", y.id),
                          className: `flex-1 py-4 px-4 rounded-lg border transition-all duration-500 flex flex-col items-center justify-center gap-3 group relative overflow-hidden ${t.layout === y.id ? "border-[#2c2c2c] bg-white text-[#2c2c2c] shadow-sm" : "border-transparent bg-white/50 text-gray-400 hover:bg-white hover:shadow-sm"}`,
                          children: [
                            e.jsx("div", {
                              className: `flex gap-1.5 ${y.id === "vertical" ? "flex-row h-10" : "flex-col w-10"}`,
                              children: [1, 2, 3].map((v) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `bg-current rounded-full transition-all duration-500 ${y.id === "vertical" ? "w-1 h-full" : "h-1 w-full"}`,
                                    style: { opacity: 1 - v * 0.2 },
                                  },
                                  v,
                                ),
                              ),
                            }),
                            e.jsx("span", {
                              className: "text-sm font-serif tracking-[0.2em]",
                              children: y.label,
                            }),
                          ],
                        },
                        y.id,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs(We.section, {
                variants: x,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4 mb-5",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] font-serif text-gray-400 tracking-[0.2em] uppercase",
                        children: "排版",
                      }),
                      e.jsx("div", { className: "h-[1px] flex-1 bg-gray-100" }),
                      e.jsx("h3", {
                        className:
                          "text-base font-serif text-[#2c2c2c] tracking-widest",
                        children: "排版",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-x-8 gap-y-6 px-2",
                    children: [
                      {
                        label: "字号",
                        key: "fontSize",
                        step: 0.1,
                        unit: "rem",
                      },
                      { label: "行距", key: "lineHeight", step: 0.1, unit: "" },
                      {
                        label: "段距",
                        key: "paragraphSpacing",
                        step: 0.1,
                        unit: "rem",
                      },
                      {
                        label: "字距",
                        key: "letterSpacing",
                        step: 0.01,
                        unit: "em",
                      },
                    ].map((y) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex flex-col gap-1.5 group",
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[0.625rem] font-serif text-gray-400 tracking-widest",
                              children: y.label,
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-baseline gap-2 border-b border-gray-200 group-hover:border-[#2c2c2c] transition-colors duration-300 pb-1",
                              children: [
                                e.jsx("input", {
                                  type: "number",
                                  step: y.step,
                                  value: t[y.key],
                                  onChange: (v) =>
                                    s(y.key, parseFloat(v.target.value)),
                                  className:
                                    "w-full bg-transparent font-serif text-lg text-[#2c2c2c] focus:outline-none p-0",
                                }),
                                y.unit &&
                                  e.jsx("span", {
                                    className:
                                      "text-[0.625rem] text-gray-300 font-serif",
                                    children: y.unit,
                                  }),
                              ],
                            }),
                          ],
                        },
                        y.key,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs(We.section, {
                variants: x,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4 mb-5",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-base font-serif text-[#2c2c2c] tracking-widest",
                        children: "字体",
                      }),
                      e.jsx("div", { className: "h-[1px] flex-1 bg-gray-100" }),
                      e.jsx("span", {
                        className:
                          "text-[0.625rem] font-serif text-gray-400 tracking-[0.2em] uppercase",
                        children: "字体",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.map((y) =>
                        e.jsx(
                          "div",
                          {
                            className: "flex items-center gap-3 group",
                            children: e.jsxs("button", {
                              onClick: () => s("font", y),
                              className: `flex-1 py-3 px-5 text-left rounded-sm transition-all duration-500 flex items-center justify-between relative overflow-hidden ${t.font.id === y.id ? "bg-white shadow-sm" : "hover:bg-white/60"}`,
                              children: [
                                e.jsx("div", {
                                  className: `absolute left-0 top-0 bottom-0 w-1 bg-[#2c2c2c] transition-transform duration-300 ${t.font.id === y.id ? "scale-y-100" : "scale-y-0"}`,
                                }),
                                e.jsx("span", {
                                  className: "text-base text-[#2c2c2c]",
                                  style: { fontFamily: y.family },
                                  children: y.name,
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-serif",
                                  children: "见字如面",
                                }),
                              ],
                            }),
                          },
                          y.id,
                        ),
                      ),
                      e.jsxs("button", {
                        onClick: () => {
                          var y;
                          return (y = c.current) == null ? void 0 : y.click();
                        },
                        className:
                          "w-full py-3 px-5 border border-dashed border-gray-300 rounded-sm text-gray-400 hover:text-[#2c2c2c] hover:border-[#2c2c2c] transition-all duration-300 flex items-center justify-center gap-2 group",
                        children: [
                          e.jsx(ea, {
                            size: 18,
                            strokeWidth: 1.5,
                            className:
                              "group-hover:scale-110 transition-transform",
                          }),
                          e.jsx("span", {
                            className: "text-sm font-serif tracking-widest",
                            children: "添加本地字体",
                          }),
                        ],
                      }),
                      f
                        ? e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("input", {
                                type: "text",
                                value: d,
                                onChange: (y) => u(y.target.value),
                                placeholder: "输入字体 URL (woff/ttf)...",
                                className:
                                  "flex-1 px-4 py-2 bg-white border border-gray-200 rounded-sm font-serif text-sm focus:outline-none focus:border-[#2c2c2c]",
                              }),
                              e.jsx("button", {
                                onClick: async () => {
                                  d && (await a(d)) && (u(""), p(!1));
                                },
                                className:
                                  "px-4 py-2 bg-[#2c2c2c] text-white rounded-sm font-serif text-xs tracking-widest hover:bg-black transition-colors",
                                children: "添加",
                              }),
                              e.jsx("button", {
                                onClick: () => p(!1),
                                className:
                                  "px-3 py-2 text-gray-400 hover:text-gray-600",
                                children: e.jsx(ea, {
                                  size: 18,
                                  className: "rotate-45",
                                }),
                              }),
                            ],
                          })
                        : e.jsxs("button", {
                            onClick: () => p(!0),
                            className:
                              "w-full py-3 px-5 border border-dashed border-gray-300 rounded-sm text-gray-400 hover:text-[#2c2c2c] hover:border-[#2c2c2c] transition-all duration-300 flex items-center justify-center gap-2 group",
                            children: [
                              e.jsx(n3, {
                                size: 18,
                                strokeWidth: 1.5,
                                className:
                                  "group-hover:scale-110 transition-transform",
                              }),
                              e.jsx("span", {
                                className: "text-sm font-serif tracking-widest",
                                children: "添加网络字体",
                              }),
                            ],
                          }),
                    ],
                  }),
                  e.jsx("input", {
                    type: "file",
                    ref: c,
                    className: "hidden",
                    accept: ".ttf,.otf,.woff,.woff2",
                    onChange: (y) => {
                      var v;
                      (v = y.target.files) != null &&
                        v[0] &&
                        (n("font", y.target.files[0]), (y.target.value = ""));
                    },
                  }),
                ],
              }),
              e.jsxs(We.section, {
                variants: x,
                className: "space-y-8",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("p", {
                        className:
                          "font-serif text-3xl md:text-4xl tracking-[0.2em] leading-tight transition-colors duration-500",
                        style: { color: t.fontColor || "#2c2c2c" },
                        children: "见字如面",
                      }),
                      e.jsx(We.span, {
                        className:
                          "block mt-1 h-1 rounded-full transition-all duration-500",
                        style: {
                          width: "2.2em",
                          backgroundColor: t.fontColor || "#2c2c2c",
                          opacity: 0.85,
                          boxShadow: `0 0 12px ${t.fontColor || "#2c2c2c"}40`,
                        },
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[0.625rem] font-serif text-gray-400 tracking-[0.3em] uppercase",
                        children: "点字换墨",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-baseline gap-x-4 gap-y-3",
                        children: [
                          [
                            { color: "#2c2c2c", name: "墨黑" },
                            { color: "#5d4037", name: "褐土" },
                            { color: "#1a237e", name: "靛蓝" },
                            { color: "#1b5e20", name: "松绿" },
                            { color: "#b71c1c", name: "朱红" },
                            { color: "#4a148c", name: "黛紫" },
                          ].map((y, v) => {
                            const b = t.fontColor === y.color;
                            return e.jsxs(
                              We.button,
                              {
                                onClick: () => s("fontColor", y.color),
                                className:
                                  "relative py-1.5 px-0.5 font-serif text-lg tracking-[0.2em] transition-colors duration-300 rounded-sm focus:outline-none",
                                style: { color: y.color },
                                whileTap: { scale: 0.92 },
                                initial: { opacity: 0, y: 6 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.04 * v, duration: 0.4 },
                                children: [
                                  y.name,
                                  b &&
                                    e.jsx(We.span, {
                                      layoutId: "inkStroke",
                                      className:
                                        "absolute bottom-0 left-0 right-0 h-[3px] rounded-full",
                                      style: {
                                        backgroundColor: y.color,
                                        boxShadow: `0 1px 6px ${y.color}50`,
                                      },
                                      transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30,
                                      },
                                    }),
                                ],
                              },
                              y.color,
                            );
                          }),
                          e.jsxs("div", {
                            className: "relative inline-flex items-baseline",
                            children: [
                              e.jsx("input", {
                                type: "color",
                                value: t.fontColor,
                                onChange: (y) => s("fontColor", y.target.value),
                                className:
                                  "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10",
                              }),
                              e.jsx("span", {
                                className:
                                  "font-serif text-lg tracking-[0.2em] text-gray-400 hover:text-[#2c2c2c] transition-colors cursor-pointer select-none",
                                children: "＋ 自定",
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
        }),
      ],
    });
  },
  G4 = '"Noto Serif SC", "SimSun", serif',
  hX = ({ theme: t, children: s }) => {
    const n = t == null ? void 0 : t.font,
      a = (n == null ? void 0 : n.family) || G4,
      r = n != null && n.name ? JSON.stringify(n.name) : '"MailCustomFont"',
      i = n != null && n.url ? JSON.stringify(n.url) : null,
      o = `${i ? `@font-face{font-family:${r};src:url(${i});font-display:swap;}` : ""}
.mail-app-root.mail-app-font-scope,
.mail-app-root.mail-app-font-scope .font-serif,
.mail-app-root.mail-app-font-scope .font-sans,
.mail-app-root.mail-app-font-scope .font-mono{
  font-family:var(--mail-app-font-family, ${G4}) !important;
}`;
    return e.jsxs("div", {
      className:
        "mail-app-root mail-app-font-scope w-full h-full bg-[#fcfcfc] text-[#2c2c2c] overflow-hidden font-serif relative selection:bg-[#d4af37] selection:text-white",
      style: { "--mail-app-font-family": a },
      children: [e.jsx("style", { children: o }), s],
    });
  },
  gX = () => {
    const { currentView: t, theme: s } = sl();
    return e.jsxs(hX, {
      theme: s,
      children: [
        e.jsx("div", {
          className: "absolute inset-0 opacity-[0.03] pointer-events-none z-50",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          },
        }),
        e.jsxs(Os, {
          mode: "wait",
          children: [
            t === "cover" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  exit: { opacity: 0, filter: "blur(10px)" },
                  transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
                  children: e.jsx(oX, {}),
                },
                "cover",
              ),
            t === "home" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                  children: e.jsx(dX, {}),
                },
                "home",
              ),
            t === "contactLetters" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, x: "100%" },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: "100%" },
                  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                  children: e.jsx(iX, {}),
                },
                "contactLetters",
              ),
            t === "letter" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, scale: 0.98 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.98 },
                  transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
                  children: e.jsx(mX, {}),
                },
                "letter",
              ),
            t === "settings" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, y: "100%" },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: "100%" },
                  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                  children: e.jsx(xX, {}),
                },
                "settings",
              ),
            t === "history" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, x: "100%" },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: "100%" },
                  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                  children: e.jsx(lX, {}),
                },
                "history",
              ),
            t === "pending" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] },
                  children: e.jsx(pX, {}),
                },
                "pending",
              ),
            t === "bottle" &&
              e.jsx(
                We.div,
                {
                  className: "w-full h-full",
                  initial: { opacity: 0, scale: 1.1 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 1.1 },
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  children: e.jsx(rX, {}),
                },
                "bottle",
              ),
          ],
        }),
      ],
    });
  },
  bX = ({ onClose: t }) => e.jsx(WZ, { onClose: t, children: e.jsx(gX, {}) }),
  gu = "__MEET_SUMMARY_DEBUG_TRACE__",
  H4 = "meet_summary_debug";
function f2() {
  return typeof window < "u";
}
function yX() {
  return !!f2();
}
function WC() {
  !f2() ||
    window.__MEET_SUMMARY_DEBUG_TOOLS_READY__ ||
    ((window.__MEET_SUMMARY_DEBUG_TOOLS_READY__ = !0),
    (window.enableMeetSummaryDebug = () => {
      var t;
      try {
        (t = window.localStorage) == null || t.setItem(H4, "1");
      } catch {}
      window.__MEET_SUMMARY_DEBUG__ = !0;
    }),
    (window.disableMeetSummaryDebug = () => {
      var t;
      try {
        (t = window.localStorage) == null || t.removeItem(H4);
      } catch {}
      window.__MEET_SUMMARY_DEBUG__ = !1;
    }),
    (window.clearMeetSummaryDebugTrace = () => {
      window[gu] = [];
    }),
    (window.dumpMeetSummaryDebugTrace = () =>
      Array.isArray(window[gu]) ? window[gu] : []));
}
function Go(t, s = {}) {
  if (!yX() || !f2()) return;
  WC();
  const n = Array.isArray(window[gu]) ? window[gu] : [],
    a = { ts: new Date().toISOString(), event: t, payload: s };
  (n.push(a), (window[gu] = n.slice(-300)));
}
const vX = "meet_app_settings";
function YC(t) {
  return (t || []).map((s) => {
    const n = String(s.text ?? "");
    return s.sender === "me"
      ? { role: "user", content: n }
      : { role: "assistant", content: n };
  });
}
function wX(t, s = 28e3) {
  if (!Array.isArray(t) || t.length === 0) return [];
  const n = [];
  let a = 0;
  for (let r = t.length - 1; r >= 0; r--) {
    const i = t[r],
      o = String(i.text ?? ""),
      c = s - a;
    if (c <= 0) break;
    if (o.length <= c) (n.unshift(i), (a += o.length));
    else {
      n.unshift({ ...i, text: o.slice(Math.max(0, o.length - c)) });
      break;
    }
  }
  return n;
}
function jX(t, s = 28e3) {
  if (!Array.isArray(t) || t.length === 0) return [];
  if (t.length === 1) return [...t];
  const n = t[t.length - 1],
    a = String((n == null ? void 0 : n.text) ?? "").length,
    r = Math.max(0, s - a);
  return [...wX(t.slice(0, -1), r), n];
}
async function NX(t) {
  if (!t) return "";
  try {
    const s = await be.get(vX),
      n = s == null ? void 0 : s[t];
    if (n && n.syncSummaryToChat && n.summary)
      return `【线下/遇见剧情总结】
${n.summary}`;
  } catch {}
  return "";
}
async function W4({
  apiConfig: t,
  contact: s,
  effectiveUser: n,
  messagesToApi: a,
  addApiLog: r,
  maxTokens: i,
}) {
  if (!(t != null && t.endpoint) || !(t != null && t.key))
    return "请先在设置中配置API。";
  const o = await NX(s == null ? void 0 : s.id),
    c = (a || []).map((m) => String(m.text ?? "")).join(`
`),
    d = await Oo(s == null ? void 0 : s.id, c),
    u = Ou(
      s,
      n,
      "meet_story",
      {},
      [],
      d,
      [],
      o,
      !1,
      "",
      [],
      null,
      "",
      "",
      "",
      "",
      "",
    ),
    f = YC(a),
    p = [{ role: "system", content: u }, ...f];
  try {
    return await cr(
      t,
      {
        messages: p,
        temperature: t.temperature ?? 0.7,
        ...(Number.isFinite(i) && i > 0 ? { max_tokens: Math.floor(i) } : {}),
      },
      {
        addApiLog: r,
        logScene: "meet_story",
        logContactName: (s == null ? void 0 : s.name) ?? "",
      },
    );
  } catch {
    return "抱歉，我暂时无法回复。";
  }
}
async function Y4({
  apiConfig: t,
  contact: s,
  effectiveUser: n,
  messagesToApi: a,
  addApiLog: r,
  targetLengthChars: i,
}) {
  if (!(t != null && t.endpoint) || !(t != null && t.key)) return null;
  const o = jX(a, 28e3),
    c = Number.parseInt(String(i ?? ""), 10),
    d = Number.isFinite(c) && c > 0 ? c : 400,
    u = Math.max(40, Math.round(d * 0.9)),
    f = Math.max(u + 10, Math.round(d * 1.1));
  Go("summary_request_built", {
    contactId: (s == null ? void 0 : s.id) || null,
    messagesCount: Array.isArray(o) ? o.length : 0,
    targetLength: d,
    max_tokens: null,
  });
  const p =
      (n == null ? void 0 : n.realName) ||
      (n == null ? void 0 : n.name) ||
      "对方",
    m =
      (s == null ? void 0 : s.name) ||
      (s == null ? void 0 : s.nickname) ||
      "角色",
    h = `你是线下剧情总结助手，负责把「遇见」里的互动整理成可回看的记忆。

【硬性要求】
1) 全文使用简体中文，只输出正文，不要标题、前缀、解释、Markdown、代码块。
2) 字数硬约束：正文长度必须在 ${u}-${f} 字之间（目标约 ${d} 字）。
3) 输出前先自检字数，不达标请重写后再输出最终版本。
4) 总结要“全面且精简”：涵盖整段剧情主线与关键信息，不遗漏重要事实，同时避免冗长重复。
5) 必须使用第三人称客观纪实口吻（如“TA/两人/角色名”），禁止使用“我/我们”第一人称总结，禁止主观评判与情绪化结论。
6) 不要空泛套话，不要编造原对话不存在的新事件。

【人物信息】
- 角色：${m}
- 对方：${p}`,
    g = YC(o),
    x = [{ role: "system", content: h }, ...g];
  try {
    const y = await cr(
        t,
        { messages: x, temperature: 0.2 },
        {
          addApiLog: r,
          logScene: "meet_summary",
          logContactName: (s == null ? void 0 : s.name) ?? "",
        },
      ),
      v = String(y || "").trim();
    return (
      Go("summary_response_raw", {
        contactId: (s == null ? void 0 : s.id) || null,
        rawLength: String(y || "").length,
        trimmedLength: v.length,
        rawPreview: String(y || "").slice(0, 200),
      }),
      v || null
    );
  } catch (y) {
    return (
      Go("summary_response_error", {
        contactId: (s == null ? void 0 : s.id) || null,
        error: String((y == null ? void 0 : y.message) || y || "unknown_error"),
      }),
      null
    );
  }
}
function V4(t) {
  if (!t || !Array.isArray(t)) return 0;
  let s = 0,
    n = !1;
  for (const a of t)
    a.role === "user" ? (n = !0) : a.role === "ai" && n && ((s += 1), (n = !1));
  return s;
}
function py(t, s) {
  if (!t || !Array.isArray(t) || s <= 0) return [];
  const n = [];
  let a = 0;
  for (; a < t.length; )
    if (t[a].role === "user") {
      let o = a + 1;
      for (; o < t.length && t[o].role !== "user"; ) {
        if (t[o].role === "ai") {
          n.push(a);
          break;
        }
        o += 1;
      }
      a = o;
    } else a += 1;
  const r = n.length;
  if (r === 0) return [];
  const i = n[Math.max(0, r - s)];
  return t.slice(i);
}
const VC = {
    chatContacts: [],
    chatUser: {},
    activeContact: null,
    setActiveContact: () => {},
    memorySettings: {},
    setMemorySettings: () => {},
    archives: [],
    saveArchive: async () => {},
    loadArchive: () => {},
    deleteArchive: async () => {},
    updateArchiveMemorySelections: () => {},
    storyLog: [],
    addStoryEntry: () => {},
    updateStoryEntry: () => {},
    deleteStoryEntry: () => {},
    clearStoryLog: () => {},
    injectMeetOpeningIfEmpty: () => !1,
    startWithMeetOpening: () => !1,
    generateHistorySummary: async () => null,
    generateStorySummary: async () => null,
    generateStoryReply: async () => null,
    regenerateReply: async () => {},
    syncSummaryToChat: () => {},
    offlineSummariesByContact: {},
    currentOfflineSummaries: [],
    setOfflineSummariesByContact: () => {},
    getOnlineSummariesForContact: () => [],
    deleteOfflineSummary: () => ({}),
    updateOfflineSummary: () => !1,
    getMeetRoundCount: () => 0,
  },
  JC = l.createContext(VC),
  xy = "meet_app_settings",
  J4 = "meet_app_offline_summaries";
function kX(t) {
  return String(t ?? "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}
function SX(t) {
  const s = kX(t);
  return s
    ? String(s)
        .replace(/^总结[：:]\s*/i, "")
        .replace(/^摘要[：:]\s*/i, "")
        .replace(
          /\r\n/g,
          `
`,
        )
        .trim()
    : "";
}
function _X(t, s) {
  const n = t && typeof t == "object" ? t : {},
    a = s && typeof s == "object" ? s : {},
    r = new Set([...Object.keys(n), ...Object.keys(a)]),
    i = {};
  return (
    r.forEach((o) => {
      const c = [...(n[o] || []), ...(a[o] || [])],
        d = new Map();
      (c.forEach((u) => {
        if (!u || !u.id) return;
        const f = d.get(u.id);
        if (!f) {
          d.set(u.id, u);
          return;
        }
        const p = Number(f.createdAt || 0),
          m = Number(u.createdAt || 0);
        d.set(u.id, m >= p ? u : f);
      }),
        (i[o] = Array.from(d.values()).sort(
          (u, f) => Number(u.createdAt || 0) - Number(f.createdAt || 0),
        )));
    }),
    i
  );
}
const qx = () => ({
    shareMemory: !0,
    syncSummaryToChat: !1,
    selectedMeetOpeningId: null,
    summaryLength: 200,
    style: "novel",
    customStylePrompt: "",
    replyLength: 100,
    customReplyLengthEnabled: !1,
    backgroundImage: null,
    backgroundBlur: 0,
    overlayOpacity: 0.5,
    summary: "",
    fontSize: 18,
    customFontUrl: "",
    enableCustomCSS: !1,
    customCSS: "",
    activePresetId: "default",
    customWritingStyleEnabled: !1,
    customWritingStyleName: "自定义文风",
    customWritingStyle: "",
    writingStylePresets: [],
    activeWritingStylePresetId: null,
    presets: [
      {
        id: "default",
        name: "默认风格",
        css: '.meet-container{background-color:#F9F7F2;color:#2C2C2C;font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif}.meet-sidebar{width:3rem;border-right:1px solid #E5E0D8;background-color:rgba(249,247,242,.95)}.meet-header{height:6rem;border-bottom:1px solid #E5E0D8;background-color:rgba(249,247,242,.93)}.meet-content{padding:2rem 1rem}.meet-message-item{position:relative;transition:transform .7s,opacity .7s;margin-bottom:2rem}.meet-input-area{background:linear-gradient(to top,#F9F7F2,rgba(249,247,242,.95),transparent);padding:1.5rem 1rem}.meet-input-box{width:100%;background-color:rgba(249,247,242,.5);border-bottom:1px solid #C0C0C0;font-family:ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;font-size:1.25rem;padding:1rem 3rem 1rem 0;min-height:60px}.meet-footer-info{display:flex;justify-content:space-between;margin-top:.5rem;font-size:.625rem;color:#8A8A8A}',
      },
    ],
    rememberLastNRounds: 20,
    lastSummarizedRound: 0,
    useOnlineSummaries: !1,
    selectedOnlineMemoryIds: [],
    selectedOfflineMemoryIds: [],
  }),
  Lp = () => l.useContext(JC) || VC,
  AX = ({ children: t }) => {
    WC();
    const s = vn(),
      n =
        (s == null ? void 0 : s.contactsPublic) ??
        (s == null ? void 0 : s.contacts) ??
        [],
      a = Array.isArray(n) ? n.filter((U) => !Kl(U)) : [],
      r = (s == null ? void 0 : s.user) ?? {},
      i = (s == null ? void 0 : s.chats) ?? [],
      o = (s == null ? void 0 : s.archives) ?? {},
      c = (s == null ? void 0 : s.summaries) ?? {},
      d = s == null ? void 0 : s.apiConfig,
      u = s == null ? void 0 : s.addApiLog,
      f = (s == null ? void 0 : s.userPresets) ?? [];
    s == null || s.sendMessage;
    const p = (U) => {
        const ce = !!(U != null && U.customReplyLengthEnabled),
          pe = Number.parseInt(
            String((U == null ? void 0 : U.replyLength) ?? ""),
            10,
          );
        if (!ce || !Number.isFinite(pe) || pe <= 0) return null;
        const se = pe * 2;
        return Math.max(32, Math.min(8192, se));
      },
      [m, h] = l.useState(null),
      g = l.useRef(!1);
    (l.useEffect(() => {
      if (g.current || a.length === 0) return;
      ((g.current = !0),
        (async () => {
          const ce = await be.get("meet_app_active_contact_id");
          if (ce) {
            const pe = String(ce),
              se = a.find((Te) => String(Te == null ? void 0 : Te.id) === pe);
            se && h(se);
          }
        })());
    }, [a]),
      l.useEffect(() => {
        m
          ? be.set("meet_app_active_contact_id", m.id)
          : be.set("meet_app_active_contact_id", null);
      }, [m]),
      l.useEffect(() => {
        const U = (ce) => {
          var se;
          const pe = String(
            ((se = ce.detail) == null ? void 0 : se.contactId) || "",
          );
          pe &&
            (k((Te) => {
              const ke = { ...Te };
              return (delete ke[pe], ke);
            }),
            y((Te) => {
              const ke = { ...Te };
              return (delete ke[pe], ke);
            }),
            S((Te) => {
              const ke = { ...Te };
              return (delete ke[pe], ke);
            }),
            _((Te) =>
              Array.isArray(Te)
                ? Te.filter(
                    (ke) => String(ke == null ? void 0 : ke.contactId) !== pe,
                  )
                : Te,
            ),
            h((Te) => (Te && String(Te.id) === pe ? null : Te)));
        };
        return (
          window.addEventListener(Jl, U),
          () => window.removeEventListener(Jl, U)
        );
      }, []));
    const [x, y] = l.useState({}),
      [v, b] = l.useState(!1),
      N = l.useRef(null),
      [w, _] = l.useState([]),
      [A, k] = l.useState({}),
      [C, M] = l.useState(!1),
      [E, S] = l.useState({}),
      [j, T] = l.useState(!1),
      I = m ? A[m.id] || [] : [],
      L = m ? { ...qx(), ...x[m.id] } : qx(),
      B = (U, ce) => {
        U &&
          y((pe) => {
            const se = { ...qx(), ...(pe[U] || {}) },
              Te =
                typeof ce == "function"
                  ? ce(se)
                  : { ...se, ...(ce && typeof ce == "object" ? ce : {}) };
            return { ...pe, [U]: Te };
          });
      },
      F = (U) => {
        m && B(m.id, U);
      };
    (l.useEffect(() => {
      (async () => {
        const [ce, pe, se, Te] = await Promise.all([
          be.get("meet_app_archives"),
          be.get("meet_app_stories"),
          be.get(xy),
          be.get(J4),
        ]);
        (ce != null && _(ce),
          pe != null && k(pe),
          se != null && typeof se == "object" && y(se),
          Te != null &&
            typeof Te == "object" &&
            S((ke) => {
              const W = _X(ke, Te);
              return (
                Go("load_saved_offline", {
                  contactCount: Object.keys(W || {}).length,
                  activeContactId: (m == null ? void 0 : m.id) || null,
                  activeCount: m != null && m.id ? (W[m.id] || []).length : 0,
                }),
                W
              );
            }),
          M(!0),
          b(!0),
          T(!0));
      })();
    }, []),
      l.useEffect(() => {
        C && be.set("meet_app_stories", A);
      }, [A, C]));
    const D = l.useRef(x);
    ((D.current = x),
      l.useEffect(() => {
        if (v)
          return (
            N.current && clearTimeout(N.current),
            (N.current = setTimeout(() => {
              (be.set(xy, x), (N.current = null));
            }, 500)),
            () => {
              N.current && (clearTimeout(N.current), (N.current = null));
            }
          );
      }, [x, v]),
      l.useEffect(
        () => () => {
          (N.current && (clearTimeout(N.current), (N.current = null)),
            be.set(xy, D.current));
        },
        [],
      ),
      l.useEffect(() => {
        j && be.set(J4, E);
      }, [E, j]));
    const $ = async (U) => {
        await be.set("meet_app_stories", U);
      },
      P = async (U) => {
        const pe = [
          {
            id: Date.now().toString(),
            name: U,
            timestamp: Date.now(),
            contactId: m == null ? void 0 : m.id,
            storyLog: I,
            memorySettings: L,
          },
          ...w,
        ];
        (_(pe), await be.set("meet_app_archives", pe));
      },
      z = (U) => {
        const ce = a.find((pe) => pe.id === U.contactId);
        ce &&
          (h(ce),
          k((pe) => ({ ...pe, [ce.id]: U.storyLog })),
          y((pe) => ({ ...pe, [ce.id]: { ...qx(), ...U.memorySettings } })));
      },
      O = async (U) => {
        const ce = w.filter((pe) => pe.id !== U);
        (_(ce), await be.set("meet_app_archives", ce));
      },
      Z = (U, ce) => {
        _((pe) =>
          pe.map((se) => {
            if (se.id !== U) return se;
            const Te = { ...(se.memorySettings || {}), ...ce };
            return { ...se, memorySettings: Te };
          }),
        );
      },
      K = (U) => {
        if (!U) return [];
        const ce = i.find((ue) => ue.contactId === U);
        if (!ce) return [];
        const pe = ce.id,
          se = (c[pe] || []).map((ue) => ({ ...ue, archiveId: null })),
          Te = (o[pe] || []).flatMap((ue) =>
            (ue.summaries || []).map((re) => ({ ...re, archiveId: ue.id })),
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
      },
      q = m ? E[m.id] || [] : [],
      V = (U) => {
        if (!m) return;
        const ce = { ...U, id: Date.now().toString(), timestamp: Date.now() };
        k((pe) => {
          const se = { ...pe, [m.id]: [...(pe[m.id] || []), ce] };
          return ($(se), se);
        });
      },
      ne = (U, ce) => {
        m &&
          k((pe) => {
            const se = {
              ...pe,
              [m.id]: (pe[m.id] || []).map((Te) =>
                Te.id === U ? { ...Te, content: ce } : Te,
              ),
            };
            return ($(se), se);
          });
      },
      le = (U) => {
        m &&
          k((ce) => {
            const pe = {
              ...ce,
              [m.id]: (ce[m.id] || []).filter((se) => se.id !== U),
            };
            return ($(pe), pe);
          });
      },
      ie = () => {
        m &&
          k((U) => {
            const ce = { ...U, [m.id]: [] };
            return ($(ce), ce);
          });
      },
      X = (U, ce) => {
        !U ||
          !ce ||
          !Array.isArray(ce) ||
          ce.length === 0 ||
          k((pe) => {
            if ((pe[U] || []).length > 0) return pe;
            const Te = ce
              .filter((W) => W != null && String(W).trim())
              .map((W, ue) => ({
                id: `opening-${Date.now()}-${ue}`,
                role: "ai",
                content: String(W).trim(),
                timestamp: Date.now() + ue * 200,
              }));
            if (Te.length === 0) return pe;
            const ke = { ...pe, [U]: Te };
            return ($(ke), ke);
          });
      },
      je = (U, ce) => {
        if (!U || !ce || !Array.isArray(ce)) return;
        const pe =
          ce.length > 0
            ? ce
                .filter((se) => se != null && String(se).trim())
                .map((se, Te) => ({
                  id: `opening-${Date.now()}-${Te}`,
                  role: "ai",
                  content: String(se).trim(),
                  timestamp: Date.now() + Te * 200,
                }))
            : [];
        k((se) => {
          const Te = { ...se, [U]: pe };
          return ($(Te), Te);
        });
      },
      xe = async (U, ce) => {
        const pe = i.find((re) => re.contactId === U);
        if (!pe || !pe.messages || pe.messages.length === 0) return null;
        const se = a.find((re) => re.id === U);
        if (!se) return null;
        const Te = pe.messages
            .slice(-50)
            .map((re) => ({ sender: re.sender, text: re.text })),
          ke = `
请对以上聊天记录进行总结，作为我们线下见面的前情提要。
要求：
1. 字数控制在${ce}字左右。
2. 重点概括我们最近聊的话题、关系状态和重要约定。
3. 以第三人称叙述。
`,
          W = [...Te, { sender: "me", text: ke }];
        let ue = r;
        if (se != null && se.boundUserPresetId) {
          const re = f.find((he) => he.id === se.boundUserPresetId);
          re &&
            (ue = {
              ...r,
              name: re.userName || re.name,
              avatar: re.avatar,
              settings: re.settings,
            });
        }
        try {
          const re = await Y4({
            apiConfig: d,
            contact: se,
            effectiveUser: ue,
            messagesToApi: W,
            addApiLog: u,
            targetLengthChars: ce,
          });
          return (re && B(U, (he) => ({ ...he, summary: re })), re);
        } catch {
          return null;
        }
      },
      ye = async (U, ce = 200) => {
        if (!m || I.length === 0) return null;
        const pe = V4(I),
          se = py(I, Math.min(U, pe));
        if (se.length === 0) return null;
        Go("generate_start", {
          contactId: m.id,
          requestedRounds: U,
          targetLength: ce,
          roundCount: pe,
          toSummarizeCount: se.length,
          storyLogCount: I.length,
        });
        const Te = se.map((we) => ({
            sender: we.role === "user" ? "me" : "them",
            text: we.content,
          })),
          ke = new Date(),
          W = `${ke.getFullYear()}年${ke.getMonth() + 1}月${ke.getDate()}日 ${ke.getHours()}:${String(ke.getMinutes()).padStart(2, "0")}`,
          ue = Math.max(60, Number.parseInt(String(ce || 200), 10) || 200),
          re = Math.max(40, Math.round(ue * 0.9)),
          he = Math.max(re + 10, Math.round(ue * 1.1)),
          ge = `
请对以上线下互动剧情进行总结，以便作为记忆留存。
当前时间：${W}

要求：
1. 字数是硬约束：正文长度必须在 ${re}-${he} 字之间（目标约 ${ue} 字）。
2. 输出前先自检字数；若不在范围内，请自行重写到范围内再输出最终版本。
3. 总结要全面且精简：涵括整个剧情主线，不遗漏关键事实与转折，也避免冗余重复。
4. 必须覆盖：时间线（至少一个具体时间点/时间段）、场景、关键互动、情绪变化、后续约定。
5. 必须使用第三人称客观纪实口吻（可用“TA/两人/角色名”），禁止使用“我/我们”第一人称总结，禁止主观评判与情绪化结论。
6. 避免空话和口号，不要只写一句流水句。
7. 直接输出正文，不要 Markdown、不要代码块、不要前缀标签、不要解释你如何计数字数。
`;
        Te.push({ sender: "me", text: ge });
        const J = m.id;
        let G = r;
        if (m != null && m.boundUserPresetId) {
          const we = f.find((Q) => Q.id === m.boundUserPresetId);
          we &&
            (G = {
              ...r,
              name: we.userName || we.name,
              avatar: we.avatar,
              settings: we.settings,
            });
        }
        try {
          const we = await Y4({
            apiConfig: d,
            contact: m,
            effectiveUser: G,
            messagesToApi: Te,
            addApiLog: u,
            targetLengthChars: ce,
          });
          Go("api_return", {
            contactId: J,
            hasSummary: !!we,
            rawLength: String(we || "").length,
            rawPreview: String(we || "").slice(0, 200),
          });
          const Q = SX(we);
          if (!Q) return null;
          Go("normalized", {
            contactId: J,
            normalizedLength: Q.length,
            normalizedPreview: Q.slice(0, 200),
          });
          const ve = `offline-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            Ve = {
              id: ve,
              content: Q,
              createdAt: Date.now(),
              summarizedUpToRound: pe,
            };
          return (
            S((Ae) => {
              const te = { ...Ae, [J]: [...(Ae[J] || []), Ve] };
              return (
                Go("saved_offline_summary", {
                  contactId: J,
                  summaryId: ve,
                  nextCountForContact: (te[J] || []).length,
                }),
                te
              );
            }),
            B(J, (Ae) => ({
              ...Ae,
              lastSummarizedRound: pe,
              selectedOfflineMemoryIds: Array.from(
                new Set([...(Ae.selectedOfflineMemoryIds || []), ve]),
              ),
            })),
            { id: ve, content: Q }
          );
        } catch (we) {
          return (
            Go("generate_error", {
              contactId: (m == null ? void 0 : m.id) || null,
              error: String(
                (we == null ? void 0 : we.message) || we || "unknown_error",
              ),
            }),
            null
          );
        }
      },
      R = (U, ce = {}) => {
        if (!m) return;
        const { syncDeleteChatSummaryIds: pe } = ce;
        return (
          S((se) => ({
            ...se,
            [m.id]: (se[m.id] || []).filter((Te) => Te.id !== U),
          })),
          F((se) => ({
            ...se,
            selectedOfflineMemoryIds: (
              se.selectedOfflineMemoryIds || []
            ).filter((Te) => Te !== U),
          })),
          _((se) =>
            se.map((Te) => {
              if (Te.contactId !== m.id) return Te;
              const ke = {
                ...Te,
                memorySettings: { ...(Te.memorySettings || {}) },
              };
              return (
                (ke.memorySettings.selectedOfflineMemoryIds = (
                  ke.memorySettings.selectedOfflineMemoryIds || []
                ).filter((W) => W !== U)),
                ke
              );
            }),
          ),
          { syncDeleteChatSummaryIds: pe || [] }
        );
      },
      oe = (U, ce) => {
        if (!m || !U) return !1;
        const pe = String(ce ?? "").trim();
        if (!pe) return !1;
        let se = !1;
        return (
          S((Te) => {
            const W = (Te[m.id] || []).map((ue) =>
              ue.id !== U ? ue : ((se = !0), { ...ue, content: pe }),
            );
            return { ...Te, [m.id]: W };
          }),
          se &&
            Go("updated_offline_summary", {
              contactId: m.id,
              summaryId: U,
              newLength: pe.length,
            }),
          se
        );
      },
      ee = (U) => {
        !m || !U || F((ce) => ({ ...ce, summary: U }));
      },
      H = async (U) => {
        if (!m) return null;
        let ce = [];
        const pe = L.rememberLastNRounds ?? 20,
          se = L.selectedOfflineMemoryIds || [],
          Te = L.useOnlineSummaries ? L.selectedOnlineMemoryIds || [] : [];
        if (se.length > 0) {
          const re = E[m.id] || [],
            he = se
              .map((ge) => {
                var J;
                return (J = re.find((G) => G.id === ge)) == null
                  ? void 0
                  : J.content;
              })
              .filter(Boolean);
          he.length > 0 &&
            ce.push({
              sender: "system",
              text: `[线下记忆]
${he.join(`

`)}`,
            });
        }
        if (Te.length > 0) {
          const re = K(m.id),
            he = Te.map((ge) => {
              var J;
              return (J = re.find((G) => G.id === ge)) == null
                ? void 0
                : J.content;
            }).filter(Boolean);
          he.length > 0 &&
            ce.push({
              sender: "system",
              text: `[线上记忆]
${he.join(`

`)}`,
            });
        }
        if (pe > 0) {
          const re = py(I, pe).map((he) => ({
            sender: he.role === "user" ? "me" : "them",
            text: he.content,
          }));
          ce = [...ce, ...re];
        }
        ce.push({ sender: "me", text: U });
        const ke = `
【当前文风要求】
${L.customWritingStyleEnabled && L.customWritingStyle ? L.customWritingStyle : L.customStylePrompt || "默认小说风格"}
${L.style === "script" ? "请使用剧本格式（名字：台词）" : "请使用第三人称小说描写"}
${L.customReplyLengthEnabled ? `回复字数控制在 ${L.replyLength} 字左右。` : ""}
`,
          W = {
            ...m,
            setting: `${m.setting}

${ke}`,
          };
        let ue = r;
        if (m != null && m.boundUserPresetId) {
          const re = f.find((he) => he.id === m.boundUserPresetId);
          re &&
            (ue = {
              ...r,
              name: re.userName || re.name,
              avatar: re.avatar,
              settings: re.settings,
            });
        }
        try {
          const re = p(L);
          return await W4({
            apiConfig: d,
            contact: W,
            effectiveUser: ue,
            messagesToApi: ce,
            addApiLog: u,
            maxTokens: re,
          });
        } catch {
          return null;
        }
      },
      Y = async (U) => {
        const ce = I.findIndex((G) => G.id === U);
        if (ce === -1 || I[ce].role !== "ai") return;
        let se = [];
        const Te = L.rememberLastNRounds ?? 20,
          ke = L.selectedOfflineMemoryIds || [],
          W = L.useOnlineSummaries ? L.selectedOnlineMemoryIds || [] : [];
        if (ke.length > 0) {
          const G = E[m.id] || [],
            we = ke
              .map((Q) => {
                var ve;
                return (ve = G.find((Ve) => Ve.id === Q)) == null
                  ? void 0
                  : ve.content;
              })
              .filter(Boolean);
          we.length > 0 &&
            se.push({
              sender: "system",
              text: `[线下记忆]
${we.join(`

`)}`,
            });
        }
        if (W.length > 0) {
          const G = K(m.id),
            we = W.map((Q) => {
              var ve;
              return (ve = G.find((Ve) => Ve.id === Q)) == null
                ? void 0
                : ve.content;
            }).filter(Boolean);
          we.length > 0 &&
            se.push({
              sender: "system",
              text: `[线上记忆]
${we.join(`

`)}`,
            });
        }
        const ue = I.slice(0, ce),
          re =
            Te > 0
              ? py(ue, Te).map((G) => ({
                  sender: G.role === "user" ? "me" : "them",
                  text: G.content,
                }))
              : [];
        se = [...se, ...re];
        const he = `
【当前文风要求】
${L.customStylePrompt || "默认小说风格"}
${L.style === "script" ? "请使用剧本格式（名字：台词）" : "请使用第三人称小说描写"}
${L.customReplyLengthEnabled ? `回复字数控制在 ${L.replyLength} 字左右。` : ""}
`,
          ge = {
            ...m,
            setting: `${m.setting}

${he}`,
          };
        let J = r;
        if (m != null && m.boundUserPresetId) {
          const G = f.find((we) => we.id === m.boundUserPresetId);
          G &&
            (J = {
              ...r,
              name: G.userName || G.name,
              avatar: G.avatar,
              settings: G.settings,
            });
        }
        try {
          const G = p(L),
            we = await W4({
              apiConfig: d,