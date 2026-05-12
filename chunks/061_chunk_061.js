    m = s,
    h = String(a || r || "用户").trim(),
    g = String(r || a || "").trim(),
    x = `你是固定摄像头式场记：只输出**中文连续记述**，像监控与值班日志合并稿，信息要**写够、写细**。
硬性要求：
- **禁止** markdown、标题符号、编号列表、开场套话（如「总而言之」「印象深刻」）、**禁止**空泛抒情与口号式收尾。
- 总长度约 **280～720 字**，分 **2～4 个自然段**，段与段之间只用一个换行；每段内部以逗号、顿号衔接，**尽量覆盖**下方各块里出现的事实要点（弹幕梗概、谁出场、礼物档位与合计、若有打赏顺位则点名前几名、观看与点赞量级）。
- 第三人称；主播/用户称真名「${h}」；可夹一句展示名「${g}」避免混淆。
- 居民用下方对照表的 **真名**；无真名则写「网名xxx」。
- **只写**各摘要块里出现的内容，禁止编造；某块为「无」则不要杜撰该块。`,
    y = `【标题】${i || "未命名直播"}

【真名对照】
${p || "（无）"}

【本场热度与数据】
${f || "无"}

【礼物合计与折算】
${c || "无"}

【本场各档礼物明细（若有）】
${d || "无"}

【本场打赏贡献顺位（若有，金额系折算）】
${u || "无"}

【弹幕与互动摘要】
${o || "无"}

直接输出记述正文，不要任何套话与标题。`,
    v = await yr(
      t,
      {
        messages: [
          { role: "system", content: x },
          { role: "user", content: y },
        ],
        temperature: 0.42,
        max_tokens: 2200,
      },
      { addApiLog: m, logContactName: "" },
    );
  return String(qu(v) || "")
    .replace(/^["「]|["」]$/g, "")
    .trim();
}
async function eK(t, s, n) {
  const { streamerName: a, liveTitle: r, userPersonaBlock: i } = n,
    o = s,
    c = `你是啾音直播平台「日榜」数据编排器。只输出**合法 JSON**，不要 markdown。
生成：
1) 榜单雅称 board_display_name（4～10 字，含「榜」或「纪」等字，信达雅，如「今日星晖礼赞榜」「日曜流光纪」）。
2) 与主播风格对立或互补的**虚拟对手主播** opponent_name（2～8 字网名，非真人名）。
3) opponent_yuan_seed：对手当前在今日榜上的折算打赏额（人民币，整数 180～8800 之间，与主播竞争感）。
4) crowd_anchors：2～3 位**其它虚拟主播**（网名 + yuan，整数 30～2200），模拟同屏日榜上的路人主播。
语气须克制、像真实平台榜单；禁止涉黄涉政。`,
    u = `【此刻现实世界时间】${c2()}
【主播昵称】${a}
【直播标题】${r || "未命名直播"}
【主播人设摘要（互联网侧）】
${i || "（无）"}

请输出 JSON：
{
  "board_display_name": "今日星晖礼赞榜",
  "opponent_name": "网名",
  "opponent_yuan_seed": 1200,
  "crowd_anchors": [
    { "name": "网名", "yuan": 400 }
  ]
}`,
    f = await yr(
      t,
      {
        messages: [
          { role: "system", content: c },
          { role: "user", content: u },
        ],
        temperature: 0.82,
        max_tokens: 900,
      },
      { addApiLog: o, logContactName: "" },
    );
  try {
    return Ip(qu(f));
  } catch {
    return {
      board_display_name: "今日星晖礼赞榜",
      opponent_name: "夜航对手",
      opponent_yuan_seed: 2200,
      crowd_anchors: [
        { name: "雾岛听风", yuan: 680 },
        { name: "半糖电台", yuan: 420 },
      ],
    };
  }
}
async function tK(t, s, n) {
  const { streamerName: a, liveTitle: r, topGifterName: i, userTipYuan: o } = n,
    c = s,
    d = String(r || "").trim() || "本场直播",
    u = `你是啾音多直播间公屏编排器。只输出**合法 JSON**，不要 markdown。
当前场景：主播刚冲上今日打赏日榜第一位，一批观众**已经从别的直播间跳进本直播间**，此刻正在**本间公屏**里发言。
硬性要求：
- items 全部为 type=virtual；网名为路人风格；text 为短句口语。
- 每条弹幕必须让读者明确：说话人**已经人在本直播间**（可用「刚进这间」「摸进这间了」「换台到这儿了」等），**禁止**整段还停留在「我要去隔壁看看」「还没过去」等未到场语气。
- 可自然提到被榜一/标题吸引，但落点必须是**已在本间互动**。
8～14 条；禁止油腻与中二口号；禁止真实明星名。`,
    f = `【本直播间主播昵称】${a}
【本直播间标题】${d}
【榜一贡献最多的送礼观众昵称】${i || "某位观众"}
【该主播当前折算打赏额约】¥${Number(o || 0).toFixed(2)}

请输出 JSON：
{
  "items": [
    { "type": "virtual", "name": "网名", "level": 12, "text": "弹幕", "is_entry": false }
  ]
}`,
    p = await yr(
      t,
      {
        messages: [
          { role: "system", content: u },
          { role: "user", content: f },
        ],
        temperature: 0.9,
        max_tokens: 1800,
      },
      { addApiLog: c, logContactName: "" },
    );
  try {
    return Ip(qu(p));
  } catch {
    return {
      items: [
        {
          type: "virtual",
          name: "路过A",
          level: 10,
          text: "从隔壁摸进这间了，榜一真人在这儿啊",
          is_entry: !1,
        },
        {
          type: "virtual",
          name: "吃瓜B",
          level: 8,
          text: "换台到这儿了，气氛比刚才那间热闹",
          is_entry: !1,
        },
      ],
    };
  }
}
const _r = [
  { id: "g1", name: "纪念邮票", tag: "邮戳印记", price: 35, units: 5 },
  { id: "g2", name: "线装书笺", tag: "纸页微光", price: 128, units: 5 },
  { id: "g3", name: "典藏精装书", tag: "扉页叙事", price: 388, units: 4 },
  { id: "g4", name: "单曲封面", tag: "编号首发", price: 888, units: 3 },
  { id: "g5", name: "版式海报", tag: "留白叙事", price: 2288, units: 2 },
  { id: "g6", name: "黑金唱片", tag: "Noir Luxe", price: 5e3, units: 1 },
];
_r.map((t) => t.id);
function ay(t) {
  return _r.find((s) => s.id === t) || _r[0];
}
const NC = ["g1", "g2", "g3", "g4", "g5", "g6"];
function sK(t) {
  const s = String(t || "");
  let n = 2;
  return (
    /富|豪|千金|老板|慷慨|大方|阔|赞助|砸钱|总裁|继承/i.test(s) && (n += 3),
    /穷|节俭|省|学生|打工|抠|月光/i.test(s) && (n -= 2),
    /浪漫|仪式|纪念|婚礼|生日|告白/i.test(s) && (n += 1),
    /高冷|冷淡|社恐|旁观/i.test(s) && (n -= 1),
    Math.max(0, Math.min(5, n))
  );
}
function nK(t) {
  return NC[Math.min(5, Math.max(0, t))];
}
function aK(t) {
  const s = [],
    n = ["夜航船", "碳酸泡", "星屑收集", "晚风邮寄", "半糖去冰"],
    a = 1 + Math.floor(Math.random() * 2);
  for (let c = 0; c < a; c++) {
    const d = Math.random() < 0.65 ? "g1" : "g2",
      u = d === "g1" ? 1 + Math.floor(Math.random() * 2) : 1;
    s.push({
      kind: "virtual",
      name: n[(c + Math.floor(Math.random() * 3)) % n.length],
      gift_id: d,
      count: u,
      gift_line: ["略表心意，收下吧", "给主播加个鸡腿～", "悄悄支持一下"][
        c % 3
      ],
    });
  }
  const r = Array.isArray(t) ? t : [],
    i = Math.min(
      2,
      Math.max(0, r.length === 0 ? 0 : 1 + Math.floor(Math.random() * 2)),
    ),
    o = [...r].sort(() => Math.random() - 0.5);
  for (let c = 0; c < i; c++) {
    const d = o[c];
    if (!(d != null && d.resident_id)) continue;
    const u = sK(d.resident_character_bio || d.bio),
      f = nK(u),
      p = _r.find((g) => g.id === f),
      m = (p == null ? void 0 : p.units) || 1,
      h = u >= 4 ? 1 : u <= 1 ? Math.min(2, m) : 1;
    s.push({
      kind: "resident",
      resident_id: String(d.resident_id),
      name: String(d.name || "").trim() || "居民",
      gift_id: f,
      count: Math.min(h, m),
      gift_line: ["这份给你留着纪念", "别客气，我的一点心意", "刚好想送你这个"][
        c % 3
      ],
    });
  }
  return s;
}
const Rf = "ECHO",
  Pf = "星海领航者",
  $x = "在那刻，与她初见。";
