                "absolute inset-0 cursor-default border-0 backdrop-blur-[8px]",
              style: { background: "var(--ps-modal-scrim)" },
              "aria-label": "关闭",
              onClick: s,
            }),
            e.jsxs("div", {
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "couple-bgm-title",
              className: `couple-bgm-sheet couple-bgm-sheet-modal relative z-10 flex min-h-0 flex-col overflow-hidden rounded-t-[1.45rem] border border-b-0 sm:rounded-[1.45rem] sm:border-b${_ === "floating" ? " couple-bgm-sheet-modal--floating" : ""}`,
              style: {
                borderColor: "var(--ps-sheet-border)",
                boxShadow: "var(--ps-sheet-shadow)",
              },
              children: [
                e.jsx("div", {
                  className:
                    "pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full blur-3xl",
                  style: {
                    animation: "couple-bgm-breathe 5s ease-in-out infinite",
                    backgroundColor: "var(--ps-bloom-1)",
                  },
                }),
                e.jsx("div", {
                  className:
                    "pointer-events-none absolute -bottom-12 -right-10 h-44 w-44 rounded-full blur-3xl",
                  style: {
                    animation:
                      "couple-bgm-breathe 6.5s ease-in-out infinite 0.8s",
                    backgroundColor: "var(--ps-bloom-2)",
                  },
                }),
                e.jsx("div", {
                  className:
                    "pointer-events-none absolute left-1/2 top-0 h-px w-[min(72%,200px)] -translate-x-1/2",
                  style: {
                    background:
                      "linear-gradient(to right, transparent, var(--ps-line), transparent)",
                  },
                }),
                e.jsxs("div", {
                  className: "relative flex min-h-0 w-full flex-1 flex-col",
                  style: { background: "var(--ps-bgm-surface)" },
                  children: [
                    e.jsxs("header", {
                      className:
                        "relative shrink-0 px-4 pb-1.5 pt-3 sm:px-5 sm:pt-3.5",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: s,
                          className:
                            "absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border text-[color:var(--ps-text-body)] shadow-sm transition hover:border-[color:var(--ps-a-45)] hover:text-[color:var(--ps-text-h)]",
                          style: {
                            backgroundColor: "var(--ps-bgm-close-btn)",
                            borderColor:
                              "color-mix(in srgb, var(--ps-line) 55%, transparent)",
                          },
                          "aria-label": "关闭",
                          children: e.jsx(Ts, {
                            className: "h-3.5 w-3.5",
                            strokeWidth: 1.75,
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-col items-center text-center pr-7",
                          children: [
                            e.jsx("span", {
                              className:
                                "couple-bgm-serif text-[10px] font-medium italic tracking-[0.32em] text-[color:var(--ps-text-muted)]",
                              children: "Soundtrack",
                            }),
                            e.jsx("h2", {
                              id: "couple-bgm-title",
                              className:
                                "couple-bgm-serif mt-1 text-xl font-medium leading-tight tracking-tight text-[color:var(--ps-text-h)] sm:text-[1.35rem]",
                              children: "空间的旋律",
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-1 flex items-center justify-center gap-1 text-[color:var(--ps-text-soft)]",
                              children: [
                                e.jsx(Xn, {
                                  className: "h-2.5 w-2.5",
                                  strokeWidth: 1.5,
                                }),
                                e.jsx("p", {
                                  className:
                                    "max-w-[16rem] text-[9px] font-normal uppercase tracking-[0.18em] text-[color:var(--ps-text-muted)]/90",
                                  children: "与乐听同步 · 仅在本页轻声播放",
                                }),
                                e.jsx(Xn, {
                                  className: "h-2.5 w-2.5",
                                  strokeWidth: 1.5,
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute left-1/2 top-[3.35rem] z-0 h-12 w-12 -translate-x-1/2 opacity-[0.1] sm:top-[3.6rem]",
                          children: e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full border-2 border-dashed border-[color:var(--ps-text-h)]",
                            style: {
                              animation: "couple-bgm-orbit 18s linear infinite",
                            },
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "relative z-[1] shrink-0 px-4 pb-2",
                      children: e.jsxs("div", {
                        className:
                          "relative flex rounded-2xl border p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
                        style: {
                          backgroundColor: "var(--ps-bgm-tab-track)",
                          borderColor:
                            "color-mix(in srgb, var(--ps-line) 45%, transparent)",
                        },
                        children: [
                          e.jsx("div", {
                            className: "absolute inset-y-1 rounded-xl",
                            style: {
                              background: "var(--ps-tab-pill-bg)",
                              boxShadow: "var(--ps-tab-pill-shadow)",
                              width: "calc(33.333% - 5px)",
                              left:
                                S === "local"
                                  ? 4
                                  : S === "netease"
                                    ? "calc(33.333% + 1px)"
                                    : "calc(66.666% - 1px)",
                            },
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => j("local"),
                            className: `relative z-[1] flex flex-1 items-center justify-center gap-1 rounded-xl py-2.5 text-[10px] font-medium tracking-wide transition sm:text-[11px] ${S === "local" ? "text-[color:var(--ps-text-h)]" : "text-[color:var(--ps-text-muted)] hover:text-[color:var(--ps-text-body)]"}`,
                            children: [
                              e.jsx(G0, {
                                className: "h-3.5 w-3.5 shrink-0 opacity-80",
                                strokeWidth: 1.75,
                              }),
                              "本机",
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => j("netease"),
                            className: `relative z-[1] flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-medium tracking-wide transition sm:text-[11px] ${S === "netease" ? "text-[color:var(--ps-text-h)]" : "text-[color:var(--ps-text-muted)] hover:text-[color:var(--ps-text-body)]"}`,
                            children: [
                              e.jsx(ao, {
                                className: "h-3.5 w-3.5 shrink-0 opacity-80",
                                strokeWidth: 1.75,
                              }),
                              "网易云",
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => j("welcome"),
                            className: `relative z-[1] flex flex-1 items-center justify-center gap-1 rounded-xl py-2.5 text-[10px] font-medium tracking-wide transition sm:text-[11px] ${S === "welcome" ? "text-[color:var(--ps-text-h)]" : "text-[color:var(--ps-text-muted)] hover:text-[color:var(--ps-text-body)]"}`,
                            children: [
                              e.jsx(hl, {
                                className: "h-3.5 w-3.5 shrink-0 opacity-80",
                                strokeWidth: 1.75,
                              }),
                              "欢迎语",
                            ],
                          }),
                        ],
                      }),
                    }),
                    z
                      ? e.jsxs("div", {
                          className:
                            "relative z-[1] mx-4 mb-1 flex shrink-0 items-start gap-2 rounded-xl border border-[color:var(--ps-a-35)] px-3 py-2 text-left shadow-sm",
                          style: { background: "var(--ps-bgm-alert)" },
                          children: [
                            e.jsx(zn, {
                              className:
                                "mt-0.5 h-3.5 w-3.5 shrink-0 fill-[color:var(--ps-a-35)] text-[color:var(--ps-accent)]",
                              strokeWidth: 1.5,
                            }),
                            e.jsx("p", {
                              className:
                                "text-[11px] leading-relaxed text-[color:var(--ps-text-body)]",
                              children: z,
                            }),
                          ],
                        })
                      : null,
                    e.jsxs("div", {
                      className:
                        "couple-bgm-scroll relative z-[1] min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain px-4 pb-1",
                      children: [
                        S === "local" &&
                          e.jsx(e.Fragment, {
                            children: F
                              ? e.jsxs("div", {
                                  className:
                                    "flex flex-col items-center justify-center gap-2 py-9",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "relative flex h-12 w-12 items-center justify-center",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 rounded-full border border-[color:color-mix(in_srgb,var(--ps-line)_58%,transparent)] border-t-[color:var(--ps-accent)]",
                                          style: {
                                            animation:
                                              "couple-bgm-orbit 1.1s linear infinite",
                                          },
                                        }),
                                        e.jsx(qf, {
                                          className:
                                            "relative h-5 w-5 text-[color:var(--ps-text-muted)]",
                                          strokeWidth: 1.25,
                                        }),
                                      ],
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] uppercase tracking-[0.28em] text-[color:var(--ps-text-muted)]",
                                      children: "载入中",
                                    }),
                                  ],
                                })
                              : T.length === 0
                                ? e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center px-4 py-14 text-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-[color:color-mix(in_srgb,var(--ps-line)_68%,transparent)] bg-white/50",
                                        children: e.jsx(gI, {
                                          className:
                                            "h-7 w-7 text-[color:var(--ps-text-soft)]",
                                          strokeWidth: 1.2,
                                        }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "couple-bgm-serif text-base italic text-[color:var(--ps-text-body)]",
                                        children: "还没有本地歌单",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "mt-2 max-w-[15rem] text-[11px] leading-relaxed text-[color:var(--ps-text-muted)]",
                                        children: [
                                          "打开 ",
                                          e.jsx("span", {
                                            className:
                                              "font-medium text-[color:var(--ps-text-h)]",
                                            children: "乐听",
                                          }),
                                          "，创建歌单并导入音乐后，再回到这里轻轻一点。",
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsx(
                                    "ul",
                                    {
                                      className: "space-y-2.5 pb-1 pt-1",
                                      children: T.map((H) =>
                                        e.jsx(
                                          "li",
                                          {
                                            children: e.jsxs("button", {
                                              type: "button",
                                              disabled: !!$,
                                              onClick: () => ye(H),
                                              className:
                                                "group flex w-full items-center gap-3 rounded-2xl border px-3 py-2 text-left shadow-[var(--ps-list-row-shadow)] transition hover:border-[color:var(--ps-a-45)] hover:shadow-[var(--ps-list-row-hover)] disabled:opacity-60 bg-[color:var(--ps-bgm-list-row)] hover:bg-[color:var(--ps-bgm-list-row-hover)] border-[color:color-mix(in_srgb,var(--ps-line)_42%,transparent)]",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "relative h-[3.25rem] w-[3.25rem] shrink-0 overflow-hidden rounded-xl border border-white/90 shadow-inner",
                                                  style: {
                                                    background:
                                                      "var(--ps-cover-mock)",
                                                  },
                                                  children: [
                                                    H.cover
                                                      ? e.jsx("img", {
                                                          src: H.cover,
                                                          alt: "",
                                                          className:
                                                            "h-full w-full object-cover transition duration-500 group-hover:scale-105",
                                                        })
                                                      : e.jsx("div", {
                                                          className:
                                                            "flex h-full w-full items-center justify-center",
                                                          children: e.jsx(G0, {
                                                            className:
                                                              "h-5 w-5 text-[color:var(--ps-text-caption)]",
                                                            strokeWidth: 1.25,
                                                          }),
                                                        }),
                                                    e.jsx("div", {
                                                      className:
                                                        "absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/25 opacity-0 transition group-hover:opacity-100",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "min-w-0 flex-1",
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "truncate text-[13px] font-medium tracking-wide text-[color:var(--ps-text-h)]",
                                                      children: H.name,
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "mt-0.5 text-[10px] tracking-[0.12em] text-[color:var(--ps-text-muted)]",
                                                      children: "LOCAL · 本机",
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "flex shrink-0 items-center gap-0.5 text-[color:var(--ps-text-soft)] transition group-hover:text-[color:var(--ps-accent)]",
                                                  children:
                                                    $ === `local_${H.id}`
                                                      ? e.jsx(Sn, {
                                                          className:
                                                            "h-4 w-4 animate-spin",
                                                        })
                                                      : e.jsxs(e.Fragment, {
                                                          children: [
                                                            e.jsx("span", {
                                                              className:
                                                                "hidden text-[9px] uppercase tracking-[0.2em] sm:inline",
                                                              children: "选用",
                                                            }),
                                                            e.jsx(Kn, {
                                                              className:
                                                                "h-4 w-4",
                                                              strokeWidth: 1.75,
                                                            }),
                                                          ],
                                                        }),
                                                }),
                                              ],
                                            }),
                                          },
                                          H.id,
                                        ),
                                      ),
                                    },
                                    "local-list",
                                  ),
                          }),
                        S === "netease" &&
                          e.jsx(e.Fragment, {
                            children: M
                              ? F
                                ? e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center justify-center gap-2 py-9",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "relative flex h-12 w-12 items-center justify-center",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 rounded-full border border-[color:color-mix(in_srgb,var(--ps-line)_58%,transparent)] border-t-[color:var(--ps-accent-2)]",
                                            style: {
                                              animation:
                                                "couple-bgm-orbit 1.1s linear infinite",
                                            },
                                          }),
                                          e.jsx(ao, {
                                            className:
                                              "relative h-5 w-5 text-[color:var(--ps-text-muted)]",
                                            strokeWidth: 1.25,
                                          }),
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] uppercase tracking-[0.28em] text-[color:var(--ps-text-muted)]",
                                        children: "拉取歌单",
                                      }),
                                    ],
                                  })
                                : L.length === 0
                                  ? e.jsx("div", {
                                      className:
                                        "flex flex-col items-center px-4 py-14 text-center",
                                      children: e.jsx("p", {
                                        className:
                                          "couple-bgm-serif text-base italic text-[color:var(--ps-text-body)]",
                                        children: "暂无云端歌单",
                                      }),
                                    })
                                  : e.jsx(
                                      "ul",
                                      {
                                        className: "space-y-2.5 pb-1 pt-1",
                                        children: L.map((H) => {
                                          const Y = H.cover ? bl(H.cover) : "";
                                          return e.jsx(
                                            "li",
                                            {
                                              children: e.jsxs("button", {
                                                type: "button",
                                                disabled: !!$,
                                                onClick: () => R(H),
                                                className:
                                                  "group flex w-full items-center gap-3 rounded-2xl border px-3 py-2 text-left shadow-[var(--ps-list-row-shadow)] transition hover:border-[color:var(--ps-a-45)] hover:shadow-[var(--ps-list-row-hover)] disabled:opacity-60 bg-[color:var(--ps-bgm-list-row)] hover:bg-[color:var(--ps-bgm-list-row-hover)] border-[color:color-mix(in_srgb,var(--ps-line)_42%,transparent)]",
                                                children: [
                                                  e.jsxs("div", {
                                                    className:
                                                      "relative h-[3.25rem] w-[3.25rem] shrink-0 overflow-hidden rounded-xl border border-white/90 shadow-inner",
                                                    style: {
                                                      background:
                                                        "var(--ps-netease-mock)",
                                                    },
                                                    children: [
                                                      Y
                                                        ? e.jsx("img", {
                                                            src: Y,
                                                            alt: "",
                                                            className:
                                                              "h-full w-full object-cover transition duration-500 group-hover:scale-105",
                                                          })
                                                        : e.jsx("div", {
                                                            className:
                                                              "flex h-full w-full items-center justify-center",
                                                            children: e.jsx(
                                                              qf,
                                                              {
                                                                className:
                                                                  "h-5 w-5 text-white/40",
                                                                strokeWidth: 1.25,
                                                              },
                                                            ),
                                                          }),
                                                      e.jsx("div", {
                                                        className:
                                                          "absolute inset-0 bg-gradient-to-tr from-[color:var(--ps-a-10)] via-transparent to-white/15 opacity-0 transition group-hover:opacity-100",
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                      e.jsx("p", {
                                                        className:
                                                          "truncate text-[13px] font-medium tracking-wide text-[color:var(--ps-text-h)]",
                                                        children: H.name,
                                                      }),
                                                      e.jsxs("p", {
                                                        className:
                                                          "mt-0.5 text-[10px] tracking-[0.12em] text-[color:var(--ps-text-muted)]",
                                                        children: [
                                                          "NETEASE",
                                                          H.trackCount != null
                                                            ? ` · ${H.trackCount} 首`
                                                            : "",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "flex shrink-0 items-center gap-0.5 text-[color:var(--ps-text-soft)] transition group-hover:text-[color:var(--ps-accent)]",
                                                    children:
                                                      $ === `ne_${H.platformId}`
                                                        ? e.jsx(Sn, {
                                                            className:
                                                              "h-4 w-4 animate-spin",
                                                          })
                                                        : e.jsxs(e.Fragment, {
                                                            children: [
                                                              e.jsx("span", {
                                                                className:
                                                                  "hidden text-[9px] uppercase tracking-[0.2em] sm:inline",
                                                                children:
                                                                  "选用",
                                                              }),
                                                              e.jsx(Kn, {
                                                                className:
                                                                  "h-4 w-4",
                                                                strokeWidth: 1.75,
                                                              }),
                                                            ],
                                                          }),
                                                  }),
                                                ],
                                              }),
                                            },
                                            H.id,
                                          );
                                        }),
                                      },
                                      "netease-list",
                                    )
                              : e.jsxs("div", {
                                  className:
                                    "flex flex-col items-center px-5 py-8 text-center",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "relative mb-3 flex h-14 w-14 items-center justify-center",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 rounded-full border border-[color:color-mix(in_srgb,var(--ps-line)_48%,transparent)]",
                                          style: {
                                            animation:
                                              "couple-bgm-orbit 12s linear infinite",
                                          },
                                        }),
                                        e.jsx(ao, {
                                          className:
                                            "relative h-7 w-7 text-[color:var(--ps-text-muted)]",
                                          strokeWidth: 1.25,
                                        }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "couple-bgm-serif text-lg italic text-[color:var(--ps-text-h)]",
                                      children: "云端待解锁",
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "mt-2 max-w-[16rem] text-[11px] leading-relaxed text-[color:var(--ps-text-body)]",
                                      children: [
                                        "在 ",
                                        e.jsx("span", {
                                          className:
                                            "font-medium text-[color:var(--ps-text-h)]",
                                          children: "乐听",
                                        }),
                                        " ",
                                        "中登录网易云后，你的歌单会像星轨一样出现在这里。",
                                      ],
                                    }),
                                  ],
                                }),
                          }),
                        S === "welcome" &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("p", {
                                className:
                                  "couple-bgm-serif px-1 pb-3 pt-1 text-[11px] italic leading-relaxed text-[color:var(--ps-text-body)]",
                                children: [
                                  "与聊天 ",
                                  e.jsx("span", {
                                    className:
                                      "font-medium not-italic text-[color:var(--ps-text-h)]",
                                    children: "我的 → 收藏",
                                  }),
                                  " ",
                                  "中的语音 TTS 同源；不含麦克风录制。选完联系人后进入的",
                                  e.jsx("strong", {
                                    className:
                                      "font-medium not-italic text-[color:var(--ps-text-h)]",
                                    children: "第一个界面",
                                  }),
                                  "（星空封面或罗盘）将自动尝试播放一次，可与 BGM 叠放。",
                                ],
                              }),
                              b
                                ? e.jsxs("div", {
                                    className:
                                      "mb-2 flex items-center justify-between gap-2 rounded-2xl border border-[color:var(--ps-a-28)] px-3 py-2 shadow-sm",
                                    style: {
                                      background: "var(--ps-bgm-highlight-row)",
                                    },
                                    children: [
                                      e.jsxs("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-[8px] font-medium uppercase tracking-[0.2em] text-[color:var(--ps-text-muted)]",
                                            children: "已选欢迎语",
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "truncate text-[12px] font-medium text-[color:var(--ps-text-h)]",
                                            children:
                                              ((ee = X.find(
                                                (H) => H.id === b,
                                              )) == null
                                                ? void 0
                                                : ee._welcomeLabel) ||
                                              "（收藏已删除或不可用）",
                                          }),
                                        ],
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => N(null),
                                        className:
                                          "shrink-0 rounded-xl border border-[color:color-mix(in_srgb,var(--ps-line)_58%,transparent)] bg-white/60 px-2.5 py-1.5 text-[10px] font-medium tracking-wide text-[color:var(--ps-text-body)] transition hover:border-[color:var(--ps-a-45)] hover:text-[color:var(--ps-text-h)]",
                                        children: "清除",
                                      }),
                                    ],
                                  })
                                : null,
                              X.length === 0
                                ? e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center px-4 py-8 text-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "mb-2 flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-[color:color-mix(in_srgb,var(--ps-line)_55%,transparent)]",
                                        style: {
                                          backgroundColor:
                                            "var(--ps-bgm-list-row)",
                                        },
                                        children: e.jsx(hl, {
                                          className:
                                            "h-7 w-7 text-[color:var(--ps-text-soft)]",
                                          strokeWidth: 1.2,
                                        }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "couple-bgm-serif text-base italic text-[color:var(--ps-text-body)]",
                                        children: "暂无可用的 TTS 语音收藏",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "mt-2 max-w-[16rem] text-[11px] leading-relaxed text-[color:var(--ps-text-muted)]",
                                        children: [
                                          "在聊天里长按角色 ",
                                          e.jsx("span", {
                                            className:
                                              "font-medium text-[color:var(--ps-text-h)]",
                                            children: "TTS 语音气泡",
                                          }),
                                          " ",
                                          "收藏后，再来这里选择。",
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsx(
                                    "ul",
                                    {
                                      className: "space-y-2.5 pb-1 pt-1",
                                      children: X.map((H) =>
                                        e.jsx(
                                          "li",
                                          {
                                            children: e.jsxs("div", {
                                              className:
                                                "flex w-full items-stretch gap-2 rounded-2xl border border-white/75 bg-white/45 shadow-[var(--ps-list-row-shadow)] backdrop-blur-md transition hover:border-[color:var(--ps-a-45)] hover:bg-white/70 hover:shadow-[var(--ps-list-row-hover)]",
                                              children: [
                                                e.jsxs("button", {
                                                  type: "button",
                                                  onClick: () => N(H.id),
                                                  className:
                                                    "flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className:
                                                        "relative flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/90 shadow-inner",
                                                      style: {
                                                        background:
                                                          "var(--ps-cover-mock)",
                                                      },
                                                      children: [
                                                        e.jsx(hl, {
                                                          className:
                                                            "h-5 w-5 text-[color:var(--ps-accent-2)]/90",
                                                          strokeWidth: 1.35,
                                                        }),
                                                        b === H.id
                                                          ? e.jsx("span", {
                                                              className:
                                                                "absolute bottom-0.5 right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--ps-accent)] text-white shadow",
                                                              children: e.jsx(
                                                                On,
                                                                {
                                                                  className:
                                                                    "h-3 w-3",
                                                                  strokeWidth: 2.5,
                                                                },
                                                              ),
                                                            })
                                                          : null,
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "min-w-0 flex-1",
                                                      children: [
                                                        e.jsx("p", {
                                                          className:
                                                            "line-clamp-2 text-[12px] font-medium leading-snug tracking-wide text-[color:var(--ps-text-h)]",
                                                          children:
                                                            H._welcomeLabel,
                                                        }),
                                                        e.jsx("p", {
                                                          className:
                                                            "mt-0.5 text-[9px] tracking-[0.14em] text-[color:var(--ps-text-muted)]",
                                                          children:
                                                            "CHAT · TTS",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("button", {
                                                  type: "button",
                                                  onClick: (Y) => xe(H, Y),
                                                  className:
                                                    "flex w-11 shrink-0 items-center justify-center rounded-r-2xl border-l text-[color:var(--ps-text-muted)] transition hover:text-[color:var(--ps-text-h)] bg-[color:var(--ps-bgm-preview-split)] border-[color:color-mix(in_srgb,var(--ps-line)_38%,transparent)] hover:bg-[color:var(--ps-bgm-control)]",
                                                  "aria-label":
                                                    Z === H.id
                                                      ? "停止试听"
                                                      : "试听",
                                                  children:
                                                    Z === H.id
                                                      ? e.jsx(Sl, {
                                                          className: "h-4 w-4",
                                                          strokeWidth: 1.75,
                                                        })
                                                      : e.jsx(Ji, {
                                                          className: "h-4 w-4",
                                                          strokeWidth: 1.75,
                                                        }),
                                                }),
                                              ],
                                            }),
                                          },
                                          H.id,
                                        ),
                                      ),
                                    },
                                    "welcome-tts-list",
                                  ),
                            ],
                          }),
                        n && S !== "welcome"
                          ? e.jsxs("div", {
                              className:
                                "mt-4 flex items-center gap-3 rounded-2xl border border-[color:var(--ps-a-25)] px-3 py-2.5 shadow-[var(--ps-list-row-shadow)] backdrop-blur-sm",
                              style: { background: "var(--ps-row-highlight)" },
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/90",
                                  style: { background: "var(--ps-cover-mock)" },
                                  children: [
                                    e.jsx(qf, {
                                      className:
                                        "h-3.5 w-3.5 text-[color:var(--ps-accent-2)]",
                                      strokeWidth: 1.5,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[color:var(--ps-accent)] ring-2 ring-white/90",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[8px] font-medium uppercase tracking-[0.2em] text-[color:var(--ps-text-muted)]",
                                      children: "已绑定歌单",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "couple-bgm-serif truncate text-[14px] italic text-[color:var(--ps-text-h)]",
                                      children: n.playlistName,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[9px] text-[color:var(--ps-text-muted)]",
                                      children:
                                        n.source === "netease"
                                          ? "网易云"
                                          : "本机",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : null,
                        n && S !== "welcome"
                          ? e.jsxs("section", {
                              className:
                                "relative mt-3 overflow-hidden rounded-[1.15rem] border border-[color:var(--ps-player-border)] shadow-[var(--ps-player-well-shadow)]",
                              "aria-label": "播放控制",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "pointer-events-none absolute inset-0",
                                  style: { background: "var(--ps-bgm-player)" },
                                }),
                                e.jsx("div", {
                                  className:
                                    "pointer-events-none absolute -right-6 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-[color:var(--ps-a-12)] blur-2xl",
                                  style: r
                                    ? {
                                        animation:
                                          "couple-bgm-glow-pulse 2.8s ease-in-out infinite",
                                      }
                                    : void 0,
                                }),
                                e.jsx("div", {
                                  className:
                                    "pointer-events-none absolute left-3 top-3 h-2 w-2 rounded-full border border-[color:color-mix(in_srgb,var(--ps-line)_58%,transparent)] bg-white/80",
                                }),
                                e.jsx("div", {
                                  className:
                                    "pointer-events-none absolute right-3 top-3 h-2 w-2 rounded-full border border-[color:color-mix(in_srgb,var(--ps-line)_58%,transparent)] bg-white/80",
                                }),
                                e.jsxs("div", {
                                  className: "relative px-4 pb-4 pt-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex gap-4",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "relative h-[4.75rem] w-[4.75rem] shrink-0",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "absolute inset-[-3px] rounded-full border border-dashed border-[color:color-mix(in_srgb,var(--ps-line)_52%,transparent)]",
                                              style: r
                                                ? {
                                                    animation:
                                                      "couple-bgm-vinyl 14s linear infinite",
                                                  }
                                                : void 0,
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "absolute inset-0 rounded-full shadow-[var(--ps-vinyl-drop)] ring-2 ring-white/40 ring-offset-2 ring-offset-[color:var(--ps-vinyl-ring-offset)]",
                                              style: {
                                                background:
                                                  "var(--ps-vinyl-surface)",
                                              },
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "absolute inset-0 rounded-full opacity-30 [background:repeating-conic-gradient(from_0deg,transparent_0deg_8deg,rgba(255,255,255,0.04)_8deg_9deg)]",
                                                }),
                                                e.jsx(qf, {
                                                  className:
                                                    "absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-white/12 sm:h-6 sm:w-6",
                                                  strokeWidth: 1,
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-inner ring-1 ring-[color:color-mix(in_srgb,var(--ps-line)_48%,transparent)]",
                                                  style: {
                                                    background:
                                                      "var(--ps-vinyl-spindle)",
                                                  },
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex min-w-0 flex-1 flex-col justify-center",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "mb-1.5 flex items-center gap-2",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "h-px w-5 bg-gradient-to-r from-transparent to-[color:color-mix(in_srgb,var(--ps-text-soft)_88%,transparent)]",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[8px] font-medium tracking-[0.32em] text-[color:var(--ps-text-muted)]",
                                                  children: "NOW",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "h-px flex-1 bg-gradient-to-l from-transparent to-[color:color-mix(in_srgb,var(--ps-text-soft)_68%,transparent)]",
                                                }),
                                              ],
                                            }),
                                            u != null && u.title
                                              ? e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "couple-bgm-serif line-clamp-2 text-[16px] font-medium leading-snug text-[color:var(--ps-text-h)]",
                                                      children: u.title,
                                                    }),
                                                    u.artist
                                                      ? e.jsx("p", {
                                                          className:
                                                            "mt-1 line-clamp-1 text-[11px] tracking-wide text-[color:var(--ps-text-body)]",
                                                          children: u.artist,
                                                        })
                                                      : null,
                                                  ],
                                                })
                                              : e.jsx("p", {
                                                  className:
                                                    "couple-bgm-serif text-[13px] italic text-[color:var(--ps-text-caption)]",
                                                  children: "正在载入曲目…",
                                                }),
                                            e.jsxs("div", {
                                              className:
                                                "mt-2 flex items-center justify-between gap-2",
                                              children: [
                                                o > 0
                                                  ? e.jsxs("span", {
                                                      className:
                                                        "text-[9px] tabular-nums tracking-wider text-[color:var(--ps-text-soft)]",
                                                      children: [
                                                        "共 ",
                                                        o,
                                                        " 首",
                                                      ],
                                                    })
                                                  : e.jsx("span", {}),
                                                r && o > 0
                                                  ? e.jsxs("div", {
                                                      className:
                                                        "couple-bgm-eq flex h-5 items-end justify-end gap-0.5 pr-0.5",
                                                      "aria-hidden": !0,
                                                      children: [
                                                        e.jsx("span", {
                                                          className: "h-3",
                                                        }),
                                                        e.jsx("span", {
                                                          className: "h-4",
                                                        }),
                                                        e.jsx("span", {
                                                          className: "h-2.5",
                                                        }),
                                                        e.jsx("span", {
                                                          className: "h-3.5",
                                                        }),
                                                      ],
                                                    })
                                                  : null,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "relative mt-3 flex items-center justify-center gap-4 sm:mt-4 sm:gap-5",
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: p,
                                          disabled: !o,
                                          className:
                                            "flex h-10 w-10 items-center justify-center rounded-full border text-[color:var(--ps-text-body)] shadow-[var(--ps-control-shadow)] transition hover:border-[color:var(--ps-a-45)] hover:text-[color:var(--ps-text-h)] disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11 bg-[color:var(--ps-bgm-control)] border-[color:color-mix(in_srgb,var(--ps-line)_42%,transparent)]",
                                          "aria-label": "上一首",
                                          children: e.jsx(sv, {
                                            className:
                                              "h-[1.15rem] w-[1.15rem]",
                                            strokeWidth: 1.85,
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          className: "relative",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "pointer-events-none absolute inset-[-6px] rounded-full border border-[color:var(--ps-a-25)]",
                                              style: r
                                                ? {
                                                    animation:
                                                      "couple-bgm-glow-pulse 2s ease-in-out infinite",
                                                  }
                                                : void 0,
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: f,
                                              disabled: !o,
                                              className:
                                                "relative flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full border border-[color:var(--ps-a-50)] text-[color:var(--ps-text-h)] transition hover:scale-[1.03] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100",
                                              style: {
                                                background:
                                                  "var(--ps-tab-pill-bg)",
                                                boxShadow:
                                                  "var(--ps-play-main-shadow)",
                                              },
                                              "aria-label": r ? "暂停" : "播放",
                                              children: r
                                                ? e.jsx(Sl, {
                                                    className:
                                                      "h-5 w-5 sm:h-6 sm:w-6",
                                                    strokeWidth: 1.75,
                                                  })
                                                : e.jsx(xr, {
                                                    className:
                                                      "ml-0.5 h-5 w-5 sm:ml-1 sm:h-6 sm:w-6",
                                                    strokeWidth: 1.75,
                                                  }),
                                            }),
                                          ],
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: m,
                                          disabled: !o,
                                          className:
                                            "flex h-10 w-10 items-center justify-center rounded-full border text-[color:var(--ps-text-body)] shadow-[var(--ps-control-shadow)] transition hover:border-[color:var(--ps-a-45)] hover:text-[color:var(--ps-text-h)] disabled:cursor-not-allowed disabled:opacity-30 sm:h-11 sm:w-11 bg-[color:var(--ps-bgm-control)] border-[color:color-mix(in_srgb,var(--ps-line)_42%,transparent)]",
                                          "aria-label": "下一首",
                                          children: e.jsx(J0, {
                                            className:
                                              "h-[1.15rem] w-[1.15rem]",
                                            strokeWidth: 1.85,
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "mt-3 flex flex-wrap items-center justify-center gap-2 sm:mt-4 sm:gap-3",
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: g,
                                          disabled: !o,
                                          title: "单曲循环",
                                          className: `flex h-9 w-9 items-center justify-center rounded-2xl border transition disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10 ${i === "single" ? "border-[color:var(--ps-a-55)] bg-[color:var(--ps-mode-on-bg)] text-[color:var(--ps-accent-2)] shadow-inner" : "border-[color:color-mix(in_srgb,var(--ps-line)_45%,transparent)] bg-[color:var(--ps-bgm-control)] text-[color:var(--ps-text-muted)] hover:border-[color:var(--ps-a-35)] hover:text-[color:var(--ps-text-h)]"}`,
                                          "aria-pressed": i === "single",
                                          "aria-label": "单曲循环",
                                          children: e.jsx(Z1, {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.75,
                                          }),
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: x,
                                          disabled: !o,
                                          title: "随机播放",
                                          className: `flex h-9 w-9 items-center justify-center rounded-2xl border transition disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10 ${i === "random" ? "border-[color:var(--ps-a-55)] bg-[color:var(--ps-mode-on-bg)] text-[color:var(--ps-accent-2)] shadow-inner" : "border-[color:color-mix(in_srgb,var(--ps-line)_45%,transparent)] bg-[color:var(--ps-bgm-control)] text-[color:var(--ps-text-muted)] hover:border-[color:var(--ps-a-35)] hover:text-[color:var(--ps-text-h)]"}`,
                                          "aria-pressed": i === "random",
                                          "aria-label": "随机播放",
                                          children: e.jsx(ev, {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.75,
                                          }),
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          disabled:
                                            !o ||
                                            !Array.isArray(c) ||
                                            c.length === 0,
                                          title: "查看歌单、点歌切歌",
                                          onClick: () => V((H) => !H),
                                          className: `flex h-9 w-9 items-center justify-center rounded-2xl border transition disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10 ${q ? "border-[color:var(--ps-a-55)] bg-[color:var(--ps-mode-on-bg)] text-[color:var(--ps-accent-2)] shadow-inner" : "border-[color:color-mix(in_srgb,var(--ps-line)_45%,transparent)] bg-[color:var(--ps-bgm-control)] text-[color:var(--ps-text-muted)] hover:border-[color:var(--ps-a-35)] hover:text-[color:var(--ps-text-h)]"}`,
                                          "aria-pressed": q,
                                          "aria-expanded": q,
                                          "aria-label": "查看歌单曲目",
                                          children: e.jsx(Cc, {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.75,
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[8px] tracking-wide text-[color:var(--ps-text-caption)]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            i === "single"
                                              ? "text-[color:var(--ps-text-body)]"
                                              : "",
                                          children: "单曲",
                                        }),
                                        e.jsx("span", {
                                          className: "opacity-40",
                                          children: "·",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            i === "random"
                                              ? "text-[color:var(--ps-text-body)]"
                                              : "",
                                          children: "随机",
                                        }),
                                        e.jsx("span", {
                                          className: "opacity-40",
                                          children: "·",
                                        }),
                                        e.jsx("span", {
                                          className: q
                                            ? "text-[color:var(--ps-text-body)]"
                                            : "",
                                          children: "曲目",
                                        }),
                                      ],
                                    }),
                                    q && Array.isArray(c) && c.length > 0
                                      ? e.jsx("div", {
                                          ref: ie,
                                          className:
                                            "couple-bgm-scroll mt-2 max-h-[min(11rem,30dvh)] overflow-y-auto overflow-x-hidden overscroll-contain rounded-xl border px-1 py-1",
                                          style: {
                                            borderColor:
                                              "color-mix(in srgb, var(--ps-line) 42%, transparent)",
                                            backgroundColor:
                                              "var(--ps-bgm-tab-track)",
                                          },
                                          role: "listbox",
                                          "aria-label": "当前歌单曲目",
                                          children: e.jsx("ul", {
                                            className:
                                              "space-y-1 pb-0.5 pt-0.5",
                                            children: c.map((H, Y) => {
                                              const U = Y === d;
                                              return e.jsx(
                                                "li",
                                                {
                                                  children: e.jsxs("button", {
                                                    type: "button",
                                                    "data-bgm-q": Y,
                                                    onClick: () => h(Y),
                                                    className: `flex w-full items-start gap-2 rounded-lg px-2 py-1.5 text-left transition ${U ? "bg-[color:var(--ps-mode-on-bg)] ring-1 ring-[color:var(--ps-a-35)]" : "hover:bg-[color:var(--ps-bgm-list-row-hover)]"}`,
                                                    role: "option",
                                                    "aria-selected": U,
                                                    children: [
                                                      e.jsx("span", {
                                                        className:
                                                          "mt-0.5 w-5 shrink-0 text-center text-[9px] tabular-nums text-[color:var(--ps-text-muted)]",
                                                        children: Y + 1,
                                                      }),
                                                      e.jsxs("span", {
                                                        className:
                                                          "min-w-0 flex-1",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "block truncate text-[11px] font-medium text-[color:var(--ps-text-h)]",
                                                            children: H.title,
                                                          }),
                                                          H.artist
                                                            ? e.jsx("span", {
                                                                className:
                                                                  "mt-0.5 block truncate text-[9px] text-[color:var(--ps-text-muted)]",
                                                                children:
                                                                  H.artist,
                                                              })
                                                            : null,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                `bgm-q-${Y}`,
                                              );
                                            }),
                                          }),
                                        })
                                      : null,
                                    i === "single"
                                      ? e.jsx("p", {
                                          className:
                                            "mt-2 text-center text-[9px] leading-relaxed tracking-wide text-[color:var(--ps-text-soft)]",
                                          children:
                                            "播放结束将重复当前曲；仍可用上一首/下一首切歌。",
                                        })
                                      : i === "random"
                                        ? e.jsx("p", {
                                            className:
                                              "mt-2 text-center text-[9px] leading-relaxed tracking-wide text-[color:var(--ps-text-soft)]",
                                            children:
                                              "自动与「下一首」随机；「上一首」按歌单顺序回退。",
                                          })
                                        : null,
                                  ],
                                }),
                              ],
                            })
                          : null,
                        !n && S !== "welcome"
                          ? e.jsx("p", {
                              className:
                                "couple-bgm-serif pb-1 pt-4 text-center text-[10px] italic leading-relaxed text-[color:var(--ps-text-caption)] sm:text-[11px]",
                              children:
                                "选一张歌单，让每次进入都像推开一扇有音乐的窗。",
                            })
                          : null,
                        e.jsx("div", {
                          className: "h-4 shrink-0",
                          "aria-hidden": !0,
                        }),
                      ],
                    }),
                    e.jsx("footer", {
                      className:
                        "relative z-[2] shrink-0 border-t border-[color:var(--ps-footer-divider)] px-4 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5",
                      style: { backgroundColor: "var(--ps-bgm-footer)" },
                      children: e.jsxs("div", {
                        className: "flex gap-2.5",
                        children: [
                          n && S !== "welcome"
                            ? e.jsx("button", {
                                type: "button",
                                onClick: oe,
                                className:
                                  "flex-1 rounded-2xl border border-[color:color-mix(in_srgb,var(--ps-line)_58%,transparent)] bg-white/50 py-3 text-[11px] font-medium tracking-wide text-[color:var(--ps-text-body)] shadow-sm backdrop-blur-sm transition hover:border-[color:var(--ps-a-12)] hover:bg-white/80 hover:text-[color:var(--ps-text-h)]",
                                children: "清除绑定",
                              })
                            : null,
                          e.jsx("button", {
                            type: "button",
                            onClick: s,
                            className:
                              "flex-1 rounded-2xl border border-[color:var(--ps-a-35)] py-2.5 text-[11px] font-medium tracking-[0.15em] text-[color:var(--ps-text-h)]",
                            style: {
                              backgroundImage:
                                "linear-gradient(to right, color-mix(in srgb, var(--ps-accent) 22%, var(--ps-bgm-surface)), var(--ps-bgm-surface), color-mix(in srgb, var(--ps-accent) 16%, var(--ps-bgm-surface)))",
                              boxShadow: "var(--ps-complete-shadow)",
                            },
                            children: "完成",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  };
function uk(t) {
  return !t || typeof t != "string"
    ? []
    : t
        .split(/\r?\n/)
        .map((s) =>
          s
            .replace(/^\[[\d:.]+\]/g, "")
            .replace(/^\[[a-zA-Z]+:[^\]]+\]/g, "")
            .trim(),
        )
        .filter(Boolean);
}
function fk(t) {
  if (!t || typeof t != "string") return [];
  const s = [],
    n = /^\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\](.*)$/;
  for (const a of t.split(/\r?\n/)) {
    const r = a.trim();
    if (!r) continue;
    const i = r.match(n);
    if (!i) continue;
    const o = parseInt(i[1], 10),
      c = parseInt(i[2], 10),
      d = i[3] ? i[3].padEnd(3, "0").slice(0, 3) : "000",
      u = parseInt(d, 10),
      f = o * 60 + c + u / 1e3,
      p = (i[4] || "").replace(/\s+/g, " ").trim();
    p && s.push({ timeSec: f, text: p });
  }
  return (s.sort((a, r) => a.timeSec - r.timeSec), s);
}
function xV({ className: t }) {
  return e.jsxs("svg", {
    className: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": !0,
    children: [
      e.jsx("path", {
        d: "M22 2L11 13",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("path", {
        d: "M22 2l-7 20-4-9-9-4 20-7z",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
function mk({ className: t }) {
  return e.jsxs("svg", {
    className: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": !0,
    children: [
      e.jsx("path", {
        d: "M9 18V5l12-2v13",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      e.jsx("circle", {
        cx: "6",
        cy: "18",
        r: "3",
        stroke: "currentColor",
        strokeWidth: "1.5",
        fill: "none",
      }),
      e.jsx("circle", {
        cx: "18",
        cy: "16",
        r: "3",
        stroke: "currentColor",
        strokeWidth: "1.5",
        fill: "none",
      }),
    ],
  });
}
function hV(t) {
  if (typeof t != "number" || !Number.isFinite(t)) return "";
  const s = new Date(t),
    n = new Date(),
    a = (u) => String(u).padStart(2, "0"),
    r = `${a(s.getHours())}:${a(s.getMinutes())}`,
    i = (u) => new Date(u.getFullYear(), u.getMonth(), u.getDate()).getTime(),
    o = i(s),
    c = i(n);
  if (o === c) return r;
  const d = new Date(c);
  return (
    d.setDate(d.getDate() - 1),
    o === d.getTime()
      ? `昨天 ${r}`
      : s.getFullYear() === n.getFullYear()
        ? `${s.getMonth() + 1}月${s.getDate()}日 ${r}`
        : `${s.getFullYear()}年${s.getMonth() + 1}月${s.getDate()}日 ${r}`
  );
}
const gV = 120 * 1e3;
function nC(t, s) {
  const n = t.at || 0,
    a = s.at || 0;
  if (n !== a) return n - a;
  const r = (c) => (c === "system" ? 0 : c === "user" ? 1 : c === "ta" ? 2 : 3),
    i = r(t.from),
    o = r(s.from);
  return i !== o ? i - o : String(t.id || "").localeCompare(String(s.id || ""));
}
function bV(t) {
  const s = [...t].sort(nC),
    n = [];
  let a = [];
  const r = () => {
    if (!a.length) return;
    const i = a[0].at || Date.now();
    (n.push({ key: `r-${n.length}-${i}`, ts: i, items: [...a] }), (a = []));
  };
  for (let i = 0; i < s.length; i++) {
    const o = s[i],
      c = a.length ? a[a.length - 1] : null;
    if (!c) {
      a.push(o);
      continue;
    }
    if (o.from === "user" && c.from === "user") {
      a.push(o);
      continue;
    }
    if (o.from === "user" && c.from !== "user") {
      (r(), a.push(o));
      continue;
    }
    if (o.from === "ta" && c.from === "ta" && (o.at || 0) !== (c.at || 0)) {
      (r(), a.push(o));
      continue;
    }
    if (c.from === "user" && o.from !== "user") {
      a.push(o);
      continue;
    }
    if (c.from !== "user" && o.from !== "user") {
      if ((o.at || 0) - (c.at || 0) > gV) {
        (r(), a.push(o));
        continue;
      }
      a.push(o);
      continue;
    }
    (r(), a.push(o));
  }
  return (r(), n);
}
function yV(t, s) {
  if (!Array.isArray(t) || t.length === 0) return "";
  const n = Math.max(0, Math.min(s >= 0 ? s : 0, t.length - 1)),
    a = Math.max(0, n - 2);
  return t.slice(a, a + 12).map((i, o) => `${a + o + 1}. ${i.text}`).join(`
`);
}
function vV(t, s, n) {
  if (!(t != null && t.length)) return -1;
  if (t[0].timeSec < 0) {
    const i = Number(n);
    if (!Number.isFinite(i) || i <= 0) return 0;
    const o = Number(s),
      c = Math.min(1, Math.max(0, Number.isFinite(o) ? o / i : 0));
    return Math.min(t.length - 1, Math.floor(c * t.length));
  }
  const a = Number(s);
  if (!Number.isFinite(a)) return 0;
  let r = 0;
  for (let i = 0; i < t.length && t[i].timeSec <= a + 0.03; i++) r = i;
  return r;
}
const pk = (t) => String(t).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
function Pb(t, s) {
  if (!t) return "";
  const n = s;
  if (t.url) {
    const a = pk(t.url),
      r = t.format || "opentype",
      i = `url('${a}') format('${r}')`;
    return `@font-face{font-family:'${n}';src:${i};font-weight:100 950;font-style:normal;font-display:swap;}`;
  }
  if (t.dataUrl) {
    const a = pk(t.dataUrl),
      r = t.format || "woff2";
    return `@font-face{font-family:'${n}';src:url('${a}') format('${r}');font-weight:100 950;font-style:normal;font-display:swap;}`;
  }
  return "";
}
const Ob = "PrismLyricActive",
  Bb = "PrismLyricInactive",
  Df = I0(Tu),
  vx = {
    primary: "#5C4D43",
    secondary: "#8C7A6D",
    muted: "#A38D82",
    bubble: "#7A6B62",
  },
  wx = {
    primary: "#f4f1ec",
    secondary: "#e8e5df",
    muted: "#b8b2a8",
    bubble: "#E8A090",
  },
  wV = ({
    onNavigate: t,
    onBack: s,
    taAvatar: n,
    userAvatar: a,
    daysTogether: r,
    prismUi: i,
    onUpdatePrismUi: o,
    prismBgm: c,
    onUpdatePrismBgm: d,
    coverWelcomeTts: u = null,
    onUpdateCoverWelcomeTts: f,
    skipCoverTransition: p = !1,
    onUpdateSkipCoverTransition: m,
    entryWelcomeSessionKey: h = "",
    playEntryWelcomeTts: g = !1,
    chatFavorites: x = [],
    chats: y = [],
    listenTogetherActive: v = !1,
    listenTogetherBubbleLines: b = [],
    onListenTogetherToggle: N,
    listenTogetherUserBubble: w = "",
    onListenTogetherUserBubbleChange: _,
    onListenTogetherReceive: A,
    onCyclePrismBgmPlaylist: k,
    listenTogetherHistory: C = [],
    listenTogetherTrackReactLoading: M = !1,
    onListenTogetherAfterCharacterTrackChange: E,
    appWindowMode: S = "full",
    menuBadges: j = {},
  }) => {
    var kt, Tt, Yt;
    const [T, I] = l.useState(!1),
      [L, B] = l.useState(0),
      [F, D] = l.useState(!1),
      [$, P] = l.useState(0),
      z = l.useRef(null),
      O = l.useRef(null),
      Z = l.useRef(null),
      K = l.useRef("mouse"),
      q = l.useRef(!1),
      V = l.useRef(0),
      ne = l.useRef(0),
      le = l.useRef(0),
      ie = l.useRef(0),
      X = l.useRef(0),
      je = l.useRef(0),
      xe = l.useRef(0),
      ye = l.useRef(!1),
      [R, oe] = l.useState(!1),
      [ee, H] = l.useState(null),
      [Y, U] = l.useState(!1),
      ce = l.useRef(null),
      pe = l.useRef(null),
      se = l.useRef(null),
      Te = "Our Universe",
      ke = "想你啦 ☁️",
      W = "贴贴 ✨",
      ue = "You are my today and all of my tomorrows",
      re = Df,
      he = (de) => {
        const Me = String(de || "").trim();
        return /^#[0-9A-Fa-f]{6}$/.test(Me)
          ? Me
          : /^#[0-9A-Fa-f]{3}$/.test(Me)
            ? `#${Me[1]}${Me[1]}${Me[2]}${Me[2]}${Me[3]}${Me[3]}`
            : "#6F6C78";
      },
      ge = (de) => ({
        primary: he(de.primary || re.primary),
        secondary: he(de.secondary || re.secondary),
        muted: he(de.muted || re.muted),
        bubble: he(de.bubble || re.bubble),
      }),
      J = "PrismSpaceCustomUI",
      G = (de) => {
        const Me = ((de == null ? void 0 : de.name) || "").toLowerCase(),
          et = (de == null ? void 0 : de.type) || "";
        return Me.endsWith(".woff2") || et.includes("woff2")
          ? "woff2"
          : Me.endsWith(".woff") ||
              (et.includes("woff") && !et.includes("woff2"))
            ? "woff"
            : Me.endsWith(".otf") || et.includes("opentype")
              ? "opentype"
              : Me.endsWith(".ttf") || et.includes("ttf")
                ? "truetype"
                : "opentype";
      },
      we = (de) => {
        const Me = String(de || "")
          .split("?")[0]
          .toLowerCase();
        return Me.endsWith(".woff2")
          ? "woff2"
          : Me.endsWith(".woff")
            ? "woff"
            : Me.endsWith(".ttf")
              ? "truetype"
              : Me.endsWith(".otf")
                ? "opentype"
                : null;
      },
      Q = (de) => {
        const Me = String(de || "").toLowerCase();
        return Me.includes("woff2")
          ? "woff2"
          : Me.includes("font-woff") && !Me.includes("woff2")
            ? "woff"
            : Me.includes("ttf") || Me.includes("sfnt")
              ? "truetype"
              : Me.includes("otf") || Me.includes("opentype")
                ? "opentype"
                : null;
      },
      ve = (de) => {
        if (!de) return null;
        if (typeof de.url == "string" && de.url.trim()) {
          const Me = de.url.trim();
          return {
            source: "url",
            url: Me,
            format: de.format || we(Me) || "opentype",
          };
        }
        return typeof de.dataUrl == "string" && de.dataUrl.startsWith("data:")
          ? {
              source: "file",
              dataUrl: de.dataUrl,
              format: de.format || "woff2",
            }
          : null;
      },
      Ve = (de) => Pb(de, J),
      Ae = typeof r == "number" ? r : Number(r),
      te = Number.isFinite(Ae) && Ae >= 0 ? Math.floor(Ae) : 1;
    l.useEffect(() => {
      I(!0);
    }, []);
    const Se = (245 / 600) * 100,
      Fe =
        "https://images.unsplash.com/photo-1518895949257-7621bf272d66?auto=format&fit=crop&w=800&q=80",
      $e = i || {},
      [tt, Xe] = l.useState($e.backgroundImage || Fe),
      [ht, Pe] = l.useState($e.universeTitle || Te),
      [ut, _t] = l.useState($e.bubbleLeftText || ke),
      [Ee, fe] = l.useState($e.bubbleRightText || W),
      [He, Ie] = l.useState($e.menuCustom || {}),
      [Ce, Re] = l.useState($e.loveQuoteText ?? ue),
      [De, at] = l.useState(() => ({ ...re, ...($e.themeColors || {}) })),
      [ft, vt] = l.useState(null),
      [Oe, Qe] = l.useState(() => ve($e.customFont)),
      [Ye, Ze] = l.useState(""),
      [Ue, me] = l.useState(!1),
      [jt, Gt] = l.useState(0),
      [Pt, Wt] = l.useState(""),
      [ct, Kt] = l.useState(!1),
      [fs, gt] = l.useState(null),
      ae = l.useRef(null),
      nt = l.useRef(null),
      [It, Xt] = l.useState([]),
      [bs, ss] = l.useState(!1),
      [_s, qs] = l.useState(!1),
      Bs = l.useRef(null),
      [Js, Xs] = l.useState(() =>
        $e.listenLyricLayout === "magazine" ? "magazine" : "default",
      ),
      [gn, sn] = l.useState(!1),
      [ln, rn] = l.useState(() => ve($e.lyricFontActive)),
      [wt, xs] = l.useState(() => ve($e.lyricFontInactive)),
      ot = ct || M,
      { fetchLyric: st } = Ii(),
      $t = l.useMemo(() => (Array.isArray(C) ? [...C] : []).sort(nC), [C]),
      Ft = l.useMemo(() => bV($t), [$t]);
    (l.useEffect(() => {
      if (!_s) return;
      const de = Bs.current;
      if (!de) return;
      const Me = () => {
        de.scrollTop = de.scrollHeight;
      };
      (Me(),
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(Me);
        }));
    }, [_s, Ft.length, C]),
      l.useEffect(() => {
        if (!v || !(b != null && b.length) || ot) return;
        Gt(0);
        const de = window.setInterval(() => {
          Gt((Me) => (Me + 1) % b.length);
        }, 3200);
        return () => window.clearInterval(de);
      }, [v, b, ot]),
      l.useEffect(() => {
        if (!fs) return;
        const de = window.setTimeout(() => gt(null), 4200);
        return () => window.clearTimeout(de);
      }, [fs]),
      l.useEffect(() => {
        v || (Wt(""), Kt(!1), sn(!1));
      }, [v]));
    const {
        bgmPlaying: es,
        bgmPlayMode: At,
        bgmQueueLength: Jt,
        bgmQueueList: Vt,
        bgmCurrentIndex: qt,
        bgmTrackInfo: Lt,
        bgmCurrentTime: Qt,
        bgmDuration: js,
        onBgmTogglePlay: cs,
        onBgmPrev: Ne,
        onBgmNext: Je,
        onBgmJumpToIndex: St,
        onBgmToggleSingleMode: Be,
        onBgmToggleRandomMode: Ke,
        suppressNextTrackChangeNotification: Nt,
      } = ZA(),
      bt = l.useMemo(() => vV(It, Qt, js), [It, Qt, js]);
    (l.useEffect(() => {
      if (!v) {
        (Xt([]), ss(!1));
        return;
      }
      const de = Lt;
      if (!de) {
        Xt([]);
        return;
      }
      if (de.source === "netease_user" && de.platformId != null) {
        let Me = !1;
        return (
          ss(!0),
          st(de.platformId)
            .then((et) => {
              if (Me) return;
              const Ct = et == null ? void 0 : et.lrc,
                Dt =
                  typeof Ct == "string"
                    ? Ct
                    : typeof Ct == "object" && Ct != null && Ct.lyric
                      ? Ct.lyric
                      : "",
                Mt = fk(Dt);
              if (Mt.length > 0) Xt(Mt);
              else {
                const Ut = uk(Dt);
                Xt(Ut.map((ws) => ({ timeSec: -1, text: ws })));
              }
            })
            .catch(() => {
              Me || Xt([]);
            })
            .finally(() => {
              Me || ss(!1);
            }),
          () => {
            Me = !0;
          }
        );
      }
      if (de.source === "local") {
        const Me = typeof de.lrc_data == "string" ? de.lrc_data.trim() : "";
        if ((ss(!1), !Me)) {
          Xt([]);
          return;
        }
        const et = fk(Me);
        if (et.length > 0) Xt(et);
        else {
          const Ct = uk(Me);
          Xt(Ct.map((Dt) => ({ timeSec: -1, text: Dt })));
        }
        return;
      }
      (Xt([]), ss(!1));
    }, [v, Lt, st]),
      l.useEffect(() => {
        if (!v || bt < 0 || Js !== "default") return;
        const de = nt.current;
        de &&
          window.requestAnimationFrame(() => {
            de.scrollIntoView({ block: "center", behavior: "auto" });
          });
      }, [v, bt, It.length, Js]));
    const { onUserGestureRetry: ns } = eC({
        entrySessionKey: h,
        favoriteId: u == null ? void 0 : u.favoriteId,
        favorites: x,
        chats: y,
        active: !!g,
      }),
      Ge = l.useRef(He);
    (l.useEffect(() => {
      Ge.current = He;
    }, [He]),
      l.useEffect(() => {
        (Xe($e.backgroundImage || Fe),
          Pe($e.universeTitle || Te),
          _t($e.bubbleLeftText || ke),
          fe($e.bubbleRightText || W),
          Ie($e.menuCustom || {}),
          Re($e.loveQuoteText ?? ue),
          at({ ...re, ...($e.themeColors || {}) }),
          Qe($e.customFont || null),
          Xs($e.listenLyricLayout === "magazine" ? "magazine" : "default"),
          rn(ve($e.lyricFontActive)),
          xs(ve($e.lyricFontInactive)));
      }, [i]));
    const Le = (de = {}) => {
        if (typeof o != "function") return;
        const {
          menuCustom: Me,
          themeColors: et,
          customFont: Ct,
          lyricFontActive: Dt,
          lyricFontInactive: Mt,
          ...Ut
        } = de;
        o({
          ...$e,
          backgroundImage: tt,
          universeTitle: ht,
          bubbleLeftText: ut,
          bubbleRightText: Ee,
          loveQuoteText: Ce,
          menuCustom: Me !== void 0 ? Me : Ge.current,
          themeColors: ge(et ? { ...De, ...et } : De),
          customFont: Ct !== void 0 ? Ct : Oe,
          listenLyricLayout: Js,
          lyricFontActive: Dt !== void 0 ? Dt : ln,
          lyricFontInactive: Mt !== void 0 ? Mt : wt,
          ...Ut,
        });
      },
      _e = (de) => {
        Le({ menuCustom: de });
      },
      yt = new Set(["memory_rewrite", "season_journey"]),
      rt = [
        { id: "ledger", icon: K0, label: "LEDGER", zh: "记账", angle: -50 },
        { id: "diary", icon: Rm, label: "MEMO", zh: "备忘录", angle: -30 },
        { id: "room", icon: m0, label: "LISTEN", zh: "一起听", angle: -10 },
        {
          id: "memory_rewrite",
          icon: Lu,
          label: "MEMORY",
          zh: "回忆改写",
          angle: 10,
        },
        {
          id: "season_journey",
          icon: bT,
          label: "SEASON",
          zh: "赛季旅程",
          angle: 30,
        },
        { id: "chat", icon: xI, label: "DICE", zh: "骰子", angle: 50 },
      ],
      ze = (de, Me) => {
        var Mt;
        const Ct = {
            ...(((Mt = Ge.current) == null ? void 0 : Mt[de]) || {}),
            ...Me,
          },
          Dt = { ...(Ge.current || {}), [de]: Ct };
        (Ie(Dt), _e(Dt));
      },
      lt = (de) => {
        var Dt;
        const et = { ...(((Dt = Ge.current) == null ? void 0 : Dt[de]) || {}) };
        delete et.iconSvg;
        const Ct = { ...(Ge.current || {}) };
        (Object.keys(et).length === 0 ? delete Ct[de] : (Ct[de] = et),
          Ie(Ct),
          _e(Ct));
      },
      it = () => {
        (Xe(Fe), Le({ backgroundImage: Fe }));
      },
      Ht = () => {
        var de;
        return (de = ce.current) == null ? void 0 : de.click();
      },
      is = 72,
      os = () => {
        (ie.current &&
          (window.cancelAnimationFrame(ie.current), (ie.current = 0)),
          (X.current = 0),
          (xe.current = 0));
      },
      as = (de) => {
        B((Me) => {
          let et = Me + de;
          return (
            et > is && (et = is),
            et < -is && (et = -is),
            (le.current = et),
            et
          );
        });
      };
    (l.useEffect(() => {
      le.current = L;
    }, [L]),
      l.useEffect(
        () => () => {
          os();
        },
        [],
      ));
    const vs = (de) => {
        var Ct;
        if (R) return;
        if (
          (os(),
          (Z.current = de.target),
          (K.current = de.pointerType || "mouse"),
          typeof ((Ct = de.currentTarget) == null
            ? void 0
            : Ct.setPointerCapture) == "function")
        )
          try {
            de.currentTarget.setPointerCapture(de.pointerId);
          } catch {}
        D(!0);
        const Me = de.clientX || (de.touches && de.touches[0].clientX) || 0,
          et = de.clientY || (de.touches && de.touches[0].clientY) || 0;
        (P(Me),
          (q.current = !0),
          (V.current = Me),
          (ne.current = et),
          (ye.current = !1),
          (je.current = performance.now()),
          (X.current = 0));
      },
      ts = (de) => {
        if (R || !q.current) return;
        const Me = de.clientX || (de.touches && de.touches[0].clientX),
          et = de.clientY || (de.touches && de.touches[0].clientY);
        if (!Number.isFinite(Me) || !Number.isFinite(et)) return;
        const Ct = Me - V.current,
          Dt = et - ne.current,
          Mt = K.current === "touch",
          Ut = Mt ? (Math.abs(Ct) >= Math.abs(Dt) ? Ct : Dt * 0.9) : Ct;
        Math.abs(Ut) > 2 && (ye.current = !0);
        const Ls = Ut * (Mt ? 0.82 : 0.34);
        as(Ls);
        const Ot = performance.now(),
          rs = Math.max(1, Ot - (je.current || Ot)),
          gs = Ls / rs;
        ((X.current = X.current * 0.72 + gs * 0.28),
          (je.current = Ot),
          P(Me),
          (V.current = Me),
          (ne.current = et));
      },
      ys = () => {
        const de = Z.current;
        Z.current = null;
        const Me = ye.current;
        (D(!1), (q.current = !1));
        const et = K.current === "touch";
        if (!R && Me && et && Math.abs(X.current) >= 0.02) {
          const Dt = (Mt) => {
            xe.current || (xe.current = Mt);
            const Ut = Math.max(1, Math.min(34, Mt - xe.current));
            xe.current = Mt;
            const ws = le.current,
              Ls = ws >= is && X.current > 0,
              Ot = ws <= -is && X.current < 0;
            if (
              ((Ls || Ot) && (X.current *= -0.35),
              as(X.current * Ut),
              (X.current *= Math.pow(0.92, Ut / 16.7)),
              Math.abs(X.current) < 0.003)
            ) {
              os();
              return;
            }
            ie.current = window.requestAnimationFrame(Dt);
          };
          ie.current = window.requestAnimationFrame(Dt);
        }
        if (!R && !Me && de && typeof de.closest == "function") {
          const Ct = de.closest("[data-prism-menu]");
          if (Ct) {
            const Dt = Ct.getAttribute("data-prism-menu"),
              Mt = rt.find((Ut) => Ut.id === Dt);
            (Mt == null ? void 0 : Mt.id) === "room"
              ? v || t == null || t("listen_together")
              : Mt && (t == null || t(Mt.id));
          }
        }
      },
      Vs = () => {
        ((Z.current = null), D(!1), (q.current = !1), (X.current = 0));
      },
      pt = (de) => {
        var et;
        if (R) return;
        const Me = de.currentTarget;
        if (
          !(
            typeof ((et = de.target) == null ? void 0 : et.closest) ==
              "function" && de.target.closest(".prism-wheel-gear")
          ) &&
          typeof (Me == null ? void 0 : Me.setPointerCapture) == "function"
        )
          try {
            Me.setPointerCapture(de.pointerId);
          } catch {}
      };
    l.useEffect(() => {
      const de = O.current;
      if (!de || typeof de.addEventListener != "function") return;
      const Me = (et) => {
        if (R) return;
        const Ct = et.deltaX || 0,
          Dt = et.deltaY || 0,
          Mt = Math.abs(Ct) > Math.abs(Dt) ? Ct : Dt;
        Mt && (et.preventDefault(), as(Mt * 0.12));
      };
      return (
        de.addEventListener("wheel", Me, { passive: !1 }),
        () => de.removeEventListener("wheel", Me)
      );
    }, [R]);
    const qe = ee || ((kt = rt[0]) == null ? void 0 : kt.id),
      dt = (qe && (He == null ? void 0 : He[qe])) || {},
      xt = he(dt.iconColor || re.muted),
      zt = he(dt.labelColor || re.secondary),
      ms = tt === Fe,
      Cs = $e.uiShellTheme || Tu,
      us = tC(Cs),
      Rs = sC(us),
      Rt = ge(De),
      Es = I0(Cs),
      nn =
        (he(Rt.primary).toLowerCase() === he(vx.primary).toLowerCase() &&
          he(Rt.secondary).toLowerCase() === he(vx.secondary).toLowerCase() &&
          he(Rt.muted).toLowerCase() === he(vx.muted).toLowerCase() &&
          he(Rt.bubble).toLowerCase() === he(vx.bubble).toLowerCase()) ||
        (he(Rt.primary).toLowerCase() === he(Df.primary).toLowerCase() &&
          he(Rt.secondary).toLowerCase() === he(Df.secondary).toLowerCase() &&
          he(Rt.muted).toLowerCase() === he(Df.muted).toLowerCase() &&
          he(Rt.bubble).toLowerCase() === he(Df.bubble).toLowerCase()) ||
        (Cs === "black" &&
          he(Rt.primary).toLowerCase() === he(wx.primary).toLowerCase() &&
          he(Rt.secondary).toLowerCase() === he(wx.secondary).toLowerCase() &&
          he(Rt.muted).toLowerCase() === he(wx.muted).toLowerCase() &&
          he(Rt.bubble).toLowerCase() === he(wx.bubble).toLowerCase()),
      Hs = nn ? ge(Es) : Rt,
      cn = (de, Me, et = !1) => {
        vt({
          field: de,
          title: Me,
          value:
            de === "universeTitle"
              ? ht
              : de === "bubbleLeft"
                ? ut
                : de === "bubbleRight"
                  ? Ee
                  : de === "loveQuote"
                    ? Ce
                    : "",
          multiline: et,
        });
      },
      fn = () => {
        if (ft) {
          switch (ft.field) {
            case "universeTitle": {
              const de = String(ft.value).trim();
              if (!de) {
                vt(null);
                return;
              }
              (Pe(de), Le({ universeTitle: de }));
              break;
            }
            case "bubbleLeft": {
              const de = String(ft.value);
              (_t(de), Le({ bubbleLeftText: de }));
              break;
            }
            case "bubbleRight": {
              const de = String(ft.value);
              (fe(de), Le({ bubbleRightText: de }));
              break;
            }
            case "loveQuote": {
              const de = String(ft.value);
              (Re(de), Le({ loveQuoteText: de }));
              break;
            }
          }
          vt(null);
        }
      },
      Rn = {
        "--p-c1": Hs.primary,
        "--p-c2": Hs.secondary,
        "--p-c3": Hs.muted,
        "--p-c4": Hs.bubble,
      },
      Qn = 3 * 1024 * 1024,
      ra = !!(Oe && (Oe.dataUrl || Oe.url)),
      _a = (de) => {
        if (!de) return;
        if (de.size > Qn) {
          alert("字体文件过大，请选择 3MB 以内的 .woff2 / .woff / .ttf / .otf");
          return;
        }
        const Me = new FileReader();
        ((Me.onload = () => {
          const et = String(Me.result || "");
          if (!et.startsWith("data:")) return;
          const Ct = ve({ dataUrl: et, format: G(de) });
          (Qe(Ct), Ze(""), Le({ customFont: Ct }));
        }),
          Me.readAsDataURL(de));
      },
      Ya = () => {
        const de = String(Ye || "").trim();
        if (!de) {
          alert("请先粘贴图床上的字体文件直链（需 http/https）");
          return;
        }
        let Me;
        try {
          Me = new URL(de);
        } catch {
          alert("链接格式不正确，请使用以 http:// 或 https:// 开头的地址");
          return;
        }
        if (Me.protocol !== "http:" && Me.protocol !== "https:") {
          alert("仅支持 http 或 https 链接");
          return;
        }
        const et = Me.href;
        (async () => {
          try {
            const Ct = await fetch(et, { mode: "cors" });
            if (!Ct.ok) throw new Error("bad status");
            const Dt = await Ct.blob();
            if (Dt.size > Qn) {
              alert(
                "字体文件过大（超过 3MB），请换用更小的文件或压缩后再上传图床",
              );
              return;
            }
            const Mt = new FileReader();
            ((Mt.onload = () => {
              const Ut = String(Mt.result || "");
              if (!Ut.startsWith("data:")) return;
              const ws = we(et) || Q(Dt.type) || "woff2",
                Ls = ve({ dataUrl: Ut, format: ws });
              (Qe(Ls), Le({ customFont: Ls }));
            }),
              Mt.readAsDataURL(Dt));
          } catch {
            const Ct = ve({ url: et, format: we(et) || void 0 });
            if (!Ct) return;
            (Qe(Ct), Le({ customFont: Ct }));
          }
        })();
      },
      Fr = () => {
        (Qe(null), Ze(""), Le({ customFont: null }));
      },
      kr = l.useMemo(() => {
        const de = ln;
        return de && (de.dataUrl || de.url)
          ? `'${Ob}', ui-serif, Georgia, 'Songti SC', serif`
          : void 0;
      }, [ln]),
      Oa = l.useMemo(() => {
        const de = wt;
        return de && (de.dataUrl || de.url)
          ? `'${Bb}', ui-sans-serif, system-ui, sans-serif`
          : void 0;
      }, [wt]),
      ur = kr ? "prism-lyric-font-active" : "",
      mi = Oa ? "prism-lyric-font-inactive" : "",
      ti =
        ((Tt = c == null ? void 0 : c.playlistName) == null
          ? void 0
          : Tt.trim()) || "La Vie En Rose",
      pi = () => {
        const de = (Pt || "").trim();
        de && (_ == null || _(de), Wt(""));
      },
      ii = async () => {
        var de;
        if (!(!A || ct || M)) {
          (gt(null), Kt(!0));
          try {
            const Me = (w || "").trim() || (Pt || "").trim(),
              et =
                ((de = c == null ? void 0 : c.playlistName) == null
                  ? void 0
                  : de.trim()) || ti,
              Ct = yV(It, bt),
              Dt = await A({
                userBubbleText: Me,
                playlistLabel: et,
                trackTitle: (Lt == null ? void 0 : Lt.title) || "",
                trackArtist: (Lt == null ? void 0 : Lt.artist) || "",
                trackPlatformId: (Lt == null ? void 0 : Lt.platformId) ?? null,
                lyricLinesBlock: Ct,
              });
            if (!(Dt != null && Dt.ok))
              gt(
                (Dt == null ? void 0 : Dt.error) === "api_not_configured"
                  ? "请先在设置中配置 API"
                  : "生成失败，请稍后重试",
              );
            else if (Dt.playerAction && Dt.playerAction !== "none") {
              Nt == null || Nt();
              const Mt = Dt.playerAction;
              Mt === "next"
                ? (Je("char_next"),
                  window.setTimeout(
                    () => (E == null ? void 0 : E({ playerAction: Mt })),
                    120,
                  ))
                : Mt === "prev"
                  ? (Ne("char_prev"),
                    window.setTimeout(
                      () => (E == null ? void 0 : E({ playerAction: Mt })),
                      120,
                    ))
                  : Mt === "changePlaylist" &&
                    ((await (k == null ? void 0 : k())) || Je("char_next"),
                    window.setTimeout(
                      () => (E == null ? void 0 : E({ playerAction: Mt })),
                      420,
                    ));
            }
          } catch {
            gt("生成失败，请稍后重试");
          } finally {
            Kt(!1);
          }
        }
      },
      Br = (w || "").trim();
    return e.jsxs("div", {
      ref: z,
      "data-ps-shell": us.id,
      className: "prism-root relative h-full min-h-0 w-full",
      style: { ...Rn, ...Rs, backgroundColor: us.rootBg },
      onPointerDownCapture: () => {
        g && ns();
      },
      children: [
        e.jsx(pV, {
          open: Ue,
          onClose: () => me(!1),
          currentBinding: c,
          onSave: (de) => {
            typeof d == "function" && d(de);
          },
          bgmPlaying: es,
          bgmPlayMode: At,
          bgmQueueLength: Jt,
          bgmQueueList: Vt,
          bgmCurrentIndex: qt,
          bgmTrackInfo: Lt,
          onBgmTogglePlay: cs,
          onBgmPrev: Ne,
          onBgmNext: Je,
          onBgmJumpToIndex: St,
          onBgmToggleSingleMode: Be,
          onBgmToggleRandomMode: Ke,
          chatFavorites: x,
          chats: y,
          welcomeTtsFavoriteId: (u == null ? void 0 : u.favoriteId) ?? null,
          onSaveWelcomeTts: (de) => {
            typeof f == "function" && f(de ? { favoriteId: de } : null);
          },
          uiShellThemeId: Cs,
          appWindowMode: S,
        }),
        _s
          ? e.jsx("div", {
              className:
                "absolute inset-0 z-[68] flex items-center justify-center bg-black/35 px-4 py-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-[2px]",
              role: "presentation",
              onClick: () => qs(!1),
              children: e.jsxs("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "prism-listen-history-title",
                className:
                  "flex h-[min(50vh,50dvh)] max-h-[50vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-md",
                style: {
                  borderColor: "var(--ps-input-border)",
                  backgroundColor:
                    us.id === "black"
                      ? "rgba(28,28,36,0.97)"
                      : "rgba(255,252,250,0.98)",
                  boxShadow: "0 24px 64px var(--ps-a-22)",
                  color: Hs.primary,
                },
                onClick: (de) => de.stopPropagation(),
                children: [
                  e.jsxs("div", {
                    className:
                      "mb-3 flex shrink-0 items-center justify-between gap-2",
                    children: [
                      e.jsx("p", {
                        id: "prism-listen-history-title",
                        className:
                          "font-luxury text-base font-medium italic tracking-wide",
                        style: { color: Hs.primary },
                        children: "一起听记录",
                      }),
                      e.jsx("button", {
                        type: "button",
                        "aria-label": "关闭",
                        className:
                          "rounded-full p-1.5 opacity-70 transition hover:opacity-100",
                        style: { color: Hs.primary },
                        onClick: () => qs(!1),
                        children: e.jsx(Ts, {
                          className: "h-5 w-5",
                          strokeWidth: 1.5,
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    ref: Bs,
                    className:
                      "min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                    style: { WebkitOverflowScrolling: "touch" },
                    children:
                      Ft.length === 0
                        ? e.jsx("p", {
                            className:
                              "font-modern py-8 text-center text-sm opacity-80",
                            style: { color: Hs.primary },
                            children: "暂无一起听记录",
                          })
                        : e.jsx("ul", {
                            className:
                              "font-modern list-none flex flex-col gap-2 pb-1 pl-0 text-[0.8125rem] leading-relaxed",
                            style: { color: Hs.primary },
                            children: Ft.map((de) => {
                              const Me = hV(de.ts);
                              return e.jsxs(
                                pn.Fragment,
                                {
                                  children: [
                                    e.jsx("li", {
                                      className:
                                        "flex justify-center px-2 pt-1",
                                      children: e.jsx("span", {
                                        className:
                                          "font-modern inline-block max-w-[min(92%,22rem)] rounded-md px-2 py-0.5 text-center text-[10px] leading-tight",
                                        style: {
                                          color: Hs.muted,
                                          backgroundColor: `color-mix(in srgb, ${Hs.primary} 10%, transparent)`,
                                        },
                                        children: Me,
                                      }),
                                    }),
                                    de.items.map((et) => {
                                      var Mt, Ut;
                                      const Ct = et.from === "system",
                                        Dt = et.from === "user";
                                      return Ct
                                        ? e.jsx(
                                            "li",
                                            {
                                              className:
                                                "flex justify-center px-1 py-0.5",
                                              children: e.jsx("div", {
                                                className:
                                                  "w-full max-w-[min(92%,22rem)] text-center",
                                                children: e.jsx("div", {
                                                  className:
                                                    "inline-block max-w-[min(92%,22rem)] rounded-full px-2.5 py-1 text-[9px] leading-snug",
                                                  style: {
                                                    color: Hs.muted,
                                                    backgroundColor: `color-mix(in srgb, ${Hs.primary} 8%, transparent)`,
                                                    border: `1px solid color-mix(in srgb, ${Hs.primary} 18%, var(--ps-line))`,
                                                  },
                                                  children: et.text,
                                                }),
                                              }),
                                            },
                                            et.id ||
                                              `${et.at}-${(Mt = et.text) == null ? void 0 : Mt.slice(0, 8)}`,
                                          )
                                        : e.jsxs(
                                            "li",
                                            {
                                              className: `flex gap-2 ${Dt ? "flex-row-reverse" : "flex-row"}`,
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "h-8 w-8 shrink-0 overflow-hidden rounded-full border bg-white/50",
                                                  style: {
                                                    borderColor: `color-mix(in srgb, ${Hs.primary} 35%, transparent)`,
                                                  },
                                                  children: Dt
                                                    ? a
                                                      ? e.jsx("img", {
                                                          src: a,
                                                          alt: "",
                                                          className:
                                                            "h-full w-full object-cover",
                                                        })
                                                      : e.jsx("div", {
                                                          className:
                                                            "flex h-full w-full items-center justify-center text-[10px] font-medium",
                                                          style: {
                                                            color: Hs.primary,
                                                          },
                                                          children: "我",
                                                        })
                                                    : n
                                                      ? e.jsx("img", {
                                                          src: n,
                                                          alt: "",
                                                          className:
                                                            "h-full w-full object-cover",
                                                        })
                                                      : e.jsx("div", {
                                                          className:
                                                            "flex h-full w-full items-center justify-center text-[10px] font-medium",
                                                          style: {
                                                            color: Hs.primary,
                                                          },
                                                          children: "TA",
                                                        }),
                                                }),
                                                e.jsx("div", {
                                                  className: `min-w-0 max-w-[min(78%,18rem)] ${Dt ? "text-right" : "text-left"}`,
                                                  children: e.jsx("div", {
                                                    className:
                                                      "inline-block rounded-2xl px-3 py-2 text-left",
                                                    style: {
                                                      backgroundColor: Dt
                                                        ? `color-mix(in srgb, ${Hs.bubble} 22%, transparent)`
                                                        : `color-mix(in srgb, ${Hs.secondary} 12%, var(--ps-glass-mid))`,
                                                      border: `1px solid color-mix(in srgb, ${Hs.primary} 22%, var(--ps-line))`,
                                                      color: Hs.primary,
                                                    },
                                                    children: et.text,
                                                  }),
                                                }),
                                              ],
                                            },
                                            et.id ||
                                              `${et.at}-${(Ut = et.text) == null ? void 0 : Ut.slice(0, 8)}`,
                                          );
                                    }),
                                  ],
                                },
                                de.key,
                              );
                            }),
                          }),
                  }),
                ],
              }),
            })
          : null,
        e.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Jost:wght@200;300;400&family=Italianno&display=swap');
        .font-luxury { font-family: 'Cormorant Garamond', serif; }
        .font-modern { font-family: 'Jost', sans-serif; }
        .font-script { font-family: 'Italianno', cursive; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.65rem); }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(235, 213, 203, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(235, 213, 203, 0); }
          100% { box-shadow: 0 0 0 0 rgba(235, 213, 203, 0); }
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes prism-bubble-line-in {
          from { opacity: 0; transform: translate3d(0, 6px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .prism-listen-bubble-line {
          animation: prism-bubble-line-in 0.42s ease-out both;
        }
        @keyframes prism-typing-dot {
          0%, 80%, 100% { opacity: 0.28; transform: translateY(0); }
          40% { opacity: 1; transform: translateY(-1px); }
        }
        .prism-typing-dot {
          display: inline-block;
          width: 0.38em;
          height: 0.38em;
          border-radius: 9999px;
          background: currentColor;
          animation: prism-typing-dot 1.05s ease-in-out infinite;
        }
        .prism-typing-dot-d1 { animation-delay: 0.2s; }
        .prism-typing-dot-d2 { animation-delay: 0.4s; }
        /* 用户气泡后：光带持续向上飘动 */
        @keyframes prism-user-bubble-glow-rise {
          0% { transform: translateY(28%); opacity: 0.28; }
          100% { transform: translateY(-36%); opacity: 0.62; }
        }
        .prism-user-bubble-glow-rise {
          animation: prism-user-bubble-glow-rise 2.85s ease-in-out infinite alternate;
          will-change: transform, opacity;
        }
        @keyframes prism-atelier-in {
          from { opacity: 0; transform: translate3d(0, 12px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes prism-atelier-breathe {
          0%, 100% { opacity: 0.38; transform: scale(1); }
          50% { opacity: 0.78; transform: scale(1.07); }
        }
        @keyframes prism-atelier-orbit-slow {
          to { transform: rotate(360deg); }
        }
        .prism-atelier-sheet {
          animation: prism-atelier-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .prism-atelier-scroll-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent);
          mask-image: linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent);
        }
        .prism-atelier-sec-icon {
          box-shadow: var(--ps-sec-icon-shadow);
        }
        .prism-atelier-sheet .ps-card {
          border: 1px solid var(--ps-card-border);
          background-image: var(--ps-card-bg);
          box-shadow: var(--ps-section-shadow);
        }
        .prism-atelier-sheet .ps-t-h { color: var(--ps-text-h); }
        .prism-atelier-sheet .ps-t-body { color: var(--ps-text-body); }
        .prism-atelier-sheet .ps-t-muted { color: var(--ps-text-muted); }
        .prism-atelier-sheet .ps-t-soft { color: var(--ps-text-soft); }
        .prism-atelier-sheet .ps-t-strong { color: var(--ps-text-strong); }
        .prism-atelier-sheet .ps-t-script { color: var(--ps-text-script); }
        .prism-atelier-sheet .ps-ico {
          border: 1px solid var(--ps-sec-icon-border);
          background: linear-gradient(to bottom right, var(--ps-sec-icon-bg-from), var(--ps-sec-icon-bg-to));
          color: var(--ps-accent-2);
        }
        .prism-atelier-sheet .ps-glass-panel {
          border: 1px solid var(--ps-card-border);
          background: var(--ps-card-bg);
        }
        .prism-theme-pri { color: var(--p-c1, #36343C); }
        .prism-theme-sec { color: var(--p-c2, #55525E); }
        .prism-theme-muted { color: var(--p-c3, #6F6C78); }
        .prism-theme-bub { color: var(--p-c4, #C4786E); }
        .prism-color-input::-webkit-color-swatch-wrapper { padding: 0; }
        .prism-color-input::-webkit-color-swatch { border: none; border-radius: 9999px; }
        .prism-color-input { -webkit-appearance: none; appearance: none; }

        /* 允许用户上传自定义 SVG 图标，并用统一 color 重新着色 */
        .prismCustomIcon svg,
        .prismCustomIcon * {
          fill: currentColor !important;
          stroke: currentColor !important;
        }

        /* ========== 全屏自适应：容器 = 情侣空间实际可用区域（不限定 390×844） ========== */
        .prism-root {
          container-type: size;
          container-name: prism;
        }
        .prism-couple-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.75rem, min(8cqw, 7cqh), 2.5rem);
        }
        .prism-avatar-ta {
          box-sizing: border-box;
          width: clamp(3.25rem, min(23cqw, 20cqh), 6rem);
          height: clamp(3.25rem, min(23cqw, 20cqh), 6rem);
          padding: clamp(2px, 0.55cqw, 4px);
        }
        .prism-avatar-me {
          box-sizing: border-box;
          width: clamp(3.5rem, min(26cqw, 22cqh), 6.75rem);
          height: clamp(3.5rem, min(26cqw, 22cqh), 6.75rem);
          padding: clamp(2px, 0.65cqw, 5px);
        }
        .prism-heart-mid {
          width: clamp(2.25rem, min(11cqw, 10cqh), 3.35rem);
          height: clamp(2.25rem, min(11cqw, 10cqh), 3.35rem);
        }
        .prism-heart-mid svg {
          width: 55%;
          height: 55%;
        }
        .prism-days-num {
          font-size: clamp(2.25rem, min(15cqw, 14cqh), 4.25rem);
          line-height: 1;
        }
        .prism-quote {
          font-size: clamp(0.875rem, min(5.5cqw, 4.5cqh), 1.375rem);
          text-align: center;
          max-width: min(92cqw, 48rem);
          padding: 0 clamp(0.5rem, 2cqw, 1rem);
        }
        .prism-dock {
          height: clamp(10.5rem, min(32cqh, 40dvh), 24rem);
          padding-top: clamp(0.35rem, 1.5cqh, 0.75rem);
        }
        .prism-wheel {
          width: min(130cqw, 96cqh);
          height: min(130cqw, 96cqh);
        }
        /* 星轨层：不再用 inset 硬切左右（会竖线割裂）；外圈由 .prism-wheel 圆角+overflow 自然裁切 */
        .prism-orbit-clip {
          position: absolute;
          inset: 0;
          z-index: 4;
          touch-action: pan-y;
          -webkit-user-select: none;
          user-select: none;
        }
        .prism-orbit-spin {
          touch-action: pan-y;
          -webkit-user-select: none;
          user-select: none;
        }
        /* 仅窄容器：两侧柔化渐隐，少露一点；宽容器不遮左右，背景与弧面更一体 */
        @container prism (max-width: 420px) {
          .prism-orbit-clip {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%);
          }
        }
        @container prism (max-width: 360px) {
          .prism-orbit-clip {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
          }
        }
        .prism-menu-orbit-btn {
          width: clamp(2.6rem, min(14.5cqw, 12cqh), 3.85rem);
          height: clamp(2.6rem, min(14.5cqw, 12cqh), 3.85rem);
        }
        .prism-icon-in-orbit {
          width: clamp(0.85rem, min(4.6cqw, 4cqh), 1.25rem);
          height: clamp(0.85rem, min(4.6cqw, 4cqh), 1.25rem);
        }
        .prism-icon-in-orbit svg {
          width: 100%;
          height: 100%;
        }
        .prism-gear-btn {
          width: clamp(3rem, min(17cqw, 14cqh), 4.35rem);
          height: clamp(3rem, min(17cqw, 14cqh), 4.35rem);
        }
        .prism-gear-btn svg {
          width: 58%;
          height: 58%;
        }
        .prism-micro {
          font-size: clamp(0.55rem, min(2.1cqw, 1.9cqh), 0.7rem);
        }
        .prism-small {
          font-size: clamp(0.65rem, min(2.45cqw, 2.2cqh), 0.8rem);
        }
        .prism-title {
          font-size: clamp(1rem, min(6cqw, 5cqh), 1.65rem);
        }
      `,
          },
        }),
        e.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 ${us.aa(0.7)}; }
          70% { box-shadow: 0 0 0 15px ${us.aa(0)}; }
          100% { box-shadow: 0 0 0 0 ${us.aa(0)}; }
        }
        @keyframes prism-edit-pulse {
          0%, 100% { box-shadow: 0 0 0 0 ${us.aa(0.45)}; }
          50% { box-shadow: 0 0 0 4px ${us.aa(0.2)}; }
        }
      `,
          },
        }),
        ra
          ? e.jsx("style", {
              dangerouslySetInnerHTML: {
                __html: `
        ${Ve(Oe)}
        .prism-panel.prism-has-custom-font {
          font-family: '${J}', system-ui, -apple-system, sans-serif;
        }
        .prism-panel.prism-has-custom-font .font-luxury,
        .prism-panel.prism-has-custom-font .font-modern,
        .prism-panel.prism-has-custom-font .font-script,
        .prism-panel.prism-has-custom-font .font-serif {
          font-family: '${J}', system-ui, -apple-system, sans-serif !important;
        }
      `,
              },
            })
          : null,
        (ln && (ln.dataUrl || ln.url)) || (wt && (wt.dataUrl || wt.url))
          ? e.jsx("style", {
              dangerouslySetInnerHTML: {
                __html: `
        ${Pb(ln, Ob)}
        ${Pb(wt, Bb)}
        .couple-space-phone-font .prism-lyric-font-active,
        .prism-panel.prism-has-custom-font .font-modern.prism-lyric-font-active,
        .prism-panel.prism-has-custom-font .prism-lyric-font-active {
          font-family: '${Ob}', ui-serif, Georgia, 'Songti SC', serif !important;
        }
        .couple-space-phone-font .prism-lyric-font-inactive,
        .prism-panel.prism-has-custom-font .font-modern.prism-lyric-font-inactive,
        .prism-panel.prism-has-custom-font .prism-lyric-font-inactive {
          font-family: '${Bb}', ui-sans-serif, system-ui, sans-serif !important;
        }
      `,
              },
            })
          : null,
        e.jsxs("div", {
          className: `prism-panel relative flex h-full min-h-0 w-full flex-col overflow-hidden transition-[box-shadow] duration-300 ${ra ? "prism-has-custom-font " : ""}`,
          style: {
            backgroundColor: us.panelBg,
            ...(R
              ? {
                  boxShadow: us.editInsetShadow,
                  outline: `2px solid ${us.aa(0.35)}`,
                  outlineOffset: 0,
                }
              : {}),
          },
          children: [
            s &&
              e.jsx("button", {
                type: "button",
                "aria-label": "Back",
                className:
                  "absolute left-[max(0.75rem,4cqw)] top-[max(1.125rem,5cqh)] z-50 min-h-11 min-w-11 opacity-0",
                onClick: s,
              }),
            e.jsxs("div", {
              className: "absolute inset-0 z-0 min-h-0 w-full min-w-0",
              children: [
                e.jsx("div", {
                  className: `h-full w-full min-h-full min-w-full bg-cover bg-center transition-transform duration-[20s] ease-linear ${R ? "" : "hover:scale-105"}`,
                  style: {
                    backgroundImage: tt ? `url(${JSON.stringify(tt)})` : void 0,
                  },
                  role: "img",
                  "aria-hidden": !0,
                }),
                e.jsx("div", {
                  className: "absolute inset-0 mix-blend-overlay",
                  style: { background: us.overlay },
                }),
                R &&
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "更换背景壁纸",
                    className:
                      "absolute inset-0 z-[8] cursor-pointer border-0 bg-transparent p-0 outline-none",
                    onClick: Ht,
                  }),
              ],
            }),
            e.jsx("input", {
              ref: ce,
              type: "file",
              accept: "image/*",
              className: "hidden",
              onChange: (de) => {
                var Ct;
                const Me = (Ct = de.target.files) == null ? void 0 : Ct[0];
                if (!Me) return;
                const et = new FileReader();
                ((et.onload = () => {
                  const Dt = String(et.result || "");
                  Dt && (Xe(Dt), Le({ backgroundImage: Dt }));
                }),
                  et.readAsDataURL(Me),
                  (de.target.value = ""));
              },
            }),
            e.jsx("input", {
              ref: pe,
              type: "file",
              accept: "image/svg+xml",
              className: "hidden",
              onChange: (de) => {
                var Dt, Mt;
                const Me = (Dt = de.target.files) == null ? void 0 : Dt[0];
                if (!Me) return;
                const et = ee || ((Mt = rt[0]) == null ? void 0 : Mt.id);
                if (!et) {
                  de.target.value = "";
                  return;
                }
                const Ct = new FileReader();
                ((Ct.onload = () => {
                  var Ot;
                  const Ut = String(Ct.result || "");
                  if (!Ut.trim()) return;
                  const ws = {
                      ...(((Ot = Ge.current) == null ? void 0 : Ot[et]) || {}),
                      iconSvg: Ut,
                    },
                    Ls = { ...(Ge.current || {}), [et]: ws };
                  (Ie(Ls), _e(Ls));
                }),
                  Ct.readAsText(Me),
                  (de.target.value = ""));
              },
            }),
            e.jsx("input", {
              ref: se,
              type: "file",
              accept:
                ".woff2,.woff,.ttf,.otf,font/woff2,font/woff,font/ttf,font/otf,application/font-woff,application/font-woff2",
              className: "hidden",
              onChange: (de) => {
                var et;
                const Me = (et = de.target.files) == null ? void 0 : et[0];
                (_a(Me), (de.target.value = ""));
              },
            }),
            e.jsxs("div", {
              className: `relative z-[35] flex w-full items-start justify-between px-[clamp(0.75rem,4.5cqw,1.5rem)] pt-[clamp(1.125rem,5cqh,2.25rem)] transition-all duration-1000 ${T ? "opacity-100" : "opacity-0 -translate-y-5"} ${R ? "pointer-events-none" : ""}`,
              children: [
                e.jsxs("div", {
                  className:
                    "mt-[clamp(0.25rem,1.5cqh,0.75rem)] flex flex-col items-start gap-0.5 opacity-70",
                  children: [
                    e.jsx("span", {
                      className:
                        "font-modern prism-micro tracking-[0.2em] uppercase prism-theme-sec",
                      children: "Paris, FR",
                    }),
                    e.jsx("span", {
                      className:
                        "font-modern prism-micro tracking-[0.3em] prism-theme-muted",
                      children: "48°52'N 2°19'E",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: `flex flex-col items-center px-1 ${R ? "pointer-events-auto" : ""}`,
                  children: v
                    ? e.jsx("div", {
                        className: "relative flex flex-col items-center gap-2",
                        style: { marginTop: 35 },
                        children: e.jsxs("div", {
                          className:
                            "flex max-w-[min(92cqw,20rem)] items-center gap-2 rounded-full border px-[clamp(0.65rem,3cqw,1rem)] py-[clamp(0.28rem,1.2cqh,0.45rem)] shadow-md backdrop-blur-md",
                          style: {
                            borderColor: us.glass.border,
                            backgroundImage: `linear-gradient(to bottom right, ${us.glass.strong}, ${us.glass.mid})`,
                            boxShadow: `0 8px 24px ${us.aa(0.12)}`,
                          },
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: (de) => {
                                (de.preventDefault(),
                                  de.stopPropagation(),
                                  sn(!0));
                              },
                              className:
                                "-m-0.5 flex shrink-0 rounded-full p-1 transition hover:opacity-90 active:scale-95",
                              style: { color: Hs.bubble },
                              "aria-label": "歌词排版",
                              title: "歌词排版",
                              children: e.jsx(m0, {
                                className:
                                  "h-[clamp(0.55rem,2.8cqw,0.8rem)] w-[clamp(0.55rem,2.8cqw,0.8rem)] shrink-0",
                                strokeWidth: 1.5,
                              }),
                            }),
                            e.jsx("span", {
                              className:
                                "font-modern prism-small font-medium tracking-[0.12em]",
                              style: { color: Hs.bubble },
                              children: "正在一起听",
                            }),
                            e.jsxs("label", {
                              className:
                                "relative inline-flex h-[1.15rem] w-[2.1rem] shrink-0 cursor-pointer items-center",
                              children: [
                                e.jsx("input", {
                                  type: "checkbox",
                                  className: "peer sr-only",
                                  checked: v,
                                  onChange: (de) => {
                                    de.target.checked || N == null || N(!1);
                                  },
                                }),
                                e.jsx("span", {
                                  className:
                                    "absolute inset-0 rounded-full border transition-colors peer-checked:bg-emerald-400/85",
                                  style: {
                                    borderColor: us.aa(0.25),
                                    backgroundColor: us.aa(0.15),
                                  },
                                }),
                                e.jsx("span", {
                                  className:
                                    "pointer-events-none absolute left-[3px] top-1/2 h-[0.72rem] w-[0.72rem] -translate-y-1/2 rounded-full bg-white shadow transition-transform peer-checked:translate-x-[0.85rem]",
                                }),
                              ],
                            }),
                          ],
                        }),
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("span", {
                            className:
                              "font-modern prism-small uppercase tracking-[0.5em] prism-theme-muted",
                            children: "Chapter I",
                          }),
                          e.jsx("div", {
                            className:
                              "relative mt-[clamp(0.25rem,1.2cqh,0.5rem)] flex flex-col items-center",
                            children: e.jsx("button", {
                              type: "button",
                              className: `font-luxury prism-title bg-transparent italic leading-tight prism-theme-pri focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${R ? "cursor-pointer rounded-md px-1 ring-2 ring-offset-2 ring-offset-transparent" : "cursor-default"}`,
                              style: {
                                "--tw-ring-color": R ? us.aa(0.4) : us.aa(0.6),
                                "--tw-ring-offset-color": "transparent",
                                ...(R
                                  ? {
                                      animation:
                                        "prism-edit-pulse 2.2s ease-in-out infinite",
                                    }
                                  : {}),
                              },
                              onClick: () => {
                                R && cn("universeTitle", "编辑空间标题");
                              },
                              children: ht,
                            }),
                          }),
                        ],
                      }),
                }),
                e.jsxs("button", {
                  type: "button",
                  className:
                    "pointer-events-auto mt-[clamp(0.25rem,1.2cqh,0.5rem)] flex max-w-[42%] items-center gap-[clamp(0.25rem,1.5cqw,0.5rem)] rounded-full border px-[clamp(0.5rem,2cqw,0.85rem)] py-[clamp(0.2rem,1cqh,0.4rem)] text-left shadow-[0_4px_10px_rgba(0,0,0,0.03)] backdrop-blur-md transition focus:outline-none focus-visible:ring-2",
                  style: {
                    borderColor: us.glass.chipBorder,
                    backgroundColor: us.glass.chip,
                    "--tw-ring-color": us.aa(0.5),
                  },
                  onMouseEnter: (de) => {
                    de.currentTarget.style.backgroundColor = us.glass.chipHover;
                  },
                  onMouseLeave: (de) => {
                    de.currentTarget.style.backgroundColor = us.glass.chip;
                  },
                  onClick: () => me(!0),
                  title: c ? "更换空间背景音乐" : "绑定乐听歌单作为背景音乐",
                  children: [
                    e.jsxs("div", {
                      className:
                        "relative flex shrink-0 items-center justify-center",
                      children: [
                        e.jsx(vr, {
                          className:
                            "relative z-10 h-[clamp(0.5rem,2.8cqw,0.75rem)] w-[clamp(0.5rem,2.8cqw,0.75rem)] animate-pulse",
                          strokeWidth: 1.5,
                          style: { color: us.bgmIcon },
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 scale-150 rounded-full border border-dashed animate-[spin_4s_linear_infinite]",
                          style: { borderColor: us.line },
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className:
                        "font-modern prism-micro truncate font-medium tracking-wider prism-theme-pri",
                      children: ti,
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute left-[15%] top-[30%] opacity-50",
              style: {
                animation: "twinkle 3s ease-in-out infinite",
                color: us.line,
              },
              children: e.jsx(Xn, {
                className: "h-[3.08cqw] w-[3.08cqw]",
                strokeWidth: 1.5,
              }),
            }),