            ft === null
              ? (() => {
                  const Qe = ((f == null ? void 0 : f[Re]) || []).map((me) => ({
                      ...me,
                      archiveId: me.archiveId ?? null,
                    })),
                    Ye = (vt || []).flatMap((me) =>
                      (me.summaries || []).map((jt) => ({
                        ...jt,
                        archiveId: jt.archiveId ?? me.id,
                      })),
                    ),
                    Ze = new Set(),
                    Ue = [];
                  for (const me of [...Qe, ...Ye])
                    me != null &&
                      me.id &&
                      !Ze.has(me.id) &&
                      (Ze.add(me.id), Ue.push(me));
                  return (
                    Ue.sort(
                      (me, jt) =>
                        new Date(me.timestamp || 0) -
                        new Date(jt.timestamp || 0),
                    ),
                    Ue
                  );
                })()
              : (($e = (vt || []).find((Qe) => Qe.id === ft)) == null
                  ? void 0
                  : $e.summaries) || [];
        Array.isArray(Oe) &&
          Oe.length > 0 &&
          (ye = [
            ...Oe.map((Ye) => ({
              ...Ye,
              content: `【群聊记忆·来源：${De.groupName || "群聊"}】
${Ye.content || ""}`.trim(),
            })),
            ...ye,
          ]);
      } catch {}
      try {
        const ft = Array.isArray(De.messages) ? De.messages : [],
          vt = a(ft, at),
          Oe = Array.isArray(g) ? g : [],
          Qe = (Ze) => {
            if (!Ze) return "未知";
            if (Ze.sender === "me")
              return (
                (o == null ? void 0 : o.name) ||
                (d == null ? void 0 : d.name) ||
                "我"
              );
            const Ue = Ze.contactId,
              me = Ue ? Oe.find((jt) => jt.id === Ue) : null;
            return (
              (me == null ? void 0 : me.remark) ||
              (me == null ? void 0 : me.nickname) ||
              (me == null ? void 0 : me.name) ||
              "群成员"
            );
          },
          Ye = (vt || [])
            .filter((Ze) => Ze && (Ze.text || Ze.type === "system"))
            .slice(-Math.max(1, at * 4))
            .map((Ze) => {
              const Ue = Qe(Ze),
                me =
                  Ze.type === "system" || Ze.sender === "system"
                    ? `[系统] ${(Ze.text || "").trim()}`
                    : String(Ze.text || "").trim();
              return me ? `${Ue}: ${me}` : null;
            })
            .filter(Boolean);
        Ye.length > 0 &&
          (ye = [
            {
              id: `ext-group-${Re}-${Date.now()}`,
              timestamp: new Date().toISOString(),
              content: `【群聊聊天记录·来源：${De.groupName || "群聊"}】
（最近 ${at} 回合节选）
${Ye.join(`
`)}`,
            },
            ...ye,
          ]);
      } catch {}
    }
  }
  let ee = null,
    H = null;
  if (
    ((tt = t.settings) != null && tt.realWeather) ||
    ((Xe = t.settings) != null && Xe.realTime)
  ) {
    const Re = t.settings.userCity,
      De = t.settings.aiCity,
      at = String(t.settings.userTimeZone || "").trim(),
      ft = String(t.settings.aiTimeZone || "").trim(),
      vt = Ul(at),
      Oe = Ul(ft),
      Qe = [];
    if (
      ((ht = t.settings) != null &&
        ht.realWeather &&
        (Re && Qe.push(b(Re).then((Ye) => ({ type: "weather_user", val: Ye }))),
        De && Qe.push(b(De).then((Ye) => ({ type: "weather_ai", val: Ye })))),
      (Pe = t.settings) != null &&
        Pe.realTime &&
        (vt
          ? Qe.push(
              Promise.resolve({
                timezone: vt,
                city: Re || "用户",
                country: "",
              }).then((Ye) => ({ type: "time_user", val: Ye })),
            )
          : Re && Qe.push(N(Re).then((Ye) => ({ type: "time_user", val: Ye }))),
        Oe
          ? Qe.push(
              Promise.resolve({
                timezone: Oe,
                city: De || "TA",
                country: "",
              }).then((Ye) => ({ type: "time_ai", val: Ye })),
            )
          : De && Qe.push(N(De).then((Ye) => ({ type: "time_ai", val: Ye })))),
      Qe.length > 0)
    ) {
      const Ye = new Promise((jt, Gt) =>
          setTimeout(() => Gt(new Error("weather_time_timeout")), $S),
        ),
        Ze = await Promise.race([Promise.all(Qe), Ye]).catch(() => []),
        Ue = {},
        me = {};
      if (
        (Ze.forEach((jt) => {
          if (
            (jt.type === "weather_user" &&
              jt.val &&
              (Ue.user = { city: Re, info: jt.val }),
            jt.type === "weather_ai" &&
              jt.val &&
              (Ue.ai = { city: De, info: jt.val }),
            jt.type === "time_user" && jt.val)
          ) {
            const Gt = Ul(jt.val.timezone),
              Pt = new Date();
            let Wt = "";
            try {
              Wt = Gt
                ? Pt.toLocaleString("zh-CN", {
                    timeZone: Gt,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !1,
                    weekday: "long",
                  })
                : Pt.toLocaleString("zh-CN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !1,
                    weekday: "long",
                  });
            } catch {
              Wt = Pt.toLocaleString("zh-CN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: !1,
                weekday: "long",
              });
            }
            me.user = {
              city: Re,
              info: `${jt.val.city} (${jt.val.country}): ${Wt} (${Gt || jt.val.timezone || "本地"})`,
            };
          }
          if (jt.type === "time_ai" && jt.val) {
            const Gt = Ul(jt.val.timezone),
              Pt = new Date();
            let Wt = "";
            try {
              Wt = Gt
                ? Pt.toLocaleString("zh-CN", {
                    timeZone: Gt,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !1,
                    weekday: "long",
                  })
                : Pt.toLocaleString("zh-CN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: !1,
                    weekday: "long",
                  });
            } catch {
              Wt = Pt.toLocaleString("zh-CN", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: !1,
                weekday: "long",
              });
            }
            me.ai = {
              city: De,
              info: `${jt.val.city} (${jt.val.country}): ${Wt} (${Gt || jt.val.timezone || "本地"})`,
            };
          }
        }),
        (ut = t.settings) != null && ut.realTime && !me.user)
      ) {
        const Gt = new Date().toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1,
          weekday: "long",
        });
        me.user = { city: "本地", info: `${Gt} (本地时间)` };
      }
      (Object.keys(Ue).length > 0 && (ee = Ue),
        Object.keys(me).length > 0 && (H = me));
    }
  }
  if (!((_t = t.settings) != null && _t.realTime) && z) {
    const Re = z.currentTimeStr;
    H = {
      user: { city: "推进时间", info: Re },
      ai: { city: "推进时间", info: Re },
    };
  }
  const Y = {
    ...k,
    ...t.settings,
    weatherData: ee,
    timeData: H,
    ...(z && { advanceTimeContext: z }),
  };
  let U = x || "chat";
  !x && K.status === "connected" && K.contactId === i.id && (U = "video_call");
  const ce = (t == null ? void 0 : t.callHistory) || [];
  if (
    U === "chat" ||
    U === "voice" ||
    U === "chat_heart" ||
    U === "chat_regen"
  ) {
    const Re = ce
        .slice(0, 2)
        .map((ft) => {
          const vt = (ft.messages || [])
            .slice(-4)
            .map(
              (Oe) =>
                `${Oe.sender === "me" ? "用户" : i.name}: ${(Oe.text || "").replace(/\s*\|\s*\|\s*|｜｜/g, " ").slice(0, 80)}`,
            )
            .filter(Boolean);
          return vt.length
            ? `[${ft.durationStr || ""}] ${vt.join(" | ")}`
            : null;
        })
        .filter(Boolean),
      De = (Array.isArray(M) ? M : [])
        .filter((ft) =>
          !ft ||
          ft.summary == null ||
          ft.bindToChat === !1 ||
          !(t != null && t.contactId) ||
          !ft.contactId
            ? !1
            : String(ft.contactId) === String(t.contactId),
        )
        .sort(
          (ft, vt) =>
            new Date(vt.startTime || 0).getTime() -
            new Date(ft.startTime || 0).getTime(),
        )
        .slice(0, 2)
        .map((ft) => {
          const vt = String(ft.summary || "").trim();
          if (!vt) return null;
          const Oe = ft.startTime ? new Date(ft.startTime) : null,
            Qe =
              Oe && Number.isFinite(Oe.getTime())
                ? Oe.toLocaleString("zh-CN")
                : "未知时间",
            Ye = Number.isFinite(ft.duration)
              ? Math.max(0, Number(ft.duration))
              : 0,
            Ze = `${Math.floor(Ye / 60)}:${String(Ye % 60).padStart(2, "0")}`;
          return `[电话摘要][${Qe}][${Ze}] ${vt}`;
        })
        .filter(Boolean),
      at = [...Re, ...De];
    at.length &&
      (Y.callHistoryContext = at.join(`
`));
  }
  if (Z.length > 0) {
    const Re = Z[Z.length - 1];
    (Re.type === "system_call_end" || Re.type === "video_call_end") &&
      (Y.isVideoEnd = !0);
  }
  let pe = v;
  if ((Ee = t.settings) != null && Ee.realTime && !z && !y && !pe) {
    const Re = s.filter((De) => De.type !== "time_advance");
    if (Re.length >= 2) {
      const De = Re[Re.length - 1],
        at = Re[Re.length - 2],
        ft = new Date(De.timestamp),
        vt = new Date(at.timestamp),
        Oe = ft.getTime() - vt.getTime();
      let Qe = "刚刚";
      if (Oe > 0) {
        const me = Math.floor(Oe / 6e4);
        me < 1
          ? (Qe = "刚刚")
          : me < 60
            ? (Qe = `${me}分钟`)
            : me < 24 * 60
              ? (Qe = `${Math.floor(me / 60)}小时`)
              : (Qe = `${Math.floor(me / (24 * 60))}天`);
      }
      const Ye = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1,
        },
        Ze = vt.toLocaleString("zh-CN", Ye);
      pe = `
[SYSTEM_TIME_INFO]
Current Message Time: ${ft.toLocaleString("zh-CN", Ye)}
Previous Message Time: ${Ze}
Time Elapsed: ${Qe}
[/SYSTEM_TIME_INFO]`;
    }
  }
  if (
    y &&
    (fe = t.settings) != null &&
    fe.realTime &&
    !z &&
    !(t != null && t.isGroup)
  ) {
    const Re = Date.now(),
      De = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !1,
      },
      ft = [...(Array.isArray(s) ? s : [])]
        .reverse()
        .find(
          (Ye) =>
            Ye &&
            Ye.sender !== "system" &&
            Ye.type !== "system" &&
            Ye.type !== "time_advance" &&
            Ye.timestamp,
        );
    let vt = null;
    if (ft != null && ft.timestamp) {
      const Ye = new Date(ft.timestamp);
      Number.isFinite(Ye.getTime()) && (vt = Ye);
    }
    if (!vt && t != null && t.timestamp) {
      const Ye = new Date(t.timestamp);
      Number.isFinite(Ye.getTime()) && (vt = Ye);
    }
    const Qe = new Date(Re).toLocaleString("zh-CN", De);
    if (vt) {
      const Ye = Re - vt.getTime(),
        Ze = ER(Ye);
      pe = `
[SYSTEM_TIME_INFO]
上一轮最后一条消息时间: ${vt.toLocaleString("zh-CN", De)}
本轮主动开口触发时间: ${Qe}
距上次消息间隔: ${Ze}
Time Elapsed: ${Ze}
[/SYSTEM_TIME_INFO]`;
    } else {
      const Ye = String(v || "").trim() || "一段时间";
      pe = `
[SYSTEM_TIME_INFO]
本轮主动开口触发时间: ${Qe}
（未能从聊天记录解析上一轮消息时间；调度侧估计距上次对话：约 ${Ye}）
Time Elapsed: ${Ye}
[/SYSTEM_TIME_INFO]`;
    }
  }
  if (y && !(t != null && t.isGroup))
    try {
      const Re = Array.isArray(s) ? s : [],
        De = (ct) => {
          if (!ct || ct.timestamp == null) return NaN;
          if (typeof ct.timestamp == "number" && Number.isFinite(ct.timestamp))
            return ct.timestamp;
          const Kt = new Date(ct.timestamp).getTime();
          return Number.isFinite(Kt) ? Kt : NaN;
        },
        at = (ct) =>
          ct &&
          ct.sender !== "system" &&
          ct.type !== "system" &&
          ct.type !== "time_advance" &&
          Number.isFinite(De(ct));
      let ft = -1;
      for (let ct = Re.length - 1; ct >= 0; ct--) {
        const Kt = Re[ct];
        if (at(Kt) && Kt.sender === "me") {
          ft = ct;
          break;
        }
      }
      const Oe = (ft >= 0 ? Re.slice(ft + 1) : Re.slice()).filter(
          (ct) => at(ct) && ct.sender === "them" && ct.text,
        ),
        Qe = Oe.length,
        Ye = Oe.length ? Oe[Oe.length - 1] : null,
        Ze = String((Ye == null ? void 0 : Ye.text) || "")
          .replace(/\s*\|\|\s*|｜｜/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 80),
        Ue = ft >= 0 ? Re[ft] : null,
        me = String((Ue == null ? void 0 : Ue.text) || "")
          .replace(/\s*\|\|\s*|｜｜/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 80),
        jt = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !1,
        },
        Gt = (() => {
          const ct = Ue ? De(Ue) : NaN;
          if (!Number.isFinite(ct)) return "";
          const Kt = new Date(ct);
          return Number.isFinite(Kt.getTime())
            ? Kt.toLocaleString("zh-CN", jt)
            : "";
        })(),
        Pt =
          Qe <= 0
            ? "这是你在用户沉默后第一次主动开口。自然承接上一轮对话即可。"
            : Qe === 1
              ? "这是你在用户仍未回复的情况下第二次主动开口。必须承接你刚才自己说过的话，不要像第一次一样重新开场。"
              : Qe === 2
                ? "这是你在用户仍未回复的情况下第三次主动开口。需要明显“递进”：可以更直白/更克制/更情绪化/更冷静（按人设），也可以自然转一个更贴合当下的新话题，但必须能解释得通。"
                : `这是你在用户仍未回复的情况下第 ${Qe + 1} 次连续主动开口。请避免鬼打墙重复同一句催促：你可以带出新的生活细节/行动/见闻/情绪变化来推进关系（按人设取舍），同时要能回扣你之前说过的话。`,
        Wt = `
[SYSTEM_PROACTIVE_INFO]
Trigger: proactive_auto_reply
UserLastMessageAt: ${Gt || "（未知）"}
ConsecutiveRoleMessagesSinceUser: ${Qe}
LastUserMessageSnippet: ${me || "（无）"}
LastRoleMessageSnippet: ${Ze || "（无）"}
Guidance: ${Pt}
HardRules:
1) 必须读取并承接最近上下文（包括你自己上一轮主动开口的内容），禁止每次像第一次触发那样重复开场白。
2) 禁止多轮只围绕同一个问题/同一句话反复催促；每一轮都要有新信息/新角度/新推进（但仍要贴合人设与情绪走向）。
3) 允许自然换话题，但换话题必须“有桥”：要能从当前情绪/生活/时间线索自然过渡，不要突兀跳转。
4) 不要提及 SYSTEM/模型/提示词/规则/上下文 等元信息；只用角色口吻说话。
[/SYSTEM_PROACTIVE_INFO]`;
      pe = `${String(pe || "").trim()}
${Wt}`.trim();
    } catch {}
  let se = null;
  try {
    const Re = new Date(),
      De = w(Re),
      at = new Date(Re);
    at.setDate(at.getDate() - 1);
    const ft = w(at),
      vt = new Date(Re);
    vt.setDate(vt.getDate() + 1);
    const Oe = w(vt),
      [Qe, Ye, Ze, Ue] = await Promise.all([
        u.get(_(i.id, De), null),
        u.get(_(i.id, ft), null),
        u.get(A(i.id, De), null),
        u.get(A(i.id, Oe), null),
      ]);
    let me = null;
    if ((He = Qe == null ? void 0 : Qe.pages) != null && He.length) {
      const jt = Qe.pages[Qe.pages.length - 1],
        Gt = jt == null ? void 0 : jt.traces;
      Array.isArray(Gt) && Gt.length > 0 && (me = Gt[Gt.length - 1]);
    }
    se = {
      traceToday: Qe,
      traceYesterday: Ye,
      planToday: Ze,
      planTomorrow: Ue,
      lastTraceEntry: me,
    };
  } catch {}
  const Te = !x || x === "chat" || x === "chat_heart" || x === "chat_regen",
    ke = C.current[p] || { rounds: 0 },
    W =
      !y &&
      t &&
      !t.isGroup &&
      Te &&
      !((Ie = t.settings) != null && Ie.singleLongSentenceMode) &&
      (ke.rounds || 0) >= 1;
  let ue = "";
  if (W) {
    const Re = [...(s || [])]
      .reverse()
      .find(
        (De) =>
          De &&
          De.sender === "me" &&
          typeof De.text == "string" &&
          De.text.trim(),
      );
    ((ue =
      ((Ce = Re == null ? void 0 : Re.text) == null ? void 0 : Ce.trim()) ||
      ""),
      (ue = String(ue)
        .replace(/\r?\n/g, " ")
        .replace(/\s+/g, " ")
        .replace(/["“”]/g, "")
        .slice(0, 30)));
  }
  const re = {
    isAutoReply: !!y,
    isCurrentlyBlocked: !!V,
    contextLimitUsed: L,
    contextLimitMode: B,
    msgListCount: Array.isArray(F) ? F.length : 0,
    roundsFromLimitCount: $,
    roundsAfterRecentMergeCount: P,
    roundsAfterTimeAdvanceFilterCount: O,
    historyMessagesCount: Array.isArray(Z) ? Z.length : 0,
    recentMomentsCount: Array.isArray(ie) ? ie.length : 0,
    worldBooksCount: Array.isArray(je) ? je.length : 0,
    summariesCount: Array.isArray(ye) ? ye.length : 0,
    hasCalculatedTimeGap: !!String(pe || "").trim(),
    hasTraceAndPlanContext: !!se,
    mustQuoteThisRound: !!W,
  };
  return {
    historyMessages: Z,
    recentMoments: ie,
    relevantWorldBooks: je,
    chatSummaries: ye,
    settingsWithData: Y,
    scene: U,
    calculatedTimeGap: pe,
    traceAndPlanContext: se,
    mustQuoteThisRound: W,
    mustQuoteTextSnippet: ue,
    contextLimitUsed: L,
    contextLimitMode: B,
    replyContextDiagnostics: re,
  };
};
async function Pg({
  currentChat: t,
  contact: s,
  chatId: n,
  summaries: a = {},
  archives: r = {},
  allChats: i = [],
  contacts: o = [],
  user: c,
  getEffectiveUser: d,
  getLastNRounds: u,
  asyncStorage: f,
}) {
  var y, v, b, N, w;
  if (!t || !n || t.isGroup || !s) return [];
  const p = typeof d == "function" ? d(s) : c,
    m = t.currentArchiveId ?? null;
  let h =
    m === null
      ? a[n] || []
      : ((y = (r[n] || []).find((_) => _.id === m)) == null
          ? void 0
          : y.summaries) || [];
  const g = !!((v = t.settings) != null && v.useOfflineMemories),
    x = t.contactId;
  if (g && x && f)
    try {
      const _ = await f.get("meet_app_offline_summaries"),
        A = (_ == null ? void 0 : _[x]) || [];
      if (A.length > 0) {
        const k = t.settings.selectedOfflineMemoryIds || [];
        let C;
        k.length > 0
          ? ((C = k.map((E) => A.find((S) => S.id === E)).filter(Boolean)),
            C.length === 0 && (C = A))
          : (C = A);
        const M = C.map((E) => ({
          content: E.content,
          timestamp: E.createdAt,
        }));
        h = [...h, ...M];
      }
    } catch {}
  if (
    !(t != null && t.isGroup) &&
    (b = t == null ? void 0 : t.settings) != null &&
    b.readGroupChatMemoryEnabled &&
    (N = t == null ? void 0 : t.settings) != null &&
    N.readGroupChatMemoryChatId &&
    typeof u == "function"
  ) {
    const _ = String(t.settings.readGroupChatMemoryChatId),
      A = Array.isArray(i) ? i.find((k) => k && String(k.id) === _) : null;
    if (A != null && A.isGroup) {
      const k = Math.max(
        1,
        Math.min(200, parseInt(t.settings.readGroupChatMemoryRounds, 10) || 10),
      );
      try {
        const C = A.currentArchiveId ?? null,
          M = (r == null ? void 0 : r[_]) || [],
          E =
            C === null
              ? (() => {
                  const S = ((a == null ? void 0 : a[_]) || []).map((L) => ({
                      ...L,
                      archiveId: L.archiveId ?? null,
                    })),
                    j = (M || []).flatMap((L) =>
                      (L.summaries || []).map((B) => ({
                        ...B,
                        archiveId: B.archiveId ?? L.id,
                      })),
                    ),
                    T = new Set(),
                    I = [];
                  for (const L of [...S, ...j])
                    L != null &&
                      L.id &&
                      !T.has(L.id) &&
                      (T.add(L.id), I.push(L));
                  return (
                    I.sort(
                      (L, B) =>
                        new Date(L.timestamp || 0) - new Date(B.timestamp || 0),
                    ),
                    I
                  );
                })()
              : ((w = (M || []).find((S) => S.id === C)) == null
                  ? void 0
                  : w.summaries) || [];
        Array.isArray(E) &&
          E.length > 0 &&
          (h = [
            ...E.map((j) => ({
              ...j,
              content: `【群聊记忆·来源：${A.groupName || "群聊"}】
${j.content || ""}`.trim(),
            })),
            ...h,
          ]);
      } catch {}
      try {
        const C = Array.isArray(A.messages) ? A.messages : [],
          M = u(C, k),
          E = Array.isArray(o) ? o : [],
          S = (T) => {
            if (!T) return "未知";
            if (T.sender === "me")
              return (
                (p == null ? void 0 : p.name) ||
                (c == null ? void 0 : c.name) ||
                "我"
              );
            const I = T.contactId,
              L = I ? E.find((B) => B.id === I) : null;
            return (
              (L == null ? void 0 : L.remark) ||
              (L == null ? void 0 : L.nickname) ||
              (L == null ? void 0 : L.name) ||
              "群成员"
            );
          },
          j = (M || [])
            .filter((T) => T && (T.text || T.type === "system"))
            .slice(-Math.max(1, k * 4))
            .map((T) => {
              const I = S(T),
                L =
                  T.type === "system" || T.sender === "system"
                    ? `[系统] ${(T.text || "").trim()}`
                    : String(T.text || "").trim();
              return L ? `${I}: ${L}` : null;
            })
            .filter(Boolean);
        j.length > 0 &&
          (h = [
            {
              id: `ext-group-${_}-${Date.now()}`,
              timestamp: new Date().toISOString(),
              content: `【群聊聊天记录·来源：${A.groupName || "群聊"}】
（最近 ${k} 回合节选）
${j.join(`
`)}`,
            },
            ...h,
          ]);
      } catch {}
    }
  }
  return Array.isArray(h) ? h : [];
}
function l1(t) {
  const s = String(t || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim()
    .replace(/,(\s*[}\]])/g, "$1");
  if (!s) return "";
  const a =
    (s.startsWith("{") ? s : qm(s) || "") ||
    (s.indexOf("{") >= 0 ? s.slice(s.indexOf("{")) : "");
  if (a.startsWith("{"))
    try {
      const r = JSON.parse(a);
      if (r && typeof r == "object" && !Array.isArray(r)) {
        const i = ["text", "voice", "content", "monologue", "inner"];
        for (const o of i) {
          const c = r[o];
          if (c != null) {
            if (typeof c == "string" && c.trim()) return c.trim();
            if (typeof c == "number" || typeof c == "boolean")
              return String(c).trim();
          }
        }
      }
    } catch {}
  return s.trim();
}
function Zw(t, s) {
  if (typeof s != "function") return null;
  const n = String(t || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim()
    .replace(/,(\s*[}\]])/g, "$1");
  try {
    const a = JSON.parse(n.startsWith("{") ? n : n.slice(n.indexOf("{")));
    if (a && typeof a == "object")
      return {
        mood: s(a.mood ?? a.action ?? a.feel),
        input: s(a.input ?? a.deleted ?? a.unsent),
        sent: s(a.sent ?? a.final ?? a.send),
        reason: s(a.reason ?? a.deleteReason ?? a.why),
      };
  } catch {
    const r = n.match(/mood\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      i = n.match(/(input|deleted|unsent)\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      o = n.match(/(sent|final|send)\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      c = n.match(/reason\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      d = ((r == null ? void 0 : r[1]) || "").trim(),
      u = ((i == null ? void 0 : i[2]) || "").trim(),
      f = ((o == null ? void 0 : o[2]) || "").trim(),
      p = ((c == null ? void 0 : c[1]) || "").trim();
    if (d || u || f || p)
      return { mood: s(d), input: s(u), sent: s(f), reason: s(p) };
  }
  return null;
}
const OS = ({
  rawReply: t,
  settingsWithData: s,
  scene: n,
  normalizeDraftFieldToString: a,
}) => {
  let r = "",
    i = null,
    o = null,
    c = null;
  const d = n === "chat_heart" || n === "chat_regen",
    u = !!(s != null && s.enableHeartVoice) && d,
    f = !!(s != null && s.enableDrafts) && d;
  if (t && typeof t == "string") {
    const p = t.match(/\[DRAFT\]([\s\S]*?)\[\/DRAFT\]/i);
    if (p)
      (f && (o = Zw(p[1], a)),
        (t = t.replace(/\s*\[DRAFT\][\s\S]*?\[\/DRAFT\]\s*/gi, "").trim()));
    else {
      const g = t.match(/\[DRAFT\]\s*/i);
      if (g) {
        const x = t.slice(g.index + g[0].length),
          y = x.replace(/^\s*/, ""),
          v = x.length - y.length,
          b = qm(y);
        if (b) {
          f && (o = Zw(b, a));
          const N = g.index + g[0].length + v + b.length;
          t = (t.slice(0, g.index) + t.slice(N)).trim();
        }
      }
    }
    const m = t.match(/\[HEART_VOICE\]([\s\S]*?)\[\/HEART_VOICE\]/i);
    if (m)
      (u && (i = l1(m[1])),
        (t = t
          .replace(/\s*\[HEART_VOICE\][\s\S]*?\[\/HEART_VOICE\]\s*/gi, "")
          .trim()));
    else {
      const g = t.match(/\[HEART_VOICE\]\s*/i);
      if (g) {
        const x = t.slice(g.index + g[0].length),
          y = x.replace(/^\s*/, ""),
          v = x.length - y.length,
          b = qm(y);
        if (b) {
          u && (i = l1(b));
          const N = g.index + g[0].length + v + b.length;
          t = (t.slice(0, g.index) + t.slice(N)).trim();
        }
      }
    }
    if (
      ((t = t.replace(/\s*\[HEART_VOICE\][\s\S]*$/gi, "").trim()),
      !!(s != null && s.structuredReplyEnabled))
    ) {
      const g = FR(t, a);
      ((r = g.replyText),
        (c = g.parseMeta || null),
        g.envelopeHeartVoice && u && !i && (i = g.envelopeHeartVoice),
        g.envelopeDraft && f && !o && (o = g.envelopeDraft));
    } else r = t;
  }
  return {
    replyText: r,
    heartVoice: i,
    draft: o,
    wantHeartVoice: u,
    wantDrafts: f,
    isHeartOrRegen: d,
    structuredParseMeta: c,
  };
};
function DR(t) {
  return jS(t);
}
function $R(t) {
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
      const c = String(t.memeId || "").trim(),
        d = c ? `[MEME:${c}]` : n;
      return i(o(d));
    }
    case "text_image": {
      const c = `[图片内容：${n || "（空）"}]`;
      return i(o(c));
    }
    case "transfer": {
      const c = Number(t.amount),
        d = Number.isFinite(c) && c > 0 ? String(c) : "20",
        u = String(t.note || "").trim(),
        f = `[TRANSFER:${d}${u ? `:${u}` : ""}]`;
      return i(o(f));
    }
    case "food_delivery": {
      const c = String(t.item || "").trim() || "奶茶",
        d = Number(t.price),
        u = Number.isFinite(d) && d > 0 ? String(d) : "18",
        f = `[ORDER_FOOD:${c}:${u}]`;
      return i(o(f));
    }
    case "pay_for_me": {
      const c = String(t.item || "").trim() || "奶茶",
        d = Number(t.price),
        u = Number.isFinite(d) && d > 0 ? String(d) : "18",
        f = `[PAY_FOR_ME:${c}:${u}]`;
      return i(o(f));
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
function BS(t, s) {
  if (t == null || typeof s != "function") return null;
  if (typeof t == "object" && !Array.isArray(t)) {
    const r = t;
    return {
      mood: s(r.mood ?? r.action ?? r.feel),
      input: s(r.input ?? r.deleted ?? r.unsent),
      sent: s(r.sent ?? r.final ?? r.send),
      reason: s(r.reason ?? r.deleteReason ?? r.why),
    };
  }
  if (typeof t != "string") return null;
  let n = t
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim()
    .replace(/,(\s*[}\]])/g, "$1");
  const a = qm(n);
  a && (n = a);
  try {
    const r = JSON.parse(n.startsWith("{") ? n : n.slice(n.indexOf("{")));
    if (r && typeof r == "object") return BS(r, s);
  } catch {
    const i = n.match(/mood\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      o = n.match(/(input|deleted|unsent)\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      c = n.match(/(sent|final|send)\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      d = n.match(/reason\s*[:：]\s*([\s\S]*?)(?:\n|$)/i),
      u = ((i == null ? void 0 : i[1]) || "").trim(),
      f = ((o == null ? void 0 : o[2]) || "").trim(),
      p = ((c == null ? void 0 : c[2]) || "").trim(),
      m = ((d == null ? void 0 : d[1]) || "").trim();
    if (u || f || p || m)
      return { mood: s(u), input: s(f), sent: s(p), reason: s(m) };
  }
  return null;
}
function FR(t, s) {
  var f;
  const n = { envelopeHeartVoice: null, envelopeDraft: null },
    a = DR(t);
  if (!a || typeof a != "object")
    return {
      replyText: t,
      parseMeta: { mode: "fallback_legacy", errorCode: "json_parse_failed" },
      ...n,
    };
  if (a.version !== 1)
    return {
      replyText: t,
      parseMeta: { mode: "fallback_legacy", errorCode: "unsupported_version" },
      ...n,
    };
  const r = IR(a);
  if (!((f = r == null ? void 0 : r.messages) != null && f.length))
    return {
      replyText: t,
      parseMeta: { mode: "fallback_legacy", errorCode: "empty_messages" },
      ...n,
    };
  if (!zR(r))
    return {
      replyText: t,
      parseMeta: { mode: "fallback_legacy", errorCode: "schema_invalid" },
      ...n,
    };
  const i = r.messages;
  let o = null;
  const c = r.heart_voice ?? r.heartVoice;
  if (typeof c == "string" && c.trim()) {
    const p = c.trim(),
      m = p.match(/\[HEART_VOICE\]([\s\S]*?)\[\/HEART_VOICE\]/i),
      h = m ? m[1].trim() : p;
    o = l1(h);
  }
  const d = BS(r.draft, s),
    u = i
      .slice(0, MR)
      .map($R)
      .map((p) => String(p || "").trim())
      .filter(Boolean);
  return u.length === 0
    ? {
        replyText: t,
        parseMeta: {
          mode: "fallback_legacy",
          errorCode: "no_renderable_segments",
        },
        envelopeHeartVoice: o,
        envelopeDraft: d,
      }
    : {
        replyText: u.join("||"),
        parseMeta: {
          mode: "structured",
          errorCode: null,
          acceptedCount: u.length,
        },
        envelopeHeartVoice: o,
        envelopeDraft: d,
      };
}
function zR(t) {
  const s = new Set([
      "version",
      "scene",
      "messages",
      "meta",
      "heart_voice",
      "heartVoice",
      "draft",
    ]),
    n = Object.keys(t || {});
  for (const a of n) if (!s.has(a)) return !1;
  if (
    (t.heart_voice != null && typeof t.heart_voice != "string") ||
    (t.heartVoice != null && typeof t.heartVoice != "string")
  )
    return !1;
  if (t.draft != null) {
    const a = t.draft;
    if (
      typeof a != "string" &&
      (typeof a != "object" || a === null || Array.isArray(a))
    )
      return !1;
  }
  if (
    !Array.isArray(t.messages) ||
    t.messages.length === 0 ||
    t.messages.length > 20
  )
    return !1;
  for (const a of t.messages) {
    if (!a || typeof a != "object" || Array.isArray(a)) return !1;
    const r = Object.keys(a);
    for (const o of r) if (!PS.has(o)) return !1;
    const i = String(a.type || "")
      .trim()
      .toLowerCase();
    if (!RS.has(i)) return !1;
    if (i === "html") {
      if (typeof a.html != "string" || !a.html.trim()) return !1;
    } else if (a.html != null) return !1;
    if (
      (a.text != null && typeof a.text != "string") ||
      (a.translation != null && typeof a.translation != "string") ||
      (a.replyToSnippet != null && typeof a.replyToSnippet != "string") ||
      (a.memeId != null && typeof a.memeId != "string") ||
      (a.note != null && typeof a.note != "string") ||
      (a.item != null && typeof a.item != "string") ||
      (a.amount != null &&
        !(Number.isFinite(Number(a.amount)) && Number(a.amount) > 0)) ||
      (a.price != null &&
        !(Number.isFinite(Number(a.price)) && Number(a.price) > 0)) ||
      (a.longSentenceVariants != null &&
        (!Array.isArray(a.longSentenceVariants) ||
          a.longSentenceVariants.length !== 3 ||
          a.longSentenceVariants.some(
            (o) => typeof o != "string" || !o.trim(),
          )))
    )
      return !1;
  }
  return !0;
}
const RR = ({
    replyText: t,
    currentChat: s,
    sceneOverride: n,
    chatId: a,
    quoteRoundsRef: r,
  }) => {
    if (
      !t ||
      typeof t != "string" ||
      !s ||
      s.isGroup ||
      !(!n || n === "chat" || n === "chat_heart" || n === "chat_regen")
    )
      return;
    const o = /\[REPLY\s*[:：]\s*["“'，]|【引用了/.test(t),
      c = r.current[a] || { rounds: 0 };
    (o ? (c.rounds = 0) : (c.rounds = (c.rounds || 0) + 1), (r.current[a] = c));
  },
  PR = ({
    replyText: t,
    scene: s,
    heartVoice: n,
    draft: a,
    wantHeartVoice: r,
    wantDrafts: i,
    isHeartOrRegen: o,
    contact: c,
    normalizeDraftFieldToString: d,
  }) => {
    let u = n,
      f = a;
    if (r && !u && t && o) {
      const p =
          (c == null ? void 0 : c.nickname) ||
          (c == null ? void 0 : c.name) ||
          "TA",
        h =
          String(t)
            .split(/\s*\|\|\s*|｜｜/g)
            .map((x) => x.trim())
            .filter(Boolean)
            .at(-1) || t,
        g = String(h).replace(/\s+/g, " ").slice(0, 28);
      u = `${p}把想说的咽了回去，先顺着气氛把话接住。${g ? `他/她心里还在反复掂量那句“${g}${g.length >= 28 ? "…" : ""}”。` : "他/她的情绪其实还没落地。"}`;
    }
    if (i && t && o) {
      const p =
          (c == null ? void 0 : c.nickname) ||
          (c == null ? void 0 : c.name) ||
          "TA",
        g = (
          String(t)
            .split(/\s*\|\|\s*|｜｜/g)
            .map((N) => N.trim())
            .filter(Boolean)
            .find(Boolean) ||
          t ||
          ""
        )
          .replace(/\[[A-Z_]+[^\]]*\]/g, "")
          .trim()
          .slice(0, 80),
        x = {
          mood: `${p}停了一下，像是改了主意才把话发出来。指尖在屏幕上犹豫了几秒，最后还是选择了更稳妥的那句。`,
          sent: g,
          input: "其实更想说的是：别让我一个人猜。",
          reason: "嘴硬、怕越界、情绪上头、怕被看穿",
        },
        v = ((N) => ({
          mood: d(N == null ? void 0 : N.mood),
          sent: d(N == null ? void 0 : N.sent),
          input: d(N == null ? void 0 : N.input),
          reason: d(N == null ? void 0 : N.reason),
        }))(f),
        b = [];
      (v.mood || b.push("mood"),
        v.sent || b.push("sent"),
        v.input || b.push("input"),
        v.reason || b.push("reason"),
        b.length > 0 &&
          (f = {
            mood: v.mood || x.mood,
            sent: v.sent || x.sent,
            input: v.input || x.input,
            reason: v.reason || x.reason,
          }));
    }
    return { heartVoice: u, draft: f };
  },
  OR = async ({
    chatId: t,
    isAutoReply: s = !1,
    timeSinceLastMessage: n = "",
    messagesOverride: a = null,
    listenTogetherState: r = null,
    sceneOverride: i = null,
    onStreamChunk: o = null,
    prependForwardCardHint: c = null,
    deps: d,
  }) => {
    var xe, ye, R, oe;
    const {
        chatsRef: u,
        chats: f,
        contacts: p,
        lastTypingStartRef: m,
        setChats: h,
        getEffectiveUser: g,
        setKeepAliveBoost: x,
        requestKeepAliveLock: y,
        chatConfig: v,
        getLastNRounds: b,
        callStateRef: N,
        moments: w,
        user: _,
        asyncStorage: A,
        summaries: k,
        archives: C,
        fetchWeather: M,
        fetchTime: E,
        toDateStr: S,
        TRACE_TODAY_KEY: j,
        PLAN_KEY: T,
        DEFAULT_CHAT_SETTINGS: I,
        quoteRoundsRef: L,
        phoneRecents: B,
        replyFailedChatIdRef: F,
        privateReplyInFlightRef: D,
        isHelpAssistantContact: $,
        apiConfig: P,
        addApiLog: z,
        runHelpAssistantReply: O,
        extractHelpAssistantDialogueLines: Z,
        callApi: K,
        normalizeDraftFieldToString: q,
        buildReplyRequestContextWithDepsFn: V = LR,
      } = d || {},
      ne = u ? u.current : f,
      le = ne.find((ee) => ee.id === t),
      ie = p.find((ee) => ee.id === (le == null ? void 0 : le.contactId)),
      X = Cl + 25 * 1e3,
      je = m.current;
    if (
      ((je == null ? void 0 : je.chatId) === t && Date.now() - je.ts < X) ||
      (le != null && le.isTyping)
    )
      return null;
    if (ie && le) {
      const ee = g(ie),
        H = a || le.messages,
        Y =
          !(le != null && le.isGroup) && ie != null && ie.id
            ? (ye =
                (xe = le == null ? void 0 : le.settings) == null
                  ? void 0
                  : xe.blockedRoles) == null
              ? void 0
              : ye[ie.id]
            : void 0,
        U =
          !(le != null && le.isGroup) &&
          (ie == null ? void 0 : ie.id) &&
          Y != null &&
          (typeof Y == "number" ||
            (typeof Y == "object" &&
              (Y == null ? void 0 : Y.unblockedAt) == null)),
        ce = U && Math.random() < 0.22,
        pe =
          typeof Y == "number"
            ? Y
            : typeof Y == "object" && (Y == null ? void 0 : Y.blockedAt) != null
              ? Y.blockedAt
              : null,
        se = (() => {
          var ge;
          if (!U) return 999;
          if (
            !((ge = le == null ? void 0 : le.settings) != null && ge.realTime)
          )
            return 0;
          const re = typeof pe == "number" && Number.isFinite(pe) ? pe : null;
          return re == null
            ? 0
            : (Array.isArray(H) ? H : []).filter((J) => {
                if (
                  !J ||
                  J.sender !== "them" ||
                  J.type === "system" ||
                  J.sender === "system" ||
                  J.type === "time_advance"
                )
                  return !1;
                const G = J.timestamp ? new Date(J.timestamp).getTime() : NaN;
                return Number.isFinite(G) ? G >= re : !1;
              }).length;
        })(),
        Te = U && se === 0,
        ke = U && !Te && Math.random() < 0.22;
      ((m.current = { chatId: t, ts: Date.now() }),
        h((re) => re.map((he) => (he.id === t ? { ...he, isTyping: !0 } : he))),
        (R = D == null ? void 0 : D.current) == null || R.add(t));
      const W = Cl + 15 * 1e3;
      let ue = setTimeout(() => {
        ((m.current = null),
          h((re) =>
            re.map((he) => (he.id === t ? { ...he, isTyping: !1 } : he)),
          ));
      }, W);
      try {
        x(!0);
        let re = { release: () => {} };
        try {
          re = await Promise.race([
            y(),
            new Promise((fe, He) =>
              setTimeout(() => He(new Error("keepalive_lock_timeout")), 3e3),
            ),
          ]);
        } catch {}
        if ($(ie)) {
          let fe;
          try {
            const He = [...(H || [])]
                .reverse()
                .find(
                  (Re) => Re.sender === "me" && String(Re.text || "").trim(),
                ),
              Ie = ((He == null ? void 0 : He.text) || "").trim(),
              Ce = Z(H, 14);
            !(P != null && P.endpoint) || !(P != null && P.key)
              ? (fe = {
                  plainAnswer:
                    "请先在手机的「设置 → API 配置」中填写接口地址和密钥，再回到聊天里点「接收」调用教程助手。",
                  excerpts: [],
                  cards: [],
                })
              : (fe = await O({
                  apiConfig: P,
                  addApiLog: z,
                  userQuery: Ie,
                  recentDialogueLines: Ce,
                  personaSetting: ie == null ? void 0 : ie.setting,
                }));
          } catch (He) {
            fe = {
              plainAnswer: `调用失败：${(He == null ? void 0 : He.message) || String(He)}`,
              excerpts: [],
              cards: [],
            };
          } finally {
            ((m.current = null),
              re.release(),
              x(!1),
              ue && clearTimeout(ue),
              h((He) =>
                He.map((Ie) => (Ie.id === t ? { ...Ie, isTyping: !1 } : Ie)),
              ));
          }
          return { helpAssistantPayload: fe };
        }
        const {
          historyMessages: he,
          recentMoments: ge,
          relevantWorldBooks: J,
          chatSummaries: G,
          settingsWithData: we,
          scene: Q,
          calculatedTimeGap: ve,
          traceAndPlanContext: Ve,
          mustQuoteThisRound: Ae,
          mustQuoteTextSnippet: te,
          contextLimitUsed: Se,
          contextLimitMode: Fe,
          replyContextDiagnostics: $e,
        } = await V({
          currentChat: le,
          messagesToUse: H,
          chatConfig: v,
          getLastNRounds: b,
          callStateRef: N,
          contact: ie,
          currentUser: ee,
          moments: w,
          user: _,
          asyncStorage: A,
          summaries: k,
          chatId: t,
          archives: C,
          allChats: ne,
          contacts: p,
          sceneOverride: i,
          isAutoReply: s,
          timeSinceLastMessage: n,
          fetchWeather: M,
          fetchTime: E,
          toDateStr: S,
          TRACE_TODAY_KEY: j,
          PLAN_KEY: T,
          DEFAULT_CHAT_SETTINGS: I,
          quoteRoundsRef: L,
          phoneRecents: B,
          wantBlockedFriendRequest: ce,
          wantBlockedPhoneCallInvite: ke,
          blockedFirstPhoneOrTextExclusive: Te,
        });
        let tt = "",
          Xe = null,
          ht = null;
        const Pe = { current: null };
        try {
          let fe = await K(he, ie, Q, we, ge, J, G, s, ve, ee, r, Ve, {
            onStreamChunk: o || void 0,
            prependForwardCardHint: c,
            chatId: t,
            mustQuoteThisRound: Ae,
            mustQuoteTextSnippet: te || "（用户上一条消息）",
            wantBlockedFriendRequest: ce,
            wantBlockedPhoneCallInvite: ke,
            blockedFirstPhoneOrTextExclusive: Te,
            apiLogIdOutRef: Pe,
            contextLimitUsed: Se,
            contextLimitMode: Fe,
            replyContextDiagnostics: $e,
          });
          if (fe && typeof fe == "string") {
            const {
              replyText: He,
              heartVoice: Ie,
              draft: Ce,
              wantHeartVoice: Re,
              wantDrafts: De,
              isHeartOrRegen: at,
              structuredParseMeta: ft,
            } = OS({
              rawReply: fe,
              settingsWithData: we,
              scene: Q,
              normalizeDraftFieldToString: q,
            });
            if (
              ((tt = He),
              (Xe = Ie),
              (ht = Ce),
              we != null &&
                we.structuredReplyEnabled &&
                ft &&
                typeof z == "function")
            ) {
              const vt = Pe == null ? void 0 : Pe.current;
              vt &&
                z({
                  id: vt,
                  structuredParse: {
                    mode: ft.mode || "fallback_legacy",
                    errorCode: ft.errorCode || null,
                    acceptedCount: ft.acceptedCount ?? 0,
                  },
                });
            }
            (RR({
              replyText: tt,
              currentChat: le,
              sceneOverride: i,
              chatId: t,
              quoteRoundsRef: L,
            }),
              ({ heartVoice: Xe, draft: ht } = PR({
                replyText: tt,
                scene: Q,
                heartVoice: Xe,
                draft: ht,
                wantHeartVoice: Re,
                wantDrafts: De,
                isHeartOrRegen: at,
                contact: ie,
                normalizeDraftFieldToString: q,
              })));
          }
        } catch (fe) {
          ((m.current = null),
            ((fe == null ? void 0 : fe.name) === "AbortError" ||
              ((fe == null ? void 0 : fe.name) === "TypeError" &&
                /fetch|network|failed/i.test(
                  String(fe == null ? void 0 : fe.message),
                ))) &&
              (F.current = t),
            h((Ie) =>
              Ie.map((Ce) => (Ce.id === t ? { ...Ce, isTyping: !1 } : Ce)),
            ));
        } finally {
          ((m.current = null), re.release(), x(!1), ue && clearTimeout(ue));
        }
        const _t = {
            ...(ke === !0 ? { blockedPhoneInviteOnlyRound: !0 } : {}),
            ...(Te ? { blockedFirstPhoneOrTextExclusive: !0 } : {}),
          },
          Ee = Object.keys(_t).length > 0;
        return (Xe != null || ht) && tt
          ? { replyText: tt, heartVoice: Xe, draft: ht, ...(Ee ? _t : {}) }
          : tt && Ee
            ? { replyText: tt, ..._t }
            : tt;
      } finally {
        (oe = D == null ? void 0 : D.current) == null || oe.delete(t);
      }
    }
    return null;
  },
  Xw = (t) => {
    const s = new Set(["chat", "voice", "phone_call"]),
      n = new Set([
        "chat",
        "voice",
        "phone_call",
        "chat_heart",
        "chat_regen",
        "group_chat",
        "group",
      ]);
    return { allowSplitBubble: s.has(t), allowEnvTimeWeather: n.has(t) };
  };
function Og() {
  const t = mv().openingLines;
  return !Array.isArray(t) || t.length === 0
    ? []
    : t
        .filter((s) => s && String(s).trim())
        .map((s, n) => ({
          id: `opening-${Date.now()}-${n}`,
          text: String(s).trim(),
          sender: "them",
          type: "text",
          timestamp: new Date(Date.now() + n * 200).toISOString(),
        }));
}
const hm = {
    background: "",
    opacity: 100,
    userCity: "",
    aiCity: "",
    realWeather: !1,
    realTime: !1,
    autoMessageEnabled: !1,
    autoMessageInterval: 30,
    autoTraceEnabled: !1,
    autoTraceIntervalHours: 2,
    autoMomentEnabled: !1,
    enableTTS: !1,
    customPromptEnabled: !1,
    singleLongSentenceMode: !1,
    longSentencePreferredVariantIndex: null,
    customPrompt: "",
    customPromptPresetName: "",
    customPromptPresets: [],
    activeCustomPromptPresetId: null,
    autoSummaryEnabled: !1,
    summaryThreshold: 10,
    useOfflineMemories: !1,
    selectedOfflineMemoryIds: [],
    enableHeartVoice: !1,
    enableDrafts: !1,
    structuredReplyEnabled: !1,
  },
  BR = (t) => {
    const [s, n] = l.useState([]),
      [a, r] = l.useState(!1);
    l.useEffect(() => {
      (async () => {
        const F = await be.get("chat_app_chats");
        (F != null &&
          Array.isArray(F) &&
          n((D) =>
            F.map(($) => {
              var K, q;
              const P = D == null ? void 0 : D.find((V) => V.id === $.id),
                z =
                  ((K = P == null ? void 0 : P.messages) == null
                    ? void 0
                    : K.length) ?? 0,
                O = ((q = $.messages) == null ? void 0 : q.length) ?? 0,
                Z = z > O;
              return {
                ...$,
                isTyping: (P || {}).isTyping ?? !1,
                messages: Z ? P.messages : $.messages || [],
              };
            }),
          ),
          r(!0));
      })();
    }, []);
    const i = l.useRef(null);
    (l.useEffect(() => {
      if (!a) return;
      const B = s.map((F) => ({ ...F, isTyping: !1 }));
      if (typeof document < "u" && document.visibilityState === "hidden") {
        if ((Array.isArray(s) ? s : []).some((D) => D && D.isTyping)) {
          i.current = B;
          return;
        }
        ((i.current = null), be.set("chat_app_chats", B));
        return;
      }
      ((i.current = null), be.set("chat_app_chats", B));
    }, [s, a]),
      l.useEffect(() => {
        if (!a) return;
        const B = () => {
          if (document.visibilityState !== "visible" || i.current == null)
            return;
          const F = i.current;
          ((i.current = null), be.set("chat_app_chats", F));
        };
        return (
          document.addEventListener("visibilitychange", B),
          () => document.removeEventListener("visibilitychange", B)
        );
      }, [a]));
    const o = l.useRef(s);
    l.useEffect(() => {
      o.current = s;
    }, [s]);
    const [c, d] = l.useState(null),
      u = l.useRef(c);
    (l.useEffect(() => {
      u.current = c;
    }, [c]),
      l.useEffect(() => {
        c &&
          n((B) =>
            B.map((F) => (F.id !== c || !F.unread ? F : { ...F, unread: 0 })),
          );
      }, [c]));
    const [f, p] = l.useState({}),
      [m, h] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        const F = await be.get("chat_app_summaries");
        (F != null && p(F), h(!0));
      })();
    }, []),
      l.useEffect(() => {
        m && be.set("chat_app_summaries", f);
      }, [f, m]));
    const [g, x] = l.useState([]),
      [y, v] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        const F = await be.get("chat_app_presets");
        (F != null && x(F), v(!0));
      })();
    }, []),
      l.useEffect(() => {
        y && be.set("chat_app_presets", g);
      }, [g, y]));
    const b = (B, F) => {
        const { groupName: D, ...$ } = F || {};
        n((P) =>
          P.map((z) => {
            if (z.id !== B) return z;
            const O = { ...z, settings: { ...z.settings, ...$ } };
            return (D !== void 0 && (O.groupName = D), O);
          }),
        );
      },
      N = (B, F, D) => {
        n(($) =>
          $.map((P) => {
            if (P.id === B) {
              const z = P.messages.map((O) =>
                O.id === F ? { ...O, ...D } : O,
              );
              return { ...P, messages: z };
            }
            return P;
          }),
        );
      },
      w = (B) => {
        const F = s.find(
          (z) => z.contactId != null && String(z.contactId) === String(B),
        );
        if (F) return F.id;
        const $ = String(B) === String(io) ? Og() : [],
          P = {
            id: Date.now().toString(),
            contactId: B,
            messages: $,
            lastMessage: $.length > 0 ? $[$.length - 1].text : "",
            timestamp:
              $.length > 0
                ? $[$.length - 1].timestamp
                : new Date().toISOString(),
            unread: 0,
            settings: { ...hm },
            currentArchiveId: null,
            lastSummaryMessageCount: 0,
            lastSummaryRoundCount: 0,
            callHistory: [],
          };
        return (n((z) => [P, ...z]), P.id);
      },
      _ = l.useMemo(() => k$(n), []);
    return {
      chats: s,
      setChats: n,
      chatsRef: o,
      activeChatId: c,
      setActiveChatId: d,
      activeChatIdRef: u,
      summaries: f,
      setSummaries: p,
      presets: g,
      setPresets: x,
      updateChatSettings: b,
      updateMessage: N,
      createChat: w,
      createGroupChat: _,
      deleteChat: (B) => {
        (n((F) => F.filter((D) => D.id !== B)), c === B && d(null));
      },
      togglePinChat: (B) => {
        n((F) =>
          F.map((D) => (D.id === B ? { ...D, isPinned: !D.isPinned } : D)),
        );
      },
      clearChatMessages: (B) => {
        n((F) =>
          F.map((D) => {
            if (D.id === B) {
              const P = String(D.contactId) === String(io) ? Og() : [],
                z = P.length > 0 ? P[P.length - 1] : null;
              return {
                ...D,
                messages: P,
                lastMessage: (z && z.text) || "",
                timestamp: z ? z.timestamp : new Date().toISOString(),
              };
            }
            return D;
          }),
        );
      },
      deleteMessages: (B, F) => {
        n((D) =>
          D.map(($) => {
            if ($.id === B) {
              const P = $.messages.filter((q) => !F.includes(q.id)),
                O = String($.contactId) === String(io) ? Og() : [],
                Z = P.length === 0 && O.length > 0 ? O : P,
                K = Z.length > 0 ? Z[Z.length - 1] : null;
              return {
                ...$,
                messages: Z,
                lastMessage: K ? K.text || "系统消息" : "",
                timestamp: K ? K.timestamp : $.timestamp,
              };
            }
            return $;
          }),
        );
      },
      recallMessage: (B, F) => {
        n((D) =>
          D.map(($) => {
            if ($.id === B) {
              const P = $.messages.map((z) =>
                z.id === F
                  ? {
                      ...z,
                      isRecalled: !0,
                      originalContent: z.text,
                      text: "你撤回了一条消息",
                    }
                  : z,
              );
              return { ...$, messages: P };
            }
            return $;
          }),
        );
      },
      deleteSummary: (B, F) => {
        p((D) => ({ ...D, [B]: (D[B] || []).filter(($) => $.id !== F) }));
      },
      updateSummary: (B, F, D) => {
        D != null &&
          D.trim() &&
          p(($) => ({
            ...$,
            [B]: ($[B] || []).map((P) =>
              P.id === F ? { ...P, content: D.trim() } : P,
            ),
          }));
      },
      injectOpeningLines: (B, F) => {
        if (!F || !Array.isArray(F) || F.length === 0) return;
        const D = F.filter(($) => $ && String($).trim()).map(($, P) => ({
          id: `opening-${Date.now()}-${P}`,
          text: String($).trim(),
          sender: "them",
          type: "text",
          timestamp: new Date(Date.now() + P * 200).toISOString(),
        }));
        D.length !== 0 &&
          n(($) =>
            $.map((P) => {
              if (P.id !== B || (P.messages && P.messages.length > 0)) return P;
              const z = D[D.length - 1];
              return {
                ...P,
                messages: D,
                lastMessage: z.text || "[消息]",
                timestamp: z.timestamp,
              };
            }),
          );
      },
      startWithOpening: (B, F, D) => {
        const $ =
          F && Array.isArray(F) && F.length > 0
            ? F.filter((P) => P && String(P).trim()).map((P, z) => ({
                id: `opening-${Date.now()}-${z}`,
                text: String(P).trim(),
                sender: "them",
                type: "text",
                timestamp: new Date(Date.now() + z * 200).toISOString(),
              }))
            : [];
        n((P) =>
          P.map((z) => {
            var Z;
            if (z.id !== B) return z;
            const O = $.length > 0 ? $[$.length - 1] : null;
            return {
              ...z,
              messages: $,
              lastMessage: O ? O.text : "",
              timestamp: O ? O.timestamp : new Date().toISOString(),
              settings: {
                ...z.settings,
                selectedOpeningId:
                  D ??
                  ((Z = z.settings) == null ? void 0 : Z.selectedOpeningId),
              },
            };
          }),
        );
      },
      addTimeAdvanceMessage: (B, { timestamp: F, note: D = "" }) => {
        if (!F || !(F instanceof Date)) return;
        const $ = {
          id: `ta-${Date.now()}`,
          type: "time_advance",
          timestamp: F.toISOString(),
          note: String(D || "").trim(),
        };
        n((P) =>
          P.map((z) => {
            if (z.id !== B) return z;
            const O = $;
            return {
              ...z,
              messages: [...(z.messages || []), $],
              lastMessage: O.note || "时间推进",
              timestamp: O.timestamp,
            };
          }),
        );
      },
      addMembersToGroup: (B, F) => {
        n((D) =>
          D.map(($) => {
            if ($.id === B && $.isGroup) {
              const P = $.memberIds || [],
                z = F.filter((O) => !P.includes(O));
              return z.length === 0 ? $ : { ...$, memberIds: [...P, ...z] };
            }
            return $;
          }),
        );
      },
      removeMembersFromGroup: (B, F) => {
        const D = new Set((F || []).map(($) => String($)));
        D.size !== 0 &&
          n(($) =>
            $.map((P) => {
              if (P.id === B && P.isGroup) {
                const O = (P.memberIds || []).filter((K) => !D.has(String(K))),
                  Z = { ...P.settings };
                return (
                  Z.memberRoles &&
                    Object.keys(Z.memberRoles).forEach((K) => {
                      D.has(String(K)) && delete Z.memberRoles[K];
                    }),
                  Z.memberTitles &&
                    Object.keys(Z.memberTitles).forEach((K) => {
                      D.has(String(K)) && delete Z.memberTitles[K];
                    }),
                  Z.mutedMembers &&
                    Object.keys(Z.mutedMembers).forEach((K) => {
                      D.has(String(K)) && delete Z.mutedMembers[K];
                    }),
                  { ...P, memberIds: O, settings: Z }
                );
              }
              return P;
            }),
          );
      },
    };
  },
  Bg = (t, s) => `phone_app_trace_today_${t}_${s}`,
  Ug = 3200,
  Gg = 900,
  Hg = (t, s) => `phone_app_plan_${t}_${s}`,
  Wg = (t) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`,
  Yg = 20,
  UR = 8e3,
  ej = Cl + 90 * 1e3,
  GR = 5e3,
  HR = "chat_api_logs_verbose_enabled",
  WR = "chat_api_logs_verbose_enabled_session",
  YR = () => {
    try {
      const t = localStorage.getItem(HR);
      if (t === "1" || t === "0") return t === "1";
    } catch {}
    try {
      return sessionStorage.getItem(WR) === "1";
    } catch {
      return !1;
    }
  },
  Rl = (t, s = 600) =>
    String(t || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, Math.max(80, s)),
  Vg = (t, s = "") => {
    var i;
    if (!t || typeof t != "object")
      return `响应非对象 JSON，rawLen=${String(s || "").length}`;
    const a = [`topKeys=${Object.keys(t).slice(0, 12).join(",") || "(none)"}`];
    if (Array.isArray(t.choices)) {
      a.push(`choices=${t.choices.length}`);
      const o = (i = t.choices) == null ? void 0 : i[0],
        c = o == null ? void 0 : o.finish_reason;
      c != null && a.push(`choice0.finish_reason=${String(c)}`);
      const d = o == null ? void 0 : o.message;
      if (d && typeof d == "object") {
        const u = Object.keys(d).slice(0, 10).join(",");
        a.push(`choice0.messageKeys=${u || "(none)"}`);
        const f = d.content;
        if (Array.isArray(f)) a.push(`choice0.content=array(${f.length})`);
        else if (typeof f == "string") {
          const p = Rl(f, 120);
          (a.push("choice0.contentType=string"),
            a.push(`choice0.contentLen=${f.length}`),
            a.push(`choice0.contentPreview=${p || "(empty)"}`));
        } else a.push(`choice0.contentType=${f == null ? "null" : typeof f}`);
      }
    }
    if (
      (Array.isArray(t.candidates) &&
        a.push(`candidates=${t.candidates.length}`),
      Array.isArray(t.output) && a.push(`output=${t.output.length}`),
      typeof t.output_text == "string" &&
        a.push(`output_text_len=${t.output_text.length}`),
      t.usage && typeof t.usage == "object")
    ) {
      const o = Number(t.usage.prompt_tokens),
        c = Number(t.usage.completion_tokens),
        d = Number(t.usage.total_tokens);
      (Number.isFinite(o) && a.push(`usage.prompt_tokens=${o}`),
        Number.isFinite(c) && a.push(`usage.completion_tokens=${c}`),
        Number.isFinite(d) && a.push(`usage.total_tokens=${d}`));
    }
    const r = String(s || "").length;
    return (r > 0 && a.push(`rawLen=${r}`), a.join(" | "));
  },
  tj = (t) => {
    const s = String(t || "").trim();
    return !!(
      !s ||
      /^\s*\[TRANS:[\s\S]*\]\s*$/u.test(s) ||
      /^[.,!?;:~_=+|/\\`'"，。！？、；：…·—\s-]+$/u.test(s) ||
      (s.length <= 2 && !/[\p{L}\p{N}]/u.test(s))
    );
  },
  sj = (t) => {
    const s = String(t || "").trim();
    return s
      ? /^\s*\[TRANS:[\s\S]*\]\s*$/u.test(s)
        ? "translation_only_tag"
        : /^[.,!?;:~_=+|/\\`'"，。！？、；：…·—\s-]+$/u.test(s)
          ? "punctuation_only"
          : s.length <= 2 && !/[\p{L}\p{N}]/u.test(s)
            ? "too_short_no_alnum"
            : "unknown"
      : "empty_text";
  },
  nj = (t) => {
    const n = String(t || "")
      .trim()
      .match(/^\s*\[TRANS:([\s\S]*)\]\s*$/u);
    if (!n) return "";
    const a = String(n[1] || "").trim();
    return a
      ? a
          .split(/\|\|+/)
          .map((i) => i.trim())
          .filter(Boolean)
          .join("||")
          .trim()
      : "";
  },
  aj = (t) => {
    if (!t || typeof t.entries != "function") return null;
    const s = new Set([
        "content-type",
        "server",
        "via",
        "cf-ray",
        "request-id",
        "x-request-id",
        "x-requestid",
        "traceparent",
        "x-envoy-upstream-service-time",
        "openai-processing-ms",
      ]),
      n = {};
    for (const [a, r] of t.entries()) {
      const i = String(a || "").toLowerCase();
      i &&
        (s.has(i) ||
          i.startsWith("x-ratelimit-") ||
          i.startsWith("x-openai-")) &&
        (n[i] = String(r || ""));
    }
    return Object.keys(n).length ? n : null;
  },
  rj = ({
    requestModel: t,
    responseMeta: s,
    errorKind: n,
    failureStage: a,
    failureSummary: r,
  }) => {
    var d;
    const i = Number(s == null ? void 0 : s.status),
      o = Number(
        (d = s == null ? void 0 : s.usage) == null
          ? void 0
          : d.completion_tokens,
      ),
      c = String((s == null ? void 0 : s.model) || "").trim();
    return n === "EMPTY_BODY" && i === 200 && a === "content_extract_done"
      ? Number.isFinite(o) && o === 0
        ? "HTTP 200 但 completion_tokens=0，属于上游空完成（网关/模型返回了空正文）。"
        : "HTTP 200 且正文提取阶段为空，疑似上游响应为空或正文字段被兼容层改写。"
      : n === "TIMEOUT"
        ? "请求超时，疑似网关挂起、上游排队过久或浏览器连接未收口。"
        : n === "PARSE"
          ? "响应体不是合法 JSON，疑似网关返回了非标准格式。"
          : t && c && t !== c
            ? `请求模型与返回模型不一致（req=${t} / resp=${c}），可能存在网关路由改写。`
            : String(r || "").includes("content_unusable=1")
              ? String(r || "").includes("unusable_reason=translation_only_tag")
                ? "接口仅返回了 [TRANS:…] 译文标签，缺少母语正文，已按无效正文拦截。"
                : "接口返回了“伪成功正文”（仅标点/无信息字符），已按无效正文处理。"
              : "";
  },
  ij = ({
    errorKind: t,
    failureStage: s,
    failureSummary: n,
    responseMeta: a,
  }) => {
    var c;
    const r = String(n || ""),
      i = Number(a == null ? void 0 : a.status),
      o = Number(
        (c = a == null ? void 0 : a.usage) == null
          ? void 0
          : c.completion_tokens,
      );
    return t === "TIMEOUT"
      ? {
          code: "TIMEOUT_HANG",
          title: "请求挂起超时",
          hint: "网关连接长时间未收口，优先更换站点或检查该站点链路稳定性。",
          evidence: `status=${Number.isFinite(i) ? i : "n/a"}`,
        }
      : t === "PARSE"
        ? {
            code: "NON_JSON_RESPONSE",
            title: "响应非 JSON",
            hint: "该站点兼容层返回了非 OpenAI 兼容 JSON，需切换兼容模式或站点。",
            evidence: `stage=${s || "unknown"}`,
          }
        : t === "EMPTY_BODY"
          ? r.includes("unusable_reason=translation_only_tag")
            ? {
                code: "TRANSLATION_ONLY",
                title: "仅返回译文标签",
                hint: "模型未产出母语正文，仅输出 [TRANS] 标签；需调整该站点模型提示兼容或换站点。",
                evidence: "unusable_reason=translation_only_tag",
              }
            : r.includes("unusable_reason=punctuation_only") ||
                r.includes("unusable_reason=too_short_no_alnum")
              ? {
                  code: "LOW_SIGNAL_OUTPUT",
                  title: "低信息量伪成功",
                  hint: "返回仅标点/极短无效文本；通常为站点后端退化输出。",
                  evidence: r,
                }
              : Number.isFinite(o) && o === 0 && i === 200
                ? {
                    code: "EMPTY_COMPLETION_200",
                    title: "200 但空完成",
                    hint: "上游给了合法壳响应但 completion_tokens=0，属于网关/模型空完成。",
                    evidence: `status=200, completion_tokens=0, stage=${s || "unknown"}`,
                  }
                : {
                    code: "EMPTY_BODY_OTHER",
                    title: "正文为空",
                    hint: "响应到达但未提取到有效正文，检查站点兼容层与模型输出格式。",
                    evidence: r || `stage=${s || "unknown"}`,
                  }
          : t === "HTTP_4XX" || t === "HTTP_5XX"
            ? {
                code: "HTTP_ERROR",
                title: "HTTP 状态异常",
                hint: "请求被网关拒绝或上游异常，检查 key/限流/路由可用性。",
                evidence: `status=${Number.isFinite(i) ? i : "n/a"}`,
              }
            : {
                code: "UNKNOWN",
                title: "未知失败",
                hint: "请结合流程轨迹与原始响应继续排查。",
                evidence: `errorKind=${String(t || "UNKNOWN")}`,
              };
  },
  VR = (t) => {
    const s = String((t == null ? void 0 : t.message) || ""),
      n = s.toLowerCase(),
      a = String((t == null ? void 0 : t.name) || ""),
      r =
        typeof navigator < "u" && typeof navigator.onLine == "boolean"
          ? navigator.onLine
          : null,
      i = a === "AbortError",
      o = /failed to fetch|networkerror|network request failed/.test(n),
      c = /cors|cross-origin|blocked by csp/.test(n),
      d = /enotfound|name not resolved|dns/.test(n),
      u = /ssl|tls|certificate|cert/.test(n);
    return {
      name: a || null,
      message: s || null,
      online: r,
      reasonCode: i
        ? "abort_or_timeout"
        : c
          ? "cors_blocked"
          : d
            ? "dns_resolution"
            : u
              ? "tls_or_certificate"
              : o
                ? "network_fetch_failed"
                : "unknown_network",
      isAbort: i,
      isCors: c,
      isDns: d,
      isTls: u,
      isFailedToFetch: o,
    };
  },
  JR = (t, s) => {
    if (s) return !0;
    const n = String(t || "");
    return (
      n === "moments_reply" ||
      n === "moment_post_with_npc_comments" ||
      n === "moment_npc_post_with_comments" ||
      n === "moment_npc_comments" ||
      n === "phone_call" ||
      n === "phone_call_outgoing_combined"
    );
  },
  KR = (t, s, n, a, r, i, o, c, d, u, f, p, m, h, g, x, y = {}, v = []) => {
    const b = l.useRef({}),
      N = l.useRef(h);
    l.useEffect(() => {
      N.current = h;
    }, [h]);
    const [w, _] = l.useState([]);
    l.useEffect(() => {
      const ne = setInterval(() => {
        const le = Date.now();
        _((ie) => {
          let X = !1;
          const je = ie.map((xe) => {
            if (!xe || xe.status !== "pending") return xe;
            const ye = Number(xe.timestamp);
            if (!Number.isFinite(ye)) return xe;
            const R = le - ye;
            if (R < ej) return xe;
            const oe = `请求超时兜底：该请求已超过 ${Math.round(ej / 1e3)}s 仍未结束，可能是网关长时间挂起、浏览器 fetch 未正常中断或上游连接未收口（该条为前端兜底收口，不等同于上游明确报错）。`,
              ee = ij({
                errorKind: "TIMEOUT",
                failureStage: "",
                failureSummary: "",
                responseMeta: (xe == null ? void 0 : xe.responseMeta) || null,
              }),
              H = (xe == null ? void 0 : xe.verboseLogEnabled) === !0;
            X = !0;
            const Y = {
              ...xe,
              status: "error",
              duration: R,
              error: xe.error || oe,
              errorKind: xe.errorKind || "TIMEOUT",
              errorStatus: xe.errorStatus || "timeout",
              errorRaw: xe.errorRaw || oe,
            };
            return H
              ? {
                  ...Y,
                  failureReasonCode: ee.code,
                  failureReasonTitle: ee.title,
                  failureReasonHint: ee.hint,
                  failureReasonEvidence: ee.evidence,
                  diagnosis: xe.diagnosis || `${ee.title}：${ee.hint}`,
                }
              : Y;
          });
          return X ? je : ie;
        });
      }, GR);
      return () => clearInterval(ne);
    }, []);
    const A = l.useRef(null),
      k = l.useRef(null),
      C = l.useRef(new Set()),
      M = async (ne, le) => kR(ne, le),
      E = async (ne, le) => SR(ne, le),
      S = (ne, le = {}) => {
        const ie = Number.isFinite(le.maxItems) ? Math.max(1, le.maxItems) : 40,
          X = Number.isFinite(le.maxTextLen)
            ? Math.max(40, le.maxTextLen)
            : 240,
          je = Array.isArray(ne) ? ne.slice(0, ie) : [],
          xe = (ye) => {
            if (typeof ye == "string") {
              const oe = ye.replace(/\s+/g, " ").trim();
              return oe.length > X ? `${oe.slice(0, X)}...` : oe;
            }
            if (Array.isArray(ye)) {
              const ee = ye
                .map((H) => {
                  if (!H || typeof H != "object") return "";
                  if (H.type === "text") {
                    const Y = String(H.text || "")
                      .replace(/\s+/g, " ")
                      .trim();
                    return Y ? `[text] ${Y}` : "[text]";
                  }
                  return H.type === "image_url"
                    ? "[image]"
                    : `[${String(H.type || "part")}]`;
                })
                .filter(Boolean)
                .join(" | ")
                .replace(/\s+/g, " ")
                .trim();
              return ee.length > X ? `${ee.slice(0, X)}...` : ee;
            }
            if (ye == null) return "";
            const R = String(ye).replace(/\s+/g, " ").trim();
            return R.length > X ? `${R.slice(0, X)}...` : R;
          };
        return je.map((ye, R) => ({
          idx: R,
          role:
            typeof (ye == null ? void 0 : ye.role) == "string"
              ? ye.role
              : "unknown",
          content: xe(ye == null ? void 0 : ye.content),
        }));
      },
      j = async (
        ne,
        le,
        ie = "chat",
        X = {},
        je = [],
        xe = [],
        ye = [],
        R = !1,
        oe = "",
        ee = null,
        H = null,
        Y = null,
        U = {},
      ) => {
        var Ve, Ae, te, Se, Fe, $e, tt, Xe, ht, Pe, ut, _t, Ee, fe, He, Ie, Ce;
        const {
          onStreamChunk: ce = null,
          prependForwardCardHint: pe = null,
          mustQuoteThisRound: se = !1,
          mustQuoteTextSnippet: Te = "",
          contextLimitUsed: ke = null,
          contextLimitMode: W = "",
          replyContextDiagnostics: ue = null,
          apiLogIdOutRef: re = null,
        } = typeof U == "object" && U !== null ? U : {};
        if (
          (re && typeof re == "object" && (re.current = null),
          !t || !t.endpoint || !t.key)
        )
          return "请先在设置中配置API。";
        const he = Date.now(),
          ge = `${he}-${Math.random().toString(36).slice(2, 8)}`,
          J = YR();
        re && typeof re == "object" && (re.current = ge);
        const G =
            ie === "memory_archive" || ie === "system_generation" ? 6e5 : Cl,
          we = ie === "memory_archive" || ie === "system_generation",
          Q = async (Re, De = "optional_read_timeout") =>
            Promise.race([
              Re(),
              new Promise((at, ft) => setTimeout(() => ft(new Error(De)), UR)),
            ]),
          ve = (Re) => {
            _((De) =>
              De.findIndex((ft) => ft.id === ge) >= 0
                ? De.map((ft) => (ft.id === ge ? { ...ft, ...Re } : ft))
                : [
                    {
                      id: ge,
                      timestamp: he,
                      type: "request",
                      scene: ie,
                      contact: (le == null ? void 0 : le.name) ?? "",
                      messages: [],
                      messageCount: 0,
                      rawSizeEstimate: 0,
                      verboseLogEnabled: J,
                      ...Re,
                    },
                    ...De,
                  ].slice(0, Yg),
            );
          };
        try {
          _((_e) =>
            [
              {
                id: ge,
                timestamp: he,
                type: "request",
                scene: ie,
                contact: (le == null ? void 0 : le.name) ?? "",
                messages: [],
                messageCount: 0,
                rawSizeEstimate: 0,
                status: "pending",
                verboseLogEnabled: J,
              },
              ..._e,
            ].slice(0, Yg),
          );
          let Re = { ...X };
          H && H.isActive && (Re.listenTogether = H);
          let De = [];
          if (u && f) {
            const yt = f
              .filter(
                (rt) => rt.boundContacts && rt.boundContacts.includes(le.id),
              )
              .map((rt) => rt.id);
            De = u.filter(
              (rt) =>
                rt.categoryIds && rt.categoryIds.some((ze) => yt.includes(ze)),
            );
          }
          let at = "";
          if (!we)
            try {
              const _e = await Promise.race([
                  be.get("meet_app_settings"),
                  new Promise((rt, ze) =>
                    setTimeout(() => ze(new Error("timeout")), 3e3),
                  ),
                ]),
                yt =
                  (le == null ? void 0 : le.id) &&
                  (_e == null ? void 0 : _e[le.id]);
              yt &&
                yt.syncSummaryToChat &&
                yt.summary &&
                (at = `【线下/遇见剧情总结】
${yt.summary}`);
            } catch {}
          let ft = "";
          const vt = U.chatId;
          if (!we && vt)
            try {
              const yt =
                ((await Q(
                  () => be.get("chat_app_douyin_memories"),
                  "douyin_memory_timeout",
                )) || {})[vt] || [];
              yt.length > 0 &&
                (ft = yt.map(
                  (rt) => `[${rt.npcName || "TA"}] ${rt.type}: ${rt.summary}`,
                ).join(`
`));
            } catch {}
          let Oe = "";
          try {
            const _e = le == null ? void 0 : le.id;
            if (!we && _e) {
              const yt = `couple_memo_ai_comment_inflight_${_e}`,
                rt = await Q(
                  () => be.get(yt, null),
                  "couple_memo_inflight_timeout",
                ),
                ze = Array.isArray(rt == null ? void 0 : rt.memoIds)
                  ? rt.memoIds
                  : [];
              if (ze.length > 0) {
                const lt = Su(_e),
                  it = await Q(
                    () => be.get(lt, []),
                    "couple_memo_entries_timeout",
                  ),
                  Ht = Array.isArray(it) ? it : [],
                  is = new Map(Ht.map((as) => [String(as.id), as])),
                  os = ze
                    .map((as) => is.get(String(as)))
                    .filter(Boolean)
                    .slice(0, 5);
                os.length > 0 &&
                  (Oe = os.map((vs) => {
                    const ts = (vs == null ? void 0 : vs.type) || "daily",
                      ys =
                        (vs == null ? void 0 : vs.privacyLevel) != null
                          ? String(vs.privacyLevel)
                          : "",
                      Vs =
                        String((vs == null ? void 0 : vs.title) || "").trim() ||
                        "无标题记录",
                      pt = String(
                        (vs == null ? void 0 : vs.content) || "",
                      ).trim(),
                      qe = pt.length > 1200 ? pt.slice(0, 1200) : pt;
                    return `- memoId:${String(vs.id)} serial:${String(vs.serial || "")} type:${ts} privacyLevel:${ys}
  title:${Vs}
  content:${qe}`;
                  }).join(`
`));
              }
            }
          } catch {}
          let Qe = "";
          try {
            const _e = le == null ? void 0 : le.id;
            if (!we && _e)
              if (Oe) Qe = "";
              else {
                const yt = `couple_memo_ta_sync_to_chat_${_e}`;
                if (
                  await Q(() => be.get(yt, !1), "couple_ta_memo_switch_timeout")
                ) {
                  const ze = Su(_e),
                    lt = await Q(
                      () => be.get(ze, []),
                      "couple_ta_memo_entries_timeout",
                    ),
                    Ht = (Array.isArray(lt) ? lt : [])
                      .filter(
                        (os) =>
                          (os == null ? void 0 : os.author) === "ta" &&
                          (os == null ? void 0 : os.source) === "ai",
                      )
                      .slice()
                      .sort((os, as) => {
                        const vs = Number(
                          (os == null ? void 0 : os.aiLastEditedAt) ??
                            (os == null ? void 0 : os.updatedAt) ??
                            (os == null ? void 0 : os.createdAt) ??
                            0,
                        );
                        return (
                          Number(
                            (as == null ? void 0 : as.aiLastEditedAt) ??
                              (as == null ? void 0 : as.updatedAt) ??
                              (as == null ? void 0 : as.createdAt) ??
                              0,
                          ) - vs
                        );
                      })
                      .slice(0, 8),
                    is = (os) =>
                      String(os || "")
                        .replace(/\[\[DEL\]\][\s\S]*?\[\[\/DEL\]\]/g, "")
                        .replace(/\[\[DEL\]\]/g, "")
                        .replace(/\[\[\/DEL\]\]/g, "");
                  Qe = Ht.map((os) => {
                    const as = (os == null ? void 0 : os.type) || "daily",
                      vs =
                        (os == null ? void 0 : os.privacyLevel) != null
                          ? String(os.privacyLevel)
                          : "",
                      ts =
                        String((os == null ? void 0 : os.title) || "").trim() ||
                        "无标题记录",
                      ys = is(os == null ? void 0 : os.content).trim(),
                      Vs = ys.length > 520 ? `${ys.slice(0, 520)}…` : ys;
                    return `- memoId:${String(os.id)} type:${as} privacyLevel:${vs}
  title:${ts}
  content:${Vs}`;
                  }).join(`
`);
                }
              }
          } catch {}
          let Ye = "";
          try {
            const _e = U.chatId,
              yt = _e ? a.find((it) => it.id === _e) : null,
              rt = !!(yt != null && yt.isGroup),
              ze = le == null ? void 0 : le.id,
              lt = Xw(ie).allowSplitBubble;
            if (
              ze &&
              lt &&
              !rt &&
              le != null &&
              le.listenTogetherMemoryInChat
            ) {
              const it = Number(le.listenTogetherMemoryLineCount),
                Ht = Math.min(200, Math.max(1, Number.isFinite(it) ? it : 30)),
                is = await Q(() => Qm(ze), "listen_together_history_timeout"),
                os = Array.isArray(is) ? is.slice(-Ht) : [];
              Ye = rR(os);
            }
          } catch {}
          const Ze = Ou(
              le,
              ee || s,
              ie,
              Re,
              je,
              xe,
              ye,
              at,
              R,
              oe,
              De,
              Y,
              (X.customPromptEnabled && X.customPrompt) || "",
              ft,
              Oe,
              Qe,
              Ye,
            ),
            Ue =
              !!(X != null && X.singleLongSentenceMode) &&
              (ie === "chat" || ie === "chat_heart" || ie === "chat_regen"),
            me =
              !!(X != null && X.structuredReplyEnabled) &&
              ie !== "group_chat" &&
              ie !== "group" &&
              ie !== "memory_archive" &&
              ie !== "system_generation" &&
              ie !== "video_summary" &&
              ie !== "video_call_end_summary" &&
              ie !== "phone_call_end_summary" &&
              ie !== "phone_call_resummary" &&
              ie !== "phone_call_outgoing_combined",
            jt = me && !R;
          let Gt = null;
          const Pt = [
            { role: "system", content: Ze },
            ...ne.map((_e) => {
              if (
                _e &&
                typeof _e.role == "string" &&
                _e.content != null &&
                typeof _e.content == "string"
              )
                return { role: _e.role, content: _e.content };
              let yt = "";
              if (X != null && X.realTime && _e.timestamp) {
                const is = new Date(_e.timestamp);
                if (Gt) {
                  const os = is - Gt;
                  if (os > 5 * 60 * 1e3) {
                    const as = Math.floor(os / 6e4);
                    let vs = "";
                    as < 60
                      ? (vs = `${as}分钟`)
                      : as < 24 * 60
                        ? (vs = `${Math.floor(as / 60)}小时`)
                        : (vs = `${Math.floor(as / (24 * 60))}天`);
                    const ts = is.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: !1,
                    });
                    yt = `
[SYSTEM_TIME_ONLY_勿输出] 距离上一条消息已过去 ${vs}，当前时间 ${ts} [/SYSTEM_TIME_ONLY_勿输出]
`;
                  }
                }
                Gt = is;
              }
              if (_e.type === "system_call_start" || _e.type === "system")
                return { role: "system", content: _e.text };
              if (_e.type === "image") {
                const is = typeof _e.image == "string" ? _e.image.trim() : "",
                  as = [
                    {
                      type: "text",
                      text:
                        _e.sender === "me"
                          ? "【用户上传的真实照片】请根据下方图像附件的实际画面理解与回复；看不清或无法辨认处请直说，不要编造细节。"
                          : "【对方发来的图片】请根据图像附件的实际内容理解与回复；看不清处请直说，勿编造。",
                    },
                    ...(is
                      ? [
                          {
                            type: "image_url",
                            image_url: { url: is, detail: "high" },
                          },
                        ]
                      : [
                          {
                            type: "text",
                            text: "（图片数据缺失，请提示用户重新发送）",
                          },
                        ]),
                  ];
                return (
                  yt && as.unshift({ type: "text", text: yt }),
                  {
                    role: _e.sender === "me" ? "user" : "assistant",
                    content: as,
                  }
                );
              }
              if (_e.type === "meme") {
                let is = `[表情包] ${_e.meaning || "图片"}`;
                return (
                  yt && (is = yt + is),
                  {
                    role: _e.sender === "me" ? "user" : "assistant",
                    content: is,
                  }
                );
              }
              let rt = _e.text;
              const ze = ![
                  "voice",
                  "image",
                  "meme",
                  "pay_for_me",
                  "food_delivery",
                  "text_image",
                  "gashapon_card",
                  "forward_chat_card",
                  "couple_space_invite",
                  "couple_ledger_checkin_invite",
                ].includes(_e.type),
                lt =
                  _e.sender !== "me" &&
                  (_e.type === "text" || !_e.type) &&
                  ze &&
                  typeof rt == "string" &&
                  !rt.includes("||") &&
                  rt.length > 15 &&
                  /[。！？]/.test(rt),
                it =
                  Ue ||
                  (Array.isArray(_e.longSentenceVariants) &&
                    _e.longSentenceVariants.length === 3);
              if (
                (lt &&
                  !it &&
                  (rt = rt
                    .split(new RegExp("(?<=[。！？])\\s*"))
                    .map((is) => is.trim())
                    .filter(Boolean)
                    .join("||")),
                _e.replyContext)
              ) {
                const os =
                  _e.replyContext.sender === "me"
                    ? `用户(${(ee == null ? void 0 : ee.name) || s.name || "User"})`
                    : `你自己(${le.name || "AI"})`;
                let as = _e.replyContext.text;
                (_e.replyContext.type === "image" ||
                _e.replyContext.type === "text_image"
                  ? (as = "[图片]")
                  : _e.replyContext.type === "voice"
                    ? (as = "[语音]")
                    : _e.replyContext.type === "transfer"
                      ? (as = `[转账 ¥${_e.replyContext.amount}]`)
                      : _e.replyContext.type === "food_delivery" &&
                        (as = "[外卖]"),
                  (rt = `【引用了${os}的消息："${as}"】
${rt}`));
              }
              if (_e.type === "transfer") {
                const is =
                    _e.amount != null && _e.amount !== ""
                      ? String(_e.amount)
                      : String(_e.text || "")
                          .replace(/^[¥￥]\s*/, "")
                          .trim(),
                  os = (_e.note || "转账").trim(),
                  as =
                    _e.status === "accepted"
                      ? "已收款"
                      : _e.status === "rejected"
                        ? "已退回"
                        : "待处理",
                  vs =
                    _e.sender === "me"
                      ? "用户向你发起转账（你是收款方）"
                      : "你向用户发起转账（用户是收款方）",
                  ys =
                    _e.sender === "them" &&
                    (_e.status === "pending" || _e.status == null)
                      ? " **硬约束**：本条为待处理时，你在之后任意一轮回复的台词里都不得描写或暗示用户已经点了收款/退回、钱已到账、退回来了等；不得替用户说「我收了」「我退了」；不得写「看到你收了」「我就知道你肯定会收」——除非聊天记录里已出现对应的「[系统提示]」收款/退回消息。"
                      : "";
                rt = `[转账消息] ${vs} ¥${is} 备注:${os} 界面状态:${as}。规则：「待处理」表示聊天里尚未出现以「[系统提示]」开头的收款/退回系统消息，此时不得认定对方已收款或已退回，也不可把对话里的口头「收了」「退了」当作界面已生效。用户向你转账时，只有你方回复含 [ACCEPT_TRANSFER] 或 [REJECT_TRANSFER] 才会触发状态与系统提示；你向用户转账时，须等用户界面操作后出现系统提示才可当作已处理。${ys}`;
              }
              if (
                (_e.type === "pay_for_me" &&
                  (rt = `[代付请求] 物品：${_e.item}，价格：${_e.price}。请决定是否帮用户支付。如果同意，请回复 [ACCEPT_PAY_FOR_ME]；如果拒绝，请回复 [REJECT_PAY_FOR_ME]。（同时可以附带你的口头回复）`),
                _e.type === "food_delivery" &&
                  (rt = `[外卖投喂] 物品：${_e.item}，价格：${_e.price}。请决定是否接受。如果接受，请回复 [ACCEPT_FOOD_DELIVERY]；如果拒绝，请回复 [REJECT_FOOD_DELIVERY]。（同时可以附带你的口头回复）`),
                _e.type === "system_fingerprint_request" &&
                  (rt = `[系统请求] 用户申请开通指纹解锁功能。请根据你与用户的亲密度和当前关系决定是否同意。
- 如果同意，请回复 [APPROVE_FINGERPRINT]
- 如果拒绝，请回复 [REJECT_FINGERPRINT]
- 以后当你觉得关系足够亲密、想让 TA 免密进入手机时，可以在任意一条回复中主动包含 [ENABLE_FINGERPRINT] 来开通指纹解锁；
- 当你觉得关系恶化、生气或需要提高安全性时，可以在回复中包含 [DISABLE_FINGERPRINT] 主动取消指纹解锁。
（同时可以附带你的口头回复，解释原因或表达感受；这些指令只需在决定执行的那一条回复中出现一次）`),
                _e.type === "couple_space_invite")
              ) {
                const is = _e.fromName || "对方";
                rt = `[对方发来了一条邀请] ${is} 对你说：想和你有一个只属于我们俩的地方，一起记下日常、存下心情。等你。
（系统说明：这是一条「情侣空间」邀请。请根据你的人设、与 ${is} 的关系和当前剧情决定是否接受。
- 接受则在回复中包含 [COUPLE_SPACE_ACCEPT]，可附带一句简短回应；
- 拒绝则包含 [COUPLE_SPACE_REJECT]，并说明理由或态度。）`;
              }
              if (_e.type === "couple_ledger_checkin_invite") {
                const is = _e.fromName || "对方",
                  os = _e.totalDays != null ? String(_e.totalDays) : "?",
                  as = _e.autoTime || "—",
                  vs = _e.remindTime || "—";
                rt = `[一起记账打卡邀请] ${is} 想和你约定：连续 ${os} 天一起记账打卡；TA 设定的 AI 自动记账时间约 ${as}，提醒打卡时间约 ${vs}。
（系统说明：这是情侣空间记账里的「一起打卡」邀请。请根据你的人设、与 ${is} 的关系决定是否答应一起完成这个习惯。
- 愿意一起打卡则在回复中包含 [LEDGER_CHECKIN_ACCEPT]，可附带一句口语化回应；
- 不愿意则包含 [LEDGER_CHECKIN_REJECT]，并说明态度或理由。）`;
              }
              if (_e.type === "memo_peek_alert") {
                const is = _e.userName || "用户",
                  os =
                    _e.taName ||
                    (le == null ? void 0 : le.name) ||
                    (le == null ? void 0 : le.nickname) ||
                    "TA",
                  as = (() => {
                    const qe = Number(_e.privacyLevel);
                    return Number.isFinite(qe)
                      ? Math.max(1, Math.min(5, Math.floor(qe)))
                      : 3;
                  })(),
                  vs = Array.isArray(_e.riskReasons) ? _e.riskReasons : [],
                  ts = vs.length ? vs.join("、") : "risk_unknown",
                  ys = String(_e.memoTitle || "").trim() || "（无标题）",
                  Vs = String(
                    _e.memoContentForAi || _e.memoContent || "",
                  ).trim(),
                  pt = Vs.length
                    ? `

【剧情设定：下面这条私密备忘是「你（${os}）」自己写的；${is} 刚才偷看的就是这一条。仅供你生成回复时内化，不要在回复里大段照抄。】
标题：${ys}
正文：
${Vs}
`
                    : `

【剧情设定：对方偷看了你的一条私密备忘；标题为「${ys}」，正文未附带或为空。仍须围绕「偷看私密备忘」这件事回应，可结合你的人设与近期聊天语境。】
`;
                rt = `[偷看提醒] ${is} 刚刚试图查看你的私密备忘录（你已察觉）。
备忘编号：${_e.memoSerial != null ? String(_e.memoSerial) : "—"}
私密等级：${as}/5
触发原因标签：${ts}
${pt}
（系统约束：你必须用情侣空间里 TA 的口吻回复，活人感强；**本轮主题就是「对方偷看了你的这条备忘」**。
- **必须**明显围绕这条备忘来写：可以吐槽、吃醋、质问、装生气、撒娇、认真沟通，或借机把心里话摊开——要让读者感到你在回应**备忘里写了什么**，而不是接上一句闲聊继续泛泛聊天。
- 可以点名备忘里的情绪、话题、梗或一两处措辞；避免整篇逐字复述正文，长内容用概括即可。
- 可自然引用近期对话作补充，但**不要**写成与「偷看这条备忘」完全无关的万能寒暄。
- 若要多条气泡，请用英文双竖线 || 分隔。）`;
              }
              if (
                (_e.type === "failed_unlock_attempt" &&
                  (rt = `[系统] ${_e.userName || "有人"} 尝试解锁你的手机但密码错误。
请根据你的人设、与用户的亲密度和当前关系决定是否更换密码（不信任/生气时更可能换）。
- 若决定更换密码，你**必须**在回复中包含 \`[CHANGE_PASSWORD:6位新密码]\`，例如 [CHANGE_PASSWORD:654321]。新密码为6位数字。
- 若不更换，正常回复即可，可表达不满或调侃。
（可以同时说几句话表达态度，再决定是否换密码）`),
                _e.type === "text_image")
              )
                rt = `[图片内容：${_e.content}]`;
              else if (_e.type === "gashapon_card") {
                const is = _e.itemName || _e.text || "",
                  os = _e.sceneDesc || "",
                  as = _e.reason || "",
                  vs = _e.heartVoice || "";
                rt = `[扭蛋卡片：${is}]
情景：${os}
原因：${as}
心声：${vs}`;
              } else if (_e.type === "forward_chat_card") {
                const is = _e.friendName || "朋友",
                  os = (_e.messages || [])
                    .slice(0, 5)
                    .map(
                      (as) =>
                        `${as.sender === "role" ? "你" : is}：${(as.text || "").trim()}`,
                    ).join(`
`);
                rt = `（你发送了聊天记录卡片：与${is}的对话，纯文字摘要）
${os}`;
              } else _e.type === "voice" && (rt = `[语音消息] ${_e.text}`);
              return {
                role:
                  _e.type === "transfer"
                    ? "system"
                    : _e.sender === "me"
                      ? "user"
                      : "assistant",
                content: yt ? yt + rt : rt,
              };
            }),
          ];
          if (
            new Set(["chat", "chat_heart", "chat_regen", "voice"]).has(ie) &&
            Array.isArray(ne) &&
            ne.length > 0
          ) {
            let _e = ne.length - 1;
            for (
              ;
              _e >= 0 && ((Ve = ne[_e]) == null ? void 0 : Ve.sender) === "me";
            )
              _e -= 1;
            ne
              .slice(_e + 1)
              .some(
                (ze) =>
                  ze &&
                  ze.type === "image" &&
                  typeof ze.image == "string" &&
                  (ze.image.startsWith("data:image/") ||
                    ze.image.startsWith("http://") ||
                    ze.image.startsWith("https://")),
              ) &&
              Pt.splice(1, 0, {
                role: "system",
                content: `【真实照片识图·必须遵守】本轮中用户在等你回复前的消息里包含**真实上传的图片**（已作为 image 附件传入）。你必须：
1) 先根据画面**实际可见内容**理解，再用人设语气回复；描述与推断须与图像一致。
2) 看不清、过糊、被裁切或无法确认处**不要编造**；直接说「看不太清」「这里辨认不出」等。
3) 你自己用 \`[图片内容：…]\` 表示的是**文字模拟发图**，与用户真实照片无关；**以图像像素为准**。
4) 若用户同时发了文字，须把文字问题与**图像内容**结合回答。`,
              });
          }
          if ((X != null && X.weatherData) || (X != null && X.timeData)) {
            let _e = `[系统实时环境数据更新]
`,
              yt = !1;
            if (
              (X.timeData &&
                (X.timeData.ai &&
                  ((_e += `当前你的时间：${X.timeData.ai.info}
`),
                  (yt = !0)),
                X.timeData.user &&
                  ((_e += `用户当前时间：${X.timeData.user.info}
`),
                  (yt = !0))),
              X.weatherData &&
                (X.weatherData.ai &&
                  ((_e += `当前你的天气：${X.weatherData.ai.info}
`),
                  (yt = !0)),
                X.weatherData.user &&
                  ((_e += `用户当前天气：${X.weatherData.user.info}
`),
                  (yt = !0))),
              yt)
            ) {
              if (
                ((_e += `⚠️ 指令：时间与天气仅作辅助参考，自然影响状态即可（如深夜困意、雨天氛围）。
⚠️ 重要：不要每条回复都提天气或报时，除非用户主动问或剧情需要。避免鬼打墙式重复提醒。
`),
                oe)
              ) {
                const rt = oe.match(/Time Elapsed: (.*)/);
                if (rt) {
                  const ze = rt[1].trim();
                  _e += `⚠️ 特别注意：距离上一条消息已过去【${ze}】。请根据这个时间间隔调整回复的语气（如：秒回、久别重逢、解释刚才在忙等）。`;
                }
              }
              Pt.push({ role: "system", content: _e });
            }
          }
          const ct = new Set(["chat", "chat_heart", "chat_regen", "voice"]);
          ct.has(ie) &&
            (Pt.push({
              role: "system",
              content: `【输出禁令·必须遵守】你会在上文看到一些系统提示/系统通知（含居中提示、[系统提示]开头的消息、以及任何方括号标签说明）。你必须内化其含义并据此调整状态，但在你最终输出给用户的台词里：
1) 绝对禁止引用/复述这些系统提示的原文（包括复制一段、用引号引用、或用 [REPLY:"..."] 把系统原文当引用气泡）。
2) 禁止在台词里出现“系统提示/系统通知/居中提示/提示词/指令/规则”等元词。
3) 只用角色自己的自然语言表达你“知道发生了什么”。`,
            }),
            Pt.push({
              role: "system",
              content: `【转账状态判定硬约束】凡涉及“是否已收款/已退回/已拒绝”的事实判断，必须以聊天记录中已出现的「[系统提示]」为唯一依据：
1) 出现了收款类系统提示（如“你已收款”“对方已收款”）= 已收款；
2) 出现了退回/拒绝类系统提示（如“你已退回转账”“对方退回了转账”）= 已退回/已拒绝；
3) 若尚未出现上述系统提示 = 仍是待处理（既没收也没退）；
4) 任何口头文本（如“我收了/我不收了/退你了”）若与系统提示冲突，都不能覆盖系统提示代表的事实状态；
5) 你可回应对方情绪，但不得把与系统提示冲突的口头话术当作已发生事实来叙述。`,
            }));
          const Kt =
            ie === "phone_call" || ie === "phone_call_outgoing_combined";
          if (jt || (Kt && X != null && X.structuredReplyEnabled)) {
            const _e =
              X != null && X.translationEnabled && ie !== "video_call"
                ? " 用户已开启实时翻译：凡 messages 条目台词含非中文，该条须带 JSON 字段 translation（仅中文、禁止英文字母；否则填「（译文不可用）」），勿仅用 text 内 [TRANS:…] 代替。"
                : "";
            if (Kt) {
              const yt =
                ie === "phone_call_outgoing_combined"
                  ? "【拨号主叫·合并 JSON】外层对象须含 answer/reason/activity 等字段（见主 system）；若 answer 为 true，须含 openingEnvelope，其**值**为下述结构的完整对象（不是字符串）。"
                  : "";