function Cm(t) {
  if (!t || typeof t != "object")
    return { g4_echo: Rf, g4_song_title: Pf, g4_quote: $x };
  const s = String(t.g4_echo ?? t.echo ?? "").trim(),
    n = String(t.g4_song_title ?? t.song_title ?? "").trim(),
    a = String(t.g4_quote ?? t.quote ?? "").trim();
  if (s && n && a) return { g4_echo: s, g4_song_title: n, g4_quote: a };
  const r = String(t.gift_line ?? "").trim(),
    i = r
      .split(/[|｜]/)
      .map((o) => o.trim())
      .filter(Boolean);
  return i.length >= 3
    ? { g4_echo: i[0] || Rf, g4_song_title: i[1] || Pf, g4_quote: i[2] || $x }
    : i.length === 2
      ? { g4_echo: i[0] || Rf, g4_song_title: i[1] || Pf, g4_quote: $x }
      : i.length === 1
        ? { g4_echo: Rf, g4_song_title: Pf, g4_quote: i[0] }
        : { g4_echo: s || Rf, g4_song_title: n || Pf, g4_quote: a || r || $x };
}
const Fx = "时间的褶皱",
  ry = `万物皆有裂痕，
那是光照进来的地方。
在此刻，将记忆封缄。`;
function Mm(t) {
  if (!t || typeof t != "object") return { g3_title: Fx, g3_poem: ry };
  const s = String(t.g3_title ?? t.folio_title ?? "").trim(),
    n = String(t.g3_poem ?? t.poem ?? "").trim();
  if (s && n) return { g3_title: s, g3_poem: n };
  const a = String(t.gift_line ?? "").trim(),
    r = a
      .split(/[|｜]/)
      .map((i) => i.trim())
      .filter(Boolean);
  return r.length >= 2
    ? {
        g3_title: r[0] || Fx,
        g3_poem:
          r.slice(1).join(`
`) || ry,
      }
    : r.length === 1
      ? { g3_title: Fx, g3_poem: r[0] }
      : { g3_title: s || Fx, g3_poem: n || a || ry };
}
function rK(t) {
  if (!Array.isArray(t)) return [];
  const s = new Set(NC);
  return t
    .map((n) => {
      if (!n || typeof n != "object") return null;
      const a = s.has(n == null ? void 0 : n.gift_id) ? n.gift_id : "g1",
        r = Math.min(
          9,
          Math.max(1, parseInt(n == null ? void 0 : n.count, 10) || 1),
        ),
        i = String((n == null ? void 0 : n.kind) ?? "").toLowerCase();
      if (
        i === "resident" &&
        n.resident_id != null &&
        String(n.resident_id).trim() !== ""
      ) {
        const d = {
          kind: "resident",
          resident_id: String(n.resident_id),
          name: String(n.name || "").trim() || "居民",
          gift_id: a,
          count: r,
          gift_line: String((n == null ? void 0 : n.gift_line) ?? "").trim(),
        };
        return a === "g4"
          ? { ...d, ...Cm(n) }
          : a === "g3"
            ? { ...d, ...Mm(n) }
            : d;
      }
      if (i === "user") {
        const d = {
          kind: "user",
          name: String((n == null ? void 0 : n.name) || "我").trim() || "我",
          gift_id: a,
          count: r,
          gift_line: String((n == null ? void 0 : n.gift_line) ?? "").trim(),
        };
        return a === "g4"
          ? { ...d, ...Cm(n) }
          : a === "g3"
            ? { ...d, ...Mm(n) }
            : d;
      }
      const c = {
        kind: "virtual",
        name: String((n == null ? void 0 : n.name) || "观众").trim() || "观众",
        gift_id: a,
        count: r,
        gift_line: String((n == null ? void 0 : n.gift_line) ?? "").trim(),
      };
      return a === "g4"
        ? { ...c, ...Cm(n) }
        : a === "g3"
          ? { ...c, ...Mm(n) }
          : c;
    })
    .filter(Boolean);
}
function iK(t) {
  return (t == null ? void 0 : t.kind) === "resident"
    ? "resident"
    : (t == null ? void 0 : t.kind) === "user"
      ? "user"
      : "virtual";
}
function d2(t, s) {
  const n = String(s || "").trim(),
    a = new Map();
  for (const r of t || []) {
    if (!r || typeof r != "object") continue;
    let i = iK(r),
      o =
        i === "resident" &&
        r.resident_id != null &&
        String(r.resident_id).trim() !== ""
          ? `r:${String(r.resident_id)}`
          : i === "user"
            ? "u:viewer"
            : `v:${String(r.name || "").trim() || "观众"}`;
    n &&
      i === "virtual" &&
      String(r.name || "").trim() === n &&
      ((i = "user"), (o = "u:viewer"));
    const c = a.get(o),
      d = Math.max(0, parseInt(r.count, 10) || 0) || 1;
    c
      ? a.set(o, {
          ...c,
          count: (c.count || 0) + d,
          at: Math.max(c.at || 0, r.at || 0),
        })
      : a.set(o, {
          ...r,
          kind: i,
          resident_id:
            i === "resident" && r.resident_id != null
              ? String(r.resident_id)
              : void 0,
          id: r.id || `gl_m_${o}_${Date.now()}`,
          count: d,
          at: r.at || 0,
        });
  }
  return Array.from(a.values());
}
function Zk(t) {
  return t.kind === "resident" &&
    t.resident_id != null &&
    String(t.resident_id).trim() !== ""
    ? `r:${String(t.resident_id)}`
    : t.kind === "user"
      ? "u:viewer"
      : `v:${String(t.name || "").trim() || "观众"}`;
}
function oK(t, s, n = _r) {
  const a = new Set(n.map((c) => c.id)),
    r = { ...t };
  n.forEach((c) => {
    Array.isArray(r[c.id]) || (r[c.id] = []);
  });
  const i = Date.now();
  let o = 0;
  for (const c of s || []) {
    const d = c.gift_id;
    if (!a.has(d)) continue;
    const u = Math.min(9, Math.max(1, parseInt(c.count, 10) || 1)),
      f =
        c.kind === "resident"
          ? "resident"
          : c.kind === "user"
            ? "user"
            : "virtual",
      p = i + o++,
      m = {
        id: `gl_${p}_${Math.random().toString(36).slice(2, 10)}`,
        name:
          String(
            c.name ||
              (f === "resident" ? "居民" : f === "user" ? "我" : "观众"),
          ).trim() ||
          (f === "resident" ? "居民" : f === "user" ? "我" : "观众"),
        kind: f,
        resident_id:
          f === "resident" && c.resident_id != null
            ? String(c.resident_id)
            : void 0,
        count: u,
        at: p,
      },
      h = [...(r[d] || [])],
      g = Zk(m),
      x = h.findIndex((y) => Zk(y) === g);
    (x >= 0
      ? (h[x] = {
          ...h[x],
          count: (h[x].count || 0) + u,
          at: Math.max(h[x].at || 0, p),
        })
      : h.push(m),
      (r[d] = h.slice(-200)));
  }
  return r;
}
function Xk(t) {
  return t === "resident" ? 0 : t === "user" ? 1 : 2;
}
function kC(t, s) {
  const n = d2(t, s);
  return n.length
    ? [...n].sort((r, i) => {
        const o = (i.count || 0) - (r.count || 0);
        if (o !== 0) return o;
        const c = Xk(r.kind) - Xk(i.kind);
        return c !== 0 ? c : (i.at || 0) - (r.at || 0);
      })[0]
    : null;
}
function lK(t, s, n = _r) {
  const a = { ...t },
    r = new Set(n.map((i) => i.id));
  for (const i of s) {
    const o = i.gift_id;
    if (!r.has(o)) continue;
    const c = Math.min(i.count || 1, 9);
    a[o] = (a[o] || 0) + c;
  }
  return a;
}
const SC = "douyin_live_wip_v1",
  e4 = "douyin_live_sessions_log_v1",
  _C = "douyin_live_records_v1",
  cK = "douyin_live_gift_hall_v1";
