                  className: "px-8 mb-8 mt-6",
                  children: e.jsx("div", {
                    className:
                      "border-2 border-gray-900 p-1 relative group cursor-pointer",
                    onClick: ua,
                    children: e.jsxs("div", {
                      className:
                        "bg-white border border-gray-200 p-6 flex items-center gap-8 relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 opacity-[0.03] pointer-events-none",
                          style: {
                            backgroundImage:
                              "radial-gradient(#000 1px, transparent 1px)",
                            backgroundSize: "10px 10px",
                          },
                        }),
                        e.jsxs("div", {
                          className:
                            "relative w-24 h-24 flex-shrink-0 border border-gray-200 p-1 bg-white shadow-sm rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500",
                          children: [
                            e.jsx("img", {
                              src: K.avatar,
                              alt: "头像",
                              className: "w-full h-full object-cover",
                            }),
                            e.jsx("input", {
                              type: "file",
                              accept: "image/*",
                              onChange: Ln,
                              className:
                                "absolute inset-0 opacity-0 cursor-pointer",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex-1 z-10",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-start border-b border-gray-100 pb-2 mb-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[0.833333rem] font-bold tracking-[0.2em] text-gray-400 uppercase",
                                  children: "IDENTITY CARD",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.833333rem] font-mono text-gray-900",
                                  children: "NO. 8492-A",
                                }),
                              ],
                            }),
                            e.jsx("h2", {
                              className:
                                "text-4xl font-serif text-gray-900 leading-none mb-1 tracking-tight",
                              children: K.name,
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mt-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "px-1.5 py-0.5 bg-gray-900 text-white text-[0.75rem] font-bold tracking-wider uppercase",
                                  children: "ADMIN",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[0.75rem] font-mono text-gray-400",
                                  children: "ACCESS GRANTED",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsxs("div", {
                  className: "px-8 mb-12",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-4 py-3 border-y border-gray-200 group hover:border-gray-900 transition-colors cursor-text relative",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-2 h-2 bg-green-500 rounded-full animate-pulse",
                            }),
                            e.jsx("span", {
                              className:
                                "text-[0.833333rem] font-bold tracking-widest text-gray-900 uppercase",
                              children: "SYSTEM ONLINE",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "flex-1 h-[1px] bg-gray-200 group-hover:bg-gray-900 transition-colors relative overflow-hidden",
                          children: e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gray-900/10 w-full h-full transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000",
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-2 text-gray-400 group-hover:text-gray-900 transition-colors",
                          children: [
                            e.jsx(pr, { size: 14 }),
                            e.jsx("span", {
                              className:
                                "text-[0.833333rem] font-bold tracking-widest uppercase hidden sm:block",
                              children: "SEARCH ARCHIVES",
                            }),
                          ],
                        }),
                        e.jsx("input", {
                          type: "text",
                          className: "absolute inset-0 opacity-0 cursor-text",
                          value: at,
                          onChange: (Et) => ft(Et.target.value),
                          placeholder: "",
                          "aria-label": "搜索设置项",
                        }),
                      ],
                    }),
                    at &&
                      e.jsxs("div", {
                        className:
                          "mt-2 text-[0.833333rem] font-mono text-gray-500 flex justify-between animate-in fade-in",
                        children: [
                          e.jsxs("span", { children: ['筛选: "', at, '"'] }),
                          e.jsx("button", {
                            onClick: () => ft(""),
                            className: "hover:text-red-500",
                            children: "清除",
                          }),
                        ],
                      }),
                  ],
                }),
                e.jsx("div", {
                  className: "px-8 pb-12",
                  children: e.jsx("div", {
                    className: "border-t-2 border-gray-900",
                    children: at.trim()
                      ? Dt.length > 0
                        ? Dt.map((Et) => {
                            const Ms =
                              Et.viewId.startsWith("appearance-") &&
                              Et.viewId !== "appearance";
                            return e.jsxs(
                              "div",
                              {
                                onClick: () => {
                                  (Ie(Et.viewId), ft(""));
                                },
                                className:
                                  "group flex items-center justify-between gap-4 py-6 border-b border-gray-200 cursor-pointer hover:bg-white transition-colors relative min-w-0",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gray-900 group-hover:h-full transition-all duration-300",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "flex min-w-0 flex-1 items-baseline gap-8 pl-6",
                                    children: e.jsxs("div", {
                                      className: "flex min-w-0 flex-col",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-2xl font-serif text-gray-900 italic group-hover:translate-x-2 transition-transform duration-300 break-words",
                                          children: Et.title,
                                        }),
                                        Ms &&
                                          e.jsx("span", {
                                            className:
                                              "text-[0.75rem] tracking-[0.2em] text-gray-500 mt-1",
                                            children: Et.breadcrumb,
                                          }),
                                        !Ms &&
                                          e.jsx("span", {
                                            className:
                                              "text-[0.75rem] tracking-[0.2em] text-gray-400 uppercase mt-1 group-hover:text-gray-600 transition-colors",
                                            children: Et.subtitle,
                                          }),
                                      ],
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "shrink-0 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0",
                                    children: e.jsx(Kn, {
                                      size: 20,
                                      className: "text-gray-900",
                                      strokeWidth: 1,
                                    }),
                                  }),
                                ],
                              },
                              Et.viewId,
                            );
                          })
                        : e.jsxs("div", {
                            className: "py-12 text-center text-gray-400",
                            children: [
                              e.jsxs("p", {
                                className: "text-sm font-serif italic",
                                children: ['未找到与 "', at, '" 相关的设置项'],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[0.833333rem] tracking-widest uppercase mt-2",
                                children: "试试其他关键词，或清空搜索查看全部",
                              }),
                            ],
                          })
                      : et.map((Et) =>
                          e.jsxs(
                            "div",
                            {
                              onClick: () => Ie(Et.id),
                              className:
                                "group flex items-center justify-between gap-4 py-6 border-b border-gray-200 cursor-pointer hover:bg-white transition-colors relative min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gray-900 group-hover:h-full transition-all duration-300",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex min-w-0 flex-1 items-baseline gap-8 pl-6",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-bold font-mono text-gray-300 group-hover:text-gray-900 transition-colors",
                                      children: Et.num,
                                    }),
                                    e.jsxs("div", {
                                      className: "flex min-w-0 flex-col",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-2xl font-serif text-gray-900 italic group-hover:translate-x-2 transition-transform duration-300 break-words",
                                          children: Et.title,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[0.75rem] tracking-[0.2em] text-gray-400 uppercase mt-1 group-hover:text-gray-600 transition-colors",
                                          children: Et.sub,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "shrink-0 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0",
                                  children: e.jsx(Kn, {
                                    size: 20,
                                    className: "text-gray-900",
                                    strokeWidth: 1,
                                  }),
                                }),
                              ],
                            },
                            Et.id,
                          ),
                        ),
                  }),
                }),
              ],
            }),
          ],
        }),
      Xu = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.apiConfig,
              subtitle: "神经网络",
              onBack: () => Ie("main"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx(tr, {
                  number: "01",
                  title: "主 API 站",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(ji, {
                          label: "主站 Endpoint",
                          value: V.endpoint,
                          onChange: (Et) => ne({ ...V, endpoint: Et }),
                          placeholder: "https://api.example.com/v1",
                        }),
                        e.jsx(ji, {
                          label: "主站 API Key",
                          value: V.key,
                          onChange: (Et) => ne({ ...V, key: Et }),
                          placeholder: "sk-...",
                          type: "password",
                        }),
                        e.jsxs("div", {
                          className: "pt-2 space-y-2",
                          children: [
                            e.jsx(Pa, {
                              onClick: As,
                              loading: bs,
                              className: nr(
                                "w-full",
                                Bs === "success" &&
                                  "bg-green-600 hover:bg-green-700",
                                Bs === "failed" &&
                                  "bg-red-600 hover:bg-red-700",
                              ),
                              children:
                                Bs === "success"
                                  ? Me.success
                                  : Bs === "failed"
                                    ? Me.failed
                                    : Me.testConnection,
                            }),
                            sn &&
                              e.jsxs("div", {
                                className:
                                  "bg-red-50 border border-red-100 rounded p-3 text-[0.833333rem] font-mono text-red-600 break-all animate-in fade-in slide-in-from-top-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-bold",
                                    children: "ERROR:",
                                  }),
                                  " ",
                                  sn,
                                ],
                              }),
                            Bs === "success" &&
                              xs &&
                              e.jsx("div", {
                                className:
                                  "bg-green-50 border border-green-200 rounded p-3 text-sm text-green-700 animate-in fade-in slide-in-from-top-2",
                                children: xs,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "02",
                  title: "主站模型与参数",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(Pa, {
                          onClick: rs,
                          loading: ct,
                          variant: "secondary",
                          className: "w-full min-w-0",
                          children: Me.fetchModels,
                        }),
                        ae &&
                          e.jsx("div", {
                            className:
                              "bg-green-50 border border-green-200 rounded p-3 text-sm text-green-700 animate-in fade-in slide-in-from-top-2",
                            children: ae,
                          }),
                        e.jsx(Ly, {
                          label: "可用模型 (选择以填充下方)",
                          value: V.model,
                          onChange: (Et) => {
                            Et && ne({ ...V, model: Et });
                          },
                          options:
                            jt.length > 0
                              ? [
                                  { value: "", label: "从列表选择" },
                                  ...jt.map((Et) => ({ value: Et, label: Et })),
                                ]
                              : [{ value: "", label: "请先获取模型列表" }],
                        }),
                        e.jsx(ji, {
                          label: "模型 ID (最终使用)",
                          value: V.model,
                          onChange: (Et) => ne({ ...V, model: Et }),
                          placeholder: "选择或手动输入模型 ID",
                        }),
                        e.jsx(fc, {
                          label: Me.temperature,
                          value: V.temperature,
                          min: 0,
                          max: 2,
                          step: 0.1,
                          onChange: (Et) => ne({ ...V, temperature: Et }),
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "03",
                  title: "备用 API 站",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(ji, {
                          label: "备用站 Endpoint",
                          value: V.backupEndpoint ?? "",
                          onChange: (Et) => ne({ ...V, backupEndpoint: Et }),
                          placeholder: "https://backup.example.com/v1",
                        }),
                        e.jsx(ji, {
                          label: "备用站 API Key（可选）",
                          value: V.backupKey ?? "",
                          onChange: (Et) => ne({ ...V, backupKey: Et }),
                          placeholder: "不填则沿用主站 Key",
                          type: "password",
                        }),
                        e.jsx(Pa, {
                          onClick: gs,
                          loading: fs,
                          variant: "secondary",
                          className: "w-full min-w-0",
                          children: "获取备用站模型列表",
                        }),
                        It &&
                          e.jsx("div", {
                            className:
                              "bg-green-50 border border-green-200 rounded p-3 text-sm text-green-700 animate-in fade-in slide-in-from-top-2",
                            children: It,
                          }),
                        e.jsx(Ly, {
                          label: "备用站可用模型 (选择以填充下方)",
                          value: V.backupModel ?? "",
                          onChange: (Et) => {
                            Et && ne({ ...V, backupModel: Et });
                          },
                          options:
                            Pt.length > 0
                              ? [
                                  { value: "", label: "从列表选择" },
                                  ...Pt.map((Et) => ({ value: Et, label: Et })),
                                ]
                              : [
                                  {
                                    value: "",
                                    label: "请先获取备用站模型列表",
                                  },
                                ],
                        }),
                        e.jsx(ji, {
                          label: "备用站模型 ID（可选）",
                          value: V.backupModel ?? "",
                          onChange: (Et) => ne({ ...V, backupModel: Et }),
                          placeholder: "留空则沿用主站模型",
                        }),
                        e.jsx(fc, {
                          label: "备用站温度",
                          value: Number.isFinite(Number(V.backupTemperature))
                            ? Number(V.backupTemperature)
                            : 0.7,
                          min: 0,
                          max: 2,
                          step: 0.1,
                          onChange: (Et) => ne({ ...V, backupTemperature: Et }),
                        }),
                        e.jsxs("div", {
                          className: "pt-2 space-y-2",
                          children: [
                            e.jsx(Pa, {
                              onClick: Ks,
                              loading: _s,
                              className: nr(
                                "w-full",
                                Xs === "success" &&
                                  "bg-green-600 hover:bg-green-700",
                                Xs === "failed" &&
                                  "bg-red-600 hover:bg-red-700",
                              ),
                              children:
                                Xs === "success"
                                  ? Me.success
                                  : Xs === "failed"
                                    ? Me.failed
                                    : "测试备用站连接",
                            }),
                            rn &&
                              e.jsxs("div", {
                                className:
                                  "bg-red-50 border border-red-100 rounded p-3 text-[0.833333rem] font-mono text-red-600 break-all animate-in fade-in slide-in-from-top-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-bold",
                                    children: "ERROR:",
                                  }),
                                  " ",
                                  rn,
                                ],
                              }),
                            Xs === "success" &&
                              st &&
                              e.jsx("div", {
                                className:
                                  "bg-green-50 border border-green-200 rounded p-3 text-sm text-green-700 animate-in fade-in slide-in-from-top-2",
                                children: st,
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "04",
                  title: Me.presets,
                  children: e.jsxs(Da, {
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-col gap-3 sm:flex-row sm:items-end mb-6 min-w-0",
                        children: [
                          e.jsx("input", {
                            type: "text",
                            value: Ft,
                            onChange: (Et) => es(Et.target.value),
                            placeholder: Me.newPreset,
                            className:
                              "min-w-0 w-full sm:flex-1 bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif placeholder-gray-300 focus:border-gray-900 transition-colors",
                          }),
                          e.jsx(Pa, {
                            onClick: on,
                            className: "w-full shrink-0 px-4 sm:w-auto",
                            children: Me.save,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2 min-w-0",
                        children: [
                          X.map((Et, Ms) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center gap-2 justify-between p-3 border border-gray-100 hover:border-gray-300 transition-colors min-w-0",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-sm italic min-w-0 flex-1 truncate",
                                    title: Et.name,
                                    children: Et.name,
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-2 shrink-0",
                                    children: [
                                      e.jsx("button", {
                                        onClick: () => tn(Et),
                                        className:
                                          "p-2 hover:bg-gray-100 text-gray-500",
                                        children: e.jsx(Pr, { size: 14 }),
                                      }),
                                      e.jsx("button", {
                                        onClick: () => dn(Ms),
                                        className:
                                          "p-2 hover:bg-gray-100 text-gray-500 hover:text-red-500",
                                        children: e.jsx(_n, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              Ms,
                            ),
                          ),
                          X.length === 0 &&
                            e.jsx("div", {
                              className:
                                "text-center text-gray-300 text-[0.833333rem] uppercase tracking-widest py-4",
                              children: Me.noPresets,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "space-y-8 mb-16 relative",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-baseline gap-4 px-2 border-b border-gray-100 pb-4 mb-6",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-5xl font-serif text-gray-100 absolute -top-8 -left-4 -z-10 select-none",
                          children: "05",
                        }),
                        e.jsxs("span", {
                          className:
                            "text-sm font-bold tracking-[0.2em] uppercase text-gray-900 flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "w-1.5 h-1.5 bg-gray-900 rounded-full",
                            }),
                            "稳态与切换",
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => Ue(!0),
                          className:
                            "ml-1 p-0.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors",
                          "aria-label": "稳态与切换帮助",
                          children: e.jsx(xl, { size: 16 }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "space-y-4",
                      children: e.jsx(Da, {
                        children: e.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            e.jsx(Fi, {
                              label: "稳态模式（诊断与保护）",
                              checked: !!V.networkStableModeEnabled,
                              onChange: (Et) =>
                                ne({ ...V, networkStableModeEnabled: !!Et }),
                            }),
                            e.jsx(Fi, {
                              label: "聊天流式优先",
                              checked: !!V.chatPreferStreamEnabled,
                              onChange: (Et) =>
                                ne({ ...V, chatPreferStreamEnabled: !!Et }),
                            }),
                            e.jsx(Fi, {
                              label: "网络失败后切备用 API 站",
                              checked: !!V.backupEndpointAutoSwitchEnabled,
                              onChange: (Et) =>
                                ne({
                                  ...V,
                                  backupEndpointAutoSwitchEnabled: !!Et,
                                }),
                            }),
                            e.jsx("p", {
                              className:
                                "text-xs text-gray-500 leading-relaxed",
                              children:
                                "开关彼此独立。切换到备用站时将使用备用站 Endpoint/Key/模型/温度（未填写项自动回退主站配置）。",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "hidden",
                  "aria-hidden": !0,
                  children: e.jsx(tr, {
                    number: "06",
                    title: "Novel · 生图模型",
                    children: e.jsx(Da, {
                      children: e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsx(ji, {
                            label: "Novel API Key",
                            value: V.novelImageKey ?? "",
                            onChange: (Et) => ne({ ...V, novelImageKey: Et }),
                            placeholder: "用于 AI 生图，留空则无法使用生图功能",
                            type: "password",
                          }),
                          e.jsx(ji, {
                            label: "Novel Endpoint（可选）",
                            value: V.novelImageEndpoint ?? "",
                            onChange: (Et) =>
                              ne({ ...V, novelImageEndpoint: Et }),
                            placeholder: "默认使用 Novel 官方，可填自定义代理",
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs text-gray-500 font-serif italic",
                            children:
                              "若出现「Recaptcha token required」报错，说明试用版需验证。请配置可用的 Novel 代理地址，或使用付费订阅。",
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e.jsx(Os, {
              children:
                Ze &&
                e.jsx("div", {
                  className:
                    "absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm",
                  onClick: () => Ue(!1),
                  children: e.jsxs(We.div, {
                    initial: { scale: 0.9, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.9, opacity: 0 },
                    className:
                      "bg-white p-6 w-full max-w-sm shadow-2xl border border-gray-200 rounded-xl max-h-[75vh] overflow-y-auto",
                    onClick: (Et) => Et.stopPropagation(),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-lg font-serif italic text-gray-900",
                            children: "稳态与切换 · 说明",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => Ue(!1),
                            className:
                              "p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors",
                            children: e.jsx(Ts, { size: 16 }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "space-y-4 text-sm text-gray-700 leading-relaxed",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "font-bold text-gray-900 mb-1",
                                children: "稳态模式",
                              }),
                              e.jsx("p", {
                                children:
                                  "开启后，如果 AI 回复失败，日志里会记录更详细的原因，方便找问题。",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children: "对所有用到 AI 的功能都有效。",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "font-bold text-gray-900 mb-1",
                                children: "聊天流式优先",
                              }),
                              e.jsx("p", {
                                children:
                                  '开启后，AI 回复会用"边生成边传输"的方式发送，减少因为等太久导致连接断开的情况。 不会影响回复内容和格式，只是换了一种更稳定的传输方式。',
                              }),
                              e.jsx("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children:
                                  "对聊天、通话、朋友圈、啾音等大部分功能有效。",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "font-bold text-gray-900 mb-1",
                                children: "网络失败后切备用 API 站",
                              }),
                              e.jsx("p", {
                                children:
                                  "主 API 站连不上时，会自动换到你设好的备用站重试。 需要先在上面第 03 节里填好备用站的地址。",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-gray-500 mt-1",
                                children:
                                  "没填备用站信息的话这个开关不会生效。",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "pt-2 border-t border-gray-100",
                            children: e.jsx("p", {
                              className: "text-xs text-gray-500",
                              children:
                                "三个开关互不影响，可以随意搭配。关掉后马上恢复原来的行为。",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            }),
          ],
        }),
      Xl = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.notifications,
              subtitle: "感知系统",
              onBack: () => Ie("main"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx(tr, {
                  number: "01",
                  title: "音频反馈",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(Fi, {
                          label: "开启音效",
                          checked: W,
                          onChange: ue,
                        }),
                        W &&
                          e.jsxs("div", {
                            className:
                              "space-y-6 pt-6 border-t border-gray-100 animate-in fade-in",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center gap-2 min-w-0",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                        children: "点击音效",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 shrink-0",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-[0.833333rem] text-gray-400 uppercase tracking-wider",
                                            children:
                                              G === "default"
                                                ? "DEFAULT"
                                                : "CUSTOM",
                                          }),
                                          e.jsx("input", {
                                            type: "file",
                                            accept: "audio/*",
                                            className: "hidden",
                                            id: "click-sound-upload",
                                            onChange: async (Et) => {
                                              const Ms = Et.target.files[0];
                                              if (Ms) {
                                                const { saveAudio: Us } =
                                                    await Dd(
                                                      async () => {
                                                        const {
                                                          saveAudio: en,
                                                        } =
                                                          await Promise.resolve().then(
                                                            () => Rd,
                                                          );
                                                        return {
                                                          saveAudio: en,
                                                        };
                                                      },
                                                      void 0,
                                                    ),
                                                  bn = `custom_click_${Date.now()}`;
                                                (await Us(bn, Ms), we(bn));
                                              }
                                            },
                                          }),
                                          e.jsx("label", {
                                            htmlFor: "click-sound-upload",
                                            className:
                                              "cursor-pointer p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                            children: e.jsx(Ta, { size: 12 }),
                                          }),
                                          G !== "default" &&
                                            e.jsx("button", {
                                              onClick: () => we("default"),
                                              className:
                                                "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                              children: e.jsx(Pr, { size: 12 }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[0.833333rem] text-gray-400",
                                    children:
                                      "上传后将作为全局点击反馈（无需逐个按钮设置）",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "space-y-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center gap-2 min-w-0",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                      children: "发送音效",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 shrink-0",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[0.833333rem] text-gray-400 uppercase tracking-wider",
                                          children:
                                            re === "default"
                                              ? "DEFAULT"
                                              : "CUSTOM",
                                        }),
                                        e.jsx("input", {
                                          type: "file",
                                          accept: "audio/*",
                                          className: "hidden",
                                          id: "send-sound-upload",
                                          onChange: async (Et) => {
                                            const Ms = Et.target.files[0];
                                            if (Ms) {
                                              const { saveAudio: Us } =
                                                  await Dd(
                                                    async () => {
                                                      const { saveAudio: en } =
                                                        await Promise.resolve().then(
                                                          () => Rd,
                                                        );
                                                      return { saveAudio: en };
                                                    },
                                                    void 0,
                                                  ),
                                                bn = `custom_send_${Date.now()}`;
                                              (await Us(bn, Ms), he(bn));
                                            }
                                          },
                                        }),
                                        e.jsx("label", {
                                          htmlFor: "send-sound-upload",
                                          className:
                                            "cursor-pointer p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                          children: e.jsx(Ta, { size: 12 }),
                                        }),
                                        re !== "default" &&
                                          e.jsx("button", {
                                            onClick: () => he("default"),
                                            className:
                                              "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                            children: e.jsx(Pr, { size: 12 }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className: "space-y-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center gap-2 min-w-0",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                      children: "接收音效",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 shrink-0",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[0.833333rem] text-gray-400 uppercase tracking-wider",
                                          children:
                                            ge === "default"
                                              ? "DEFAULT"
                                              : "CUSTOM",
                                        }),
                                        e.jsx("input", {
                                          type: "file",
                                          accept: "audio/*",
                                          className: "hidden",
                                          id: "receive-sound-upload",
                                          onChange: async (Et) => {
                                            const Ms = Et.target.files[0];
                                            if (Ms) {
                                              const { saveAudio: Us } =
                                                  await Dd(
                                                    async () => {
                                                      const { saveAudio: en } =
                                                        await Promise.resolve().then(
                                                          () => Rd,
                                                        );
                                                      return { saveAudio: en };
                                                    },
                                                    void 0,
                                                  ),
                                                bn = `custom_receive_${Date.now()}`;
                                              (await Us(bn, Ms), J(bn));
                                            }
                                          },
                                        }),
                                        e.jsx("label", {
                                          htmlFor: "receive-sound-upload",
                                          className:
                                            "cursor-pointer p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                          children: e.jsx(Ta, { size: 12 }),
                                        }),
                                        ge !== "default" &&
                                          e.jsx("button", {
                                            onClick: () => J("default"),
                                            className:
                                              "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                            children: e.jsx(Pr, { size: 12 }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className: "space-y-2",
                                children: e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center gap-2 min-w-0",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                      children: "角色主动语音来电铃声",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 shrink-0",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[0.833333rem] text-gray-400 uppercase tracking-wider",
                                          children:
                                            Q === "default"
                                              ? "DEFAULT"
                                              : "CUSTOM",
                                        }),
                                        e.jsx("input", {
                                          type: "file",
                                          accept: ".mp3,audio/mpeg,audio/*",
                                          className: "hidden",
                                          id: "blocked-invite-ring-upload",
                                          onChange: async (Et) => {
                                            var en;
                                            const Ms =
                                              (en = Et.target.files) == null
                                                ? void 0
                                                : en[0];
                                            if (!Ms) return;
                                            const { saveAudio: Us } = await Dd(
                                                async () => {
                                                  const { saveAudio: wn } =
                                                    await Promise.resolve().then(
                                                      () => Rd,
                                                    );
                                                  return { saveAudio: wn };
                                                },
                                                void 0,
                                              ),
                                              bn = `custom_blocked_invite_ring_${Date.now()}`;
                                            (await Us(bn, Ms), ve(bn));
                                          },
                                        }),
                                        e.jsx("label", {
                                          htmlFor: "blocked-invite-ring-upload",
                                          className:
                                            "cursor-pointer p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                          children: e.jsx(Ta, { size: 12 }),
                                        }),
                                        Q !== "default" &&
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: () => ve("default"),
                                            className:
                                              "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                            children: e.jsx(Pr, { size: 12 }),
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
                  }),
                }),
                e.jsx(tr, {
                  number: "01",
                  title: "交互光效",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(Fi, {
                          label: "点击光效",
                          checked: Ve,
                          onChange: Ae,
                        }),
                        e.jsx("p", {
                          className: "text-[0.833333rem] text-gray-400",
                          children: "开启后，点击按钮/链接会出现轻微光晕反馈",
                        }),
                        Ve &&
                          e.jsxs("div", {
                            className:
                              "space-y-4 pt-6 border-t border-gray-100 animate-in fade-in",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center gap-2 min-w-0",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                    children: "光效图片",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 shrink-0",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[0.833333rem] text-gray-400 uppercase tracking-wider",
                                        children: te ? "CUSTOM" : "DEFAULT",
                                      }),
                                      e.jsx("input", {
                                        type: "file",
                                        accept: "image/png,image/svg+xml",
                                        className: "hidden",
                                        id: "click-glow-asset-upload",
                                        onChange: async (Et) => {
                                          var wn;
                                          const Ms =
                                            (wn = Et.target.files) == null
                                              ? void 0
                                              : wn[0];
                                          if (!Ms) return;
                                          const Us =
                                              Ms.type === "image/svg+xml" ||
                                              String(Ms.name || "")
                                                .toLowerCase()
                                                .endsWith(".svg"),
                                            bn = new FileReader(),
                                            en = await new Promise((Gn) => {
                                              ((bn.onload = () =>
                                                Gn(String(bn.result || ""))),
                                                bn.readAsDataURL(Ms));
                                            });
                                          (Us &&
                                            String(en).startsWith(
                                              "data:image/svg+xml",
                                            ),
                                            Se(String(en || "").slice(0, 2e6)),
                                            (Et.target.value = ""));
                                        },
                                      }),
                                      e.jsx("label", {
                                        htmlFor: "click-glow-asset-upload",
                                        className:
                                          "cursor-pointer p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                        children: e.jsx(Ta, { size: 12 }),
                                      }),
                                      te &&
                                        e.jsx("button", {
                                          onClick: () => Se(""),
                                          className:
                                            "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                          children: e.jsx(Pr, { size: 12 }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-[0.833333rem] text-gray-400",
                                children:
                                  "支持 PNG / SVG，本地保存，打开后鼠标光晕会替换为该图片",
                              }),
                              e.jsxs("div", {
                                className:
                                  "pt-4 border-t border-gray-100 space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-center gap-2 min-w-0",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                        children: "SVG 代码",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 shrink-0",
                                        children: [
                                          e.jsx("button", {
                                            onClick: () => {
                                              const Et = (Qe || "").trim();
                                              if (!Et) return;
                                              const Ms = Et.startsWith("<svg")
                                                  ? Et
                                                  : `<svg>${Et}</svg>`,
                                                bn = `data:image/svg+xml;utf8,${encodeURIComponent(Ms).replace(/%0A/g, "").replace(/%0D/g, "").replace(/%09/g, " ").replace(/%20/g, " ")}`;
                                              Se(String(bn).slice(0, 2e6));
                                            },
                                            className:
                                              "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                            title: "应用 SVG",
                                            "aria-label": "应用 SVG",
                                            children: "应用",
                                          }),
                                          e.jsx("button", {
                                            onClick: () => Ye(""),
                                            className:
                                              "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                            title: "清空",
                                            "aria-label": "清空 SVG",
                                            children: "清空",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("textarea", {
                                    value: Qe,
                                    onChange: (Et) => Ye(Et.target.value),
                                    placeholder: "<svg ...>...</svg>",
                                    className:
                                      "w-full min-h-[110px] bg-gray-50/50 border border-gray-200 text-xs p-3 outline-none font-mono placeholder-gray-300 focus:border-gray-900 focus:bg-white transition-all",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[0.833333rem] text-gray-400",
                                    children:
                                      "粘贴 SVG 源码后点「应用」，会覆盖上面的光效图片",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "02",
                  title: "系统推送",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(Fi, {
                          label: Me.enableSystemNotifications,
                          checked: H,
                          onChange: Y,
                        }),
                        H &&
                          e.jsxs("div", {
                            className:
                              "space-y-4 pt-6 border-t border-gray-100 animate-in fade-in",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[0.833333rem] font-bold tracking-widest text-gray-400 uppercase",
                                children: "推送策略",
                              }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2 min-w-0",
                                children: [
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => ke("last"),
                                    className: nr(
                                      "min-w-0 py-2 px-1 text-[0.833333rem] tracking-widest uppercase border transition-all text-center leading-snug",
                                      Te === "last"
                                        ? "bg-gray-900 text-white border-gray-900"
                                        : "border-gray-200 text-gray-500",
                                    ),
                                    children: "仅最后一条",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => ke("all"),
                                    className: nr(
                                      "min-w-0 py-2 px-1 text-[0.833333rem] tracking-widest uppercase border transition-all text-center leading-snug",
                                      Te === "all"
                                        ? "bg-gray-900 text-white border-gray-900"
                                        : "border-gray-200 text-gray-500",
                                    ),
                                    children: "全部推送",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        e.jsxs(Pa, {
                          onClick: Ut,
                          variant: "secondary",
                          className: "w-full mt-4",
                          children: [
                            e.jsx(B0, { size: 14 }),
                            Me.testNotification,
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "pt-6 mt-6 border-t border-gray-100 space-y-2",
                          children: e.jsxs("div", {
                            className:
                              "flex justify-between items-center gap-3",
                            children: [
                              e.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-serif text-gray-800 italic block",
                                    children: "角色主动语音来电铃声",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[0.833333rem] text-gray-400 mt-1 block",
                                    children:
                                      "上传 MP3，存于本机 IndexedDB；来电时循环播放（需开启「开启音效」）",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 flex-shrink-0",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[0.833333rem] text-gray-400 uppercase tracking-wider",
                                    children:
                                      Q === "default" ? "DEFAULT" : "MP3",
                                  }),
                                  e.jsx("input", {
                                    type: "file",
                                    accept: "audio/mpeg,.mp3,audio/mp3",
                                    className: "hidden",
                                    id: "blocked-invite-ring-upload",
                                    onChange: async (Et) => {
                                      var Gn;
                                      const Ms =
                                        (Gn = Et.target.files) == null
                                          ? void 0
                                          : Gn[0];
                                      if (((Et.target.value = ""), !Ms)) return;
                                      const Us = String(
                                        Ms.name || "",
                                      ).toLowerCase();
                                      if (
                                        !(
                                          Ms.type === "audio/mpeg" ||
                                          Ms.type === "audio/mp3" ||
                                          Us.endsWith(".mp3")
                                        )
                                      ) {
                                        alert("请上传 MP3 文件");
                                        return;
                                      }
                                      const { saveAudio: en } = await Dd(
                                          async () => {
                                            const { saveAudio: Mn } =
                                              await Promise.resolve().then(
                                                () => Rd,
                                              );
                                            return { saveAudio: Mn };
                                          },
                                          void 0,
                                        ),
                                        wn = `blocked_invite_ring_${Date.now()}`;
                                      (await en(wn, Ms), ve(wn));
                                    },
                                  }),
                                  e.jsx("label", {
                                    htmlFor: "blocked-invite-ring-upload",
                                    className:
                                      "cursor-pointer p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                    children: e.jsx(Ta, { size: 12 }),
                                  }),
                                  Q !== "default" &&
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: () => ve("default"),
                                      className:
                                        "p-1.5 border border-gray-200 hover:bg-gray-900 hover:text-white transition-colors",
                                      "aria-label": "恢复默认铃声",
                                      children: e.jsx(Pr, { size: 12 }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "03",
                  title: "后台进程",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className:
                        "flex justify-between items-center gap-3 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "min-w-0 flex-1 pr-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-sm font-serif text-gray-800 italic block",
                              children: "后台保活",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[0.833333rem] text-gray-400 mt-1 flex items-center gap-2 flex-wrap",
                              children: [
                                "允许后台运行",
                                ut &&
                                  e.jsx("span", {
                                    className:
                                      "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "shrink-0",
                          children: e.jsx(Fi, { checked: ht, onChange: Mt }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ef = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.appearance,
              subtitle: "视觉皮层",
              onBack: () => Ie("main"),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsxs(Da, {
                    onClick: () => Ie("appearance-effects"),
                    className:
                      "flex flex-col items-center justify-center gap-4 py-8 hover:bg-gray-50",
                    children: [
                      e.jsx(ao, { size: 24, strokeWidth: 1 }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase",
                        children: "全局效果",
                      }),
                    ],
                  }),
                  e.jsxs(Da, {
                    onClick: () => Ie("appearance-fonts"),
                    className:
                      "flex flex-col items-center justify-center gap-4 py-8 hover:bg-gray-50",
                    children: [
                      e.jsx(Al, { size: 24, strokeWidth: 1 }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase",
                        children: "排版",
                      }),
                    ],
                  }),
                  e.jsxs(Da, {
                    onClick: () => Ie("appearance-apps"),
                    className:
                      "flex flex-col items-center justify-center gap-4 py-8 hover:bg-gray-50",
                    children: [
                      e.jsx(tw, { size: 24, strokeWidth: 1 }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase",
                        children: "应用布局",
                      }),
                    ],
                  }),
                  e.jsxs(Da, {
                    onClick: () => Ie("appearance-wallpaper"),
                    className:
                      "flex flex-col items-center justify-center gap-4 py-8 hover:bg-gray-50",
                    children: [
                      e.jsx(Za, { size: 24, strokeWidth: 1 }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase",
                        children: "壁纸",
                      }),
                    ],
                  }),
                  e.jsxs(Da, {
                    onClick: () => Ie("appearance-system"),
                    className:
                      "flex flex-col items-center justify-center gap-4 py-8 hover:bg-gray-50",
                    children: [
                      e.jsx(BE, { size: 24, strokeWidth: 1 }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase",
                        children: "系统界面",
                      }),
                    ],
                  }),
                  e.jsxs(Da, {
                    onClick: () => Ie("appearance-colors"),
                    className:
                      "flex flex-col items-center justify-center gap-4 py-8 hover:bg-gray-50",
                    children: [
                      e.jsx(_o, { size: 24, strokeWidth: 1 }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase",
                        children: "主题色",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      nl = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.globalEffects,
              subtitle: "视觉皮层",
              onBack: () => Ie("appearance"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx(tr, {
                  number: "01",
                  title: Me.weatherEffects,
                  children: e.jsx("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: ["none", "snow", "rain"].map((Et) =>
                      e.jsx(
                        "button",
                        {
                          onClick: () => F(Et),
                          className: nr(
                            "py-4 border text-[0.833333rem] tracking-widest uppercase transition-all",
                            B === Et
                              ? "bg-gray-900 text-white border-gray-900"
                              : "bg-white border-gray-200 text-gray-500 hover:border-gray-900",
                          ),
                          children: Et,
                        },
                        Et,
                      ),
                    ),
                  }),
                }),
                e.jsx(tr, {
                  number: "02",
                  title: Me.customCSS,
                  children: e.jsx(Da, {
                    className: "p-0 overflow-hidden",
                    children: e.jsx("textarea", {
                      value: D,
                      onChange: (Et) => $(Et.target.value),
                      className:
                        "w-full h-64 bg-[#F5F5F5] text-gray-600 text-[0.916667rem] font-mono p-6 resize-none outline-none border-none",
                      spellCheck: "false",
                      placeholder: "/* 全局 CSS 覆盖 */",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      Oc = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.fonts,
              subtitle: "视觉皮层",
              onBack: () => Ie("appearance"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx(tr, {
                  number: "01",
                  title: "字体来源",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(ji, {
                          label: Me.customFontUrl,
                          value: ii,
                          onChange: Br,
                          placeholder: "https://...",
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between border border-dashed border-gray-300 p-4 hover:bg-gray-50 relative",
                          children: [
                            e.jsx("input", {
                              id: _a.font,
                              type: "file",
                              accept: ".ttf,.otf,.woff,.woff2",
                              onChange: (Et) =>
                                kn(Et, (Ms) => r({ type: "custom", url: Ms })),
                              className: "sr-only",
                            }),
                            e.jsx("label", {
                              htmlFor: _a.font,
                              className: "absolute inset-0 cursor-pointer",
                              "aria-label": "上传字体文件",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[0.833333rem] tracking-widest uppercase text-gray-500 flex items-center gap-2 pointer-events-none relative z-0",
                              children: [
                                e.jsx(Ta, { size: 14 }),
                                " 上传字体文件",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "grid grid-cols-2 gap-3 w-full min-w-0",
                          children: [
                            e.jsx(Pa, {
                              onClick: fa,
                              className: "min-w-0 w-full px-4 sm:px-6",
                              children: Me.apply,
                            }),
                            e.jsx(Pa, {
                              onClick: () => r({ type: "default" }),
                              variant: "secondary",
                              className: "min-w-0 w-full px-4 sm:px-6",
                              children: Me.resetFont,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "02",
                  title: Me.fontSize,
                  children: e.jsxs(Da, {
                    children: [
                      e.jsx(fc, {
                        value: b,
                        min: 12,
                        max: 24,
                        step: 1,
                        onChange: (Et) => N(parseInt(Et)),
                        label: "根字号 (px) · 全界面按比例",
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 pt-6 border-t border-gray-100 space-y-4",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[0.75rem] font-bold tracking-widest text-gray-400 uppercase",
                            children: "各级文字预览",
                          }),
                          e.jsx("p", {
                            className:
                              "text-4xl font-serif text-gray-900 italic tracking-tight m-0",
                            children: "大标题",
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm font-bold tracking-[0.2em] uppercase text-gray-800 m-0",
                            children: "小标题",
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm text-gray-600 leading-relaxed m-0",
                            children:
                              "正文：拖动滑块时，大标题、小标题与正文会一起缩放（本机界面与多数应用内排版均跟随根字号）。聊天 App 的字体与布局不受此处影响，请在聊天内「我的 → 美化」中单独设置主字体。",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(tr, {
                  number: "03",
                  title: Me.fontPresets,
                  children: e.jsxs(Da, {
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-col gap-3 sm:flex-row sm:items-end mb-6 min-w-0",
                        children: [
                          e.jsx("input", {
                            type: "text",
                            value: Yt,
                            onChange: (Et) => de(Et.target.value),
                            placeholder: Me.newPreset,
                            className:
                              "min-w-0 w-full sm:flex-1 bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif placeholder-gray-300 focus:border-gray-900 transition-colors",
                          }),
                          e.jsx(Pa, {
                            onClick: yn,
                            className: "w-full shrink-0 px-4 sm:w-auto",
                            children: Me.saveFontPreset,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2 min-w-0",
                        children: [
                          w.map((Et, Ms) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center gap-2 justify-between p-3 border border-gray-100 hover:border-gray-300 transition-colors min-w-0",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-sm italic min-w-0 flex-1 truncate",
                                    title: Et.name,
                                    children: Et.name,
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-2 shrink-0",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => Bn(Et),
                                        className:
                                          "p-2 hover:bg-gray-100 text-gray-500",
                                        "aria-label": "读取预设",
                                        children: e.jsx(Pr, { size: 14 }),
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => va(Ms),
                                        className:
                                          "p-2 hover:bg-gray-100 text-gray-500 hover:text-red-500",
                                        "aria-label": "删除预设",
                                        children: e.jsx(_n, { size: 14 }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              `font-preset-${Ms}-${Et.name}`,
                            ),
                          ),
                          w.length === 0 &&
                            e.jsx("div", {
                              className:
                                "text-center text-gray-300 text-[0.833333rem] uppercase tracking-widest py-4",
                              children: Me.noPresets,
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
      kd = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.appCustomization,
              subtitle: "视觉皮层",
              onBack: () => Ie("appearance"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx("div", {
                  className: "grid grid-cols-4 gap-4 mb-8",
                  children: c.map((Et) => {
                    var Ms;
                    return e.jsxs(
                      "button",
                      {
                        onClick: () => {
                          Fr(Et.id);
                          const Us = i[Et.id] || {};
                          (Oa(Us.name || Et.name),
                            mi(Us.iconUrl || ""),
                            pi(Us.removeRounded || !1));
                        },
                        className: nr(
                          "flex flex-col items-center gap-2 p-2 transition-all border",
                          Ya === Et.id
                            ? "border-gray-900 bg-gray-50"
                            : "border-transparent hover:bg-white",
                        ),
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 bg-white border border-gray-200 flex items-center justify-center overflow-hidden",
                            children:
                              (Ms = i[Et.id]) != null && Ms.iconUrl
                                ? e.jsx("img", {
                                    src: i[Et.id].iconUrl,
                                    alt: Et.name,
                                    className: "w-full h-full object-cover",
                                  })
                                : e.jsx(Et.icon, {
                                    size: 24,
                                    className: "text-gray-900",
                                    strokeWidth: 1.5,
                                  }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-[0.75rem] text-center truncate w-full font-serif",
                            children: Et.name,
                          }),
                        ],
                      },
                      Et.id,
                    );
                  }),
                }),
                e.jsx(tr, {
                  number: "01",
                  title: "全局样式",
                  children: e.jsxs(Da, {
                    children: [
                      e.jsxs("div", {
                        className: "mb-8 pb-8 border-b border-gray-100",
                        children: [
                          e.jsx(Fi, {
                            label: "锁定桌面布局",
                            checked: !!i.lockDesktopLayout,
                            onChange: (Et) =>
                              o({ ...i, lockDesktopLayout: Et }),
                          }),
                          e.jsx("p", {
                            className:
                              "text-[0.833333rem] text-gray-400 mt-3 leading-relaxed",
                            children:
                              "开启后，主屏幕与程序坞上的应用图标与小组件不可拖动排序；关闭后可自由移动。",
                          }),
                        ],
                      }),
                      e.jsx(fc, {
                        label: "图标圆角",
                        value:
                          i.globalBorderRadius !== void 0
                            ? i.globalBorderRadius
                            : 50,
                        min: 0,
                        max: 50,
                        step: 1,
                        onChange: (Et) =>
                          o({ ...i, globalBorderRadius: parseInt(Et) }),
                      }),
                      e.jsx(fc, {
                        label: "图标大小",
                        value:
                          i.globalIconSize !== void 0 ? i.globalIconSize : 62,
                        min: 40,
                        max: 88,
                        step: 2,
                        onChange: (Et) =>
                          o({ ...i, globalIconSize: parseInt(Et) }),
                      }),
                    ],
                  }),
                }),
                Ya &&
                  e.jsx(tr, {
                    number: "02",
                    title: "编辑应用",
                    children: e.jsx(Da, {
                      children: e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsx(ji, {
                            label: Me.appName,
                            value: kr,
                            onChange: Oa,
                          }),
                          e.jsx(ji, {
                            label: Me.iconUrl,
                            value: ur,
                            onChange: mi,
                            placeholder: "https://...",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between border border-dashed border-gray-300 p-4 hover:bg-gray-50 relative",
                            children: [
                              e.jsx("input", {
                                id: _a.appIcon,
                                type: "file",
                                accept: "image/*",
                                onChange: (Et) =>
                                  kn(Et, mi, { compressImageBeforeUse: !0 }),
                                className: "sr-only",
                              }),
                              e.jsx("label", {
                                htmlFor: _a.appIcon,
                                className: "absolute inset-0 cursor-pointer",
                                "aria-label": "上传应用图标",
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-[0.833333rem] tracking-widest uppercase text-gray-500 flex items-center gap-2 pointer-events-none relative z-0",
                                children: [
                                  e.jsx(Ta, { size: 14 }),
                                  " 上传图标",
                                ],
                              }),
                            ],
                          }),
                          e.jsx(Pa, {
                            onClick: Fa,
                            className: "w-full",
                            children: Me.apply,
                          }),
                        ],
                      }),
                    }),
                  }),
                e.jsx("div", {
                  className: "mt-8",
                  children: e.jsx("button", {
                    onClick: async () => {
                      window.confirm("确定要恢复初始布局吗？") &&
                        (await S5(), window.location.reload());
                    },
                    className:
                      "w-full py-4 border border-red-200 text-red-500 text-[0.833333rem] tracking-widest uppercase hover:bg-red-50 transition-colors",
                    children: "重置布局",
                  }),
                }),
              ],
            }),
          ],
        }),
      tf = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.wallpaper,
              subtitle: "视觉皮层",
              onBack: () => Ie("appearance"),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: e.jsx(tr, {
                number: "01",
                title: "背景",
                children: e.jsx(Da, {
                  children: e.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      e.jsx(ji, {
                        label: Me.wallpaperUrl,
                        value: kt,
                        onChange: Tt,
                        placeholder: "https://...",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between border border-dashed border-gray-300 p-4 hover:bg-gray-50 relative",
                        children: [
                          e.jsx("input", {
                            id: _a.wallpaper,
                            type: "file",
                            accept: "image/*",
                            onChange: (Et) =>
                              kn(Et, (Ms) => u(Ms), {
                                compressImageBeforeUse: !0,
                              }),
                            className: "sr-only",
                          }),
                          e.jsx("label", {
                            htmlFor: _a.wallpaper,
                            className: "absolute inset-0 cursor-pointer",
                            "aria-label": "上传壁纸图片",
                          }),
                          e.jsxs("span", {
                            className:
                              "text-[0.833333rem] tracking-widest uppercase text-gray-500 flex items-center gap-2 pointer-events-none relative z-0",
                            children: [e.jsx(Ta, { size: 14 }), " 上传图片"],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-3 w-full min-w-0",
                        children: [
                          e.jsx(Pa, {
                            onClick: gr,
                            className: "min-w-0 w-full px-4 sm:px-6",
                            children: Me.apply,
                          }),
                          e.jsx(Pa, {
                            onClick: () => u(""),
                            variant: "secondary",
                            className: "min-w-0 w-full px-4 sm:px-6",
                            children: Me.resetWallpaper,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      Sd = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.systemUI,
              subtitle: "视觉皮层",
              onBack: () => Ie("appearance"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx(tr, {
                  number: "01",
                  title: "显示元素",
                  children: e.jsx(Da, {
                    children: e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        e.jsx(Fi, {
                          label: Me.showPhoneCase,
                          checked: A,
                          onChange: k,
                        }),
                        e.jsx(Fi, {
                          label: Me.showStatusBar,
                          checked: f,
                          onChange: p,
                        }),
                        e.jsx(Fi, {
                          label: Me.showHomeIndicator,
                          checked: m,
                          onChange: h,
                        }),
                        e.jsx(Fi, {
                          label: Me.showDynamicIsland,
                          checked: g,
                          onChange: x,
                        }),
                        e.jsx(Fi, {
                          label: Me.showDock,
                          checked: I,
                          onChange: L,
                        }),
                      ],
                    }),
                  }),
                }),
                A &&
                  e.jsx(tr, {
                    number: "02",
                    title: "外壳定制",
                    children: e.jsx(Da, {
                      children: e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex justify-between items-center gap-3 min-w-0",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                                children: "外壳颜色",
                              }),
                              e.jsx("input", {
                                type: "color",
                                value: C,
                                onChange: (Et) => M(Et.target.value),
                                className:
                                  "h-8 w-8 shrink-0 rounded-full overflow-hidden cursor-pointer border border-gray-200 p-0",
                              }),
                            ],
                          }),
                          e.jsx(fc, {
                            label: "边框宽度",
                            value: E,
                            min: 0,
                            max: 20,
                            step: 1,
                            onChange: S,
                          }),
                          e.jsx(fc, {
                            label: "设备宽度",
                            value: (j == null ? void 0 : j.width) || 393,
                            min: 300,
                            max: 600,
                            step: 1,
                            onChange: (Et) => T({ ...j, width: parseInt(Et) }),
                          }),
                          e.jsx(fc, {
                            label: "设备高度",
                            value: (j == null ? void 0 : j.height) || 852,
                            min: 600,
                            max: 1e3,
                            step: 1,
                            onChange: (Et) => T({ ...j, height: parseInt(Et) }),
                          }),
                          e.jsx("div", {
                            className: "pt-2",
                            children: e.jsx("button", {
                              onClick: () => {
                                (T({ width: 393, height: 852 }),
                                  S(6),
                                  M("#ffffff"));
                              },
                              className:
                                "text-[0.833333rem] tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors",
                              children: "恢复默认尺寸",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                e.jsx(tr, {
                  number: A ? "03" : "02",
                  title: "模糊样式",
                  children: e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      e.jsx("button", {
                        onClick: () => z("glass"),
                        className: nr(
                          "py-4 border text-[0.833333rem] tracking-widest uppercase transition-all",
                          P === "glass"
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white border-gray-200 text-gray-500 hover:border-gray-900",
                        ),
                        children: "毛玻璃",
                      }),
                      e.jsx("button", {
                        onClick: () => z("blur"),
                        className: nr(
                          "py-4 border text-[0.833333rem] tracking-widest uppercase transition-all",
                          P === "blur"
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white border-gray-200 text-gray-500 hover:border-gray-900",
                        ),
                        children: "强模糊",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      sf = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.colors,
              subtitle: "视觉皮层",
              onBack: () => Ie("appearance"),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: e.jsx(tr, {
                number: "01",
                title: "主题色板",
                children: e.jsx(Da, {
                  children: e.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-center gap-3 min-w-0",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                            children: Me.statusBarColor,
                          }),
                          e.jsx("input", {
                            type: "color",
                            value: y.statusBar,
                            onChange: (Et) =>
                              v({ ...y, statusBar: Et.target.value }),
                            className:
                              "h-8 w-8 shrink-0 rounded-full overflow-hidden cursor-pointer border border-gray-200 p-0",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-center gap-3 min-w-0",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                            children: Me.appIconColor,
                          }),
                          e.jsx("input", {
                            type: "color",
                            value: y.appIcon,
                            onChange: (Et) =>
                              v({ ...y, appIcon: Et.target.value }),
                            className:
                              "h-8 w-8 shrink-0 rounded-full overflow-hidden cursor-pointer border border-gray-200 p-0",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-center gap-3 min-w-0",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-sm font-serif text-gray-800 italic min-w-0 flex-1 pr-2",
                            children: Me.appNameColor,
                          }),
                          e.jsx("input", {
                            type: "color",
                            value: y.appName,
                            onChange: (Et) =>
                              v({ ...y, appName: Et.target.value }),
                            className:
                              "h-8 w-8 shrink-0 rounded-full overflow-hidden cursor-pointer border border-gray-200 p-0",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      _d = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.voiceSettings,
              subtitle: "声带",
              onBack: () => Ie("main"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsx(tr, {
                  number: "01",
                  title: Me.provider,
                  children: e.jsx(Da, {
                    children: e.jsx(Ly, {
                      label: Me.service,
                      value: xe.provider,
                      options: ["elevenlabs", "minimax"],
                      onChange: (Et) => ye({ ...xe, provider: Et }),
                    }),
                  }),
                }),
                e.jsx(tr, {
                  number: "02",
                  title: "配置",
                  children: e.jsx(Da, {
                    children:
                      xe.provider === "elevenlabs"
                        ? e.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              e.jsx(ji, {
                                label: Me.apiKey,
                                value: xe.elevenlabs.key,
                                onChange: (Et) =>
                                  ye({
                                    ...xe,
                                    elevenlabs: { ...xe.elevenlabs, key: Et },
                                  }),
                                type: "password",
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex flex-col gap-3 sm:flex-row sm:items-end pt-4 min-w-0",
                                children: [
                                  e.jsx("input", {
                                    type: "text",
                                    value: Ft,
                                    onChange: (Et) => es(Et.target.value),
                                    placeholder: "预设名称",
                                    className:
                                      "min-w-0 w-full sm:flex-1 bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif placeholder-gray-300 focus:border-gray-900 transition-colors",
                                  }),
                                  e.jsx(Pa, {
                                    onClick: () => {
                                      if (!Ft) return;
                                      const Et = [
                                        ...(xe.presets || []),
                                        { name: Ft, config: xe.elevenlabs },
                                      ];
                                      (ye({ ...xe, presets: Et }), es(""));
                                    },
                                    className: "w-full shrink-0 px-4 sm:w-auto",
                                    children: Me.save,
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "space-y-2 min-w-0",
                                children: (xe.presets || []).map((Et, Ms) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-2 justify-between p-3 border border-gray-100 hover:border-gray-300 transition-colors min-w-0",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-serif text-sm italic min-w-0 flex-1 truncate",
                                          title: Et.name,
                                          children: Et.name,
                                        }),
                                        e.jsxs("div", {
                                          className: "flex gap-2 shrink-0",
                                          children: [
                                            e.jsx("button", {
                                              onClick: () =>
                                                ye({
                                                  ...xe,
                                                  elevenlabs: Et.config,
                                                }),
                                              className:
                                                "p-2 hover:bg-gray-100 text-gray-500",
                                              children: e.jsx(Pr, { size: 14 }),
                                            }),
                                            e.jsx("button", {
                                              onClick: () => {
                                                const Us = [...xe.presets];
                                                (Us.splice(Ms, 1),
                                                  ye({ ...xe, presets: Us }));
                                              },
                                              className:
                                                "p-2 hover:bg-gray-100 text-gray-500 hover:text-red-500",
                                              children: e.jsx(_n, { size: 14 }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    Ms,
                                  ),
                                ),
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              e.jsx(ji, {
                                label: "组 ID",
                                value: xe.minimax.groupId,
                                onChange: (Et) =>
                                  ye({
                                    ...xe,
                                    minimax: { ...xe.minimax, groupId: Et },
                                  }),
                                placeholder: "Minimax 组 ID",
                              }),
                              e.jsx(ji, {
                                label: Me.apiKey,
                                value: xe.minimax.apiKey,
                                onChange: (Et) =>
                                  ye({
                                    ...xe,
                                    minimax: { ...xe.minimax, apiKey: Et },
                                  }),
                                type: "password",
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex flex-col gap-3 sm:flex-row sm:items-end pt-4 min-w-0",
                                children: [
                                  e.jsx("input", {
                                    type: "text",
                                    value: Ft,
                                    onChange: (Et) => es(Et.target.value),
                                    placeholder: "预设名称",
                                    className:
                                      "min-w-0 w-full sm:flex-1 bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif placeholder-gray-300 focus:border-gray-900 transition-colors",
                                  }),
                                  e.jsx(Pa, {
                                    onClick: () => {
                                      if (!Ft) return;
                                      const Et = [
                                        ...(xe.presets || []),
                                        { name: Ft, config: xe.minimax },
                                      ];
                                      (ye({ ...xe, presets: Et }), es(""));
                                    },
                                    className: "w-full shrink-0 px-4 sm:w-auto",
                                    children: Me.save,
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "space-y-2 min-w-0",
                                children: (xe.presets || []).map((Et, Ms) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-2 justify-between p-3 border border-gray-100 hover:border-gray-300 transition-colors min-w-0",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-serif text-sm italic min-w-0 flex-1 truncate",
                                          title: Et.name,
                                          children: Et.name,
                                        }),
                                        e.jsxs("div", {
                                          className: "flex gap-2 shrink-0",
                                          children: [
                                            e.jsx("button", {
                                              onClick: () =>
                                                ye({
                                                  ...xe,
                                                  minimax: Et.config,
                                                }),
                                              className:
                                                "p-2 hover:bg-gray-100 text-gray-500",
                                              children: e.jsx(Pr, { size: 14 }),
                                            }),
                                            e.jsx("button", {
                                              onClick: () => {
                                                const Us = [...xe.presets];
                                                (Us.splice(Ms, 1),
                                                  ye({ ...xe, presets: Us }));
                                              },
                                              className:
                                                "p-2 hover:bg-gray-100 text-gray-500 hover:text-red-500",
                                              children: e.jsx(_n, { size: 14 }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    Ms,
                                  ),
                                ),
                              }),
                            ],
                          }),
                  }),
                }),
              ],
            }),
          ],
        }),
      nf = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.dataMgmt,
              subtitle: "记忆库",
              onBack: () => Ie("main"),
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: [
                e.jsxs(tr, {
                  number: "01",
                  title: Me.backupRestore,
                  children: [
                    e.jsxs(Da, {
                      className: "text-center py-10",
                      children: [
                        e.jsx(Wl, {
                          size: 32,
                          className: "mx-auto text-gray-300 mb-4",
                          strokeWidth: 1,
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm text-gray-500 mb-8 font-serif italic",
                          children: Me.resetDesc,
                        }),
                        e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsxs(Pa, {
                              onClick: () => {
                                (is(Ro()), it(!0));
                              },
                              disabled: os,
                              className: "w-full",
                              children: [
                                e.jsx(Ta, { size: 14 }),
                                " 全量导出（先选范围）",
                              ],
                            }),
                            e.jsxs(Pa, {
                              onClick: ha,
                              loading: os,
                              variant: "secondary",
                              className: "w-full",
                              children: [
                                e.jsx(tw, { size: 14 }),
                                " 导出桌面预设",
                              ],
                            }),
                            e.jsxs("div", {
                              className: "w-full",
                              children: [
                                e.jsx("input", {
                                  id: _a.backupImport,
                                  type: "file",
                                  accept:
                                    ".json,.zip,application/json,application/zip,application/x-zip-compressed",
                                  onChange: ar,
                                  className: "sr-only",
                                }),
                                e.jsxs("label", {
                                  htmlFor: _a.backupImport,
                                  className: nr(
                                    "px-8 py-4 text-[0.833333rem] tracking-[0.2em] font-bold uppercase transition-all active:scale-95 flex items-center justify-center gap-3 w-full cursor-pointer select-none",
                                    "border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900",
                                  ),
                                  children: [
                                    e.jsx(Ta, {
                                      size: 14,
                                      className: "rotate-180",
                                    }),
                                    " ",
                                    Me.import,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(Da, {
                      className: "mt-4 p-6 text-left",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3 mb-4",
                          children: [
                            e.jsx(ao, {
                              size: 22,
                              className: "text-gray-400 shrink-0 mt-0.5",
                              strokeWidth: 1.25,
                            }),
                            e.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                e.jsx("h4", {
                                  className:
                                    "font-serif italic text-lg text-gray-900",
                                  children: "GitHub 云备份",
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-xs text-gray-500 mt-1.5 leading-relaxed",
                                  children: [
                                    "把备份存到你自己的 GitHub 私人仓库；不懂代码也没关系，打开后先有",
                                    e.jsx("strong", {
                                      children: "超详细图文教程",
                                    }),
                                    "，一步一步照着点即可。",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(Pa, {
                          variant: "secondary",
                          className: "w-full",
                          onClick: () => {
                            (Rt(Ro()), qe(!0));
                          },
                          disabled: !Qn,
                          children: [
                            e.jsx(ui, { size: 14 }),
                            " 打开云备份与教程",
                          ],
                        }),
                        !Qn &&
                          e.jsx("p", {
                            className:
                              "text-[0.65rem] text-gray-400 mt-2 text-center",
                            children: "正在加载已保存的配置…",
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsx(tr, {
                  number: "02",
                  title: "设备信息",
                  children: e.jsxs(Da, {
                    className: "text-center",
                    children: [
                      e.jsxs("div", {
                        className: "mb-6",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[0.833333rem] tracking-widest uppercase text-gray-400 mb-2",
                            children: "系统版本",
                          }),
                          e.jsxs("div", {
                            className:
                              "font-serif italic text-2xl text-gray-900 mb-4",
                            children: ["v", F1],
                          }),
                          e.jsx(Pa, {
                            loading: vs,
                            disabled: vs,
                            variant: "secondary",
                            className: "w-full",
                            onClick: async () => {
                              ts(!0);
                              try {
                                await IM();
                              } catch {
                                ts(!1);
                              }
                            },
                            children: "检查并更新到最新",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[0.65rem] text-gray-400 mt-2 leading-relaxed",
                            children:
                              "会拉取最新 Service Worker、清空本站点离线缓存并强制重新打开当前页。若 CDN 稍慢，可隔几秒再点一次。",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-[0.833333rem] tracking-widest uppercase text-gray-400 mb-2",
                        children: "设备 ID",
                      }),
                      e.jsx("div", {
                        className:
                          "font-mono text-xs bg-gray-50 p-3 border border-gray-100 break-all cursor-pointer hover:bg-gray-100 transition-colors",
                        onClick: () => {
                          (navigator.clipboard.writeText(Ee), alert("已复制"));
                        },
                        children: Ee || "未知",
                      }),
                    ],
                  }),
                }),
                e.jsx(tr, {
                  number: "03",
                  title: "危险区域",
                  children: e.jsx(Da, {
                    className: "border-red-100",
                    children: e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsx("button", {
                          onClick: async () => {
                            window.confirm("确定要重置主屏幕布局吗？") &&
                              (await S5(), window.location.reload());
                          },
                          className:
                            "w-full py-4 border border-red-200 text-red-500 text-[0.833333rem] tracking-widest uppercase hover:bg-red-50 transition-colors",
                          children: "重置主屏幕布局",
                        }),
                        e.jsx("button", {
                          onClick: Mr,
                          className:
                            "w-full py-4 border border-red-200 text-red-500 text-[0.833333rem] tracking-widest uppercase hover:bg-red-50 transition-colors",
                          children: "重置聊天主题",
                        }),
                        e.jsx("button", {
                          onClick: Ei,
                          disabled: Zn,
                          className: nr(
                            "w-full py-4 border border-red-200 text-red-500 text-[0.833333rem] tracking-widest uppercase hover:bg-red-50 transition-colors",
                            Zn && "opacity-60 cursor-not-allowed",
                          ),
                          children: "重置遇见样式",
                        }),
                        e.jsx("button", {
                          onClick: () => Jt(!0),
                          className:
                            "w-full py-4 bg-red-600 text-white text-[0.833333rem] tracking-widest uppercase hover:bg-red-700 transition-colors",
                          children: Me.resetBtn,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      Ad = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: Me.language,
              subtitle: "语言中心",
              onBack: () => Ie("main"),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: e.jsx("div", {
                className: "space-y-2",
                children: [
                  { code: "zh", label: "中文 (Chinese)" },
                  { code: "en", label: "English" },
                  { code: "ko", label: "한국어 (Korean)" },
                  { code: "ja", label: "日本語 (Japanese)" },
                ].map((Et) =>
                  e.jsxs(
                    "button",
                    {
                      onClick: () => n(Et.code),
                      className: nr(
                        "w-full min-w-0 p-6 border flex items-center justify-between gap-3 transition-all group text-left",
                        s === Et.code
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white border-gray-100 hover:border-gray-300",
                      ),
                      children: [
                        e.jsx("span", {
                          className:
                            "min-w-0 flex-1 break-words font-serif italic text-lg",
                          children: Et.label,
                        }),
                        s === Et.code &&
                          e.jsx(On, { size: 16, className: "shrink-0" }),
                      ],
                    },
                    Et.code,
                  ),
                ),
              }),
            }),
          ],
        }),
      vi = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: "免责声明",
              subtitle: "法律与使用须知",
              onBack: () => Ie("main"),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: s6.map(({ number: Et, title: Ms, paragraphs: Us }) =>
                e.jsx(
                  tr,
                  {
                    number: Et,
                    title: Ms,
                    children: e.jsx(Da, {
                      children: Us.map((bn, en) =>
                        e.jsx(
                          "p",
                          {
                            className: nr(
                              "text-sm text-gray-700 font-serif leading-relaxed",
                              en < Us.length - 1 && "mb-4",
                            ),
                            children: bn,
                          },
                          en,
                        ),
                      ),
                    }),
                  },
                  Et,
                ),
              ),
            }),
          ],
        }),
      Cd = () =>
        e.jsxs(We.div, {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: "访问与账号",
              subtitle: "门禁与访问",
              onBack: () => Ie("main"),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto no-scrollbar p-6 pb-20",
              children: e.jsx(tr, {
                number: "08",
                title: "在此设备上注销访问",
                children: e.jsx(Da, {
                  children: e.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-sm text-gray-600 font-serif italic leading-relaxed",
                        children:
                          "在此设备上注销访问后，需重新申请才能进入。适用于换机或不再使用本设备时使用。",
                      }),
                      e.jsx(Pa, {
                        loading: vt,
                        variant: "primary",
                        onClick: async () => {
                          if (
                            window.confirm(
                              "确定要在此设备上注销访问吗？注销后需重新申请才能进入。",
                            )
                          ) {
                            Oe(!0);
                            try {
                              (await me.revokeCurrentDevice())
                                ? window.location.reload()
                                : alert("注销失败，请稍后重试");
                            } finally {
                              Oe(!1);
                            }
                          }
                        },
                        children: "在此设备上注销访问",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
    return e.jsxs("div", {
      className:
        "h-full overflow-hidden relative bg-[#FDFBF7] text-gray-900 font-sans",
      children: [
        e.jsxs(Os, {
          initial: !1,
          custom: He === "main" ? -1 : 1,
          children: [
            He === "main" && po(),
            He === "api" && Xu(),
            He === "api_logs" &&
              e.jsxs(We.div, {
                initial: { x: "100%" },
                animate: { x: 0 },
                exit: { x: "100%" },
                className:
                  "flex flex-col h-full bg-[#FDFBF7] absolute inset-0 z-30",
                children: [
                  e.jsx(hi, {
                    showStatusBar: f,
                    showPhoneCase: A,
                    title: "API 日志",
                    subtitle: "系统日志",
                    onBack: () => Ie("main"),
                    titleExtra: e.jsx("button", {