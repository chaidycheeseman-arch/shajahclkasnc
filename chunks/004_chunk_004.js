          }
          if (h.type === "group_announcement_publish") {
            const v = String(
              h.text ?? h.content ?? h.公告 ?? h.群公告 ?? "",
            ).trim();
            return v
              ? { type: "group_announcement_publish", text: v, contactId: y }
              : null;
          }
          if (h.type === "group_name_set") {
            const v = String(
              h.name ?? h.groupName ?? h.group_name ?? h.群名 ?? "",
            ).trim();
            return v ? { type: "group_name_set", name: v, contactId: y } : null;
          }
          if (h.type === "group_member_title_set") {
            const v = String(
                h.targetContactId ??
                  h.target_contact_id ??
                  h.target ??
                  h.目标成员 ??
                  h.用户 ??
                  "",
              ).trim(),
              b = String(
                h.title ?? h.memberTitle ?? h.member_title ?? h.群昵称 ?? "",
              ).trim();
            if (!v) return null;
            if (v.toLowerCase() === "user")
              return b
                ? {
                    type: "group_member_title_set",
                    targetContactId: "user",
                    title: b,
                    contactId: y,
                  }
                : null;
            const N = c.has(v) ? v : d.get(v) || null;
            return !N || !b
              ? null
              : {
                  type: "group_member_title_set",
                  targetContactId: N,
                  title: b,
                  contactId: y,
                };
          }
          if (h.type === "group_member_mute") {
            const v = String(
                h.targetContactId ??
                  h.target_contact_id ??
                  h.target ??
                  h.目标成员 ??
                  "",
              ).trim(),
              b = h.minutes ?? h.mins ?? h.duration ?? h.分钟,
              N = Math.max(1, Math.min(1440, parseInt(b, 10) || 0));
            if (!v || !N) return null;
            const w = c.has(v) ? v : d.get(v) || null;
            return w
              ? {
                  type: "group_member_mute",
                  targetContactId: w,
                  minutes: N,
                  contactId: y,
                }
              : null;
          }
          return null;
        })
        .filter(Boolean)),
    { replies: f, actions: m, video_events: p }
  );
}
async function H$({
  currentChat: t,
  contacts: s,
  user: n,
  apiConfig: a,
  chatConfig: r,
  addApiLog: i,
  doFetch: o,
  scene: c,
  groupContext: d,
}) {
  var b, N, w, _, A;
  const u = aS(t, s, n, r, i, c, d);
  if (u.skipReason) return { replies: [], actions: [], video_events: [] };
  const f = u.request,
    p = f.groupName,
    m = f.logId;
  if (!(a != null && a.endpoint) || !(a != null && a.key))
    return (
      i &&
        i({
          id: m,
          scene: "group_reply",
          contact: p,
          status: "error",
          messages: ["API 未配置或缺少 endpoint/key"],
        }),
      { replies: [], actions: [], video_events: [] }
    );
  if (o) {
    const k = O$(f.messages);
    i &&
      i({
        id: m,
        scene: "group_reply",
        contact: p,
        status: "pending",
        messages: [`请求中: ${p}`, ...k],
      });
    const C = Date.now();
    try {
      const M = await o(f.messages),
        E = Sw(M, f.memberContacts),
        S = E.replies || [],
        j = E.actions || [],
        T = E.video_events || [],
        I = String(M || "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 800),
        L = {
          translationEnabled: !!(
            (b = t == null ? void 0 : t.settings) != null &&
            b.translationEnabled
          ),
          rawHasTransTag: /\[TRANS:/i.test(String(M || "")),
          replyCount: S.length,
          replyWithTransCount: S.filter((F) =>
            /\[TRANS:/i.test(String((F == null ? void 0 : F.text) || "")),
          ).length,
        },
        B =
          S.length > 0
            ? S.slice(0, 8).map((F, D) => {
                var Z, K, q;
                const $ = F == null ? void 0 : F.contactId,
                  P = $
                    ? ((Z = f.memberContacts.find((V) => V.id === $)) == null
                        ? void 0
                        : Z.remark) ||
                      ((K = f.memberContacts.find((V) => V.id === $)) == null
                        ? void 0
                        : K.nickname) ||
                      ((q = f.memberContacts.find((V) => V.id === $)) == null
                        ? void 0
                        : q.name) ||
                      $
                    : "群成员",
                  z = String((F == null ? void 0 : F.text) || "")
                    .replace(/\s+/g, " ")
                    .trim(),
                  O = z.length > 160 ? `${z.slice(0, 160)}…` : z;
                return `${D + 1}. ${P}: ${O || "（空）"}`;
              })
            : [];
      return (
        i &&
          i({
            id: m,
            scene: "group_reply",
            contact: p,
            status: S.length ? "success" : "error",
            duration: Date.now() - C,
            response: S.length
              ? `${S.length} 条回复${j.length ? `, ${j.length} 个操作` : ""}${T.length ? `, ${T.length} 条 video_events` : ""}`
              : M
                ? "解析后 0 条"
                : "API 返回内容为空",
            ...(B.length
              ? { messages: ["【请求摘要】", ...k, "【回复预览】", ...B] }
              : { messages: ["【请求摘要】", ...k] }),
            rawPreview: I,
            ...(L ? { transStats: L } : {}),
          }),
        { replies: S, actions: j, video_events: T }
      );
    } catch (M) {
      return (
        i &&
          i({
            id: m,
            scene: "group_reply",
            contact: p,
            status: "error",
            duration: Date.now() - C,
            error: (M && M.message) || String(M),
          }),
        { replies: [], actions: [] }
      );
    }
  }
  const h = Qo(a.endpoint);
  i &&
    i({
      id: m,
      scene: "group_reply",
      contact: p,
      status: "pending",
      messages: [`请求中: ${p}`],
    });
  const g = Date.now(),
    x = Cl,
    y = new AbortController(),
    v = setTimeout(() => y.abort(), x);
  try {
    const k = await fetch(h, {
      method: "POST",
      signal: y.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${a.key}`,
      },
      body: JSON.stringify({
        model: a.model || "gpt-3.5-turbo",
        messages: f.messages,
        temperature: 0.8,
        max_tokens: 1024,
        stream: !1,
      }),
    });
    clearTimeout(v);
    let C;
    try {
      C = await k.json();
    } catch {
      return (
        i &&
          i({
            id: m,
            scene: "group_reply",
            contact: p,
            status: "error",
            duration: Date.now() - g,
            error: "响应非 JSON",
          }),
        { replies: [], actions: [] }
      );
    }
    if (!k.ok || (C != null && C.error)) {
      const L =
        ((N = C == null ? void 0 : C.error) == null ? void 0 : N.message) ??
        (C == null ? void 0 : C.error) ??
        (C == null ? void 0 : C.message) ??
        k.statusText ??
        `HTTP ${k.status}`;
      return (
        i &&
          i({
            id: m,
            scene: "group_reply",
            contact: p,
            status: "error",
            duration: Date.now() - g,
            error: L,
          }),
        { replies: [], actions: [] }
      );
    }
    let M =
      ((A =
        (_ = (w = C == null ? void 0 : C.choices) == null ? void 0 : w[0]) ==
        null
          ? void 0
          : _.message) == null
        ? void 0
        : A.content) ?? "";
    Array.isArray(M)
      ? (M = M.map((L) => (L && (L.text ?? L.content)) || "")
          .join("")
          .trim())
      : (M = String(M || "").trim());
    const E = Sw(M, f.memberContacts),
      S = E.replies || [],
      j = E.actions || [],
      T = E.video_events || [],
      I =
        S.length > 0
          ? S.slice(0, 8).map((L, B) => {
              var z, O, Z;
              const F = L == null ? void 0 : L.contactId,
                D = F
                  ? ((z = f.memberContacts.find((K) => K.id === F)) == null
                      ? void 0
                      : z.remark) ||
                    ((O = f.memberContacts.find((K) => K.id === F)) == null
                      ? void 0
                      : O.nickname) ||
                    ((Z = f.memberContacts.find((K) => K.id === F)) == null
                      ? void 0
                      : Z.name) ||
                    F
                  : "群成员",
                $ = String((L == null ? void 0 : L.text) || "")
                  .replace(/\s+/g, " ")
                  .trim(),
                P = $.length > 160 ? `${$.slice(0, 160)}…` : $;
              return `${B + 1}. ${D}: ${P || "（空）"}`;
            })
          : [];
    return (
      i &&
        i({
          id: m,
          scene: "group_reply",
          contact: p,
          status: S.length ? "success" : "error",
          duration: Date.now() - g,
          response: S.length
            ? `${S.length} 条回复${j.length ? `, ${j.length} 个操作` : ""}${T.length ? `, ${T.length} 条 video_events` : ""}`
            : M
              ? "解析后 0 条"
              : "API 返回内容为空",
          ...(I.length ? { messages: I } : {}),
          ...(S.length ? {} : { rawPreview: (M || "").slice(0, 800) }),
        }),
      { replies: S, actions: j, video_events: T }
    );
  } catch (k) {
    return (
      clearTimeout(v),
      i &&
        i({
          id: m,
          scene: "group_reply",
          contact: p,
          status: "error",
          duration: Date.now() - g,
          error:
            (k == null ? void 0 : k.name) === "AbortError"
              ? `请求超时（${x / 1e3} 秒）`
              : (k && k.message) || String(k),
        }),
      { replies: [], actions: [], video_events: [] }
    );
  }
}
const Fd = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } },
  W$ = [
    { value: "5", label: "禁言 5 分钟" },
    { value: "10", label: "禁言 10 分钟" },
    { value: "30", label: "禁言 30 分钟" },
    { value: "60", label: "禁言 60 分钟" },
  ];
function Y$({
  chat: t,
  contact: s,
  contacts: n = [],
  chatId: a,
  updateChatSettings: r,
  avatarInputRef: i,
  fileInputRef: o,
  onMuteApplied: c,
  onUnmuteApplied: d,
  sendMessage: u,
  currentUserName: f = "用户",
  handleAddMembersToGroup: p,
  handleRemoveMembersFromGroup: m,
  handleLeaveGroup: h,
  handleDismissGroup: g,
  onClose: x,
  setShowMemories: y,
  setShowGroupMemories: v,
  setShowCallHistory: b,
  memeCategories: N = [],
  renderAfterQuickActions: w,
  compressImage: _,
}) {
  var He,
    Ie,
    Ce,
    Re,
    De,
    at,
    ft,
    vt,
    Oe,
    Qe,
    Ye,
    Ze,
    Ue,
    me,
    jt,
    Gt,
    Pt,
    Wt,
    ct,
    Kt,
    fs;
  const [A, k] = l.useState(null),
    C = l.useRef(null),
    [M, E] = l.useState(null),
    [S, j] = l.useState(!1),
    [T, I] = l.useState(!1),
    [L, B] = l.useState([]),
    [F, D] = l.useState(!1),
    [$, P] = l.useState(""),
    [z, O] = l.useState(""),
    [Z, K] = l.useState(""),
    q = (gt) => {
      try {
        window.dispatchEvent(new CustomEvent(Nu, { detail: { text: gt } }));
      } catch {}
    },
    [V, ne] = l.useState(!1),
    [le, ie] = l.useState(""),
    [X, je] = l.useState(""),
    [xe, ye] = l.useState(""),
    [R, oe] = l.useState(!1),
    [ee, H] = l.useState(!1),
    [Y, U] = l.useState(!1),
    [ce, pe] = l.useState(!1),
    [se, Te] = l.useState(!1),
    [ke, W] = l.useState(""),
    [ue, re] = l.useState(""),
    he = Array.isArray(
      (He = t.settings) == null ? void 0 : He.groupAvatarLibrary,
    )
      ? t.settings.groupAvatarLibrary
      : [],
    ge = () => {
      const gt = (ke || "").trim(),
        ae = (ue || "").trim();
      if (!gt) return;
      const nt = `av-${Date.now()}`,
        It = [...he, { id: nt, url: gt, desc: ae }];
      (r(a, { groupAvatarLibrary: It }), W(""), re(""));
    },
    J = async (gt) => {
      var nt, It;
      const ae =
        (It = (nt = gt.target) == null ? void 0 : nt.files) == null
          ? void 0
          : It[0];
      if (!(!ae || !_)) {
        try {
          const Xt = await _(ae, 400, 0.8),
            bs = `av-${Date.now()}`,
            ss = [...he, { id: bs, url: Xt, desc: "" }];
          r(a, { groupAvatarLibrary: ss });
        } catch {}
        gt.target.value = "";
      }
    },
    [G, we] = l.useState(null),
    [Q, ve] = l.useState(""),
    Ve = (gt) => {
      (we(gt.id), ve((gt.desc || gt.description || "").trim()));
    },
    Ae = () => {
      if (G == null) return;
      const gt = he.map((ae) => (ae.id === G ? { ...ae, desc: Q.trim() } : ae));
      (r(a, { groupAvatarLibrary: gt }), we(null), ve(""));
    },
    te = (gt) => {
      const ae = he[gt];
      (ae == null ? void 0 : ae.id) === G && (we(null), ve(""));
      const nt = he.filter((It, Xt) => Xt !== gt);
      r(a, { groupAvatarLibrary: nt });
    },
    Se = (gt) => {
      if (!(gt != null && gt.url)) return;
      (r(a, { groupAvatar: gt.url }),
        u && u(a, `[系统提示：${f || "群主"} 更换了群头像]`, null, "system"));
    };
  if (!(t != null && t.isGroup)) return null;
  const Fe = ((Ie = t.settings) == null ? void 0 : Ie.myRole) ?? "member",
    $e = Fe === "owner" || Fe === "admin",
    tt = () => {
      L.length > 0 && p && (p(a, L), j(!1), B([]));
    },
    Xe = () => {
      L.length > 0 && m && (m(a, L), I(!1), B([]));
    },
    ht = (gt) => {
      B((ae) => (ae.includes(gt) ? ae.filter((nt) => nt !== gt) : [...ae, gt]));
    },
    Pe = () => {
      var Xt;
      if (!A) return;
      const { mid: gt, mins: ae, name: nt } = A,
        It = {
          ...(((Xt = t.settings) == null ? void 0 : Xt.mutedMembers) || {}),
        };
      (ae > 0 && (It[gt] = Date.now() + ae * 60 * 1e3),
        r(a, { mutedMembers: It }),
        c == null || c(a, nt || "该成员", ae),
        q(`${nt || "该成员"} 已被禁言 ${ae} 分钟`),
        k(null));
    },
    ut = () => {
      var It;
      if (!M) return;
      const { mid: gt, name: ae } = M,
        nt = {
          ...(((It = t.settings) == null ? void 0 : It.mutedMembers) || {}),
        };
      (delete nt[gt],
        r(a, { mutedMembers: nt }),
        d == null || d(a, ae || "该成员"),
        q(`${ae || "该成员"} 已解除禁言`),
        E(null));
    },
    _t = pn.useMemo(() => {
      var ae;
      const gt =
        ((ae = t.settings) == null ? void 0 : ae.groupRelationships) || "";
      return gt.trim()
        ? gt
            .split(
              `
`,
            )
            .filter((nt) => nt.trim())
            .map((nt) => {
              const It = nt.match(/^(.+?)\s+和\s+(.+?)\s*[:：]\s*(.+)$/);
              return It
                ? { m1: It[1], m2: It[2], desc: It[3], original: nt }
                : { original: nt };
            })
        : [];
    }, [(Ce = t.settings) == null ? void 0 : Ce.groupRelationships]),
    Ee = () => {
      var bs, ss, _s;
      if (!le || !X || !xe.trim()) return;
      const gt =
          ((bs = n.find((qs) => qs.id === le)) == null ? void 0 : bs.name) ||
          "未知",
        ae =
          ((ss = n.find((qs) => qs.id === X)) == null ? void 0 : ss.name) ||
          "未知",
        nt = `${gt} 和 ${ae} : ${xe.trim()}`,
        It = ((_s = t.settings) == null ? void 0 : _s.groupRelationships) || "",
        Xt = It
          ? `${It}
${nt}`
          : nt;
      (r(a, { groupRelationships: Xt }), ie(""), je(""), ye(""), ne(!1));
    },
    fe = (gt) => {
      var nt;
      const ae = (
        ((nt = t.settings) == null ? void 0 : nt.groupRelationships) || ""
      )
        .split(
          `
`,
        )
        .filter((It) => It.trim());
      (ae.splice(gt, 1),
        r(a, {
          groupRelationships: ae.join(`
`),
        }));
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(We.div, {
        variants: Fd,
        className:
          "flex items-start gap-6 p-6 bg-white border border-gray-200 shadow-sm",
        children: [
          e.jsxs("div", {
            className:
              "relative w-24 h-24 flex-shrink-0 overflow-hidden border border-gray-100 cursor-pointer group",
            onClick: () => {
              var gt;
              return (gt = i.current) == null ? void 0 : gt.click();
            },
            title: "点击更换群头像",
            children: [
              e.jsx("img", {
                src: s.avatar,
                className:
                  "w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500",
                alt: "群头像",
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
                    children: "群聊",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "min-h-[2.75rem] flex items-center gap-2 mb-2",
                children: F
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("input", {
                          type: "text",
                          value: $,
                          onChange: (gt) => P(gt.target.value),
                          className:
                            "flex-1 min-w-0 border-b border-gray-300 text-3xl font-serif italic text-gray-900 outline-none bg-transparent py-0.5",
                          ref: (gt) => {
                            gt &&
                              requestAnimationFrame(() =>
                                gt.focus({ preventScroll: !0 }),
                              );
                          },
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            if ($.trim()) {
                              const gt = $.trim();
                              (r(a, { groupName: gt }),
                                u &&
                                  u(
                                    a,
                                    `[系统提示：${f}修改群名为'${gt}']`,
                                    null,
                                    "system",
                                  ),
                                q(`群名已修改为「${gt}」`),
                                D(!1));
                            }
                          },
                          className:
                            "flex-shrink-0 p-1 text-green-600 hover:bg-green-50 rounded",
                          children: e.jsx(On, { size: 20 }),
                        }),
                        e.jsx("button", {
                          onClick: () => D(!1),
                          className:
                            "flex-shrink-0 p-1 text-gray-400 hover:bg-gray-50 rounded",
                          children: e.jsx(Ts, { size: 20 }),
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "flex items-center gap-2 min-w-0 flex-1 group",
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-3xl font-serif italic text-gray-900 truncate leading-none cursor-pointer hover:text-gray-600",
                          onClick: () => {
                            (P(s.name ?? ""), D(!0));
                          },
                          title: "点击修改群名",
                          children: s.name,
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            (P(s.name ?? ""), D(!0));
                          },
                          className:
                            "flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-gray-600",
                          "aria-label": "修改群名",
                          children: e.jsx(_c, { size: 16 }),
                        }),
                      ],
                    }),
              }),
              e.jsxs("p", {
                className: "text-xs text-gray-400 font-mono",
                children: [
                  "成员 ",
                  (((Re = t.memberIds) == null ? void 0 : Re.length) || 0) + 1,
                  " 人",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: Fd,
        className: "grid grid-cols-3 gap-4 border-y border-gray-200 py-8",
        children: [
          e.jsxs("button", {
            onClick: () => {
              var gt;
              return (gt = o.current) == null ? void 0 : gt.click();
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
              (x && x(), v && v(!0));
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
              (x && x(), b && b(!0));
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
      w,
      e.jsxs(We.div, {
        variants: Fd,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200",
                children: "02",
              }),
              e.jsx("h3", {
                className:
                  "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
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
                        children: "允许成员自主更换群头像",
                      }),
                      e.jsx("button", {
                        type: "button",
                        role: "switch",
                        "aria-checked": !!(
                          (De = t.settings) != null &&
                          De.allowMembersChangeGroupAvatar
                        ),
                        onClick: () => {
                          var gt;
                          return r(a, {
                            allowMembersChangeGroupAvatar: !(
                              (gt = t.settings) != null &&
                              gt.allowMembersChangeGroupAvatar
                            ),
                          });
                        },
                        className: `relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${(at = t.settings) != null && at.allowMembersChangeGroupAvatar ? "bg-gray-900" : "bg-gray-200"}`,
                        children: e.jsx("span", {
                          className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${(ft = t.settings) != null && ft.allowMembersChangeGroupAvatar ? "translate-x-5" : "translate-x-0"}`,
                        }),
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-[10px] text-gray-400 leading-relaxed",
                    children:
                      "开启后，群成员可在对话中根据头像库描述主动换群头像，并产生系统提示",
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
                              ref: C,
                              accept: "image/*",
                              className: "hidden",
                              onChange: J,
                            }),
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                e.jsx("input", {
                                  type: "text",
                                  value: ke,
                                  onChange: (gt) => W(gt.target.value),
                                  placeholder: "图片链接",
                                  className:
                                    "flex-1 min-w-[120px] bg-gray-50 border border-gray-200 px-3 py-2 text-xs outline-none focus:border-gray-900 rounded",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: ue,
                                  onChange: (gt) => re(gt.target.value),
                                  placeholder: "描述（供成员选择）",
                                  className:
                                    "flex-1 min-w-[120px] bg-gray-50 border border-gray-200 px-3 py-2 text-xs outline-none focus:border-gray-900 rounded",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: ge,
                                  disabled: !ke.trim(),
                                  className:
                                    "px-3 py-2 text-[10px] font-bold tracking-widest border border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900 disabled:opacity-50 uppercase rounded",
                                  children: "添加链接",
                                }),
                                _ &&
                                  e.jsxs("button", {
                                    type: "button",
                                    onClick: () => {
                                      var gt;
                                      return (gt = C.current) == null
                                        ? void 0
                                        : gt.click();
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
                            he.length === 0
                              ? e.jsx("p", {
                                  className: "text-xs text-gray-400 italic",
                                  children:
                                    "暂无头像，可添加链接或上传图片并填写描述",
                                })
                              : e.jsx("ul", {
                                  className: "space-y-3",
                                  children: he.map((gt, ae) =>
                                    e.jsxs(
                                      "li",
                                      {
                                        className:
                                          "flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 group/item",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200",
                                            children: gt.url
                                              ? e.jsx("img", {
                                                  src: gt.url,
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
                                              G === gt.id
                                                ? e.jsxs("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                      e.jsx("input", {
                                                        type: "text",
                                                        value: Q,
                                                        onChange: (nt) =>
                                                          ve(nt.target.value),
                                                        placeholder:
                                                          "填写描述（供成员选择时参考）",
                                                        className:
                                                          "w-full bg-white border border-gray-300 px-2 py-1.5 text-xs rounded outline-none focus:border-gray-900",
                                                        autoFocus: !0,
                                                      }),
                                                      e.jsxs("div", {
                                                        className: "flex gap-2",
                                                        children: [
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: Ae,
                                                            className:
                                                              "text-[10px] text-gray-600 hover:text-gray-900 font-medium",
                                                            children: "保存",
                                                          }),
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: () => {
                                                              (we(null),
                                                                ve(""));
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
                                                            gt.desc ||
                                                            gt.description ||
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
                                                              gt.id,
                                                            ],
                                                          }),
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: () =>
                                                              Ve(gt),
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
                                                onClick: () => Se(gt),
                                                className:
                                                  "p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded opacity-0 group-hover/item:opacity-100 transition-opacity",
                                                title: "设为当前群头像",
                                                children: e.jsx(On, {
                                                  size: 14,
                                                }),
                                              }),
                                              e.jsx("button", {
                                                type: "button",
                                                onClick: () => te(ae),
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
                                      gt.id,
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
      e.jsxs(We.div, {
        variants: Fd,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200",
                children: "03",
              }),
              e.jsx("h3", {
                className:
                  "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                children: "群公告",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: [
              e.jsx("p", {
                className: "font-serif text-lg italic text-gray-800 mb-1",
                children: "群公告",
              }),
              e.jsx("p", {
                className: "text-[10px] text-gray-400 mt-1 mb-4",
                children: "设置群公告，所有成员可见；可发布到群聊",
              }),
              e.jsx("textarea", {
                value:
                  ((vt = t.settings) == null ? void 0 : vt.groupAnnouncement) ??
                  "",
                onChange: (gt) => r(a, { groupAnnouncement: gt.target.value }),
                disabled: !$e,
                placeholder: $e ? "输入群公告内容…" : "暂无群公告",
                className:
                  "w-full min-h-[80px] bg-gray-50 border border-gray-200 p-3 text-sm text-gray-800 outline-none focus:border-gray-900 transition-colors resize-none font-serif disabled:bg-gray-100 disabled:text-gray-500",
              }),
              $e &&
                e.jsx("button", {
                  type: "button",
                  onClick: () => {
                    var ae;
                    const gt = (
                      ((ae = t.settings) == null
                        ? void 0
                        : ae.groupAnnouncement) ?? ""
                    ).trim();
                    gt && u && u(a, gt, null, "group_announcement");
                  },
                  disabled: !(
                    ((Oe = t.settings) == null
                      ? void 0
                      : Oe.groupAnnouncement) ?? ""
                  ).trim(),
                  className:
                    "mt-3 w-full py-2.5 text-[10px] font-bold tracking-widest border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors uppercase",
                  children: "发布到群聊",
                }),
            ],
          }),
        ],
      }),
      e.jsxs(We.div, {
        variants: Fd,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200",
                children: "04",
              }),
              e.jsx("h3", {
                className:
                  "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                children: "群规则与提示",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "grid grid-cols-1 gap-1 bg-white shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: [
              e.jsxs("div", {
                className: "border-b border-gray-50",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => oe(!R),
                    className:
                      "w-full p-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "font-serif text-lg italic text-gray-800",
                            children: "群专属提示词",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children: "约束本群氛围、话题规则、成员口吻等",
                          }),
                        ],
                      }),
                      R
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
                      R &&
                      e.jsx(We.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.2 },
                        className: "overflow-hidden",
                        children: e.jsx("div", {
                          className: "px-6 pb-6 pt-0",
                          children: e.jsx("textarea", {
                            value:
                              ((Qe = t.settings) == null
                                ? void 0
                                : Qe.groupPrompt) ?? "",
                            onChange: (gt) =>
                              r(a, { groupPrompt: gt.target.value }),
                            disabled: !$e,
                            placeholder: $e
                              ? "可选，拼接到系统提示中…"
                              : "仅管理员可设置",
                            className:
                              "w-full min-h-[72px] bg-gray-50 border border-gray-200 p-3 text-xs text-gray-800 outline-none focus:border-gray-900 transition-colors resize-none font-serif disabled:bg-gray-100 disabled:text-gray-500",
                          }),
                        }),
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-b border-gray-50",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => H(!ee),
                    className:
                      "w-full p-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "font-serif text-lg italic text-gray-800",
                            children: "用户人设",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children: "描述「我」在本群中的身份/性格",
                          }),
                        ],
                      }),
                      ee
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
                      ee &&
                      e.jsx(We.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.2 },
                        className: "overflow-hidden",
                        children: e.jsx("div", {
                          className: "px-6 pb-6 pt-0",
                          children: e.jsx("textarea", {
                            value:
                              ((Ye = t.settings) == null
                                ? void 0
                                : Ye.userPersona) ?? "",
                            onChange: (gt) =>
                              r(a, { userPersona: gt.target.value }),
                            placeholder:
                              "例如：小明，25岁，爱打游戏，在群里经常潜水偶尔吐槽",
                            className:
                              "w-full min-h-[60px] bg-gray-50 border border-gray-200 p-3 text-xs text-gray-800 outline-none focus:border-gray-900 transition-colors resize-none font-serif",
                          }),
                        }),
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => U(!Y),
                    className:
                      "w-full p-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "font-serif text-lg italic text-gray-800",
                            children: "成员关系设定",
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-gray-400 mt-1",
                            children: "设定成员之间关系，注入到 API 提示词",
                          }),
                        ],
                      }),
                      Y
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
                      Y &&
                      e.jsx(We.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.2 },
                        className: "overflow-hidden",
                        children: e.jsxs("div", {
                          className: "px-6 pb-6 pt-0",
                          children: [
                            $e &&
                              !V &&
                              e.jsxs("button", {
                                type: "button",
                                onClick: () => ne(!0),
                                className:
                                  "mb-3 text-[10px] text-gray-500 hover:text-gray-900 flex items-center gap-1 font-bold tracking-widest uppercase",
                                children: [e.jsx(ea, { size: 12 }), " 添加"],
                              }),
                            V &&
                              e.jsxs("div", {
                                className:
                                  "bg-gray-50 p-3 rounded-lg mb-3 border border-gray-200 space-y-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      e.jsxs("select", {
                                        value: le,
                                        onChange: (gt) => ie(gt.target.value),
                                        className:
                                          "flex-1 bg-white border border-gray-200 text-xs py-1.5 px-2 rounded outline-none focus:border-gray-900",
                                        children: [
                                          e.jsx("option", {
                                            value: "",
                                            children: "成员 A",
                                          }),
                                          (t.memberIds || []).map((gt) => {
                                            const ae = n.find(
                                              (nt) => nt.id === gt,
                                            );
                                            return e.jsx(
                                              "option",
                                              {
                                                value: gt,
                                                children:
                                                  (ae == null
                                                    ? void 0
                                                    : ae.name) || "未知",
                                              },
                                              gt,
                                            );
                                          }),
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-xs text-gray-400 self-center",
                                        children: "和",
                                      }),
                                      e.jsxs("select", {
                                        value: X,
                                        onChange: (gt) => je(gt.target.value),
                                        className:
                                          "flex-1 bg-white border border-gray-200 text-xs py-1.5 px-2 rounded outline-none focus:border-gray-900",
                                        children: [
                                          e.jsx("option", {
                                            value: "",
                                            children: "成员 B",
                                          }),
                                          (t.memberIds || []).map((gt) => {
                                            const ae = n.find(
                                              (nt) => nt.id === gt,
                                            );
                                            return e.jsx(
                                              "option",
                                              {
                                                value: gt,
                                                children:
                                                  (ae == null
                                                    ? void 0
                                                    : ae.name) || "未知",
                                              },
                                              gt,
                                            );
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("input", {
                                    type: "text",
                                    value: xe,
                                    onChange: (gt) => ye(gt.target.value),
                                    placeholder:
                                      "关系描述 (如: 是死对头 / 暗恋)",
                                    className:
                                      "w-full bg-white border border-gray-200 text-xs py-1.5 px-2 rounded outline-none focus:border-gray-900",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex justify-end gap-2 mt-1",
                                    children: [
                                      e.jsx("button", {
                                        onClick: () => ne(!1),
                                        className:
                                          "text-[10px] text-gray-500 hover:text-gray-700 px-2 py-1",
                                        children: "取消",
                                      }),
                                      e.jsx("button", {
                                        onClick: Ee,
                                        disabled: !le || !X || !xe.trim(),
                                        className:
                                          "text-[10px] bg-gray-900 text-white px-3 py-1 rounded disabled:opacity-50",
                                        children: "确认",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                _t.length === 0 &&
                                  !V &&
                                  e.jsx("p", {
                                    className: "text-xs text-gray-400 italic",
                                    children: "暂无关系设定",
                                  }),
                                _t.map((gt, ae) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-start justify-between group bg-gray-50 p-2 rounded border border-transparent hover:border-gray-200",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-gray-700 font-serif",
                                          children: gt.m1
                                            ? e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("span", {
                                                    className: "font-bold",
                                                    children: gt.m1,
                                                  }),
                                                  " 和",
                                                  " ",
                                                  e.jsx("span", {
                                                    className: "font-bold",
                                                    children: gt.m2,
                                                  }),
                                                  " : ",
                                                  gt.desc,
                                                ],
                                              })
                                            : gt.original,
                                        }),
                                        $e &&
                                          e.jsx("button", {
                                            onClick: () => fe(ae),
                                            className:
                                              "text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: e.jsx(_n, { size: 12 }),
                                          }),
                                      ],
                                    },
                                    ae,
                                  ),
                                ),
                              ],
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
      e.jsxs(We.div, {
        variants: Fd,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e.jsx("span", {
                className: "text-4xl font-serif text-gray-200",
                children: "05",
              }),
              e.jsx("h3", {
                className:
                  "text-sm font-bold tracking-[0.2em] uppercase text-gray-900",
                children: "管理群",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "bg-white p-6 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]",
            children: [
              e.jsxs("div", {
                className: "space-y-4 mb-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-lg italic text-gray-800",
                        children: "我的职位",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1 mb-2",
                        children: "群主 / 管理员 / 普通成员",
                      }),
                      e.jsx("select", {
                        value:
                          ((Ze = t.settings) == null ? void 0 : Ze.myRole) ??
                          "member",
                        onChange: (gt) => {
                          var It;
                          const ae = gt.target.value,
                            nt = { myRole: ae || "member" };
                          if (ae === "owner") {
                            const Xt = {
                              ...(((It = t.settings) == null
                                ? void 0
                                : It.memberRoles) || {}),
                            };
                            (Object.keys(Xt).forEach((bs) => {
                              Xt[bs] === "owner" && delete Xt[bs];
                            }),
                              (nt.memberRoles = Xt));
                          }
                          r(a, nt);
                        },
                        className:
                          "w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 font-serif text-gray-800",
                        children: Qy.map((gt) =>
                          e.jsx(
                            "option",
                            { value: gt.value, children: gt.label },
                            gt.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-lg italic text-gray-800",
                        children: "我的群昵称",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-gray-400 mt-1 mb-2",
                        children: "在群内显示的自定义称呼",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value:
                          ((Ue = t.settings) == null ? void 0 : Ue.myTitle) ??
                          "",
                        disabled: !$e,
                        onChange: (gt) => {
                          if (!$e) {
                            q("仅群主/管理员可修改群昵称");
                            return;
                          }
                          (r(a, { myTitle: gt.target.value }),
                            q("已更新我的群昵称"));
                        },
                        placeholder: $e ? "选填" : "仅管理员可改",
                        className:
                          "w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 font-serif text-gray-800 disabled:bg-gray-100 disabled:text-gray-400",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "pt-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between gap-6",
                        children: [
                          e.jsxs("div", {
                            className: "flex-1 min-w-0 pr-2",
                            children: [
                              e.jsx("p", {
                                className:
                                  "font-serif text-lg italic text-gray-800",
                                children: "隐藏成员群昵称与身份",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-gray-400 mt-1",
                                children:
                                  "开启后：聊天窗口不再显示群成员的群昵称（头衔）与群身份（群主/管理员）",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            role: "switch",
                            "aria-checked": !!(
                              (me = t.settings) != null &&
                              me.hideMemberTitlesAndRoles
                            ),
                            onClick: () => {
                              var gt;
                              return r(a, {
                                hideMemberTitlesAndRoles: !(
                                  (gt = t.settings) != null &&
                                  gt.hideMemberTitlesAndRoles
                                ),
                              });
                            },
                            className: `relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${(jt = t.settings) != null && jt.hideMemberTitlesAndRoles ? "bg-gray-900" : "bg-gray-200"}`,
                            children: e.jsx("span", {
                              className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${(Gt = t.settings) != null && Gt.hideMemberTitlesAndRoles ? "translate-x-5" : "translate-x-0"}`,
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between gap-6 mt-3",
                        children: [
                          e.jsxs("div", {
                            className: "flex-1 min-w-0 pr-2",
                            children: [
                              e.jsx("p", {
                                className:
                                  "font-serif text-lg italic text-gray-800",
                                children: "只显示群昵称",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-gray-400 mt-1",
                                children:
                                  "开启后：仅显示群昵称（不显示群主/管理员身份），并将群昵称移到头像右侧、气泡上方",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            role: "switch",
                            "aria-checked": !!(
                              (Pt = t.settings) != null &&
                              Pt.showOnlyMemberTitles
                            ),
                            disabled: !!(
                              (Wt = t.settings) != null &&
                              Wt.hideMemberTitlesAndRoles
                            ),
                            onClick: () => {
                              var gt;
                              return r(a, {
                                showOnlyMemberTitles: !(
                                  (gt = t.settings) != null &&
                                  gt.showOnlyMemberTitles
                                ),
                              });
                            },
                            className: `relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${(ct = t.settings) != null && ct.hideMemberTitlesAndRoles ? "bg-gray-100 opacity-60 cursor-not-allowed" : (Kt = t.settings) != null && Kt.showOnlyMemberTitles ? "bg-gray-900" : "bg-gray-200"}`,
                            children: e.jsx("span", {
                              className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${(fs = t.settings) != null && fs.showOnlyMemberTitles ? "translate-x-5" : "translate-x-0"}`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "border-t border-gray-100 pt-4",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => pe(!ce),
                    className:
                      "w-full flex items-center justify-between text-left py-2 hover:bg-gray-50/50 rounded transition-colors",
                    children: [
                      e.jsx("p", {
                        className: "font-serif text-lg italic text-gray-800",
                        children: "成员管理",
                      }),
                      ce
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
                      ce &&
                      e.jsx(We.div, {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        transition: { duration: 0.2 },
                        className: "overflow-hidden",
                        children: e.jsxs("div", {
                          className: "space-y-4 pt-2",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-end gap-2",
                              children: [
                                e.jsx("button", {
                                  onClick: () => {
                                    (B([]), j(!0));
                                  },
                                  className:
                                    "p-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors",
                                  title: "添加成员",
                                  children: e.jsx(wu, { size: 14 }),
                                }),
                                $e &&
                                  e.jsx("button", {
                                    onClick: () => {
                                      (B([]), I(!0));
                                    },
                                    className:
                                      "p-1.5 bg-red-50 text-red-500 rounded-md hover:bg-red-100 transition-colors",
                                    title: "移除成员",
                                    children: e.jsx(u3, { size: 14 }),
                                  }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-gray-400",
                              children: "职位、禁言、群昵称",
                            }),
                            (t.memberIds || []).map((gt) => {
                              var _s, qs, Bs, Js, Xs, gn;
                              const ae = (n || []).find((sn) => sn.id === gt);
                              if (!ae) return null;
                              const nt =
                                  ae.remark ||
                                  ae.nickname ||
                                  ae.name ||
                                  "未命名",
                                It =
                                  ((qs =
                                    (_s = t.settings) == null
                                      ? void 0
                                      : _s.mutedMembers) == null
                                    ? void 0
                                    : qs[gt]) || 0,
                                Xt = It > Date.now(),
                                bs =
                                  ((Js =
                                    (Bs = t.settings) == null
                                      ? void 0
                                      : Bs.memberTitles) == null
                                    ? void 0
                                    : Js[gt]) ?? "",
                                ss =
                                  ((gn =
                                    (Xs = t.settings) == null
                                      ? void 0
                                      : Xs.memberRoles) == null
                                    ? void 0
                                    : gn[gt]) ?? "member";
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200",
                                      children: ae.avatar
                                        ? e.jsx("img", {
                                            src: ae.avatar,
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-full h-full flex items-center justify-center text-gray-500 text-sm font-serif",
                                            children: nt.slice(0, 1),
                                          }),
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-sm font-serif font-medium text-gray-900 truncate",
                                          children: nt,
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex flex-wrap gap-2 mt-1 items-center",
                                          children: [
                                            e.jsx("select", {
                                              value: ss,
                                              onChange: (sn) => {
                                                var wt, xs, ot;
                                                const ln = sn.target.value,
                                                  rn = {
                                                    ...(((wt = t.settings) ==
                                                    null
                                                      ? void 0
                                                      : wt.memberRoles) || {}),
                                                  };
                                                if (
                                                  (ln && ln !== "member"
                                                    ? (rn[gt] = ln)
                                                    : delete rn[gt],
                                                  ln === "owner")
                                                ) {
                                                  const st = {
                                                    memberRoles: rn,
                                                    myRole:
                                                      ((xs = t.settings) == null
                                                        ? void 0
                                                        : xs.myRole) === "owner"
                                                        ? "member"
                                                        : (ot = t.settings) ==
                                                            null
                                                          ? void 0
                                                          : ot.myRole,
                                                  };
                                                  (Object.keys(rn).forEach(
                                                    ($t) => {
                                                      $t !== gt &&
                                                        rn[$t] === "owner" &&
                                                        delete rn[$t];
                                                    },
                                                  ),
                                                    (st.memberRoles = rn),
                                                    r(a, st));
                                                } else
                                                  r(a, { memberRoles: rn });
                                              },
                                              className:
                                                "text-[10px] border border-gray-200 rounded px-2 py-1 bg-white text-gray-700",
                                              title: "职位",
                                              children: Qy.map((sn) =>
                                                e.jsx(
                                                  "option",
                                                  {
                                                    value: sn.value,
                                                    children: sn.label,
                                                  },
                                                  sn.value,
                                                ),
                                              ),
                                            }),
                                            e.jsx("select", {
                                              value: Xt
                                                ? "muted"
                                                : (A == null
                                                      ? void 0
                                                      : A.mid) === gt
                                                  ? String(A.mins)
                                                  : "",
                                              onChange: (sn) => {
                                                const ln = sn.target.value;
                                                if (ln === "" || ln === "muted")
                                                  return;
                                                if (ln === "unmute") {
                                                  E({ mid: gt, name: nt });
                                                  return;
                                                }
                                                const rn = parseInt(ln, 10);
                                                rn > 0 &&
                                                  k({
                                                    mid: gt,
                                                    mins: rn,
                                                    name: nt,
                                                  });
                                              },
                                              className:
                                                "text-[10px] border border-gray-200 rounded px-2 py-1 bg-white text-gray-700",
                                              children: Xt
                                                ? e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsxs("option", {
                                                        value: "muted",
                                                        children: [
                                                          "禁言中 (约",
                                                          Math.ceil(
                                                            (It - Date.now()) /
                                                              6e4,
                                                          ),
                                                          "分钟)",
                                                        ],
                                                      }),
                                                      e.jsx("option", {
                                                        value: "unmute",
                                                        children: "解除禁言",
                                                      }),
                                                    ],
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsx("option", {
                                                        value: "",
                                                        children: "选择禁言",
                                                      }),
                                                      W$.map((sn) =>
                                                        e.jsx(
                                                          "option",
                                                          {
                                                            value: sn.value,
                                                            children: sn.label,
                                                          },
                                                          sn.value,
                                                        ),
                                                      ),
                                                    ],
                                                  }),
                                            }),
                                            e.jsx("input", {
                                              type: "text",
                                              value: bs,
                                              disabled: !$e,
                                              onChange: (sn) => {
                                                var wt;
                                                if (!$e) {
                                                  q(
                                                    "仅群主/管理员可修改群昵称",
                                                  );
                                                  return;
                                                }
                                                const ln = {
                                                    ...(((wt = t.settings) ==
                                                    null
                                                      ? void 0
                                                      : wt.memberTitles) || {}),
                                                  },
                                                  rn = sn.target.value.trim();
                                                (rn
                                                  ? (ln[gt] = rn)
                                                  : delete ln[gt],
                                                  r(a, { memberTitles: ln }),
                                                  q(
                                                    rn
                                                      ? `已设置 ${nt} 的群昵称`
                                                      : `已清除 ${nt} 的群昵称`,
                                                  ));
                                              },
                                              placeholder: $e
                                                ? "群昵称"
                                                : "仅管理员可改",
                                              className:
                                                "text-[10px] border border-gray-200 rounded px-2 py-1 w-20 bg-white text-gray-700 disabled:bg-gray-100 disabled:text-gray-400",
                                              title: "群昵称",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                gt,
                              );
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
      A &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40",
          onClick: () => k(null),
          children: e.jsxs("div", {
            className:
              "bg-white rounded-xl shadow-xl max-w-sm w-full p-6 border border-gray-200",
            onClick: (gt) => gt.stopPropagation(),
            children: [
              e.jsxs("p", {
                className: "text-sm text-gray-800 font-serif mb-6",
                children: [
                  "确定禁言 ",
                  e.jsx("span", {
                    className: "font-semibold",
                    children: A.name,
                  }),
                  " ",
                  e.jsx("span", {
                    className: "font-semibold",
                    children: A.mins,
                  }),
                  " 分钟？",
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3 justify-end",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => k(null),
                    className:
                      "px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: Pe,
                    className:
                      "px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors",
                    children: "确定",
                  }),
                ],
              }),
            ],
          }),
        }),
      M &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40",
          onClick: () => E(null),
          children: e.jsxs("div", {
            className:
              "bg-white rounded-xl shadow-xl max-w-sm w-full p-6 border border-gray-200",
            onClick: (gt) => gt.stopPropagation(),
            children: [
              e.jsxs("p", {
                className: "text-sm text-gray-800 font-serif mb-6",
                children: [
                  "确定解除对 ",
                  e.jsx("span", {
                    className: "font-semibold",
                    children: M.name,
                  }),
                  " 的禁言？",
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-3 justify-end",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => E(null),
                    className:
                      "px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    children: "取消",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: ut,
                    className:
                      "px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors",
                    children: "确定",
                  }),
                ],
              }),
            ],
          }),
        }),
      S &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-[100] bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
          onClick: () => j(!1),
          children: e.jsxs("div", {
            className:
              "w-full max-w-sm max-h-[80vh] flex flex-col bg-white p-2 pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] relative",
            onClick: (gt) => gt.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: () => j(!1),
                className:
                  "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
              }),
              e.jsxs("div", {
                className:
                  "border border-[#e0e0e0] flex-1 flex flex-col min-h-0 relative overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className: "p-6 border-b border-[#e0e0e0]",
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-serif text-2xl text-[#2c2c2c] tracking-tight italic",
                        children: "邀请成员",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                        children: "从联系人中选择",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-2 min-h-0",
                    children: n
                      .filter((gt) => !(t.memberIds || []).includes(gt.id))
                      .map((gt) => {
                        const ae = L.includes(gt.id);
                        return e.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => ht(gt.id),
                            className:
                              "w-full flex items-center gap-4 p-3 border border-[#e0e0e0] group/item hover:border-[#2c2c2c] hover:bg-[#faf9f6] transition-colors duration-300 text-left",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full bg-[#f0f0f0] flex-shrink-0 overflow-hidden",
                                children: gt.avatar
                                  ? e.jsx("img", {
                                      src: gt.avatar,
                                      alt: "",
                                      className: "w-full h-full object-cover",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center text-[#9e9e9e] text-sm font-serif",
                                      children: (
                                        gt.name ||
                                        gt.nickname ||
                                        "?"
                                      ).slice(0, 1),
                                    }),
                              }),
                              e.jsx("span", {
                                className:
                                  "flex-1 font-serif text-sm text-[#2c2c2c] truncate",
                                children:
                                  gt.remark ||
                                  gt.nickname ||
                                  gt.name ||
                                  "未命名",
                              }),
                              e.jsx("div", {
                                className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${ae ? "bg-[#2c2c2c] border-[#2c2c2c]" : "border-[#e0e0e0] group-hover/item:border-[#2c2c2c]"}`,
                                children:
                                  ae &&
                                  e.jsx(On, {
                                    size: 12,
                                    className: "text-white",
                                    strokeWidth: 3,
                                  }),
                              }),
                            ],
                          },
                          gt.id,
                        );
                      }),
                  }),
                  e.jsx("div", {
                    className: "p-4 border-t border-[#e0e0e0]",
                    children: e.jsxs("button", {
                      type: "button",
                      disabled: L.length === 0,
                      onClick: tt,
                      className:
                        "w-full flex items-center justify-center gap-2 p-4 border border-[#2c2c2c] font-serif text-sm text-[#2c2c2c] disabled:opacity-50 disabled:cursor-not-allowed disabled:border-[#e0e0e0] disabled:text-[#9e9e9e] group hover:bg-[#2c2c2c] hover:text-white transition-colors duration-300",
                      children: [
                        e.jsx(ea, { size: 16 }),
                        e.jsxs("span", {
                          children: ["确认邀请 (", L.length, ")"],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      T &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-[100] bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
          onClick: () => I(!1),
          children: e.jsxs("div", {
            className:
              "w-full max-w-sm max-h-[80vh] flex flex-col bg-white p-2 pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] relative",
            onClick: (gt) => gt.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: () => I(!1),
                className:
                  "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
              }),
              e.jsxs("div", {
                className:
                  "border border-[#e0e0e0] flex-1 flex flex-col min-h-0 relative overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className: "p-6 border-b border-[#e0e0e0]",
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-serif text-2xl text-red-500 tracking-tight italic",
                        children: "移除成员",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                        children: "选择要移出的成员",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-2 min-h-0",
                    children: (t.memberIds || []).map((gt) => {
                      const ae = n.find((It) => It.id === gt);
                      if (!ae) return null;
                      const nt = L.includes(ae.id);
                      return e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => ht(ae.id),
                          className:
                            "w-full flex items-center gap-4 p-3 border border-[#e0e0e0] group/item hover:border-red-500 hover:bg-red-50 transition-colors duration-300 text-left",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-full bg-[#f0f0f0] flex-shrink-0 overflow-hidden",
                              children: ae.avatar
                                ? e.jsx("img", {
                                    src: ae.avatar,
                                    alt: "",
                                    className: "w-full h-full object-cover",
                                  })
                                : e.jsx("div", {
                                    className:
                                      "w-full h-full flex items-center justify-center text-[#9e9e9e] text-sm font-serif",
                                    children: (
                                      ae.name ||
                                      ae.nickname ||
                                      "?"
                                    ).slice(0, 1),
                                  }),
                            }),
                            e.jsx("span", {
                              className:
                                "flex-1 font-serif text-sm text-[#2c2c2c] truncate",
                              children:
                                ae.remark || ae.nickname || ae.name || "未命名",
                            }),
                            e.jsx("div", {
                              className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${nt ? "bg-red-500 border-red-500" : "border-[#e0e0e0] group-hover/item:border-red-500"}`,
                              children:
                                nt &&
                                e.jsx(On, {
                                  size: 12,
                                  className: "text-white",
                                  strokeWidth: 3,
                                }),
                            }),
                          ],
                        },
                        ae.id,
                      );
                    }),
                  }),
                  e.jsx("div", {
                    className: "p-4 border-t border-[#e0e0e0]",
                    children: e.jsxs("button", {
                      type: "button",
                      disabled: L.length === 0,
                      onClick: Xe,
                      className:
                        "w-full flex items-center justify-center gap-2 p-4 border border-red-500 font-serif text-sm text-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-[#e0e0e0] disabled:text-[#9e9e9e] group hover:bg-red-500 hover:text-white transition-colors duration-300",
                      children: [
                        e.jsx(_n, { size: 16 }),
                        e.jsxs("span", {
                          children: ["确认移除 (", L.length, ")"],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function V$({ show: t, onClose: s, groupMembers: n, onSelect: a }) {
  return t
    ? e.jsx("div", {
        className:
          "relative z-[30] flex w-full px-4 py-2.5 shrink-0 animate-in slide-in-from-bottom-2 duration-200",
        children: e.jsxs("div", {
          className:
            "w-full overflow-y-auto max-h-52 rounded-xl border border-[#e0d5c8] bg-[#fffcf7] shadow-sm no-scrollbar",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-3 py-2 border-b border-[#e0d5c8]",
              children: [
                e.jsx("span", {
                  className:
                    "text-[10px] font-bold text-[#5d4037] uppercase tracking-wider",
                  children: "选择 @ 对象",
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: s,
                  className: "p-1 rounded hover:bg-[#f2f0ea] text-[#8d6e63]",
                  children: e.jsx(Ts, { size: 14 }),
                }),
              ],
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => a("@所有人"),
              className:
                "w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-[#f2f0ea] transition-colors border-b border-[#f0ebe3]",
              children: e.jsx("span", {
                className: "text-sm font-medium text-[#5d4037]",
                children: "@所有人",
              }),
            }),
            (n || []).map((r) => {
              const i = r.remark || r.nickname || r.name || "未命名";
              return e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => a(`@${i}`),
                  className:
                    "w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-[#f2f0ea] transition-colors border-b border-[#f0ebe3] last:border-b-0",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[#e0d5c8]/50",
                      children: r.avatar
                        ? e.jsx("img", {
                            src: r.avatar,
                            alt: "",
                            className: "w-full h-full object-cover",
                          })
                        : e.jsx("span", {
                            className:
                              "w-full h-full flex items-center justify-center text-sm text-[#8d6e63] font-serif",
                            children: i.slice(0, 1),
                          }),
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-[#5d4037] truncate",
                      children: i,
                    }),
                  ],
                },
                r.id,
              );
            }),
          ],
        }),
      })
    : null;
}
const Cn = {
    CHAT: "chat",
    CHAT_HEART: "chat_heart",
    CHAT_REGEN: "chat_regen",
    VOICE: "voice",
    GROUP: "group_chat",
  },
  Ni = {
    transfer: {
      id: "transfer",
      tags: ["[TRANSFER:amount:note]"],
      requiredFields: ["amount"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !0, defaultAmount: 20 },
    },
    orderFood: {
      id: "orderFood",
      tags: ["[ORDER_FOOD:item:price]"],
      requiredFields: ["item", "price"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    payForMe: {
      id: "payForMe",
      tags: ["[PAY_FOR_ME:item:price]"],
      requiredFields: ["item", "price"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    voice: {
      id: "voice",
      tags: ["[VOICE]content[/VOICE]", "[语音消息]"],
      requiredFields: ["content"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.VOICE, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    meme: {
      id: "meme",
      tags: ["[MEME:id]"],
      requiredFields: ["id"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    textImage: {
      id: "textImage",
      tags: ["[图片内容:desc]", "[IMAGE:desc]", "[图片](desc)"],
      requiredFields: ["content"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    reply: {
      id: "reply",
      tags: ['[REPLY:"text"]', "【引用了...】"],
      requiredFields: ["replyContent"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !0 },
    },
    recall: {
      id: "recall",
      tags: ["[RECALL:reason]"],
      requiredFields: ["reason"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    password: {
      id: "password",
      tags: [
        "[GIVE_PASSWORD:xxxx]",
        "[PASSWORD_CARD:xxxx]",
        "[CHANGE_PASSWORD:xxxx]",
      ],
      requiredFields: ["password"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    signature: {
      id: "signature",
      tags: ["[CHANGE_SIGNATURE:新签名]"],
      requiredFields: ["signature"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    fingerprint: {
      id: "fingerprint",
      tags: [
        "[APPROVE_FINGERPRINT]",
        "[REJECT_FINGERPRINT]",
        "[ENABLE_FINGERPRINT]",
        "[DISABLE_FINGERPRINT]",
      ],
      requiredFields: [],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    redPacket: {
      id: "redPacket",
      tags: ["[GRAB_RED_PACKET]"],
      requiredFields: [],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    poll: {
      id: "poll",
      tags: ["[POLL:question:option1:option2]"],
      requiredFields: ["question", "options"],
      scenePolicy: [Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    relay: {
      id: "relay",
      tags: ["[RELAY:title]"],
      requiredFields: ["title"],
      scenePolicy: [Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    videoCallInvite: {
      id: "videoCallInvite",
      tags: ["[VIDEO_CALL_INVITE]", "[VIDEO_CALL_INVITE:message]"],
      requiredFields: [],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN, Cn.GROUP],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    coupleSpace: {
      id: "coupleSpace",
      tags: ["[COUPLE_SPACE_ACCEPT]", "[COUPLE_SPACE_REJECT]"],
      requiredFields: [],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN],
      fallbackPolicy: { enableSemanticFallback: !1 },
    },
    seasonEvent: {
      id: "seasonEvent",
      tags: [
        "[SEASON_JOURNEY_ACCEPT]",
        "[SEASON_JOURNEY_REJECT]",
        "[SEASON_JOURNEY_COUNTER]",
      ],
      requiredFields: [],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN],
      fallbackPolicy: { enableSemanticFallback: !0 },
    },
    memoryFragment: {
      id: "memoryFragment",
      tags: [
        "[MEMORY_FRAGMENT_CARD]",
        "[MEMORY_EVENT_CARD]",
        "[MEMORY_SOURCE:chat]",
        "[MEMORY_SOURCE:ai_daily_event]",
      ],
      requiredFields: ["sourceType", "theme", "stakes", "rewritePotential"],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN],
      fallbackPolicy: { enableSemanticFallback: !0, fallbackLevel: "soft" },
    },
    memoryRewrite: {
      id: "memoryRewrite",
      tags: [
        "[MEMORY_REWRITE_DONE]",
        "[MEMORY_REWRITE_REPAIR]",
        "[MEMORY_WRITE]",
      ],
      requiredFields: [
        "rewriteText",
        "personaConsistencyScore",
        "greasyRiskScore",
        "fallbackLevel",
      ],
      scenePolicy: [Cn.CHAT, Cn.CHAT_HEART, Cn.CHAT_REGEN],
      fallbackPolicy: {
        enableSemanticFallback: !0,
        fallbackLevel: "text_only",
      },
    },
  };
function Jo(t) {
  const s = String(t ?? "").trim();
  if (!s || !/[\u4e00-\u9fff]/.test(s)) return !1;
  let n = 0,
    a = 0;
  for (const r of s)
    /[A-Za-z]/.test(r) ? n++ : /[\u4e00-\u9fff]/.test(r) && a++;
  return a < 1 ? !1 : n <= a;
}
const Zp = /<div\b(?=[^>]*\bid\s*=\s*["']widget-container["'])[^>]*>/gi;
function J$(t, s) {
  const n = /<div\b[^>]*>|<\/div>/gi;
  n.lastIndex = s;
  let a = 0,
    r;
  for (; (r = n.exec(t)) !== null; ) {
    const i = r[0];
    if (/^<\/div>/i.test(i)) {
      if ((a--, a === 0)) return t.slice(s, r.index + i.length);
    } else a++;
  }
  return null;
}
function rS(t) {
  const s = String(t ?? "");
  if (!s.includes("widget-container")) return [{ kind: "text", value: s }];
  const n = [];
  let a = 0;
  Zp.lastIndex = 0;
  let r;
  for (; (r = Zp.exec(s)) !== null; ) {
    if (r.index < a) continue;
    const o = s.slice(a, r.index);
    o.trim() && n.push({ kind: "text", value: o });
    const c = J$(s, r.index);
    if (!c) {
      ((a = r.index + 1), (Zp.lastIndex = a));
      continue;
    }
    (n.push({ kind: "html", value: c }),
      (a = r.index + c.length),
      (Zp.lastIndex = a));
  }
  const i = s.slice(a);
  return (
    i.trim() && n.push({ kind: "text", value: i }),
    n.length === 0 ? [{ kind: "text", value: s }] : n
  );
}
function K$(t) {
  const s = String(t ?? "").trim();
  return s
    ? !(
        /[A-Za-z]/.test(s) ||
        /[\u3040-\u30ff]/.test(s) ||
        /[\uac00-\ud7af]/.test(s) ||
        /[\u0400-\u04FF]/.test(s) ||
        /[\u0600-\u06FF]/.test(s)
      )
    : !0;
}
function q$(t) {
  return String(t ?? "")
    .replace(/\s*\[TRANSLATION[：:]\s*[^\]]+\]/g, " ")
    .replace(/\s*\[TRANS[：:]\s*[^\]]+\]/gi, " ")
    .replace(/[ \t\u3000]+/g, " ")
    .replace(
      /\n{3,}/g,
      `

`,
    )
    .trim();
}
function Zy(t) {
  return String(t ?? "")
    .replace(/\s*\[TRANSLATION[：:]\s*[^\]]+\]/g, "")
    .replace(/\s*\[TRANS[：:]\s*[^\]]+\]/gi, "")
    .replace(/[ \t\u3000]+/g, " ")
    .trim();
}
function nh(t) {
  if (!t || typeof t != "string") return [""];
  const s = t
    .split(/\s*\|\|\s*|｜｜/)
    .map((n) => n.trim())
    .filter(Boolean);
  return s.length > 0 ? s : [""];
}
function Q$(t) {
  return String(t ?? "")
    .replace(/\s*\|\|\s*/g, " ")
    .replace(/\s*｜｜\s*/g, " ")
    .replace(/\s+\|\s+/g, " ")
    .replace(/[ \t\u3000]+/g, " ")
    .trim();
}
function Jm(t) {
  const s = String(t ?? "").trim();
  return s.includes("<")
    ? !!(
        /<script\b/i.test(s) ||
        /<style\b/i.test(s) ||
        /\bid\s*=\s*["']widget-container["']/i.test(s)
      )
    : !1;
}
function gc(t) {
  return Q$(Zy(String(t ?? "")));
}
function Z$(t) {
  const s = String(t ?? "").trim();
  if (!s) return { dialogue: s, translation: "" };
  const n = s.search(/[\u4e00-\u9fff]/);
  if (n <= 0) return { dialogue: s, translation: "" };
  const a = s.slice(0, n).trimEnd(),
    r = s.slice(n).trim();
  return !a || !r
    ? { dialogue: s, translation: "" }
    : /[A-Za-z]{2,}/.test(a) || /[\u3040-\u30ff\uac00-\ud7af]/.test(a)
      ? Jo(r)
        ? { dialogue: a, translation: r }
        : { dialogue: s, translation: "" }
      : { dialogue: s, translation: "" };
}
function $g(t, s) {
  const n = q$(s);
  if (!n.trim()) return;
  const a = pl(n);
  (!a.dialogue && !a.dialogueTranslation) ||
    t.push({
      type: "narration",
      text: a.dialogue,
      ...(a.dialogueTranslation ? { translation: a.dialogueTranslation } : {}),
    });
}
function pl(t) {
  let s = String(t ?? "").trim(),
    n = "";
  const a = /\s*\[TRANSLATION[：:]\s*([^\]]+)\]/g;
  let r,
    i = "";
  for (; (r = a.exec(s)) !== null; ) i = r[1].trim();
  i &&
    ((n = Jo(i) ? i : "（译文不可用）"),
    (s = s.replace(/\s*\[TRANSLATION[：:]\s*[^\]]+\]/g, "").trim()));
  const o = /\s*\[TRANS[：:]\s*([^\]]+)\]/gi;
  for (i = ""; (r = o.exec(s)) !== null; ) i = r[1].trim();
  if (
    (i && !n && (n = Jo(i) ? i : "（译文不可用）"),
    (s = s.replace(/\s*\[TRANS[：:]\s*[^\]]+\]/gi, "").trim()),
    !n &&
      s.includes(`
`))
  ) {
    const c = s
      .split(/\n+/)
      .map((d) => d.trim())
      .filter(Boolean);
    if (c.length >= 2) {
      const d = c[c.length - 1],
        u = c.slice(0, -1).join(`
`),
        f = /[\u4e00-\u9fff]/.test(d),
        p = /[A-Za-z]{2,}|[\u3040-\u30ff\uac00-\ud7af]/.test(u);
      f &&
        p &&
        d.length >= 2 &&
        ((n = Jo(d) ? d : "（译文不可用）"), (s = u.trim()));
    }
  }
  if (!n) {
    const c = Z$(s);
    c.translation && ((s = c.dialogue), (n = c.translation));
  }
  return (n && K$(s) && (n = ""), { dialogue: s, dialogueTranslation: n });
}
function X$(t) {
  const s = String(t ?? "").trim();
  if (!s) return [];
  const n = (i, o) => {
      const c = String(i || "").trim();
      if (!c) return;
      if (Jm(c)) {
        o.push({ kind: "html", html: c });
        return;
      }
      let d = null,
        u = null,
        f = c;
      const p = nh(c);
      if (p.length <= 1) {
        const m = pl(c);
        ((f = m.dialogue || c),
          m.dialogueTranslation &&
            String(m.dialogueTranslation).trim() &&
            (d = m.dialogueTranslation));
      } else {
        const m = p.map((h) => pl(h));
        ((f = m.map((h) => h.dialogue).join("||")),
          (u = m.map((h) =>
            h.dialogueTranslation && String(h.dialogueTranslation).trim()
              ? h.dialogueTranslation
              : null,
          )),
          u.some(Boolean) || (u = null));
      }
      o.push({
        kind: "text",
        displayText: f,
        translation: d,
        translationSegments: u,
      });
    },
    a = [],
    r = rS(s);
  if (r.length === 1 && r[0].kind === "text") return (n(r[0].value, a), a);
  for (const i of r)
    if (i.kind === "html") {
      const o = i.value.trim();
      o && a.push({ kind: "html", html: o });
    } else n(i.value, a);
  return a;
}
function eF(t) {
  const s = String(t ?? ""),
    n = [];
  let a = 0;
  const r = s.length;
  for (; a < r; ) {
    let i = -1;
    for (let f = a; f < r; f++) {
      const p = s[f];
      if (p === '"' || p === '"' || p === '"' || p === "“" || p === "”") {
        i = f;
        break;
      }
    }
    if (i === -1) {
      $g(n, s.slice(a));
      break;
    }
    a < i && $g(n, s.slice(a, i));
    const c = s.slice(i + 1).match(/^([\s\S]*?)([""\u201C\u201D])/);
    if (!c) {
      $g(n, s.slice(i));
      break;
    }
    const d = c[1].trim();
    a = i + 1 + c[0].length;
    const u = pl(d);
    n.push({
      type: "speech",
      text: u.dialogue,
      translation: u.dialogueTranslation || void 0,
    });
  }
  return n;
}
function _w(t, s) {
  return s || pl(String(t ?? "")).dialogueTranslation || "";
}
function gl(t) {
  const s = String(t ?? ""),
    n = eF(s);
  if (n.length === 0)
    return {
      narrator: "",
      dialogue: "",
      dialogueTranslation: "",
      videoCallSegments: [],
    };
  const a = n.findIndex((u) => u.type === "speech");
  if (a === -1) {
    const u = n.filter((g) => g.type === "narration");
    let p = u
        .map((g) => g.text)
        .join("")
        .trim(),
      m = "";
    for (const g of u) g.translation && (m = g.translation);
    const h = p.match(/\s*\[TRANSLATION[：:]\s*([^\]]+)\]\s*$/);
    if (h) {
      const g = h[1].trim();
      ((m = Jo(g) ? g : "（译文不可用）"),
        (p = p.replace(/\s*\[TRANSLATION[：:][^\]]+\]\s*$/, "").trim()));
    }
    if (!m) {
      const g = p.match(/\s*\[TRANS[：:]\s*([^\]]+)\]\s*$/i);
      if (g) {
        const x = g[1].trim();
        ((m = Jo(x) ? x : "（译文不可用）"),
          (p = p.replace(/\s*\[TRANS[：:]\s*[^\]]+\]\s*$/i, "").trim()));
      }
    }
    return {
      narrator: Zy(p),
      dialogue: "",
      dialogueTranslation: _w(s, m),
      videoCallSegments: n,
    };
  }
  const r = n
      .slice(0, a)
      .filter((u) => u.type === "narration")
      .map((u) => u.text)
      .join("")
      .trim(),
    i = n[a],
    o = (i == null ? void 0 : i.text) ?? "";
  let c = (i == null ? void 0 : i.translation) ?? "",
    d = r;
  if (!c) {
    const u = d.match(/\s*\[TRANSLATION[：:]\s*([^\]]+)\]\s*$/);
    if (u) {
      const f = u[1].trim();
      ((c = Jo(f) ? f : "（译文不可用）"),
        (d = d.replace(/\s*\[TRANSLATION[：:][^\]]+\]\s*$/, "").trim()));
    }
  }
  if (!c) {
    const u = d.match(/\s*\[TRANS[：:]\s*([^\]]+)\]\s*$/i);
    if (u) {
      const f = u[1].trim();
      ((c = Jo(f) ? f : "（译文不可用）"),
        (d = d.replace(/\s*\[TRANS[：:]\s*[^\]]+\]\s*$/i, "").trim()));
    }
  }
  return {
    narrator: Zy(d),
    dialogue: o,
    dialogueTranslation: _w(s, c),
    videoCallSegments: n,
  };
}
function tF(t, s) {
  const n = Array.isArray(t) ? t : [],
    r = (Array.isArray(s) ? s : [])
      .filter(
        (c) =>
          (c == null ? void 0 : c.contactId) && String(c.text || "").trim(),
      )
      .map((c) => ({
        contactId: c.contactId,
        type: "speech",
        text: String(c.text || "").trim(),
      })),
    i = new Set(r.map((c) => String(c.contactId))),
    o = n
      .filter(
        (c) =>
          (c == null ? void 0 : c.contactId) &&
          String(c.text || "").trim() &&
          !i.has(String(c.contactId)),
      )
      .map((c) => ({
        contactId: c.contactId,
        type: c.type || "speech",
        text: String(c.text || "").trim(),
      }));
  return r.length > 0
    ? o.length > 0
      ? [...r, ...o]
      : r
    : n
        .filter(
          (c) =>
            (c == null ? void 0 : c.contactId) && String(c.text || "").trim(),
        )
        .map((c) => ({
          contactId: c.contactId,
          type: c.type || "speech",
          text: String(c.text || "").trim(),
        }));
}
function Aw(t, s) {
  const n = new Set((t || []).map((a) => String(a)));
  for (const a of s || [])
    (a == null ? void 0 : a.contactId) != null && n.add(String(a.contactId));
  return [...n];
}
function Cw(t, s, n) {
  const a = new Set((s || []).map((c) => String(c))),
    r = new Set((n || []).map((c) => String(c))),
    i = [],
    o = [];
  for (const c of t || []) {
    const d =
      (c == null ? void 0 : c.contactId) != null ? String(c.contactId) : "";
    if (d && !r.has(d)) {
      if (a.size === 0) {
        i.push(c);
        continue;
      }
      a.has(d) ? i.push(c) : o.push(c);
    }
  }
  return { videoReplies: i, chatReplies: o };
}
function Mw(t, s = {}) {
  const n = !!s.dropFirstAcceptLine;
  let a = !1;
  return (t || [])
    .map((r) => {
      const i = String((r == null ? void 0 : r.text) || "").trim();
      if (!i || /REJECT_VIDEO_CALL/i.test(i)) return null;
      if (/ACCEPT_VIDEO_CALL/i.test(i)) {
        if (n && !a) return ((a = !0), null);
        const o = i.replace(/\s*\[?\s*ACCEPT_VIDEO_CALL\s*\]?\s*/gi, "").trim();
        return o ? { ...r, text: o } : null;
      }
      return r;
    })
    .filter(Boolean);
}
function Tw(t) {
  const { setCallState: s, result: n, replies: a, acceptedMembers: r } = t,
    i =
      n != null && n.video_events && Array.isArray(n.video_events)
        ? n.video_events
        : [],
    o = new Set([...(r || []).map((f) => String(f))]);
  (a || []).forEach((f) => {
    (f == null ? void 0 : f.contactId) != null && o.add(String(f.contactId));
  });
  const c = (f, p = Date.now()) =>
      (f || []).map((m, h) => {
        var v;
        const g = (m.text || "").trim(),
          x = gl(g),
          y = gc(g);
        return {
          id: `${p}-grp-vc-${h}-${m.contactId || h}`,
          text: y,
          type: "text",
          sender: "them",
          contactId: m.contactId || null,
          timestamp: new Date(p + h * 50).toISOString(),
          ...(x.narrator &&
            String(x.narrator).trim() && { narrator: x.narrator }),
          ...(x.dialogue &&
            String(x.dialogue).trim() && { dialogue: x.dialogue }),
          ...(x.dialogueTranslation && {
            dialogueTranslation: x.dialogueTranslation,
          }),
          ...((v = x.videoCallSegments) != null && v.length
            ? { videoCallSegments: x.videoCallSegments }
            : {}),
        };
      }),
    d = (a || []).filter(
      (f) =>
        (f == null ? void 0 : f.contactId) &&
        String(f.text || "").trim() &&
        o.has(String(f.contactId)),
    );
  if (i.length > 0 || d.length > 0) {
    const f = i.filter(
        (m) => (m == null ? void 0 : m.contactId) && o.has(String(m.contactId)),
      ),
      p = tF(f, d);
    if (p.length > 0)