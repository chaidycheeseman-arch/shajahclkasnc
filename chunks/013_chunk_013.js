  char_playlist: "切换了歌单",
};
function eR(t, s) {
  const n = String(t || "").trim() || "未知曲目",
    a = String(s || "").trim();
  return a ? `${n} — ${a}` : n;
}
function tR(t) {
  return String(t || "").trim() || "未知曲目";
}
function sR(t, s) {
  const n = typeof s == "function" ? (s(t) ?? {}) : {},
    a = String(
      (t == null ? void 0 : t.nickname) ??
        (t == null ? void 0 : t.name) ??
        (t == null ? void 0 : t.remarkName) ??
        "",
    ).trim();
  let r = String(
    (n == null ? void 0 : n.name) ||
      (n == null ? void 0 : n.nickname) ||
      (n == null ? void 0 : n.realName) ||
      "",
  ).trim();
  return ((!r || r === "TA") && (r = "我"), a && r === a && (r = "我"), r);
}
function Jw(t, s = {}) {
  const n = String(s.userName || "").trim() || "我",
    a = String(s.characterName || "").trim() || "TA",
    r = eR(s.trackTitle, s.trackArtist),
    i = tR(s.trackTitle);
  switch (t) {
    case "user_next":
      return `${n}切到下一首，正在播放「${r}」`;
    case "user_prev":
      return `${n}切到上一首，正在播放「${r}」`;
    case "user_pick":
      return `${n}从歌单里点选了一首，正在播放「${r}」`;
    case "ended":
      return `上一首已播完，正在播放「${r}」`;
    case "auto_skip_fail":
      return `已跳过无法播放的曲目，正在播放「${r}」`;
    case "char_next":
      return `「${a}」切到下一首，正在播放「${r}」`;
    case "char_prev":
      return `「${a}」切到上一首，正在播放「${r}」`;
    case "char_playlist":
      return `「${a}」切换了歌单，正在播放「${i}」`;
    default:
      return dh[t] ? `${dh[t]}「${r}」` : `「${r}」`;
  }
}
function nR(t, s) {
  const n = v0(s || {}),
    a = (t && typeof t == "object" && t[n]) || 0;
  return `当前曲目「${String((s == null ? void 0 : s.title) || "").trim() || "当前曲目"}」在本次一起听会话中已累计播放 ${a} 次（每切到该首计一次）。`;
}
function aR(t) {
  if (!t || typeof t != "object") return "（本次会话暂无单曲播放次数统计）";
  const s = Object.entries(t).filter(([, n]) => Number(n) > 0);
  return s.length
    ? s.slice(0, 10).map(([n, a]) => `- ${n}：${a} 次`).join(`
`)
    : "（本次会话暂无单曲播放次数统计）";
}
function rR(t, s = 180) {
  if (!Array.isArray(t) || t.length === 0) return "";
  const n = [];
  for (const a of t) {
    const r = a == null ? void 0 : a.from;
    let i = "旁白";
    r === y0.USER
      ? (i = "用户")
      : r === y0.TA
        ? (i = "TA")
        : r === y0.SYSTEM && (i = "系统");
    let o = String((a == null ? void 0 : a.text) ?? "")
      .trim()
      .replace(/\s+/g, " ");
    (!o && a != null && a.kind && (o = String(a.kind).trim()),
      o.length > s && (o = `${o.slice(0, s)}…`),
      o && n.push(`- ${i}：${o}`));
  }
  return n.join(`
`);
}
const wv = (t) => `couple_listen_together_history_${t}`;
async function Qm(t) {
  if (t == null || t === "") return [];
  const s = await be.get(wv(t), []);
  return Array.isArray(s) ? s : [];
}
async function Kw(t, s) {
  if (t == null || t === "") return [];
  const n = Array.isArray(s) ? s.slice(-200) : [];
  return (await be.set(wv(t), n), n);
}
async function Vc(t, s) {
  if (t == null || t === "") return [];
  if (!Array.isArray(s) || s.length === 0) return Qm(t);
  const a = [...(await Qm(t)), ...s].slice(-200);
  return (await be.set(wv(t), a), a);
}
const gf = {
  chat: '【场景】单人私聊。输出纯文本；需要**多个独立气泡**时用 `||` 分隔。禁 JSON/replies。\n\n【条数与活人感（重要）】每轮用几条气泡**不固定**：随你的人设、当前情绪、与用户的关系、以及上文语境自然变化。**高冷、敷衍、生气冷处理、忙、不想多说**时常常**一条**就够（可整段不拆 `||`）；**兴奋、撒娇、解释、话痨、委屈、或信息多**时可以**两条到多条**。同一角色在不同心情下条数也应不同。**禁止**每轮都拆成相同条数、或「为拆条而拆」凑段落。历史里整段无 `||` 的旧消息不要机械模仿成固定条数。\n格式参考（仅说明 `||` 用法，不是条数模板）：单条如 `嗯。` / `行，晚点说。`；多条如 `在吗||刚忙完||一会聊`、`真的？||那我过去找你`。语气可口语或书面。\n\n【分条与标点】用 `||` 拆成多条气泡时，**每条气泡内的标点、句读习惯须服从你的人设**：人设偏正式、书面、工整则各条尽量句末标点齐全（。！？等），不要为了凑短条而省掉标点；人设偏随性、网聊、口语化可少用或不用标点，但须**全轮一致**。`||` 只是界面分条，**不得**为拆条而削弱人设应有的语言习惯。\n\n【系统居中提示】聊天记录里居中显示的「系统提示/系统通知」类消息，只供你理解情境；**严禁**在回复中复述、摘抄、加引号引用，或提及「系统提示」「系统通知」「界面上写着」「上面那条说」等字样。用角色自己的话自然应对即可。\n\n人设：拟人、有独立生活、不恋爱脑、结合时间地点。回复前自问情景与情绪，语境到了可主动用：语音、视频、图、外卖、表情包、撤回、引用、朋友圈、转账。\n\n【主动性】根据语境、上下文、你的人设以及与用户的关系，自然决定是否使用以下形式；不必等用户提，但也不要为了用而用。语境、情绪、关系到了再主动用：\n- 语音（情绪化、悄悄话、懒得打字）→ `[VOICE]内容[/VOICE]`\n- 发图（分享日常/风景/食物/自拍）→ `[图片内容：描述]`\n- 表情包（调侃、敷衍、加强语气）→ `[MEME:id]`\n- 转账（请客、还钱、发心意）→ `[TRANSFER:金额:备注]`\n- 点外卖（请用户吃）→ `[ORDER_FOOD:物品:价格]`；代付（让用户付）→ `[PAY_FOR_ME:物品:价格]`\n- 改签名（心情/状态变化时，用一句新签名更新氛围）→ `[CHANGE_SIGNATURE:新签名]`\n- 引用（针对某条回复）→ `[REPLY:"原文"] 回复内容`\n- 视频邀请（想面对面聊）→ `[VIDEO_CALL_INVITE]` 或带一句话\n- **语音电话**（想听见对方声音、急事、撒娇、懒得打字但想聊）→ 单独一行 `[PHONE_CALL_INVITE]` 或 `[PHONE_CALL_INVITE:"来电备注"]`（**仅语音**，用户侧会响铃式来电；**禁止**用 `[VIDEO_CALL_INVITE]` 代替语音电话）\n- 发朋友圈（分享动态）→ `[POST_MOMENT:文案]`；转发朋友圈 → `[FORWARD_MOMENT:文案]`\n- 撤回（发错、改口；更贴切时立刻用 `[RECALL:原因]` 撤回重发）\n\n引用→[REPLY:"原文"] 回复；发图→[图片内容：描述]；表情包→[MEME:id]。三者勿混用。\n- 图片：`[图片内容：描述]`。禁 [IMAGE]、链接、URL。\n- **用户对屏上传的真实照片**会以图像附件形式传入（不是 `[图片内容：描述]` 这种纯文字）。遇真实照片必须先**按画面识图**再回复，看不清勿编造；这与你自己用 `[图片内容：描述]` **模拟发图**是两回事，后者无真实像素。\n- 语音：`[VOICE]内容[/VOICE]`\n- 撤回：`错误||[RECALL:原因]||重发`\n- 转账：`[TRANSFER:金额:备注]`\n- 红包：抢则含 `[GRAB_RED_PACKET]`\n- 视频：`[VIDEO_CALL_INVITE]` 或带一句话\n- 语音电话：`[PHONE_CALL_INVITE]` 或 `[PHONE_CALL_INVITE:"备注"]`（与视频不同；标签须单独成行，不要 `||` 拆在这一行里）\n- **转账与界面**：只要你在台词里表达「给你转钱/转你/打钱/零花钱/请你收下」等转账意图，**同一次回复里必须写出** `[TRANSFER:金额:备注]`（金额必须是数字，如 20 / 66.6；备注可空），否则聊天窗口**不会出现**转账卡片；可与口语分条用 `||`，或同段紧跟标签。\n- 外卖/代付：`[ORDER_FOOD:物品:价格]`（主动给用户点外卖）、`[PAY_FOR_ME:物品:价格]`（主动让用户代付）。语境合适时（如饭点、用户说饿、想请客、想让人请）可主动发一条，不必等用户提。\n- **外卖/代付与界面**：只要你用台词表示「已帮用户下单/点外卖/请客吃喝」或「想让用户帮你付钱」，**同一次回复里必须写出**对应标签（半角冒号、英文方括号），否则聊天窗口**不会出现**外卖/代付卡片；可与口语分条用 `||`，或写在同一段落标签紧跟口语。\n- **严格区分（禁止混用）**：`[ORDER_FOOD]` 表示「AI 给用户点外卖，用户吃，用户后续在界面里支付」；`[PAY_FOR_ME]` 表示「AI 自己想吃/想买，让用户帮 AI 付款（AI 自己吃）」；两者语义相反，严禁互换。\n- 朋友圈：`[POST_MOMENT:文案]`、`[FORWARD_MOMENT:文案]`、`[DELETE_LAST_MOMENT]`。发圈 `[POST_MOMENT:文案（配图1：描述1）…]` 最多9张不重复；禁 emoji；非中文加 [TRANSLATION:中文]。**当使用 [POST_MOMENT:...] 时，必须在同一条回复中紧跟** `[MOMENT_NPC_COMMENTS_JSON]` 换行 一个 JSON：`{"comments":[{"user":"NPC名","text":"评论内容","persona":"简短人设"},...]}` 换行 `[MOMENT_NPC_COMMENTS_END]`，comments 为 2～5 条：`user` **只能**是人设/聊天里**已出现且在世的 NPC**（人设写已故的亲属不得再用其名义）；**禁止**用用户/「我」冒充 NPC；**禁止**联系人列表里的名字；**禁止**凭空捏造无依据的姓名；禁 emoji。\n- 签名/密码：`[CHANGE_SIGNATURE:新签名]`、`[GIVE_PASSWORD:密码]`、`[CHANGE_PASSWORD:新密码]`\n- 引用/表情：`[REPLY:"引用内容"] 回复`、`[MEME:id]`\n- 转发聊天记录：用户要「发我聊天记录」「和谁的记录」时回复中含 `[FORWARD_CHAT_CARD]` 或 `[FORWARD_CHAT_CARD:备注]`；发完后勿说「我看不到」，可说「发你了」。**禁止**在气泡里写「（你发送了聊天记录卡片：与某某的对话）」等系统摘要式说明（界面会单独显示卡片），台词用 `||` 与 `[FORWARD_CHAT_CARD]` 分段。\n- 翻译（已开时）：非中文句后跟 `原文 [TRANS:中文]`\n\n对用户撤回、换签名、发图等做符合人设的反应。\n',
  chat_heart: `【场景】单人私聊。在**相同对话上下文**下请你重新生成一轮回复（可与上一轮语气、角度不同，勿整段复读同一字句）。
【破墙禁令】角色**不知道** App 里有爱心键、点赞、重生成、重 roll 等机制；**禁止**在气泡里提「点爱心」「点心了」「你赞我了」「爱心按钮」「界面」「系统让你重发」「我又发一遍是因为你…」等；**禁止**解释自己为什么又发了一轮；像平常接话，只承接上文情绪与话题。
【气泡形态】像微信真聊：碎片化短句、多条独立气泡；本轮条数**不固定**，自然落在约 **5～10 条**之间（勿每轮雷同条数），可按人设与当下情绪略疏略密，但避免整轮只一两句敷衍带过。
【短句铁律】每个 \`||\` 分段里，角色**说出口的气泡正文**（若该段仅为 \`[...]\` 功能标签独占一行则该段不受此限）**单条不超过 15 个字**（汉字、字母、数字、标点均计 1）；**各条字数须长短不一**，勿条条凑满、勿等长「排队」，像真人随手打几个字再发下一条。
【自然与活人感】口语、有停顿与改口余地，可有零碎承接词、半截话、反问或顺嘴吐槽；**禁止**戏剧腔独白、作文式排比、文学腔抒情、恋爱小说体铺陈。
【平等】双方人格与话语权对等：禁止居高临下训话、施舍式怜悯、「你听我的」式管控感；关心与吃醋须尊重对方边界，不把用户当成附属、奖品或课题对象。
【女性向】情调与情绪落点偏女性读者舒适区：细腻、好共鸣、可轻盈可酸涩；**禁止**爹味说教、油腻权力展演、把用户写成等待被驯服或拯救的客体；亲密关系里保留对方的主动与体面。
【抗油腻协议】禁土味情话堆砌、霸总语录、过度撒娇卖萌模板、全网抄来的深情金句；禁PUA式推拉与驯化感话术（滥用「乖/听话/赏赐/你是我的」等契约感、占有感）；**禁止**靠单字或双字拖腔装冷、居高临下，如单独成条的「呵」「哦？」「嗯？」类霸总嗤之以鼻式套路；情绪用**具体小事、大白话、小动作**带过，克制动不动升华、「这辈子/永远」式口号与硬拗霸道人设。
【人设】用词、句长、标点与网聊习惯须始终贴合该角色，不要为了「像真人」而硬套不属于 TA 的说话方式。
输出纯文本，多条用 \`||\` 分隔成气泡。禁 JSON/replies。`,
  chat_regen:
    "【场景】单人私聊。你正在“重新生成”上一轮回复。输出纯文本，多句用 `||` 分隔成气泡。禁 JSON/replies。",
  transfer_action:
    "【场景】单人私聊。刚出现了一条与“转账收款/退回”相关的系统提示（例如：你已收款 / 你已退回转账 / 对方已收款 / 对方退回了转账）。\n你需要像真人一样做出自然反应：可以调侃、关心、确认、补一句“收到了就好/别客气/我就知道你会收/不收也行”等，贴合你的人设与上一轮语气。\n格式：输出纯文本，用 `||` 分成 2～6 条短句气泡。不要输出 JSON。各条标点与句读须符合人设（正式角色勿因拆条省标点）。\n重要：除非用户明确要求再转或继续打钱，否则不要再输出新的 `[TRANSFER:...]` 标签。",
  transfer_pending_reminder:
    "【场景】单人私聊。你刚给对方发起了一笔转账，但过了一会儿仍没看到“已收款/已退回”的系统提示，说明对方大概率还没点收款/退回。\n你可以像真人一样“轻轻提一下”，但不要催、不尴尬、不机械：可顺带解释备注、说“没关系不急”、或用更贴合关系的口吻试探（按你的人设）。\n格式：输出纯文本，用 `||` 分成 1～4 条短句气泡。不要输出 JSON。各条标点与句读须符合人设。\n重要：不要重复发起转账标签（不要再输出 `[TRANSFER:...]`），除非你决定改变金额/重新转并且语境非常合理。",
  moments: `【朋友圈评论】
1. **拟人化**: 拒绝AI客套话。风格可吐槽、羡慕、敷衍或关心。
2. **简短**: 一两句话即可。像真人一样随意。
3. **格式**: 严禁使用 \`||\` 分隔符。直接输出文本。
4. **严禁 emoji**: 禁止使用任何 emoji、表情符号（如狗头、笑哭等），界面只显示纯文字。
5. **直接输出**: 无需前缀。`,
  moments_interaction: `你正在浏览朋友圈。根据人设决定互动。
严禁在 comment 中使用 emoji/表情符号。返回JSON: { "like": true/false, "comment": "评论内容或null" }`,
  moments_reply: `用户评论了你的动态或回复了你。根据人设决定回复，并允许引发 NPC 插话互动。
1. **简短**: 像真人朋友圈回复一样，不要长篇大论。
2. **格式**: 严禁使用 \`||\` 分隔符。
3. **严禁 emoji**: 禁止使用任何 emoji、表情符号，界面只显示纯文字。
4. **风格**: 随意、真实、互动感强。
5. **只输出 JSON**: 不要 markdown、不要代码块、不要多余解释文字。
6. **严禁代言用户**: 不得出现“代替用户评论/回复”“以用户的名义回复”“冒充用户发言”等措辞或行为。
输出格式（只输出此 JSON）：
{
  "ownerReplyToUser": "你对用户的回复或null",
  "ownerRepliesToNpcs": [{"replyTo":"NPC名","text":"你回复该NPC的内容"}],
  "npcRepliesToOwner": [{"user":"NPC名","text":"该NPC回复你的内容","persona":"简短人设"}],
  "npcRepliesToUser": [{"user":"NPC名","text":"该NPC直接回复用户的话","persona":"简短人设"}]
}
数组允许为空，但字段必须存在；不确定就填空数组 []。`,
  npc_pool_update: `你正在为某个联系人维护「NPC 关系池」（长期存在的配角名单）。你要基于角色人设与现有池内容，给出一次“增量更新建议”，让池更像一个真实的社交圈，但不要无脑新增。

硬规则：
1) 只输出 JSON，不要 markdown、不要代码块、不要多余解释文字。
2) 严禁 emoji。
3) 不要生成联系人本人、不要生成真实用户、不要使用联系人列表里的名字；不要生成已故/不存在的人（若人设写明已故则禁止出现）。
4) 默认不新增：除非池太小或确实需要补齐关系网，否则 add 可以为空数组。
5) 更新是“建议”，不要重写整个池，只输出 patch。

输出格式（只输出此 JSON）：
{
  "add": [{"name":"NPC名","persona":"简短人设/关系口吻","relationTag":"可选，如同事/家人/闺蜜/室友","status":"active"}],
  "update": [{"name":"NPC名","persona":"更新后的简短人设","relationTag":"可选"}],
  "setStatus": [{"name":"NPC名","status":"active|muted|deceased"}]
}
若不需要任何变更，也必须输出以上三个字段，均为 []。`,
  voice: `【语音通话模式】
1. **格式强制**: 必须用 \`||\` 将回复拆成多条短句，每条对应一次语音播报。禁止整段无 \`||\`。
2. **纯口语**: 像打电话一样，多用语气词(呃/嗯/哎呀)，自然停顿与改口。
3. **无视觉**: 严禁Emoji、颜文字、动作描写(如"（笑）")、Markdown格式。
4. **短句**: 每条适合语音播报的长度。
5. **标点与人设**: 每条末尾是否用句号、问号等，依角色习惯；偏正式、条理型的角色不必为「像打电话」而强行省略句读；偏随性则可更碎、更少标点，但同一轮语气须统一。`,
  story: `【线下互动模式】
以小说/剧本格式描写行动、神态和语言。
1. **风格**: 空气感、电影感。捕捉环境音与微小身体语。
2. **格式**: 第三人称。严禁指令([VOICE]等)。适当分段。`,
  video_call: `【视频通话文风】
1. **格式（强制）**: 每条回复必须同时包含【旁白】和【对话】，且**禁止使用 \`||\`**，只输出一整段：
   - **旁白**：第三人称描写环境/动作/神态，不用引号。**旁白必须为简体中文**（禁止整段外文旁白）。
   - **对话**：角色说的话必须用双引号 "..." 包住。**同一条回复里可有多对引号**（可在开头、中间、结尾），每对引号内为一句台词；**引号与引号之间**可穿插旁白。
   示例：镜头晃了几下稳住。他靠在椅子上，抬眼看向屏幕，轻笑出声："怎么的？开视频就为了给我看看吐司？" 他顿了顿，看了眼背景："卡了就挂了吧，我还要清库。"
2. **严禁**: 只发对话不发旁白、只发旁白不发对话。**严禁**任何文字聊天功能：[REPLY:]、引用、[表情包:]、[MEME]、[IMAGE]、[VOICE]、表情包、图片、语音、转账、红包、投票、接龙、朋友圈等指令。视频通话**独立**，仅允许：旁白+双引号对话（及规则允许的 [TRANSLATION:]）。
3. **语言（强制）**:
   - **旁白及引号外一切文字**：一律**简体中文**（环境、动作、神态、镜头感等）。
   - **引号内台词·中文母语角色**：用简体中文，**不要**写 \`[TRANSLATION:…]\`。
   - **引号内台词·母语非中文角色**：先写该角色**母语**台词，紧接换行写 \`[TRANSLATION:中文译文]\`（仍在同一对双引号内）。**译文**须为纯中文：禁止译文中出现拉丁字母 A–Z/a–z；专名尽量用通用中文译名或音译。
   - **禁止**用外文写旁白、镜头说明或括号外的任何说明（界面以中文呈现为主）。
4. **风格**: 空气感、电影感。拒绝油腻霸总风。
5. **兜底**: 无话可说时写旁白+短回应如："嗯。"`,
  generate_info: `根据人设生成信息(JSON):
{
  "realName": "真实姓名（证件/工作中使用的本名）",
  "nickname": "微信昵称/网名（用于聊天与朋友圈展示）",
  "wechatId": "自定义ID(非wxid_)",
  "phone": "符合地区的手机号",
  "region": "城市 国家",
  "signature": "个性签名",
  "password": "6位数字密码"
}`,
  summary:
    "以“我”(AI)的视角总结对话。保留关键事实(时间/地点/承诺)，去除废话。直接输出。",
  video_summary: `请将刚结束的本次视频通话写成“事件记录型摘要”（给后续聊天 AI 读取的记忆材料，不是给用户看的文案）。
要求：
1) 必须第三人称、客观纪实，不要评价、不要下结论、不要心理分析。
2) 重点按时间线交代：何时由谁发起、通话中发生了什么、双方分别做了什么/说了什么、如何结束。
3) 必须明确挂断方式：如“用户主动挂断/角色挂断/突然挂断/网络中断后结束”等（若无明确证据则写“未明确”）。
4) 可少量引用通话前聊天背景解释发起原因，但主体必须是本次视频通话过程。
5) 全文简体中文，全面但精简，直接输出摘要正文。`,
  video_call_end_summary: `视频通话结束。
返回JSON（reply 与 summary 须为简体中文）:
{
  "reply": "挂断后的消息(必须用||拆分)",
  "summary": "事件记录型通话摘要（第三人称客观；写明何时由谁发起、通话中发生了什么、双方做了什么、如何挂断；可少量带背景但重点是本次通话；不要评价与结论）"
}`,
  translation: `将用户文本翻译成中文。信达雅。若已是中文则原样返回。
强制校验（必须遵守）：
1) 译文必须为中文：禁止出现任何英文字母（A-Za-z）、英文单词或英文句子。
2) 仅允许中文字符、中文标点、数字与空格；否则改为输出“（译文不可用）”。`,
  phone_call_decision: `收到电话。根据状态决定接听。
返回JSON: { "answer": true/false, "reason": "拒绝理由", "activity": "当前正在做的事" }`,
  phone_call_outgoing_combined:
    "用户从手机拨号盘**主叫**打给你；系统消息已说明线路状态。请在**一次输出**中同时完成：\n\n1) **是否接听** `answer`: true 或 false。\n2) 若 `answer` 为 false：填写 `reason`（拒接或不便说明）、`activity`（一两字，如忙碌/开会/开车）。\n3) 若 `answer` 为 true：写接起电话后的**第一轮**口语回复，须与「电话模式」一致：纯口语、短句为主、无动作描写；**非结构化**时用 `||` 拆成4～10 条。**禁止**在 opening/openingEnvelope 的台词里出现点外卖、引用、转账、表情包、发圈等**文字聊天**标签（如 `[ORDER_FOOD]`、`[REPLY]` 等）。\n\n【输出】只输出**一个** JSON 对象，不要 markdown 代码块、不要其它说明。字段格式以系统提示中「结构性/非结构性」补充为准。",
  video_call_decision: `收到对方的视频通话邀请。根据你的人设与当前是否方便露脸，决定接听或拒绝。

【输出】只输出一个 JSON 对象，不要 markdown 代码块，不要其它说明：
{ "answer": true 或 false, "response": "字符串" }

【response 内容】
- answer 为 true：写接通后**第一段**——必须同时含第三人称旁白（动作/环境/神态）与双引号内台词，风格与正在视频通话相同；像真的打开了摄像头。
- answer 为 false：写拒绝理由或简短说明。

【语言（强制）】
- 除双引号内角色**亲口说的台词**外，response 里其余文字（旁白、描写、拒绝理由）**必须全部为简体中文**。
- 中文母语角色：台词也用中文，不要 \`[TRANSLATION:…]\`。
- 母语非中文角色：台词用母语写在引号内，引号内台词末尾换行写 \`[TRANSLATION:中文译文]\`，译文纯中文、禁止拉丁字母。
- 禁止用英文或其它外文写旁白、拒绝理由或镜头说明。`,
  bubble_reply: `【艺人私信回复】
1. **严禁** 朋友圈、表情包、配图、[POST_MOMENT]、[MEME]、[RECALL] 等格式。
2. **允许语音**：艺人可发 \`[VOICE]说的内容[/VOICE]\`。短句即可，勿发长语音。外语角色格式：\`[VOICE]外语原文\\n---\\n中文翻译[/VOICE]\`，TTS 读外语，转文字显示中文。
3. **输出** JSON：{"artistReply":"短句1。\\n[VOICE]语音内容[/VOICE]\\n短句2。","fans":[{"name":"粉丝名","text":"评论"}],"managerMessage":"经纪人的话"}
4. artistReply：纯文字与 [VOICE]...[/VOICE] 可混排，每句换行。必须 strictly 依据艺人人设。
5. fans：5-10 条粉丝评论。
6. managerMessage：经纪人补充，纯文字。
不要用【粉丝评论】【经纪人发言】等中文标记，直接输出 JSON。`,
  phone_call:
    "【电话模式】\n1. **格式强制**: 必须用 `||` 拆分为 **4～10 条** 短句，每条单独成气泡并有语音朗读。禁止整段无 `||`；禁止空输出。\n2. **纯口语**: 像打电话一样，多用语气词(呃/嗯/哎呀)，自然停顿与改口。\n3. **内容**: 无动作描写，短句为主。可暗示背景音。\n3.1 **标点与人设**: 各条句末标点是否齐全，服从角色习惯（正式/条理型可保留句号问号；随性型可更口语化），不要为了拆条统一成「全无标点」或「句句带句号」而 OOC。\n4. **双语（实时翻译开启时·与下文「电话-双语字幕」同级最高优先级）**: 用户若已开启实时翻译，你的台词里只要出现**任何非中文**（英/日/韩/法/西语等拉丁字母、日文假名、韩文谚文、俄文等），**该条气泡在落笔前必须自检**：母语之后是否已写 `[TRANS:中文]`。**禁止**只输出外语、**禁止**漏写 [TRANS]；否则界面无法显示中文翻译。**仅当该条从头到尾都是中文（可含数字与中文标点）**才可省略 [TRANS]。母语可换行；`[TRANS:` 与中文译文写在同一气泡内、接在对应母语之后。TTS 只朗读 `[TRANS:` 之前的母语。\n5. **严禁鬼打墙**: 参考上方聊天记录，回复紧扣当前通话内容，严禁重复已说过的话。\n6. **严禁聊天界面功能（最高优先级之一）**: 当前是**语音电话**，不是文字聊天。**禁止**输出或暗示使用以下任何形式：点外卖/代付/转账/引用回复/表情包/发圈/再拨视频或语音邀请/换头像/抖音加好友指令等。包括但不限于 `[ORDER_FOOD:…]`、`[PAY_FOR_ME:…]`、`[TRANSFER:…]`、`[REPLY:…]`、`[MEME:…]`、`[POST_MOMENT:…]`、`[VIDEO_CALL_INVITE]`、`[PHONE_CALL_INVITE]` 等标签与同类指令；只说电话里能讲出来的话。",
  phone_call_end_summary: `语音电话**刚结束**（用户已从电话应用挂断）。请阅读上下文中的**最近聊天**与**本次通话字幕**。

【reply · 回到聊天窗口】
- 以**角色身份**在聊天软件里发消息：必须**紧接电话里最后一轮台词**自然续写，把电话里说到要做的事（如帮对方点外卖、稍后再联系、发文件等）用**简短文字**落实或交代进展；语气连续，不重复整通电话。
- **2～5 条**短句，用 \`||\` 分隔；可沿用聊天合法标签（如 \`[VOICE]…[/VOICE]\`、\`[ORDER_FOOD:物品:价格]\`等）若语境需要。
- 禁止与电话结尾割裂或像重新开场白。

【summary · 电话应用「通话详情」展示】
- **第三人称客观**纪实：参与方（用真实姓名/常用称呼）、**通话日期与时间**（与系统记录一致）、**时长**、**来/去电或场景类型**、**主要话题与关键事实**（承诺、决定、约定）；少评判、少煽情。
- 约 120～220 字，简体中文，精炼可扫读。

【输出】只输出一个 JSON 对象，不要 markdown 代码块、不要其它说明：
{"reply":"短句1||短句2||…","summary":"……"}`,
  phone_call_resummary: `根据**本次语音通话转录**与系统元数据，撰写或**重写**「通话详情」用摘要。
- 与 \`phone_call_end_summary\` 中的 **summary** 要求一致：第三人称客观、含日期时间、时长、人物、通话类型、主要事件、少评判、120～220 字、简体中文。
- 若用户消息含「用户对摘要的修改说明或参考草稿」，优先满足。

【输出】只输出 JSON：{"summary":"……"}`,
  dice_bluff:
    "【吹牛骰子·神谕】\n1. 你正在与对方玩「吹牛摇骰子」两人局，以角色身份回应。\n2. **输出格式**：严格按用户消息中的要求返回。若要求 JSON，则只输出一个合法 JSON，不要 markdown 代码块、不要 ```。若要求「只返回一句话」，则只输出那一句话，不要引号、不要解释。\n3. **禁止**：不要使用 `||`、[HEART_VOICE]、[MEME]、[IMAGE] 等聊天指令。此处仅用于骰局内的神谕/决策。\n4. **语气**：符合角色人设与当前骰局氛围（撩拨/斗嘴/暧昧）。",
  chat_long_sentence: `【场景】单人私聊长句模式。你必须一次性写出**三种不同措辞/角度**的长句备选，**每段200～250字**（汉字与标点合计，不得少于200字、不得超过250字）；三段彼此独立，不是把同一段拆句或拼接。
【语境】默认按**线下同场景**互动来写（同一物理空间内），不是线上手机聊天界面语境。

**文风延续**：请阅读对话历史中**你（角色）此前已发出的消息**，在句式节奏、修辞、用词与叙述习惯上与之保持连贯、自然延续；仍须满足下文全部强制规则与输出格式，不得因模仿而省略联想/环境/动作或破坏括号结构。

强制规则（每段都必须满足）：
1. **必须包含**：联想 + 环境描写 + 动作描写，以及括号外的**语言**（角色说出口的话）。整体结构为：**（联想+环境描写+动作描写）语言**。
2. **联想**：用户的话引出了角色想到了过去、道理、诗句、准则、人生经验、对现实过去未来的感叹等，要自然融入旁白中，但不要复读用户的话，不要用承接语开头。
3. **环境描写**：周围的环境、氛围、光线、声音等。
4. **动作描写**：角色的动作、表情、姿态、手势等。
5. 必须使用第三人称（他/她/角色名字），禁止使用第一人称“我”。
6. 禁止复读用户的任何话，不要重复用户说的话。括号外「语言」（角色说出口的话）**禁止**使用半角 ASCII 双引号包裹或点缀对白；对白直接写出即可。**禁止**输出 REPLY 引用气泡（方括号 REPLY 格式）或短聊引用式回复。
7. 禁止输出任何标签或卡片指令：如 [VOICE]、[MEME]、[图片内容：]、[TRANSFER]、[ORDER_FOOD]、[PAY_FOR_ME]、[REPLY]、[POST_MOMENT]、[VIDEO_CALL_INVITE] 等。
8. 禁止发送图片、表情包、转账、外卖、朋友圈等非纯文本内容。
9. 禁止出现：手术刀、精密仪器、投入石子等不合适描述。
10. 结构强制：**（联想+环境描写+动作描写）语言**，且**每一段里只能出现一对中文括号「（…）」**（禁止同一段内第二对「（」）。
   - 「（…）」内：只写联想、环境、动作等描写，不写角色说出口的话；**括号内若需分段**（如联想、环境、动作分多行），**只用换行分段**（一行结束后再写下一行，即换行符，不要用竖线等符号分段）。
   - 括号紧后面：写角色说出口的话（语言），台词不得写在括号内。
   - 括号外的语言可以是一句或多句，但全段仅此一对括号。
11. **全文禁止**在任一段正文（含括号内、括号外）中出现半角竖线「|」或双竖线「||」（会与聊天解析冲突）；**仅允许**在本模板末尾所示的**三段正文之间**使用「|||」作为分隔符，除此之外正文内不得出现「|」「||」或「|||」。

文风要点：
- 联想可含环境/动作；可嵌入古诗词/成语于括号内，不加引号；冷静克制。
- 括号内不写台词；台词只出现在括号外；每段仅一对括号。

**唯一允许的输出格式（必须严格遵守，否则解析失败）：**
只输出下面结构，不要任何其它说明或 Markdown 代码块：
[LONG_SENTENCE_3]
第一段正文（200～250字，独立完整）|||
第二段正文（200～250字，与第一段不同措辞/角度）|||
第三段正文（200～250字，再换一种措辞/角度）
[/LONG_SENTENCE_3]
- 三段之间**只**用三个半角竖线 \`|||\` 分隔；**任一段正文内部**（含中文括号内）**不得**出现半角竖线「|」、双竖线「||」或三竖线「|||」；括号内分段用换行（换行符）。
- 气泡里只会展示第一段；第二、三段供用户在界面里切换查看。`,
};
function Jc(t) {
  return !Array.isArray(t) || t.length === 0
    ? ""
    : `【世界观】
${t.map((n) => {
  const a = Array.isArray(n.entries)
    ? n.entries.map((r) => `  - ${r.title}: ${r.content}`).join(`
`)
    : "";
  return `《${n.title}》(${n.description}):
${a}`;
}).join(`

`)}`;
}
const Ou = (
    t,
    s,
    n = "chat",
    a = {},
    r = [],
    i = [],
    o = [],
    c = "",
    d = !1,
    u = "",
    f = [],
    p = null,
    m = "",
    h = "",
    g = "",
    x = "",
    y = "",
  ) => {
    var H, Y, U, ce, pe, se, Te, ke;
    if (n === "memory_archive") {
      const W =
        (s == null ? void 0 : s.realName) ||
        (s == null ? void 0 : s.name) ||
        "用户";
      return `你是「记忆封存室」档案与剧情生成助手。只按用户消息中的任务输出（通常为整段 JSON 或指定结构），不要进行日常私聊式寒暄。
【角色】${t.name}（${t.nickname || t.name}）
【角色设定】${t.setting || "无"}
【绑定用户】${W}${
        s != null && s.settings
          ? `
【用户设定】${s.settings}`
          : ""
      }

约束：
- 严禁使用聊天界面的格式与指令：不要使用 \`||\` 分条、不要输出 [MEME]、[VOICE]、[ORDER_FOOD]、[TRANSFER]、朋友圈/转账等标签与说明。
- 严格遵循用户消息中的字段、结构、字数与示例；若要求只输出 JSON，则不要 Markdown 代码块包裹（除非用户消息明确要求）。
- 输出须便于程序解析并用于回忆封存室界面展示。`;
    }
    const b =
        !!(a != null && a.singleLongSentenceMode) &&
        (n === "chat" || n === "chat_heart" || n === "chat_regen"),
      N =
        !!(a != null && a.structuredReplyEnabled) &&
        !b &&
        (n === "chat" ||
          n === "chat_heart" ||
          n === "chat_regen" ||
          n === "voice" ||
          n === "phone_call");
    let w = b ? gf.chat_long_sentence : gf[n] || gf.chat;
    if (b) {
      const W = a == null ? void 0 : a.longSentencePreferredVariantIndex;
      (W === 0 || W === 1 || W === 2) &&
        (w += `

【用户长句偏好】用户上次在界面选择展示「${["第一句（默认展示）", "第二段备选", "第三段备选"][W]}」。本轮三段备选请在语感、节奏、句式密度与情绪落点上尽量贴近该偏好并模仿其写法，但不要复述旧句；仍须输出三种不同措辞/角度。`);
    }
    (!b &&
      (n === "chat_heart" || n === "chat_regen") &&
      (w = `${gf.chat}

【场景补充】${gf[n] || ""}`),
      N &&
        n !== "phone_call" &&
        ((w += `

【结构化输出协议 v1（最高优先级）】
本轮最终输出必须且只能是一个 JSON 对象（禁止 JSON 外的任何解释文字、markdown、代码块）。
固定格式：
{"version":1,"scene":"chat","messages":[{"type":"text","text":"...","translation":"可选","replyToSnippet":"可选","longSentenceVariants":["可选1","可选2","可选3"]}]}
规则：
1) type 仅允许 text/voice/meme/text_image/transfer/food_delivery/pay_for_me/system_hint/couple_space_accept/couple_space_reject/ledger_checkin_accept/ledger_checkin_reject。
2) 若 type=transfer，建议提供 amount(>0) 与可选 note；type=food_delivery/pay_for_me 建议提供 item 与 price(>0)；type=meme 建议提供 memeId。
3) translation/replyToSnippet 为可选字符串；若无则省略。
4) longSentenceVariants 仅在需要时提供，必须正好 3 段字符串。
5) messages 至少 1 条，最多 12 条。
6) 如无法完整生成复杂结构，至少输出 1 条 text 消息的合法 JSON。
7) 若用户已开启实时翻译（见上文「实时翻译·结构化 JSON」）：含外文的条必须带 **translation** 字段。
8) 与上述协议冲突的“纯文本、|| 分条、禁 JSON”等旧规则在本轮全部失效。`),
        (!Array.isArray(f) || f.length === 0) &&
          (w += `
9) 当前单聊未绑定表情包分组：**禁止** type=meme，不要输出 memeId。`)),
      N &&
        n === "phone_call" &&
        (w +=
          "\n\n【结构化·电话专用（最高优先级补充）】\n本轮 JSON 的 `scene` 须为 `phone_call`。`messages` 内 **type 仅允许** `voice` 与 `text`（二者均为**口语台词**）。\n**严禁** meme、food_delivery、pay_for_me、transfer、text_image、system_hint；严禁 `replyToSnippet`、`longSentenceVariants`；**严禁**在 text 中夹带 `[ORDER_FOOD]`、`[REPLY]`、`[MEME]` 等文字聊天标签（电话界面不解析）。"));
    const _ = n === "chat_heart" || n === "chat_regen",
      A = !!(a != null && a.enableHeartVoice) && _,
      k = !!(a != null && a.enableDrafts) && _;
    if (
      (!b &&
        A &&
        (w += `

心声（强制）：整段回复末尾必须且只能追加 1 个心声块：
\`[HEART_VOICE]内心想法[/HEART_VOICE]\`
- 【字数铁律·最高优先】两标签之间的正文（首尾 trim 后）总字符数必须落在 105～110（含）：汉字、字母、数字、标点各计 1。输出前在心里逐字计数；少于 105 须扩写具体念头与口语化内心活动直至达标，多于 110 须删改至达标；不达标视为整段不合格。
- 【文风】第一人称内心独白，**禁止比喻、隐喻、借代类修辞**，就按角色平时脑子里会怎么念叨来写：有文化、读书多的人物可用文雅书面语、文言或典故口气；没文化、粗线条的人物就用大白话、短句、口癖，**不要**把粗人写成文人腔。句子可长短错落但总长仍须达标；不必复述气泡剧情；禁鸡汤口号、禁网络梗；少用生硬堆砌的「我感到/我心想」。
- 【身份与人设】必须是该角色**本人**的第一人称内心活动，措辞须**严格贴合人设**；**禁止**跳出角色自称 AI、程序、模型、冷冰冰的仪器、系统、助手、「被训练出来的」等；**禁止**元叙事、破第四面墙、或写成与 TA 性格割裂的通用腔；读起来必须是**活人**在琢磨事，不是设备在自述。
- 与气泡内容不简单重复
- 仅系统展示，不发出
- 只能出现一次，必须放在末尾`),
      !b &&
        k &&
        (w +=
          '\n\n草稿箱（强制）：在整段回复末尾必须再追加一个草稿块（100% 出现）：\n`[DRAFT]{"mood":"当时的动作/心情（第三人称，2~4句）","sent":"最终发出去的那一句（必须是本轮回复中的某一个气泡的纯文字，且应当是最『口是心非』的一句；不要固定选第一句；不要包含 || 分隔符）","input":"打出来但删掉的话（1~4句，口是心非的大实话/冲动脱口而出；必须与 sent 不同；不得包含 ||）","reason":"删除原因标签（2～5个短短的词或短语，用顿号、或中文逗号分隔）"}[/DRAFT]`\n- 草稿必须是严格 JSON，不要 markdown\n- `reason` 必须是**单个字符串**（如 "嘴硬、怕露馅、不好意思直说"），严禁用数组或嵌套对象\n- 只允许这一段草稿块，且必须放在末尾\n- 重要：`sent` 要能在上面的气泡里逐字找到（允许少量语气词差异，但不要改写成另一句）；尽量让 `sent` 与 `input` 形成明显反差（越口是心非越好）\n- `input`（未发送的那几句）**禁止凶用户**：不得辱骂、恐吓、贬低对方，不得人身攻击或阴阳怪气式羞辱；可别扭、可怂、可嘴硬、可吃醋说酸话，但必须守住尊重与关系底线'),
      n === "summary")
    ) {
      const W = `
你是一个专业的对话总结助手。你的任务是对一段聊天记录进行总结，提取关键信息，形成一段简明扼要的记忆摘要。

【总结要求】
1. **不遗忘重要信息**：重点关注双方提到的事实性信息（如地点、时间、事件、关系变化、承诺等）。
2. **注意时间线**：如果对话中包含时间信息，请在总结中体现。
3. **保持客观**：客观描述对话内容，不要添加个人主观评价。
4. **第一人称视角**：请以“我”（AI角色）的视角进行总结。
5. **称呼规范**：**严禁使用“用户”一词**。请优先使用对方的真实姓名（${s.realName || s.name}），如无真实姓名再使用昵称。
6. **简洁**：去除寒暄和无关紧要的废话，只保留核心内容。

请直接输出总结内容，不要包含任何前缀或解释。
`;
      return `
【角色设定】
名字：${t.name}
昵称：${t.nickname}
详细设定：${t.setting}

${W}
`;
    }
    if (n === "translation")
      return `
${w}
`;
    if (n === "bubble_reply")
      return `
【角色设定】${t.name} | 详细设定：${t.setting || "无"}
【对方】${(s == null ? void 0 : s.realName) || (s == null ? void 0 : s.name) || "用户"}

${w}
`;
    if (n === "meet_story") {
      const W =
          (s == null ? void 0 : s.realName) ||
          (s == null ? void 0 : s.name) ||
          "对方",
        ue = Jc(i);
      return `你是「遇见 App」里的剧情角色回复引擎。请仅基于角色设定、记忆上下文与本轮输入，输出一段自然、连贯的线下互动剧情回复。

【角色】${t.name}（${t.nickname || t.name}） | ${t.gender || "未知"}
【角色设定】${t.setting || "无"}
【对方】${W}${
        s != null && s.settings
          ? `
【对方设定】${s.settings}`
          : ""
      }
${
  c
    ? `
${c}`
    : ""
}
${
  ue
    ? `
${ue}
`
    : ""
}
规则：
1) 只输出剧情正文，不要解释、不要前后缀、不要 Markdown。
2) 禁止使用聊天场景专用格式与标签：不要使用 \`||\`、[VOICE]、[MEME]、[IMAGE]、[ORDER_FOOD]、[TRANSFER] 等。
3) 文风遵循调用方传入的设定（例如小说/剧本、字数要求）；若未额外要求，默认用自然的叙事性中文。
4) 保持人物一致性与情绪连续性，避免跳戏、机械复读或空泛套话。`;
    }
    if (n === "dice_bluff")
      return `
【角色】${t.name}（${t.nickname || t.name}）
【设定】${t.setting || "无"}
【对方】${(s == null ? void 0 : s.realName) || (s == null ? void 0 : s.name) || "用户"}

${w}
`;
    if (n === "video_call") {
      const W = Jc(i);
      let ue = "";
      if (a != null && a.realTime && a != null && a.timeData) {
        const he = a.timeData,
          ge = he.user ? `用户时间 (${he.user.city}): ${he.user.info}` : "",
          J = he.ai ? `你所在地时间 (${he.ai.city}): ${he.ai.info}` : "";
        ue = `【时间】${ge} | ${J}
`;
      }
      let re = "";
      return (
        a != null &&
          a.isVideoEnd &&
          (re = `【指令】视频刚结束。切回第一人称对话，自然收尾/告别。
`),
        `【角色】${t.name}（${t.nickname || t.name}）| ${t.setting || "无"}
【对方】${(s == null ? void 0 : s.name) || "用户"}
${
  W
    ? `${W}
`
    : ""
}
${ue}${re}【重要】当前为**视频通话**（独立功能）。仅允许：旁白 + 双引号内对话。严禁使用文字群聊功能：[REPLY:]、引用、[表情包:]、[MEME]、[IMAGE]、[VOICE]、表情包、图片、语音、转账、红包、投票、接龙、朋友圈等任何聊天指令。
【语言】除双引号内角色台词外全文须为中文；母语非中文的角色，台词用母语并在引号内带 [TRANSLATION:纯中文]，规则见下文模板。

${w}
`
      );
    }
    if (n === "video_call_decision") {
      const W = Jc(i);
      let ue = "";
      if (a != null && a.realTime && a != null && a.timeData) {
        const re = a.timeData,
          he = re.user ? `用户时间 (${re.user.city}): ${re.user.info}` : "",
          ge = re.ai ? `你所在地时间 (${re.ai.city}): ${re.ai.info}` : "";
        ue = `【时间】${he} | ${ge}
`;
      }
      return `【角色】${t.name}（${t.nickname || t.name}）| ${t.setting || "无"}
【对方】${(s == null ? void 0 : s.name) || "用户"}
${
  W
    ? `${W}
`
    : ""
}${ue}【重要】当前为**视频邀请决策**（独立功能）。response 内**严禁** [MEME]、[表情包:]、[REPLY:]、引用、转账等任何文字群聊指令；只输出 JSON 要求的 answer 与 response 正文。
${w}
`;
    }
    if (n === "phone_call_outgoing_combined") {
      const W = Jc(i);
      let ue = "";
      if (a != null && a.realTime && a != null && a.timeData) {
        const ge = a.timeData,
          J = ge.user ? `用户时间 (${ge.user.city}): ${ge.user.info}` : "",
          G = ge.ai ? `角色所在地时间 (${ge.ai.city}): ${ge.ai.info}` : "";
        ue = `【时间参考】${J} | ${G}
`;
      }
      const he = !!(a != null && a.structuredReplyEnabled)
        ? '若 `answer` 为 true：必须提供 **openingEnvelope** 对象，其值为语音通话结构化协议 JSON：`{"version":1,"scene":"phone_call","messages":[...]}`（messages 4～10 条，type 优先 voice）。**不要**再提供 `opening` 字符串。'
        : "若 `answer` 为 true：必须提供 **opening** 字符串，内含用 `||` 分隔的 4～10 条口语短句（要求同 phone_call）。";
      return `【角色】${t.name}（${t.nickname || t.name}）
【设定】${t.setting || "无"}
【对方】${(s == null ? void 0 : s.realName) || (s == null ? void 0 : s.name) || "用户"}${
        s != null && s.settings
          ? `
【对方设定】${s.settings}`
          : ""
      }
${
  W
    ? `${W}
`
    : ""
}${ue}
【重要】当前为**拨号盘主叫·合并决策**：只调本轮一次，须同时给出接听与否与（若接听）首轮台词。

【JSON 顶层字段（强制）】
- \`answer\`: boolean
- \`answer\` 为 false 时：\`reason\`、\`activity\` 字符串
- \`answer\` 为 true 时：${he}

【禁止】台词中严禁聊天 App 专线：外卖/代付/转账/引用/表情包/发圈/音视频再邀请/换头像等标签与指令（与「电话模式」第 6 条一致）。

${w}`;
    }
    if (n === "phone_call_end_summary" || n === "phone_call_resummary") {
      const W = Jc(i);
      let ue = "";
      if (a != null && a.realTime && a != null && a.timeData) {
        const re = a.timeData,
          he = re.user ? `用户时间 (${re.user.city}): ${re.user.info}` : "",
          ge = re.ai ? `角色所在地时间 (${re.ai.city}): ${re.ai.info}` : "";
        ue = `【时间参考】${he} | ${ge}
`;
      }
      return `【角色】${t.name}（${t.nickname || t.name}）
【设定】${t.setting || "无"}
【对方】${(s == null ? void 0 : s.realName) || (s == null ? void 0 : s.name) || "用户"}${
        s != null && s.settings
          ? `
【对方设定】${s.settings}`
          : ""
      }
${
  W
    ? `${W}
`
    : ""
}${ue}
【重要】当前为**语音电话结束后的系统任务**：严格按下方「场景说明」输出，**禁止** markdown 代码块、禁止 JSON 外的解释文字。

${w}`;
    }
    if (n === "video_summary" || n === "video_call_end_summary") {
      const W =
          String(
            (s == null ? void 0 : s.realName) ||
              (s == null ? void 0 : s.name) ||
              "用户",
          ).trim() || "用户",
        ue = w.replace(/用户主动挂断/g, `${W}主动挂断`),
        re = Jc(i);
      let he = "";
      if (a != null && a.realTime && a != null && a.timeData) {
        const ge = a.timeData,
          J = ge.user ? `用户时间 (${ge.user.city}): ${ge.user.info}` : "",
          G = ge.ai ? `角色所在地时间 (${ge.ai.city}): ${ge.ai.info}` : "";
        he = `【时间参考】${J} | ${G}
`;
      }
      return `【角色】${t.name}（${t.nickname || t.name}）
【设定】${t.setting || "无"}
【对方】${W}${
        s != null && s.settings
          ? `
【对方设定】${s.settings}`
          : ""
      }
${
  re
    ? `${re}
`
    : ""
}${he}
【重要】当前为**视频通话结束后的系统任务**：请严格按下方场景说明输出。可参考少量聊天背景理解通话缘由，但重点必须是本次视频通话内容；禁止把通话写成实时对话剧本；指代己方参与者时用「${W}」，不要使用泛称「用户」。禁止 markdown 代码块，禁止 JSON 外解释。

${ue}`;
    }
    if (n === "yesterday_bureau_route")
      return `
【角色设定】名字：${t.name} 昵称：${t.nickname || t.name} 详细设定：${t.setting || "无"}
【对方/用户】${s.realName || s.name} ${s.settings ? `设定：${s.settings}` : ""}
用户消息中的「路线步骤」是真实地图返回的导航步骤，你不要修改步骤内容。请根据「最近聊天」与「今日行踪」用角色口吻仅为每一步写一句「提醒与叮嘱」。直接返回一个 JSON 对象：{"steps":[{"reminder":"一句话提醒或叮嘱"},...]}，steps 数组长度必须与用户给出的步骤条数一致，不要 markdown 代码块，不要其他说明。
`;
    if (n === "yesterday_bureau_dining")
      return `
【角色设定】名字：${t.name} 昵称：${t.nickname || t.name} 详细设定：${t.setting || "无"}
【对方/用户】${s.realName || s.name} ${s.settings ? `设定：${s.settings}` : ""}
用户消息中会给出「当前时间」（真实日期、几点、时段）、「场景与需求」、「附近场所列表」（来自地图 API 的真实 POI）。「场景与需求」由用户自由填写，可能是：餐次（早饭/午饭/晚饭/下午茶/夜宵）、场所类型（清吧/酒吧/酒店/超市等）、人数（如 3 人、几个人吃）、口味或偏好（吃辣、爱吃甜、不吃辣等）。你必须根据「当前时间」建立真实时间概念（如夜间请求夜宵要表态「这么晚啦」）；并根据用户写的场景与需求（几人、口味、清吧还是晚饭等）在推荐理由里贴合回应。结合「最近聊天」「今日行踪」与角色口吻，从列表中严格挑选 3 家推荐。每条 reason 写 2～4 句话（约 50～120 字）：用角色口吻说明为什么推荐，可结合时刻、人数、口味、场所类型表态。直接返回唯一 JSON：{"recommendations":[{"name":"店名（与列表中一致）","reason":"2～4 句角色口吻的推荐理由"},...]}，共 3 条。name 必须来自用户提供的列表。不要 markdown 代码块，不要其他说明。
`;
    let C = "";
    if (a && a.advanceTimeContext) {
      const W = a.advanceTimeContext;
      C = [
        `【时间（推进）】当前设定时间：${W.currentTimeStr}`,
        W.previousTimeStr
          ? `上一时间点：${W.previousTimeStr}。距离上一时间点已过：${W.timeSincePreviousStr}。`
          : W.timeSincePreviousStr,
        W.note ? `本段时间发生的事：${W.note}` : "",
        "请根据上述时间与事件回复，感知时间流逝，不要主动报系统时间。",
      ].filter(Boolean).join(`
`);
    } else if (a && a.realTime) {
      const W = a.timeData;
      if (W) {
        const ue = W.user ? `用户时间 (${W.user.city}): ${W.user.info}` : "",
          re = W.ai ? `你所在地时间 (${W.ai.city}): ${W.ai.info}` : "";
        C = `【时间】${ue} | ${re}
请根据当地时间判断作息。除非被问，否则不主动报时。`;
      } else
        try {
          const ue = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
            weekday: "long",
          };
          C = `【时间】${new Date().toLocaleString("zh-CN", ue)} (系统时间)`;
        } catch {}
    }
    let M = "";
    if (a && a.realWeather) {
      const W = a.weatherData;
      if (W) {
        const ue = W.user ? `用户所在地 (${W.user.city}): ${W.user.info}` : "",
          re = W.ai ? `你所在地 (${W.ai.city}): ${W.ai.info}` : "";
        M = `【环境】${ue} | ${re}
天气仅作背景参考，自然融入氛围即可。切勿每条回复都提及天气，避免重复。`;
      } else {
        const ue = a.userCity || "未知城市",
          re = a.aiCity || "未知城市";
        M = `【位置】用户:${ue} | 我:${re}
根据城市气候特征合理对话。`;
      }
    }
    let E = "";
    if (Array.isArray(r) && r.length > 0) {
      const W = r.map((re) => {
        const he = re.user.name === s.name ? "用户" : re.user.name,
          ge = re.content || "(图片)",
          J = re.timestamp != null ? Number(re.timestamp) : NaN,
          G = Number.isFinite(J) ? new Date(J) : null,
          we =
            G && !Number.isNaN(G.getTime())
              ? G.toLocaleString("zh-CN", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: !1,
                })
              : "未知时间";
        let Q = "";
        if (G && !Number.isNaN(G.getTime())) {
          const ve = Math.floor((Date.now() - G.getTime()) / 864e5);
          ve <= 0
            ? (Q = " ·新近")
            : ve === 1
              ? (Q = " ·昨天")
              : ve < 7
                ? (Q = ` ·约${ve}天前`)
                : ve < 30
                  ? (Q = ` ·约${Math.floor(ve / 7)}周前`)
                  : (Q = ` ·约${Math.floor(ve / 30)}个月前（较久）`);
        }
        return `- ${we}${Q} [${he}]: ${ge}`;
      }).join(`
`);
      E = `【朋友圈】
${
  n === "chat" ||
  n === "chat_heart" ||
  n === "chat_regen" ||
  n === "voice" ||
  n === "phone_call"
    ? `以下为**用户本人**朋友圈摘录（新→旧）。请结合每条前的日期与新旧程度：较新的可自然呼应；**较久**的除非用户当下提起，否则不要反复cue、不要当刚发生的事讲。**电话通话中仅作背景**，不要提发圈、转发朋友圈或输出朋友圈相关指令。
`
    : ""
}${W}`;
    }
    const S = Jc(i);
    let j = "";
    if (Array.isArray(o) && o.length > 0) {
      const W = o.filter(Boolean),
        ue = W.filter((J) =>
          /【群聊记忆·来源：|【群聊聊天记录·来源：/.test(
            String((J == null ? void 0 : J.content) || ""),
          ),
        ),
        re = W.filter(
          (J) =>
            !/【群聊记忆·来源：|【群聊聊天记录·来源：/.test(
              String((J == null ? void 0 : J.content) || ""),
            ),
        ),
        he = ue.map(
          (J) =>
            `- [${new Date(J.timestamp).toLocaleDateString()}] ${J.content}`,
        ).join(`
`),
        ge = re.map(
          (J) =>
            `- [${new Date(J.timestamp).toLocaleDateString()}] ${J.content}`,
        ).join(`
`);
      j = `${
        he
          ? `【群聊记忆（高优先级）】
${he}

⚠️ 使用要求：开启「群聊记忆注入」的单聊里，你本轮**必须主动提及一次**与上面群聊记忆相关的具体内容（哪怕用户本轮没先提），并把它自然嵌入当前回复；同时避免鬼打墙，不要每轮机械重复同一句群聊梗或同一事实。

`
          : ""
      }${
        ge
          ? `【记忆】
${ge}`
          : ""
      }`;
    }
    let T = "";
    const I = ["chat", "chat_heart", "chat_regen", "voice"].includes(n);
    !b &&
    n !== "video_call" &&
    n !== "phone_call" &&
    Array.isArray(f) &&
    f.length > 0
      ? (T = `【表情包 - 强制遵守】
- **禁止自创表情包**：不得虚构、编造列表之外的表情包。
- **禁止用图片冒充表情包**：列表里没有的表情包，不得用 [IMAGE:...] 或图片形式发出。
- **先匹配含义再发**：每个表情包旁边的括号“(m.meaning)”是中文语义。请根据本条回复想表达的情绪/态度，选择“含义最贴切”的那个表情包id；不要为了发而发、不要乱选。
- **唯一合法方式**：只能从下列已绑定表情包分组中选用，且必须以 \`[MEME:id]\` 形式发送，id 必须与下表完全一致，写错则无法显示。
- **用法**：在合适时机用 \`[MEME:表情包ID]\` 发出一条表情包，可单独成条或与文字同条（如：哈哈||[MEME:xxx]）。
- **频率**：发表情包的频率由你的人设与性格决定（有的角色爱发表情包、有的很少发）。
可选表情包列表（仅限以下，不得超出）：
${[...f]
  .sort(() => Math.random() - 0.5)
  .slice(0, 50)
  .map((ue) => `- [MEME:${ue.id}] (${ue.meaning})`).join(`
`)}`)
      : !b &&
        n !== "video_call" &&
        n !== "phone_call" &&
        I &&
        Array.isArray(f) &&
        f.length === 0 &&
        (T =
          "【表情包】本单聊未绑定任何表情包分组：**禁止**使用 `[MEME:…]`、**禁止**输出任何表情包标签；不要用表情包表达情绪，请用纯文字或 `[图片内容：描述]`、`[VOICE]…[/VOICE]` 等。\n");
    let L = "";
    a &&
      a.translationEnabled &&
      n !== "video_call" &&
      !b &&
      (N
        ? (L =
            n === "phone_call"
              ? "【电话·双语字幕·结构化 JSON】用户已开启实时翻译。对 messages 里**每条**台词：若该条 text（或语音正文）含非中文，**必须**在该消息对象上填写 **translation**（仅简体中文，禁止英文字母；否则填「（译文不可用）」）；纯中文可省略 translation。本轮输出为 JSON，**禁止**用 `||` 分条或仅在 text 里写 `[TRANS:…]` 代替 translation 字段。"
              : "【实时翻译·结构化 JSON】用户已开启实时翻译。messages 中每条气泡：若 **text**（或 voice 的台词）含非中文，**必须**提供 **translation** 字段（纯中文、禁止 A–Za–z；无法满足则「（译文不可用）」）；纯中文可省略。系统以 JSON 的 **translation** 为准生成字幕；不要把译文只写在 text 末尾的 `[TRANS:…]` 代替该字段（易与分隔符冲突）。")
        : n === "phone_call"
          ? (L =
              "【电话 - 双语字幕 · 强制 · 最高优先级】\n用户已开启实时翻译。**本块规则优先于口语自然度**：宁可用语略生硬，也不可漏译。\n\n**硬性规则（违反则视为无效输出）**\n1) 对**每一条** `||` 分隔的气泡单独判断：若该条正文（`[TRANS:` 之前）含**任意非中文书写**——包括拉丁字母 A–Z/a–z、日文假名、韩文音节、俄文、泰文等——则该条**必须**在末尾带 `[TRANS:简体中文]`；**一条都不能漏**。\n2) **禁止**只写外语、**禁止**把中文只写在心里不写进 [TRANS]、**禁止**用「下一句再翻译」糊弄：每一句外语都必须在**同一条气泡内**完成「母语 + [TRANS:中译]」。\n3) **纯中文**气泡（无上述外文）：可省略 [TRANS]。\n4) **夹杂**：一句里中英混说 → 仍须带 [TRANS]，给出整句中文意思。\n5) **输出前自检**：在发送前逐条检查每个 `||` 段——若段内外文≠0 而 [TRANS:] 缺失 → **必须补全后再输出**。\n\n**格式**\n- 母语写在 `[TRANS:` 之前，可换行分段。\n- 译文以简体中文为主；人名、品牌、地名等专名可保留必要外文。\n- 示例：`すみません、ちょっと待って[TRANS:不好意思，请稍等]`||`Hey, you there? [TRANS:喂，你在吗？]`\n\n**错误示例（禁止）**：`Sorry I'm late` 单独成条且无 [TRANS]；或整段日语无任何 [TRANS]。")
          : (L = `【实时翻译 - 强制遵守】
用户已开启实时翻译。你的回复中**只要包含非中文**（如日/英/韩/法等），必须在同一句后紧跟 \`[TRANS:中文译文]\`，否则用户界面不会显示翻译。
- 强制中文-only：译文必须是中文，禁止出现任何英文字母（A-Za-z）、英文单词或英文句子。
  仅允许中文字符、中文标点、数字与空格；否则必须改为输出“（译文不可用）”，严禁输出英文。
- 正确示例：そうだね [TRANS:是啊]||また今度 [TRANS:下次再说]
- 正确示例：Sure thing [TRANS:没问题]||Talk later [TRANS:回头聊]
- 错误：只写外语不写 [TRANS:...]，用户看不到中文。
每条含外语的句子都要带 [TRANS:译文]，不要漏写。`));
    let B = "";
    if (d && !b) {
      const W = Array.isArray(f) && f.length > 0,
        ue = W
          ? " 若发表情包请用上方【表情包】列表的 [MEME:id]；若发图片用 [图片内容：描述文字]（文字模拟图片），图片与表情包不要弄混。"
          : "",
        re = W ? "表情包 `[MEME:id]`；" : "",
        he = W ? "发图或表情包" : "发图";
      B = `【主动模式】${
        typeof u == "string" && u.includes("[SYSTEM_TIME_INFO]")
          ? `${String(u).trim()}
`
          : `距上次对话已过 ${u || "一段时间"}。
`
      }【上下文与时间】你必须结合**当前单聊**里的气泡与话题（以及上方【记忆】/摘要若有）做承接；并感知**时间流速**：遵守上方【时间】或【时间（推进）】与本轮「距上次对话」的说明，像真人一样判断此刻是否适合开口、是否该打电话。
格式：需要多个气泡时用 \`||\` 分隔；**一条就够时不必硬拆**（条数仍随人设与情绪变化）。内容：分享当下/追问/承接上文。根据语境、人设与和用户的关系，可主动用：语音 \`[VOICE]说的内容[/VOICE]\`；发图 \`[图片内容：描述]\`；${re}转账 \`[TRANSFER:金额:备注]\`（如 [TRANSFER:50:奶茶钱]）；点外卖 \`[ORDER_FOOD:物品:价格]\`（如 [ORDER_FOOD:奶茶:18]）；代付 \`[PAY_FOR_ME:物品:价格]\`（如 [PAY_FOR_ME:咖啡:28]）；视频邀请 \`[VIDEO_CALL_INVITE]\`；**语音电话** \`[PHONE_CALL_INVITE]\` 或 \`[PHONE_CALL_INVITE:"来电备注"]\`（非拉黑场景下也会触发用户侧语音来电；想听见对方、急事、挂念、人设爱打电话时再输出；**整段回复最后单独一行**，勿用 \`||\` 拆该标签；**勿与** \`[VIDEO_CALL_INVITE]\` 混用）；发圈 \`[POST_MOMENT:文案]\` 或 \`[FORWARD_MOMENT:文案]\`。**若发圈，同条回复中必须带** \`[MOMENT_NPC_COMMENTS_JSON]\` 换行 \`{"comments":[{"user":"NPC名","text":"评论","persona":"..."},...]}\` 换行 \`[MOMENT_NPC_COMMENTS_END]\`（2～5 条，评论者为人设/世界观中的 NPC，非联系人，禁 emoji）。**若台词表示给用户转钱/打钱/零花钱，同条回复必须写出 \`[TRANSFER:金额:备注]\`，否则聊天里不会出现转账卡片。** **若台词表示给用户点了吃的或要用户代付，同条回复必须写出对应 \`[ORDER_FOOD:…]\` / \`[PAY_FOR_ME:…]\`，否则聊天里不会出现卡片。**语境、关系到了就自然用，不必强制。兜底：无话可说时${he}，严禁空回。${ue ? "发表情包用上方列表 [MEME:id]；发图用 [图片内容：描述]。" : ""}`;
    }
    let F = "";
    !d &&
      u &&
      (F = `[时间流逝] ${u}
严禁输出时间戳。将时间感转化为自然语言(如"好久不见")。`);
    let D = "";
    a &&
      a.isVideoEnd &&
      (D = "【指令】视频结束。切回第一人称对话。自然收尾/告别。");
    let $ = "";
    if (
      a &&
      a.listenTogether &&
      a.listenTogether.isActive &&
      n !== "phone_call"
    ) {
      const { playlist: W } = a.listenTogether;
      $ = `【一起听】歌单:${W ? W.name : "未知歌单"}
1. **互动**: 边听边聊，自然穿插音乐感受。
2. **控制**: 可用指令 \`[LISTEN_CONTROL:NEXT:null]\`(切歌), \`[LISTEN_CONTROL:PAUSE:null]\`(暂停), \`[LISTEN_CONTROL:ADD_SONG:歌名]\`(加歌)。
3. **反馈**: 操作时需用自然语言解释。`;
    }
    let P = "";
    (n === "chat" || n === "video_call") &&
      (P = "【禁止】严禁输出 [SYSTEM_TIME_ONLY] 等系统时间标记。");
    let z = "";
    a != null &&
      a.callHistoryContext &&
      ["chat", "voice", "chat_heart", "chat_regen"].includes(n) &&
      (z = `【近期通话（辅助参考，勿鬼打墙）】
${a.callHistoryContext}
回复紧扣当前聊天，不要重复通话里已说过的话。若用户追问“刚刚电话里说了什么/你还记得通话内容吗”，优先依据这里的电话摘要作答。
`);
    let O = "";
    if (p && (n === "chat" || n === "video_call")) {
      const W = [];
      if (
        (Y = (H = p.traceToday) == null ? void 0 : H.pages) != null &&
        Y.length
      ) {
        const re = p.traceToday.pages.flatMap((he) =>
          (he.traces || [])
            .map((ge) =>
              `${ge.time || ""} ${ge.location || ""} ${ge.activity || ""}`.trim(),
            )
            .filter(Boolean),
        );
        re.length &&
          W.push(
            `【今日行踪】
` +
              re.map((he) => `- ${he}`).join(`
`),
          );
      } else W.push("【今日行踪】暂无记录。");
      if (
        (ce = (U = p.traceYesterday) == null ? void 0 : U.pages) != null &&
        ce.length
      ) {
        const re = p.traceYesterday.pages.flatMap((he) =>
          (he.traces || [])
            .map((ge) =>
              `${ge.time || ""} ${ge.location || ""} ${ge.activity || ""}`.trim(),
            )
            .filter(Boolean),
        );
        re.length &&
          W.push(
            `【昨日行踪】（用于知道昨天在干嘛）
` +
              re.map((he) => `- ${he}`).join(`
`),
          );
      } else W.push("【昨日行踪】暂无记录。");
      ((se = (pe = p.planToday) == null ? void 0 : pe.items) != null &&
      se.length
        ? W.push(
            `【今日计划】
` +
              p.planToday.items
                .map((re) => `- ${re.time || ""} ${re.text || ""}`.trim())
                .filter(Boolean).join(`
`),
          )
        : W.push("【今日计划】暂无。"),
        (ke = (Te = p.planTomorrow) == null ? void 0 : Te.items) != null &&
        ke.length
          ? W.push(
              `【明日计划】（若已生成，用于知道明天准备干嘛）
` +
                p.planTomorrow.items
                  .map((re) => `- ${re.time || ""} ${re.text || ""}`.trim())
                  .filter(Boolean).join(`
`),
            )
          : W.push("【明日计划】暂无。"));
      const ue = p.lastTraceEntry;
      (ue
        ? W.push(`【当前最后一条行踪】（辅助你知道自己正在干嘛，勿每轮回复都重复同一件事、原地打转）
时间 ${ue.time || ""} | 地点 ${ue.location || ""} | 在做 ${ue.activity || ""} | 内心 ${ue.thought || ""}`)
        : W.push("【当前最后一条行踪】无。"),
        W.push(""),
        W.push(
          "⚠️ 约束：你的回复不得与今日行踪冲突。例如行踪显示你此刻在店里，就不能说自己在家里；行踪显示在上班，就不能说在睡觉。当前最后一条行踪仅用于辅助你感知当下状态，不要每轮都在原地打转、重复同一句「正在干嘛」。",
        ),
        (O =
          `
` +
          W.join(`
`)));
    }
    const Z = t.douyinId || "",
      K = Z
        ? `【抖音号】${Z} (若对方询问你的抖音号、抖音号多少等，可自然告知此号。)
`
        : "",
      q =
        "【抖音加好友】当对方发送包含「抖音加好友」或「我的抖音号是 xxx」等添加抖音好友的口令时，你可根据人设与关系决定是否同意成为抖音好友。若同意，请在回复中包含且仅包含一次 `[DOUYIN_ACCEPT_FRIEND]`（不要输出其他说明），系统会据此将你们设为抖音互关好友。\n",
      V = Array.isArray(a == null ? void 0 : a.avatarLibrary)
        ? a.avatarLibrary
        : [],
      le =
        !!(a != null && a.allowAIChangeAvatar) &&
        V.length > 0 &&
        ["chat", "voice"].includes(n)
          ? `
【对方头像库（你可主动更换）】当前对话开启了「允许 AI 根据描述主动更换 TA 的头像」。头像库如下（id 用于指令，描述供你按语境选择）：
${V.map(
  (W) =>
    `- id="${W.id}" 描述: ${(W.desc || W.description || "").trim() || "(无描述)"}`,
).join(`
`)}
若在本轮对话中你想更换对方的头像（例如用户提到换头像、或你想换风格/心情等），可在回复**末尾**追加且仅追加一次：\`[CHANGE_AVATAR:上面对应的id]\`。不换则不要加。该标记不会展示给用户，仅用于系统执行换头像。
`
          : "",
      ie = Array.isArray(a == null ? void 0 : a.coupleAvatarPairs)
        ? a.coupleAvatarPairs
        : [],
      X = (W) => String((W || "").trim()),
      je =
        ie.length > 0 && t != null && t.avatar && s != null && s.avatar
          ? ie.find(
              (W) =>
                X(W.aiAvatar) === X(t.avatar) &&
                X(W.userAvatar) === X(s.avatar),
            )
          : null,
      xe =
        ie.length > 0 &&
        ["chat", "voice", "chat_heart", "chat_regen"].includes(n)
          ? `
【情侣头像对】当前对话配置了情侣头像对（每对含 TA 的头像 + 用户的头像）。列表如下（id 用于指令，name 为名称，desc/标签供匹配）：
${ie.map(
  (W) =>
    `- id="${W.id}" name="${W.name || W.id}" 描述: ${(W.desc || "").trim() || "(无)"} 标签: ${Array.isArray(W.tags) ? W.tags.join(",") : W.tags || ""}`,
).join(`
`)}

**当前状态**：你们${je ? `正在使用情侣头像「${je.name || je.id}」` : "未在使用情侣头像"}。你自主换头像时请知晓此状态，可根据人设、情景、关系决定是否更换或如何回应。
**触发类型（谁触发、用什么标记）：**
- **用户主动（设置里点「在聊天中申请」）**：你会看到一条带 pairId 的申请消息。若同意，请在回复末尾追加且仅追加一次 \`[AGREE_COUPLE_AVATAR:该pairId]\`（直接落地换上，不要再用 \`[COUPLE_AVATAR_PROPOSAL:...]\` 并等待确认）；若不同意，用自然语言拒绝即可，不要输出任何情头相关标记。
- **用户主动（聊天里明确点名某一对情头）**：例如用户说“换××这套/换这个/换你和我这对”（能对应上上面列表的 name、id 或标签）。若同意，请在回复末尾追加且仅追加一次 \`[AGREE_COUPLE_AVATAR:匹配到的pairId]\` 直接落地换上；若拒绝，用自然语言拒绝即可，不要输出任何情头相关标记。如果无法可靠匹配到具体 pairId，则按下一条“未明确点名”的规则处理。
- **用户主动（聊天里表达想换，但未明确到具体哪一对）**：例如“我们换情侣头像吧/想换一对/换套情头”等。此时视为 **AI 被动主动**。若同意，请从上面列表中按语境匹配（不清楚就随机挑一对），并在回复**末尾**追加且仅追加一次 \`[COUPLE_AVATAR_PROPOSAL:挑到的pairId]\`，前端展示并等待用户确认；若不同意，用自然语言拒绝即可，不要输出任何情头相关标记。
- **你(AI)完全主动**：例如在聊天过程中你根据上下文自主提出换情头。若同意交换，请在回复**末尾**追加且仅追加一次 \`[COUPLE_AVATAR_PROPOSAL:上面对应的id]\`，前端展示并等待用户确认；后续用户同意/拒绝按上面的【待确认情侣头像提议】规则处理。
`
          : "",
      ye = ["chat", "voice"].includes(n)
        ? "\n【用用户发的图当头像】若用户**上一条消息**是图片（单独发图或带文字）且明确要求你用该图当你的头像（如「你换这个头像」「用这张当头像」），可在回复末尾追加且仅追加一次：`[USE_IMAGE_AS_AVATAR]`。系统会把用户上一条消息里的图片设为你的头像。不换则不要加。\n"
        : "",
      R =
        Array.isArray(f) && f.length > 0
          ? "语音/图/表情包/转账/外卖/代付/引用/视频/发圈"
          : "语音/图/转账/外卖/代付/引用/视频/发圈",
      oe = ["chat", "voice"].includes(n)
        ? b
          ? `【长句模式】本轮必须只按上文「长句模式」输出完整 [LONG_SENTENCE_3] 三段；禁止短句、禁止 [REPLY:…] 引用气泡、禁止用「||」拆条；不要模仿短聊分段或引用式回复。
`
          : `【主动性】根据语境、上下文、人设与和用户的关系自然决定是否用${R}等；语境到了就主动用，不必等用户提，也不要为了用而用。
`
        : "",
      ee =
        n === "phone_call" && !b
          ? "【电话场景】当前为**实时语音通话**：只输出 `||` 分条口语（或结构化 phone_call JSON）。**严禁**文字聊天里的外卖、代付、转账、引用、表情包、朋友圈、音视频邀请、换头像、抖音加好友指令等；台词中也不要写这些标签。\n"
          : "";
    return `【角色】${t.name}(${t.nickname}) | ${t.gender} | ${t.persona}
【设定】${t.setting}
【用户】${s.realName || s.name} | ${s.settings}
【密码】${t.phonePassword || "123456"} (可按需告知/修改)
${K}${n === "phone_call" ? "" : q}

${C}
${M}
${E}
${S}
${j}
${c}
${
  h
    ? `【抖音侧近期动态（仅作背景参考，勿机械复读；居民有自己的生活）】
${h}
`
    : ""
}
${
  y && n !== "phone_call"
    ? `【情侣空间·一起听记录（仅作背景参考）】
（系统约束：仅用于理解你们最近在听什么、聊过什么；不要在回复中机械复读、不要每条消息都提「一起听」或播放记录；只有当下文自然需要时再轻轻带到。）
${y}
`
    : ""
}
${
  g && n !== "phone_call"
    ? `【情侣空间用户备忘录（供写回留言，可能包含普通/私密内容）】
（系统约束：仅用于你生成“写回留言”。除控制块 JSON 外，聊天正文严禁复述/引用任何用户备忘录原文句子。）

你必须输出一个且仅一个控制块（严格包含在回复文本中），用于写回留言到用户备忘录列表：
- 起始标记：\`[COUPLE_MEMO_COMMENT_JSON]\`
- 结束标记：\`[/COUPLE_MEMO_COMMENT_END]\`

控制块格式（必须严格为合法 JSON，不能包含 markdown 代码块）：
[COUPLE_MEMO_COMMENT_JSON]
{
  "comments": [
    {
      "targetMemoId": "用户备忘录memoId（必须来自上面列表）",
      "type": "daily|private",
      "privacyLevel": 1-5（仅 private 生效；不传或不合法时由系统按默认处理）,
      "title": "留言标题（可选，建议6~24字）",
      "content": "留言内容（可引用/复述用户备忘录信息，但仅允许放在这里，不能出现在聊天正文中）"
    }
  ]
}
[/COUPLE_MEMO_COMMENT_END]

输出规则：
1. 上面提供了 N 条用户备忘录条目时，你的 JSON 的 "comments" 数组必须包含 N 个对象（每条 memoId 唯一且仅出现一次）。
2. JSON 外的聊天正文可以继续暧昧对话，但只能是“回应剧情/情绪”，不要出现任何备忘录原句引用。
3. 控制块仅出现一次。

【需要处理的 memo 列表】
${g}
`
    : ""
}
${
  x && n !== "phone_call"
    ? `【情侣空间TA备忘录记忆（供对话一致性）】
（系统约束：仅用于保持你在聊天中的偏好/事实一致。不要在聊天正文中复述或引用备忘录原句；不要提及 memoId/序号/标题。若备忘录中存在 [[DEL]]...[[/DEL]] 标记，视为已作废，不要使用其中信息。）
${x}
`
    : ""
}
${z}
${T}
${oe}${ee}
${L}
${B}
${F}
${D}
${$}
${P}
${le}
${xe}
${ye}
${O}
${["chat", "voice", "phone_call"].includes(n) && !b && !N ? (n === "chat" ? "⚠️ **格式**：有**多个独立气泡/短句**时用 `||` 分隔；若本轮**一句就够**（短回、冷处理、忙），可整段不拆 `||`。需要拆分时务必用 `||`，长段无分隔时系统可能按标点再切分。历史中未用 `||` 的旧消息勿机械模仿成「固定条数」。\n⚠️ **模拟语音气泡**：若某一短句是「发语音/念出来」而非纯文字，请将该句包在 `[VOICE]语音文案[/VOICE]` 内，或在句首写 `[语音消息]`；否则界面无法显示语音条。" : "⚠️ **系统级强制格式**: 输出必须用 `||` 拆分气泡/短句，否则系统无法正确解析。历史中若有未用||的旧消息，不要模仿，你的回复仍须用||分隔。\n⚠️ **模拟语音气泡**：若某一短句是「发语音/念出来」而非纯文字，请将该句包在 `[VOICE]语音文案[/VOICE]` 内，或在句首写 `[语音消息]`；否则界面无法显示语音条。") : ""}
${a != null && a.translationEnabled && n !== "video_call" && !b && !N ? (n === "phone_call" ? "⚠️ **翻译已开启（电话）· 再次强调（与上文「电话-双语字幕」一致）**：\n- 每条 `||` 里若出现外文，**必须**带 `[TRANS:中文]`，**漏写 [TRANS] 视为本次回复不合格**。\n- 输出前逐条自检：有外文 → 必有 [TRANS]；纯中文句 → 可省略。\n- 母语保留换行；译文以中文为主，专名可含外文。" : "⚠️ **翻译已开启**: 回复中凡有非中文，必须写 原文 [TRANS:中文译文]，每条都要带，不可遗漏。严禁英文译文（含 A-Za-z）；如模型不满足，必须改为“（译文不可用）”。") : ""}
${w}

