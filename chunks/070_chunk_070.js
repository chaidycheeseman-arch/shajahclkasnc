                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "border-t border-[var(--e-line)] px-6 pt-4 pb-6",
                      children: [
                        e.jsx("h4", {
                          className:
                            "text-[10px] text-[var(--e-dim)] font-mono uppercase mb-3",
                          children: "可选武装 (档案库)",
                        }),
                        e.jsxs("div", {
                          className: "grid grid-cols-4 gap-2 pb-2",
                          children: [
                            t
                              .filter((Be) => Be.status === "identified")
                              .map((Be) => {
                                const Ke = k.find((Nt) => Nt.id === Be.id);
                                return e.jsxs(
                                  "button",
                                  {
                                    onClick: () => P(Be),
                                    className: `aspect-square border flex flex-col items-center justify-center transition-all relative ${Ke ? "border-[var(--e-cyan)] opacity-50 bg-[var(--e-cyan)]/10" : "border-[var(--e-line)] bg-[var(--e-black)] hover:border-[var(--e-line-accent)]"}`,
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-xl filter grayscale hover:grayscale-0",
                                        children: Be.icon,
                                      }),
                                      Be.passive_skill &&
                                        e.jsx("div", {
                                          className:
                                            "absolute bottom-1 w-full text-center text-[7px] text-[var(--e-cyan)] scale-75 whitespace-nowrap overflow-hidden",
                                          children: Be.passive_skill,
                                        }),
                                    ],
                                  },
                                  Be.id,
                                );
                              }),
                            t.filter((Be) => Be.status === "identified")
                              .length === 0 &&
                              e.jsx("div", {
                                className:
                                  "col-span-4 text-center text-[var(--e-muted)] text-xs py-4 font-mono",
                                children: "档案库为空",
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "border-t border-[var(--e-line)] px-6 pb-10 pt-5",
                      children: e.jsxs("div", {
                        className:
                          "overflow-hidden rounded-sm border border-[var(--e-line-warm)] bg-gradient-to-br from-[var(--e-grad-from)] via-[var(--e-canvas)] to-[var(--e-grad-end)] shadow-[inset_0_1px_0_rgba(0,255,255,0.04)]",
                        children: [
                          e.jsxs("div", {
                            className:
                              "border-b border-[var(--e-line-inner)] px-3 pb-3 pt-3",
                            children: [
                              e.jsxs("div", {
                                className: "mb-2.5 flex items-center gap-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--e-cyan)]/75",
                                    children: "基调",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "h-px min-w-0 flex-1 bg-gradient-to-r from-[#00FFFF]/25 to-transparent",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: D0.map((Be) => {
                                  const Ke = S === Be.id;
                                  return e.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => j(Be.id),
                                      title: Be.dmHint,
                                      className: `border px-2 py-1 text-[9px] font-mono uppercase tracking-wide transition-all ${Ke ? "border-[#00FFFF]/55 bg-[var(--e-cyan)]/[0.09] text-[var(--e-cyan)] shadow-[inset_0_0_16px_rgba(0,255,255,0.06)]" : "border-[var(--e-line-warm)] bg-[var(--e-raised)] text-[var(--e-muted)] hover:border-[var(--e-line-accent)] hover:text-[var(--e-hover-text)]"}`,
                                      children: Be.label,
                                    },
                                    Be.id,
                                  );
                                }),
                              }),
                              e.jsx("input", {
                                type: "text",
                                value: T,
                                onChange: (Be) => I(Be.target.value),
                                placeholder: "补充一句（可选）",
                                maxLength: 600,
                                className:
                                  "mt-2.5 w-full border border-[var(--e-line-warm)] bg-[var(--e-overlay-70)] px-2.5 py-2 font-mono text-[10px] text-[var(--e-primary)] placeholder-[var(--e-placeholder)] transition-colors focus:border-[var(--e-cyan)]/40 focus:outline-none",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "border-b border-[var(--e-line-inner)] px-3 pb-3 pt-3",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "mb-2 flex items-center justify-between gap-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--e-mint)]/80",
                                        children: "同行",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "h-px w-8 bg-gradient-to-r from-[#00FF9D]/30 to-transparent",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "font-mono text-[9px] tabular-nums text-[var(--e-mid)]",
                                    children: [M.length, "/3"],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "max-h-32 overflow-y-auto overscroll-y-contain scrollbar-hide border border-[var(--e-line)] bg-[var(--e-overlay-50)] p-2",
                                children:
                                  Array.isArray(b) && b.length > 0
                                    ? e.jsx("div", {
                                        className: "flex flex-wrap gap-1.5",
                                        children: b.map((Be) => {
                                          if (!(Be != null && Be.id))
                                            return null;
                                          const Ke = String(Be.id),
                                            Nt = M.includes(Ke),
                                            bt =
                                              (
                                                Be.name ||
                                                Be.nickname ||
                                                "未命名"
                                              ).trim() || "未命名";
                                          return e.jsxs(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () => {
                                                Nt
                                                  ? E((ns) =>
                                                      ns.filter(
                                                        (Ge) => Ge !== Ke,
                                                      ),
                                                    )
                                                  : M.length < 3 &&
                                                    E((ns) => [...ns, Ke]);
                                              },
                                              className: `max-w-[148px] truncate border px-2 py-1 text-[9px] font-mono transition-all ${Nt ? "border-[var(--e-mint)]/50 bg-[var(--e-mint)]/[0.08] text-[var(--e-mint)]" : "border-[var(--e-line-warm)] bg-[var(--e-raised)] text-[var(--e-muted)] hover:border-[var(--e-line-accent)] hover:text-[var(--e-hover-text)]"}`,
                                              title: bt,
                                              children: [Nt ? "· " : "", bt],
                                            },
                                            Ke,
                                          );
                                        }),
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "py-4 text-center font-mono text-[9px] text-[var(--e-mid)]",
                                        children: "无联系人",
                                      }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "space-y-2 border-t border-[var(--e-line-inner)] px-3 pb-2 pt-3",
                            children: e.jsxs("button", {
                              type: "button",
                              disabled: !M.length,
                              onClick: () => ue(!0),
                              className: `flex w-full items-center justify-between border px-3 py-2.5 text-left font-mono text-[10px] transition-all ${M.length ? "border-[#FFD54A]/35 bg-[#FFD54A]/[0.06] text-[#FFD54A] hover:border-[#FFD54A]/55 hover:bg-[#FFD54A]/10" : "cursor-not-allowed border-[var(--e-line-warm)] text-[var(--e-dim)]"}`,
                              children: [
                                e.jsx("span", {
                                  className: "uppercase tracking-wider",
                                  children: "世界书",
                                }),
                                e.jsxs("span", {
                                  className:
                                    "text-[9px] tabular-nums opacity-90",
                                  children: [
                                    L.filter((Be) => F[Be.key] !== !1).length,
                                    L.length ? ` / ${L.length}` : "",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "space-y-2 border-t border-[var(--e-line-inner)] px-3 pb-3 pt-2",
                            children: [
                              e.jsxs("div", {
                                className: "mb-1 flex items-center gap-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-mono text-[9px] uppercase tracking-[0.35em] text-[var(--e-soft)]/90",
                                    children: "本人人设",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "h-px min-w-0 flex-1 bg-gradient-to-r from-[var(--e-line-accent)]/18 to-transparent",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "px-0.5 pb-1 font-mono text-[8px] leading-relaxed text-[var(--e-mid)]",
                                children:
                                  "可选聊天「我的」页已保存的人设预设；不选则用「我的」里当前昵称与本人设定。",
                              }),
                              e.jsxs("div", {
                                className:
                                  "max-h-28 overflow-y-auto overscroll-y-contain scrollbar-hide border border-[var(--e-line)] bg-[var(--e-overlay-50)] p-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => he(null),
                                        className: `max-w-full truncate border px-2 py-1 text-[9px] font-mono transition-all ${re == null ? "border-[var(--e-cyan)]/50 bg-[var(--e-cyan)]/[0.08] text-[var(--e-cyan)]" : "border-[var(--e-line-warm)] bg-[var(--e-raised)] text-[var(--e-muted)] hover:border-[var(--e-line-accent)] hover:text-[var(--e-hover-text)]"}`,
                                        title:
                                          "使用聊天「我的」页当前保存的全局人设",
                                        children: "默认（我的·当前）",
                                      }),
                                      (w || []).map((Be) => {
                                        if (!(Be != null && Be.id)) return null;
                                        const Ke = String(Be.id),
                                          Nt = re != null && String(re) === Ke,
                                          bt =
                                            String(
                                              Be.name || Be.userName || "预设",
                                            ).trim() || "预设";
                                        return e.jsxs(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => he(Ke),
                                            className: `max-w-[160px] truncate border px-2 py-1 text-[9px] font-mono transition-all ${Nt ? "border-[var(--e-cyan)]/50 bg-[var(--e-cyan)]/[0.08] text-[var(--e-cyan)]" : "border-[var(--e-line-warm)] bg-[var(--e-raised)] text-[var(--e-muted)] hover:border-[var(--e-line-accent)] hover:text-[var(--e-hover-text)]"}`,
                                            title: bt,
                                            children: [Nt ? "· " : "", bt],
                                          },
                                          Ke,
                                        );
                                      }),
                                    ],
                                  }),
                                  (!w || w.length === 0) &&
                                    e.jsx("p", {
                                      className:
                                        "py-2 text-center font-mono text-[8px] text-[var(--e-mid)]",
                                      children:
                                        "暂无已保存预设。可在聊天「我的」→ Presets 中新增。",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "space-y-2 border-t border-[var(--e-line-inner)] px-3 pb-3 pt-2",
                            children: [
                              Z &&
                                e.jsxs("button", {
                                  onClick: Xt,
                                  className:
                                    "flex w-full items-center justify-center gap-2 border border-[var(--e-cyan)] bg-[var(--e-surface)] py-3 font-mono text-xs font-bold uppercase tracking-widest text-[var(--e-cyan)] transition-all hover:bg-[var(--e-cyan)] hover:text-black",
                                  children: [
                                    e.jsx(xr, { size: 12 }),
                                    " 继续上次远征",
                                  ],
                                }),
                              e.jsx("button", {
                                onClick: sn,
                                disabled: k.length === 0 || (z && s < 50),
                                className: `w-full py-3.5 font-mono text-sm font-bold uppercase tracking-widest border transition-all ${k.length > 0 && !(z && s < 50) ? "bg-[var(--e-cyan)] text-black border-[#00FFFF] hover:bg-white hover:border-[var(--e-contrast)]" : "cursor-not-allowed border-[var(--e-line-strong)] bg-transparent text-[#333]"}`,
                                children:
                                  k.length === 0
                                    ? "需选择至少1个装备"
                                    : z && s < 50
                                      ? "PTS不足"
                                      : "启动意识潜入",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx(Os, {
                  children:
                    q &&
                    e.jsx(We.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 z-[70] flex items-center justify-center bg-[var(--e-overlay-90)] backdrop-blur-sm px-8",
                      children: e.jsxs("div", {
                        className:
                          "w-full bg-[var(--e-surface)] border border-[#FF3B30] p-6 text-center",
                        children: [
                          e.jsx("div", {
                            className: "text-[#FF3B30] mb-2 animate-pulse",
                            children: e.jsx(Wr, {
                              size: 32,
                              className: "mx-auto",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "text-[var(--e-contrast)] font-bold mb-2",
                            children: "检测到未完成的信号",
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-[var(--e-soft)] mb-6",
                            children: [
                              "系统检测到上一次远征的残留数据。",
                              e.jsx("br", {}),
                              "启动新的潜入将覆盖原有进度。",
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("button", {
                                onClick: () => V(!1),
                                className:
                                  "flex-1 py-2 border border-[var(--e-line-strong)] text-[var(--e-soft)] text-xs font-mono hover:bg-[var(--e-hover)]",
                                children: "取消",
                              }),
                              e.jsx("button", {
                                onClick: () => {
                                  (Xs(), V(!1));
                                },
                                className:
                                  "flex-1 py-2 bg-[#FF3B30] text-black text-xs font-bold font-mono hover:bg-red-600",
                                children: "覆盖并开始",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                }),
                e.jsx(Os, {
                  children:
                    $ &&
                    e.jsx(We.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 z-[60] flex items-center justify-center bg-[var(--e-overlay-80)] backdrop-blur-sm px-6",
                      onClick: () => P(null),
                      children: e.jsxs("div", {
                        className:
                          "w-full max-w-sm bg-[var(--e-surface)] border border-[var(--e-line-strong)] overflow-hidden",
                        onClick: (Be) => Be.stopPropagation(),
                        children: [
                          e.jsxs("div", {
                            className:
                              "p-4 border-b border-[var(--e-line)] flex items-center gap-4",
                            children: [
                              e.jsx("span", {
                                className: "text-4xl",
                                children: $.icon,
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-[var(--e-contrast)] font-bold",
                                    children: $.name,
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "text-[10px] text-[var(--e-muted)]",
                                    children: [$.rarity, " 级"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-4 bg-[var(--e-raised)] text-[10px] font-mono border-b border-[var(--e-line)]",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "grid grid-cols-2 gap-2 text-[var(--e-body)]",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [
                                      e.jsx("span", { children: "算力:" }),
                                      " ",
                                      e.jsx("span", {
                                        className: "text-[var(--e-cyan)]",
                                        children:
                                          ((Jt = $.attributes) == null
                                            ? void 0
                                            : Jt.computation) || 0,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [
                                      e.jsx("span", { children: "武力:" }),
                                      " ",
                                      e.jsx("span", {
                                        className: "text-[#FF3B30]",
                                        children:
                                          ((Vt = $.attributes) == null
                                            ? void 0
                                            : Vt.force) || 0,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [
                                      e.jsx("span", { children: "感知:" }),
                                      " ",
                                      e.jsx("span", {
                                        className: "text-[var(--e-mint)]",
                                        children:
                                          ((qt = $.attributes) == null
                                            ? void 0
                                            : qt.perception) || 0,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex justify-between",
                                    children: [
                                      e.jsx("span", { children: "抗压:" }),
                                      " ",
                                      e.jsx("span", {
                                        className: "text-[var(--e-primary)]",
                                        children:
                                          ((Lt = $.attributes) == null
                                            ? void 0
                                            : Lt.stress_resist) || 0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              $.passive_skill &&
                                e.jsxs("div", {
                                  className: "mt-2 text-[var(--e-cyan)]",
                                  children: ["被动技能: ", $.passive_skill],
                                }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "p-4 max-h-[150px] overflow-y-auto text-xs text-[var(--e-body)] leading-relaxed",
                            children: $.description,
                          }),
                          e.jsx("div", {
                            className:
                              "p-4 bg-[var(--e-black)] border-t border-[var(--e-line)]",
                            children: k.find((Be) => Be.id === $.id)
                              ? e.jsx("button", {
                                  onClick: () => Bs($),
                                  className:
                                    "w-full py-2 border border-[#FF3B30] text-[#FF3B30] font-mono text-xs uppercase hover:bg-[#FF3B30] hover:text-black",
                                  children: "取消挂载 (Unequip)",
                                })
                              : e.jsx("button", {
                                  onClick: () => Bs($),
                                  disabled: k.length >= 3,
                                  className: `w-full py-2 font-mono text-xs uppercase border ${k.length >= 3 ? "border-[var(--e-line-strong)] text-[var(--e-dim)] cursor-not-allowed" : "border-[var(--e-cyan)] text-[var(--e-cyan)] hover:bg-[var(--e-cyan)] hover:text-black"}`,
                                  children:
                                    k.length >= 3 ? "槽位已满" : "挂载 (Equip)",
                                }),
                          }),
                        ],
                      }),
                    }),
                }),
                st,
              ],
            }),
            $t,
            Ft,
          ],
        })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              className:
                "absolute inset-0 z-[100] flex min-h-0 flex-col overflow-hidden bg-[var(--e-page)]",
              children: [
                h !== "day" &&
                  e.jsxs("div", {
                    className:
                      "absolute inset-0 pointer-events-none overflow-hidden transition-colors duration-1000",
                    style: {
                      backgroundColor:
                        (He == null ? void 0 : He.atmosphere) === "hostile"
                          ? "rgba(50,0,0,0.25)"
                          : (He == null ? void 0 : He.atmosphere) === "eerie"
                            ? "rgba(0,50,50,0.2)"
                            : (He == null ? void 0 : He.weather) === "dark"
                              ? "rgba(0,0,0,0.9)"
                              : "transparent",
                    },
                    children: [
                      e.jsx(We.div, {
                        animate: {
                          opacity: [0.3, 0.5, 0.3],
                          scale: [1, 1.1, 1],
                        },
                        transition: {
                          duration: 10,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        className:
                          "absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08)_0%,transparent_50%)]",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]",
                      }),
                      (He == null ? void 0 : He.weather) === "rain" &&
                        e.jsx("div", {
                          className:
                            "absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.2)_50%)] bg-[length:100%_4px] animate-[slide_1s_linear_infinite]",
                        }),
                    ],
                  }),
                e.jsxs("div", {
                  className: `px-6 py-4 pt-14 border-b border-[var(--e-line)] backdrop-blur-md relative z-20 ${h === "day" ? "bg-white/95" : "bg-[var(--e-surface)]/90"}`,
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-start mb-2",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3 max-w-[60%]",
                          children: [
                            e.jsx("button", {
                              onClick: ln,
                              className:
                                "text-[var(--e-muted)] hover:text-[var(--e-contrast)] transition-colors",
                              children: e.jsx(Xr, { size: 14 }),
                            }),
                            e.jsx("h2", {
                              className:
                                "text-[var(--e-cyan)] font-mono text-sm truncate",
                              children:
                                (Fe == null ? void 0 : Fe.background) ||
                                z ||
                                "正在搜寻时间线...",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-wrap justify-end gap-2 max-w-[45%]",
                          children: [
                            Z &&
                              e.jsx("button", {
                                onClick: () => le(!0),
                                className:
                                  "text-[10px] whitespace-nowrap text-[var(--e-muted)] hover:text-[#FF3B30] border border-[var(--e-line-strong)] hover:border-[#FF3B30] px-2 py-0.5 transition-colors uppercase font-mono",
                                children: "读取存档",
                              }),
                            e.jsx("button", {
                              onClick: It,
                              className:
                                "text-[10px] whitespace-nowrap text-[var(--e-muted)] hover:text-[var(--e-cyan)] border border-[var(--e-line-strong)] hover:border-[var(--e-cyan)] px-2 py-0.5 transition-colors uppercase font-mono",
                              children: "保存进度",
                            }),
                          ],
                        }),
                      ],
                    }),
                    ((Fe == null ? void 0 : Fe.expeditionTone) ||
                      ((Qt = Fe == null ? void 0 : Fe.expeditionCompanions) ==
                      null
                        ? void 0
                        : Qt.length) > 0) &&
                      e.jsxs("div", {
                        className:
                          "mb-2 flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-0.5 border-b border-[var(--e-line)]/80 pb-2 text-[9px] font-mono",
                        children: [
                          Fe != null && Fe.expeditionTone
                            ? e.jsxs("div", {
                                className:
                                  "min-w-0 max-w-[50%] flex-1 truncate text-[var(--e-soft)]",
                                title: Fe.expeditionTone.toneCustom
                                  ? `${Fe.expeditionTone.tonePresetLabel} — ${Fe.expeditionTone.toneCustom}`
                                  : Fe.expeditionTone.tonePresetLabel,
                                children: [
                                  e.jsx("span", {
                                    className: "text-[var(--e-mid)]",
                                    children: "基调",
                                  }),
                                  " ",
                                  e.jsx("span", {
                                    className: "text-[#aaa]",
                                    children: Fe.expeditionTone.tonePresetLabel,
                                  }),
                                  Fe.expeditionTone.toneCustom
                                    ? ` · ${Fe.expeditionTone.toneCustom.slice(0, 28)}${Fe.expeditionTone.toneCustom.length > 28 ? "…" : ""}`
                                    : "",
                                ],
                              })
                            : e.jsx("span", { className: "min-w-0 flex-1" }),
                          ((js =
                            Fe == null ? void 0 : Fe.expeditionCompanions) ==
                          null
                            ? void 0
                            : js.length) > 0
                            ? e.jsxs("div", {
                                className: `min-w-0 max-w-[50%] flex-1 truncate text-[var(--e-mint)]/85 ${Fe != null && Fe.expeditionTone ? "border-l border-[var(--e-line-strong)] pl-3" : ""}`,
                                title: Fe.expeditionCompanions
                                  .map((Be) => Be.name)
                                  .join("、"),
                                children: [
                                  e.jsx("span", {
                                    className: "text-[var(--e-mid)]",
                                    children: "同行",
                                  }),
                                  " ",
                                  Fe.expeditionCompanions
                                    .map((Be) => Be.name)
                                    .join(" · "),
                                ],
                              })
                            : null,
                        ],
                      }),
                    ((Fe == null ? void 0 : Fe.quest) ||
                      (ht == null ? void 0 : ht.situation_summary)) &&
                      e.jsxs("div", {
                        className:
                          "mb-1.5 overflow-hidden rounded-sm border border-[#FF9500]/35 bg-[#FF9500]/[0.06]",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => ve((Be) => !Be),
                            className:
                              "flex w-full items-start gap-2 px-2 py-1.5 text-left transition hover:bg-[#FF9500]/10",
                            "aria-expanded": !Q,
                            children: [
                              e.jsx(aa, {
                                className: `mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF9500]/80 transition-transform ${Q ? "-rotate-90" : "rotate-0"}`,
                                strokeWidth: 2,
                              }),
                              e.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[8px] font-mono uppercase tracking-[0.2em] text-[#FF9500]/90",
                                    children: "副本主线",
                                  }),
                                  (cs = Fe == null ? void 0 : Fe.quest) !=
                                    null && cs.headline
                                    ? e.jsx("div", {
                                        className:
                                          "truncate text-[10px] font-mono font-bold leading-snug text-[var(--e-primary)]",
                                        children: Fe.quest.headline,
                                      })
                                    : null,
                                  Q && ht != null && ht.situation_summary
                                    ? e.jsxs("div", {
                                        className:
                                          "mt-0.5 line-clamp-2 text-[9px] leading-snug text-[#aaa]",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-[var(--e-cyan)]/60",
                                            children: "当机 ",
                                          }),
                                          ht.situation_summary,
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          }),
                          !Q &&
                            e.jsxs("div", {
                              className:
                                "space-y-2 border-t border-[var(--e-line-strong)]/80 px-2 py-2 text-[9px] font-mono leading-relaxed",
                              children: [
                                Fe != null && Fe.quest
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("p", {
                                          className: "text-[#bbb]",
                                          children: Fe.quest.objective,
                                        }),
                                        Fe.quest.stakes_if_fail
                                          ? e.jsxs("p", {
                                              className: "text-[#FF9500]/80",
                                              children: [
                                                "失败代价：",
                                                Fe.quest.stakes_if_fail,
                                              ],
                                            })
                                          : null,
                                        Fe.quest.phase_note
                                          ? e.jsxs("p", {
                                              className: "text-[var(--e-soft)]",
                                              children: [
                                                "当前阶段：",
                                                Fe.quest.phase_note,
                                              ],
                                            })
                                          : null,
                                      ],
                                    })
                                  : null,
                                ht != null && ht.situation_summary
                                  ? e.jsxs("div", {
                                      className:
                                        Fe != null && Fe.quest
                                          ? "border-t border-[var(--e-line)] pt-2"
                                          : "",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "mb-1 text-[8px] font-mono uppercase tracking-wider text-[var(--e-cyan)]/70",
                                          children: "当机",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "whitespace-pre-wrap text-[#aaa]",
                                          children: ht.situation_summary,
                                        }),
                                      ],
                                    })
                                  : null,
                                Fe != null && Fe.quest
                                  ? e.jsx("button", {
                                      type: "button",
                                      onClick: () => J(!0),
                                      className:
                                        "w-full border border-[#FF9500]/40 py-1.5 text-[9px] uppercase tracking-wider text-[#FF9500] transition hover:bg-[#FF9500]/15",
                                      children: "完整简报（弹窗）",
                                    })
                                  : null,
                              ],
                            }),
                        ],
                      }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-4 text-[10px] text-[var(--e-muted)] font-mono uppercase mb-3 min-h-5",
                      children: [
                        e.jsxs("span", {
                          children: ["UPLINK: ", r ? "BUSY" : "OK"],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-1.5 pl-4 border-l border-[var(--e-line-strong)] min-w-0 flex-1 max-w-[min(100%,220px)] sm:max-w-[280px]",
                          children: [
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => xe(!0),
                              className:
                                "flex min-w-0 flex-1 items-center gap-2 text-left select-none group/bgm",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex items-end gap-0.5 h-2 shrink-0",
                                  children: [...Array(3)].map((Be, Ke) =>
                                    e.jsx(
                                      We.div,
                                      {
                                        animate: f
                                          ? { height: [2, 8, 2] }
                                          : { height: 2 },
                                        transition: {
                                          repeat: 1 / 0,
                                          duration: 0.5,
                                          delay: Ke * 0.1,
                                        },
                                        className: `w-0.5 ${f ? "bg-[var(--e-cyan)]" : "bg-[#666]"}`,
                                      },
                                      Ke,
                                    ),
                                  ),
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0 flex-1 overflow-hidden",
                                  children: [
                                    e.jsx("div", {
                                      className: `text-[9px] normal-case tracking-tight truncate ${u ? "text-[var(--e-cyan)]/90" : "text-[var(--e-mid)] group-hover/bgm:text-[var(--e-soft)]"}`,
                                      children: u
                                        ? u.title
                                        : c
                                          ? "已绑定 · 等待 AI 选曲"
                                          : "未绑定歌单 · 点击绑定",
                                    }),
                                    u != null && u.artist
                                      ? e.jsx("div", {
                                          className:
                                            "text-[8px] normal-case text-[var(--e-mid)] truncate",
                                          children: u.artist,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }),
                            u
                              ? e.jsx("button", {
                                  type: "button",
                                  onClick: (Be) => {
                                    (Be.stopPropagation(), p());
                                  },
                                  className:
                                    "shrink-0 rounded border border-[var(--e-line-strong)] px-2 py-0.5 text-[9px] font-mono uppercase text-[var(--e-soft)] transition-colors hover:border-[var(--e-cyan)]/40 hover:text-[var(--e-cyan)]",
                                  children: f ? "暂停" : "播放",
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center justify-between gap-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-[9px] font-mono mb-1 uppercase",
                              children: [
                                e.jsx("span", {
                                  className:
                                    ut > 50
                                      ? "text-[var(--e-mint)]"
                                      : "text-[#FF3B30]",
                                  children: "Sanity",
                                }),
                                e.jsxs("span", {
                                  className: "text-[var(--e-primary)]",
                                  children: [ut, "%"],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "h-1 bg-[var(--e-hover)] w-full overflow-hidden",
                              children: e.jsx("div", {
                                className: `h-full transition-all duration-500 ${ut > 50 ? "bg-[var(--e-mint)]" : "bg-[#FF3B30]"}`,
                                style: { width: `${ut}%` },
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-[9px] font-mono mb-1 uppercase",
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "text-[#FF3B30] flex items-center gap-1",
                                  children: [
                                    "Tension ",
                                    e.jsx(Wr, {
                                      size: 8,
                                      className: Ee > 70 ? "animate-pulse" : "",
                                    }),
                                  ],
                                }),
                                e.jsxs("span", {
                                  className: "text-[var(--e-primary)]",
                                  children: [Ee, "%"],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "h-1 bg-[var(--e-hover)] w-full overflow-hidden",
                              children: e.jsx("div", {
                                className:
                                  "h-full bg-[#FF3B30] transition-all duration-500",
                                style: { width: `${Ee}%` },
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Ce.length > 0 &&
                      e.jsx("div", {
                        className:
                          "flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1",
                        children: Ce.map((Be, Ke) =>
                          e.jsxs(
                            We.div,
                            {
                              initial: { opacity: 0, x: -10 },
                              animate: { opacity: 1, x: 0 },
                              className: `px-2 py-0.5 text-[9px] font-mono border backdrop-blur-sm flex items-center gap-1 shrink-0 ${Be.type === "buff" ? "text-[var(--e-mint)] border-[var(--e-mint)]/30 bg-[var(--e-mint)]/5" : "text-[#FF3B30] border-[#FF3B30]/30 bg-[#FF3B30]/5"}`,
                              children: [
                                e.jsx("span", {
                                  className: "uppercase tracking-widest",
                                  children: Be.name,
                                }),
                                e.jsxs("span", {
                                  className: "opacity-50 text-[8px]",
                                  children: ["T-", Be.duration],
                                }),
                              ],
                            },
                            Ke,
                          ),
                        ),
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative z-10 min-h-0 flex-1 overflow-y-auto px-6 py-6 scrollbar-hide",
                  children: [
                    tt.map((Be, Ke) => {
                      if (Be.type === "node")
                        return e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            className: "border-l-2 border-[#00FFFF]/30 pl-4",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "text-[10px] text-[var(--e-cyan)] font-mono mb-2",
                                children: ["[", Be.data.title, "]"],
                              }),
                              Array.isArray(Be.data.scene_npcs) &&
                              Be.data.scene_npcs.length > 0
                                ? e.jsx("div", {
                                    className: "mb-2 flex flex-wrap gap-1.5",
                                    children: Be.data.scene_npcs.map((Nt) => {
                                      const bt = Nt.call_name || Nt.id,
                                        ns = z4(Nt.role_tag);
                                      return e.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () =>
                                            we({
                                              npc: Nt,
                                              nodeTitle: Be.data.title || "",
                                            }),
                                          className: `max-w-full cursor-pointer rounded border px-2 py-1 text-left text-[9px] font-mono leading-snug transition ${ns ? "border-[#FF3B30]/45 bg-[#FF3B30]/[0.07] text-[var(--e-soft)] hover:border-[#FF3B30]/65 hover:bg-[#FF3B30]/[0.11]" : "border-[var(--e-line-strong)]/90 bg-[var(--e-overlay-40)] text-[var(--e-soft)] hover:border-[var(--e-cyan)]/55 hover:bg-[var(--e-cyan)]/[0.08]"}`,
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-[var(--e-cyan)]/85",
                                              children: bt,
                                            }),
                                            Nt.role_tag
                                              ? e.jsxs("span", {
                                                  className:
                                                    "text-[var(--e-mid)]",
                                                  children: [
                                                    " · ",
                                                    Nt.role_tag,
                                                  ],
                                                })
                                              : null,
                                            Nt.stance
                                              ? e.jsxs("span", {
                                                  className:
                                                    "text-[var(--e-mid)]/80",
                                                  children: [" · ", Nt.stance],
                                                })
                                              : null,
                                          ],
                                        },
                                        String(Nt.id || `${Ke}-${bt}`),
                                      );
                                    }),
                                  })
                                : null,
                              e.jsx(dl, {
                                text: Be.data.description,
                                className:
                                  "text-sm text-[var(--e-primary)] font-serif leading-relaxed mb-2",
                              }),
                            ],
                          },
                          Ke,
                        );
                      if (Be.type === "choice")
                        return e.jsx(
                          We.div,
                          {
                            initial: { opacity: 0, x: 20 },
                            animate: { opacity: 1, x: 0 },
                            className: "flex justify-end",
                            children: e.jsxs("div", {
                              className:
                                "bg-[var(--e-cyan)]/10 border border-[#00FFFF]/30 px-4 py-2 text-xs text-[var(--e-cyan)] font-mono inline-block",
                              children: [">", " ", Be.text],
                            }),
                          },
                          Ke,
                        );
                      if (Be.type === "resolution") {
                        const Nt = Be.data;
                        return e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            className: "space-y-4",
                            children: [
                              e.jsx(dl, {
                                text: Nt.description,
                                className:
                                  "text-sm text-[var(--e-primary)] font-serif leading-relaxed italic border-l-2 border-[#666] pl-4",
                              }),
                              Nt.attribute_check &&
                                e.jsxs("div", {
                                  className:
                                    "p-3 bg-[var(--e-overlay-50)] border border-[var(--e-line-strong)] inline-block font-mono text-xs w-full",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "text-[var(--e-muted)] mb-2 uppercase tracking-widest",
                                      children: [
                                        "System Check: ",
                                        Nt.attribute_check.attribute,
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: [
                                        e.jsxs("span", {
                                          className: "flex gap-4",
                                          children: [
                                            e.jsxs("span", {
                                              children: [
                                                "Target: ",
                                                Nt.attribute_check.target,
                                              ],
                                            }),
                                            e.jsxs("span", {
                                              children: [
                                                "Roll:",
                                                " ",
                                                e.jsx("span", {
                                                  className: Nt.attribute_check
                                                    .is_success
                                                    ? "text-[var(--e-mint)]"
                                                    : "text-[#FF3B30]",
                                                  children:
                                                    Nt.attribute_check.roll,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("span", {
                                          className: `px-2 py-0.5 border ${Nt.attribute_check.is_success ? "border-[var(--e-mint)] text-[var(--e-mint)]" : "border-[#FF3B30] text-[#FF3B30]"}`,
                                          children: Nt.attribute_check
                                            .is_success
                                            ? "SUCCESS"
                                            : "FAILED",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              Nt.discoverable &&
                                e.jsxs("div", {
                                  onClick: () => gt(Nt.discoverable),
                                  className:
                                    "flex items-center gap-3 bg-[#FFD700]/5 border border-[#FFD700]/20 p-2 cursor-pointer hover:bg-[#FFD700]/10 transition-colors",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-8 h-8 flex items-center justify-center text-[#FFD700]",
                                      children:
                                        Nt.discoverable.type === "intel"
                                          ? e.jsx(Gl, { size: 14 })
                                          : e.jsx(Ko, { size: 14 }),
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "text-[10px] text-[#FFD700] font-mono uppercase tracking-widest",
                                          children: [
                                            "New ",
                                            Nt.discoverable.type,
                                            " Found",
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "text-sm font-bold text-[var(--e-contrast)]",
                                          children: Nt.discoverable.name,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              Nt.health_change !== 0 &&
                                e.jsxs("div", {
                                  className: `text-[10px] font-mono ${Nt.health_change > 0 ? "text-[var(--e-mint)]" : "text-[#FF3B30]"}`,
                                  children: [
                                    "理智波动: ",
                                    Nt.health_change > 0 ? "+" : "",
                                    Nt.health_change,
                                  ],
                                }),
                            ],
                          },
                          Ke,
                        );
                      }
                      return Be.type === "error"
                        ? e.jsx(
                            "div",
                            {
                              className: "text-[#FF3B30] text-xs font-mono",
                              children: Be.text,
                            },
                            Ke,
                          )
                        : null;
                    }),
                    r &&
                      e.jsxs("div", {
                        className:
                          "text-[var(--e-cyan)] text-xs font-mono animate-pulse flex items-center gap-2 py-4",
                        children: [
                          e.jsx(Wr, { size: 14 }),
                          " 正在推演时空分支走向...",
                        ],
                      }),
                    ft &&
                      Oe &&
                      e.jsxs(We.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.5 },
                        className:
                          "mt-8 pt-8 border-t border-[var(--e-line-strong)]",
                        children: [
                          e.jsxs("div", {
                            className: "text-center mb-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-xs font-mono text-[var(--e-muted)] mb-2",
                                children: "=== 远征结算 ===",
                              }),
                              e.jsx("div", {
                                className: `text-lg font-bold ${Oe.is_success ? "text-[var(--e-mint)]" : "text-[#FF3B30]"}`,
                                children: Oe.is_success
                                  ? "MISSION ACCOMPLISHED"
                                  : "MISSION FAILED",
                              }),
                              e.jsxs("div", {
                                className:
                                  "text-xs text-[var(--e-primary)] mt-2 italic",
                                children: ['"', Oe.summary, '"'],
                              }),
                            ],
                          }),
                          Oe.finalReward &&
                            e.jsxs("div", {
                              className:
                                "bg-[var(--e-surface)] border border-[#FFD700]/30 p-4 text-center mx-auto max-w-[200px]",
                              children: [
                                e.jsx("div", {
                                  className: "text-3xl mb-2",
                                  children: Oe.finalReward.icon,
                                }),
                                e.jsx("div", {
                                  className: "text-[#FFD700] text-sm font-bold",
                                  children: Oe.finalReward.name,
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-[10px] text-[var(--e-muted)] mt-1",
                                  children: "已存入档案库",
                                }),
                              ],
                            }),
                        ],
                      }),
                    e.jsx("div", { ref: ae, className: "h-20" }),
                  ],
                }),
                e.jsx("div", {
                  className: `p-6 border-t border-[var(--e-line)] pb-12 relative z-10 ${h === "day" ? "bg-white" : "bg-[var(--e-raised)]"}`,
                  children:
                    !ft && ht && !r
                      ? Ve
                        ? e.jsxs("button", {
                            type: "button",
                            onClick: () => Ae(!1),
                            className:
                              "flex w-full items-center justify-center gap-2 border border-[#00FFFF]/35 bg-[var(--e-cyan)]/[0.06] py-3 font-mono text-xs text-[var(--e-cyan)] transition hover:border-[var(--e-cyan)]/55 hover:bg-[var(--e-cyan)]/10",
                            children: [
                              e.jsx(aa, {
                                className: "h-4 w-4 shrink-0 -rotate-90",
                                strokeWidth: 2,
                              }),
                              "展开行动策略",
                              e.jsxs("span", {
                                className:
                                  "text-[10px] text-[var(--e-cyan)]/60",
                                children: [
                                  "（",
                                  ((Ne = ht.options) == null
                                    ? void 0
                                    : Ne.length) ?? 0,
                                  "）",
                                ],
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "mb-1 flex items-center justify-between gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] font-mono uppercase tracking-widest text-[var(--e-cyan)]",
                                    children: "选择行动策略",
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Ae(!0),
                                    className:
                                      "flex shrink-0 items-center gap-1 rounded border border-[var(--e-line-strong)] px-2 py-1 text-[9px] font-mono text-[var(--e-soft)] transition hover:border-[var(--e-cyan)]/40 hover:text-[var(--e-cyan)]",
                                    "aria-expanded": !Ve,
                                    children: [
                                      "收起",
                                      e.jsx(aa, {
                                        className: "h-3.5 w-3.5 rotate-180",
                                        strokeWidth: 2,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              ht.options.map((Be) =>
                                e.jsxs(
                                  "button",
                                  {
                                    onClick: () => xs(Be.id),
                                    className:
                                      "w-full border border-[var(--e-line-strong)] p-3 text-left font-mono text-xs text-[var(--e-body)] transition-colors hover:border-[var(--e-cyan)] hover:bg-[var(--e-cyan)]/5 hover:text-[var(--e-cyan)]",
                                    children: [
                                      e.jsxs("div", {
                                        children: [
                                          e.jsxs("span", {
                                            className:
                                              "mr-2 text-[var(--e-muted)]",
                                            children: ["[", Be.id, "]"],
                                          }),
                                          Be.text,
                                        ],
                                      }),
                                      Be.blurb || Be.player_intent
                                        ? e.jsxs("div", {
                                            className:
                                              "mt-1.5 border-t border-[var(--e-line)] pt-1.5 text-[9px] leading-snug text-[var(--e-muted)]",
                                            children: [
                                              "→ ",
                                              Be.blurb || Be.player_intent,
                                            ],
                                          })
                                        : null,
                                    ],
                                  },
                                  Be.id,
                                ),
                              ),
                            ],
                          })
                      : ft
                        ? e.jsxs("div", {
                            className: "flex w-full flex-col gap-3",
                            children: [
                              Oe
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      (y || jt) &&
                                        !Ue &&
                                        !ct &&
                                        e.jsxs("div", {
                                          className:
                                            "text-[var(--e-cyan)] text-xs font-mono animate-pulse flex items-center justify-center gap-2 py-1",
                                          children: [
                                            e.jsx(Wr, { size: 14 }),
                                            " 生成并写入…",
                                          ],
                                        }),
                                      Ue &&
                                        e.jsxs("div", {
                                          className:
                                            "rounded border border-[#FF3B30]/40 bg-[#FF3B30]/[0.06] p-3 text-left",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[#FF3B30] text-xs font-mono mb-2",
                                              children: Ue,
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: qs,
                                              className:
                                                "border border-[#FF3B30] px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-[var(--e-soft)] hover:bg-[#FF3B30]/10",
                                              children: "重试",
                                            }),
                                          ],
                                        }),
                                      ct
                                        ? e.jsx("div", {
                                            className:
                                              "text-center font-mono text-[10px] uppercase tracking-widest text-[var(--e-mint)]",
                                            children: "已归档 · 见「结算」",
                                          })
                                        : null,
                                      !ct && !(y || jt) && !Ue
                                        ? e.jsxs("div", {
                                            className: "flex flex-col gap-2",
                                            children: [
                                              e.jsx("button", {
                                                type: "button",
                                                disabled: jt,
                                                title:
                                                  "将调用 AI 生成结算真相包并写入结算库",
                                                onClick: () => void _s(),
                                                className:
                                                  "w-full border border-[var(--e-cta)] bg-[var(--e-cta)] py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-black hover:bg-[var(--e-cta-hover)] disabled:opacity-50",
                                                children: "归档到结算",
                                              }),
                                              Pt
                                                ? e.jsx("div", {
                                                    className:
                                                      "text-center font-mono text-[10px] text-[var(--e-mint)]",
                                                    children: Pt,
                                                  })
                                                : null,
                                            ],
                                          })
                                        : null,
                                    ],
                                  })
                                : null,
                              e.jsx("button", {
                                type: "button",
                                onClick: () => A("PREPARE"),
                                className: `w-full border py-4 font-mono text-xs font-bold uppercase tracking-widest transition-colors ${h === "day" ? "border-slate-800 bg-[var(--e-primary)] text-white hover:bg-slate-950" : "border-transparent bg-[var(--e-primary)] text-black hover:bg-white"}`,
                                children: "断开连接 (返回枢纽)",
                              }),
                            ],
                          })
                        : null,
                }),
                e.jsx(Os, {
                  children:
                    ne &&
                    e.jsx(We.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 z-[70] flex items-center justify-center bg-[var(--e-overlay-90)] backdrop-blur-sm px-8",
                      children: e.jsxs("div", {
                        className:
                          "w-full bg-[var(--e-surface)] border border-[#FF3B30] p-6 text-center",
                        children: [
                          e.jsx("div", {
                            className: "text-[#FF3B30] mb-2 animate-pulse",
                            children: e.jsx(X1, {
                              size: 32,
                              className: "mx-auto",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "text-[var(--e-contrast)] font-bold mb-2",
                            children: "读取上一次存档？",
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-[var(--e-soft)] mb-6",
                            children: [
                              "当前未保存的进度将丢失。",
                              e.jsx("br", {}),
                              "时间线将回溯到上一次保存点。",
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("button", {
                                onClick: () => le(!1),
                                className:
                                  "flex-1 py-2 border border-[var(--e-line-strong)] text-[var(--e-soft)] text-xs font-mono hover:bg-[var(--e-hover)]",
                                children: "取消",
                              }),
                              e.jsx("button", {
                                onClick: () => {
                                  (Xt(), le(!1));
                                },
                                className:
                                  "flex-1 py-2 bg-[#FF3B30] text-black text-xs font-bold font-mono hover:bg-red-600",
                                children: "确认回溯",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                }),
                e.jsx(Os, {
                  children:
                    ie &&
                    e.jsx(We.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 z-[70] flex items-center justify-center bg-[var(--e-overlay-90)] backdrop-blur-sm px-8",
                      children: e.jsxs("div", {
                        className:
                          "w-full bg-[var(--e-surface)] border border-[#FF3B30] p-6 text-center",
                        children: [
                          e.jsx("div", {
                            className: "text-[#FF3B30] mb-2 animate-pulse",
                            children: e.jsx(Xr, {
                              size: 32,
                              className: "mx-auto",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "text-[var(--e-contrast)] font-bold mb-2",
                            children: "确认退出跑团？",
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-[var(--e-soft)] mb-6",
                            children: [
                              "请确保您已保存进度。",
                              e.jsx("br", {}),
                              "未保存的进展将会丢失。",
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("button", {
                                onClick: () => X(!1),
                                className:
                                  "flex-1 py-2 border border-[var(--e-line-strong)] text-[var(--e-soft)] text-xs font-mono hover:bg-[var(--e-hover)]",
                                children: "取消",
                              }),
                              e.jsx("button", {
                                onClick: rn,
                                className:
                                  "flex-1 py-2 bg-[#FF3B30] text-black text-xs font-bold font-mono hover:bg-red-600",
                                children: "确认退出",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                }),
                e.jsx(Os, {
                  children:
                    fs &&
                    e.jsx(We.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 z-[110] flex items-center justify-center bg-[var(--e-overlay-80)] backdrop-blur-sm px-6",
                      onClick: () => gt(null),
                      children: e.jsxs("div", {
                        className:
                          "w-full max-w-sm bg-[var(--e-surface)] border border-[#FFD700]/30 overflow-hidden",
                        onClick: (Be) => Be.stopPropagation(),
                        children: [
                          e.jsxs("div", {
                            className:
                              "p-4 border-b border-[#FFD700]/20 flex items-center gap-4 bg-[#FFD700]/5",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 flex items-center justify-center text-[#FFD700] bg-[var(--e-black)] border border-[#FFD700]/30 shrink-0",
                                children:
                                  fs.type === "intel"
                                    ? e.jsx(Gl, { size: 20 })
                                    : e.jsx(Ko, { size: 20 }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-[#FFD700] font-bold text-lg leading-tight",
                                    children: fs.name,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-[#FFD700]/70 uppercase tracking-widest mt-1",
                                    children:
                                      fs.type === "intel"
                                        ? "隐秘情报"
                                        : "实体物品",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "p-6 max-h-[60vh] overflow-y-auto scrollbar-hide space-y-6",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-[#FFD700] font-mono uppercase mb-2",
                                    children: "获取经过 (PROCESS)",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-xs text-[var(--e-body)] leading-relaxed font-serif italic border-l-2 border-[#FFD700]/30 pl-3 space-y-2",
                                    children:
                                      (Je = fs.process) == null
                                        ? void 0
                                        : Je.split(
                                            `
`,
                                          ).map((Be, Ke) =>
                                            e.jsx("p", { children: Be }, Ke),
                                          ),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-[var(--e-cyan)] font-mono uppercase mb-2",
                                    children: "详细解析 (DESCRIPTION)",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-xs text-[var(--e-primary)] leading-relaxed font-serif space-y-2",
                                    children:
                                      (St = fs.description) == null
                                        ? void 0
                                        : St.split(
                                            `
`,
                                          ).map((Be, Ke) =>
                                            e.jsx("p", { children: Be }, Ke),
                                          ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "p-4 bg-[var(--e-black)] border-t border-[#FFD700]/20",
                            children: e.jsx("button", {
                              onClick: () => gt(null),
                              className:
                                "w-full py-3 bg-[#FFD700]/10 text-[#FFD700] font-mono text-xs font-bold uppercase tracking-widest border border-[#FFD700]/30 hover:bg-[#FFD700] hover:text-black transition-colors",
                              children: "确认记录 (Acknowledge)",
                            }),
                          }),
                        ],
                      }),
                    }),
                }),
                st,
              ],
            }),
            $t,
            Ft,
            es,
            At,
          ],
        });
  },
  _Z = ({ items: t, onDiscard: s, setTheaterModeItem: n }) => {
    const [a, r] = l.useState(null),
      [i, o] = l.useState(!1),
      [c, d] = l.useState(null);
    return (
      l.useEffect(() => {}, [a]),
      e.jsxs("div", {
        className:
          "absolute inset-0 flex min-h-0 flex-col overflow-hidden pt-24 pb-24 px-6",
        children: [
          e.jsx(Os, {
            children: c && e.jsx(gZ, { item: c, onClose: () => d(null) }),
          }),
          e.jsx("div", {
            className:
              "min-h-0 flex-1 overflow-y-auto overscroll-y-contain pb-4 no-scrollbar",
            children: e.jsxs("div", {
              className: "grid grid-cols-1 gap-2",
              children: [
                t.length === 0 &&
                  e.jsx("div", {
                    className:
                      "text-center py-20 font-mono text-[#333] text-xs",
                    children: "暂无数据",
                  }),
                t.map((u) =>
                  e.jsxs(
                    We.div,
                    {
                      layoutId: u.id,
                      onClick: () =>
                        r((a == null ? void 0 : a.id) === u.id ? null : u),
                      className: `border ${(a == null ? void 0 : a.id) === u.id ? "border-[var(--e-contrast)] bg-[var(--e-surface)]" : "border-[var(--e-line)] bg-[var(--e-black)]"} p-4 transition-colors cursor-pointer group`,
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "font-mono text-[10px] text-[var(--e-dim)] group-hover:text-[var(--e-muted)]",
                                  children: u.id.slice(0, 4),
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-xl filter grayscale group-hover:grayscale-0 transition-all",
                                  children: u.icon,
                                }),
                                e.jsx("div", {
                                  className:
                                    "font-bold text-sm text-[var(--e-body)]",
                                  children: u.name,
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: `text-[9px] px-1 border ${u.rarity === "SSR" ? "border-yellow-600 text-yellow-600" : "border-[var(--e-line-strong)] text-[var(--e-dim)]"}`,
                              children: u.rarity,
                            }),
                          ],
                        }),
                        (a == null ? void 0 : a.id) === u.id &&
                          e.jsx(We.div, {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            className:
                              "mt-4 pt-4 border-t border-[var(--e-line)] overflow-hidden",
                            onClick: (f) => f.stopPropagation(),
                            children: u.owner
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsxs("div", {
                                      className: "grid grid-cols-2 gap-4 mb-4",
                                      children: [
                                        u.origin &&
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[9px] text-[var(--e-muted)] uppercase mb-1",
                                                children: "来源",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] text-[var(--e-body)]",
                                                children: u.origin,
                                              }),
                                            ],
                                          }),
                                        u.owner &&
                                          e.jsxs("div", {
                                            className:
                                              "group/owner cursor-pointer",
                                            onClick: (f) => {
                                              (f.stopPropagation(), d(u));
                                            },
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "text-[9px] text-[var(--e-muted)] uppercase mb-1 flex items-center gap-1",
                                                children: [
                                                  "持有者",
                                                  e.jsx("div", {
                                                    className:
                                                      "w-1 h-1 bg-[#FF3B30] rounded-full opacity-0 group-hover/owner:opacity-100 transition-opacity",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] text-[var(--e-body)] underline decoration-[var(--e-line-strong)] underline-offset-2 group-hover/owner:text-[var(--e-contrast)] group-hover/owner:decoration-[#FF3B30] transition-all",
                                                children: u.owner,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    u.memory_fragment &&
                                      e.jsxs("div", {
                                        className:
                                          "mb-4 bg-[var(--e-raised)] p-3 border border-[var(--e-line)] rounded",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex gap-2 items-center mb-1 text-[var(--e-muted)]",
                                            children: [
                                              e.jsx(Gl, { size: 10 }),
                                              e.jsx("span", {
                                                className:
                                                  "text-[9px] uppercase",
                                                children: "记忆碎片",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-xs text-[var(--e-primary)] italic leading-relaxed",
                                            children: [
                                              '"',
                                              u.memory_fragment,
                                              '"',
                                            ],
                                          }),
                                        ],
                                      }),
                                    e.jsx("p", {
                                      className:
                                        "font-mono text-xs text-[var(--e-soft)] leading-relaxed mb-4",
                                      children: u.description,
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-t border-[var(--e-line)] pt-3",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "text-[9px] text-[var(--e-dim)] uppercase",
                                          children: [
                                            "估值: ",
                                            u.value || 0,
                                            " PTS",
                                          ],
                                        }),
                                        e.jsxs("button", {
                                          onClick: (f) => {
                                            (f.stopPropagation(), o(!0));
                                          },
                                          className:
                                            "flex items-center gap-1 text-[10px] text-[#FF3B30] hover:bg-[#FF3B30]/10 px-2 py-1 rounded transition-colors",
                                          children: [
                                            e.jsx(_n, { size: 12 }),
                                            " 分解",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsxs("div", {
                                      className: "grid grid-cols-2 gap-4 mb-4",
                                      children: [
                                        u.origin &&
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[9px] text-[var(--e-muted)] uppercase mb-1",
                                                children: "来源",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] text-[var(--e-body)]",
                                                children: u.origin,
                                              }),
                                            ],
                                          }),
                                        u.composition &&
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "text-[9px] text-[var(--e-muted)] uppercase mb-1",
                                                children: "构成",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] text-[var(--e-body)]",
                                                children: u.composition,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    u.parents &&
                                      u.parents.length > 0 &&
                                      e.jsxs("div", {
                                        className:
                                          "mb-4 bg-[var(--e-surface)] p-2 border border-[var(--e-line-strong)] border-dashed",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "text-[9px] text-[var(--e-muted)] uppercase mb-2 flex items-center gap-1",
                                            children: [
                                              e.jsx(Mc, { size: 10 }),
                                              " 原始素材 (点击查看档案)",
                                            ],
                                          }),
                                          e.jsx("div", {
                                            className: "flex gap-2",
                                            children: u.parents.map((f, p) =>
                                              e.jsxs(
                                                "div",
                                                {
                                                  onClick: (m) => {
                                                    (m.stopPropagation(), d(f));
                                                  },
                                                  className:
                                                    "flex-1 flex items-center gap-2 p-2 border border-[var(--e-line)] bg-[var(--e-black)] hover:border-[var(--e-cyan)] hover:bg-[var(--e-cyan)]/5 cursor-pointer transition-all group/parent",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-xl grayscale group-hover/parent:grayscale-0",
                                                      children: f.icon,
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "min-w-0 flex-1",
                                                      children: [
                                                        e.jsx("div", {
                                                          className:
                                                            "text-[10px] text-[var(--e-body)] group-hover/parent:text-[var(--e-cyan)] truncate font-bold",
                                                          children: f.name,
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "text-[8px] text-[var(--e-muted)] truncate",
                                                          children: [
                                                            "原主: ",
                                                            f.owner || "未知",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx(wl, {
                                                      size: 10,
                                                      className:
                                                        "text-[#333] group-hover/parent:text-[var(--e-cyan)] opacity-0 group-hover/parent:opacity-100",
                                                    }),
                                                  ],
                                                },
                                                p,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                    e.jsx("p", {
                                      className:
                                        "font-mono text-xs text-[var(--e-soft)] leading-relaxed mb-4",
                                      children: u.description,
                                    }),
                                    e.jsx("div", {
                                      className: "mb-4",
                                      children: e.jsxs("button", {
                                        onClick: (f) => {
                                          (f.stopPropagation(), n(u));
                                        },
                                        className:
                                          "w-full py-3 bg-[var(--e-cyan)]/5 border border-[#00FFFF]/30 text-[var(--e-cyan)] hover:bg-[var(--e-cyan)]/10 hover:border-[var(--e-cyan)] transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest",
                                        children: [
                                          e.jsx(xr, { size: 14 }),
                                          " 进入记忆剧场 (Enter Theater)",
                                        ],
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between border-t border-[var(--e-line)] pt-3",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "text-[9px] text-[var(--e-dim)] uppercase",
                                          children: [
                                            "估值: ",
                                            u.value || 0,
                                            " PTS",
                                          ],
                                        }),
                                        e.jsxs("button", {
                                          onClick: (f) => {
                                            (f.stopPropagation(), o(!0));
                                          },
                                          className:
                                            "flex items-center gap-1 text-[10px] text-[#FF3B30] hover:bg-[#FF3B30]/10 px-2 py-1 rounded transition-colors",
                                          children: [
                                            e.jsx(_n, { size: 12 }),
                                            " 分解",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                          }),
                      ],
                    },
                    u.id,
                  ),
                ),
              ],
            }),
          }),
          e.jsx(Os, {
            children:
              i &&
              a &&
              e.jsx(We.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-[var(--e-overlay-80)] backdrop-blur-sm px-8",
                onClick: (u) => {
                  (u.stopPropagation(), o(!1));
                },
                children: e.jsxs("div", {
                  className:
                    "w-full bg-[var(--e-surface)] border border-[#FF3B30] p-6 text-center",
                  onClick: (u) => u.stopPropagation(),
                  children: [
                    e.jsx("h3", {
                      className: "text-[var(--e-contrast)] font-bold mb-2",
                      children: "确认分解？",
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-[var(--e-soft)] mb-6",
                      children: [
                        "样本 ",
                        a.name,
                        " 将被永久销毁。",
                        e.jsx("br", {}),
                        "预计熵值回馈: ",
                        Math.floor(a.value * 0.1 || 1),
                        " PTS",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("button", {
                          onClick: () => o(!1),
                          className:
                            "flex-1 py-2 border border-[var(--e-line-strong)] text-[var(--e-soft)] text-xs font-mono",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            (s(a.id), o(!1), r(null));
                          },
                          className:
                            "flex-1 py-2 bg-[#FF3B30] text-black text-xs font-bold font-mono",
                          children: "确认",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          }),
        ],
      })
    );
  };
function AZ(t) {
  var o;
  const s = [],
    n = (t == null ? void 0 : t.title) || "Echo 远征归档";
  (s.push(`# ${n}`),
    (o = t == null ? void 0 : t.sessionLight) != null &&
      o.questHeadline &&
      s.push(`> 主线：${t.sessionLight.questHeadline}`));
  const a = t == null ? void 0 : t.settlementLore;
  if (!a)
    return s.join(`

`);
  a.truth_story &&
    s.push(`## 真相与因果（第三人称）
${a.truth_story}`);
  const r = OC(t == null ? void 0 : t.expeditionHistoryReplay);
  r
    ? s.push(r)
    : t != null &&
      t.historyDigest &&
      s.push(`## 远征剧情纪要（压缩）

${t.historyDigest}`);
  const i = Nh(a.boss_epilogue);
  if (
    ((i.third || i.first) &&
      s.push(`## Boss
### 第三人称经历
${i.third || "（无）"}

### 第一人称独白
${i.first || "（无）"}`),
    Array.isArray(a.npc_epilogues) && a.npc_epilogues.length)
  ) {
    s.push("## NPC");
    for (const c of a.npc_epilogues) {
      const d = Dm(c);
      s.push(`### ${c.call_name || c.scene_npc_id}
#### 黑化前 · 常态故事
${d.third || "（无）"}

#### 黑化后 · 独白
${d.first || "（无）"}`);
    }
  }
  return (
    Array.isArray(a.unresolved_hooks) &&
      a.unresolved_hooks.length &&
      s.push(`## 伏笔
- ${a.unresolved_hooks.join(`
- `)}`),
    s.join(`

`)
  );
}
const CZ = ({
    archives: t,
    expandEchoCharacterCodex: s,
    onSpiritSend: n,
    uiScheme: a = "night",
    focusArchiveId: r = null,
    onFocusArchiveConsumed: i,
  }) => {
    var I, L, B, F, D;
    const [o, c] = l.useState("list"),
      [d, u] = l.useState(null),
      [f, p] = l.useState(null),
      [m, h] = l.useState(""),
      g = t.find(($) => $.id === d) || null,
      x = a === "day",
      [y, v] = l.useState(!1),
      [b, N] = l.useState(!1),
      [w, _] = l.useState(!1),
      [A, k] = l.useState({}),
      [C, M] = l.useState(!1);
    (l.useEffect(() => {
      (v(!1), N(!1), _(!1), k({}), M(!1), p(null));
    }, [d]),
      l.useEffect(() => {
        if (!r) return;
        const $ = String(r);
        t.some((P) => P && String(P.id) === $) &&
          (u($), c("list"), i == null || i());
      }, [r, t, i]));
    const E = async () => {
        if (g)
          try {
            (await navigator.clipboard.writeText(AZ(g)),
              h("已复制草稿（可粘贴到聊天）"),
              setTimeout(() => h(""), 2200));
          } catch {
            (h("复制失败"), setTimeout(() => h(""), 2200));
          }
      },
      S = async ($, P) => {
        if (!g || f) return;
        const z = `${$}:${P}`;
        (p(z), h(""));
        try {
          const O = await s({ archiveId: g.id, npcKey: $, mode: P });
          (O.success
            ? h(P === "append" ? "已追加设定版本" : "已重新生成设定")
            : h(O.message || "失败"),
            setTimeout(() => h(""), 2400));
        } finally {
          p(null);
        }
      },
      j = !!f,
      T = ($, P) => f === `${$}:${P}`;
    return o === "spirit"
      ? e.jsxs("div", {
          className:
            "absolute inset-0 z-10 flex min-h-0 flex-col overflow-hidden pt-28",
          children: [
            e.jsxs("div", {
              className:
                "flex shrink-0 items-center gap-3 border-b border-[var(--e-line)] px-4 py-2",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => c("list"),
                  className:
                    "font-mono text-[10px] uppercase tracking-widest text-[var(--e-cyan)]",
                  children: "← 结算",
                }),
                e.jsx("span", {
                  className: "font-mono text-[9px] text-[var(--e-dim)]",
                  children: "心绪具象 · 旧版传输",
                }),
              ],
            }),
            e.jsx("div", {
              className: "min-h-0 flex-1 overflow-hidden",
              children: e.jsx(MZ, { onSend: n }),
            }),
          ],
        })
      : e.jsxs("div", {
          className:
            "absolute inset-0 z-10 flex min-h-0 flex-col overflow-hidden pt-28 pb-28",
          children: [
            e.jsxs("div", {
              className:
                "flex shrink-0 items-center justify-between border-b border-[var(--e-line-strong)] bg-[var(--e-raised)] px-4 py-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "flex h-9 w-9 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-black)] text-[var(--e-cyan)]",
                      children: e.jsx(fE, { size: 15, strokeWidth: 1.5 }),
                    }),
                    e.jsxs("div", {
                      className: "leading-tight",
                      children: [
                        e.jsx("span", {
                          className:
                            "block font-mono text-[8px] uppercase tracking-[0.28em] text-[var(--e-dim)]",
                          children: "Echo",
                        }),
                        e.jsx("span", {
                          className:
                            "block font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--e-contrast)]",
                          children: "结算",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => c("spirit"),
                  className:
                    "border border-[var(--e-line-strong)] bg-[var(--e-black)] px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[var(--e-soft)] transition hover:border-[var(--e-cyan)]/45 hover:text-[var(--e-cyan)]",
                  children: "心绪具象",
                }),
              ],
            }),
            m
              ? e.jsx("div", {
                  className:
                    "shrink-0 border-b border-[var(--e-cyan)]/25 bg-[var(--e-cyan)]/[0.08] px-4 py-2 text-center font-mono text-[10px] uppercase tracking-widest text-[var(--e-cyan)]",
                  children: m,
                })
              : null,
            g
              ? e.jsx("div", {
                  className:
                    "min-h-0 flex-1 overflow-y-auto overscroll-y-contain scrollbar-hide",
                  children: e.jsxs("div", {
                    className:
                      "mx-auto max-w-lg px-4 pb-32 pt-2 sm:max-w-xl sm:px-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "mb-10 flex items-center justify-between gap-4",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => u(null),
                            className:
                              "group flex min-w-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--e-muted)] transition hover:text-[var(--e-cyan)]",
                            children: [
                              e.jsx("span", {
                                className:
                                  "flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-black)] text-[var(--e-contrast)] transition group-hover:border-[var(--e-cyan)]/50",
                                children: e.jsx(Xr, {
                                  size: 15,
                                  strokeWidth: 1.5,
                                }),
                              }),
                              e.jsx("span", {
                                className: "truncate",
                                children: "返回列表",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: E,
                            title: "复制聊天草稿",
                            "aria-label": "复制聊天草稿",
                            className:
                              "flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-cta)] text-black transition hover:bg-white",
                            children: e.jsx(HT, { size: 14, strokeWidth: 2 }),
                          }),
                        ],
                      }),
                      e.jsxs("header", {
                        className:
                          "relative mb-12 border border-[var(--e-line-strong)] bg-[var(--e-raised)]",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute left-0 top-0 h-full w-1 bg-[#FF3B30]",
                            "aria-hidden": !0,
                          }),
                          e.jsxs("div", {
                            className:
                              "pl-5 pr-4 pb-6 pt-5 sm:pl-6 sm:pr-5 sm:pt-6",
                            children: [
                              e.jsxs("div", {
                                className: "flex gap-4 sm:gap-5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-black)] text-[1.85rem] leading-none sm:h-16 sm:w-16 sm:text-[2rem]",
                                    children: g.coverEmoji,
                                  }),
                                  e.jsxs("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[8px] uppercase tracking-[0.24em] text-[var(--e-dim)]",
                                        children: [
                                          e.jsxs("span", {
                                            className:
                                              "inline-flex items-center gap-1.5",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#FF3B30]",
                                              }),
                                              "Echo / ARCHIVE",
                                            ],
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[var(--e-line-accent)]",
                                            children: "·",
                                          }),
                                          e.jsx("span", {
                                            children: new Date(
                                              g.createdAt,
                                            ).toLocaleString(),
                                          }),
                                        ],
                                      }),
                                      e.jsx("h2", {
                                        className:
                                          "mt-2 text-lg font-bold leading-tight tracking-tight text-[var(--e-contrast)] sm:text-xl",
                                        children: g.title,
                                      }),
                                      (I = g.sessionLight) != null &&
                                      I.questHeadline
                                        ? e.jsxs("p", {
                                            className:
                                              "mt-2 border-l border-[var(--e-cyan)]/40 pl-3 font-mono text-[9px] leading-relaxed text-[var(--e-soft)] sm:text-[10px]",
                                            children: [
                                              "OBJ · ",
                                              g.sessionLight.questHeadline,
                                            ],
                                          })
                                        : null,
                                      e.jsx("div", {
                                        className: "mt-3 flex flex-wrap gap-2",
                                        children:
                                          g.endSnapshot &&
                                          typeof g.endSnapshot.is_success ==
                                            "boolean"
                                            ? e.jsx("span", {
                                                className: `inline-flex items-center border px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider ${g.endSnapshot.is_success ? "border-[var(--e-mint)]/50 bg-[var(--e-mint)]/10 text-[var(--e-mint)]" : "border-[#FF3B30]/45 bg-[#FF3B30]/10 text-[#FF3B30]"}`,
                                                children: g.endSnapshot
                                                  .is_success
                                                  ? "STATUS · CLOSED"
                                                  : "STATUS · BROKEN",
                                              })
                                            : null,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (L = g.endSnapshot) != null && L.summary
                                ? e.jsxs("p", {
                                    className:
                                      "mt-5 border-t border-[var(--e-line)] pt-4 font-serif text-xs italic leading-relaxed text-[var(--e-body)] sm:text-[13px]",
                                    children: [
                                      "「",
                                      g.endSnapshot.summary,
                                      "」",
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      (() => {
                        const $ = OC(g.expeditionHistoryReplay),
                          P = g.historyDigest;
                        return !$ && !P
                          ? null
                          : e.jsxs("section", {
                              className:
                                "mb-10 border border-[var(--e-line-strong)] bg-[var(--e-raised)]",
                              children: [
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: () => M((z) => !z),
                                  className:
                                    "flex w-full items-center justify-between gap-3 border-b border-[var(--e-line)] px-4 py-3 text-left transition hover:bg-[var(--e-hover)] sm:px-5",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.22em] text-[var(--e-muted)]",
                                      children: [
                                        e.jsx(kl, {
                                          size: 13,
                                          strokeWidth: 1.5,
                                          className:
                                            "text-[var(--e-cyan)] opacity-80",
                                        }),
                                        "EXPEDITION · REPLAY",
                                        e.jsxs("span", {
                                          className:
                                            "hidden font-normal text-[var(--e-dim)] sm:inline",
                                          children: ["· ", C ? "收起" : "展开"],
                                        }),
                                      ],
                                    }),
                                    e.jsx(aa, {
                                      size: 16,
                                      strokeWidth: 1.5,
                                      className: `shrink-0 text-[var(--e-cyan)] transition-transform ${C ? "rotate-180" : ""}`,
                                    }),
                                  ],
                                }),
                                C
                                  ? e.jsx("div", {
                                      className:
                                        "max-h-[55vh] overflow-y-auto overscroll-y-contain px-4 py-4 sm:px-5 sm:py-5",
                                      children: $
                                        ? e.jsx(dl, {
                                            text: $,
                                            className:
                                              "text-[12px] font-serif leading-[1.85] text-[var(--e-primary)] sm:text-[13px]",
                                          })
                                        : e.jsxs("div", {
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "mb-2 font-mono text-[9px] uppercase tracking-widest text-[var(--e-dim)]",
                                                children: "旧档 · 仅压缩纪要",
                                              }),
                                              e.jsx("pre", {
                                                className:
                                                  "whitespace-pre-wrap break-words font-mono text-[10px] leading-relaxed text-[var(--e-soft)]",
                                                children: P,
                                              }),
                                            ],
                                          }),
                                    })
                                  : null,
                              ],
                            });
                      })(),
                      (B = g.settlementLore) != null && B.truth_story
                        ? e.jsxs("section", {
                            className: `relative mb-10 overflow-hidden border border-[var(--e-line-strong)] border-l-[3px] border-l-[var(--e-cyan)]/80 bg-[var(--e-black)] ${x ? "" : "before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px)] before:bg-[length:100%_2px] before:opacity-40"}`,
                            children: [
                              e.jsxs("button", {
                                type: "button",
                                onClick: () => v(($) => !$),
                                className:
                                  "relative z-[1] flex w-full items-center justify-between gap-3 border-b border-[var(--e-line)] px-4 py-3 text-left transition hover:bg-[var(--e-overlay-50)] sm:px-5",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.26em] text-[var(--e-cyan)]",
                                    children: [
                                      e.jsx(Mc, {
                                        size: 13,
                                        strokeWidth: 1.5,
                                        className: "opacity-80",
                                      }),
                                      "SECTOR · TRUTH",
                                      e.jsxs("span", {
                                        className:
                                          "hidden font-normal text-[var(--e-dim)] sm:inline",
                                        children: [
                                          "· 第三人称 · ",
                                          y ? "收起" : "展开",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(aa, {
                                    size: 16,
                                    strokeWidth: 1.5,
                                    className: `shrink-0 text-[var(--e-cyan)] transition-transform ${y ? "rotate-180" : ""}`,
                                  }),
                                ],
                              }),
                              y
                                ? e.jsx("div", {
                                    className:
                                      "relative z-[1] px-4 py-4 sm:px-5 sm:py-5",
                                    children: e.jsx(dl, {
                                      text: g.settlementLore.truth_story,
                                      className:
                                        "text-[13px] font-serif leading-[1.8] text-[var(--e-primary)] sm:text-[14px]",
                                    }),
                                  })
                                : null,
                            ],
                          })
                        : null,
                      (() => {
                        var Z, K, q, V;
                        const $ = Nh(
                          (Z = g.settlementLore) == null
                            ? void 0
                            : Z.boss_epilogue,
                        );
                        if (!$.third && !$.first) return null;
                        const P =
                            (q =
                              (K = g.characterCodex) == null
                                ? void 0
                                : K.__boss__) == null
                              ? void 0
                              : q.versions,
                          z = P != null && P.length ? P[P.length - 1] : null,
                          O =
                            (V = z == null ? void 0 : z.blocks) == null
                              ? void 0
                              : V.reply_playbook_bullets;
                        return e.jsxs("section", {
                          className: `relative mb-10 border border-[var(--e-line-strong)] ${x ? "bg-amber-50/30" : "bg-[#0a0606]"}`,
                          children: [
                            e.jsx("div", {
                              className:
                                "flex h-2 w-full border-b border-[#FF3B30]/30",
                              style: {
                                background:
                                  "repeating-linear-gradient(90deg, #FF3B30 0px, #FF3B30 6px, transparent 6px, transparent 12px)",
                                opacity: x ? 0.35 : 0.55,
                              },
                              "aria-hidden": !0,
                            }),
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => N((ne) => !ne),
                              className:
                                "flex w-full items-center justify-between gap-3 border-b border-[#FF3B30]/25 px-4 py-3 text-left transition hover:bg-[#FF3B30]/[0.04] sm:px-5",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.24em] text-[#FF3B30]",
                                  children: [
                                    e.jsx(wp, {
                                      size: 13,
                                      strokeWidth: 1.5,
                                      className: "shrink-0",
                                    }),
                                    "RESTRICTED · BOSS",
                                    e.jsxs("span", {
                                      className:
                                        "hidden font-normal text-[var(--e-dim)] sm:inline",
                                      children: ["· ", b ? "收起" : "展开"],
                                    }),
                                  ],
                                }),
                                e.jsx(aa, {
                                  size: 16,
                                  strokeWidth: 1.5,
                                  className: `shrink-0 text-[#FF3B30] transition-transform ${b ? "rotate-180" : ""}`,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-wrap gap-2 border-b border-[var(--e-line)] px-4 py-2.5 sm:px-5",
                              children: [
                                e.jsxs("button", {
                                  type: "button",
                                  disabled: j,
                                  onClick: () => S("__boss__", "regenerate"),
                                  className: `inline-flex min-h-[1.875rem] items-center justify-center gap-1.5 border border-[var(--e-line-strong)] bg-[var(--e-black)] px-2.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--e-soft)] transition hover:border-[#FF3B30]/45 hover:text-[#FF3B30] disabled:pointer-events-none disabled:opacity-40 ${T("__boss__", "regenerate") ? "animate-pulse border-[#FF3B30]/50" : ""}`,
                                  children: [
                                    T("__boss__", "regenerate")
                                      ? e.jsx(Sn, {
                                          className:
                                            "size-3.5 shrink-0 animate-spin",
                                          strokeWidth: 2,
                                          "aria-hidden": !0,
                                        })
                                      : null,
                                    T("__boss__", "regenerate")
                                      ? "运行中"
                                      : "重生",
                                  ],
                                }),
                                e.jsxs("button", {
                                  type: "button",
                                  disabled: j,
                                  onClick: () => S("__boss__", "append"),
                                  className: `inline-flex min-h-[1.875rem] items-center justify-center gap-1.5 border border-[var(--e-line-strong)] bg-[var(--e-black)] px-2.5 py-1.5 font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--e-soft)] transition hover:border-[#FF3B30]/45 hover:text-[#FF3B30] disabled:pointer-events-none disabled:opacity-40 ${T("__boss__", "append") ? "animate-pulse border-[#FF3B30]/50" : ""}`,
                                  children: [
                                    T("__boss__", "append")
                                      ? e.jsx(Sn, {
                                          className:
                                            "size-3.5 shrink-0 animate-spin",
                                          strokeWidth: 2,
                                          "aria-hidden": !0,
                                        })
                                      : null,
                                    T("__boss__", "append") ? "运行中" : "追加",
                                  ],
                                }),
                              ],
                            }),
                            b
                              ? e.jsxs("div", {
                                  className:
                                    "space-y-6 px-4 py-5 sm:px-5 sm:py-6",
                                  children: [
                                    $.third
                                      ? e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--e-dim)]",
                                              children: "LOG · THIRD_PERSON",
                                            }),
                                            e.jsx(dl, {
                                              text: $.third,
                                              className:
                                                "text-[13px] font-serif leading-[1.8] text-[var(--e-primary)] sm:text-[14px]",
                                            }),
                                          ],
                                        })
                                      : null,
                                    $.first
                                      ? e.jsxs("div", {
                                          className:
                                            "border border-[#FF3B30]/25 border-dashed bg-[#FF3B30]/[0.04] px-3 py-3 sm:px-4",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "mb-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#FF3B30]/90",
                                              children: "LEAK · FIRST_PERSON",
                                            }),
                                            e.jsx(dl, {
                                              text: $.first,
                                              className:
                                                "text-[13px] font-serif italic leading-[1.85] text-[var(--e-soft)] sm:text-[14px]",
                                            }),
                                          ],
                                        })
                                      : null,
                                    z != null && z.long_profile
                                      ? e.jsxs("div", {
                                          className:
                                            "border border-[var(--e-line-strong)] bg-[var(--e-deep)]",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center justify-between gap-2 border-b border-[var(--e-line)] bg-[var(--e-black)] px-3 py-2 sm:px-4",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "h-1.5 w-1.5 rounded-full bg-[var(--e-mint)]",
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--e-mint)]",
                                                      children:
                                                        "PLAYBOOK · EXPORT",
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("button", {
                                                  type: "button",
                                                  disabled: j,
                                                  onClick: async () => {
                                                    try {
                                                      const ne = R4(
                                                        z == null
                                                          ? void 0
                                                          : z.blocks,
                                                        {
                                                          title:
                                                            "Boss · 扮演卡",
                                                          fallbackText:
                                                            z == null
                                                              ? void 0
                                                              : z.long_profile,
                                                        },
                                                      );
                                                      (await navigator.clipboard.writeText(
                                                        ne || z.long_profile,
                                                      ),
                                                        h(
                                                          "已复制 Markdown 扮演卡",
                                                        ),
                                                        setTimeout(
                                                          () => h(""),
                                                          2e3,
                                                        ));
                                                    } catch {
                                                      (h("复制失败"),
                                                        setTimeout(
                                                          () => h(""),
                                                          2e3,
                                                        ));
                                                    }
                                                  },
                                                  className:
                                                    "shrink-0 border border-[var(--e-mint)]/40 bg-[var(--e-mint)]/10 px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--e-mint)] transition hover:bg-[var(--e-mint)]/20 disabled:opacity-40",
                                                  children: "COPY",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "p-3 sm:p-4",
                                              children: [
                                                e.jsx(dl, {
                                                  text: z.long_profile,
                                                  className: `font-mono text-[10px] leading-relaxed sm:text-[11px] ${x ? "text-slate-700" : "text-[var(--e-mint)]/90"}`,
                                                }),
                                                Array.isArray(O) && O.length
                                                  ? e.jsxs("div", {
                                                      className:
                                                        "mt-3 border-t border-[var(--e-line)] pt-3",
                                                      children: [
                                                        e.jsx("p", {
                                                          className:
                                                            "mb-1.5 font-mono text-[8px] uppercase tracking-widest text-[var(--e-dim)]",
                                                          children:
                                                            "EXEC_RULES",
                                                        }),
                                                        e.jsx("ul", {
                                                          className:
                                                            "space-y-1.5 font-mono text-[9px] leading-snug text-[var(--e-muted)]",
                                                          children: O.map(
                                                            (ne, le) =>
                                                              e.jsxs(
                                                                "li",
                                                                {
                                                                  className:
                                                                    "flex gap-2",
                                                                  children: [
                                                                    e.jsx(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "shrink-0 text-[var(--e-cyan)]",
                                                                        children:
                                                                          ">",
                                                                      },
                                                                    ),
                                                                    e.jsx(
                                                                      "span",
                                                                      {
                                                                        children:
                                                                          ne,
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                                le,
                                                              ),
                                                          ),
                                                        }),
                                                      ],
                                                    })
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
                        });
                      })(),
                      Array.isArray(
                        (F = g.settlementLore) == null
                          ? void 0
                          : F.npc_epilogues,
                      ) && g.settlementLore.npc_epilogues.length
                        ? e.jsxs("section", {
                            className: "mb-10",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "mb-4 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.24em] text-[var(--e-muted)]",
                                children: [
                                  e.jsx(Bi, {
                                    size: 13,
                                    strokeWidth: 1.5,
                                    className:
                                      "text-[var(--e-cyan)] opacity-80",
                                  }),
                                  "FIELD · DOSSIERS",
                                ],
                              }),
                              e.jsx("div", {
                                className: "space-y-8",
                                children: g.settlementLore.npc_epilogues.map(
                                  ($, P) => {
                                    var ne, le, ie;
                                    const z = String($.scene_npc_id || P),
                                      O = Dm($),
                                      Z =
                                        (le =
                                          (ne = g.characterCodex) == null
                                            ? void 0
                                            : ne[z]) == null
                                          ? void 0
                                          : le.versions,
                                      K =
                                        Z != null && Z.length
                                          ? Z[Z.length - 1]
                                          : null,
                                      q =
                                        (ie = K == null ? void 0 : K.blocks) ==
                                        null
                                          ? void 0
                                          : ie.reply_playbook_bullets;
                                    if (!O.third && !O.first) return null;
                                    const V = !!A[z];
                                    return e.jsxs(
                                      "div",
                                      {
                                        className: "relative pl-6 sm:pl-8",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "absolute bottom-0 left-[11px] top-8 w-px bg-[var(--e-line)] sm:left-[13px]",
                                            "aria-hidden": !0,
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute left-0 top-1 flex h-6 w-6 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-black)] font-mono text-[8px] font-bold text-[var(--e-cyan)] sm:h-7 sm:w-7",
                                            children: String(P + 1).padStart(
                                              2,
                                              "0",
                                            ),
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "border border-[var(--e-line-strong)] bg-[var(--e-raised)]",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex flex-wrap items-stretch gap-0 border-b border-[var(--e-line)]",
                                                children: [
                                                  e.jsxs("button", {
                                                    type: "button",
                                                    onClick: () =>
                                                      k((X) => ({
                                                        ...X,
                                                        [z]: !X[z],
                                                      })),
                                                    className:
                                                      "flex min-w-0 flex-1 items-center justify-between gap-2 px-3 py-2.5 text-left transition hover:bg-[var(--e-hover)] sm:px-4",
                                                    children: [
                                                      e.jsxs("div", {
                                                        className: "min-w-0",
                                                        children: [
                                                          e.jsx("p", {
                                                            className:
                                                              "font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--e-dim)]",
                                                            children: "SUBJECT",
                                                          }),
                                                          e.jsxs("p", {
                                                            className:
                                                              "mt-0.5 truncate font-mono text-sm font-bold tracking-tight text-[var(--e-contrast)]",
                                                            children: [
                                                              $.call_name || z,
                                                              $.role_tag
                                                                ? e.jsxs(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-xs font-normal text-[var(--e-muted)]",
                                                                      children:
                                                                        [
                                                                          " / ",
                                                                          $.role_tag,
                                                                        ],
                                                                    },
                                                                  )
                                                                : null,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsx(aa, {
                                                        size: 15,
                                                        strokeWidth: 1.5,
                                                        className: `shrink-0 text-[var(--e-cyan)] transition-transform ${V ? "rotate-180" : ""}`,
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex flex-wrap content-center gap-1.5 border-t border-[var(--e-line)] p-2 sm:border-l sm:border-t-0 sm:px-3",
                                                    children: [
                                                      e.jsxs("button", {
                                                        type: "button",
                                                        disabled: j,
                                                        onClick: (X) => {
                                                          (X.stopPropagation(),
                                                            S(z, "regenerate"));
                                                        },
                                                        className: `inline-flex min-h-[1.75rem] items-center justify-center gap-1 border border-[var(--e-line-strong)] bg-[var(--e-black)] px-2 py-1.5 font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--e-soft)] transition hover:border-[var(--e-cyan)]/45 hover:text-[var(--e-cyan)] disabled:pointer-events-none disabled:opacity-40 ${T(z, "regenerate") ? "animate-pulse border-[var(--e-cyan)]/45" : ""}`,
                                                        children: [
                                                          T(z, "regenerate")
                                                            ? e.jsx(Sn, {
                                                                className:
                                                                  "size-3 shrink-0 animate-spin",
                                                                strokeWidth: 2,
                                                                "aria-hidden":
                                                                  !0,
                                                              })
                                                            : null,
                                                          T(z, "regenerate")
                                                            ? "运行中"
                                                            : "重生",
                                                        ],
                                                      }),
                                                      e.jsxs("button", {
                                                        type: "button",
                                                        disabled: j,
                                                        onClick: (X) => {
                                                          (X.stopPropagation(),
                                                            S(z, "append"));
                                                        },
                                                        className: `inline-flex min-h-[1.75rem] items-center justify-center gap-1 border border-[var(--e-line-strong)] bg-[var(--e-black)] px-2 py-1.5 font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--e-soft)] transition hover:border-[var(--e-cyan)]/45 hover:text-[var(--e-cyan)] disabled:pointer-events-none disabled:opacity-40 ${T(z, "append") ? "animate-pulse border-[var(--e-cyan)]/45" : ""}`,
                                                        children: [
                                                          T(z, "append")
                                                            ? e.jsx(Sn, {
                                                                className:
                                                                  "size-3 shrink-0 animate-spin",
                                                                strokeWidth: 2,
                                                                "aria-hidden":
                                                                  !0,
                                                              })
                                                            : null,
                                                          T(z, "append")
                                                            ? "运行中"
                                                            : "追加",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              V
                                                ? e.jsxs("div", {
                                                    className:
                                                      "space-y-5 px-3 py-4 sm:px-4 sm:py-5",
                                                    children: [
                                                      O.third
                                                        ? e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "mb-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--e-dim)]",
                                                                children:
                                                                  "BEFORE · 黑化前",
                                                              }),
                                                              e.jsx("div", {
                                                                className:
                                                                  "border border-[var(--e-line)] bg-[var(--e-black)]/50 px-3 py-3 sm:px-4",
                                                                children: e.jsx(
                                                                  dl,
                                                                  {
                                                                    text: O.third,
                                                                    className:
                                                                      "text-[13px] font-serif leading-[1.8] text-[var(--e-primary)] sm:text-[14px]",
                                                                  },
                                                                ),
                                                              }),
                                                            ],
                                                          })
                                                        : null,
                                                      O.first
                                                        ? e.jsxs("div", {
                                                            className:
                                                              "border-l-2 border-[var(--e-cyan)]/50 pl-3 sm:pl-4",
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "mb-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--e-cyan)]",
                                                                children:
                                                                  "FALLEN · 黑化后独白",
                                                              }),
                                                              e.jsx(dl, {
                                                                text: O.first,
                                                                className:
                                                                  "text-[12px] font-serif italic leading-[1.85] text-[var(--e-soft)] sm:text-[13px]",
                                                              }),
                                                            ],
                                                          })
                                                        : null,
                                                      K != null &&
                                                      K.long_profile
                                                        ? e.jsxs("div", {
                                                            className:
                                                              "border border-[var(--e-line-strong)] bg-[var(--e-deep)]",
                                                            children: [
                                                              e.jsxs("div", {
                                                                className:
                                                                  "flex items-center justify-between gap-2 border-b border-[var(--e-line)] px-2.5 py-1.5 sm:px-3",
                                                                children: [
                                                                  e.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--e-mint)]",
                                                                      children:
                                                                        "PLAYBOOK · EXPORT",
                                                                    },
                                                                  ),
                                                                  e.jsx(
                                                                    "button",