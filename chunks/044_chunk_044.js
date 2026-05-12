                      ? void 0
                      : P2.selectedOpeningId,
                  onStartWithOpening: hM,
                }),
                e.jsx(lW, {
                  show: !!fr,
                  onClose: () => oi(null),
                  onConfirm: xM,
                  onArchiveFirst: () => {
                    (oi(null), ga(!0));
                  },
                }),
                e.jsx(cW, {
                  show: !!Yr,
                  onClose: bM,
                  onArchiveFirst: () => {
                    (Tr(null), ga(!0));
                  },
                  onOverwrite: gM,
                }),
                e.jsx(_Y, {
                  show: rs,
                  onClose: () => gs(!1),
                  voiceContent: ps,
                  setVoiceContent: Is,
                  onSend: z6,
                }),
                e.jsx(jW, {
                  data: mi,
                  onClose: () => ti(null),
                  disableAccept: Uc,
                  onAction: dM,
                }),
                e.jsx(zW, {
                  show: Br,
                  onClose: () => kt(!1),
                  showPhoneCase: r,
                  onSelectImage: () => {
                    var mt;
                    (mt = ec.current) == null || mt.click();
                  },
                  onSelectTextImage: () => {
                    (kt(!1), Yt(!0));
                  },
                }),
                e.jsx(RW, {
                  show: Tt,
                  onClose: () => Yt(!1),
                  textImageContent: de,
                  setTextImageContent: Me,
                  onSend: F6,
                }),
                e.jsx(kY, {
                  data: pt,
                  onClose: () => qe(null),
                  disableAccept: !1,
                  onAction: (mt) => {
                    (P(t, pt.messageId, mt), qe(null));
                  },
                }),
                e.jsx(jY, {
                  show: Ge,
                  onClose: () => {
                    (Le(!1), ms(null));
                  },
                  contact: zt || An,
                  transferAmount: _e,
                  setTransferAmount: yt,
                  transferNote: rt,
                  setTransferNote: ze,
                  onNext: () => {
                    !_e ||
                      parseFloat(_e) <= 0 ||
                      (as("transfer"), is(!0), Le(!1));
                  },
                }),
                et &&
                  e.jsx("div", {
                    className:
                      "fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200",
                    onClick: () => mf(),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "couple-ledger-quick-add-title",
                    children: e.jsxs("div", {
                      className:
                        "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl border-4 border-white relative overflow-visible transform rotate-0",
                      onClick: (mt) => mt.stopPropagation(),
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute -top-5 left-1/2 -translate-x-1/2 w-40 h-9 bg-[#ffccbc]/80 rotate-[-2deg] shadow-sm z-10 border-l-2 border-r-2 border-white/50",
                        }),
                        e.jsxs("div", {
                          className:
                            "p-6 pt-8 relative bg-dot-grid rounded-[20px] overflow-hidden",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              className:
                                "absolute top-4 right-4 p-1 hover:bg-[#8d6e63]/10 rounded-full text-[#8d6e63] transition-colors z-20",
                              onClick: () => mf(),
                              "aria-label": "关闭",
                              children: "X",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-col items-center gap-3 mb-5 relative",
                              children: [
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-16 h-16 bg-white p-1 shadow-md rotate-[-3deg] border border-gray-100 rounded-2xl overflow-hidden",
                                      children: e.jsx("div", {
                                        className:
                                          "w-full h-full bg-gradient-to-br from-[#FFB7B2]/60 to-white flex items-center justify-center text-2xl",
                                        children: e.jsxs("svg", {
                                          viewBox: "0 0 24 24",
                                          className: "w-7 h-7 text-[#8d6e63]",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          "aria-hidden": !0,
                                          children: [
                                            e.jsx("path", { d: "M4 7h16" }),
                                            e.jsx("path", {
                                              d: "M4 7l8 6 8-6",
                                            }),
                                            e.jsx("path", {
                                              d: "M6 7v12h12V7",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute -top-2 -right-2 text-[#8d6e63] drop-shadow-sm transform rotate-12",
                                      children: e.jsx("div", {
                                        className:
                                          "w-3.5 h-3.5 border-2 border-[#8d6e63] rounded-[6px] transform rotate-45 bg-white/80",
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "text-center",
                                  children: [
                                    e.jsx("div", {
                                      id: "couple-ledger-quick-add-title",
                                      className:
                                        "text-lg font-black text-[#5d4037] font-serif tracking-tight",
                                      children: "聊天快速记账",
                                    }),
                                    e.jsx("div", {
                                      className: "text-xs text-gray-500 mt-1",
                                      children:
                                        "编辑后确认写入情侣手账（仅支出/收入）",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (() => {
                              const mt = parseFloat(Ut.amount),
                                Bt = Number.isFinite(mt) && mt > 0,
                                Ns = Ut.direction === "income" ? "+" : "-",
                                Ws = Bt ? mt.toFixed(2) : "0.00",
                                mn = (Ut.note || "").trim();
                              return e.jsxs("div", {
                                className:
                                  "mb-5 rounded-[18px] border border-white/60 bg-white/70 shadow-sm overflow-hidden relative",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-r from-[#FFB7B2]/20 via-white/70 to-white/70 pointer-events-none",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "absolute left-0 right-0 top-0 h-4 pointer-events-none",
                                    style: {
                                      backgroundImage:
                                        "radial-gradient(circle, rgba(141,110,99,0.28) 1.3px, transparent 1.4px)",
                                      backgroundSize: "14px 4px",
                                      backgroundPosition: "0 1px",
                                    },
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "absolute left-0 right-0 bottom-0 h-4 pointer-events-none",
                                    style: {
                                      backgroundImage:
                                        "radial-gradient(circle, rgba(141,110,99,0.22) 1.3px, transparent 1.4px)",
                                      backgroundSize: "14px 4px",
                                      backgroundPosition: "0 1px",
                                    },
                                  }),
                                  e.jsxs("div", {
                                    className: "relative p-4",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-start justify-between gap-3",
                                        children: [
                                          e.jsxs("div", {
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/85 border border-gray-100 shadow-sm",
                                                children: [
                                                  e.jsx("span", {
                                                    className: `text-xs font-bold ${Ut.direction === "income" ? "text-emerald-600" : "text-[#8d6e63]"}`,
                                                    children:
                                                      Ut.direction === "income"
                                                        ? "收入票根"
                                                        : "支出票根",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[0.625rem] text-gray-400",
                                                    children: "待写入",
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: `mt-3 text-3xl font-black font-mono ${Ut.direction === "income" ? "text-emerald-600" : "text-[#8d6e63]"}`,
                                                children: [Ns, "¥", Ws],
                                              }),
                                            ],
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "w-14 h-14 rounded-2xl bg-[#f2f0ea] border border-gray-100 flex items-center justify-center text-xl",
                                            children: Ut.image
                                              ? e.jsx("div", {
                                                  className:
                                                    "w-10 h-10 rounded-xl border-2 border-[#FFB7B2]/40 bg-white/70 flex items-center justify-center",
                                                  children: e.jsx("span", {
                                                    className:
                                                      "text-[0.625rem] font-black text-[#8d6e63]",
                                                    children: "图像",
                                                  }),
                                                })
                                              : e.jsx("div", {
                                                  className:
                                                    "w-10 h-10 rounded-xl border-2 border-dashed border-gray-200 bg-white/60 flex items-center justify-center",
                                                  children: e.jsx("span", {
                                                    className:
                                                      "text-[0.625rem] font-black text-gray-400",
                                                    children: "无图",
                                                  }),
                                                }),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "mt-3 text-xs text-gray-500",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "font-bold text-gray-700",
                                            children: "物品/备注：",
                                          }),
                                          e.jsx("span", {
                                            className: mn
                                              ? "text-gray-700"
                                              : "text-gray-400",
                                            children:
                                              mn || "未填写（可手动改）",
                                          }),
                                        ],
                                      }),
                                      Ut.image &&
                                        e.jsx("div", {
                                          className:
                                            "mt-3 flex items-center justify-end",
                                          children: e.jsxs("div", {
                                            className: "relative",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "absolute -top-1 -right-1 w-5 h-5 bg-[#FFB7B2] rounded-full border-2 border-white flex items-center justify-center text-[0.625rem] text-white shadow-sm",
                                                children: "附图",
                                              }),
                                              e.jsx("img", {
                                                src: Ut.image,
                                                alt: "",
                                                className:
                                                  "w-14 h-14 object-cover rounded-lg border border-white shadow-sm transform rotate-2",
                                              }),
                                            ],
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              });
                            })(),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] font-bold text-[#8d6e63]/70 uppercase tracking-wider ml-1 mb-1",
                                      children: "类型",
                                    }),
                                    e.jsx("div", {
                                      className: "flex gap-2",
                                      children: ["expense", "income"].map(
                                        (mt) =>
                                          e.jsx(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () =>
                                                ws((Bt) => ({
                                                  ...Bt,
                                                  direction: mt,
                                                })),
                                              className: `flex-1 py-2 rounded-xl text-sm font-bold border-2 transition-all ${Ut.direction === mt ? (mt === "income" ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-[#FFB7B2] bg-[#FFF0F5] text-[#6B5B55]") : "border-gray-200 bg-white/60 text-gray-400"}`,
                                              children:
                                                mt === "expense"
                                                  ? "支出"
                                                  : "收入",
                                            },
                                            mt,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] font-bold text-[#8d6e63]/70 uppercase tracking-wider ml-1",
                                      children: "金额",
                                    }),
                                    e.jsxs("div", {
                                      className: "relative group",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-black text-[#6B5B55]",
                                          children: "¥",
                                        }),
                                        e.jsx("input", {
                                          type: "number",
                                          step: "0.01",
                                          min: "0",
                                          value: Ut.amount,
                                          onChange: (mt) =>
                                            ws((Bt) => ({
                                              ...Bt,
                                              amount: mt.target.value,
                                            })),
                                          className:
                                            "w-full bg-white border-2 border-gray-100 rounded-xl pl-10 pr-4 py-3 text-2xl font-black text-[#6B5B55] outline-none focus:border-[#ffb7b2] focus:ring-4 focus:ring-[#ffb7b2]/20 transition-all placeholder-[#d7ccc8]",
                                          placeholder: "0.00",
                                          inputMode: "decimal",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] font-bold text-[#8d6e63]/70 uppercase tracking-wider ml-1 mb-1",
                                      children: "物品/备注",
                                    }),
                                    e.jsx("input", {
                                      type: "text",
                                      value: Ut.note,
                                      onChange: (mt) =>
                                        ws((Bt) => ({
                                          ...Bt,
                                          note: mt.target.value,
                                        })),
                                      className:
                                        "w-full bg-white border-2 border-gray-100 rounded-xl px-4 py-3 text-sm text-[#6B5B55] outline-none focus:border-[#ffb7b2] focus:ring-4 focus:ring-[#ffb7b2]/20 transition-all placeholder-[#d7ccc8]",
                                      placeholder: "例如 奶茶/房租/工资",
                                      maxLength: 30,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] font-bold text-[#8d6e63]/70 uppercase tracking-wider ml-1 mb-1",
                                      children: "图片（可选）",
                                    }),
                                    e.jsxs("div", {
                                      className: "mt-1 flex items-center gap-2",
                                      children: [
                                        e.jsx("input", {
                                          type: "file",
                                          accept: "image/*",
                                          className: "hidden",
                                          id: "couple-ledger-quick-add-image",
                                          onChange: x6,
                                        }),
                                        e.jsx("label", {
                                          htmlFor:
                                            "couple-ledger-quick-add-image",
                                          className:
                                            "px-4 py-2 rounded-xl border-2 border-[#FFB7B2]/70 bg-white/70 text-sm font-bold text-[#6B5B55] cursor-pointer hover:bg-white transition-colors",
                                          children: "上传图片",
                                        }),
                                        Ut.image
                                          ? e.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                ws((mt) => ({
                                                  ...mt,
                                                  image: "",
                                                })),
                                              className:
                                                "px-3 py-2 rounded-xl border-2 border-gray-200 bg-white/60 text-sm font-bold text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors",
                                              children: "移除",
                                            })
                                          : null,
                                      ],
                                    }),
                                    Ut.image &&
                                      e.jsxs("div", {
                                        className:
                                          "mt-3 flex items-center gap-3",
                                        children: [
                                          e.jsxs("div", {
                                            className: "relative",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "absolute -top-1 -left-1 w-3 h-3 bg-[#FFB7B2] rounded-full shadow-sm",
                                              }),
                                              e.jsx("img", {
                                                src: Ut.image,
                                                alt: "",
                                                className:
                                                  "w-16 h-16 object-cover rounded-xl border border-white shadow-sm transform rotate-2",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "text-xs text-gray-500 leading-relaxed",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "font-bold text-gray-700",
                                                children: "小贴纸已贴好",
                                              }),
                                              e.jsx("div", {
                                                children:
                                                  "图片会随这条记账一起保存",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "grid grid-cols-2 gap-2 pt-2",
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: h6,
                                      disabled: Ls,
                                      className: `py-3 rounded-xl text-sm font-black border-2 transition-all shadow-[3px_3px_0px_rgba(93,64,55,0.15)] ${Ls ? "bg-gray-300 text-gray-600 cursor-not-allowed border-gray-300 shadow-none" : "bg-[#8d6e63] text-white border-[#795548] hover:translate-y-[1px] active:translate-y-[3px]"}`,
                                      children: Ls ? "保存中..." : "确认",
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: mf,
                                      disabled: Ls,
                                      className:
                                        "py-3 rounded-xl text-sm font-black border-2 border-gray-200 bg-white/70 text-gray-600 hover:bg-white hover:border-gray-300 transition-colors",
                                      children: "取消",
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
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "chat-settings-theme-scope",
          children: [
            e.jsx("style", { children: ca }),
            e.jsx(FW, {
              show: ct,
              onClose: () => Kt(!1),
              contact: An,
              avatarInputRef: Aa,
              showCSSEditor: Qs,
              setShowCSSEditor: Dn,
              presets: Fs,
              activePresetId: Ja,
              setActivePresetId: (mt) => g(t, { activePresetId: mt }),
              handleDeletePreset: xi,
              editingCSS: Ds,
              setEditingCSS: Ps,
              handleUpdatePreset: Gc,
              newPresetName: $s,
              setNewPresetName: Gs,
              handleSavePreset: ci,
              setPresets: Ys,
              chat: ls,
              updateChatSettings: g,
              handleTestTime: _2,
              isTestingTime: At,
              timeTestResult: Ft,
              handleTestWeather: S2,
              isTestingWeather: st,
              weatherTestResult: xs,
              voices: B,
              models: F,
              fetchVoices: D,
              playTTS: S,
              setShowTtsLogs: Ks,
              fileInputRef: xn,
              setShowMemories: nt,
              setShowCallHistory: ts,
              setShowClearConfirm: gn,
              chatId: t,
              updateContact: w,
              ttsConfig: ye,
              setShowHistorySearch: gt,
              helpAssistantScope: Er,
              onHelpAssistantScopeChange: ir,
            }),
            e.jsx(bY, {
              show: Pt,
              onClose: () => Wt(!1),
              contact: An,
              contacts: f,
              sendMessage: m,
              triggerAiReply: h,
              avatarInputRef: Aa,
              showCSSEditor: Qs,
              setShowCSSEditor: Dn,
              presets: Fs,
              activePresetId: Ja,
              setActivePresetId: (mt) => g(t, { activePresetId: mt }),
              handleDeletePreset: xi,
              editingCSS: Ds,
              setEditingCSS: Ps,
              handleUpdatePreset: Gc,
              newPresetName: $s,
              setNewPresetName: Gs,
              handleSavePreset: ci,
              setPresets: Ys,
              chat: ls,
              updateChatSettings: g,
              currentUserName:
                (
                  ((O2 = ls == null ? void 0 : ls.settings) == null
                    ? void 0
                    : O2.myTitle) || ""
                ).trim() ||
                ((B2 = $e == null ? void 0 : $e(An)) == null
                  ? void 0
                  : B2.name) ||
                (p == null ? void 0 : p.name) ||
                "我",
              handleTestTime: _2,
              isTestingTime: At,
              timeTestResult: Ft,
              handleTestWeather: S2,
              isTestingWeather: st,
              weatherTestResult: xs,
              voices: B,
              models: F,
              selectedModel: Ka,
              isFetchingVoices: L,
              fetchVoices: D,
              playTTS: S,
              setShowTtsLogs: Ks,
              fileInputRef: xn,
              novelCharacterPhotoInputRef: Di,
              setShowMemories: nt,
              setShowGroupMemories: Xt,
              setShowCallHistory: ts,
              setShowClearConfirm: gn,
              chatId: t,
              updateContact: w,
              ttsConfig: ye,
              handleAddMembersToGroup: fe,
              handleRemoveMembersFromGroup: He,
              handleLeaveGroup: Ie,
              handleDismissGroup: Ce,
              handleDeleteGroupChat: x,
              memeCategories: oe,
              compressImage: $r,
              archives: W,
              bindSummaryToArchive: ge,
              setShowHistorySearch: gt,
            }),
          ],
        }),
        e.jsx(xW, {
          show: fs,
          onClose: () => gt(!1),
          messages: ls == null ? void 0 : ls.messages,
          isGroup: !!(ls != null && ls.isGroup),
          contacts: f,
          userName:
            (
              ((U2 = ls == null ? void 0 : ls.settings) == null
                ? void 0
                : U2.myTitle) || ""
            ).trim() ||
            ((G2 = $e == null ? void 0 : $e(An)) == null ? void 0 : G2.name) ||
            (p == null ? void 0 : p.name) ||
            "我",
          peerName:
            (An == null ? void 0 : An.remark) ||
            (An == null ? void 0 : An.name) ||
            (An == null ? void 0 : An.nickname) ||
            "对方",
          onJumpToMessage: ho,
        }),
        e.jsxs("div", {
          className: "chat-detail-theme-scope",
          children: [
            e.jsx(yY, {
              show: ae,
              onClose: () => nt(!1),
              summaries: N,
              chatId: t,
              generateSummary: A2,
              isGenerating: bs,
              chat: ls,
              allChats: d,
              contact: An,
              updateContact: w,
              updateChatSettings: g,
              deleteSummary: Ae,
              updateSummary: te,
              calculateTokenEstimate: Se,
              archives: W,
              bindSummaryToArchive: ge,
              unbindSummaryFromArchive: J,
              unbindSummaryFromCurrentSession: G,
              removeSummaryFromArchive: we,
              updateSummaryInArchive: Q,
              updateArchiveSettings: ve,
            }),
            e.jsx(TW, {
              show: It,
              onClose: () => Xt(!1),
              summaries: N,
              chatId: t,
              generateSummary: A2,
              isGenerating: bs,
              chat: ls,
              allChats: d,
              contacts: f,
              updateChatSettings: g,
              deleteSummary: Ae,
              updateSummary: te,
              calculateTokenEstimate: Se,
              archives: W,
              bindSummaryToArchive: ge,
              unbindSummaryFromArchive: J,
              unbindSummaryFromCurrentSession: G,
              removeSummaryFromArchive: we,
              updateSummaryInArchive: Q,
              updateArchiveSettings: ve,
            }),
            e.jsx(NY, {
              show: Ht,
              onClose: () => {
                (is(!1), as(null));
              },
              contact: zt || An,
              transferAmount: _e,
              transferPassword: lt,
              setTransferPassword: it,
              purpose: os || "transfer",
              foodOrderInfo:
                os === "food_order"
                  ? {
                      foodName: Eo,
                      foodPrice: rl,
                      targetName: Il
                        ? Il.remark || Il.name || Il.nickname
                        : "TA",
                    }
                  : null,
              onComplete: (mt) => {
                if (os === "food_order") {
                  try {
                    (z(mt), N2(), is(!1), as(null), it(""));
                  } catch (Bt) {
                    (alert(Bt.message), it(""));
                  }
                  return;
                }
                try {
                  ($(
                    t,
                    parseFloat(_e),
                    rt,
                    mt,
                    zt ? { contactId: zt.id } : void 0,
                  ),
                    is(!1),
                    Le(!1),
                    yt(""),
                    ze(""),
                    it(""),
                    ms(null),
                    as(null));
                } catch (Bt) {
                  (alert(Bt.message), it(""));
                }
              },
            }),
            e.jsx(JW, {
              show: !!Lt,
              onClose: () => Qt(null),
              content: Lt == null ? void 0 : Lt.content,
              reason: Lt == null ? void 0 : Lt.reason,
            }),
            Cs &&
              e.jsx("div", {
                className:
                  "fixed inset-0 z-[80] flex items-center justify-center p-6 bg-black/40",
                onClick: () => us(null),
                children: e.jsxs("div", {
                  className:
                    "bg-white w-full max-w-sm p-6 shadow-xl rounded-lg border border-gray-200",
                  onClick: (mt) => mt.stopPropagation(),
                  children: [
                    e.jsxs("p", {
                      className:
                        "text-sm text-gray-800 font-serif mb-6 leading-relaxed",
                      children: [
                        "「",
                        Cs.memberName,
                        "」尚未配置语音，请前往其单人聊天设置中配置 TTS 后即可播放。",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => us(null),
                          className:
                            "flex-1 py-2.5 border border-gray-200 text-[0.625rem] tracking-widest font-bold text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors uppercase",
                          children: "知道了",
                        }),
                        Cs.contactId &&
                          n &&
                          e.jsx("button", {
                            type: "button",
                            onClick: () => {
                              (n(Cs.contactId), us(null));
                            },
                            className:
                              "flex-1 py-2.5 bg-gray-900 text-white text-[0.625rem] tracking-widest font-bold hover:bg-black transition-colors uppercase",
                            children: "去设置",
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            e.jsx(dW, {
              show: vs,
              onClose: () => ts(!1),
              callHistory: ls.callHistory,
              onSelectCall: Vs,
              toggleCallMemoryMode: (mt) => ie(t, mt),
              onSummarizeCall: (mt) => X(t, mt),
              onDeleteCall: (mt) => je(t, mt),
            }),
            e.jsx(uW, { call: ys, onClose: () => Vs(null), contact: An }),
            Xs &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-[70] bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
                children: e.jsxs("div", {
                  className:
                    "bg-white w-full max-w-xs p-6 shadow-xl animate-in zoom-in-95 duration-200",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-serif italic text-gray-900 mb-2",
                      children: "确认清空？",
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-gray-500 mb-6 leading-relaxed",
                      children: [
                        "此操作将永久删除与 ",
                        An.name,
                        " 的所有聊天记录，且无法恢复。",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx("button", {
                          onClick: () => gn(!1),
                          className:
                            "flex-1 py-3 border border-gray-200 text-[0.625rem] tracking-widest font-bold text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors uppercase",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          onClick: fM,
                          className:
                            "flex-1 py-3 bg-red-500 text-white text-[0.625rem] tracking-widest font-bold hover:bg-red-600 transition-colors uppercase",
                          children: "确认清空",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ft &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-[75] bg-black/35 backdrop-blur-sm flex items-center justify-center p-6",
                onClick: vt,
                children: e.jsxs("div", {
                  className:
                    "relative w-full max-w-sm bg-white border border-[#e6e0d9] shadow-[0_45px_120px_-70px_rgba(0,0,0,0.75)]",
                  style: { borderRadius: 28 },
                  onClick: (mt) => mt.stopPropagation(),
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute -top-2 -left-2 w-full h-full bg-[#fffdf9] border border-[#efe7de] opacity-70 pointer-events-none z-0",
                      style: { borderRadius: 28, transform: "rotate(-0.8deg)" },
                      "aria-hidden": "true",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute -bottom-2 -right-2 w-full h-full bg-[#fffdf9] border border-[#efe7de] opacity-60 pointer-events-none z-0",
                      style: { borderRadius: 28, transform: "rotate(0.6deg)" },
                      "aria-hidden": "true",
                    }),
                    e.jsxs("div", {
                      className: "relative z-10 p-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start justify-between gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-4 min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-full overflow-hidden bg-[#f3f1ee] border border-[#efe7de] flex-shrink-0",
                                  children: (() => {
                                    const mt = (f || []).find(
                                        (Ws) => Ws.id === ft.contactId,
                                      ),
                                      Bt =
                                        (mt == null ? void 0 : mt.remark) ||
                                        (mt == null ? void 0 : mt.nickname) ||
                                        (mt == null ? void 0 : mt.name) ||
                                        "未知角色",
                                      Ns = mt == null ? void 0 : mt.avatar;
                                    return Ns
                                      ? e.jsx("img", {
                                          src: Ns,
                                          alt: Bt,
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
                                        ((H2 = (f || []).find(
                                          (mt) => mt.id === ft.contactId,
                                        )) == null
                                          ? void 0
                                          : H2.remark) ||
                                        ((W2 = (f || []).find(
                                          (mt) => mt.id === ft.contactId,
                                        )) == null
                                          ? void 0
                                          : W2.nickname) ||
                                        ((Y2 = (f || []).find(
                                          (mt) => mt.id === ft.contactId,
                                        )) == null
                                          ? void 0
                                          : Y2.name) ||
                                        "未知角色",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[0.625rem] text-[#b0a8a0] tracking-[0.25em] mt-1",
                                      children: "解除拉黑 / 重新加回好友",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: vt,
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
                                String(ft.text || "").trim() ||
                                "我想重新加你好友，可以吗？",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "relative z-10 px-6 pb-6 flex gap-3",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (ln({ req: ft }), wt(""));
                          },
                          className:
                            "flex-1 py-3 rounded-2xl bg-[#ffebee] text-[#c62828] font-black text-sm hover:bg-[#ffcdd2] transition-colors border border-[#ffcdd2]",
                          children: "拒绝",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            var mt, Bt, Ns, Ws;
                            try {
                              const mn = ft.contactId,
                                Zs =
                                  (d || []).find(
                                    (an) =>
                                      an && !an.isGroup && an.contactId === mn,
                                  ) ||
                                  (ft.chatId
                                    ? (d || []).find(
                                        (an) => an && an.id === ft.chatId,
                                      )
                                    : null);
                              if (Zs != null && Zs.id) {
                                const an =
                                    (mt = Zs.settings) != null &&
                                    mt.blockedRoles &&
                                    typeof Zs.settings.blockedRoles == "object"
                                      ? Zs.settings.blockedRoles
                                      : {},
                                  hn = an == null ? void 0 : an[mn],
                                  Un =
                                    typeof hn == "number"
                                      ? hn
                                      : typeof hn == "object" &&
                                          (hn == null
                                            ? void 0
                                            : hn.blockedAt) != null
                                        ? hn.blockedAt
                                        : Date.now(),
                                  Ha = {
                                    ...an,
                                    [mn]: {
                                      blockedAt: Un,
                                      unblockedAt: Date.now(),
                                    },
                                  };
                                if (
                                  (g(Zs.id, { blockedRoles: Ha }),
                                  m == null ||
                                    m(
                                      Zs.id,
                                      `[系统提示：已解除拉黑 ${((Bt = (f || []).find((ka) => ka.id === mn)) == null ? void 0 : Bt.remark) || ((Ns = (f || []).find((ka) => ka.id === mn)) == null ? void 0 : Ns.nickname) || ((Ws = (f || []).find((ka) => ka.id === mn)) == null ? void 0 : Ws.name) || "对方"}]`,
                                      null,
                                      "system",
                                    ),
                                  typeof h == "function")
                                ) {
                                  const ka = new Date().toISOString(),
                                    $i = {
                                      id: `sys-unblocked-inject-${Date.now()}-${mn}`,
                                      sender: "system",
                                      type: "system",
                                      timestamp: ka,
                                      text: "[系统提示：用户刚刚解除了对你的拉黑。你现在可以把这当成“你主动开口的一次机会”，请读取最近上下文与情绪走向，并用你的人设做出真实反应。\n输出必须像微信短句连发：总共 5–10 句，每句用 `||` 分隔（不要编号、不要长篇大段），每句尽量短，允许停顿与情绪递进。\n若本会话开启了「实时翻译」，请为每一条气泡追加译文标签：在该气泡末尾追加 ` [TRANS:译文]`（译文必须是中文且不含任何英文字母）。保持原文不变，译文用更自然的中文表达。\n禁止提及系统/模型/提示词等元信息。]",
                                    };
                                  setTimeout(() => {
                                    try {
                                      h(Zs.id, !1, "", [
                                        ...((Zs == null
                                          ? void 0
                                          : Zs.messages) || []),
                                        $i,
                                      ]);
                                    } catch {}
                                  }, 220);
                                }
                              }
                            } catch {}
                            (Oe == null ||
                              Oe(ft.id, {
                                status: "accepted",
                                handledAt: Date.now(),
                              }),
                              vt());
                          },
                          className:
                            "flex-1 py-3 rounded-2xl bg-[#2c2c2c] text-white font-bold text-sm hover:bg-black transition-colors",
                          children: "同意",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            (sn == null ? void 0 : sn.req) &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6",
                children: e.jsxs("div", {
                  className:
                    "w-full max-w-sm bg-white border border-[#e6e0d9] shadow-[0_45px_120px_-70px_rgba(0,0,0,0.75)]",
                  style: { borderRadius: 28 },
                  onClick: (mt) => mt.stopPropagation(),
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
                          value: rn,
                          onChange: (mt) => wt(mt.target.value),
                          placeholder: "例如：我现在不想说话。",
                          className:
                            "mt-4 w-full min-h-[120px] bg-[#fbfaf8] border border-[#efe7de] rounded-2xl p-4 text-sm text-[#4a4a4a] outline-none focus:border-[#2c2c2c] focus:ring-2 focus:ring-black/5 resize-none",
                          maxLength: 200,
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-2 text-[0.625rem] text-[#b0a8a0] tracking-widest text-right",
                          children: [String(rn || "").length, "/200"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "px-6 pb-6 flex gap-3",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => ln(null),
                          className:
                            "flex-1 py-3 rounded-2xl bg-[#f3f1ee] text-[#4a4a4a] font-bold text-sm hover:bg-[#ede9e4] transition-colors",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            var Ws, mn, Zs;
                            const mt = sn == null ? void 0 : sn.req;
                            if (!(mt != null && mt.id)) {
                              ln(null);
                              return;
                            }
                            const Bt = mt.contactId,
                              Ns = String(rn || "")
                                .trim()
                                .slice(0, 200);
                            Oe == null ||
                              Oe(mt.id, {
                                status: "rejected",
                                handledAt: Date.now(),
                                rejectReason: Ns || "",
                              });
                            try {
                              const an =
                                (d || []).find(
                                  (hn) =>
                                    hn && !hn.isGroup && hn.contactId === Bt,
                                ) ||
                                (mt.chatId
                                  ? (d || []).find(
                                      (hn) => hn && hn.id === mt.chatId,
                                    )
                                  : null);
                              if (an != null && an.id) {
                                const hn =
                                  ((Ws = (f || []).find(
                                    (Un) => Un.id === Bt,
                                  )) == null
                                    ? void 0
                                    : Ws.remark) ||
                                  ((mn = (f || []).find(
                                    (Un) => Un.id === Bt,
                                  )) == null
                                    ? void 0
                                    : mn.nickname) ||
                                  ((Zs = (f || []).find(
                                    (Un) => Un.id === Bt,
                                  )) == null
                                    ? void 0
                                    : Zs.name) ||
                                  "对方";
                                if (
                                  (m == null ||
                                    m(
                                      an.id,
                                      `[系统提示] 你拒绝了 ${hn} 的解除拉黑申请${Ns ? `：${Ns}` : ""}`,
                                      null,
                                      "system",
                                    ),
                                  typeof h == "function")
                                ) {
                                  const Un = {
                                    id: `sys-reject-unblock-${Date.now()}-${Bt}`,
                                    sender: "system",
                                    type: "system",
                                    timestamp: new Date().toISOString(),
                                    text: `[系统提示：用户拒绝了解除对你的拉黑。${Ns ? `用户给出的拒绝理由是：「${Ns}」。` : "用户未填写理由。"}
你必须承接最近上下文与此理由，用你的人设做出真实反应。
输出必须像微信短句连发：总共 5–10 句，每句用 \`||\` 分隔（不要编号、不要长篇大段），每句尽量短，允许停顿与情绪递进。
若本会话开启了「实时翻译」，请为每一条气泡追加译文标签：在该气泡末尾追加 \` [TRANS:译文]\`（译文必须是中文且不含任何英文字母）。保持原文不变，译文用更自然的中文表达。
禁止提及系统/模型/提示词等元信息。]`,
                                  };
                                  setTimeout(() => {
                                    try {
                                      h(an.id, !1, "", [
                                        ...(an.messages || []),
                                        Un,
                                      ]);
                                    } catch {}
                                  }, 220);
                                }
                              }
                            } catch {}
                            (ln(null), vt());
                          },
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
        }),
      ],
    });
  },
  rd = "chat_app_contacts_tab_order",
  xu = "chat_app_contacts_tab_hidden",
  C0 = "chat_app_icity_group_rail_enabled";
function jm(t) {
  return !(t === !1 || t === "false" || t === 0);
}
const M0 = "chat_app_icity_group_rail_variant";
function Nm(t) {
  return t === "capsule" ? "capsule" : "divider";
}
const Zf = "chat_app_icity_group_rail_capsule_colors",
  BN = "chat_app_icity_list_active_group",
  T0 = "chat_app_icity_list_block_order",
  MY = ["story", "quote", "groups"];
function TY(t) {
  return typeof t != "string"
    ? null
    : t === "story" || t === "quote" || t === "groups"
      ? t
      : t === "top"
        ? "story"
        : t === "middle"
          ? "quote"
          : t === "bottom"
            ? "groups"
            : null;
}
function Bl(t) {
  const s = [...MY];
  if (!Array.isArray(t)) return s;
  const n = new Set(),
    a = [];
  for (const r of t) {
    const i = TY(r);
    i && !n.has(i) && (n.add(i), a.push(i));
  }
  for (const r of s) n.has(r) || a.push(r);
  return a;
}
const eo = 100;
function Xf(t) {
  const s = typeof t == "number" ? t : parseInt(String(t), 10);
  return Number.isFinite(s) ? Math.min(eo, Math.max(0, Math.round(s))) : eo;
}
function Tb(t, s = String(eo)) {
  const n = Xf(s);
  if (t == null) return String(n);
  const a = String(t).trim();
  if (!a) return String(n);
  if (/^\d+$/.test(a)) return String(Xf(parseInt(a, 10)));
  const r = a.match(/^(\d+(?:\.\d+)?)\s*px$/i);
  if (r) return String(Xf(Math.round(parseFloat(r[1]))));
  const i = a.match(/^(\d+(?:\.\d+)?)\s*rem$/i);
  return i
    ? String(Xf(Math.round(parseFloat(i[1]) * 16)))
    : /9999/i.test(a) || /^50%\s*(\/\s*50%)?$/i.test(a)
      ? String(eo)
      : String(n);
}
function Ib(t) {
  return `${Xf(parseInt(String(t), 10))}px`;
}
const yc = {
    outerBg: "#ebebeb",
    selectedBg: "#ffffff",
    selectedFg: "#1a1a1a",
    idleFg: "#999999",
    outerRadius: "100",
    selectedRadius: "100",
    avatarImgRadius: "100",
  },
  em = "chat_app_icity_list_font_colors",
  da = {
    topReadingFg: "#111111",
    topMessageFg: "#111111",
    topOnlineFg: "#9ca3af",
    bgUploadFg: "#999999",
    quoteMainFg: "#333333",
    quoteInfoFg: "#999999",
    lyricMainFg: "#222222",
    lyricMetaFg: "#aaaaaa",
    lyricControlsFg: "#cccccc",
    storyNameFg: "#4b5563",
    todoVerticalTextFg: "#333333",
    todoTimeFg: "#bbbbbb",
    railDividerIdleFg: "#999999",
    railDividerActiveFg: "#222222",
    railDividerBarFg: "#d1d1d1",
    chatVerticalName: "#000000",
    chatMsg: "#666666",
    chatTimeMeta: "#cccccc",
  };
function km(t) {
  const s = da;
  if (!t || typeof t != "object" || Array.isArray(t)) return { ...s };
  const n = t,
    a = (r, i) => {
      const o = n[r];
      return typeof o == "string" && o.trim() ? o.trim() : i;
    };
  return {
    topReadingFg: a("topReadingFg", s.topReadingFg),
    topMessageFg: a("topMessageFg", s.topMessageFg),
    topOnlineFg: a("topOnlineFg", s.topOnlineFg),
    bgUploadFg: a("bgUploadFg", s.bgUploadFg),
    quoteMainFg: a("quoteMainFg", s.quoteMainFg),
    quoteInfoFg: a("quoteInfoFg", s.quoteInfoFg),
    lyricMainFg: a("lyricMainFg", s.lyricMainFg),
    lyricMetaFg: a("lyricMetaFg", s.lyricMetaFg),
    lyricControlsFg: a("lyricControlsFg", s.lyricControlsFg),
    storyNameFg: a("storyNameFg", s.storyNameFg),
    todoVerticalTextFg: a("todoVerticalTextFg", s.todoVerticalTextFg),
    todoTimeFg: a("todoTimeFg", s.todoTimeFg),
    railDividerIdleFg: a("railDividerIdleFg", s.railDividerIdleFg),
    railDividerActiveFg: a("railDividerActiveFg", s.railDividerActiveFg),
    railDividerBarFg: a(
      "railDividerBarFg",
      a(
        "railDividerBarIdleFg",
        a("railDividerBarActiveFg", s.railDividerBarFg),
      ),
    ),
    chatVerticalName: a("chatVerticalName", s.chatVerticalName),
    chatMsg: a("chatMsg", s.chatMsg),
    chatTimeMeta: a("chatTimeMeta", s.chatTimeMeta),
  };
}
function Sm(t) {
  const s = yc;
  if (!t || typeof t != "object" || Array.isArray(t)) return { ...s };
  const n = t,
    a = (r, i) => {
      const o = n[r];
      return typeof o == "string" && o.trim() ? o.trim() : i;
    };
  return {
    outerBg: a("outerBg", s.outerBg),
    selectedBg: a("selectedBg", s.selectedBg),
    selectedFg: a("selectedFg", s.selectedFg),
    idleFg: a("idleFg", s.idleFg),
    outerRadius: Tb(n.outerRadius, s.outerRadius),
    selectedRadius: Tb(n.selectedRadius, s.selectedRadius),
    avatarImgRadius: Tb(n.avatarImgRadius, s.avatarImgRadius),
  };
}
function IY(t, s = "#999999") {
  if (typeof t != "string") return s;
  const a = t.trim().match(/^#([0-9a-fA-F]{6})$/);
  return a ? `#${a[1].toLowerCase()}` : s;
}
const w1 = "chat_app_contacts_tab_order_updated";
function Ri(t) {
  if (typeof window > "u") return;
  const s = Array.isArray(t)
    ? { order: t }
    : t && typeof t == "object"
      ? t
      : {};
  window.dispatchEvent(new CustomEvent(w1, { detail: s }));
}
function EY(t, s, n) {
  const a = [...t],
    [r] = a.splice(s, 1);
  return (a.splice(n, 0, r), a);
}
function YA(t, s) {
  if (!Array.isArray(t) || !t.length) return t || [];
  const n = new Set(Array.isArray(s) ? s : []);
  return t.filter((a) => !n.has(a));
}
function LY(t, s, n, a) {
  if (!Array.isArray(t) || !t.length) return t || [];
  const r = new Set(Array.isArray(s) ? s : []),
    i = t.filter((f) => !r.has(f)),
    o = i.indexOf(n),
    c = i.indexOf(a);
  if (o < 0 || c < 0) return t;
  const d = EY(i, o, c);
  let u = 0;
  return t.map((f) => (r.has(f) ? f : d[u++]));
}
const ya = "__all__",
  xa = "__group_chats__";
function j1(t, s, n) {
  const a = [ya, ...(n ? [xa] : []), ...(s || [])];
  if (!Array.isArray(t) || !t.length) return a;
  const r = [],
    i = new Set(),
    o = new Set(s || []);
  for (const c of t)
    c === ya && !i.has(ya)
      ? (r.push(ya), i.add(ya))
      : c === xa && n && !i.has(xa)
        ? (r.push(xa), i.add(xa))
        : c !== ya &&
          c !== xa &&
          o.has(c) &&
          !i.has(c) &&
          (r.push(c), i.add(c));
  if ((i.has(ya) || r.unshift(ya), n && !i.has(xa))) {
    const c = r.indexOf(ya);
    r.splice(c + 1, 0, xa);
  }
  for (const c of s || []) i.has(c) || (r.push(c), i.add(c));
  return r;
}
function DY(t, s) {
  const n = [ya, xa, ...(s || [])];
  if (!Array.isArray(t) || !t.length) return n;
  const a = [],
    r = new Set(),
    i = new Set(s || []);
  for (const o of t)
    o === ya && !r.has(ya)
      ? (a.push(ya), r.add(ya))
      : o === xa && !r.has(xa)
        ? (a.push(xa), r.add(xa))
        : o !== ya &&
          o !== xa &&
          i.has(o) &&
          !r.has(o) &&
          (a.push(o), r.add(o));
  if ((r.has(ya) || a.unshift(ya), !r.has(xa))) {
    const o = a.indexOf(ya);
    a.splice(o + 1, 0, xa);
  }
  for (const o of s || []) r.has(o) || (a.push(o), r.add(o));
  return a;
}
const Eb = "chat_app_chatList_widgetCapsuleHidden",
  VA = "chat_app_chatList_weather",
  $Y = 10 * 60 * 1e3,
  UN = "chat_app_icity_story_contacts",
  GN = "chat_app_icity_quote_text",
  HN = "chat_app_icity_quote_info",
  WN = "chat_app_icity_lyric_text",
  YN = "chat_app_icity_lyric_meta",
  VN = "chat_app_icity_top_variant",
  JN = "chat_app_icity_middle_card_mode",
  KN = "chat_app_icity_todo_1_title",
  qN = "chat_app_icity_todo_1_time",
  QN = "chat_app_icity_todo_2_title",
  ZN = "chat_app_icity_todo_2_time",
  XN = "chat_app_icity_todo_1_bg",
  ek = "chat_app_icity_todo_2_bg",
  Lb = "chat_app_icity_list_variant",
  vo = "__group_chats__",
  FY = "chatApp_groupChatShortcut",
  tk = "chat_app_bg_image",
  Db = "chat_app_bg_updated",
  lc = (t, s) => {
    try {
      const n = localStorage.getItem(t);
      return n != null && n !== "" ? n : s;
    } catch {
      return s;
    }
  },
  sk = () => {
    try {
      const t = localStorage.getItem(VA);
      if (!t) return null;
      const s = JSON.parse(t);
      if (s && typeof s.temp == "number") return s;
    } catch {}
    return null;
  },
  nk = (t, s, n) => {
    try {
      localStorage.setItem(
        VA,
        JSON.stringify({
          temp: t,
          latitude: s,
          longitude: n,
          savedAt: Date.now(),
        }),
      );
    } catch {}
  },
  zY = () => {
    try {
      const t = localStorage.getItem(FY);
      if (t) {
        const s = JSON.parse(t);
        if (s && typeof s.label == "string" && typeof s.color == "string")
          return { label: s.label, color: s.color };
      }
    } catch {}
    return { label: "群聊", color: "#FFF1F7" };
  },
  ak = ({ onSelectChat: t, onClose: s }) => {
    var rt;
    const {
        chats: n,
        contacts: a,
        deleteChat: r,
        profileTheme: i,
        user: o,
        groups: c,
        allGroupSettings: d,
        beautifyCustomListCss: u,
      } = vn(),
      f = i === "default" && !!String(u ?? "").trim(),
      [p, m] = l.useState(0),
      [h, g] = l.useState(0),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(""),
      [N, w] = l.useState(!1),
      [_, A] = l.useState(!1),
      [k, C] = l.useState(!1),
      [M, E] = l.useState(!1),
      [S, j] = l.useState(""),
      [T, I] = l.useState(!1),
      [L, B] = l.useState(() => {
        const ze = sk();
        return ze ? { temp: ze.temp, loading: !1 } : { temp: 23, loading: !1 };
      }),
      [F, D] = l.useState(() => {
        try {
          return localStorage.getItem(Eb) === "true";
        } catch {
          return !1;
        }
      }),
      $ = l.useRef(null),
      P = l.useRef(null),
      z = l.useRef(null),
      O = l.useRef(null),
      [Z, K] = l.useState(!1),
      [q, V] = l.useState(() => {
        try {
          const ze = localStorage.getItem(UN),
            lt = ze ? JSON.parse(ze) : null;
          return Array.isArray(lt)
            ? lt.map(String).filter(Boolean).slice(0, 3)
            : [];
        } catch {
          return [];
        }
      }),
      [ne, le] = l.useState(() => {
        try {
          const ze = localStorage.getItem(JN);
          return ze === "lyric" || ze === "quote" ? ze : "quote";
        } catch {
          return "quote";
        }
      }),
      [ie, X] = l.useState(() => {
        try {
          const ze = localStorage.getItem(VN);
          return ze === "todo" || ze === "stories" ? ze : "stories";
        } catch {
          return "stories";
        }
      }),
      [je, xe] = l.useState(() => {
        try {
          const ze = localStorage.getItem(Lb);
          return ze === "vertical" || ze === "default" ? ze : "default";
        } catch {
          return "default";
        }
      }),
      [ye, R] = l.useState(() => lc(GN, "人是一根有思想的苇草。")),
      [oe, ee] = l.useState(() => lc(HN, "帕斯卡尔 / 《思想录》")),
      [H, Y] = l.useState(!1),
      [U, ce] = l.useState(!1),
      pe = l.useRef(null),
      se = l.useRef(null),
      Te = `" 这一生关于你的风景。
我只想，收藏在，心底。 "`,
      [ke, W] = l.useState(() => lc(WN, Te)),
      [ue, re] = l.useState(() => lc(YN, "枯木逢春 / 《关于你》")),
      [he, ge] = l.useState(!1),
      [J, G] = l.useState(!1),
      we = l.useRef(null),
      Q = l.useRef(null),
      [ve, Ve] = l.useState(() => lc(KN, "深夜写一封信")),
      [Ae, te] = l.useState(() => lc(qN, "00:15 AM")),
      [Se, Fe] = l.useState(() => lc(QN, "收集今日落日")),
      [$e, tt] = l.useState(() => lc(ZN, "05:40 PM")),
      [Xe, ht] = l.useState(""),
      [Pe, ut] = l.useState(""),
      [_t, Ee] = l.useState(!1),
      [fe, He] = l.useState(!1),
      [Ie, Ce] = l.useState(!1),
      [Re, De] = l.useState(!1),
      at = l.useRef(null),
      ft = l.useRef(null),
      vt = l.useRef(null),
      Oe = l.useRef(null),
      Qe = l.useRef(null),
      Ye = l.useRef(null);
    l.useEffect(() => {
      let ze = !0;
      return (
        (async () => {
          const [lt, it] = await Promise.all([be.get(XN, ""), be.get(ek, "")]);
          ze &&
            (ht(typeof lt == "string" ? lt : ""),
            ut(typeof it == "string" ? it : ""));
        })(),
        () => {
          ze = !1;
        }
      );
    }, []);
    const Ze = async (ze, lt) => {
        if (lt)
          try {
            const it = await $r(lt, 900, 0.75);
            ze === 1
              ? (ht(it || ""), await be.set(XN, it || ""))
              : (ut(it || ""), await be.set(ek, it || ""));
          } catch {}
      },
      [Ue, me] = l.useState(null),
      [jt, Gt] = l.useState([]),
      [Pt, Wt] = l.useState(!0),
      [ct, Kt] = l.useState("divider"),
      [fs, gt] = l.useState(() => ({ ...yc })),
      [ae, nt] = l.useState(() => ({ ...da })),
      [It, Xt] = l.useState(() => Bl(null)),
      [, bs] = l.useState(0),
      [ss, _s] = l.useState("全部"),
      qs = l.useRef(!1);
    (l.useEffect(() => {
      let ze = !0;
      return (
        (async () => {
          const lt = await be.get(rd, null);
          ze && Array.isArray(lt) && lt.length && me(lt);
        })(),
        () => {
          ze = !1;
        }
      );
    }, []),
      l.useEffect(() => {
        let ze = !0;
        return (
          (async () => {
            const lt = await be.get(xu, []);
            ze && Array.isArray(lt) && Gt(lt);
          })(),
          () => {
            ze = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        let ze = !0;
        return (
          (async () => {
            const [lt, it, Ht, is, os, as] = await Promise.all([
              be.get(C0, !0),
              be.get(M0, "divider"),
              be.get(Zf, null),
              be.get(em, null),
              be.get(BN, null),
              be.get(T0, null),
            ]);
            ze &&
              (Wt(jm(lt)),
              Kt(Nm(it)),
              gt(Sm(Ht)),
              nt(km(is)),
              Xt(Bl(as)),
              typeof os == "string" && os.trim() && _s(os.trim()),
              (qs.current = !0));
          })(),
          () => {
            ze = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        i === "icity" && qs.current && be.set(BN, ss);
      }, [i, ss]),
      l.useEffect(() => {
        const ze = (lt) => {
          const {
            order: it,
            hidden: Ht,
            icityGroupRailEnabled: is,
            icityGroupRailVariant: os,
            icityCapsuleColors: as,
            icityListFontColors: vs,
            icityListBlockOrder: ts,
          } = (lt == null ? void 0 : lt.detail) || {};
          let ys = !1;
          (Array.isArray(it) && (me(it), (ys = !0)),
            Array.isArray(Ht) && (Gt(Ht), (ys = !0)),
            is !== void 0 && (Wt(jm(is)), (ys = !0)),
            os !== void 0 && (Kt(Nm(os)), (ys = !0)),
            as != null && (gt(Sm(as)), (ys = !0)),
            vs != null && (nt(km(vs)), (ys = !0)),
            ts != null && (Xt(Bl(ts)), (ys = !0)),
            ys || bs((Vs) => Vs + 1));
        };
        return (
          window.addEventListener(w1, ze),
          () => window.removeEventListener(w1, ze)
        );
      }, []));
    const Bs = l.useMemo(() => {
        const ze = fs;
        return {
          "--icity-capsule-outer-bg": ze.outerBg,
          "--icity-capsule-selected-bg": ze.selectedBg,
          "--icity-capsule-selected-fg": ze.selectedFg,
          "--icity-capsule-idle-fg": ze.idleFg,
          "--icity-capsule-outer-radius": Ib(ze.outerRadius),
          "--icity-capsule-selected-radius": Ib(ze.selectedRadius),
          "--icity-avatar-img-radius": Ib(ze.avatarImgRadius),
        };
      }, [fs]),
      Js = l.useMemo(() => {
        const ze = ae;
        return {
          "--icity-top-reading-fg": ze.topReadingFg,
          "--icity-top-message-fg": ze.topMessageFg,
          "--icity-top-online-fg": ze.topOnlineFg,
          "--icity-bg-upload-fg": ze.bgUploadFg,
          "--icity-quote-main-fg": ze.quoteMainFg,
          "--icity-quote-info-fg": ze.quoteInfoFg,
          "--icity-lyric-main-fg": ze.lyricMainFg,
          "--icity-lyric-meta-fg": ze.lyricMetaFg,
          "--icity-lyric-controls-fg": ze.lyricControlsFg,
          "--icity-story-name-fg": ze.storyNameFg,
          "--icity-todo-vertical-text-fg": ze.todoVerticalTextFg,
          "--icity-todo-time-fg": ze.todoTimeFg,
          "--icity-font-chat-vertical-name": ze.chatVerticalName,
          "--icity-font-chat-msg": ze.chatMsg,
          "--icity-font-chat-time-meta": ze.chatTimeMeta,
          "--icity-rail-divider-idle-fg": ze.railDividerIdleFg,
          "--icity-rail-divider-active-fg": ze.railDividerActiveFg,
          "--icity-rail-divider-bar-fg": ze.railDividerBarFg,
        };
      }, [ae]),
      Xs = (n || []).some((ze) => (ze == null ? void 0 : ze.isGroup) === !0),
      gn = l.useMemo(() => j1(Ue, c, Xs), [Ue, c, Xs]),
      sn = l.useMemo(() => YA(gn, jt), [gn, jt]),
      ln = zY();
    l.useEffect(() => {
      let ze = !0;
      (async () => {
        const it = await be.get(tk, "");
        ze && typeof it == "string" && j(it);
      })();
      const lt = (it) => {
        var is;
        const Ht =
          (is = it == null ? void 0 : it.detail) == null
            ? void 0
            : is.backgroundImage;
        typeof Ht == "string" && j(Ht);
      };
      return (
        window.addEventListener(Db, lt),
        () => {
          ((ze = !1), window.removeEventListener(Db, lt));
        }
      );
    }, []);
    const rn = () => {
      const ze = O.current;
      if (!ze) return;
      const lt = ze.scrollTop > 8;
      I((it) => (it === lt ? it : lt));
    };
    (l.useEffect(() => {
      H && pe.current && pe.current.focus();
    }, [H]),
      l.useEffect(() => {
        U && se.current && se.current.focus();
      }, [U]),
      l.useEffect(() => {
        he && we.current && we.current.focus();
      }, [he]),
      l.useEffect(() => {
        J && Q.current && Q.current.focus();
      }, [J]),
      l.useEffect(() => {
        _t && at.current && at.current.focus();
      }, [_t]),
      l.useEffect(() => {
        fe && ft.current && ft.current.focus();
      }, [fe]),
      l.useEffect(() => {
        Ie && vt.current && vt.current.focus();
      }, [Ie]),
      l.useEffect(() => {
        Re && Oe.current && Oe.current.focus();
      }, [Re]),
      l.useEffect(() => {
        if (i === "icity")
          try {
            localStorage.setItem(VN, ie);
          } catch {}
      }, [i, ie]),
      l.useEffect(() => {
        if (i === "icity")
          try {
            localStorage.setItem(JN, ne);
          } catch {}
      }, [i, ne]),
      l.useEffect(() => {
        if (i === "icity")
          try {
            localStorage.setItem(Lb, je);
          } catch {}
      }, [i, je]),
      l.useEffect(() => {
        i === "icity" &&
          (ss === "全部" ||
            ss === vo ||
            (Array.isArray(c) && c.includes(ss)) ||
            _s("全部"));
      }, [c, i]),
      l.useEffect(() => {
        i === "icity" && ss === vo && !Xs && _s("全部");
      }, [n, ss, i, Xs]),
      l.useEffect(() => {
        if (i !== "icity") return;
        const ze = new Set(jt || []);
        if (ss === vo && ze.has(xa)) {
          _s("全部");
          return;
        }
        ss !== "全部" && ss !== vo && ze.has(ss) && _s("全部");
      }, [i, ss, jt]));
    const wt = () => {
        xe((ze) => {
          const lt = ze === "default" ? "vertical" : "default";
          try {
            localStorage.setItem(Lb, lt);
          } catch {}
          return lt;
        });
      },
      xs = () => {
        D(!0);
        try {
          localStorage.setItem(Eb, "true");
        } catch {}
      },
      ot = () => {
        try {
          D(localStorage.getItem(Eb) === "true");
        } catch {}
      };
    l.useEffect(
      () => (
        window.addEventListener("focus", ot),
        (window.__chatListWidgetRestored = ot),
        () => {
          (window.removeEventListener("focus", ot),
            delete window.__chatListWidgetRestored);
        }
      ),
      [],
    );
    const st = (ze) => (a || []).find((lt) => lt.id === ze),
      $t = (ze) => _$(ze, st),
      Ft = (ze) => A$(ze, st),
      es = (ze) => {
        try {
          localStorage.setItem(
            UN,
            JSON.stringify((ze || []).map(String).slice(0, 3)),
          );
        } catch {}
      },
      At = () => {
        if (!L.loading) {
          if ((B((ze) => ({ ...ze, loading: !0 })), !navigator.geolocation)) {
            (alert("您的浏览器不支持地理位置功能"),
              B((ze) => ({ ...ze, loading: !1 })));
            return;
          }
          navigator.geolocation.getCurrentPosition(
            async (ze) => {
              try {
                const { latitude: lt, longitude: it } = ze.coords,
                  is = await (
                    await fetch(
                      `https://api.open-meteo.com/v1/forecast?latitude=${lt}&longitude=${it}&current_weather=true`,
                    )
                  ).json(),
                  os = Math.round(is.current_weather.temperature);
                (B({ temp: os, loading: !1 }), nk(os, lt, it));
              } catch {
                B((it) => ({ ...it, loading: !1 }));
              }
            },
            (ze) => {
              (alert("无法获取您的位置"), B((lt) => ({ ...lt, loading: !1 })));
            },
          );
        }
      };
    l.useEffect(() => {
      const ze = sk();
      if (
        !ze ||
        ze.latitude == null ||
        ze.longitude == null ||
        Date.now() - (ze.savedAt || 0) < $Y
      )
        return;
      const it = new AbortController();
      return (
        (async () => {
          try {
            const is = await (
                await fetch(
                  `https://api.open-meteo.com/v1/forecast?latitude=${ze.latitude}&longitude=${ze.longitude}&current_weather=true`,
                  { signal: it.signal },
                )
              ).json(),
              os = Math.round(is.current_weather.temperature);
            (B((as) => (as.loading ? as : { temp: os, loading: !1 })),
              nk(os, ze.latitude, ze.longitude));
          } catch (Ht) {
            Ht.name;
          }
        })(),
        () => it.abort()
      );
    }, []);
    const Jt = (ze) =>
      new Date(ze).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    l.useEffect(() => {
      A(!0);
      const ze = setTimeout(() => A(!1), 300);
      return () => clearTimeout(ze);
    }, [v]);
    const Vt = [...(n || [])].sort((ze, lt) => {
        var it, Ht, is, os;
        if (v) {
          const as = (
              ze.isGroup
                ? ze.groupName
                : `${((it = st(ze.contactId)) == null ? void 0 : it.remark) || ""} ${((Ht = st(ze.contactId)) == null ? void 0 : Ht.name) || ""}`
            ).toLowerCase(),
            vs = (
              lt.isGroup
                ? lt.groupName
                : `${((is = st(lt.contactId)) == null ? void 0 : is.remark) || ""} ${((os = st(lt.contactId)) == null ? void 0 : os.name) || ""}`
            ).toLowerCase(),
            ts = v.toLowerCase(),
            ys = as.includes(ts),
            Vs = vs.includes(ts);
          if (ys && !Vs) return -1;
          if (!ys && Vs) return 1;
        }
        return ze.isPinned !== lt.isPinned
          ? lt.isPinned
            ? 1
            : -1
          : new Date(lt.timestamp) - new Date(ze.timestamp);
      }),
      qt =
        i !== "icity" || !Pt || ss === "全部"
          ? Vt
          : ss === vo
            ? Vt.filter((ze) => (ze == null ? void 0 : ze.isGroup) === !0)
            : Vt.filter((ze) => {
                if (
                  (ze == null ? void 0 : ze.isGroup) === !0 ||
                  !(ze != null && ze.contactId)
                )
                  return !1;
                const lt = (a || []).find(
                  (Ht) => Ht && String(Ht.id) === String(ze.contactId),
                );
                return ((lt == null ? void 0 : lt.group) || "默认分组") === ss;
              }),
      Lt = (() => {
        const ze = [];
        for (const lt of Vt) {
          if (!lt || lt.isGroup || !lt.contactId) continue;
          const it = String(lt.contactId);
          if (
            !ze.includes(it) &&
            (a || []).some(
              (Ht) => String(Ht == null ? void 0 : Ht.id) === it,
            ) &&
            (ze.push(it), ze.length >= 3)
          )
            break;
        }
        return ze;
      })(),
      Qt = Array.isArray(q) && q.length === 3 ? q : Lt;
    l.useEffect(() => {
      i === "icity" &&
        ((Array.isArray(q) && q.length === 3) ||
          (Lt.length === 3 && (V(Lt), es(Lt))));
    }, [i, n, a]);
    const js = Qt.map((ze) =>
        (a || []).find(
          (lt) => String(lt == null ? void 0 : lt.id) === String(ze),
        ),
      ).filter(Boolean),
      cs = (ze) => {
        (($.current = ze.targetTouches[0].clientX), y(!0));
      },
      Ne = (ze) => {
        if (!x || $.current === null) return;
        const it = ze.targetTouches[0].clientX - $.current;
        g(it);
      },
      Je = () => {
        y(!1);
        const ze = 100;
        (h > ze ? m((lt) => lt - 1) : h < -ze && m((lt) => lt + 1),
          g(0),
          ($.current = null));
      },
      St = () => {
        if (k || Vt.length <= 1) return;
        C(!0);
        let ze = 0;
        const lt = 12,
          it = setInterval(() => {
            const Ht = Math.floor(Math.random() * Vt.length);
            (m(Ht), ze++, ze >= lt && (clearInterval(it), C(!1)));
          }, 80);
      },
      Be = (ze, lt) => {
        (ze.stopPropagation(), window.confirm("确定要删除该对话吗？") && r(lt));
      },
      Ke = async (ze) => {
        var it;
        const lt = (it = ze.target.files) == null ? void 0 : it[0];
        if (((ze.target.value = ""), !!lt)) {
          E(!0);
          try {
            const Ht = await $r(lt, 1800, 0.82);
            (await be.set(tk, Ht),
              window.dispatchEvent(
                new CustomEvent(Db, { detail: { backgroundImage: Ht } }),
              ),
              navigator.vibrate && navigator.vibrate(20));
          } catch {
            alert("背景上传失败，请重试");
          } finally {
            E(!1);
          }
        }
      },
      Nt = 4,
      bt = Vt.length,
      ns = (ze) => (bt === 0 ? 0 : ((ze % bt) + bt) % bt),
      Ge = (ze, lt, it, Ht) => {
        const is = ze === 0,
          os = ze,
          as = (os % 2 === 0 ? 1 : -1) * 6,
          vs = as + Math.sin(os * 123) * 8,
          ys = (os % 2 === 0 ? -1 : 1) * 15 + Math.cos(os * 456) * 20,
          Vs = Math.sin(os * 789) * 15;
        let pt = "",
          qe = 1,
          dt = 100 - ze,
          xt = is ? "auto" : "none",
          zt = x && is ? "none" : "all",
          ms = x && is ? "0s" : "0.5s",
          Cs = x && is ? "ease" : "cubic-bezier(0.23, 1, 0.32, 1)",
          us = `${ze * 50}ms`;
        if (it) ((pt = "translateY(100px) scale(0.8)"), (qe = 0), (us = "0ms"));
        else if (Ht)
          ((pt = `scale(0.95) rotate(${as}deg)`),
            (ms = "0.08s"),
            (Cs = "ease-out"),
            (us = "0ms"));
        else if (is) pt = `translateX(${lt}px) rotate(${lt * 0.05}deg)`;
        else {
          const Rs = 1 - ze * 0.05,
            Rt = ze * 10 + Vs;
          ((pt = `
        translate(${ys}px, ${Rt}px) 
        scale(${Rs}) 
        rotate(${vs}deg)
      `),
            (qe = Math.max(0, 1 - ze * 0.1)));
        }
        return {
          transform: pt,
          opacity: qe,
          zIndex: dt,
          pointerEvents: xt,
          transitionProperty: zt,
          transitionDuration: ms,
          transitionTimingFunction: Cs,
          transitionDelay: us,
        };
      },
      Le = i === "icity",
      yt =
        (i === "default" && !f) || i === "my_icity" || i === "music"
          ? { transform: "scale(0.88)", transformOrigin: "center center" }
          : void 0;
    return e.jsxs("div", {
      className: `chat-app-chat-list flex flex-col h-full overflow-hidden relative ${!f && !S ? "bg-[#F2F1F6]" : ""}`,
      ...(Le ? { "data-theme-icity": !0 } : {}),
      ...(S && !f ? { "data-custom-bg": "true" } : {}),
      ...(f ? { "data-beautify-custom-list": "on" } : {}),
      style: {
        ...(S && !f
          ? {
              backgroundImage: `url(${S})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
        ...(Le ? Bs : {}),
        ...(Le ? Js : {}),
      },
      children: [
        Le
          ? null
          : e.jsx("div", {
              className:
                "message-list-header absolute top-0 left-0 right-0 z-50 px-8 pt-16 pb-4 pointer-events-none",
              children: e.jsxs("div", {
                className:
                  "relative h-16 flex items-center justify-between pointer-events-auto",
                children: [
                  e.jsxs("div", {
                    className: `absolute left-0 transition-all duration-500 ease-out ${N ? "opacity-0 -translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"}`,
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (navigator.vibrate && navigator.vibrate(20),
                            s == null || s());
                        },
                        className: "text-left focus:outline-none focus:ring-0",
                        "aria-label": "回到桌面",
                        children: e.jsx("h1", {
                          className:
                            "text-4xl font-serif italic text-gray-800 tracking-tight",
                          children: "消息",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mt-1 ml-1",
                        children: [
                          e.jsx("div", {
                            className: "w-1.5 h-1.5 rounded-full bg-[#FFB7B2]",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[0.625rem] text-gray-400 font-medium tracking-[0.2em] uppercase",
                            children: new Date().toLocaleDateString("zh-CN", {
                              weekday: "long",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: `absolute left-0 right-14 transition-all duration-500 ease-out ${N ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"}`,
                    children: e.jsx("input", {
                      ref: P,
                      type: "search",
                      autoComplete: "off",
                      placeholder: "搜索对话...",
                      value: v,
                      onChange: (ze) => {
                        (b(ze.target.value), m(0));
                      },
                      className:
                        "w-full bg-transparent text-2xl font-serif italic text-gray-800 placeholder-gray-300 focus:outline-none border-b border-gray-200 pb-2",
                    }),
                  }),
                  e.jsxs("div", {
                    className: "absolute right-0 flex items-center gap-4",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          N
                            ? (b(""), w(!1))
                            : (w(!0),
                              setTimeout(() => {
                                var ze;
                                return (ze = P.current) == null
                                  ? void 0
                                  : ze.focus();
                              }, 100));
                        },
                        className: `
                    p-2 rounded-full transition-all duration-300
                    ${N ? "bg-gray-100 text-gray-600 rotate-90" : "hover:bg-white/50 text-gray-400 hover:text-gray-600"}
                  `,
                        children: N
                          ? e.jsx(Ts, { size: 20, strokeWidth: 1.5 })
                          : e.jsx(pr, { size: 20, strokeWidth: 1.5 }),
                      }),
                      e.jsx("button", {
                        onClick: St,
                        disabled: k || N,
                        className: `
                    transition-all duration-300
                    ${N ? "opacity-0 scale-0 w-0" : "opacity-100 scale-100 w-auto"}
                    ${k ? "animate-spin text-[#FFB7B2]" : "text-gray-400 hover:text-[#FFB7B2]"}
                  `,
                        children: e.jsx(ev, { size: 20, strokeWidth: 1.5 }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
        Le
          ? e.jsxs("div", {
              ref: O,
              className:
                "icity-inbox flex-1 min-h-0 overflow-y-auto overflow-x-hidden",
              onScroll: rn,
              children: [
                e.jsxs("header", {
                  className: `icity-blur-header sticky top-0 z-50 px-7 pt-12 pb-4 flex justify-between items-end transition-opacity duration-200 ${T ? "opacity-0 pointer-events-none" : "opacity-100"}`,
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: () => {
                        (navigator.vibrate && navigator.vibrate(20),
                          s == null || s());
                      },
                      className: "absolute left-0 top-0 bottom-0 w-24",
                      "aria-label": "返回",
                    }),
                    ie === "stories"
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className: "icity-header-stories-row",
                              children: e.jsx("h1", {
                                className:
                                  "icity-header-title text-2xl font-bold tracking-tight",
                                children: "讯息",
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "icity-header-stories-row icity-header-actions-down flex items-center space-x-4 mb-1",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => {
                                    var ze;
                                    return (ze = z.current) == null
                                      ? void 0
                                      : ze.click();
                                  },
                                  className:
                                    "icity-quote-next-btn icity-bg-upload-btn",
                                  "aria-label": "更换背景",
                                  title: "更换背景",
                                  children: e.jsxs("span", {
                                    className: "icity-quote-next-text",
                                    children: ["背景", M ? "..." : ""],
                                  }),
                                }),
                                e.jsx("input", {
                                  ref: z,
                                  type: "file",
                                  accept: "image/*",
                                  className: "hidden",
                                  onChange: Ke,
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: wt,
                                  className:
                                    "w-10 h-10 rounded-full overflow-hidden border border-gray-100 bg-gray-100 flex-shrink-0",
                                  "aria-label": "切换列表样式",
                                  children:
                                    o != null && o.avatar
                                      ? e.jsx("img", {
                                          src: o.avatar,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : e.jsx("span", {
                                          className:
                                            "w-full h-full flex items-center justify-center text-xs text-gray-700 font-semibold",
                                          children:
                                            ((rt =
                                              o == null ? void 0 : o.name) ==
                                            null
                                              ? void 0
                                              : rt[0]) || "我",
                                        }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("button", {
                              type: "button",
                              className: "icity-header-todo-row text-left",
                              onClick: () => X("stories"),
                              "aria-label": "切换回讯息",
                              children: e.jsx("h1", {
                                className:
                                  "icity-header-title icity-header-todo text-2xl font-black tracking-tighter",
                                children: "阅读",
                              }),
                            }),
                            e.jsxs("button", {
                              type: "button",
                              className:
                                "icity-header-todo-row flex items-center space-x-2 mb-1 focus:outline-none",
                              onClick: wt,
                              "aria-label": "切换列表样式",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "icity-todo-header-online text-[0.5625rem] font-bold tracking-widest uppercase",
                                  children: "Online",
                                }),
                                e.jsx("div", {
                                  className:
                                    "w-6 h-6 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center",
                                  children: e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 bg-black rounded-full animate-pulse",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
                Bl(It).map((ze) =>
                  e.jsxs(
                    l.Fragment,
                    {
                      children: [
                        ze === "story"
                          ? ie === "stories"
                            ? e.jsx("section", {
                                className: "icity-top-stories mt-6 px-7",
                                children: e.jsxs("div", {
                                  className: "grid grid-cols-4 gap-5 py-2",
                                  children: [
                                    e.jsxs("button", {
                                      type: "button",
                                      className:
                                        "flex flex-col items-center space-y-2 focus:outline-none",
                                      onClick: () => X("todo"),
                                      "aria-label": "切换顶部样式",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "icity-notes-plus-circle w-[66px] h-[66px] rounded-full bg-gray-50 flex items-center justify-center border border-gray-100",
                                          children: e.jsx(ea, {
                                            size: 20,
                                            strokeWidth: 2,
                                          }),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "icity-story-name text-[0.625rem] font-medium text-gray-400",
                                          children: "Notes",
                                        }),
                                      ],
                                    }),
                                    js.slice(0, 3).map((lt) => {
                                      const it =
                                        (lt == null ? void 0 : lt.remark) ||
                                        (lt == null ? void 0 : lt.nickname) ||
                                        (lt == null ? void 0 : lt.name) ||
                                        "";
                                      return e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex flex-col items-center space-y-2",
                                          children: [
                                            e.jsx("div", {
                                              className: "icity-story-border",
                                              children: e.jsx("div", {
                                                className: "icity-avatar-inner",
                                                children: e.jsx("img", {
                                                  src:
                                                    lt == null
                                                      ? void 0
                                                      : lt.avatar,
                                                  className:
                                                    "w-[58px] h-[58px] rounded-full object-cover",
                                                  alt: "",
                                                }),
                                              }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "icity-story-name text-[0.625rem] font-semibold text-gray-600 max-w-[70px] truncate",
                                              children: it,
                                            }),
                                          ],
                                        },
                                        `story-${String(lt == null ? void 0 : lt.id)}-${String((lt == null ? void 0 : lt.avatar) || "")}`,
                                      );
                                    }),
                                  ],
                                }),
                              })
                            : e.jsx("section", {
                                className: "icity-top-todo px-7",
                                children: e.jsxs("div", {
                                  className:
                                    "flex space-x-4 overflow-x-auto icity-hide-scrollbar py-2",
                                  children: [
                                    e.jsx("button", {
                                      type: "button",
                                      className:
                                        "icity-todo-add flex-shrink-0 w-[50px] h-[150px] bg-white border border-dashed border-gray-200 rounded flex items-center justify-center cursor-pointer",
                                      onClick: () => X("stories"),
                                      "aria-label": "添加",
                                      children: e.jsx(ea, {
                                        size: 14,
                                        strokeWidth: 3,
                                        className: "text-gray-300",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "icity-todo-card flex-shrink-0",
                                      style: Xe
                                        ? {
                                            backgroundImage: `url(${Xe})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                          }
                                        : void 0,
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          className: "icity-todo-dot",
                                          "aria-label": "上传待办1背景图",
                                          onClick: (lt) => {
                                            var it;
                                            (lt.preventDefault(),
                                              lt.stopPropagation(),
                                              (it = Qe.current) == null ||
                                                it.click());
                                          },
                                        }),
                                        e.jsx("input", {
                                          ref: Qe,
                                          type: "file",
                                          accept: "image/*",
                                          className: "hidden",
                                          onChange: (lt) => {
                                            var Ht;
                                            const it =
                                              (Ht = lt.target.files) == null
                                                ? void 0
                                                : Ht[0];
                                            ((lt.target.value = ""), Ze(1, it));
                                          },
                                        }),
                                        _t
                                          ? e.jsx("input", {
                                              ref: at,
                                              type: "text",
                                              className:
                                                "icity-todo-vertical-text icity-todo-input",
                                              value: ve,
                                              onChange: (lt) =>
                                                Ve(lt.target.value),
                                              onBlur: (lt) => {
                                                const it =
                                                  (
                                                    lt.target.value || ""
                                                  ).trim() || "深夜写一封信";
                                                Ve(it);
                                                try {
                                                  localStorage.setItem(KN, it);
                                                } catch {}
                                                Ee(!1);
                                              },
                                              onKeyDown: (lt) => {
                                                lt.key === "Enter" &&
                                                  lt.target.blur();
                                              },
                                              "aria-label": "待办1标题",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "icity-todo-vertical-text icity-todo-clickable",
                                              role: "button",
                                              tabIndex: 0,
                                              onClick: () => Ee(!0),
                                              onKeyDown: (lt) => {
                                                (lt.key === "Enter" ||
                                                  lt.key === " ") &&
                                                  (lt.preventDefault(), Ee(!0));
                                              },
                                              "aria-label": "点击编辑待办1",
                                              children: ve,
                                            }),
                                        fe
                                          ? e.jsx("input", {
                                              ref: ft,
                                              type: "text",
                                              className:
                                                "icity-todo-time icity-todo-time-input",
                                              value: Ae,
                                              onChange: (lt) =>
                                                te(lt.target.value),
                                              onBlur: (lt) => {
                                                const it =
                                                  (
                                                    lt.target.value || ""
                                                  ).trim() || "00:15 AM";
                                                te(it);
                                                try {
                                                  localStorage.setItem(qN, it);
                                                } catch {}
                                                He(!1);
                                              },
                                              onKeyDown: (lt) => {
                                                lt.key === "Enter" &&
                                                  lt.target.blur();
                                              },
                                              "aria-label": "待办1时间",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "icity-todo-time icity-todo-clickable",
                                              role: "button",
                                              tabIndex: 0,
                                              onClick: () => He(!0),
                                              onKeyDown: (lt) => {
                                                (lt.key === "Enter" ||
                                                  lt.key === " ") &&
                                                  (lt.preventDefault(), He(!0));
                                              },
                                              "aria-label": "点击编辑时间",
                                              children: Ae,
                                            }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "icity-todo-card flex-shrink-0",
                                      style: Pe
                                        ? {
                                            backgroundImage: `url(${Pe})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                          }
                                        : void 0,
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          className:
                                            "icity-todo-dot icity-todo-dot-blue",
                                          "aria-label": "上传待办2背景图",
                                          onClick: (lt) => {
                                            var it;
                                            (lt.preventDefault(),
                                              lt.stopPropagation(),
                                              (it = Ye.current) == null ||
                                                it.click());
                                          },
                                        }),
                                        e.jsx("input", {
                                          ref: Ye,
                                          type: "file",
                                          accept: "image/*",
                                          className: "hidden",
                                          onChange: (lt) => {
                                            var Ht;
                                            const it =
                                              (Ht = lt.target.files) == null
                                                ? void 0
                                                : Ht[0];
                                            ((lt.target.value = ""), Ze(2, it));
                                          },
                                        }),
                                        Ie
                                          ? e.jsx("input", {
                                              ref: vt,
                                              type: "text",
                                              className:
                                                "icity-todo-vertical-text icity-todo-input",
                                              value: Se,
                                              onChange: (lt) =>
                                                Fe(lt.target.value),
                                              onBlur: (lt) => {
                                                const it =
                                                  (
                                                    lt.target.value || ""
                                                  ).trim() || "收集今日落日";
                                                Fe(it);
                                                try {
                                                  localStorage.setItem(QN, it);
                                                } catch {}
                                                Ce(!1);
                                              },
                                              onKeyDown: (lt) => {
                                                lt.key === "Enter" &&
                                                  lt.target.blur();
                                              },
                                              "aria-label": "待办2标题",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "icity-todo-vertical-text icity-todo-clickable",
                                              role: "button",
                                              tabIndex: 0,
                                              onClick: () => Ce(!0),
                                              onKeyDown: (lt) => {
                                                (lt.key === "Enter" ||
                                                  lt.key === " ") &&
                                                  (lt.preventDefault(), Ce(!0));
                                              },
                                              "aria-label": "点击编辑待办2",
                                              children: Se,
                                            }),
                                        Re
                                          ? e.jsx("input", {
                                              ref: Oe,
                                              type: "text",
                                              className:
                                                "icity-todo-time icity-todo-time-input",
                                              value: $e,
                                              onChange: (lt) =>
                                                tt(lt.target.value),
                                              onBlur: (lt) => {
                                                const it =
                                                  (
                                                    lt.target.value || ""
                                                  ).trim() || "05:40 PM";
                                                tt(it);
                                                try {
                                                  localStorage.setItem(ZN, it);
                                                } catch {}
                                                De(!1);
                                              },
                                              onKeyDown: (lt) => {
                                                lt.key === "Enter" &&
                                                  lt.target.blur();
                                              },
                                              "aria-label": "待办2时间",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "icity-todo-time icity-todo-clickable",
                                              role: "button",
                                              tabIndex: 0,
                                              onClick: () => De(!0),
                                              onKeyDown: (lt) => {
                                                (lt.key === "Enter" ||
                                                  lt.key === " ") &&
                                                  (lt.preventDefault(), De(!0));
                                              },
                                              "aria-label": "点击编辑时间",
                                              children: $e,
                                            }),
                                      ],
                                    }),
                                  ],
                                }),
                              })
                          : null,
                        ze === "quote"
                          ? e.jsx(e.Fragment, {
                              children: e.jsx("section", {
                                className: "icity-middle-card-wrap mt-3 px-7",
                                children: e.jsxs("div", {
                                  className: "icity-middle-card-inner",
                                  children: [
                                    e.jsx("div", {
                                      className: `icity-middle-card-panel icity-quote-panel ${ne === "quote" ? "icity-panel-active" : ""}`,
                                      "aria-hidden": ne !== "quote",
                                      children: e.jsxs("div", {
                                        className: "icity-quote-wrapper",
                                        children: [
                                          H
                                            ? e.jsx("input", {
                                                ref: pe,
                                                type: "text",
                                                className:
                                                  "icity-quote-main icity-quote-input",
                                                value: ye,
                                                onChange: (lt) =>
                                                  R(lt.target.value),
                                                onBlur: (lt) => {
                                                  const it =
                                                    (
                                                      lt.target.value || ""
                                                    ).trim() ||
                                                    "人是一根有思想的苇草。";
                                                  R(it);
                                                  try {
                                                    localStorage.setItem(
                                                      GN,
                                                      it,
                                                    );
                                                  } catch {}
                                                  Y(!1);
                                                },
                                                onKeyDown: (lt) => {
                                                  var it;
                                                  lt.key === "Enter" &&
                                                    ((it = pe.current) ==
                                                      null ||
                                                      it.blur());
                                                },
                                                "aria-label": "编辑名言",
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "icity-quote-main icity-quote-clickable",
                                                role: "button",
                                                tabIndex: 0,
                                                onClick: () => Y(!0),
                                                onKeyDown: (lt) => {
                                                  (lt.key === "Enter" ||
                                                    lt.key === " ") &&
                                                    (lt.preventDefault(),
                                                    Y(!0));
                                                },
                                                "aria-label": "点击编辑名言",
                                                children:
                                                  ye ||
                                                  "人是一根有思想的苇草。",
                                              }),
                                          e.jsxs("div", {
                                            className: "icity-quote-row",
                                            children: [
                                              U
                                                ? e.jsx("input", {
                                                    ref: se,
                                                    type: "text",
                                                    className:
                                                      "icity-quote-info icity-quote-info-input",
                                                    value: oe,
                                                    onChange: (lt) =>
                                                      ee(lt.target.value),
                                                    onBlur: (lt) => {
                                                      const it =
                                                        (
                                                          lt.target.value || ""
                                                        ).trim() ||
                                                        "帕斯卡尔 / 《思想录》";
                                                      ee(it);
                                                      try {
                                                        localStorage.setItem(
                                                          HN,
                                                          it,
                                                        );
                                                      } catch {}
                                                      ce(!1);
                                                    },
                                                    onKeyDown: (lt) => {
                                                      var it;
                                                      lt.key === "Enter" &&
                                                        ((it = se.current) ==
                                                          null ||
                                                          it.blur());
                                                    },
                                                    "aria-label": "编辑出处",
                                                  })
                                                : e.jsx("div", {
                                                    className:
                                                      "icity-quote-info icity-quote-clickable",
                                                    role: "button",
                                                    tabIndex: 0,
                                                    onClick: () => ce(!0),
                                                    onKeyDown: (lt) => {
                                                      (lt.key === "Enter" ||
                                                        lt.key === " ") &&
                                                        (lt.preventDefault(),
                                                        ce(!0));
                                                    },
                                                    "aria-label":
                                                      "点击编辑出处",
                                                    children:
                                                      oe ||
                                                      "帕斯卡尔 / 《思想录》",
                                                  }),
                                              e.jsx("button", {
                                                type: "button",
                                                className:
                                                  "icity-quote-next-btn",
                                                "aria-label": "下一则",
                                                onClick: () => le("lyric"),
                                                children: e.jsx("span", {
                                                  className:
                                                    "icity-quote-next-text",
                                                  children: "下一则",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className: `icity-middle-card-panel icity-lyric-panel ${ne === "lyric" ? "icity-panel-active" : ""}`,
                                      "aria-hidden": ne !== "lyric",
                                      children: e.jsxs("div", {
                                        className: "icity-lyric-wrapper",
                                        children: [
                                          he
                                            ? e.jsx("textarea", {
                                                ref: we,
                                                className:
                                                  "icity-lyric-main icity-lyric-input",
                                                value: ke,
                                                onChange: (lt) =>
                                                  W(lt.target.value),
                                                onBlur: (lt) => {
                                                  const it =
                                                    (
                                                      lt.target.value || ""
                                                    ).trim() || Te;
                                                  W(it);
                                                  try {
                                                    localStorage.setItem(
                                                      WN,
                                                      it,
                                                    );
                                                  } catch {}
                                                  ge(!1);
                                                },
                                                onKeyDown: (lt) => {
                                                  var it;
                                                  lt.key === "Escape" &&
                                                    ((it = we.current) ==
                                                      null ||
                                                      it.blur());
                                                },
                                                rows: 3,
                                                "aria-label": "编辑歌词",
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "icity-lyric-main icity-lyric-clickable",
                                                role: "button",
                                                tabIndex: 0,
                                                onClick: () => ge(!0),
                                                onKeyDown: (lt) => {
                                                  (lt.key === "Enter" ||
                                                    lt.key === " ") &&
                                                    (lt.preventDefault(),
                                                    ge(!0));
                                                },
                                                "aria-label": "点击编辑歌词",
                                                children: (ke || Te)
                                                  .split(
                                                    `
`,
                                                  )
                                                  .map((lt, it, Ht) =>
                                                    e.jsxs(
                                                      "span",
                                                      {
                                                        children: [
                                                          lt,
                                                          it < Ht.length - 1
                                                            ? e.jsx("br", {})
                                                            : null,
                                                        ],
                                                      },
                                                      it,
                                                    ),
                                                  ),
                                              }),
                                          e.jsx("div", {
                                            className:
                                              "icity-lyric-progress-wrap",
                                            children: e.jsx("div", {
                                              className:
                                                "icity-lyric-progress-line",
                                            }),
                                          }),
                                          e.jsxs("div", {
                                            className: "icity-lyric-info",
                                            children: [
                                              J
                                                ? e.jsx("input", {
                                                    ref: Q,
                                                    type: "text",
                                                    className:
                                                      "icity-lyric-meta icity-lyric-meta-input",
                                                    value: ue,
                                                    onChange: (lt) =>
                                                      re(lt.target.value),
                                                    onBlur: (lt) => {
                                                      const it =
                                                        (
                                                          lt.target.value || ""
                                                        ).trim() ||
                                                        "枯木逢春 / 《关于你》";
                                                      re(it);
                                                      try {
                                                        localStorage.setItem(
                                                          YN,
                                                          it,
                                                        );
                                                      } catch {}
                                                      G(!1);
                                                    },
                                                    onKeyDown: (lt) => {
                                                      var it;
                                                      lt.key === "Enter" &&
                                                        ((it = Q.current) ==
                                                          null ||
                                                          it.blur());
                                                    },
                                                    "aria-label":
                                                      "编辑歌手与歌名",
                                                  })
                                                : e.jsx("div", {
                                                    className:
                                                      "icity-lyric-meta icity-lyric-meta-clickable",
                                                    role: "button",
                                                    tabIndex: 0,
                                                    onClick: () => G(!0),
                                                    onKeyDown: (lt) => {
                                                      (lt.key === "Enter" ||
                                                        lt.key === " ") &&
                                                        (lt.preventDefault(),
                                                        G(!0));
                                                    },
                                                    "aria-label":
                                                      "点击编辑歌手与歌名",
                                                    children:
                                                      ue ||
                                                      "枯木逢春 / 《关于你》",
                                                  }),
                                              e.jsxs("div", {
                                                className:
                                                  "icity-lyric-controls",
                                                children: [
                                                  e.jsx("button", {
                                                    type: "button",
                                                    className:
                                                      "icity-lyric-ctrl-btn",
                                                    "aria-label": "上一则",
                                                    onClick: () => le("quote"),
                                                    children: e.jsx("svg", {
                                                      width: "18",
                                                      height: "18",
                                                      viewBox: "0 0 24 24",
                                                      fill: "none",
                                                      stroke: "currentColor",
                                                      strokeWidth: "2",
                                                      children: e.jsx("path", {
                                                        d: "M11 17l-5-5 5-5M18 17l-5-5 5-5",
                                                      }),
                                                    }),
                                                  }),
                                                  e.jsx("button", {
                                                    type: "button",
                                                    className:
                                                      "icity-lyric-ctrl-btn icity-lyric-ctrl-active",
                                                    "aria-label": "暂停",
                                                    children: e.jsxs("svg", {
                                                      width: "18",
                                                      height: "18",
                                                      viewBox: "0 0 24 24",
                                                      fill: "currentColor",
                                                      children: [
                                                        e.jsx("rect", {
                                                          x: "6",
                                                          y: "4",
                                                          width: "4",
                                                          height: "16",
                                                        }),
                                                        e.jsx("rect", {
                                                          x: "14",
                                                          y: "4",
                                                          width: "4",
                                                          height: "16",