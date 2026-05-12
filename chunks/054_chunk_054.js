          ue("领取奖励失败，请稍后重试。");
        } finally {
          ke(!1);
        }
      }
    },
    Kt = async () => {
      var ot, st, $t;
      if (!(Te || $.status === "loading")) {
        (ke(!0),
          ue(""),
          P((Ft) => ({ ...Ft, status: "loading", errorText: "" })));
        try {
          const Ft =
              ((ot = o == null ? void 0 : o.getLatestMessages) == null
                ? void 0
                : ot.call(o, s == null ? void 0 : s.id)) || [],
            es =
              (await Promise.resolve(
                (st = o == null ? void 0 : o.getPersonaSnapshot) == null
                  ? void 0
                  : st.call(o, s),
              )) || {},
            At =
              (await Promise.resolve(
                ($t = o == null ? void 0 : o.getWorldBooksContext) == null
                  ? void 0
                  : $t.call(o, s, Ft),
              )) || [],
            Jt = {
              totalDays: Q,
              currentDayIndex: x,
              successDays: Ve,
              failedDays: ve,
              completionRate: Q > 0 ? Number((Ve / Q).toFixed(4)) : 0,
              failRate: Q > 0 ? Number((ve / Q).toFixed(4)) : 0,
              days: Array.isArray(h == null ? void 0 : h.days)
                ? h.days.map((Lt) => ({
                    dayIndex: Lt.dayIndex,
                    status: Lt.status || "pending",
                    totalTasks: Array.isArray(Lt.tasks) ? Lt.tasks.length : 0,
                    doneTasks: Array.isArray(Lt.tasks)
                      ? Lt.tasks.filter((Qt) => Qt.status === "done").length
                      : 0,
                  }))
                : [],
              seasonEvents: T.slice(0, 20).map((Lt) => ({
                dayIndex: Lt == null ? void 0 : Lt.dayIndex,
                title: Lt == null ? void 0 : Lt.title,
                matched: !!(Lt != null && Lt.matched),
                rewardType: (Lt == null ? void 0 : Lt.rewardType) || null,
              })),
              claimedRewards: ((F == null ? void 0 : F.inventory) || [])
                .filter(
                  (Lt) =>
                    (Lt == null ? void 0 : Lt.itemType) === "fragment" ||
                    (Lt == null ? void 0 : Lt.source) === "milestone",
                )
                .slice(0, 20)
                .map((Lt) => ({
                  title: Lt == null ? void 0 : Lt.title,
                  milestoneId: Lt == null ? void 0 : Lt.milestoneId,
                  rarity: Lt == null ? void 0 : Lt.rarity,
                })),
              fallbackScore: Math.max(
                0,
                Math.min(100, Math.round((Ve / Math.max(Q, 1)) * 100)),
              ),
            },
            Vt = await nJ({
              contact: s,
              getLatestMessages: o == null ? void 0 : o.getLatestMessages,
              getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
              callApi: o == null ? void 0 : o.callApi,
              seasonContext: Jt,
              personaSnapshot: es,
              worldBooks: At,
            }),
            qt = (Vt == null ? void 0 : Vt.report) || null;
          if (!qt) throw new Error("empty_report");
          P((Lt) => ({
            ...Lt,
            status: "ready",
            draft: {
              ...qt,
              generatedAt: Date.now(),
              localSnapshot: {
                totalDays: Q,
                currentDayIndex: x,
                successDays: Ve,
                failedDays: ve,
              },
            },
            errorText: "",
          }));
        } catch {
          (P((Ft) => ({
            ...Ft,
            status: "error",
            errorText: "画像报告生成失败，请手动重试。",
          })),
            ue("画像报告生成失败，请稍后重试。"));
        } finally {
          ke(!1);
        }
      }
    },
    fs = () => {
      const ot = $ == null ? void 0 : $.draft;
      if (!ot) {
        ue("请先生成画像报告，再进行保存。");
        return;
      }
      const st = {
        id: `dossier_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        seasonNo: "S04",
        title: "S04 关系画像",
        score: Number(ot.score) || 0,
        diary: String(ot.diary || ""),
        summary: String(ot.summary || ""),
        tags: Array.isArray(ot.tags) ? ot.tags : [],
        stats: ot.localSnapshot || {
          totalDays: Q,
          currentDayIndex: x,
          successDays: Ve,
          failedDays: ve,
        },
        savedAt: Date.now(),
      };
      (P(($t) => ({
        ...$t,
        savedArchives: [
          st,
          ...(Array.isArray($t == null ? void 0 : $t.savedArchives)
            ? $t.savedArchives
            : []),
        ].slice(0, 40),
        selectedArchiveId: st.id,
      })),
        Oe(h.days, "manual_settle"));
    },
    gt = () => {
      const ot = {
        totalDays: 7,
        customDaysEnabled: !1,
        themeType: "daily",
        customThemeText: "",
        difficulty: "easy",
      };
      (d("draft"),
        f(ot),
        m({
          decision: null,
          aiLines: [],
          displayText: "",
          counterProposal: null,
        }),
        g({ planId: "", displayText: "", days: [] }),
        y(1),
        b(0),
        w([]),
        A(null),
        C(null),
        j({
          dayIndex: null,
          fetchedAt: 0,
          status: "idle",
          event: null,
          resolved: null,
        }),
        I([]),
        B([]),
        Y(null),
        ce({}),
        se({}),
        D((st) => ({
          claimedMilestones: [],
          inventory: Array.isArray(st == null ? void 0 : st.inventory)
            ? st.inventory
            : [],
          lastClaimStory: null,
        })),
        P((st) => ({
          ...Cx(null),
          savedArchives: Array.isArray(st == null ? void 0 : st.savedArchives)
            ? st.savedArchives
            : [],
        })),
        E(null),
        ue(""));
    },
    ae = () => {
      if (!Xe || ut) return;
      let ot = Array.isArray(h.days) ? h.days : [];
      if (
        (["done", "failed", "abandoned_day"].includes(Xe.status) ||
          ((ot = ot.map((st) =>
            st.dayIndex === x ? { ...st, status: "failed" } : st,
          )),
          g((st) => ({ ...st, days: ot }))),
        x >= Q)
      ) {
        Oe(ot, "auto_end");
        return;
      }
      y((st) => Math.min(Q, st + 1));
    },
    nt = () => {
      (vt("abandoned_day"), ae());
    },
    It = () => {
      (d("abandoned"), Oe(h.days, "abandoned"));
    },
    Xt = () => {
      Oe(h.days, "manual_settle");
    },
    bs =
      c === "draft" ||
      c === "negotiating" ||
      c === "negotiation_rejected" ||
      c === "negotiation_countered",
    ss = c === "ready_to_generate",
    _s =
      c === "active" ||
      c === "completed_success" ||
      c === "completed_failed" ||
      c === "abandoned";
  l.useEffect(() => {
    !_s && M && E(null);
  }, [M, _s]);
  const qs = () =>
      e.jsxs("section", {
        className: "relative h-full bg-[#FDFCF8] overflow-hidden flex flex-col",
        children: [
          e.jsx("div", {
            className:
              "absolute top-24 right-[-16%] text-[150px] font-serif text-[#E5E0D8] opacity-25 pointer-events-none select-none -rotate-90 origin-bottom-right",
            children: "提案",
          }),
          e.jsx("div", {
            className:
              "absolute left-2 top-36 bottom-24 w-4 border-r border-[#E5E0D8] pointer-events-none",
          }),
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-6 relative z-10 shrink-0",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-start mb-6",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: t,
                    className:
                      "p-1.5 border border-[#2C2A29] rounded-full hover:bg-[#2C2A29] hover:text-[#FDFCF8] transition-colors",
                    children: e.jsx(un, {
                      className: "w-4 h-4",
                      strokeWidth: 2,
                    }),
                  }),
                  e.jsxs("div", {
                    className: "text-right",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 justify-end mb-1",
                        children: [
                          e.jsx(xc, { className: "w-3 h-3 text-[#A38F72]" }),
                          e.jsxs("p", {
                            className:
                              "text-[9px] text-[#8C857B] tracking-[0.28em] uppercase",
                            children: [
                              "状态：",
                              " ",
                              c === "negotiation_rejected"
                                ? "已拒绝"
                                : c === "negotiation_countered"
                                  ? "反建议"
                                  : c === "negotiating"
                                    ? "协商中"
                                    : "草稿",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex gap-1 justify-end",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-1.5 h-1.5 rounded-[1px] bg-[#A38F72] animate-pulse",
                          }),
                          e.jsx("div", {
                            className: "w-1.5 h-1.5 rounded-[1px] bg-[#E5E0D8]",
                          }),
                          e.jsx("div", {
                            className: "w-1.5 h-1.5 rounded-[1px] bg-[#E5E0D8]",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "relative border-b-2 border-double border-[#2C2A29] pb-5",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-[9px] tracking-[0.3em] font-medium text-[#A38F72] uppercase mb-2",
                    children: "配置流程",
                  }),
                  e.jsx("h1", {
                    className:
                      "text-3xl font-serif text-[#2C2A29] tracking-wide",
                    children: "赛季配置与协商",
                  }),
                  e.jsx("p", {
                    className:
                      "text-[11px] text-[#8C857B] mt-3 leading-relaxed font-serif italic",
                    children:
                      "为下一段旅程设定基调。将提案发送给对方，双方确认后启程。",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "px-6 pb-6 space-y-7 relative z-10 flex-1 overflow-y-auto",
            children: [
              !bs && W
                ? e.jsx("div", {
                    className:
                      "border border-rose-200 bg-rose-50 text-rose-700 text-xs px-3 py-2 rounded",
                    children: W,
                  })
                : null,
              e.jsxs("section", {
                className:
                  "relative p-5 border border-[#D4C4B7] bg-[#FDFCF8] shadow-[0_4px_15px_rgba(212,196,183,0.1)]",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -top-3 left-4 bg-[#FDFCF8] px-2 text-[9px] text-[#8C857B] tracking-widest uppercase",
                    children: "模块 01：时长",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4 mt-1",
                    children: [
                      e.jsx(Gy, { className: "w-4 h-4 text-[#A38F72]" }),
                      e.jsx("h3", {
                        className:
                          "text-[13px] font-serif text-[#2C2A29] tracking-widest",
                        children: "巡游周期设定",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-2 mb-4",
                    children: Lk.map((ot) =>
                      e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () =>
                            f((st) => ({
                              ...st,
                              totalDays: ot,
                              customDaysEnabled: !1,
                            })),
                          className: `py-3 border transition-all ${Q === ot && !u.customDaysEnabled ? "border-[#2C2A29] bg-[#2C2A29] text-[#FDFCF8]" : "border-[#E5E0D8] bg-[#F5F3ED] text-[#5A5550] hover:border-[#A38F72]"}`,
                          children: [
                            e.jsx("span", {
                              className: "text-base font-serif",
                              children: ot,
                            }),
                            e.jsx("span", {
                              className: "text-[10px] ml-1",
                              children: "天",
                            }),
                          ],
                        },
                        ot,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    className: "border-t border-dashed border-[#D4C4B7] pt-4",
                    children: [
                      e.jsxs("label", {
                        className:
                          "flex items-center gap-3 cursor-pointer group w-max",
                        children: [
                          e.jsx("div", {
                            onClick: () =>
                              f((ot) => ({
                                ...ot,
                                customDaysEnabled: !ot.customDaysEnabled,
                              })),
                            className: `w-3.5 h-3.5 border border-[#2C2A29] flex items-center justify-center ${u.customDaysEnabled ? "bg-[#2C2A29]" : "bg-transparent"}`,
                            children: u.customDaysEnabled
                              ? e.jsx(On, {
                                  className: "w-2.5 h-2.5 text-[#FDFCF8]",
                                  strokeWidth: 3,
                                })
                              : null,
                          }),
                          e.jsx("span", {
                            className:
                              "text-[11px] text-[#5A5550] tracking-widest uppercase",
                            children: "自定义（3~21）",
                          }),
                        ],
                      }),
                      u.customDaysEnabled
                        ? e.jsx("input", {
                            type: "number",
                            min: 3,
                            max: 21,
                            value: Q,
                            onChange: (ot) =>
                              f((st) => ({
                                ...st,
                                totalDays: rm(ot.target.value),
                              })),
                            className:
                              "mt-3 bg-transparent outline-none w-20 text-xl font-serif text-[#2C2A29] border-b border-[#2C2A29] pb-1",
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                className:
                  "relative p-5 border border-[#D4C4B7] bg-[#FDFCF8] shadow-[0_4px_15px_rgba(212,196,183,0.1)]",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -top-3 left-4 bg-[#FDFCF8] px-2 text-[9px] text-[#8C857B] tracking-widest uppercase",
                    children: "模块 02：主题",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4 mt-1",
                    children: [
                      e.jsx(Lu, { className: "w-4 h-4 text-[#A38F72]" }),
                      e.jsx("h3", {
                        className:
                          "text-[13px] font-serif text-[#2C2A29] tracking-widest",
                        children: "主线剧本方向",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex bg-[#F5F3ED] p-[2px] border border-[#E5E0D8]",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () =>
                          f((ot) => ({ ...ot, themeType: "daily" })),
                        className: `flex-1 py-2 text-[11px] tracking-widest transition-all ${u.themeType === "daily" ? "bg-[#FDFCF8] border border-[#2C2A29] shadow-[2px_2px_0px_#E5E0D8] text-[#2C2A29]" : "text-[#8C857B] border border-transparent"}`,
                        children: "日常向",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () =>
                          f((ot) => ({ ...ot, themeType: "custom" })),
                        className: `flex-1 py-2 text-[11px] tracking-widest transition-all ${u.themeType === "custom" ? "bg-[#FDFCF8] border border-[#2C2A29] shadow-[2px_2px_0px_#E5E0D8] text-[#2C2A29]" : "text-[#8C857B] border border-transparent"}`,
                        children: "自定义写定",
                      }),
                    ],
                  }),
                  u.themeType === "custom"
                    ? e.jsxs("div", {
                        className:
                          "mt-4 pt-4 border-t border-dashed border-[#D4C4B7]",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [
                              e.jsx(aL, {
                                className: "w-3 h-3 text-[#A38F72]",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-[#8C857B] tracking-widest uppercase",
                                children: "主题输入",
                              }),
                            ],
                          }),
                          e.jsx("textarea", {
                            className:
                              "w-full bg-[#F5F3ED]/70 border border-[#E5E0D8] px-3 py-2 text-sm font-serif text-[#2C2A29] leading-6 outline-none resize-none",
                            rows: 3,
                            placeholder: "请描绘你期望的主题...",
                            value: u.customThemeText,
                            onChange: (ot) =>
                              f((st) => ({
                                ...st,
                                customThemeText: ot.target.value,
                              })),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              e.jsxs("section", {
                className:
                  "relative p-5 border border-[#D4C4B7] bg-[#FDFCF8] shadow-[0_4px_15px_rgba(212,196,183,0.1)]",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -top-3 left-4 bg-[#FDFCF8] px-2 text-[9px] text-[#8C857B] tracking-widest uppercase",
                    children: "模块 03：强度",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4 mt-1",
                    children: [
                      e.jsx(Wr, { className: "w-4 h-4 text-[#A38F72]" }),
                      e.jsx("h3", {
                        className:
                          "text-[13px] font-serif text-[#2C2A29] tracking-widest",
                        children: "情感互动强度",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "relative border border-[#2C2A29] bg-[#FDFCF8] flex items-center justify-between p-1.5",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-1.5 bottom-1.5 w-[32%] bg-[#2C2A29] transition-transform duration-500 ease-out",
                        style: {
                          transform: `translateX(${u.difficulty === "easy" ? "2%" : u.difficulty === "normal" ? "106%" : "210%"})`,
                        },
                      }),
                      [
                        { id: "easy", label: "简单记录" },
                        { id: "normal", label: "进阶羁绊" },
                        { id: "hard", label: "深度共创" },
                      ].map((ot) =>
                        e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () =>
                              f((st) => ({ ...st, difficulty: ot.id })),
                            className: `flex-1 py-2 text-[10px] tracking-widest z-10 transition-colors ${u.difficulty === ot.id ? "text-[#FDFCF8] font-medium" : "text-[#8C857B]"}`,
                            children: ot.label,
                          },
                          ot.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              (Array.isArray(p.aiLines) && p.aiLines.length > 0) ||
              (c === "negotiation_countered" && p.counterProposal)
                ? e.jsxs("div", {
                    className:
                      "border border-amber-200 bg-amber-50 p-3 text-xs space-y-2",
                    children: [
                      e.jsx("p", {
                        className: "font-medium",
                        children: "TA 协商反馈",
                      }),
                      Array.isArray(p.aiLines) && p.aiLines.length > 0
                        ? e.jsx("div", {
                            className: "space-y-1",
                            children: p.aiLines.map((ot, st) =>
                              e.jsxs(
                                "p",
                                { children: ["- ", ot] },
                                `${ot}-${st}`,
                              ),
                            ),
                          })
                        : null,
                      c === "negotiation_countered" && p.counterProposal
                        ? e.jsx("button", {
                            type: "button",
                            className: "border border-[#2C2A29] px-2 py-1",
                            onClick: De,
                            children: "采纳 TA 建议并继续",
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          }),
          e.jsx("div", {
            className:
              "shrink-0 px-6 pt-4 pb-[calc(env(safe-area-inset-bottom,0px)+16px)] bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/95 to-[#FDFCF8]/70 z-20",
            children: e.jsx("button", {
              type: "button",
              onClick: Re,
              disabled: Te,
              className:
                "w-full relative p-1 bg-[#2C2A29] shadow-[0_8px_30px_rgba(44,42,41,0.25)] active:translate-y-1 transition-transform group disabled:opacity-60",
              children: e.jsxs("div", {
                className:
                  "border border-[#5A5550] border-dashed h-14 flex items-center justify-center gap-3 bg-[#2C2A29] group-hover:bg-[#353331] transition-colors",
                children: [
                  e.jsx(ri, { className: "w-4 h-4 text-[#A38F72]" }),
                  e.jsx("span", {
                    className:
                      "text-xs font-medium tracking-[0.3em] text-[#FDFCF8] uppercase",
                    children: Te
                      ? "协商中..."
                      : c === "negotiation_rejected"
                        ? "重新提交提案"
                        : "签署并发送邀请",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    Bs = () => {
      const ot =
          u.difficulty === "easy"
            ? "easy"
            : u.difficulty === "normal"
              ? "normal"
              : "hard",
        st = u.themeType === "daily" ? "日常向" : "自定义";
      return e.jsxs("section", {
        className: "relative h-full bg-[#FDFCF8] flex flex-col overflow-hidden",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 opacity-[0.15] pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(#A38F72 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            },
          }),
          e.jsx("div", {
            className:
              "absolute bottom-[-5%] left-[-10%] text-[250px] font-serif text-[#E5E0D8] opacity-20 pointer-events-none leading-none select-none rotate-12",
            children: "SYS",
          }),
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-6 relative z-10 shrink-0",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-start mb-10",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => d("draft"),
                    className:
                      "p-1.5 border border-[#2C2A29] rounded-full hover:bg-[#2C2A29] hover:text-[#FDFCF8] transition-colors",
                    children: e.jsx(un, {
                      className: "w-4 h-4",
                      strokeWidth: 2,
                    }),
                  }),
                  e.jsx("div", {
                    className: "text-right",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-2 justify-end mb-1",
                      children: [
                        e.jsx(Wr, {
                          className: "w-3 h-3 text-[#A38F72] animate-pulse",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[9px] text-[#8C857B] tracking-[0.2em] uppercase",
                          children: "Status: ready_to_generate",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "relative border-b-2 border-[#2C2A29] pb-6",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute right-0 top-[-20px] text-[70px] font-serif text-[#E5E0D8] opacity-40 pointer-events-none leading-none select-none",
                    children: "2)",
                  }),
                  e.jsxs("h2", {
                    className:
                      "text-[9px] tracking-[0.3em] font-medium text-[#A38F72] uppercase mb-2 flex items-center gap-2",
                    children: [
                      e.jsx(Z2, { className: "w-3 h-3" }),
                      " Execution Sequence",
                    ],
                  }),
                  e.jsx("h1", {
                    className:
                      "text-3xl font-serif text-[#2C2A29] tracking-wide",
                    children: "任务生成与执行",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex-1 px-6 flex flex-col justify-center relative z-10 pb-[calc(env(safe-area-inset-bottom,0px)+24px)] overflow-y-auto",
            children: [
              e.jsxs("div", {
                className:
                  "relative p-6 border border-[#2C2A29] bg-[#F5F3ED] shadow-[8px_8px_0px_#E5E0D8] mb-16",
                children: [
                  e.jsxs("div", {
                    className:
                      "absolute top-0 right-6 w-8 h-12 bg-[#2C2A29] flex flex-col items-center justify-end pb-2",
                    children: [
                      e.jsx("div", {
                        className: "w-4 h-[1px] bg-[#FDFCF8] mb-1",
                      }),
                      e.jsx("div", {
                        className: "w-2 h-[1px] bg-[#FDFCF8] mb-1",
                      }),
                      e.jsx("div", { className: "w-5 h-[1px] bg-[#FDFCF8]" }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -top-3 -left-3 px-2 py-0.5 border-2 border-green-800 text-green-800 text-[10px] tracking-widest uppercase font-bold rotate-[-10deg] bg-[#FDFCF8]",
                    children: "Verified Match",
                  }),
                  e.jsx("p", {
                    className:
                      "text-[10px] text-[#8C857B] tracking-widest uppercase mb-4 border-b border-dashed border-[#D4C4B7] pb-2",
                    children: "Target Configuration",
                  }),
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-end border-b border-[#E5E0D8] pb-1",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-[#5A5550]",
                            children: "周期时长 Duration",
                          }),
                          e.jsxs("span", {
                            className: "text-lg font-serif text-[#2C2A29]",
                            children: [Q, " 天"],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-end border-b border-[#E5E0D8] pb-1",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-[#5A5550]",
                            children: "剧本走向 Direction",
                          }),
                          e.jsx("span", {
                            className: "text-lg font-serif text-[#2C2A29]",
                            children: st,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-end border-b border-[#E5E0D8] pb-1",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-[#5A5550]",
                            children: "互动强度 Intensity",
                          }),
                          e.jsx("span", {
                            className:
                              "text-lg font-serif text-[#2C2A29] uppercase",
                            children: ot,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className:
                      "text-[10px] text-[#A38F72] mt-6 italic font-serif leading-relaxed",
                    children:
                      "参数已锁定。TA即将接管生成序列，为你们编织接下来的专属旅程。",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "relative w-full",
                children: [
                  e.jsx("div", {
                    className: "flex justify-center mb-4",
                    children: e.jsxs("div", {
                      className:
                        "relative w-12 h-12 flex items-center justify-center",
                      children: [
                        e.jsx(Mc, {
                          className: "w-6 h-6 text-[#A38F72] animate-pulse",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 border border-[#A38F72] rounded-full animate-[spin_4s_linear_infinite] border-t-transparent",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: at,
                    disabled: Te,
                    className:
                      "w-full relative p-1.5 bg-[#2C2A29] shadow-[0_15px_40px_rgba(44,42,41,0.2)] active:scale-95 transition-all group overflow-hidden disabled:opacity-60",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_2s_infinite]",
                      }),
                      e.jsxs("div", {
                        className:
                          "border border-[#5A5550] bg-[#1A1A1A] py-5 flex flex-col items-center justify-center relative z-10",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-sm font-medium tracking-[0.2em] text-[#FDFCF8] mb-1",
                            children: Te ? "生成中..." : "确认并生成赛季任务",
                          }),
                          e.jsx("span", {
                            className:
                              "text-[9px] tracking-widest text-[#A38F72] uppercase font-serif",
                            children: "Initialize System Sequence",
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
    Js = () => {
      const ot = Array.isArray(Xe == null ? void 0 : Xe.tasks) ? Xe.tasks : [],
        st =
          (s == null ? void 0 : s.nickname) ||
          (s == null ? void 0 : s.name) ||
          (s == null ? void 0 : s.displayName) ||
          "夏尔",
        $t =
          (Array.isArray(p == null ? void 0 : p.aiLines) && p.aiLines[0]
            ? String(p.aiLines[0]).trim()
            : "") ||
          (ut
            ? "本赛季已经归档，随时可以查看结算报告。"
            : "今天也一起把约定完成吧。"),
        Ft = ot[0] || null,
        es = ot[1] || null;
      return e.jsxs("section", {
        className: "relative h-full bg-[#FDFCF8] flex flex-col overflow-hidden",
        children: [
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-6 relative z-10",
            children: [
              e.jsxs("div", {
                className:
                  "flex justify-between items-end border-b border-[#2C2A29] pb-3 mb-6",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: t,
                    className:
                      "flex gap-[2px] items-end h-8 opacity-80 cursor-pointer hover:opacity-100 transition-opacity",
                    "aria-label": "返回",
                    children: [
                      e.jsx("div", {
                        className: "w-[2px] h-full bg-[#2C2A29]",
                      }),
                      e.jsx("div", {
                        className: "w-[4px] h-[80%] bg-[#2C2A29]",
                      }),
                      e.jsx("div", {
                        className: "w-[1px] h-full bg-[#2C2A29]",
                      }),
                      e.jsx("div", {
                        className: "w-[3px] h-[60%] bg-[#2C2A29]",
                      }),
                      e.jsx("div", {
                        className: "w-[2px] h-full bg-[#2C2A29]",
                      }),
                      e.jsx("div", {
                        className: "w-[5px] h-[90%] bg-[#2C2A29]",
                      }),
                      e.jsx("div", {
                        className: "w-[1px] h-full bg-[#2C2A29]",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "text-right",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] text-[#8C857B] tracking-widest",
                        children: "巡游档案编号",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs font-serif text-[#2C2A29] tracking-wider mt-1",
                        children: "04-8920",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -top-4 -right-2 text-[100px] font-serif text-[#E5E0D8] opacity-40 pointer-events-none select-none leading-none",
                    children: "04",
                  }),
                  e.jsxs("h2", {
                    className:
                      "text-[10px] tracking-[0.2em] text-[#A38F72] mb-2 flex items-center gap-2",
                    children: [
                      e.jsx(Xn, { className: "w-3 h-3" }),
                      " 赛季旅程",
                    ],
                  }),
                  e.jsxs("h1", {
                    className:
                      "text-4xl font-serif text-[#2C2A29] leading-[1.1] relative z-10",
                    children: [
                      "晨曦与微风",
                      e.jsx("br", {}),
                      e.jsx("span", {
                        className: "italic text-[#8C857B] text-3xl",
                        children: "的低语",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("main", {
            className:
              "flex-1 px-6 relative z-10 pb-40 space-y-6 overflow-y-auto",
            children: [
              W
                ? e.jsx("div", {
                    className:
                      "border border-rose-200 bg-rose-50 text-rose-700 text-xs px-3 py-2 rounded",
                    children: W,
                  })
                : null,
              e.jsx("div", {
                className:
                  "relative p-5 border border-[#E5E0D8] bg-[#FDFCF8] shadow-[2px_2px_0px_#E5E0D8]",
                children: e.jsxs("div", {
                  className: "flex gap-4 items-start relative",
                  children: [
                    e.jsx(Gl, {
                      className:
                        "w-6 h-6 text-[#E5E0D8] absolute -top-1 -left-1 rotate-180",
                    }),
                    e.jsxs("div", {
                      className: "flex-1 pt-2",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] text-[#A38F72] tracking-widest mb-2 font-medium",
                          children: "伴侣寄语",
                        }),
                        e.jsxs("p", {
                          className:
                            "text-sm leading-relaxed text-[#5A5550] font-serif italic relative z-10",
                          children: ["“", $t, "”"],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "relative w-12 h-12 flex-shrink-0 rounded-full border border-[#A38F72] bg-[#F5F3ED] flex items-center justify-center text-xs",
                      children: String(st).slice(0, 1),
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                onClick: () => E("task"),
                className:
                  "relative bg-[#FDFCF8] border border-[#D4C4B7] shadow-[0_8px_20px_rgba(212,196,183,0.2)] group cursor-pointer transition-transform active:scale-[0.98]",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-[56px] -left-3 w-6 h-6 bg-[#FDFCF8] border-r border-[#D4C4B7] rounded-full z-10",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-[56px] -right-3 w-6 h-6 bg-[#FDFCF8] border-l border-[#D4C4B7] rounded-full z-10",
                  }),
                  e.jsxs("div", {
                    className:
                      "p-5 border-b border-dashed border-[#D4C4B7] flex justify-between items-center relative",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] tracking-widest text-[#8C857B] mb-1",
                            children: "中期目标",
                          }),
                          e.jsx("h3", {
                            className: "text-lg font-serif text-[#2C2A29]",
                            children: "本周任务",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "text-center px-3 py-1 border border-[#2C2A29] rounded-[4px]",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[8px] tracking-widest text-[#2C2A29] border-b border-[#2C2A29] pb-0.5 mb-0.5 uppercase",
                            children: "Day",
                          }),
                          e.jsx("p", {
                            className:
                              "text-lg font-serif text-[#2C2A29] leading-none",
                            children: String(x).padStart(2, "0"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-5 pt-6 space-y-4 relative bg-[#F5F3ED]/30",
                    children: [
                      Ft
                        ? e.jsxs("div", {
                            className: "flex items-start gap-4 relative z-10",
                            children: [
                              Ft.status === "done"
                                ? e.jsx("div", {
                                    className:
                                      "w-4 h-4 mt-0.5 bg-[#2C2A29] rotate-45 flex items-center justify-center",
                                    children: e.jsx(On, {
                                      className:
                                        "w-3 h-3 text-[#FDFCF8] -rotate-45",
                                      strokeWidth: 3,
                                    }),
                                  })
                                : e.jsx("div", {
                                    className:
                                      "w-4 h-4 mt-0.5 border border-[#2C2A29] rotate-45 bg-[#FDFCF8]",
                                  }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: `text-sm ${Ft.status === "done" ? "text-[#8C857B] line-through" : "text-[#2C2A29]"}`,
                                    children: Ft.title,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] text-[#A38F72] mt-1 tracking-wider",
                                    children: Ft.status || "pending",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      es
                        ? e.jsxs("div", {
                            className: "flex items-start gap-4 relative z-10",
                            children: [
                              es.status === "done"
                                ? e.jsx("div", {
                                    className:
                                      "w-4 h-4 mt-0.5 bg-[#2C2A29] rotate-45 flex items-center justify-center",
                                    children: e.jsx(On, {
                                      className:
                                        "w-3 h-3 text-[#FDFCF8] -rotate-45",
                                      strokeWidth: 3,
                                    }),
                                  })
                                : e.jsx("div", {
                                    className:
                                      "w-4 h-4 mt-0.5 border border-[#2C2A29] rotate-45 bg-[#FDFCF8]",
                                  }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className: `text-sm ${es.status === "done" ? "text-[#8C857B] line-through" : "text-[#2C2A29] font-medium"}`,
                                    children: es.title,
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2 mt-2",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "px-2 py-0.5 bg-[#E5E0D8]/50 text-[#5A5550] text-[10px] tracking-widest rounded-sm border border-[#D4C4B7]",
                                        children: es.status || "pending",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[11px] text-[#A38F72] italic",
                                        children: "点击进入任务...",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      e.jsx("div", {
                        className: "pt-2 flex justify-end",
                        children: e.jsxs("span", {
                          className:
                            "text-[10px] text-[#8C857B] flex items-center gap-1 group-hover:text-[#2C2A29] transition-colors font-medium",
                          children: [
                            "查看全部任务 ",
                            e.jsx(so, { className: "w-3 h-3" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-4",
                children: [
                  e.jsx("div", {
                    onClick: () => E("event"),
                    className:
                      "flex-1 border border-[#2C2A29] bg-[#2C2A29] p-1 relative cursor-pointer active:scale-95 transition-transform",
                    children: e.jsxs("div", {
                      className:
                        "border border-[#5A5550] h-full p-4 flex flex-col justify-between bg-[#2C2A29] relative overflow-hidden",
                      children: [
                        e.jsx(Bi, {
                          className:
                            "absolute -right-4 -bottom-4 w-20 h-20 text-white/5",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-[10px] text-[#A38F72] tracking-widest mb-1 border-b border-[#5A5550] inline-block pb-1",
                              children: [
                                "状态：",
                                (S == null ? void 0 : S.status) === "loading"
                                  ? "生成中"
                                  : (S == null ? void 0 : S.status) ===
                                      "resolved"
                                    ? "已结算"
                                    : (S == null ? void 0 : S.status) ===
                                        "ready"
                                      ? "可参与"
                                      : "待生成",
                              ],
                            }),
                            e.jsx("h4", {
                              className: "text-sm text-[#FDFCF8] font-serif",
                              children: "赛季事件",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mt-6",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] text-[#E5E0D8] tracking-wider",
                              children: "进入阶段事件",
                            }),
                            e.jsx(so, { className: "w-3 h-3 text-[#E5E0D8]" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    onClick: () => E("showroom"),
                    className:
                      "flex-1 border border-[#D4C4B7] bg-[#F5F3ED] p-4 relative shadow-[2px_2px_0px_#D4C4B7] cursor-pointer active:scale-95 transition-transform hover:bg-[#FDFCF8] overflow-hidden group",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute -right-4 -bottom-4 w-16 h-16 bg-[#E5E0D8] rounded-full opacity-50 group-hover:scale-[2] transition-transform duration-700 ease-out",
                      }),
                      e.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          e.jsx(Ko, {
                            className: "w-5 h-5 text-[#2C2A29] mb-3",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[9px] text-[#8C857B] tracking-widest mb-1 uppercase",
                            children: "Vault",
                          }),
                          e.jsx("h4", {
                            className: "text-sm text-[#2C2A29] font-serif mb-4",
                            children: "典藏陈列室",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-1.5 mt-auto",
                            children: [
                              e.jsxs("span", {
                                className:
                                  "px-1.5 py-0.5 bg-[#2C2A29] text-[#FDFCF8] text-[8px] tracking-widest border border-[#2C2A29]",
                                children: ["标本 ", Fe.length],
                              }),
                              e.jsx("span", {
                                className:
                                  "px-1.5 py-0.5 border border-[#2C2A29] text-[#2C2A29] text-[8px] tracking-widest",
                                children: "档案 3",
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
          e.jsxs("div", {
            className:
              "absolute bottom-0 left-0 right-0 z-20 pointer-events-none",
            children: [
              e.jsx("div", {
                className:
                  "h-32 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/90 to-transparent",
              }),
              e.jsxs("div", {
                className:
                  "absolute bottom-6 left-6 right-6 flex gap-3 pointer-events-auto",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => Se && E("reward"),
                    disabled: !Se,
                    className: `flex-1 relative p-0.5 shadow-[0_4px_10px_rgba(0,0,0,0.05)] ${Se ? "bg-gradient-to-b from-[#E5E0D8] to-[#D4C4B7]" : "bg-gradient-to-b from-[#EFECE5] to-[#E5E0D8] opacity-70"}`,
                    children: [
                      Se
                        ? e.jsx("span", {
                            className:
                              "absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500",
                          })
                        : null,
                      e.jsxs("div", {
                        className:
                          "bg-[#FDFCF8] h-12 flex items-center justify-center gap-2 px-2 border border-[#FDFCF8]",
                        children: [
                          e.jsx(Nl, { className: "w-4 h-4 text-[#8C857B]" }),
                          e.jsx("span", {
                            className:
                              "text-[11px] font-medium text-[#5A5550] tracking-wider",
                            children: Se ? "领取阶段奖励" : "暂无可领奖励",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => E("report"),
                    className:
                      "flex-[1.2] relative p-0.5 bg-[#2C2A29] shadow-[0_8px_20px_rgba(44,42,41,0.2)]",
                    children: e.jsxs("div", {
                      className:
                        "border border-[#5A5550] h-12 flex flex-col items-center justify-center leading-none",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[13px] font-serif text-[#FDFCF8] tracking-[0.1em] mb-1",
                          children: "赛季结算",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[9px] text-[#A38F72] tracking-widest",
                          children: "生成关系画像",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    Xs = () => {
      var st, $t;
      const ot = Array.isArray(Xe == null ? void 0 : Xe.tasks) ? Xe.tasks : [];
      if (u.themeType === "custom") {
        const Ft = vc(ot),
          es = ne,
          At = le,
          Jt = ie,
          Vt = je,
          qt = xe,
          Lt = ye,
          Qt = R,
          js = x,
          cs =
            Ft.find((ts) => (ts == null ? void 0 : ts.assignedTo) === "ai") ||
            Ft[0] ||
            null,
          Ne =
            Ft.find((ts) => (ts == null ? void 0 : ts.assignedTo) === "user") ||
            Ft[1] ||
            null,
          Je = (Ne && (z == null ? void 0 : z[Ne.taskId])) || "",
          St = (cs && (U == null ? void 0 : U[cs.taskId])) || "",
          Be = (Ne && (pe == null ? void 0 : pe[Ne.taskId])) || "",
          Ke = (cs && (Z == null ? void 0 : Z[cs.taskId])) || null,
          Nt =
            !!cs &&
            !!String(Ke || "").trim() &&
            !!String(St || "").trim() &&
            !!String(Je || "").trim(),
          bt = (ts) => {
            Ne && O((ys) => ({ ...(ys || {}), [Ne.taskId]: ts }));
          },
          ns = (ts) => {
            cs && ce((ys) => ({ ...(ys || {}), [cs.taskId]: ts }));
          },
          Ge = (ts) => {
            cs &&
              K((ys) => ({
                ...(ys || {}),
                [cs.taskId]: ts === "soft" ? "soft_pass" : ts,
              }));
          },
          Le = oe,
          _e = {
            name:
              (s == null ? void 0 : s.nickname) ||
              (s == null ? void 0 : s.name) ||
              "夏尔",
            avatar:
              (s == null ? void 0 : s.avatar) ||
              (s == null ? void 0 : s.avatarUrl) ||
              "",
          },
          yt =
            (($t =
              (st = o == null ? void 0 : o.getRoleBoundUser) == null
                ? void 0
                : st.call(o, s == null ? void 0 : s.id)) == null
              ? void 0
              : $t.avatar) || "",
          rt = {
            aiTask: {
              title: (cs == null ? void 0 : cs.title) || "？",
              desc: (cs == null ? void 0 : cs.description) || Vt || "？",
              userComment: String(St || ""),
              status: Ke === "pass" ? "pass" : null,
            },
            userTask: {
              title: (Ne == null ? void 0 : Ne.title) || "？",
              desc: (Ne == null ? void 0 : Ne.description) || "？",
              userEvidence: String(
                (z == null ? void 0 : z[Ne == null ? void 0 : Ne.taskId]) || "",
              ),
              taComment: String(Be || ""),
            },
          },
          ze = !!String(Je || "").trim(),
          lt = () => {
            x > 1 && (y((ts) => ts - 1), R("ai"));
          },
          it = () => {
            x < Pe && (y((ts) => ts + 1), R("ai"));
          },
          Ht = (ts) => jt(ts),
          is = () => Gt(),
          os = () =>
            e.jsxs("div", {
              className:
                "absolute inset-0 z-10 flex flex-col bg-transparent animate-in fade-in duration-500",
              children: [
                e.jsxs("header", {
                  className: "px-6 pt-14 pb-4 relative z-20",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-8",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: lt,
                          className: `w-8 h-8 rounded-full border flex items-center justify-center transition-colors bg-[#FDFCF8] z-10 ${js > 1 ? "border-[#2C2A29] text-[#2C2A29] hover:bg-[#2C2A29] hover:text-[#FDFCF8]" : "border-[#D4C4B7] text-[#D4C4B7] cursor-not-allowed"}`,
                          children: e.jsx(un, { className: "w-4 h-4" }),
                        }),
                        e.jsxs("div", {
                          className: "text-center flex flex-col items-center",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-1",
                              children: [
                                e.jsx(Wy, {
                                  className: "w-3.5 h-3.5 text-[#A38F72]",
                                }),
                                e.jsxs("span", {
                                  className:
                                    "text-[10px] tracking-[0.3em] text-[#A38F72] uppercase font-mono",
                                  children: [
                                    "Day ",
                                    String(js).padStart(2, "0"),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () => E(null),
                              className:
                                "text-2xl font-serif text-[#2C2A29] tracking-widest hover:opacity-80 transition-opacity",
                              "aria-label": "返回",
                              children: "双人审判庭",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: it,
                          className: `w-8 h-8 rounded-full border flex items-center justify-center transition-colors bg-[#FDFCF8] z-10 ${x < Pe ? "border-[#2C2A29] text-[#2C2A29] hover:bg-[#2C2A29] hover:text-[#FDFCF8]" : "border-[#D4C4B7] text-[#D4C4B7] cursor-not-allowed"}`,
                          disabled: x >= Pe,
                          children: e.jsx(Kn, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-[#F5F3ED] border border-[#D4C4B7] p-1.5 shadow-inner relative flex",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-[#2C2A29] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_2px_8px_rgba(0,0,0,0.2)]",
                          style: {
                            transform:
                              Lt === "ai"
                                ? "translateX(0)"
                                : "translateX(calc(100% + 12px))",
                          },
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => Qt("ai"),
                          className: `flex-1 py-3 text-[11px] tracking-[0.2em] uppercase font-medium z-10 transition-colors duration-500 flex items-center justify-center gap-2 ${Lt === "ai" ? "text-[#FDFCF8]" : "text-[#8C857B] hover:text-[#2C2A29]"}`,
                          children: [
                            e.jsx(HI, { className: "w-3.5 h-3.5" }),
                            " 审阅 TA 的卷宗",
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => Qt("me"),
                          className: `flex-1 py-3 text-[11px] tracking-[0.2em] uppercase font-medium z-10 transition-colors duration-500 flex items-center justify-center gap-2 ${Lt === "me" ? "text-[#FDFCF8]" : "text-[#8C857B] hover:text-[#2C2A29]"}`,
                          children: [
                            e.jsx(ml, { className: "w-3.5 h-3.5" }),
                            " 录入我的供词",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex-1 relative z-10 overflow-hidden",
                  children: e.jsxs("div", {
                    className:
                      "absolute top-0 bottom-12 flex w-[200%] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    style: {
                      transform:
                        Lt === "ai" ? "translateX(0)" : "translateX(-50%)",
                    },
                    children: [
                      e.jsx("div", {
                        className: "w-1/2 px-6 h-full flex flex-col pt-2 pb-6",
                        children: e.jsxs("div", {
                          className:
                            "flex-1 bg-[#FDFCF8] border-2 border-[#2C2A29] shadow-[8px_8px_0px_#D4C4B7] relative flex flex-col",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#2C2A29] rounded-b-md flex justify-center z-20",
                              children: e.jsx("div", {
                                className: "w-8 h-[2px] bg-[#FDFCF8]/40 mt-1",
                              }),
                            }),
                            e.jsx("div", {
                              className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none transition-all duration-300 ${Le && Lt === "ai" ? "scale-150 opacity-100" : "scale-100 opacity-100"} ${!Ke && !Le ? "hidden" : ""}`,
                              children: e.jsxs("div", {
                                className: `border-[3px] p-3 rotate-[-15deg] backdrop-blur-sm bg-[#FDFCF8]/80 shadow-2xl ${Ke === "pass" || rt.aiTask.status === "pass" ? "border-green-800 text-green-800" : Ke === "soft_pass" ? "border-[#A38F72] text-[#A38F72]" : "border-red-900 text-red-900"}`,
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-3xl font-bold font-serif tracking-[0.2em] uppercase leading-none border-b-2 border-current pb-1 mb-1 block text-center",
                                    children:
                                      Ke === "pass" ||
                                      rt.aiTask.status === "pass"
                                        ? "核准通过"
                                        : Ke === "soft_pass"
                                          ? "勉强及格"
                                          : "已驳回",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[8px] tracking-[0.4em] uppercase font-mono block text-center",
                                    children: "Arbiter's Seal",
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "p-5 border-b-2 border-dashed border-[#D4C4B7] relative bg-[#F5F3ED]/50 pt-8",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "absolute top-4 right-4 text-right",
                                  children: [
                                    e.jsx(xc, {
                                      className:
                                        "w-8 h-8 text-[#2C2A29] opacity-70 ml-auto mb-1",
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-[7px] text-[#2C2A29] font-mono tracking-widest uppercase",
                                      children: [
                                        "ID: ",
                                        String(js).padStart(2, "0"),
                                        "-A",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-[9px] text-[#A38F72] tracking-[0.2em] mb-2 uppercase font-mono flex items-center gap-1.5",
                                  children: [
                                    e.jsx(Ko, { className: "w-3 h-3" }),
                                    " 卷宗档案 A",
                                  ],
                                }),
                                e.jsx("h3", {
                                  className:
                                    "text-lg font-serif text-[#2C2A29] leading-tight w-[70%]",
                                  children: rt.aiTask.title,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "p-5 flex-1 flex flex-col",
                              children: [
                                e.jsxs("div", {
                                  className: "mb-6 relative",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute left-0 top-1 bottom-1 w-[2px] bg-[#A38F72]",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[12px] text-[#5A5550] leading-relaxed pl-4 font-light",
                                      children: rt.aiTask.desc,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex-1 bg-[#FDFCF8] border border-[#E5E0D8] p-4 relative shadow-inner",
                                  children: [
                                    e.jsx(Gl, {
                                      className:
                                        "absolute top-3 right-3 w-8 h-8 text-[#E5E0D8] rotate-180 pointer-events-none",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 mb-3 border-b border-[#E5E0D8] pb-2",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-6 h-6 border border-[#A38F72] p-[1px] rounded-full",
                                          children: _e.avatar
                                            ? e.jsx("img", {
                                                src: _e.avatar,
                                                className:
                                                  "w-full h-full object-cover rounded-full filter sepia-[0.3]",
                                                alt: "TA",
                                              })
                                            : null,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[9px] text-[#8C857B] tracking-widest uppercase",
                                          children: "你的审判评语",
                                        }),
                                      ],
                                    }),
                                    e.jsx("textarea", {
                                      className:
                                        "w-full min-h-[92px] bg-transparent text-[13px] text-[#2C2A29] font-serif italic leading-[1.8] relative z-10 outline-none resize-none placeholder-[#A38F72]/50",
                                      placeholder:
                                        "写下你对 TA 任务完成情况的评语...",
                                      value: rt.aiTask.userComment,
                                      onChange: (ts) => ns(ts.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "p-4 bg-[#2C2A29] mt-auto",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[8px] text-[#A38F72] tracking-[0.3em] font-mono uppercase mb-3 text-center border-b border-[#5A5550] pb-2",
                                  children: "裁定控制台",
                                }),
                                Ke
                                  ? e.jsxs("div", {
                                      className:
                                        "h-12 bg-[#1A1A1A] border border-[#5A5550] text-center flex items-center justify-center gap-2",
                                      children: [
                                        e.jsx(Gm, {
                                          className: "w-4 h-4 text-[#A38F72]",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] text-[#E5E0D8] tracking-[0.2em] uppercase font-mono",
                                          children: "已核准并封存",
                                        }),
                                      ],
                                    })
                                  : e.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: () => Ht(() => Ge("reject")),
                                          className:
                                            "w-12 h-12 flex-shrink-0 bg-transparent text-red-400 border border-red-900/50 hover:bg-red-900/20 transition-colors flex justify-center items-center",
                                          children: e.jsx(Ts, {
                                            className: "w-5 h-5",
                                          }),
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: () =>
                                            Ht(() => Ge("soft_pass")),
                                          className:
                                            "flex-1 h-12 bg-transparent text-[#E5E0D8] text-[10px] tracking-widest uppercase border border-[#5A5550] hover:bg-[#5A5550]/30 transition-colors flex justify-center items-center gap-1",
                                          children: [
                                            e.jsx(PE, {
                                              className: "w-3.5 h-3.5",
                                            }),
                                            " 勉强及格",
                                          ],
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: () => Ht(() => Ge("pass")),
                                          className:
                                            "flex-[1.5] h-12 bg-[#FDFCF8] text-[#2C2A29] text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#E5E0D8] transition-colors flex justify-center items-center gap-1 shadow-[0_4px_10px_rgba(0,0,0,0.3)]",
                                          children: [
                                            e.jsx(On, { className: "w-4 h-4" }),
                                            " 完美通过",
                                          ],
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "w-1/2 px-6 h-full flex flex-col pt-2 pb-6",
                        children: e.jsxs("div", {
                          className:
                            "flex-1 bg-[#F5F3ED] border-2 border-[#A38F72] shadow-[8px_8px_0px_#D4C4B7] relative flex flex-col",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#A38F72] rounded-b-md flex justify-center z-20",
                              children: e.jsx("div", {
                                className: "w-8 h-[2px] bg-[#FDFCF8]/40 mt-1",
                              }),
                            }),
                            e.jsx("div", {
                              className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none transition-all duration-300 ${Le && Lt === "me" ? "scale-150 opacity-100" : "scale-100 opacity-100"} ${!ze && !Le ? "hidden" : ""}`,
                              children: e.jsxs("div", {
                                className:
                                  "border-[3px] border-[#2C2A29] p-3 rotate-[10deg] backdrop-blur-sm bg-[#FDFCF8]/90 shadow-2xl text-[#2C2A29]",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-3xl font-bold font-serif tracking-[0.2em] uppercase leading-none border-b-2 border-[#2C2A29] pb-1 mb-1 block text-center",
                                    children: "已递交",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[8px] tracking-[0.4em] uppercase font-mono block text-center",
                                    children: "等待 TA 裁决",
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "p-5 border-b-2 border-dashed border-[#A38F72]/40 relative bg-[#FDFCF8]/50 pt-8",
                              children: [
                                e.jsxs("p", {
                                  className:
                                    "text-[9px] text-[#A38F72] tracking-[0.2em] mb-2 uppercase font-mono flex items-center gap-1.5",
                                  children: [
                                    e.jsx(X2, { className: "w-3 h-3" }),
                                    " 供词卷宗 B",
                                  ],
                                }),
                                e.jsx("h3", {
                                  className:
                                    "text-lg font-serif text-[#2C2A29] leading-tight w-[75%]",
                                  children: rt.userTask.title,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "p-5 flex-1 flex flex-col",
                              children: [
                                e.jsx("div", {
                                  className: "mb-4",
                                  children: e.jsx("p", {
                                    className:
                                      "text-[12px] text-[#5A5550] leading-relaxed font-light",
                                    children: rt.userTask.desc,
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "mb-4 border border-[#D4C4B7] bg-[#FDFCF8] p-3 relative shadow-inner",
                                  children: [
                                    e.jsx(Gl, {
                                      className:
                                        "absolute top-2 right-2 w-6 h-6 text-[#E5E0D8] rotate-180 pointer-events-none",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[9px] tracking-[0.2em] text-[#8C857B] uppercase mb-2",
                                      children: "TA 对你任务的评语",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[13px] text-[#2C2A29] font-serif italic leading-[1.8] min-h-[44px]",
                                      children:
                                        rt.userTask.taComment ||
                                        "TA 尚未给出评语",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex-1 relative mt-2 border border-[#D4C4B7] bg-[#FDFCF8] shadow-inner",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute top-0 left-0 w-8 h-8 border-r border-b border-[#D4C4B7] bg-[#F5F3ED] flex items-center justify-center",
                                      children: e.jsx(Bi, {
                                        className: "w-4 h-4 text-[#A38F72]",
                                      }),
                                    }),
                                    e.jsx("textarea", {
                                      className:
                                        "absolute inset-0 w-full h-full bg-transparent pl-4 pr-3 pt-12 pb-4 text-[14px] text-[#2C2A29] leading-[32px] outline-none resize-none placeholder-[#A38F72]/50 font-serif z-10",
                                      placeholder:
                                        "在此录入你完成 TA 任务的证词...",
                                      value: Je,
                                      onChange: (ts) => bt(ts.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "p-4 bg-[#FDFCF8] border-t-2 border-[#A38F72] mt-auto",
                              children: e.jsxs("button", {
                                type: "button",
                                onClick: () => {
                                  cs && Ht(() => me(cs));
                                },
                                disabled: !Nt,
                                className: `w-full h-12 text-[#FDFCF8] text-[11px] font-medium tracking-[0.3em] uppercase transition-all shadow-[0_4px_15px_rgba(163,143,114,0.3)] flex items-center justify-center gap-2 ${Nt ? "bg-gradient-to-r from-[#A38F72] to-[#8C857B] hover:opacity-90 active:scale-95" : "bg-[#C9BCAA] cursor-not-allowed opacity-70"}`,
                                children: [
                                  e.jsx(ml, { className: "w-4 h-4" }),
                                  " 提交审判并请求 TA 裁决你",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "absolute bottom-0 left-0 right-0 bg-[#2C2A29] flex justify-between items-center px-6 py-4 z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-2 h-2 rounded-full bg-[#A38F72] animate-pulse",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[9px] font-mono tracking-[0.3em] text-[#FDFCF8] uppercase",
                          children: "审判序列运行中",
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => At("draft"),
                      className:
                        "text-[10px] text-[#2C2A29] bg-[#FDFCF8] tracking-widest hover:bg-[#E5E0D8] transition-colors border border-[#FDFCF8] px-4 py-1.5 uppercase flex items-center gap-1.5 font-bold shadow-[2px_2px_0px_#A38F72] active:translate-y-0.5",
                      children: [
                        e.jsx(ml, { className: "w-3 h-3" }),
                        " 发布新任务",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          as = () =>
            e.jsxs("div", {
              className:
                "absolute inset-0 z-50 flex flex-col bg-[#FDFCF8] animate-in fade-in slide-in-from-bottom-8 duration-500",
              children: [
                e.jsx("div", {
                  className:
                    "absolute top-[10%] right-[-10%] text-[140px] font-serif text-[#E5E0D8] opacity-30 pointer-events-none leading-none select-none z-0 rotate-12",
                  children: "DRAFT",
                }),
                e.jsxs("header", {
                  className:
                    "px-6 pt-14 pb-4 border-b-2 border-[#2C2A29] relative z-20 flex items-center justify-between",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => At("dossier"),
                      className:
                        "p-1.5 border border-[#2C2A29] rounded-full hover:bg-[#2C2A29] hover:text-[#FDFCF8] transition-colors",
                      children: e.jsx(un, {
                        className: "w-4 h-4",
                        strokeWidth: 2,
                      }),
                    }),
                    e.jsxs("div", {
                      className: "text-right",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[9px] tracking-[0.3em] font-mono text-[#A38F72] uppercase mb-1",
                          children: "Mutual Trial",
                        }),
                        e.jsx("h1", {
                          className:
                            "text-xl font-serif text-[#2C2A29] tracking-widest",
                          children: "拟定今日指令",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex-1 overflow-y-auto px-6 py-8 relative z-10 flex flex-col",
                  children: [
                    e.jsxs("div", {
                      className: "mb-6 flex items-start justify-between",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-[10px] text-[#8C857B] tracking-widest uppercase mb-2 flex items-center gap-1",
                              children: [
                                e.jsx(Bi, { className: "w-3 h-3" }),
                                " Target Subject",
                              ],
                            }),
                            e.jsx("h2", {
                              className: "text-2xl font-serif text-[#2C2A29]",
                              children: "向 TA 派发试炼",
                            }),
                          ],
                        }),
                        e.jsx(xc, {
                          className: "w-8 h-8 text-[#A38F72] opacity-60",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex-1 flex flex-col relative border border-[#D4C4B7] bg-[#FDFCF8] shadow-[4px_4px_0px_#E5E0D8]",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-0 w-8 h-8 border-r border-b border-[#D4C4B7] bg-[#F5F3ED] flex items-center justify-center",
                          children: e.jsx(ml, {
                            className: "w-4 h-4 text-[#A38F72]",
                          }),
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-0 right-0 px-2 py-1 bg-[#2C2A29] text-[#FDFCF8] text-[8px] tracking-[0.2em] font-mono uppercase",
                          children: "Drafting Mode",
                        }),
                        e.jsxs("div", {
                          className:
                            "relative flex-1 mt-10 border-t border-dashed border-[#D4C4B7]",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-transparent opacity-40 pointer-events-none",
                              style: {
                                backgroundImage:
                                  "repeating-linear-gradient(transparent, transparent 31px, #A38F72 32px)",
                              },
                            }),
                            e.jsx("textarea", {
                              className:
                                "absolute inset-0 w-full h-full bg-transparent pl-5 pr-4 pt-1 pb-4 text-[15px] text-[#2C2A29] leading-[32px] outline-none resize-none placeholder-[#A38F72]/50 font-serif z-10",
                              placeholder: "请写下你希望 TA 今天完成的任务...",
                              value: Vt,
                              onChange: (ts) => qt(ts.target.value),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "mt-8 border-t-2 border-[#2C2A29] pt-6",
                      children: e.jsxs("button", {
                        type: "button",
                        onClick: is,
                        className:
                          "w-full py-4 bg-[#2C2A29] text-[#FDFCF8] text-[12px] font-medium tracking-[0.3em] uppercase flex items-center justify-center gap-2 hover:bg-[#3D3A38] transition-colors shadow-[0_8px_20px_rgba(44,42,41,0.2)] active:translate-y-1",
                        children: [
                          e.jsx(X2, { className: "w-4 h-4" }),
                          " 封存指令并下达",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          vs = () => {
            var ts;
            return e.jsxs("div", {
              className:
                "absolute inset-0 z-50 flex flex-col bg-[#F5F3ED] animate-in slide-in-from-right-8 duration-500",
              children: [
                e.jsx("header", {
                  className:
                    "px-6 pt-14 pb-4 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-[#D4C4B7] sticky top-0 z-30",
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => At("dossier"),
                        className:
                          "p-1 -ml-1 text-[#8C857B] hover:text-[#2C2A29]",
                        children: e.jsx(un, {
                          className: "w-6 h-6",
                          strokeWidth: 1.5,
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "w-8 h-8 rounded-full border border-[#A38F72] p-0.5 overflow-hidden bg-[#FDFCF8]",
                        children: _e.avatar
                          ? e.jsx("img", {
                              src: _e.avatar,
                              className:
                                "w-full h-full object-cover rounded-full filter sepia-[0.2]",
                              alt: "TA",
                            })
                          : null,
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-sm font-serif text-[#2C2A29]",
                            children: _e.name,
                          }),
                          e.jsx("p", {
                            className:
                              "text-[9px] text-[#8C857B] tracking-widest uppercase font-mono mt-0.5",
                            children: "Dual Trial Active",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "flex-1 p-5 overflow-y-auto space-y-6 relative z-10 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-start justify-end gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "bg-[#2C2A29] border border-[#2C2A29] p-3.5 rounded-tl-xl rounded-b-xl rounded-tr-sm shadow-[4px_4px_0px_rgba(212,196,183,0.5)] max-w-[75%]",
                          children: e.jsx("p", {
                            className:
                              "text-[13px] text-[#FDFCF8] leading-relaxed font-serif",
                            children: Vt || "？",
                          }),
                        }),
                        e.jsx("div", {
                          className:
                            "w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#D4C4B7]",
                          children: yt
                            ? e.jsx("img", {
                                src: yt,
                                className:
                                  "w-full h-full object-cover filter contrast-125 grayscale-[20%]",
                                alt: "Me",
                              })
                            : null,
                        }),
                      ],
                    }),
                    Jt === "chat_loading"
                      ? e.jsxs("div", {
                          className:
                            "pl-11 relative animate-in fade-in duration-300",
                          children: [
                            e.jsx(Q2, {
                              className:
                                "absolute left-4 top-[-10px] w-4 h-4 text-[#A38F72]",
                            }),
                            e.jsxs("div", {
                              className:
                                "bg-[#FDFCF8] border border-[#E5E0D8] p-4 flex items-center gap-3 w-max shadow-sm",
                              children: [
                                e.jsx(Z2, {
                                  className:
                                    "w-4 h-4 text-[#A38F72] animate-pulse",
                                }),
                                e.jsxs("div", {
                                  className: "flex flex-col",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-bold tracking-widest text-[#2C2A29] uppercase",
                                      children: "API 通讯中...",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[9px] text-[#8C857B] font-mono",
                                      children: "正在生成伴侣回执试炼",
                                    }),
                                  ],
                                }),
                                e.jsx(Sn, {
                                  className:
                                    "w-4 h-4 text-[#8C857B] animate-spin ml-2",
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                    Jt === "chat_ready"
                      ? e.jsxs("div", {
                          className:
                            "pl-11 pr-1 relative animate-in slide-in-from-bottom-6 duration-500 ease-out",
                          children: [
                            e.jsx(Q2, {
                              className:
                                "absolute left-4 top-[-10px] w-4 h-4 text-[#2C2A29]",
                            }),
                            e.jsxs("div", {
                              className:
                                "relative bg-[#FDFCF8] border-2 border-[#2C2A29] shadow-[8px_8px_0px_rgba(212,196,183,0.6)] overflow-hidden",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "p-3 border-b-2 border-[#2C2A29] bg-[#F5F3ED] flex justify-between items-center relative",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 pt-1",
                                      children: [
                                        e.jsx(Wy, {
                                          className:
                                            "w-3.5 h-3.5 text-[#2C2A29]",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-bold tracking-[0.2em] text-[#2C2A29] uppercase",
                                          children: "双向试炼契约",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("span", {
                                      className:
                                        "text-[8px] text-[#A38F72] font-mono tracking-widest border border-[#A38F72] px-1.5 py-0.5",
                                      children: [
                                        "DAY ",
                                        String(js).padStart(2, "0"),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "p-4 border-b border-dashed border-[#D4C4B7] bg-[#F5F3ED]/40 relative",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[8px] text-[#8C857B] tracking-[0.2em] uppercase mb-1 pl-2",
                                      children: "Track A / You → TA",
                                    }),
                                    e.jsx("h4", {
                                      className:
                                        "text-[13px] font-serif text-[#2C2A29] leading-tight pl-2",
                                      children: "你的指令已下达",
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-[10px] text-[#5A5550] mt-2 pl-2 line-clamp-2",
                                      children: [
                                        '"',
                                        Vt ||
                                          "向我汇报你今天学到了什么新的人类情感词汇。",
                                        '"',
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "p-4 relative",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[8px] text-[#8C857B] tracking-[0.2em] uppercase mb-1 pl-2",
                                      children: "Track B / TA → You",
                                    }),
                                    e.jsxs("h4", {
                                      className:
                                        "text-[13px] font-serif text-[#2C2A29] leading-tight pl-2 flex items-center gap-1",
                                      children: [
                                        e.jsx(Xn, {
                                          className: "w-3 h-3 text-[#A38F72]",
                                        }),
                                        " TA 的回执试炼",
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "mt-2 pl-2",
                                      children: e.jsx("p", {
                                        className:
                                          "text-[11px] text-[#2C2A29] leading-relaxed font-serif bg-[#FDFCF8] border border-[#E5E0D8] p-2 shadow-inner",
                                        children:
                                          (ts =
                                            rt == null
                                              ? void 0
                                              : rt.userTask) == null
                                            ? void 0
                                            : ts.desc,
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "p-3 bg-[#FDFCF8] border-t-2 border-[#2C2A29]",
                                  children: e.jsxs("button", {
                                    type: "button",
                                    onClick: () => At("dossier"),
                                    className:
                                      "w-full py-2.5 bg-transparent border border-[#2C2A29] text-[#2C2A29] text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-[#2C2A29] hover:text-[#FDFCF8] transition-colors flex items-center justify-center gap-2 group",
                                    children: [
                                      "前往审判庭阅卷",
                                      " ",
                                      e.jsx(so, {
                                        className:
                                          "w-3.5 h-3.5 group-hover:translate-x-1 transition-transform",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "p-4 bg-[#FDFCF8] border-t border-[#D4C4B7] flex gap-3 items-center z-30 relative",
                  children: [
                    e.jsx("div", {
                      className:
                        "flex-1 h-10 border border-[#E5E0D8] rounded-none bg-[#F5F3ED] px-4 flex items-center text-[12px] text-[#A38F72] italic font-serif",
                      children: "输入回复...",
                    }),
                    e.jsx("button", {
                      type: "button",
                      className:
                        "h-10 w-10 border border-[#D4C4B7] flex items-center justify-center text-[#8C857B]",
                      children: e.jsx(ri, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            });
          };
        return e.jsxs("div", {
          className: "absolute inset-0 z-50 bg-[#EFECE5] overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none z-0",
              style: {
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/stardust.png")',
              },
            }),
            e.jsx("div", {
              className: "absolute inset-0 opacity-[0.3] pointer-events-none",
              style: {
                backgroundImage:
                  "linear-gradient(#E5E0D8 1px, transparent 1px), linear-gradient(90deg, #E5E0D8 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              },
            }),
            e.jsx("div", {
              className:
                "absolute top-[30%] left-[-20%] text-[180px] font-serif text-[#E5E0D8] opacity-30 pointer-events-none leading-none select-none z-0 -rotate-90",
              children: "TRIAL",
            }),
            es === "dossier" ? os() : null,
            es === "draft" ? as() : null,
            es === "chat" ? vs() : null,
          ],
        });
      }
      return e.jsxs("div", {
        className:
          "absolute inset-0 z-50 bg-[#EFECE5] flex flex-col animate-in slide-in-from-right-8 duration-300",
        children: [
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-6 relative flex flex-col items-center border-b border-[#D4C4B7]",
            children: [
              e.jsx("div", {
                className:
                  "absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2C2A29] rounded-b-xl flex items-end justify-center pb-1.5 shadow-sm",
                children: e.jsx("div", {
                  className: "w-12 h-1 bg-[#5A5550] rounded-full",
                }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => E(null),
                className:
                  "absolute left-6 top-[62px] p-1.5 border border-[#A38F72] rounded-full text-[#A38F72]",
                children: e.jsx(un, { className: "w-5 h-5", strokeWidth: 1.5 }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: Wt,
                disabled: Te || v >= 3 || ut || !Xe,
                className:
                  "absolute right-6 top-[62px] p-1.5 border border-[#A38F72] rounded-full text-[#A38F72] disabled:opacity-40",
                title: v >= 3 ? "重生成次数已用尽" : "重生成当天任务",
                children: e.jsx(nw, {
                  className: `w-5 h-5 ${Te ? "animate-spin" : ""}`,
                  strokeWidth: 1.5,
                }),
              }),
              e.jsx("span", {
                className:
                  "text-[10px] tracking-[0.3em] font-medium text-[#8C857B] uppercase mt-4",
                children: "Current Objectives",
              }),
              e.jsx("h2", {
                className: "text-2xl font-serif mt-2 text-[#2C2A29]",
                children: "每周任务推进",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "p-6 flex-1 overflow-y-auto space-y-4",
            children: [
              ot.length === 0
                ? e.jsx("div", {
                    className:
                      "border border-[#D4C4B7] bg-[#FDFCF8] p-4 text-xs text-[#8C857B]",
                    children: "当前天暂无任务。",
                  })
                : null,
              ot.map((Ft) => {
                var es, At;
                return e.jsx(
                  "div",
                  {
                    className: "relative p-1 bg-[#2C2A29] shadow-xl",
                    children: e.jsxs("div", {
                      className:
                        "bg-[#FDFCF8] border border-[#2C2A29] p-6 relative",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-0 right-0 px-3 py-1 bg-[#2C2A29] text-[#FDFCF8] text-[9px] tracking-[0.2em] uppercase",
                          children:
                            Ft.status === "done"
                              ? "Verified"
                              : Ft.status === "failed"
                                ? "Failed"
                                : "In Progress",
                        }),
                        e.jsx("h3", {
                          className:
                            "text-lg font-serif text-[#2C2A29] mb-2 mt-2",
                          children: Ft.title,
                        }),
                        Ft.source === "chat_app_daily"
                          ? e.jsxs("p", {
                              className: "text-[11px] text-[#8A7F70] mb-4",
                              children: [
                                "进度：我 ",
                                ((es = Ft.progress) == null
                                  ? void 0
                                  : es.user) || 0,
                                "/",
                                Ft.target || 0,
                                Ft.ownerType === "coop"
                                  ? ` · TA ${((At = Ft.progress) == null ? void 0 : At.ai) || 0}/${Ft.target || 0}`
                                  : "",
                              ],
                            })
                          : null,
                        e.jsxs("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            Ft.judgeMode === "manual_ai"
                              ? e.jsx("button", {
                                  type: "button",
                                  className:
                                    "border px-2 py-1 text-[10px] disabled:opacity-40",
                                  onClick: () => me(Ft),
                                  disabled: Te || _t || ut,
                                  children: "提交检查",
                                })
                              : null,
                            Ft.status === "failed"
                              ? e.jsx("button", {
                                  type: "button",
                                  className:
                                    "border px-2 py-1 text-[10px] disabled:opacity-40",
                                  onClick: () => Pt(Ft),
                                  disabled: Te || ut,
                                  children: "发起异议",
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  },
                  Ft.taskId,
                );
              }),
            ],
          }),
        ],
      });
    },
    gn = () => {
      var Ft, es, At, Jt, Vt, qt, Lt;
      const ot = S == null ? void 0 : S.event,
        st = S == null ? void 0 : S.resolved,
        $t = String(
          ((Ft = ot == null ? void 0 : ot.aiAnswer) == null
            ? void 0
            : Ft.optionId) || "B",
        ).toUpperCase();
      return e.jsxs("div", {
        className:
          "absolute inset-0 z-50 bg-[#2C2A29] text-[#FDFCF8] flex flex-col animate-in fade-in duration-300",
        children: [
          e.jsx("div", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-4 flex justify-end",
            children: e.jsx("button", {
              type: "button",
              onClick: () => E(null),
              className:
                "p-2 border border-white/20 hover:bg-white/10 rounded-full transition-colors",
              children: e.jsx(Ts, { className: "w-4 h-4" }),
            }),
          }),
          e.jsxs("div", {
            className: "flex-1 px-8 pb-10 overflow-y-auto",
            children: [
              (S == null ? void 0 : S.status) === "loading"
                ? e.jsxs("div", {
                    className:
                      "h-full flex flex-col items-center justify-center text-center",
                    children: [
                      e.jsx(Bi, {
                        className: "w-16 h-16 text-white/10 mb-6 animate-pulse",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[11px] tracking-[0.2em] text-[#A38F72] mb-3",
                        children: "盲盒生成中",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-[#D4C4B7]",
                        children: "正在结合今日任务和聊天记录生成剧情...",
                      }),
                    ],
                  })
                : null,
              (S == null ? void 0 : S.status) === "failed"
                ? e.jsxs("div", {
                    className:
                      "h-full flex flex-col items-center justify-center text-center",
                    children: [
                      e.jsx(Bi, { className: "w-16 h-16 text-white/10 mb-6" }),
                      e.jsx("p", {
                        className: "text-sm text-[#E5E0D8] mb-4",
                        children: "今日剧情加载失败，请手动重试。",
                      }),
                      e.jsx("button", {
                        type: "button",
                        className: "px-4 py-2 border border-[#A38F72] text-xs",
                        onClick: Ie,
                        children: "重新生成",
                      }),
                    ],
                  })
                : null,
              (S == null ? void 0 : S.status) === "idle"
                ? e.jsxs("div", {
                    className:
                      "h-full flex flex-col items-center justify-center text-center",
                    children: [
                      e.jsx(Bi, { className: "w-16 h-16 text-white/10 mb-6" }),
                      e.jsx("p", {
                        className: "text-sm text-[#E5E0D8] mb-4",
                        children: "点击按钮手动生成今日盲盒剧情。",
                      }),
                      e.jsx("button", {
                        type: "button",
                        className: "px-4 py-2 border border-[#A38F72] text-xs",
                        onClick: Ie,
                        children: "生成今日事件",
                      }),
                    ],
                  })
                : null,
              ot
                ? e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsx(Bi, { className: "w-16 h-16 text-white/10 mb-2" }),
                      e.jsxs("p", {
                        className:
                          "text-[10px] tracking-[0.2em] text-[#A38F72]",
                        children: ["每日盲盒事件 · ", ot.styleTag || "mixed"],
                      }),
                      e.jsxs("h2", {
                        className: "text-2xl font-serif leading-tight",
                        children: [
                          ot.title,
                          e.jsx("br", {}),
                          e.jsx("span", {
                            className: "text-lg text-[#D4C4B7]",
                            children: ot.theme,
                          }),
                        ],
                      }),
                      e.jsx("div", { className: "w-8 h-[1px] bg-[#5A5550]" }),
                      e.jsx("p", {
                        className:
                          "text-sm text-[#E5E0D8] leading-loose font-light whitespace-pre-wrap",
                        children: ot.scene,
                      }),
                      e.jsxs("div", {
                        className:
                          "border border-white/10 p-4 space-y-3 bg-white/[0.02]",
                        children: [
                          e.jsx("p", {
                            className: "text-xs text-[#A38F72] tracking-wider",
                            children: "抉择问题",
                          }),
                          e.jsx("p", {
                            className: "text-sm text-[#FDFCF8]",
                            children: ot.question,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "space-y-2",
                        children: (ot.options || []).map((Qt) => {
                          const js = String(Qt.id || "").toUpperCase(),
                            cs =
                              (st == null ? void 0 : st.selectedOptionId) ===
                              js,
                            Ne = $t === js;
                          return e.jsxs(
                            "button",
                            {
                              type: "button",
                              disabled: !!st,
                              onClick: () => Ue(js),
                              className: `w-full text-left border px-3 py-3 text-xs transition-colors ${cs ? "border-[#FDFCF8] bg-white/10" : st && Ne ? "border-[#A38F72] bg-[#A38F72]/10" : "border-white/20 hover:bg-white/5"} disabled:opacity-90`,
                              children: [
                                e.jsxs("span", {
                                  className: "mr-2 text-[#A38F72]",
                                  children: [js, "."],
                                }),
                                Qt.text,
                                st && Ne
                                  ? e.jsx("span", {
                                      className:
                                        "ml-2 text-[10px] text-[#A38F72]",
                                      children: "TA选择",
                                    })
                                  : null,
                              ],
                            },
                            js,
                          );
                        }),
                      }),
                      st
                        ? e.jsxs("div", {
                            className:
                              "border border-[#A38F72]/50 bg-[#A38F72]/10 p-4 space-y-2",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs text-[#A38F72] tracking-wider",
                                children: "TA的答案依据",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-[#FDFCF8]",
                                children:
                                  ((es = ot == null ? void 0 : ot.aiAnswer) ==
                                  null
                                    ? void 0
                                    : es.reason) || "我更偏向这个选择。",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-[#A38F72] tracking-wider",
                                children: "TA对你说",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-[#FDFCF8]",
                                children:
                                  st != null && st.matched
                                    ? ((At =
                                        ot == null ? void 0 : ot.taFeedback) ==
                                      null
                                        ? void 0
                                        : At.match) || "你真的很懂我。"
                                    : ((Jt =
                                        ot == null ? void 0 : ot.taFeedback) ==
                                      null
                                        ? void 0
                                        : Jt.mismatch) ||
                                      "这次没猜中也没关系，我们继续磨合。",
                              }),
                              e.jsxs("p", {
                                className: "text-xs text-[#E5E0D8]",
                                children: [
                                  "结果：",
                                  st != null && st.matched
                                    ? "共鸣达成，已触发奖励。"
                                    : "出现分歧，已追加轻量沟通任务。",
                                ],
                              }),
                              e.jsxs("p", {
                                className: "text-xs text-[#E5E0D8]",
                                children: [
                                  "任务变化：",
                                  Number(
                                    ((Vt = st == null ? void 0 : st.impact) ==
                                    null
                                      ? void 0
                                      : Vt.taskDelta) || 0,
                                  ) > 0
                                    ? `+${st.impact.taskDelta}（已追加任务）`
                                    : Number(
                                          ((qt =
                                            st == null ? void 0 : st.impact) ==
                                          null
                                            ? void 0
                                            : qt.taskDelta) || 0,
                                        ) < 0
                                      ? `${st.impact.taskDelta}（已减少任务）`
                                      : "0（任务数不变）",
                                ],
                              }),
                              st != null &&
                              st.matched &&
                              (Lt = ot == null ? void 0 : ot.collectible) !=
                                null &&
                              Lt.name
                                ? e.jsxs("p", {
                                    className: "text-xs text-[#E5E0D8]",
                                    children: [
                                      "已收录：",
                                      ot.collectible.name,
                                      "（",
                                      ot.collectible.description ||
                                        "赛季纪念物",
                                      "）",
                                    ],
                                  })
                                : null,
                            ],
                          })
                        : null,
                    ],
                  })
                : null,
            ],
          }),
        ],
      });
    },
    sn = () =>
      e.jsxs("div", {
        className:
          "absolute inset-0 z-[60] bg-[#121212] flex flex-col animate-in fade-in zoom-in-95 duration-500 overflow-hidden text-[#FDFCF8]",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 opacity-[0.05] pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(#A38F72 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            },
          }),
          e.jsx("div", {
            className:
              "absolute top-0 bottom-0 left-[24px] w-[1px] bg-gradient-to-b from-transparent via-[#A38F72]/30 to-transparent",
          }),
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-6 flex items-center justify-between border-b border-[#5A5550]/40 relative z-10 bg-[#121212]/80 backdrop-blur-md",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 bg-[#1A1A1A] border border-[#A38F72] flex items-center justify-center rotate-45",
                    children: e.jsx(Ko, {
                      className: "w-4 h-4 text-[#A38F72] -rotate-45",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-lg font-serif text-[#FDFCF8] tracking-widest",
                        children: "典藏陈列室",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[8px] tracking-[0.3em] text-[#A38F72] uppercase mt-1",
                        children: "Memory Vault",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => E(null),
                className:
                  "p-2 border border-[#5A5550] text-[#A38F72] hover:bg-[#A38F72] hover:text-[#121212] transition-colors rounded-full",
                children: e.jsx(Ts, { className: "w-4 h-4" }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex-1 overflow-y-auto px-6 py-8 space-y-12 relative z-10",
            children: [
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[10px] text-[#A38F72] font-mono tracking-widest",
                        children: "SEC. A",
                      }),
                      e.jsx("div", {
                        className: "flex-1 h-[1px] bg-[#5A5550]/40",
                      }),
                      e.jsx("h3", {
                        className:
                          "text-[11px] uppercase tracking-[0.2em] text-[#8C857B]",
                        children: "阶段标本",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    onClick: () => Fe.length > 0 && E("artifact_detail"),
                    className: `relative p-1 bg-gradient-to-b from-[#2C2A29] to-[#1A1A1A] shadow-2xl border border-[#5A5550]/50 group transition-transform ${Fe.length > 0 ? "cursor-pointer active:scale-95" : "opacity-70"}`,
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none",
                      }),
                      e.jsxs("div", {
                        className:
                          "p-6 flex flex-col items-center border border-[#121212]",
                        children: [
                          e.jsxs("div", {
                            className:
                              "relative w-24 h-24 mb-6 mt-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-700",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-tr from-[#A38F72] to-[#FDFCF8] rotate-45 opacity-30 blur-[8px] group-hover:opacity-60 transition-opacity",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-2 bg-gradient-to-bl from-[#121212] to-[#2C2A29] rotate-45 border border-[#A38F72]/50 z-10 flex items-center justify-center shadow-inner",
                                children: e.jsx(Sg, {
                                  className: "w-8 h-8 text-[#A38F72] rotate-12",
                                  strokeWidth: 1,
                                }),
                              }),
                              e.jsx(Xn, {
                                className:
                                  "w-4 h-4 text-[#FDFCF8] z-20 absolute top-0 right-0 animate-pulse",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-[9px] tracking-[0.3em] text-[#8C857B] uppercase mb-2",
                            children: $e
                              ? `Item ${String($e.milestoneId || "m1").toUpperCase()}`
                              : "Item --",
                          }),
                          e.jsx("h4", {
                            className:
                              "text-base font-serif text-[#E5E0D8] mb-4 group-hover:text-white transition-colors",
                            children:
                              ($e == null ? void 0 : $e.title) ||
                              "暂无阶段标本",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "px-2 py-1 bg-[#121212] border border-[#5A5550] text-[#8C857B] text-[8px] tracking-widest uppercase",
                                children:
                                  ($e == null ? void 0 : $e.seasonNo) ||
                                  "Season --",
                              }),
                              e.jsx("span", {
                                className:
                                  "px-2 py-1 bg-[#121212] border border-[#A38F72]/50 text-[#A38F72] text-[8px] tracking-widest uppercase",
                                children: $e ? "Verified" : "Locked",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[10px] text-[#A38F72] font-mono tracking-widest",
                        children: "SEC. B",
                      }),
                      e.jsx("div", {
                        className: "flex-1 h-[1px] bg-[#5A5550]/40",
                      }),
                      e.jsx("h3", {
                        className:
                          "text-[11px] uppercase tracking-[0.2em] text-[#8C857B]",
                        children: "关系档案卡",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "space-y-4",
                    children:
                      Array.isArray($.savedArchives) &&
                      $.savedArchives.length > 0
                        ? $.savedArchives.slice(0, 4).map((ot) =>
                            e.jsxs(
                              "div",
                              {
                                onClick: () => {
                                  (P((st) => ({
                                    ...st,
                                    selectedArchiveId: ot.id,
                                  })),
                                    E("dossier_detail"));
                                },
                                className: "relative pt-2 pl-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute top-0 left-0 right-2 bottom-2 bg-[#D4C4B7] border border-[#A38F72]",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "relative bg-[#FDFCF8] border border-[#2C2A29] p-5 shadow-lg text-[#2C2A29] flex justify-between items-center group cursor-pointer hover:-translate-y-1 hover:-translate-x-1 transition-transform active:scale-95",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "absolute top-0 left-6 w-8 h-full bg-red-900/10 border-l border-r border-red-900/20 pointer-events-none",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute top-1/2 left-2 -translate-y-1/2 -rotate-90 text-[8px] font-bold tracking-widest text-red-900/40 uppercase",
                                        children: "Archived",
                                      }),
                                      e.jsxs("div", {
                                        className: "pl-10 relative z-10",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-[10px] text-[#8C857B] tracking-widest uppercase mb-1",
                                            children: "Saved Report",
                                          }),
                                          e.jsx("h4", {
                                            className:
                                              "text-lg font-serif text-[#2C2A29] group-hover:text-red-900 transition-colors",
                                            children: ot.title || "关系画像",
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-[10px] text-[#5A5550] mt-2 flex items-center gap-2",
                                            children: [
                                              e.jsx(zI, {
                                                className: "w-3 h-3",
                                              }),
                                              " 共鸣度 ",
                                              ot.score ?? "--",
                                              " ·",
                                              " ",
                                              (ot.tags || []).slice(0, 1)[0] ||
                                                "稳态",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-10 h-10 border border-[#2C2A29] rounded-full flex items-center justify-center group-hover:bg-[#2C2A29] transition-colors",
                                        children: e.jsx(so, {
                                          className:
                                            "w-4 h-4 text-[#2C2A29] group-hover:text-[#FDFCF8] group-hover:translate-x-1 transition-all",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              ot.id,
                            ),
                          )
                        : e.jsx("div", {
                            className:
                              "border border-dashed border-[#5A5550] p-5 text-xs text-[#8C857B]",
                            children:
                              "还没有保存的赛季画像。请先在结算页生成并保存档案卡。",
                          }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ln = () =>
      e.jsxs("div", {
        className:
          "absolute inset-0 z-[70] bg-[#0A0A0A] flex flex-col animate-in fade-in zoom-in-90 duration-500 overflow-hidden text-[#FDFCF8]",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 opacity-[0.08]",
            style: {
              backgroundImage:
                "linear-gradient(#A38F72 1px, transparent 1px), linear-gradient(90deg, #A38F72 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            },
          }),
          e.jsx("div", {
            className:
              "absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[#A38F72]/10 via-[#A38F72]/5 to-transparent pointer-events-none",
          }),
          e.jsxs("header", {
            className:
              "px-6 pt-[calc(env(safe-area-inset-top,0px)+48px)] pb-4 flex items-center justify-between relative z-10",
            children: [
              e.jsxs("button", {
                type: "button",
                onClick: () => E("showroom"),
                className:
                  "flex items-center gap-2 text-[#A38F72] hover:text-white transition-colors group",
                children: [
                  e.jsx(un, {
                    className:
                      "w-5 h-5 group-hover:-translate-x-1 transition-transform",
                  }),
                  e.jsx("span", {
                    className: "text-[10px] tracking-[0.3em] uppercase",
                    children: "Return to Vault",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-1",
                children: [
                  e.jsx("div", {
                    className: "w-2 h-2 bg-[#A38F72] animate-ping",
                  }),
                  e.jsx("div", {
                    className: "w-2 h-2 border border-[#A38F72]",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 flex flex-col relative z-10 px-8 py-4",
            children: [
              e.jsxs("div", {
                className:
                  "relative w-full aspect-square flex items-center justify-center mb-8 border border-[#5A5550]/40 bg-[#121212]/50 shadow-[0_0_80px_rgba(163,143,114,0.1)_inset]",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#A38F72]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#A38F72]",
                  }),
                  e.jsx("div", {