` +
        K.messages
          .slice(-12)
          .map(
            (W) =>
              `${W.sender === "me" ? D : _.name}: ${(W.text || "").slice(0, 80)}`,
          ).join(`
`) +
        `
`);
    const V =
        "【你发的这条朋友圈】" +
        (t.content || "[图片]") +
        `
`,
      ne = A
        ? `【你正在以 NPC「${k}」的身份回复，需结合角色人设世界中该 NPC 的形象与口吻】
`
        : "",
      le =
        (A ? ((Te = t.user) == null ? void 0 : Te.name) : null) ||
        _.nickname ||
        _.name,
      ie = (t.comments || []).map((ke) => {
        const W = I(ke),
          ue = ke.replyTo ? ` 回复 ${ke.replyTo}` : "";
        return `- ${W}${ue}：${(ke.text || ke.content || "").slice(0, 80)}`;
      }).join(`
`);
    let X = "";
    T || (A && r)
      ? (X = `
[系统通知]
${ne}${V}【现有评论】
${ie || "（暂无）"}

用户 ${B} 在朋友圈回复了你的评论："${a}"
${Z}${q}

请按「真人朋友圈」的随机感来写，不要一板一眼。只输出一个 JSON，严禁 emoji。
严禁输出任何“代替用户/以用户名义/替用户回复/冒充用户”等措辞；禁止把任意回复写成“由用户代发/代回”。
输出格式（只输出此 JSON）：
{"ownerReplyToUser":"你对用户的回复或null","ownerRepliesToNpcs":[{"replyTo":"NPC名","text":"你回复该NPC的内容"},...],"npcRepliesToOwner":[{"user":"NPC名","text":"该NPC回复你的内容","persona":"简短人设"},...],"npcRepliesToUser":[{"user":"NPC名","text":"该NPC直接回复用户的话","persona":"简短人设"},...]}
`)
      : (X = `
[系统通知]
${ne}${V}【现有评论】
${ie || "（暂无）"}

用户 ${B} 在你的朋友圈下评论："${a}"
${Z}${q}

请按「真人朋友圈」的随机感来写，不要一板一眼。只输出一个 JSON，严禁 emoji。
严禁输出任何“代替用户/以用户名义/替用户回复/冒充用户”等措辞；禁止把任意回复写成“由用户代发/代回”。
输出格式（只输出此 JSON）：
{"ownerReplyToUser":"你对用户的回复或null","ownerRepliesToNpcs":[{"replyTo":"NPC名","text":"你回复该NPC的内容"},...],"npcRepliesToOwner":[{"user":"NPC名","text":"该NPC回复你的内容","persona":"简短人设"},...],"npcRepliesToUser":[{"user":"NPC名","text":"该NPC直接回复用户的话","persona":"简短人设"},...]}
`);
    const je = [{ sender: "system", text: X, type: "system" }];
    try {
      let ke = null,
        W = null;
      g &&
        _ != null &&
        _.id &&
        ((ke = await fS(_.id, g)),
        (_ == null ? void 0 : _.npcPoolOnlyEnabled) === !0 &&
          (W = await rh(_.id, g)));
      const ue = [a, t.content || "", q, Z].join(`
`),
        re = await Oo(_.id, ue),
        he = await m(je, _, "moments_reply", {}, [], re, [], !1, "", L);
      let ge = null;
      try {
        const Xe = he.match(/\{[\s\S]*\}/);
        ge = JSON.parse(Xe ? Xe[0] : he);
      } catch {}
      const J = (Xe) =>
          (Xe || "")
            .replace(
              /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
              "",
            )
            .trim(),
        G = (Xe) => {
          const ht = J(Xe).trim();
          return !ht || yF(ht) ? "" : ht;
        },
        we = {
          id: Date.now() - 1,
          user: n.name,
          text: a,
          content: a,
          replyTo: r || void 0,
          timestamp: Date.now() - 1,
        },
        Q = [],
        ve = (ge && (ge.ownerReplyToUser ?? ge.reply)) || "";
      if (ve) {
        const Xe = G(ve);
        Xe &&
          Q.push({
            id: Date.now() + Q.length,
            user: le,
            text: Xe,
            content: Xe,
            replyTo: n.name,
            timestamp: Date.now() + Q.length,
          });
      }
      const Ve = new Set(
          [
            B,
            n == null ? void 0 : n.name,
            n == null ? void 0 : n.realName,
            L == null ? void 0 : L.realName,
            L == null ? void 0 : L.name,
            L == null ? void 0 : L.nickname,
            c == null ? void 0 : c.realName,
            c == null ? void 0 : c.name,
            D,
          ]
            .map((Xe) => fm(Xe))
            .filter(Boolean),
        ),
        Ae = Array.isArray(ge == null ? void 0 : ge.ownerRepliesToNpcs)
          ? ge.ownerRepliesToNpcs
          : [];
      for (const Xe of Ae) {
        const ht = Xe.replyTo && String(Xe.replyTo).trim(),
          Pe = G(Xe.text || "");
        (ht && Ve.has(fm(ht))) ||
          (ht &&
            Pe &&
            Q.push({
              id: Date.now() + Q.length,
              user: le,
              text: Pe,
              content: Pe,
              replyTo: ht,
              timestamp: Date.now() + Q.length,
            }));
      }
      const te = [_.setting, F.settings].filter(Boolean).join(`
`),
        Se = lS({
          contacts: o,
          posterContact: _,
          roleBoundUser: F,
          appUser: c,
          extraNames: [
            le,
            A ? k : "",
            n == null ? void 0 : n.name,
            L == null ? void 0 : L.realName,
            L == null ? void 0 : L.name,
            L == null ? void 0 : L.nickname,
            c == null ? void 0 : c.realName,
            c == null ? void 0 : c.name,
          ].filter(Boolean),
        }),
        Fe = (Xe) => {
          const ht = String(Xe || "").trim();
          if (!ht || Se.has(fm(ht)) || cS(ht, te)) return !1;
          const Pe = ht.toLowerCase();
          if (ke) {
            const ut = ke.get(Pe);
            if (ut !== void 0 && ut !== "active") return !1;
          }
          if (
            (_ == null ? void 0 : _.npcPoolOnlyEnabled) === !0 &&
            g &&
            _ != null &&
            _.id
          ) {
            const ut = W;
            if (!ut || ut.size === 0 || !ut.has(Pe)) return !1;
          }
          return !0;
        },
        $e = Array.isArray(ge == null ? void 0 : ge.npcRepliesToOwner)
          ? ge.npcRepliesToOwner
          : [];
      for (const Xe of $e) {
        const ht = (Xe.user && String(Xe.user).trim()) || "";
        if (!Fe(ht)) continue;
        const Pe = G(Xe.text || "");
        Pe &&
          Q.push({
            id: Date.now() + Q.length + Math.random(),
            user: ht,
            text: Pe,
            content: Pe,
            replyTo: le,
            timestamp: Date.now() + Q.length - Math.random() * 6e4,
            npcPersona: Xe.persona || "",
          });
      }
      const tt = Array.isArray(ge == null ? void 0 : ge.npcRepliesToUser)
        ? ge.npcRepliesToUser
        : [];
      for (const Xe of tt) {
        const ht = (Xe.user && String(Xe.user).trim()) || "";
        if (!Fe(ht)) continue;
        const Pe = G(Xe.text || "");
        Pe &&
          Q.push({
            id: Date.now() + Q.length + Math.random(),
            user: ht,
            text: Pe,
            content: Pe,
            replyTo: n.name,
            timestamp: Date.now() + Q.length - Math.random() * 6e4,
            npcPersona: Xe.persona || "",
          });
      }
      ge &&
        h((Xe) =>
          Xe.map((ht) => {
            if (ht.id !== t.id) return ht;
            const Pe = ht.comments || [],
              _t = Pe.some(
                (Ee) =>
                  Ee.text === a &&
                  (Ee.user === n.name || (Ee.user && Ee.user.name) === n.name),
              )
                ? Pe
                : [...Pe, we];
            return { ...ht, comments: [..._t, ...Q] };
          }),
        );
    } catch {}
  },
  kF = async ({
    contact: t,
    recentMessages: s = [],
    options: n = {},
    deps: a,
  }) => {
    var je, xe, ye, R, oe, ee, H, Y, U, ce, pe;
    const {
        getRoleBoundUser: r,
        contacts: i,
        asyncStorage: o,
        apiConfig: c,
        addApiLog: d,
        setMoments: u,
        user: f,
        aiPostNpcMomentFromContext: p,
        MOMENT_ROLE_SETTING_MAX: m = 3200,
        MOMENT_USER_SETTING_MAX: h = 900,
      } = a || {},
      x = new Date().toLocaleString("zh-CN", { hour12: !1 }),
      y = n.roleBoundUser ?? (r == null ? void 0 : r(t)) ?? {},
      v = y.realName || y.name || "用户",
      b = n.traceAndPlanContext;
    let N = "";
    if (b) {
      const se = [];
      if (
        (xe = (je = b.traceToday) == null ? void 0 : je.pages) != null &&
        xe.length
      ) {
        const ke = b.traceToday.pages.flatMap((W) =>
          (W.traces || [])
            .map((ue) =>
              `${ue.time || ""} ${ue.location || ""} ${ue.activity || ""}`.trim(),
            )
            .filter(Boolean),
        );
        ke.length &&
          se.push(
            "【今日行踪】" +
              ke.slice(-8).map((W) => `- ${W}`).join(`
`),
          );
      }
      ((R = (ye = b.planToday) == null ? void 0 : ye.items) != null &&
        R.length &&
        se.push(
          "【今日计划】" +
            b.planToday.items.map((ke) =>
              `- ${ke.time || ""} ${ke.text || ""}`.trim(),
            ).join(`
`),
        ),
        (ee = (oe = b.planTomorrow) == null ? void 0 : oe.items) != null &&
          ee.length &&
          se.push(
            "【明日计划】" +
              b.planTomorrow.items.map((ke) =>
                `- ${ke.time || ""} ${ke.text || ""}`.trim(),
              ).join(`
`),
          ));
      const Te = b.lastTraceEntry;
      (Te &&
        se.push(
          `【当前最后一条行踪】（辅助知道自己在干嘛，勿每次原地打转） ${Te.time || ""} ${Te.location || ""} ${Te.activity || ""}`,
        ),
        se.length &&
          (N =
            `
` +
            se.join(`
`) +
            `
`));
    }
    const w = n.timeSinceLastMoment || "",
      _ = w
        ? `
【时间流速】距离你上次发朋友圈已过去：${w}。请根据时间感决定是否适合发、发什么。
`
        : "",
      A = Math.random(),
      k = A < 0.4 ? "none" : A < 0.5 ? 1 : A < 0.75 ? 3 : 9,
      C =
        k === "none"
          ? "本次**必须发无图纯文案**，不要任何配图格式。"
          : k === 1
            ? "本次**必须发一张图**，格式：（配图：描述）。"
            : k === 3
              ? "本次**必须发三张图**，格式：（配图1：描述1）（配图2：描述2）（配图3：描述3）。**三张图的描述必须各不相同**，每张一个画面。"
              : "本次**必须发九张图（九宫格）**，格式：（配图1：描述1）（配图2：描述2）…（配图9：描述9）。**九张图的描述必须各不相同**，每张一种画面/描写，不可重复、不可雷同。",
      M = 2 + Math.floor(Math.random() * 4),
      E = [...new Set(i.map((se) => se.nickname || se.name))].join("、");
    let S = "";
    s.length > 0 &&
      (S = s.map(
        (se) =>
          `${se.sender === "me" ? v : t.name}: ${(se.text || "").slice(0, 120)}`,
      ).join(`
`));
    let j = "";
    if (
      (Y =
        (H = b == null ? void 0 : b.traceToday) == null ? void 0 : H.pages) !=
        null &&
      Y.length
    ) {
      const se = b.traceToday.pages.flatMap((Te) =>
        (Te.traces || [])
          .map((ke) =>
            `${ke.time || ""} ${ke.location || ""} ${ke.activity || ""}`.trim(),
          )
          .filter(Boolean),
      );
      se.length &&
        (j = se.slice(-6).map((Te) => `- ${Te}`).join(`
`));
    }
    let T = "";
    try {
      const se = await Promise.race([
        o.get("world_books"),
        new Promise((Te, ke) =>
          setTimeout(() => ke(new Error("world_books_timeout")), 5e3),
        ),
      ]);
      if (se && Array.isArray(se)) {
        const Te = se.filter(
          (ke) => ke.boundContacts && ke.boundContacts.includes(t.id),
        );
        Te.length > 0 &&
          (T = `
【世界书/世界观】（评论者可从以下设定中出现的人物中选取 NPC）
${Te.map((W) => {
  const ue = Array.isArray(W.entries)
    ? W.entries.map(
        (re) =>
          `  - ${re.title || "条目"}: ${(re.content || "").slice(0, 300)}`,
      ).join(`
`)
    : "";
  return `《${W.title || "世界观"}》${W.description ? `(${W.description})` : ""}:
${ue}`;
}).join(`

`)}
`);
      }
    } catch {}
    const I = `请完成两件事，只输出一个 JSON 对象，不要 markdown、不要代码块标记、不要任何其它文字。

【任务一】以角色「${t.name}」的身份发布一条朋友圈。
当前时间：${x}。
【角色人设（完整片段，用于判断亲友是否在世，勿跳过）】
${(t.setting || "无").slice(0, m)}
【用户/绑定人设】${v} ${(y.settings || "").slice(0, h)}
【最近聊天】${S || "（无）"}
${N}${_}
要求：内容简短、有网感、严禁油腻和 emoji。配图规则：${C}
若角色母语非中文，文案用双语：先母语再换行 [TRANSLATION:中文]。中文角色直接写中文。
若当前时间不适合发（如睡觉时段），则只输出 {"skip":true}，不要其它字段。

【任务二】若未 skip，必须为该条朋友圈生成 ${M} 条 NPC 评论（不可省略，不可为空数组）。
评论者**只能**来自：上述人设原文、最近聊天、今日行踪、世界书中**已出现且可确认仍在世**的人物。**禁止**捏造原文没有的名字；人设写明已去世/不存在的亲属（如父亲已故）**禁止**再以该身份评论。**禁止**使用联系人列表里的人、**禁止**使用用户「${v}」或代替用户发言。排除：${E || "（无）"}、${v}。
【今日行踪】${j || "（无）"}${T}
评论须符合各 NPC 在人设中的关系与口吻，严禁 emoji。

【输出格式】若不 skip，必须且仅输出一个 JSON（npcComments 必填，至少 2 条）：
{"content":"主文案（去掉配图与TRANSLATION标记后的纯文案）","imageDescriptions":null 或 ["描述1","描述2",...],"translation":null 或 "中文翻译","npcComments":[{"user":"NPC名字","text":"评论内容","persona":"简短人设"},{"user":"NPC名字2","text":"评论内容2","persona":"简短人设2"},...]}
若 skip 则只输出：{"skip":true}`;
    if (!(c != null && c.key)) return;
    const L = `moment_npc_${Date.now()}`,
      B = Date.now();
    d({
      id: L,
      timestamp: B,
      type: "request",
      scene: "moment_post_with_npc_comments",
      contact: t.nickname || t.name,
      messages: [{ role: "user", content: I }],
      status: "pending",
    });
    let F = "";
    try {
      const Te = await (
        await fetch(Qo(c.endpoint), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${c.key}`,
          },
          body: JSON.stringify({
            model: c.model || "gpt-3.5-turbo",
            messages: [{ role: "user", content: I }],
            temperature: 0.7,
            max_tokens: 1500,
          }),
        })
      ).json();
      if (
        ((F = (
          ((pe =
            (ce = (U = Te.choices) == null ? void 0 : U[0]) == null
              ? void 0
              : ce.message) == null
            ? void 0
            : pe.content) || ""
        ).trim()),
        Te.error)
      )
        throw new Error(
          Te.error.message || Te.error.msg || JSON.stringify(Te.error),
        );
    } catch (se) {
      d({
        id: L,
        status: "error",
        duration: Date.now() - B,
        error: (se == null ? void 0 : se.message) ?? String(se),
      });
      return;
    }
    const D = (se) =>
      (se || "")
        .replace(
          /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
          "",
        )
        .trim();
    let $ = null,
      P = null;
    const z = F.match(/```(?:json)?\s*([\s\S]*?)```/);
    if ((z && (P = z[1].trim()), !P)) {
      const se = F.match(/\{[\s\S]*\}/);
      se && (P = se[0]);
    }
    if (P)
      try {
        $ = JSON.parse(P);
      } catch {
        $ = null;
      }
    if (!$ || $.skip) {
      d({
        id: L,
        status: "success",
        duration: Date.now() - B,
        response: "SKIP",
      });
      return;
    }
    let O = D($.content || "") || ($.content || "").trim();
    if (!O) {
      d({
        id: L,
        status: "success",
        duration: Date.now() - B,
        response: "解析无正文，未发圈",
      });
      return;
    }
    const Z = Array.isArray($.imageDescriptions) ? $.imageDescriptions : [],
      K =
        $.translation && typeof $.translation == "string"
          ? $.translation.trim()
          : null,
      q = (se) =>
        (se || "")
          .replace(
            /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
            "",
          )
          .trim(),
      V = Array.isArray($.npcComments) ? $.npcComments : [],
      ne = (se) =>
        se && se.user != null
          ? typeof se.user == "string"
            ? se.user
            : se.user.name || ""
          : "";
    let le = Km(
      V.map((se) => ({ ...se, user: ne(se) })),
      { contacts: i, posterContact: t, roleBoundUser: y, appUser: f },
    )
      .slice(0, M)
      .map((se) => {
        var W;
        const Te = q(se.text || "") || se.text || "",
          ke = (
            typeof se.user == "string"
              ? se.user
              : ((W = se.user) == null ? void 0 : W.name) || ""
          ).trim();
        return ke
          ? {
              id: Date.now() + Math.random(),
              user: ke,
              text: Te,
              content: Te,
              replyTo: null,
              timestamp: Date.now() - Math.random() * 6e4,
              npcPersona: se.persona || "",
            }
          : null;
      })
      .filter(Boolean);
    t != null && t.id && o && (le = await gv(t.id, o, le));
    const ie = Date.now(),
      X = {
        id: ie,
        user: { name: t.nickname || t.name, avatar: t.avatar },
        content: O,
        translation: K || void 0,
        image: null,
        imageDescriptions: Z.length ? Z : void 0,
        likes: 0,
        comments: le,
        timestamp: ie,
        time: "刚刚",
        isLiked: !1,
        roleContactId: t.id,
        anchorContactId: t.id,
        momentOwnerType: "contact",
      };
    (u((se) => [X, ...se]),
      d({
        id: L,
        status: "success",
        duration: Date.now() - B,
        response: `发圈 + ${le.length} 条 NPC 评论`,
      }),
      Math.random() < 0.4 && p(t, y, n.traceAndPlanContext).catch(() => {}));
  },
  SF = {
    contacts: [],
    contactsPublic: [],
    chats: [],
    user: {},
    userPresets: [],
    setUser: () => {},
    callApi: () => Promise.resolve(null),
    getRoleBoundUser: () => ({}),
    themeCss: "",
    setThemeCss: () => {},
    globalCss: "",
    setGlobalCss: () => {},
    profileTheme: "default",
    setProfileTheme: () => {},
    nightMode: !1,
    setNightMode: () => {},
    chatAppUserFontEnabled: !1,
    setChatAppUserFontEnabled: () => {},
    chatAppUserFontPx: 16,
    setChatAppUserFontPx: () => {},
    beautifyCustomPresets: [],
    setBeautifyCustomPresets: () => {},
    beautifyCustomActiveId: null,
    setBeautifyCustomActiveId: () => {},
    beautifyCustomListCss: "",
    beautifyCustomProfileCss: "",
    isBeautifyCustomLoaded: !1,
    apiConfig: {},
    moments: [],
    triggerAiReply: () => {},
    sendMessage: () => {},
    createChat: () => {},
    createGroupChat: () => null,
    deleteChat: () => {},
    presets: [],
    activeChatId: null,
    setActiveChatId: () => {},
    playTTS: () => {},
    stopTTS: () => {},
    unlockAudio: () => {},
    apiLogs: [],
    clearApiLogs: () => {},
    addApiLog: () => {},
    ttsLogs: [],
    clearTtsLogs: () => {},
    callState: null,
    phoneRecents: [],
    phoneCallState: {
      status: "idle",
      contactId: null,
      phoneNumber: "",
      startTime: null,
      rejectionReason: null,
      rejectionActivity: null,
      currentMessages: [],
      apiError: null,
      callOrigin: null,
    },
    setPhoneCallState: () => {},
    startPhoneCall: () => {},
    endPhoneCall: () => {},
    handlePhoneInteraction: () => {},
    regeneratePhoneReply: () => !1,
    retryLastPhoneModelRound: () => {},
    regeneratePhoneRecentSummary: () => Promise.resolve(null),
    savePhoneRecentSummary: () => {},
    setPhoneRecentSummaryBinding: () => {},
    startVideoCall: () => {},
    acceptVideoCall: () => {},
    rejectVideoCall: () => {},
    endVideoCall: () => {},
    summarizeCallRecord: () => Promise.resolve(null),
    addMemberToVideoCall: () => {},
    appendVideoCallEcho: () => {},
    consumePlaybackQueue: () => null,
    sendSingleVideoCallMessage: () => Promise.resolve(),
    deleteMessages: () => {},
    updateContact: () => {},
    handleCoupleAvatarAccept: () => {},
    handleCoupleAvatarReject: () => {},
    injectOpeningLines: () => {},
    startWithOpening: () => {},
    addTimeAdvanceMessage: () => {},
    runTraceUpdateWhenOpened: () => {},
    setNotification: () => {},
    listenTogetherState: null,
    startListenTogether: () => {},
    endListenTogether: () => {},
    groupReplyInProgress: new Set(),
    getSpace: () => null,
    favorites: [],
    addFavorite: () => {},
    addFavorites: () => {},
    removeFavorite: () => {},
    blockedPhoneCallPopup: null,
    finalizePhoneInviteAcceptBusyOthers: () => {},
    addBlockedPhoneCallInvite: () => null,
    dismissBlockedPhoneCallPopup: () => {},
    rejectBlockedPhoneCallInvite: () => {},
    scheduleBlockedInvitePhoneFollowUps: () => {},
    scheduleProactiveVoiceInvitePickup: () => {},
    onInboundVoiceCallConnected: () => {},
    blockedInviteRingtoneKey: "default",
    setBlockedInviteRingtoneKey: () => {},
    startBlockedInviteRing: () => {},
    stopBlockedInviteRing: () => {},
    deductFromWallet: () => {
      throw new Error("钱包不可用");
    },
    addToWallet: () => {
      throw new Error("钱包不可用");
    },
  },
  _F = ["food", "shopping", "transport", "entertainment", "others"];
function mS(t) {
  const s = t.direction === "income" ? "income" : "expense",
    n = ["user", "ai", "both"].includes(t.payer) ? t.payer : "user";
  return {
    ...t,
    direction: s,
    payer: n,
    amount: Number(t.amount) || 0,
    createdAt: t.createdAt ?? t.date ?? Date.now(),
    updatedAt: t.updatedAt ?? t.date ?? Date.now(),
  };
}
function pS(t, s) {
  var n;
  return (n = t == null ? void 0 : t.messages) != null && n.length
    ? t.messages.filter((a) => {
        const r = a.timestamp;
        if (r == null) return !1;
        const i = new Date(r);
        if (isNaN(i.getTime()) || (a.type && a.type !== "text")) return !1;
        const o = a.text ?? a.content;
        return !o || typeof o != "string" || !o.trim()
          ? !1
          : i.toLocaleDateString() === s;
      })
    : [];
}
function e1(t) {
  const s = (t || "").trim(),
    n = /^(\d{1,2}):(\d{2})$/.exec(s);
  if (!n) return null;
  const a = Number(n[1]),
    r = Number(n[2]);
  return !Number.isFinite(a) ||
    !Number.isFinite(r) ||
    a < 0 ||
    a > 23 ||
    r < 0 ||
    r > 59
    ? null
    : { h: a, m: r };
}
function AF(t, s) {
  if (t == null || !Number.isFinite(Number(s)) || Number(s) <= 0) return !1;
  const n = new Date(t);
  if (isNaN(n.getTime())) return !1;
  n.setHours(0, 0, 0, 0);
  const a = new Date();
  a.setHours(0, 0, 0, 0);
  const r = Math.round((a.getTime() - n.getTime()) / 864e5);
  return r >= 0 && r < Number(s);
}
function bv(t) {
  const s = new Date(t);
  return isNaN(s.getTime())
    ? ""
    : (s.setHours(12, 0, 0, 0), s.toLocaleDateString());
}
const xS = new Set([
    "success",
    "skipped_no_chat",
    "skipped_existing",
    "failed",
  ]),
  hS = new Set(["success", "failed", "skipped_no_chat"]),
  Vh = 4 * 60 * 1e3,
  ih = "couple_ledger_data_updated",
  nd = "couple_ledger_challenge_sync",
  oh = "couple_memo_data_updated",
  t1 = "couple_memo_schedule_changed",
  lh = "couple_memo_comment_queue_changed",
  Su = (t) => `couple_memo_entries_${t}`,
  yv = (t) => `couple_memo_ai_schedule_${t}`,
  gS = (t) => `couple_memo_ai_done_${t}`;
