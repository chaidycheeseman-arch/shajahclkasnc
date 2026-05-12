              contact: ge,
              effectiveUser: J,
              messagesToApi: se,
              addApiLog: u,
              maxTokens: G,
            });
          we && ne(U, we);
        } catch {}
      };
    return e.jsx(JC.Provider, {
      value: {
        chatContacts: a,
        chatUser: r,
        activeContact: m,
        setActiveContact: h,
        memorySettings: L,
        setMemorySettings: F,
        archives: w,
        saveArchive: P,
        loadArchive: z,
        deleteArchive: O,
        updateArchiveMemorySelections: Z,
        storyLog: I,
        addStoryEntry: V,
        updateStoryEntry: ne,
        deleteStoryEntry: le,
        clearStoryLog: ie,
        injectMeetOpeningIfEmpty: X,
        startWithMeetOpening: je,
        generateHistorySummary: xe,
        generateStorySummary: ye,
        generateStoryReply: H,
        regenerateReply: Y,
        syncSummaryToChat: ee,
        offlineSummariesByContact: E,
        currentOfflineSummaries: q,
        setOfflineSummariesByContact: S,
        getOnlineSummariesForContact: K,
        deleteOfflineSummary: R,
        updateOfflineSummary: oe,
        getMeetRoundCount: V4,
      },
      children: t,
    });
  },
  K4 = ({ onClose: t, type: s = "load" }) => {
    const {
        archives: n,
        saveArchive: a,
        loadArchive: r,
        deleteArchive: i,
      } = Lp(),
      [o, c] = l.useState(""),
      d = () => {
        o.trim() && (a(o), c(""), t());
      },
      u = (p) => {
        (r(p), t());
      },
      f = (p, m) => {
        (p.stopPropagation(),
          window.confirm("Are you sure you want to delete this archive?") &&
            i(m));
      };
    return e.jsx("div", {
      className:
        "fixed inset-0 bg-[#2C2C2C]/20 backdrop-blur-sm flex items-center justify-center z-50 p-4 font-serif",
      children: e.jsxs("div", {
        className:
          "bg-[#F9F7F2] w-full max-w-md rounded-none shadow-2xl border border-[#E5E0D8] flex flex-col max-h-[85vh]",
        children: [
          e.jsxs("div", {
            className:
              "p-6 border-b border-[#E5E0D8] flex items-center justify-between bg-[#F9F7F2]",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx(bu, { size: 20, className: "text-[#2C2C2C]" }),
                  e.jsx("h3", {
                    className: "text-xl font-bold text-[#2C2C2C] tracking-wide",
                    children: s === "save" ? "保存进度" : "读取进度",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: t,
                className:
                  "p-2 hover:bg-[#E5E0D8] rounded-full transition-colors",
                children: e.jsx(Ts, { size: 20, className: "text-[#5A5A5A]" }),
              }),
            ],
          }),
          s === "save" &&
            e.jsx("div", {
              className: "p-6 border-b border-[#E5E0D8] bg-[#F2F0E9]",
              children: e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-0 border border-[#C0C0C0] bg-[#F9F7F2]",
                children: [
                  e.jsx("input", {
                    type: "text",
                    value: o,
                    onChange: (p) => c(p.target.value),
                    placeholder: "为这个章节命名...",
                    className:
                      "flex-1 min-w-0 px-4 py-3 bg-transparent border-none focus:ring-0 font-serif placeholder:italic placeholder:text-[#A0A0A0]",
                  }),
                  e.jsxs("button", {
                    onClick: d,
                    disabled: !o.trim(),
                    className:
                      "px-6 py-3 sm:py-0 bg-[#2C2C2C] text-[#F9F7F2] hover:bg-[#4A4A4A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shrink-0",
                    children: [e.jsx(oo, { size: 14 }), "保存"],
                  }),
                ],
              }),
            }),
          e.jsx("div", {
            className: "flex-1 overflow-y-auto p-6 space-y-4 bg-[#F9F7F2]",
            children:
              n.length === 0
                ? e.jsx("div", {
                    className:
                      "text-center py-16 text-[#8A8A8A] italic border border-dashed border-[#C0C0C0]",
                    children: e.jsx("p", { children: "暂无存档记录" }),
                  })
                : n.map((p, m) =>
                    e.jsxs(
                      "div",
                      {
                        onClick: () => s === "load" && u(p),
                        className: `relative group border border-[#E5E0D8] bg-white p-5 transition-all duration-300 ${s === "load" ? "cursor-pointer hover:border-[#2C2C2C] hover:shadow-lg hover:-translate-y-1" : ""}`,
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -right-2 -top-2 w-8 h-8 bg-[#2C2C2C] text-[#F9F7F2] flex items-center justify-center font-sans font-bold text-xs",
                            children: n.length - m,
                          }),
                          e.jsxs("div", {
                            className: "pr-6",
                            children: [
                              e.jsx("h4", {
                                className:
                                  "font-bold text-lg text-[#2C2C2C] mb-2 font-serif",
                                children: p.name,
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-4 text-xs text-[#8A8A8A] font-sans tracking-wider uppercase",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(Dr, { size: 12 }),
                                      e.jsx("span", {
                                        children: new Date(
                                          p.timestamp,
                                        ).toLocaleDateString(),
                                      }),
                                    ],
                                  }),
                                  e.jsx("span", {
                                    children: new Date(
                                      p.timestamp,
                                    ).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            onClick: (h) => f(h, p.id),
                            className:
                              "absolute bottom-4 right-4 p-2 text-[#8A8A8A] hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100",
                            title: "删除档案",
                            children: e.jsx(_n, { size: 16 }),
                          }),
                        ],
                      },
                      p.id,
                    ),
                  ),
          }),
        ],
      }),
    });
  },
  CX = ({ onClose: t, onOpenSave: s, onOpenLoad: n }) => {
    var Ae;
    const {
        memorySettings: a,
        setMemorySettings: r,
        generateHistorySummary: i,
        generateStorySummary: o,
        syncSummaryToChat: c,
        activeContact: d,
        archives: u,
        updateArchiveMemorySelections: f,
        storyLog: p,
        clearStoryLog: m,
        startWithMeetOpening: h,
        offlineSummariesByContact: g,
        currentOfflineSummaries: x,
        getOnlineSummariesForContact: y,
        deleteOfflineSummary: v,
        updateOfflineSummary: b,
        getMeetRoundCount: N,
      } = Lp(),
      [w, _] = l.useState(null),
      [A, k] = l.useState(!1),
      [C, M] = l.useState("200"),
      [E, S] = l.useState("10"),
      [j, T] = l.useState(null),
      [I, L] = l.useState(null),
      [B, F] = l.useState(!1),
      [D, $] = l.useState(null),
      [P, z] = l.useState(!1),
      [O, Z] = l.useState(null),
      [K, q] = l.useState(""),
      [V, ne] = l.useState(!1),
      [le, ie] = l.useState(""),
      [X, je] = l.useState("");
    (l.useEffect(() => {
      var Se;
      const te =
        (Se = a.presets) == null
          ? void 0
          : Se.find((Fe) => Fe.id === a.activePresetId);
      ie(te ? te.css : a.customCSS || "");
    }, [a.activePresetId, a.presets]),
      l.useEffect(() => {
        T(null);
      }, [d == null ? void 0 : d.id]),
      l.useEffect(() => {
        W();
      }, [d == null ? void 0 : d.id]));
    const xe = (te, Se) => {
        r((Fe) => ({ ...Fe, [te]: Se }));
      },
      ye = Array.isArray(a.writingStylePresets) ? a.writingStylePresets : [],
      R = () => {
        const te = a.activeWritingStylePresetId;
        return (te && ye.find((Se) => Se.id === te)) || null;
      },
      oe = () => {
        const te = String(a.customWritingStyleName || "").trim(),
          Se = String(a.customWritingStyle || "").trim();
        !te ||
          !Se ||
          (r((Fe) => {
            const $e = Array.isArray(Fe.writingStylePresets)
                ? Fe.writingStylePresets
                : [],
              tt = Fe.activeWritingStylePresetId;
            if (tt && $e.some((Pe) => Pe.id === tt))
              return {
                ...Fe,
                customWritingStyleEnabled: !0,
                writingStylePresets: $e.map((Pe) =>
                  Pe.id === tt ? { ...Pe, name: te, text: Se } : Pe,
                ),
              };
            const ht = `ws_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
            return {
              ...Fe,
              customWritingStyleEnabled: !0,
              activeWritingStylePresetId: ht,
              writingStylePresets: [...$e, { id: ht, name: te, text: Se }],
            };
          }),
          ne(!1));
      },
      ee = (te) => {
        const Se = ye.find((Fe) => Fe.id === te);
        Se &&
          (r((Fe) => ({
            ...Fe,
            customWritingStyleEnabled: !0,
            activeWritingStylePresetId: te,
            customWritingStyleName: Se.name,
            customWritingStyle: Se.text,
          })),
          ne(!1));
      },
      H = (te) => {
        te &&
          confirm("确定删除此文风预设吗？") &&
          r((Se) => {
            const $e = (
                Array.isArray(Se.writingStylePresets)
                  ? Se.writingStylePresets
                  : []
              ).filter((Xe) => Xe.id !== te),
              tt = Se.activeWritingStylePresetId === te;
            return {
              ...Se,
              writingStylePresets: $e,
              activeWritingStylePresetId: tt
                ? null
                : Se.activeWritingStylePresetId,
            };
          });
      },
      Y = async (te) => {
        const Se = te.target.files[0];
        if (Se)
          try {
            const Fe = await $r(Se, 1280, 0.8);
            xe("backgroundImage", Fe);
          } catch {
            alert("图片处理失败，请重试");
          }
      },
      U = async () => {
        if (!d || p.length === 0) return;
        k(!0);
        const te = parseInt(String(E).trim(), 10),
          Se = parseInt(String(C).trim(), 10),
          Fe = Number.isNaN(te) || te < 1 ? 1 : te,
          $e = Number.isNaN(Se) || Se < 20 ? 200 : Math.min(Se, 99999),
          tt = await o(Fe, $e);
        (tt ? L(tt.id) : alert("生成失败，可能是剧情内容太少或回合数无效。"),
          k(!1));
      },
      ce = N(p),
      pe = d ? u.filter((te) => te.contactId === d.id) : [],
      se = d ? y(d.id) : [],
      Te = Array.isArray(x)
        ? x
        : d
          ? g && typeof g == "object"
            ? g[d.id] || []
            : []
          : [],
      ke = (te) => {
        te != null && te.id && (Z(te.id), q(String(te.content || "")));
      },
      W = () => {
        (Z(null), q(""));
      },
      ue = () => {
        if (!O) return;
        if (!b(O, K)) {
          alert("保存失败：内容不能为空");
          return;
        }
        W();
      };
    l.useEffect(() => {
      Go("memory_modal_list_state", {
        activeContactId: (d == null ? void 0 : d.id) || null,
        currentOfflineSummariesCount: Array.isArray(x) ? x.length : -1,
        offlineListForActiveCount: Array.isArray(Te) ? Te.length : -1,
        selectedOfflineCount: Array.isArray(
          a == null ? void 0 : a.selectedOfflineMemoryIds,
        )
          ? a.selectedOfflineMemoryIds.length
          : -1,
      });
    }, [
      d == null ? void 0 : d.id,
      x,
      Te,
      a == null ? void 0 : a.selectedOfflineMemoryIds,
    ]);
    const re = (te) => {
        ie(te);
      },
      he = le !== (a.customCSS || ""),
      ge = () => {
        (xe("customCSS", le), alert("已应用当前 CSS"));
      },
      J = (te) => {
        const Se = a.presets.find((Fe) => Fe.id === te);
        Se && (xe("activePresetId", te), xe("customCSS", Se.css), ie(Se.css));
      },
      G = () => {
        if (!X.trim()) return;
        const te = { id: Date.now().toString(), name: X, css: le };
        (r((Se) => ({
          ...Se,
          presets: [...(Se.presets || []), te],
          activePresetId: te.id,
        })),
          je(""));
      },
      we = () => {
        a.activePresetId !== "default" &&
          (r((te) => ({
            ...te,
            presets: te.presets.map((Se) =>
              Se.id === te.activePresetId ? { ...Se, css: le } : Se,
            ),
          })),
          alert("预设已更新"));
      },
      Q = (te) => {
        if (te === "default" || !confirm("确定删除此预设吗？")) return;
        const Se = a.presets.find((Fe) => Fe.id === "default");
        r((Fe) => ({
          ...Fe,
          presets: Fe.presets.filter(($e) => $e.id !== te),
          activePresetId: "default",
          customCSS: (Se == null ? void 0 : Se.css) || "",
        }));
      },
      ve = () => {
        confirm("确定要清空当前的聊天记录吗？此操作无法撤销。") &&
          (m(), alert("聊天记录已清空"));
      },
      Ve = ({ checked: te, onChange: Se }) =>
        e.jsx("button", {
          onClick: () => Se(!te),
          className: `w-12 h-6 rounded-full border border-[#2C2C2C] flex items-center px-1 transition-all duration-300 flex-shrink-0 ${te ? "bg-[#2C2C2C]" : "bg-transparent"}`,
          children: e.jsx("div", {
            className: `w-3 h-3 rounded-full transition-all duration-300 ${te ? "bg-[#F9F7F2] translate-x-6" : "bg-[#2C2C2C]"}`,
          }),
        });
    return e.jsx("div", {
      className:
        "absolute inset-0 z-50 bg-[#F9F7F2] flex flex-col font-serif text-[#2C2C2C]",
      children: e.jsxs("div", {
        className: "flex-1 flex flex-col overflow-hidden",
        children: [
          e.jsxs("div", {
            className:
              "pt-16 px-8 pb-8 flex items-end justify-between bg-[#F9F7F2] z-10",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("span", {
                    className:
                      "text-[10px] font-sans text-[#8A8A8A] uppercase tracking-[0.2em] mb-2 block",
                    children: "Configuration",
                  }),
                  e.jsx("h1", {
                    className: "text-4xl font-bold italic tracking-tight",
                    children: "剧情设置",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: t,
                className:
                  "w-12 h-12 rounded-full border border-[#E5E0D8] flex items-center justify-center hover:bg-[#2C2C2C] hover:text-[#F9F7F2] hover:border-[#2C2C2C] transition-all duration-300 group",
                children: e.jsx(Ts, {
                  size: 20,
                  className:
                    "group-hover:rotate-90 transition-transform duration-500",
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex-1 overflow-y-auto px-8 pb-20 space-y-16 no-scrollbar",
            children: [
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-baseline gap-4 mb-8 border-b border-[#E5E0D8] pb-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-4xl font-bold text-[#E5E0D8] font-sans",
                        children: "01",
                      }),
                      e.jsx("h4", {
                        className: "text-lg font-bold tracking-wide",
                        children: "存档管理",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-6",
                    children: [
                      e.jsxs("button", {
                        onClick: s,
                        className:
                          "group relative h-32 border border-[#E5E0D8] hover:border-[#2C2C2C] transition-colors flex flex-col items-center justify-center gap-3 bg-white overflow-hidden",
                        children: [
                          e.jsx(oo, {
                            size: 24,
                            strokeWidth: 1.5,
                            className: "flex-shrink-0",
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs font-sans tracking-widest uppercase text-center px-2",
                            children: "保存当前进度",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 border border-[#2C2C2C] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none",
                          }),
                        ],
                      }),
                      e.jsxs("button", {
                        onClick: n,
                        className:
                          "group relative h-32 border border-[#E5E0D8] hover:border-[#2C2C2C] transition-colors flex flex-col items-center justify-center gap-3 bg-white overflow-hidden",
                        children: [
                          e.jsx(ui, {
                            size: 24,
                            strokeWidth: 1.5,
                            className: "flex-shrink-0",
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs font-sans tracking-widest uppercase text-center px-2",
                            children: "读取历史存档",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 border border-[#2C2C2C] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (d == null ? void 0 : d.openingLines) &&
                Array.isArray(d.openingLines) &&
                e.jsxs("section", {
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-baseline gap-4 mb-8 border-b border-[#E5E0D8] pb-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-4xl font-bold text-[#E5E0D8] font-sans",
                          children: "02",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h4", {
                              className: "text-lg font-bold tracking-wide",
                              children: "开场剧本",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] font-sans text-[#8A8A8A] uppercase tracking-[0.2em] mt-1",
                              children: "线下 · 剧情为空时自动注入",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (() => {
                      const te = d.openingLines,
                        Fe =
                          typeof te[0] == "string"
                            ? [
                                {
                                  id: "legacy",
                                  name: "默认",
                                  preview: "",
                                  lines: te,
                                },
                              ]
                            : te
                                .filter((tt) => tt && tt.scene === "meet")
                                .map((tt) => ({
                                  id: tt.id,
                                  name: tt.name || "未命名",
                                  preview:
                                    (tt.lines && tt.lines[0]
                                      ? String(tt.lines[0]).trim().slice(0, 28)
                                      : "") || "",
                                  lines: Array.isArray(tt.lines)
                                    ? tt.lines
                                    : [],
                                }));
                      if (Fe.length === 0)
                        return e.jsxs("div", {
                          className:
                            "bg-white border border-[#E5E0D8] px-4 py-4 text-center",
                          children: [
                            e.jsx("p", {
                              className:
                                "font-serif italic text-[#5A5A5A] text-sm",
                              children: "暂无线下开场白",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] text-[#8A8A8A] font-sans uppercase tracking-widest mt-2",
                              children: "在联系人详情中编辑并设为「遇见」",
                            }),
                          ],
                        });
                      const $e = (tt, Xe) => {
                        p.length > 0
                          ? _({ id: tt, lines: Xe })
                          : (h(d.id, Xe), xe("selectedMeetOpeningId", tt));
                      };
                      return e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "bg-white border border-[#E5E0D8] overflow-hidden",
                            children: e.jsx("div", {
                              className:
                                "max-h-52 overflow-y-auto no-scrollbar",
                              children: Fe.map(
                                ({
                                  id: tt,
                                  name: Xe,
                                  preview: ht,
                                  lines: Pe,
                                }) => {
                                  const ut = a.selectedMeetOpeningId === tt;
                                  return e.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => $e(tt, Pe),
                                      className: `w-full flex items-center gap-3 px-4 py-2.5 text-left border-l-[3px] transition-colors ${ut ? "border-l-[#2C2C2C] bg-[#F9F7F2]" : "border-l-transparent hover:bg-[#F9F7F2]/60"}`,
                                      children: [
                                        e.jsx("span", {
                                          className: `shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center ${ut ? "border-[#2C2C2C] bg-[#2C2C2C]" : "border-[#E5E0D8]"}`,
                                          children:
                                            ut &&
                                            e.jsx("span", {
                                              className:
                                                "w-1.5 h-1.5 rounded-full bg-[#F9F7F2]",
                                            }),
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "font-serif font-bold text-sm text-[#2C2C2C] block truncate",
                                              children: Xe,
                                            }),
                                            ht &&
                                              e.jsxs("span", {
                                                className:
                                                  "font-serif text-xs italic text-[#8A8A8A] block truncate mt-0.5",
                                                children: [
                                                  ht,
                                                  ht.length >= 28 ? "…" : "",
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    tt,
                                  );
                                },
                              ),
                            }),
                          }),
                          w &&
                            e.jsx("div", {
                              className:
                                "fixed inset-0 z-[60] bg-black/30 flex items-center justify-center p-6",
                              children: e.jsxs("div", {
                                className:
                                  "bg-[#F9F7F2] border border-[#E5E0D8] rounded-lg p-6 max-w-xs w-full shadow-lg",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "font-serif text-[#2C2C2C] text-sm mb-4",
                                    children:
                                      "用该开场白重新开始？当前剧情将被清空。",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-3",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                          (h(d.id, w.lines),
                                            xe("selectedMeetOpeningId", w.id),
                                            _(null));
                                        },
                                        className:
                                          "flex-1 py-2 bg-[#2C2C2C] text-[#F9F7F2] text-xs font-bold",
                                        children: "确定",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => _(null),
                                        className:
                                          "flex-1 py-2 border border-[#E5E0D8] text-[#5A5A5A] text-xs",
                                        children: "取消",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                        ],
                      });
                    })(),
                  ],
                }),
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-baseline gap-4 mb-8 border-b border-[#E5E0D8] pb-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-4xl font-bold text-[#E5E0D8] font-sans",
                        children: "03",
                      }),
                      e.jsx("h4", {
                        className: "text-lg font-bold tracking-wide",
                        children: "记忆互通",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between bg-white p-6 border border-[#E5E0D8]",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h5", {
                            className: "font-bold mb-1",
                            children: "同步到查岗（AI Phone）",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-[#8A8A8A] font-sans",
                            children:
                              "开启后，查岗、日记等会读取你勾选的线下剧情总结记忆",
                          }),
                        ],
                      }),
                      e.jsx(Ve, {
                        checked: a.shareMemory,
                        onChange: (te) => xe("shareMemory", te),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "bg-white p-6 border border-[#E5E0D8] mt-6",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          e.jsx("h5", {
                            className: "font-bold",
                            children: "当前进度记得最近多少回合原文",
                          }),
                          e.jsx("input", {
                            type: "number",
                            min: "0",
                            value: a.rememberLastNRounds ?? 20,
                            onChange: (te) =>
                              xe(
                                "rememberLastNRounds",
                                parseInt(te.target.value) || 0,
                              ),
                            className:
                              "w-16 bg-transparent border-b border-[#E5E0D8] py-1 text-center font-serif outline-none focus:border-[#2C2C2C]",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-[#8A8A8A] font-sans",
                        children: "0 = 只记总结不记原文",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between bg-white p-6 border border-[#E5E0D8] mt-6",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h5", {
                            className: "font-bold mb-1",
                            children: "使用线上总结",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-[#8A8A8A] font-sans",
                            children:
                              "开启后，下方可勾选本进度要记得的线上记忆",
                          }),
                        ],
                      }),
                      e.jsx(Ve, {
                        checked: a.useOnlineSummaries,
                        onChange: (te) => xe("useOnlineSummaries", te),
                      }),
                    ],
                  }),
                  a.useOnlineSummaries &&
                    se.length > 0 &&
                    e.jsxs("div", {
                      className: "bg-white p-6 border border-[#E5E0D8] mt-6",
                      children: [
                        e.jsx("h5", {
                          className:
                            "font-bold mb-3 text-sm uppercase tracking-widest text-[#8A8A8A]",
                          children: "当前进度 · 勾选记得的线上记忆",
                        }),
                        e.jsx("div", {
                          className: "max-h-48 overflow-y-auto space-y-2",
                          children: se.map((te) => {
                            const Se = (
                              a.selectedOnlineMemoryIds || []
                            ).includes(te.id);
                            return e.jsxs(
                              "label",
                              {
                                className:
                                  "flex items-start gap-3 cursor-pointer group",
                                children: [
                                  e.jsx("input", {
                                    type: "checkbox",
                                    checked: Se,
                                    onChange: () => {
                                      const Fe =
                                        a.selectedOnlineMemoryIds || [];
                                      xe(
                                        "selectedOnlineMemoryIds",
                                        Se
                                          ? Fe.filter(($e) => $e !== te.id)
                                          : [...Fe, te.id],
                                      );
                                    },
                                    className: "mt-1 rounded border-[#E5E0D8]",
                                  }),
                                  e.jsx("div", {
                                    className: "min-w-0 flex-1",
                                    children: e.jsx("div", {
                                      className:
                                        "text-sm font-serif text-[#2C2C2C] group-hover:opacity-80 max-h-28 overflow-y-auto pr-2 whitespace-pre-wrap break-words",
                                      children: te.content,
                                    }),
                                  }),
                                ],
                              },
                              te.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  a.useOnlineSummaries &&
                    pe.length > 0 &&
                    e.jsxs("div", {
                      className: "bg-white p-6 border border-[#E5E0D8] mt-6",
                      children: [
                        e.jsx("h5", {
                          className:
                            "font-bold mb-3 text-sm uppercase tracking-widest text-[#8A8A8A]",
                          children: "各存档 · 勾选该存档记得的线上记忆",
                        }),
                        e.jsx("div", {
                          className: "space-y-4",
                          children: pe.map((te) => {
                            var $e, tt;
                            const Se =
                                (($e = te.memorySettings) == null
                                  ? void 0
                                  : $e.useOnlineSummaries) ?? !1,
                              Fe =
                                ((tt = te.memorySettings) == null
                                  ? void 0
                                  : tt.selectedOnlineMemoryIds) || [];
                            return e.jsxs(
                              "div",
                              {
                                className: "border border-[#E5E0D8] p-4",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-2",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "font-serif font-bold text-sm",
                                        children: te.name,
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () =>
                                          f(te.id, { useOnlineSummaries: !Se }),
                                        className: `w-12 h-6 rounded-full border flex items-center px-1 transition-all ${Se ? "bg-[#2C2C2C] border-[#2C2C2C]" : "bg-transparent border-[#E5E0D8]"}`,
                                        children: e.jsx("div", {
                                          className: `w-3 h-3 rounded-full transition-all ${Se ? "bg-[#F9F7F2] translate-x-6" : "bg-[#E5E0D8]"}`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  Se &&
                                    e.jsx("div", {
                                      className:
                                        "max-h-32 overflow-y-auto space-y-1 mt-2",
                                      children: se.map((Xe) => {
                                        const ht = Fe.includes(Xe.id);
                                        return e.jsxs(
                                          "label",
                                          {
                                            className:
                                              "flex items-center gap-2 cursor-pointer",
                                            children: [
                                              e.jsx("input", {
                                                type: "checkbox",
                                                checked: ht,
                                                onChange: () => {
                                                  const Pe = ht
                                                    ? Fe.filter(
                                                        (ut) => ut !== Xe.id,
                                                      )
                                                    : [...Fe, Xe.id];
                                                  f(te.id, {
                                                    selectedOnlineMemoryIds: Pe,
                                                  });
                                                },
                                                className:
                                                  "rounded border-[#E5E0D8]",
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "text-xs font-serif max-h-16 overflow-y-auto pr-2 whitespace-pre-wrap break-words",
                                                children: Xe.content,
                                              }),
                                            ],
                                          },
                                          Xe.id,
                                        );
                                      }),
                                    }),
                                ],
                              },
                              te.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "bg-white p-6 border border-[#E5E0D8] mt-6",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h5", {
                                className: "font-bold mb-1",
                                children: "自定义文风",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-[#8A8A8A] font-sans",
                                children: "采用你输入的文风进行回复",
                              }),
                            ],
                          }),
                          e.jsx(Ve, {
                            checked: a.customWritingStyleEnabled,
                            onChange: (te) =>
                              xe("customWritingStyleEnabled", te),
                          }),
                        ],
                      }),
                      a.customWritingStyleEnabled &&
                        e.jsxs("div", {
                          className: "mt-4 pt-4 border-t border-[#E5E0D8]",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3 mb-3",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-xs text-[#8A8A8A] font-sans shrink-0",
                                  children: "文风名字",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: a.customWritingStyleName || "",
                                  onChange: (te) =>
                                    xe(
                                      "customWritingStyleName",
                                      te.target.value,
                                    ),
                                  placeholder: "例如：冷冽纪实",
                                  className:
                                    "flex-1 bg-transparent border-b border-[#E5E0D8] py-2 font-serif text-sm outline-none focus:border-[#2C2C2C]",
                                }),
                              ],
                            }),
                            e.jsx("textarea", {
                              value: a.customWritingStyle || "",
                              onChange: (te) =>
                                xe("customWritingStyle", te.target.value),
                              placeholder:
                                "例如：请使用活泼可爱的少女风格进行对话...",
                              className:
                                "w-full h-32 bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 outline-none focus:border-gray-900 transition-colors resize-none rounded-sm font-mono",
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-3 flex flex-wrap items-center gap-2",
                              children: [
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: oe,
                                  className:
                                    "inline-flex items-center gap-1.5 rounded-md border border-[#2C2C2C] bg-[#2C2C2C] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#4A4A4A] transition-colors",
                                  children: [
                                    e.jsx(oo, {
                                      className: "h-3.5 w-3.5",
                                      strokeWidth: 2,
                                      "aria-hidden": !0,
                                    }),
                                    "保存文风",
                                  ],
                                }),
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: () => ne((te) => !te),
                                  className:
                                    "inline-flex items-center gap-1.5 rounded-md border border-[#E5E0D8] bg-white px-3 py-1.5 text-xs font-medium text-[#2C2C2C] hover:bg-[#F9F7F2] transition-colors",
                                  children: [
                                    e.jsx(ui, {
                                      className: "h-3.5 w-3.5",
                                      strokeWidth: 2,
                                      "aria-hidden": !0,
                                    }),
                                    "读取预设",
                                  ],
                                }),
                                R()
                                  ? e.jsxs("span", {
                                      className:
                                        "text-[11px] text-[#8A8A8A] font-mono ml-1",
                                      children: ["当前：", R().name],
                                    })
                                  : null,
                              ],
                            }),
                            V &&
                              e.jsxs("div", {
                                className:
                                  "mt-4 pt-4 border-t border-[#E5E0D8]",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-3",
                                    children: [
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "font-bold text-sm text-[#2C2C2C]",
                                            children: "已保存文风预设",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "text-xs text-[#8A8A8A] mt-0.5",
                                            children:
                                              "点击“使用”即可加载到编辑框并启用",
                                          }),
                                        ],
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => ne(!1),
                                        className:
                                          "text-xs text-[#8A8A8A] hover:text-[#2C2C2C] font-mono",
                                        children: "关闭",
                                      }),
                                    ],
                                  }),
                                  ye.length > 0
                                    ? e.jsx("div", {
                                        className:
                                          "space-y-2 max-h-56 overflow-y-auto pr-1",
                                        children: ye.map((te) => {
                                          const Se =
                                            a.activeWritingStylePresetId ===
                                            te.id;
                                          return e.jsx(
                                            "div",
                                            {
                                              className: `rounded-lg border p-3 ${Se ? "border-[#2C2C2C]" : "border-[#E5E0D8]"}`,
                                              children: e.jsxs("div", {
                                                className:
                                                  "flex items-start justify-between gap-3",
                                                children: [
                                                  e.jsxs("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "font-bold text-sm text-[#2C2C2C] truncate",
                                                        children: te.name,
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-xs text-[#8A8A8A] font-mono mt-1 line-clamp-1",
                                                        children: String(
                                                          te.text || "",
                                                        ).slice(0, 60),
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 shrink-0",
                                                    children: [
                                                      e.jsx("button", {
                                                        type: "button",
                                                        onClick: () =>
                                                          ee(te.id),
                                                        className:
                                                          "px-3 py-1.5 bg-[#2C2C2C] text-white text-xs rounded-md hover:bg-[#4A4A4A] transition-colors",
                                                        children: "使用",
                                                      }),
                                                      e.jsx("button", {
                                                        type: "button",
                                                        onClick: () => H(te.id),
                                                        className:
                                                          "p-2 rounded-md text-[#8A8A8A] hover:text-red-500 transition-colors",
                                                        title: "删除",
                                                        children: e.jsx(_n, {
                                                          className:
                                                            "h-3.5 w-3.5",
                                                          strokeWidth: 2,
                                                          "aria-hidden": !0,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            te.id,
                                          );
                                        }),
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "text-sm text-[#8A8A8A] py-8 text-center",
                                        children: "暂无已保存文风预设",
                                      }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "bg-white p-6 border border-[#E5E0D8] mt-6",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h5", {
                                className: "font-bold mb-1",
                                children: "自定义回复字数",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-[#8A8A8A] font-sans",
                                children: "指定 AI 回复的大致字数",
                              }),
                            ],
                          }),
                          e.jsx(Ve, {
                            checked: a.customReplyLengthEnabled,
                            onChange: (te) =>
                              xe("customReplyLengthEnabled", te),
                          }),
                        ],
                      }),
                      a.customReplyLengthEnabled &&
                        e.jsx("div", {
                          className: "mt-4 pt-4 border-t border-[#E5E0D8]",
                          children: e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx("input", {
                                type: "number",
                                min: "1",
                                value:
                                  j !== null
                                    ? j
                                    : String(
                                        a.replyLength != null &&
                                          !Number.isNaN(a.replyLength) &&
                                          a.replyLength >= 1
                                          ? a.replyLength
                                          : 100,
                                      ),
                                onChange: (te) => {
                                  const Se = te.target.value;
                                  if ((T(Se), Se === "")) return;
                                  const Fe = parseInt(Se, 10);
                                  Number.isNaN(Fe) || xe("replyLength", Fe);
                                },
                                onBlur: () => {
                                  if (j === null) return;
                                  const te = parseInt(j, 10);
                                  (T(null),
                                    Number.isNaN(te) || te < 1
                                      ? xe("replyLength", 100)
                                      : xe("replyLength", Math.min(te, 99999)));
                                },
                                className:
                                  "w-full bg-transparent border-b border-[#E5E0D8] py-2 font-serif text-lg outline-none focus:border-[#2C2C2C]",
                                placeholder: "输入字数...",
                              }),
                              e.jsx("span", {
                                className:
                                  "font-mono text-sm whitespace-nowrap",
                                children: "字左右",
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-baseline gap-4 mb-8 border-b border-[#E5E0D8] pb-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-4xl font-bold text-[#E5E0D8] font-sans",
                        children: "04",
                      }),
                      e.jsx("h4", {
                        className: "text-lg font-bold tracking-wide",
                        children: "线下总结",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      e.jsxs("div", {
                        className: "bg-white p-6 border border-[#E5E0D8]",
                        children: [
                          e.jsxs("p", {
                            className: "text-xs text-[#8A8A8A] font-sans mb-2",
                            children: [
                              "当前共 ",
                              ce,
                              " 回合，已总结到第 ",
                              a.lastSummarizedRound ?? 0,
                              " 回合",
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex flex-wrap items-end gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-xs text-[#8A8A8A] block mb-1",
                                    children: "总结最近",
                                  }),
                                  e.jsx("input", {
                                    type: "number",
                                    min: "1",
                                    value: E,
                                    onChange: (te) => S(te.target.value),
                                    onBlur: () => {
                                      const te = parseInt(String(E).trim(), 10);
                                      E === "" || Number.isNaN(te) || te < 1
                                        ? S("1")
                                        : S(String(te));
                                    },
                                    className:
                                      "w-20 bg-transparent border-b border-[#E5E0D8] py-2 font-serif outline-none focus:border-[#2C2C2C]",
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs ml-1",
                                    children: "回合",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-xs text-[#8A8A8A] block mb-1",
                                    children: "字数约",
                                  }),
                                  e.jsx("input", {
                                    type: "number",
                                    min: "20",
                                    value: C,
                                    onChange: (te) => M(te.target.value),
                                    onBlur: () => {
                                      const te = parseInt(String(C).trim(), 10);
                                      C === "" || Number.isNaN(te) || te < 20
                                        ? M("200")
                                        : M(String(Math.min(te, 99999)));
                                    },
                                    className:
                                      "w-20 bg-transparent border-b border-[#E5E0D8] py-2 font-serif outline-none focus:border-[#2C2C2C]",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                onClick: U,
                                disabled: A || p.length === 0,
                                className:
                                  "px-6 py-2 bg-[#2C2C2C] text-[#F9F7F2] text-xs font-bold hover:bg-[#4A4A4A] transition-colors",
                                children: A ? "生成中..." : "生成总结",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-[#8A8A8A] mt-2 font-sans",
                            children:
                              "生成后默认当前进度记得；可在下方取消勾选或为各存档勾选",
                          }),
                        ],
                      }),
                      Te.length > 0 &&
                        e.jsxs("div", {
                          className: "bg-white p-6 border border-[#E5E0D8]",
                          children: [
                            e.jsx("h5", {
                              className:
                                "font-bold mb-3 text-sm uppercase tracking-widest text-[#8A8A8A]",
                              children: "线下记忆 · 当前进度记得哪些",
                            }),
                            e.jsx("div", {
                              className: "max-h-56 overflow-y-auto space-y-3",
                              children: Te.map((te) => {
                                const Se = (
                                    a.selectedOfflineMemoryIds || []
                                  ).includes(te.id),
                                  Fe = I === te.id;
                                return e.jsxs(
                                  "div",
                                  {
                                    className: `border-l-2 pl-4 py-2 ${Fe ? "border-[#2C2C2C] bg-[#F9F7F2]" : "border-[#E5E0D8]"}`,
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-start justify-between gap-2",
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "flex items-start gap-2 cursor-pointer flex-1 min-w-0",
                                            children: [
                                              e.jsx("input", {
                                                type: "checkbox",
                                                checked: Se,
                                                onChange: () => {
                                                  const $e =
                                                    a.selectedOfflineMemoryIds ||
                                                    [];
                                                  xe(
                                                    "selectedOfflineMemoryIds",
                                                    Se
                                                      ? $e.filter(
                                                          (tt) => tt !== te.id,
                                                        )
                                                      : [...$e, te.id],
                                                  );
                                                },
                                                className:
                                                  "mt-1 rounded border-[#E5E0D8] shrink-0",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "flex-1 min-w-0 max-h-48 overflow-y-auto overflow-x-hidden pr-1",
                                                children:
                                                  O === te.id
                                                    ? e.jsx("textarea", {
                                                        value: K,
                                                        onChange: ($e) =>
                                                          q($e.target.value),
                                                        className:
                                                          "w-full min-h-[90px] text-sm font-serif text-[#2C2C2C] whitespace-pre-wrap break-words border border-[#E5E0D8] bg-[#F9F7F2] p-2 outline-none focus:border-[#2C2C2C]",
                                                      })
                                                    : e.jsx("span", {
                                                        className:
                                                          "text-sm font-serif text-[#2C2C2C] whitespace-pre-wrap break-words block",
                                                        children: te.content,
                                                      }),
                                              }),
                                            ],
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "flex flex-col gap-1 shrink-0",
                                            children:
                                              O === te.id
                                                ? e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsx("button", {
                                                        type: "button",
                                                        onClick: ue,
                                                        className:
                                                          "text-xs text-[#2C2C2C] hover:text-black",
                                                        children: "保存",
                                                      }),
                                                      e.jsx("button", {
                                                        type: "button",
                                                        onClick: W,
                                                        className:
                                                          "text-xs text-[#8A8A8A] hover:text-[#2C2C2C]",
                                                        children: "取消",
                                                      }),
                                                    ],
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsx("button", {
                                                        type: "button",
                                                        onClick: () => ke(te),
                                                        className:
                                                          "text-xs text-[#8A8A8A] hover:text-[#2C2C2C]",
                                                        children: "编辑",
                                                      }),
                                                      e.jsx("button", {
                                                        type: "button",
                                                        onClick: () => $(te.id),
                                                        className:
                                                          "text-xs text-[#8A8A8A] hover:text-red-500",
                                                        children: "删除",
                                                      }),
                                                    ],
                                                  }),
                                          }),
                                        ],
                                      }),
                                      pe.length > 0 &&
                                        e.jsxs("div", {
                                          className:
                                            "mt-2 pl-6 text-[10px] text-[#8A8A8A] font-sans",
                                          children: [
                                            "各存档：",
                                            pe.map(($e) => {
                                              var ht;
                                              const tt =
                                                  ((ht = $e.memorySettings) ==
                                                  null
                                                    ? void 0
                                                    : ht.selectedOfflineMemoryIds) ||
                                                  [],
                                                Xe = tt.includes(te.id);
                                              return e.jsxs(
                                                "label",
                                                {
                                                  className:
                                                    "inline-flex items-center gap-1 ml-2",
                                                  children: [
                                                    e.jsx("input", {
                                                      type: "checkbox",
                                                      checked: Xe,
                                                      onChange: () => {
                                                        const Pe = Xe
                                                          ? tt.filter(
                                                              (ut) =>
                                                                ut !== te.id,
                                                            )
                                                          : [...tt, te.id];
                                                        f($e.id, {
                                                          selectedOfflineMemoryIds:
                                                            Pe,
                                                        });
                                                      },
                                                      className:
                                                        "rounded border-[#E5E0D8]",
                                                    }),
                                                    $e.name,
                                                  ],
                                                },
                                                $e.id,
                                              );
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  te.id,
                                );
                              }),
                            }),
                          ],
                        }),
                      D &&
                        e.jsx("div", {
                          className:
                            "fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4",
                          children: e.jsxs("div", {
                            className:
                              "bg-[#F9F7F2] border border-[#E5E0D8] rounded-lg p-6 max-w-sm w-full shadow-lg",
                            children: [
                              e.jsx("p", {
                                className:
                                  "font-serif text-[#2C2C2C] text-sm mb-2",
                                children: "删除这条线下记忆？",
                              }),
                              e.jsxs("label", {
                                className:
                                  "flex items-center gap-2 text-sm text-[#5A5A5A] mb-4",
                                children: [
                                  e.jsx("input", {
                                    type: "checkbox",
                                    checked: P,
                                    onChange: (te) => z(te.target.checked),
                                    className: "rounded border-[#E5E0D8]",
                                  }),
                                  "同时删除已同步到线上的该条记忆（如有）",
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex gap-3",
                                children: [
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      (P
                                        ? v(D, {
                                            syncDeleteChatSummaryIds: [D],
                                          })
                                        : v(D),
                                        $(null),
                                        z(!1));
                                    },
                                    className:
                                      "flex-1 py-2 bg-[#2C2C2C] text-[#F9F7F2] text-xs font-bold",
                                    children: "确认删除",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      ($(null), z(!1));
                                    },
                                    className:
                                      "flex-1 py-2 border border-[#E5E0D8] text-[#5A5A5A] text-xs",
                                    children: "取消",
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
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-baseline gap-4 mb-8 border-b border-[#E5E0D8] pb-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-4xl font-bold text-[#E5E0D8] font-sans",
                        children: "05",
                      }),
                      e.jsx("h4", {
                        className: "text-lg font-bold tracking-wide",
                        children: "视觉美学",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-8",
                    children: [
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-8",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-xs text-[#8A8A8A] block mb-2 uppercase tracking-widest",
                                children: "字体大小",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx("input", {
                                    type: "range",
                                    min: "12",
                                    max: "24",
                                    value: a.fontSize || 18,
                                    onChange: (te) =>
                                      xe("fontSize", parseInt(te.target.value)),
                                    className:
                                      "flex-1 h-0.5 bg-[#E5E0D8] appearance-none cursor-pointer accent-[#2C2C2C]",
                                  }),
                                  e.jsx("span", {
                                    className: "font-mono text-sm w-6",
                                    children: a.fontSize,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-xs text-[#8A8A8A] block mb-2 uppercase tracking-widest",
                                children: "背景模糊",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx("input", {
                                    type: "range",
                                    min: "0",
                                    max: "20",
                                    value: a.backgroundBlur,
                                    onChange: (te) =>
                                      xe(
                                        "backgroundBlur",
                                        parseInt(te.target.value),
                                      ),
                                    className:
                                      "flex-1 h-0.5 bg-[#E5E0D8] appearance-none cursor-pointer accent-[#2C2C2C]",
                                  }),
                                  e.jsx("span", {
                                    className: "font-mono text-sm w-6",
                                    children: a.backgroundBlur,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-xs text-[#8A8A8A] block mb-2 uppercase tracking-widest",
                                children: "遮罩浓度",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: Math.round(
                                      (a.overlayOpacity ?? 0.5) * 100,
                                    ),
                                    onChange: (te) =>
                                      xe(
                                        "overlayOpacity",
                                        parseInt(te.target.value) / 100,
                                      ),
                                    className:
                                      "flex-1 h-0.5 bg-[#E5E0D8] appearance-none cursor-pointer accent-[#2C2C2C]",
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "font-mono text-sm w-8 text-right",
                                    children: [
                                      Math.round(
                                        (a.overlayOpacity ?? 0.5) * 100,
                                      ),
                                      "%",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "text-xs text-[#8A8A8A] block mb-2 uppercase tracking-widest",
                            children: "自定义字体",
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: a.customFontUrl || "",
                            onChange: (te) =>
                              xe("customFontUrl", te.target.value),
                            placeholder: "输入字体文件链接 (woff2/ttf)...",
                            className:
                              "w-full bg-transparent border-b border-[#E5E0D8] py-2 font-serif text-sm outline-none focus:border-[#2C2C2C] placeholder:text-[#D4D4D4] placeholder:italic transition-colors",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-[#8A8A8A] mt-2 leading-relaxed",
                            children:
                              "支持 woff2, woff, ttf 格式的直链。设置后将覆盖默认衬线字体。",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className:
                              "text-xs text-[#8A8A8A] block mb-4 uppercase tracking-widest",
                            children: "背景图片",
                          }),
                          e.jsxs("div", {
                            className: "flex items-start gap-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-24 h-32 bg-[#E5E0D8] flex-shrink-0 border border-[#C0C0C0] relative group overflow-hidden",
                                children: a.backgroundImage
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("img", {
                                          src: a.backgroundImage,
                                          alt: "bg",
                                          className:
                                            "w-full h-full object-cover",
                                        }),
                                        e.jsx("button", {
                                          onClick: () =>
                                            xe("backgroundImage", null),
                                          className:
                                            "absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white",
                                          children: e.jsx(_n, { size: 16 }),
                                        }),
                                      ],
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center text-[#8A8A8A]",
                                      children: e.jsx(Za, { size: 20 }),
                                    }),
                              }),
                              e.jsxs("div", {
                                className: "flex-1 pt-2",
                                children: [
                                  e.jsxs("label", {
                                    className:
                                      "inline-block px-6 py-2 border border-[#2C2C2C] text-xs font-bold cursor-pointer hover:bg-[#2C2C2C] hover:text-white transition-colors",
                                    children: [
                                      "上传图片",
                                      e.jsx("input", {
                                        type: "file",
                                        accept: "image/*",
                                        className: "hidden",
                                        onChange: Y,
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] text-[#8A8A8A] mt-3 leading-relaxed",
                                    children:
                                      "建议使用竖屏图片。图片将自动压缩以优化性能。",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "pt-8 border-t border-[#E5E0D8]",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h5", {
                                    className: "font-bold",
                                    children: "高级自定义",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-[#8A8A8A] font-sans mt-1",
                                    children: "使用 CSS 代码完全控制界面样式",
                                  }),
                                ],
                              }),
                              e.jsx(Ve, {
                                checked: a.enableCustomCSS,
                                onChange: (te) => xe("enableCustomCSS", te),
                              }),
                            ],
                          }),
                          e.jsx(Os, {
                            children:
                              a.enableCustomCSS &&
                              e.jsx(We.div, {
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                className: "overflow-hidden",
                                children: e.jsxs("div", {
                                  className:
                                    "bg-white border border-[#E5E0D8] p-6 space-y-6",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("label", {
                                          className:
                                            "text-xs text-[#8A8A8A] block mb-3 uppercase tracking-widest",
                                          children: "预设方案",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "flex gap-3 overflow-x-auto pb-2 no-scrollbar",
                                          children:
                                            (Ae = a.presets) == null
                                              ? void 0
                                              : Ae.map((te) =>
                                                  e.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "relative group flex-shrink-0",
                                                      children: [
                                                        e.jsx("button", {
                                                          onClick: () =>
                                                            J(te.id),
                                                          className: `px-4 py-2 text-xs font-bold border transition-all whitespace-nowrap ${a.activePresetId === te.id ? "bg-[#2C2C2C] text-[#F9F7F2] border-[#2C2C2C]" : "bg-transparent text-[#5A5A5A] border-[#E5E0D8] hover:border-[#2C2C2C]"}`,
                                                          children: te.name,
                                                        }),
                                                        te.id !== "default" &&
                                                          e.jsx("button", {
                                                            onClick: (Se) => {
                                                              (Se.stopPropagation(),
                                                                Q(te.id));
                                                            },
                                                            className:
                                                              "absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm",
                                                            children: e.jsx(
                                                              Ts,
                                                              { size: 10 },
                                                            ),
                                                          }),
                                                      ],
                                                    },
                                                    te.id,
                                                  ),
                                                ),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "relative group",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute left-0 top-0 bottom-0 w-8 bg-[#F2F0E9] border-r border-[#E5E0D8] flex flex-col items-center pt-4 text-[10px] text-[#8A8A8A] font-mono select-none",
                                          children: Array.from({
                                            length: 10,
                                          }).map((te, Se) =>
                                            e.jsx(
                                              "div",
                                              {
                                                className: "h-5",
                                                children: Se + 1,
                                              },
                                              Se,
                                            ),
                                          ),
                                        }),
                                        e.jsx("textarea", {
                                          value: le,
                                          onChange: (te) => re(te.target.value),
                                          className:
                                            "w-full h-64 bg-[#FAFAF8] text-[#2C2C2C] text-xs font-mono pl-12 pr-4 py-4 resize-none outline-none border border-[#E5E0D8] focus:border-[#2C2C2C] transition-colors leading-5",
                                          placeholder:
                                            "/* 在此输入 CSS 代码 */",
                                          spellCheck: "false",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2 pt-2",
                                      children: [
                                        e.jsx("button", {
                                          onClick: ge,
                                          disabled: !he,
                                          className:
                                            "w-9 h-9 border border-[#2C2C2C] text-[#2C2C2C] text-[10px] font-bold tracking-widest hover:bg-[#F2F0E9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0",
                                          children: "应用",
                                        }),
                                        a.activePresetId !== "default" &&
                                          e.jsx("button", {
                                            onClick: we,
                                            className:
                                              "h-9 px-3 border border-[#2C2C2C] text-[#2C2C2C] text-[10px] font-bold tracking-widest whitespace-nowrap hover:bg-[#F2F0E9] transition-colors",
                                            children: "更新当前预设",
                                          }),
                                        e.jsxs("div", {
                                          className:
                                            "flex-1 min-w-0 flex items-center gap-2 border-l border-[#E5E0D8] pl-4 ml-auto",
                                          children: [
                                            e.jsx("input", {
                                              value: X,
                                              onChange: (te) =>
                                                je(te.target.value),
                                              placeholder: "新预设名称",
                                              className:
                                                "flex-1 bg-transparent border-b border-[#E5E0D8] px-2 py-1 text-xs outline-none font-serif placeholder:italic focus:border-[#2C2C2C] transition-colors",
                                            }),
                                            e.jsx("button", {
                                              onClick: G,
                                              disabled: !X.trim(),
                                              className:
                                                "w-8 h-8 bg-[#2C2C2C] text-[#F9F7F2] flex items-center justify-center hover:bg-[#4A4A4A] transition-colors disabled:opacity-50",
                                              children: e.jsx(ea, { size: 16 }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    he
                                      ? e.jsx("p", {
                                          className:
                                            "text-[10px] text-[#8A8A8A] font-sans",
                                          children:
                                            "你有未应用改动，点击「应用到界面」后才会在聊天窗口生效。",
                                        })
                                      : null,
                                  ],
                                }),
                              }),
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
                    className:
                      "flex items-baseline gap-4 mb-8 border-b border-[#E5E0D8] pb-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-4xl font-bold text-[#E5E0D8] font-sans",
                        children: "06",
                      }),
                      e.jsx("h4", {
                        className: "text-lg font-bold tracking-wide",
                        children: "聊天操作",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-1 gap-6",
                    children: e.jsxs("button", {
                      onClick: ve,
                      className:
                        "group relative h-20 border border-[#E5E0D8] hover:border-red-500 transition-colors flex items-center justify-between px-6 bg-white",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx(_n, {
                              size: 24,
                              strokeWidth: 1.5,
                              className: "text-red-500",
                            }),
                            e.jsxs("div", {
                              className: "text-left",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-sm font-bold text-red-500 block mb-1",
                                  children: "清空聊天记录",
                                }),
                                e.jsx("span", {
                                  className: "text-xs text-[#8A8A8A]",
                                  children:
                                    "删除当前所有的聊天对话，此操作不可恢复",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 border border-red-500 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  MX = ({ onBack: t }) => {
    const {
        activeContact: s,
        storyLog: n,
        addStoryEntry: a,
        updateStoryEntry: r,
        deleteStoryEntry: i,
        memorySettings: o,
        generateStoryReply: c,
        regenerateReply: d,
        injectMeetOpeningIfEmpty: u,
      } = Lp(),
      [f, p] = l.useState(""),
      [m, h] = l.useState(!1),
      [g, x] = l.useState(!1),
      [y, v] = l.useState(!1),
      [b, N] = l.useState(!1),
      [w, _] = l.useState(null),
      [A, k] = l.useState(null),
      [C, M] = l.useState(""),
      E = l.useRef(null),
      S = l.useRef(null),
      j = l.useRef({ x: 0, y: 0, entry: null }),
      T = l.useRef(!1),
      I = l.useRef(!1),
      L = l.useRef(null);
    (l.useEffect(() => {
      if (!s || !u || n.length > 0) return;
      const K = o == null ? void 0 : o.selectedMeetOpeningId;
      if (!K) return;
      const q = s.openingLines;
      if (!q || !Array.isArray(q) || q.length === 0) return;
      const V = q[0];
      let ne = [];
      if (typeof V == "string") ne = q;
      else {
        const le = q.find((ie) => ie && ie.scene === "meet" && ie.id === K);
        le && Array.isArray(le.lines) && (ne = le.lines);
      }
      ne.length !== 0 &&
        L.current !== s.id &&
        ((L.current = s.id), u(s.id, ne));
    }, [s, n.length, o == null ? void 0 : o.selectedMeetOpeningId, u]),
      l.useEffect(() => {
        n.length === 0 && (L.current = null);
      }, [n.length]),
      l.useEffect(() => {
        L.current = null;
      }, [s == null ? void 0 : s.id]),
      l.useEffect(() => {
        E.current && (E.current.scrollTop = E.current.scrollHeight);
      }, [n]),
      l.useEffect(() => {
        const K = (q) => {
          var V, ne, le, ie;
          if (I.current) {
            I.current = !1;
            return;
          }
          ((ne = (V = q.target) == null ? void 0 : V.closest) != null &&
            ne.call(V, "[data-meet-more-btn]")) ||
            ((ie = (le = q.target) == null ? void 0 : le.closest) != null &&
              ie.call(le, "[data-meet-context-menu]")) ||
            _(null);
        };
        return (
          window.addEventListener("click", K, !0),
          () => window.removeEventListener("click", K, !0)
        );
      }, []));
    const B = async () => {
        if (!f.trim() || m) return;
        const K = f;
        (p(""), h(!0), a({ role: "user", content: K }));
        try {
          const q = await c(K);
          q && a({ role: "ai", content: q });
        } catch {
        } finally {
          h(!1);
        }
      },
      F = async (K) => {
        window.confirm("重新生成这条回复？") && (h(!0), await d(K), h(!1));
      },
      D = (K) => {
        window.confirm("确定要删除这条记录吗？") && i(K);
      },
      $ = (K) => {
        (k(K), M(K.content), _(null));
      },
      P = () => {
        A && C.trim() && (r(A.id, C), k(null), M(""));
      },
      z = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
      O = o.customFontUrl
        ? `
    @font-face {
      font-family: 'CustomMeetFont';
      src: url('${o.customFontUrl}');
    }
  `
        : "",
      Z = {
        fontSize: `${o.fontSize || 18}px`,
        fontFamily: o.customFontUrl ? "'CustomMeetFont', serif" : void 0,
      };
    return e.jsxs("div", {
      className:
        "meet-container flex h-full w-full bg-[#F9F7F2] text-[#2C2C2C] font-serif overflow-hidden relative",
      children: [
        o.customFontUrl && e.jsx("style", { children: O }),
        o.enableCustomCSS &&
          o.customCSS &&
          e.jsx("style", { children: o.customCSS }),
        o.backgroundImage &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-500",
                style: {
                  backgroundImage: `url(${o.backgroundImage})`,
                  filter: `blur(${o.backgroundBlur || 0}px)`,
                },
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-[#F9F7F2] z-0 transition-opacity duration-500",
                style: { opacity: o.overlayOpacity ?? 0.5 },
              }),
            ],
          }),
        e.jsx("div", {
          className:
            "absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply",
          style: { backgroundImage: z },
        }),
        e.jsxs("div", {
          className:
            "meet-sidebar w-12 border-r border-[#E5E0D8] flex flex-col items-center pt-14 pb-6 gap-6 z-10 bg-[#F9F7F2]/80 backdrop-blur-sm",
          children: [
            e.jsx("button", {
              onClick: t,
              className:
                "p-3 hover:bg-[#E5E0D8] rounded-full transition-all duration-300 group",
              title: "返回",
              children: e.jsx(Xr, {
                size: 22,
                className:
                  "text-[#5A5A5A] group-hover:text-[#2C2C2C] stroke-[1.5]",
              }),
            }),
            e.jsx("div", {
              className:
                "flex-1 w-px bg-gradient-to-b from-transparent via-[#E5E0D8] to-transparent my-4",
            }),
            e.jsx("button", {
              onClick: () => x(!0),
              className:
                "p-3 hover:bg-[#E5E0D8] rounded-full transition-all duration-300 group",
              title: "设置",
              children: e.jsx(ml, {
                size: 22,
                className:
                  "text-[#5A5A5A] group-hover:text-[#2C2C2C] stroke-[1.5]",
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 flex flex-col relative z-10",
          children: [
            e.jsxs("div", {
              className:
                "meet-header h-32 px-2 md:px-4 flex items-end pb-6 border-b border-[#E5E0D8] bg-[#F9F7F2]/50 backdrop-blur-sm sticky top-0 z-20",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-xs font-sans text-[#8A8A8A] uppercase tracking-[0.2em] mb-1",
                      children: "互动小说",
                    }),
                    e.jsx("h1", {
                      className:
                        "text-4xl font-bold tracking-tight text-[#1A1A1A] font-serif italic",
                      children: s.nickname || s.name,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "ml-auto flex items-center gap-2 text-[#8A8A8A] text-xs font-sans tracking-widest",
                  children: [
                    e.jsx("span", { children: "回合" }),
                    e.jsx("span", {
                      className: "text-[#2C2C2C] font-bold text-lg",
                      children: Math.floor(n.length / 2) + 1,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              ref: E,
              className:
                "meet-content flex-1 overflow-y-auto px-2 md:px-4 py-8 space-y-8 scrollbar-hide",
              style: { scrollbarWidth: "none", msOverflowStyle: "none" },
              children: [
                e.jsx("style", {
                  children: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `,
                }),
                n.length === 0 &&
                  e.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center h-64 text-[#8A8A8A] space-y-4 animate-fade-in",
                    children: [
                      e.jsx(yu, { size: 32, className: "opacity-50" }),
                      e.jsx("p", {
                        className: "italic tracking-widest font-serif",
                        children: "故事从这里开始...",
                      }),
                    ],
                  }),
                n.map((K, q) =>
                  e.jsxs(
                    "div",
                    {
                      "data-role": K.role,
                      className: `meet-message-item animate-fade-in transition-all duration-700 relative group ${K.role === "user" ? "pl-6 md:pl-8 opacity-80" : "pl-0"}`,
                      onContextMenu: (V) => {
                        (V.preventDefault(),
                          V.stopPropagation(),
                          _({ x: V.clientX, y: V.clientY, entry: K }));
                      },
                      onMouseDown: (V) => {
                        V.button === 0 &&
                          ((j.current = {
                            x: V.clientX,
                            y: V.clientY,
                            entry: K,
                          }),
                          (T.current = !1),
                          (S.current = setTimeout(() => {
                            ((T.current = !0),
                              (I.current = !0),
                              _({
                                x: j.current.x,
                                y: j.current.y,
                                entry: j.current.entry,
                              }));
                          }, 500)));
                      },
                      onMouseUp: () => {
                        S.current &&
                          (clearTimeout(S.current), (S.current = null));
                      },
                      onMouseLeave: () => {
                        S.current &&
                          (clearTimeout(S.current), (S.current = null));
                      },
                      onTouchStart: (V) => {
                        var le;
                        if (!((le = V.touches) != null && le[0])) return;
                        const ne = V.touches[0];
                        ((j.current = {
                          x: ne.clientX,
                          y: ne.clientY,
                          entry: K,
                        }),
                          (T.current = !1),
                          (S.current = setTimeout(() => {
                            ((T.current = !0),
                              (I.current = !0),
                              _({
                                x: j.current.x,
                                y: j.current.y,
                                entry: j.current.entry,
                              }));
                          }, 500)));
                      },
                      onTouchEnd: (V) => {
                        (T.current && V.preventDefault(),
                          (T.current = !1),
                          S.current &&
                            (clearTimeout(S.current), (S.current = null)));
                      },
                      onTouchMove: (V) => {
                        var ne;
                        if (S.current && (ne = V.touches) != null && ne[0]) {
                          const le = V.touches[0],
                            ie = le.clientX - j.current.x,
                            X = le.clientY - j.current.y;
                          ie * ie + X * X > 100 &&
                            (clearTimeout(S.current), (S.current = null));
                        }
                      },
                      onTouchCancel: () => {
                        S.current &&
                          (clearTimeout(S.current), (S.current = null));
                      },
                      children: [
                        e.jsx("button", {
                          type: "button",
                          "data-meet-more-btn": !0,
                          onClick: (V) => {
                            (V.preventDefault(), V.stopPropagation());
                            const ne = V.currentTarget.getBoundingClientRect();
                            ((I.current = !0),
                              _({
                                x: Math.min(ne.left, window.innerWidth - 180),
                                y: ne.bottom + 4,
                                entry: K,
                              }));
                          },
                          onPointerDown: (V) => {
                            V.stopPropagation();
                          },
                          className:
                            "meet-more-trigger group absolute top-0 right-0 flex items-center justify-center min-w-[28px] min-h-[28px] touch-manipulation -mr-0.5 cursor-pointer rounded-sm hover:bg-[#EDEAE5]/60 active:bg-[#E5E2DC] transition-colors duration-200",
                          style: { touchAction: "manipulation" },
                          "aria-label": "更多操作",
                          children: e.jsx("span", {
                            className:
                              "w-px h-4 rounded-full bg-gradient-to-b from-transparent via-[#C9C4BC] to-transparent group-hover:via-[#2C2C2C]/60 transition-colors duration-200",
                            "aria-hidden": !0,
                          }),
                        }),
                        K.role === "user" &&
                          e.jsx("div", {
                            className:
                              "absolute left-0 top-1 bottom-1 w-px bg-[#D4D4D4]",
                          }),
                        K.role === "ai" &&
                          e.jsx("span", {
                            className:
                              "float-left text-5xl font-bold mr-3 mt-[-8px] text-[#2C2C2C] font-serif leading-none opacity-20 select-none",
                            children: K.content.charAt(0),
                          }),
                        e.jsx("div", {
                          className: "w-full pr-8",
                          children: e.jsx("p", {
                            className: `meet-message-text leading-snug whitespace-pre-wrap ${K.role === "user" ? "text-[#5A5A5A] font-light italic" : "text-[#1A1A1A] font-medium tracking-wide"}`,
                            style: Z,
                            children:
                              K.role === "ai" ? K.content.slice(1) : K.content,
                          }),
                        }),
                        K.role === "ai" &&
                          q !== n.length - 1 &&
                          e.jsx("div", {
                            className: "flex justify-center mt-8 opacity-30",
                            children: e.jsx("span", {
                              className: "text-xl tracking-[1em]",
                              children: "***",
                            }),
                          }),
                      ],
                    },
                    K.id,
                  ),
                ),
                m &&
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-[#8A8A8A] italic pl-2 animate-pulse",
                    children: [
                      e.jsx(yu, { size: 14 }),
                      e.jsx("span", {
                        className: "text-sm tracking-wider",
                        children: "正在书写...",
                      }),
                    ],
                  }),
                e.jsx("div", { className: "h-24" }),
                " ",
              ],
            }),
            e.jsxs("div", {
              className:
                "meet-input-area px-2 md:px-4 py-6 bg-gradient-to-t from-[#F9F7F2] via-[#F9F7F2]/95 to-transparent",
              children: [
                e.jsxs("div", {
                  className: "relative group w-full",
                  children: [
                    e.jsx("textarea", {
                      value: f,
                      onChange: (K) => p(K.target.value),
                      placeholder: "写下你的回复...",
                      className:
                        "meet-input-box w-full bg-transparent border-b border-[#C0C0C0] focus:border-[#2C2C2C] outline-none py-4 pr-12 font-serif text-xl placeholder:text-[#A0A0A0] placeholder:italic resize-none transition-colors duration-300 bg-[#F9F7F2]/50 min-h-[60px]",
                      rows: 1,
                    }),
                    e.jsx("button", {
                      onClick: B,
                      disabled: !f.trim() || m,
                      className:
                        "absolute right-0 bottom-4 p-2 text-[#5A5A5A] hover:text-[#2C2C2C] disabled:opacity-30 transition-colors duration-300",
                      children: e.jsx(ri, {
                        size: 24,
                        className: "stroke-[1.5]",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mt-2 flex justify-between text-[10px] font-sans text-[#8A8A8A] uppercase tracking-widest",
                  children: [
                    e.jsxs("span", {
                      children: ["页码 ", Math.floor(n.length / 5) + 1],
                    }),
                    e.jsx("span", { children: "遇见 App 特别版" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g &&
          e.jsx(CX, {
            onClose: () => x(!1),
            onOpenSave: () => {
              (x(!1), v(!0));
            },
            onOpenLoad: () => {
              (x(!1), N(!0));
            },
          }),
        y && e.jsx(K4, { type: "save", onClose: () => v(!1) }),
        b && e.jsx(K4, { type: "load", onClose: () => N(!1) }),
        A &&
          e.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4",
            children: e.jsxs("div", {
              className:
                "bg-[#F9F7F2] w-full max-w-lg rounded-lg shadow-xl border border-[#E5E0D8] p-6 animate-fade-in",
              children: [
                e.jsx("h3", {
                  className: "text-lg font-serif font-bold text-[#2C2C2C] mb-4",
                  children: "编辑内容",
                }),
                e.jsx("textarea", {
                  value: C,
                  onChange: (K) => M(K.target.value),
                  className:
                    "w-full h-48 p-4 bg-white/50 border border-[#E5E0D8] rounded-md resize-none outline-none focus:border-[#2C2C2C] font-serif text-[#2C2C2C] mb-4",
                  style: { fontSize: `${o.fontSize || 18}px` },
                }),
                e.jsxs("div", {
                  className: "flex justify-end gap-3",
                  children: [
                    e.jsx("button", {
                      onClick: () => k(null),
                      className:
                        "px-4 py-2 text-sm text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors",
                      children: "取消",
                    }),
                    e.jsx("button", {
                      onClick: P,
                      className:
                        "px-4 py-2 text-sm bg-[#2C2C2C] text-[#F9F7F2] rounded hover:bg-[#1A1A1A] transition-colors",
                      children: "保存修改",
                    }),
                  ],
                }),
              ],
            }),
          }),
        w &&
          _i.createPortal(
            e.jsx("div", {
              "data-meet-context-menu": !0,
              className: "fixed inset-0 z-[9999]",
              onClick: () => _(null),
              role: "presentation",
              children: e.jsxs("div", {
                className:
                  "absolute bg-white/95 backdrop-blur-md shadow-lg rounded-lg py-1 border border-[#E5E0D8] min-w-[160px] animate-fade-in",
                style: {
                  top: Math.min(w.y, window.innerHeight - 180),
                  left: Math.min(w.x, window.innerWidth - 180),
                },
                onClick: (K) => K.stopPropagation(),
                role: "menu",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => $(w.entry),
                    className:
                      "w-full px-4 py-2 text-left text-sm text-[#2C2C2C] hover:bg-[#F0EAE0] flex items-center gap-2 transition-colors",
                    children: [
                      e.jsx(ml, { size: 14 }),
                      e.jsx("span", { children: "编辑内容" }),
                    ],
                  }),
                  w.entry.role === "ai" &&
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => F(w.entry.id),
                      className:
                        "w-full px-4 py-2 text-left text-sm text-[#2C2C2C] hover:bg-[#F0EAE0] flex items-center gap-2 transition-colors",
                      children: [
                        e.jsx(Or, { size: 14 }),
                        e.jsx("span", { children: "重新生成" }),
                      ],
                    }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => D(w.entry.id),
                    className:
                      "w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-50 flex items-center gap-2 transition-colors border-t border-[#E5E0D8] mt-1 pt-2",
                    children: [
                      e.jsx(_n, { size: 14 }),
                      e.jsx("span", { children: "删除记录" }),
                    ],
                  }),
                ],
              }),
            }),
            document.body,
          ),
      ],
    });
  },
  TX = ({ onSelect: t, onClose: s }) => {
    const { chatContacts: n, setActiveContact: a } = Lp(),
      [r, i] = l.useState(0),
      [o, c] = l.useState(0),
      d = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`;
    if (!n || n.length === 0)
      return e.jsxs("div", {
        className:
          "h-full w-full bg-[#F9F7F2] flex flex-col items-center justify-center text-[#8A8A8A] relative overflow-hidden font-serif",
        children: [
          e.jsx("div", {
            className:
              "absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply",
            style: { backgroundImage: d },
          }),
          e.jsx(yu, { className: "w-12 h-12 mb-4 opacity-50" }),
          e.jsx("p", {
            className: "relative z-10 font-light tracking-widest italic",
            children: "暂无角色...",
          }),
          e.jsx("button", {
            onClick: s,
            className:
              "mt-8 px-6 py-2 border border-[#2C2C2C]/20 rounded-full text-sm hover:bg-[#2C2C2C]/5 transition-colors relative z-10 text-[#2C2C2C]",
            children: "关闭",
          }),
        ],
      });
    const u = n[r],
      f = () => {
        (c(1), i((g) => (g + 1) % n.length));
      },
      p = () => {
        (c(-1), i((g) => (g - 1 + n.length) % n.length));
      },
      m = () => {
        (a(u), t());
      };
    l.useEffect(() => {
      const g = (x) => {
        (x.key === "ArrowRight" && f(),
          x.key === "ArrowLeft" && p(),
          x.key === "Enter" && m());
      };
      return (
        window.addEventListener("keydown", g),
        () => window.removeEventListener("keydown", g)
      );
    }, [n.length]);
    const h = {
      enter: (g) => ({
        x: g > 0 ? 1e3 : -1e3,
        opacity: 0,
        scale: 0.8,
        rotateY: g > 0 ? 45 : -45,
      }),
      center: { zIndex: 1, x: 0, opacity: 1, scale: 1, rotateY: 0 },
      exit: (g) => ({
        zIndex: 0,
        x: g < 0 ? 1e3 : -1e3,
        opacity: 0,
        scale: 0.8,
        rotateY: g < 0 ? 45 : -45,
      }),
    };
    return e.jsxs("div", {
      className:
        "h-full w-full relative bg-[#F9F7F2] overflow-hidden flex flex-col font-serif text-[#2C2C2C]",
      children: [
        e.jsx("div", {
          className:
            "absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-multiply",
          style: { backgroundImage: d },
        }),
        e.jsxs("div", {
          className: "relative z-20 flex justify-between items-start p-6 pt-12",
          children: [
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("span", {
                  className:
                    "text-xs font-sans text-[#8A8A8A] uppercase tracking-[0.2em] mb-1",
                  children: "选择角色",
                }),
                e.jsx("h1", {
                  className:
                    "text-3xl font-bold text-[#1A1A1A] tracking-tight italic",
                  children: "遇见",
                }),
              ],
            }),
            e.jsx("button", {
              onClick: s,
              className:
                "w-10 h-10 rounded-full hover:bg-[#E5E0D8] transition-colors flex items-center justify-center group",
              children: e.jsx(Ts, {
                size: 24,
                className:
                  "text-[#5A5A5A] group-hover:text-[#2C2C2C] stroke-[1.5]",
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 relative flex items-center justify-center perspective-1000",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",
              children: e.jsx("span", {
                className:
                  "text-[20vw] font-bold text-[#E5E0D8]/40 select-none whitespace-nowrap transform -rotate-12 font-serif italic",
                children: "故事",
              }),
            }),
            e.jsx(Os, {
              initial: !1,
              custom: o,
              mode: "popLayout",
              children: e.jsx(
                We.div,
                {
                  custom: o,
                  variants: h,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: {
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.4 },
                    rotateY: { duration: 0.4 },
                  },
                  className: "absolute w-[80%] h-[65%] max-w-md",
                  children: e.jsxs("div", {
                    className:
                      "w-full h-full relative bg-white shadow-xl cursor-pointer group p-3 pb-12 transform transition-transform duration-500 hover:-translate-y-2",
                    style: {
                      boxShadow:
                        "0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
                    },
                    onClick: m,
                    children: [
                      e.jsxs("div", {
                        className:
                          "w-full h-full relative overflow-hidden bg-[#F0F0F0]",
                        children: [
                          e.jsx("img", {
                            src: u.avatar,
                            alt: u.name,
                            className:
                              "w-full h-full object-cover filter sepia-[0.2] contrast-[0.95] transition-all duration-700 group-hover:scale-105 group-hover:sepia-0 group-hover:contrast-100",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 h-24 bg-white flex flex-col justify-center px-6 border-t border-[#F0F0F0]",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-baseline justify-between",
                            children: [
                              e.jsx("h2", {
                                className:
                                  "text-2xl font-bold text-[#1A1A1A] font-serif italic truncate pr-4",
                                children: u.nickname || u.name,
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-xs font-sans text-[#8A8A8A] tracking-widest",
                                children: ["NO.0", r + 1],
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-[#5A5A5A] text-xs line-clamp-1 font-sans mt-1 tracking-wide opacity-80",
                            children: u.signature || "一段等待被讲述的故事。",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-[#E5E0D8]/80 backdrop-blur-sm rotate-1 shadow-sm z-10",
                      }),
                    ],
                  }),
                },
                r,
              ),
            }),
            e.jsx("button", {
              onClick: p,
              className:
                "absolute left-4 z-20 w-12 h-12 rounded-full hover:bg-[#E5E0D8] flex items-center justify-center transition-colors group",
              children: e.jsx(un, {
                size: 24,
                className: "text-[#8A8A8A] group-hover:text-[#2C2C2C]",
              }),
            }),
            e.jsx("button", {
              onClick: f,
              className:
                "absolute right-4 z-20 w-12 h-12 rounded-full hover:bg-[#E5E0D8] flex items-center justify-center transition-colors group",
              children: e.jsx(Kn, {
                size: 24,
                className: "text-[#8A8A8A] group-hover:text-[#2C2C2C]",
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "h-24 flex flex-col items-center justify-center gap-4 z-20 pb-6",
          children: [
            e.jsxs("button", {
              onClick: m,
              className:
                "flex items-center gap-3 px-8 py-3 bg-[#2C2C2C] text-[#F9F7F2] rounded-full hover:bg-[#1A1A1A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
              children: [
                e.jsx("span", {
                  className: "font-serif italic text-lg",
                  children: "开始故事",
                }),
                e.jsx(Ar, { size: 18, className: "stroke-[1.5]" }),
              ],
            }),
            e.jsx("div", {
              className: "flex items-center gap-2",
              children: n.map((g, x) =>
                e.jsx(
                  "div",
                  {
                    className: `h-1.5 rounded-full transition-all duration-300 ${x === r ? "w-8 bg-[#2C2C2C]" : "w-1.5 bg-[#D4D4D4]"}`,
                  },
                  x,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  IX = ({ onClose: t, wallpaper: s }) => {
    const { activeContact: n, setActiveContact: a } = Lp();
    return e.jsx("div", {
      className:
        "h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat",
      style: s
        ? { backgroundImage: `url(${s})` }
        : { backgroundColor: "#F9F7F2" },
      children: e.jsx("div", {
        className: "h-full w-full bg-[#F9F7F2]/80 backdrop-blur-[2px]",
        children: n
          ? e.jsx(MX, { onBack: () => a(null) })
          : e.jsx(TX, { onSelect: () => {}, onClose: t }),
      }),
    });
  },
  EX = "https://hvznyifterzlgvqczpac.supabase.co",
  LX =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2em55aWZ0ZXJ6bGd2cWN6cGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzMTE1MzgsImV4cCI6MjA5MDg4NzUzOH0.RigZ9VHLeN2g2bvbhibCW170Z3pFVc-_7nAqgHvWY2Q",
  Jn = EM(EX, LX),
  DX = "loaded";
function Jd(t) {
  return t
    ? {
        id: t.id,
        title: t.title,
        description: t.description ?? "",
        coverUrl: t.cover_url ?? "",
        downloadLink: t.download_link ?? "",
        visibility: t.visibility ?? "public",
        privateKey: t.private_key ?? null,
        authorDisplayName: t.author_display_name ?? "匿名",
        authorUserId: t.author_user_id ?? null,
        authorAvatarUrl: t.author_avatar_url ?? null,
        authorCreatorId: t.author_creator_id ?? null,
        thankCount: t.thank_count ?? 0,
        createdAt: t.created_at,
      }
    : null;
}
function q4(t) {
  return t
    ? {
        creatorId: t.creator_id ?? "",
        displayName: t.display_name ?? "",
        signature: t.signature ?? "",
        avatarUrl: t.avatar_url ?? "",
      }
    : null;
}
const Kd = 20,
  $X = 24 * 60 * 60 * 1e3,
  Qx = "jilu_discovery_list",
  Q4 = "jilu_discovery_meta",
  qd = "jilu_discovery_cachedAt",
  Bf = "jilu_my_likes",
  Z4 = "jilu_unlocked_preset_ids",
  Uf = "jilu_liked_ids",
  Zx = "jilu_my_publish_",
  hy = "jilu_my_profile_",
  FX = "jilu_creator_home_",
  zX = 24 * 60 * 60 * 1e3,
  Sh = "jilu_first_enter_copyright_notice_v1",
  RX = () => {
    try {
      if (localStorage.getItem(Sh) === "1") return !0;
    } catch {}
    try {
      return sessionStorage.getItem(Sh) === "1";
    } catch {
      return !1;
    }
  },
  PX = () => {
    try {
      localStorage.setItem(Sh, "1");
    } catch {}
    try {
      sessionStorage.setItem(Sh, "1");
    } catch {}
  },
  Xx = "jilu_guest_id";
let e0 = null;
const OX = () => {
    if (e0) return e0;
    const t = (n, a) => {
      try {
        return n.getItem(a);
      } catch {
        return null;
      }
    };
    let s = t(localStorage, Xx) || t(sessionStorage, Xx);
    if (((s = s ? String(s).trim() : ""), s.length > 200 && (s = ""), !s)) {
      s =
        "g_" +
        Math.random().toString(36).slice(2, 12) +
        "_" +
        Date.now().toString(36);
      let n = !1;
      try {
        (localStorage.setItem(Xx, s), (n = !0));
      } catch {}
      if (!n)
        try {
          (sessionStorage.setItem(Xx, s), (n = !0));
        } catch {}
      n || (e0 = s);
    }
    return e0 || s;
  },
  BX = () =>
    Math.random().toString(36).slice(2, 8) +
    Math.random().toString(36).slice(2, 6),
  UX = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`;
function GX({ onClose: t, initialCreatorId: s }) {
  var st, $t, Ft, es;
  const [n, a] = l.useState("list"),
    [r, i] = l.useState(null),
    [o, c] = l.useState("time"),
    [d, u] = l.useState([]),
    [f, p] = l.useState(null),
    [m, h] = l.useState(!0),
    [g, x] = l.useState(!0),
    [y, v] = l.useState(!1),
    [b, N] = l.useState(null),
    [w, _] = l.useState(new Set()),
    [A, k] = l.useState(new Set()),
    [C, M] = l.useState(""),
    [E, S] = l.useState(!1),
    [j, T] = l.useState(null),
    [I, L] = l.useState(null),
    [B, F] = l.useState(null),
    [D, $] = l.useState(!1),
    [P, z] = l.useState(null),
    [O, Z] = l.useState(null),
    [K, q] = l.useState(null),
    [V, ne] = l.useState(!1),
    [le, ie] = l.useState(!1),
    [X, je] = l.useState(null),
    [xe, ye] = l.useState([]),
    [R, oe] = l.useState(!1),
    [ee, H] = l.useState(null),
    [Y, U] = l.useState(null),
    [ce, pe] = l.useState([]),
    [se, Te] = l.useState(!1),
    [ke, W] = l.useState({
      creatorId: "",
      displayName: "",
      signature: "",
      avatarUrl: "",
    }),
    [ue, re] = l.useState(!1),
    [he, ge] = l.useState(null),
    [J, G] = l.useState(!1),
    [we, Q] = l.useState(""),
    [ve, Ve] = l.useState(""),
    [Ae, te] = l.useState(""),
    [Se, Fe] = l.useState(""),
    [$e, tt] = l.useState("public"),
    [Xe, ht] = l.useState(""),
    [Pe, ut] = l.useState(!1),
    [_t, Ee] = l.useState(!1),
    [fe, He] = l.useState(null),
    [Ie, Ce] = l.useState(""),
    [Re, De] = l.useState(!1),
    [at, ft] = l.useState(""),
    [vt, Oe] = l.useState(null),
    [Qe, Ye] = l.useState([]),
    [Ze, Ue] = l.useState(!1),
    [me, jt] = l.useState(null),
    [Gt, Pt] = l.useState(""),
    [Wt, ct] = l.useState(!1),
    [Kt, fs] = l.useState(() => !RX()),
    gt = OX();
  X != null && X.uid;
  const ae = l.useCallback(
      (At) => {
        const Jt = Array.isArray(At) ? At : [],
          Vt = (Lt) => {
            const Qt =
                (Lt == null ? void 0 : Lt.createdAt) ??
                (Lt == null ? void 0 : Lt.created_at) ??
                (Lt == null ? void 0 : Lt.created) ??
                (Lt == null ? void 0 : Lt.timestamp) ??
                null,
              js =
                Qt == null
                  ? 0
                  : typeof Qt == "number"
                    ? Qt
                    : new Date(Qt).getTime();
            return Number.isFinite(js) ? js : 0;
          },
          qt = (Lt) => {
            const Qt =
              (Lt == null ? void 0 : Lt.thankCount) ??
              (Lt == null ? void 0 : Lt.thank_count) ??
              (Lt == null ? void 0 : Lt.likes) ??
              (Lt == null ? void 0 : Lt.likeCount) ??
              0;
            return Number.isFinite(Number(Qt)) ? Number(Qt) : 0;
          };
        return o === "time"
          ? [...Jt].sort((Lt, Qt) => Vt(Qt) - Vt(Lt))
          : o === "heat"