    if (t.isMinimized)
      return e.jsxs("div", {
        className:
          "absolute z-[200] w-24 h-32 bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 touch-none",
        style: { right: 20, top: 100 },
        onClick: u,
        children: [
          W
            ? e.jsx("div", {
                className:
                  "w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 bg-gray-900",
                children: ge
                  .slice(0, 4)
                  .map((Ue, me) =>
                    e.jsx(
                      "div",
                      {
                        className: "w-full h-full bg-gray-800 overflow-hidden",
                        children:
                          (Ue == null ? void 0 : Ue.avatar) &&
                          e.jsx("img", {
                            src: Ue.avatar,
                            className: "w-full h-full object-cover",
                            alt: "",
                            loading: "lazy",
                          }),
                      },
                      me,
                    ),
                  ),
              })
            : e.jsx("img", {
                src: re == null ? void 0 : re.avatar,
                className: "w-full h-full object-cover",
                alt: "",
                loading: "lazy",
              }),
          e.jsxs("div", {
            className:
              "absolute inset-0 bg-black/30 flex flex-col items-center justify-center",
            children: [
              e.jsx("span", {
                className: "text-white text-xs font-mono",
                children: Xe(I),
              }),
              W &&
                e.jsx("span", {
                  className: "text-white/80 text-[9px] mt-0.5",
                  children: "群聊",
                }),
            ],
          }),
        ],
      });
    if (t.status === "connected" && W) {
      const Ue =
        ((Ze = t.acceptedMembers) == null ? void 0 : Ze.length) > 0
          ? t.acceptedMembers
              .map((me) => s.find((jt) => jt.id === me))
              .filter(Boolean)
          : ge.slice(0, 6);
      return e.jsxs("div", {
        className:
          "absolute inset-0 z-[9999] bg-[#EAEBEF] flex flex-col overflow-hidden animate-in fade-in duration-300 selection:bg-[#1A1A1A] selection:text-white",
        onClick: () => S(!1),
        children: [
          e.jsx("style", {
            dangerouslySetInnerHTML: {
              __html: `
          @keyframes auroraLight { 0%{transform:translate(0,0) scale(1) rotate(0deg)} 50%{transform:translate(30px,-30px) scale(1.1) rotate(5deg)} 100%{transform:translate(0,0) scale(1) rotate(0deg)} }
          .grp-orb-1 { background: radial-gradient(circle, rgba(226,232,240,0.8) 0%, transparent 70%); animation: auroraLight 12s ease-in-out infinite alternate; }
          .grp-orb-2 { background: radial-gradient(circle, rgba(241,245,249,0.9) 0%, transparent 70%); animation: auroraLight 15s ease-in-out infinite alternate-reverse; }
          @keyframes floatFocus { 0%,100%{transform:translateY(0);box-shadow:0 20px 40px -10px rgba(0,0,0,0.05)} 50%{transform:translateY(-4px);box-shadow:0 30px 50px -10px rgba(0,0,0,0.08)} }
          .focus-card-anim { animation: floatFocus 6s ease-in-out infinite; }
          @keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }
          .ai-cursor { display:inline-block;width:2px;height:1em;background:#1A1A1A;margin-left:4px;vertical-align:middle;animation:cursorBlink 1s infinite; }
          @keyframes toastDrop { 0%{transform:translateY(-20px);opacity:0} 100%{transform:translateY(0);opacity:1} }
          .toast-anim { animation: toastDrop 0.4s cubic-bezier(0.2,0.8,0.2,1) forwards; }
          .glass-dock { background:rgba(255,255,255,0.94);border-top:1px solid rgba(255,255,255,0.8); }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `,
            },
          }),
          e.jsxs("div", {
            className:
              "absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-0 left-[-20%] w-[120%] h-[60%] grp-orb-1 blur-[60px]",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-[-10%] right-[-20%] w-[120%] h-[60%] grp-orb-2 blur-[70px]",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-no-repeat bg-cover",
            style: {
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            },
          }),
          O &&
            e.jsx("div", {
              className:
                "absolute top-16 left-0 w-full flex justify-center z-40 pointer-events-none toast-anim",
              children: e.jsxs("div", {
                className:
                  "bg-white/90 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-2",
                children: [
                  e.jsx(H1, { className: "w-3.5 h-3.5 text-gray-500" }),
                  e.jsx("span", {
                    className:
                      "text-[11px] font-medium text-gray-800 tracking-wide",
                    children: O,
                  }),
                ],
              }),
            }),
          e.jsxs("header", {
            className:
              "absolute top-10 pt-1 w-full px-6 flex justify-between items-center z-20",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(yp, { className: "w-3 h-3 text-gray-400" }),
                  e.jsx("span", {
                    className:
                      "text-[10px] tracking-[0.2em] font-medium text-gray-500 uppercase truncate max-w-[180px]",
                    children: Fe,
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-1.5 px-2.5 py-1 bg-white/60 backdrop-blur-md rounded-full border border-gray-100 shadow-sm",
                children: [
                  e.jsx("div", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-[#1A1A1A] animate-pulse",
                  }),
                  e.jsx("span", {
                    className: "text-[9px] font-mono font-medium text-gray-800",
                    children: "通话中",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("main", {
            className:
              "w-full h-full flex flex-col pt-24 relative z-10 overflow-hidden pb-36",
            children: [
              e.jsx("div", {
                className: "px-5 mt-2 shrink-0 h-[220px]",
                children:
                  ue != null && ue.isTyping && !K
                    ? e.jsxs("div", {
                        className:
                          "relative w-full h-full bg-white/80 backdrop-blur-2xl rounded-[2.5rem] border border-gray-200 border-dashed flex flex-col items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            "aria-label": "缩小通话界面",
                            title: "缩小通话界面",
                            onClick: (me) => {
                              (me.stopPropagation(), u());
                            },
                            className:
                              "absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100",
                            children: e.jsx(Kf, { className: "w-3.5 h-3.5" }),
                          }),
                          e.jsxs("div", {
                            className: "flex gap-1 mb-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce",
                                style: { animationDelay: "0s" },
                              }),
                              e.jsx("div", {
                                className:
                                  "w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce",
                                style: { animationDelay: "0.1s" },
                              }),
                              e.jsx("div", {
                                className:
                                  "w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce",
                                style: { animationDelay: "0.2s" },
                              }),
                            ],
                          }),
                          e.jsx("span", {
                            className:
                              "text-[10px] font-mono uppercase tracking-widest text-gray-500",
                            children: "AI 正在生成回复",
                          }),
                        ],
                      })
                    : K || V
                      ? (() => {
                          const me = K || V,
                            jt = !K && V;
                          return e.jsxs("div", {
                            className:
                              "relative w-full h-full bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-6 focus-card-anim border border-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-5",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsxs("div", {
                                        className: "relative",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-12 h-12 rounded-full overflow-hidden bg-gray-100 p-0.5 border-2 border-[#1A1A1A]",
                                            children: e.jsx("img", {
                                              src: me.avatar,
                                              alt: me.user,
                                              className:
                                                "w-full h-full rounded-full object-cover grayscale",
                                            }),
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center",
                                            children: e.jsx("div", {
                                              className:
                                                "w-2 h-2 bg-[#1A1A1A] rounded-full animate-pulse",
                                            }),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("h2", {
                                            className:
                                              "text-sm font-semibold text-gray-900 leading-none mb-1",
                                            children: me.user,
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "text-[9px] font-mono uppercase tracking-widest text-gray-400 flex items-center gap-1",
                                            children: [
                                              e.jsx(Wr, {
                                                className:
                                                  "w-3 h-3 text-[#1A1A1A]",
                                              }),
                                              me.type === "speech"
                                                ? K
                                                  ? "正在说"
                                                  : "说过"
                                                : "动作",
                                              jt &&
                                                e.jsx("span", {
                                                  className: "ml-1 normal-case",
                                                  children: "· 最后一句",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: u,
                                    className:
                                      "w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100",
                                    children: e.jsx(Kf, {
                                      className: "w-3.5 h-3.5",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "relative mt-2 max-h-[min(360px,42vh)] overflow-y-auto hide-scrollbar",
                                children: (() => {
                                  const Gt = me.parsed,
                                    Pt = {
                                      id: String(me.id),
                                      videoCallSegments:
                                        (Gt == null
                                          ? void 0
                                          : Gt.videoCallSegments) || [],
                                      dialogueTranslation:
                                        (Gt == null
                                          ? void 0
                                          : Gt.dialogueTranslation) || "",
                                    };
                                  if (bb(Pt))
                                    return e.jsxs("div", {
                                      className:
                                        "relative z-10 max-w-full min-w-0 text-[1.02rem] leading-relaxed text-justify",
                                      children: [
                                        e.jsx(yb, {
                                          msg: Pt,
                                          dialogueViewByMsgId: X,
                                          toggleMsgDialogueView: ke,
                                        }),
                                        K &&
                                          K.isGenerating &&
                                          e.jsx("span", {
                                            className: "ai-cursor",
                                          }),
                                      ],
                                    });
                                  const Wt =
                                      Gt && String(Gt.narrator || "").trim(),
                                    ct = Gt && String(Gt.dialogue || "").trim();
                                  return Gt && (Wt || ct)
                                    ? e.jsxs("div", {
                                        className: "relative z-10 space-y-2",
                                        children: [
                                          Wt
                                            ? e.jsx("p", {
                                                className:
                                                  "text-base font-sans font-light text-gray-600 leading-relaxed text-justify",
                                                children: Wt,
                                              })
                                            : null,
                                          ct
                                            ? e.jsx("p", {
                                                className:
                                                  "text-[1.15rem] font-serif font-medium text-[#1A1A1A] leading-relaxed text-justify",
                                                children: Gt.dialogueTranslation
                                                  ? e.jsx("button", {
                                                      type: "button",
                                                      title:
                                                        "点击在台词原文与译文间切换（旁白不切换）",
                                                      onClick: () =>
                                                        ye((Kt) =>
                                                          Kt === "native"
                                                            ? "zh"
                                                            : "native",
                                                        ),
                                                      className:
                                                        "w-full text-left bg-transparent border-0 p-0 cursor-pointer active:opacity-85 text-[1.15rem] font-serif font-medium text-[#1A1A1A]",
                                                      children:
                                                        xe === "zh"
                                                          ? `"${Gt.dialogueTranslation}"`
                                                          : `"${Gt.dialogue}"`,
                                                    })
                                                  : `"${Gt.dialogue}"`,
                                              })
                                            : null,
                                          K &&
                                            K.isGenerating &&
                                            e.jsx("span", {
                                              className: "ai-cursor",
                                            }),
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          me.type === "speech" &&
                                            e.jsx("span", {
                                              className:
                                                "absolute -top-4 -left-2 text-5xl font-serif text-gray-200 select-none pointer-events-none",
                                              children: '"',
                                            }),
                                          e.jsxs("p", {
                                            className: `relative z-10 ${me.type === "speech" ? "text-[1.15rem] font-serif font-medium text-[#1A1A1A]" : "text-base font-sans font-light text-gray-700"} leading-relaxed text-justify`,
                                            children: [
                                              me.dialogueTranslation
                                                ? e.jsx("button", {
                                                    type: "button",
                                                    title:
                                                      "点击在原文与译文间切换",
                                                    onClick: () =>
                                                      ye((Kt) =>
                                                        Kt === "native"
                                                          ? "zh"
                                                          : "native",
                                                      ),
                                                    className: `relative z-10 w-full text-left bg-transparent border-0 p-0 cursor-pointer active:opacity-85 ${me.type === "speech" ? "text-[1.15rem] font-serif font-medium text-[#1A1A1A]" : "text-base font-sans font-light text-gray-700"} leading-relaxed`,
                                                    children:
                                                      xe === "zh"
                                                        ? me.dialogueTranslation
                                                        : me.text,
                                                  })
                                                : me.text,
                                              K &&
                                                K.isGenerating &&
                                                e.jsx("span", {
                                                  className: "ai-cursor",
                                                }),
                                            ],
                                          }),
                                        ],
                                      });
                                })(),
                              }),
                            ],
                          });
                        })()
                      : e.jsxs("div", {
                          className:
                            "relative w-full h-full bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-6 focus-card-anim border border-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center",
                          children: [
                            e.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "等待发言…",
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: u,
                              className:
                                "absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100",
                              children: e.jsx(Kf, { className: "w-3.5 h-3.5" }),
                            }),
                          ],
                        }),
              }),
              e.jsxs("div", {
                className: "flex justify-center gap-2 mt-4 shrink-0 z-20",
                children: [
                  (Ue || [])
                    .slice(0, 5)
                    .map((me, jt) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "w-8 h-8 rounded-full bg-white/50 backdrop-blur-md border border-white p-0.5 shadow-sm opacity-60 hover:opacity-100 transition-opacity",
                          children: e.jsx("img", {
                            src:
                              (me == null ? void 0 : me.avatar) ||
                              `https://api.dicebear.com/7.x/notionists/svg?seed=${jt}`,
                            alt: "",
                            className:
                              "w-full h-full rounded-full object-cover grayscale",
                          }),
                        },
                        (me == null ? void 0 : me.id) || jt,
                      ),
                    ),
                  e.jsx("button", {
                    type: "button",
                    title:
                      "重试本轮：删掉本轮 AI 通话记录并重新请求（若上一轮无内容则仅重试）",
                    disabled: !Pe,
                    onClick: (me) => {
                      if ((me.stopPropagation(), se.current)) {
                        try {
                          se.current();
                        } catch {}
                        se.current = null;
                      }
                      (q(null),
                        ne(null),
                        w == null || w(ue.id, { allowPendingFocus: !!K }));
                    },
                    className:
                      "w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white border-dashed flex items-center justify-center shadow-sm opacity-60 hover:opacity-100 disabled:opacity-35 disabled:cursor-not-allowed transition-opacity",
                    children: e.jsx(Pr, {
                      className: "w-3.5 h-3.5 text-gray-500",
                      "aria-hidden": !0,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex-1 mt-6 px-6 overflow-y-auto hide-scrollbar relative min-h-0",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gray-200 to-transparent",
                  }),
                  e.jsxs("div", {
                    className: "space-y-6 flex flex-col pb-4",
                    children: [
                      J.map((me) => {
                        const jt =
                            me.type === "system" ||
                            (me.text && String(me.text).startsWith("[系统")),
                          Gt = me.sender === "me",
                          Pt = gc(
                            (me.narrator && me.dialogue
                              ? `${me.narrator} ${me.dialogue}`
                              : me.dialogue && !me.narrator
                                ? me.dialogue
                                : me.narrator && !me.dialogue
                                  ? me.narrator
                                  : me.text) || "",
                          ),
                          Wt = me.timestamp
                            ? new Date(me.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "",
                          ct = !Gt && !!(me.text || me.dialogue),
                          Kt = !Gt && me.narrator && !me.dialogue,
                          fs = !Gt && me.dialogueTranslation,
                          gt = !Gt && bb(me),
                          ae = !Gt && !gt && !!(me.narrator || me.dialogue);
                        if (jt)
                          return e.jsxs(
                            "div",
                            {
                              className: "relative py-2 flex items-center",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute left-[7px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-300 ring-4 ring-[#F8F9FA]",
                                }),
                                e.jsx("div", {
                                  className:
                                    "ml-1 px-3 py-1 bg-white/60 border border-gray-100 rounded-lg text-[10px] font-mono text-gray-400 shadow-sm",
                                  children: (me.text || "").replace(
                                    /\[系统[：:]\s*|\]/g,
                                    "",
                                  ),
                                }),
                              ],
                            },
                            me.id,
                          );
                        const nt = Gt
                            ? "我"
                            : me.contactId
                              ? tt(s.find((Xt) => Xt.id === me.contactId) || {})
                              : "成员",
                          It =
                            Gt && Ve && (Q == null ? void 0 : Q.id) === me.id;
                        return e.jsxs(
                          "div",
                          {
                            className: "relative pl-6",
                            children: [
                              It
                                ? e.jsx("button", {
                                    type: "button",
                                    title: "重新编辑",
                                    "aria-label": "重新编辑上一条已发送消息",
                                    className:
                                      "absolute left-[10px] top-[9px] z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-transparent p-0 text-left hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/25",
                                    onClick: (Xt) => {
                                      if ((Xt.stopPropagation(), se.current)) {
                                        try {
                                          se.current();
                                        } catch {}
                                        se.current = null;
                                      }
                                      (q(null), ne(null));
                                      const bs = N == null ? void 0 : N(ue.id);
                                      bs != null &&
                                        (T(bs),
                                        requestAnimationFrame(() => {
                                          var ss;
                                          return (ss = Y.current) == null
                                            ? void 0
                                            : ss.focus();
                                        }));
                                    },
                                    children: e.jsx("span", {
                                      className:
                                        "pointer-events-none block h-1.5 w-1.5 rounded-full ring-4 ring-[#F8F9FA] bg-[#1A1A1A]",
                                      "aria-hidden": !0,
                                    }),
                                  })
                                : e.jsx("div", {
                                    className: `absolute left-[7px] top-1.5 h-1.5 w-1.5 rounded-full ring-4 ring-[#F8F9FA] ${Gt ? "bg-[#1A1A1A]" : "bg-gray-300"}`,
                                  }),
                              e.jsxs("div", {
                                className: "flex flex-col",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                      e.jsxs("span", {
                                        className: `text-[10px] font-semibold ${Gt ? "text-[#1A1A1A]" : "text-gray-500"}`,
                                        children: [
                                          nt,
                                          " ",
                                          Gt &&
                                            e.jsx("span", {
                                              className:
                                                "ml-1 font-normal bg-gray-100 px-1 rounded text-gray-500",
                                              children: "(我)",
                                            }),
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[8px] font-mono text-gray-400",
                                        children: Wt,
                                      }),
                                    ],
                                  }),
                                  Gt
                                    ? e.jsx("p", {
                                        className: `
                        text-[13px] leading-relaxed tracking-wide text-justify
                        font-sans font-medium text-gray-800 bg-white/80 px-3 py-2 rounded-xl border border-gray-100 shadow-[0_4px_10px_rgba(0,0,0,0.02)] inline-block w-fit
                      `,
                                        children: Pt,
                                      })
                                    : gt
                                      ? e.jsx("div", {
                                          className:
                                            "text-[13px] leading-relaxed tracking-wide text-justify max-w-full min-w-0",
                                          children: e.jsx(yb, {
                                            msg: me,
                                            dialogueViewByMsgId: X,
                                            toggleMsgDialogueView: ke,
                                          }),
                                        })
                                      : ae
                                        ? e.jsxs("div", {
                                            className:
                                              "flex flex-col gap-1.5 text-[13px] leading-relaxed tracking-wide text-justify",
                                            children: [
                                              me.narrator
                                                ? e.jsx("p", {
                                                    className:
                                                      "font-sans font-light text-gray-500 m-0",
                                                    children: me.narrator,
                                                  })
                                                : null,
                                              me.dialogue
                                                ? e.jsxs("p", {
                                                    className:
                                                      "font-serif font-medium text-gray-800 m-0",
                                                    children: [
                                                      e.jsx(vu, {
                                                        className:
                                                          "inline w-3 h-3 mr-1 text-gray-300 relative -top-0.5",
                                                      }),
                                                      me.dialogueTranslation
                                                        ? e.jsx("button", {
                                                            type: "button",
                                                            title:
                                                              "点击在台词原文与译文间切换（旁白不切换）",
                                                            onClick: () =>
                                                              ke(me.id),
                                                            className:
                                                              "inline bg-transparent border-0 p-0 text-left font-serif font-medium text-gray-800 active:opacity-85",
                                                            children:
                                                              X[me.id] === "zh"
                                                                ? me.dialogueTranslation
                                                                : `"${me.dialogue}"`,
                                                          })
                                                        : `"${me.dialogue}"`,
                                                    ],
                                                  })
                                                : null,
                                            ],
                                          })
                                        : e.jsxs("p", {
                                            className: `
                        text-[13px] leading-relaxed tracking-wide text-justify
                        ${Kt ? "font-sans font-light text-gray-500" : ""}
                        ${ct && !Kt ? "font-serif font-medium text-gray-800" : ""}
                      `,
                                            children: [
                                              ct &&
                                                !Kt &&
                                                e.jsx(vu, {
                                                  className:
                                                    "inline w-3 h-3 mr-1 text-gray-300 relative -top-0.5",
                                                }),
                                              fs
                                                ? e.jsx("button", {
                                                    type: "button",
                                                    title:
                                                      "点击在原文与译文间切换",
                                                    onClick: () => ke(me.id),
                                                    className:
                                                      "inline bg-transparent border-0 p-0 w-full text-left font-serif font-medium text-gray-800 active:opacity-85",
                                                    children:
                                                      X[me.id] === "zh"
                                                        ? me.dialogueTranslation
                                                        : Pt,
                                                  })
                                                : Pt,
                                            ],
                                          }),
                                ],
                              }),
                            ],
                          },
                          me.id,
                        );
                      }),
                      e.jsx("div", { ref: H }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "absolute bottom-0 left-0 w-full z-50",
            children: e.jsxs("div", {
              className:
                "glass-dock px-4 pb-6 pt-4 rounded-t-[2.5rem] w-full relative flex flex-col gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]",
              children: [
                e.jsxs("div", {
                  className: "flex items-end gap-3",
                  children: [
                    e.jsx("div", {
                      className: "relative shrink-0 mb-1",
                      children: e.jsx("div", {
                        className:
                          "w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm p-0.5",
                        children: e.jsx("img", {
                          src:
                            (f == null ? void 0 : f.avatar) ||
                            "https://api.dicebear.com/7.x/notionists/svg?seed=Felix",
                          alt: "我",
                          className: "w-full h-full rounded-full object-cover",
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex-1 bg-white/80 rounded-[1.5rem] border border-white shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex items-center px-3 py-2.5",
                      children: [
                        e.jsx(Xn, {
                          className: "w-4 h-4 text-gray-300 mr-2 shrink-0",
                        }),
                        e.jsx("input", {
                          ref: Y,
                          type: "text",
                          value: j,
                          onChange: (me) => T(me.target.value),
                          onKeyDown: (me) => me.key === "Enter" && Ee(),
                          disabled: ue == null ? void 0 : ue.isTyping,
                          placeholder:
                            ue != null && ue.isTyping
                              ? "AI 正在回复…"
                              : "输入要说的话…",
                          className:
                            "w-full bg-transparent border-none outline-none text-sm font-medium text-gray-800 placeholder-gray-400",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: Ee,
                          disabled:
                            (ue == null ? void 0 : ue.isTyping) || !j.trim(),
                          className:
                            "w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-black transition-colors shrink-0 shadow-md ml-2 disabled:opacity-30",
                          children: e.jsx(Wr, {
                            className: "w-4 h-4 stroke-[2]",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex justify-between items-center w-full px-2",
                  children: [
                    e.jsxs("div", {
                      className:
                        "text-[9px] font-mono text-gray-400 bg-gray-100/50 px-3 py-1.5 rounded-full border border-gray-200/50",
                      children: ["通话时长 ", Xe(I)],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-1 justify-evenly items-center ml-4",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (k(!A), ut(A ? `${_t}已取消静音` : `${_t}已静音`));
                          },
                          className: `w-12 h-12 rounded-full flex items-center justify-center transition-all shrink-0 ${A ? "bg-red-50 text-red-500 border border-red-100" : "bg-white text-gray-800 shadow-sm border border-gray-100"}`,
                          children: A
                            ? e.jsx(_g, { className: "w-5 h-5 stroke-[1.5]" })
                            : e.jsx(hl, { className: "w-5 h-5 stroke-[1.5]" }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (M(!C),
                              ut(
                                C ? `${_t}已打开摄像头` : `${_t}已关闭摄像头`,
                              ));
                          },
                          className: `w-12 h-12 rounded-full flex items-center justify-center transition-all shrink-0 ${C ? "bg-gray-100/50 text-gray-400 border border-gray-200/50" : "bg-white text-gray-800 shadow-sm border border-gray-100"}`,
                          children: C
                            ? e.jsx(Ag, { className: "w-5 h-5 stroke-[1.5]" })
                            : e.jsx(Vl, { className: "w-5 h-5 stroke-[1.5]" }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: i,
                          className:
                            "w-12 h-12 rounded-full flex items-center justify-center bg-red-500 text-white shadow-[0_4px_15px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-all shrink-0",
                          children: e.jsx(Zr, {
                            className: "w-5 h-5 fill-current stroke-none",
                            style: { transform: "rotate(135deg)" },
                          }),
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
    }
    if (W && t.status === "outgoing") {
      const Ue = (Gt) => {
          const Pt = Math.floor(Gt / 60)
              .toString()
              .padStart(2, "0"),
            Wt = (Gt % 60).toString().padStart(2, "0");
          return `${Pt}:${Wt}`;
        },
        me = [
          {
            top: "15%",
            left: "15%",
            className: "orbit-anim-1",
            size: "w-12 h-12",
          },
          {
            top: "20%",
            right: "10%",
            left: void 0,
            bottom: void 0,
            className: "orbit-anim-2",
            size: "w-10 h-10",
          },
          {
            bottom: "20%",
            right: "20%",
            top: void 0,
            left: void 0,
            className: "orbit-anim-3",
            size: "w-14 h-14",
          },
          {
            bottom: "25%",
            left: "10%",
            right: void 0,
            top: void 0,
            className: "orbit-anim-1",
            size: "w-11 h-11",
          },
          {
            top: "35%",
            left: "5%",
            right: void 0,
            bottom: void 0,
            className: "orbit-anim-2",
            size: "w-9 h-9",
          },
        ],
        jt = ge.slice(0, me.length);
      return e.jsxs("div", {
        className:
          "absolute inset-0 z-[9999] bg-[#EAEBEF] flex flex-col overflow-hidden animate-in fade-in duration-300",
        children: [
          e.jsx("style", {
            dangerouslySetInnerHTML: {
              __html: `
          @keyframes auroraLight {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            50% { transform: translate(20px, -30px) scale(1.05) rotate(2deg); }
            100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          }
          .ambient-orb-1 { background: radial-gradient(circle, rgba(226,232,240,0.8) 0%, transparent 70%); animation: auroraLight 15s ease-in-out infinite alternate; }
          .ambient-orb-2 { background: radial-gradient(circle, rgba(241,245,249,0.9) 0%, transparent 70%); animation: auroraLight 20s ease-in-out infinite alternate-reverse; }
          @keyframes sonarRipple {
            0% { transform: scale(0.8); opacity: 1; border-width: 2px; }
            100% { transform: scale(2.5); opacity: 0; border-width: 0.5px; }
          }
          .ripple-1 { animation: sonarRipple 4s cubic-bezier(0.1, 0.5, 0.5, 1) infinite; }
          .ripple-2 { animation: sonarRipple 4s cubic-bezier(0.1, 0.5, 0.5, 1) 1.3s infinite; }
          .ripple-3 { animation: sonarRipple 4s cubic-bezier(0.1, 0.5, 0.5, 1) 2.6s infinite; }
          @keyframes orbitFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(2deg); }
          }
          .orbit-anim-1 { animation: orbitFloat 5s ease-in-out infinite; }
          .orbit-anim-2 { animation: orbitFloat 6s ease-in-out infinite 1s; }
          .orbit-anim-3 { animation: orbitFloat 7s ease-in-out infinite 2s; }
          @keyframes corePulse {
            0%, 100% { box-shadow: 0 0 20px rgba(26, 26, 26, 0.05), inset 0 0 0 rgba(26, 26, 26, 0); }
            50% { box-shadow: 0 0 40px rgba(26, 26, 26, 0.1), inset 0 0 10px rgba(26, 26, 26, 0.05); }
          }
          .core-pulse { animation: corePulse 3s infinite; }
        `,
            },
          }),
          e.jsxs("div", {
            className:
              "absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-[-10%] left-[-20%] w-[120%] h-[70%] ambient-orb-1 blur-[70px]",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-[-10%] right-[-20%] w-[120%] h-[70%] ambient-orb-2 blur-[80px]",
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-no-repeat bg-cover",
            style: {
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            },
          }),
          e.jsxs("header", {
            className:
              "absolute top-14 w-full px-6 flex justify-between items-center z-20",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-100 shadow-sm",
                children: [
                  e.jsx(Gm, { className: "w-3.5 h-3.5 text-gray-500" }),
                  e.jsx("span", {
                    className:
                      "text-[9px] tracking-widest font-mono text-gray-600 uppercase",
                    children: "端到端加密",
                  }),
                ],
              }),
              e.jsx(tv, { className: "w-4 h-4 text-gray-400" }),
            ],
          }),
          e.jsxs("main", {
            className:
              "w-full flex-1 flex flex-col items-center pt-32 relative z-10 overflow-hidden px-6",
            children: [
              e.jsxs("div", {
                className:
                  "relative w-full aspect-square flex items-center justify-center mt-6 max-w-[320px]",
                children: [
                  e.jsxs("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute w-[120px] h-[120px] rounded-full border border-gray-400 ripple-1",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute w-[120px] h-[120px] rounded-full border border-gray-300 ripple-2",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute w-[120px] h-[120px] rounded-full border border-gray-200 ripple-3",
                      }),
                    ],
                  }),
                  jt.map((Gt, Pt) => {
                    const Wt = me[Pt] || me[0],
                      ct = {};
                    return (
                      Wt.top != null && (ct.top = Wt.top),
                      Wt.left != null && (ct.left = Wt.left),
                      Wt.right != null && (ct.right = Wt.right),
                      Wt.bottom != null && (ct.bottom = Wt.bottom),
                      e.jsx(
                        "div",
                        {
                          className: `absolute ${Wt.className}`,
                          style: ct,
                          children: e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx("div", {
                                className: `${Wt.size} rounded-full border-[3px] border-white shadow-lg overflow-hidden bg-gray-50`,
                                children: e.jsx("img", {
                                  src:
                                    (Gt == null ? void 0 : Gt.avatar) ||
                                    `https://api.dicebear.com/7.x/notionists/svg?seed=${Pt}`,
                                  alt: "",
                                  className:
                                    "w-full h-full object-cover grayscale opacity-70",
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute -bottom-1 -right-1 w-4 h-4 bg-gray-100 rounded-full border border-gray-200 flex items-center justify-center animate-pulse",
                                children: e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-gray-400 rounded-full",
                                }),
                              }),
                            ],
                          }),
                        },
                        (Gt == null ? void 0 : Gt.id) || Pt,
                      )
                    );
                  }),
                  e.jsxs("div", {
                    className:
                      "relative z-10 w-24 h-24 rounded-full bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center core-pulse",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-2 border border-dashed border-gray-200 rounded-full animate-spin",
                        style: { animationDuration: "10s" },
                      }),
                      e.jsx(Xn, { className: "w-8 h-8 text-gray-800" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-12 flex flex-col items-center",
                children: [
                  e.jsx("h1", {
                    className:
                      "text-[22px] font-medium text-gray-900 tracking-[0.15em] mb-4",
                    children: "呼叫中",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx(Wr, {
                        className: "w-4 h-4 text-gray-400 animate-pulse",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[11px] font-mono text-gray-500 uppercase tracking-[0.2em]",
                        children: "Establishing Visual Sync...",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "mt-6 text-sm font-mono text-gray-400 bg-white/60 px-4 py-1.5 rounded-full border border-gray-100",
                    children: Ue(R),
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "absolute bottom-0 left-0 w-full z-30 bg-white/70 backdrop-blur-2xl border-t border-gray-100 px-6 pb-10 pt-6 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)]",
            children: e.jsxs("div", {
              className: "flex flex-col items-center gap-6",
              children: [
                e.jsxs("div", {
                  className: "w-full flex justify-between items-center px-4",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-[10px] font-mono tracking-widest text-gray-400 uppercase",
                      children: "本端自检",
                    }),
                    e.jsx("span", {
                      className:
                        "text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md",
                      children: "就绪",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex justify-center items-center gap-6 w-full",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-14 h-14 rounded-full flex items-center justify-center bg-white border border-gray-100 shadow-sm text-gray-400 cursor-not-allowed opacity-80",
                      children: e.jsx(_g, {
                        className: "w-6 h-6 stroke-[1.5]",
                      }),
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: i,
                      className:
                        "relative w-20 h-20 rounded-full flex items-center justify-center bg-red-500 text-white shadow-[0_10px_30px_rgba(239,68,68,0.4)] hover:bg-red-600 transition-all hover:scale-95 active:scale-95",
                      children: e.jsx(Zr, {
                        className: "w-8 h-8 fill-current stroke-none",
                        style: { transform: "rotate(135deg)" },
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "w-14 h-14 rounded-full flex items-center justify-center bg-white border border-gray-100 shadow-sm text-gray-400 cursor-not-allowed opacity-80",
                      children: e.jsx(Ag, {
                        className: "w-6 h-6 stroke-[1.5]",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-[9999] bg-black flex flex-col overflow-hidden animate-in fade-in duration-500",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 z-0",
          onClick: () => {
            (S(!1), m == null || m());
          },
          children: [
            W
              ? e.jsxs("div", {
                  className:
                    "w-full h-full grid grid-cols-2 grid-rows-2 gap-1 bg-gray-900 p-1",
                  children: [
                    ge
                      .slice(0, 3)
                      .map((Ue, me) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "relative w-full h-full rounded-lg overflow-hidden",
                            children: [
                              e.jsx("img", {
                                src: Ue.avatar,
                                className: "w-full h-full object-cover",
                                alt: "member",
                                loading: "lazy",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-[10px] text-white",
                                children: tt(Ue),
                              }),
                            ],
                          },
                          me,
                        ),
                      ),
                    e.jsxs("div", {
                      className:
                        "relative w-full h-full rounded-lg overflow-hidden",
                      children: [
                        e.jsx("img", {
                          src:
                            f.avatar ||
                            "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
                          className: "w-full h-full object-cover",
                          alt: "me",
                          loading: "lazy",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-[10px] text-white",
                          children: _t,
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsx("img", {
                  src: (B && f.avatar) || re.avatar,
                  className: "w-full h-full object-cover",
                  alt: "background",
                  loading: "lazy",
                }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none",
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "relative z-20 pt-14 px-6 flex justify-between items-start",
          children: [
            e.jsx("button", {
              onClick: u,
              className:
                "p-3 bg-white/10 backdrop-blur-xl rounded-full text-white hover:bg-white/20 transition-all border border-white/10 active:scale-95 shadow-lg",
              children: e.jsx(Kf, { size: 18, strokeWidth: 2 }),
            }),
            t.status === "connected" &&
              e.jsxs("div", {
                className: "flex flex-col items-center pt-2",
                children: [
                  W &&
                    e.jsx("span", {
                      className:
                        "text-white/70 text-[10px] font-medium tracking-[0.2em] uppercase drop-shadow-md mb-0.5",
                      children: "群聊通话",
                    }),
                  e.jsx("span", {
                    className:
                      "text-white font-medium text-lg tracking-wide drop-shadow-lg",
                    children: W ? Fe : $e,
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 mt-1 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/5 shadow-sm",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse",
                      }),
                      e.jsx("span", {
                        className:
                          "text-white/90 text-[10px] font-mono tracking-widest",
                        children: Xe(I),
                      }),
                    ],
                  }),
                ],
              }),
            e.jsx("div", { className: "w-10" }),
          ],
        }),
        t.status === "connected" &&
          !W &&
          e.jsxs("div", {
            className:
              "absolute z-30 w-28 h-44 bg-black/20 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 touch-none active:scale-95 transition-all backdrop-blur-md",
            style: { left: D.x, top: D.y },
            onTouchStart: fe,
            onTouchMove: He,
            onTouchEnd: Ie,
            onClick: (Ue) => {
              (Ue.stopPropagation(), F(!B));
            },
            children: [
              e.jsx("img", {
                src: B ? re.avatar : f.avatar || re.avatar,
                className: "w-full h-full object-cover opacity-90",
                alt: "me",
                loading: "lazy",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none",
              }),
            ],
          }),
        t.status !== "connected" &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-20 flex flex-col items-center justify-center pb-20 px-6",
            children: W
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("span", {
                      className:
                        "text-white/60 text-[10px] font-medium tracking-[0.25em] uppercase mb-2 drop-shadow-md",
                      children: "群聊通话",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-2xl font-light text-white mb-1 tracking-tight drop-shadow-lg text-center max-w-full truncate",
                      children: Fe,
                    }),
                    e.jsx("p", {
                      className:
                        "text-white/70 text-sm font-medium tracking-[0.2em] uppercase drop-shadow-md mb-6",
                      children: t.status === "incoming" ? "来电" : "正在呼叫…",
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap justify-center gap-3",
                      children: ge
                        .slice(0, 6)
                        .map((Ue, me) =>
                          e.jsxs(
                            "div",
                            {
                              className: "flex flex-col items-center",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden bg-gray-800 shadow-lg",
                                  children: e.jsx("img", {
                                    src: Ue == null ? void 0 : Ue.avatar,
                                    className: "w-full h-full object-cover",
                                    alt: "",
                                    loading: "lazy",
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-white/70 text-[10px] mt-1.5 max-w-[4rem] truncate",
                                  children: tt(Ue),
                                }),
                              ],
                            },
                            me,
                          ),
                        ),
                    }),
                    e.jsx("p", {
                      className:
                        "text-white/50 text-xs mt-4 tracking-widest uppercase",
                      children: "等待接听",
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className:
                        "w-32 h-32 rounded-full border border-white/20 p-1 mb-6 shadow-2xl bg-white/5 backdrop-blur-sm",
                      children: e.jsx("img", {
                        src: re.avatar,
                        className: "w-full h-full rounded-full object-cover",
                        alt: "",
                        loading: "lazy",
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "text-3xl font-light text-white mb-2 tracking-tight drop-shadow-lg",
                      children: $e,
                    }),
                    e.jsx("p", {
                      className:
                        "text-white/70 text-sm font-medium tracking-[0.2em] uppercase drop-shadow-md",
                      children: t.status === "incoming" ? "来电" : "呼叫中...",
                    }),
                  ],
                }),
          }),
        t.status === "connected" &&
          !W &&
          e.jsx("div", {
            className:
              "absolute inset-x-4 bottom-32 top-1/3 z-40 overflow-y-auto no-scrollbar mask-image-gradient-vertical overscroll-contain sm:inset-x-5",
            style: { touchAction: "pan-y", WebkitOverflowScrolling: "touch" },
            onClick: () => S(!1),
            children: e.jsxs("div", {
              className:
                "flex flex-col justify-end min-h-full space-y-4 pb-4 pl-1 pr-2 sm:pl-2 sm:pr-3",
              children: [
                J.map((Ue) => {
                  if (
                    Ue.type === "system" ||
                    (Ue.text && Ue.text.startsWith("[系统"))
                  )
                    return e.jsx(
                      "div",
                      {
                        className:
                          "flex flex-col animate-in slide-in-from-left-4 fade-in duration-500 items-start w-full",
                        children: e.jsx("div", {
                          className:
                            "relative backdrop-blur-md bg-white/5 border border-white/10 px-4 py-2 rounded-lg shadow-sm",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-yellow-400/80 animate-pulse",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-white/80 text-xs font-mono tracking-wide",
                                children: Ue.text.replace(
                                  /\[系统[：:]\s*|\]/g,
                                  "",
                                ),
                              }),
                            ],
                          }),
                        }),
                      },
                      Ue.id,
                    );
                  let jt = "对方";
                  Ue.sender === "me" ? (jt = "我") : re && (jt = $e);
                  const Gt =
                      we &&
                      Ue.sender === "them" &&
                      Ue.id === (G == null ? void 0 : G.id),
                    Pt =
                      ve &&
                      Ue.sender === "me" &&
                      Ue.id === (Q == null ? void 0 : Q.id);
                  return e.jsxs(
                    "div",
                    {
                      className:
                        "group/single-vc-msg flex w-full flex-col items-start animate-in slide-in-from-left-4 fade-in duration-500",
                      onTouchStart: (Wt) => De(Wt, Ue.id),
                      onTouchMove: at,
                      onTouchEnd: ft,
                      onMouseDown: (Wt) => De(Wt, Ue.id),
                      onMouseMove: at,
                      onMouseUp: ft,
                      children: [
                        e.jsx("span", {
                          className:
                            "mb-1 pl-1 text-[10px] font-medium uppercase tracking-widest text-white/60 drop-shadow-md",
                          children: jt,
                        }),
                        Ue.sender === "me"
                          ? e.jsx("div", {
                              className:
                                "flex w-full min-w-0 flex-row items-end justify-start gap-1.5",
                              children: e.jsxs("div", {
                                className:
                                  "flex min-h-0 min-w-0 max-w-full flex-row items-end gap-1.5",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "relative w-fit max-w-full min-w-0 rounded-2xl rounded-bl-sm border border-white/20 bg-white/20 px-5 py-3 shadow-lg backdrop-blur-xl",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-white text-base font-normal leading-relaxed drop-shadow-sm max-w-full break-words",
                                        children: Ue.text,
                                      }),
                                      Ue.translation &&
                                        e.jsx("div", {
                                          className:
                                            "mt-2 border-t border-white/10 pt-2 text-xs font-light text-white/70",
                                          children: Ue.translation,
                                        }),
                                      e.jsx("div", {
                                        className:
                                          "absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-white/30 to-transparent",
                                      }),
                                    ],
                                  }),
                                  Pt &&
                                    e.jsx("button", {
                                      type: "button",
                                      title: "重新编辑",
                                      "aria-label": "重新编辑上一条已发送消息",
                                      className:
                                        "pointer-events-auto shrink-0 self-center rounded-full border border-white/15 bg-black/35 p-2 text-white/70 shadow-md opacity-0 transition-opacity duration-200 hover:bg-black/50 hover:text-white group-hover/single-vc-msg:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                                      onMouseDown: (Wt) => {
                                        (Wt.stopPropagation(),
                                          U.current &&
                                            (clearTimeout(U.current),
                                            (U.current = null)));
                                      },
                                      onTouchStart: (Wt) =>
                                        Wt.stopPropagation(),
                                      onClick: (Wt) => {
                                        Wt.stopPropagation();
                                        const ct =
                                          b == null ? void 0 : b(ue.id);
                                        ct != null && (T(ct), S(!0));
                                      },
                                      children: e.jsx(_l, {
                                        className: "h-4 w-4",
                                        strokeWidth: 2,
                                      }),
                                    }),
                                ],
                              }),
                            })
                          : e.jsx("div", {
                              className:
                                "flex w-full min-w-0 flex-row items-end justify-start gap-1.5",
                              children: e.jsxs("div", {
                                className:
                                  "flex min-h-0 min-w-0 max-w-full flex-row items-end gap-1.5",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "relative w-fit max-w-full min-w-0 backdrop-blur-xl border border-white/10 bg-black/30 px-5 py-3 shadow-lg rounded-2xl rounded-tl-sm",
                                    children: [
                                      Ue.sender === "them" && bb(Ue)
                                        ? e.jsx(yb, {
                                            msg: Ue,
                                            variant: "single",
                                            dialogueViewByMsgId: X,
                                            toggleMsgDialogueView: ke,
                                          })
                                        : Ue.sender === "them" &&
                                            (Ue.narrator || Ue.dialogue)
                                          ? e.jsxs(e.Fragment, {
                                              children: [
                                                Ue.narrator &&
                                                  e.jsx("p", {
                                                    className:
                                                      "text-white/85 text-sm font-normal leading-relaxed drop-shadow-sm mb-2 max-w-full",
                                                    children: Ue.narrator,
                                                  }),
                                                Ue.dialogue &&
                                                  e.jsx("p", {
                                                    className:
                                                      "text-white text-base font-medium leading-relaxed drop-shadow-sm max-w-full",
                                                    children:
                                                      Ue.dialogueTranslation
                                                        ? e.jsx("button", {
                                                            type: "button",
                                                            title:
                                                              "点击在原文与译文间切换",
                                                            onMouseDown: (Wt) =>
                                                              Wt.stopPropagation(),
                                                            onTouchStart: (
                                                              Wt,
                                                            ) =>
                                                              Wt.stopPropagation(),
                                                            onClick: (Wt) => {
                                                              (Wt.stopPropagation(),
                                                                ke(Ue.id));
                                                            },
                                                            className:
                                                              "text-white text-base font-medium leading-relaxed drop-shadow-sm bg-transparent border-0 p-0 text-left cursor-pointer max-w-full active:opacity-85",
                                                            children: `"${X[Ue.id] === "zh" ? Ue.dialogueTranslation : Ue.dialogue}"`,
                                                          })
                                                        : e.jsx("span", {
                                                            children: `"${Ue.dialogue}"`,
                                                          }),
                                                  }),
                                              ],
                                            })
                                          : e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("p", {
                                                  className:
                                                    "text-white text-base font-normal leading-relaxed drop-shadow-sm max-w-full break-words",
                                                  children: Ue.text,
                                                }),
                                                Ue.translation &&
                                                  e.jsx("div", {
                                                    className:
                                                      "mt-2 pt-2 border-t border-white/10 text-white/70 text-xs font-light",
                                                    children: Ue.translation,
                                                  }),
                                              ],
                                            }),
                                      e.jsx("div", {
                                        className:
                                          "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/30 to-transparent",
                                      }),
                                    ],
                                  }),
                                  Gt &&
                                    e.jsx("button", {
                                      type: "button",
                                      title: "重新生成",
                                      "aria-label": "重新生成上一条对方回复",
                                      className:
                                        "pointer-events-auto shrink-0 self-center rounded-full border border-white/15 bg-black/35 p-2 text-white/70 shadow-md opacity-0 transition-opacity duration-200 hover:bg-black/50 hover:text-white group-hover/single-vc-msg:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                                      onMouseDown: (Wt) => {
                                        (Wt.stopPropagation(),
                                          U.current &&
                                            (clearTimeout(U.current),
                                            (U.current = null)));
                                      },
                                      onTouchStart: (Wt) =>
                                        Wt.stopPropagation(),
                                      onClick: (Wt) => {
                                        (Wt.stopPropagation(),
                                          v == null || v(ue.id));
                                      },
                                      children: e.jsx(Pr, {
                                        className: "h-4 w-4",
                                        strokeWidth: 2,
                                      }),
                                    }),
                                ],
                              }),
                            }),
                      ],
                    },
                    Ue.id,
                  );
                }),
                (t == null ? void 0 : t.isTyping) &&
                  e.jsxs("div", {
                    className:
                      "flex flex-col animate-in slide-in-from-left-4 fade-in duration-300 items-start",
                    children: [
                      e.jsxs("span", {
                        className:
                          "text-[10px] tracking-widest mb-1 font-medium text-white/40 pl-1",
                        children: [$e, " 正在输入…"],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative backdrop-blur-xl bg-black/20 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg flex items-center gap-1.5",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce",
                            style: { animationDelay: "0ms" },
                          }),
                          e.jsx("div", {
                            className:
                              "w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce",
                            style: { animationDelay: "150ms" },
                          }),
                          e.jsx("div", {
                            className:
                              "w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce",
                            style: { animationDelay: "300ms" },
                          }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", { ref: H }),
              ],
            }),
          }),
        O &&
          e.jsx("div", {
            className:
              "absolute top-28 left-1/2 -translate-x-1/2 z-40 pointer-events-none",
            children: e.jsxs("div", {
              className:
                "bg-black/60 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 shadow-xl animate-in fade-in slide-in-from-top-4 flex items-center gap-2",
              children: [
                e.jsx("div", { className: "w-1 h-1 rounded-full bg-white/80" }),
                e.jsx("span", {
                  className: "text-white/90 text-xs font-medium tracking-wide",
                  children: O,
                }),
                e.jsx("div", { className: "w-1 h-1 rounded-full bg-white/80" }),
              ],
            }),
          }),
        e.jsx("div", {
          className: "absolute bottom-8 left-0 right-0 z-30 px-6",
          children:
            E && t.status === "connected"
              ? e.jsxs("div", {
                  className:
                    "mx-auto w-full max-w-sm bg-white/10 backdrop-blur-2xl rounded-[2rem] p-2 shadow-2xl border border-white/20 flex gap-2 animate-in slide-in-from-bottom-4 fade-in",
                  children: [
                    e.jsx("input", {
                      value: j,
                      onChange: (Ue) => T(Ue.target.value),
                      onKeyPress: (Ue) => Ue.key === "Enter" && Ee(),
                      placeholder: "输入消息...",
                      autoFocus: !0,
                      className:
                        "flex-1 bg-white/10 rounded-full px-4 py-3 text-white placeholder-white/50 outline-none text-sm border border-white/5",
                    }),
                    e.jsx("button", {
                      onClick: Ee,
                      disabled: !j.trim(),
                      className:
                        "w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors",
                      children: e.jsx(ri, { size: 16 }),
                    }),
                  ],
                })
              : e.jsx("div", {
                  className:
                    "mx-auto w-full max-w-sm bg-white/10 backdrop-blur-2xl rounded-[2.5rem] px-6 py-4 shadow-2xl border border-white/20 flex justify-between items-center",
                  children:
                    t.status === "incoming"
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("button", {
                              onClick: c,
                              className:
                                "flex-1 flex flex-col items-center gap-1 group",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center group-active:scale-95 transition-all",
                                  children: e.jsx(sw, {
                                    size: 20,
                                    className: "text-red-400",
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] text-white/60 font-medium",
                                  children: "拒绝",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "w-px h-8 bg-white/10 mx-2",
                            }),
                            e.jsxs("button", {
                              onClick: d,
                              className:
                                "flex-1 flex flex-col items-center gap-1 group",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center group-active:scale-95 transition-all animate-pulse",
                                  children: e.jsx(Zr, {
                                    size: 20,
                                    className: "text-green-400",
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] text-white/60 font-medium",
                                  children: "接听",
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("button", {
                              onClick: () => {
                                const Ue = !A;
                                (k(Ue),
                                  ut(
                                    Ue
                                      ? `[系统提示：${_t}已静音]`
                                      : `[系统提示：${_t}取消静音]`,
                                  ));
                              },
                              className: `p-3 rounded-full transition-all active:scale-95 border ${A ? "bg-white text-black border-white" : "text-white hover:bg-white/10 border-transparent"}`,
                              children: A
                                ? e.jsx(_g, { size: 22 })
                                : e.jsx(hl, { size: 22 }),
                            }),
                            e.jsx("button", {
                              onClick: () => {
                                const Ue = !C;
                                (M(Ue),
                                  ut(
                                    Ue
                                      ? `${_t}已关闭摄像头`
                                      : `${_t}已打开摄像头`,
                                  ));
                              },
                              className: `p-3 rounded-full transition-all active:scale-95 border ${C ? "bg-white text-black border-white" : "text-white hover:bg-white/10 border-transparent"}`,
                              children: C
                                ? e.jsx(Ag, { size: 22 })
                                : e.jsx(Vl, { size: 22 }),
                            }),
                            e.jsx("button", {
                              onClick: () => S(!0),
                              className:
                                "p-3 rounded-full text-white hover:bg-white/10 transition-all active:scale-95 border border-transparent",
                              children: e.jsx(Ar, { size: 22 }),
                            }),
                            e.jsx("div", {
                              className: "w-px h-8 bg-white/10 mx-2",
                            }),
                            e.jsx("button", {
                              onClick: i,
                              className:
                                "p-3 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-all active:scale-95 border border-red-400/30 shadow-lg shadow-red-500/20",
                              children: e.jsx(sw, { size: 22 }),
                            }),
                          ],
                        }),
                }),
        }),
      ],
    });
  },
  LA = "chat_css_presets_session_v1";
function kH(t) {
  const s = String(t || "").trim();
  if (!s) return null;
  const n = s
      .replace(/\u3000/g, " ")
      .replace(/￥/g, "¥")
      .replace(/[。；;！？?！]/g, " ")
      .replace(/[，,]/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
    a = [],
    r = (b, N, w, _) => {
      const A = Number(b);
      !Number.isFinite(A) ||
        A <= 0 ||
        a.push({ amount: A, start: N, end: w, score: _ });
    };
  for (const b of n.matchAll(/¥\s*(\d+(?:\.\d{1,2})?)/g))
    b.index != null && r(b[1], b.index, b.index + b[0].length, 3);
  for (const b of n.matchAll(/(\d+(?:\.\d{1,2})?)\s*元/g))
    b.index != null && r(b[1], b.index, b.index + b[0].length, 3);
  for (const b of n.matchAll(/(\d+(?:\.\d{1,2})?)\s*块(?:钱)?/g))
    b.index != null && r(b[1], b.index, b.index + b[0].length, 3);
  for (const b of n.matchAll(
    /(支出|花费|花了|消费|付款|支付|买|付出|付了)\s*(?:¥|￥)?\s*(\d+(?:\.\d{1,2})?)/g,
  )) {
    if (b.index == null) continue;
    const N = b[2],
      w = b.index + b[0].length;
    r(N, w - String(N).length, w, 2);
  }
  for (const b of n.matchAll(
    /(收入|收了|收下|进账|进来|工资|回款|赚到|拿到)\s*(?:¥|￥)?\s*(\d+(?:\.\d{1,2})?)/g,
  )) {
    if (b.index == null) continue;
    const N = b[2],
      w = b.index + b[0].length;
    r(N, w - String(N).length, w, 2);
  }
  if (a.length === 0 && !n.includes(":")) {
    const b = /(\d+(?:\.\d{1,2})?)\s*(?:¥)?\s*(?:块|元)?$/.exec(n);
    if (b) {
      const N = Number(b[1]);
      if (Number.isFinite(N) && N > 0) {
        const w = n.lastIndexOf(b[1]);
        r(N, w, w + b[1].length, 1);
      }
    }
  }
  if (a.length === 0) return null;
  a.sort((b, N) => N.score - b.score || b.start - N.start);
  const { amount: i, start: o, end: c } = a[0],
    d = n.slice(Math.max(0, o - 10), Math.min(n.length, c + 10)),
    u = /(收入|收了|收下|进账|进来|工资|回款|赚到|拿到|进)/.test(d),
    f = /(支出|花费|花了|消费|付款|支付|掏出|买|付出|付了)/.test(d);
  let p = null;
  u && !f
    ? (p = "income")
    : f && !u
      ? (p = "expense")
      : u
        ? (p = "income")
        : (p = "expense");
  const m = n.slice(0, o),
    h = n.slice(c),
    g = (b) =>
      b
        .replace(/(记一笔|记账|账单|写入|添加|添一笔|要记|请帮我)/g, " ")
        .replace(
          /(支出|收入|花费|花了|消费|付款|付了|支付|掏出|买|付出|进账|进来|收了|收下|工资|回款)/g,
          " ",
        )
        .replace(/(¥|￥)\s*\d+(?:\.\d{1,2})?/g, " ")
        .replace(/\d+(?:\.\d{1,2})?\s*(元|块)(?:钱)?/g, " ")
        .replace(/[：:]/g, " ")
        .replace(/[|/\\]/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    x = g(m),
    y = g(h);
  let v = "";
  return (
    y && (v = y),
    !y && x && (v = x),
    y && x && (v = y.length >= x.length ? y : x),
    (v = v.slice(0, 30)),
    { direction: p, amount: i, note: v }
  );
}
const DA = ["【手账】", "#手账#", "＃手账＃"];
function SH(t) {
  const s = String(t || "").trim();
  if (!s) return null;
  for (const n of DA) {
    if (!s.startsWith(n)) continue;
    const a = s.slice(n.length).trim();
    return a ? kH(a) : null;
  }
  return null;
}
function dp(t) {
  if (!t || t.isRecalled || t.sender === "system") return !1;
  const s = t.type || "text";
  return s === "text" || s === "voice" || s === "image" || s === "text_image";
}
const _H = ({
    replyingTo: t,
    setReplyingTo: s,
    editingMessageId: n,
    handleEditSelected: a,
    handleCancelEdit: r,
    selectionMode: i,
    selectedMessageIds: o,
    handleReplySelected: c,
    handleCopySelected: d,
    handleFavoriteSelected: u,
    handleSpeakSelected: f,
    handleRecallSelected: p,
    handleDeleteSelected: m,
    setSelectionMode: h,
    setSelectedMessageIds: g,
    triggerAiReply: x,
    chatId: y,
    inputText: v,
    setInputText: b,
    handleKeyPress: N,
    showTools: w,
    setShowTools: _,
    handleSend: A,
    chat: k,
    contact: C,
    contacts: M = [],
    onInputFocusScrollToBottom: E,
    onInputBlurForScroll: S,
    showMemeSuggestions: j,
    memeSuggestions: T,
    onSendMemeFromSuggestion: I,
    onDismissMemeSuggestions: L,
    inputRef: B,
    groupReplyInProgress: F,
  }) => {
    var ne, le, ie, X, je;
    const [D, $] = l.useState(!1),
      P = (k == null ? void 0 : k.isGroup) === !0,
      z =
        P &&
        ((ne = F == null ? void 0 : F.has) == null ? void 0 : ne.call(F, y)),
      O =
        P &&
        (k.memberIds || [])
          .map((xe) => M.find((ye) => ye.id === xe))
          .filter(Boolean),
      Z =
        ((le = k == null ? void 0 : k.settings) == null
          ? void 0
          : le.blockedRoles) || {},
      K = !P && C != null && C.id ? (Z == null ? void 0 : Z[C.id]) : void 0,
      q =
        !P &&
        (C == null ? void 0 : C.id) &&
        K != null &&
        (typeof K == "number" ||
          (typeof K == "object" &&
            (K == null ? void 0 : K.unblockedAt) == null));
    l.useEffect(() => {
      P && (v.endsWith("@") ? $(!0) : D && !v.includes("@") && $(!1));
    }, [v, P, D]);
    const V = (xe) => {
      const ye = v.endsWith("@") ? v.slice(0, -1) : v;
      (b(ye + xe + " "), $(!1));
    };
    return e.jsxs("div", {
      className: "footer-container",
      children: [
        e.jsx("div", { className: "footer-backing" }),
        e.jsx(V$, {
          show: P && D && !i,
          onClose: () => $(!1),
          groupMembers: O,
          onSelect: V,
        }),
        j &&
          (T == null ? void 0 : T.length) > 0 &&
          !i &&
          e.jsx("div", {
            className:
              "relative z-[30] flex items-center w-full overflow-x-auto no-scrollbar gap-2 px-4 py-2.5 shrink-0 animate-in slide-in-from-bottom-2 duration-200",
            children: T.map((xe) =>
              e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    (I == null || I(xe), L == null || L());
                  },
                  className:
                    "flex-shrink-0 w-11 h-11 rounded-xl overflow-hidden border border-[#e0d5c8] bg-white shadow-sm active:scale-95 transition-transform",
                  children: e.jsx("img", {
                    src: xe.url,
                    alt: xe.meaning,
                    className: "w-full h-full object-cover",
                    loading: "lazy",
                  }),
                },
                xe.id,
              ),
            ),
          }),
        e.jsxs("div", {
          className: "footer-card flex items-end gap-4",
          children: [
            (t || n) &&
              e.jsxs("div", {
                className: "footer-reply-bar",
                children: [
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[10px] font-bold text-[#5d4037] uppercase tracking-wider flex items-center gap-1.5 mb-0.5",
                        children: n
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(_c, {
                                  size: 10,
                                  className: "stroke-[3px]",
                                }),
                                "编辑消息",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(A8, {
                                  size: 10,
                                  className: "stroke-[3px]",
                                }),
                                "回复",
                                " ",
                                t.sender === "me"
                                  ? "我"
                                  : k != null && k.isGroup && t.contactId
                                    ? ((ie = M.find(
                                        (xe) => xe.id === t.contactId,
                                      )) == null
                                        ? void 0
                                        : ie.nickname) ||
                                      ((X = M.find(
                                        (xe) => xe.id === t.contactId,
                                      )) == null
                                        ? void 0
                                        : X.name) ||
                                      "群成员"
                                    : (C == null ? void 0 : C.nickname) ||
                                      (C == null ? void 0 : C.name) ||
                                      "对方",
                              ],
                            }),
                      }),
                      e.jsx("div", {
                        className:
                          "text-xs text-[#8d6e63] truncate font-medium",
                        children: n
                          ? ((je = k.messages.find((xe) => xe.id === n)) == null
                              ? void 0
                              : je.text) || "[消息]"
                          : t.type === "gashapon_card"
                            ? t.itemName || t.text
                            : t.text || "[引用消息]",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: n ? r : () => s(null),
                    className:
                      "p-1 hover:bg-[#fff9c4] rounded-full text-[#8d6e63] transition-colors ml-2",
                    children: e.jsx(Ts, { size: 14 }),
                  }),
                ],
              }),
            i
              ? e.jsxs("div", {
                  className: "w-full flex items-center gap-2 overflow-hidden",
                  children: [
                    e.jsxs("span", {
                      className:
                        "text-sm font-bold text-[#5d4037] shrink-0 pl-1",
                      children: ["已选 ", o.length, " 条"],
                    }),
                    e.jsxs("div", {
                      className:
                        "footer-selection-actions-scroll flex-1 min-w-0 flex flex-nowrap gap-2 overflow-x-auto overflow-y-hidden items-center justify-start py-1 pr-2 scroll-smooth touch-pan-x no-scrollbar",
                      style: { WebkitOverflowScrolling: "touch" },
                      children: [
                        o.length === 1 &&
                          (() => {
                            const xe = k.messages.find((ye) => ye.id === o[0]);
                            return (
                              (!xe.type || xe.type === "text") && !xe.isRecalled
                            );
                          })() &&
                          e.jsx("button", {
                            onClick: a,
                            className:
                              "p-2 hover:bg-[#f2f0ea] text-[#5d4037] rounded-lg transition-colors shrink-0",
                            title: "编辑",
                            children: e.jsx(_c, { size: 20 }),
                          }),
                        o.length === 1 &&
                          (() => {
                            const xe = k.messages.find((ye) => ye.id === o[0]);
                            return dp(xe);
                          })() &&
                          e.jsx("button", {
                            onClick: c,
                            className:
                              "p-2 hover:bg-[#f2f0ea] text-[#5d4037] rounded-lg transition-colors shrink-0",
                            title: "引用",
                            children: e.jsx(Gl, { size: 20 }),
                          }),
                        o.length === 1 &&
                          e.jsx("button", {
                            onClick: d,
                            className:
                              "p-2 hover:bg-[#f2f0ea] text-[#5d4037] rounded-lg transition-colors shrink-0",
                            title: "复制",
                            children: e.jsx(Ao, { size: 20 }),
                          }),
                        e.jsx("button", {
                          onClick: () => (u == null ? void 0 : u()),
                          className:
                            "p-2 hover:bg-[#f2f0ea] text-[#5d4037] rounded-lg transition-colors shrink-0",
                          title: o.length > 1 ? `收藏 ${o.length} 条` : "收藏",
                          children: e.jsx(Gi, { size: 20 }),
                        }),
                        o.length === 1 &&
                          e.jsx("button", {
                            onClick: f,
                            className:
                              "p-2 hover:bg-[#f2f0ea] text-[#5d4037] rounded-lg transition-colors shrink-0",
                            title: "朗读",
                            children: e.jsx(Ji, { size: 20 }),
                          }),
                        o.length === 1 &&
                          (() => {
                            const xe = k.messages.find((oe) => oe.id === o[0]);
                            if (!xe || xe.sender !== "me" || xe.isRecalled)
                              return !1;
                            const ye = new Date(xe.timestamp).getTime();
                            return Date.now() - ye < 2 * 60 * 1e3;
                          })() &&
                          e.jsx("button", {
                            onClick: p,
                            className:
                              "p-2 hover:bg-[#f2f0ea] text-[#5d4037] rounded-lg transition-colors shrink-0",
                            title: "撤回",
                            children: e.jsx(Pr, { size: 20 }),
                          }),
                        e.jsx("button", {
                          onClick: m,
                          className:
                            "p-2 hover:bg-[#ffebee] text-[#ef5350] rounded-lg transition-colors shrink-0",
                          children: e.jsx(_n, { size: 20 }),
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            (h(!1), g([]));
                          },
                          className:
                            "p-2 hover:bg-[#f2f0ea] text-[#bdbdbd] rounded-lg transition-colors shrink-0",
                          children: e.jsx(Ts, { size: 20 }),
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () =>
                        x(
                          y,
                          !1,
                          "",
                          (k == null ? void 0 : k.messages) ?? void 0,
                          P ? void 0 : "chat_heart",
                        ),
                      className:
                        "footer-tool-btn text-[#ffab91] hover:text-[#ff8a65]",
                      disabled: z || q,
                      "aria-busy": z,
                      "aria-label": q
                        ? "已拉黑：接收按钮已禁用"
                        : z
                          ? "正在调取回复"
                          : "调取 AI 回复",
                      title: q ? "已拉黑：请先解除拉黑" : "接收",
                      children: e.jsx(zn, {
                        size: 20,
                        className: `fill-[#ffab91] ${z ? "opacity-60" : ""}`,
                      }),
                    }),
                    e.jsxs("div", {
                      className: "footer-input-container group",
                      children: [
                        e.jsx("input", {
                          ref: B,
                          type: "text",
                          autoComplete: "off",
                          enterKeyHint: "send",
                          value: v,
                          onChange: (xe) => b(xe.target.value),
                          onKeyPress: (xe) => {
                            if (q) {
                              (xe.preventDefault(), xe.stopPropagation());
                              return;
                            }
                            N == null || N(xe);
                          },
                          onFocus: E,
                          onBlur: S,
                          placeholder: q
                            ? "已拉黑：无法发送消息"
                            : "写点什么...",
                          className: "footer-input placeholder-[#d7ccc8]",
                          disabled: q,
                        }),
                        e.jsx("div", { className: "footer-input-line" }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            q || _(!w);
                          },
                          className: "footer-tabs-trigger",
                          disabled: q,
                          "aria-label": q
                            ? "已拉黑：聊天功能已禁用"
                            : "打开聊天功能",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => {
                        q || _(!w);
                      },
                      className: "footer-tool-btn",
                      disabled: q,
                      "aria-label": q
                        ? "已拉黑：拓展功能已禁用"
                        : "打开拓展功能",
                      title: q ? "已拉黑：无法打开拓展功能" : void 0,
                      children: e.jsx(a3, { size: 20 }),
                    }),
                    e.jsx("button", {
                      onClick: A,
                      disabled: q || !v.trim(),
                      className: `footer-send-btn ${v.trim() ? "active" : "disabled"}`,
                      children: e.jsx(ri, {
                        size: 18,
                        className: v.trim() ? "ml-0.5" : "",
                      }),
                    }),
                  ],
                }),
          ],
        }),
      ],
    });
  },
  AH = ({
    contact: t,
    onBack: s,
    onViewContact: n,
    setShowSettings: a,
    onOpenStatusWidget: r,
  }) => {
    var g;
    const { listenTogetherState: i, activeChatId: o, chats: c } = vn(),
      [d, u] = l.useState("00:00");
    if (
      (l.useEffect(() => {
        let x;
        if (i.isActive && i.chatId === o) {
          const y = () => {
            const v = Math.floor((Date.now() - i.startTime) / 1e3),
              b = Math.floor(v / 60)
                .toString()
                .padStart(2, "0"),
              N = (v % 60).toString().padStart(2, "0");
            u(`${b}:${N}`);
          };
          (y(), (x = setInterval(y, 1e3)));
        }
        return () => clearInterval(x);
      }, [i, o]),
      !t)
    )
      return null;
    const f = i.isActive && i.chatId === o,
      p = (Array.isArray(c) ? c : []).reduce(
        (x, y) => x + (Number(y == null ? void 0 : y.unread) || 0),
        0,
      ),
      m =
        ((g = (Array.isArray(c) ? c : []).find(
          (x) => (x == null ? void 0 : x.id) === o,
        )) == null
          ? void 0
          : g.unread) || 0,
      h = Math.max(0, Number(p) - (Number(m) || 0));
    return e.jsxs("div", {
      className: "header-container",
      children: [
        e.jsx("div", { className: "header-backing" }),
        e.jsxs("div", {
          className: "header-card px-3 py-4 flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                e.jsx("button", {
                  onClick: () => {
                    (navigator.vibrate && navigator.vibrate(20), s());
                  },
                  className:
                    "p-2 -ml-1 text-[#5d4037] hover:opacity-70 transition-opacity",
                  children: e.jsx(un, { size: 22, strokeWidth: 2.5 }),
                }),
                h > 0 &&
                  e.jsx("div", {
                    className: "chat-detail-unread-badge",
                    children: h > 99 ? "99+" : h,
                  }),
                e.jsxs("div", {
                  className: `flex flex-col justify-center ml-1 min-w-0 flex-1 ${r ? "cursor-pointer" : ""}`,
                  onClick: () => (r == null ? void 0 : r()),
                  role: r ? "button" : void 0,
                  tabIndex: r ? 0 : void 0,
                  onKeyDown: (x) =>
                    r && x.key === "Enter" && (r == null ? void 0 : r()),
                  "aria-label": r ? "打开状态栏" : void 0,
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("span", {
                          className: "header-remark underline-hand",
                          children: t.remark || t.nickname || t.name,
                        }),
                        f &&
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-1.5 bg-[#fffcf7] border border-[#f0f0f0] px-2 py-0.5 rounded-full shadow-sm animate-in fade-in duration-300",
                            children: [
                              e.jsx(vr, {
                                size: 10,
                                className: "text-[#8d6e63]",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-[#8d6e63] font-bold tracking-widest tabular-nums",
                                children: d,
                              }),
                            ],
                          }),
                      ],
                    }),
                    ((t.remark && t.nickname) ||
                      (!t.remark && t.nickname && t.nickname !== t.name)) &&
                      e.jsx("span", {
                        className: "header-nickname",
                        children: t.remark ? `@${t.nickname}` : t.nickname,
                      }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "header-polaroid-container group",
              onClick: () => a(!0),
              children: e.jsxs("div", {
                className: "header-polaroid",
                children: [
                  e.jsx("img", {
                    src: t.avatar,
                    alt: "avatar",
                    loading: "lazy",
                  }),
                  e.jsx("div", { className: "header-tape" }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  CH = 50;
function MH() {
  var n, a;
  if (typeof window > "u") return !1;
  try {
    if (
      (a =
        (n = window.matchMedia) == null
          ? void 0
          : n.call(window, "(prefers-reduced-motion: reduce)")) != null &&
      a.matches
    )
      return !0;
  } catch {}
  const t = navigator.hardwareConcurrency;
  if (t != null && t <= 4) return !0;
  const s = navigator.deviceMemory;
  return s != null && s <= 4;
}
function TH() {
  return CH;
}
/*! @license DOMPurify 3.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.3/LICENSE */ const {
  entries: $A,
  setPrototypeOf: yN,
  isFrozen: IH,
  getPrototypeOf: EH,
  getOwnPropertyDescriptor: LH,
} = Object;
let { freeze: Ci, seal: To, create: _0 } = Object,
  { apply: b1, construct: y1 } = typeof Reflect < "u" && Reflect;
Ci ||
  (Ci = function (s) {
    return s;
  });
To ||
  (To = function (s) {
    return s;
  });
b1 ||
  (b1 = function (s, n) {
    for (
      var a = arguments.length, r = new Array(a > 2 ? a - 2 : 0), i = 2;
      i < a;
      i++
    )
      r[i - 2] = arguments[i];
    return s.apply(n, r);
  });
y1 ||
  (y1 = function (s) {
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1;
      r < n;
      r++
    )
      a[r - 1] = arguments[r];
    return new s(...a);
  });
const px = Mi(Array.prototype.forEach),
  DH = Mi(Array.prototype.lastIndexOf),
  vN = Mi(Array.prototype.pop),
  _f = Mi(Array.prototype.push),
  $H = Mi(Array.prototype.splice),
  A0 = Mi(String.prototype.toLowerCase),
  vb = Mi(String.prototype.toString),
  wb = Mi(String.prototype.match),
  Af = Mi(String.prototype.replace),
  FH = Mi(String.prototype.indexOf),
  zH = Mi(String.prototype.trim),
  Zi = Mi(Object.prototype.hasOwnProperty),
  wi = Mi(RegExp.prototype.test),
  Cf = RH(TypeError);
function Mi(t) {
  return function (s) {
    s instanceof RegExp && (s.lastIndex = 0);
    for (
      var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), r = 1;
      r < n;
      r++
    )
      a[r - 1] = arguments[r];
    return b1(t, s, a);
  };
}
function RH(t) {
  return function () {
    for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
      n[a] = arguments[a];
    return y1(t, n);
  };
}
function ba(t, s) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : A0;
  yN && yN(t, null);
  let a = s.length;
  for (; a--; ) {
    let r = s[a];
    if (typeof r == "string") {
      const i = n(r);
      i !== r && (IH(s) || (s[a] = i), (r = i));
    }
    t[r] = !0;
  }
  return t;
}
function PH(t) {
  for (let s = 0; s < t.length; s++) Zi(t, s) || (t[s] = null);
  return t;
}
function cl(t) {
  const s = _0(null);
  for (const [n, a] of $A(t))
    Zi(t, n) &&
      (Array.isArray(a)
        ? (s[n] = PH(a))
        : a && typeof a == "object" && a.constructor === Object
          ? (s[n] = cl(a))
          : (s[n] = a));
  return s;
}
function Mf(t, s) {
  for (; t !== null; ) {
    const a = LH(t, s);
    if (a) {
      if (a.get) return Mi(a.get);
      if (typeof a.value == "function") return Mi(a.value);
    }
    t = EH(t);
  }
  function n() {
    return null;
  }
  return n;
}
const wN = Ci([
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meter",
    "nav",
    "nobr",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "search",
    "section",
    "select",
    "shadow",
    "slot",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
  ]),
  jb = Ci([
    "svg",
    "a",
    "altglyph",
    "altglyphdef",
    "altglyphitem",
    "animatecolor",
    "animatemotion",
    "animatetransform",
    "circle",
    "clippath",
    "defs",
    "desc",
    "ellipse",
    "enterkeyhint",
    "exportparts",
    "filter",
    "font",
    "g",
    "glyph",
    "glyphref",
    "hkern",
    "image",
    "inputmode",
    "line",
    "lineargradient",
    "marker",
    "mask",
    "metadata",
    "mpath",
    "part",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialgradient",
    "rect",
    "stop",
    "style",
    "switch",
    "symbol",
    "text",
    "textpath",
    "title",
    "tref",
    "tspan",
    "view",
    "vkern",
  ]),
  Nb = Ci([
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
  ]),
  OH = Ci([
    "animate",
    "color-profile",
    "cursor",
    "discard",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "foreignobject",
    "hatch",
    "hatchpath",
    "mesh",
    "meshgradient",
    "meshpatch",
    "meshrow",
    "missing-glyph",
    "script",
    "set",
    "solidcolor",
    "unknown",
    "use",
  ]),
  kb = Ci([
    "math",
    "menclose",
    "merror",
    "mfenced",
    "mfrac",
    "mglyph",
    "mi",
    "mlabeledtr",
    "mmultiscripts",
    "mn",
    "mo",
    "mover",
    "mpadded",
    "mphantom",
    "mroot",
    "mrow",
    "ms",
    "mspace",
    "msqrt",
    "mstyle",
    "msub",
    "msup",
    "msubsup",
    "mtable",
    "mtd",
    "mtext",
    "mtr",
    "munder",
    "munderover",
    "mprescripts",
  ]),
  BH = Ci([
    "maction",
    "maligngroup",
    "malignmark",
    "mlongdiv",
    "mscarries",
    "mscarry",
    "msgroup",
    "mstack",
    "msline",
    "msrow",
    "semantics",
    "annotation",
    "annotation-xml",
    "mprescripts",
    "none",
  ]),
  jN = Ci(["#text"]),
  NN = Ci([
    "accept",
    "action",
    "align",
    "alt",
    "autocapitalize",
    "autocomplete",
    "autopictureinpicture",
    "autoplay",
    "background",
    "bgcolor",
    "border",
    "capture",
    "cellpadding",
    "cellspacing",
    "checked",
    "cite",
    "class",
    "clear",
    "color",
    "cols",
    "colspan",
    "controls",
    "controlslist",
    "coords",
    "crossorigin",
    "datetime",
    "decoding",
    "default",
    "dir",
    "disabled",
    "disablepictureinpicture",
    "disableremoteplayback",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "exportparts",
    "face",
    "for",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "id",
    "inert",
    "inputmode",
    "integrity",
    "ismap",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "loop",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "multiple",
    "muted",
    "name",
    "nonce",
    "noshade",
    "novalidate",
    "nowrap",
    "open",
    "optimum",
    "part",
    "pattern",
    "placeholder",
    "playsinline",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "pubdate",
    "radiogroup",
    "readonly",
    "rel",
    "required",
    "rev",
    "reversed",
    "role",
    "rows",
    "rowspan",
    "spellcheck",
    "scope",
    "selected",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "srclang",
    "start",
    "src",
    "srcset",
    "step",
    "style",
    "summary",
    "tabindex",
    "title",
    "translate",
    "type",
    "usemap",
    "valign",
    "value",
    "width",
    "wrap",
    "xmlns",
    "slot",
  ]),
  Sb = Ci([
    "accent-height",
    "accumulate",
    "additive",
    "alignment-baseline",
    "amplitude",
    "ascent",
    "attributename",
    "attributetype",
    "azimuth",
    "basefrequency",
    "baseline-shift",
    "begin",
    "bias",
    "by",
    "class",
    "clip",
    "clippathunits",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cx",
    "cy",
    "d",
    "dx",
    "dy",
    "diffuseconstant",
    "direction",
    "display",
    "divisor",
    "dur",
    "edgemode",
    "elevation",
    "end",
    "exponent",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "filterunits",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyph-name",
    "glyphref",
    "gradientunits",
    "gradienttransform",
    "height",
    "href",
    "id",
    "image-rendering",
    "in",
    "in2",
    "intercept",
    "k",
    "k1",
    "k2",
    "k3",
    "k4",
    "kerning",
    "keypoints",
    "keysplines",
    "keytimes",
    "lang",
    "lengthadjust",
    "letter-spacing",
    "kernelmatrix",
    "kernelunitlength",
    "lighting-color",
    "local",
    "marker-end",
    "marker-mid",
    "marker-start",
    "markerheight",
    "markerunits",
    "markerwidth",
    "maskcontentunits",
    "maskunits",
    "max",
    "mask",
    "mask-type",
    "media",
    "method",
    "mode",
    "min",
    "name",
    "numoctaves",
    "offset",
    "operator",
    "opacity",
    "order",