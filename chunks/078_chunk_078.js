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
      rn;
    const {
        contactsPublic: s,
        chats: n,
        apiConfig: a,
        addApiLog: r,
        getRoleBoundUser: i,
        playTTS: o,
        stopTTS: c,
        ttsConfig: d,
        unlockAudio: u,
      } = vn(),
      f = Array.isArray(s) ? s.filter((wt) => !Kl(wt)) : [],
      {
        playTrack: p,
        currentTrack: m,
        isPlaying: h,
        togglePlay: g,
        setMusicVolume: x,
      } = Ii(),
      [y, v] = l.useState("home"),
      [b, N] = l.useState(null),
      [w, _] = l.useState(null),
      [A, k] = l.useState(null),
      [C, M] = l.useState(1),
      [E, S] = l.useState(""),
      [j, T] = l.useState(null),
      [I, L] = l.useState([]),
      [B, F] = l.useState([]),
      [D, $] = l.useState(null),
      [P, z] = l.useState(!1),
      [O, Z] = l.useState(!1),
      [K, q] = l.useState(new Set()),
      [V, ne] = l.useState(new Set()),
      [le, ie] = l.useState([]),
      [X, je] = l.useState(!1),
      [xe, ye] = l.useState(!1),
      [R, oe] = l.useState(null),
      [ee, H] = l.useState(null),
      [Y, U] = l.useState(!1),
      [ce, pe] = l.useState(() => qC()),
      se = l.useRef(null),
      Te = l.useRef(null),
      ke = l.useRef(null),
      W = l.useRef(!1),
      ue = l.useRef(null),
      [re, he] = l.useState(null);
    (l.useLayoutEffect(() => {
      if (y !== "home") return;
      const wt = ue.current;
      if (!wt) return;
      const xs = wt.querySelector(".archive-row"),
        ot = xs ? xs.getBoundingClientRect().height : 0;
      ot > 0 && he(ot * 4);
    }, [y, f == null ? void 0 : f.length]),
      l.useEffect(() => {
        R || (W.current = !1);
      }, [R]),
      l.useEffect(() => {
        T(null);
      }, [C]));
    const ge = l.useRef(!1),
      J = f.map((wt, xs) => ({
        id: wt.id,
        name: wt.nickname || wt.name,
        code: `ARCHIVE-${String(xs + 1).padStart(2, "0")}`,
      })),
      G = async (wt) => {
        const xs = await be.get(Qd(wt), []),
          ot = Array.isArray(xs) ? xs : [],
          $t = (
            await Promise.all(
              ot.map(async (Ft) => {
                var qt, Lt;
                const es = await be.get(Qc(wt, Ft.year), []),
                  At = Array.isArray(es) ? es : [];
                if (At.length === 0) return null;
                const Jt =
                    At.length > 0
                      ? (
                          ((qt = At[At.length - 1]) == null
                            ? void 0
                            : qt.title) ||
                          ((Lt = At[0]) == null ? void 0 : Lt.title) ||
                          ""
                        ).trim()
                      : "",
                  Vt = Jt
                    ? Jt.length > 20
                      ? `${Jt.slice(0, 20)}…`
                      : Jt
                    : Ft.title || `${Ft.year}年的记忆`;
                return { ...Ft, title: Vt, snippet: Jt || Ft.snippet };
              }),
            )
          ).filter(Boolean);
        ($t.length !== ot.length && (await be.set(Qd(wt), $t)), L($t));
      },
      we = async (wt) => {
        var xs, ot, st;
        if (!P) {
          z(!0);
          try {
            const $t = f.find((ts) => ts.id === wt);
            if (!$t) {
              z(!1);
              return;
            }
            const Ft = (i == null ? void 0 : i($t)) || {},
              es = $t.setting || "无",
              At = Ft.settings || "无",
              Jt = Ft.name || "用户",
              Vt = await be.get(Qd(wt), []),
              qt = new Set(),
              Lt = new Set(),
              { writingStyle: Qt, styleDesc: js } = await by(wt, es);
            let cs = "";
            const Ne = n == null ? void 0 : n.find((ts) => ts.contactId === wt);
            if (
              ((xs = Ne == null ? void 0 : Ne.messages) == null
                ? void 0
                : xs.length) > 0
            ) {
              const ts = Ne.messages
                .slice(-16)
                .map(
                  (ys) =>
                    `${ys.sender === "me" ? Jt : $t.nickname || $t.name}: ${(ys.text || "").slice(0, 60)}`,
                ).join(`
`);
              ts &&
                (cs += `【聊天记录（辅助参考）】
${ts}

`);
            }
            const Je = await be.get("meet_app_stories", {}),
              St = Je == null ? void 0 : Je[wt];
            if (Array.isArray(St) && St.length > 0) {
              const ts = St.slice(-8).map(
                (ys) =>
                  `${ys.role === "user" ? Jt : $t.nickname || $t.name}: ${(ys.content || "").slice(0, 60)}`,
              ).join(`
`);
              ts &&
                (cs += `【相遇记录（辅助参考）】
${ts}

`);
            }
            cs &&
              (cs = `以下对话可作辅助参考，不必强求一致：
${cs}`);
            const Ke = [
                {
                  sender: "me",
                  text: `你是记忆封存室的档案生成系统。请根据以下信息**一次生成一篇记忆故事**：包含年份、标题，以及该故事的完整档案详情（时间盒子+标题+故事详情在同一份JSON里一次返回）。

【重要】视角与时间感：整份档案各页内容必须是「过去那个时候的角色，在当时写下的」——即角色身处那段时光里、用当时的眼光和心境写下的记录。禁止用事后回忆的口吻（如「那时我还不知道」「如今想来」「后来才明白」等）。

角色人设：${es}
绑定用户人设：${At}
绑定用户名字：${Jt}
文风要求：${js}
${cs}

**全文文风统一**：以下各页（p0 叙述性字段、p1、p2 全部对话、p3、p3_5、p_ending、p4、p_trial 的 Q/A 与证物说明）的语气、修辞与节奏都必须落实上述「文风要求」并符合「${Qt}」标签；若与下文某条局部写法提示冲突，**以本段「文风要求」为准**。

要求：
1. 先决定一个年份（year，如"2017"）和标题（title，15-25字）。故事是角色从出生到现在的过去经历，类型不设限（好玩的、伤心的、开心的、重大的、遗憾的、日常的等）。尽量使用过去的年份。标题要有诗意和记忆感，符合${Qt}文风。
2. 再生成该故事的完整档案详情（与现有档案格式一致）：
   - p0：私密档案（表格页），必须输出为一个 JSON 对象；页面文本必须全为中文，并且与 UI 字段一一对应。p0 字段固定为：
     {
       "dossierNo":"...","classification":"...","status":"...","lastUpdated":"...",
       "stampText":"...","refText":"...","sysId":"...",
       "name":"...","subjectLabel":"...","intro":"...",
       "age":"...","gender":"...","lastKnownLocation":"...","educationalBackground":"...","expelledText":"...",
       "habits":["...","...","..."],"hobbies":["...","...","..."],
       "family":"...",
       "bucketList":["...","...","..."],
       "emergencyContact":{
         "invalidatedName":"...","invalidatedPhone":"...","invalidatedRelation":"...",
         "name":"...","aliasTag":"...","phone":"...","relation":"...",
         "investigatorNote":"..."
       }
     }
   - 教育硬约束：如果角色没有上学/无可记录教育经历，则 educationalBackground 必须输出空字符串 ""，expelledText 也必须输出空字符串 ""。
     禁止用任何幽默/梗式替代来“解释没上学”（例如“家里蹲”“在家/宅/居家度日/不上学但…之类的玩笑表达”）。只允许输出空字符串，禁止输出任何非教育机构的玩笑话或委婉替代。
   - p1：讲述完整故事的前三分之一，800-1200字，第一人称"我"，当时视角，开头明确写出时间（对应year）。**须符合${Qt}文风并落实全文「文风要求」**；若与下文轻喜剧、白描、禁比喻等提示冲突，以「文风要求」为准。\\n\\n分段，至少5段（节奏更密、更轻快）；每段尽量短（2-4句），读起来像在翻看一格一格的胶卷。可选参考（与「文风要求」不冲突时）：少用堆砌比喻，可用白描与动作对话细节；整体可偏轻松。内容要多元化：可写开心、日常、成长等，也可按「文风要求」需要调整基调。此页写法必须仍是“当时写下的口吻”（不要事后总结的回忆腔）。
   - p2：3-5轮对话，格式 [{"speaker":"角色名或'我'","text":"对话内容"}]，体现角色与${Jt}的互动。**每句台词的语感、节奏、用词须符合${Qt}文风，并落实全文「文风要求」**（不得写成与 p1 文风割裂的「通用对白」）。
   - p3：150-250字叙述，可为NPC/其他主角/档案物品视角，\\n\\n分段，至少2段。**须符合${Qt}文风**。
   - p3_5：3-5轮对话，角色与其他人（不是${Jt}），格式同上，关联p1情境。**须符合${Qt}文风**。
   - p_ending：完整故事的结局（最后三分之一），400-600字，第一人称"我"，\\n\\n分段，至少3段。**必须严格符合${Qt}文风并与 p1 语气连贯**，并落实全文「文风要求」。下文若出现轻喜剧、白描、禁比喻等局部提示，仅在与「文风要求」不冲突时采纳；**一旦冲突，以「文风要求」为准**。可选参考（不强制）：整体基调可偏轻松；可用白描（动作、对话、地点与细节）；内容多元化。此页写法必须仍是“当时写下的口吻”（不要事后总结的回忆腔）。
   - p_trial：庭审记录页（证物点击展示的 Q/A + 证物清单）。输出为一个 JSON 对象，结构固定为：
     {"transcriptStart":"02:14:00 AM","transcript":[{"Q":"...","A":"..."}...],"evidence":[{"id":"E-01","name":"...","timestamp":"...","Q":"...","A":"..."}, ...]}
     其中：transcriptStart 为类似“02:14:00 AM”的时间字符串；transcript 至少4组；transcript 内只能出现 Q 与 A 的对话文字（Q 可读出证物清单或搬家物品，A 必须回应并承接弧光）。
   为了匹配 UI 样式，允许在 Q 文本中包含 token [[ITALIC]]（出现则该 Q 行以斜体展示），在 A 文本中包含 token [[CURSOR]]（出现则在该 A 行末尾展示光标方块，token 不算正文）。
     evidence 输出 6-8 项（最少6个，最多8个）；编号建议：E-01~E-04 与 I-01~I-02，并可补充更多 E/I 编号。每个证物项都必须包含自己的 Q/A 字段（Q/A 与点击展示内容一一对应）。
   - p4：150-250字封存说明，第一人称"我"，格式："档案编号 [SEALED-XXX] 已封存。\\n\\n[自述说明]"。
   - p5：{"narrator":"旁白文字","character":"角色说的话"}，回到过去时用户看到的第一段。
   - p6：{"narrator":"旁白文字","character":"角色说的话"}，与p5连贯。
3. 返回**唯一一个**JSON对象，包含顶层 year、title，以及 p0、p1、p2、p3、p3_5、p_ending、p_trial、p4、p5、p6。格式示例：
{"year":"2017","title":"...","p0":{...},"p1":"...","p2":[...],"p3":"...","p3_5":[...],"p_ending":"...","p_trial":{"transcriptStart":"02:14:00 AM","transcript":[{"Q":"...","A":"..."}],"evidence":[{"id":"E-01","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"E-02","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"E-03","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"E-04","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"I-01","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"I-02","name":"...","timestamp":"...","Q":"...","A":"..."}]},"p4":"...","p5":{...},"p6":{...}}
4. 不要Markdown代码块，直接返回JSON。p2和p3_5必须至少3轮对话。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              Nt = await gy({
                apiConfig: a,
                contact: $t,
                effectiveUser: Ft,
                messagesToApi: Ke,
                addApiLog: r,
              });
            if (!Nt) {
              H("生成失败：未收到响应，请检查网络或稍后重试");
              return;
            }
            const bt = QX(Nt);
            if (!bt || typeof bt != "object") {
              H(
                "生成失败：响应格式有误（可能为 Claude 等模型返回了非 JSON），请重试",
              );
              return;
            }
            const ns =
                String(
                  (bt == null ? void 0 : bt.year) != null
                    ? bt.year
                    : new Date().getFullYear(),
                )
                  .replace(/\D/g, "")
                  .slice(0, 4) || String(new Date().getFullYear()),
              Ge =
                ((bt == null ? void 0 : bt.title) || "").trim() ||
                "那一年的记忆";
            if (
              !(
                (bt == null ? void 0 : bt.p0) &&
                (bt == null ? void 0 : bt.p1) &&
                Array.isArray(bt == null ? void 0 : bt.p2) &&
                bt.p2.length >= 3 &&
                (bt == null ? void 0 : bt.p3) &&
                Array.isArray(bt == null ? void 0 : bt.p3_5) &&
                bt.p3_5.length >= 3 &&
                (bt == null ? void 0 : bt.p_ending) &&
                (bt == null ? void 0 : bt.p_trial) &&
                Array.isArray(
                  (ot = bt == null ? void 0 : bt.p_trial) == null
                    ? void 0
                    : ot.transcript,
                ) &&
                bt.p_trial.transcript.length >= 4 &&
                Array.isArray(
                  (st = bt == null ? void 0 : bt.p_trial) == null
                    ? void 0
                    : st.evidence,
                ) &&
                bt.p_trial.evidence.length >= 6 &&
                bt.p_trial.evidence.length <= 8 &&
                (bt == null ? void 0 : bt.p4) &&
                (bt == null ? void 0 : bt.p5) &&
                (bt == null ? void 0 : bt.p6)
              )
            ) {
              H("生成失败：返回内容不完整（缺少 p1/p2/p3 等详情页），请重试");
              return;
            }
            const _e = Date.now(),
              yt = `s_${ns}_${_e}_0`,
              rt = `${ns.slice(2)}0101`,
              ze = { id: yt, title: Ge, tapeId: rt };
            if (
              (Array.isArray(bt.p2) &&
                (bt.p2 = bt.p2.map((ts) => ({
                  ...ts,
                  speaker: String(ts.speaker || "")
                    .replace(/\|\|/g, "")
                    .replace(/\|/g, "")
                    .trim(),
                  text: String(ts.text || "")
                    .replace(/\|\|/g, "")
                    .replace(/\|/g, "")
                    .trim(),
                }))),
              bt != null &&
                bt.p_trial &&
                typeof bt.p_trial == "object" &&
                (Array.isArray(bt.p_trial.transcript) &&
                  (bt.p_trial.transcript = bt.p_trial.transcript.map((ts) => ({
                    Q: String(
                      (ts == null ? void 0 : ts.Q) ??
                        (ts == null ? void 0 : ts.q) ??
                        "",
                    )
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                    A: String(
                      (ts == null ? void 0 : ts.A) ??
                        (ts == null ? void 0 : ts.a) ??
                        "",
                    )
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                  }))),
                Array.isArray(bt.p_trial.evidence) &&
                  (bt.p_trial.evidence = bt.p_trial.evidence.map((ts) => ({
                    id: String((ts == null ? void 0 : ts.id) ?? "")
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                    name: String((ts == null ? void 0 : ts.name) ?? "")
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                    timestamp: String(
                      (ts == null ? void 0 : ts.timestamp) ?? "",
                    )
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                    Q: String(
                      (ts == null ? void 0 : ts.Q) ??
                        (ts == null ? void 0 : ts.q) ??
                        "",
                    )
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                    A: String(
                      (ts == null ? void 0 : ts.A) ??
                        (ts == null ? void 0 : ts.a) ??
                        "",
                    )
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                  }))),
                (bt.p_trial.transcriptStart = String(
                  bt.p_trial.transcriptStart ?? "",
                )
                  .replace(/\|\|/g, "")
                  .replace(/\|/g, "")
                  .trim())),
              bt != null && bt.p0 && typeof bt.p0 == "object")
            ) {
              const ts = (pt) =>
                  String(pt ?? "")
                    .replace(/\|\|/g, "")
                    .replace(/\|/g, "")
                    .trim(),
                ys = (pt) =>
                  Array.isArray(pt) ? pt.map(ts).filter(Boolean) : [],
                Vs = (pt) => {
                  const qe = ts(pt);
                  if (!qe) return "";
                  const dt = [
                    "家里蹲",
                    "不上学",
                    "没上学",
                    "未上学",
                    "未入学",
                    "在家",
                    "宅",
                    "居家",
                    "无可记录",
                    "不在校",
                  ];
                  for (const xt of dt) if (qe.includes(xt)) return "";
                  return qe === "—" || qe === "无" ? "" : qe;
                };
              bt.p0 = {
                ...bt.p0,
                dossierNo: ts(bt.p0.dossierNo),
                classification: ts(bt.p0.classification),
                status: ts(bt.p0.status),
                lastUpdated: ts(bt.p0.lastUpdated),
                stampText: ts(bt.p0.stampText),
                refText: ts(bt.p0.refText),
                sysId: ts(bt.p0.sysId),
                name: ts(bt.p0.name),
                subjectLabel: ts(bt.p0.subjectLabel),
                intro: ts(bt.p0.intro),
                age: ts(bt.p0.age),
                gender: ts(bt.p0.gender),
                lastKnownLocation: ts(bt.p0.lastKnownLocation),
                educationalBackground: Vs(bt.p0.educationalBackground),
                expelledText: Vs(bt.p0.expelledText),
                habits: ys(bt.p0.habits),
                hobbies: ys(bt.p0.hobbies),
                family: ts(bt.p0.family),
                bucketList: ys(bt.p0.bucketList),
                emergencyContact: bt.p0.emergencyContact
                  ? {
                      invalidatedName: ts(
                        bt.p0.emergencyContact.invalidatedName,
                      ),
                      invalidatedPhone: ts(
                        bt.p0.emergencyContact.invalidatedPhone,
                      ),
                      invalidatedRelation: ts(
                        bt.p0.emergencyContact.invalidatedRelation,
                      ),
                      name: ts(bt.p0.emergencyContact.name),
                      aliasTag: ts(bt.p0.emergencyContact.aliasTag),
                      phone: ts(bt.p0.emergencyContact.phone),
                      relation: ts(bt.p0.emergencyContact.relation),
                      investigatorNote: ts(
                        bt.p0.emergencyContact.investigatorNote,
                      ),
                    }
                  : {},
              };
            }
            (bt.p4 &&
              (bt.p4 = String(bt.p4)
                .replace(/\|\|/g, "")
                .replace(/\|/g, "")
                .trim()),
              bt.p_ending &&
                (bt.p_ending = String(bt.p_ending)
                  .replace(/\|\|/g, "")
                  .replace(/\|/g, "")
                  .trim()),
              (bt.bgm_tracks = {}),
              await be.set(Fo(wt, yt), bt));
            const lt = await be.get("video_app_bgm_library", {}),
              it = ["温馨", "忧郁", "浪漫", "搞笑", "恐怖"];
            let Ht = null;
            for (const ts of it)
              if (Array.isArray(lt[ts]) && lt[ts].length > 0) {
                Ht = lt[ts];
                break;
              }
            if (!Ht || Ht.length === 0) {
              const ts = it
                .flatMap((ys) => (Array.isArray(lt[ys]) ? lt[ys] : []))
                .filter((ys) => ys && ys.url);
              Ht = ts.length > 0 ? ts : [];
            }
            if (Ht.length > 0) {
              const ts = Ht[Math.floor(Math.random() * Ht.length)],
                ys = {
                  id: ts.id || `mem_bgm_${Date.now()}`,
                  name: ts.name || "BGM",
                  url: ts.url || null,
                  ar: [{ name: ts.author || "未知" }],
                },
                pt = {
                  ...bt,
                  bgm_tracks: {
                    p0: ys,
                    p1: ys,
                    p2: ys,
                    p3: ys,
                    p3_5: ys,
                    p_ending: ys,
                    p_trial: ys,
                    p4: ys,
                  },
                };
              await be.set(Fo(wt, yt), pt);
            }
            const is = await be.get(Qc(wt, ns), []);
            (await be.set(Qc(wt, ns), [...is, ze]), Lt.add(yt), qt.add(ns));
            let os = [...Vt];
            if (!new Set(Vt.map((ts) => ts.year)).has(ns)) {
              const ts = Ge.length > 20 ? `${Ge.slice(0, 20)}…` : Ge;
              os.push({ year: ns, title: ts, snippet: Ge });
            }
            const vs = await Promise.all(
              os.map(async (ts) => {
                var qe, dt;
                const ys = await be.get(Qc(wt, ts.year), []),
                  Vs =
                    ys.length > 0
                      ? (
                          ((qe = ys[ys.length - 1]) == null
                            ? void 0
                            : qe.title) ||
                          ((dt = ys[0]) == null ? void 0 : dt.title) ||
                          ""
                        ).trim()
                      : "",
                  pt = Vs
                    ? Vs.length > 20
                      ? `${Vs.slice(0, 20)}…`
                      : Vs
                    : ts.title;
                return { ...ts, title: pt, snippet: Vs || ts.snippet };
              }),
            );
            (await be.set(Qd(wt), vs), L(vs), q(qt), ne(Lt));
          } catch ($t) {
            H(
              $t != null && $t.message
                ? `生成失败：${$t.message}`
                : "生成失败，请重试",
            );
          } finally {
            z(!1);
          }
        }
      },
      Q = async (wt, xs, ot) => {
        try {
          ye(!0);
          const st = await be.get("video_app_bgm_library", {}),
            $t = ["温馨", "忧郁", "浪漫", "搞笑", "恐怖"];
          let Ft = null;
          for (const Vt of $t)
            if (Array.isArray(st[Vt]) && st[Vt].length > 0) {
              Ft = st[Vt];
              break;
            }
          if (!Ft || Ft.length === 0) {
            const Vt = $t
              .flatMap((qt) => (Array.isArray(st[qt]) ? st[qt] : []))
              .filter((qt) => qt && qt.url);
            Ft = Vt.length > 0 ? Vt : [];
          }
          let es = null;
          if (Ft.length > 0) {
            const Vt = Ft[Math.floor(Math.random() * Ft.length)];
            es = {
              id: Vt.id || `mem_bgm_${Date.now()}`,
              name: Vt.name || "BGM",
              url: Vt.url || null,
              ar: [{ name: Vt.author || "未知" }],
            };
          }
          const Jt = {
            ...ot,
            bgm_tracks: es
              ? {
                  p0: es,
                  p1: es,
                  p2: es,
                  p3: es,
                  p3_5: es,
                  p_ending: es,
                  p_trial: es,
                  p4: es,
                }
              : {},
          };
          (await be.set(Fo(wt, xs), Jt), k((Vt) => (Vt === xs && $(Jt), Vt)));
        } catch {
        } finally {
          ye(!1);
        }
      },
      ve = async (wt, xs, ot, st, $t, Ft, es, At, Jt = !1, Vt) => {
        var qt, Lt, Qt, js, cs, Ne, Je, St, Be;
        try {
          if (!Jt) {
            const _e = await be.get(Fo(wt, xs), null);
            if (_e) return _e;
          }
          const { writingStyle: Ke, styleDesc: Nt } = await by(wt, Ft),
            bt =
              Vt != null
                ? String(Vt)
                : ((qt = xs.match(/^s_(\d+)_/)) == null ? void 0 : qt[1]) ||
                  new Date().getFullYear().toString(),
            Ge = [
              {
                sender: "me",
                text: `你是记忆封存室的档案生成系统。请根据以下信息生成档案详情内容。

【重要】视角与时间感：整份档案各页内容必须是「过去那个时候的角色，在当时写下的」——即角色身处那段时光里、用当时的眼光和心境写下的记录，而不是现在的角色在「回忆过去」。禁止用事后回忆的口吻（如「那时我还不知道」「如今想来」「后来才明白」等）。所有文字都应是当时当下的所见、所感、所记。

角色人设：${Ft}
绑定用户人设：${es}
绑定用户名字：${At}
故事标题：${ot}
本故事对应时间盒子年份：${bt}
文风要求：${Nt}
**全文文风统一**：p1、p2（每一轮对话）、p3、p3_5、p_ending、p4、p_trial 的叙述与台词都必须落实上述「文风要求」，并与「${Ke}」标签一致；**禁止只有标题或第一页像该文风，而第二页、结局页写成无关的通用白话**。
要求：
1. 生成各页详情内容，每页都要符合角色人设和用户人设，且全部采用「当时写下的」视角，不是回忆过去。整篇构成一个完整故事：p0 为危险人物档案表格页，p1 为故事前三分之一，p2/p3/p3_5 为中间发展，p_ending 为结局（最后三分之一），p_trial 为庭审记录，p4 为封存说明。
2. 危险人物档案表格页（p0）：以 JSON 对象输出，中文字段必须与 UI 对齐。p0 字段固定为：
   {"dossierNo":"...","classification":"...","status":"...","lastUpdated":"...","stampText":"...","refText":"...","sysId":"...","name":"...","subjectLabel":"...","intro":"...","age":"...","gender":"...","lastKnownLocation":"...","educationalBackground":"...","expelledText":"...","habits":["...","...","..."],"hobbies":["...","...","..."],"family":"...","bucketList":["...","...","..."],"emergencyContact":{"invalidatedName":"...","invalidatedPhone":"...","invalidatedRelation":"...","name":"...","aliasTag":"...","phone":"...","relation":"...","investigatorNote":"..."}}
   该页只输出 p0，不要输出额外叙述/旁白。
3. 第一页（p1）：**讲述完整故事的前三分之一**，800-1200字（或更多），必须用第一人称"我"，以**当时**的视角展开背景、情境与故事开端，符合${Ke}文风。**p1 开头必须明确写出时间（对应本故事时间盒子 ${bt} 年）**。内容要分段，每段之间用\\n\\n分隔，至少3-4段，确保读者能读到一个完整故事的开篇。
3. 第二页（p2）：对话形式，必须生成3-5轮完整对话。格式：[{"speaker":"角色名或'我'","text":"对话内容"}]。**核心要求**：p2 必须是**第一页（p1）已讲述情节的直接延续**——同一故事线、同一时空与情绪下的继续互动；承接 p1 里已写明的具体情境（人物关系、矛盾、地点、事件、物件、未说完的话等），让冲突或情感**再推进一步**。**禁止**把本档案当成「主聊天软件里真实聊天记录的摘录」：p2 台词与话题须完全来自本篇虚构叙事，不得照搬或改写用户与角色在其它界面里的聊天内容。对话是**当时**发生的，自然流畅，符合角色人设，体现角色与${At}在那时的互动。**每一轮对话的语感、节奏、修辞须符合${Ke}文风，并落实全文「文风要求」，与 p1 语言风格一致。**
4. 第三页（p3）：150-250字的叙述，**视角可以是**NPC、其他主角或档案物品的当时所见所感。符合${Ke}文风。用\\n\\n分隔，至少2段。
5. 第三点五页（p3_5）：角色与其他人（不是${At}）的对话，必须生成3-5轮。格式：[{"speaker":"角色名或其他人","text":"对话内容"}]。关联p1情境，自然流畅。
6. 结局页（p_ending）：**讲述完整故事的结局部分（最后三分之一）**，400-600字，第一人称"我"，**当时**写下的口吻，与p1、p2、p3、p3_5形成完整故事弧光。**必须严格符合${Ke}文风，与 p1、p2、p3 的语气与修辞一脉相承**，并落实全文「文风要求」。用\\n\\n分隔，至少2段。此页在封存说明之前展示。
7. 庭审记录页（p_trial）：庭审记录页（证物点击展示 Q/A + 证物清单）。输出为一个 JSON 对象，结构固定为：
   {"transcriptStart":"02:14:00 AM","transcript":[{"Q":"...","A":"..."}...],
    "evidence":[{"id":"E-01","name":"...","timestamp":"...","Q":"...","A":"..."}, ...]}
   其中 transcriptStart 为类似“02:14:00 AM”的时间字符串；transcript 至少4组；transcript 内只能出现 Q 与 A 的对话文字。
     为了匹配 UI 样式，允许在 Q 文本中包含 token [[ITALIC]]（出现则该 Q 行以斜体展示），在 A 文本中包含 token [[CURSOR]]（出现则在该 A 行末尾展示光标方块，token 不算正文）。
     evidence 为证物/搬家物品清单，只输出6项（E-01~E-04 与 I-01~I-02），且每个证物项都必须包含对应点击展示用的 Q 与 A（Q/A 与点击展示一一对应）。
8. 第四页（p4）：150-250字的封存说明，第一人称"我"，**在封存那一刻**写下的自述。格式："档案编号 [SEALED-XXX] 已封存。\\n\\n[自述说明]"。
9. 第五页（p5）：{"narrator":"旁白文字","character":"角色说的话"}。**p5是「回到过去」时用户看到的第一段内容**：旁白和角色的话必须是**过去那个时刻**的场景与角色当时说的话——即用户「回到过去」后首先身处的当时情境（旁白描写当时的环境、氛围或动作），以及角色在那个当下开口说的第一句话。不是事后回忆，要能自然衔接后续用户发话、角色继续对话。
10. 第六页（p6）：{"narrator":"旁白文字","character":"角色说的话"}。同上，也是**当时**的情境与角色在当时说的话，与p5连贯。
11. 返回JSON对象，格式：{"p0":{...},"p1":"...","p2":[...],"p3":"...","p3_5":[...],"p_ending":"...","p_trial":{"transcriptStart":"...","transcript":[{"Q":"...","A":"..."}],"evidence":[{"id":"E-01","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"E-02","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"E-03","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"E-04","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"I-01","name":"...","timestamp":"...","Q":"...","A":"..."},{"id":"I-02","name":"...","timestamp":"...","Q":"...","A":"..."}]},"p4":"...","p5":{...},"p6":{...}}
12. 不要Markdown代码块，直接返回JSON
13. 特别注意：p1、p_ending、p4必须用第一人称"我"，且是「当时写下的」口吻；p3可以是NPC/其他主角/档案物品的视角；p1和p3、p_ending必须分段（用\\n\\n分隔）；p2和p3_5必须生成完整的3-5轮对话，不能省略或简化；**p2 的对话内容必须与 p1 已写故事紧密衔接，不得脱离 p1 另起与档案叙事无关的话题**；p_trial 必须是“transcript 内纯 Q/A 对话 + evidence（证物内也带 Q/A）清单”的庭审记录页结构；p_ending 必须收束故事，再进入 p_trial 庭审记录与 p4 封存。回忆封存室不使用任何API生成音乐，BGM仅从抖音通用音乐库复用。`,
                timestamp: new Date().toISOString(),
              },
            ],
            Le = await gy({
              apiConfig: a,
              contact: st,
              effectiveUser: $t,
              messagesToApi: Ge,
              addApiLog: r,
            });
          if (Le) {
            let _e;
            try {
              _e = JSON.parse(Le);
            } catch {
              const rt = Le.match(/\{[\s\S]*\}/);
              if (rt) _e = JSON.parse(rt[0]);
              else throw new Error("无法解析响应");
            }
            if (
              _e &&
              _e.p0 &&
              typeof _e.p0 == "object" &&
              _e.p1 &&
              Array.isArray(_e.p2) &&
              _e.p2.length >= 3 &&
              _e.p3 &&
              Array.isArray(_e.p3_5) &&
              _e.p3_5.length >= 3 &&
              _e.p_ending &&
              _e.p_trial &&
              Array.isArray(_e.p_trial.transcript) &&
              _e.p_trial.transcript.length >= 4 &&
              Array.isArray(_e.p_trial.evidence) &&
              _e.p_trial.evidence.length >= 6 &&
              _e.p_trial.evidence.length <= 8 &&
              _e.p4
            ) {
              if (
                (Array.isArray(_e.p2) &&
                  (_e.p2 = _e.p2.map((rt) => ({
                    ...rt,
                    speaker: String(rt.speaker || "")
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                    text: String(rt.text || "")
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                  }))),
                _e.p0 && typeof _e.p0 == "object")
              ) {
                const rt = (it) =>
                    String(it ?? "")
                      .replace(/\|\|/g, "")
                      .replace(/\|/g, "")
                      .trim(),
                  ze = _e.p0,
                  lt = (it) =>
                    Array.isArray(it) ? it.map(rt).filter(Boolean) : [];
                _e.p0 = {
                  ...ze,
                  dossierNo: rt(ze.dossierNo),
                  classification: rt(ze.classification),
                  status: rt(ze.status),
                  lastUpdated: rt(ze.lastUpdated),
                  stampText: rt(ze.stampText),
                  refText: rt(ze.refText),
                  sysId: rt(ze.sysId),
                  name: rt(ze.name),
                  subjectLabel: rt(ze.subjectLabel),
                  intro: rt(ze.intro),
                  age: rt(ze.age),
                  gender: rt(ze.gender),
                  lastKnownLocation: rt(ze.lastKnownLocation),
                  educationalBackground: rt(ze.educationalBackground),
                  expelledText: rt(ze.expelledText),
                  habits: lt(ze.habits),
                  hobbies: lt(ze.hobbies),
                  family: rt(ze.family),
                  bucketList: lt(ze.bucketList),
                  emergencyContact: {
                    invalidatedName: rt(
                      (Lt = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : Lt.invalidatedName,
                    ),
                    invalidatedPhone: rt(
                      (Qt = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : Qt.invalidatedPhone,
                    ),
                    invalidatedRelation: rt(
                      (js = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : js.invalidatedRelation,
                    ),
                    name: rt(
                      (cs = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : cs.name,
                    ),
                    aliasTag: rt(
                      (Ne = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : Ne.aliasTag,
                    ),
                    phone: rt(
                      (Je = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : Je.phone,
                    ),
                    relation: rt(
                      (St = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : St.relation,
                    ),
                    investigatorNote: rt(
                      (Be = ze == null ? void 0 : ze.emergencyContact) == null
                        ? void 0
                        : Be.investigatorNote,
                    ),
                  },
                };
              }
              return (
                _e.p_trial &&
                  typeof _e.p_trial == "object" &&
                  (Array.isArray(_e.p_trial.transcript) &&
                    (_e.p_trial.transcript = _e.p_trial.transcript.map(
                      (rt) => ({
                        Q: String(
                          (rt == null ? void 0 : rt.Q) ??
                            (rt == null ? void 0 : rt.q) ??
                            "",
                        )
                          .replace(/\|\|/g, "")
                          .replace(/\|/g, "")
                          .trim(),
                        A: String(
                          (rt == null ? void 0 : rt.A) ??
                            (rt == null ? void 0 : rt.a) ??
                            "",
                        )
                          .replace(/\|\|/g, "")
                          .replace(/\|/g, "")
                          .trim(),
                      }),
                    )),
                  Array.isArray(_e.p_trial.evidence) &&
                    (_e.p_trial.evidence = _e.p_trial.evidence.map((rt) => ({
                      id: String((rt == null ? void 0 : rt.id) ?? "")
                        .replace(/\|\|/g, "")
                        .replace(/\|/g, "")
                        .trim(),
                      name: String((rt == null ? void 0 : rt.name) ?? "")
                        .replace(/\|\|/g, "")
                        .replace(/\|/g, "")
                        .trim(),
                      timestamp: String(
                        (rt == null ? void 0 : rt.timestamp) ?? "",
                      )
                        .replace(/\|\|/g, "")
                        .replace(/\|/g, "")
                        .trim(),
                      Q: String(
                        (rt == null ? void 0 : rt.Q) ??
                          (rt == null ? void 0 : rt.q) ??
                          "",
                      )
                        .replace(/\|\|/g, "")
                        .replace(/\|/g, "")
                        .trim(),
                      A: String(
                        (rt == null ? void 0 : rt.A) ??
                          (rt == null ? void 0 : rt.a) ??
                          "",
                      )
                        .replace(/\|\|/g, "")
                        .replace(/\|/g, "")
                        .trim(),
                    }))),
                  (_e.p_trial.transcriptStart = String(
                    _e.p_trial.transcriptStart ?? "",
                  )
                    .replace(/\|\|/g, "")
                    .replace(/\|/g, "")
                    .trim())),
                _e.p4 &&
                  (_e.p4 = String(_e.p4)
                    .replace(/\|\|/g, "")
                    .replace(/\|/g, "")
                    .trim()),
                _e.p_ending &&
                  (_e.p_ending = String(_e.p_ending)
                    .replace(/\|\|/g, "")
                    .replace(/\|/g, "")
                    .trim()),
                (_e.bgm_tracks = _e.bgm_tracks || {}),
                Jt &&
                  (await be.remove(Fo(wt, xs)),
                  await new Promise((rt) => setTimeout(rt, 100))),
                await be.set(Fo(wt, xs), _e),
                await new Promise((rt) => setTimeout(rt, 50)),
                (await be.get(Fo(wt, xs), null)) ||
                  (await be.set(Fo(wt, xs), _e)),
                _e
              );
            }
          }
        } catch {}
        return null;
      },
      Ve = () => {
        ((ge.current = !0),
          c == null || c(),
          se.current && clearInterval(se.current),
          y === "detail"
            ? C > 1
              ? ((C === 9 || C === 10) &&
                  b &&
                  A &&
                  le.length > 0 &&
                  be.set(Zd(b, A), le),
                M(C - 1))
              : v("stories")
            : y === "stories"
              ? v("timeline")
              : y === "timeline"
                ? v("home")
                : (b && A && le.length > 0 && be.set(Zd(b, A), le), t()));
      },
      Ae = async () => {
        if (!b) return;
        const wt = await QC(b);
        (pe(wt), U(!0));
      },
      te = async () => {
        b && (await be.set(KC(b), ce), U(!1));
      },
      Se = () => {
        pe((wt) => ({
          ...wt,
          presets: [
            ...wt.presets,
            {
              id: `pr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
              name: "新文风",
              text: "",
            },
          ],
        }));
      },
      Fe = (wt, xs, ot) => {
        pe((st) => ({
          ...st,
          presets: st.presets.map(($t) =>
            $t.id === wt ? { ...$t, [xs]: ot } : $t,
          ),
        }));
      },
      $e = (wt) => {
        pe((xs) => ({
          ...xs,
          enabledPresetId: xs.enabledPresetId === wt ? null : wt,
        }));
      },
      tt = (wt) => {
        pe((xs) => ({
          ...xs,
          presets: xs.presets.filter((ot) => ot.id !== wt),
          enabledPresetId:
            xs.enabledPresetId === wt ? null : xs.enabledPresetId,
        }));
      },
      Xe = async (wt) => {
        (N(wt), v("timeline"), z(!1), await G(wt));
      },
      ht = async (wt) => {
        if ((_(wt), v("stories"), Z(!1), b)) {
          const xs = await be.get(Qc(b, wt), []);
          (F(Array.isArray(xs) ? xs : []),
            ne((ot) => {
              const st = new Set(ot),
                $t = new Set(xs.map((Ft) => Ft.id));
              return (
                Array.from(st).forEach((Ft) => {
                  var At;
                  ((At = Ft.match(/^s_(\d+)_/)) == null ? void 0 : At[1]) ===
                    wt &&
                    !$t.has(Ft) &&
                    st.delete(Ft);
                }),
                st
              );
            }));
        }
      },
      Pe = async (wt, xs) => {
        if (!b || !wt) return;
        const ot =
          xs != null && String(xs).trim() !== ""
            ? String(xs)
            : w != null
              ? String(w)
              : "";
        if (ot)
          try {
            const $t = (await be.get(Qc(b, ot), [])).filter(
              (Ft) => Ft.id !== wt,
            );
            if (
              (await be.set(Qc(b, ot), $t),
              await be.remove(Fo(b, wt)),
              await be.remove(Zd(b, wt)),
              F((Ft) => Ft.filter((es) => es.id !== wt)),
              ne((Ft) => {
                const es = new Set(Ft);
                return (es.delete(wt), es);
              }),
              $t.length === 0)
            ) {
              const es = (await be.get(Qd(b), [])).filter(
                (At) => String(At.year) !== String(ot),
              );
              (await be.set(Qd(b), es), L(es));
            } else await G(b);
            A === wt && (v("stories"), k(null), $(null));
          } catch {
          } finally {
            oe(null);
          }
      },
      ut = async (wt, xs) => {
        if (X || !b) return;
        ($(null), k(wt), S(xs), M(1));
        const ot = await be.get(Zd(b, wt), []);
        ie(Array.isArray(ot) ? ot : []);
        const st = V.has(wt),
          $t = f.find((Lt) => Lt.id === b);
        if (!$t) return;
        const Ft = (i == null ? void 0 : i($t)) || {},
          es = $t.setting || "无",
          At = Ft.settings || "无",
          Jt = Ft.name || "用户";
        let Vt = await be.get(Fo(b, wt), null);
        if (!Vt && st)
          for (
            let Lt = 0;
            Lt < 8 &&
            (await new Promise((Qt) => setTimeout(Qt, 200)),
            (Vt = await be.get(Fo(b, wt), null)),
            !Vt);
            Lt++
          );
        if (Vt) {
          ($(Vt),
            v("detail"),
            (!Vt.bgm_tracks || Object.keys(Vt.bgm_tracks || {}).length === 0) &&
              Q(b, wt, Vt));
          return;
        }
        const qt = await ve(b, wt, xs, $t, Ft, es, At, Jt, !0, w);
        qt
          ? (await new Promise((Lt) => setTimeout(Lt, 80)), $(qt), v("detail"))
          : ($({
              p1: "该档案生成失败或尚未就绪，请返回后稍候再试，或重新双击角色名生成时间线。",
              p0: {},
              p2: [],
              p3: "",
              p3_5: [],
              p_ending: "",
              p_trial: {
                transcriptStart: "02:14:00 AM",
                transcript: [],
                evidence: [],
              },
              p4: "",
              p5: { narrator: "", character: "" },
              p6: { narrator: "", character: "" },
              bgm_tracks: {},
            }),
            v("detail"));
      },
      _t = () => {
        ((ge.current = !0), c == null || c(), M(C + 1));
      },
      Ee = async () => {
        ((ge.current = !0), c == null || c());
        const wt = document.getElementById("clock-overlay");
        wt &&
          (wt.classList.add("active", "anim-active"),
          setTimeout(async () => {
            if ((wt.classList.remove("active", "anim-active"), M(9), b && A)) {
              const xs = await be.get(Zd(b, A), []);
              ie(Array.isArray(xs) ? xs : []);
            }
          }, 3800));
      },
      fe = async (wt) => {
        var xs;
        if (!(!wt.trim() || X || !b || !A)) {
          je(!0);
          try {
            const ot = f.find((Ke) => Ke.id === b);
            if (!ot) return;
            const st = (i == null ? void 0 : i(ot)) || {},
              $t = ot.setting || "无",
              Ft = st.settings || "无",
              es = st.name || "用户",
              Jt = ((Ke) => {
                const Nt = Ke.trim(),
                  bt = Nt.match(/^[（(]([^）)]+)[）)](.+)$/);
                if (bt) return { narrator: bt[1].trim(), text: bt[2].trim() };
                const ns = Nt.match(/^(.+)[（(]([^）)]+)[）)]$/);
                return ns
                  ? { narrator: ns[2].trim(), text: ns[1].trim() }
                  : { narrator: null, text: Nt };
              })(wt),
              Vt = {
                type: "user",
                text: Jt.text,
                narrator: Jt.narrator || null,
                timestamp: new Date().toISOString(),
              },
              qt = [...le, Vt];
            (ie(qt),
              setTimeout(() => {
                Te.current && (Te.current.scrollTop = Te.current.scrollHeight);
              }, 50));
            const Lt = ot.nickname || ot.name || "角色",
              { writingStyle: Qt, styleDesc: js } = await by(b, $t),
              cs =
                D != null && D.p5
                  ? `【回到过去第一段（当前情境，用户尚未发话前的开场）】
旁白：${D.p5.narrator || ""}
${Lt}：${typeof D.p5.character == "string" ? D.p5.character : ((xs = D.p5.character) == null ? void 0 : xs.text) || ""}`
                  : "",
              St = [
                {
                  sender: "me",
                  text: `你是记忆封存室的"回到过去"系统。用户正在与角色对话，试图回到过去的记忆。

${`
角色人设：${$t}
绑定用户人设：${Ft}
绑定用户名字：${es}
文风要求：${js}
叙事风格标签：${Qt}

档案故事内容：
第一页（背景）：${(D == null ? void 0 : D.p1) || ""}
第二页（与${es}的对话）：${JSON.stringify((D == null ? void 0 : D.p2) || [])}
第三页（可能是NPC/其他人/档案物品视角的叙述）：${(D == null ? void 0 : D.p3) || ""}
第三点五页（与其他人的对话）：${JSON.stringify((D == null ? void 0 : D.p3_5) || [])}
结局页：${(D == null ? void 0 : D.p_ending) || ""}
第四页（封存说明）：${(D == null ? void 0 : D.p4) || ""}

${
  cs
    ? cs +
      `

`
    : ""
}历史对话（用户发话后与角色的往来，须紧接上文情境继续）：
${qt.map((Ke) =>
  Ke.type === "user"
    ? Ke.narrator
      ? `旁白：${Ke.narrator}
用户：${Ke.text}`
      : `用户：${Ke.text}`
    : Array.isArray(Ke.character)
      ? `旁白：${Ke.narrator}
${Ke.character.map((Nt) => `${Nt.speaker}：${Nt.text}`).join(`
`)}`
      : `旁白：${Ke.narrator}
${Lt}：${Ke.character}`,
).join(`
`)}
`}

重要提示：
- 上文中的「回到过去第一段」是用户进入该场景时首先看到的当时情境与角色开场白；你的回复必须**紧接这一段的内容继续**，保持同一时间点、同一情境，不能跳戏或变成回忆口吻。
- 这是线下面对面聊天，不是线上聊天，是真实的面对面对话
- 角色要回到档案故事发生时的那个时间点，用过去的角色人设和过去的用户人设来回复
- 角色是过去的角色，不是现在的角色
- 用户也是过去那个时间点的用户，不是现在的用户
- 要完全沉浸在档案故事的时间点和情境中
- 这是面对面的真实对话，角色可以看到用户的表情、动作、语气等
- 角色可以扮演角色人设和用户人设中出现的NPC（其他角色），NPC的话要明确标注NPC名字
- 角色名字：${Lt}

用户刚刚说："${wt.trim()}"

请生成一段回复，包含：
1. 旁白文字（必须包含：联想+环境描写+动作描写）
   - 旁白必须用第三人称（他/她/角色名字），不能用第一人称"我"
   - 旁白里绝对不要使用双引号（"或"）
   - 禁止复读用户的任何话，不要重复用户说的话
   - 旁白开头禁止出现承接用户话语的承接语，如"听到xxx的话"、"听到xxx说"、"xxx的话让他/她"、"当xxx说"、"当xxx提到"、"xxx的话让"、"xxx的话使"、"你那一个字"、"你那一句话"、"你这句话"等
   - 旁白开头要直接进入联想、环境描写或动作描写，不要有承接语
   - 禁止出现"这几个字"、"这几个字"、"xxx这几个字带着什么"这样的表述
   - 称呼用户要用第三人称名字（${es}），不要用"你"、"您"等第二人称
   - 联想：用户的话引出了角色想到了过去、道理、诗句、准则、人生经验、对现实过去未来的感叹等，要自然融入旁白中，但不要复读用户的话，不要用承接语开头
   - 环境描写：周围的环境、氛围、光线、声音等
   - 动作描写：角色的动作、表情、姿态、手势等
   - 禁止出现：手术刀、精密仪器、投入石子等不合适的描述
2. 角色说的话（面对面说出来的话）
   - 如果角色要扮演NPC，格式：{"speaker":"NPC名字","text":"NPC说的话"}
   - 如果是角色自己说话，格式：{"speaker":"${Lt}","text":"角色说的话"}
   - 如果只有角色说话，可以简化为字符串："角色说的话"

要求：
- 回复必须紧接「回到过去第一段」的旁白与角色开场继续，同一情境、同一时间点，自然延续对话
- 回复要符合档案故事发生时的角色人设和用户人设（过去的）
- 要关联档案故事的内容和时间点
- 要自然流畅，符合面对面对话的上下文
- 旁白必须包含联想、环境描写、动作描写，要生动自然
- 角色的话要像面对面说出来的一样自然
- 如果对话中涉及NPC，角色要扮演NPC，NPC的话前面要标注NPC名字
- 角色的话前面要标注角色名字（${Lt}）
- 旁白和角色的话都要有情感和深度
- 角色要用过去那个时间点的思维和情感来回复
- 返回JSON格式：
  - 如果只有角色说话：{"narrator":"旁白文字","character":"角色说的话"}
  - 如果有NPC对话：{"narrator":"旁白文字","character":[{"speaker":"${Lt}","text":"角色说的话"},{"speaker":"NPC名字","text":"NPC说的话"}]}
- 不要使用任何特殊符号如 || 或 |，直接返回纯文本
- 旁白不要出现手术刀、精密仪器、投入石子等不合适的描述`,
                  timestamp: new Date().toISOString(),
                },
              ],
              Be = await gy({
                apiConfig: a,
                contact: ot,
                effectiveUser: st,
                messagesToApi: St,
                addApiLog: r,
              });
            if (Be) {
              let Ke;
              try {
                Ke = JSON.parse(Be);
              } catch {
                const bt = Be.match(/\{[\s\S]*\}/);
                if (bt) Ke = JSON.parse(bt[0]);
                else throw new Error("无法解析响应");
              }
              if (Ke && Ke.narrator) {
                let Nt = qr(Ke.narrator || "");
                Nt = Nt.replace(/[""]/g, "").trim();
                const bt = f.find((rt) => rt.id === b),
                  Ge =
                    (bt ? (i == null ? void 0 : i(bt)) || {} : {}).name ||
                    "用户";
                for (
                  [
                    /^[^。！？\n]*(听到|听见|听着)([^。！？\n]*)(的话|说|提到|说道)[^。！？\n]*[，,]/g,
                    /^[^。！？\n]*([^。！？\n]*)(的话|说|提到|说道)(让|使|令|让|使)[^。！？\n]*[，,]/g,
                    /^[^。！？\n]*(当|在)([^。！？\n]*)(的话|说|提到|说道)(时|的时候|后|之后)[^。！？\n]*[，,]/g,
                    /^[^。！？\n]*你(那|这)(一|一)?(个|句)?(字|话|句话)[^。！？\n]*/g,
                    /^[^。！？\n]*[^。！？\n]*(的话|说|提到|说道)[^。！？\n]*[，,]/g,
                  ].forEach((rt) => {
                    Nt = Nt.replace(rt, "").trim();
                  });
                  Nt.startsWith("，") || Nt.startsWith(",");
                )
                  Nt = Nt.substring(1).trim();
                ((Nt = Nt.replace(
                  /[^。！？\n]*这几个字带着[^。！？\n]*/g,
                  "",
                ).trim()),
                  (Nt = Nt.replace(/这几个字/g, "").trim()));
                const _e = wt.trim().toLowerCase();
                (_e &&
                  Nt.toLowerCase().includes(_e) &&
                  (Nt = Nt.replace(new RegExp(wt.trim(), "gi"), "").trim()),
                  (Nt = Nt.replace(/\b你\b/g, Ge)
                    .replace(/\b您\b/g, Ge)
                    .trim()),
                  !Nt &&
                    Ke.narrator &&
                    (Nt = qr(Ke.narrator)
                      .replace(/[""]/g, "")
                      .replace(/这几个字/g, "")
                      .trim()));
                let yt = [];
                if (Array.isArray(Ke.character))
                  yt = Ke.character
                    .map((rt) =>
                      typeof rt == "object" && rt !== null
                        ? {
                            speaker: zo(qr(rt.speaker || rt.name || Lt)),
                            text: zo(
                              qr(rt.text || rt.content || rt.message || ""),
                            ),
                          }
                        : typeof rt == "string"
                          ? { speaker: Lt, text: zo(qr(rt)) }
                          : null,
                    )
                    .filter((rt) => rt && rt.speaker && rt.text);
                else if (Ke.character) {
                  if (
                    typeof Ke.character == "object" &&
                    Ke.character !== null
                  ) {
                    const rt = zo(
                        qr(Ke.character.speaker || Ke.character.name || Lt),
                      ),
                      ze = zo(
                        qr(
                          Ke.character.text ||
                            Ke.character.content ||
                            Ke.character.message ||
                            Ke.character.character ||
                            "",
                        ),
                      );
                    rt && ze && (yt = [{ speaker: rt, text: ze }]);
                  } else if (typeof Ke.character == "string") {
                    const rt = zo(qr(Ke.character));
                    rt && (yt = [{ speaker: Lt, text: rt }]);
                  }
                }
                if (Nt && yt.length > 0) {
                  const rt = {
                      type: "character",
                      narrator: Nt,
                      character: yt,
                      timestamp: new Date().toISOString(),
                    },
                    ze = [...qt, rt];
                  (ie(ze),
                    await be.set(Zd(b, A), ze),
                    setTimeout(() => {
                      Te.current &&
                        (Te.current.scrollTop = Te.current.scrollHeight);
                    }, 100),
                    setTimeout(() => {
                      Te.current &&
                        (Te.current.scrollTop = Te.current.scrollHeight);
                    }, 300),
                    setTimeout(() => {
                      Te.current &&
                        (Te.current.scrollTop = Te.current.scrollHeight);
                    }, 500));
                }
              }
            }
          } catch {
          } finally {
            je(!1);
          }
        }
      },
      He = (wt, xs, ot = null, st = "", $t = "", Ft = null) => {
        const es = document.getElementById(xs);
        if (!es) return;
        (se.current && (clearInterval(se.current), (se.current = null)),
          (es.innerHTML = ""));
        let At = 0,
          Jt = null;
        const Vt = () => {
          if (Ft != null && Ft.current) return;
          if (At >= wt.length) {
            const Je = es.querySelector(".avg-cursor");
            Je && Je.classList.remove("avg-cursor");
            return;
          }
          const qt = wt[At];
          if (!qt || !qt.speaker || !qt.text) {
            (At++, setTimeout(Vt, 100));
            return;
          }
          const Lt = String(qt.speaker)
              .replace(/\|\|/g, "")
              .replace(/\|/g, "")
              .trim(),
            Qt = String(qt.text).replace(/\|\|/g, "").replace(/\|/g, "").trim(),
            js = document.createElement("div");
          ((js.className = "mb-4"),
            (js.innerHTML = `<span class="text-gray-400 mono text-sm mr-2">[${Lt}]</span> <span></span>`),
            es.appendChild(js));
          let cs = 0;
          const Ne = js.querySelector("span:last-child");
          if (!Ne) {
            (At++, setTimeout(Vt, 100));
            return;
          }
          (Jt && clearInterval(Jt),
            (Jt = setInterval(() => {
              if (Ft != null && Ft.current) {
                clearInterval(Jt);
                return;
              }
              if (cs < Qt.length)
                ((Ne.textContent += Qt[cs]),
                  Ne.classList.add("avg-cursor"),
                  cs++);
              else {
                (clearInterval(Jt),
                  (Jt = null),
                  Ne.classList.remove("avg-cursor"),
                  At++);
                const Je = () => {
                    (Ft != null && Ft.current) || setTimeout(Vt, 300);
                  },
                  St =
                    st && (Lt === "我" || Lt === st) && Lt !== ($t || "用户");
                ot && Qt && o && St
                  ? o(Qt, { ...ot, vol: 1.2, playbackVolume: 1 })
                      .then(Je)
                      .catch(Je)
                  : setTimeout(Vt, St ? 300 : 1e3);
              }
            }, 50)),
            (se.current = Jt));
        };
        setTimeout(() => Vt(), 100);
      };
    (l.useEffect(() => {
      var wt,
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
        Ge;
      if (y === "detail" && C === 3 && D != null && D.p2) {
        ((ge.current = !1),
          se.current && (clearInterval(se.current), (se.current = null)),
          u == null || u());
        const Le = f.find((is) => is.id === b),
          _e =
            (Le == null ? void 0 : Le.nickname) ||
            (Le == null ? void 0 : Le.name) ||
            "角色",
          rt = (Le ? (i == null ? void 0 : i(Le)) || {} : {}).name || "用户",
          ze = n == null ? void 0 : n.find((is) => is.contactId === b),
          lt =
            (ot =
              ((wt = ze == null ? void 0 : ze.settings) == null
                ? void 0
                : wt.voiceId) ||
              ((xs = ze == null ? void 0 : ze.settings) == null
                ? void 0
                : xs.ttsVoiceId)) == null
              ? void 0
              : ot.trim(),
          it =
            (d == null ? void 0 : d.provider) === "minimax" &&
            lt &&
            (st = d == null ? void 0 : d.minimax) != null &&
            st.apiKey &&
            ((($t = d == null ? void 0 : d.minimax) != null && $t.groupId) ||
              ((Ft = ze == null ? void 0 : ze.settings) != null &&
                Ft.minimaxGroupId))
              ? {
                  voiceId: lt,
                  groupId:
                    ((es = ze == null ? void 0 : ze.settings) == null
                      ? void 0
                      : es.minimaxGroupId) ||
                    ((At = d == null ? void 0 : d.minimax) == null
                      ? void 0
                      : At.groupId),
                  minimaxModel:
                    (Jt = ze == null ? void 0 : ze.settings) == null
                      ? void 0
                      : Jt.minimaxModel,
                }
              : (d == null ? void 0 : d.provider) === "elevenlabs" &&
                  (Vt = d == null ? void 0 : d.elevenlabs) != null &&
                  Vt.key &&
                  (lt ||
                    ((qt = d == null ? void 0 : d.elevenlabs) != null &&
                      qt.voiceId))
                ? {
                    voiceId:
                      lt ||
                      ((Lt = d == null ? void 0 : d.elevenlabs) == null
                        ? void 0
                        : Lt.voiceId),
                  }
                : null,
          Ht = setTimeout(() => {
            He(D.p2, "avg-text-container", it, _e, rt, ge);
          }, 500);
        return () => {
          ((ge.current = !0),
            clearTimeout(Ht),
            c == null || c(),
            se.current && (clearInterval(se.current), (se.current = null)));
        };
      }
      if (y === "detail" && C === 5 && D != null && D.p3_5) {
        ((ge.current = !1),
          se.current && (clearInterval(se.current), (se.current = null)),
          u == null || u());
        const Le = f.find((it) => it.id === b),
          _e =
            (Le == null ? void 0 : Le.nickname) ||
            (Le == null ? void 0 : Le.name) ||
            "角色",
          yt = n == null ? void 0 : n.find((it) => it.contactId === b),
          rt =
            (cs =
              ((Qt = yt == null ? void 0 : yt.settings) == null
                ? void 0
                : Qt.voiceId) ||
              ((js = yt == null ? void 0 : yt.settings) == null
                ? void 0
                : js.ttsVoiceId)) == null
              ? void 0
              : cs.trim(),
          ze =
            (d == null ? void 0 : d.provider) === "minimax" &&
            rt &&
            (Ne = d == null ? void 0 : d.minimax) != null &&
            Ne.apiKey &&
            (((Je = d == null ? void 0 : d.minimax) != null && Je.groupId) ||
              ((St = yt == null ? void 0 : yt.settings) != null &&
                St.minimaxGroupId))
              ? {
                  voiceId: rt,
                  groupId:
                    ((Be = yt == null ? void 0 : yt.settings) == null
                      ? void 0
                      : Be.minimaxGroupId) ||
                    ((Ke = d == null ? void 0 : d.minimax) == null
                      ? void 0
                      : Ke.groupId),
                  minimaxModel:
                    (Nt = yt == null ? void 0 : yt.settings) == null
                      ? void 0
                      : Nt.minimaxModel,
                }
              : (d == null ? void 0 : d.provider) === "elevenlabs" &&
                  (bt = d == null ? void 0 : d.elevenlabs) != null &&
                  bt.key &&
                  (rt ||
                    ((ns = d == null ? void 0 : d.elevenlabs) != null &&
                      ns.voiceId))
                ? {
                    voiceId:
                      rt ||
                      ((Ge = d == null ? void 0 : d.elevenlabs) == null
                        ? void 0
                        : Ge.voiceId),
                  }
                : null,
          lt = setTimeout(() => {
            He(D.p3_5, "avg-text-container-2", ze, _e, "", ge);
          }, 500);
        return () => {
          ((ge.current = !0),
            clearTimeout(lt),
            c == null || c(),
            se.current && (clearInterval(se.current), (se.current = null)));
        };
      }
      return (
        y === "detail" &&
          C === 9 &&
          setTimeout(() => {
            const Le = document.getElementById("time-input");
            Le && Le.focus();
          }, 300),
        () => {
          ((ge.current = !0),
            c == null || c(),
            se.current && clearInterval(se.current));
        }
      );
    }, [y, C, D, n, d, b]),
      l.useEffect(() => {
        var Jt, Vt, qt, Lt, Qt, js, cs, Ne, Je, St, Be, Ke;
        if (y !== "detail" || C !== 8 || !(D != null && D.p4)) return;
        const wt = n == null ? void 0 : n.find((Nt) => Nt.contactId === b),
          xs =
            (qt =
              ((Jt = wt == null ? void 0 : wt.settings) == null
                ? void 0
                : Jt.voiceId) ||
              ((Vt = wt == null ? void 0 : wt.settings) == null
                ? void 0
                : Vt.ttsVoiceId)) == null
              ? void 0
              : qt.trim(),
          ot =
            (d == null ? void 0 : d.provider) === "minimax" &&
            ((Lt = d == null ? void 0 : d.minimax) == null
              ? void 0
              : Lt.apiKey) &&
            (((Qt = d == null ? void 0 : d.minimax) == null
              ? void 0
              : Qt.groupId) ||
              ((js = wt == null ? void 0 : wt.settings) == null
                ? void 0
                : js.minimaxGroupId)) &&
            xs,
          st =
            (d == null ? void 0 : d.provider) === "elevenlabs" &&
            ((cs = d == null ? void 0 : d.elevenlabs) == null
              ? void 0
              : cs.key) &&
            (xs ||
              ((Ne = d == null ? void 0 : d.elevenlabs) == null
                ? void 0
                : Ne.voiceId));
        if (!ot && !st) return;
        const $t = String(D.p4).replace(/\|\|/g, "").replace(/\|/g, "").trim();
        if (!$t) return;
        const Ft = $t.split(/\n\n+/),
          es =
            Ft.length > 1
              ? Ft.slice(1)
                  .join(
                    `

`,
                  )
                  .trim()
              : $t;
        if (!es) return;
        u == null || u();
        const At = ot
          ? {
              voiceId: xs,
              groupId:
                ((Je = wt == null ? void 0 : wt.settings) == null
                  ? void 0
                  : Je.minimaxGroupId) ||
                ((St = d == null ? void 0 : d.minimax) == null
                  ? void 0
                  : St.groupId),
              minimaxModel:
                (Be = wt == null ? void 0 : wt.settings) == null
                  ? void 0
                  : Be.minimaxModel,
              vol: 1.2,
              playbackVolume: 1,
            }
          : {
              voiceId:
                xs ||
                ((Ke = d == null ? void 0 : d.elevenlabs) == null
                  ? void 0
                  : Ke.voiceId),
              playbackVolume: 1,
            };
        return (
          o(es, At).catch(() => {}),
          () => {
            c == null || c();
          }
        );
      }, [y, C, D == null ? void 0 : D.p4, n, d, b]),
      l.useEffect(
        () => (
          y === "detail" ? x == null || x(0.5) : x == null || x(1),
          () => {
            x == null || x(1);
          }
        ),
        [y, x],
      ),
      l.useEffect(() => {
        if (y === "detail" && D != null && D.bgm_tracks) {
          let wt = null;
          (C === 1
            ? (wt = D.bgm_tracks.p0)
            : C === 2
              ? (wt = D.bgm_tracks.p1)
              : C === 3
                ? (wt = D.bgm_tracks.p2)
                : C === 4
                  ? (wt = D.bgm_tracks.p3)
                  : C === 5
                    ? (wt = D.bgm_tracks.p3_5)
                    : C === 6
                      ? (wt = D.bgm_tracks.p_ending)
                      : C === 7
                        ? (wt = D.bgm_tracks.p_trial)
                        : C === 8 && (wt = D.bgm_tracks.p4),
            wt && (!m || m.id !== wt.id) && p(wt));
        } else y !== "detail" && h && g();
      }, [y, C, D]));
    const Ie = J.find((wt) => wt.id === b);
    return e.jsxs("div", {
      className: "memory-archive-app",
      children: [
        e.jsx("div", { className: "noise-overlay" }),
        e.jsx("div", {
          id: "clock-overlay",
          children: e.jsxs("div", {
            className: "clock-wrapper",
            children: [
              e.jsx("div", { className: "clock-ring-outer" }),
              e.jsx("div", { className: "clock-ring-inner" }),
              e.jsxs("div", {
                className: "clock-numerals",
                children: [
                  e.jsx("div", {
                    className: "roman-num n-12",
                    children: "XII",
                  }),
                  e.jsx("div", { className: "roman-num n-3", children: "III" }),
                  e.jsx("div", { className: "roman-num n-6", children: "VI" }),
                  e.jsx("div", { className: "roman-num n-9", children: "IX" }),
                ],
              }),
              e.jsx("div", { className: "hand hand-hour" }),
              e.jsx("div", { className: "hand hand-minute" }),
              e.jsx("div", { className: "center-dot" }),
            ],
          }),
        }),
        e.jsxs("nav", {
          id: "navbar",
          className: `z-50 flex justify-between items-start pointer-events-none transition-opacity duration-500 ${y === "home" ? "opacity-0" : "opacity-100"} ${y === "detail" ? "detail-top-bar" : "mix-blend-difference"}`,
          children: [
            e.jsx("button", {
              onClick: Ve,
              className:
                "pointer-events-auto mono text-xs text-white/80 hover:text-white transition-colors py-1",
              children: "back",
            }),
            e.jsxs("div", {
              className: "navbar-right flex flex-col items-end gap-1",
              children: [
                y === "detail" &&
                  e.jsx("div", {
                    className:
                      "detail-progress-indicator flex space-x-1.5 pointer-events-none",
                    children: [1, 2, 3, 4, 5, 6, 7, 8].map((wt) =>
                      e.jsx(
                        "div",
                        {
                          id: `step-${wt}`,
                          className: `w-6 sm:w-8 h-0.5 transition-colors flex-shrink-0 ${wt <= C ? "bg-white" : "bg-white/20"}`,
                        },
                        wt,
                      ),
                    ),
                  }),
                e.jsxs("div", {
                  className: "mono text-[10px] tracking-widest text-white/50",
                  children: [
                    "封存室 //",
                    " ",
                    e.jsx("span", {
                      id: "nav-context",
                      className: "text-white",
                      children:
                        y === "detail" ? "MEMORY DIVE" : y.toUpperCase(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        y === "detail" &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", { className: "detail-mask-top", "aria-hidden": !0 }),
              e.jsx("div", {
                className: "detail-mask-bottom",
                "aria-hidden": !0,
              }),
            ],
          }),
        ee &&
          e.jsx("div", {
            className:
              "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm",
            onClick: () => H(null),
            children: e.jsxs("div", {
              className:
                "bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 max-w-sm w-[90%] shadow-xl",
              onClick: (wt) => wt.stopPropagation(),
              children: [
                e.jsx("p", {
                  className: "cn-serif text-white text-lg mb-2",
                  children: "回忆封存室",
                }),
                e.jsx("p", {
                  className:
                    "mono text-sm text-gray-300 mb-6 whitespace-pre-line",
                  children: ee,
                }),
                e.jsx("div", {
                  className: "flex justify-end",
                  children: e.jsx("button", {
                    onClick: () => H(null),
                    className:
                      "px-4 py-2 mono text-xs border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors",
                    children: "确定",
                  }),
                }),
              ],
            }),
          }),
        Y &&
          b &&
          e.jsxs("div", {
            className:
              "fixed inset-0 z-[200] flex flex-col bg-[#050505] text-white",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "mem-archive-style-editor-title",
            children: [
              e.jsxs("header", {
                className:
                  "flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 pt-[max(50px,env(safe-area-inset-top))]",
                children: [
                  e.jsxs("h2", {
                    id: "mem-archive-style-editor-title",
                    className:
                      "cn-serif flex min-w-0 items-center gap-2 text-lg font-medium md:text-xl",
                    children: [
                      e.jsx("span", {
                        className:
                          "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]",
                        children: e.jsx(yu, {
                          className: "h-[1.125rem] w-[1.125rem]",
                          strokeWidth: 1.75,
                          "aria-hidden": !0,
                        }),
                      }),
                      e.jsxs("span", {
                        className: "truncate",
                        children: [
                          "文风设定 · ",
                          (Ie == null ? void 0 : Ie.name) || "角色",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => U(!1),
                    className:
                      "mono inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-3 py-1.5 text-xs hover:bg-white/10",
                    children: [
                      e.jsx(Ts, {
                        className: "h-3.5 w-3.5 opacity-90",
                        strokeWidth: 2,
                        "aria-hidden": !0,
                      }),
                      "关闭",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "min-h-0 flex-1 overflow-y-auto px-4 py-4 pb-safe",
                children: [
                  e.jsx("div", {
                    className: "space-y-4",
                    children: ce.presets.map((wt) => {
                      const xs = ce.enabledPresetId === wt.id;
                      return e.jsxs(
                        "div",
                        {
                          className:
                            "rounded-xl border border-white/10 bg-white/[0.03] p-3 md:p-4 space-y-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex flex-wrap items-center gap-3",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  role: "switch",
                                  "aria-checked": xs,
                                  onClick: () => $e(wt.id),
                                  className: `relative h-7 w-12 shrink-0 rounded-full transition-colors ${xs ? "bg-emerald-600/90" : "bg-white/15"}`,
                                  children: e.jsx("span", {
                                    className: `absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${xs ? "left-5" : "left-0.5"}`,
                                  }),
                                }),
                                e.jsx("span", {
                                  className: "mono text-[10px] text-dim",
                                  children: xs ? "已启用" : "未启用",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: wt.name,
                                  onChange: (ot) =>
                                    Fe(wt.id, "name", ot.target.value),
                                  placeholder: "预设名称（如：冷冽纪实）",
                                  className:
                                    "flex-1 min-w-[8rem] rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-white/30",
                                }),
                                e.jsxs("div", {
                                  className: "flex shrink-0 items-center gap-2",
                                  children: [
                                    e.jsxs("button", {
                                      type: "button",
                                      onClick: () => tt(wt.id),
                                      className:
                                        "mono inline-flex items-center gap-1 text-xs text-red-400/90 hover:text-red-300",
                                      children: [
                                        e.jsx(_n, {
                                          className: "h-3.5 w-3.5",
                                          strokeWidth: 2,
                                          "aria-hidden": !0,
                                        }),
                                        "删除",
                                      ],
                                    }),
                                    e.jsxs("button", {
                                      type: "button",
                                      onClick: () => te(),
                                      className:
                                        "mono inline-flex items-center gap-1 rounded-md border border-white/30 bg-white/10 px-2.5 py-1.5 text-[11px] font-medium text-white/95 hover:bg-white/20",
                                      children: [
                                        e.jsx(oo, {
                                          className: "h-3.5 w-3.5",
                                          strokeWidth: 2,
                                          "aria-hidden": !0,
                                        }),
                                        "保存",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("textarea", {
                              value: wt.text,
                              onChange: (ot) =>
                                Fe(wt.id, "text", ot.target.value),
                              placeholder:
                                "文风说明：句式、语气、修辞偏好、禁忌等，将注入生成提示词。",
                              rows: 5,
                              className:
                                "w-full resize-y rounded-lg border border-white/15 bg-black/50 px-3 py-2 text-sm leading-relaxed outline-none focus:border-white/30 placeholder:text-white/25",
                            }),
                          ],
                        },
                        wt.id,
                      );
                    }),
                  }),
                  e.jsxs("div", {
                    className: "mono mt-4 flex flex-wrap items-stretch gap-2",
                    children: [
                      e.jsxs("button", {
                        type: "button",
                        onClick: Se,
                        className:
                          "inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 py-3 text-xs tracking-widest text-white/70 hover:bg-white/5",
                        children: [
                          e.jsx(ea, {
                            className: "h-4 w-4 shrink-0 opacity-90",
                            strokeWidth: 2,
                            "aria-hidden": !0,
                          }),
                          "新增文风预设",
                        ],
                      }),
                      ce.presets.length === 0
                        ? e.jsxs("button", {
                            type: "button",
                            onClick: () => te(),
                            className:
                              "inline-flex shrink-0 items-center gap-1.5 rounded-md border border-white/30 bg-white/10 px-4 py-3 text-[11px] font-medium text-white/95 hover:bg-white/20",
                            children: [
                              e.jsx(oo, {
                                className: "h-3.5 w-3.5",
                                strokeWidth: 2,
                                "aria-hidden": !0,
                              }),
                              "保存",
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            ],
          }),
        e.jsxs("main", {
          id: "app",
          className: "min-h-screen w-full relative",
          children: [
            y === "home" &&
              e.jsxs("section", {
                className:
                  "page-section active bg-black px-6 pt-40 md:px-20 max-w-screen-2xl mx-auto flex flex-col min-h-screen",
                children: [
                  e.jsxs("header", {
                    className:
                      "mb-20 reveal-text flex justify-between items-end shrink-0",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h1", {
                            className:
                              "cn-serif text-5xl md:text-7xl text-white mb-2 cursor-pointer hover:text-white/90 transition-colors",
                            onClick: t,
                            role: "button",
                            tabIndex: 0,
                            onKeyDown: (wt) => wt.key === "Enter" && t(),
                            children: "记忆封存室",
                          }),
                          e.jsx("p", {
                            className: "mono text-xs text-dim tracking-[0.3em]",
                            children: "机密档案协议",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "hidden md:block text-right",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-2 h-2 bg-white/20 rounded-full inline-block mr-2 animate-pulse",
                          }),
                          e.jsx("span", {
                            className: "mono text-xs text-dim",
                            children: "系统就绪",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "space-y-0 border-t border-white/10 pb-safe pb-20 overflow-y-auto relative z-0",
                    id: "archive-index-list",
                    ref: ue,
                    style: re ? { maxHeight: `${re}px` } : void 0,
                    children: J.map((wt, xs) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "archive-row cursor-pointer py-8 md:py-12 px-4 md:px-8 flex items-center justify-between group reveal-text",
                          style: { animationDelay: `${xs * 0.1}s` },
                          onClick: () => Xe(wt.id),
                          children: e.jsxs("div", {
                            className:
                              "archive-row-content flex items-baseline gap-8 md:gap-16 w-full",
                            children: [
                              e.jsxs("span", {
                                className:
                                  "mono text-xs md:text-sm text-dim w-24",
                                children: ["FILE_0", xs + 1],
                              }),
                              e.jsx("div", {
                                className: "flex-grow",
                                children: e.jsx("h3", {
                                  className:
                                    "cn-serif text-3xl md:text-5xl text-white mb-2 whitespace-nowrap group-hover:translate-x-4 transition-transform duration-500",
                                  children: wt.name,
                                }),
                              }),
                              e.jsx("div", {
                                className:
                                  "mono text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                children: "[ 点击解封 ]",
                              }),
                            ],
                          }),
                        },
                        wt.id,
                      ),
                    ),
                  }),
                  e.jsx("div", {
                    className:
                      "w-full h-20 shrink-0 bg-black border-none relative z-10 pointer-events-none",
                    "aria-hidden": !0,
                  }),
                ],
              }),
            y === "timeline" &&
              Ie &&
              e.jsx("section", {
                className:
                  "page-section active bg-black pt-40 pb-20 px-6 md:px-20",
                children: e.jsxs("div", {
                  className: "max-w-5xl mx-auto",
                  children: [
                    e.jsxs("header", {
                      className:
                        "mb-16 flex flex-wrap items-center gap-x-4 gap-y-2 reveal-text",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-1.5 h-1.5 bg-white rounded-full shrink-0",
                        }),
                        e.jsx("h2", {
                          className:
                            "cn-serif text-3xl md:text-4xl text-white italic cursor-pointer hover:text-gray-300 transition-colors shrink-0",
                          onDoubleClick: () => we(Ie.id),
                          title: "双击生成时间线",
                          children: Ie.name,
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-1 min-w-0 flex-wrap items-center justify-end gap-2 gap-y-1",
                          children: [
                            e.jsx("span", {
                              className:
                                "mono text-xs text-dim whitespace-nowrap",
                              children: P
                                ? "/// 生成中..."
                                : "/// 双击名字生成时间线",
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () => Ae(),
                              className:
                                "group shrink-0 rounded-lg p-1.5 text-white/75 transition-colors hover:bg-white/10 hover:text-white",
                              title: "文风设定",
                              "aria-label": "文风设定",
                              children: e.jsx(yu, {
                                className:
                                  "h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5",
                                strokeWidth: 1.75,
                                "aria-hidden": !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    I.length === 0 &&
                      !P &&
                      e.jsxs("div", {
                        className: "text-center py-20 text-gray-500",
                        children: [
                          e.jsx("p", {
                            className: "mono text-sm",
                            children: "暂无时间线数据",
                          }),
                          e.jsx("p", {
                            className: "mono text-xs mt-2",
                            children: "双击角色名字生成时间线",
                          }),
                        ],
                      }),
                    e.jsx("div", {
                      className:
                        "flex flex-col border-b border-white/5 pb-safe",
                      id: "timeline-list",
                      children: I.map((wt, xs) => {
                        const ot = Array.from(V).some(($t) => {
                            const Ft = $t.match(/^s_(\d+)_/);
                            return Ft && Ft[1] === wt.year;
                          }),
                          st = K.has(wt.year) && ot;
                        return e.jsxs(
                          "div",
                          {
                            className:
                              "timeline-box cursor-pointer group py-8 md:py-10 relative",
                            onClick: () => ht(wt.year),
                            children: [
                              st &&
                                e.jsx("div", {
                                  className:
                                    "absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse z-10 cursor-pointer",
                                  onClick: ($t) => {
                                    ($t.stopPropagation(),
                                      q((Ft) => {
                                        const es = new Set(Ft);
                                        return (es.delete(wt.year), es);
                                      }));
                                  },
                                  title: "点击隐藏标记",
                                }),
                              e.jsxs("div", {
                                className:
                                  "flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 px-4",
                                children: [
                                  e.jsx("div", {
                                    className: "w-32 flex-shrink-0",
                                    children: e.jsx("span", {
                                      className:
                                        "cinema text-5xl md:text-6xl text-[#333] group-hover:text-white transition-colors duration-500",
                                      children: wt.year,
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "flex-grow",
                                    children: [
                                      e.jsx("h3", {
                                        className:
                                          "cn-serif text-2xl text-white mb-2 group-hover:translate-x-2 transition-transform duration-500",
                                        children: wt.title,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "cn-serif text-sm text-dim max-w-lg decode-blur",
                                        children: wt.snippet,
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-24 text-right opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: e.jsx("span", {
                                      className:
                                        "mono text-[10px] tracking-widest text-white border border-white/20 px-3 py-1 rounded-full",
                                      children: "进入",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          xs,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            y === "stories" &&
              w &&
              e.jsxs("section", {
                className: "page-section active bg-[#050505] pt-32 pb-20",
                children: [
                  e.jsxs("div", {
                    className:
                      "sticky z-20 text-center mb-8 pointer-events-none mix-blend-difference",
                    style: {
                      top: "calc(max(env(safe-area-inset-top), 48px) + 2px)",
                    },
                    children: [
                      e.jsx("span", {
                        className: "mono text-[10px] text-dim block mb-1",
                        children: "档案年份",
                      }),
                      e.jsx("h2", {
                        className: "cinema text-5xl text-white tracking-widest",
                        children: w,
                      }),
                    ],
                  }),
                  O &&
                    e.jsx("div", {
                      className: "text-center py-20 text-gray-500",
                      children: e.jsx("p", {
                        className: "mono text-sm",
                        children: "生成中...",
                      }),
                    }),
                  !O &&
                    B.length === 0 &&
                    e.jsx("div", {
                      className: "text-center py-20 text-gray-500",
                      children: e.jsx("p", {
                        className: "mono text-sm",
                        children: "暂无故事数据",
                      }),
                    }),
                  e.jsxs("div", {
                    className: "film-track-container",
                    children: [
                      e.jsx("div", { className: "film-perforation left-0" }),
                      e.jsx("div", { className: "film-perforation right" }),
                      e.jsx("div", {
                        className: "px-8 md:px-12 py-12",
                        children: B.map((wt, xs) => {
                          const ot = V.has(wt.id),
                            st = () => {
                              ((W.current = !0),
                                oe({ id: wt.id, title: wt.title, year: w }));
                            };
                          return e.jsxs(
                            "div",
                            {
                              className:
                                "film-frame-glass cursor-pointer reveal-text group relative",
                              style: {
                                animationDelay: `${xs * 0.1}s`,
                                pointerEvents: "auto",
                              },
                              onClick: ($t) => {
                                if (($t.stopPropagation(), W.current)) {
                                  W.current = !1;
                                  return;
                                }
                                ut(wt.id, wt.title);
                              },
                              onContextMenu: ($t) => {
                                ($t.preventDefault(),
                                  $t.stopPropagation(),
                                  st());
                              },
                              onTouchStart: () => {
                                ((W.current = !1),
                                  (ke.current = setTimeout(st, 500)));
                              },
                              onTouchEnd: () => {
                                ke.current &&
                                  (clearTimeout(ke.current),
                                  (ke.current = null));
                              },
                              onTouchMove: () => {
                                ke.current &&
                                  (clearTimeout(ke.current),
                                  (ke.current = null));
                              },
                              children: [
                                ot &&
                                  e.jsx("div", {
                                    className:
                                      "absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse z-10 cursor-pointer",
                                    onClick: ($t) => {
                                      ($t.stopPropagation(),
                                        $t.preventDefault(),
                                        ne((Ft) => {
                                          var Jt;
                                          const es = new Set(Ft);
                                          if (!es.has(wt.id)) return Ft;
                                          es.delete(wt.id);
                                          const At = String(
                                            ((Jt = wt.id.match(/^s_(\d+)_/)) ==
                                            null
                                              ? void 0
                                              : Jt[1]) ||
                                              w ||
                                              "",
                                          );
                                          return (
                                            At &&
                                              b &&
                                              (Array.from(es).some((qt) => {
                                                const Lt =
                                                  qt.match(/^s_(\d+)_/);
                                                return Lt && Lt[1] === At;
                                              }) ||
                                                setTimeout(() => {
                                                  q((qt) => {
                                                    const Lt = new Set(qt);
                                                    return (Lt.delete(At), Lt);
                                                  });
                                                }, 0)),
                                            es
                                          );
                                        }));
                                    },
                                    title: "点击隐藏标记",
                                  }),
                                e.jsx("div", {
                                  className:
                                    "flex justify-between items-start mb-8 opacity-40",
                                  children: e.jsxs("div", {
                                    className:
                                      "mono text-[10px] tracking-widest border border-white/20 px-2 py-0.5 rounded",
                                    children: ["EVIDENCE #", wt.tapeId],
                                  }),
                                }),
                                e.jsx("h3", {
                                  className:
                                    "cn-serif text-3xl md:text-4xl text-white/90 group-hover:text-white transition-colors mb-2",
                                  children: wt.title,
                                }),
                                e.jsx("div", {
                                  className:
                                    "flex justify-end border-t border-white/5 pt-4 mt-6",
                                  children: e.jsx("span", {
                                    className:
                                      "mono text-[10px] text-gray-400 group-hover:text-white transition-colors",
                                    children: "调阅档案 →",
                                  }),
                                }),
                              ],
                            },
                            wt.id,
                          );
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "fixed bottom-8 left-1/2 -translate-x-1/2 mono text-[10px] text-dim opacity-50 pointer-events-none",
                    children: "/// 卷尾",
                  }),
                  R &&
                    e.jsx("div", {
                      className:
                        "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm",
                      onClick: () => oe(null),
                      children: e.jsxs("div", {
                        className:
                          "bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 max-w-sm w-[90%] shadow-xl",
                        onClick: (wt) => wt.stopPropagation(),
                        children: [
                          e.jsx("p", {
                            className: "cn-serif text-white text-lg mb-2",
                            children: "删除此故事？",
                          }),
                          e.jsx("p", {
                            className: "mono text-xs text-dim mb-6 truncate",
                            children: R.title,
                          }),
                          e.jsxs("div", {
                            className: "flex gap-3 justify-end",
                            children: [
                              e.jsx("button", {
                                onClick: () => oe(null),
                                className:
                                  "px-4 py-2 mono text-xs border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors",
                                children: "取消",
                              }),
                              e.jsx("button", {
                                onClick: () => Pe(R.id, R.year),
                                className:
                                  "px-4 py-2 mono text-xs bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors",
                                children: "删除",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            y === "detail" &&
              e.jsxs("section", {
                className: `page-section active bg-[#080808] px-6 py-40 md:px-12 min-h-screen flex flex-col items-center ${D && m ? "pb-24" : ""}`,
                children: [
                  e.jsxs("div", {
                    id: "detail-stage",
                    className:
                      "w-full max-w-4xl relative min-h-[60vh] flex flex-col justify-center",
                    children: [
                      xe &&
                        e.jsx("div", {
                          className:
                            "fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10",
                          children: e.jsx("span", {
                            className: "text-xs text-white animate-pulse",
                            children: "正在修复档案音频...",
                          }),
                        }),
                      C === 1 &&
                        D &&
                        e.jsxs("div", {
                          className: "w-full max-w-6xl mx-auto",
                          children: [
                            e.jsx("header", {
                              className:
                                "border-b border-zinc-900 pb-4 mb-10 px-1",
                              children: e.jsxs("div", {
                                className:
                                  "flex flex-col md:flex-row justify-between items-start md:items-end gap-4",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("h1", {
                                        className:
                                          "cn-serif text-4xl md:text-5xl text-white tracking-wide",
                                        children: "私密档案",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "mono text-xs text-gray-500 mt-2 tracking-[0.2em] uppercase",
                                        children: [
                                          "机密等级：",
                                          ((Ce = D == null ? void 0 : D.p0) ==
                                          null
                                            ? void 0
                                            : Ce.classification) || "仅限视线",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "text-right mono text-xs text-gray-500 space-y-1",
                                    children: [
                                      e.jsxs("p", {
                                        children: [
                                          "状态：",
                                          " ",
                                          e.jsx("span", {
                                            className:
                                              "text-red-700 font-bold border border-red-900/60 px-1",
                                            children:
                                              ((Re =
                                                D == null ? void 0 : D.p0) ==
                                              null
                                                ? void 0
                                                : Re.status) || "极度危险",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        children:
                                          ((De = D == null ? void 0 : D.p0) ==
                                          null
                                            ? void 0
                                            : De.lastUpdated) ||
                                          "2026.11.04 03:00AM",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("main", {
                              className:
                                "grid grid-cols-1 lg:grid-cols-12 gap-10",
                              children: [
                                e.jsxs("aside", {
                                  className:
                                    "lg:col-span-5 flex flex-col gap-8",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "relative bg-[#111] border border-[#222] p-2 mugshot-container",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute top-4 left-4 z-10 stamp text-xs border-red-800 text-red-800 bg-black/50 backdrop-blur-sm",
                                          children:
                                            ((at = D == null ? void 0 : D.p0) ==
                                            null
                                              ? void 0
                                              : at.stampText) || "目标锁定",
                                        }),
                                        (() => {
                                          const wt = f.find(
                                              ($t) => $t.id === b,
                                            ),
                                            xs =
                                              wt == null ? void 0 : wt.avatar,
                                            ot = `https://api.dicebear.com/7.x/notionists/svg?seed=${b || "role"}`,
                                            st = xs || ot;
                                          return e.jsx("img", {
                                            src: st,
                                            alt: "档案头像",
                                            className:
                                              "w-full h-auto object-cover aspect-[3/4]",
                                            style: {
                                              filter:
                                                "grayscale(100%) contrast(120%) brightness(0.8)",
                                            },
                                          });
                                        })(),
                                        e.jsx("div", {
                                          className:
                                            "absolute bottom-4 right-4 mix-blend-difference text-white mono text-xs text-right",
                                          children: e.jsxs("p", {
                                            children: [
                                              "系统ID：",
                                              ((ft =
                                                D == null ? void 0 : D.p0) ==
                                              null
                                                ? void 0
                                                : ft.sysId) || "0x9A4F",
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 gap-4 mono text-sm border-t border-white/10 pt-6",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "block text-gray-500 mb-1 text-xs",
                                              children: "年龄",
                                            }),
                                            e.jsxs("span", {
                                              className: "text-white text-xl",
                                              children: [
                                                ((vt =
                                                  D == null ? void 0 : D.p0) ==
                                                null
                                                  ? void 0
                                                  : vt.age) || "19",
                                                e.jsx("span", {
                                                  className:
                                                    "text-gray-500 text-sm ml-1",
                                                  children: "(估)",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "block text-gray-500 mb-1 text-xs",
                                              children: "性别",
                                            }),
                                            e.jsx("span", {
                                              className: "text-white text-xl",
                                              children:
                                                ((Oe =
                                                  D == null ? void 0 : D.p0) ==
                                                null
                                                  ? void 0
                                                  : Oe.gender) || "M",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className: "col-span-2",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "block text-gray-500 mb-1 text-xs",
                                              children: "最后已知地点",
                                            }),
                                            e.jsx("span", {
                                              className: "text-white",
                                              children:
                                                ((Qe =
                                                  D == null ? void 0 : D.p0) ==
                                                null
                                                  ? void 0
                                                  : Qe.lastKnownLocation) ||
                                                "—",
                                            }),
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className: "col-span-2",
                                          children: (() => {
                                            var st, $t;
                                            const wt = String(
                                              ((st =
                                                D == null ? void 0 : D.p0) ==
                                              null
                                                ? void 0
                                                : st.educationalBackground) ??
                                                "",
                                            ).trim();
                                            if (!(!!wt && wt !== "—"))
                                              return null;
                                            const ot = String(
                                              (($t =
                                                D == null ? void 0 : D.p0) ==
                                              null
                                                ? void 0
                                                : $t.expelledText) ?? "",
                                            ).trim();
                                            return e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "block text-gray-500 mb-1 text-xs",
                                                  children: "教育经历",
                                                }),
                                                e.jsx("span", {
                                                  className: "text-white",
                                                  children: wt,
                                                }),
                                                !!ot &&
                                                  e.jsx("span", {
                                                    className:
                                                      "ml-2 text-red-600 text-xs border border-red-900/60 px-1 inline-block",
                                                    children: ot,
                                                  }),
                                              ],
                                            });
                                          })(),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("article", {
                                  className:
                                    "lg:col-span-7 flex flex-col gap-10 lg:pl-6 border-l border-zinc-900",
                                  children: [
                                    e.jsxs("section", {
                                      children: [
                                        e.jsx("h2", {
                                          className:
                                            "cn-serif text-6xl md:text-8xl font-black text-white tracking-tighter mb-2",
                                          children:
                                            ((Ye = D == null ? void 0 : D.p0) ==
                                            null
                                              ? void 0
                                              : Ye.name) || "—",
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "cn-serif text-gray-500 text-xl md:text-2xl tracking-widest uppercase mb-6",
                                          children: [
                                            "主题：",
                                            ((Ze = D == null ? void 0 : D.p0) ==
                                            null
                                              ? void 0
                                              : Ze.subjectLabel) || "危险目标",
                                          ],
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "text-gray-400 leading-relaxed text-justify relative pl-6 border-l-2 border-red-900",
                                          children: e.jsx("p", {
                                            className:
                                              "cn-serif text-gray-300 text-xl leading-relaxed",
                                            children:
                                              ((Ue =
                                                D == null ? void 0 : D.p0) ==
                                              null
                                                ? void 0
                                                : Ue.intro) || "",
                                          }),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900 pt-8",
                                      children: [
                                        e.jsxs("section", {
                                          className: "space-y-3",
                                          children: [
                                            e.jsxs("h3", {
                                              className:
                                                "mono text-gray-500 text-xs tracking-[0.2em] uppercase",
                                              children: [
                                                "习惯 ",
                                                e.jsx("span", {
                                                  className: "text-gray-700",
                                                  children: "— 行为习惯",
                                                }),
                                              ],
                                            }),
                                            e.jsx("ul", {
                                              className:
                                                "text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-inside marker:text-red-900",
                                              children: (
                                                ((me =
                                                  D == null ? void 0 : D.p0) ==
                                                null
                                                  ? void 0
                                                  : me.habits) || []
                                              )
                                                .slice(0, 6)
                                                .map((wt, xs) =>
                                                  e.jsx(
                                                    "li",
                                                    { children: wt },
                                                    xs,
                                                  ),
                                                ),
                                            }),
                                          ],
                                        }),
                                        e.jsxs("section", {
                                          className: "space-y-3",
                                          children: [
                                            e.jsxs("h3", {
                                              className:
                                                "mono text-gray-500 text-xs tracking-[0.2em] uppercase",
                                              children: [
                                                "偏好 ",
                                                e.jsx("span", {
                                                  className: "text-gray-700",
                                                  children: "— 特殊偏好",
                                                }),
                                              ],
                                            }),
                                            e.jsx("ul", {
                                              className:
                                                "text-gray-300 text-sm leading-relaxed space-y-2 list-disc list-inside marker:text-red-900",
                                              children: (
                                                ((jt =
                                                  D == null ? void 0 : D.p0) ==
                                                null
                                                  ? void 0
                                                  : jt.hobbies) || []
                                              )
                                                .slice(0, 6)
                                                .map((wt, xs) =>
                                                  e.jsx(
                                                    "li",
                                                    { children: wt },
                                                    xs,
                                                  ),
                                                ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 gap-8 border-t border-zinc-900 pt-8",
                                      children: [
                                        e.jsxs("section", {
                                          className:
                                            "flex flex-col md:flex-row gap-4 md:items-center bg-[#0a0a0a] p-4 border border-[#222]",
                                          children: [
                                            e.jsxs("h3", {
                                              className:
                                                "mono text-gray-500 text-xs tracking-[0.2em] w-32 shrink-0",
                                              children: [
                                                "家属 ",
                                                e.jsx("span", {
                                                  className: "text-gray-700",
                                                  children: "— 家属情况",
                                                }),
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-gray-300 text-sm leading-relaxed",
                                              children:
                                                ((Gt =
                                                  D == null ? void 0 : D.p0) ==
                                                null
                                                  ? void 0
                                                  : Gt.family) || "",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("section", {
                                          className: "space-y-4",
                                          children: [
                                            e.jsxs("h3", {
                                              className:
                                                "mono text-gray-500 text-xs tracking-[0.2em] uppercase",
                                              children: [
                                                "残页解析（心愿清单） ",
                                                e.jsx("span", {
                                                  className: "text-gray-700",
                                                  children: "— 缴获手记残页",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "p-6 border border-gray-800 bg-[#050505] relative overflow-hidden",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "absolute -right-6 -top-6 text-9xl text-[#111] font-serif-en italic select-none",
                                                  children: "纸页",
                                                }),
                                                e.jsx("ol", {
                                                  className:
                                                    "relative z-10 text-gray-400 font-serif-en italic text-lg space-y-3 list-decimal list-inside",
                                                  children: (
                                                    ((Pt =
                                                      D == null
                                                        ? void 0
                                                        : D.p0) == null
                                                      ? void 0
                                                      : Pt.bucketList) || []
                                                  ).map((wt, xs) =>
                                                    e.jsx(
                                                      "li",
                                                      { children: wt },
                                                      xs,
                                                    ),
                                                  ),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("section", {
                                      className:
                                        "mt-4 border-2 border-red-900/30 p-6 relative bg-gradient-to-br from-[#1a0505] to-black",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute -top-3 left-6 bg-black px-2 text-red-700 mono text-xs font-bold tracking-widest",
                                          children: "关键信息覆盖 // 变更记录",
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-gray-400 text-sm mb-4 font-bold",
                                          children: "紧急联系人资料",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex flex-col md:flex-row gap-6 md:gap-12 items-start",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "opacity-50 space-y-1 relative",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "absolute inset-0 flex items-center justify-center z-10 pointer-events-none",
                                                  children: e.jsx("span", {
                                                    className:
                                                      "stamp border-red-600 text-red-600 text-[10px] transform rotate-12 bg-black/80",
                                                    children: "作废",
                                                  }),
                                                }),
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm text-gray-500",
                                                  children: [
                                                    "姓名：",
                                                    e.jsx("span", {
                                                      className:
                                                        "line-through text-gray-500",
                                                      children:
                                                        ((ct =
                                                          (Wt =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : Wt.emergencyContact) ==
                                                        null
                                                          ? void 0
                                                          : ct.invalidatedName) ||
                                                        "",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm text-gray-500",
                                                  children: [
                                                    "电话：",
                                                    e.jsx("span", {
                                                      className:
                                                        "line-through text-gray-500",
                                                      children:
                                                        ((fs =
                                                          (Kt =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : Kt.emergencyContact) ==
                                                        null
                                                          ? void 0
                                                          : fs.invalidatedPhone) ||
                                                        "",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm text-gray-500",
                                                  children: [
                                                    "关系：",
                                                    e.jsx("span", {
                                                      className:
                                                        "line-through text-gray-500",
                                                      children:
                                                        ((ae =
                                                          (gt =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : gt.emergencyContact) ==
                                                        null
                                                          ? void 0
                                                          : ae.invalidatedRelation) ||
                                                        "",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "hidden md:flex items-center text-red-800 cn-serif",
                                              children: "信息更新",
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "border-l-2 border-red-700 pl-4 space-y-2 flex-1",
                                              children: [
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm text-gray-400",
                                                  children: [
                                                    "现登记姓名：",
                                                    e.jsx("span", {
                                                      className:
                                                        "text-white text-xl font-bold tracking-widest ml-2",
                                                      children:
                                                        ((It =
                                                          (nt =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : nt.emergencyContact) ==
                                                        null
                                                          ? void 0
                                                          : It.name) || "",
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-xs text-red-600 border border-red-600 px-1 ml-2 rounded-sm",
                                                      children:
                                                        ((bs =
                                                          (Xt =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : Xt.emergencyContact) ==
                                                        null
                                                          ? void 0
                                                          : bs.aliasTag) ||
                                                        "未核验别名",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm text-gray-400 mono",
                                                  children: [
                                                    "联系电话：",
                                                    e.jsx("span", {
                                                      className:
                                                        "text-white text-lg ml-2",
                                                      children:
                                                        ((_s =
                                                          (ss =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : ss.emergencyContact) ==
                                                        null
                                                          ? void 0
                                                          : _s.phone) || "",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "text-sm text-gray-400 mt-2 flex items-start",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "whitespace-nowrap mt-1",
                                                      children: "身份/关系：",
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-white bg-red-900/20 px-2 py-1 ml-2 border border-red-900/50 leading-relaxed",
                                                      children:
                                                        ((Bs =
                                                          (qs =
                                                            D == null
                                                              ? void 0
                                                              : D.p0) == null
                                                            ? void 0
                                                            : qs.emergencyContact) ==
                                                        null