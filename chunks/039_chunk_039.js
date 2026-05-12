                  children: [
                    e.jsx("span", {
                      className:
                        "text-xs font-bold text-gray-500 uppercase tracking-wider",
                      children: "最近",
                    }),
                    e.jsx("input", {
                      type: "number",
                      className:
                        "flex-1 bg-transparent text-center font-serif text-xl italic text-gray-900 outline-none border-b border-gray-300 focus:border-gray-900 transition-colors",
                      placeholder: "25",
                      defaultValue: 25,
                      id: je,
                      onKeyDown: (se) => {
                        if (se.key === "Enter") {
                          const Te = parseInt(se.target.value) || 25;
                          le(Te);
                        }
                      },
                    }),
                    e.jsx("span", {
                      className:
                        "text-xs font-bold text-gray-500 uppercase tracking-wider",
                      children: "回合",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    e.jsx("button", {
                      onClick: () => {
                        const se = document.getElementById(je),
                          Te = parseInt(se == null ? void 0 : se.value) || 50;
                        le(Te);
                      },
                      className:
                        "py-4 bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-black transition-colors",
                      children: "确认提取",
                    }),
                    e.jsx("button", {
                      onClick: () => le(0),
                      className:
                        "py-4 border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase hover:border-gray-900 hover:text-gray-900 transition-colors",
                      children: "提取全部",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => _(!1),
                  className:
                    "w-full py-2 text-[10px] text-gray-400 tracking-widest uppercase hover:text-gray-900 transition-colors",
                  children: "取消",
                }),
              ],
            }),
          }),
      ],
    });
  };
