                    We.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.2 },
                      className: "min-h-full",
                      children: [
                        p === "design" &&
                          e.jsxs("div", {
                            className: "space-y-8 max-w-md mx-auto",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "rounded-2xl border border-gray-200/80 bg-white p-4 shadow-sm space-y-3",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 text-[0.6875rem] font-semibold text-gray-400 uppercase tracking-wider ml-1",
                                    children: [
                                      e.jsx(Om, { size: 14 }),
                                      " 渲染方式",
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () => I({}),
                                        className: fd(
                                          "flex items-center justify-center gap-2 rounded-2xl py-3 px-3 text-sm font-medium border transition-all",
                                          J
                                            ? "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                                            : "bg-gray-900 text-white border-gray-900 shadow-md",
                                        ),
                                        children: [
                                          e.jsx(Z5, { size: 16 }),
                                          "HTML / CSS",
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () => {
                                          J || we(P1[0].component);
                                        },
                                        className: fd(
                                          "flex items-center justify-center gap-2 rounded-2xl py-3 px-3 text-sm font-medium border transition-all",
                                          J
                                            ? "bg-gray-900 text-white border-gray-900 shadow-md"
                                            : "bg-white border-gray-200 text-gray-600 hover:border-gray-300",
                                        ),
                                        children: [
                                          e.jsx(Om, { size: 16 }),
                                          "React 内置",
                                        ],
                                      }),
                                    ],
                                  }),
                                  J &&
                                    e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsxs("div", {
                                          className: "space-y-1.5",
                                          children: [
                                            e.jsx("label", {
                                              className:
                                                "text-[0.6875rem] font-semibold text-gray-400 uppercase tracking-wider ml-1",
                                              children: "内置组件",
                                            }),
                                            e.jsx("select", {
                                              value: T.component,
                                              onChange: (ve) =>
                                                we(ve.target.value),
                                              className:
                                                "w-full h-11 rounded-2xl border border-gray-200 bg-white px-3 text-sm text-gray-900 outline-none focus:border-gray-900",
                                              children: P1.map((ve) =>
                                                e.jsx(
                                                  "option",
                                                  {
                                                    value: ve.component,
                                                    children: ve.label,
                                                  },
                                                  ve.component,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                        (Q = R0(T.component)) != null && Q.hint
                                          ? e.jsx("p", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: R0(T.component).hint,
                                            })
                                          : null,
                                        e.jsx("p", {
                                          className:
                                            "text-xs leading-relaxed text-amber-900/90 bg-amber-50 border border-amber-100/80 rounded-xl px-3 py-2",
                                          children:
                                            "单机使用：数据仅保存在本机浏览器；建议定期导出备份。React 为应用内置白名单组件，非任意代码。",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-5",
                                children: [
                                  e.jsx(f0, {
                                    label: "小组件名称",
                                    value: v,
                                    onChange: (ve) => b(ve.target.value),
                                    icon: Al,
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      e.jsx("label", {
                                        className:
                                          "text-[0.6875rem] font-semibold text-gray-400 uppercase tracking-wider ml-1",
                                        children: "尺寸",
                                      }),
                                      e.jsx("div", {
                                        className: "flex gap-3 items-center",
                                        children: e.jsx("div", {
                                          className:
                                            "grid grid-cols-4 gap-2 flex-1",
                                          children: [
                                            "1x1",
                                            "2x1",
                                            "2x2",
                                            "4x2",
                                            "4x4",
                                          ].map((ve) =>
                                            e.jsx(
                                              "button",
                                              {
                                                onClick: () => {
                                                  const [Ve, Ae] = ve
                                                    .split("x")
                                                    .map(Number);
                                                  (A(Ve), C(Ae));
                                                },
                                                className: fd(
                                                  "h-12 rounded-2xl border transition-all font-medium text-sm",
                                                  N === ve
                                                    ? "bg-gray-900 text-white border-gray-900 shadow-md"
                                                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50",
                                                ),
                                                children: ve,
                                              },
                                              ve,
                                            ),
                                          ),
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex gap-3 items-center mt-2 bg-gray-50 p-3 rounded-2xl border border-gray-100",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-xs font-medium text-gray-500 whitespace-nowrap",
                                            children: "自定义:",
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 flex-1",
                                            children: [
                                              e.jsx("input", {
                                                type: "number",
                                                min: "1",
                                                max: "6",
                                                value: _,
                                                onChange: (ve) =>
                                                  A(
                                                    parseInt(ve.target.value) ||
                                                      1,
                                                  ),
                                                className:
                                                  "w-full h-10 bg-white border border-gray-200 rounded-xl text-center text-sm font-bold text-gray-900 focus:border-gray-900 outline-none",
                                              }),
                                              e.jsx("span", {
                                                className: "text-gray-400",
                                                children: "×",
                                              }),
                                              e.jsx("input", {
                                                type: "number",
                                                min: "1",
                                                max: "6",
                                                value: k,
                                                onChange: (ve) =>
                                                  C(
                                                    parseInt(ve.target.value) ||
                                                      1,
                                                  ),
                                                className:
                                                  "w-full h-10 bg-white border border-gray-200 rounded-xl text-center text-sm font-bold text-gray-900 focus:border-gray-900 outline-none",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              le &&
                                e.jsxs("div", {
                                  className:
                                    "space-y-4 pt-6 border-t border-gray-100",
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-gray-900 font-bold text-lg",
                                      children: "倒计时",
                                    }),
                                    e.jsx(f0, {
                                      label: "事件标题",
                                      value: V,
                                      onChange: (ve) => H(K, ve.target.value),
                                      icon: Al,
                                    }),
                                    e.jsx(f0, {
                                      label: "目标日期",
                                      type: "datetime-local",
                                      value: K,
                                      onChange: (ve) => H(ve.target.value, V),
                                      icon: Dr,
                                    }),
                                  ],
                                }),
                              xe &&
                                e.jsxs("div", {
                                  className:
                                    "space-y-4 pt-6 border-t border-gray-100",
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-gray-900 font-bold text-lg",
                                      children: "天气",
                                    }),
                                    e.jsx(f0, {
                                      label: "位置",
                                      value: X,
                                      onChange: (ve) => Y(ve.target.value),
                                      icon: CE,
                                    }),
                                    e.jsx(Jf, {
                                      onClick: U,
                                      disabled: R,
                                      label: R ? "定位中..." : "使用 GPS 定位",
                                      icon: Th,
                                    }),
                                  ],
                                }),
                              e.jsxs("div", {
                                className:
                                  "space-y-4 pt-6 border-t border-gray-100",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-gray-900 font-bold text-lg",
                                    children: "操作",
                                  }),
                                  e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      e.jsx(Jf, {
                                        onClick: () =>
                                          document
                                            .getElementById("import-json")
                                            .click(),
                                        label: "导入",
                                        icon: Ta,
                                      }),
                                      e.jsx("input", {
                                        id: "import-json",
                                        type: "file",
                                        accept: ".json",
                                        onChange: ce,
                                        className: "hidden",
                                      }),
                                      e.jsx(Jf, {
                                        onClick: pe,
                                        label: "导出",
                                        icon: Eu,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    onClick: se,
                                    className:
                                      "w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/80 text-gray-600 hover:border-gray-300 hover:bg-gray-100/80 hover:text-gray-800 transition-all active:scale-[0.99]",
                                    children: [
                                      e.jsx(Xn, {
                                        size: 18,
                                        strokeWidth: 2,
                                        className: "text-amber-500",
                                      }),
                                      e.jsx("span", {
                                        className: "font-medium text-sm",
                                        children: "保存到库",
                                      }),
                                    ],
                                  }),
                                  e.jsx(Jf, {
                                    onClick: () => {
                                      window.confirm("重置画布？") &&
                                        (E('<div class="my-widget">你好</div>'),
                                        j(`.my-widget {
  background: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}`));
                                    },
                                    label: "重置画布",
                                    icon: Or,
                                  }),
                                  r &&
                                    e.jsx(Jf, {
                                      onClick: () => a && a(r.id),
                                      label: "删除小组件",
                                      icon: _n,
                                      variant: "danger",
                                    }),
                                ],
                              }),
                            ],
                          }),
                        p === "code" &&
                          e.jsxs("div", {
                            className: "space-y-6 max-w-2xl mx-auto pb-4",
                            children: [
                              J &&
                                e.jsx("p", {
                                  className:
                                    "text-xs leading-relaxed text-amber-900/90 bg-amber-50 border border-amber-100/80 rounded-xl px-3 py-2",
                                  children:
                                    "当前为「React 内置」预览，下方代码不会显示在主屏。若要桌面使用 HTML/CSS，请到「设计」切换为「HTML / CSS」后再保存。",
                                }),
                              e.jsxs("div", {
                                className: "space-y-2 shrink-0",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center px-1",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[0.6875rem] font-semibold text-gray-400 uppercase tracking-wider",
                                        children: "HTML 结构",
                                      }),
                                      e.jsx("button", {
                                        onClick: () =>
                                          navigator.clipboard.writeText(M),
                                        className:
                                          "text-gray-400 hover:text-gray-900 transition-colors",
                                        children: e.jsx(Ao, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("textarea", {
                                    value: M,
                                    onChange: (ve) => E(ve.target.value),
                                    className:
                                      "w-full min-h-[200px] h-52 p-4 bg-gray-50 border border-gray-200 rounded-2xl font-mono text-[0.75rem] text-gray-800 resize-y focus:border-gray-400 focus:bg-white outline-none leading-relaxed shadow-inner",
                                    spellCheck: "false",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-2 shrink-0",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center px-1",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[0.6875rem] font-semibold text-gray-400 uppercase tracking-wider",
                                        children: "CSS 样式",
                                      }),
                                      e.jsx("button", {
                                        onClick: () =>
                                          navigator.clipboard.writeText(S),
                                        className:
                                          "text-gray-400 hover:text-gray-900 transition-colors",
                                        children: e.jsx(Ao, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("textarea", {
                                    value: S,
                                    onChange: (ve) => j(ve.target.value),
                                    className:
                                      "w-full min-h-[120px] h-32 p-4 bg-gray-50 border border-gray-200 rounded-2xl font-mono text-[0.75rem] text-gray-800 resize-y focus:border-gray-400 focus:bg-white outline-none leading-relaxed shadow-inner",
                                    spellCheck: "false",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "p-5 min-h-[220px] shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-3",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-gray-900 font-bold text-sm",
                                        children: [
                                          e.jsx(Xn, { size: 16 }),
                                          " AI 助手",
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: (ve) => {
                                          (ve.stopPropagation(), y(!x));
                                        },
                                        className:
                                          "text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition-colors",
                                        children: [
                                          e.jsx(xl, { size: 12 }),
                                          " 提示词指南",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(Os, {
                                    children:
                                      x &&
                                      e.jsx(
                                        We.div,
                                        {
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1,
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: { duration: 0.2 },
                                          className: "overflow-hidden",
                                          children: e.jsxs("div", {
                                            className:
                                              "text-xs text-gray-600 bg-white p-3 rounded-xl border border-gray-100 mb-3 space-y-2",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "font-bold text-gray-800",
                                                children: "如何编写提示词：",
                                              }),
                                              e.jsxs("ul", {
                                                className:
                                                  "list-disc list-inside space-y-1 pl-1",
                                                children: [
                                                  e.jsxs("li", {
                                                    children: [
                                                      e.jsx("strong", {
                                                        children: "描述目标：",
                                                      }),
                                                      ' "创建一个天气小组件..."',
                                                    ],
                                                  }),
                                                  e.jsxs("li", {
                                                    children: [
                                                      e.jsx("strong", {
                                                        children: "指定内容：",
                                                      }),
                                                      ' "包含温度、湿度和图标..."',
                                                    ],
                                                  }),
                                                  e.jsxs("li", {
                                                    children: [
                                                      e.jsx("strong", {
                                                        children: "定义风格：",
                                                      }),
                                                      ' "极简风格，白色背景，圆角..."',
                                                    ],
                                                  }),
                                                  e.jsxs("li", {
                                                    children: [
                                                      e.jsx("strong", {
                                                        children: "布局要求：",
                                                      }),
                                                      ' "使用 Flexbox 居中对齐..."',
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        "prompt-guide",
                                      ),
                                  }),
                                  e.jsx("p", {
                                    className: "text-xs text-gray-500 mb-4",
                                    children:
                                      "复制下方提示词，使用 AI 生成小组件代码。",
                                  }),
                                  e.jsx("button", {
                                    onClick: () => {
                                      const ve = `Create a responsive HTML/CSS widget. Container: ${he}px x ${ge}px. Use Flexbox/Grid. Content should fit within bounds. Style: Minimalist, Light theme, Aesthetic, Soft shadows, Rounded corners.`;
                                      (navigator.clipboard.writeText(ve),
                                        alert("提示词已复制！"));
                                    },
                                    className:
                                      "w-full py-3.5 bg-white rounded-xl border border-gray-200 text-sm font-bold text-gray-900 hover:border-gray-300 hover:shadow-sm transition-all",
                                    children: "复制提示词",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        p === "library" &&
                          e.jsxs("div", {
                            className: "space-y-4 max-w-md mx-auto pb-6",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "text-gray-900 font-bold text-lg px-1",
                                children: "聊天消息列表底部小组件",
                              }),
                              e.jsx("p", {
                                className: "text-sm text-gray-500 px-1 mb-2",
                                children:
                                  "在聊天 APP 列表页面，点击小组件的加号隐藏后，可以在此恢复",
                              }),
                              e.jsx("div", {
                                className: "grid grid-cols-1 gap-4 mb-8",
                                children: e.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                    try {
                                      (localStorage.setItem(Mse, "false"),
                                        window.dispatchEvent(
                                          new Event("storage"),
                                        ));
                                    } catch {}
                                    typeof window.__chatListWidgetRestored ==
                                      "function" &&
                                      window.__chatListWidgetRestored();
                                  },
                                  className:
                                    "w-full text-left p-5 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-gray-200 transition-all relative overflow-hidden",
                                  children: e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0",
                                        children: e.jsx(ao, {
                                          size: 22,
                                          className: "text-blue-400",
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "font-bold text-gray-900 text-base mb-0.5",
                                            children: "天气 · 音乐",
                                          }),
                                          e.jsx("div", {
                                            className: "text-sm text-gray-400",
                                            children:
                                              "点击恢复显示在消息列表底部",
                                          }),
                                        ],
                                      }),
                                      e.jsx(vr, {
                                        size: 18,
                                        className: "text-gray-400 shrink-0",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              e.jsx("h3", {
                                className:
                                  "text-gray-900 font-bold text-lg px-1",
                                children: "预设库",
                              }),
                              e.jsx("div", {
                                className: "grid grid-cols-1 gap-4",
                                children: D.map((ve, Ve) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "relative group",
                                      children: [
                                        e.jsxs("button", {
                                          onClick: () => ee(ve),
                                          className:
                                            "w-full text-left p-5 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-gray-200 transition-all relative overflow-hidden pr-12",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "absolute top-0 right-0 bg-gray-50 px-3 py-1.5 rounded-bl-2xl text-[0.625rem] font-mono text-gray-500 border-b border-l border-gray-100",
                                              children: ve.size,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "font-bold text-gray-900 text-base mb-1",
                                              children: ve.name,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-sm text-gray-400",
                                              children: "点击应用此样式",
                                            }),
                                          ],
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: (Ae) => Te(Ve, Ae),
                                          className:
                                            "absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors",
                                          title: "从库中移除",
                                          children: e.jsx(_n, {
                                            size: 18,
                                            strokeWidth: 2,
                                          }),
                                        }),
                                      ],
                                    },
                                    ve.userAdded
                                      ? `user-${Ve}-${ve.name}`
                                      : `builtin-${Ve}-${ve.name}`,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    },
                    p,
                  ),
              }),
            }),
          ],
        }),
      ],
    });
  },
  P5 = [
    {
      version: "0.0.73",
      date: "2026-05-09",
      content:
        "新增集市功能，在邂逅app里面。修复线上线下记忆同步不记得的bug、修复ios手机系统弹窗通知显示问题",
      branch: "main",
    },
    {
      version: "0.0.72",
      date: "2026-04-29",
      content:
        "修复了遇见app返回bug、修复赛季旅程日常向任务自动判定问题、修复回忆改写内容语言问题、加强朋友圈动态出现用户评论的限制、api设置新增聊天流式开关（测试版，可能会有一点点问题，目前不推荐使用）、新增备用api站、稳态模式",
      branch: "main",
    },
    {
      version: "0.0.71",
      date: "2026-04-20",
      content:
        "啾音新增char直播和用户直播功能、设置中的字体大小新增可选是否影响聊天app、修复上传了图片后拖动app困难的问题",
      branch: "main",
    },
    { version: "0.0.70", date: "2026-04-14", content: "修复", branch: "main" },
    {
      version: "0.0.69",
      date: "2026-04-14",
      content:
        "修复门禁注册异常，没有注册的宝宝可以使用激活码正常注册、修复部分站点部分模型主动回复和拉黑等主动调用api总是失败的bug、修复门禁退出重进后重复弹设备已满弹窗的bug、门禁新增门禁日志，遇到问题可以先试试重新添加到桌面，还是不行的话可以打开日志复制日志私聊俺们、完善外观设置中调整设置字体大小作用范围（聊天窗口和啾音聊天窗口）",
      branch: "main",
    },
    {
      version: "0.0.68",
      date: "2026-04-14",
      content:
        "修复门禁注册异常，没有注册的宝宝可以使用激活码正常注册、修复部分站点部分模型主动回复和拉黑等主动调用api总是失败的bug、修复门禁退出重进后重复弹设备已满弹窗的bug、门禁新增门禁日志，遇到问题可以先试试重新添加到桌面，还是不行的话可以打开日志复制日志私聊俺们、完善外观设置中调整设置字体大小作用范围（聊天窗口和啾音聊天窗口）",
      branch: "main",
    },
    {
      version: "0.0.67",
      date: "2026-04-13",
      content:
        "电话app新增总结电话摘要同步记忆功能，默认勾选同步，不想勾选可以取消，可以编辑电话摘要。修复遇见app总结问题、新增总结可编辑、修复情侣空间app备忘录中的加密备忘录、完善啾音app里面勾选了不认识但是私聊还会认识的情况、完善视频通话总结重新生成、修复设置中重置全部数据功能",
      branch: "main",
    },
    { version: "0.0.66", date: "2026-04-12", content: "a", branch: "main" },
    {
      version: "0.0.65",
      date: "2026-04-11",
      content:
        "更新回响的功能，更新回响的文风以及副本的种类，回响的远征跑团可以携带char一起，最多可以和三个char一起远征。可以自行选择基调（也就是大概剧情走向，没有特别要求时使用自由均衡，想体验副本boss和npc爱上u的可以试试灵异心动），新增远征可以选择绑定世界书和人设，新增远征跑团任务面板、boss和npc，都可以点击查看。远征结束可以归档结算，查看副本真相和boss以及npc故事、心声、未触发的伏笔。喜欢的boss和npc可以一键生成人设设定，添加到聊天app里面继续聊天。回响新增日间模式ui。",
      branch: "main",
    },
    {
      version: "0.0.64",
      date: "2026-04-10",
      content:
        "聊天设置中新增结构化回复开关，频繁掉格式时可以尝试打开（还在测试阶段，不知道有没有用，大家可以试试，使用html时推荐打开结构性回复）、完善聊天线上总结，新增对应char全部记忆、当前会话绑定记忆、当前会话绑定记忆、继续优化聊天转账感知、完善主动发消息调用api失败、修改完善中转兼容提示词（特别感谢俺们的烂泥宝宝）、修改完善主桌面分页点的位置、强化聊天中对世界书内容的读取以及世界书关键词触发、新增聊天中可以渲染使用html、新增群聊可以绑定世界书，修复线下总结bug，修复聊天app进入主题卡顿",
      branch: "main",
    },
    {
      version: "0.0.63",
      date: "2026-04-09",
      content:
        "修复部分手机因缓存差异导致聊天app出现错误、更新遇见app的内置美化代码",
      branch: "main",
    },
    {
      version: "0.0.62",
      date: "2026-04-09",
      content:
        "新增钱包里面用户点击光学校验可以增加金额、修复char修改签名后弄混签名的bug、修复遇见app设置里面的字数问题、完善实时时间和实时天气的选择框、修复了啾音和可以重置遇见样式",
      branch: "main",
    },
    {
      version: "0.0.61",
      date: "2026-04-08",
      content:
        "修复门禁激活码注册，之前没有用激活码注册的宝宝可以使用激活码去激活啦",
      branch: "main",
    },
    {
      version: "0.0.60",
      date: "2026-04-08",
      content:
        "修复语音报错，啾音报错，修复啾音回复开启不认识以后还认识用户，修复朋友圈发布按钮往下移动，保存进度按钮输入框，存档输入框，视觉引擎输入框，提取记忆用户人设的错乱，dock栏高度增加。",
      branch: "main",
    },
    {
      version: "0.0.59",
      date: "2026-04-08",
      content: "v0.0.59 姝ｅ紡鍙戝竷",
      branch: "main",
    },
    {
      version: "0.0.58",
      date: "2026-04-08",
      content:
        "优化门禁界面，现在超过数量后可以自行选择下线其中已有的一个、门禁界面新增导出数据功能，避免由于门禁导致数据丢失、完善主桌面翻页卡顿、完善导入导出数据会导致门禁失效的问题、修复部分手机点击拉取模型或者测试连接显示错误、修复情侣空间的时间记录错误、修复新建联系人时无法上传头像的问题、修复情侣空间罗盘的功能划不动的问题、新增自动回复可以自定义时长",
      branch: "main",
    },
    {
      version: "0.0.57",
      date: "2026-04-08",
      content: "修复实时时间、完善主动回复和转账感知、修复啾音",
      branch: "main",
    },
    {
      version: "0.0.56",
      date: "2026-04-07",
      content:
        "见信app上传字体bug、主动发消息问题、删除占位app、啾音app用户设置了认识但是在评论里却不认识的bug、修复了状态栏位置的问题、优化实时时间和实时天气测试、优化引用消息，修复啾音评论，修复聊天主动回复时间感知、优化聊天翻译",
      branch: "main",
    },
    {
      version: "0.0.55",
      date: "2026-04-07",
      content: "删除查岗中浏览器功能的超时弹窗",
      branch: "main",
    },
    {
      version: "0.0.54",
      date: "2026-04-07",
      content: "修复安卓顶部黑条、修复查岗功能浏览器和钱包功能",
      branch: "main",
    },
    {
      version: "0.0.53",
      date: "2026-04-06",
      content:
        "新增GitHub云端备份功能，可以定时备份，拉取云端备份导入，需要自己部署。完善重roll功能。新增强制更新按钮，在设置app的数据里面。修复主桌面点击图标问题、修复主动发信息的时间感知功能、群聊表情包可以绑定多个分组、修复群聊调用api、修复啾音app用户作品评论问题，修复图标阴影。修复心声，角色网名个性签名电话，聊天回复反复提爱心，查岗错乱，新增雪夜回望长按删除，设置重置数据可以重置所有数据，邮件报错打不开，啾音用户视频评论和互动消息不同步，情侣空间ui卡顿，聊天回复里朋友圈记忆错乱，占位图标缺少增加问题，遇见线上记忆显示不全",
      branch: "main",
    },
    {
      version: "0.0.52",
      date: "2026-04-06",
      content:
        "修改聊天提示词、修复遇见app的字数问题、情侣空间的按钮往下移、重置主屏幕时小组件的图片清除、修复小组件更改尺寸问题、修复状态栏位置问题、修复字体上传按钮消失问题、优化主桌面翻页、优化新建联系人卡片的适配、修复设置app里面按钮显示的问题、修复朋友圈背景图和头像点不到的问题、修复ai不读朋友圈的问题，修复心声，草稿箱提示词，主动打电话分不清，抖音聊天时间感知、修复数据导入导出、优化门禁",
      branch: "main",
    },
    {
      version: "0.0.51",
      date: "2026-04-05",
      content: "修复全屏",
      branch: "main",
    },
    {
      version: "0.0.50",
      date: "2026-04-05",
      content: "修复全屏",
      branch: "main",
    },
    {
      version: "0.0.49",
      date: "2026-04-05",
      content:
        "调整设置app的返回位置，现在点击大标题也可以返回。修复导入导出功能。修复底栏显示不全。优化滑动界面。优化调整字体大小",
      branch: "main",
    },
    {
      version: "0.0.48",
      date: "2026-04-05",
      content: "进入问题、弹验证服务、修复网易云部署、小组件照片黑白滤镜",
      branch: "main",
    },
    {
      version: "0.0.47",
      date: "2026-04-05",
      content: "小更新一下",
      branch: "main",
    },
    {
      version: "0.0.46",
      date: "2026-04-05",
      content: "小更新",
      branch: "main",
    },
    {
      version: "0.0.45",
      date: "2026-04-05",
      content: "小更新",
      branch: "main",
    },
    {
      version: "0.0.44",
      date: "2026-04-05",
      content: "更新账号密码登录",
      branch: "main",
    },
    {
      version: "0.0.43",
      date: "2026-04-05",
      content: "这个是最新版本哦",
      branch: "main",
    },
    {
      version: "0.0.42",
      date: "2026-04-03",
      content: "小更新",
      branch: "main",
    },
    {
      version: "0.0.41",
      date: "2026-04-02",
      content: "小更新一下",
      branch: "main",
    },
    {
      version: "0.0.40",
      date: "2026-04-01",
      content: "一次大更新",
      branch: "main",
    },
    {
      version: "0.0.39",
      date: "2026-03-23",
      content: "小更新一下，啾啾机器人登场。",
      branch: "main",
    },
    {
      version: "0.0.38",
      date: "2026-03-21",
      content: "正式版大更新",
      branch: "main",
    },
    {
      version: "0.0.37",
      date: "2026-02-25",
      content: "内测第三次大更新",
      branch: "main",
    },
    {
      version: "0.0.36",
      date: "2026-02-23",
      content: "紧急修复一下聊天中的卡片样式还有强化后台保活",
      branch: "main",
    },
    {
      version: "0.0.35",
      date: "2026-02-23",
      content: "内测第二次更新，更新内容见群公告",
      branch: "main",
    },
    {
      version: "0.0.34",
      date: "2026-02-22",
      content: "内测第一次更新",
      branch: "main",
    },
    {
      version: "0.0.33",
      date: "2026-02-21",
      content: "内测快乐",
      branch: "main",
    },
    { version: "0.0.32", date: "2026-02-21", content: "ok啊", branch: "main" },
    {
      version: "0.0.31",
      date: "2026-02-21",
      content: "测试一下",
      branch: "main",
    },
    { version: "0.0.30", date: "2026-02-21", content: "测试", branch: "main" },
    { version: "0.0.29", date: "2026-02-21", content: "更新", branch: "main" },
    { version: "0.0.28", date: "2026-02-21", content: "测试", branch: "main" },
    {
      version: "0.0.27",
      date: "2026-02-21",
      content: "修复乱七八糟的bug",
      branch: "main",
    },
    { version: "0.0.26", date: "2026-02-20", content: "更新", branch: "main" },
    {
      version: "0.0.25",
      date: "2026-02-20",
      content: "更新混淆",
      branch: "main",
    },
    {
      version: "0.0.24",
      date: "2026-02-20",
      content: "更新乱七八糟",
      branch: "main",
    },
    {
      version: "0.0.23",
      date: "2026-02-20",
      content: "更新乱七八糟",
      branch: "main",
    },
    {
      version: "0.0.22",
      date: "2026-02-20",
      content: "更新乱七八糟",
      branch: "main",
    },
    {
      version: "0.0.21",
      date: "2026-02-20",
      content: "更新乱七八糟",
      branch: "main",
    },
    {
      version: "0.0.20",
      date: "2026-02-19",
      content: "更新杂七杂八",
      branch: "main",
    },
    {
      version: "0.0.19",
      date: "2026-02-19",
      content: "尝试修复抖音",
      branch: "main",
    },
    {
      version: "0.0.18",
      date: "2026-02-19",
      content: "尝试修复抖音",
      branch: "main",
    },
    {
      version: "0.0.17",
      date: "2026-02-19",
      content: "修复外卖卡片和小窗",
      branch: "main",
    },
    {
      version: "0.0.16",
      date: "2026-02-19",
      content: "聊天设置自定义代码",
      branch: "main",
    },
    {
      version: "0.0.15",
      date: "2026-02-19",
      content: "再修复一下小窗功能",
      branch: "main",
    },
    {
      version: "0.0.14",
      date: "2026-02-19",
      content: "小窗功能",
      branch: "main",
    },
    {
      version: "0.0.13",
      date: "2026-02-12",
      content: "修复语音",
      branch: "main",
    },
    {
      version: "0.0.12",
      date: "2026-02-12",
      content: "修复语音",
      branch: "main",
    },
    {
      version: "0.0.11",
      date: "2026-02-12",
      content: "测试更新弹窗修复和语音",
      branch: "main",
    },
    {
      version: "0.0.10",
      date: "2026-02-12",
      content: "更新一下信件app",
      branch: "main",
    },
    {
      version: "0.0.9",
      date: "2026-02-10",
      content: "更新一下信件app",
      branch: "main",
    },
    {
      version: "0.0.8",
      date: "2026-02-10",
      content: "更新一下信件app",
      branch: "main",
    },
    {
      version: "0.0.7",
      date: "2026-02-09",
      content: "信件更新一下",
      branch: "main",
    },
    {
      version: "0.0.6",
      date: "2026-02-09",
      content: "随身更新",
      branch: "main",
    },
    {
      version: "0.0.5",
      date: "2026-02-09",
      content: "更新一下",
      branch: "main",
    },
    {
      version: "0.0.4",
      date: "2026-02-08",
      content: "再更新一下",
      branch: "main",
    },
    {
      version: "0.0.3",
      date: "2026-02-08",
      content: "更新一下弹窗和更新脚本",
      branch: "main",
    },
    { version: "0.0.2", date: "2026-02-08", content: "更新弹窗和版本号" },
    { version: "0.0.1", date: "2026-02-08", content: "更新一下版本和弹窗" },
    { version: "0.0.0", date: "2024-02-09", content: "初始化版本" },
  ];
function Ise({ open: t, onClose: s, onConfirmOpenChat: n }) {
  const [a, r] = l.useState(null);
  if (
    (l.useEffect(() => {
      t && r(ch());
    }, [t]),
    !t)
  )
    return null;
  const i = () => {
      (a1(a), n == null || n(), s == null || s());
    },
    o = () => {
      (a1(null), n == null || n(), s == null || s());
    };
  return e.jsx("div", {
    className:
      "fixed inset-0 z-[6000] flex items-end sm:items-center justify-center bg-black/45 backdrop-blur-[2px]",
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "help-scope-title",
    onClick: s,
    children: e.jsxs("div", {
      className:
        "w-full sm:max-w-md bg-[#f9f8f6] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-stone-200/80 p-5 sm:p-6 max-h-[85vh] overflow-y-auto",
      onClick: (c) => c.stopPropagation(),
      children: [
        e.jsx("h2", {
          id: "help-scope-title",
          className: "text-lg font-black text-stone-900 tracking-tight mb-1",
          children: "教程检索范围",
        }),
        e.jsx("p", {
          className: "text-[13px] text-stone-500 leading-relaxed mb-4",
          children:
            "先选要在哪些应用里找内置教程（可多选）。选「全部」则不限制。进入聊天后也可随时在顶部修改。",
        }),
        e.jsx(HA, { value: a, onChange: r }),
        e.jsxs("div", {
          className: "mt-6 flex flex-col gap-2",
          children: [
            e.jsx("button", {
              type: "button",
              className:
                "w-full py-3 rounded-2xl bg-stone-900 text-white text-sm font-bold active:scale-[0.98]",
              onClick: i,
              children: "确定并打开啾啾小助手",
            }),
            e.jsx("button", {
              type: "button",
              className:
                "w-full py-2.5 rounded-2xl bg-stone-200/80 text-stone-700 text-sm font-semibold",
              onClick: o,
              children: "不限范围，直接打开",
            }),
            e.jsx("button", {
              type: "button",
              className: "w-full py-2 text-stone-400 text-xs font-medium",
              onClick: s,
              children: "取消",
            }),
          ],
        }),
      ],
    }),
  });
}
let Oy = !1;
const Ese = 45 * 60 * 1e3;
function Lse(t) {
  return t === !0 || t === 1 || t === "1" || String(t).toLowerCase() === "true";
}
async function Dse() {
  const t = (await be.get("settings_github_cloud_v1", null)) || {},
    s = lu("settings_github_cloud_v1", null) || {};
  return {
    ...(s && typeof s == "object" ? s : {}),
    ...(t && typeof t == "object" ? t : {}),
  };
}
function Zc(t) {
  typeof window > "u" ||
    (window.__PHONE_GITHUB_SCHEDULE__ = {
      ...(window.__PHONE_GITHUB_SCHEDULE__ || {}),
      ...t,
      updatedAt: Date.now(),
    });
}
function $se(t) {
  const s = t.getFullYear(),
    n = String(t.getMonth() + 1).padStart(2, "0"),
    a = String(t.getDate()).padStart(2, "0");
  return `${s}-${n}-${a}`;
}
function Fse(t) {
  const s = String(t || "03:00").trim(),
    n = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(s);
  if (!n) return { h: 3, min: 0 };
  const a = Math.min(23, Math.max(0, parseInt(n[1], 10))),
    r = Math.min(59, Math.max(0, parseInt(n[2], 10)));
  return Number.isNaN(a) || Number.isNaN(r)
    ? { h: 3, min: 0 }
    : { h: a, min: r };
}
const O5 = 4,
  zse = 3500;
async function Rse(t) {
  let s;
  for (let n = 1; n <= O5; n++)
    try {
      return await u6(t);
    } catch (a) {
      ((s = a), n < O5 && (await new Promise((r) => setTimeout(r, zse))));
    }
  throw s;
}
async function B5() {
  var o;
  if (Oy) return;
  const t = await Dse();
  if (!Lse(t.scheduleEnabled)) {
    Zc({ phase: "skip", reason: "schedule_disabled" });
    return;
  }
  if (!String(t.repo || "").trim() || !String(t.token || "").trim()) {
    Zc({ phase: "skip", reason: "missing_repo_or_token" });
    return;
  }
  const { h: s, min: n } = Fse(t.scheduleTime),
    a = new Date(),
    r = $se(a);
  if (t.lastScheduledBackupDay === r) {
    Zc({ phase: "skip", reason: "already_done_today", today: r });
    return;
  }
  const i = new Date(a);
  if ((i.setHours(s, n, 0, 0), a.getTime() < i.getTime())) {
    Zc({
      phase: "skip",
      reason: "before_schedule",
      scheduleISO: i.toISOString(),
      nowISO: a.toISOString(),
    });
    return;
  }
  ((Oy = !0), Zc({ phase: "uploading", today: r }));
  try {
    const { owner: c, repo: d } = z0(String(t.repo).trim()),
      u = (t.branch || "main").trim() || "main",
      f = String(t.token).trim(),
      p = Ro(),
      m = await Promise.race([
        (async () => {
          const g = await D1(p);
          return Rse({ owner: c, repo: d, branch: u, token: f, zipBlob: g });
        })(),
        new Promise((g, x) =>
          setTimeout(
            () =>
              x(new Error("定时备份超时（请检查网络或缩小备份体积后重试）")),
            Ese,
          ),
        ),
      ]),
      h = (await be.get("settings_github_cloud_v1", null)) || {};
    (await be.set("settings_github_cloud_v1", {
      ...h,
      lastScheduledBackupDay: r,
    }),
      Zc({ phase: "ok", today: r }),
      typeof window < "u" &&
        window.dispatchEvent(
          new CustomEvent("phone-github-scheduled-backup", {
            detail: {
              ok: !0,
              folder: m.folder,
              runId: m.runId,
              backupTitle: (o = m.manifest) == null ? void 0 : o.backupTitle,
            },
          }),
        ));
  } catch (c) {
    (Zc({
      phase: "error",
      error: (c == null ? void 0 : c.message) || String(c),
    }),
      typeof window < "u" &&
        window.dispatchEvent(
          new CustomEvent("phone-github-scheduled-backup", {
            detail: {
              ok: !1,
              error: (c == null ? void 0 : c.message) || String(c),
            },
          }),
        ));
  } finally {
    Oy = !1;
  }
}
function Xi(...t) {
  return Fc($c(t));
}
const Pse = () =>
    e.jsxs("div", {
      className: "absolute inset-0 pointer-events-none z-0 overflow-hidden",
      children: [
        [...Array(50)].map((t, s) =>
          e.jsx(
            "div",
            {
              className:
                "absolute bg-white rounded-full opacity-80 animate-snow",
              style: {
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              },
            },
            s,
          ),
        ),
        e.jsx("style", {
          children: `
      @keyframes snow {
        0% { transform: translateY(0) translateX(0); opacity: 0.8; }
        100% { transform: translateY(100vh) translateX(${Math.random() * 50 - 25}px); opacity: 0; }
      }
      .animate-snow { animation: snow linear infinite; }
    `,
        }),
      ],
    }),
  Ose = () =>
    e.jsxs("div", {
      className: "absolute inset-0 pointer-events-none z-0 overflow-hidden",
      children: [
        [...Array(100)].map((t, s) =>
          e.jsx(
            "div",
            {
              className: "absolute bg-blue-200 opacity-60 animate-rain",
              style: {
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
                width: "1px",
                height: `${Math.random() * 15 + 10}px`,
                animationDuration: `${Math.random() * 1 + 0.5}s`,
                animationDelay: `${Math.random() * 2}s`,
              },
            },
            s,
          ),
        ),
        e.jsx("style", {
          children: `
      @keyframes rain {
        0% { transform: translateY(0); opacity: 0.6; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      .animate-rain { animation: rain linear infinite; }
    `,
        }),
      ],
    }),
  Bse = () =>
    e.jsx("style", {
      children: `
    .font-serif-display { font-family: 'Playfair Display', serif; }
    
    .texture-grain {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        pointer-events: none;
    }

    @keyframes orb-float {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(10px, -10px) scale(1.1); }
        66% { transform: translate(-5px, 10px) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
    }
    .animate-orb {
        animation: orb-float 8s ease-in-out infinite;
    }
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 8s linear infinite;
    }
  `,
    }),
  Use = () =>
    e.jsxs("div", {
      className:
        "w-full h-full rounded-3xl p-4 flex flex-col justify-between bg-white/30 backdrop-blur-md border border-white/40 relative overflow-hidden",
      children: [
        e.jsx("div", {
          className:
            "absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-pink-300 via-rose-200 to-transparent rounded-full opacity-60 blur-2xl animate-orb",
        }),
        e.jsxs("div", {
          className: "relative z-10 flex justify-between items-start",
          children: [
            e.jsx("span", {
              className:
                "text-xs font-bold text-slate-600 tracking-wider mix-blend-overlay",
              children: "禅",
            }),
            e.jsx("div", {
              className:
                "w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "relative z-10",
          children: [
            e.jsx("div", {
              className: "text-3xl font-light text-slate-800 tracking-tight",
              children: "心流",
            }),
            e.jsx("div", {
              className:
                "text-[10px] text-slate-600 opacity-70 uppercase tracking-widest",
              children: "状态",
            }),
          ],
        }),
      ],
    }),
  Gse = () =>
    e.jsx("div", {
      className:
        "w-full h-full rounded-3xl p-4 flex flex-col justify-center items-center bg-white/30 backdrop-blur-md border border-white/40 group cursor-pointer",
      children: e.jsxs("div", {
        className: "flex flex-col items-center",
        children: [
          e.jsx("span", {
            className:
              "text-5xl font-serif-display italic text-slate-800 leading-none",
            children: new Date().getDate(),
          }),
          e.jsx("div", {
            className:
              "w-8 h-[1px] bg-slate-400 my-2 group-hover:w-12 transition-all duration-500",
          }),
          e.jsx("span", {
            className:
              "text-xs font-bold uppercase tracking-widest text-slate-500",
            children: new Date().toLocaleString("default", { month: "long" }),
          }),
        ],
      }),
    }),
  Hse = () =>
    e.jsxs("div", {
      className:
        "w-full h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-between px-6 shadow-sm",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("div", {
              className:
                "w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]",
            }),
            e.jsx("span", {
              className:
                "text-xs font-medium text-slate-600 tracking-wide uppercase",
              children: "专注模式",
            }),
          ],
        }),
        e.jsx("span", {
          className: "text-[10px] text-slate-400 font-mono",
          children: "ON",
        }),
      ],
    }),
  Wse = ({ text: t, className: s }) => {
    const n = l.useRef(null),
      a = l.useRef(null),
      [r, i] = l.useState(!1),
      [o, c] = l.useState(0),
      [d, u] = l.useState(0);
    return (
      l.useEffect(() => {
        if (n.current && a.current) {
          const f = n.current.clientWidth,
            p = a.current.scrollWidth;
          (c(f), u(p), i(p > f));
        }
      }, [t]),
      e.jsx("div", {
        ref: n,
        className: "w-full overflow-hidden relative flex items-center",
        children: e.jsx(We.div, {
          ref: a,
          className: `whitespace-nowrap ${s}`,
          animate: r ? { x: [0, -d + o, 0] } : { x: 0 },
          transition: r
            ? {
                duration: Math.max(5, t.length * 0.2),
                repeat: 1 / 0,
                ease: "linear",
                repeatDelay: 2,
              }
            : {},
          children: t,
        }),
      })
    );
  },
  Yse = ({ id: t }) => {
    const [s, n] = l.useState(0),
      a = !0,
      [r, i] = Yn(`vinyl_cover_${t}`, null),
      [o, c] = Yn(`vinyl_top_text_${t}`, "档案 / 第 01 号"),
      [d, u] = Yn(`vinyl_main_text_${t}`, "黑胶珍藏"),
      [f, p] = Yn(`vinyl_bottom_text_${t}`, "轻触探索"),
      m = l.useRef(null);
    l.useEffect(() => {
      const y = setInterval(() => {
        n((v) => (v + 0.5) % 100);
      }, 50);
      return () => clearInterval(y);
    }, [a]);
    const h = (y) => {
        var v;
        (y.stopPropagation(), (v = m.current) == null || v.click());
      },
      g = async (y) => {
        const v = y.target.files[0];
        if (v)
          try {
            const b = await $r(v, 300, 0.8);
            i(b);
          } catch {}
      },
      x = (y, v, b) => (N) => {
        N.stopPropagation();
        const w = prompt(`编辑 ${b}：`, y);
        w !== null && v(w);
      };
    return e.jsxs("div", {
      className:
        "w-full h-full rounded-3xl p-5 flex items-center bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group",
      children: [
        e.jsx("input", {
          type: "file",
          ref: m,
          className: "hidden",
          accept: "image/*",
          onChange: g,
        }),
        e.jsxs("div", {
          className: "flex gap-5 items-center w-full",
          children: [
            e.jsxs("div", {
              className: "relative flex-shrink-0 cursor-pointer",
              onClick: h,
              children: [
                e.jsx("div", {
                  className:
                    "w-28 h-28 rounded-full border border-neutral-200 p-1 animate-spin-slow",
                  style: { animationPlayState: "running" },
                  children: e.jsxs("div", {
                    className:
                      "w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden",
                    children: [
                      r
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("img", {
                                src: r,
                                className:
                                  "absolute inset-0 w-full h-full object-cover opacity-90",
                                alt: "黑胶封面",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 rounded-full bg-[repeating-radial-gradient(transparent_0,transparent_2px,rgba(0,0,0,0.1)_3px,transparent_4px)] pointer-events-none",
                              }),
                            ],
                          })
                        : e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full bg-[repeating-radial-gradient(#1a1a1a_0,#1a1a1a_2px,#2a2a2a_3px,#1a1a1a_4px)]",
                          }),
                      e.jsx("svg", {
                        className:
                          "absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-10",
                        children: e.jsx("circle", {
                          cx: "52",
                          cy: "52",
                          r: "50",
                          fill: "none",
                          stroke: r
                            ? "rgba(255,255,255,0.4)"
                            : "rgba(255,255,255,0.1)",
                          strokeWidth: "1",
                          strokeDasharray: "314",
                          strokeDashoffset: 314 - (314 * s) / 100,
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "absolute w-8 h-8 rounded-full bg-white border border-neutral-200 z-20 flex items-center justify-center overflow-hidden shadow-sm",
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className:
                    "absolute -top-2 -right-2 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity",
                  children: e.jsx(Co, {
                    size: 12,
                    className: "text-neutral-400",
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex-grow space-y-3 w-full overflow-hidden min-w-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 cursor-pointer",
                  onClick: x(o, c, "顶部文字"),
                  children: [
                    e.jsx("span", {
                      className:
                        "text-[9px] font-mono tracking-widest text-neutral-400",
                      children: o,
                    }),
                    e.jsx("div", {
                      className: "h-[0.5px] flex-grow bg-neutral-200",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "cursor-pointer",
                  onClick: x(d, u, "主标题"),
                  children: e.jsx(Wse, {
                    text: d,
                    className:
                      "text-2xl font-serif text-neutral-800 tracking-tight leading-snug",
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "flex justify-between items-end opacity-40 cursor-pointer",
                  onClick: x(f, p, "底部文案"),
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[9px] italic font-serif text-neutral-600",
                      children: f,
                    }),
                    e.jsx(lr, { size: 12 }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Vse =
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  pp = ({
    image: t,
    setImage: s,
    className: n,
    placeholderText: a = "UPLOAD",
    shape: r = "rounded-xl",
    imgClassName: i = "",
  }) => {
    const o = l.useRef(null),
      c = (d) => {
        const u = d.target.files[0];
        if (u) {
          const f = new FileReader();
          ((f.onloadend = () => s(f.result)), f.readAsDataURL(u));
        }
      };
    return e.jsxs("div", {
      className: `relative group cursor-pointer overflow-hidden transition-all duration-700 bg-[#eef0f2] hover:bg-[#e4e6e9] ${r} ${n}`,
      onClick: (d) => {
        (d.stopPropagation(), o.current.click());
      },
      children: [
        e.jsx("div", {
          className: `w-full h-full relative overflow-hidden ${r} bg-white`,
          children: t
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx("img", {
                    src: t,
                    alt: "Uploaded",
                    className:
                      `w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.05] ${i}`.trim(),
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05),inset_0_2px_10px_rgba(0,0,0,0.03)] pointer-events-none z-10",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-[#1a1b1e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-20",
                    children: e.jsx("div", {
                      className:
                        "bg-white/80 border border-[#e2e4e9] p-2.5 rounded-full shadow-sm backdrop-blur-md",
                      children: e.jsx(qo, {
                        className: "text-[#1a1b1e]",
                        size: 16,
                        strokeWidth: 1.5,
                      }),
                    }),
                  }),
                ],
              })
            : e.jsxs("div", {
                className:
                  "absolute inset-0 flex flex-col items-center justify-center text-[#848a96]",
                children: [
                  e.jsx(Za, {
                    size: r === "rounded-full" ? 14 : 20,
                    strokeWidth: 1,
                    className:
                      "mb-1 group-hover:scale-110 transition-transform duration-500 opacity-40 text-[#55575a]",
                  }),
                  r !== "rounded-full" &&
                    e.jsx("span", {
                      className:
                        "text-[7px] font-mono tracking-[0.3em] uppercase opacity-50 text-[#1a1b1e] text-center",
                      children: a,
                    }),
                ],
              }),
        }),
        e.jsx("input", {
          type: "file",
          ref: o,
          onChange: c,
          accept: "image/*",
          className: "hidden",
        }),
      ],
    });
  },
  Jse = ({ className: t }) =>
    e.jsx("div", {
      className: `absolute bg-white/40 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-white/60 z-30 ${t}`,
      style: {
        clipPath: "polygon(1% 0, 99% 1%, 100% 98%, 0% 100%)",
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.02), transparent)",
      },
    }),
  Kse = ({ id: t }) => {
    const [s, n] = Yn(`acetate_2x2_base_${t}`, null),
      [a, r] = Yn(`acetate_2x2_film_title_${t}`, "透明胶片"),
      [i, o] = Yn(`acetate_2x2_text_${t}`, "OVERLAY");
    return e.jsxs("div", {
      className:
        "relative h-full min-h-0 min-w-0 w-full overflow-visible py-0.5 pl-0 pr-1 group -translate-x-1.5",
      children: [
        e.jsx("div", {
          className:
            "absolute bottom-0 right-0 w-[82%] h-[70%] bg-white p-px shadow-md border border-[#e2e4e9] rotate-[4deg] z-0 transition-transform duration-700 group-hover:rotate-[6deg] origin-bottom-right",
          children: e.jsx(pp, {
            image: s,
            setImage: n,
            className: "w-full h-full !rounded-sm",
            shape: "rounded-sm",
            placeholderText: "BASE",
          }),
        }),
        e.jsxs("div", {
          className:
            "absolute w-[57%] h-[49%] bg-white/40 backdrop-blur-xl p-0.5 shadow-[0_4px_12px_-6px_rgba(0,0,0,0.08)] border border-white/60 z-10 flex flex-col justify-between min-h-0 transition-[transform] duration-700 [transform:rotate(-3deg)] group-hover:[transform:rotate(-2deg)_translateY(-2px)]",
          style: { top: "10%", left: "14%" },
          children: [
            e.jsx("span", {
              className:
                "font-serif italic text-xs leading-none text-[#a0a5af] pointer-events-none select-none shrink-0",
              children: "01",
            }),
            e.jsxs("div", {
              className:
                "min-h-0 min-w-0 flex-1 flex flex-col justify-end gap-0.5",
              children: [
                e.jsx(xp, {
                  value: a,
                  setValue: r,
                  className:
                    "font-serif italic text-[6px] leading-tight tracking-wide text-[#5c616a] bg-transparent w-full placeholder-[#b8bcc4]",
                }),
                e.jsxs("div", {
                  className: "min-w-0 shrink-0",
                  children: [
                    e.jsx("div", {
                      className: "w-3.5 h-px bg-[#a0a5af] mb-px",
                    }),
                    e.jsx(xp, {
                      value: i,
                      setValue: o,
                      className:
                        "font-mono text-[5px] font-bold tracking-[0.15em] text-[#1a1b1e] uppercase bg-transparent w-full",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(Jse, {
              className:
                "-top-px left-1/2 -translate-x-1/2 w-5 h-1 rotate-[6deg] shrink-0",
            }),
          ],
        }),
      ],
    });
  },
  xp = ({ value: t, setValue: s, className: n, multiline: a = !1 }) =>
    a
      ? e.jsx("textarea", {
          value: t,
          onChange: (r) => s(r.target.value),
          onClick: (r) => r.stopPropagation(),
          className: `bg-transparent outline-none resize-none w-full placeholder-[#c3c6cc] focus:bg-white/40 focus:ring-1 focus:ring-[#c3c6cc] rounded-sm transition-all duration-300 ${n}`,
          rows: 2,
          spellCheck: "false",
        })
      : e.jsx("input", {
          type: "text",
          value: t,
          onChange: (r) => s(r.target.value),
          onClick: (r) => r.stopPropagation(),
          className: `bg-transparent outline-none w-full placeholder-[#c3c6cc] focus:bg-white/40 focus:ring-1 focus:ring-[#c3c6cc] rounded-sm transition-all duration-300 ${n}`,
          spellCheck: "false",
        }),
  qse = ({ id: t }) => {
    const [s, n] = Yn(`photo_frame_airdrop_avatar_${t}`, null),
      [a, r] = Yn(`photo_frame_airdrop_img_${t}`, null),
      [i, o] = Yn(`photo_frame_airdrop_name_${t}`, "STUDIO MAC");
    return e.jsxs("div", {
      className:
        "relative w-full h-full min-h-0 min-w-0 flex flex-col items-center justify-center perspective-[1000px] group bg-transparent px-1 py-0.5",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 z-0 pointer-events-none overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(74%,4.75rem)] aspect-square max-h-[54%] rounded-full border border-rose-200/25 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]",
            }),
            e.jsx("div", {
              className:
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(54%,3.25rem)] aspect-square max-h-[38%] rounded-full border border-rose-300/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "w-[92%] max-w-[12.25rem] mx-auto h-full max-h-full min-h-0 flex flex-col items-center justify-start gap-2 relative z-10 bg-transparent px-2.5 py-3 transition-transform duration-700 group-hover:[transform:rotateY(10deg)] overflow-y-auto overflow-x-hidden",
          children: [
            e.jsxs("div", {
              className: "w-10 h-10 shrink-0 relative",
              children: [
                e.jsx(pp, {
                  image: s,
                  setImage: n,
                  className:
                    "w-full h-full shadow-sm !bg-[#fff0f4] hover:!bg-[#ffe8ef]",
                  shape: "rounded-full",
                  placeholderText: "USER",
                }),
                e.jsx("div", {
                  className:
                    "absolute -bottom-0.5 -right-0.5 rounded-full p-0.5 shadow-sm bg-[#fff5f8]",
                  children: e.jsx("div", {
                    className:
                      "w-4 h-4 rounded-full flex items-center justify-center bg-rose-200",
                    children: e.jsx(wl, {
                      className: "text-white w-2.5 h-2.5",
                    }),
                  }),
                }),
              ],
            }),
            e.jsx(xp, {
              value: i,
              setValue: o,
              className:
                "font-sans font-bold text-[10px] text-rose-950/75 text-center w-full bg-transparent leading-tight px-0.5",
            }),
            e.jsx("span", {
              className:
                "text-[6px] font-mono text-rose-800/45 tracking-[0.1em] uppercase text-center leading-tight px-0.5 line-clamp-2",
              children: "Wants to share a photo",
            }),
            e.jsx("div", {
              className:
                "w-full h-[3.35rem] min-h-[3.35rem] shrink-0 rounded-md p-px border border-rose-100/60 bg-[#fff5f8] -mt-2.5",
              children: e.jsx(pp, {
                image: a,
                setImage: r,
                className: "w-full h-full !bg-[#fffafc] hover:!bg-[#fff5f8]",
                shape: "rounded-md",
                placeholderText: "PHOTO",
                imgClassName: "object-top",
              }),
            }),
            e.jsxs("div", {
              className: "flex w-full gap-2 shrink-0 mt-0.5",
              children: [
                e.jsx("div", {
                  className:
                    "flex-1 py-2 rounded-lg bg-rose-50 text-rose-900/45 text-[8px] font-bold text-center cursor-pointer hover:bg-rose-100 transition-colors leading-none",
                  children: "Decline",
                }),
                e.jsx("div", {
                  className:
                    "flex-1 py-2 rounded-lg bg-rose-200 text-rose-950/60 text-[8px] font-bold text-center cursor-pointer hover:bg-rose-300/90 transition-colors shadow-[0_1px_4px_rgba(251,113,133,0.15)] leading-none",
                  children: "Accept",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Qse = ({ id: t, onOpenStudio: s }) => {
    const n = t,
      [a, r] = Yn(`profile_card_4x4_bg_${n}`, null),
      [i, o] = Yn(`profile_card_4x4_avatar_${n}`, null),
      [c, d] = Yn(`profile_card_4x4_name_${n}`, ""),
      [u, f] = Yn(`profile_card_4x4_sig_${n}`, ""),
      p = l.useRef(null),
      m = l.useRef(null),
      h = l.useRef(null),
      g = l.useRef(null),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(!1),
      [N, w] = l.useState(""),
      [_, A] = l.useState("");
    (l.useEffect(() => {
      var S;
      x && ((S = h.current) == null || S.focus());
    }, [x]),
      l.useEffect(() => {
        var S;
        v && ((S = g.current) == null || S.focus());
      }, [v]));
    const k = async (S) => {
        var T;
        const j = (T = S.target.files) == null ? void 0 : T[0];
        if (j) {
          try {
            const I = await $r(j, 1200, 0.82);
            r(I);
          } catch {}
          S.target.value = "";
        }
      },
      C = async (S) => {
        var T;
        const j = (T = S.target.files) == null ? void 0 : T[0];
        if (j) {
          try {
            const I = await $r(j, 480, 0.85);
            o(I);
          } catch {}
          S.target.value = "";
        }
      },
      M = () => {
        (d(N.trim()), y(!1));
      },
      E = () => {
        (f(_.trim()), b(!1));
      };
    return e.jsxs("div", {
      "data-widget-interactive": !0,
      className: "relative h-full min-h-0 w-full min-w-0 select-none",
      onPointerDown: (S) => S.stopPropagation(),
      onClick: (S) => S.stopPropagation(),
      children: [
        e.jsx("input", {
          ref: p,
          type: "file",
          accept: "image/*",
          className: "hidden",
          onChange: k,
        }),
        e.jsx("input", {
          ref: m,
          type: "file",
          accept: "image/*",
          className: "hidden",
          onChange: C,
        }),
        e.jsxs("div", {
          className:
            "flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[32px] bg-white shadow-[0_3px_12px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.04]",
          children: [
            e.jsxs("button", {
              type: "button",
              className:
                "relative h-[45%] w-full shrink-0 cursor-pointer bg-cover bg-center text-left",
              style: a ? { backgroundImage: `url(${a})` } : void 0,
              onClick: () => {
                var S;
                return (S = p.current) == null ? void 0 : S.click();
              },
              children: [
                !a &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400",
                  }),
                e.jsx("div", {
                  className:
                    "pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/20 to-transparent",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "relative z-10 flex min-h-0 flex-1 flex-col items-center rounded-t-[24px] bg-white -mt-6 px-5 pb-4 pt-[4.75rem] text-center",
              children: [
                e.jsx("button", {
                  type: "button",
                  className:
                    "absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.1)]",
                  onClick: (S) => {
                    var j;
                    (S.stopPropagation(), (j = m.current) == null || j.click());
                  },
                  children: i
                    ? e.jsx("img", {
                        src: i,
                        alt: "",
                        className: "h-full w-full object-cover",
                        draggable: !1,
                      })
                    : e.jsxs("div", {
                        className:
                          "flex h-full w-full flex-col items-center justify-center gap-0.5 px-2 text-[10px] font-medium leading-tight text-neutral-400",
                        children: [
                          e.jsx("span", { children: "点头像" }),
                          e.jsx("span", { children: "上传" }),
                        ],
                      }),
                }),
                x
                  ? e.jsx("input", {
                      ref: h,
                      value: N,
                      onChange: (S) => w(S.target.value),
                      onBlur: M,
                      onKeyDown: (S) => {
                        (S.key === "Enter" && M(),
                          S.key === "Escape" && (w(c), y(!1)));
                      },
                      className:
                        "mb-1.5 mt-1 w-full max-w-full rounded-md border border-neutral-200 px-2 py-1 text-center text-xl font-bold text-[#1a1a1a] outline-none",
                      maxLength: 32,
                    })
                  : e.jsx("h2", {
                      className:
                        "mb-1.5 mt-1 line-clamp-2 min-h-[1.75rem] w-full cursor-pointer text-xl font-bold text-[#1a1a1a]",
                      onClick: () => {
                        (w(c), y(!0));
                      },
                      children:
                        c ||
                        e.jsx("span", {
                          className: "font-normal text-neutral-400",
                          children: "点击设置网名",
                        }),
                    }),
                v
                  ? e.jsx("textarea", {
                      ref: g,
                      value: _,
                      onChange: (S) => A(S.target.value),
                      onBlur: E,
                      onKeyDown: (S) => {
                        S.key === "Escape" && (A(u), b(!1));
                      },
                      rows: 2,
                      maxLength: 120,
                      className:
                        "w-full max-w-[90%] resize-none rounded-md border border-neutral-200 px-2 py-1 text-sm leading-snug text-[#666] outline-none",
                    })
                  : e.jsx("p", {
                      className:
                        "line-clamp-3 max-w-[90%] min-h-[2.75rem] cursor-pointer text-sm leading-snug text-[#666]",
                      onClick: () => {
                        (A(u), b(!0));
                      },
                      children:
                        u ||
                        e.jsx("span", {
                          className: "text-neutral-400",
                          children: "点击设置个性签名",
                        }),
                    }),
                s &&
                  e.jsx("button", {
                    type: "button",
                    className:
                      "relative z-20 mt-auto min-h-[3rem] w-full shrink-0 cursor-pointer rounded-2xl bg-transparent touch-manipulation active:bg-black/[0.06]",
                    "aria-label": "编辑我的资料小组件",
                    title: "编辑我的资料小组件",
                    onPointerDown: (S) => {
                      S.stopPropagation();
                    },
                    onClick: (S) => {
                      (S.stopPropagation(), s());
                    },
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Zse = ({ id: t, onOpenCapsuleInLibrary: s }) => {
    const n = t,
      { contacts: a } = vn(),
      [r, i] = Yn(`capsule_2x1_bg_${n}`, null),
      [o, c] = Yn(`capsule_2x1_contact_${n}`, null),
      [d, u] = l.useState(() => new Date()),
      [f, p] = l.useState(!1),
      m = l.useRef(null);
    l.useEffect(() => {
      const v = setInterval(() => u(new Date()), 1e3);
      return () => clearInterval(v);
    }, []);
    const h = l.useMemo(() => {
        if (!o) return { name: "—", avatar: "" };
        const v = (a || []).find((b) => String(b.id) === String(o));
        return v
          ? {
              name: (v.remark || v.nickname || v.name || "角色").trim(),
              avatar: (v.avatar && String(v.avatar).trim()) || "",
            }
          : { name: "—", avatar: "" };
      }, [o, a]),
      g = l.useMemo(
        () =>
          d.toLocaleTimeString("zh-CN", {
            hour12: !1,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        [d],
      ),
      x = (v) => {
        var b, N, w, _, A;
        ((N = (b = v.target).closest) != null &&
          N.call(b, "[data-capsule-avatar]")) ||
          ((_ = (w = v.target).closest) != null &&
            _.call(w, "[data-capsule-picker]")) ||
          (A = m.current) == null ||
          A.click();
      },
      y = async (v) => {
        var N;
        const b = (N = v.target.files) == null ? void 0 : N[0];
        if (b) {
          try {
            const w = await $r(b, 900, 0.82);
            i(w);
          } catch {}
          v.target.value = "";
        }
      };
    return e.jsxs("div", {
      "data-widget-interactive": !0,
      className: "relative h-full min-h-0 w-full min-w-0 select-none",
      onPointerDown: (v) => v.stopPropagation(),
      onClick: (v) => v.stopPropagation(),
      children: [
        e.jsx("input", {
          ref: m,
          type: "file",
          accept: "image/*",
          className: "hidden",
          onChange: y,
        }),
        e.jsxs("div", {
          role: "button",
          tabIndex: 0,
          onKeyDown: (v) => {
            var b;
            (v.key === "Enter" || v.key === " ") &&
              (v.preventDefault(), (b = m.current) == null || b.click());
          },
          className:
            "relative flex h-full w-full cursor-pointer items-center overflow-hidden rounded-full px-1.5 py-1 shadow-[0_3px_10px_rgba(118,75,162,0.18)] ring-1 ring-white/25 transition-transform duration-300 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(118,75,162,0.22)]",
          style: r
            ? {
                backgroundImage: `url(${r})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              },
          onClick: x,
          children: [
            e.jsx("div", {
              className:
                "pointer-events-none absolute right-[-12%] top-[-20%] h-10 w-10 rounded-full bg-white/10",
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute bottom-[-12%] left-[32%] h-7 w-7 rounded-full bg-white/10",
            }),
            e.jsx("button", {
              type: "button",
              "data-capsule-avatar": !0,
              className:
                "relative z-[1] box-border flex aspect-square h-full max-h-[3.25rem] w-auto max-w-[3.25rem] min-h-[2.25rem] min-w-[2.25rem] shrink-0 cursor-pointer items-center justify-center self-center overflow-hidden rounded-full border-0 bg-white/25 p-0.5 backdrop-blur-[6px]",
              onClick: (v) => {
                (v.stopPropagation(), p(!0));
              },
              children: h.avatar
                ? e.jsx("img", {
                    src: h.avatar,
                    alt: "",
                    className:
                      "block h-full w-full rounded-full border-2 border-white object-cover",
                    draggable: !1,
                  })
                : e.jsx("div", {
                    className:
                      "flex aspect-square h-full w-full items-center justify-center rounded-full bg-white/30 text-[10px] font-medium text-neutral-900",
                    children: "?",
                  }),
            }),
            e.jsxs("div", {
              className:
                "relative z-[1] flex min-w-0 flex-1 flex-col justify-center pl-1 pr-0.5",
              children: [
                e.jsxs("div", {
                  className:
                    "mb-0.5 flex w-fit max-w-full items-center gap-1 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-medium text-neutral-900 shadow-sm",
                  children: [
                    e.jsx("span", {
                      className:
                        "h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500 shadow-[0_0_4px_#22c55e]",
                    }),
                    "在线中",
                  ],
                }),
                e.jsx("button", {
                  type: "button",
                  className:
                    "w-full min-w-0 truncate text-left text-[12px] font-semibold leading-tight text-neutral-900 drop-shadow-[0_0_8px_rgba(255,255,255,0.85)] cursor-pointer",
                  onClick: (v) => {
                    (v.stopPropagation(), s == null || s());
                  },
                  children: h.name,
                }),
                e.jsx("div", {
                  className:
                    "mt-0.5 font-mono text-[9px] text-neutral-900 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]",
                  children: g,
                }),
              ],
            }),
          ],
        }),
        f &&
          e.jsx("div", {
            "data-capsule-picker": !0,
            className:
              "absolute inset-0 z-[20] flex items-end justify-center rounded-[inherit] bg-black/35 p-1 backdrop-blur-[2px]",
            onClick: () => p(!1),
            children: e.jsxs("div", {
              className:
                "max-h-[min(220px,82%)] w-full overflow-y-auto rounded-xl bg-white/95 p-2 shadow-[0px_8px_24px_rgba(0,0,0,0.12)]",
              onClick: (v) => v.stopPropagation(),
              children: [
                e.jsx("div", {
                  className:
                    "mb-1.5 text-center text-[10px] font-medium text-neutral-500",
                  children: "联系人",
                }),
                (a || []).map((v) =>
                  e.jsxs(
                    "button",
                    {
                      type: "button",
                      className:
                        "mb-1 flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[11px] hover:bg-neutral-100",
                      onClick: () => {
                        (c(String(v.id)), p(!1));
                      },
                      children: [
                        e.jsx("div", {
                          className:
                            "relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100",
                          children: v.avatar
                            ? e.jsx("img", {
                                src: v.avatar,
                                alt: "",
                                className: "h-full w-full object-cover",
                                draggable: !1,
                              })
                            : e.jsx("div", {
                                className:
                                  "flex h-full w-full items-center justify-center text-[10px] text-neutral-400",
                                children: "?",
                              }),
                        }),
                        e.jsx("span", {
                          className: "truncate text-neutral-800",
                          children: (
                            v.remark ||
                            v.nickname ||
                            v.name ||
                            "角色"
                          ).trim(),
                        }),
                      ],
                    },
                    v.id,
                  ),
                ),
                (a || []).length === 0 &&
                  e.jsx("p", {
                    className:
                      "px-1 py-2 text-center text-[10px] text-neutral-400",
                    children: "暂无联系人，请在聊天中添加",
                  }),
              ],
            }),
          }),
      ],
    });
  },
  Xse = ({ className: t }) =>
    e.jsx("div", {
      className: `absolute bg-white/40 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.02)] border border-white/60 z-30 ${t}`,
      style: { clipPath: "polygon(1% 0, 99% 1%, 100% 98%, 0% 100%)" },
    }),
  ene = ({ id: t }) => {
    const [s, n] = Yn(`studio_gallery_4x2_img1_${t}`, null),
      [a, r] = Yn(`studio_gallery_4x2_img2_${t}`, null),
      [i, o] = Yn(`studio_gallery_4x2_title_${t}`, "STUDIO LOG"),
      [c, d] = Yn(
        `studio_gallery_4x2_desc_${t}`,
        "Documenting the silent spaces. Where light meets architecture.",
      );
    return e.jsxs("div", {
      className:
        "relative group w-full h-full min-h-0 min-w-0 overflow-hidden rounded-2xl border border-white/55 bg-white/48 backdrop-blur-xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(255,255,255,0.75),inset_0_1px_0_rgba(255,255,255,0.9)] transition-transform duration-700 hover:-translate-y-1 flex flex-row",
      children: [
        e.jsx("div", {
          className: "pointer-events-none absolute inset-0 z-0",
          style: {
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 92% 6%, rgba(253,242,248,0.22), transparent 52%), radial-gradient(circle at 8% 94%, rgba(252,231,243,0.14), transparent 42%)",
          },
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute inset-0 z-0 mix-blend-multiply opacity-[0.06]",
          style: {
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100,100,110,0.1) 2px, rgba(100,100,110,0.1) 3px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(100,100,110,0.07) 2px, rgba(100,100,110,0.07) 3px)",
            backgroundSize: "5px 5px",
          },
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute top-0 left-8 right-8 h-px z-[5] bg-gradient-to-r from-transparent via-rose-100/35 to-transparent",
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute top-2 left-2 z-[5] h-2.5 w-2.5 border-t border-l border-neutral-400/25",
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute top-2 right-2 z-[5] h-2.5 w-2.5 border-t border-r border-neutral-400/25",
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute bottom-2 left-2 z-[5] h-2.5 w-2.5 border-b border-l border-neutral-300/30",
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute bottom-2 right-2 z-[5] h-2.5 w-2.5 border-b border-r border-rose-100/35",
        }),
        e.jsx("div", {
          className:
            "pointer-events-none absolute bottom-1.5 right-2 z-[5] font-mono text-[5px] tracking-[0.35em] text-neutral-400/45 uppercase select-none",
          children: "Ref · 04",
        }),
        e.jsxs("div", {
          className:
            "w-[45%] h-full shrink-0 py-2 pl-2 pr-1.5 sm:py-2.5 sm:pl-2.5 sm:pr-2 flex flex-col relative border-r border-white/45 bg-[#fcfcfd]/38 backdrop-blur-md min-h-0 min-w-0 overflow-hidden z-[1]",
          children: [
            e.jsx("div", {
              className: "absolute inset-0 pointer-events-none opacity-[0.6]",
              style: {
                backgroundImage:
                  "linear-gradient(rgba(241,242,244,0.9) 1px, transparent 1px)",
                backgroundSize: "100% 24px",
                backgroundPosition: "0 8px",
              },
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-rose-100/25 to-transparent",
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute inset-[5px] rounded-[2px] border border-dashed border-neutral-400/18 z-[2]",
            }),
            e.jsxs("div", {
              className:
                "pointer-events-none absolute left-1.5 top-[22%] bottom-[18%] flex gap-[3px] z-[2]",
              children: [
                e.jsx("div", {
                  className:
                    "w-px h-full bg-gradient-to-b from-transparent via-neutral-400/28 to-transparent",
                }),
                e.jsx("div", {
                  className:
                    "w-px h-full bg-gradient-to-b from-transparent via-neutral-300/14 to-transparent",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-[5px] z-[2]",
              children: [
                e.jsx("span", {
                  className:
                    "mx-auto h-1 w-1 rounded-full border border-neutral-400/35 bg-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]",
                }),
                e.jsx("span", {
                  className:
                    "mx-auto h-1 w-1 rounded-full border border-neutral-400/30 bg-white/30",
                }),
                e.jsx("span", {
                  className:
                    "mx-auto h-1 w-1 rounded-full border border-neutral-400/25 bg-white/25",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute right-2 top-[14%] h-2 w-2 z-[2] border-t border-r border-neutral-400/30",
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute left-3 bottom-[14%] h-2 w-2 z-[2] border-b border-l border-rose-200/25",
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute -right-px top-[8%] h-10 w-10 rounded-tl-full border-l border-t border-neutral-300/22 z-[2]",
              style: { boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.35)" },
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute left-2 top-[10%] font-mono text-[4px] tracking-[0.45em] text-neutral-400/40 uppercase z-[2] select-none",
              children: "Vol",
            }),
            e.jsx("div", {
              className:
                "pointer-events-none absolute left-2 bottom-[10%] font-mono text-[4px] tracking-[0.2em] text-neutral-400/35 z-[2] select-none",
              children: "···",
            }),
            e.jsxs("div", {
              className:
                "relative z-10 flex flex-col justify-start min-h-0 flex-1 pt-[14%] sm:pt-[16%] gap-0 pl-3",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-1 mb-2 sm:mb-2.5 shrink-0 bg-white/55 backdrop-blur-sm px-1.5 py-0.5 border border-white/60 w-max shadow-sm max-w-full ring-1 ring-rose-50/30",
                  children: [
                    e.jsx(lI, {
                      className: "text-[#a0a5af] w-2.5 h-2.5 shrink-0",
                      strokeWidth: 1.5,
                    }),
                    e.jsx(xp, {
                      value: i,
                      setValue: o,
                      className:
                        "font-mono text-[6px] sm:text-[7px] tracking-[0.2em] text-[#55575a] uppercase bg-transparent min-w-0 max-w-[9rem]",
                    }),
                  ],
                }),
                e.jsx(xp, {
                  value: c,
                  setValue: d,
                  multiline: !0,
                  className:
                    "font-serif italic text-[9px] sm:text-[10px] text-[#1a1b1e] leading-[1.55] bg-transparent min-h-0 flex-1 min-w-0 mt-1",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 min-w-0 min-h-0 relative bg-white/25 backdrop-blur-md p-1.5 sm:p-2 z-[1]",
          children: [
            e.jsx("div", {
              className:
                "pointer-events-none absolute inset-y-4 right-0 w-px bg-gradient-to-b from-transparent via-rose-100/20 to-transparent",
            }),
            e.jsx("div", {
              className:
                "absolute left-[6%] top-[9%] w-[44%] aspect-[6/7] max-h-[76%] bg-[#f8f9fa]/75 backdrop-blur-sm p-1 sm:p-1.5 border border-white/50 shadow-sm transition-transform duration-700 group-hover:rotate-[-2deg]",
              children: e.jsx(pp, {
                image: s,
                setImage: n,
                className: "w-full h-full !rounded-none",
                shape: "rounded-none",
                placeholderText: "IMG 01",
              }),
            }),
            e.jsxs("div", {
              className:
                "absolute right-[5%] bottom-[9%] w-[44%] aspect-[6/7] max-h-[76%] bg-white/70 backdrop-blur-sm p-1 sm:p-1.5 border border-white/55 shadow-[0_10px_20px_rgba(0,0,0,0.06)] transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2",
              children: [
                e.jsx(pp, {
                  image: a,
                  setImage: r,
                  className: "w-full h-full !rounded-none",
                  shape: "rounded-none",
                  placeholderText: "IMG 02",
                }),
                e.jsx(Xse, {
                  className:
                    "-top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-[min(52%,4rem)] h-2.5 sm:h-3 sm:w-14 rotate-[4deg]",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  tne = ({ id: t, size: s = "4x2" }) => {
    const n = s === "2x2",
      [a, r] = Yn(`photo_frame_img_${t}`, Vse),
      [i, o] = Yn(`photo_frame_caption_${t}`, "Moments"),
      c = l.useRef(null),
      d = (p) => {
        var m;
        (p.stopPropagation(), (m = c.current) == null || m.click());
      },
      u = async (p) => {
        var h;
        const m = (h = p.target.files) == null ? void 0 : h[0];
        if (m)
          try {
            const g = await $r(m, 1200, 0.85);
            r(g);
          } catch {}
      },
      f = (p) => {
        p.stopPropagation();
        const m = prompt("编辑标题：", i);
        m !== null && o(m);
      };
    return n
      ? e.jsx("div", {
          className: "w-full h-full min-h-0 min-w-0 overflow-hidden relative",
          children: e.jsx(qse, { id: t }),
        })
      : e.jsxs("div", {
          className: Xi(
            "w-full h-full overflow-hidden relative border border-white/40 group",
            "rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)]",
          ),
          children: [
            e.jsx("input", {
              type: "file",
              ref: c,
              className: "hidden",
              accept: "image/*",
              onChange: u,
            }),
            e.jsx("img", {
              src: a,
              alt: "",
              className:
                "absolute inset-0 w-full h-full object-cover pointer-events-none",
            }),
            e.jsxs("div", {
              className: "absolute inset-0 flex flex-col",
              children: [
                e.jsx("button", {
                  type: "button",
                  className:
                    "flex-1 min-h-[40%] w-full cursor-pointer bg-transparent border-0 p-0",
                  onClick: d,
                  "aria-label": "更换照片",
                }),
                e.jsx("div", {
                  className:
                    "relative flex-shrink-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent px-7 pb-7 pt-16",
                  children: e.jsx("button", {
                    type: "button",
                    className:
                      "w-full text-left bg-transparent border-0 p-0 cursor-pointer",
                    onClick: f,
                    children: e.jsx("span", {
                      className:
                        "text-white font-serif italic tracking-wide drop-shadow-md text-xl sm:text-2xl",
                      children: i,
                    }),
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute p-1.5 bg-white/85 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none top-3 right-3",
              children: e.jsx(Za, { size: 12, className: "text-neutral-500" }),
            }),
          ],
        });
  };
function B1({ designSize: t, size: s, children: n }) {
  const a = (p) => {
      const m = String(p || "1x1")
        .split("x")
        .map((h) => parseInt(h, 10));
      return m.length !== 2 || m.some((h) => !Number.isFinite(h) || h < 1)
        ? [1, 1]
        : m;
    },
    [r, i] = a(t),
    [o, c] = a(s),
    d = o / r,
    u = c / i,
    f = Math.min(d, u);
  return !Number.isFinite(f) || f <= 0
    ? e.jsx("div", { className: "h-full w-full min-h-0 min-w-0", children: n })
    : Math.abs(f - 1) < 1e-4
      ? e.jsx("div", {
          className: "h-full w-full min-h-0 min-w-0",
          children: n,
        })
      : e.jsx("div", {
          className: "relative h-full w-full min-h-0 min-w-0 overflow-hidden",
          children: e.jsx("div", {
            className:
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-h-0 min-w-0",
            style: { width: `${(r / o) * 100}%`, height: `${(i / c) * 100}%` },
            children: e.jsx("div", {
              className: "h-full w-full min-h-0 min-w-0 origin-center",
              style: { transform: `scale(${f})` },
              children: n,
            }),
          }),
        });
}
function U1({
  id: t,
  widgetData: s,
  onBuiltinProfileOpenStudio: n,
  onBuiltinCapsuleOpenLibrary: a,
}) {
  if (
    (s == null ? void 0 : s.type) !== "builtin" ||
    !(s != null && s.component)
  )
    return null;
  const r = s.component;
  return e.jsxs(e.Fragment, {
    children: [
      r === "LiquidOrb" && e.jsx(Use, {}),
      r === "TypoCalendar" && e.jsx(Gse, {}),
      r === "StatusPill" && e.jsx(Hse, {}),
      r === "VinylArchive" && e.jsx(Yse, { id: t }),
      r === "PhotoFrame" && e.jsx(tne, { id: t, size: s.size || "4x2" }),
      r === "StudioGallery4x2" && e.jsx(ene, { id: t }),
      r === "AcetateOverlay2x2" && e.jsx(Kse, { id: t }),
      r === "ProfileCard4x4" && e.jsx(Qse, { id: t, onOpenStudio: n }),
      r === "CapsuleStatus2x1" &&
        e.jsx(Zse, { id: t, onOpenCapsuleInLibrary: a }),
    ],
  });
}
const sne = { duration: 150, easing: "ease-out" },
  By = ({
    id: t,
    name: s,
    icon: n,
    onClick: a,
    onEdit: r,
    isEmpty: i,
    customIcon: o,
    themeColor: c,
    isDockItem: d,
    isOpen: u,
    isWidget: f,
    widgetData: p,
    blurStyle: m,
    removeRounded: h,
    uiStyle: g,
    appCustomizations: x,
    onBuiltinProfileOpenStudio: y,
    onBuiltinCapsuleOpenLibrary: v,
  }) => {
    const {
        attributes: b,
        listeners: N,
        setNodeRef: w,
        transform: _,
        transition: A,
        isDragging: k,
      } = Wh({
        id: t,
        disabled: !!(x != null && x.lockDesktopLayout),
        transition: sne,
      }),
      C = () =>
        m === "blur"
          ? "bg-white/30 backdrop-blur-sm border border-white/20 shadow-sm"
          : "glass-icon",
      M =
        (x == null ? void 0 : x.globalBorderRadius) !== void 0
          ? `${x.globalBorderRadius}%`
          : "50%",
      E = l.useRef(null);
    l.useEffect(() => {
      if (f && E.current) {
        const L = E.current.querySelector(".countdown-widget");
        if (L) {
          const F = L.getAttribute("data-target");
          if (F) {
            const D = () => {
              const P = new Date(),
                O = new Date(F) - P;
              if (O > 0) {
                const Z = Math.floor(O / 864e5),
                  K = Math.floor((O % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
                  q = Math.floor((O % (1e3 * 60 * 60)) / (1e3 * 60)),
                  V = L.querySelector(".days"),
                  ne = L.querySelector(".hours"),
                  le = L.querySelector(".mins");
                (V && (V.textContent = Z.toString().padStart(2, "0")),
                  ne && (ne.textContent = K.toString().padStart(2, "0")),
                  le && (le.textContent = q.toString().padStart(2, "0")));
              }
            };
            D();
            const $ = setInterval(D, 6e4);
            return () => clearInterval($);
          }
        }
        const B = E.current.querySelector(".weather-card");
        if (B) {
          const F = B.querySelector(".weather-city"),
            D = F ? F.textContent : "";
          (D === "Current Location" || D === "Local" || !D) &&
            navigator.geolocation &&
            navigator.geolocation.getCurrentPosition(
              async ($) => {
                try {
                  const { latitude: P, longitude: z } = $.coords,
                    Z = await (
                      await fetch(
                        `https://api.open-meteo.com/v1/forecast?latitude=${P}&longitude=${z}&current=temperature_2m,weather_code&timezone=auto`,
                      )
                    ).json();
                  let K = D;
                  try {
                    const X = await (
                      await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${P}&lon=${z}`,
                      )
                    ).json();
                    K =
                      X.address.city ||
                      X.address.town ||
                      X.address.village ||
                      X.address.suburb ||
                      "Local";
                  } catch {}
                  const q = Z.current.weather_code;
                  let V = "Clear";
                  (q > 0 && q < 3
                    ? (V = "Cloudy")
                    : q >= 3 && q < 50
                      ? (V = "Foggy")
                      : q >= 50 && q < 80
                        ? (V = "Rainy")
                        : q >= 80 && (V = "Storm"),
                    F && (F.textContent = K));
                  const ne = B.querySelector(".weather-temp");
                  ne &&
                    (ne.textContent = `${Math.round(Z.current.temperature_2m)}°`);
                  const le = B.querySelector(".weather-desc");
                  le && (le.textContent = V);
                } catch {}
              },
              ($) => {},
            );
        }
      }
    }, [f, p]);
    const S = (p == null ? void 0 : p.size) || "1x1",
      [j, T] = S.split("x"),
      I = {
        transform: Hi.Transform.toString(_),
        transition: A,
        opacity: k ? 0 : 1,
        gridColumn: f ? `span ${j}` : "span 1",
        gridRow: f ? `span ${T}` : "span 1",
      };
    return i
      ? e.jsx("div", {
          ref: w,
          style: I,
          ...b,
          ...N,
          className: "w-full h-full rounded-[16px] touch-none",
        })
      : f
        ? e.jsx("div", {
            ref: w,
            style: I,
            ...b,
            ...N,
            onClick: (L) => {
              var B, F;
              ((F = (B = L.target).closest) != null &&
                F.call(B, "[data-widget-interactive]")) ||
                (r && r());
            },
            onDoubleClick: (L) => {
              (L.stopPropagation(), r && r());
            },
            className:
              "relative group touch-none cursor-pointer transition-all duration-300 h-full min-h-0 min-w-0",
            children: e.jsx("div", {
              ref: E,
              className: "h-full min-h-0 min-w-0 w-full",
              children:
                p.type === "builtin"
                  ? e.jsx(B1, {
                      designSize: p.designSize || p.size,
                      size: p.size || "1x1",
                      children: e.jsx(U1, {
                        id: t,
                        widgetData: p,
                        onBuiltinProfileOpenStudio: y,
                        onBuiltinCapsuleOpenLibrary: v,
                      }),
                    })
                  : e.jsx(h2, {
                      html: p.html,
                      css: p.css,
                      className: "w-full h-full",
                    }),
            }),
          })
        : e.jsxs("div", {
            ref: w,
            style: I,
            ...b,
            ...N,
            onClick: a,
            className: Xi(
              "flex flex-col items-center group touch-none transition-all duration-300 w-full h-full",
              t === "desktop_placeholder" ? "cursor-default" : "cursor-pointer",
              d ? "justify-center gap-0" : "justify-start gap-1",
            ),
            children: [
              e.jsxs(We.div, {
                whileTap: { scale: 0.9 },
                className:
                  "relative flex-shrink-0 flex items-center justify-center",
                style: {
                  width:
                    (x == null ? void 0 : x.globalIconSize) ??
                    (g === "cyber-zen" ? 48 : 62),
                  height:
                    (x == null ? void 0 : x.globalIconSize) ??
                    (g === "cyber-zen" ? 48 : 62),
                },
                children: [
                  e.jsx(We.div, {
                    layoutId: void 0,
                    initial: !1,
                    className: Xi(
                      "absolute inset-0",
                      o
                        ? "overflow-hidden"
                        : g === "cyber-zen"
                          ? "bg-white/20 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-center"
                          : `overflow-hidden ${C()}`,
                    ),
                    style: { opacity: u ? 0 : 1, borderRadius: M },
                    children:
                      o &&
                      e.jsx("img", {
                        src: o,
                        alt: s,
                        draggable: !1,
                        onDragStart: (L) => L.preventDefault(),
                        className:
                          "w-full h-full object-cover pointer-events-none select-none",
                        style: {
                          WebkitUserDrag: "none",
                          WebkitTouchCallout: "none",
                        },
                      }),
                  }),
                  !o &&
                    n &&
                    e.jsx(We.div, {
                      className:
                        "relative z-10 drop-shadow-sm flex items-center justify-center w-full h-full",
                      initial: { opacity: 1 },
                      exit: { opacity: 0 },
                      style: { opacity: u ? 0 : 1 },
                      children: e.jsx(n, {
                        size: Math.round(
                          ((x == null ? void 0 : x.globalIconSize) ??
                            (g === "cyber-zen" ? 48 : 62)) * 0.48,
                        ),
                        strokeWidth: 1.5,
                        style: { color: c.appIcon },
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                ],
              }),
              !d && s
                ? e.jsx("span", {
                    className: Xi(
                      "text-[11px] font-medium transition-colors truncate max-w-[70px] text-center drop-shadow-md block leading-tight mt-0.5 flex-shrink-0",
                      g === "cyber-zen" ? "text-slate-800" : "",
                    ),
                    style: {
                      color: c.appName,
                      textShadow:
                        g === "cyber-zen"
                          ? "none"
                          : "0 1px 2px rgba(0,0,0,0.1)",
                    },
                    children: s,
                  })
                : null,
            ],
          });
  },
  nne = {
    chat: Ar,
    notes: YE,
    calendar: Iu,
    clock: Dr,
    photos: Za,
    couple: zn,
    book: Rm,
    mail: Ac,
    camera: qo,
    calculator: J5,
    reading: Rm,
    weather: Th,
    settings: Co,
    messages: vu,
    phone: Zr,
    ai_phone: Ah,
    meet: Xn,
    douyin: vr,
    encounter: q1,
    echo: Om,
    leting: vr,
    bubble: Ar,
    meihua_share: Yl,
    help: xl,
    desktop_placeholder: Bm,
  },
  Uy = KF.map(({ id: t }) => ({ id: t, icon: nne[t] })),
  Qa = (t, s) => {
    const [n, a, r] = Yn(t, s);
    return [n, a, r];
  },
  ane = ({ onOpenChat: t, onOpenTrace: s }) => {
    const n = vn();
    if (!n) return null;
    const { notification: a, closeNotification: r, setActiveChatId: i } = n;
    return e.jsx(p$, {
      notification: a,
      onClose: r,
      onClick: (o) => {
        (o == null ? void 0 : o.type) === "trace_updated"
          ? (s && o.contactId != null && s(o.contactId, o.pageIndex ?? 0), r())
          : (o != null && o.chatId && (i(o.chatId), t()), r());
      },
    });
  },
  rne = () => {
    const t = vn();
    if (!t || !t.clickGlowEnabled) return null;
    const s = (t.clickGlowAsset || "").trim();
    return s
      ? e.jsx("div", {
          className:
            "absolute inset-0 spotlight-overlay spotlight-overlay--asset pointer-events-none",
          style: { "--spotlight-asset": `url("${s}")` },
        })
      : e.jsx("div", {
          className: "absolute inset-0 spotlight-overlay pointer-events-none",
        });
  },