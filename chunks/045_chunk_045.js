                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  e.jsx("button", {
                                                    type: "button",
                                                    className:
                                                      "icity-lyric-ctrl-btn",
                                                    "aria-label": "下一则",
                                                    onClick: () => le("quote"),
                                                    children: e.jsx("svg", {
                                                      width: "18",
                                                      height: "18",
                                                      viewBox: "0 0 24 24",
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeWidth: "2",
                                                      children: e.jsx("path", {
                                                        d: "M13 17l5-5-5-5M6 17l5-5-5-5",
                                                      }),
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
                                }),
                              }),
                            })
                          : null,
                        ze === "groups"
                          ? e.jsx(e.Fragment, {
                              children:
                                Pt &&
                                e.jsx("section", {
                                  className: "mt-2 px-5 sm:px-8",
                                  children: e.jsx("div", {
                                    className: "icity-group-rail-wrap",
                                    "data-rail-variant": ct,
                                    children: e.jsx("div", {
                                      className:
                                        "icity-group-rail no-scrollbar",
                                      children: sn.map((lt) => {
                                        if (lt === ya) {
                                          const Ht =
                                            (d == null ? void 0 : d.name) ||
                                            "全部";
                                          return e.jsx(
                                            "button",
                                            {
                                              type: "button",
                                              role: "button",
                                              className: `icity-group-chip ${ss === "全部" ? "icity-group-chip-active" : ""}`,
                                              onClick: () => {
                                                (navigator.vibrate &&
                                                  navigator.vibrate(20),
                                                  _s("全部"));
                                              },
                                              onKeyDown: (is) => {
                                                (is.key === "Enter" ||
                                                  is.key === " ") &&
                                                  (is.preventDefault(),
                                                  navigator.vibrate &&
                                                    navigator.vibrate(20),
                                                  _s("全部"));
                                              },
                                              "aria-pressed": ss === "全部",
                                              title:
                                                ss === "全部"
                                                  ? "当前显示全部会话"
                                                  : `显示全部（当前：${ss}）`,
                                              children: e.jsx("span", {
                                                className:
                                                  "icity-group-chip-text",
                                                children: Ht,
                                              }),
                                            },
                                            ya,
                                          );
                                        }
                                        if (lt === xa) {
                                          const Ht =
                                            (ln == null ? void 0 : ln.label) ||
                                            "群聊";
                                          return e.jsx(
                                            "button",
                                            {
                                              type: "button",
                                              role: "button",
                                              className: `icity-group-chip ${ss === vo ? "icity-group-chip-active" : ""}`,
                                              onClick: () => {
                                                (navigator.vibrate &&
                                                  navigator.vibrate(20),
                                                  _s((is) =>
                                                    is === vo ? "全部" : vo,
                                                  ));
                                              },
                                              onKeyDown: (is) => {
                                                (is.key === "Enter" ||
                                                  is.key === " ") &&
                                                  (is.preventDefault(),
                                                  navigator.vibrate &&
                                                    navigator.vibrate(20),
                                                  _s((os) =>
                                                    os === vo ? "全部" : vo,
                                                  ));
                                              },
                                              "aria-pressed": ss === vo,
                                              title:
                                                ss === vo
                                                  ? "再次点击取消筛选"
                                                  : "筛选群聊",
                                              children: e.jsx("span", {
                                                className:
                                                  "icity-group-chip-text",
                                                children: Ht,
                                              }),
                                            },
                                            xa,
                                          );
                                        }
                                        const it = lt;
                                        return e.jsx(
                                          "button",
                                          {
                                            type: "button",
                                            role: "button",
                                            className: `icity-group-chip ${ss === it ? "icity-group-chip-active" : ""}`,
                                            onClick: () => {
                                              (navigator.vibrate &&
                                                navigator.vibrate(20),
                                                _s((Ht) =>
                                                  Ht === it ? "全部" : it,
                                                ));
                                            },
                                            onKeyDown: (Ht) => {
                                              (Ht.key === "Enter" ||
                                                Ht.key === " ") &&
                                                (Ht.preventDefault(),
                                                navigator.vibrate &&
                                                  navigator.vibrate(20),
                                                _s((is) =>
                                                  is === it ? "全部" : it,
                                                ));
                                            },
                                            "aria-pressed": ss === it,
                                            title:
                                              ss === it
                                                ? "再次点击取消筛选"
                                                : `筛选 ${it}`,
                                            children: e.jsx("span", {
                                              className:
                                                "icity-group-chip-text",
                                              children: it,
                                            }),
                                          },
                                          it,
                                        );
                                      }),
                                    }),
                                  }),
                                }),
                            })
                          : null,
                      ],
                    },
                    ze,
                  ),
                ),
                e.jsx("section", {
                  className: "mt-3 pb-28",
                  children:
                    qt.length === 0
                      ? e.jsx("div", {
                          className:
                            "flex flex-col items-center justify-center text-gray-400 py-16",
                          children: e.jsx("p", {
                            className: "text-sm font-serif italic",
                            children: "暂无对话",
                          }),
                        })
                      : je === "vertical"
                        ? e.jsx("div", {
                            className: "icity-list-vertical",
                            children: qt.map((ze) => {
                              const lt = Ft(ze),
                                it = $t(ze),
                                is =
                                  (
                                    (lt == null ? void 0 : lt.remark) ||
                                    (lt == null ? void 0 : lt.nickname) ||
                                    (lt == null ? void 0 : lt.name) ||
                                    (ze.isGroup ? ze.groupName : "") ||
                                    "未命名"
                                  ).trim() || it,
                                os = is.length > 4 ? `${is.slice(0, 4)}…` : is;
                              return e.jsxs(
                                "div",
                                {
                                  className: "icity-chat-row",
                                  onClick: () => t(ze.id),
                                  role: "button",
                                  tabIndex: 0,
                                  onKeyDown: (as) => {
                                    (as.key === "Enter" || as.key === " ") &&
                                      (as.preventDefault(), t(ze.id));
                                  },
                                  children: [
                                    e.jsx("div", {
                                      className: "icity-chat-name-v",
                                      title: is,
                                      children: os,
                                    }),
                                    e.jsxs("div", {
                                      className: "icity-chat-content",
                                      children: [
                                        e.jsx("p", {
                                          className: "icity-chat-msg",
                                          children: ze.lastMessage || "",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center space-x-2",
                                          children: [
                                            e.jsx("span", {
                                              className: "icity-chat-time-meta",
                                              children: Jt(ze.timestamp),
                                            }),
                                            ze.unread > 0
                                              ? e.jsx("span", {
                                                  className:
                                                    "w-1 h-1 bg-black rounded-full",
                                                })
                                              : null,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                ze.id,
                              );
                            }),
                          })
                        : e.jsx("div", {
                            children: qt.map((ze) => {
                              var os;
                              const lt = Ft(ze),
                                it = $t(ze),
                                Ht = (
                                  (lt == null ? void 0 : lt.remark) ||
                                  (lt == null ? void 0 : lt.nickname) ||
                                  (lt == null ? void 0 : lt.name) ||
                                  (ze.isGroup ? ze.groupName : "") ||
                                  "未命名"
                                ).trim(),
                                is = ze.isGroup === !0;
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "icity-chat-item px-7 py-5 flex items-center",
                                  onClick: () => t(ze.id),
                                  children: [
                                    e.jsxs("div", {
                                      className: "relative flex-shrink-0",
                                      children: [
                                        is
                                          ? (os = ze.settings) != null &&
                                            os.groupAvatar
                                            ? e.jsx("img", {
                                                src: ze.settings.groupAvatar,
                                                alt: "",
                                                className:
                                                  "icity-chat-avatar-img w-14 h-14 object-cover",
                                                loading: "lazy",
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "icity-chat-avatar-img w-14 h-14 bg-gray-100 flex items-center justify-center",
                                                children: e.jsx(Vi, {
                                                  size: 22,
                                                  className: "text-gray-500",
                                                  strokeWidth: 1.5,
                                                }),
                                              })
                                          : e.jsx("img", {
                                              src:
                                                lt == null ? void 0 : lt.avatar,
                                              alt:
                                                lt == null ? void 0 : lt.name,
                                              className:
                                                "icity-chat-avatar-img w-14 h-14 object-cover",
                                              loading: "lazy",
                                            }),
                                        ze.unread > 0
                                          ? e.jsx("div", {
                                              className:
                                                "absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-600 rounded-full",
                                            })
                                          : null,
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "ml-4 flex-grow min-w-0",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex justify-between items-baseline mb-1",
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "icity-chat-name text-[0.8125rem] truncate",
                                              children: Ht || it,
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "icity-chat-time text-[0.6875rem]",
                                              children: Jt(ze.timestamp),
                                            }),
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "icity-chat-last text-sm truncate pr-4",
                                          children: ze.lastMessage || "",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                ze.id,
                              );
                            }),
                          }),
                }),
                Z &&
                  e.jsx("div", {
                    className:
                      "fixed inset-0 z-[80] bg-black/20 flex items-end justify-center",
                    onClick: () => K(!1),
                    children: e.jsxs("div", {
                      className:
                        "w-full max-w-md bg-white rounded-t-3xl px-5 pt-4 pb-6",
                      style: {
                        paddingBottom:
                          "max(1.25rem, env(safe-area-inset-bottom, 16px))",
                      },
                      onClick: (ze) => ze.stopPropagation(),
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gray-400",
                                  children: "Stories",
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-lg font-bold tracking-tight text-gray-900",
                                  children: "选择展示的 3 个人",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              className:
                                "w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50",
                              onClick: () => K(!1),
                              "aria-label": "关闭",
                              children: e.jsx(Ts, {
                                size: 18,
                                strokeWidth: 2.2,
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mt-4 text-xs text-gray-500",
                          children: [
                            "已选 ",
                            Math.min(3, (q || []).length),
                            " / 3",
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "mt-3 max-h-[55vh] overflow-y-auto icity-hide-scrollbar divide-y divide-gray-50 rounded-2xl border border-gray-100",
                          children: (a || [])
                            .filter((ze) => ze && ze.id)
                            .map((ze) => {
                              const lt = String(ze.id),
                                it = (q || []).some((os) => String(os) === lt),
                                Ht = (q || []).length < 3,
                                is =
                                  ze.remark ||
                                  ze.nickname ||
                                  ze.name ||
                                  "未命名";
                              return e.jsxs(
                                "button",
                                {
                                  type: "button",
                                  className:
                                    "w-full px-4 py-3 flex items-center gap-3 text-left",
                                  onClick: () => {
                                    V((os) => {
                                      const as = Array.isArray(os)
                                          ? os.map(String)
                                          : [],
                                        vs = as.includes(lt);
                                      let ts = as;
                                      return (
                                        vs
                                          ? (ts = as.filter((ys) => ys !== lt))
                                          : Ht && (ts = [...as, lt]),
                                        es(ts),
                                        ts
                                      );
                                    });
                                  },
                                  disabled: !it && !Ht,
                                  children: [
                                    e.jsx("img", {
                                      src: ze.avatar,
                                      alt: "",
                                      className:
                                        "w-10 h-10 rounded-full object-cover bg-gray-100",
                                    }),
                                    e.jsxs("div", {
                                      className: "min-w-0 flex-1",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "font-semibold text-gray-900 truncate",
                                          children: is,
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "text-xs text-gray-400 truncate",
                                          children: ze.name
                                            ? `@${ze.name}`
                                            : "",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: `w-5 h-5 rounded-full border flex items-center justify-center ${it ? "bg-black border-black" : "border-gray-300"}`,
                                      "aria-hidden": "true",
                                      children: it
                                        ? e.jsx("span", {
                                            className:
                                              "text-white text-[0.75rem] leading-none",
                                            children: "✓",
                                          })
                                        : null,
                                    }),
                                  ],
                                },
                                `pick-${lt}-${String(ze.avatar || "")}`,
                              );
                            }),
                        }),
                        e.jsxs("div", {
                          className: "mt-4 flex gap-3",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              className:
                                "flex-1 h-11 rounded-2xl border border-gray-200 font-semibold text-gray-700",
                              onClick: () => {
                                const ze = Lt.slice(0, 3);
                                (V(ze), es(ze));
                              },
                              children: "重置为最近",
                            }),
                            e.jsx("button", {
                              type: "button",
                              className:
                                "flex-1 h-11 rounded-2xl bg-black text-white font-semibold disabled:opacity-40",
                              onClick: () => K(!1),
                              disabled: (q || []).length !== 3,
                              children: "确定",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            })
          : e.jsx("div", {
              className:
                "flex-1 relative flex items-center justify-center p-4 overflow-hidden mt-4 mb-20",
              children:
                bt === 0
                  ? e.jsx("div", {
                      className:
                        "flex flex-col items-center justify-center text-gray-400",
                      children: e.jsx("p", {
                        className: "text-sm font-serif italic",
                        children: "暂无对话",
                      }),
                    })
                  : e.jsx("div", {
                      className: "relative w-full max-w-sm aspect-[3/4]",
                      style: yt,
                      onTouchStart: cs,
                      onTouchMove: Ne,
                      onTouchEnd: Je,
                      children: Array.from({ length: Math.min(bt, Nt) }).map(
                        (ze, lt) => {
                          var ms, Cs;
                          const it = ns(p + lt),
                            Ht = Vt[it];
                          if (!Ht) return null;
                          const is = Ft(Ht),
                            os = $t(Ht),
                            as = Ht.isGroup === !0,
                            {
                              transform: vs,
                              opacity: ts,
                              zIndex: ys,
                              pointerEvents: Vs,
                              transitionProperty: pt,
                              transitionDuration: qe,
                              transitionTimingFunction: dt,
                              transitionDelay: xt,
                            } = Ge(lt, h, _, k),
                            zt = lt === 0;
                          return e.jsxs(
                            "div",
                            {
                              className: `
                      chat-list-stacked-card absolute top-0 left-0 w-full h-full
                      bg-[#FFFCF8] border border-white/60 overflow-hidden
                      rounded-[40px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)]
                      flex flex-col
                      ${zt && x ? "cursor-grabbing" : "cursor-grab"}
                    `,
                              style: {
                                transform: vs,
                                opacity: ts,
                                zIndex: ys,
                                pointerEvents: Vs,
                                transitionProperty: pt,
                                transitionDuration: qe,
                                transitionTimingFunction: dt,
                                transitionDelay: xt,
                              },
                              onClick: () => !x && t(Ht.id),
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-pink-100/30 rounded-full blur-[50px] pointer-events-none",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute bottom-[-10%] left-[-10%] w-[150px] h-[150px] bg-blue-100/30 rounded-full blur-[40px] pointer-events-none",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex-1 p-8 flex flex-col items-center justify-center text-center relative z-10",
                                  children: [
                                    e.jsxs("div", {
                                      className: "relative mb-6 group",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 bg-gray-200 rounded-[30px] rotate-6 scale-95 transition-transform group-hover:rotate-12 opacity-50",
                                        }),
                                        as
                                          ? e.jsx("div", {
                                              className:
                                                "relative w-32 h-32 rounded-[30px] overflow-hidden shadow-sm border border-gray-200 bg-gray-100 flex items-center justify-center",
                                              children:
                                                (ms = Ht.settings) != null &&
                                                ms.groupAvatar
                                                  ? e.jsx("img", {
                                                      src: Ht.settings
                                                        .groupAvatar,
                                                      alt: "",
                                                      className:
                                                        "w-full h-full object-cover",
                                                      loading: "lazy",
                                                    })
                                                  : e.jsx(Vi, {
                                                      size: 48,
                                                      className:
                                                        "text-gray-500",
                                                      strokeWidth: 1.5,
                                                    }),
                                            })
                                          : e.jsx("img", {
                                              src:
                                                is == null ? void 0 : is.avatar,
                                              alt:
                                                is == null ? void 0 : is.name,
                                              className:
                                                "relative w-32 h-32 rounded-[30px] object-cover shadow-sm bg-white p-1",
                                              loading: "lazy",
                                            }),
                                        Ht.unread > 0 &&
                                          e.jsx("div", {
                                            className:
                                              "absolute -top-2 -right-2 min-w-[24px] h-6 px-1.5 bg-[#FFB7B2] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm z-20",
                                            children: Ht.unread,
                                          }),
                                        Ht.isPinned &&
                                          e.jsx("div", {
                                            className:
                                              "absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-sm border border-gray-50 z-20",
                                            children: e.jsx(W0, {
                                              size: 14,
                                              className:
                                                "text-gray-400 rotate-45",
                                              fill: "currentColor",
                                            }),
                                          }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-3 w-full",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("h2", {
                                              className:
                                                "text-2xl font-serif text-gray-800 tracking-tight",
                                              children:
                                                os || (as ? "群聊" : "未命名"),
                                            }),
                                            !as &&
                                              (is == null
                                                ? void 0
                                                : is.remark) &&
                                              e.jsx("p", {
                                                className:
                                                  "text-xs text-gray-400 font-medium tracking-widest uppercase mt-1",
                                                children: is.name,
                                              }),
                                            as &&
                                              e.jsxs("p", {
                                                className:
                                                  "text-xs text-gray-400 font-medium tracking-widest uppercase mt-1",
                                                children: [
                                                  (((Cs = Ht.memberIds) == null
                                                    ? void 0
                                                    : Cs.length) ?? 0) + 1,
                                                  " 人",
                                                ],
                                              }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-8 h-[2px] bg-gray-200 mx-auto rounded-full",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[0.625rem] text-gray-400 font-medium tracking-widest uppercase",
                                          children: Jt(Ht.timestamp),
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "mt-6 w-full relative",
                                      children: e.jsxs("p", {
                                        className:
                                          "text-gray-500 text-sm leading-relaxed line-clamp-2 font-light italic px-4",
                                        children: ['"', Ht.lastMessage, '"'],
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "px-8 py-5 border-t border-gray-100/50 flex justify-between items-center bg-white/40 backdrop-blur-sm",
                                  children: [
                                    e.jsx("button", {
                                      className:
                                        "p-2 text-gray-300 hover:text-[#FFB7B2] transition-colors",
                                      onClick: (us) => Be(us, Ht.id),
                                      children: e.jsx(_n, {
                                        size: 20,
                                        strokeWidth: 1.5,
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className: "flex gap-1",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full bg-gray-300",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full bg-gray-200",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full bg-gray-100",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] text-gray-300 font-medium tracking-widest",
                                      children: String(it + 1).padStart(2, "0"),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `${Ht.id}-${lt}`,
                          );
                        },
                      ),
                    }),
            }),
        !F &&
          e.jsx("div", {
            className:
              "absolute bottom-32 left-1/2 -translate-x-1/2 z-[110] pointer-events-auto",
            children: e.jsxs("div", {
              className:
                "chat-list-widget-capsule bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-full px-2 py-2 flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl",
              children: [
                e.jsxs("button", {
                  type: "button",
                  onClick: At,
                  className:
                    "chat-list-widget-weather flex items-center gap-2 px-3 py-1.5 bg-blue-50/50 rounded-full hover:bg-blue-100/50 transition-colors cursor-pointer",
                  children: [
                    e.jsx(ao, {
                      size: 14,
                      className: `text-blue-400 ${L.loading ? "animate-pulse" : ""}`,
                      fill: "currentColor",
                    }),
                    e.jsx("span", {
                      className: "text-xs font-medium text-gray-600",
                      children: L.loading ? "..." : `${L.temp}°`,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "chat-list-widget-music flex items-center gap-2 px-2 border-l border-r border-gray-200/50",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center animate-spin-slow",
                      children: e.jsx(vr, {
                        size: 10,
                        className: "text-white",
                      }),
                    }),
                    e.jsx("div", {
                      className: "flex flex-col w-20 overflow-hidden",
                      children: e.jsx("span", {
                        className:
                          "chat-list-widget-music-title text-[0.625rem] font-medium text-gray-800 whitespace-nowrap animate-marquee",
                        children: "Lover - Taylor Swift",
                      }),
                    }),
                  ],
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: (ze) => {
                    (ze.stopPropagation(), ze.preventDefault(), xs());
                  },
                  className:
                    "chat-list-widget-hide-btn w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center text-white shadow-md hover:bg-black transition-colors cursor-pointer",
                  title: "隐藏小组件",
                  "aria-label": "隐藏小组件",
                  children: e.jsx(ea, { size: 20 }),
                }),
              ],
            }),
          }),
      ],
    });
  },
  Lf = () => `opening-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  Fl = "chat",
  zl = "meet",
  RY = ({
    initialSets: t = [],
    onSave: s,
    onClose: n,
    showPhoneCase: a = !0,
    caseSize: r,
    contactName: i,
  }) => {
    const [o, c] = l.useState(() =>
        Array.isArray(t) && t.length > 0
          ? t.map((A) => ({
              id: A.id || Lf(),
              name: typeof A.name == "string" ? A.name : "未命名",
              scene: A.scene === zl ? zl : Fl,
              lines: Array.isArray(A.lines)
                ? A.lines
                : [A.text != null ? String(A.text) : ""],
            }))
          : [{ id: Lf(), name: "默认", scene: Fl, lines: [""] }],
      ),
      [d, u] = l.useState(null),
      [f, p] = l.useState(null),
      m = (A, k) => {
        const C = [...o];
        ((C[A] = { ...C[A], name: k }), c(C));
      },
      h = (A, k) => {
        const C = [...o];
        ((C[A] = { ...C[A], scene: k === zl ? zl : Fl }), c(C));
      },
      g = (A, k, C) => {
        const M = [...o],
          E = [...(M[A].lines || [])];
        for (; E.length <= k; ) E.push("");
        ((E[k] = C), (M[A] = { ...M[A], lines: E }), c(M));
      },
      x = (A) => {
        const k = [...o],
          C = [...(k[A].lines || []), ""];
        ((k[A] = { ...k[A], lines: C }), c(k), p(C.length - 1));
      },
      y = (A, k) => {
        const C = [...o],
          M = (C[A].lines || []).filter((E, S) => S !== k);
        ((C[A] = { ...C[A], lines: M.length > 0 ? M : [""] }),
          c(C),
          f === k && p(null));
      },
      v = () => {
        const A = {
          id: Lf(),
          name: `开场白 ${o.length + 1}`,
          scene: Fl,
          lines: [""],
        };
        (c([...o, A]), u(A.id));
      },
      b = (A) => {
        var M, E;
        const k = o.filter((S, j) => j !== A),
          C =
            k.length > 0
              ? k
              : [{ id: Lf(), name: "默认", scene: Fl, lines: [""] }];
        (c(C),
          d === o[A].id
            ? u(((M = C[0]) == null ? void 0 : M.id) ?? null)
            : d &&
              (C.some((j) => j.id === d) ||
                u(((E = C[0]) == null ? void 0 : E.id) ?? null)));
      },
      N = () => {
        const A = o
          .map((k) => ({
            id: k.id,
            name: (k.name || "").trim() || "未命名",
            scene: k.scene === zl ? zl : Fl,
            lines: (k.lines || []).map((C) => String(C).trim()).filter(Boolean),
          }))
          .filter((k) => k.lines.length > 0);
        s(
          A.length > 0 ? A : [{ id: Lf(), name: "默认", scene: Fl, lines: [] }],
        );
      },
      w = (A) => u((k) => (k === A ? null : A)),
      _ = a ? "max(44px, calc(env(safe-area-inset-top, 0px) + 16px))" : "0px";
    return e.jsxs(We.div, {
      initial: { opacity: 0, y: "6%" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "6%" },
      transition: { type: "spring", damping: 26, stiffness: 280 },
      className:
        "absolute inset-0 z-50 flex flex-col overflow-hidden bg-[#fcfcfb]",
      style: {
        paddingTop: _,
        background:
          "linear-gradient(180deg, #fefefe 0%, #fcfcfb 50%, #fafaf9 100%)",
      },
      children: [
        e.jsxs("header", {
          className:
            "relative shrink-0 flex items-center justify-between px-4 py-4",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: () => {
                (navigator.vibrate && navigator.vibrate(20), n());
              },
              className:
                "group flex items-baseline gap-1.5 py-2 pr-1 border-b-2 border-transparent transition-colors hover:border-[#2d2a26]",
              "aria-label": "返回",
              children: [
                e.jsx("span", {
                  className:
                    "font-serif text-[22px] italic text-[#2d2a26] leading-none",
                  children: "‹",
                }),
                e.jsx("span", {
                  className:
                    "text-[13px] font-medium tracking-wide text-[#6b6560] group-hover:text-[#2d2a26]",
                  children: "返回",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute left-0 right-0 flex justify-center pointer-events-none",
              children: e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  e.jsx("span", {
                    className:
                      "font-serif text-[15px] font-semibold italic tracking-tight text-[#2d2a26]",
                    children: "开场白",
                  }),
                  e.jsx("span", {
                    className:
                      "font-mono text-[8px] uppercase tracking-[0.3em] text-[#9a9389] mt-0.5",
                    children: "开场白",
                  }),
                ],
              }),
            }),
            e.jsx("button", {
              type: "button",
              onClick: N,
              className:
                "group flex items-baseline py-2 pl-1 border-b-2 border-transparent transition-colors hover:border-[#2d2a26]",
              "aria-label": "保存",
              children: e.jsx("span", {
                className:
                  "text-[13px] font-medium tracking-wide text-[#6b6560] group-hover:text-[#2d2a26]",
                children: "保存",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "shrink-0 h-px w-full bg-gradient-to-r from-transparent via-[#e8e6e3] to-transparent",
        }),
        e.jsx("div", {
          className: "shrink-0 px-5 pt-4 pb-4",
          children: e.jsxs("div", {
            className:
              "mx-auto max-w-sm flex items-baseline gap-3 border-l-2 border-[#2d2a26]/25 pl-3 py-0.5",
            children: [
              e.jsx("span", {
                className:
                  "font-mono text-[10px] font-bold tabular-nums text-[#9a9389] uppercase tracking-widest",
                children: "说明",
              }),
              e.jsx("p", {
                className:
                  "font-serif text-[13px] italic leading-snug text-[#3d3934]",
                children:
                  "每组可选「线上（聊天）」或「线下（遇见）」；线上在聊天档案里选，线下在遇见剧情设置里选。",
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "min-h-0 flex-1 overflow-y-auto px-4 pb-32 no-scrollbar",
          children: e.jsxs("div", {
            className: "mx-auto max-w-sm",
            children: [
              e.jsxs("div", {
                className: "mb-4 flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(Ar, {
                        size: 12,
                        className: "text-[#9a9389]",
                        strokeWidth: 2,
                      }),
                      e.jsx("span", {
                        className:
                          "font-mono text-[9px] uppercase tracking-widest text-[#9a9389]",
                        children: "多组开场白",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: v,
                    className:
                      "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#e0ddd9] text-[10px] font-bold uppercase tracking-widest text-[#5a5652] hover:bg-[#2d2a26] hover:text-white hover:border-[#2d2a26] transition-colors",
                    children: [
                      e.jsx(ea, { size: 12, strokeWidth: 2.5 }),
                      "添加一组",
                    ],
                  }),
                ],
              }),
              e.jsx(Os, {
                mode: "popLayout",
                children: o.map((A, k) => {
                  const C = d === A.id,
                    M =
                      A.lines && A.lines[0]
                        ? String(A.lines[0]).trim().slice(0, 24)
                        : "（暂无内容）";
                  return e.jsxs(
                    We.div,
                    {
                      initial: { opacity: 0, y: 8 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.98 },
                      transition: {
                        type: "spring",
                        damping: 22,
                        stiffness: 220,
                      },
                      layout: !0,
                      className:
                        "mb-4 rounded-xl border border-[#eeece9] bg-white/80 overflow-hidden",
                      children: [
                        e.jsxs("div", {
                          role: "button",
                          tabIndex: 0,
                          onClick: () => w(A.id),
                          onKeyDown: (E) =>
                            (E.key === "Enter" || E.key === " ") && w(A.id),
                          className:
                            "flex items-center gap-3 px-4 py-3 border-b border-[#f0eeeb] bg-[#fafaf9] cursor-pointer hover:bg-[#f5f4f2] transition-colors",
                          children: [
                            e.jsx(aa, {
                              size: 18,
                              className: `text-[#9a9389] shrink-0 transition-transform ${C ? "rotate-180" : ""}`,
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1 text-left",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "font-serif text-[14px] font-medium text-[#2d2a26] truncate",
                                      children: A.name || "未命名",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "shrink-0 font-mono text-[9px] uppercase tracking-[0.2em] text-[#9a9389]",
                                      children:
                                        A.scene === zl
                                          ? e.jsxs("span", {
                                              className:
                                                "flex items-center gap-1.5",
                                              children: [
                                                e.jsx(Vi, {
                                                  size: 10,
                                                  strokeWidth: 1.8,
                                                  className: "text-[#9a9389]",
                                                }),
                                                "遇见",
                                              ],
                                            })
                                          : e.jsxs("span", {
                                              className:
                                                "flex items-center gap-1.5",
                                              children: [
                                                e.jsx(Ar, {
                                                  size: 10,
                                                  strokeWidth: 1.8,
                                                  className: "text-[#9a9389]",
                                                }),
                                                "聊天",
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "font-mono text-[10px] text-[#9a9389] truncate mt-0.5",
                                  children: M,
                                }),
                              ],
                            }),
                            o.length > 1 &&
                              e.jsx("button", {
                                type: "button",
                                onClick: (E) => {
                                  (E.stopPropagation(), b(k));
                                },
                                className:
                                  "p-1.5 rounded-lg text-[#9a9389] hover:bg-[#f5e6e4] hover:text-[#c45c4a] transition-colors",
                                title: "删除此组",
                                "aria-label": "删除此组",
                                children: e.jsx(_n, {
                                  size: 14,
                                  strokeWidth: 1.8,
                                }),
                              }),
                          ],
                        }),
                        e.jsx(Os, {
                          children:
                            C &&
                            e.jsx(We.div, {
                              initial: { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: { height: 0, opacity: 0 },
                              transition: { duration: 0.2 },
                              className: "overflow-hidden",
                              children: e.jsxs("div", {
                                className:
                                  "p-3 pt-2 border-t border-[#f0eeeb] bg-white",
                                children: [
                                  e.jsxs("div", {
                                    className: "mb-2",
                                    children: [
                                      e.jsx("label", {
                                        className:
                                          "font-mono text-[9px] uppercase tracking-widest text-[#9a9389] block mb-1",
                                        children: "组名称",
                                      }),
                                      e.jsx("input", {
                                        type: "text",
                                        value: A.name,
                                        onChange: (E) => m(k, E.target.value),
                                        onClick: (E) => E.stopPropagation(),
                                        placeholder: "命名此组开场白",
                                        className:
                                          "w-full rounded-lg border border-[#eeece9] bg-[#fafaf9] px-3 py-2 font-serif text-[14px] text-[#2d2a26] placeholder:text-[#b8b2a8] outline-none focus:ring-2 focus:ring-[#2d2a26]/20",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "mb-4 mt-4",
                                    onClick: (E) => E.stopPropagation(),
                                    children: [
                                      e.jsx("label", {
                                        className:
                                          "font-mono text-[9px] uppercase tracking-widest text-[#9a9389] block mb-2",
                                        children: "使用场景",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex gap-2 rounded-xl bg-[#fafaf9] p-1 border border-[#eeece9]",
                                        children: [
                                          e.jsxs("button", {
                                            type: "button",
                                            onClick: () => h(k, Fl),
                                            className: `flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 transition-all duration-200 ${A.scene === Fl ? "bg-[#2d2a26] text-white shadow-sm" : "text-[#6b6560] hover:text-[#2d2a26]"}`,
                                            children: [
                                              e.jsx(Ar, {
                                                size: 16,
                                                strokeWidth: 1.5,
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "font-serif text-[13px]",
                                                children: "聊天",
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "font-mono text-[9px] opacity-80",
                                                children: "线上",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("button", {
                                            type: "button",
                                            onClick: () => h(k, zl),
                                            className: `flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 transition-all duration-200 ${A.scene === zl ? "bg-[#2d2a26] text-white shadow-sm" : "text-[#6b6560] hover:text-[#2d2a26]"}`,
                                            children: [
                                              e.jsx(Vi, {
                                                size: 16,
                                                strokeWidth: 1.5,
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "font-serif text-[13px]",
                                                children: "遇见",
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "font-mono text-[9px] opacity-80",
                                                children: "线下",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-3 mt-3",
                                    children: [
                                      (A.lines || [""]).map((E, S) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex gap-2 items-stretch",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-[#2d2a26]",
                                                style: {
                                                  background:
                                                    S === 0
                                                      ? "linear-gradient(135deg, #2d2a26 0%, #3d3934 100%)"
                                                      : "linear-gradient(135deg, #e8e6e3 0%, #e0ddd9 100%)",
                                                  color:
                                                    S === 0
                                                      ? "#fff"
                                                      : "#5a5652",
                                                  boxShadow:
                                                    S === 0
                                                      ? "0 2px 6px rgba(45,42,38,0.2)"
                                                      : "0 1px 3px rgba(0,0,0,0.06)",
                                                },
                                                children: S + 1,
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "relative min-w-0 flex-1 rounded-lg bg-[#fafaf9] border border-[#eeece9] overflow-hidden focus-within:ring-2 focus-within:ring-[#2d2a26]/20 focus-within:ring-offset-1",
                                                children: [
                                                  e.jsx("textarea", {
                                                    value: E,
                                                    onChange: (j) =>
                                                      g(k, S, j.target.value),
                                                    onFocus: () => p(S),
                                                    onBlur: () => p(null),
                                                    onClick: (j) =>
                                                      j.stopPropagation(),
                                                    placeholder:
                                                      S === 0
                                                        ? "输入第一句…"
                                                        : `第 ${S + 1} 条`,
                                                    rows: 2,
                                                    className:
                                                      "w-full resize-none border-none bg-transparent p-3 font-serif text-[14px] leading-relaxed text-[#2d2a26] placeholder:text-[#b8b2a8] outline-none",
                                                  }),
                                                  (A.lines || []).length > 1 &&
                                                    e.jsx("button", {
                                                      type: "button",
                                                      onClick: (j) => {
                                                        (j.stopPropagation(),
                                                          y(k, S));
                                                      },
                                                      className:
                                                        "absolute right-2 top-2 z-10 rounded-lg p-1.5 text-[#9a9389] hover:bg-[#f5e6e4] hover:text-[#c45c4a] transition-colors",
                                                      title: "删除此条",
                                                      "aria-label": "删除此条",
                                                      children: e.jsx(_n, {
                                                        size: 12,
                                                        strokeWidth: 1.8,
                                                      }),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          },
                                          `${A.id}-${S}`,
                                        ),
                                      ),
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: (E) => {
                                          (E.stopPropagation(), x(k));
                                        },
                                        className:
                                          "flex w-full items-center justify-center gap-2 py-2 rounded-lg border border-dashed border-[#e0ddd9] text-[10px] font-bold uppercase tracking-widest text-[#9a9389] hover:border-[#2d2a26]/40 hover:text-[#2d2a26] transition-colors",
                                        children: [
                                          e.jsx(ea, {
                                            size: 12,
                                            strokeWidth: 2.5,
                                          }),
                                          "添加一条",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                        }),
                      ],
                    },
                    A.id,
                  );
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
function rk(t) {
  if (!t) return [{ id: "default", name: "默认", scene: "chat", lines: [""] }];
  if (Array.isArray(t) && t.length > 0) {
    const s = t[0];
    if (typeof s == "string")
      return [{ id: "legacy", name: "默认", scene: "chat", lines: t }];
    if (s && typeof s == "object" && Array.isArray(s.lines))
      return t.map((n, a) => ({
        id: n.id || `opening-${a}`,
        name: typeof n.name == "string" ? n.name : "未命名",
        scene: n.scene === "meet" ? "meet" : "chat",
        lines: n.lines,
      }));
  }
  return [{ id: "default", name: "默认", scene: "chat", lines: [""] }];
}
const JA = ({
    contact: t,
    onBack: s,
    onSendMessage: n,
    onViewMoments: a,
    showPhoneCase: r = !0,
    caseSize: i,
  }) => {
    const {
        updateContact: o,
        deleteContact: c,
        groups: d,
        userPresets: u,
        getNpcPool: f,
        upsertNpcPoolItem: p,
        deleteNpcPoolItem: m,
        setNpcPoolItemStatus: h,
        updateNpcPoolWithAI: g,
        createChat: x,
        startVideoCall: y,
        startPhoneCall: v,
      } = vn(),
      [b, N] = l.useState(!1),
      [w, _] = l.useState(!1),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(!1),
      [E, S] = l.useState(null),
      [j, T] = l.useState({
        name: "",
        persona: "",
        relationTag: "",
        setting: "",
      }),
      I = l.useRef(null),
      L = l.useRef(null),
      B = () => {
        const ee = {
            name: t.name,
            nickname: t.nickname,
            gender: t.gender,
            socialId: t.socialId,
            phone: t.phone,
            region: t.region,
            signature: t.signature,
            avatar: t.avatar,
            portrait: t.portrait,
            momentsBg: t.momentsBg,
            setting: t.setting,
            openingLines: t.openingLines || [],
            hideFromCrossApps: t.hideFromCrossApps === !0,
          },
          H =
            "data:text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(ee, null, 2)),
          Y = document.createElement("a");
        (Y.setAttribute("href", H),
          Y.setAttribute("download", `${t.name || "character"}_profile.json`),
          document.body.appendChild(Y),
          Y.click(),
          Y.remove());
      },
      F = () => {
        var ee;
        (ee = I.current) == null || ee.click();
      },
      D = (ee) => {
        const H = ee.target.files[0];
        if (!H) return;
        const Y = new FileReader();
        ((Y.onload = (U) => {
          try {
            const ce = JSON.parse(U.target.result),
              pe = {
                name: ce.name || t.name,
                nickname: ce.nickname || t.nickname,
                gender: ce.gender || t.gender,
                socialId: ce.socialId || t.socialId,
                phone: ce.phone || t.phone,
                region: ce.region || t.region,
                signature: ce.signature || t.signature,
                avatar: ce.avatar || t.avatar,
                portrait: ce.portrait || t.portrait,
                momentsBg: ce.momentsBg || t.momentsBg,
                setting: ce.setting || t.setting,
                openingLines:
                  ce.openingLines !== void 0 && ce.openingLines !== null
                    ? rk(ce.openingLines)
                    : t.openingLines || [],
                hideFromCrossApps:
                  ce.hideFromCrossApps !== void 0
                    ? ce.hideFromCrossApps === !0
                    : t.hideFromCrossApps === !0,
              };
            (o(t.id, pe), alert("角色导入成功！"));
          } catch {
            alert("导入失败，请检查文件格式是否正确。");
          }
        }),
          Y.readAsText(H),
          (ee.target.value = ""));
      },
      [$, P] = l.useState({
        name: (t == null ? void 0 : t.name) || "",
        nickname: (t == null ? void 0 : t.nickname) || "",
        remark: (t == null ? void 0 : t.remark) || "",
        region: (t == null ? void 0 : t.region) || "",
        group: (t == null ? void 0 : t.group) || "默认分组",
        setting: (t == null ? void 0 : t.setting) || "",
        portrait: (t == null ? void 0 : t.portrait) || "",
        boundUserPresetId: (t == null ? void 0 : t.boundUserPresetId) || "",
        hideFromCrossApps: (t == null ? void 0 : t.hideFromCrossApps) === !0,
      });
    if (
      (l.useEffect(() => {
        t &&
          P({
            name: t.name || "",
            nickname: t.nickname || "",
            remark: t.remark || "",
            region: t.region || "",
            group: t.group || "默认分组",
            setting: t.setting || "",
            portrait: t.portrait || "",
            boundUserPresetId: t.boundUserPresetId || "",
            hideFromCrossApps: t.hideFromCrossApps === !0,
          });
      }, [t == null ? void 0 : t.id]),
      !t)
    )
      return null;
    const z = typeof f == "function" ? f(t.id) : [],
      O = (t == null ? void 0 : t.npcPoolUpdateEnabled) !== !1,
      Z = (t == null ? void 0 : t.npcPoolOnlyEnabled) === !0,
      K = () => {
        o(t.id, { npcPoolUpdateEnabled: !O });
      },
      q = () => {
        o(t.id, { npcPoolOnlyEnabled: !Z });
      },
      V = (ee) => {
        if (!ee) return;
        const H = ee.id || ee.name;
        (S(H),
          T({
            name: ee.name || "",
            persona: ee.persona || "",
            relationTag: ee.relationTag || "",
            setting: ee.setting || "",
          }));
      },
      ne = () => {
        (S(null), T({ name: "", persona: "", relationTag: "", setting: "" }));
      },
      le = (ee) => {
        if (!ee) return;
        const H = String(ee.name || "").trim(),
          Y = String(j.name || "").trim();
        if (!Y) {
          alert("名字不能为空");
          return;
        }
        if (
          !(p == null
            ? void 0
            : p(t.id, {
                name: Y,
                persona: String(j.persona || "").trim(),
                relationTag: String(j.relationTag || "").trim(),
                setting: String(j.setting || "").trim(),
                settingSource: "manual",
                status: ee.status || "active",
              }))
        ) {
          alert("不能将「用户」或「该联系人本人」作为 NPC 写入池中。");
          return;
        }
        (H && Y !== H && (m == null || m(t.id, H)), ne());
      },
      ie = () => {
        (o(t.id, $), N(!1));
      },
      X = () => {
        Si(t) ||
          (window.confirm("确定要删除该联系人吗？相关的聊天记录也会被删除。") &&
            (c(t.id), s()));
      },
      je = () => {
        navigator.vibrate && navigator.vibrate(20);
        const ee = String(t.phone ?? "").trim();
        if (!ee) {
          alert("请先在「编辑资料」中为该联系人填写手机号");
          return;
        }
        v(ee);
      },
      xe = async () => {
        navigator.vibrate && navigator.vibrate(20);
        try {
          const ee = x(t.id);
          await y(ee);
        } catch {}
      },
      ye = (ee) => {
        const H = ee.target.files[0];
        if (H) {
          const Y = new FileReader();
          ((Y.onload = (U) => {
            (o(t.id, { portrait: U.target.result }), _(!1));
          }),
            Y.readAsDataURL(H));
        }
      },
      R = () => {
        const ee = prompt("请输入肖像图链接 (URL):");
        ee && (o(t.id, { portrait: ee }), _(!1));
      },
      oe = {
        backgroundColor: "#faf9f6",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
      };
    return b
      ? e.jsxs("div", {
          className:
            "chat-app-contact-detail flex flex-col h-full font-sans relative overflow-hidden",
          style: oe,
          children: [
            e.jsxs("div", {
              className:
                "px-6 py-5 pt-14 flex items-center justify-between sticky top-0 z-20 bg-[#faf9f6]/80 backdrop-blur-md",
              children: [
                e.jsx("button", {
                  onClick: () => N(!1),
                  className:
                    "p-2 -ml-2 text-[#4a4a4a] hover:bg-black/5 rounded-full transition-colors",
                  children: e.jsx(un, { size: 24, strokeWidth: 1.5 }),
                }),
                e.jsx("span", {
                  className:
                    "font-serif text-lg text-[#4a4a4a] tracking-wide italic",
                  children: "编辑资料",
                }),
                e.jsx("button", {
                  onClick: ie,
                  className:
                    "px-5 py-2 bg-[#2c2c2c] text-[#faf9f6] rounded-full text-xs font-bold tracking-widest shadow-lg hover:bg-black transition-all hover:scale-105",
                  children: "保存",
                }),
              ],
            }),
            e.jsx("div", {
              className: "p-6 space-y-8 overflow-y-auto no-scrollbar",
              children: e.jsxs("div", {
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                        children: "名字 (AI 名字)",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: $.name,
                        onChange: (ee) => P({ ...$, name: ee.target.value }),
                        className:
                          "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all font-serif text-lg",
                        placeholder: "AI 名字",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                        children: "昵称 (微信昵称)",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: $.nickname,
                        onChange: (ee) =>
                          P({ ...$, nickname: ee.target.value }),
                        className:
                          "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all font-serif text-lg",
                        placeholder: "微信昵称",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                        children: "备注",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: $.remark,
                        onChange: (ee) => P({ ...$, remark: ee.target.value }),
                        className:
                          "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all font-serif text-lg",
                        placeholder: "添加备注",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                        children: "地区",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: $.region,
                        onChange: (ee) => P({ ...$, region: ee.target.value }),
                        className:
                          "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all font-serif text-lg",
                        placeholder: "设置地区",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                        children: "分组",
                      }),
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx("select", {
                            value: $.group,
                            onChange: (ee) =>
                              P({ ...$, group: ee.target.value }),
                            className:
                              "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all appearance-none font-serif text-lg",
                            children: d.map((ee) =>
                              e.jsx("option", { value: ee, children: ee }, ee),
                            ),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",
                            children: e.jsx("div", {
                              className:
                                "w-2 h-2 border-r-2 border-b-2 border-[#9e9e9e] rotate-45",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                        children: Si(t)
                          ? "帮助回复口吻（人设）"
                          : "角色人设 (AI 设定)",
                      }),
                      Si(t) &&
                        e.jsx("p", {
                          className:
                            "text-[11px] text-[#9e9e9e] leading-relaxed",
                          children:
                            "只改说话风格；核心仍是解答本机使用问题，教程检索与免责声明等规则不变。",
                        }),
                      e.jsx("textarea", {
                        value: $.setting,
                        onChange: (ee) => P({ ...$, setting: ee.target.value }),
                        className:
                          "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all font-serif text-sm min-h-[120px] resize-y",
                        placeholder: Si(t)
                          ? "例如：像耐心店员、用「你」称呼、句尾加一句小鼓励……"
                          : "描述 AI 的性格、背景等...",
                      }),
                    ],
                  }),
                  !Si(t) &&
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx("label", {
                          className:
                            "flex items-center gap-2 text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                          children: "绑定用户人设",
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsxs("select", {
                              value: $.boundUserPresetId || "",
                              onChange: (ee) =>
                                P({ ...$, boundUserPresetId: ee.target.value }),
                              className:
                                "w-full bg-white border border-[#e0e0e0] rounded-xl px-5 py-4 text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-1 focus:ring-[#2c2c2c] transition-all appearance-none font-serif text-lg",
                              children: [
                                e.jsx("option", {
                                  value: "",
                                  children: "默认 (我)",
                                }),
                                u.map((ee) =>
                                  e.jsxs(
                                    "option",
                                    {
                                      value: ee.id,
                                      children: [
                                        ee.name,
                                        ee.wechatId ? ` · ${ee.wechatId}` : "",
                                      ],
                                    },
                                    ee.id,
                                  ),
                                ),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",
                              children: e.jsx("div", {
                                className:
                                  "w-2 h-2 border-r-2 border-b-2 border-[#9e9e9e] rotate-45",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  !Si(t) &&
                    e.jsx("div", {
                      className: "space-y-3",
                      children: e.jsxs("div", {
                        className:
                          "flex items-start justify-between gap-4 rounded-xl border border-[#e0e0e0] bg-white px-4 py-3.5",
                        children: [
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-bold text-[#9e9e9e] tracking-[0.2em]",
                                children: "跨应用隐藏",
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-1 text-[12px] text-[#6a6a6a] leading-relaxed",
                                children:
                                  "开启后，该角色不会出现在回忆封存室、阅读、查岗、遇见、情侣空间中。",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            role: "switch",
                            "aria-checked": $.hideFromCrossApps === !0,
                            onClick: () =>
                              P((ee) => ({
                                ...ee,
                                hideFromCrossApps: ee.hideFromCrossApps !== !0,
                              })),
                            className: `relative mt-0.5 h-7 w-12 shrink-0 rounded-full transition-colors ${$.hideFromCrossApps === !0 ? "bg-[#2c2c2c]" : "bg-[#d5d5d5]"}`,
                            children: e.jsx("span", {
                              className: `absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${$.hideFromCrossApps === !0 ? "left-6" : "left-1"}`,
                            }),
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
          ],
        })
      : e.jsxs("div", {
          className:
            "chat-app-contact-detail flex flex-col h-full font-sans relative overflow-hidden",
          style: oe,
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-[#ffe0e0] rounded-full blur-[80px] opacity-40 pointer-events-none",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-[#e0f0ff] rounded-full blur-[60px] opacity-40 pointer-events-none",
            }),
            e.jsxs("div", {
              className:
                "px-6 py-5 pt-14 flex items-center justify-between sticky top-0 z-20",
              children: [
                e.jsx("button", {
                  onClick: () => {
                    (navigator.vibrate && navigator.vibrate(20), s());
                  },
                  className:
                    "w-10 h-10 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full text-[#4a4a4a] border border-white/50 shadow-sm hover:bg-white transition-all",
                  children: e.jsx(un, { size: 20, strokeWidth: 1.5 }),
                }),
                e.jsx("button", {
                  onClick: () => N(!0),
                  className:
                    "px-4 py-2 bg-white/50 backdrop-blur-md rounded-full text-[#4a4a4a] text-xs font-bold tracking-widest border border-white/50 shadow-sm hover:bg-white transition-all",
                  children: "编辑",
                }),
              ],
            }),
            e.jsx("input", {
              type: "file",
              ref: I,
              onChange: D,
              accept: ".json",
              className: "hidden",
            }),
            e.jsx("input", {
              type: "file",
              ref: L,
              onChange: ye,
              accept: "image/*",
              className: "hidden",
            }),
            w &&
              e.jsxs("div", {
                className:
                  "absolute inset-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "w-full max-w-sm bg-white p-2 pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rotate-[1deg] transition-transform duration-500 hover:rotate-0 relative",
                    onClick: (ee) => ee.stopPropagation(),
                    children: [
                      e.jsx("button", {
                        onClick: () => _(!1),
                        className:
                          "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                        children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
                      }),
                      e.jsxs("div", {
                        className:
                          "border border-[#e0e0e0] p-6 relative overflow-hidden",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-32 h-32 bg-[#fdfbf7] rounded-bl-full -z-10",
                          }),
                          e.jsxs("div", {
                            className: "mb-8",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-serif text-2xl text-[#2c2c2c] tracking-tight italic",
                                children: "设置肖像",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                                children: "更新角色头像",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsxs("button", {
                                onClick: () => {
                                  var ee;
                                  return (ee = L.current) == null
                                    ? void 0
                                    : ee.click();
                                },
                                className:
                                  "w-full flex items-center justify-between p-4 border border-[#2c2c2c] group hover:bg-[#2c2c2c] transition-colors duration-300",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx(Za, {
                                        size: 18,
                                        strokeWidth: 1.5,
                                        className:
                                          "text-[#2c2c2c] group-hover:text-white transition-colors",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-serif text-sm text-[#2c2c2c] group-hover:text-white transition-colors",
                                        children: "本地上传",
                                      }),
                                    ],
                                  }),
                                  e.jsx(Kn, {
                                    size: 14,
                                    className:
                                      "text-[#9e9e9e] group-hover:text-white transition-colors",
                                  }),
                                ],
                              }),
                              e.jsxs("button", {
                                onClick: R,
                                className:
                                  "w-full flex items-center justify-between p-4 border border-[#2c2c2c] group hover:bg-[#2c2c2c] transition-colors duration-300",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx(n3, {
                                        size: 18,
                                        strokeWidth: 1.5,
                                        className:
                                          "text-[#2c2c2c] group-hover:text-white transition-colors",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-serif text-sm text-[#2c2c2c] group-hover:text-white transition-colors",
                                        children: "网络链接",
                                      }),
                                    ],
                                  }),
                                  e.jsx(Kn, {
                                    size: 14,
                                    className:
                                      "text-[#9e9e9e] group-hover:text-white transition-colors",
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
                    className: "absolute inset-0 -z-10",
                    onClick: () => _(!1),
                  }),
                ],
              }),
            C &&
              !Si(t) &&
              e.jsxs("div", {
                className:
                  "absolute inset-0 z-50 bg-[#faf9f6] flex flex-col overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 pointer-events-none opacity-[0.045]",
                    style: {
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    },
                  }),
                  e.jsx("div", {
                    className:
                      "px-6 pt-14 pb-3 sticky top-0 z-20 bg-[#faf9f6]/85 backdrop-blur-md border-b border-[#e0e0e0]/60",
                    children: e.jsxs("div", {
                      className: "max-w-md mx-auto",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: () => M(!1),
                              className:
                                "w-10 h-10 flex items-center justify-center bg-white/60 backdrop-blur-md rounded-full text-[#4a4a4a] border border-white/50 shadow-sm hover:bg-white transition-all",
                              "aria-label": "返回",
                              children: e.jsx(un, {
                                size: 20,
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "text-center flex-1",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "font-serif text-lg text-[#2c2c2c] tracking-wide italic",
                                  children: "NPC 关系池",
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-[10px] text-[#b0b0b0] tracking-[0.35em] mt-1 uppercase",
                                  children: "档案 / 索引",
                                }),
                              ],
                            }),
                            e.jsx("div", { className: "w-10 h-10" }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-3 flex items-center justify-between gap-3",
                          children: [
                            e.jsxs("div", {
                              className:
                                "text-[10px] text-[#9e9e9e] tracking-widest",
                              children: [
                                z.length,
                                " 人 · ",
                                Z ? "仅池内" : "开放来源",
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "px-3 py-1.5 rounded-full border border-[#e0e0e0] bg-white text-[10px] font-bold tracking-widest text-[#2c2c2c]",
                                  children: O ? "AI更新：开" : "AI更新：关",
                                }),
                                e.jsx("div", {
                                  className:
                                    "px-3 py-1.5 rounded-full border border-[#e0e0e0] bg-white text-[10px] font-bold tracking-widest text-[#2c2c2c]",
                                  children: Z ? "仅池内：开" : "仅池内：关",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "mt-3 border-t border-dashed border-[#d0d0d0] opacity-70",
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-2 flex items-center justify-between gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[10px] text-[#9e9e9e] tracking-[0.35em] font-bold",
                              children: "索引",
                            }),
                            e.jsxs("div", {
                              className: "text-xs font-serif text-[#2c2c2c]",
                              children: [
                                "活跃",
                                " ",
                                e.jsx("span", {
                                  className: "font-bold",
                                  children: (z || []).filter(
                                    (ee) =>
                                      ((ee == null ? void 0 : ee.status) ||
                                        "active") === "active",
                                  ).length,
                                }),
                                " ",
                                "· 静音",
                                " ",
                                e.jsx("span", {
                                  className: "font-bold",
                                  children: (z || []).filter(
                                    (ee) =>
                                      ((ee == null ? void 0 : ee.status) ||
                                        "active") === "muted",
                                  ).length,
                                }),
                                " ",
                                "· 已故",
                                " ",
                                e.jsx("span", {
                                  className: "font-bold",
                                  children: (z || []).filter(
                                    (ee) =>
                                      ((ee == null ? void 0 : ee.status) ||
                                        "active") === "deceased",
                                  ).length,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-y-auto no-scrollbar px-6 py-6",
                    children: e.jsxs("div", {
                      className: "max-w-md mx-auto space-y-4 pb-10",
                      children: [
                        e.jsxs("div", {
                          className:
                            "w-full bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm overflow-hidden",
                          children: [
                            e.jsx("div", {
                              className: "p-5 border-b border-[#e0e0e0]/60",
                              children: e.jsxs("div", {
                                className:
                                  "flex items-start justify-between gap-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "font-serif text-base font-bold text-[#2c2c2c] italic",
                                        children: "控制台",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-[#9e9e9e] tracking-widest mt-1",
                                        children:
                                          "管理 NPC 池的更新策略与来源限制",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-col items-end gap-2",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "inline-flex rounded-full border border-[#e0e0e0] bg-white/70 overflow-hidden",
                                        children: [
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: K,
                                            className: `px-3 py-1.5 text-[10px] font-bold tracking-widest transition-colors ${O ? "bg-[#2c2c2c] text-white" : "text-[#2c2c2c] hover:bg-[#f5f5f5]"}`,
                                            title:
                                              "发圈/回评时是否允许自动补充 NPC 池",
                                            children: O
                                              ? "AI更新 开"
                                              : "AI更新 关",
                                          }),
                                          e.jsx("div", {
                                            className: "w-[1px] bg-[#e0e0e0]",
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: q,
                                            className: `px-3 py-1.5 text-[10px] font-bold tracking-widest transition-colors ${Z ? "bg-[#2c2c2c] text-white" : "text-[#2c2c2c] hover:bg-[#f5f5f5]"}`,
                                            title:
                                              "开启后：评论/发圈 NPC 仅能来自本池",
                                            children: Z
                                              ? "仅池内 开"
                                              : "仅池内 关",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-[#b0b0b0] tracking-widest",
                                        children: Z
                                          ? "已限制来源：仅池内 NPC"
                                          : "来源开放：可从设定生成",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className: "p-5",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center mb-4",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#faf9f6] border border-[#e0e0e0]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "w-1.5 h-1.5 rounded-full bg-[#2c2c2c]/60",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-bold tracking-[0.25em] text-[#2c2c2c]",
                                          children: "SOCIAL CIRCLE",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[10px] text-[#b0b0b0] tracking-widest",
                                      children: "v1",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "grid grid-cols-2 gap-3",
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: async () => {
                                        try {
                                          const ee = await (g == null
                                            ? void 0
                                            : g(t.id, { force: !0 }));
                                          if (!ee) return;
                                          alert(
                                            `NPC池已更新：新增${ee.add}，更新${ee.update}，状态${ee.setStatus}`,
                                          );
                                        } catch (ee) {
                                          alert(
                                            `更新失败：${(ee == null ? void 0 : ee.message) ?? String(ee)}`,
                                          );
                                        }
                                      },
                                      className:
                                        "py-3 rounded-xl bg-[#2c2c2c] text-white text-[10px] font-bold tracking-[0.25em] hover:bg-black transition-colors",
                                      title: "手动调用一次 API 更新 NPC 池",
                                      children: "手动更新",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        const ee = prompt("NPC 名字：");
                                        if (!ee) return;
                                        const H =
                                            prompt(
                                              "NPC 简短人设/关系口吻（可选）：",
                                            ) || "",
                                          Y =
                                            prompt(
                                              "NPC 设定原文/摘录（可选，后续也可自动补全）：",
                                            ) || "";
                                        (p == null
                                          ? void 0
                                          : p(t.id, {
                                              name: ee,
                                              persona: H,
                                              setting: Y,
                                              settingSource: Y ? "manual" : "",
                                              status: "active",
                                            })) ||
                                          alert(
                                            "不能将「用户」或「该联系人本人」作为 NPC 写入池中。",
                                          );
                                      },
                                      className:
                                        "py-3 rounded-xl border border-[#e0e0e0] bg-[#fdfbf7] text-[#2c2c2c] text-[10px] font-bold tracking-[0.25em] hover:bg-white transition-colors",
                                      title: "手动新增一个 NPC",
                                      children: "添加 NPC",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "my-4 border-t border-dashed border-[#d0d0d0] opacity-70",
                                }),
                                e.jsxs("div", {
                                  className: "grid grid-cols-2 gap-3",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "rounded-xl border border-[#e0e0e0] bg-white/60 p-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[10px] text-[#9e9e9e] tracking-widest",
                                          children: "自动补全设定",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "mt-1 text-xs font-serif font-bold text-[#2c2c2c]",
                                          children: O ? "启用" : "停用",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "rounded-xl border border-[#e0e0e0] bg-white/60 p-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[10px] text-[#9e9e9e] tracking-widest",
                                          children: "来源限制",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "mt-1 text-xs font-serif font-bold text-[#2c2c2c]",
                                          children: Z ? "仅池内" : "开放",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        z.length === 0
                          ? e.jsx("div", {
                              className:
                                "py-10 text-center text-xs text-[#9e9e9e] font-serif italic",
                              children: "暂无 NPC。可手动添加或点“手动更新”。",
                            })
                          : e.jsx("div", {
                              className: "space-y-2",
                              children: z.slice(0, 120).map((ee) =>
                                (() => {
                                  const H = (ee.id || ee.name) === E;
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-start gap-3 p-4 rounded-2xl border border-[#e0e0e0] bg-white/80 shadow-sm",
                                      children: [
                                        e.jsx("div", {
                                          className: "w-1.5 rounded-full mt-1",
                                          style: {
                                            height: 54,
                                            background:
                                              (ee.status || "active") ===
                                              "muted"
                                                ? "#cbd5e1"
                                                : (ee.status || "active") ===
                                                    "deceased"
                                                  ? "#e2e8f0"
                                                  : "#2c2c2c",
                                            opacity:
                                              (ee.status || "active") ===
                                              "active"
                                                ? 0.7
                                                : 0.55,
                                          },
                                        }),
                                        e.jsxs("div", {
                                          className: "flex-1 min-w-0",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                H
                                                  ? e.jsx("input", {
                                                      value: j.name,
                                                      onChange: (Y) =>
                                                        T((U) => ({
                                                          ...U,
                                                          name: Y.target.value,
                                                        })),
                                                      className:
                                                        "flex-1 min-w-0 text-sm font-serif font-bold text-[#2c2c2c] bg-white border border-[#e0e0e0] rounded-lg px-2 py-1 outline-none",
                                                      placeholder: "NPC 名字",
                                                    })
                                                  : e.jsx("span", {
                                                      className:
                                                        "text-sm font-serif font-bold text-[#2c2c2c] truncate",
                                                      children: ee.name,
                                                    }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[10px] text-[#9e9e9e] tracking-widest",
                                                  children:
                                                    (ee.status || "active") ===
                                                    "muted"
                                                      ? "静音"
                                                      : (ee.status ||
                                                            "active") ===
                                                          "deceased"
                                                        ? "已故"
                                                        : "活跃",
                                                }),
                                                ee.settingSource
                                                  ? e.jsx("span", {
                                                      className:
                                                        "ml-auto px-2 py-1 rounded-full border border-[#e0e0e0] bg-[#faf9f6] text-[10px] tracking-widest text-[#2c2c2c]",
                                                      children: String(
                                                        ee.settingSource,
                                                      ).toUpperCase(),
                                                    })
                                                  : null,
                                              ],
                                            }),
                                            H
                                              ? e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsx("textarea", {
                                                      value: j.persona,
                                                      onChange: (Y) =>
                                                        T((U) => ({
                                                          ...U,
                                                          persona:
                                                            Y.target.value,
                                                        })),
                                                      className:
                                                        "mt-2 w-full text-xs font-serif text-[#4a4a4a] bg-white border border-[#e0e0e0] rounded-xl px-3 py-2 outline-none resize-y min-h-[54px]",
                                                      placeholder:
                                                        "关系口吻 / 简短人设（可选）",
                                                    }),
                                                    e.jsx("input", {
                                                      value: j.relationTag,
                                                      onChange: (Y) =>
                                                        T((U) => ({
                                                          ...U,
                                                          relationTag:
                                                            Y.target.value,
                                                        })),
                                                      className:
                                                        "mt-2 w-full text-[11px] font-serif text-[#4a4a4a] bg-white border border-[#e0e0e0] rounded-xl px-3 py-2 outline-none",
                                                      placeholder:
                                                        "关系标签（可选，如 同事/家人/室友）",
                                                    }),
                                                  ],
                                                })
                                              : ee.persona
                                                ? e.jsx("p", {
                                                    className:
                                                      "text-xs text-[#666] font-serif mt-1 whitespace-pre-wrap",
                                                    children: ee.persona,
                                                  })
                                                : e.jsx("p", {
                                                    className:
                                                      "text-xs text-[#bbb] font-serif mt-1 italic",
                                                    children: "（无简短人设）",
                                                  }),
                                            ee.setting
                                              ? e.jsxs("details", {
                                                  className: "mt-2",
                                                  children: [
                                                    e.jsxs("summary", {
                                                      className:
                                                        "text-[10px] text-[#9e9e9e] tracking-widest cursor-pointer select-none",
                                                      children: [
                                                        "NPC设定",
                                                        ee.settingSource
                                                          ? ` · ${ee.settingSource}`
                                                          : "",
                                                      ],
                                                    }),
                                                    e.jsx("pre", {
                                                      className:
                                                        "mt-2 text-[11px] leading-relaxed text-[#4a4a4a] whitespace-pre-wrap font-serif bg-white/70 border border-[#e0e0e0] rounded-xl p-3",
                                                      children: ee.setting,
                                                    }),
                                                  ],
                                                })
                                              : e.jsx("p", {
                                                  className:
                                                    "text-[10px] text-[#bbb] font-serif mt-2 italic",
                                                  children:
                                                    "（暂无 NPC 设定原文，后续会自动补全或手动填写）",
                                                }),
                                            H
                                              ? e.jsx("textarea", {
                                                  value: j.setting,
                                                  onChange: (Y) =>
                                                    T((U) => ({
                                                      ...U,
                                                      setting: Y.target.value,
                                                    })),
                                                  className:
                                                    "mt-2 w-full text-[11px] leading-relaxed font-serif text-[#4a4a4a] bg-white border border-[#e0e0e0] rounded-xl px-3 py-2 outline-none resize-y min-h-[86px]",
                                                  placeholder:
                                                    "NPC 设定原文/摘录（可选，会覆盖为手动来源）",
                                                })
                                              : null,
                                            !H && ee.relationTag
                                              ? e.jsx("p", {
                                                  className:
                                                    "text-[10px] text-[#9e9e9e] mt-2 tracking-widest",
                                                  children: ee.relationTag,
                                                })
                                              : null,
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "w-[88px] flex flex-col gap-2",
                                          children: [
                                            e.jsxs("select", {
                                              value: ee.status || "active",
                                              onChange: (Y) =>
                                                h == null
                                                  ? void 0
                                                  : h(
                                                      t.id,
                                                      ee.name,
                                                      Y.target.value,
                                                    ),
                                              className:
                                                "text-[10px] bg-white/90 border border-[#e0e0e0] rounded-lg px-2 py-1 outline-none",
                                              children: [
                                                e.jsx("option", {
                                                  value: "active",
                                                  children: "活跃",
                                                }),
                                                e.jsx("option", {
                                                  value: "muted",
                                                  children: "静音",
                                                }),
                                                e.jsx("option", {
                                                  value: "deceased",
                                                  children: "已故",
                                                }),
                                              ],
                                            }),
                                            H
                                              ? e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsx("button", {
                                                      type: "button",
                                                      onClick: () => le(ee),
                                                      className:
                                                        "text-[10px] px-2 py-1 rounded-lg border border-[#2c2c2c] bg-[#2c2c2c] text-white hover:bg-black transition-colors",
                                                      children: "保存",
                                                    }),
                                                    e.jsx("button", {
                                                      type: "button",
                                                      onClick: ne,
                                                      className:
                                                        "text-[10px] px-2 py-1 rounded-lg border border-[#e0e0e0] bg-white/90 hover:bg-white transition-colors",
                                                      children: "取消",
                                                    }),
                                                  ],
                                                })
                                              : e.jsx("button", {
                                                  type: "button",
                                                  onClick: () => V(ee),
                                                  className:
                                                    "text-[10px] px-2 py-1 rounded-lg border border-[#e0e0e0] bg-white/90 hover:bg-white transition-colors",
                                                  children: "编辑",
                                                }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: () => {
                                                window.confirm(
                                                  `删除 NPC「${ee.name}」？`,
                                                ) &&
                                                  (m == null ||
                                                    m(t.id, ee.id || ee.name));
                                              },
                                              className:
                                                "text-[10px] px-2 py-1 rounded-lg border border-[#e0e0e0] bg-white/90 text-[#ef5350] hover:bg-red-50 transition-colors",
                                              children: "删除",
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    ee.id || ee.name,
                                  );
                                })(),
                              ),
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar px-6",
              children: e.jsxs("div", {
                className: "max-w-md mx-auto pb-10",
                children: [
                  e.jsxs("div", {
                    className: "relative mt-4 mb-12 w-3/4 mx-auto",
                    children: [
                      e.jsxs("div", {
                        className:
                          "relative z-10 bg-white p-2 pb-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rotate-[-2deg] transition-transform duration-500 hover:rotate-0 cursor-pointer group",
                        onClick: () => _(!0),
                        children: [
                          e.jsxs("div", {
                            className:
                              "aspect-[3/4] w-full overflow-hidden bg-gray-100 relative",
                            children: [
                              e.jsx("img", {
                                id: `contact-image-${t.id}`,
                                src: t.portrait || t.avatar,
                                alt: t.name,
                                className:
                                  "w-full h-full object-cover filter contrast-[1.02] transition-opacity duration-300",
                                loading: "lazy",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 opacity-[0.03] pointer-events-none",
                                style: {
                                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                },
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                children: e.jsx(ea, {
                                  size: 12,
                                  className: "text-gray-600",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "absolute bottom-4 left-0 right-0 text-center",
                            children: [
                              e.jsx("h1", {
                                className:
                                  "font-serif text-3xl text-[#2c2c2c] tracking-tight",
                                children: t.remark || t.nickname || t.name,
                              }),
                              ((t.remark && t.nickname) ||
                                (!t.remark &&
                                  t.nickname &&
                                  t.nickname !== t.name)) &&
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                                  children: t.remark ? t.nickname : t.name,
                                }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-3 -right-3 w-12 h-12 bg-[#ffb7b2] rounded-full flex items-center justify-center text-white shadow-md rotate-12",
                            children: e.jsx(zn, {
                              size: 20,
                              fill: "currentColor",
                            }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-[#e0e0e0] rotate-[3deg] -z-10 translate-y-2 translate-x-2",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "text-center mb-10 px-4",
                    children: e.jsxs("div", {
                      className: "inline-block relative",
                      children: [
                        e.jsx(Xn, {
                          size: 16,
                          className: "absolute -top-3 -left-4 text-[#ffb7b2]",
                        }),
                        e.jsxs("p", {
                          className:
                            "font-serif italic text-[#666] text-lg leading-relaxed",
                          children: ['"', t.signature || "暂无个性签名", '"'],
                        }),
                        e.jsx(Xn, {
                          size: 12,
                          className:
                            "absolute -bottom-2 -right-3 text-[#90caf9]",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "space-y-6 mb-10",
                    children: [
                      e.jsx("div", {
                        className: "flex items-center justify-between group",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4a4a4a] shadow-sm border border-[#f0f0f0]",
                              children: e.jsx(W1, {
                                size: 18,
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#9e9e9e] tracking-widest font-bold",
                                  children: "微信号",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-[#4a4a4a] font-medium font-serif",
                                  children: t.socialId || "-",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "w-full h-[1px] bg-[#e0e0e0]/50",
                      }),
                      e.jsx("div", {
                        className: "flex items-center justify-between group",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4a4a4a] shadow-sm border border-[#f0f0f0]",
                              children: e.jsx(Zr, {
                                size: 18,
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#9e9e9e] tracking-widest font-bold",
                                  children: "手机号",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-[#4a4a4a] font-medium font-mono",
                                  children: t.phone || "-",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "w-full h-[1px] bg-[#e0e0e0]/50",
                      }),
                      e.jsx("div", {
                        className: "flex items-center justify-between group",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4a4a4a] shadow-sm border border-[#f0f0f0]",
                              children: e.jsx(kl, {
                                size: 18,
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#9e9e9e] tracking-widest font-bold",
                                  children: "地区",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-[#4a4a4a] font-medium font-serif",
                                  children: t.region || "未知",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "w-full h-[1px] bg-[#e0e0e0]/50",
                      }),
                      e.jsx("div", {
                        className: "flex items-center justify-between group",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4a4a4a] shadow-sm border border-[#f0f0f0]",
                              children: e.jsx(kM, {
                                size: 18,
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#9e9e9e] tracking-widest font-bold",
                                  children: "分组",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-[#4a4a4a] font-medium font-serif",
                                  children: t.group || "默认分组",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => a(t.id),
                    className:
                      "w-full bg-white p-1 rounded-2xl shadow-sm hover:shadow-md transition-all group mb-8",
                    children: e.jsxs("div", {
                      className:
                        "bg-[#fdfbf7] border border-[#f0f0f0] rounded-xl p-5 flex items-center justify-between relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute right-0 top-0 w-20 h-20 bg-gradient-to-bl from-[#ffccbc]/20 to-transparent rounded-bl-full pointer-events-none",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-4 relative z-10",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 rounded-full bg-[#2c2c2c] flex items-center justify-center text-[#faf9f6] shadow-lg group-hover:scale-110 transition-transform duration-500",
                              children: e.jsx(O0, {
                                size: 20,
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsxs("div", {
                              className: "text-left",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-base font-serif font-bold text-[#2c2c2c] italic",
                                  children: "朋友圈",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#9e9e9e] tracking-widest",
                                  children: "查看动态",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "w-8 h-8 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#9e9e9e] group-hover:bg-[#2c2c2c] group-hover:text-white group-hover:border-[#2c2c2c] transition-all",
                          children: e.jsx(Kn, { size: 16 }),
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex items-center justify-between gap-3 mb-8",
                    children: [
                      e.jsxs("button", {
                        onClick: () => n(t.id),
                        className:
                          "flex-1 py-3 bg-[#2c2c2c] text-[#faf9f6] rounded-xl font-bold text-xs tracking-widest shadow-md hover:bg-black hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2",
                        children: [
                          e.jsx(Ar, { size: 16, strokeWidth: 2 }),
                          e.jsx("span", { children: "发消息" }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: je,
                            className:
                              "w-11 h-11 bg-white text-[#4a4a4a] rounded-xl flex items-center justify-center shadow-sm border border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors",
                            "aria-label": "拨打电话",
                            title: "拨打电话",
                            children: e.jsx(Zr, { size: 18, strokeWidth: 1.5 }),
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: xe,
                            className:
                              "w-11 h-11 bg-white text-[#4a4a4a] rounded-xl flex items-center justify-center shadow-sm border border-[#e0e0e0] hover:bg-[#f5f5f5] transition-colors",
                            "aria-label": "视频通话",
                            title: "视频通话",
                            children: e.jsx(Vl, { size: 18, strokeWidth: 1.5 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "w-full bg-[#fdfbf7] rounded-2xl border border-[#e0e0e0] mb-8 relative overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 left-0 w-full h-1.5 flex justify-between px-2",
                        children: [...Array(20)].map((ee, H) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "w-1.5 h-1.5 rounded-full bg-[#faf9f6] -mt-1 shadow-inner",
                            },
                            `top-${H}`,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className: "p-5 pt-6 pb-6",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-5",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-[#2c2c2c]",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-bold text-[#2c2c2c] tracking-[0.3em]",
                                    children: "数据同步",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "flex gap-1 items-center",
                                children: e.jsx("button", {
                                  onClick: () => k(!0),
                                  className:
                                    "w-6 h-6 rounded-full hover:bg-[#e0e0e0] flex items-center justify-center transition-colors group",
                                  title: "编辑开场白",
                                  children: e.jsx("div", {
                                    className: "flex gap-0.5",
                                    children: [...Array(3)].map((ee, H) =>
                                      e.jsx(
                                        "div",
                                        {
                                          className:
                                            "w-1 h-1 rounded-full bg-[#d0d0d0] group-hover:bg-[#2c2c2c] transition-colors",
                                        },
                                        `dot-${H}`,
                                      ),
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-4 relative",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute left-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-[#d0d0d0] -translate-x-1/2",
                              }),
                              e.jsxs("button", {
                                onClick: F,
                                className:
                                  "flex-1 flex flex-col items-center justify-center py-2 group",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "relative w-12 h-12 mb-2 flex items-center justify-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 border border-[#e0e0e0] rounded-full group-hover:scale-110 transition-transform duration-500",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-1 bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300",
                                      }),
                                      e.jsx(Ta, {
                                        size: 16,
                                        strokeWidth: 1.5,
                                        className:
                                          "relative z-10 text-[#4a4a4a] group-hover:-translate-y-1 transition-transform duration-300",
                                      }),
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] font-bold text-[#9e9e9e] group-hover:text-[#2c2c2c] tracking-[0.2em] transition-colors",
                                    children: "导入角色",
                                  }),
                                ],
                              }),
                              e.jsxs("button", {
                                onClick: B,
                                className:
                                  "flex-1 flex flex-col items-center justify-center py-2 group",
                                children: [
                                  e.jsxs("div", {
                                    className: