                                                          ? void 0
                                                          : Bs.relation) || "",
                                                    }),
                                                  ],
                                                }),
                                                ((Xs =
                                                  (Js =
                                                    D == null
                                                      ? void 0
                                                      : D.p0) == null
                                                    ? void 0
                                                    : Js.emergencyContact) ==
                                                null
                                                  ? void 0
                                                  : Xs.investigatorNote) &&
                                                  e.jsxs("div", {
                                                    className:
                                                      "mt-4 p-3 bg-black/50 border-l border-gray-700 text-xs text-gray-400 mono italic leading-relaxed",
                                                    children: [
                                                      e.jsx("span", {
                                                        className:
                                                          "text-red-500 not-italic font-bold",
                                                        children:
                                                          "调查员批注：",
                                                      }),
                                                      D.p0.emergencyContact
                                                        .investigatorNote,
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
                              ],
                            }),
                            e.jsx("div", {
                              className: "pt-12 flex justify-center",
                              children: e.jsx("button", {
                                onClick: _t,
                                className: "btn-advance group",
                                children: e.jsx("span", {
                                  className:
                                    "group-hover:tracking-widest transition-all",
                                  children: "翻阅档案 [NEXT]",
                                }),
                              }),
                            }),
                          ],
                        }),
                      C === 2 &&
                        (D == null ? void 0 : D.p1) &&
                        e.jsxs("div", {
                          className: "space-y-8 animate-fade-in",
                          children: [
                            e.jsxs("header", {
                              className: "border-b border-white/10 pb-6 mb-8",
                              children: [
                                e.jsx("div", {
                                  className: "mono text-xs text-gray-400 mb-2",
                                  children: "档案阅读模式 // P.01",
                                }),
                                e.jsx("h1", {
                                  className: "cn-serif text-4xl text-white",
                                  children: E,
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "cn-serif text-lg md:text-xl leading-loose text-gray-300 text-justify whitespace-pre-line",
                              children: D.p1
                                .split(
                                  `

`,
                                )
                                .map((wt, xs) =>
                                  e.jsx(
                                    "p",
                                    {
                                      className: "mb-6 last:mb-0",
                                      children: wt.trim(),
                                    },
                                    xs,
                                  ),
                                ),
                            }),
                            e.jsx("div", {
                              className: "pt-12 flex justify-center",
                              children: e.jsx("button", {
                                onClick: _t,
                                className: "btn-advance group",
                                children: e.jsx("span", {
                                  className:
                                    "group-hover:tracking-widest transition-all",
                                  children: "深入记忆 [NEXT]",
                                }),
                              }),
                            }),
                          ],
                        }),
                      C === 3 &&
                        (D == null ? void 0 : D.p2) &&
                        e.jsxs("div", {
                          className: "w-full max-w-2xl mx-auto space-y-8",
                          children: [
                            e.jsx("div", {
                              className:
                                "mono text-xs text-center text-dim mb-8",
                              children: "记忆回溯程序启动...",
                            }),
                            e.jsxs("div", {
                              className:
                                "avg-dialogue-box flex flex-col justify-between shadow-2xl",
                              children: [
                                e.jsx("div", {
                                  id: "avg-text-container",
                                  className:
                                    "cn-serif text-xl text-white leading-relaxed",
                                }),
                                e.jsx("div", {
                                  className: "mt-8 flex justify-end",
                                  children: e.jsx("span", {
                                    className:
                                      "mono text-xs text-white animate-pulse",
                                    children: "等待输入...",
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex justify-center pt-8",
                              children: e.jsx("button", {
                                onClick: _t,
                                className: "btn-advance",
                                children: "回应并继续",
                              }),
                            }),
                          ],
                        }),
                      C === 4 &&
                        (D == null ? void 0 : D.p3) &&
                        e.jsxs("div", {
                          className: "text-center space-y-12 px-8 md:px-16",
                          children: [
                            e.jsx("div", {
                              className:
                                "archive-avatar-pair flex justify-center items-center gap-4 md:gap-6",
                              children: (() => {
                                const wt = f.find((Jt) => Jt.id === b),
                                  xs = wt
                                    ? (i == null ? void 0 : i(wt)) || {}
                                    : {},
                                  ot =
                                    (wt == null ? void 0 : wt.nickname) ||
                                    (wt == null ? void 0 : wt.name) ||
                                    "角色",
                                  st = xs.name || "TA",
                                  $t = wt == null ? void 0 : wt.avatar,
                                  Ft = xs.avatar,
                                  es = `https://api.dicebear.com/7.x/notionists/svg?seed=${b || "role"}`,
                                  At = `https://api.dicebear.com/7.x/notionists/svg?seed=${xs.name || "user"}`;
                                return e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsxs("div", {
                                      className: "archive-avatar-wrap",
                                      title: ot,
                                      children: [
                                        e.jsx("div", {
                                          className: "archive-avatar-frame",
                                          children: $t
                                            ? e.jsx("img", {
                                                src: $t,
                                                alt: ot,
                                                className: "archive-avatar-img",
                                              })
                                            : e.jsx("img", {
                                                src: es,
                                                alt: ot,
                                                className:
                                                  "archive-avatar-img archive-avatar-fallback",
                                              }),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "archive-avatar-label mono text-[10px] text-dim tracking-widest mt-2 block",
                                          children: ot,
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "archive-avatar-connector",
                                      "aria-hidden": !0,
                                    }),
                                    e.jsxs("div", {
                                      className: "archive-avatar-wrap",
                                      title: st,
                                      children: [
                                        e.jsx("div", {
                                          className: "archive-avatar-frame",
                                          children: Ft
                                            ? e.jsx("img", {
                                                src: Ft,
                                                alt: st,
                                                className: "archive-avatar-img",
                                              })
                                            : e.jsx("img", {
                                                src: At,
                                                alt: st,
                                                className:
                                                  "archive-avatar-img archive-avatar-fallback",
                                              }),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "archive-avatar-label mono text-[10px] text-dim tracking-widest mt-2 block",
                                          children: st,
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                              })(),
                            }),
                            e.jsx("div", {
                              className:
                                "cn-serif text-lg text-white/80 italic tracking-widest",
                              children: D.p3
                                .split(
                                  `

`,
                                )
                                .map((wt, xs) =>
                                  e.jsx(
                                    "p",
                                    {
                                      className: "mb-6 last:mb-0",
                                      children: wt.trim(),
                                    },
                                    xs,
                                  ),
                                ),
                            }),
                            e.jsx("div", {
                              className: "pt-8",
                              children: e.jsx("button", {
                                onClick: _t,
                                className: "btn-advance",
                                children: "触碰核心",
                              }),
                            }),
                          ],
                        }),
                      C === 5 &&
                        (D == null ? void 0 : D.p3_5) &&
                        e.jsxs("div", {
                          className: "w-full max-w-2xl mx-auto space-y-8",
                          children: [
                            e.jsx("div", {
                              className:
                                "mono text-xs text-center text-dim mb-8",
                              children: "记忆回溯程序启动...",
                            }),
                            e.jsxs("div", {
                              className:
                                "avg-dialogue-box flex flex-col justify-between shadow-2xl border-white/30",
                              children: [
                                e.jsx("div", {
                                  id: "avg-text-container-2",
                                  className:
                                    "cn-serif text-xl text-white leading-relaxed",
                                }),
                                e.jsx("div", {
                                  className: "mt-8 flex justify-end",
                                  children: e.jsx("span", {
                                    className:
                                      "mono text-xs text-white animate-pulse",
                                    children: "等待输入...",
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex justify-center pt-8",
                              children: e.jsx("button", {
                                onClick: _t,
                                className: "btn-advance",
                                children: "继续",
                              }),
                            }),
                          ],
                        }),
                      C === 6 &&
                        e.jsxs("div", {
                          className: "space-y-8 animate-fade-in",
                          children: [
                            e.jsxs("header", {
                              className: "border-b border-white/10 pb-6 mb-8",
                              children: [
                                e.jsx("div", {
                                  className: "mono text-xs text-gray-400 mb-2",
                                  children: "档案阅读模式 // 结局",
                                }),
                                e.jsx("h2", {
                                  className: "cn-serif text-2xl text-white",
                                  children: "故事的结局",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "cn-serif text-lg md:text-xl leading-loose text-gray-300 text-justify whitespace-pre-line",
                              children:
                                D != null && D.p_ending
                                  ? D.p_ending
                                      .split(
                                        `

`,
                                      )
                                      .map((wt, xs) =>
                                        e.jsx(
                                          "p",
                                          {
                                            className: "mb-6 last:mb-0",
                                            children: wt.trim(),
                                          },
                                          xs,
                                        ),
                                      )
                                  : e.jsx("p", {
                                      className: "text-gray-500 italic",
                                      children:
                                        "（此档案为旧版格式，无单独结局页）",
                                    }),
                            }),
                            e.jsx("div", {
                              className: "pt-12 flex justify-center",
                              children: e.jsx("button", {
                                onClick: _t,
                                className: "btn-advance group",
                                children: e.jsx("span", {
                                  className:
                                    "group-hover:tracking-widest transition-all",
                                  children: "庭审记录 [NEXT]",
                                }),
                              }),
                            }),
                          ],
                        }),
                      C === 7 &&
                        e.jsx("div", {
                          className:
                            "w-full max-w-[900px] mx-auto px-4 animate-fade-in",
                          children: (() => {
                            const wt = D == null ? void 0 : D.p_trial,
                              xs = Array.isArray(wt)
                                ? "02:14:00 AM"
                                : (wt == null ? void 0 : wt.transcriptStart) ||
                                  "02:14:00 AM",
                              ot = Array.isArray(wt)
                                ? []
                                : wt == null
                                  ? void 0
                                  : wt.evidence,
                              $t = (Array.isArray(ot) ? ot : []).slice(0, 8),
                              Ft = "[[ITALIC]]",
                              es = "[[CURSOR]]",
                              At = (Vt) => qr(String(Vt ?? "")),
                              Jt = (Vt) => {
                                const qt = At(Vt);
                                if (!qt.includes(es)) return qt;
                                const [Lt, ...Qt] = qt.split(es),
                                  js = Qt.length > 0;
                                return e.jsxs(e.Fragment, {
                                  children: [
                                    Lt,
                                    js &&
                                      e.jsx("span", {
                                        className:
                                          "avg-cursor inline-block align-middle",
                                      }),
                                  ],
                                });
                              };
                            return e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("header", {
                                  className: "mb-4 pb-2",
                                  children: e.jsx("div", {
                                    className: "flex items-start mb-4",
                                    children: e.jsxs("div", {
                                      className: "text-left mt-3 w-full",
                                      children: [
                                        e.jsx("h1", {
                                          className:
                                            "text-white text-2xl font-light tracking-tighter",
                                          children: e.jsxs("span", {
                                            className:
                                              "block w-full text-center",
                                            children: [
                                              "庭审记录录入 :",
                                              " ",
                                              (() => {
                                                const Vt = f.find(
                                                  (qt) => qt.id === b,
                                                );
                                                return Vt
                                                  ? Vt.nickname || Vt.name
                                                  : "祁渊";
                                              })(),
                                            ],
                                          }),
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "mono text-[10px] mt-1 text-zinc-600 select-none text-center",
                                          children: ["记录时间 // ", xs],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                e.jsx("section", { className: "hidden" }),
                                e.jsxs("section", {
                                  className: "pt-0",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-end mb-4",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("h2", {
                                              className:
                                                "text-white text-xs mono tracking-[0.4em] uppercase",
                                              children: "证物清单",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-zinc-600 mt-1",
                                              children:
                                                "证物清单与搬迁遗留物综合记录",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "text-[9px] text-zinc-800 mono",
                                          children: [
                                            "共",
                                            ($t.length || 0)
                                              .toString()
                                              .padStart(2, "0"),
                                            "件",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "flex flex-col gap-px bg-[#1a1a1a] border border-[#1a1a1a]",
                                      children: $t.map((Vt, qt) => {
                                        const Lt = At(
                                            Vt == null ? void 0 : Vt.id,
                                          ),
                                          Qt = At(
                                            Vt == null ? void 0 : Vt.name,
                                          ),
                                          js = At(
                                            Vt == null ? void 0 : Vt.timestamp,
                                          ),
                                          cs =
                                            (Vt == null ? void 0 : Vt.Q) ??
                                            (Vt == null ? void 0 : Vt.q) ??
                                            "",
                                          Ne =
                                            (Vt == null ? void 0 : Vt.A) ??
                                            (Vt == null ? void 0 : Vt.a) ??
                                            "",
                                          Je = At(cs),
                                          St = Je.includes(Ft),
                                          Be = St
                                            ? Je.replaceAll(Ft, "").trim()
                                            : Je.trim(),
                                          Ke = j === qt;
                                        return e.jsx(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => T(Ke ? null : qt),
                                            className:
                                              "bg-[#050505] text-left p-6 flex flex-col justify-between min-h-[140px] outline-none hover:bg-[#070707] transition-colors",
                                            children: Ke
                                              ? e.jsx(e.Fragment, {
                                                  children: e.jsxs("div", {
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "mono text-[10px] tracking-[0.2em] text-[#666] mb-2",
                                                        children: "Q.",
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-[12px] leading-[1.6] max-w-[600px] whitespace-pre-line whitespace-pre-wrap text-[#555]",
                                                        children: St
                                                          ? e.jsx("span", {
                                                              className:
                                                                "italic text-zinc-700",
                                                              children:
                                                                Be || "...",
                                                            })
                                                          : Be || "...",
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "mono text-[10px] tracking-[0.2em] text-white/90 mt-4 mb-2 font-bold",
                                                        children: "A.",
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-[12px] leading-[1.6] text-[#eee] font-light whitespace-pre-line",
                                                        children: Jt(Ne),
                                                      }),
                                                    ],
                                                  }),
                                                })
                                              : e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsxs("div", {
                                                      children: [
                                                        e.jsx("div", {
                                                          className:
                                                            "mono text-[10px] text-[#333] mb-4",
                                                          children: Lt,
                                                        }),
                                                        e.jsx("div", {
                                                          className:
                                                            "text-[13px] text-[#ccc] font-normal",
                                                          children: Qt,
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx("div", {
                                                      className:
                                                        "mono text-[10px] text-[#222] text-right mt-2",
                                                      children: js,
                                                    }),
                                                  ],
                                                }),
                                          },
                                          qt,
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "pt-3 flex justify-center",
                                  children: e.jsx("button", {
                                    onClick: _t,
                                    className: "btn-advance group",
                                    children: e.jsx("span", {
                                      className:
                                        "group-hover:tracking-widest transition-all",
                                      children: "封存说明 [NEXT]",
                                    }),
                                  }),
                                }),
                              ],
                            });
                          })(),
                        }),
                      C === 8 &&
                        (D == null ? void 0 : D.p4) &&
                        e.jsxs("div", {
                          className:
                            "max-w-xl mx-auto border border-white/10 p-12 bg-black text-center relative overflow-hidden shadow-2xl",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute top-0 left-0 w-full h-1 bg-white/20",
                            }),
                            e.jsx("div", {
                              className:
                                "mono text-xs text-red-500 mb-6 tracking-widest",
                              children: "[ 绝密档案 ]",
                            }),
                            e.jsx("p", {
                              className:
                                "cn-serif text-lg text-gray-400 leading-relaxed mb-8 whitespace-pre-line",
                              children: String(D.p4)
                                .replace(/\|\|/g, "")
                                .replace(/\|/g, "")
                                .trim(),
                            }),
                            e.jsx("div", {
                              className: "mono text-[10px] text-dim mt-12",
                              children: "会话已终止",
                            }),
                            e.jsx("div", {
                              className: "pt-8",
                              children: e.jsx("button", {
                                onClick: Ee,
                                className: "btn-advance",
                                children: "回到过去",
                              }),
                            }),
                          ],
                        }),
                      C === 9 &&
                        (D == null ? void 0 : D.p5) &&
                        e.jsxs("div", {
                          className:
                            "w-full max-w-2xl mx-auto space-y-8 animate-fade-in flex flex-col h-[calc(100vh-200px)]",
                          children: [
                            e.jsx("div", {
                              className:
                                "mono text-xs text-center text-gray-500 mb-4",
                              children: "倒计时 10 秒",
                            }),
                            e.jsx("div", {
                              ref: Te,
                              className: "flex-1 overflow-y-auto mb-4 pr-2",
                              style: { maxHeight: "calc(100vh - 300px)" },
                              children: e.jsxs("div", {
                                className: "avg-dialogue-box space-y-6",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "cn-serif text-gray-400 text-sm mb-4",
                                    children: ["[旁白] ", qr(D.p5.narrator)],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "cn-serif text-lg text-white leading-relaxed",
                                    children: (() => {
                                      const wt = f.find((ot) => ot.id === b);
                                      return `${(wt && (wt.nickname || wt.name)) || "角色"}:"${zo(qr(D.p5.character))}"`;
                                    })(),
                                  }),
                                  le.map((wt, xs) => {
                                    const ot = f.find((Ft) => Ft.id === b),
                                      $t =
                                        (ot
                                          ? (i == null ? void 0 : i(ot)) || {}
                                          : {}
                                        ).name || "用户";
                                    return e.jsx(
                                      pn.Fragment,
                                      {
                                        children:
                                          wt.type === "user"
                                            ? e.jsxs(e.Fragment, {
                                                children: [
                                                  wt.narrator &&
                                                    e.jsxs("div", {
                                                      className:
                                                        "cn-serif text-gray-400 text-sm mb-4 mt-6",
                                                      children: [
                                                        "[旁白] ",
                                                        qr(wt.narrator),
                                                      ],
                                                    }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "cn-serif text-gray-400 text-sm mb-4 mt-6",
                                                    children: [$t, "说："],
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "cn-serif text-lg text-white leading-relaxed",
                                                    children: [
                                                      '"',
                                                      qr(wt.text),
                                                      '"',
                                                    ],
                                                  }),
                                                ],
                                              })
                                            : e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsxs("div", {
                                                    className:
                                                      "cn-serif text-gray-400 text-sm mb-4 mt-6",
                                                    children: [
                                                      "[旁白] ",
                                                      qr(wt.narrator),
                                                    ],
                                                  }),
                                                  Array.isArray(wt.character)
                                                    ? wt.character.map(
                                                        (Ft, es) => {
                                                          const At = f.find(
                                                            (Jt) => Jt.id === b,
                                                          );
                                                          return (
                                                            At &&
                                                              (At.nickname ||
                                                                At.name),
                                                            e.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "cn-serif text-lg text-white leading-relaxed mb-2",
                                                                children: [
                                                                  zo(
                                                                    qr(
                                                                      Ft.speaker,
                                                                    ),
                                                                  ),
                                                                  ':"',
                                                                  zo(
                                                                    qr(Ft.text),
                                                                  ),
                                                                  '"',
                                                                ],
                                                              },
                                                              es,
                                                            )
                                                          );
                                                        },
                                                      )
                                                    : e.jsx("div", {
                                                        className:
                                                          "cn-serif text-lg text-white leading-relaxed",
                                                        children: (() => {
                                                          const Ft = f.find(
                                                            (At) => At.id === b,
                                                          );
                                                          return `${(Ft && (Ft.nickname || Ft.name)) || "角色"}:"${zo(qr(wt.character))}"`;
                                                        })(),
                                                      }),
                                                ],
                                              }),
                                      },
                                      xs,
                                    );
                                  }),
                                  X &&
                                    e.jsx("div", {
                                      className:
                                        "text-center text-gray-500 mono text-xs mt-6",
                                      children: "角色正在思考...",
                                    }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className: "mt-auto relative",
                              children: [
                                e.jsx("textarea", {
                                  id: "time-input",
                                  className:
                                    "user-input-field w-full min-h-[60px] max-h-[120px] resize-none overflow-y-auto",
                                  placeholder: "在此输入你的回应...",
                                  autoComplete: "off",
                                  rows: 2,
                                  onKeyDown: (wt) => {
                                    if (wt.key === "Enter" && !wt.shiftKey) {
                                      wt.preventDefault();
                                      const xs = wt.target,
                                        ot = xs.value.trim();
                                      ot && !X && ((xs.value = ""), fe(ot));
                                    }
                                  },
                                  onFocus: () => {
                                    (setTimeout(() => {
                                      Te.current &&
                                        (Te.current.scrollTop =
                                          Te.current.scrollHeight);
                                    }, 100),
                                      setTimeout(() => {
                                        Te.current &&
                                          (Te.current.scrollTop =
                                            Te.current.scrollHeight);
                                      }, 300),
                                      setTimeout(() => {
                                        Te.current &&
                                          (Te.current.scrollTop =
                                            Te.current.scrollHeight);
                                      }, 500));
                                  },
                                  disabled: X,
                                }),
                                e.jsx("div", {
                                  className:
                                    "mono text-[10px] text-dim mt-2 text-right",
                                  children: "按 ENTER 发送，SHIFT+ENTER 换行",
                                }),
                              ],
                            }),
                          ],
                        }),
                      C === 10 &&
                        (D == null ? void 0 : D.p6) &&
                        e.jsxs("div", {
                          className:
                            "w-full max-w-2xl mx-auto space-y-8 animate-fade-in",
                          children: [
                            e.jsxs("div", {
                              className:
                                "avg-dialogue-box space-y-6 border-white/40",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "cn-serif text-gray-400 text-sm mb-4",
                                  children: ["[旁白] ", qr(D.p6.narrator)],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "cn-serif text-xl text-white leading-relaxed",
                                  children: ['"', zo(qr(D.p6.character)), '"'],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex justify-center pt-12",
                              children: e.jsx("button", {
                                onClick: Ve,
                                className:
                                  "mono text-xs text-dim hover:text-white transition-colors",
                                children: "[ 结束连接 ]",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  D &&
                    m &&
                    e.jsxs("div", {
                      className: `echo-player-container echo-player-detail-bar ${h ? "echo-playing" : "echo-paused"}`,
                      onClick: (wt) => {
                        (wt.stopPropagation(), g());
                      },
                      children: [
                        e.jsxs("div", {
                          className: "echo-info-wrapper",
                          children: [
                            e.jsx("div", {
                              className: "echo-track-title",
                              children: m.name,
                            }),
                            e.jsx("div", {
                              className: "echo-track-artist",
                              children:
                                ((sn = (gn = m.ar) == null ? void 0 : gn[0]) ==
                                null
                                  ? void 0
                                  : sn.name) ||
                                ((rn =
                                  (ln = m.artists) == null ? void 0 : ln[0]) ==
                                null
                                  ? void 0
                                  : rn.name) ||
                                "UNKNOWN ARTIST",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "echo-waveform",
                          children: [
                            Array.from({ length: 16 }).map((wt, xs) =>
                              e.jsx("div", { className: "echo-bar" }, xs),
                            ),
                            e.jsx("div", {
                              className: "echo-control-hint",
                              children: h ? "[ PAUSE ]" : "[ PLAY ]",
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
    });
  },
  XX = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
function X4() {
  const { contactsPublic: t, startPhoneCall: s } = vn(),
    [n, a] = l.useState(""),
    r = (c) => {
      n.length < 15 && a((d) => d + c);
    },
    i = () => {
      a((c) => c.slice(0, -1));
    },
    o = l.useMemo(() => {
      if (!n) return null;
      const c = WS(t, n);
      return (
        c ||
        t.find((d) => {
          const u = d.name.toLowerCase().replace(/\s/g, "");
          let f = "";
          for (let p of u)
            for (let [m, h] of Object.entries(XX))
              if (h.includes(p)) {
                f += m;
                break;
              }
          return f.includes(n);
        })
      );
    }, [n, t]);
  return e.jsxs("div", {
    className:
      "h-full flex flex-col bg-[#f9f9f9] font-serif relative overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-white/50 to-[#f9f9f9] pointer-events-none",
      }),
      e.jsxs("div", {
        className:
          "flex-1 flex flex-col items-center justify-end pb-12 relative z-10",
        children: [
          o
            ? e.jsxs("button", {
                onClick: () => s(o.phone),
                className:
                  "mb-8 flex flex-col items-center animate-fade-in hover:opacity-70 active:scale-95 transition-all cursor-pointer",
                children: [
                  e.jsx("span", {
                    className: "text-3xl italic text-[#1a1a1a] mb-1",
                    children: o.name,
                  }),
                  e.jsx("span", {
                    className:
                      "text-xs text-[#1a1a1a]/40 tracking-widest uppercase",
                    children: o.address,
                  }),
                ],
              })
            : e.jsxs("div", {
                className:
                  "mb-8 flex flex-col items-center opacity-0 pointer-events-none",
                children: [
                  e.jsx("span", {
                    className: "text-3xl italic text-transparent mb-1",
                    children: "占位",
                  }),
                  e.jsx("span", {
                    className:
                      "text-xs text-transparent tracking-widest uppercase",
                    children: "占位",
                  }),
                ],
              }),
          e.jsx("div", {
            className: "h-16 flex items-center justify-center mb-4",
            children: e.jsx("span", {
              className: `font-light tracking-widest transition-all duration-200 font-sans ${n.length > 10 ? "text-3xl" : "text-4xl"} text-[#1a1a1a]`,
              children:
                n ||
                e.jsx("span", {
                  className: "text-[#1a1a1a]/20 text-2xl",
                  children: "输入号码",
                }),
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-10 pb-8 relative z-10",
        children: [
          e.jsx("div", {
            className: "grid grid-cols-3 gap-y-6 gap-x-12 mb-8",
            children: [
              { num: "1", sub: "" },
              { num: "2", sub: "ABC" },
              { num: "3", sub: "DEF" },
              { num: "4", sub: "GHI" },
              { num: "5", sub: "JKL" },
              { num: "6", sub: "MNO" },
              { num: "7", sub: "PQRS" },
              { num: "8", sub: "TUV" },
              { num: "9", sub: "WXYZ" },
              { num: "*", sub: "" },
              { num: "0", sub: "+" },
              { num: "#", sub: "" },
            ].map((c) =>
              e.jsxs(
                "button",
                {
                  onClick: () => r(c.num),
                  className:
                    "flex flex-col items-center justify-center w-full aspect-square hover:opacity-50 active:scale-95 transition-all duration-200 group",
                  children: [
                    e.jsx("span", {
                      className: "text-3xl font-light text-[#1a1a1a] font-sans",
                      children: c.num,
                    }),
                    c.sub &&
                      e.jsx("span", {
                        className:
                          "text-[9px] font-medium text-[#1a1a1a]/30 tracking-widest mt-1 font-sans",
                        children: c.sub,
                      }),
                  ],
                },
                c.num,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "grid grid-cols-3 gap-12 items-center mb-4",
            children: [
              e.jsx("div", { className: "flex justify-center" }),
              e.jsx("div", {
                className: "flex justify-center",
                children: e.jsx("button", {
                  type: "button",
                  disabled: !gm(n),
                  className:
                    "w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-xl hover:bg-black active:scale-95 transition-all duration-200 disabled:opacity-35 disabled:pointer-events-none",
                  onClick: () => s(n),
                  children: e.jsx(Zr, {
                    size: 24,
                    color: "white",
                    fill: "white",
                  }),
                }),
              }),
              e.jsx("div", {
                className: "flex justify-center",
                children:
                  n &&
                  e.jsx("button", {
                    onClick: i,
                    className:
                      "w-16 h-16 flex items-center justify-center text-[#1a1a1a]/40 hover:text-[#1a1a1a] active:scale-90 transition-all duration-200",
                    children: e.jsx(mI, { size: 24, strokeWidth: 1 }),
                  }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function eee({ onClose: t }) {
  const {
      phoneRecents: s,
      contactsPublic: n,
      regeneratePhoneRecentSummary: a,
      savePhoneRecentSummary: r,
      setPhoneRecentSummaryBinding: i,
    } = vn(),
    [o, c] = l.useState("all"),
    [d, u] = l.useState(null),
    f = s
      .filter((m) => (o === "missed" ? m.type === "missed" : !0))
      .sort((m, h) => new Date(h.startTime) - new Date(m.startTime)),
    p = (m) => n.find((h) => h.id === m);
  if (d) {
    const m = s.find((h) => h.id === d.id) || d;
    return e.jsx(see, {
      call: m,
      contact: m.contactId ? p(m.contactId) : null,
      onBack: () => u(null),
      onRegenerateSummary: a,
      onSaveSummaryEdited: r,
      onSetSummaryBinding: i,
    });
  }
  return e.jsxs("div", {
    className: "h-full flex flex-col bg-[#f9f9f9] font-serif",
    children: [
      e.jsxs("div", {
        className: "px-6 pt-12 pb-4",
        children: [
          e.jsx("button", {
            onClick: t,
            className: "hover:opacity-70 transition-opacity",
            children: e.jsx("h1", {
              className:
                "text-4xl italic text-[#1a1a1a] font-light tracking-tight mb-6",
              children: "最近通话",
            }),
          }),
          e.jsxs("div", {
            className: "flex space-x-6 border-b border-[#1a1a1a]/10 font-sans",
            children: [
              e.jsx("button", {
                onClick: () => c("all"),
                className: `pb-3 text-sm font-medium transition-colors duration-200 ${o === "all" ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a]" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60"}`,
                children: "全部",
              }),
              e.jsx("button", {
                onClick: () => c("missed"),
                className: `pb-3 text-sm font-medium transition-colors duration-200 ${o === "missed" ? "text-[#1a1a1a] border-b-2 border-[#1a1a1a]" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]/60"}`,
                children: "未接",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto",
        children: [
          f.map((m) => {
            var b;
            const h = m.contactId ? p(m.contactId) : null,
              g = h ? h.name : m.phoneNumber,
              x = m.type === "missed",
              y = new Date(m.startTime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              v = new Date(m.startTime).toLocaleDateString();
            return e.jsxs(
              "button",
              {
                onClick: () => u(m),
                className:
                  "w-full flex items-center px-6 py-4 border-b border-[#1a1a1a]/5 hover:bg-black/5 transition-colors duration-200 group font-sans text-left",
                children: [
                  e.jsxs("div", {
                    className: "mr-4",
                    children: [
                      m.type === "incoming" &&
                        e.jsx(r3, { size: 16, className: "text-[#1a1a1a]/40" }),
                      m.type === "outgoing" &&
                        e.jsx(o3, { size: 16, className: "text-[#1a1a1a]/40" }),
                      m.type === "missed" &&
                        e.jsx(i3, { size: 16, className: "text-red-500" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsx("h3", {
                        className: `text-base font-medium ${x ? "text-red-500" : "text-[#1a1a1a]"}`,
                        children: g,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-[#1a1a1a]/40 mt-0.5",
                        children: h
                          ? (b = h.address) == null
                            ? void 0
                            : b.split(",")[0]
                          : "未知",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      e.jsxs("div", {
                        className: "text-right",
                        children: [
                          e.jsx("span", {
                            className:
                              "block text-xs text-[#1a1a1a]/40 font-light",
                            children: y,
                          }),
                          e.jsx("span", {
                            className:
                              "block text-[0.625rem] text-[#1a1a1a]/20 font-light",
                            children: v,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "text-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                        children: e.jsx(H1, { size: 20, strokeWidth: 1.5 }),
                      }),
                    ],
                  }),
                ],
              },
              m.id,
            );
          }),
          f.length === 0 &&
            e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center h-full pb-20 text-[#1a1a1a]/20",
              children: [
                e.jsx(Dr, {
                  size: 48,
                  strokeWidth: 1,
                  className: "mb-4 opacity-50",
                }),
                e.jsx("span", {
                  className:
                    "text-sm font-medium font-sans tracking-widest uppercase",
                  children: "暂无通话记录",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
const tee = { incoming: "来电", outgoing: "去电", missed: "未接" };
function see({
  call: t,
  contact: s,
  onBack: n,
  onRegenerateSummary: a,
  onSaveSummaryEdited: r,
  onSetSummaryBinding: i,
}) {
  const [o, c] = l.useState(""),
    [d, u] = l.useState(!1),
    [f, p] = l.useState(""),
    [m, h] = l.useState(!1),
    [g, x] = l.useState(""),
    [y, v] = l.useState("");
  l.useEffect(() => {
    (c(""), p(""), h(!1), x((t == null ? void 0 : t.summary) || ""), v(""));
  }, [t == null ? void 0 : t.id, t == null ? void 0 : t.summary]);
  const b = (E) => {
      const S = Math.floor(E / 60),
        j = E % 60;
      return `${S}分${j}秒`;
    },
    N =
      typeof a == "function" &&
      Array.isArray(t.messages) &&
      t.messages.length > 0,
    w = typeof r == "function",
    _ = typeof i == "function",
    A = (t == null ? void 0 : t.bindToChat) !== !1,
    k = async () => {
      if (!(!N || d)) {
        (u(!0), p(""));
        try {
          (await a(t.id, o.trim()),
            p("摘要已更新"),
            setTimeout(() => p(""), 2500));
        } catch (E) {
          p((E == null ? void 0 : E.message) || "生成失败");
        } finally {
          u(!1);
        }
      }
    },
    C = () => {
      w &&
        (r(t.id, g.trim()), v("已保存"), h(!1), setTimeout(() => v(""), 2e3));
    },
    M = (E) => {
      _ &&
        (i(t.id, E.target.checked),
        v(E.target.checked ? "已绑定到聊天记忆" : "已取消绑定到聊天记忆"),
        setTimeout(() => v(""), 2e3));
    };
  return e.jsxs("div", {
    className:
      "h-full flex flex-col bg-[#f9f9f9] animate-slide-in-right font-serif relative",
    children: [
      e.jsxs("div", {
        className: "px-6 pt-14 pb-4 flex items-center relative z-10",
        children: [
          e.jsx("button", {
            onClick: n,
            className:
              "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] hover:bg-gray-100 transition-all shadow-sm mr-4",
            children: e.jsx(un, { size: 20, strokeWidth: 1.5 }),
          }),
          e.jsx("h2", {
            className: "text-xl font-light italic text-[#1a1a1a]",
            children: "通话详情",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto px-6 pb-10",
        children: [
          e.jsxs("div", {
            className: "flex flex-col items-center mb-10 mt-4",
            children: [
              e.jsx("div", {
                className:
                  "w-28 h-28 rounded-full bg-white mb-5 overflow-hidden shadow-lg ring-4 ring-white",
                children:
                  s != null && s.avatar
                    ? e.jsx("img", {
                        src: s.avatar,
                        alt: s.name,
                        className: "w-full h-full object-cover",
                      })
                    : e.jsx("div", {
                        className:
                          "w-full h-full flex items-center justify-center text-gray-300 text-4xl font-serif bg-gray-50",
                        children: s
                          ? s.name[0]
                          : e.jsx(wr, { size: 40, strokeWidth: 1 }),
                      }),
              }),
              e.jsx("h3", {
                className: "text-3xl font-light text-[#1a1a1a] mb-1",
                children: s ? s.name : t.phoneNumber,
              }),
              e.jsx("p", {
                className:
                  "text-sm text-[#1a1a1a]/40 font-sans tracking-widest uppercase",
                children: t.phoneNumber,
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "bg-white rounded-3xl p-8 shadow-sm border border-[#1a1a1a]/5 mb-8 font-sans",
            children: e.jsxs("div", {
              className: "grid grid-cols-2 gap-y-8 gap-x-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[0.625rem] text-[#1a1a1a]/30 uppercase tracking-widest mb-2 font-bold",
                      children: "类型",
                    }),
                    e.jsxs("p", {
                      className:
                        "text-base font-medium capitalize flex items-center gap-2 text-[#1a1a1a]",
                      children: [
                        t.type === "incoming" &&
                          e.jsx(r3, {
                            size: 16,
                            className: "text-[#1a1a1a]/60",
                          }),
                        t.type === "outgoing" &&
                          e.jsx(o3, {
                            size: 16,
                            className: "text-[#1a1a1a]/60",
                          }),
                        t.type === "missed" &&
                          e.jsx(i3, { size: 16, className: "text-red-500" }),
                        tee[t.type] ?? t.type,
                      ],
                    }),
                    t.source === "blocked_character_voice_invite" &&
                      e.jsx("p", {
                        className:
                          "text-xs text-[#1a1a1a]/45 mt-1 font-sans normal-case tracking-normal",
                        children: "拉黑场景 · 角色主动语音",
                      }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[0.625rem] text-[#1a1a1a]/30 uppercase tracking-widest mb-2 font-bold",
                      children: "时长",
                    }),
                    e.jsx("p", {
                      className: "text-base font-medium text-[#1a1a1a]",
                      children: b(t.duration),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "col-span-2",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[0.625rem] text-[#1a1a1a]/30 uppercase tracking-widest mb-2 font-bold",
                      children: "时间",
                    }),
                    e.jsx("p", {
                      className: "text-base font-medium text-[#1a1a1a]",
                      children: new Date(t.startTime).toLocaleString(),
                    }),
                  ],
                }),
                t.rejectionReason &&
                  e.jsxs("div", {
                    className: "col-span-2 pt-4 border-t border-gray-100",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[0.625rem] text-[#1a1a1a]/30 uppercase tracking-widest mb-2 font-bold",
                        children: "拒绝原因",
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm font-medium text-red-500 bg-red-50 px-3 py-2 rounded-lg inline-block",
                        children: t.rejectionReason,
                      }),
                    ],
                  }),
              ],
            }),
          }),
          e.jsxs("div", {
            className:
              "bg-white rounded-3xl p-8 shadow-sm border border-[#1a1a1a]/5 mb-8 font-sans",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-[#1a1a1a]/5 pb-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ro, { size: 16, className: "text-[#1a1a1a]/40" }),
                      e.jsx("h4", {
                        className:
                          "text-xs font-bold text-[#1a1a1a]/40 uppercase tracking-widest",
                        children: "通话摘要",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      N
                        ? e.jsx("button", {
                            type: "button",
                            onClick: k,
                            disabled: d,
                            className:
                              "inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[0.6875rem] font-sans font-bold uppercase tracking-widest bg-[#1a1a1a] text-white disabled:opacity-45 disabled:cursor-not-allowed",
                            children: d
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(Sn, {
                                      size: 14,
                                      className: "animate-spin",
                                    }),
                                    "生成中…",
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(Or, { size: 14, strokeWidth: 2 }),
                                    "重新生成摘要",
                                  ],
                                }),
                          })
                        : null,
                      w
                        ? e.jsxs("button", {
                            type: "button",
                            onClick: () => {
                              (h((E) => !E), x(t.summary || ""), v(""));
                            },
                            className:
                              "inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[0.6875rem] font-sans font-bold uppercase tracking-widest border border-[#1a1a1a]/20 text-[#1a1a1a] hover:bg-[#1a1a1a]/5 transition-colors",
                            children: [
                              e.jsx(_l, { size: 14, strokeWidth: 2 }),
                              m ? "取消编辑" : "编辑摘要",
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              m && w
                ? e.jsxs("div", {
                    className: "space-y-3 mb-4",
                    children: [
                      e.jsx("textarea", {
                        value: g,
                        onChange: (E) => x(E.target.value),
                        placeholder:
                          "在此编辑通话摘要，保存后仅写入本机通话记录。",
                        rows: 8,
                        className:
                          "w-full text-sm text-[#1a1a1a] bg-[#f5f5f5] border border-[#1a1a1a]/10 rounded-xl px-3 py-2.5 resize-y focus:outline-none focus:ring-1 focus:ring-[#1a1a1a]/20 placeholder:text-[#1a1a1a]/25 font-serif leading-relaxed",
                      }),
                      e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: C,
                            className:
                              "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[0.6875rem] font-sans font-bold uppercase tracking-widest bg-[#1a1a1a] text-white",
                            children: "保存编辑",
                          }),
                          y
                            ? e.jsx("span", {
                                className: "text-xs text-[#1a1a1a]/50",
                                children: y,
                              })
                            : null,
                        ],
                      }),
                    ],
                  })
                : e.jsx("p", {
                    className:
                      "text-sm leading-relaxed text-[#1a1a1a] font-serif whitespace-pre-wrap mb-4",
                    children: t.summary
                      ? t.summary
                      : e.jsx("span", {
                          className: "text-[#1a1a1a]/35",
                          children:
                            "暂无摘要。仅已接通的通话会在挂断后自动生成；若刚结束，可过几秒再进入本页查看。",
                        }),
                  }),
              _
                ? e.jsxs("label", {
                    className:
                      "inline-flex items-center gap-2 text-xs text-[#1a1a1a]/70 font-sans mb-3 select-none cursor-pointer",
                    children: [
                      e.jsx("input", {
                        type: "checkbox",
                        checked: A,
                        onChange: M,
                        className: "accent-[#1a1a1a]",
                      }),
                      "绑定到聊天中（AI 回复时记得这条通话摘要）",
                    ],
                  })
                : null,
              f
                ? e.jsx("p", {
                    className: "text-xs text-[#1a1a1a]/50 mb-3 font-sans",
                    children: f,
                  })
                : null,
              N
                ? e.jsxs("div", {
                    className: "space-y-3 pt-2 border-t border-[#1a1a1a]/5",
                    children: [
                      e.jsx("label", {
                        className:
                          "block text-[0.625rem] font-bold text-[#1a1a1a]/35 uppercase tracking-widest",
                        children: "重新生成时的修改说明（可选）",
                      }),
                      e.jsx("textarea", {
                        value: o,
                        onChange: (E) => c(E.target.value),
                        placeholder:
                          "可写明期望、补充事实或粘贴草稿；仅影响模型重写的摘要，不会在聊天里再发挂断跟进。",
                        rows: 3,
                        className:
                          "w-full text-sm text-[#1a1a1a] bg-[#f5f5f5] border border-[#1a1a1a]/10 rounded-xl px-3 py-2.5 resize-y focus:outline-none focus:ring-1 focus:ring-[#1a1a1a]/20 placeholder:text-[#1a1a1a]/25",
                      }),
                    ],
                  })
                : null,
            ],
          }),
          t.messages &&
            t.messages.length > 0 &&
            e.jsxs("div", {
              className:
                "bg-white rounded-3xl p-8 shadow-sm border border-[#1a1a1a]/5 font-sans",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 mb-6 border-b border-[#1a1a1a]/5 pb-4",
                  children: [
                    e.jsx(vu, { size: 16, className: "text-[#1a1a1a]/40" }),
                    e.jsx("h4", {
                      className:
                        "text-xs font-bold text-[#1a1a1a]/40 uppercase tracking-widest",
                      children: "通话记录",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-6",
                  children: t.messages.map((E, S) =>
                    e.jsxs(
                      "div",
                      {
                        className: `flex flex-col ${E.sender === "me" ? "items-end" : "items-start"}`,
                        children: [
                          e.jsx("div", {
                            className: `max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${E.sender === "me" ? "bg-[#1a1a1a] text-white rounded-tr-none" : "bg-gray-50 text-[#1a1a1a] rounded-tl-none border border-gray-100"}`,
                            children: E.text,
                          }),
                          e.jsx("span", {
                            className:
                              "text-[0.625rem] text-[#1a1a1a]/20 mt-1 px-1 uppercase tracking-wide",
                            children:
                              E.sender === "me"
                                ? "我"
                                : s
                                  ? s.name.split(" ")[0]
                                  : "对方",
                          }),
                        ],
                      },
                      S,
                    ),
                  ),
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function nee({ onClose: t }) {
  const { contactsPublic: s, startPhoneCall: n } = vn(),
    [a, r] = l.useState(null),
    [i, o] = l.useState(""),
    c = l.useMemo(() => {
      const u = i.toLowerCase(),
        f = s.filter((m) =>
          m != null && m.phone
            ? String(
                (m == null ? void 0 : m.name) ??
                  (m == null ? void 0 : m.nickname) ??
                  "",
              )
                .toLowerCase()
                .includes(u)
            : !1,
        ),
        p = {};
      return (
        f.forEach((m) => {
          const g = String(
              (m == null ? void 0 : m.name) ??
                (m == null ? void 0 : m.nickname) ??
                "",
            )
              .charAt(0)
              .toUpperCase(),
            x = /^[A-Z]/.test(g) ? g : "#";
          (p[x] || (p[x] = []), p[x].push(m));
        }),
        Object.keys(p)
          .sort()
          .reduce((m, h) => ((m[h] = p[h]), m), {})
      );
    }, [s, i]),
    d = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return a
    ? e.jsx(aee, {
        contact: a,
        onBack: () => r(null),
        onCall: () => n(a.phone),
      })
    : e.jsxs("div", {
        className: "h-full flex flex-col bg-[#f9f9f9] font-serif relative",
        children: [
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-white/80 via-[#f9f9f9] to-[#f0f0f0] pointer-events-none",
          }),
          e.jsxs("div", {
            className: "px-8 pt-14 pb-6 relative z-10",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-end mb-6",
                children: [
                  e.jsx("button", {
                    onClick: t,
                    className: "hover:opacity-70 transition-opacity",
                    children: e.jsx("h1", {
                      className:
                        "text-4xl italic text-[#1a1a1a] font-light tracking-tight",
                      children: "通讯录",
                    }),
                  }),
                  e.jsxs("span", {
                    className:
                      "text-xs font-sans text-[#1a1a1a]/40 mb-1.5 tracking-widest uppercase",
                    children: [s.filter((u) => u.phone).length, " 人"],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "relative group",
                children: [
                  e.jsx(pr, {
                    className:
                      "absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a1a1a]/30 group-focus-within:text-[#1a1a1a]/60 transition-colors",
                    size: 16,
                  }),
                  e.jsx("input", {
                    type: "search",
                    autoComplete: "off",
                    placeholder: "搜索联系人...",
                    value: i,
                    onChange: (u) => o(u.target.value),
                    className:
                      "w-full bg-white text-[#1a1a1a] rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none shadow-sm focus:shadow-md transition-all font-sans placeholder-[#1a1a1a]/20 border border-transparent focus:border-[#1a1a1a]/5",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 overflow-y-auto relative z-10 px-4 pb-4",
            children: [
              Object.entries(c).map(([u, f]) =>
                e.jsxs(
                  "div",
                  {
                    id: `section-${u}`,
                    className: "mb-6",
                    children: [
                      e.jsx("div", {
                        className:
                          "px-4 py-2 text-xs font-bold text-[#1a1a1a]/30 font-sans sticky top-0 backdrop-blur-md rounded-lg mb-2",
                        children: u,
                      }),
                      e.jsx("div", {
                        className:
                          "bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm border border-white/50",
                        children: f.map((p, m) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => r(p),
                              className: `w-full flex items-center justify-between px-6 py-4 hover:bg-white transition-colors text-left group ${m !== f.length - 1 ? "border-b border-[#1a1a1a]/5" : ""}`,
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-lg text-[#1a1a1a] font-serif group-hover:translate-x-1 transition-transform duration-300",
                                      children: p.name,
                                    }),
                                    p.nickname &&
                                      p.nickname !== p.name &&
                                      e.jsx("span", {
                                        className:
                                          "text-[0.625rem] text-[#1a1a1a]/40 font-sans tracking-wide uppercase mt-0.5",
                                        children: p.nickname,
                                      }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "w-6 h-6 rounded-full border border-[#1a1a1a]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0",
                                  children: e.jsx(un, {
                                    size: 12,
                                    className: "rotate-180 text-[#1a1a1a]/60",
                                  }),
                                }),
                              ],
                            },
                            p.id,
                          ),
                        ),
                      }),
                    ],
                  },
                  u,
                ),
              ),
              s.length > 0 &&
                e.jsx("div", {
                  className:
                    "fixed right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 py-2 px-1 bg-white/40 backdrop-blur-md rounded-full shadow-sm border border-white/50 z-20 scale-90 origin-right",
                  children: d.map((u) =>
                    e.jsx(
                      "a",
                      {
                        href: `#section-${u}`,
                        className:
                          "text-[0.5625rem] font-bold text-[#1a1a1a]/30 hover:text-[#1a1a1a] hover:scale-150 transition-all w-4 h-4 flex items-center justify-center font-sans",
                        onClick: (f) => {
                          f.preventDefault();
                          const p = document.getElementById(`section-${u}`);
                          p && p.scrollIntoView({ behavior: "smooth" });
                        },
                        children: u,
                      },
                      u,
                    ),
                  ),
                }),
              Object.keys(c).length === 0 &&
                e.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center h-64 text-[#1a1a1a]/20",
                  children: [
                    e.jsx(Vi, {
                      size: 48,
                      strokeWidth: 0.5,
                      className: "mb-4 opacity-50",
                    }),
                    e.jsx("span", {
                      className: "text-sm font-light font-serif italic",
                      children: "未找到联系人",
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
}
function aee({ contact: t, onBack: s, onCall: n }) {
  return e.jsxs("div", {
    className:
      "h-full flex flex-col bg-[#f9f9f9] animate-slide-in-right font-serif relative",
    children: [
      e.jsx("div", {
        className:
          "absolute inset-0 bg-cover bg-center opacity-10 blur-3xl scale-110 pointer-events-none",
        style: { backgroundImage: `url(${t.avatar})` },
      }),
      e.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-[#f9f9f9]/80 to-[#f9f9f9] pointer-events-none",
      }),
      e.jsxs("div", {
        className:
          "px-6 pt-14 pb-4 flex justify-between items-center relative z-10",
        children: [
          e.jsx("button", {
            onClick: s,
            className:
              "w-10 h-10 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-[#1a1a1a] hover:bg-white transition-all shadow-sm",
            children: e.jsx(un, { size: 20, strokeWidth: 1.5 }),
          }),
          e.jsx("button", {
            className:
              "text-[#1a1a1a] text-sm font-medium hover:opacity-60 transition-opacity font-sans tracking-wide uppercase",
            children: "编辑",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto relative z-10",
        children: [
          e.jsxs("div", {
            className: "flex flex-col items-center px-8 pb-10 pt-4",
            children: [
              e.jsx("div", {
                className:
                  "w-32 h-32 rounded-[2rem] overflow-hidden shadow-2xl mb-6 border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500",
                children: e.jsx("img", {
                  src: t.avatar,
                  alt: t.name,
                  className: "w-full h-full object-cover",
                }),
              }),
              e.jsx("h2", {
                className:
                  "text-4xl italic text-[#1a1a1a] text-center mb-2 font-light",
                children: t.name,
              }),
              e.jsx("p", {
                className:
                  "text-[#1a1a1a]/40 text-xs tracking-[0.2em] uppercase font-sans mb-8",
                children: t.note || "手机联系人",
              }),
              e.jsxs("div", {
                className: "flex justify-center gap-6 w-full",
                children: [
                  e.jsx(t0, { icon: Ar, label: "消息" }),
                  e.jsx(t0, {
                    icon: Zr,
                    label: "电话",
                    active: !0,
                    onClick: n,
                  }),
                  e.jsx(t0, { icon: Vl, label: "视频" }),
                  e.jsx(t0, { icon: Ac, label: "邮件" }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "px-6 space-y-4 font-sans pb-10",
            children: [
              e.jsxs("div", {
                className:
                  "bg-white/60 backdrop-blur-md rounded-3xl p-6 shadow-sm border border-white/50",
                children: [
                  e.jsxs("div", {
                    className: "mb-6 last:mb-0",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[0.625rem] font-bold text-[#1a1a1a]/30 mb-1 uppercase tracking-widest",
                        children: "手机",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[#1a1a1a] text-xl font-light tracking-wide",
                        children: t.phone,
                      }),
                    ],
                  }),
                  t.email &&
                    e.jsxs("div", {
                      className:
                        "mb-6 last:mb-0 border-t border-[#1a1a1a]/5 pt-4",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[0.625rem] font-bold text-[#1a1a1a]/30 mb-1 uppercase tracking-widest",
                          children: "邮箱",
                        }),
                        e.jsx("p", {
                          className: "text-[#1a1a1a] text-base",
                          children: t.email,
                        }),
                      ],
                    }),
                  t.address &&
                    e.jsxs("div", {
                      className:
                        "mb-6 last:mb-0 border-t border-[#1a1a1a]/5 pt-4",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[0.625rem] font-bold text-[#1a1a1a]/30 mb-1 uppercase tracking-widest",
                          children: "地址",
                        }),
                        e.jsx("p", {
                          className: "text-[#1a1a1a] text-base leading-relaxed",
                          children: t.address,
                        }),
                      ],
                    }),
                ],
              }),
              e.jsx("button", {
                className:
                  "w-full py-4 text-red-500/80 text-sm font-medium bg-white/40 rounded-2xl hover:bg-red-50 transition-colors",
                children: "阻止此来电",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function t0({ icon: t, label: s, active: n, onClick: a }) {
  return e.jsxs("button", {
    onClick: a,
    className: "flex flex-col items-center space-y-2 group",
    children: [
      e.jsx("div", {
        className: `w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${n ? "bg-[#1a1a1a] text-white shadow-lg" : "bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 hover:bg-[#1a1a1a]/5"}`,
        children: e.jsx(t, {
          size: 20,
          strokeWidth: 1.5,
          fill: n ? "currentColor" : "none",
        }),
      }),
      e.jsx("span", {
        className:
          "text-[0.625rem] font-medium text-[#1a1a1a]/60 font-sans tracking-wide uppercase",
        children: s,
      }),
    ],
  });
}
const ree = [],
  iee =
    "你是电话语音信箱助手。只根据用户给出的指令生成语音留言文本；输出必须可解析、简洁、口语化，不添加额外解释。";
function oee(t) {
  return (Array.isArray(t) ? t : []).map((s) => {
    const n = s == null ? void 0 : s.sender,
      a = String(
        (s == null ? void 0 : s.text) ?? (s == null ? void 0 : s.content) ?? "",
      );
    return n === "system"
      ? { role: "user", content: a }
      : { role: n === "me" ? "user" : "assistant", content: a };
  });
}
async function lee({ apiConfig: t, addApiLog: s, messages: n }) {
  const a = [{ role: "system", content: iee }, ...oee(n)];
  return cr(
    t,
    { messages: a, temperature: (t == null ? void 0 : t.temperature) ?? 0.7 },
    { addApiLog: s, logScene: "phone_voicemail", logContactName: "PhoneApp" },
  );
}
function cee({ onClose: t }) {
  const {
      contactsPublic: s,
      chats: n,
      user: a,
      startPhoneCall: r,
      playTTS: i,
      apiConfig: o,
      addApiLog: c,
    } = vn(),
    [d, u] = Yn("phone_app_voicemails", ree),
    [f, p] = l.useState(null),
    [m, h] = l.useState(null),
    [g, x] = l.useState(!1),
    y = l.useRef(null),
    v = (k) => s.find((C) => C.id === k),
    b = (k) => {
      p(f === k ? null : k);
    },
    N = async (k, C) => {
      var E, S, j, T, I, L, B, F, D;
      if ((k.stopPropagation(), m === C.id)) {
        (y.current && (y.current.pause(), (y.current = null)), h(null));
        return;
      }
      y.current && (y.current.pause(), (y.current = null));
      let M = C.audioUrl;
      if (!M) {
        const $ = v(C.contactId),
          P = n.find((O) => O.contactId === C.contactId),
          z =
            ((E = P == null ? void 0 : P.settings) == null
              ? void 0
              : E.voiceId) || ($ == null ? void 0 : $.ttsVoiceId);
        if (!$ || !z) {
          alert("该联系人未配置声音，请在聊天设置中配置");
          return;
        }
        try {
          const O = await i(C.transcript, {
            voiceId: z,
            modelId:
              (S = P == null ? void 0 : P.settings) == null
                ? void 0
                : S.modelId,
            stability:
              (j = P == null ? void 0 : P.settings) == null
                ? void 0
                : j.stability,
            similarityBoost:
              (T = P == null ? void 0 : P.settings) == null
                ? void 0
                : T.similarityBoost,
            style:
              (I = P == null ? void 0 : P.settings) == null ? void 0 : I.style,
            useSpeakerBoost:
              (L = P == null ? void 0 : P.settings) == null
                ? void 0
                : L.useSpeakerBoost,
            speed:
              (B = P == null ? void 0 : P.settings) == null ? void 0 : B.speed,
            vol: (F = P == null ? void 0 : P.settings) == null ? void 0 : F.vol,
            pitch:
              (D = P == null ? void 0 : P.settings) == null ? void 0 : D.pitch,
            onlyGetUrl: !0,
            saveId: `voicemail_${C.id}`,
          });
          if (O)
            ((M = O),
              u((Z) =>
                Z.map((K) => (K.id === C.id ? { ...K, audioUrl: M } : K)),
              ));
          else {
            alert("语音生成失败");
            return;
          }
        } catch {
          alert("语音生成出错");
          return;
        }
      }
      if (M) {
        const $ = new Audio(M);
        ((y.current = $),
          h(C.id),
          ($.onended = () => {
            (h(null), (y.current = null));
          }),
          ($.onerror = (P) => {
            (h(null), alert("播放失败"));
          }),
          $.play().catch((P) => {
            h(null);
          }));
      }
    };
  l.useEffect(
    () => () => {
      y.current && y.current.pause();
    },
    [],
  );
  const w = (k, C) => {
      (k.stopPropagation(),
        u((M) => M.filter((E) => E.id !== C)),
        f === C && p(null),
        m === C &&
          (y.current && (y.current.pause(), (y.current = null)), h(null)));
    },
    _ = (k, C) => {
      (k.stopPropagation(),
        C && C !== "Unknown" ? (r(C), t && t()) : alert("无法回拨：未知号码"));
    },
    A = async () => {
      if (!g) {
        x(!0);
        try {
          const k = s.filter((F) => F.id && (F.name || F.nickname || F.remark));
          if (k.length === 0) {
            (alert("没有可用的联系人"), x(!1));
            return;
          }
          const M = [...k].sort(() => 0.5 - Math.random()).slice(0, 5),
            E = M.map((F, D) => {
              const $ = F.remark || F.nickname || F.name || `联系人${D + 1}`,
                P = n.find((Z) => Z.contactId === F.id),
                O = (P ? P.messages.slice(-30) : []).map(
                  (Z) => `${Z.sender === "me" ? "用户" : "你"}: ${Z.text}`,
                ).join(`
`);
              return `## 联系人 ${D + 1}：${$}
设定：${F.setting || "无"}
参考聊天记录：
${O || "（无）"}`;
            }).join(`

`),
            j = [
              {
                sender: "system",
                text: `
[指令]
忽略之前的系统设定。你需要依次扮演下面列出的每一位联系人，给用户 ${a.name} 各留一条语音留言。
每条留言独立生成，语气和内容要符合对应联系人。

${E}

要求（对每一条留言）：
1. 语气自然口语化，包含停顿、语气词。
2. 内容结合该联系人与用户的关系和聊天话题。
3. 每条 30-80 字。
4. **绝对不要**包含任何动作描写（如（叹气）、*笑*、[声音]等），只包含说出来的文字。
5. 为每条留言设想不同的时间（例如：10分钟前、昨天晚上、周五下午等）。

必须返回一个 JSON 数组，数组长度等于上面联系人数量（${M.length}），顺序与上面一致。每项格式：
{
  "contact_name": "该联系人姓名（与上面列表中的姓名完全一致）",
  "transcript": "留言内容（纯文本，无动作描写）",
  "time_label": "时间描述（如：10分钟前）"
}

只输出一个 JSON 数组，不要其他说明。例如：
[
  { "contact_name": "张三", "transcript": "...", "time_label": "10分钟前" },
  { "contact_name": "李四", "transcript": "...", "time_label": "昨天晚上" }
]
`,
              },
            ],
            T = await lee({ apiConfig: o, addApiLog: c, messages: j });
          let I = [];
          try {
            const F = T.match(/```(?:json)?\s*([\s\S]*?)\s*```/),
              $ = (F ? F[1] : T).match(/\[\s*[\s\S]*\]/);
            $ && ((I = JSON.parse($[0])), Array.isArray(I) || (I = []));
          } catch {}
          const L = Object.fromEntries(
              M.map((F, D) => [
                F.remark || F.nickname || F.name || `联系人${D + 1}`,
                F,
              ]),
            ),
            B = [];
          for (const F of I) {
            const D = F.contact_name || F.contactName,
              $ = L[D];
            if (!$) continue;
            let P = (F.transcript || "").trim();
            P = P.replace(/[\(（][^\)）]*[\)）]/g, "")
              .replace(/\[.*?\]/g, "")
              .trim();
            const z = F.time_label || "刚刚";
            P.length > 5 &&
              !P.includes("[指令]") &&
              B.push({
                id:
                  Date.now().toString() +
                  Math.random().toString(36).substr(2, 5),
                contactId: $.id,
                phone: $.phone || "Unknown",
                date: z,
                duration: Math.floor(Math.random() * 40 + 10) + "s",
                isRead: !1,
                transcript: P,
                audioUrl: null,
              });
          }
          B.length > 0
            ? u((F) => [...B, ...F])
            : I.length === 0 && alert("未能解析到语音留言，请重试");
        } catch (k) {
          alert(`生成语音留言时出错: ${k.message}`);
        } finally {
          x(!1);
        }
      }
    };
  return e.jsxs("div", {
    className: "h-full flex flex-col bg-[#f9f9f9] font-serif",
    children: [
      e.jsxs("div", {
        className: "px-6 pt-12 pb-4 flex justify-between items-end",
        children: [
          e.jsx("button", {
            onClick: t,
            className: "hover:opacity-70 transition-opacity",
            children: e.jsx("h1", {
              className:
                "text-4xl italic text-[#1a1a1a] font-light tracking-tight",
              children: "语音信箱",
            }),
          }),
          e.jsxs("button", {
            onClick: A,
            disabled: g,
            className:
              "text-[#1a1a1a] text-sm font-medium mb-1 hover:opacity-60 font-sans flex items-center gap-2 disabled:opacity-30",
            children: [
              g && e.jsx(Sn, { size: 14, className: "animate-spin" }),
              "生成留言",
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto",
        children: [
          d.map((k) => {
            const C = k.contactId ? v(k.contactId) : null,
              M = C ? C.name : k.phone,
              E = f === k.id,
              S = m === k.id;
            return e.jsxs(
              "div",
              {
                onClick: () => b(k.id),
                className: `border-b border-[#1a1a1a]/5 transition-all duration-300 ${E ? "bg-[#1a1a1a]/5" : "bg-transparent hover:bg-[#1a1a1a]/5"}`,
                children: [
                  e.jsxs("div", {
                    className:
                      "px-6 py-4 flex items-start font-sans cursor-pointer",
                    children: [
                      e.jsx("div", {
                        className: `w-2 h-2 rounded-full mt-2 mr-4 transition-colors duration-300 ${k.isRead ? "bg-transparent" : "bg-[#1a1a1a]"}`,
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex justify-between items-baseline mb-1",
                            children: [
                              e.jsx("h3", {
                                className: `text-base font-medium truncate transition-colors duration-300 ${k.isRead ? "text-[#1a1a1a]/80" : "text-[#1a1a1a]"}`,
                                children: M,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-xs text-[#1a1a1a]/40 font-light whitespace-nowrap ml-4",
                                children: k.date,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm text-[#1a1a1a]/60 font-light truncate pr-4",
                                children: C ? "手机" : "未知",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-xs text-[#1a1a1a]/40 font-mono",
                                children: k.duration,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: `overflow-hidden transition-all duration-300 ease-in-out ${E ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                    children: e.jsxs("div", {
                      className: "px-6 pb-6 pt-2 font-sans",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center space-x-4 mb-4",
                          children: [
                            e.jsx("button", {
                              onClick: (j) => N(j, k),
                              className:
                                "w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:opacity-80 transition-opacity shadow-sm",
                              children: S
                                ? e.jsx(Sl, { size: 16, fill: "currentColor" })
                                : e.jsx(xr, {
                                    size: 16,
                                    fill: "currentColor",
                                    className: "ml-0.5",
                                  }),
                            }),
                            e.jsx("div", {
                              className:
                                "flex-1 h-0.5 bg-[#1a1a1a]/10 rounded-full overflow-hidden",
                              children: e.jsx("div", {
                                className: `h-full bg-[#1a1a1a] rounded-full transition-all duration-[2000ms] ease-linear ${S ? "w-full" : "w-0"}`,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex gap-3",
                              children: [
                                e.jsx("button", {
                                  onClick: (j) => _(j, k.phone),
                                  className:
                                    "text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors",
                                  children: e.jsx(Zr, {
                                    size: 18,
                                    strokeWidth: 1.5,
                                  }),
                                }),
                                e.jsx("button", {
                                  onClick: (j) => w(j, k.id),
                                  className:
                                    "text-[#1a1a1a]/40 hover:text-red-500 transition-colors",
                                  children: e.jsx(_n, {
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
                            "pl-4 border-l-2 border-[#1a1a1a]/10 py-1 ml-1",
                          children: [
                            e.jsx("h4", {
                              className:
                                "text-[9px] font-bold text-[#1a1a1a]/30 uppercase tracking-widest mb-1.5",
                              children: "文字记录",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-sm text-[#1a1a1a]/90 leading-relaxed font-serif italic",
                              children: ['"', k.transcript, '"'],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              },
              k.id,
            );
          }),
          d.length === 0 &&
            e.jsxs("div", {
              className:
                "flex flex-col items-center justify-center h-full pb-20 text-[#1a1a1a]/20",
              children: [
                e.jsx(f3, {
                  size: 48,
                  strokeWidth: 1,
                  className: "mb-4 opacity-50",
                }),
                e.jsx("span", {
                  className:
                    "text-sm font-medium font-sans tracking-widest uppercase",
                  children: "暂无语音留言",
                }),
                e.jsx("button", {
                  onClick: A,
                  disabled: g,
                  className:
                    "mt-4 text-[#1a1a1a] text-sm font-medium hover:opacity-60 font-sans border-b border-[#1a1a1a] pb-0.5 disabled:opacity-30",
                  children: g ? "生成中..." : "生成语音留言",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function e5({ size: t = 24, className: s }) {
  return e.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: s,
    "aria-hidden": !0,
    children: [
      e.jsx("rect", {
        x: "5",
        y: "9",
        width: "14",
        height: "10",
        rx: "2",
        stroke: "currentColor",
        strokeWidth: "1.5",
      }),
      e.jsx("path", {
        d: "M9 7V5a3 3 0 016 0v2",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
      }),
      e.jsx("circle", { cx: "12", cy: "14", r: "2", fill: "currentColor" }),
    ],
  });
}
function dee() {
  var he, ge;
  const {
      phoneCallState: t,
      setPhoneCallState: s,
      endPhoneCall: n,
      startPhoneCall: a,
      handlePhoneInteraction: r,
      regeneratePhoneReply: i,
      retryLastPhoneModelRound: o,
      contactsPublic: c,
      unlockAudio: d,
      stopTTS: u,
    } = vn(),
    {
      status: f,
      contactId: p,
      phoneNumber: m,
      startTime: h,
      rejectionReason: g,
      rejectionActivity: x,
      currentMessages: y,
      callOrigin: v,
      apiError: b,
    } = t || {},
    [N, w] = l.useState(0),
    [_, A] = l.useState(""),
    [k, C] = l.useState(!1),
    [M, E] = l.useState(!1),
    [S, j] = l.useState(!1),
    [T, I] = l.useState(0),
    [L, B] = l.useState(""),
    [F, D] = l.useState({}),
    [$, P] = l.useState(null),
    [z, O] = l.useState(""),
    Z = l.useRef(null),
    K = l.useMemo(() => {
      var J;
      for (let G = y.length - 1; G >= 0; G--)
        if (((J = y[G]) == null ? void 0 : J.sender) === "me") return G;
      return -1;
    }, [y]),
    q = /\s*\|\s*\|\s*|\uFF5C\uFF5C/,
    V = l.useMemo(() => {
      const J = [];
      return (
        y.forEach((G, we) => {
          if (G.sender === "them" && G.text && q.test(String(G.text))) {
            const Q = String(G.text)
              .split(q)
              .map((ve) =>
                ve
                  .replace(
                    /\r\n/g,
                    `
`,
                  )
                  .trim(),
              )
              .filter(Boolean);
            Q.forEach((ve, Ve) => {
              J.push({
                msg: {
                  ...G,
                  text: ve,
                  translation: Ve === 0 ? G.translation : null,
                },
                sourceIdx: we,
                rowKey: `them-${we}-${Ve}`,
                isLastThemRow: we === y.length - 1 && Ve === Q.length - 1,
              });
            });
          } else
            J.push({
              msg: G,
              sourceIdx: we,
              rowKey: `${G.sender}-${we}`,
              isLastThemRow: G.sender === "them" && we === y.length - 1,
            });
        }),
        J
      );
    }, [y]);
  (l.useEffect(() => {
    f !== "connected" && (P(null), O(""));
  }, [f]),
    l.useEffect(() => {
      if ($ == null) return;
      const J = requestAnimationFrame(() => {
        const G = Z.current;
        G && (G.focus(), G.select());
      });
      return () => cancelAnimationFrame(J);
    }, [$]));
  const ne = () => {
      const J = z.trim();
      if (!J) {
        alert("内容不能为空");
        return;
      }
      $ != null &&
        (s((G) => ({
          ...G,
          currentMessages: G.currentMessages.map((we, Q) =>
            Q === $ ? { ...we, text: J } : we,
          ),
        })),
        P(null),
        O(""));
    },
    le = () => {
      (P(null), O(""));
    },
    ie = c.find((J) => J.id === p) || { name: m, avatar: null },
    X = l.useRef(null),
    je = l.useRef(null),
    xe = l.useRef(null),
    ye = l.useRef(0),
    R = l.useRef(M);
  R.current = M;
  const oe = l.useRef(null),
    ee = l.useRef(null),
    H = l.useRef(null),
    Y = l.useRef(null),
    U =
      "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
  (l.useEffect(() => {
    if (f === "connected") {
      d == null || d();
      const J = setInterval(() => {
        d == null || d();
      }, 25e3);
      return () => clearInterval(J);
    }
  }, [f, d]),
    l.useEffect(() => {
      if (f !== "connected") {
        if (
          (Y.current && clearInterval(Y.current), (Y.current = null), H.current)
        )
          try {
            (H.current.pause(), (H.current.currentTime = 0));
          } catch {}
        return;
      }
      const J = async () => {
        try {
          if (!H.current) {
            const we = new Audio(U);
            ((we.loop = !0),
              (we.muted = !0),
              (we.volume = 0),
              (we.playsInline = !0),
              (H.current = we));
          }
          await H.current.play();
        } catch {}
      };
      (J(),
        (Y.current = setInterval(() => {
          J();
        }, 12e3)));
      const G = () => {
        document.hidden || J();
      };
      return (
        document.addEventListener("visibilitychange", G),
        () => {
          if (
            (document.removeEventListener("visibilitychange", G),
            Y.current && clearInterval(Y.current),
            (Y.current = null),
            H.current)
          )
            try {
              (H.current.pause(), (H.current.currentTime = 0));
            } catch {}
        }
      );
    }, [f]),
    l.useEffect(() => {
      let J;
      return (
        f === "connected" && h
          ? (J = setInterval(() => {
              w(Math.floor((Date.now() - h) / 1e3));
            }, 1e3))
          : w(0),
        () => clearInterval(J)
      );
    }, [f, h]));
  const ce = (J) => {
      const G = Math.floor(J / 60),
        we = J % 60;
      return `${G.toString().padStart(2, "0")}:${we.toString().padStart(2, "0")}`;
    },
    pe = (J) => {
      (B(J),
        ee.current && clearTimeout(ee.current),
        (ee.current = setTimeout(() => B(""), 1800)));
    },
    se = async (J = !0) => {
      (oe.current && clearInterval(oe.current), (oe.current = null));
      const G = T;
      (j(!1),
        I(0),
        pe(`录音已结束 ${ce(G)}`),
        J &&
          f === "connected" &&
          p &&
          (C(!0), await r(p, `[系统提示：用户结束录音，时长 ${ce(G)}]`, !0)));
    },
    Te = async () => {
      f !== "connected" ||
        !p ||
        (j(!0),
        I(0),
        pe("正在录音 00:00"),
        oe.current && clearInterval(oe.current),
        (oe.current = setInterval(() => I((J) => J + 1), 1e3)),
        C(!0),
        await r(p, "[系统提示：用户开始录音]", !0));
    };
  (l.useEffect(() => (f !== "connected" && S && se(!1), () => {}), [f]),
    l.useEffect(
      () => () => {
        (oe.current && clearInterval(oe.current),
          ee.current && clearTimeout(ee.current));
      },
      [],
    ));
  const ke = (J = !1) => {
      X.current &&
        (X.current.scrollIntoView({
          behavior: J ? "auto" : "smooth",
          block: "end",
        }),
        J && xe.current && (xe.current.scrollTop = xe.current.scrollHeight));
    },
    W = () => {
      (ke(!1), setTimeout(() => ke(!1), 100), setTimeout(() => ke(!1), 380));
    };
  (l.useEffect(() => {
    X.current && X.current.scrollIntoView({ behavior: "smooth" });
  }, [y, k]),
    l.useEffect(() => {
      const J = window.visualViewport;
      J && (ye.current = J.height);
    }, [f, M]),
    l.useEffect(() => {
      if (M) {
        ke(!1);
        const J = setTimeout(() => ke(!1), 100),
          G = setTimeout(() => ke(!1), 400);
        return () => {
          (clearTimeout(J), clearTimeout(G));
        };
      }
    }, [M]),
    l.useEffect(() => {
      const J = window.visualViewport;
      if (!J) return;
      const G = () => {
        const we = ye.current,
          Q = J.height;
        ((ye.current = Q),
          we > 0 &&
            Q < we &&
            R.current &&
            (ke(!1),
            setTimeout(() => ke(!1), 100),
            setTimeout(() => ke(!1), 300)));
      };
      return (
        J.addEventListener("resize", G),
        () => J.removeEventListener("resize", G)
      );
    }, []),
    l.useEffect(() => {
      if (b) {
        C(!1);
        return;
      }
      f === "connected" && y.length === 0
        ? C(!0)
        : y.length > 0 && y[y.length - 1].sender === "them" && C(!1);
    }, [f, y, b]),
    l.useEffect(() => {
      D({});
    }, [p, h]));
  const ue = (J) => {
      const G = Math.floor(J / 60),
        we = J % 60;
      return `${G.toString().padStart(2, "0")}:${we.toString().padStart(2, "0")}`;
    },
    re = async (J) => {
      var we;
      (we = J == null ? void 0 : J.preventDefault) == null || we.call(J);
      const G = _.trim();
      G && (A(""), C(!0), E(!1), await r(p, G));
    };
  return (
    l.useEffect(() => {
      const J = (G) => {
        M && je.current && !je.current.contains(G.target) && E(!1);
      };
      return (
        document.addEventListener("mousedown", J),
        document.addEventListener("touchstart", J),
        () => {
          (document.removeEventListener("mousedown", J),
            document.removeEventListener("touchstart", J));
        }
      );
    }, [M]),
    f === "idle"
      ? null
      : f === "rejected"
        ? e.jsx("div", {
            className:
              "absolute inset-0 z-50 flex items-center justify-center bg-[#f9f9f9]/90 backdrop-blur-sm p-6 animate-fade-in font-serif",
            children: e.jsxs("div", {
              className:
                "w-full max-w-xs bg-white rounded-3xl p-8 shadow-xl flex flex-col items-center text-center border border-[#1a1a1a]/5",
              children: [
                e.jsx("div", {
                  className:
                    "w-24 h-24 rounded-full bg-[#f9f9f9] mb-6 overflow-hidden",
                  children: ie.avatar
                    ? e.jsx("img", {
                        src: ie.avatar,
                        alt: ie.name,
                        className: "w-full h-full object-cover",
                      })
                    : e.jsx("div", {
                        className:
                          "w-full h-full flex items-center justify-center text-3xl text-[#1a1a1a]/20 font-sans",
                        children: (he = ie.name) == null ? void 0 : he[0],
                      }),
                }),
                e.jsx("h3", {
                  className: "text-2xl italic text-[#1a1a1a] mb-1",
                  children: ie.name,
                }),
                e.jsx("p", {
                  className:
                    "text-red-500/60 font-sans text-xs tracking-widest uppercase mb-8",
                  children: "通话已拒绝",
                }),
                e.jsxs("div", {
                  className: "w-full space-y-4 mb-8 text-left",
                  children: [
                    e.jsxs("div", {
                      className: "border-l-2 border-[#1a1a1a]/10 pl-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[0.625rem] text-[#1a1a1a]/30 uppercase tracking-widest font-sans block mb-1",
                          children: "原因",
                        }),
                        e.jsxs("p", {
                          className: "text-[#1a1a1a] text-sm italic",
                          children: ['"', g || "忙碌", '"'],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "border-l-2 border-[#1a1a1a]/10 pl-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[0.625rem] text-[#1a1a1a]/30 uppercase tracking-widest font-sans block mb-1",
                          children: "状态",
                        }),
                        e.jsx("p", {
                          className: "text-[#1a1a1a] text-sm italic",
                          children: x || "工作中",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => {
                    (u == null || u(), n());
                  },
                  className:
                    "w-full py-4 bg-[#1a1a1a] text-white rounded-xl hover:bg-black transition-all active:scale-95 shadow-lg font-sans tracking-wide text-xs uppercase",
                  children: "关闭",
                }),
              ],
            }),
          })
        : e.jsxs("div", {
            className:
              "absolute inset-0 z-50 bg-[#f9f9f9] text-[#1a1a1a] flex flex-col animate-slide-up font-serif overflow-hidden",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-white/50 to-[#f9f9f9] pointer-events-none",
              }),
              e.jsxs("div", {
                className:
                  "flex-none flex flex-col items-center pt-16 px-6 relative z-10 h-[30%] min-h-[240px]",
                children: [
                  e.jsxs("div", {
                    className: "relative mb-6",
                    children: [
                      f === "connected" &&
                        !k &&
                        e.jsx("div", {
                          className:
                            "absolute -inset-2 rounded-full border border-[#1a1a1a]/5 animate-ping opacity-50",
                          style: { animationDuration: "3s" },
                        }),
                      e.jsx("div", {
                        className:
                          "w-28 h-28 rounded-full bg-white overflow-hidden shadow-sm border border-[#1a1a1a]/5 relative z-10",
                        children: ie.avatar
                          ? e.jsx("img", {
                              src: ie.avatar,
                              alt: ie.name,
                              className: "w-full h-full object-cover",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center text-4xl text-[#1a1a1a]/10 font-sans",
                              children: (ge = ie.name) == null ? void 0 : ge[0],
                            }),
                      }),
                    ],
                  }),
                  e.jsx("h2", {
                    className: "text-4xl italic font-light mb-2 text-[#1a1a1a]",
                    children: ie.name,
                  }),
                  e.jsxs("div", {
                    className:
                      "text-[#1a1a1a]/40 font-sans font-light tracking-widest uppercase text-xs flex items-center gap-2",
                    children: [
                      f === "connected" &&
                        e.jsx("div", {
                          className:
                            "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse",
                        }),
                      f === "dialing"
                        ? "正在通话中"
                        : f === "ending"
                          ? "通话已结束"
                          : ue(N),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex-1 relative z-10 w-full px-6 flex flex-col min-h-0 overflow-hidden",
                children: [
                  f === "dialing" &&
                    e.jsx("div", {
                      className:
                        "flex-1 min-h-0 flex flex-col items-stretch justify-center px-2 pb-6",
                      "aria-busy": "true",
                      "aria-label": "正在连接",
                      children: b
                        ? e.jsxs("div", {
                            className:
                              "rounded-2xl border border-red-200/80 bg-red-50 px-4 py-3 text-left shadow-sm",
                            role: "alert",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[0.6875rem] font-sans font-medium text-red-900/90 uppercase tracking-widest mb-2",
                                children: "拨号请求失败",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-red-950/90 font-sans whitespace-pre-wrap break-words leading-relaxed",
                                children: b,
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => {
                                  (C(!0),
                                    s((J) => ({ ...J, apiError: null })),
                                    m && a(m));
                                },
                                className:
                                  "mt-3 w-full py-2.5 rounded-xl bg-red-900 text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-red-950 transition-colors",
                                children: "重试",
                              }),
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "flex justify-start animate-fade-in-up",
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
                              e.jsx("p", {
                                className:
                                  "mt-4 text-center text-[0.6875rem] text-[#1a1a1a]/42 font-sans tracking-wide",
                                children: "正在连接…",
                              }),
                            ],
                          }),
                    }),
                  f === "connected" &&
                    e.jsxs("div", {
                      ref: xe,
                      className:
                        "flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-2 pb-6 space-y-4 overscroll-contain call-chat-scroll",
                      style: {
                        touchAction: "pan-y",
                        WebkitOverflowScrolling: "touch",
                      },
                      children: [
                        v === "inbound_blocked_invite" &&
                          e.jsx("div", {
                            className: "flex justify-center px-1 pb-3 pt-0",
                            children: e.jsx("p", {
                              className:
                                "max-w-[min(100%,20rem)] text-center rounded-2xl bg-amber-500/[0.12] border border-amber-600/25 text-[#5c4a2a] px-3.5 py-2 text-[0.625rem] leading-relaxed font-sans tracking-wide shadow-sm",
                              role: "status",
                              children:
                                "聊天中你已拉黑对方 · 通话内角色知悉该处境 · 回复会结合聊天【记忆】与上下文",
                            }),
                          }),
                        b
                          ? e.jsxs("div", {
                              className:
                                "rounded-2xl border border-red-200/80 bg-red-50 px-4 py-3 text-left shadow-sm",
                              role: "alert",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[0.6875rem] font-sans font-medium text-red-900/90 uppercase tracking-widest mb-2",
                                  children: "模型请求失败",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-red-950/90 font-sans whitespace-pre-wrap break-words leading-relaxed",
                                  children: b,
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => {