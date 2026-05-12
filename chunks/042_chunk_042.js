                            "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mt-3 mb-2",
                          children: "风景图负面提示词（无人脸）",
                        }),
                        e.jsx("textarea", {
                          value:
                            ((ms = t.settings) == null
                              ? void 0
                              : ms.novelLandscapeNegativePrompt) || "",
                          onChange: (Rt) =>
                            a(n, {
                              novelLandscapeNegativePrompt: Rt.target.value,
                            }),
                          placeholder: "例如：person, face, human, portrait...",
                          className:
                            "w-full h-16 bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 outline-none focus:border-gray-900 transition-colors resize-none rounded-sm font-mono",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                          children: "人脸提示词",
                        }),
                        e.jsx("textarea", {
                          value:
                            ((Cs = t.settings) == null
                              ? void 0
                              : Cs.novelFacePrompt) || "",
                          onChange: (Rt) =>
                            a(n, { novelFacePrompt: Rt.target.value }),
                          placeholder:
                            "例如：角色形象描述，将结合下方角色照片用于生图...",
                          className:
                            "w-full h-20 bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 outline-none focus:border-gray-900 transition-colors resize-none rounded-sm font-mono",
                        }),
                        e.jsx("label", {
                          className:
                            "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mt-3 mb-2",
                          children: "人脸负面提示词（有人脸）",
                        }),
                        e.jsx("textarea", {
                          value:
                            ((us = t.settings) == null
                              ? void 0
                              : us.novelFaceNegativePrompt) || "",
                          onChange: (Rt) =>
                            a(n, { novelFaceNegativePrompt: Rt.target.value }),
                          placeholder: "例如：多张脸、双人、重复人脸...",
                          className:
                            "w-full h-16 bg-gray-50 border border-gray-200 p-3 text-xs text-gray-700 outline-none focus:border-gray-900 transition-colors resize-none rounded-sm font-mono",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2",
                          children: "角色照片",
                        }),
                        e.jsx("p", {
                          className: "text-[10px] text-gray-400 mb-2",
                          children:
                            "上传角色参考照片，生图时将按此照片的人脸生成",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: () => {
                                var Rt;
                                return (Rt = M == null ? void 0 : M.current) ==
                                  null
                                  ? void 0
                                  : Rt.click();
                              },
                              className:
                                "px-4 py-2 border border-gray-200 text-[10px] font-bold tracking-widest text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors",
                              children: "上传照片",
                            }),
                            ((Rs = t.settings) == null
                              ? void 0
                              : Rs.novelCharacterPhoto) &&
                              e.jsxs("div", {
                                className: "relative flex-shrink-0",
                                children: [
                                  e.jsx("img", {
                                    src: t.settings.novelCharacterPhoto,
                                    alt: "角色参考",
                                    className:
                                      "w-16 h-16 object-cover rounded-lg border border-gray-200",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () =>
                                      a(n, { novelCharacterPhoto: null }),
                                    className:
                                      "absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600",
                                    children: "×",
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
      e.jsx(Xv, {
        sectionNumber: "07",
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
                children: "08",
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
                  onClick: () => (xe == null ? void 0 : xe(!0)),
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
        variants: ol,
        className: "pt-8 border-t border-gray-200",
        children: e.jsx("button", {
          onClick: () => (je == null ? void 0 : je(!0)),
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
const bY = ({
    show: t,
    onClose: s,
    contact: n,
    contacts: a = [],
    sendMessage: r,
    triggerAiReply: i,
    avatarInputRef: o,
    showCSSEditor: c,
    setShowCSSEditor: d,
    presets: u,
    activePresetId: f,
    setActivePresetId: p,
    handleDeletePreset: m,
    editingCSS: h,
    setEditingCSS: g,
    handleUpdatePreset: x,
    newPresetName: y,
    setNewPresetName: v,
    handleSavePreset: b,
    setPresets: N,
    chat: w,
    updateChatSettings: _,
    currentUserName: A,
    handleTestTime: k,
    isTestingTime: C,
    timeTestResult: M,
    handleTestWeather: E,
    isTestingWeather: S,
    weatherTestResult: j,
    voices: T,
    models: I,
    selectedModel: L,
    isFetchingVoices: B,
    fetchVoices: F,
    playTTS: D,
    setShowTtsLogs: $,
    fileInputRef: P,
    novelCharacterPhotoInputRef: z,
    setShowMemories: O,
    setShowGroupMemories: Z,
    setShowCallHistory: K,
    setShowClearConfirm: q,
    chatId: V,
    updateContact: ne,
    ttsConfig: le,
    startVideoCall: ie,
    memeCategories: X = [],
    handleAddMembersToGroup: je,
    handleRemoveMembersFromGroup: xe,
    handleLeaveGroup: ye,
    handleDismissGroup: R,
    handleDeleteGroupChat: oe,
    compressImage: ee,
    setShowHistorySearch: H,
  }) => {
    var Ae;
    const [Y, U] = l.useState(""),
      [ce, pe] = l.useState(null),
      [se, Te] = l.useState(!1),
      [ke, W] = l.useState(!1),
      ue = l.useRef(null),
      re = l.useRef(null),
      { reduceMotion: he } = Yu();
    l.useEffect(() => {
      if (!ke) return;
      const te = (Se) => {
        re.current && !re.current.contains(Se.target) && W(!1);
      };
      return (
        document.addEventListener("click", te),
        () => document.removeEventListener("click", te)
      );
    }, [ke]);
    const ge = Ap(w == null ? void 0 : w.messages);
    l.useEffect(() => {
      var te;
      t && w && U(((te = w.settings) == null ? void 0 : te.voiceId) ?? "");
    }, [
      t,
      w == null ? void 0 : w.id,
      (Ae = w == null ? void 0 : w.settings) == null ? void 0 : Ae.voiceId,
    ]);
    const J = (te) => {
        const Se = u.find((ht) => ht.id === te);
        if (!Se) return;
        const Fe = { name: Se.name, css: Se.css },
          $e = new Blob([JSON.stringify(Fe, null, 2)], {
            type: "application/json",
          }),
          tt = URL.createObjectURL($e),
          Xe = document.createElement("a");
        ((Xe.href = tt),
          (Xe.download = `${Se.name}.json`),
          document.body.appendChild(Xe),
          Xe.click(),
          document.body.removeChild(Xe),
          URL.revokeObjectURL(tt));
      },
      G = async (te) => {
        const Se = u.find((Fe) => Fe.id === te);
        if (Se != null && Se.css)
          try {
            (await navigator.clipboard.writeText(Se.css),
              pe(te),
              setTimeout(() => pe(null), 2e3));
          } catch {}
      },
      we = (te) => {
        const Se = u.find((Fe) => Fe.id === te);
        Se &&
          window.confirm(
            `确定要删除美化预设「${Se.name}」吗？删除后无法恢复。`,
          ) &&
          m(te);
      },
      Q = (te) => {
        const Se = te.target.files[0];
        if (!Se) return;
        const Fe = new FileReader();
        ((Fe.onload = ($e) => {
          try {
            const tt = JSON.parse($e.target.result);
            if (tt.name && tt.css) {
              const Xe = {
                id: Date.now().toString(),
                name: tt.name,
                css: tt.css,
              };
              (N((ht) => [...ht, Xe]), p(Xe.id));
            } else alert("导入失败：文件格式不正确。");
          } catch {
            alert("导入失败：无法解析文件。");
          }
        }),
          Fe.readAsText(Se),
          (te.target.value = null));
      },
      ve = async () => {
        var Fe, $e, tt, Xe, ht, Pe;
        const te = [],
          Se = (ut) => {
            te.push(ut);
          };
        try {
          (Se(`用户代理: ${navigator.userAgent}`),
            Se(`时间: ${new Date().toISOString()}`),
            Se(`平台: ${navigator.platform}`),
            typeof window.Audio < "u"
              ? Se("Audio API: 支持")
              : Se("Audio API: 不支持"),
            typeof window.AudioContext < "u" ||
            typeof window.webkitAudioContext < "u"
              ? Se("AudioContext: 支持")
              : Se("AudioContext: 不支持"));
          try {
            Se("正在尝试静音播放...");
            const Ee = new Audio();
            ((Ee.src =
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
              await Ee.play(),
              Se("静音播放: 成功"));
          } catch (Ee) {
            Se(`静音播放失败: ${Ee.name}: ${Ee.message}`);
          }
          (Se(`服务商: ${le == null ? void 0 : le.provider}`),
            (le == null ? void 0 : le.provider) === "minimax"
              ? (Se(
                  `GroupId 已配置: ${!!((Fe = le.minimax) != null && Fe.groupId)}`,
                ),
                Se(
                  `ApiKey 已配置: ${!!(($e = le.minimax) != null && $e.apiKey)}`,
                ),
                Se(
                  `VoiceId: ${((tt = w.settings) == null ? void 0 : tt.voiceId) || "默认"}`,
                ))
              : (le == null ? void 0 : le.provider) === "elevenlabs" &&
                (Se(
                  `ApiKey 已配置: ${!!((Xe = le.elevenlabs) != null && Xe.key)}`,
                ),
                Se(
                  `VoiceId: ${((ht = w.settings) == null ? void 0 : ht.voiceId) || "默认"}`,
                )),
            Se("正在测试 TTS API 连接 (仅获取 URL)..."));
          const _t = await D("测试", {
            voiceId: (Pe = w.settings) == null ? void 0 : Pe.voiceId,
            onlyGetUrl: !0,
            ...w.settings,
          });
          Se(
            _t
              ? `TTS API 成功: 已获取 URL (长度: ${_t.length})`
              : "TTS API 失败: 未返回 URL",
          );
        } catch (ut) {
          Se(`诊断错误: ${ut.message}
${ut.stack}`);
        }
        alert(
          `诊断完成，请查看控制台日志。

` +
            te.slice(0, 4).join(`
`) +
            `
...`,
        );
      };
    if (!t) return null;
    const Ve = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: he ? 0 : 0.4, ease: "easeOut" },
      },
      exit: { opacity: 0, transition: { duration: he ? 0 : 0.3 } },
    };
    return e.jsxs(We.div, {
      className:
        "chat-settings-modal absolute inset-0 z-50 bg-[#FDFBF7] flex flex-col overflow-hidden",
      variants: Ve,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      children: [
        e.jsx("input", {
          type: "file",
          ref: ue,
          className: "hidden",
          accept: ".json",
          onChange: Q,
        }),
        e.jsxs("div", {
          className:
            "chat-settings-header px-6 pt-14 pb-6 flex justify-between items-end border-b border-gray-900/10 bg-[#FDFBF7]/90 backdrop-blur-sm sticky top-0 z-20",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className:
                    "text-[10px] font-serif tracking-[0.2em] text-gray-400 uppercase mb-1",
                  children: "档案记录 • 卷一",
                }),
                e.jsx("h1", {
                  className: "text-3xl font-serif text-gray-900 italic",
                  children: "设置",
                }),
              ],
            }),
            e.jsx("button", {
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
          className: "chat-settings-body flex-1 overflow-y-auto no-scrollbar",
          children: e.jsx("div", {
            className: "chat-settings-content p-6 space-y-12 pb-20",
            children: w.isGroup
              ? e.jsx(uY, {
                  chat: w,
                  contact: n,
                  contacts: a,
                  chatId: V,
                  updateChatSettings: _,
                  avatarInputRef: o,
                  fileInputRef: P,
                  sendMessage: r,
                  currentUserName: A,
                  compressImage: ee,
                  onMuteApplied: (te, Se, Fe) =>
                    r == null
                      ? void 0
                      : r(
                          te,
                          `[系统提示：${Se} 已被禁言 ${Fe} 分钟]`,
                          null,
                          "system",
                        ),
                  onUnmuteApplied: (te, Se) =>
                    r == null
                      ? void 0
                      : r(
                          te,
                          `[系统提示：${Se} 已解除禁言（此前被禁言）]`,
                          null,
                          "system",
                        ),
                  handleAddMembersToGroup: je,
                  handleRemoveMembersFromGroup: xe,
                  handleLeaveGroup: ye,
                  handleDismissGroup: R,
                  handleDeleteGroupChat: oe,
                  onClose: s,
                  setShowMemories: O,
                  setShowGroupMemories: Z,
                  setShowCallHistory: K,
                  currentTurns: ge,
                  memeCategories: X,
                  handleTestTime: k,
                  handleTestWeather: E,
                  timeTestResult: M,
                  weatherTestResult: j,
                  isTestingTime: C,
                  isTestingWeather: S,
                  showCSSEditor: c,
                  setShowCSSEditor: d,
                  showAllPresets: se,
                  setShowAllPresets: Te,
                  activePresetId: f,
                  setActivePresetId: p,
                  presets: u,
                  copiedPresetId: ce,
                  handleCopyPresetCss: G,
                  handleExportPreset: J,
                  handleDeletePresetWithConfirm: we,
                  cssImportRef: ue,
                  presetPickerOpen: ke,
                  setPresetPickerOpen: W,
                  presetPickerRef: re,
                  editingCSS: h,
                  setEditingCSS: g,
                  handleUpdatePreset: x,
                  newPresetName: y,
                  setNewPresetName: v,
                  handleSavePreset: b,
                  setShowClearConfirm: q,
                  setShowHistorySearch: H,
                })
              : e.jsx(gY, {
                  chat: w,
                  contact: n,
                  chatId: V,
                  updateChatSettings: _,
                  updateContact: ne,
                  avatarInputRef: o,
                  fileInputRef: P,
                  onClose: s,
                  sendMessage: r,
                  triggerAiReply: i,
                  compressImage: ee,
                  setShowMemories: O,
                  setShowCallHistory: K,
                  handleTestTime: k,
                  handleTestWeather: E,
                  timeTestResult: M,
                  weatherTestResult: j,
                  isTestingTime: C,
                  isTestingWeather: S,
                  minimaxVoiceIdDraft: Y,
                  setMinimaxVoiceIdDraft: U,
                  playTTS: D,
                  ttsConfig: le,
                  handleTTSDiagnostics: ve,
                  setShowTtsLogs: $,
                  voices: T,
                  models: I,
                  fetchVoices: F,
                  novelCharacterPhotoInputRef: z,
                  showCSSEditor: c,
                  setShowCSSEditor: d,
                  showAllPresets: se,
                  setShowAllPresets: Te,
                  activePresetId: f,
                  setActivePresetId: p,
                  presets: u,
                  copiedPresetId: ce,
                  handleCopyPresetCss: G,
                  handleExportPreset: J,
                  handleDeletePresetWithConfirm: we,
                  cssImportRef: ue,
                  presetPickerOpen: ke,
                  setPresetPickerOpen: W,
                  presetPickerRef: re,
                  editingCSS: h,
                  setEditingCSS: g,
                  handleUpdatePreset: x,
                  newPresetName: y,
                  setNewPresetName: v,
                  handleSavePreset: b,
                  setShowClearConfirm: q,
                  setShowHistorySearch: H,
                }),
          }),
        }),
      ],
    });
  },
  yY = ({
    show: t,
    onClose: s,
    summaries: n,
    chatId: a,
    generateSummary: r,
    isGenerating: i,
    chat: o,
    allChats: c = [],
    contact: d,
    updateContact: u,
    updateChatSettings: f,
    deleteSummary: p,
    updateSummary: m,
    calculateTokenEstimate: h,
    archives: g = {},
    bindSummaryToArchive: x,
    unbindSummaryFromArchive: y,
    unbindSummaryFromCurrentSession: v,
    removeSummaryFromArchive: b,
    updateSummaryInArchive: N,
    updateArchiveSettings: w,
  }) => {
    var ee, H, Y, U, ce, pe, se, Te, ke, W, ue, re, he, ge, J, G, we;
    const [_, A] = l.useState(!1),
      [k, C] = l.useState({ system: 0, history: 0, total: 0 }),
      [M, E] = l.useState(null),
      [S, j] = l.useState(""),
      [T, I] = l.useState(null),
      [L, B] = l.useState(null),
      [F, D] = l.useState([]),
      [$, P] = l.useState(!1),
      [z, O] = l.useState("all"),
      { reduceMotion: Z } = Yu();
    if (
      (l.useEffect(() => {
        !t ||
          !(o != null && o.contactId) ||
          be.get("meet_app_offline_summaries").then((Q) => {
            const ve = (Q == null ? void 0 : Q[o.contactId]) || [];
            D(Array.isArray(ve) ? ve : []);
          });
      }, [t, o == null ? void 0 : o.contactId]),
      l.useEffect(() => {
        if (t && h) {
          const Q = h(a);
          C(Q);
        }
      }, [
        t,
        a,
        h,
        (ee = o.settings) == null ? void 0 : ee.momentsLimit,
        (H = o.settings) == null ? void 0 : H.contextLimit,
        d == null ? void 0 : d.listenTogetherMemoryInChat,
        d == null ? void 0 : d.listenTogetherMemoryLineCount,
      ]),
      l.useEffect(() => {
        t || (E(null), j(""), I(null), B(null));
      }, [t]),
      !t)
    )
      return null;
    o == null || o.currentArchiveId;
    const K = g[a] || [],
      q = (() => {
        const Q = (n[a] || []).map((te) => ({
            ...te,
            archiveId: te.archiveId ?? null,
          })),
          ve = (K || []).flatMap((te) =>
            (te.summaries || []).map((Se) => ({
              ...Se,
              archiveId: Se.archiveId ?? te.id,
            })),
          ),
          Ve = new Set(),
          Ae = [];
        for (const te of [...Q, ...ve])
          Ve.has(te.id) || (Ve.add(te.id), Ae.push(te));
        return (
          Ae.sort(
            (te, Se) =>
              new Date(te.timestamp || 0) - new Date(Se.timestamp || 0),
          ),
          Ae
        );
      })(),
      V = (n[a] || []).map((Q) => ({ ...Q, archiveId: Q.archiveId ?? null })),
      ne = V.filter((Q) =>
        Object.prototype.hasOwnProperty.call(Q || {}, "generatedFromArchiveId")
          ? (Q == null ? void 0 : Q.generatedFromArchiveId) == null
          : (Q == null ? void 0 : Q.generatedInArchive) === !0
            ? !1
            : (Q == null ? void 0 : Q.archiveId) == null,
      ),
      le = (Q) =>
        (K || []).filter((ve) =>
          (ve.summaries || []).some((Ve) => Ve.id === Q),
        ),
      ie = (Q) => (n[a] || []).some((ve) => ve.id === Q),
      X = [
        {
          id: "all",
          title: "全部记忆",
          subtitle: "当前会话 + 全部线上存档，按时间归并",
          list: q,
        },
        {
          id: "bound-current-archive",
          title: "当前会话绑定记忆",
          subtitle: "已绑定到当前会话、可直接参与当前对话的记忆",
          list: V,
        },
        {
          id: "generated-from-current-archive",
          title: "当前会话总结记忆",
          subtitle: "在当前会话中直接提取生成的记忆",
          list: ne,
          highlight: !0,
        },
      ],
      je = X.find((Q) => Q.id === z) || X[0],
      xe = () => {
        A(!0);
      },
      ye = (Q) => {
        (A(!1), r(a, Q));
      },
      R = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: Z ? 0 : 0.4, ease: "easeOut" },
        },
        exit: { opacity: 0, transition: { duration: Z ? 0 : 0.3 } },
      },
      oe = {
        hidden: Z ? { opacity: 1, y: 0 } : { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: Z ? 0 : 0.5, ease: "easeOut" },
        },
      };
    return e.jsxs(We.div, {
      className:
        "absolute inset-0 z-[60] bg-[#FDFBF7] flex flex-col overflow-hidden",
      variants: R,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      children: [
        e.jsxs("div", {
          className:
            "px-8 pt-16 pb-8 flex justify-between items-start bg-[#FDFBF7] z-20",
          children: [
            e.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("span", { className: "w-8 h-[1px] bg-gray-900" }),
                    e.jsx("p", {
                      className:
                        "text-[10px] font-serif tracking-[0.3em] text-gray-400 uppercase",
                      children: "NEURAL ARCHIVES",
                    }),
                  ],
                }),
                e.jsx("h1", {
                  className:
                    "text-5xl font-serif text-gray-900 italic tracking-tight",
                  children: "记忆中枢",
                }),
                e.jsxs("p", {
                  className: "text-[10px] font-mono text-gray-400 mt-1",
                  children: ["ID: ", a.slice(0, 8).toUpperCase()],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => {
                (navigator.vibrate && navigator.vibrate(20), s());
              },
              className:
                "w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-500 group",
              children: e.jsx(Ts, {
                size: 20,
                className:
                  "group-hover:rotate-90 transition-transform duration-500",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto no-scrollbar px-8 pb-20",
          children: e.jsxs("div", {
            className: "space-y-12",
            children: [
              e.jsxs(We.div, {
                variants: oe,
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-white p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden group",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[80px] -mr-6 -mt-6 transition-transform duration-700 group-hover:scale-110",
                      }),
                      e.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-start mb-6",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                                children: "令牌消耗",
                              }),
                              e.jsx(Wr, {
                                size: 16,
                                className: "text-gray-300",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-baseline gap-2 mb-4",
                            children: [
                              e.jsx("span", {
                                className: "text-4xl font-serif text-gray-900",
                                children: k.total,
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-gray-400",
                                children: "令牌",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "w-full h-1 bg-gray-100 rounded-full overflow-hidden flex",
                            children: [
                              e.jsx("div", {
                                className: "h-full bg-gray-900",
                                style: {
                                  width: `${(k.system / k.total) * 100}%`,
                                },
                              }),
                              e.jsx("div", {
                                className: "h-full bg-gray-300",
                                style: {
                                  width: `${(k.history / k.total) * 100}%`,
                                },
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-4 mt-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 bg-gray-900 rounded-full",
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] text-gray-500 font-mono",
                                    children: ["系统: ", k.system],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 bg-gray-300 rounded-full",
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] text-gray-500 font-mono",
                                    children: ["历史: ", k.history],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-gray-900 p-6 text-white shadow-lg flex flex-col justify-between group cursor-pointer relative overflow-hidden",
                    onClick: xe,
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                      e.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] font-bold tracking-widest text-gray-400 uppercase",
                            children: "操作",
                          }),
                          e.jsx(wp, { size: 16, className: "text-yellow-400" }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className: "text-xl font-serif italic mb-1",
                            children: "提取记忆档案",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400",
                            children: "将当前对话转化为长期记忆",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "absolute bottom-6 right-6",
                        children: i
                          ? e.jsx(Or, {
                              size: 24,
                              className: "animate-spin text-white",
                            })
                          : e.jsx(wl, {
                              size: 24,
                              className:
                                "text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(We.div, {
                variants: oe,
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      e.jsx(Co, { size: 14, className: "text-gray-400" }),
                      e.jsx("span", {
                        className:
                          "text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                        children: "参数",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "bg-white p-6 border border-gray-100 space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                    children: "读取群聊记忆",
                                  }),
                                  e.jsx("p", {
                                    className: "text-[10px] text-gray-400",
                                    children:
                                      "开启后：角色回复会额外参考所选群聊的记忆与聊天记录",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => {
                                  var Q;
                                  return f(a, {
                                    readGroupChatMemoryEnabled: !(
                                      (Q = o == null ? void 0 : o.settings) !=
                                        null && Q.readGroupChatMemoryEnabled
                                    ),
                                  });
                                },
                                className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(Y = o == null ? void 0 : o.settings) != null && Y.readGroupChatMemoryEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                children:
                                  (U = o == null ? void 0 : o.settings) !=
                                    null && U.readGroupChatMemoryEnabled
                                    ? "已开启"
                                    : "未开启",
                              }),
                            ],
                          }),
                          ((ce = o == null ? void 0 : o.settings) == null
                            ? void 0
                            : ce.readGroupChatMemoryEnabled) &&
                            e.jsxs("div", {
                              className:
                                "pt-4 border-t border-gray-50 space-y-3 animate-in slide-in-from-top-2 fade-in",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between gap-3",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-mono text-gray-500",
                                      children: "选择群聊窗口",
                                    }),
                                    e.jsxs("select", {
                                      value:
                                        ((pe =
                                          o == null ? void 0 : o.settings) ==
                                        null
                                          ? void 0
                                          : pe.readGroupChatMemoryChatId) || "",
                                      onChange: (Q) =>
                                        f(a, {
                                          readGroupChatMemoryChatId:
                                            Q.target.value,
                                        }),
                                      className:
                                        "flex-1 ml-3 bg-gray-50 border border-gray-200 px-2 py-2 text-xs outline-none focus:border-gray-900 font-serif text-gray-800",
                                      children: [
                                        e.jsx("option", {
                                          value: "",
                                          children: "（未选择）",
                                        }),
                                        (Array.isArray(c) ? c : [])
                                          .filter((Q) =>
                                            Q == null ? void 0 : Q.isGroup,
                                          )
                                          .map((Q) =>
                                            e.jsxs(
                                              "option",
                                              {
                                                value: Q.id,
                                                children: [
                                                  Q.groupName || "群聊",
                                                  " (",
                                                  String(Q.id).slice(0, 6),
                                                  ")",
                                                ],
                                              },
                                              Q.id,
                                            ),
                                          ),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between gap-3",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-mono text-gray-500",
                                      children: "读取聊天记录轮数",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("input", {
                                          type: "number",
                                          min: "1",
                                          max: "200",
                                          value:
                                            ((se =
                                              o == null
                                                ? void 0
                                                : o.settings) == null
                                              ? void 0
                                              : se.readGroupChatMemoryRounds) ||
                                            10,
                                          onChange: (Q) =>
                                            f(a, {
                                              readGroupChatMemoryRounds:
                                                Math.max(
                                                  1,
                                                  Math.min(
                                                    200,
                                                    parseInt(Q.target.value) ||
                                                      10,
                                                  ),
                                                ),
                                            }),
                                          className:
                                            "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-mono text-gray-400",
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
                      e.jsxs("div", {
                        className:
                          "bg-white p-6 border border-gray-100 flex items-center justify-between",
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
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("input", {
                                type: "number",
                                value:
                                  ((Te = o.settings) == null
                                    ? void 0
                                    : Te.momentsLimit) || 5,
                                onChange: (Q) =>
                                  f(a, {
                                    momentsLimit: parseInt(Q.target.value),
                                  }),
                                className:
                                  "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-gray-400",
                                children: "条",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-white p-6 border border-gray-100 flex items-center justify-between",
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
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("input", {
                                type: "number",
                                value:
                                  ((ke = o.settings) == null
                                    ? void 0
                                    : ke.contextLimit) || 50,
                                onChange: (Q) =>
                                  f(a, {
                                    contextLimit: parseInt(Q.target.value),
                                  }),
                                className:
                                  "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-gray-400",
                                children: "回合",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (o == null ? void 0 : o.contactId) &&
                        (d == null ? void 0 : d.id) &&
                        !(o != null && o.isGroup) &&
                        e.jsxs("div", {
                          className: "bg-white p-6 border border-gray-100",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between gap-4 mb-4",
                              children: [
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                      children: "一起听记忆（聊天引用）",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] text-gray-400 leading-relaxed",
                                      children:
                                        "开启后，与该角色单聊/语音/电话时会在系统提示中参考情侣空间「一起听」最近记录；按角色隔离。勿机械复读。",
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () =>
                                    u == null
                                      ? void 0
                                      : u(d.id, {
                                          listenTogetherMemoryInChat: !(
                                            d != null &&
                                            d.listenTogetherMemoryInChat
                                          ),
                                        }),
                                  className: `shrink-0 text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${d != null && d.listenTogetherMemoryInChat ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                  children:
                                    d != null && d.listenTogetherMemoryInChat
                                      ? "已开启"
                                      : "未开启",
                                }),
                              ],
                            }),
                            (d == null
                              ? void 0
                              : d.listenTogetherMemoryInChat) &&
                              e.jsxs("div", {
                                className:
                                  "pt-4 border-t border-gray-50 flex items-center justify-between gap-4",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-mono text-gray-500",
                                    children: "读取最近条数",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("input", {
                                        type: "number",
                                        min: 1,
                                        max: 200,
                                        value:
                                          (d == null
                                            ? void 0
                                            : d.listenTogetherMemoryLineCount) ??
                                          30,
                                        onChange: (Q) => {
                                          const ve = parseInt(
                                              Q.target.value,
                                              10,
                                            ),
                                            Ve = Math.min(
                                              200,
                                              Math.max(
                                                1,
                                                Number.isFinite(ve) ? ve : 30,
                                              ),
                                            );
                                          u == null ||
                                            u(d.id, {
                                              listenTogetherMemoryLineCount: Ve,
                                            });
                                        },
                                        className:
                                          "w-16 bg-gray-50 border-b-2 border-gray-200 focus:border-gray-900 text-center font-mono text-lg outline-none transition-colors py-1",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] font-mono text-gray-400",
                                        children: "条",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      e.jsxs("div", {
                        className: "bg-white p-6 border border-gray-100",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                    children: "自动归档",
                                  }),
                                  e.jsx("p", {
                                    className: "text-[10px] text-gray-400",
                                    children: "定期自动生成记忆档案",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => {
                                  var Q;
                                  return f(a, {
                                    autoSummaryEnabled: !(
                                      (Q = o.settings) != null &&
                                      Q.autoSummaryEnabled
                                    ),
                                  });
                                },
                                className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(W = o.settings) != null && W.autoSummaryEnabled ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                children:
                                  (ue = o.settings) != null &&
                                  ue.autoSummaryEnabled
                                    ? "已开启"
                                    : "未开启",
                              }),
                            ],
                          }),
                          ((re = o.settings) == null
                            ? void 0
                            : re.autoSummaryEnabled) &&
                            e.jsxs("div", {
                              className:
                                "pt-4 border-t border-gray-50 flex items-center justify-between animate-in slide-in-from-top-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-mono text-gray-500",
                                  children: "触发阈值",
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-[10px] text-gray-400",
                                      children: "每",
                                    }),
                                    e.jsx("input", {
                                      type: "number",
                                      value:
                                        ((he = o.settings) == null
                                          ? void 0
                                          : he.summaryThreshold) || 10,
                                      onChange: (Q) =>
                                        f(a, {
                                          summaryThreshold: parseInt(
                                            Q.target.value,
                                          ),
                                        }),
                                      className:
                                        "w-12 bg-transparent border-b border-gray-300 focus:border-gray-900 text-center font-mono text-sm outline-none transition-colors",
                                    }),
                                    e.jsx("span", {
                                      className: "text-[10px] text-gray-400",
                                      children: "回合触发",
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
                variants: oe,
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      e.jsx(Ch, { size: 14, className: "text-gray-400" }),
                      e.jsx("span", {
                        className:
                          "text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                        children: "同步线下记忆",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-white p-6 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] relative overflow-hidden group",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 left-0 w-20 h-20 bg-gray-50 rounded-br-[60px] -ml-4 -mt-4 transition-transform duration-700 group-hover:scale-110",
                        "aria-hidden": !0,
                      }),
                      e.jsxs("div", {
                        className: "relative z-10 space-y-6",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-4",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("label", {
                                        className:
                                          "text-[10px] font-bold tracking-widest text-gray-900 uppercase block mb-1",
                                        children: "当前会话使用线下记忆",
                                      }),
                                      e.jsx("p", {
                                        className: "text-[10px] text-gray-400",
                                        children:
                                          (ge = o.settings) != null &&
                                          ge.useOfflineMemories
                                            ? "已开启 · 下方勾选要同步的遇见剧情"
                                            : "开启后可从遇见中选择要记在本会话的剧情总结",
                                      }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      var Q;
                                      return f(a, {
                                        useOfflineMemories: !(
                                          (Q = o.settings) != null &&
                                          Q.useOfflineMemories
                                        ),
                                      });
                                    },
                                    className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${(J = o.settings) != null && J.useOfflineMemories ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                    children:
                                      (G = o.settings) != null &&
                                      G.useOfflineMemories
                                        ? "已开启"
                                        : "未开启",
                                  }),
                                ],
                              }),
                              ((we = o.settings) == null
                                ? void 0
                                : we.useOfflineMemories) &&
                                e.jsx("div", {
                                  className:
                                    "pt-4 border-t border-gray-50 space-y-3 animate-in slide-in-from-top-2 duration-200",
                                  children:
                                    F.length > 0
                                      ? e.jsxs(e.Fragment, {
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] font-mono text-gray-500",
                                              children:
                                                "勾选本会话要记住的剧情",
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "max-h-44 overflow-y-auto space-y-2 no-scrollbar",
                                              children: F.map((Q) => {
                                                var Ve;
                                                const ve = (
                                                  ((Ve = o.settings) == null
                                                    ? void 0
                                                    : Ve.selectedOfflineMemoryIds) ||
                                                  []
                                                ).includes(Q.id);
                                                return e.jsxs(
                                                  "label",
                                                  {
                                                    className: `flex items-start gap-3 py-2 px-3 rounded-lg cursor-pointer transition-colors border border-transparent ${ve ? "bg-gray-50 border-gray-100" : "hover:bg-gray-50/50"}`,
                                                    children: [
                                                      e.jsx("input", {
                                                        type: "checkbox",
                                                        checked: ve,
                                                        onChange: () => {
                                                          var Se;
                                                          const Ae =
                                                              ((Se =
                                                                o.settings) ==
                                                              null
                                                                ? void 0
                                                                : Se.selectedOfflineMemoryIds) ||
                                                              [],
                                                            te = ve
                                                              ? Ae.filter(
                                                                  (Fe) =>
                                                                    Fe !== Q.id,
                                                                )
                                                              : [...Ae, Q.id];
                                                          f(a, {
                                                            selectedOfflineMemoryIds:
                                                              te,
                                                          });
                                                        },
                                                        className:
                                                          "mt-0.5 rounded border-gray-300 text-gray-900 focus:ring-gray-400 focus:ring-offset-0",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-sm font-serif text-gray-800 line-clamp-2 leading-snug",
                                                        children: Q.content,
                                                      }),
                                                    ],
                                                  },
                                                  Q.id,
                                                );
                                              }),
                                            }),
                                          ],
                                        })
                                      : e.jsxs("div", {
                                          className:
                                            "py-8 px-4 border border-gray-100 border-dashed rounded-lg bg-gray-50/50 text-center",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1",
                                              children: "暂无线下记忆",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-gray-500",
                                              children:
                                                "在遇见 app 中为 TA 生成剧情总结后，会出现在此处",
                                            }),
                                          ],
                                        }),
                                }),
                            ],
                          }),
                          K.length > 0 &&
                            e.jsxs("div", {
                              className: "pt-4 border-t border-gray-50",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3",
                                  children: "各存档 · 线下记忆",
                                }),
                                e.jsx("div", {
                                  className: "space-y-3",
                                  children: K.map((Q) => {
                                    var Ae, te;
                                    const ve =
                                        ((Ae = Q.settings) == null
                                          ? void 0
                                          : Ae.useOfflineMemories) ?? !1,
                                      Ve =
                                        ((te = Q.settings) == null
                                          ? void 0
                                          : te.selectedOfflineMemoryIds) || [];
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "border border-gray-100 p-4 rounded-lg bg-gray-50/30",
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center justify-between mb-2",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "font-serif text-sm text-gray-900",
                                                children: Q.name,
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () =>
                                                  w(a, Q.id, {
                                                    useOfflineMemories: !ve,
                                                  }),
                                                className: `text-[10px] font-bold tracking-widest border px-2 py-1 transition-all ${ve ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-400"}`,
                                                children: ve
                                                  ? "已开启"
                                                  : "未开启",
                                              }),
                                            ],
                                          }),
                                          ve &&
                                            F.length > 0 &&
                                            e.jsx("div", {
                                              className:
                                                "max-h-28 overflow-y-auto space-y-1.5 mt-2 no-scrollbar",
                                              children: F.map((Se) => {
                                                const Fe = Ve.includes(Se.id);
                                                return e.jsxs(
                                                  "label",
                                                  {
                                                    className:
                                                      "flex items-center gap-2 cursor-pointer group",
                                                    children: [
                                                      e.jsx("input", {
                                                        type: "checkbox",
                                                        checked: Fe,
                                                        onChange: () => {
                                                          const $e = Fe
                                                            ? Ve.filter(
                                                                (tt) =>
                                                                  tt !== Se.id,
                                                              )
                                                            : [...Ve, Se.id];
                                                          w(a, Q.id, {
                                                            selectedOfflineMemoryIds:
                                                              $e,
                                                          });
                                                        },
                                                        className:
                                                          "rounded border-gray-300 text-gray-900 focus:ring-gray-400 focus:ring-offset-0",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-xs font-serif text-gray-700 line-clamp-1 group-hover:text-gray-900",
                                                        children: Se.content,
                                                      }),
                                                    ],
                                                  },
                                                  Se.id,
                                                );
                                              }),
                                            }),
                                        ],
                                      },
                                      Q.id,
                                    );
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
                variants: oe,
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-1",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx(Wl, { size: 14, className: "text-gray-400" }),
                          e.jsx("span", {
                            className:
                              "text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase",
                            children: "档案流",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => P((Q) => !Q),
                        className:
                          "w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[10px] text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors",
                        title: "档案流说明",
                        children: "?",
                      }),
                    ],
                  }),
                  $ &&
                    e.jsx("div", {
                      className:
                        "text-[10px] text-gray-500 leading-relaxed bg-gray-50 border border-gray-100 rounded-lg p-3",
                      children:
                        "线上总结以记忆为中心。提取记忆后，可为每条记忆选择绑定到「当前会话」或指定线上存档（点击每条记忆的「绑定到存档」）。",
                    }),
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx("div", {
                        className: "px-1",
                        children: e.jsx("div", {
                          className:
                            "flex items-center gap-2 overflow-x-auto no-scrollbar",
                          children: X.map((Q) => {
                            const ve = Q.id === je.id;
                            return e.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => O(Q.id),
                                className: `shrink-0 border px-3 py-1.5 text-[10px] font-bold tracking-wide transition-colors ${ve ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"}`,
                                children: [
                                  Q.title,
                                  e.jsx("span", {
                                    className: `ml-1.5 font-mono ${ve ? "text-gray-200" : "text-gray-400"}`,
                                    children: Q.list.length,
                                  }),
                                ],
                              },
                              Q.id,
                            );
                          }),
                        }),
                      }),
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            className:
                              "px-1 flex items-center justify-between gap-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] font-bold tracking-widest text-gray-700 uppercase",
                                    children: je.title,
                                  }),
                                  je.highlight &&
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-bold tracking-widest uppercase px-1.5 py-0.5 border border-gray-300 text-gray-600 bg-gray-50",
                                      children: "本存档提取",
                                    }),
                                ],
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-[10px] font-mono text-gray-500 shrink-0",
                                children: [je.list.length, " 条"],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "px-1",
                            children: e.jsx("p", {
                              className: "text-[10px] text-gray-400 mt-1",
                              children: je.subtitle,
                            }),
                          }),
                          je.list.length === 0
                            ? e.jsx("div", {
                                className:
                                  "flex flex-col items-center justify-center py-10 border border-gray-200 border-dashed bg-gray-50/50",
                                children: e.jsx("span", {
                                  className:
                                    "text-[10px] font-mono text-gray-400 uppercase tracking-widest",
                                  children: "暂无数据",
                                }),
                              })
                            : e.jsx("div", {
                                className: "grid grid-cols-1 gap-4",
                                children: je.list.map((Q, ve) =>
                                  e.jsxs(
                                    We.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: { delay: ve * 0.03 },
                                      className:
                                        "bg-white border border-gray-200 p-5 relative group hover:shadow-lg transition-all duration-300",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "chat-settings-left-divider absolute top-0 left-0 bottom-0 w-1 bg-gray-900",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "absolute top-2 right-2 flex gap-1",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "w-1 h-1 bg-gray-300 rounded-full",
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "w-1 h-1 bg-gray-300 rounded-full",
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "w-1 h-1 bg-gray-300 rounded-full",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className: "pl-3",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex justify-between items-start mb-3",
                                              children: [
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsxs("span", {
                                                      className:
                                                        "text-[10px] font-mono text-gray-400 block mb-1",
                                                      children: [
                                                        new Date(
                                                          Q.timestamp,
                                                        ).toLocaleDateString(),
                                                        " ",
                                                        new Date(
                                                          Q.timestamp,
                                                        ).toLocaleTimeString(),
                                                      ],
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-[10px] font-bold tracking-widest text-gray-900 uppercase bg-gray-100 px-1",
                                                      children: Q.range,
                                                    }),
                                                    x &&
                                                      (() => {
                                                        const Ve = ie(Q.id),
                                                          Ae = le(Q.id);
                                                        if (
                                                          !Ve &&
                                                          Ae.length === 0
                                                        )
                                                          return null;
                                                        const te = [];
                                                        return (
                                                          Ve &&
                                                            te.push("当前会话"),
                                                          Ae.forEach((Se) =>
                                                            te.push(Se.name),
                                                          ),
                                                          e.jsxs("span", {
                                                            className:
                                                              "text-[10px] text-gray-500 mt-1 block",
                                                            children: [
                                                              "已绑定: ",
                                                              te.join("、"),
                                                            ],
                                                          })
                                                        );
                                                      })(),
                                                  ],
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "relative flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                                                  children:
                                                    M !== Q.id
                                                      ? e.jsxs(e.Fragment, {
                                                          children: [
                                                            e.jsx("button", {
                                                              onClick: (Ve) => {
                                                                (Ve.stopPropagation(),
                                                                  I(
                                                                    T === Q.id
                                                                      ? null
                                                                      : Q.id,
                                                                  ),
                                                                  B(null));
                                                              },
                                                              className:
                                                                "p-1 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors",
                                                              title: "更多",
                                                              children: e.jsx(
                                                                Ih,
                                                                { size: 16 },
                                                              ),
                                                            }),
                                                            T === Q.id &&
                                                              e.jsxs(
                                                                e.Fragment,
                                                                {
                                                                  children: [
                                                                    e.jsx(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "fixed inset-0 z-10",
                                                                        onClick:
                                                                          () => {
                                                                            (I(
                                                                              null,
                                                                            ),
                                                                              B(
                                                                                null,
                                                                              ));
                                                                          },
                                                                      },
                                                                    ),
                                                                    e.jsxs(
                                                                      "div",
                                                                      {
                                                                        className:
                                                                          "absolute right-0 top-6 z-20 min-w-[140px] bg-white border border-gray-200 rounded-lg shadow-lg py-1 text-left",
                                                                        children:
                                                                          [
                                                                            e.jsxs(
                                                                              "button",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    (E(
                                                                                      Q.id,
                                                                                    ),
                                                                                      j(
                                                                                        Q.content ||
                                                                                          "",
                                                                                      ),
                                                                                      I(
                                                                                        null,
                                                                                      ));
                                                                                  },
                                                                                className:
                                                                                  "w-full px-3 py-2 text-left text-[12px] text-gray-700 hover:bg-gray-50 flex items-center gap-2",
                                                                                children:
                                                                                  [
                                                                                    e.jsx(
                                                                                      _l,
                                                                                      {
                                                                                        size: 12,
                                                                                      },
                                                                                    ),
                                                                                    "编辑",
                                                                                  ],
                                                                              },
                                                                            ),
                                                                            x &&
                                                                              e.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "relative",
                                                                                  children:
                                                                                    [
                                                                                      e.jsxs(
                                                                                        "button",
                                                                                        {
                                                                                          onClick:
                                                                                            () =>
                                                                                              B(
                                                                                                L ===
                                                                                                  Q.id
                                                                                                  ? null
                                                                                                  : Q.id,
                                                                                              ),
                                                                                          className:
                                                                                            "w-full px-3 py-2 text-left text-[12px] text-gray-700 hover:bg-gray-50 flex items-center justify-between",
                                                                                          children:
                                                                                            [
                                                                                              "绑定到存档",
                                                                                              e.jsx(
                                                                                                aa,
                                                                                                {
                                                                                                  size: 12,
                                                                                                  className: `transition-transform ${L === Q.id ? "rotate-180" : ""}`,
                                                                                                },
                                                                                              ),
                                                                                            ],
                                                                                        },
                                                                                      ),
                                                                                      L ===
                                                                                        Q.id &&
                                                                                        e.jsxs(
                                                                                          "div",
                                                                                          {
                                                                                            className:
                                                                                              "bg-gray-50 border-t border-gray-100 py-1 max-h-40 overflow-y-auto",
                                                                                            children:
                                                                                              [
                                                                                                e.jsxs(
                                                                                                  "button",
                                                                                                  {
                                                                                                    onClick:
                                                                                                      () => {
                                                                                                        (ie(
                                                                                                          Q.id,
                                                                                                        ) &&
                                                                                                        v
                                                                                                          ? v(
                                                                                                              a,
                                                                                                              Q.id,
                                                                                                            )
                                                                                                          : x(
                                                                                                              a,
                                                                                                              Q.id,
                                                                                                              null,
                                                                                                            ),
                                                                                                          I(
                                                                                                            null,
                                                                                                          ),
                                                                                                          B(
                                                                                                            null,
                                                                                                          ));
                                                                                                      },
                                                                                                    className: `w-full px-3 py-1.5 text-left text-[11px] hover:bg-gray-100 flex items-center justify-between ${ie(Q.id) ? "text-gray-900 font-medium" : "text-gray-600"}`,
                                                                                                    children:
                                                                                                      [
                                                                                                        "当前会话",
                                                                                                        ie(
                                                                                                          Q.id,
                                                                                                        ) &&
                                                                                                          e.jsx(
                                                                                                            "span",
                                                                                                            {
                                                                                                              className:
                                                                                                                "text-[10px]",
                                                                                                              children:
                                                                                                                "✓ 已绑定",
                                                                                                            },
                                                                                                          ),
                                                                                                      ],
                                                                                                  },
                                                                                                ),
                                                                                                K.map(
                                                                                                  (
                                                                                                    Ve,
                                                                                                  ) => {
                                                                                                    const Ae =
                                                                                                      (
                                                                                                        Ve.summaries ||
                                                                                                        []
                                                                                                      ).some(
                                                                                                        (
                                                                                                          te,
                                                                                                        ) =>
                                                                                                          te.id ===
                                                                                                          Q.id,
                                                                                                      );
                                                                                                    return e.jsxs(
                                                                                                      "button",
                                                                                                      {
                                                                                                        onClick:
                                                                                                          () => {
                                                                                                            (Ae &&
                                                                                                            y
                                                                                                              ? y(
                                                                                                                  a,
                                                                                                                  Ve.id,
                                                                                                                  Q.id,
                                                                                                                )
                                                                                                              : x(
                                                                                                                  a,
                                                                                                                  Q.id,
                                                                                                                  Ve.id,
                                                                                                                ),
                                                                                                              I(
                                                                                                                null,
                                                                                                              ),
                                                                                                              B(
                                                                                                                null,
                                                                                                              ));
                                                                                                          },
                                                                                                        className: `w-full px-3 py-1.5 text-left text-[11px] hover:bg-gray-100 flex items-center justify-between ${Ae ? "text-gray-900 font-medium" : "text-gray-600"}`,
                                                                                                        children:
                                                                                                          [
                                                                                                            Ve.name,
                                                                                                            Ae &&
                                                                                                              e.jsx(
                                                                                                                "span",
                                                                                                                {
                                                                                                                  className:
                                                                                                                    "text-[10px]",
                                                                                                                  children:
                                                                                                                    "✓ 已绑定",
                                                                                                                },
                                                                                                              ),
                                                                                                          ],
                                                                                                      },
                                                                                                      Ve.id,
                                                                                                    );
                                                                                                  },
                                                                                                ),
                                                                                              ],
                                                                                          },
                                                                                        ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            e.jsxs(
                                                                              "button",
                                                                              {
                                                                                onClick:
                                                                                  () => {
                                                                                    (confirm(
                                                                                      "确定销毁这份档案吗？",
                                                                                    ) &&
                                                                                      (b &&
                                                                                        le(
                                                                                          Q.id,
                                                                                        ).forEach(
                                                                                          (
                                                                                            Ve,
                                                                                          ) =>
                                                                                            b(
                                                                                              a,
                                                                                              Ve.id,
                                                                                              Q.id,
                                                                                            ),
                                                                                        ),
                                                                                      p(
                                                                                        a,
                                                                                        Q.id,
                                                                                      )),
                                                                                      I(
                                                                                        null,
                                                                                      ),
                                                                                      B(
                                                                                        null,
                                                                                      ));
                                                                                  },
                                                                                className:
                                                                                  "w-full px-3 py-2 text-left text-[12px] text-red-500 hover:bg-red-50 flex items-center gap-2",
                                                                                children:
                                                                                  [
                                                                                    e.jsx(
                                                                                      _n,
                                                                                      {
                                                                                        size: 12,
                                                                                      },
                                                                                    ),
                                                                                    "删除",
                                                                                  ],
                                                                              },
                                                                            ),
                                                                          ],
                                                                      },
                                                                    ),
                                                                  ],
                                                                },
                                                              ),
                                                          ],
                                                        })
                                                      : null,
                                                }),
                                              ],
                                            }),
                                            M === Q.id
                                              ? e.jsxs("div", {
                                                  className: "space-y-3",
                                                  children: [
                                                    e.jsx("textarea", {
                                                      value: S,
                                                      onChange: (Ve) =>
                                                        j(Ve.target.value),
                                                      className:
                                                        "w-full min-h-[120px] p-3 text-xs text-gray-600 leading-relaxed font-serif border border-gray-200 focus:border-gray-900 outline-none resize-y bg-gray-50/50",
                                                      placeholder:
                                                        "编辑记忆摘要内容...",
                                                      autoFocus: !0,
                                                    }),
                                                    e.jsxs("div", {
                                                      className: "flex gap-2",
                                                      children: [
                                                        e.jsxs("button", {
                                                          onClick: () => {
                                                            S.trim() &&
                                                              (Q.archiveId && N
                                                                ? N(
                                                                    a,
                                                                    Q.archiveId,
                                                                    Q.id,
                                                                    S.trim(),
                                                                  )
                                                                : m(
                                                                    a,
                                                                    Q.id,
                                                                    S.trim(),
                                                                  ),
                                                              E(null),
                                                              j(""));
                                                          },
                                                          className:
                                                            "flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-black transition-colors",
                                                          children: [
                                                            e.jsx(oo, {
                                                              size: 12,
                                                            }),
                                                            "保存",
                                                          ],
                                                        }),
                                                        e.jsx("button", {
                                                          onClick: () => {
                                                            (E(null), j(""));
                                                          },
                                                          className:
                                                            "px-3 py-1.5 border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase hover:border-gray-900 hover:text-gray-900 transition-colors",
                                                          children: "取消",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              : e.jsx("p", {
                                                  className:
                                                    "text-xs text-gray-600 leading-relaxed font-serif text-justify line-clamp-4 group-hover:line-clamp-none transition-all",
                                                  children: Q.content,
                                                }),
                                          ],
                                        }),
                                      ],
                                    },
                                    `${je.id}-${Q.id}`,
                                  ),
                                ),
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
        _ &&
          e.jsx("div", {
            className:
              "absolute inset-0 z-20 bg-black/20 backdrop-blur-sm flex items-end animate-in fade-in duration-200",
            onClick: () => A(!1),
            children: e.jsxs("div", {
              className:
                "w-full bg-white p-8 space-y-6 animate-in slide-in-from-bottom duration-300",
              onClick: (Q) => Q.stopPropagation(),
              children: [
                e.jsx("h3", {
                  className:
                    "text-center text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                  children: "选择提取范围",
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 bg-gray-50 p-4 border border-gray-100",
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
                      id: "summary-limit-input",
                      onKeyDown: (Q) => {
                        if (Q.key === "Enter") {
                          const ve = parseInt(Q.target.value) || 25;
                          ye(ve);
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
                        const Q = document.getElementById(
                            "summary-limit-input",
                          ),
                          ve = parseInt(Q.value) || 50;
                        ye(ve);
                      },
                      className:
                        "py-4 bg-gray-900 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-black transition-colors",
                      children: "确认提取",
                    }),
                    e.jsx("button", {
                      onClick: () => ye(0),
                      className:
                        "py-4 border border-gray-200 text-gray-500 text-[10px] font-bold tracking-widest uppercase hover:border-gray-900 hover:text-gray-900 transition-colors",
                      children: "提取全部",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => A(!1),
                  className:
                    "w-full py-2 text-[10px] text-gray-400 tracking-widest uppercase hover:text-gray-900 transition-colors",
                  children: "取消",
                }),
              ],
            }),
          }),
      ],
    });
  },
  vY = ({
    show: t,
    onClose: s,
    onConfirm: n,
    showPhoneCase: a = !1,
    initialTimestamp: r = null,
    initialNote: i = "",
  }) => {
    const o = new Date(),
      [c, d] = l.useState(
        () =>
          `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")}`,
      ),
      [u, f] = l.useState(
        () =>
          `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`,
      ),
      [p, m] = l.useState(""),
      h = l.useRef(null),
      g = l.useRef(null),
      x = () => {
        const N = h.current;
        N && (typeof N.showPicker == "function" ? N.showPicker() : N.focus());
      },
      y = () => {
        const N = g.current;
        N && (typeof N.showPicker == "function" ? N.showPicker() : N.focus());
      };
    if (
      (l.useEffect(() => {
        if (t) {
          let N = new Date();
          const w = r ? new Date(r) : null;
          (w && !Number.isNaN(w.getTime()) && (N = w),
            d(
              `${N.getFullYear()}-${String(N.getMonth() + 1).padStart(2, "0")}-${String(N.getDate()).padStart(2, "0")}`,
            ),
            f(
              `${String(N.getHours()).padStart(2, "0")}:${String(N.getMinutes()).padStart(2, "0")}`,
            ),
            m(typeof i == "string" ? i : ""));
        }
      }, [t, r, i]),
      !t)
    )
      return null;
    const v = () => {
        const [N, w, _] = c.split("-").map(Number),
          [A, k] = u.split(":").map(Number),
          C = new Date(N, w - 1, _, A, k, 0, 0);
        Number.isNaN(C.getTime()) || (n({ timestamp: C, note: p.trim() }), s());
      },
      b = c ? c.replace(/-/g, ".") : "";
    return e.jsx("div", {
      className: `ta-overlay ${a ? "ta-with-phone-case" : ""}`,
      onClick: s,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "ta-title",
      children: e.jsxs("div", {
        className: "ta-panel",
        onClick: (N) => N.stopPropagation(),
        role: "document",
        children: [
          e.jsxs("header", {
            className: "ta-header",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: s,
                className: "ta-close",
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 20, strokeWidth: 2.5 }),
              }),
              e.jsxs("div", {
                className: "ta-header-inner",
                children: [
                  e.jsx("span", { className: "ta-eyebrow", children: "设置" }),
                  e.jsx("h2", {
                    id: "ta-title",
                    className: "ta-header-title",
                    children: "推进时间",
                  }),
                  e.jsx("p", {
                    className: "ta-header-desc",
                    children: "设定对话里的「当前时刻」与这段时间发生的事",
                  }),
                  e.jsx("div", { className: "ta-header-rule" }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "ta-content",
            children: [
              e.jsxs("div", {
                className: "ta-tiles",
                children: [
                  e.jsxs("label", {
                    className: "ta-tile ta-tile-date",
                    onClick: (N) => {
                      (N.preventDefault(), x());
                    },
                    children: [
                      e.jsx("div", {
                        className: "ta-tile-icon-wrap",
                        children: e.jsx(Iu, {
                          size: 20,
                          className: "ta-tile-icon",
                        }),
                      }),
                      e.jsx("span", {
                        className: "ta-tile-label",
                        children: "日期",
                      }),
                      e.jsx("span", {
                        className: "ta-tile-value",
                        children: b || "选择日期",
                      }),
                      e.jsx("input", {
                        ref: h,
                        type: "date",
                        value: c,
                        onChange: (N) => d(N.target.value),
                        className: "ta-tile-input",
                        "aria-label": "选择日期",
                      }),
                    ],
                  }),
                  e.jsxs("label", {
                    className: "ta-tile ta-tile-time",
                    onClick: y,
                    children: [
                      e.jsx("div", {
                        className: "ta-tile-icon-wrap",
                        children: e.jsx(Dr, {
                          size: 20,
                          className: "ta-tile-icon",
                        }),
                      }),
                      e.jsx("span", {
                        className: "ta-tile-label",
                        children: "时间",
                      }),
                      e.jsx("span", {
                        className: "ta-tile-value",
                        children: u || "选择时间",
                      }),
                      e.jsx("input", {
                        ref: g,
                        type: "time",
                        value: u,
                        onChange: (N) => f(N.target.value),
                        className: "ta-tile-input",
                        "aria-label": "选择时间",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "ta-event",
                children: [
                  e.jsx("span", {
                    className: "ta-event-label",
                    children: "这段时间发生了什么（选填）",
                  }),
                  e.jsxs("div", {
                    className: "ta-event-input-wrap",
                    children: [
                      e.jsx("textarea", {
                        value: p,
                        onChange: (N) => m(N.target.value),
                        placeholder: "例如：开会、出门、午睡…",
                        className: "ta-event-input",
                        rows: 3,
                      }),
                      e.jsx("div", { className: "ta-event-line" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "ta-actions",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: s,
                    className: "ta-btn ta-btn-cancel",
                    children: "取消",
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: v,
                    className: "ta-btn ta-btn-confirm",
                    children: [
                      "确定推进 ",
                      e.jsx(Kn, { size: 18, strokeWidth: 2.5 }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function wY({ show: t, onClose: s, members: n = [], onSelect: a }) {
  return t
    ? e.jsx("div", {
        className:
          "absolute inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300",
        children: e.jsxs("div", {
          className:
            "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl border-4 border-white relative overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ffccbc]/80 rotate-[-2deg] shadow-sm z-10 backdrop-blur-sm border-l-2 border-r-2 border-white/50",
            }),
            e.jsxs("div", {
              className:
                "p-6 pt-8 relative bg-dot-grid rounded-[20px] overflow-hidden",
              children: [
                e.jsx("button", {
                  onClick: s,
                  className:
                    "absolute top-4 right-4 p-1 hover:bg-[#8d6e63]/10 rounded-full text-[#8d6e63] transition-colors z-20",
                  children: e.jsx(Ts, { size: 20 }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx("div", {
                      className: "p-2 bg-[#8d6e63]/10 rounded-xl",
                      children: e.jsx(zm, {
                        size: 22,
                        className: "text-[#8d6e63]",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-lg font-black text-[#5d4037] font-serif tracking-tight",
                          children: "选择转账对象",
                        }),
                        e.jsx("p", {
                          className: "text-xs text-[#8d6e63]/70",
                          children: "指定群内成员收款",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("ul", {
                  className: "space-y-2 max-h-64 overflow-y-auto no-scrollbar",
                  children: n.map((r) =>
                    e.jsx(
                      "li",
                      {
                        children: e.jsxs("button", {
                          type: "button",
                          onClick: () => {
                            (a(r), s());
                          },
                          className:
                            "w-full flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-[#efebe9] hover:border-[#8d6e63] hover:bg-[#fffcf7] transition-all text-left",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100",
                              children: e.jsx("img", {
                                src: r.avatar,
                                alt: "",
                                className: "w-full h-full object-cover",
                                loading: "lazy",
                              }),
                            }),
                            e.jsx("span", {
                              className:
                                "flex-1 font-medium text-[#5d4037] truncate",
                              children:
                                r.nickname || r.remark || r.name || "未命名",
                            }),
                            e.jsx(zm, {
                              size: 16,
                              className: "text-[#8d6e63]/60 flex-shrink-0",
                            }),
                          ],
                        }),
                      },
                      r.id,
                    ),
                  ),
                }),
                n.length === 0 &&
                  e.jsx("p", {
                    className: "text-sm text-gray-400 text-center py-6",
                    children: "暂无群成员",
                  }),
              ],
            }),
          ],
        }),
      })
    : null;
}
const jY = ({
    show: t,
    onClose: s,
    contact: n,
    transferAmount: a,
    setTransferAmount: r,
    transferNote: i,
    setTransferNote: o,
    onNext: c,
  }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl border-4 border-white relative overflow-visible transform rotate-1",
            children: [
              e.jsx("div", {
                className:
                  "absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ffccbc]/80 rotate-[-2deg] shadow-sm z-10 backdrop-blur-sm border-l-2 border-r-2 border-white/50",
              }),
              e.jsxs("div", {
                className:
                  "p-6 pt-8 relative bg-dot-grid rounded-[20px] overflow-hidden",
                children: [
                  e.jsx("button", {
                    onClick: s,
                    className:
                      "absolute top-4 right-4 p-1 hover:bg-[#8d6e63]/10 rounded-full text-[#8d6e63] transition-colors z-20",
                    children: e.jsx(Ts, { size: 20 }),
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col items-center gap-3 mb-6",
                    children: [
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-16 h-16 bg-white p-1 shadow-md rotate-[-3deg] border border-gray-100",
                            children: e.jsx("img", {
                              src: n.avatar,
                              className:
                                "w-full h-full object-cover filter contrast-105",
                              alt: "contact",
                              loading: "lazy",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-2 -right-2 text-[#8d6e63] drop-shadow-sm transform rotate-12",
                            children: e.jsx(zn, {
                              size: 20,
                              fill: "#ffab91",
                              className: "text-[#ffab91]",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("span", {
                        className:
                          "text-lg font-black text-[#5d4037] font-serif tracking-tight",
                        children: ["转账给 ", n.nickname || n.name],
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
                              "text-[10px] font-bold text-[#8d6e63]/60 uppercase tracking-wider ml-1",
                            children: "金额",
                          }),
                          e.jsxs("div", {
                            className: "relative group",
                            children: [
                              e.jsx("span", {
                                className:
                                  "absolute left-3 top-1/2 -translate-y-1/2 text-2xl font-bold text-[#5d4037]",
                                children: "¥",
                              }),
                              e.jsx("input", {
                                type: "number",
                                value: a,
                                onChange: (d) => r(d.target.value),
                                className:
                                  "w-full bg-white border-2 border-[#efebe9] rounded-xl pl-8 pr-4 py-3 text-2xl font-bold text-[#5d4037] outline-none focus:border-[#8d6e63] focus:ring-4 focus:ring-[#8d6e63]/10 transition-all placeholder-[#d7ccc8]",
                                placeholder: "0.00",
                                autoFocus: !0,
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
                              "text-[10px] font-bold text-[#8d6e63]/60 uppercase tracking-wider ml-1",
                            children: "备注",
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: i,
                            onChange: (d) => o(d.target.value),
                            className:
                              "w-full bg-white border-2 border-[#efebe9] rounded-xl px-4 py-3 text-sm font-medium text-[#5d4037] outline-none focus:border-[#8d6e63] focus:ring-4 focus:ring-[#8d6e63]/10 transition-all placeholder-[#d7ccc8]",
                            placeholder: "添加备注...",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: c,
                        disabled: !a || parseFloat(a) <= 0,
                        className:
                          "w-full py-3.5 bg-[#8d6e63] text-white rounded-xl font-bold text-sm shadow-[3px_3px_0px_rgba(93,64,55,0.2)] hover:shadow-[1px_1px_0px_rgba(93,64,55,0.2)] hover:translate-y-[2px] active:shadow-none active:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#795548] mt-2",
                        children: "下一步",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  NY = ({
    show: t,
    onClose: s,
    contact: n,
    transferAmount: a,
    transferPassword: r,
    setTransferPassword: i,
    onComplete: o,
    purpose: c = "transfer",
    foodOrderInfo: d = null,
  }) => {
    if (!t) return null;
    const u = c === "food_order" && d;
    return e.jsx("div", {
      className:
        "absolute inset-0 z-[70] bg-black/20 backdrop-blur-sm grid place-items-center animate-in fade-in duration-200",
      children: e.jsxs("div", {
        className:
          "bg-[#fffcf7] w-[85%] max-w-[300px] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 border border-white/50",
        children: [
          e.jsxs("div", {
            className:
              "p-5 border-b border-gray-100/50 flex items-center relative",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute left-4 p-1 hover:bg-gray-100 rounded-full text-gray-400 transition-colors",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsx("h3", {
                className:
                  "flex-1 text-center font-bold text-[#4a4a4a] text-[15px] tracking-wide",
                children: "请输入支付密码",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "p-8 flex flex-col items-center w-full",
            children: [
              u
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("div", {
                        className: "text-xs text-gray-400 mb-2 tracking-wide",
                        children: ["确认投喂 ", d.targetName || "TA"],
                      }),
                      e.jsx("div", {
                        className: "text-sm font-medium text-[#4a4a4a] mb-1",
                        children: d.foodName,
                      }),
                      e.jsxs("div", {
                        className: "text-4xl font-bold text-[#4a4a4a] mb-8",
                        children: [
                          "¥",
                          parseFloat(d.foodPrice || 0).toFixed(2),
                        ],
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs("div", {
                        className: "text-xs text-gray-400 mb-2 tracking-wide",
                        children: [
                          "转账给 ",
                          (n == null ? void 0 : n.nickname) ||
                            (n == null ? void 0 : n.name),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "text-4xl font-bold text-[#4a4a4a] mb-8",
                        children: ["¥", parseFloat(a || 0).toFixed(2)],
                      }),
                    ],
                  }),
              e.jsxs("div", {
                className: "w-full relative",
                children: [
                  e.jsx("div", {
                    className: "flex justify-between gap-2 mb-2",
                    children: [0, 1, 2, 3, 4, 5].map((f) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center bg-white shadow-sm",
                          children:
                            r[f] &&
                            e.jsx("div", {
                              className:
                                "w-2.5 h-2.5 bg-[#4a4a4a] rounded-full",
                            }),
                        },
                        f,
                      ),
                    ),
                  }),
                  e.jsx("input", {
                    type: "password",
                    value: r,
                    onChange: (f) => {
                      const p = f.target.value;
                      (p.length <= 6 && i(p), p.length === 6 && o(p));
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
    });
  },
  kY = ({ data: t, onClose: s, onAction: n, disableAccept: a = !1 }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200",
          children: e.jsxs("div", {
            className:
              "w-full max-w-xs bg-[#fffcf7] rounded-[24px] shadow-2xl p-8 relative text-center border-4 border-white",
            children: [
              e.jsx("button", {
                onClick: s,
                className:
                  "absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full text-gray-400",
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsx("div", {
                className:
                  "w-16 h-16 bg-[#e8d5c4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner text-[#5d4037]",
                children: e.jsx(zm, { size: 32 }),
              }),
              e.jsx("h3", {
                className: "text-xl font-black text-[#5d4037] mb-1",
                children: "收到转账",
              }),
              e.jsxs("div", {
                className: "text-3xl font-bold text-[#8d6e63] mb-2 font-mono",
                children: ["¥", t.amount.toFixed(2)],
              }),
              e.jsx("p", {
                className: "text-xs text-gray-400 mb-8",
                children: t.note || "无备注",
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsx("button", {
                    onClick: () => n("reject"),
                    className:
                      "py-3 bg-gray-100 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors",
                    children: "退回",
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      a || n == null || n("accept");
                    },
                    disabled: a,
                    className: `py-3 bg-[#8d6e63] text-white rounded-xl font-bold text-sm transition-colors shadow-md ${a ? "opacity-60 cursor-not-allowed hover:bg-[#8d6e63]" : "hover:bg-[#795548]"}`,
                    children: "接收",
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  SY = ({ onClose: t }) => {
    const { ttsLogs: s, clearTtsLogs: n } = vn(),
      [a, r] = l.useState(null),
      [i, o] = l.useState(null),
      c = pn.useRef(null),
      d = (m) => {
        r(a === m ? null : m);
      },
      u = (m) => new Date(m).toLocaleTimeString(),
      f = (m) => {
        switch (m) {
          case "success":
            return e.jsx(K5, { size: 16, className: "text-green-500" });
          case "error":
            return e.jsx(Mh, { size: 16, className: "text-red-500" });
          default:
            return e.jsx(Dr, {
              size: 16,
              className: "text-yellow-500 animate-pulse",
            });
        }
      },
      p = (m, h) => {
        var g;
        if ((m.stopPropagation(), i === h.id))
          ((g = c.current) == null || g.pause(), o(null));
        else if ((c.current && c.current.pause(), h.audioUrl)) {
          const x = new Audio(h.audioUrl);
          ((x.onended = () => o(null)), x.play(), (c.current = x), o(h.id));
        }
      };
    return e.jsxs("div", {
      className: "h-full flex flex-col bg-white",
      children: [
        e.jsxs("div", {
          className:
            "px-6 py-4 border-b border-gray-100 flex justify-between items-center",
          children: [
            e.jsx("h2", {
              className: "text-lg font-bold text-gray-800",
              children: "TTS 调用日志",
            }),
            e.jsxs("button", {
              onClick: n,
              className:
                "flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors",
              children: [e.jsx(_n, { size: 14 }), "清空"],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-4 py-4 space-y-3",
          children:
            !s || s.length === 0
              ? e.jsx("div", {
                  className: "text-center text-gray-400 mt-20",
                  children: e.jsx("p", { children: "暂无 TTS 调用记录" }),
                })
              : s.map((m) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md",
                      children: [
                        e.jsxs("div", {
                          className:
                            "p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-colors",
                          onClick: () => d(m.id),
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-3 overflow-hidden flex-1",
                              children: [
                                f(m.status),
                                e.jsxs("div", {
                                  className: "flex flex-col min-w-0 flex-1",
                                  children: [
                                    e.jsx("div", {
                                      className: "flex items-center gap-2",
                                      children: e.jsx("span", {
                                        className:
                                          "font-bold text-sm text-gray-800 truncate",
                                        children: m.text,
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 mt-0.5",
                                      children: [
                                        e.jsx("span", {
                                          className: "text-xs text-gray-500",