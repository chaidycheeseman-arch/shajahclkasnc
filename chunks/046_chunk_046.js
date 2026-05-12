                                      "relative w-12 h-12 mb-2 flex items-center justify-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 border border-[#e0e0e0] rounded-full group-hover:scale-110 transition-transform duration-500",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-1 bg-[#2c2c2c] rounded-full shadow-sm group-hover:shadow-md transition-shadow duration-300",
                                      }),
                                      e.jsx(Eu, {
                                        size: 16,
                                        strokeWidth: 1.5,
                                        className:
                                          "relative z-10 text-[#faf9f6] group-hover:translate-y-1 transition-transform duration-300",
                                      }),
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] font-bold text-[#9e9e9e] group-hover:text-[#2c2c2c] tracking-[0.2em] transition-colors",
                                    children: "导出角色",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "absolute bottom-0 left-0 w-full h-1.5 flex justify-between px-2",
                        children: [...Array(20)].map((ee, H) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "w-1.5 h-1.5 rounded-full bg-[#faf9f6] -mb-1 shadow-inner",
                            },
                            `bottom-${H}`,
                          ),
                        ),
                      }),
                    ],
                  }),
                  !Si(t) &&
                    e.jsx("button", {
                      type: "button",
                      onClick: () => M(!0),
                      className:
                        "w-full bg-white p-1 rounded-2xl shadow-sm hover:shadow-md transition-all group mb-8",
                      children: e.jsxs("div", {
                        className:
                          "bg-[#fdfbf7] border border-[#f0f0f0] rounded-xl p-5 flex items-center justify-between relative overflow-hidden",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute right-0 top-0 w-20 h-20 bg-gradient-to-bl from-[#e8eaf6]/30 to-transparent rounded-bl-full pointer-events-none",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-4 relative z-10",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-full bg-[#2c2c2c] flex items-center justify-center text-[#faf9f6] shadow-lg group-hover:scale-110 transition-transform duration-500",
                                children: e.jsx(Xn, {
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
                                    children: "NPC 关系池",
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-[10px] text-[#9e9e9e] tracking-widest",
                                    children: [
                                      z.length,
                                      " 人 · ",
                                      O ? "AI更新已开启" : "AI更新已关闭",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3 relative z-10",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: (ee) => {
                                  (ee.stopPropagation(), K());
                                },
                                className: `px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest border transition-colors ${O ? "bg-[#2c2c2c] text-white border-[#2c2c2c]" : "bg-white text-[#2c2c2c] border-[#d0d0d0]"}`,
                                title: "控制发圈/回评时是否允许AI更新NPC池",
                                children: O ? "开" : "关",
                              }),
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full border border-[#e0e0e0] flex items-center justify-center text-[#9e9e9e] group-hover:bg-[#2c2c2c] group-hover:text-white group-hover:border-[#2c2c2c] transition-all",
                                children: e.jsx(Kn, { size: 16 }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  !Si(t) &&
                    e.jsx("button", {
                      onClick: X,
                      className:
                        "w-full py-3 text-[#ef5350] text-[10px] font-bold tracking-[0.2em] hover:bg-red-50 rounded-xl transition-colors opacity-60 hover:opacity-100 mb-8",
                      children: "删除联系人",
                    }),
                ],
              }),
            }),
            e.jsx(Os, {
              children:
                A &&
                e.jsx(RY, {
                  initialSets: rk(t.openingLines),
                  onSave: (ee) => {
                    (o(t.id, { openingLines: ee }), k(!1));
                  },
                  onClose: () => k(!1),
                  showPhoneCase: r,
                  caseSize: i,
                  contactName:
                    (t == null ? void 0 : t.name) ||
                    (t == null ? void 0 : t.nickname),
                }),
            }),
          ],
        });
  },
  KA = "chat_app_group_layout_presets";
async function PY() {
  const t = await be.get(KA, null);
  return Array.isArray(t)
    ? t.filter(
        (s) =>
          s &&
          typeof s == "object" &&
          s.id &&
          typeof s.name == "string" &&
          s.snapshot,
      )
    : [];
}
async function ik(t) {
  await be.set(KA, Array.isArray(t) ? t : []);
}
function OY(t, s) {
  if (!Array.isArray(t) || !Array.isArray(s)) return [];
  const n = new Map(t.filter(Boolean).map((u) => [u.from, { ...u }])),
    a = n.get(ya),
    r = n.get(xa),
    i = [
      a
        ? {
            from: ya,
            to: String(a.to ?? "全部").trim() || "全部",
            visible: a.visible !== !1,
          }
        : { from: ya, to: "全部", visible: !0 },
      r
        ? {
            from: xa,
            to: String(r.to ?? "群聊").trim() || "群聊",
            visible: r.visible !== !1,
          }
        : { from: xa, to: "群聊", visible: !0 },
    ],
    o = t.filter((u) => u && u.from !== ya && u.from !== xa).map((u) => u.from),
    c = [],
    d = new Set();
  for (const u of o) {
    if (!s.includes(u)) continue;
    const f = n.get(u);
    (c.push({
      from: u,
      to: f && String(f.to ?? "").trim() ? String(f.to).trim() : u,
      visible: f ? f.visible !== !1 : !0,
    }),
      d.add(u));
  }
  for (const u of s)
    d.has(u) || (c.push({ from: u, to: u, visible: !0 }), d.add(u));
  return [...i, ...c];
}
function BY(t, s) {
  return t === ya
    ? "全部"
    : t === xa
      ? "群聊"
      : t === "默认分组"
        ? ""
        : (s[t] ?? t);
}
function UY(t) {
  return "";
}
const GY = {
    story: "Story · Stories / 待办",
    quote: "阅读名言 · 名言与歌词",
    groups: "分组条",
  },
  cc = ({ kicker: t, title: s, hint: n }) =>
    e.jsxs("header", {
      className: "mb-5 space-y-2",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            t
              ? e.jsx("p", {
                  className:
                    "text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500",
                  children: t,
                })
              : null,
            e.jsx("div", {
              className: "h-px flex-1 bg-stone-200/70",
              "aria-hidden": !0,
            }),
          ],
        }),
        s
          ? e.jsx("h3", {
              className:
                "font-serif text-[1.18rem] leading-[1.15] font-medium text-stone-900 tracking-tight",
              children: s,
            })
          : null,
        n
          ? e.jsx("p", {
              className:
                "text-[12px] leading-relaxed text-stone-600/90 max-w-prose italic",
              children: n,
            })
          : null,
      ],
    }),
  $b = ({ label: t, value: s, onChange: n, hint: a }) => {
    const r = parseInt(String(s ?? ""), 10),
      i = Number.isFinite(r) ? Math.min(eo, Math.max(0, r)) : eo,
      o = (c) => {
        const d = Math.min(eo, Math.max(0, Math.round(Number(c) || 0)));
        n(String(d));
      };
    return e.jsxs("div", {
      className:
        "flex flex-col gap-1 py-3 border-b border-stone-200/70 last:border-0",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 flex-wrap",
          children: [
            e.jsx("span", {
              className:
                "text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 w-[7.5rem] sm:w-[8.5rem] shrink-0 leading-snug",
              children: t,
            }),
            e.jsx("input", {
              type: "range",
              min: 0,
              max: eo,
              value: i,
              "aria-valuemin": 0,
              "aria-valuemax": eo,
              "aria-valuenow": i,
              onChange: (c) => o(c.target.value),
              className:
                "flex-1 min-w-[6rem] h-1.5 accent-stone-900 rounded-full",
            }),
            e.jsx("input", {
              type: "number",
              min: 0,
              max: eo,
              value: i,
              onChange: (c) => o(c.target.value),
              className:
                "w-11 shrink-0 text-[11px] border-0 border-b border-stone-300 bg-transparent px-0.5 py-1 text-center font-mono text-stone-800 focus:border-stone-800 focus:outline-none",
            }),
          ],
        }),
        a
          ? e.jsx("p", {
              className:
                "text-[10px] leading-snug text-stone-500/80 pl-[7.5rem] sm:pl-[8.5rem]",
              children: a,
            })
          : null,
      ],
    });
  },
  Lr = ({ label: t, value: s, fallbackHex: n, onChange: a, onReset: r }) => {
    const i = IY(s, n);
    return e.jsxs("div", {
      className:
        "flex items-center gap-2 py-3 border-b border-stone-200/70 last:border-0",
      children: [
        e.jsx("span", {
          className:
            "text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-500 w-[7.5rem] sm:w-[8.5rem] shrink-0 leading-snug",
          children: t,
        }),
        e.jsx("input", {
          type: "color",
          "aria-label": t,
          value: i,
          onChange: (o) => a(o.target.value),
          className:
            "h-8 w-10 shrink-0 cursor-pointer rounded-md border border-stone-200 bg-white p-0",
        }),
        e.jsx("input", {
          type: "text",
          value: s,
          onChange: (o) => a(o.target.value),
          className:
            "flex-1 min-w-0 text-[11px] border-0 border-b border-stone-200 bg-transparent px-0 py-1.5 font-mono text-stone-800 placeholder:text-stone-300 focus:border-stone-900 focus:outline-none",
          placeholder: "# 或 rgba()",
          spellCheck: !1,
        }),
        r
          ? e.jsx("button", {
              type: "button",
              onClick: r,
              className:
                "shrink-0 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-600 border border-stone-300/70 bg-white/30 hover:bg-white/60 transition-colors rounded-md",
              "aria-label": `${t} 恢复默认`,
              title: "恢复默认",
              children: "恢复默认",
            })
          : null,
      ],
    });
  },
  HY = ({
    item: t,
    onToChange: s,
    initialLabel: n,
    shortTag: a,
    onToggleVisibility: r,
    showDelete: i,
    onDelete: o,
  }) => {
    const {
        attributes: c,
        listeners: d,
        setNodeRef: u,
        transform: f,
        transition: p,
        isDragging: m,
      } = Wh({ id: t.from }),
      h = {
        transform: Hi.Transform.toString(f),
        transition: p,
        opacity: m ? 0.92 : 1,
      },
      g = t.visible === !1;
    return e.jsxs("div", {
      ref: u,
      style: h,
      className: `group flex items-center gap-2 border-b border-stone-200/70 bg-transparent px-3 py-3 shadow-none ${g ? "opacity-50" : ""} hover:bg-white/30 transition-colors`,
      children: [
        e.jsx("button", {
          type: "button",
          className:
            "touch-none shrink-0 p-1.5 text-stone-400 transition-colors hover:text-stone-800",
          "aria-label": "拖动排序",
          ...c,
          ...d,
          children: e.jsx(KI, { size: 17, strokeWidth: 1.5 }),
        }),
        e.jsx("span", {
          className:
            "shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-400 max-w-[5.5rem] sm:max-w-[8rem] truncate text-left",
          title: `初始名称：${n}`,
          children: n,
        }),
        a
          ? e.jsx("span", {
              className: "shrink-0 text-[10px] text-stone-400 w-8 text-right",
              children: a,
            })
          : e.jsx("span", { className: "shrink-0 w-8" }),
        e.jsx("input", {
          type: "text",
          value: t.to,
          onChange: (x) => s(t.from, x.target.value),
          className:
            "flex-1 min-w-0 border-0 border-b border-stone-200/90 bg-transparent py-1 text-[13px] text-stone-800 placeholder:text-stone-300 focus:border-stone-800 focus:outline-none font-serif",
        }),
        e.jsx("button", {
          type: "button",
          onClick: () => r(t.from),
          className: `shrink-0 p-2 transition-colors ${g ? "text-amber-800/90 hover:bg-amber-50/80" : "text-stone-500 hover:bg-stone-100/80 hover:text-stone-800"}`,
          "aria-label": g ? "显示此分组" : "隐藏此分组",
          title: g
            ? "点击后在顶栏与聊天列表中显示"
            : "点击后在顶栏与聊天列表中隐藏",
          children: g
            ? e.jsx(J1, { size: 17, strokeWidth: 1.5 })
            : e.jsx(K1, { size: 17, strokeWidth: 1.5 }),
        }),
        i
          ? e.jsx("button", {
              type: "button",
              onClick: () => o(t.from),
              className:
                "shrink-0 p-2 text-stone-400 transition-colors hover:bg-red-50/90 hover:text-red-600",
              "aria-label": "删除分组",
              title: "删除分组（联系人将移至默认分组）",
              children: e.jsx(_n, { size: 17, strokeWidth: 1.5 }),
            })
          : e.jsx("span", {
              className: "shrink-0 w-[38px]",
              "aria-hidden": !0,
            }),
      ],
    });
  },
  WY = ({
    open: t,
    onClose: s,
    activeGroup: n,
    setActiveGroup: a,
    contactsTabOrder: r,
    setContactsTabOrder: i,
    contactsTabHidden: o,
    setContactsTabHidden: c,
    groupChatShortcut: d,
    setGroupChatShortcut: u,
    saveGroupChatShortcut: f,
  }) => {
    const {
        groups: p,
        groupInitialNames: m,
        reorderAndRenameGroups: h,
        allGroupSettings: g,
        updateAllGroupSettings: x,
        deleteGroup: y,
      } = vn(),
      [v, b] = l.useState([]),
      [N, w] = l.useState(!0),
      [_, A] = l.useState("divider"),
      [k, C] = l.useState(() => ({ ...yc })),
      [M, E] = l.useState(() => ({ ...da })),
      [S, j] = l.useState(() => Bl(null)),
      [T, I] = l.useState(""),
      [L, B] = l.useState([]);
    (l.useEffect(() => {
      if (!t) return;
      let U = !1;
      return (
        (async () => {
          const ce = await PY();
          U || B(ce);
        })(),
        () => {
          U = !0;
        }
      );
    }, [t]),
      l.useEffect(() => {
        if (!t) return;
        let U = !0;
        return (
          (async () => {
            const [ce, pe, se, Te, ke] = await Promise.all([
              be.get(C0, !0),
              be.get(M0, "divider"),
              be.get(Zf, null),
              be.get(em, null),
              be.get(T0, null),
            ]);
            U && (w(jm(ce)), A(Nm(pe)), C(Sm(se)), E(km(Te)), j(Bl(ke)));
          })(),
          () => {
            U = !1;
          }
        );
      }, [t]));
    const F = async (U) => {
        const ce = jm(U);
        (w(ce), await be.set(C0, ce), Ri({ icityGroupRailEnabled: ce }));
      },
      D = async (U) => {
        const ce = Nm(U);
        (A(ce), await be.set(M0, ce), Ri({ icityGroupRailVariant: ce }));
      },
      $ = async (U, ce) => {
        const pe = Sm({ ...k, [U]: ce });
        (C(pe), await be.set(Zf, pe), Ri({ icityCapsuleColors: pe }));
      },
      P = async () => {
        const U = { ...yc };
        (C(U), await be.set(Zf, U), Ri({ icityCapsuleColors: U }));
      },
      z = async (U, ce) => {
        const pe = km({ ...M, [U]: ce });
        (E(pe), await be.set(em, pe), Ri({ icityListFontColors: pe }));
      },
      O = async () => {
        const U = { ...da };
        (E(U), await be.set(em, U), Ri({ icityListFontColors: U }));
      },
      Z = async (U) => {
        const ce = Bl(U);
        (j(ce), await be.set(T0, ce), Ri({ icityListBlockOrder: ce }));
      },
      K = async (U, ce) => {
        const pe = [...S],
          se = U + ce;
        if (se < 0 || se >= pe.length) return;
        const Te = pe[U];
        ((pe[U] = pe[se]), (pe[se] = Te), await Z(pe));
      },
      q = async () => {
        await Z(Bl(null));
      },
      V = async (U) => {
        if (!U || typeof U != "object") return;
        const ce = jm(U.icityGroupRailEnabled),
          pe = Nm(U.icityGroupRailVariant),
          se = Sm(U.icityCapsuleColors),
          Te = km(U.icityListFontColors),
          ke = Bl(U.icityListBlockOrder);
        (await Promise.all([
          be.set(C0, ce),
          be.set(M0, pe),
          be.set(Zf, se),
          be.set(em, Te),
          be.set(T0, ke),
        ]),
          w(ce),
          A(pe),
          C(se),
          E(Te),
          j(ke),
          Ri({
            icityGroupRailEnabled: ce,
            icityGroupRailVariant: pe,
            icityCapsuleColors: se,
            icityListFontColors: Te,
            icityListBlockOrder: ke,
          }));
      },
      ne = () => ({
        version: 1,
        items: v.map(({ from: U, to: ce, visible: pe }) => ({
          from: U,
          to: ce,
          visible: pe !== !1,
        })),
        allGroupColor: g == null ? void 0 : g.color,
        groupChatColor: d == null ? void 0 : d.color,
        icityGroupRailEnabled: N,
        icityGroupRailVariant: _,
        icityCapsuleColors: { ...k },
        icityListFontColors: { ...M },
        icityListBlockOrder: [...S],
      }),
      le = (U, ce = {}) => {
        const {
            closeOnSuccess: pe = !0,
            allGroupColorOverride: se,
            groupChatColorOverride: Te,
          } = ce,
          ke = U.map((we) => ({
            from: we.from,
            to: String(we.to ?? "").trim(),
          }));
        if (ke.some((we) => !we.to)) return (alert("名称不能为空"), !1);
        const W = ke.map((we) => we.to);
        if (new Set(W).size !== W.length)
          return (alert("展示名不能重复（含「全部」「群聊」与各分组）"), !1);
        const ue = ke.find((we) => we.from === ya),
          re = ke.find((we) => we.from === xa),
          he = ke
            .filter((we) => we.from !== ya && we.from !== xa)
            .map((we) => ({ from: we.from, to: we.to }));
        if (he.length > 0) {
          const we = h(he);
          if (!we.ok) return (alert(we.error || "保存失败"), !1);
        }
        x({
          ...g,
          name: ue.to,
          ...(se != null && se !== "" ? { color: se } : {}),
        });
        const ge = Te ?? (d == null ? void 0 : d.color) ?? "#FFF1F7";
        (f(re.to, ge), u({ label: re.to, color: ge }));
        const J = ke.map((we) =>
            we.from === ya ? ya : we.from === xa ? xa : we.to,
          ),
          G = [];
        for (const we of ke) {
          const Q = we.from === ya ? ya : we.from === xa ? xa : we.to,
            ve = U.find((Ve) => Ve.from === we.from);
          ve && ve.visible === !1 && G.push(Q);
        }
        if (
          (i(J),
          c(G),
          be.set(rd, J),
          be.set(xu, G),
          Ri({ order: J, hidden: G }),
          n && n !== "全部" && n !== xa)
        ) {
          const we = he.find((Q) => Q.from === n);
          we && a(we.to);
        }
        return (pe && (s == null || s()), !0);
      },
      ie = async () => {
        const U = T.trim();
        if (!U) {
          alert("请输入预设名称");
          return;
        }
        const ce = ne(),
          pe = [
            ...L,
            {
              id: `${Date.now()}`,
              name: U,
              createdAt: new Date().toISOString(),
              snapshot: ce,
            },
          ];
        (B(pe), await ik(pe), I(""));
      },
      X = async (U) => {
        const ce = U == null ? void 0 : U.snapshot;
        if (!ce || !Array.isArray(ce.items)) {
          alert("预设数据无效");
          return;
        }
        const pe = OY(ce.items, p);
        (b(pe),
          await V(ce),
          le(pe, {
            closeOnSuccess: !1,
            allGroupColorOverride: ce.allGroupColor,
            groupChatColorOverride: ce.groupChatColor,
          }) && alert(`已读取预设「${U.name}」`));
      },
      je = async (U) => {
        if (!window.confirm("删除此版面预设？")) return;
        const ce = L.filter((pe) => pe.id !== U);
        (B(ce), await ik(ce));
      };
    l.useEffect(() => {
      if (t) {
        const U = DY(r, p),
          ce = new Set(Array.isArray(o) ? o : []);
        b(
          U.map((pe) =>
            pe === ya
              ? {
                  from: ya,
                  to: (g == null ? void 0 : g.name) || "全部",
                  visible: !ce.has(ya),
                }
              : pe === xa
                ? {
                    from: xa,
                    to: (d == null ? void 0 : d.label) || "群聊",
                    visible: !ce.has(xa),
                  }
                : { from: pe, to: pe, visible: !ce.has(pe) },
          ),
        );
      }
    }, [t, p, r, o, g == null ? void 0 : g.name, d == null ? void 0 : d.label]);
    const xe = Ph(ju(Sp, { activationConstraint: { distance: 8 } })),
      ye = (U, ce) => {
        b((pe) => pe.map((se) => (se.from === U ? { ...se, to: ce } : se)));
      },
      R = (U) => {
        b((ce) =>
          ce.map((pe) =>
            pe.from === U ? { ...pe, visible: pe.visible === !1 } : pe,
          ),
        );
      },
      oe = (U) => {
        const { active: ce, over: pe } = U;
        !pe ||
          ce.id === pe.id ||
          b((se) => {
            const Te = se.findIndex((W) => W.from === ce.id),
              ke = se.findIndex((W) => W.from === pe.id);
            return Te < 0 || ke < 0 ? se : Hh(se, Te, ke);
          });
      },
      ee = (U) => U !== ya && U !== xa && U !== "默认分组",
      H = (U) => {
        if (
          !ee(U) ||
          !window.confirm(
            `确定删除分组「${U}」？该分组下的联系人将移至「默认分组」。`,
          )
        )
          return;
        y(U);
        const ce = r && r.filter((se) => se !== U),
          pe = (o || []).filter((se) => se !== U);
        (ce && (i(ce), be.set(rd, ce)),
          c(pe),
          be.set(xu, pe),
          Ri({ ...(ce ? { order: ce } : {}), hidden: pe }),
          n === U && a("全部"),
          b((se) => se.filter((Te) => Te.from !== U)));
      },
      Y = () => {
        le(v, { closeOnSuccess: !0 });
      };
    return t
      ? e.jsx("div", {
          className:
            "fixed inset-0 z-[100] flex items-stretch justify-center bg-stone-900/40 backdrop-blur-[3px]",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "group-settings-title",
          onClick: () => (s == null ? void 0 : s()),
          children: e.jsxs("div", {
            className:
              "w-full h-full max-w-none flex flex-col bg-[#f7f3ea] shadow-none text-stone-900",
            style: {
              paddingTop: "calc(env(safe-area-inset-top, 0px) + 45px)",
              paddingBottom: "max(1.1rem, env(safe-area-inset-bottom, 16px))",
            },
            onClick: (U) => U.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "px-10 pb-7 border-b border-stone-200/80",
                children: [
                  e.jsx("p", {
                    className:
                      "text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500",
                    children: "Contacts",
                  }),
                  e.jsx("h2", {
                    id: "group-settings-title",
                    className:
                      "mt-2 font-serif text-[1.8rem] leading-tight font-medium text-stone-900 tracking-tight",
                    children: "分组与版面",
                  }),
                  e.jsx("p", {
                    className:
                      "mt-2 text-[12px] leading-relaxed text-stone-600/90 max-w-prose",
                    children:
                      "拖动左侧手柄排序；眼睛隐藏或显示；不可删项无垃圾桶。名称与顺序须保存后生效。",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 min-h-0 overflow-y-auto px-10 py-10",
                children: e.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-[430px_1fr] gap-10 items-start",
                  children: [
                    e.jsxs("aside", {
                      className:
                        "rounded-2xl border border-stone-200/70 bg-white/35 p-6",
                      children: [
                        e.jsx(cc, { kicker: "Catalog", title: "分组条目" }),
                        v.length === 0
                          ? e.jsx("p", {
                              className:
                                "font-serif text-sm text-stone-400 text-center py-10",
                              children: "载入中…",
                            })
                          : e.jsx(Gh, {
                              sensors: xe,
                              collisionDetection: ov,
                              onDragEnd: oe,
                              children: e.jsx(du, {
                                items: v.map((U) => U.from),
                                strategy: pD,
                                children: e.jsx("div", {
                                  className: "space-y-2",
                                  children: v.map((U) =>
                                    e.jsx(
                                      HY,
                                      {
                                        item: U,
                                        onToChange: ye,
                                        initialLabel: BY(U.from, m),
                                        shortTag: UY(U.from),
                                        onToggleVisibility: R,
                                        showDelete: ee(U.from),
                                        onDelete: H,
                                      },
                                      U.from,
                                    ),
                                  ),
                                }),
                              }),
                            }),
                      ],
                    }),
                    e.jsxs("article", {
                      className: "space-y-10",
                      children: [
                        e.jsxs("section", {
                          children: [
                            e.jsx(cc, {
                              kicker: "iCity · Rail",
                              title: "聊天窗口分组",
                              hint: "关闭后，会话列表上方不出现分组条，列表按全部会话展示。可先调好样式再打开。",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between gap-4 border-b border-stone-200/70 pb-4",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[13px] font-serif text-stone-800",
                                  children: "在讯息列表显示分组",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  role: "switch",
                                  "aria-checked": N,
                                  onClick: () => F(!N),
                                  className: `relative h-7 w-12 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${N ? "bg-stone-900" : "bg-stone-300"}`,
                                  children: e.jsx("span", {
                                    className: `absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-[#f7f5f2] shadow transition-transform ${N ? "translate-x-5" : "translate-x-0"}`,
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400",
                              children: "分隔样式",
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-2 flex gap-0 border-b border-stone-300/45",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => D("divider"),
                                  className: `flex-1 py-3 text-center text-[12px] font-medium transition-colors ${_ === "divider" ? "text-stone-900 border-b-2 border-stone-900 -mb-px" : "border-b-2 border-transparent text-stone-500 hover:text-stone-800"}`,
                                  children: "阅读分隔",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => D("capsule"),
                                  className: `flex-1 py-3 text-center text-[12px] font-medium transition-colors ${_ === "capsule" ? "text-stone-900 border-b-2 border-stone-900 -mb-px" : "text-stone-500 border-b-2 border-transparent hover:text-stone-800"}`,
                                  children: "圆胶囊",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _ === "divider" &&
                          e.jsxs("section", {
                            children: [
                              e.jsx(cc, {
                                kicker: "Divider",
                                title: "阅读分隔字体颜色",
                                hint: "文字未选中 / 选中两种状态；中间竖条统一一条颜色。",
                              }),
                              e.jsxs("div", {
                                className: "px-0 py-1 bg-transparent",
                                children: [
                                  e.jsx(Lr, {
                                    label: "未选中",
                                    value: M.railDividerIdleFg,
                                    fallbackHex: da.railDividerIdleFg,
                                    onChange: (U) => z("railDividerIdleFg", U),
                                    onReset: () =>
                                      z(
                                        "railDividerIdleFg",
                                        da.railDividerIdleFg,
                                      ),
                                  }),
                                  e.jsx(Lr, {
                                    label: "选中",
                                    value: M.railDividerActiveFg,
                                    fallbackHex: da.railDividerActiveFg,
                                    onChange: (U) =>
                                      z("railDividerActiveFg", U),
                                    onReset: () =>
                                      z(
                                        "railDividerActiveFg",
                                        da.railDividerActiveFg,
                                      ),
                                  }),
                                  e.jsx(Lr, {
                                    label: "竖条颜色",
                                    value: M.railDividerBarFg,
                                    fallbackHex: da.railDividerBarFg,
                                    onChange: (U) => z("railDividerBarFg", U),
                                    onReset: () =>
                                      z(
                                        "railDividerBarFg",
                                        da.railDividerBarFg,
                                      ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        _ === "capsule" &&
                          e.jsxs("section", {
                            children: [
                              e.jsx(cc, {
                                kicker: "Capsule",
                                title: "圆胶囊配色与圆角",
                              }),
                              e.jsxs("div", {
                                className: "px-0 py-1 bg-transparent",
                                children: [
                                  e.jsx(Lr, {
                                    label: "大胶囊底",
                                    value: k.outerBg,
                                    fallbackHex: yc.outerBg,
                                    onChange: (U) => $("outerBg", U),
                                  }),
                                  e.jsx(Lr, {
                                    label: "选中底",
                                    value: k.selectedBg,
                                    fallbackHex: yc.selectedBg,
                                    onChange: (U) => $("selectedBg", U),
                                  }),
                                  e.jsx(Lr, {
                                    label: "选中字色",
                                    value: k.selectedFg,
                                    fallbackHex: yc.selectedFg,
                                    onChange: (U) => $("selectedFg", U),
                                  }),
                                  e.jsx(Lr, {
                                    label: "未选字色",
                                    value: k.idleFg,
                                    fallbackHex: yc.idleFg,
                                    onChange: (U) => $("idleFg", U),
                                  }),
                                  e.jsx($b, {
                                    label: "外圈圆角",
                                    value: k.outerRadius,
                                    hint: `0～${eo}px`,
                                    onChange: (U) => $("outerRadius", U),
                                  }),
                                  e.jsx($b, {
                                    label: "选中圆角",
                                    value: k.selectedRadius,
                                    hint: `内层胶囊 · 0～${eo}`,
                                    onChange: (U) => $("selectedRadius", U),
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: P,
                                    className:
                                      "mt-2 mb-3 w-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600 border border-stone-300/70 bg-transparent hover:bg-stone-900/5 transition-colors",
                                    children: "恢复默认",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        e.jsxs("section", {
                          children: [
                            e.jsx(cc, {
                              kicker: "List",
                              title: "带头像的列表",
                              hint: "会话行中的头像与群占位图圆角。",
                            }),
                            e.jsx("div", {
                              className: "px-0 py-1 bg-transparent",
                              children: e.jsx($b, {
                                label: "头像圆角",
                                value: k.avatarImgRadius,
                                hint: `0～${eo} · 高值近圆形`,
                                onChange: (U) => $("avatarImgRadius", U),
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("section", {
                          children: [
                            e.jsx(cc, {
                              kicker: "Typography",
                              title: "聊天列表字体颜色",
                              hint: "阅读主题下：顶部（阅读/讯息/背景/Online）与会话列表文字（无头像展示 + 横排头像列表复用）。",
                            }),
                            e.jsxs("div", {
                              className: "px-0 py-1 bg-transparent",
                              children: [
                                e.jsx(Lr, {
                                  label: "顶部：阅读标题",
                                  value: M.topReadingFg,
                                  fallbackHex: da.topReadingFg,
                                  onChange: (U) => z("topReadingFg", U),
                                  onReset: () =>
                                    z("topReadingFg", da.topReadingFg),
                                }),
                                e.jsx(Lr, {
                                  label: "顶部：讯息标题",
                                  value: M.topMessageFg,
                                  fallbackHex: da.topMessageFg,
                                  onChange: (U) => z("topMessageFg", U),
                                  onReset: () =>
                                    z("topMessageFg", da.topMessageFg),
                                }),
                                e.jsx(Lr, {
                                  label: "顶部：Online 文案",
                                  value: M.topOnlineFg,
                                  fallbackHex: da.topOnlineFg,
                                  onChange: (U) => z("topOnlineFg", U),
                                  onReset: () =>
                                    z("topOnlineFg", da.topOnlineFg),
                                }),
                                e.jsx(Lr, {
                                  label: "背景图标（下一则按钮）",
                                  value: M.bgUploadFg,
                                  fallbackHex: da.bgUploadFg,
                                  onChange: (U) => z("bgUploadFg", U),
                                  onReset: () => z("bgUploadFg", da.bgUploadFg),
                                }),
                                e.jsx(Lr, {
                                  label: "名言主文字",
                                  value: M.quoteMainFg,
                                  fallbackHex: da.quoteMainFg,
                                  onChange: (U) => z("quoteMainFg", U),
                                  onReset: () =>
                                    z("quoteMainFg", da.quoteMainFg),
                                }),
                                e.jsx(Lr, {
                                  label: "名言信息文字",
                                  value: M.quoteInfoFg,
                                  fallbackHex: da.quoteInfoFg,
                                  onChange: (U) => z("quoteInfoFg", U),
                                  onReset: () =>
                                    z("quoteInfoFg", da.quoteInfoFg),
                                }),
                                e.jsx(Lr, {
                                  label: "名言歌词主文字",
                                  value: M.lyricMainFg,
                                  fallbackHex: da.lyricMainFg,
                                  onChange: (U) => z("lyricMainFg", U),
                                  onReset: () =>
                                    z("lyricMainFg", da.lyricMainFg),
                                }),
                                e.jsx(Lr, {
                                  label: "名言歌词信息文字",
                                  value: M.lyricMetaFg,
                                  fallbackHex: da.lyricMetaFg,
                                  onChange: (U) => z("lyricMetaFg", U),
                                  onReset: () =>
                                    z("lyricMetaFg", da.lyricMetaFg),
                                }),
                                e.jsx(Lr, {
                                  label: "名言歌词控制按钮文字",
                                  value: M.lyricControlsFg,
                                  fallbackHex: da.lyricControlsFg,
                                  onChange: (U) => z("lyricControlsFg", U),
                                  onReset: () =>
                                    z("lyricControlsFg", da.lyricControlsFg),
                                }),
                                e.jsx(Lr, {
                                  label: "Story 文字",
                                  value: M.storyNameFg,
                                  fallbackHex: da.storyNameFg,
                                  onChange: (U) => z("storyNameFg", U),
                                  onReset: () =>
                                    z("storyNameFg", da.storyNameFg),
                                }),
                                e.jsx(Lr, {
                                  label: "待办文字",
                                  value: M.todoVerticalTextFg,
                                  fallbackHex: da.todoVerticalTextFg,
                                  onChange: (U) => z("todoVerticalTextFg", U),
                                  onReset: () =>
                                    z(
                                      "todoVerticalTextFg",
                                      da.todoVerticalTextFg,
                                    ),
                                }),
                                e.jsx(Lr, {
                                  label: "待办时间文字",
                                  value: M.todoTimeFg,
                                  fallbackHex: da.todoTimeFg,
                                  onChange: (U) => z("todoTimeFg", U),
                                  onReset: () => z("todoTimeFg", da.todoTimeFg),
                                }),
                                e.jsx(Lr, {
                                  label: "会话名",
                                  value: M.chatVerticalName,
                                  fallbackHex: da.chatVerticalName,
                                  onChange: (U) => z("chatVerticalName", U),
                                  onReset: () =>
                                    z("chatVerticalName", da.chatVerticalName),
                                }),
                                e.jsx(Lr, {
                                  label: "消息预览",
                                  value: M.chatMsg,
                                  fallbackHex: da.chatMsg,
                                  onChange: (U) => z("chatMsg", U),
                                  onReset: () => z("chatMsg", da.chatMsg),
                                }),
                                e.jsx(Lr, {
                                  label: "时间元信息",
                                  value: M.chatTimeMeta,
                                  fallbackHex: da.chatTimeMeta,
                                  onChange: (U) => z("chatTimeMeta", U),
                                  onReset: () =>
                                    z("chatTimeMeta", da.chatTimeMeta),
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: O,
                                  className:
                                    "mt-2 mb-3 w-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-600 border border-stone-300/80 bg-white/40 hover:bg-white/80 transition-colors",
                                  children: "恢复默认",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("section", {
                          children: [
                            e.jsx(cc, {
                              kicker: "Layout",
                              title: "主区顺序",
                              hint: "仅调整 Story、阅读名言、分组条三者顺序；会话列表始终固定在最下，不能在聊天窗口内拖拽。",
                            }),
                            e.jsx("div", {
                              className: "space-y-2",
                              children: S.map((U, ce) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-2 border border-stone-200/70 bg-white/70 px-3 py-3 text-[12px]",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "flex h-6 w-6 shrink-0 items-center justify-center border border-stone-300 text-[10px] font-semibold text-stone-500",
                                        children: ce + 1,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "flex-1 min-w-0 font-serif text-stone-800 leading-snug",
                                        children: GY[U] ?? U,
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "shrink-0 p-2 text-stone-500 transition-colors hover:text-stone-900 disabled:opacity-25 disabled:pointer-events-none",
                                        "aria-label": "上移",
                                        disabled: ce === 0,
                                        onClick: () => K(ce, -1),
                                        children: e.jsx(hp, {
                                          size: 18,
                                          strokeWidth: 1.5,
                                        }),
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "shrink-0 p-2 text-stone-500 transition-colors hover:text-stone-900 disabled:opacity-25 disabled:pointer-events-none",
                                        "aria-label": "下移",
                                        disabled: ce >= S.length - 1,
                                        onClick: () => K(ce, 1),
                                        children: e.jsx(aa, {
                                          size: 18,
                                          strokeWidth: 1.5,
                                        }),
                                      }),
                                    ],
                                  },
                                  U,
                                ),
                              ),
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: q,
                              className:
                                "mt-3 w-full py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-stone-600 border border-dashed border-stone-300 hover:border-stone-500 hover:bg-white/50 transition-colors",
                              children: "恢复为 Story → 阅读名言 → 分组",
                            }),
                          ],
                        }),
                        e.jsxs("section", {
                          children: [
                            e.jsx(cc, {
                              kicker: "IndexedDB",
                              title: "版面预设",
                              hint: "保存当前分组排序、展示名、隐藏状态与整张 iCity 版面（讯息列表分组条、配色、圆角、主区顺序等）到本地；点读取后立即写入并生效。",
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-4 flex flex-col gap-2 sm:flex-row sm:items-end",
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: T,
                                  onChange: (U) => I(U.target.value),
                                  placeholder: "预设名称",
                                  className:
                                    "flex-1 min-w-0 border-0 border-b border-stone-300 bg-transparent py-2 text-[13px] text-stone-800 placeholder:text-stone-400 focus:border-stone-900 focus:outline-none font-serif",
                                }),
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: ie,
                                  className:
                                    "inline-flex items-center justify-center gap-2 shrink-0 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f7f5f2] bg-stone-900 hover:bg-stone-800 transition-colors",
                                  children: [
                                    e.jsx(oo, { size: 14, strokeWidth: 2 }),
                                    "保存预设",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "mt-4 space-y-2",
                              children:
                                L.length === 0
                                  ? e.jsx("p", {
                                      className:
                                        "text-[12px] text-stone-500 font-serif italic",
                                      children: "暂无预设",
                                    })
                                  : L.map((U) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex items-center justify-between gap-3 border border-stone-200/70 bg-white/70 px-3 py-2.5 text-[12px]",
                                          children: [
                                            e.jsxs("div", {
                                              className: "min-w-0 flex-1",
                                              children: [
                                                e.jsx("p", {
                                                  className:
                                                    "font-serif text-[13px] text-stone-900 truncate",
                                                  children: U.name,
                                                }),
                                                e.jsx("p", {
                                                  className:
                                                    "text-[9px] text-stone-400 uppercase tracking-wider",
                                                  children: U.createdAt
                                                    ? new Date(
                                                        U.createdAt,
                                                      ).toLocaleString()
                                                    : "",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "flex shrink-0 gap-1",
                                              children: [
                                                e.jsx("button", {
                                                  type: "button",
                                                  onClick: () => X(U),
                                                  className:
                                                    "p-2 text-stone-500 hover:bg-stone-100/90 hover:text-stone-900 transition-colors rounded-md",
                                                  title: "读取",
                                                  "aria-label": "读取预设",
                                                  children: e.jsx(Pr, {
                                                    size: 16,
                                                    strokeWidth: 1.6,
                                                  }),
                                                }),
                                                e.jsx("button", {
                                                  type: "button",
                                                  onClick: () => je(U.id),
                                                  className:
                                                    "p-2 text-stone-400 hover:bg-red-50/90 hover:text-red-600 transition-colors rounded-md",
                                                  title: "删除",
                                                  "aria-label": "删除预设",
                                                  children: e.jsx(_n, {
                                                    size: 16,
                                                    strokeWidth: 1.6,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        U.id,
                                      ),
                                    ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsxs("footer", {
                className:
                  "mt-auto flex-shrink-0 flex gap-3 border-t border-stone-200/80 px-6 pt-5",
                children: [
                  e.jsx("button", {
                    type: "button",
                    className:
                      "flex-1 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-700 border border-stone-300 bg-transparent hover:bg-white/70 transition-colors",
                    onClick: () => (s == null ? void 0 : s()),
                    children: "关闭",
                  }),
                  e.jsx("button", {
                    type: "button",
                    className:
                      "flex-1 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f7f5f2] bg-stone-900 hover:bg-stone-800 transition-colors",
                    onClick: Y,
                    children: "保存",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  YY = ({
    group: t,
    isActive: s,
    onClick: n,
    onDelete: a,
    color: r,
    onEdit: i,
    style: o,
    attributes: c,
    listeners: d,
    setNodeRef: u,
    deletable: f = !0,
    tailColor: p,
  }) => {
    const m = f && t !== "全部" && t !== "默认分组",
      h = p ?? (r || "#ffffff");
    return e.jsxs("div", {
      ref: u,
      style: o,
      ...c,
      ...d,
      onClick: n,
      className: `
        relative group flex items-center min-w-[120px] max-w-[200px] h-9 px-3 rounded-t-lg cursor-pointer transition-all duration-200 select-none flex-shrink-0
        ${s ? "bg-white text-gray-900 shadow-sm z-10" : "bg-white/30 text-gray-600 hover:bg-white/50"}
      `,
      children: [
        !s &&
          e.jsx("div", {
            className: "absolute left-0 top-2 bottom-2 w-[1px] bg-gray-400/30",
          }),
        e.jsxs("div", {
          className: "flex-1 flex items-center gap-2 truncate",
          children: [
            e.jsx("div", {
              className:
                "chat-app-tab-dot w-3 h-3 rounded-full cursor-pointer hover:scale-125 transition-transform",
              style: { backgroundColor: r || "#000000" },
              onClick: (g) => {
                i && (g.stopPropagation(), i(g));
              },
              title: "点击修改颜色/名称",
            }),
            e.jsx("span", {
              className: "text-xs font-medium truncate",
              children: t,
            }),
          ],
        }),
        m &&
          e.jsx("button", {
            onClick: (g) => a && a(g, t),
            className: `ml-2 p-0.5 rounded-full hover:bg-gray-200 ${s ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
            children: e.jsx(Ts, { size: 10 }),
          }),
        s &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", {
                className:
                  "absolute bottom-0 -left-2 w-2 h-2 bg-transparent rounded-br-full pointer-events-none",
                style: { boxShadow: `2px 2px 0 0 ${h}` },
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-0 -right-2 w-2 h-2 bg-transparent rounded-bl-full pointer-events-none",
                style: { boxShadow: `-2px 2px 0 0 ${h}` },
              }),
            ],
          }),
      ],
    });
  },
  VY = ({
    stripKey: t,
    activeGroup: s,
    setActiveGroup: n,
    allGroupSettings: a,
    groupChatShortcut: r,
    groupColors: i,
    nightMode: o,
    handleEditGroupClick: c,
    handleDeleteGroupClick: d,
    stripGroupChatsId: u,
  }) => {
    const {
        attributes: f,
        listeners: p,
        setNodeRef: m,
        transform: h,
        transition: g,
      } = Wh({ id: t }),
      x = { transform: Hi.Translate.toString(h), transition: g };
    let y,
      v,
      b,
      N,
      w,
      _ = !1,
      A,
      k;
    return (
      t === ya
        ? ((y = a.name),
          (v = s === "全部"),
          (b = () => n("全部")),
          (N = (C) => c(C, "全部")),
          (w = a.color),
          (k = v ? (o ? "#2c2c2e" : "#ffffff") : void 0))
        : t === xa
          ? ((y = r.label),
            (v = s === u),
            (b = () => n(u)),
            (N = (C) => c(C, u)),
            (w = r.color),
            (k = v ? (o ? "#2c2c2e" : "#ffffff") : void 0))
          : ((y = t),
            (v = s === t),
            (b = () => n(t)),
            (N = (C) => c(C, t)),
            (w = i[t]),
            (_ = t !== "默认分组"),
            (A = d),
            (k = v ? (o ? "#2c2c2e" : "#ffffff") : void 0)),
      e.jsx(YY, {
        group: y,
        isActive: v,
        onClick: b,
        onDelete: A,
        color: w,
        onEdit: N,
        style: x,
        attributes: f,
        listeners: p,
        setNodeRef: m,
        deletable: _,
        tailColor: k,
      })
    );
  },
  qA = "chatApp_groupChatShortcut",
  JY = () => {
    try {
      const t = localStorage.getItem(qA);
      if (t) {
        const s = JSON.parse(t);
        if (s && typeof s.label == "string" && typeof s.color == "string")
          return { label: s.label, color: s.color };
      }
    } catch {}
    return { label: "群聊", color: "#FFF1F7" };
  },
  ok = (t, s) => {
    try {
      localStorage.setItem(qA, JSON.stringify({ label: t, color: s }));
    } catch {}
  },
  ll = "__group_chats__",
  KY = ({
    onCreateChat: t,
    onViewUserMoments: s,
    onCreatedGroupChat: n,
    onGoToGroupChats: a,
    onClose: r,
    onDockVisibilityChange: i,
    onDockToggleVisibilityChange: o,
  }) => {
    var Ne, Je, St, Be, Ke, Nt, bt, ns, Ge;
    const {
        contacts: c,
        addContact: d,
        addContactFromImport: u,
        createGroupChat: f,
        chats: p,
        groups: m,
        addGroup: h,
        deleteGroup: g,
        updateContact: x,
        setGroups: y,
        groupColors: v,
        updateGroup: b,
        allGroupSettings: N,
        updateAllGroupSettings: w,
        userPresets: _,
        nightMode: A,
        blockedFriendRequests: k,
        blockedFriendRequestPopup: C,
        dismissBlockedFriendRequestPopup: M,
        updateBlockedFriendRequest: E,
        handlePhoneInteraction: S,
        updateChatSettings: j,
        sendMessage: T,
        triggerAiReply: I,
      } = vn(),
      L = (p || []).some((Le) => Le.isGroup === !0),
      [B, F] = l.useState(JY),
      [D, $] = l.useState(!1),
      [P, z] = l.useState(!1),
      O = l.useRef(null),
      Z = l.useRef(null),
      [K, q] = l.useState(!1),
      [V, ne] = l.useState(!1),
      [le, ie] = l.useState(!1),
      [X, je] = l.useState(null),
      [xe, ye] = l.useState(null),
      [R, oe] = l.useState({
        color: "#FFF1F7",
        textColor: "#6A5460",
        text: "标签",
      }),
      [ee, H] = l.useState(null),
      [Y, U] = l.useState(""),
      [ce, pe] = l.useState("#3B82F6"),
      [se, Te] = l.useState(""),
      [ke, W] = l.useState(null),
      [ue, re] = l.useState(!1),
      [he, ge] = l.useState(null),
      [J, G] = l.useState(null),
      [we, Q] = l.useState(""),
      [ve, Ve] = l.useState(!1),
      [Ae, te] = l.useState("#3B82F6"),
      [Se, Fe] = l.useState(!1),
      [$e, tt] = l.useState(""),
      [Xe, ht] = l.useState("#3B82F6"),
      [Pe, ut] = l.useState(!1),
      [_t, Ee] = l.useState(!1),
      [fe, He] = l.useState(!1),
      [Ie, Ce] = l.useState([]),
      [Re, De] = l.useState(""),
      [at, ft] = l.useState(""),
      [vt, Oe] = l.useState(!1);
    l.useEffect(() => {
      if (!i) return;
      const Le = !!ke || !!D || !!P || !!ue || !!he;
      return (
        i(Le),
        o == null || o(Le),
        () => {
          (i(!1), o == null || o(!1));
        }
      );
    }, [ke, D, P, ue, he, i, o]);
    const [Qe, Ye] = l.useState(null),
      [Ze, Ue] = l.useState([]);
    (l.useEffect(() => {
      let Le = !0;
      return (
        (async () => {
          const _e = await be.get(rd, null);
          Le && Array.isArray(_e) && _e.length && Ye(_e);
        })(),
        () => {
          Le = !1;
        }
      );
    }, []),
      l.useEffect(() => {
        let Le = !0;
        return (
          (async () => {
            const _e = await be.get(xu, []);
            Le && Array.isArray(_e) && Ue(_e);
          })(),
          () => {
            Le = !1;
          }
        );
      }, []));
    const me = l.useMemo(() => j1(Qe, m, L), [Qe, m, L]),
      jt = l.useMemo(() => YA(me, Ze), [me, Ze]),
      Gt = l.useRef(null);
    (l.useEffect(() => {
      if (!Array.isArray(jt) || jt.length === 0) return;
      const Le = jt[0],
        _e = Le === ya ? "全部" : Le === xa ? ll : Le;
      if (Gt.current === null) {
        ((Gt.current = _e), Pt !== _e && Wt(_e));
        return;
      }
      (Pt === Gt.current && Pt !== _e && Wt(_e), (Gt.current = _e));
    }, [jt]),
      l.useEffect(() => {
        if (ke) {
          const Le = c.find((_e) => _e.id === ke.id);
          Le && W(Le);
        }
      }, [c, ke]));
    const [Pt, Wt] = l.useState("全部"),
      [ct, Kt] = l.useState(""),
      [fs, gt] = l.useState("contacts://all"),
      [ae, nt] = l.useState(["contacts://all"]),
      [It, Xt] = l.useState(0),
      [bs, ss] = l.useState({
        name: "",
        gender: "female",
        setting: "",
        avatar: "",
        persona: "friend",
        group: "默认分组",
        remark: "",
        decoration: { color: "#FFF1F7", textColor: "#6A5460", text: "标签" },
        boundUserPresetId: "",
      }),
      _s = Ph(ju(Sp, { activationConstraint: { distance: 8 } })),
      qs = (Le) => {
        const { active: _e, over: yt } = Le;
        if (!yt || _e.id === yt.id) return;
        const rt = j1(Qe, m, L),
          ze = LY(rt, Ze, _e.id, yt.id);
        if (ze === rt) return;
        (Ye(ze), be.set(rd, ze), Ri({ order: ze }));
        const lt = ze.filter((Ht) => Ht !== ya && Ht !== xa && m.includes(Ht)),
          it = m.filter((Ht) => !lt.includes(Ht));
        y([...lt, ...it]);
      };
    (l.useEffect(() => {
      const _e = `contacts://${Pt === "全部" ? "all" : Pt === ll ? "group_chats" : Pt}`;
      if (_e !== fs) {
        gt(_e);
        const yt = [...ae.slice(0, It + 1), _e];
        (nt(yt), Xt(yt.length - 1));
      }
    }, [Pt]),
      l.useEffect(() => {
        const Le = new Set(Ze || []);
        if (Pt === ll && Le.has(xa)) {
          Wt("全部");
          return;
        }
        Pt !== "全部" && Pt !== ll && Le.has(Pt) && Wt("全部");
      }, [Pt, Ze]));
    const Bs = (Le) => {
        if (It < ae.length - 1) {
          const _e = It + 1;
          Xt(_e);
          const yt = ae[_e];
          gt(yt);
          const rt = yt.replace("contacts://", "");
          Wt(
            rt === "all"
              ? "全部"
              : rt === "group_chats"
                ? ll
                : decodeURIComponent(rt),
          );
        }
      },
      Js = (Le, _e) => {
        (Le.stopPropagation(),
          !(_e === "全部" || _e === "默认分组") && (je(_e), q(!0)));
      },
      Xs = () => {
        if (X) {
          g(X);
          const Le = Qe ? Qe.filter((yt) => yt !== X) : null,
            _e = (Ze || []).filter((yt) => yt !== X);
          (Le && (Ye(Le), be.set(rd, Le)),
            Ue(_e),
            be.set(xu, _e),
            Ri({ ...(Le ? { order: Le } : {}), hidden: _e }),
            Pt === X && Wt("全部"),
            q(!1),
            je(null));
        }
      },
      gn = (Le, _e) => {
        (Le.stopPropagation(),
          ye(_e),
          oe(
            _e.decoration || {
              color: "#FFF1F7",
              textColor: "#6A5460",
              text: "标签",
            },
          ),
          ne(!0));
      },
      sn = () => {
        xe && (x(xe.id, { decoration: R }), ne(!1));
      },
      ln = (Le, _e) => {
        (Le.stopPropagation(),
          H(_e),
          _e === "全部"
            ? (U(N.name), pe(N.color))
            : _e === ll
              ? (U(B.label), pe(B.color))
              : (U(_e), pe(v[_e] || "#3B82F6")),
          ie(!0));
      },
      rn = () => {
        if (ee === "全部") {
          Y.trim() && (w({ name: Y.trim(), color: ce }), ie(!1));
          return;
        }
        if (ee === ll) {
          Y.trim() &&
            (F({ label: Y.trim(), color: ce }), ok(Y.trim(), ce), Ri(), ie(!1));
          return;
        }
        if (Y.trim()) {
          const Le = Y.trim();
          (b(ee, Le, ce), Pt === ee && Wt(Le));
          const _e = Qe ? Qe.map((rt) => (rt === ee ? Le : rt)) : null,
            yt = (Ze || []).map((rt) => (rt === ee ? Le : rt));
          (_e && (Ye(_e), be.set(rd, _e)),
            Ue(yt),
            be.set(xu, yt),
            Ri({ ...(_e ? { order: _e } : {}), hidden: yt }),
            ie(!1));
        }
      },
      wt = () => {
        $e.trim() && (h($e.trim(), Xe), tt(""), Fe(!1), Wt($e.trim()));
      },
      xs = c.filter((Le) => {
        var lt, it, Ht;
        const _e = Le.group || "默认分组",
          yt = Pt === "全部" || _e === Pt,
          rt = ct.toLowerCase(),
          ze =
            !ct ||
            ((lt = Le.name) == null ? void 0 : lt.toLowerCase().includes(rt)) ||
            ((it = Le.nickname) == null
              ? void 0
              : it.toLowerCase().includes(rt)) ||
            ((Ht = Le.remark) == null ? void 0 : Ht.toLowerCase().includes(rt));
        return yt && ze;
      }),
      ot = l.useMemo(() => {
        const Le = new Set();
        return (
          (p || [])
            .filter((_e) => _e && !_e.isGroup && _e.contactId)
            .forEach((_e) => {
              var lt, it;
              const yt = _e.contactId,
                rt =
                  (it =
                    (lt = _e == null ? void 0 : _e.settings) == null
                      ? void 0
                      : lt.blockedRoles) == null
                    ? void 0
                    : it[yt];
              rt != null &&
                (typeof rt == "number" ||
                  (typeof rt == "object" &&
                    (rt == null ? void 0 : rt.blockedAt) != null &&
                    (rt == null ? void 0 : rt.unblockedAt) == null)) &&
                Le.add(yt);
            }),
          Le
        );
      }, [p]),
      st = l.useMemo(() => {
        const _e = (Array.isArray(k) ? k : []).filter(
          (yt) => yt && ot.has(yt.contactId),
        );
        return (
          _e.sort((yt, rt) => (rt.createdAt || 0) - (yt.createdAt || 0)),
          _e
        );
      }, [k, ot]),
      $t = l.useMemo(
        () =>
          (he && st.find((Le) => (Le == null ? void 0 : Le.id) === he)) || null,
        [he, st],
      ),
      Ft = (Le) => {
        Le != null &&
          Le.id &&
          (ge(Le.id),
          Le.status === "pending" &&
            (E == null || E(Le.id, { viewedAt: Date.now() })));
      },
      es = (Le) => {
        var Ht, is, os, as;
        if (!(Le != null && Le.contactId)) return;
        const _e = Le.contactId,
          yt = (p || []).find((vs) => vs && !vs.isGroup && vs.contactId === _e);
        if (!yt) return;
        const rt =
            (Ht = yt.settings) != null &&
            Ht.blockedRoles &&
            typeof yt.settings.blockedRoles == "object"
              ? yt.settings.blockedRoles
              : {},
          ze = rt == null ? void 0 : rt[_e],
          lt =
            typeof ze == "number"
              ? ze
              : typeof ze == "object" &&
                  (ze == null ? void 0 : ze.blockedAt) != null
                ? ze.blockedAt
                : Date.now(),
          it = { ...rt, [_e]: { blockedAt: lt, unblockedAt: Date.now() } };
        if (
          (j == null || j(yt.id, { blockedRoles: it }),
          E == null || E(Le.id, { status: "accepted", handledAt: Date.now() }),
          T == null ||
            T(
              yt.id,
              `[系统提示：已解除拉黑 ${((is = (c || []).find((vs) => vs.id === _e)) == null ? void 0 : is.remark) || ((os = (c || []).find((vs) => vs.id === _e)) == null ? void 0 : os.nickname) || ((as = (c || []).find((vs) => vs.id === _e)) == null ? void 0 : as.name) || "对方"}]`,
              null,
              "system",
            ),
          typeof I == "function")
        ) {
          const vs = new Date().toISOString(),
            ts = {
              id: `sys-unblocked-inject-${Date.now()}-${_e}`,
              sender: "system",
              type: "system",
              timestamp: vs,
              text: "[系统提示：用户刚刚解除了对你的拉黑。你现在可以把这当成“你主动开口的一次机会”，请读取最近上下文与情绪走向，并用你的人设做出真实反应。\n输出必须像微信短句连发：总共 5–10 句，每句用 `||` 分隔（不要编号、不要长篇大段），每句尽量短，允许停顿与情绪递进。\n若本会话开启了「实时翻译」，请为每一条气泡追加译文标签：在该气泡末尾追加 ` [TRANS:译文]`（译文必须是中文且不含任何英文字母）。保持原文不变，译文用更自然的中文表达。\n禁止提及系统/模型/提示词等元信息。]",
            };
          setTimeout(() => {
            try {
              I(yt.id, !1, "", [
                ...((yt == null ? void 0 : yt.messages) || []),
                ts,
              ]);
            } catch {}
          }, 220);
        }
        try {
          M == null || M();
        } catch {}
        ge(null);
      },
      At = (Le) => {
        Le != null && Le.id && (G({ req: Le }), Q(""));
      },
      Jt = () => {
        var rt, ze, lt;
        const Le = J == null ? void 0 : J.req;
        if (!(Le != null && Le.id) || !(Le != null && Le.contactId)) {
          G(null);
          return;
        }
        const _e = Le.contactId,
          yt = String(we || "")
            .trim()
            .slice(0, 200);
        E == null ||
          E(Le.id, {
            status: "rejected",
            handledAt: Date.now(),
            rejectReason: yt || "",
          });
        try {
          const it =
            (p || []).find((Ht) => Ht && !Ht.isGroup && Ht.contactId === _e) ||
            (Le.chatId
              ? (p || []).find((Ht) => Ht && Ht.id === Le.chatId)
              : null);
          if (it != null && it.id) {
            const Ht =
              ((rt = (c || []).find((is) => is.id === _e)) == null
                ? void 0
                : rt.remark) ||
              ((ze = (c || []).find((is) => is.id === _e)) == null
                ? void 0
                : ze.nickname) ||
              ((lt = (c || []).find((is) => is.id === _e)) == null
                ? void 0
                : lt.name) ||
              "对方";
            if (
              (T == null ||
                T(
                  it.id,
                  `[系统提示] 你拒绝了 ${Ht} 的解除拉黑申请${yt ? `：${yt}` : ""}`,
                  null,
                  "system",
                ),
              typeof I == "function")
            ) {
              const is = {
                id: `sys-reject-unblock-${Date.now()}-${_e}`,
                sender: "system",
                type: "system",
                timestamp: new Date().toISOString(),
                text: `[系统提示：用户拒绝了解除对你的拉黑。${yt ? `用户给出的拒绝理由是：「${yt}」。` : "用户未填写理由。"}
你必须承接最近上下文与此理由，用你的人设做出真实反应。
输出必须像微信短句连发：总共 5–10 句，每句用 \`||\` 分隔（不要编号、不要长篇大段），每句尽量短，允许停顿与情绪递进。
若本会话开启了「实时翻译」，请为每一条气泡追加译文标签：在该气泡末尾追加 \` [TRANS:译文]\`（译文必须是中文且不含任何英文字母）。保持原文不变，译文用更自然的中文表达。
禁止提及系统/模型/提示词等元信息。]`,
              };
              setTimeout(() => {
                try {
                  I(it.id, !1, "", [...(it.messages || []), is]);
                } catch {}
              }, 220);
            }
          }
        } catch {}
        try {
          M == null || M();
        } catch {}
        (G(null), ge(null));
      },
      Vt = Pt === ll,
      qt = (() => {
        let Le = (p || []).filter((_e) => _e.isGroup === !0);
        if (ct.trim()) {
          const _e = ct.toLowerCase();
          Le = Le.filter((yt) =>
            (yt.groupName || "").toLowerCase().includes(_e),
          );
        }
        return [...Le].sort(
          (_e, yt) => new Date(yt.timestamp || 0) - new Date(_e.timestamp || 0),
        );
      })(),
      Lt = async () => {
        if (!bs.name) return;
        Ve(!0);
        const Le =
          String(bs.group || "")
            .trim()
            .replace(/\s+/g, " ") || "默认分组";
        (await d({ ...bs, group: Le }, Le, bs.remark),
          Ve(!1),
          $(!1),
          ss({
            name: "",
            gender: "female",
            setting: "",
            avatar: "",
            persona: "friend",
            group: "默认分组",
            remark: "",
            decoration: {
              color: "#FFF1F7",
              textColor: "#6A5460",
              text: "标签",
            },
            boundUserPresetId: "",
          }));
      },
      Qt = () => {
        se.trim() &&
          (h(se.trim(), Ae), ss({ ...bs, group: se.trim() }), Te(""));
      },
      js = (Le) => {
        var rt;
        const _e = (rt = Le.target.files) == null ? void 0 : rt[0];
        if (!_e) return;
        const yt = new FileReader();
        ((yt.onload = (ze) => {
          try {
            const lt = JSON.parse(ze.target.result);
            (u(lt, Pt === "全部" ? "默认分组" : Pt),
              z(!1),
              alert("角色导入成功！"));
          } catch {
            alert("导入失败，请确认是导出的角色 JSON 文件。");
          }
          Le.target.value = "";
        }),
          yt.readAsText(_e));
      },
      cs = async (Le) => {
        var yt;
        const _e = (yt = Le.target.files) == null ? void 0 : yt[0];
        if (_e)
          try {
            const rt = await $r(_e, 400, 0.7);
            ss({ ...bs, avatar: rt });
          } catch {
            const ze = new FileReader();
            ((ze.onload = (lt) => {
              ss({ ...bs, avatar: lt.target.result });
            }),
              ze.readAsDataURL(_e));
          }
        Le.target.value = "";
      };
    return ke
      ? e.jsx(JA, {
          contact: ke,
          onBack: () => W(null),
          onSendMessage: (Le) => {
            (t(Le), W(null));
          },
          onViewMoments: (Le) => {
            (s(Le), W(null));
          },
        })
      : e.jsxs("div", {
          className:
            "chat-app-contacts flex flex-col h-full bg-[#dfe1e5] relative",
          children: [
            e.jsxs("div", {
              className:
                "chat-app-contacts-header flex flex-col bg-[#dfe1e5] pt-16 sticky top-0 z-20",
              children: [
                e.jsxs("div", {
                  className:
                    "chat-app-contacts-tabs flex items-end px-2 gap-1 overflow-x-auto no-scrollbar",
                  children: [
                    e.jsx(Gh, {
                      sensors: _s,
                      collisionDetection: ov,
                      onDragEnd: qs,
                      children: e.jsx(du, {
                        items: jt,
                        strategy: P3,
                        children: jt.map((Le) =>
                          e.jsx(
                            VY,
                            {
                              stripKey: Le,
                              activeGroup: Pt,
                              setActiveGroup: Wt,
                              allGroupSettings: N,
                              groupChatShortcut: B,
                              groupColors: v,
                              nightMode: A,
                              handleEditGroupClick: ln,
                              handleDeleteGroupClick: Js,
                              stripGroupChatsId: ll,
                            },
                            Le,
                          ),
                        ),
                      }),
                    }),
                    e.jsx("button", {
                      onClick: () => z(!0),
                      className:
                        "ml-1 p-1.5 rounded-full hover:bg-white/40 text-gray-600 transition-colors flex-shrink-0",
                      children: e.jsx(ea, { size: 16 }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "chat-app-contacts-toolbar bg-white px-2 py-2 flex items-center gap-2 border-b border-gray-200 shadow-sm z-20",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1 text-gray-500 flex-shrink-0",
                      children: [
                        e.jsx("button", {
                          onClick: () => {
                            (navigator.vibrate && navigator.vibrate(20),
                              r == null || r());
                          },
                          className:
                            "p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30",
                          "aria-label": "回到桌面",
                          children: e.jsx(un, { size: 18 }),
                        }),
                        e.jsx("button", {
                          onClick: () => Bs(),
                          disabled: It >= ae.length - 1,
                          className:
                            "p-1.5 rounded-full hover:bg-gray-100 disabled:opacity-30",
                          children: e.jsx(Kn, { size: 18 }),
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (navigator.vibrate && navigator.vibrate(20),
                              Oe(!0));
                          },
                          className: "p-1.5 rounded-full hover:bg-gray-100",
                          "aria-label": "分组与版面",
                          title: "分组与版面",
                          children: e.jsx(Ai, { size: 16 }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "chat-app-contacts-search-wrap min-w-0 flex-1 flex items-center bg-[#f1f3f4] rounded-full px-4 py-1.5 border border-transparent focus-within:border-gray-300 focus-within:bg-white focus-within:shadow-sm transition-all",
                      children: [
                        e.jsx("div", {
                          className: "text-gray-500 mr-2",
                          children: e.jsx(pr, { size: 14 }),
                        }),
                        e.jsx("input", {
                          type: "search",
                          autoComplete: "off",
                          value: ct,
                          onChange: (Le) => Kt(Le.target.value),
                          className:
                            "min-w-0 flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-500",
                          placeholder: Vt
                            ? `在 ${B.label} 中搜索...`
                            : `在 ${Pt === "全部" ? N.name : Pt} 中搜索...`,
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => {
                            (navigator.vibrate && navigator.vibrate(20),
                              M == null || M(),
                              re(!0));
                          },
                          className:
                            "text-gray-400 ml-2 relative p-1 rounded-full hover:bg-black/5 transition-colors",
                          "aria-label": "被拉黑角色的好友申请",
                          title: "被拉黑角色的好友申请",
                          children: [
                            e.jsx(Gi, { size: 14 }),
                            st.filter(
                              (Le) =>
                                Le && Le.status === "pending" && !Le.viewedAt,
                            ).length > 0 &&
                              e.jsx("span", {
                                className:
                                  "absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full",
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "flex items-center gap-1 text-gray-500 chat-app-contacts-toolbar-menu-wrap flex-shrink-0",
                      children: e.jsx("button", {
                        onClick: () => Fe(!0),
                        className:
                          "p-1.5 rounded-full hover:bg-gray-100 chat-app-contacts-toolbar-menu-btn",
                        "aria-label": "更多",
                        children: e.jsxs("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "18",
                          height: "18",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "lucide lucide-ellipsis-vertical",
                          "aria-hidden": "true",
                          children: [
                            e.jsx("circle", { cx: "12", cy: "12", r: "1" }),
                            e.jsx("circle", { cx: "12", cy: "5", r: "1" }),
                            e.jsx("circle", { cx: "12", cy: "19", r: "1" }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "chat-app-contacts-content flex-1 bg-white overflow-y-auto p-4 pb-24",
              children: e.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [
                  e.jsxs("div", {
                    className: "mb-8 text-center pt-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "inline-block p-3 bg-gray-100 rounded-full mb-3",
                        children: e.jsx("div", {
                          className:
                            "w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold",
                          style: {
                            backgroundColor: Vt
                              ? B.color
                              : Pt === "全部"
                                ? N.color
                                : v[Pt] || "#000000",
                          },
                          children: (Vt
                            ? B.label
                            : Pt === "全部"
                              ? N.name
                              : Pt)[0],
                        }),
                      }),
                      e.jsx("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: Vt ? B.label : Pt === "全部" ? N.name : Pt,
                      }),
                      e.jsx("p", {
                        className: "text-gray-500 text-sm mt-1",
                        children: Vt
                          ? `共 ${qt.length} 个群聊`
                          : `找到 ${xs.length} 个联系人`,
                      }),
                    ],
                  }),
                  Vt
                    ? qt.length > 0
                      ? e.jsx(
                          "div",
                          {
                            className: "grid grid-cols-2 gap-4 p-2",
                            children: qt.map((Le) => {
                              var lt;
                              const _e = B.color || "#FFF1F7",
                                yt = Le.groupName || "群聊",
                                rt =
                                  ((lt = Le.settings) == null
                                    ? void 0
                                    : lt.groupAvatar) || nS,
                                ze = (Le.memberIds || []).length + 1;
                              return e.jsxs(
                                We.div,
                                {
                                  layoutId: Le.id,
                                  onClick: () => a && a(Le.id),
                                  className:
                                    "relative w-full aspect-[1.2/1] group cursor-pointer perspective-1000 [container-type:inline-size] min-w-0",
                                  children: [
                                    e.jsxs("div", {
                                      className: "absolute inset-0 top-[15%]",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute -top-[15%] left-0 w-[35%] h-[30%] rounded-t-xl transition-colors duration-300",
                                          style: { backgroundColor: _e },
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 rounded-2xl transition-colors duration-300",
                                          style: { backgroundColor: _e },
                                          children: e.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute inset-0 z-10 pointer-events-none",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute top-[25%] left-[10%] right-[10%] bottom-[20%] bg-white/90 rounded-lg shadow-sm transform -rotate-3 origin-bottom-left transition-transform duration-500 group-hover:-rotate-6 group-hover:-translate-y-2",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute top-[20%] left-[18%] right-[18%] bottom-[20%] bg-white p-1.5 rounded-lg shadow-sm transform rotate-3 origin-bottom-right transition-all duration-500 ease-out group-hover:rotate-0 group-hover:-translate-y-8 group-hover:scale-105",
                                          children: e.jsx("div", {
                                            className:
                                              "w-full h-full rounded-md overflow-hidden relative bg-gray-100",
                                            children: e.jsx("img", {
                                              src: rt,
                                              alt: yt,
                                              className:
                                                "w-full h-full object-cover",
                                              loading: "lazy",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute bottom-0 inset-x-0 h-[50%] z-20 filter drop-shadow-lg",
                                      children: e.jsxs("div", {
                                        className:
                                          "w-full h-full relative rounded-b-2xl rounded-t-lg overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_10px_rgba(0,0,0,0.1)]",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 backdrop-blur-3xl transition-colors duration-300",
                                            style: {
                                              backgroundColor: `${_e}A6`,
                                            },
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none",
                                            style: {
                                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                            },
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] rounded-b-2xl rounded-t-lg pointer-events-none",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 p-[clamp(0.5rem,4cqw,1rem)] flex flex-col justify-end",
                                            children: e.jsxs("div", {
                                              className:
                                                "flex flex-col min-w-0",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "font-bold text-[clamp(0.6875rem,6.5cqw,0.875rem)] truncate drop-shadow-md text-white leading-tight",
                                                  children: yt,
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[clamp(0.5625rem,4.5cqw,0.625rem)] truncate font-medium text-white/80 leading-tight mt-0.5",
                                                  children:
                                                    ze > 0
                                                      ? `${ze} 人`
                                                      : "群聊",
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                Le.id,
                              );
                            }),
                          },
                          "group-chats",
                        )
                      : e.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center py-20 text-gray-400",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4",
                              children: e.jsx(Vi, {
                                size: 32,
                                className: "opacity-20",
                              }),
                            }),
                            e.jsx("h3", {
                              className:
                                "text-lg font-medium text-gray-900 mb-1",
                              children: "暂无群聊",
                            }),
                            e.jsx("p", {
                              className: "text-sm",
                              children:
                                "在「加号」中选择「新建群聊」创建群聊。",
                            }),
                          ],
                        })
                    : xs.length > 0
                      ? e.jsx(
                          "div",
                          {
                            className: "grid grid-cols-2 gap-4 p-2",
                            children: xs.map((Le) => {
                              var _e, yt, rt, ze, lt, it, Ht;
                              return e.jsxs(
                                We.div,
                                {
                                  layoutId: Le.id,
                                  onClick: () => W(Le),
                                  className:
                                    "relative w-full aspect-[1.2/1] group cursor-pointer perspective-1000 [container-type:inline-size] min-w-0",
                                  children: [
                                    e.jsxs("div", {
                                      className: "absolute inset-0 top-[15%]",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute -top-[15%] left-0 w-[35%] h-[30%] rounded-t-xl transition-colors duration-300",
                                          style: {
                                            backgroundColor:
                                              ((_e = Le.decoration) == null
                                                ? void 0
                                                : _e.color) || "#FFF1F7",
                                          },
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 rounded-2xl transition-colors duration-300",
                                          style: {
                                            backgroundColor:
                                              ((yt = Le.decoration) == null
                                                ? void 0
                                                : yt.color) || "#FFF1F7",
                                          },
                                          children: e.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute inset-0 z-10 pointer-events-none",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute top-[25%] left-[10%] right-[10%] bottom-[20%] bg-white/90 rounded-lg shadow-sm transform -rotate-3 origin-bottom-left transition-transform duration-500 group-hover:-rotate-6 group-hover:-translate-y-2",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute top-[20%] left-[18%] right-[18%] bottom-[20%] bg-white p-1.5 rounded-lg shadow-sm transform rotate-3 origin-bottom-right transition-all duration-500 ease-out group-hover:rotate-0 group-hover:-translate-y-8 group-hover:scale-105",
                                          children: e.jsx("div", {
                                            className:
                                              "w-full h-full rounded-md overflow-hidden relative bg-gray-100",
                                            children: e.jsx("img", {
                                              src: Le.avatar,
                                              alt: Le.name,
                                              className:
                                                "w-full h-full object-cover",
                                              loading: "lazy",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute bottom-0 inset-x-0 h-[50%] z-20 filter drop-shadow-lg",
                                      children: e.jsxs("div", {
                                        className:
                                          "w-full h-full relative rounded-b-2xl rounded-t-lg overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_10px_rgba(0,0,0,0.1)]",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 backdrop-blur-3xl transition-colors duration-300",
                                            style: {
                                              backgroundColor:
                                                (rt = Le.decoration) != null &&
                                                rt.color
                                                  ? `${Le.decoration.color}A6`
                                                  : "#FFF1F7A6",
                                            },
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none",
                                            style: {
                                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                            },
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] rounded-b-2xl rounded-t-lg pointer-events-none",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 p-[clamp(0.5rem,4cqw,1rem)] flex flex-col justify-end",
                                            children: e.jsxs("div", {
                                              className:
                                                "flex items-center justify-between gap-1.5 sm:gap-2 min-w-0",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex flex-col min-w-0 flex-1",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "font-bold text-[clamp(0.6875rem,6.5cqw,0.875rem)] truncate drop-shadow-md leading-tight",
                                                      style: {
                                                        color:
                                                          ((ze =
                                                            Le.decoration) ==
                                                          null
                                                            ? void 0
                                                            : ze.textColor) ||
                                                          "#ffffff",
                                                      },
                                                      children:
                                                        Le.remark ||
                                                        Le.nickname ||
                                                        Le.name,
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-[clamp(0.5625rem,4.5cqw,0.625rem)] truncate font-medium leading-tight mt-0.5",
                                                      style: {
                                                        color:
                                                          (lt =
                                                            Le.decoration) !=
                                                            null && lt.textColor
                                                            ? `${Le.decoration.textColor}cc`
                                                            : "#ffffffcc",
                                                      },
                                                      children:
                                                        ((it = Le.decoration) ==
                                                        null
                                                          ? void 0
                                                          : it.text) || "标签",
                                                    }),
                                                  ],
                                                }),
                                                e.jsx("button", {
                                                  type: "button",
                                                  className:
                                                    "shrink-0 w-[clamp(1.5rem,12cqw,1.75rem)] h-[clamp(1.5rem,12cqw,1.75rem)] rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-md transition-colors border border-white/20 pointer-events-auto",
                                                  onClick: (is) => gn(is, Le),
                                                  children: e.jsx(_c, {
                                                    className:
                                                      "w-[clamp(0.625rem,5cqw,0.75rem)] h-[clamp(0.625rem,5cqw,0.75rem)]",
                                                    style: {
                                                      color:
                                                        ((Ht = Le.decoration) ==
                                                        null
                                                          ? void 0
                                                          : Ht.textColor) ||
                                                        "#ffffff",
                                                    },
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                Le.id,
                              );
                            }),
                          },
                          Pt,
                        )
                      : e.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center py-20 text-gray-400",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4",
                              children: e.jsx(pr, {
                                size: 32,
                                className: "opacity-20",
                              }),
                            }),
                            e.jsx("h3", {
                              className:
                                "text-lg font-medium text-gray-900 mb-1",
                              children: "未找到联系人",
                            }),
                            e.jsx("p", {
                              className: "text-sm",
                              children: "尝试搜索其他内容或添加新联系人。",
                            }),
                          ],
                        }),
                ],
              }),
            }),
            e.jsx(WY, {
              open: vt,
              onClose: () => Oe(!1),
              activeGroup: Pt,
              setActiveGroup: Wt,
              contactsTabOrder: Qe,
              setContactsTabOrder: Ye,
              contactsTabHidden: Ze,
              setContactsTabHidden: Ue,
              groupChatShortcut: B,
              setGroupChatShortcut: F,
              saveGroupChatShortcut: ok,
            }),
            K &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",
                children: e.jsxs(We.div, {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  className:
                    "bg-white w-full max-w-xs rounded-2xl p-6 shadow-2xl text-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4",
                      children: e.jsx(_n, { size: 24 }),
                    }),
                    e.jsx("h3", {
                      className: "text-lg font-bold text-gray-900 mb-2",
                      children: "删除分组?",
                    }),
                    e.jsxs("p", {
                      className: "text-sm text-gray-500 mb-6",
                      children: [
                        '确定要删除 "',
                        X,
                        '" 分组吗？',
                        e.jsx("br", {}),
                        "该分组下的联系人将被移动到默认分组。",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx("button", {
                          onClick: () => q(!1),
                          className:
                            "flex-1 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-200",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          onClick: Xs,
                          className:
                            "flex-1 py-2.5 bg-red-500 text-white rounded-xl font-medium text-sm hover:bg-red-600 shadow-lg shadow-red-500/30",
                          children: "删除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            V &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-50 bg-white/10 backdrop-blur-md flex items-center justify-center p-4",
                children: e.jsxs(We.div, {
                  initial: { opacity: 0, scale: 0.9, rotate: -2 },
                  animate: { opacity: 1, scale: 1, rotate: 0 },
                  className:
                    "chat-app-modal-personal-tag bg-white w-full max-w-xs rounded-[2rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-2xl opacity-60 pointer-events-none",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full blur-2xl opacity-60 pointer-events-none",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-8",
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-xl font-black text-gray-800 tracking-tight",
                              children: "个性化标签",
                            }),
                            e.jsx("button", {
                              onClick: () => ne(!1),
                              className:
                                "w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors",
                              children: e.jsx(Ts, { size: 16 }),
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "mb-8 flex justify-center",
                          children: e.jsxs("div", {
                            className: "relative group",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "w-48 h-16 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105",
                                style: { backgroundColor: R.color },
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "font-bold text-lg px-4 truncate max-w-full",
                                    style: { color: R.textColor || "#ffffff" },
                                    children: R.text || "预览效果",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute -bottom-4 left-2 right-2 h-4 rounded-full blur-lg opacity-30 transition-colors duration-300",
                                style: { backgroundColor: R.color },
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "relative group",
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: R.text,
                                  onChange: (Le) =>
                                    oe({ ...R, text: Le.target.value }),
                                  className:
                                    "w-full px-4 py-3 bg-gray-50 rounded-xl text-center font-bold text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-black/5 focus:bg-white transition-all",
                                  placeholder: "输入标签文字...",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 rounded-xl border border-gray-100 pointer-events-none group-hover:border-gray-200 transition-colors",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex gap-3",
                              children: [
                                e.jsxs("div", {
                                  className: "flex-1 space-y-2",
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "text-[0.625rem] font-bold text-gray-400 uppercase tracking-wider text-center block",
                                      children: "背景色",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "h-12 rounded-xl overflow-hidden relative cursor-pointer shadow-sm hover:shadow-md transition-shadow group",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors",
                                          children: e.jsx("div", {
                                            className:
                                              "w-6 h-6 rounded-full border-2 border-white shadow-sm",
                                            style: { backgroundColor: R.color },
                                          }),
                                        }),
                                        e.jsx("input", {
                                          type: "color",
                                          value: R.color,
                                          onChange: (Le) =>
                                            oe({
                                              ...R,
                                              color: Le.target.value,
                                            }),
                                          className:
                                            "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 space-y-2",
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "text-[0.625rem] font-bold text-gray-400 uppercase tracking-wider text-center block",
                                      children: "文字色",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "h-12 rounded-xl overflow-hidden relative cursor-pointer shadow-sm hover:shadow-md transition-shadow group",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors",
                                          children: e.jsx("div", {
                                            className:
                                              "w-6 h-6 rounded-full border-2 border-white shadow-sm",
                                            style: {
                                              backgroundColor:
                                                R.textColor || "#ffffff",
                                            },
                                          }),
                                        }),
                                        e.jsx("input", {
                                          type: "color",
                                          value: R.textColor || "#ffffff",
                                          onChange: (Le) =>
                                            oe({
                                              ...R,
                                              textColor: Le.target.value,
                                            }),
                                          className:
                                            "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: sn,
                              className:
                                "w-full py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl font-bold text-sm hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-2",
                              children: [
                                e.jsx(_o, { size: 16 }),
                                e.jsx("span", { children: "保存设计" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            le &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-50 bg-white/10 backdrop-blur-md flex items-center justify-center p-4",
                children: e.jsxs(We.div, {
                  initial: { opacity: 0, scale: 0.9, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  className:
                    "bg-white w-full max-w-xs rounded-[2rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-8",
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-xl font-black text-gray-800 tracking-tight",
                              children:
                                ee === "全部"
                                  ? "编辑标签"
                                  : ee === ll
                                    ? "编辑群聊入口"
                                    : "编辑分组",
                            }),
                            e.jsx("button", {
                              onClick: () => ie(!1),
                              className:
                                "w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center text-gray-400 transition-all",
                              children: e.jsx(Ts, { size: 16 }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[0.625rem] font-bold text-gray-400 uppercase tracking-wider mb-2 block pl-1",
                                  children: "名称",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: Y,
                                  onChange: (Le) => U(Le.target.value),
                                  className:
                                    "w-full px-4 py-4 bg-gray-50 rounded-2xl text-lg font-bold text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all disabled:opacity-50",
                                  disabled: ee === "默认分组",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[0.625rem] font-bold text-gray-400 uppercase tracking-wider mb-2 block pl-1",
                                  children: "主题色",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative h-16 rounded-2xl overflow-hidden shadow-sm group cursor-pointer transition-transform hover:scale-[1.02]",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 transition-colors duration-300",
                                      style: { backgroundColor: ce },
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors",
                                      children: e.jsxs("div", {
                                        className:
                                          "bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30 flex items-center gap-2",
                                        children: [
                                          e.jsx(_o, {
                                            size: 16,
                                            className:
                                              "text-white drop-shadow-md",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-white font-bold text-sm drop-shadow-md uppercase tracking-wider",
                                            children: "点击更换颜色",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx("input", {
                                      type: "color",
                                      value: ce,
                                      onChange: (Le) => pe(Le.target.value),
                                      className:
                                        "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: rn,
                              className:
                                "w-full py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl font-bold text-sm hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-2",
                              children: [
                                e.jsx(On, { size: 18 }),
                                e.jsx("span", { children: "保存更改" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            Se &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-50 bg-white/10 backdrop-blur-md flex items-center justify-center p-4",
                children: e.jsxs(We.div, {
                  initial: { opacity: 0, scale: 0.9, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  className:
                    "bg-white w-full max-w-xs rounded-[2rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 relative overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-8",
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-xl font-black text-gray-800 tracking-tight",
                              children: "新建分组",
                            }),
                            e.jsx("button", {
                              onClick: () => Fe(!1),
                              className:
                                "w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center text-gray-400 transition-all",
                              children: e.jsx(Ts, { size: 16 }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[0.625rem] font-bold text-gray-400 uppercase tracking-wider mb-2 block pl-1",
                                  children: "名称",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: $e,
                                  onChange: (Le) => tt(Le.target.value),
                                  className: