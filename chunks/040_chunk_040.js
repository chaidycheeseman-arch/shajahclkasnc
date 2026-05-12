                    e.jsx("button", {
                      onClick: () => h(!1),
                      className:
                        "px-3 py-1.5 bg-gray-200 text-gray-500 rounded-lg text-xs font-bold",
                      children: "取消",
                    }),
                  ],
                }),
              f &&
                e.jsxs("div", {
                  className:
                    "bg-white p-4 rounded-2xl border border-gray-100 shadow-sm animate-in slide-in-from-top-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between mb-2",
                      children: [
                        e.jsxs("select", {
                          value: b,
                          onChange: (he) => N(he.target.value),
                          className:
                            "bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none focus:border-[#8d6e63] text-[#5d4037]",
                          children: [
                            e.jsx("option", { value: "", children: "未分类" }),
                            a.map((he) =>
                              e.jsx(
                                "option",
                                { value: he.id, children: he.name },
                                he.id,
                              ),
                            ),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: () => _(!w),
                          className:
                            "text-[10px] font-bold text-[#8d6e63] flex items-center gap-1 hover:underline",
                          children: [
                            e.jsx(ro, { size: 12 }),
                            w ? "切换单条添加" : "批量导入",
                          ],
                        }),
                      ],
                    }),
                    w
                      ? e.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            e.jsx("textarea", {
                              value: A,
                              onChange: (he) => k(he.target.value),
                              placeholder: `每行一个表情包，格式：
图片链接 含义
例如：
https://example.com/1.jpg 开心
https://example.com/2.jpg 难过`,
                              className:
                                "w-full h-32 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#8d6e63] resize-none",
                            }),
                            e.jsx("button", {
                              onClick: C,
                              className:
                                "w-full py-2 bg-[#8d6e63] text-white rounded-xl text-xs font-bold shadow-sm hover:bg-[#795548]",
                              children: "开始导入",
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: M,
                                  onChange: (he) => E(he.target.value),
                                  placeholder: "图片链接 (或点击右侧上传)",
                                  className:
                                    "flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#8d6e63]",
                                }),
                                e.jsx("button", {
                                  onClick: () => {
                                    const he = document.createElement("input");
                                    ((he.type = "file"),
                                      (he.accept = "image/*"),
                                      (he.onchange = async (ge) => {
                                        const J = ge.target.files[0];
                                        if (J)
                                          try {
                                            const G = await I(J, 800, 0.7);
                                            E(G);
                                          } catch {
                                            const we = new FileReader();
                                            ((we.onload = (Q) =>
                                              E(Q.target.result)),
                                              we.readAsDataURL(J));
                                          }
                                      }),
                                      he.click());
                                  },
                                  className:
                                    "p-2 bg-gray-100 rounded-xl text-gray-500 hover:bg-gray-200",
                                  children: e.jsx(Za, { size: 16 }),
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: S,
                              onChange: (he) => j(he.target.value),
                              placeholder: "表情含义 (例如: 开心, 疑惑)",
                              className:
                                "w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#8d6e63]",
                            }),
                            e.jsx("button", {
                              onClick: T,
                              className:
                                "w-full py-2 bg-[#8d6e63] text-white rounded-xl text-xs font-bold shadow-sm hover:bg-[#795548]",
                              children: "保存表情包",
                            }),
                          ],
                        }),
                  ],
                }),
            ],
          }),
          o &&
            e.jsxs("div", {
              className:
                "flex items-center justify-between bg-[#f2f0ea] p-3 rounded-xl mb-3 animate-in slide-in-from-top-2",
              children: [
                e.jsxs("span", {
                  className: "text-xs font-bold text-[#5d4037]",
                  children: ["已选 ", d.length, " 项"],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsxs("button", {
                      onClick: () => {
                        const he =
                          d.length === 1 && n.find((ge) => ge.id === d[0]);
                        he && (R == null || R(he));
                      },
                      disabled: d.length !== 1,
                      className:
                        "px-3 py-1.5 bg-white text-[#8d6e63] rounded-lg text-xs font-bold shadow-sm disabled:opacity-50 flex items-center gap-1",
                      children: [e.jsx(_l, { size: 14 }), "编辑"],
                    }),
                    e.jsx("button", {
                      onClick: () => L(!0),
                      disabled: d.length === 0,
                      className:
                        "px-3 py-1.5 bg-white text-[#8d6e63] rounded-lg text-xs font-bold shadow-sm disabled:opacity-50",
                      children: "添加到...",
                    }),
                    e.jsx("button", {
                      onClick: B,
                      disabled: d.length === 0,
                      className:
                        "px-3 py-1.5 bg-red-500 text-white rounded-lg text-xs font-bold shadow-sm disabled:opacity-50",
                      children: "删除",
                    }),
                  ],
                }),
              ],
            }),
          e.jsxs("div", {
            className:
              "flex-1 overflow-y-auto no-scrollbar grid grid-cols-4 gap-2 content-start pb-6",
            children: [
              re.map((he, ge) => {
                const J = d.includes(he.id);
                return e.jsxs(
                  "div",
                  {
                    className: `
                    aspect-square relative group cursor-pointer rounded-xl overflow-hidden border bg-white shadow-sm transition-all flex items-center justify-center min-h-[72px]
                    ${o && J ? "border-[#8d6e63] ring-2 ring-[#8d6e63] ring-offset-1" : "border-gray-100 hover:shadow-md"}
                  `,
                    onClick: () => F(he),
                    children: [
                      e.jsx("img", {
                        src: he.url,
                        alt: he.meaning,
                        className: "w-full h-full object-contain",
                        loading: ge < 32 ? "eager" : "lazy",
                        decoding: ge < 32 ? "sync" : "async",
                      }),
                      o &&
                        e.jsx("div", {
                          className: `absolute inset-0 flex items-center justify-center transition-colors ${J ? "bg-[#8d6e63]/20" : "bg-transparent"}`,
                          children: e.jsx("div", {
                            className: `w-5 h-5 rounded-full border-2 flex items-center justify-center ${J ? "bg-[#8d6e63] border-[#8d6e63]" : "border-white/80 bg-black/20"}`,
                            children:
                              J &&
                              e.jsx(On, { size: 12, className: "text-white" }),
                          }),
                        }),
                      !o &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors",
                            }),
                            e.jsx("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[2px] p-1 opacity-0 group-hover:opacity-100 transition-opacity",
                              children: e.jsx("p", {
                                className:
                                  "text-[10px] text-white text-center truncate",
                                children: he.meaning,
                              }),
                            }),
                          ],
                        }),
                    ],
                  },
                  he.id,
                );
              }),
              ue.length === 0 &&
                !f &&
                e.jsxs("div", {
                  className:
                    "col-span-4 flex flex-col items-center justify-center py-10 text-gray-400 gap-2",
                  children: [
                    e.jsx(c3, { size: 32, className: "opacity-50" }),
                    e.jsx("span", {
                      className: "text-xs",
                      children: "该分类下暂无表情包",
                    }),
                  ],
                }),
            ],
          }),
          $ &&
            z &&
            e.jsx(BW, {
              onClose: P,
              groupName: z.groupName,
              count: z.count,
              onCopy: () => (O == null ? void 0 : O(z)),
              onDownload: () => (Z == null ? void 0 : Z(z)),
            }),
          oe &&
            e.jsx(OW, {
              meme: oe,
              url: H,
              setUrl: Y,
              meaning: U,
              setMeaning: ce,
              onClose: ee,
              onSave: () => {
                oe != null &&
                  oe.id &&
                  ((H != null && H.trim()) || (U != null && U.trim())) &&
                  (pe == null ||
                    pe(oe.id, {
                      url: (H == null ? void 0 : H.trim()) || oe.url,
                      meaning: (U == null ? void 0 : U.trim()) ?? oe.meaning,
                    }),
                  ee == null || ee());
              },
              onCompressImage: I,
            }),
          q &&
            e.jsx(UW, {
              onClose: () => {
                (V == null || V(!1),
                  le == null || le(""),
                  je == null || je(""),
                  ye == null || ye(""));
              },
              pasteContent: ne,
              setPasteContent: le,
              onSubmit: ie,
              memeCategories: a,
              targetCategoryId: X,
              setTargetCategoryId: je,
              asNewGroupName: xe,
              setAsNewGroupName: ye,
            }),
        ],
      }),
    });
  },
  OW = ({
    meme: t,
    url: s,
    setUrl: n,
    meaning: a,
    setMeaning: r,
    onClose: i,
    onSave: o,
    onCompressImage: c,
  }) => {
    const d = () => {
      const u = document.createElement("input");
      ((u.type = "file"),
        (u.accept = "image/*"),
        (u.onchange = async (f) => {
          var m;
          const p = (m = f.target.files) == null ? void 0 : m[0];
          if (p)
            try {
              const h = await (c == null ? void 0 : c(p, 800, 0.7));
              n(h);
            } catch {
              const g = new FileReader();
              ((g.onload = (x) => {
                var y;
                return n(((y = x.target) == null ? void 0 : y.result) ?? "");
              }),
                g.readAsDataURL(p));
            }
        }),
        u.click());
    };
    return e.jsx("div", {
      className:
        "absolute inset-0 z-[90] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: i,
      children: e.jsxs("div", {
        className:
          "w-full max-w-sm bg-[#fffcf7] rounded-2xl shadow-2xl p-5 flex flex-col gap-3",
        onClick: (u) => u.stopPropagation(),
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-1",
            children: [
              e.jsx("h3", {
                className: "text-base font-bold text-[#5d4037]",
                children: "修改表情包",
              }),
              e.jsx("button", {
                onClick: i,
                className: "p-1 rounded-full hover:bg-gray-100 text-gray-500",
                children: e.jsx(Ts, { size: 20 }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-3 items-start",
            children: [
              e.jsx("div", {
                className:
                  "w-20 h-20 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0 flex items-center justify-center",
                children: e.jsx("img", {
                  src: s || (t == null ? void 0 : t.url),
                  alt: a || (t == null ? void 0 : t.meaning),
                  className: "w-full h-full object-contain",
                  loading: "lazy",
                }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0 space-y-2",
                children: [
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx("input", {
                        type: "text",
                        value: s ?? "",
                        onChange: (u) => n(u.target.value),
                        placeholder: "图片链接",
                        className:
                          "flex-1 min-w-0 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-[#8d6e63]",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: d,
                        className:
                          "p-2 bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200",
                        children: e.jsx(Za, { size: 16 }),
                      }),
                    ],
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: a ?? "",
                    onChange: (u) => r(u.target.value),
                    placeholder: "表情含义",
                    className:
                      "w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-[#8d6e63]",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-2 mt-2",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: i,
                className:
                  "flex-1 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-bold",
                children: "取消",
              }),
              e.jsx("button", {
                type: "button",
                onClick: o,
                className:
                  "flex-1 py-2.5 bg-[#8d6e63] text-white rounded-xl text-sm font-bold",
                children: "保存",
              }),
            ],
          }),
        ],
      }),
    });
  },
  BW = ({ onClose: t, groupName: s, count: n, onCopy: a, onDownload: r }) =>
    e.jsx("div", {
      className:
        "absolute inset-0 z-[90] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: t,
      children: e.jsxs("div", {
        className:
          "w-full max-w-xs bg-[#fffcf7] rounded-2xl shadow-2xl p-5 flex flex-col gap-3",
        onClick: (i) => i.stopPropagation(),
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-1",
            children: [
              e.jsx("h3", {
                className: "text-base font-bold text-[#5d4037]",
                children: "导出此分组",
              }),
              e.jsx("button", {
                onClick: t,
                className: "p-1 rounded-full hover:bg-gray-100 text-gray-500",
                children: e.jsx(Ts, { size: 20 }),
              }),
            ],
          }),
          e.jsxs("p", {
            className: "text-xs text-gray-500 mb-2",
            children: ["共 ", n, " 个表情包，请选择导出方式："],
          }),
          e.jsxs("button", {
            type: "button",
            onClick: () => {
              (a(), t());
            },
            className:
              "w-full py-3 bg-[#f2f0ea] text-[#5d4037] rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#e8e6e0]",
            children: [e.jsx(Q5, { size: 18 }), "复制到剪贴板"],
          }),
          e.jsxs("button", {
            type: "button",
            onClick: () => {
              (r(), t());
            },
            className:
              "w-full py-3 bg-[#8d6e63] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#795548]",
            children: [e.jsx(Eu, { size: 18 }), "下载 JSON 文件"],
          }),
        ],
      }),
    }),
  UW = ({
    onClose: t,
    pasteContent: s,
    setPasteContent: n,
    onSubmit: a,
    memeCategories: r,
    targetCategoryId: i,
    setTargetCategoryId: o,
    asNewGroupName: c,
    setAsNewGroupName: d,
  }) => {
    const u = pn.useRef(null),
      [f, p] = pn.useState("new"),
      [m, h] = pn.useState("paste"),
      [g, x] = pn.useState(""),
      y = (b) => {
        var _;
        const N = (_ = b.target.files) == null ? void 0 : _[0];
        if (!N) return;
        const w = new FileReader();
        ((w.onload = (A) => {
          var k, C;
          (n(
            ((C = (k = A.target) == null ? void 0 : k.result) == null
              ? void 0
              : C.toString()) || "",
          ),
            x(""));
        }),
          w.readAsText(N),
          (b.target.value = ""));
      },
      v = () => {
        x("");
        let b;
        try {
          b = JSON.parse(s.trim());
        } catch {
          x("无效的 JSON，请粘贴导出的分组文件内容");
          return;
        }
        const N = b.groupName || b.name || "导入分组",
          w = Array.isArray(b.memes) ? b.memes : [];
        if (w.length === 0) {
          x("未找到表情包列表 (需要 memes 数组)");
          return;
        }
        const _ = w
          .map((A) => ({
            url: A.url || A.image || "",
            meaning: A.meaning || A.text || "",
          }))
          .filter((A) => A.url);
        if (_.length === 0) {
          x("memes 中需包含 url 和 meaning");
          return;
        }
        if (f === "new") {
          const A = (c || N).trim() || "导入分组";
          a({ type: "new", groupName: A, memes: _ });
        } else {
          if (!i) {
            x("请选择要导入到的分组");
            return;
          }
          a({ type: "existing", categoryId: i, memes: _ });
        }
        t();
      };
    return e.jsx("div", {
      className:
        "absolute inset-0 z-[90] bg-black/30 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: t,
      children: e.jsxs("div", {
        className:
          "w-full max-w-sm bg-[#fffcf7] rounded-2xl shadow-2xl p-5 flex flex-col max-h-[85vh]",
        onClick: (b) => b.stopPropagation(),
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-3",
            children: [
              e.jsx("h3", {
                className: "text-base font-bold text-[#5d4037]",
                children: "导入分组",
              }),
              e.jsx("button", {
                onClick: t,
                className: "p-1 rounded-full hover:bg-gray-100 text-gray-500",
                children: e.jsx(Ts, { size: 20 }),
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-xs text-gray-500 mb-2",
            children: "选择导入方式：",
          }),
          e.jsxs("div", {
            className: "flex gap-2 mb-3",
            children: [
              e.jsxs("button", {
                type: "button",
                onClick: () => h("paste"),
                className: `flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 ${m === "paste" ? "bg-[#8d6e63] text-white" : "bg-gray-100 text-gray-600"}`,
                children: [e.jsx(Q5, { size: 14 }), "粘贴内容"],
              }),
              e.jsxs("button", {
                type: "button",
                onClick: () => h("file"),
                className: `flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1 ${m === "file" ? "bg-[#8d6e63] text-white" : "bg-gray-100 text-gray-600"}`,
                children: [e.jsx(ro, { size: 14 }), "JSON 文件"],
              }),
            ],
          }),
          m === "paste" &&
            e.jsx("textarea", {
              value: s,
              onChange: (b) => {
                (n(b.target.value), x(""));
              },
              placeholder:
                '{"groupName":"我的表情","memes":[{"url":"...","meaning":"开心"}]}',
              className:
                "w-full h-24 mb-3 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-mono outline-none focus:border-[#8d6e63] resize-none",
            }),
          m === "file" &&
            e.jsxs("div", {
              className: "mb-3",
              children: [
                e.jsxs("button", {
                  type: "button",
                  onClick: () => {
                    var b;
                    return (b = u.current) == null ? void 0 : b.click();
                  },
                  className:
                    "w-full py-3 border border-dashed border-gray-300 rounded-xl text-xs text-[#8d6e63] hover:bg-[#f2f0ea] flex items-center justify-center gap-2",
                  children: [e.jsx(Ta, { size: 16 }), "选择 JSON 文件"],
                }),
                e.jsx("input", {
                  ref: u,
                  type: "file",
                  accept: ".json,application/json",
                  className: "hidden",
                  onChange: y,
                }),
                s.trim() &&
                  e.jsx("p", {
                    className: "text-xs text-green-600 mt-2 text-center",
                    children:
                      "已加载文件内容，可在下方选择导入目标后点击「导入」",
                  }),
              ],
            }),
          e.jsxs("div", {
            className: "flex gap-2 mb-2",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => p("new"),
                className: `flex-1 py-2 rounded-xl text-xs font-bold ${f === "new" ? "bg-[#8d6e63] text-white" : "bg-gray-100 text-gray-600"}`,
                children: "新建分组",
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => p("existing"),
                className: `flex-1 py-2 rounded-xl text-xs font-bold ${f === "existing" ? "bg-[#8d6e63] text-white" : "bg-gray-100 text-gray-600"}`,
                children: "导入到现有分组",
              }),
            ],
          }),
          f === "new" &&
            e.jsx("input", {
              type: "text",
              value: c,
              onChange: (b) => d(b.target.value),
              placeholder: "新分组名称（默认使用导出时的名称）",
              className:
                "w-full mb-2 bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#8d6e63]",
            }),
          f === "existing" &&
            e.jsxs("select", {
              value: i,
              onChange: (b) => o(b.target.value),
              className:
                "w-full mb-2 bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#8d6e63]",
              children: [
                e.jsx("option", { value: "", children: "请选择分组" }),
                r.map((b) =>
                  e.jsx("option", { value: b.id, children: b.name }, b.id),
                ),
              ],
            }),
          g &&
            e.jsx("p", { className: "text-xs text-red-500 mb-2", children: g }),
          e.jsx("button", {
            onClick: v,
            disabled: !s.trim(),
            className:
              "w-full py-3 bg-[#8d6e63] text-white rounded-xl text-sm font-bold disabled:opacity-50",
            children: "导入",
          }),
        ],
      }),
    });
  },
  GW = ({
    show: t,
    onClose: s,
    contacts: n,
    selectedContactIds: a,
    toggleContactSelection: r,
    groupChats: i = [],
    selectedGroupChatIds: o = [],
    toggleGroupSelection: c,
    editingCategory: d,
    handleDeleteCategory: u,
    handleSaveCategoryBinding: f,
  }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative flex flex-col max-h-[60vh]",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsx("h3", {
                className: "text-lg font-bold text-[#5d4037] mb-1 text-center",
                children: "分类设置",
              }),
              e.jsx("p", {
                className: "text-xs text-gray-400 text-center mb-4",
                children:
                  "绑定到单人后，该会话将使用此分类下的表情包；群聊可同时绑定多个分类，合并展示",
              }),
              e.jsxs("div", {
                className: "flex-1 overflow-y-auto space-y-3 mb-4 pr-1",
                children: [
                  (n == null ? void 0 : n.length) > 0 &&
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs font-medium text-gray-500 mb-1.5 px-0.5",
                          children: "单人聊天",
                        }),
                        e.jsx("div", {
                          className: "space-y-2",
                          children: n.map((p) =>
                            e.jsxs(
                              "div",
                              {
                                onClick: () => r(p.id),
                                className: `flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${a.includes(p.id) ? "bg-[#8d6e63]/10 border-[#8d6e63]" : "bg-white border-gray-100 hover:border-gray-300"}`,
                                children: [
                                  e.jsx("div", {
                                    className: `w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${a.includes(p.id) ? "bg-[#8d6e63] border-[#8d6e63]" : "border-gray-300 bg-white"}`,
                                    children:
                                      a.includes(p.id) &&
                                      e.jsx(On, {
                                        size: 12,
                                        className: "text-white",
                                      }),
                                  }),
                                  e.jsx("img", {
                                    src: p.avatar,
                                    className:
                                      "w-8 h-8 rounded-lg object-cover bg-gray-100 flex-shrink-0",
                                    alt: "avatar",
                                    loading: "lazy",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-bold text-[#5d4037] truncate",
                                    children: p.nickname || p.name,
                                  }),
                                ],
                              },
                              p.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  (i == null ? void 0 : i.length) > 0 &&
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs font-medium text-gray-500 mb-1.5 px-0.5",
                          children: "群聊",
                        }),
                        e.jsx("div", {
                          className: "space-y-2",
                          children: i.map((p) => {
                            var m, h;
                            return e.jsxs(
                              "div",
                              {
                                onClick: () => c(p.id),
                                className: `flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${o.includes(p.id) ? "bg-[#8d6e63]/10 border-[#8d6e63]" : "bg-white border-gray-100 hover:border-gray-300"}`,
                                children: [
                                  e.jsx("div", {
                                    className: `w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${o.includes(p.id) ? "bg-[#8d6e63] border-[#8d6e63]" : "border-gray-300 bg-white"}`,
                                    children:
                                      o.includes(p.id) &&
                                      e.jsx(On, {
                                        size: 12,
                                        className: "text-white",
                                      }),
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden",
                                    children:
                                      (m = p.settings) != null && m.groupAvatar
                                        ? e.jsx("img", {
                                            src: p.settings.groupAvatar,
                                            className:
                                              "w-full h-full object-cover",
                                            alt: "",
                                            loading: "lazy",
                                          })
                                        : e.jsx(Ar, {
                                            size: 18,
                                            className: "text-gray-400",
                                          }),
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-bold text-[#5d4037] truncate",
                                    children:
                                      ((h = p.settings) == null
                                        ? void 0
                                        : h.groupName) || "群聊",
                                  }),
                                ],
                              },
                              p.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  !(n != null && n.length) &&
                    !(i != null && i.length) &&
                    e.jsx("p", {
                      className: "text-xs text-gray-400 text-center py-4",
                      children: "暂无联系人或群聊可绑定",
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3",
                children: [
                  e.jsx("button", {
                    onClick: () => u(d.id),
                    className:
                      "flex-1 py-3 bg-red-50 text-red-500 rounded-xl font-bold text-sm hover:bg-red-100 transition-colors",
                    children: "删除分类",
                  }),
                  e.jsx("button", {
                    onClick: f,
                    className:
                      "flex-1 py-3 bg-[#8d6e63] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#795548] transition-colors",
                    children: "保存绑定",
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  HW = ({
    show: t,
    onClose: s,
    memeCategories: n,
    handleAddMemesToCategory: a,
  }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsx("h3", {
                className: "text-lg font-bold text-[#5d4037] mb-4 text-center",
                children: "添加到分类",
              }),
              e.jsx("div", {
                className: "grid grid-cols-2 gap-3",
                children: n.map((r) =>
                  e.jsxs(
                    "button",
                    {
                      onClick: () => a(r.id),
                      className:
                        "p-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[#5d4037] hover:border-[#8d6e63] hover:bg-[#f2f0ea] transition-all flex items-center justify-center gap-2",
                      children: [e.jsx($I, { size: 16 }), r.name],
                    },
                    r.id,
                  ),
                ),
              }),
            ],
          }),
        })
      : null;
function WW({ show: t, onClose: s, onSubmit: n }) {
  const [a, r] = l.useState(""),
    [i, o] = l.useState(["", ""]);
  if (!t) return null;
  const c = () => {
      i.length >= 6 || o([...i, ""]);
    },
    d = (p) => {
      i.length <= 2 || o(i.filter((m, h) => h !== p));
    },
    u = (p, m) => {
      const h = [...i];
      ((h[p] = m), o(h));
    },
    f = () => {
      const p = a.trim(),
        m = i.map((h) => h.trim()).filter(Boolean);
      !p ||
        m.length < 2 ||
        (n(
          p,
          m.map((h, g) => ({ id: String(g), text: h, votes: [] })),
        ),
        r(""),
        o(["", ""]),
        s());
    };
  return e.jsx("div", {
    className:
      "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
    children: e.jsxs("div", {
      className:
        "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative border border-[#efebe9]",
      children: [
        e.jsx("button", {
          onClick: s,
          className:
            "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
          children: e.jsx(Ts, { size: 20 }),
        }),
        e.jsx("h3", {
          className:
            "text-lg font-bold text-[#5d4037] mb-1 text-center font-serif",
          children: "发起投票",
        }),
        e.jsx("p", {
          className: "text-xs text-gray-400 text-center mb-4",
          children: "仅群聊可用",
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className:
                    "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1 mb-1 block",
                  children: "投票问题",
                }),
                e.jsx("input", {
                  type: "text",
                  value: a,
                  onChange: (p) => r(p.target.value),
                  placeholder: "例如：周末去哪玩？",
                  className:
                    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037]",
                  autoFocus: !0,
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className:
                    "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1 mb-2 block",
                  children: "选项（2～6 个）",
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    i.map((p, m) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex gap-2 items-center",
                          children: [
                            e.jsx("input", {
                              type: "text",
                              value: p,
                              onChange: (h) => u(m, h.target.value),
                              placeholder: `选项 ${m + 1}`,
                              className:
                                "flex-1 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037]",
                            }),
                            i.length > 2 &&
                              e.jsx("button", {
                                type: "button",
                                onClick: () => d(m),
                                className:
                                  "p-2 text-gray-400 hover:text-[#8d6e63] rounded-lg",
                                children: e.jsx(Ts, { size: 16 }),
                              }),
                          ],
                        },
                        m,
                      ),
                    ),
                    i.length < 6 &&
                      e.jsxs("button", {
                        type: "button",
                        onClick: c,
                        className:
                          "w-full py-2 border border-dashed border-gray-200 rounded-xl text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider flex items-center justify-center gap-1 hover:border-[#8d6e63]",
                        children: [e.jsx(ea, { size: 14 }), "添加选项"],
                      }),
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: f,
              disabled: !a.trim() || i.filter((p) => p.trim()).length < 2,
              className:
                "w-full py-3 bg-[#8d6e63] text-white rounded-xl text-sm font-bold hover:bg-[#795548] disabled:opacity-40 disabled:pointer-events-none transition-colors",
              children: "发起投票",
            }),
          ],
        }),
      ],
    }),
  });
}
function YW({ show: t, onClose: s, onSubmit: n }) {
  const [a, r] = l.useState("");
  if (!t) return null;
  const i = () => {
    const o = a.trim();
    o && (n(o), r(""), s());
  };
  return e.jsx("div", {
    className:
      "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
    children: e.jsxs("div", {
      className:
        "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative border border-[#efebe9]",
      children: [
        e.jsx("button", {
          onClick: s,
          className:
            "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
          children: e.jsx(Ts, { size: 20 }),
        }),
        e.jsx("h3", {
          className:
            "text-lg font-bold text-[#5d4037] mb-1 text-center font-serif",
          children: "发起接龙",
        }),
        e.jsx("p", {
          className: "text-xs text-gray-400 text-center mb-4",
          children: "仅群聊可用，成员可依次添加一项",
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("label", {
                  className:
                    "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1 mb-1 block",
                  children: "接龙标题",
                }),
                e.jsx("input", {
                  type: "text",
                  value: a,
                  onChange: (o) => r(o.target.value),
                  placeholder: "例如：周末吃什么",
                  className:
                    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037]",
                  autoFocus: !0,
                }),
              ],
            }),
            e.jsx("button", {
              onClick: i,
              disabled: !a.trim(),
              className:
                "w-full py-3 bg-[#8d6e63] text-white rounded-xl text-sm font-bold hover:bg-[#795548] disabled:opacity-40 disabled:pointer-events-none transition-colors",
              children: "发起接龙",
            }),
          ],
        }),
      ],
    }),
  });
}
function VW({
  show: t,
  messageId: s,
  value: n,
  onChange: a,
  onSubmit: r,
  onClose: i,
}) {
  return !t || !s
    ? null
    : e.jsx("div", {
        className:
          "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
        children: e.jsxs("div", {
          className:
            "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-6 relative border border-[#efebe9]",
          children: [
            e.jsx("button", {
              onClick: i,
              className:
                "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
              children: e.jsx(Ts, { size: 20 }),
            }),
            e.jsx("h3", {
              className:
                "text-lg font-bold text-[#5d4037] mb-4 text-center font-serif",
              children: "接龙 · 添加一项",
            }),
            e.jsx("input", {
              type: "text",
              value: n,
              onChange: (o) => a(o.target.value),
              placeholder: "输入本条接龙内容",
              className:
                "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#8d6e63] text-[#5d4037] mb-4",
              autoFocus: !0,
              onKeyDown: (o) => o.key === "Enter" && r(n.trim()),
            }),
            e.jsx("button", {
              onClick: () => r(n.trim()),
              disabled: !n.trim(),
              className:
                "w-full py-3 bg-[#8d6e63] text-white rounded-xl text-sm font-bold hover:bg-[#795548] disabled:opacity-40 disabled:pointer-events-none transition-colors",
              children: "确定",
            }),
          ],
        }),
      });
}
const JW = ({ show: t, onClose: s, content: n, reason: a }) =>
  t
    ? e.jsx("div", {
        className:
          "absolute inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300",
        onClick: s,
        children: e.jsxs("div", {
          className:
            "bg-[#fffcf7] p-6 rounded-[20px] shadow-xl border-2 border-white max-w-xs w-full relative rotate-1",
          onClick: (r) => r.stopPropagation(),
          children: [
            e.jsx("div", {
              className:
                "absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#ffccbc]/80 rotate-[-2deg] shadow-sm",
            }),
            e.jsx("h3", {
              className: "font-bold text-[#5d4037] mb-2 text-sm",
              children: "撤回的消息",
            }),
            e.jsx("div", {
              className:
                "bg-[#f5f5f5] p-3 rounded-xl text-sm text-[#4a4a4a] mb-4 border border-[#efebe9] border-dashed",
              children: n,
            }),
            a &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("h4", {
                    className: "font-bold text-[#5d4037] mb-1 text-xs",
                    children: "原因",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-[#8d6e63]",
                    children: a,
                  }),
                ],
              }),
          ],
        }),
      })
    : null;
function KW({
  show: t,
  onClose: s,
  msg: n,
  chat: a,
  contacts: r = [],
  user: i,
  chatId: o,
  onGrab: c,
}) {
  if (!t || !n || n.type !== "red_packet") return null;
  const d = n.claims || [],
    u = parseFloat(n.totalAmount) || 0,
    f = n.count || 1,
    p = n.mode || "equal",
    m = n.note || "恭喜发财，大吉大利",
    h = (a == null ? void 0 : a.isGroup) === !0,
    g = f - d.length,
    x = d.some((k) => k.sender === "me"),
    y = g > 0 && !x,
    v = g === 0 && !x,
    b = (k) => {
      var M, E;
      if (k.sender === "me") return (i == null ? void 0 : i.name) || "我";
      const C = (r || []).find((S) => S.id === k.sender);
      return C
        ? h &&
          (E =
            (M = a == null ? void 0 : a.settings) == null
              ? void 0
              : M.memberTitles) != null &&
          E[k.sender]
          ? a.settings.memberTitles[k.sender]
          : C.nickname || C.remark || C.name || "未知"
        : "未知";
    },
    N = (k) => {
      if (k.sender === "me") return i == null ? void 0 : i.avatar;
      const C = (r || []).find((M) => M.id === k.sender);
      return C == null ? void 0 : C.avatar;
    },
    w = d.length ? Math.max(...d.map((k) => k.amount || 0)) : 0,
    A = p === "lucky" && g === 0;
  return e.jsx("div", {
    className:
      "absolute inset-0 z-[80] bg-black/30 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
    children: e.jsxs("div", {
      className:
        "w-full max-w-sm bg-[#fffcf7] rounded-[24px] shadow-2xl border-2 border-[#e8e0dc] relative overflow-hidden",
      children: [
        e.jsx("div", {
          className:
            "absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#bcaaa4] rotate-[-2deg] z-10 border-l-2 border-r-2 border-white/50",
        }),
        e.jsxs("div", {
          className: "p-6 pt-8 relative",
          children: [
            e.jsx("button", {
              onClick: s,
              className:
                "absolute top-4 right-4 p-1 hover:bg-[#efebe9] rounded-full text-[#6d4c41] transition-colors z-20",
              children: e.jsx(Ts, { size: 20 }),
            }),
            e.jsxs("div", {
              className: "flex items-center justify-center gap-2 mb-2",
              children: [
                e.jsx("div", {
                  className:
                    "p-1.5 bg-[#efebe9] rounded-lg border border-[#e0d5c8]",
                  children: e.jsx(Nl, {
                    size: 26,
                    className: "text-[#6d4c41]",
                  }),
                }),
                e.jsx("span", {
                  className: "text-xl font-black text-[#5d4037] font-serif",
                  children: "红包详情",
                }),
              ],
            }),
            e.jsx("p", {
              className:
                "text-center text-sm text-[#8d6e63] mb-4 truncate px-4",
              children: m,
            }),
            v &&
              e.jsx("p", {
                className:
                  "text-center text-sm text-[#8d6e63]/90 font-medium mb-3 px-4",
                children: "手慢了，红包已领完",
              }),
            e.jsxs("div", {
              className: "flex justify-center gap-4 mb-4",
              children: [
                e.jsxs("span", {
                  className: "text-[#5d4037] font-medium",
                  children: ["¥", u.toFixed(2)],
                }),
                e.jsx("span", { className: "text-[#bcaaa4]", children: "|" }),
                e.jsxs("span", {
                  className: "text-[#5d4037] font-medium",
                  children: [d.length, "/", f, " 个已领取"],
                }),
              ],
            }),
            e.jsx("ul", {
              className: "space-y-2 max-h-64 overflow-y-auto no-scrollbar",
              children: d.map((k, C) => {
                const M =
                    k.amount != null ? Number(k.amount).toFixed(2) : "0.00",
                  E = A && (k.amount || 0) >= w && w > 0,
                  S = N(k);
                return e.jsxs(
                  "li",
                  {
                    className:
                      "flex items-center gap-3 p-3 rounded-xl bg-[#faf8f5] border border-[#e8e0dc]",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full overflow-hidden bg-[#efebe9] flex-shrink-0 border border-[#e0d5c8]",
                        children: S
                          ? e.jsx("img", {
                              src: S,
                              alt: "",
                              className: "w-full h-full object-cover",
                              loading: "lazy",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center text-[#8d6e63] font-bold text-sm",
                              children: k.sender === "me" ? "我" : "?",
                            }),
                      }),
                      e.jsx("div", {
                        className: "flex-1 min-w-0",
                        children: e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "font-medium text-[#5d4037] truncate",
                              children: b(k),
                            }),
                            E &&
                              e.jsxs("span", {
                                className:
                                  "inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#e8e0dc] text-[#4e342e] text-[10px] font-bold flex-shrink-0 border border-[#d7ccc8]",
                                children: [e.jsx(dI, { size: 10 }), " 手气王"],
                              }),
                          ],
                        }),
                      }),
                      e.jsxs("span", {
                        className:
                          "font-bold text-[#6d4c41] font-mono flex-shrink-0",
                        children: ["¥", M],
                      }),
                    ],
                  },
                  k.timestamp || C,
                );
              }),
            }),
            d.length === 0 &&
              !y &&
              e.jsx("p", {
                className: "text-sm text-[#8d6e63]/80 text-center py-6",
                children: "暂无领取记录",
              }),
            y &&
              c &&
              o &&
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  (c(o, n.id), s());
                },
                className:
                  "w-full mt-4 py-3.5 bg-[#6d4c41] text-white rounded-xl font-bold text-sm shadow-[3px_3px_0px_rgba(93,64,55,0.25)] hover:bg-[#5d4037] hover:shadow-[1px_1px_0px_rgba(93,64,55,0.2)] hover:translate-y-[2px] active:shadow-none active:translate-y-[3px] transition-all border-2 border-[#5d4037]",
                children: "领取",
              }),
          ],
        }),
      ],
    }),
  });
}
const qW = "恭喜发财，大吉大利",
  QW = ({
    show: t,
    onClose: s,
    totalAmount: n,
    setTotalAmount: a,
    count: r,
    setCount: i,
    mode: o,
    setMode: c,
    note: d,
    setNote: u,
    onNext: f,
  }) => {
    if (!t) return null;
    const p = n && parseFloat(n) > 0 && r >= 1 && r <= 100;
    return e.jsx("div", {
      className:
        "absolute inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300",
      children: e.jsxs("div", {
        className:
          "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl border-2 border-[#e8e0dc] relative overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-4 left-1/2 -translate-x-1/2 w-36 h-9 bg-[#bcaaa4] rotate-[-2deg] shadow-sm z-10 border-l-2 border-r-2 border-white/50",
          }),
          e.jsxs("div", {
            className: "p-6 pt-8 relative rounded-[20px] overflow-hidden",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1 hover:bg-[#efebe9] rounded-full text-[#6d4c41] transition-colors z-20",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  e.jsx("div", {
                    className:
                      "p-2 bg-[#efebe9] rounded-xl border border-[#e0d5c8]",
                    children: e.jsx(Nl, {
                      size: 24,
                      className: "text-[#6d4c41]",
                    }),
                  }),
                  e.jsx("h3", {
                    className:
                      "text-lg font-black text-[#5d4037] font-serif tracking-tight",
                    children: "发红包",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1",
                        children: "总金额（元）",
                      }),
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx("span", {
                            className:
                              "absolute left-3 top-1/2 -translate-y-1/2 text-xl font-bold text-[#5d4037]",
                            children: "¥",
                          }),
                          e.jsx("input", {
                            type: "number",
                            value: n,
                            onChange: (m) => a(m.target.value),
                            className:
                              "w-full bg-[#faf8f5] border-2 border-[#e8e0dc] rounded-xl pl-8 pr-4 py-3 text-xl font-bold text-[#5d4037] outline-none focus:border-[#8d6e63] focus:bg-white",
                            placeholder: "0.00",
                            min: "0.01",
                            step: "0.01",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1",
                        children: "红包个数",
                      }),
                      e.jsx("input", {
                        type: "number",
                        value: r === 0 ? "" : r,
                        onChange: (m) => {
                          const h = m.target.value;
                          if (h === "") i(0);
                          else {
                            const g = parseInt(h, 10);
                            !Number.isNaN(g) && g >= 1 && g <= 100 && i(g);
                          }
                        },
                        className:
                          "w-full bg-[#faf8f5] border-2 border-[#e8e0dc] rounded-xl px-4 py-3 text-lg font-medium text-[#5d4037] outline-none focus:border-[#8d6e63] focus:bg-white",
                        placeholder: "1",
                        min: 1,
                        max: 100,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1",
                        children: "类型",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          e.jsxs("label", {
                            className:
                              "flex-1 flex items-center gap-2 p-3 rounded-xl bg-[#faf8f5] border-2 border-[#e8e0dc] cursor-pointer has-[:checked]:border-[#8d6e63] has-[:checked]:bg-[#efebe9] has-[:checked]:border-2",
                            children: [
                              e.jsx("input", {
                                type: "radio",
                                name: "mode",
                                checked: o === "lucky",
                                onChange: () => c("lucky"),
                                className: "sr-only",
                              }),
                              e.jsx("span", {
                                className: "text-sm font-medium text-[#5d4037]",
                                children: "拼手气",
                              }),
                            ],
                          }),
                          e.jsxs("label", {
                            className:
                              "flex-1 flex items-center gap-2 p-3 rounded-xl bg-[#faf8f5] border-2 border-[#e8e0dc] cursor-pointer has-[:checked]:border-[#8d6e63] has-[:checked]:bg-[#efebe9] has-[:checked]:border-2",
                            children: [
                              e.jsx("input", {
                                type: "radio",
                                name: "mode",
                                checked: o === "equal",
                                onChange: () => c("equal"),
                                className: "sr-only",
                              }),
                              e.jsx("span", {
                                className: "text-sm font-medium text-[#5d4037]",
                                children: "普通",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold text-[#8d6e63] uppercase tracking-wider ml-1",
                        children: "祝福语",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: d,
                        onChange: (m) => u(m.target.value),
                        className:
                          "w-full bg-[#faf8f5] border-2 border-[#e8e0dc] rounded-xl px-4 py-3 text-sm font-medium text-[#5d4037] outline-none focus:border-[#8d6e63] focus:bg-white",
                        placeholder: qW,
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: f,
                    disabled: !p,
                    className:
                      "w-full py-3.5 bg-[#6d4c41] text-white rounded-xl font-bold text-sm shadow-[3px_3px_0px_rgba(93,64,55,0.25)] hover:bg-[#5d4037] hover:shadow-[1px_1px_0px_rgba(93,64,55,0.2)] hover:translate-y-[2px] active:shadow-none active:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#5d4037] mt-2",
                    children: "塞钱进红包",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ZW = ({
    show: t,
    onClose: s,
    totalAmount: n,
    count: a,
    password: r,
    setPassword: i,
    onConfirm: o,
  }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[70] bg-black/20 backdrop-blur-sm grid place-items-center animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "bg-[#fffcf7] w-[85%] max-w-[300px] rounded-[24px] shadow-lg overflow-hidden flex flex-col border-2 border-[#e8e0dc]",
            children: [
              e.jsxs("div", {
                className:
                  "p-5 border-b border-[#efebe9] flex items-center relative",
                children: [
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "absolute left-4 p-1 hover:bg-[#efebe9] rounded-full text-[#6d4c41] transition-colors",
                    children: e.jsx(Ts, { size: 20 }),
                  }),
                  e.jsx("h3", {
                    className:
                      "flex-1 text-center font-bold text-[#5d4037] text-[15px]",
                    children: "请输入支付密码",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "p-8 flex flex-col items-center w-full",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 text-[#8d6e63] mb-2",
                    children: [
                      e.jsx(lr, { size: 16 }),
                      e.jsxs("span", {
                        className: "text-sm",
                        children: [
                          "红包 ¥",
                          parseFloat(n || 0).toFixed(2),
                          " · ",
                          a,
                          "个",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "w-full relative",
                    children: [
                      e.jsx("div", {
                        className: "flex justify-between gap-2 mb-2",
                        children: [0, 1, 2, 3, 4, 5].map((c) =>
                          e.jsx(
                            "div",
                            {
                              className:
                                "w-10 h-10 border-2 border-[#e8e0dc] rounded-xl flex items-center justify-center bg-[#faf8f5] shadow-sm",
                              children:
                                r[c] &&
                                e.jsx("div", {
                                  className:
                                    "w-2.5 h-2.5 bg-[#5d4037] rounded-full",
                                }),
                            },
                            c,
                          ),
                        ),
                      }),
                      e.jsx("input", {
                        type: "password",
                        value: r,
                        onChange: (c) => {
                          const d = c.target.value;
                          (d.length <= 6 && i(d), d.length === 6 && o(d));
                        },
                        className:
                          "absolute inset-0 opacity-0 cursor-pointer h-full w-full",
                        maxLength: 6,
                        autoFocus: !0,
                        inputMode: "numeric",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  $N = [
    "https://files.catbox.moe/fd94jv.jpg",
    "https://files.catbox.moe/2sstsi.jpg",
    "https://files.catbox.moe/2ky1ng.jpg",
    "https://files.catbox.moe/vt4y2n.jpg",
    "https://files.catbox.moe/2m40lh.jpg",
    "https://files.catbox.moe/fp9vtv.jpg",
    "https://files.catbox.moe/nxabqq.jpg",
    "https://files.catbox.moe/ls50g2.jpg",
    "https://files.catbox.moe/a8mmgr.jpg",
    "https://files.catbox.moe/08wxvc.jpg",
  ];
function XW(t) {
  return !t || typeof t != "string"
    ? ""
    : t
        .replace(/\s*\[HEART_VOICE\][\s\S]*?\[\/HEART_VOICE\]\s*/gi, "")
        .replace(/\s*\[HEART_VOICE\][\s\S]*$/gi, "")
        .replace(/\s*\[MEME[^\]]*\]\s*/gi, "")
        .replace(/\s*\[表情包[^\]]*\]\s*/g, "")
        .replace(/\s*\[IMAGE[^\]]*\]\s*/gi, "")
        .replace(/\s*\[图片[^\]]*\]\s*/g, "")
        .replace(/\s*\[VOICE[^\]]*\]\s*/gi, "")
        .replace(/\s*\[语音[^\]]*\]\s*/g, "")
        .replace(/\s*\[FORWARD_CHAT_CARD[^\]]*\]\s*/gi, "")
        .replace(/\s+/g, " ")
        .trim();
}
function eY(t) {
  if (!t || typeof t != "string") return [""];
  const s = t
    .split(/\s*\|\|\s*|｜｜/)
    .map((n) => n.trim())
    .filter(Boolean);
  return s.length > 0 ? s : [""];
}
function tY(t) {
  let s = 0;
  for (let n = 0; n < (t || "").length; n++)
    s = (s * 31 + t.charCodeAt(n)) >>> 0;
  return s;
}
function sY(t) {
  if (!t) return "";
  const s = new Date(t);
  if (Number.isNaN(s.getTime())) return "";
  const n = s.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !1,
    }),
    a = s.getFullYear(),
    r = s.getMonth() + 1,
    i = s.getDate();
  return `${a}/${r}/${i} ${n}`;
}
function nY({
  show: t,
  onClose: s,
  groupTitle: n,
  messages: a = [],
  roleName: r,
  roleAvatarUrl: i,
  onRefresh: o,
  isRefreshingMessages: c,
}) {
  if (!t) return null;
  const d = [];
  let u = 0;
  a.forEach((m, h) => {
    const g = m != null && m.timestamp ? new Date(m.timestamp).getTime() : NaN;
    if (Number.isFinite(g) && (!u || g - u >= 6 * 60 * 1e3)) {
      const b = sY(m.timestamp);
      (b && d.push({ key: `t-${h}-${m.timestamp}`, kind: "time", text: b }),
        (u = g));
    }
    const x = XW(m.text),
      y = eY(x),
      v = m.sender === "role" ? m.senderName || r || "" : m.senderName || "";
    y.forEach((b, N) => {
      b !== "" &&
        d.push({
          key: `${h}-${N}`,
          kind: "msg",
          sender: m.sender,
          senderName: v,
          text: b,
          showLabel: N === 0,
        });
    });
  });
  const f = l.useMemo(() => {
      const m = new Set(),
        h = [],
        g = r || "角色";
      a.forEach((v) => {
        const b = v.sender === "role" ? g : v.senderName || "群友",
          N = b;
        m.has(N) ||
          (m.add(N), h.push({ id: N, name: b, isRole: v.sender === "role" }));
      });
      const x = [],
        y = h.find((v) => v.isRole);
      return (
        y && x.push(y),
        h.filter((v) => !v.isRole).forEach((v) => x.push(v)),
        x
      );
    }, [a, r]),
    p = l.useMemo(() => {
      const m = Math.abs(tY(n || "")) >>> 0,
        h = $N.length,
        g = [];
      for (let x = 0; x < 10; x++) g.push((m + x) % h);
      return g.map((x) => $N[x]);
    }, [n]);
  return e.jsx("div", {
    className: "group-chat-overlay",
    onClick: s,
    children: e.jsx("div", {
      className: "group-chat-modal",
      onClick: (m) => m.stopPropagation(),
      children: e.jsxs("div", {
        className: "group-chat-inner glass-panel",
        children: [
          e.jsxs("header", {
            className: "group-chat-header",
            children: [
              e.jsx("h1", {
                className: "group-chat-title",
                children: n || "群聊",
              }),
              e.jsxs("div", {
                className: "group-chat-header-actions",
                children: [
                  o &&
                    e.jsx("button", {
                      type: "button",
                      className: "group-chat-refresh-btn",
                      onClick: (m) => {
                        (m.stopPropagation(), o());
                      },
                      disabled: c,
                      "aria-label": "推进对话",
                      children: e.jsx(pr, {
                        size: 18,
                        strokeWidth: 2,
                        className: c ? "group-chat-refresh-spin" : "",
                      }),
                    }),
                  e.jsx("button", {
                    type: "button",
                    className: "group-chat-close",
                    onClick: s,
                    "aria-label": "关闭",
                    children: e.jsx(B0, { size: 18, strokeWidth: 2 }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "group-chat-story-strip",
            children: [
              e.jsxs("div", {
                className: "group-chat-story-item group-chat-story-your",
                children: [
                  e.jsx("div", { className: "group-chat-story-dashed" }),
                  e.jsx("span", {
                    className: "group-chat-story-name",
                    children: "你的动态",
                  }),
                ],
              }),
              f.map(({ id: m, name: h, isRole: g }, x) => {
                const y = f.slice(0, x).filter((b) => !b.isRole).length,
                  v = g
                    ? i ||
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(r || m)}`
                    : p[y % p.length];
                return e.jsxs(
                  "div",
                  {
                    className: "group-chat-story-item",
                    children: [
                      e.jsx("div", {
                        className: "group-chat-story-ring",
                        children: e.jsx("img", {
                          src: v,
                          className: "group-chat-story-avatar",
                          alt: "",
                        }),
                      }),
                      e.jsx("span", {
                        className: "group-chat-story-name",
                        children: h,
                      }),
                    ],
                  },
                  m,
                );
              }),
            ],
          }),
          e.jsx("div", {
            className: "group-chat-body custom-scrollbar",
            children:
              d.length === 0
                ? e.jsx("p", {
                    className: "group-chat-empty",
                    children: "暂无消息",
                  })
                : d.map((m) =>
                    m.kind === "time"
                      ? e.jsx(
                          "div",
                          {
                            className: "group-chat-time",
                            children: e.jsx("span", {
                              className: "group-chat-time-pill",
                              children: m.text,
                            }),
                          },
                          m.key,
                        )
                      : e.jsxs(
                          "div",
                          {
                            className: `group-chat-row ${m.sender === "role" ? "me" : ""}`,
                            children: [
                              e.jsx("span", {
                                className: `group-chat-sender-label ${m.showLabel ? "" : "placeholder"}`,
                                children: m.showLabel ? m.senderName : " ",
                              }),
                              e.jsx("div", {
                                className: "group-chat-bubble",
                                children: m.text,
                              }),
                            ],
                          },
                          m.key,
                        ),
                  ),
          }),
        ],
      }),
    }),
  });
}
const yx = 0,
  qc = 1,
  yo = 2,
  FN = (t) => `chat_role_status_${t || ""}`,
  aY = (t, s) => `phone_app_trace_today_${t}_${s}`,
  rY = (t) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
function WA(t) {
  return !t || typeof t != "string"
    ? ""
    : String(t)
        .replace(/\s*\[HEART_VOICE\][\s\S]*?\[\/HEART_VOICE\]\s*/gi, "")
        .replace(/\s*\[HEART_VOICE\][\s\S]*$/gi, "")
        .replace(/\s*\[MEME[^\]]*\]\s*/gi, "")
        .replace(/\s*\[表情包[^\]]*\]\s*/g, "")
        .replace(/\s*\[IMAGE[^\]]*\]\s*/gi, "")
        .replace(/\s*\[VOICE[^\]]*\]\s*/gi, "")
        .replace(/\s*\[语音[^\]]*\]\s*/g, "")
        .replace(/\s*\[FORWARD_CHAT_CARD[^\]]*\]\s*/gi, "")
        .replace(/\s+/g, " ")
        .trim();
}
function iY(t) {
  if (!t || typeof t != "string") return null;
  const s = t
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim(),
    n = s.indexOf("{");
  if (n === -1) return null;
  let a = 0,
    r = -1;
  for (let p = n; p < s.length; p++)
    if ((s[p] === "{" && a++, s[p] === "}" && (a--, a === 0))) {
      r = p;
      break;
    }
  const i = r !== -1 ? s.slice(n, r + 1) : s;
  let o;
  try {
    o = JSON.parse(i);
  } catch {
    return null;
  }
  const c = o.groups ?? o.groupList ?? [],
    d = Array.isArray(c)
      ? c
          .filter((p) => p && (p.title || p.name))
          .map((p, m) => ({
            id: p.id || `g${m + 1}`,
            title: String(p.title ?? p.name),
          }))
      : [],
    u = o.groupMessages ?? o.messages ?? {},
    f = {};
  return (
    d.forEach((p) => {
      const m = u[p.id] ?? u[p.title] ?? [];
      if (!Array.isArray(m)) return;
      const h = m
        .filter((g) => g && (g.text || g.content))
        .map((g) => {
          const x = WA(String(g.text ?? g.content ?? "").trim());
          let y = (g.sender ?? g.role ?? "").toString().toLowerCase();
          return (
            y === "role" || y === "角色" ? (y = "role") : (y = "other"),
            {
              sender: y,
              senderName:
                g.senderName ?? g.speaker ?? (y === "role" ? "" : "群友"),
              text: x,
            }
          );
        })
        .filter((g) => g.text.length > 0);
      h.length > 0 && (f[p.id] = h);
    }),
    d.length >= 1 ? { groups: d, groupMessages: f } : null
  );
}
function oY(t, s, n, a) {
  return `【任务】根据角色人设与绑定用户，生成该角色加入的 4～6 个群聊及每个群的最近几条聊天记录。角色有自己的生活，与用户的最近聊天仅作参考，不要完全依赖。

【角色名】${t}
【角色人设】${(s || "无").slice(0, 400)}
【绑定用户】${n}
【与用户最近聊天摘要（仅供参考）】${(a || "无").slice(0, 150)}

要求：
1. 只返回一个 JSON，不要 markdown 代码块。
2. groups：数组，4～6 项，每项为 {"id":"g1","title":"群聊名称"}，id 用 g1、g2、g3、g4、g5、g6（与 groups 顺序一一对应）。
3. groupMessages：对象，key 为 g1、g2、g3…，value 为该群的聊天数组。每条消息格式：{"sender":"role"或"other","senderName":"显示名","text":"内容"}。角色必须有发言（sender 为 "role"），其他人为 "other"。每条消息仅纯文字，禁止 [HEART_VOICE]、语音、表情包、图片等任何标签，不要 emoji。
4. 每个群 4～10 条消息，自然口语化，符合人设。

示例格式：
{"groups":[{"id":"g1","title":"周末约饭群"},{"id":"g2","title":"事务所内部群"},{"id":"g3","title":"..."}],"groupMessages":{"g1":[...],"g2":[...],"g3":[...]}}`;
}
function lY(t) {
  if (!t || typeof t != "string") return null;
  const s = t
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/i, "")
      .trim(),
    n = s.indexOf("{"),
    a = s.indexOf("[");
  let r = s;
  if (a !== -1 && (n === -1 || a < n)) {
    let d = 0,
      u = -1;
    for (let f = a; f < s.length; f++)
      if ((s[f] === "[" && d++, s[f] === "]" && (d--, d === 0))) {
        u = f;
        break;
      }
    r = u !== -1 ? s.slice(a, u + 1) : s;
  } else if (n !== -1) {
    let d = 0,
      u = -1;
    for (let f = n; f < s.length; f++)
      if ((s[f] === "{" && d++, s[f] === "}" && (d--, d === 0))) {
        u = f;
        break;
      }
    r = u !== -1 ? s.slice(n, u + 1) : s;
  }
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    return null;
  }
  const o = Array.isArray(i) ? i : (i.messages ?? i.chat ?? []);
  if (!Array.isArray(o)) return null;
  const c = o
    .filter((d) => d && (d.text || d.content))
    .map((d) => {
      const u = WA(String(d.text ?? d.content ?? "").trim());
      let f = (d.sender ?? d.role ?? "").toString().toLowerCase();
      return (
        f === "role" || f === "角色" ? (f = "role") : (f = "other"),
        {
          sender: f,
          senderName: d.senderName ?? d.speaker ?? (f === "role" ? "" : "群友"),
          text: u,
        }
      );
    })
    .filter((d) => d.text.length > 0);
  return c.length > 0 ? c : null;
}
function cY(t, s, n, a, r, i) {
  const o = (s || [])
    .slice(-30)
    .map((c) => `${c.senderName || (c.sender === "role" ? n : "")}: ${c.text}`)
    .join(`
`);
  return `【任务】在以下群聊已有记录的基础上，往下推进对话，生成接下来的 4～10 条新消息。角色人设与绑定用户作为参考，角色有自己的生活；与用户的最近聊天仅作参考。

【群名】${t || "群聊"}
【角色名】${n}
【角色人设】${(a || "无").slice(0, 300)}
【绑定用户】${r}
【与用户最近聊天摘要（仅供参考）】${(i || "无").slice(0, 120)}

【当前群聊已有记录（最后若干条）】
${o || "（暂无）"}

要求：
1. 只返回一个 JSON 数组或 {"messages": [...]}，不要 markdown 代码块。
2. 仅包含「新」消息（接着上面对话的后续内容），每条格式：{"sender":"role"或"other","senderName":"显示名","text":"内容"}。角色必须有发言。
3. 仅纯文字，禁止 [HEART_VOICE]、语音、表情包、图片等任何标签，自然口语化，符合人设。
4. 话题策略（重要）：生成的消息里，约一半（40%～60%）必须明显“基于上面最新 30 条聊天记录”的具体内容在接话/点评/延伸；剩下的一半必须“主动开启新话题”（可突兀一点、像真实群聊突然有人发新瓜/新问题/新活动/新吐槽），不需要一直就着之前的话题往下聊。`;
}
function zN(t, s, n) {
  const a = t,
    r = (s || "").slice(0, 200),
    i = [`${a}的后援会`, "周末约饭群", "摸鱼小队", "深夜树洞", "剧本杀组队"];
  (/事务所|律师|侦探|工作室/.test(r) && i.push("事务所内部群"),
    /游戏|开黑|打本/.test(r) && i.push("开黑小队"));
  const o = [...new Set(i)],
    c = Math.min(3, 2 + (Math.abs((a + r).length) % 2)),
    d = [];
  for (let u = 0; u < c && o.length > 0; u++) {
    const f = Math.abs((a + n + u).length) % o.length,
      p = o.splice(f, 1)[0] || o.pop();
    p && d.push({ id: `group-${u}-${Date.now()}`, title: p });
  }
  return d;
}
function RN(t, s) {
  const n = s,
    a = ["小明", "阿华", "李姐"],
    r = Date.now() - 30 * 60 * 1e3;
  return [
    {
      sender: "other",
      senderName: a[0],
      text: "大家周末有啥安排？",
      timestamp: new Date(r + 2 * 60 * 1e3).toISOString(),
    },
    {
      sender: "role",
      senderName: n,
      text: "我可能得加班，你们先约。",
      timestamp: new Date(r + 5 * 60 * 1e3).toISOString(),
    },
    {
      sender: "other",
      senderName: a[1],
      text: "行，那下周再聚。",
      timestamp: new Date(r + 8 * 60 * 1e3).toISOString(),
    },
    {
      sender: "other",
      senderName: a[0],
      text: "群主呢，出来说句话呀",
      timestamp: new Date(r + 14 * 60 * 1e3).toISOString(),
    },
    {
      sender: "role",
      senderName: n,
      text: "在呢在呢，刚忙完。",
      timestamp: new Date(r + 16 * 60 * 1e3).toISOString(),
    },
    {
      sender: "other",
      senderName: a[2],
      text: "辛苦辛苦～",
      timestamp: new Date(r + 20 * 60 * 1e3).toISOString(),
    },
    {
      sender: "role",
      senderName: n,
      text: "没事，应该的。",
      timestamp: new Date(r + 22 * 60 * 1e3).toISOString(),
    },
  ];
}
function dY({
  show: t,
  onClose: s,
  contact: n,
  chat: a,
  getRoleBoundUser: r,
  callApi: i,
  onOpenTrace: o,
  onOpenPlan: c,
}) {
  const [d, u] = l.useState(yx),
    [f, p] = l.useState([]),
    [m, h] = l.useState("drafts"),
    [g, x] = l.useState(null),
    [y, v] = l.useState(null),
    b = pn.useRef(null),
    [N, w] = l.useState(null),
    _ = pn.useRef(0),
    [A, k] = l.useState(""),
    [C, M] = l.useState(""),
    [E, S] = l.useState(""),
    [j, T] = l.useState(""),
    [I, L] = l.useState(""),
    [B, F] = l.useState(!1),
    [D, $] = l.useState(!1),
    [P, z] = l.useState([]),
    [O, Z] = l.useState({}),
    [K, q] = l.useState(null),
    [V, ne] = l.useState(!1),
    [le, ie] = l.useState(!1),
    [X, je] = l.useState(!1);
  l.useEffect(() => {
    if (!(n != null && n.id)) {
      je(!1);
      return;
    }
    let ue = !1;
    return (
      (async () => {
        var ge;
        const re = rY(new Date()),
          he = await be.get(aY(n.id, re), null);
        ue ||
          je(
            ((ge = he == null ? void 0 : he.pages) == null
              ? void 0
              : ge.length) > 0,
          );
      })(),
      () => {
        ue = !0;
      }
    );
  }, [n == null ? void 0 : n.id]);
  const xe = l.useMemo(() => (n && r ? r(n) : {}), [n, r]),
    ye = (xe == null ? void 0 : xe.name) || "用户",
    R =
      (n == null ? void 0 : n.nickname) ||
      (n == null ? void 0 : n.name) ||
      "TA",
    oe = ((n == null ? void 0 : n.setting) || "").slice(0, 300),
    ee = l.useMemo(
      () =>
        ((a == null ? void 0 : a.messages) || [])
          .slice(-20)
          .filter((re) => re.text)
          .map((re) => re.text)
          .join(" ")
          .slice(0, 200),
      [a == null ? void 0 : a.messages],
    ),
    H = l.useMemo(() => {
      const re = ((n == null ? void 0 : n.id) || R)
        .toString()
        .split("")
        .reduce((he, ge) => (he << 5) - he + ge.charCodeAt(0), 0);
      return {
        nodes: 32 + (Math.abs(re) % 26),
        accessors: 600 + (Math.abs(re) % 400),
      };
    }, [n == null ? void 0 : n.id, R]);
  (l.useEffect(() => {
    if (!t || !(n != null && n.id)) return;
    let ue = !1;
    return (
      (async () => {
        const re = await be.get(FN(n.id), null);
        ue ||
          (re &&
            typeof re == "object" &&
            (Array.isArray(re.groups) && z(re.groups),
            re.groupMessages &&
              typeof re.groupMessages == "object" &&
              Z(re.groupMessages)));
      })(),
      () => {
        ue = !0;
      }
    );
  }, [t, n == null ? void 0 : n.id]),
    l.useEffect(() => {
      if (!t || !(n != null && n.id)) return;
      let ue = !1;
      return (
        (async () => {
          const he = `chat_app_drafts_${(n == null ? void 0 : n.id) || (n == null ? void 0 : n.contactId)}`,
            ge = await be.get(he, []);
          ue || p(Array.isArray(ge) ? ge : []);
        })(),
        () => {
          ue = !0;
        }
      );
    }, [t, n == null ? void 0 : n.id]));
  const Y = l.useCallback(
      async (ue) => {
        if (!(n != null && n.id) || !ue) return;
        const he = `chat_app_drafts_${(n == null ? void 0 : n.id) || (n == null ? void 0 : n.contactId)}`,
          ge = (await be.get(he, [])) || [],
          G = (Array.isArray(ge) ? ge : []).filter(
            (we) => String(we == null ? void 0 : we.id) !== String(ue),
          );
        (await be.set(he, G), p(G));
      },
      [n == null ? void 0 : n.id],
    ),
    U = l.useCallback((ue) => {
      ue != null &&
        ue.id &&
        w({ id: String(ue.id), preview: String(ue.preview || "").trim() });
    }, []),
    ce = l.useCallback((ue, re) => {
      ue !== re &&
        (x(ue === "drafts" && re === "story" ? "forward" : "backward"), h(re));
    }, []);
  (l.useEffect(() => {
    if (d !== yo || m !== "story" || !y) return;
    ((_.current += 1),
      _.current,
      k(""),
      M(""),
      S(""),
      T(""),
      L(""),
      F(!1),
      $(!1));
    const ue = (re) => new Promise((he) => setTimeout(he, re));
    (async () => (
      L(String(y.error || "")),
      k(to(y.mood)),
      T(to(y.sent)),
      await ue(220),
      !String(y.error || "").trim() && (M(to(y.input)), S(to(y.reason)))
    ))();
  }, [d, m, y]),
    l.useEffect(() => {
      !(n != null && n.id) ||
        !(P.length > 0 || Object.keys(O).length > 0) ||
        be.set(FN(n.id), { groups: P, groupMessages: O });
    }, [n == null ? void 0 : n.id, P, O]));
  const pe = l.useCallback(async () => {
      var ue;
      if (n) {
        ne(!0);
        try {
          if (i) {
            const ge = [{ sender: "me", text: oY(R, oe, ye, ee) }],
              J = await i(
                ge,
                n,
                "system_generation",
                {},
                [],
                [],
                [],
                !1,
                "",
                xe,
              ),
              G = iY(J ?? "");
            if (G && ((ue = G.groups) == null ? void 0 : ue.length) > 0) {
              const we = Date.now();
              z((Q) => {
                const ve = new Set(Q.map((te) => te.title)),
                  Ve = G.groups.filter((te) => !ve.has(te.title)),
                  Ae = Ve.map((te, Se) => ({ ...te, id: `g_${we}_${Se}` }));
                return Ae.length === 0
                  ? Q
                  : (Z((te) => {
                      const Se = { ...te };
                      return (
                        Ve.forEach((Fe, $e) => {
                          var Xe;
                          const tt =
                            (Xe = G.groupMessages) == null ? void 0 : Xe[Fe.id];
                          tt && Array.isArray(tt) && (Se[Ae[$e].id] = tt);
                        }),
                        Se
                      );
                    }),
                    [...Q, ...Ae]);
              });
              return;
            }
          }
          const re = zN(R, oe, ye);
          (z((he) => {
            const ge = [...he],
              J = new Set(he.map((we) => we.title)),
              G = Date.now();
            return (
              re.forEach((we, Q) => {
                J.has(we.title) || ge.push({ ...we, id: `g_${G}_${Q}` });
              }),
              ge
            );
          }),
            Z((he) => ({ ...he })));
        } catch {
          const he = zN(R, oe, ye);
          z((ge) => {
            const J = [...ge],
              G = new Set(ge.map((Q) => Q.title)),
              we = Date.now();
            return (
              he.forEach((Q, ve) => {
                G.has(Q.title) || J.push({ ...Q, id: `g_${we}_${ve}` });
              }),
              J.length ? J : he
            );
          });
        } finally {
          ne(!1);
        }
      }
    }, [n, R, oe, ye, ee, i, xe]),
    se = l.useCallback(
      (ue) => {
        const re = O[ue.id],
          he = re || RN(ue.title, R);
        (re || Z((ge) => ({ ...ge, [ue.id]: he })), q({ ...ue, messages: he }));
      },
      [R, O],
    ),
    Te = l.useCallback((ue, re) => {
      const he = Array.isArray(ue) ? ue : [],
        ge = Array.isArray(re) ? re : [],
        J = (() => {
          const we = he
              .slice()
              .reverse()
              .find((ve) => (ve == null ? void 0 : ve.timestamp)),
            Q =
              we != null && we.timestamp
                ? new Date(we.timestamp).getTime()
                : NaN;
          return Number.isFinite(Q) ? Q : Date.now() - 10 * 60 * 1e3;
        })();
      let G;
      if (Math.random() < 0.45) {
        const we = Date.now(),
          Q = Math.floor(Math.random() * 14),
          ve = new Date(we);
        (ve.setDate(ve.getDate() - Q), ve.setHours(0, 0, 0, 0));
        const Ve = ve.getTime(),
          Ae = Ve + 24 * 60 * 60 * 1e3 - 1,
          te = Q === 0 ? Math.max(Ve, we - 30 * 1e3) : Ae,
          Se = Math.max(1, te - Ve);
        G = Ve + Math.floor(Math.random() * Se);
      } else G = J + (2 + Math.floor(Math.random() * 30)) * 60 * 1e3;
      return ge.map(
        (we, Q) => (
          Q > 0 && (G += (25 + Math.floor(Math.random() * 320)) * 1e3),
          {
            ...we,
            timestamp:
              (we == null ? void 0 : we.timestamp) || new Date(G).toISOString(),
          }
        ),
      );
    }, []),
    ke = l.useCallback(
      (ue, re) => {
        (ue.stopPropagation(),
          z((he) => he.filter((ge) => ge.id !== re.id)),
          Z((he) => {
            const ge = { ...he };
            return (delete ge[re.id], ge);
          }),
          (K == null ? void 0 : K.id) === re.id && q(null));
      },
      [K == null ? void 0 : K.id],
    ),
    W = l.useCallback(async () => {
      if (!(!K || !n)) {
        ie(!0);
        try {
          if (i) {
            const re = [
                { sender: "me", text: cY(K.title, K.messages, R, oe, ye, ee) },
              ],
              he = await i(
                re,
                n,
                "system_generation",
                {},
                [],
                [],
                [],
                !1,
                "",
                xe,
              ),
              ge = lY(he ?? "");
            if (ge && ge.length > 0) {
              const J = K.id,
                G = K.messages || [],
                we = Te(G, ge),
                Q = [...G, ...we];
              (Z((ve) => ({ ...ve, [J]: Q })),
                q((ve) => (ve ? { ...ve, messages: Q } : null)));
            }
          } else {
            const ue = RN(K.title, R),
              re = K.id,
              he = K.messages || [],
              ge = Te(he, ue),
              J = [...he, ...ge];
            (Z((G) => ({ ...G, [re]: J })),
              q((G) => (G ? { ...G, messages: J } : null)));
          }
        } catch {
        } finally {
          ie(!1);
        }
      }
    }, [K, n, R, oe, ye, ee, i, xe, Te]);
  return t
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx("div", {
            className: "role-status-overlay",
            onClick: s,
            children: e.jsxs("div", {
              className: [
                "role-status-widget",
                d === yo ? "role-status-widget-drafts" : "",
                d === yo && m === "story"
                  ? "role-status-widget-drafts-story"
                  : "",
              ].join(" "),
              onClick: (ue) => ue.stopPropagation(),
              children: [
                e.jsxs("div", {
                  className: `role-status-top-bar ${d === qc ? "role-status-top-bar-groups" : ""} ${d === yo ? "role-status-top-bar-drafts" : ""}`,
                  children: [
                    d === qc
                      ? e.jsxs("div", {
                          className: "role-status-top-bar-left-col",
                          children: [
                            e.jsx("span", {
                              className: "role-status-top-bar-label",
                              children: "档案",
                            }),
                            e.jsxs("h1", {
                              className: "role-status-top-bar-title",
                              children: [
                                (n == null ? void 0 : n.remark) ||
                                  (n == null ? void 0 : n.nickname) ||
                                  (n == null ? void 0 : n.name) ||
                                  "—",
                                " · 群聊",
                              ],
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            d === yo
                              ? m === "story"
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("span", {
                                        className: "role-drafts-story-spacer",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "role-drafts-story-kicker role-drafts-story-kicker-top",
                                        children: "Heart Echo",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "role-drafts-story-back role-drafts-story-back-top",
                                        onClick: () => {
                                          ((_.current += 1),
                                            k(""),
                                            M(""),
                                            S(""),
                                            T(""),
                                            F(!1),
                                            ce("story", "drafts"));
                                        },
                                        "aria-label": "返回草稿箱",
                                        children: "‹",
                                      }),
                                    ],
                                  })
                                : e.jsxs("div", {
                                    className: "role-status-top-bar-left-col",
                                    children: [
                                      e.jsx("span", {
                                        className: "role-status-top-bar-label",
                                        children: "FRAGMENTS",
                                      }),
                                      e.jsx("h1", {
                                        className: "role-status-top-bar-title",
                                        children: "未发送的思绪",
                                      }),
                                    ],
                                  })
                              : e.jsx("span", {
                                  className: "role-status-top-bar-left",
                                  children: "档案",
                                }),
                            d !== yo &&
                              e.jsx("span", {
                                className: "role-status-top-bar-center",
                                children:
                                  (n == null ? void 0 : n.remark) ||
                                  (n == null ? void 0 : n.nickname) ||
                                  (n == null ? void 0 : n.name) ||
                                  "—",
                              }),
                          ],
                        }),
                    e.jsxs("div", {
                      className: "role-status-top-bar-right",
                      children: [
                        d === qc &&
                          e.jsx("button", {
                            type: "button",
                            className:
                              "role-status-refresh-btn role-status-refresh-btn-icon",
                            onClick: pe,
                            disabled: V,
                            "aria-label": "增量刷新",
                            children: e.jsx(pr, {
                              size: 18,
                              strokeWidth: 2,
                              className: V ? "role-status-refresh-spin" : "",
                            }),
                          }),
                        !(d === yo && m === "story") &&
                          e.jsx("button", {
                            type: "button",
                            className: "role-status-close",
                            onClick: s,
                            "aria-label": "关闭",
                            children:
                              d === qc
                                ? e.jsx(B0, { size: 18, strokeWidth: 2 })
                                : e.jsx(Ts, { size: 16, strokeWidth: 2 }),
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "role-status-main",
                  children: [
                    d === yx &&
                      e.jsx("div", {
                        className: "role-status-profile-tab",
                        children: (() => {
                          var he;
                          const re =
                            ((he = ((a == null ? void 0 : a.messages) || [])
                              .filter(
                                (ge) => ge.sender === "them" && ge.heartVoice,
                              )
                              .pop()) == null
                              ? void 0
                              : he.heartVoice) ?? "";
                          return e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("div", {
                                className: "role-status-hero",
                                children: [
                                  e.jsxs("div", {
                                    className: "role-status-avatar-wrap",
                                    children: [
                                      e.jsx("div", {
                                        className: "role-status-avatar-frame",
                                      }),
                                      e.jsx("div", {
                                        className: "role-status-avatar-inner",
                                        children: e.jsx("img", {
                                          src:
                                            (n == null ? void 0 : n.avatar) ||
                                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${R}`,
                                          alt: "",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "role-status-metrics",
                                    children: [
                                      e.jsxs("div", {
                                        className: "role-status-metric-group",
                                        children: [
                                          e.jsx("span", {
                                            className: "role-status-metric-val",
                                            children: H.nodes,
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "role-status-metric-label",
                                            children: "节点",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "role-status-metric-group",
                                        children: [
                                          e.jsx("span", {
                                            className: "role-status-metric-val",
                                            children: H.accessors,
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "role-status-metric-label",
                                            children: "接入数",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "role-status-bio",
                                children: [
                                  e.jsx("div", {
                                    className: "role-status-name",
                                    children:
                                      (n == null ? void 0 : n.remark) ||
                                      (n == null ? void 0 : n.nickname) ||
                                      (n == null ? void 0 : n.name) ||
                                      "—",
                                  }),
                                  e.jsx("div", {
                                    className: "role-status-heart-label",
                                    children: "心语",
                                  }),
                                  e.jsx("div", {
                                    className: "role-status-desc",
                                    children: re
                                      ? re.replace(
                                          /\s*\|\|\s*|｜｜/g,
                                          `
`,
                                        )
                                      : "",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "role-status-actions",
                                children: [
                                  e.jsx("button", {
                                    type: "button",
                                    className:
                                      "role-status-btn role-status-btn-primary",
                                    disabled: !X,
                                    onClick: () =>
                                      X && typeof o == "function" && o(n),
                                    children: "今日行踪",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    className: "role-status-btn",
                                    onClick: () =>
                                      typeof c == "function" && c(n),
                                    children: "计划",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "role-status-sync",
                                children: [
                                  e.jsxs("div", {
                                    className: "role-status-sync-header",
                                    children: [
                                      e.jsx("span", { children: "同步率" }),
                                      e.jsx("span", { children: "75%" }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "role-status-progress-track",
                                    children: e.jsx("div", {
                                      className: "role-status-progress-fill",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          });
                        })(),
                      }),
                    d === qc &&
                      e.jsx("div", {
                        className:
                          "role-status-groups-tab role-status-groups-tab-ins",
                        children: e.jsxs("div", {
                          className:
                            "role-status-group-cards role-status-group-cards-ins",
                          children: [
                            P.length === 0 &&
                              !V &&
                              e.jsx("p", {
                                className: "role-status-groups-empty",
                                children:
                                  "点击顶栏刷新图标，根据角色人设与绑定用户生成群聊卡片",
                              }),
                            P.map((ue, re) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "role-status-group-card role-status-group-card-ins",
                                  onClick: () => se(ue),
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "role-status-group-card-indicator",
                                      style: { opacity: re === 0 ? 0.8 : 0.3 },
                                    }),
                                    e.jsxs("div", {
                                      className: "role-status-group-card-inner",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "role-status-group-card-head",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "role-status-group-card-num",
                                              children: String(re + 1).padStart(
                                                2,
                                                "0",
                                              ),
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              className:
                                                "role-status-group-card-delete",
                                              onClick: (he) => ke(he, ue),
                                              "aria-label": "删除",
                                              children: e.jsx(_n, {
                                                size: 16,
                                                strokeWidth: 1.5,
                                              }),
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "role-status-group-card-text",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "role-status-group-card-title",
                                              children: ue.title,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "role-status-group-card-sub",
                                              children: "查看群聊记录",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                ue.id,
                              ),
                            ),
                          ],
                        }),
                      }),
                    d === yo &&
                      e.jsx("div", {
                        className: "role-status-archive-tab",
                        children: e.jsxs("div", {
                          className: "role-drafts-shell",
                          children: [
                            e.jsx("div", {
                              className: [
                                "role-drafts-page",
                                m === "drafts"
                                  ? "role-drafts-page-active"
                                  : "role-drafts-page-hidden",
                                g === "backward" && m === "drafts"
                                  ? "role-drafts-slide-right-in"
                                  : "",
                                g === "forward" && m !== "drafts"
                                  ? "role-drafts-slide-left-out"
                                  : "",
                              ].join(" "),
                              children: e.jsx("div", {
                                className: "role-drafts-list no-scrollbar",
                                children:
                                  f.length === 0
                                    ? e.jsx("p", {
                                        className: "role-drafts-empty",
                                        children:
                                          "暂无未发送的思绪（只有部分爱心回复会生成草稿）",
                                      })
                                    : f.map((ue, re) =>
                                        e.jsxs(
                                          "button",
                                          {
                                            type: "button",
                                            className: "role-drafts-card",
                                            onClick: () => {
                                              (v(ue), ce("drafts", "story"));
                                            },
                                            onContextMenu: (he) => {
                                              (he.preventDefault(),
                                                he.stopPropagation(),
                                                U(ue));
                                            },
                                            onTouchStart: () => {
                                              (clearTimeout(b.current),
                                                (b.current = setTimeout(() => {
                                                  U(ue);
                                                }, 550)));
                                            },
                                            onTouchEnd: () => {
                                              (clearTimeout(b.current),
                                                (b.current = null));
                                            },
                                            onTouchMove: () => {
                                              (clearTimeout(b.current),
                                                (b.current = null));
                                            },
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "role-drafts-card-head",
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "role-drafts-dot",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "role-drafts-time",
                                                    children:
                                                      (ue.ts
                                                        ? new Date(
                                                            ue.ts,
                                                          ).toLocaleTimeString(
                                                            [],
                                                            {
                                                              hour: "2-digit",
                                                              minute: "2-digit",
                                                            },
                                                          )
                                                        : "") || "刚才",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "role-drafts-preview",
                                                children:
                                                  String(
                                                    ue.preview || "",
                                                  ).trim() || "…",
                                              }),
                                            ],
                                          },
                                          ue.id || re,
                                        ),
                                      ),
                              }),
                            }),
                            !!N &&
                              e.jsx("div", {
                                className: "role-drafts-confirm-overlay",
                                onClick: () => w(null),
                                children: e.jsxs("div", {
                                  className: "role-drafts-confirm-modal",
                                  onClick: (ue) => ue.stopPropagation(),
                                  children: [
                                    e.jsx("div", {
                                      className: "role-drafts-confirm-title",
                                      children: "删除这条草稿？",
                                    }),
                                    e.jsx("div", {
                                      className: "role-drafts-confirm-desc",
                                      children: N.preview
                                        ? `“${N.preview}”`
                                        : "删除后不可恢复。",
                                    }),
                                    e.jsxs("div", {
                                      className: "role-drafts-confirm-actions",
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          className: "role-drafts-confirm-btn",
                                          onClick: () => w(null),
                                          children: "取消",
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          className:
                                            "role-drafts-confirm-btn role-drafts-confirm-btn-danger",
                                          onClick: async () => {
                                            const ue = N.id;
                                            (w(null), await Y(ue));
                                          },
                                          children: "删除",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            e.jsx("div", {
                              className: [
                                "role-drafts-page",
                                m === "story" ? "role-drafts-page-story" : "",
                                m === "story"
                                  ? "role-drafts-page-active"
                                  : "role-drafts-page-hidden",
                                g === "forward" && m === "story"
                                  ? "role-drafts-slide-left-in"
                                  : "",
                                g === "backward" && m !== "story"
                                  ? "role-drafts-slide-right-out"
                                  : "",
                              ].join(" "),
                              children: e.jsxs("div", {
                                className: "role-drafts-story-shell",
                                children: [
                                  e.jsx("div", {
                                    className: "role-drafts-story-cover",
                                    "aria-hidden": "true",
                                    children:
                                      (n != null && n.background) ||
                                      (n != null && n.cover)
                                        ? e.jsx("img", {
                                            src:
                                              (n == null
                                                ? void 0
                                                : n.background) ||
                                              (n == null ? void 0 : n.cover),