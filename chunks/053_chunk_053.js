
【AI角色】${r}
人设：${i}

【用户】${o}
用户人设：${c}

【用户提案】
- 时长：${Ku(a == null ? void 0 : a.totalDays)} 天
- 主题：${u}
- 难度：${(a == null ? void 0 : a.difficulty) || "easy"}

【最近聊天】
${d}

请只输出 JSON（不要 Markdown）：
{
  "decision":"accepted | rejected | counter_proposal",
  "messageLines":["2~5句自然回复，符合人设"],
  "counterProposal":{
    "totalDays":7,
    "themeType":"daily | custom",
    "customThemeText":"当 themeType=custom 时可给建议",
    "difficulty":"easy | normal | hard",
    "reason":"建议理由"
  }
}

要求：
- 允许直接拒绝（decision=rejected）。
- 若给反建议，counterProposal 必填。
- 不要输出 displayText 字段；协商态度与语气只写在 messageLines。
- 不要输出 JSON 以外内容。`;
}
function JV({ contact: t, boundUser: s, recentLines: n, finalConfig: a }) {
  const r =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "AI",
    i = (s == null ? void 0 : s.name) || "用户",
    o = n.length
      ? n.join(`
`)
      : "（暂无最近聊天）",
    c = Ku(a == null ? void 0 : a.totalDays);
  return `你是情侣空间赛季任务生成引擎。请基于最终配置生成完整赛季任务结构（不必提供超长文案）。

【AI】${r}
【用户】${i}
【最终配置】
- 时长：${c} 天
- 主题：${(a == null ? void 0 : a.themeType) === "daily" ? "日常向" : `自定义：${(a == null ? void 0 : a.customThemeText) || "未命名"}`}
- 难度：${(a == null ? void 0 : a.difficulty) || "easy"}

【最近聊天】
${o}

请只输出 JSON：
{
  "planId":"唯一ID",
  "displayText":"生成说明",
  "days":[
    {
      "dayIndex":1,
      "tasks":[
        {
          "taskId":"d1_t1",
          "title":"任务标题",
          "type":"auto_check | manual_check",
          "judgeMode":"auto | manual_ai"
        }
      ]
    }
  ]
}

要求：
- days 长度必须等于时长；
- easy 每天 1~2 条，normal 每天 2~3 条，hard 每天 3~4 条；
- themeType=custom 时任务优先 manual_check/manual_ai；
- 不要输出 JSON 以外内容。`;
}
function mC(t) {
  return Array.isArray(t)
    ? t
        .map((s) => String(s || "").trim())
        .filter(Boolean)
        .slice(0, 6)
    : [];
}
function Jb(t, s, n, a) {
  const r = String(
    (t == null ? void 0 : t.title) || `第${s}天任务${n + 1}`,
  ).trim();
  return r
    ? {
        taskId: String((t == null ? void 0 : t.taskId) || `d${s}_t${n + 1}`),
        title: r,
        type:
          (t == null ? void 0 : t.type) === "manual_check" ||
          (a == null ? void 0 : a.themeType) === "custom"
            ? "manual_check"
            : "auto_check",
        judgeMode:
          (t == null ? void 0 : t.judgeMode) === "manual_ai" ||
          (a == null ? void 0 : a.themeType) === "custom"
            ? "manual_ai"
            : "auto",
        status: "pending",
      }
    : null;
}
function KV(t, s) {
  const n = Array.from({ length: s }).map(() => []);
  return (
    t.forEach((a, r) => {
      n[r % s].push(a);
    }),
    n
  );
}
function qV(t, s, n) {
  const a = Ku(s == null ? void 0 : s.totalDays),
    r = fC(s == null ? void 0 : s.difficulty),
    i = Array.isArray(n) ? n : [],
    o = Array.isArray(t)
      ? t.flatMap((d) =>
          Array.isArray(d == null ? void 0 : d.tasks) ? d.tasks : [],
        )
      : [];
  if (
    (s == null ? void 0 : s.themeType) === "custom" &&
    (i.length > 0 || o.length > 0)
  ) {
    const u = [...i, ...o].map((p, m) => Jb(p, 1, m, s)).filter(Boolean);
    return u.length === 0
      ? null
      : KV(u, a).map((p, m) => {
          let h = p.map((g, x) => ({
            ...g,
            taskId: `d${m + 1}_${g.taskId || `t${x + 1}`}_${x + 1}`,
          }));
          if ((h.length > r.max && (h = h.slice(0, r.max)), h.length < r.min)) {
            const g = r.min - h.length,
              x = Array.from({ length: g }).map((y, v) => ({
                taskId: `d${m + 1}_fill_${v + 1}`,
                title: `第${m + 1}天补充任务 ${v + 1}`,
                type: "manual_check",
                judgeMode: "manual_ai",
                status: "pending",
              }));
            h = [...h, ...x];
          }
          if (h.length === 0) {
            const g = Jb(null, m + 1, 0, s);
            h = g ? [g] : [];
          }
          return { dayIndex: m + 1, status: "pending", tasks: h };
        });
  }
  if (!Array.isArray(t) || t.length !== a) return null;
  const c = t.map((d, u) => {
    let f = Array.isArray(d == null ? void 0 : d.tasks)
      ? d.tasks.map((p, m) => Jb(p, u + 1, m, s)).filter(Boolean)
      : [];
    if ((f.length > r.max && (f = f.slice(0, r.max)), f.length < r.min)) {
      const p = r.min - f.length,
        m = Array.from({ length: p }).map((h, g) => ({
          taskId: `d${u + 1}_fill_${g + 1}`,
          title: `第${u + 1}天补充任务 ${g + 1}`,
          type:
            (s == null ? void 0 : s.themeType) === "custom"
              ? "manual_check"
              : "auto_check",
          judgeMode:
            (s == null ? void 0 : s.themeType) === "custom"
              ? "manual_ai"
              : "auto",
          status: "pending",
        }));
      f = [...f, ...m];
    }
    return { dayIndex: u + 1, status: "pending", tasks: f };
  });
  return c.every((d) => d.tasks.length > 0) ? c : null;
}
function QV(t) {
  return Array.isArray(t)
    ? t
        .map((s) =>
          String(s || "")
            .trim()
            .toLowerCase(),
        )
        .filter(Boolean)
        .slice(-3)
    : [];
}
function Ak(t) {
  return String(t || "")
    .replace(/\s+/g, "")
    .replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, "").length;
}
function ZV({
  contact: t,
  boundUser: s,
  recentLines: n,
  dayIndex: a,
  totalDays: r,
  todayTasks: i,
  recentEventStyles: o,
  seasonHistory: c,
}) {
  const d =
      (t == null ? void 0 : t.nickname) ||
      (t == null ? void 0 : t.name) ||
      "AI",
    u = (t == null ? void 0 : t.setting) || "（无详细设定）",
    f = (s == null ? void 0 : s.name) || "用户",
    p = (s == null ? void 0 : s.settings) || "（无）",
    m = n.length
      ? n.join(`
`)
      : "（暂无最近聊天）",
    h =
      Array.isArray(i) && i.length
        ? i
            .slice(0, 8)
            .map(
              (y, v) =>
                `${v + 1}. ${String((y == null ? void 0 : y.title) || "未命名任务")}（${String((y == null ? void 0 : y.status) || "pending")}）`,
            ).join(`
`)
        : "（当天任务暂无）",
    g = QV(o).join(" | ") || "（无）",
    x = String(c || "").trim() || "（无）";
  return `你是“情侣空间-赛季旅程-每日盲盒事件”创作引擎。
请根据今日任务、最近聊天和双方人设，生成一条有趣、可抉择的赛季事件卡。

【核心要求】
1. 不要使用固定主题池，不要复用旧梗；每次都要创造“全新主题”。
2. 风格可参考：日常轻松向、if线分支、悬疑/恐怖游戏向、身份互换、直播镜头叙事、时间循环、角色扮演等。
3. 必须是具体故事场景，不要空泛总结，不要写设定说明。
4. scene 必须 180~240 字，且必须分成 2~3 段（段落间用换行），至少包含：场景背景、可感知细节、双方互动推进、情绪拐点。
5. 问题必须是“默契考验型”：核心是猜 TA 会怎么做/怎么选，不能是无关问题。
6. 3 个选项都要围绕同一默契考点，且都合理可选，不能出现跑题选项。
7. aiAnswer 必须符合人设和最近聊天证据，表示“TA最可能选择的选项”，不允许万能正确答案。
8. styleTag 不得与 recentEventStyles 中最常见风格相同。
9. taFeedback 必须是 TA 对用户说的话，口吻自然、有人设温度，不要系统播报腔。
10. 只输出 JSON，不要 Markdown，不要解释。

【输入上下文】
dayIndex=${Number(a) || 1}
totalDays=${Number(r) || 7}

【AI角色】${d}
人设：${u}

【用户】${f}
用户人设：${p}

【当天任务】
${h}

【最近聊天】
${m}

【最近3天事件风格】
${g}

【赛季简要历史】
${x}

