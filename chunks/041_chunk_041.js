                                            alt: "",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "role-drafts-story-cover-fallback",
                                          }),
                                  }),
                                  e.jsx("div", {
                                    className: "role-drafts-story-pinned",
                                    children: e.jsx("div", {
                                      className:
                                        "role-drafts-story-section role-drafts-sent",
                                      children: e.jsxs("div", {
                                        className: "role-drafts-sent-row",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "role-drafts-sent-avatar-stack",
                                            children: e.jsx("div", {
                                              className:
                                                "role-drafts-sent-avatar",
                                              children: e.jsx("img", {
                                                src:
                                                  (n == null
                                                    ? void 0
                                                    : n.avatar) ||
                                                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${R}`,
                                                alt: "",
                                              }),
                                            }),
                                          }),
                                          e.jsxs("div", {
                                            className: "role-drafts-sent-wrap",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "role-drafts-sent-dot",
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "role-drafts-sent-bubble",
                                                children: j,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "role-drafts-story-body no-scrollbar",
                                    children: [
                                      !!I &&
                                        e.jsx("div", {
                                          className:
                                            "role-drafts-story-section role-drafts-error",
                                          children: e.jsx("div", {
                                            className: "role-drafts-error-text",
                                            children: I,
                                          }),
                                        }),
                                      e.jsx("div", {
                                        className:
                                          "role-drafts-story-section role-drafts-mood",
                                        children: e.jsx("div", {
                                          className: "role-drafts-mood-card",
                                          children: e.jsx("div", {
                                            className: "role-drafts-typing",
                                            children: A,
                                          }),
                                        }),
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "role-drafts-story-section role-drafts-deleted",
                                        children: e.jsx("button", {
                                          type: "button",
                                          className: [
                                            "role-drafts-spoiler",
                                            D ? "revealed" : "",
                                          ].join(" "),
                                          onClick: () => $((ue) => !ue),
                                          "aria-label": D
                                            ? "隐藏未发送内容"
                                            : "显示未发送内容",
                                          children: C,
                                        }),
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "role-drafts-story-section role-drafts-reason",
                                        children: e.jsx("div", {
                                          className: "role-drafts-reason-tags",
                                          children: (() => {
                                            const ue = (E || "")
                                              .split(/[、，,]\s*|\s+/)
                                              .map((re) => re.trim())
                                              .filter(Boolean);
                                            return ue.length === 0
                                              ? e.jsx("span", {
                                                  className:
                                                    "role-drafts-reason-tag",
                                                  children: "—",
                                                })
                                              : ue.map((re, he) =>
                                                  e.jsx(
                                                    "span",
                                                    {
                                                      className:
                                                        "role-drafts-reason-tag",
                                                      children: re,
                                                    },
                                                    he,
                                                  ),
                                                );
                                          })(),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: [
                    "role-status-dock",
                    d === yo && m === "story" ? "role-status-dock-hidden" : "",
                  ].join(" "),
                  "aria-hidden": d === yo && m === "story",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      className: `role-status-dock-btn ${d === yx ? "active" : ""}`,
                      onClick: () => u(yx),
                      "aria-label": "资料",
                      children: e.jsx(Lu, { size: 18, strokeWidth: 2 }),
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: `role-status-dock-btn ${d === qc ? "active" : ""}`,
                      onClick: () => u(qc),
                      "aria-label": "群聊",
                      children: e.jsx(d3, { size: 18, strokeWidth: 2 }),
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: `role-status-dock-btn ${d === yo ? "active" : ""}`,
                      onClick: () => {
                        (u(yo), v(null), h("drafts"), x(null));
                      },
                      "aria-label": "草稿箱",
                      children: e.jsx(e3, { size: 18, strokeWidth: 2 }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(nY, {
            show: !!K,
            onClose: () => q(null),
            groupTitle: K == null ? void 0 : K.title,
            messages: (K == null ? void 0 : K.messages) || [],
            roleName: R,
            roleAvatarUrl: n == null ? void 0 : n.avatar,
            onRefresh: W,
            isRefreshingMessages: le,
          }),
        ],
      })
    : null;
}
const PN = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
function uY({
  chat: t,
  contact: s,
  contacts: n,
  chatId: a,
  updateChatSettings: r,
  avatarInputRef: i,
  fileInputRef: o,
  sendMessage: c,
  currentUserName: d,
  onMuteApplied: u,
  onUnmuteApplied: f,
  handleAddMembersToGroup: p,
  handleRemoveMembersFromGroup: m,
  handleLeaveGroup: h,
  handleDismissGroup: g,
  handleDeleteGroupChat: x,
  onClose: y,
  setShowMemories: v,
  setShowGroupMemories: b,
  setShowCallHistory: N,
  currentTurns: w,
  memeCategories: _,
  handleTestTime: A,
  handleTestWeather: k,
  timeTestResult: C,
  weatherTestResult: M,
  isTestingTime: E,
  isTestingWeather: S,
  showCSSEditor: j,
  setShowCSSEditor: T,
  showAllPresets: I,
  setShowAllPresets: L,
  activePresetId: B,
  setActivePresetId: F,
  presets: D,
  copiedPresetId: $,
  handleCopyPresetCss: P,
  handleExportPreset: z,
  handleDeletePresetWithConfirm: O,
  cssImportRef: Z,
  presetPickerOpen: K,
  setPresetPickerOpen: q,
  presetPickerRef: V,
  editingCSS: ne,
  setEditingCSS: le,
  handleUpdatePreset: ie,
  newPresetName: X,
  setNewPresetName: je,
  handleSavePreset: xe,
  setShowClearConfirm: ye,
  setShowHistorySearch: R,
  compressImage: oe,
}) {
  var ee;
  return t != null && t.isGroup
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx(Y$, {
            chat: t,
            contact: s,
            contacts: n,
            chatId: a,
            updateChatSettings: r,
            avatarInputRef: i,
            fileInputRef: o,
            sendMessage: c,
            currentUserName: d,
            compressImage: oe,
            onMuteApplied: u,
            onUnmuteApplied: f,
            handleAddMembersToGroup: p,
            handleRemoveMembersFromGroup: m,
            handleLeaveGroup: h,
            handleDismissGroup: g,
            handleDeleteGroupChat: x,
            onClose: y,
            setShowMemories: v,
            setShowGroupMemories: b,
            setShowCallHistory: N,
            currentTurns: w,
            memeCategories: _,
            renderAfterQuickActions: e.jsx(e2, {
              sectionNumber: "01",
              chat: t,
              chatId: a,
              updateChatSettings: r,
              handleTestTime: A,
              handleTestWeather: k,
              timeTestResult: C,
              weatherTestResult: M,
              isTestingTime: E,
              isTestingWeather: S,
            }),
          }),
          e.jsx(DW, {
            sectionNumber: "06",
            chat: t,
            chatId: a,
            updateChatSettings: r,
          }),
          e.jsx(Xv, {
            sectionNumber: "07",
            showCSSEditor: j,
            setShowCSSEditor: T,
            showAllPresets: I,
            setShowAllPresets: L,
            activePresetId: B,
            setActivePresetId: F,
            presets: D,
            copiedPresetId: $,
            handleCopyPresetCss: P,
            handleExportPreset: z,
            handleDeletePresetWithConfirm: O,
            cssImportRef: Z,
            presetPickerOpen: K,
            setPresetPickerOpen: q,
            presetPickerRef: V,
            editingCSS: ne,
            setEditingCSS: le,
            handleUpdatePreset: ie,
            newPresetName: X,
            setNewPresetName: je,
            handleSavePreset: xe,
          }),
          e.jsxs(We.div, {
            variants: PN,
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsx("span", {
                    className: "text-4xl font-serif text-gray-200",
                    children: "08",
                  }),
                  e.jsx("h3", {
                    className:
                      "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                    children: "查找记录",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
                children: e.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    e.jsx("p", {
                      className: "font-serif text-xl italic text-gray-800",
                      children: "聊天记录检索",
                    }),
                    e.jsx("button", {
                      type: "button",
                      onClick: () => (R == null ? void 0 : R(!0)),
                      className:
                        "text-[10px] tracking-widest underline text-gray-400 hover:text-gray-900",
                      children: "打开检索",
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(We.div, {
            variants: PN,
            className: "pt-8 border-t border-gray-200 space-y-0",
            children: [
              e.jsx("button", {
                onClick: () => ye(!0),
                className: "w-full py-4 text-center group",
                children: e.jsx("span", {
                  className:
                    "text-[10px] tracking-[0.3em] text-gray-300 group-hover:text-red-400 transition-colors uppercase",
                  children: "清空所有聊天记录",
                }),
              }),
              ((ee = t == null ? void 0 : t.settings) == null
                ? void 0
                : ee.myRole) === "owner"
                ? e.jsx("button", {
                    onClick: () => {
                      confirm("确定要解散该群聊吗？此操作不可恢复。") &&
                        (g == null || g(a), y == null || y());
                    },
                    className:
                      "w-full py-4 text-center group border-t border-gray-100",
                    children: e.jsx("span", {
                      className:
                        "text-[10px] tracking-[0.3em] text-gray-300 group-hover:text-red-400 transition-colors uppercase",
                      children: "解散群聊",
                    }),
                  })
                : e.jsx("button", {
                    onClick: () => {
                      confirm("确定要退出该群聊吗？") &&
                        (h == null || h(a), y == null || y());
                    },
                    className:
                      "w-full py-4 text-center group border-t border-gray-100",
                    children: e.jsx("span", {
                      className:
                        "text-[10px] tracking-[0.3em] text-gray-300 group-hover:text-red-400 transition-colors uppercase",
                      children: "退出群聊",
                    }),
                  }),
              e.jsx("button", {
                onClick: () => {
                  confirm(`确定彻底删除这个群聊吗？
这会直接删除整个群聊会话并清空全部聊天记录，群聊将从列表中消失，且无法恢复。`) &&
                    (x == null || x(a), y == null || y());
                },
                className:
                  "w-full py-4 text-center group border-t border-gray-100",
                children: e.jsx("span", {
                  className:
                    "text-[10px] tracking-[0.3em] text-gray-300 group-hover:text-red-500 transition-colors uppercase",
                  children: "彻底删除群聊",
                }),
              }),
            ],
          }),
        ],
      })
    : null;
}
const fY = "july-ovo-single-custom-prompt-presets",
  mY = 1,
  Dc = "presets";
function t2() {
  return new Promise((t, s) => {
    const n = indexedDB.open(fY, mY);
    ((n.onerror = () => s(n.error)),
      (n.onsuccess = () => t(n.result)),
      (n.onupgradeneeded = (a) => {
        const r = a.target.result;
        r.objectStoreNames.contains(Dc) ||
          r.createObjectStore(Dc, { keyPath: "id" });
      }));
  });
}
function pY(t) {
  try {
    if (!t) return;
    window.dispatchEvent(
      new CustomEvent(ku, {
        detail: {
          source: "chat_app",
          contactId: t,
          direction: "out",
          sender: "me",
          messageType: "call_history_opened",
          text: "",
          timestamp: Date.now(),
        },
      }),
    );
  } catch {}
}
async function Mb() {
  const t = await t2();
  return new Promise((s, n) => {
    const r = t.transaction(Dc, "readonly").objectStore(Dc).getAll();
    ((r.onsuccess = () => s(r.result || [])), (r.onerror = () => n(r.error)));
  });
}
async function xY(t) {
  const s = await t2();
  return new Promise((n, a) => {
    const r = s.transaction(Dc, "readwrite");
    (r.objectStore(Dc).put(t),
      (r.oncomplete = () => n()),
      (r.onerror = () => a(r.error)));
  });
}
async function hY(t) {
  const s = await t2();
  return new Promise((n, a) => {
    const r = s.transaction(Dc, "readwrite");
    (r.objectStore(Dc).delete(t),
      (r.oncomplete = () => n()),
      (r.onerror = () => a(r.error)));
  });
}
const ol = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
function gY({
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
  novelCharacterPhotoInputRef: M,
  showCSSEditor: E,
  setShowCSSEditor: S,
  showAllPresets: j,
  setShowAllPresets: T,
  activePresetId: I,
  setActivePresetId: L,
  presets: B,
  copiedPresetId: F,
  handleCopyPresetCss: D,
  handleExportPreset: $,
  handleDeletePresetWithConfirm: P,
  cssImportRef: z,
  presetPickerOpen: O,
  setPresetPickerOpen: Z,
  presetPickerRef: K,
  editingCSS: q,
  setEditingCSS: V,
  handleUpdatePreset: ne,
  newPresetName: le,
  setNewPresetName: ie,
  handleSavePreset: X,
  setShowClearConfirm: je,
  setShowHistorySearch: xe,
  sendMessage: ye,
  triggerAiReply: R,
  compressImage: oe,
}) {
  var gt,
    ae,
    nt,
    It,
    Xt,
    bs,
    ss,
    _s,
    qs,
    Bs,
    Js,
    Xs,
    gn,
    sn,
    ln,
    rn,
    wt,
    xs,
    ot,
    st,
    $t,
    Ft,
    es,
    At,
    Jt,
    Vt,
    qt,
    Lt,
    Qt,
    js,
    cs,
    Ne,
    Je,
    St,
    Be,
    Ke,
    Nt,
    bt,
    ns,
    Ge,
    Le,
    _e,
    yt,
    rt,
    ze,
    lt,
    it,
    Ht,
    is,
    os,
    as,
    vs,
    ts,
    ys,
    Vs,
    pt,
    qe,
    dt,
    xt,
    zt,
    ms,
    Cs,
    us,
    Rs;
  if (!t || t.isGroup) return null;
  const ee = !!((gt = t.settings) != null && gt.singleLongSentenceMode),
    H = Ap(t == null ? void 0 : t.messages),
    Y =
      s != null && s.id
        ? (nt = (ae = t.settings) == null ? void 0 : ae.blockedRoles) == null
          ? void 0
          : nt[s.id]
        : void 0,
    U =
      !(s != null && s.id) || Y == null
        ? !1
        : typeof Y == "number"
          ? !0
          : typeof Y == "object"
            ? (Y == null ? void 0 : Y.blockedAt) != null &&
              (Y == null ? void 0 : Y.unblockedAt) == null
            : !1,
    ce =
      (s == null ? void 0 : s.remark) ||
      (s == null ? void 0 : s.nickname) ||
      (s == null ? void 0 : s.name) ||
      "TA",
    pe = l.useRef(null),
    [se, Te] = l.useState(!1),
    [ke, W] = l.useState(""),
    [ue, re] = l.useState(""),
    [he, ge] = l.useState(null),
    [J, G] = l.useState(""),
    [we, Q] = l.useState(""),
    [ve, Ve] = l.useState(""),
    [Ae, te] = l.useState([]);
  l.useEffect(() => {
    let Rt = !1;
    return (
      (async () => {
        try {
          const Es = await Mb();
          Rt ||
            te([...Es].sort((nn, Hs) => (Hs.savedAt || 0) - (nn.savedAt || 0)));
        } catch {}
      })(),
      () => {
        Rt = !0;
      }
    );
  }, []);
  const Se = Array.isArray(
      (It = t.settings) == null ? void 0 : It.avatarLibrary,
    )
      ? t.settings.avatarLibrary
      : [],
    Fe = () => {
      const Rt = (ke || "").trim(),
        Es = (ue || "").trim();
      if (!Rt) return;
      const nn = `av-${Date.now()}`,
        Hs = [...Se, { id: nn, url: Rt, desc: Es }];
      (a(n, { avatarLibrary: Hs }), W(""), re(""));
    },
    $e = async (Rt) => {
      var nn, Hs;
      const Es =
        (Hs = (nn = Rt.target) == null ? void 0 : nn.files) == null
          ? void 0
          : Hs[0];
      if (!(!Es || !oe)) {
        try {
          const cn = await oe(Es, 400, 0.8),
            fn = `av-${Date.now()}`,
            Rn = [...Se, { id: fn, url: cn, desc: "" }];
          a(n, { avatarLibrary: Rn });
        } catch {}
        Rt.target.value = "";
      }
    },
    tt = (Rt) => {
      (ge(Rt.id), G((Rt.desc || Rt.description || "").trim()));
    },
    Xe = () => {
      if (he == null) return;
      const Rt = Se.map((Es) =>
        Es.id === he ? { ...Es, desc: J.trim() } : Es,
      );
      (a(n, { avatarLibrary: Rt }), ge(null), G(""));
    },
    ht = (Rt) => {
      var nn;
      ((nn = Se[Rt]) == null ? void 0 : nn.id) === he && (ge(null), G(""));
      const Es = Se.filter((Hs, cn) => cn !== Rt);
      a(n, { avatarLibrary: Es });
    },
    Pe = (Rt) => {
      !(Rt != null && Rt.url) ||
        !s ||
        (r(s.id, { avatar: Rt.url }),
        ye && ye(n, "[系统提示：头像已更换]", null, "system"));
    },
    ut = Array.isArray(
      (Xt = t.settings) == null ? void 0 : Xt.coupleAvatarPairs,
    )
      ? t.settings.coupleAvatarPairs
      : [],
    [_t, Ee] = l.useState(!1),
    [fe, He] = l.useState(""),
    [Ie, Ce] = l.useState(""),
    [Re, De] = l.useState(""),
    [at, ft] = l.useState(""),
    [vt, Oe] = l.useState(""),
    [Qe, Ye] = l.useState(null),
    Ze = l.useRef(null),
    Ue = l.useRef(null),
    me = () => {
      const Rt = (fe || "").trim(),
        Es = (Ie || "").trim(),
        nn = (at || "").trim(),
        Hs = (vt || "").trim();
      if (!Rt || !nn || !Hs) return;
      const cn = `cp-${Date.now()}`,
        fn = (Re || "")
          .split(/[,，\s]+/)
          .map((Qn) => Qn.trim())
          .filter(Boolean),
        Rn = [
          ...ut,
          {
            id: cn,
            name: Rt,
            desc: Es,
            tags: fn,
            aiAvatar: nn,
            userAvatar: Hs,
          },
        ];
      (a(n, { coupleAvatarPairs: Rn }), He(""), Ce(""), De(""), ft(""), Oe(""));
    },
    jt = (Rt, Es) => {
      var Hs, cn;
      const nn =
        (cn = (Hs = Es.target) == null ? void 0 : Hs.files) == null
          ? void 0
          : cn[0];
      !nn ||
        !oe ||
        (oe(nn, 400, 0.8)
          .then((fn) => {
            Rt === "ai" ? ft(fn) : Oe(fn);
          })
          .catch(() => {}),
        (Es.target.value = ""));
    },
    Gt = (Rt) => {
      var nn;
      const Es = ut.filter((Hs, cn) => cn !== Rt);
      (a(n, { coupleAvatarPairs: Es }),
        Qe === ((nn = ut[Rt]) == null ? void 0 : nn.id) && Ye(null));
    },
    Pt = (Rt) => {
      if (!ye || !Rt) return;
      const Es = `我想换这套情头（${Rt.name}），你觉得呢？`;
      (ye(n, Es, null, "couple_avatar_request", {
        pairId: Rt.id,
        pairName: Rt.name,
        aiAvatar: Rt.aiAvatar,
        userAvatar: Rt.userAvatar,
      }),
        c == null || c());
    },
    Wt = async () => {
      var Hs;
      const Rt = (we || "").trim();
      if (!Rt) return;
      const Es = ((Hs = t.settings) == null ? void 0 : Hs.customPrompt) ?? "",
        nn = {
          id: `scp-${Date.now()}`,
          name: Rt,
          text: Es,
          savedAt: Date.now(),
        };
      try {
        (await xY(nn), Q(""));
        const cn = await Mb();
        te([...cn].sort((fn, Rn) => (Rn.savedAt || 0) - (fn.savedAt || 0)));
      } catch {}
    },
    ct = (Rt) => {
      const Es = Rt.target.value;
      if ((Ve(Es), !Es)) return;
      const nn = Ae.find((Hs) => Hs.id === Es);
      nn && a(n, { customPrompt: nn.text ?? "" });
    },
    Kt = async () => {
      if (ve)
        try {
          (await hY(ve), Ve(""));
          const Rt = await Mb();
          te([...Rt].sort((Es, nn) => (nn.savedAt || 0) - (Es.savedAt || 0)));
        } catch {}
    },
    fs = () => {
      var fn, Rn;
      if (!(s != null && s.id)) return;
      const Rt = s.id,
        Es =
          (fn = t.settings) != null &&
          fn.blockedRoles &&
          typeof t.settings.blockedRoles == "object"
            ? t.settings.blockedRoles
            : {},
        nn = Es == null ? void 0 : Es[Rt];
      if (
        nn == null
          ? !1
          : typeof nn == "number"
            ? !0
            : typeof nn == "object"
              ? (nn == null ? void 0 : nn.blockedAt) != null &&
                (nn == null ? void 0 : nn.unblockedAt) == null
              : !1
      ) {
        const Qn = { ...Es },
          ra =
            typeof nn == "number"
              ? nn
              : typeof nn == "object" &&
                  (nn == null ? void 0 : nn.blockedAt) != null
                ? nn.blockedAt
                : Date.now();
        if (
          ((Qn[Rt] = { blockedAt: ra, unblockedAt: Date.now() }),
          a(n, { blockedRoles: Qn }),
          ye == null || ye(n, `[系统提示：已解除拉黑 ${ce}]`, null, "system"),
          typeof R == "function")
        ) {
          const _a = new Date().toISOString(),
            Ya = {
              id: `sys-unblocked-inject-${Date.now()}-${Rt}`,
              sender: "system",
              type: "system",
              timestamp: _a,
              text: "[系统提示：用户刚刚解除了对你的拉黑。你现在可以把这当成“你主动开口的一次机会”，请读取最近上下文与情绪走向，并用你的人设做出真实反应。\n输出必须像微信短句连发：总共 5–10 句，每句用 `||` 分隔（不要编号、不要长篇大段），每句尽量短，允许停顿与情绪递进。\n若本会话开启了「实时翻译」，请为每一条气泡追加译文标签：在该气泡末尾追加 ` [TRANS:译文]`（译文必须是中文且不含任何英文字母）。保持原文不变，译文用更自然的中文表达。\n禁止提及系统/模型/提示词等元信息。]",
            };
          setTimeout(() => {
            try {
              R(n, !1, "", [...((t == null ? void 0 : t.messages) || []), Ya]);
            } catch {}
          }, 220);
        }
        return;
      }
      const cn = { ...Es, [Rt]: { blockedAt: Date.now(), unblockedAt: null } };
      (a(n, {
        blockedRoles: cn,
        ...((Rn = t.settings) != null && Rn.autoMessageEnabled
          ? {}
          : { autoMessageEnabled: !0 }),
      }),
        ye == null || ye(n, `[系统提示：已将 ${ce} 拉黑]`, null, "system"),
        typeof R == "function" &&
          setTimeout(() => {
            try {
              R(n);
            } catch {}
          }, 220));
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(We.div, {
        variants: ol,
        className:
          "flex items-start gap-6 p-6 bg-white border border-gray-200 shadow-sm",
        children: [
          e.jsxs("div", {
            className:
              "relative w-24 h-24 flex-shrink-0 overflow-hidden border border-gray-100 cursor-pointer group",
            onClick: () => {
              var Rt;
              return (Rt = i == null ? void 0 : i.current) == null
                ? void 0
                : Rt.click();
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
                    children: "专属伴侣",
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
                children: ["对话回合: ", H],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: ol,
        className: "grid grid-cols-3 gap-4 border-y border-gray-200 py-8",
        children: [
          e.jsxs("button", {
            onClick: () => {
              var Rt;
              return (Rt = o == null ? void 0 : o.current) == null
                ? void 0
                : Rt.click();
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
            onClick: () => {
              (c == null || c(),
                u == null || u(!0),
                pY(s == null ? void 0 : s.id));
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
      ((bs = t.settings) == null ? void 0 : bs.backgroundImage) &&
        e.jsx(We.div, {
          variants: ol,
          className: "flex justify-center -mt-4",
          children: e.jsx("button", {
            onClick: () => a(n, { backgroundImage: null }),
            className:
              "text-[10px] text-gray-400 hover:text-red-500 font-mono transition-colors",
            children: "[ 移除当前背景 ]",
          }),
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
        variants: ol,
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
                    disabled: ee,
                    onClick: () => {
                      var Rt;
                      ee ||
                        a(n, {
                          enableTTS: !(
                            (Rt = t.settings) != null && Rt.enableTTS
                          ),
                        });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ee ? "opacity-40 cursor-not-allowed border-gray-100 text-gray-300" : (ss = t.settings) != null && ss.enableTTS ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (_s = t.settings) != null && _s.enableTTS
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              ((qs = t.settings) == null ? void 0 : qs.enableTTS) &&
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
                                    ((Bs = t.settings) == null
                                      ? void 0
                                      : Bs.minimaxGroupId) || "",
                                  onChange: (Rt) =>
                                    a(n, { minimaxGroupId: Rt.target.value }),
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
                                        ((Js = t.settings) == null
                                          ? void 0
                                          : Js.minimaxModel) || Au,
                                      onChange: (Rt) =>
                                        a(n, { minimaxModel: Rt.target.value }),
                                      className:
                                        "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 transition-colors pr-8",
                                      children: Sv(
                                        (Xs = t.settings) == null
                                          ? void 0
                                          : Xs.minimaxModel,
                                      ).map(({ value: Rt, label: Es }) =>
                                        e.jsx(
                                          "option",
                                          { value: Rt, children: Es },
                                          Rt,
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
                                  onChange: (Rt) => v(Rt.target.value),
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
                                  onClick: () => {
                                    const Rt = y == null ? void 0 : y.trim();
                                    (a(n, { voiceId: Rt }),
                                      s &&
                                        r &&
                                        Rt &&
                                        r(s.id, { ttsVoiceId: Rt }));
                                  },
                                  className:
                                    "inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-[10px] tracking-widest font-bold hover:bg-black transition-colors",
                                  children: [
                                    e.jsx(oo, { size: 14, strokeWidth: 2 }),
                                    "保存",
                                  ],
                                }),
                                e.jsxs("button", {
                                  onClick: async () => {
                                    var Es, nn, Hs, cn, fn;
                                    await b("你好，这是一个语音测试。", {
                                      voiceId:
                                        (y == null ? void 0 : y.trim()) ||
                                        void 0,
                                      speed:
                                        (Es = t.settings) == null
                                          ? void 0
                                          : Es.speed,
                                      vol:
                                        (nn = t.settings) == null
                                          ? void 0
                                          : nn.vol,
                                      pitch:
                                        (Hs = t.settings) == null
                                          ? void 0
                                          : Hs.pitch,
                                      groupId:
                                        (cn = t.settings) == null
                                          ? void 0
                                          : cn.minimaxGroupId,
                                      minimaxModel:
                                        (fn = t.settings) == null
                                          ? void 0
                                          : fn.minimaxModel,
                                    });
                                  },
                                  className:
                                    "inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 text-[10px] tracking-widest font-bold hover:border-gray-900 hover:text-gray-900 transition-colors",
                                  children: [
                                    e.jsx(Ji, { size: 14, strokeWidth: 1.5 }),
                                    "试听声音",
                                  ],
                                }),
                                ((gn = t.settings) == null
                                  ? void 0
                                  : gn.voiceId) &&
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
                                  onClick: w,
                                  className:
                                    "text-[10px] text-gray-400 underline hover:text-gray-900",
                                  children: "运行语音诊断",
                                }),
                                e.jsx("button", {
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
                                            ((sn = t.settings) == null
                                              ? void 0
                                              : sn.voiceId) || "",
                                          onChange: (Rt) => {
                                            const Es = Rt.target.value;
                                            (a(n, { voiceId: Es }),
                                              s &&
                                                r &&
                                                r(s.id, {
                                                  ttsVoiceId: Es || null,
                                                }));
                                          },
                                          className:
                                            "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 transition-colors",
                                          children: [
                                            e.jsx("option", {
                                              value: "",
                                              children: "默认声音",
                                            }),
                                            (A || []).map((Rt) =>
                                              e.jsx(
                                                "option",
                                                {
                                                  value: Rt.id,
                                                  children: Rt.name,
                                                },
                                                Rt.id,
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
                                            ((ln = t.settings) == null
                                              ? void 0
                                              : ln.modelId) || "",
                                          onChange: (Rt) =>
                                            a(n, { modelId: Rt.target.value }),
                                          className:
                                            "w-full bg-transparent border-b border-gray-200 text-sm py-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 transition-colors",
                                          children: [
                                            e.jsx("option", {
                                              value: "",
                                              children: "默认引擎",
                                            }),
                                            (k || []).map((Rt) =>
                                              e.jsx(
                                                "option",
                                                {
                                                  value: Rt.model_id,
                                                  children:
                                                    Rt.name || Rt.model_id,
                                                },
                                                Rt.model_id,
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
                                            ((rn = t.settings) == null
                                              ? void 0
                                              : rn.stability) ?? 0.5,
                                        }),
                                      ],
                                    }),
                                    e.jsx("input", {
                                      type: "range",
                                      min: "0",
                                      max: "1",
                                      step: "0.05",
                                      value:
                                        ((wt = t.settings) == null
                                          ? void 0
                                          : wt.stability) ?? 0.5,
                                      onChange: (Rt) =>
                                        a(n, {
                                          stability: parseFloat(
                                            Rt.target.value,
                                          ),
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
                                            ((xs = t.settings) == null
                                              ? void 0
                                              : xs.similarityBoost) ?? 0.75,
                                        }),
                                      ],
                                    }),
                                    e.jsx("input", {
                                      type: "range",
                                      min: "0",
                                      max: "1",
                                      step: "0.05",
                                      value:
                                        ((ot = t.settings) == null
                                          ? void 0
                                          : ot.similarityBoost) ?? 0.75,
                                      onChange: (Rt) =>
                                        a(n, {
                                          similarityBoost: parseFloat(
                                            Rt.target.value,
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
                                  onClick: async () => {
                                    var Es, nn, Hs, cn, fn, Rn, Qn, ra, _a, Ya;
                                    await b("你好，这是一个语音测试。", {
                                      voiceId:
                                        (Es = t.settings) == null
                                          ? void 0
                                          : Es.voiceId,
                                      modelId:
                                        (nn = t.settings) == null
                                          ? void 0
                                          : nn.modelId,
                                      stability:
                                        (Hs = t.settings) == null
                                          ? void 0
                                          : Hs.stability,
                                      similarityBoost:
                                        (cn = t.settings) == null
                                          ? void 0
                                          : cn.similarityBoost,
                                      style:
                                        (fn = t.settings) == null
                                          ? void 0
                                          : fn.style,
                                      useSpeakerBoost:
                                        (Rn = t.settings) == null
                                          ? void 0
                                          : Rn.useSpeakerBoost,
                                      speed:
                                        (Qn = t.settings) == null
                                          ? void 0
                                          : Qn.speed,
                                      vol:
                                        (ra = t.settings) == null
                                          ? void 0
                                          : ra.vol,
                                      pitch:
                                        (_a = t.settings) == null
                                          ? void 0
                                          : _a.pitch,
                                      groupId:
                                        (Ya = t.settings) == null
                                          ? void 0
                                          : Ya.minimaxGroupId,
                                    });
                                  },
                                  className:
                                    "px-6 py-2 bg-gray-900 text-white text-[10px] tracking-widest font-bold hover:bg-black transition-colors",
                                  children: "试听声音",
                                }),
                                e.jsx("button", {
                                  onClick: () => {
                                    var Rt;
                                    return C == null
                                      ? void 0
                                      : C(
                                          (Rt = t.settings) == null
                                            ? void 0
                                            : Rt.minimaxGroupId,
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
                                  onClick: w,
                                  className:
                                    "text-[10px] text-gray-400 underline hover:text-gray-900",
                                  children: "运行语音诊断",
                                }),
                                e.jsx("button", {
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
        variants: ol,
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
                children: "头像库",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] space-y-4",
            children: [
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between gap-6",
                    children: [
                      e.jsx("p", {
                        className:
                          "font-serif text-lg italic text-gray-800 flex-1 min-w-0 pr-2",
                        children: "允许 TA 主动更换头像",
                      }),
                      e.jsx("button", {
                        type: "button",
                        role: "switch",
                        "aria-checked": !!(
                          (st = t.settings) != null && st.allowAIChangeAvatar
                        ),
                        onClick: () => {
                          var Rt;
                          return a(n, {
                            allowAIChangeAvatar: !(
                              (Rt = t.settings) != null &&
                              Rt.allowAIChangeAvatar
                            ),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all flex-shrink-0 ${($t = t.settings) != null && $t.allowAIChangeAvatar ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (Ft = t.settings) != null && Ft.allowAIChangeAvatar
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-[10px] text-gray-400 leading-relaxed",
                    children: "开启后，TA 可在对话中主动更换自己的头像",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-t border-gray-100 pt-4",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => Te(!se),
                    className:
                      "w-full flex items-center justify-between text-left py-2 hover:bg-gray-50/50 rounded transition-colors",
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-lg italic text-gray-800",
                        children: "管理头像库",
                      }),
                      se
                        ? e.jsx(aa, {
                            size: 18,
                            className: "text-gray-400 flex-shrink-0",
                          })
                        : e.jsx(Kn, {
                            size: 18,
                            className: "text-gray-400 flex-shrink-0",
                          }),
                    ],
                  }),
                  e.jsx(Os, {
                    children:
                      se &&
                      e.jsx(We.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.2 },
                        className: "overflow-hidden",
                        children: e.jsxs("div", {
                          className: "pt-4 space-y-4",
                          children: [
                            e.jsx("input", {
                              type: "file",
                              ref: pe,
                              accept: "image/*",
                              className: "hidden",
                              onChange: $e,
                            }),
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: ke,
                                  onChange: (Rt) => W(Rt.target.value),
                                  placeholder: "图片链接",
                                  className:
                                    "flex-1 min-w-[120px] bg-gray-50 border border-gray-200 px-3 py-2 text-xs outline-none focus:border-gray-900 rounded",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: ue,
                                  onChange: (Rt) => re(Rt.target.value),
                                  placeholder: "描述（供 AI 选择）",
                                  className:
                                    "flex-1 min-w-[120px] bg-gray-50 border border-gray-200 px-3 py-2 text-xs outline-none focus:border-gray-900 rounded",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: Fe,
                                  disabled: !ke.trim(),
                                  className:
                                    "px-3 py-2 text-[10px] font-bold tracking-widest border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-50 uppercase rounded",
                                  children: "添加链接",
                                }),
                                oe &&
                                  e.jsxs("button", {
                                    type: "button",
                                    onClick: () => {
                                      var Rt;
                                      return (Rt = pe.current) == null
                                        ? void 0
                                        : Rt.click();
                                    },
                                    className:
                                      "px-3 py-2 text-[10px] font-bold tracking-widest border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 uppercase rounded flex items-center gap-1",
                                    children: [
                                      e.jsx(Eh, { size: 12 }),
                                      "上传图片",
                                    ],
                                  }),
                              ],
                            }),
                            Se.length === 0
                              ? e.jsx("p", {
                                  className: "text-xs text-gray-400 italic",
                                  children:
                                    "暂无头像，可添加链接或上传图片，上传后可点击编辑描述",
                                })
                              : e.jsx("ul", {
                                  className: "space-y-3",
                                  children: Se.map((Rt, Es) =>
                                    e.jsxs(
                                      "li",
                                      {
                                        className:
                                          "flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 group/item",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200",
                                            children: Rt.url
                                              ? e.jsx("img", {
                                                  src: Rt.url,
                                                  alt: "",
                                                  className:
                                                    "w-full h-full object-cover",
                                                })
                                              : e.jsx("div", {
                                                  className:
                                                    "w-full h-full flex items-center justify-center text-gray-400",
                                                  children: e.jsx(Za, {
                                                    size: 18,
                                                  }),
                                                }),
                                          }),
                                          e.jsx("div", {
                                            className: "flex-1 min-w-0",
                                            children:
                                              he === Rt.id
                                                ? e.jsxs("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                      e.jsx("input", {
                                                        type: "text",
                                                        value: J,
                                                        onChange: (nn) =>
                                                          G(nn.target.value),
                                                        placeholder:
                                                          "填写描述（供 AI 选择时参考）",
                                                        className:
                                                          "w-full bg-white border border-gray-300 px-2 py-1.5 text-xs rounded outline-none focus:border-gray-900",
                                                        autoFocus: !0,
                                                      }),
                                                      e.jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: Xe,
                                                            className:
                                                              "text-[10px] text-gray-600 hover:text-gray-900 font-medium",
                                                            children: "保存",
                                                          }),
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: () => {
                                                              (ge(null), G(""));
                                                            },
                                                            className:
                                                              "text-[10px] text-gray-400 hover:text-gray-600",
                                                            children: "取消",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsx("p", {
                                                        className:
                                                          "text-xs text-gray-700 truncate",
                                                        children:
                                                          (
                                                            Rt.desc ||
                                                            Rt.description ||
                                                            ""
                                                          ).trim() ||
                                                          "（未填写描述，点击可补充）",
                                                      }),
                                                      e.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-2 mt-0.5 flex-nowrap min-w-0",
                                                        children: [
                                                          e.jsxs("p", {
                                                            className:
                                                              "text-[10px] text-gray-400 font-mono truncate min-w-0",
                                                            children: [
                                                              "id: ",
                                                              Rt.id,
                                                            ],
                                                          }),
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: () =>
                                                              tt(Rt),
                                                            className:
                                                              "text-[10px] text-gray-500 hover:text-gray-800 whitespace-nowrap flex-shrink-0",
                                                            children:
                                                              "编辑描述",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-1 flex-shrink-0",
                                            children: [
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () => Pe(Rt),
                                                className:
                                                  "p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded opacity-0 group-hover/item:opacity-100 transition-opacity",
                                                title: "设为当前头像",
                                                children: e.jsx(On, {
                                                  size: 14,
                                                }),
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () => ht(Es),
                                                className:
                                                  "p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded",
                                                title: "删除",
                                                children: e.jsx(_n, {
                                                  size: 14,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      Rt.id,
                                    ),
                                  ),
                                }),
                          ],
                        }),
                      }),
                  }),
                  e.jsxs("div", {
                    className: "border-t border-gray-100 pt-4 mt-4",
                    children: [
                      e.jsxs("button", {
                        type: "button",
                        onClick: () => Ee(!_t),
                        className:
                          "w-full flex items-center justify-between text-left py-2 hover:bg-gray-50/50 rounded transition-colors",
                        children: [
                          e.jsx("p", {
                            className:
                              "font-serif text-lg italic text-gray-800",
                            children: "情侣头像对",
                          }),
                          _t
                            ? e.jsx(aa, {
                                size: 18,
                                className: "text-gray-400 flex-shrink-0",
                              })
                            : e.jsx(Kn, {
                                size: 18,
                                className: "text-gray-400 flex-shrink-0",
                              }),
                        ],
                      }),
                      e.jsx(Os, {
                        children:
                          _t &&
                          e.jsx(We.div, {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            transition: { duration: 0.2 },
                            className: "overflow-hidden",
                            children: e.jsxs("div", {
                              className: "pt-4 space-y-4",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-gray-400 leading-relaxed",
                                  children:
                                    "每对包含「TA 的头像」与「你的头像」；名称用于区分，描述与标签供 AI 匹配用户说的「想换粉色的」等。左：TA | 右：你",
                                }),
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx("input", {
                                      type: "text",
                                      value: fe,
                                      onChange: (Rt) => He(Rt.target.value),
                                      placeholder: "名称（如：情头A、粉猫款）",
                                      className:
                                        "w-full bg-gray-50 border border-gray-200 px-3 py-2 text-xs rounded outline-none focus:border-gray-900",
                                    }),
                                    e.jsx("input", {
                                      type: "text",
                                      value: Ie,
                                      onChange: (Rt) => Ce(Rt.target.value),
                                      placeholder:
                                        "描述（如：粉色的猫猫，供匹配）",
                                      className:
                                        "w-full bg-gray-50 border border-gray-200 px-3 py-2 text-xs rounded outline-none focus:border-gray-900",
                                    }),
                                    e.jsx("input", {
                                      type: "text",
                                      value: Re,
                                      onChange: (Rt) => De(Rt.target.value),
                                      placeholder:
                                        "标签，逗号分隔（如：粉色,猫,可爱）",
                                      className:
                                        "w-full bg-gray-50 border border-gray-200 px-3 py-2 text-xs rounded outline-none focus:border-gray-900",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex gap-2 flex-wrap",
                                      children: [
                                        e.jsx("input", {
                                          type: "text",
                                          value: at,
                                          onChange: (Rt) => ft(Rt.target.value),
                                          placeholder: "TA 头像链接",
                                          className:
                                            "flex-1 min-w-[100px] bg-gray-50 border border-gray-200 px-2 py-1.5 text-xs rounded",
                                        }),
                                        e.jsx("input", {
                                          type: "text",
                                          value: vt,
                                          onChange: (Rt) => Oe(Rt.target.value),
                                          placeholder: "你的头像链接",
                                          className:
                                            "flex-1 min-w-[100px] bg-gray-50 border border-gray-200 px-2 py-1.5 text-xs rounded",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex gap-2 flex-wrap",
                                      children: [
                                        oe &&
                                          e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx("input", {
                                                type: "file",
                                                ref: Ze,
                                                accept: "image/*",
                                                className: "hidden",
                                                onChange: (Rt) => jt("ai", Rt),
                                              }),
                                              e.jsx("input", {
                                                type: "file",
                                                ref: Ue,
                                                accept: "image/*",
                                                className: "hidden",
                                                onChange: (Rt) =>
                                                  jt("user", Rt),
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                  var Rt;
                                                  return (Rt = Ze.current) ==
                                                    null
                                                    ? void 0
                                                    : Rt.click();
                                                },
                                                className:
                                                  "px-2 py-1.5 text-[10px] border border-gray-300 text-gray-600 rounded",
                                                children: "TA 头像上传",
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () => {
                                                  var Rt;
                                                  return (Rt = Ue.current) ==
                                                    null
                                                    ? void 0
                                                    : Rt.click();
                                                },
                                                className:
                                                  "px-2 py-1.5 text-[10px] border border-gray-300 text-gray-600 rounded",
                                                children: "我的头像上传",
                                              }),
                                            ],
                                          }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: me,
                                          disabled:
                                            !fe.trim() ||
                                            !at.trim() ||
                                            !vt.trim(),
                                          className:
                                            "px-3 py-1.5 text-[10px] font-bold tracking-widest border border-gray-300 text-gray-600 hover:border-gray-900 disabled:opacity-50 rounded uppercase",
                                          children: "添加一对",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                ut.length === 0
                                  ? e.jsx("p", {
                                      className: "text-xs text-gray-400 italic",
                                      children: "暂无情侣头像对",
                                    })
                                  : e.jsx("ul", {
                                      className: "space-y-3",
                                      children: ut.map((Rt, Es) =>
                                        e.jsxs(
                                          "li",
                                          {
                                            className:
                                              "flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex gap-1 flex-shrink-0",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-10 h-10 rounded-lg overflow-hidden bg-gray-200",
                                                    title: "TA",
                                                    children: Rt.aiAvatar
                                                      ? e.jsx("img", {
                                                          src: Rt.aiAvatar,
                                                          alt: "TA",
                                                          className:
                                                            "w-full h-full object-cover",
                                                        })
                                                      : e.jsx("div", {
                                                          className:
                                                            "w-full h-full flex items-center justify-center text-gray-400 text-[8px]",
                                                          children: "TA",
                                                        }),
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "w-10 h-10 rounded-lg overflow-hidden bg-gray-200",
                                                    title: "你",
                                                    children: Rt.userAvatar
                                                      ? e.jsx("img", {
                                                          src: Rt.userAvatar,
                                                          alt: "你",
                                                          className:
                                                            "w-full h-full object-cover",
                                                        })
                                                      : e.jsx("div", {
                                                          className:
                                                            "w-full h-full flex items-center justify-center text-gray-400 text-[8px]",
                                                          children: "你",
                                                        }),
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  e.jsx("p", {
                                                    className:
                                                      "text-xs font-medium text-gray-800 truncate",
                                                    children: Rt.name,
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-[10px] text-gray-500 truncate",
                                                    children:
                                                      [
                                                        Rt.desc,
                                                        ...(Rt.tags || []),
                                                      ]
                                                        .filter(Boolean)
                                                        .join(" · ") || "—",
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 flex-shrink-0",
                                                children: [
                                                  e.jsx("button", {
                                                    type: "button",
                                                    onClick: () => Pt(Rt),
                                                    className:
                                                      "px-2 py-1 text-[10px] border border-gray-300 text-gray-600 hover:border-gray-900 rounded",
                                                    children: "在聊天中申请",
                                                  }),
                                                  e.jsx("button", {
                                                    type: "button",
                                                    onClick: () => Gt(Es),
                                                    className:
                                                      "p-1.5 text-gray-400 hover:text-red-500 rounded",
                                                    title: "删除",
                                                    children: e.jsx(_n, {
                                                      size: 14,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          Rt.id,
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
            ],
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: ol,
        initial: !1,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: "04",
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "爱心回复",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "bg-white p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)]",
            children: [
              e.jsx("p", {
                className: "text-[10px] text-gray-400 leading-relaxed mb-1",
                children: "点爱心 / 重 roll 时写入心声与草稿箱",
              }),
              e.jsx("p", {
                className: "text-[10px] text-red-500 leading-relaxed mb-4",
                children:
                  "与双语翻译不适配：开启后偶尔会掉格式等问题，不建议双语角色开启，能接受再开。",
              }),
              e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4",
                children: [
                  e.jsxs("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsx("p", {
                        id: "settings-heart-voice-label",
                        className: "font-serif text-lg italic text-gray-800",
                        children: "心声写入",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children: "角色内心独白（心语），不在气泡里展示",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": !!(
                      (es = t.settings) != null && es.enableHeartVoice
                    ),
                    "aria-labelledby": "settings-heart-voice-label",
                    disabled: ee,
                    onClick: () => {
                      var Rt;
                      ee ||
                        a(n, {
                          enableHeartVoice: !(
                            (Rt = t.settings) != null && Rt.enableHeartVoice
                          ),
                        });
                    },
                    className: `shrink-0 text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ee ? "opacity-40 cursor-not-allowed border-gray-100 text-gray-300" : (At = t.settings) != null && At.enableHeartVoice ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400 hover:border-gray-400"}`,
                    children:
                      (Jt = t.settings) != null && Jt.enableHeartVoice
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "pt-4 border-t border-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
                children: [
                  e.jsxs("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsx("p", {
                        id: "settings-drafts-label",
                        className: "font-serif text-lg italic text-gray-800",
                        children: "草稿箱写入",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children: "资料卡 · 归档页「思绪」草稿",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": !!(
                      (Vt = t.settings) != null && Vt.enableDrafts
                    ),
                    "aria-labelledby": "settings-drafts-label",
                    disabled: ee,
                    onClick: () => {
                      var Rt;
                      ee ||
                        a(n, {
                          enableDrafts: !(
                            (Rt = t.settings) != null && Rt.enableDrafts
                          ),
                        });
                    },
                    className: `shrink-0 text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ee ? "opacity-40 cursor-not-allowed border-gray-100 text-gray-300" : (qt = t.settings) != null && qt.enableDrafts ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400 hover:border-gray-400"}`,
                    children:
                      (Lt = t.settings) != null && Lt.enableDrafts
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: ol,
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
                      e.jsxs("p", {
                        className:
                          "font-serif text-lg italic text-gray-800 flex items-center gap-2",
                        children: [
                          e.jsx(V0, {
                            size: 18,
                            className: U ? "text-red-500" : "text-gray-300",
                            strokeWidth: 1.5,
                          }),
                          "拉黑角色",
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children:
                          "拉黑后：聊天页会提示已拉黑、左侧接收按钮禁用；角色回复会意识到已被拉黑",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: fs,
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${U ? "border-red-500 bg-red-500 text-white" : "border-gray-200 text-gray-400 hover:border-gray-400"}`,
                    children: U ? "解除拉黑" : "拉黑",
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
                        children: "查岗（聊天记录卡片）",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children:
                          "开启后，角色才可能查岗并转发你与别人的聊天记录",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    disabled: ee,
                    onClick: () => {
                      var Rt;
                      ee ||
                        a(n, {
                          enableCheckUp: !(
                            (Rt = t.settings) != null && Rt.enableCheckUp
                          ),
                        });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ee ? "opacity-40 cursor-not-allowed border-gray-100 text-gray-300" : (Qt = t.settings) != null && Qt.enableCheckUp ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (js = t.settings) != null && js.enableCheckUp
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
                        children: "实时翻译",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children: "跨越语言的障碍",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    disabled: ee,
                    onClick: () => {
                      var Rt;
                      ee ||
                        a(n, {
                          translationEnabled: !(
                            (Rt = t.settings) != null && Rt.translationEnabled
                          ),
                        });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ee ? "opacity-40 cursor-not-allowed border-gray-100 text-gray-300" : (cs = t.settings) != null && cs.translationEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (Ne = t.settings) != null && Ne.translationEnabled
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              ((Je = t.settings) == null ? void 0 : Je.translationEnabled) &&
                e.jsxs("div", {
                  className:
                    "p-6 flex items-center justify-between border-b border-gray-50",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "font-serif text-lg italic text-gray-800",
                          children: "译文常显",
                        }),
                        e.jsx("p", {
                          className: "text-[10px] text-gray-400 mt-1",
                          children: "开启后，译文将自动显示，不再需要翻译按钮",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: () => {
                        var Rt;
                        return a(n, {
                          translationAlwaysShow: !(
                            (Rt = t.settings) != null &&
                            Rt.translationAlwaysShow
                          ),
                        });
                      },
                      className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(St = t.settings) != null && St.translationAlwaysShow ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                      children:
                        (Be = t.settings) != null && Be.translationAlwaysShow
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
                        children: "结构化回复（实验）",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children:
                          "使用 JSON 协议减少掉格式；异常会自动回退旧链路",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    disabled: ee,
                    onClick: () => {
                      var Rt;
                      ee ||
                        a(n, {
                          structuredReplyEnabled: !(
                            (Rt = t.settings) != null &&
                            Rt.structuredReplyEnabled
                          ),
                        });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ee ? "opacity-40 cursor-not-allowed border-gray-100 text-gray-300" : (Ke = t.settings) != null && Ke.structuredReplyEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (Nt = t.settings) != null && Nt.structuredReplyEnabled
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
                      var Rt;
                      return a(n, {
                        insBubble: !((Rt = t.settings) != null && Rt.insBubble),
                      });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(bt = t.settings) != null && bt.insBubble ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (ns = t.settings) != null && ns.insBubble
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
                          var Rt;
                          return a(n, {
                            autoMessageEnabled: !(
                              (Rt = t.settings) != null && Rt.autoMessageEnabled
                            ),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(Ge = t.settings) != null && Ge.autoMessageEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (Le = t.settings) != null && Le.autoMessageEnabled
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  ((_e = t.settings) == null
                    ? void 0
                    : _e.autoMessageEnabled) &&
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
                                ((yt = t.settings) == null
                                  ? void 0
                                  : yt.autoMessageInterval) || 30,
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
                                ((rt = t.settings) == null
                                  ? void 0
                                  : rt.autoMessageInterval) ?? "",
                              onChange: (Rt) => {
                                const Es = Rt.target.value;
                                if (Es === "") {
                                  a(n, { autoMessageInterval: "" });
                                  return;
                                }
                                const nn = parseInt(Es, 10);
                                Number.isFinite(nn) &&
                                  nn > 0 &&
                                  a(n, { autoMessageInterval: nn });
                              },
                              onBlur: (Rt) => {
                                Rt.target.value === "" &&
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
                            children: "主动更新行程",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children: "角色后台按间隔自动更新今日行踪",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          var Rt;
                          return a(n, {
                            autoTraceEnabled: !(
                              (Rt = t.settings) != null && Rt.autoTraceEnabled
                            ),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(ze = t.settings) != null && ze.autoTraceEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (lt = t.settings) != null && lt.autoTraceEnabled
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  ((it = t.settings) == null ? void 0 : it.autoTraceEnabled) &&
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
                              children: "更新间隔",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[10px] font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded-md",
                              children: [
                                ((Ht = t.settings) == null
                                  ? void 0
                                  : Ht.autoTraceIntervalHours) ?? 2,
                                " 小时",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "flex gap-2 flex-wrap",
                          children: [1, 2, 3, 4, 5].map((Rt) => {
                            var Es;
                            return e.jsxs(
                              "button",
                              {
                                onClick: () =>
                                  a(n, { autoTraceIntervalHours: Rt }),
                                className: `text-[10px] font-bold tracking-widest border px-3 py-1.5 rounded-md transition-all ${(((Es = t.settings) == null ? void 0 : Es.autoTraceIntervalHours) ?? 2) === Rt ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400 hover:border-gray-400"}`,
                                children: [Rt, " 小时"],
                              },
                              Rt,
                            );
                          }),
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-gray-400 mt-2 leading-relaxed",
                          children:
                            "到达间隔后自动生成/续写今日行踪，可能有突发情况；更新后会收到提醒，点击可跳转查看。",
                        }),
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className: "p-6",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "font-serif text-lg italic text-gray-800",
                          children: "主动发朋友圈",
                        }),
                        e.jsx("p", {
                          className: "text-[10px] text-gray-400 mt-1",
                          children:
                            "根据角色人设与时间流速，由 API 决定发圈概率并自动发布",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: () => {
                        var Rt;
                        return a(n, {
                          autoMomentEnabled: !(
                            (Rt = t.settings) != null && Rt.autoMomentEnabled
                          ),
                        });
                      },
                      className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(is = t.settings) != null && is.autoMomentEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                      children:
                        (os = t.settings) != null && os.autoMomentEnabled
                          ? "已开启"
                          : "未开启",
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "p-6 border-t border-gray-50",
                children: [
                  e.jsx("div", {
                    className:
                      "mb-4 p-3 bg-gray-50 border border-gray-200 rounded-sm",
                    children: e.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        e.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            e.jsx("p", {
                              className: "text-xs font-semibold text-gray-800",
                              children: "长句模式",
                            }),
                            e.jsxs("p", {
                              className:
                                "mt-1.5 text-[8px] leading-relaxed text-gray-400",
                              children: [
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children: "【测试功能】",
                                }),
                                "打开后",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children: "不发送转账、表情包、图片等",
                                }),
                                "，",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children:
                                    "与实时翻译、心声与草稿箱、语音、查岗等互斥",
                                }),
                                "。开启后",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children: "偶尔会掉格式",
                                }),
                                "；",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children:
                                    "三选一类能力是否出现由模型输出决定",
                                }),
                                "。",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children:
                                    "关闭后若再开心声、草稿箱，可能因读取上下文导致生成失败",
                                }),
                                "；",
                                e.jsx("span", {
                                  className: "text-red-500",
                                  children:
                                    "建议专门用一个档聊长句模式，能接受再开",
                                }),
                                "。",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            var Es;
                            !(
                              (Es = t.settings) != null &&
                              Es.singleLongSentenceMode
                            )
                              ? a(n, {
                                  singleLongSentenceMode: !0,
                                  translationEnabled: !1,
                                  translationAlwaysShow: !1,
                                  enableHeartVoice: !1,
                                  enableDrafts: !1,
                                  enableTTS: !1,
                                  enableCheckUp: !1,
                                })
                              : a(n, { singleLongSentenceMode: !1 });
                          },
                          className: `shrink-0 text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(as = t.settings) != null && as.singleLongSentenceMode ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                          children:
                            (vs = t.settings) != null &&
                            vs.singleLongSentenceMode
                              ? "已开启"
                              : "未开启",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "font-serif text-lg italic text-gray-800",
                            children: "自定义提示词",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children:
                              "添加额外的系统指令，将附加在默认提示词之后",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          var Rt;
                          return a(n, {
                            customPromptEnabled: !(
                              (Rt = t.settings) != null &&
                              Rt.customPromptEnabled
                            ),
                          });
                        },
                        className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(ts = t.settings) != null && ts.customPromptEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                        children:
                          (ys = t.settings) != null && ys.customPromptEnabled
                            ? "已开启"
                            : "未开启",
                      }),
                    ],
                  }),
                  ((Vs = t.settings) == null
                    ? void 0
                    : Vs.customPromptEnabled) &&
                    e.jsxs("div", {
                      className: "animate-in slide-in-from-top-2 fade-in",
                      children: [
                        e.jsx("textarea", {
                          value:
                            ((pt = t.settings) == null
                              ? void 0
                              : pt.customPrompt) || "",
                          onChange: (Rt) =>
                            a(n, { customPrompt: Rt.target.value }),
                          placeholder:
                            "例如：请始终使用敬语；或者：你现在是一个傲娇的猫娘...",
                          className:
                            "w-full h-32 bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 outline-none focus:border-gray-900 transition-colors resize-none rounded-sm font-mono",
                        }),
                        e.jsxs("div", {
                          className: "mt-3 space-y-2",
                          children: [
                            e.jsx("p", {
                              className: "text-[10px] text-gray-400",
                              children: "本地预设（IndexedDB，可存多套）",
                            }),
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-2 items-center",
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: we,
                                  onChange: (Rt) => Q(Rt.target.value),
                                  placeholder: "保存前输入名称",
                                  className:
                                    "flex-1 min-w-[140px] bg-gray-50 border border-gray-200 px-3 py-2 text-xs outline-none focus:border-gray-900 rounded-sm",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: Wt,
                                  disabled: !we.trim(),
                                  className:
                                    "px-3 py-2 text-[10px] font-bold tracking-widest border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-50 uppercase",
                                  children: "保存预设",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-2 items-center",
                              children: [
                                e.jsxs("div", {
                                  className: "relative flex-1 min-w-[140px]",
                                  children: [
                                    e.jsxs("select", {
                                      value: ve,
                                      onChange: ct,
                                      className:
                                        "w-full bg-gray-50 border border-gray-200 px-3 py-2 text-xs outline-none focus:border-gray-900 rounded-sm appearance-none cursor-pointer hover:border-gray-900 transition-colors pr-8",
                                      children: [
                                        e.jsx("option", {
                                          value: "",
                                          children: "选择已存预设…",
                                        }),
                                        Ae.map((Rt) =>
                                          e.jsx(
                                            "option",
                                            { value: Rt.id, children: Rt.name },
                                            Rt.id,
                                          ),
                                        ),
                                      ],
                                    }),
                                    e.jsx(aa, {
                                      size: 14,
                                      className:
                                        "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                    }),
                                  ],
                                }),
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: Kt,
                                  disabled: !ve,
                                  className:
                                    "inline-flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold tracking-widest border border-gray-300 text-gray-600 hover:border-red-400 hover:text-red-600 disabled:opacity-50 uppercase",
                                  children: [
                                    e.jsx(_n, { size: 14, strokeWidth: 1.5 }),
                                    "删除",
                                  ],
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
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: ol,
        className: "space-y-6 hidden",
        "aria-hidden": !0,
        children: [
          e.jsxs("div", {
            className: "flex items-end gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200 leading-none",
                children: "06",
              }),
              e.jsx("h3", {
                className:
                  "text-xl font-serif italic text-gray-900 leading-tight",
                children: "Novel 生图",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-xl italic text-gray-800",
                        children: "连接 Novel",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1",
                        children:
                          "启用后可在需要生图时使用 Novel 模型，每个角色独立配置",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      var Rt;
                      return a(n, {
                        enableNovel: !(
                          (Rt = t.settings) != null && Rt.enableNovel
                        ),
                      });
                    },
                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(qe = t.settings) != null && qe.enableNovel ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                    children:
                      (dt = t.settings) != null && dt.enableNovel
                        ? "已开启"
                        : "未开启",
                  }),
                ],
              }),
              ((xt = t.settings) == null ? void 0 : xt.enableNovel) &&
                e.jsxs("div", {
                  className:
                    "space-y-6 animate-in slide-in-from-top-2 fade-in border-t border-gray-100 pt-6",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                          children: "风景图提示词（无人脸）",
                        }),
                        e.jsx("textarea", {
                          value:
                            ((zt = t.settings) == null
                              ? void 0
                              : zt.novelLandscapePrompt) || "",
                          onChange: (Rt) =>
                            a(n, { novelLandscapePrompt: Rt.target.value }),
                          placeholder:
                            "例如：夕阳下的海边、森林小路、城市天际线...",
                          className:
                            "w-full h-20 bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 outline-none focus:border-gray-900 transition-colors resize-none rounded-sm font-mono",
                        }),
                        e.jsx("label", {
                          className: