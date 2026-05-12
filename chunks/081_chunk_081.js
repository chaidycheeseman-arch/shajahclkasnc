- 使用人：${t.users || "—"}
- 使用记录：${t.content}

要求：
1. **必须使用第一人称**：以"我"（${a.name}）的视角叙述，完全代入角色身份
2. 根据上述设备使用记录，展开成一个完整的故事，500-800字
3. 故事要有承转启合：开头（起因/背景）、发展（过程/细节）、高潮（关键事件/转折）、结尾（结果/感受/思考）
4. 要符合角色人设和性格，用第一人称表达角色的真实想法和感受
5. 要有画面感、细节描写、对话片段、心理活动
6. 要符合这个app的美学设计（简洁、有质感、有故事感、有细节）
7. 分段清晰，每段之间用两个换行符分隔
8. 使用衬线字体风格的语言（优雅、有文学感、杂志风）
9. 严禁出现"User"或"Owner"，必须使用${j}
10. 要去油腻，内容要自然、不刻意、不矫情，真实感强，像日记或随笔
11. 要体现智能家居设备使用的特点和氛围
12. **18+ 合理性**：若出现成人向/私密内容，**必须严格符合**角色人设、绑定用户人设与最近聊天记录中的关系与语境。若符合人设与关系，请详细描写、语言直白，不要含糊带过；若非情侣或聊天中无亲密关系，不得强行描写。严禁脱离人设与真实关系强行直白露骨。不强行要求必含18+。

返回格式：第一行是故事标题（10-20字，简洁有诗意），空一行，然后是故事正文。

直接返回，不要其他说明文字，不要Markdown格式，纯文本即可。`,
                  timestamp: new Date().toISOString(),
                },
              ];
            let P = (
              await lo({
                apiConfig: o,
                addApiLog: c,
                messages: D,
                role: a,
                scene: "portable_story_device",
                effectiveUser: f,
              })
            ).trim();
            ((P = P.replace(/^```[\w]*\n?/g, "").replace(/\n?```$/g, "")),
              (P = P.trim()));
            const z = P.split(`
`);
            let O = "",
              Z = P;
            if (
              z.length > 0 &&
              z[0].trim().length > 0 &&
              z[0].trim().length < 30
            ) {
              O = z[0].trim();
              const ne =
                ((S = z[1]) == null ? void 0 : S.trim()) === "" ? 2 : 1;
              Z = z
                .slice(ne)
                .join(
                  `
`,
                )
                .trim();
            }
            O ||
              (O = `${new Date(t.date).toLocaleDateString("zh-CN", { month: "long", day: "numeric" })} · ${k}`);
            const K = Z.split(
                `

`,
              ).filter((ne) => ne.trim()),
              q = `portable_device_story_${a.id}_${n.id}_${s}_${t.id}`,
              V = { title: O, content: Z };
            (await be.set(q, V), m(Z), g(O), b(K), w(!0));
          } catch (j) {
            alert("生成失败：" + (j.message || "未知错误"));
          } finally {
            y(!1);
          }
        }
      };
    return (
      l.useEffect(() => {
        (async () => {
          if (
            !(a != null && a.id) ||
            !(n != null && n.id) ||
            !s ||
            !(t != null && t.id)
          )
            return;
          const S = `portable_device_story_${a.id}_${n.id}_${s}_${t.id}`,
            j = await be.get(S, null);
          if (j) {
            if (typeof j == "object" && j.title && j.content) {
              const T = j.content
                .split(
                  `

`,
                )
                .filter((I) => I.trim());
              (m(j.content), g(j.title), b(T));
            } else {
              const T = j
                  .split(
                    `

`,
                  )
                  .filter((B) => B.trim()),
                L = new Date(t.date).toLocaleDateString("zh-CN", {
                  month: "long",
                  day: "numeric",
                });
              (m(j), g(`${L} · ${k}`), b(T));
            }
            w(!0);
          } else !N && !x && M();
        })();
      }, [
        a == null ? void 0 : a.id,
        n == null ? void 0 : n.id,
        s,
        t == null ? void 0 : t.id,
      ]),
      e.jsxs("div", {
        className: `device-detail-modal device-theme-${A}`,
        children: [
          e.jsxs("div", {
            className: `device-story-header device-story-header-${A}`,
            children: [
              e.jsxs("div", {
                className: "device-story-header-top",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: r,
                    className: "device-story-back",
                    children: "← BACK",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: M,
                    disabled: x,
                    className: `device-story-refresh ${x ? "opacity-50 cursor-not-allowed" : ""}`,
                    "aria-label": "刷新",
                    children: e.jsx(Ai, {
                      size: 14,
                      className: x ? "animate-spin" : "",
                    }),
                  }),
                ],
              }),
              (t == null ? void 0 : t.date) &&
                e.jsx("div", {
                  className: `device-story-date device-story-date-${A}`,
                  children: C(t.date),
                }),
              h &&
                e.jsx("div", {
                  className: "device-story-title-wrapper",
                  children: e.jsx("h1", {
                    className: `device-story-title device-story-title-${A}`,
                    children: h,
                  }),
                }),
            ],
          }),
          e.jsx("div", {
            className: "device-scroll no-scrollbar",
            children:
              x && !p
                ? e.jsx("div", {
                    className: "device-container",
                    children: e.jsxs("div", {
                      className: "device-loading-box",
                      children: [
                        e.jsx("div", { className: "device-load-spinner" }),
                        e.jsx("div", {
                          className: "device-load-text",
                          children: "GENERATING",
                        }),
                      ],
                    }),
                  })
                : p
                  ? e.jsx("div", {
                      className: `device-container device-layout-${A}`,
                      children: e.jsx("div", {
                        className: `device-story-content device-story-${A}`,
                        children: v.map((E, S) =>
                          e.jsx(
                            "p",
                            {
                              className: "device-story-paragraph",
                              children: E.trim(),
                            },
                            S,
                          ),
                        ),
                      }),
                    })
                  : e.jsx("div", {
                      className: "device-container",
                      children: e.jsxs("div", {
                        className:
                          "h-full flex items-center justify-center flex-col text-gray-400",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-3xl font-serif-display mb-2 text-gray-500",
                            children: "EMPTY",
                          }),
                          e.jsx("div", {
                            className: "text-[10px] tracking-widest",
                            children: "NO STORY",
                          }),
                        ],
                      }),
                    }),
          }),
        ],
      })
    );
  },
  ky = (t, s, n) =>
    n
      ? `portable_mileage_places_${t}_${s}_nonmotor`
      : `portable_mileage_places_${t}_${s}`,
  a5 = (t) => `${t.departure || ""}|${t.destination || ""}|${t.date || ""}`,
  yee = ({ vehicle: t, role: s, isNonMotor: n, onBack: a, onItemClick: r }) => {
    const i = vn(),
      o = i == null ? void 0 : i.apiConfig,
      c = i == null ? void 0 : i.addApiLog,
      d = (i == null ? void 0 : i.chats) ?? [],
      u = i == null ? void 0 : i.getRoleBoundUser,
      f = (u == null ? void 0 : u(s)) ?? {},
      [p, m] = l.useState([]),
      [h, g] = l.useState(!1);
    l.useEffect(() => {
      (async () => {
        if (!(s != null && s.id) || !(t != null && t.id)) return;
        const b = ky(s.id, t.id, n),
          N = await be.get(b, []);
        Array.isArray(N) && N.length > 0 && m(N);
      })();
    }, [s == null ? void 0 : s.id, t == null ? void 0 : t.id, n]);
    const x = async (v) => {
        const b = p.map((w) =>
          w.id === v ? { ...w, isFavorited: !w.isFavorited } : w,
        );
        m(b);
        const N = ky(s == null ? void 0 : s.id, t == null ? void 0 : t.id, n);
        await be.set(N, b);
      },
      y = async () => {
        var v;
        if (!(!s || !t || h)) {
          g(!0);
          try {
            const b = (f == null ? void 0 : f.name) || "TA",
              N = d.find((L) => L.contactId === s.id),
              w =
                ((v = N == null ? void 0 : N.messages) == null
                  ? void 0
                  : v.slice(-24)) ?? [],
              _ = w.length
                ? w.map(
                    (L) =>
                      `${L.sender === "me" ? b : s.name}：${(L.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              k = [
                {
                  sender: "me",
                  text: `根据以下信息，生成这辆车（公里数 ${t.mileage ?? "—"}）跑过的 2～3 条长途路线。像地图 App 一样，每条有出发地和目的地。返回 JSON 数组，不要 Markdown 代码块。

角色人设：${(s == null ? void 0 : s.setting) || "无"}

绑定用户人设（非全局用户）：${(f == null ? void 0 : f.settings) || "无"}
绑定用户名字：${b}

车辆：${t.name} · ${t.model} · 公里数 ${t.mileage ?? "—"}

最近聊天（可参考氛围与关系）：${_}

要求：
1. 生成 2～3 条长途路线，出发点和到达点要定位精准（具体到区、街道、地标或详细地址，如「朝阳区望京SOHO」「杭州西湖区文三路」）。
2. 每项必须包含：
   - "departure": "出发点（精准地点，如 XX市XX区XX路/地标）"
   - "destination": "目的地（精准地点，如 XX市XX区XX路/地标）"
   - "date": "日期，格式 YYYY-MM-DD 或 某年某月"
   - "days": "去了几天（如 3天、周末、当天往返）"
   - "withWho": "一个人" 或 "和xxx"
   - "purpose": "目的（一句话）"
   - "reason": "去干嘛了（50～120字，杂志感、有画面感）"
3. 直接返回 JSON 数组。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              C = await lo({
                apiConfig: o,
                addApiLog: c,
                messages: k,
                role: s,
                scene: "portable_mileage_places",
                effectiveUser: f,
              });
            let M = [];
            try {
              const L = C.match(/\[[\s\S]*\]/),
                B = L ? L[0] : C;
              ((M = JSON.parse(B)),
                Array.isArray(M) || (M = []),
                (M = M.slice(0, 5).map((F, D) => ({
                  id: F.id || `mp_${Date.now()}_${D}`,
                  departure: F.departure || F.from || "",
                  destination: F.destination || F.to || F.place || "",
                  date: F.date || "",
                  days: F.days != null ? String(F.days) : "",
                  withWho: F.withWho != null ? String(F.withWho) : "一个人",
                  purpose: F.purpose || F.goal || "",
                  reason: F.reason || F.what || "",
                  isFavorited: !1,
                }))));
            } catch {}
            const E = ky(s.id, t.id, n),
              S = await be.get(E, []),
              j = Array.isArray(S) ? S.filter((L) => L.isFavorited) : [],
              T = new Set(j.map(a5)),
              I = [...j, ...M.filter((L) => !T.has(a5(L)))];
            I.length > 0 && (m(I), await be.set(E, I));
          } catch {
          } finally {
            g(!1);
          }
        }
      };
    return e.jsxs("div", {
      className: "mp-page",
      children: [
        e.jsxs("header", {
          className: "mp-header",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: a,
              className: "mp-header-title-block",
              "aria-label": "返回",
              children: [
                e.jsx("span", {
                  className: "mp-header-eyebrow",
                  children: "长途",
                }),
                e.jsx("h1", { className: "mp-title", children: "里程 · 长途" }),
              ],
            }),
            e.jsx("button", {
              type: "button",
              onClick: y,
              disabled: h,
              className: "mp-refresh",
              "aria-label": "刷新",
              children: e.jsx(Ai, {
                size: 20,
                className: h ? "mp-spin" : "",
                strokeWidth: 2,
              }),
            }),
          ],
        }),
        e.jsxs("main", {
          className: "mp-main",
          children: [
            e.jsxs("div", {
              className: "mp-hero",
              children: [
                e.jsx("span", {
                  className: "mp-mileage-label",
                  children: "公里数",
                }),
                e.jsx("span", {
                  className: "mp-mileage-value",
                  children: t.mileage ?? "—",
                }),
              ],
            }),
            h
              ? e.jsx("p", { className: "mp-loading", children: "生成中…" })
              : p.length === 0
                ? e.jsx("p", {
                    className: "mp-empty",
                    children: "点击右上角刷新，生成长途地点",
                  })
                : e.jsx("ul", {
                    className: "mp-list",
                    children: p.map((v, b) => {
                      const N = v.departure || v.place || "—",
                        w = v.destination || v.place || "—";
                      return e.jsx(
                        "li",
                        {
                          className: "mp-item",
                          children: e.jsxs("article", {
                            className: "mp-card mp-card--clickable",
                            role: r ? "button" : void 0,
                            tabIndex: r ? 0 : void 0,
                            onClick: r ? () => r(v) : void 0,
                            onKeyDown: r
                              ? (_) => {
                                  _.key === "Enter" && r(v);
                                }
                              : void 0,
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: (_) => {
                                  (_.stopPropagation(), x(v.id));
                                },
                                className: `mp-card-fav ${v.isFavorited ? "mp-card-fav--on" : ""}`,
                                "aria-label": v.isFavorited
                                  ? "取消收藏"
                                  : "收藏",
                                children: e.jsx(zn, {
                                  size: 16,
                                  className: v.isFavorited
                                    ? "fill-current"
                                    : "",
                                  strokeWidth: 1.5,
                                }),
                              }),
                              e.jsxs("div", {
                                className: "mp-card-route",
                                children: [
                                  e.jsxs("div", {
                                    className: "mp-card-route-row",
                                    children: [
                                      e.jsx("span", {
                                        className: "mp-card-route-label",
                                        children: "出发",
                                      }),
                                      e.jsx("span", {
                                        className: "mp-card-route-value",
                                        children: N,
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "mp-card-route-arrow",
                                    "aria-hidden": !0,
                                  }),
                                  e.jsxs("div", {
                                    className: "mp-card-route-row",
                                    children: [
                                      e.jsx("span", {
                                        className: "mp-card-route-label",
                                        children: "到达",
                                      }),
                                      e.jsx("span", {
                                        className: "mp-card-route-value",
                                        children: w,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: "mp-card-summary",
                                children:
                                  [v.withWho || "一个人", v.purpose, v.days]
                                    .filter(Boolean)
                                    .join("，") || "—",
                              }),
                              v.reason
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className: "mp-card-divider",
                                        "aria-hidden": !0,
                                      }),
                                      e.jsx("p", {
                                        className: "mp-card-reason",
                                        children: v.reason,
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        },
                        v.id || b,
                      );
                    }),
                  }),
          ],
        }),
      ],
    });
  };
function vee(t) {
  return t
    ? [t.whereStayed, t.whatAte, t.whoMet, t.whatHappened].filter(Boolean)
        .join(`

`)
    : "";
}
const r5 = (t, s, n, a) =>
  a
    ? `portable_mileage_story_${t}_${s}_${n}_nonmotor`
    : `portable_mileage_story_${t}_${s}_${n}`;
function wee(t) {
  if (!t || typeof t != "string") return 1;
  const s = t.trim(),
    n = s.match(/(\d+)\s*天/);
  return n
    ? Math.max(1, Math.min(10, parseInt(n[1], 10)))
    : /周末|两天|两日|二天|2天/i.test(s)
      ? 2
      : /当天|一日|一天|1天/i.test(s)
        ? 1
        : /三天|三日|3天/i.test(s)
          ? 3
          : /四天|五日|5天/i.test(s)
            ? Math.min(5, parseInt(s, 10) || 3)
            : 1;
}
const jee = ({
    item: t,
    vehicle: s,
    role: n,
    isNonMotor: a = !1,
    onBack: r,
  }) => {
    const {
        chats: i = [],
        getRoleBoundUser: o,
        apiConfig: c,
        addApiLog: d,
      } = vn(),
      u = (o == null ? void 0 : o(n)) ?? {},
      [f, p] = l.useState(""),
      [m, h] = l.useState([]),
      [g, x] = l.useState(!1),
      [y, v] = l.useState(0),
      b = wee(t == null ? void 0 : t.days),
      N = Math.max(1, m.length),
      w = y > 0,
      _ = y < N - 1,
      A = async () => {
        var k;
        if (!(!n || !s || !t || g)) {
          x(!0);
          try {
            const C = (u == null ? void 0 : u.name) || "TA",
              M = i.find((F) => F.contactId === n.id),
              E =
                ((k = M == null ? void 0 : M.messages) == null
                  ? void 0
                  : k.slice(-24)) ?? [],
              S = E.length
                ? E.map(
                    (F) =>
                      `${F.sender === "me" ? C : n.name}：${(F.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              T = [
                {
                  sender: "me",
                  text: `根据以下信息，为这次长途旅行写一篇「长途故事」。返回一个 JSON 对象，不要 Markdown 代码块。

角色人设：${(n == null ? void 0 : n.setting) || "无"}

绑定用户人设：${(u == null ? void 0 : u.settings) || "无"}
绑定用户名字：${C}

最近聊天（可参考语气与关系）：${S}

本次长途卡片信息：
- 出发：${t.departure || "—"}
- 到达：${t.destination || "—"}
- 日期：${t.date || "—"}
- 去了几天：${t.days || "—"}
- 与谁/目的：${t.withWho || "一个人"}，${t.purpose || "—"}
- 去干嘛了：${t.reason || "—"}

要求：
1. 生成一个 "title" 字段：故事标题（一句话，有画面感或情绪，10～20 字）。
2. 生成 "pages" 数组，长度为 ${b}（去了几天就要有几页故事）。每页是一个对象，包含四段话：
   - "whereStayed": "住在哪里（用完整句子写，如「住在老城一家带天井的客栈里」，不要单独罗列地名或地址；50～120 字）"
   - "whatAte": "吃了什么（承接上一段，用「在那儿」「随后」等衔接，写当天的食物与场景；50～120 字）"
   - "whoMet": "遇见了谁（承接上文，用「饭后」「在……时」等衔接，写遇到的人与互动，地点自然带出、不要直接写「在某某地点」；50～120 字）"
   - "whatHappened": "发生了什么（承接上文，从早到晚的完整一天故事，200～400 字；用时间与动作自然衔接，不要突兀出现单独的地点名）"
3. 四段之间必须有文字衔接：读起来是一篇连贯叙述，不是四个独立条目。避免每段开头直接写地点（如「XX 酒店」「XX 路」），要把地点织进句子里（如「住在……」「在那儿遇见了……」）。
4. 故事要符合角色人设和聊天氛围，有杂志感、有画面感。
5. **私密/R18**：若某日故事涉及私密或成人向内容且符合角色人设与关系，请详细描写、语言直白，不要含糊带过。
6. 直接返回 JSON，格式：{"title":"...","pages":[{"whereStayed":"...","whatAte":"...","whoMet":"...","whatHappened":"..."},...]}`,
                  timestamp: new Date().toISOString(),
                },
              ],
              I = await lo({
                apiConfig: c,
                addApiLog: d,
                messages: T,
                role: n,
                scene: "portable_story_mileage",
                effectiveUser: u,
              });
            let L = { title: "", pages: [] };
            try {
              const F = I.match(/\{[\s\S]*\}/),
                D = F ? F[0] : I;
              ((L = JSON.parse(D)),
                (!L.pages || !Array.isArray(L.pages)) && (L.pages = []),
                (L.pages = L.pages
                  .slice(0, b)
                  .map(($) => ({
                    whereStayed: $.whereStayed || $.where_stayed || "—",
                    whatAte: $.whatAte || $.what_ate || "—",
                    whoMet: $.whoMet || $.who_met || "—",
                    whatHappened: $.whatHappened || $.what_happened || "—",
                  }))),
                (!L.title || typeof L.title != "string") &&
                  (L.title = `${t.departure || "出发"} → ${t.destination || "到达"}`));
            } catch {}
            const B = r5(n.id, s.id, t.id, a);
            (await be.set(B, { title: L.title, pages: L.pages }),
              p(L.title),
              h(L.pages));
          } catch {
          } finally {
            x(!1);
          }
        }
      };
    return (
      l.useEffect(() => {
        (async () => {
          if (
            !(n != null && n.id) ||
            !(s != null && s.id) ||
            !(t != null && t.id)
          )
            return;
          const C = r5(n.id, s.id, t.id, a),
            M = await be.get(C, null);
          M && M.title && Array.isArray(M.pages) && M.pages.length > 0
            ? (p(M.title), h(M.pages))
            : A();
        })();
      }, [
        n == null ? void 0 : n.id,
        s == null ? void 0 : s.id,
        t == null ? void 0 : t.id,
        a,
      ]),
      l.useEffect(() => {
        y >= N && N > 0 && v(N - 1);
      }, [N, y]),
      e.jsxs("div", {
        className: "msd-page",
        children: [
          e.jsxs("header", {
            className: "msd-header",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: r,
                className: "msd-back",
                "aria-label": "返回",
                children: "BACK",
              }),
              e.jsx("button", {
                type: "button",
                onClick: A,
                disabled: g,
                className: "msd-refresh",
                "aria-label": "重新生成",
                children: e.jsx(Ai, {
                  size: 20,
                  className: g ? "msd-spin" : "",
                }),
              }),
            ],
          }),
          e.jsx("main", {
            className: "msd-main no-scrollbar",
            children:
              g && m.length === 0
                ? e.jsxs("div", {
                    className: "msd-loading",
                    children: [
                      e.jsx("span", {
                        className: "msd-loading-text",
                        children: "生成中",
                      }),
                      e.jsx("span", {
                        className: "msd-loading-sub",
                        children: "请稍候",
                      }),
                    ],
                  })
                : f || m.length > 0
                  ? e.jsxs("div", {
                      className: "msd-content",
                      children: [
                        e.jsx("h1", {
                          className: "msd-title",
                          children: f || "长途故事",
                        }),
                        e.jsx("div", {
                          className: "msd-viewport",
                          children: m.map((k, C) =>
                            e.jsxs(
                              "article",
                              {
                                className: "msd-day-card",
                                "aria-hidden": C !== y,
                                style: { display: C === y ? void 0 : "none" },
                                children: [
                                  e.jsxs("h2", {
                                    className: "msd-day-head",
                                    children: ["第 ", C + 1, " 天"],
                                  }),
                                  e.jsx("p", {
                                    className: "msd-story-body",
                                    children: vee(k) || "—",
                                  }),
                                ],
                              },
                              C,
                            ),
                          ),
                        }),
                        e.jsxs("nav", {
                          className: "msd-pager",
                          "aria-label": "故事翻页",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              className: "msd-pager-btn msd-pager-prev",
                              disabled: !w,
                              onClick: () => v((k) => Math.max(0, k - 1)),
                              "aria-label": "上一页",
                              children: e.jsx(un, { size: 24, strokeWidth: 2 }),
                            }),
                            e.jsxs("span", {
                              className: "msd-pager-info",
                              children: [
                                "第 ",
                                y + 1,
                                " 页 ",
                                e.jsx("span", {
                                  className: "msd-pager-sep",
                                  children: "/",
                                }),
                                " 共 ",
                                N,
                                " 页",
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "msd-pager-btn msd-pager-next",
                              disabled: !_,
                              onClick: () => v((k) => Math.min(N - 1, k + 1)),
                              "aria-label": "下一页",
                              children: e.jsx(Kn, { size: 24, strokeWidth: 2 }),
                            }),
                          ],
                        }),
                        e.jsxs("footer", {
                          className: "msd-footer",
                          children: [s.name, " · ", s.model],
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "msd-loading",
                      children: [
                        e.jsx("span", {
                          className: "msd-loading-text",
                          children: "空",
                        }),
                        e.jsx("span", {
                          className: "msd-loading-sub",
                          children: "暂无故事",
                        }),
                      ],
                    }),
          }),
        ],
      })
    );
  },
  Nee = ({
    vehicle: t,
    role: s,
    onBack: n,
    onRecordClick: a,
    isNonMotor: r = !1,
  }) => {
    const i = vn(),
      o = i == null ? void 0 : i.apiConfig,
      c = i == null ? void 0 : i.addApiLog,
      d = (i == null ? void 0 : i.chats) ?? [],
      u = i == null ? void 0 : i.getRoleBoundUser,
      f = (u == null ? void 0 : u(s)) ?? {},
      [p, m] = l.useState([]),
      [h, g] = l.useState(!1),
      [x, y] = l.useState(0);
    l.useEffect(() => {
      (async () => {
        if (!(s != null && s.id) || !(t != null && t.id)) return;
        const C = r
            ? `portable_passenger_records_${s.id}_${t.id}_nonmotor`
            : `portable_passenger_records_${s.id}_${t.id}`,
          M = await be.get(C, []);
        Array.isArray(M) && M.length > 0 && m(M);
      })();
    }, [s == null ? void 0 : s.id, t == null ? void 0 : t.id, r]);
    const v = async () => {
        var k;
        if (!(!s || !t || h)) {
          g(!0);
          try {
            const C = new Date(),
              M = [];
            for (let ne = 6; ne >= 0; ne--) {
              const le = new Date(C);
              (le.setDate(le.getDate() - ne), M.push(le));
            }
            const E = (f == null ? void 0 : f.name) || "TA",
              S = d.find((ne) => ne.contactId === s.id),
              j =
                ((k = S == null ? void 0 : S.messages) == null
                  ? void 0
                  : k.slice(-30)) ?? [],
              T = j.length
                ? j.map(
                    (ne) =>
                      `${ne.sender === "me" ? E : s.name}：${(ne.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              I = [t.name, t.model, t.plate];
            (t.mileage != null && I.push(t.mileage),
              t.fuel != null && I.push(`电量${t.fuel}%`),
              t.location && I.push(t.location));
            const L = I.filter(Boolean).join(" · "),
              B = r ? "非机动车（电动车、自行车等）" : "机动车（汽车）",
              F = r ? "骑行场景" : "驾驶场景",
              D = r ? "骑行带人" : "开车带人",
              $ = r
                ? "借车给别人（如借给朋友、家人骑去买菜等）"
                : "借车给别人（如借给朋友搬家、司机开去保养、家人开去买菜）",
              P = r
                ? `'清晨六点，骑电动车送${E}去地铁站。路上她坐在后座，双手环着我的腰。到站时她跳下车，说谢谢，然后匆匆跑向站台。'`
                : `'清晨六点，送${E}去机场。路上她靠在副驾驶睡着了，我调低了音乐。到航站楼时她醒了，说梦到我们去了冰岛。我笑了笑，帮她拿行李。'`,
              z = r
                ? "'借给朋友小王骑去买菜，他说要买很多菜，骑电动车方便。晚上才还回来，车筐里还留着一根葱。他说路上遇到下雨，在超市躲了会儿。'"
                : "'借给朋友小李搬家，他说要搬去新租的房子。晚上十点才还回来，车里还有一股火锅味。他说路上遇到堵车，顺便去吃了顿夜宵。'",
              O = r
                ? `'自己骑电动车去接${E}下班，她坐在后座，我们一路聊着今天的工作。路过一家奶茶店，她突然说想喝，我就停下来买了。'`
                : "'司机老王开去4S店保养，顺便接孩子放学。回来时孩子在后座睡着了，老王说今天学校有运动会，孩子累坏了。'",
              K = [
                {
                  sender: "me",
                  text: `[系统指令：请根据以下角色人设、当前车辆信息、最近聊天记录和用车场景，生成该角色过去7天内的用车/载客历史记录。

角色信息：
- 名字：${s.name}
- 昵称：${s.nickname || s.name}
- 人设：${s.setting || "无"}
- 性别：${s.gender || "未知"}

用户信息（角色资料中绑定的用户人设，角色眼中的用户）：
- 名字：${E}
- 备注：${s.remark || "无"}
- 用户人设：${(f == null ? void 0 : f.settings) || "无"}

当前车辆（明确这是哪辆车）：
- ${L}

车辆信息：
- 车昵称：${t.name}
- 车型号：${t.model}
- 车牌号：${t.plate}
- 车辆类型：${B}
${t.mileage != null ? `- 公里数：${t.mileage}` : ""}
${t.fuel != null ? `- 电量/油量：${t.fuel}%` : ""}
${t.location ? `- 当前位置：${t.location}` : ""}

最近聊天记录（供参考语气与关系）：
${T}

日期范围（过去7天）：
${M.map(
  (ne, le) =>
    `- ${ne.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" })}`,
).join(`
`)}

要求：
1. 生成过去7天内的载客记录，每天0-3条记录（根据角色生活轨迹决定）
2. 每条记录需要包含以下字段（返回JSON数组，不要包含Markdown代码块标记）：
   {
     "id": "唯一ID（如r1, r2）",
     "date": "日期（格式：YYYY-MM-DD，必须是真实日期，从上述日期范围中选择）",
     "time": "时间（格式：HH:mm，例如：14:30、09:15）",
     "driver": "司机名字（可能是角色自己，也可能是借车的人，如朋友、家人等，使用符合人设的名字）",
     "passengers": ["乘客1", "乘客2"]（乘客名单，必须包含${E}如果关系好，也要有其他符合人设的NPC名字，如生意伙伴、秘密情人、宠物、朋友等，但**严禁使用联系人库里的其他联系人名字**，必须自己创造符合人设的NPC名字，严禁出现"User"或"Owner"）,
     "reason": "原因（杂志感文案，像一段简短的日记或备注，50-150字，详细描述${F}、目的、氛围、对话片段或感受，要有故事感和画面感，符合app美学设计，例如：${P}、${z}、${O}）",
     "isFavorited": false
   }

3. **多样的${F}**：
   - 包含角色自己${D}
   - 包含${$}
   - 司机可以换人

4. **乘客名单要求**：
   - 如果角色和用户关系好，必须有${E}的出场
   - 也要有其他符合人设的NPC（生意伙伴/秘密情人/宠物/朋友），但**严禁使用联系人库里的其他联系人名字**，必须自己创造符合人设的NPC名字
   - **严禁**出现 "User" 或 "Owner"，必须使用${E}
   - **不允许出现联系人列表里其他非角色联系人**

5. **杂志感文案**：reason字段要写得像一段简短的日记或备注，50-150字，详细描述${F}、目的、氛围、对话片段或感受，要有故事感和画面感，要符合这个app美学设计（简洁、有质感、有故事感、有细节）

6. 日期必须从上述日期范围中选择，使用真实日期
7. 时间要合理（符合生活规律）
8. 记录要符合角色性格和生活轨迹

直接返回JSON数组，不要其他文字说明。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              q = await lo({
                apiConfig: o,
                addApiLog: c,
                messages: K,
                role: s,
                scene: "portable_passenger_records",
                effectiveUser: f,
              });
            let V = [];
            try {
              const ne = q.match(/\[[\s\S]*\]/);
              (ne ? (V = JSON.parse(ne[0])) : (V = JSON.parse(q)),
                Array.isArray(V) || (V = [V]));
              const le = r
                  ? `portable_passenger_records_${s.id}_${t.id}_nonmotor`
                  : `portable_passenger_records_${s.id}_${t.id}`,
                ie = await be.get(le, []),
                X = new Map();
              (ie.forEach((oe) => {
                if (oe.isFavorited) {
                  const ee = `${oe.date}_${oe.time}_${oe.driver}_${oe.reason}`;
                  X.set(ee, oe);
                }
              }),
                (V = V.map((oe, ee) => {
                  const H = `${oe.date || M[0].toISOString().split("T")[0]}_${oe.time || "12:00"}_${oe.driver || s.nickname || s.name}_${oe.reason || "载客记录"}`,
                    Y = X.get(H);
                  return {
                    id:
                      (Y == null ? void 0 : Y.id) ||
                      oe.id ||
                      `record_${Date.now()}_${ee}`,
                    date: oe.date || M[0].toISOString().split("T")[0],
                    time: oe.time || "12:00",
                    driver: oe.driver || s.nickname || s.name,
                    passengers: Array.isArray(oe.passengers)
                      ? oe.passengers
                      : [],
                    reason: oe.reason || "载客记录",
                    isFavorited: !!Y,
                  };
                })));
              const je = ie.filter((oe) => oe.isFavorited),
                xe = new Set(
                  je.map(
                    (oe) => `${oe.date}_${oe.time}_${oe.driver}_${oe.reason}`,
                  ),
                ),
                ye = V.filter((oe) => {
                  const ee = `${oe.date}_${oe.time}_${oe.driver}_${oe.reason}`;
                  return !xe.has(ee) && !oe.isFavorited;
                }),
                R = [...je, ...ye];
              (R.sort((oe, ee) => {
                const H = new Date(oe.date + "T" + oe.time);
                return new Date(ee.date + "T" + ee.time) - H;
              }),
                await be.set(le, R),
                m(R));
            } catch {
              alert("生成失败，请检查API配置或重试");
            }
          } catch (C) {
            alert("生成失败：" + (C.message || "未知错误"));
          } finally {
            g(!1);
          }
        }
      },
      b = (k) => {
        k.preventDefault();
        const C = Date.now();
        C - x < 500 ? (v(), y(0)) : y(C);
      },
      N = async (k) => {
        const C = p.map((E) =>
            E.id === k ? { ...E, isFavorited: !E.isFavorited } : E,
          ),
          M = r
            ? `portable_passenger_records_${s.id}_${t.id}_nonmotor`
            : `portable_passenger_records_${s.id}_${t.id}`;
        (await be.set(M, C), m(C));
      },
      w = (k) =>
        new Date(k).toLocaleDateString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
        }),
      _ = p.reduce((k, C) => {
        const M = C.date;
        return (k[M] || (k[M] = []), k[M].push(C), k);
      }, {}),
      A = Object.keys(_).sort((k, C) => new Date(C) - new Date(k));
    return e.jsxs("div", {
      className: "pr-page",
      children: [
        e.jsxs("header", {
          className: "pr-header",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: n,
              className: "pr-back",
              children: "BACK",
            }),
            e.jsx("h1", {
              onDoubleClick: b,
              className: "pr-title",
              children: "MANIFEST",
            }),
            e.jsx("button", {
              type: "button",
              onClick: v,
              disabled: h,
              className: "pr-refresh",
              "aria-label": "刷新",
              children: e.jsx(Ai, { size: 18, className: h ? "pr-spin" : "" }),
            }),
          ],
        }),
        e.jsx("main", {
          className: "pr-main",
          children:
            p.length === 0
              ? e.jsxs("div", {
                  className: "pr-empty",
                  children: [
                    e.jsx("span", {
                      className: "pr-empty-label",
                      children: "EMPTY",
                    }),
                    e.jsx("span", {
                      className: "pr-empty-hint",
                      children: "双击标题或点击刷新生成记录",
                    }),
                  ],
                })
              : e.jsx("div", {
                  className: "pr-content",
                  children: A.map((k) =>
                    e.jsxs(
                      "section",
                      {
                        className: "pr-date-section",
                        children: [
                          e.jsxs("h2", {
                            className: "pr-date-head",
                            children: [
                              e.jsx("span", {
                                className: "pr-date-primary",
                                children: w(k).split(" ")[0],
                              }),
                              e.jsx("span", {
                                className: "pr-date-secondary",
                                children: w(k).split(" ").slice(1).join(" "),
                              }),
                            ],
                          }),
                          e.jsx("ul", {
                            className: "pr-cards",
                            children: _[k].map((C, M) => {
                              const E = new Date(C.date),
                                S = E.getDate(),
                                j = E.toLocaleDateString("zh-CN", {
                                  month: "long",
                                }),
                                T = E.toLocaleDateString("zh-CN", {
                                  weekday: "short",
                                });
                              return e.jsx(
                                "li",
                                {
                                  className: "pr-card-wrap",
                                  children: e.jsxs("article", {
                                    onClick: () => a && a(C),
                                    className: `pr-card ${r ? "pr-card--nonmotor" : ""}`,
                                    style: { animationDelay: `${M * 0.05}s` },
                                    children: [
                                      e.jsxs("header", {
                                        className: "pr-card-calendar",
                                        children: [
                                          e.jsxs("div", {
                                            className: "pr-card-calendar-left",
                                            children: [
                                              e.jsx("span", {
                                                className: "pr-card-day",
                                                children: S,
                                              }),
                                              e.jsx("span", {
                                                className: "pr-card-month",
                                                children: j,
                                              }),
                                            ],
                                          }),
                                          e.jsx("span", {
                                            className: "pr-card-weekday",
                                            children: T,
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: (I) => {
                                              (I.stopPropagation(), N(C.id));
                                            },
                                            className: `pr-card-fav ${C.isFavorited ? "pr-card-fav--on" : ""}`,
                                            "aria-label": C.isFavorited
                                              ? "取消收藏"
                                              : "收藏",
                                            children: e.jsx(zn, {
                                              size: 14,
                                              className: C.isFavorited
                                                ? "fill-current"
                                                : "",
                                              strokeWidth: 1.5,
                                            }),
                                          }),
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className: "pr-card-rule",
                                        "aria-hidden": !0,
                                      }),
                                      e.jsxs("div", {
                                        className: "pr-card-body",
                                        children: [
                                          e.jsx("p", {
                                            className: "pr-card-time",
                                            children: C.time,
                                          }),
                                          e.jsx("p", {
                                            className: "pr-card-driver",
                                            children: C.driver,
                                          }),
                                          C.passengers &&
                                            C.passengers.length > 0 &&
                                            e.jsx("p", {
                                              className: "pr-card-passengers",
                                              children: C.passengers.join("、"),
                                            }),
                                          e.jsx("div", {
                                            className: "pr-card-note",
                                            children: e.jsx("p", {
                                              children: C.reason,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                C.id,
                              );
                            }),
                          }),
                        ],
                      },
                      k,
                    ),
                  ),
                }),
        }),
      ],
    });
  },
  kee = ({ record: t, vehicle: s, role: n, onBack: a, isNonMotor: r = !1 }) => {
    const i = vn(),
      o = i == null ? void 0 : i.apiConfig,
      c = i == null ? void 0 : i.addApiLog,
      d = (i == null ? void 0 : i.chats) ?? [],
      u = i == null ? void 0 : i.getRoleBoundUser,
      f = (u == null ? void 0 : u(n)) ?? {},
      [p, m] = l.useState(""),
      [h, g] = l.useState(!1),
      [x, y] = l.useState([]),
      v = async () => {
        var N;
        if (!(!n || !s || !t || h)) {
          g(!0);
          try {
            const w = (f == null ? void 0 : f.name) || "TA",
              _ = d.find((D) => D.contactId === n.id),
              A =
                ((N = _ == null ? void 0 : _.messages) == null
                  ? void 0
                  : N.slice(-30)) ?? [],
              k = A.length
                ? A.map(
                    (D) =>
                      `${D.sender === "me" ? w : n.name}：${(D.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              C = [s.name, s.model, s.plate];
            (s.mileage != null && C.push(s.mileage),
              s.fuel != null && C.push(`电量${s.fuel}%`),
              s.location && C.push(s.location));
            const M = C.filter(Boolean).join(" · "),
              E = r ? "非机动车（电动车、自行车等）" : "机动车（汽车）",
              S = r ? "骑行场景" : "驾驶场景",
              T = [
                {
                  sender: "me",
                  text: `[系统指令：请根据以下角色人设、当前车辆信息、最近聊天记录和载客记录，生成一个500-800字的详细故事。

角色信息：
- 名字：${n.name}
- 昵称：${n.nickname || n.name}
- 人设：${n.setting || "无"}
- 性别：${n.gender || "未知"}

用户信息（角色资料中绑定的用户人设，角色眼中的用户）：
- 名字：${w}
- 备注：${n.remark || "无"}
- 用户人设：${(f == null ? void 0 : f.settings) || "无"}

当前车辆（明确这是哪辆车）：
- ${M}

车辆信息：
- 车昵称：${s.name}
- 车型号：${s.model}
- 车牌号：${s.plate}
- 车辆类型：${E}
${s.mileage != null ? `- 公里数：${s.mileage}` : ""}
${s.fuel != null ? `- 电量/油量：${s.fuel}%` : ""}
${s.location ? `- 当前位置：${s.location}` : ""}

最近聊天记录（供参考语气与关系）：
${k}

载客记录信息：
- 日期：${t.date}
- 时间：${t.time}
- 司机：${t.driver}
- 乘客：${Array.isArray(t.passengers) ? t.passengers.join("、") : ""}
- 简要记录：${t.reason}

要求：
1. 根据上述载客记录，展开成一个完整的故事，500-800字
2. 故事要有承转启合：开头（起因/背景）、发展（过程/细节）、高潮（关键事件/转折）、结尾（结果/感受/思考）
3. 要符合角色人设和性格
4. 要有画面感、细节描写、对话片段、心理活动
5. 要符合这个app的美学设计（简洁、有质感、有故事感、有细节）
6. 使用第三人称或第一人称都可以，但要符合角色视角
7. 分段清晰，每段之间用两个换行符分隔
8. 使用衬线字体风格的语言（优雅、有文学感）
9. 严禁出现"User"或"Owner"，必须使用${w}
10. 要体现${S}的特点和氛围
11. **私密/R18**：若故事涉及私密或成人向内容且符合角色人设与双方关系，请详细描写、语言直白，不要含糊带过。

直接返回故事正文，不要其他说明文字，不要Markdown格式，纯文本即可。`,
                  timestamp: new Date().toISOString(),
                },
              ];
            let L = (
              await lo({
                apiConfig: o,
                addApiLog: c,
                messages: T,
                role: n,
                scene: "portable_story_passenger",
                effectiveUser: f,
              })
            ).trim();
            ((L = L.replace(/^```[\w]*\n?/g, "").replace(/\n?```$/g, "")),
              (L = L.trim()));
            const B = L.split(
                `

`,
              ).filter((D) => D.trim()),
              F = r
                ? `portable_story_${n.id}_${s.id}_${t.id}_nonmotor`
                : `portable_story_${n.id}_${s.id}_${t.id}`;
            (await be.set(F, L), m(L), y(B));
          } catch (w) {
            alert("生成失败：" + (w.message || "未知错误"));
          } finally {
            g(!1);
          }
        }
      };
    l.useEffect(() => {
      (async () => {
        if (
          !(n != null && n.id) ||
          !(s != null && s.id) ||
          !(t != null && t.id)
        )
          return;
        const w = r
            ? `portable_story_${n.id}_${s.id}_${t.id}_nonmotor`
            : `portable_story_${n.id}_${s.id}_${t.id}`,
          _ = await be.get(w, null);
        if (_) {
          m(_);
          const A = _.split(
            `

`,
          ).filter((k) => k.trim());
          y(A);
        } else v();
      })();
    }, [
      n == null ? void 0 : n.id,
      s == null ? void 0 : s.id,
      t == null ? void 0 : t.id,
      r,
    ]);
    const b = (N) =>
      new Date(N).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
    return e.jsxs("div", {
      className: "psd-page h-full bg-[#F0F0F0] flex flex-col animate-fade-in",
      children: [
        e.jsxs("div", {
          className: "psd-header",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: a,
              className:
                "text-[10px] font-bold tracking-[0.2em] flex items-center gap-1 hover:text-gray-500 transition",
              children: "BACK",
            }),
            e.jsx("div", {
              className: "text-right flex-1",
              children: e.jsx("h1", {
                className:
                  "block font-serif-display font-black text-xl tracking-tighter leading-none",
                children: "STORY",
              }),
            }),
            e.jsx("button", {
              type: "button",
              onClick: v,
              disabled: h,
              className: `hover:rotate-180 transition duration-700 p-2 ${h ? "opacity-50 cursor-not-allowed" : ""}`,
              "aria-label": "重新生成",
              children: e.jsx(Ai, {
                size: 20,
                className: h ? "animate-spin" : "",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 px-6 pb-6 overflow-y-auto no-scrollbar",
          children:
            h && !p
              ? e.jsxs("div", {
                  className:
                    "h-full flex items-center justify-center flex-col opacity-30",
                  children: [
                    e.jsx("div", {
                      className: "text-3xl font-serif-display mb-2",
                      children: "GENERATING",
                    }),
                    e.jsx("div", {
                      className: "text-[10px] tracking-widest",
                      children: "PLEASE WAIT",
                    }),
                  ],
                })
              : p
                ? e.jsxs("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                      e.jsxs("div", {
                        className: "mb-8 pb-6 border-b-2 border-black/10",
                        children: [
                          e.jsxs("div", {
                            className: "mb-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[10px] text-gray-500 uppercase tracking-[0.3em] mb-1",
                                children: "Date",
                              }),
                              e.jsx("div", {
                                className:
                                  "text-base font-serif-display font-bold",
                                children: b(t.date),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-baseline gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-[0.25em] mb-1",
                                    children: "Driver",
                                  }),
                                  e.jsx("div", {
                                    className: "text-sm font-serif-display",
                                    children: t.driver,
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "w-px h-4 bg-gray-300",
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-[0.25em] mb-1",
                                    children: "Time",
                                  }),
                                  e.jsx("div", {
                                    className: "text-sm font-mono",
                                    children: t.time,
                                  }),
                                ],
                              }),
                              t.passengers &&
                                t.passengers.length > 0 &&
                                e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx("div", {
                                      className: "w-px h-4 bg-gray-300",
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[9px] text-gray-400 uppercase tracking-[0.25em] mb-1",
                                          children: "Passengers",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "text-sm font-serif-display",
                                          children: t.passengers.join("、"),
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
                        className: "space-y-6",
                        children: x.map((N, w) =>
                          e.jsxs(
                            "div",
                            {
                              className: "animate-fade-in",
                              style: { animationDelay: `${w * 0.1}s` },
                              children: [
                                w === 0 &&
                                  e.jsx("div", {
                                    className: "float-left mr-3 mb-1",
                                    children: e.jsx("span", {
                                      className:
                                        "text-6xl font-serif-display font-bold text-black/20 leading-none",
                                      children: N.trim().charAt(0),
                                    }),
                                  }),
                                e.jsx("p", {
                                  className:
                                    "text-base font-serif text-gray-800 leading-[2] text-justify indent-0",
                                  children:
                                    w === 0 ? N.trim().substring(1) : N.trim(),
                                }),
                                w < x.length - 1 &&
                                  e.jsx("div", {
                                    className:
                                      "mt-4 pt-4 border-t border-gray-100",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-1 h-1 bg-gray-300 rounded-full",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent",
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            },
                            w,
                          ),
                        ),
                      }),
                      e.jsx("div", {
                        className: "mt-12 pt-6 border-t border-gray-200",
                        children: e.jsxs("div", {
                          className:
                            "text-[9px] text-gray-400 uppercase tracking-[0.3em] text-center",
                          children: [s.name, " · ", s.model],
                        }),
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className:
                      "h-full flex items-center justify-center flex-col opacity-30",
                    children: [
                      e.jsx("div", {
                        className: "text-3xl font-serif-display mb-2",
                        children: "EMPTY",
                      }),
                      e.jsx("div", {
                        className: "text-[10px] tracking-widest",
                        children: "NO STORY FOUND",
                      }),
                    ],
                  }),
        }),
      ],
    });
  },
  See = ({ onRoleSelect: t, onBack: s }) => {
    const { contactsPublic: n } = vn(),
      a = Array.isArray(n) ? n.filter((i) => !Kl(i)) : [],
      r = (i) =>
        !i || typeof i != "string"
          ? "CONTACT"
          : i.toUpperCase().replace(/\s+/g, " ");
    return e.jsxs("div", {
      className:
        "portable-role-list h-full overflow-y-auto no-scrollbar animate-fade-in bg-[#F0F0F0]",
      children: [
        e.jsxs("header", {
          className:
            "portable-role-list-header mb-8 flex justify-between items-end",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  onClick: s,
                  className:
                    "font-serif-display text-4xl font-bold tracking-tighter text-black cursor-pointer hover:opacity-60 transition-opacity",
                  children: "CONTACTS",
                }),
                e.jsx("p", {
                  className:
                    "text-[10px] text-gray-400 mt-2 tracking-[0.25em] uppercase font-medium",
                  children: "Select Character",
                }),
              ],
            }),
            e.jsx("div", { className: "h-[2px] w-12 bg-black mb-2" }),
          ],
        }),
        e.jsx("div", {
          className: "grid grid-cols-2 gap-4 pb-10",
          children: a.map((i) =>
            e.jsxs(
              "div",
              {
                onClick: () => t(i),
                className: "group cursor-pointer",
                children: [
                  e.jsxs("div", {
                    className:
                      "bento-card relative aspect-[3/4] bg-white mb-3 hairline-border shadow-sm group-hover:shadow-md transition-all duration-500",
                    children: [
                      e.jsx("img", {
                        src:
                          i.background ||
                          i.avatar ||
                          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&fit=crop",
                        alt: "",
                        className:
                          "absolute inset-0 w-full h-full object-cover img-bw opacity-95",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent",
                      }),
                      e.jsxs("div", {
                        className:
                          "absolute bottom-4 left-4 text-white z-10 transition-transform duration-500 group-hover:-translate-y-1",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-8 h-8 rounded-full overflow-hidden border border-white/30 mb-2",
                            children: e.jsx("img", {
                              src: i.avatar,
                              alt: "",
                              className: "w-full h-full object-cover img-bw",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "text-lg font-serif-display font-bold leading-none",
                            children: i.nickname || i.name,
                          }),
                          e.jsx("p", {
                            className:
                              "text-[8px] opacity-80 mt-1 uppercase tracking-widest font-light",
                            children: r(i.nickname || i.name),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className:
                      "text-[9px] text-gray-400 truncate font-serif-display italic border-l border-black pl-2 group-hover:text-black transition-colors",
                    children: i.signature || "这个人很懒，什么都没有留下",
                  }),
                ],
              },
              i.id,
            ),
          ),
        }),
        a.length === 0 &&
          e.jsxs("div", {
            className:
              "h-full flex items-center justify-center flex-col opacity-30",
            children: [
              e.jsx("div", {
                className: "text-3xl font-serif-display mb-2",
                children: "EMPTY",
              }),
              e.jsx("div", {
                className: "text-[10px] tracking-widest",
                children: "请先在聊天应用中添加联系人",
              }),
            ],
          }),
      ],
    });
  },
  Gf = {
    tv: "Living Room TV",
    fridge: "冰箱",
    curtain: "自动窗帘",
    vacuum: "Robot Vacuum",
    tub: "智能浴缸",
    light: "感应灯",
    mirror: "全身镜",
    toilet: "智能马桶",
    trash: "垃圾桶",
    scale: "体脂秤",
  };
function Sy(t) {
  return t !== "Off" && t !== "Idle" && t !== "N/A" && t !== "--" && t !== "";
}
const _ee = ({ home: t, role: s, onBack: n, onDeviceClick: a }) => {
    const r = t.devices || {};
    return e.jsxs("div", {
      className: "shd-page",
      children: [
        e.jsxs("header", {
          className: "shd-header",
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: n,
              className: "shd-header-left",
              "aria-label": "返回",
              children: [
                e.jsx(un, {
                  size: 22,
                  strokeWidth: 2,
                  className: "shd-back-icon",
                  "aria-hidden": !0,
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", { className: "shd-title", children: t.name }),
                    e.jsx("p", { className: "shd-sub", children: t.sub }),
                  ],
                }),
              ],
            }),
            s != null && s.avatar
              ? e.jsx("img", {
                  src: s.avatar,
                  alt: "",
                  className: "shd-avatar img-bw",
                })
              : e.jsx("div", { className: "shd-avatar-ph", "aria-hidden": !0 }),
          ],
        }),
        e.jsxs("main", {
          className: "shd-main no-scrollbar",
          children: [
            e.jsxs("div", {
              className: "shd-grid",
              children: [
                e.jsxs("div", {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => (a == null ? void 0 : a("tv")),
                  onKeyDown: (i) =>
                    i.key === "Enter" && (a == null ? void 0 : a("tv")),
                  className: "shd-card shd-card--hero",
                  children: [
                    e.jsx("img", {
                      src: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80",
                      alt: "",
                      className: "shd-card-bg img-bw",
                    }),
                    e.jsx("div", {
                      className: "shd-card-mask",
                      "aria-hidden": !0,
                    }),
                    e.jsxs("div", {
                      className: "shd-card-inner",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className: "shd-card-label",
                              children: [
                                e.jsx(hL, {
                                  size: 16,
                                  style: {
                                    verticalAlign: "middle",
                                    marginRight: 6,
                                  },
                                }),
                                Gf.tv,
                              ],
                            }),
                            e.jsx("p", {
                              className: "shd-card-value",
                              children: r.tv || "—",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className: "shd-card-tag",
                          children: "REMOTE",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => (a == null ? void 0 : a("fridge")),
                  onKeyDown: (i) =>
                    i.key === "Enter" && (a == null ? void 0 : a("fridge")),
                  className: "shd-card",
                  children: [
                    e.jsx("div", {
                      className: `shd-card-dot ${Sy(r.fridge) ? "shd-card-dot--on" : ""}`,
                      "aria-hidden": !0,
                    }),
                    e.jsx("div", {
                      className: "shd-card-icon-wrap",
                      children: e.jsx(N8, { size: 20, strokeWidth: 1.5 }),
                    }),
                    e.jsx("p", {
                      className: "shd-card-label",
                      children: Gf.fridge,
                    }),
                    e.jsx("p", {
                      className: "shd-card-value",
                      children: r.fridge || "—",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => (a == null ? void 0 : a("curtain")),
                  onKeyDown: (i) =>
                    i.key === "Enter" && (a == null ? void 0 : a("curtain")),
                  className: "shd-card",
                  children: [
                    e.jsx("div", {
                      className: `shd-card-dot ${Sy(r.curtain) ? "shd-card-dot--on" : ""}`,
                      "aria-hidden": !0,
                    }),
                    e.jsx("div", {
                      className: "shd-card-icon-wrap",
                      children: e.jsx(XE, { size: 20, strokeWidth: 1.5 }),
                    }),
                    e.jsx("p", {
                      className: "shd-card-label",
                      children: Gf.curtain,
                    }),
                    e.jsx("p", {
                      className: "shd-card-value",
                      children: r.curtain || "—",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => (a == null ? void 0 : a("vacuum")),
                  onKeyDown: (i) =>
                    i.key === "Enter" && (a == null ? void 0 : a("vacuum")),
                  className: "shd-card shd-card--wide",
                  children: [
                    e.jsx("div", {
                      className: "shd-card-icon-wrap",
                      children: e.jsx(BT, { size: 20, strokeWidth: 1.5 }),
                    }),
                    e.jsxs("div", {
                      className: "shd-card-body",
                      children: [
                        e.jsx("p", {
                          className: "shd-card-label",
                          children: Gf.vacuum,
                        }),
                        e.jsx("p", {
                          className: "shd-card-value",
                          children: r.vacuum || "—",
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className: "shd-card-cta",
                      children: "START",
                    }),
                  ],
                }),
                [
                  { key: "tub", Icon: iT },
                  { key: "light", Icon: s3 },
                  { key: "mirror", Icon: P0 },
                  { key: "toilet", Icon: P0 },
                  { key: "trash", Icon: _n },
                  { key: "scale", Icon: Wy },
                ].map(({ key: i, Icon: o }) =>
                  e.jsxs(
                    "div",
                    {
                      role: "button",
                      tabIndex: 0,
                      onClick: () => (a == null ? void 0 : a(i)),
                      onKeyDown: (c) =>
                        c.key === "Enter" && (a == null ? void 0 : a(i)),
                      className: "shd-card",
                      children: [
                        e.jsx("div", {
                          className: `shd-card-dot ${Sy(r[i]) ? "shd-card-dot--on" : ""}`,
                          "aria-hidden": !0,
                        }),
                        e.jsx("div", {
                          className: "shd-card-icon-wrap",
                          children: e.jsx(o, { size: 20, strokeWidth: 1.5 }),
                        }),
                        e.jsx("p", {
                          className: "shd-card-label",
                          children: Gf[i],
                        }),
                        e.jsx("p", {
                          className: "shd-card-value",
                          children: r[i] || "—",
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              ],
            }),
            e.jsx("footer", {
              className: "shd-footer",
              children: e.jsx("p", {
                className: "shd-footer-text",
                children: "HomeOS v2.0",
              }),
            }),
          ],
        }),
      ],
    });
  },
  Aee = (t, s) => `portable_vehicles_${t}_${s ? "nonMotor" : "motor"}`,
  Cee = ({
    vehicle: t,
    role: s,
    isNonMotor: n,
    onBack: a,
    onShowPassengerRecords: r,
    onShowMileagePlaces: i,
    vehicleMusic: o,
    onVehicleUpdate: c,
  }) => {
    var B;
    const {
        getRoleBoundUser: d,
        chats: u = [],
        apiConfig: f,
        addApiLog: p,
      } = vn(),
      [m, h] = l.useState([]),
      [g, x] = l.useState(!1),
      [y, v] = l.useState(!1),
      b = l.useRef(null),
      N = (o == null ? void 0 : o.playlist) ?? [];
    (o == null || o.currentIndex,
      o == null || o.isPlaying,
      o == null || o.togglePlayPause);
    const w = (o == null ? void 0 : o.refreshPlaylist) ?? (() => {}),
      _ = (o == null ? void 0 : o.goPrevTrack) ?? (() => {}),
      A = (o == null ? void 0 : o.goNextTrack) ?? (() => {}),
      k = o == null ? void 0 : o.currentTrack,
      C = (o == null ? void 0 : o.isGeneratingMusic) ?? !1;
    (o == null || o.isResolvingUrl,
      l.useEffect(() => {
        (async () => {
          if (!(s != null && s.id) || !(t != null && t.id)) return;
          const D = n
              ? `portable_passenger_records_${s.id}_${t.id}_nonmotor`
              : `portable_passenger_records_${s.id}_${t.id}`,
            $ = await be.get(D, []);
          if (Array.isArray($) && $.length > 0) {
            const P = [...$].sort((z, O) => {
              const Z = new Date(z.date + "T" + z.time);
              return new Date(O.date + "T" + O.time) - Z;
            });
            h(P.slice(0, 2));
          }
        })();
      }, [s == null ? void 0 : s.id, t == null ? void 0 : t.id, n]));
    const M = (F) => {
        const D = new Date(F),
          $ = new Date(),
          P = new Date($);
        return (
          P.setDate(P.getDate() - 1),
          D.toDateString() === $.toDateString()
            ? "今天"
            : D.toDateString() === P.toDateString()
              ? "昨天"
              : D.toLocaleDateString("zh-CN", { month: "long", day: "numeric" })
        );
      },
      E = t.fuel != null && t.fuel >= 0 && t.fuel <= 100,
      S = "Energy",
      j = N.length > 0,
      T = async () => {
        var F;
        if (!(!s || !t || y || !c)) {
          v(!0);
          try {
            const D = (d == null ? void 0 : d(s)) ?? {},
              $ = (D == null ? void 0 : D.name) || "TA",
              P = u.find((X) => X.contactId === s.id),
              z =
                ((F = P == null ? void 0 : P.messages) == null
                  ? void 0
                  : F.slice(-20)) ?? [],
              O = z.length
                ? z.map(
                    (X) =>
                      `${X.sender === "me" ? $ : s.name}：${(X.text || "").replace(/\n/g, " ")}`,
                  ).join(`
`)
                : "无",
              K = [
                {
                  sender: "me",
                  text: `根据以下信息，只生成这一辆车的「车牌号」和「车牌背后的故事」。返回一个 JSON 对象，不要 Markdown 代码块。

角色人设：${(s == null ? void 0 : s.setting) || "无"}

绑定用户人设：${(D == null ? void 0 : D.settings) || "无"}
绑定用户名字：${$}

最近聊天（可参考）：${O}

当前车辆：${t.name} · ${t.model}

要求：
1. 生成 "plate"：车牌号（格式如京A·12345。不要随机，必须是角色自己定制选号或花钱买下的他人车牌，对角色有特殊意义）。
2. 生成 "plateStory"：车牌背后的故事（80～150字，必须用第一人称「我」来写：我如何得到这块牌、对我有什么特殊意义、为何选或买这块牌，要有具体情节或情感）。
3. 直接返回 JSON，格式：{"plate":"...","plateStory":"..."}`,
                  timestamp: new Date().toISOString(),
                },
              ],
              q = await lo({
                apiConfig: f,
                addApiLog: p,
                messages: K,
                role: s,
                scene: "portable_vehicle_plate",
                effectiveUser: D,
              });
            let V = { plate: t.plate, plateStory: t.plateStory || "" };
            try {
              const X = q.match(/\{[\s\S]*\}/),
                je = X ? X[0] : q;
              ((V = JSON.parse(je)),
                (V.plate = V.plate || t.plate),
                (V.plateStory =
                  V.plateStory != null
                    ? String(V.plateStory)
                    : t.plateStory || ""));
            } catch {}
            const ne = Aee(s.id, n),
              le = await be.get(ne, []),
              ie = Array.isArray(le)
                ? le.map((X) =>
                    X.id === t.id
                      ? { ...X, plate: V.plate, plateStory: V.plateStory }
                      : X,
                  )
                : [];
            (await be.set(ne, ie),
              c({ ...t, plate: V.plate, plateStory: V.plateStory }));
          } catch {
          } finally {
            v(!1);
          }
        }
      },
      I = () => {
        (b.current && clearTimeout(b.current),
          (b.current = setTimeout(() => {
            ((b.current = null), x(!0));
          }, 250)));
      },
      L = () => {
        (b.current && (clearTimeout(b.current), (b.current = null)),
          x(!1),
          T());
      };
    return e.jsxs("div", {
      className: "vd-page animate-fade-in",
      children: [
        e.jsxs("header", {
          className: "vd-topbar",
          children: [
            e.jsx("div", {
              className: "vd-topbar-avatar",
              onDoubleClick: w,
              role: "button",
              tabIndex: 0,
              onKeyDown: (F) => F.key === "Enter" && w(),
              title: "双击刷新车载歌单",
              "aria-label": "双击刷新歌单",
              children:
                s != null && s.avatar
                  ? e.jsx("img", {
                      src: s.avatar,
                      alt: "",
                      className: "vd-avatar-img img-bw",
                    })
                  : e.jsx("div", {
                      className: "vd-avatar-ph",
                      "aria-hidden": !0,
                    }),
            }),
            e.jsx("button", {
              type: "button",
              onClick: a,
              className: "vd-close",
              "aria-label": "关闭",
              children: e.jsx(Ts, { size: 20, strokeWidth: 2.5 }),
            }),
          ],
        }),
        e.jsxs("section", {
          className: "vd-hero",
          children: [
            e.jsx("h1", { className: "vd-name", children: t.name }),
            e.jsx("p", { className: "vd-model", children: t.model }),
            e.jsx("div", {
              className: "vd-plate-wrap vd-plate-wrap--clickable",
              role: "button",
              tabIndex: 0,
              onClick: I,
              onDoubleClick: L,
              onKeyDown: (F) => F.key === "Enter" && x(!0),
              "aria-label": "单击查看车牌故事，双击刷新车牌与故事",
              title: "单击查看故事，双击刷新车牌与故事",
              children: e.jsx("span", {
                className: "vd-plate",
                children: y ? "刷新中…" : t.plate,
              }),
            }),
            g
              ? e.jsxs("div", {
                  className: "vd-plate-float",
                  role: "dialog",
                  "aria-label": "车牌背后的故事",
                  children: [
                    e.jsx("div", {
                      className: "vd-plate-float-backdrop",
                      onClick: () => x(!1),
                      "aria-hidden": !0,
                    }),
                    e.jsxs("div", {
                      className: "vd-plate-float-card",
                      children: [
                        e.jsxs("div", {
                          className: "vd-plate-float-head",
                          children: [
                            e.jsx("span", {
                              className: "vd-plate-float-plate",
                              children: t.plate,
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "vd-plate-float-close",
                              onClick: () => x(!1),
                              "aria-label": "关闭",
                              children: e.jsx(Ts, { size: 18, strokeWidth: 2 }),
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "vd-plate-float-story",
                          children:
                            ((B = t.plateStory) == null ? void 0 : B.trim()) ||
                            "暂无故事。重新生成车辆后可获得车牌背后的故事。",
                        }),
                      ],
                    }),
                  ],
                })
              : null,
            e.jsxs("div", {
              className: "vd-metrics",
              children: [
                e.jsxs("div", {
                  className: "vd-metric",
                  children: [
                    e.jsxs("span", {
                      className: "vd-metric-label",
                      children: [
                        E ? e.jsx(lT, { size: 11 }) : e.jsx(OI, { size: 11 }),
                        S,
                      ],
                    }),
                    e.jsxs("span", {
                      className: "vd-metric-value",
                      children: [
                        t.fuel != null ? t.fuel : "—",
                        e.jsx("span", {
                          className: "vd-metric-unit",
                          children: "%",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: `vd-metric ${t.mileage != null && i ? "vd-metric--clickable" : ""}`,
                  role: t.mileage != null && i ? "button" : void 0,
                  tabIndex: t.mileage != null && i ? 0 : void 0,
                  onClick: t.mileage != null && i ? i : void 0,
                  onKeyDown:
                    t.mileage != null && i && ((F) => F.key === "Enter" && i()),
                  children: [
                    e.jsxs("span", {
                      className: "vd-metric-label",
                      children: [e.jsx(UI, { size: 11 }), "Mileage"],
                    }),
                    e.jsx("span", {
                      className: "vd-metric-value",
                      children: t.mileage ?? "—",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("section", {
          className: "vd-panel",
          "aria-label": "地点、载客、行车记录仪",
          children: e.jsxs("div", {
            className: "vd-grid",
            children: [
              e.jsxs("article", {
                className: "vd-card vd-card--location",
                children: [
                  e.jsxs("div", {
                    className: "vd-card-head",
                    children: [
                      e.jsx(kl, { size: 12 }),
                      e.jsx("span", { children: "地点" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "vd-card-location-top",
                    children: [
                      e.jsx("p", {
                        className: "vd-card-value vd-card-value--location",
                        children: t.location || "—",
                      }),
                      e.jsx("p", {
                        className: "vd-card-extra",
                        children: "LAT 31.2304° N",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "vd-card-location-divider",
                    "aria-hidden": !0,
                  }),
                  e.jsxs("div", {
                    className: "vd-card-music",
                    children: [
                      e.jsxs("div", {
                        className: "vd-card-music-head",
                        children: [
                          e.jsx(qf, {
                            size: 10,
                            className: "vd-card-music-icon",
                          }),
                          e.jsx("span", {
                            className: "vd-card-music-label",
                            children: "车载音乐",
                          }),
                        ],
                      }),
                      C
                        ? e.jsx("p", {
                            className: "vd-card-music-loading",
                            children: "生成歌单中…",
                          })
                        : j
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs("p", {
                                  className: "vd-card-music-now",
                                  children: [
                                    (k == null ? void 0 : k.title) || "—",
                                    k != null && k.artist
                                      ? ` · ${k.artist}`
                                      : "",
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "vd-card-music-controls vd-card-music-controls--prevnext",
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: _,
                                      className: "vd-card-music-btn",
                                      "aria-label": "上一首",
                                      children: e.jsx(un, {
                                        size: 16,
                                        strokeWidth: 2.5,
                                      }),
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: A,
                                      className: "vd-card-music-btn",
                                      "aria-label": "下一首",
                                      children: e.jsx(Kn, {
                                        size: 16,
                                        strokeWidth: 2.5,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : e.jsx("p", {
                              className: "vd-card-music-hint",
                              children: "双击头像刷新歌单",
                            }),
                    ],
                  }),
                ],
              }),
              e.jsxs("article", {
                role: "button",
                tabIndex: 0,
                onClick: r,
                onKeyDown: (F) => F.key === "Enter" && r(),
                className: "vd-card vd-card--manifest",
                children: [
                  e.jsxs("div", {
                    className: "vd-card-head",
                    children: [
                      e.jsx("span", { children: "载客" }),
                      e.jsx("span", {
                        className: "vd-card-link",
                        children: "查看",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "vd-card-body",
                    children:
                      m.length > 0
                        ? e.jsx("ul", {
                            className: "vd-card-records",
                            children: m.map((F, D) =>
                              e.jsxs(
                                "li",
                                {
                                  className: "vd-card-record",
                                  children: [
                                    e.jsxs("p", {
                                      className: "vd-card-meta",
                                      children: [M(F.date), " · ", F.time],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "vd-card-value vd-card-value--driver",
                                      children: F.driver,
                                    }),
                                    F.passengers &&
                                      F.passengers.length > 0 &&
                                      e.jsxs("div", {
                                        className: "vd-card-tags",
                                        children: [
                                          F.passengers
                                            .slice(0, 3)
                                            .map(($, P) =>
                                              e.jsx(
                                                "span",
                                                {
                                                  className: "vd-card-tag",
                                                  children: $,
                                                },
                                                P,
                                              ),
                                            ),
                                          F.passengers.length > 3 &&
                                            e.jsxs("span", {
                                              className: "vd-card-more",
                                              children: [
                                                "+",
                                                F.passengers.length - 3,
                                              ],
                                            }),
                                        ],
                                      }),
                                  ],
                                },
                                F.id || D,
                              ),
                            ),
                          })
                        : e.jsx("p", {
                            className: "vd-card-empty",
                            children: "暂无记录",
                          }),
                  }),
                ],
              }),
              e.jsxs("article", {
                className: "vd-card vd-card--dashcam",
                children: [
                  e.jsx("div", {
                    className: "vd-card-head",
                    children: e.jsxs("span", {
                      className: "vd-card-rec",
                      children: [
                        e.jsx("i", { className: "vd-card-rec-dot" }),
                        "REC",
                      ],
                    }),
                  }),
                  e.jsx("p", {
                    className: "vd-card-value vd-card-value--dashcam",
                    children: n ? "ACTION CAM" : "行车记录仪",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  i5 = (t, s, n) =>
    n ? `portable_music_${t}_${s}_nonmotor` : `portable_music_${t}_${s}`,
  Mee = (t) =>
    (Array.isArray(t) ? t : []).map((s, n) => ({
      title:
        (s == null ? void 0 : s.title) ||
        (s == null ? void 0 : s.name) ||
        `曲目 ${n + 1}`,
      artist:
        (s == null ? void 0 : s.artist) ||
        (s == null ? void 0 : s.singer) ||
        "",
    })),
  Tee = ({ onClose: t }) => {
    const {
        chats: s = [],
        getRoleBoundUser: n,
        apiConfig: a,
        addApiLog: r,
      } = vn(),
      [i, o] = l.useState(null),
      [c, d] = l.useState(null),
      [u, f] = l.useState(null),
      [p, m] = l.useState(null),
      [h, g] = l.useState(!1),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(null),
      [N, w] = l.useState(null),
      [_, A] = l.useState(!1),
      [k, C] = l.useState(null),
      [M, E] = l.useState(null),
      [S, j] = l.useState(null),
      [T, I] = l.useState([]),
      [L, B] = l.useState(0),
      [F, D] = l.useState(!1);
    (l.useEffect(() => {
      if (!(i != null && i.id) || !(u != null && u.id)) {
        (I([]), B(0));
        return;
      }
      (I([]), B(0));
      const he = i5(i.id, u.id, _);
      be.get(he, []).then((ge) => {
        const J = Mee(ge);
        J.length > 0 && (I(J), B(0));
      });
    }, [i == null ? void 0 : i.id, u == null ? void 0 : u.id, _]),
      l.useEffect(() => {
        B((he) =>
          T.length === 0 ? 0 : Math.min(Math.max(0, he), T.length - 1),
        );
      }, [T.length]));
    const $ = () => {
        T.length !== 0 && B((he) => (he - 1 + T.length) % T.length);
      },
      P = () => {
        T.length !== 0 && B((he) => (he + 1) % T.length);
      },
      z = T.length > 0 ? T[L] : null,
      Z =
        u && i
          ? {
              playlist: T,
              currentTrack: z,
              goPrevTrack: $,
              goNextTrack: P,
              refreshPlaylist: async () => {
                var Ve;
                const he = i,
                  ge = u;
                if (!he || !ge || F) return;
                const J = (n == null ? void 0 : n(he)) ?? {},
                  G = (J == null ? void 0 : J.name) || "TA",
                  we = s.find((Ae) => Ae.contactId === he.id),
                  Q =
                    ((Ve = we == null ? void 0 : we.messages) == null
                      ? void 0
                      : Ve.slice(-30)) ?? [],
                  ve = Q.length
                    ? Q.map(
                        (Ae) =>
                          `${Ae.sender === "me" ? G : he.name}：${(Ae.text || "").replace(/\n/g, " ")}`,
                      ).join(`
`)
                    : "无";
                D(!0);
                try {
                  const te = [
                      {
                        sender: "me",
                        text: `你是车载音乐推荐助手。请严格按照「角色人设 + 绑定用户人设 + 最近聊天记录」来生成歌单，歌单必须完全符合该角色的品味和气质，像是该角色本人会选来在车上听的歌。

角色人设（必须作为选歌依据）：${(he == null ? void 0 : he.setting) || "无"}

绑定用户人设（角色眼中的用户，可影响氛围）：${(J == null ? void 0 : J.settings) || "无"}
绑定用户名字：${G}

最近聊天记录（据此推断角色当下心情、关系与喜好）：${ve}

要求：
1. 生成 3～5 首，返回 JSON 数组，不要 Markdown 代码块。
2. 每项为 { "title": "歌名", "artist": "歌手" }，歌名和歌手用中文或英文均可。
3. 每一首都必须符合角色人设：风格、语种、情绪要像该角色会听、会选的，不能是泛泛的「开车歌单」。可结合绑定用户人设和最近聊天的氛围（如暧昧、怀旧、放松等）来定曲风。
4. 直接返回 JSON 数组，不要其他说明。`,
                        timestamp: new Date().toISOString(),
                      },
                    ],
                    Se = await lo({
                      apiConfig: a,
                      addApiLog: r,
                      messages: te,
                      role: he,
                      scene: "portable_vehicle_music",
                      effectiveUser: J,
                    });
                  let Fe = [];
                  try {
                    const $e = Se.match(/\[[\s\S]*\]/),
                      tt = $e ? $e[0] : Se;
                    ((Fe = JSON.parse(tt)),
                      Array.isArray(Fe) || (Fe = []),
                      (Fe = Fe.slice(0, 5).map((Xe, ht) => ({
                        title: Xe.title || Xe.name || `曲目 ${ht + 1}`,
                        artist: Xe.artist || Xe.singer || "",
                      }))));
                  } catch {}
                  if (Fe.length > 0) {
                    (I(Fe), B(0));
                    const $e = i5(he.id, ge.id, _);
                    await be.set($e, Fe);
                  }
                } catch {
                } finally {
                  D(!1);
                }
              },
              isGeneratingMusic: F,
            }
          : null,
      K = (he) => {
        (o(he), d(null), f(null), m(null));
      },
      q = (he) => {
        (d(he), f(null), m(null), j(null));
      },
      V = (he, ge = !1) => {
        (f(he), A(ge));
      },
      ne = (he) => {
        m(he);
      },
      le = () => {
        o(null);
      },
      ie = () => {
        (d(null), j(null));
      },
      X = (he) => {
        j(he);
      },
      je = () => {
        j(null);
      },
      xe = () => {
        (f(null), g(!1), y(!1), b(null));
      },
      ye = (he) => {
        f(he);
      },
      R = () => {
        g(!0);
      },
      oe = () => {
        y(!0);
      },
      ee = () => {
        (y(!1), b(null));
      },
      H = (he) => {
        b(he);
      },
      Y = () => {
        b(null);
      },
      U = () => {
        (g(!1), w(null));
      },
      ce = (he) => {
        w(he);
      },
      pe = () => {
        w(null);
      },
      se = () => {
        (m(null), C(null));
      },
      Te = (he) => {
        C(he);
      },
      ke = () => {
        (C(null), E(null));
      },
      W = (he) => {
        E(he);
      },
      ue = () => {
        E(null);
      },
      re = () => {
        t();
      };
    return e.jsx("div", {
      className:
        "portable-app h-full w-full flex flex-col relative overflow-hidden bg-[#F0F0F0]",
      children:
        N && u
          ? e.jsx(kee, {
              record: N,
              vehicle: u,
              role: i,
              onBack: pe,
              isNonMotor: _,
            })
          : h && u
            ? e.jsx(Nee, {
                vehicle: u,
                role: i,
                onBack: U,
                onRecordClick: ce,
                isNonMotor: _,
              })
            : M && k && p
              ? e.jsx(bee, {
                  record: M,
                  deviceKey: k,
                  home: p,
                  role: i,
                  onBack: ue,
                })
              : k && p
                ? e.jsx(hee, {
                    deviceKey: k,
                    home: p,
                    role: i,
                    onBack: ke,
                    onRecordClick: W,
                  })
                : p
                  ? e.jsx(_ee, {
                      home: p,
                      role: i,
                      onBack: se,
                      onDeviceClick: Te,
                    })
                  : v && x && u
                    ? e.jsx(jee, {
                        item: v,
                        vehicle: u,
                        role: i,
                        isNonMotor: _,
                        onBack: Y,
                      })
                    : x && u
                      ? e.jsx(yee, {
                          vehicle: u,
                          role: i,
                          isNonMotor: _,
                          onBack: ee,
                          onItemClick: H,
                        })
                      : u
                        ? e.jsx(Cee, {
                            vehicle: u,
                            role: i,
                            isNonMotor: _,
                            onBack: xe,
                            onShowPassengerRecords: R,
                            onShowMileagePlaces: oe,
                            vehicleMusic: Z,
                            onVehicleUpdate: ye,
                          })
                        : S && c === "bag"
                          ? e.jsx(mee, { bag: S, role: i, onBack: je })
                          : c === "bag"
                            ? e.jsx(pee, {
                                role: i,
                                onBack: ie,
                                onBagSelect: X,
                              })
                            : c
                              ? e.jsx(n5, {
                                  category: c,
                                  role: i,
                                  onCategorySelect: q,
                                  onVehicleSelect: V,
                                  onSmartHomeSelect: ne,
                                  onBack: ie,
                                })
                              : i
                                ? e.jsx(n5, {
                                    category: null,
                                    role: i,
                                    onCategorySelect: q,
                                    onVehicleSelect: V,
                                    onSmartHomeSelect: ne,
                                    onBack: le,
                                  })
                                : e.jsx(See, { onRoleSelect: K, onBack: re }),
    });
  },
  I1 = [
    {
      book: "窄门",
      author: "安德烈·纪德",
      quote: "我深刻地爱着你，但却绝望地承认，当你远离我时，我爱你更深。",
    },
    {
      book: "爱",
      author: "伊万诺夫",
      quote: "我们是同一秘密的两个咽喉，合二为一的斯芬克斯。",
    },
    {
      book: "尤利西斯",
      author: "詹姆斯·乔伊斯",
      quote: "在人类的每一个行为中，都有过去存在。",
    },
  ],
  _y = [
    {
      id: "fallback-1",
      remark: "Alissa",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Alissa",
    },
    {
      id: "fallback-2",
      remark: "Julien",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Julien",
    },
    {
      id: "fallback-3",
      remark: "Evelyn",
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Evelyn",
    },
  ],
  a0 = "reading_app_notes_by_contact_v1",
  r0 = "reading_app_library_by_contact_v1",
  o5 = "reading_app_txt_decode_cache_v1",
  i0 = "reading_app_comments_by_contact_v1",
  l5 = "reading_app_api_logs_v1",
  Hf = "reading_app_book_progress_v1",
  c5 = "reading_app_pagination_cache_v1",
  uc = "reading_app_annotations_v1",
  Ay = I1[0],
  Cy = 5e3,
  Wf = (t, s) => {
    try {
      return new TextDecoder(s, { fatal: !1 }).decode(t);
    } catch {
      return "";
    }
  },
  Iee = (t) =>
    (t == null ? void 0 : t[0]) === 239 &&
    (t == null ? void 0 : t[1]) === 187 &&
    (t == null ? void 0 : t[2]) === 191,
  Eee = (t) =>
    (t == null ? void 0 : t[0]) === 255 && (t == null ? void 0 : t[1]) === 254,
  Lee = (t) =>
    (t == null ? void 0 : t[0]) === 254 && (t == null ? void 0 : t[1]) === 255,
  Dee = (t) => {
    let s = 0;
    for (; s < t.length; ) {
      const n = t[s];
      if (n <= 127) {
        s += 1;
        continue;
      }
      if ((n & 224) === 192) {
        if (s + 1 >= t.length || (t[s + 1] & 192) !== 128 || n < 194) return !1;
        s += 2;
        continue;
      }
      if ((n & 240) === 224) {
        if (s + 2 >= t.length) return !1;
        const a = t[s + 1],
          r = t[s + 2];
        if (
          (a & 192) !== 128 ||
          (r & 192) !== 128 ||
          (n === 224 && a < 160) ||
          (n === 237 && a >= 160)
        )
          return !1;
        s += 3;
        continue;
      }
      if ((n & 248) === 240) {
        if (s + 3 >= t.length) return !1;
        const a = t[s + 1],
          r = t[s + 2],
          i = t[s + 3];
        if (
          (a & 192) !== 128 ||
          (r & 192) !== 128 ||
          (i & 192) !== 128 ||
          (n === 240 && a < 144) ||
          n > 244 ||
          (n === 244 && a > 143)
        )
          return !1;
        s += 4;
        continue;
      }
      return !1;
    }
    return !0;
  },
  E1 = (t) => {
    if (!t) return Number.MAX_SAFE_INTEGER;
    const s = (t.match(/\uFFFD/g) || []).length,
      n = (t.match(/[Ãâ€�™œž]/g) || []).length,
      a = (
        t.match(/[\u4e00-\u9fa5a-zA-Z0-9，。！？；：“”‘’、,.!?:;"'()\-\s]/g) ||
        []
      ).length,
      r = Math.max(0, t.length - a);
    return s * 1e3 + n * 300 + r;
  },
  $ee = (t) => {
    const s = new Uint8Array(t || []);
    if (!s.length) return { text: "", encoding: "utf-8" };
    if (Iee(s)) return { text: Wf(t, "utf-8"), encoding: "utf-8-bom" };
    if (Eee(s)) return { text: Wf(t, "utf-16le"), encoding: "utf-16le" };
    if (Lee(s)) return { text: Wf(t, "utf-16be"), encoding: "utf-16be" };
    const n = Wf(t, "utf-8");
    if (Dee(s) && E1(n) < 5e3) return { text: n, encoding: "utf-8" };
    const i = ["gb18030", "gbk", "utf-8"]
      .map((o) => {
        const c = Wf(t, o);
        return { encoding: o, text: c, score: E1(c) };
      })
      .sort((o, c) => o.score - c.score)[0] || { text: "", encoding: "utf-8" };
    return { text: i.text, encoding: i.encoding };
  },
  Fee = (t) =>
    `${String((t == null ? void 0 : t.name) || "").toLowerCase()}::${String((t == null ? void 0 : t.size) || 0)}::${String((t == null ? void 0 : t.lastModified) || 0)}`,
  zee = (t) =>
    String(t || "")
      .replace(
        /\r\n/g,
        `
`,
      )
      .replace(
        /\r/g,
        `
`,
      )
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean),
  Ree = (t, s) => {
    const n = String(t || "")
      .replace(
        /\r\n/g,
        `
`,
      )
      .replace(
        /\r/g,
        `
`,
      );
    if (!n || !Array.isArray(s) || !s.length) return [];
    const a = [];
    for (const o of s) {
      const c = String((o == null ? void 0 : o.text) || "").trim();
      if (!c || !n.includes(c)) continue;
      let d = 0;
      for (; d < n.length; ) {
        const u = n.indexOf(c, d);
        if (u < 0) break;
        (a.push({ start: u, end: u + c.length, ann: o }), (d = u + c.length));
      }
    }
    a.sort((o, c) => o.start - c.start || c.end - o.end - (o.end - o.start));
    const r = [];
    let i = -1;
    for (const o of a) o.start < i || (r.push(o), (i = o.end));
    return r;
  },
  Pee = (t) => {
    const s = String(t || "")
        .replace(
          /\r\n/g,
          `
`,
        )
        .replace(
          /\r/g,
          `
`,
        ),
      n = [];
    let a = 0;
    const r = s.split(/\n+/);
    for (const i of r) {
      const o = i.trim();
      if (!o) continue;
      const c = s.indexOf(o, a);
      if (c < 0) break;
      (n.push({ text: o, start: c, end: c + o.length }), (a = c + o.length));
    }
    return n;
  },
  Oee = (t) => {
    const s = String(t || "");
    let n = 0;
    for (let a = 0; a < s.length; a += 1)
      ((n = (n << 5) - n + s.charCodeAt(a)), (n |= 0));
    return Math.abs(n);
  },
  ZC = (t) =>
    String(
      (t == null ? void 0 : t.remark) ||
        (t == null ? void 0 : t.nickname) ||
        (t == null ? void 0 : t.name) ||
        (t == null ? void 0 : t.wechatName) ||
        "",
    ).trim(),
  Bee = (t) =>
    String(
      (t == null ? void 0 : t.avatar) ||
        (t == null ? void 0 : t.avatarUrl) ||
        (t == null ? void 0 : t.profileImage) ||
        (t == null ? void 0 : t.image) ||
        "",
    ).trim(),
  Uee = (t, s) => {
    const n = ZC(t) || `联系人${s + 1}`,
      a =
        Bee(t) ||
        `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(n)}`;
    return {
      id:
        (t == null ? void 0 : t.id) != null
          ? String(t.id)
          : `contact-${s}-${n}`,
      remark: n,
      avatar: a,
    };
  },
  d5 = (t) => {
    const s = new Set(),
      n = new Set(),
      a = [];
    return (
      (t || []).forEach((r, i) => {
        const o = Uee(r, i);
        if (o.id && s.has(o.id)) return;
        const c = `${o.remark.toLowerCase()}::${o.avatar}`;
        n.has(c) || (o.id && s.add(o.id), n.add(c), a.push(o));
      }),
      a
    );
  },
  u5 = (t) => {
    const s = String((t == null ? void 0 : t.id) ?? "").trim(),
      n = ZC(t);
    return s && s === String(io) ? !0 : n.includes("啾啾小助手");
  },
  f5 = async (t) => $r(t, 720, 0.78),
  Gee = ({ onClose: t }) => {
    var js, cs;
    const s = vn(),
      {
        chats: n = [],
        contacts: a = [],
        apiConfig: r = {},
        getRoleBoundUser: i,
        addApiLog: o,
      } = s || {},