输出 JSON：
{
  "eventId":"唯一ID",
  "styleTag":"daily | if_line | horror_game | identity_swap | livestream | time_loop | roleplay | mixed",
  "rarity":"normal | rare | epic",
  "theme":"全新主题名（6~14字）",
  "title":"剧情标题（6~12字）",
  "scene":"180~240字中文具体情景短篇，2~3段",
  "question":"1句默契考验问题（例如：你猜TA今天会先做什么？）",
  "options":[
    { "id":"A", "text":"选项A（10~22字）", "tone":"proactive | neutral | avoidant" },
    { "id":"B", "text":"选项B（10~22字）", "tone":"proactive | neutral | avoidant" },
    { "id":"C", "text":"选项C（10~22字）", "tone":"proactive | neutral | avoidant" }
  ],
  "aiAnswer":{
    "optionId":"A | B | C",
    "reason":"TA的答案依据（以TA口吻对你说话），结合人设+最近聊天证据，1~2句"
  },
  "taFeedback":{
    "match":"当你选中与TA一致时，TA会对你说的话（1~2句）",
    "mismatch":"当你选错时，TA会对你说的话（1~2句）"
  },
  "resultPolicy":{
    "matchRewardType":"reduce_task_load | bonus_progress | badge_piece",
    "mismatchEffectType":"light_task_added | none",
    "rewardFlavor":"奖励文案短句"
  },
  "collectible":{
    "name":"徽章或碎片名称",
    "rarity":"normal | rare | epic",
    "description":"一句描述"
  },
  "seasonLogText":"赛季总结记录语句"
}`;
}
function XV(t) {
  const s = Array.isArray(t) ? t : [],
    n = [
      { id: "A", text: "先说出真实感受，再听听TA怎么想", tone: "proactive" },
      { id: "B", text: "先观察气氛，再找更轻松的方式沟通", tone: "neutral" },
      { id: "C", text: "暂时不展开话题，等合适时机再聊", tone: "avoidant" },
    ],
    a = s
      .map((r, i) => ({
        id:
          ["A", "B", "C"][i] ||
          String((r == null ? void 0 : r.id) || "").trim() ||
          `O${i + 1}`,
        text: String((r == null ? void 0 : r.text) || "").trim(),
        tone: ["proactive", "neutral", "avoidant"].includes(
          r == null ? void 0 : r.tone,
        )
          ? r.tone
          : "neutral",
      }))
      .filter((r) => r.text)
      .slice(0, 3);
  return a.length === 3 ? a : n;
}
function Kb(t) {
  var i, o, c, d, u, f, p, m, h, g, x;
  const s = XV(t == null ? void 0 : t.options),
    n = String(
      ((i = t == null ? void 0 : t.aiAnswer) == null ? void 0 : i.optionId) ||
        "",
    )
      .trim()
      .toUpperCase(),
    a = ((o = s.find((y) => y.id === n)) == null ? void 0 : o.id) || "B",
    r = String((t == null ? void 0 : t.styleTag) || "mixed")
      .trim()
      .toLowerCase();
  return {
    eventId: String(
      (t == null ? void 0 : t.eventId) || `season_event_${Date.now()}`,
    ),
    styleTag: r || "mixed",
    rarity: ["normal", "rare", "epic"].includes(t == null ? void 0 : t.rarity)
      ? t.rarity
      : "normal",
    theme:
      String((t == null ? void 0 : t.theme) || "今日剧情").trim() || "今日剧情",
    title:
      String((t == null ? void 0 : t.title) || "今日抉择").trim() || "今日抉择",
    scene: String((t == null ? void 0 : t.scene) || "").trim(),
    question:
      String(
        (t == null ? void 0 : t.question) || "你猜TA在这个情境下最可能怎么做？",
      ).trim() || "你猜TA在这个情境下最可能怎么做？",
    options: s,
    aiAnswer: {
      optionId: a,
      reason: String(
        ((c = t == null ? void 0 : t.aiAnswer) == null ? void 0 : c.reason) ||
          "我最近其实更在意先照顾你的感受，所以我大概率会先选这个。",
      ).trim(),
    },
    taFeedback: {
      match: String(
        ((d = t == null ? void 0 : t.taFeedback) == null ? void 0 : d.match) ||
          "你真的懂我，我刚才心里就是这么想的。",
      ).trim(),
      mismatch: String(
        ((u = t == null ? void 0 : t.taFeedback) == null
          ? void 0
          : u.mismatch) || "这次你没猜中我，不过我很开心你愿意认真猜我的心思。",
      ).trim(),
    },
    resultPolicy: {
      matchRewardType: [
        "reduce_task_load",
        "bonus_progress",
        "badge_piece",
      ].includes(
        (f = t == null ? void 0 : t.resultPolicy) == null
          ? void 0
          : f.matchRewardType,
      )
        ? t.resultPolicy.matchRewardType
        : "reduce_task_load",
      mismatchEffectType: ["light_task_added", "none"].includes(
        (p = t == null ? void 0 : t.resultPolicy) == null
          ? void 0
          : p.mismatchEffectType,
      )
        ? t.resultPolicy.mismatchEffectType
        : "light_task_added",
      rewardFlavor: String(
        ((m = t == null ? void 0 : t.resultPolicy) == null
          ? void 0
          : m.rewardFlavor) || "你们在这个瞬间达成了新的默契。",
      ).trim(),
    },
    collectible: {
      name: String(
        ((h = t == null ? void 0 : t.collectible) == null ? void 0 : h.name) ||
          "赛季碎片",
      ).trim(),
      rarity: ["normal", "rare", "epic"].includes(
        (g = t == null ? void 0 : t.collectible) == null ? void 0 : g.rarity,
      )
        ? t.collectible.rarity
        : "normal",
      description: String(
        ((x = t == null ? void 0 : t.collectible) == null
          ? void 0
          : x.description) || "来自本季的一次默契共鸣。",
      ).trim(),
    },
    seasonLogText: String(
      (t == null ? void 0 : t.seasonLogText) || "你们完成了一次赛季剧情抉择。",
    ).trim(),
  };
}
async function xd({
  callApi: t,
  contact: s,
  boundUser: n,
  prompt: a,
  sceneTag: r,
  timeoutMs: i = r2,
}) {
  const o = new Promise((d, u) => {
      setTimeout(() => u(new Error("callApi timeout")), i);
    }),
    c = await Promise.race([
      t([{ sender: "me", text: a }], s, r, {}, [], [], [], !1, "", n),
      o,
    ]);
  return GV(c);
}
async function eJ({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  seasonConfig: r,
}) {
  const i = (n == null ? void 0 : n(t)) ?? {},
    o = typeof s == "function" ? s(t == null ? void 0 : t.id) : [],
    c = Ju(t, i, o);
  if (typeof a != "function") return { ok: !1, error: "no_call_api" };
  const d = VV({ contact: t, boundUser: i, recentLines: c, seasonConfig: r });
  let u = null;
  try {
    u = await xd({
      callApi: a,
      contact: t,
      boundUser: i,
      prompt: d,
      sceneTag: "season_journey_negotiation",
      timeoutMs: HV,
    });
  } catch {
    u = null;
  }
  if (!u) return { ok: !1, error: "empty_negotiation_result" };
  const f = YV(u.decision),
    p = mC(u.messageLines);
  return {
    ok: !0,
    result: {
      decision: f,
      messageLines: p,
      counterProposal:
        u != null && u.counterProposal && typeof u.counterProposal == "object"
          ? {
              totalDays: Ku(u.counterProposal.totalDays),
              themeType:
                u.counterProposal.themeType === "daily" ? "daily" : "custom",
              customThemeText: String(
                u.counterProposal.customThemeText || "",
              ).trim(),
              difficulty: ["easy", "normal", "hard"].includes(
                u.counterProposal.difficulty,
              )
                ? u.counterProposal.difficulty
                : "easy",
              reason: String(u.counterProposal.reason || "").trim(),
            }
          : null,
    },
  };
}
async function Ck({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  finalConfig: r,
}) {
  const i = {
      totalDays: Ku(r == null ? void 0 : r.totalDays),
      themeType:
        (r == null ? void 0 : r.themeType) === "daily" ? "daily" : "custom",
      customThemeText: String(
        (r == null ? void 0 : r.customThemeText) || "",
      ).trim(),
      difficulty: ["easy", "normal", "hard"].includes(
        r == null ? void 0 : r.difficulty,
      )
        ? r.difficulty
        : "easy",
    },
    o = WV(i);
  if (typeof a != "function") return { ok: !0, plan: o };
  const c = (n == null ? void 0 : n(t)) ?? {},
    d = typeof s == "function" ? s(t == null ? void 0 : t.id) : [],
    u = Ju(t, c, d),
    f = JV({ contact: t, boundUser: c, recentLines: u, finalConfig: i });
  let p = null;
  try {
    p = await xd({
      callApi: a,
      contact: t,
      boundUser: c,
      prompt: f,
      sceneTag: "season_journey_generate",
    });
  } catch {
    p = null;
  }
  const m = qV(p == null ? void 0 : p.days, i, p == null ? void 0 : p.tasks);
  return !p || !m
    ? { ok: !0, plan: o }
    : {
        ok: !0,
        plan: {
          planId: String(p.planId || `season_plan_${Date.now()}`),
          displayText: String(p.displayText || "赛季计划已生成").trim(),
          days: m,
        },
      };
}
async function Mk({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  taskContext: r,
  objectionReason: i,
}) {
  if (typeof a != "function")
    return {
      ok: !0,
      result: {
        reviewDecision: "uphold",
        finalTaskStatus: (r == null ? void 0 : r.status) || "failed",
        messageLines: ["已收到你的复议，但离线模式下保持原判。"],
      },
    };
  const o = (n == null ? void 0 : n(t)) ?? {},
    c = typeof s == "function" ? s(t == null ? void 0 : t.id) : [],
    d = Ju(t, o, c),
    u = `你是情侣空间赛季任务复议引擎。请根据上下文决定是否改判。

【任务上下文】${JSON.stringify(r || {})}
【用户异议】${String(i || "").trim()}
【最近聊天】
${
  d.join(`
`) || "（暂无）"
}

只输出 JSON：
{
  "reviewDecision":"uphold | overturn | partial",
  "finalTaskStatus":"done | failed",
  "messageLines":["1~3句说明"]
}`;
  let f = null;
  try {
    f = await xd({
      callApi: a,
      contact: t,
      boundUser: o,
      prompt: u,
      sceneTag: "season_journey_review",
    });
  } catch {
    f = null;
  }
  const p = ["uphold", "overturn", "partial"].includes(
      f == null ? void 0 : f.reviewDecision,
    )
      ? f.reviewDecision
      : "uphold",
    m = (f == null ? void 0 : f.finalTaskStatus) === "done" ? "done" : "failed";
  return {
    ok: !0,
    result: {
      reviewDecision: p,
      finalTaskStatus: m,
      messageLines: mC(f == null ? void 0 : f.messageLines),
    },
  };
}
async function tJ({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  dayIndex: r,
  totalDays: i,
  todayTasks: o,
  recentEventStyles: c,
  seasonHistory: d,
}) {
  const u = {
    ok: !0,
    event: Kb({
      eventId: `season_event_fallback_${Date.now()}`,
      styleTag: "mixed",
      rarity: "normal",
      theme: "夜色里的岔路口",
      title: "今晚怎么回应",
      scene:
        "夜里十一点，窗外的雨线打在玻璃上，客厅只开着一盏暖黄的落地灯。你刚结束一天的忙碌，想把心里那点委屈和好消息都讲给TA听，可手机那端迟迟没有新消息。过了十几分钟，TA终于发来一句“抱歉，刚刚在处理一件急事”。你盯着这行字，手指停在输入框上，想起前几次你们因为“谁先开口”闹过不愉快，也想起TA这周确实比平时更累。厨房里水壶轻轻作响，桌上的便签还写着你白天记下的小期待。你知道这一句回复可能会决定今晚是温柔收尾，还是又一次把误会放大。此刻你深吸一口气，决定先想清楚自己真正想表达的是什么。",
      question: "如果今天互换身份，你猜TA最可能先做哪件事？",
      options: [
        { id: "A", text: "先把今天的待办列清单再逐项处理", tone: "proactive" },
        { id: "B", text: "先看你状态，再边聊边决定顺序", tone: "neutral" },
        { id: "C", text: "先躺平缓冲，晚点再进入任务节奏", tone: "avoidant" },
      ],
      aiAnswer: {
        optionId: "B",
        reason: "TA最近更在意彼此情绪同步，通常会先确认你的状态再安排事情。",
      },
      taFeedback: {
        match: "你猜得很准，我今天真的会先看看你的状态，再决定后面的节奏。",
        mismatch: "这次你猜偏啦，不过你愿意这样认真猜我，我已经很开心了。",
      },
      resultPolicy: {
        matchRewardType: "reduce_task_load",
        mismatchEffectType: "light_task_added",
        rewardFlavor: "你们在迟到的回复里找到了一点耐心。",
      },
      collectible: {
        name: "夜雨便签",
        rarity: "normal",
        description: "一次克制而温柔的表达。",
      },
      seasonLogText: "在“今晚怎么回应”事件中，你们尝试了更温和的沟通方式。",
    }),
  };
  if (typeof a != "function") return u;
  const f = (n == null ? void 0 : n(t)) ?? {},
    p = typeof s == "function" ? s(t == null ? void 0 : t.id) : [],
    m = Ju(t, f, p),
    h = ZV({
      contact: t,
      boundUser: f,
      recentLines: m,
      dayIndex: r,
      totalDays: i,
      todayTasks: o,
      recentEventStyles: c,
      seasonHistory: d,
    });
  let g = null;
  try {
    g = await xd({
      callApi: a,
      contact: t,
      boundUser: f,
      prompt: h,
      sceneTag: "season_journey_daily_event",
    });
  } catch {
    g = null;
  }
  if (!g) return u;
  let x = Kb(g);
  if (Ak(x.scene) < 170 || !/\n/.test(String(x.scene || ""))) {
    const y = `${h}