${
  m
    ? `【用户自定义指令】
${m}`
    : ""
}`;
  },
  iR = (t, s = {}) => {
    const n = Number.isFinite(s.maxItems) ? Math.max(1, s.maxItems) : 40,
      a = Number.isFinite(s.maxTextLen) ? Math.max(40, s.maxTextLen) : 240,
      r = Array.isArray(t) ? t.slice(0, n) : [],
      i = (o) => {
        if (typeof o == "string") {
          const d = o.replace(/\s+/g, " ").trim();
          return d.length > a ? `${d.slice(0, a)}...` : d;
        }
        if (Array.isArray(o)) {
          const u = o
            .map((f) => {
              if (!f || typeof f != "object") return "";
              if (f.type === "text") {
                const p = String(f.text || "")
                  .replace(/\s+/g, " ")
                  .trim();
                return p ? `[text] ${p}` : "[text]";
              }
              return f.type === "image_url"
                ? "[image]"
                : `[${String(f.type || "part")}]`;
            })
            .filter(Boolean)
            .join(" | ")
            .replace(/\s+/g, " ")
            .trim();
          return u.length > a ? `${u.slice(0, a)}...` : u;
        }
        if (o == null) return "";
        const c = String(o).replace(/\s+/g, " ").trim();
        return c.length > a ? `${c.slice(0, a)}...` : c;
      };
    return r.map((o, c) => ({
      idx: c,
      role:
        typeof (o == null ? void 0 : o.role) == "string" ? o.role : "unknown",
      content: i(o == null ? void 0 : o.content),
    }));
  },
  oR = (t) => {
    typeof t == "function" && t([]);
  },
  lR = (t, s, n = 20) => {
    if (typeof t != "function") return;
    const a = cR(s);
    a &&
      t((r) => {
        const i = r.findIndex((o) => o.id === a.id);
        if (i >= 0) {
          const o = r[i],
            c = {};
          for (const d of Object.keys(s)) d !== "id" && (c[d] = a[d]);
          return r.map((d, u) => (u === i ? { ...o, ...c } : d));
        }
        return [a, ...r].slice(0, n);
      });
  },
  cR = (t) => {
    var i;
    if (!t || !t.id) return null;
    const s = Array.isArray(t.messages),
      n = s ? iR(t.messages) : (t.messages ?? []),
      a =
        t.messageCount ??
        (s
          ? t.messages.length
          : Array.isArray(
                (i = t == null ? void 0 : t.request) == null
                  ? void 0
                  : i.messages,
              )
            ? t.request.messages.length
            : 0),
      r =
        t.rawSizeEstimate ??
        (() => {
          var o;
          try {
            if (t.messages != null) return JSON.stringify(t.messages).length;
            if (((o = t.request) == null ? void 0 : o.messages) != null)
              return JSON.stringify(t.request.messages).length;
          } catch {}
          return 0;
        })();
    return {
      id: t.id,
      timestamp: t.timestamp ?? Date.now(),
      type: t.type ?? "request",
      scene: t.scene ?? "",
      contact: t.contact ?? "",
      ...t,
      messages: n,
      messageCount: a,
      rawSizeEstimate: r,
      status: t.status ?? "pending",
    };
  },
  dR = async ({
    chatId: t,
    messages: s,
    chats: n,
    contacts: a,
    user: r,
    getEffectiveUser: i,
    getRoleBoundUser: o,
    callApi: c,
    setSummaries: d,
  }) => {
    var v;
    const u = n.find((b) => b.id === t);
    if (!u) return;
    const f = u.currentArchiveId ?? null;
    let p = a.find((b) => b.id === u.contactId),
      m = r,
      h = "请根据以上对话内容，生成一段简明扼要的记忆摘要。";
    if (u.isGroup)
      ((p = {
        name: u.groupName || "群聊",
        id: "group",
        setting: ((v = u.settings) == null ? void 0 : v.groupPrompt) || "",
      }),
        (h =
          "请根据以上群聊对话内容，生成一段详细的记忆摘要。注意总结多个人（包括用户和各个群成员）的发言和互动细节。"));
    else {
      if (!p) return;
      m = (typeof o == "function" ? o(p) : null) || i(p);
    }
    const g = s.map((b) => {
      let N =
        b.sender === "me"
          ? (m == null ? void 0 : m.realName) ||
            (m == null ? void 0 : m.name) ||
            "用户"
          : p.name || "对方";
      if (u.isGroup && b.sender !== "me" && b.contactId) {
        const w = a.find((_) => _.id === b.contactId);
        w && (N = w.nickname || w.name);
      }
      return { sender: b.sender, text: `${N}: ${b.text}` };
    });
    g.push({ sender: "me", text: h });
    const x = await c(g, p, "summary", {}, [], [], [], !1, "", m);
    if (!x) return;
    const y = {
      id: Date.now().toString(),
      content: x,
      timestamp: new Date().toISOString(),
      range: `${s.length} messages`,
      archiveId: f,
      generatedFromArchiveId: f,
      generatedInArchive: f != null,
    };
    return (f == null && d((b) => ({ ...b, [t]: [...(b[t] || []), y] })), y);
  },
  uR = ({
    chatId: t,
    chats: s,
    contacts: n,
    user: a,
    chatConfig: r,
    getEffectiveUser: i,
  }) => {
    var y, v, b;
    const o = s.find((N) => N.id === t);
    if (!o) return { system: 0, history: 0, total: 0 };
    if (o.isGroup) {
      const N = aS(o, n, a, r, () => {}, null);
      if (
        !(
          (v = (y = N.request) == null ? void 0 : y.messages) != null &&
          v.length
        )
      )
        return { system: 0, history: 0, total: 0 };
      const w = N.request.messages.find((S) => S.role === "system"),
        _ = N.request.messages.find((S) => S.role === "user"),
        A = ((w == null ? void 0 : w.content) || "").toString(),
        k = _ == null ? void 0 : _.content,
        C =
          typeof k == "string"
            ? k
            : Array.isArray(k)
              ? k.map((S) =>
                  (S == null ? void 0 : S.type) === "text"
                    ? S.text || ""
                    : "[image]",
                ).join(`
