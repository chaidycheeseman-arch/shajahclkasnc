                                  onTouchStart: () => !i && o(ae.id),
                                  onTouchEnd: c,
                                  onMouseDown: () => !i && o(ae.id),
                                  onMouseUp: c,
                                  onContextMenu: (Ot) => Ot.preventDefault(),
                                  onClick: () => i && d(ae.id),
                                  children: [
                                    e.jsxs("div", {
                                      className: `flex flex-col gap-1 ${Qn ? "w-full items-stretch" : It ? "items-end" : "items-start"}`,
                                      children: [
                                        qt
                                          ? e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("div", {
                                                  onClick: (Ot) => {
                                                    i ||
                                                      (Ot.stopPropagation(),
                                                      m(ae.id));
                                                  },
                                                  className: `
                        chat-voice-bubble
                        ${It ? "chat-bubble-me" : "chat-bubble-other"}
                        ${Ft}
                        ${Xt ? "ring-1 ring-gray-300" : ""}
                      `,
                                                  children: e.jsxs("div", {
                                                    className: `flex items-center gap-2 ${It ? "flex-row-reverse" : "flex-row"}`,
                                                    children: [
                                                      e.jsx("div", {
                                                        onClick: async (Ot) => {
                                                          var rs,
                                                            gs,
                                                            ps,
                                                            Is,
                                                            As,
                                                            Ks,
                                                            on,
                                                            tn,
                                                            dn;
                                                          if (!i) {
                                                            if (
                                                              (Ot.stopPropagation(),
                                                              h)
                                                            ) {
                                                              g();
                                                              return;
                                                            }
                                                            if (
                                                              ae.isRealVoice
                                                            ) {
                                                              if (ae.audioUrl) {
                                                                await x(null, {
                                                                  audioUrl:
                                                                    ae.audioUrl,
                                                                  saveId: ae.id,
                                                                });
                                                                return;
                                                              }
                                                              if (ae.audioId) {
                                                                const Fn =
                                                                  await Ec(
                                                                    ae.audioId,
                                                                  );
                                                                if (Fn) {
                                                                  const ha =
                                                                    URL.createObjectURL(
                                                                      Fn,
                                                                    );
                                                                  await x(
                                                                    null,
                                                                    {
                                                                      audioUrl:
                                                                        ha,
                                                                      saveId:
                                                                        ae.id,
                                                                    },
                                                                  );
                                                                  return;
                                                                }
                                                              }
                                                              alert(
                                                                "语音文件已过期或丢失",
                                                              );
                                                              return;
                                                            }
                                                            if (It) {
                                                              m(ae.id);
                                                              return;
                                                            }
                                                            if (ae.audioUrl) {
                                                              await x(null, {
                                                                audioUrl:
                                                                  ae.audioUrl,
                                                                saveId: ae.id,
                                                              });
                                                              return;
                                                            }
                                                            const yn = await Ec(
                                                              ae.id,
                                                            );
                                                            if (
                                                              yn &&
                                                              yn.size > 100 &&
                                                              ((yn.type &&
                                                                yn.type.startsWith(
                                                                  "audio/",
                                                                )) ||
                                                                yn.type ===
                                                                  "application/octet-stream")
                                                            ) {
                                                              const Fn =
                                                                URL.createObjectURL(
                                                                  yn,
                                                                );
                                                              if (
                                                                await x(null, {
                                                                  audioUrl: Fn,
                                                                  saveId: ae.id,
                                                                })
                                                              )
                                                                return;
                                                              await uh(ae.id);
                                                            } else
                                                              yn &&
                                                                (await uh(
                                                                  ae.id,
                                                                ));
                                                            const Bn = {
                                                              saveId: ae.id,
                                                            };
                                                            if (
                                                              q &&
                                                              ae.contactId
                                                            ) {
                                                              const Fn = n.find(
                                                                (ha) =>
                                                                  ha.id ===
                                                                  ae.contactId,
                                                              );
                                                              if (
                                                                !(
                                                                  Fn != null &&
                                                                  Fn.ttsVoiceId
                                                                )
                                                              ) {
                                                                const ha =
                                                                  (Fn == null
                                                                    ? void 0
                                                                    : Fn.remark) ||
                                                                  (Fn == null
                                                                    ? void 0
                                                                    : Fn.nickname) ||
                                                                  (Fn == null
                                                                    ? void 0
                                                                    : Fn.name) ||
                                                                  "该成员";
                                                                V == null ||
                                                                  V(
                                                                    ha,
                                                                    ae.contactId,
                                                                  );
                                                                return;
                                                              }
                                                              ((Bn.voiceId =
                                                                Fn.ttsVoiceId),
                                                                (Bn.speed =
                                                                  Fn.ttsSpeed ??
                                                                  1),
                                                                (Bn.pitch =
                                                                  Fn.ttsPitch ??
                                                                  0));
                                                            } else
                                                              ((Bn.voiceId =
                                                                (rs =
                                                                  t.settings) ==
                                                                null
                                                                  ? void 0
                                                                  : rs.voiceId),
                                                                (Bn.modelId =
                                                                  (gs =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : gs.modelId),
                                                                (Bn.stability =
                                                                  (ps =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : ps.stability),
                                                                (Bn.similarityBoost =
                                                                  (Is =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : Is.similarityBoost),
                                                                (Bn.style =
                                                                  (As =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : As.style),
                                                                (Bn.useSpeakerBoost =
                                                                  (Ks =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : Ks.useSpeakerBoost),
                                                                (Bn.speed =
                                                                  (on =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : on.speed),
                                                                (Bn.vol =
                                                                  (tn =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : tn.vol),
                                                                (Bn.pitch =
                                                                  (dn =
                                                                    t.settings) ==
                                                                  null
                                                                    ? void 0
                                                                    : dn.pitch));
                                                            const Ea = await x(
                                                              ae.text,
                                                              Bn,
                                                            );
                                                            Ea
                                                              ? y(t.id, ae.id, {
                                                                  audioUrl: Ea,
                                                                })
                                                              : alert(
                                                                  "语音播放失败，请检查 API 配置或网络连接",
                                                                );
                                                          }
                                                        },
                                                        className: `chat-voice-icon ${It ? "text-[#5d4037]" : "text-[#8d6e63]"}`,
                                                        children: js
                                                          ? e.jsx("div", {
                                                              className:
                                                                "w-2 h-2 bg-current rounded-full animate-pulse",
                                                            })
                                                          : e.jsx(Ji, {
                                                              size: 12,
                                                            }),
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "chat-voice-waveform",
                                                        children: [
                                                          0, 1, 2, 3, 4, 5,
                                                        ].map((Ot, rs) =>
                                                          e.jsx(
                                                            "div",
                                                            {
                                                              className: `${js ? "animate-pulse" : ""}`,
                                                              style: {
                                                                height: `${Math.max(25, 25 + (((ae.text || "").length + rs) % 75))}%`,
                                                                animationDelay: `${rs * 0.05}s`,
                                                              },
                                                            },
                                                            rs,
                                                          ),
                                                        ),
                                                      }),
                                                      e.jsxs("span", {
                                                        className:
                                                          "chat-voice-duration",
                                                        children: [
                                                          ae.duration ||
                                                            Math.min(
                                                              60,
                                                              Math.max(
                                                                2,
                                                                Math.ceil(
                                                                  (
                                                                    ae.text ||
                                                                    ""
                                                                  ).length / 5,
                                                                ),
                                                              ),
                                                            ),
                                                          '"',
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                Lt &&
                                                  Qt &&
                                                  (ae.text || "").trim() &&
                                                  e.jsx("div", {
                                                    className: `
                                  chat-voice-transcript
                                  ${It ? "chat-bubble-me" : "chat-bubble-other"}
                                  ${Ft}
                                  ${Xt ? "ring-1 ring-gray-300" : ""}
                                `,
                                                    children: e.jsx("div", {
                                                      className:
                                                        "chat-voice-transcript-text whitespace-pre-wrap break-words",
                                                      children: Oe(
                                                        ae.text || "",
                                                        (Me = t.settings) ==
                                                          null
                                                          ? void 0
                                                          : Me.groupEmotes,
                                                      ),
                                                    }),
                                                  }),
                                              ],
                                            })
                                          : Ne
                                            ? e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("div", {
                                                    className: `message-meme ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2 rounded-lg" : ""}`,
                                                    children: e.jsx("img", {
                                                      src: ae.image,
                                                      alt: `表情包: ${ae.meaning}`,
                                                      loading: "lazy",
                                                    }),
                                                  }),
                                                  ae.translation &&
                                                    (J || b.has(ae.id)) &&
                                                    e.jsx("div", {
                                                      className: `
                      px-3 py-2 text-[10px] rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-400 max-w-[min(85%,20rem)]
                      ${It ? "self-end" : "self-start"}
                    `,
                                                      children: ae.translation,
                                                    }),
                                                ],
                                              })
                                            : cs
                                              ? e.jsx("div", {
                                                  className: `message-image ${It ? "from-me" : "from-other"} ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                                  children: e.jsx("img", {
                                                    src: ae.image,
                                                    alt: "图片",
                                                    loading: "lazy",
                                                  }),
                                                })
                                              : Je
                                                ? e.jsx("div", {
                                                    onClick: (Ot) => {
                                                      i ||
                                                        (Ot.stopPropagation(),
                                                        m(ae.id));
                                                    },
                                                    className: `message-image message-text-image ${It ? "from-me" : "from-other"} ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                                    children: e.jsxs("div", {
                                                      className:
                                                        "message-text-image-inner",
                                                      children: [
                                                        Be
                                                          ? e.jsx("div", {
                                                              className:
                                                                "message-text-image-reveal",
                                                              onClick: (Ot) =>
                                                                Ot.stopPropagation(),
                                                              onTouchStart: (
                                                                Ot,
                                                              ) =>
                                                                Ot.stopPropagation(),
                                                              children: e.jsx(
                                                                "p",
                                                                {
                                                                  className:
                                                                    "message-text-image-text",
                                                                  children:
                                                                    ae.content ||
                                                                    ae.text
                                                                      .replace(
                                                                        "[图片内容：",
                                                                        "",
                                                                      )
                                                                      .replace(
                                                                        "]",
                                                                        "",
                                                                      ),
                                                                },
                                                              ),
                                                            })
                                                          : e.jsxs("div", {
                                                              className:
                                                                "message-text-image-placeholder",
                                                              children: [
                                                                e.jsx("div", {
                                                                  className:
                                                                    "message-text-image-icon",
                                                                  children:
                                                                    e.jsx(Al, {
                                                                      size: 20,
                                                                      className:
                                                                        "text-[#8d6e63]",
                                                                    }),
                                                                }),
                                                                e.jsx("span", {
                                                                  className:
                                                                    "message-text-image-label",
                                                                  children:
                                                                    "私密",
                                                                }),
                                                              ],
                                                            }),
                                                        !Be &&
                                                          e.jsx("div", {
                                                            className:
                                                              "message-text-image-tape",
                                                          }),
                                                        e.jsx("div", {
                                                          className:
                                                            "message-text-image-bottom",
                                                          children: Be
                                                            ? "备忘"
                                                            : "点击查看",
                                                        }),
                                                      ],
                                                    }),
                                                  })
                                                : St
                                                  ? e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsx("div", {
                                                          className: `html-widget-shell rounded-2xl overflow-hidden border border-[#e8e0dc] shadow-sm bg-white max-w-[min(95vw,320px)] ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                                          children: e.jsx(
                                                            "iframe",
                                                            {
                                                              title:
                                                                "HTML 组件",
                                                              className:
                                                                "w-full border-0 block align-top",
                                                              style: {
                                                                width: "270px",
                                                                height: "360px",
                                                                maxWidth:
                                                                  "100%",
                                                              },
                                                              sandbox:
                                                                "allow-scripts allow-same-origin",
                                                              srcDoc: ae.html,
                                                            },
                                                          ),
                                                        }),
                                                        ae.translation &&
                                                          (J || b.has(ae.id)) &&
                                                          e.jsx("div", {
                                                            className: `
                      px-3 py-2 text-[10px] rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-400 max-w-[min(85%,20rem)]
                      ${It ? "self-end" : "self-start"}
                    `,
                                                            children:
                                                              ae.translation,
                                                          }),
                                                      ],
                                                    })
                                                  : Ke
                                                    ? e.jsxs(e.Fragment, {
                                                        children: [
                                                          e.jsxs("div", {
                                                            onClick: () => {
                                                              !It &&
                                                                He(ae) &&
                                                                M({
                                                                  messageId:
                                                                    ae.id,
                                                                  amount:
                                                                    ae.amount,
                                                                  note: ae.note,
                                                                });
                                                            },
                                                            "data-status":
                                                              ae.status ||
                                                              "pending",
                                                            className: `
                      message-transfer ${It ? "from-me" : "from-other"}
                      overflow-hidden shadow-sm transition-all relative
                      ${Xt ? "ring-2 ring-[#ffb7b2] ring-offset-2" : ""}
                      ${!It && He(ae) ? "cursor-pointer hover:scale-[1.02]" : ""}
                    `,
                                                            children: [
                                                              e.jsxs("div", {
                                                                className:
                                                                  "transfer-header p-3 flex items-center gap-3 relative overflow-hidden",
                                                                children: [
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "transfer-header-deco",
                                                                  }),
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "transfer-icon",
                                                                    children:
                                                                      ae.status ===
                                                                      "pending"
                                                                        ? e.jsx(
                                                                            zm,
                                                                            {
                                                                              size: 18,
                                                                            },
                                                                          )
                                                                        : ae.status ===
                                                                            "accepted"
                                                                          ? e.jsx(
                                                                              On,
                                                                              {
                                                                                size: 18,
                                                                                strokeWidth: 3,
                                                                              },
                                                                            )
                                                                          : e.jsx(
                                                                              Ts,
                                                                              {
                                                                                size: 18,
                                                                                strokeWidth: 3,
                                                                              },
                                                                            ),
                                                                  }),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex-1 min-w-0 z-10",
                                                                      children:
                                                                        [
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "transfer-amount text-lg font-bold truncate font-mono tracking-tight",
                                                                              children:
                                                                                [
                                                                                  "¥",
                                                                                  (et =
                                                                                    ae.amount) ==
                                                                                  null
                                                                                    ? void 0
                                                                                    : et.toFixed(
                                                                                        2,
                                                                                      ),
                                                                                ],
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "transfer-note text-xs truncate font-medium",
                                                                              children:
                                                                                ae.note ||
                                                                                (It
                                                                                  ? "转账"
                                                                                  : "已收款"),
                                                                            },
                                                                          ),
                                                                          q &&
                                                                            e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "text-[10px] text-[#8d6e63]/80 truncate mt-0.5",
                                                                                children:
                                                                                  [
                                                                                    "给 ",
                                                                                    fe(
                                                                                      ae,
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  ae.status !==
                                                                    "pending" &&
                                                                    e.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "absolute -bottom-2 -right-1 opacity-10 pointer-events-none transform -rotate-12",
                                                                        children:
                                                                          e.jsx(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "text-5xl font-black tracking-tighter leading-none font-serif italic text-[#5d4037]",
                                                                              children:
                                                                                ae.status ===
                                                                                "accepted"
                                                                                  ? "已支付"
                                                                                  : "已作废",
                                                                            },
                                                                          ),
                                                                      },
                                                                    ),
                                                                ],
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "transfer-footer",
                                                                children: [
                                                                  e.jsx(
                                                                    "span",
                                                                    {
                                                                      children:
                                                                        ae.status ===
                                                                        "pending"
                                                                          ? It
                                                                            ? "等待中..."
                                                                            : He(
                                                                                  ae,
                                                                                )
                                                                              ? "点击收款"
                                                                              : "仅收款方可操作"
                                                                          : "转账",
                                                                    },
                                                                  ),
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "w-1.5 h-1.5 rounded-full bg-current opacity-30",
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          ae.translation &&
                                                            (J ||
                                                              b.has(ae.id)) &&
                                                            e.jsx("div", {
                                                              className: `
                      px-3 py-2 text-[10px] rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-400 max-w-[min(85%,20rem)]
                      ${It ? "self-end" : "self-start"}
                    `,
                                                              children:
                                                                ae.translation,
                                                            }),
                                                        ],
                                                      })
                                                    : Nt
                                                      ? e.jsxs("div", {
                                                          onClick: () =>
                                                            z == null
                                                              ? void 0
                                                              : z(ae),
                                                          className: `
                              message-transfer ${It ? "from-me" : "from-other"}
                              w-[var(--transfer-width)] rounded-[var(--transfer-radius)] border-2 overflow-hidden shadow-sm
                              ${It ? "bg-[#e8d5c4] border-[#dcb8a0]" : "bg-[#fffcf7] border-[#e8e0dc]"}
                              cursor-pointer hover:scale-[1.02] transition-all
                              ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}
                            `,
                                                          children: [
                                                            e.jsxs("div", {
                                                              className:
                                                                "transfer-header p-3 flex items-center gap-3 relative overflow-hidden",
                                                              children: [
                                                                e.jsx("div", {
                                                                  className:
                                                                    "transfer-header-deco",
                                                                }),
                                                                e.jsx("div", {
                                                                  className:
                                                                    "p-2 rounded-full bg-[#efebe9] border border-[#e0d5c8] text-[#6d4c41]",
                                                                  children:
                                                                    e.jsx(Nl, {
                                                                      size: 18,
                                                                    }),
                                                                }),
                                                                e.jsxs("div", {
                                                                  className:
                                                                    "flex-1 min-w-0 z-10",
                                                                  children: [
                                                                    e.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "transfer-note text-xs truncate font-medium text-[#5d4037]",
                                                                        children:
                                                                          ae.note ||
                                                                          "恭喜发财，大吉大利",
                                                                      },
                                                                    ),
                                                                    e.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "text-[10px] text-[#8d6e63]/80 mt-0.5",
                                                                        children:
                                                                          [
                                                                            (
                                                                              ae.claims ||
                                                                              []
                                                                            )
                                                                              .length,
                                                                            "/",
                                                                            ae.count ||
                                                                              1,
                                                                            "个",
                                                                            (ae.count ||
                                                                              1) -
                                                                              (
                                                                                ae.claims ||
                                                                                []
                                                                              )
                                                                                .length >
                                                                            0
                                                                              ? " · 点击查看"
                                                                              : " · 已领完",
                                                                          ],
                                                                      },
                                                                    ),
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            e.jsxs("div", {
                                                              className:
                                                                "transfer-footer py-2 px-3 flex items-center justify-between",
                                                              children: [
                                                                e.jsx("span", {
                                                                  className:
                                                                    "text-xs text-[#8d6e63]/80",
                                                                  children:
                                                                    "微信红包",
                                                                }),
                                                                e.jsx("div", {
                                                                  className:
                                                                    "w-1.5 h-1.5 rounded-full bg-current opacity-30",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        })
                                                      : bt
                                                        ? e.jsxs("div", {
                                                            className: `message-card-password ${It ? "from-me" : "from-other"} w-56 bg-[#fffcf7] rounded-[20px] overflow-hidden shadow-md border border-[#efebe9] relative group/card ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                                            children: [
                                                              e.jsxs("div", {
                                                                className:
                                                                  "message-card-password-header bg-[#8d6e63] px-3 py-2.5 flex items-center justify-between",
                                                                children: [
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex items-center gap-2 text-white",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "p-1.5 bg-white/20 rounded-lg backdrop-blur-sm",
                                                                              children:
                                                                                e.jsx(
                                                                                  "div",
                                                                                  {
                                                                                    className:
                                                                                      "w-3 h-3 border-2 border-white rounded-full",
                                                                                  },
                                                                                ),
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "text-xs font-bold tracking-widest uppercase",
                                                                              children:
                                                                                "隐私锁",
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex gap-1",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "w-1.5 h-1.5 rounded-full bg-white/40",
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "w-1.5 h-1.5 rounded-full bg-white/40",
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "message-card-password-content p-4 flex flex-col items-center gap-3 relative",
                                                                children: [
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "absolute inset-0 opacity-5",
                                                                    style: {
                                                                      backgroundImage:
                                                                        "radial-gradient(#8d6e63 1px, transparent 1px)",
                                                                      backgroundSize:
                                                                        "10px 10px",
                                                                    },
                                                                  }),
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "text-[10px] text-[#8d6e63] font-medium uppercase tracking-wider text-center",
                                                                    children:
                                                                      ae.text.includes(
                                                                        "修改",
                                                                      )
                                                                        ? "密码已更新"
                                                                        : "解锁密码",
                                                                  }),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "message-card-password-box w-full bg-[#f5f5f5] rounded-xl p-3 flex items-center justify-center border-2 border-dashed border-[#d7ccc8] relative group-hover/card:border-[#8d6e63] transition-colors",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "text-xl font-mono font-bold text-[#5d4037] tracking-[0.2em]",
                                                                              children:
                                                                                ae.password,
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "button",
                                                                            {
                                                                              onClick:
                                                                                (
                                                                                  Ot,
                                                                                ) => {
                                                                                  (Ot.stopPropagation(),
                                                                                    navigator.clipboard.writeText(
                                                                                      ae.password,
                                                                                    ),
                                                                                    alert(
                                                                                      "密码已复制",
                                                                                    ));
                                                                                },
                                                                              className:
                                                                                "message-card-password-copy absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#8d6e63] opacity-0 group-hover/card:opacity-100 hover:bg-[#efebe9] rounded-lg transition-all",
                                                                              title:
                                                                                "复制",
                                                                              children:
                                                                                e.jsx(
                                                                                  a3,
                                                                                  {
                                                                                    size: 14,
                                                                                  },
                                                                                ),
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "message-card-password-footer text-[9px] text-[#bdbdbd] text-center leading-relaxed px-2",
                                                                      children:
                                                                        [
                                                                          "此密码用于解锁对方的手机应用。",
                                                                          e.jsx(
                                                                            "br",
                                                                            {},
                                                                          ),
                                                                          "请妥善保管，不要告诉其他人哦。",
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              }),
                                                            ],
                                                          })
                                                        : ns
                                                          ? e.jsxs(e.Fragment, {
                                                              children: [
                                                                e.jsxs("div", {
                                                                  "data-status":
                                                                    ae.status ||
                                                                    "pending",
                                                                  className: `message-card-food ${It ? "from-me" : "from-other"} w-48 rounded-sm overflow-hidden shadow-md relative group/card transition-all hover:-translate-y-1 ${Xt ? "ring-2 ring-[#ffab91] ring-offset-2" : ""}`,
                                                                  children: [
                                                                    e.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "message-card-food-edge-top absolute top-0 left-0 right-0 h-1.5 bg-[#fffcf7]",
                                                                        style: {
                                                                          background:
                                                                            "linear-gradient(135deg, transparent 75%, #d7ccc8 75%) 0 50%, linear-gradient(45deg, #d7ccc8 25%, transparent 25%) 0 50%",
                                                                          backgroundSize:
                                                                            "8px 8px",
                                                                          opacity: 0.4,
                                                                        },
                                                                      },
                                                                    ),
                                                                    e.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "p-3 pt-4 relative",
                                                                        children:
                                                                          [
                                                                            e.jsx(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "absolute inset-0 opacity-5 pointer-events-none",
                                                                                style:
                                                                                  {
                                                                                    backgroundImage:
                                                                                      "radial-gradient(#8d6e63 1px, transparent 1px)",
                                                                                    backgroundSize:
                                                                                      "6px 6px",
                                                                                  },
                                                                              },
                                                                            ),
                                                                            e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "message-card-food-header flex justify-between items-start mb-2 border-b border-dashed border-[#d7ccc8] pb-1.5",
                                                                                children:
                                                                                  [
                                                                                    e.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "flex items-center gap-1.5",
                                                                                        children:
                                                                                          [
                                                                                            e.jsx(
                                                                                              "div",
                                                                                              {
                                                                                                className:
                                                                                                  "message-card-food-icon w-6 h-6 rounded-full border border-[#ffab91] flex items-center justify-center text-[#ff7043] bg-white shadow-sm",
                                                                                                children:
                                                                                                  e.jsx(
                                                                                                    Dh,
                                                                                                    {
                                                                                                      size: 12,
                                                                                                    },
                                                                                                  ),
                                                                                              },
                                                                                            ),
                                                                                            e.jsxs(
                                                                                              "div",
                                                                                              {
                                                                                                className:
                                                                                                  "flex flex-col",
                                                                                                children:
                                                                                                  [
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "message-card-food-title text-[8px] font-black text-[#5d4037] uppercase tracking-widest",
                                                                                                        children:
                                                                                                          "配送",
                                                                                                      },
                                                                                                    ),
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "message-card-food-subtitle text-[7px] text-[#8d6e63] font-serif italic",
                                                                                                        children:
                                                                                                          It
                                                                                                            ? `寄往：${q ? Ee(ae) : (s == null ? void 0 : s.nickname) || (s == null ? void 0 : s.name) || ""}`
                                                                                                            : q
                                                                                                              ? `给 ${Ee(ae)} 点的`
                                                                                                              : "寄自：TA",
                                                                                                      },
                                                                                                    ),
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                    e.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-food-status text-white text-[7px] font-bold px-1.5 py-0.5 rounded-sm transform rotate-[-2deg] shadow-sm",
                                                                                        children:
                                                                                          ae.status ===
                                                                                          "accepted"
                                                                                            ? "已送达"
                                                                                            : ae.status ===
                                                                                                "rejected"
                                                                                              ? "已取消"
                                                                                              : ae.status ===
                                                                                                  "ordered"
                                                                                                ? "已下单"
                                                                                                : "配送中",
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "message-card-food-content flex flex-col gap-0.5 mb-2",
                                                                                children:
                                                                                  [
                                                                                    e.jsx(
                                                                                      "span",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-food-item text-sm font-serif font-bold text-[#3e2723] leading-tight line-clamp-2 italic",
                                                                                        children:
                                                                                          ae.item,
                                                                                      },
                                                                                    ),
                                                                                    e.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "flex justify-between items-end mt-0.5",
                                                                                        children:
                                                                                          [
                                                                                            e.jsx(
                                                                                              "span",
                                                                                              {
                                                                                                className:
                                                                                                  "text-[8px] text-[#9e9e9e] font-medium",
                                                                                                children:
                                                                                                  "合计",
                                                                                              },
                                                                                            ),
                                                                                            e.jsxs(
                                                                                              "span",
                                                                                              {
                                                                                                className:
                                                                                                  "message-card-food-price text-base font-mono font-bold text-[#ff7043] border-b border-[#ffab91]",
                                                                                                children:
                                                                                                  [
                                                                                                    "¥",
                                                                                                    ae.price,
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "message-card-food-info flex items-center justify-between text-[7px] text-[#8d6e63] bg-[#efebe9]/30 p-1 rounded border border-[#efebe9]",
                                                                                children:
                                                                                  [
                                                                                    e.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "flex items-center gap-1",
                                                                                        children:
                                                                                          [
                                                                                            e.jsx(
                                                                                              Dr,
                                                                                              {
                                                                                                size: 8,
                                                                                              },
                                                                                            ),
                                                                                            e.jsxs(
                                                                                              "span",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    "预计",
                                                                                                    " ",
                                                                                                    (() => {
                                                                                                      let Ot = 0;
                                                                                                      const rs =
                                                                                                        ae.id +
                                                                                                        "time";
                                                                                                      for (
                                                                                                        let gs = 0;
                                                                                                        gs <
                                                                                                        rs.length;
                                                                                                        gs++
                                                                                                      )
                                                                                                        ((Ot =
                                                                                                          (Ot <<
                                                                                                            5) -
                                                                                                          Ot +
                                                                                                          rs.charCodeAt(
                                                                                                            gs,
                                                                                                          )),
                                                                                                          (Ot |= 0));
                                                                                                      return (
                                                                                                        20 +
                                                                                                        (Math.abs(
                                                                                                          Ot,
                                                                                                        ) %
                                                                                                          40)
                                                                                                      );
                                                                                                    })(),
                                                                                                    " ",
                                                                                                    "min",
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                    e.jsxs(
                                                                                      "span",
                                                                                      {
                                                                                        className:
                                                                                          "font-mono opacity-50",
                                                                                        children:
                                                                                          [
                                                                                            "#",
                                                                                            (() => {
                                                                                              let Ot = 0;
                                                                                              const rs =
                                                                                                ae.id +
                                                                                                "order";
                                                                                              for (
                                                                                                let gs = 0;
                                                                                                gs <
                                                                                                rs.length;
                                                                                                gs++
                                                                                              )
                                                                                                ((Ot =
                                                                                                  (Ot <<
                                                                                                    5) -
                                                                                                  Ot +
                                                                                                  rs.charCodeAt(
                                                                                                    gs,
                                                                                                  )),
                                                                                                  (Ot |= 0));
                                                                                              return (
                                                                                                1e3 +
                                                                                                (Math.abs(
                                                                                                  Ot,
                                                                                                ) %
                                                                                                  9e3)
                                                                                              );
                                                                                            })(),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            (ae.status ===
                                                                              "pending" ||
                                                                              ae.status ===
                                                                                "ordered") &&
                                                                              !It &&
                                                                              e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "message-card-food-btn message-card-food-btn-done w-full mt-2 py-1 rounded text-[8px] font-bold transition-all shadow-sm flex items-center justify-center gap-1 uppercase tracking-wider border cursor-default",
                                                                                  children:
                                                                                    [
                                                                                      e.jsx(
                                                                                        On,
                                                                                        {
                                                                                          size: 9,
                                                                                          strokeWidth: 3,
                                                                                        },
                                                                                      ),
                                                                                      e.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          children:
                                                                                            "已为你下单",
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            ae.status ===
                                                                              "pending" &&
                                                                              It &&
                                                                              e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "message-card-food-btn message-card-food-btn-waiting w-full mt-2 py-1 rounded text-[8px] font-bold transition-all shadow-sm flex items-center justify-center gap-1 uppercase tracking-wider border cursor-default",
                                                                                  children:
                                                                                    [
                                                                                      e.jsx(
                                                                                        Dr,
                                                                                        {
                                                                                          size: 9,
                                                                                        },
                                                                                      ),
                                                                                      e.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          children:
                                                                                            "等待中",
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            ae.status ===
                                                                              "accepted" &&
                                                                              e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "message-card-food-btn message-card-food-btn-done w-full mt-2 py-1 rounded text-[8px] font-bold transition-all shadow-sm flex items-center justify-center gap-1 uppercase tracking-wider border cursor-default",
                                                                                  children:
                                                                                    [
                                                                                      e.jsx(
                                                                                        On,
                                                                                        {
                                                                                          size: 9,
                                                                                          strokeWidth: 3,
                                                                                        },
                                                                                      ),
                                                                                      e.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          children:
                                                                                            ae.paidByName
                                                                                              ? `${ae.paidByName} 已支付`
                                                                                              : "已支付",
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            ae.status ===
                                                                              "rejected" &&
                                                                              e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "message-card-food-btn message-card-food-btn-reject w-full mt-2 py-1 rounded text-[8px] font-bold transition-all shadow-sm flex items-center justify-center gap-1 uppercase tracking-wider border cursor-default",
                                                                                  children:
                                                                                    [
                                                                                      e.jsx(
                                                                                        Ts,
                                                                                        {
                                                                                          size: 9,
                                                                                          strokeWidth: 3,
                                                                                        },
                                                                                      ),
                                                                                      e.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          children:
                                                                                            "已拒绝",
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                    e.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "message-card-food-edge-bottom h-1.5 w-full bg-[#fffcf7] relative",
                                                                        style: {
                                                                          backgroundImage:
                                                                            "linear-gradient(45deg, transparent 75%, #fdfbf7 75%), linear-gradient(-45deg, transparent 75%, #fdfbf7 75%)",
                                                                          backgroundSize:
                                                                            "8px 8px",
                                                                          backgroundPosition:
                                                                            "0 0, 0 0",
                                                                        },
                                                                      },
                                                                    ),
                                                                  ],
                                                                }),
                                                                ae.translation &&
                                                                  (J ||
                                                                    b.has(
                                                                      ae.id,
                                                                    )) &&
                                                                  e.jsx("div", {
                                                                    className: `
                      px-3 py-2 text-[10px] rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 text-gray-400 max-w-[min(85%,20rem)]
                      ${It ? "self-end" : "self-start"}
                    `,
                                                                    children:
                                                                      ae.translation,
                                                                  }),
                                                              ],
                                                            })
                                                          : Le
                                                            ? e.jsx("div", {
                                                                className: `message-card-dice-punishment ${It ? "from-me" : "from-other"} ${Xt ? "ring-2 ring-[#5d4037] ring-offset-2" : ""}`,
                                                                children:
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "message-card-dice-punishment-inner",
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "message-card-dice-punishment-rule",
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "p",
                                                                            {
                                                                              className:
                                                                                "message-card-dice-punishment-label",
                                                                              children:
                                                                                "惩罚",
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "p",
                                                                            {
                                                                              className:
                                                                                "message-card-dice-punishment-content",
                                                                              children:
                                                                                ae.content ||
                                                                                ae.text ||
                                                                                "—",
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "message-card-dice-punishment-rule message-card-dice-punishment-rule-bottom",
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  ),
                                                              })
                                                            : _e
                                                              ? (() => {
                                                                  const Ot =
                                                                      !It,
                                                                    rs =
                                                                      Ot && T
                                                                        ? () =>
                                                                            T({
                                                                              name:
                                                                                ae.itemName ||
                                                                                ae.text,
                                                                              type: ae.itemType,
                                                                              sceneDesc:
                                                                                ae.sceneDesc,
                                                                              reason:
                                                                                ae.reason,
                                                                              heartVoice:
                                                                                ae.heartVoice,
                                                                            })
                                                                        : void 0,
                                                                    gs = rs
                                                                      ? "button"
                                                                      : "div";
                                                                  return e.jsxs(
                                                                    gs,
                                                                    {
                                                                      type: rs
                                                                        ? "button"
                                                                        : void 0,
                                                                      onClick:
                                                                        rs,
                                                                      className: `message-card-gashapon ${It ? "from-me" : "from-other"} w-48 bg-[#fffcf7] rounded-sm overflow-hidden shadow-md relative group/card transition-all hover:-translate-y-1 border border-[#f5e6d3] text-left ${rs ? "cursor-pointer active:scale-[0.98]" : ""} ${Xt ? "ring-2 ring-[#ffd9b3] ring-offset-2" : ""}`,
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "message-card-gashapon-header-bar absolute top-0 left-0 right-0 h-1.5 bg-[#ffd9b3]/50 rounded-t-sm",
                                                                            },
                                                                          ),
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "p-3 pt-4 relative",
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "absolute inset-0 opacity-5 pointer-events-none",
                                                                                      style:
                                                                                        {
                                                                                          backgroundImage:
                                                                                            "radial-gradient(#8d6e63 1px, transparent 1px)",
                                                                                          backgroundSize:
                                                                                            "6px 6px",
                                                                                        },
                                                                                    },
                                                                                  ),
                                                                                  e.jsx(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "message-card-gashapon-header flex justify-between items-start mb-2 border-b border-dashed border-[#e0d5c8] pb-1.5",
                                                                                      children:
                                                                                        e.jsxs(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "flex items-center gap-1.5",
                                                                                            children:
                                                                                              [
                                                                                                e.jsx(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "message-card-gashapon-icon w-6 h-6 rounded-full border border-[#ffd9b3] flex items-center justify-center text-[#bf360c] bg-white shadow-sm",
                                                                                                    children:
                                                                                                      e.jsx(
                                                                                                        Nl,
                                                                                                        {
                                                                                                          size: 12,
                                                                                                        },
                                                                                                      ),
                                                                                                  },
                                                                                                ),
                                                                                                e.jsxs(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "flex flex-col",
                                                                                                    children:
                                                                                                      [
                                                                                                        e.jsx(
                                                                                                          "span",
                                                                                                          {
                                                                                                            className:
                                                                                                              "message-card-gashapon-title text-[8px] font-black text-[#5d4037] uppercase tracking-widest",
                                                                                                            children:
                                                                                                              "扭蛋",
                                                                                                          },
                                                                                                        ),
                                                                                                        e.jsx(
                                                                                                          "span",
                                                                                                          {
                                                                                                            className:
                                                                                                              "message-card-gashapon-subtitle text-[7px] text-[#8d6e63]",
                                                                                                            children:
                                                                                                              yt[
                                                                                                                ae
                                                                                                                  .itemType
                                                                                                              ] ||
                                                                                                              ae.itemType ||
                                                                                                              "—",
                                                                                                          },
                                                                                                        ),
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                              ],
                                                                                          },
                                                                                        ),
                                                                                    },
                                                                                  ),
                                                                                  e.jsxs(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "message-card-gashapon-content flex flex-col gap-0.5",
                                                                                      children:
                                                                                        [
                                                                                          e.jsx(
                                                                                            "span",
                                                                                            {
                                                                                              className:
                                                                                                "message-card-gashapon-item-name text-sm font-serif font-bold text-[#5d4037] leading-tight line-clamp-2",
                                                                                              children:
                                                                                                ae.itemName ||
                                                                                                ae.text ||
                                                                                                "—",
                                                                                            },
                                                                                          ),
                                                                                          ae.sceneDesc
                                                                                            ? e.jsx(
                                                                                                "p",
                                                                                                {
                                                                                                  className:
                                                                                                    "message-card-gashapon-desc text-[9px] text-[#8d6e63] line-clamp-2 mt-1",
                                                                                                  children:
                                                                                                    ae.sceneDesc,
                                                                                                },
                                                                                              )
                                                                                            : null,
                                                                                          Ot &&
                                                                                          T
                                                                                            ? e.jsx(
                                                                                                "span",
                                                                                                {
                                                                                                  className:
                                                                                                    "message-card-gashapon-prompt text-[8px] text-[#8d6e63] mt-1",
                                                                                                  children:
                                                                                                    "点击查看详情",
                                                                                                },
                                                                                              )
                                                                                            : null,
                                                                                        ],
                                                                                    },
                                                                                  ),
                                                                                ],
                                                                            },
                                                                          ),
                                                                          e.jsx(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "message-card-gashapon-footer-bar h-1.5 w-full bg-[#fff8f0]",
                                                                              style:
                                                                                {
                                                                                  background:
                                                                                    "linear-gradient(90deg, #ffd9b3 0%, #ffb380 100%)",
                                                                                  opacity: 0.4,
                                                                                },
                                                                            },
                                                                          ),
                                                                        ],
                                                                    },
                                                                  );
                                                                })()
                                                              : rt
                                                                ? (() => {
                                                                    const Ot =
                                                                        ae.friendName ||
                                                                        "朋友",
                                                                      rs =
                                                                        ae.groupName ||
                                                                        null,
                                                                      gs =
                                                                        ae.messages ||
                                                                        [],
                                                                      ps = rs
                                                                        ? `与 ${rs} 的对话`
                                                                        : `与 ${Ot} 的对话`,
                                                                      Is =
                                                                        !It &&
                                                                        I &&
                                                                        gs.length >
                                                                          0
                                                                          ? () =>
                                                                              I(
                                                                                {
                                                                                  friendName:
                                                                                    ae.boundUserName ??
                                                                                    (rs
                                                                                      ? null
                                                                                      : Ot),
                                                                                  groupName:
                                                                                    rs ||
                                                                                    null,
                                                                                  messages:
                                                                                    gs,
                                                                                  roleName:
                                                                                    ae.roleName ??
                                                                                    (s ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : s.nickname) ??
                                                                                    (s ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : s.name) ??
                                                                                    "TA",
                                                                                  roleAvatar:
                                                                                    ae.roleAvatar ??
                                                                                    (s ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : s.avatar),
                                                                                  isBoundUserChat:
                                                                                    !!ae.boundUserName,
                                                                                  userAvatar:
                                                                                    ae.boundUserName
                                                                                      ? a ==
                                                                                        null
                                                                                        ? void 0
                                                                                        : a.avatar
                                                                                      : void 0,
                                                                                },
                                                                              )
                                                                          : void 0,
                                                                      As = Is
                                                                        ? "button"
                                                                        : "div";
                                                                    return e.jsxs(
                                                                      As,
                                                                      {
                                                                        type: Is
                                                                          ? "button"
                                                                          : void 0,
                                                                        onClick:
                                                                          Is,
                                                                        className: `message-card-forward-chat ${It ? "from-me" : "from-other"} block w-[172px] min-h-0 rounded-none overflow-hidden text-left ${Is ? "cursor-pointer active:scale-[0.98]" : ""} ${Xt ? "ring-2 ring-[#1a1a1a] ring-offset-2" : ""}`,
                                                                        children:
                                                                          [
                                                                            e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "message-card-forward-chat-header",
                                                                                children:
                                                                                  [
                                                                                    e.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-forward-chat-icon",
                                                                                        children:
                                                                                          e.jsx(
                                                                                            Ar,
                                                                                            {
                                                                                              size: 20,
                                                                                              strokeWidth: 1.8,
                                                                                            },
                                                                                          ),
                                                                                      },
                                                                                    ),
                                                                                    e.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-forward-chat-header-text",
                                                                                        children:
                                                                                          [
                                                                                            e.jsx(
                                                                                              "span",
                                                                                              {
                                                                                                className:
                                                                                                  "message-card-forward-chat-title",
                                                                                                children:
                                                                                                  "聊天记录",
                                                                                              },
                                                                                            ),
                                                                                            e.jsx(
                                                                                              "span",
                                                                                              {
                                                                                                className:
                                                                                                  "message-card-forward-chat-friend",
                                                                                                children:
                                                                                                  ps,
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            Is
                                                                              ? e.jsxs(
                                                                                  e.Fragment,
                                                                                  {
                                                                                    children:
                                                                                      [
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "message-card-forward-chat-rule",
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "message-card-forward-chat-cta",
                                                                                            children:
                                                                                              "点击查看",
                                                                                          },
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                )
                                                                              : null,
                                                                          ],
                                                                      },
                                                                    );
                                                                  })()
                                                                : lt
                                                                  ? (() => {
                                                                      const Ot =
                                                                          ae.checkinInviteStatus ||
                                                                          "pending",
                                                                        rs =
                                                                          ae.totalDays !=
                                                                          null
                                                                            ? ae.totalDays
                                                                            : "—",
                                                                        gs =
                                                                          ae.autoTime ||
                                                                          "—",
                                                                        ps =
                                                                          ae.remindTime ||
                                                                          "—",
                                                                        Is =
                                                                          ae.fromName ||
                                                                          (a ==
                                                                          null
                                                                            ? void 0
                                                                            : a.name) ||
                                                                          "我";
                                                                      return e.jsx(
                                                                        "div",
                                                                        {
                                                                          className: `message-card-ledger-checkin-invite message-card-ledger-checkin-invite--${Ot} ${It ? "from-me" : "from-other"} ${Xt ? "ring-2 ring-[#7EC8B8]/40 ring-offset-2 ring-offset-[#0d0d12]" : ""}`,
                                                                          children:
                                                                            e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  "message-card-ledger-checkin-invite-inner",
                                                                                children:
                                                                                  [
                                                                                    e.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-ledger-checkin-invite-icon",
                                                                                        children:
                                                                                          e.jsx(
                                                                                            Hy,
                                                                                            {
                                                                                              size: 22,
                                                                                              strokeWidth: 1.8,
                                                                                              className:
                                                                                                "text-white",
                                                                                            },
                                                                                          ),
                                                                                      },
                                                                                    ),
                                                                                    e.jsx(
                                                                                      "p",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-ledger-checkin-invite-kicker",
                                                                                        children:
                                                                                          "情侣空间 · 记账",
                                                                                      },
                                                                                    ),
                                                                                    e.jsx(
                                                                                      "p",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-ledger-checkin-invite-title",
                                                                                        children:
                                                                                          "一起记账打卡",
                                                                                      },
                                                                                    ),
                                                                                    e.jsxs(
                                                                                      "p",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-ledger-checkin-invite-from",
                                                                                        children:
                                                                                          [
                                                                                            Is,
                                                                                            " 邀请你",
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                    e.jsxs(
                                                                                      "ul",
                                                                                      {
                                                                                        className:
                                                                                          "message-card-ledger-checkin-invite-meta",
                                                                                        children:
                                                                                          [
                                                                                            e.jsxs(
                                                                                              "li",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "label",
                                                                                                        children:
                                                                                                          "坚持",
                                                                                                      },
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "value",
                                                                                                        children:
                                                                                                          [
                                                                                                            rs,
                                                                                                            " 天",
                                                                                                          ],
                                                                                                      },
                                                                                                    ),
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                            e.jsxs(
                                                                                              "li",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "label",
                                                                                                        children:
                                                                                                          "AI 记账",
                                                                                                      },
                                                                                                    ),
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "value",
                                                                                                        children:
                                                                                                          gs,
                                                                                                      },
                                                                                                    ),
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                            e.jsxs(
                                                                                              "li",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "label",
                                                                                                        children:
                                                                                                          "提醒",
                                                                                                      },
                                                                                                    ),
                                                                                                    e.jsx(
                                                                                                      "span",
                                                                                                      {
                                                                                                        className:
                                                                                                          "value",
                                                                                                        children:
                                                                                                          ps,
                                                                                                      },
                                                                                                    ),
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                    Ot ===
                                                                                      "pending" &&
                                                                                      e.jsx(
                                                                                        "p",
                                                                                        {
                                                                                          className:
                                                                                            "message-card-ledger-checkin-invite-status",
                                                                                          children:
                                                                                            "等 TA 回复…",
                                                                                        },
                                                                                      ),
                                                                                    Ot ===
                                                                                      "accepted" &&
                                                                                      e.jsx(
                                                                                        "p",
                                                                                        {
                                                                                          className:
                                                                                            "message-card-ledger-checkin-invite-status message-card-ledger-checkin-invite-status--ok",
                                                                                          children:
                                                                                            "已答应一起打卡",
                                                                                        },
                                                                                      ),
                                                                                    Ot ===
                                                                                      "rejected" &&
                                                                                      e.jsx(
                                                                                        "p",
                                                                                        {
                                                                                          className:
                                                                                            "message-card-ledger-checkin-invite-status message-card-ledger-checkin-invite-status--no",
                                                                                          children:
                                                                                            "未接受邀请",
                                                                                        },
                                                                                      ),
                                                                                  ],
                                                                              },
                                                                            ),
                                                                        },
                                                                      );
                                                                    })()
                                                                  : it
                                                                    ? (() => {
                                                                        const Ot =
                                                                            (vs ==
                                                                            null
                                                                              ? void 0
                                                                              : vs.payload) ||
                                                                            ae.seasonConfig ||
                                                                            {},
                                                                          rs =
                                                                            (vs ==
                                                                            null
                                                                              ? void 0
                                                                              : vs.status) ||
                                                                            ae.seasonInviteStatus ||
                                                                            "pending",
                                                                          gs =
                                                                            (Ot ==
                                                                            null
                                                                              ? void 0
                                                                              : Ot.themeType) ===
                                                                            "daily"
                                                                              ? "日常向"
                                                                              : `自定义${Ot != null && Ot.customThemeText ? `(${Ot.customThemeText})` : ""}`,
                                                                          ps =
                                                                            rs ===
                                                                            "accepted"
                                                                              ? "accepted"
                                                                              : rs ===
                                                                                  "pending"
                                                                                ? "pending"
                                                                                : "rejected";
                                                                        return e.jsxs(
                                                                          "div",
                                                                          {
                                                                            className: `pr-2 pl-2 relative flex justify-end max-w-[280px] ${Xt ? "ring-2 ring-[#A38F72]/30 ring-offset-2" : ""}`,
                                                                            children:
                                                                              [
                                                                                e.jsx(
                                                                                  tI,
                                                                                  {
                                                                                    className:
                                                                                      "absolute right-1 top-[-12px] w-4 h-4 text-[#A38F72]",
                                                                                  },
                                                                                ),
                                                                                e.jsxs(
                                                                                  "div",
                                                                                  {
                                                                                    className: `relative w-full bg-[#FDFCF8] transition-all duration-500 overflow-hidden ${ps === "pending" ? "border border-[#2C2A29]" : ps === "accepted" ? "border border-[#A38F72] shadow-[0_8px_20px_rgba(163,143,114,0.15)] bg-gradient-to-b from-[#FDFCF8] to-[#F5F3ED]" : "border border-[#D4C4B7] opacity-90 grayscale-[20%]"}`,
                                                                                    children:
                                                                                      [
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-[#2C2A29]",
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-[#2C2A29]",
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-[#2C2A29]",
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-[#2C2A29]",
                                                                                          },
                                                                                        ),
                                                                                        e.jsxs(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "p-3 border-b border-[#2C2A29] relative bg-[#F5F3ED]/80",
                                                                                            children:
                                                                                              [
                                                                                                e.jsx(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "absolute top-0 right-3 bg-[#2C2A29] text-[#FDFCF8] text-[8px] px-2 py-1 tracking-widest uppercase rounded-b-sm font-mono",
                                                                                                    children:
                                                                                                      "Sender Copy",
                                                                                                  },
                                                                                                ),
                                                                                                e.jsxs(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "flex items-center gap-2 mb-1 mt-2",
                                                                                                    children:
                                                                                                      [
                                                                                                        e.jsx(
                                                                                                          ro,
                                                                                                          {
                                                                                                            className:
                                                                                                              "w-3.5 h-3.5 text-[#2C2A29]",
                                                                                                          },
                                                                                                        ),
                                                                                                        e.jsx(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-[9px] text-[#2C2A29] tracking-[0.2em] uppercase font-medium",
                                                                                                            children:
                                                                                                              "Outbound Proposal",
                                                                                                          },
                                                                                                        ),
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                                e.jsx(
                                                                                                  "h3",
                                                                                                  {
                                                                                                    className:
                                                                                                      "text-base font-serif text-[#2C2A29]",
                                                                                                    children:
                                                                                                      "赛季巡游提案",
                                                                                                  },
                                                                                                ),
                                                                                              ],
                                                                                          },
                                                                                        ),
                                                                                        e.jsxs(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "p-3 grid grid-cols-3 gap-2 text-[#2C2A29]",
                                                                                            children:
                                                                                              [
                                                                                                e.jsxs(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "border-r border-[#E5E0D8]",
                                                                                                    children:
                                                                                                      [
                                                                                                        e.jsxs(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-[9px] text-[#8C857B] mb-1 flex items-center gap-1",
                                                                                                            children:
                                                                                                              [
                                                                                                                e.jsx(
                                                                                                                  Dr,
                                                                                                                  {
                                                                                                                    className:
                                                                                                                      "w-2.5 h-2.5",
                                                                                                                  },
                                                                                                                ),
                                                                                                                "周期",
                                                                                                              ],
                                                                                                          },
                                                                                                        ),
                                                                                                        e.jsxs(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-xs font-serif",
                                                                                                            children:
                                                                                                              [
                                                                                                                (Ot ==
                                                                                                                null
                                                                                                                  ? void 0
                                                                                                                  : Ot.totalDays) ||
                                                                                                                  "--",
                                                                                                                "天",
                                                                                                              ],
                                                                                                          },
                                                                                                        ),
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                                e.jsxs(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "border-r border-[#E5E0D8] pl-1",
                                                                                                    children:
                                                                                                      [
                                                                                                        e.jsxs(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-[9px] text-[#8C857B] mb-1 flex items-center gap-1",
                                                                                                            children:
                                                                                                              [
                                                                                                                e.jsx(
                                                                                                                  Lu,
                                                                                                                  {
                                                                                                                    className:
                                                                                                                      "w-2.5 h-2.5",
                                                                                                                  },
                                                                                                                ),
                                                                                                                "剧本",
                                                                                                              ],
                                                                                                          },
                                                                                                        ),
                                                                                                        e.jsx(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-xs font-serif truncate",
                                                                                                            children:
                                                                                                              gs,
                                                                                                          },
                                                                                                        ),
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                                e.jsxs(
                                                                                                  "div",
                                                                                                  {
                                                                                                    className:
                                                                                                      "pl-1",
                                                                                                    children:
                                                                                                      [
                                                                                                        e.jsxs(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-[9px] text-[#8C857B] mb-1 flex items-center gap-1",
                                                                                                            children:
                                                                                                              [
                                                                                                                e.jsx(
                                                                                                                  Wr,
                                                                                                                  {
                                                                                                                    className:
                                                                                                                      "w-2.5 h-2.5",
                                                                                                                  },
                                                                                                                ),
                                                                                                                "强度",
                                                                                                              ],
                                                                                                          },
                                                                                                        ),
                                                                                                        e.jsx(
                                                                                                          "p",
                                                                                                          {
                                                                                                            className:
                                                                                                              "text-xs font-serif",
                                                                                                            children:
                                                                                                              (Ot ==
                                                                                                              null
                                                                                                                ? void 0
                                                                                                                : Ot.difficulty) ||
                                                                                                              "--",
                                                                                                          },
                                                                                                        ),
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                              ],
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "bg-[#1A1A1A] p-3 text-[#FDFCF8]",
                                                                                            children:
                                                                                              ps ===
                                                                                              "pending"
                                                                                                ? e.jsxs(
                                                                                                    "div",
                                                                                                    {
                                                                                                      className:
                                                                                                        "flex items-center justify-between",
                                                                                                      children:
                                                                                                        [
                                                                                                          e.jsxs(
                                                                                                            "div",
                                                                                                            {
                                                                                                              className:
                                                                                                                "flex items-center gap-2",
                                                                                                              children:
                                                                                                                [
                                                                                                                  e.jsx(
                                                                                                                    Sn,
                                                                                                                    {
                                                                                                                      className:
                                                                                                                        "w-4 h-4 text-[#A38F72] animate-spin",
                                                                                                                    },
                                                                                                                  ),
                                                                                                                  e.jsx(
                                                                                                                    "p",
                                                                                                                    {
                                                                                                                      className:
                                                                                                                        "text-[11px] text-[#FDFCF8]",
                                                                                                                      children:
                                                                                                                        "等待 TA 协商回复...",
                                                                                                                    },
                                                                                                                  ),
                                                                                                                ],
                                                                                                            },
                                                                                                          ),
                                                                                                          e.jsx(
                                                                                                            "span",
                                                                                                            {
                                                                                                              className:
                                                                                                                "w-2 h-2 rounded-full bg-[#A38F72] animate-pulse",
                                                                                                            },
                                                                                                          ),
                                                                                                        ],
                                                                                                    },
                                                                                                  )
                                                                                                : ps ===
                                                                                                    "accepted"
                                                                                                  ? e.jsxs(
                                                                                                      "div",
                                                                                                      {
                                                                                                        className:
                                                                                                          "space-y-2",
                                                                                                        children:
                                                                                                          [
                                                                                                            e.jsxs(
                                                                                                              "div",
                                                                                                              {
                                                                                                                className:
                                                                                                                  "flex items-center gap-2 border-b border-[#5A5550]/50 pb-2",
                                                                                                                children:
                                                                                                                  [
                                                                                                                    e.jsx(
                                                                                                                      On,
                                                                                                                      {
                                                                                                                        className:
                                                                                                                          "w-4 h-4 text-[#A38F72]",
                                                                                                                        strokeWidth: 3,
                                                                                                                      },
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                      "p",
                                                                                                                      {
                                                                                                                        className:
                                                                                                                          "text-[11px] text-[#A38F72]",
                                                                                                                        children:
                                                                                                                          "协议已签署生效",
                                                                                                                      },
                                                                                                                    ),
                                                                                                                  ],
                                                                                                              },
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                              "button",
                                                                                                              {
                                                                                                                type: "button",
                                                                                                                onClick:
                                                                                                                  () =>
                                                                                                                    ve(
                                                                                                                      "open",
                                                                                                                    ),
                                                                                                                className:
                                                                                                                  "w-full py-2 bg-[#FDFCF8] text-[#2C2A29] text-[10px] font-bold tracking-[0.18em] flex justify-center items-center gap-2 uppercase",
                                                                                                                children:
                                                                                                                  [
                                                                                                                    "进入赛季旅程 ",
                                                                                                                    e.jsx(
                                                                                                                      so,
                                                                                                                      {
                                                                                                                        className:
                                                                                                                          "w-3 h-3",
                                                                                                                      },
                                                                                                                    ),
                                                                                                                  ],
                                                                                                              },
                                                                                                            ),
                                                                                                          ],
                                                                                                      },
                                                                                                    )
                                                                                                  : e.jsxs(
                                                                                                      "div",
                                                                                                      {
                                                                                                        className:
                                                                                                          "space-y-2",
                                                                                                        children:
                                                                                                          [
                                                                                                            e.jsxs(
                                                                                                              "div",
                                                                                                              {
                                                                                                                className:
                                                                                                                  "flex items-center gap-2 border-b border-[#5A5550]/50 pb-2",
                                                                                                                children:
                                                                                                                  [
                                                                                                                    e.jsx(
                                                                                                                      Ts,
                                                                                                                      {
                                                                                                                        className:
                                                                                                                          "w-4 h-4 text-[#8C857B]",
                                                                                                                        strokeWidth: 2,
                                                                                                                      },
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                      "p",
                                                                                                                      {
                                                                                                                        className:
                                                                                                                          "text-[11px] text-[#8C857B]",
                                                                                                                        children:
                                                                                                                          rs ===
                                                                                                                          "failed"
                                                                                                                            ? "协商超时，请重新发起"
                                                                                                                            : "对方希望重新调整参数",
                                                                                                                      },
                                                                                                                    ),
                                                                                                                  ],
                                                                                                              },
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                              "button",
                                                                                                              {
                                                                                                                type: "button",
                                                                                                                onClick:
                                                                                                                  () =>
                                                                                                                    ve(
                                                                                                                      "redraft",
                                                                                                                    ),
                                                                                                                className:
                                                                                                                  "w-full py-2 bg-transparent border border-[#5A5550] text-[#E5E0D8] text-[10px] tracking-[0.18em] flex justify-center items-center gap-2",
                                                                                                                children:
                                                                                                                  [
                                                                                                                    e.jsx(
                                                                                                                      Or,
                                                                                                                      {
                                                                                                                        className:
                                                                                                                          "w-3 h-3",
                                                                                                                      },
                                                                                                                    ),
                                                                                                                    " 重新拟定并发送",
                                                                                                                  ],
                                                                                                              },
                                                                                                            ),
                                                                                                          ],
                                                                                                      },
                                                                                                    ),
                                                                                          },
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                ),
                                                                              ],
                                                                          },
                                                                        );
                                                                      })()
                                                                    : Ht
                                                                      ? (() => {
                                                                          const Ot =
                                                                              (vs ==
                                                                              null
                                                                                ? void 0
                                                                                : vs.payload) ||
                                                                              {},
                                                                            rs =
                                                                              String(
                                                                                (vs ==
                                                                                null
                                                                                  ? void 0
                                                                                  : vs.status) ||
                                                                                  ae.seasonDecision ||
                                                                                  "accepted",
                                                                              ),
                                                                            gs =
                                                                              rs ===
                                                                              "rejected"
                                                                                ? "已拒绝"
                                                                                : rs ===
                                                                                    "counter_proposal"
                                                                                  ? "反建议"
                                                                                  : "已同意",
                                                                            ps =
                                                                              Ot.counterProposal ||
                                                                              ae.seasonCounterProposal,
                                                                            As =
                                                                              (
                                                                                Array.isArray(
                                                                                  Ot.messageLines,
                                                                                )
                                                                                  ? Ot.messageLines
                                                                                  : Array.isArray(
                                                                                        ae.seasonMessageLines,
                                                                                      )
                                                                                    ? ae.seasonMessageLines
                                                                                    : []
                                                                              )
                                                                                .map(
                                                                                  (
                                                                                    Ks,
                                                                                  ) =>
                                                                                    String(
                                                                                      Ks ||
                                                                                        "",
                                                                                    ).trim(),
                                                                                )
                                                                                .filter(
                                                                                  Boolean,
                                                                                );
                                                                          return e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className: `rounded-xl border border-[#E6E0D7] bg-white px-3 py-3 w-[198px] ${Xt ? "ring-2 ring-[#A38F72]/30 ring-offset-2" : ""}`,
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "text-[10px] tracking-widest text-[#9C8D78]",
                                                                                      children:
                                                                                        "赛季旅程 · 协商结果",
                                                                                    },
                                                                                  ),
                                                                                  e.jsx(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "text-sm font-semibold text-[#2C2A29] mt-1",
                                                                                      children:
                                                                                        gs,
                                                                                    },
                                                                                  ),
                                                                                  As.length >
                                                                                  0
                                                                                    ? e.jsx(
                                                                                        "div",
                                                                                        {
                                                                                          className:
                                                                                            "text-[11px] text-[#645A4E] mt-2 leading-relaxed space-y-1",
                                                                                          children:
                                                                                            As.map(
                                                                                              (
                                                                                                Ks,
                                                                                                on,
                                                                                              ) =>
                                                                                                e.jsx(
                                                                                                  "p",
                                                                                                  {
                                                                                                    children:
                                                                                                      Ks,
                                                                                                  },
                                                                                                  `${on}-${Ks.slice(0, 12)}`,
                                                                                                ),
                                                                                            ),
                                                                                        },
                                                                                      )
                                                                                    : null,
                                                                                  ps
                                                                                    ? e.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                          className:
                                                                                            "mt-2 border border-[#EFE8DC] bg-[#FBF8F2] px-2 py-2 text-[11px] text-[#5E5448] space-y-1",
                                                                                          children:
                                                                                            [
                                                                                              e.jsxs(
                                                                                                "p",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "建议时长：",
                                                                                                      ps.totalDays,
                                                                                                      " 天",
                                                                                                    ],
                                                                                                },
                                                                                              ),
                                                                                              e.jsxs(
                                                                                                "p",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "建议主题：",
                                                                                                      ps.themeType ===
                                                                                                      "daily"
                                                                                                        ? "日常向"
                                                                                                        : `自定义(${ps.customThemeText || "未命名"})`,
                                                                                                    ],
                                                                                                },
                                                                                              ),
                                                                                              e.jsxs(
                                                                                                "p",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "建议难度：",
                                                                                                      ps.difficulty,
                                                                                                    ],
                                                                                                },
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                      )
                                                                                    : null,
                                                                                ],
                                                                            },
                                                                          );
                                                                        })()
                                                                      : is
                                                                        ? (() => {
                                                                            const Ot =
                                                                              (vs ==
                                                                              null
                                                                                ? void 0
                                                                                : vs.payload) ||
                                                                              {};
                                                                            return e.jsxs(
                                                                              "div",
                                                                              {
                                                                                className: `rounded-xl border border-[#E6E0D7] bg-[#F8FBF7] px-3 py-3 w-[198px] ${Xt ? "ring-2 ring-[#A38F72]/30 ring-offset-2" : ""}`,
                                                                                children:
                                                                                  [
                                                                                    e.jsx(
                                                                                      "p",
                                                                                      {
                                                                                        className:
                                                                                          "text-[10px] tracking-widest text-[#6C8B73]",
                                                                                        children:
                                                                                          "赛季旅程 · 任务生成",
                                                                                      },
                                                                                    ),
                                                                                    e.jsx(
                                                                                      "p",
                                                                                      {
                                                                                        className:
                                                                                          "text-sm font-semibold text-[#2C2A29] mt-1",
                                                                                        children:
                                                                                          "任务计划已生成",
                                                                                      },
                                                                                    ),
                                                                                    e.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "mt-2 text-[11px] text-[#4F6455] space-y-1",
                                                                                        children:
                                                                                          [
                                                                                            e.jsxs(
                                                                                              "p",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    "计划ID：",
                                                                                                    Ot.planId ||
                                                                                                      ae.seasonPlanId ||
                                                                                                      "--",
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                            e.jsxs(
                                                                                              "p",
                                                                                              {
                                                                                                children:
                                                                                                  [
                                                                                                    "赛季天数：",
                                                                                                    Ot.days ||
                                                                                                      ae.seasonPlanDays ||
                                                                                                      "--",
                                                                                                    " 天",
                                                                                                  ],
                                                                                              },
                                                                                            ),
                                                                                          ],
                                                                                      },
                                                                                    ),
                                                                                    ae.text
                                                                                      ? e.jsx(
                                                                                          "p",
                                                                                          {
                                                                                            className:
                                                                                              "text-[10px] text-[#7E8F81] mt-2",
                                                                                            children:
                                                                                              ae.text,
                                                                                          },
                                                                                        )
                                                                                      : null,
                                                                                  ],
                                                                              },
                                                                            );
                                                                          })()
                                                                        : os
                                                                          ? (() => {
                                                                              const Ot =
                                                                                  (vs ==
                                                                                  null
                                                                                    ? void 0
                                                                                    : vs.payload) ||
                                                                                  {},
                                                                                rs =
                                                                                  (vs ==
                                                                                  null
                                                                                    ? void 0
                                                                                    : vs.status) ||
                                                                                  ae.seasonReviewStatus ||
                                                                                  "pending",
                                                                                gs =
                                                                                  rs ===
                                                                                  "resolved"
                                                                                    ? "复议已完成"
                                                                                    : rs ===
                                                                                        "failed"
                                                                                      ? "复议失败"
                                                                                      : "复议处理中";
                                                                              return e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className: `rounded-xl border border-[#E6E0D7] bg-[#FFF9F2] px-3 py-3 w-[205px] ${Xt ? "ring-2 ring-[#A38F72]/30 ring-offset-2" : ""}`,
                                                                                  children:
                                                                                    [
                                                                                      e.jsx(
                                                                                        "p",
                                                                                        {
                                                                                          className:
                                                                                            "text-[10px] tracking-widest text-[#B08558]",
                                                                                          children:
                                                                                            "赛季旅程 · 复议请求",
                                                                                        },
                                                                                      ),
                                                                                      e.jsx(
                                                                                        "p",
                                                                                        {
                                                                                          className:
                                                                                            "text-sm font-semibold text-[#2C2A29] mt-1",
                                                                                          children:
                                                                                            gs,
                                                                                        },
                                                                                      ),
                                                                                      e.jsxs(
                                                                                        "div",
                                                                                        {
                                                                                          className:
                                                                                            "mt-2 text-[11px] text-[#6A5540] space-y-1",
                                                                                          children:
                                                                                            [
                                                                                              e.jsxs(
                                                                                                "p",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "Day ",
                                                                                                      Ot.dayIndex ||
                                                                                                        ae.seasonReviewDayIndex ||
                                                                                                        "--",
                                                                                                      " ·",
                                                                                                      " ",
                                                                                                      Ot.taskId ||
                                                                                                        ae.seasonReviewTaskId ||
                                                                                                        "--",
                                                                                                    ],
                                                                                                },
                                                                                              ),
                                                                                              e.jsxs(
                                                                                                "p",
                                                                                                {
                                                                                                  children:
                                                                                                    [
                                                                                                      "理由：",
                                                                                                      Ot.reason ||
                                                                                                        ae.seasonReviewReason ||
                                                                                                        "未填写",
                                                                                                    ],
                                                                                                },
                                                                                              ),
                                                                                              rs ===
                                                                                              "resolved"
                                                                                                ? e.jsxs(
                                                                                                    "p",
                                                                                                    {
                                                                                                      children:
                                                                                                        [
                                                                                                          "结果：",
                                                                                                          Ot.decision ||
                                                                                                            ae.seasonReviewDecision ||
                                                                                                            "--",
                                                                                                          " /",
                                                                                                          " ",
                                                                                                          Ot.finalTaskStatus ||
                                                                                                            ae.seasonReviewFinalTaskStatus ||
                                                                                                            "--",
                                                                                                        ],
                                                                                                    },
                                                                                                  )
                                                                                                : null,
                                                                                            ],
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              );
                                                                            })()
                                                                          : as
                                                                            ? (() => {
                                                                                const Ot =
                                                                                    (vs ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : vs.payload) ||
                                                                                    {},
                                                                                  gs =
                                                                                    ((vs ==
                                                                                    null
                                                                                      ? void 0
                                                                                      : vs.status) ||
                                                                                      ae.seasonResult) ===
                                                                                    "success";
                                                                                return e.jsxs(
                                                                                  "div",
                                                                                  {
                                                                                    className: `rounded-xl border px-3 py-3 w-[205px] ${gs ? "border-emerald-200 bg-emerald-50/70" : "border-rose-200 bg-rose-50/70"} ${Xt ? "ring-2 ring-[#A38F72]/30 ring-offset-2" : ""}`,
                                                                                    children:
                                                                                      [
                                                                                        e.jsx(
                                                                                          "p",
                                                                                          {
                                                                                            className:
                                                                                              "text-[10px] tracking-widest text-[#8A7F70]",
                                                                                            children:
                                                                                              "赛季旅程 · 结算",
                                                                                          },
                                                                                        ),
                                                                                        e.jsx(
                                                                                          "p",
                                                                                          {
                                                                                            className:
                                                                                              "text-sm font-semibold text-[#2C2A29] mt-1",
                                                                                            children:
                                                                                              gs
                                                                                                ? "挑战成功"
                                                                                                : "挑战失败",
                                                                                          },
                                                                                        ),
                                                                                        e.jsxs(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "mt-2 text-[11px] text-[#5E5448] space-y-1",
                                                                                            children:
                                                                                              [
                                                                                                e.jsxs(
                                                                                                  "p",
                                                                                                  {
                                                                                                    children:
                                                                                                      [
                                                                                                        "失败天数：",
                                                                                                        Ot.failedDays ??
                                                                                                          ae.seasonFailedDays ??
                                                                                                          "--",
                                                                                                        " /",
                                                                                                        " ",
                                                                                                        Ot.totalDays ??
                                                                                                          ae.seasonTotalDays ??
                                                                                                          "--",
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                                e.jsxs(
                                                                                                  "p",
                                                                                                  {
                                                                                                    children:
                                                                                                      [
                                                                                                        "失败占比：",
                                                                                                        typeof (
                                                                                                          Ot.failRatio ??
                                                                                                          ae.seasonFailRatio
                                                                                                        ) ==
                                                                                                        "number"
                                                                                                          ? `${((Ot.failRatio ?? ae.seasonFailRatio) * 100).toFixed(1)}%`
                                                                                                          : "--",
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                              ],
                                                                                          },
                                                                                        ),
                                                                                      ],
                                                                                  },
                                                                                );
                                                                              })()
                                                                            : ts
                                                                              ? (() => {
                                                                                  const Ot =
                                                                                      ae.memoryRewriteCard &&
                                                                                      typeof ae.memoryRewriteCard ==
                                                                                        "object"
                                                                                        ? ae.memoryRewriteCard
                                                                                        : {},
                                                                                    rs =
                                                                                      Ot.sourceType ===
                                                                                      "ai_daily_event"
                                                                                        ? "当天事件"
                                                                                        : "聊天片段",
                                                                                    gs =
                                                                                      String(
                                                                                        Ot.theme ||
                                                                                          "日常",
                                                                                      ).trim(),
                                                                                    ps =
                                                                                      String(
                                                                                        Ot.rewriteText ||
                                                                                          "",
                                                                                      ).trim(),
                                                                                    Is =
                                                                                      String(
                                                                                        Ot.sourceText ||
                                                                                          "",
                                                                                      ).trim(),
                                                                                    As =
                                                                                      ps ||
                                                                                      Is ||
                                                                                      String(
                                                                                        ae.text ||
                                                                                          "",
                                                                                      ).trim(),
                                                                                    Ks =
                                                                                      String(
                                                                                        Ot.highlight ||
                                                                                          "",
                                                                                      ).trim(),
                                                                                    on =
                                                                                      typeof Ot.personaConsistencyScore ==
                                                                                      "number"
                                                                                        ? Math.max(
                                                                                            0,
                                                                                            Math.min(
                                                                                              100,
                                                                                              Ot.personaConsistencyScore,
                                                                                            ),
                                                                                          )
                                                                                        : null,
                                                                                    tn =
                                                                                      typeof Ot.greasyRiskScore ==
                                                                                      "number"
                                                                                        ? Math.max(
                                                                                            0,
                                                                                            Math.min(
                                                                                              100,
                                                                                              Ot.greasyRiskScore,
                                                                                            ),
                                                                                          )
                                                                                        : null,
                                                                                    dn =
                                                                                      String(
                                                                                        Ot.fallbackLevel ||
                                                                                          "none",
                                                                                      ).trim();
                                                                                  return e.jsxs(
                                                                                    "div",
                                                                                    {
                                                                                      className: `message-card-memory-rewrite ${It ? "from-me" : "from-other"} ${Xt ? "ring-2 ring-[#D8CDC0] ring-offset-2" : ""}`,
                                                                                      children:
                                                                                        [
                                                                                          e.jsxs(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "message-card-memory-rewrite-head",
                                                                                              children:
                                                                                                [
                                                                                                  e.jsx(
                                                                                                    "p",
                                                                                                    {
                                                                                                      className:
                                                                                                        "message-card-memory-rewrite-kicker",
                                                                                                      children:
                                                                                                        "回忆改写 · 平行回响",
                                                                                                    },
                                                                                                  ),
                                                                                                  e.jsx(
                                                                                                    "p",
                                                                                                    {
                                                                                                      className:
                                                                                                        "message-card-memory-rewrite-sub",
                                                                                                      children:
                                                                                                        rs,
                                                                                                    },
                                                                                                  ),
                                                                                                ],
                                                                                            },
                                                                                          ),
                                                                                          e.jsx(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "message-card-memory-rewrite-meta",
                                                                                              children:
                                                                                                e.jsx(
                                                                                                  "span",
                                                                                                  {
                                                                                                    children:
                                                                                                      gs,
                                                                                                  },
                                                                                                ),
                                                                                            },
                                                                                          ),
                                                                                          e.jsx(
                                                                                            "p",
                                                                                            {
                                                                                              className:
                                                                                                "message-card-memory-rewrite-body",
                                                                                              children:
                                                                                                As ||
                                                                                                "已完成回忆改写",
                                                                                            },
                                                                                          ),
                                                                                          Ks
                                                                                            ? e.jsxs(
                                                                                                "p",
                                                                                                {
                                                                                                  className:
                                                                                                    "message-card-memory-rewrite-highlight",
                                                                                                  children:
                                                                                                    [
                                                                                                      "关键改变：",
                                                                                                      Ks,
                                                                                                    ],
                                                                                                },
                                                                                              )
                                                                                            : null,
                                                                                          e.jsxs(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                "message-card-memory-rewrite-foot",
                                                                                              children:
                                                                                                [
                                                                                                  on !=
                                                                                                  null
                                                                                                    ? e.jsxs(
                                                                                                        "span",
                                                                                                        {
                                                                                                          children:
                                                                                                            [
                                                                                                              "一致性 ",
                                                                                                              on,
                                                                                                            ],
                                                                                                        },
                                                                                                      )
                                                                                                    : e.jsx(
                                                                                                        "span",
                                                                                                        {
                                                                                                          children:
                                                                                                            "一致性 --",
                                                                                                        },
                                                                                                      ),
                                                                                                  tn !=
                                                                                                  null
                                                                                                    ? e.jsxs(
                                                                                                        "span",
                                                                                                        {
                                                                                                          children:
                                                                                                            [
                                                                                                              "油腻风险 ",
                                                                                                              tn,
                                                                                                            ],
                                                                                                        },
                                                                                                      )
                                                                                                    : e.jsx(
                                                                                                        "span",
                                                                                                        {
                                                                                                          children:
                                                                                                            "油腻风险 --",
                                                                                                        },
                                                                                                      ),
                                                                                                  e.jsx(