function CF(t = new Date()) {
  const s = t.getMonth() + 1,
    n = t.getDate();
  return `${s}月${n}日`;
}
function MF(t = new Date()) {
  return t.toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1,
  });
}
const mm = (t, s) => `phone_app_trace_today_${t}_${s}`,
  TF = (t, s) => `phone_app_plan_${t}_${s}`,
  zw = (t) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
function s1(t) {
  if (!t || typeof t != "string") return t;
  let s = t.trim();
  for (let n = 0; n < 4; n++) {
    const a = s
      .replace(
        /^[\s\u200b]*[（(]\s*你发送了聊天记录卡片\s*[:：]\s*[^）)]*[）)](?:\s*，\s*纯文字摘要)?[\s\u200b]*/u,
        "",
      )
      .replace(
        /^[\s\u200b]*[（(]\s*你发送了聊天记录\s*[:：]\s*[^）)]*[）)]\s*/u,
        "",
      )
      .replace(
        /^[\s\u200b]*[（(]\s*用户发送了聊天记录卡片\s*[:：]\s*[^）)]*[）)]\s*/u,
        "",
      )
      .trim();
    if (a === s) break;
    s = a;
  }
  return s;
}
function Xc() {
  return {
    friendName: "朋友",
    groupName: null,
    messages: [
      { sender: "role", text: "（聊天记录生成失败，请稍后再试）" },
      { sender: "friend", text: "…" },
    ],
  };
}
function bS(t) {
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
  for (let h = n; h < s.length; h++)
    if ((s[h] === "{" && a++, s[h] === "}" && (a--, a === 0))) {
      r = h;
      break;
    }
  const i = r !== -1 ? s.slice(n, r + 1) : s;
  let o;
  try {
    o = JSON.parse(i);
  } catch {
    return null;
  }
  const c = o.friendName ?? o.friend_name ?? o.name ?? null,
    d = o.groupName ?? o.group_name ?? null,
    u = o.messages ?? o.chat ?? o.dialog ?? [];
  if (!Array.isArray(u)) return null;
  const f = /\[(MEME|VOICE|REPLY|语音|引用|表情包)[^\]]*\]|\[图片[^\]]*\]/i,
    p = u
      .filter((h) => h && (h.text || h.content))
      .map((h) => {
        let g = String(h.text ?? h.content ?? "").trim();
        if (f.test(g)) return null;
        let x = (h.sender ?? h.role ?? h.speaker ?? "")
          .toString()
          .toLowerCase();
        return (
          x === "friend" || x === "朋友" || x === "friendname"
            ? (x = "friend")
            : x === "role" || x === "角色" || x === "me"
              ? (x = "role")
              : (x = x || "friend"),
          { sender: x === "role" ? "role" : "friend", text: g }
        );
      })
      .filter((h) => h && h.text.length > 0),
    m = d ? String(d) : c ? String(c) : "朋友";
  return p.length > 0
    ? { friendName: m, groupName: d ? String(d) : null, messages: p }
    : null;
}
function yS(t, s) {
  const n =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "角色",
    a = ((t == null ? void 0 : t.setting) || "无").slice(0, 400),
    r = (s == null ? void 0 : s.name) || "用户",
    i = ((s == null ? void 0 : s.settings) || "无").slice(0, 300);
  return `【任务】生成一段「角色与某位朋友或某个群的聊天记录」，用于角色转发给用户看。

【角色】${n}
【角色人设】${a}
【绑定用户人设】（用户是 ${r}，非本对话中的朋友）${i}

要求：
1. 二选一：要么与一位 NPC 朋友私聊（同事、室友、家人、同学等，不能是 ${r}），要么与一个群聊。私聊时 friendName 为具体人名或称呼（如小明、室友、阿华、李姐、老王），严禁只写「朋友」；群聊时 groupName 为群名（如家人群、部门群、宿舍群），且不填 friendName 或 friendName 可为空。
2. 生成 4～10 条简短对话，自然口语化，符合人设。
3. 每条消息必须是纯文字，严禁 emoji、表情包、语音、引用。只允许 "sender"+"text" 的普通对话。
4. 只返回一个 JSON 对象，不要 markdown 代码块。
私聊格式：{"friendName":"具体名字","messages":[{"sender":"role","text":"角色说的话"},{"sender":"friend","text":"朋友说的话"},...]}
群聊格式：{"groupName":"群名","messages":[{"sender":"role","text":"..."},{"sender":"friend","text":"..."},...]}`;
}
async function IF(t, s, n) {
  var i, o, c;
  if (!(n != null && n.key) || !t) return Xc();
  const a = Qo(n.endpoint);
  if (!a) return Xc();
  const r = yS(t, s);
  try {
    const d = await fetch(a, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${n.key}`,
      },
      body: JSON.stringify({
        model: n.model || "gpt-3.5-turbo",
        messages: [{ role: "user", content: r }],
        temperature: 0.8,
        max_tokens: 600,
      }),
    });
    let u;
    try {
      u = await d.json();
    } catch {
      return Xc();
    }
    if (!d.ok || u.error) return Xc();
    const f = (
      ((c =
        (o = (i = u.choices) == null ? void 0 : i[0]) == null
          ? void 0
          : o.message) == null
        ? void 0
        : c.content) ?? ""
    ).trim();
    return bS(f) || Xc();
  } catch {
    return Xc();
  }
}
async function EF(t, s, n = {}) {
  const {
      chats: a = [],
      contacts: r = [],
      callStateRef: i,
      asyncStorage: o,
      setMoments: c,
      setUnreadMoments: d,
      getRoleBoundUser: u,
      generateNpcComments: f,
      notificationTimerRef: p,
      setNotification: m,
      systemNotificationEnabled: h,
      sendSystemNotification: g,
      moments: x = [],
      appUser: y = {},
    } = n,
    v = new Date().toISOString();
  let b = (s || "")
    .replace(/\[\s*系统时间标记\s*[^\]]*\]\s*/g, "")
    .replace(
      /\[SYSTEM_TIME_ONLY_勿输出\][\s\S]*?\[\/SYSTEM_TIME_ONLY_勿输出\]\s*/g,
      "",
    )
    .replace(/\[\/语音\]?/g, "[/VOICE]")
    .replace(/\[?语音\]/g, "[VOICE]")
    .replace(
      /\[转账[：:](\d+(?:\.\d+)?)(?:[：:]([^\]]*))?\]/g,
      (E, S, j) => `[TRANSFER:${S}:${j || ""}]`,
    )
    .replace(/^\[TRANS[：:]\s*/, "")
    .trim();
  b.endsWith(" ]") && (b = b.slice(0, -2).trim());
  const N = a.find((E) => E.id === t),
    w = N == null ? void 0 : N.contactId;
  if (
    w &&
    o &&
    typeof b == "string" &&
    b.includes("[COUPLE_MEMO_COMMENT_JSON]")
  ) {
    const E = `couple_memo_ai_comment_inflight_${w}`,
      S = Su(w),
      j = `couple_memo_ai_comment_pending_${w}`,
      T = `couple_memo_ai_comment_retry_limit_${w}`,
      I = `couple_memo_ai_comment_retry_${w}`,
      L = async (F) => {
        const D = Array.isArray(F) ? F : [];
        if (D.length === 0) return;
        const $ = await o.get(T, 2),
          P = Number.isFinite(Number($))
            ? Math.max(0, Math.min(10, Math.floor(Number($))))
            : 2,
          z = await o.get(I, {}),
          O = z && typeof z == "object" ? z : {},
          Z = await o.get(j, []),
          K = Array.isArray(Z) ? Z : [],
          q = { ...O },
          V = new Set();
        for (const le of D) {
          const ie = String(le),
            je =
              (Number.isFinite(Number(q == null ? void 0 : q[ie]))
                ? Number(q[ie])
                : 0) + 1;
          ((q[ie] = je), (P <= 0 || je >= P) && V.add(ie));
        }
        const ne = K.filter((le) => !V.has(String(le)));
        (await o.set(I, q), await o.set(j, ne));
      },
      B = b.match(
        /\[COUPLE_MEMO_COMMENT_JSON\]([\s\S]*?)\[\/COUPLE_MEMO_COMMENT_END\]/,
      );
    if (B) {
      const F = String(B[1] || "").trim();
      try {
        const D = JSON.parse(F || "{}"),
          $ = Array.isArray(D == null ? void 0 : D.comments) ? D.comments : [],
          P = await o.get(E, null),
          z = Array.isArray(P == null ? void 0 : P.memoIds)
            ? P.memoIds.map(String)
            : [],
          O = new Set(z);
        if ($.length > 0 && O.size > 0) {
          const Z = await o.get(S, []),
            K = Array.isArray(Z) ? Z : [],
            q = new Map(K.map((R) => [String(R.id), R])),
            V = new Date(),
            ne = "今天",
            le = V.toLocaleTimeString("zh-CN", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            ie = (R) => (R === "private" ? "private" : "daily"),
            X = (R) => {
              const oe = Number(R);
              return Number.isFinite(oe)
                ? Math.max(1, Math.min(5, Math.floor(oe)))
                : 3;
            },
            je = [];
          for (let R = 0; R < $.length; R++) {
            const oe = $[R],
              ee = oe == null ? void 0 : oe.targetMemoId;
            if (ee == null || !O.has(String(ee))) continue;
            const H = q.get(String(ee));
            if (!H || H.author !== "me") continue;
            const Y = ie(oe == null ? void 0 : oe.type),
              U =
                Y === "private"
                  ? X(oe == null ? void 0 : oe.privacyLevel)
                  : void 0,
              ce =
                String((oe == null ? void 0 : oe.title) || "").trim() || "留言",
              pe = String((oe == null ? void 0 : oe.content) || "").trim();
            pe &&
              je.push({
                id: `${Date.now()}-memo_comment-${R}-${Math.random().toString(36).slice(2, 8)}`,
                serial: `留言.${String(K.length + R + 1).padStart(3, "0")}`,
                author: "ta",
                type: Y,
                privacyLevel: U,
                date: ne,
                time: le,
                title: ce,
                content: pe,
                source: "ai_comment",
                replyToMemoId: String(ee),
                createdAt: Date.now(),
                updatedAt: Date.now(),
              });
          }
          const xe = new Set(je.map((R) => String(R.replyToMemoId))),
            ye = z.filter((R) => !xe.has(String(R)));
          if (je.length > 0) {
            const R = [...je, ...K];
            await o.set(S, R);
            const oe = await o.get(j, []),
              H = (Array.isArray(oe) ? oe : []).filter(
                (Y) => !xe.has(String(Y)),
              );
            await o.set(j, H);
            try {
              const Y = await o.get(I, {}),
                ce = { ...(Y && typeof Y == "object" ? Y : {}) };
              for (const pe of xe) delete ce[String(pe)];
              await o.set(I, ce);
            } catch {}
            window.dispatchEvent(
              new CustomEvent(oh, { detail: { contactId: w, entriesKey: S } }),
            );
          }
          (ye.length > 0 && (await L(ye)), await o.remove(E));
        }
      } catch {
        try {
          (Array.isArray(inflightMemoIds) &&
            inflightMemoIds.length > 0 &&
            (await L(inflightMemoIds)),
            await o.remove(E));
        } catch {}
      }
      b = b.replace(B[0], "").trim();
    }
  }
  if (b.includes("[DOUYIN_ACCEPT_FRIEND]")) {
    b = b.replace(/\s*\[DOUYIN_ACCEPT_FRIEND\]\s*/g, "").trim();
    const E = a.find((S) => S.id === t);
    if (E != null && E.contactId && o) {
      const S = "douyin_chat_accept_friends",
        j = await o.get(S).then((T) => (Array.isArray(T) ? T : []));
      j.some((T) => T.contactId === E.contactId) ||
        (await o.set(S, [
          ...j,
          { contactId: E.contactId, timestamp: Date.now() },
        ]));
    }
  }
  const _ = [],
    A = i == null ? void 0 : i.current;
  (A == null ? void 0 : A.status) === "connected" &&
    b &&
    (b = b
      .replace(/\[MEME:[^\]]*\]/g, "")
      .replace(/\[IMAGE:[^\]]*\]/g, "")
      .replace(/\[[^\]]*发送了文字[^\]]*\]/g, "")
      .replace(/\[图片[^\]]*\]/g, "")
      .trim());
  const C = /\[POST_MOMENT[:：]((?:\[TRANSLATION:[^\]]*\]|[\s\S])*?)\]/,
    M = s.match(C);
  if (M) {
    let S =
      ((O) =>
        (O || "")
          .replace(
            /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
            "",
          )
          .trim())(
        M[1]
          .replace(/\｜\｜/g, " ")
          .replace(/\|\|/g, " ")
          .trim(),
      ) ||
      M[1]
        .replace(/\｜\｜/g, " ")
        .replace(/\|\|/g, " ")
        .trim();
    /^图片\.?$/i.test(S) && (S = "（配图）");
    let j = [],
      T = null;
    const I = /[（(]配图(\d*)[：:]\s*([^）)]+)[）)]/g;
    let L;
    const B = [];
    for (; (L = I.exec(S)) !== null; )
      B.push({ idx: L[1] ? parseInt(L[1], 10) : 1, desc: L[2].trim() });
    if (B.length === 0) {
      const O = /配图(\d*)[；;：:]\s*([^\n]+)/g;
      for (; (L = O.exec(S)) !== null; ) {
        const Z = L[1] ? parseInt(L[1], 10) : 1;
        B.push({ idx: Number.isNaN(Z) ? B.length + 1 : Z, desc: L[2].trim() });
      }
    }
    B.length > 0 &&
      (B.sort((O, Z) => O.idx - Z.idx),
      (j = B.slice(0, 9).map((O) => O.desc)),
      (S = S.replace(/[（(]配图\d*[：:][^）)]+[）)]/g, "")
        .replace(/配图\d*[；;：:][^\n]+/g, "")
        .replace(
          /\n{2,}/g,
          `
`,
        )
        .trim()));
    const F = S.match(/\n?\[TRANSLATION[：:]\s*([^\]]+)\]\s*$/);
    if (F) {
      const O = F[1].trim();
      ((T = Jo(O) ? O : "（译文不可用）"),
        (S = S.replace(/\n?\[TRANSLATION[：:][^\]]+\]\s*$/, "").trim()));
    }
    const D = a.find((O) => O.id === t),
      $ = D ? r.find((O) => O.id === D.contactId) : null;
    let P = [];
    const z = s.match(
      /\[MOMENT_NPC_COMMENTS_JSON\]\s*([\s\S]*?)\s*\[MOMENT_NPC_COMMENTS_END\]/,
    );
    if (z)
      try {
        const O = JSON.parse(z[1].trim()),
          Z = Array.isArray(O == null ? void 0 : O.comments) ? O.comments : [],
          K = (u == null ? void 0 : u($)) ?? {},
          q = (le) =>
            (le || "")
              .replace(
                /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
                "",
              )
              .trim(),
          V = (le) =>
            le && le.user != null
              ? typeof le.user == "string"
                ? le.user
                : le.user.name || ""
              : "";
        P = Km(
          Z.map((le) => ({ ...le, user: V(le) })),
          { contacts: r || [], posterContact: $, roleBoundUser: K, appUser: y },
        )
          .slice(0, 5)
          .map((le) => {
            var X;
            const ie = (
              typeof le.user == "string"
                ? le.user
                : ((X = le.user) == null ? void 0 : X.name) || ""
            ).trim();
            return ie
              ? {
                  id: Date.now() + Math.random(),
                  user: ie,
                  text: q(le.text || "") || le.text || "",
                  content: q(le.text || "") || le.text || "",
                  replyTo: null,
                  timestamp: Date.now() - Math.random() * 6e4,
                  npcPersona: le.persona || "",
                }
              : null;
          })
          .filter(Boolean);
      } catch {}
    if ($ && c && d) {
      const O = {
        id: Date.now(),
        user: { name: $.nickname || $.name, avatar: $.avatar },
        content: S,
        image: null,
        ...(T && { translation: T }),
        ...(j.length && { imageDescriptions: j }),
        likes: 0,
        comments: P,
        timestamp: Date.now(),
        time: "刚刚",
        isLiked: !1,
        roleContactId: $.id,
        anchorContactId: $.id,
        momentOwnerType: "contact",
      };
      if ((c((K) => [O, ...K]), d(!0), P.length === 0 && f)) {
        const K = S + (j.length ? ` (配图：${j.join("；")})` : ""),
          q = (u == null ? void 0 : u($)) ?? {},
          V = ((D == null ? void 0 : D.messages) || []).slice(-15),
          ne = zw(new Date()),
          le = o ? await o.get(mm($.id, ne), null) : null;
        f(O.id, $, K, {
          roleBoundUser: q,
          recentMessages: V,
          traceToday: le,
          userName:
            q.realName ||
            q.name ||
            (y == null ? void 0 : y.realName) ||
            (y == null ? void 0 : y.name) ||
            "用户",
          userDisplayForPrompt:
            q.realName ||
            q.name ||
            (y == null ? void 0 : y.realName) ||
            (y == null ? void 0 : y.name) ||
            "用户",
        }).catch(() => {});
      }
      p != null && p.current && clearTimeout(p.current);
      const Z = `${$.nickname || $.name} 发了一条朋友圈`;
      (m &&
        m({
          id: Date.now(),
          chatId: D.id,
          user: { name: $.nickname || $.name, avatar: $.avatar },
          message: Z,
        }),
        h && g && g($.nickname || $.name, Z, $.avatar),
        p &&
          (p.current = setTimeout(() => {
            (m && m(null), p && (p.current = null));
          }, 3e3)));
    }
    ((b = b.replace(C, "").trim()),
      (b = b
        .replace(
          /\[MOMENT_NPC_COMMENTS_JSON\]\s*[\s\S]*?\s*\[MOMENT_NPC_COMMENTS_END\]/g,
          "",
        )
        .trim()));
  } else {
    const E = s.match(/配图\d*[；;：:]/g);
    if (E && E.length >= 2) {
      let j = ((B) =>
        (B || "")
          .replace(
            /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
            "",
          )
          .trim())(
        s
          .replace(/\｜\｜/g, " ")
          .replace(/\|\|/g, " ")
          .trim(),
      );
      const T = [],
        I = /配图(\d*)[；;：:]\s*([^\n]+)/g;
      let L;
      for (; (L = I.exec(j)) !== null; ) {
        const B = L[1] ? parseInt(L[1], 10) : 1;
        T.push({ idx: Number.isNaN(B) ? T.length + 1 : B, desc: L[2].trim() });
      }
      if (T.length > 0) {
        T.sort((z, O) => z.idx - O.idx);
        const B = T.slice(0, 9).map((z) => z.desc);
        j =
          j
            .replace(/配图\d*[；;：:][^\n]+/g, "")
            .replace(
              /\n{2,}/g,
              `
`,
            )
            .trim() || "（配图）";
        const F = a.find((z) => z.id === t),
          D = F ? r.find((z) => z.id === F.contactId) : null;
        let $ = [];
        const P = s.match(
          /\[MOMENT_NPC_COMMENTS_JSON\]\s*([\s\S]*?)\s*\[MOMENT_NPC_COMMENTS_END\]/,
        );
        if (P)
          try {
            const z = JSON.parse(P[1].trim()),
              O = Array.isArray(z == null ? void 0 : z.comments)
                ? z.comments
                : [],
              Z = (u == null ? void 0 : u(D)) ?? {},
              K = (ne) =>
                (ne || "")
                  .replace(
                    /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
                    "",
                  )
                  .trim(),
              q = (ne) =>
                ne && ne.user != null
                  ? typeof ne.user == "string"
                    ? ne.user
                    : ne.user.name || ""
                  : "";
            $ = Km(
              O.map((ne) => ({ ...ne, user: q(ne) })),
              {
                contacts: r || [],
                posterContact: D,
                roleBoundUser: Z,
                appUser: y,
              },
            )
              .slice(0, 5)
              .map((ne) => {
                var ie;
                const le = (
                  typeof ne.user == "string"
                    ? ne.user
                    : ((ie = ne.user) == null ? void 0 : ie.name) || ""
                ).trim();
                return le
                  ? {
                      id: Date.now() + Math.random(),
                      user: le,
                      text: K(ne.text || "") || ne.text || "",
                      content: K(ne.text || "") || ne.text || "",
                      replyTo: null,
                      timestamp: Date.now() - Math.random() * 6e4,
                      npcPersona: ne.persona || "",
                    }
                  : null;
              })
              .filter(Boolean);
          } catch {}
        if (D && c && d) {
          const z = {
            id: Date.now(),
            user: { name: D.nickname || D.name, avatar: D.avatar },
            content: j,
            image: null,
            ...(B.length && { imageDescriptions: B }),
            likes: 0,
            comments: $,
            timestamp: Date.now(),
            time: "刚刚",
            isLiked: !1,
            roleContactId: D.id,
            anchorContactId: D.id,
            momentOwnerType: "contact",
          };
          if ((c((O) => [z, ...O]), d(!0), $.length === 0 && f)) {
            const O = j + (B.length ? ` (配图：${B.join("；")})` : ""),
              Z = (u == null ? void 0 : u(D)) ?? {},
              K = ((F == null ? void 0 : F.messages) || []).slice(-15),
              q = zw(new Date()),
              V = o ? await o.get(mm(D.id, q), null) : null;
            f(z.id, D, O, {
              roleBoundUser: Z,
              recentMessages: K,
              traceToday: V,
              userName:
                Z.realName ||
                Z.name ||
                (y == null ? void 0 : y.realName) ||
                (y == null ? void 0 : y.name) ||
                "用户",
              userDisplayForPrompt:
                Z.realName ||
                Z.name ||
                (y == null ? void 0 : y.realName) ||
                (y == null ? void 0 : y.name) ||
                "用户",
            }).catch(() => {});
          }
          (p != null && p.current && clearTimeout(p.current),
            m &&
              m({
                id: Date.now(),
                chatId: F.id,
                user: { name: D.nickname || D.name, avatar: D.avatar },
                message: `${D.nickname || D.name} 发了一条朋友圈`,
              }),
            h &&
              g &&
              g(
                D.nickname || D.name,
                `${D.nickname || D.name} 发了一条朋友圈`,
                D.avatar,
              ),
            p &&
              (p.current = setTimeout(() => {
                (m && m(null), p && (p.current = null));
              }, 3e3)),
            (b = `${D.nickname || D.name} 发了一条朋友圈`));
        }
      }
    }
  }
  if (b.includes("[DELETE_LAST_MOMENT]")) {
    const E = a.find((j) => j.id === t),
      S = E ? r.find((j) => j.id === E.contactId) : null;
    if (S) {
      const j = x.find((T) => T.user.name === (S.nickname || S.name));
      j &&
        c &&
        (c((T) => T.filter((I) => I.id !== j.id)),
        _.push({
          id: Date.now().toString() + "-sys",
          type: "system_delete_moment",
          text: "对方删除了一条朋友圈",
          moment: j,
          timestamp: v,
        }));
    }
    b = b.replace("[DELETE_LAST_MOMENT]", "").trim();
  }
  return { cleanText: b, newMessagesToAdd: _ };
}
let zg = 0;
function sr(t = "msg") {
  if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
    return `${t}-${crypto.randomUUID()}`;
  zg = (zg + 1) % 1e6;
  const s = Date.now().toString(36),
    n = Math.random().toString(36).slice(2, 10);
  return `${t}-${s}-${zg.toString(36)}-${n}`;
}
async function LF(t, s, n, a = {}) {
  var B, F, D, $;
  if (!/[\[［]\s*FORWARD_CHAT_CARD\b/i.test(s)) return s;
  const {
    chatsRef: i,
    contactsRef: o,
    getRoleBoundUser: c,
    lastUserMessageText: d,
    timestamp: u,
    callApiRef: f,
    apiConfigRef: p,
    prependForwardCardPayload: m,
  } = a;
  if (m != null && m.cardMessage) {
    const P = s
      .replace(/[\[［]FORWARD_CHAT_CARD(?::[^\]］]*)?[\]］]/g, "")
      .trim();
    return s1(P);
  }
  const h = (i == null ? void 0 : i.current) || [],
    g = (o == null ? void 0 : o.current) || [],
    x = h.find((P) => P.id === t),
    y = g.find((P) => P.id === (x == null ? void 0 : x.contactId)),
    v = s.match(/[\[［]FORWARD_CHAT_CARD(?::([^\]］]*))?[\]］]/),
    b = v ? (v[1] || "").trim() : "",
    N = y ? ((c == null ? void 0 : c(y)) ?? {}) : {},
    w = (N == null ? void 0 : N.name) || "用户",
    _ =
      d ||
      ((x == null ? void 0 : x.messages) || [])
        .filter((P) => P.sender === "me" && P.text)
        .slice(-3)
        .map((P) => P.text)
        .join(" ");
  let A = null;
  const k =
      _ == null
        ? void 0
        : _.match(
            /(?:我和|跟)([^，。！？\s的]+?)(?:的)?(?:聊天记录|对话|聊天)/,
          ),
    C = _ == null ? void 0 : _.match(/(?:别人|谁谁谁|其他人|别的(?:人|角色))/);
  k ? (A = k[1].trim().replace(/[？?吗呢]/g, "")) : C && (A = "别人");
  const M =
    /(?:我|我的|绑定用户).*?(?:聊天记录|对话|聊天)|(?:你能看到|能看到)?(?:我和|跟).+(?:的)?(?:聊天记录|对话|聊天)/.test(
      _ || "",
    );
  M && !A && (A = "别人");
  const E = M && A !== null && (A.length <= 8 || A === "别人");
  let S = null,
    j = null;
  const T = (y == null ? void 0 : y.boundUserPresetId) ?? "",
    I = (P) => ((P == null ? void 0 : P.boundUserPresetId) ?? "") === T;
  if (y && E) {
    let P = null;
    if (/别人|谁谁谁|其他人|别的(人|角色)/.test(A)) {
      const z = h.filter((O) => {
        var K;
        if (
          O.id === t ||
          !O.contactId ||
          (((K = O.messages) == null ? void 0 : K.length) || 0) < 1
        )
          return !1;
        const Z = g.find((q) => q.id === O.contactId);
        return Z && I(Z);
      });
      if (z.length > 0) {
        const O = z[Math.floor(Math.random() * z.length)];
        P = g.find((Z) => Z.id === O.contactId);
      }
    } else
      P = g.find(
        (z) =>
          z.id !== (x == null ? void 0 : x.contactId) &&
          I(z) &&
          ((z.nickname && z.nickname.includes(A)) ||
            (z.name && z.name.includes(A)) ||
            (A && (z.nickname || z.name || "").includes(A))),
      );
    if (P) {
      const z = h.find((K) => K.contactId === P.id),
        Z = ((z == null ? void 0 : z.messages) || [])
          .filter((K) => {
            var q;
            return (
              K.type === "text" && ((q = K.text) == null ? void 0 : q.trim())
            );
          })
          .slice(-10);
      if (Z.length >= 1) {
        const K = Z.map((V) => ({
            sender: V.sender === "me" ? "friend" : "role",
            text: (V.text || "").trim(),
          })),
          q = P.nickname || P.name || "TA";
        ((S = { friendName: q, groupName: null, messages: K }),
          (j = {
            friendName: q,
            boundUserName: w,
            roleName: q,
            roleAvatar: P.avatar,
          }));
      }
    }
  }
  if (!((B = S == null ? void 0 : S.messages) != null && B.length) && y) {
    const P = f == null ? void 0 : f.current;
    if (P)
      try {
        const O = [{ sender: "me", text: yS(y, N), timestamp: u }],
          Z = await P(O, y, "system_generation", {}, [], [], [], !1, "", N);
        S = bS(Z || "");
      } catch {}
    if (
      !((F = S == null ? void 0 : S.messages) != null && F.length) &&
      (D = p == null ? void 0 : p.current) != null &&
      D.key
    ) {
      const z = await IF(y, N, p.current);
      ($ = z == null ? void 0 : z.messages) != null && $.length && (S = z);
    }
  }
  if (
    ((!((S != null && S.friendName) || (S != null && S.groupName)) ||
      !Array.isArray(S == null ? void 0 : S.messages) ||
      S.messages.length === 0) &&
      (S = Xc()),
    (S.friendName || S.groupName) &&
      Array.isArray(S.messages) &&
      S.messages.length > 0)
  ) {
    const P = S.groupName ? S.groupName : S.friendName;
    n.push({
      id: sr("fwd-chat"),
      type: "forward_chat_card",
      sender: "them",
      timestamp: u,
      text: S.groupName
        ? `[聊天记录] 与${S.groupName}的对话`
        : `[聊天记录] 与${S.friendName}的对话`,
      friendName: P,
      groupName: S.groupName || null,
      messages: S.messages,
      caption: b,
      ...(j && {
        boundUserName: j.boundUserName,
        roleName: j.roleName,
        roleAvatar: j.roleAvatar,
      }),
    });
  }
  const L = s
    .replace(/[\[［]FORWARD_CHAT_CARD(?::[^\]］]*)?[\]］]/g, "")
    .trim();
  return s1(L);
}
const vS = 15e5;
function wS(t) {
  const s = String(t || "");
  if (!s || s.length > vS) return "";
  try {
    return btoa(unescape(encodeURIComponent(s)));
  } catch {
    return "";
  }
}
function DF(t) {
  const s = String(t || "").trim();
  if (!s || s.length > vS) return "";
  try {
    const n = atob(s),
      a = new Uint8Array(n.length);
    for (let r = 0; r < n.length; r++) a[r] = n.charCodeAt(r);
    return new TextDecoder("utf-8").decode(a);
  } catch {
    try {
      return decodeURIComponent(escape(atob(s)));
    } catch {
      return "";
    }
  }
}
function qm(t) {
  const s = String(t || ""),
    n = s.indexOf("{");
  if (n < 0) return null;
  let a = 0,
    r = !1,
    i = !1;
  for (let o = n; o < s.length; o++) {
    const c = s[o];
    if (r) {
      if (i) {
        i = !1;
        continue;
      }
      if (c === "\\") {
        i = !0;
        continue;
      }
      c === '"' && (r = !1);
      continue;
    }
    if (c === '"') {
      r = !0;
      continue;
    }
    if (c === "{") a++;
    else if (c === "}" && (a--, a === 0)) return s.slice(n, o + 1);
  }
  return null;
}
function jS(t) {
  const s = String(t || "").trim();
  if (!s) return null;
  let n = s.replace(/^```(?:json)?\s*/i, "").trim();
  const r = (qm(n) || n.replace(/\s*```\s*$/i, "").trim()).trim();
  if (!r) return null;
  try {
    return JSON.parse(r);
  } catch {
    const o = r.replace(/,(\s*[}\]])/g, "$1");
    try {
      return JSON.parse(o);
    } catch {
      return null;
    }
  }
}
function x0(t, s, n, a) {
  const r = parseFloat(t) || 0,
    i = parseInt(s, 10) || 1,
    o = Array.isArray(a) ? a : [],
    c = i - o.length;
  if (c <= 0) return null;
  const d = o.reduce((m, h) => m + (Number(h.amount) || 0), 0),
    u = Math.round((r - d) * 100) / 100;
  if (u < 0.01) return null;
  if (n === "equal") {
    const m = Math.floor((r / i) * 100) / 100,
      h = Math.round(r * 100) - Math.round(m * 100 * i),
      g = o.length;
    return m + (g < h ? 0.01 : 0);
  }
  if (c === 1) return u;
  const f = 0.01,
    p = Math.round((u - (c - 1) * f) * 100) / 100;
  return p <= f ? f : Math.round((Math.random() * (p - f) + f) * 100) / 100;
}
function h0(t, s, n) {
  var r, i;
  if (s === "me") return null;
  const a = (n || []).find((o) => o.id === s);
  return a
    ? t != null &&
      t.isGroup &&
      (i =
        (r = t == null ? void 0 : t.settings) == null
          ? void 0
          : r.memberTitles) != null &&
      i[s]
      ? t.settings.memberTitles[s]
      : a.nickname || a.remark || a.name || "TA"
    : "TA";
}
function $F(t) {
  const {
      setChats: s,
      setUser: n,
      contactsRef: a,
      chatsRef: r,
      updateMessage: i,
      sendMessageInternal: o,
      deductFromWallet: c,
    } = t,
    d = (g, x, y, v, b, N) => {
      const _ = ((r == null ? void 0 : r.current) ?? []).find(
        (C) => C.id === g,
      );
      if (!(_ != null && _.isGroup)) return;
      const A = parseFloat(x);
      if (!A || A <= 0 || !y || y < 1) return;
      c(A, "发红包", N);
      const k = [];
      o(g, `红包 ¥${A.toFixed(2)} · ${y}个`, null, "red_packet", {
        totalAmount: A,
        count: Number(y),
        mode: v || "equal",
        note: b || "恭喜发财，大吉大利",
        claims: k,
      });
    },
    u = (g, x) => {
      const v = ((r == null ? void 0 : r.current) ?? []).find(
        (S) => S.id === g,
      );
      if (!v) return;
      const b = (v.messages || []).find((S) => S.id === x);
      if (!b || b.type !== "red_packet") return;
      const N = b.claims || [];
      if (N.some((S) => S.sender === "me") || (b.count || 1) - N.length <= 0)
        return;
      const _ = x0(b.totalAmount, b.count, b.mode, N);
      if (_ == null || _ <= 0) return;
      const A = {
        sender: "me",
        amount: _,
        timestamp: new Date().toISOString(),
      };
      i(g, x, { claims: [...N, A] });
      const k = b.contactId || v.contactId,
        C = (a == null ? void 0 : a.current) ?? [],
        M = b.sender === "me" ? "自己" : h0(v, k, C),
        E =
          b.sender === "me"
            ? "[系统提示] 你领取了自己的红包"
            : M
              ? `[系统提示] 你领取了${M}的红包`
              : "[系统提示] 你领取了红包";
      (n((S) => {
        var j, T;
        return {
          ...S,
          wallet: {
            ...S.wallet,
            balance: (((j = S.wallet) == null ? void 0 : j.balance) ?? 0) + _,
            transactions: [
              {
                id: Date.now().toString(),
                type: "income",
                amount: _,
                note: "领取红包",
                timestamp: new Date().toISOString(),
                contactName: M || void 0,
              },
              ...(((T = S.wallet) == null ? void 0 : T.transactions) || []),
            ],
          },
        };
      }),
        o(g, E, null, "system"));
    },
    f = (g, x, y, v) => {
      const N = ((r == null ? void 0 : r.current) ?? []).find(
        (j) => j.id === g,
      );
      if (!N) return;
      const w = (N.messages || []).find((j) => j.id === x);
      if (!w || w.type !== "red_packet") return;
      const _ = w.claims || [];
      if ((w.count || 1) - _.length <= 0) return;
      const k =
        v != null && v > 0
          ? Math.round(v * 100) / 100
          : x0(w.totalAmount, w.count, w.mode, _);
      if (k == null || k <= 0) return;
      const C = { sender: y, amount: k, timestamp: new Date().toISOString() };
      i(g, x, { claims: [..._, C] });
      const M = (a == null ? void 0 : a.current) ?? [],
        E = h0(N, y, M),
        S = E ? `[系统提示] ${E}领取了你的红包` : "[系统提示] TA领取了你的红包";
      o(g, S, null, "system");
    },
    p = (g, x, y) => {
      if (!Array.isArray(y) || y.length === 0) return;
      const b = ((r == null ? void 0 : r.current) ?? []).find(
        (C) => C.id === g,
      );
      if (!b) return;
      const N = (b.messages || []).find((C) => C.id === x);
      if (!N || N.type !== "red_packet") return;
      const w = (a == null ? void 0 : a.current) ?? [];
      let _ = [...(N.claims || [])];
      if ((N.count || 1) - _.length <= 0) return;
      const k = [];
      for (const C of y) {
        if (
          !(C != null && C.contactId) ||
          _.some((S) => S.sender === C.contactId)
        )
          continue;
        if (_.length >= (N.count || 1)) break;
        const M =
          C.amount != null && C.amount > 0
            ? Math.round(C.amount * 100) / 100
            : x0(N.totalAmount, N.count, N.mode, _);
        if (M == null || M <= 0) continue;
        const E = {
          sender: C.contactId,
          amount: M,
          timestamp: new Date().toISOString(),
        };
        ((_ = [..._, E]), k.push({ ...E, contactId: C.contactId }));
      }
      if (k.length !== 0) {
        i(g, x, { claims: _ });
        for (const { contactId: C } of k) {
          const M = h0(b, C, w),
            E = M
              ? `[系统提示] ${M}领取了你的红包`
              : "[系统提示] TA领取了你的红包";
          o(g, E, null, "system");
        }
      }
    },
    m = (g, x, y) => {
      var b, N;
      if (!x) return "TA";
      if (x === "me") return "你";
      const v = (y || []).find((w) => w.id === x);
      return v
        ? g != null &&
          g.isGroup &&
          (N =
            (b = g == null ? void 0 : g.settings) == null
              ? void 0
              : b.memberTitles) != null &&
          N[x]
          ? g.settings.memberTitles[x]
          : v.remark || v.nickname || v.name || "TA"
        : "TA";
    };
  return {
    sendRedPacket: d,
    handleGrabRedPacket: u,
    handleRedPacketGrabByAI: f,
    handleRedPacketGrabsByAIBatch: p,
    handleTransferAction: (g, x, y, v = null) => {
      var B;
      const N = ((r == null ? void 0 : r.current) ?? []).find(
          (F) => F.id === g,
        ),
        w =
          (B = N == null ? void 0 : N.messages) == null
            ? void 0
            : B.find((F) => F.id === x);
      if (!N || !w || w.type !== "transfer" || w.status !== "pending") return;
      const _ = (a == null ? void 0 : a.current) ?? [],
        A =
          w.sender === "me"
            ? "me"
            : w.contactId || (N == null ? void 0 : N.contactId),
        k =
          N != null && N.isGroup
            ? w.targetContactId || "me"
            : w.sender === "me"
              ? w.targetContactId || (N == null ? void 0 : N.contactId)
              : "me",
        C = v || k,
        M = C === "me",
        E = A === "me";
      if (
        (N != null && N.isGroup && !v && k && k !== "me") ||
        (N != null &&
          N.isGroup &&
          C &&
          C !== "me" &&
          k &&
          String(C) !== String(k))
      )
        return;
      s((F) =>
        F.map((D) => {
          if (D.id === g) {
            const $ = D.messages.map((P) => {
              if (
                P.id === x &&
                P.type === "transfer" &&
                P.status === "pending"
              ) {
                const z = P.amount;
                if (y === "accept") {
                  if (M && !E) {
                    const O = m(D, A, _);
                    n((Z) => ({
                      ...Z,
                      wallet: {
                        ...Z.wallet,
                        balance: (Z.wallet.balance || 0) + z,
                        transactions: [
                          {
                            id: Date.now().toString(),
                            type: "income",
                            amount: z,
                            note: `接收转账: ${P.note}`,
                            timestamp: new Date().toISOString(),
                            contactName: O || void 0,
                          },
                          ...(Z.wallet.transactions || []),
                        ],
                      },
                    }));
                  }
                } else if (y === "reject" && E) {
                  const O = m(D, k, _);
                  n((Z) => ({
                    ...Z,
                    wallet: {
                      ...Z.wallet,
                      balance: (Z.wallet.balance || 0) + z,
                      transactions: [
                        {
                          id: Date.now().toString(),
                          type: "income",
                          amount: z,
                          note: `转账退回: ${P.note}`,
                          timestamp: new Date().toISOString(),
                          contactName: O || void 0,
                        },
                        ...(Z.wallet.transactions || []),
                      ],
                    },
                  }));
                }
                return {
                  ...P,
                  status: y === "accept" ? "accepted" : "rejected",
                };
              }
              return P;
            });
            return { ...D, messages: $ };
          }
          return D;
        }),
      );
      const S = m(N, A, _),
        j = m(N, C, _),
        T = C === "me",
        I = A === "me",
        L =
          y === "accept"
            ? T
              ? "[系统提示] 你已收款"
              : I
                ? `[系统提示] ${j}已收款`
                : `[系统提示] ${j}收下了${S}的转账`
            : T
              ? "[系统提示] 你已退回转账"
              : I
                ? `[系统提示] ${j}退回了转账`
                : `[系统提示] ${j}退回了${S}的转账`;
      o(g, L, null, "system");
    },
  };
}
const Rw = "couple_space_updated",
  FF = 20;
function Pw(t) {
  const n = String(t || "")
    .trim()
    .match(/\[LONG_SENTENCE_3\]([\s\S]*?)\[\/LONG_SENTENCE_3\]/i);
  if (!n) return null;
  const r = n[1]
    .trim()
    .split(/\|\|\|/)
    .map((i) => i.trim())
    .filter(Boolean);
  return r.length !== 3 ? null : r;
}
function zF(t) {
  return String(t || "")
    .replace(/\[LONG_SENTENCE_3\][\s\S]*?\[\/LONG_SENTENCE_3\]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}
const NS = (t) =>
  String(t || "")
    .replace(/[．]/g, ".")
    .replace(/[０-９]/g, (s) => {
      const n = "０１２３４５６７８９".indexOf(s);
      return n >= 0 ? String(n) : s;
    });
function RF(t) {
  const s = [];
  for (let n = 0; n < t.length; n++) {
    const a = String(t[n] || "").trim();
    if (!a) continue;
    /^\s*[\[［]\s*(?:TRANS|TRANSLATION)\s*[:：]/i.test(a) && s.length > 0
      ? (s[s.length - 1] = `${s[s.length - 1]}

${a}`)
      : s.push(a);
  }
  return s;
}
function ac(t) {
  let s = String(t ?? "").trim(),
    n = null;
  const a = /\s*[\[［]\s*TRANSLATION\s*[:：]\s*([^\]］]+)[\]］]/gi;
  let r = "",
    i;
  for (; (i = a.exec(s)) !== null; ) r = i[1].trim();
  (r &&
    ((n = Jo(r) ? r : "（译文不可用）"),
    (s = s
      .replace(/\s*[\[［]\s*TRANSLATION\s*[:：]\s*[^\]］]+[\]］]/gi, "")
      .trim())),
    (r = ""));
  const o = /\s*[\[［]\s*TRANS\s*[:：]\s*([^\]］]+)[\]］]/gi;
  for (; (i = o.exec(s)) !== null; ) r = i[1].trim();
  return (
    r &&
      (n || (n = Jo(r) ? r : "（译文不可用）"),
      (s = s
        .replace(/\s*[\[［]\s*TRANS\s*[:：]\s*[^\]］]+[\]］]/gi, "")
        .trim())),
    { displayText: s, translation: n }
  );
}
function PF(t) {
  const n = String(t || "").match(
    /[\[［]\s*ORDER_FOOD\s*[:：]\s*([^:：\]］]+?)\s*[:：]\s*([\d０-９]+(?:[.．][\d０-９]+)?)\s*[\]］]/i,
  );
  if (!n) return null;
  const a = n[1].trim().replace(/\s+/g, " "),
    r = parseFloat(NS(n[2]));
  return !a || !Number.isFinite(r)
    ? null
    : { fullMatch: n[0], index: n.index, item: a, price: r.toFixed(2) };
}
function OF(t) {
  const n = String(t || "").match(
    /[\[［]\s*PAY_FOR_ME\s*[:：]\s*([^:：\]]+?)\s*[:：]\s*([\d０-９]+(?:[.．][\d０-９]+)?)\s*[\]］]/i,
  );
  if (!n) return null;
  const a = n[1].trim().replace(/\s+/g, " "),
    r = parseFloat(NS(n[2]));
  return !a || !Number.isFinite(r)
    ? null
    : { fullMatch: n[0], index: n.index, item: a, price: r.toFixed(2) };
}
function BF(t) {
  return jS(t);
}
function UF(t) {
  if (!t || typeof t != "object") return "";
  const s = String(t.type || "text")
      .trim()
      .toLowerCase(),
    n = String(t.text || "").trim(),
    a = String(t.translation || "").trim(),
    r = String(t.replyToSnippet || "")
      .trim()
      .replace(/["“”]/g, ""),
    i = (c) => (r ? `[REPLY:"${r.slice(0, 80)}"] ${c}` : c),
    o = (c) => (a ? `${c} [TRANS:${a}]` : c);
  if (
    Array.isArray(t.longSentenceVariants) &&
    t.longSentenceVariants.length === 3
  ) {
    const c = t.longSentenceVariants
      .map((d) => String(d || "").trim())
      .filter(Boolean)
      .slice(0, 3);
    if (c.length === 3) {
      const d = `[LONG_SENTENCE_3]${c.join("|||")}[/LONG_SENTENCE_3]`,
        u = n ? `[LS3_HEAD]${n}[/LS3_HEAD]${d}` : d;
      return i(o(u));
    }
  }
  switch (s) {
    case "voice":
      return i(o(`[VOICE]${n || "..."}[/VOICE]`));
    case "meme": {
      const c = String(t.memeId || "").trim();
      return i(o(c ? `[MEME:${c}]` : n));
    }
    case "text_image":
      return i(o(`[图片内容：${n || "（空）"}]`));
    case "transfer": {
      const c = Number(t.amount),
        d = Number.isFinite(c) && c > 0 ? String(c) : "20",
        u = String(t.note || "").trim();
      return i(o(`[TRANSFER:${d}${u ? `:${u}` : ""}]`));
    }
    case "food_delivery": {
      const c = String(t.item || "").trim() || "奶茶",
        d = Number(t.price),
        u = Number.isFinite(d) && d > 0 ? String(d) : "18";
      return i(o(`[ORDER_FOOD:${c}:${u}]`));
    }
    case "pay_for_me": {
      const c = String(t.item || "").trim() || "奶茶",
        d = Number(t.price),
        u = Number.isFinite(d) && d > 0 ? String(d) : "18";
      return i(o(`[PAY_FOR_ME:${c}:${u}]`));
    }
    case "couple_space_accept": {
      const c = n ? `[COUPLE_SPACE_ACCEPT] ${n}` : "[COUPLE_SPACE_ACCEPT]";
      return i(o(c));
    }
    case "couple_space_reject": {
      const c = n ? `[COUPLE_SPACE_REJECT] ${n}` : "[COUPLE_SPACE_REJECT]";
      return i(o(c));
    }
    case "ledger_checkin_accept": {
      const c = n ? `[LEDGER_CHECKIN_ACCEPT] ${n}` : "[LEDGER_CHECKIN_ACCEPT]";
      return i(o(c));
    }
    case "ledger_checkin_reject": {
      const c = n ? `[LEDGER_CHECKIN_REJECT] ${n}` : "[LEDGER_CHECKIN_REJECT]";
      return i(o(c));
    }
    case "html": {
      const c = String(t.html || "").trim();
      if (!c) return "";
      const d = wS(c);
      return d ? i(o(`[CHAT_HTML_B64:${d}]`)) : "";
    }
    case "system_hint":
    case "text":
    default:
      return i(o(n));
  }
}
function GF(t) {
  const s = BF(t);
  if (!s || typeof s != "object" || s.version !== 1) return null;
  const n = Array.isArray(s.messages) ? s.messages : null;
  if (!n || n.length === 0) return null;
  const a = new Set([
      "text",
      "voice",
      "meme",
      "text_image",
      "transfer",
      "food_delivery",
      "pay_for_me",
      "couple_space_accept",
      "couple_space_reject",
      "ledger_checkin_accept",
      "ledger_checkin_reject",
      "system_hint",
    ]),
    r = n.filter((o) => {
      if (!o || typeof o != "object" || Array.isArray(o)) return !1;
      const c = String(o.type || "")
        .trim()
        .toLowerCase();
      return a.has(c);
    });
  if (r.length === 0) return null;
  const i = r
    .slice(0, FF)
    .map(UF)
    .map((o) => String(o || "").trim())
    .filter(Boolean);
  return i.length > 0 ? i : null;
}
const HF = [];
function Ow(t) {
  let s = String(t || "")
    .replace(/\s*\|\s*\|\s*|\uFF5C\uFF5C/g, "||")
    .replace(/\n\n+/g, "||")
    .replace(/([。！？])\s*\n+\s*/g, "$1||")
    .replace(/。[。]+/g, "。||")
    .trim();
  if (!s.includes("||") && s.length > 20) {
    const n = s
      .split(new RegExp("(?<=[。！？])\\s*"))
      .map((a) => a.trim())
      .filter(Boolean);
    n.length >= 2
      ? (s = n.join("||"))
      : n.length === 1 &&
        n[0].length > 28 &&
        /[，,]/.test(n[0]) &&
        (s = n[0]
          .split(new RegExp("(?<=[，,])\\s*"))
          .map((a) => a.trim())
          .filter((a) => a.length >= 2)
          .join("||"));
  }
  return s
    .split("||")
    .map((n) => n.trim())
    .filter((n) => n);
}
function WF(t) {
  const s = String(t || "").trim();
  if (!s) return [];
  const n = rS(s);
  if (n.length === 1 && n[0].kind === "text") {
    const r = n[0].value;
    return Jm(r) ? [r.trim()] : Ow(r);
  }
  const a = [];
  for (const r of n)
    if (r.kind === "html") {
      const i = r.value.trim();
      i && a.push(i);
    } else {
      const i = String(r.value || "").trim();
      if (!i) continue;
      Jm(i) ? a.push(i) : a.push(...Ow(i));
    }
  return a;
}
function YF(t, s, n, a = {}) {
  var tt, Xe, ht, Pe, ut, _t, Ee;
  const r = Ni.transfer || {},
    i = Ni.orderFood || {},
    o = Ni.payForMe || {},
    c = Ni.voice || {},
    d = Ni.meme || {},
    u = Ni.textImage || {},
    f = Ni.reply || {},
    p = Ni.recall || {},
    m = Ni.password || {},
    h = Ni.signature || {},
    g = Ni.fingerprint || {},
    x = Ni.redPacket || {},
    y = Ni.videoCallInvite || {},
    v = Ni.coupleSpace || {},
    b =
      ((tt = r == null ? void 0 : r.fallbackPolicy) == null
        ? void 0
        : tt.enableSemanticFallback) !== !1,
    N =
      Number(
        (Xe = r == null ? void 0 : r.fallbackPolicy) == null
          ? void 0
          : Xe.defaultAmount,
      ) || 20,
    w =
      ((ht = i == null ? void 0 : i.fallbackPolicy) == null
        ? void 0
        : ht.enableSemanticFallback) === !0,
    _ =
      ((Pe = o == null ? void 0 : o.fallbackPolicy) == null
        ? void 0
        : Pe.enableSemanticFallback) === !0,
    k = (Array.isArray(c == null ? void 0 : c.tags) ? c.tags : []).some((fe) =>
      /\[VOICE\]/i.test(String(fe || "")),
    ),
    M = (Array.isArray(d == null ? void 0 : d.tags) ? d.tags : []).some((fe) =>
      /\[MEME:/i.test(String(fe || "")),
    ),
    S = (Array.isArray(u == null ? void 0 : u.tags) ? u.tags : []).some(
      (fe) =>
        /\[图片内容/i.test(String(fe || "")) ||
        /\[IMAGE:/i.test(String(fe || "")),
    ),
    T = (Array.isArray(f == null ? void 0 : f.tags) ? f.tags : []).some(
      (fe) =>
        /\[REPLY:/i.test(String(fe || "")) || /引用/.test(String(fe || "")),
    ),
    L = (Array.isArray(p == null ? void 0 : p.tags) ? p.tags : []).some(
      (fe) =>
        /\[RECALL:/i.test(String(fe || "")) || /撤回/.test(String(fe || "")),
    ),
    F = (Array.isArray(m == null ? void 0 : m.tags) ? m.tags : []).some(
      (fe) =>
        /\[(GIVE_PASSWORD|PASSWORD_CARD|CHANGE_PASSWORD)\s*:/i.test(
          String(fe || ""),
        ) || /密码/.test(String(fe || "")),
    ),
    $ = (Array.isArray(h == null ? void 0 : h.tags) ? h.tags : []).some(
      (fe) =>
        /\[CHANGE_SIGNATURE\s*:/i.test(String(fe || "")) ||
        /签名/.test(String(fe || "")),
    ),
    z = (Array.isArray(g == null ? void 0 : g.tags) ? g.tags : []).some(
      (fe) =>
        /\[(APPROVE_FINGERPRINT|REJECT_FINGERPRINT|ENABLE_FINGERPRINT|DISABLE_FINGERPRINT)\]/i.test(
          String(fe || ""),
        ) || /指纹/.test(String(fe || "")),
    ),
    Z = (Array.isArray(x == null ? void 0 : x.tags) ? x.tags : []).some(
      (fe) =>
        /\[GRAB_RED_PACKET\]/i.test(String(fe || "")) ||
        /红包/.test(String(fe || "")),
    ),
    q = (Array.isArray(y == null ? void 0 : y.tags) ? y.tags : []).some(
      (fe) =>
        /\[VIDEO_CALL_INVITE/i.test(String(fe || "")) ||
        /视频通话邀请/.test(String(fe || "")),
    ),
    ne = (Array.isArray(v == null ? void 0 : v.tags) ? v.tags : []).some(
      (fe) =>
        /\[(COUPLE_SPACE_ACCEPT|COUPLE_SPACE_REJECT)\]/i.test(
          String(fe || ""),
        ) || /情侣空间/.test(String(fe || "")),
    ),
    {
      chats: le,
      contacts: ie,
      chatsRef: X,
      contactsRef: je,
      memes: xe = [],
      isVideoCall: ye = !1,
      handleTransferAction: R,
      updateMessage: oe,
      updateContact: ee,
      asyncStorage: H,
      setCoupleSpaces: Y,
      currentCallState: U,
      setCallState: ce,
      setCallStateRef: pe,
      handleListenTogetherMessage: se,
      unlockAudio: Te,
      playTTS: ke,
      replyToMessageId: W,
      lastUserMessageText: ue = "",
    } = a,
    re =
      ((ut = X == null ? void 0 : X.current) == null
        ? void 0
        : ut.find((fe) => fe.id === t)) ||
      (le == null ? void 0 : le.find((fe) => fe.id === t)),
    he = !!(re != null && re.isGroup),
    ge =
      !!(
        (_t = re == null ? void 0 : re.settings) != null &&
        _t.singleLongSentenceMode
      ) &&
      !he &&
      !ye,
    J = !!(
      (Ee = re == null ? void 0 : re.settings) != null && Ee.translationEnabled
    ),
    G = /[\[［]\s*TRANSFER\s*[:：]/i.test(String(s || "")),
    we = (fe) => {
      if (!fe || fe.sender === "system" || fe.type === "system") return !1;
      const He = String(fe.text || "").trim();
      return !(/^\[系统提示[:：\]]/.test(He) || /^\[系统提示\]/.test(He));
    },
    Q = (fe) => {
      const He = String(fe || "");
      return (
        /(马上|这就|立刻|等下|待会).{0,12}(转给|转你|转到|打给|打你|打钱)/.test(
          He,
        ) ||
        /(给你转|给你打钱|我转你|我给你转|给你零花钱|转给[^\s，。！？]{1,8}|打给[^\s，。！？]{1,8})/.test(
          He,
        )
      );
    },
    ve = (fe, He = "") => {
      const Ie = String(fe || "").match(
          /(?:¥|￥)?\s*(\d+(?:\.\d+)?)\s*(?:元|块|rmb|人民币)?/i,
        ),
        Ce = String(He || "").match(
          /(?:¥|￥)?\s*(\d+(?:\.\d+)?)\s*(?:元|块|rmb|人民币)?/i,
        ),
        Re =
          (Ie == null ? void 0 : Ie[1]) ||
          (Ce == null ? void 0 : Ce[1]) ||
          String(N),
        De = Number(Re);
      return Number.isFinite(De) && De > 0 ? De : N;
    };
  let Ve = !1;
  const Ae = () => {
    var He;
    const fe =
      (He = X == null ? void 0 : X.current) == null
        ? void 0
        : He.find((Ie) => Ie.id === t);
    return fe
      ? [...(fe.messages || [])]
          .reverse()
          .find(
            (Ie) =>
              Ie.type === "transfer" &&
              Ie.sender === "me" &&
              Ie.status === "pending",
          )
      : null;
  };
  let te = [];
  const Se = !ge && !ye ? GF(s) : null;
  Se && Se.length > 0 && (te = Se);
  let Fe = null;
  if (!Se || Se.length === 0)
    if (ge) {
      const fe = Pw(s);
      fe && fe.length === 3
        ? ((Fe = fe), (te = [fe[0]]))
        : (te = [zF(s) || String(s || "").trim()].filter(Boolean));
    } else if (ye) {
      const fe = String(s || "").trim();
      te = fe ? [fe] : [];
    } else te = WF(s);
  (ye ||
    (te = te.filter((fe, He) => {
      if (He === 0) return !0;
      const Ie = te[He - 1];
      return !(
        fe === Ie ||
        fe.trim() === Ie.trim() ||
        (Ie.length > 10 &&
          fe.length > 10 &&
          (Ie.includes(fe) || fe.includes(Ie)))
      );
    })),
    J && !ye && !ge && (te = RF(te)));
  let $e = null;
  if (
    (te.forEach((fe, He) => {
      var st,
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
        pt;
      const Ie = /^\s*[\[［](?:语音消息|voice)\s*[\]］]/i.test(
        String(fe || "").trim(),
      );
      let Ce = s1(
        String(fe || "")
          .replace(/[\[［]语音消息[\]］]\s*/gi, "")
          .replace(/^\[voice\]\s*/i, "")
          .replace(/\s*\[\/voice\]\s*$/i, "")
          .trim(),
      );
      if (
        !Ce ||
        (ye && ((Ce = Ce.replace(/\[MEME:[^\]]*\]/g, "").trim()), !Ce))
      )
        return;
      const Re =
        !ge && L
          ? Ce.match(/[\[［]\s*RECALL\s*[:：]\s*([\s\S]*?)\s*[\]］]/i)
          : null;
      if (Re) {
        const qe = Re[1];
        if (n.length > 0) {
          const dt = n[n.length - 1];
          ((dt.isRecalled = !0),
            (dt.recallReason = qe),
            (dt.originalContent = dt.text),
            (dt.text = "TA撤回了一条消息"));
        }
        return;
      }
      const De = !ge && fe.match(/\[FORWARD_MOMENT:([\s\S]*?)\]/);
      if (De) {
        const qe = De[1],
          dt = le.find((zt) => zt.id === t),
          xt = ie.find((zt) => zt.id === (dt == null ? void 0 : dt.contactId));
        n.push({
          id: sr(`moment-${He}`),
          text: `[转发朋友圈] ${qe}`,
          type: "moment",
          sender: "them",
          timestamp: new Date(Date.now() + He * 100).toISOString(),
          moment: {
            id: Date.now(),
            user: {
              name:
                (xt == null ? void 0 : xt.nickname) ||
                (xt == null ? void 0 : xt.name),
              avatar: xt == null ? void 0 : xt.avatar,
            },
            content: qe,
            image: null,
            likes: 0,
            comments: [],
            timestamp: Date.now(),
            time: "刚刚",
            isLiked: !1,
          },
        });
        return;
      }
      const at = ge
        ? null
        : fe.match(
            /[\[［]\s*TRANSFER\s*[:：]\s*(\d+(?:\.\d+)?)\s*(?:[:：]\s*([^\]］]*))?[\]］]/i,
          );
      if (at) {
        const qe = parseFloat(at[1]),
          dt = (at[2] || "").trim(),
          xt = fe.slice(at.index + at[0].length).trim(),
          zt = xt ? ac(xt).translation : null;
        (n.push({
          id: sr(`transfer-${He}`),
          text: `¥${qe}`,
          type: "transfer",
          amount: qe,
          note: dt,
          sender: "them",
          status: "pending",
          timestamp: new Date(Date.now() + He * 100).toISOString(),
          ...(zt && { translation: zt }),
        }),
          (Ve = !0));
        return;
      }
      const ft = Q(Ce);
      if (!ge && b && ft && !G) {
        const qe = ve(Ce, ue);
        if (Number.isFinite(qe) && qe > 0) {
          (n.push({
            id: sr(`transfer-fallback-${He}`),
            text: `¥${qe}`,
            type: "transfer",
            amount: qe,
            note: "转账",
            sender: "them",
            status: "pending",
            timestamp: new Date(Date.now() + He * 100).toISOString(),
          }),
            (Ve = !0));
          return;
        }
      }
      const vt = ge ? null : PF(fe);
      if (vt) {
        const { fullMatch: qe, index: dt, item: xt, price: zt } = vt,
          ms = (fe.slice(0, dt) + fe.slice(dt + qe.length))
            .trim()
            .replace(/\s+/g, " "),
          Cs = fe.slice(dt + qe.length).trim(),
          us = Cs ? ac(Cs).translation : null,
          Rs = Date.now() + He * 100;
        (ms &&
          !/^\[[^\]]+\]$/.test(ms) &&
          n.push({
            id: sr(`foodtxt-${He}`),
            text: ms,
            type: "text",
            translation: void 0,
            sender: "them",
            timestamp: new Date(Rs).toISOString(),
          }),
          n.push({
            id: sr(`food-${He}`),
            text: `[外卖] 为你点了 ${xt}`,
            type: "food_delivery",
            item: xt,
            price: zt,
            status: "ordered",
            sender: "them",
            timestamp: new Date(Rs + (ms ? 40 : 0)).toISOString(),
            ...(us && { translation: us }),
          }));
        return;
      }
      if (
        !ge &&
        w &&
        (/(给你|帮你|给咱).{0,10}(点|下单|买).{0,10}(外卖|奶茶|咖啡|吃的|饭)/.test(
          Ce,
        ) ||
          /(请你吃|给你买点吃的|给你点了)/.test(Ce))
      ) {
        const dt =
            (($t =
              (st = Ce.match(
                /(?:点|买)([^，。！？,.]{1,12})(?:给你|吧|了|。|，|$)/,
              )) == null
                ? void 0
                : st[1]) == null
              ? void 0
              : $t.trim()) || "奶茶",
          xt =
            ((Ft = Ce.match(
              /(?:¥|￥)?\s*(\d+(?:\.\d+)?)\s*(?:元|块|rmb|人民币)?/i,
            )) == null
              ? void 0
              : Ft[1]) || "18",
          zt = Number(xt);
        if (Number.isFinite(zt) && zt > 0) {
          n.push({
            id: sr(`food-fallback-${He}`),
            text: `[外卖] 为你点了 ${dt}`,
            type: "food_delivery",
            item: dt,
            price: zt.toFixed(2),
            status: "ordered",
            sender: "them",
            timestamp: new Date(Date.now() + He * 100).toISOString(),
          });
          return;
        }
      }
      const Oe = ge ? null : OF(fe);
      if (Oe) {
        const { fullMatch: qe, index: dt, item: xt, price: zt } = Oe,
          ms = (fe.slice(0, dt) + fe.slice(dt + qe.length))
            .trim()
            .replace(/\s+/g, " "),
          Cs = fe.slice(dt + qe.length).trim(),
          us = Cs ? ac(Cs).translation : null,
          Rs = Date.now() + He * 100;
        (ms &&
          !/^\[[^\]]+\]$/.test(ms) &&
          n.push({
            id: sr(`paytxt-${He}`),
            text: ms,
            type: "text",
            translation: void 0,
            sender: "them",
            timestamp: new Date(Rs).toISOString(),
          }),
          n.push({
            id: sr(`pay-${He}`),
            text: `[代付] 帮我付个款: ${xt}`,
            type: "pay_for_me",
            item: xt,
            price: zt,
            sender: "them",
            status: "pending",
            timestamp: new Date(Rs + (ms ? 40 : 0)).toISOString(),
            ...(us && { translation: us }),
          }));
        return;
      }
      if (
        !ge &&
        _ &&
        /(我想吃|我想喝|我想买|帮我买|替我付|帮我付|你帮我付款|你给我付)/.test(
          Ce,
        ) &&
        /(你|帮我|替我)/.test(Ce)
      ) {
        const dt =
            ((At =
              (es = Ce.match(
                /(?:想吃|想喝|想买|帮我买)([^，。！？,.]{1,12})(?:吧|了|。|，|$)/,
              )) == null
                ? void 0
                : es[1]) == null
              ? void 0
              : At.trim()) || "奶茶",
          xt =
            ((Jt = Ce.match(
              /(?:¥|￥)?\s*(\d+(?:\.\d+)?)\s*(?:元|块|rmb|人民币)?/i,
            )) == null
              ? void 0
              : Jt[1]) || "18",
          zt = Number(xt);
        if (Number.isFinite(zt) && zt > 0) {
          n.push({
            id: sr(`pay-fallback-${He}`),
            text: `[代付] 帮我付个款: ${dt}`,
            type: "pay_for_me",
            item: dt,
            price: zt.toFixed(2),
            sender: "them",
            status: "pending",
            timestamp: new Date(Date.now() + He * 100).toISOString(),
          });
          return;
        }
      }
      const Qe =
        !ge && M ? fe.match(/[\[［]\s*MEME\s*[:：]\s*(.*?)\s*[\]］]/i) : null;
      if (Qe && !ye) {
        const qe = (Qe[1] || "").trim(),
          dt =
            xe.find((Hs) => String(Hs.id || "").trim() === qe) ||
            xe.find((Hs) => String(Hs.meaning || "").trim() === qe),
          xt =
            (Vt = X == null ? void 0 : X.current) == null
              ? void 0
              : Vt.find((Hs) => Hs.id === t),
          zt = xt && !xt.isGroup;
        let ms = null,
          Cs = null;
        if (
          zt &&
          ((Cs = Ce.match(
            /【引用了[\s\S]*?的消息[:：]\s*["“]([\s\S]*?)["”]\s*】/,
          )),
          Cs != null && Cs[1])
        ) {
          const cn = String(Cs[1]).trim(),
            fn = cn.replace(/\s+/g, "").slice(0, 20),
            Qn = [...[...(xt.messages || []), ...n]].reverse().find((ra) => {
              const _a = String((ra == null ? void 0 : ra.text) || "");
              if (!_a) return !1;
              if (_a.includes(cn)) return !0;
              const Ya = _a.replace(/\s+/g, "");
              return fn ? Ya.includes(fn) : !1;
            });
          if ((Qn && (ms = Qn.id), !ms)) {
            const ra = [...(xt.messages || [])]
              .reverse()
              .find(
                (_a) =>
                  _a &&
                  _a.sender === "me" &&
                  typeof _a.text == "string" &&
                  _a.text.trim(),
              );
            ra != null && ra.id && (ms = ra.id);
          }
        }
        let us = -1;
        if (dt) {
          const Hs = $e,
            fn = He === 0 && W ? W : ms || Hs;
          ((us = n.length),
            n.push({
              id: sr(`meme-${He}`),
              text: "[表情包]",
              type: "meme",
              image: dt.url,
              meaning: dt.meaning,
              sender: "them",
              replyTo: fn,
              timestamp: new Date(Date.now() + He * 100).toISOString(),
            }),
            Hs && ($e = null));
        }
        let Rs = Ce.replace(Qe[0], "");
        (Cs != null && Cs[0] && (Rs = Rs.replace(Cs[0], "")), (Rs = Rs.trim()));
        const Rt = Rs ? ac(Rs) : { displayText: "", translation: null },
          Es = (Rt.displayText || "").trim(),
          nn =
            Es.includes("[VOICE]") ||
            Es.includes("[REPLY") ||
            Es.includes("【引用了") ||
            Es.includes("[RECALL:") ||
            Es.includes("[CHANGE_SIGNATURE:") ||
            Es.includes("[ORDER_FOOD:") ||
            Es.includes("[PAY_FOR_ME:") ||
            Es.includes("[MEME:");
        if (us >= 0 && Rt.translation && !Es) {
          const Hs = n[us];
          Hs &&
            Hs.type === "meme" &&
            !Hs.translation &&
            (Hs.translation = Rt.translation);
        }
        if (Es && !nn) {
          const fn = He === 0 && W ? W : ms || $e;
          n.push({
            id: sr(`meme-rest-${He}`),
            text: Es,
            type: "text",
            translation: Rt.translation || void 0,
            sender: "them",
            timestamp: new Date(Date.now() + He * 100 + 50).toISOString(),
            replyTo: fn,
          });
        }
        return;
      }
      const Ye =
        !ge && S
          ? fe.match(/^[\[［]图片内容[：:]\s*([\s\S]*?)[\]］]?$/) ||
            fe.match(/^[\[［]图片[\]］]\s*(.*)$/) ||
            fe.match(/^[\[［]IMAGE[：:](.*?)[\]］]$/i)
          : null;
      if (Ye && !ye) {
        const qe = (Ye[1] || "").replace(/[()（）]/g, "").trim() || "图片";
        n.push({
          id: sr(`text-image-${He}`),
          text: fe,
          content: qe,
          type: "text_image",
          sender: "them",
          timestamp: new Date(Date.now() + He * 100).toISOString(),
        });
        return;
      }
      const Ze = (qe) => {
        if (!R) return !1;
        const dt = Ae();
        return dt
          ? (R(t, dt.id, qe), (transferActionResolvedInRound = !0), !0)
          : !1;
      };
      if (fe.includes("[ACCEPT_TRANSFER]")) {
        Ze("accept");
        return;
      }
      if (fe.includes("[REJECT_TRANSFER]")) {
        Ze("reject");
        return;
      }
      if (he && Z && fe.includes("[GRAB_RED_PACKET]")) {
        const qe =
          (qt = X == null ? void 0 : X.current) == null
            ? void 0
            : qt.find((dt) => dt.id === t);
        if (qe && oe) {
          const dt = qe.contactId,
            xt = [...qe.messages]
              .reverse()
              .find((zt) =>
                zt.type !== "red_packet" ||
                (zt.count || 1) - (zt.claims || []).length <= 0
                  ? !1
                  : !(zt.claims || []).some((us) => us.sender === dt),
              );
          if (xt) {
            const zt = xt.claims || [],
              ms = x0(xt.totalAmount, xt.count, xt.mode, zt);
            if (ms != null) {
              const Cs = {
                sender: dt,
                amount: ms,
                timestamp: new Date().toISOString(),
              };
              oe(t, xt.id, { claims: [...zt, Cs] });
              const us = h0(qe, dt, (je == null ? void 0 : je.current) || []),
                Rs = us
                  ? `[系统提示] ${us}领取了你的红包`
                  : "[系统提示] TA领取了你的红包";
              n.push({
                id: sr("sys-rp"),
                text: Rs,
                type: "system",
                sender: "system",
                timestamp: new Date().toISOString(),
              });
            }
          }
        }
        if (
          ((fe = fe.replace(/\[GRAB_RED_PACKET\]/g, "").trim()), (Ce = fe), !Ce)
        )
          return;
      }
      if (fe.includes("[ACCEPT_PAY_FOR_ME]")) {
        const qe =
          (Lt = X == null ? void 0 : X.current) == null
            ? void 0
            : Lt.find((dt) => dt.id === t);
        if (qe && oe) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "pay_for_me" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt && oe(t, dt.id, { status: "accepted" });
        }
        return;
      }
      if (fe.includes("[REJECT_PAY_FOR_ME]")) {
        const qe =
          (Qt = X == null ? void 0 : X.current) == null
            ? void 0
            : Qt.find((dt) => dt.id === t);
        if (qe && oe) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "pay_for_me" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt && oe(t, dt.id, { status: "rejected" });
        }
        return;
      }
      if (fe.includes("[ACCEPT_FOOD_DELIVERY]")) {
        const qe =
          (js = X == null ? void 0 : X.current) == null
            ? void 0
            : js.find((dt) => dt.id === t);
        if (qe && oe) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "food_delivery" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt && oe(t, dt.id, { status: "accepted" });
        }
        return;
      }
      if (fe.includes("[REJECT_FOOD_DELIVERY]")) {
        const qe =
          (cs = X == null ? void 0 : X.current) == null
            ? void 0
            : cs.find((dt) => dt.id === t);
        if (qe && oe) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "food_delivery" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt && oe(t, dt.id, { status: "rejected" });
        }
        return;
      }
      if (z && fe.includes("[APPROVE_FINGERPRINT]")) {
        const qe =
          (Ne = X == null ? void 0 : X.current) == null
            ? void 0
            : Ne.find((dt) => dt.id === t);
        if (qe && oe && ee) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "system_fingerprint_request" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt &&
            (oe(t, dt.id, { status: "approved" }),
            ee(qe.contactId, { fingerprintStatus: "approved" }));
        }
        ((fe = fe.replace(/\[APPROVE_FINGERPRINT\]/g, "").trim()), (Ce = fe));
      }
      if (z && fe.includes("[REJECT_FINGERPRINT]")) {
        const qe =