function HA({
  value: t,
  onChange: s,
  compact: n = !1,
  collapseWhenAll: a = !1,
}) {
  const r = l.useMemo(() => _S(), []),
    [i, o] = l.useState(t),
    [c, d] = l.useState(() => (n || !a ? !0 : t != null));
  (l.useEffect(() => {
    o(t);
  }, [t]),
    l.useEffect(() => {
      t != null && a && d(!0);
    }, [t, a]));
  const u = i == null,
    f = l.useCallback(() => {
      (o(null), s(null));
    }, [s]),
    p = l.useCallback(
      (x) => {
        if (i == null) {
          const b = [x];
          (o(b), s(b));
          return;
        }
        const y = new Set(i);
        y.has(x) ? y.delete(x) : y.add(x);
        const v = [...y];
        v.length === 0 ? (o(null), s(null)) : (o(v), s(v));
      },
      [i, s],
    ),
    m = (x) =>
      n
        ? `px-2 py-0.5 rounded-full text-[10px] font-bold border transition-colors ${x ? "bg-stone-900 text-white border-stone-900" : "bg-white/70 text-stone-600 border-stone-200"}`
        : `px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors ${x ? "bg-stone-900 text-white border-stone-900" : "bg-stone-100 text-stone-600 border-stone-200"}`;
  if (n)
    return e.jsxs("div", {
      className: "flex flex-wrap items-center gap-1.5",
      children: [
        e.jsx("span", {
          className: "text-[10px] text-stone-500 font-semibold shrink-0",
          children: "检索范围",
        }),
        e.jsx("button", {
          type: "button",
          className: m(u),
          onClick: f,
          children: "全部",
        }),
        r.map((x) => {
          const y = !u && (i || []).includes(x.id);
          return e.jsx(
            "button",
            {
              type: "button",
              className: m(y),
              onClick: () => p(x.id),
              children: x.label,
            },
            x.id,
          );
        }),
      ],
    });
  const h = AS(i),
    g = !a || c;
  return e.jsxs("div", {
    className:
      "rounded-sm border border-gray-200/90 bg-gradient-to-b from-[#faf9f6] to-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] overflow-hidden",
    children: [
      a &&
        e.jsxs("button", {
          type: "button",
          onClick: () => d((x) => !x),
          className:
            "w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-gray-50/70 transition-colors group",
          children: [
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("p", {
                  className:
                    "text-[10px] font-bold tracking-[0.22em] text-gray-400 uppercase mb-1",
                  children: "检索范围",
                }),
                e.jsx("p", {
                  className:
                    "font-serif text-sm italic text-gray-900 leading-snug pr-2 line-clamp-2",
                  children: h,
                }),
              ],
            }),
            e.jsxs("span", {
              className:
                "shrink-0 inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase group-hover:text-gray-700 transition-colors",
              children: [
                c ? "收起" : "选择",
                c
                  ? e.jsx(hp, {
                      size: 15,
                      strokeWidth: 2,
                      className: "opacity-70",
                    })
                  : e.jsx(aa, {
                      size: 15,
                      strokeWidth: 2,
                      className: "opacity-70",
                    }),
              ],
            }),
          ],
        }),
      g &&
        e.jsxs("div", {
          className: `space-y-4 ${a ? "px-4 pb-4 pt-1 border-t border-gray-100/90" : "p-4"}`,
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: f,
              className: `w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-3.5 rounded-sm border text-left transition-all duration-200 ${u ? "border-gray-900 bg-gray-900 text-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.25)]" : "border-gray-200/95 bg-white hover:border-gray-400 hover:bg-[#fafaf8]"}`,
              children: [
                e.jsx("span", {
                  className: `font-serif text-base italic ${u ? "text-white" : "text-gray-900"}`,
                  children: "全部内置教程",
                }),
                e.jsx("span", {
                  className: `text-[10px] tracking-[0.12em] font-mono ${u ? "text-white/75" : "text-gray-400"}`,
                  children: "不限制应用 · 与「啾啾小助手」默认一致",
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  className: "flex items-baseline justify-between gap-2 mb-2.5",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                      children: "指定范围",
                    }),
                    !u &&
                      e.jsxs("span", {
                        className:
                          "text-[10px] font-mono text-gray-400 tabular-nums",
                        children: ["已选 ", (i || []).length, " 项"],
                      }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "max-h-[min(260px,42vh)] overflow-y-auto overscroll-contain pr-1 -mr-1 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.15)_transparent]",
                  children: e.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                    children: r.map((x) => {
                      const y = !u && (i || []).includes(x.id);
                      return e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => p(x.id),
                          className: `relative flex items-center justify-between gap-2 min-h-[44px] px-3 py-2.5 rounded-sm border text-left transition-all duration-150 ${y ? "border-gray-900 bg-gray-900/[0.04] shadow-[inset_3px_0_0_0_rgb(17,24,39)]" : "border-gray-200/90 bg-white hover:border-gray-300 hover:bg-gray-50/80"}`,
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[11px] font-medium text-gray-800 leading-snug pr-1",
                              children: x.label,
                            }),
                            e.jsx("span", {
                              className: `shrink-0 w-4 h-4 rounded-sm border flex items-center justify-center text-[10px] ${y ? "border-gray-900 bg-gray-900 text-white" : "border-gray-300 bg-white text-transparent"}`,
                              "aria-hidden": !0,
                              children: "✓",
                            }),
                          ],
                        },
                        x.id,
                      );
                    }),
                  }),
                }),
              ],
            }),
            e.jsx("p", {
              className:
                "text-[10px] text-gray-400 leading-relaxed border-t border-gray-100 pt-3 font-serif",
              children: "多选生效于下一条提问；选「全部」则不筛选应用来源。",
            }),
          ],
        }),
    ],
  });
}
const IW = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
function Xv({
  sectionNumber: t = "05",
  showCSSEditor: s,
  setShowCSSEditor: n,
  showAllPresets: a,
  setShowAllPresets: r,
  activePresetId: i,
  setActivePresetId: o,
  presets: c = [],
  copiedPresetId: d,
  handleCopyPresetCss: u,
  handleExportPreset: f,
  handleDeletePresetWithConfirm: p,
  cssImportRef: m,
  presetPickerOpen: h,
  setPresetPickerOpen: g,
  presetPickerRef: x,
  editingCSS: y,
  setEditingCSS: v,
  handleUpdatePreset: b,
  newPresetName: N,
  setNewPresetName: w,
  handleSavePreset: _,
}) {
  var A;
  return e.jsxs(We.div, {
    variants: IW,
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "flex items-end gap-4",
        children: [
          e.jsx("span", {
            className: "text-4xl font-serif text-gray-200 leading-none",
            children: t,
          }),
          e.jsx("h3", {
            className: "text-xl font-serif italic text-gray-900 leading-tight",
            children: "视觉美学",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-center mb-6",
            children: [
              e.jsx("p", {
                className: "font-serif text-xl italic text-gray-800",
                children: "视觉引擎",
              }),
              e.jsx("button", {
                onClick: () => n(!s),
                className:
                  "text-[10px] tracking-widest underline text-gray-400 hover:text-gray-900",
                children: s ? "关闭编辑器" : "打开编辑器",
              }),
            ],
          }),
          e.jsx(Os, {
            children:
              s &&
              e.jsxs(We.div, {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                            children: "预设视图",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex rounded-sm border border-gray-200 overflow-hidden bg-gray-50/50",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: () => r(!1),
                                className: `px-3 py-1.5 text-[10px] tracking-widest font-bold transition-all ${a ? "text-gray-400 hover:text-gray-600" : "bg-gray-900 text-white"}`,
                                children: "下拉选择",
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => r(!0),
                                className: `px-3 py-1.5 text-[10px] tracking-widest font-bold transition-all ${a ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-600"}`,
                                children: "展开列表",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                                    children: "预设列表",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-wrap gap-2 items-center",
                                    children: [
                                      e.jsx("button", {
                                        onClick: () => o("default"),
                                        className: `px-3 py-1.5 text-[10px] tracking-widest font-bold transition-colors whitespace-nowrap border ${i === "default" ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"}`,
                                        children: "默认",
                                      }),
                                      c
                                        .filter((k) => k.id !== "default")
                                        .map((k) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex items-center border border-gray-200 overflow-hidden",
                                              children: [
                                                e.jsx("button", {
                                                  onClick: () => o(k.id),
                                                  className: `px-3 py-1.5 text-[10px] tracking-widest font-bold transition-colors whitespace-nowrap ${i === k.id ? "bg-gray-900 text-white" : "bg-white text-gray-500 hover:bg-gray-50"}`,
                                                  children:
                                                    k.name.toUpperCase(),
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "w-px h-4 bg-gray-200",
                                                  "aria-hidden": !0,
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => u(k.id),
                                                  className:
                                                    "px-2 py-1.5 text-gray-400 hover:bg-gray-100 transition-colors",
                                                  title:
                                                    d === k.id
                                                      ? "已复制"
                                                      : "复制 CSS",
                                                  children:
                                                    d === k.id
                                                      ? e.jsx("span", {
                                                          className:
                                                            "text-[9px] text-gray-600 font-medium",
                                                          children: "已复制",
                                                        })
                                                      : e.jsx(Ao, {
                                                          size: 11,
                                                          strokeWidth: 2,
                                                        }),
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => f(k.id),
                                                  className:
                                                    "px-2 py-1.5 text-gray-400 hover:bg-gray-100 transition-colors",
                                                  title: "导出为 JSON",
                                                  children: e.jsx(Eu, {
                                                    size: 11,
                                                    strokeWidth: 2,
                                                  }),
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => p(k.id),
                                                  className:
                                                    "px-2 py-1.5 text-gray-400 hover:bg-red-50 hover:text-red-500/80 transition-colors",
                                                  title: "删除预设",
                                                  children: e.jsx(_n, {
                                                    size: 11,
                                                    strokeWidth: 2,
                                                  }),
                                                }),
                                              ],
                                            },
                                            k.id,
                                          ),
                                        ),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("button", {
                                onClick: () => {
                                  var k;
                                  return (k = m == null ? void 0 : m.current) ==
                                    null
                                    ? void 0
                                    : k.click();
                                },
                                className:
                                  "flex items-center gap-2 text-[10px] tracking-widest font-bold text-gray-400 hover:text-gray-900 transition-colors border-b border-dashed border-gray-300 hover:border-gray-900 pb-0.5",
                                children: [
                                  e.jsx(Ta, { size: 12, strokeWidth: 2 }),
                                  "导入预设",
                                ],
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "space-y-1.5",
                            ref: x,
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-bold tracking-widest text-gray-400 uppercase block",
                                children: "当前预设",
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "relative flex-1 min-w-0",
                                    children: [
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () => g((k) => !k),
                                        className:
                                          "w-full flex items-center justify-between gap-2 px-3 py-2.5 border border-gray-200 bg-white hover:border-gray-300 transition-colors text-left",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "font-serif text-sm italic text-gray-800 truncate",
                                            children:
                                              i === "default"
                                                ? "默认"
                                                : (((A = c.find(
                                                    (k) => k.id === i,
                                                  )) == null
                                                    ? void 0
                                                    : A.name) ?? "默认"),
                                          }),
                                          e.jsx(aa, {
                                            size: 14,
                                            className: `flex-shrink-0 text-gray-400 transition-transform ${h ? "rotate-180" : ""}`,
                                          }),
                                        ],
                                      }),
                                      e.jsx(Os, {
                                        children:
                                          h &&
                                          e.jsxs(We.div, {
                                            initial: { opacity: 0, y: -4 },
                                            animate: { opacity: 1, y: 0 },
                                            exit: { opacity: 0, y: -4 },
                                            transition: { duration: 0.15 },
                                            className:
                                              "absolute left-0 right-0 top-full mt-1 z-50 max-h-56 overflow-y-auto border border-gray-200 bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] py-1",
                                            children: [
                                              e.jsxs("button", {
                                                type: "button",
                                                onClick: () => {
                                                  (o("default"), g(!1));
                                                },
                                                className: `w-full px-3 py-2.5 text-left flex items-center justify-between ${i === "default" ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`,
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "font-serif text-sm italic",
                                                    children: "默认",
                                                  }),
                                                  i === "default" &&
                                                    e.jsx("span", {
                                                      className:
                                                        "text-[10px] tracking-widest text-gray-400",
                                                      children: "当前",
                                                    }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "border-t border-gray-100 my-1",
                                              }),
                                              c
                                                .filter(
                                                  (k) => k.id !== "default",
                                                )
                                                .map((k) =>
                                                  e.jsxs(
                                                    "button",
                                                    {
                                                      type: "button",
                                                      onClick: () => {
                                                        (o(k.id), g(!1));
                                                      },
                                                      className: `w-full px-3 py-2.5 text-left flex items-center justify-between ${i === k.id ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`,
                                                      children: [
                                                        e.jsx("span", {
                                                          className:
                                                            "font-serif text-sm italic truncate",
                                                          children: k.name,
                                                        }),
                                                        i === k.id &&
                                                          e.jsx("span", {
                                                            className:
                                                              "text-[10px] tracking-widest text-gray-400",
                                                            children: "当前",
                                                          }),
                                                      ],
                                                    },
                                                    k.id,
                                                  ),
                                                ),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    onClick: () => {
                                      var k;
                                      return (k =
                                        m == null ? void 0 : m.current) == null
                                        ? void 0
                                        : k.click();
                                    },
                                    className:
                                      "flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 bg-white hover:border-gray-300 text-[10px] tracking-widest font-bold text-gray-500 hover:text-gray-900 transition-colors shrink-0",
                                    children: [
                                      e.jsx(Ta, { size: 12, strokeWidth: 2 }),
                                      "导入",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "relative",
                    children: e.jsx("textarea", {
                      value: y,
                      onChange: (k) => v(k.target.value),
                      className:
                        "w-full h-64 bg-[#F5F5F5] text-gray-600 text-[11px] font-mono p-6 resize-none outline-none border border-transparent focus:border-gray-300 transition-colors",
                      placeholder: "/* CSS 代码 */",
                      spellCheck: "false",
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      i !== "default" &&
                        e.jsx("button", {
                          onClick: b,
                          className:
                            "flex-1 py-3 border border-gray-200 text-[10px] tracking-widest font-bold text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors",
                          children: "更新",
                        }),
                      e.jsxs("div", {
                        className:
                          "flex-[2] flex flex-col sm:flex-row gap-2 min-w-0",
                        children: [
                          e.jsx("input", {
                            value: N,
                            onChange: (k) => w(k.target.value),
                            placeholder:
                              i === "default" ? "新预设名称" : "预设名称",
                            className:
                              "flex-1 min-w-0 bg-transparent border-b border-gray-200 px-2 text-xs outline-none font-serif placeholder-gray-300 focus:border-gray-900 transition-colors",
                          }),
                          e.jsx("button", {
                            onClick: _,
                            disabled: !N.trim(),
                            className:
                              "px-6 py-2 sm:py-0 bg-gray-900 text-white text-[10px] tracking-widest font-bold hover:bg-black transition-colors disabled:opacity-50 shrink-0",
                            children: "保存",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          }),
        ],
      }),
    ],
  });
}
const EW = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } },
  LN = [
    { value: "中国-上海 Asia/Shanghai", label: "中国-上海（Asia/Shanghai）" },
    {
      value: "中国-乌鲁木齐 Asia/Urumqi",
      label: "中国-乌鲁木齐（Asia/Urumqi）",
    },
    { value: "中国香港 Asia/Hong_Kong", label: "中国香港（Asia/Hong_Kong）" },
    { value: "中国台北 Asia/Taipei", label: "中国台北（Asia/Taipei）" },
    { value: "日本-东京 Asia/Tokyo", label: "日本-东京（Asia/Tokyo）" },
    { value: "日本 Tokyo Asia/Tokyo", label: "日本（Tokyo / Asia/Tokyo）" },
    { value: "日本-大阪 Asia/Tokyo", label: "日本-大阪（Asia/Tokyo）" },
    { value: "日本-札幌 Asia/Tokyo", label: "日本-札幌（Asia/Tokyo）" },
    { value: "日本-福冈 Asia/Tokyo", label: "日本-福冈（Asia/Tokyo）" },
    { value: "韩国-首尔 Asia/Seoul", label: "韩国-首尔（Asia/Seoul）" },
    { value: "韩国 Korea Asia/Seoul", label: "韩国（Seoul / Asia/Seoul）" },
    { value: "韩国-釜山 Asia/Seoul", label: "韩国-釜山（Asia/Seoul）" },
    { value: "朝鲜-平壤 Asia/Pyongyang", label: "朝鲜-平壤（Asia/Pyongyang）" },
    { value: "新加坡 Asia/Singapore", label: "新加坡（Asia/Singapore）" },
    {
      value: "马来西亚-吉隆坡 Asia/Kuala_Lumpur",
      label: "马来西亚-吉隆坡（Asia/Kuala_Lumpur）",
    },
    { value: "泰国-曼谷 Asia/Bangkok", label: "泰国-曼谷（Asia/Bangkok）" },
    {
      value: "越南-胡志明 Asia/Ho_Chi_Minh",
      label: "越南-胡志明（Asia/Ho_Chi_Minh）",
    },
    {
      value: "越南-河内 Asia/Ho_Chi_Minh",
      label: "越南-河内（Asia/Ho_Chi_Minh）",
    },
    { value: "印尼-雅加达 Asia/Jakarta", label: "印尼-雅加达（Asia/Jakarta）" },
    {
      value: "印尼-巴厘岛 Asia/Makassar",
      label: "印尼-巴厘岛（Asia/Makassar）",
    },
    {
      value: "菲律宾-马尼拉 Asia/Manila",
      label: "菲律宾-马尼拉（Asia/Manila）",
    },
    {
      value: "蒙古-乌兰巴托 Asia/Ulaanbaatar",
      label: "蒙古-乌兰巴托（Asia/Ulaanbaatar）",
    },
    {
      value: "印度-加尔各答 Asia/Kolkata",
      label: "印度-加尔各答（Asia/Kolkata）",
    },
    { value: "印度-孟买 Asia/Kolkata", label: "印度-孟买（Asia/Kolkata）" },
    { value: "印度-新德里 Asia/Kolkata", label: "印度-新德里（Asia/Kolkata）" },
    {
      value: "巴基斯坦-卡拉奇 Asia/Karachi",
      label: "巴基斯坦-卡拉奇（Asia/Karachi）",
    },
    { value: "孟加拉-达卡 Asia/Dhaka", label: "孟加拉-达卡（Asia/Dhaka）" },
    {
      value: "尼泊尔-加德满都 Asia/Kathmandu",
      label: "尼泊尔-加德满都（Asia/Kathmandu）",
    },
    {
      value: "斯里兰卡-科伦坡 Asia/Colombo",
      label: "斯里兰卡-科伦坡（Asia/Colombo）",
    },
    { value: "阿联酋-迪拜 Asia/Dubai", label: "阿联酋-迪拜（Asia/Dubai）" },
    { value: "卡塔尔-多哈 Asia/Qatar", label: "卡塔尔-多哈（Asia/Qatar）" },
    { value: "科威特 Asia/Kuwait", label: "科威特（Asia/Kuwait）" },
    { value: "沙特-利雅得 Asia/Riyadh", label: "沙特-利雅得（Asia/Riyadh）" },
    { value: "以色列 Asia/Jerusalem", label: "以色列（Asia/Jerusalem）" },
    { value: "伊朗-德黑兰 Asia/Tehran", label: "伊朗-德黑兰（Asia/Tehran）" },
    {
      value: "土耳其-伊斯坦布尔 Europe/Istanbul",
      label: "土耳其-伊斯坦布尔（Europe/Istanbul）",
    },
    { value: "英国-伦敦 Europe/London", label: "英国-伦敦（Europe/London）" },
    { value: "法国-巴黎 Europe/Paris", label: "法国-巴黎（Europe/Paris）" },
    { value: "德国-柏林 Europe/Berlin", label: "德国-柏林（Europe/Berlin）" },
    { value: "意大利-罗马 Europe/Rome", label: "意大利-罗马（Europe/Rome）" },
    {
      value: "西班牙-马德里 Europe/Madrid",
      label: "西班牙-马德里（Europe/Madrid）",
    },
    {
      value: "荷兰-阿姆斯特丹 Europe/Amsterdam",
      label: "荷兰-阿姆斯特丹（Europe/Amsterdam）",
    },
    {
      value: "瑞士-苏黎世 Europe/Zurich",
      label: "瑞士-苏黎世（Europe/Zurich）",
    },
    {
      value: "瑞典-斯德哥尔摩 Europe/Stockholm",
      label: "瑞典-斯德哥尔摩（Europe/Stockholm）",
    },
    { value: "波兰-华沙 Europe/Warsaw", label: "波兰-华沙（Europe/Warsaw）" },
    { value: "乌克兰-基辅 Europe/Kyiv", label: "乌克兰-基辅（Europe/Kyiv）" },
    {
      value: "俄罗斯-莫斯科 Europe/Moscow",
      label: "俄罗斯-莫斯科（Europe/Moscow）",
    },
    {
      value: "南非-约翰内斯堡 Africa/Johannesburg",
      label: "南非-约翰内斯堡（Africa/Johannesburg）",
    },
    { value: "埃及-开罗 Africa/Cairo", label: "埃及-开罗（Africa/Cairo）" },
    {
      value: "尼日利亚-拉各斯 Africa/Lagos",
      label: "尼日利亚-拉各斯（Africa/Lagos）",
    },
    {
      value: "肯尼亚-内罗毕 Africa/Nairobi",
      label: "肯尼亚-内罗毕（Africa/Nairobi）",
    },
    {
      value: "摩洛哥-卡萨布兰卡 Africa/Casablanca",
      label: "摩洛哥-卡萨布兰卡（Africa/Casablanca）",
    },
    {
      value: "美国-纽约 America/New_York",
      label: "美国-纽约（America/New_York）",
    },
    {
      value: "美国-芝加哥 America/Chicago",
      label: "美国-芝加哥（America/Chicago）",
    },
    { value: "美国-丹佛 America/Denver", label: "美国-丹佛（America/Denver）" },
    {
      value: "美国-洛杉矶 America/Los_Angeles",
      label: "美国-洛杉矶（America/Los_Angeles）",
    },
    {
      value: "美国-安克雷奇 America/Anchorage",
      label: "美国-安克雷奇（America/Anchorage）",
    },
    {
      value: "美国-檀香山 Pacific/Honolulu",
      label: "美国-檀香山（Pacific/Honolulu）",
    },
    {
      value: "加拿大-多伦多 America/Toronto",
      label: "加拿大-多伦多（America/Toronto）",
    },
    {
      value: "加拿大-温哥华 America/Vancouver",
      label: "加拿大-温哥华（America/Vancouver）",
    },
    {
      value: "墨西哥-墨西哥城 America/Mexico_City",
      label: "墨西哥-墨西哥城（America/Mexico_City）",
    },
    {
      value: "巴西-圣保罗 America/Sao_Paulo",
      label: "巴西-圣保罗（America/Sao_Paulo）",
    },
    {
      value: "阿根廷-布宜诺斯艾利斯 America/Argentina/Buenos_Aires",
      label: "阿根廷-布宜诺斯艾利斯（America/Argentina/Buenos_Aires）",
    },
    {
      value: "智利-圣地亚哥 America/Santiago",
      label: "智利-圣地亚哥（America/Santiago）",
    },
    { value: "秘鲁-利马 America/Lima", label: "秘鲁-利马（America/Lima）" },
    {
      value: "哥伦比亚-波哥大 America/Bogota",
      label: "哥伦比亚-波哥大（America/Bogota）",
    },
    {
      value: "澳大利亚-悉尼 Australia/Sydney",
      label: "澳大利亚-悉尼（Australia/Sydney）",
    },
    {
      value: "澳大利亚-珀斯 Australia/Perth",
      label: "澳大利亚-珀斯（Australia/Perth）",
    },
    {
      value: "新西兰-奥克兰 Pacific/Auckland",
      label: "新西兰-奥克兰（Pacific/Auckland）",
    },
  ];
function DN({ placeholder: t, value: s, onChange: n, selectAriaLabel: a }) {
  const r = typeof s == "string" ? s : "",
    [i, o] = pn.useState(!1),
    [c, d] = pn.useState(null),
    u = pn.useRef(null),
    f = pn.useRef(null),
    p = pn.useRef(null),
    m = pn.useMemo(() => {
      const x = r.trim().toLowerCase();
      return x
        ? LN.filter(
            (y) =>
              y.label.toLowerCase().includes(x) ||
              y.value.toLowerCase().includes(x),
          )
        : LN;
    }, [r]),
    h = pn.useCallback((x) => {
      var v;
      const y = String(x || "");
      return ((v = y.split("（")[0]) == null ? void 0 : v.trim()) || y;
    }, []);
  pn.useEffect(() => {
    if (!i) return;
    const x = () => {
      if (!u.current) return;
      const v = u.current.getBoundingClientRect(),
        b = window.innerHeight || 0,
        N = 224,
        _ = b - v.bottom < N && v.top > N;
      d({
        left: v.left,
        width: v.width,
        top: _ ? v.top - 4 : v.bottom + 4,
        openUp: _,
      });
    };
    x();
    const y = (v) => {
      var _, A;
      const b = v.target,
        N = (_ = u.current) == null ? void 0 : _.contains(b),
        w = (A = p.current) == null ? void 0 : A.contains(b);
      !N && !w && o(!1);
    };
    return (
      document.addEventListener("mousedown", y, !0),
      document.addEventListener("touchstart", y, { passive: !0, capture: !0 }),
      window.addEventListener("resize", x),
      window.addEventListener("scroll", x, !0),
      () => {
        (document.removeEventListener("mousedown", y, !0),
          document.removeEventListener("touchstart", y, !0),
          window.removeEventListener("resize", x),
          window.removeEventListener("scroll", x, !0));
      }
    );
  }, [i]);
  const g =
    i && c
      ? _i.createPortal(
          e.jsx(Os, {
            children: e.jsx(We.div, {
              ref: p,
              initial: { opacity: 0, y: c.openUp ? 4 : -4 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: c.openUp ? 4 : -4 },
              transition: { duration: 0.15 },
              className:
                "fixed z-[9999] max-h-56 overflow-y-auto border border-gray-200 bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] py-1",
              style: {
                left: c.left,
                width: c.width,
                top: c.openUp ? "auto" : c.top,
                bottom: c.openUp ? window.innerHeight - c.top : "auto",
              },
              children:
                m.length > 0
                  ? m.map((x) =>
                      e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            (n(x.value), o(!1));
                          },
                          className: `w-full px-3 py-2.5 text-left flex items-center justify-between ${r === x.value ? "bg-gray-50 text-gray-900" : "text-gray-600 hover:bg-gray-50"}`,
                          children: [
                            e.jsx("span", {
                              className: "font-serif text-xs italic truncate",
                              children: h(x.label),
                            }),
                            r === x.value &&
                              e.jsx("span", {
                                className:
                                  "text-[10px] tracking-widest text-gray-400",
                                children: "当前",
                              }),
                          ],
                        },
                        x.value,
                      ),
                    )
                  : e.jsx("div", {
                      className:
                        "px-3 py-2 text-[10px] tracking-widest text-gray-400",
                      children: "无匹配项",
                    }),
            }),
          }),
          document.body,
        )
      : null;
  return e.jsxs("div", {
    ref: u,
    className: "relative",
    children: [
      e.jsx("input", {
        type: "text",
        placeholder: t,
        value: r,
        onChange: (x) => n(x.target.value),
        className:
          "w-full bg-transparent border-b border-gray-200 text-xs py-1 pr-8 outline-none focus:border-gray-900 transition-colors placeholder-gray-300 text-gray-800 font-serif",
      }),
      e.jsx("div", {
        ref: f,
        className: "absolute right-0 top-0",
        children: e.jsx("button", {
          type: "button",
          onClick: () => o((x) => !x),
          "aria-label": a,
          className:
            "inline-flex h-5 w-5 items-center justify-center rounded-sm text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors",
          children: e.jsx(aa, {
            size: 12,
            className: `transition-transform ${i ? "rotate-180" : ""}`,
          }),
        }),
      }),
      g,
    ],
  });
}
function e2({
  sectionNumber: t = "01",
  chat: s,
  chatId: n,
  updateChatSettings: a,
  handleTestTime: r,
  handleTestWeather: i,
  timeTestResult: o,
  weatherTestResult: c,
  isTestingTime: d,
  isTestingWeather: u,
}) {
  var f, p, m, h, g, x, y, v, b, N;
  return s
    ? e.jsxs(We.div, {
        variants: EW,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: t,
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "时空氛围",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className:
                  "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between items-start mb-8",
                    children: [
                      e.jsx(Dr, {
                        size: 20,
                        className: "text-gray-400",
                        strokeWidth: 1.5,
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          var w;
                          return a(n, {
                            realTime: !((w = s.settings) != null && w.realTime),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(f = s.settings) != null && f.realTime ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (p = s.settings) != null && p.realTime
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "font-serif text-xl italic text-gray-800 mb-1",
                    children: "实时时间",
                  }),
                  e.jsx("p", {
                    className: "text-[10px] text-gray-400 leading-relaxed",
                    children: "同步彼此的时空维度",
                  }),
                  ((m = s.settings) == null ? void 0 : m.realTime) &&
                    e.jsxs("div", {
                      className: "mt-4 space-y-3 pt-4 border-t border-gray-100",
                      children: [
                        e.jsx(DN, {
                          placeholder:
                            "你的时区（例：中国-上海 Asia/Shanghai）",
                          value:
                            (h = s.settings) == null ? void 0 : h.userTimeZone,
                          onChange: (w) => a(n, { userTimeZone: w }),
                          selectAriaLabel: "选择用户时区",
                        }),
                        e.jsx(DN, {
                          placeholder:
                            "TA 的时区（例：中国-上海 Asia/Shanghai）",
                          value:
                            (g = s.settings) == null ? void 0 : g.aiTimeZone,
                          onChange: (w) => a(n, { aiTimeZone: w }),
                          selectAriaLabel: "选择 TA 的时区",
                        }),
                        e.jsx("button", {
                          onClick: r,
                          className:
                            "text-[10px] underline text-gray-400 hover:text-gray-900",
                          children: "测试同步",
                        }),
                        o &&
                          e.jsxs("div", {
                            className: "mt-2 space-y-1",
                            children: [
                              o.user &&
                                e.jsxs("div", {
                                  className:
                                    "text-[10px] text-gray-500 font-mono",
                                  children: ["用户: ", o.user],
                                }),
                              o.ai &&
                                e.jsxs("div", {
                                  className:
                                    "text-[10px] text-gray-500 font-mono",
                                  children: ["AI: ", o.ai],
                                }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] transition-all hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between items-start mb-8",
                    children: [
                      e.jsx(Th, {
                        size: 20,
                        className: "text-gray-400",
                        strokeWidth: 1.5,
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          var w;
                          return a(n, {
                            realWeather: !(
                              (w = s.settings) != null && w.realWeather
                            ),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(x = s.settings) != null && x.realWeather ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (y = s.settings) != null && y.realWeather
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "font-serif text-xl italic text-gray-800 mb-1",
                    children: "天气感知",
                  }),
                  e.jsx("p", {
                    className: "text-[10px] text-gray-400 leading-relaxed",
                    children: "感知彼此的阴晴雨雪",
                  }),
                  ((v = s.settings) == null ? void 0 : v.realWeather) &&
                    e.jsxs("div", {
                      className: "mt-4 space-y-3 pt-4 border-t border-gray-100",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("input", {
                              type: "text",
                              placeholder: "你的城市",
                              value:
                                ((b = s.settings) == null
                                  ? void 0
                                  : b.userCity) || "",
                              onChange: (w) =>
                                a(n, { userCity: w.target.value }),
                              className:
                                "w-full bg-transparent border-b border-gray-200 text-xs py-1 outline-none focus:border-gray-900 transition-colors placeholder-gray-300 font-serif",
                            }),
                            e.jsx("input", {
                              type: "text",
                              placeholder: "TA 的城市",
                              value:
                                ((N = s.settings) == null
                                  ? void 0
                                  : N.aiCity) || "",
                              onChange: (w) => a(n, { aiCity: w.target.value }),
                              className:
                                "w-full bg-transparent border-b border-gray-200 text-xs py-1 outline-none focus:border-gray-900 transition-colors placeholder-gray-300 font-serif",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: i,
                          disabled: u,
                          className:
                            "text-[10px] underline text-gray-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed",
                          children: u ? "测试中..." : "测试感知",
                        }),
                        c &&
                          e.jsxs("div", {
                            className: "mt-2 space-y-1",
                            children: [
                              c.user &&
                                e.jsxs("div", {
                                  className:
                                    "text-[10px] text-gray-500 font-mono",
                                  children: ["用户: ", c.user],
                                }),
                              c.ai &&
                                e.jsxs("div", {
                                  className:
                                    "text-[10px] text-gray-500 font-mono",
                                  children: ["AI: ", c.ai],
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
      })
    : null;
}
const LW = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
function DW({
  sectionNumber: t = "05",
  chat: s,
  chatId: n,
  updateChatSettings: a,
}) {
  var r, i, o, c, d, u, f, p, m;
  return s
    ? e.jsxs(We.div, {
        variants: LW,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: t,
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "交互连接",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "grid grid-cols-1 gap-1 bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: [
              e.jsxs("div", {
                className:
                  "p-6 flex items-center justify-between border-b border-gray-50",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-lg italic text-gray-800",
                        children: "实时翻译",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children: "跨越语言的障碍",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      var h;
                      return a(n, {
                        translationEnabled: !(
                          (h = s.settings) != null && h.translationEnabled
                        ),
                      });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(r = s.settings) != null && r.translationEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (i = s.settings) != null && i.translationEnabled
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "p-6 flex items-center justify-between border-b border-gray-50",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-lg italic text-gray-800",
                        children: "INS 气泡",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children: "连续气泡首/中/尾圆角样式（覆盖主题）",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      var h;
                      return a(n, {
                        insBubble: !((h = s.settings) != null && h.insBubble),
                      });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(o = s.settings) != null && o.insBubble ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (c = s.settings) != null && c.insBubble
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "p-6",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "font-serif text-lg italic text-gray-800",
                            children: "主动回复",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children: "允许 TA 主动发起对话",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          var h;
                          return a(n, {
                            autoMessageEnabled: !(
                              (h = s.settings) != null && h.autoMessageEnabled
                            ),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(d = s.settings) != null && d.autoMessageEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (u = s.settings) != null && u.autoMessageEnabled
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  ((f = s.settings) == null ? void 0 : f.autoMessageEnabled) &&
                    e.jsxs("div", {
                      className:
                        "mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 fade-in",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between items-center mb-3",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                              children: "触发间隔",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[10px] font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded-md",
                              children: [
                                ((p = s.settings) == null
                                  ? void 0
                                  : p.autoMessageInterval) || 30,
                                " 分钟",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("input", {
                              type: "number",
                              min: "1",
                              step: "1",
                              value:
                                ((m = s.settings) == null
                                  ? void 0
                                  : m.autoMessageInterval) ?? "",
                              onChange: (h) => {
                                const g = h.target.value;
                                if (g === "") {
                                  a(n, { autoMessageInterval: "" });
                                  return;
                                }
                                const x = parseInt(g, 10);
                                Number.isFinite(x) &&
                                  x > 0 &&
                                  a(n, { autoMessageInterval: x });
                              },
                              onBlur: (h) => {
                                h.target.value === "" &&
                                  a(n, { autoMessageInterval: 30 });
                              },
                              className:
                                "w-24 border border-gray-200 rounded-md px-2 py-1 text-[11px] text-gray-800 focus:outline-none focus:border-gray-400",
                            }),
                            e.jsx("span", {
                              className: "text-[10px] text-gray-500",
                              children: "分钟",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-gray-400 mt-2 leading-relaxed",
                          children:
                            "当您超过设定时间未发送消息时，AI 将尝试主动发起话题。",
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      })
    : null;
}
const oc = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
function $W({
  chat: t,
  contact: s,
  chatId: n,
  updateChatSettings: a,
  updateContact: r,
  avatarInputRef: i,
  fileInputRef: o,
  onClose: c,
  setShowMemories: d,
  setShowCallHistory: u,
  handleTestTime: f,
  handleTestWeather: p,
  timeTestResult: m,
  weatherTestResult: h,
  isTestingTime: g,
  isTestingWeather: x,
  minimaxVoiceIdDraft: y,
  setMinimaxVoiceIdDraft: v,
  playTTS: b,
  ttsConfig: N,
  handleTTSDiagnostics: w,
  setShowTtsLogs: _,
  voices: A,
  models: k,
  fetchVoices: C,
  showCSSEditor: M,
  setShowCSSEditor: E,
  showAllPresets: S,
  setShowAllPresets: j,
  activePresetId: T,
  setActivePresetId: I,
  presets: L,
  copiedPresetId: B,
  handleCopyPresetCss: F,
  handleExportPreset: D,
  handleDeletePresetWithConfirm: $,
  cssImportRef: P,
  presetPickerOpen: z,
  setPresetPickerOpen: O,
  presetPickerRef: Z,
  editingCSS: K,
  setEditingCSS: q,
  handleUpdatePreset: V,
  newPresetName: ne,
  setNewPresetName: le,
  handleSavePreset: ie,
  setShowClearConfirm: X,
  setShowHistorySearch: je,
  helpAssistantScope: xe,
  onHelpAssistantScopeChange: ye,
}) {
  var oe, ee, H, Y, U, ce, pe, se, Te, ke, W, ue, re, he, ge, J;
  if (!t || t.isGroup) return null;
  const R = Ap(t == null ? void 0 : t.messages);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(We.div, {
        variants: oc,
        className:
          "flex items-start gap-6 p-6 bg-white border border-gray-200 shadow-sm",
        children: [
          e.jsxs("div", {
            className:
              "relative w-24 h-24 flex-shrink-0 overflow-hidden border border-gray-100 cursor-pointer group",
            onClick: () => {
              var G;
              return (G = i == null ? void 0 : i.current) == null
                ? void 0
                : G.click();
            },
            children: [
              e.jsx("img", {
                src: s == null ? void 0 : s.avatar,
                className:
                  "w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500",
                alt: "头像",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                children: e.jsx(Za, { className: "text-white", size: 20 }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-1 min-w-0 pt-1",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                  e.jsx("span", { className: "w-2 h-2 bg-gray-900" }),
                  e.jsx("p", {
                    className:
                      "text-[10px] font-serif tracking-widest text-gray-400 uppercase",
                    children: "啾啾小助手",
                  }),
                ],
              }),
              e.jsx("h2", {
                className:
                  "text-3xl font-serif italic text-gray-900 truncate leading-none mb-2",
                children: s == null ? void 0 : s.name,
              }),
              e.jsxs("p", {
                className: "text-xs text-gray-400 font-mono",
                children: [
                  "编号: ",
                  ((s == null ? void 0 : s.id) || "").slice(0, 8).toUpperCase(),
                ],
              }),
              e.jsxs("p", {
                className: "text-xs text-gray-400 font-mono mt-1",
                children: ["对话回合: ", R],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: oc,
        className: "grid grid-cols-3 gap-4 border-y border-gray-200 py-8",
        children: [
          e.jsxs("button", {
            type: "button",
            onClick: () => {
              var G;
              return (G = o == null ? void 0 : o.current) == null
                ? void 0
                : G.click();
            },
            className: "flex flex-col items-center gap-3 group",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300",
                children: e.jsx(Za, { size: 20, strokeWidth: 1.5 }),
              }),
              e.jsx("span", {
                className:
                  "text-[10px] font-serif tracking-widest text-gray-500 group-hover:text-gray-900 uppercase",
                children: "聊天背景",
              }),
            ],
          }),
          e.jsxs("button", {
            type: "button",
            onClick: () => {
              (c == null || c(), d == null || d(!0));
            },
            className: "flex flex-col items-center gap-3 group",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300",
                children: e.jsx(Ch, { size: 20, strokeWidth: 1.5 }),
              }),
              e.jsx("span", {
                className:
                  "text-[10px] font-serif tracking-widest text-gray-500 group-hover:text-gray-900 uppercase",
                children: "独家记忆",
              }),
            ],
          }),
          e.jsxs("button", {
            type: "button",
            onClick: () => {
              (c == null || c(), u == null || u(!0));
            },
            className: "flex flex-col items-center gap-3 group",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300",
                children: e.jsx(Zr, { size: 20, strokeWidth: 1.5 }),
              }),
              e.jsx("span", {
                className:
                  "text-[10px] font-serif tracking-widest text-gray-500 group-hover:text-gray-900 uppercase",
                children: "通话记录",
              }),
            ],
          }),
        ],
      }),
      ((oe = t.settings) == null ? void 0 : oe.backgroundImage) &&
        e.jsx(We.div, {
          variants: oc,
          className: "flex justify-center -mt-4",
          children: e.jsx("button", {
            type: "button",
            onClick: () => a(n, { backgroundImage: null }),
            className:
              "text-[10px] text-gray-400 hover:text-red-500 font-mono transition-colors",
            children: "[ 移除当前背景 ]",
          }),
        }),
      e.jsxs(We.div, {
        variants: oc,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: "00",
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "教程检索范围",
              }),
            ],
          }),
          e.jsx("div", {
            className: "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: e.jsx(HA, {
              value: xe,
              onChange: ye,
              collapseWhenAll: !0,
            }),
          }),
        ],
      }),
      e.jsx(e2, {
        sectionNumber: "01",
        chat: t,
        chatId: n,
        updateChatSettings: a,
        handleTestTime: f,
        handleTestWeather: p,
        timeTestResult: m,
        weatherTestResult: h,
        isTestingTime: g,
        isTestingWeather: x,
      }),
      e.jsxs(We.div, {
        variants: oc,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: "02",
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "语音声调",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white p-8 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx(Ji, {
                        size: 20,
                        className: "text-gray-400",
                        strokeWidth: 1.5,
                      }),
                      e.jsx("span", {
                        className: "font-serif text-xl italic text-gray-800",
                        children: "语音引擎",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      var G;
                      return a(n, {
                        enableTTS: !((G = t.settings) != null && G.enableTTS),
                      });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(ee = t.settings) != null && ee.enableTTS ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (H = t.settings) != null && H.enableTTS
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              ((Y = t.settings) == null ? void 0 : Y.enableTTS) &&
                e.jsx("div", {
                  className: "space-y-8 animate-in fade-in duration-500",
                  children:
                    (N == null ? void 0 : N.provider) === "minimax"
                      ? e.jsxs("div", {
                          className:
                            "border border-gray-200 bg-[#FAFAF8] pt-6 pb-8 px-6",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-4",
                              children: [
                                e.jsx("span", {
                                  className: "w-2 h-2 bg-gray-900",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                                  children: "语音音色",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "font-serif text-lg italic text-gray-800 mb-1",
                              children: "MiniMax 配置",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] text-gray-400 mb-4 leading-relaxed",
                              children: "配置语音模型和音色",
                            }),
                            e.jsxs("div", {
                              className: "mb-4",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                                  children: "群组 ID",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value:
                                    ((U = t.settings) == null
                                      ? void 0
                                      : U.minimaxGroupId) || "",
                                  onChange: (G) =>
                                    a(n, { minimaxGroupId: G.target.value }),
                                  placeholder: "请输入 MiniMax Group ID",
                                  className:
                                    "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-mono text-gray-900 placeholder-gray-300 focus:border-gray-900 transition-colors",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "mb-4",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                                  children: "模型选择",
                                }),
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx("select", {
                                      value:
                                        ((ce = t.settings) == null
                                          ? void 0
                                          : ce.minimaxModel) || Au,
                                      onChange: (G) =>
                                        a(n, { minimaxModel: G.target.value }),
                                      className:
                                        "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 transition-colors pr-8",
                                      children: Sv(
                                        (pe = t.settings) == null
                                          ? void 0
                                          : pe.minimaxModel,
                                      ).map(({ value: G, label: we }) =>
                                        e.jsx(
                                          "option",
                                          { value: G, children: we },
                                          G,
                                        ),
                                      ),
                                    }),
                                    e.jsx(aa, {
                                      size: 14,
                                      className:
                                        "absolute right-0 top-3 text-gray-400 pointer-events-none",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "mb-4",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                                  children: "音色 ID",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: y,
                                  onChange: (G) => v(G.target.value),
                                  placeholder: "例如：male-qn-qingse",
                                  className:
                                    "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-mono text-gray-900 placeholder-gray-300 focus:border-gray-900 transition-colors",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-wrap items-center gap-3",
                              children: [
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: () => {
                                    const G = y == null ? void 0 : y.trim();
                                    (a(n, { voiceId: G }),
                                      s &&
                                        r &&
                                        G &&
                                        r(s.id, { ttsVoiceId: G }));
                                  },
                                  className:
                                    "inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-[10px] tracking-widest font-bold hover:bg-black transition-colors",
                                  children: [
                                    e.jsx(oo, { size: 14, strokeWidth: 2 }),
                                    "保存",
                                  ],
                                }),
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: async () => {
                                    var we, Q, ve, Ve, Ae;
                                    await b("你好，这是一个语音测试。", {
                                      voiceId:
                                        (y == null ? void 0 : y.trim()) ||
                                        void 0,
                                      speed:
                                        (we = t.settings) == null
                                          ? void 0
                                          : we.speed,
                                      vol:
                                        (Q = t.settings) == null
                                          ? void 0
                                          : Q.vol,
                                      pitch:
                                        (ve = t.settings) == null
                                          ? void 0
                                          : ve.pitch,
                                      groupId:
                                        (Ve = t.settings) == null
                                          ? void 0
                                          : Ve.minimaxGroupId,
                                      minimaxModel:
                                        (Ae = t.settings) == null
                                          ? void 0
                                          : Ae.minimaxModel,
                                    });
                                  },
                                  className:
                                    "inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 text-[10px] tracking-widest font-bold hover:border-gray-900 hover:text-gray-900 transition-colors",
                                  children: [
                                    e.jsx(Ji, { size: 14, strokeWidth: 1.5 }),
                                    "试听声音",
                                  ],
                                }),
                                ((se = t.settings) == null
                                  ? void 0
                                  : se.voiceId) &&
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] text-gray-400 font-mono",
                                    children: ["已保存: ", t.settings.voiceId],
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "pt-4 mt-2 flex gap-4",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: w,
                                  className:
                                    "text-[10px] text-gray-400 underline hover:text-gray-900",
                                  children: "运行语音诊断",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => (_ == null ? void 0 : _(!0)),
                                  className:
                                    "text-[10px] text-gray-400 underline hover:text-gray-900",
                                  children: "查看 TTS 日志",
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-8",
                              children: [
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                                      children: "声音模型",
                                    }),
                                    e.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        e.jsxs("select", {
                                          value:
                                            ((Te = t.settings) == null
                                              ? void 0
                                              : Te.voiceId) || "",
                                          onChange: (G) => {
                                            const we = G.target.value;
                                            (a(n, { voiceId: we }),
                                              s &&
                                                r &&
                                                r(s.id, {
                                                  ttsVoiceId: we || null,
                                                }));
                                          },
                                          className:
                                            "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 transition-colors",
                                          children: [
                                            e.jsx("option", {
                                              value: "",
                                              children: "默认声音",
                                            }),
                                            (A || []).map((G) =>
                                              e.jsx(
                                                "option",
                                                {
                                                  value: G.id,
                                                  children: G.name,
                                                },
                                                G.id,
                                              ),
                                            ),
                                          ],
                                        }),
                                        e.jsx(aa, {
                                          size: 14,
                                          className:
                                            "absolute right-0 top-3 text-gray-400 pointer-events-none",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                                      children: "合成算法",
                                    }),
                                    e.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        e.jsxs("select", {
                                          value:
                                            ((ke = t.settings) == null
                                              ? void 0
                                              : ke.modelId) || "",
                                          onChange: (G) =>
                                            a(n, { modelId: G.target.value }),
                                          className:
                                            "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 transition-colors",
                                          children: [
                                            e.jsx("option", {
                                              value: "",
                                              children: "默认引擎",
                                            }),
                                            (k || []).map((G) =>
                                              e.jsx(
                                                "option",
                                                {
                                                  value: G.model_id,
                                                  children:
                                                    G.name || G.model_id,
                                                },
                                                G.model_id,
                                              ),
                                            ),
                                          ],
                                        }),
                                        e.jsx(aa, {
                                          size: 14,
                                          className:
                                            "absolute right-0 top-3 text-gray-400 pointer-events-none",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-6 pt-4",
                              children: [
                                e.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between text-[10px] tracking-widest text-gray-400 uppercase",
                                      children: [
                                        e.jsx("span", { children: "稳定性" }),
                                        e.jsx("span", {
                                          children:
                                            ((W = t.settings) == null
                                              ? void 0
                                              : W.stability) ?? 0.5,
                                        }),
                                      ],
                                    }),
                                    e.jsx("input", {
                                      type: "range",
                                      min: "0",
                                      max: "1",
                                      step: "0.05",
                                      value:
                                        ((ue = t.settings) == null
                                          ? void 0
                                          : ue.stability) ?? 0.5,
                                      onChange: (G) =>
                                        a(n, {
                                          stability: parseFloat(G.target.value),
                                        }),
                                      className:
                                        "w-full h-[1px] bg-gray-200 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:rounded-full",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between text-[10px] tracking-widest text-gray-400 uppercase",
                                      children: [
                                        e.jsx("span", { children: "相似度" }),
                                        e.jsx("span", {
                                          children:
                                            ((re = t.settings) == null
                                              ? void 0
                                              : re.similarityBoost) ?? 0.75,
                                        }),
                                      ],
                                    }),
                                    e.jsx("input", {
                                      type: "range",
                                      min: "0",
                                      max: "1",
                                      step: "0.05",
                                      value:
                                        ((he = t.settings) == null
                                          ? void 0
                                          : he.similarityBoost) ?? 0.75,
                                      onChange: (G) =>
                                        a(n, {
                                          similarityBoost: parseFloat(
                                            G.target.value,
                                          ),
                                        }),
                                      className:
                                        "w-full h-[1px] bg-gray-200 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:rounded-full",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex gap-4 pt-4",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: async () => {
                                    var we, Q, ve, Ve, Ae, te, Se, Fe, $e, tt;
                                    await b("你好，这是一个语音测试。", {
                                      voiceId:
                                        (we = t.settings) == null
                                          ? void 0
                                          : we.voiceId,
                                      modelId:
                                        (Q = t.settings) == null
                                          ? void 0
                                          : Q.modelId,
                                      stability:
                                        (ve = t.settings) == null
                                          ? void 0
                                          : ve.stability,
                                      similarityBoost:
                                        (Ve = t.settings) == null
                                          ? void 0
                                          : Ve.similarityBoost,
                                      style:
                                        (Ae = t.settings) == null
                                          ? void 0
                                          : Ae.style,
                                      useSpeakerBoost:
                                        (te = t.settings) == null
                                          ? void 0
                                          : te.useSpeakerBoost,
                                      speed:
                                        (Se = t.settings) == null
                                          ? void 0
                                          : Se.speed,
                                      vol:
                                        (Fe = t.settings) == null
                                          ? void 0
                                          : Fe.vol,
                                      pitch:
                                        ($e = t.settings) == null
                                          ? void 0
                                          : $e.pitch,
                                      groupId:
                                        (tt = t.settings) == null
                                          ? void 0
                                          : tt.minimaxGroupId,
                                    });
                                  },
                                  className:
                                    "px-6 py-2 bg-gray-900 text-white text-[10px] tracking-widest font-bold hover:bg-black transition-colors",
                                  children: "试听声音",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                    var G;
                                    return C == null
                                      ? void 0
                                      : C(
                                          (G = t.settings) == null
                                            ? void 0
                                            : G.minimaxGroupId,
                                        );
                                  },
                                  className:
                                    "px-6 py-2 border border-gray-200 text-gray-500 text-[10px] tracking-widest font-bold hover:border-gray-900 hover:text-gray-900 transition-colors",
                                  children: "刷新列表",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "pt-4 border-t border-gray-100 mt-4 flex gap-4",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: w,
                                  className:
                                    "text-[10px] text-gray-400 underline hover:text-gray-900",
                                  children: "运行语音诊断",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => (_ == null ? void 0 : _(!0)),
                                  className:
                                    "text-[10px] text-gray-400 underline hover:text-gray-900",
                                  children: "查看 TTS 日志",
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
      e.jsxs(We.div, {
        variants: oc,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: "03",
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "对话参数",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] space-y-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                        children: "朋友圈读取范围",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400",
                        children: "AI 参考的最近动态数量",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 shrink-0",
                    children: [
                      e.jsx("input", {
                        type: "number",
                        value:
                          ((ge = t.settings) == null
                            ? void 0
                            : ge.momentsLimit) || 5,
                        onChange: (G) =>
                          a(n, { momentsLimit: parseInt(G.target.value, 10) }),
                        className:
                          "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                      }),
                      e.jsx("span", {
                        className: "text-[10px] font-mono text-gray-400",
                        children: "条",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between gap-4 pt-4 border-t border-gray-50",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                        children: "短期记忆容量",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400",
                        children:
                          "AI 记住的历史回合数（用户一发 + AI 一回 = 一回合）",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 shrink-0",
                    children: [
                      e.jsx("input", {
                        type: "number",
                        value:
                          ((J = t.settings) == null
                            ? void 0
                            : J.contextLimit) || 50,
                        onChange: (G) =>
                          a(n, { contextLimit: parseInt(G.target.value, 10) }),
                        className:
                          "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                      }),
                      e.jsx("span", {
                        className: "text-[10px] font-mono text-gray-400",
                        children: "回合",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(Xv, {
        sectionNumber: "04",
        showCSSEditor: M,
        setShowCSSEditor: E,
        showAllPresets: S,
        setShowAllPresets: j,
        activePresetId: T,
        setActivePresetId: I,
        presets: L,
        copiedPresetId: B,
        handleCopyPresetCss: F,
        handleExportPreset: D,
        handleDeletePresetWithConfirm: $,
        cssImportRef: P,
        presetPickerOpen: z,
        setPresetPickerOpen: O,
        presetPickerRef: Z,
        editingCSS: K,
        setEditingCSS: q,
        handleUpdatePreset: V,
        newPresetName: ne,
        setNewPresetName: le,
        handleSavePreset: ie,
      }),
      e.jsxs(We.div, {
        variants: oc,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: "05",
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "查找记录",
              }),
            ],
          }),
          e.jsx("div", {
            className: "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: e.jsxs("div", {
              className: "flex justify-between items-center",
              children: [
                e.jsx("p", {
                  className: "font-serif text-xl italic text-gray-800",
                  children: "聊天记录检索",
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => (je == null ? void 0 : je(!0)),
                  className:
                    "text-[10px] tracking-widest underline text-gray-400 hover:text-gray-900",
                  children: "打开检索",
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsx(We.div, {
        variants: oc,
        className: "pt-8 border-t border-gray-200",
        children: e.jsx("button", {
          type: "button",
          onClick: () => (X == null ? void 0 : X(!0)),
          className: "w-full py-4 text-center group",
          children: e.jsx("span", {
            className:
              "text-[10px] tracking-[0.3em] text-gray-300 group-hover:text-red-400 transition-colors uppercase",
            children: "清空所有聊天记录",
          }),
        }),
      }),
    ],
  });
}
function FW({
  show: t,
  onClose: s,
  contact: n,
  avatarInputRef: a,
  showCSSEditor: r,
  setShowCSSEditor: i,
  presets: o,
  activePresetId: c,
  setActivePresetId: d,
  handleDeletePreset: u,
  editingCSS: f,
  setEditingCSS: p,
  handleUpdatePreset: m,
  newPresetName: h,
  setNewPresetName: g,
  handleSavePreset: x,
  setPresets: y,
  chat: v,
  updateChatSettings: b,
  handleTestTime: N,
  isTestingTime: w,
  timeTestResult: _,
  handleTestWeather: A,
  isTestingWeather: k,
  weatherTestResult: C,
  voices: M,
  models: E,
  fetchVoices: S,
  playTTS: j,
  setShowTtsLogs: T,
  fileInputRef: I,
  setShowMemories: L,
  setShowCallHistory: B,
  setShowClearConfirm: F,
  chatId: D,
  updateContact: $,
  ttsConfig: P,
  setShowHistorySearch: z,
  helpAssistantScope: O,
  onHelpAssistantScopeChange: Z,
}) {
  var pe;
  const [K, q] = l.useState(""),
    [V, ne] = l.useState(null),
    [le, ie] = l.useState(!1),
    [X, je] = l.useState(!1),
    xe = l.useRef(null),
    ye = l.useRef(null),
    { reduceMotion: R } = Yu();
  (l.useEffect(() => {
    if (!X) return;
    const se = (Te) => {
      ye.current && !ye.current.contains(Te.target) && je(!1);
    };
    return (
      document.addEventListener("click", se),
      () => document.removeEventListener("click", se)
    );
  }, [X]),
    l.useEffect(() => {
      var se;
      t && v && q(((se = v.settings) == null ? void 0 : se.voiceId) ?? "");
    }, [
      t,
      v == null ? void 0 : v.id,
      (pe = v == null ? void 0 : v.settings) == null ? void 0 : pe.voiceId,
    ]));
  const oe = (se) => {
      const Te = o.find((he) => he.id === se);
      if (!Te) return;
      const ke = { name: Te.name, css: Te.css },
        W = new Blob([JSON.stringify(ke, null, 2)], {
          type: "application/json",
        }),
        ue = URL.createObjectURL(W),
        re = document.createElement("a");
      ((re.href = ue),
        (re.download = `${Te.name}.json`),
        document.body.appendChild(re),
        re.click(),
        document.body.removeChild(re),
        URL.revokeObjectURL(ue));
    },
    ee = async (se) => {
      const Te = o.find((ke) => ke.id === se);
      if (Te != null && Te.css)
        try {
          (await navigator.clipboard.writeText(Te.css),
            ne(se),
            setTimeout(() => ne(null), 2e3));
        } catch {}
    },
    H = (se) => {
      const Te = o.find((ke) => ke.id === se);
      Te &&
        window.confirm(
          `确定要删除美化预设「${Te.name}」吗？删除后无法恢复。`,
        ) &&
        u(se);
    },
    Y = (se) => {
      const Te = se.target.files[0];
      if (!Te) return;
      const ke = new FileReader();
      ((ke.onload = (W) => {
        try {
          const ue = JSON.parse(W.target.result);
          if (ue.name && ue.css) {
            const re = {
              id: Date.now().toString(),
              name: ue.name,
              css: ue.css,
            };
            (y((he) => [...he, re]), d(re.id));
          } else alert("导入失败：文件格式不正确。");
        } catch {
          alert("导入失败：无法解析文件。");
        }
      }),
        ke.readAsText(Te),
        (se.target.value = null));
    },
    U = async () => {
      var ke, W, ue, re, he, ge;
      const se = [],
        Te = (J) => {
          se.push(J);
        };
      try {
        (Te(`用户代理: ${navigator.userAgent}`),
          Te(`时间: ${new Date().toISOString()}`),
          Te(`平台: ${navigator.platform}`),
          typeof window.Audio < "u"
            ? Te("Audio API: 支持")
            : Te("Audio API: 不支持"),
          typeof window.AudioContext < "u" ||
          typeof window.webkitAudioContext < "u"
            ? Te("AudioContext: 支持")
            : Te("AudioContext: 不支持"));
        try {
          Te("正在尝试静音播放...");
          const we = new Audio();
          ((we.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
            await we.play(),
            Te("静音播放: 成功"));
        } catch (we) {
          Te(`静音播放失败: ${we.name}: ${we.message}`);
        }
        (Te(`服务商: ${P == null ? void 0 : P.provider}`),
          (P == null ? void 0 : P.provider) === "minimax"
            ? (Te(
                `GroupId 已配置: ${!!((ke = P.minimax) != null && ke.groupId)}`,
              ),
              Te(`ApiKey 已配置: ${!!((W = P.minimax) != null && W.apiKey)}`),
              Te(
                `VoiceId: ${((ue = v.settings) == null ? void 0 : ue.voiceId) || "默认"}`,
              ))
            : (P == null ? void 0 : P.provider) === "elevenlabs" &&
              (Te(
                `ApiKey 已配置: ${!!((re = P.elevenlabs) != null && re.key)}`,
              ),
              Te(
                `VoiceId: ${((he = v.settings) == null ? void 0 : he.voiceId) || "默认"}`,
              )),
          Te("正在测试 TTS API 连接 (仅获取 URL)..."));
        const G = await j("测试", {
          voiceId: (ge = v.settings) == null ? void 0 : ge.voiceId,
          onlyGetUrl: !0,
          ...v.settings,
        });
        Te(
          G
            ? `TTS API 成功: 已获取 URL (长度: ${G.length})`
            : "TTS API 失败: 未返回 URL",
        );
      } catch (J) {
        Te(`诊断错误: ${J.message}
${J.stack}`);
      }
      alert(
        `诊断完成，请查看控制台日志。

` +
          se.slice(0, 4).join(`
`) +
          `
...`,
      );
    };
  if (!t) return null;
  const ce = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: R ? 0 : 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: R ? 0 : 0.3 } },
  };
  return e.jsxs(We.div, {
    className:
      "absolute inset-0 z-50 bg-[#FDFBF7] flex flex-col overflow-hidden",
    variants: ce,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    children: [
      e.jsx("input", {
        type: "file",
        ref: xe,
        className: "hidden",
        accept: ".json",
        onChange: Y,
      }),
      e.jsxs("div", {
        className:
          "px-6 pt-14 pb-6 flex justify-between items-end border-b border-gray-900/10 bg-[#FDFBF7]/90 backdrop-blur-sm sticky top-0 z-20",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className:
                  "text-[10px] font-serif tracking-[0.2em] text-gray-400 uppercase mb-1",
                children: "啾啾小助手 · 助手",
              }),
              e.jsx("h1", {
                className: "text-3xl font-serif text-gray-900 italic",
                children: "聊天设置",
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => {
              (navigator.vibrate && navigator.vibrate(20), s());
            },
            className:
              "w-10 h-10 border border-gray-900 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300",
            children: e.jsx(Ts, { size: 18 }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "flex-1 overflow-y-auto no-scrollbar",
        children: e.jsx("div", {
          className: "p-6 space-y-12 pb-20",
          children: e.jsx($W, {
            chat: v,
            contact: n,
            chatId: D,
            updateChatSettings: b,
            updateContact: $,
            avatarInputRef: a,
            fileInputRef: I,
            onClose: s,
            setShowMemories: L,
            setShowCallHistory: B,
            handleTestTime: N,
            handleTestWeather: A,
            timeTestResult: _,
            weatherTestResult: C,
            isTestingTime: w,
            isTestingWeather: k,
            minimaxVoiceIdDraft: K,
            setMinimaxVoiceIdDraft: q,
            playTTS: j,
            ttsConfig: P,
            handleTTSDiagnostics: U,
            setShowTtsLogs: T,
            voices: M,
            models: E,
            fetchVoices: S,
            showCSSEditor: r,
            setShowCSSEditor: i,
            showAllPresets: le,
            setShowAllPresets: ie,
            activePresetId: c,
            setActivePresetId: d,
            presets: o,
            copiedPresetId: V,
            handleCopyPresetCss: ee,
            handleExportPreset: oe,
            handleDeletePresetWithConfirm: H,
            cssImportRef: xe,
            presetPickerOpen: X,
            setPresetPickerOpen: je,
            presetPickerRef: ye,
            editingCSS: f,
            setEditingCSS: p,
            handleUpdatePreset: m,
            newPresetName: h,
            setNewPresetName: g,
            handleSavePreset: x,
            setShowClearConfirm: F,
            setShowHistorySearch: z,
            helpAssistantScope: O,
            onHelpAssistantScopeChange: Z,
          }),
        }),
      }),
    ],
  });
}
const zW = ({
    show: t,
    onClose: s,
    onSelectImage: n,
    onSelectTextImage: a,
    showPhoneCase: r = !1,
  }) =>
    t
      ? e.jsx("div", {
          className:
            "inset-0 z-[80] bg-black/20 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-200",
          style: { position: r ? "absolute" : "fixed" },
          onClick: s,
          children: e.jsxs("div", {
            className: `w-full max-h-[85dvh] min-h-0 bg-[#fffcf7] rounded-t-[32px] p-4 sm:p-6 animate-in slide-in-from-bottom duration-300 shadow-2xl border-t border-white/50 flex flex-col ${r ? "max-w-none" : "max-w-sm"}`,
            style: {
              paddingBottom: "calc(2rem + env(safe-area-inset-bottom, 0px))",
            },
            onClick: (i) => i.stopPropagation(),
            children: [
              e.jsx("div", {
                className: "flex justify-center mb-4 sm:mb-6 flex-shrink-0",
                onClick: s,
                children: e.jsx("div", {
                  className: "w-12 h-1 bg-gray-200 rounded-full cursor-pointer",
                }),
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-3 sm:gap-4 flex-shrink-0",
                children: [
                  e.jsxs("button", {
                    onClick: n,
                    className:
                      "flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[100px] sm:min-h-0",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 flex-shrink-0",
                        children: e.jsx(Za, {
                          size: 24,
                          className: "w-6 h-6 sm:w-6 sm:h-6",
                        }),
                      }),
                      e.jsx("span", {
                        className:
                          "font-bold text-gray-700 text-sm sm:text-base",
                        children: "照片",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: a,
                    className:
                      "flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[100px] sm:min-h-0",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 flex-shrink-0",
                        children: e.jsx(Al, {
                          size: 24,
                          className: "w-6 h-6 sm:w-6 sm:h-6",
                        }),
                      }),
                      e.jsx("span", {
                        className:
                          "font-bold text-gray-700 text-sm sm:text-base",
                        children: "文字图",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  RW = ({
    show: t,
    onClose: s,
    textImageContent: n,
    setTextImageContent: a,
    onSend: r,
  }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
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
                children: "发送文字图",
              }),
              e.jsx("textarea", {
                value: n,
                onChange: (i) => a(i.target.value),
                placeholder: "输入要模拟成图片的文字内容...",
                className:
                  "w-full h-32 bg-white border-2 border-[#efebe9] rounded-xl p-4 text-sm text-[#5d4037] outline-none focus:border-[#8d6e63] resize-none mb-4 placeholder-[#d7ccc8]",
                autoFocus: !0,
              }),
              e.jsx("button", {
                onClick: r,
                disabled: !n.trim(),
                className:
                  "w-full py-3 bg-[#8d6e63] text-white rounded-xl font-bold text-sm shadow-md hover:bg-[#795548] transition-colors disabled:opacity-50",
                children: "发送",
              }),
            ],
          }),
        })
      : null,
  PW = ({
    show: t,
    onClose: s,
    memes: n,
    memeCategories: a,
    activeMemeCategory: r,
    setActiveMemeCategory: i,
    isManageMode: o,
    setIsManageMode: c,
    selectedMemeIds: d,
    setSelectedMemeIds: u,
    isAddingMeme: f,
    setIsAddingMeme: p,
    isAddingCategory: m,
    setIsAddingCategory: h,
    newCategoryName: g,
    setNewCategoryName: x,
    handleAddCategory: y,
    handleOpenCategorySettings: v,
    targetCategoryForAdd: b,
    setTargetCategoryForAdd: N,
    isBatchImport: w,
    setIsBatchImport: _,
    batchImportContent: A,
    setBatchImportContent: k,
    handleBatchImport: C,
    newMemeUrl: M,
    setNewMemeUrl: E,
    newMemeMeaning: S,
    setNewMemeMeaning: j,
    handleAddMeme: T,
    handleCompressImage: I,
    setShowCategoryModal: L,
    handleDeleteSelectedMemes: B,
    handleSendMeme: F,
    onExportGroupClick: D,
    showExportChoiceModal: $,
    onCloseExportChoice: P,
    exportPayload: z,
    onExportCopy: O,
    onExportDownload: Z,
    onImportGroupClick: K,
    showImportGroupModal: q,
    setShowImportGroupModal: V,
    importGroupPasteContent: ne,
    setImportGroupPasteContent: le,
    handleImportGroupSubmit: ie,
    importTargetCategoryId: X,
    setImportTargetCategoryId: je,
    importAsNewGroupName: xe,
    setImportAsNewGroupName: ye,
    onOpenEditMeme: R,
    editingMeme: oe,
    onCloseEditMeme: ee,
    editMemeUrl: H,
    setEditMemeUrl: Y,
    editMemeMeaning: U,
    setEditMemeMeaning: ce,
    handleUpdateMeme: pe,
  }) => {
    const [ke, W] = l.useState(32),
      ue = l.useMemo(
        () =>
          n.filter((he) =>
            r === "all" ? !0 : (he.categoryIds || []).includes(r),
          ),
        [n, r],
      );
    l.useEffect(() => {
      if (!t) return;
      W(32);
      let he = null;
      const ge = () => {
        W((J) => {
          if (J >= ue.length) return J;
          const G = Math.min(J + 24, ue.length);
          return (G < ue.length && (he = window.setTimeout(ge, 16)), G);
        });
      };
      return (
        32 < ue.length && (he = window.setTimeout(ge, 16)),
        () => {
          he && window.clearTimeout(he);
        }
      );
    }, [t, ue.length]);
    const re = ue.slice(0, ke);
    return e.jsx("div", {
      className: `absolute inset-0 z-[80] flex items-end justify-center transition-opacity duration-200 ${t ? "bg-black/20 backdrop-blur-sm opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      onClick: t ? s : void 0,
      "aria-hidden": !t,
      children: e.jsxs("div", {
        className: `w-full h-[70vh] bg-[#fffcf7] rounded-t-[32px] p-6 shadow-2xl border-t border-white/50 flex flex-col transition-transform duration-300 ${t ? "translate-y-0" : "translate-y-8"}`,
        onClick: (he) => he.stopPropagation(),
        children: [
          e.jsx("div", {
            className: "flex justify-center mb-4",
            onClick: s,
            children: e.jsx("div", {
              className: "w-12 h-1 bg-gray-200 rounded-full cursor-pointer",
            }),
          }),
          e.jsxs("div", {
            className: "mb-4 flex flex-col gap-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-bold text-[#5d4037]",
                    children: "表情包",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      D &&
                        r !== "all" &&
                        a.some((he) => he.id === r) &&
                        e.jsx("button", {
                          onClick: () => D(r),
                          className:
                            "p-2 bg-[#f2f0ea] rounded-full text-[#8d6e63] hover:bg-[#e8e6e0] transition-colors",
                          title: "导出此分组",
                          children: e.jsx(Eu, { size: 20 }),
                        }),
                      K &&
                        e.jsx("button", {
                          onClick: K,
                          className:
                            "p-2 bg-[#f2f0ea] rounded-full text-[#8d6e63] hover:bg-[#e8e6e0] transition-colors",
                          title: "导入分组",
                          children: e.jsx(Ta, { size: 20 }),
                        }),
                      e.jsx("button", {
                        onClick: () => {
                          (c(!o), u([]));
                        },
                        className: `p-2 rounded-full transition-colors ${o ? "bg-[#8d6e63] text-white" : "bg-[#f2f0ea] text-[#8d6e63] hover:bg-[#e8e6e0]"}`,
                        children: e.jsx(jl, { size: 20 }),
                      }),
                      e.jsx("button", {
                        onClick: () => p(!f),
                        className:
                          "p-2 bg-[#f2f0ea] rounded-full text-[#8d6e63] hover:bg-[#e8e6e0] transition-colors",
                        children: e.jsx(ea, {
                          size: 20,
                          className: `transition-transform duration-300 ${f ? "rotate-45" : ""}`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-2 overflow-x-auto no-scrollbar pb-1",
                children: [
                  e.jsx("button", {
                    onClick: () => i("all"),
                    className: `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${r === "all" ? "bg-[#8d6e63] text-white shadow-md" : "bg-white text-[#8d6e63] border border-[#e0e0e0]"}`,
                    children: "全部",
                  }),
                  a.map((he) =>
                    e.jsxs(
                      "div",
                      {
                        className: "relative group/cat",
                        children: [
                          e.jsxs("button", {
                            onClick: () => i(he.id),
                            className: `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 ${r === he.id ? "bg-[#8d6e63] text-white shadow-md" : "bg-white text-[#8d6e63] border border-[#e0e0e0]"}`,
                            children: [
                              he.name,
                              he.boundContacts &&
                                he.boundContacts.length > 0 &&
                                e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 rounded-full bg-green-400 ml-0.5",
                                  title: "已绑定",
                                }),
                            ],
                          }),
                          (o || r === he.id) &&
                            e.jsx("button", {
                              onClick: (ge) => {
                                (ge.stopPropagation(), v(he));
                              },
                              className:
                                "absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-200 text-gray-500 hover:text-[#8d6e63]",
                              children: e.jsx(Co, { size: 10 }),
                            }),
                        ],
                      },
                      he.id,
                    ),
                  ),
                  e.jsx("button", {
                    onClick: () => h(!0),
                    className:
                      "px-2 py-1.5 rounded-lg bg-[#f2f0ea] text-[#8d6e63] border border-transparent hover:border-[#d7ccc8] transition-all",
                    children: e.jsx(ea, { size: 14 }),
                  }),
                ],
              }),
              m &&
                e.jsxs("div", {
                  className: "flex gap-2 animate-in slide-in-from-left-2",
                  children: [
                    e.jsx("input", {
                      type: "text",
                      value: g,
                      onChange: (he) => x(he.target.value),
                      placeholder: "新分类名称",
                      className:
                        "flex-1 bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-xs outline-none focus:border-[#8d6e63]",
                      autoFocus: !0,
                    }),
                    e.jsx("button", {
                      onClick: y,
                      className:
                        "px-3 py-1.5 bg-[#8d6e63] text-white rounded-lg text-xs font-bold",
                      children: "添加",
                    }),