function AC(t = "user") {
  return t == null || t === "" || t === "user"
    ? cK
    : `douyin_live_gh_${String(t).replace(/[^a-zA-Z0-9_-]/g, "_")}_v1`;
}
function CC(t = new Date()) {
  const s = new Date(t),
    n = s.getDay(),
    a = n === 0 ? -6 : 1 - n,
    r = new Date(s);
  return (
    r.setDate(s.getDate() + a),
    r.setHours(0, 0, 0, 0),
    `${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`
  );
}
function zx(t) {
  return Object.fromEntries(t.map((s) => [s.id, 0]));
}
function Rx(t) {
  return Object.fromEntries(t.map((s) => [s.id, []]));
}
async function dK(t, s = "user") {
  const n = CC(),
    a = AC(s);
  try {
    const r = await be.get(a, null);
    if (!r || typeof r != "object") return { counts: zx(t), ledger: Rx(t) };
    if (r.weekId !== n) {
      const c = zx(t),
        d = Rx(t);
      return (
        await be.set(a, {
          weekId: n,
          counts: c,
          ledger: d,
          updatedAt: Date.now(),
        }),
        { counts: c, ledger: d }
      );
    }
    const i = { ...zx(t) };
    r.counts &&
      typeof r.counts == "object" &&
      t.forEach((c) => {
        const d = parseInt(r.counts[c.id], 10);
        Number.isFinite(d) && d >= 0 && (i[c.id] = d);
      });
    const o = Rx(t);
    return (
      r.ledger &&
        typeof r.ledger == "object" &&
        t.forEach((c) => {
          const d = r.ledger[c.id];
          Array.isArray(d) && (o[c.id] = d2(d.filter(Boolean)).slice(-200));
        }),
      { counts: i, ledger: o }
    );
  } catch {
    return { counts: zx(t), ledger: Rx(t) };
  }
}
async function uK(t, s, n, a = "user") {
  const r = CC(),
    i = AC(a);
  try {
    const o = {};
    n.forEach((d) => {
      o[d.id] = Math.max(0, parseInt(t[d.id], 10) || 0);
    });
    const c = {};
    (n.forEach((d) => {
      c[d.id] = Array.isArray(s[d.id]) ? s[d.id].slice(-200) : [];
    }),
      await be.set(i, {
        weekId: r,
        counts: o,
        ledger: c,
        updatedAt: Date.now(),
      }));
  } catch {}
}
async function fK() {
  try {
    const t = await be.get(SC, null);
    return t && typeof t == "object" ? t : null;
  } catch {
    return null;
  }
}
async function mK(t) {
  try {
    await be.set(SC, { ...t, updatedAt: Date.now() });
  } catch {}
}
async function pK(t) {
  try {
    const s = (await be.get(e4, [])) || [],
      n = Array.isArray(s)
        ? [...s, { ...t, at: Date.now() }]
        : [{ ...t, at: Date.now() }];
    await be.set(e4, n.slice(-80));
  } catch {}
}
async function u2() {
  try {
    const t = await be.get(_C, []);
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}
async function xK(t) {
  try {
    const n = (await u2()).filter((r) => r && r.id !== t.id),
      a = [{ ...t, savedAt: t.savedAt ?? Date.now() }, ...n].slice(0, 100);
    await be.set(_C, a);
  } catch {}
}
const MC = "douyin_living_feed_snapshot_v1";
async function hK() {
  try {
    const t = await be.get(MC, null);
    if (!t || typeof t != "object") return null;
    const s = Array.isArray(t.cards) ? t.cards : [];
    return {
      feedEpoch: Number(t.feedEpoch) || 0,
      cards: s,
      updatedAt: Number(t.updatedAt) || 0,
    };
  } catch {
    return null;
  }
}
async function t4(t) {
  try {
    const { feedEpoch: s, cards: n } = t;
    await be.set(MC, {
      feedEpoch: Number(s) || 0,
      cards: Array.isArray(n) ? n : [],
      updatedAt: Date.now(),
    });
  } catch {}
}
const gK = "chat_app_douyin_memories";
function _1(t) {
  const s = String(t || "");
  let n = 2166136261;
  for (let a = 0; a < s.length; a++)
    n = Math.imul(n ^ s.charCodeAt(a), 16777619);
  return ((n >>> 0) % 75) + 1;
}
function s4(t, s) {
  if (!t) return "";
  if (t.sourceType === "contact" && t.contactId && Array.isArray(s)) {
    const n = s.find((a) => a && String(a.id) === String(t.contactId));
    if (n) {
      const a = String(n.name || n.realName || "").trim();
      if (a) return a;
    }
  }
  return String(t.name || "").trim();
}
function Tm(t, s) {
  if (!t) return "";
  const n = String(t.bio ?? "").trim();
  if (n) return n;
  if (t.sourceType === "contact" && t.contactId && Array.isArray(s)) {
    const a = s.find((i) => i && String(i.id) === String(t.contactId)),
      r = a && String(a.setting ?? "").trim();
    if (r) return r;
  }
  return "";
}
async function A1(t) {
  if (
    !(t != null && t.linkMemory) ||
    !Array.isArray(t.linkedChatIds) ||
    t.linkedChatIds.length === 0
  )
    return "";
  try {
    const s = (await be.get(gK)) || {},
      n = t.linkedChatIds.flatMap((a) => s[a] || []);
    return (
      n.sort((a, r) => (r.at || 0) - (a.at || 0)),
      n.slice(0, 8).map((a) => `- ${a.npcName || t.name}: ${a.summary}`).join(`
`)
    );
  } catch {
    return "";
  }
}
function C1(t, s, n = 5) {
  var i;
  if (
    !(t != null && t.linkMemory) ||
    !Array.isArray(t.linkedChatIds) ||
    t.linkedChatIds.length === 0
  )
    return "";
  const a = Math.max(2, Math.min(20, (Number(n) || 5) * 2)),
    r = [];
  for (const o of t.linkedChatIds) {
    const c = (s || []).find((f) => f && String(f.id) === String(o));
    if (!((i = c == null ? void 0 : c.messages) != null && i.length)) continue;
    const u = c.messages
      .slice(-a)
      .map((f) => {
        const p = String(f.text || f.content || "")
          .replace(/\s+/g, " ")
          .trim();
        return `${f.sender === "me" ? "用户" : "对方"}: ${p}`.slice(0, 220);
      })
      .filter(Boolean).join(`
`);
    u &&
      r.push(`【联通窗口 ${String(o).slice(0, 12)} · 最近约${n}回合】
${u}`);
  }
  return r
    .join(
      `

`,
    )
    .slice(0, 4e3);
}
function TC(t, s, n) {
  const a = Array.isArray(t) ? t : [],
    r = new Set((n || []).map(String));
  return s === "exclude"
    ? a.filter((i) => (i == null ? void 0 : i.id) && !r.has(String(i.id)))
    : a.filter((i) => (i == null ? void 0 : i.id));
}
const Px = "#c5a059";
function bK(t) {
  const s = String(t || "").trim();
  if (!s) return { line1: "直播", line2: "" };
  if (s.length <= 10) return { line1: s, line2: "" };
  const n = Math.ceil(s.length / 2);
  return { line1: s.slice(0, n), line2: s.slice(n) };
}
function yK(t) {
  if (t != null && t.location) return String(t.location).slice(0, 28);
  const s = t == null ? void 0 : t.tags;
  return Array.isArray(s) && s.length
    ? String(s[0]).slice(0, 28)
    : typeof s == "string" && s.trim()
      ? s.split(/[,，]/)[0].trim().slice(0, 28)
      : "Live Session";
}
function vK(t) {
  let s = 0;
  const n = String(t || "");
  for (let r = 0; r < n.length; r++) s = (s * 31 + n.charCodeAt(r)) >>> 0;
  const a = 500 + (s % 2600);
  return a >= 1e3 ? `${(a / 1e3).toFixed(1)}k 观看中` : `${a} 观看中`;
}
function n4(t, s, n) {
  const a = s == null ? void 0 : s.id,
    r = a && typeof t == "function" ? t(a) : null;
  return r || (s != null && s.cover ? s.cover : n || "");
}
function wK(t) {
  return t
    ? [
        (t == null ? void 0 : t.name) &&
          `用户真实称呼/账号名：${String(t.name).trim()}`,
        (t == null ? void 0 : t.bio) && `用户本人简介：${String(t.bio).trim()}`,
        (t == null ? void 0 : t.signature) &&
          `签名：${String(t.signature).trim()}`,
      ]
        .filter(Boolean)
        .join(
          `
`,
        )
        .slice(0, 900)
    : "";
}
function jK(t) {
  const s = TC(t, "all", []);
  return s.length ? [...s].sort(() => Math.random() - 0.5).slice(0, 2) : [];
}
async function a4(t, s, n) {
  const a = Tm(t, s),
    r = await A1(t),
    o = t.linkMemory === !0 ? C1(t, n, 5) : "",
    c = t.knowsUserIdentity === !0;
  return {
    resident_id: String(t.id),
    name: String(t.name || "").trim(),
    fan_level: _1(t.id),
    knows_user_identity: c,
    resident_character_bio: a.slice(0, 800),
    douyin_memory_inject: r,
    linked_chat_snippets_last5_rounds: o,
  };
}
function NK(t, s) {
  return {
    feedEpoch: s,
    npcId: String(t.npc.id),
    name: t.name,
    avatar: t.avatar,
    liveTitle: t.liveTitle,
    signature: String(t.npc.signature || "").trim(),
    presetOpening: t.presetOpening,
  };
}
function kK(t, s) {
  const n = String(t.npcId),
    r = (s || []).find((i) => i && String(i.id) === n) || {
      id: n,
      name: t.name,
      avatar: t.avatar,
      signature: t.signature || "",
    };
  return {
    npc: r,
    name: String(t.name || r.name || "").trim() || "居民",
    avatar: t.avatar || r.avatar,
    liveTitle: String(t.liveTitle || ""),
    presetOpening: t.presetOpening ?? null,
  };
}
const SK = ({
    feedEpoch: t = 0,
    lastFetchedEpochRef: s,
    npcs: n,
    contacts: a,
    currentUser: r,
    onEnterNpcLive: i,
  }) => {
    const { apiConfig: o, addApiLog: c, chats: d } = vn(),
      { getAuthorBackground: u, getAuthorAvatar: f } = ei(),
      [p, m] = l.useState(!1),
      [h, g] = l.useState(""),
      [x, y] = l.useState([]),
      v = l.useRef(!1);
    (l.useEffect(() => {
      if (v.current) return;
      let w = !1;
      return (
        (async () => {
          var A;
          const _ = await hK();
          w ||
            ((v.current = !0),
            (A = _ == null ? void 0 : _.cards) != null &&
              A.length &&
              y(_.cards.map((k) => kK(k, n))));
        })(),
        () => {
          w = !0;
        }
      );
    }, []),
      l.useEffect(() => {
        y((w) =>
          w.length
            ? w.map((_) => {
                const A = (n || []).find(
                  (k) => k && String(k.id) === String(_.npc.id),
                );
                return A
                  ? {
                      ..._,
                      npc: A,
                      name: String(A.name || _.name).trim() || _.name,
                      avatar: A.avatar || _.avatar,
                    }
                  : _;
              })
            : w,
        );
      }, [n]));
    const b = l.useCallback(
      async (w) => {
        g("");
        const _ = jK(n);
        if (!_.length) {
          (y([]),
            await t4({ feedEpoch: w, cards: [] }),
            g("暂无通讯录居民档案，无法生成直播间"));
          return;
        }
        if (!(o != null && o.key)) {
          (g("请先在设置中配置 API Key"), y([]));
          return;
        }
        m(!0);
        try {
          const A = [];
          for (const T of _) A.push(await a4(T, a, d));
          const k = await ZJ(o, c, { residentBriefs: A }),
            C = Array.isArray(k == null ? void 0 : k.titles) ? k.titles : [],
            M = new Map(
              C.map((T) => [
                String(T.resident_id),
                String(T.live_title || "").trim(),
              ]),
            ),
            E = _.map((T) => {
              var $;
              const I = String(T.id),
                L = String(T.name || "").trim() || "居民",
                B =
                  M.get(I) ||
                  (($ = C.find((P) => String(P.resident_id) === I)) == null
                    ? void 0
                    : $.live_title) ||
                  `${L}的直播间`,
                F = encodeURIComponent(L),
                D =
                  T.avatar ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${F}`;
              return { npc: T, liveTitle: B.slice(0, 40), avatar: D, name: L };
            }),
            S = await Promise.all(
              E.map(async (T) => {
                var L;
                let I = null;
                try {
                  const B =
                      ((L = T.npc) == null ? void 0 : L.knowsUserIdentity) ===
                      !0,
                    F = await a4(T.npc, a, d);
                  I = await jC(o, c, {
                    streamerName: T.name,
                    liveTitle: T.liveTitle,
                    coverHint: T.liveTitle,
                    residentBriefs: [F],
                    npcHostMode: !0,
                    anchorResidentBio: Tm(T.npc, a).slice(0, 1200),
                    anchorKnowsUserIdentity: B,
                    viewerDouyinDisplayName:
                      String((r == null ? void 0 : r.name) || "").trim() ||
                      "用户",
                    viewerPersonaForAnchorBlock: B ? wK(r) : "",
                  });
                } catch {}
                return { ...T, presetOpening: I };
              }),
            );
          y(S);
          const j = S.map((T) => NK(T, w));
          await t4({ feedEpoch: w, cards: j });
        } catch {
          (g("加载失败，请重试"), y([]));
        } finally {
          m(!1);
        }
      },
      [n, a, d, o, c, r],
    );
    l.useEffect(() => {
      t !== 0 &&
        (s == null ? void 0 : s.current) !== t &&
        ((s.current = t), b(t));
    }, [t, s, b]);
    const N = (w) => {
      const { npc: _, liveTitle: A, avatar: k, name: C, presetOpening: M } = w,
        E = String(_.signature || "").trim(),
        S = n4(u, _, k) || k;
      i == null ||
        i({
          hostMode: "npc",
          npcHost: { id: String(_.id), name: C, avatar: k, signature: E },
          title: A,
          coverDataUrl: S,
          visibility: "exclude",
          excludedNpcIds: [String(_.id)],
          storageScopeId: `npc_${_.id}`,
          presetOpening: M,
          liveSessionKey: `npc_${_.id}_e${t}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
        });
    };
    return e.jsxs("div", {
      className:
        "absolute inset-0 bg-black z-40 flex flex-col min-h-0 overflow-hidden",
      children: [
        e.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-95",
        }),
        e.jsx("div", {
          className:
            "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none",
        }),
        e.jsxs("div", {
          className:
            "relative z-10 flex-1 flex flex-col min-h-0 justify-center items-stretch pb-8",
          children: [
            p
              ? e.jsx("div", {
                  className: "flex justify-center py-12 shrink-0",
                  children: e.jsx(Sn, {
                    className: "h-8 w-8 animate-spin text-white/60",
                    strokeWidth: 1.75,
                  }),
                })
              : null,
            h
              ? e.jsx("p", {
                  className:
                    "text-center text-sm text-rose-300/90 px-4 shrink-0 max-w-md mx-auto",
                  children: h,
                })
              : null,
            !p && x.length > 0
              ? e.jsx("div", {
                  className:
                    "dy-living-snap dy-living-card-text w-full min-h-0 max-h-[min(78vh,620px)] items-center",
                  children: x.map((w, _) => {
                    var T;
                    const A = n4(u, w.npc, w.avatar) || w.avatar,
                      k =
                        (((T = w.npc) == null ? void 0 : T.id) &&
                          typeof f == "function" &&
                          f(w.npc.id)) ||
                        w.avatar,
                      { line1: C, line2: M } = bK(w.liveTitle),
                      E = yK(w.npc),
                      S = `Chapter ${String(_ + 1).padStart(2, "0")}`,
                      j = String(w.name || "")
                        .trim()
                        .slice(0, 24);
                    return e.jsxs(
                      "button",
                      {
                        type: "button",
                        onClick: () => N(w),
                        className:
                          "dy-living-card-text relative flex-[0_0_85vw] max-w-[380px] aspect-[3/4.2] snap-center shrink-0 overflow-hidden rounded-[2px] border-[0.5px] border-white/[0.12] bg-[#0d0d0d] text-left shadow-[-20px_0_50px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] active:scale-[0.99]",
                        children: [
                          e.jsx("span", {
                            className:
                              "dy-living-serif-display pointer-events-none absolute right-[-20px] top-[40%] z-[2] text-[clamp(4rem,18vw,8rem)] italic leading-none text-white/[0.03]",
                            "aria-hidden": !0,
                            children: String(_ + 1).padStart(2, "0"),
                          }),
                          e.jsx("div", {
                            className: "absolute inset-0 z-[1]",
                            children: e.jsx("img", {
                              src: A,
                              alt: "",
                              className:
                                "h-full w-full object-cover brightness-[0.7] grayscale-[0.2]",
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "absolute left-0 top-0 z-10 flex w-full items-start justify-between px-6 pt-6",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[10px] font-light uppercase tracking-[0.4em]",
                                style: { color: Px },
                                children: j,
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 rounded-[1px] border-[0.5px] border-white/10 bg-white/[0.05] px-3 py-1 backdrop-blur-[10px]",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "dy-living-live-dot h-1 w-1 shrink-0 rounded-full",
                                    style: { backgroundColor: Px },
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[8px] font-normal uppercase tracking-widest text-white",
                                    children: "Live",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black/95 to-transparent px-6 pb-10 pt-16",
                            children: [
                              e.jsx("div", {
                                className:
                                  "mb-5 h-12 w-12 shrink-0 overflow-hidden rounded-full p-0.5",
                                style: { border: `1px solid ${Px}` },
                                children: e.jsx("img", {
                                  src: k,
                                  alt: "",
                                  className:
                                    "h-full w-full rounded-full object-cover",
                                }),
                              }),
                              e.jsxs("div", {
                                className: "relative mb-5",
                                children: [
                                  e.jsxs("h2", {
                                    className:
                                      "dy-living-serif-display text-[clamp(1.5rem,5.5vw,2.2rem)] font-light italic leading-[1.1] tracking-tight text-white",
                                    children: [
                                      C,
                                      M
                                        ? e.jsxs(e.Fragment, {
                                            children: [e.jsx("br", {}), M],
                                          })
                                        : null,
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "mt-3 block text-[10px] uppercase tracking-[0.5em] text-white/40",
                                    children: E,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between border-t border-white/10 pt-4",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[8px] uppercase tracking-widest text-white/40",
                                    children: S,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "dy-living-serif-display text-[10px] italic",
                                    style: { color: Px },
                                    children: vK(w.npc.id),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      w.npc.id,
                    );
                  }),
                })
              : null,
          ],
        }),
      ],
    });
  },
  _K = ({ video: t, onClose: s }) => {
    const { contactsPublic: n } = vn(),
      {
        npcs: a,
        recentShareTargets: r,
        recordShareTarget: i,
        deleteVideoById: o,
        sendPrivateMessage: c,
      } = ei(),
      [d, u] = l.useState(!1),
      f = (a || []).filter(
        (A) => A && A.sourceType === "contact" && A.contactId,
      ),
      p = (A) => {
        const k = (n || []).find((C) => C.id === A.contactId);
        return {
          id: A.id,
          name:
            A.name ||
            (k == null ? void 0 : k.name) ||
            (k == null ? void 0 : k.nickname) ||
            "TA",
          avatar:
            A.avatar ||
            (k == null ? void 0 : k.portrait) ||
            (k == null ? void 0 : k.avatar) ||
            null,
          type: "user",
          contactId: A.contactId,
        };
      },
      m = f.map(p),
      h = r.slice(0, 5).map((A) => A.contactId),
      g = r
        .slice(0, 5)
        .map((A) => m.find((k) => k.id === A.contactId))
        .filter(Boolean),
      x = m.filter((A) => !h.includes(A.id)),
      y = [
        ...(g.length > 0 ? g : []),
        ...x,
        { id: "more", name: "更多", avatar: null, type: "more" },
      ],
      v = m,
      b = (A) => {
        var F, D, $, P, z;
        if (!A || typeof c != "function") return s();
        const k =
            (t == null ? void 0 : t.caption) ??
            (t == null ? void 0 : t.content) ??
            "",
          C = typeof k == "string" ? k : k.text || k.zh || k.cn || "",
          M = Array.isArray(t == null ? void 0 : t.scenes)
            ? t.scenes.slice(0, 4)
            : [],
          E = M.map((O) => {
            var Z, K, q, V, ne, le;
            return `- 画面：${String(((O == null ? void 0 : O.visual) && (typeof O.visual == "string" ? O.visual : ((Z = O.visual) == null ? void 0 : Z.zh) || ((K = O.visual) == null ? void 0 : K.cn) || ((q = O.visual) == null ? void 0 : q.text) || "")) || "").slice(0, 60)}
  字幕：${String(((O == null ? void 0 : O.subtitle) && (typeof O.subtitle == "string" ? O.subtitle : ((V = O.subtitle) == null ? void 0 : V.zh) || ((ne = O.subtitle) == null ? void 0 : ne.cn) || ((le = O.subtitle) == null ? void 0 : le.text) || "")) || "").slice(0, 60)}`;
          }).join(`
`),
          S = Array.isArray(t == null ? void 0 : t.comments)
            ? t.comments.slice(0, 8)
            : [],
          j = S.map((O) => {
            var q;
            const Z = O == null ? void 0 : O.content,
              K =
                typeof Z == "string"
                  ? Z
                  : (Z == null ? void 0 : Z.zh) ||
                    (Z == null ? void 0 : Z.cn) ||
                    (Z == null ? void 0 : Z.text) ||
                    "";
            return `- ${((q = O == null ? void 0 : O.user) == null ? void 0 : q.name) || (O == null ? void 0 : O.user) || "网友"}：${String(K || "").slice(0, 60)}`;
          }).filter(Boolean).join(`
`),
          T = M[0] || {},
          I = T == null ? void 0 : T.visual,
          L = T == null ? void 0 : T.subtitle,
          B = {
            id: t == null ? void 0 : t.id,
            thumbnail:
              (t == null ? void 0 : t.cover) ||
              (t == null ? void 0 : t.mediaUrl) ||
              null,
            author: {
              id: (F = t == null ? void 0 : t.author) == null ? void 0 : F.id,
              name:
                (D = t == null ? void 0 : t.author) == null ? void 0 : D.name,
              avatar:
                (($ = t == null ? void 0 : t.author) == null
                  ? void 0
                  : $.avatar) || null,
            },
            caption: k,
            scenes: M.map((O) => ({
              visual: O == null ? void 0 : O.visual,
              subtitle: O == null ? void 0 : O.subtitle,
            })),
            firstScene: { visual: I, subtitle: L },
            comments: S.map((O) => {
              var Z;
              return {
                user:
                  ((Z = O == null ? void 0 : O.user) == null
                    ? void 0
                    : Z.name) ||
                  (O == null ? void 0 : O.user) ||
                  "",
                content: O == null ? void 0 : O.content,
                replies: Array.isArray(O == null ? void 0 : O.replies)
                  ? O.replies.slice(0, 3).map((K) => {
                      var q;
                      return {
                        user:
                          ((q = K == null ? void 0 : K.user) == null
                            ? void 0
                            : q.name) ||
                          (K == null ? void 0 : K.user) ||
                          "",
                        content: K == null ? void 0 : K.content,
                      };
                    })
                  : [],
              };
            }),
            metaText: `【视频信息】
作者：@${((P = t == null ? void 0 : t.author) == null ? void 0 : P.name) || ""}
文案：${String(C || "").slice(0, 120)}

【分镜/字幕】
${E || "(无)"}

【评论区节选】
${j || "(无)"}
`,
          };
        (c(
          A,
          `[分享视频] @${((z = t == null ? void 0 : t.author) == null ? void 0 : z.name) || "作者"}：${String(C || "").slice(0, 24)}…`,
          null,
          "shared_video",
          { sharedVideo: B },
        ),
          i(A),
          s());
      },
      N = () =>
        e.jsx("div", {
          className:
            "flex overflow-x-auto space-x-4 px-4 pb-4 mt-1 no-scrollbar",
          children: y.map((A, k) =>
            e.jsxs(
              "div",
              {
                className:
                  "flex flex-col items-center space-y-2 min-w-[64px] cursor-pointer active:opacity-80",
                onClick: () => {
                  (A.type === "user" && b(A.id), A.type === "more" && u(!0));
                },
                role: "button",
                children: [
                  e.jsxs("div", {
                    className:
                      "w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center relative overflow-hidden border border-gray-100",
                    children: [
                      A.type === "user" &&
                        (A.avatar
                          ? e.jsx("img", {
                              src: A.avatar,
                              alt: A.name,
                              className: "w-full h-full object-cover",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-300 text-lg",
                              children: A.name ? A.name[0] : "?",
                            })),
                      A.type === "more" &&
                        e.jsx(Kn, { size: 24, className: "text-gray-400" }),
                      A.type === "user" &&
                        k % 2 === 0 &&
                        e.jsx("div", {
                          className:
                            "absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full",
                        }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "text-xs text-gray-600 text-center w-full truncate px-1",
                    children: A.name,
                  }),
                ],
              },
              A.type === "user" ? A.id : `${A.type}-${A.id}`,
            ),
          ),
        }),
      w = () =>
        e.jsx("div", {
          className: "flex overflow-x-auto space-x-6 px-4 pb-2 no-scrollbar",
          children: e.jsxs("div", {
            className:
              "flex flex-col items-center space-y-2 min-w-[56px] cursor-pointer active:opacity-80",
            onClick: () => {
              (t != null && t.id && typeof o == "function" && o(t.id), s());
            },
            role: "button",
            title: "删除视频",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 rounded-full bg-white flex items-center justify-center",
                children: e.jsx(_n, { size: 28, className: "text-red-500" }),
              }),
              e.jsx("div", {
                className: "text-xs text-gray-600 whitespace-nowrap",
                children: "删除",
              }),
            ],
          }),
        }),
      _ = () =>
        e.jsxs("div", {
          className: "flex flex-col h-full",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-4 py-3 border-b border-gray-100",
              children: [
                e.jsx("div", {
                  className: "font-bold text-base",
                  children: "分享给联系人",
                }),
                e.jsx("div", {
                  onClick: () => u(!1),
                  className: "text-sm text-gray-500 cursor-pointer",
                  children: "返回",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "p-4",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-gray-100 rounded-lg flex items-center px-3 py-2 mb-4",
                  children: [
                    e.jsx(pr, { size: 16, className: "text-gray-400 mr-2" }),
                    e.jsx("input", {
                      type: "text",
                      placeholder: "搜索联系人",
                      className: "bg-transparent text-sm outline-none flex-1",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-4 gap-4",
                  children:
                    v.length === 0
                      ? e.jsx("div", {
                          className:
                            "col-span-4 py-8 text-center text-gray-500 text-sm",
                          children: "暂无可分享的联系人，先去关注一些人吧",
                        })
                      : v.map((A) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex flex-col items-center space-y-2 cursor-pointer active:opacity-80",
                              onClick: () => b(A.id),
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-full bg-gray-200 overflow-hidden",
                                  children: A.avatar
                                    ? e.jsx("img", {
                                        src: A.avatar,
                                        alt: A.name,
                                        className: "w-full h-full object-cover",
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "w-full h-full flex items-center justify-center text-gray-500 font-bold bg-gray-300",
                                        children: A.name[0],
                                      }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-xs text-gray-600 text-center truncate w-full",
                                  children: A.name,
                                }),
                              ],
                            },
                            A.id,
                          ),
                        ),
                }),
              ],
            }),
          ],
        });
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-[100] flex flex-col justify-end bg-black/50 backdrop-blur-sm animate-fade-in",
      children: [
        e.jsx("div", { className: "flex-1", onClick: s }),
        e.jsx("div", {
          className:
            "bg-[#f8f8f8] rounded-t-2xl w-full animate-slide-up overflow-hidden flex flex-col max-h-[70%]",
          children: d
            ? e.jsxs(e.Fragment, {
                children: [
                  _(),
                  e.jsx("div", { className: "h-8 bg-[#f8f8f8]" }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className:
                      "relative px-4 py-4 flex items-center justify-between",
                    children: [
                      e.jsx("div", {
                        className: "text-[15px] font-bold text-gray-900",
                        children: "分享给",
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: e.jsx("div", {
                          onClick: s,
                          className:
                            "w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer",
                          children: e.jsx(Ts, {
                            size: 14,
                            className: "text-gray-500",
                          }),
                        }),
                      }),
                    ],
                  }),
                  N(),
                  w(),
                  e.jsx("div", { className: "h-6" }),
                ],
              }),
        }),
      ],
    });
  },
  AK = ({ open: t, onClose: s, onPickPost: n, onPickLive: a }) =>
    t
      ? e.jsx("div", {
          className:
            "fixed inset-0 z-[240] flex items-end justify-center bg-black/45",
          onClick: s,
          children: e.jsxs("div", {
            className:
              "w-full max-w-md rounded-t-[1.25rem] px-5 pt-6 pb-10 bg-[#f5f3f0] border-t border-x border-stone-200/90 shadow-[0_-10px_44px_-12px_rgba(0,0,0,0.18)]",
            onClick: (r) => r.stopPropagation(),
            children: [
              e.jsx("div", {
                className:
                  "mx-auto mb-5 h-[3px] w-9 rounded-full bg-stone-300 shrink-0",
              }),
              e.jsxs("div", {
                className: "flex items-start justify-between gap-3 mb-1",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[9px] tracking-[0.28em] text-stone-400 font-medium uppercase block",
                        children: "Publish",
                      }),
                      e.jsx("h2", {
                        className:
                          "text-stone-900 text-[1.1rem] font-serif font-medium tracking-wide mt-1",
                        children: "发布内容",
                      }),
                      e.jsx("p", {
                        className:
                          "text-stone-500 text-[11px] mt-1.5 leading-relaxed",
                        children: "发作品或开启直播",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    className:
                      "p-1.5 rounded-full text-stone-400 hover:bg-stone-200/80 hover:text-stone-700 transition-colors",
                    "aria-label": "关闭",
                    onClick: s,
                    children: e.jsx(Ts, { size: 20, strokeWidth: 2 }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col gap-3 mt-6",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      (n == null || n(), s == null || s());
                    },
                    className:
                      "flex flex-row items-center justify-center gap-3 rounded-sm border border-stone-300/90 bg-white py-4 px-4 active:scale-[0.99] transition text-stone-800 shadow-sm shadow-stone-900/5",
                    children: [
                      e.jsx(Eh, {
                        size: 22,
                        className: "text-stone-700 shrink-0",
                        strokeWidth: 1.35,
                      }),
                      e.jsx("span", {
                        className: "text-[14px] font-medium tracking-wide",
                        children: "发作品",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      (a == null || a(), s == null || s());
                    },
                    className:
                      "flex flex-row items-center justify-center gap-3 rounded-sm border border-stone-300/90 bg-white py-4 px-4 active:scale-[0.99] transition text-stone-800 shadow-sm shadow-stone-900/5",
                    children: [
                      e.jsx(Vl, {
                        size: 22,
                        className: "text-stone-700 shrink-0",
                        strokeWidth: 1.35,
                      }),
                      e.jsx("span", {
                        className: "text-[14px] font-medium tracking-wide",
                        children: "开直播",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null,
  Im = "https://www.transparenttextures.com/patterns/linen-design.png",
  td = { fontFamily: "'Playfair Display', Georgia, serif" },
  r4 = { fontFamily: "'Noto Serif SC', 'Songti SC', Georgia, serif" };
function CK(t) {
  let s = 1;
  for (let n = 0; n < String(t || "").length; n++)
    s = (((s * 31 + String(t).charCodeAt(n)) >>> 0) % 98) + 1;
  return String(s).padStart(2, "0");
}
function MK({ className: t = "", profileCoverUrl: s }) {
  const n = String(s || "").trim(),
    a = Mm({});
  return e.jsx("div", {
    className: `dy-folio-mini-wrap ${t}`.trim(),
    children: e.jsx("div", {
      className: "dy-folio-mini-rect",
      children: e.jsxs("div", {
        className: "dy-folio-mini-book",
        children: [
          e.jsxs("div", {
            className: "dy-folio-mini-cover",
            style: {
              backgroundImage: `url(${Im}), linear-gradient(145deg, #f7f3f0, #ebe4e1)`,
            },
            children: [
              e.jsx("div", {
                className: "dy-folio-mini-strip",
                style: n
                  ? { backgroundImage: `url(${n})` }
                  : {
                      background: "linear-gradient(135deg,#c5a05933,#8a642a44)",
                    },
              }),
              e.jsx("span", {
                className: "dy-folio-mini-kicker",
                children: "Fine Art",
              }),
              e.jsx("span", {
                className: "dy-folio-mini-title",
                style: td,
                children: "典藏精装书",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "dy-folio-mini-page",
            style: { backgroundImage: `url(${Im})` },
            children: [
              e.jsx("p", {
                className: "dy-folio-mini-page-title",
                style: td,
                children: a.g3_title,
              }),
              e.jsx("p", {
                className: "dy-folio-mini-poem",
                children:
                  a.g3_poem.split(`
`)[0] || "…",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function TK({
  showcaseKey: t,
  profileCoverUrl: s,
  streamerName: n,
  senderName: a,
  giftLabel: r,
  g3_title: i,
  g3_poem: o,
  name: c,
  count: d,
  senderAvatar: u,
}) {
  const f = Mm({ g3_title: i, g3_poem: o }),
    [p, m] = l.useState(!1),
    h = l.useRef(null),
    g = String(r || "典藏精装书").trim(),
    x = String(s || "").trim(),
    y = String(n || "主播").trim(),
    v = String(a || c || "观众").trim();
  (l.useEffect(() => {
    m(!1);
    const N = setTimeout(() => m(!0), 1500);
    return () => clearTimeout(N);
  }, [t]),
    l.useEffect(() => {
      if (!p) return;
      const N = h.current;
      if (!N) return;
      const w = [],
        _ = [];
      for (let A = 0; A < 50; A++)
        w.push(
          setTimeout(() => {
            const k = document.createElement("div");
            k.className = "dy-book-gold-dust";
            const C = Math.random() * 2 + 0.5;
            ((k.style.width = `${C}px`),
              (k.style.height = `${C}px`),
              (k.style.left = "45%"),
              (k.style.top = "50%"),
              N.appendChild(k));
            const M = (Math.random() - 0.5) * Math.PI * 1.5,
              E = Math.random() * 350 + 100,
              S = Math.cos(M) * E,
              j = Math.sin(M) * E - 100,
              T = k.animate(
                [
                  { transform: "translate(0,0) scale(1)", opacity: 1 },
                  {
                    transform: `translate(${S}px, ${j}px) scale(0)`,
                    opacity: 0,
                  },
                ],
                {
                  duration: 2e3 + Math.random() * 1e3,
                  easing: "cubic-bezier(0.1, 0.8, 0.2, 1)",
                },
              );
            ((T.onfinish = () => {
              try {
                k.remove();
              } catch {}
            }),
              _.push(T));
          }, A * 25),
        );
      return () => {
        (w.forEach(clearTimeout),
          _.forEach((A) => {
            try {
              A.cancel();
            } catch {}
          }),
          (N.textContent = ""));
      };
    }, [p, t]));
  const b = String(f.g3_poem || "")
    .split(/\n/)
    .map((N) => N.trim())
    .filter(Boolean);
  return e.jsxs("div", {
    className:
      "relative flex flex-col items-center w-full max-w-[min(92vw,360px)] pointer-events-none",
    children: [
      e.jsxs("div", {
        className:
          "relative w-full min-h-[min(72vh,520px)] flex items-center justify-center py-4",
        children: [
          e.jsx("div", {
            ref: h,
            className: "dy-book-glitter-host",
            "aria-hidden": !0,
          }),
          e.jsx("div", {
            className: "dy-book-stage",
            children: e.jsxs("div", {
              className: `dy-book-folio ${p ? "dy-book-folio--open" : ""}`,
              children: [
                e.jsxs("div", {
                  className: "dy-book-base-page",
                  style: {
                    backgroundImage: `url(${Im}), linear-gradient(180deg, #fcfaf8, #f7f3f0)`,
                  },
                  children: [
                    e.jsx("div", {
                      className: "dy-book-art-image",
                      style: x
                        ? { backgroundImage: `url(${x})` }
                        : {
                            background:
                              "linear-gradient(135deg,#d4c4b8,#8a7a72)",
                          },
                    }),
                    e.jsxs("div", {
                      className: "dy-book-poem-scroll",
                      children: [
                        e.jsx("h3", {
                          className: "dy-book-folio-h3 dy-book-gold-text",
                          style: td,
                          children: f.g3_title,
                        }),
                        e.jsx("div", { className: "dy-book-divider" }),
                        e.jsx("div", {
                          className: "dy-book-poem",
                          style: r4,
                          children: b.map((N, w) =>
                            e.jsxs(
                              pn.Fragment,
                              { children: [w > 0 ? e.jsx("br", {}) : null, N] },
                              w,
                            ),
                          ),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "dy-book-base-foot",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("span", {
                              className: "dy-book-curated-label",
                              children: "Curated By",
                            }),
                            e.jsx("span", {
                              className: "dy-book-curated-name",
                              style: td,
                              children: v,
                            }),
                          ],
                        }),
                        e.jsxs("span", {
                          className: "dy-book-folio-no",
                          style: td,
                          children: ["Folio № ", CK(t)],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "dy-book-cover-group",
                  children: [
                    e.jsxs("div", {
                      className: "dy-book-cover-face",
                      style: {
                        backgroundImage: `url(${Im}), linear-gradient(145deg, #f7f3f0, #ebe8e5)`,
                      },
                      children: [
                        e.jsx("div", {
                          className: "dy-book-shimmer",
                          "aria-hidden": !0,
                        }),
                        e.jsx("div", {
                          className: "dy-book-cover-frame",
                          "aria-hidden": !0,
                        }),
                        e.jsx("span", {
                          className: "dy-book-cover-kicker",
                          children: "Fine Art Publication",
                        }),
                        e.jsx("h1", {
                          className: "dy-book-cover-h1 dy-book-gold-text",
                          style: td,
                          children: g,
                        }),
                        e.jsx("p", {
                          className: "dy-book-cover-suben",
                          children: "TIMELESS FOLIAGE",
                        }),
                        e.jsx("div", { className: "dy-book-cover-rule" }),
                        e.jsx("p", {
                          className: "dy-book-cover-tag",
                          style: td,
                          children: "A Memory Gift",
                        }),
                        e.jsxs("div", {
                          className: "dy-book-cover-names",
                          style: r4,
                          children: [
                            e.jsxs("p", { children: ["赠礼 · ", v] }),
                            e.jsxs("p", { children: ["致 · ", y] }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "dy-book-cover-tail",
                          "aria-hidden": !0,
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "dy-book-cover-back",
                      style: { backgroundImage: `url(${Im})` },
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className:
          "relative z-[256] mt-6 w-full max-w-[min(90vw,17rem)] pt-3 border-t border-white/[0.07] text-center",
        children: [
          e.jsx("p", {
            className: "text-[10px] text-white/38 tracking-widest",
            children: "FROM",
          }),
          e.jsxs("div", {
            className: "mt-1 flex items-center justify-center gap-2 min-w-0",
            children: [
              String(u || "").trim()
                ? e.jsx("img", {
                    src: String(u).trim(),
                    alt: "",
                    className:
                      "h-9 w-9 rounded-full object-cover shrink-0 border border-white/15",
                  })
                : null,
              e.jsxs("div", {
                className: "min-w-0 text-left",
                children: [
                  e.jsx("p", {
                    className:
                      "text-[13px] font-medium text-amber-100/90 truncate",
                    children: c,
                  }),
                  d > 1 &&
                    e.jsxs("p", {
                      className:
                        "mt-0.5 text-[11px] tabular-nums text-amber-200/75",
                      children: ["×", d],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function IK({
  showcaseKey: t,
  giftLabel: s,
  giftLine: n,
  name: a,
  count: r,
  senderAvatar: i,
}) {
  const o = l.useRef(null),
    c = l.useRef(null),
    d = String(n || "").trim();
  l.useEffect(() => {
    const m = o.current;
    if (!m) return;
    const h = m.getContext("2d");
    let g = 0,
      x = [];
    const y = () => {
        const b = c.current,
          N = (b == null ? void 0 : b.clientWidth) || window.innerWidth,
          w = (b == null ? void 0 : b.clientHeight) || window.innerHeight;
        ((m.width = N), (m.height = w), (x = []));
        for (let _ = 0; _ < 150; _++)
          x.push({
            x: Math.random() * N,
            y: Math.random() * w,
            size: Math.random() * 1.8 + 0.5,
            speed: Math.random() * 0.6 + 0.2,
            o: Math.random() * 0.4 + 0.2,
            sway: Math.random() * 2,
          });
      },
      v = () => {
        const b = m.width,
          N = m.height;
        (h.clearRect(0, 0, b, N),
          x.forEach((w) => {
            (h.beginPath(),
              h.arc(w.x + Math.sin(w.sway) * 2, w.y, w.size, 0, Math.PI * 2),
              (h.fillStyle = `rgba(255, 255, 255, ${w.o})`),
              h.fill(),
              (w.y += w.speed),
              (w.sway += 0.01),
              w.y > N && (w.y = -10));
          }),
          (g = requestAnimationFrame(v)));
      };
    return (
      y(),
      (g = requestAnimationFrame(v)),
      window.addEventListener("resize", y),
      () => {
        (cancelAnimationFrame(g), window.removeEventListener("resize", y));
      }
    );
  }, [t]);
  let u = 1;
  for (let m = 0; m < String(t || "").length; m++)
    u = (((u * 31 + String(t).charCodeAt(m)) >>> 0) % 998) + 1;
  const f = String(s || "线装书笺").trim(),
    p = i || "https://api.dicebear.com/7.x/avataaars/svg?seed=gift";
  return e.jsxs("div", {
    ref: c,
    className:
      "relative w-full min-h-[min(88vh,560px)] flex flex-col items-center justify-center pointer-events-none",
    children: [
      e.jsx("canvas", {
        ref: o,
        className: "dy-ice-snow-canvas",
        "aria-hidden": !0,
      }),
      e.jsxs("div", {
        className:
          "relative z-20 dy-ice-gift-overlay-inner flex flex-col items-center justify-center perspective-[2000px] px-3 py-6 w-full min-h-[min(88vh,560px)]",
        children: [
          e.jsxs(
            "div",
            {
              className: "dy-ice-bookmark",
              children: [
                e.jsx("div", {
                  className: "dy-ice-shimmer-line",
                  "aria-hidden": !0,
                }),
                e.jsx("div", {
                  className: "dy-ice-bookmark-tag",
                  "aria-hidden": !0,
                }),
                e.jsx("div", {
                  className: "dy-ice-avatar-box",
                  children: e.jsx("img", { src: p, alt: "" }),
                }),
                e.jsx("span", {
                  className:
                    "text-[8px] uppercase tracking-[0.5em] text-sky-200/90 font-light mb-2",
                  children: "Winter Archive",
                }),
                e.jsxs("div", {
                  className: "dy-ice-art-center",
                  children: [
                    e.jsx("div", {
                      className: "dy-ice-core-glow",
                      "aria-hidden": !0,
                    }),
                    e.jsx("span", {
                      className: "dy-ice-crystal",
                      style: {
                        top: "5%",
                        left: "45%",
                        transform: "rotate(45deg)",
                      },
                      children: "✦",
                    }),
                    e.jsx("span", {
                      className: "dy-ice-crystal dy-ice-crystal--dim",
                      style: { bottom: "15%", right: "10%" },
                      children: "✧",
                    }),
                    e.jsx("span", {
                      className: "dy-ice-crystal",
                      style: { top: "30%", left: "5%" },
                      children: "✦",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "dy-ice-title-group",
                  children: [
                    e.jsx("h2", {
                      className: "dy-ice-main-txt serif-display",
                      children: f,
                    }),
                    e.jsx("p", {
                      className: "dy-ice-sub-txt",
                      children: "Private Collection",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "dy-ice-gift-line mt-6 text-[9px] text-[#6d7e91] tracking-[0.18em] italic text-center leading-relaxed whitespace-pre-line",
                  children: d || "暂无送礼台词",
                }),
                e.jsxs("div", {
                  className: "dy-ice-bookmark-id",
                  children: ["ART. № ", String(u).padStart(3, "0"), "/999"],
                }),
              ],
            },
            t,
          ),
          e.jsxs("div", {
            className: "dy-ice-sender-tag flex flex-col items-center",
            children: [
              e.jsxs("p", {
                children: [
                  e.jsx("span", {
                    className: "tracking-[0.35em]",
                    children: String(a || "").toUpperCase(),
                  }),
                  " 已送出 ",
                  e.jsx("span", {
                    className: "italic",
                    style: { fontFamily: "'Playfair Display', serif" },
                    children: f,
                  }),
                  r > 1 ? ` ×${r}` : "",
                ],
              }),
              e.jsx("div", { className: "mt-3 h-[0.5px] w-12 bg-sky-100/30" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const i4 = {
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
  },
  EK = { fontFamily: "'Noto Serif SC', 'Songti SC', Georgia, serif" };
function IC({
  coverUrl: t,
  echoText: s,
  songTitle: n,
  quoteText: a,
  className: r = "",
  rootClassName: i = "dy-echo-poster-card",
  vinylLabel: o = "Voyage",
}) {
  const c = String(t || "").trim(),
    d = String(a || "")
      .split(/\n/)
      .map((u) => u.trim())
      .filter(Boolean);
  return e.jsxs("div", {
    className: `${i} ${r}`.trim(),
    children: [
      e.jsx("div", {
        className: "dy-echo-poster-img-wrap",
        children: c
          ? e.jsx("img", { src: c, alt: "", className: "dy-echo-poster-img" })
          : e.jsx("div", {
              className: "dy-echo-poster-img dy-echo-poster-img--placeholder",
            }),
      }),
      e.jsx("div", { className: "dy-echo-poster-overlay", "aria-hidden": !0 }),
      e.jsx("div", { className: "dy-echo-mag-header", style: i4, children: s }),
      e.jsx("div", {
        className: "dy-echo-vinyl-record",
        children: e.jsx("div", {
          className: "dy-echo-vinyl-spin",
          children: e.jsx("div", {
            className: "dy-echo-vinyl-label",
            children: o,
          }),
        }),
      }),
      e.jsxs("div", {
        className: "dy-echo-info-content",
        style: EK,
        children: [
          e.jsx("p", {
            className: "dy-echo-artist-label",
            children: "Limited Selection",
          }),
          e.jsx("h2", {
            className: "dy-echo-song-title",
            style: i4,
            children: n,
          }),
          e.jsxs("div", {
            className: "dy-echo-quote-row",
            children: [
              e.jsx("p", {
                className: "dy-echo-quote",
                children: d.map((u, f) =>
                  e.jsxs(
                    pn.Fragment,
                    { children: [f > 0 ? e.jsx("br", {}) : null, u] },
                    f,
                  ),
                ),
              }),
              e.jsx("div", {
                className: "dy-echo-quote-rule",
                "aria-hidden": !0,
              }),
            ],
          }),
          e.jsx("div", {
            className: "dy-echo-signature-ed",
            children: "Signature Edition",
          }),
        ],
      }),
      e.jsx("div", {
        className: "dy-echo-side-serial",
        children: "8 809658 600213",
      }),
    ],
  });
}
function LK({ className: t = "", coverUrl: s }) {
  const n = Cm({});
  return e.jsx("div", {
    className: `dy-echo-mini-thumb-wrap ${t}`.trim(),
    children: e.jsx("div", {
      className: "dy-echo-mini-thumb-rect",
      children: e.jsx("div", {
        className: "dy-echo-mini-thumb-scale",
        children: e.jsx(IC, {
          coverUrl: s,
          echoText: n.g4_echo,
          songTitle: n.g4_song_title,
          quoteText: n.g4_quote,
          rootClassName: "dy-echo-poster-card dy-echo-poster-card--mini",
        }),
      }),
    }),
  });
}
function DK({
  showcaseKey: t,
  coverUrl: s,
  g4_echo: n,
  g4_song_title: a,
  g4_quote: r,
  name: i,
  count: o,
  senderAvatar: c,
}) {
  const d = l.useRef(null),
    u = l.useRef(null),
    f = Cm({ g4_echo: n, g4_song_title: a, g4_quote: r });
  return (
    l.useEffect(() => {
      const p = d.current,
        m = u.current;
      if (!p || !m) return;
      ((p.textContent = ""), (m.textContent = ""));
      const h = [];
      for (let x = 0; x < 40; x++) {
        const y = document.createElement("div"),
          v = Math.random() * 3 + 1;
        ((y.className = "dy-echo-particle"),
          (y.style.width = `${v}px`),
          (y.style.height = `${v}px`),
          (y.style.left = `${Math.random() * 100}%`),
          (y.style.top = `${Math.random() * 100}%`));
        const b = Math.random() * 0.5;
        ((y.style.opacity = String(b)), p.appendChild(y));
        const N = Math.random() * 3e3 + 2e3,
          w = Math.random() * 2e3,
          _ = Math.random() * 200 + 100;
        h.push(
          y.animate(
            [
              { transform: "translateY(0) scale(1)", opacity: b },
              { transform: `translateY(-${_}px) scale(0)`, opacity: 0 },
            ],
            { duration: N, iterations: 1 / 0, delay: w, easing: "linear" },
          ),
        );
      }
      const g = encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" opacity="0.3"><path d="M21,3c-1.1,0-2.1,0.4-2.8,1.2C17.5,5,15.6,5.5,13.7,5.5c-3.1,0-5.8-1.4-8.3-4.1C5,1.1,4.5,1,4,1C2.9,1,2,1.9,2,3 c0,0.5,0.2,1,0.5,1.4C5.1,7.2,6.5,10,6.5,13.1c0,1.9-0.5,3.8-1.5,5.5c-0.7,1.2-0.8,2.7-0.1,3.9C5.4,23.3,6.6,24,8,24c0.5,0,1-0.1,1.5-0.3 c3.1-1.3,6.5-2,10-2c1.9,0,3.8,0.2,5.5,0.7c0.4,0.1,0.7,0.1,1,0.1c1.1,0,2-0.9,2-2C28,15,21,3,21,3z"/></svg>',
      );
      for (let x = 0; x < 6; x++) {
        const y = document.createElement("div");
        ((y.className = "dy-echo-feather"),
          (y.style.left = `${Math.random() * 100}%`),
          (y.style.top = `${Math.random() * 100}%`),
          (y.style.backgroundImage = `url("data:image/svg+xml,${g}")`),
          m.appendChild(y));
        const v = Math.random() * 8e3 + 8e3,
          b = Math.random() * 5e3;
        h.push(
          y.animate(
            [
              { transform: "translate(0,0) rotate(0deg)", opacity: 0 },
              {
                transform: "translate(30px, 100px) rotate(45deg)",
                opacity: 0.4,
                offset: 0.5,
              },
              { transform: "translate(60px, 200px) rotate(90deg)", opacity: 0 },
            ],
            { duration: v, iterations: 1 / 0, delay: b, easing: "linear" },
          ),
        );
      }
      return () => {
        (h.forEach((x) => {
          try {
            x.cancel();
          } catch {}
        }),
          (p.textContent = ""),
          (m.textContent = ""));
      };
    }, [t]),
    e.jsxs("div", {
      className:
        "relative flex flex-col items-center w-full max-w-[min(92vw,360px)] pointer-events-none",
      children: [
        e.jsxs("div", {
          className:
            "relative w-full flex items-center justify-center min-h-[min(72vh,520px)] py-4",
          children: [
            e.jsx("div", {
              ref: d,
              className: "dy-echo-particle-host",
              "aria-hidden": !0,
            }),
            e.jsx("div", {
              ref: u,
              className: "dy-echo-feather-host",
              "aria-hidden": !0,
            }),
            e.jsx("div", {
              className: "dy-echo-gift-stage relative z-[10]",
              children: e.jsx(
                IC,
                {
                  coverUrl: s,
                  echoText: f.g4_echo,
                  songTitle: f.g4_song_title,
                  quoteText: f.g4_quote,
                },
                t,
              ),
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "relative z-[256] mt-2 w-full max-w-[min(90vw,17rem)] pt-3 border-t border-white/[0.07] text-center",
          children: [
            e.jsx("p", {
              className: "text-[10px] text-white/38 tracking-widest",
              children: "FROM",
            }),
            e.jsxs("div", {
              className: "mt-1 flex items-center justify-center gap-2 min-w-0",
              children: [
                String(c || "").trim()
                  ? e.jsx("img", {
                      src: String(c).trim(),
                      alt: "",
                      className:
                        "h-9 w-9 rounded-full object-cover shrink-0 border border-white/15",
                    })
                  : null,
                e.jsxs("div", {
                  className: "min-w-0 text-left",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[13px] font-medium text-amber-100/90 truncate",
                      children: i,
                    }),
                    o > 1 &&
                      e.jsxs("p", {
                        className:
                          "mt-0.5 text-[11px] tabular-nums text-amber-200/75",
                        children: ["×", o],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function fg({ children: t, className: s = "", viewBox: n = "0 0 40 40" }) {
  return e.jsx("svg", {
    viewBox: n,
    fill: "none",
    className: `w-full h-auto ${s}`,
    "aria-hidden": !0,
    children: t,
  });
}
function EC({ className: t, gid: s = "g1" }) {
  const n = `st-p-${s}`,
    a = `st-g-${s}`;
  return e.jsxs(fg, {
    className: t,
    children: [
      e.jsxs("defs", {
        children: [
          e.jsxs("linearGradient", {
            id: n,
            x1: "6",
            y1: "6",
            x2: "34",
            y2: "34",
            children: [
              e.jsx("stop", { stopColor: "#fef3c7" }),
              e.jsx("stop", { offset: "0.5", stopColor: "#fde68a" }),
              e.jsx("stop", { offset: "1", stopColor: "#d97706" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: a,
            x1: "12",
            y1: "12",
            x2: "28",
            y2: "28",
            children: [
              e.jsx("stop", { stopColor: "#b45309", stopOpacity: "0.35" }),
              e.jsx("stop", {
                offset: "1",
                stopColor: "#78350f",
                stopOpacity: "0.5",
              }),
            ],
          }),
        ],
      }),
      e.jsx("path", {
        d: "M8 6h24v4.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2V28c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2H8v-4.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2V12c-1.2 0-2.2-1-2.2-2.2S6.8 7.6 8 6.4V6z",
        fill: `url(#${n})`,
        stroke: "#92400e",
        strokeWidth: "0.5",
      }),
      e.jsx("rect", {
        x: "11",
        y: "10",
        width: "18",
        height: "14",
        rx: "0.8",
        fill: `url(#${a})`,
      }),
      e.jsx("circle", {
        cx: "20",
        cy: "17",
        r: "4.5",
        fill: "none",
        stroke: "#b45309",
        strokeWidth: "0.45",
        opacity: "0.6",
      }),
      e.jsx("path", {
        d: "M17 17h6M20 14v6",
        stroke: "#78350f",
        strokeWidth: "0.35",
        opacity: "0.5",
      }),
      e.jsx("rect", {
        x: "12",
        y: "26",
        width: "16",
        height: "1.4",
        rx: "0.2",
        fill: "#92400e",
        opacity: "0.35",
      }),
    ],
  });
}
function $K({ className: t, gid: s = "g2" }) {
  const n = `bm-ice-${s}`,
    a = `bm-acc-${s}`,
    r = `bm-ins-${s}`;
  return e.jsxs(fg, {
    className: t,
    viewBox: "0 0 36 56",
    children: [
      e.jsxs("defs", {
        children: [
          e.jsxs("linearGradient", {
            id: n,
            x1: "4",
            y1: "4",
            x2: "32",
            y2: "52",
            children: [
              e.jsx("stop", { stopColor: "#faffff" }),
              e.jsx("stop", { offset: "0.55", stopColor: "#f0f7ff" }),
              e.jsx("stop", { offset: "1", stopColor: "#e8f2fc" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: a,
            x1: "18",
            y1: "6",
            x2: "18",
            y2: "10",
            children: [
              e.jsx("stop", { stopColor: "#8eb2d5" }),
              e.jsx("stop", { offset: "1", stopColor: "#cbdcf0" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: r,
            x1: "8",
            y1: "8",
            x2: "28",
            y2: "48",
            children: [
              e.jsx("stop", { stopColor: "#ffffff", stopOpacity: "0.95" }),
              e.jsx("stop", {
                offset: "1",
                stopColor: "#cbdcf0",
                stopOpacity: "0.12",
              }),
            ],
          }),
        ],
      }),
      e.jsx("rect", {
        x: "17.25",
        y: "1",
        width: "1.5",
        height: "8",
        rx: "0.5",
        fill: `url(#${a})`,
      }),
      e.jsx("circle", {
        cx: "18",
        cy: "11",
        r: "2.5",
        fill: "#fff",
        stroke: "#8eb2d5",
        strokeWidth: "0.35",
      }),
      e.jsx("rect", {
        x: "6",
        y: "12",
        width: "24",
        height: "42",
        rx: "0.8",
        fill: `url(#${n})`,
        stroke: "rgba(142, 178, 213, 0.35)",
        strokeWidth: "0.4",
        style: { filter: "drop-shadow(0 3px 8px rgba(74, 93, 115, 0.2))" },
      }),
      e.jsx("rect", {
        x: "8",
        y: "14",
        width: "20",
        height: "38",
        rx: "0.4",
        fill: `url(#${r})`,
        opacity: "0.45",
      }),
      e.jsx("circle", {
        cx: "18",
        cy: "24",
        r: "5",
        fill: "none",
        stroke: "rgba(142, 178, 213, 0.35)",
        strokeWidth: "0.35",
      }),
      e.jsx("circle", {
        cx: "18",
        cy: "24",
        r: "2.2",
        fill: "#8eb2d5",
        opacity: "0.35",
      }),
      e.jsx("line", {
        x1: "11",
        y1: "34",
        x2: "25",
        y2: "34",
        stroke: "rgba(74, 93, 115, 0.12)",
        strokeWidth: "0.35",
      }),
      e.jsx("line", {
        x1: "11",
        y1: "37",
        x2: "21",
        y2: "37",
        stroke: "rgba(74, 93, 115, 0.1)",
        strokeWidth: "0.3",
      }),
    ],
  });
}
function FK({ className: t, gid: s = "g5" }) {
  const n = `lp-pearl-${s}`,
    a = `lp-rib-${s}`,
    r = `lp-pet-${s}`,
    i = `lp-title-pink-${s}`;
  return e.jsxs(fg, {
    className: t,
    viewBox: "0 0 52 68",
    children: [
      e.jsxs("defs", {
        children: [
          e.jsxs("linearGradient", {
            id: n,
            x1: "4",
            y1: "4",
            x2: "48",
            y2: "64",
            children: [
              e.jsx("stop", { stopColor: "#fdfcfb" }),
              e.jsx("stop", { offset: "0.5", stopColor: "#fff5f8" }),
              e.jsx("stop", { offset: "1", stopColor: "#fce8f0" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: a,
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
              e.jsx("stop", { stopColor: "#ffd7e6" }),
              e.jsx("stop", { offset: "1", stopColor: "#ffb7c5" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: r,
            x1: "6",
            y1: "6",
            x2: "46",
            y2: "62",
            children: [
              e.jsx("stop", { stopColor: "#ffd7e6" }),
              e.jsx("stop", { offset: "1", stopColor: "#ffb7c5" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: i,
            x1: "8",
            y1: "22",
            x2: "44",
            y2: "44",
            gradientUnits: "userSpaceOnUse",
            children: [
              e.jsx("stop", { stopColor: "#ffb7c5" }),
              e.jsx("stop", { offset: "0.45", stopColor: "#ff6b9d" }),
              e.jsx("stop", { offset: "1", stopColor: "#ffd7e6" }),
            ],
          }),
        ],
      }),
      e.jsx("rect", {
        x: "3",
        y: "2",
        width: "46",
        height: "64",
        rx: "2.2",
        fill: `url(#${n})`,
        stroke: "rgba(255, 183, 197, 0.45)",
        strokeWidth: "0.6",
        style: { filter: "drop-shadow(0 4px 10px rgba(255, 183, 197, 0.22))" },
      }),
      e.jsx("rect", {
        x: "9",
        y: "8",
        width: "34",
        height: "52",
        rx: "0.8",
        fill: "none",
        stroke: "rgba(212, 163, 115, 0.35)",
        strokeWidth: "0.35",
      }),
      e.jsx("path", {
        d: "M38 10 L50 10 L50 18 L34 22 Z",
        fill: `url(#${a})`,
        opacity: "0.95",
        style: { filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.06))" },
      }),
      e.jsx("circle", { cx: "11", cy: "14", r: "1.6", fill: "#fce7f3" }),
      e.jsx("text", {
        x: "26",
        y: "30",
        textAnchor: "middle",
        fill: `url(#${i})`,
        fontSize: "8.5",
        fontStyle: "italic",
        fontFamily: "Georgia, 'Bodoni Moda', 'Noto Serif SC', serif",
        children: "Sakura",
      }),
      e.jsx("text", {
        x: "26",
        y: "40",
        textAnchor: "middle",
        fill: `url(#${i})`,
        fontSize: "8.5",
        fontStyle: "italic",
        fontFamily: "Georgia, 'Bodoni Moda', 'Noto Serif SC', serif",
        children: "memories",
      }),
      e.jsx("path", { d: "M10 52 H42", stroke: "#eee", strokeWidth: "0.35" }),
      e.jsx("ellipse", {
        cx: "41",
        cy: "59",
        rx: "3",
        ry: "2.4",
        fill: `url(#${r})`,
        opacity: "0.75",
        transform: "rotate(-25 41 59)",
      }),
    ],
  });
}
function zK({ className: t, gid: s = "g6" }) {
  const n = `nv-sl-${s}`,
    a = `nv-gd-${s}`,
    r = `nv-gr-${s}`,
    i = `nv-vn-${s}`;
  return e.jsxs(fg, {
    className: t,
    viewBox: "0 0 44 40",
    children: [
      e.jsxs("defs", {
        children: [
          e.jsxs("linearGradient", {
            id: n,
            x1: "4",
            y1: "7",
            x2: "22",
            y2: "33",
            children: [
              e.jsx("stop", { stopColor: "#2a2a2e" }),
              e.jsx("stop", { offset: "0.5", stopColor: "#141416" }),
              e.jsx("stop", { offset: "1", stopColor: "#0a0a0c" }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: a,
            x1: "6",
            y1: "24",
            x2: "18",
            y2: "30",
            children: [
              e.jsx("stop", { stopColor: "#f9e29d" }),
              e.jsx("stop", { offset: "0.5", stopColor: "#d4af37" }),
              e.jsx("stop", { offset: "1", stopColor: "#8a7030" }),
            ],
          }),
          e.jsxs("radialGradient", {
            id: i,
            cx: "50%",
            cy: "50%",
            r: "50%",
            children: [
              e.jsx("stop", { offset: "0%", stopColor: "#121214" }),
              e.jsx("stop", { offset: "72%", stopColor: "#0a0a0c" }),
              e.jsx("stop", { offset: "100%", stopColor: "#050506" }),
            ],
          }),
          e.jsxs("radialGradient", {
            id: r,
            cx: "40%",
            cy: "35%",
            r: "55%",
            children: [
              e.jsx("stop", { stopColor: "#f9e29d" }),
              e.jsx("stop", { offset: "0.65", stopColor: "#c5a059" }),
              e.jsx("stop", { offset: "1", stopColor: "#6b5420" }),
            ],
          }),
        ],
      }),
      e.jsx("circle", { cx: "24", cy: "20", r: "12", fill: `url(#${i})` }),
      [9.5, 7.5, 5.5, 3.5].map((o, c) =>
        e.jsx(
          "circle",
          {
            cx: "24",
            cy: "20",
            r: o,
            fill: "none",
            stroke: "#2a2a2e",
            strokeWidth: "0.35",
            opacity: 0.15 + c * 0.12,
          },
          o,
        ),
      ),
      e.jsx("circle", {
        cx: "24",
        cy: "20",
        r: "12",
        fill: "none",
        stroke: `url(#${a})`,
        strokeOpacity: "0.12",
        strokeWidth: "0.4",
      }),
      e.jsx("circle", {
        cx: "24",
        cy: "20",
        r: "3.8",
        fill: `url(#${r})`,
        stroke: "#1a1508",
        strokeWidth: "0.25",
      }),
      e.jsx("circle", { cx: "24", cy: "20", r: "1.3", fill: "#0c0c0e" }),
      e.jsx("rect", {
        x: "3",
        y: "7",
        width: "19",
        height: "26",
        rx: "1",
        fill: `url(#${n})`,
        stroke: "rgba(255,255,255,0.12)",
        strokeWidth: "0.4",
      }),
      e.jsx("line", {
        x1: "5",
        y1: "11",
        x2: "19",
        y2: "11",
        stroke: "rgba(255,255,255,0.08)",
        strokeWidth: "0.35",
      }),
      e.jsx("rect", {
        x: "6",
        y: "24",
        width: "12",
        height: "2.2",
        rx: "0.3",
        fill: `url(#${a})`,
        opacity: "0.85",
      }),
      e.jsx("rect", {
        x: "6",
        y: "27.5",
        width: "9",
        height: "1.2",
        rx: "0.2",
        fill: `url(#${a})`,
        opacity: "0.45",
      }),
      [6.5, 8.5, 10.5, 12.5].map((o, c) =>
        e.jsx(
          "rect",
          {
            x: o,
            y: "13.5",
            width: "1.8",
            height: "0.55",
            rx: "0.15",
            fill: "rgba(249,226,157,0.35)",
            opacity: 0.4 + c * 0.1,
          },
          o,
        ),
      ),
    ],
  });
}
const RK = { g1: EC, g2: $K, g5: FK, g6: zK };
function yh({
  id: t,
  className: s = "max-h-[52px]",
  coverUrl: n,
  profileCoverUrl: a,
}) {
  if (t === "g4") return e.jsx(LK, { className: s, coverUrl: n });
  if (t === "g3") return e.jsx(MK, { className: s, profileCoverUrl: a });
  const r = RK[t] || EC;
  return e.jsx(r, { className: s, gid: t });
}
const o4 = ["♪", "♫", "♬", "♩", "∮", "♮"],
  PK = {
    fontFamily: '"Bodoni Moda","Noto Serif SC","Songti SC",Georgia,serif',
  };
function OK({
  showcaseKey: t,
  giftLabel: s,
  name: n,
  count: a,
  senderAvatar: r,
}) {
  const i = l.useId(),
    [o, c] = l.useState([]),
    d = l.useMemo(() => {
      let u = 0;
      const f = String(t || "0");
      for (let p = 0; p < f.length; p++) u = (u * 31 + f.charCodeAt(p)) >>> 0;
      return u || 1;
    }, [t]);
  return (
    l.useEffect(() => {
      c([]);
      const u = setTimeout(() => {
        const f = [];
        let p = d;
        const m = () => ((p = (p * 1103515245 + 12345) >>> 0), p / 4294967296);
        for (let h = 0; h < 12; h++)
          f.push({
            id: `${i}-n-${h}`,
            sym: o4[Math.floor(m() * o4.length)],
            destX: (m() - 0.5) * 400,
            destY: (m() - 0.5) * 400 - 100,
            dur: 2500 + m() * 1e3,
          });
        c(f);
      }, 1400);
      return () => clearTimeout(u);
    }, [t, d, i]),
    l.useEffect(() => {
      if (!o.length) return;
      const u = setTimeout(() => c([]), 4e3);
      return () => clearTimeout(u);
    }, [o]),
    e.jsxs("div", {
      className:
        "relative flex flex-col items-center justify-center w-full max-w-[min(90vw,17rem)] pointer-events-none",
      children: [
        e.jsxs("div", {
          className:
            "dy-noir-stage-root relative w-full flex items-center justify-center min-h-[min(40vh,17rem)]",
          children: [
            e.jsx("div", { className: "dy-noir-glow-bg", "aria-hidden": !0 }),
            [0, 1, 2, 3, 4].map((u) =>
              e.jsx(
                "div",
                {
                  className: "dy-noir-staff-line",
                  style: { top: `${45 + u * 2}%` },
                },
                `staff-${t}-${u}`,
              ),
            ),
            Array.from({ length: 28 }).map((u, f) => {
              let p = d + f * 997;
              const m = () => (
                  (p = (p * 1103515245 + 12345) >>> 0),
                  p / 4294967296
                ),
                h = (m() - 0.5) * 220,
                g = (m() - 0.5) * 220,
                x = 1400 + m() * 400,
                y = 2e3 + m() * 1e3;
              return e.jsx(
                "span",
                {
                  className: "dy-noir-particle",
                  style: {
                    animationDelay: `${x}ms`,
                    animationDuration: `${y}ms`,
                    "--dx": `${h}px`,
                    "--dy": `${g}px`,
                  },
                },
                `spark-${t}-${f}`,
              );
            }),
            o.map((u) =>
              e.jsx(
                "span",
                {
                  className: "dy-noir-music-note",
                  style: {
                    left: "50%",
                    top: "50%",
                    "--dx": `${u.destX}px`,
                    "--dy": `${u.destY}px`,
                    animationDuration: `${u.dur}ms`,
                  },
                  children: u.sym,
                },
                u.id,
              ),
            ),
            e.jsxs(
              "div",
              {
                className: "dy-noir-album-wrapper",
                children: [
                  e.jsx("div", {
                    className: "dy-noir-vinyl",
                    children: e.jsx("div", {
                      className: "dy-noir-vinyl-center",
                      children: e.jsx("div", {
                        className: "dy-noir-vinyl-hole",
                      }),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "dy-noir-sleeve",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between items-start gap-2",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 border border-white/20 flex items-center justify-center shrink-0",
                            children: e.jsx("div", {
                              className: "w-2 h-px bg-white/40",
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "text-[5px] text-right text-white/30 tracking-[0.3em] leading-tight font-light",
                            children: [
                              "PRIVATE ARCHIVE",
                              e.jsx("br", {}),
                              "EDITION 2026",
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "dy-noir-album-title",
                        style: PK,
                        children: s || "Noir Luxe",
                      }),
                      e.jsx("div", { className: "dy-noir-gold-divider" }),
                      e.jsx("p", {
                        className: "dy-noir-meta",
                        children: "A Symphony of Elegance",
                      }),
                      e.jsxs("div", {
                        className: "mt-4 flex gap-2",
                        children: [
                          e.jsx("div", {
                            className: "w-1 h-px bg-[#c5a059]/50",
                          }),
                          e.jsx("div", { className: "w-4 h-px bg-white/10" }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              t,
            ),
          ],
        }),
        e.jsxs("div", {
          className:
            "mt-6 w-full max-w-[min(90vw,17rem)] pt-3 border-t border-white/[0.07] text-center",
          children: [
            e.jsx("p", {
              className: "text-[10px] text-white/38 tracking-widest",
              children: "FROM",
            }),
            e.jsxs("div", {
              className: "mt-1 flex items-center justify-center gap-2 min-w-0",
              children: [
                String(r || "").trim()
                  ? e.jsx("img", {
                      src: String(r).trim(),
                      alt: "",