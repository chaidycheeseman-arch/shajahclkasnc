              R.id,
            ),
          }),
          e.jsx(Os, {
            children:
              M &&
              e.jsx(We.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "absolute inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-8",
                onClick: () => E(null),
                children: e.jsxs(We.div, {
                  initial: { scale: 0.9, y: 20 },
                  animate: { scale: 1, y: 0 },
                  exit: { scale: 0.9, y: 20 },
                  className:
                    "bg-white text-black p-6 rounded-sm max-w-sm w-full shadow-2xl relative",
                  onClick: (H) => H.stopPropagation(),
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex justify-between items-center mb-6 border-b border-black/10 pb-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-xs font-bold uppercase tracking-widest",
                          children: "证据",
                        }),
                        e.jsx("span", {
                          className: "text-xs font-mono text-gray-500",
                          children: M.time,
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "aspect-square bg-gray-100 mb-4 overflow-hidden relative group flex items-center justify-center",
                      children: e.jsxs("div", {
                        className: "text-center p-4",
                        children: [
                          e.jsx(Y0, {
                            size: 48,
                            className: "mx-auto mb-2 opacity-20",
                          }),
                          e.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "证据图片占位符",
                          }),
                        ],
                      }),
                    }),
                    e.jsx("h3", {
                      className: "text-lg font-serif italic mb-2",
                      children: M.evidence_desc,
                    }),
                    e.jsxs("p", {
                      className:
                        "text-xs text-gray-500 font-sans leading-relaxed",
                      children: ["拍摄于 ", M.location, "。"],
                    }),
                    e.jsx("button", {
                      onClick: () => E(null),
                      className:
                        "absolute -top-12 right-0 text-white/50 hover:text-white",
                      children: e.jsx(Ts, { size: 24 }),
                    }),
                  ],
                }),
              }),
          }),
        ],
      });
    }
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-[#fafafa] font-serif text-[#1a1a1a]",
      children: [
        e.jsxs("div", {
          className:
            "pt-12 px-6 pb-4 flex items-center justify-between relative z-10 border-b border-gray-100",
          children: [
            e.jsx("button", {
              onClick: s,
              className: "p-2 -ml-2 text-gray-500 hover:text-gray-900",
              children: e.jsx(un, { size: 24, strokeWidth: 1 }),
            }),
            e.jsx("h2", {
              className:
                "text-sm font-bold uppercase tracking-widest text-gray-900",
              children: "查岗历史",
            }),
            e.jsx("div", { className: "w-6" }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 overflow-y-auto p-6 relative z-10 no-scrollbar pb-24",
          children: [
            (x == null ? void 0 : x.date) === L &&
              ((le = x.pages) == null ? void 0 : le.length) > 0 &&
              e.jsx("div", {
                className: "space-y-4 mb-4",
                children: e.jsxs(We.div, {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  onClick: z,
                  className: `bg-black text-white p-4 rounded-xl shadow-sm transition-all flex items-center justify-between group ${N ? "cursor-wait opacity-90" : "cursor-pointer hover:shadow-md"}`,
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl border border-white/30",
                          children:
                            ((xe =
                              (je =
                                (X = (ie = x.pages) == null ? void 0 : ie[0]) ==
                                null
                                  ? void 0
                                  : X.traces) == null
                                ? void 0
                                : je[0]) == null
                              ? void 0
                              : xe.mood_emoji) || "📅",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className: "font-bold text-sm text-white",
                              children: "今日行踪",
                            }),
                            e.jsx("p", {
                              className: "text-xs text-white/60",
                              children: N
                                ? "正在生成/更新…"
                                : `已记录到 ${String(F).padStart(2, "0")}:00 · 共 ${x.pages.length} 小时`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-colors",
                      children: N
                        ? e.jsx(Sn, { size: 14, className: "animate-spin" })
                        : e.jsx(xr, { size: 12, fill: "currentColor" }),
                    }),
                  ],
                }),
              }),
            (() => {
              var oe;
              const ye = h.filter((ee) => ee.date !== B && ee.date !== L),
                R =
                  (x == null ? void 0 : x.date) === L &&
                  ((oe = x.pages) == null ? void 0 : oe.length) > 0;
              return ye.length === 0 && !R
                ? e.jsxs("div", {
                    className:
                      "h-full flex flex-col items-center justify-center text-center opacity-40",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4",
                        children: e.jsx(G1, {
                          size: 32,
                          className: "text-gray-400",
                        }),
                      }),
                      e.jsx("p", {
                        className: "text-sm font-sans text-gray-500",
                        children: "暂无查岗历史。",
                      }),
                    ],
                  })
                : ye.length === 0
                  ? null
                  : e.jsx("div", {
                      className: "space-y-4",
                      children: ye.map((ee) => {
                        var H;
                        return e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            onClick: () => {
                              A(ee);
                              const Y = $(ee);
                              C(Math.max(Y.length - 1, 0));
                            },
                            className:
                              "bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all flex items-center justify-between group relative overflow-hidden",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-xl border border-gray-100",
                                    children:
                                      ((H = ee.traces[0]) == null
                                        ? void 0
                                        : H.mood_emoji) || "📅",
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h3", {
                                        className:
                                          "font-bold text-sm text-gray-900",
                                        children: ee.date,
                                      }),
                                      e.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                          ee.traces.length,
                                          " 个时刻已记录",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("button", {
                                    onClick: (Y) => {
                                      (Y.stopPropagation(), O(ee.id));
                                    },
                                    className:
                                      "w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:border-red-100 hover:text-red-500 transition-colors z-10",
                                    children: e.jsx(_n, { size: 14 }),
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-white transition-colors",
                                    children: e.jsx(xr, {
                                      size: 12,
                                      fill: "currentColor",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          ee.id,
                        );
                      }),
                    });
            })(),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#fafafa] via-[#fafafa] to-transparent z-20",
          children: e.jsx("button", {
            onClick: Z,
            disabled: v,
            className:
              "w-full py-4 bg-black text-white rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-50 shadow-lg flex items-center justify-center gap-2",
            children: v
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Sn, { size: 16, className: "animate-spin" }),
                    "扫描中...",
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [e.jsx(Y0, { size: 16 }), "开始新查岗"],
                }),
          }),
        }),
      ],
    });
  },
  ux = "phone_app_past_self_archive_v1",
  FG = (t) => {
    const s = String(t || "").trim();
    if (!s) return null;
    try {
      return JSON.parse(s);
    } catch {
      const n =
        s.match(/```json\s*([\s\S]*?)```/i) || s.match(/```([\s\S]*?)```/);
      if (n != null && n[1])
        try {
          return JSON.parse(n[1].trim());
        } catch {
          return null;
        }
      const a = s.match(/\{[\s\S]*\}/);
      if (a)
        try {
          return JSON.parse(a[0]);
        } catch {
          return null;
        }
      return null;
    }
  },
  zG = (t) =>
    Array.isArray(t)
      ? t.slice(0, 7).map((s, n) => {
          const a =
              (s == null ? void 0 : s.past) ||
              (s == null ? void 0 : s.Past) ||
              {},
            r =
              (s == null ? void 0 : s.present) ||
              (s == null ? void 0 : s.Present) ||
              {},
            i = Array.isArray(a.lines)
              ? a.lines.map((u) => String(u || "").trim()).filter(Boolean)
              : [String(a.text || a.body || "").trim()].filter(Boolean),
            o = Array.isArray(r.lines)
              ? r.lines.map((u) => String(u || "").trim()).filter(Boolean)
              : [String(r.text || r.body || "").trim()].filter(Boolean),
            c = Number(
              (s == null ? void 0 : s.pastWatermarkYear) ??
                (s == null ? void 0 : s.past_watermark_year),
            ),
            d = Number(
              (s == null ? void 0 : s.presentWatermarkYear) ??
                (s == null ? void 0 : s.present_watermark_year),
            );
          return {
            pastWatermarkYear: Number.isFinite(c) ? c : null,
            presentWatermarkYear: Number.isFinite(d) ? d : null,
            past: {
              lines: i.length
                ? i
                : [
                    n === 0
                      ? "如果重来一次，你还会选这条路吗？"
                      : n % 2 === 0
                        ? "你那时候最放不下的是哪件事？"
                        : "你能不能就告诉我一句实话？",
                  ],
            },
            present: {
              lines: o.length
                ? o
                : [
                    n % 2 === 0
                      ? "我想过了，其实没有你想得那么糟。"
                      : "行，我都告诉你。",
                  ],
            },
          };
        })
      : [],
  RG = (t, s, n) => {
    const a = Math.min(s, n),
      r = Math.max(s, n),
      i = t.length || 7;
    return t.map((o, c) => {
      let d = o.pastWatermarkYear,
        u = o.presentWatermarkYear;
      if (d == null || !Number.isFinite(Number(d))) {
        const f = Math.max(0, r - a - 1);
        d = a + (i <= 1 ? 0 : Math.round((c / (i - 1)) * f));
      }
      return (
        (d = Number(d)),
        (u == null || !Number.isFinite(Number(u))) &&
          (u =
            a +
            1 +
            (i <= 1 ? 0 : Math.round(((c + 1) / i) * Math.max(1, r - a - 1)))),
        (u = Number(u)),
        u <= d && (u = Math.min(r, d + 1)),
        u > r && (u = r),
        d < a && (d = a),
        { ...o, pastWatermarkYear: d, presentWatermarkYear: u }
      );
    });
  },
  db = (t, s = 14) => {
    const n = String(t ?? "");
    if (!n) return [""];
    const a = [];
    for (let r = 0; r < n.length; r += s) a.push(n.slice(r, r + s));
    return a;
  },
  PG = ({ contact: t, onBack: s, apiConfig: n }) => {
    const { chats: a, addApiLog: r, getRoleBoundUser: i } = vn(),
      [o, c] = l.useState({ conversations: [] }),
      [d, u] = l.useState("list"),
      [f, p] = l.useState(null),
      [m, h] = l.useState(!1),
      [g, x] = l.useState(0),
      y = l.useRef(null),
      v = (t == null ? void 0 : t.id) != null ? String(t.id) : "",
      b = l.useCallback(async () => {
        if (!v) return;
        const T = ((await be.get(ux, {})) || {})[v];
        T && typeof T == "object" && Array.isArray(T.conversations)
          ? c({ conversations: T.conversations })
          : c({ conversations: [] });
      }, [v]);
    l.useEffect(() => {
      b();
    }, [b]);
    const N = l.useCallback(
        async (j) => {
          if (!v) return;
          const I = {
            ...((await be.get(ux, {})) || {}),
            [v]: { conversations: j },
          };
          (await be.set(ux, I), c({ conversations: j }));
        },
        [v],
      ),
      w = o.conversations.find((j) => j.id === f) || null,
      _ = l.useCallback((j) => {
        const T = y.current;
        if (!T) return;
        const I = j.touches ? j.touches[0].clientX : j.clientX,
          L = j.touches ? j.touches[0].clientY : j.clientY;
        ((T.style.left = `${I}px`), (T.style.top = `${L}px`));
      }, []),
      A = l.useCallback(
        (j) => {
          _(j);
        },
        [_],
      );
    l.useEffect(() => {
      if (!(d !== "detail" || !w))
        return (
          window.addEventListener("mousemove", _),
          window.addEventListener("touchstart", A, { passive: !0 }),
          () => {
            (window.removeEventListener("mousemove", _),
              window.removeEventListener("touchstart", A));
          }
        );
    }, [d, w, _, A]);
    const k = async () => {
        var j;
        if (!(n != null && n.endpoint) || !(n != null && n.key)) {
          window.alert("请先在设置里配置 API");
          return;
        }
        if (!(!v || m)) {
          h(!0);
          try {
            const T = (typeof i == "function" ? i(t) : null) || {},
              I = String(
                (T == null ? void 0 : T.realName) ||
                  (T == null ? void 0 : T.name) ||
                  "用户",
              ).trim(),
              L = String((T == null ? void 0 : T.settings) || "无").trim(),
              B = String(
                (t == null ? void 0 : t.remark) ||
                  (t == null ? void 0 : t.nickname) ||
                  (t == null ? void 0 : t.name) ||
                  "角色",
              ).trim(),
              F = String((t == null ? void 0 : t.setting) || "无").trim(),
              $ = (a || [])
                .filter(
                  (xe) =>
                    String((xe == null ? void 0 : xe.contactId) || "") === v &&
                    !(xe != null && xe.isGroup),
                )
                .slice()
                .sort((xe, ye) => {
                  var ee, H, Y, U;
                  const R = new Date(
                    (xe == null ? void 0 : xe.updatedAt) ||
                      ((H =
                        (ee = xe == null ? void 0 : xe.messages) == null
                          ? void 0
                          : ee[xe.messages.length - 1]) == null
                        ? void 0
                        : H.timestamp) ||
                      0,
                  ).getTime();
                  return (
                    new Date(
                      (ye == null ? void 0 : ye.updatedAt) ||
                        ((U =
                          (Y = ye == null ? void 0 : ye.messages) == null
                            ? void 0
                            : Y[ye.messages.length - 1]) == null
                          ? void 0
                          : U.timestamp) ||
                        0,
                    ).getTime() - R
                  );
                })[0],
              P = pd($ == null ? void 0 : $.messages, t, i, 28),
              z = `你是剧本与对白助手。请基于「角色人设」「该角色绑定的用户人设（仅绑定，不是全局用户）」与「最近单聊摘要」，写 7 组彼此独立的「过去的自己 ↔ 现在的自己」口语问答——像私聊，不要写成诗。

【角色名】${B}
【角色人设】${F}
【绑定用户】${I}
【绑定用户人设（非全局）】${L}
【最近单聊记录摘要】
${P}

创作要求：
1) 角色要有自己的人生与日常，聊天摘要只作语气与线索，禁止整段复述聊天记录。
2) 根时间轴：输出 pastYear、presentYear 两个整数年份，表示整条档案的最早与最晚锚点，pastYear < presentYear；不必是真实今年。
3) 每一幕（每个 step）可有不同的时间水印：为该幕填写 pastWatermarkYear（过去侧水印年）与 presentWatermarkYear（现在侧水印年），均为整数，且满足 pastWatermarkYear < presentWatermarkYear；可随幕变化，不必连续，但应落在 [pastYear, presentYear] 附近、符合人物成长逻辑。
4) 七幕之间不要写成「同一场连续对话」：禁止明显承接上一幕话题、禁止「那你刚才说的…」「接上句」这类连贯语。每一幕换一批独立主题或情境；七幕合起来仍像同一人的不同人生切片。
5) past（过去的自己）**必须是在提问**：每一条 lines 都应是**问句**——句末用「？」，或明显为反问/追问/自言自语式提问；写当时当下的困惑、害怕、不甘心、拿不准的事。**禁止**陈述句、感叹句当 past；禁止标题、金句、氛围独白、纯描写。**禁止**「回首当时」类无问号的开场白。
6) 第 1 幕（steps[0]）与第 2–7 幕规则相同：**也是完整的一问一答**，past 必须是问句（可 1–2 条，但至少一条带「？」），present 必须是针对该问的回答（1–3 条）；不得把第 1 幕写成只有氛围、只有头像语、或只有现在的自己开口。
7) present（现在的自己）：对**这一幕** past **所问**的直接回应，可坦诚、自嘲、安慰或反驳，1–3 条字符串；不必重复前几幕已说过的话。
8) 禁止：散文诗、刻意押韵、文言堆砌、意象堆叠、一句拆多行像歌词、「金句海报」腔。
9) title：档案标题，8–16 字，像会话名。

仅输出 JSON，每个 step 必须含 pastWatermarkYear、presentWatermarkYear、past、present：
{"title":"","pastYear":2015,"presentYear":2024,"steps":[{"pastWatermarkYear":2015,"presentWatermarkYear":2024,"past":{"lines":[]},"present":{"lines":[]}}]}
必须恰好 7 条 steps。`,
              O = await cr(
                n,
                {
                  temperature:
                    typeof (n == null ? void 0 : n.temperature) == "number"
                      ? n.temperature
                      : 0.75,
                  messages: [{ role: "user", content: z }],
                },
                {
                  addApiLog: r,
                  logScene: "past_self_archive",
                  logContactName: (t == null ? void 0 : t.name) || "",
                },
              ),
              Z = FG(O),
              K = Number(Z == null ? void 0 : Z.pastYear) || 2018,
              q = Number(Z == null ? void 0 : Z.presentYear) || K + 8,
              V = q > K ? q : K + 1;
            let ne = zG(Z == null ? void 0 : Z.steps);
            for (; ne.length < 7; )
              ne.push({
                pastWatermarkYear: null,
                presentWatermarkYear: null,
                past: { lines: ["……"] },
                present: { lines: ["……"] },
              });
            ne = RG(ne.slice(0, 7), K, V);
            const le = {
                id: `pdc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                title:
                  String((Z == null ? void 0 : Z.title) || "隔时问答")
                    .trim()
                    .slice(0, 32) || "隔时问答",
                createdAt: new Date().toISOString(),
                pastYear: K,
                presentYear: V,
                steps: ne,
              },
              ie = (await be.get(ux, {})) || {},
              X = Array.isArray((j = ie[v]) == null ? void 0 : j.conversations)
                ? ie[v].conversations
                : [],
              je = [le, ...X];
            (await N(je), p(le.id), x(0), u("detail"));
          } catch {
            window.alert("生成失败，请稍后重试");
          } finally {
            h(!1);
          }
        }
      },
      C = 7,
      M = ((g + 1) / C) * 100,
      E = () => {
        x((j) => (j + 1) % C);
      },
      S = async (j) => {
        if (!j || !window.confirm("确定删除该条隔时问答？删除后不可恢复。"))
          return;
        const T = o.conversations.filter((I) => I.id !== j);
        await N(T);
      };
    if (d === "detail" && w) {
      const { pastYear: j, presentYear: T, steps: I } = w,
        L =
          (t == null ? void 0 : t.nickname) ||
          (t == null ? void 0 : t.name) ||
          "我",
        B = I[g] || {},
        F = Number(B.pastWatermarkYear) || j,
        D = Number(B.presentWatermarkYear) || T;
      return e.jsxs("div", {
        className:
          "h-full w-full flex flex-col relative overflow-hidden bg-[#0a0a0a] text-white",
        onClick: E,
        role: "presentation",
        children: [
          e.jsx("style", {
            children: `
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;900&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
          .psa-serif { font-family: 'Noto Serif SC', serif; font-weight: 200; }
          .psa-serif-heavy { font-family: 'Noto Serif SC', serif; font-weight: 900; }
          .psa-english { font-family: 'Playfair Display', serif; font-style: italic; }
          .psa-grain {
            position: fixed; inset: 0;
            background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
            opacity: 0.2; pointer-events: none; z-index: 50;
          }
          .psa-node {
            position: absolute; inset: 0;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            opacity: 0; transform: translateY(15px); filter: blur(10px);
            transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
            pointer-events: none;
          }
          .psa-node-active {
            opacity: 1; transform: translateY(0); filter: blur(0); pointer-events: auto;
          }
          .psa-vertical { writing-mode: vertical-rl; }
          .psa-node-scroll {
            position: absolute;
            inset: 0;
            overflow-y: auto;
            overflow-x: hidden;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            padding: 0.35rem 0.45rem;
            word-break: break-word;
            overflow-wrap: anywhere;
          }
          .psa-node-scroll--past { align-items: flex-end; }
          .psa-node-scroll--present { align-items: center; }
          .psa-node-scroll--past > * {
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
          .psa-node-scroll--present > * {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
        `,
          }),
          e.jsx("div", { className: "psa-grain" }),
          e.jsx("div", {
            ref: y,
            className:
              "fixed w-[400px] h-[400px] rounded-full pointer-events-none z-[1]",
            style: {
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            },
          }),
          e.jsx("button", {
            type: "button",
            className:
              "absolute top-10 left-4 z-[200] w-10 h-10 flex items-center justify-center text-white/70 hover:text-white",
            onClick: ($) => {
              ($.stopPropagation(), u("list"), p(null));
            },
            "aria-label": "返回",
            children: e.jsx(un, { size: 22 }),
          }),
          e.jsxs("main", {
            className: "flex-1 flex flex-col md:flex-row relative z-10 min-h-0",
            children: [
              e.jsxs("section", {
                className:
                  "relative flex-1 min-h-[42%] md:min-h-0 overflow-hidden border-b md:border-b-0 md:border-r border-white/5",
                children: [
                  e.jsx("div", {
                    className:
                      "psa-english absolute left-6 top-12 md:left-12 md:top-24 text-[24vw] md:text-[18vw] opacity-15 z-0 pointer-events-none text-[#333] whitespace-nowrap transition-all duration-700",
                    children: F,
                  }),
                  e.jsx("div", {
                    className: "h-full w-full p-6 md:p-8 relative",
                    children: I.map(($, P) =>
                      e.jsx(
                        "div",
                        {
                          className: `psa-node ${P === g ? "psa-node-active" : ""}`,
                          children: e.jsx("div", {
                            className: "psa-node-scroll psa-node-scroll--past",
                            children:
                              g === 0 && P === 0
                                ? e.jsxs("div", {
                                    className: "p-6 text-right w-full max-w-sm",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-12 h-16 mb-6 ml-auto overflow-hidden opacity-70",
                                        children: e.jsx("img", {
                                          src:
                                            (t == null ? void 0 : t.avatar) ||
                                            "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400",
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover grayscale brightness-50",
                                        }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "psa-serif text-xs text-white/40 mb-2 tracking-[0.3em]",
                                        children: L,
                                      }),
                                      e.jsx("h2", {
                                        className:
                                          "psa-serif text-2xl md:text-3xl text-white/90 tracking-[0.4em]",
                                        children:
                                          $.past.lines[0] ||
                                          "那年你想先问什么？",
                                      }),
                                    ],
                                  })
                                : g === 1 && P === 1
                                  ? e.jsx("div", {
                                      className: "p-6 text-right w-full",
                                      children: e.jsx("h2", {
                                        className:
                                          "psa-serif text-2xl text-white/70 leading-[2] tracking-[0.2em]",
                                        children: (() => {
                                          const z =
                                            $.past.lines.filter(Boolean);
                                          return z.length === 0
                                            ? "……"
                                            : z.length === 1
                                              ? z[0]
                                              : z.length === 2
                                                ? e.jsxs(e.Fragment, {
                                                    children: [
                                                      z[0],
                                                      e.jsx("br", {}),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-3xl font-light",
                                                        children: z[1],
                                                      }),
                                                    ],
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                    children: [
                                                      z[0],
                                                      e.jsx("br", {}),
                                                      e.jsx("span", {
                                                        className:
                                                          "opacity-20 text-base",
                                                        children: z[1],
                                                      }),
                                                      e.jsx("br", {}),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-3xl font-light",
                                                        children: z[2],
                                                      }),
                                                    ],
                                                  });
                                        })(),
                                      }),
                                    })
                                  : g === 2 && P === 2
                                    ? e.jsx("div", {
                                        className:
                                          "p-8 text-right italic opacity-50 w-full flex flex-col items-end",
                                        children: e.jsx("p", {
                                          className:
                                            "psa-serif text-xl tracking-[0.3em] leading-[2.5] max-w-md",
                                          children: $.past.lines.map((z, O) =>
                                            e.jsxs(
                                              "span",
                                              {
                                                children: [
                                                  z,
                                                  O === 0 &&
                                                  $.past.lines.length > 1
                                                    ? " /"
                                                    : "",
                                                  O < $.past.lines.length - 1
                                                    ? e.jsx("br", {})
                                                    : null,
                                                ],
                                              },
                                              O,
                                            ),
                                          ),
                                        }),
                                      })
                                    : g === 3 && P === 3
                                      ? e.jsx("div", {
                                          className:
                                            "border-r border-white/10 pr-3 mr-2 md:pr-6 md:mr-4 text-right w-full max-w-md ml-auto",
                                          children: e.jsx("h2", {
                                            className:
                                              "psa-serif text-base text-white/40 leading-[2.2]",
                                            children: $.past.lines.map((z, O) =>
                                              e.jsxs(
                                                "span",
                                                {
                                                  children: [
                                                    z,
                                                    O < $.past.lines.length - 1
                                                      ? e.jsx("br", {})
                                                      : null,
                                                  ],
                                                },
                                                O,
                                              ),
                                            ),
                                          }),
                                        })
                                      : g === 4 && P === 4
                                        ? e.jsx("div", {
                                            className: "p-8 text-right w-full",
                                            children: e.jsx("h2", {
                                              className:
                                                "psa-serif text-2xl text-white/30 tracking-widest",
                                              children: $.past.lines.map(
                                                (z, O) =>
                                                  e.jsxs(
                                                    "span",
                                                    {
                                                      children: [
                                                        z,
                                                        O <
                                                        $.past.lines.length - 1
                                                          ? e.jsx("br", {})
                                                          : null,
                                                      ],
                                                    },
                                                    O,
                                                  ),
                                              ),
                                            }),
                                          })
                                        : g === 5 && P === 5
                                          ? e.jsx("div", {
                                              className:
                                                "w-full h-full flex flex-col justify-center px-5 md:px-10 py-6",
                                              children: e.jsxs("div", {
                                                className:
                                                  "max-w-md w-full mx-auto md:mx-0 md:ml-auto md:mr-6",
                                                children: [
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex items-baseline justify-between gap-3 border-b border-white/20 pb-3 mb-5",
                                                    children: [
                                                      e.jsxs("span", {
                                                        className:
                                                          "psa-english text-[11px] md:text-xs text-white/55 tracking-[0.15em]",
                                                        children: [
                                                          "Then · ",
                                                          Number(
                                                            $.pastWatermarkYear,
                                                          ) || j,
                                                        ],
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "font-sans text-[9px] tracking-[0.35em] text-white/35 uppercase",
                                                        children: "Past",
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "space-y-4 text-right",
                                                    children: ($.past.lines
                                                      .length
                                                      ? $.past.lines
                                                      : ["……"]
                                                    ).map((z, O) =>
                                                      e.jsx(
                                                        "p",
                                                        {
                                                          className: `psa-serif leading-relaxed ${O === 0 ? "text-lg md:text-xl text-white/88 font-light" : "text-sm md:text-base text-white/72"}`,
                                                          children: z,
                                                        },
                                                        O,
                                                      ),
                                                    ),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "mt-8 flex justify-end",
                                                    children: e.jsx("div", {
                                                      className:
                                                        "h-[1px] w-20 bg-white/30",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            })
                                          : g === 6 && P === 6
                                            ? e.jsxs("div", {
                                                className:
                                                  "self-center w-full max-w-md px-4 md:px-6 flex flex-col items-center text-center",
                                                children: [
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex w-full items-center gap-3 mb-5 opacity-80",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "h-px flex-1 bg-gradient-to-r from-transparent to-white/25",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "psa-english text-[11px] md:text-xs text-white/50 tracking-[0.2em] shrink-0",
                                                        children:
                                                          Number(
                                                            $.pastWatermarkYear,
                                                          ) || j,
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "h-px flex-1 bg-gradient-to-l from-transparent to-white/25",
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "space-y-4 w-full border border-white/10 bg-white/[0.03] px-4 py-5 rounded-sm",
                                                    children: ($.past.lines
                                                      .length
                                                      ? $.past.lines
                                                      : ["THE PAST IS A GHOST"]
                                                    ).map((z, O) =>
                                                      e.jsx(
                                                        "p",
                                                        {
                                                          className: `psa-serif leading-[1.75] break-words ${O === 0 ? "text-base md:text-lg text-white/80 font-light tracking-wide" : "text-sm md:text-base text-white/65"}`,
                                                          children: z,
                                                        },
                                                        O,
                                                      ),
                                                    ),
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "mt-4 psa-english text-[9px] tracking-[0.35em] text-white/30 uppercase",
                                                    children: "Past",
                                                  }),
                                                ],
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "p-6 text-right w-full max-w-md",
                                                children: e.jsx("h2", {
                                                  className:
                                                    "psa-serif text-xl md:text-2xl text-white/70 leading-relaxed",
                                                  children: $.past.lines.map(
                                                    (z, O) =>
                                                      e.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "block mb-2 last:mb-0",
                                                          children: z,
                                                        },
                                                        O,
                                                      ),
                                                  ),
                                                }),
                                              }),
                          }),
                        },
                        `p-${P}`,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "h-px w-full md:w-px md:h-full bg-white/10 relative z-20 shrink-0",
                children: [
                  e.jsx("div", {
                    className:
                      "md:hidden absolute top-0 left-0 h-full bg-white transition-all duration-700",
                    style: { width: `${M}%` },
                  }),
                  e.jsx("div", {
                    className:
                      "hidden md:block absolute top-0 left-0 w-full bg-white transition-all duration-700",
                    style: { height: `${M}%` },
                  }),
                ],
              }),
              e.jsxs("section", {
                className:
                  "relative flex-1 min-h-[42%] md:min-h-0 overflow-hidden bg-white/[0.02]",
                children: [
                  e.jsx("div", {
                    className:
                      "psa-english absolute right-6 bottom-12 md:right-12 md:bottom-24 text-[24vw] md:text-[18vw] opacity-15 z-0 pointer-events-none text-[#333] whitespace-nowrap transition-all duration-700",
                    children: D,
                  }),
                  e.jsx("div", {
                    className: "h-full w-full p-6 md:p-8 relative",
                    children: I.map(($, P) =>
                      e.jsx(
                        "div",
                        {
                          className: `psa-node ${P === g ? "psa-node-active" : ""}`,
                          children: e.jsx("div", {
                            className:
                              "psa-node-scroll psa-node-scroll--present",
                            children:
                              g === 0 && P === 0
                                ? e.jsxs("div", {
                                    className: "p-6 w-full max-w-sm",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-14 h-14 mb-6 overflow-hidden rounded-full ring-1 ring-white/10",
                                        children: e.jsx("img", {
                                          src:
                                            (t == null ? void 0 : t.avatar) ||
                                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "psa-serif text-xs text-white/40 mb-2 tracking-[0.3em]",
                                        children: L,
                                      }),
                                      e.jsx("h2", {
                                        className:
                                          "psa-serif-heavy text-3xl md:text-5xl tracking-tighter",
                                        children:
                                          $.present.lines[0] || "我听着呢。",
                                      }),
                                    ],
                                  })
                                : g === 1 && P === 1
                                  ? e.jsx("div", {
                                      className: "p-6 w-full",
                                      children: e.jsx("h2", {
                                        className:
                                          "psa-serif-heavy text-2xl md:text-3xl tracking-tight leading-tight",
                                        children: (() => {
                                          const z =
                                            $.present.lines.filter(Boolean);
                                          return z.length === 0
                                            ? "……"
                                            : z.length === 1
                                              ? z[0]
                                              : e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-base md:text-lg opacity-30 block mb-2",
                                                      children: z[0],
                                                    }),
                                                    z
                                                      .slice(1)
                                                      .map((O, Z) =>
                                                        e.jsxs(
                                                          "span",
                                                          {
                                                            children: [
                                                              O,
                                                              Z < z.length - 2
                                                                ? e.jsx(
                                                                    "br",
                                                                    {},
                                                                  )
                                                                : null,
                                                            ],
                                                          },
                                                          Z,
                                                        ),
                                                      ),
                                                  ],
                                                });
                                        })(),
                                      }),
                                    })
                                  : g === 2 && P === 2
                                    ? e.jsx("div", {
                                        className: "p-8 w-full",
                                        children: e.jsx("p", {
                                          className:
                                            "psa-serif-heavy text-xl md:text-2xl tracking-tighter leading-snug",
                                          children: $.present.lines.map(
                                            (z, O) =>
                                              e.jsxs(
                                                "span",
                                                {
                                                  children: [
                                                    z,
                                                    O <
                                                    $.present.lines.length - 1
                                                      ? e.jsx("br", {})
                                                      : null,
                                                  ],
                                                },
                                                O,
                                              ),
                                          ),
                                        }),
                                      })
                                    : g === 3 && P === 3
                                      ? e.jsx("div", {
                                          className:
                                            "border-l-2 border-white/40 pl-4 ml-2 md:pl-6 md:ml-4 w-full max-w-md",
                                          children: e.jsx("h2", {
                                            className:
                                              "psa-serif-heavy text-xl text-white/80 leading-relaxed",
                                            children: $.present.lines.map(
                                              (z, O) =>
                                                e.jsxs(
                                                  "span",
                                                  {
                                                    children: [
                                                      z,
                                                      O <
                                                      $.present.lines.length - 1
                                                        ? e.jsx("br", {})
                                                        : null,
                                                    ],
                                                  },
                                                  O,
                                                ),
                                            ),
                                          }),
                                        })
                                      : g === 4 && P === 4
                                        ? e.jsx("div", {
                                            className: "p-8 w-full",
                                            children: e.jsx("h2", {
                                              className:
                                                "psa-serif-heavy text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-xl leading-snug",
                                              children: $.present.lines.map(
                                                (z, O) =>
                                                  e.jsxs(
                                                    "span",
                                                    {
                                                      children: [
                                                        z,
                                                        O <
                                                        $.present.lines.length -
                                                          1
                                                          ? e.jsx("br", {})
                                                          : null,
                                                      ],
                                                    },
                                                    O,
                                                  ),
                                              ),
                                            }),
                                          })
                                        : g === 5 && P === 5
                                          ? e.jsxs("div", {
                                              className:
                                                "flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-1 max-w-full py-2",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-0.5 h-28 sm:h-32 bg-white/40 shrink-0",
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "flex flex-row-reverse flex-wrap items-end justify-center gap-3 sm:gap-5",
                                                  children: [
                                                    db(
                                                      $.present.lines[0] ||
                                                        "——",
                                                    ).map((z, O) =>
                                                      e.jsx(
                                                        "div",
                                                        {
                                                          className:
                                                            "psa-vertical max-w-[min(100%,14rem)] break-words",
                                                          children: e.jsx(
                                                            "h2",
                                                            {
                                                              className:
                                                                "psa-serif-heavy text-lg sm:text-xl md:text-2xl tracking-widest text-white",
                                                              children: z,
                                                            },
                                                          ),
                                                        },
                                                        `p6-m-${O}`,
                                                      ),
                                                    ),
                                                    $.present.lines[1]
                                                      ? db(
                                                          $.present.lines[1],
                                                        ).map((z, O) =>
                                                          e.jsx(
                                                            "div",
                                                            {
                                                              className:
                                                                "psa-vertical max-w-[min(100%,14rem)] break-words",
                                                              children: e.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "psa-english text-xs sm:text-sm text-white/30 tracking-wide",
                                                                  children: z,
                                                                },
                                                              ),
                                                            },
                                                            `p6-s-${O}`,
                                                          ),
                                                        )
                                                      : null,
                                                  ],
                                                }),
                                                $.present.lines[2]
                                                  ? e.jsx("div", {
                                                      className:
                                                        "flex flex-row-reverse flex-wrap items-end justify-center gap-3 sm:gap-5 pt-8 sm:pt-12",
                                                      children: db(
                                                        $.present.lines[2],
                                                      ).map((z, O) =>
                                                        e.jsx(
                                                          "div",
                                                          {
                                                            className:
                                                              "psa-vertical max-w-[min(100%,14rem)] break-words",
                                                            children: e.jsx(
                                                              "h2",
                                                              {
                                                                className:
                                                                  "psa-serif-heavy text-lg sm:text-xl md:text-2xl tracking-widest text-white/60",
                                                                children: z,
                                                              },
                                                            ),
                                                          },
                                                          `p6-t-${O}`,
                                                        ),
                                                      ),
                                                    })
                                                  : null,
                                              ],
                                            })
                                          : g === 6 && P === 6
                                            ? e.jsx("h2", {
                                                className:
                                                  "psa-serif-heavy text-2xl sm:text-4xl md:text-5xl tracking-[0.15em] sm:tracking-[0.2em] text-white animate-pulse px-2 text-center max-w-full break-words leading-tight",
                                                children:
                                                  $.present.lines[0] || "LIVE.",
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "p-6 w-full max-w-md",
                                                children: e.jsx("h2", {
                                                  className:
                                                    "psa-serif-heavy text-xl md:text-3xl tracking-tight leading-snug",
                                                  children: $.present.lines.map(
                                                    (z, O) =>
                                                      e.jsx(
                                                        "span",
                                                        {
                                                          className:
                                                            "block mb-2 last:mb-0",
                                                          children: z,
                                                        },
                                                        O,
                                                      ),
                                                  ),
                                                }),
                                              }),
                          }),
                        },
                        `n-${P}`,
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
    return e.jsxs("div", {
      className:
        "h-full w-full flex flex-col bg-[#fcfcfc] text-[#1a1a1a] font-serif",
      children: [
        e.jsxs("div", {
          className:
            "pt-12 px-6 pb-4 flex items-center gap-3 border-b border-black/5",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: s,
              className: "p-2 -ml-2 text-[#1a1a1a]/60",
              "aria-label": "返回",
              children: e.jsx(un, { size: 22 }),
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className:
                    "text-[10px] uppercase tracking-[0.25em] text-black/40",
                  children: "隔时问答",
                }),
                e.jsx("h1", {
                  className: "text-xl italic font-light",
                  children: "旧我问，今我答",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto px-6 py-6 space-y-4 pb-24",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: k,
              disabled: m,
              className:
                "w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-black/15 rounded-xl text-sm tracking-widest text-black/70 hover:bg-black/5 transition-colors disabled:opacity-55 disabled:pointer-events-none",
              children: [
                m
                  ? e.jsx(Sn, { size: 18, className: "animate-spin shrink-0" })
                  : e.jsx(ea, { size: 18 }),
                m ? "正在生成…" : "添加新对话",
              ],
            }),
            o.conversations.length === 0
              ? e.jsx("p", {
                  className: "text-center text-sm text-black/40 pt-8",
                  children:
                    "还没有对谈记录，点上面启封一阙七重奏——问答如私语，不写成诗",
                })
              : e.jsx("ul", {
                  className: "space-y-3",
                  children: o.conversations.map((j) =>
                    e.jsxs(
                      "li",
                      {
                        className: "flex items-stretch gap-2",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => {
                              (p(j.id), x(0), u("detail"));
                            },
                            className:
                              "flex-1 min-w-0 text-left p-4 rounded-xl bg-white border border-black/8 shadow-sm hover:shadow-md transition-shadow",
                            children: [
                              e.jsx("p", {
                                className: "font-medium text-base",
                                children: j.title,
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[11px] text-black/45 mt-1 tracking-wider",
                                children: [
                                  j.pastYear,
                                  " → ",
                                  j.presentYear,
                                  " ·",
                                  " ",
                                  j.createdAt
                                    ? String(j.createdAt).slice(0, 10)
                                    : "",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => S(j.id),
                            className:
                              "shrink-0 self-center px-3 py-2 rounded-lg text-[12px] text-red-600/90 hover:bg-red-50 active:opacity-80",
                            children: "删除",
                          }),
                        ],
                      },
                      j.id,
                    ),
                  ),
                }),
          ],
        }),
      ],
    });
  },
  OG = ({ contact: t, onBack: s, apiConfig: n }) => {
    var S, j;
    const {
        chats: a,
        moments: r,
        addApiLog: i,
        apiConfig: o,
        getEffectiveUser: c,
      } = vn(),
      d = n ?? o,
      u = yi((t == null ? void 0 : t.setting) || ""),
      [f, p] = l.useState(null),
      [m, h] = l.useState(!1),
      [g, x] = l.useState(!1),
      [y, v] = l.useState(!1),
      [b, N] = l.useState(null),
      [w, _] = l.useState(!1),
      A = l.useRef(!1);
    (l.useEffect(() => {
      (async () => {
        const I = await be.get(`phone_app_wallet_${t.id}`);
        I != null ? p(I) : M();
      })();
    }, [t.id]),
      l.useEffect(() => {
        f && be.set(`phone_app_wallet_${t.id}`, f);
      }, [f, t.id]));
    const k = 5e3,
      C = 7e4,
      M = async () => {
        if (A.current) return;
        ((A.current = !0), h(!0));
        const T = async () => {
          if (!d || !d.key) throw new Error("请先在设置中配置 API Key");
          const L = ((c == null ? void 0 : c(t)) ?? {}).settings || "无",
            B = a == null ? void 0 : a.find((V) => V.contactId === t.id),
            F =
              B != null && B.messages
                ? B.messages
                    .slice(-30)
                    .map((V) => `${V.sender === "me" ? "我" : "你"}: ${V.text}`)
                    .join(`
`)
                : "无",
            D =
              (r == null
                ? void 0
                : r
                    .filter((V) => V.user.name === t.name)
                    .slice(0, 5)
                    .map((V) => `[${V.time}] ${V.content}`).join(`
`)) || "无",
            $ = await Promise.race([
              Ql(t.id),
              new Promise((V, ne) =>
                setTimeout(() => ne(new Error("timeout")), k),
              ),
            ]).catch(() => ""),
            P = t.setting || "",
            z = yi(P),
            O = ql(P, "standard"),
            Z = `
[系统指令：生成AI钱包数据]
请以你的角色身份（${t.name}），根据你的人设、最近的聊天记录和朋友圈动态，生成你的财务状况和最近的收支记录。
用户设定：${L}。

参考上下文：
【最近聊天】：
${F}

【最近朋友圈】：
${D}

【线下/遇见记忆总结】（若已开启记忆互通，请融入生成内容）
${$ || "无"}

要求：
${O}

${z ? '【心声字段】根级 **insight**、每笔 **transactions[].thought** 须为心声双语对象 { "voice", "zh" }（见上文结构）。' : "【心声字段】根级 **insight**、每笔 **transactions[].thought** 一律输出**简体中文字符串**（不要输出 JSON 对象、不要英文、不要“原文/译文/translation”标签）。"}

1. 生成一个 JSON 对象，包含以下字段：
   - total_balance: 总资产 (字符串，如 "12,345.00")
   - currency_symbol: 货币符号 (如 "¥", "$")
   - cards: 银行卡数组 (2-3张)，每张包含：
     - bank_name: 银行名称 (如 "CyberBank", "Future Credit")
     - card_type: 卡类型 (Debit/Credit/Black Card)
     - card_number: 卡号后4位
     - color_theme: 卡片主色调 (hex code)
     - balance: 该卡余额
     - expiry: 有效期 (MM/YY)
     - holder_name: 持卡人姓名 (拼音或英文)
   - transactions: 交易记录数组 (至少12条)，每条包含：
     - id: 唯一标识
     - type: "expense" 或 "income"
     - amount: 金额 (字符串，如 "328.00")
     - category: 类别键名保留英文供程序识别 (Food, Shopping, Entertainment, Transport, Salary, Gift, Tech, Travel)；merchant 等用简体中文
     - merchant: 商家或来源名称
     - time: 时间 (如 "10:30", "Yesterday")
     - thought: **心声双语** { "voice", "zh" }，对这笔交易的心声/吐槽 (有趣、符合人设)
   - insight: **心声双语** { "voice", "zh" }，对自己理财状况的总结或自嘲 (与原先字数相当)
   - fortune: 一个包含趣味运势的对象：
     - luck: 今日财运指数 (0-100)
     - lucky_color: 招财色
     - lucky_item: 开运物
     - tip: 一句荒谬有趣的投资建议或省钱妙招 (如"投资猫粮", "做空周一", "今天只喝白开水")
   - future_item: 一个预测的未来消费，包含：
     - name: 商品名称 (如 "限量版空气", "快乐水")
     - price: 价格
     - date: 预测日期 (如 "Next Friday")
     - reason: 有趣的理由 (如 "因为那天你会突然想犒劳自己")
   - financial_persona: 一个有趣的理财人格标签，包含：
     - title: 称号 (如 "奶茶投资人", "随缘存钱家")
     - description: 简短描述 (如 "钱不是省出来的，是赚出来的...虽然你还没赚到。")
     - icon: 代表这个称号的Emoji
   - quick_actions: 包含四个快捷操作的预设结果：
     - send: { title: "Transfer Sent", amount: "¥52.00", reason: "给你的奶茶基金", response: "哇！谢谢老板！", icon: "💸" }
     - request: { title: "Payment Requested", amount: "¥15.00", reason: "昨晚的夜宵AA", status: "Paid", icon: "🧾" }
     - scan: { title: "Scan Result", item: "未知的量子猫罐头", description: "扫描显示这罐头来自2077年。", icon: "📷" }
     - more: { title: "New Service", product: "快乐星球定投", description: "每天定投一份快乐。", icon: "🌟" }
   - subscriptions: 订阅服务数组 (2-3个)，包含 name, price, date (如 "Netflix", "15.00", "2023-10-25")
   - analytics: 支出分析数组 (3-4个)，包含 category, percentage, color (如 "Food", 40, "#FF6B6B")

返回格式示例：
{
  "total_balance": "8,240.50",
  "currency_symbol": "¥",
  "cards": [...],
  "transactions": [...],
  "insight": { "voice": "…", "zh": "虽然存款不多，但快乐无价。" },
  "fortune": {
    "luck": 88,
    "lucky_color": "金色",
    "lucky_item": "奶茶",
    "tip": "今天适合躺平，不花钱就是赚钱。"
  },
  "future_item": {
    "name": "深夜烧烤",
    "price": "128.00",
    "date": "Tomorrow 2AM",
    "reason": "你的胃会战胜你的理智。"
  },
  "financial_persona": {
    "title": "隐形贫困人口",
    "description": "看起来光鲜亮丽，实际上连会员都要借别人的。",
    "icon": "🥑"
  },
  "quick_actions": {
    "send": { ... },
    "request": { ... },
    "scan": { ... },
    "more": { ... }
  },
  "subscriptions": [{ "name": "Netflix", "price": "15.00", "date": "2023-10-25" }],
  "analytics": [{ "category": "Food", "percentage": 40, "color": "#FF6B6B" }]
}
`,
            K = await cr(
              d,
              {
                messages: [
                  { role: "system", content: `你现在是 ${t.name}。${P}` },
                  { role: "user", content: Z },
                ],
                temperature: 0.8,
              },
              {
                addApiLog: i,
                logScene: "wallet",
                logContactName: (t == null ? void 0 : t.name) || "",
              },
            );
          let q = null;
          try {
            const V = K.match(/\{[\s\S]*\}/);
            V && (q = JSON.parse(V[0]));
          } catch {}
          q && p({ ...q, timestamp: Date.now() });
        };
        try {
          await Promise.race([
            T(),
            new Promise((I, L) =>
              setTimeout(() => L(new Error("生成超时（70 秒），请重试")), C),
            ),
          ]);
        } catch (I) {
          alert((I == null ? void 0 : I.message) || "生成失败");
        } finally {
          ((A.current = !1), h(!1));
        }
      },
      E = (T) => {
        if (!(f != null && f.quick_actions)) return;
        const I = T.toLowerCase(),
          L = f.quick_actions[I];
        L && N(L);
      };
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-[#F2F2F7] text-[#1D1D1F] font-sans",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 overflow-hidden pointer-events-none",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-200/30 rounded-full blur-[120px] mix-blend-multiply",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "pt-12 px-6 pb-2 flex items-center justify-between relative z-20",
          children: [
            e.jsx("button", {
              onClick: s,
              className:
                "p-2 -ml-2 text-black/60 hover:text-black transition-colors rounded-full hover:bg-black/5",
              children: e.jsx(un, { size: 24, strokeWidth: 1.5 }),
            }),
            e.jsx("span", {
              className:
                "text-[10px] font-bold uppercase tracking-[0.2em] opacity-40",
              children: "钱包",
            }),
            e.jsx("button", {
              onClick: M,
              disabled: m,
              className:
                "w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 transition-colors text-black/40 hover:text-black disabled:opacity-30",
              children: m
                ? e.jsx(Sn, { size: 20, className: "animate-spin" })
                : e.jsx(Or, { size: 20, strokeWidth: 1.5 }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 relative z-10",
          children: f
            ? e.jsxs("div", {
                className: "h-full flex flex-col",
                children: [
                  e.jsxs("div", {
                    className: "flex-1 overflow-y-auto no-scrollbar pb-32",
                    children: [
                      e.jsxs("div", {
                        className: "px-8 pt-4 pb-8 text-center relative",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3",
                            children: "总余额",
                          }),
                          e.jsxs("h1", {
                            className:
                              "text-5xl font-light tracking-tighter text-[#1D1D1F] flex items-start justify-center leading-none",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-2xl mt-1 mr-1 text-gray-400 font-normal",
                                children: f.currency_symbol,
                              }),
                              f.total_balance,
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "mb-10 overflow-x-auto no-scrollbar flex gap-4 snap-x snap-mandatory py-4 -mx-6 px-6",
                        children:
                          (S = f.cards) == null
                            ? void 0
                            : S.map((T, I) => {
                                const L = [
                                    {
                                      bg: "linear-gradient(145deg, #1a1a1a 0%, #000000 100%)",
                                      text: "text-white",
                                      border: "border-white/10",
                                      chip: "from-[#d4af37] to-[#f7e7ce]",
                                      decor: "bg-white/5",
                                    },
                                    {
                                      bg: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)",
                                      text: "text-[#1a1a1a]",
                                      border: "border-black/5",
                                      chip: "from-[#b8c6db] to-[#f5f7fa]",
                                      decor: "bg-black/5",
                                    },
                                    {
                                      bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",
                                      text: "text-white",
                                      border: "border-white/20",
                                      chip: "from-[#e6cfa3] to-[#d4af37]",
                                      decor: "bg-white/20",
                                    },
                                  ],
                                  B = L[I % L.length];
                                return e.jsxs(
                                  We.div,
                                  {
                                    initial: { opacity: 0, y: 20, rotateY: 10 },
                                    animate: { opacity: 1, y: 0, rotateY: 0 },
                                    transition: {
                                      delay: I * 0.1,
                                      type: "spring",
                                      stiffness: 100,
                                    },
                                    className: `snap-center shrink-0 w-full max-w-[320px] aspect-[1.58/1] rounded-[24px] p-6 flex flex-col justify-between relative overflow-hidden group shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border ${B.border}`,
                                    style: { background: B.bg },
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay",
                                      }),
                                      e.jsx("div", {
                                        className: `absolute -right-16 -top-16 w-64 h-64 rounded-full ${B.decor} blur-3xl`,
                                      }),
                                      e.jsx("div", {
                                        className: `absolute -left-10 -bottom-10 w-40 h-40 rounded-full ${B.decor} blur-2xl`,
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%] z-20",
                                      }),
                                      e.jsxs("div", {
                                        className: `relative z-10 flex justify-between items-start ${B.text}`,
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-3",
                                            children: [
                                              e.jsx("div", {
                                                className: `w-11 h-8 rounded-md bg-gradient-to-br ${B.chip} shadow-sm relative overflow-hidden border border-black/10`,
                                                children: e.jsxs("div", {
                                                  className:
                                                    "absolute inset-0 opacity-40 mix-blend-overlay",
                                                  children: [
                                                    e.jsx("div", {
                                                      className:
                                                        "absolute top-1/2 left-0 right-0 h-[1px] bg-black",
                                                    }),
                                                    e.jsx("div", {
                                                      className:
                                                        "absolute top-0 bottom-0 left-1/3 w-[1px] bg-black",
                                                    }),
                                                    e.jsx("div", {
                                                      className:
                                                        "absolute top-0 bottom-0 right-1/3 w-[1px] bg-black",
                                                    }),
                                                    e.jsx("div", {
                                                      className:
                                                        "absolute top-1/4 left-1/3 right-1/3 h-[1px] bg-black",
                                                    }),
                                                    e.jsx("div", {
                                                      className:
                                                        "absolute bottom-1/4 left-1/3 right-1/3 h-[1px] bg-black",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              e.jsx(tv, {
                                                size: 18,
                                                className:
                                                  "rotate-90 opacity-60",
                                              }),
                                            ],
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "font-bold italic tracking-wider opacity-90 text-lg",
                                            children: T.bank_name,
                                          }),
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className: `relative z-10 mt-6 ${B.text}`,
                                        children: e.jsxs("p", {
                                          className:
                                            "text-2xl font-mono tracking-[0.18em] opacity-90",
                                          style: {
                                            textShadow:
                                              "0 1px 2px rgba(0,0,0,0.1)",
                                          },
                                          children: [
                                            "•••• •••• •••• ",
                                            T.card_number,
                                          ],
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: `relative z-10 flex justify-between items-end mt-auto ${B.text}`,
                                        children: [
                                          e.jsx("div", {
                                            className: "flex flex-col gap-1",
                                            children: e.jsxs("div", {
                                              className: "flex gap-6",
                                              children: [
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "text-[7px] uppercase tracking-[0.2em] opacity-60 mb-0.5",
                                                      children: "持卡人",
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-xs font-medium tracking-widest uppercase opacity-90",
                                                      children:
                                                        T.holder_name || t.name,
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "text-[7px] uppercase tracking-[0.2em] opacity-60 mb-0.5",
                                                      children: "到期",
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-xs font-mono opacity-90",
                                                      children:
                                                        T.expiry || "12/28",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsx("div", {
                                            className: "ml-4 opacity-90",
                                            children:
                                              T.card_type === "Visa"
                                                ? e.jsx("span", {
                                                    className:
                                                      "text-2xl font-black italic tracking-tighter",
                                                    children: "VISA",
                                                  })
                                                : e.jsxs("div", {
                                                    className:
                                                      "flex -space-x-3 relative",
                                                    children: [
                                                      e.jsx("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-[#EB001B]/90 backdrop-blur-sm shadow-sm",
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-[#F79E1B]/90 backdrop-blur-sm shadow-sm",
                                                      }),
                                                    ],
                                                  }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  I,
                                );
                              }),
                      }),
                      e.jsx("div", {
                        className: "flex justify-center gap-8 mb-10",
                        children: [
                          {
                            icon: e.jsx(pL, { size: 20 }),
                            key: "send",
                            label: "转账",
                          },
                          {
                            icon: e.jsx(fL, { size: 20 }),
                            key: "request",
                            label: "请求",
                          },
                          {
                            icon: e.jsx(Y0, { size: 20 }),
                            key: "scan",
                            label: "扫码",
                          },
                          {
                            icon: e.jsx(jl, { size: 20 }),
                            key: "more",
                            label: "更多",
                          },
                        ].map((T, I) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => E(T.key),
                              className:
                                "flex flex-col items-center gap-3 group",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-14 h-14 rounded-full bg-white shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300 border border-gray-50 relative",
                                  children: T.icon,
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold text-gray-400 uppercase tracking-wider group-hover:text-black transition-colors",
                                  children: T.label,
                                }),
                              ],
                            },
                            I,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs(We.div, {
                    initial: { y: "calc(100% - 200px)" },
                    animate: { y: y ? 0 : "calc(100% - 200px)" },
                    transition: { type: "spring", damping: 25, stiffness: 200 },
                    className:
                      "absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] h-[85%] z-30 flex flex-col",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-full pt-6 pb-4 cursor-pointer flex justify-center hover:bg-gray-50 rounded-t-[40px] transition-colors",
                        onClick: () => v(!y),
                        children: e.jsx("div", {
                          className: "w-12 h-1.5 bg-gray-200 rounded-full",
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex-1 overflow-y-auto px-8 pb-8 no-scrollbar",
                        children: [
                          e.jsxs("div", {
                            className:
                              "mb-6 bg-[#F9F9F9] rounded-2xl p-5 flex items-start gap-4",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg shrink-0",
                                children: "✨",
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1",
                                    children: "每日洞察",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-sm text-gray-800 leading-relaxed",
                                    children: e.jsx(Yi, {
                                      value: f.insight,
                                      voiceClassName: "italic",
                                      forceZhOnly: !u,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4 mb-8",
                            children: [
                              f.financial_persona &&
                                e.jsxs("div", {
                                  className:
                                    "bg-blue-50 rounded-2xl p-4 border border-blue-100 relative overflow-hidden",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute -right-4 -top-4 text-6xl opacity-10",
                                      children: f.financial_persona.icon,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[9px] font-bold uppercase tracking-widest text-blue-400 mb-2",
                                      children: "人格画像",
                                    }),
                                    e.jsx("div", {
                                      className: "text-2xl mb-2",
                                      children: f.financial_persona.icon,
                                    }),
                                    e.jsx("h4", {
                                      className:
                                        "text-sm font-bold text-blue-900 mb-1",
                                      children: f.financial_persona.title,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] text-blue-700/70 leading-tight",
                                      children: f.financial_persona.description,
                                    }),
                                  ],
                                }),
                              f.future_item &&
                                e.jsxs("div", {
                                  className:
                                    "bg-white rounded-2xl p-4 border border-gray-100 shadow-sm relative flex flex-col justify-between",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-100 rounded-b-lg",
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2 text-center mt-2",
                                          children: "未来账单",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "border-b border-dashed border-gray-200 pb-2 mb-2",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex justify-between items-end",
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "text-xs font-bold text-gray-800 truncate max-w-[70px]",
                                                  children: f.future_item.name,
                                                }),
                                                e.jsxs("span", {
                                                  className:
                                                    "text-xs font-mono text-gray-600",
                                                  children: [
                                                    f.currency_symbol,
                                                    f.future_item.price,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[9px] text-gray-400 mt-0.5",
                                              children: f.future_item.date,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-[9px] text-gray-500 italic leading-tight text-center",
                                          children: [
                                            '"',
                                            f.future_item.reason,
                                            '"',
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "flex justify-between mt-2",
                                      children: [...Array(7)].map((T, I) =>
                                        e.jsx(
                                          "div",
                                          {
                                            className:
                                              "w-1 h-1 rounded-full bg-gray-200",
                                          },
                                          I,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          f.fortune &&
                            e.jsxs("div", {
                              onClick: () => x(!0),
                              className: "mb-10 cursor-pointer group",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-3",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-bold uppercase tracking-widest text-gray-900",
                                      children: "幸运",
                                    }),
                                    e.jsx(so, {
                                      size: 14,
                                      className:
                                        "text-gray-400 group-hover:translate-x-1 transition-transform",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-5 border border-yellow-100 flex items-center justify-between relative overflow-hidden",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute right-0 top-0 w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl -mr-10 -mt-10",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-3 relative z-10",
                                      children: [
                                        e.jsx("span", {
                                          className: "text-2xl",
                                          children: "🔮",
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-xs font-bold text-yellow-900",
                                              children: f.fortune.tip,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-[10px] text-yellow-700/60 mt-0.5",
                                              children: [
                                                "幸运物：",
                                                f.fortune.lucky_item,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "text-right relative z-10",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-xl font-bold text-yellow-600",
                                          children: f.fortune.luck,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] text-yellow-600/60 ml-1",
                                          children: "%",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-6",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-xs font-bold uppercase tracking-widest text-gray-900",
                                    children: "最近动态",
                                  }),
                                  e.jsx("button", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black",
                                    children: "查看全部",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "space-y-6",
                                children:
                                  (j = f.transactions) == null
                                    ? void 0
                                    : j.map((T, I) =>
                                        e.jsxs(
                                          We.div,
                                          {
                                            initial: { opacity: 0, y: 10 },
                                            animate: { opacity: 1, y: 0 },
                                            transition: { delay: I * 0.05 },
                                            className:
                                              "flex items-start justify-between group",
                                            children: [
                                              e.jsxs("div", {
                                                className: "flex gap-4",
                                                children: [
                                                  e.jsx("div", {
                                                    className: `w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${T.type === "income" ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-600"}`,
                                                    children:
                                                      T.category === "Food"
                                                        ? "🍔"
                                                        : T.category ===
                                                            "Shopping"
                                                          ? "🛍️"
                                                          : T.category ===
                                                              "Transport"
                                                            ? "🚗"
                                                            : T.category ===
                                                                "Entertainment"
                                                              ? "🎬"
                                                              : T.type ===
                                                                  "income"
                                                                ? "💰"
                                                                : "💸",
                                                  }),
                                                  e.jsxs("div", {
                                                    children: [
                                                      e.jsx("h4", {
                                                        className:
                                                          "text-sm font-bold text-gray-900 mb-0.5",
                                                        children: T.merchant,
                                                      }),
                                                      e.jsxs("p", {
                                                        className:
                                                          "text-[10px] text-gray-400 font-medium uppercase tracking-wider",
                                                        children: [
                                                          T.category,
                                                          " • ",
                                                          T.time,
                                                        ],
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-[10px] text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                        children: e.jsx(Yi, {
                                                          value: T.thought,
                                                          voiceClassName:
                                                            "italic",
                                                          forceZhOnly: !u,
                                                        }),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("span", {
                                                className: `text-sm font-bold font-mono ${T.type === "income" ? "text-green-600" : "text-gray-900"}`,
                                                children: [
                                                  T.type === "income"
                                                    ? "+"
                                                    : "-",
                                                  f.currency_symbol,
                                                  T.amount,
                                                ],
                                              }),
                                            ],
                                          },
                                          I,
                                        ),
                                      ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(Os, {
                    children:
                      g &&
                      f.fortune &&
                      e.jsx(We.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "absolute inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center p-8",
                        onClick: () => x(!1),
                        children: e.jsxs(We.div, {
                          initial: { scale: 0.9, y: 20 },
                          animate: { scale: 1, y: 0 },
                          exit: { scale: 0.9, y: 20 },
                          className:
                            "bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl text-center relative overflow-hidden",
                          onClick: (T) => T.stopPropagation(),
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300",
                            }),
                            e.jsx("div", {
                              className:
                                "w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6",
                              children: "🔮",
                            }),
                            e.jsx("h3", {
                              className:
                                "text-3xl font-serif italic mb-2 text-yellow-600",
                              children: f.fortune.luck,
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8",
                              children: "幸运值",
                            }),
                            e.jsxs("div", {
                              className: "space-y-4 mb-8",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex justify-center gap-4 text-xs",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "bg-gray-50 px-4 py-2 rounded-full",
                                      children: [
                                        e.jsx("span", {
                                          className: "text-gray-400 mr-2",
                                          children: "颜色",
                                        }),
                                        e.jsx("span", {
                                          className: "font-bold text-gray-900",
                                          children: f.fortune.lucky_color,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "bg-gray-50 px-4 py-2 rounded-full",
                                      children: [
                                        e.jsx("span", {
                                          className: "text-gray-400 mr-2",
                                          children: "物品",
                                        }),
                                        e.jsx("span", {
                                          className: "font-bold text-gray-900",
                                          children: f.fortune.lucky_item,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-lg font-serif italic leading-relaxed text-gray-800",
                                  children: ['"', f.fortune.tip, '"'],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => x(!1),
                              className:
                                "w-full py-4 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors",
                              children: "关闭",
                            }),
                          ],
                        }),
                      }),
                  }),
                  e.jsx(Os, {
                    children:
                      b &&
                      e.jsx(We.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "absolute inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center p-8",
                        onClick: () => N(null),
                        children: e.jsxs(We.div, {
                          initial: { scale: 0.9, y: 20 },
                          animate: { scale: 1, y: 0 },
                          exit: { scale: 0.9, y: 20 },
                          className:
                            "bg-white w-full max-w-sm rounded-[32px] p-8 shadow-2xl text-center relative overflow-hidden",
                          onClick: (T) => T.stopPropagation(),
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300",
                            }),
                            e.jsx("div", {
                              className:
                                "w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-6",
                              children: b.icon,
                            }),
                            e.jsx("h3", {
                              className: "text-xl font-bold text-gray-900 mb-1",
                              children: b.title,
                            }),
                            b.amount &&
                              e.jsx("p", {
                                className:
                                  "text-3xl font-serif italic text-black mb-4",
                                children: b.amount,
                              }),
                            e.jsxs("div", {
                              className: "space-y-4 mb-8",
                              children: [
                                b.item &&
                                  e.jsxs("div", {
                                    className: "bg-gray-50 p-4 rounded-xl",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold text-gray-900",
                                        children: b.item,
                                      }),
                                      e.jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: b.description,
                                      }),
                                    ],
                                  }),
                                b.product &&
                                  e.jsxs("div", {
                                    className: "bg-gray-50 p-4 rounded-xl",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold text-gray-900",
                                        children: b.product,
                                      }),
                                      e.jsx("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: b.description,
                                      }),
                                    ],
                                  }),
                                b.reason &&
                                  e.jsxs("p", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "font-bold text-gray-400 uppercase text-[10px] tracking-wider block mb-1",
                                        children: "原因",
                                      }),
                                      b.reason,
                                    ],
                                  }),
                                b.response &&
                                  e.jsxs("div", {
                                    className:
                                      "bg-blue-50 p-4 rounded-xl text-left",
                                    children: [
                                      e.jsxs("p", {
                                        className:
                                          "text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-1",
                                        children: ["来自 ", t.name, " 的回复"],
                                      }),
                                      e.jsxs("p", {
                                        className: "text-sm text-blue-900",
                                        children: ['"', b.response, '"'],
                                      }),
                                    ],
                                  }),
                                b.status &&
                                  e.jsx("div", {
                                    className:
                                      "inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold",
                                    children: b.status,
                                  }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => N(null),
                              className:
                                "w-full py-4 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors",
                              children: "完成",
                            }),
                          ],
                        }),
                      }),
                  }),
                ],
              })
            : e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center h-[60vh] opacity-40",
                children: [
                  e.jsx(Sn, { size: 32, className: "animate-spin text-black" }),
                  e.jsx("p", {
                    className:
                      "text-[10px] font-bold uppercase tracking-widest text-black mt-4",
                    children: "同步资产中...",
                  }),
                ],
              }),
        }),
      ],
    });
  },
  fx = "phone_app_wish_list_v1",
  BG = (t) => {
    const s = String(t || "").trim();
    if (!s) return null;
    try {
      return JSON.parse(s);
    } catch {
      const n =
        s.match(/```json\s*([\s\S]*?)```/i) || s.match(/```([\s\S]*?)```/);
      if (n != null && n[1])
        try {
          return JSON.parse(n[1].trim());
        } catch {
          return null;
        }
      const a = s.match(/\{[\s\S]*\}/);
      if (a)
        try {
          return JSON.parse(a[0]);
        } catch {
          return null;
        }
      return null;
    }
  },
  UG = () => `w-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  GG = () => `card-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  ub = (t, s) => {
    const n = t && typeof t == "object" ? t : {};
    return {
      id: UG(),
      status: s,
      title: String(n.title || n.name || "未命名心愿")
        .trim()
        .slice(0, 120),
      wishTime: String(n.wishTime || n.wish_time || n.许愿时间 || "").trim(),
      whyWish: String(
        n.whyWish || n.why_wish || n.缘起 || n.为什么许愿 || "",
      ).trim(),
      completedTime: String(
        n.completedTime || n.completed_time || n.完成于 || "",
      ).trim(),
      completionStory: String(
        n.completionStory ||
          n.completion_story ||
          n.终了那日 ||
          n.完成那天的故事 ||
          "",
      ).trim(),
      progress: String(n.progress || n.进展至哪步 || n.进展 || "").trim(),
      whyAbandon: String(
        n.whyAbandon || n.why_abandon || n.为什么放弃 || "",
      ).trim(),
      abandonStep: String(
        n.abandonStep || n.abandon_step || n.进行到哪步放弃 || "",
      ).trim(),
      abandonStory: String(
        n.abandonStory || n.abandon_story || n.放弃那天的故事 || "",
      ).trim(),
    };
  },
  HG = (t) => {
    const s =
      Number(t == null ? void 0 : t.pastYear) ||
      Number(t == null ? void 0 : t.past_year) ||
      2018;
    let n =
      Number(t == null ? void 0 : t.presentYear) ||
      Number(t == null ? void 0 : t.present_year) ||
      s + 6;
    n <= s && (n = s + 1);
    const a = Array.isArray(t == null ? void 0 : t.done)
        ? t.done
        : Array.isArray(t == null ? void 0 : t.已偿)
          ? t.已偿
          : [],
      r = Array.isArray(t == null ? void 0 : t.doing)
        ? t.doing
        : Array.isArray(t == null ? void 0 : t.正在)
          ? t.正在
          : [],
      i = Array.isArray(t == null ? void 0 : t.abandoned)
        ? t.abandoned
        : Array.isArray(t == null ? void 0 : t.随风)
          ? t.随风
          : [];
    return {
      pastYear: s,
      presentYear: n,
      done: a.map((o) => ub(o, "done")),
      doing: r.map((o) => ub(o, "doing")),
      abandoned: i.map((o) => ub(o, "abandoned")),
    };
  },
  rN = (t) =>
    !t || typeof t != "object"
      ? { cards: [] }
      : Array.isArray(t.cards)
        ? { cards: t.cards }
        : (Array.isArray(t.done) && t.done.length > 0) ||
            (Array.isArray(t.doing) && t.doing.length > 0) ||
            (Array.isArray(t.abandoned) && t.abandoned.length > 0)
          ? {
              cards: [
                {
                  id: `migrated-${Date.now()}`,
                  createdAt: t.updatedAt || new Date().toISOString(),
                  pastYear: Number(t.pastYear) || 2018,
                  presentYear: Number(t.presentYear) || 2024,
                  done: t.done || [],
                  doing: t.doing || [],
                  abandoned: t.abandoned || [],
                },
              ],
            }
          : { cards: [] },
  WG = (t) => {
    if (!t) return [];
    const s = [];
    return t.status === "done"
      ? (s.push({ l: "星霜时许", t: t.wishTime || "—" }),
        s.push({ l: "因何萦怀", t: t.whyWish || "—" }),
        t.completedTime && s.push({ l: "偿愿于", t: t.completedTime }),
        s.push({ l: "终章絮语", t: t.completionStory || "—" }),
        s)
      : t.status === "doing"
        ? (s.push({ l: "星霜时许", t: t.wishTime || "—" }),
          s.push({ l: "因何萦怀", t: t.whyWish || "—" }),
          s.push({ l: "行至半途", t: t.progress || "—" }),
          s)
        : (s.push({ l: "星霜时许", t: t.wishTime || "—" }),
          s.push({ l: "因何萦怀", t: t.whyWish || "—" }),
          s.push({ l: "何故歇心", t: t.whyAbandon || "—" }),
          s.push({ l: "止步何程", t: t.abandonStep || "—" }),
          s.push({ l: "转身那日", t: t.abandonStory || "—" }),
          s);
  },
  YG =
    '"Noto Serif SC","Source Han Serif SC","Songti SC","STSong","Georgia","Times New Roman",serif',
  VG = ({
    contact: t,
    onBack: s,
    apiConfig: n,
    fontConfig: a = { type: "default" },
  }) => {
    const { chats: r, addApiLog: i, getRoleBoundUser: o } = vn(),
      [c, d] = l.useState([]),
      [u, f] = l.useState("list"),
      [p, m] = l.useState(null),
      [h, g] = l.useState(null),
      [x, y] = l.useState(!1),
      v = (t == null ? void 0 : t.id) != null ? String(t.id) : "",
      b = l.useCallback(async () => {
        if (!v) return;
        const T = ((await be.get(fx, {})) || {})[v],
          { cards: I } = rN(T);
        d(I);
      }, [v]);
    l.useEffect(() => {
      b();
    }, [b]);
    const N = l.useCallback(
        async (j) => {
          if (!v) return;
          const T = (await be.get(fx, {})) || {};
          (await be.set(fx, { ...T, [v]: { cards: j } }), d(j));
        },
        [v],
      ),
      w = c.find((j) => j.id === p) || null,
      _ = async (j) => {
        if (!j || !window.confirm("确定删除该辑心愿？删除后不可恢复。")) return;
        const T = c.filter((I) => I.id !== j);
        (await N(T), p === j && (m(null), g(null), f("list")));
      },
      A = async (j, T) => {
        if (!p || !j || !window.confirm("确定删除这条心愿？删除后不可恢复。"))
          return;
        const I = c.map((L) => {
          if (L.id !== p) return L;
          const B = Array.isArray(L[T]) ? L[T] : [];
          return { ...L, [T]: B.filter((F) => F.id !== j) };
        });
        (await N(I), (h == null ? void 0 : h.id) === j && (g(null), f("note")));
      },
      k = async () => {
        if (!(n != null && n.endpoint) || !(n != null && n.key)) {
          window.alert("请先在设置里配置 API");
          return;
        }
        if (!(!v || x)) {
          y(!0);
          try {
            const j = (typeof o == "function" ? o(t) : null) || {},
              T = String(
                (j == null ? void 0 : j.realName) ||
                  (j == null ? void 0 : j.name) ||
                  "用户",
              ).trim(),
              I = String((j == null ? void 0 : j.settings) || "无").trim(),
              L = String(
                (t == null ? void 0 : t.remark) ||
                  (t == null ? void 0 : t.nickname) ||
                  (t == null ? void 0 : t.name) ||
                  "角色",
              ).trim(),
              B = String((t == null ? void 0 : t.setting) || "无").trim(),
              D = (r || [])
                .filter(
                  (le) =>
                    String((le == null ? void 0 : le.contactId) || "") === v &&
                    !(le != null && le.isGroup),
                )
                .slice()
                .sort((le, ie) => {
                  var xe, ye, R, oe;
                  const X = new Date(
                    (le == null ? void 0 : le.updatedAt) ||
                      ((ye =
                        (xe = le == null ? void 0 : le.messages) == null
                          ? void 0
                          : xe[le.messages.length - 1]) == null
                        ? void 0
                        : ye.timestamp) ||
                      0,
                  ).getTime();
                  return (
                    new Date(
                      (ie == null ? void 0 : ie.updatedAt) ||
                        ((oe =
                          (R = ie == null ? void 0 : ie.messages) == null
                            ? void 0
                            : R[ie.messages.length - 1]) == null
                          ? void 0
                          : oe.timestamp) ||
                        0,
                    ).getTime() - X
                  );
                })[0],
              $ = pd(D == null ? void 0 : D.messages, t, o, 28),
              P = `你是人物小传与心愿档案助手。基于「角色人设」「该角色绑定的用户人设（仅绑定，非全局）」与「最近单聊摘要」，生成该角色在人生时间轴上曾许下的心愿清单。要有过去与现在的时间锚点，心愿须符合人设；聊天摘要只作语气与线索，禁止照搬对话，角色要有自己的人生与记忆。

【角色名】${L}
【角色人设】${B}
【绑定用户】${T}
【绑定用户人设（非全局）】${I}
【最近单聊记录摘要】
${$}

输出要求：
1) pastYear、presentYear：整数年份，表示档案覆盖的早年与近年，pastYear < presentYear。
2) 三组数组：done（已偿）、doing（正在）、abandoned（随风/已放弃）。每组 2–5 条为宜，可酌情增减，但三组都至少各 1 条。
3) 每条心愿对象字段：
   - title：短标题
   - wishTime：许愿时间（可写「2023年春」等模糊时间，须合理）
   - whyWish：为什么有这个愿望 / 缘起
   - 已偿 done 另需：completionStory（完成那天的故事/终了那日），可选 completedTime（完成时间描述）
   - 正在 doing 另需：progress（完成到哪一步/进展）
   - 放弃 abandoned 另需：whyAbandon（为什么放弃）、abandonStep（进行到哪一步放弃）、abandonStory（放弃那天的故事）
4) 禁止与聊天记录逐句雷同；禁止空洞鸡汤。

仅输出 JSON：
{"pastYear":2018,"presentYear":2025,"done":[{"title":"","wishTime":"","whyWish":"","completedTime":"","completionStory":""}],"doing":[{"title":"","wishTime":"","whyWish":"","progress":""}],"abandoned":[{"title":"","wishTime":"","whyWish":"","whyAbandon":"","abandonStep":"","abandonStory":""}]}`,
              z = await cr(
                n,
                {
                  temperature:
                    typeof (n == null ? void 0 : n.temperature) == "number"
                      ? n.temperature
                      : 0.72,
                  messages: [{ role: "user", content: P }],
                },
                {
                  addApiLog: i,
                  logScene: "wish_list",
                  logContactName: (t == null ? void 0 : t.name) || "",
                },
              ),
              O = BG(z);
            if (!O) throw new Error("parse");
            const Z = HG(O),
              K = {
                id: GG(),
                createdAt: new Date().toISOString(),
                pastYear: Z.pastYear,
                presentYear: Z.presentYear,
                done: Z.done,
                doing: Z.doing,
                abandoned: Z.abandoned,
              },
              q = (await be.get(fx, {})) || {},
              { cards: V } = rN(q[v]),
              ne = [K, ...V];
            (await N(ne), f("list"), m(null), g(null));
          } catch {
            window.alert("生成失败，请稍后重试");
          } finally {
            y(!1);
          }
        }
      },
      C = (a == null ? void 0 : a.type) === "custom" && !!(a != null && a.url),
      M = C ? "font-serif" : "",
      E = C ? void 0 : { fontFamily: YG },
      S = { paddingTop: "calc(48px + env(safe-area-inset-top, 0px))" };
    if (u === "wishDetail" && h) {
      const j = WG(h);
      return e.jsx("div", {
        className: `h-full w-full flex flex-col bg-[#ececec] overflow-hidden ${M}`,
        style: E,
        children: e.jsx("div", {
          className:
            "flex-1 min-h-0 flex justify-center items-center px-4 pb-1 box-border",
          style: S,
          children: e.jsxs("div", {
            className:
              "w-full max-w-[340px] h-[448px] max-h-[calc(100%-0.25rem)] shrink-0 flex flex-col bg-white border border-[#e0e0e0] shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
            children: [
              e.jsxs("div", {
                className: "flex-1 min-h-0 flex flex-col overflow-hidden",
                children: [
                  e.jsx("header", {
                    className: "text-center mb-3 shrink-0 px-6 pt-4",
                    children: e.jsx("h2", {
                      className:
                        "inline-block m-0 max-w-full pb-1 font-inherit text-[1.12rem] font-normal tracking-[0.28em] text-[#1a1a1a] border-0 border-b border-solid border-[#1a1a1a] rounded-none break-words text-center",
                      children: h.title,
                    }),
                  }),
                  e.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-6 pb-2 [-webkit-overflow-scrolling:touch]",
                    children: e.jsx("div", {
                      className: "space-y-2",
                      children: j.map((T, I) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "text-[0.88rem] leading-[1.65] min-w-0 max-w-full",
                            children: [
                              e.jsxs("span", {
                                className:
                                  "block text-[#1a1a1a] font-bold mb-0.5 break-words [overflow-wrap:anywhere]",
                                children: ["/ ", T.l, " /"],
                              }),
                              e.jsx("span", {
                                className:
                                  "block text-[#666] pl-0.5 break-words whitespace-pre-wrap [overflow-wrap:anywhere] max-w-full",
                                children: T.t,
                              }),
                            ],
                          },
                          I,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "shrink-0 px-6 pt-2 pb-3 bg-white",
                children: [
                  e.jsx("button", {
                    type: "button",
                    className:
                      "w-full text-center text-[0.85rem] text-[#1a1a1a] underline tracking-[0.15em] py-1",
                    onClick: () => {
                      (g(null), f("note"));
                    },
                    children: "返回便签",
                  }),
                  e.jsx("p", {
                    className:
                      "text-center text-[10px] leading-tight text-[#bbb] mt-1 mb-0",
                    children: "凡是过往 · 皆为序章",
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    if (u === "note" && w) {
      const j = w;
      return e.jsx("div", {
        className: `h-full w-full flex flex-col bg-[#ececec] overflow-hidden ${M}`,
        style: E,
        children: e.jsx("div", {
          className:
            "flex-1 min-h-0 flex justify-center items-center px-4 box-border",
          style: {
            paddingTop: "calc(48px + env(safe-area-inset-top, 0px))",
            paddingBottom: "max(0.5rem, env(safe-area-inset-bottom, 0px))",
          },
          children: e.jsxs("div", {
            className:
              "w-full max-w-[340px] h-[448px] max-h-[calc(100%-0.25rem)] shrink-0 flex flex-col bg-white border border-[#e0e0e0] shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
            children: [
              e.jsx("div", {
                className: "flex-1 min-h-0 flex flex-col overflow-hidden",
                children: e.jsxs("div", {
                  className:
                    "flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-6 pt-4 pb-2 [-webkit-overflow-scrolling:touch]",
                  children: [
                    e.jsx("header", {
                      className: "text-center mb-3",
                      children: e.jsx("button", {
                        type: "button",
                        className:
                          "inline-block m-0 cursor-pointer bg-transparent p-0 pb-1 font-inherit text-[1.4rem] font-normal tracking-[0.35em] text-[#1a1a1a] border-0 border-b border-solid border-[#1a1a1a] rounded-none",
                        onClick: () => {
                          (m(null), f("list"));
                        },
                        children: "心愿清单",
                      }),
                    }),
                    j.done.length > 0
                      ? e.jsxs("section", {
                          className: "mb-3.5",
                          children: [
                            e.jsxs("h2", {
                              className:
                                "text-[0.85rem] font-normal text-[#666] mb-1.5 flex items-center",
                              children: [
                                "已偿",
                                e.jsx("span", {
                                  className:
                                    "flex-1 h-px bg-gradient-to-r from-[#eee] to-transparent ml-2.5",
                                }),
                              ],
                            }),
                            e.jsx("ul", {
                              className: "list-none p-0 m-0",
                              children: j.done.map((T) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className:
                                      "mb-1.5 flex items-center gap-2 min-w-0",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "flex-1 min-w-0 text-left text-[0.95rem] leading-normal text-[#bbb] cursor-pointer py-0.5 border-0 border-b border-transparent hover:border-[#bbb] transition-colors break-words bg-transparent p-0 font-inherit rounded-none shadow-none",
                                        onClick: () => {
                                          (g(T), f("wishDetail"));
                                        },
                                        children: T.title,
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "shrink-0 text-[11px] text-red-600/85 px-1.5 py-0.5 rounded active:opacity-75",
                                        onClick: () => A(T.id, "done"),
                                        children: "删除",
                                      }),
                                    ],
                                  },
                                  T.id,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                    j.doing.length > 0
                      ? e.jsxs("section", {
                          className: "mb-3.5",
                          children: [
                            e.jsxs("h2", {
                              className:
                                "text-[0.85rem] font-normal text-[#666] mb-1.5 flex items-center",
                              children: [
                                "正在",
                                e.jsx("span", {
                                  className:
                                    "flex-1 h-px bg-gradient-to-r from-[#eee] to-transparent ml-2.5",
                                }),
                              ],
                            }),
                            e.jsx("ul", {
                              className: "list-none p-0 m-0",
                              children: j.doing.map((T) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className:
                                      "mb-1.5 flex items-center gap-2 min-w-0",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "flex-1 min-w-0 text-left text-[0.95rem] leading-normal text-[#1a1a1a] cursor-pointer py-0.5 border-0 border-b border-transparent hover:border-[#bbb] transition-colors break-words bg-transparent p-0 font-inherit rounded-none shadow-none",
                                        onClick: () => {
                                          (g(T), f("wishDetail"));
                                        },
                                        children: T.title,
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "shrink-0 text-[11px] text-red-600/85 px-1.5 py-0.5 rounded active:opacity-75",
                                        onClick: () => A(T.id, "doing"),
                                        children: "删除",
                                      }),
                                    ],
                                  },
                                  T.id,
                                ),
                              ),
                            }),
                          ],
                        })
                      : null,
                    j.abandoned.length > 0
                      ? e.jsxs("section", {
                          className: "mb-3.5",
                          children: [
                            e.jsxs("h2", {