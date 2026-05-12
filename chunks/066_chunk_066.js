                  }),
                ],
              }),
              e.jsx(Uo, {
                label: "风格 / 语气",
                value: t.style,
                onChange: (T) => s({ ...t, style: T.target.value }),
              }),
              e.jsx(Uo, {
                label: "个性签名",
                value: t.signature || "",
                onChange: (T) => s({ ...t, signature: T.target.value }),
                placeholder: "一句话签名（建议 15 字以内）",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-8",
                children: [
                  e.jsx(Uo, {
                    label: "IP",
                    value: t.location || "",
                    onChange: (T) => s({ ...t, location: T.target.value }),
                    placeholder: "例如：北京 / 上海",
                  }),
                  e.jsx(Uo, {
                    label: "年龄",
                    type: "number",
                    value: t.age ?? "",
                    onChange: (T) =>
                      s({
                        ...t,
                        age:
                          T.target.value === ""
                            ? void 0
                            : parseInt(T.target.value, 10),
                      }),
                    placeholder: "例如：109",
                  }),
                ],
              }),
              e.jsx(Uo, {
                label: "学校",
                value: t.school || "",
                onChange: (T) => s({ ...t, school: T.target.value }),
                placeholder: "例如：春田花花幼儿园",
              }),
              e.jsx(Uo, {
                label: "标签",
                value: Array.isArray(t.tags) ? t.tags.join("，") : t.tags || "",
                onChange: (T) =>
                  s({
                    ...t,
                    tags: T.target.value
                      .split(/[,\s，、]+/)
                      .map((I) => I.trim())
                      .filter(Boolean),
                  }),
                placeholder: "用逗号分隔，例如：日常，搞笑，碎碎念",
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
                children: [
                  e.jsxs("span", {
                    className:
                      "font-serif text-lg text-[#2c2c2c] flex items-center",
                    children: [
                      "是否评论",
                      e.jsx(Oi, {
                        text: "开启后，该居民会随机出现在其他博主的视频评论区发言（按人设与风格评论视频内容）。",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => s({ ...t, canComment: t.canComment !== !0 }),
                    className: `w-12 h-6 rounded-full transition-colors relative ${t.canComment === !0 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                    children: e.jsx("div", {
                      className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.canComment === !0 ? "left-7" : "left-1"}`,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
                children: [
                  e.jsxs("span", {
                    className:
                      "font-serif text-lg text-[#2c2c2c] flex items-center",
                    children: [
                      "参与刷新视频",
                      e.jsx(Oi, {
                        text: "关闭后：啾音首页刷新视频时不会以该居民为博主生成新视频。不影响「是否评论」。默认开启；旧存档未写该字段时视为开启。",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () =>
                      s({
                        ...t,
                        includeInVideoRefresh: t.includeInVideoRefresh === !1,
                      }),
                    className: `w-12 h-6 rounded-full transition-colors relative ${t.includeInVideoRefresh !== !1 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                    children: e.jsx("div", {
                      className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.includeInVideoRefresh !== !1 ? "left-7" : "left-1"}`,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
                children: [
                  e.jsxs("span", {
                    className:
                      "font-serif text-lg text-[#2c2c2c] flex items-center",
                    children: [
                      "是否开启双语",
                      e.jsx(Oi, {
                        text: "开启后：该居民发视频、评论区以及楼中楼 AI 回复都会输出双语（外语+中文翻译）。默认显示外语，点击“翻译”展开中文。",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () =>
                      s({ ...t, isBilingual: t.isBilingual !== !0 }),
                    className: `w-12 h-6 rounded-full transition-colors relative ${t.isBilingual === !0 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                    children: e.jsx("div", {
                      className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.isBilingual === !0 ? "left-7" : "left-1"}`,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
                children: [
                  e.jsxs("span", {
                    className:
                      "font-serif text-lg text-[#2c2c2c] flex items-center",
                    children: [
                      "是否让对方知道用户身份",
                      e.jsx(Oi, {
                        text: "说明仅在点击小提示图标后显示。开启：该居民可把当前观众视作绑定用户，允许参考聊天 App 绑定人设与联通记忆。关闭：该居民把观众当作全新陌生人，只能参考抖音公开人设（互联网形象），私信/评论区/楼中楼都不允许代入聊天 App 绑定人设。",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () =>
                      s({
                        ...t,
                        knowsUserIdentity: t.knowsUserIdentity !== !0,
                      }),
                    className: `w-12 h-6 rounded-full transition-colors relative ${t.knowsUserIdentity === !0 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                    children: e.jsx("div", {
                      className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.knowsUserIdentity === !0 ? "left-7" : "left-1"}`,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "py-4 border-b border-[#e5e5e5]",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("span", {
                        className:
                          "font-serif text-lg text-[#2c2c2c] flex items-center",
                        children: [
                          "是否联通记忆",
                          e.jsx(Oi, {
                            text: "说明仅在点击小提示图标后显示。开启并勾选聊天窗口后，该居民在抖音侧行为会注入到选中聊天记忆（仅背景参考、角色隔离）。若上方“是否让对方知道用户身份”关闭，这些联通记忆不会用于把观众识别为聊天 App 绑定用户。",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () =>
                          s({ ...t, linkMemory: t.linkMemory !== !0 }),
                        className: `w-12 h-6 rounded-full transition-colors relative ${t.linkMemory === !0 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                        children: e.jsx("div", {
                          className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.linkMemory === !0 ? "left-7" : "left-1"}`,
                        }),
                      }),
                    ],
                  }),
                  t.linkMemory === !0 &&
                    e.jsxs("div", {
                      className: "mt-4 pl-0",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => _((T) => !T),
                          className:
                            "w-full flex items-center justify-between text-left group",
                          children: [
                            e.jsx("span", {
                              className: "text-[13px] text-[#666]",
                              children: "选择要注入记忆的聊天窗口",
                            }),
                            e.jsx(aa, {
                              size: 18,
                              className: `text-[#999] shrink-0 transition-transform duration-200 ${w ? "rotate-180" : ""} group-hover:text-[#2c2c2c]`,
                            }),
                          ],
                        }),
                        w &&
                          e.jsx("div", {
                            className:
                              "mt-3 space-y-2 max-h-48 overflow-y-auto",
                            children:
                              A.length === 0
                                ? e.jsx("p", {
                                    className: "text-xs text-[#888]",
                                    children:
                                      "该居民在聊天 App 中暂无单聊或群聊会话，先与 TA 单聊或把 TA 拉入群聊后此处会显示可选窗口。",
                                  })
                                : A.map((T) => {
                                    var B, F, D;
                                    const I = T.isGroup
                                        ? T.groupName || "群聊"
                                        : ((B = o.find(
                                            ($) => $.id === T.contactId,
                                          )) == null
                                            ? void 0
                                            : B.remark) ||
                                          ((F = o.find(
                                            ($) => $.id === T.contactId,
                                          )) == null
                                            ? void 0
                                            : F.nickname) ||
                                          ((D = o.find(
                                            ($) => $.id === T.contactId,
                                          )) == null
                                            ? void 0
                                            : D.name) ||
                                          T.contactId ||
                                          "单聊",
                                      L = k.includes(T.id);
                                    return e.jsxs(
                                      "label",
                                      {
                                        className:
                                          "flex items-center gap-2 cursor-pointer text-sm",
                                        children: [
                                          e.jsx("input", {
                                            type: "checkbox",
                                            checked: L,
                                            onChange: () => C(T.id),
                                            className: "rounded border-[#ccc]",
                                          }),
                                          e.jsxs("span", {
                                            className: "text-[#2c2c2c]",
                                            children: [
                                              I,
                                              T.isGroup ? " (群)" : "",
                                            ],
                                          }),
                                        ],
                                      },
                                      T.id,
                                    );
                                  }),
                          }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
                children: [
                  e.jsxs("span", {
                    className:
                      "font-serif text-lg text-[#2c2c2c] flex items-center",
                    children: [
                      "专属背景音乐",
                      e.jsx(Oi, {
                        text: "开启后，该居民发视频时只从下方专属音乐库按分类选取 BGM，不使用通用背景音乐。",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () =>
                      s({ ...t, useExclusiveBgm: t.useExclusiveBgm !== !0 }),
                    className: `w-12 h-6 rounded-full transition-colors relative ${t.useExclusiveBgm === !0 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                    children: e.jsx("div", {
                      className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.useExclusiveBgm === !0 ? "left-7" : "left-1"}`,
                    }),
                  }),
                ],
              }),
              m &&
                t.useExclusiveBgm === !0 &&
                e.jsxs("div", {
                  className: "py-4 border-b border-[#e8e6e3]",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => N((T) => !T),
                      className:
                        "w-full flex items-center justify-between text-left group",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className:
                                "text-[11px] font-medium tracking-[0.25em] text-[#888] uppercase",
                              children: "Exclusive BGM",
                            }),
                            e.jsx("div", {
                              className:
                                "font-serif text-[15px] text-[#2c2c2c] tracking-wide mt-1",
                              children: "专属背景音乐",
                            }),
                          ],
                        }),
                        e.jsx(aa, {
                          size: 18,
                          className: `text-[#999] shrink-0 transition-transform duration-200 ${b ? "rotate-180" : ""} group-hover:text-[#2c2c2c]`,
                        }),
                      ],
                    }),
                    b &&
                      e.jsx("div", {
                        className: "mt-4",
                        children: e.jsx(DC, {
                          library: M,
                          setLibrary: E,
                          adding: y,
                          setAdding: v,
                        }),
                      }),
                  ],
                }),
              m
                ? e.jsxs("div", {
                    className: "py-4 border-b border-[#e5e5e5] space-y-3",
                    children: [
                      e.jsxs("div", {
                        className:
                          "font-serif text-lg text-[#2c2c2c] flex items-center",
                        children: [
                          "视频封面库",
                          e.jsx(Oi, {
                            text: "上传的图片会压缩后保存，并用作该居民博主主页视频封面；每个视频会固定使用其中一张，下次进入不变。",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex flex-wrap gap-2 items-center",
                        children: e.jsxs("label", {
                          className:
                            "inline-flex items-center gap-1 px-3 py-1.5 bg-[#e5e5e5] text-[#2c2c2c] text-sm rounded cursor-pointer",
                          children: [
                            e.jsx(Ta, { size: 14 }),
                            "上传封面图",
                            e.jsx("input", {
                              ref: p,
                              type: "file",
                              accept: "image/*",
                              className: "hidden",
                              onChange: async (T) => {
                                var L, B;
                                const I =
                                  (B =
                                    (L = T.target) == null
                                      ? void 0
                                      : L.files) == null
                                    ? void 0
                                    : B[0];
                                if (!(!I || !i)) {
                                  try {
                                    const F = await $r(I, 400, 0.8),
                                      D = [
                                        ...h,
                                        {
                                          id: Date.now() + Math.random(),
                                          dataUrl: F,
                                        },
                                      ];
                                    i({ ...r, [m]: D });
                                  } catch {}
                                  T.target.value = "";
                                }
                              },
                            }),
                          ],
                        }),
                      }),
                      h.length > 0 &&
                        e.jsx("ul", {
                          className: "flex flex-wrap gap-2",
                          children: h.map((T) =>
                            e.jsxs(
                              "li",
                              {
                                className:
                                  "relative w-20 h-20 rounded overflow-hidden border border-[#e5e5e5]",
                                children: [
                                  e.jsx("img", {
                                    src: T.dataUrl,
                                    alt: "封面",
                                    className: "w-full h-full object-cover",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () =>
                                      i({
                                        ...r,
                                        [m]: h.filter((I) => I.id !== T.id),
                                      }),
                                    className:
                                      "absolute top-0 right-0 bg-black/60 text-white p-0.5",
                                    children: e.jsx(Ts, { size: 12 }),
                                  }),
                                ],
                              },
                              T.id,
                            ),
                          ),
                        }),
                    ],
                  })
                : e.jsx("div", {
                    className: "py-2 text-sm text-[#888]",
                    children: "保存角色后可添加视频封面库",
                  }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("label", {
                    className:
                      "flex items-center font-serif text-sm text-[#888]",
                    children: [
                      "绑定用户人设",
                      e.jsx(Oi, {
                        text: "当用户切换到选中的人设时，该 NPC 必须生成一条视频，并将其人设作为提示词。",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 gap-3",
                    children: [
                      (a || []).map((T) => {
                        const I = (t.boundUserPresets || []).includes(T.id);
                        return e.jsxs(
                          "div",
                          {
                            onClick: () => j(T.id),
                            className: `flex items-center justify-between p-3 border cursor-pointer transition-all ${I ? "border-[#2c2c2c] bg-white" : "border-[#f0f0f0] bg-transparent opacity-60"}`,
                            children: [
                              e.jsx("span", {
                                className: "font-serif text-sm",
                                children: T.name,
                              }),
                              I &&
                                e.jsx(On, {
                                  size: 16,
                                  className: "text-[#2c2c2c]",
                                }),
                            ],
                          },
                          T.id,
                        );
                      }),
                      (a || []).length === 0 &&
                        e.jsx("div", {
                          className: "text-xs text-[#999] italic",
                          children:
                            "暂无用户人设预设，请先在“用户人设”中保存预设。",
                        }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: () => n(t),
                className:
                  "w-full py-4 bg-[#2c2c2c] text-[#fdfbf7] font-serif font-bold tracking-widest hover:bg-black transition-colors mt-4 mb-8",
                children: "确认身份",
              }),
            ],
          }),
        }),
      ],
    });
  },
  Oq = ({ onClose: t, onChooseNew: s, onChooseImport: n }) =>
    e.jsx("div", {
      className:
        "absolute inset-0 z-[70] bg-black/40 flex items-end sm:items-center justify-center",
      children: e.jsxs("div", {
        className:
          "w-full sm:w-[520px] bg-white rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-4",
            children: [
              e.jsx("div", {
                className: "font-serif text-lg font-bold text-[#2c2c2c]",
                children: "添加新角色",
              }),
              e.jsx("button", {
                onClick: t,
                className: "text-[#2c2c2c] hover:opacity-60 transition-opacity",
                children: e.jsx(Ts, { size: 18 }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-3",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "w-full py-3 border border-[#2c2c2c] text-[#2c2c2c] font-serif font-bold tracking-widest hover:bg-[#2c2c2c] hover:text-white transition-colors",
                children: "新增空白角色",
              }),
              e.jsx("button", {
                onClick: n,
                className:
                  "w-full py-3 bg-[#2c2c2c] text-white font-serif font-bold tracking-widest hover:bg-black transition-colors",
                children: "从聊天通讯录导入",
              }),
            ],
          }),
          e.jsx("div", {
            className: "mt-4 text-xs text-[#999] font-serif",
            children:
              "导入会根据通讯录角色设定生成抖音网名、风格语气与个性签名，并将角色人设填入人物传记。",
          }),
        ],
      }),
    }),
  Bq = ({
    contacts: t,
    isLoading: s,
    disabledIds: n,
    onBack: a,
    onClose: r,
    onPick: i,
  }) =>
    e.jsxs("div", {
      className: "absolute inset-0 z-[70] bg-white flex flex-col",
      children: [
        e.jsxs("div", {
          className:
            "pt-14 pb-4 px-6 border-b border-[#f0f0f0] flex justify-between items-center bg-[#fffcf9] z-10",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx("button", {
                  onClick: a,
                  className: "hover:opacity-60 transition-opacity",
                  children: e.jsx(un, {
                    size: 24,
                    className: "text-[#2c2c2c]",
                  }),
                }),
                e.jsx("span", {
                  className:
                    "font-serif text-xl font-bold text-[#2c2c2c] tracking-wide",
                  children: "选择通讯录好友",
                }),
              ],
            }),
            e.jsx("button", {
              onClick: r,
              className: "hover:opacity-60 transition-opacity",
              children: e.jsx(Ts, { size: 22, className: "text-[#2c2c2c]" }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto p-6 bg-[#fffcf9] relative",
          children: e.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              (t || []).map((o) =>
                (() => {
                  var d;
                  const c = !!(
                    (d = n == null ? void 0 : n.has) != null && d.call(n, o.id)
                  );
                  return e.jsxs(
                    "button",
                    {
                      disabled: s || c,
                      onClick: () => !c && i(o),
                      className: `flex items-center gap-3 p-4 bg-white border transition-all text-left ${c ? "border-[#f0f0f0] opacity-50 cursor-not-allowed" : "border-[#f0f0f0] hover:border-[#2c2c2c]"}`,
                      children: [
                        e.jsx("img", {
                          src:
                            o.portrait ||
                            o.avatar ||
                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${o.name || o.nickname || "role"}`,
                          className: "w-10 h-10 rounded-full object-cover",
                          alt: o.name || o.nickname || "role",
                        }),
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("div", {
                              className:
                                "font-serif text-sm font-bold text-[#2c2c2c] truncate",
                              children: o.name || o.nickname || "未命名",
                            }),
                            e.jsx("div", {
                              className:
                                "text-[10px] text-[#999] mt-1 truncate",
                              children: (o.setting || "").trim()
                                ? (o.setting || "").slice(0, 40)
                                : "无角色设定（将按昵称生成）",
                            }),
                            c &&
                              e.jsx("div", {
                                className: "text-[10px] text-[#d00] mt-1",
                                children: "已在居民档案",
                              }),
                          ],
                        }),
                      ],
                    },
                    o.id,
                  );
                })(),
              ),
              (t || []).length === 0 &&
                e.jsx("div", {
                  className:
                    "col-span-2 text-center py-10 text-[#999] text-sm font-serif",
                  children: "暂无通讯录好友",
                }),
            ],
          }),
        }),
        s &&
          e.jsxs("div", {
            className: "absolute inset-0 z-[90] pointer-events-auto",
            children: [
              e.jsx("div", {
                className: "absolute inset-0 bg-white/20 backdrop-blur-lg",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 flex items-center justify-center p-6",
                children: e.jsx("div", {
                  className:
                    "bg-black/70 text-white text-sm px-5 py-3 rounded-xl shadow-2xl backdrop-blur-md border border-white/10",
                  children: "正在生成角色档案，请稍等…",
                }),
              }),
            ],
          }),
      ],
    }),
  Uq = ({ onClose: t }) => {
    const {
        settings: s,
        updateSettings: n,
        npcs: a,
        addNpc: r,
        updateNpc: i,
        deleteNpc: o,
        worldPresets: c,
        addWorldPreset: d,
        deleteWorldPreset: u,
        userPersona: f,
        updateUserPersona: p,
        userPresets: m,
        addUserPreset: h,
        deleteUserPreset: g,
        clearAllData: x,
        bgmLibrary: y,
        setBgmLibrary: v,
        exclusiveBgmLibraries: b,
        setExclusiveBgmLibraries: N,
        coverLibraries: w,
        setCoverLibraries: _,
      } = ei(),
      A = a || [],
      {
        user: k,
        contactsPublic: C,
        userPresets: M,
        apiConfig: E,
        addApiLog: S,
        getRoleBoundUser: j,
        chats: T = [],
      } = vn(),
      I = C,
      [L, B] = l.useState({
        batchSize: 5,
        commentRange: [5, 20],
        historyLimit: 50,
        enableBGM: !0,
        worldSetting: "",
        promptTemplate: "",
        npcHistoryCount: 5,
      }),
      [F, D] = l.useState({
        name: "",
        avatar: "",
        douyinPersona: "",
        isPublicFigure: !1,
      }),
      [$, P] = l.useState(null),
      [z, O] = l.useState(null),
      [Z, K] = l.useState(null),
      [q, V] = l.useState(!1),
      [ne, le] = l.useState(""),
      ie = new Set(
        (A || [])
          .filter((Y) => Y.sourceType === "contact" && Y.contactId)
          .map((Y) => Y.contactId),
      ),
      X = l.useRef(!1);
    l.useEffect(() => {
      $ === null &&
        (X.current || (X.current = !0),
        s && B(s),
        f
          ? D({
              ...f,
              name: f.name || (k == null ? void 0 : k.name) || "我",
              avatar: f.avatar || (k == null ? void 0 : k.avatar) || "",
            })
          : k && D((Y) => ({ ...Y, name: k.name, avatar: k.avatar })));
    }, [s, f, k, $]);
    const je = () => {
        (n(L), p && p(F), P(null));
      },
      xe = (Y) => {
        (Y.id && (a || []).some((U) => U.id === Y.id)
          ? i(Y)
          : r({ ...Y, id: Y.id || Date.now().toString() }),
          O(null));
      },
      ye = () => K("choose"),
      R = () => {
        (K(null),
          O({
            name: "",
            avatar: "",
            bio: "",
            style: "",
            signature: "",
            boundUserPresets: [],
            canComment: !1,
            isBilingual: !1,
            knowsUserIdentity: !1,
            useExclusiveBgm: !1,
            linkMemory: !1,
            linkedChatIds: [],
            sourceType: "npc",
            includeInVideoRefresh: !0,
          }));
      },
      oe = () => K("pick_contact"),
      ee = async (Y) => {
        const U =
            (Y == null ? void 0 : Y.name) ||
            (Y == null ? void 0 : Y.nickname) ||
            "TA",
          ce = String((Y == null ? void 0 : Y.setting) ?? ""),
          pe = ce.slice(0, 800),
          se = typeof j == "function" ? j(Y) : {},
          Te = ((se == null ? void 0 : se.settings) || "").slice(0, 500);
        if (!E || !E.endpoint || !E.key)
          return { douyinName: U, bio: ce, style: "日常", signature: "" };
        const ke =
            "你是一个抖音「居民档案」生成器。你要把“人物传记（角色人设）”当作唯一权威，生成高度贴合该人设且有网感的抖音资料字段。注意：这些字段可以玩梗，不必与人设逐字一致（例如年龄可以写 109 岁，学校可以写“春田花花幼儿园”），但必须符合该人设的气质与梗。请输出严格 JSON，不要 Markdown。",
          W = `【通讯录角色】
名字：${U}
角色设定：${pe || "无"}
（可能绑定的用户人设，仅作参考）：${Te || "无"}

【输出字段要求】
注意：人物传记(bio)将由系统直接拷贝角色设定，不需要你生成。

请生成下面字段（都要“有网感、时尚、有梗但不尬”，且不与人设冲突）：
1) douyinName：抖音网名（更像小红书/推特那种网名，1-12 字；不需要透露强烈个人信息（不写真实姓名/手机号/地址/学校全称等），但要有梗、有网感；必须与人设一致）
2) style：风格/语气（用顿号分隔的标签，3-8 个，必须能从人设中推导出来）
3) signature：抖音个性签名（15 字以内；有网感、时尚、有梗但不尬；必须与人设一致）
4) location：IP 属地（中国省份或城市，允许玩梗但要像抖音）
5) age：年龄（整数，允许夸张玩梗但要符合人设）
6) school：学校/单位（可玩梗，符合人设）
7) tags：标签（数组，3-8 个短标签，像抖音标签，符合人设）
8) followers：粉丝数（整数。素人尽量多一点但不夸张；明星/大V更高但别离谱；符合人设）
9) following：关注数（整数。符合人设，别太夸张也别太少）

【强约束】
- 不允许输出与人设冲突的风格/领域（例如人设是“严肃律师”就不要“擦边、绿茶”；人设是“健身硬核”就不要“纯欲小野猫”）。
- 如果人设信息不足，就生成“中性但贴合”的网名/标签（如“日常、生活、碎碎念”），不要胡编极端人设。
- style 必须像抖音标签：短、具体、可读（如“毒舌、快节奏、电影解说”），不要写句子。

只返回 JSON：
{
  "douyinName": "",
  "style": "",
  "signature": "",
  "location": "",
  "age": 0,
  "school": "",
  "tags": [],
  "followers": 0,
  "following": 0
}`,
          ue = await yr(
            E,
            {
              messages: [
                { role: "system", content: ke },
                { role: "user", content: W },
              ],
              temperature: 0.7,
            },
            { addApiLog: S, logContactName: U },
          ),
          re = String(ue || "").match(/\{[\s\S]*\}/),
          he = JSON.parse(re ? re[0] : ue);
        return {
          douyinName: he.douyinName || U,
          bio: ce,
          style: he.style || "日常",
          signature: he.signature || "",
          location: he.location || "",
          age:
            typeof he.age == "number"
              ? he.age
              : he.age
                ? parseInt(he.age, 10)
                : void 0,
          school: he.school || "",
          tags: Array.isArray(he.tags)
            ? he.tags
            : he.tags
              ? [String(he.tags)]
              : [],
          followers:
            typeof he.followers == "number"
              ? he.followers
              : he.followers
                ? parseInt(he.followers, 10)
                : void 0,
          following:
            typeof he.following == "number"
              ? he.following
              : he.following
                ? parseInt(he.following, 10)
                : void 0,
        };
      },
      H = async (Y) => {
        if (!(!Y || q)) {
          (V(!0), le(""));
          try {
            const U = await ee(Y),
              ce = F != null && F.sourcePresetId ? [F.sourcePresetId] : [],
              pe = {
                name: U.douyinName,
                avatar: Y.portrait || Y.avatar || "",
                cover: Y.background || "",
                bio: U.bio,
                style: U.style,
                signature: U.signature,
                location: U.location || "",
                age: U.age,
                school: U.school || "",
                tags: U.tags || [],
                followers: U.followers,
                following: U.following,
                boundUserPresets: ce,
                canComment: !1,
                isBilingual: !1,
                knowsUserIdentity: !1,
                useExclusiveBgm: !1,
                sourceType: "contact",
                contactId: Y.id,
                includeInVideoRefresh: !0,
              };
            (K(null), O(pe));
          } catch {
            le("生成失败，请稍后重试");
          } finally {
            V(!1);
          }
        }
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-50 bg-[#fdfbf7] text-[#2c2c2c] flex flex-col overflow-hidden font-sans",
      children: [
        e.jsxs("div", {
          className:
            "pt-14 pb-8 px-8 flex justify-between items-start border-b border-[#e5e5e5] relative",
          children: [
            e.jsxs("div", {
              className: "mt-2",
              children: [
                e.jsx("p", {
                  className:
                    "font-sans text-xs tracking-[0.2em] text-[#888] mb-2",
                  children: "模拟控制",
                }),
                e.jsx(Fq, { children: "THE ARCHIVE" }),
              ],
            }),
            e.jsx("button", {
              onClick: t,
              className:
                "absolute top-12 right-4 p-2 text-[#2c2c2c] hover:opacity-60 transition-opacity",
              children: e.jsx(Ts, { size: 32, strokeWidth: 1 }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto px-6 py-8 no-scrollbar",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-6 pb-10",
              children: [
                e.jsx(Gx, {
                  index: 0,
                  title: "生成参数",
                  subtitle: "生成",
                  icon: e.jsx(V8, { size: 32, strokeWidth: 1 }),
                  onClick: () => P("gen"),
                }),
                e.jsx(Gx, {
                  index: 1,
                  title: "世界观",
                  subtitle: "世界观",
                  icon: e.jsx(ro, { size: 32, strokeWidth: 1 }),
                  onClick: () => P("world"),
                }),
                e.jsx(Gx, {
                  index: 2,
                  title: "居民档案",
                  subtitle: "居民",
                  icon: e.jsx(Vi, { size: 32, strokeWidth: 1 }),
                  onClick: () => P("npc"),
                }),
                e.jsx(Gx, {
                  index: 3,
                  title: "用户人设",
                  subtitle: "身份",
                  icon: e.jsx(RT, { size: 32, strokeWidth: 1 }),
                  onClick: () => P("user"),
                }),
              ],
            }),
            e.jsx("div", {
              className: "mt-10 text-center",
              children: e.jsx("p", {
                className: "font-serif text-sm text-[#ccc] italic",
                children: '"现实不过是一种幻觉，尽管非常持久。"',
              }),
            }),
          ],
        }),
        $ === "gen" &&
          e.jsx(Ux, {
            title: "生成参数设置",
            onSave: je,
            onClose: () => P(null),
            children: e.jsx(Dq, {
              localSettings: L,
              setLocalSettings: B,
              clearAllData: x,
              bgmLibrary: y,
              setBgmLibrary: v,
            }),
          }),
        $ === "world" &&
          e.jsx(Ux, {
            title: "世界观定义",
            onSave: je,
            onClose: () => P(null),
            children: e.jsx($q, {
              localSettings: L,
              setLocalSettings: B,
              worldPresets: c,
              addWorldPreset: d,
              deleteWorldPreset: u,
            }),
          }),
        $ === "npc" &&
          e.jsx(Ux, {
            title: "居民登记处",
            onSave: je,
            onClose: () => P(null),
            children: e.jsx(Rq, {
              residentOnlyNpcs: A,
              onAddNpc: ye,
              setEditingNpc: O,
              deleteNpc: o,
              updateNpc: i,
              contacts: I,
            }),
          }),
        $ === "user" &&
          e.jsx(Ux, {
            title: "用户人设档案",
            onSave: je,
            onClose: () => P(null),
            children: e.jsx(zq, {
              localUserPersona: F,
              setLocalUserPersona: D,
              userPresets: m,
              addUserPreset: h,
              deleteUserPreset: g,
              chatUser: k,
              chatUserPresets: M,
            }),
          }),
        z &&
          e.jsx(Pq, {
            editingNpc: z,
            setEditingNpc: O,
            handleSaveNpc: xe,
            userPresets: m,
            coverLibraries: w,
            setCoverLibraries: _,
            contacts: I,
            exclusiveBgmLibraries: b,
            setExclusiveBgmLibraries: N,
            chatAppChats: T,
          }),
        $ === "npc" &&
          Z === "choose" &&
          e.jsx(Oq, {
            onClose: () => K(null),
            onChooseNew: R,
            onChooseImport: oe,
          }),
        $ === "npc" &&
          Z === "pick_contact" &&
          e.jsxs("div", {
            className: "absolute inset-0 z-[70]",
            children: [
              e.jsx(Bq, {
                contacts: I,
                isLoading: q,
                disabledIds: ie,
                onBack: () => K("choose"),
                onClose: () => K(null),
                onPick: H,
              }),
              ne &&
                e.jsx("div", {
                  className:
                    "absolute top-[90px] left-1/2 -translate-x-1/2 z-[80] bg-red-600 text-white text-xs px-4 py-2 rounded-full shadow-lg",
                  children: ne,
                }),
            ],
          }),
      ],
    });
  },
  Gq = ({ size: t = 24, className: s }) =>
    e.jsxs("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: s,
      children: [
        e.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        e.jsx("line", { x1: "3", y1: "12", x2: "17", y2: "12" }),
        e.jsx("line", { x1: "3", y1: "18", x2: "11", y2: "18" }),
      ],
    }),
  Hq = ({ onClose: t, showPhoneCase: s, caseSize: n }) => {
    const {
        isCommentSectionOpen: a,
        commentingVideoId: r,
        closeCommentSection: i,
        videos: o,
        myVideos: c,
        npcVideoList: d,
        searchVideos: u,
        setSearchVideos: f,
        isShareOpen: p,
        sharingVideoId: m,
        closeShare: h,
        setActiveVideoIndex: g,
        notifications: x,
        playMode: y,
        setPlayMode: v,
        setNpcVideoList: b,
        lastRecommendIndex: N,
        npcs: w,
        contacts: _,
        currentUser: A,
        userPersona: k,
        setSuspendFeedBgm: C,
      } = ei(),
      { apiConfig: M, addApiLog: E, addToWallet: S } = vn(),
      [j, T] = l.useState("home"),
      [I, L] = l.useState("recommend"),
      [B, F] = l.useState(!1),
      [D, $] = l.useState(!1),
      [P, z] = l.useState(null),
      [O, Z] = l.useState(!1),
      [K, q] = l.useState(!1),
      [V, ne] = l.useState(null),
      [le, ie] = l.useState(!1),
      [X, je] = l.useState(null),
      [xe, ye] = l.useState(null),
      [R, oe] = l.useState(null),
      [ee, H] = l.useState(0),
      [Y, U] = l.useState(0),
      ce = l.useRef(null);
    l.useEffect(() => {
      C(X === "setup" || X === "broadcast" || I === "live");
    }, [X, I, C]);
    const pe = l.useCallback(
        async (J) => {
          (je(null), ye(null));
          const G = Number(J.giftAmountYuan || 0) || 0,
            we = (J.hostKind || "user") !== "npc";
          if (G > 0 && we)
            try {
              S(G, `啾音直播礼物收入${J.title ? `：${J.title}` : ""}`);
            } catch {}
          const Q = J.includeSettlementSummary !== !1,
            ve = {
              id: J.sessionId,
              endedAt: Date.now(),
              title: J.title,
              coverDataUrl: J.coverDataUrl ?? null,
              giftAmountYuan: J.giftAmountYuan,
              viewerCount: J.viewerCount,
              likeCount: J.likeCount,
            };
          if (!Q) return;
          const Ve = {
            ...ve,
            summaryText: "",
            summaryLoading: !0,
            summaryOmitted: !1,
          };
          oe(Ve);
          const Ae = (J.residents || []).map(
            (Fe) =>
              `- resident_id=${Fe.resident_id} 真名：${Fe.real_name || "未知"} ；啾音展示名：${Fe.screen_name || ""}`,
          ).join(`
`);
          let te = "";
          try {
            M != null && M.key
              ? (te = await XJ(M, E, {
                  hostRealName: J.userRealName,
                  hostDisplayName: J.userDisplayName,
                  liveTitle: J.title,
                  dmDigest: J.dmDigest,
                  giftValueDigest: `本场礼物按展馆单价折算合计约 ¥${G.toFixed(2)}`,
                  giftBreakdownText: J.giftBreakdownText,
                  tipRankingText: J.tipRankingText,
                  liveStatsLine: `观看人数约 ${J.viewerCount ?? 0}，点赞约 ${J.likeCount ?? 0}`,
                  residentsLabelled: Ae,
                }))
              : (te = "未配置 API Key，无法生成本场记忆总结。");
          } catch {
            te = "总结生成失败，请稍后重试。";
          }
          const Se = {
            id: Ve.id,
            endedAt: Ve.endedAt,
            title: Ve.title,
            coverDataUrl: Ve.coverDataUrl,
            giftAmountYuan: Ve.giftAmountYuan,
            viewerCount: Ve.viewerCount,
            likeCount: Ve.likeCount,
            summaryText: te,
            summaryLoading: !1,
            summaryOmitted: !1,
            hostKind: J.hostKind || "user",
            npcHostId: J.npcHostId ?? null,
            hostRealName: J.hostRealNameForRecord ?? J.userRealName,
          };
          (await xK(Se), oe(Se));
        },
        [M, E, S],
      ),
      se = l.useCallback(() => {
        oe(null);
      }, []),
      Te = l.useCallback((J) => {
        J != null && J.id && oe({ ...J, summaryLoading: !1 });
      }, []),
      ke = "video_app_ui_state_v1";
    (l.useEffect(() => {
      let J = !1;
      return (
        (async () => {
          try {
            const G = await be.get(ke);
            if (!G || J) return;
            (G.activeTab && T(G.activeTab),
              G.topTab && L(G.topTab === "nearby" ? "recommend" : G.topTab),
              G.currentProfileId !== void 0 && ne(G.currentProfileId),
              G.isSearching === !0 && $(!0),
              G.chatUser && z(G.chatUser));
          } catch {}
        })(),
        () => {
          J = !0;
        }
      );
    }, []),
      l.useEffect(() => {
        const J = setTimeout(() => {
          be.set(ke, {
            activeTab: j,
            topTab: I,
            currentProfileId: V,
            isSearching: D,
            chatUser: P,
          });
        }, 200);
        return () => clearTimeout(J);
      }, [j, I, V, D, P]),
      l.useEffect(() => {
        a &&
          r &&
          !(
            y === "works" ? c : y === "npc_works" ? d : y === "search" ? u : o
          ).some((G) => G.id === r) &&
          i();
      }, [a, r, y, o, c, d, u, i]),
      l.useEffect(() => {
        p &&
          m &&
          !(
            y === "works" ? c : y === "npc_works" ? d : y === "search" ? u : o
          ).some((G) => G.id === m) &&
          h();
      }, [p, m, y, o, c, d, u, h]));
    const W = (J) => {
        (ne(J), T("profile"), a && i(), D && $(!1));
      },
      ue = (J, G = null) => {
        if (G) {
          (L("recommend"), b(G), v("npc_works"));
          const ve = G.findIndex((Ve) => Ve.id === J);
          (g(ve !== -1 ? ve : 0), T("home"));
          return;
        }
        const we = c.findIndex((ve) => ve.id === J);
        if (we !== -1) {
          (L("recommend"), v("works"), g(we), T("home"));
          return;
        }
        const Q = o.findIndex((ve) => ve.id === J);
        Q !== -1 && (L("recommend"), v("recommend"), g(Q), T("home"));
      },
      re = (J) => {
        (L("recommend"), f([J]), v("search"), g(0), $(!1), T("home"));
      },
      he = () => {
        switch (j) {
          case "home":
            return e.jsx(m4, { onViewProfile: W });
          case "friends":
            return e.jsx(bq, {
              onSubViewChange: q,
              onViewProfile: W,
              showPhoneCase: s,
              caseSize: n,
            });
          case "add":
            return e.jsx(iq, { onPostSuccess: () => T("home") });
          case "inbox":
            return e.jsx(yq, {
              onChatClick: (J) => {
                (z(J), T("chat"));
              },
              onVideoClick: ue,
              onSubViewChange: Z,
            });
          case "chat":
            return e.jsx(cq, {
              onClose: () => T("inbox"),
              user: P,
              onViewProfile: W,
              onVideoClick: ue,
            });
          case "profile":
            return e.jsx(Sq, {
              userId: V,
              onBack: () => {
                (v("recommend"), g(typeof N == "number" ? N : 0), T("home"));
              },
              onEditProfile: () => F(!0),
              onVideoClick: ue,
              onChatClick: (J) => {
                (z(J), T("chat"));
              },
              onClose: t,
              onOpenLiveRecord: Te,
            });
          case "settings":
            return e.jsx(Uq, { onClose: () => T("home") });
          default:
            return e.jsx(m4, { onViewProfile: W });
        }
      },
      ge = [
        { id: "live", label: "Live" },
        { id: "nearby", label: "Nearby" },
        { id: "follow", label: "Follow" },
        { id: "recommend", label: "Recommend" },
      ];
    return e.jsxs("div", {
      className: "h-full w-full bg-black flex flex-col relative font-sans",
      children: [
        e.jsxs("div", {
          className: "flex-1 overflow-hidden relative",
          children: [
            he(),
            B && e.jsx(pq, { onClose: () => F(!1) }),
            I === "live" &&
              j === "home" &&
              y === "recommend" &&
              e.jsx(SK, {
                feedEpoch: Y,
                lastFetchedEpochRef: ce,
                npcs: w,
                contacts: _,
                currentUser: A,
                onEnterNpcLive: (J) => {
                  (ye(J), je("broadcast"));
                },
              }),
            j === "home" &&
              (y === "works" || y === "search" || y === "npc_works"
                ? e.jsxs("div", {
                    className:
                      "absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-14 px-4 pb-2 text-white pointer-events-none",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          y === "search" ? $(!0) : T("profile");
                        },
                        className: "w-8 flex justify-start pointer-events-auto",
                        children: e.jsx(un, { size: 32 }),
                      }),
                      e.jsx("div", { className: "flex-1" }),
                      e.jsx("div", {
                        className:
                          "w-8 flex justify-end cursor-pointer pointer-events-auto",
                        onClick: () => $(!0),
                        children: e.jsx(pr, { size: 24 }),
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className:
                      "absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-14 px-4 pb-2 text-white/70 pointer-events-none",
                    style: { transform: "translateZ(0)" },
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 flex items-center justify-start pointer-events-auto",
                        children: e.jsx("button", {
                          type: "button",
                          onClick: () => T("settings"),
                          className:
                            "w-8 h-8 flex items-center justify-center active:opacity-70",
                          "aria-label": "打开设置",
                          children: e.jsx(Gq, {
                            size: 24,
                            className: "text-white",
                          }),
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "flex-1 flex justify-center items-center space-x-5 overflow-x-auto no-scrollbar px-2 pointer-events-auto",
                        children: ge.map((J) => {
                          const G = I === J.id;
                          return e.jsx(
                            "button",
                            {
                              type: "button",
                              title: J.label,
                              "aria-label": J.label,
                              onClick: () => {
                                if (J.id === "nearby") {
                                  typeof t == "function" && t();
                                  return;
                                }
                                L(J.id);
                              },
                              className: `flex flex-col items-center flex-shrink-0 transition-colors ${G ? "text-white" : "text-white/60"}`,
                              children: e.jsxs("span", {
                                className:
                                  "inline-flex flex-col items-center gap-1",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-xs font-semibold tracking-tight whitespace-nowrap",
                                    children: J.label,
                                  }),
                                  G &&
                                    e.jsx("span", {
                                      className:
                                        "h-0.5 w-full bg-white rounded-full",
                                      "aria-hidden": !0,
                                    }),
                                ],
                              }),
                            },
                            J.id,
                          );
                        }),
                      }),
                      I === "live"
                        ? e.jsx("button", {
                            type: "button",
                            onClick: () => {
                              U((J) => J + 1);
                            },
                            className:
                              "pointer-events-auto active:opacity-70 w-7 h-7 rounded-full flex items-center justify-center",
                            "aria-label": "刷新 Living 广场",
                            children: e.jsx(Or, {
                              size: 17,
                              className: "text-white",
                              strokeWidth: 2,
                            }),
                          })
                        : e.jsx("button", {
                            type: "button",
                            onClick: () => $(!0),
                            className:
                              "w-8 h-8 flex items-center justify-end pointer-events-auto active:opacity-70",
                            "aria-label": "搜索",
                            children: e.jsx(pr, {
                              size: 24,
                              className: "text-white",
                            }),
                          }),
                    ],
                  })),
            (() => {
              const G = (
                y === "works"
                  ? c
                  : y === "npc_works"
                    ? d
                    : y === "search"
                      ? u
                      : o
              ).find((we) => we.id === r);
              return !a || !G
                ? null
                : e.jsx(KJ, { video: G, onClose: i, onViewProfile: W });
            })(),
            (() => {
              const G = (
                y === "works"
                  ? c
                  : y === "npc_works"
                    ? d
                    : y === "search"
                      ? u
                      : o
              ).find((we) => we.id === m);
              return !p || !G ? null : e.jsx(_K, { video: G, onClose: h });
            })(),
          ],
        }),
        e.jsx(Tq, {
          isOpen: D,
          onClose: () => {
            ($(!1),
              y === "search" &&
                (v("recommend"), g(typeof N == "number" ? N : 0)));
          },
          onVideoClick: re,
          onViewProfile: W,
        }),
        !a &&
          !p &&
          !B &&
          !X &&
          !R &&
          !(j === "inbox" && O) &&
          !(j === "friends" && K) &&
          j !== "add" &&
          j !== "chat" &&
          j !== "settings" &&
          !(
            j === "home" &&
            (y === "works" || y === "npc_works" || y === "search")
          ) &&
          !(j === "profile" && V !== "me" && V !== null) &&
          e.jsxs("div", {
            className: `min-h-[60px] border-t grid grid-cols-5 items-center z-30 pb-5 pt-1 transition-colors duration-300 ${j === "profile" || j === "inbox" ? "bg-white border-gray-100 text-gray-500" : "bg-black border-white/10 text-gray-400"}`,
            children: [
              e.jsx("button", {
                type: "button",
                title: "首页",
                "aria-label": "首页",
                onClick: () => {
                  (T("home"), v("recommend"));
                },
                className: `flex flex-col items-center justify-center ${j === "home" ? "text-white" : j === "profile" || j === "inbox" ? "text-gray-500" : ""}`,
                children: e.jsx(vp, {
                  size: 24,
                  strokeWidth: j === "home" ? 2.5 : 2,
                  className: "text-current",
                  "aria-hidden": !0,
                }),
              }),
              e.jsx("button", {
                type: "button",
                title: "朋友",
                "aria-label": "朋友",
                onClick: () => {
                  (T("friends"), q(!1));
                },
                className: `flex flex-col items-center justify-center ${j === "friends" ? "text-white" : j === "profile" || j === "inbox" ? "text-gray-500" : ""}`,
                children: e.jsx(Vi, {
                  size: 24,
                  strokeWidth: j === "friends" ? 2.5 : 2,
                  className: "text-current",
                  "aria-hidden": !0,
                }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => ie(!0),
                className: "flex flex-col items-center justify-center",
                children: e.jsxs("div", {
                  className: `w-[34px] h-[26px] border-2 rounded-lg flex items-center justify-center relative group active:scale-95 transition-transform bg-transparent ${j === "profile" || j === "inbox" ? "border-black" : "border-white"}`,
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute left-[1px] top-0 bottom-0 w-[calc(100%-2px)] bg-[#24f6f0] rounded-lg -z-10 translate-x-[-2px] opacity-0",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute right-[1px] top-0 bottom-0 w-[calc(100%-2px)] bg-[#fe2c55] rounded-lg -z-10 translate-x-[2px] opacity-0",
                    }),
                    e.jsx(ea, {
                      size: 16,
                      className: `${j === "profile" || j === "inbox" ? "text-black" : "text-white"}`,
                      strokeWidth: 4,
                    }),
                  ],
                }),
              }),
              e.jsx("button", {
                type: "button",
                title: "消息",
                "aria-label": "消息",
                onClick: () => {
                  (T("inbox"), Z(!1));
                },
                className: `flex flex-col items-center justify-center ${j === "inbox" ? "text-black" : j === "profile" || j === "inbox" ? "text-gray-500" : ""}`,
                children: e.jsxs("span", {
                  className: "relative inline-flex",
                  children: [
                    e.jsx(Ar, {
                      size: 24,
                      strokeWidth: j === "inbox" ? 2.5 : 2,
                      className: "text-current",
                      "aria-hidden": !0,
                    }),
                    x &&
                      x.filter((J) => !J.read).length > 0 &&
                      e.jsx("span", {
                        className:
                          "absolute -top-0.5 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white",
                      }),
                  ],
                }),
              }),
              e.jsx("button", {
                type: "button",
                title: "我",
                "aria-label": "我",
                onClick: () => {
                  (ne("me"), T("profile"));
                },
                className: `flex flex-col items-center justify-center ${j === "profile" && V === "me" ? "text-black" : ""}`,
                children: e.jsx(wr, {
                  size: 24,
                  strokeWidth: j === "profile" && V === "me" ? 2.5 : 2,
                  className: "text-current",
                  "aria-hidden": !0,
                }),
              }),
            ],
          }),
        e.jsx(AK, {
          open: le,
          onClose: () => ie(!1),
          onPickPost: () => T("add"),
          onPickLive: () => je("setup"),
        }),
        X === "setup" &&
          e.jsx(nq, {
            npcs: w,
            showPhoneCase: s,
            caseSize: n,
            onBack: () => je(null),
            onStartLive: (J) => {
              (ye(J), je("broadcast"));
            },
          }),
        X === "broadcast" &&
          xe &&
          e.jsx(XK, {
            config: xe,
            npcs: w,
            contacts: _,
            currentUser: A,
            userPersona: k,
            onEndLive: pe,
          }),
        R && e.jsx(tq, { record: R, onClose: se }),
      ],
    });
  },
  Wq = ({ onClose: t, showPhoneCase: s, caseSize: n }) =>
    e.jsx(wC, {
      children: e.jsx(Hq, { onClose: t, showPhoneCase: s, caseSize: n }),
    }),
  $C = "encounter_bazaar_idb_v1";
function M1() {
  return { v: 1, anonymousByContactId: {}, listings: [] };
}
async function Ep() {
  const t = await be.get($C, null);
  return !t || typeof t != "object"
    ? M1()
    : {
        ...M1(),
        ...t,
        anonymousByContactId:
          t.anonymousByContactId && typeof t.anonymousByContactId == "object"
            ? { ...t.anonymousByContactId }
            : {},
        listings: Array.isArray(t.listings) ? t.listings : [],
      };
}
async function vh(t) {
  await be.set($C, t);
}
async function Yq(t) {
  const s = String(t || "");
  if (!s) return null;
  const n = await Ep();
  let a = null;
  return (
    (n.listings = (n.listings || []).map((r) =>
      String(r.id) !== s
        ? r
        : ((a = { ...r, sold: !0, soldAt: Date.now() }), a),
    )),
    a && (await vh(n)),
    a ? n : null
  );
}
async function Vq(t, s) {
  const n = String(t || ""),
    a = String(s || "").trim();
  if (!n || !a) return null;
  const r = await Ep();
  let i = !1;
  return (
    (r.listings = (r.listings || []).map((o) =>
      String(o.id) !== n
        ? o
        : ((i = !0), { ...o, price: a, priceNegotiatedAt: Date.now() }),
    )),
    i && (await vh(r)),
    i ? r : null
  );
}
const wh = "encounter_bazaar_chat_threads_v1";
async function h4(t) {
  const s = String(t || "");
  if (!s) return { messages: [], negotiatedPrice: null, listingMeta: null };
  const a = (await be.get(wh, {}))[s];
  if (!a || typeof a != "object")
    return { messages: [], negotiatedPrice: null, listingMeta: null };
  const r = a.listingMeta;
  return {
    messages: Array.isArray(a.messages) ? a.messages : [],
    negotiatedPrice:
      a.negotiatedPrice != null ? String(a.negotiatedPrice) : null,
    listingMeta:
      r && typeof r == "object"
        ? {
            name: r.name != null ? String(r.name) : "",
            seller: r.seller != null ? String(r.seller) : "",
            contactId: r.contactId != null ? String(r.contactId) : "",
          }
        : null,
  };
}
async function Hx(t, { messages: s, negotiatedPrice: n, listingMeta: a } = {}) {
  const r = String(t || "");
  if (!r) return;
  const i = (await be.get(wh, {})) || {};
  if (typeof i != "object") return;
  const o = i[r] && typeof i[r] == "object" ? i[r] : {};
  let c = o.listingMeta;
  if (a && typeof a == "object") {
    const u = {
      name: a.name != null ? String(a.name) : "",
      seller: a.seller != null ? String(a.seller) : "",
      contactId: a.contactId != null ? String(a.contactId) : "",
    };
    c = {
      ...(o.listingMeta && typeof o.listingMeta == "object"
        ? o.listingMeta
        : {}),
      ...u,
    };
  }
  const d = c && typeof c == "object" && (c.name || c.seller || c.contactId);
  ((i[r] = {
    messages: Array.isArray(s) ? s : [],
    negotiatedPrice: n != null ? String(n) : null,
    updatedAt: Date.now(),
    ...(d ? { listingMeta: c } : {}),
  }),
    await be.set(wh, i));
}
async function Jq() {
  const t = (await be.get(wh, {})) || {};
  if (typeof t != "object") return [];
  let s;
  try {
    s = await Ep();
  } catch {
    s = { listings: [] };
  }
  const n = new Map((s.listings || []).map((r) => [String(r.id), r])),
    a = [];
  for (const [r, i] of Object.entries(t)) {
    if (!i || typeof i != "object") continue;
    const o = i.messages;
    if (!Array.isArray(o) || o.length === 0) continue;
    const c = n.get(String(r)),
      d =
        i.listingMeta && typeof i.listingMeta == "object" ? i.listingMeta : {},
      u = o[o.length - 1];
    let f = "";
    if ((u == null ? void 0 : u.type) === "order_card") f = "[订单] 已确认拍下";
    else if ((u == null ? void 0 : u.type) === "text") {
      const p = String(u.text || "").trim();
      f = u.isMe
        ? p
          ? `我：${p.slice(0, 72)}`
          : "我：…"
        : p.slice(0, 80) || "…";
    } else f = "…";
    a.push({
      kind: "bazaar",
      listingId: String(r),
      name: (c == null ? void 0 : c.name) || d.name || "匿名寄售",
      seller: (c == null ? void 0 : c.seller) || d.seller || "",
      subtitle: f,
      timestamp: typeof i.updatedAt == "number" ? i.updatedAt : Date.now(),
      hasOrder: o.some((p) => p && p.type === "order_card"),
    });
  }
  return a.sort((r, i) => (i.timestamp || 0) - (r.timestamp || 0));
}
const g4 = 2800;
function Kq(t) {
  return !t ||
    typeof t != "object" ||
    t.type === "system" ||
    t.sender === "system"
    ? ""
    : (typeof t.text == "string" && t.text.trim()) ||
        (t.type === "voice" && typeof t.text == "string")
      ? t.text.trim()
      : ["image", "sticker", "emoji"].includes(t.type)
        ? "[图片]"
        : "";
}
function qq(t) {
  const n = (Array.isArray(t) ? t : []).slice(-22),
    a = [];
  for (const i of n) {
    const o = Kq(i);
    if (!o) continue;
    const c = i.sender === "me" ? "用户" : "对方";
    a.push(`${c}：${o}`);
  }
  let r = a.join(`
`);
  return (r.length > g4 && (r = r.slice(-g4)), r.trim());
}
function Qq(t) {
  const s = Array.isArray(t) ? t : [],
    n = [];
  for (const a of s.slice(-36)) {
    if (!a) continue;
    if (a.type === "order_card") {
      n.push(
        "买家：[已在会话内发送订单卡片并确认收货信息；对你来说这笔已成交，挂牌已视为「卖掉了」，请按已售出来回应]",
      );
      continue;
    }
    if (a.type !== "text" || !a.text) continue;
    const r = a.isMe ? "买家" : "卖家";
    n.push(`${r}：${String(a.text).trim()}`);
  }
  return (
    n
      .join(
        `
`,
      )
      .trim() || "（尚无对话）"
  );
}
function Zq(t) {
  if (!t || typeof t != "object") return "";
  const s = [],
    n = (i, o) => {
      const c = String(o || "").trim();
      c &&
        s.push(`${i}
${c}`);
    };
  (n("【详细设定 setting】（须严格遵守语气、身份、口癖与价值观）", t.setting),
    n("【人设摘要 persona】", t.persona),
    n("【备注 remark】", t.remark),
    n("【个性签名】", t.signature));
  const a = [t.nickname, t.name].filter(Boolean).join(" / ");
  (a &&
    s.push(`【内部称呼·禁止在集市对白中使用或暗示】
${a}${t.gender ? ` · 性别 ${t.gender === "male" ? "男" : t.gender === "female" ? "女" : t.gender}` : ""}`),
    t.region &&
      s.push(`【地区背景】
${String(t.region).trim()}`));
  let r = s.join(`

`);
  return (
    r.length > 4200 &&
      (r =
        r.slice(0, 4200) +
        `
…`),
    r.trim()
  );
}
function b4(t) {
  if (!Array.isArray(t)) return [];
  const s = [];
  for (const n of t)
    if (typeof n == "string") {
      const a = n.trim();
      a && s.push({ text: a, translation: "" });
    } else if (n && typeof n == "object") {
      const a = String(n.text ?? "").trim();
      if (!a) continue;
      const r = n.translation != null ? String(n.translation).trim() : "";
      s.push({ text: a, translation: r });
    }
  return s;
}
function Xq(t) {
  const s = String(t || "").trim(),
    n = (o) => {
      try {
        return JSON.parse(o);
      } catch {
        return null;
      }
    },
    a = s.match(/\{[\s\S]*\}/);
  if (a) {
    const o = n(a[0]);
    if (o) return o;
  }
  const r = s.indexOf("{"),
    i = s.lastIndexOf("}");
  if (r >= 0 && i > r) {
    const o = n(s.slice(r, i + 1));
    if (o) return o;
  }
  return null;
}
function eQ(t) {
  const s = String(t || "").trim();
  if (/^¥\s*\d/.test(s)) return s.replace(/\s+/g, " ");
  const n = parseInt(String(t || "").replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? `¥ ${n.toLocaleString("zh-CN")}` : null;
}
function tQ(t) {
  var n;
  const s = /【\s*成交价\s*[¥￥]?\s*([\d,]+)\s*】/;
  for (let a = t.length - 1; a >= 0; a--) {
    const r = String(((n = t[a]) == null ? void 0 : n.text) || "").match(s);
    if (r) {
      const i = parseInt(r[1].replace(/,/g, ""), 10);
      if (Number.isFinite(i) && i > 0) return `¥ ${i.toLocaleString("zh-CN")}`;
    }
  }
  return null;
}
async function sQ({
  callApi: t,
  contact: s,
  chats: n,
  chatItem: a,
  bazaarMessages: r,
  getRoleBoundUser: i,
  realTimeTranslate: o = !1,
  dealLocked: c = !1,
}) {
  const d = a == null ? void 0 : a.contactId,
    u = (n || []).find(
      (S) => S && !S.isGroup && String(S.contactId) === String(d),
    ),
    f = qq((u == null ? void 0 : u.messages) || []),
    p = Zq(s),
    m = Qq(r),
    h = String((a == null ? void 0 : a.name) || ""),
    g = String((a == null ? void 0 : a.price) || ""),
    x = String(
      (a == null ? void 0 : a.spec) || (a == null ? void 0 : a.listBlurb) || "",
    ).slice(0, 400),
    y = !!(a && a.sold),
    w = `你在匿名二手集市当卖家，用微信私聊那种短句回复陌生买家。买家完全不知道你们在聊天 App 里的关系——不要暴露你们认识，不要叫真名、不要提聊天软件。

【角色信息·与聊天 App 角色页一致】你必须严格按下面人设说话：口癖、性格、教养、幽默方式、是否高冷/话痨等都要一致；这是同一个人在匿名卖货，不是换人设。
${p || "（未填写详细人设，则默认克制、礼貌的卖家）"}

【仅供把握说话习惯的、聊天 App 里最近私聊摘录（禁止在回复里暗示认识对方）】
${f || "（无摘录）"}

【当前挂牌】
标题：${h}
当前价：${g}
一点细节：${x}

【集市里你和对方已说的】
${m}
${
  c || y
    ? `

【成交状态·必须遵守】买家已在本会话内拍下并提交订单，物品已售/锁定。你已感知到：钱货路径走完了或正在走打包发货流程。
- 回复要符合这一事实：可以聊打包、发货时间、感谢、轻微吐槽或售后口吻的短句，**禁止**再劝对方「快拍」「还能刀」「再考虑下」。
- **禁止**再议价或改价：JSON 字段 newPrice 必须为 null，正文里也不要写【成交价】或降价话术。`
    : ""
}

任务：根据上文，以卖家口吻连续写 4～8 条回复。要像真人微信：短、快、可有梗。
${c || y ? "**已成交**：只围绕已卖出之后的情境回复（打包、发货、感谢、梗），newPrice 必须为 null。" : '未拍下前可以松口改价；若你决定降价/成交价变了，必须输出 JSON 字段 newPrice（如 "¥ 520"），或在某条 text 里写一行【成交价¥数字】（二选一，不要重复）。'}
${
  o
    ? `

【双语展示·高优先级】用户在聊天 App 里为该角色开启了「实时翻译」。本集市气泡会分两行显示：上行原文、中间虚线、下行中文译文。
- lines 必须为对象数组，每项形如 {"text":"原文","translation":"简体中文译文"}。
- 若某条 text 含任何非中文（英日韩等），translation 必填，且为纯中文释义（禁止整句只写英文）；口语可略生硬但不能漏译。
- 若某条 text 从头到尾纯中文（可含数字与中文标点），translation 可写 null 或 ""（界面不显示译文区）。
- 不要把译文只写在 text 里而不填 translation。`
    : `

仅输出字符串数组 lines：["第一条","第二条",...]（每条为卖家原文，可中文或符合人设的外语）。`
}

仅输出一个 JSON（不要 markdown）：
${o ? '{"lines":[{"text":"…","translation":"…或null"},...],"newPrice":"¥ 数字" 或 null}' : '{"lines":["第一条","第二条",...],"newPrice":"¥ 数字" 或 null}'}

每条 text 不超过 40 字为宜（译文可略长），不要长篇。`,
    _ = { id: "encounter_bazaar_seller_ai", name: "匿名集市", setting: "" },
    A = typeof i == "function" ? i(s) : null,
    k = await t(
      [{ sender: "me", text: w }],
      s || _,
      "system_generation",
      {},
      [],
      [],
      [],
      !1,
      "",
      A || null,
      null,
      null,
      {},
    );
  if (k == null || typeof k != "string" || k.includes("请先在设置中配置API"))
    return { lineEntries: [], newPrice: null, error: "API 不可用或未配置" };
  const C = Xq(k);
  let M = [];
  if ((C && Array.isArray(C.lines) && (M = b4(C.lines)), M.length === 0)) {
    const S = String(k || "")
      .split(
        `
`,
      )
      .map((j) => j.replace(/^[\d.\s、-]+/, "").trim())
      .filter((j) => j.length > 0 && j.length < 120)
      .slice(0, 8);
    M = b4(S);
  }
  if (((M = M.slice(0, 8)), M.length === 0))
    return {
      lineEntries: [
        {
          text:
            c || y
              ? "单收到了，给你好好包一下，等我消息。"
              : "在呢，价好商量，你先说个数。",
          translation: "",
        },
      ],
      newPrice: null,
      error: null,
    };
  let E = null;
  return (
    C &&
      C.newPrice != null &&
      String(C.newPrice).trim() &&
      (E = eQ(C.newPrice)),
    E || (E = tQ(M)),
    E &&
      (M = M.map((S) => ({
        text: String(S.text)
          .replace(/【\s*成交价\s*[¥￥]?\s*[\d,]+\s*】/g, "")
          .trim(),
        translation: S.translation || "",
      })).filter((S) => S.text)),
    (c || y) && (E = null),
    { lineEntries: M, newPrice: E, error: null }
  );
}
const y4 = 3200,
  v4 = 48;
function nQ(t) {
  let s = 2166136261;
  const n = String(t || "");
  for (let a = 0; a < n.length; a++)
    ((s ^= n.charCodeAt(a)), (s = Math.imul(s, 16777619)));
  return s >>> 0;
}
function FC() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}
function w4(t, s) {
  var c, d;
  const n = String(s);
  if (
    (c = t.anonymousByContactId[n]) != null &&
    c.anonId &&
    (d = t.anonymousByContactId[n]) != null &&
    d.sellerHandle
  )
    return t.anonymousByContactId[n];
  const a = nQ(`${n}|encounter_bazaar_anon_v1`),
    r = ["锈廊", "夜摊", "匿集", "VOID", "灰市", "余温", "隙光"],
    i = `${r[a % r.length]}_${(a >>> 0).toString(16).slice(0, 5)}`,
    o = `an_${a.toString(36)}_${FC().slice(-6)}`;
  return (
    (t.anonymousByContactId[n] = { anonId: o, sellerHandle: i }),
    t.anonymousByContactId[n]
  );
}
function aQ(t) {
  return !t ||
    typeof t != "object" ||
    t.type === "system" ||
    t.sender === "system"
    ? ""
    : (typeof t.text == "string" && t.text.trim()) ||
        (t.type === "voice" && typeof t.text == "string")
      ? t.text.trim()
      : ["image", "sticker", "emoji"].includes(t.type)
        ? "[图片]"
        : "";
}
function rQ(t) {
  const n = (Array.isArray(t) ? t : []).slice(-28),
    a = [];
  for (const i of n) {
    const o = aQ(i);
    if (!o) continue;
    const c = i.sender === "me" ? "用户" : "对方";
    a.push(`${c}：${o}`);
  }
  let r = a.join(`
`);
  return (r.length > y4 && (r = r.slice(-y4)), r.trim());
}
function iQ(t, s) {
  const n = new Map((s || []).map((r) => [String(r.id), r])),
    a = [];
  for (const r of t || []) {
    if (!r || r.isGroup) continue;
    const i = r.contactId != null ? String(r.contactId) : "";
    if (!i || i === String(io)) continue;
    const o = n.get(i);
    if (!o || Si(o)) continue;
    const c = rQ(r.messages);
    c.length < 24 || a.push({ contactId: i, contact: o, snippet: c });
  }
  return a;
}
function oQ(t) {
  if (t.length === 0) return [];
  const s = Math.random() < 0.42,
    n = t[Math.floor(Math.random() * t.length)];
  if (s || t.length === 1)
    return [
      { ref: "R1", ...n },
      { ref: "R2", ...n },
    ];
  let a = t[Math.floor(Math.random() * t.length)],
    r = 0;
  for (; String(a.contactId) === String(n.contactId) && r++ < 8; )
    a = t[Math.floor(Math.random() * t.length)];
  return [
    { ref: "R1", ...n },
    { ref: "R2", ...a },
  ];
}
function lQ(t, s) {
  const n = typeof s == "function" ? s : () => null,
    a = t.map((r) => {
      var f, p, m, h;
      const i = !!((f = r.contact) != null && f.boundUserPresetId),
        o = n(r.contact) || {},
        c = String((o == null ? void 0 : o.name) || "").trim(),
        d = String((o == null ? void 0 : o.settings) ?? "")
          .trim()
          .slice(0, 400);
      let u;
      return (
        i
          ? (u = `【绑定用户·非全局默认】该角色在聊天 App 中勾选了**单独用户预设**。侧写线索（禁止在标题/详情写真实姓名、微信号、手机号）：展示名 vibe「${c || "TA"}」；人设摘要节选：${d ? d.slice(0, 280) : "（无）"}。可据此写「绑定对象送的礼物/吵架后出清」等剧情，须匿名、有梗。`)
          : (u = `【用户侧】该角色未单独绑定预设，当前等同全局「我」人设。可参考单聊里用户口吻推断赠与/转卖动机（展示名参考「${c || "用户"}」），勿写可识别隐私。`),
        {
          ref: r.ref,
          persona: String(
            ((p = r.contact) == null ? void 0 : p.setting) ||
              ((m = r.contact) == null ? void 0 : m.remark) ||
              ((h = r.contact) == null ? void 0 : h.signature) ||
              "",
          ).slice(0, 2400),
          chatSnippet: r.snippet,
          boundUserHint: u,
        }
      );
    });
  return JSON.stringify(a, null, 0);
}
function cQ(t) {
  let s = String(t || "")
    .replace(/\s+/g, "")
    .replace(/[`"'<>]/g, "")
    .trim();
  return /^[\d_\-]+$/.test(s) || s.length < 4 ? "" : s.slice(0, 40);
}
function dQ(t) {
  let s = String(t || "")
    .trim()
    .replace(/[`"'<>]/g, "")
    .replace(/\s+/g, " ");
  return s.length < 2 ? "" : s.slice(0, 28);
}
function uQ(t, s) {
  const n = new Map();
  for (const a of t) {
    const r = String((a == null ? void 0 : a.ref) || "").toUpperCase(),
      i = s[r];
    if (!i || n.has(String(i))) continue;
    const o = cQ(
        (a == null ? void 0 : a.anonPublicId) ??
          (a == null ? void 0 : a.anonId),
      ),
      c = dQ(
        (a == null ? void 0 : a.anonSellerHandle) ??
          (a == null ? void 0 : a.sellerHandle),
      );
    o && c && n.set(String(i), { anonId: o, sellerHandle: c });
  }
  return n;
}
function fQ(t) {
  return `你是匿名二手集市（风格参照闲鱼）的文案生成器。根据角色的「人设摘要」「绑定用户线索」「最近单聊摘录」推断 TA 会挂什么、怎么吆喝；禁止输出真实姓名、手机号、具体地址。这是匿名出清，语气要活人感、网感，可适度标题党、玩梗、带一点「懒得废话」的直给，角色不必害羞。

输入（代号 REF 仅用于对应条目，勿在文案里写 R1/R2；boundUserHint 勿照抄进标题）：
${t}

请输出**仅一个** JSON 对象（不要 markdown 围栏），格式：
{
  "items": [
    {
      "ref": "R1" 或 "R2",
      "anonPublicId": "8–20 字：网感匿名身份/摊位号，像闲鱼卖家ID或贴吧网名，有梗、贴合人设；可中英混用少量字母；禁止纯数字乱码、禁止无意义 hex、禁止手机号样式",
      "anonSellerHandle": "2–14 字：卡片上展示的卖家署名，气质与人设一致，可读可记",
      "title": "中文商品标题，闲鱼风，可标题党、可带少量 emoji，8–22 字",
      "tag": "中文短标签 2–6 字，如 仅拆封 / 搬家出 / 买多了",
      "appearanceDesc": "50–120 字：纯文字描写物品外观与实物感——颜色、材质、磨损、配件、尺寸感、旧化痕迹等，像买家会看的实拍说明，不要写诗、不要加引号、不要抽象比喻堆砌",
      "spec": "中文较长规格说明：入手渠道 vibe、虚构发货地城市即可、成色细节、交易说明口吻，勿真实隐私",
      "condition": "中文短成色标签，如 九五新 / 仅试穿 / 功能完好",
      "intro": "中文详情介绍 2–5 句：为什么出、人设口吻、不尬不装",
      "hookLine": "中文 12–30 字：引流嘴炮/卖点吐槽一句，网感，非外观描写",
      "price": "¥ 整数价格（200–9800 间随意）",
      "comments": [
        { "handle": "@中文网名感", "text": "中文评论一条，玩梗或抬杠，活人感" },
        { "handle": "@另一中文网名", "text": "中文评论一条" }
      ]
    }
  ]
}

规则：
- 必须恰好 2 条 items；两条可同一角色或不同角色，由人设与摘录决定。
- **商品/服务题材（前提是必须符合人设，可搞笑可离谱但要自洽）**：除常见闲置外，还可出现——聊天 App **绑定用户（非全局默认）**送的礼物、舔狗送的被女神退回的、租自己（时间/陪聊 vibe，禁止违法色情明示）、**上门喂猫**、**代吵架/代骂**（赛博嘴替、禁止教唆真实违法）、晚安/早起提醒、算情感/赛博塔罗 vibe、**代排队**、衣服鞋包、收藏品、数码、手作等；服务类用「可约」「档期」「不接急单」等闲鱼口吻写进 spec/intro，appearanceDesc 可描写交付形式（小票、录音条样式、卡片装帧等）而非只有实体物。
- **anonPublicId / anonSellerHandle**：每条必须填写；若两条 items 对应**同一角色**（同人出双坑），两组匿名 ID **必须完全一致**，便于该角色长期沿用同一匿名马甲。
- 商品动机示例：绑定对象送的不要了、前任送的、买重复了、戒断清柜、手作多做了一个、女神退回的舔狗礼物（用自嘲梗写，禁止侮辱特定群体实名）。
- appearanceDesc 在列表与详情「图片区」共用，必须一致是外观陈述体。
- comments 固定 2 条，全中文。`;
}
function mQ(t) {
  const s = String(t || "").trim(),
    n = (o) => {
      try {
        return JSON.parse(o);
      } catch {
        return null;
      }
    };
  let a = s.match(/\{[\s\S]*\}/);
  if (a) {
    const o = n(a[0]);
    if (o) return o;
  }
  const r = s.indexOf("{"),
    i = s.lastIndexOf("}");
  if (r >= 0 && i > r) {
    const o = n(s.slice(r, i + 1));
    if (o) return o;
  }
  return null;
}
function pQ(t) {
  const s = String(t || "").trim();
  if (/^¥\s*\d/.test(s)) return s;
  const n = parseInt(String(t || "").replace(/[^\d]/g, ""), 10);
  return Number.isFinite(n) && n > 0
    ? `¥ ${n.toLocaleString("zh-CN")}`
    : "¥ 520";
}
async function xQ({ chats: t, contacts: s, callApi: n, getRoleBoundUser: a }) {
  let r = await Ep();
  r.v || (r = { ...M1(), ...r });
  const i = iQ(t, s);
  if (i.length === 0)
    return (
      await vh(r),
      {
        state: r,
        added: 0,
        error: "暂无可用单聊：请先在聊天 App 中与角色私聊几句，再刷新。",
      }
    );
  const o = oQ(i),
    c = { R1: o[0].contactId, R2: o[1].contactId },
    d = lQ(o, a),
    u = fQ(d),
    p = await n(
      [{ sender: "me", text: u }],
      { id: "encounter_bazaar_gen", name: "匿名集市", setting: "" },
      "system_generation",
      {},
      [],
      [],
      [],
      !1,
      "",
      null,
      null,
      null,
      {},
    );
  if (p == null || typeof p != "string")
    return {
      state: r,
      added: 0,
      error: "无法调用聊天 API，请从桌面进入聊天 App 并确认 API 已配置。",
    };
  if (p.includes("请先在设置中配置API"))
    return { state: r, added: 0, error: "请先在设置中配置 API。" };
  const m = mQ(p),
    h = m && Array.isArray(m.items) ? m.items : null;
  if (!h || h.length === 0)
    return { state: r, added: 0, error: "模型未返回有效 JSON，请稍后重试。" };
  const g = uQ(h, c);
  for (const v of o) {
    const b = String(v.contactId),
      N = g.get(b);
    N
      ? (r.anonymousByContactId[b] = {
          anonId: N.anonId,
          sellerHandle: N.sellerHandle,
        })
      : w4(r, b);
  }
  const x = Date.now();
  let y = 0;
  for (let v = 0; v < Math.min(2, h.length); v++) {
    const b = h[v] || {},
      N = String(b.ref || (v === 0 ? "R1" : "R2")).toUpperCase(),
      w = c[N] || c.R1;
    if (!w) continue;
    const _ = String(b.title || "未命名寄售")
        .trim()
        .slice(0, 48),
      A = String(b.tag || "寄售")
        .trim()
        .slice(0, 12),
      k = String(b.appearanceDesc || b.listBlurb || b.spec || "")
        .trim()
        .slice(0, 220),
      C = k.slice(0, 120),
      M = String(b.spec || k)
        .trim()
        .slice(0, 800),
      E = String(b.condition || "闲置出清")
        .trim()
        .slice(0, 64),
      S = String(b.intro || "")
        .trim()
        .slice(0, 1200),
      j = String(b.hookLine || b.desc || "")
        .trim()
        .slice(0, 80),
      T = pQ(b.price),
      I = Array.isArray(b.comments)
        ? b.comments
            .slice(0, 4)
            .map((F) => ({
              user: String(
                (F == null ? void 0 : F.handle) ||
                  (F == null ? void 0 : F.user) ||
                  "@_",
              )
                .trim()
                .slice(0, 32),
              text: String((F == null ? void 0 : F.text) || "")
                .trim()
                .slice(0, 200),
            }))
            .filter((F) => F.text)
        : [],
      L = r.anonymousByContactId[String(w)] || w4(r, w),
      B = {
        id: `${x}_${v}_${FC()}`,
        contactId: String(w),
        anonId: L.anonId,
        seller: L.sellerHandle,
        name: _,
        price: T,
        tag: A,
        appearanceDesc: k,
        listBlurb: C,
        spec: M,
        condition: E,
        intro: S,
        hookLine: j,
        desc: j,
        comments: I.length
          ? I
          : [{ user: "@路人甲", text: "这描述有点东西，先蹲一下。" }],
        sourceRef: N,
        createdAt: x,
      };
    ((r.listings = [B, ...(r.listings || [])]), (y += 1));
  }
  return (
    r.listings.length > v4 && (r.listings = r.listings.slice(0, v4)),
    await vh(r),
    y === 0
      ? {
          state: r,
          added: 0,
          error: "本轮未写入新条目，请稍后重试或检查模型返回。",
        }
      : { state: r, added: y, error: void 0 }
  );
}
const hQ =
  "'PingFang SC','Hiragino Sans GB','Microsoft YaHei',system-ui,sans-serif";
function gQ(t) {
  const s = String(t || "");
  let n = 0;
  for (let a = 0; a < s.length; a++) n = (n * 31 + s.charCodeAt(a)) >>> 0;
  return 1e3 + (n % 9e3);
}
function j4(t) {
  const s = String(t || "NV").replace(/\s/g, "");
  return s.length >= 2 ? s.slice(0, 2).toUpperCase() : "NV";
}
function N4(t) {
  return (
    (t && String(t.appearanceDesc || t.listBlurb || t.spec || "—").trim()) ||
    "—"
  );
}
function bQ({ className: t = "" }) {
  return e.jsx("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    className: t,
    "aria-hidden": !0,
    children: e.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M18 6L6 18M6 6l12 12",
    }),
  });
}
function k4({ className: t = "" }) {
  return e.jsx("div", {
    className: `pointer-events-none select-none ${t}`,
    "aria-hidden": !0,
    children: e.jsxs("div", {
      className:
        "relative border-[2.5px] border-[#E2A6B7] rounded-[2px] px-2.5 py-1.5 shadow-[0_0_0_1px_rgba(226,166,183,0.15),inset_0_0_12px_rgba(226,166,183,0.08)]",
      style: {
        transform: "rotate(-14deg)",
        fontFamily:
          "'Playfair Display','Times New Roman','Noto Serif SC',serif",
      },
      children: [
        e.jsx("div", {
          className:
            "relative z-[1] text-[11px] font-semibold tracking-[0.15em] text-[#E2A6B7] leading-none",
          children: "卖掉了",
        }),
        e.jsx("div", {
          className:
            "absolute inset-0 z-0 opacity-[0.14] bg-[repeating-linear-gradient(-45deg,transparent,transparent_2px,rgba(226,166,183,0.45)_2px,rgba(226,166,183,0.45)_3px)] rounded-[1px] pointer-events-none",
        }),
      ],
    }),
  });
}
const yQ = ({ className: t = "", size: s = 22 }) =>
    e.jsx("svg", {
      width: s,
      height: s,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      className: t,
      "aria-hidden": !0,
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.2",
        d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      }),
    }),
  vQ = ({ className: t = "", size: s = 22 }) =>
    e.jsx("svg", {
      width: s,
      height: s,
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      className: t,
      "aria-hidden": !0,
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M14 5l7 7-7 7M5 12h16",
      }),
    });
function wQ() {
  return e.jsx("div", {
    className: "flex justify-start items-end overflow-x-hidden",
    "aria-live": "polite",
    "aria-label": "对方正在输入",
    children: e.jsxs("div", {
      className:
        "ml-2 px-4 py-3 rounded-[18px] bg-[rgba(15,15,15,0.8)] border border-white/[0.05] shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center gap-[5px]",
      children: [
        e.jsx("span", {
          className:
            "encounter-bazaar-typing-dot h-1.5 w-1.5 rounded-full bg-[#E2A6B7] shrink-0",
        }),
        e.jsx("span", {
          className:
            "encounter-bazaar-typing-dot h-1.5 w-1.5 rounded-full bg-[#E2A6B7] shrink-0",
        }),
        e.jsx("span", {
          className:
            "encounter-bazaar-typing-dot h-1.5 w-1.5 rounded-full bg-[#E2A6B7] shrink-0",
        }),
      ],
    }),
  });
}
function jQ({
  item: t,
  recipientName: s,
  phone: n,
  address: a,
  refCode: r = "NOCT-8821",
}) {
  const i = String(n || "").trim(),
    o = { fontFamily: "'Playfair Display', Georgia, 'Noto Serif SC', serif" };
  return e.jsxs("div", {
    className:
      "w-full text-left bg-[#f5f2ed] text-[#0a0a0a] border-2 border-[#0a0a0a] shadow-[6px_6px_0_0_rgba(226,166,183,0.95)] overflow-hidden",
    children: [
      e.jsxs("div", {
        className: "flex border-b-2 border-[#0a0a0a]",
        children: [
          e.jsx("div", {
            className: "w-2.5 shrink-0 bg-[#E2A6B7]",
            "aria-hidden": !0,
          }),
          e.jsxs("div", {
            className: "flex-1 min-w-0 px-3.5 py-3.5 sm:px-4 sm:py-4",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-wrap justify-between items-baseline gap-2 border-b border-[#0a0a0a]/25 pb-2 mb-2.5",
                children: [
                  e.jsx("span", {
                    className:
                      "text-[9px] font-bold tracking-[0.28em] uppercase text-[#0a0a0a]",
                    children: "Nocturnal · Order",
                  }),
                  e.jsx("span", {
                    className:
                      "font-mono text-[9px] tracking-tight text-neutral-600",
                    children: r,
                  }),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-[8px] tracking-[0.22em] uppercase text-neutral-500 mb-1",
                children: "已拍下 · 归档凭证",
              }),
              e.jsx("h4", {
                className:
                  "text-[1.15rem] sm:text-xl font-semibold leading-[1.2] tracking-[-0.02em]",
                style: o,
                children: (t == null ? void 0 : t.name) || "—",
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "px-3.5 py-3.5 sm:px-4 sm:py-4 space-y-3 bg-[#fffefb]",
        children: [
          e.jsxs("div", {
            className:
              "border-2 border-[#0a0a0a] p-3 grid grid-cols-[4.5rem_1fr] gap-x-2 gap-y-2.5 text-[12px] leading-snug",
            children: [
              e.jsx("span", {
                className:
                  "text-[9px] font-bold uppercase tracking-[0.12em] text-neutral-500",
                children: "收货人",
              }),
              e.jsx("span", {
                className: "font-semibold text-[#0a0a0a]",
                children: s || "—",
              }),
              e.jsx("span", {
                className:
                  "text-[9px] font-bold uppercase tracking-[0.12em] text-neutral-500",
                children: "电话",
              }),
              e.jsx("span", {
                className: "font-mono text-[13px] tracking-tight",
                children: i || "—",
              }),
              e.jsx("span", {
                className:
                  "text-[9px] font-bold uppercase tracking-[0.12em] text-neutral-500 self-start pt-0.5",
                children: "地址",
              }),
              e.jsx("span", {
                className: "text-[12px] leading-relaxed",
                children: a || "—",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex flex-wrap justify-between items-end gap-2 border-t-2 border-[#0a0a0a] pt-3",
            children: [
              e.jsx("span", {
                className:
                  "text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-600",
                children: "成交价",
              }),
              e.jsx("span", {
                className:
                  "text-[1.35rem] sm:text-2xl font-semibold text-[#9d3f58] tabular-nums",
                style: o,
                children: (t == null ? void 0 : t.price) || "—",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const NQ = "calc(96px + env(safe-area-inset-top, 0px))",
  kQ = "calc(5.75rem + env(safe-area-inset-top, 0px))";
function Wx(t) {
  if (!t || typeof t != "object") return;
  const s = {};
  return (
    t.name != null && String(t.name).trim() && (s.name = String(t.name).trim()),
    t.seller != null &&
      String(t.seller).trim() &&
      (s.seller = String(t.seller).trim()),
    t.contactId != null &&
      String(t.contactId).trim() &&
      (s.contactId = String(t.contactId).trim()),
    Object.keys(s).length ? s : void 0
  );
}
const SQ = ({
  onClose: t,
  onOverlayDepthChange: s,
  bazaarResumeRequest: n,
  onBazaarResumeConsumed: a,
  onLeaveChatToEchoes: r,
}) => {
  var we;
  const {
      chats: i,
      contacts: o,
      callApi: c,
      getRoleBoundUser: d,
      deductFromWallet: u,
    } = vn(),
    [f, p] = l.useState([]),
    [m, h] = l.useState(!1),
    [g, x] = l.useState(""),
    [y, v] = l.useState(null),
    [b, N] = l.useState(!1),
    [w, _] = l.useState(null),
    [A, k] = l.useState(() => new Set()),
    [C, M] = l.useState([]),
    [E, S] = l.useState(""),
    [j, T] = l.useState(!1),
    [I, L] = l.useState(""),
    [B, F] = l.useState(""),
    [D, $] = l.useState(""),
    P = l.useRef(null),
    z = l.useId(),
    O = l.useRef(null),
    [Z, K] = l.useState(!1),
    [q, V] = l.useState(""),
    [ne, le] = l.useState(!1),
    ie = l.useRef(null),
    X = l.useRef([]),
    je = l.useRef(null);
  (l.useEffect(() => {
    X.current = C;
  }, [C]),
    l.useEffect(() => {
      je.current = w;
    }, [w]));
  const xe = y || b ? 1 : 0;
  (l.useEffect(() => {
    s == null || s(xe > 0);
  }, [xe, s]),
    l.useEffect(() => () => (s == null ? void 0 : s(!1)), [s]));
  const ye = l.useCallback(async () => {
      const Q = await Ep();
      p(Array.isArray(Q.listings) ? Q.listings : []);
    }, []),
    [R, oe] = l.useState(!1);
  (l.useEffect(() => {
    let Q = !0;
    return (
      (async () => {
        try {
          await ye();
        } finally {
          Q && oe(!0);
        }
      })(),
      () => {
        Q = !1;
      }
    );
  }, [ye]),
    l.useEffect(
      () => () => {
        O.current && clearTimeout(O.current);
      },
      [],
    ));
  const ee = l.useCallback(async () => {
      if (!m) {
        (h(!0), x(""));
        try {
          const {
            state: Q,
            added: ve,
            error: Ve,
          } = await xQ({
            chats: i,
            contacts: o,
            callApi: c,
            getRoleBoundUser: d,
          });
          (p(Array.isArray(Q.listings) ? Q.listings : []),
            x(Ve || `已追加 ${ve} 条寄售`));
        } catch (Q) {
          x((Q == null ? void 0 : Q.message) || "刷新失败");
        } finally {
          (h(!1),
            O.current && clearTimeout(O.current),
            (O.current = setTimeout(() => x(""), 5e3)));
        }
      }
    }, [m, i, o, c, d]),
    H = l.useCallback((Q) => {
      (v(Q), N(!1), _(null), M([]), T(!1), S(""), V(""), le(!1));
    }, []),
    Y = l.useCallback(() => {
      (v(null), N(!1), _(null), M([]), T(!1), S(""), V(""), le(!1));
    }, []),
    U = l.useCallback(async () => {
      const Q = je.current,
        ve = X.current;
      if (Q != null && Q.id)
        try {
          await Hx(Q.id, {
            messages: ve,
            negotiatedPrice: (Q == null ? void 0 : Q.price) || null,
            listingMeta: Wx(Q),
          });
        } catch {}
      (N(!1), T(!1), V(""));
    }, []),
    ce = l.useCallback((Q, ve) => {
      (Q.stopPropagation(),
        k((Ve) => {
          const Ae = new Set(Ve);
          return (Ae.has(ve) ? Ae.delete(ve) : Ae.add(ve), Ae);
        }));
    }, []),
    pe = l.useCallback((Q) => {
      M((ve) => [...ve, Q]);
    }, []),
    se = l.useCallback(() => {
      const Q = E.trim();
      Q &&
        (pe({ id: `m-${Date.now()}`, isMe: !0, type: "text", text: Q }), S(""));
    }, [E, pe]),
    Te = l.useMemo(() => C.some((Q) => Q.type === "order_card"), [C]),
    ke = l.useMemo(
      () =>
        w != null && w.contactId
          ? ((i || []).find(
              (Q) =>
                Q && !Q.isGroup && String(Q.contactId) === String(w.contactId),
            ) ?? null)
          : null,
      [i, w == null ? void 0 : w.contactId],
    ),
    W = !!((we = ke == null ? void 0 : ke.settings) != null && we.realTime);
  (l.useEffect(() => {
    if (!b || !(w != null && w.id)) return;
    let Q = !1;
    return (
      (async () => {
        const ve = await h4(w.id);
        if (
          !Q &&
          (M(Array.isArray(ve.messages) ? ve.messages : []), ve.negotiatedPrice)
        ) {
          const Ve = ve.negotiatedPrice;
          (_((Ae) =>
            Ae && String(Ae.id) === String(w.id) ? { ...Ae, price: Ve } : Ae,
          ),
            v((Ae) =>
              Ae && String(Ae.id) === String(w.id) ? { ...Ae, price: Ve } : Ae,
            ),
            p((Ae) =>
              Ae.map((te) =>
                String(te.id) === String(w.id) ? { ...te, price: Ve } : te,
              ),
            ));
        }
      })(),
      () => {
        Q = !0;
      }
    );
  }, [b, w == null ? void 0 : w.id]),
    l.useEffect(() => {
      if (!(!b || !(w != null && w.id)))
        return (
          ie.current && clearTimeout(ie.current),
          (ie.current = setTimeout(() => {
            Hx(w.id, {
              messages: C,
              negotiatedPrice: (w == null ? void 0 : w.price) || null,
              listingMeta: Wx(w),
            });
          }, 450)),
          () => {
            ie.current && clearTimeout(ie.current);
          }
        );
    }, [
      C,
      b,
      w == null ? void 0 : w.id,
      w == null ? void 0 : w.price,
      w == null ? void 0 : w.name,
      w == null ? void 0 : w.seller,
    ]),
    l.useEffect(() => {
      if (!(n != null && n.listingId)) return;
      const Q = String(n.listingId);
      let ve = !1;
      return (
        (async () => {
          let Ve = f.find((Ae) => String(Ae.id) === Q);
          if (!(!Ve && !R)) {
            if (!Ve) {
              const Ae = await h4(Q);
              if (ve) return;
              if (!(Array.isArray(Ae.messages) && Ae.messages.length > 0)) {
                a == null || a();
                return;
              }
              const Se = Ae.listingMeta || {},
                Fe = Ae.messages.some(
                  (tt) => (tt == null ? void 0 : tt.type) === "order_card",
                ),
                $e = Se.contactId != null ? String(Se.contactId).trim() : "";
              Ve = {
                id: Q,
                name: Se.name || "寄售",
                seller: Se.seller || "NV",
                price: Ae.negotiatedPrice || "¥ 0",
                sold: Fe,
                contactId: $e || void 0,
                intro: "",
                spec: "",
                condition: "",
                tag: "",
                listBlurb: "",
                appearanceDesc: "",
              };
            }
            ve ||
              (v(Ve),
              n.openChat && (_(Ve), N(!0), le(n.fromEchoes === !0)),
              a == null || a());
          }
        })(),
        () => {
          ve = !0;
        }
      );
    }, [n, f, R, a]));
  const ue = l.useCallback(async () => {
    if (!(w != null && w.contactId) || Z) return;
    const Q = o.find((ve) => String(ve.id) === String(w.contactId));
    if (!Q) {
      (V("找不到对应角色联系人"), setTimeout(() => V(""), 3200));
      return;
    }
    (K(!0), V(""));
    try {
      const ve = Te || !!(w != null && w.sold),
        {
          lineEntries: Ve,
          newPrice: Ae,
          error: te,
        } = await sQ({
          callApi: c,
          contact: Q,
          chats: i,
          chatItem: w,
          bazaarMessages: C,
          getRoleBoundUser: d,
          realTimeTranslate: W,
          dealLocked: ve,
        });
      if (!Ve || Ve.length === 0) {
        (V(te || "生成失败"), setTimeout(() => V(""), 4e3));
        return;
      }
      const Se = Ve.map((tt, Xe) => {
          const ht = String(tt.translation || "").trim();
          return {
            id: `them-${Date.now()}-${Xe}`,
            isMe: !1,
            type: "text",
            text: tt.text,
            ...(ht ? { translation: ht } : {}),
          };
        }),
        Fe = [...C, ...Se];
      M(Fe);
      let $e = w.price;
      (Ae &&
        (($e = Ae),
        await Vq(w.id, Ae),
        _((tt) => tt && { ...tt, price: Ae }),
        v((tt) =>
          tt && String(tt.id) === String(w.id) ? { ...tt, price: Ae } : tt,
        ),
        p((tt) =>
          tt.map((Xe) =>
            String(Xe.id) === String(w.id) ? { ...Xe, price: Ae } : Xe,
          ),
        )),
        await Hx(w.id, {
          messages: Fe,
          negotiatedPrice: $e,
          listingMeta: Wx(w),
        }));
    } catch (ve) {
      (V((ve == null ? void 0 : ve.message) || "请求失败"),
        setTimeout(() => V(""), 4e3));
    } finally {
      K(!1);
    }
  }, [w, o, i, c, d, C, Te, Z, W, w == null ? void 0 : w.sold]);
  l.useEffect(() => {
    !b || !P.current || P.current.scrollIntoView({ behavior: "smooth" });
  }, [C, b, Z]);
  const re = l.useCallback(async () => {
      const Q = I.trim(),
        ve = D.trim(),
        Ve = B.trim();
      if (!Q || !ve) return;
      const Ae = w == null ? void 0 : w.id;
      if (!w || !Ae) return;
      const te = parseFloat(String(w.price || "").replace(/[^\d.]/g, ""));
      if (Number.isFinite(te) && te > 0)
        try {
          u(te, `匿名集市·${String(w.name || "商品").slice(0, 40)}`, void 0);
        } catch (tt) {
          const Xe = (tt == null ? void 0 : tt.message) || "支付失败";
          (V(Xe), setTimeout(() => V(""), 5e3));
          return;
        }
      T(!1);
      const Fe = {
          id: `order-${Date.now()}`,
          isMe: !0,
          type: "order_card",
          item: { ...w },
          recipientName: Q,
          address: ve,
          phone: Ve,
        },
        $e = [...C, Fe];
      M($e);
      try {
        await Hx(Ae, {
          messages: $e,
          negotiatedPrice: w.price || null,
          listingMeta: Wx(w),
        });