【重写指令】你刚才的 scene 不符合要求（字数或分段不足）。请保持同一主题与问题，重写 scene 为 180~240 字，并拆分为 2~3 段（必须有换行）后重新输出完整 JSON。`;
    try {
      const v = await xd({
        callApi: a,
        contact: t,
        boundUser: f,
        prompt: y,
        sceneTag: "season_journey_daily_event_retry",
      });
      v && (x = Kb(v));
    } catch {}
  }
  return Ak(x.scene) < 140 ? u : { ok: !0, event: x };
}
async function sJ({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  milestoneId: r,
  seasonNo: i = "S04",
}) {
  const o = {
    rewardId: `reward_${String(r || "m1")}_${Date.now()}`,
    milestoneId: String(r || "m1"),
    itemType: "fragment",
    title: `阶段奖励 ${String(r || "M1").toUpperCase()}`,
    seasonNo: String(i || "S04"),
    rarity: "normal",
    description: "来自本阶段的纪念奖励。",
    source: "milestone",
    claimedAt: Date.now(),
  };
  if (typeof a != "function") return { ok: !0, reward: o };
  const c = (n == null ? void 0 : n(t)) ?? {},
    d = typeof s == "function" ? s(t == null ? void 0 : t.id) : [],
    u = Ju(t, c, d),
    f = `你是情侣空间赛季旅程奖励引擎。请根据里程碑和最近聊天生成奖励结果。

【里程碑】${String(r || "m1")}
【赛季】${String(i || "S04")}
【最近聊天】
${
  u.join(`
`) || "（暂无）"
}

请只输出 JSON：
{
  "rewardId":"唯一ID",
  "milestoneId":"m1|m2|m3",
  "itemType":"fragment",
  "title":"奖励名",
  "seasonNo":"S04",
  "rarity":"normal|rare|epic",
  "description":"奖励描述"
}`;
  let p = null;
  try {
    p = await xd({
      callApi: a,
      contact: t,
      boundUser: c,
      prompt: f,
      sceneTag: "season_journey_reward_claim",
      timeoutMs: r2,
    });
  } catch {
    p = null;
  }
  return p
    ? {
        ok: !0,
        reward: {
          rewardId: String(p.rewardId || o.rewardId),
          milestoneId: String(p.milestoneId || o.milestoneId).toLowerCase(),
          itemType: "fragment",
          title: String(p.title || o.title),
          seasonNo: String(p.seasonNo || o.seasonNo),
          rarity: ["normal", "rare", "epic"].includes(p.rarity)
            ? p.rarity
            : "normal",
          description: String(p.description || o.description),
          source: "milestone",
          claimedAt: Date.now(),
        },
      }
    : { ok: !0, reward: o };
}
function Tk(t, s) {
  const n = Math.max(
      0,
      Math.min(
        100,
        Math.round(
          Number(
            (t == null ? void 0 : t.score) ??
              (s == null ? void 0 : s.score) ??
              80,
          ),
        ),
      ),
    ),
    a = Array.isArray(t == null ? void 0 : t.tags)
      ? t.tags
          .map((r) => String(r || "").trim())
          .filter(Boolean)
          .slice(0, 6)
      : (s == null ? void 0 : s.tags) || ["稳态沟通"];
  return {
    score: n,
    diary: String(
      (t == null ? void 0 : t.diary) ||
        (s == null ? void 0 : s.diary) ||
        "本季你们保持了稳定沟通节奏。",
    ).trim(),
    summary: String(
      (t == null ? void 0 : t.summary) ||
        (s == null ? void 0 : s.summary) ||
        "赛季画像已生成。",
    ).trim(),
    tags: a,
  };
}
async function nJ({
  contact: t,
  getLatestMessages: s,
  getRoleBoundUser: n,
  callApi: a,
  seasonContext: r = {},
  personaSnapshot: i = {},
  worldBooks: o = [],
}) {
  const c = Tk(
    {},
    {
      score: (r == null ? void 0 : r.fallbackScore) || 80,
      diary: `本赛季共 ${Number((r == null ? void 0 : r.totalDays) || 0)} 天，成功 ${Number((r == null ? void 0 : r.successDays) || 0)} 天，失败 ${Number((r == null ? void 0 : r.failedDays) || 0)} 天。你们在互动里逐步形成了自己的节奏。`,
      summary: "系统根据本地赛季数据生成了画像报告（兜底）。",
      tags: ["稳态沟通", "共同推进"],
    },
  );
  if (typeof a != "function") return { ok: !0, report: c };
  const d = (n == null ? void 0 : n(t)) ?? {},
    u = typeof s == "function" ? s(t == null ? void 0 : t.id) : [],
    f = Ju(t, d, u),
    p =
      Array.isArray(o) && o.length > 0
        ? o.slice(0, 8).map((g, x) => {
            const y = String(
                (g == null ? void 0 : g.title) || `世界书${x + 1}`,
              ).trim(),
              v = String(
                (g == null ? void 0 : g.content) ||
                  (g == null ? void 0 : g.description) ||
                  (g == null ? void 0 : g.summary) ||
                  "",
              ).trim();
            return `- ${y}${v ? `：${v.slice(0, 180)}` : ""}`;
          }).join(`
`)
        : "（无绑定世界书）",
    m = `你是情侣空间赛季画像总结引擎。请结合赛季执行数据与人设生成报告。

【赛季执行数据】
${JSON.stringify(r || {}, null, 2)}

【角色人设快照】
${JSON.stringify(i || {}, null, 2)}

【AI角色设定】
${String((t == null ? void 0 : t.setting) || "").trim() || "（无）"}

【用户人设】
${String((d == null ? void 0 : d.settings) || "").trim() || "（无）"}

【绑定世界书】
${p}

【最近聊天】
${
  f.join(`
`) || "（暂无）"
}

只输出 JSON：
{
  "score": 0-100整数,
  "summary": "1~2句赛季总评",
  "diary": "以Char口吻写的观察日记，2~4句",
  "tags": ["标签1","标签2","标签3"]
}`;
  let h = null;
  try {
    h = await xd({
      callApi: a,
      contact: t,
      boundUser: d,
      prompt: m,
      sceneTag: "season_journey_settlement_report",
      timeoutMs: r2,
    });
  } catch {
    h = null;
  }
  return h ? { ok: !0, report: Tk(h, c) } : { ok: !0, report: c };
}
const Ik = [
  {
    id: "chat_text_send",
    title: "和TA一起聊聊今天发生了什么吧",
    kind: "single",
    min: 2,
    max: 4,
    points: 8,
  },
  {
    id: "chat_voice_send",
    title: "给TA发几条语音，把情绪也传过去吧",
    kind: "single",
    min: 2,
    max: 4,
    points: 10,
  },
  {
    id: "chat_image_send",
    title: "分享几张当下的照片，让TA看看你的世界",
    kind: "single",
    min: 2,
    max: 4,
    points: 10,
  },
  {
    id: "chat_meme_send",
    title: "用表情包逗TA开心一下",
    kind: "single",
    min: 2,
    max: 4,
    points: 8,
  },
  {
    id: "chat_transfer_send",
    title: "发起一笔小转账，制造一点专属仪式感",
    kind: "single",
    min: 1,
    max: 2,
    points: 12,
  },
  {
    id: "chat_moment_forward",
    title: "把你在意的一条动态转给TA看看",
    kind: "single",
    min: 1,
    max: 2,
    points: 10,
  },
  {
    id: "coop_text_exchange",
    title: "和TA来回多聊几句，把对话接住",
    kind: "coop",
    min: 2,
    max: 4,
    points: 14,
  },
  {
    id: "coop_voice_then_reply",
    title: "先发语音给TA，再等TA认真回应你",
    kind: "coop",
    min: 1,
    max: 3,
    points: 14,
  },
  {
    id: "coop_image_then_reply",
    title: "先发一张图给TA，再等TA接话互动",
    kind: "coop",
    min: 1,
    max: 3,
    points: 14,
  },
  {
    id: "coop_transfer_then_reply",
    title: "给TA发起一笔转账并收到TA的回应",
    kind: "coop",
    min: 1,
    max: 2,
    points: 16,
  },
  {
    id: "coop_meme_then_reply",
    title: "给TA丢个表情包并让TA回你几句",
    kind: "coop",
    min: 1,
    max: 3,
    points: 12,
  },
  {
    id: "coop_moment_then_reply",
    title: "转发一条动态给TA并产生后续聊天",
    kind: "coop",
    min: 1,
    max: 2,
    points: 14,
  },
  {
    id: "profile_signature_change",
    title: "更新一次签名，让TA看到你的新心情",
    kind: "single",
    min: 1,
    max: 2,
    points: 10,
  },
  {
    id: "profile_avatar_change",
    title: "换个头像，给今天一点新鲜感",
    kind: "single",
    min: 1,
    max: 2,
    points: 10,
  },
  {
    id: "couple_avatar_applied",
    title: "和TA一起换上情侣头像吧",
    kind: "single",
    min: 1,
    max: 2,
    points: 14,
  },
  {
    id: "moment_posted",
    title: "发一条动态，记录你们今天的小片段",
    kind: "single",
    min: 1,
    max: 2,
    points: 10,
  },
  {
    id: "moment_interact",
    title: "在动态里完成点赞或评论互动",
    kind: "single",
    min: 2,
    max: 4,
    points: 10,
  },
  {
    id: "call_history_opened",
    title: "翻看一次通话记录，回顾你们的联系",
    kind: "single",
    min: 1,
    max: 2,
    points: 8,
  },
];
function Ek(t, s) {
  const n = Math.floor(t),
    a = Math.floor(s);
  return Math.floor(Math.random() * (a - n + 1)) + n;
}
function aJ(t) {
  const s = [...t];
  for (let n = s.length - 1; n > 0; n -= 1) {
    const a = Math.floor(Math.random() * (n + 1));
    [s[n], s[a]] = [s[a], s[n]];
  }
  return s;
}
function i2({ dayIndex: t, difficulty: s = "easy", count: n } = {}) {
  const a =
      s === "hard"
        ? { min: 3, max: 4 }
        : s === "normal"
          ? { min: 2, max: 3 }
          : { min: 1, max: 2 },
    r = Ek(a.min, a.max),
    i = Math.max(1, Math.min(Ik.length, Number.isFinite(n) ? n : r));
  return aJ(Ik)
    .slice(0, i)
    .map((c, d) => {
      const u = Ek(c.min, c.max);
      return {
        taskId: `chat_d${t}_t${d + 1}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        templateId: c.id,
        title: c.title,
        type: "auto_check",
        judgeMode: "auto",
        source: "chat_app_daily",
        ownerType: c.kind === "coop" ? "coop" : "user_only",
        targetMin: c.min,
        targetMax: c.max,
        target: u,
        points: c.points,
        progress: { user: 0, ai: 0, total: 0 },
        status: "pending",
        completedAt: null,
      };
    });
}
function o2(t) {
  return t === "text" || !t;
}
function pC(t) {
  return String(t || "")
    .trim()
    .toLowerCase();
}
function Tl(t, s) {
  return s.includes(t);
}
function xC(t) {
  return Tl(t, ["voice", "audio", "voice_message"]);
}
function hC(t) {
  return Tl(t, ["image", "text_image", "photo", "picture"]);
}
function gC(t) {
  return Tl(t, ["meme", "emoji", "sticker"]);
}
function bC(t) {
  return Tl(t, ["moment", "moment_forward", "forward_moment"]);
}
function rJ(t) {
  return Tl(t, [
    "moment_liked",
    "moment_commented",
    "moment_like",
    "moment_comment",
  ]);
}
function iJ(t) {
  return Tl(t, ["profile_signature_change", "profile_signature_updated"]);
}
function oJ(t) {
  return Tl(t, [
    "profile_avatar_change",
    "profile_avatar_changed",
    "avatar_changed",
  ]);
}
function lJ(t) {
  return Tl(t, ["couple_avatar_applied", "couple_avatar_changed"]);
}
function cJ(t) {
  return Tl(t, ["moment_posted", "moment_publish", "moment_published"]);
}
function dJ(t) {
  return Tl(t, ["call_history_opened", "call_log_opened"]);
}
function uJ(t) {
  return o2(t) || xC(t) || hC(t) || gC(t) || bC(t) || t === "transfer";
}
function fJ(t, s) {
  const n = pC(s);
  return t === "chat_text_send" || t === "coop_text_exchange"
    ? o2(n)
    : t === "chat_voice_send" || t === "coop_voice_then_reply"
      ? xC(n)
      : t === "chat_image_send" || t === "coop_image_then_reply"
        ? hC(n)
        : t === "chat_meme_send" || t === "coop_meme_then_reply"
          ? gC(n)
          : t === "chat_transfer_send" || t === "coop_transfer_then_reply"
            ? n === "transfer"
            : t === "chat_moment_forward" || t === "coop_moment_then_reply"
              ? bC(n)
              : t === "profile_signature_change"
                ? iJ(n)
                : t === "profile_avatar_change"
                  ? oJ(n)
                  : t === "couple_avatar_applied"
                    ? lJ(n)
                    : t === "moment_posted"
                      ? cJ(n)
                      : t === "moment_interact"
                        ? rJ(n)
                        : t === "call_history_opened"
                          ? dJ(n)
                          : !1;
}
function mJ(t, s) {
  var u, f;
  if (
    !t ||
    t.source !== "chat_app_daily" ||
    !s ||
    t.status === "done" ||
    !Number.isFinite(Number(t.target)) ||
    Number(t.target) <= 0
  )
    return t;
  const n = s.sender === "me" ? "user" : s.sender === "them" ? "ai" : null;
  if (!n) return t;
  const a = pC(s.messageType || "text"),
    r =
      t.progress && typeof t.progress == "object"
        ? t.progress
        : { user: 0, ai: 0, total: 0 };
  let i = t;
  if (n === "user" && fJ(t.templateId, a)) {
    const p = Math.min(t.target, Number(r.user || 0) + 1);
    i = { ...i, progress: { ...r, user: p, total: p + Number(r.ai || 0) } };
  }
  if (
    n === "ai" &&
    (t.ownerType === "coop"
      ? uJ(a)
      : t.templateId === "chat_text_send" && o2(a))
  ) {
    const p = Math.min(t.target, Number(r.ai || 0) + 1);
    i = { ...i, progress: { ...r, ai: p, total: Number(r.user || 0) + p } };
  }
  const o =
      Number(((u = i.progress) == null ? void 0 : u.user) || 0) >=
      Number(i.target || 0),
    c =
      Number(((f = i.progress) == null ? void 0 : f.ai) || 0) >=
      Number(i.target || 0);
  return (i.ownerType === "coop" ? o && c : o)
    ? { ...i, status: "done", completedAt: i.completedAt || Date.now() }
    : i;
}
const pJ = [
    { id: "m1", label: "M1", dayThreshold: 3, maxFailedDays: 0 },
    { id: "m2", label: "M2", dayThreshold: 7, maxFailedDays: 1 },
    { id: "m3", label: "M3", dayThreshold: 14, maxFailedDays: 2 },
  ],
  Lk = [3, 7, 14, 21],
  xJ = 15e4;
