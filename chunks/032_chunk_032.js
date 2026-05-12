            children: e.jsxs("div", {
              className: "pt-[96px] px-12 pb-12",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between items-center mb-16",
                  children: [
                    e.jsx("button", {
                      onClick: () => N(!1),
                      className:
                        "font-serif text-xl font-bold tracking-widest text-[var(--ink-black)] hover:opacity-70",
                      children: "档案",
                    }),
                    e.jsx("h2", {
                      className:
                        "font-serif text-3xl font-bold text-[var(--ink-black)]",
                      children: "切换馆藏身份",
                    }),
                    e.jsx("div", { className: "w-16" }),
                  ],
                }),
                t.map((_) =>
                  e.jsxs(
                    "div",
                    {
                      onClick: () => {
                        (a(_.id), N(!1));
                      },
                      className: "mb-10 group cursor-pointer",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex justify-between items-end border-b border-black/5 pb-6",
                          children: [
                            e.jsx("h3", {
                              className: `font-serif text-3xl font-bold tracking-tighter ${n === _.id ? "text-black" : "text-slate-300"}`,
                              children: _.screenName || _.name || "未命名",
                            }),
                            n === _.id &&
                              e.jsx("span", {
                                className:
                                  "text-[9px] font-bold uppercase tracking-widest mb-2 border-l border-black pl-3",
                                children: "当前活跃",
                              }),
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "text-[10px] text-slate-400 mt-4 uppercase tracking-[0.2em] font-medium italic",
                          children: [
                            _.name || "—",
                            " // 签名：",
                            _.signature || "—",
                          ],
                        }),
                      ],
                    },
                    _.id,
                  ),
                ),
                e.jsx("button", {
                  onClick: () => {
                    (N(!1), x(!0));
                  },
                  className:
                    "mt-12 w-full py-6 border border-black/10 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all",
                  children: "创建新切片",
                }),
              ],
            }),
          }),
        m &&
          e.jsx(hN, {
            initial: m,
            onClose: () => h(null),
            onSave: (_) => {
              (d(m.id, _), h(null));
            },
          }),
      ],
    });
  },
  oH = ({ initial: t, onClose: s, onDone: n }) => {
    const {
        userPersonas: a,
        getAvailableManagers: r,
        addIdol: i,
        updateIdol: o,
        currentPersona: c,
        callApi: d,
        apiConfig: u,
      } = Nd(),
      f = !!t,
      [p, m] = l.useState((t == null ? void 0 : t.realName) ?? ""),
      [h, g] = l.useState((t == null ? void 0 : t.persona) ?? ""),
      [x, y] = l.useState((t == null ? void 0 : t.avatar) ?? ""),
      [v, b] = l.useState((t == null ? void 0 : t.userPersonaId) ?? ""),
      [N, w] = l.useState((t == null ? void 0 : t.managerId) ?? ""),
      [_, A] = l.useState(!1),
      k = l.useRef(null),
      C = r(f ? (t == null ? void 0 : t.id) : null),
      M = (S) => {
        var I;
        const j = (I = S.target.files) == null ? void 0 : I[0];
        if (!j) return;
        const T = new FileReader();
        ((T.onload = () => y(T.result)), T.readAsDataURL(j));
      },
      E = async () => {
        var S;
        if (p.trim()) {
          A(!0);
          try {
            const j = a.find(($) => $.id === v) || c;
            let T = p,
              I = p,
              L = "",
              B = "—",
              F = "—";
            if (
              (f &&
                t &&
                ((T = t.stageName || p),
                (I = t.screenName || p),
                (L = t.signature || ""),
                (B = t.collectors || "—"),
                (F = t.styleCategory || "—")),
              d && u != null && u.key)
            ) {
              const $ = `根据以下偶像信息，生成其艺名、网名、个性签名、追随者数量、风格类别。
【严禁】使用 [MEME]、表情包、emoji、任何非纯文字格式。必须输出纯文字，签名不得包含表情包引用。
格式：
艺名：xxx
网名：xxx
签名：xxx
追随者：xxx
风格类别：xxx

偶像真名：${p}
偶像人设：${h.slice(0, 300)}
${j ? `绑定用户人设：${(S = j.persona) == null ? void 0 : S.slice(0, 200)}` : ""}

追随者用简洁格式如 4.2k、1.8万、520 等。风格类别用 1-4 个词如 先锋、独立电子、实验摇滚 等。
只返回上述格式，不要其他内容。`,
                P = await d(
                  [{ sender: "me", text: $ }],
                  { id: "bubble_sys", name: "System", setting: "" },
                  "system_generation",
                  {},
                  [],
                  [],
                  [],
                  !1,
                  "",
                  {},
                );
              if (P && typeof P == "string") {
                const z = (Z) =>
                    (Z || "")
                      .replace(/\[MEME[：:][^\]]*\]/gi, "")
                      .replace(/［MEME[：:][^］]*］/gi, "")
                      .replace(/\[[^\]]*MEME[^\]]*\]/gi, "")
                      .trim(),
                  O = P.split(`
`);
                for (const Z of O)
                  Z.startsWith("艺名：")
                    ? (T = z(Z.replace("艺名：", "").trim()))
                    : Z.startsWith("网名：")
                      ? (I = z(Z.replace("网名：", "").trim()))
                      : Z.startsWith("签名：")
                        ? (L = z(Z.replace("签名：", "").trim()))
                        : Z.startsWith("追随者：")
                          ? (B = z(Z.replace("追随者：", "").trim()))
                          : Z.startsWith("风格类别：") &&
                            (F = z(Z.replace("风格类别：", "").trim()));
              }
            }
            const D = {
              realName: p.trim(),
              persona: h.trim(),
              avatar: x || null,
              stageName: T,
              screenName: I,
              signature: L,
              collectors: B,
              styleCategory: F,
              userPersonaId: v || (c == null ? void 0 : c.id),
              managerId: N || null,
            };
            (f ? o(t.id, D) : i(D), n == null || n(), s == null || s());
          } catch {
          } finally {
            A(!1);
          }
        }
      };
    return e.jsx("div", {
      className:
        "bubble-app fixed inset-0 z-50 flex flex-col bg-white overflow-hidden",
      children: e.jsxs("div", {
        className: "pt-[88px] px-10 pb-10 flex-1 flex flex-col overflow-y-auto",
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-16",
            children: [
              e.jsx("h2", {
                className:
                  "font-serif text-3xl font-bold italic tracking-tighter text-[var(--ink-black)]",
                children: f ? "编辑艺术家" : "策划新艺术家",
              }),
              e.jsx("button", {
                onClick: s,
                className:
                  "p-2 rounded-full hover:bg-black/5 text-slate-300 hover:text-black",
                children: e.jsx(Ts, { size: 24, strokeWidth: 1.5 }),
              }),
            ],
          }),
          e.jsxs("form", {
            onSubmit: (S) => {
              (S.preventDefault(), E());
            },
            className: "space-y-12 flex-1",
            children: [
              e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  e.jsx("input", {
                    ref: k,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: M,
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      var S;
                      return (S = k.current) == null ? void 0 : S.click();
                    },
                    className:
                      "w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 hover:border-black/20 transition-colors bg-slate-50",
                    children: x
                      ? e.jsx("img", {
                          src: x,
                          alt: "",
                          className: "w-full h-full object-cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full flex items-center justify-center text-slate-400 text-[10px] uppercase tracking-widest",
                          children: "头像",
                        }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b-[1px] border-black pb-4",
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "真实姓名",
                  }),
                  e.jsx("input", {
                    required: !0,
                    value: p,
                    onChange: (S) => m(S.target.value),
                    className:
                      "w-full font-serif text-2xl outline-none bg-transparent text-[var(--ink-black)]",
                    placeholder: "艺术家真实姓名",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "艺术叙事 / 生平",
                  }),
                  e.jsx("textarea", {
                    required: !0,
                    value: h,
                    onChange: (S) => g(S.target.value),
                    rows: 5,
                    className:
                      "w-full border border-slate-100 p-6 text-xs leading-relaxed outline-none focus:border-black transition-colors bg-[#FDFDFD] text-[var(--ink-black)]",
                    placeholder: "描述这位艺术家的灵魂核心...",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "绑定用户人设",
                  }),
                  e.jsxs("select", {
                    value: v,
                    onChange: (S) => b(S.target.value),
                    className:
                      "w-full font-serif text-lg outline-none bg-transparent border-b border-black pb-3 text-[var(--ink-black)]",
                    children: [
                      e.jsx("option", { value: "", children: "请选择" }),
                      a.map((S) =>
                        e.jsx(
                          "option",
                          {
                            value: S.id,
                            children: S.name || S.screenName || "未命名",
                          },
                          S.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3",
                    children: "绑定经纪人（可选）",
                  }),
                  e.jsxs("select", {
                    value: N,
                    onChange: (S) => w(S.target.value),
                    className:
                      "w-full font-serif text-lg outline-none bg-transparent border-b border-black pb-3 text-[var(--ink-black)]",
                    children: [
                      e.jsx("option", { value: "", children: "不绑定" }),
                      C.map((S) =>
                        e.jsx(
                          "option",
                          { value: S.id, children: S.name || "未命名" },
                          S.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "space-y-4",
                children: e.jsx("p", {
                  className:
                    "text-[9px] text-slate-400 uppercase tracking-widest leading-loose",
                  children:
                    "* 艺名、网名、签名、追随者、风格类别由系统根据叙事自动生成，保存时重新生成。",
                }),
              }),
              e.jsxs("button", {
                type: "submit",
                disabled: _ || !p.trim(),
                className:
                  "w-full py-8 bg-black text-white text-[11px] font-bold uppercase tracking-[0.8em] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                children: [
                  _ && e.jsx(Sn, { size: 18, className: "animate-spin" }),
                  f ? "保存修改" : "授权发布",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  lH = [
    { label: "0–3", start: 0, end: 3 },
    { label: "3–6", start: 3, end: 6 },
    { label: "6–9", start: 6, end: 9 },
    { label: "9–12", start: 9, end: 12 },
    { label: "12–15", start: 12, end: 15 },
    { label: "15–18", start: 15, end: 18 },
    { label: "18–21", start: 18, end: 21 },
    { label: "21–24", start: 21, end: 24 },
  ],
  gb = (t, s) => t && s && t.start === s.start && t.end === s.end,
  gN = (t) =>
    Array.isArray(t) && t.length > 0
      ? t
      : t && typeof t.start == "number"
        ? [t]
        : [{ start: 16, end: 20 }],
  cH = ({
    idolId: t,
    onClose: s,
    settings: n,
    onSave: a,
    onBgChange: r,
    subscription: i,
    ttsConfig: o,
    playTTS: c,
    unlockAudio: d,
  }) => {
    var V;
    const u =
        (n == null ? void 0 : n.replyTimeMinutes) != null &&
        !Array.isArray(n == null ? void 0 : n.replyTimeSlots) &&
        !((V = n == null ? void 0 : n.replyTimeSlots) != null && V.length),
      f = u
        ? [{ start: 16, end: 20 }]
        : gN(n == null ? void 0 : n.replyTimeSlots),
      p = u ? !1 : ((n == null ? void 0 : n.useReplyTime) ?? !0),
      m = (n == null ? void 0 : n.instantReply) ?? !1,
      h = (n == null ? void 0 : n.unlimitedMode) ?? !1,
      [g, x] = l.useState(f),
      [y, v] = l.useState(p),
      [b, N] = l.useState(m),
      [w, _] = l.useState(h),
      [A, k] = l.useState((n == null ? void 0 : n.enableTTS) ?? !1),
      [C, M] = l.useState((n == null ? void 0 : n.voiceId) ?? ""),
      [E, S] = l.useState((n == null ? void 0 : n.minimaxGroupId) ?? ""),
      [j, T] = l.useState((n == null ? void 0 : n.minimaxModel) ?? Au),
      [I, L] = l.useState((n == null ? void 0 : n.voiceId) ?? ""),
      [B, F] = l.useState(!1),
      [D, $] = l.useState(!1);
    l.useEffect(() => {
      n &&
        (x(gN(n.replyTimeSlots)),
        v(n.useReplyTime ?? !1),
        N(n.instantReply ?? !1),
        _(n.unlimitedMode ?? !1),
        k(n.enableTTS ?? !1),
        M(n.voiceId ?? ""),
        L(n.voiceId ?? ""),
        S(n.minimaxGroupId ?? ""),
        T(n.minimaxModel ?? Au));
    }, [n]);
    const P = (ne) => {
        if (b) return;
        if (g.some((ie) => gb(ie, ne))) {
          const ie = g.filter((X) => !gb(X, ne));
          (x(ie.length ? ie : [ne]), v(ie.length > 0));
        } else (x([...g, ne]), v(!0));
      },
      z = () => {
        if (b) return;
        const ne = !y;
        (v(ne), !ne && g.length === 0 && x([{ start: 16, end: 20 }]));
      },
      O = () => {
        y || N(!b);
      },
      Z = l.useRef(null),
      K = (ne) => {
        var X;
        const le = (X = ne.target.files) == null ? void 0 : X[0];
        if (!le) return;
        const ie = new FileReader();
        ((ie.onload = () => {
          const je = ie.result;
          r == null || r(je);
        }),
          ie.readAsDataURL(le));
      },
      q = () => {
        const ne = I.trim() || C;
        (a == null ||
          a({
            replyTimeSlots: g,
            useReplyTime: y,
            instantReply: b,
            unlimitedMode: w,
            enableTTS: A,
            voiceId: ne,
            minimaxGroupId: E,
            minimaxModel: j,
          }),
          ne && M(ne),
          s == null || s());
      };
    return e.jsxs("div", {
      className:
        "bubble-app w-full h-full bg-white flex flex-col relative overflow-hidden",
      children: [
        e.jsxs("header", {
          className:
            "h-28 px-10 flex items-end justify-between pb-6 bg-white border-b border-slate-100 z-20 shrink-0",
          style: { paddingTop: "calc(45px + env(safe-area-inset-top, 0px))" },
          children: [
            e.jsx("button", {
              onClick: s,
              className: "mb-1 opacity-80 hover:opacity-100 transition-opacity",
              children: e.jsx(Xr, { className: "w-5 h-5", strokeWidth: 1.5 }),
            }),
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsx("h2", {
                  className:
                    "text-sm font-bold tracking-widest uppercase text-[var(--ink-black)]",
                  children: "频道设置",
                }),
                i &&
                  (() => {
                    const ne = new Date(i.end),
                      le = new Date();
                    if (ne <= le) return null;
                    const ie = ne - le,
                      X = Math.ceil(ie / (24 * 60 * 60 * 1e3));
                    return e.jsx("p", {
                      className: "text-[8px] text-slate-500 mt-2",
                      children: i.useTrial
                        ? `试用剩余 ${X} 天`
                        : `订阅剩余 ${X} 天 · ${ne.toLocaleDateString("zh-CN")} 到期`,
                    });
                  })(),
              ],
            }),
            e.jsx("button", {
              onClick: q,
              className:
                "text-[10px] font-bold uppercase tracking-widest text-[var(--ink-black)] hover:opacity-70 mb-1",
              children: "保存",
            }),
          ],
        }),
        e.jsx("main", {
          className: "flex-1 overflow-y-auto p-8 bg-[#FAF9F6]",
          children: e.jsxs("div", {
            className: "space-y-12",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "无限模式",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-slate-500 mb-3",
                    children:
                      "开启后：当天发信条数不再受“每天 3 条 + 连续天数加成”的限制。",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsx("span", {
                        className: "text-sm",
                        children: "解除每日条数限制",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => _((ne) => !ne),
                        className: `w-12 h-6 rounded-full border flex px-1 transition-all ${w ? "border-black bg-black" : "border-slate-200"}`,
                        children: e.jsx("div", {
                          className: `w-3 h-3 rounded-full transition-all mt-1 ${w ? "bg-white translate-x-6" : "bg-slate-300"}`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "聊天背景",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-slate-500 mb-3",
                    children: "为当前艺人频道上传专属聊天背景图。",
                  }),
                  e.jsx("input", {
                    ref: Z,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: K,
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      var ne;
                      return (ne = Z.current) == null ? void 0 : ne.click();
                    },
                    className:
                      "flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-600 hover:border-black transition-colors",
                    children: [e.jsx(Za, { size: 18 }), "上传背景图"],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "艺人回复时间段",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-slate-500 mb-3",
                    children:
                      "多选时间段，开启后艺人在所选时间段内主动发消息（可能一个时间段发一条或多条，由艺人营业活跃度决定）。与随时回复二选一。",
                  }),
                  e.jsx("div", {
                    className: "flex flex-wrap gap-3 mb-4",
                    children: lH.map((ne) =>
                      e.jsx(
                        "button",
                        {
                          type: "button",
                          disabled: b,
                          onClick: () => P(ne),
                          className: `px-5 py-2.5 text-sm font-bold uppercase tracking-widest border transition-colors disabled:opacity-50 ${g.some((le) => gb(le, ne)) ? "border-black bg-black text-white" : "border-slate-200 text-slate-600 hover:border-black"}`,
                          children: ne.label,
                        },
                        ne.label,
                      ),
                    ),
                  }),
                  e.jsx("p", {
                    className: "text-xs text-slate-500 mb-4",
                    children:
                      "开启后，艺人在所选时间段主动发消息，主动发的也会有艺人发言、粉丝评论、经纪人发言。",
                  }),
                  e.jsx("button", {
                    type: "button",
                    disabled: b,
                    onClick: z,
                    className: `px-8 py-4 text-sm font-bold uppercase tracking-widest border transition-colors disabled:opacity-50 ${y && !b ? "border-black bg-black text-white" : "border-slate-200 text-slate-600"}`,
                    children: y && !b ? "已开启" : "已关闭",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "随时回复（测试用）",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-slate-500 mb-4",
                    children:
                      "开启后，点击灵感按钮会立即调用 API 获取艺人回复。与「按时间段回复」只能开启其一。",
                  }),
                  e.jsx("button", {
                    type: "button",
                    disabled: y,
                    onClick: O,
                    className: `px-8 py-4 text-sm font-bold uppercase tracking-widest border transition-colors disabled:opacity-50 ${b ? "border-black bg-black text-white" : "border-slate-200 text-slate-600"}`,
                    children: b ? "已开启" : "已关闭",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("label", {
                    className:
                      "block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4",
                    children: "语音引擎",
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-slate-500 mb-3",
                    children: [
                      "开启后，艺人语音气泡可点击播放 TTS 朗读。当前引擎：",
                      (o == null ? void 0 : o.provider) === "minimax"
                        ? "MiniMax"
                        : (o == null ? void 0 : o.provider) === "elevenlabs"
                          ? "ElevenLabs"
                          : "未配置",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      e.jsx("span", {
                        className: "text-sm",
                        children: "启用语音",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => k(!A),
                        className: `w-12 h-6 rounded-full border flex px-1 transition-all ${A ? "border-black bg-black" : "border-slate-200"}`,
                        children: e.jsx("div", {
                          className: `w-3 h-3 rounded-full transition-all mt-1 ${A ? "bg-white translate-x-6" : "bg-slate-300"}`,
                        }),
                      }),
                    ],
                  }),
                  A &&
                    (o == null ? void 0 : o.provider) === "minimax" &&
                    e.jsxs("div", {
                      className: "space-y-4 pt-4 border-t border-slate-100",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-[10px] font-bold text-slate-400 uppercase mb-2",
                              children: "Group ID",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: E,
                              onChange: (ne) => S(ne.target.value),
                              placeholder: "MiniMax Group ID",
                              className:
                                "w-full border-b border-slate-200 text-sm py-2 outline-none",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-[10px] font-bold text-slate-400 uppercase mb-2",
                              children: "模型",
                            }),
                            e.jsx("select", {
                              value: j,
                              onChange: (ne) => T(ne.target.value),
                              className:
                                "w-full border-b border-slate-200 text-sm py-2 outline-none",
                              children: Sv(j).map(({ value: ne, label: le }) =>
                                e.jsx(
                                  "option",
                                  { value: ne, children: le },
                                  ne,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className:
                                "block text-[10px] font-bold text-slate-400 uppercase mb-2",
                              children: "Voice ID",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: I,
                              onChange: (ne) => L(ne.target.value),
                              placeholder: "例如 male-qn-qingse",
                              className:
                                "w-full border-b border-slate-200 text-sm py-2 outline-none",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => {
                                const ne = I.trim();
                                (M(ne),
                                  a == null ||
                                    a({
                                      ...n,
                                      replyTimeSlots: g,
                                      useReplyTime: y,
                                      instantReply: b,
                                      unlimitedMode: w,
                                      enableTTS: A,
                                      voiceId: ne,
                                      minimaxGroupId: E,
                                      minimaxModel: j,
                                    }),
                                  F(!0),
                                  setTimeout(() => F(!1), 2e3));
                              },
                              className:
                                "flex items-center gap-1 px-4 py-2 bg-black text-white text-[10px] font-bold uppercase disabled:opacity-60",
                              children: [
                                e.jsx(oo, { size: 12 }),
                                " ",
                                B ? "已保存" : "保存 Voice ID",
                              ],
                            }),
                            e.jsxs("button", {
                              type: "button",
                              disabled: D,
                              onClick: async () => {
                                if (c) {
                                  ($(!0), d == null || d());
                                  try {
                                    await c("你好，这是一个语音测试。", {
                                      voiceId: I.trim() || C || void 0,
                                      groupId: E || void 0,
                                      minimaxModel: j,
                                    });
                                  } catch {
                                  } finally {
                                    $(!1);
                                  }
                                }
                              },
                              className:
                                "flex items-center gap-1 px-4 py-2 border border-slate-200 text-[10px] font-bold uppercase disabled:opacity-60",
                              children: [
                                e.jsx(Ji, { size: 12 }),
                                " ",
                                D ? "播放中..." : "试听",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  A &&
                    (o == null ? void 0 : o.provider) === "elevenlabs" &&
                    e.jsx("div", {
                      className: "pt-4 border-t border-slate-100",
                      children: e.jsx("p", {
                        className: "text-xs text-slate-500",
                        children:
                          "请在全局设置中配置 ElevenLabs。艺人语音气泡将使用联系人的 voiceId。",
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  dH = ({ notification: t, onClose: s }) => {
    const [n, a] = l.useState(!1),
      [r, i] = l.useState(null);
    if (
      (l.useEffect(() => {
        if (t) {
          (i(t),
            navigator.vibrate && navigator.vibrate(50),
            requestAnimationFrame(() => a(!0)));
          const u = setTimeout(() => {
            (a(!1), setTimeout(() => (s == null ? void 0 : s()), 500));
          }, 3e3);
          return () => clearTimeout(u);
        } else {
          a(!1);
          const u = setTimeout(() => i(null), 500);
          return () => clearTimeout(u);
        }
      }, [t, s]),
      !r)
    )
      return null;
    const { avatar: o, name: c, message: d } = r;
    return e.jsx("div", {
      className: `absolute top-20 left-4 right-4 z-[999] transition-all duration-500 transform ${n ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`,
      children: e.jsxs("div", {
        className:
          "bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-3 flex items-center gap-3 border border-gray-200/50",
        children: [
          e.jsx("img", {
            src: o,
            alt: c,
            className: "w-10 h-10 rounded-full object-cover",
          }),
          e.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  e.jsx("h4", {
                    className: "font-bold text-sm text-gray-900",
                    children: c,
                  }),
                  e.jsx("span", {
                    className: "text-[10px] text-gray-400",
                    children: "刚刚",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-xs text-gray-600 truncate",
                children: d,
              }),
            ],
          }),
          e.jsx("button", {
            onClick: (u) => {
              (u.stopPropagation(), s == null || s());
            },
            className: "p-1 text-gray-400 hover:text-gray-600",
            children: e.jsx(Ts, { size: 16 }),
          }),
        ],
      }),
    });
  },
  mx = 50,
  uH = (t) => {
    const s = new Date(t);
    return `${["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][s.getMonth()]} ${s.getDate()} · ${s.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: !1 })}`;
  },
  fH = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  mH = () => {
    const t = new Date(),
      s = t.getFullYear(),
      n = t.getMonth() + 1,
      a = t.getDate(),
      r = fH[t.getDay()],
      i = t.getHours(),
      o = t.getMinutes(),
      c = `${String(i).padStart(2, "0")}:${String(o).padStart(2, "0")}`;
    return {
      str: `${s}年${n}月${a}日 ${r} ${c}`,
      hour: i,
      dateStr: `${s}-${String(n).padStart(2, "0")}-${String(a).padStart(2, "0")}`,
    };
  },
  pH = (t) => {
    const [, s, n] = t.split("-").map(Number),
      a = {
        "01-01": "元旦",
        "02-14": "情人节",
        "03-08": "妇女节",
        "04-04": "清明节",
        "04-05": "清明节",
        "04-06": "清明节",
        "05-01": "劳动节",
        "06-01": "儿童节",
        "10-01": "国庆节",
        "12-24": "平安夜",
        "12-25": "圣诞节",
      },
      r = `${String(s).padStart(2, "0")}-${String(n).padStart(2, "0")}`;
    return a[r] || null;
  },
  EA = (t) => {
    if (!t || typeof t != "string") return !1;
    const s = t.toLowerCase();
    return /外国人|日本人|韩国人|美国人|英国人|法国人|母语[^中]|english|japanese|korean|不说中文|外语|非中文|海外/.test(
      s,
    );
  },
  Sf = (t) => {
    if (!t || typeof t != "string") return { original: t, translation: null };
    if (t.match(/\n---\n/)) {
      const a = t.indexOf(`
---
`);
      return {
        original: t.slice(0, a).trim(),
        translation: t.slice(a + 5).trim(),
      };
    }
    const n = t.match(/\n?\[TRANSLATION[：:]\s*([^\]]+)\]\s*$/);
    return n
      ? {
          original: t.replace(/\n?\[TRANSLATION[：:][^\]]+\]\s*$/, "").trim(),
          translation: n[1].trim(),
        }
      : { original: t, translation: null };
  };
function xH(t) {
  const s = [];
  if (!t || typeof t != "string") return s;
  const n = /\[VOICE\]([\s\S]*?)\[\/VOICE\]/gi;
  let a = 0,
    r;
  for (; (r = n.exec(t)) !== null; ) {
    if (r.index > a) {
      const u = t.slice(a, r.index).trim();
      u && s.push({ type: "text", text: cp(u) });
    }
    const i = r[1].trim(),
      o = i.indexOf(`
---
`);
    let c, d;
    (o >= 0
      ? ((c = i.slice(0, o).trim()), (d = i.slice(o + 5).trim()))
      : ((c = i), (d = null)),
      c && s.push({ type: "voice", voiceText: c, transcription: d }),
      (a = r.index + r[0].length));
  }
  if (a < t.length) {
    const i = t.slice(a).trim();
    i && s.push({ type: "text", text: cp(i) });
  }
  return s;
}
function bN(t, s) {
  const n = (m) => (m || "").replace(/\*+/g, " ").replace(/\s+/g, " ").trim();
  let a = "";
  const r = [];
  let i = "";
  const o = ["【粉丝评论】", "粉丝评论区：", "粉丝评论区"],
    c = [
      "【经纪人发言】",
      "【经纪人】",
      "经纪人发言：",
      "经纪人发言",
      "经纪人：",
    ],
    d = o.find((m) => t.indexOf(m) >= 0),
    u = c.find((m) => t.indexOf(m) >= 0),
    f = d ? t.indexOf(d) : -1,
    p = u ? t.indexOf(u) : -1;
  if (f >= 0) {
    const m = t.slice(0, f);
    a = n(m)
      .replace(
        /\|\|/g,
        `
`,
      )
      .trim();
    const g = (
        p >= 0 ? t.slice(f + d.length, p) : t.slice(f + d.length)
      ).replace(/\*+/g, " "),
      x = /@([^：:\n]+)[：:]\s*([\s\S]*?)(?=@[^：:\n]+[：:]|$)/g;
    let y;
    for (; (y = x.exec(g)) !== null; ) {
      const v = g1(y[1]),
        b = ed(y[2].replace(/\*+/g, "").replace(/\s+/g, " ").trim());
      b && r.push({ name: v, content: b });
    }
    if (r.length === 0 && g.trim()) {
      const v = g
        .split(/[\n|]+/)
        .map((b) => b.trim())
        .filter((b) => b.length > 2);
      for (const b of v) {
        const N = Math.max(b.indexOf("："), b.indexOf(":"));
        N > 0
          ? r.push({
              name: g1(b.slice(0, N).replace(/^@\s*/, "").trim()),
              content: ed(b.slice(N + 1).trim()),
            })
          : r.push({ name: "粉丝", content: ed(b) });
      }
    }
  } else
    a = n(p >= 0 ? t.slice(0, p) : t)
      .replace(
        /\|\|/g,
        `
`,
      )
      .trim();
  if (s && p >= 0 && u) {
    const m = t.slice(p + u.length);
    i = ed(
      n(m)
        .replace(/^[^：:]*[：:]\s*/, "")
        .trim(),
    );
  }
  return (
    (a = ed(
      cp(
        a
          .replace(/【粉丝评论】[\s\S]*/g, "")
          .replace(/粉丝评论区[：:]*[\s\S]*/g, "")
          .replace(/【经纪人发言】[\s\S]*/g, "")
          .replace(
            /\|\|/g,
            `
`,
          )
          .trim(),
      ),
    )),
    { artistText: a, fans: r, managerText: i }
  );
}
function cp(t) {
  return (t || "")
    .replace(/【艺人回复】/g, "")
    .replace(/［艺人回复］/g, "")
    .replace(/［MEME[：:][^］\]]*］/g, "")
    .replace(/\[MEME[：:][^\]]*\]/g, "")
    .replace(/［POST_MOMENT[：:][^］\]]*］/g, "")
    .replace(/\[POST_MOMENT[：:][^\]]*\]/g, "")
    .replace(/［POST_MOMENT］/g, "")
    .replace(/\[POST_MOMENT\]/g, "")
    .replace(/［[^］]*MEME[^］]*］/g, "")
    .replace(/［[^］]*POST_MOMENT[^］]*］/g, "")
    .replace(/\[[^\]]*POST_MOMENT[^\]]*\]/g, "")
    .replace(/【[^】]*MEME[^】]*】/g, "")
    .replace(/\[[^\]]*MEME[^\]]*\]/g, "")
    .replace(/［VOICE］[\s\S]*?［\/VOICE］/gi, "")
    .replace(/［VOICE］[\s\S]*?\[\/VOICE\]/gi, "")
    .replace(/\[VOICE\][\s\S]*?\[\/VOICE\]/gi, "")
    .replace(/［RECALL[：:][^］\]]*］/g, "")
    .replace(/\[RECALL[：:][^\]]*\]/g, "")
    .replace(/（配图\d+[：:][^）)]*）/g, "")
    .replace(/\(配图\d+[：:][^)]*\)/g, "")
    .replace(/粉丝评论区[：:]*/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}
function ed(t) {
  return (t || "")
    .replace(/^艺人[：:]\s*/, "")
    .replace(/^艺人\s+/, "")
    .trim();
}
function g1(t) {
  const s = (t || "").trim();
  return s === "艺人" ? "粉丝" : s || "粉丝";
}
const hH = ({ idolId: t, onBack: s }) => {
  const {
      getIdolById: n,
      managers: a,
      userPersonas: r,
      currentPersona: i,
      isSubscribed: o,
      getSubscription: c,
      loadChatMessages: d,
      saveChatMessages: u,
      loadChatSettings: f,
      saveChatSettings: p,
      getRemainingMessagesToday: m,
      consumeMessageCount: h,
      getConsecutiveSentDays: g,
      recordSentDate: x,
      loadChatBg: y,
      saveChatBg: v,
      getProactiveSlotsToday: b,
      addProactiveSlotToday: N,
      callApi: w,
      apiConfig: _,
      MSG_PER_DAY: A,
      UNLIMITED_REMAINING: k,
      playTTS: C,
      stopTTS: M,
      ttsConfig: E,
      unlockAudio: S,
      isPlaying: j,
      playingMessageId: T,
    } = Nd(),
    I = n(t),
    L = I != null && I.managerId ? a.find((ve) => ve.id === I.managerId) : null,
    B =
      (I != null &&
        I.userPersonaId &&
        r.find((ve) => ve.id === I.userPersonaId)) ||
      i,
    [F, D] = l.useState([]),
    [$, P] = l.useState(""),
    [z, O] = l.useState(A),
    [Z, K] = l.useState(0),
    [q, V] = l.useState(""),
    [ne, le] = l.useState(!1),
    [ie, X] = l.useState({
      replyTimeSlots: [{ start: 16, end: 20 }],
      useReplyTime: !0,
      instantReply: !1,
      unlimitedMode: !1,
    }),
    [je, xe] = l.useState(!1),
    [ye, R] = l.useState(""),
    [oe, ee] = l.useState(null),
    H = l.useRef(null),
    Y = l.useRef(null),
    U = l.useRef(!1),
    ce = l.useRef(0),
    pe = l.useRef(F);
  pe.current = F;
  const se = (ve = !1) => {
      H.current &&
        (H.current.scrollIntoView({
          behavior: ve ? "auto" : "smooth",
          block: "end",
        }),
        ve && Y.current && (Y.current.scrollTop = Y.current.scrollHeight));
    },
    Te = () => {
      ((U.current = !0),
        se(!1),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => se(!1));
        }),
        setTimeout(() => se(!1), 380));
    };
  (l.useEffect(() => {
    const ve = window.visualViewport;
    if (!ve) return;
    ce.current = ve.height;
    const Ve = () => {
      const Ae = ce.current,
        te = ve.height;
      ((ce.current = te),
        Ae > 0 &&
          te < Ae &&
          U.current &&
          (se(!1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => se(!1));
          }),
          setTimeout(() => se(!1), 100)));
    };
    return (
      ve.addEventListener("resize", Ve),
      () => ve.removeEventListener("resize", Ve)
    );
  }, []),
    l.useEffect(() => {
      t && ((ke.current = 0), d(t).then(D));
    }, [t, d]),
    l.useEffect(() => {
      t && (m(t).then(O), g(t).then(K), y(t).then(V));
    }, [t, m, g, y]),
    l.useEffect(() => {
      t &&
        f(t).then((ve) =>
          X(
            ve || {
              replyTimeSlots: [{ start: 16, end: 20 }],
              useReplyTime: !0,
              instantReply: !1,
              unlimitedMode: !1,
            },
          ),
        );
    }, [t, f]));
  const ke = l.useRef(0);
  (l.useEffect(() => {
    var Ae;
    const ve = F.length,
      Ve = ke.current;
    (ve > 0 &&
      ve > Ve &&
      ((Ae = H.current) == null ||
        Ae.scrollIntoView({ behavior: Ve === 0 ? "auto" : "smooth" })),
      (ke.current = ve));
  }, [F]),
    l.useEffect(() => {
      !ne && t && requestAnimationFrame(() => se(!0));
    }, [ne]));
  const W = l.useRef(null),
    ue = l.useRef(null);
  l.useEffect(() => {
    if (
      !t ||
      !(ie != null && ie.useReplyTime) ||
      (ie != null && ie.instantReply) ||
      !w ||
      !(_ != null && _.key)
    )
      return;
    const ve =
        Array.isArray(ie == null ? void 0 : ie.replyTimeSlots) &&
        ie.replyTimeSlots.length > 0
          ? ie.replyTimeSlots
          : [{ start: 16, end: 20 }],
      Ve = async () => {
        const te = new Date().getHours(),
          Se = ve.find((tt) => te >= tt.start && te < tt.end);
        if (!Se) return;
        const Fe = `${Se.start}-${Se.end}`;
        if (!(await b(t)).includes(Fe) && !W.current) {
          W.current = !0;
          try {
            await ue.current(!0, Fe);
          } finally {
            W.current = !1;
          }
        }
      };
    Ve();
    const Ae = setInterval(Ve, 60 * 1e3);
    return () => clearInterval(Ae);
  }, [
    t,
    ie == null ? void 0 : ie.useReplyTime,
    ie == null ? void 0 : ie.instantReply,
    ie == null ? void 0 : ie.replyTimeSlots,
    w,
    _ == null ? void 0 : _.key,
    b,
  ]);
  const re = async (ve) => {
      (D(ve), await u(t, ve));
    },
    he = async (ve) => {
      const Ve = F.map((Ae) =>
        Ae.type === "time" && Ae.id === ve
          ? { ...Ae, fansHidden: !Ae.fansHidden }
          : Ae,
      );
      (D(Ve), await u(t, Ve));
    },
    ge = async (ve = !1, Ve = null) => {
      if (!w || !(_ != null && _.key) || !I) return;
      (xe(!0), R(""));
      const Ae = pe.current;
      try {
        const te = I.persona || "暂无",
          Se = (B == null ? void 0 : B.persona) || "暂无",
          Fe = L ? L.persona || "暂无" : null,
          $e = EA(te),
          tt = mH(),
          Xe = pH(tt.dateStr),
          ht = `你是艺术家「${I.stageName || I.realName}」的私信回复生成系统。

【生成优先级（必须严格遵循）】
1. 首要：艺人人设 —— 艺人回复必须 strictly 按艺人人设来，不得偏离
2. 其次：绑定鉴赏人人设 —— 当前发信者背景，辅助理解关系
3. 再次：经纪人人设 —— 如有经纪人，其发言必须符合经纪人人设
4. 最后：对话历史 —— 仅作上下文参考

【艺人人设】${te}

【绑定鉴赏人人设】（当前发信者）${Se}
${L ? `【经纪人人设】${Fe}` : ""}

重要设定：泡泡中每个粉丝理论上只能看到自己发出去的消息和艺人回复，看不到其他粉丝或用户发的消息。

${ve ? "【场景】艺人主动营业，无用户新消息。根据对话历史（最近50条）作为上下文，生成艺人主动发起的回复。" : ""}
根据对话历史（最近50条）生成：
1. **艺人回复**：3-10 句短句，每句单独成行。必须 strictly 依据【艺人人设】，不得偏离人设。严禁艺人回复主要围绕用户发言。艺人必须有自己的独立生活叙事（工作、日常、心情、分享），可以完全不回应或仅轻描淡写提及用户。根据用户与艺人关系（熟人/粉丝/嫂子等）端水。${$e ? "艺人母语非中文时，每句格式为：原文\\n---\\n中文翻译（外语在上，换行，虚线---，换行，中文在下）。" : ""}
2. **5-10 条粉丝评论**：粉丝不知道用户发了什么（他们看不到）。每个粉丝只能基于艺人刚发的回复、以及自己之前发过的内容来评论。${$e ? "粉丝评论可有中文有外语，含外语时格式：原文\\n---\\n中文。" : ""}
3. ${L ? `1 条经纪人发言：必须 strictly 符合【经纪人人设】，不得偏离。${$e ? "经纪人也用双语时格式：原文\\n---\\n中文。" : ""}` : "不需要经纪人有发言。"}

必须只返回一个 JSON 对象，不要有任何其他文字、markdown、解释或【】标记。
格式：{"artistReply":"短句1。\\n短句2。","fans":[{"name":"粉丝网名","text":"说的话"}],"managerMessage":"经纪人的话"}
只输出这一行 JSON。`,
          _t = `${`【当前时间】${tt.str}（${tt.hour}点）
【今日节日】${Xe || "今日无特殊节日"}

`}${
            $e
              ? `【双语模式】艺人人设为外国人/母语非中文时，艺人发言、经纪人发言、粉丝发言中含外语的句子格式：原文\\n---\\n中文翻译。艺人/粉丝气泡显示：外语在上，虚线，中文在下。经纪人气泡有翻译按钮可展开。

`
              : ""
          }对话历史：
${Ae.slice(-50)
  .map((Qe) =>
    Qe.sender === "user" || Qe.type === "user"
      ? `用户: ${Qe.text}`
      : Qe.sender === "idol" || Qe.type === "idol"
        ? `艺人: ${Qe.text}`
        : Qe.type === "idol_voice"
          ? `艺人: [语音]${Qe.transcription || Qe.voiceText || ""}`
          : Qe.sender === "fan"
            ? `粉丝${Qe.fanName}: ${Qe.text}`
            : Qe.type === "time" && Qe.fans
              ? Qe.fans.map((Ye) => `粉丝${Ye.name}: ${Ye.content || Ye.text}`)
                  .join(`
`)
              : Qe.sender === "manager" || Qe.type === "manager"
                ? `经纪人: ${Qe.text}`
                : "",
  )
  .filter(Boolean).join(`
`)}

${ve ? "艺人主动营业，请生成艺人回复、粉丝评论" : "请生成艺人回复、粉丝评论"}${L ? "、经纪人发言" : ""}。`,
          Ee = { id: I.id, name: I.stageName || I.realName, setting: te },
          fe = await w(
            [{ sender: "me", text: _t, timestamp: new Date().toISOString() }],
            Ee,
            "bubble_reply",
            {},
            [],
            [],
            [],
            !1,
            "",
            B || {},
          );
        if (!fe || typeof fe != "string") {
          (R("未获取到回复"), xe(!1));
          return;
        }
        const He = fe.replace(/```json?\s*|```/g, "").trim();
        if (He.startsWith("请先") || He.startsWith("抱歉")) {
          (R(He.slice(0, 50)), xe(!1));
          return;
        }
        let Ie = {};
        try {
          const Qe = He.match(/\{[\s\S]*\}/);
          Qe && (Ie = JSON.parse(Qe[0]));
        } catch {}
        const Ce = new Date().toISOString(),
          Re = [],
          De = new Date(Ce).toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          }),
          at = uH(Ce);
        let ft =
            (typeof Ie.artistReply == "string" && Ie.artistReply.trim()) ||
            (typeof Ie.artist_reply == "string" && Ie.artist_reply.trim()) ||
            (typeof Ie.reply == "string" && Ie.reply.trim()) ||
            "",
          vt = Array.isArray(Ie.fans)
            ? Ie.fans
                .map((Qe) => ({
                  name: g1(String(Qe.name || Qe.user || "").trim()),
                  content: ed(String(Qe.text || Qe.content || "").trim()),
                }))
                .filter((Qe) => Qe.content)
            : [],
          Oe =
            L && typeof Ie.managerMessage == "string"
              ? ed(Ie.managerMessage.trim())
              : "";
        if (He.includes("【粉丝评论】") || He.includes("【经纪人发言】")) {
          const Qe = bN(He, !!L);
          ((ft = Qe.artistText),
            (vt = Qe.fans.length > 0 ? Qe.fans : vt),
            (Oe = Qe.managerText || Oe));
        } else if (!ft && !vt.length && !Oe && He.length > 0) {
          const Qe = bN(He, !!L);
          ((ft = Qe.artistText), (vt = Qe.fans), (Oe = Qe.managerText));
        }
        if (ft) {
          const Qe = xH(ft);
          let Ye = 0;
          for (const Ze of Qe)
            if (Ze.type === "voice")
              (Re.push({
                id: `idol-voice-${Date.now()}-${Ye}`,
                type: "idol_voice",
                sender: "idol",
                voiceText: Ze.voiceText,
                transcription: Ze.transcription,
                ts: Ce,
                timestamp: De,
              }),
                Ye++);
            else if (Ze.type === "text" && Ze.text) {
              const Ue = Ze.text
                  .split(/\n+/)
                  .map((jt) => cp(jt.replace(/^[\s\|]+|[\s\|]+$/g, "").trim()))
                  .filter((jt) => jt.length > 0 && !jt.match(/^[\|\*]+$/)),
                me = [];
              for (let jt = 0; jt < Ue.length; jt++)
                Ue[jt] === "---" && jt > 0 && jt < Ue.length - 1
                  ? ((me[me.length - 1] = `${me[me.length - 1]}
---
${Ue[jt + 1]}`),
                    jt++)
                  : me.push(Ue[jt]);
              me.forEach((jt) => {
                (Re.push({
                  id: `idol-${Date.now()}-${Ye}`,
                  type: "idol",
                  sender: "idol",
                  text: jt,
                  ts: Ce,
                  timestamp: De,
                }),
                  Ye++);
              });
            }
        }
        if (
          (vt.length > 0 &&
            Re.push({
              id: `time-${Date.now()}`,
              type: "time",
              content: at,
              fans: vt.slice(0, 10),
              fansHidden: !0,
              ts: Ce,
            }),
          L &&
            Oe &&
            Re.push({
              id: `mgr-${Date.now()}`,
              type: "manager",
              sender: "manager",
              text: Oe,
              managerName: L.name || "经纪人",
              ts: Ce,
            }),
          Re.length > 0)
        ) {
          R("");
          const Qe = pe.current,
            Ye = Qe.length >= Ae.length ? Qe : Ae;
          (await re([...Ye, ...Re]),
            ve &&
              Ve &&
              (await N(t, Ve),
              ee({
                avatar:
                  I.avatar ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${I.id}`,
                name: I.stageName || I.realName,
                message: "上线了",
              })));
        } else R("回复格式异常，请重试");
      } catch (te) {
        R((te == null ? void 0 : te.message) || "生成失败，请重试");
      } finally {
        xe(!1);
      }
    };
  ue.current = ge;
  const J = async () => {
      const ve = $.trim().slice(0, mx);
      if (!ve || z <= 0) return;
      const Ve = {
          id: `m-${Date.now()}`,
          sender: "user",
          type: "user",
          text: ve,
          ts: new Date().toISOString(),
          status: "delivered",
        },
        Ae = [...F, Ve];
      (await re(Ae), P(""), await x(t), await h(t));
      const [te, Se] = await Promise.all([m(t), g(t)]);
      (O(te), K(Se));
    },
    G = () => {
      je || !w || !(_ != null && _.key) || (R(""), ge());
    },
    we = async (ve) => {
      (X(ve), await p(t, ve));
      const Ve = await m(t);
      O(Ve);
    },
    Q = async (ve) => {
      (await v(t, ve), V(ve));
    };
  return I
    ? o(t)
      ? ne
        ? e.jsx(cH, {
            idolId: t,
            onClose: () => le(!1),
            settings: ie,
            onSave: we,
            onBgChange: Q,
            subscription: c(t),
            ttsConfig: E,
            playTTS: C,
            unlockAudio: S,
          })
        : e.jsxs("div", {
            className:
              "bubble-app w-full h-full bg-white flex flex-col relative overflow-hidden",
            children: [
              e.jsx(dH, { notification: oe, onClose: () => ee(null) }),
              e.jsxs("header", {
                className:
                  "h-28 px-10 flex items-end justify-between pb-6 bg-white border-b border-slate-100 z-20 shrink-0",
                style: {
                  paddingTop: "calc(45px + env(safe-area-inset-top, 0px))",
                },
                children: [
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "mb-1 opacity-80 hover:opacity-100 transition-opacity",
                    children: e.jsx(Xr, {
                      className: "w-5 h-5",
                      strokeWidth: 1.5,
                    }),
                  }),
                  e.jsxs("div", {
                    className: "text-center",
                    children: [
                      e.jsx("h2", {
                        className:
                          "text-lg font-bold tracking-widest uppercase text-[var(--ink-black)]",
                        children: I.stageName || I.realName,
                      }),
                      e.jsxs("p", {
                        className:
                          "text-[7px] font-black text-slate-300 uppercase tracking-[0.5em] mt-1",
                        children: ["已连续发信 ", Z, " 天"],
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => le(!0),
                    className: "mb-2 group",
                    "aria-label": "设置",
                    children: e.jsxs("div", {
                      className: "custom-settings-icon w-6",
                      children: [
                        e.jsx("div", { className: "settings-line w-full" }),
                        e.jsx("div", {
                          className:
                            "settings-line w-2/3 group-hover:w-full transition-all",
                        }),
                        e.jsx("div", {
                          className:
                            "settings-line w-1/3 group-hover:w-full transition-all",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("main", {
                ref: Y,
                className:
                  "flex-1 overflow-y-auto p-8 hide-scrollbar bg-[#FAF9F6] bg-cover bg-center relative",
                style: q ? { backgroundImage: `url(${q})` } : {},
                children: [
                  q &&
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-white/40 pointer-events-none z-0",
                    }),
                  e.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      F.length === 0
                        ? e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center py-20 text-slate-400 text-[10px] uppercase tracking-[0.4em]",
                            children: [
                              e.jsx("p", { children: "暂无消息" }),
                              e.jsxs("p", {
                                className: "text-[9px] mt-2",
                                children: [
                                  "每天可发 ",
                                  A,
                                  " 条 · 每条最多 ",
                                  mx,
                                  " 字",
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-[9px] mt-1",
                                children: "发送按钮发送 · 灵感按钮收取艺人回复",
                              }),
                            ],
                          })
                        : F.map((ve, Ve) => {
                            const Ae =
                                ve.sender === "idol" ||
                                ve.type === "idol" ||
                                ve.type === "idol_voice",
                              te = ve.sender === "user" || ve.type === "user",
                              Se = F[Ve + 1],
                              Fe =
                                Se &&
                                (Se.sender === "idol" || Se.type === "idol"),
                              $e =
                                Se &&
                                (Se.sender === "user" || Se.type === "user"),
                              tt = (Ae && Fe) || (te && $e) ? "mb-1" : "mb-10";
                            return e.jsx(
                              "div",
                              {
                                className: tt,
                                children: e.jsx(gH, {
                                  message: ve,
                                  messageIndex: Ve,
                                  allMessages: F,
                                  idol: I,
                                  manager: L,
                                  userPersona: B,
                                  onToggleFans: he,
                                  playTTS: C,
                                  stopTTS: M,
                                  ttsConfig: E,
                                  isPlaying: j,
                                  playingMessageId: T,
                                  chatSettings: ie,
                                  unlockAudio: S,
                                }),
                              },
                              ve.id,
                            );
                          }),
                      ye &&
                        e.jsx("div", {
                          className: "flex justify-center py-2",
                          children: e.jsx("p", {
                            className: "text-xs text-amber-600",
                            children: ye,
                          }),
                        }),
                      je &&
                        e.jsx("div", {
                          className: "px-10 py-3 bg-[#FAF9F6]",
                          children: e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[8px] font-bold uppercase tracking-widest opacity-30",
                                children: "Incoming",
                              }),
                              e.jsxs("div", {
                                className: "flex space-x-1",
                                children: [
                                  e.jsx("div", { className: "typing-dot" }),
                                  e.jsx("div", { className: "typing-dot" }),
                                  e.jsx("div", { className: "typing-dot" }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      e.jsx("div", { ref: H }),
                    ],
                  }),
                ],
              }),
              e.jsxs("footer", {
                className:
                  "p-8 bg-white border-t border-slate-50 flex items-center space-x-6 z-20 shrink-0",
                children: [
                  e.jsx("input", {
                    type: "search",
                    autoComplete: "off",
                    value: $,
                    onChange: (ve) => P(ve.target.value.slice(0, mx)),
                    onFocus: Te,
                    onClick: Te,
                    onBlur: () => {
                      U.current = !1;
                    },
                    placeholder: `Input your thoughts... 剩余 ${z >= k ? "∞" : z} 条`,
                    className:
                      "flex-1 text-sm outline-none placeholder:text-slate-300 bg-transparent font-light text-[var(--ink-black)]",
                    maxLength: mx,
                    onKeyDown: (ve) => {
                      ve.key === "Enter" && (ve.preventDefault(), J());
                    },
                  }),
                  e.jsxs("div", {
                    className: "flex items-center space-x-5",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: J,
                        disabled: z <= 0 || !$.trim(),
                        className:
                          "text-black hover:opacity-60 disabled:opacity-40 transition-opacity",
                        title: "发送",
                        children: e.jsx(wl, {
                          className: "w-6 h-6",
                          strokeWidth: 1.5,
                        }),
                      }),
                      (() => {
                        const Ve = (
                            Array.isArray(
                              ie == null ? void 0 : ie.replyTimeSlots,
                            ) && ie.replyTimeSlots.length > 0
                              ? ie.replyTimeSlots
                              : [{ start: 16, end: 20 }]
                          )
                            .map((te) => `${te.start}–${te.end}`)
                            .join("、"),
                          Ae = !!(ie != null && ie.instantReply);
                        return e.jsx("button", {
                          type: "button",
                          onClick: G,
                          disabled: je || !w || !(_ != null && _.key) || !Ae,
                          className:
                            "w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-black transition-all",
                          title:
                            !Ae && ie != null && ie.useReplyTime
                              ? `时间段回复已开启，艺人将在 ${Ve} 主动发消息`
                              : "接收艺人消息",
                          children: e.jsx(Xn, {
                            className: "w-4 h-4",
                            strokeWidth: 1.5,
                          }),
                        });
                      })(),
                    ],
                  }),
                ],
              }),
            ],
          })
      : e.jsxs("div", {
          className: "bubble-app flex flex-col h-full bg-white",
          children: [
            e.jsxs("header", {
              className:
                "h-28 px-10 flex items-end justify-between pb-6 bg-white border-b border-slate-100 shrink-0",
              style: {
                paddingTop: "calc(45px + env(safe-area-inset-top, 0px))",
              },
              children: [
                e.jsx("button", {
                  onClick: s,
                  className: "mb-1 opacity-80 hover:opacity-100",
                  children: e.jsx(Xr, {
                    className: "w-5 h-5",
                    strokeWidth: 1.5,
                  }),
                }),
                e.jsx("p", {
                  className: "serif text-xl font-bold tracking-widest",
                  children: "未订阅",
                }),
                e.jsx("div", { className: "w-10" }),
              ],
            }),
            e.jsx("div", {
              className:
                "flex-1 flex items-center justify-center text-slate-400 text-[10px] uppercase tracking-[0.4em]",
              children: "请先订阅该艺术家频道",
            }),
          ],
        })
    : null;
};
function gH({
  message: t,
  messageIndex: s,
  allMessages: n,
  idol: a,
  manager: r,
  userPersona: i,
  onToggleFans: o,
  playTTS: c,
  stopTTS: d,
  ttsConfig: u,
  isPlaying: f,
  playingMessageId: p,
  chatSettings: m,
  unlockAudio: h,
}) {
  var C, M, E, S, j, T, I, L, B;
  const { m: g, idol: x, manager: y } = { m: t, idol: a, manager: r },
    [v, b] = l.useState({}),
    [N, w] = l.useState({});
  if (!g) return null;
  const _ = g.sender === "idol" || g.type === "idol" || g.type === "idol_voice";
  g.sender === "user" || g.type;
  let A = !1,
    k = !1;
  if (_ && Array.isArray(n)) {
    let F = s;
    const D = (P) =>
      (P == null ? void 0 : P.sender) === "idol" ||
      (P == null ? void 0 : P.type) === "idol" ||
      (P == null ? void 0 : P.type) === "idol_voice";
    for (; F > 0 && D(n[F - 1]); ) F--;
    let $ = s;
    for (; $ < n.length - 1 && D(n[$ + 1]); ) $++;
    ((A = s === F), (k = s === $));
  }
  if (g.type === "time")
    return e.jsxs("div", {
      className: "flex flex-col items-center my-4",
      children: [
        e.jsxs("button", {
          type: "button",
          onClick: () => (o == null ? void 0 : o(g.id)),
          className:
            "text-[8px] font-bold uppercase tracking-[0.5em] text-slate-300 px-4 py-2 border border-slate-100 rounded-sm hover:bg-slate-50 transition-colors",
          children: [
            g.content,
            " / ",
            g.fansHidden ? "View Comments" : "Collapse",
          ],
        }),
        !g.fansHidden &&
          ((C = g.fans) == null ? void 0 : C.length) > 0 &&
          e.jsx("div", {
            className: "w-full mt-8 space-y-4",
            children: g.fans.map((F, D) => {
              const $ = F.content || F.text || "",
                P = Sf($),
                z = P.translation
                  ? e.jsxs("div", {
                      className: "block w-full",
                      children: [
                        e.jsx("div", { children: P.original }),
                        e.jsx("div", {
                          className:
                            "block border-b border-dashed border-slate-300 my-1",
                          style: { width: "100%" },
                        }),
                        e.jsx("div", {
                          className: "text-slate-500 text-[9px]",
                          children: P.translation,
                        }),
                      ],
                    })
                  : $;
              return e.jsxs(
                "div",
                {
                  className: "flex items-start space-x-3 opacity-60",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-7 h-7 rounded-full shrink-0 bg-slate-200 bg-cover bg-center",
                      style: F.avatar
                        ? { backgroundImage: `url(${F.avatar})` }
                        : {},
                    }),
                    e.jsxs("div", {
                      className: "bubble-fan p-3 flex-1 text-[10px]",
                      children: [
                        e.jsx("span", {
                          className:
                            "font-bold block text-[9px] mb-1 uppercase tracking-tighter text-slate-400",
                          children: F.name || "粉丝",
                        }),
                        z,
                      ],
                    }),
                  ],
                },
                D,
              );
            }),
          }),
      ],
    });
  if (g.sender === "user" || g.type === "user") {
    const F = g.ts || new Date().toISOString(),
      D = new Date(F).toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      }),
      $ =
        (i == null ? void 0 : i.name) ||
        (i == null ? void 0 : i.nickname) ||
        "我";
    let P = s;
    for (
      ;
      P > 0 &&
      (((M = n[P - 1]) == null ? void 0 : M.sender) === "user" ||
        ((E = n[P - 1]) == null ? void 0 : E.type) === "user");
    )
      P--;
    let z = s;
    for (
      ;
      z < n.length - 1 &&
      (((S = n[z + 1]) == null ? void 0 : S.sender) === "user" ||
        ((j = n[z + 1]) == null ? void 0 : j.type) === "user");
    )
      z++;
    const O = s === P,
      Z = s === z,
      q =
        z - P + 1 === 1 || O
          ? "bubble-user bubble-user-first"
          : Z
            ? "bubble-user bubble-user-last"
            : "bubble-user bubble-user-middle";
    return e.jsx("div", {
      className: "flex justify-end",
      children: e.jsxs("div", {
        className: "flex flex-col items-end gap-0.5 max-w-[90%]",
        children: [
          e.jsx("div", {
            className: `${q} text-[11px] leading-relaxed text-white`,
            children: g.text,
          }),
          Z &&
            e.jsxs("p", {
              className:
                "text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 mr-0.5",
              children: [D, " // by ", $],
            }),
        ],
      }),
    });
  }
  if (g.type === "idol_voice") {
    const F = g.voiceText || "",
      D = g.translation || g.transcription,
      $ =
        (m == null ? void 0 : m.enableTTS) &&
        u &&
        (u.provider === "minimax"
          ? ((T = u.minimax) == null ? void 0 : T.apiKey) &&
            ((m == null ? void 0 : m.minimaxGroupId) ||
              ((I = u.minimax) == null ? void 0 : I.groupId))
          : ((L = u.elevenlabs) == null ? void 0 : L.key) &&
            ((m == null ? void 0 : m.voiceId) ||
              ((B = u.elevenlabs) == null ? void 0 : B.voiceId))),
      P = f && p === g.id,
      z = N[g.id],
      O = () => w((Z) => ({ ...Z, [g.id]: !Z[g.id] }));
    return e.jsxs("div", {
      className: "flex items-start space-x-3 max-w-[90%]",
      children: [
        A
          ? e.jsx("img", {
              src:
                (x == null ? void 0 : x.avatar) ||
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${x == null ? void 0 : x.id}`,
              alt: "",
              className: "w-10 h-14 object-cover shrink-0 shadow-lg mt-1",
            })
          : e.jsx("div", { className: "w-10 shrink-0" }),
        e.jsxs("div", {
          className: "flex flex-col gap-0.5 min-w-0 max-w-max",
          children: [
            e.jsxs("div", {
              onClick: O,
              className:
                "bubble-idol bubble-idol-first bubble-idol-last bubble-voice-bar gap-2 py-2 px-3 cursor-pointer hover:opacity-90 w-fit",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: async (Z) => {
                    var K;
                    if ((Z.stopPropagation(), P)) {
                      d == null || d();
                      return;
                    }
                    if (F && c) {
                      if (!$) {
                        alert(
                          "请先在频道设置中开启语音引擎并配置 Group ID、Voice ID",
                        );
                        return;
                      }
                      h == null || h();
                      try {
                        await c(F, {
                          voiceId: (m == null ? void 0 : m.voiceId) || void 0,
                          modelId: m == null ? void 0 : m.modelId,
                          stability: m == null ? void 0 : m.stability,
                          similarityBoost:
                            m == null ? void 0 : m.similarityBoost,
                          groupId:
                            (m == null ? void 0 : m.minimaxGroupId) ||
                            ((K = u == null ? void 0 : u.minimax) == null
                              ? void 0
                              : K.groupId),
                          minimaxModel: m == null ? void 0 : m.minimaxModel,
                          saveId: g.id,
                        });
                      } catch {
                        alert("语音播放失败，请检查 API 配置");
                      }
                    }
                  },
                  className:
                    "w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 shrink-0",
                  children: P
                    ? e.jsx(Sl, { size: 14, strokeWidth: 2 })
                    : e.jsx(Ji, { size: 14, strokeWidth: 1.5 }),
                }),
                e.jsx("div", {
                  className: "flex gap-0.5 items-center h-4 shrink-0",
                  children: [
                    ...Array(
                      Math.min(12, Math.max(4, Math.ceil(F.length / 3))),
                    ),
                  ].map((Z, K) =>
                    e.jsx(
                      "div",
                      {
                        className: `w-0.5 rounded-full bg-slate-600 ${P ? "animate-pulse" : ""}`,
                        style: {
                          height: `${Math.max(30, 40 + Math.sin(K * 0.7) * 30)}%`,
                          animationDelay: `${K * 0.05}s`,
                        },
                      },
                      K,
                    ),
                  ),
                }),
                e.jsxs("span", {
                  className: "text-[10px] font-mono text-slate-500 shrink-0",
                  children: [
                    Math.min(60, Math.max(1, Math.ceil(F.length / 5))),
                    '"',
                  ],
                }),
              ],
            }),
            z &&
              e.jsx("div", {
                className:
                  "bubble-idol bubble-idol-middle mt-0.5 px-3 py-2 text-[11px] text-slate-600 leading-relaxed break-words max-w-[280px] w-fit",
                children: D || F,
              }),
            k &&
              e.jsxs("p", {
                className:
                  "text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 ml-0.5",
                children: [
                  g.timestamp || "",
                  " // SIGNED BY ",
                  (x == null ? void 0 : x.stageName) ||
                    (x == null ? void 0 : x.realName) ||
                    "Artist",
                ],
              }),
          ],
        }),
      ],
    });
  }
  if (g.sender === "idol" || g.type === "idol") {
    const F = g.text || "",
      P =
        Sf(F).translation &&
        F.includes(`
---
`)
          ? [F]
          : F.split(/\n+/)
              .map((q) => cp(q.trim()))
              .filter((q) => q.length > 0 && !q.match(/^[\|\*]+$/)),
      z =
        g.timestamp ||
        (g.ts
          ? new Date(g.ts).toLocaleTimeString("zh-CN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1,
            })
          : "NOW"),
      O =
        (x == null ? void 0 : x.stageName) ||
        (x == null ? void 0 : x.realName) ||
        "Artist",
      Z = P.length,
      K = EA(x == null ? void 0 : x.persona);
    return e.jsxs("div", {
      className: "flex items-start space-x-3 max-w-[90%]",
      children: [
        A
          ? e.jsx("img", {
              src:
                (x == null ? void 0 : x.avatar) ||
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${x == null ? void 0 : x.id}`,
              alt: "",
              className: "w-10 h-14 object-cover shrink-0 shadow-lg mt-1",
            })
          : e.jsx("div", { className: "w-10 shrink-0" }),
        e.jsxs("div", {
          className: "flex flex-col gap-0.5 min-w-0",
          children: [
            P.map((q, V) => {
              const ne = V === 0,
                le = V === Z - 1,
                ie = V === 1,
                X =
                  Z === 1 || ne
                    ? "bubble-idol bubble-idol-first"
                    : le
                      ? "bubble-idol bubble-idol-last"
                      : "bubble-idol bubble-idol-middle",
                je = ie ? " bubble-idol-second" : "",
                xe = K ? Sf(q) : null,
                ye =
                  xe && xe.translation
                    ? e.jsxs("div", {
                        className:
                          "text-[11px] leading-relaxed text-slate-800 block w-full",
                        children: [
                          e.jsx("div", { children: xe.original }),
                          e.jsx("div", {
                            className:
                              "block border-b border-dashed border-slate-300 my-1",
                            style: { width: "100%" },
                          }),
                          e.jsx("div", {
                            className: "text-slate-600 text-[10px]",
                            children: xe.translation,
                          }),
                        ],
                      })
                    : q;
              return e.jsx(
                "div",
                {
                  children: e.jsx("div", {
                    className: `${X}${je} ${xe != null && xe.translation ? "" : "text-[11px] leading-relaxed text-slate-800"}`,
                    children: ye,
                  }),
                },
                `${g.id}-${V}`,
              );
            }),
            k &&
              e.jsxs("p", {
                className:
                  "text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1.5 ml-0.5",
                children: [z, " // SIGNED BY ", O],
              }),
          ],
        }),
      ],
    });
  }
  if (g.sender === "fan") {
    const F = g.content || g.text || "",
      D = Sf(F),
      $ = D.translation
        ? e.jsxs("div", {
            className: "block w-full",
            children: [
              e.jsx("div", { children: D.original }),
              e.jsx("div", {
                className: "block border-b border-dashed border-slate-300 my-1",
                style: { width: "100%" },
              }),
              e.jsx("div", {
                className: "text-slate-500 text-[9px]",
                children: D.translation,
              }),
            ],
          })
        : F;
    return e.jsxs("div", {
      className: "flex items-start space-x-3 opacity-60 animate-msg",
      children: [
        e.jsx("div", {
          className: "w-7 h-7 rounded-full shrink-0 bg-slate-200",
        }),
        e.jsxs("div", {
          className: "bubble-fan p-3 flex-1 text-[10px]",
          children: [
            e.jsx("span", {
              className:
                "font-bold block text-[9px] mb-1 uppercase tracking-tighter text-slate-400",
              children: g.fanName || "粉丝",
            }),
            $,
          ],
        }),
      ],
    });
  }
  if (g.sender === "manager" || g.type === "manager") {
    const F = (y == null ? void 0 : y.name) || g.managerName || "经纪人",
      D = Sf(g.text || ""),
      $ = v[g.id],
      P = !!D.translation,
      z =
        P && $
          ? e.jsxs("div", {
              className: "block w-full",
              children: [
                e.jsx("div", { children: D.original }),
                e.jsx("div", {
                  className:
                    "block border-b border-dashed border-slate-300 my-1",
                  style: { width: "100%" },
                }),
                e.jsx("div", {
                  className: "text-slate-600 text-[11px]",
                  children: D.translation,
                }),
              ],
            })
          : P
            ? D.original
            : g.text;
    return e.jsx("div", {
      className: "flex justify-start px-2",
      children: e.jsxs("div", {
        className: "bubble-manager max-w-[90%]",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-2",
            children: [
              e.jsxs("span", {
                className: "text-[12px] font-bold",
                children: [F, " Note"],
              }),
              P &&
                e.jsx("button", {
                  type: "button",
                  onClick: () => b((O) => ({ ...O, [g.id]: !O[g.id] })),
                  className:
                    "text-[9px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 border-b border-slate-300",
                  children: $ ? "收起" : "翻译",
                }),
            ],
          }),
          e.jsx("div", {
            className: "opacity-80 leading-relaxed font-light",
            children: z,
          }),
        ],
      }),
    });
  }
  return null;
}
const bH = { chat: "来信", idols: "艺廊", my: "档案" },
  yH = ({ onClose: t }) => {
    const { loaded: s } = Nd(),
      [n, a] = l.useState("chat"),
      [r, i] = l.useState(!1),
      [o, c] = l.useState(null),
      [d, u] = l.useState(null),
      f = [
        { id: "chat", label: "阅览" },
        { id: "idols", label: "艺廊" },
        { id: "my", label: "私藏" },
      ];
    return s
      ? d
        ? e.jsx(hH, { idolId: d, onBack: () => u(null) })
        : e.jsxs("div", {
            className:
              "bubble-app paper-texture h-full flex flex-col bg-[var(--paper-white)] relative overflow-hidden",
            children: [
              e.jsx("header", {
                className:
                  "pt-[96px] pb-6 px-10 bg-transparent z-30 flex-shrink-0",
                children: e.jsxs("div", {
                  className: "flex justify-between items-start",
                  children: [
                    e.jsxs("button", {
                      onClick: t,
                      className: "space-y-1 flex-1 min-w-0 text-left",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400",
                          children: "Vol. 2024 Edition",
                        }),
                        e.jsx("h1", {
                          className:
                            "font-serif text-4xl font-bold tracking-tighter text-[var(--ink-black)]",
                          children: bH[n],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex items-center gap-2 pt-2",
                      children:
                        n === "idols" &&
                        e.jsx("button", {
                          onClick: () => i(!0),
                          className:
                            "p-2 text-slate-400 hover:text-[var(--ink-black)] transition-colors",
                          "aria-label": "添加艺术家",
                          children: e.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: e.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 1.5,
                              d: "M12 4v16m8-8H4",
                            }),
                          }),
                        }),
                    }),
                  ],
                }),
              }),
              e.jsxs("main", {
                className: "flex-1 overflow-y-auto hide-scrollbar min-h-0",
                children: [
                  n === "chat" && e.jsx(nH, { onSelectIdol: u }),
                  n === "idols" &&
                    e.jsx(rH, {
                      onAddIdol: () => i(!0),
                      onEditIdol: (p) => c(p),
                    }),
                  n === "my" && e.jsx(iH, {}),
                ],
              }),
              e.jsx("nav", {
                className:
                  "h-24 bg-white/80 backdrop-blur-md flex justify-around items-center px-12 z-40 border-t border-slate-100 flex-shrink-0",
                children: f.map((p) =>
                  e.jsx(
                    "button",
                    {
                      onClick: () => a(p.id),
                      className: `nav-link ${n === p.id ? "active" : "inactive"}`,
                      children: e.jsx("span", {
                        className:
                          "text-[10px] font-bold tracking-[0.2em] text-[var(--ink-black)]",
                        children: p.label,
                      }),
                    },
                    p.id,
                  ),
                ),
              }),
              (r || o) &&
                e.jsx(oH, {
                  initial: o,
                  onClose: () => {
                    (i(!1), c(null));
                  },
                  onDone: () => {
                    (i(!1), c(null));
                  },
                }),
            ],
          })
      : e.jsx("div", {
          className:
            "bubble-app h-full flex items-center justify-center bg-[var(--paper-white)] text-slate-400",
          children: e.jsx("p", {
            className: "text-[10px] font-bold uppercase tracking-[0.4em]",
            children: "加载中...",
          }),
        });
  },
  vH = ({ onClose: t }) => e.jsx(sH, { children: e.jsx(yH, { onClose: t }) }),
  wH = [];
function jH(t) {
  const s = String(t || "").trim();
  if (!s) return "";
  const n = [
    /(?:^|\n)\s*(?:名字|姓名|昵称|称呼)\s*[：:]\s*([^\n，。,；;]{1,20})/,
    /我叫\s*([^\s，。,；;]{1,20})/,
  ];
  for (const a of n) {
    const r = s.match(a);
    if (r != null && r[1]) return String(r[1]).trim();
  }
  return "";
}
function bb(t) {
  const s = t == null ? void 0 : t.videoCallSegments;
  return !Array.isArray(s) || s.length === 0
    ? !1
    : s.some((n) => n.type === "speech" || !!n.translation);
}
function yb({
  msg: t,
  variant: s,
  dialogueViewByMsgId: n,
  toggleMsgDialogueView: a,
}) {
  const r = t.videoCallSegments || [],
    i = s === "single",
    o = (f) => f.stopPropagation(),
    c = String(t.id);
  let d = 0;
  const u = r.map((f, p) => {
    if (f.type === "narration") {
      const w = String(f.text || "").trim();
      if (!w && !f.translation) return null;
      const _ = `${c}:n:${p}`,
        A = !!f.translation,
        k = n[_] === "zh",
        C = A && k ? f.translation : w;
      return i
        ? e.jsx(
            "p",
            {
              className:
                "text-white/85 text-sm font-normal leading-relaxed drop-shadow-sm",
              children: A
                ? e.jsx("button", {
                    type: "button",
                    title: "点击在原文与译文间切换",
                    onMouseDown: o,
                    onTouchStart: o,
                    onClick: (M) => {
                      (M.stopPropagation(), a(_));
                    },
                    className:
                      "text-white/85 text-sm font-normal leading-relaxed drop-shadow-sm bg-transparent border-0 p-0 text-left cursor-pointer w-full active:opacity-85",
                    children: C,
                  })
                : w,
            },
            p,
          )
        : e.jsx(
            "span",
            {
              className: "font-sans font-light text-gray-500",
              children: A
                ? e.jsx("button", {
                    type: "button",
                    title: "点击在原文与译文间切换",
                    onMouseDown: o,
                    onTouchStart: o,
                    onClick: (M) => {
                      (M.stopPropagation(), a(_));
                    },
                    className:
                      "inline bg-transparent border-0 p-0 cursor-pointer text-left font-sans font-light text-gray-500 active:opacity-85",
                    children: C,
                  })
                : e.jsxs(e.Fragment, { children: [w, " "] }),
            },
            p,
          );
    }
    const m = d === 0;
    d += 1;
    const h = f.translation && String(f.translation).trim(),
      g = m && t.dialogueTranslation && String(t.dialogueTranslation).trim(),
      x = h || g || "",
      y = `${c}:${p}`,
      v = !!x,
      b = n[y] === "zh",
      N = v && b ? x : f.text;
    return i
      ? e.jsx(
          "p",
          {
            className:
              "text-white text-base font-medium leading-relaxed drop-shadow-sm",
            children: v
              ? e.jsx("button", {
                  type: "button",
                  title: "点击在原文与译文间切换",
                  onMouseDown: o,
                  onTouchStart: o,
                  onClick: (w) => {
                    (w.stopPropagation(), a(y));
                  },
                  className:
                    "text-white text-base font-medium leading-relaxed drop-shadow-sm bg-transparent border-0 p-0 text-left cursor-pointer w-full active:opacity-85",
                  children: `"${N}"`,
                })
              : e.jsx("span", { children: `"${f.text}"` }),
          },
          p,
        )
      : e.jsx(
          "span",
          {
            className: "inline font-serif font-medium text-gray-800",
            children: v
              ? e.jsx("button", {
                  type: "button",
                  title: "点击在原文与译文间切换",
                  onMouseDown: o,
                  onTouchStart: o,
                  onClick: (w) => {
                    (w.stopPropagation(), a(y));
                  },
                  className:
                    "inline bg-transparent border-0 p-0 cursor-pointer text-left font-serif font-medium text-gray-800 active:opacity-85",
                  children: `"${N}"`,
                })
              : e.jsx("span", { children: `"${f.text}"` }),
          },
          p,
        );
  });
  return i
    ? e.jsx("div", {
        className: "flex flex-col gap-2 max-w-full min-w-0",
        children: u,
      })
    : e.jsxs("p", {
        className: `
        text-[13px] leading-relaxed tracking-wide text-justify
        font-serif font-medium text-gray-800
      `,
        children: [
          e.jsx(vu, {
            className: "inline w-3 h-3 mr-1 text-gray-300 relative -top-0.5",
          }),
          u,
        ],
      });
}
const NH = () => {
    var vt, Oe, Qe, Ye, Ze;
    const {
        callState: t,
        contacts: s,
        chats: n,
        sendMessage: a,
        triggerAiReply: r,
        endVideoCall: i,
        addMemberToVideoCall: o,
        rejectVideoCall: c,
        acceptVideoCall: d,
        toggleMinimizeCall: u,
        user: f,
        deleteMessages: p,
        unlockAudio: m,
        deleteCallMessage: h,
        appendVideoCallEcho: g,
        consumePlaybackQueue: x,
        sendSingleVideoCallMessage: y,
        regenerateSingleVideoCallReply: v,
        reopenLastSingleVideoCallUserMessageForEdit: b,
        reopenLastGroupVideoCallUserMessageForEdit: N,
        regenerateGroupVideoCallRound: w,
        groupReplyInProgress: _,
      } = vn(),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(!1),
      [E, S] = l.useState(!1),
      [j, T] = l.useState(""),
      [I, L] = l.useState(0),
      [B, F] = l.useState(!1),
      [D, $] = l.useState({ x: 20, y: 60 }),
      [P, z] = l.useState(!1),
      [O, Z] = l.useState(null),
      [K, q] = l.useState(null),
      [V, ne] = l.useState(null),
      [le, ie] = l.useState(!1),
      [X, je] = l.useState({}),
      [xe, ye] = l.useState("native"),
      [R, oe] = l.useState(0),
      ee = l.useRef({ x: 0, y: 0 }),
      H = l.useRef(null),
      Y = l.useRef(null),
      U = l.useRef(null),
      ce = l.useRef(null),
      pe = l.useRef(t),
      se = l.useRef(null),
      Te = l.useRef(null);
    l.useEffect(() => {
      pe.current = t;
    }, [t]);
    const ke = (Ue) => {
      const me = String(Ue);
      je((jt) => ({ ...jt, [me]: jt[me] === "zh" ? "native" : "zh" }));
    };
    if (!t) return null;
    const W = t.isGroup,
      ue = n.find((Ue) => Ue.id === t.chatId),
      re = W ? null : s.find((Ue) => Ue.id === t.contactId);
    (l.useEffect(() => {
      (!W || t.status !== "connected") && q(null);
    }, [W, t.status]),
      l.useEffect(() => {
        if (!W || t.status !== "outgoing") {
          oe(0);
          return;
        }
        oe(0);
        const Ue = setInterval(() => oe((me) => me + 1), 1e3);
        return () => clearInterval(Ue);
      }, [W, t.status]));
    const he = t.rejectedMembers || [],
      ge =
        W && ue
          ? ue.memberIds
              .filter((Ue) => !he.includes(Ue))
              .map((Ue) => s.find((me) => me.id === Ue))
              .filter(Boolean)
          : [],
      J = t.currentMessages ?? [],
      G = J.length > 0 ? J[J.length - 1] : null,
      we =
        t.status === "connected" &&
        !W &&
        (G == null ? void 0 : G.sender) === "them" &&
        !(t != null && t.isTyping);
    let Q = null;
    for (let Ue = J.length - 1; Ue >= 0; Ue--) {
      const me = J[Ue];
      if (
        (me == null ? void 0 : me.sender) === "me" &&
        (me == null ? void 0 : me.type) !== "system"
      ) {
        Q = me;
        break;
      }
    }
    const ve =
        t.status === "connected" && !W && !!Q && !(t != null && t.isTyping),
      Ve =
        W &&
        t.status === "connected" &&
        !!Q &&
        !!ue &&
        !ue.isTyping &&
        !(_ && (vt = _.has) != null && vt.call(_, ue.id));
    (l.useEffect(() => {
      t.status === "connected" &&
        $({ x: Math.max(20, window.innerWidth - 132), y: 60 });
    }, [t.status]),
      l.useEffect(() => {
        let Ue;
        if (t.status === "connected") {
          const me = Math.floor((Date.now() - t.startTime) / 1e3);
          (L(me),
            (Ue = setInterval(() => {
              L((jt) => jt + 1);
            }, 1e3)));
        } else L(0);
        return () => clearInterval(Ue);
      }, [t.status, t.startTime]),
      l.useEffect(() => {
        H.current &&
          H.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }, [
        ue == null ? void 0 : ue.messages,
        ue == null ? void 0 : ue.isTyping,
        J,
      ]),
      l.useEffect(
        () => () => {
          (ce.current && clearTimeout(ce.current),
            se.current && clearTimeout(se.current));
        },
        [],
      ));
    const Ae = t.playbackQueue ?? wH,
      te = l.useRef(null);
    (l.useEffect(() => {
      if (
        !W ||
        t.status !== "connected" ||
        !(ue != null && ue.id) ||
        K ||
        Ae.length === 0
      )
        return;
      const Ue = setTimeout(() => {
        const me = x(ue.id);
        if (!me) return;
        const jt = s.find((nt) => nt.id === me.contactId),
          Gt = jt ? tt(jt) : "成员",
          Pt =
            (jt == null ? void 0 : jt.avatar) ||
            "https://api.dicebear.com/7.x/notionists/svg?seed=" +
              (me.contactId || ""),
          Wt = me.text || "",
          ct = gl(Wt),
          Kt = me.type === "speech" ? pl(Wt) : { dialogueTranslation: "" },
          fs = {
            id: Date.now(),
            user: Gt,
            avatar: Pt,
            type: me.type === "action" ? "action" : "speech",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
            text: gc(Wt),
            dialogueTranslation:
              me.type === "speech" ? Kt.dialogueTranslation : "",
            parsed: ct,
            echoRawText: Wt,
            isGenerating: !0,
            contactId: me.contactId,
          };
        ((te.current = fs), q(fs), ie(!0));
        const gt = setTimeout(() => {
            (ie(!1), q((nt) => (nt ? { ...nt, isGenerating: !1 } : null)));
          }, 1200),
          ae = setTimeout(() => {
            var It, Xt;
            const nt = te.current;
            if (nt) {
              const bs = String(nt.echoRawText ?? nt.text ?? "").trim();
              if (nt.type === "speech") {
                const ss = gl(bs);
                g(ue.id, {
                  id: `echo-${nt.id}`,
                  text: gc(bs),
                  type: "text",
                  sender: "them",
                  contactId: nt.contactId,
                  timestamp: new Date().toISOString(),
                  ...(ss.narrator &&
                    String(ss.narrator).trim() && { narrator: ss.narrator }),
                  ...(ss.dialogue &&
                    String(ss.dialogue).trim() && { dialogue: ss.dialogue }),
                  ...(ss.dialogueTranslation && {
                    dialogueTranslation: ss.dialogueTranslation,
                  }),
                  ...((It = ss.videoCallSegments) != null && It.length
                    ? { videoCallSegments: ss.videoCallSegments }
                    : {}),
                });
              } else {
                const ss = gl(bs);
                (Xt = ss.videoCallSegments) != null && Xt.length
                  ? g(ue.id, {
                      id: `echo-${nt.id}`,
                      text: gc(bs),
                      type: "text",
                      sender: "them",
                      contactId: nt.contactId,
                      timestamp: new Date().toISOString(),
                      videoCallSegments: ss.videoCallSegments,
                      ...(ss.dialogueTranslation && {
                        dialogueTranslation: ss.dialogueTranslation,
                      }),
                    })
                  : String(ss.narrator || "").trim() ||
                      String(ss.dialogue || "").trim()
                    ? g(ue.id, {
                        id: `echo-${nt.id}`,
                        text: gc(bs),
                        type: "text",
                        sender: "them",
                        contactId: nt.contactId,
                        timestamp: new Date().toISOString(),
                        ...(ss.narrator &&
                          String(ss.narrator).trim() && {
                            narrator: ss.narrator,
                          }),
                        ...(ss.dialogue &&
                          String(ss.dialogue).trim() && {
                            dialogue: ss.dialogue,
                          }),
                        ...(ss.dialogueTranslation && {
                          dialogueTranslation: ss.dialogueTranslation,
                        }),
                      })
                    : g(ue.id, {
                        id: `echo-${nt.id}`,
                        text: "",
                        type: "text",
                        sender: "them",
                        contactId: nt.contactId,
                        timestamp: new Date().toISOString(),
                        narrator: gc(bs),
                      });
              }
              (ne({ ...nt, isGenerating: !1 }), (te.current = null));
            }
            q(null);
          }, 2600);
        se.current = () => {
          (clearTimeout(gt), clearTimeout(ae));
        };
      }, 1e3);
      return () => clearTimeout(Ue);
    }, [W, t.status, ue == null ? void 0 : ue.id, Ae, K]),
      l.useEffect(() => {
        var jt;
        const Ue = K || V,
          me =
            (jt = Ue == null ? void 0 : Ue.parsed) == null
              ? void 0
              : jt.videoCallSegments;
        (Array.isArray(me) && me.length > 0) ||
          (Ue == null ? void 0 : Ue.type) !== "speech" ||
          !(Ue != null && Ue.dialogueTranslation) ||
          (Ue.id !== Te.current && ((Te.current = Ue.id), ye("native")));
      }, [K == null ? void 0 : K.id, V == null ? void 0 : V.id]));
    const Se = l.useRef({ chatId: null, memberIds: [], acceptedMembers: [] });
    if (
      (l.useEffect(() => {
        W &&
          ue &&
          (Se.current = {
            chatId: ue.id,
            memberIds: ue.memberIds || [],
            acceptedMembers: t.acceptedMembers || [],
          });
      }, [W, ue, t == null ? void 0 : t.acceptedMembers]),
      l.useEffect(() => {
        if (
          !W ||
          !ue ||
          (t == null ? void 0 : t.status) !== "connected" ||
          (t == null ? void 0 : t.startTime) == null
        )
          return;
        const Ue = 35,
          jt = (Ue + Math.random() * (55 - Ue)) * 1e3,
          Gt = 0.5,
          Pt = setTimeout(() => {
            const {
              chatId: Wt,
              memberIds: ct,
              acceptedMembers: Kt,
            } = Se.current;
            if (!Wt || !ct.length) return;
            const fs = ct.filter((It) => !Kt.includes(It));
            if (fs.length === 0 || Math.random() > Gt) return;
            const gt = fs[Math.floor(Math.random() * fs.length)],
              ae = s.find((It) => It.id === gt),
              nt =
                (ae == null ? void 0 : ae.remark) ||
                (ae == null ? void 0 : ae.nickname) ||
                (ae == null ? void 0 : ae.name) ||
                "某成员";
            (typeof o == "function" && o(Wt, gt),
              Z(`${nt}加入了视频通话`),
              ce.current && clearTimeout(ce.current),
              (ce.current = setTimeout(() => Z(null), 3e3)),
              setTimeout(() => r(Wt), 400));
          }, jt);
        return () => clearTimeout(Pt);
      }, [
        W,
        ue == null ? void 0 : ue.id,
        t == null ? void 0 : t.status,
        t == null ? void 0 : t.startTime,
        s,
        o,
        r,
      ]),
      t.status === "idle" || (!W && !re) || (W && !ue))
    )
      return null;
    const Fe =
        ((ue == null ? void 0 : ue.groupName) && String(ue.groupName).trim()) ||
        "群聊",
      $e = re ? re.nickname || re.name || "对方" : "",
      tt = (Ue) =>
        (Ue == null ? void 0 : Ue.nickname) ||
        (Ue == null ? void 0 : Ue.name) ||
        "成员",
      Xe = (Ue) => {
        const me = Math.floor(Ue / 60),
          jt = Ue % 60;
        return `${me.toString().padStart(2, "0")}:${jt.toString().padStart(2, "0")}`;
      },
      ht =
        !(ue != null && ue.isTyping) &&
        !(_ && (Oe = _.has) != null && Oe.call(_, ue == null ? void 0 : ue.id)),
      Pe =
        W &&
        t.status === "connected" &&
        ht &&
        (() => {
          var me, jt;
          const Ue = t.currentMessages || [];
          for (let Gt = Ue.length - 1; Gt >= 0; Gt--)
            if (
              ((me = Ue[Gt]) == null ? void 0 : me.sender) === "me" &&
              ((jt = Ue[Gt]) == null ? void 0 : jt.type) !== "system"
            )
              return !0;
          return !1;
        })(),
      ut = (Ue) => {
        a(ue.id, Ue, null, "system");
      },
      _t =
        (
          ((Qe = ue == null ? void 0 : ue.settings) == null
            ? void 0
            : Qe.myTitle) || ""
        ).trim() ||
        jH(
          (Ye = ue == null ? void 0 : ue.settings) == null
            ? void 0
            : Ye.userPersona,
        ) ||
        f.nickname ||
        f.name ||
        "我",
      Ee = () => {
        j.trim() &&
          (m == null || m(),
          (t == null ? void 0 : t.status) === "connected" && !W
            ? y == null || y(ue.id, j)
            : (a(ue.id, j), setTimeout(() => r(ue.id), 100)),
          T(""),
          S(!1));
      },
      fe = (Ue) => {
        z(!0);
        const me = Ue.touches[0];
        ee.current = { x: me.clientX - D.x, y: me.clientY - D.y };
      },
      He = (Ue) => {
        if (!P) return;
        const me = Ue.touches[0];
        $({ x: me.clientX - ee.current.x, y: me.clientY - ee.current.y });
      },
      Ie = () => {
        z(!1);
      },
      Ce = (Ue) => {
        window.confirm("删除这条消息？") &&
          (t.status === "connected" ? h(Ue) : p(ue.id, [Ue]));
      },
      Re = l.useRef(0),
      De = (Ue, me) => {
        var jt;
        ((Re.current = Ue.touches
          ? (jt = Ue.touches[0]) == null
            ? void 0
            : jt.clientY
          : Ue.clientY),
          (U.current = setTimeout(() => Ce(me), 500)));
      },
      at = (Ue) => {
        var me;
        if (U.current) {
          const jt = Ue.touches
            ? (me = Ue.touches[0]) == null
              ? void 0
              : me.clientY
            : Ue.clientY;
          typeof jt == "number" &&
            Math.abs(jt - Re.current) > 10 &&
            (clearTimeout(U.current), (U.current = null));
        }
      },
      ft = () => {
        U.current && (clearTimeout(U.current), (U.current = null));
      };