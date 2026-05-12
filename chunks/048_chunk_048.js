                                  }),
                                }),
                            }),
                          ],
                        }),
                        Oe.comments &&
                          Oe.comments.length > 0 &&
                          e.jsxs("div", {
                            className:
                              "moments-comments-block px-1 space-y-1 mb-2",
                            children: [
                              (V.has(Oe.id)
                                ? Oe.comments
                                : Oe.comments.slice(0, 2)
                              ).map((Ye, Ze) =>
                                e.jsx(
                                  "div",
                                  {
                                    className:
                                      "flex items-start gap-1 text-xs text-gray-600 mb-1 rounded px-1 -mx-1 transition-colors group",
                                    children: e.jsxs("div", {
                                      className:
                                        "flex-1 min-w-0 cursor-pointer hover:bg-gray-50 rounded py-0.5 -my-0.5",
                                      onClick: (Ue) => {
                                        (Ue.stopPropagation(),
                                          $e(Oe.id, Ye.id, Ye.user));
                                      },
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-bold text-gray-900 mr-2",
                                          children: Ye.user,
                                        }),
                                        Ye.replyTo &&
                                          e.jsxs("span", {
                                            className: "text-gray-500 mr-2",
                                            children: ["回复 ", Ye.replyTo],
                                          }),
                                        e.jsx("span", {
                                          className: "mr-2",
                                          children: Ye.text,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] text-gray-400",
                                          children: He(Ye.timestamp),
                                        }),
                                      ],
                                    }),
                                  },
                                  Ye.id ?? Ze,
                                ),
                              ),
                              Oe.comments.length > 2 &&
                                e.jsx("button", {
                                  onClick: () => H(Oe.id),
                                  className:
                                    "text-[10px] text-gray-400 uppercase tracking-wider mt-2",
                                  children: V.has(Oe.id)
                                    ? "收起评论"
                                    : `查看全部 ${Oe.comments.length} 条评论`,
                                }),
                            ],
                          }),
                        D &&
                          D.momentId === Oe.id &&
                          e.jsxs("div", {
                            className:
                              "mt-2 px-1 flex items-center gap-3 pt-2 animate-in fade-in",
                            children: [
                              e.jsx("input", {
                                type: "text",
                                value: P,
                                onChange: (Ye) => z(Ye.target.value),
                                onKeyDown: (Ye) => {
                                  Ye.key === "Enter" &&
                                    !Ye.shiftKey &&
                                    (Ye.preventDefault(), tt());
                                },
                                placeholder: D.commentId
                                  ? `回复 ${D.user}...`
                                  : "写一条评论...",
                                className:
                                  "moments-reply-input flex-1 bg-transparent text-xs outline-none placeholder:text-gray-300 font-serif",
                                autoFocus: !0,
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: tt,
                                className:
                                  "text-[10px] font-bold text-gray-900 uppercase tracking-widest hover:text-gray-600",
                                children: "发送",
                              }),
                            ],
                          }),
                        e.jsx("div", {
                          className:
                            "w-2/3 mx-auto h-[1px] bg-gray-200 mt-10 last:hidden",
                        }),
                      ],
                    },
                    Oe.id,
                  );
                }),
              ],
            }),
          ],
        }),
        E &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center p-8",
            children: e.jsxs("div", {
              className: "w-full max-w-sm flex flex-col max-h-[80vh]",
              children: [
                e.jsxs("div", {
                  className:
                    "flex justify-between items-center mb-4 border-b border-gray-100 pb-4",
                  children: [
                    e.jsx("h3", {
                      className: "font-serif text-xl text-gray-900",
                      children: "分享到聊天",
                    }),
                    e.jsx("button", {
                      onClick: () => {
                        (S(null), T(""));
                      },
                      className: "text-gray-400 hover:text-gray-900",
                      children: e.jsx(Ts, { size: 24, strokeWidth: 1 }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "mb-4",
                  children: e.jsx("input", {
                    type: "text",
                    value: j,
                    onChange: (Oe) => T(Oe.target.value),
                    placeholder: "留言（选填）...",
                    className:
                      "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors font-serif",
                  }),
                }),
                e.jsx("div", {
                  className: "space-y-4 flex-1 overflow-y-auto no-scrollbar",
                  children: m.map((Oe) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: () => Fe(Oe.id),
                        className:
                          "w-full flex items-center gap-4 group p-2 hover:bg-gray-50 rounded-xl transition-colors",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-100",
                            children: e.jsx("img", {
                              src: Oe.avatar,
                              alt: Oe.name,
                              className:
                                "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all",
                              loading: "lazy",
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "font-serif text-gray-600 group-hover:text-gray-900 transition-colors",
                            children: Oe.nickname || Oe.name,
                          }),
                          e.jsx("div", {
                            className:
                              "ml-auto opacity-0 group-hover:opacity-100 transition-opacity",
                            children: e.jsx(ri, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                        ],
                      },
                      Oe.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
        Q &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-[70] bg-white/90 backdrop-blur-sm flex items-center justify-center p-8",
            children: e.jsxs("div", {
              className:
                "w-full max-w-sm flex flex-col h-[80vh] bg-white/70 rounded-2xl border border-gray-100 shadow-lg overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-3 border-b border-gray-100",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => oe(null),
                      className:
                        "text-gray-400 hover:text-gray-900 transition-colors",
                      "aria-label": "返回",
                      children: e.jsx(un, { size: 22, strokeWidth: 1.5 }),
                    }),
                    e.jsx("div", {
                      className: "text-xs text-gray-500 font-serif",
                      children: "详情",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => {
                        window.confirm("确定要删除这条朋友圈吗？") &&
                          (g(Q.id), oe(null));
                      },
                      className:
                        "text-gray-400 hover:text-red-500 transition-colors",
                      "aria-label": "删除",
                      children: e.jsx(_n, { size: 18, strokeWidth: 1.5 }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto no-scrollbar px-5 py-5",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("img", {
                              src: (() => {
                                var Qe;
                                const Oe = (m || []).find((Ye) => {
                                  var Ze;
                                  return (
                                    (Ye.nickname || Ye.name) ===
                                    ((Ze = Q.user) == null ? void 0 : Ze.name)
                                  );
                                });
                                return (
                                  (Oe == null ? void 0 : Oe.portrait) ||
                                  (Oe == null ? void 0 : Oe.avatar) ||
                                  ((Qe = Q.user) == null ? void 0 : Qe.avatar)
                                );
                              })(),
                              alt:
                                ((Re = Q.user) == null ? void 0 : Re.name) ||
                                "",
                              className: "w-8 h-8 rounded-full object-cover",
                              loading: "lazy",
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-wide text-gray-900",
                              children:
                                (De = Q.user) == null ? void 0 : De.name,
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] text-gray-400 font-serif italic",
                          children: He(Q.timestamp),
                        }),
                      ],
                    }),
                    Q.content
                      ? e.jsxs("div", {
                          className: "mb-4",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-sm text-gray-800 font-serif leading-relaxed whitespace-pre-wrap",
                              children: Q.content,
                            }),
                            Q.translation
                              ? e.jsx("p", {
                                  className:
                                    "mt-2 text-xs text-gray-600 font-serif leading-relaxed border-l-2 border-gray-200 pl-3",
                                  children: Q.translation,
                                })
                              : null,
                          ],
                        })
                      : null,
                    Q.comments && Q.comments.length > 0
                      ? e.jsxs("div", {
                          className: "mt-5",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-gray-400 uppercase tracking-wider mb-2",
                              children: "评论",
                            }),
                            e.jsx("div", {
                              className: "space-y-1",
                              children: Q.comments.map((Oe, Qe) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-start gap-1 text-xs text-gray-600 rounded px-1 -mx-1 transition-colors group",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex-1 min-w-0 rounded py-0.5 -my-0.5",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "font-bold text-gray-900 mr-2",
                                            children: Oe.user,
                                          }),
                                          Oe.replyTo &&
                                            e.jsxs("span", {
                                              className: "text-gray-500 mr-2",
                                              children: ["回复 ", Oe.replyTo],
                                            }),
                                          e.jsx("span", {
                                            className: "mr-2",
                                            children: Oe.text,
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[10px] text-gray-400",
                                            children: He(Oe.timestamp),
                                          }),
                                        ],
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        "aria-label": "删除评论",
                                        className:
                                          "flex-shrink-0 p-1 rounded text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-70 group-hover:opacity-100 transition-opacity touch-manipulation",
                                        onClick: () => {
                                          window.confirm(
                                            "确定删除这条评论？",
                                          ) && x(Q.id, Oe.id, Qe);
                                        },
                                        children: e.jsx(_n, {
                                          size: 14,
                                          strokeWidth: 1.5,
                                        }),
                                      }),
                                    ],
                                  },
                                  Oe.id ?? Qe,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                    (() => {
                      var Ze, Ue;
                      const Oe =
                          (Ze = Q.images) != null && Ze.length
                            ? Q.images
                            : Q.image
                              ? [Q.image]
                              : [],
                        Qe =
                          (Ue = Q.imageDescriptions) != null && Ue.length
                            ? Q.imageDescriptions
                            : Q.imageDescription
                              ? [Q.imageDescription]
                              : [],
                        Ye = Oe.length
                          ? Oe.map((me) => ({ type: "url", value: me }))
                          : Qe.map((me) => ({ type: "desc", value: me }));
                      return Ye.length
                        ? e.jsx("div", {
                            className: "grid grid-cols-3 gap-1.5",
                            children: Ye.slice(0, 9).map((me, jt) =>
                              e.jsx(
                                "button",
                                {
                                  type: "button",
                                  className:
                                    "relative aspect-square rounded-sm overflow-hidden bg-gray-100",
                                  onClick: () => {
                                    me.type === "url" &&
                                      ye({
                                        type: "url",
                                        url: me.value,
                                        description: Qe[jt],
                                        allItems: Ye.map((Gt, Pt) => ({
                                          type: Gt.type,
                                          value: Gt.value,
                                          description: Qe[Pt],
                                          title: "动态",
                                          fullText:
                                            Gt.type === "desc"
                                              ? Gt.value
                                              : Q.content || "",
                                        })),
                                        currentIndex: jt,
                                        title: "动态",
                                        fullText: Q.content || "",
                                        bgColor: "#e8e4e1",
                                      });
                                  },
                                  children:
                                    me.type === "url"
                                      ? e.jsx("img", {
                                          src: me.value,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : null,
                                },
                                jt,
                              ),
                            ),
                          })
                        : null;
                    })(),
                  ],
                }),
              ],
            }),
          }),
        I &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center p-8",
            children: e.jsxs("div", {
              className: "w-full max-w-sm flex flex-col h-[70vh]",
              children: [
                e.jsxs("div", {
                  className:
                    "flex justify-between items-center mb-4 border-b border-gray-100 pb-4",
                  children: [
                    e.jsx("h3", {
                      className: "font-serif text-xl text-gray-900",
                      children: "通知好友",
                    }),
                    e.jsx("button", {
                      onClick: () => L(!1),
                      className: "text-gray-400 hover:text-gray-900",
                      children: e.jsx(Ts, { size: 24, strokeWidth: 1 }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "flex-1 overflow-y-auto no-scrollbar space-y-4 mb-4",
                  children: m.map((Oe) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: () => fe(Oe.id),
                        className:
                          "w-full flex items-center justify-between gap-4 group p-2 hover:bg-gray-50 rounded-lg transition-colors",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full overflow-hidden bg-gray-100",
                                children: e.jsx("img", {
                                  src: Oe.avatar,
                                  alt: Oe.name,
                                  className: "w-full h-full object-cover",
                                  loading: "lazy",
                                }),
                              }),
                              e.jsx("span", {
                                className:
                                  "font-serif text-gray-600 group-hover:text-gray-900 transition-colors",
                                children: Oe.nickname || Oe.name,
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${B.includes(Oe.id) ? "bg-black border-black" : "border-gray-300"}`,
                            children:
                              B.includes(Oe.id) &&
                              e.jsx("div", {
                                className: "w-2 h-2 bg-white rounded-full",
                              }),
                          }),
                        ],
                      },
                      Oe.id,
                    ),
                  ),
                }),
                e.jsxs("button", {
                  onClick: _t,
                  disabled: B.length === 0,
                  className:
                    "w-full py-3 bg-black text-white font-serif uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: ["发送通知（", B.length, "）"],
                }),
              ],
            }),
          }),
        xe &&
          e.jsxs("div", {
            className: `moments-fs-overlay ${xe ? "moments-fs-show" : ""}`,
            style: { display: xe ? "flex" : "none" },
            children: [
              xe.allItems &&
                xe.allItems.length > 1 &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className: "moments-fs-tap-prev",
                      onClick: (Oe) => {
                        if ((Oe.stopPropagation(), xe.currentIndex <= 0))
                          return;
                        const Qe = xe.currentIndex - 1,
                          Ye = xe.allItems[Qe],
                          Ze = [
                            "#e8e4e1",
                            "#dee3dc",
                            "#f2ede4",
                            "#e5e9ed",
                            "#dfdbe5",
                          ];
                        ye((Ue) => ({
                          ...Ue,
                          type: Ye.type,
                          url: Ye.type === "url" ? Ye.value : null,
                          textContent: Ye.type === "desc" ? Ye.value : null,
                          description: Ye.description,
                          currentIndex: Qe,
                          title: Ye.title || `动态 ${Qe + 1}`,
                          fullText:
                            Ye.fullText != null
                              ? Ye.fullText
                              : Ye.type === "desc"
                                ? Ye.value
                                : "",
                          bgColor: Ze[Qe % 5],
                        }));
                      },
                      "aria-label": "上一张",
                    }),
                    e.jsx("div", {
                      className: "moments-fs-tap-next",
                      onClick: (Oe) => {
                        if (
                          (Oe.stopPropagation(),
                          xe.currentIndex >= xe.allItems.length - 1)
                        )
                          return;
                        const Qe = xe.currentIndex + 1,
                          Ye = xe.allItems[Qe],
                          Ze = [
                            "#e8e4e1",
                            "#dee3dc",
                            "#f2ede4",
                            "#e5e9ed",
                            "#dfdbe5",
                          ];
                        ye((Ue) => ({
                          ...Ue,
                          type: Ye.type,
                          url: Ye.type === "url" ? Ye.value : null,
                          textContent: Ye.type === "desc" ? Ye.value : null,
                          description: Ye.description,
                          currentIndex: Qe,
                          title: Ye.title || `动态 ${Qe + 1}`,
                          fullText:
                            Ye.fullText != null
                              ? Ye.fullText
                              : Ye.type === "desc"
                                ? Ye.value
                                : "",
                          bgColor: Ze[Qe % 5],
                        }));
                      },
                      "aria-label": "下一张",
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "moments-fs-wrapper",
                children: [
                  e.jsxs("div", {
                    className: "moments-art-frame",
                    children: [
                      e.jsx("div", {
                        className: "moments-frame-inner",
                        children:
                          xe.type === "url"
                            ? e.jsx("img", { src: xe.url, alt: "" })
                            : e.jsx("div", {
                                style: {
                                  width: 40,
                                  height: 40,
                                  border: "1px solid #ccc",
                                  position: "absolute",
                                  top: 30,
                                  left: 30,
                                  backgroundColor: xe.bgColor || "#e8e4e1",
                                },
                              }),
                      }),
                      e.jsx("div", {
                        className: "moments-art-tag",
                        children: "PHOTOGRAPHY / ARCHIVE",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "moments-fs-content-box",
                    children: [
                      e.jsx("div", {
                        className: "moments-fs-title",
                        id: "moments-fs-title",
                        children: xe.title || "动态",
                      }),
                      e.jsx("div", {
                        className: "moments-fs-text",
                        id: "moments-fs-text",
                        children:
                          xe.type === "url"
                            ? xe.description || ""
                            : xe.fullText || xe.textContent || "",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "moments-page-num",
                    id: "moments-fs-page-num",
                    children: [
                      "ISSUE NO. ",
                      String((xe.currentIndex ?? 0) + 1).padStart(2, "0"),
                    ],
                  }),
                ],
              }),
              e.jsxs("button", {
                type: "button",
                className: "moments-close-btn",
                onClick: () => ye(null),
                "aria-label": "关闭",
                children: [
                  e.jsx(Ts, { size: 20, strokeWidth: 2 }),
                  e.jsx("span", { children: "关闭" }),
                ],
              }),
            ],
          }),
        C &&
          e.jsxs("div", {
            className:
              "absolute inset-0 z-50 bg-[#FAFAFA] flex flex-col animate-in slide-in-from-bottom-10 duration-500 overflow-hidden",
            children: [
              e.jsxs("div", {
                className: "px-6 py-5 pt-14 flex items-center justify-between",
                children: [
                  e.jsx("button", {
                    onClick: () => M(!1),
                    className: "text-gray-900",
                    children: e.jsx(Ts, { size: 24, strokeWidth: 1 }),
                  }),
                  e.jsx("span", {
                    className:
                      "font-serif text-sm tracking-[0.2em] uppercase text-gray-900",
                    children: "新动态",
                  }),
                  e.jsx("button", {
                    onClick: Se,
                    disabled:
                      !O.content && !((at = O.images) != null && at.length),
                    className:
                      "text-xs font-bold text-gray-900 uppercase tracking-widest disabled:opacity-30 hover:text-gray-600",
                    children: "发布",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto no-scrollbar",
                children: e.jsx("div", {
                  className: "p-8 pb-28 flex flex-col items-center",
                  children: e.jsxs("div", {
                    className: "w-full max-w-md space-y-8",
                    children: [
                      e.jsx("div", {
                        className: "relative group cursor-pointer",
                        children:
                          ((ft = O.images) == null ? void 0 : ft.length) > 0
                            ? e.jsxs("div", {
                                className: "grid gap-2",
                                style: {
                                  gridTemplateColumns: `repeat(${Math.min(O.images.length + 1, 3)}, 1fr)`,
                                },
                                children: [
                                  O.images.map((Oe, Qe) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "relative aspect-square bg-gray-100 overflow-hidden rounded-lg",
                                        children: [
                                          e.jsx("img", {
                                            src: Oe,
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover",
                                            loading: "lazy",
                                          }),
                                          e.jsx("button", {
                                            onClick: () =>
                                              Z((Ye) => ({
                                                ...Ye,
                                                images: Ye.images.filter(
                                                  (Ze, Ue) => Ue !== Qe,
                                                ),
                                              })),
                                            className:
                                              "absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white hover:bg-black/70",
                                            children: e.jsx(Ts, { size: 14 }),
                                          }),
                                        ],
                                      },
                                      Qe,
                                    ),
                                  ),
                                  O.images.length < 9 &&
                                    e.jsxs("label", {
                                      className:
                                        "aspect-square border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-gray-400 transition-colors rounded-lg cursor-pointer",
                                      children: [
                                        e.jsx(Za, {
                                          size: 20,
                                          className: "text-gray-400",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] text-gray-400",
                                          children: "添加",
                                        }),
                                        e.jsx("input", {
                                          type: "file",
                                          accept: "image/*",
                                          multiple: !0,
                                          onChange: Ae,
                                          className: "hidden",
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : e.jsxs("div", {
                                className:
                                  "w-full aspect-[4/5] border border-gray-200 flex flex-col items-center justify-center gap-4 hover:border-gray-400 transition-colors relative rounded-lg",
                                children: [
                                  e.jsx(Za, {
                                    size: 24,
                                    strokeWidth: 1,
                                    className: "text-gray-400",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] uppercase tracking-widest text-gray-400",
                                    children: "选择图片（1-9 张）",
                                  }),
                                  e.jsx("input", {
                                    type: "file",
                                    accept: "image/*",
                                    multiple: !0,
                                    onChange: Ae,
                                    className:
                                      "absolute inset-0 opacity-0 cursor-pointer",
                                  }),
                                ],
                              }),
                      }),
                      e.jsx("textarea", {
                        value: O.content,
                        onChange: (Oe) => Z({ ...O, content: Oe.target.value }),
                        placeholder: "写点配文...",
                        className:
                          "w-full bg-transparent resize-none outline-none text-sm font-serif leading-relaxed text-center placeholder:text-gray-300",
                        rows: 3,
                      }),
                      e.jsxs("button", {
                        type: "button",
                        onClick: () => q(!0),
                        className:
                          "w-full flex items-center justify-center gap-3 text-xs text-gray-700 hover:text-gray-900 transition-colors font-serif",
                        children: [
                          e.jsx("span", {
                            className:
                              "uppercase tracking-[0.24em] text-[10px] text-gray-500",
                            children: "可见范围",
                          }),
                          e.jsx("span", {
                            className: "inline-block w-px h-3 bg-gray-200",
                          }),
                          e.jsx("span", {
                            className: "tracking-wide",
                            children:
                              O.visibilityMode === "selected"
                                ? `仅 ${((vt = O.visibleToContactIds) == null ? void 0 : vt.length) || 0} 人可见`
                                : "全部可见",
                          }),
                          e.jsx("span", {
                            className: "inline-block w-4 h-px bg-gray-200",
                          }),
                          e.jsx("span", {
                            className: "text-gray-400",
                            children: "修改",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              K &&
                e.jsx("div", {
                  className:
                    "absolute inset-0 z-[60] bg-white/90 backdrop-blur-sm flex items-center justify-center p-8",
                  children: e.jsxs("div", {
                    className: "w-full max-w-sm flex flex-col h-[70vh]",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-center mb-4 border-b border-gray-100 pb-4",
                        children: [
                          e.jsx("h3", {
                            className: "font-serif text-xl text-gray-900",
                            children: "可见范围",
                          }),
                          e.jsx("button", {
                            onClick: () => q(!1),
                            className: "text-gray-400 hover:text-gray-900",
                            children: e.jsx(Ts, { size: 24, strokeWidth: 1 }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-3 mb-4",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () =>
                              Z((Oe) => ({
                                ...Oe,
                                visibilityMode: "public",
                                visibleToContactIds: [],
                              })),
                            className:
                              "w-full flex items-center justify-between gap-4 group p-2 hover:bg-gray-50 rounded-lg transition-colors",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-serif text-gray-600 group-hover:text-gray-900 transition-colors",
                                children: "全部可见",
                              }),
                              e.jsx("div", {
                                className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${O.visibilityMode !== "selected" ? "bg-black border-black" : "border-gray-300"}`,
                                children:
                                  O.visibilityMode !== "selected" &&
                                  e.jsx("div", {
                                    className: "w-2 h-2 bg-white rounded-full",
                                  }),
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () =>
                              Z((Oe) => ({
                                ...Oe,
                                visibilityMode: "selected",
                              })),
                            className:
                              "w-full flex items-center justify-between gap-4 group p-2 hover:bg-gray-50 rounded-lg transition-colors",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-serif text-gray-600 group-hover:text-gray-900 transition-colors",
                                children: "仅谁可见",
                              }),
                              e.jsx("div", {
                                className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${O.visibilityMode === "selected" ? "bg-black border-black" : "border-gray-300"}`,
                                children:
                                  O.visibilityMode === "selected" &&
                                  e.jsx("div", {
                                    className: "w-2 h-2 bg-white rounded-full",
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      O.visibilityMode === "selected" &&
                        e.jsx("div", {
                          className:
                            "flex-1 overflow-y-auto no-scrollbar space-y-4 mb-4",
                          children: m.map((Oe) => {
                            const Qe = String(Oe.id),
                              Ye = (O.visibleToContactIds || []).includes(Qe);
                            return e.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () =>
                                  Z((Ze) => {
                                    const Ue = Array.isArray(
                                        Ze.visibleToContactIds,
                                      )
                                        ? Ze.visibleToContactIds
                                        : [],
                                      me = Ye
                                        ? Ue.filter((jt) => jt !== Qe)
                                        : [...Ue, Qe];
                                    return { ...Ze, visibleToContactIds: me };
                                  }),
                                className:
                                  "w-full flex items-center justify-between gap-4 group p-2 hover:bg-gray-50 rounded-lg transition-colors",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-10 h-10 rounded-full overflow-hidden bg-gray-100",
                                        children: e.jsx("img", {
                                          src: Oe.avatar,
                                          alt: Oe.nickname || Oe.name,
                                          className:
                                            "w-full h-full object-cover",
                                          loading: "lazy",
                                        }),
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-serif text-gray-600 group-hover:text-gray-900 transition-colors",
                                        children:
                                          Oe.remark || Oe.nickname || Oe.name,
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${Ye ? "bg-black border-black" : "border-gray-300"}`,
                                    children:
                                      Ye &&
                                      e.jsx("div", {
                                        className:
                                          "w-2 h-2 bg-white rounded-full",
                                      }),
                                  }),
                                ],
                              },
                              Qe,
                            );
                          }),
                        }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => q(!1),
                        className:
                          "w-full py-3 bg-black text-white font-serif uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors",
                        children: "确定",
                      }),
                    ],
                  }),
                }),
            ],
          }),
      ],
    });
  },
  QY = (t) =>
    Array.isArray(t)
      ? t
          .filter(
            (s) => s != null && s.id != null && String(s.id).trim() !== "",
          )
          .map((s) => {
            const n = s.name;
            let a = "未命名";
            return (
              typeof n == "string" && n.trim()
                ? (a = n.trim())
                : n != null && String(n).trim() && (a = String(n).trim()),
              {
                id: String(s.id).trim(),
                name: a,
                listCss: typeof s.listCss == "string" ? s.listCss : "",
                profileCss: typeof s.profileCss == "string" ? s.profileCss : "",
                updatedAt:
                  typeof s.updatedAt == "number" ? s.updatedAt : Date.now(),
              }
            );
          })
      : [],
  ZY = ({ onClose: t }) => {
    const {
        beautifyCustomPresets: s,
        setBeautifyCustomPresets: n,
        beautifyCustomActiveId: a,
        setBeautifyCustomActiveId: r,
        isBeautifyCustomLoaded: i,
      } = vn(),
      [o, c] = l.useState("new"),
      [d, u] = l.useState(""),
      [f, p] = l.useState(""),
      [m, h] = l.useState(""),
      [g, x] = l.useState(""),
      [y, v] = l.useState(!1),
      b = l.useRef(!1),
      N = l.useRef(null);
    l.useEffect(() => {
      if (!i || b.current) return;
      b.current = !0;
      const L = s,
        B = a;
      if (B && L.some((F) => F.id === B)) {
        const F = L.find((D) => D.id === B);
        (c(B), u(F.name), p(F.listCss ?? ""), h(F.profileCss ?? ""));
        return;
      }
      if (L.length > 0) {
        const D = [...L].sort(
          ($, P) => (P.updatedAt ?? 0) - ($.updatedAt ?? 0),
        )[0];
        (c(D.id), u(D.name), p(D.listCss ?? ""), h(D.profileCss ?? ""));
        return;
      }
      (c("new"), u(""), p(""), h(""));
    }, [i, s, a]);
    const w = (L) => {
        const B = L.target.value;
        if (B === "new") {
          (c("new"), u(""), p(""), h(""));
          return;
        }
        const F = s.find((D) => D.id === B);
        F && (c(B), u(F.name), p(F.listCss), h(F.profileCss));
      },
      _ = () => {
        const L = d.trim() || "未命名",
          B = Date.now();
        if (o === "new") {
          const F = `bc_${B}`;
          (n((D) => [
            ...D,
            { id: F, name: L, listCss: f, profileCss: m, updatedAt: B },
          ]),
            c(F),
            x("已保存为新预设"));
        } else
          (n((F) =>
            F.map((D) =>
              D.id === o
                ? { ...D, name: L, listCss: f, profileCss: m, updatedAt: B }
                : D,
            ),
          ),
            x("已保存"));
        setTimeout(() => x(""), 2e3);
      },
      A = () => {
        if (o === "new") {
          alert("请先保存预设，再应用。");
          return;
        }
        (r(o), x("已应用该预设"), setTimeout(() => x(""), 2e3));
      },
      k = () => {
        (r(null), x("已恢复默认主题"), setTimeout(() => x(""), 2e3));
      },
      C = () => {
        o !== "new" && v(!0);
      },
      M = () => {
        v(!1);
      },
      E = () => {
        if (o === "new") {
          v(!1);
          return;
        }
        (n((L) => L.filter((B) => B.id !== o)),
          a === o && r(null),
          c("new"),
          u(""),
          p(""),
          h(""),
          v(!1),
          x("已删除"),
          setTimeout(() => x(""), 2e3));
      },
      S = () => {
        const L = {
            version: 1,
            exportedAt: Date.now(),
            activeId: a,
            presets: s,
          },
          B = new Blob([JSON.stringify(L, null, 2)], {
            type: "application/json;charset=utf-8",
          }),
          F = URL.createObjectURL(B),
          D = document.createElement("a");
        ((D.href = F),
          (D.download = `chat-app-beautify-custom-${Date.now()}.json`),
          (D.rel = "noopener"),
          document.body.appendChild(D),
          D.click(),
          D.remove(),
          URL.revokeObjectURL(F),
          x("已导出"),
          setTimeout(() => x(""), 2e3));
      },
      j = () => {
        var L;
        (L = N.current) == null || L.click();
      },
      T = async (L) => {
        var F;
        const B = (F = L.target.files) == null ? void 0 : F[0];
        if (((L.target.value = ""), !!B))
          try {
            const D = await B.text(),
              $ = JSON.parse(D),
              P = Array.isArray($) ? $ : $.presets;
            if (!Array.isArray(P)) {
              alert("JSON 无效：需要为预设数组，或包含 presets 数组的对象。");
              return;
            }
            const z = QY(P);
            if (z.length === 0) {
              alert("没有有效的预设（每条需包含非空 id，可为文字或数字）。");
              return;
            }
            if (
              !window.confirm(
                `将用文件中的 ${z.length} 条预设替换当前全部预设，是否继续？`,
              )
            )
              return;
            const O = $.activeId != null ? String($.activeId).trim() : "",
              Z = O && z.some((V) => V.id === O) ? O : null,
              K = z.map((V) => ({ ...V }));
            (n(K), r(Z));
            const q = (Z ? K.find((V) => V.id === Z) : null) || K[0];
            if (!q) return;
            (c(q.id),
              u(q.name ?? ""),
              p(q.listCss ?? ""),
              h(q.profileCss ?? ""),
              x("已导入"),
              setTimeout(() => x(""), 2e3));
          } catch (D) {
            alert(
              `导入失败：${(D == null ? void 0 : D.message) || "无法解析 JSON"}`,
            );
          }
      },
      I = o === "new" ? "new" : o;
    return e.jsxs("div", {
      className: "beautify-custom-page",
      children: [
        e.jsxs("header", {
          className: "beautify-custom-header",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: t,
              className: "beautify-custom-back",
              "aria-label": "返回",
              children: e.jsx(Xr, { size: 22, strokeWidth: 1.5 }),
            }),
            e.jsxs("div", {
              className: "beautify-custom-header-copy",
              children: [
                e.jsx("p", {
                  className: "beautify-custom-kicker",
                  children: "Editorial",
                }),
                e.jsx("h1", {
                  className: "beautify-custom-title",
                  children: "自定义",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "beautify-custom-body",
          children: e.jsxs("div", {
            className: "beautify-custom-body-inner",
            children: [
              e.jsxs("div", {
                className: "beautify-custom-field",
                children: [
                  e.jsx("label", {
                    className: "beautify-custom-label",
                    htmlFor: "beautify-custom-preset",
                    children: "预设",
                  }),
                  e.jsxs(
                    "select",
                    {
                      id: "beautify-custom-preset",
                      value: I,
                      onChange: w,
                      className: "beautify-custom-select",
                      children: [
                        e.jsx("option", {
                          value: "new",
                          children: "＋ 新建预设",
                        }),
                        s.map((L) =>
                          e.jsx(
                            "option",
                            { value: L.id, children: L.name },
                            L.id,
                          ),
                        ),
                      ],
                    },
                    s.map((L) => L.id).join(""),
                  ),
                ],
              }),
              e.jsxs("div", {
                className: "beautify-custom-field",
                children: [
                  e.jsx("label", {
                    className: "beautify-custom-label",
                    htmlFor: "beautify-custom-name",
                    children: "取名",
                  }),
                  e.jsx("input", {
                    id: "beautify-custom-name",
                    type: "text",
                    value: d,
                    onChange: (L) => u(L.target.value),
                    placeholder: "预设名称",
                    className: "beautify-custom-input",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "beautify-custom-field",
                children: [
                  e.jsx("label", {
                    className: "beautify-custom-label",
                    htmlFor: "beautify-custom-list",
                    children: "聊天列表页 CSS",
                  }),
                  e.jsx("textarea", {
                    id: "beautify-custom-list",
                    value: f,
                    onChange: (L) => p(L.target.value),
                    placeholder: "仅在该页展示时生效，留空为默认",
                    rows: 8,
                    spellCheck: !1,
                    className: "beautify-custom-textarea",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "beautify-custom-field",
                children: [
                  e.jsx("label", {
                    className: "beautify-custom-label",
                    htmlFor: "beautify-custom-profile",
                    children: "我的页 CSS",
                  }),
                  e.jsx("textarea", {
                    id: "beautify-custom-profile",
                    value: m,
                    onChange: (L) => h(L.target.value),
                    placeholder: "仅在我的页展示时生效，留空为默认",
                    rows: 8,
                    spellCheck: !1,
                    className: "beautify-custom-textarea",
                  }),
                ],
              }),
              e.jsx("input", {
                ref: N,
                type: "file",
                accept: "application/json,.json",
                style: { display: "none" },
                "aria-label": "选择 JSON 文件以导入预设",
                onChange: T,
              }),
              e.jsxs("div", {
                className: "beautify-custom-actions",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: _,
                    className:
                      "beautify-custom-btn beautify-custom-btn--primary",
                    children: "保存",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: A,
                    className:
                      "beautify-custom-btn beautify-custom-btn--outline",
                    children: "应用",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: k,
                    className: "beautify-custom-btn beautify-custom-btn--muted",
                    children: "默认主题",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: C,
                    disabled: o === "new",
                    className:
                      "beautify-custom-btn beautify-custom-btn--danger",
                    children: "删除",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: S,
                    className:
                      "beautify-custom-btn beautify-custom-btn--outline",
                    children: "导出",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: j,
                    className:
                      "beautify-custom-btn beautify-custom-btn--outline",
                    children: "导入",
                  }),
                ],
              }),
              g
                ? e.jsx("p", { className: "beautify-custom-hint", children: g })
                : null,
              y
                ? e.jsxs("div", {
                    className: "beautify-custom-modal-root",
                    role: "presentation",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className: "beautify-custom-modal-backdrop",
                        "aria-label": "关闭",
                        onClick: M,
                      }),
                      e.jsxs("div", {
                        className: "beautify-custom-modal",
                        role: "alertdialog",
                        "aria-modal": "true",
                        "aria-labelledby": "beautify-delete-title",
                        children: [
                          e.jsx("p", {
                            id: "beautify-delete-title",
                            className: "beautify-custom-modal-title",
                            children: "确定删除该预设？",
                          }),
                          e.jsx("p", {
                            className: "beautify-custom-modal-desc",
                            children: "删除后无法恢复。",
                          }),
                          e.jsxs("div", {
                            className: "beautify-custom-modal-actions",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: M,
                                className:
                                  "beautify-custom-btn beautify-custom-btn--outline",
                                children: "取消",
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: E,
                                className:
                                  "beautify-custom-btn beautify-custom-btn--danger",
                                children: "删除",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          }),
        }),
      ],
    });
  },
  su = (t) => String(t ?? "").trim(),
  XY = (t) => `chat_app_moments_header_bg_${su(t) || ""}`;
function ck() {
  try {
    window.dispatchEvent(
      new CustomEvent(ku, {
        detail: {
          source: "chat_app",
          contactId: "*",
          direction: "out",
          sender: "me",
          messageType: "profile_avatar_change",
          text: "",
          timestamp: Date.now(),
        },
      }),
    );
  } catch {}
}
const eV = ({ className: t }) =>
    e.jsxs("div", {
      className: `relative w-4 h-4 flex items-center justify-center opacity-30 ${t || ""}`,
      children: [
        e.jsx("div", { className: "absolute w-full h-[0.5px] bg-gray-500" }),
        e.jsx("div", { className: "absolute h-full w-[0.5px] bg-gray-500" }),
        e.jsx("div", {
          className:
            "absolute w-2 h-2 rounded-full border-[0.5px] border-gray-500",
        }),
      ],
    }),
  tV = ({
    onDockVisibilityChange: t,
    onDockCollapseChange: s,
    onDockToggleVisibilityChange: n,
    onOpenFavorites: a,
  }) => {
    var ue, re, he, ge, J;
    const r = "chat_app_bg_image",
      i = "chat_app_bg_updated",
      {
        user: o,
        setUser: c,
        userPresets: d,
        addUserPreset: u,
        updateUserPreset: f,
        deleteUserPreset: p,
        setPaymentPassword: m,
        addToWallet: h,
        profileTheme: g,
        setProfileTheme: x,
        nightMode: y,
        setNightMode: v,
        beautifyCustomProfileCss: b,
        chatAppUserFontEnabled: N,
        setChatAppUserFontEnabled: w,
        chatAppUserFontPx: _,
        setChatAppUserFontPx: A,
      } = vn();
    l.useEffect(() => {
      g === "music" && !y && v(!0);
    }, [g]);
    const [k, C] = l.useState(!1),
      [M, E] = l.useState({ ...o }),
      [S, j] = l.useState(null);
    l.useEffect(() => {
      S && !d.some((G) => G.id === S) && j(null);
    }, [d, S]);
    const [T, I] = l.useState(!1),
      [L, B] = l.useState(!1),
      [F, D] = l.useState(""),
      [$, P] = l.useState(!1),
      [z, O] = l.useState(""),
      [Z, K] = l.useState(!1),
      [q, V] = l.useState(!1),
      [ne, le] = l.useState(!1),
      [ie, X] = l.useState(!1),
      [je, xe] = l.useState(!1),
      [ye, R] = l.useState(0),
      oe = () => {
        (C(!0), s == null || s(!0));
      };
    (l.useEffect(() => {
      if (!t) return;
      const G = !!T || !!ie || !!ne || !!je;
      return (t(G), n == null || n(G), () => t(!1));
    }, [T, ie, ne, je, t, n]),
      l.useEffect(() => {
        k || E({ ...o });
      }, [o, k]));
    const ee = async () => {
        try {
          (await be.remove(r),
            window.dispatchEvent(
              new CustomEvent(i, { detail: { backgroundImage: "" } }),
            ));
        } catch {
          alert("移出背景失败，请重试");
          return;
        }
        X(!1);
      },
      H = () => {
        const G = o,
          we = !!M.wechatIdRebind,
          Q = we ? !1 : !!(G.wechatIdLocked || M.wechatIdLocked),
          ve = su(G.wechatId),
          Ve = su(M.wechatId);
        if (Q && Ve !== ve) {
          alert("微信号 ID 已锁定，不可修改");
          return;
        }
        const Ae = Q ? ve : Ve;
        if (!Ae) {
          K(!0);
          return;
        }
        if (!Q && d.some((ht) => ht.id !== S && su(ht.wechatId) === Ae)) {
          V(!0);
          return;
        }
        const te = Q || !!Ae,
          { wechatIdRebind: Se, ...Fe } = M,
          $e = { ...G, ...Fe, wechatId: Ae, wechatIdLocked: te };
        (c($e),
          E((Xe) => ({
            ...Xe,
            wechatId: Ae,
            wechatIdLocked: te,
            wechatIdRebind: !1,
          })));
        const tt = {
          userName: Vo($e),
          wechatId: Ae,
          wechatIdLocked: te,
          avatar: $e.avatar,
          settings: $e.settings ?? "",
          realName: $e.realName ?? "",
          background: $e.background ?? "",
        };
        if (we) {
          const Xe = Vo($e),
            ht = u({
              name: Xe,
              userName: Vo($e),
              realName: $e.realName ?? "",
              wechatId: Ae,
              wechatIdLocked: te,
              avatar: $e.avatar,
              settings: $e.settings ?? "",
              background: "",
            });
          j(ht.id);
        } else
          S
            ? f(S, tt)
            : ve &&
              d.forEach((Xe) => {
                su(Xe.wechatId) === ve && f(Xe.id, tt);
              });
        (C(!1), s == null || s(!1));
      },
      Y = () => {
        (j(null),
          E((G) => ({
            ...G,
            realName: "",
            name: "我",
            settings: "",
            signature: "",
            avatar: "",
            wechatId: "",
            wechatIdLocked: !1,
            wechatIdRebind: !0,
          })),
          s == null || s(!0));
      },
      U = async (G) => {
        const we = G.target.files[0];
        if (we)
          try {
            const Q = await $r(we, 400, 0.7);
            (E({ ...M, avatar: Q }), ck());
          } catch {
            const ve = new FileReader();
            ((ve.onload = (Ve) => {
              (E({ ...M, avatar: Ve.target.result }), ck());
            }),
              ve.readAsDataURL(we));
          }
      },
      ce = (G) => {
        const we = su(G.wechatId),
          Q = String(G.userName ?? "").trim(),
          ve = String(G.realName ?? "").trim(),
          Ve = {
            name: Vo({ name: Q, realName: ve }),
            realName: ve,
            wechatId: we,
            wechatIdLocked: G.wechatIdLocked ?? !!we,
            avatar: G.avatar,
            settings: G.settings ?? "",
            background: G.background ?? "",
          };
        (E((Ae) => ({ ...Ae, ...Ve, wechatIdRebind: !1 })),
          c((Ae) => ({ ...Ae, ...Ve })),
          j(G.id),
          we &&
            (async () => {
              const Ae = await be.get(XY(we), "");
              typeof Ae == "string" &&
                Ae.trim() &&
                (E((te) => ({ ...te, background: Ae })),
                c((te) => ({ ...te, background: Ae })));
            })());
      },
      pe =
        (o == null ? void 0 : o.background) ||
        (M == null ? void 0 : M.background) ||
        "",
      se =
        (o == null ? void 0 : o.signature) ??
        (M == null ? void 0 : M.signature) ??
        "",
      Te = g === "icity" || g === "my_icity",
      ke = g === "music",
      W = !!(o.wechatIdLocked || M.wechatIdLocked) && !M.wechatIdRebind;
    return e.jsxs("div", {
      ...(Te
        ? { "data-profile-page": !0, "data-icity-variant": g }
        : ke
          ? { "data-profile-page": !0 }
          : {}),
      className: Te
        ? "profile-theme-icity flex flex-col h-full bg-[#FAFAFA] relative overflow-hidden font-sans"
        : ke
          ? "profile-theme-music flex flex-col h-full bg-[#1a1a1a] relative overflow-hidden font-sans"
          : "flex flex-col h-full bg-[#F9F7F2] relative overflow-hidden font-sans",
      children: [
        g === "default" && b
          ? e.jsx("style", {
              id: "chat-app-beautify-custom-profile",
              children: b,
            })
          : null,
        ke
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className: "profile-music-player-bar",
                  children: [
                    e.jsxs("div", {
                      className: "profile-music-vinyl-wrap",
                      children: [
                        e.jsx("div", {
                          className: "profile-music-vinyl",
                          children: e.jsx("div", {
                            className: "profile-music-vinyl-inner",
                            children: e.jsx("img", {
                              src: k ? M.avatar : o.avatar,
                              alt: "",
                              className: "profile-music-avatar-img",
                              loading: "lazy",
                            }),
                          }),
                        }),
                        k &&
                          e.jsxs("div", {
                            className: "profile-music-avatar-edit",
                            children: [
                              e.jsx(Ta, { size: 16, className: "text-white" }),
                              e.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: U,
                                className:
                                  "absolute inset-0 opacity-0 cursor-pointer rounded-full",
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "profile-music-capsule",
                      children: [
                        e.jsxs("div", {
                          className: "profile-music-capsule-left",
                          children: [
                            e.jsx("span", {
                              className: "profile-music-username",
                              children: k
                                ? M.realName
                                : (o == null ? void 0 : o.realName) ||
                                  (o == null ? void 0 : o.name) ||
                                  "—",
                            }),
                            e.jsx("span", {
                              className: "profile-music-sep-h",
                              "aria-hidden": "true",
                            }),
                            e.jsx("span", {
                              className: "profile-music-id",
                              children: k
                                ? M.wechatId
                                : (o == null ? void 0 : o.wechatId) || "—",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "profile-music-capsule-right",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              className: "profile-music-play-btn",
                              "aria-label": "播放",
                              children: e.jsx(xr, {
                                size: 10,
                                strokeWidth: 2.5,
                                fill: "currentColor",
                              }),
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "profile-music-list-btn",
                              "aria-label": "播放列表",
                              children: e.jsx(Cc, {
                                size: 18,
                                strokeWidth: 1.8,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "profile-music-topbar",
                  children: [
                    e.jsxs("div", {
                      className: "profile-music-song-row",
                      children: [
                        e.jsx("span", {
                          className: "profile-music-song-label",
                          children: "作词：",
                        }),
                        k
                          ? e.jsx("input", {
                              type: "text",
                              value: M.realName || "",
                              onChange: (G) =>
                                E({ ...M, realName: G.target.value }),
                              placeholder: "填入user姓名",
                              size: Math.max((M.realName || "").length, 4),
                              className:
                                "profile-music-edit-inline profile-music-edit-title-inline placeholder:text-[10px]",
                              "aria-label": "作词",
                            })
                          : e.jsx("h1", {
                              className: "profile-music-song-title",
                              children:
                                (o == null ? void 0 : o.realName) ||
                                (o == null ? void 0 : o.name) ||
                                "—",
                            }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "profile-music-singer-row",
                      children: [
                        e.jsx("span", {
                          className: "profile-music-singer-label",
                          children: "作曲：",
                        }),
                        k
                          ? e.jsx("input", {
                              type: "text",
                              value: M.wechatId,
                              onChange: (G) =>
                                E({ ...M, wechatId: G.target.value }),
                              placeholder: "user专属编号（必填）",
                              readOnly: W,
                              required: !W,
                              title: W
                                ? "微信号 ID 已锁定，不可修改"
                                : "微信号 ID（必填，唯一标识，保存后锁定）",
                              size: Math.max((M.wechatId || "").length, 4),
                              className: `profile-music-edit-inline profile-music-edit-singer-inline placeholder:text-[10px] ${W ? "opacity-60 cursor-not-allowed" : ""}`,
                              "aria-label": "微信号 ID",
                              "aria-required": !W,
                            })
                          : e.jsx("p", {
                              className: "profile-music-singer",
                              children:
                                (o == null ? void 0 : o.wechatId) || "—",
                            }),
                      ],
                    }),
                    (() => {
                      const G = k
                          ? (M.settings ?? "")
                          : ((o == null ? void 0 : o.settings) ??
                            (M == null ? void 0 : M.settings) ??
                            ""),
                        we = G
                          ? G.trim()
                              .split(/[,，]/)
                              .map((Ae) => Ae.trim())
                          : [],
                        Q = we.length ? we : [],
                        ve = k ? (Q.length ? Q : [""]) : Q,
                        Ve = (Ae, te) => {
                          const Se = [...ve];
                          ((Se[Ae] = te), E({ ...M, settings: Se.join("，") }));
                        };
                      return k
                        ? e.jsx("div", {
                            className:
                              "profile-music-persona-lyrics profile-music-persona-no-blur",
                            children: ve.map((Ae, te) =>
                              e.jsx(
                                "input",
                                {
                                  type: "text",
                                  value: Ae,
                                  onChange: (Se) => Ve(te, Se.target.value),
                                  className: `profile-music-persona-line-input ${te % 2 === 0 ? "profile-music-persona-line-bright" : ""}`,
                                },
                                te,
                              ),
                            ),
                          })
                        : Q.length > 0
                          ? e.jsx("div", {
                              className: "profile-music-persona-lyrics",
                              children: Q.map((Ae, te) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `profile-music-persona-line ${te % 2 === 0 ? "profile-music-persona-line-bright" : ""}`,
                                    children: Ae,
                                  },
                                  te,
                                ),
                              ),
                            })
                          : null;
                    })(),
                    e.jsx("div", {
                      className: "profile-music-progress-wrap",
                      children: e.jsxs("div", {
                        className: "profile-music-progress-track",
                        children: [
                          e.jsx("div", {
                            className: "profile-music-progress-fill",
                            style: { width: "35%" },
                          }),
                          e.jsx("div", {
                            className: "profile-music-progress-thumb",
                            style: { left: "35%" },
                          }),
                        ],
                      }),
                    }),
                    e.jsx("p", {
                      className: "profile-music-progress-caption",
                      children:
                        "他们说眼睛是一部相机，所以我想虚化所有人群，聚焦你",
                    }),
                    e.jsxs("div", {
                      className: "profile-music-controls",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className: "profile-music-ctrl-btn",
                          "aria-label": "收藏",
                          onClick: () => (a == null ? void 0 : a()),
                          children: e.jsx(Z1, { size: 20, strokeWidth: 1.8 }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => I(!0),
                          className:
                            "profile-music-ctrl-btn profile-music-ctrl-btn-prev-next profile-music-ctrl-btn-filled",
                          "aria-label": "上一首",
                          children: e.jsx(sv, {
                            size: 20,
                            strokeWidth: 2,
                            fill: "currentColor",
                          }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => le(!0),
                          className:
                            "profile-music-ctrl-btn profile-music-ctrl-btn-large profile-music-ctrl-btn-play",
                          "aria-label": "预设",
                          children: e.jsx(xr, {
                            size: 26,
                            strokeWidth: 2,
                            fill: "currentColor",
                          }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => X(!0),
                          className:
                            "profile-music-ctrl-btn profile-music-ctrl-btn-prev-next profile-music-ctrl-btn-filled",
                          "aria-label": "下一首",
                          children: e.jsx(J0, {
                            size: 20,
                            strokeWidth: 2,
                            fill: "currentColor",
                          }),
                        }),
                        k
                          ? e.jsxs("div", {
                              className: "flex items-center gap-0.5 shrink-0",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: H,
                                  className:
                                    "profile-music-ctrl-btn min-w-[2.75rem] px-1.5 text-[10px] font-bold tracking-widest text-[#1a1a1a] leading-none",
                                  "aria-label": "保存",
                                  children: "保存",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: Y,
                                  className:
                                    "profile-music-ctrl-btn min-w-[2.75rem] px-1.5 text-[10px] font-bold tracking-widest text-[#1a1a1a] leading-none",
                                  "aria-label": "新建",
                                  children: "新建",
                                }),
                              ],
                            })
                          : e.jsx("button", {
                              type: "button",
                              onClick: oe,
                              className: "profile-music-ctrl-btn",
                              "aria-label": "播放列表",
                              children: e.jsx(Cc, {
                                size: 20,
                                strokeWidth: 1.8,
                              }),
                            }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "profile-music-cover profile-music-lyrics-zone",
                  style: pe ? { backgroundImage: `url(${pe})` } : {},
                }),
              ],
            })
          : Te
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx("div", {
                    className: "profile-icity-cover shrink-0",
                    style: pe ? { backgroundImage: `url(${pe})` } : {},
                  }),
                  e.jsxs("div", {
                    className:
                      "profile-icity-header profile-icity-header-float profile-icity-header-pad",
                    children: [
                      e.jsxs("div", {
                        className: "profile-icity-avatar-wrap relative group",
                        children: [
                          e.jsx("div", {
                            children: e.jsx("img", {
                              src: k ? M.avatar : o.avatar,
                              alt: "Avatar",
                              className: "w-full h-full object-cover",
                              loading: "lazy",
                            }),
                          }),
                          k &&
                            e.jsxs("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center z-20 rounded-full bg-black/40",
                              children: [
                                e.jsx(Ta, {
                                  size: 20,
                                  className: "text-white",
                                }),
                                e.jsx("input", {
                                  type: "file",
                                  accept: "image/*",
                                  onChange: U,
                                  className:
                                    "absolute inset-0 opacity-0 cursor-pointer rounded-full",
                                }),
                              ],
                            }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "profile-icity-name-block",
                        children: k
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: M.realName || "",
                                  onChange: (G) =>
                                    E({ ...M, realName: G.target.value }),
                                  placeholder: "填入user姓名",
                                  className:
                                    "profile-icity-name-input block w-full text-center bg-transparent border-b border-[#D1D1D1] outline-none mx-auto max-w-[12rem] placeholder:text-[10px]",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: M.wechatId,
                                  onChange: (G) =>
                                    E({ ...M, wechatId: G.target.value }),
                                  placeholder: "user专属编号（必填）",
                                  readOnly: W,
                                  required: !W,
                                  title: W
                                    ? "微信号 ID 已锁定，不可修改"
                                    : "微信号 ID（必填，唯一标识，保存后锁定）",
                                  "aria-required": !W,
                                  className: `profile-icity-id-input block w-full text-center bg-transparent border-b border-[#D1D1D1] outline-none mx-auto max-w-[10rem] mt-1 placeholder:text-[10px] ${W ? "opacity-60 cursor-not-allowed" : ""}`,
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("h1", {
                                  className: "profile-icity-name",
                                  children: o.realName || o.name,
                                }),
                                e.jsxs("p", {
                                  className: "profile-icity-id",
                                  children: ["ID: ", o.wechatId],
                                }),
                              ],
                            }),
                      }),
                      e.jsxs("div", {
                        className: "profile-icity-signature-wrap",
                        children: [
                          e.jsx("span", {
                            className:
                              "profile-icity-quote profile-icity-quote-left",
                            children: "「",
                          }),
                          e.jsx("p", {
                            className: "profile-icity-signature",
                            children: se,
                          }),
                          e.jsx("span", {
                            className:
                              "profile-icity-quote profile-icity-quote-right",
                            children: "」",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "profile-icity-buttons w-full max-w-sm mx-auto",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => I(!0),
                            className: "profile-icity-btn-inner",
                            children: [
                              e.jsx(K0, { size: 16, strokeWidth: 1.2 }),
                              e.jsx("span", { children: "钱包" }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => le(!0),
                            className: "profile-icity-btn-inner",
                            children: [
                              e.jsx(Pr, { size: 16, strokeWidth: 1.2 }),
                              e.jsx("span", { children: "预设" }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => X(!0),
                            className: "profile-icity-btn-inner",
                            children: [
                              e.jsx(_o, { size: 16, strokeWidth: 1.2 }),
                              e.jsx("span", { children: "美化" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "profile-icity-main relative z-[1] flex flex-col min-h-0 profile-icity-main-with-pad",
                    children: e.jsxs("div", {
                      className:
                        "profile-icity-scroll-area flex-1 overflow-y-auto no-scrollbar pb-8",
                      children: [
                        e.jsx("div", { className: "profile-icity-divider" }),
                        e.jsxs("div", {
                          className: "profile-icity-stats",
                          children: [
                            e.jsx("span", {
                              className: "profile-icity-stats-num",
                              children: "1314",
                            }),
                            " ",
                            e.jsx("span", {
                              className: "profile-icity-stats-label",
                              children: "关注",
                            }),
                            " ·",
                            " ",
                            e.jsx("span", {
                              className: "profile-icity-stats-num",
                              children: "520",
                            }),
                            " ",
                            e.jsx("span", {
                              className: "profile-icity-stats-label",
                              children: "朋友",
                            }),
                            " ·",
                            " ",
                            e.jsx("span", {
                              className: "profile-icity-stats-num",
                              children: "5",
                            }),
                            " ",
                            e.jsx("span", {
                              className: "profile-icity-stats-label",
                              children: "笔记",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "profile-icity-white-block profile-icity-white-block-full",
                          children: e.jsxs("div", {
                            className:
                              "profile-icity-persona profile-icity-persona-inner relative",
                            children: [
                              e.jsx("div", {
                                className:
                                  "flex justify-end mb-1 gap-2 items-center",
                                children: k
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: H,
                                          className:
                                            "profile-icity-persona-btn profile-icity-persona-edit-btn hover:text-[#2D2D2D] transition-colors px-1 py-0.5 text-[10px] font-bold tracking-widest",
                                          title: "保存",
                                          "aria-label": "保存",
                                          children: "保存",
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: Y,
                                          className:
                                            "text-[10px] font-bold tracking-widest text-[#8D8D8D] hover:text-[#2D2D2D] transition-colors px-1 py-0.5",
                                          title: "清空当前编辑，重新填写",
                                          "aria-label": "新建",
                                          children: "新建",
                                        }),
                                      ],
                                    })
                                  : e.jsx("button", {
                                      type: "button",
                                      onClick: oe,
                                      className:
                                        "profile-icity-persona-btn profile-icity-persona-edit-btn hover:text-[#2D2D2D] transition-colors p-1",
                                      "aria-label": "编辑",
                                      children: e.jsx(H0, { size: 14 }),
                                    }),
                              }),
                              e.jsx("div", {
                                className: "flex-1 relative min-h-[95px]",
                                children: k
                                  ? e.jsx("textarea", {
                                      value: M.settings,
                                      onChange: (G) =>
                                        E({ ...M, settings: G.target.value }),
                                      className:
                                        "w-full h-full min-h-[80px] bg-transparent text-sm text-[#2D2D2D] focus:outline-none resize-none font-serif leading-loose p-1 placeholder:text-[12px]",
                                      placeholder: "填写user的具体设定",
                                    })
                                  : e.jsxs("div", {
                                      className:
                                        "w-full h-full min-h-[80px] relative cursor-pointer group",
                                      onClick: () => C(!0),
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 p-2 select-none pointer-events-none overflow-hidden blur-[6px] opacity-35",
                                          children: e.jsx("p", {
                                            className:
                                              "text-[#2D2D2D] text-xs font-serif leading-loose text-justify",
                                            children:
                                              "The persona settings are hidden for privacy. Tap to reveal and edit.",
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "absolute inset-0 flex flex-col items-center justify-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "w-10 h-10 rounded-full bg-white/80 border border-[#E5E5E5] flex items-center justify-center mb-1",
                                              children: e.jsx(lr, {
                                                size: 14,
                                                className:
                                                  "profile-icity-persona-icon-muted",
                                                strokeWidth: 1.5,
                                              }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[#666666] text-[9px] font-bold tracking-wider uppercase opacity-70",
                                              children: "View Persona",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                              }),
                              e.jsxs("div", {
                                className:
                                  "profile-icity-persona-icons flex items-center justify-end gap-3 mt-2 pr-1",
                                children: [
                                  e.jsx(lr, {
                                    size: 14,
                                    className:
                                      "profile-icity-persona-icon-muted",
                                    strokeWidth: 1.5,
                                  }),
                                  e.jsx(zn, {
                                    size: 14,
                                    className:
                                      "profile-icity-persona-icon-muted",
                                    strokeWidth: 1.5,
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => (a == null ? void 0 : a()),
                                    className:
                                      "profile-icity-persona-icon-btn p-0.5 rounded hover:opacity-80 transition-opacity",
                                    "aria-label": "收藏",
                                    children: e.jsx(Gi, {
                                      size: 14,
                                      className:
                                        "profile-icity-persona-icon-muted",
                                      strokeWidth: 1.5,
                                    }),
                                  }),
                                  e.jsx(Ih, {
                                    size: 14,
                                    className:
                                      "profile-icity-persona-icon-muted",
                                    strokeWidth: 1.5,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-[#E8E1D5] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 pointer-events-none animate-pulse duration-[10s]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#D8E2DC] rounded-full mix-blend-multiply filter blur-[60px] opacity-30 pointer-events-none animate-pulse duration-[8s]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 opacity-[0.03] pointer-events-none",
                    style: {
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    },
                  }),
                  e.jsxs("div", {
                    className:
                      "flex-1 overflow-y-auto no-scrollbar p-6 pt-16 relative z-10 flex flex-col",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between items-start mb-8",
                        children: [
                          e.jsxs("div", {
                            className: "flex flex-col pt-4",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-[0.3em] text-[#8D8D8D] uppercase mb-2",
                                children: "身份",
                              }),
                              k
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("input", {
                                        type: "text",
                                        value: M.realName || "",
                                        onChange: (G) =>
                                          E({ ...M, realName: G.target.value }),
                                        placeholder: "填入user姓名",
                                        className:
                                          "text-4xl font-serif text-[#2D2D2D] bg-transparent border-b border-[#D1D1D1] outline-none w-48 italic mb-2 placeholder:text-[12px]",
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-[#8D8D8D] text-xs font-mono tracking-widest",
                                            children: "ID:",
                                          }),
                                          e.jsx("input", {
                                            type: "text",
                                            value: M.wechatId,
                                            onChange: (G) =>
                                              E({
                                                ...M,
                                                wechatId: G.target.value,
                                              }),
                                            placeholder: "user专属编号（必填）",
                                            readOnly: W,
                                            required: !W,
                                            title: W
                                              ? "微信号 ID 已锁定，不可修改"
                                              : "微信号 ID（必填，唯一标识，保存后锁定）",
                                            "aria-required": !W,
                                            className: `text-[#8D8D8D] text-xs font-mono bg-transparent border-b border-[#D1D1D1] outline-none w-32 tracking-widest placeholder:text-[10px] ${W ? "opacity-60 cursor-not-allowed" : ""}`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("h1", {
                                        className:
                                          "text-5xl font-serif text-[#2D2D2D] tracking-tight italic leading-tight",
                                        children: o.realName || o.name,
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "text-[#8D8D8D] text-xs font-mono mt-2 tracking-widest",
                                        children: ["ID: ", o.wechatId],
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "relative group",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-28 h-28 rounded-[32px] rotate-3 overflow-hidden border-2 border-white shadow-lg transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105",
                                children: e.jsx("img", {
                                  src: k ? M.avatar : o.avatar,
                                  alt: "Avatar",
                                  className: "w-full h-full object-cover",
                                  loading: "lazy",
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute -z-10 top-2 right-2 w-28 h-28 rounded-[32px] border border-[#4A4A4A] opacity-20 rotate-12",
                              }),
                              k &&
                                e.jsxs("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center z-20",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "bg-black/40 backdrop-blur-sm rounded-full p-2 cursor-pointer hover:bg-black/60 transition-colors",
                                      children: e.jsx(Ta, {
                                        size: 16,
                                        className: "text-white",
                                      }),
                                    }),
                                    e.jsx("input", {
                                      type: "file",
                                      accept: "image/*",
                                      onChange: U,
                                      className:
                                        "absolute inset-0 opacity-0 cursor-pointer",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "w-full mb-8 relative",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -top-3 left-4 bg-[#2D2D2D] text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase z-20 shadow-md",
                            children: "Persona",
                          }),
                          e.jsxs("div", {
                            className:
                              "w-full min-h-[300px] bg-white/60 backdrop-blur-xl rounded-[24px] p-6 pt-10 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.03)] relative overflow-hidden group flex flex-col",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 opacity-[0.02] pointer-events-none bg-repeat",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(#000 1px, transparent 1px)",
                                  backgroundSize: "100% 24px",
                                },
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-start mb-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex gap-1",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-2 h-2 rounded-full bg-[#D4A5A5]",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-2 h-2 rounded-full bg-[#E8E1D5]",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-2 h-2 rounded-full bg-[#D8E2DC]",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "flex items-center gap-2",
                                    children: k
                                      ? e.jsxs(e.Fragment, {
                                          children: [
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: H,
                                              className:
                                                "text-[#8D8D8D] hover:text-[#2D2D2D] transition-colors px-1 text-[10px] font-bold tracking-widest",
                                              title: "保存",
                                              "aria-label": "保存",
                                              children: "保存",
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: Y,
                                              className:
                                                "text-[10px] font-bold tracking-widest text-[#8D8D8D] hover:text-[#2D2D2D] transition-colors px-1",
                                              title: "清空当前编辑，重新填写",
                                              "aria-label": "新建",
                                              children: "新建",
                                            }),
                                          ],
                                        })
                                      : e.jsx("button", {
                                          type: "button",
                                          onClick: oe,
                                          className:
                                            "text-[#8D8D8D] hover:text-[#2D2D2D] transition-colors p-1",
                                          "aria-label": "编辑",
                                          children: e.jsx(H0, { size: 18 }),
                                        }),
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "flex-1 relative",
                                children: k
                                  ? e.jsx("textarea", {
                                      value: M.settings,
                                      onChange: (G) =>
                                        E({ ...M, settings: G.target.value }),
                                      className:
                                        "w-full h-full min-h-[240px] bg-transparent text-sm text-[#2D2D2D] focus:outline-none resize-none font-serif leading-loose p-1 placeholder:text-[12px]",
                                      placeholder: "填写user的具体设定",
                                    })
                                  : e.jsxs("div", {
                                      className:
                                        "w-full h-full min-h-[240px] relative cursor-pointer group",
                                      onClick: () => C(!0),
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 p-2 opacity-30 blur-[2px] select-none pointer-events-none overflow-hidden",
                                          children: e.jsx("p", {
                                            className:
                                              "text-[#2D2D2D] text-xs font-serif leading-loose text-justify",
                                            children:
                                              "The persona settings are hidden for privacy. This section contains detailed information about the character's background, personality, and story. Tap to reveal and edit the content.",
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "absolute inset-0 flex flex-col items-center justify-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300",
                                              children: e.jsx(lr, {
                                                size: 16,
                                                className: "text-[#4A4A4A]",
                                                strokeWidth: 1.5,
                                              }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[#666666] text-[10px] font-bold tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity",
                                              children: "View Persona",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-4 gap-3 mb-4",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => I(!0),
                            className:
                              "aspect-square bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-white/70 transition-all group",
                            children: [
                              e.jsx(K0, {
                                size: 20,
                                className:
                                  "text-[#4A4A4A] group-hover:scale-110 transition-transform",
                                strokeWidth: 1.2,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider text-[#666666] uppercase",
                                children: "钱包",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => le(!0),
                            className:
                              "aspect-square bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-white/70 transition-all group",
                            children: [
                              e.jsx(Pr, {
                                size: 20,
                                className:
                                  "text-[#4A4A4A] group-hover:scale-110 transition-transform",
                                strokeWidth: 1.2,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider text-[#666666] uppercase",
                                children: "预设",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => (a == null ? void 0 : a()),
                            className:
                              "aspect-square bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-white/70 transition-all group",
                            children: [
                              e.jsx(Gi, {
                                size: 20,
                                className:
                                  "text-[#4A4A4A] group-hover:scale-110 transition-transform",
                                strokeWidth: 1.2,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider text-[#666666] uppercase",
                                children: "收藏",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => X(!0),
                            className:
                              "aspect-square bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 shadow-sm flex flex-col items-center justify-center gap-2 hover:bg-white/70 transition-all group",
                            children: [
                              e.jsx(_o, {
                                size: 20,
                                className:
                                  "text-[#4A4A4A] group-hover:scale-110 transition-transform",
                                strokeWidth: 1.2,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-wider text-[#666666] uppercase",
                                children: "美化",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        e.jsx(Os, {
          children:
            T &&
            e.jsx(We.div, {
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              transition: { type: "spring", damping: 25, stiffness: 200 },
              className:
                "chat-app-wallet-modal absolute inset-0 z-50 bg-[#FAF9F6] flex flex-col text-[#1D1C1A] font-sans",
              children: e.jsxs("div", {
                className:
                  "flex-1 overflow-y-auto min-h-0 [&::-webkit-scrollbar]:hidden relative pb-20",
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
                    className: "relative z-10 pt-16 px-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-start justify-between mb-10 border-b-[0.5px] border-[#E8DCC4] pb-8 relative",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: () => I(!1),
                            className:
                              "flex-shrink-0 w-10 h-10 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity",
                            "aria-label": "返回",
                            children: e.jsx(eV, {
                              className: "pointer-events-none",
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "flex-1 flex flex-col items-center justify-center text-center min-w-0 px-2",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "text-[9px] font-mono tracking-[0.3em] text-[#A69B8A] mb-2 flex items-center justify-center",
                                children: [
                                  e.jsx(Gm, { size: 10, className: "mr-1.5" }),
                                  " 金库专属印记",
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-baseline justify-center space-x-1",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-xl font-serif text-[#BCA37F]",
                                    children: "¥",
                                  }),
                                  e.jsxs("h1", {
                                    className:
                                      "text-5xl font-serif tracking-tighter text-[#1D1C1A]",
                                    children: [
                                      (((ue = o.wallet) == null
                                        ? void 0
                                        : ue.balance) ?? 0) >= 1e3
                                        ? ((o.wallet.balance ?? 0) / 1e3)
                                            .toFixed(2)
                                            .replace(
                                              /\B(?=(\d{3})+(?!\d))/g,
                                              ",",
                                            )
                                        : (
                                            ((re = o.wallet) == null
                                              ? void 0
                                              : re.balance) ?? 0
                                          ).toLocaleString("zh-CN", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }),
                                      (((he = o.wallet) == null
                                        ? void 0
                                        : he.balance) ?? 0) >= 1e3 &&
                                        e.jsx("span", {
                                          className: "text-xl text-gray-400",
                                          children: "k",
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[8px] font-mono text-[#A69B8A] tracking-widest mt-2",
                                children: "流动性状态：卓越 // 资产已校验",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => B(!0),
                            className:
                              "flex-shrink-0 w-12 h-12 rounded-full border-[0.5px] border-[#BCA37F] bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center relative group cursor-pointer hover:shadow-[0_0_15px_rgba(188,163,127,0.2)] transition-all",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-1 rounded-full border-[0.5px] border-dashed border-[#E8DCC4] wallet-card-spin",
                              }),
                              e.jsx(U0, {
                                size: 14,
                                className: "text-[#8C7A5F]",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute -bottom-1 bg-white px-1 text-[7px] font-mono text-[#A69B8A] border-[0.5px] border-[#E8DCC4] whitespace-nowrap",
                                children: "设置密码",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-3 gap-3 mb-12 relative",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute top-1/2 left-[-24px] right-[-24px] h-[0.5px] bg-[#E8DCC4]/50 -translate-y-1/2 -z-10",
                          }),
                          [
                            {
                              icon: wl,
                              label: "加密支付",
                              title: "加密转账",
                              onClick: () => alert("请在聊天窗口使用转账"),
                            },
                            {
                              icon: Mc,
                              label: "光学扫描",
                              title: "光学校验",
                              onClick: () => P(!0),
                            },
                            {
                              icon: PM,
                              label: "接收资产",
                              title: "资产接收",
                              onClick: () =>
                                alert("请通过聊天中的转账或红包接收资产"),
                            },
                          ].map((G, we) =>
                            e.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: G.onClick,
                                className:
                                  "group relative bg-white border-[0.5px] border-[#E8DCC4] p-3 shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_20px_rgba(188,163,127,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center h-24 overflow-hidden",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-80 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700",
                                  }),
                                  e.jsx(G.icon, {
                                    size: 18,
                                    strokeWidth: 1.5,
                                    className:
                                      "text-[#5A554F] mb-3 group-hover:scale-110 transition-transform",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[11px] font-bold tracking-widest text-[#1D1C1A]",
                                    children: G.title,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[7px] font-mono tracking-widest text-[#A69B8A] mt-1 scale-90",
                                    children: G.label,
                                  }),
                                ],
                              },
                              we,
                            ),
                          ),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-center mb-6",
                            children: [
                              e.jsx("h2", {
                                className:
                                  "text-[11px] font-mono tracking-[0.3em] text-[#8C7A5F]",
                                children: "交易明细账本",
                              }),
                              e.jsxs("div", {
                                className: "flex space-x-1",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "w-1 h-1 rounded-full bg-[#BCA37F]",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "w-1 h-1 rounded-full bg-[#E8DCC4]",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "w-1 h-1 rounded-full bg-[#E8DCC4]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              (
                                ((ge = o.wallet) == null
                                  ? void 0
                                  : ge.transactions) || []
                              ).map((G) => {
                                const we = new Date(G.timestamp || 0),
                                  Q = we
                                    .toISOString()
                                    .slice(0, 10)
                                    .replace(/-/g, "."),
                                  ve = we.toTimeString().slice(0, 12),
                                  Ve =
                                    G.type === "income" ? G.amount : -G.amount,
                                  Ae = G.note || "",
                                  te = G.contactName,
                                  Se =
                                    Ae.replace(/^转账给好友:\s*/, "").trim() ||
                                    "交易",
                                  Fe = te
                                    ? G.type === "income"
                                      ? `来自 ${te}`
                                      : `转给 ${te}`
                                    : G.type === "income"
                                      ? "对公入账"
                                      : "主账户流动资金",
                                  $e =
                                    "0x" +
                                    (G.id || "").slice(-8).padStart(8, "0") +
                                    "..." +
                                    (G.id || "").slice(0, 4).toUpperCase(),
                                  tt = [
                                    `31°13'43"N`,
                                    `35°33'12"N`,
                                    `45°28'00"N`,
                                    `51°30'40"N`,
                                  ][
                                    Math.abs(
                                      (G.id || "")
                                        .split("")
                                        .reduce(
                                          (Xe, ht) => Xe + ht.charCodeAt(0),
                                          0,
                                        ),
                                    ) % 4
                                  ];
                                return e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "relative group cursor-crosshair",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "absolute -inset-2 border-[0.5px] border-[#BCA37F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#8C7A5F]",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#8C7A5F]",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "bg-white p-5 border-[0.5px] border-gray-100 shadow-sm relative z-10",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex justify-between items-start mb-4",
                                            children: [
                                              e.jsxs("div", {
                                                children: [
                                                  e.jsx("h3", {
                                                    className:
                                                      "text-sm font-serif font-medium tracking-tight text-[#1D1C1A] mb-1",
                                                    children: Se,
                                                  }),
                                                  e.jsxs("p", {
                                                    className:
                                                      "text-[10px] text-[#A69B8A] flex items-center",
                                                    children: [
                                                      e.jsx(U0, {
                                                        size: 10,
                                                        className:
                                                          "mr-1 opacity-50",
                                                      }),
                                                      " ",
                                                      Fe,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: "text-right",
                                                children: [
                                                  e.jsxs("span", {
                                                    className: `text-lg font-mono tracking-tighter ${Ve > 0 ? "text-[#3E7B5B]" : "text-[#1D1C1A]"}`,
                                                    children: [
                                                      Ve > 0 ? "+" : "",
                                                      Math.abs(
                                                        Ve,
                                                      ).toLocaleString(),
                                                    ],
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-[9px] font-mono tracking-widest text-[#8C7A5F] mt-1 bg-[#FAF9F6] border-[0.5px] border-[#E8DCC4] inline-block px-1.5 py-0.5",
                                                    children:
                                                      G.type === "income"
                                                        ? "收入"
                                                        : "支出",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "grid grid-cols-3 gap-2 border-t-[0.5px] border-dashed border-[#E8DCC4] pt-3 text-[8px] font-mono text-[#A69B8A] tracking-wider",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex flex-col space-y-0.5",
                                                children: [
                                                  e.jsx("span", {
                                                    className: "text-[#C4B7A1]",
                                                    children: "交易时间戳",
                                                  }),
                                                  e.jsxs("span", {
                                                    className: "text-[#5A554F]",
                                                    children: [
                                                      Q,
                                                      " ",
                                                      ve.slice(0, 8),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex flex-col space-y-0.5 border-l-[0.5px] border-[#E8DCC4] pl-3",
                                                children: [
                                                  e.jsx("span", {
                                                    className: "text-[#C4B7A1]",
                                                    children: "校验哈希值",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[#5A554F] truncate pr-2",
                                                    children: $e,
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: