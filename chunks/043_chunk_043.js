                                          children: u(m.timestamp),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-medium px-1.5 py-0.5 bg-gray-100 rounded text-gray-500",
                                          children: m.provider || "Unknown",
                                        }),
                                        m.duration &&
                                          e.jsxs("span", {
                                            className:
                                              "text-[10px] font-medium px-1.5 py-0.5 bg-green-50 text-green-600 rounded",
                                            children: [m.duration, "ms"],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                m.audioUrl &&
                                  e.jsx("button", {
                                    onClick: (h) => p(h, m),
                                    className:
                                      "p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors",
                                    children:
                                      i === m.id
                                        ? e.jsx(Sl, { size: 16 })
                                        : e.jsx(xr, { size: 16 }),
                                  }),
                                a === m.id
                                  ? e.jsx(hp, {
                                      size: 16,
                                      className: "text-gray-400",
                                    })
                                  : e.jsx(aa, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        a === m.id &&
                          e.jsxs("div", {
                            className:
                              "px-4 pb-4 pt-0 border-t border-gray-50 bg-gray-50/30",
                            children: [
                              e.jsxs("div", {
                                className: "mt-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5",
                                    children: "Full Text",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "bg-white p-3 rounded-lg border border-gray-100 text-xs text-gray-700 whitespace-pre-wrap leading-relaxed",
                                    children: m.text,
                                  }),
                                ],
                              }),
                              m.options &&
                                e.jsxs("div", {
                                  className: "mt-3",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5",
                                      children: "Options",
                                    }),
                                    e.jsx("pre", {
                                      className:
                                        "bg-white p-3 rounded-lg border border-gray-100 text-[10px] text-gray-600 font-mono overflow-x-auto",
                                      children: JSON.stringify(
                                        m.options,
                                        null,
                                        2,
                                      ),
                                    }),
                                  ],
                                }),
                              m.error &&
                                e.jsxs("div", {
                                  className: "mt-3",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[10px] font-bold text-red-600 uppercase tracking-wider mb-1.5",
                                      children: "Error",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "bg-red-50 p-3 rounded-lg border border-red-100 text-xs text-red-600 font-mono shadow-sm whitespace-pre-wrap break-all select-text",
                                      children: m.error,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    },
                    m.id,
                  ),
                ),
        }),
      ],
    });
  },
  _Y = ({
    show: t,
    onClose: s,
    voiceContent: n,
    setVoiceContent: a,
    onSend: r,
  }) => {
    const [i, o] = l.useState("text"),
      [c, d] = l.useState(!1),
      [u, f] = l.useState(0),
      [p, m] = l.useState(null),
      [h, g] = l.useState(null),
      [x, y] = l.useState(""),
      v = l.useRef(null),
      b = l.useRef(null),
      N = l.useRef([]),
      w = l.useRef(null),
      _ = l.useRef(null);
    l.useEffect(() => {
      if (
        !t &&
        (o("text"),
        d(!1),
        f(0),
        m(null),
        y(""),
        h && URL.revokeObjectURL(h),
        g(null),
        w.current && clearInterval(w.current),
        b.current)
      )
        try {
          b.current.stop();
        } catch {}
    }, [t]);
    const A = async () => {
        try {
          const S = await navigator.mediaDevices.getUserMedia({ audio: !0 });
          if (
            ((v.current = new MediaRecorder(S)),
            (N.current = []),
            (v.current.ondataavailable = (j) => {
              j.data.size > 0 && N.current.push(j.data);
            }),
            (v.current.onstop = () => {
              const j = new Blob(N.current, { type: "audio/webm" });
              m(j);
              const T = URL.createObjectURL(j);
              (g(T), S.getTracks().forEach((I) => I.stop()));
            }),
            "webkitSpeechRecognition" in window ||
              "SpeechRecognition" in window)
          ) {
            const j =
              window.SpeechRecognition || window.webkitSpeechRecognition;
            ((b.current = new j()),
              (b.current.continuous = !0),
              (b.current.interimResults = !0),
              (b.current.lang = "zh-CN"),
              (b.current.onresult = (T) => {
                let I = "";
                for (let L = T.resultIndex; L < T.results.length; ++L)
                  T.results[L].isFinal && (I += T.results[L][0].transcript);
                I && y((L) => L + I);
              }),
              b.current.start());
          }
          (v.current.start(),
            d(!0),
            f(0),
            y(""),
            (w.current = setInterval(() => {
              f((j) => j + 1);
            }, 1e3)));
        } catch {
          alert("无法访问麦克风，请检查权限");
        }
      },
      k = () => {
        if (v.current && c) {
          if ((v.current.stop(), b.current))
            try {
              b.current.stop();
            } catch {}
          (d(!1), w.current && clearInterval(w.current));
        }
      },
      C = () => {
        (m(null), h && URL.revokeObjectURL(h), g(null), f(0), y(""));
      },
      M = () => {
        if (i === "text") r(n, "text");
        else {
          if (!p) return;
          r("[语音消息]", "audio", { blob: p, duration: u, text: x });
        }
      },
      E = (S) => {
        const j = Math.floor(S / 60),
          T = S % 60;
        return `${j}:${T.toString().padStart(2, "0")}`;
      };
    return t
      ? e.jsxs("div", {
          className:
            "absolute inset-0 z-[90] bg-black/40 backdrop-blur-sm flex flex-col justify-end animate-in fade-in duration-300",
          children: [
            e.jsx("div", { className: "flex-1", onClick: s }),
            e.jsxs("div", {
              className:
                "w-full bg-[#fffcf7] rounded-t-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] relative overflow-hidden animate-in slide-in-from-bottom duration-300",
              children: [
                e.jsx("div", {
                  className:
                    "absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e0e0e0] rounded-full",
                }),
                e.jsxs("div", {
                  className:
                    "pt-8 px-6 pb-4 flex justify-between items-center border-b border-[#f5f5f5]",
                  children: [
                    e.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        e.jsxs("button", {
                          onClick: () => o("text"),
                          className: `text-sm font-bold transition-colors flex items-center gap-2 pb-2 border-b-2 ${i === "text" ? "text-[#5d4037] border-[#8d6e63]" : "text-gray-400 border-transparent hover:text-gray-600"}`,
                          children: [e.jsx(yu, { size: 16 }), "文字合成"],
                        }),
                        e.jsxs("button", {
                          onClick: () => o("record"),
                          className: `text-sm font-bold transition-colors flex items-center gap-2 pb-2 border-b-2 ${i === "record" ? "text-[#5d4037] border-[#8d6e63]" : "text-gray-400 border-transparent hover:text-gray-600"}`,
                          children: [e.jsx(m3, { size: 16 }), "语音录制"],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: s,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors",
                      children: e.jsx(Ts, { size: 20 }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "p-6 min-h-[280px] flex flex-col",
                  children:
                    i === "text"
                      ? e.jsxs("div", {
                          className:
                            "flex-1 flex flex-col gap-4 animate-in fade-in slide-in-from-right-4 duration-300",
                          children: [
                            e.jsxs("div", {
                              className: "relative flex-1",
                              children: [
                                e.jsx("textarea", {
                                  value: n,
                                  onChange: (S) => a(S.target.value),
                                  placeholder: "写下你想说的话...",
                                  className:
                                    "w-full h-full bg-transparent text-lg text-[#5d4037] placeholder-gray-300 outline-none resize-none font-serif leading-relaxed p-2",
                                  style: {
                                    backgroundImage:
                                      "linear-gradient(transparent 31px, #f0f0f0 32px)",
                                    backgroundSize: "100% 32px",
                                    lineHeight: "32px",
                                  },
                                  autoFocus: !0,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "absolute bottom-2 right-2 text-xs text-gray-300 font-mono",
                                  children: [n.length, " chars"],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: M,
                              disabled: !n.trim(),
                              className:
                                "w-full py-4 bg-[#8d6e63] text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-[#795548] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                              children: [
                                e.jsx(ri, { size: 18 }),
                                "发送模拟语音",
                              ],
                            }),
                          ],
                        })
                      : e.jsx("div", {
                          className:
                            "flex-1 flex flex-col items-center justify-between animate-in fade-in slide-in-from-left-4 duration-300 py-4",
                          children: p
                            ? e.jsxs("div", {
                                className:
                                  "w-full flex-1 flex flex-col items-center justify-center gap-8",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                            children: "Preview",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-sm font-mono font-bold text-[#8d6e63]",
                                            children: E(u),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                          e.jsx("button", {
                                            onClick: () => {
                                              _.current &&
                                                ((_.current.currentTime = 0),
                                                _.current.play());
                                            },
                                            className:
                                              "w-12 h-12 rounded-full bg-[#8d6e63] flex items-center justify-center text-white hover:bg-[#795548] shadow-md transition-transform active:scale-95 flex-shrink-0",
                                            children: e.jsx(xr, {
                                              size: 20,
                                              fill: "currentColor",
                                              className: "ml-1",
                                            }),
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "flex-1 h-12 flex items-center gap-1 overflow-hidden opacity-60 bg-[#f5f5f5] rounded-lg px-2",
                                            children: [...Array(30)].map(
                                              (S, j) =>
                                                e.jsx(
                                                  "div",
                                                  {
                                                    className:
                                                      "w-1 bg-[#8d6e63] rounded-full",
                                                    style: {
                                                      height: `${20 + Math.random() * 80}%`,
                                                    },
                                                  },
                                                  j,
                                                ),
                                            ),
                                          }),
                                          e.jsx("audio", {
                                            ref: _,
                                            src: h,
                                            className: "hidden",
                                            onEnded: () => {},
                                          }),
                                        ],
                                      }),
                                      x &&
                                        e.jsxs("div", {
                                          className:
                                            "mt-2 p-3 bg-[#f9f9f9] rounded-xl border border-dashed border-gray-200",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 mb-1",
                                              children: [
                                                e.jsx(Al, {
                                                  size: 10,
                                                  className: "text-gray-400",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[10px] font-bold text-gray-400 uppercase",
                                                  children: "识别内容",
                                                }),
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-[#5d4037] leading-relaxed",
                                              children: x,
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "w-full flex gap-4",
                                    children: [
                                      e.jsxs("button", {
                                        onClick: C,
                                        className:
                                          "flex-1 py-4 rounded-2xl font-bold text-sm text-[#8d6e63] bg-[#f5f5f5] hover:bg-[#eeeeee] transition-colors flex items-center justify-center gap-2",
                                        children: [
                                          e.jsx(Pr, { size: 18 }),
                                          "重录",
                                        ],
                                      }),
                                      e.jsxs("button", {
                                        onClick: M,
                                        className:
                                          "flex-[2] py-4 bg-[#8d6e63] text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-[#795548] active:scale-[0.98] transition-all flex items-center justify-center gap-2",
                                        children: [
                                          e.jsx(ri, { size: 18 }),
                                          "发送语音",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex-1 flex flex-col items-center justify-center w-full",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-5xl font-mono font-bold text-[#5d4037] mb-8 tabular-nums tracking-wider",
                                        children: E(u),
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "h-12 flex items-center gap-1 mb-8",
                                        children: [...Array(20)].map((S, j) =>
                                          e.jsx(
                                            "div",
                                            {
                                              className: `w-1.5 bg-[#8d6e63] rounded-full transition-all duration-100 ${c ? "animate-pulse" : "opacity-20"}`,
                                              style: {
                                                height: c
                                                  ? `${20 + Math.random() * 80}%`
                                                  : "20%",
                                                animationDelay: `${j * 0.05}s`,
                                              },
                                            },
                                            j,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center gap-4",
                                    children: [
                                      e.jsx("button", {
                                        onClick: c ? k : A,
                                        className: `w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl ${c ? "bg-red-500 text-white scale-110 ring-8 ring-red-100 shadow-red-200" : "bg-[#8d6e63] text-white hover:bg-[#795548] hover:scale-105 shadow-[#8d6e63]/30"}`,
                                        children: c
                                          ? e.jsx(P0, {
                                              size: 28,
                                              fill: "currentColor",
                                            })
                                          : e.jsx(hl, { size: 32 }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-gray-400 font-medium tracking-widest uppercase",
                                        children: c
                                          ? "Recording..."
                                          : "Tap to Record",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                }),
              ],
            }),
          ],
        })
      : null;
  },
  AY = ({ show: t, onClose: s }) =>
    !t || typeof document > "u"
      ? null
      : _i.createPortal(
          e.jsxs("div", {
            className:
              "fixed inset-0 z-[100] bg-white flex flex-col animate-in slide-in-from-right duration-300",
            children: [
              e.jsxs("div", {
                className:
                  "pt-12 pb-2 px-4 border-b border-gray-100 flex items-center gap-3",
                children: [
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors",
                    children: e.jsx(un, {
                      size: 24,
                      className: "text-gray-600",
                    }),
                  }),
                  e.jsx("h2", {
                    className: "text-lg font-bold text-gray-800",
                    children: "TTS 日志",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 overflow-hidden",
                children: e.jsx(SY, {}),
              }),
            ],
          }),
          document.body,
        );
function ON(t, s) {
  if (typeof t != "string") return t;
  const n = s.startsWith(".") ? s : "." + s;
  let a = t.replace(/:root\s*\{/g, n + " {");
  return (
    (a = " _ _{} " + a),
    (a = a.replace(/\}\s*([\s\S]*?)\s*\{/g, (r, i) => {
      const o = i.trim();
      return !o || o.startsWith("@") || /^(from|to|\d+%)$/.test(o)
        ? r
        : "} " +
            o
              .split(",")
              .map((d) => n + " " + d.trim())
              .join(", ") +
            " {";
    })),
    a.replace(/^ _ _\{\}\s*/, "")
  );
}
const CY = ({
    chatId: t,
    onBack: s,
    onViewContact: n,
    onSettingsVisibilityChange: a,
    showPhoneCase: r = !0,
    caseSize: i,
    scrollToMessageId: o,
    onScrolledToMessage: c,
  }) => {
    var C2,
      M2,
      T2,
      I2,
      E2,
      L2,
      D2,
      $2,
      F2,
      z2,
      R2,
      P2,
      O2,
      B2,
      U2,
      G2,
      H2,
      W2,
      Y2;
    const {
        chats: d,
        setChats: u,
        contacts: f,
        user: p,
        sendMessage: m,
        triggerAiReply: h,
        updateChatSettings: g,
        deleteChat: x,
        deleteMessages: y,
        recallMessage: v,
        clearChatMessages: b,
        summaries: N,
        updateContact: w,
        handleCoupleAvatarAccept: _,
        handleCoupleAvatarReject: A,
        setUser: k,
        setActiveChatId: C,
        fetchWeather: M,
        fetchTime: E,
        playTTS: S,
        stopTTS: j,
        isPlaying: T,
        playingMessageId: I,
        isFetchingVoices: L,
        voices: B,
        models: F,
        fetchVoices: D,
        handleTransfer: $,
        handleTransferAction: P,
        verifyPaymentPassword: z,
        sendRedPacket: O,
        handleGrabRedPacket: Z,
        callState: K,
        startVideoCall: q,
        acceptVideoCall: V,
        rejectVideoCall: ne,
        endVideoCall: le,
        toggleCallMemoryMode: ie,
        summarizeCallRecord: X,
        deleteCallRecord: je,
        updateMessage: xe,
        ttsConfig: ye,
        memes: R,
        memeCategories: oe,
        addMeme: ee,
        addMemes: H,
        deleteMeme: Y,
        deleteMemes: U,
        updateMeme: ce,
        addMemeCategory: pe,
        deleteMemeCategory: se,
        addMemesToCategory: Te,
        bindCategoryToContact: ke,
        archives: W,
        saveArchive: ue,
        loadArchive: re,
        deleteArchive: he,
        bindSummaryToArchive: ge,
        unbindSummaryFromArchive: J,
        unbindSummaryFromCurrentSession: G,
        removeSummaryFromArchive: we,
        updateSummaryInArchive: Q,
        updateArchiveSettings: ve,
        summarizeHistory: Ve,
        deleteSummary: Ae,
        updateSummary: te,
        calculateTokenEstimate: Se,
        callApi: Fe,
        getEffectiveUser: $e,
        getRoleBoundUser: tt,
        getSpace: Xe,
        updateUserPreset: ht,
        injectOpeningLines: Pe,
        startWithOpening: ut,
        addTimeAdvanceMessage: _t,
        receiveMessage: Ee,
        handleAddMembersToGroup: fe,
        handleRemoveMembersFromGroup: He,
        handleLeaveGroup: Ie,
        handleDismissGroup: Ce,
        apiConfig: Re,
        groupReplyInProgress: De,
        addFavorites: at,
        blockedFriendRequestPopup: ft,
        dismissBlockedFriendRequestPopup: vt,
        updateBlockedFriendRequest: Oe,
        handlePhoneInteraction: Qe,
      } = vn(),
      [Ye, Ze] = l.useState(""),
      [Ue, me] = l.useState(null),
      [jt, Gt] = l.useState(null),
      [Pt, Wt] = l.useState(!1),
      [ct, Kt] = l.useState(!1);
    l.useEffect(
      () => (
        typeof a == "function" && a(Pt),
        () => {
          typeof a == "function" && a(!1);
        }
      ),
      [Pt, a],
    );
    const [fs, gt] = l.useState(!1),
      [ae, nt] = l.useState(!1),
      [It, Xt] = l.useState(!1),
      [bs, ss] = l.useState(!1),
      [_s, qs] = l.useState(!1),
      [Bs, Js] = l.useState([]),
      [Xs, gn] = l.useState(!1),
      [sn, ln] = l.useState(null),
      [rn, wt] = l.useState(""),
      [xs, ot] = l.useState(null),
      [st, $t] = l.useState(!1),
      [Ft, es] = l.useState(null),
      [At, Jt] = l.useState(!1),
      [Vt, qt] = l.useState(new Set()),
      [Lt, Qt] = l.useState(null),
      [js, cs] = l.useState(null),
      [Ne, Je] = l.useState(null),
      [St, Be] = l.useState(new Set()),
      [Ke, Nt] = l.useState(!1),
      [bt, ns] = l.useState(!1),
      [Ge, Le] = l.useState(!1),
      [_e, yt] = l.useState(""),
      [rt, ze] = l.useState(""),
      [lt, it] = l.useState(""),
      [Ht, is] = l.useState(!1),
      [os, as] = l.useState(null),
      [vs, ts] = l.useState(!1),
      [ys, Vs] = l.useState(null),
      [pt, qe] = l.useState(null),
      [dt, xt] = l.useState(!1),
      [zt, ms] = l.useState(null),
      [Cs, us] = l.useState(null),
      [Rs, Rt] = l.useState(!1),
      [Es, nn] = l.useState(""),
      [Hs, cn] = l.useState(1),
      [fn, Rn] = l.useState("lucky"),
      [Qn, ra] = l.useState(""),
      [_a, Ya] = l.useState(!1),
      [Fr, kr] = l.useState(""),
      [Oa, ur] = l.useState(null),
      [mi, ti] = l.useState(null),
      [pi, ii] = l.useState(!1),
      [Br, kt] = l.useState(!1),
      [Tt, Yt] = l.useState(!1),
      [de, Me] = l.useState(""),
      [et, Ct] = l.useState(!1),
      [Dt, Mt] = l.useState(null),
      [Ut, ws] = l.useState({
        direction: "expense",
        amount: "",
        note: "",
        image: "",
      }),
      [Ls, Ot] = l.useState(!1),
      [rs, gs] = l.useState(!1),
      [ps, Is] = l.useState(""),
      [As, Ks] = l.useState(!1),
      [on, tn] = l.useState(!1),
      [dn, yn] = l.useState(""),
      [va, Bn] = l.useState(""),
      [Ea, Fn] = l.useState(!1),
      [ha, Cr] = l.useState(!1),
      [hr, ar] = l.useState(""),
      [zs, En] = l.useState("all"),
      [Vn, sa] = l.useState(!1),
      [wa, ia] = l.useState([]),
      [oa, La] = l.useState(!1),
      [Zn, ja] = l.useState(""),
      [Ei, Li] = l.useState(!1),
      [Ba, Mr] = l.useState(""),
      [Nn, kn] = l.useState(!1),
      [Ln, ua] = l.useState(null),
      [fa, Fa] = l.useState([]),
      [gr, po] = l.useState([]),
      [Xu, Xl] = l.useState(!1),
      [ef, nl] = l.useState(!1),
      [Oc, kd] = l.useState(""),
      [tf, Sd] = l.useState(""),
      [sf, _d] = l.useState(""),
      [nf, Ad] = l.useState(!1),
      [vi, Cd] = l.useState(null),
      [Et, Ms] = l.useState(null),
      [Us, bn] = l.useState(""),
      [en, wn] = l.useState(""),
      [Gn, Mn] = l.useState(!1),
      [la, Va] = l.useState(""),
      [za, ga] = l.useState(!1),
      [fr, oi] = l.useState(null),
      [Yr, Tr] = l.useState(null),
      [Io, rr] = l.useState(!1),
      [Md, al] = l.useState(!1),
      [hg, af] = l.useState(!1),
      [gg, rf] = l.useState(!1),
      [of, Dp] = l.useState(null),
      [bg, Td] = l.useState(!1),
      [mr, $p] = l.useState(null),
      [lf, Fp] = l.useState(!1),
      [xo, zp] = l.useState(null),
      [Rp, Pp] = l.useState(null),
      [yg, cf] = l.useState(!1),
      [vg, Id] = l.useState(!1),
      [wg, df] = l.useState(!1),
      [Il, Bc] = l.useState(null),
      [uf, ff] = l.useState(null),
      [Eo, Ed] = l.useState(""),
      [rl, Op] = l.useState(""),
      [jg, Bp] = l.useState(!1),
      [Up, Gp] = l.useState(!1),
      [Zt, ds] = l.useState(null),
      [ks, Ss] = l.useState(""),
      [Fs, Ys] = Yn(
        "chat_css_presets",
        [{ id: "default", name: "默认", css: wc }],
        { sessionStorageMirrorKey: LA },
      ),
      [Ds, Ps] = l.useState(wc),
      [$s, Gs] = l.useState(""),
      [Qs, Dn] = l.useState(!1),
      [Hn, jn] = l.useState(!1),
      Pn = l.useRef(null),
      Wn = l.useRef(!1),
      Ua = l.useRef(
        typeof window < "u"
          ? (C2 = window.visualViewport) == null
            ? void 0
            : C2.height
          : 0,
      ),
      br = l.useRef(null),
      xn = l.useRef(null),
      Aa = l.useRef(null),
      si = l.useRef(null),
      Di = l.useRef(null),
      ec = l.useRef(null);
    l.useRef(null);
    const Ki = l.useRef(null),
      Ma = l.useRef(null),
      Ga = l.useRef(null),
      Sr = l.useRef(null),
      li = l.useRef(null),
      qi = l.useRef(0),
      il = l.useRef(0),
      tc = l.useRef(!1);
    l.useEffect(() => {
      if (!js && !Ne) return;
      const mt = setTimeout(() => {
        var Bt;
        return (Bt = Ki.current) == null ? void 0 : Bt.focus();
      }, 50);
      return () => clearTimeout(mt);
    }, [js, Ne]);
    const ls = (d || []).find((mt) => mt.id === t),
      $n = (f || []).find(
        (mt) => mt.id === (ls == null ? void 0 : ls.contactId),
      ),
      Ir = pv(ls),
      An = S$(ls, $n),
      [Er, Ng] = l.useState(() => ch());
    l.useEffect(() => {
      $n && Si($n) && Ng(ch());
    }, [t, $n == null ? void 0 : $n.id]);
    const ir = l.useCallback((mt) => {
        (a1(mt), Ng(mt));
      }, []),
      Lo = l.useCallback(() => {
        An && Si(An) ? Kt(!0) : Wt(!0);
      }, [An]);
    l.useEffect(() => {
      (Wt(!1), Kt(!1));
    }, [t]);
    const Ld =
        ((M2 = ls == null ? void 0 : ls.settings) == null
          ? void 0
          : M2.blockedRoles) || {},
      Hp =
        !Ir && An != null && An.id ? (Ld == null ? void 0 : Ld[An.id]) : void 0,
      Uc = !Ir && (An == null ? void 0 : An.id) && Hp != null,
      ni = l.useMemo(
        () => ls && { ...ls, isTyping: ls.isTyping || (De && De.has(ls.id)) },
        [ls, De],
      ),
      sc = l.useRef(null);
    l.useEffect(() => {
      const mt = (ls == null ? void 0 : ls.messages) || [],
        Bt = mt.length ? mt[mt.length - 1] : null;
      if (!Bt) {
        sc.current = null;
        return;
      }
      if (sc.current == null) {
        sc.current = Bt.id;
        return;
      }
      String(Bt.id) !== String(sc.current) &&
        ((sc.current = Bt.id), Bt.sender !== "me" && Gt(Bt.id));
    }, [ls == null ? void 0 : ls.messages]);
    const Wp = l.useMemo(() => {
        var mt;
        return !Ir ||
          !((mt = ls == null ? void 0 : ls.memberIds) != null && mt.length) ||
          !(f != null && f.length)
          ? []
          : (ls.memberIds || [])
              .map((Bt) => f.find((Ns) => Ns.id === Bt))
              .filter(Boolean);
      }, [Ir, ls == null ? void 0 : ls.memberIds, f]),
      Vr = l.useMemo(() => {
        const Bt = ((ls == null ? void 0 : ls.messages) || []).filter(
          (Ns) => Ns.type === "time_advance",
        );
        return Bt.length > 0 ? Bt[Bt.length - 1] : null;
      }, [ls == null ? void 0 : ls.messages]),
      Do = l.useMemo(() => (d || []).filter((mt) => mt.isGroup), [d]),
      Xa = l.useMemo(() => {
        var Ns;
        const mt =
            ((Ns = ls == null ? void 0 : ls.settings) == null
              ? void 0
              : Ns.groupEmotes) || [],
          Bt = R || [];
        return [...mt, ...Bt];
      }, [
        (T2 = ls == null ? void 0 : ls.settings) == null
          ? void 0
          : T2.groupEmotes,
        R,
      ]),
      Ur = l.useMemo(() => {
        if (!ls) return R || [];
        if (!ls.isGroup) return R || [];
        const mt = um(ls.settings),
          Bt = ls.memberIds || [],
          Ns = (oe || [])
            .filter((hn) =>
              (hn.boundContacts || []).some((Un) => Bt.includes(Un)),
            )
            .map((hn) => hn.id),
          Ws =
            mt.length > 0
              ? (R || []).filter((hn) =>
                  (hn.categoryIds || []).some((Un) => mt.includes(Un)),
                )
              : [],
          mn = (R || []).filter((hn) =>
            (hn.categoryIds || []).some((Un) => Ns.includes(Un)),
          ),
          Zs = new Set(Ws.map((hn) => hn.id)),
          an = [...Ws];
        return (
          mn.forEach((hn) => {
            Zs.has(hn.id) || (Zs.add(hn.id), an.push(hn));
          }),
          an
        );
      }, [
        ls == null ? void 0 : ls.id,
        ls == null ? void 0 : ls.isGroup,
        ls == null ? void 0 : ls.settings,
        ls == null ? void 0 : ls.memberIds,
        R,
        oe,
      ]);
    (l.useEffect(() => {
      var hn, Un;
      if (!t || !ls) return;
      const mt = ls.messages || [];
      let Bt = $n == null ? void 0 : $n.openingLines;
      const Ns = String(ls == null ? void 0 : ls.contactId) === String(io);
      if (
        ((Si($n) || Ns) &&
          (!Array.isArray(Bt) || Bt.length === 0) &&
          (Bt = mv().openingLines),
        (mt || []).some((Ha) =>
          String((Ha == null ? void 0 : Ha.id) || "").startsWith("opening-"),
        ) ||
          !Bt ||
          !Array.isArray(Bt) ||
          Bt.length === 0)
      )
        return;
      const mn = (mt || []).some(
        (Ha) =>
          (Ha == null ? void 0 : Ha.type) !== "system" &&
          String((Ha == null ? void 0 : Ha.text) || "").trim(),
      );
      let Zs;
      const an = Bt[0];
      if (typeof an == "string") Zs = Bt;
      else if (an && typeof an == "object" && Array.isArray(an.lines)) {
        const Ha = Bt.filter((na) => na && na.scene !== "meet");
        if (Ha.length === 0) return;
        const ka = (hn = ls.settings) == null ? void 0 : hn.selectedOpeningId;
        Zs = ((ka ? Ha.find((na) => na.id === ka) : null) || Ha[0]).lines;
      } else return;
      Zs &&
        Zs.length > 0 &&
        ((mt || []).length === 0
          ? Pe(t, Zs)
          : mn ||
            ut(
              t,
              Zs,
              (Un = ls == null ? void 0 : ls.settings) == null
                ? void 0
                : Un.selectedOpeningId,
            ));
    }, [
      t,
      ls == null ? void 0 : ls.id,
      (I2 = ls == null ? void 0 : ls.settings) == null
        ? void 0
        : I2.selectedOpeningId,
      ((ls == null ? void 0 : ls.messages) || []).length,
      $n == null ? void 0 : $n.id,
      $n == null ? void 0 : $n.openingLines,
    ]),
      l.useEffect(() => {
        var mn;
        if (!t || !(ls != null && ls.isGroup) || !m || !g) return;
        const mt =
            ((mn = ls.settings) == null ? void 0 : mn.mutedMembers) || {},
          Bt = Date.now(),
          Ns = Object.entries(mt).filter(([, Zs]) => Zs <= Bt);
        if (Ns.length === 0) return;
        const Ws = { ...mt };
        (Ns.forEach(([Zs]) => delete Ws[Zs]),
          g(t, { mutedMembers: Ws }),
          Ns.forEach(([Zs]) => {
            const an = (f || []).find((Un) => Un.id === Zs),
              hn =
                (an == null ? void 0 : an.remark) ||
                (an == null ? void 0 : an.nickname) ||
                (an == null ? void 0 : an.name) ||
                "该成员";
            m(t, `[系统提示：${hn} 的禁言已结束]`, null, "system");
          }));
      }, [
        t,
        ls == null ? void 0 : ls.isGroup,
        (E2 = ls == null ? void 0 : ls.settings) == null
          ? void 0
          : E2.mutedMembers,
        f,
        m,
        g,
      ]));
    const Ja =
        ((L2 = ls == null ? void 0 : ls.settings) == null
          ? void 0
          : L2.activePresetId) || "default",
      Ka = F.find((mt) => {
        var Bt;
        return (
          mt.model_id ===
          (((Bt = ls == null ? void 0 : ls.settings) == null
            ? void 0
            : Bt.modelId) || "eleven_multilingual_v2")
        );
      }),
      ta =
        Ja === "default"
          ? wc
          : ((D2 = Fs.find((mt) => mt.id === Ja)) == null ? void 0 : D2.css) ||
            wc,
      qn = ON(ta, "chat-detail-theme-scope"),
      ca = ON(ta, "chat-settings-theme-scope");
    l.useEffect(() => {
      const mt = Fs.find((Bt) => Bt.id === Ja);
      (mt && Ps(mt.css), Ja === "default" && Ps(wc));
    }, [Ja, Fs]);
    const ci = () => {
        if (!$s.trim()) return;
        const mt = { id: Date.now().toString(), name: $s, css: Ds },
          Bt = [...Fs, mt];
        (Ys(Bt), g(t, { activePresetId: mt.id }), Gs(""));
      },
      xi = (mt) => {
        if (mt === "default") return;
        const Bt = Fs.filter((Ns) => Ns.id !== mt);
        (Ys(Bt), Ja === mt && g(t, { activePresetId: "default" }));
      },
      Gc = () => {
        if (Ja === "default") return;
        const mt = Fs.map((Bt) => (Bt.id === Ja ? { ...Bt, css: Ds } : Bt));
        Ys(mt);
      },
      qa = (mt = !1) => {
        const Bt = Ma.current;
        Bt &&
          Bt.scrollTo({
            top: Bt.scrollHeight - Bt.clientHeight,
            behavior: mt ? "auto" : "smooth",
          });
      },
      El = () => {
        ((Wn.current = !0),
          qa(!1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => qa(!1));
          }),
          setTimeout(() => qa(!1), 380));
      },
      Ll = () => {
        Wn.current = !1;
      };
    l.useEffect(() => {
      const mt = window.visualViewport;
      if (!mt) return;
      const Bt = () => {
        const Ns = Ua.current,
          Ws = mt.height;
        ((Ua.current = Ws),
          Ns > 0 &&
            Ws < Ns &&
            Wn.current &&
            (qa(!1),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                var mn;
                (qa(!1),
                  (mn = Ki.current) == null ||
                    mn.scrollIntoView({ behavior: "smooth", block: "end" }));
              });
            }),
            setTimeout(() => qa(!1), 100)),
          Ns > 0 &&
            Ws > Ns &&
            (qa(!0),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => qa(!1));
            }),
            setTimeout(() => qa(!1), 150)));
      };
      return (
        mt.addEventListener("resize", Bt),
        () => mt.removeEventListener("resize", Bt)
      );
    }, []);
    const Hc = l.useCallback((mt) => {
        const Bt = document.getElementById(`msg-${mt}`);
        Bt &&
          (Bt.scrollIntoView({ behavior: "smooth", block: "center" }),
          Bt.classList.add("bg-blue-50/50"),
          setTimeout(() => Bt.classList.remove("bg-blue-50/50"), 2e3));
      }, []),
      ho = l.useCallback(
        (mt) => {
          (gt(!1), Wt(!1), Kt(!1), setTimeout(() => Hc(mt), 160));
        },
        [Hc],
      );
    (l.useEffect(() => {
      C(t);
    }, [t, C]),
      l.useEffect(() => {
        if (!o || !c) return;
        const mt = setTimeout(() => {
          const Bt = document.getElementById(`msg-${o}`);
          (Bt &&
            (Bt.scrollIntoView({ behavior: "smooth", block: "center" }),
            Bt.classList.add("bg-blue-50/50"),
            setTimeout(() => Bt.classList.remove("bg-blue-50/50"), 2e3)),
            c());
        }, 400);
        return () => clearTimeout(mt);
      }, [o, c]));
    const er = 150,
      Na = "cubic-bezier(0.23, 1, 0.32, 1)",
      Wc = 56,
      g2 = 280,
      p6 = 56;
    (l.useEffect(() => {
      const mt = li.current,
        Bt = Sr.current;
      if (!mt || !Bt) return;
      const Ns = (Zs) => {
          const an = Zs.touches[0].pageY,
            hn = typeof window < "u" ? window.innerHeight - p6 : 0;
          if (an > hn) {
            tc.current = !1;
            return;
          }
          ((tc.current = !0),
            (qi.current = an),
            (il.current = 0),
            (Bt.style.transition = "none"));
        },
        Ws = (Zs) => {
          if (!tc.current) return;
          const an = qi.current - Zs.touches[0].pageY;
          if (((il.current = an), an > 0)) {
            const hn = Math.min(an / er, 1),
              Un = hn * 30;
            ((Bt.style.transformOrigin = "top center"),
              (Bt.style.transform = `translateY(${hn * Wc}px) scale(${1 - hn * 0.28})`),
              (Bt.style.borderRadius = `${Un}px`),
              (Bt.style.boxShadow = "0 20px 80px rgba(0,0,0,0.15)"));
          }
        },
        mn = () => {
          if (!tc.current) return;
          ((Bt.style.transition = `transform 0.6s ${Na}, border-radius 0.6s ${Na}, box-shadow 0.6s ${Na}`),
            il.current > er
              ? jn(!0)
              : ((Bt.style.transformOrigin = ""),
                (Bt.style.transform = "none"),
                (Bt.style.borderRadius = ""),
                (Bt.style.boxShadow = "")),
            (il.current = 0),
            (tc.current = !1));
        };
      return (
        mt.addEventListener("touchstart", Ns, { passive: !0 }),
        mt.addEventListener("touchmove", Ws, { passive: !0 }),
        mt.addEventListener("touchend", mn, { passive: !0 }),
        () => {
          (mt.removeEventListener("touchstart", Ns),
            mt.removeEventListener("touchmove", Ws),
            mt.removeEventListener("touchend", mn));
        }
      );
    }, []),
      l.useEffect(() => {
        const mt = Sr.current;
        mt &&
          ((mt.style.transition = `top 0.5s ${Na}, left 0.5s ${Na}, right 0.5s ${Na}, bottom 0.5s ${Na}, transform 0.5s ${Na}, border-radius 0.5s ${Na}, box-shadow 0.5s ${Na}`),
          Hn
            ? ((mt.style.position = "absolute"),
              (mt.style.top = `${Wc}px`),
              (mt.style.left = "4%"),
              (mt.style.right = "4%"),
              (mt.style.bottom = `${g2}px`),
              (mt.style.transform = "none"),
              (mt.style.transformOrigin = ""),
              (mt.style.borderRadius = "30px"),
              (mt.style.boxShadow = "0 30px 100px rgba(0,0,0,0.2)"))
            : ((mt.style.position = ""),
              (mt.style.top = ""),
              (mt.style.left = ""),
              (mt.style.right = ""),
              (mt.style.bottom = ""),
              (mt.style.transform = ""),
              (mt.style.borderRadius = ""),
              (mt.style.boxShadow = "")));
      }, [Hn]),
      l.useEffect(() => {
        let mt = !1;
        (qa(!0),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              mt || qa(!0);
            });
          }));
        const Bt = setTimeout(() => {
          mt || qa(!0);
        }, 450);
        return () => {
          ((mt = !0), clearTimeout(Bt));
        };
      }, [
        ls == null ? void 0 : ls.messages,
        ls == null ? void 0 : ls.isTyping,
      ]),
      l.useEffect(() => {
        var mt;
        (mt = ls == null ? void 0 : ls.settings) != null &&
          mt.enableTTS &&
          B.length === 0 &&
          D();
      }, [
        ($2 = ls == null ? void 0 : ls.settings) == null
          ? void 0
          : $2.enableTTS,
        B.length,
      ]));
    const mf = l.useCallback(() => {
        (Ct(!1),
          Ot(!1),
          Mt(null),
          ws({ direction: "expense", amount: "", note: "", image: "" }));
      }, []),
      x6 = l.useCallback(async (mt) => {
        var Ns, Ws;
        const Bt =
          (Ws =
            (Ns = mt == null ? void 0 : mt.target) == null
              ? void 0
              : Ns.files) == null
            ? void 0
            : Ws[0];
        if (Bt)
          try {
            const mn = await $r(Bt, 900, 0.8);
            ws((Zs) => ({ ...Zs, image: mn }));
          } catch {
            alert("图片处理失败");
          } finally {
            mt.target.value = "";
          }
      }, []),
      h6 = l.useCallback(async () => {
        const mt = Dt;
        if (!mt) return;
        const Bt = parseFloat(Ut.amount);
        if (!Number.isFinite(Bt) || Bt <= 0) {
          alert("请输入有效金额（大于 0）");
          return;
        }
        const Ns = Date.now(),
          Ws = Math.round(Bt * 100) / 100,
          mn = (Ut.note || "").trim().slice(0, 30),
          Zs = Ut.direction,
          an = Ut.image || void 0,
          hn = mS({
            id: Ns + Math.random(),
            amount: Ws,
            direction: Zs,
            payer: "user",
            category: "others",
            note: mn,
            date: Ns,
            mood: "happy",
            source: "user",
            rotation: Math.random() * 6 - 3,
            image: an,
            createdAt: Ns,
            updatedAt: Ns,
          });
        try {
          Ot(!0);
          const Un = `couple_ledger_${mt}`,
            Ha = (await be.get(Un, [])) || [],
            ka = Array.isArray(Ha) ? Ha : [];
          (await be.set(Un, [hn, ...ka]),
            window.dispatchEvent(
              new CustomEvent(ih, {
                detail: { contactId: mt, storageKey: Un },
              }),
            ),
            mf());
        } catch {
          (alert("写入记账失败，请稍后重试"), Ot(!1));
        }
      }, [Dt, Ut, mf]);
    if (!ls)
      return e.jsx("div", {
        className:
          "flex items-center justify-center h-full text-gray-400 font-light",
        children: "未找到对话",
      });
    if (!Ir && !$n)
      return e.jsx("div", {
        className:
          "flex items-center justify-center h-full text-gray-400 font-light",
        children: "未找到联系人",
      });
    const b2 = () => {
        if (!Ye.trim()) return;
        if (Ne) {
          (xe(t, Ne, { text: Ye }), Je(null), Ze(""), cs(null));
          return;
        }
        if (!Ir && $n != null && $n.id && !et) {
          const Bt = Xe == null ? void 0 : Xe($n.id);
          if (
            !!(
              Bt &&
              Bt.status === "active" &&
              Bt.ledgerChatAssistEnabled === !0
            )
          ) {
            const Ws = SH(Ye);
            if (Ws && Number.isFinite(Ws.amount) && Ws.amount > 0) {
              (Mt($n.id),
                ws({
                  direction: Ws.direction,
                  amount: String(Ws.amount),
                  note: Ws.note || "",
                  image: "",
                }),
                Ct(!0));
              const mn = m(t, Ye, js == null ? void 0 : js.id);
              (mn && me(mn), Ze(""), cs(null));
              return;
            }
          }
        }
        const mt = m(t, Ye, js == null ? void 0 : js.id);
        (mt && me(mt), Ze(""), cs(null));
      },
      g6 = () => {
        var Ns;
        if (Bs.length !== 1) return;
        const mt = Bs[0],
          Bt = ls.messages.find((Ws) => Ws.id === mt);
        Bt &&
          (Bt.type === "text" || !Bt.type) &&
          (_i.flushSync(() => {
            (Je(mt), Ze(Bt.text), qs(!1), Js([]));
          }),
          (Ns = Ki.current) == null || Ns.focus());
      },
      b6 = () => {
        (Je(null), Ze(""));
      },
      y2 = l.useCallback((mt) => {
        (qs(!0), Js([mt]));
      }, []),
      y6 = l.useCallback(
        (mt) => {
          br.current = setTimeout(() => y2(mt), 500);
        },
        [y2],
      ),
      v6 = l.useCallback(() => {
        br.current && (clearTimeout(br.current), (br.current = null));
      }, []),
      w6 = l.useCallback(() => {
        br.current && (clearTimeout(br.current), (br.current = null));
      }, []),
      j6 = l.useCallback((mt) => {
        Js((Bt) =>
          Bt.includes(mt) ? Bt.filter((Ns) => Ns !== mt) : [...Bt, mt],
        );
      }, []),
      N6 = () => {
        (y(t, Bs), qs(!1), Js([]));
      },
      k6 = () => {
        if (Bs.length !== 1) return;
        const mt = Bs[0];
        (v(t, mt), qs(!1), Js([]));
      },
      S6 = () => {
        var Ns;
        if (Bs.length !== 1) return;
        const mt = Bs[0],
          Bt = ls.messages.find((Ws) => Ws.id === mt);
        Bt &&
          dp(Bt) &&
          (_i.flushSync(() => {
            (cs(Bt), qs(!1), Js([]));
          }),
          (Ns = Ki.current) == null || Ns.focus());
      },
      _6 = (mt, Bt) => {
        m(t, `[投票] ${mt}`, null, "poll", { question: mt, options: Bt });
      },
      A6 = (mt) => {
        m(t, `[接龙] ${mt}`, null, "relay", { title: mt, items: [] });
      },
      C6 = (mt, Bt) => {
        var an;
        const Ns = ((ls == null ? void 0 : ls.messages) || []).find(
          (hn) => hn.id === mt,
        );
        if (!Ns || Ns.type !== "poll" || !Ns.options) return;
        const Ws =
            ((an = Ns.options.find((hn) => String(hn.id) === String(Bt))) ==
            null
              ? void 0
              : an.text) || "未知选项",
          mn = Ns.options.map((hn) => ({
            ...hn,
            votes:
              hn.id === Bt
                ? [...(hn.votes || []).filter((Un) => Un !== "me"), "me"]
                : (hn.votes || []).filter((Un) => Un !== "me"),
          }));
        xe(t, mt, { options: mn });
        const Zs = (p == null ? void 0 : p.name) || "我";
        m(t, `[系统提示] ${Zs}投给了「${Ws}」`, null, "system");
      },
      v2 = (mt, Bt) => {
        const Ns = ((ls == null ? void 0 : ls.messages) || []).find(
          (mn) => mn.id === mt,
        );
        if (!Ns || Ns.type !== "relay") return;
        const Ws = [
          ...(Ns.items || []),
          {
            id: String(Date.now()),
            text: Bt.trim(),
            sender: "me",
            contactId: null,
          },
        ];
        (xe(t, mt, { items: Ws }), ds(null), Ss(""));
      },
      M6 = (mt) => {
        n && n(mt);
      },
      T6 = (mt, Bt) => {
        var Ns;
        (_i.flushSync(() => Ze((Ws) => Ws + `@${Bt} `)),
          (Ns = Ki.current) == null || Ns.focus());
      },
      I6 = () => {
        if (Bs.length !== 1) return;
        const mt = Bs[0],
          Bt = ls.messages.find((Ns) => Ns.id === mt);
        if (Bt) {
          let Ns = Bt.text;
          (Bt.type === "voice" &&
            (Bt.translation
              ? (Ns = Bt.translation)
              : (Ns = Ns.replace(/^[\[［]语音消息[\]］]\s*/i, "")
                  .replace(/[\[［]语音消息[\]］]/gi, "")
                  .replace(/^\[voice\]\s*/i, "")
                  .replace(/^\[VOICE\]\s*/i, "")
                  .replace(/\[VOICE\](.*?)\[\/VOICE\]/gi, "$1")
                  .replace(/\[voice\](.*?)\[\/voice\]/gi, "$1")
                  .trim())),
            Ns && navigator.clipboard.writeText(Ns).catch(console.error),
            qs(!1),
            Js([]));
        }
      },
      E6 = l.useCallback(() => {
        if (!ls || !Bs.length || !at) return;
        const mt = Bs.map((Bt) => {
          const Ns = ls.messages.find((Ha) => Ha.id === Bt);
          if (!Ns || Ns.isRecalled) return null;
          let Ws = (Ns.text || "").trim();
          (Ns.type === "voice"
            ? (Ws = Ns.text ? `[语音] ${Ns.text}` : "[语音]")
            : Ns.type === "image" ||
                (Ns.contentType && Ns.contentType.startsWith("image"))
              ? (Ws = Ns.image || "[图片]")
              : Ws || (Ws = "[消息]"),
            Ns.type !== "image" && (Ws = Ws.slice(0, 200)));
          const mn =
              Ns.audioUrl && !String(Ns.audioUrl).startsWith("blob:")
                ? Ns.audioUrl
                : null,
            an =
              (Ns.type === "image" ||
                (Ns.contentType && Ns.contentType.startsWith("image"))) &&
              Ns.image
                ? Ns.image
                : void 0,
            hn = Ns.type === "text_image",
            Un =
              hn &&
              (Ns.content ||
                (Ns.text || "")
                  .replace(/^\[图片内容[：:]\s*\]?\s*/, "")
                  .replace(/\s*\]\s*$/, "")
                  .trim());
          return {
            chatId: t,
            messageId: Ns.id,
            contactName:
              (An == null ? void 0 : An.name) ||
              (An == null ? void 0 : An.remark) ||
              "未知",
            contactAvatar: An == null ? void 0 : An.avatar,
            timestamp: Ns.timestamp ?? Date.now(),
            textPreview: hn ? Ns.text || "[图片]" : Ws,
            type: Ns.type || "text",
            isRealVoice: Ns.type === "voice" ? !!Ns.isRealVoice : !1,
            duration: Ns.duration,
            audioUrl: mn,
            audioId: Ns.audioId || Ns.id,
            ...(an != null && { imageUrl: an }),
            ...(Un != null && Un !== "" && { content: Un }),
          };
        }).filter(Boolean);
        mt.length && (at(mt), qs(!1), Js([]));
      }, [ls, Bs, An, t, at]),
      L6 = l.useCallback(
        (mt) => {
          var Ns;
          const Bt = ((ls == null ? void 0 : ls.messages) || []).find(
            (Ws) => Ws.id === mt,
          );
          Bt &&
            dp(Bt) &&
            (_i.flushSync(() => {
              cs({
                id: Bt.id,
                text: Bt.text ?? "[消息]",
                sender: Bt.sender ?? "other",
                replyTo: Bt.replyTo,
                timestamp: Bt.timestamp,
              });
            }),
            (Ns = Ki.current) == null || Ns.focus());
        },
        [ls == null ? void 0 : ls.messages],
      ),
      D6 = async () => {
        var Ns, Ws, mn, Zs, an, hn, Un, Ha, ka, $i, na, Jr;
        if (Bs.length !== 1) return;
        const mt = Bs[0],
          Bt = ls.messages.find(($o) => $o.id === mt);
        if (Bt) {
          T && j();
          let $o = { saveId: Bt.id };
          if (ls != null && ls.isGroup && Bt.contactId) {
            const di = f.find((kg) => kg.id === Bt.contactId);
            if (!(di != null && di.ttsVoiceId)) {
              const kg =
                (di == null ? void 0 : di.remark) ||
                (di == null ? void 0 : di.nickname) ||
                (di == null ? void 0 : di.name) ||
                "该成员";
              (us({ memberName: kg, contactId: Bt.contactId }), qs(!1), Js([]));
              return;
            }
            $o = {
              voiceId: di.ttsVoiceId,
              speed: di.ttsSpeed ?? 1,
              pitch: di.ttsPitch ?? 0,
              groupId:
                di.minimaxGroupId ||
                ((Ns = ye == null ? void 0 : ye.minimax) == null
                  ? void 0
                  : Ns.groupId),
              minimaxModel: di.minimaxModel,
              ...$o,
            };
          } else
            $o = {
              voiceId: (Ws = ls.settings) == null ? void 0 : Ws.voiceId,
              modelId: (mn = ls.settings) == null ? void 0 : mn.modelId,
              stability: (Zs = ls.settings) == null ? void 0 : Zs.stability,
              similarityBoost:
                (an = ls.settings) == null ? void 0 : an.similarityBoost,
              style: (hn = ls.settings) == null ? void 0 : hn.style,
              useSpeakerBoost:
                (Un = ls.settings) == null ? void 0 : Un.useSpeakerBoost,
              speed: (Ha = ls.settings) == null ? void 0 : Ha.speed,
              vol: (ka = ls.settings) == null ? void 0 : ka.vol,
              pitch: ($i = ls.settings) == null ? void 0 : $i.pitch,
              groupId: (na = ls.settings) == null ? void 0 : na.minimaxGroupId,
              minimaxModel:
                (Jr = ls.settings) == null ? void 0 : Jr.minimaxModel,
              ...$o,
            };
          const Yp = await S(Bt.text, $o);
          (Yp
            ? xe(t, Bt.id, { audioUrl: Yp })
            : alert("语音播放失败，请检查 API 配置或网络连接"),
            qs(!1),
            Js([]));
        }
      },
      $6 = (mt) => {
        mt.key === "Enter" && !mt.shiftKey && (mt.preventDefault(), b2());
      },
      pf = async (mt, Bt) => {
        var an;
        const Ns = mt.target,
          Ws = Ns.files && Ns.files[0];
        if (!Ws) return;
        let mn = !1,
          Zs = "用户";
        if (Bt === "user_avatar" && !(ls != null && ls.isGroup)) {
          const hn = $e(An) ?? p;
          Zs =
            (hn == null ? void 0 : hn.name) ||
            (p == null ? void 0 : p.name) ||
            "用户";
          const Un = (hn == null ? void 0 : hn.avatar) ?? "";
          mn = (
            Array.isArray(
              (an = ls == null ? void 0 : ls.settings) == null
                ? void 0
                : an.coupleAvatarPairs,
            )
              ? ls.settings.coupleAvatarPairs
              : []
          ).some(
            (ka) =>
              String((ka.userAvatar || "").trim()) ===
              String((Un || "").trim()),
          );
        }
        try {
          let hn;
          (Bt === "image_message"
            ? (hn = await $r(Ws, 1200, 0.8))
            : (hn = await $r(Ws, 800, 0.7)),
            Bt === "background"
              ? g(t, { backgroundImage: hn })
              : Bt === "novel_character_photo"
                ? g(t, { novelCharacterPhoto: hn })
                : Bt === "contact_avatar"
                  ? ls != null && ls.isGroup
                    ? (g(t, { groupAvatar: hn }),
                      m(t, "[系统提示：群头像已更换]", null, "system"))
                    : $n && w($n.id, { avatar: hn })
                  : Bt === "user_avatar"
                    ? (An != null && An.boundUserPresetId
                        ? ht(An.boundUserPresetId, { avatar: hn })
                        : ls != null && ls.isGroup
                          ? g(t, { userAvatar: hn })
                          : k((Un) => ({ ...Un, avatar: hn })),
                      mn &&
                        m(t, `[系统提示：${Zs}已换下情侣头像]`, null, "system"))
                    : Bt === "image_message" &&
                      (m(t, "[图片]", null, "image", { image: hn }),
                      kt(!1),
                      Nt(!1)));
        } catch {
          const Un = new FileReader();
          ((Un.onload = (Ha) => {
            const ka = Ha.target.result;
            Bt === "background"
              ? g(t, { backgroundImage: ka })
              : Bt === "novel_character_photo"
                ? g(t, { novelCharacterPhoto: ka })
                : Bt === "contact_avatar"
                  ? ls != null && ls.isGroup
                    ? (g(t, { groupAvatar: ka }),
                      m(t, "[系统提示：群头像已更换]", null, "system"))
                    : $n && w($n.id, { avatar: ka })
                  : Bt === "user_avatar"
                    ? (An != null && An.boundUserPresetId
                        ? ht(An.boundUserPresetId, { avatar: ka })
                        : ls != null && ls.isGroup
                          ? g(t, { userAvatar: ka })
                          : k(($i) => ({ ...$i, avatar: ka })),
                      mn &&
                        m(t, `[系统提示：${Zs}已换下情侣头像]`, null, "system"))
                    : Bt === "image_message" &&
                      (m(t, "[图片]", null, "image", { image: ka }),
                      kt(!1),
                      Nt(!1));
          }),
            Un.readAsDataURL(Ws));
        } finally {
          try {
            Ns.value = "";
          } catch {}
        }
      },
      F6 = () => {
        de.trim() &&
          (m(t, `[图片内容：${de}]`, null, "text_image", { content: de }),
          Me(""),
          Yt(!1),
          kt(!1),
          Nt(!1));
      },
      z6 = async (mt, Bt = "text", Ns = {}) => {
        if (Bt === "text") {
          if (!mt.trim()) return;
          const Ws = Math.min(60, Math.max(1, Math.ceil(mt.length / 4)));
          m(t, mt, null, "voice", { duration: Ws });
        } else if (Bt === "audio") {
          const { blob: Ws, duration: mn, text: Zs } = Ns;
          if (!Ws) return;
          const an = `voice_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          try {
            (await bc(an, Ws),
              m(t, "[语音消息]", null, "voice", {
                duration: mn || 1,
                audioId: an,
                audioUrl: null,
                isRealVoice: !0,
                translation: Zs || "",
              }));
          } catch {
            alert("发送失败：无法保存语音数据");
            return;
          }
        }
        (Is(""), gs(!1), Nt(!1));
      },
      R6 = () => {
        if (!dn || !va.trim()) {
          alert("请提供图片和含义");
          return;
        }
        (ee(dn, va.trim(), Ba), yn(""), Bn(""), Fn(!1));
      },
      P6 = () => {
        if (!hr.trim()) return;
        const mt = hr.split(`
`),
          Bt = [];
        for (const Ns of mt) {
          const Ws = Ns.trim();
          if (!Ws) continue;
          const mn = Ws.match(/(https?:\/\/[^\s,]+)/);
          if (mn) {
            const Zs = mn[0];
            let an = Ws.replace(Zs, "").trim();
            (an.startsWith(",") && (an = an.substring(1).trim()),
              an ||
                ((an = Ws.replace(Zs, "").trim()),
                an.endsWith(",") && (an = an.slice(0, -1).trim())),
              Zs && an && Bt.push({ url: Zs, meaning: an }));
          }
        }
        Bt.length > 0
          ? (H(Bt, Ba),
            ar(""),
            Cr(!1),
            Fn(!1),
            alert(`成功导入 ${Bt.length} 个表情包`))
          : alert("未识别到有效的表情包格式。请确保每行包含链接和含义。");
      },
      O6 = () => {
        if (!Zn.trim()) return;
        const mt = pe(Zn.trim());
        (ja(""), Li(!1), En(mt.id));
      },
      B6 = (mt) => {
        confirm("确定删除该分类吗？分类下的表情包将变为未分类。") &&
          (se(mt), zs === mt && En("all"));
      },
      U6 = (mt) => {
        (ua(mt),
          Fa(mt.boundContacts || []),
          po(
            (d || [])
              .filter((Bt) => Bt.isGroup && um(Bt.settings).includes(mt.id))
              .map((Bt) => Bt.id),
          ),
          kn(!0));
      },
      G6 = () => {
        Ln &&
          (ke(Ln.id, fa),
          (d || []).forEach((mt) => {
            if (!mt.isGroup) return;
            const Bt = gr.includes(mt.id),
              Ns = um(mt.settings),
              Ws = Ns.includes(Ln.id);
            if (Bt && !Ws)
              g(mt.id, {
                boundMemeCategoryIds: [...Ns, Ln.id],
                boundMemeCategoryId: null,
              });
            else if (!Bt && Ws) {
              const mn = Ns.filter((Zs) => Zs !== Ln.id);
              g(mt.id, { boundMemeCategoryIds: mn, boundMemeCategoryId: null });
            }
          }),
          kn(!1),
          ua(null),
          Fa([]),
          po([]));
      },
      H6 = (mt) => {
        fa.includes(mt)
          ? Fa((Bt) => Bt.filter((Ns) => Ns !== mt))
          : Fa((Bt) => [...Bt, mt]);
      },
      W6 = (mt) => {
        gr.includes(mt)
          ? po((Bt) => Bt.filter((Ns) => Ns !== mt))
          : po((Bt) => [...Bt, mt]);
      },
      Y6 = (mt) => {
        wa.includes(mt)
          ? ia((Bt) => Bt.filter((Ns) => Ns !== mt))
          : ia((Bt) => [...Bt, mt]);
      },
      V6 = () => {
        wa.length !== 0 &&
          confirm(`确定删除选中的 ${wa.length} 个表情包吗？`) &&
          (U(wa), ia([]), sa(!1));
      },
      J6 = (mt) => {
        wa.length !== 0 && (Te(wa, mt), ia([]), sa(!1), La(!1), En(mt));
      },
      K6 = (mt) => {
        const Bt = oe.find((an) => an.id === mt),
          Ns = (Bt == null ? void 0 : Bt.name) || "表情包分组",
          Ws = (R || []).filter((an) => (an.categoryIds || []).includes(mt)),
          mn = {
            groupName: Ns,
            memes: Ws.map((an) => ({ url: an.url, meaning: an.meaning })),
          },
          Zs = JSON.stringify(mn, null, 2);
        (Cd({ json: Zs, groupName: Ns, count: Ws.length }), Ad(!0));
      },
      q6 = () => {
        var mt;
        vi != null &&
          vi.json &&
          ((mt = navigator.clipboard) != null && mt.writeText
            ? navigator.clipboard
                .writeText(vi.json)
                .then(() => {
                  alert(`已复制到剪贴板（${vi.count} 个表情包）`);
                })
                .catch(() => alert("复制失败，请尝试下载文件"))
            : alert("当前环境不支持剪贴板，请使用「下载 JSON 文件」"));
      },
      Q6 = () => {
        if (!(vi != null && vi.json)) return;
        const mt = new Blob([vi.json], { type: "application/json" }),
          Bt = document.createElement("a");
        ((Bt.href = URL.createObjectURL(mt)),
          (Bt.download = `${vi.groupName.replace(/[/\\?%*:|"<>]/g, "_")}_表情包.json`),
          Bt.click(),
          URL.revokeObjectURL(Bt.href),
          alert("已下载 JSON 文件，可分享给他人导入"));
      },
      Z6 = ({ type: mt, groupName: Bt, categoryId: Ns, memes: Ws }) => {
        if (mt === "new" && Bt) {
          const mn = pe(Bt);
          (H(Ws, mn.id),
            En(mn.id),
            alert(`已新建分组「${Bt}」并导入 ${Ws.length} 个表情包`));
        } else
          mt === "existing" &&
            Ns &&
            (H(Ws, Ns), En(Ns), alert(`已向该分组导入 ${Ws.length} 个表情包`));
        (nl(!1), kd(""), Sd(""), _d(""));
      },
      X6 = (mt) => {
        mt && (Ms(mt), bn(mt.url ?? ""), wn(mt.meaning ?? ""));
      },
      eM = () => {
        (Ms(null), bn(""), wn(""));
      },
      tM = () => {
        const mt = ls.messages || [];
        if (mt.length === 0) return;
        if (mt[mt.length - 1].sender === "me") {
          alert("只能重新生成 AI 的回复");
          return;
        }
        const Ns = [];
        for (let Ws = mt.length - 1; Ws >= 0; Ws--) {
          const mn = mt[Ws];
          if (mn.sender !== "me") Ns.push(mn.id);
          else break;
        }
        if (Ns.length > 0) {
          const Ws = new Set(Ns),
            mn = mt.filter((Zs) => !Ws.has(Zs.id));
          (y(t, Ns),
            Nt(!1),
            setTimeout(() => h(t, !1, "", mn, "chat_regen"), 100));
        }
      },
      sM = (mt) => {
        if (Vn) {
          Y6(mt.id);
          return;
        }
        (m(t, `[表情包] ${mt.meaning}`, null, "meme", {
          image: mt.url,
          meaning: mt.meaning,
        }),
          tn(!1),
          Nt(!1));
      },
      w2 = l.useMemo(() => {
        const mt = Ye.trim();
        return mt
          ? (Ir ? Ur : R || []).filter(
              (Ns) => Ns.meaning && Ns.meaning.includes(mt),
            )
          : [];
      }, [Ir, Ur, R, Ye]),
      j2 = Ye.trim().length >= 1 && w2.length > 0 && !Xu;
    l.useEffect(() => Xl(!1), [Ye]);
    const nM = (mt) => {
        (m(t, `[表情包] ${mt.meaning}`, null, "meme", {
          image: mt.url,
          meaning: mt.meaning,
        }),
          Ze(""),
          Xl(!0));
      },
      aM = () => {
        (Nt(!1), cf(!0));
      },
      rM = (mt) => {
        (ff(mt),
          cf(!1),
          Ed(""),
          Op(""),
          Ir && mt === "ta" ? (df(!0), Bc(null)) : (Bc(null), Id(!0)));
      },
      iM = (mt) => {
        (Bc(mt), df(!1), Id(!0));
      },
      N2 = () => {
        if (!Eo.trim() || !rl.trim()) return;
        const mt = parseFloat(rl).toFixed(2),
          Bt = uf === "ta",
          Ns = {};
        (Ir && Bt && Il && (Ns.targetContactId = Il.id),
          Bt
            ? m(t, `[外卖] 为你点了 ${Eo}`, null, "food_delivery", {
                item: Eo,
                price: mt,
                status: "pending",
                ...Ns,
              })
            : m(t, `[代付] 帮我付个款: ${Eo}`, null, "pay_for_me", {
                item: Eo,
                price: mt,
                status: "pending",
              }),
          Id(!1),
          Bc(null));
      },
      oM = () => {
        !Eo.trim() ||
          !rl.trim() ||
          (uf === "ta" ? (as("food_order"), is(!0)) : N2());
      },
      lM = l.useCallback(
        (mt) => {
          if (Uc) return;
          const Bt = {
            id: mt.id,
            name: mt.name,
            coverImgUrl: mt.coverImgUrl,
            trackCount: mt.trackCount,
            tracks: mt.tracks,
          };
          m(t, `[ACCEPT_LISTEN:${JSON.stringify(Bt)}]`, null, "system");
        },
        [t, m, Uc],
      ),
      cM = l.useCallback(() => {
        m(t, "[REJECT_LISTEN]", null, "system");
      }, [t, m]),
      dM = (mt) => {
        if (!mi) return;
        const {
            messageId: Bt,
            item: Ns,
            price: Ws,
            kind: mn = "pay_for_me",
          } = mi,
          Zs = $e(An) ?? p,
          an =
            (Zs == null ? void 0 : Zs.name) ||
            (p == null ? void 0 : p.name) ||
            "用户";
        if (mt === "accept") {
          if (Uc) {
            ti(null);
            return;
          }
          (xe(t, Bt, { status: "accepted", paidByName: an }),
            mn === "food_delivery"
              ? m(
                  t,
                  `[系统通知] ${an}已支付外卖订单：${Ns} (¥${Ws})`,
                  null,
                  "system",
                )
              : m(
                  t,
                  `[系统通知] ${an}代付成功：${Ns} (¥${Ws})`,
                  null,
                  "system",
                ));
        } else
          (xe(t, Bt, { status: "rejected" }),
            mn === "food_delivery"
              ? m(
                  t,
                  `[系统通知] ${an}取消了外卖支付：${Ns} (¥${Ws})`,
                  null,
                  "system",
                )
              : m(
                  t,
                  `[系统通知] ${an}拒绝代付：${Ns} (¥${Ws})`,
                  null,
                  "system",
                ));
        ti(null);
      },
      uM = (mt, Bt) => {
        Bt === "approve"
          ? ($n && w($n.id, { fingerprintStatus: "approved" }),
            xe(t, mt, { status: "approved" }),
            m(t, "[系统通知] 已同意开通指纹解锁权限", null, "system"))
          : ($n && w($n.id, { fingerprintStatus: "rejected" }),
            xe(t, mt, { status: "rejected" }),
            m(t, "[系统通知] 已拒绝开通指纹解锁权限", null, "system"));
      },
      fM = () => {
        (b(t), gn(!1), Wt(!1), Kt(!1));
      },
      mM = () => {
        (la.trim() ? ue(t, la.trim()) : ue(t, null),
          Va(""),
          ga(!1),
          Mn(!1),
          Nt(!1));
      },
      pM = (mt) => {
        ls.messages && ls.messages.length > 0
          ? oi(mt)
          : (re(t, mt), Mn(!1), Nt(!1));
      },
      xM = () => {
        fr && (re(t, fr), oi(null), Mn(!1), Nt(!1));
      },
      k2 = (mt) => {
        if (Ir) return [];
        const Bt = $n == null ? void 0 : $n.openingLines;
        if (!Bt || !Array.isArray(Bt) || Bt.length === 0) return [];
        if (typeof Bt[0] == "string") return Bt;
        const Ws = Bt.filter((an) => an && an.scene !== "meet");
        if (Ws.length === 0) return [];
        const Zs = (mt ? Ws.find((an) => an.id === mt) : null) || Ws[0];
        return Zs && Array.isArray(Zs.lines) ? Zs.lines : [];
      },
      hM = (mt) => {
        const Bt = k2(mt);
        (ls == null ? void 0 : ls.messages) && ls.messages.length > 0
          ? Tr(mt)
          : (ut(t, Bt, mt), Mn(!1), Nt(!1));
      },
      gM = () => {
        if (Yr) {
          const mt = k2(Yr);
          (ut(t, mt, Yr), Tr(null), Mn(!1), Nt(!1));
        }
      },
      bM = () => {
        Tr(null);
      },
      S2 = async () => {
        var mt, Bt, Ns, Ws;
        if (
          !((mt = ls.settings) != null && mt.userCity) &&
          !((Bt = ls.settings) != null && Bt.aiCity)
        ) {
          alert("请先输入城市名称");
          return;
        }
        ($t(!0), ot(null));
        try {
          const mn = {};
          if ((Ns = ls.settings) != null && Ns.userCity) {
            const Zs = await M(ls.settings.userCity, { diagnostics: !0 });
            Zs && typeof Zs == "object" && "ok" in Zs
              ? (mn.user = Zs.ok
                  ? `【${Zs.source || "unknown"}】${Zs.data}`
                  : `获取失败：${Zs.error || "unknown"}${Zs.reason ? `（${Zs.reason}）` : ""}`)
              : (mn.user = Zs || "获取失败 (请检查网络或城市名)");
          }
          if ((Ws = ls.settings) != null && Ws.aiCity) {
            const Zs = await M(ls.settings.aiCity, { diagnostics: !0 });
            Zs && typeof Zs == "object" && "ok" in Zs
              ? (mn.ai = Zs.ok
                  ? `【${Zs.source || "unknown"}】${Zs.data}`
                  : `获取失败：${Zs.error || "unknown"}${Zs.reason ? `（${Zs.reason}）` : ""}`)
              : (mn.ai = Zs || "获取失败 (请检查网络或城市名)");
          }
          ot(mn);
        } catch {
          alert("测试失败，请重试");
        } finally {
          $t(!1);
        }
      },
      _2 = async () => {
        var mn, Zs, an, hn, Un, Ha;
        const mt = (ka) => {
            const $i = String(ka || "").trim();
            if (!$i) return "";
            const na = $i.split(/\s+/).filter(Boolean),
              Jr = na[na.length - 1] || "";
            return Jr.includes("/") ? Jr : $i;
          },
          Bt = mt((mn = ls.settings) == null ? void 0 : mn.userTimeZone),
          Ns = mt((Zs = ls.settings) == null ? void 0 : Zs.aiTimeZone);
        if (
          !!!(Bt || Ns) &&
          !((an = ls.settings) != null && an.userCity) &&
          !((hn = ls.settings) != null && hn.aiCity)
        ) {
          alert("请先输入时区（推荐）或城市名称");
          return;
        }
        (Jt(!0), es(null));
        try {
          await new Promise((na) => setTimeout(na, 800));
          const ka = {},
            $i = (na) => {
              if (na && typeof na == "object" && "ok" in na) {
                if (!na.ok)
                  return `获取失败：${na.error || "unknown"}${na.reason ? `（${na.reason}）` : ""}`;
                const Jr = na.data;
                if (Jr && typeof Jr == "object")
                  try {
                    const Yp = new Date().toLocaleString("zh-CN", {
                      timeZone: Jr.timezone,
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: !1,
                    });
                    return `【${na.source || "unknown"}】${Jr.city} (${Jr.country}): ${Yp} (${Jr.timezone})`;
                  } catch {
                    return `【${na.source || "unknown"}】获取成功，但格式化失败 (${Jr.timezone})`;
                  }
                return `【${na.source || "unknown"}】获取成功`;
              }
              if (na && typeof na == "object")
                try {
                  const $o = new Date().toLocaleString("zh-CN", {
                    timeZone: na.timezone,
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !1,
                  });
                  return `${na.city} (${na.country}): ${$o} (${na.timezone})`;
                } catch {
                  return `获取成功，但格式化失败 (${na.timezone})`;
                }
              return na || "获取失败 (请检查网络或城市名)";
            };
          if (Bt)
            try {
              const Jr = new Date().toLocaleString("zh-CN", {
                timeZone: Bt,
                hour: "2-digit",
                minute: "2-digit",
                hour12: !1,
              });
              ka.user = `【local-tz】${Jr} (${Bt})`;
            } catch {
              ka.user = `【local-tz】无效时区：${Bt}`;
            }
          else if ((Un = ls.settings) != null && Un.userCity) {
            const na = await E(ls.settings.userCity, { diagnostics: !0 });
            ka.user = $i(na);
          }
          if (Ns)
            try {
              const Jr = new Date().toLocaleString("zh-CN", {
                timeZone: Ns,
                hour: "2-digit",
                minute: "2-digit",
                hour12: !1,
              });
              ka.ai = `【local-tz】${Jr} (${Ns})`;
            } catch {
              ka.ai = `【local-tz】无效时区：${Ns}`;
            }
          else if ((Ha = ls.settings) != null && Ha.aiCity) {
            const na = await E(ls.settings.aiCity, { diagnostics: !0 });
            ka.ai = $i(na);
          }
          es(ka);
        } catch {
          alert("测试失败，请重试");
        } finally {
          Jt(!1);
        }
      },
      A2 = async (mt, Bt) => {
        ss(!0);
        try {
          const Ns = d.find((Ws) => Ws.id === mt);
          if (Ns) {
            const Ws = Ns.messages || [];
            let mn = Bt && Bt > 0 ? Wo(Ws, Bt) : Ws;
            Bt > 0 && mn.length === 0 && Ws.length > 0 && (mn = Ws.slice(-Bt));
            const Zs = await Ve(mt, mn),
              an = Ns.currentArchiveId ?? null;
            Zs != null && Zs.id && an != null && ge(mt, Zs.id, an, Zs);
          }
        } catch {
          alert("生成记忆失败，请稍后重试");
        } finally {
          ss(!1);
        }
      },
      yM = (mt) => {
        const Bt = new Set(Vt);
        (Bt.has(mt) ? Bt.delete(mt) : Bt.add(mt), qt(Bt));
      },
      vM = (mt) => {
        const Bt = new Set(St);
        (Bt.has(mt) ? Bt.delete(mt) : Bt.add(mt), Be(Bt));
      },
      wM = (mt) => {
        if (mt.id === "default") return { bg: "#fffcf7", bubble: "#e5dfdb" };
        const Bt = mt.css || "",
          Ns = Bt.match(/--chat-bg:\s*([#\w(),%]+)/),
          Ws = Bt.match(/--bubble-me-bg:\s*([#\w(),%]+)/);
        return {
          bg: Ns ? Ns[1].trim() : "#f5f5f5",
          bubble: Ws ? Ws[1].trim() : "#e0e0e0",
        };
      };
    return e.jsxs("div", {
      className: "flex flex-col h-full relative overflow-hidden font-sans",
      children: [
        e.jsxs("div", {
          className: "chat-detail-theme-scope flex flex-col flex-1 min-h-0",
          children: [
            e.jsx("style", { children: qn }),
            e.jsxs("div", {
              className: "flex flex-col flex-1 min-h-0 relative",
              children: [
                e.jsxs("div", {
                  className: `absolute inset-0 z-[1] flex flex-col justify-end bg-white pb-[env(safe-area-inset-bottom,20px)] transition-[visibility,opacity] duration-300 ${Hn ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"}`,
                  "aria-hidden": !Hn,
                  children: [
                    e.jsx("div", {
                      className:
                        "flex gap-4 overflow-x-auto px-6 py-6 no-scrollbar items-end",
                      children: Fs.map((mt) => {
                        const Bt = wM(mt),
                          Ns = Ja === mt.id;
                        return e.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              (g(t, { activePresetId: mt.id }), jn(!1));
                            },
                            className: `flex-shrink-0 min-w-[110px] h-[150px] rounded-[20px] p-3.5 flex flex-col justify-between border transition-all duration-300 ${Ns ? "border-2 border-[#5d4037] bg-black/5" : "border border-black/6 bg-black/[0.02]"}`,
                            style: { backgroundColor: Bt.bg },
                            children: [
                              e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  e.jsx("div", {
                                    className: "w-9 h-3 rounded-md",
                                    style: { backgroundColor: Bt.bubble },
                                  }),
                                  e.jsx("div", {
                                    className: "w-3/4 h-3 rounded-md",
                                    style: {
                                      backgroundColor:
                                        "var(--chat-primary, #5d4037)",
                                    },
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[0.625rem] font-bold text-black/50 uppercase tracking-wider",
                                children: mt.name,
                              }),
                            ],
                          },
                          mt.id,
                        );
                      }),
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => jn(!1),
                      className:
                        "text-xs font-bold text-black/50 py-2 px-4 self-center mb-2",
                      children: "关闭",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  ref: Sr,
                  className:
                    "flex flex-col flex-1 min-h-0 relative z-10 overflow-hidden",
                  style: { transformOrigin: "center center" },
                  children: [
                    e.jsxs("div", {
                      className: "absolute inset-0 z-0 chat-backdrop",
                      ...((F2 = ls.settings) != null && F2.backgroundImage
                        ? { "data-has-background": "true" }
                        : {}),
                      children: [
                        e.jsx("div", {
                          className: "absolute inset-0 bg-dot-grid",
                        }),
                        ((z2 = ls.settings) == null
                          ? void 0
                          : z2.backgroundImage) &&
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-cover bg-center z-0 transition-all duration-500 opacity-100",
                            style: {
                              backgroundImage: `url(${ls.settings.backgroundImage})`,
                            },
                          }),
                      ],
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: xn,
                      className: "hidden",
                      accept: "image/*",
                      onChange: (mt) => pf(mt, "background"),
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: Aa,
                      className: "hidden",
                      accept: "image/*",
                      onChange: (mt) => pf(mt, "contact_avatar"),
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: si,
                      className: "hidden",
                      accept: "image/*",
                      onChange: (mt) => pf(mt, "user_avatar"),
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: Di,
                      className: "hidden",
                      accept: "image/*",
                      onChange: (mt) => pf(mt, "novel_character_photo"),
                    }),
                    e.jsx("input", {
                      type: "file",
                      ref: ec,
                      className: "hidden",
                      accept: "image/*",
                      onChange: (mt) => pf(mt, "image_message"),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex-1 flex flex-col relative min-h-0 chat-header-zone z-10",
                      children: [
                        lf &&
                          e.jsx("div", {
                            className:
                              "absolute inset-0 z-[210] pointer-events-none",
                            style: {
                              backdropFilter: "blur(12px)",
                              WebkitBackdropFilter: "blur(12px)",
                              background: "rgba(255,255,255,0.06)",
                            },
                            "aria-hidden": !0,
                          }),
                        e.jsx(AH, {
                          contact: An,
                          onBack: s,
                          onViewContact: Ir ? void 0 : n,
                          setShowSettings: Lo,
                          onOpenStatusWidget: Ir ? void 0 : () => Fp(!0),
                        }),
                        (ni == null ? void 0 : ni.isGroup) &&
                          (() => {
                            var Zs, an, hn, Un;
                            const mt =
                                ((Zs = ni == null ? void 0 : ni.settings) ==
                                null
                                  ? void 0
                                  : Zs.groupAnnouncement) ?? "",
                              Bt = !!(
                                (an = ni == null ? void 0 : ni.settings) !=
                                  null && an.groupAnnouncementBarHidden
                              ),
                              Ns = String(
                                ((hn = ni == null ? void 0 : ni.settings) ==
                                null
                                  ? void 0
                                  : hn.groupAnnouncementBarHiddenFor) || "",
                              ),
                              Ws = Bt && Ns && Ns === String(mt || "");
                            if (!String(mt || "").trim() || Ws) return null;
                            const mn =
                              ((Un = ni == null ? void 0 : ni.settings) == null
                                ? void 0
                                : Un.groupAnnouncementBarCollapsed) ?? !0;
                            return e.jsx(C$, {
                              announcement: mt,
                              collapsed: mn,
                              onToggle: () =>
                                g == null
                                  ? void 0
                                  : g(t, {
                                      groupAnnouncementBarCollapsed: !mn,
                                    }),
                              onClose: () =>
                                g == null
                                  ? void 0
                                  : g(t, {
                                      groupAnnouncementBarHidden: !0,
                                      groupAnnouncementBarHiddenFor: String(
                                        mt || "",
                                      ),
                                    }),
                            });
                          })(),
                        e.jsxs("div", {
                          className:
                            "flex-1 relative flex flex-col overflow-hidden mt-2 z-10",
                          children: [
                            j2 &&
                              e.jsx("div", {
                                className: "absolute inset-0 z-10",
                                style: { bottom: "136px" },
                                onClick: () => Xl(!0),
                                "aria-hidden": !0,
                              }),
                            e.jsx("div", {
                              ref: Ma,
                              onScroll: () => {
                                var mt, Bt;
                                return (Bt =
                                  (mt = Ga.current) == null
                                    ? void 0
                                    : mt.onScroll) == null
                                  ? void 0
                                  : Bt.call(mt);
                              },
                              className:
                                "message-list flex-1 min-h-0 overflow-y-auto no-scrollbar overscroll-contain",
                              style: {
                                touchAction: "pan-y",
                                WebkitOverflowScrolling: "touch",
                              },
                              children: e.jsx("div", {
                                className: "min-h-full flex flex-col",
                                children: e.jsx(OA, {
                                  ref: Ga,
                                  externalScrollContainerRef: Ma,
                                  updateChatSettings: g,
                                  chat: ni,
                                  justSentMessageId: Ue,
                                  justReceivedMessageId: jt,
                                  contact: An,
                                  contacts: f,
                                  user: (() => {
                                    var Bt;
                                    const mt = $e(An) ?? p;
                                    return Ir &&
                                      ((Bt =
                                        ls == null ? void 0 : ls.settings) ==
                                      null
                                        ? void 0
                                        : Bt.userAvatar) != null
                                      ? {
                                          ...mt,
                                          avatar: ls.settings.userAvatar,
                                        }
                                      : mt;
                                  })(),
                                  selectedMessageIds: Bs,
                                  selectionMode: _s,
                                  handleTouchStart: y6,
                                  handleTouchEnd: v6,
                                  toggleSelection: j6,
                                  setShowRecallInfo: Qt,
                                  onViewContact: n,
                                  expandedMessages: St,
                                  toggleVoiceExpansion: vM,
                                  isPlaying: T,
                                  stopTTS: j,
                                  playTTS: S,
                                  updateMessage: xe,
                                  playingMessageId: I,
                                  showTranslationIds: Vt,
                                  toggleTranslation: yM,
                                  scrollToMessage: Hc,
                                  messagesEndRef: Pn,
                                  onQuoteMessage: L6,
                                  onCancelLongPress: w6,
                                  handleTransferAction: P,
                                  setShowTransferActionModal: qe,
                                  setShowPayForMeActionModal: ti,
                                  onAcceptListen: lM,
                                  onRejectListen: cM,
                                  onOpenGashaponDetail: Dp,
                                  onOpenForwardChatDetail: $p,
                                  onFingerprintAction: uM,
                                  handleCoupleAvatarAccept: _,
                                  handleCoupleAvatarReject: A,
                                  getSpace: Xe,
                                  onVotePoll: C6,
                                  onRequestAddRelayItem: ds,
                                  onAddRelayItem: v2,
                                  onOpenRedPacketDetail: (mt) => {
                                    if (!mt || mt.type !== "red_packet") return;
                                    const Bt = mt.claims || [],
                                      Ns = (mt.count || 1) - Bt.length,
                                      Ws = Bt.some((mn) => mn.sender === "me");
                                    (Ns > 0 && !Ws && Z && t && Z(t, mt.id),
                                      ur({ id: mt.id }));
                                  },
                                  onGroupMemberClick: M6,
                                  onGroupMemberLongPress: T6,
                                  onUserAvatarClick: () => {
                                    var mt, Bt;
                                    return (Bt =
                                      (mt = si.current) == null
                                        ? void 0
                                        : mt.click) == null
                                      ? void 0
                                      : Bt.call(mt);
                                  },
                                  isGroupChat: Ir,
                                  availableEmotes: Xa,
                                  onGroupVoiceTTSNotConfigured: (mt, Bt) =>
                                    us({
                                      memberName: mt,
                                      contactId: Bt || null,
                                    }),
                                }),
                              }),
                            }),
                            e.jsx("div", {
                              ref: li,
                              className: "flex-shrink-0",
                              children: e.jsx(_H, {
                                replyingTo: js,
                                setReplyingTo: cs,
                                editingMessageId: Ne,
                                handleEditSelected: g6,
                                handleCancelEdit: b6,
                                selectionMode: _s,
                                selectedMessageIds: Bs,
                                handleReplySelected: S6,
                                handleCopySelected: I6,
                                handleFavoriteSelected: E6,
                                handleSpeakSelected: D6,
                                handleRecallSelected: k6,
                                handleDeleteSelected: N6,
                                setSelectionMode: qs,
                                setSelectedMessageIds: Js,
                                triggerAiReply: h,
                                contacts: f,
                                chatId: t,
                                inputText: Ye,
                                setInputText: Ze,
                                handleKeyPress: $6,
                                showTools: Ke,
                                setShowTools: Nt,
                                handleSend: b2,
                                chat: ls,
                                contact: An,
                                onInputFocusScrollToBottom: El,
                                onInputBlurForScroll: Ll,
                                showMemeSuggestions: j2,
                                memeSuggestions: w2,
                                onSendMemeFromSuggestion: nM,
                                onDismissMemeSuggestions: () => Xl(!0),
                                inputRef: Ki,
                                groupReplyInProgress: De,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Ke &&
                  e.jsx(iW, {
                    handleRegenerate: tM,
                    onTimeAdvanceClick: () => ns(!0),
                    setShowTools: Nt,
                    setShowTransferModal: Le,
                    onTransferClick: Ir
                      ? () => {
                          (Nt(!1), xt(!0));
                        }
                      : () => {
                          (Nt(!1), Le(!0));
                        },
                    setShowRedPacketModal: Rt,
                    setShowAlbumMenu: kt,
                    setShowVoiceModal: gs,
                    startVideoCall: q,
                    contact: An,
                    chat: ls,
                    setShowMemePanel: tn,
                    handleFoodOrderClick: aM,
                    setShowArchivePanel: Mn,
                    onGashaponClick: () => rr(!0),
                    onBackpackClick: () => rf(!0),
                    onPasswordClick: () => ii(!0),
                    onPollClick: () => Bp(!0),
                    onRelayClick: () => Gp(!0),
                  }),
                e.jsx(wY, {
                  show: dt,
                  onClose: () => xt(!1),
                  members: Wp,
                  onSelect: (mt) => {
                    (ms(mt), xt(!1), Le(!0));
                  },
                }),
                e.jsx(vY, {
                  show: bt,
                  onClose: () => ns(!1),
                  onConfirm: ({ timestamp: mt, note: Bt }) => {
                    (_t(t, { timestamp: mt, note: Bt }), ns(!1));
                  },
                  showPhoneCase: r,
                  initialTimestamp:
                    (Vr == null ? void 0 : Vr.timestamp) ?? null,
                  initialNote: (Vr == null ? void 0 : Vr.note) ?? "",
                }),
                e.jsx(QW, {
                  show: Rs,
                  onClose: () => {
                    (Rt(!1), nn(""), cn(1), ra(""));
                  },
                  totalAmount: Es,
                  setTotalAmount: nn,
                  count: Hs,
                  setCount: cn,
                  mode: fn,
                  setMode: Rn,
                  note: Qn,
                  setNote: ra,
                  onNext: () => {
                    !Es || parseFloat(Es) <= 0 || Hs < 1 || (Rt(!1), Ya(!0));
                  },
                }),
                e.jsx(ZW, {
                  show: _a,
                  onClose: () => {
                    (Ya(!1), kr(""));
                  },
                  totalAmount: Es,
                  count: Hs,
                  password: Fr,
                  setPassword: kr,
                  onConfirm: (mt) => {
                    try {
                      (O(
                        t,
                        parseFloat(Es),
                        Hs,
                        fn,
                        Qn || "恭喜发财，大吉大利",
                        mt,
                      ),
                        Ya(!1),
                        nn(""),
                        cn(1),
                        ra(""),
                        kr(""));
                    } catch (Bt) {
                      (alert((Bt == null ? void 0 : Bt.message) || "支付失败"),
                        kr(""));
                    }
                  },
                }),
                e.jsx(KW, {
                  show: !!Oa,
                  onClose: () => ur(null),
                  msg:
                    ((R2 = ls == null ? void 0 : ls.messages) == null
                      ? void 0
                      : R2.find(
                          (mt) => mt.id === (Oa == null ? void 0 : Oa.id),
                        )) || Oa,
                  chat: ls,
                  contacts: f,
                  user: $e(An) ?? p,
                  chatId: t,
                  onGrab: Z,
                }),
                e.jsx(WW, { show: jg, onClose: () => Bp(!1), onSubmit: _6 }),
                e.jsx(YW, { show: Up, onClose: () => Gp(!1), onSubmit: A6 }),
                e.jsx(VW, {
                  show: !!Zt,
                  messageId: Zt,
                  value: ks,
                  onChange: Ss,
                  onSubmit: (mt) => Zt && v2(Zt, mt),
                  onClose: () => {
                    (ds(null), Ss(""));
                  },
                }),
                e.jsx(sW, {
                  show: pi,
                  onClose: () => ii(!1),
                  contact: An,
                  chatId: t,
                  onUpdateContact: w,
                  sendMessage: m,
                  onCancelFingerprintRequest: () => {
                    const Bt = [...((ls == null ? void 0 : ls.messages) || [])]
                      .reverse()
                      .find(
                        (Ns) =>
                          Ns.type === "system_fingerprint_request" &&
                          Ns.sender === "me" &&
                          Ns.status === "pending",
                      );
                    (Bt && xe(t, Bt.id, { status: "cancelled" }),
                      $n && w($n.id, { fingerprintStatus: "none" }));
                  },
                }),
                e.jsx(AW, {
                  show: Io,
                  onClose: () => rr(!1),
                  onSelectSolo: () => {
                    (af(!1), al(!0));
                  },
                  onSelectWithRole: () => {
                    (af(!0), al(!0));
                  },
                  contact: An,
                }),
                e.jsx(CW, {
                  show: Md,
                  onClose: () => al(!1),
                  role: $n,
                  contact: An,
                  chatId: t,
                  callApi: Fe,
                  getEffectiveUser: $e,
                  getRoleBoundUser: tt,
                  chats: d,
                  onDrawComplete: () => {},
                  showPhoneCase: r,
                  withCharacter: hg,
                  sendMessage: m,
                  triggerAiReply: h,
                }),
                e.jsx(GA, {
                  show: bg,
                  onClose: () => Td(!1),
                  contact: An,
                  chatId: t,
                  chats: d,
                  callApi: Fe,
                  getRoleBoundUser: tt,
                  receiveMessage: Ee,
                  sendMessage: m,
                  setChats: u,
                  showPhoneCase: r,
                }),
                of &&
                  e.jsx(_W, {
                    item: of,
                    onClose: () => Dp(null),
                    showPhoneCase: r,
                  }),
                e.jsx(NW, {
                  show: !!mr,
                  onClose: () => $p(null),
                  friendName: mr == null ? void 0 : mr.friendName,
                  groupName: mr == null ? void 0 : mr.groupName,
                  messages: mr == null ? void 0 : mr.messages,
                  roleName: mr == null ? void 0 : mr.roleName,
                  roleAvatar: mr == null ? void 0 : mr.roleAvatar,
                  isBoundUserChat: mr == null ? void 0 : mr.isBoundUserChat,
                  userAvatar: mr == null ? void 0 : mr.userAvatar,
                }),
                e.jsx(dY, {
                  show: lf,
                  onClose: () => Fp(!1),
                  contact: An,
                  chat: ls,
                  getRoleBoundUser: tt,
                  callApi: Fe,
                  onOpenTrace: (mt) => zp(mt),
                  onOpenPlan: (mt) => Pp(mt),
                }),
                xo &&
                  e.jsx("div", {
                    className: "fixed inset-0 z-[1000] bg-black",
                    children: e.jsx(TA, {
                      contact: xo,
                      onBack: () => zp(null),
                      apiConfig: Re || {},
                      openTodayStory: !0,
                    }),
                  }),
                Rp &&
                  e.jsx("div", {
                    className: "fixed inset-0 z-[1000] bg-[#fcfcfc]",
                    children: e.jsx(MA, {
                      contact: Rp,
                      onBack: () => Pp(null),
                      apiConfig: Re || {},
                    }),
                  }),
                e.jsx(MW, {
                  show: gg,
                  onClose: () => rf(!1),
                  contact: An,
                  chatId: t,
                  sendMessage: m,
                  triggerAiReply: h,
                  showPhoneCase: r,
                }),
                e.jsx(PW, {
                  show: on,
                  onClose: () => tn(!1),
                  memes: Ir ? Ur : R,
                  memeCategories: oe,
                  activeMemeCategory: zs,
                  setActiveMemeCategory: En,
                  isManageMode: Vn,
                  setIsManageMode: sa,
                  selectedMemeIds: wa,
                  setSelectedMemeIds: ia,
                  isAddingMeme: Ea,
                  setIsAddingMeme: Fn,
                  isAddingCategory: Ei,
                  setIsAddingCategory: Li,
                  newCategoryName: Zn,
                  setNewCategoryName: ja,
                  handleAddCategory: O6,
                  handleOpenCategorySettings: U6,
                  targetCategoryForAdd: Ba,
                  setTargetCategoryForAdd: Mr,
                  isBatchImport: ha,
                  setIsBatchImport: Cr,
                  batchImportContent: hr,
                  setBatchImportContent: ar,
                  handleBatchImport: P6,
                  newMemeUrl: dn,
                  setNewMemeUrl: yn,
                  newMemeMeaning: va,
                  setNewMemeMeaning: Bn,
                  handleAddMeme: R6,
                  handleCompressImage: $r,
                  setShowCategoryModal: La,
                  handleDeleteSelectedMemes: V6,
                  handleSendMeme: sM,
                  onExportGroupClick: K6,
                  showExportChoiceModal: nf,
                  onCloseExportChoice: () => {
                    (Ad(!1), Cd(null));
                  },
                  exportPayload: vi,
                  onExportCopy: q6,
                  onExportDownload: Q6,
                  onImportGroupClick: () => nl(!0),
                  showImportGroupModal: ef,
                  setShowImportGroupModal: nl,
                  importGroupPasteContent: Oc,
                  setImportGroupPasteContent: kd,
                  handleImportGroupSubmit: Z6,
                  importTargetCategoryId: tf,
                  setImportTargetCategoryId: Sd,
                  importAsNewGroupName: sf,
                  setImportAsNewGroupName: _d,
                  onOpenEditMeme: X6,
                  editingMeme: Et,
                  onCloseEditMeme: eM,
                  editMemeUrl: Us,
                  setEditMemeUrl: bn,
                  editMemeMeaning: en,
                  setEditMemeMeaning: wn,
                  handleUpdateMeme: ce,
                }),
                e.jsx(GW, {
                  show: Nn,
                  onClose: () => kn(!1),
                  contacts: f,
                  selectedContactIds: fa,
                  toggleContactSelection: H6,
                  groupChats: Do,
                  selectedGroupChatIds: gr,
                  toggleGroupSelection: W6,
                  editingCategory: Ln,
                  handleDeleteCategory: B6,
                  handleSaveCategoryBinding: G6,
                }),
                e.jsx(HW, {
                  show: oa,
                  onClose: () => La(!1),
                  memeCategories: oe,
                  handleAddMemesToCategory: J6,
                }),
                e.jsx(AY, { show: As, onClose: () => Ks(!1) }),
                e.jsx(vW, {
                  show: yg,
                  onClose: () => cf(!1),
                  onSelectType: rM,
                }),
                e.jsx(yW, {
                  show: wg,
                  onClose: () => df(!1),
                  members: Wp,
                  onSelect: iM,
                }),
                e.jsx(wW, {
                  show: vg,
                  onClose: () => {
                    (Id(!1), Bc(null));
                  },
                  type: uf,
                  foodName: Eo,
                  setFoodName: Ed,
                  foodPrice: rl,
                  setFoodPrice: Op,
                  onSend: oM,
                  targetMember: Il,
                }),
                e.jsx(oW, {
                  show: Gn,
                  onClose: () => Mn(!1),
                  isCreatingArchive: za,
                  setIsCreatingArchive: ga,
                  newArchiveName: la,
                  setNewArchiveName: Va,
                  handleCreateArchive: mM,
                  archives: W,
                  chatId: t,
                  deleteArchive: he,
                  handleLoadArchive: pM,
                  openingSets: Ir
                    ? []
                    : (() => {
                        const mt = $n == null ? void 0 : $n.openingLines;
                        return !mt || !Array.isArray(mt) || mt.length === 0
                          ? []
                          : typeof mt[0] == "string"
                            ? [{ id: "legacy", name: "默认" }]
                            : mt
                                .filter((Ws) => Ws && Ws.scene !== "meet")
                                .map((Ws) => ({
                                  id: Ws.id || "",
                                  name: Ws.name || "未命名",
                                }));
                      })(),
                  selectedOpeningId:
                    (P2 = ls == null ? void 0 : ls.settings) == null