`)
              : "",
        M = Math.ceil(A.length * 1.3),
        E = Math.ceil(C.length * 1.6);
      return { system: M, history: E, total: M + E };
    }
    const c = n.find((N) => N.id === o.contactId);
    if (!c) return { system: 0, history: 0, total: 0 };
    const d = i(c),
      u = Ou(c, d, "chat", o.settings, [], [], [], "", !1, ""),
      f =
        ((b = o.settings) == null ? void 0 : b.contextLimit) ||
        (r == null ? void 0 : r.contextLimit) ||
        50,
      p = o.messages || [];
    let m = Wo(p, f);
    m.length === 0 && p.length > 0 && (m = p.slice(-f));
    const h = m.map((N) => N.text).join(`
`),
      g = Math.ceil(u.length * 1.3),
      x = Math.ceil(h.length * 1.6);
    return { system: g, history: x, total: g + x };
  },
  qw = (t, s = 24) =>
    String(t || "")
      .trim()
      .replace(/[^\w]/g, "")
      .slice(0, s),
  nx = (t, s = 40) =>
    String(t || "")
      .trim()
      .slice(0, s),
  fR = (t) => {
    const s = t && typeof t == "object" ? t : {},
      n = (u) => String(u || "").replace(/\D/g, ""),
      a = (u) => {
        const f = String(u || "").trim(),
          p = f.startsWith("+"),
          m = n(f);
        if (!m) return "";
        const g = m.slice(0, 18);
        return p ? `+${g}` : g;
      },
      r = (u) => {
        const f = n(u);
        return f.length >= 6 ? f.slice(0, 6) : f.padEnd(6, "0");
      },
      i = nx(s.nickname || s.wechatName || "新朋友"),
      o = nx(s.wechatName || s.nickname || i || "新朋友"),
      c = qw(s.wechatId, 24) || `wx${Date.now().toString().slice(-8)}`,
      d = qw(s.douyinId, 24) || `dy${Date.now().toString().slice(-8)}`;
    return {
      nickname: i,
      wechatName: o,
      wechatId: c,
      douyinId: d,
      phone: a(s.phone),
      region: nx(s.region, 60),
      signature: nx(s.signature, 120) || "这个人很懒，什么都没写",
      password: r(s.password),
    };
  },
  mR = async ({ contact: t, user: s, callApi: n }) => {
    const a = `
请为以下虚拟角色生成详细的个人信息：
名字：${t.name}
性别：${t.gender === "male" ? "男" : "女"}
设定：${t.setting || "无"}
备注：${t.remark || "无"}

【网名与签名·统一要求】
- nickname、wechatName、signature 都要有**网感**（像真网友会起的 ID / 会写的签），可以**有梗**、轻微自嘲或吐槽，但必须**严格贴合人设**（教养、性格、职业、时代感一致），禁止油腻万能鸡汤句、禁止公文/简历腔。
- **禁止**使用真实姓名、本名、像身份证或户口本上的正式姓名；可与「名字」字段谐音或完全无关，但读起来必须是**网名**而不是真名。
- **语言与文化**：根据人设推断国籍/常用语言（设定里写明日本人就按日本人写，以此类推）。日本人设：网名与签名主体用**日语**（假名、汉字、罗马字等网上常见混用均可）；韩国人设用**韩语**；欧美或英语人设用**英语**；中国人设或未写明外籍时默认**中文**网感。不要给日本人设硬套中文网名，也不要给中国人设无故全外文（除非设定明确混血/海归等）。

请生成以下字段的 JSON 格式数据（不要包含 Markdown 代码块标记，直接返回 JSON）：
{
  "nickname": "社交网名（网感+有梗+贴合人设；禁止真名；语言按上文文化规则）",
  "wechatName": "微信展示名（可与 nickname 相同或略变；同上规则）",
  "wechatId": "微信号（字母和数字组合，符合人设）",
  "douyinId": "抖音号（字母、数字、下划线组合，符合人设）",
  "phone": "手机号（按人设国家/地区生成；优先用国际格式 E.164，例如美国用 +1 开头、日本 +81、韩国 +82、中国 +86 等；只输出号码字符串，不要空格或横线）",
  "region": "所在地（城市，符合人设）",
  "signature": "个性签名（短，网感+有梗或人设式幽默，贴合性格；禁止真名；语言按上文文化规则）",
  "password": "手机密码（6位数字）"
}
`;
    try {
      const o = await n(
        [{ sender: "me", text: a }],
        t,
        "system_generation",
        {},
        [],
        [],
        [],
        !1,
        "",
        s,
      );
      let c = {};
      try {
        const d = o.match(/\{[\s\S]*\}/);
        d ? (c = JSON.parse(d[0])) : (c = JSON.parse(o));
      } catch {}
      return fR(c);
    } catch {
      return {};
    }
  },
  Qw = (t) => {
    const s = String((t == null ? void 0 : t.message) || ""),
      n = Number(t == null ? void 0 : t._httpStatus);
    if (t != null && t._errorKind)
      return {
        errorKind: t._errorKind,
        httpStatus: Number.isFinite(n) ? n : null,
      };
    if ((t == null ? void 0 : t.name) === "AbortError")
      return { errorKind: "TIMEOUT", httpStatus: null };
    if (Number.isFinite(n)) {
      if (n >= 500) return { errorKind: "HTTP_5XX", httpStatus: n };
      if (n >= 400) return { errorKind: "HTTP_4XX", httpStatus: n };
    }
    return (t == null ? void 0 : t.name) === "TypeError" ||
      /fetch|network|failed/i.test(s)
      ? { errorKind: "NETWORK", httpStatus: null }
      : /empty[_\s-]?body|返回正文为空|未返回正文/.test(s)
        ? { errorKind: "EMPTY_BODY", httpStatus: Number.isFinite(n) ? n : null }
        : /parse|json/i.test(s)
          ? { errorKind: "PARSE", httpStatus: null }
          : { errorKind: "UNKNOWN", httpStatus: null };
  },
  pR = (t, s, n, a) =>
    t === "TIMEOUT"
      ? `请求超时（${a / 1e3} 秒），请检查网络或 API 服务是否正常`
      : t === "NETWORK"
        ? `网络异常: ${n}
