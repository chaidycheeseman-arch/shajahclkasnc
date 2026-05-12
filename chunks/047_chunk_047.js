                                    "w-full px-4 py-4 bg-gray-50 rounded-2xl text-lg font-bold text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all",
                                  placeholder: "例如：家人、工作...",
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
                                      style: { backgroundColor: Xe },
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
                                            children: "点击选择颜色",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx("input", {
                                      type: "color",
                                      value: Xe,
                                      onChange: (Le) => ht(Le.target.value),
                                      className:
                                        "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: wt,
                              className:
                                "w-full py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl font-bold text-sm hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 mt-4 flex items-center justify-center gap-2",
                              children: [
                                e.jsx(ea, { size: 16 }),
                                e.jsx("span", { children: "立即创建" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            P &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
                onClick: () => z(!1),
                children: e.jsxs("div", {
                  className:
                    "w-full max-w-sm min-w-0 bg-white p-2 pb-4 sm:pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rotate-[1deg] transition-transform duration-500 hover:rotate-0 relative [container-type:inline-size]",
                  onClick: (Le) => Le.stopPropagation(),
                  children: [
                    e.jsx("button", {
                      onClick: () => z(!1),
                      className:
                        "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                      "aria-label": "关闭",
                      children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
                    }),
                    e.jsxs("div", {
                      className:
                        "border border-[#e0e0e0] p-4 sm:p-6 relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-0 right-0 w-32 h-32 bg-[#fdfbf7] rounded-bl-full -z-10",
                        }),
                        e.jsxs("div", {
                          className: "mb-6 sm:mb-8",
                          children: [
                            e.jsx("h3", {
                              className:
                                "font-serif text-[clamp(1.125rem,6cqw,1.5rem)] text-[#2c2c2c] tracking-tight italic leading-tight",
                              children: "添加联系人",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[clamp(0.5625rem,3.2cqw,0.625rem)] text-[#9e9e9e] uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1",
                              children: "新建或导入",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-3 sm:space-y-4",
                          children: [
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => {
                                (z(!1), $(!0));
                              },
                              className:
                                "w-full min-w-0 flex items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4 border border-[#2c2c2c] group hover:bg-[#2c2c2c] transition-colors duration-300",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 sm:gap-4 min-w-0 flex-1",
                                  children: [
                                    e.jsx(wu, {
                                      strokeWidth: 1.5,
                                      className:
                                        "shrink-0 w-[clamp(14px,5cqw,18px)] h-[clamp(14px,5cqw,18px)] text-[#2c2c2c] group-hover:text-white transition-colors",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "font-serif text-left text-[clamp(0.75rem,4.5cqw,0.875rem)] leading-snug text-[#2c2c2c] group-hover:text-white transition-colors min-w-0 line-clamp-2",
                                      children: "新建联系人",
                                    }),
                                  ],
                                }),
                                e.jsx(Kn, {
                                  strokeWidth: 2,
                                  className:
                                    "shrink-0 w-[clamp(12px,3.5cqw,14px)] h-[clamp(12px,3.5cqw,14px)] text-[#9e9e9e] group-hover:text-white transition-colors",
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => {
                                var Le;
                                (z(!1), (Le = O.current) == null || Le.click());
                              },
                              className:
                                "w-full min-w-0 flex items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4 border border-[#2c2c2c] group hover:bg-[#2c2c2c] transition-colors duration-300",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 sm:gap-4 min-w-0 flex-1",
                                  children: [
                                    e.jsx(Ta, {
                                      strokeWidth: 1.5,
                                      className:
                                        "shrink-0 w-[clamp(14px,5cqw,18px)] h-[clamp(14px,5cqw,18px)] text-[#2c2c2c] group-hover:text-white transition-colors",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "font-serif text-left text-[clamp(0.75rem,4.5cqw,0.875rem)] leading-snug text-[#2c2c2c] group-hover:text-white transition-colors min-w-0 line-clamp-2",
                                      children: "导入联系人",
                                    }),
                                  ],
                                }),
                                e.jsx(Kn, {
                                  strokeWidth: 2,
                                  className:
                                    "shrink-0 w-[clamp(12px,3.5cqw,14px)] h-[clamp(12px,3.5cqw,14px)] text-[#9e9e9e] group-hover:text-white transition-colors",
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => {
                                (z(!1), Ce([]), ut(!0));
                              },
                              className:
                                "w-full min-w-0 flex items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4 border border-[#2c2c2c] group hover:bg-[#2c2c2c] transition-colors duration-300",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 sm:gap-4 min-w-0 flex-1",
                                  children: [
                                    e.jsx(Vi, {
                                      strokeWidth: 1.5,
                                      className:
                                        "shrink-0 w-[clamp(14px,5cqw,18px)] h-[clamp(14px,5cqw,18px)] text-[#2c2c2c] group-hover:text-white transition-colors",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "font-serif text-left text-[clamp(0.75rem,4.5cqw,0.875rem)] leading-snug text-[#2c2c2c] group-hover:text-white transition-colors min-w-0 line-clamp-2",
                                      children: "新建群聊",
                                    }),
                                  ],
                                }),
                                e.jsx(Kn, {
                                  strokeWidth: 2,
                                  className:
                                    "shrink-0 w-[clamp(12px,3.5cqw,14px)] h-[clamp(12px,3.5cqw,14px)] text-[#9e9e9e] group-hover:text-white transition-colors",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            e.jsx(M$, {
              showSelectModal: Pe,
              setShowSelectModal: ut,
              showNameModal: _t,
              setShowNameModal: Ee,
              showPersonaModal: fe,
              setShowPersonaModal: He,
              selectedIds: Ie,
              setSelectedIds: Ce,
              groupName: Re,
              setGroupName: De,
              userPersona: at,
              setUserPersona: ft,
              userPresets: _,
              contacts: c,
              createGroupChat: f,
              onCreated: n,
            }),
            e.jsx("input", {
              type: "file",
              ref: O,
              accept: ".json",
              onChange: js,
              className: "hidden",
            }),
            D &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4",
                children: e.jsxs(We.div, {
                  initial: { opacity: 0, scale: 0.9, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  className:
                    "relative w-full min-w-0 max-w-md [container-type:inline-size] bg-black rounded-[24px] sm:rounded-[32px] shadow-2xl border border-gray-800 flex flex-col max-h-[65vh] pt-12 sm:pt-16",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => {
                        var Le;
                        return (Le = Z.current) == null ? void 0 : Le.click();
                      },
                      className:
                        "absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 w-[clamp(4.5rem,28cqw,6rem)] h-[clamp(4.5rem,28cqw,6rem)] rounded-full bg-white border-[3px] border-black z-10 flex items-center justify-center overflow-hidden group cursor-pointer shadow-lg",
                      "aria-label": "上传联系人头像",
                      children: [
                        bs.avatar
                          ? e.jsx("img", {
                              src: bs.avatar,
                              alt: "Avatar",
                              className: "w-full h-full object-cover",
                              loading: "lazy",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center bg-gray-100 text-gray-400",
                              children: e.jsx(Ta, { size: 24 }),
                            }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                          children: e.jsx(Ta, {
                            size: 24,
                            className: "text-white",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: Z,
                      accept: "image/*",
                      onChange: cs,
                      className: "hidden",
                    }),
                    e.jsx("button", {
                      onClick: () => $(!1),
                      className:
                        "absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors",
                      children: e.jsx(Ts, { size: 20 }),
                    }),
                    e.jsx("div", {
                      className:
                        "flex-1 overflow-y-auto px-4 sm:px-8 pb-6 sm:pb-8 no-scrollbar min-w-0",
                      children: e.jsxs("div", {
                        className: "flex gap-3 sm:gap-6 min-w-0",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex flex-col gap-6 sm:gap-8 items-center pt-2 w-7 sm:w-8 shrink-0 text-gray-500",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center",
                                title: "名字",
                                children: e.jsx(wu, { size: 14 }),
                              }),
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center",
                                title: "备注",
                                children: e.jsx(Gi, { size: 14 }),
                              }),
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center",
                                title: "分组",
                                children: e.jsx(Ih, { size: 14 }),
                              }),
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center",
                                title: "设定",
                                children: e.jsx(Ai, { size: 14 }),
                              }),
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center",
                                title: "装饰",
                                children: e.jsx(_o, { size: 14 }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "w-[1px] bg-gray-800 h-auto",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex-1 flex flex-col gap-4 sm:gap-5 text-white min-w-0",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "名字",
                                  }),
                                  e.jsx("input", {
                                    type: "text",
                                    value: bs.name,
                                    onChange: (Le) =>
                                      ss({ ...bs, name: Le.target.value }),
                                    className:
                                      "w-full min-w-0 bg-transparent border-b border-gray-700 py-1 text-[clamp(0.8125rem,3.8cqw,0.875rem)] focus:outline-none focus:border-white transition-colors placeholder-gray-700",
                                    placeholder: "输入名字",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "备注",
                                  }),
                                  e.jsx("input", {
                                    type: "text",
                                    value: bs.remark,
                                    onChange: (Le) =>
                                      ss({ ...bs, remark: Le.target.value }),
                                    className:
                                      "w-full min-w-0 bg-transparent border-b border-gray-700 py-1 text-[clamp(0.8125rem,3.8cqw,0.875rem)] focus:outline-none focus:border-white transition-colors placeholder-gray-700",
                                    placeholder: "输入备注",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "性别",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-2 pt-1 min-w-0",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () =>
                                          ss({ ...bs, gender: "female" }),
                                        className: `flex-1 min-w-0 py-1.5 sm:py-2 rounded-lg text-[clamp(0.75rem,3.6cqw,0.875rem)] font-medium transition-all ${bs.gender === "female" ? "bg-white text-black shadow-lg" : "bg-gray-900/50 text-gray-400 border border-gray-800 hover:bg-gray-800"}`,
                                        children: "女",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () =>
                                          ss({ ...bs, gender: "male" }),
                                        className: `flex-1 min-w-0 py-1.5 sm:py-2 rounded-lg text-[clamp(0.75rem,3.6cqw,0.875rem)] font-medium transition-all ${bs.gender === "male" ? "bg-white text-black shadow-lg" : "bg-gray-900/50 text-gray-400 border border-gray-800 hover:bg-gray-800"}`,
                                        children: "男",
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
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "分组",
                                  }),
                                  e.jsx("div", {
                                    className: "flex gap-2",
                                    children: e.jsx("select", {
                                      value: bs.group,
                                      onChange: (Le) =>
                                        ss({
                                          ...bs,
                                          group:
                                            String(Le.target.value || "")
                                              .trim()
                                              .replace(/\s+/g, " ") ||
                                            "默认分组",
                                        }),
                                      className:
                                        "flex-1 min-w-0 bg-transparent border-b border-gray-700 py-1 text-[clamp(0.8125rem,3.8cqw,0.875rem)] focus:outline-none focus:border-white transition-colors text-white [&>option]:text-black",
                                      children: m.map((Le) =>
                                        e.jsx(
                                          "option",
                                          { value: Le, children: Le },
                                          Le,
                                        ),
                                      ),
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-2 mt-2",
                                    children: [
                                      e.jsx("input", {
                                        type: "text",
                                        value: se,
                                        onChange: (Le) => Te(Le.target.value),
                                        placeholder: "新建分组...",
                                        className:
                                          "flex-1 bg-gray-900 rounded px-2 py-1 text-xs border border-gray-800 focus:outline-none focus:border-gray-600",
                                      }),
                                      e.jsx("button", {
                                        onClick: Qt,
                                        disabled: !se.trim(),
                                        className:
                                          "px-2 py-1 bg-white text-black rounded text-xs font-bold hover:bg-gray-200 disabled:opacity-50",
                                        children: e.jsx(ea, { size: 14 }),
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
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "AI 设定",
                                  }),
                                  e.jsx("textarea", {
                                    value: bs.setting,
                                    onChange: (Le) =>
                                      ss({ ...bs, setting: Le.target.value }),
                                    className:
                                      "w-full min-w-0 bg-gray-900/50 border border-gray-800 rounded-lg p-2.5 sm:p-3 text-[clamp(0.6875rem,3.2cqw,0.75rem)] focus:outline-none focus:border-gray-600 transition-colors h-20 resize-none text-gray-300",
                                    placeholder: "描述 AI 的性格、背景等...",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "绑定用户人设",
                                  }),
                                  e.jsxs("select", {
                                    value: bs.boundUserPresetId || "",
                                    onChange: (Le) =>
                                      ss({
                                        ...bs,
                                        boundUserPresetId: Le.target.value,
                                      }),
                                    className:
                                      "w-full min-w-0 bg-transparent border-b border-gray-700 py-1 text-[clamp(0.8125rem,3.8cqw,0.875rem)] focus:outline-none focus:border-white transition-colors text-white [&>option]:text-black",
                                    children: [
                                      e.jsx("option", {
                                        value: "",
                                        children: "默认 (当前用户)",
                                      }),
                                      _.map((Le) =>
                                        e.jsxs(
                                          "option",
                                          {
                                            value: Le.id,
                                            children: [
                                              Le.name,
                                              Le.wechatId
                                                ? ` · ${Le.wechatId}`
                                                : "",
                                            ],
                                          },
                                          Le.id,
                                        ),
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[clamp(0.5625rem,3cqw,0.625rem)] tracking-wider text-gray-500 font-bold",
                                    children: "卡片装饰",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                      e.jsx("input", {
                                        type: "text",
                                        value:
                                          ((Ne = bs.decoration) == null
                                            ? void 0
                                            : Ne.text) || "",
                                        onChange: (Le) =>
                                          ss({
                                            ...bs,
                                            decoration: {
                                              ...bs.decoration,
                                              text: Le.target.value,
                                            },
                                          }),
                                        className:
                                          "flex-1 min-w-0 bg-transparent border-b border-gray-700 py-1 text-[clamp(0.8125rem,3.8cqw,0.875rem)] focus:outline-none focus:border-white transition-colors placeholder-gray-700",
                                        placeholder: "装饰文字",
                                      }),
                                      e.jsxs("div", {
                                        className: "flex gap-2",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "relative w-6 h-6 rounded-full overflow-hidden border border-gray-700",
                                            title: "背景颜色",
                                            children: e.jsx("input", {
                                              type: "color",
                                              value:
                                                ((Je = bs.decoration) == null
                                                  ? void 0
                                                  : Je.color) || "#000000",
                                              onChange: (Le) =>
                                                ss({
                                                  ...bs,
                                                  decoration: {
                                                    ...bs.decoration,
                                                    color: Le.target.value,
                                                  },
                                                }),
                                              className:
                                                "absolute -top-2 -left-2 w-10 h-10 p-0 border-0 cursor-pointer",
                                            }),
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "relative w-6 h-6 rounded-full overflow-hidden border border-gray-700",
                                            title: "字体颜色",
                                            children: e.jsx("input", {
                                              type: "color",
                                              value:
                                                ((St = bs.decoration) == null
                                                  ? void 0
                                                  : St.textColor) || "#ffffff",
                                              onChange: (Le) =>
                                                ss({
                                                  ...bs,
                                                  decoration: {
                                                    ...bs.decoration,
                                                    textColor: Le.target.value,
                                                  },
                                                }),
                                              className:
                                                "absolute -top-2 -left-2 w-10 h-10 p-0 border-0 cursor-pointer",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: Lt,
                                disabled: ve,
                                className:
                                  "mt-2 w-full min-w-0 py-2.5 sm:py-3 px-2 bg-white text-black rounded-xl font-bold text-[clamp(0.8125rem,3.8cqw,0.875rem)] hover:bg-gray-200 transition-colors flex items-center justify-center text-center shadow-lg shadow-white/10",
                                children: ve ? "生成中..." : "创建联系人",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ue &&
              e.jsxs("div", {
                className:
                  "absolute inset-0 z-[60] flex flex-col overflow-hidden bg-[#faf9f6]",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 pointer-events-none opacity-[0.06]",
                    style: {
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    },
                  }),
                  e.jsxs("div", {
                    className:
                      "relative px-5 py-4 pt-14 flex items-center justify-between bg-[#faf9f6]/90 backdrop-blur-md",
                    children: [
                      e.jsx("div", { className: "w-10" }),
                      e.jsxs("div", {
                        className: "text-center leading-none flex-1 pt-2",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center justify-center",
                            children: e.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-white border border-[#e6e0d9] shadow-sm flex items-center justify-center text-[#6b5b55]",
                              children: e.jsx(Gi, { size: 15 }),
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "font-serif italic text-[1.375rem] text-[#2c2c2c] mt-3 tracking-tight",
                            children: "好友申请",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (navigator.vibrate && navigator.vibrate(12),
                            re(!1),
                            ge(null));
                        },
                        className:
                          "w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/5 text-[#b0a8a0] transition-colors",
                        "aria-label": "关闭",
                        title: "关闭",
                        children: e.jsx(Ts, { size: 16 }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "relative flex-1 overflow-y-auto px-5 py-6",
                    children:
                      st.length === 0
                        ? e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center py-20 text-[#9e9e9e]",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-20 h-20 bg-white border border-[#e6e0d9] rounded-full flex items-center justify-center mb-5 shadow-sm",
                                children: e.jsx(Gi, {
                                  size: 26,
                                  className: "opacity-40",
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "font-serif italic text-lg text-[#2c2c2c] mb-1",
                                children: "暂无申请",
                              }),
                              e.jsx("div", {
                                className: "text-xs tracking-wider",
                                children:
                                  "被拉黑的角色若尝试加回，会出现在这里。",
                              }),
                            ],
                          })
                        : e.jsx("div", {
                            className: "space-y-4",
                            children: st.map((Le, _e) => {
                              const yt = (c || []).find(
                                  (is) => is.id === Le.contactId,
                                ),
                                rt =
                                  (yt == null ? void 0 : yt.remark) ||
                                  (yt == null ? void 0 : yt.nickname) ||
                                  (yt == null ? void 0 : yt.name) ||
                                  "未知角色",
                                ze = yt == null ? void 0 : yt.avatar,
                                lt = String(Le.text || "")
                                  .trim()
                                  .slice(0, 90),
                                it = Le.status === "pending",
                                Ht =
                                  _e % 2 === 0
                                    ? "-rotate-[0.6deg]"
                                    : "rotate-[0.6deg]";
                              return e.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => Ft(Le),
                                  className: `w-full text-left bg-white border border-[#e6e0d9] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)] p-5 transition-transform hover:-translate-y-0.5 ${Ht}`,
                                  style: { borderRadius: 24 },
                                  children: e.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-12 h-12 rounded-full overflow-hidden bg-[#f3f1ee] border border-[#efe7de] flex-shrink-0",
                                        children: ze
                                          ? e.jsx("img", {
                                              src: ze,
                                              alt: rt,
                                              className:
                                                "w-full h-full object-cover",
                                            })
                                          : null,
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-start justify-between gap-3",
                                            children: [
                                              e.jsxs("div", {
                                                className: "min-w-0",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "font-serif text-base text-[#2c2c2c] truncate",
                                                    children: rt,
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "mt-1 text-[0.625rem] font-bold tracking-[0.28em] text-[#9e9e9e] uppercase",
                                                    children: it
                                                      ? "PENDING"
                                                      : Le.status === "accepted"
                                                        ? "ACCEPTED"
                                                        : "IGNORED",
                                                  }),
                                                ],
                                              }),
                                              it &&
                                                !Le.viewedAt &&
                                                e.jsx("span", {
                                                  className:
                                                    "mt-1 w-2.5 h-2.5 bg-[#ef5350] rounded-full flex-shrink-0",
                                                }),
                                            ],
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "mt-3 text-sm text-[#4a4a4a] leading-relaxed line-clamp-3 whitespace-pre-wrap break-words",
                                            children: lt || "（无内容）",
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "mt-4 flex items-center justify-between text-[0.625rem] text-[#b0a8a0] tracking-widest uppercase",
                                            children: [
                                              e.jsx("span", {
                                                children: "Tap to open",
                                              }),
                                              e.jsx("span", {
                                                className: "font-mono",
                                                children: Le.createdAt
                                                  ? new Date(
                                                      Le.createdAt,
                                                    ).toLocaleDateString()
                                                  : "",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                Le.id,
                              );
                            }),
                          }),
                  }),
                  $t &&
                    e.jsx("div", {
                      className:
                        "absolute inset-0 z-[70] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6",
                      children: e.jsxs("div", {
                        className:
                          "relative w-full max-w-sm bg-white border border-[#e6e0d9] shadow-[0_45px_120px_-70px_rgba(0,0,0,0.75)]",
                        style: { borderRadius: 28 },
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute -top-2 -left-2 w-full h-full bg-[#fffdf9] border border-[#efe7de] opacity-70 pointer-events-none z-0",
                            style: {
                              borderRadius: 28,
                              transform: "rotate(-0.8deg)",
                            },
                            "aria-hidden": "true",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -bottom-2 -right-2 w-full h-full bg-[#fffdf9] border border-[#efe7de] opacity-60 pointer-events-none z-0",
                            style: {
                              borderRadius: 28,
                              transform: "rotate(0.6deg)",
                            },
                            "aria-hidden": "true",
                          }),
                          e.jsxs("div", {
                            className: "relative z-10 p-6",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-start justify-between gap-4",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-4 min-w-0",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-12 h-12 rounded-full overflow-hidden bg-[#f3f1ee] border border-[#efe7de] flex-shrink-0",
                                        children: (() => {
                                          const Le = (c || []).find(
                                              (rt) => rt.id === $t.contactId,
                                            ),
                                            _e =
                                              (Le == null
                                                ? void 0
                                                : Le.remark) ||
                                              (Le == null
                                                ? void 0
                                                : Le.nickname) ||
                                              (Le == null ? void 0 : Le.name) ||
                                              "未知角色",
                                            yt =
                                              Le == null ? void 0 : Le.avatar;
                                          return yt
                                            ? e.jsx("img", {
                                                src: yt,
                                                alt: _e,
                                                className:
                                                  "w-full h-full object-cover",
                                              })
                                            : null;
                                        })(),
                                      }),
                                      e.jsxs("div", {
                                        className: "min-w-0",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-[0.625rem] font-bold tracking-[0.42em] text-[#b0a8a0]",
                                            children: "好友申请",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "font-serif italic text-xl text-[#2c2c2c] truncate mt-1",
                                            children:
                                              ((Be = (c || []).find(
                                                (Le) => Le.id === $t.contactId,
                                              )) == null
                                                ? void 0
                                                : Be.remark) ||
                                              ((Ke = (c || []).find(
                                                (Le) => Le.id === $t.contactId,
                                              )) == null
                                                ? void 0
                                                : Ke.nickname) ||
                                              ((Nt = (c || []).find(
                                                (Le) => Le.id === $t.contactId,
                                              )) == null
                                                ? void 0
                                                : Nt.name) ||
                                              "未知角色",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => ge(null),
                                    className:
                                      "w-9 h-9 rounded-full hover:bg-black/5 flex items-center justify-center text-[#9e9e9e] transition-colors",
                                    "aria-label": "关闭",
                                    children: e.jsx(Ts, { size: 16 }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "mt-5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[0.625rem] font-bold tracking-[0.42em] text-[#b0a8a0] mb-2",
                                    children: "申请内容",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "bg-[#fbfaf8] border border-[#efe7de] rounded-2xl p-4 text-sm text-[#4a4a4a] leading-relaxed whitespace-pre-wrap break-words",
                                    children:
                                      String($t.text || "").trim() ||
                                      "我想重新加你好友，可以吗？",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          $t.status === "pending"
                            ? e.jsxs("div", {
                                className: "relative z-10 px-6 pb-6 flex gap-3",
                                children: [
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => At($t),
                                    className:
                                      "flex-1 py-3 rounded-2xl bg-[#ffebee] text-[#c62828] font-black text-sm hover:bg-[#ffcdd2] transition-colors border border-[#ffcdd2]",
                                    children: "拒绝",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => es($t),
                                    className:
                                      "flex-1 py-3 rounded-2xl bg-[#2c2c2c] text-white font-bold text-sm hover:bg-black transition-colors",
                                    children: "同意",
                                  }),
                                ],
                              })
                            : e.jsx("div", {
                                className: "px-6 pb-6",
                                children: e.jsx("button", {
                                  type: "button",
                                  onClick: () => ge(null),
                                  className:
                                    "w-full py-3 rounded-2xl bg-[#f3f1ee] text-[#4a4a4a] font-bold text-sm hover:bg-[#ede9e4] transition-colors",
                                  children: "关闭",
                                }),
                              }),
                        ],
                      }),
                    }),
                ],
              }),
            C &&
              !ue &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-[55] bg-black/35 backdrop-blur-sm flex items-center justify-center p-4",
                children: e.jsxs("div", {
                  className:
                    "w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden",
                  children: [
                    e.jsxs("div", {
                      className: "p-5 pb-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between gap-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3 min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0",
                                  children: (() => {
                                    const Le = (c || []).find(
                                        (rt) => rt.id === C.contactId,
                                      ),
                                      _e =
                                        (Le == null ? void 0 : Le.remark) ||
                                        (Le == null ? void 0 : Le.nickname) ||
                                        (Le == null ? void 0 : Le.name) ||
                                        "未知角色",
                                      yt = Le == null ? void 0 : Le.avatar;
                                    return yt
                                      ? e.jsx("img", {
                                          src: yt,
                                          alt: _e,
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : null;
                                  })(),
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-sm font-bold text-gray-900 truncate",
                                      children:
                                        ((bt = (c || []).find(
                                          (Le) => Le.id === C.contactId,
                                        )) == null
                                          ? void 0
                                          : bt.remark) ||
                                        ((ns = (c || []).find(
                                          (Le) => Le.id === C.contactId,
                                        )) == null
                                          ? void 0
                                          : ns.nickname) ||
                                        ((Ge = (c || []).find(
                                          (Le) => Le.id === C.contactId,
                                        )) == null
                                          ? void 0
                                          : Ge.name) ||
                                        "未知角色",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] text-gray-400",
                                      children: "好友申请",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: M,
                              className:
                                "w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400",
                              "aria-label": "关闭",
                              children: e.jsx(Ts, { size: 16 }),
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "mt-4 bg-gray-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap break-words",
                          children:
                            String(C.text || "").trim() ||
                            "我想重新加你好友，可以吗？",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "p-4 pt-0 flex gap-3",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (E == null || E(C.id, { viewedAt: Date.now() }),
                              M(),
                              re(!0),
                              ge(C.id));
                          },
                          className:
                            "flex-1 py-3 rounded-2xl bg-[#2c2c2c] text-white font-bold text-sm hover:bg-black",
                          children: "去查看",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: M,
                          className:
                            "flex-1 py-3 rounded-2xl bg-gray-100 text-gray-700 font-bold text-sm hover:bg-gray-200",
                          children: "关闭",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            (J == null ? void 0 : J.req) &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6",
                children: e.jsxs("div", {
                  className:
                    "w-full max-w-sm bg-white border border-[#e6e0d9] shadow-[0_45px_120px_-70px_rgba(0,0,0,0.75)]",
                  style: { borderRadius: 28 },
                  onClick: (Le) => Le.stopPropagation(),
                  children: [
                    e.jsxs("div", {
                      className: "p-6",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-[0.625rem] font-bold tracking-[0.42em] text-[#b0a8a0]",
                          children: "拒绝理由",
                        }),
                        e.jsx("div", {
                          className:
                            "font-serif italic text-xl text-[#2c2c2c] mt-1",
                          children: "写一句给 TA 听的",
                        }),
                        e.jsx("textarea", {
                          value: we,
                          onChange: (Le) => Q(Le.target.value),
                          placeholder: "例如：我现在不想说话。",
                          className:
                            "mt-4 w-full min-h-[120px] bg-[#fbfaf8] border border-[#efe7de] rounded-2xl p-4 text-sm text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-2 focus:ring-black/5 resize-none",
                          maxLength: 200,
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-2 text-[0.625rem] text-[#b0a8a0] tracking-widest text-right",
                          children: [String(we || "").length, "/200"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "px-6 pb-6 flex gap-3",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => G(null),
                          className:
                            "flex-1 py-3 rounded-2xl bg-[#f3f1ee] text-[#4a4a4a] font-bold text-sm hover:bg-[#ede9e4] transition-colors",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: Jt,
                          className:
                            "flex-1 py-3 rounded-2xl bg-[#2c2c2c] text-white font-black text-sm hover:bg-black transition-colors",
                          children: "发送",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
  },
  qY = ({ onBack: t, onSelectFavorite: s }) => {
    const { favorites: n, removeFavorite: a, chats: r } = vn(),
      [i, o] = l.useState(new Set()),
      [c, d] = l.useState(null),
      [u, f] = l.useState(null),
      [p, m] = l.useState(null),
      [h, g] = l.useState(""),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(null),
      [N, w] = l.useState(!1),
      _ = (j) => {
        const T = new Date(j),
          I = String(T.getMonth() + 1).padStart(2, "0"),
          L = String(T.getDate()).padStart(2, "0"),
          B = T.getFullYear();
        return `${I}.${L} / ${B}`;
      },
      A = (j, T = 0) => {
        if (j != null && j !== "") {
          if (typeof j == "number" && !Number.isNaN(j))
            return Math.max(0, Math.floor(j));
          const I = String(j).trim(),
            L = I.match(/^(\d+):(\d{1,2})$/);
          if (L)
            return Math.max(0, parseInt(L[1], 10) * 60 + parseInt(L[2], 10));
          const B = parseInt(I.replace(/[^\d]/g, ""), 10);
          if (!Number.isNaN(B)) return Math.max(0, B);
        }
        return Math.min(60, Math.max(2, Math.ceil((T || 0) / 5)));
      },
      k = (j) => {
        var Z;
        let T = j.text || j.content || j.textPreview || "";
        if ((!T || T === "[语音]" || T === "[图片]") && r) {
          const K = r.find((V) => V.id === j.chatId),
            q =
              (Z = K == null ? void 0 : K.messages) == null
                ? void 0
                : Z.find((V) => V.id === j.messageId);
          q != null && q.text && (T = q.text);
        }
        const I = j.imageUrl || null;
        let L = j.type || "text",
          B = T,
          F = j.audioUrl || null,
          D = j.audioId || null;
        const $ = (K) =>
            K
              ? K.replace(/\[语音\]/g, "")
                  .replace(/\[VOICE\]/gi, "")
                  .replace(/\[\/VOICE\]/gi, "")
                  .trim()
              : "",
          P = (K) => (K ? K.replace(/\[图片\]/g, "").trim() : ""),
          z = (K) => {
            if (!K) return "";
            const q =
              K.match(/\[图片内容[：:]\s*\]?\s*([\s\S]*?)\s*\]\s*$/) ||
              K.match(/\[图片内容[：:]\s*\]?\s*([\s\S]*)/);
            return q
              ? q[1].trim()
              : K.replace(/^\[图片内容[：:]\s*\]?\s*/, "")
                  .replace(/\s*\]\s*$/, "")
                  .trim();
          };
        if (L === "text") {
          const K = T.match(/https?:\/\/[^\s]+/),
            q = T.startsWith("data:image/") || T.startsWith("blob:"),
            V =
              I &&
              (I.startsWith("http") ||
                I.startsWith("data:image/") ||
                I.startsWith("blob:"));
          K
            ? ((L = "real_image"), (B = K[0]))
            : q
              ? ((L = "real_image"), (B = T))
              : V
                ? ((L = "real_image"), (B = I))
                : T.includes("[图片]")
                  ? ((L = "simulated_image"), (B = P(T) || "（无图片描述）"))
                  : (T.includes("[语音]") || T.includes("[VOICE]")) &&
                    ((L = "simulated_voice"),
                    (B = $(T) || `(无转录内容, Raw: "${T}")`));
        } else if (L === "voice")
          ((L = "simulated_voice"), (B = $(T) || `(无转录内容, Raw: "${T}")`));
        else if (L === "image") {
          const K = I || T;
          K &&
          (K.startsWith("http://") ||
            K.startsWith("https://") ||
            K.startsWith("data:image/") ||
            K.startsWith("blob:"))
            ? ((L = "real_image"), (B = K))
            : ((L = "simulated_image"), (B = P(T) || "（无图片描述）"));
        } else
          L === "text_image" &&
            ((L = "simulated_image"),
            (B = j.content || z(T) || T || "（无文字内容）"));
        const O =
          L === "simulated_voice" || L === "voice"
            ? A(j.duration, (B || "").length)
            : null;
        return {
          type: L,
          content: B,
          durationSeconds: O,
          audioUrl: F,
          audioId: D,
        };
      },
      C = (j, T) => {
        (T.stopPropagation(),
          o((I) => {
            const L = new Set(I);
            return (L.has(j) ? L.delete(j) : L.add(j), L);
          }));
      },
      M = async (j, T, I, L, B) => {
        B.stopPropagation();
        const F = L || T;
        if (!(!I && !F))
          if (u === j) (p && (p.pause(), m(null)), f(null));
          else {
            p && p.pause();
            let $ =
              I && (I.startsWith("http://") || I.startsWith("https://"))
                ? I
                : null;
            if (!$ && F)
              try {
                const z = await Ec(F);
                z && ($ = URL.createObjectURL(z));
              } catch {}
            if (!$) {
              alert("语音文件已过期或丢失");
              return;
            }
            const P = new Audio($);
            (m(P),
              f(j),
              (P.onended = () => {
                (f(null),
                  m(null),
                  $ && $.startsWith("blob:") && URL.revokeObjectURL($));
              }),
              P.play().catch((z) => {
                (f(null),
                  m(null),
                  $ && $.startsWith("blob:") && URL.revokeObjectURL($));
              }));
          }
      },
      E = (j, T) => {
        (T.stopPropagation(),
          c === j
            ? (a(j), d(null))
            : (d(j),
              setTimeout(() => {
                d((I) => (I === j ? null : I));
              }, 3e3)));
      },
      S = l.useMemo(() => {
        const j = (h || "").trim().toLowerCase();
        return (n || []).filter((T) => {
          const { type: I, content: L } = k(T);
          if (
            v &&
            !(v === "voice"
              ? I === "simulated_voice" || I === "voice"
              : v === "text"
                ? I === "text"
                : v === "image"
                  ? I === "real_image" ||
                    I === "simulated_image" ||
                    I === "image" ||
                    I === "text_image"
                  : !0)
          )
            return !1;
          if (!j) return !0;
          const B = _(T.timestamp),
            F = T.contactName || "";
          return (
            (L && String(L).toLowerCase().includes(j)) ||
            (F && String(F).toLowerCase().includes(j)) ||
            (B && String(B).toLowerCase().includes(j))
          );
        });
      }, [n, h, v, r]);
    return e.jsxs("div", {
      className:
        "h-full w-full overflow-y-auto bg-[#FDFCF9] font-sans selection:bg-stone-200",
      style: { scrollbarWidth: "none" },
      children: [
        e.jsxs("nav", {
          className:
            "sticky top-0 z-50 bg-[#FDFCF9]/90 backdrop-blur-md px-6 py-6 flex justify-between items-end border-b border-stone-100/50 transition-all duration-500",
          style: { paddingTop: "max(48px, env(safe-area-inset-top, 24px))" },
          children: [
            e.jsxs("div", {
              className: `flex items-center gap-4 transition-all duration-500 overflow-hidden ${x ? "opacity-0 w-0" : "opacity-100 w-auto"}`,
              children: [
                e.jsx("button", {
                  onClick: t,
                  className:
                    "w-8 h-8 -ml-2 flex items-center justify-center text-stone-800 hover:bg-stone-100 rounded-full transition-colors flex-shrink-0",
                  children: e.jsx(un, { size: 24, strokeWidth: 1.5 }),
                }),
                e.jsxs("div", {
                  className: "flex flex-col gap-0.5 flex-shrink-0",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-[10px] tracking-[0.4em] uppercase font-bold text-stone-300",
                      children: "收藏",
                    }),
                    e.jsx("h1", {
                      className:
                        "text-xl font-serif italic text-stone-800 leading-none",
                      children: "归档",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: `flex items-end justify-end transition-all duration-500 ${x ? "flex-1" : ""}`,
              children: x
                ? e.jsxs("div", {
                    className:
                      "flex items-center gap-3 w-full animate-in fade-in slide-in-from-right-8 duration-500",
                    children: [
                      e.jsx(pr, {
                        size: 16,
                        className:
                          "text-stone-400 stroke-[2px] flex-shrink-0 mb-1",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: h,
                        onChange: (j) => g(j.target.value),
                        placeholder: "搜索收藏...",
                        className:
                          "flex-1 bg-transparent border-b border-stone-300 focus:border-stone-800 py-1 text-sm text-stone-800 placeholder:text-stone-400 placeholder:font-serif placeholder:italic outline-none transition-colors font-sans",
                        autoFocus: !0,
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          (g(""), y(!1));
                        },
                        className:
                          "text-stone-400 hover:text-stone-800 transition-colors flex-shrink-0 pb-1",
                        children: e.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest",
                          children: "取消",
                        }),
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className: "flex gap-4 pb-1 items-center relative",
                    children: [
                      e.jsx("button", {
                        onClick: () => y(!0),
                        className:
                          "text-stone-300 hover:text-stone-800 transition-colors",
                        type: "button",
                        children: e.jsx(pr, {
                          size: 18,
                          className: "stroke-[1.5px]",
                        }),
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => w((j) => !j),
                        className:
                          "w-5 h-5 rounded-sm border border-stone-800 flex items-center justify-center rotate-45 hover:bg-stone-100 transition-colors flex-shrink-0 cursor-pointer",
                        title: "按类型筛选",
                        "aria-label": "按类型筛选",
                        children: e.jsx("div", {
                          className:
                            "w-1 h-1 bg-stone-800 -rotate-45 pointer-events-none",
                        }),
                      }),
                      N &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className: "fixed inset-0 z-40",
                              onClick: () => w(!1),
                              "aria-hidden": !0,
                            }),
                            e.jsx("div", {
                              className:
                                "absolute right-0 top-full mt-2 z-50 animate-in fade-in duration-150",
                              children: e.jsxs("div", {
                                className:
                                  "bg-[#FDFCF9] border border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] min-w-[120px]",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "px-3 pt-2.5 pb-1 flex items-center gap-1.5",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[7px] font-mono text-stone-400 tracking-widest",
                                        children: "分类",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "h-px flex-1 max-w-[20px] bg-stone-200",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "pb-2 px-1",
                                    children: [
                                      { key: null, label: "全部", num: "01" },
                                      {
                                        key: "voice",
                                        label: "语音",
                                        num: "02",
                                      },
                                      { key: "text", label: "文字", num: "03" },
                                      {
                                        key: "image",
                                        label: "照片",
                                        num: "04",
                                      },
                                    ].map(({ key: j, label: T, num: I }) => {
                                      const L = v === j;
                                      return e.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => {
                                            (b(j), w(!1));
                                          },
                                          className: `w-full flex items-baseline gap-3 px-3 py-1.5 text-left transition-all duration-150 rounded-sm ${L ? "bg-stone-800 text-white" : "text-stone-600 hover:bg-stone-100 hover:text-stone-800"}`,
                                          children: [
                                            e.jsx("span", {
                                              className: `text-[10px] font-mono tabular-nums ${L ? "text-white/80" : "text-stone-400"}`,
                                              children: I,
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[12px] font-serif italic tracking-tight",
                                              children: T,
                                            }),
                                          ],
                                        },
                                        j ?? "all",
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "px-6 pb-24 pt-8",
          children: [
            e.jsxs("div", {
              className: "mb-12 flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("div", { className: "h-[1px] w-4 bg-stone-800" }),
                    e.jsx("span", {
                      className:
                        "text-[9px] tracking-[0.3em] uppercase text-stone-400",
                      children: "收藏列表",
                    }),
                  ],
                }),
                e.jsxs("span", {
                  className:
                    "text-[9px] text-stone-300 font-mono tracking-tighter",
                  children: [
                    String((S == null ? void 0 : S.length) || 0).padStart(
                      2,
                      "0",
                    ),
                    "/",
                    (n == null ? void 0 : n.length) || 0,
                  ],
                }),
              ],
            }),
            S != null && S.length
              ? S.map((j, T) => {
                  const {
                      type: I,
                      content: L,
                      durationSeconds: B,
                      audioUrl: F,
                      audioId: D,
                    } = k(j),
                    $ =
                      I === "simulated_image"
                        ? (L || "").replace(/图片/g, "")
                        : L,
                    P = _(j.timestamp),
                    z = T % 2 === 0,
                    O = i.has(j.id),
                    Z = c === j.id,
                    K = u === j.id,
                    q = ({ text: V }) =>
                      e.jsx("div", {
                        className:
                          "animate-in fade-in duration-500 py-4 px-2 min-w-0",
                        children: e.jsxs("p", {
                          className:
                            "text-stone-700 leading-relaxed font-light text-[14px] tracking-wide relative z-10 italic whitespace-pre-wrap break-words",
                          children: ["“", V, "”"],
                        }),
                      });
                  return e.jsxs(
                    "div",
                    {
                      className: `relative mb-20 flex flex-col ${z ? "pr-6" : "pl-6"} transition-all duration-500`,
                      children: [
                        e.jsx("span", {
                          className:
                            "absolute -top-10 -left-2 opacity-5 font-serif text-7xl italic pointer-events-none tracking-tighter select-none",
                          children: String(T + 1).padStart(2, "0"),
                        }),
                        e.jsxs("div", {
                          className: `flex items-center mb-4 gap-3 ${z ? "flex-row" : "flex-row-reverse"}`,
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full overflow-hidden ring-1 ring-stone-100 ring-offset-2 flex-shrink-0 bg-stone-200 flex items-center justify-center",
                              children: j.contactAvatar
                                ? e.jsx("img", {
                                    src: j.contactAvatar,
                                    alt: j.contactName,
                                    className: "w-full h-full object-cover",
                                  })
                                : e.jsx("span", {
                                    className:
                                      "font-serif text-xs text-stone-500",
                                    children: (j.contactName || "?")[0],
                                  }),
                            }),
                            e.jsxs("div", {
                              className: `flex flex-col ${z ? "items-start" : "items-end"}`,
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[8px] tracking-[0.2em] text-stone-300 uppercase font-bold leading-none mb-1",
                                  children: "来自",
                                }),
                                e.jsx("span", {
                                  className:
                                    "font-serif italic text-xs text-stone-800 leading-none",
                                  children: j.contactName || "未知",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "group relative bg-white p-6 border-[0.5px] border-stone-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)]",
                          children: [
                            e.jsxs("div", {
                              className: "w-full text-left block relative",
                              children: [
                                I === "text" && e.jsx(q, { text: L }),
                                I === "real_image" &&
                                  e.jsx("div", {
                                    className: "relative",
                                    children: e.jsxs("div", {
                                      className:
                                        "bg-white border border-stone-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-2 rounded-sm",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm relative group/img",
                                          children: e.jsx("img", {
                                            src: L,
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.03]",
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "mt-2 pt-2 border-t border-stone-100 flex items-center justify-between",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "h-px flex-1 max-w-8 bg-stone-200",
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[9px] font-mono text-stone-400 tracking-wider px-2",
                                              children: P,
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "h-px flex-1 max-w-8 bg-stone-200",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                I === "simulated_image" &&
                                  e.jsx("div", {
                                    onClick: (V) => C(j.id, V),
                                    className: "group/cover cursor-pointer",
                                    children: e.jsxs("div", {
                                      className: `relative rounded-lg overflow-hidden ${O ? "min-h-[140px]" : "aspect-[4/3]"}`,
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "absolute inset-0 pointer-events-none flex items-stretch justify-stretch z-10",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-stone-400 rounded-tl",
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-stone-400 rounded-tr",
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-stone-400 rounded-bl",
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-stone-400 rounded-br",
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: `absolute inset-3 rounded-sm ${O ? "bg-white" : "flex flex-col items-center justify-center bg-gradient-to-b from-stone-100/95 to-stone-50/90"}`,
                                          children: O
                                            ? e.jsx("div", {
                                                className:
                                                  "animate-in fade-in duration-200 overflow-y-auto py-2 pr-1 min-h-0",
                                                children: e.jsx("p", {
                                                  className:
                                                    "text-stone-700 leading-relaxed font-light text-[14px] tracking-wide italic whitespace-pre-wrap break-words",
                                                  children: $,
                                                }),
                                              })
                                            : e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-stone-400/90 text-[11px] font-serif italic tracking-wide",
                                                    children: "轻触展开",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "mt-2 w-8 h-px bg-stone-200/80",
                                                  }),
                                                ],
                                              }),
                                        }),
                                      ],
                                    }),
                                  }),
                                I === "simulated_voice" &&
                                  e.jsxs("div", {
                                    className:
                                      "w-full flex flex-col gap-3 py-2 group/voice min-w-0",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-4 group-hover/voice:opacity-80 transition-opacity",
                                        children: [
                                          e.jsx("button", {
                                            onClick: (V) =>
                                              M(j.id, j.messageId, F, D, V),
                                            className: `w-10 h-10 rounded-full text-white flex items-center justify-center flex-shrink-0 shadow-md transition-transform active:scale-95 ${F || D || j.messageId ? "bg-stone-900 hover:bg-stone-800 cursor-pointer" : "bg-stone-300 cursor-not-allowed"}`,
                                            title:
                                              F || D || j.messageId
                                                ? K
                                                  ? "Pause"
                                                  : "Play"
                                                : "No audio available",
                                            children: K
                                              ? e.jsx(Sl, {
                                                  size: 14,
                                                  fill: "currentColor",
                                                })
                                              : e.jsx(hl, { size: 16 }),
                                          }),
                                          e.jsxs("div", {
                                            className: "flex-1 cursor-pointer",
                                            onClick: (V) => C(j.id, V),
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center text-[9px] text-stone-400 font-mono tracking-tighter uppercase mb-2",
                                                children: [
                                                  e.jsx("span", {
                                                    children: "Audio Note",
                                                  }),
                                                  e.jsx("span", {
                                                    children:
                                                      B != null ? `${B}"` : "—",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "h-[2px] bg-stone-100 w-full relative rounded-full overflow-hidden",
                                                children: e.jsx("div", {
                                                  className: `absolute top-0 left-0 h-full bg-stone-400 rounded-full transition-all duration-300 ${K ? "w-full animate-pulse" : "w-1/3"}`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      O &&
                                        e.jsx("div", {
                                          className:
                                            "animate-in slide-in-from-top-2 fade-in duration-500 pl-14 pr-2 mt-2 min-w-0",
                                          children: e.jsxs("p", {
                                            className:
                                              "text-stone-700 leading-relaxed font-light text-[14px] tracking-wide italic whitespace-pre-wrap break-words border-l-2 border-stone-200 pl-4 py-1",
                                            children: ["“", L, "”"],
                                          }),
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-6 pt-4 border-t border-stone-50 flex justify-between items-end",
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col gap-0.5",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[8px] font-mono text-stone-300 uppercase tracking-tighter",
                                      children: "收藏时间",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[9px] text-stone-400 italic",
                                      children: P,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    e.jsx("button", {
                                      onClick: (V) => {
                                        (V.stopPropagation(),
                                          s(j.chatId, j.messageId));
                                      },
                                      className:
                                        "text-stone-200 hover:text-stone-800 transition-colors flex items-center gap-1",
                                      title: "在聊天中定位",
                                      children: e.jsx(zn, { size: 14 }),
                                    }),
                                    e.jsx("button", {
                                      onClick: (V) => E(j.id, V),
                                      className: `transition-all flex items-center gap-1 ${Z ? "text-red-500 bg-red-50 px-2 py-0.5 rounded" : "text-stone-200 hover:text-stone-800"}`,
                                      title: "移除",
                                      children: Z
                                        ? e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx(gp, { size: 12 }),
                                              e.jsx("span", {
                                                className:
                                                  "text-[9px] font-bold uppercase tracking-wider",
                                                children: "确认删除",
                                              }),
                                            ],
                                          })
                                        : e.jsx(_n, { size: 14 }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    j.id,
                  );
                })
              : e.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center py-32 opacity-40",
                  children: [
                    e.jsx(bu, {
                      size: 32,
                      className: "mb-4 text-stone-300",
                      strokeWidth: 1,
                    }),
                    e.jsx("p", {
                      className: "font-serif italic text-stone-500",
                      children: h || v ? "未找到匹配项。" : "暂无收藏。",
                    }),
                  ],
                }),
            (n == null ? void 0 : n.length) > 0 &&
              e.jsxs("footer", {
                className: "mt-20 pb-10 flex flex-col items-center",
                children: [
                  e.jsx("div", { className: "w-[1px] h-10 bg-stone-200 mb-6" }),
                  e.jsx("p", {
                    className:
                      "text-[8px] tracking-[0.8em] text-stone-300 uppercase text-center pl-2",
                    children: "— 收藏列表结束 —",
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  tu = (t) => String(t ?? "").trim(),
  Fb = (t) => `chat_app_moments_header_bg_${tu(t) || ""}`;
function Gd(t) {
  try {
    window.dispatchEvent(
      new CustomEvent(ku, {
        detail: { contactId: "*", source: "chat_app", ...t },
      }),
    );
  } catch {}
}
const lk = ({
    userId: t,
    onBack: s,
    onViewUser: n,
    onClose: a,
    onDockVisibilityChange: r,
  }) => {
    var Ie, Ce, Re, De, at, ft, vt;
    const {
        user: i,
        setUser: o,
        userPresets: c,
        updateUserPreset: d,
        moments: u,
        addMoment: f,
        toggleLikeMoment: p,
        contacts: m,
        forwardMoment: h,
        deleteMoment: g,
        deleteComment: x,
        replyToComment: y,
        notifyAiSignatureChange: v,
        createChat: b,
        sendMessage: N,
        triggerAiReply: w,
        updateContact: _,
        togglePinMoment: A,
        runProactiveMomentCheck: k,
      } = vn(),
      [C, M] = l.useState(!1),
      [E, S] = l.useState(null),
      [j, T] = l.useState(""),
      [I, L] = l.useState(!1),
      [B, F] = l.useState([]),
      [D, $] = l.useState(null),
      [P, z] = l.useState(""),
      [O, Z] = l.useState({
        content: "",
        images: [],
        visibilityMode: "public",
        visibleToContactIds: [],
      }),
      [K, q] = l.useState(!1),
      [V, ne] = l.useState(new Set()),
      [le, ie] = l.useState(new Set()),
      [X, je] = l.useState(new Set()),
      [xe, ye] = l.useState(null),
      [R, oe] = l.useState(null),
      ee = (Oe, Qe) => {
        const Ye = `${Oe}-${Qe}`;
        je((Ze) => {
          const Ue = new Set(Ze);
          return (Ue.has(Ye) ? Ue.delete(Ye) : Ue.add(Ye), Ue);
        });
      },
      H = (Oe) => {
        ne((Qe) => {
          const Ye = new Set(Qe);
          return (Ye.has(Oe) ? Ye.delete(Oe) : Ye.add(Oe), Ye);
        });
      },
      [Y, U] = l.useState(!1),
      [ce, pe] = l.useState(!1),
      [se, Te] = l.useState(""),
      [ke, W] = l.useState(""),
      ue = t === "me" || t === i.id;
    let re = i;
    if (t && !ue) {
      const Oe = m.find((Qe) => Qe.id === t);
      Oe && (re = Oe);
    }
    const he = re || i,
      ge = !t || ue,
      [J, G] = l.useState("");
    l.useEffect(() => {
      if (!ge) return;
      const Oe = tu(he == null ? void 0 : he.wechatId);
      let Qe = !1;
      return (
        (async () => {
          const Ye = await be.get(Fb(Oe), "");
          Qe || G(typeof Ye == "string" ? Ye : "");
        })(),
        () => {
          Qe = !0;
        }
      );
    }, [ge, he == null ? void 0 : he.wechatId]);
    const we = t ? u.filter((Oe) => (ge ? Tc(Oe, he) : o1(Oe, he))) : u,
      Q = R != null ? (u || []).find((Oe) => Oe.id === R) : null,
      ve = t ? we.filter((Oe) => Oe.isPinned) : [],
      Ve = t ? we.filter((Oe) => !Oe.isPinned) : we;
    (l.useEffect(() => {
      !ge &&
        ve.length === 0 &&
        we.length >= 3 &&
        [...we]
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .forEach((Ye) => A(Ye.id));
    }, [t, ge, we.length]),
      l.useEffect(() => {
        typeof k == "function" && k();
      }, []),
      l.useEffect(
        () => (r ? (r(!!C || !!D), () => r(!1)) : void 0),
        [C, D, r],
      ));
    const Ae = async (Oe) => {
        const Qe = Array.from(Oe.target.files || []),
          Ye = Math.min(Qe.length, 9 - O.images.length);
        if (Ye <= 0) return;
        const Ze = [];
        for (let Ue = 0; Ue < Ye; Ue++)
          try {
            const me = await $r(Qe[Ue], 1e3, 0.8);
            Ze.push(me);
          } catch {
            const jt = await new Promise((Gt) => {
              const Pt = new FileReader();
              ((Pt.onload = (Wt) => Gt(Wt.target.result)),
                Pt.readAsDataURL(Qe[Ue]));
            });
            Ze.push(jt);
          }
        (Z((Ue) => ({ ...Ue, images: [...Ue.images, ...Ze].slice(0, 9) })),
          (Oe.target.value = ""));
      },
      te = async (Oe) => {
        const Qe = Oe.target.files[0];
        if (Qe)
          try {
            const Ye = await $r(Qe, 1200, 0.7);
            if (ge) {
              const Ze = tu(
                (he == null ? void 0 : he.wechatId) ||
                  (i == null ? void 0 : i.wechatId),
              );
              (G(Ye), be.set(Fb(Ze), Ye), o({ ...i, background: Ye }));
            } else t && _(t, { background: Ye });
          } catch {
            const Ze = new FileReader();
            ((Ze.onload = (Ue) => {
              if (ge) {
                const me = tu(
                    (he == null ? void 0 : he.wechatId) ||
                      (i == null ? void 0 : i.wechatId),
                  ),
                  jt = Ue.target.result;
                (G(jt),
                  be.set(Fb(me), jt),
                  o({ ...i, background: Ue.target.result }));
              } else t && _(t, { background: Ue.target.result });
            }),
              Ze.readAsDataURL(Qe));
          }
      },
      Se = () => {
        var Oe, Qe;
        (!O.content && !((Oe = O.images) != null && Oe.length)) ||
          (f(
            O.content,
            (Qe = O.images) != null && Qe.length ? O.images : null,
            {
              visibilityMode: O.visibilityMode,
              visibleToContactIds: O.visibleToContactIds,
            },
          ),
          Gd({
            direction: "out",
            sender: "me",
            messageType: "moment_posted",
            text: String(O.content || ""),
            timestamp: Date.now(),
          }),
          Z({
            content: "",
            images: [],
            visibilityMode: "public",
            visibleToContactIds: [],
          }),
          M(!1),
          q(!1));
      },
      Fe = (Oe) => {
        if (E) {
          const Qe = b(Oe),
            Ye = E.content || "[图片]";
          (N(Qe, `[转发朋友圈] ${Ye}`, null, "moment", { moment: E }),
            j.trim() && N(Qe, j),
            setTimeout(() => w(Qe), 1e3),
            S(null),
            T(""),
            alert("已发送"));
        }
      },
      $e = (Oe, Qe, Ye) => {
        ($({ momentId: Oe, commentId: Qe, user: Ye }), z(""));
      },
      tt = () => {
        if (!P.trim() || !D) return;
        const Oe = D.commentId ? D.user : null;
        (y(D.momentId, P, Oe),
          Gd({
            direction: "out",
            sender: "me",
            messageType: "moment_commented",
            text: String(P || ""),
            timestamp: Date.now(),
          }),
          $(null),
          z(""),
          r == null || r(!1));
      },
      Xe = () => {
        ge && (Te(Vo(i)), U(!0));
      },
      ht = () => {
        const Qe = se.trim() || String(i.realName || "").trim() || "我";
        o({ ...i, name: Qe, nickname: Qe });
        const Ye = tu(i.wechatId);
        (Ye &&
          Array.isArray(c) &&
          c.length > 0 &&
          c.forEach((Ze) => {
            tu(Ze.wechatId) === Ye &&
              d(Ze.id, { name: Qe, userName: i.realName || Qe, nickname: Qe });
          }),
          U(!1));
      },
      Pe = () => {
        ge && (W(he.signature || ""), pe(!0));
      },
      ut = () => {
        const Oe = ke.trim();
        (o({ ...i, signature: Oe }),
          Gd({
            direction: "out",
            sender: "me",
            messageType: "profile_signature_change",
            text: String(Oe || ""),
            timestamp: Date.now(),
          }),
          pe(!1),
          Oe && window.confirm("是否通知好友你更换了签名？") && (L(!0), F([])));
      },
      _t = () => {
        B.length > 0 && (v(i.signature, B), L(!1), alert("已通知选中的好友"));
      },
      Ee = (Oe) => {
        if (n)
          if (jv(i).has(Oe)) n("me");
          else {
            const Qe = m.find((Ye) => (Ye.nickname || Ye.name) === Oe);
            Qe && n(Qe.id);
          }
      },
      fe = (Oe) => {
        F((Qe) =>
          Qe.includes(Oe) ? Qe.filter((Ye) => Ye !== Oe) : [...Qe, Oe],
        );
      },
      He = (Oe) =>
        new Date(Oe || Date.now()).toLocaleString("zh-CN", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
        });
    return e.jsxs("div", {
      className:
        "chat-app-moments flex flex-col h-full min-h-0 bg-[#FAFAFA] font-sans relative overflow-hidden",
      children: [
        e.jsxs("div", {
          className:
            "absolute top-0 left-0 right-0 z-30 px-6 py-5 pt-12 flex items-center justify-between pointer-events-none",
          children: [
            e.jsx("div", {
              className: "w-8 pointer-events-auto",
              children:
                s &&
                e.jsx("button", {
                  onClick: () => {
                    (navigator.vibrate && navigator.vibrate(20), s());
                  },
                  className:
                    "w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-md rounded-full text-white border border-white/20",
                  children: e.jsx(un, { size: 20, strokeWidth: 1.5 }),
                }),
            }),
            e.jsx("div", { className: "w-8" }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar pb-32 overscroll-contain touch-pan-y",
          style: { WebkitOverflowScrolling: "touch" },
          children: [
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsxs("div", {
                  className: "h-[45vh] min-h-[300px] w-full relative group",
                  children: [
                    (ge && J) || he.background
                      ? e.jsx("img", {
                          src: (ge && J) || he.background,
                          alt: "封面",
                          className: "w-full h-full object-cover",
                          loading: "lazy",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full bg-gray-200 flex items-center justify-center",
                          children: e.jsx("span", {
                            className: "text-gray-400 font-serif italic",
                            children: "点击添加封面",
                          }),
                        }),
                    e.jsx("div", {
                      className:
                        "moments-header-gradient absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/60 to-transparent",
                    }),
                    a &&
                      !t &&
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (navigator.vibrate && navigator.vibrate(20), a());
                        },
                        className:
                          "absolute top-[55px] left-6 z-40 p-2 text-white hover:text-white/90 transition-colors",
                        "aria-label": "回到桌面",
                        children: e.jsx(un, { size: 24, strokeWidth: 1.5 }),
                      }),
                    ge &&
                      e.jsx("button", {
                        onClick: () => M(!0),
                        className:
                          "absolute top-[55px] right-6 z-40 p-2 text-white hover:text-white/90 transition-colors",
                        "aria-label": "发布朋友圈",
                        children: e.jsx(qo, { size: 24, strokeWidth: 1.5 }),
                      }),
                    e.jsxs("div", {
                      className:
                        "absolute inset-x-0 top-0 bottom-32 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 cursor-pointer z-20",
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium flex items-center gap-2 pointer-events-none",
                          children: [
                            e.jsx(qo, { size: 14 }),
                            e.jsx("span", { children: "更换封面" }),
                          ],
                        }),
                        e.jsx("input", {
                          type: "file",
                          accept: "image/*",
                          onChange: te,
                          className:
                            "absolute inset-0 opacity-0 cursor-pointer",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative -mt-24 flex flex-col items-center text-center px-6 z-30",
                  children: [
                    e.jsxs("div", {
                      className: "relative mb-2 group cursor-pointer",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-white/30 backdrop-blur-md rounded-full scale-110 shadow-lg",
                        }),
                        e.jsx("div", {
                          className:
                            "relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-white/80 to-white/40 backdrop-blur-sm shadow-2xl",
                          children: e.jsxs("div", {
                            className:
                              "w-full h-full rounded-full overflow-hidden border-2 border-white relative",
                            children: [
                              e.jsx("img", {
                                src: he.avatar || "",
                                alt: "头像",
                                className:
                                  "w-full h-full object-cover bg-gray-200",
                                loading: "lazy",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none mix-blend-overlay",
                              }),
                              ge &&
                                e.jsxs("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-10",
                                  children: [
                                    e.jsx(qo, {
                                      size: 24,
                                      className: "text-white",
                                    }),
                                    e.jsx("input", {
                                      type: "file",
                                      accept: "image/*",
                                      className:
                                        "absolute inset-0 opacity-0 cursor-pointer",
                                      onChange: async (Oe) => {
                                        const Qe = Oe.target.files[0];
                                        if (Qe)
                                          try {
                                            const Ye = await $r(Qe, 400, 0.8);
                                            (o({ ...i, avatar: Ye }),
                                              Gd({
                                                direction: "out",
                                                sender: "me",
                                                messageType:
                                                  "profile_avatar_change",
                                                text: "",
                                                timestamp: Date.now(),
                                              }));
                                          } catch {
                                            const Ze = new FileReader();
                                            ((Ze.onload = (Ue) => {
                                              (o({
                                                ...i,
                                                avatar: Ue.target.result,
                                              }),
                                                Gd({
                                                  direction: "out",
                                                  sender: "me",
                                                  messageType:
                                                    "profile_avatar_change",
                                                  text: "",
                                                  timestamp: Date.now(),
                                                }));
                                            }),
                                              Ze.readAsDataURL(Qe));
                                          }
                                      },
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        !t &&
                          e.jsx("button", {
                            onClick: (Oe) => {
                              (Oe.stopPropagation(), n && n("me"));
                            },
                            className:
                              "absolute bottom-0 right-0 w-8 h-8 bg-white text-red-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-20 border border-gray-100",
                            children: e.jsx(zn, {
                              size: 16,
                              fill: "currentColor",
                            }),
                          }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "relative mb-1 min-h-[36px] flex items-center justify-center w-full",
                      children: Y
                        ? e.jsx("input", {
                            type: "text",
                            value: se,
                            onChange: (Oe) => Te(Oe.target.value),
                            onBlur: ht,
                            onKeyDown: (Oe) => Oe.key === "Enter" && ht(),
                            autoFocus: !0,
                            className:
                              "font-serif text-2xl text-gray-900 text-center bg-transparent border-b border-gray-300 outline-none w-full max-w-[200px]",
                          })
                        : e.jsxs("h1", {
                            onClick: Xe,
                            className: `relative font-serif text-2xl text-gray-900 tracking-wide inline-block ${ge ? "cursor-pointer hover:opacity-70" : ""}`,
                            children: [
                              ge ? Vo(i) : he.nickname || he.name,
                              ge &&
                                e.jsx("span", {
                                  className:
                                    "absolute -right-5 top-1/2 -translate-y-1/2",
                                  children: e.jsx(_c, {
                                    size: 12,
                                    className:
                                      "text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity",
                                  }),
                                }),
                            ],
                          }),
                    }),
                    e.jsx("div", {
                      className:
                        "relative min-h-[20px] flex items-center justify-center mb-1 w-full",
                      children: ce
                        ? e.jsx("input", {
                            type: "text",
                            value: ke,
                            onChange: (Oe) => W(Oe.target.value),
                            onBlur: ut,
                            onKeyDown: (Oe) => Oe.key === "Enter" && ut(),
                            autoFocus: !0,
                            className:
                              "text-xs text-gray-500 font-light tracking-widest uppercase text-center bg-transparent border-b border-gray-300 outline-none w-full max-w-[240px]",
                          })
                        : e.jsx("p", {
                            onClick: Pe,
                            className: `text-xs text-gray-500 font-light tracking-widest uppercase max-w-[240px] leading-relaxed ${ge ? "cursor-pointer hover:text-gray-700" : ""}`,
                            children: he.signature || "点击添加个性签名",
                          }),
                    }),
                    t &&
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-center gap-2 mt-1 w-full animate-in fade-in slide-in-from-bottom-4 duration-700",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center w-28 group cursor-pointer",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-serif text-xl font-medium text-gray-900 text-center group-hover:scale-110 transition-transform",
                                children: u.filter((Oe) =>
                                  ge ? Tc(Oe, he) : o1(Oe, he),
                                ).length,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1 text-center w-full",
                                children: "Posts",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center w-28 group cursor-pointer",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-serif text-xl font-medium text-gray-900 text-center group-hover:scale-110 transition-transform",
                                children: ge
                                  ? m.length
                                  : m.length +
                                    (t.toString().charCodeAt(0) % 10),
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1 text-center w-full",
                                children: "Following",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            e.jsx("div", { className: "h-8" }),
            t &&
              ve.length > 0 &&
              e.jsxs("div", {
                className: "px-6 mb-12 animate-in fade-in duration-700",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-4 opacity-60",
                    children: [
                      e.jsx(W0, {
                        size: 12,
                        className: "text-gray-900 rotate-45",
                      }),
                      e.jsx("span", {
                        className:
                          "font-serif text-[10px] tracking-[0.2em] uppercase text-gray-900",
                        children: "置顶动态",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2 h-56",
                    children: [
                      ve[0] &&
                        e.jsxs("div", {
                          className:
                            "flex-[2] relative rounded-2xl overflow-hidden shadow-sm bg-white group cursor-pointer",
                          children: [
                            ((Ie = ve[0].images) != null && Ie[0]) ||
                            ve[0].image
                              ? e.jsx("img", {
                                  src:
                                    ((Ce = ve[0].images) == null
                                      ? void 0
                                      : Ce[0]) || ve[0].image,
                                  alt: "置顶",
                                  className:
                                    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                  loading: "lazy",
                                })
                              : e.jsx("div", {
                                  className:
                                    "w-full h-full bg-[#f8f8f8] p-4 flex items-center justify-center",
                                  children: e.jsx("p", {
                                    className:
                                      "font-serif text-xs text-gray-500 text-center line-clamp-6 leading-relaxed",
                                    children: ve[0].content,
                                  }),
                                }),
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                            }),
                            ge &&
                              e.jsx("button", {
                                onClick: (Oe) => {
                                  (Oe.stopPropagation(), A(ve[0].id));
                                },
                                className:
                                  "absolute top-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10",
                                title: "取消置顶",
                                children: e.jsx(Ts, { size: 12 }),
                              }),
                          ],
                        }),
                      e.jsx("div", {
                        className: "flex-1 flex flex-col gap-2",
                        children: ve.slice(1, 3).map((Oe) => {
                          var Qe, Ye;
                          return e.jsxs(
                            "div",
                            {
                              className:
                                "flex-1 relative rounded-2xl overflow-hidden shadow-sm bg-white group cursor-pointer",
                              children: [
                                ((Qe = Oe.images) != null && Qe[0]) || Oe.image
                                  ? e.jsx("img", {
                                      src:
                                        ((Ye = Oe.images) == null
                                          ? void 0
                                          : Ye[0]) || Oe.image,
                                      alt: "置顶",
                                      className:
                                        "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                      loading: "lazy",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-full h-full bg-[#f8f8f8] p-3 flex items-center justify-center",
                                      children: e.jsx("p", {
                                        className:
                                          "font-serif text-[10px] text-gray-500 text-center line-clamp-3 leading-relaxed",
                                        children: Oe.content,
                                      }),
                                    }),
                                ge &&
                                  e.jsx("button", {
                                    onClick: (Ze) => {
                                      (Ze.stopPropagation(), A(Oe.id));
                                    },
                                    className:
                                      "absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10",
                                    title: "取消置顶",
                                    children: e.jsx(Ts, { size: 10 }),
                                  }),
                              ],
                            },
                            Oe.id,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "px-6 space-y-12",
              children: [
                we.length === 0 &&
                  e.jsx("div", {
                    className:
                      "flex flex-col items-center justify-center py-10 border-t border-gray-100 pt-20",
                    children: e.jsx("span", {
                      className: "font-serif text-gray-300 italic text-lg",
                      children: "暂无动态",
                    }),
                  }),
                Ve.map((Oe) => {
                  var Qe;
                  return e.jsxs(
                    "div",
                    {
                      className: "flex flex-col group",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                e.jsxs("div", {
                                  className: "relative group/avatar",
                                  children: [
                                    e.jsx("img", {
                                      src: (() => {
                                        const Ye = (m || []).find(
                                          (Ze) =>
                                            (Ze.nickname || Ze.name) ===
                                            Oe.user.name,
                                        );
                                        return (
                                          (Ye == null ? void 0 : Ye.portrait) ||
                                          (Ye == null ? void 0 : Ye.avatar) ||
                                          Oe.user.avatar
                                        );
                                      })(),
                                      alt: Oe.user.name,
                                      className:
                                        "w-8 h-8 rounded-full object-cover",
                                      loading: "lazy",
                                    }),
                                    !t &&
                                      m.some(
                                        (Ye) =>
                                          (Ye.nickname || Ye.name) ===
                                          Oe.user.name,
                                      ) &&
                                      e.jsx("button", {
                                        onClick: (Ye) => {
                                          (Ye.stopPropagation(),
                                            Ee(Oe.user.name));
                                        },
                                        className:
                                          "absolute -bottom-1 -right-1 w-4 h-4 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity shadow-sm hover:scale-110",
                                        title: "查看资料",
                                        children: e.jsx(FT, { size: 10 }),
                                      }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-xs font-bold tracking-wide text-gray-900",
                                  children: Oe.user.name,
                                }),
                              ],
                            }),
                            e.jsx("span", {
                              className:
                                "text-[10px] text-gray-400 font-serif italic",
                              children: He(Oe.timestamp),
                            }),
                          ],
                        }),
                        Oe.content &&
                          e.jsxs("div", {
                            className: "px-1 mb-2 cursor-pointer",
                            onClick: (Ye) => {
                              (Ye.stopPropagation(), oe(Oe.id));
                            },
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm text-gray-800 font-serif leading-relaxed whitespace-pre-wrap",
                                children: Oe.content,
                              }),
                              Oe.translation &&
                                e.jsxs("div", {
                                  className: "mt-2",
                                  children: [
                                    e.jsxs("button", {
                                      onClick: (Ye) => {
                                        (Ye.stopPropagation(),
                                          ie((Ze) => {
                                            const Ue = new Set(Ze);
                                            return (
                                              Ue.has(Oe.id)
                                                ? Ue.delete(Oe.id)
                                                : Ue.add(Oe.id),
                                              Ue
                                            );
                                          }));
                                      },
                                      className:
                                        "flex items-center gap-1.5 text-[10px] text-gray-500 hover:text-gray-700 uppercase tracking-wider",
                                      children: [
                                        e.jsx(Pm, {
                                          size: 12,
                                          strokeWidth: 1.5,
                                        }),
                                        le.has(Oe.id) ? "收起翻译" : "翻译",
                                      ],
                                    }),
                                    le.has(Oe.id) &&
                                      e.jsx("p", {
                                        className:
                                          "mt-1.5 text-xs text-gray-600 font-serif leading-relaxed border-l-2 border-gray-200 pl-3",
                                        children: Oe.translation,
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        (() => {
                          var Pt, Wt;
                          const Ye =
                              (Pt = Oe.images) != null && Pt.length
                                ? Oe.images
                                : Oe.image
                                  ? [Oe.image]
                                  : [],
                            Ze =
                              (Wt = Oe.imageDescriptions) != null && Wt.length
                                ? Oe.imageDescriptions
                                : Oe.imageDescription
                                  ? [Oe.imageDescription]
                                  : [],
                            Ue = Ye.length
                              ? Ye.map((ct) => ({ type: "url", value: ct }))
                              : Ze.length
                                ? Ze.map((ct) => ({ type: "desc", value: ct }))
                                : [];
                          if (Ue.length === 0) return null;
                          const me = Math.min(Ue.length, 9),
                            jt = [
                              "moments-bg-clay",
                              "moments-bg-moss",
                              "moments-bg-sand",
                              "moments-bg-mist",
                              "moments-bg-dusk",
                            ],
                            Gt =
                              me === 1
                                ? "moments-layout-1"
                                : me === 3
                                  ? "moments-layout-3"
                                  : "moments-layout-9";
                          return e.jsx("div", {
                            className: "moments-magazine-wrap",
                            children: e.jsx("div", {
                              className: `${Gt} rounded-sm overflow-hidden`,
                              children: Ue.slice(0, me).map((ct, Kt) => {
                                const fs = Ze[Kt],
                                  gt = `${Oe.id}-${Kt}`,
                                  ae = X.has(gt),
                                  nt = jt[Kt % jt.length],
                                  Xt =
                                    (Ze[Kt] != null &&
                                    String(Ze[Kt]).trim() !== ""
                                      ? String(Ze[Kt]).trim().slice(0, 12)
                                      : me === 1
                                        ? "动态"
                                        : [
                                            "壹",
                                            "贰",
                                            "叁",
                                            "肆",
                                            "伍",
                                            "陆",
                                            "柒",
                                            "捌",
                                            "玖",
                                          ][Kt]) ||
                                    (me === 1
                                      ? "动态"
                                      : [
                                          "壹",
                                          "贰",
                                          "叁",
                                          "肆",
                                          "伍",
                                          "陆",
                                          "柒",
                                          "捌",
                                          "玖",
                                        ][Kt]),
                                  bs = Xt.slice(0, 4),
                                  ss = (
                                    Ze[Kt] != null &&
                                    String(Ze[Kt]).trim() !== ""
                                      ? Ze[Kt]
                                      : ct.type === "desc"
                                        ? ct.value
                                        : ""
                                  ).slice(0, 80),
                                  _s = Ue.map((qs, Bs) => {
                                    const Js =
                                      Ze[Bs] != null &&
                                      String(Ze[Bs]).trim() !== ""
                                        ? String(Ze[Bs]).trim().slice(0, 12)
                                        : me === 1
                                          ? "动态"
                                          : [
                                              "壹",
                                              "贰",
                                              "叁",
                                              "肆",
                                              "伍",
                                              "陆",
                                              "柒",
                                              "捌",
                                              "玖",
                                            ][Bs];
                                    return {
                                      type: qs.type,
                                      value: qs.value,
                                      description: Ze[Bs],
                                      title:
                                        Js ||
                                        (me === 1
                                          ? "动态"
                                          : [
                                              "壹",
                                              "贰",
                                              "叁",
                                              "肆",
                                              "伍",
                                              "陆",
                                              "柒",
                                              "捌",
                                              "玖",
                                            ][Bs]),
                                      fullText:
                                        qs.type === "desc"
                                          ? qs.value
                                          : Oe.content || "",
                                    };
                                  });
                                return e.jsxs(
                                  "div",
                                  {
                                    className: `moments-item-box ${nt} ${ae ? "moments-active" : ""}`,
                                    onClick: (qs) => {
                                      qs.target.closest(
                                        ".moments-fullscreen-btn",
                                      ) ||
                                        (qs.stopPropagation(), ee(Oe.id, Kt));
                                    },
                                    children: [
                                      ct.type === "url"
                                        ? e.jsx("img", {
                                            src: ct.value,
                                            alt: "",
                                            loading: "lazy",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-[#f5f5f5]",
                                          }),
                                      e.jsx("div", {
                                        className: "moments-watermark",
                                        children: e.jsx("span", {
                                          className: "moments-watermark-label",
                                          children:
                                            me === 9
                                              ? [
                                                  "壹",
                                                  "贰",
                                                  "叁",
                                                  "肆",
                                                  "伍",
                                                  "陆",
                                                  "柒",
                                                  "捌",
                                                  "玖",
                                                ][Kt]
                                              : "MOMENT",
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "moments-content-layer",
                                        children: [
                                          e.jsx("button", {
                                            type: "button",
                                            className: "moments-fullscreen-btn",
                                            onClick: (qs) => {
                                              qs.stopPropagation();
                                              const Bs = [
                                                "#e8e4e1",
                                                "#dee3dc",
                                                "#f2ede4",
                                                "#e5e9ed",
                                                "#dfdbe5",
                                              ];
                                              ye({
                                                type: ct.type,
                                                url:
                                                  ct.type === "url"
                                                    ? ct.value
                                                    : null,
                                                textContent:
                                                  ct.type === "desc"
                                                    ? ct.value
                                                    : null,
                                                description: fs,
                                                allItems: _s,
                                                currentIndex: Kt,
                                                title: Xt || "动态",
                                                fullText:
                                                  ct.type === "desc"
                                                    ? ct.value
                                                    : Oe.content || "",
                                                bgColor: Bs[Kt % Bs.length],
                                              });
                                            },
                                            children: "⛶",
                                          }),
                                          e.jsx("div", {
                                            className: "moments-inner-title",
                                            children: bs,
                                          }),
                                          e.jsx("div", {
                                            className: "moments-inner-text",
                                            children: ss || "—",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  Kt,
                                );
                              }),
                            }),
                          });
                        })(),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between mb-3 px-1 pt-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex gap-5",
                              children: [
                                e.jsxs("button", {
                                  onClick: () => {
                                    (p(Oe.id),
                                      Gd({
                                        direction: "out",
                                        sender: "me",
                                        messageType: "moment_liked",
                                        text: String(
                                          (Oe == null ? void 0 : Oe.id) || "",
                                        ),
                                        timestamp: Date.now(),
                                      }));
                                  },
                                  className: `transition-colors flex items-center gap-1.5 ${Oe.isLiked ? "text-red-500" : "text-gray-900 hover:text-gray-600"}`,
                                  children: [
                                    e.jsx(zn, {
                                      size: 18,
                                      fill: Oe.isLiked
                                        ? "currentColor"
                                        : "none",
                                      strokeWidth: 1,
                                    }),
                                    Oe.likes > 0 &&
                                      e.jsx("span", {
                                        className: "text-xs font-medium",
                                        children: Oe.likes,
                                      }),
                                  ],
                                }),
                                e.jsxs("button", {
                                  onClick: () => $e(Oe.id, null, Oe.user.name),
                                  className:
                                    "text-gray-900 hover:text-gray-600 flex items-center gap-1.5",
                                  children: [
                                    e.jsx(Ar, { size: 18, strokeWidth: 1 }),
                                    ((Qe = Oe.comments) == null
                                      ? void 0
                                      : Qe.length) > 0 &&
                                      e.jsx("span", {
                                        className: "text-xs font-medium",
                                        children: Oe.comments.length,
                                      }),
                                  ],
                                }),
                                e.jsx("button", {
                                  onClick: () => S(Oe),
                                  className:
                                    "text-gray-900 hover:text-gray-600",
                                  children: e.jsx(ri, {
                                    size: 18,
                                    strokeWidth: 1,
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex items-center gap-4",
                              children:
                                t &&
                                ge &&
                                e.jsx("button", {
                                  onClick: () => A(Oe.id),
                                  className: `transition-colors ${Oe.isPinned ? "text-yellow-500" : "text-gray-900 hover:text-gray-600"}`,
                                  title: Oe.isPinned ? "取消置顶" : "置顶",
                                  children: e.jsx(W0, {
                                    size: 18,
                                    strokeWidth: 1,
                                    fill: Oe.isPinned ? "currentColor" : "none",