function qb(t) {
  const s = (t == null ? void 0 : t.rewardState) || {};
  return {
    claimedMilestones: Array.isArray(s.claimedMilestones)
      ? s.claimedMilestones
      : [],
    inventory: Array.isArray(s.inventory) ? s.inventory : [],
    lastClaimStory:
      s != null && s.lastClaimStory && typeof s.lastClaimStory == "object"
        ? s.lastClaimStory
        : null,
  };
}
function hJ({ currentDayIndex: t, failedDays: s, claimedMilestones: n }) {
  const a = new Set(Array.isArray(n) ? n : []);
  return pJ.filter((r) =>
    a.has(r.id)
      ? !1
      : Number(t || 1) >= r.dayThreshold && Number(s || 0) <= r.maxFailedDays,
  );
}
function gJ(t, s) {
  return t === "m1"
    ? {
        title: "嘴硬翻译器钥匙扣",
        description: "能把“我没事”自动翻译成“快来哄我一下”。",
        story:
          "Char：这钥匙扣很危险，基本把我的嘴硬权益直接清零了。不过既然是你送的，我勉强同意它上岗。",
      }
    : t === "m2"
      ? {
          title: "争论暂停哨豪华版",
          description: "一吹就会响起“先喝口水再继续”的提示音。",
          story:
            "Char：这哨子我建议你随身带着，尤其在你语速突然提升的时候。放心，我会配合先喝水再讲道理。",
        }
      : {
          title: "深夜已读不回防御头盔",
          description: "佩戴后可自动生成“正在组织语言中”的合理解释。",
          story:
            "Char：这头盔看起来像给你自己准备的。下次你沉默太久，我就默认你在头盔里写小作文。",
          seasonNo: s,
        };
}
function Cx(t) {
  const s = (t == null ? void 0 : t.reportState) || {};
  return {
    status: ["idle", "loading", "ready", "error"].includes(
      s == null ? void 0 : s.status,
    )
      ? s.status
      : "idle",
    draft: s != null && s.draft && typeof s.draft == "object" ? s.draft : null,
    savedArchives: Array.isArray(s == null ? void 0 : s.savedArchives)
      ? s.savedArchives
      : [],
    selectedArchiveId: (s == null ? void 0 : s.selectedArchiveId) || null,
    errorText: String((s == null ? void 0 : s.errorText) || ""),
  };
}
function bJ(t) {
  return (Array.isArray(t) ? t : []).filter(
    (s) => (s == null ? void 0 : s.status) === "done",
  ).length;
}
function rm(t) {
  const s = Math.floor(Number(t) || 7);
  return Math.max(3, Math.min(21, s));
}
function yJ(t) {
  return t === "active"
    ? "in_progress"
    : t === "completed_success"
      ? "resolved"
      : t === "completed_failed" || t === "abandoned"
        ? "failed"
        : "new";
}
function vc(t) {
  return (Array.isArray(t) ? t : []).map((n, a) => {
    const r =
      (n == null ? void 0 : n.assignedTo) === "ai" ||
      (n == null ? void 0 : n.ownerType) === "ai"
        ? "ai"
        : (n == null ? void 0 : n.assignedTo) === "user" ||
            (n == null ? void 0 : n.ownerType) === "user"
          ? "user"
          : a % 2 === 0
            ? "ai"
            : "user";
    return {
      ...n,
      assignedTo: r,
      ownerType: (n == null ? void 0 : n.ownerType) || r,
    };
  });
}
function vJ(t, s) {
  return !t ||
    (s == null ? void 0 : s.themeType) !== "custom" ||
    !Array.isArray(t.days)
    ? t
    : {
        ...t,
        days: t.days.map((n) => ({
          ...n,
          tasks: vc(n == null ? void 0 : n.tasks),
        })),
      };
}
function Qb(t = [], s = "in_progress") {
  const n = vc(t),
    a = n.find((c) => (c == null ? void 0 : c.assignedTo) === "ai") || null,
    r = n.find((c) => (c == null ? void 0 : c.assignedTo) === "user") || null,
    i = (a == null ? void 0 : a.status) || "pending",
    o = (r == null ? void 0 : r.status) || "pending";
  return i === "done" && o === "done"
    ? "done"
    : i === "failed" || o === "failed"
      ? "failed"
      : s;
}
function wJ(t, s) {
  if (
    !t ||
    !Array.isArray(t.days) ||
    (s == null ? void 0 : s.themeType) !== "daily"
  )
    return t;
  const n = t.days.map((a) => ({
    ...a,
    tasks: i2({
      dayIndex: a.dayIndex,
      difficulty: s == null ? void 0 : s.difficulty,
    }),
    status: a.status || "pending",
  }));
  return { ...t, days: n };
}
function jJ(t) {
  const s = rm(t == null ? void 0 : t.totalDays),
    n = Array.from({ length: s }).map((a, r) => {
      const i = r + 1;
      return {
        dayIndex: i,
        status: "pending",
        tasks: i2({
          dayIndex: i,
          difficulty: t == null ? void 0 : t.difficulty,
        }),
      };
    });
  return {
    planId: `season_local_daily_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    displayText: "日常向赛季任务已生成",
    days: n,
  };
}
function Dk(t) {
  return (Array.isArray(t) ? t : []).filter(
    (s) => s.status === "failed" || s.status === "abandoned_day",
  ).length;
}
function $k(t) {
  return t === "failed" || t === "abandoned_day";
}
function NJ({
  onBack: t,
  contact: s,
  featureId: n = "season_journey",
  initialState: a = {},
  onStateChange: r,
  onPushFeatureSummary: i,
  runtime: o = {},
}) {
  const [c, d] = l.useState((a == null ? void 0 : a.stage) || "draft"),
    [u, f] = l.useState(
      (a == null ? void 0 : a.config) || {
        totalDays: 7,
        customDaysEnabled: !1,
        themeType: "daily",
        customThemeText: "",
        difficulty: "easy",
      },
    ),
    [p, m] = l.useState(
      (a == null ? void 0 : a.negotiation) || {
        decision: null,
        aiLines: [],
        displayText: "",
        counterProposal: null,
      },
    ),
    [h, g] = l.useState(
      (a == null ? void 0 : a.plan) || {
        planId: "",
        displayText: "",
        days: [],
      },
    ),
    [x, y] = l.useState((a == null ? void 0 : a.currentDayIndex) || 1),
    [v, b] = l.useState(Number((a == null ? void 0 : a.regenUsed) || 0)),
    [N, w] = l.useState(
      Array.isArray(a == null ? void 0 : a.reviewHistory)
        ? a.reviewHistory
        : [],
    ),
    [_, A] = l.useState((a == null ? void 0 : a.inviteMeta) || null),
    [k, C] = l.useState((a == null ? void 0 : a.result) || null),
    [M, E] = l.useState((a == null ? void 0 : a.activeModal) || null),
    [S, j] = l.useState(
      (a == null ? void 0 : a.dailyEventState) || {
        dayIndex: null,
        fetchedAt: 0,
        status: "idle",
        event: null,
        resolved: null,
      },
    ),
    [T, I] = l.useState(
      Array.isArray(a == null ? void 0 : a.eventHistory) ? a.eventHistory : [],
    ),
    [L, B] = l.useState(
      Array.isArray(a == null ? void 0 : a.recentEventStyles)
        ? a.recentEventStyles.slice(-3)
        : [],
    ),
    [F, D] = l.useState(qb(a)),
    [$, P] = l.useState(Cx(a)),
    [z, O] = l.useState(
      a != null && a.taskEvidenceMap && typeof a.taskEvidenceMap == "object"
        ? a.taskEvidenceMap
        : {},
    ),
    [Z, K] = l.useState(
      a != null &&
        a.customJudgeDraftMap &&
        typeof a.customJudgeDraftMap == "object"
        ? a.customJudgeDraftMap
        : {},
    ),
    [q, V] = l.useState(!!(a != null && a.customReviewPanelOpen)),
    [ne, le] = l.useState((a == null ? void 0 : a.customTaskView) || "dossier"),
    [ie, X] = l.useState(
      (a == null ? void 0 : a.customChatFlowState) || "chat_loading",
    ),
    [je, xe] = l.useState((a == null ? void 0 : a.customTaskDraftText) || ""),
    [ye, R] = l.useState((a == null ? void 0 : a.customActiveTab) || "ai"),
    [oe, ee] = l.useState(!1),
    [H, Y] = l.useState(
      a != null && a.customThemeAnchor && typeof a.customThemeAnchor == "object"
        ? a.customThemeAnchor
        : null,
    ),
    [U, ce] = l.useState(
      a != null &&
        a.customJudgeCommentMap &&
        typeof a.customJudgeCommentMap == "object"
        ? a.customJudgeCommentMap
        : {},
    ),
    [pe, se] = l.useState(
      a != null &&
        a.customTaCommentMap &&
        typeof a.customTaCommentMap == "object"
        ? a.customTaCommentMap
        : {},
    ),
    [Te, ke] = l.useState(!1),
    [W, ue] = l.useState(""),
    [re, he] = l.useState(!1),
    ge = l.useRef(""),
    J = l.useRef(null),
    G = l.useRef(null),
    we = l.useMemo(
      () =>
        `couple_space_season_journey_state_${n}_${String((s == null ? void 0 : s.id) || "unknown")}`,
      [s == null ? void 0 : s.id, n],
    ),
    Q = rm(u.totalDays),
    ve = l.useMemo(() => Dk(h.days), [h.days]),
    Ve = l.useMemo(() => bJ(h.days), [h.days]),
    te =
      l.useMemo(
        () =>
          hJ({
            currentDayIndex: x,
            failedDays: ve,
            claimedMilestones: F.claimedMilestones,
          }),
        [x, ve, F.claimedMilestones],
      )[0] || null,
    Se =
      !["completed_success", "completed_failed", "abandoned"].includes(c) &&
      !!te,
    Fe = l.useMemo(
      () =>
        (Array.isArray(F.inventory) ? F.inventory : []).filter(
          (ot) =>
            (ot == null ? void 0 : ot.itemType) === "fragment" ||
            (ot == null ? void 0 : ot.source) === "milestone",
        ),
      [F.inventory],
    ),
    $e = Fe[0] || null,
    tt =
      (Array.isArray($.savedArchives) ? $.savedArchives : []).find(
        (ot) =>
          (ot == null ? void 0 : ot.id) ===
          ($ == null ? void 0 : $.selectedArchiveId),
      ) ||
      (Array.isArray($.savedArchives) ? $.savedArchives[0] : null) ||
      null;
  (l.useEffect(() => {
    if (!(s != null && s.id)) return;
    let ot = !1;
    return (
      be
        .get(we, null)
        .then((st) => {
          ot ||
            !st ||
            typeof st != "object" ||
            (d((st == null ? void 0 : st.stage) || "draft"),
            f(
              (st == null ? void 0 : st.config) || {
                totalDays: 7,
                customDaysEnabled: !1,
                themeType: "daily",
                customThemeText: "",
                difficulty: "easy",
              },
            ),
            m(
              (st == null ? void 0 : st.negotiation) || {
                decision: null,
                aiLines: [],
                displayText: "",
                counterProposal: null,
              },
            ),
            g(
              (st == null ? void 0 : st.plan) || {
                planId: "",
                displayText: "",
                days: [],
              },
            ),
            y((st == null ? void 0 : st.currentDayIndex) || 1),
            b(Number((st == null ? void 0 : st.regenUsed) || 0)),
            w(
              Array.isArray(st == null ? void 0 : st.reviewHistory)
                ? st.reviewHistory
                : [],
            ),
            A((st == null ? void 0 : st.inviteMeta) || null),
            C((st == null ? void 0 : st.result) || null),
            E((st == null ? void 0 : st.activeModal) || null),
            j(
              (st == null ? void 0 : st.dailyEventState) || {
                dayIndex: null,
                fetchedAt: 0,
                status: "idle",
                event: null,
                resolved: null,
              },
            ),
            I(
              Array.isArray(st == null ? void 0 : st.eventHistory)
                ? st.eventHistory
                : [],
            ),
            B(
              Array.isArray(st == null ? void 0 : st.recentEventStyles)
                ? st.recentEventStyles.slice(-3)
                : [],
            ),
            D(qb(st)),
            P(Cx(st)),
            O(
              st != null &&
                st.taskEvidenceMap &&
                typeof st.taskEvidenceMap == "object"
                ? st.taskEvidenceMap
                : {},
            ),
            K(
              st != null &&
                st.customJudgeDraftMap &&
                typeof st.customJudgeDraftMap == "object"
                ? st.customJudgeDraftMap
                : {},
            ),
            V(!!(st != null && st.customReviewPanelOpen)),
            le((st == null ? void 0 : st.customTaskView) || "dossier"),
            X((st == null ? void 0 : st.customChatFlowState) || "chat_loading"),
            xe((st == null ? void 0 : st.customTaskDraftText) || ""),
            R((st == null ? void 0 : st.customActiveTab) || "ai"),
            ee(!!(st != null && st.customShowStamp)),
            Y(
              st != null &&
                st.customThemeAnchor &&
                typeof st.customThemeAnchor == "object"
                ? st.customThemeAnchor
                : null,
            ),
            ce(
              st != null &&
                st.customJudgeCommentMap &&
                typeof st.customJudgeCommentMap == "object"
                ? st.customJudgeCommentMap
                : {},
            ),
            se(
              st != null &&
                st.customTaCommentMap &&
                typeof st.customTaCommentMap == "object"
                ? st.customTaCommentMap
                : {},
            ),
            (ge.current = JSON.stringify(st)));
        })
        .finally(() => {
          ot || he(!0);
        }),
      () => {
        ot = !0;
      }
    );
  }, [s == null ? void 0 : s.id, we]),
    l.useEffect(() => {
      if (!(s != null && s.id) || !re) return;
      const ot = {
          seasonVersion: 3,
          stage: c,
          config: { ...u, totalDays: Q },
          negotiation: p,
          plan: h,
          currentDayIndex: x,
          regenUsed: v,
          reviewHistory: N,
          inviteMeta: _,
          result: k,
          activeModal: M,
          dailyEventState: S,
          eventHistory: T,
          recentEventStyles: L,
          rewardState: F,
          reportState: $,
          taskEvidenceMap: z,
          customJudgeDraftMap: Z,
          customReviewPanelOpen: q,
          customTaskView: ne,
          customChatFlowState: ie,
          customTaskDraftText: je,
          customActiveTab: ye,
          customShowStamp: oe,
          customThemeAnchor: H,
          customJudgeCommentMap: U,
          customTaCommentMap: pe,
          failedDays: ve,
          successDays: Ve,
          status: yJ(c),
          updatedAt: Date.now(),
        },
        { updatedAt: st, ...$t } = ot,
        Ft = JSON.stringify($t);
      ge.current !== Ft &&
        ((ge.current = Ft),
        typeof r == "function" && r(ot),
        (G.current = ot),
        J.current && window.clearTimeout(J.current),
        (J.current = window.setTimeout(() => {
          const es = G.current;
          ((G.current = null),
            (J.current = null),
            es && be.set(we, es).catch(() => {}));
        }, 360)));
    }, [
      s == null ? void 0 : s.id,
      re,
      u,
      x,
      ve,
      _,
      p,
      r,
      h,
      M,
      S,
      T,
      v,
      L,
      F,
      $,
      z,
      Z,
      q,
      ne,
      ie,
      je,
      ye,
      oe,
      H,
      U,
      pe,
      k,
      N,
      Ve,
      c,
      we,
      Q,
    ]),
    l.useEffect(
      () => () => {
        J.current && (window.clearTimeout(J.current), (J.current = null));
        const ot = G.current;
        ((G.current = null), ot && be.set(we, ot).catch(() => {}));
      },
      [we],
    ));
  const Xe = l.useMemo(
      () =>
        (Array.isArray(h.days) && h.days.find((ot) => ot.dayIndex === x)) ||
        null,
      [x, h.days],
    ),
    ht = l.useMemo(() => {
      if (Xe != null && Xe.aiToUserTheme && typeof Xe.aiToUserTheme == "object")
        return Xe.aiToUserTheme;
      if (H && typeof H == "object") return H;
      const ot = Array.isArray(h == null ? void 0 : h.days) ? [...h.days] : [];
      ot.sort(
        ($t, Ft) =>
          Number((Ft == null ? void 0 : Ft.dayIndex) || 0) -
          Number(($t == null ? void 0 : $t.dayIndex) || 0),
      );
      const st = ot.find(
        ($t) =>
          ($t == null ? void 0 : $t.aiToUserTheme) &&
          typeof $t.aiToUserTheme == "object",
      );
      return (st == null ? void 0 : st.aiToUserTheme) || null;
    }, [
      Xe == null ? void 0 : Xe.aiToUserTheme,
      H,
      h == null ? void 0 : h.days,
    ]),
    Pe = l.useMemo(() => {
      const ot = Array.isArray(h.days) ? [...h.days] : [];
      if (ot.length === 0) return 1;
      ot.sort(
        ($t, Ft) =>
          Number(($t == null ? void 0 : $t.dayIndex) || 0) -
          Number((Ft == null ? void 0 : Ft.dayIndex) || 0),
      );
      let st = 0;
      for (const $t of ot) {
        const Ft = Number(($t == null ? void 0 : $t.dayIndex) || 0);
        if (Ft !== st + 1) break;
        const es = String(($t == null ? void 0 : $t.status) || "pending");
        if (!(es === "done" || es === "failed" || es === "abandoned_day"))
          break;
        st = Ft;
      }
      return Math.max(1, Math.min(Q, st + 1));
    }, [h.days, Q]),
    ut = ["completed_success", "completed_failed", "abandoned"].includes(c),
    _t = $k(Xe == null ? void 0 : Xe.status),
    Ee = () => {
      const ot = o == null ? void 0 : o.createChat,
        st = o == null ? void 0 : o.sendMessage;
      if (
        typeof ot != "function" ||
        typeof st != "function" ||
        !(s != null && s.id)
      )
        return (
          typeof i == "function" &&
            i({
              featureId: n,
              title: "赛季旅程 · 协商邀请",
              summary: `已发起赛季协商：${Q}天，${u.themeType === "daily" ? "日常向" : `自定义(${u.customThemeText || "未命名"})`}，${u.difficulty}。`,
            }),
          null
        );
      const $t = ot(s.id);
      if (!$t) return null;
      const Ft = `season_invite_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      st(
        $t,
        `赛季邀请：${Q}天 · ${u.themeType === "daily" ? "日常向" : "自定义主题"} · ${u.difficulty}`,
        null,
        "season_journey_invite",
        {
          id: Ft,
          seasonInviteStatus: "pending",
          seasonConfig: {
            totalDays: Q,
            themeType: u.themeType,
            customThemeText: u.customThemeText,
            difficulty: u.difficulty,
          },
          seasonJourneyCard: {
            cardType: "invite",
            status: "pending",
            payload: {
              totalDays: Q,
              themeType: u.themeType,
              customThemeText: u.customThemeText,
              difficulty: u.difficulty,
            },
          },
        },
      );
      const es = { chatId: $t, inviteMessageId: Ft };
      return (A(es), es);
    },
    fe = (ot, st) => {
      const $t = o == null ? void 0 : o.updateMessage;
      if (
        !(ot != null && ot.chatId) ||
        !(ot != null && ot.inviteMessageId) ||
        typeof $t != "function"
      )
        return;
      const Ft =
        st === "failed"
          ? "failed"
          : st === "rejected"
            ? "rejected"
            : st === "counter_proposal"
              ? "counter_proposal"
              : "accepted";
      $t(ot.chatId, ot.inviteMessageId, {
        seasonInviteStatus: Ft,
        seasonInviteResolvedAt: Date.now(),
        seasonJourneyCard: { cardType: "invite", status: Ft },
      });
    },
    He = (ot) => {
      if (typeof (o == null ? void 0 : o.emitRoleDialogue) != "function")
        return;
      const $t = (
        Array.isArray(ot == null ? void 0 : ot.messageLines)
          ? ot.messageLines
          : []
      )
        .map((Ft) => String(Ft || "").trim())
        .filter(Boolean);
      $t.length > 0 && o.emitRoleDialogue($t);
    },
    Ie = async () => {
      if (
        !(c !== "active" || ut) &&
        !(!Xe || Xe.dayIndex !== x) &&
        (S == null ? void 0 : S.status) !== "loading" &&
        !(
          (S == null ? void 0 : S.dayIndex) === x &&
          (S == null ? void 0 : S.status) === "ready"
        ) &&
        !(
          (S == null ? void 0 : S.dayIndex) === x &&
          (S == null ? void 0 : S.status) === "resolved"
        )
      ) {
        j((ot) => ({
          ...ot,
          dayIndex: x,
          status: "loading",
          resolved: null,
          fetchedAt: Date.now(),
          event: null,
        }));
        try {
          const ot = await tJ({
              contact: s,
              getLatestMessages: o == null ? void 0 : o.getLatestMessages,
              getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
              callApi: o == null ? void 0 : o.callApi,
              dayIndex: x,
              totalDays: Q,
              todayTasks: (Xe == null ? void 0 : Xe.tasks) || [],
              recentEventStyles: L,
              seasonHistory: T.slice(0, 6)
                .map(
                  ($t) =>
                    ($t == null ? void 0 : $t.seasonLogText) ||
                    ($t == null ? void 0 : $t.title) ||
                    "",
                )
                .filter(Boolean)
                .join(" | "),
            }),
            st = (ot == null ? void 0 : ot.event) || null;
          (j({
            dayIndex: x,
            fetchedAt: Date.now(),
            status: st ? "ready" : "failed",
            event: st,
            resolved: null,
          }),
            st &&
              B(($t) =>
                [...(Array.isArray($t) ? $t : []), st.styleTag]
                  .filter(Boolean)
                  .slice(-3),
              ));
        } catch {
          j((ot) => ({ ...ot, status: "failed", event: null }));
        }
      }
    },
    Ce = ({ text: ot, type: st, extra: $t = {} }) => {
      const Ft = o == null ? void 0 : o.createChat,
        es = o == null ? void 0 : o.sendMessage;
      if (
        typeof Ft != "function" ||
        typeof es != "function" ||
        !(s != null && s.id)
      )
        return null;
      const At = Ft(s.id);
      if (!At) return null;
      const Jt = `${st}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      return (es(At, ot, null, st, { id: Jt, ...$t }), { chatId: At, id: Jt });
    },
    Re = async () => {
      if (Te) return;
      if (u.themeType === "custom" && !String(u.customThemeText || "").trim()) {
        ue("自定义主题不能为空，请先输入主题内容。");
        return;
      }
      (ke(!0), ue(""), d("negotiating"));
      const ot = Ee();
      try {
        const st = await eJ({
          contact: s,
          getLatestMessages: o == null ? void 0 : o.getLatestMessages,
          getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
          callApi: o == null ? void 0 : o.callApi,
          seasonConfig: { ...u, totalDays: Q },
        });
        if (!(st != null && st.ok) || !(st != null && st.result))
          throw new Error(
            (st == null ? void 0 : st.error) || "negotiation_failed",
          );
        const $t = (st == null ? void 0 : st.result) || {};
        (m({
          decision: $t.decision || "accepted",
          aiLines: Array.isArray($t.messageLines) ? $t.messageLines : [],
          displayText: "",
          counterProposal: $t.counterProposal || null,
        }),
          fe(ot, $t.decision),
          He($t),
          $t.decision === "rejected"
            ? d("negotiation_rejected")
            : $t.decision === "counter_proposal"
              ? d("negotiation_countered")
              : d("ready_to_generate"));
      } catch {
        (fe(ot, "failed"), d("draft"), ue("协商接口未返回有效结果，请重试。"));
      } finally {
        ke(!1);
      }
    },
    De = () => {
      const ot = p == null ? void 0 : p.counterProposal;
      ot &&
        (f((st) => ({
          ...st,
          totalDays: rm(ot.totalDays),
          themeType: ot.themeType === "daily" ? "daily" : "custom",
          customThemeText: ot.customThemeText || st.customThemeText,
          difficulty: ["easy", "normal", "hard"].includes(ot.difficulty)
            ? ot.difficulty
            : st.difficulty,
          customDaysEnabled: !Lk.includes(rm(ot.totalDays)),
        })),
        d("ready_to_generate"));
    },
    at = async () => {
      if (!Te && c === "ready_to_generate") {
        if (
          u.themeType === "custom" &&
          !String(u.customThemeText || "").trim()
        ) {
          ue("自定义主题不能为空，请先输入主题内容。");
          return;
        }
        (ke(!0), ue(""));
        try {
          let ot = null;
          if (u.themeType === "daily") ot = jJ({ ...u, totalDays: Q });
          else {
            const $t = await Ck({
              contact: s,
              getLatestMessages: o == null ? void 0 : o.getLatestMessages,
              getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
              callApi: o == null ? void 0 : o.callApi,
              finalConfig: { ...u, totalDays: Q },
            });
            ot = $t == null ? void 0 : $t.plan;
          }
          if (!ot || !Array.isArray(ot.days) || ot.days.length === 0)
            throw new Error("empty_plan");
          const st = vJ(wJ(ot, { ...u, totalDays: Q }), { ...u, totalDays: Q });
          (g(st),
            y(1),
            b(0),
            C(null),
            j({
              dayIndex: null,
              fetchedAt: 0,
              status: "idle",
              event: null,
              resolved: null,
            }),
            I([]),
            B([]),
            D(qb(null)),
            P(Cx(null)),
            Y(null),
            ce({}),
            se({}),
            d("active"));
        } catch {
          ue("任务生成失败，请重试。");
        } finally {
          ke(!1);
        }
      }
    },
    ft = (ot) => {
      g((st) => {
        const Ft = (
          Array.isArray(st == null ? void 0 : st.days) ? st.days : []
        ).map((es) => (es.dayIndex !== x ? es : ot(es)));
        return { ...st, days: Ft };
      });
    },
    vt = (ot) => {
      ft((st) => ({ ...st, status: ot }));
    },
    Oe = (ot, st = "completed") => {
      if (ut && st !== "abandoned") return;
      const $t = Dk(ot),
        Ft = Number(($t / Q).toFixed(4)),
        es = Ft > 0.1 || st === "abandoned";
      d(
        st === "abandoned"
          ? "abandoned"
          : es
            ? "completed_failed"
            : "completed_success",
      );
      const Jt = {
        status: es ? "failed" : "success",
        reason: st,
        failRatio: Ft,
        failedDays: $t,
        totalDays: Q,
        resolvedAt: Date.now(),
      };
      (C(Jt),
        typeof i == "function" &&
          i({
            featureId: n,
            title: es ? "赛季旅程 · 赛季失败" : "赛季旅程 · 赛季成功",
            summary: `赛季共 ${Q} 天，失败 ${$t} 天，失败占比 ${(Ft * 100).toFixed(1)}%。`,
          }),
        Ce({
          text: es ? "赛季结算：挑战失败" : "赛季结算：挑战成功",
          type: "season_journey_settlement",
          extra: {
            seasonResult: es ? "failed" : "success",
            seasonFailedDays: $t,
            seasonTotalDays: Q,
            seasonFailRatio: Ft,
            seasonSettleReason: st,
            seasonJourneyCard: {
              cardType: "settlement",
              status: es ? "failed" : "success",
              payload: {
                failedDays: $t,
                totalDays: Q,
                failRatio: Ft,
                reason: st,
              },
            },
          },
        }));
    },
    Qe = (ot) => {
      ut ||
        _t ||
        ft((st) => {
          if ($k(st == null ? void 0 : st.status)) return st;
          const $t = (st.tasks || []).map((es) => {
              if (es.taskId !== ot || es.source === "chat_app_daily") return es;
              const At = es.status === "done" ? "pending" : "done";
              return { ...es, status: At };
            }),
            Ft = $t.length > 0 && $t.every((es) => es.status === "done");
          return { ...st, tasks: $t, status: Ft ? "done" : "in_progress" };
        });
    };
  (l.useEffect(() => {
    if (c !== "active" || !(s != null && s.id)) return;
    const ot = (st) => {
      try {
        const $t = st == null ? void 0 : st.detail;
        if (
          !$t ||
          (String($t.contactId) !== String(s.id) &&
            String($t.contactId) !== "*")
        )
          return;
        ft((Ft) => {
          const es = Array.isArray(Ft == null ? void 0 : Ft.tasks)
            ? Ft.tasks
            : [];
          if (es.length === 0) return Ft;
          let At = !1;
          const Jt = es.map((qt) => {
            const Lt = mJ(qt, $t);
            return (Lt !== qt && (At = !0), Lt);
          });
          if (!At) return Ft;
          const Vt = Jt.length > 0 && Jt.every((qt) => qt.status === "done");
          return {
            ...Ft,
            tasks: Jt,
            status: Vt ? "done" : Ft.status || "in_progress",
          };
        });
      } catch {}
    };
    return (
      window.addEventListener(ku, ot),
      () => window.removeEventListener(ku, ot)
    );
  }, [s == null ? void 0 : s.id, c, x]),
    l.useEffect(() => {
      if ((S == null ? void 0 : S.status) !== "loading") return;
      const ot = setTimeout(() => {
        j((st) =>
          (st == null ? void 0 : st.status) !== "loading"
            ? st
            : { ...st, status: "failed", event: null, resolved: null },
        );
      }, xJ);
      return () => clearTimeout(ot);
    }, [S == null ? void 0 : S.status]),
    l.useEffect(() => {
      c !== "active" ||
        ut ||
        !Xe ||
        Xe.dayIndex !== x ||
        j((ot) =>
          (ot == null ? void 0 : ot.dayIndex) === x
            ? ot
            : {
                dayIndex: x,
                fetchedAt: 0,
                status: "idle",
                event: null,
                resolved: null,
              },
        );
    }, [Xe, x, ut, c]));
  const Ye = (ot) => {
      if (!(!Xe || ut)) {
        if (ot === "bonus_progress") {
          let st = !1;
          return (
            ft(($t) => {
              const Ft = Array.isArray($t == null ? void 0 : $t.tasks)
                  ? $t.tasks
                  : [],
                es = Ft.find((Vt) => Vt.status !== "done");
              if (!es) return $t;
              st = !0;
              const At = Ft.map((Vt) =>
                  Vt.taskId === es.taskId ? { ...Vt, status: "done" } : Vt,
                ),
                Jt = At.length > 0 && At.every((Vt) => Vt.status === "done");
              return {
                ...$t,
                tasks: At,
                status: Jt ? "done" : $t.status || "in_progress",
              };
            }),
            { applied: st, taskDelta: 0, type: ot }
          );
        }
        if (ot === "reduce_task_load") {
          let st = !1;
          return (
            ft(($t) => {
              const Ft = Array.isArray($t == null ? void 0 : $t.tasks)
                ? $t.tasks
                : [];
              if (Ft.length <= 1) return $t;
              const es = Ft.findIndex((Vt) => Vt.status !== "done");
              if (es < 0) return $t;
              st = !0;
              const At = Ft.filter((Vt, qt) => qt !== es),
                Jt = At.length > 0 && At.every((Vt) => Vt.status === "done");
              return {
                ...$t,
                tasks: At,
                status: Jt ? "done" : $t.status || "in_progress",
              };
            }),
            { applied: st, taskDelta: st ? -1 : 0, type: ot }
          );
        }
        return ot === "badge_piece"
          ? { applied: !0, taskDelta: 0, type: ot }
          : { applied: !1, taskDelta: 0, type: ot || "none" };
      }
    },
    Ze = (ot) => {
      if (!(!Xe || ut))
        return ot !== "light_task_added"
          ? { applied: !1, taskDelta: 0, type: ot || "none" }
          : (ft((st) => {
              const $t = Array.isArray(st == null ? void 0 : st.tasks)
                  ? st.tasks
                  : [],
                Ft = {
                  taskId: `event_extra_d${st.dayIndex}_${Date.now()}`,
                  title: "事件补充任务：补一条真诚回应",
                  type: "manual_check",
                  judgeMode: "manual_ai",
                  status: "pending",
                };
              return {
                ...st,
                tasks: [...$t, Ft],
                status: st.status || "in_progress",
              };
            }),
            { applied: !0, taskDelta: 1, type: ot });
    },
    Ue = (ot) => {
      var At, Jt, Vt, qt, Lt, Qt;
      const st = S == null ? void 0 : S.event;
      if (!st || (S != null && S.resolved)) return;
      const $t =
          String(ot || "").toUpperCase() ===
          String(
            ((At = st == null ? void 0 : st.aiAnswer) == null
              ? void 0
              : At.optionId) || "",
          ).toUpperCase(),
        Ft = $t
          ? Ye(
              (Jt = st == null ? void 0 : st.resultPolicy) == null
                ? void 0
                : Jt.matchRewardType,
            )
          : Ze(
              (Vt = st == null ? void 0 : st.resultPolicy) == null
                ? void 0
                : Vt.mismatchEffectType,
            ),
        es = {
          id: `${st.eventId}_${Date.now()}`,
          dayIndex: x,
          eventId: st.eventId,
          styleTag: st.styleTag,
          title: st.title,
          theme: st.theme,
          selectedOptionId: ot,
          aiOptionId:
            ((qt = st == null ? void 0 : st.aiAnswer) == null
              ? void 0
              : qt.optionId) || "B",
          matched: $t,
          rewardType: $t
            ? (Lt = st == null ? void 0 : st.resultPolicy) == null
              ? void 0
              : Lt.matchRewardType
            : null,
          effectType: $t
            ? null
            : (Qt = st == null ? void 0 : st.resultPolicy) == null
              ? void 0
              : Qt.mismatchEffectType,
          collectible: ($t && (st == null ? void 0 : st.collectible)) || null,
          seasonLogText: (st == null ? void 0 : st.seasonLogText) || "",
          at: Date.now(),
        };
      (I((js) => [es, ...(Array.isArray(js) ? js : [])].slice(0, 100)),
        j((js) => ({
          ...js,
          status: "resolved",
          resolved: {
            selectedOptionId: ot,
            matched: $t,
            impact: Ft,
            at: Date.now(),
          },
        })));
    },
    me = async (ot) => {
      var At, Jt;
      if (!ot || ot.judgeMode !== "manual_ai" || Te || ut || _t) return;
      (ke(!0), ue(""));
      const st = String((z == null ? void 0 : z[ot.taskId]) || "").trim(),
        $t = String((Z == null ? void 0 : Z[ot.taskId]) || "").trim(),
        Ft = String((U == null ? void 0 : U[ot.taskId]) || "").trim(),
        es =
          $t === "pass"
            ? "通过"
            : $t === "soft_pass"
              ? "软通过"
              : $t === "reject"
                ? "未通过"
                : "";
      if (
        u.themeType === "custom" &&
        (ot == null ? void 0 : ot.assignedTo) === "ai"
      ) {
        const qt =
            vc((Xe == null ? void 0 : Xe.tasks) || []).find(
              (Qt) => (Qt == null ? void 0 : Qt.assignedTo) === "user",
            ) || null,
          Lt = String(
            (z == null ? void 0 : z[qt == null ? void 0 : qt.taskId]) || "",
          ).trim();
        if (!$t) {
          (ue("请先给 TA 的任务选择审判结论。"), ke(!1));
          return;
        }
        if (!Ft) {
          (ue("请先填写你对 TA 的评语。"), ke(!1));
          return;
        }
        if (!Lt) {
          (ue("请先录入你完成 TA 任务的证词，再提交互判。"), ke(!1));
          return;
        }
      }
      try {
        const Vt = await Mk({
            contact: s,
            getLatestMessages: o == null ? void 0 : o.getLatestMessages,
            getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
            callApi: o == null ? void 0 : o.callApi,
            taskContext: {
              dayIndex: x,
              taskId: ot.taskId,
              title: ot.title,
              status: ot.status,
              evidence: st,
              peerVerdict: $t || null,
            },
            objectionReason: `${st ? `用户提交完成检查（证词：${st}）` : "用户提交完成检查"}${es ? `；预判：${es}` : ""}`,
          }),
          qt =
            ((At = Vt == null ? void 0 : Vt.result) == null
              ? void 0
              : At.finalTaskStatus) === "done"
              ? "done"
              : "failed";
        if (
          (ft((Lt) => {
            const Qt = (Lt.tasks || []).map((cs) =>
              cs.taskId === ot.taskId ? { ...cs, status: qt } : cs,
            );
            if (u.themeType === "custom")
              return {
                ...Lt,
                tasks: Qt,
                status: Qb(Qt, Lt.status || "in_progress"),
              };
            const js = Qt.length > 0 && Qt.every((cs) => cs.status === "done");
            return {
              ...Lt,
              tasks: Qt,
              status: js ? "done" : Lt.status || "in_progress",
            };
          }),
          u.themeType === "custom" &&
            (ot == null ? void 0 : ot.assignedTo) === "ai")
        ) {
          const Lt = o == null ? void 0 : o.callApi;
          let Qt = [
              qt === "done"
                ? "收到你的裁定，我会继续认真完成我们的试炼。"
                : "我收到这次裁定了，我会按你的标准继续调整。",
            ],
            js = null,
            cs = "",
            Ne = "";
          const St =
              vc((Xe == null ? void 0 : Xe.tasks) || []).find(
                (bt) => (bt == null ? void 0 : bt.assignedTo) === "user",
              ) || null,
            Be = String(
              (z == null ? void 0 : z[St == null ? void 0 : St.taskId]) || "",
            ).trim(),
            Nt = {
              today: (Array.isArray(
                (Jt = o == null ? void 0 : o.getLatestMessages) == null
                  ? void 0
                  : Jt.call(o, s == null ? void 0 : s.id),
              )
                ? o.getLatestMessages(s == null ? void 0 : s.id)
                : []
              )
                .slice(0, 20)
                .map((bt) => ({
                  role:
                    (bt == null ? void 0 : bt.role) ||
                    (bt == null ? void 0 : bt.sender) ||
                    "unknown",
                  content: String(
                    (bt == null ? void 0 : bt.content) ||
                      (bt == null ? void 0 : bt.text) ||
                      "",
                  ).slice(0, 280),
                  at:
                    (bt == null ? void 0 : bt.createdAt) ||
                    (bt == null ? void 0 : bt.timestamp) ||
                    null,
                })),
            };
          if (typeof Lt == "function")
            try {
              const bt = await Lt({
                  feature: "season_journey",
                  action: "custom_task_judgement",
                  payload: {
                    dayIndex: x,
                    aiTaskId: ot.taskId,
                    aiTaskStatus: qt,
                    userVerdictToAi: {
                      verdict: $t || null,
                      verdictText: es || null,
                      comment: Ft || null,
                    },
                    userTaskEvidence: Be,
                    dayContext: Nt,
                  },
                }),
                ns =
                  (bt == null ? void 0 : bt.result) ||
                  (bt == null ? void 0 : bt.data) ||
                  bt ||
                  {};
              (Array.isArray(ns == null ? void 0 : ns.taReplyLines) &&
                ns.taReplyLines.length > 0 &&
                (Qt = ns.taReplyLines
                  .map((_e) => String(_e || "").trim())
                  .filter(Boolean)),
                ((ns == null ? void 0 : ns.userTaskFinalStatus) === "done" ||
                  (ns == null ? void 0 : ns.userTaskFinalStatus) ===
                    "failed") &&
                  (js = ns.userTaskFinalStatus));
              const Ge = String(
                (ns == null ? void 0 : ns.commentToUserTask) ||
                  (ns == null ? void 0 : ns.userTaskComment) ||
                  (ns == null ? void 0 : ns.commentForUserTask) ||
                  "",
              ).trim();
              Ge && (cs = Ge);
              const Le = String(
                (ns == null ? void 0 : ns.replyToUserVerdict) ||
                  (ns == null ? void 0 : ns.taReplyToUserVerdict) ||
                  (ns == null ? void 0 : ns.verdictReply) ||
                  "",
              ).trim();
              Le && (Ne = Le);
            } catch {}
          (cs ||
            (cs =
              js === "done"
                ? "今天你的完成度很高，我认可这次任务表现。"
                : "这次还差一点点，明天我们再把细节补齐。"),
            Ne ||
              (Ne =
                qt === "done"
                  ? "收到你的审判，我会继续按这个标准执行。"
                  : "我接受这次判定，后续会按你的要求调整。"),
            js &&
              ft((bt) => ({
                ...bt,
                tasks: (bt.tasks || []).map((ns) =>
                  (ns == null ? void 0 : ns.assignedTo) === "user"
                    ? { ...ns, status: js }
                    : ns,
                ),
                status: Qb(
                  (bt.tasks || []).map((ns) =>
                    (ns == null ? void 0 : ns.assignedTo) === "user"
                      ? { ...ns, status: js }
                      : ns,
                  ),
                  bt.status || "in_progress",
                ),
              })),
            St != null &&
              St.taskId &&
              cs &&
              se((bt) => ({ ...(bt || {}), [St.taskId]: cs })),
            Ce({
              text: `裁定回执：Day${x} ${qt === "done" ? "通过" : "未通过"}`,
              type: "season_journey_custom_judgement",
              extra: {
                seasonJourneyCard: {
                  cardType: "custom_judgement",
                  status: qt,
                  payload: {
                    dayIndex: x,
                    aiTaskId: ot.taskId,
                    aiTaskStatus: qt,
                    userTaskStatus: js,
                    userVerdictToAi: {
                      verdict: $t || null,
                      verdictText: es || null,
                      comment: Ft || null,
                    },
                    commentToUserTask: cs || null,
                    replyToUserVerdict: Ne || null,
                  },
                },
              },
            }),
            typeof (o == null ? void 0 : o.emitRoleDialogue) == "function" &&
              Qt.length > 0 &&
              o.emitRoleDialogue(Qt));
        }
      } catch {
        ue("提交检查失败，请稍后再试。");
      } finally {
        ke(!1);
      }
    },
    jt = (ot) => {
      (ee(!0),
        setTimeout(() => {
          (typeof ot == "function" && ot(), ee(!1));
        }, 380));
    },
    Gt = async () => {
      var st;
      const ot = String(je || "").trim();
      if (!ot) {
        ue("请先写下今天要给TA的任务。");
        return;
      }
      (ue(""), le("chat"), X("chat_loading"), ke(!0));
      try {
        const $t = o == null ? void 0 : o.callApi,
          Ft = ht ? "daily" : "init";
        let es =
            "撒娇高阶考核：请使用至少三个表情包或颜文字，向我描述今天最开心的一件小事。",
          At = ht || {
            themeId: `custom_theme_${Date.now()}`,
            themeName: "回执试炼",
            themeDesc: "根据当天互动动态生成",
          },
          Jt = "",
          Vt = [
            "收到你的任务，我会认真执行。",
            "我也给你布置了今天的回执试炼，准备好了吗？",
          ];
        const Lt = (
            Array.isArray(
              (st = o == null ? void 0 : o.getLatestMessages) == null
                ? void 0
                : st.call(o, s == null ? void 0 : s.id),
            )
              ? o.getLatestMessages(s == null ? void 0 : s.id)
              : []
          )
            .slice(0, 20)
            .map((Ne) => ({
              role:
                (Ne == null ? void 0 : Ne.role) ||
                (Ne == null ? void 0 : Ne.sender) ||
                "unknown",
              content: String(
                (Ne == null ? void 0 : Ne.content) ||
                  (Ne == null ? void 0 : Ne.text) ||
                  "",
              ).slice(0, 280),
              at:
                (Ne == null ? void 0 : Ne.createdAt) ||
                (Ne == null ? void 0 : Ne.timestamp) ||
                null,
            })),
          Qt = Array.isArray(h == null ? void 0 : h.days)
            ? h.days.find(
                (Ne) =>
                  Number(Ne == null ? void 0 : Ne.dayIndex) === Number(x) - 1,
              )
            : null,
          js = [],
          cs = (Array.isArray(h == null ? void 0 : h.days) ? h.days : [])
            .slice(Math.max(0, x - 4), x)
            .map((Ne) => {
              const Je = vc((Ne == null ? void 0 : Ne.tasks) || []),
                St =
                  Je.find(
                    (Ke) => (Ke == null ? void 0 : Ke.assignedTo) === "ai",
                  ) || null,
                Be =
                  Je.find(
                    (Ke) => (Ke == null ? void 0 : Ke.assignedTo) === "user",
                  ) || null;
              return {
                dayIndex: Ne == null ? void 0 : Ne.dayIndex,
                dayStatus: (Ne == null ? void 0 : Ne.status) || "pending",
                aiTaskStatus: (St == null ? void 0 : St.status) || "pending",
                userTaskStatus: (Be == null ? void 0 : Be.status) || "pending",
              };
            });
        if (typeof $t == "function")
          try {
            const Ne = await $t({
                feature: "season_journey",
                action: "custom_task_dispatch",
                payload: {
                  phase: Ft,
                  dayIndex: x,
                  totalDays: Q,
                  userToAiTaskText: ot,
                  userTaskText: ot,
                  seasonTheme: (u == null ? void 0 : u.customThemeText) || "",
                  aiToUserTheme: ht || null,
                  yesterdayTaskResult: Qt
                    ? {
                        dayIndex: Qt == null ? void 0 : Qt.dayIndex,
                        dayStatus:
                          (Qt == null ? void 0 : Qt.status) || "pending",
                      }
                    : null,
                  recentTaskHistory: cs,
                  chatContextToday: Lt,
                  chatContextYesterday: js,
                  relationshipProfile: {
                    partnerName:
                      (s == null ? void 0 : s.nickname) ||
                      (s == null ? void 0 : s.name) ||
                      (s == null ? void 0 : s.displayName) ||
                      "TA",
                    customTheme: (u == null ? void 0 : u.customThemeText) || "",
                  },
                },
              }),
              Je =
                (Ne == null ? void 0 : Ne.result) ||
                (Ne == null ? void 0 : Ne.data) ||
                Ne ||
                {},
              St = Je == null ? void 0 : Je.aiToUserTheme;
            (St &&
              typeof St == "object" &&
              (At = {
                themeId: String(
                  (St == null ? void 0 : St.themeId) ||
                    (At == null ? void 0 : At.themeId) ||
                    `custom_theme_${Date.now()}`,
                ),
                themeName: String(
                  (St == null ? void 0 : St.themeName) ||
                    (At == null ? void 0 : At.themeName) ||
                    "回执试炼",
                ),
                themeDesc: String(
                  (St == null ? void 0 : St.themeDesc) ||
                    (At == null ? void 0 : At.themeDesc) ||
                    "",
                ),
              }),
              String((Je == null ? void 0 : Je.themeDriftHint) || "").trim() &&
                (Jt = String(Je.themeDriftHint).trim()));
            const Be = String(
              (Je == null ? void 0 : Je.aiToUserTaskToday) ||
                (Je == null ? void 0 : Je.aiToUserTask) ||
                (Je == null ? void 0 : Je.taTaskForUser) ||
                "",
            ).trim();
            Be && (es = Be);
            const Ke = Array.isArray(Je == null ? void 0 : Je.aiLines)
              ? Je.aiLines
              : Array.isArray(Je == null ? void 0 : Je.taReplyLines)
                ? Je.taReplyLines
                : [];
            Ke.length > 0 &&
              (Vt = Ke.map((Nt) => String(Nt || "").trim()).filter(Boolean));
          } catch {}
        (ft((Ne) => {
          const Je = vc([
            {
              taskId: `custom_u2ta_d${Ne.dayIndex}_${Date.now()}`,
              title: "你给TA的今日指令",
              description: ot,
              type: "manual_check",
              judgeMode: "manual_ai",
              status: "pending",
              assignedTo: "ai",
              ownerType: "ai",
            },
            {
              taskId: `custom_ta2u_d${Ne.dayIndex}_${Date.now()}`,
              title: `TA给你的${(At == null ? void 0 : At.themeName) || "回执试炼"}`,
              description: es,
              type: "manual_check",
              judgeMode: "manual_ai",
              status: "pending",
              assignedTo: "user",
              ownerType: "user",
            },
          ]);
          return {
            ...Ne,
            status: Qb(Je, "in_progress"),
            tasks: Je,
            aiToUserTheme: At,
            themeAdjustment: Jt || "",
          };
        }),
          Y(At),
          Ce({
            text: `双向试炼契约：Day${x}`,
            type: "season_journey_custom_dispatch",
            extra: {
              seasonJourneyCard: {
                cardType: "custom_dispatch",
                status: "ready",
                payload: {
                  phase: Ft,
                  dayIndex: x,
                  userTaskText: ot,
                  userToAiTaskText: ot,
                  aiTaskText: es,
                  aiToUserTaskToday: es,
                  aiToUserTheme: At,
                  themeDriftHint: Jt || null,
                },
              },
            },
          }),
          typeof (o == null ? void 0 : o.emitRoleDialogue) == "function" &&
            Vt.length > 0 &&
            o.emitRoleDialogue(Vt),
          setTimeout(() => X("chat_ready"), 900));
      } finally {
        ke(!1);
      }
    },
    Pt = async (ot) => {
      var Ft, es, At;
      if (!ot || Te || ut) return;
      const st = window.prompt(
        u.themeType === "custom"
          ? "请输入复议理由（将发起轻量复议）"
          : "请输入复议理由",
      );
      if (!st || !st.trim()) return;
      (ke(!0), ue(""));
      const $t = Ce({
        text: `${u.themeType === "custom" ? "轻量复议" : "赛季复议"}：Day${x} ${ot.title}`,
        type: "season_journey_review_request",
        extra: {
          seasonReviewStatus: "pending",
          seasonReviewTaskId: ot.taskId,
          seasonReviewDayIndex: x,
          seasonReviewReason: st.trim(),
          seasonJourneyCard: {
            cardType: "review_request",
            status: "pending",
            payload: {
              dayIndex: x,
              taskId: ot.taskId,
              reason: st.trim(),
              reviewMode:
                u.themeType === "custom"
                  ? "custom_light_review"
                  : "standard_review",
              target: (ot == null ? void 0 : ot.assignedTo) || null,
            },
          },
        },
      });
      try {
        const Jt = await Mk({
            contact: s,
            getLatestMessages: o == null ? void 0 : o.getLatestMessages,
            getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
            callApi: o == null ? void 0 : o.callApi,
            taskContext: {
              dayIndex: x,
              taskId: ot.taskId,
              title: ot.title,
              status: ot.status,
            },
            objectionReason: st.trim(),
          }),
          Vt =
            ((Ft = Jt == null ? void 0 : Jt.result) == null
              ? void 0
              : Ft.finalTaskStatus) === "done"
              ? "done"
              : "failed";
        (ft((Lt) => ({
          ...Lt,
          tasks: (Lt.tasks || []).map((Qt) =>
            Qt.taskId === ot.taskId ? { ...Qt, status: Vt } : Qt,
          ),
        })),
          w((Lt) => {
            var Qt;
            return [
              {
                taskId: ot.taskId,
                dayIndex: x,
                reason: st.trim(),
                decision:
                  ((Qt = Jt == null ? void 0 : Jt.result) == null
                    ? void 0
                    : Qt.reviewDecision) || "uphold",
                finalTaskStatus: Vt,
                at: Date.now(),
              },
              ...Lt,
            ];
          }));
        const qt = o == null ? void 0 : o.updateMessage;
        $t != null &&
          $t.chatId &&
          $t != null &&
          $t.id &&
          typeof qt == "function" &&
          qt($t.chatId, $t.id, {
            seasonReviewStatus: "resolved",
            seasonReviewDecision:
              ((es = Jt == null ? void 0 : Jt.result) == null
                ? void 0
                : es.reviewDecision) || "uphold",
            seasonReviewFinalTaskStatus: Vt,
            seasonJourneyCard: {
              cardType: "review_request",
              status: "resolved",
              payload: {
                decision:
                  ((At = Jt == null ? void 0 : Jt.result) == null
                    ? void 0
                    : At.reviewDecision) || "uphold",
                finalTaskStatus: Vt,
                reviewMode:
                  u.themeType === "custom"
                    ? "custom_light_review"
                    : "standard_review",
              },
            },
          });
      } catch {
        const Jt = o == null ? void 0 : o.updateMessage;
        ($t != null &&
          $t.chatId &&
          $t != null &&
          $t.id &&
          typeof Jt == "function" &&
          Jt($t.chatId, $t.id, {
            seasonReviewStatus: "failed",
            seasonJourneyCard: { cardType: "review_request", status: "failed" },
          }),
          ue("复议失败，请稍后重试。"));
      } finally {
        ke(!1);
      }
    },
    Wt = async () => {
      if (!(Te || v >= 3 || !Xe || ut)) {
        (ke(!0), ue(""));
        try {
          if (u.themeType === "daily")
            ft((ot) => ({
              ...ot,
              status: "pending",
              tasks: i2({
                dayIndex: ot.dayIndex,
                difficulty: u == null ? void 0 : u.difficulty,
              }),
            }));
          else {
            const ot = await Ck({
                contact: s,
                getLatestMessages: o == null ? void 0 : o.getLatestMessages,
                getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
                callApi: o == null ? void 0 : o.callApi,
                finalConfig: { ...u, totalDays: Q },
              }),
              st = ot == null ? void 0 : ot.plan,
              $t = Array.isArray(st == null ? void 0 : st.days) ? st.days : [],
              Ft =
                $t.find(
                  (es) =>
                    Number(es == null ? void 0 : es.dayIndex) === Number(x),
                ) || $t[x - 1];
            if (!Ft || !Array.isArray(Ft.tasks) || Ft.tasks.length === 0)
              throw new Error("regen_empty_day");
            ft((es) => ({
              ...es,
              status: "pending",
              tasks: vc(Ft.tasks).map((At) => ({ ...At, status: "pending" })),
            }));
          }
          b((ot) => ot + 1);
        } catch {
          ue("重生成失败，请稍后再试。");
        } finally {
          ke(!1);
        }
      }
    },
    ct = async (ot) => {
      if (!(!ot || Te)) {
        (ke(!0), ue(""));
        try {
          const st = String(ot.id || "").toLowerCase(),
            $t = "S04",
            Ft = await sJ({
              contact: s,
              getLatestMessages: o == null ? void 0 : o.getLatestMessages,
              getRoleBoundUser: o == null ? void 0 : o.getRoleBoundUser,
              callApi: o == null ? void 0 : o.callApi,
              milestoneId: st,
              seasonNo: $t,
            }),
            es =
              Ft != null && Ft.reward && typeof Ft.reward == "object"
                ? Ft.reward
                : {},
            At = gJ(st, $t),
            Jt = {
              id: String(es.rewardId || `fragment_${st}_${Date.now()}`),
              itemType: "fragment",
              source: "milestone",
              milestoneId: st,
              title: String(es.title || At.title),
              description: String(es.description || At.description),
              rarity: ["normal", "rare", "epic"].includes(es.rarity)
                ? es.rarity
                : "normal",
              seasonNo: String(es.seasonNo || $t),
              claimedAt: Number(es.claimedAt) || Date.now(),
            };
          D((Vt) => {
            const qt = new Set(
              Array.isArray(Vt == null ? void 0 : Vt.claimedMilestones)
                ? Vt.claimedMilestones
                : [],
            );
            qt.add(st);
            const Lt = Array.isArray(Vt == null ? void 0 : Vt.inventory)
                ? Vt.inventory
                : [],
              Qt = [
                Jt,
                ...Lt.filter(
                  (js) => String(js == null ? void 0 : js.id) !== Jt.id,
                ),
              ].slice(0, 80);
            return {
              claimedMilestones: Array.from(qt),
              inventory: Qt,
              lastClaimStory: {
                milestoneId: st,
                title: Jt.title,
                content: String(At.story),
                at: Date.now(),
              },
            };
          });
        } catch {