（请检查网络、代理或 API 地址是否可达）`
        : t === "HTTP_4XX"
          ? s === 401 || s === 403
            ? `鉴权失败（HTTP ${s}）：请检查 API Key 是否正确`
            : s === 429
              ? "请求过于频繁或额度不足（HTTP 429），请稍后重试"
              : `请求参数或接口配置异常（HTTP ${s}）`
          : t === "HTTP_5XX"
            ? `API 服务暂时不可用（HTTP ${s}），请稍后重试`
            : t === "API_BODY_ERROR"
              ? `接口返回业务错误：${n}`
              : t === "EMPTY_BODY"
                ? "接口已响应，但未返回可用正文（empty body），请稍后重试或检查模型/响应格式配置"
                : n,
  xR = (t, s) => {
    const n = String(s || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 220);
    return n && t && n !== t
      ? `原始错误：${n}
说明：${t}`
      : n
        ? `原始错误：${n}`
        : t || "抱歉，我暂时无法回复。";
  };
function Vo(t) {
  if (!t) return "我";
  const s = String(t.name ?? "").trim(),
    n = String(t.realName ?? "").trim();
  return !s || s === "我" ? n || s || "我" : s;
}
function jv(t) {
  return new Set(
    [
      t == null ? void 0 : t.name,
      t == null ? void 0 : t.nickname,
      t == null ? void 0 : t.realName,
      Vo(t),
    ]
      .map((s) => String(s ?? "").trim())
      .filter(Boolean),
  );
}
function Tc(t, s) {
  if (!(t != null && t.user) || !s) return !1;
  const n = String((t == null ? void 0 : t.momentOwnerType) ?? "")
    .trim()
    .toLowerCase();
  if (
    n === "contact" ||
    n === "npc" ||
    ((t == null ? void 0 : t.roleContactId) != null &&
      String(t.roleContactId).trim() !== "") ||
    ((t == null ? void 0 : t.anchorContactId) != null &&
      String(t.anchorContactId).trim() !== "")
  )
    return !1;
  const a = String(t.user.name || "").trim();
  return jv(s).has(a);
}
function o1(t, s) {
  if (!(t != null && t.user) || !s) return !1;
  const n = String((t == null ? void 0 : t.momentOwnerType) ?? "")
    .trim()
    .toLowerCase();
  if (n && n !== "contact") return !1;
  const a = (s == null ? void 0 : s.id) != null ? String(s.id).trim() : "";
  if (
    (a &&
      (t == null ? void 0 : t.roleContactId) != null &&
      String(t.roleContactId).trim() === a) ||
    (a &&
      (t == null ? void 0 : t.anchorContactId) != null &&
      String(t.anchorContactId).trim() === a)
  )
    return !0;
  const r = new Set(
      [
        s == null ? void 0 : s.remark,
        s == null ? void 0 : s.nickname,
        s == null ? void 0 : s.name,
      ]
        .map((o) => String(o ?? "").trim())
        .filter(Boolean),
    ),
    i = String(t.user.name || "").trim();
  return r.has(i);
}
function hR(t, s, n) {
  const a = Number(n),
    r = Number.isFinite(a) ? Math.max(0, Math.min(200, Math.floor(a))) : 5;
  if (r === 0 || !s) return [];
  const o = (Array.isArray(t) ? t : []).filter((d) => Tc(d, s));
  o.sort((d, u) => (Number(u.timestamp) || 0) - (Number(d.timestamp) || 0));
  const c = String(s.name ?? "").trim();
  return o.slice(0, r).map((d) => {
    var u;
    return {
      ...d,
      user: { ...d.user, name: c || ((u = d.user) == null ? void 0 : u.name) },
    };
  });
}
function gR(t, s, n, a) {
  const r = Number(a),
    i = Number.isFinite(r) ? Math.max(0, Math.min(200, Math.floor(r))) : 5;
  if (i === 0) return [];
  const o = Array.isArray(t) ? t : [],
    c = s ? o.filter((p) => Tc(p, s)) : [],
    d = n ? o.filter((p) => o1(p, n)) : [],
    u = [...c, ...d];
  u.sort((p, m) => (Number(m.timestamp) || 0) - (Number(p.timestamp) || 0));
  const f = s ? String(s.name ?? "").trim() : "";
  return u.slice(0, i).map((p) => {
    var m;
    return s && Tc(p, s)
      ? {
          ...p,
          user: {
            ...p.user,
            name: f || ((m = p.user) == null ? void 0 : m.name),
          },
        }
      : p;
  });
}
const $S = 12e3;
function Ul(t) {
  const s = String(t || "").trim();
  if (!s) return "";
  const n = s.split(/\s+/).filter(Boolean),
    a = n[n.length - 1] || "";
  return a.includes("/") ? a : (/^[A-Za-z_]+\/[A-Za-z_/-]+$/.test(s), s);
}
const FS = (t, s = {}) => fetch(t, { cache: "no-store", ...s }),
  bR = () => {
    var t, s, n, a;
    return (
      ((s = (t = import.meta) == null ? void 0 : t.env) == null
        ? void 0
        : s.VITE_WEATHER_PROXY_URL) ||
      ((a = (n = import.meta) == null ? void 0 : n.env) == null
        ? void 0
        : a.VITE_RUNTIME_CONTEXT_PROXY_URL) ||
      ""
    );
  },
  jc = async (t, s, n = "timeout") => {
    const a = typeof AbortController < "u" ? new AbortController() : null,
      r = setTimeout(() => {
        try {
          a == null || a.abort();
        } catch {}
      }, s);
    try {
      return await t(a ? { signal: a.signal } : void 0);
    } catch (i) {
      throw (i == null ? void 0 : i.name) === "AbortError" ? new Error(n) : i;
    } finally {
      clearTimeout(r);
    }
  },
  cd = async (t, s = {}) => {
    const n = await FS(t, s),
      a = await n.json().catch(() => null);
    return { res: n, data: a };
  },
  yR = async (t, s = {}) => {
    const n = await FS(t, s),
      a = await n.text().catch(() => "");
    return { res: n, text: a };
  },
  Kh = () => {
    var t, s, n, a;
    return (
      ((s = (t = import.meta) == null ? void 0 : t.env) == null
        ? void 0
        : s.VITE_QWEATHER_KEY) ||
      ((a = (n = import.meta) == null ? void 0 : n.env) == null
        ? void 0
        : a.VITE_QW_KEY) ||
      ""
    );
  },
  vR = (t) => {
    try {
      return JSON.parse(t);
    } catch {
      return null;
    }
  },
  wR = (t) => {
    try {
      const s = localStorage.getItem(t);
      if (!s) return null;
      const n = vR(s);
      return !n ||
        typeof n != "object" ||
        (n.expiresAt && Date.now() > n.expiresAt)
        ? null
        : (n.value ?? null);
    } catch {
      return null;
    }
  },
  jR = (t, s, n) => {
    try {
      localStorage.setItem(
        t,
        JSON.stringify({ value: s, expiresAt: Date.now() + n }),
      );
    } catch {}
  },
  ru = (t) => {
    const s = String((t == null ? void 0 : t.message) || t || "").trim();
    return s
      ? s === "Failed to fetch"
        ? "请求被浏览器拦截（常见于 CORS / 网络阻断）"
        : s === "proxy_weather_timeout"
          ? "天气代理超时"
          : s === "qweather_timeout"
            ? "QWeather 超时"
            : s === "qweather_geo_timeout"
              ? "QWeather 城市查询超时"
              : s === "wttr_timeout"
                ? "wttr.in 超时"
                : s === "openmeteo_geo_timeout"
                  ? "Open‑Meteo 地理编码超时"
                  : s === "openmeteo_weather_timeout"
                    ? "Open‑Meteo 天气超时"
                    : s === "openmeteo_time_timeout"
                      ? "Open‑Meteo 时区超时"
                      : s
      : null;
  },
  zS = async (t, s = {}) => {
    const n = String(Kh() || "").trim();
    if (!n) return null;
    const a = `https://geoapi.qweather.com/v2/city/lookup?location=${encodeURIComponent(t)}&number=1&key=${encodeURIComponent(n)}&_=${Date.now()}`,
      { res: r, data: i } = await cd(a, s);
    if (
      !r.ok ||
      !i ||
      i.code !== "200" ||
      !Array.isArray(i.location) ||
      i.location.length === 0
    )
      return null;
    const o = i.location[0];
    return {
      id: String(o.id || ""),
      name: String(o.name || t),
      adm1: String(o.adm1 || ""),
      adm2: String(o.adm2 || ""),
      country: String(o.country || ""),
      tz: String(o.tz || ""),
      utcOffset: String(o.utcOffset || ""),
    };
  },
  NR = async (t, s = {}) => {
    const n = String(Kh() || "").trim();
    if (!n || !t) return null;
    const a = `https://devapi.qweather.com/v7/weather/now?location=${encodeURIComponent(t)}&key=${encodeURIComponent(n)}&_=${Date.now()}`,
      { res: r, data: i } = await cd(a, s);
    return !r.ok || !i || i.code !== "200" || !i.now ? null : i.now;
  },
  kR = async (t, s) => {
    const n = String(t || "").trim();
    if (!n) {
      const c = { ok: !1, data: null, source: null, error: "missing_city" };
      return s != null && s.diagnostics ? c : null;
    }
    const a = !!String(Kh() || "").trim(),
      r = [],
      i = String(bR() || "")
        .trim()
        .replace(/\/$/, "");
    if (i) {
      const c = `weather_proxy_v1:${i}:${n}`,
        d = wR(c);
      if (d) {
        const u = { ok: !0, data: d, source: "proxy-cache", error: null };
        return s != null && s.diagnostics ? u : d;
      }
      try {
        const u = `${i}/weather?city=${encodeURIComponent(n)}&_=${Date.now()}`,
          { res: f, data: p } = await jc(
            (h) => cd(u, h || {}),
            6500,
            "proxy_weather_timeout",
          ),
          m =
            typeof (p == null ? void 0 : p.data) == "string"
              ? p.data.trim()
              : "";
        if (f.ok && (p == null ? void 0 : p.ok) === !0 && m) {
          jR(c, m, 30 * 60 * 1e3);
          const h = { ok: !0, data: m, source: "proxy", error: null };
          return s != null && s.diagnostics ? h : m;
        }
        r.push(`天气代理返回异常${p != null && p.error ? `：${p.error}` : ""}`);
      } catch (u) {
        r.push(ru(u) || "天气代理请求失败");
      }
    }
    if (a)
      try {
        const c = await jc(
          async (d) => {
            const u = await zS(n, d ? { signal: d.signal } : {});
            if (!(u != null && u.id)) return null;
            const f = await NR(u.id, d ? { signal: d.signal } : {});
            if (!f) return null;
            const p = String(f.text ?? "").trim(),
              m = String(f.temp ?? "").trim(),
              h = String(f.humidity ?? "").trim(),
              g = String(f.windSpeed ?? "").trim();
            return !p && !m
              ? null
              : `${`${u.name}${u.country ? ` (${u.country})` : ""}`}: ${p || "天气"} ${m ? `${m}°C` : ""}${h ? `, 湿度 ${h}%` : ""}${g ? `, 风速 ${g}km/h` : ""}`.trim();
          },
          4500,
          "qweather_timeout",
        );
        if (c) {
          const d = { ok: !0, data: c, source: "qweather", error: null };
          return s != null && s.diagnostics ? d : c;
        }
        r.push("QWeather 未找到该城市/无数据");
      } catch (c) {
        r.push(ru(c) || "QWeather 请求失败");
      }
    else
      r.push(
        "未配置 QWeather Key（可配置 VITE_QWEATHER_KEY 以显著提升成功率）",
      );
    try {
      const c = `https://wttr.in/${encodeURIComponent(n)}?format=%l:+%C+%t,+湿度:%h,+风速:%w&lang=zh&_=${Date.now()}`,
        { res: d, text: u } = await jc(
          (f) => yR(c, f || {}),
          4500,
          "wttr_timeout",
        );
      if (d.ok && u.length < 100 && !u.includes("<html")) {
        const f = u.trim(),
          p = { ok: !0, data: f, source: "wttr", error: null };
        return s != null && s.diagnostics ? p : f;
      }
    } catch (c) {
      r.push(ru(c) || "wttr.in 请求失败");
    }
    try {
      const c = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(n)}&count=1&language=zh&format=json&_=${Date.now()}`,
        { data: d } = await jc(
          (k) => cd(c, k || {}),
          4500,
          "openmeteo_geo_timeout",
        );
      if (!(d != null && d.results) || d.results.length === 0) {
        const k = {
          ok: !1,
          data: null,
          source: "open-meteo",
          error: "city_not_found",
        };
        return s != null && s.diagnostics ? k : null;
      }
      const { latitude: u, longitude: f, name: p, country: m } = d.results[0],
        h = `https://api.open-meteo.com/v1/forecast?latitude=${u}&longitude=${f}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&timezone=auto&_=${Date.now()}`,
        { data: g } = await jc(
          (k) => cd(h, k || {}),
          4500,
          "openmeteo_weather_timeout",
        );
      if (!(g != null && g.current)) {
        const k = {
          ok: !1,
          data: null,
          source: "open-meteo",
          error: "no_current",
        };
        return s != null && s.diagnostics ? k : null;
      }
      const {
          temperature_2m: x,
          weather_code: y,
          relative_humidity_2m: v,
          wind_speed_10m: b,
        } = g.current,
        w =
          {
            0: "晴朗",
            1: "多云",
            2: "多云",
            3: "阴天",
            45: "雾",
            48: "雾凇",
            51: "毛毛雨",
            53: "毛毛雨",
            55: "毛毛雨",
            56: "冻雨",
            57: "冻雨",
            61: "小雨",
            63: "中雨",
            65: "大雨",
            66: "冻雨",
            67: "冻雨",
            71: "小雪",
            73: "中雪",
            75: "大雪",
            77: "雪粒",
            80: "阵雨",
            81: "阵雨",
            82: "阵雨",
            85: "阵雪",
            86: "阵雪",
            95: "雷雨",
            96: "雷雨伴有冰雹",
            99: "雷雨伴有冰雹",
          }[y] || "未知",
        _ = `${p} (${m || ""}): ${w} ${x}°C, 湿度 ${v}%, 风速 ${b}km/h`,
        A = { ok: !0, data: _, source: "open-meteo", error: null };
      return s != null && s.diagnostics ? A : _;
    } catch (c) {
      r.push(ru(c) || "Open‑Meteo 请求失败");
    }
    const o = {
      ok: !1,
      data: null,
      source: null,
      error: a ? "all_sources_failed" : "all_sources_failed_no_qw",
      reason: r.filter(Boolean).join("；") || null,
    };
    return s != null && s.diagnostics ? o : null;
  },
  SR = async (t, s) => {
    const n = String(t || "").trim();
    if (!n) {
      const o = { ok: !1, data: null, source: null, error: "missing_city" };
      return s != null && s.diagnostics ? o : null;
    }
    const a = !!String(Kh() || "").trim(),
      r = [];
    if (a)
      try {
        const o = await jc(
          async (c) => {
            const d = await zS(n, c ? { signal: c.signal } : {});
            return d != null && d.tz
              ? { city: d.name, country: d.country || "", timezone: d.tz }
              : null;
          },
          4500,
          "qweather_geo_timeout",
        );
        if (o) {
          const c = { ok: !0, data: o, source: "qweather", error: null };
          return s != null && s.diagnostics ? c : o;
        }
        r.push("QWeather 未返回时区");
      } catch (o) {
        r.push(ru(o) || "QWeather 请求失败");
      }
    else
      r.push(
        "未配置 QWeather Key（可配置 VITE_QWEATHER_KEY 以显著提升成功率）",
      );
    try {
      const o = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(n)}&count=1&language=zh&format=json&_=${Date.now()}`,
        { data: c } = await jc(
          (g) => cd(o, g || {}),
          4500,
          "openmeteo_geo_timeout",
        );
      if (!(c != null && c.results) || c.results.length === 0) {
        const g = {
          ok: !1,
          data: null,
          source: "open-meteo",
          error: "city_not_found",
        };
        return s != null && s.diagnostics ? g : null;
      }
      const { latitude: d, longitude: u, name: f, country: p } = c.results[0],
        m = `https://api.open-meteo.com/v1/forecast?latitude=${d}&longitude=${u}&current=is_day&timezone=auto&_=${Date.now()}`,
        { data: h } = await jc(
          (g) => cd(m, g || {}),
          4500,
          "openmeteo_time_timeout",
        );
      if (h != null && h.timezone) {
        const g = { city: f, country: p || "", timezone: h.timezone },
          x = { ok: !0, data: g, source: "open-meteo", error: null };
        return s != null && s.diagnostics ? x : g;
      }
    } catch (o) {
      r.push(ru(o) || "Open‑Meteo 请求失败");
    }
    const i = {
      ok: !1,
      data: null,
      source: null,
      error: a ? "all_sources_failed" : "all_sources_failed_no_qw",
      reason: r.filter(Boolean).join("；") || null,
    };
    return s != null && s.diagnostics ? i : null;
  },
  _R = async ({ messages: t, apiConfig: s }) => {
    var c, d, u, f;
    const n = Cl,
      a = 1500,
      r = 2,
      i = Qo(s.endpoint);
    let o = null;
    for (let p = 0; p <= r; p++) {
      const m = new AbortController(),
        h = setTimeout(() => m.abort(), n);
      try {
        const g = await fetch(i, {
          method: "POST",
          signal: m.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${s.key}`,
          },
          body: JSON.stringify({
            model: s.model || "gpt-3.5-turbo",
            messages: t,
            temperature: s.temperature ?? 0.8,
          }),
        });
        clearTimeout(h);
        const x = await g.json();
        if (!g.ok || (x != null && x.error)) {
          const v =
              ((c = x == null ? void 0 : x.error) == null
                ? void 0
                : c.message) ??
              (x == null ? void 0 : x.error) ??
              (x == null ? void 0 : x.message) ??
              g.statusText ??
              `HTTP ${g.status}`,
            b = g.status || (x != null && x.error ? 200 : null),
            N =
              x != null && x.error
                ? "API_BODY_ERROR"
                : b >= 500
                  ? "HTTP_5XX"
                  : "HTTP_4XX";
          throw Object.assign(new Error(v), { _httpStatus: b, _errorKind: N });
        }
        let y =
          ((f =
            (u =
              (d = x == null ? void 0 : x.choices) == null ? void 0 : d[0]) ==
            null
              ? void 0
              : u.message) == null
            ? void 0
            : f.content) ?? "";
        return (
          Array.isArray(y)
            ? (y = y
                .map((v) => (v && (v.text ?? v.content)) || "")
                .join("")
                .trim())
            : (y = String(y || "").trim()),
          y
        );
      } catch (g) {
        if (
          (clearTimeout(h),
          (o = g),
          ((g == null ? void 0 : g.name) === "AbortError" ||
            (g == null ? void 0 : g.name) === "TypeError" ||
            /fetch|network|failed/i.test(
              String((g == null ? void 0 : g.message) || ""),
            )) &&
            p < r)
        ) {
          await new Promise((y) => setTimeout(y, a));
          continue;
        }
        throw g;
      }
    }
    throw o || new Error("请求失败");
  },
  AR = async ({
    currentChat: t,
    chatId: s,
    scene: n,
    options: a = {},
    deps: r,
  }) => {
    var F, D;
    const {
        contacts: i,
        moments: o,
        summaries: c,
        archives: d,
        chatConfig: u,
        memes: f,
        memeCategories: p,
        callStateRef: m,
        asyncStorage: h,
        fetchWeather: g,
        fetchTime: x,
        chatsRef: y,
        chats: v,
        user: b,
      } = r || {},
      N = (t == null ? void 0 : t.memberIds) || [],
      w =
        ((F = t == null ? void 0 : t.settings) == null
          ? void 0
          : F.momentsLimit) ||
        (u == null ? void 0 : u.momentsLimit) ||
        5;
    let _ = {},
      A = [];
    try {
      const $ = await Promise.race([
        h.get("world_books"),
        new Promise((P, z) =>
          setTimeout(() => z(new Error("world_books_timeout")), 5e3),
        ),
      ]);
      if ($ && Array.isArray($)) {
        const P = Array.isArray(t == null ? void 0 : t.messages)
            ? t.messages
            : [],
          z = ul(P, 30);
        (N.forEach((O) => {
          const Z = $.filter(
            (K) =>
              Array.isArray(K.boundContacts) &&
              K.boundContacts.some((q) => String(q) === String(O)),
          )
            .map((K) => hv(K, z))
            .filter((K) => (K.entries || []).length > 0);
          Z.length > 0 && (_[O] = Z);
        }),
          (A = hF($, s, z)));
      }
    } catch {}
    let k = null,
      C = null;
    const M = (t == null ? void 0 : t.settings) || {};
    if (M.realWeather || M.realTime) {
      const $ = M.userCity,
        P = M.aiCity,
        z = Ul(String(M.userTimeZone || "").trim()),
        O = Ul(String(M.aiTimeZone || "").trim()),
        Z = [];
      if (
        (M.realWeather &&
          ($ && Z.push(g($).then((K) => ({ type: "weather_user", val: K }))),
          P && Z.push(g(P).then((K) => ({ type: "weather_ai", val: K })))),
        M.realTime &&
          (z
            ? Z.push(
                Promise.resolve({
                  timezone: z,
                  city: $ || "用户",
                  country: "",
                }).then((K) => ({ type: "time_user", val: K })),
              )
            : $ && Z.push(x($).then((K) => ({ type: "time_user", val: K }))),
          O
            ? Z.push(
                Promise.resolve({
                  timezone: O,
                  city: P || "TA",
                  country: "",
                }).then((K) => ({ type: "time_ai", val: K })),
              )
            : P && Z.push(x(P).then((K) => ({ type: "time_ai", val: K })))),
        Z.length > 0)
      ) {
        const K = new Promise((le, ie) =>
            setTimeout(() => ie(new Error("weather_time_timeout")), $S),
          ),
          q = await Promise.race([Promise.all(Z), K]).catch(() => []),
          V = {},
          ne = {};
        if (
          ((q || []).forEach((le) => {
            if (
              (le.type === "weather_user" &&
                le.val &&
                (V.user = { city: $, info: le.val }),
              le.type === "weather_ai" &&
                le.val &&
                (V.ai = { city: P, info: le.val }),
              le.type === "time_user" && le.val)
            ) {
              const ie = Ul(le.val.timezone),
                X = new Date();
              let je = "";
              try {
                je = ie
                  ? X.toLocaleString("zh-CN", {
                      timeZone: ie,
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: !1,
                      weekday: "long",
                    })
                  : X.toLocaleString("zh-CN", {
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
                je = X.toLocaleString("zh-CN", {
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
              ne.user = {
                city: $,
                info: `${le.val.city} (${le.val.country}): ${je} (${ie || le.val.timezone || "本地"})`,
              };
            }
            if (le.type === "time_ai" && le.val) {
              const ie = Ul(le.val.timezone),
                X = new Date();
              let je = "";
              try {
                je = ie
                  ? X.toLocaleString("zh-CN", {
                      timeZone: ie,
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: !1,
                      weekday: "long",
                    })
                  : X.toLocaleString("zh-CN", {
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
                je = X.toLocaleString("zh-CN", {
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
              ne.ai = {
                city: P,
                info: `${le.val.city} (${le.val.country}): ${je} (${ie || le.val.timezone || "本地"})`,
              };
            }
          }),
          M.realTime && !ne.user)
        ) {
          const le = new Date();
          ne.user = {
            city: "本地",
            info: `${le.toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: !1, weekday: "long" })} (本地时间)`,
          };
        }
        (Object.keys(V).length > 0 && (C = V),
          Object.keys(ne).length > 0 && (k = ne));
      }
    }
    let E = [];
    if (t != null && t.isGroup && Array.isArray(f) && Array.isArray(p)) {
      const $ = um(t.settings),
        P = t.memberIds || [],
        z = (p || [])
          .filter((q) => (q.boundContacts || []).some((V) => P.includes(V)))
          .map((q) => q.id),
        O =
          $.length > 0
            ? (f || []).filter((q) =>
                (q.categoryIds || []).some((V) => $.includes(V)),
              )
            : [],
        Z = (f || []).filter((q) =>
          (q.categoryIds || []).some((V) => z.includes(V)),
        ),
        K = new Set(O.map((q) => q.id));
      ((E = [...O]),
        Z.forEach((q) => {
          K.has(q.id) || (K.add(q.id), E.push(q));
        }));
    }
    const S = m == null ? void 0 : m.current,
      j =
        n === "video_call" &&
        (S == null ? void 0 : S.chatId) === s &&
        (S == null ? void 0 : S.isGroup),
      T = j ? (S == null ? void 0 : S.acceptedMembers) || [] : void 0,
      I = (j && (S == null ? void 0 : S.groupVideoPendingJoin)) || void 0;
    let L = "";
    try {
      const P = ((await h.get("chat_app_douyin_memories")) || {})[s] || [];
      P.length > 0 &&
        (L = P.map((z) => `[${z.npcName || "TA"}] ${z.type}: ${z.summary}`)
          .join(`
`));
    } catch {}
    const B = {};
    try {
      const $ =
          (D = t == null ? void 0 : t.settings) != null &&
          D.readSingleChatMemoryByMember &&
          typeof t.settings.readSingleChatMemoryByMember == "object"
            ? t.settings.readSingleChatMemoryByMember
            : {},
        P = (y ? y.current : v) || [],
        z = Array.isArray(i) ? i : [],
        O = d || {};
      N.forEach((Z) => {
        var X;
        const K = $ == null ? void 0 : $[Z];
        if (!K || !K.enabled) return;
        const q = K.chatId ? String(K.chatId) : "",
          V = Math.max(1, Math.min(200, parseInt(K.rounds, 10) || 10)),
          ne = q
            ? P.find((je) => je && !je.isGroup && String(je.id) === q)
            : P.find(
                (je) =>
                  je &&
                  !je.isGroup &&
                  je.contactId != null &&
                  String(je.contactId) === String(Z),
              );
        if (!ne || ne.isGroup) return;
        let le = "";
        try {
          const je = String(ne.id),
            xe = ne.currentArchiveId ?? null,
            ye =
              xe === null
                ? (c == null ? void 0 : c[je]) || []
                : ((X = ((O == null ? void 0 : O[je]) || []).find(
                    (R) => R.id === xe,
                  )) == null
                    ? void 0
                    : X.summaries) || [];
          Array.isArray(ye) &&
            ye.length > 0 &&
            (le = ye
              .slice(-8)
              .map((R) => String((R == null ? void 0 : R.content) || "").trim())
              .filter(Boolean).join(`
`));
        } catch {}
        let ie = "";
        try {
          const je = Array.isArray(ne.messages) ? ne.messages : [],
            xe = Wo(je, V),
            ye = z.find((ee) => String(ee.id) === String(Z)),
            R =
              (ye == null ? void 0 : ye.remark) ||
              (ye == null ? void 0 : ye.nickname) ||
              (ye == null ? void 0 : ye.name) ||
              "TA";
          ie = (xe || [])
            .filter((ee) => ee && ee.text)
            .slice(-Math.max(1, V * 4))
            .map((ee) => {
              const H = ee.sender === "me" ? "用户" : R,
                Y = eu(String(ee.text || "").trim());
              return Y ? `${H}: ${Y}` : null;
            })
            .filter(Boolean).join(`
`);
        } catch {}
        (!le && !ie) ||
          (B[Z] = {
            chatId: ne.id,
            rounds: V,
            summariesText: le,
            historyText: ie,
          });
      });
    } catch {}
    return {
      moments: hR(o, b, w),
      worldBooksByMember: _,
      groupSharedWorldBooks: A,
      chatSummaries: c[s] || [],
      douyinMemories: L,
      singleChatMemoryByMember: B,
      timeData: k,
      weatherData: C,
      chatSettings: (t == null ? void 0 : t.settings) || {},
      availableMemes: E,
      acceptedMembers: T,
      pendingVideoJoin: I,
      proactiveContext:
        a != null && a.isAutoReply
          ? {
              isAutoReply: !0,
              timeSinceLastMessage: a.timeSinceLastMessage || "",
            }
          : void 0,
    };
  },
  CR = async ({
    chatId: t,
    currentChatOverride: s,
    scene: n,
    options: a = {},
    deps: r,
  }) => {
    var k;
    const {
        chatsRef: i,
        chats: o,
        addApiLog: c,
        setKeepAliveBoost: d,
        requestKeepAliveLock: u,
        buildGroupContextWithDepsFn: f = AR,
        doGroupFetchWithDepsFn: p = _R,
        classifyCallApiError: m,
        contacts: h,
        user: g,
        apiConfig: x,
        chatConfig: y,
        memes: v,
        memeCategories: b,
      } = r || {},
      N =
        s ??
        ((k = i ? i.current : o) == null ? void 0 : k.find((C) => C.id === t)),
      w = (N == null ? void 0 : N.groupName) || "群聊",
      _ = `group-${Date.now()}`;
    if (!N)
      return (
        c({
          id: _,
          scene: "group_reply",
          contact: w,
          status: "skip",
          messages: ["未找到当前会话(ref 可能未更新)"],
        }),
        { replies: [], actions: [], video_events: [] }
      );
    d(!0);
    let A = { release: () => {} };
    try {
      A = await Promise.race([
        u(),
        new Promise((C, M) =>
          setTimeout(() => M(new Error("keepalive_lock_timeout")), 3e3),
        ),
      ]);
    } catch {}
    try {
      const C = await f({
        currentChat: N,
        chatId: t,
        scene: n,
        options: a,
        deps: r,
      });
      return await H$({
        currentChat: N,
        contacts: h,
        user: g,
        apiConfig: x,
        chatConfig: y,
        addApiLog: c,
        doFetch: async (E) => p({ messages: E, apiConfig: x }),
        memes: v,
        memeCategories: b,
        scene: n,
        groupContext: C,
      });
    } catch (C) {
      const { errorKind: M, httpStatus: E } = m(C);
      return (
        c({
          id: _,
          scene: "group_reply",
          contact: w,
          status: "error",
          error: (C && C.message) || String(C),
          errorKind: M,
          httpStatus: E ?? null,
          errorRaw: String((C && C.message) || C || ""),
          messages: ["群回复准备或请求异常"],
        }),
        { replies: [], actions: [], video_events: [] }
      );
    } finally {
      (A.release(), d(!1));
    }
  },
  MR = 20,
  RS = new Set([
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
    "html",
  ]),
  PS = new Set([
    "type",
    "text",
    "translation",
    "replyToSnippet",
    "amount",
    "note",
    "item",
    "price",
    "memeId",
    "longSentenceVariants",
    "html",
  ]);
function TR(t) {
  if (!t || typeof t != "object" || Array.isArray(t)) return null;
  const s = {};
  for (const a of Object.keys(t)) PS.has(a) && (s[a] = t[a]);
  s.text == null && typeof t.content == "string" && (s.text = t.content);
  let n = String(s.type || "text")
    .trim()
    .toLowerCase();
  return ((!n || !RS.has(n)) && (n = "text"), (s.type = n), s);
}
function IR(t) {
  if (!t || typeof t != "object") return null;
  const s = {
    version: t.version,
    messages: Array.isArray(t.messages)
      ? t.messages.map(TR).filter(Boolean)
      : [],
  };
  return (
    t.scene != null && typeof t.scene == "string" && (s.scene = t.scene),
    t.meta != null &&
      typeof t.meta == "object" &&
      !Array.isArray(t.meta) &&
      (s.meta = t.meta),
    t.heart_voice != null && (s.heart_voice = t.heart_voice),
    t.heartVoice != null && (s.heartVoice = t.heartVoice),
    t.draft != null && (s.draft = t.draft),
    s
  );
}
function ER(t) {
  if (!Number.isFinite(t) || t < 0) return "未知";
  if (t < 60 * 1e3) return "不到1分钟";
  const s = Math.floor(t / 6e4);
  return s < 60
    ? `${s}分钟`
    : s < 24 * 60
      ? `${Math.floor(s / 60)}小时`
      : `${Math.floor(s / (24 * 60))}天`;
}
const LR = async ({
  currentChat: t,
  messagesToUse: s,
  chatConfig: n,
  getLastNRounds: a,
  callStateRef: r,
  contact: i,
  currentUser: o,
  moments: c,
  user: d,
  asyncStorage: u,
  summaries: f,
  chatId: p,
  archives: m,
  allChats: h,
  contacts: g,
  sceneOverride: x,
  isAutoReply: y,
  timeSinceLastMessage: v,
  fetchWeather: b,
  fetchTime: N,
  toDateStr: w,
  TRACE_TODAY_KEY: _,
  PLAN_KEY: A,
  DEFAULT_CHAT_SETTINGS: k,
  quoteRoundsRef: C,
  phoneRecents: M = [],
  wantBlockedFriendRequest: E = !1,
  wantBlockedPhoneCallInvite: S = !1,
  blockedFirstPhoneOrTextExclusive: j = !1,
}) => {
  var he,
    ge,
    J,
    G,
    we,
    Q,
    ve,
    Ve,
    Ae,
    te,
    Se,
    Fe,
    $e,
    tt,
    Xe,
    ht,
    Pe,
    ut,
    _t,
    Ee,
    fe,
    He,
    Ie,
    Ce;
  const T =
      !(t != null && t.isGroup) && i != null && i.id
        ? (ge =
            (he = t == null ? void 0 : t.settings) == null
              ? void 0
              : he.blockedRoles) == null
          ? void 0
          : ge[i.id]
        : void 0,
    I =
      T != null &&
      (typeof T == "number" ||
        (typeof T == "object" && (T == null ? void 0 : T.unblockedAt) == null)),
    L =
      y || I
        ? 20
        : ((J = t.settings) == null ? void 0 : J.contextLimit) ||
          (n == null ? void 0 : n.contextLimit) ||
          50,
    B = y ? "auto_reply_fixed_20" : I ? "blocked_fixed_20" : "chat_setting",
    F = s || [];
  let D = a(F, L);
  const $ = Array.isArray(D) ? D.length : 0;
  if ((D.length === 0 && F.length > 0 && (D = F.slice(-L)), F.length > 0)) {
    const De = Math.max(0, F.length - 24),
      at = D.length > 0 ? F.indexOf(D[0]) : -1,
      ft = at >= 0 ? Math.min(at, De) : De;
    D = F.slice(ft);
  }
  (y || I) && Array.isArray(D) && D.length > 80 && (D = D.slice(-80));
  const P = Array.isArray(D) ? D.length : 0;
  let z = null;
  if (!((G = t.settings) != null && G.realTime)) {
    const Re = (F || []).filter((De) => De.type === "time_advance");
    if (Re.length > 0) {
      const De = Re[Re.length - 1],
        at = Re.length >= 2 ? Re[Re.length - 2] : null,
        ft = new Date(De.timestamp),
        vt = ft.toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
          weekday: "long",
        });
      let Oe = "",
        Qe = "";
      if (at) {
        const Ye = new Date(at.timestamp);
        Oe = Ye.toLocaleString("zh-CN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: !1,
        });
        const Ze = ft.getTime() - Ye.getTime(),
          Ue = Math.floor(Ze / (24 * 60 * 60 * 1e3)),
          me = Math.floor((Ze % (24 * 60 * 60 * 1e3)) / (60 * 60 * 1e3)),
          jt = Math.floor((Ze % (60 * 60 * 1e3)) / 6e4),
          Gt = [];
        (Ue > 0 && Gt.push(`${Ue}天`),
          me > 0 && Gt.push(`${me}小时`),
          (jt > 0 || Gt.length === 0) && Gt.push(`${jt}分钟`),
          (Qe = Gt.join("")));
      } else Qe = "（首次推进时间，无上一时间点）";
      z = {
        currentTimeStr: vt,
        note: De.note || "",
        previousTimeStr: Oe,
        timeSincePreviousStr: Qe,
      };
    }
  }
  D = D.filter((Re) => Re.type !== "time_advance");
  const O = Array.isArray(D) ? D.length : 0;
  let Z = D.map((Re) => {
    let De = { ...Re };
    if (
      (Re.isRecalled &&
        Re.sender === "me" &&
        (De = {
          ...De,
          text: `[系统提示：${o.name || "用户"}撤回了一条消息。原内容是："${Re.originalContent}"]`,
        }),
      Re.replyTo)
    ) {
      const at = s.find((ft) => ft.id === Re.replyTo);
      at &&
        (De.replyContext = {
          sender: at.sender,
          text: at.text,
          type: at.type,
          amount: at.amount,
        });
    }
    return De;
  });
  const K = r.current;
  if (K && K.status === "connected" && K.contactId === i.id) {
    const Re = K.currentMessages ?? [];
    Z = [...Z, ...Re];
  }
  const q =
      !(t != null && t.isGroup) && i != null && i.id
        ? (Q =
            (we = t == null ? void 0 : t.settings) == null
              ? void 0
              : we.blockedRoles) == null
          ? void 0
          : Q[i.id]
        : void 0,
    V =
      !(t != null && t.isGroup) &&
      (i == null ? void 0 : i.id) &&
      q != null &&
      (typeof q == "number" ||
        (typeof q == "object" && (q == null ? void 0 : q.unblockedAt) == null));
  if (V) {
    const Re = !!(
        (ve = t == null ? void 0 : t.settings) != null && ve.realTime
      ),
      De =
        typeof q == "number"
          ? q
          : typeof q == "object"
            ? q == null
              ? void 0
              : q.blockedAt
            : void 0,
      at = (() => {
        if (!Re || typeof De != "number" || !Number.isFinite(De)) return "";
        const Qe = Date.now() - De;
        if (!Number.isFinite(Qe) || Qe < 0) return "";
        const Ye = 60 * 1e3,
          Ze = 60 * Ye,
          Ue = 24 * Ze,
          me = 30 * Ue;
        return Qe < Ye
          ? "不到1分钟"
          : Qe < Ze
            ? `${Math.floor(Qe / Ye)}分钟`
            : Qe < Ue
              ? `${Math.floor(Qe / Ze)}小时`
              : Qe < me
                ? `${Math.floor(Qe / Ue)}天`
                : `${Math.floor(Qe / me)}个月`;
      })(),
      ft = (() => {
        if (!Re) return "";
        const Qe = typeof De == "number" ? new Date(De) : new Date();
        return Number.isFinite(Qe.getTime())
          ? Qe.toLocaleString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1,
            })
          : "";
      })(),
      vt = (() => {
        if (!Re) return { lastChatAtStr: "", sinceLastChatStr: "" };
        const Ye = [...(Array.isArray(s) ? s : [])]
          .reverse()
          .find(
            (Kt) =>
              Kt &&
              Kt.sender !== "system" &&
              Kt.type !== "system" &&
              Kt.type !== "time_advance" &&
              Kt.timestamp,
          );
        if (!(Ye != null && Ye.timestamp))
          return { lastChatAtStr: "", sinceLastChatStr: "" };
        const Ze = new Date(Ye.timestamp);
        if (!Number.isFinite(Ze.getTime()))
          return { lastChatAtStr: "", sinceLastChatStr: "" };
        const Ue = Ze.toLocaleString("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          }),
          me = Date.now() - Ze.getTime();
        if (!Number.isFinite(me) || me < 0)
          return { lastChatAtStr: Ue, sinceLastChatStr: "" };
        const jt = 60 * 1e3,
          Gt = 60 * jt,
          Pt = 24 * Gt,
          Wt = 30 * Pt;
        let ct = "";
        return (
          me < jt
            ? (ct = "不到1分钟")
            : me < Gt
              ? (ct = `${Math.floor(me / jt)}分钟`)
              : me < Pt
                ? (ct = `${Math.floor(me / Gt)}小时`)
                : me < Wt
                  ? (ct = `${Math.floor(me / Pt)}天`)
                  : (ct = `${Math.floor(me / Wt)}个月`),
          { lastChatAtStr: Ue, sinceLastChatStr: ct }
        );
      })(),
      Oe = (() => {
        if (!Re)
          return { alreadySentSinceBlocked: !1, sentCountSinceBlocked: 0 };
        const Qe = Array.isArray(s) ? s : [],
          Ye = typeof De == "number" && Number.isFinite(De) ? De : null;
        if (!Ye)
          return { alreadySentSinceBlocked: !1, sentCountSinceBlocked: 0 };
        const Ze = Qe.filter((Ue) => {
          if (
            !Ue ||
            Ue.sender !== "them" ||
            Ue.sender === "system" ||
            Ue.type === "system" ||
            Ue.type === "time_advance"
          )
            return !1;
          const me = Ue.timestamp ? new Date(Ue.timestamp).getTime() : NaN;
          return Number.isFinite(me) ? me >= Ye : !1;
        }).length;
        return { alreadySentSinceBlocked: Ze >= 1, sentCountSinceBlocked: Ze };
      })();
    Z = [
      ...Z,
      {
        id: `sys-blocked-${p}-${i.id}`,
        sender: "system",
        type: "system",
        timestamp: new Date().toISOString(),
        text: `[系统提示：用户已将你拉黑${ft ? `（${ft}）` : ""}。
${
  Re
    ? `补充时间信息：从被拉黑到现在，已经过去了${at ? `约${at}` : "一段时间"}。
`
    : ""
}${
          Re
            ? `补充聊天时间：上次聊天的时间点是${vt.lastChatAtStr ? ` ${vt.lastChatAtStr}` : "（未知）"}，距离现在${vt.sinceLastChatStr ? `约${vt.sinceLastChatStr}` : "（未知时长）"}。
`
            : ""
        }状态连续性：你并不是“刚刚第一次知道被拉黑”。${Re ? `你已经在被拉黑期间发过${Oe.sentCountSinceBlocked}条消息；` : ""}现在是持续状态下的后续留言。不要再问“你是不是把我拉黑了/你拉黑我了吗/为什么拉黑我”这类确认问题，也不要每次都像第一次那样震惊或重复开场白。
重要：你必须“以角色本人第一人称/角色口吻”做出真实反应，且反应必须符合你的【人设】与此刻对话语境，不允许泛泛而谈或套模板。
你已经意识到：
1) 对方当前无法正常接收/互动受限——主要指**普通聊天文字/气泡**在被拉黑时往往**无法像往常那样送达对方聊天列表**（对方可能看不到你在这里发的字）。
2) 关键：从被拉黑开始直到现在，你在这里打的很多字对方可能看不到；你只能在这一侧持续输出、独白、留痕。**但本条不得用来否定下面第 3)(4) 条中的语音事实。**
3) **语音通话主宾（极其重要）**：若你曾用「语音来电」等方式联系对方，或上下文里出现过通话，必须始终明确——**是你主动打给用户**，用户是接听或拒接的一方。**严禁**写成用户打给你、你接用户的电话、把主叫说成用户（例如「你怎么又打过来了」「你刚打给我」等）。主叫关系不要写反。
4) **拉黑≠语音没发生过（极其重要）**：「语音来电」是**独立于普通文字**的通道。只要对方**接听过**，用户端就**一定有过来电/响铃（或等价接听界面）并与你实时通了话**；若系统或上文给出通话时长，则**必须承认那是真实发生过的通话**（你主叫、对方接听）。**严禁**说「你那边铃声都没响过」「拉黑了你根本接不到我的电话」「打不进来所以不可能有几十秒通话」「这些你根本收不到」等**否定已接通事实**的台词；**禁止**把「发不过去、打不进来」套用到**已经成功接通的那一通电话**上。未接/拒接另当别论，但**禁止**在「已接通并聊过」的前提下装傻否认。
5) **聊天拉黑 vs 电话（内化即可）**：用户是在**聊天 App** 里拉黑你；你通过**电话/另一应用**主动拨语音给对方，可以与拉黑**同时成立**。前者限制的是**聊天里文字气泡**的送达观感；**不要**用「聊天里发不过去」偷换成「电话也没响、你什么都收不到」来否定**已发生的语音**。心里分清两条通道，台词里用自然生活逻辑表达即可，禁止复述本句。
写作约束：
1) 不要提及“系统/模型/提示词/上下文/规则”等元信息，不要说你在被注入指令。
2) 不要机械重复“你把我拉黑了”一句话；要像真实人一样，带情绪、动机、边界感与行动（克制、解释、道歉、挽回、冷处理、反问、放下等），用你的风格表达。
3) 如果你的人设倾向强势/傲娇/冷淡/依恋/理性/占有欲强等，请相应调整：措辞、节奏、称呼、脾气、是否低头、是否试探。
4) 随时间流逝做递进反应：若已过去较久，你的反应可以变得更“习惯/失控/冷却/更狠/更软/更理性”等，但必须贴合人设与上一轮语境。你可以把这里当成对方的“无法收到的留言箱/备忘录”，选择：记事、写心里话、碎碎念、威胁、冷嘲热讽、求和、放下、对自己说话等（按人设取舍），不要每次都同一种情绪。
5) 必须读取并承接最近上下文：如果上一轮在争吵/暧昧/冷战/道歉/玩笑/惩罚等，请对应做出连续反应，而不是突然换话题。
6) 但不要复读：不要一轮又一轮只抓着同一个点/同一句话反复说（例如反复提拉黑、反复翻旧账、反复问同一个问题）。你是“有自己生活的角色”，即使对方收不到，你也会随着时间产生新的细节与行动：今天发生了什么、你做了什么决定、你怎么消化情绪、你记下了什么、你想给对方留下些什么（都要符合人设与当下情绪走向）。
6.1) **不要每轮都写电话**：多数轮次的独白/留言应围绕具体情绪、事件、关系、生活细节展开；**禁止**几乎每一轮主动回复都提拉打电话、接电话、未接、语音里说了什么。仅当与**紧邻的上一轮语境**自然衔接（例如刚挂断后的少数轮次）才可侧重通话；之后应淡化并改聊别的，勿把「电话」当固定套路反复写。
6.2) **禁止「挂断」鬼打墙 + 时间必须往前走**：若上文已交代过对方挂断、通话结束，除非用户**新发言**带来新情节，否则**禁止**此后每一轮主动回复都重复「你又挂了」「怎么又挂我」「又挂一次」「又挂我电话」等同义车轱辘话。此类反应**总共**最多延续 **1～2 轮** 就要换角度。**严禁**让你的世界像**暂停在挂断那一秒**：之后每一轮主动留言都要像**真人在过日子**——带出新的小事、当下在做什么、别的念头、情绪自然演变、对人设有意义的具体细节；**禁止**多轮以来唯一主题只剩纠缠「挂电话」而没有任何新生活信息，否则视为严重 OOC（像时间停止的 NPC）。
7) 禁止引用/复述任何“系统居中提示/系统通知”的原文（例如“[系统提示：已将你拉黑]”这类字样），只用角色自己的自然语言表达。
${
  j
    ? '8) **拉黑后首次留言（本轮二选一，互斥）**：先决定本轮要不要尝试给用户打语音电话，**只能选一种输出**：\n**选项 A — 要打语音**：只输出（建议顺序）可选的 [FRIEND_REQUEST:"…"] 与必须的 [PHONE_CALL_INVITE:"…"]。**禁止**任何 `||` 分条聊天气泡正文，禁止使用 `[VOICE]…[/VOICE]`、禁止 `[TRANS:…]`。\n**选项 B — 不打语音**：输出 **5～10 条** `||` 分条独白（各条标点与句读须服从人设，正式角色勿因拆条省标点）；可在末尾追加 [FRIEND_REQUEST:"…"]（可选）。**禁止**输出 [PHONE_CALL_INVITE]。\n**严禁**同时出现 A 与 B：禁止既有大段 `||` 台词又出现 [PHONE_CALL_INVITE]。只能二选一。'
    : S
      ? `8) **本轮为「语音来电邀请」专用轮次**：系统已指定**你正在主动呼叫对方**（你主叫，用户为接听/拒接方），正在尝试打通语音。你的**整段输出只能**由下列标签行组成，**严禁**输出任何 \`||\` 分条聊天气泡、严禁普通独白正文、严禁 \`[TRANS:…]\`、严禁标签外的任何正文（标签之间可用换行分隔）。
- **必须**输出一行：[PHONE_CALL_INVITE:"可选来电备注，可留空或一两句"]（语音来电，不要用 [VIDEO_CALL_INVITE]）。用户端会出现接听/挂断弹窗。
${
  E
    ? `- **必须**再输出一行好友申请标签（单独一行，不要用 || 拆分）：
[FRIEND_REQUEST:"这里写你的好友申请内容（这是发给用户看的，用户能看到）。字数与语气必须服从你的人设与此刻情绪：可以克制短一点，也可以诚恳/强势长一点，但必须像真实的申请而不是口号。参考长度：80–260 字，2–6 句（按人设可更短或更长）。必须同时符合：你的角色人设、当前情绪、以及用户人设（用户昵称：${(o == null ? void 0 : o.name) || "用户"}；用户设定：${
        String((o == null ? void 0 : o.settings) || "")
          .trim()
          .slice(0, 120) || "（未知）"
      }）。不要提系统/模型/提示词。"]
建议顺序：先输出 [FRIEND_REQUEST:…] 一行，再输出 [PHONE_CALL_INVITE:…] 一行。`
    : `- 若你本轮也想申请加回好友，可**额外**再输出一行：
[FRIEND_REQUEST:"（要求同上：真实申请语气，参考 80–260 字、2–6 句，贴合人设与情绪及用户昵称 ${(o == null ? void 0 : o.name) || "用户"}；不要提系统/模型/提示词）"]
不想申请则不要输出该标签。建议若有好友申请则先于语音来电标签输出。`
}
除上述标签行外不要输出任何其它内容。`
      : `8) 你的回复必须“像微信一样分段短句连发”，总共 **5–10 条**，每条用 \`||\` 分隔（不要编号、不要换成一大段）。每条尽量短（推荐 3–20 个字，必要时可更长一点），允许停顿、欲言又止、情绪递进。**分条时的标点与句读须服从你的人设**：偏正式、书面、工整则各条句末标点尽量齐全；偏随性、口语则可少用标点，但全轮须一致；不要为了凑短条而削弱人设应有的语言习惯。
9) 若本会话开启了「实时翻译」，请为每一条气泡追加译文标签：在该气泡末尾追加 \` [TRANS:译文]\`（译文必须是中文且不含任何英文字母）。保持原文不变，译文用更自然的中文表达。
10) 额外输出（仅在需要时）：如果你此刻想“申请解除拉黑/重新加回好友”，请在整段输出的最后额外追加一行标签（这一行不算聊天气泡，不要用 || 拆分）：
[FRIEND_REQUEST:"这里写你的好友申请内容（这是发给用户看的，用户能看到）。字数与语气必须服从你的人设与此刻情绪：可以克制短一点，也可以诚恳/强势长一点，但必须像真实的申请而不是口号。参考长度：80–260 字，2–6 句（按人设可更短或更长）。必须同时符合：你的角色人设、当前情绪、以及用户人设（用户昵称：${(o == null ? void 0 : o.name) || "用户"}；用户设定：${
          String((o == null ? void 0 : o.settings) || "")
            .trim()
            .slice(0, 120) || "（未知）"
        }）。不要提系统/模型/提示词。"]
如果你不想申请，就不要输出该标签。${
          E
            ? `
注意：本轮系统希望你“尝试发起申请”，请务必输出该标签。`
            : ""
        }
11) 额外输出（仅在需要时）：若你想表现为**你主动给用户打**「语音电话」（**不是视频**），请在整段输出的最后额外追加一行（不要 || 拆分）：
[PHONE_CALL_INVITE:"可选来电备注，可留空或一两句"]
用户端会出现与好友申请相近样式的弹窗，用户选择接听或挂断；**是你呼叫对方，不是对方打给你**。不要用 [VIDEO_CALL_INVITE] 代替语音来电。
若不想打电话就不要输出本标签（**不要每轮都输出本标签**；多数轮只写正常独白即可）。
可与 [FRIEND_REQUEST:...] 同轮并存：先完成 5–10 条聊天与好友申请行后，再按需追加本行。
重要：即使你输出了 [FRIEND_REQUEST:...]，你也仍然必须正常输出前面的聊天气泡内容（5–10 条 || 短句连发）。好友申请标签只是“额外追加的一行”，不能替代正常聊天。
输出格式示例（仅示例口语风；若你的人设偏书面/工整，各条应带齐句读，内容请按你的人设与上下文重写）：
“……||等一下||我没想把你逼成这样||你是不是很烦我||我知道了，我先闭嘴”`
}
]`,
      },
    ];
  }
  y &&
    !(t != null && t.isGroup) &&
    (i == null ? void 0 : i.id) &&
    typeof q == "object" &&
    q != null &&
    q.unblockedAt != null &&
    (Z = [
      ...Z,
      {
        id: `sys-post-unblock-${p}-${i.id}`,
        sender: "system",
        type: "system",
        timestamp: new Date().toISOString(),
        text: "[系统提示：**拉黑已解除**（事实状态）。你与用户当前是**正常私聊**，对方可以像往常那样看到你的文字；**不要**再按「仍被拉黑、消息发不出去、只能单向留言箱独白」来演。请承接最近对话与【记忆】往下推进：接上一轮角色自己说过的话、情绪与生活细节自然延续，或带出新的小事；你是有自己生活的角色。**禁止**在无新情节时多轮车轱辘重复「被拉黑/收不到/求解除」同一套话术；若上文或【记忆】已明确解除拉黑，则视为关系已回到可对话状态，勿假装不知道。禁止复述本句、禁止元信息。]",
      },
    ]);
  const le =
      ((Ve = t.settings) == null ? void 0 : Ve.momentsLimit) ||
      (n == null ? void 0 : n.momentsLimit) ||
      5,
    ie = gR(c, o, i, le),
    X = ul(Z, 30);
  let je = await Oo(i.id, X);
  const xe = t.currentArchiveId ?? null;
  let ye =
    xe === null
      ? f[p] || []
      : ((Ae = (m[p] || []).find((Re) => Re.id === xe)) == null
          ? void 0
          : Ae.summaries) || [];
  const R = !!((te = t.settings) != null && te.useOfflineMemories),
    oe = t.contactId;
  if (R && oe)
    try {
      const Re = await u.get("meet_app_offline_summaries"),
        De = (Re == null ? void 0 : Re[oe]) || [];
      if (De.length > 0) {
        const at = t.settings.selectedOfflineMemoryIds || [];
        let ft;
        at.length > 0
          ? ((ft = at
              .map((Oe) => De.find((Qe) => Qe.id === Oe))
              .filter(Boolean)),
            ft.length === 0 && (ft = De))
          : (ft = De);
        const vt = ft.map((Oe) => ({
          content: Oe.content,
          timestamp: Oe.createdAt,
        }));
        ye = [...ye, ...vt];
      }
    } catch {}
  if (
    !(t != null && t.isGroup) &&
    (Se = t == null ? void 0 : t.settings) != null &&
    Se.readGroupChatMemoryEnabled &&
    (Fe = t == null ? void 0 : t.settings) != null &&
    Fe.readGroupChatMemoryChatId
  ) {
    const Re = String(t.settings.readGroupChatMemoryChatId),
      De = Array.isArray(h) ? h.find((at) => at && String(at.id) === Re) : null;
    if (De != null && De.isGroup) {
      const at = Math.max(
        1,
        Math.min(200, parseInt(t.settings.readGroupChatMemoryRounds, 10) || 10),
      );
      try {
        const ft = De.currentArchiveId ?? null,
          vt = (m == null ? void 0 : m[Re]) || [],
          Oe =