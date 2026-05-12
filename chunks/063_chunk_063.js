                                            e.jsxs("p", {
                                              className:
                                                "dy-live-rank-contribution",
                                              children: [bt, " 贡献"],
                                            }),
                                          ],
                                        }),
                                        Ke
                                          ? e.jsx("div", {
                                              className:
                                                "ml-1 opacity-60 shrink-0",
                                              "aria-hidden": !0,
                                              children: e.jsx("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "#a67b7f",
                                                children: e.jsx("path", {
                                                  d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                                }),
                                              }),
                                            })
                                          : null,
                                      ],
                                    },
                                    Ne.key,
                                  );
                                }),
                        }),
                        E.length > 0
                          ? e.jsx("div", {
                              className: "dy-live-rank-footer",
                              children: e.jsxs("div", {
                                className: "dy-live-rank-my-stats",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex flex-col",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[7px] uppercase tracking-wider opacity-40 text-[#333]",
                                        children: "榜单人数",
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "text-base leading-none text-[#333]",
                                        style: {
                                          fontFamily:
                                            "'Playfair Display', serif",
                                        },
                                        children: ["№ ", E.length],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "block text-[7px] uppercase tracking-wider opacity-40 text-[#333]",
                                        children: "本场合计",
                                      }),
                                      e.jsxs("span", {
                                        className: "text-xs text-rose-400",
                                        style: {
                                          fontFamily:
                                            "'Playfair Display', serif",
                                          fontStyle: "italic",
                                        },
                                        children: [
                                          "¥",
                                          E.reduce(
                                            (Ne, Je) => Ne + Je.yuan,
                                            0,
                                          ).toLocaleString("zh-CN", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                })
              : null,
            (t == null ? void 0 : t.hostMode) === "npc" &&
              Te &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("button", {
                    type: "button",
                    className:
                      "absolute inset-0 z-[251] bg-black/38 backdrop-blur-[2px]",
                    "aria-label": "关闭礼物面板",
                    onClick: () => {
                      (ke(!1), ue(null), he(""));
                    },
                  }),
                  e.jsx("div", {
                    className: "dy-live-gift-send-panel",
                    children: e.jsxs("div", {
                      className:
                        "dy-live-gift-send-inner dy-live-scrollbar-hide",
                      children: [
                        e.jsx("span", {
                          className: "dy-live-gift-send-kicker",
                          children: "The Salon · Gift",
                        }),
                        e.jsx("h2", {
                          className: "dy-live-gift-send-title",
                          children: "典藏献礼",
                        }),
                        e.jsx("p", {
                          className: "dy-live-gift-send-sub",
                          children: "择一档赠予主播 · 定价与展馆典藏一致",
                        }),
                        _r.map((Ne) =>
                          e.jsxs(
                            "button",
                            {
                              type: "button",
                              onClick: () => ue(Ne),
                              className: "dy-live-gift-send-item",
                              children: [
                                e.jsx("div", {
                                  className: "dy-live-gift-send-icon",
                                  children: e.jsx(yh, {
                                    id: Ne.id,
                                    className: "max-h-[2.1rem] w-auto",
                                    coverUrl:
                                      Ne.id === "g4" ? b.avatar : void 0,
                                    profileCoverUrl:
                                      Ne.id === "g3" ? N : void 0,
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    e.jsx("span", {
                                      className: "dy-live-gift-send-name",
                                      children: Ne.name,
                                    }),
                                    e.jsx("span", {
                                      className: "dy-live-gift-send-tag",
                                      children: Ne.tag,
                                    }),
                                  ],
                                }),
                                e.jsxs("span", {
                                  className: "dy-live-gift-send-price",
                                  children: ["¥", Ne.price],
                                }),
                              ],
                            },
                            Ne.id,
                          ),
                        ),
                      ],
                    }),
                  }),
                ],
              }),
            (t == null ? void 0 : t.hostMode) === "npc" &&
              W &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("button", {
                    type: "button",
                    className: "dy-live-gift-confirm-backdrop",
                    "aria-label": "关闭确认",
                    onClick: () => {
                      (ue(null), he(""));
                    },
                  }),
                  e.jsxs("div", {
                    className: "dy-live-gift-confirm-panel",
                    role: "dialog",
                    "aria-modal": !0,
                    children: [
                      e.jsx("p", {
                        className: "dy-live-gift-confirm-kicker",
                        children: "Confirm",
                      }),
                      e.jsx("h2", {
                        className: "dy-live-gift-confirm-title",
                        children: "确认赠送",
                      }),
                      e.jsxs("div", {
                        className: "dy-live-gift-confirm-preview",
                        children: [
                          e.jsx("div", {
                            className: "dy-live-gift-confirm-preview-icon",
                            children: e.jsx(yh, {
                              id: W.id,
                              className: "max-h-[2.35rem] w-auto",
                              coverUrl: W.id === "g4" ? b.avatar : void 0,
                              profileCoverUrl: W.id === "g3" ? N : void 0,
                            }),
                          }),
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("p", {
                                className: "dy-live-gift-confirm-gift-name",
                                children: W.name,
                              }),
                              e.jsxs("p", {
                                className: "dy-live-gift-confirm-gift-price",
                                children: [
                                  "¥",
                                  Number(W.price).toLocaleString("zh-CN", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        className: "dy-live-gift-confirm-balance",
                        children: [
                          "钱包余额 ¥",
                          Number(
                            ((js = u == null ? void 0 : u.wallet) == null
                              ? void 0
                              : js.balance) ?? 0,
                          ).toLocaleString("zh-CN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }),
                        ],
                      }),
                      (cs = u == null ? void 0 : u.wallet) != null &&
                      cs.password
                        ? e.jsx("input", {
                            type: "password",
                            value: re,
                            onChange: (Ne) => he(Ne.target.value),
                            placeholder: "支付密码",
                            className: "dy-live-gift-confirm-input",
                            autoComplete: "current-password",
                          })
                        : null,
                      e.jsxs("div", {
                        className: "dy-live-gift-confirm-actions",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            className:
                              "dy-live-gift-confirm-btn dy-live-gift-confirm-btn--ghost",
                            onClick: () => {
                              (ue(null), he(""));
                            },
                            children: "取消",
                          }),
                          e.jsx("button", {
                            type: "button",
                            className:
                              "dy-live-gift-confirm-btn dy-live-gift-confirm-btn--primary",
                            onClick: Ft,
                            children: "确认赠送",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            e.jsx("div", {
              className: `relative px-3 pb-8 pt-2 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col items-stretch ${Ee ? "z-[253]" : "z-20"}`,
              children: e.jsxs("div", {
                className:
                  "dy-live-liquid-glass-fine flex items-center gap-1.5 rounded-full bg-white/[0.07] backdrop-blur-md pl-1.5 pr-2 py-1.5",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: At,
                    disabled: P || !xe || Ee,
                    "aria-label":
                      P || !xe ? "加载中" : Ee ? "跨房弹幕生成中" : "接收互动",
                    className:
                      "shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-none border-0 bg-transparent p-0 text-white active:scale-95 disabled:opacity-40 focus:outline-none focus:ring-0",
                    children:
                      P || !xe
                        ? e.jsx(Sn, {
                            className: "h-3 w-3 animate-spin opacity-90",
                            strokeWidth: 2,
                          })
                        : Ee
                          ? e.jsx(QK, {})
                          : e.jsx(ZK, { className: "h-[18px] w-[18px]" }),
                  }),
                  e.jsx("input", {
                    value: pe,
                    onChange: (Ne) => se(Ne.target.value),
                    onKeyDown: (Ne) => {
                      Ne.key === "Enter" &&
                        !Ne.nativeEvent.isComposing &&
                        (Ne.preventDefault(), $t());
                    },
                    placeholder: "说点什么…",
                    className:
                      "flex-1 min-w-0 bg-transparent text-sm outline-none placeholder:text-white/35",
                  }),
                  (t == null ? void 0 : t.hostMode) === "npc"
                    ? e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          xe &&
                            ke((Ne) => {
                              const Je = !Ne;
                              return (Je || (ue(null), he("")), Je);
                            });
                        },
                        disabled: !xe,
                        "aria-label": xe ? "礼物" : "加载中",
                        className:
                          "shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08] text-amber-100/90 active:scale-95 disabled:opacity-40",
                        children: e.jsx(Nl, { size: 14, strokeWidth: 2.25 }),
                      })
                    : e.jsx("button", {
                        type: "button",
                        disabled: !0,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        className:
                          "shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-white/30 cursor-default pointer-events-none opacity-50",
                        children: e.jsx(ea, { size: 13, strokeWidth: 2.25 }),
                      }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(VK, {
          open: G,
          onClose: () => we(!1),
          boardTitle: te,
          pvpEnabled: Q,
          onPvpToggle: xs,
          loadingPvp: Ve,
          rows: me,
        }),
        e.jsx(JK, {
          open: ut,
          onClose: () => _t(!1),
          streamerAvatar: b.avatar,
          streamerName: b.name,
          topGifterAvatar: Wt.topGifterAvatar,
          topGifterName: Wt.topGifterName,
          smallAvatars: Wt.smallAvatars,
        }),
        ge
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx("button", {
                  type: "button",
                  className: "dy-live-end-prompt-backdrop",
                  "aria-label": "取消",
                  onClick: () => J(!1),
                }),
                e.jsxs("div", {
                  role: "dialog",
                  "aria-modal": !0,
                  "aria-labelledby": "live-end-prompt-title",
                  className: "dy-live-end-prompt-panel",
                  onClick: (Ne) => Ne.stopPropagation(),
                  children: [
                    e.jsx("p", {
                      className: "dy-live-end-prompt-kicker",
                      children: "Jiuyin Live",
                    }),
                    e.jsx("h3", {
                      id: "live-end-prompt-title",
                      className: "dy-live-end-prompt-title",
                      children: "结束本场直播？",
                    }),
                    e.jsx("p", {
                      className: "dy-live-end-prompt-desc",
                      children:
                        "是否将本场计入记忆总结？计入将打开结算页并调用接口生成文字总结；不计入则不展示结算页，且本场不会出现在直播记录中。",
                    }),
                    e.jsxs("div", {
                      className: "dy-live-end-prompt-actions",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className:
                            "dy-live-end-prompt-btn dy-live-end-prompt-btn--primary",
                          onClick: () => es(!0),
                          children: "计入总结",
                        }),
                        e.jsx("button", {
                          type: "button",
                          className:
                            "dy-live-end-prompt-btn dy-live-end-prompt-btn--secondary",
                          onClick: () => es(!1),
                          children: "不计入总结",
                        }),
                        e.jsx("button", {
                          type: "button",
                          className:
                            "dy-live-end-prompt-btn dy-live-end-prompt-btn--ghost",
                          onClick: () => J(!1),
                          children: "继续直播",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null,
        e.jsx(YK, {
          profileOpen: w,
          giftsOpen: A,
          onCloseProfile: j,
          onOpenGifts: () => {
            (je(null), k(!0));
          },
          onCloseGifts: () => {
            (k(!1), je(null));
          },
          giftDetailId: X,
          onOpenGiftDetail: (Ne) => je(Ne),
          onBackGiftDetail: () => je(null),
          streamer: b,
          profileCoverUrl: N,
          giftCounts: V,
          giftLedger: le,
          resolveNpcAvatar: Pt,
          viewerAvatar:
            String((a == null ? void 0 : a.avatar) || "").trim() || void 0,
          viewerMergeName: Js,
        }),
      ],
    });
  },
  eq = {
    fontFamily:
      '"Noto Serif SC", "Songti SC", Georgia, "Times New Roman", serif',
  },
  tq = ({ record: t, onClose: s }) => {
    const [n, a] = l.useState(!1),
      r = (t == null ? void 0 : t.summaryLoading) === !0,
      i = (t == null ? void 0 : t.summaryOmitted) === !0,
      o = String((t == null ? void 0 : t.summaryText) || "").trim(),
      c = l.useCallback(async () => {
        if (o)
          try {
            (await navigator.clipboard.writeText(o),
              a(!0),
              setTimeout(() => a(!1), 2e3));
          } catch {}
      }, [o]),
      d = Number((t == null ? void 0 : t.giftAmountYuan) ?? 0) || 0,
      u = Number((t == null ? void 0 : t.viewerCount) ?? 0) || 0,
      f = Number((t == null ? void 0 : t.likeCount) ?? 0) || 0;
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-[270] flex flex-col bg-[#f4f1eb] text-stone-900",
      style: eq,
      children: [
        e.jsxs("div", {
          className:
            "relative shrink-0 flex items-center justify-between pt-12 px-4 pb-3 border-b border-stone-300/90 bg-[#faf8f4]",
          children: [
            e.jsxs("div", {
              className: "flex flex-col gap-0.5",
              children: [
                e.jsx("span", {
                  className:
                    "text-[10px] tracking-[0.35em] uppercase text-stone-400 font-sans",
                  children: "Jiuyin Live",
                }),
                e.jsx("span", {
                  className:
                    "text-base font-semibold tracking-tight text-stone-900 font-sans",
                  children: "直播结算",
                }),
              ],
            }),
            e.jsx("button", {
              type: "button",
              onClick: s,
              className:
                "w-9 h-9 rounded-full border border-stone-300/80 bg-white/90 shadow-sm flex items-center justify-center text-stone-600 active:scale-95",
              "aria-label": "关闭",
              children: e.jsx(Ts, { size: 18, strokeWidth: 2 }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 min-h-0 overflow-y-auto px-5 py-6 pb-12",
          children: [
            e.jsxs("div", {
              className: "flex gap-4 mb-8",
              children: [
                e.jsx("div", {
                  className:
                    "w-[5rem] h-[6.75rem] rounded-sm overflow-hidden bg-stone-200 shrink-0 shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-stone-300/60",
                  children:
                    t != null && t.coverDataUrl
                      ? e.jsx("img", {
                          src: t.coverDataUrl,
                          alt: "",
                          className: "w-full h-full object-cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full bg-gradient-to-br from-stone-200 to-stone-300",
                        }),
                }),
                e.jsxs("div", {
                  className: "min-w-0 flex-1 flex flex-col justify-center",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-1.5 font-sans",
                      children: "本期标题",
                    }),
                    e.jsx("h2", {
                      className:
                        "text-lg font-semibold leading-snug line-clamp-4 text-stone-900 tracking-tight",
                      children: (t == null ? void 0 : t.title) || "未命名直播",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-3 mb-8",
              children: [
                {
                  label: "礼物收入",
                  sub: "EST.",
                  value: `¥${d.toFixed(2)}`,
                  accent: "text-amber-800",
                },
                {
                  label: "浏览量",
                  sub: "VIEWS",
                  value: u.toLocaleString(),
                  accent: "text-stone-900",
                },
                {
                  label: "点赞",
                  sub: "LIKES",
                  value: f.toLocaleString(),
                  accent: "text-stone-900",
                },
              ].map(({ label: p, sub: m, value: h, accent: g }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-lg bg-white px-3 py-3.5 border border-stone-200/90 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[9px] text-stone-400 tracking-[0.12em] uppercase font-sans",
                        children: m,
                      }),
                      e.jsx("div", {
                        className: "text-[11px] text-stone-500 mt-1 font-sans",
                        children: p,
                      }),
                      e.jsx("div", {
                        className: `mt-2 text-lg font-semibold tabular-nums tracking-tight ${g}`,
                        children: h,
                      }),
                    ],
                  },
                  p,
                ),
              ),
            }),
            i
              ? e.jsx("p", {
                  className: "text-[11px] text-stone-400 font-sans mt-2",
                  children: "本场未计入文字总结，仅保留上方数据。",
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("div", {
                      className:
                        "mb-3 flex items-end justify-between gap-2 border-b border-stone-200 pb-2",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] tracking-[0.28em] uppercase text-stone-400 font-sans",
                              children: "Editorial",
                            }),
                            e.jsx("p", {
                              className:
                                "text-sm font-semibold text-stone-800 mt-1 font-sans",
                              children: "本场记忆总结",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          disabled: r || !o,
                          onClick: c,
                          className:
                            "inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-3.5 py-1.5 text-xs text-stone-700 shadow-sm active:scale-[0.98] disabled:opacity-35 font-sans",
                          children: [
                            e.jsx(Ao, { size: 13, strokeWidth: 2 }),
                            n ? "已复制" : "复制",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "rounded-lg bg-white border border-stone-200/95 px-4 py-4 text-[14px] leading-[1.75] text-stone-700 whitespace-pre-wrap min-h-[10rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
                      children: r
                        ? e.jsxs("div", {
                            className: "space-y-2.5 animate-pulse font-sans",
                            children: [
                              e.jsx("div", {
                                className: "h-3 bg-stone-200/90 rounded w-full",
                              }),
                              e.jsx("div", {
                                className:
                                  "h-3 bg-stone-200/90 rounded w-[92%]",
                              }),
                              e.jsx("div", {
                                className: "h-3 bg-stone-200/90 rounded w-4/5",
                              }),
                            ],
                          })
                        : o || "暂无总结",
                    }),
                  ],
                }),
          ],
        }),
      ],
    });
  },
  sq = (t) =>
    new Promise((s, n) => {
      const a = new FileReader();
      ((a.onload = () => s(String(a.result || ""))),
        (a.onerror = n),
        a.readAsDataURL(t));
    }),
  nq = ({
    npcs: t,
    onBack: s,
    onStartLive: n,
    showPhoneCase: a,
    caseSize: r,
  }) => {
    const [i, o] = l.useState(""),
      [c, d] = l.useState(""),
      [u, f] = l.useState("all"),
      [p, m] = l.useState([]),
      [h, g] = l.useState(null),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(!0),
      N = l.useRef(null);
    (l.useEffect(() => {
      let C = !1;
      return (
        (async () => {
          const M = await fK();
          if (C || !M) {
            b(!1);
            return;
          }
          (typeof M.title == "string" && o(M.title),
            typeof M.coverDataUrl == "string" && d(M.coverDataUrl),
            (M.visibility === "all" || M.visibility === "exclude") &&
              f(M.visibility),
            Array.isArray(M.excludedNpcIds) && m(M.excludedNpcIds),
            M.letingBinding &&
              typeof M.letingBinding == "object" &&
              g(M.letingBinding),
            b(!1));
        })(),
        () => {
          C = !0;
        }
      );
    }, []),
      l.useEffect(() => {
        if (!v)
          return (
            N.current && clearTimeout(N.current),
            (N.current = setTimeout(() => {
              mK({
                title: i,
                coverDataUrl: c,
                visibility: u,
                excludedNpcIds: p,
                letingBinding: h,
              });
            }, 400)),
            () => {
              N.current && clearTimeout(N.current);
            }
          );
      }, [i, c, u, p, h, v]));
    const w = l.useMemo(
        () =>
          Array.isArray(t)
            ? t.filter(
                (C) =>
                  (C == null ? void 0 : C.id) && (C == null ? void 0 : C.name),
              )
            : [],
        [t],
      ),
      _ = (C) => {
        const M = String(C);
        m((E) => (E.includes(M) ? E.filter((S) => S !== M) : [...E, M]));
      },
      A = async (C) => {
        var E;
        const M = (E = C.target.files) == null ? void 0 : E[0];
        if (!(!M || !M.type.startsWith("image/"))) {
          try {
            const S = await sq(M);
            d(S);
          } catch {}
          C.target.value = "";
        }
      },
      k = i.trim().length > 0 && c.length > 0;
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-[230] flex flex-col text-stone-900 bg-[#f5f3f0] font-sans",
      children: [
        e.jsxs("div", {
          className:
            "flex items-center justify-between pt-12 px-4 pb-4 shrink-0 border-b border-stone-200/80 bg-[#f5f3f0] sticky top-0 z-10",
          children: [
            e.jsxs("button", {
              type: "button",
              className:
                "flex items-center gap-2 rounded-sm border border-stone-300/90 bg-white px-3 py-2 text-stone-800 shadow-sm shadow-stone-900/5 active:opacity-90",
              "aria-label": "绑定乐听歌单",
              onClick: () => y(!0),
              children: [
                e.jsx(Cc, {
                  size: 20,
                  className: h ? "text-emerald-700" : "text-stone-500",
                  strokeWidth: 1.75,
                }),
                e.jsx("span", {
                  className: "text-[13px] font-medium",
                  children: h != null && h.playlistName ? "已绑乐听" : "音乐",
                }),
              ],
            }),
            e.jsxs("button", {
              type: "button",
              className:
                "flex items-center gap-0.5 rounded-sm border border-stone-300/90 bg-white px-3 py-2 text-stone-800 shadow-sm shadow-stone-900/5 active:opacity-90 pr-2",
              onClick: s,
              "aria-label": "返回",
              children: [
                e.jsx("span", {
                  className: "text-[13px] font-medium",
                  children: "返回",
                }),
                e.jsx(Kn, { size: 18, className: "text-stone-500" }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-4 pb-32 space-y-5",
          children: v
            ? e.jsx("div", {
                className: "flex justify-center py-20 text-stone-400",
                children: e.jsx(Sn, {
                  className: "animate-spin",
                  size: 26,
                  strokeWidth: 1.75,
                }),
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("section", {
                    className:
                      "rounded-sm bg-white border border-stone-200/80 p-4 shadow-sm shadow-stone-900/5",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[9px] text-stone-400 tracking-[0.22em] mb-2.5 uppercase",
                        children: "封面",
                      }),
                      e.jsxs("label", {
                        className:
                          "block aspect-video rounded-sm overflow-hidden cursor-pointer bg-stone-200/60 flex items-center justify-center border border-stone-300/70",
                        children: [
                          c
                            ? e.jsx("img", {
                                src: c,
                                alt: "",
                                className: "w-full h-full object-cover",
                              })
                            : e.jsx("span", {
                                className:
                                  "text-stone-400 text-sm tracking-wide",
                                children: "选择本地图片",
                              }),
                          e.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            className: "hidden",
                            onChange: A,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("section", {
                    className:
                      "rounded-sm bg-white border border-stone-200/80 p-4 shadow-sm shadow-stone-900/5",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[9px] text-stone-400 tracking-[0.22em] mb-2.5 uppercase",
                        children: "标题",
                      }),
                      e.jsx("input", {
                        value: i,
                        onChange: (C) => o(C.target.value),
                        placeholder: "直播标题",
                        className:
                          "w-full text-[17px] font-medium text-stone-900 placeholder:text-stone-300 outline-none bg-transparent border-0 border-b border-stone-200 focus:border-stone-800 transition-colors pb-2 rounded-none",
                      }),
                    ],
                  }),
                  e.jsxs("section", {
                    className:
                      "rounded-sm bg-white border border-stone-200/80 p-4 shadow-sm shadow-stone-900/5",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[9px] text-stone-400 tracking-[0.22em] mb-3 uppercase",
                        children: "可见范围",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: () => f("all"),
                            className: `flex-1 rounded-sm py-2.5 text-[13px] font-medium transition-all border ${u === "all" ? "bg-stone-900 text-white border-stone-900" : "bg-stone-100 text-stone-600 border-stone-200"}`,
                            children: "所有人",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => f("exclude"),
                            className: `flex-1 rounded-sm py-2.5 text-[13px] font-medium transition-all border ${u === "exclude" ? "bg-stone-900 text-white border-stone-900" : "bg-stone-100 text-stone-600 border-stone-200"}`,
                            children: "不给谁看",
                          }),
                        ],
                      }),
                      u === "exclude" &&
                        e.jsx("div", {
                          className:
                            "mt-3 max-h-48 overflow-y-auto rounded-sm border border-stone-200/80 bg-stone-50 divide-y divide-stone-200/80",
                          children:
                            w.length === 0
                              ? e.jsx("div", {
                                  className: "p-3 text-xs text-stone-400",
                                  children: "暂无居民档案",
                                })
                              : w.map((C) => {
                                  const M = p.includes(String(C.id));
                                  return e.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => _(C.id),
                                      className: `w-full flex items-center justify-between px-3 py-2.5 text-left text-[13px] ${M ? "bg-rose-50" : ""}`,
                                      children: [
                                        e.jsx("span", {
                                          className: "truncate text-stone-800",
                                          children: C.name,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[11px] text-stone-400 shrink-0",
                                          children: M ? "已排除" : "可见",
                                        }),
                                      ],
                                    },
                                    C.id,
                                  );
                                }),
                        }),
                    ],
                  }),
                ],
              }),
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 p-4 pb-8 bg-gradient-to-t from-[#f5f3f0] via-[#f5f3f0]/98 to-transparent pt-12 border-t border-stone-200/80",
          children: e.jsx("button", {
            type: "button",
            disabled: !k,
            onClick: () =>
              n == null
                ? void 0
                : n({
                    title: i.trim(),
                    coverDataUrl: c,
                    visibility: u,
                    excludedNpcIds: u === "exclude" ? p : [],
                    letingBinding: h,
                    storageScopeId: "user",
                    liveSessionKey: `user_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
                  }),
            className: `w-full rounded-sm py-3.5 text-[14px] font-semibold tracking-[0.08em] transition-all active:scale-[0.99] ${k ? "bg-stone-900 text-white shadow-lg shadow-stone-900/15" : "bg-stone-300 text-stone-500 cursor-not-allowed"}`,
            children: "开直播",
          }),
        }),
        e.jsx(dg, {
          open: x,
          onClose: () => y(!1),
          binding: h,
          onSave: (C) => g(C),
          variant: "radio",
          sheetTitle: "绑定乐听歌单",
          sheetDescription:
            "直播间的背景音乐将从该歌单选取（与日记、电台一致）。",
          rootPosition: "absolute",
          showPhoneCase: a,
          caseSize: r,
        }),
      ],
    });
  },
  Bx = co("leting"),
  aq = ["恐怖", "浪漫", "搞笑", "温馨", "忧郁"];
async function f4(t, s, n) {
  var o, c;
  const a = (t.title || t.name || "BGM").trim(),
    i =
      (
        t.artist ||
        (Array.isArray(t.ar) ? t.ar.map((d) => d.name).join(" / ") : "") ||
        "未知"
      ).trim() || "未知";
  if (t.source === "netease_user" && t.platformId != null) {
    const d = await s(t.platformId);
    if (!d) return null;
    let u = t.cover;
    if ((!u || String(u).includes("default")) && t.platformId)
      try {
        const f = await n(t.platformId);
        (c = (o = f == null ? void 0 : f[0]) == null ? void 0 : o.al) != null &&
          c.picUrl &&
          (u = f[0].al.picUrl);
      } catch {}
    return {
      id: t.id,
      name: a,
      author: i,
      cover: u || null,
      url: d,
      _blob: !1,
    };
  }
  if (t.source === "local" && t.fileBlob instanceof Blob) {
    const d = await t.fileBlob.arrayBuffer(),
      u = new Blob([d], { type: t.fileBlob.type || "audio/mpeg" }),
      f = URL.createObjectURL(u);
    return {
      id: t.id,
      name: a,
      author: i,
      cover: t.cover || null,
      url: f,
      _blob: !0,
    };
  }
  return t.url
    ? {
        id: t.id,
        name: a,
        author: i,
        cover: t.cover || null,
        url: t.url,
        _blob: !1,
      }
    : null;
}
const rq = ({
    item: t,
    index: s,
    coverIndex: n,
    setCoverIndex: a,
    onDelete: r,
  }) => {
    const {
        attributes: i,
        listeners: o,
        setNodeRef: c,
        transform: d,
        transition: u,
        isDragging: f,
      } = Wh({ id: t.id }),
      p = {
        transform: Hi.Transform.toString(d),
        transition: u,
        opacity: f ? 0.5 : 1,
      };
    return e.jsxs("div", {
      ref: c,
      style: p,
      ...i,
      ...o,
      className: `relative w-[48px] h-[48px] flex-shrink-0 rounded-sm overflow-hidden cursor-pointer border ${s === n ? "border-[#03CCD9] ring-1 ring-[#03CCD9]/30" : "border-stone-200/80"}`,
      onClick: () => a(s),
      children: [
        t.type === "image"
          ? e.jsx("img", {
              src: t.content,
              className: "w-full h-full object-cover",
              alt: "Thumbnail",
            })
          : e.jsx("div", {
              className:
                "w-full h-full bg-gray-800 flex items-center justify-center text-white",
              children: e.jsx(Al, { size: 16 }),
            }),
        e.jsx("div", {
          className:
            "absolute top-0 right-0 bg-black/50 w-4 h-4 flex items-center justify-center rounded-bl-[4px] z-10",
          onPointerDown: (m) => m.stopPropagation(),
          onClick: (m) => r(s, m),
          children: e.jsx(Ts, { size: 10, className: "text-white" }),
        }),
      ],
    });
  },
  iq = ({ onPostSuccess: t }) => {
    var Ve;
    const { currentUser: s, postVideo: n, bgmLibrary: a } = ei(),
      {
        fetchUserPlaylists: r,
        fetchPlaylistDetail: i,
        fetchMusicUrl: o,
        fetchSongDetail: c,
        user: d,
        apiEndpoint: u,
      } = Ii(),
      f = l.useMemo(() => {
        const Ae = a || {};
        return aq
          .map((te) => ({
            cat: te,
            tracks: (Ae[te] || []).filter((Se) => Se && Se.url),
          }))
          .filter((te) => te.tracks.length > 0);
      }, [a]),
      [p, m] = l.useState(""),
      [h, g] = l.useState(""),
      [x, y] = l.useState([]),
      [v, b] = l.useState(0),
      [N, w] = l.useState(null),
      [_, A] = l.useState(!1),
      [k, C] = l.useState(!1),
      [M, E] = l.useState(!1),
      [S, j] = l.useState("image"),
      [T, I] = l.useState("leting_local"),
      [L, B] = l.useState([]),
      [F, D] = l.useState([]),
      [$, P] = l.useState(!1),
      [z, O] = l.useState(null),
      [Z, K] = l.useState([]),
      [q, V] = l.useState(!1),
      [ne, le] = l.useState(""),
      [ie, X] = l.useState(null),
      [je, xe] = l.useState(null),
      ye = l.useRef(new Audio()),
      R = l.useRef(null),
      oe = l.useRef(null),
      [ee, H] = l.useState("公开 · 所有人可见"),
      Y = () => {
        if (R.current) {
          try {
            URL.revokeObjectURL(R.current);
          } catch {}
          R.current = null;
        }
      },
      U = () => {
        (ye.current.pause(),
          xe(null),
          Y(),
          O(null),
          K([]),
          le(""),
          X(null),
          A(!1));
      };
    (l.useEffect(() => {
      _ &&
        (I("leting_local"),
        le(""),
        O(null),
        K([]),
        xe(null),
        Y(),
        (async () => {
          P(!0);
          try {
            const Ae = await Bx.getAllPlaylists();
            B(Array.isArray(Ae) ? Ae : []);
          } catch {
            B([]);
          } finally {
            P(!1);
          }
        })());
    }, [_]),
      l.useEffect(() => {
        !_ ||
          T !== "leting_netease" ||
          !d ||
          (async () => {
            (P(!0), le(""));
            try {
              const Ae = await r(d.userId);
              D(
                (Ae || []).map((te) => ({
                  id: `ne_pl_${te.id}`,
                  platformId: te.id,
                  name: te.name,
                  cover: te.coverImgUrl,
                  trackCount: te.trackCount,
                })),
              );
            } catch {
              (le("加载网易云歌单失败"), D([]));
            } finally {
              P(!1);
            }
          })();
      }, [_, T, d, r]));
    const ce = async (Ae) => {
        if (Ae != null && Ae.id) {
          (V(!0), le(""));
          try {
            const te = await Bx.getSongsByPlaylist(Ae.id);
            (K(Array.isArray(te) ? te : []),
              O({ source: "local", playlist: Ae }));
          } catch {
            le("读取本地歌单失败");
          } finally {
            V(!1);
          }
        }
      },
      pe = async (Ae) => {
        if (Ae != null && Ae.platformId) {
          if (!u) {
            le("请先在乐听 App 中配置网易云 API 并登录");
            return;
          }
          (V(!0), le(""));
          try {
            let te = await Bx.getNeteaseCache(`playlist_${Ae.platformId}`);
            if (!(te != null && te.length)) {
              const Se = await i(Ae.platformId);
              if (!(Se != null && Se.length)) {
                (le("歌单为空或加载失败"),
                  K([]),
                  O({ source: "netease", playlist: Ae }));
                return;
              }
              ((te = Se.map((Fe) => {
                var $e, tt;
                return {
                  id: `ne_${Fe.id}`,
                  platformId: Fe.id,
                  platform: "netease",
                  title: Fe.name,
                  artist: Array.isArray(Fe.ar)
                    ? Fe.ar.map((Xe) => Xe.name).join(" / ")
                    : "",
                  cover: ($e = Fe.al) == null ? void 0 : $e.picUrl,
                  album: (tt = Fe.al) == null ? void 0 : tt.name,
                  duration: Fe.dt ? Fe.dt / 1e3 : 0,
                  source: "netease_user",
                };
              })),
                await Bx.setNeteaseCache(`playlist_${Ae.platformId}`, te));
            }
            (K(te), O({ source: "netease", playlist: Ae }));
          } catch {
            le("加载网易云歌单失败");
          } finally {
            V(!1);
          }
        }
      },
      se = (Ae) => String(Ae.id),
      Te = Ph(
        ju(Sp, { activationConstraint: { distance: 8 } }),
        ju(cv, { coordinateGetter: kD }),
      ),
      ke = (Ae) => {
        const { active: te, over: Se } = Ae;
        te.id !== Se.id &&
          y((Fe) => {
            const $e = Fe.findIndex((Xe) => Xe.id === te.id),
              tt = Fe.findIndex((Xe) => Xe.id === Se.id);
            return (
              $e === v
                ? b(tt)
                : $e < v && tt >= v
                  ? b(v - 1)
                  : $e > v && tt <= v && b(v + 1),
              Hh(Fe, $e, tt)
            );
          });
      },
      W = async (Ae) => {
        const te = se(Ae);
        if (je === te) {
          (ye.current.pause(), xe(null));
          return;
        }
        Y();
        try {
          let Se = Ae.url;
          if (!Se) {
            const Fe = await f4(Ae, o, c);
            if (!(Fe != null && Fe.url)) return;
            ((Se = Fe.url), Fe._blob && (R.current = Se));
          }
          ((ye.current.src = Se), await ye.current.play(), xe(te));
        } catch {}
      },
      ue = (Ae) => {
        (w({
          id: Ae.id,
          name: Ae.name || "BGM",
          author: (Ae.author || "未知").trim() || "未知",
          cover: Ae.cover || null,
          url: Ae.url || null,
        }),
          U());
      },
      re = async (Ae) => {
        (X(se(Ae)), le(""));
        try {
          const te = await f4(Ae, o, c);
          if (!(te != null && te.url)) {
            le("无法获取播放地址，请检查乐听 API 与网络");
            return;
          }
          (w({
            id: te.id,
            name: te.name,
            author: te.author,
            cover: te.cover,
            url: te.url,
          }),
            U());
        } finally {
          X(null);
        }
      };
    l.useEffect(
      () => () => {
        if ((ye.current.pause(), R.current))
          try {
            URL.revokeObjectURL(R.current);
          } catch {}
      },
      [],
    );
    const he = (Ae) => {
        const te = Ae.target.files[0];
        if (te) {
          const Se = new FileReader();
          ((Se.onloadend = () => {
            const Fe = { id: Date.now(), type: "image", content: Se.result };
            (y(($e) => [...$e, Fe]), x.length === 0 && b(0), C(!1));
          }),
            Se.readAsDataURL(te));
        }
      },
      ge = (Ae) => {
        if (!Ae.trim()) return;
        const te = { id: Date.now(), type: S, content: Ae };
        (y((Se) => [...Se, te]), x.length === 0 && b(0), E(!1), C(!1));
      },
      J = (Ae, te) => {
        te.stopPropagation();
        const Se = x.filter((Fe, $e) => $e !== Ae);
        (y(Se), v >= Se.length && b(Math.max(0, Se.length - 1)));
      },
      G = () => {
        if (!p.trim() && !h.trim() && x.length === 0) return;
        const Ae = p
            ? `${p}
${h}`
            : h,
          te = x[v],
          Se = te ? te.type : "text",
          Fe = x
            .filter((Xe) => Xe.type !== "image")
            .map(
              (Xe) =>
                `[${Xe.type === "text_image" ? "画面" : "视频"}] ${Xe.content}`,
            ).join(`
`);
        let $e = null;
        if (te)
          if (te.type === "image") $e = te.content;
          else {
            const Xe = Math.floor(Math.random() * 1e3);
            $e = `https://source.unsplash.com/random/400x600?${encodeURIComponent(te.content)}&sig=${Xe}`;
          }
        const tt = {
          id: Date.now(),
          type: Se === "text_video" ? "ai_generated" : "image",
          content: Ae,
          cover: $e,
          mediaUrl: $e,
          mediaType: Se,
          mediaPrompt: Fe || (Se === "image" ? "用户上传了图片" : null),
          author: { id: s.id, name: s.name, avatar: s.avatar, isFollowing: !1 },
          stats: { likes: 0, comments: 0, shares: 0, favorites: 0 },
          bgm: N || { name: "原声", author: s.name, url: null },
          isLiked: !1,
          isFavorited: !1,
          comments: [],
        };
        (n(tt), t && t());
      },
      we = () => {
        g((Ae) => Ae + (Ae.length > 0 && !Ae.endsWith(" ") ? " #" : "#"));
      },
      Q = () => {
        g((Ae) => Ae + (Ae.length > 0 && !Ae.endsWith(" ") ? " @" : "@"));
      },
      ve = () => {
        const Ae = ["公开 · 所有人可见", "私密 · 仅自己可见", "好友可见"],
          te = Ae.indexOf(ee);
        H(Ae[(te + 1) % Ae.length]);
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-50 bg-[#f5f3f0] text-stone-900 flex flex-col animate-fade-in font-sans",
      children: [
        e.jsxs("header", {
          className:
            "pt-10 pb-4 flex items-center justify-between px-5 bg-[#f5f3f0]/95 backdrop-blur-md sticky top-0 z-10 border-b border-stone-200/60",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: t,
              className:
                "-ml-1 p-2 rounded-full hover:bg-stone-200/50 transition-colors",
              "aria-label": "返回",
              children: e.jsx(un, {
                size: 24,
                className: "text-stone-800",
                strokeWidth: 1.75,
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-col items-center",
              children: [
                e.jsx("span", {
                  className:
                    "text-[9px] tracking-[0.28em] text-stone-400 font-medium uppercase",
                  children: "Create",
                }),
                N
                  ? e.jsxs("button", {
                      type: "button",
                      className:
                        "mt-1 flex items-center gap-1.5 border border-stone-300/80 bg-white/60 px-3 py-1 rounded-full max-w-[140px] hover:border-stone-400 transition-colors",
                      onClick: () => A(!0),
                      children: [
                        e.jsx(vr, {
                          size: 12,
                          className: "text-stone-600 shrink-0",
                          strokeWidth: 1.75,
                        }),
                        e.jsx("span", {
                          className:
                            "text-[11px] font-medium text-stone-700 truncate",
                          children: N.name,
                        }),
                        e.jsx(Ts, {
                          size: 12,
                          className: "ml-0.5 text-stone-400 shrink-0",
                          onClick: (Ae) => {
                            (Ae.stopPropagation(), w(null));
                          },
                        }),
                      ],
                    })
                  : e.jsx("span", {
                      className:
                        "text-[13px] font-serif font-medium text-stone-600 tracking-wide mt-0.5",
                      children: "预览",
                    }),
              ],
            }),
            e.jsx("div", { className: "w-9", "aria-hidden": !0 }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto pb-36 no-scrollbar",
          children: [
            e.jsxs("div", {
              className: "flex flex-col items-center px-5 pt-6 pb-8",
              children: [
                e.jsx("div", {
                  className:
                    "w-full max-w-[200px] aspect-[3/4] bg-stone-200/80 border border-stone-300/70 relative overflow-hidden shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] rounded-sm group",
                  children:
                    x.length > 0
                      ? e.jsxs(e.Fragment, {
                          children: [
                            x[v].type === "image"
                              ? e.jsx("img", {
                                  src: x[v].content,
                                  className: "w-full h-full object-cover",
                                  alt: "Cover",
                                })
                              : e.jsxs("div", {
                                  className:
                                    "w-full h-full bg-gradient-to-b from-stone-800 to-stone-950 p-4 flex flex-col justify-center items-center text-white text-center",
                                  children: [
                                    e.jsx(Al, {
                                      size: 22,
                                      className: "mb-3 opacity-70",
                                      strokeWidth: 1.5,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[12px] leading-relaxed line-clamp-5 opacity-90 font-light tracking-wide",
                                      children: x[v].content,
                                    }),
                                  ],
                                }),
                            e.jsx("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 bg-stone-950/55 text-white text-[10px] tracking-[0.2em] py-2 text-center backdrop-blur-[3px] font-medium uppercase",
                              children: "封面",
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className:
                            "w-full h-full flex flex-col items-center justify-center text-stone-400 gap-2",
                          children: [
                            e.jsx(Za, {
                              size: 28,
                              strokeWidth: 1.25,
                              className: "opacity-40",
                            }),
                            e.jsx("span", {
                              className:
                                "text-[11px] tracking-widest uppercase",
                              children: "添加素材",
                            }),
                          ],
                        }),
                }),
                e.jsx("p", {
                  className:
                    "mt-5 text-[9px] tracking-[0.25em] text-stone-400 uppercase",
                  children: "Sequence",
                }),
                e.jsxs("div", {
                  className:
                    "flex gap-2.5 overflow-x-auto max-w-full pt-3 pb-1 no-scrollbar items-center justify-center",
                  children: [
                    e.jsx(Gh, {
                      sensors: Te,
                      collisionDetection: ov,
                      onDragEnd: ke,
                      children: e.jsx(du, {
                        items: x.map((Ae) => Ae.id),
                        strategy: P3,
                        children: x.map((Ae, te) =>
                          e.jsx(
                            rq,
                            {
                              item: Ae,
                              index: te,
                              coverIndex: v,
                              setCoverIndex: b,
                              onDelete: J,
                            },
                            Ae.id,
                          ),
                        ),
                      }),
                    }),
                    e.jsx("button", {
                      type: "button",
                      className:
                        "w-[48px] h-[48px] border border-dashed border-stone-300 bg-white/50 rounded-sm flex items-center justify-center cursor-pointer hover:border-stone-400 hover:bg-white/80 transition-colors flex-shrink-0",
                      onClick: () => C(!0),
                      "aria-label": "添加",
                      children: e.jsx(ea, {
                        size: 20,
                        className: "text-stone-400",
                        strokeWidth: 1.75,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "px-6 space-y-6 max-w-lg mx-auto w-full",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("label", {
                      className:
                        "block text-[9px] tracking-[0.22em] text-stone-400 uppercase mb-2",
                      children: "标题",
                    }),
                    e.jsx("input", {
                      type: "text",
                      placeholder: "一行标题",
                      className:
                        "w-full text-[22px] font-serif font-medium text-stone-900 placeholder:text-stone-300 outline-none bg-transparent border-0 border-b border-stone-200 focus:border-stone-800 transition-colors pb-2 rounded-none",
                      value: p,
                      onChange: (Ae) => m(Ae.target.value),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("label", {
                      className:
                        "block text-[9px] tracking-[0.22em] text-stone-400 uppercase mb-2",
                      children: "正文",
                    }),
                    e.jsx("textarea", {
                      placeholder: "简短描述作品，杂志式排版……",
                      className:
                        "w-full min-h-[96px] text-[15px] text-stone-600 placeholder:text-stone-400 outline-none resize-none bg-transparent leading-[1.75] tracking-wide",
                      value: h,
                      onChange: (Ae) => g(Ae.target.value),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "px-6 max-w-lg mx-auto w-full mt-2 mb-6 flex flex-wrap items-center gap-2",
              children: [
                e.jsxs("button", {
                  type: "button",
                  onClick: we,
                  className:
                    "inline-flex items-center gap-1.5 border border-stone-300/90 bg-white/70 px-3 py-2 rounded-sm text-[11px] font-medium tracking-wider text-stone-700 hover:bg-white transition-colors",
                  children: [e.jsx(yp, { size: 13, strokeWidth: 2 }), " 话题"],
                }),
                e.jsxs("button", {
                  type: "button",
                  onClick: Q,
                  className:
                    "inline-flex items-center gap-1.5 border border-stone-300/90 bg-white/70 px-3 py-2 rounded-sm text-[11px] font-medium tracking-wider text-stone-700 hover:bg-white transition-colors",
                  children: [e.jsx(W1, { size: 13, strokeWidth: 2 }), " 朋友"],
                }),
                !N &&
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => A(!0),
                    className:
                      "inline-flex items-center gap-1.5 border border-stone-300/90 bg-white/70 px-3 py-2 rounded-sm text-[11px] font-medium tracking-wider text-stone-700 hover:bg-white transition-colors",
                    children: [
                      e.jsx(vr, { size: 13, strokeWidth: 2 }),
                      " 配乐",
                    ],
                  }),
              ],
            }),
            e.jsx("div", {
              className:
                "h-px bg-stone-200/80 max-w-lg mx-auto w-[calc(100%-3rem)]",
            }),
            e.jsx("div", {
              className:
                "px-6 max-w-lg mx-auto w-full mt-6 space-y-0 divide-y divide-stone-200/70",
              children: e.jsxs("button", {
                type: "button",
                className:
                  "w-full flex items-center justify-between py-4 text-left active:bg-stone-100/50 transition-colors",
                onClick: ve,
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 text-stone-800",
                    children: [
                      e.jsx(Um, {
                        size: 18,
                        strokeWidth: 1.5,
                        className: "text-stone-500",
                      }),
                      e.jsx("span", {
                        className: "text-[14px] font-light tracking-wide",
                        children: ee,
                      }),
                    ],
                  }),
                  e.jsx(Kn, { size: 16, className: "text-stone-300" }),
                ],
              }),
            }),
            e.jsx("p", {
              className:
                "mt-10 mb-8 text-center text-[10px] tracking-[0.2em] text-stone-400 uppercase",
              children: "发布后将保存至本地",
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 w-full bg-[#f5f3f0]/98 backdrop-blur-md px-5 py-3 pb-8 flex items-stretch z-20 border-t border-stone-200/80",
          children: e.jsxs("button", {
            type: "button",
            className: `w-full h-12 rounded-sm flex items-center justify-center gap-2 font-medium tracking-[0.12em] text-[13px] transition-all active:scale-[0.99] ${p.trim() || h.trim() || x.length > 0 ? "bg-stone-900 text-white shadow-lg shadow-stone-900/15" : "bg-stone-300 text-stone-500 cursor-not-allowed"}`,
            onClick: G,
            disabled: !p.trim() && !h.trim() && x.length === 0,
            children: [
              e.jsx(KM, {
                size: 16,
                className: "text-current",
                strokeWidth: 2.5,
              }),
              e.jsx("span", { children: "发作品" }),
            ],
          }),
        }),
        e.jsx("input", {
          type: "file",
          ref: oe,
          className: "hidden",
          accept: "image/*",
          onChange: he,
        }),
        k &&
          e.jsxs("div", {
            className:
              "absolute inset-0 z-[60] flex flex-col justify-end bg-black/50 backdrop-blur-sm animate-fade-in",
            children: [
              e.jsx("div", { className: "flex-1", onClick: () => C(!1) }),
              e.jsxs("div", {
                className:
                  "bg-white rounded-t-2xl p-4 animate-slide-up space-y-2",
                children: [
                  e.jsx("div", {
                    className:
                      "text-center text-sm font-bold text-gray-500 mb-4",
                    children: "选择媒体类型",
                  }),
                  e.jsxs("button", {
                    className:
                      "w-full py-3.5 bg-gray-50 rounded-xl flex items-center justify-center space-x-2 active:bg-gray-100",
                    onClick: () => {
                      var Ae;
                      return (Ae = oe.current) == null ? void 0 : Ae.click();
                    },
                    children: [
                      e.jsx(Za, { size: 20, className: "text-[#fe2c55]" }),
                      e.jsx("span", {
                        className: "font-medium",
                        children: "上传图片",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    className:
                      "w-full py-3.5 bg-gray-50 rounded-xl flex items-center justify-center space-x-2 active:bg-gray-100",
                    onClick: () => {
                      (j("text_image"), E(!0), C(!1));
                    },
                    children: [
                      e.jsx(Al, { size: 20, className: "text-[#24e3d8]" }),
                      e.jsx("span", {
                        className: "font-medium",
                        children: "文字描述图片",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    className:
                      "w-full py-3.5 bg-gray-50 rounded-xl flex items-center justify-center space-x-2 active:bg-gray-100",
                    onClick: () => {
                      (j("text_video"), E(!0), C(!1));
                    },
                    children: [
                      e.jsx(Vl, { size: 20, className: "text-[#fe2c55]" }),
                      e.jsx("span", {
                        className: "font-medium",
                        children: "文字描述视频",
                      }),
                    ],
                  }),
                  e.jsx("div", { className: "h-2" }),
                  e.jsx("button", {
                    className:
                      "w-full py-3.5 bg-white border border-gray-100 rounded-xl font-medium text-gray-500 active:bg-gray-50",
                    onClick: () => C(!1),
                    children: "取消",
                  }),
                  e.jsx("div", { className: "h-4" }),
                ],
              }),
            ],
          }),
        M &&
          e.jsxs("div", {
            className:
              "absolute inset-0 z-[70] bg-white flex flex-col animate-slide-up",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between px-4 py-3 border-b border-gray-100 pt-14",
                children: [
                  e.jsx("button", {
                    onClick: () => E(!1),
                    className: "text-sm text-gray-600",
                    children: "取消",
                  }),
                  e.jsx("span", {
                    className: "font-bold text-[16px]",
                    children:
                      S === "text_image" ? "描述图片画面" : "描述视频内容",
                  }),
                  e.jsx("button", {
                    onClick: () =>
                      ge(document.getElementById("media-text-input").value),
                    className: "text-sm font-bold text-[#fe2c55]",
                    children: "确认",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "p-4",
                children: e.jsx("textarea", {
                  id: "media-text-input",
                  className: "w-full h-40 text-[15px] outline-none resize-none",
                  placeholder:
                    S === "text_image"
                      ? "例如：一只在草地上奔跑的金毛犬，阳光明媚..."
                      : "例如：拍摄一段关于深夜食堂的短视频，氛围温馨...",
                  autoFocus: !0,
                }),
              }),
            ],
          }),
        _ &&
          e.jsxs("div", {
            className:
              "absolute inset-0 z-[60] bg-white flex flex-col animate-slide-up",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 px-3 py-3 border-b border-gray-100 pt-14",
                children: [
                  z
                    ? e.jsx("button", {
                        type: "button",
                        className: "p-1.5 -ml-1 text-gray-600",
                        onClick: () => {
                          (O(null),
                            K([]),
                            le(""),
                            ye.current.pause(),
                            xe(null),
                            Y());
                        },
                        "aria-label": "返回",
                        children: e.jsx(un, { size: 22 }),
                      })
                    : e.jsx("span", { className: "w-8 shrink-0" }),
                  e.jsxs("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsx("div", {
                        className: "text-base font-bold text-gray-900 truncate",
                        children: z
                          ? ((Ve = z.playlist) == null ? void 0 : Ve.name) ||
                            "歌单"
                          : "选择配乐",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[11px] text-gray-400 mt-0.5 leading-snug",
                        children: z
                          ? "试听或选用一首作为作品 BGM"
                          : "乐听本地与网易云需在乐听 App 中先导入或登录",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    className:
                      "text-sm font-medium text-gray-600 shrink-0 px-1",
                    onClick: U,
                    children: "取消",
                  }),
                ],
              }),
              !z &&
                e.jsxs("div", {
                  className: "flex gap-2 px-3 py-2 border-b border-gray-50",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      className: `flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-[11px] font-semibold ${T === "leting_local" ? "bg-[#fe2c55]/10 text-[#fe2c55]" : "bg-gray-50 text-gray-500"}`,
                      onClick: () => {
                        (I("leting_local"), le(""));
                      },
                      children: [e.jsx(G0, { size: 14 }), " 乐听·本地"],
                    }),
                    e.jsxs("button", {
                      type: "button",
                      className: `flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-[11px] font-semibold ${T === "leting_netease" ? "bg-[#fe2c55]/10 text-[#fe2c55]" : "bg-gray-50 text-gray-500"}`,
                      onClick: () => {
                        (I("leting_netease"), le(""));
                      },
                      children: [e.jsx(ao, { size: 14 }), " 网易云"],
                    }),
                    e.jsxs("button", {
                      type: "button",
                      className: `flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-[11px] font-semibold ${T === "douyin_lib" ? "bg-[#fe2c55]/10 text-[#fe2c55]" : "bg-gray-50 text-gray-500"}`,
                      onClick: () => {
                        (I("douyin_lib"), le(""));
                      },
                      children: [e.jsx(Cc, { size: 14 }), " 抖音库"],
                    }),
                  ],
                }),
              ne
                ? e.jsx("div", {
                    className:
                      "mx-4 mt-3 rounded-lg bg-amber-50 text-amber-900 text-xs px-3 py-2",
                    children: ne,
                  })
                : null,
              e.jsx("div", {
                className: "flex-1 overflow-y-auto pb-6 min-h-0",
                children: z
                  ? q
                    ? e.jsx("div", {
                        className: "flex justify-center py-16",
                        children: e.jsx(Sn, {
                          className: "animate-spin text-gray-400",
                          size: 28,
                        }),
                      })
                    : Z.length === 0
                      ? e.jsxs("div", {
                          className:
                            "flex flex-col items-center px-8 py-16 text-center text-gray-400",
                          children: [
                            e.jsx(vr, {
                              size: 44,
                              className: "mb-2 opacity-20",
                            }),
                            e.jsx("span", {
                              className: "text-sm",
                              children: "该歌单暂无歌曲",
                            }),
                          ],
                        })
                      : e.jsx("div", {
                          className: "divide-y divide-gray-50",
                          children: Z.map((Ae) => {
                            const te = se(Ae),
                              Se = Ae.title || Ae.name || "BGM",
                              Fe = Ae.artist || Ae.author || "未知";
                            return e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center px-4 py-3 active:bg-gray-50",
                                children: [
                                  e.jsxs("button", {
                                    type: "button",
                                    className:
                                      "w-12 h-12 rounded-md bg-gray-100 mr-3 relative overflow-hidden flex-shrink-0 flex items-center justify-center",
                                    onClick: () => W(Ae),
                                    "aria-label": "试听",
                                    children: [
                                      Ae.cover
                                        ? e.jsx("img", {
                                            src: Ae.cover,
                                            className:
                                              "w-full h-full object-cover",
                                            alt: "",
                                          })
                                        : e.jsx(vr, {
                                            size: 22,
                                            className: "text-gray-400",
                                          }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-black/20 flex items-center justify-center",
                                        children:
                                          je === te
                                            ? e.jsx(Sl, {
                                                size: 20,
                                                className:
                                                  "text-white fill-white",
                                              })
                                            : e.jsx(xr, {
                                                size: 20,
                                                className:
                                                  "text-white fill-white",
                                              }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex-1 min-w-0 mr-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-sm font-medium text-gray-900 truncate",
                                        children: Se,
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "text-xs text-gray-500 truncate",
                                        children: Fe,
                                      }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    disabled: ie === te,
                                    className:
                                      "px-3 py-1.5 bg-[#fe2c55] text-white text-xs font-bold rounded-full shrink-0 disabled:opacity-50",
                                    onClick: () => re(Ae),
                                    children: ie === te ? "…" : "使用",
                                  }),
                                ],
                              },
                              te,
                            );
                          }),
                        })
                  : T === "douyin_lib"
                    ? f.length === 0
                      ? e.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center px-8 py-16 text-gray-400 text-center",
                          children: [
                            e.jsx(vr, {
                              size: 48,
                              className: "mb-3 opacity-20",
                            }),
                            e.jsx("span", {
                              className: "text-sm text-gray-600",
                              children: "抖音配乐库为空",
                            }),
                            e.jsx("span", {
                              className: "text-xs mt-2 leading-relaxed",
                              children:
                                "可在抖音 → 设置 → 生成设置 → 通用背景音乐库中按分类上传或填写链接。",
                            }),
                          ],
                        })
                      : f.map(({ cat: Ae, tracks: te }) =>
                          e.jsxs(
                            "div",
                            {
                              className: "mb-2",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "sticky top-0 z-[1] bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-gray-500 border-b border-gray-50",
                                  children: Ae,
                                }),
                                e.jsx("div", {
                                  className: "divide-y divide-gray-50",
                                  children: te.map((Se) => {
                                    const Fe = String(Se.id);
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center px-4 py-3 active:bg-gray-50",
                                        children: [
                                          e.jsxs("button", {
                                            type: "button",
                                            className:
                                              "w-12 h-12 rounded-md bg-gray-100 mr-3 relative overflow-hidden flex-shrink-0 flex items-center justify-center",
                                            onClick: () => W(Se),
                                            "aria-label": "试听",
                                            children: [
                                              Se.cover
                                                ? e.jsx("img", {
                                                    src: Se.cover,
                                                    className:
                                                      "w-full h-full object-cover",
                                                    alt: "",
                                                  })
                                                : e.jsx(vr, {
                                                    size: 22,
                                                    className: "text-gray-400",
                                                  }),
                                              e.jsx("div", {
                                                className:
                                                  "absolute inset-0 bg-black/20 flex items-center justify-center",
                                                children:
                                                  je === Fe
                                                    ? e.jsx(Sl, {
                                                        size: 20,
                                                        className:
                                                          "text-white fill-white",
                                                      })
                                                    : e.jsx(xr, {
                                                        size: 20,
                                                        className:
                                                          "text-white fill-white",
                                                      }),
                                              }),
                                            ],
                                          }),
                                          e.jsxs("button", {
                                            type: "button",
                                            className:
                                              "flex-1 min-w-0 mr-3 text-left",
                                            onClick: () => ue(Se),
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-sm font-medium text-gray-900 truncate",
                                                children: Se.name || "BGM",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-xs text-gray-500 truncate",
                                                children: Se.author || "未知",
                                              }),
                                            ],
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            className:
                                              "px-4 py-1.5 bg-[#fe2c55] text-white text-xs font-bold rounded-full shrink-0",
                                            onClick: () => ue(Se),
                                            children: "使用",
                                          }),
                                        ],
                                      },
                                      Fe,
                                    );
                                  }),
                                }),
                              ],
                            },
                            Ae,
                          ),
                        )
                    : T === "leting_netease" && !d
                      ? e.jsxs("div", {
                          className:
                            "flex flex-col items-center px-8 py-16 text-center text-gray-400",
                          children: [
                            e.jsx(ao, {
                              size: 44,
                              className: "mb-3 opacity-30",
                            }),
                            e.jsx("span", {
                              className: "text-sm text-gray-600",
                              children: "未登录网易云账号",
                            }),
                            e.jsx("span", {
                              className: "text-xs mt-2 leading-relaxed",
                              children:
                                "请打开乐听 App，配置 API 并登录后返回此处选择歌单。",
                            }),
                          ],
                        })
                      : $
                        ? e.jsx("div", {
                            className: "flex justify-center py-16",
                            children: e.jsx(Sn, {
                              className: "animate-spin text-gray-400",
                              size: 28,
                            }),
                          })
                        : e.jsxs("div", {
                            className: "divide-y divide-gray-50",
                            children: [
                              (T === "leting_local" ? L : F).map((Ae) =>
                                e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    className:
                                      "w-full flex items-center gap-3 px-4 py-3 text-left active:bg-gray-50",
                                    onClick: () =>
                                      T === "leting_local" ? ce(Ae) : pe(Ae),
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-12 h-12 rounded-md bg-gray-100 overflow-hidden flex-shrink-0",
                                        children: Ae.cover
                                          ? e.jsx("img", {
                                              src: Ae.cover,
                                              className:
                                                "w-full h-full object-cover",
                                              alt: "",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "w-full h-full flex items-center justify-center",
                                              children: e.jsx(vr, {
                                                size: 20,
                                                className: "text-gray-400",
                                              }),
                                            }),
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900 truncate",
                                            children: Ae.name || "歌单",
                                          }),
                                          e.jsx("div", {
                                            className: "text-xs text-gray-400",
                                            children:
                                              T === "leting_local"
                                                ? "本地"
                                                : `${Ae.trackCount ?? "—"} 首`,
                                          }),
                                        ],
                                      }),
                                      e.jsx(Kn, {
                                        size: 18,
                                        className: "text-gray-300 shrink-0",
                                      }),
                                    ],
                                  },
                                  Ae.id,
                                ),
                              ),
                              (T === "leting_local" ? L : F).length === 0 &&
                                e.jsx("div", {
                                  className:
                                    "px-8 py-14 text-center text-sm text-gray-400",
                                  children:
                                    T === "leting_local"
                                      ? "暂无本地歌单，请先在乐听中添加。"
                                      : "暂无网易云歌单。",
                                }),
                            ],
                          }),
              }),
            ],
          }),
      ],
    });
  },
  oq = ({ size: t = 26, className: s }) =>
    e.jsxs("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: s,
      children: [
        e.jsx("path", {
          d: "M12.5 19.5c-4.2 0-7.5-3.1-7.5-7 0-1.2.3-2.3.8-3.3L4.5 4.5l4.9 1.2c1-.5 2.1-.8 3.3-.8 4.1 0 7.3 3.2 7.3 7.1 0 3.9-3.4 7-7.5 7Z",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinejoin: "round",
        }),
        e.jsx("path", {
          d: "M12 9v6M9 12h6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round",
        }),
      ],
    }),
  lq = ({ duration: t, text: s }) =>
    e.jsxs("div", {
      className: "flex flex-col min-w-[120px]",
      children: [
        e.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [
            e.jsx("div", {
              className:
                "w-6 h-6 bg-white rounded-full flex items-center justify-center",
              children: e.jsx(xr, {
                size: 12,
                className: "text-blue-600 ml-0.5",
                fill: "currentColor",
              }),
            }),
            e.jsxs("div", {
              className: "flex items-center space-x-0.5",
              children: [
                e.jsx("div", {
                  className: "w-0.5 h-2 bg-white/60 rounded-full",
                }),
                e.jsx("div", {
                  className: "w-0.5 h-3 bg-white/80 rounded-full",
                }),
                e.jsx("div", { className: "w-0.5 h-4 bg-white rounded-full" }),
                e.jsx("div", {
                  className: "w-0.5 h-3 bg-white/80 rounded-full",
                }),
                e.jsx("div", {
                  className: "w-0.5 h-2 bg-white/60 rounded-full",
                }),
              ],
            }),
            e.jsxs("span", {
              className: "text-white font-medium text-sm",
              children: [t, '"'],
            }),
          ],
        }),
        s &&
          e.jsx("div", {
            className:
              "mt-2 pt-2 border-t border-white/20 text-white text-[15px]",
            children: s,
          }),
      ],
    }),
  cq = ({ onClose: t, user: s, onViewProfile: n, onVideoClick: a }) => {
    const {
        currentUser: r,
        privateChats: i,
        privateChatTyping: o,
        sendPrivateMessage: c,
        deletePrivateMessage: d,
        updatePrivateMessage: u,
        triggerPrivateReply: f,
        npcs: p,
        strangerChatPeers: m = {},
      } = ei(),
      [h, g] = l.useState(""),
      [x, y] = l.useState(null),
      [v, b] = l.useState(() => new Set()),
      [N, w] = l.useState(!1),
      [_, A] = l.useState([]),
      [k, C] = l.useState(null),
      [M, E] = l.useState(!1),
      [S, j] = l.useState(!1),
      [T, I] = l.useState(!1),
      L = l.useRef(null),
      B = l.useRef(!1),
      F = l.useRef(null),
      D = l.useRef(0),
      $ = l.useRef(0),
      P = l.useRef(null),
      z = 3,
      O = 24,
      Z = (re) => {
        b((he) => {
          const ge = new Set(he);
          return (ge.has(re) ? ge.delete(re) : ge.add(re), ge);
        });
      },
      K = (re) =>
        (typeof re == "string" ? re : "")
          .replace(/\s*\[TRANS:\s*[^\]]*$/gi, "")
          .trim() || "…",
      q = l.useCallback((re) => {
        (w(!0), A([re]));
      }, []),
      V = l.useCallback((re) => {
        var he;
        return (he = re == null ? void 0 : re.touches) != null && he[0]
          ? re.touches[0].clientX
          : ((re == null ? void 0 : re.clientX) ?? 0);
      }, []),
      ne = l.useCallback((re) => {
        var he;
        return (he = re == null ? void 0 : re.touches) != null && he[0]
          ? re.touches[0].clientY
          : ((re == null ? void 0 : re.clientY) ?? 0);
      }, []),
      le = l.useCallback(
        (re, he) => {
          N ||
            ((D.current = V(re)),
            ($.current = ne(re)),
            (F.current = setTimeout(() => q(he), 500)));
        },
        [N, q, V, ne],
      ),
      ie = l.useCallback(
        (re) => {
          if (N) return;
          const he = V(re) - D.current,
            ge = ne(re) - $.current;
          (Math.abs(he) > 5 || Math.abs(ge) > 5) &&
            F.current &&
            (clearTimeout(F.current), (F.current = null));
        },
        [N, V, ne],
      ),
      X = l.useCallback(() => {
        F.current && (clearTimeout(F.current), (F.current = null));
      }, []),
      je = l.useCallback(
        (re) => {
          N || (F.current = setTimeout(() => q(re), 500));
        },
        [N, q],
      ),
      xe = l.useCallback(() => {
        F.current && (clearTimeout(F.current), (F.current = null));
      }, []),
      ye = l.useCallback((re) => {
        A((he) =>
          he.includes(re) ? he.filter((ge) => ge !== re) : [...he, re],
        );
      }, []),
      R = () => {
        !(s != null && s.id) ||
          typeof d != "function" ||
          (d(H.id, _), w(!1), A([]));
      },
      oe = () => {
        if (_.length !== 1 || !(s != null && s.id)) return;
        const re = _[0],
          ge = (i[H.id] || []).find((J) => J.id === re);
        ge &&
          (ge.type === "text" || !ge.type) &&
          typeof ge.text == "string" &&
          (C(re), g(ge.text), w(!1), A([]));
      },
      ee = () => {
        (C(null), g(""));
      },
      H = (() => {
        if (!s) return s;
        const re = (s == null ? void 0 : s.id) != null ? String(s.id) : "",
          he = (p || []).find(
            (ge) =>
              ge &&
              (ge.id === s.id ||
                String(ge.douyinId || "") === re ||
                String(ge.contactId || "") === re ||
                ge.id === s.douyinId),
          );
        return he
          ? {
              ...s,
              id: he.id,
              name: he.name || s.name,
              avatar: he.avatar || s.avatar,
            }
          : s;
      })(),
      Y = H && i[H.id] ? i[H.id] : [];
    (H == null ? void 0 : H.id) != null && String(H.id);
    const U = [...Y]
      .reverse()
      .find((re) => re && re.type === "shared_video" && re.sharedVideo);
    Y.length && Y[Y.length - 1];
    const ce = !1,
      pe =
        _.length === 1 &&
        (() => {
          const re = Y.find((he) => he.id === _[0]);
          return (
            re &&
            re.type !== "system" &&
            (re.type === "text" || !re.type) &&
            typeof re.text == "string"
          );
        })(),
      se = (re = "smooth") => {
        var he;
        (he = L.current) == null || he.scrollIntoView({ behavior: re });
      };
    (l.useLayoutEffect(() => {
      s != null && s.id && ((B.current = !1), se("auto"), (B.current = !0));
    }, [s == null ? void 0 : s.id]),
      l.useEffect(() => {
        if (!B.current) {
          (se("auto"), (B.current = !0));
          return;
        }
        se("smooth");
      }, [Y]),
      l.useEffect(() => {
        s != null && s.id && se("smooth");
      }, [
        s == null ? void 0 : s.id,
        o == null ? void 0 : o[s == null ? void 0 : s.id],
      ]));
    const Te = () => {
        if (
          (se("smooth"),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => se("smooth"));
          }),
          setTimeout(() => se("smooth"), 180),
          typeof window < "u" && window.visualViewport)
        ) {
          const re = () => se("smooth");
          window.visualViewport.addEventListener("resize", re, { once: !0 });
        }
      },
      ke = () => {
        if (!s) return;
        if (k) {
          (typeof u == "function" && u(H.id, k, { text: h.trim() || " " }),
            C(null),
            g(""));
          return;
        }
        if (!h.trim()) return;
        const re = x || ((U == null ? void 0 : U.id) ?? null);
        (c(H.id, h, re), g(""), y(null));
      },
      W = (re) => {
        re.key === "Enter" && !re.shiftKey && (re.preventDefault(), ke());
      },
      ue = l.useCallback(() => {
        const re = P.current;
        if (!re) return;
        const he = O * z;
        ((re.style.height = "auto"),
          (re.style.maxHeight = `${he}px`),
          (re.style.height = `${Math.min(re.scrollHeight, he)}px`),
          (re.style.overflowY = re.scrollHeight > he ? "auto" : "hidden"));
      }, []);
    return (
      l.useEffect(() => {
        ue();
      }, [h, ue]),
      l.useEffect(() => {}, []),
      e.jsxs("div", {
        className:
          "h-full w-full flex flex-col z-50 absolute top-0 left-0 bg-[#f2f3f5]",
        children: [
          e.jsxs("div", {
            className:
              "px-[30px] pt-[60px] pb-5 flex justify-between items-end border-b border-gray-200/50 bg-[#f2f3f5]",
            children: [
              e.jsxs("div", {
                className: "flex items-end gap-3 min-w-0",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: t,
                    "aria-label": "返回",
                    children: e.jsx(un, { size: 26, className: "text-black" }),
                  }),
                  e.jsx("div", {
                    className: "cursor-pointer active:opacity-90",
                    onClick: () => {
                      n && H && n(H.id);
                    },
                    role: "presentation",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-2 min-w-0 max-w-[65vw]",
                      children: [
                        e.jsxs("div", {
                          className: "relative w-8 h-8 shrink-0",
                          children: [
                            e.jsx("img", {
                              src:
                                (H == null ? void 0 : H.avatar) ||
                                "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
                              alt: "avatar",
                              className:
                                "w-8 h-8 rounded-full object-cover border border-gray-200",
                            }),
                            e.jsx("span", {
                              className:
                                "absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#03CCD9] border border-white rounded-full",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[17px] font-medium text-black truncate",
                          children:
                            (H == null ? void 0 : H.name) ||
                            (s == null ? void 0 : s.name) ||
                            "用户",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                className: "flex items-center shrink-0",
                onClick: () => E(!0),
                "aria-label": "更多设置",
                children: e.jsx(jl, { size: 26, className: "text-black" }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 overflow-y-auto p-4 space-y-4",
            children: [
              Y.length === 0 &&
                e.jsxs("div", {
                  className: "text-center text-gray-400 text-sm mt-10",
                  children: ["开始和 ", s == null ? void 0 : s.name, " 聊天吧"],
                }),
              Y.map((re) => {
                var ge, J, G;
                if ((re == null ? void 0 : re.type) === "system")
                  return e.jsxs(
                    "div",
                    {
                      className:
                        "w-full flex justify-center items-center gap-2",
                      onTouchStart: () => je(re.id),
                      onTouchEnd: X,
                      onTouchMove: xe,
                      onMouseDown: () => je(re.id),
                      onMouseUp: X,
                      onMouseLeave: xe,
                      onClick: () => N && ye(re.id),
                      children: [
                        N &&
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${_.includes(re.id) ? "bg-[#fe2c55] border-[#fe2c55]" : "border-gray-300 bg-white"}`,
                            children:
                              _.includes(re.id) &&
                              e.jsx(On, {
                                size: 12,
                                className: "text-white",
                                strokeWidth: 3,
                              }),
                          }),
                        e.jsx("div", {
                          className:
                            "text-[12px] text-gray-400 px-3 py-1 rounded-full bg-transparent",
                          children: re.text,
                        }),
                      ],
                    },
                    re.id,
                  );
                const he = _.includes(re.id);
                return e.jsx(
                  "div",
                  {
                    className: `flex ${re.isMe ? "justify-end" : "justify-start"} items-end overflow-x-hidden ${N ? "pr-2" : ""}`,
                    onTouchStart: (we) => le(we, re.id),
                    onTouchMove: ie,
                    onTouchEnd: X,
                    onMouseDown: (we) => le(we, re.id),
                    onMouseMove: (we) => we.buttons === 1 && ie(we),
                    onMouseUp: X,
                    onMouseLeave: X,
                    onClick: () => N && ye(re.id),
                    children: e.jsxs("div", {
                      className: `flex space-x-2 ${re.isMe ? "w-full justify-end" : "w-full min-w-0"} items-end`,
                      children: [
                        N &&
                          !re.isMe &&
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mb-1 ${he ? "bg-[#fe2c55] border-[#fe2c55]" : "border-gray-300 bg-white"}`,
                            children:
                              he &&
                              e.jsx(On, {
                                size: 12,
                                className: "text-white",
                                strokeWidth: 3,
                              }),
                          }),
                        !re.isMe &&
                          !0 &&
                          e.jsx("img", {
                            src:
                              (H == null ? void 0 : H.avatar) ||
                              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
                            alt: "avatar",
                            className:
                              "w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0",
                          }),
                        e.jsx("div", {
                          className: `relative min-w-0 max-w-[72%] ${re.isMe ? "w-fit max-w-[72%] order-first mr-2 flex flex-col items-end" : "w-fit ml-2"}`,
                          children: e.jsxs("div", {
                            className: `relative min-w-0 ${(re.isMe, "w-fit max-w-full")}`,
                            children: [
                              e.jsx("div", {
                                className: `${re.type === "shared_video" ? "p-0 bg-transparent shadow-none rounded-none" : "text-[15px] leading-[1.7] break-words px-4 py-2.5 rounded-xl"} min-w-0 ${(re.isMe, "w-fit max-w-full")} ${re.type === "shared_video" ? "" : re.isMe ? "bg-[#03CCD9] text-white font-medium" : "bg-white text-black shadow-sm"}`,
                                children:
                                  re.type === "voice"
                                    ? e.jsx(lq, {
                                        duration: re.duration,
                                        text: re.text,
                                      })
                                    : re.type === "shared_video" &&
                                        re.sharedVideo
                                      ? e.jsx("div", {
                                          className: "w-[90px] max-w-[45vw]",
                                          children: e.jsx("div", {
                                            className:
                                              "rounded-2xl overflow-hidden shadow-sm cursor-pointer active:opacity-90",
                                            onClick: (we) => {
                                              var Q;
                                              (we.stopPropagation(),
                                                typeof a == "function" &&
                                                  (Q = re.sharedVideo) !=
                                                    null &&
                                                  Q.id &&
                                                  a(re.sharedVideo.id));
                                            },
                                            role: "button",
                                            title: "打开视频",
                                            children: e.jsxs("div", {
                                              className:
                                                "relative w-full aspect-[9/16] bg-gradient-to-b from-gray-800 to-black",
                                              children: [
                                                (ge = re.sharedVideo) != null &&
                                                ge.thumbnail
                                                  ? e.jsx("img", {
                                                      src: re.sharedVideo
                                                        .thumbnail,
                                                      alt: "",
                                                      className:
                                                        "absolute inset-0 w-full h-full object-cover",
                                                    })
                                                  : null,
                                                e.jsx("div", {
                                                  className:
                                                    "absolute inset-x-0 top-1/2 -translate-y-1/2 p-2",
                                                  children: e.jsxs("div", {
                                                    className:
                                                      "bg-black/40 backdrop-blur-[1px] rounded-lg px-2 py-1",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "text-white text-[10px] leading-snug line-clamp-2",
                                                        children: (() => {
                                                          var Q, ve, Ve, Ae, te;
                                                          const we =
                                                            ((ve =
                                                              (Q =
                                                                re.sharedVideo) ==
                                                              null
                                                                ? void 0
                                                                : Q.firstScene) ==
                                                            null
                                                              ? void 0
                                                              : ve.visual) ??
                                                            ((te =
                                                              (Ae =
                                                                (Ve =
                                                                  re.sharedVideo) ==
                                                                null
                                                                  ? void 0
                                                                  : Ve.scenes) ==
                                                              null
                                                                ? void 0
                                                                : Ae[0]) == null
                                                              ? void 0
                                                              : te.visual) ??
                                                            "";
                                                          return we &&
                                                            typeof we ==
                                                              "object"
                                                            ? we.zh ||
                                                                we.cn ||
                                                                we.translation ||
                                                                we.text ||
                                                                ""
                                                            : String(
                                                                we || "",
                                                              ).trim() ||
                                                                "（无画面描述）";
                                                        })(),
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-white/90 text-[10px] leading-snug line-clamp-1 mt-0.5",
                                                        children: (() => {
                                                          var Q, ve;
                                                          const we =
                                                            (ve =
                                                              (Q =
                                                                re.sharedVideo) ==
                                                              null
                                                                ? void 0
                                                                : Q.firstScene) ==
                                                            null
                                                              ? void 0
                                                              : ve.subtitle;
                                                          return we &&
                                                            typeof we ==
                                                              "object"
                                                            ? we.zh ||
                                                                we.cn ||
                                                                we.translation ||
                                                                we.text ||
                                                                ""
                                                            : String(
                                                                we || "",
                                                              ).trim();
                                                        })(),
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "absolute left-2 bottom-2",
                                                  children: e.jsx("div", {
                                                    className:
                                                      "bg-black/35 backdrop-blur-[1px] rounded-full px-2 py-0.5",
                                                    children: e.jsxs("div", {
                                                      className:
                                                        "text-white text-[10px] font-semibold truncate max-w-[72px]",
                                                      children: [
                                                        "@",
                                                        ((G =
                                                          (J =
                                                            re.sharedVideo) ==
                                                          null
                                                            ? void 0
                                                            : J.author) == null
                                                          ? void 0
                                                          : G.name) || "作者",
                                                      ],
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        })
                                      : e.jsxs(e.Fragment, {
                                          children: [
                                            K(re.text),
                                            !re.isMe &&
                                              re.translation &&
                                              v.has(re.id) &&
                                              e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "border-t border-dashed border-gray-300 mt-2 pt-2",
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "text-gray-800 font-semibold text-[14px] mt-1 leading-snug",
                                                    children: re.translation,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                              }),
                              !re.isMe &&
                                re.translation &&
                                !N &&
                                e.jsx("button", {
                                  type: "button",
                                  onClick: (we) => {
                                    (we.stopPropagation(), Z(re.id));
                                  },
                                  className: `absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-3 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border ${v.has(re.id) ? "text-gray-500 bg-gray-100 border-gray-200 hover:bg-gray-200" : "text-[#03CCD9] bg-[#03CCD9]/10 border-transparent hover:bg-[#03CCD9]/20"}`,
                                  title: v.has(re.id) ? "收起翻译" : "显示翻译",
                                  children: e.jsx(Pm, {
                                    size: 12,
                                    strokeWidth: 2,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        re.isMe &&
                          !0 &&
                          e.jsx("img", {
                            src:
                              (r == null ? void 0 : r.avatar) ||
                              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                            alt: "avatar",
                            className:
                              "w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0",
                          }),
                        N &&
                          re.isMe &&
                          e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mb-1 ${he ? "bg-[#fe2c55] border-[#fe2c55]" : "border-gray-300 bg-white"}`,
                            children:
                              he &&
                              e.jsx(On, {
                                size: 12,
                                className: "text-white",
                                strokeWidth: 3,
                              }),
                          }),
                      ],
                    }),
                  },
                  re.id,
                );
              }),
              ce,
              H &&
                (o == null ? void 0 : o[H.id]) &&
                e.jsxs("div", {
                  className: "flex justify-start items-start",
                  children: [
                    e.jsx("img", {
                      src:
                        (H == null ? void 0 : H.avatar) ||
                        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
                      alt: "avatar",
                      className:
                        "w-10 h-10 rounded-full object-cover border border-gray-200 flex-shrink-0",
                    }),
                    e.jsx("div", {
                      className: "max-w-[72%] ml-2",
                      children: e.jsx("div", {
                        className:
                          "px-3 rounded-xl w-fit bg-white text-black shadow-sm h-[40px] flex items-center",
                        children: e.jsxs("span", {
                          className:
                            "inline-flex items-center gap-1 leading-none",
                          children: [
                            e.jsx("span", {
                              className:
                                "dy-typing-dot w-1.5 h-1.5 bg-gray-500 rounded-full",
                            }),
                            e.jsx("span", {
                              className:
                                "dy-typing-dot w-1.5 h-1.5 bg-gray-500 rounded-full",
                            }),
                            e.jsx("span", {
                              className:
                                "dy-typing-dot w-1.5 h-1.5 bg-gray-500 rounded-full",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              e.jsx("div", { ref: L }),
            ],
          }),
          e.jsx("div", {
            className: "bg-[#f2f3f5] px-3 py-2 pb-6",
            children: N
              ? e.jsxs("div", {
                  className:
                    "bg-white rounded-xl px-3 py-2.5 flex items-center justify-between shadow-sm",
                  children: [
                    e.jsxs("span", {
                      className: "text-[14px] text-gray-600 font-medium",
                      children: ["已选 ", _.length, " 条"],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [
                        _.length === 1 &&
                          pe &&
                          e.jsx("button", {
                            type: "button",
                            onClick: oe,
                            className:
                              "p-2 rounded-lg text-gray-600 hover:bg-gray-100",
                            title: "编辑",
                            children: e.jsx(_c, { size: 20 }),
                          }),
                        e.jsx("button", {
                          type: "button",
                          onClick: R,
                          className:
                            "p-2 rounded-lg text-red-500 hover:bg-red-50",
                          title: "删除",
                          children: e.jsx(_n, { size: 20 }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (w(!1), A([]));
                          },
                          className:
                            "p-2 rounded-lg text-gray-400 hover:bg-gray-100",
                          title: "取消",
                          children: e.jsx(Ts, { size: 20 }),
                        }),
                      ],
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    null,
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-5 pb-2 bg-white rounded-xl px-2 py-2.5 shadow-sm",
                      children: [
                        k &&
                          e.jsx("button", {
                            type: "button",
                            onClick: ee,
                            className:
                              "mr-2 p-1.5 rounded-full text-gray-500 hover:bg-gray-100 shrink-0 flex items-center justify-center",
                            title: "取消编辑",
                            children: e.jsx(Ts, { size: 20 }),
                          }),
                        !k &&
                          !0 &&
                          e.jsx("button", {
                            type: "button",
                            className:
                              "mr-3 ml-1 cursor-pointer shrink-0 p-0 border-0 bg-transparent text-black active:opacity-70",
                            title: "快捷回复",
                            "aria-label": "快捷回复",
                            onClick: () => {
                              H != null &&
                                H.id &&
                                typeof f == "function" &&
                                f(H.id);
                            },
                            children: e.jsx(oq, {
                              size: 26,
                              className: "text-black",
                            }),
                          }),
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("textarea", {
                              ref: P,
                              value: h,
                              onChange: (re) => g(re.target.value),
                              onKeyDown: W,
                              onFocus: Te,
                              onClick: Te,
                              onInput: ue,
                              placeholder: k
                                ? "修改后发送"
                                : x
                                  ? "回复分享的视频…"
                                  : "发送消息",
                              rows: 1,
                              className:
                                "flex-1 bg-transparent text-black text-[16px] placeholder-gray-400 outline-none min-w-0 resize-none overflow-y-auto py-1 leading-6 max-h-[4.5rem]",
                              style: { minHeight: O + "px" },
                            }),
                            e.jsx("div", {
                              className: "flex items-center shrink-0 mr-0.5",
                              children: h.trim()
                                ? e.jsx("button", {
                                    type: "button",
                                    onClick: ke,
                                    className:
                                      "flex items-center justify-center w-9 h-9 rounded-full bg-[#03CCD9] shadow-[0_2px_8px_rgba(3,204,217,0.45)] active:scale-95 transition-transform",
                                    "aria-label": "发送",
                                    children: e.jsx(ri, {
                                      size: 17,
                                      className: "text-white",
                                      strokeWidth: 2.4,
                                    }),
                                  })
                                : e.jsx(Y1, {
                                    size: 26,
                                    className: "text-black",
                                    strokeWidth: 1.5,
                                  }),
                            }),