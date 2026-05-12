      s((m) => ({ ...m, playbackQueue: [...(m.playbackQueue || []), ...p] }));
    else {
      const m = c(d);
      m.length > 0 &&
        s((h) => ({
          ...h,
          currentMessages: [...(h.currentMessages || []), ...m],
        }));
    }
  } else {
    const f = c(d);
    f.length > 0 &&
      s((p) => ({
        ...p,
        currentMessages: [...(p.currentMessages || []), ...f],
      }));
  }
}
function sF(t, s, n = [], a = {}) {
  var I, L, B;
  const { contacts: r = [], memes: i = [] } = a,
    o =
      ((I = a == null ? void 0 : a.featureProtocol) == null
        ? void 0
        : I.poll) || {},
    d = (Array.isArray(o == null ? void 0 : o.tags) ? o.tags : []).some(
      (F) => /\[POLL:/i.test(String(F || "")) || /投票/.test(String(F || "")),
    ),
    u =
      ((L = a == null ? void 0 : a.featureProtocol) == null
        ? void 0
        : L.relay) || {},
    p = (Array.isArray(u == null ? void 0 : u.tags) ? u.tags : []).some(
      (F) => /\[RELAY:/i.test(String(F || "")) || /接龙/.test(String(F || "")),
    ),
    m =
      ((B = a == null ? void 0 : a.featureProtocol) == null
        ? void 0
        : B.videoCallInvite) || {},
    g = (Array.isArray(m == null ? void 0 : m.tags) ? m.tags : []).some(
      (F) =>
        /\[VIDEO_CALL_INVITE/i.test(String(F || "")) ||
        /视频通话邀请/.test(String(F || "")),
    ),
    x = t.contactId,
    y = (t.text || "").trim(),
    v = new Set((s || []).map(String)),
    b = y.match(/\[TRANSFER:(\d+(\.\d+)?):(.*?)(?::(user|[\w-]+))?\]/i);
  if (b) {
    const F = parseFloat(b[1]),
      D = (b[3] || "").trim(),
      $ = (b[4] || "").trim(),
      P = !$ || $.toLowerCase() === "user" ? null : $;
    return {
      contactId: x,
      type: "transfer",
      text: `¥${F}`,
      amount: F,
      note: D || "转账",
      status: "pending",
      targetContactId: P,
    };
  }
  const N = y.match(/\[ORDER_FOOD:(.*?):(\d+(\.\d+)?)(?::(user|[\w-]+))?\]/i);
  if (N) {
    const F = (N[1] || "").trim(),
      D = parseFloat(N[2]).toFixed(2),
      $ = (N[4] || "").trim();
    let P = !$ || $.toLowerCase() === "user" ? null : $;
    return (
      P && String(P) === String(x) && (P = null),
      P && !v.has(String(P)) && (P = null),
      {
        contactId: x,
        type: "food_delivery",
        text: `[外卖] 为你点了 ${F}`,
        item: F,
        price: D,
        targetContactId: P,
      }
    );
  }
  const w = y.match(/\[PAY_FOR_ME:(.*?):(\d+(\.\d+)?)(?::(user|[\w-]+))?\]/i);
  if (w) {
    const F = (w[1] || "").trim(),
      D = parseFloat(w[2]).toFixed(2);
    return {
      contactId: x,
      type: "pay_for_me",
      text: `[代付] 帮我付个款: ${F}`,
      item: F,
      price: D,
      status: "pending",
    };
  }
  const _ = y.match(/\[VOICE\]([\s\S]*?)\[\/VOICE\]/i);
  if (_) {
    const F = (_[1] || "").trim(),
      D = Math.min(60, Math.max(1, Math.ceil(F.length / 4)));
    return { contactId: x, type: "voice", text: F || "[语音]", duration: D };
  }
  const A =
    y.match(/\[图片内容[：:]\s*([\s\S]*?)\]?$/i) ||
    y.match(/\[IMAGE:(.*?)\]/i) ||
    y.match(/^\[图片\]\s*\(?(.*?)\)?$/);
  if (A) {
    const F = (A[1] || "").trim() || "图片";
    return {
      contactId: x,
      type: "text_image",
      text: `[图片内容：${F}]`,
      content: F,
    };
  }
  const k = y.match(/\[RED_PACKET:(\d+(\.\d+)?):(\d+):(.*?)\]/i);
  if (k) {
    const F = parseFloat(k[1]) || 0,
      D = Math.max(1, parseInt(k[3], 10) || 1),
      $ = (k[4] || "").trim() || "恭喜发财，大吉大利";
    return {
      contactId: x,
      type: "red_packet",
      text: `红包 ¥${F.toFixed(2)} · ${D}个`,
      totalAmount: F,
      count: D,
      note: $,
      claims: [],
      mode: "equal",
    };
  }
  const C = d ? y.match(/\[POLL:(.*?)\]/) : null;
  if (C) {
    const F = (C[1] || "")
      .split(":")
      .map((D) => D.trim())
      .filter(Boolean);
    if (F.length >= 3) {
      const D = F[0],
        $ = F.slice(1).map((P, z) => ({ id: String(z), text: P, votes: [] }));
      return {
        contactId: x,
        type: "poll",
        text: `[投票] ${D}`,
        question: D,
        options: $,
      };
    }
  }
  const M = p ? y.match(/\[RELAY:(.*?)\]/) : null;
  if (M) {
    const F = (M[1] || "").trim() || "接龙";
    return {
      contactId: x,
      type: "relay",
      text: `[接龙] ${F}`,
      title: F,
      items: [],
    };
  }
  const E = g ? y.match(/\[VIDEO_CALL_INVITE(?::(.*?))?\]/) : null;
  if (E) {
    const F = (E[1] || "").trim() || null;
    return { contactId: x, type: "video_call_invite", inviteMessage: F };
  }
  const S = y.match(/\[FORWARD_MOMENT:([\s\S]*?)\]/);
  if (S) {
    const F = (S[1] || "").trim() || "分享了一条动态",
      D = (r || []).find((P) => P.id === x),
      $ = {
        id: Date.now(),
        user: {
          name:
            (D == null ? void 0 : D.remark) ||
            (D == null ? void 0 : D.nickname) ||
            (D == null ? void 0 : D.name) ||
            "群成员",
          avatar: D == null ? void 0 : D.avatar,
        },
        content: F,
        image: null,
        likes: 0,
        comments: [],
        timestamp: Date.now(),
        time: "刚刚",
        isLiked: !1,
      };
    return {
      contactId: x,
      type: "moment",
      text: `[转发朋友圈] ${F}`,
      moment: $,
    };
  }
  const j = y.match(/\[MEME:(.*?)\]/);
  if (j) {
    const F = (j[1] || "").trim(),
      D = (i || []).find(
        ($) => $.id === F || ($.meaning && String($.meaning).includes(F)),
      );
    if (D)
      return {
        contactId: x,
        type: "meme",
        text: "[表情包]",
        image: D.url,
        meaning: D.meaning,
      };
  }
  const T = y.match(/\[REPLY:"((?:[^"\\]|\\.)*)"\]/);
  if (T) {
    const F = T[1].replace(/\\(.)/g, "$1"),
      D = y.replace(T[0], "").trim(),
      $ = [...(n || [])]
        .reverse()
        .find(
          (z) => (z.text || "").includes(F) || (z.content || "").includes(F),
        ),
      P = ($ == null ? void 0 : $.id) || null;
    return { contactId: x, text: D || "(引用回复)", ...(P && { replyTo: P }) };
  }
  return { contactId: x, text: y };
}
function nF(t, s, n) {
  if (!(t != null && t.isGroup) || !Array.isArray(s)) return s || [];
  const a = um(t.settings),
    r = t.memberIds || [],
    i = (n || [])
      .filter((f) => (f.boundContacts || []).some((p) => r.includes(p)))
      .map((f) => f.id),
    o =
      a.length > 0
        ? (s || []).filter((f) =>
            (f.categoryIds || []).some((p) => a.includes(p)),
          )
        : [],
    c = (s || []).filter((f) =>
      (f.categoryIds || []).some((p) => i.includes(p)),
    ),
    d = new Set(o.map((f) => f.id)),
    u = [...o];
  return (
    c.forEach((f) => {
      d.has(f.id) || (d.add(f.id), u.push(f));
    }),
    u
  );
}
function aF(
  t,
  s,
  {
    chatsRef: n,
    contactsRef: a,
    updateMessage: r,
    handleTransferAction: i,
    getMemberDisplayName: o,
    sendSystemMessage: c,
  },
) {
  var f;
  if (
    typeof r != "function" ||
    !Array.isArray(s) ||
    s.length === 0 ||
    !((f = n.current) != null && f.some((p) => p.id === t))
  )
    return;
  const d = (p) => {
      var m, h, g;
      return typeof o == "function"
        ? o(p)
        : ((m = (a.current || []).find((x) => x.id === p)) == null
            ? void 0
            : m.remark) ||
            ((h = (a.current || []).find((x) => x.id === p)) == null
              ? void 0
              : h.nickname) ||
            ((g = (a.current || []).find((x) => x.id === p)) == null
              ? void 0
              : g.name) ||
            "某成员";
    },
    u = () => {
      var p, m;
      return (
        ((m = (p = n.current) == null ? void 0 : p.find((h) => h.id === t)) ==
        null
          ? void 0
          : m.messages) || []
      );
    };
  for (const p of s) {
    if (!p || (p.type && p.type !== "text")) continue;
    const m = p.contactId;
    if (!m) continue;
    let h = (p.text || "").trim();
    if (h) {
      if (/ACCEPT_PAY_FOR_ME/i.test(h)) {
        const g = [...u()]
          .reverse()
          .find(
            (x) =>
              x.type === "pay_for_me" &&
              x.status === "pending" &&
              x.sender === "them" &&
              x.contactId &&
              String(x.contactId) !== String(m),
          );
        if (g) {
          const x = d(m),
            y = d(g.contactId);
          (r(t, g.id, {
            status: "accepted",
            paidByContactId: m,
            paidByName: x,
          }),
            typeof c == "function" &&
              c(
                t,
                `[系统通知] ${x}代付成功：${g.item || ""} (¥${g.price || ""})（为 ${y}）`,
              ));
        }
        h = h.replace(/\[ACCEPT_PAY_FOR_ME\]/gi, "").trim();
      }
      if (/REJECT_PAY_FOR_ME/i.test(h)) {
        const g = [...u()]
          .reverse()
          .find(
            (x) =>
              x.type === "pay_for_me" &&
              x.status === "pending" &&
              x.sender === "them" &&
              x.contactId &&
              String(x.contactId) !== String(m),
          );
        if (g) {
          const x = d(m),
            y = d(g.contactId);
          (r(t, g.id, { status: "rejected" }),
            typeof c == "function" &&
              c(
                t,
                `[系统通知] ${x}拒绝代付：${g.item || ""} (¥${g.price || ""})（${y}的求助）`,
              ));
        }
        h = h.replace(/\[REJECT_PAY_FOR_ME\]/gi, "").trim();
      }
      if (/ACCEPT_FOOD_DELIVERY/i.test(h)) {
        const g = [...u()].reverse().find((x) => {
          if (
            x.type !== "food_delivery" ||
            x.status !== "pending" ||
            x.sender !== "them"
          )
            return !1;
          const y =
            x.targetContactId != null ? String(x.targetContactId) : null;
          return y != null && y === String(m);
        });
        (g && r(t, g.id, { status: "accepted" }),
          (h = h.replace(/\[ACCEPT_FOOD_DELIVERY\]/gi, "").trim()));
      }
      if (/REJECT_FOOD_DELIVERY/i.test(h)) {
        const g = [...u()].reverse().find((x) => {
          if (
            x.type !== "food_delivery" ||
            x.status !== "pending" ||
            x.sender !== "them"
          )
            return !1;
          const y =
            x.targetContactId != null ? String(x.targetContactId) : null;
          return y != null && y === String(m);
        });
        (g && r(t, g.id, { status: "rejected" }),
          (h = h.replace(/\[REJECT_FOOD_DELIVERY\]/gi, "").trim()));
      }
      if (/ACCEPT_TRANSFER/i.test(h)) {
        const g = [...u()].reverse().find((x) => {
          if (
            x.type !== "transfer" ||
            x.status !== "pending" ||
            x.sender !== "them"
          )
            return !1;
          const y =
            x.targetContactId != null ? String(x.targetContactId) : null;
          return y != null && y === String(m);
        });
        (g && typeof i == "function" && i(t, g.id, "accept", m),
          (h = h
            .replace(/\[\s*ACCEPT_TRANSFER(?:\s*:[^\]]*)?\s*\]/gi, "")
            .trim()));
      }
      if (/REJECT_TRANSFER/i.test(h)) {
        const g = [...u()].reverse().find((x) => {
          if (
            x.type !== "transfer" ||
            x.status !== "pending" ||
            x.sender !== "them"
          )
            return !1;
          const y =
            x.targetContactId != null ? String(x.targetContactId) : null;
          return y != null && y === String(m);
        });
        (g && typeof i == "function" && i(t, g.id, "reject", m),
          (h = h
            .replace(/\[\s*REJECT_TRANSFER(?:\s*:[^\]]*)?\s*\]/gi, "")
            .trim()));
      }
      p.text = h.trim() || "好。";
    }
  }
}
function rF(t) {
  const {
      handleRedPacketGrabByAI: s,
      handleRedPacketGrabsByAIBatch: n,
      chatsRef: a,
      contactsRef: r,
      memes: i,
      memeCategories: o,
      callStateRef: c,
      setCallStateRef: d,
      setCallState: u,
      setChats: f,
      unlockAudio: p,
      playTTS: m,
      playSound: h,
      receiveGroupRepliesFromGroupChat: g,
      updateChatSettings: x,
      sendSystemMessage: y,
      updateMessage: v,
      handleTransferAction: b,
      featureProtocol: N,
    } = t,
    w = N || Ni;
  return async function (A, k) {
    var Xe, ht, Pe, ut, _t, Ee, fe, He, Ie, Ce, Re;
    let C = null,
      M = !1,
      E = [],
      S = (k == null ? void 0 : k.actions) ?? [];
    const j = (Xe = a.current) == null ? void 0 : Xe.find((De) => De.id === A),
      T = !!(
        (ht = j == null ? void 0 : j.settings) != null &&
        ht.allowMembersChangeGroupAvatar
      ),
      I = Array.isArray(
        (Pe = j == null ? void 0 : j.settings) == null
          ? void 0
          : Pe.groupAvatarLibrary,
      )
        ? j.settings.groupAvatarLibrary
        : [],
      L = (De) => {
        try {
          window.dispatchEvent(new CustomEvent(Nu, { detail: { text: De } }));
        } catch {}
      },
      B = (De) => {
        var vt;
        const at =
            ((vt = j == null ? void 0 : j.settings) == null
              ? void 0
              : vt.memberRoles) || {},
          ft = at && De != null ? at[String(De)] : null;
        return String(ft || "member");
      },
      F = (De) => {
        const at = B(De);
        return at === "owner" || at === "admin";
      },
      D = S.filter(
        (De) =>
          (De == null ? void 0 : De.type) === "group_avatar_change" &&
          De.avatarId &&
          De.contactId,
      );
    if (D.length > 0 && T && I.length > 0) {
      const De = D[0],
        at = I.find(
          (ft) => String(ft == null ? void 0 : ft.id) === String(De.avatarId),
        );
      if (at != null && at.url) {
        const ft = (r.current || []).find((Qe) => Qe.id === De.contactId),
          vt =
            (ft == null ? void 0 : ft.remark) ||
            (ft == null ? void 0 : ft.nickname) ||
            (ft == null ? void 0 : ft.name) ||
            "某成员",
          Oe = (at.desc || at.description || "").trim();
        if (
          (typeof x == "function"
            ? x(A, {
                groupAvatar: at.url,
                groupAvatarLastChange: {
                  avatarId: at.id,
                  by: De.contactId,
                  at: Date.now(),
                  desc: Oe || "",
                },
              })
            : f((Qe) =>
                Qe.map((Ye) =>
                  Ye.id === A
                    ? {
                        ...Ye,
                        settings: {
                          ...(Ye.settings || {}),
                          groupAvatar: at.url,
                          groupAvatarLastChange: {
                            avatarId: at.id,
                            by: De.contactId,
                            at: Date.now(),
                            desc: Oe || "",
                          },
                        },
                      }
                    : Ye,
                ),
              ),
          typeof y == "function")
        ) {
          const Qe = Oe
            ? `[系统提示：${vt} 将群头像更换为「${Oe}」]`
            : `[系统提示：${vt} 更换了群头像]`;
          y(A, Qe);
        }
      }
    }
    const $ = Array.isArray(S) ? S : [],
      P = $.filter(
        (De) =>
          (De == null ? void 0 : De.type) === "group_name_set" &&
          (De == null ? void 0 : De.name) &&
          (De == null ? void 0 : De.contactId),
      ),
      z = $.filter(
        (De) =>
          (De == null ? void 0 : De.type) === "group_announcement_publish" &&
          (De == null ? void 0 : De.text) &&
          (De == null ? void 0 : De.contactId),
      ),
      O = $.filter(
        (De) =>
          (De == null ? void 0 : De.type) === "group_member_title_set" &&
          (De == null ? void 0 : De.targetContactId) &&
          (De == null ? void 0 : De.title) &&
          (De == null ? void 0 : De.contactId),
      ),
      Z = $.filter(
        (De) =>
          (De == null ? void 0 : De.type) === "group_member_mute" &&
          (De == null ? void 0 : De.targetContactId) &&
          (De == null ? void 0 : De.minutes) &&
          (De == null ? void 0 : De.contactId),
      ),
      K = (De) => {
        var ft, vt, Oe, Qe, Ye;
        const at = r.current || [];
        return (
          ((j == null ? void 0 : j.isGroup) &&
            ((vt =
              (ft = j == null ? void 0 : j.settings) == null
                ? void 0
                : ft.memberTitles) == null
              ? void 0
              : vt[De])) ||
          ((Oe = at.find((Ze) => Ze.id === De)) == null ? void 0 : Oe.remark) ||
          ((Qe = at.find((Ze) => Ze.id === De)) == null
            ? void 0
            : Qe.nickname) ||
          ((Ye = at.find((Ze) => Ze.id === De)) == null ? void 0 : Ye.name) ||
          "某成员"
        );
      };
    if (P.length > 0) {
      const De = P[0];
      if (F(De.contactId)) {
        const at = String(De.name).trim();
        if (at) {
          x == null || x(A, { groupName: at });
          const ft = K(De.contactId);
          (y == null || y(A, `[系统提示：${ft}修改群名为'${at}']`),
            L(`群名已修改为「${at}」`));
        }
      }
    }
    let q = null;
    if (z.length > 0) {
      const De = z[0];
      if (F(De.contactId)) {
        const at = String(De.text || "").trim();
        at &&
          (x == null || x(A, { groupAnnouncement: at }),
          (q = {
            type: "group_announcement",
            text: at,
            contactId: De.contactId,
            sender: "them",
          }));
      }
    }
    const V = new Set();
    if (O.length > 0) {
      const De = O[0];
      if (F(De.contactId)) {
        const at = String(De.targetContactId),
          ft = String(De.title || "").trim();
        if (at && ft)
          if (
            ((ut = at.toLowerCase) == null ? void 0 : ut.call(at)) === "user"
          ) {
            x == null || x(A, { myTitle: ft });
            const vt = K(De.contactId);
            (y == null || y(A, `[系统提示：${vt} 将你的群昵称改为「${ft}」]`),
              L(`你的群昵称已修改为「${ft}」`));
          } else {
            const vt = {
              ...(((_t = j == null ? void 0 : j.settings) == null
                ? void 0
                : _t.memberTitles) || {}),
            };
            ((vt[at] = ft), x == null || x(A, { memberTitles: vt }));
            const Oe = K(De.contactId),
              Qe = K(at);
            (y == null ||
              y(A, `[系统提示：${Oe} 将${Qe}的群昵称改为「${ft}」]`),
              L(`已修改 ${Qe} 的群昵称`));
          }
      }
    }
    if (Z.length > 0) {
      const De = Z[0];
      if (F(De.contactId)) {
        const at = String(De.targetContactId),
          ft = Math.max(1, Math.min(1440, parseInt(De.minutes, 10) || 0));
        if (at && ft && at !== String(De.contactId)) {
          const vt = {
            ...(((Ee = j == null ? void 0 : j.settings) == null
              ? void 0
              : Ee.mutedMembers) || {}),
          };
          ((vt[at] = Date.now() + ft * 60 * 1e3),
            x == null || x(A, { mutedMembers: vt }));
          const Oe = K(De.contactId),
            Qe = K(at);
          (y == null || y(A, `[系统提示：${Oe} 将${Qe}禁言 ${ft} 分钟]`),
            L(`${Qe} 已被禁言 ${ft} 分钟`),
            V.add(String(at)));
        }
      }
    }
    const le = ((De, at, ft) => {
      const vt = Array.isArray(De) ? De : [],
        Oe = (ft == null ? void 0 : ft.messages) || [];
      if (vt.length === 0 || Oe.length === 0) return [];
      const Qe = new Set(
          (at || [])
            .filter(
              (Ue) =>
                (Ue == null ? void 0 : Ue.type) === "red_packet_grab" &&
                (Ue == null ? void 0 : Ue.messageId) &&
                (Ue == null ? void 0 : Ue.contactId),
            )
            .map((Ue) => `${String(Ue.messageId)}::${String(Ue.contactId)}`),
        ),
        Ye = [],
        Ze = (Ue) => {
          const me = String(Ue || "").trim();
          return me
            ? /\[GRAB_RED_PACKET\]/i.test(me)
              ? !0
              : /(谢谢红包|感谢红包|抢到|领到|收下红包|抢了红包|拿到红包|谢谢.*红包)/.test(
                  me,
                )
            : !1;
        };
      for (const Ue of vt) {
        const me = Ue == null ? void 0 : Ue.contactId;
        if (!me || !Ze(Ue == null ? void 0 : Ue.text)) continue;
        const jt = [...Oe].reverse().find((Pt) => {
          if (!Pt || Pt.type !== "red_packet") return !1;
          const Wt = Array.isArray(Pt.claims) ? Pt.claims : [];
          return !(
            (Pt.count || 1) - Wt.length <= 0 ||
            Wt.some(
              (Kt) => String(Kt == null ? void 0 : Kt.sender) === String(me),
            )
          );
        });
        if (!(jt != null && jt.id)) continue;
        const Gt = `${String(jt.id)}::${String(me)}`;
        Qe.has(Gt) ||
          (Qe.add(Gt),
          Ye.push({
            type: "red_packet_grab",
            messageId: jt.id,
            contactId: me,
          }));
      }
      return Ye;
    })((k == null ? void 0 : k.replies) ?? [], S, j);
    le.length > 0 && (S = [...S, ...le]);
    const ie = (S || []).filter(
      (De) =>
        (De == null ? void 0 : De.type) === "red_packet_grab" &&
        De.messageId &&
        De.contactId,
    );
    if (ie.length > 0 && typeof n == "function") {
      const De = new Map();
      for (const at of ie) {
        const ft = at.messageId;
        (De.has(ft) || De.set(ft, []),
          De.get(ft).push({ contactId: at.contactId, amount: at.amount }));
      }
      De.forEach((at, ft) => {
        n(A, ft, at);
      });
    }
    const X = S.filter(
        (De) =>
          (De == null ? void 0 : De.type) !== "red_packet_grab" &&
          (De == null ? void 0 : De.type) !== "group_avatar_change" &&
          (De == null ? void 0 : De.type) !== "group_announcement_publish" &&
          (De == null ? void 0 : De.type) !== "group_name_set" &&
          (De == null ? void 0 : De.type) !== "group_member_title_set" &&
          (De == null ? void 0 : De.type) !== "group_member_mute",
      ),
      je = (S || []).filter(
        (De) =>
          (De == null ? void 0 : De.type) === "poll_vote" &&
          De.messageId &&
          De.optionId != null &&
          De.contactId,
      );
    if (je.length > 0 && typeof y == "function") {
      const De = r.current || [];
      for (const at of je) {
        const ft = ((j == null ? void 0 : j.messages) || []).find(
            (Ye) => Ye.id === at.messageId,
          ),
          vt =
            ((ft == null ? void 0 : ft.type) === "poll" &&
              ft != null &&
              ft.options &&
              ((fe = ft.options.find(
                (Ye) => String(Ye.id) === String(at.optionId),
              )) == null
                ? void 0
                : fe.text)) ||
            "未知选项",
          Oe = De.find((Ye) => Ye.id === at.contactId),
          Qe =
            j != null &&
            j.isGroup &&
            (Ie =
              (He = j == null ? void 0 : j.settings) == null
                ? void 0
                : He.memberTitles) != null &&
            Ie[at.contactId]
              ? j.settings.memberTitles[at.contactId]
              : (Oe == null ? void 0 : Oe.remark) ||
                (Oe == null ? void 0 : Oe.nickname) ||
                (Oe == null ? void 0 : Oe.name) ||
                "某成员";
        y(A, `[系统提示] ${Qe}投给了「${vt}」`);
      }
    }
    const xe = (k == null ? void 0 : k.replies) ?? [],
      ye =
        V.size > 0
          ? xe.filter(
              (De) =>
                (De == null ? void 0 : De.contactId) &&
                !V.has(String(De.contactId)),
            )
          : xe,
      R = (j == null ? void 0 : j.memberIds) || [],
      oe = j != null && j.isGroup ? nF(j, i ?? [], o ?? []) : (i ?? []),
      ee =
        ye.length > 0 && R.length > 0
          ? ye.map((De) =>
              sF(De, R, (j == null ? void 0 : j.messages) || [], {
                contacts: r.current || [],
                memes: oe,
                featureProtocol: w,
              }),
            )
          : ye,
      H = ee.filter((De) => De.type === "video_call_invite"),
      Y = ee.filter((De) => De.type !== "video_call_invite");
    if (H.length > 0 && d.current) {
      const De = H[0];
      d.current({
        status: "incoming",
        contactId: null,
        chatId: A,
        isGroup: !0,
        startTime: null,
        isInitiator: !1,
        isMinimized: !1,
        currentMessages: [],
        inviteMessage: De.inviteMessage || null,
      });
    }
    const U = c == null ? void 0 : c.current,
      ce = r.current || [],
      pe = (De) => {
        var at, ft, vt, Oe, Qe;
        return (
          ((j == null ? void 0 : j.isGroup) &&
            ((ft =
              (at = j == null ? void 0 : j.settings) == null
                ? void 0
                : at.memberTitles) == null
              ? void 0
              : ft[De])) ||
          ((vt = ce.find((Ye) => Ye.id === De)) == null ? void 0 : vt.remark) ||
          ((Oe = ce.find((Ye) => Ye.id === De)) == null
            ? void 0
            : Oe.nickname) ||
          ((Qe = ce.find((Ye) => Ye.id === De)) == null ? void 0 : Qe.name) ||
          "某成员"
        );
      },
      se = (De, at) =>
        at.test(String((De && JSON.stringify(De)) || "")) ||
        at.test(String(((De == null ? void 0 : De.text) || "").trim())),
      Te =
        (U == null ? void 0 : U.status) === "outgoing" &&
        (U == null ? void 0 : U.isGroup) &&
        String((U == null ? void 0 : U.chatId) ?? "") === String(A ?? ""),
      ke = xe.some((De) => se(De, /ACCEPT_VIDEO_CALL/i)),
      W = (U == null ? void 0 : U.status) === "idle" && ke && xe.length > 0;
    let ue = !1,
      re = null,
      he = null;
    if (xe.length > 0 && (Te || W)) {
      let De =
          (U == null ? void 0 : U.status) === "outgoing"
            ? [...(U.acceptedMembers || [])]
            : [],
        at =
          (U == null ? void 0 : U.status) === "outgoing"
            ? [...(U.rejectedMembers || [])]
            : [],
        ft = !1;
      for (const vt of xe) {
        const Oe = (vt.text || "").trim(),
          Qe = vt.contactId,
          Ye = /REJECT_VIDEO_CALL/i.test(Oe),
          Ze = se(vt, /ACCEPT_VIDEO_CALL/i);
        if (Ye && Qe != null) {
          const Ue = String(Qe);
          at.some((me) => String(me) === Ue) || at.push(Qe);
        }
        if (Ze && Qe != null) {
          const Ue = String(Qe);
          if ((De.some((me) => String(me) === Ue) || De.push(Qe), !ft)) {
            ((ft = !0), p == null || p());
            const me = Oe.replace(
                /\s*\[?\s*ACCEPT_VIDEO_CALL\s*\]?\s*/gi,
                "",
              ).trim(),
              jt = gl(me),
              Gt = {
                id: `${Date.now()}-grp-vc-${Qe}`,
                text: gc(me),
                type: "text",
                sender: "them",
                contactId: Qe,
                timestamp: new Date().toISOString(),
                ...(jt.narrator &&
                  String(jt.narrator).trim() && { narrator: jt.narrator }),
                ...(jt.dialogue &&
                  String(jt.dialogue).trim() && { dialogue: jt.dialogue }),
                ...(jt.dialogueTranslation && {
                  dialogueTranslation: jt.dialogueTranslation,
                }),
                ...((Ce = jt.videoCallSegments) != null && Ce.length
                  ? { videoCallSegments: jt.videoCallSegments }
                  : {}),
              };
            if (
              (u((Pt) => ({
                ...Pt,
                status: "connected",
                startTime: Date.now(),
                isMinimized: !1,
                currentMessages: [Gt],
                acceptedMembers: De,
                rejectedMembers: at,
                ...(W && { chatId: A, isGroup: !0 }),
              })),
              jt.dialogue)
            ) {
              const Pt = ce.find((Wt) => Wt.id === Qe);
              Pt != null &&
                Pt.ttsVoiceId &&
                m(jt.dialogue, {
                  voiceId: Pt.ttsVoiceId,
                  speed: Pt.ttsSpeed ?? 1,
                  pitch: Pt.ttsPitch ?? 0,
                  groupId: Pt.minimaxGroupId,
                  minimaxModel: Pt.minimaxModel,
                });
            }
          }
        }
      }
      (!ft &&
        (at.length > 0 || De.length > 0) &&
        u((vt) => ({ ...vt, acceptedMembers: De, rejectedMembers: at })),
        (ue = ft),
        (re = De),
        (he = [...at]),
        (M = !!(ke || ue)),
        (C = []));
      for (const vt of xe) {
        const Oe = (vt.text || "").trim(),
          Qe = vt.contactId,
          Ye = /REJECT_VIDEO_CALL/i.test(Oe),
          Ze = se(vt, /ACCEPT_VIDEO_CALL/i),
          Ue = Qe ? pe(Qe) : "某成员";
        if (Ze)
          C.push({
            type: "system",
            text: `${Ue}已接听`,
            contactId: null,
            sender: "system",
          });
        else if (Ye) {
          C.push({
            type: "system",
            text: `${Ue}拒绝了视频通话`,
            contactId: null,
            sender: "system",
          });
          const me = Oe.replace(
            /\s*\[?\s*REJECT_VIDEO_CALL\s*\]?\s*/gi,
            "",
          ).trim();
          me && C.push({ type: "text", text: me, contactId: Qe });
        } else ue || C.push(vt);
      }
    }
    if (
      ue &&
      String((U == null ? void 0 : U.chatId) ?? "") === String(A ?? "") &&
      U != null &&
      U.isGroup &&
      (Y.length > 0 ||
        (k != null && k.video_events && k.video_events.length > 0))
    ) {
      const De = Mw(Y, { dropFirstAcceptLine: !0 }),
        at = Aw(re, De),
        ft = Cw(De, at, he || []);
      (E.push(...ft.chatReplies),
        Tw({
          setCallState: u,
          result: k,
          replies: ft.videoReplies,
          acceptedMembers: at,
        }));
    } else {
      const De = c == null ? void 0 : c.current;
      if (
        (De == null ? void 0 : De.status) === "connected" &&
        String((De == null ? void 0 : De.chatId) ?? "") === String(A ?? "") &&
        De != null &&
        De.isGroup &&
        (Y.length > 0 ||
          (k != null && k.video_events && k.video_events.length > 0))
      ) {
        const at = Mw(Y, { dropFirstAcceptLine: !1 }),
          ft = Aw(De.acceptedMembers || [], at),
          vt = Cw(at, ft, De.rejectedMembers || []);
        (E.push(...vt.chatReplies),
          Tw({
            setCallState: u,
            result: k,
            replies: vt.videoReplies,
            acceptedMembers: ft,
          }));
      }
    }
    let ge = [];
    const J = ((k == null ? void 0 : k.actions) ?? []).filter(
      (De) =>
        (De == null ? void 0 : De.type) === "video_call_leave" &&
        (De == null ? void 0 : De.contactId),
    );
    if (
      J.length > 0 &&
      (U == null ? void 0 : U.status) === "connected" &&
      U != null &&
      U.isGroup &&
      String((U == null ? void 0 : U.chatId) ?? "") === String(A ?? "") &&
      d != null &&
      d.current
    )
      for (const De of J) {
        const at = De.contactId;
        d.current((vt) => ({
          ...vt,
          acceptedMembers: (vt.acceptedMembers || []).filter((Oe) => Oe !== at),
        }));
        const ft = pe(at);
        ge.push({
          type: "system",
          sender: "system",
          text: `${ft}退出了视频通话`,
          contactId: null,
        });
      }
    const G = [
        "video_call_mic_off",
        "video_call_mic_on",
        "video_call_camera_off",
        "video_call_camera_on",
      ],
      we = ((k == null ? void 0 : k.actions) ?? []).filter(
        (De) =>
          (De == null ? void 0 : De.contactId) &&
          G.includes(De == null ? void 0 : De.type),
      );
    let Q = [];
    const ve = c == null ? void 0 : c.current;
    if (
      we.length > 0 &&
      (ve == null ? void 0 : ve.status) === "connected" &&
      ve != null &&
      ve.isGroup &&
      (ve == null ? void 0 : ve.chatId) === A
    )
      for (const De of we) {
        const at = pe(De.contactId);
        let ft = "";
        (De.type === "video_call_mic_off"
          ? (ft = `${at}已静音`)
          : De.type === "video_call_mic_on"
            ? (ft = `${at}已取消静音`)
            : De.type === "video_call_camera_off"
              ? (ft = `${at}已关闭摄像头`)
              : De.type === "video_call_camera_on" &&
                (ft = `${at}已打开摄像头`),
          ft &&
            Q.push({
              type: "system",
              sender: "system",
              text: ft,
              contactId: null,
            }));
      }
    const Ve = c == null ? void 0 : c.current,
      Ae =
        (Ve == null ? void 0 : Ve.status) === "connected" &&
        (Ve == null ? void 0 : Ve.isGroup) &&
        String((Ve == null ? void 0 : Ve.chatId) ?? "") === String(A ?? ""),
      te = [...ge, ...Q];
    if (Ae && te.length > 0 && d != null && d.current) {
      const De = te.map((at, ft) => ({
        id: `vc-sys-${Date.now()}-${ft}-${(at.text || "").slice(0, 20)}`,
        type: "system",
        sender: "system",
        text: at.text,
        contactId: null,
        timestamp: new Date().toISOString(),
      }));
      d.current((at) => ({
        ...at,
        currentMessages: [...(at.currentMessages || []), ...De],
      }));
    }
    const Se = C !== null ? [...C, ...E] : Ae ? [...E] : Y,
      Fe = q != null ? [...Se, q] : Se,
      $e = ["video_call_leave", ...G];
    (aF(A, Fe, {
      chatsRef: a,
      contactsRef: r,
      updateMessage: v,
      handleTransferAction: b,
      sendSystemMessage: y,
      getMemberDisplayName: (De) => {
        var at, ft, vt, Oe, Qe;
        return (
          ((j == null ? void 0 : j.isGroup) &&
            ((ft =
              (at = j == null ? void 0 : j.settings) == null
                ? void 0
                : at.memberTitles) == null
              ? void 0
              : ft[De])) ||
          ((vt = ce.find((Ye) => Ye.id === De)) == null ? void 0 : vt.remark) ||
          ((Oe = ce.find((Ye) => Ye.id === De)) == null
            ? void 0
            : Oe.nickname) ||
          ((Qe = ce.find((Ye) => Ye.id === De)) == null ? void 0 : Qe.name) ||
          "某成员"
        );
      },
    }),
      await g(
        A,
        Fe,
        f,
        h,
        X.filter((De) => !$e.includes(De == null ? void 0 : De.type)),
      ));
    const tt =
      (Re = c == null ? void 0 : c.current) == null
        ? void 0
        : Re.groupVideoPendingJoin;
    if (
      typeof u == "function" &&
      tt != null &&
      tt.contactId &&
      String(c.current.chatId ?? "") === String(A ?? "") &&
      c.current.isGroup
    ) {
      const De = String(tt.contactId),
        at =
          Array.isArray(k == null ? void 0 : k.replies) &&
          k.replies.some(
            (vt) => String(vt == null ? void 0 : vt.contactId) === De,
          ),
        ft =
          Array.isArray(k == null ? void 0 : k.video_events) &&
          k.video_events.some(
            (vt) => String(vt == null ? void 0 : vt.contactId) === De,
          );
      (at || ft) &&
        u((vt) =>
          String((vt == null ? void 0 : vt.chatId) ?? "") !== String(A ?? "") ||
          !(vt != null && vt.isGroup)
            ? vt
            : { ...vt, groupVideoPendingJoin: null },
        );
    }
    return { groupVideoOutgoingSuppressMissed: M };
  };
}
async function iF(t, s, n, a, r = []) {
  const i = typeof a == "function" ? a : () => {};
  if (
    (r != null &&
      r.length &&
      n((c) => {
        const d = new Map();
        return c.map((u) => {
          var p;
          if (u.id !== t) return u;
          for (const m of r) {
            const h =
              d.get(m.messageId) ??
              u.messages.find((g) => g.id === m.messageId);
            if (h) {
              if (
                m.type === "poll_vote" &&
                h.type === "poll" &&
                h.options &&
                m.optionId != null
              ) {
                const g = h.options.map((x) => ({
                  ...x,
                  votes:
                    String(x.id) === String(m.optionId)
                      ? [
                          ...(x.votes || []).filter((y) => y !== m.contactId),
                          m.contactId,
                        ]
                      : (x.votes || []).filter((y) => y !== m.contactId),
                }));
                d.set(m.messageId, { ...h, options: g });
              } else if (
                m.type === "relay_add" &&
                h.type === "relay" &&
                m.text != null &&
                m.text !== ""
              ) {
                const g = d.get(m.messageId) || h;
                if (
                  (g.items || []).some(
                    (v) =>
                      String((v == null ? void 0 : v.contactId) || "") ===
                      String(m.contactId || ""),
                  )
                )
                  continue;
                const y = [
                  ...(g.items || []),
                  {
                    id: `${Date.now()}-relay-${m.contactId}-${((p = g.items) == null ? void 0 : p.length) ?? 0}`,
                    text: m.text.trim(),
                    sender: "them",
                    contactId: m.contactId,
                  },
                ];
                d.set(m.messageId, { ...g, items: y });
              }
            }
          }
          if (d.size === 0) return u;
          const f = u.messages.map((m) => d.get(m.id) ?? m);
          return { ...u, messages: f };
        });
      }),
    !(s != null && s.length))
  )
    return;
  let o = "";
  for (let c = 0; c < s.length; c++) {
    const d = s[c];
    let u = 0;
    if (c > 0) {
      const w = o || (s[c - 1].text || "").trim(),
        _ = 800,
        A = Math.min(3e3, w.length * (50 + Math.random() * 30));
      u = _ + A + Math.random() * 500;
    }
    u > 0 && (await new Promise((w) => setTimeout(w, u)));
    const f = new Date().toISOString(),
      p =
        ((d == null ? void 0 : d.type) == null ||
          (d == null ? void 0 : d.type) === "text") &&
        typeof d.text == "string" &&
        d.text.trim(),
      m = {
        sender: d.sender ?? "them",
        contactId: d.contactId,
        timestamp: f,
        ...(d.amount != null && { amount: d.amount }),
        ...(d.note != null && { note: d.note }),
        ...(d.targetContactId !== void 0 && {
          targetContactId: d.targetContactId,
        }),
        ...(d.item != null && { item: d.item }),
        ...(d.price != null && { price: d.price }),
        ...(d.status !== void 0 && { status: d.status }),
        ...(d.image !== void 0 && { image: d.image }),
        ...(d.meaning !== void 0 && { meaning: d.meaning }),
        ...(d.duration !== void 0 && { duration: d.duration }),
        ...(d.totalAmount != null && { totalAmount: d.totalAmount }),
        ...(d.count != null && { count: d.count }),
        ...(d.claims != null && { claims: d.claims }),
        ...(d.mode != null && { mode: d.mode }),
        ...(d.question != null && { question: d.question }),
        ...(d.options != null && { options: d.options }),
        ...(d.title != null && { title: d.title }),
        ...(d.items != null && { items: d.items }),
        ...(d.moment != null && { moment: d.moment }),
      },
      h = (w) =>
        w.text ||
        (w.type === "transfer"
          ? `[转账] ￥${w.amount}`
          : w.type === "food_delivery"
            ? "[外卖]"
            : w.type === "pay_for_me"
              ? "[代付]"
              : w.type === "red_packet"
                ? "[红包]"
                : w.type === "poll"
                  ? "[投票]"
                  : w.type === "relay"
                    ? "[接龙]"
                    : w.type === "moment"
                      ? "[转发朋友圈]"
                      : w.type === "meme"
                        ? "[表情包]"
                        : w.type === "voice"
                          ? "[语音]"
                          : w.type === "image" || w.type === "text_image"
                            ? "[图片]"
                            : ""),
      g = (w, _) => {
        (n((A) =>
          A.map((k) =>
            k.id !== t || k.messages.some((C) => C.id === w.id)
              ? k
              : {
                  ...k,
                  isTyping: _,
                  lastMessage: h(w),
                  timestamp: f,
                  messages: [...k.messages, w],
                },
          ),
        ),
          i("receive"),
          typeof navigator < "u" && navigator.vibrate && navigator.vibrate(50));
      };
    if (p) {
      const w = X$(d.text);
      o = "";
      for (let _ = 0; _ < w.length; _++) {
        _ > 0 &&
          (await new Promise((B) => setTimeout(B, 400 + Math.random() * 250)));
        const A = w[_];
        let k = d.text,
          C = null,
          M = null,
          E = null,
          S = d.type || "text";
        if (A.kind === "html") {
          const B = pl(A.html);
          ((E = (B.dialogue || A.html).trim()),
            (k = "[HTML 组件]"),
            (S = "html_widget"),
            B.dialogueTranslation &&
              String(B.dialogueTranslation).trim() &&
              (C = B.dialogueTranslation));
        } else
          ((k = A.displayText),
            (C = A.translation),
            (M = A.translationSegments));
        const j = _ < w.length - 1,
          T = c < s.length - 1,
          I = j || T,
          L = {
            id: `${Date.now()}-grp-${c}-${_}-${d.contactId || "u"}-${Math.random().toString(36).slice(2, 8)}`,
            text: k,
            type: S,
            ...(E != null && { html: E }),
            ...(C != null && { translation: C }),
            ...(M != null && { translationSegments: M }),
            ...(d.replyTo != null && _ === 0 && { replyTo: d.replyTo }),
            ...m,
          };
        (g(L, I), (o = (k || "").trim() || "[HTML 组件]"));
      }
      continue;
    }
    let x = d == null ? void 0 : d.text,
      y = null,
      v = null,
      b = null;
    if (typeof x == "string" && x.trim())
      if (Jm(x)) {
        const w = pl(x);
        ((b = (w.dialogue || x).trim()),
          (x = "[HTML 组件]"),
          w.dialogueTranslation &&
            String(w.dialogueTranslation).trim() &&
            (y = w.dialogueTranslation));
      } else {
        const w = nh(x);
        if (w.length <= 1) {
          const _ = pl(x);
          ((x = _.dialogue || x),
            _.dialogueTranslation &&
              String(_.dialogueTranslation).trim() &&
              (y = _.dialogueTranslation));
        } else {
          const _ = w.map((A) => pl(A));
          ((x = _.map((A) => A.dialogue).join("||")),
            (v = _.map((A) =>
              A.dialogueTranslation && String(A.dialogueTranslation).trim()
                ? A.dialogueTranslation
                : null,
            )),
            v.some(Boolean) || (v = null));
        }
      }
    const N = {
      id: `${Date.now()}-grp-${c}-${d.contactId || "u"}-${Math.random().toString(36).slice(2, 8)}`,
      ...m,
      text: x,
      type: b ? "html_widget" : d.type || "text",
      ...(b != null && { html: b }),
      ...(y != null && { translation: y }),
      ...(v != null && { translationSegments: v }),
      ...(d.replyTo != null && { replyTo: d.replyTo }),
    };
    ((o = (d.text || "").trim()), g(N, c < s.length - 1));
  }
}
function to(t) {
  if (t == null) return "";
  if (typeof t == "string")
    return t
      .replace(/^\s*["'""'']+|["'""'']+\s*$/g, "")
      .replace(/\s*\|\|\s*|｜｜/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  if (typeof t == "number" || typeof t == "boolean") return String(t).trim();
  if (Array.isArray(t))
    return t
      .map((s) => to(s))
      .filter(Boolean)
      .join("、");
  if (typeof t == "object") {
    const s = t,
      n =
        s.label ??
        s.text ??
        s.tag ??
        s.word ??
        s.reason ??
        s.name ??
        s.zh ??
        s.cn ??
        (typeof s.value == "string" ? s.value : null);
    if (n != null && n !== s) {
      const a = to(n);
      if (a) return a;
    }
    try {
      return JSON.stringify(s);
    } catch {
      return "";
    }
  }
  return String(t).trim();
}
const Jl = "chat_app_contact_deleted",
  Iw = "chat_app_douyin_memories",
  Ew = "meet_app_settings",
  Lw = "meet_app_offline_summaries";
async function oF(t, s = {}) {
  const n = String(t);
  if (!n) return;
  const a = (s.deletedChatIds || []).map(String).filter(Boolean),
    r = [
      `phone_app_radio_history_${n}`,
      `phone_app_radio_leting_${n}`,
      `phone_app_diaries_${n}`,
      `phone_app_diary_leting_${n}`,
      `phone_app_wallet_${n}`,
      `phone_app_trace_history_${n}`,
      `phone_app_mood_${n}`,
      `phone_app_gallery_${n}`,
      `phone_app_dream_history_${n}`,
      `phone_app_browser_history_${n}`,
      `phone_app_browser_analysis_${n}`,
      `couple_memo_entries_${n}`,
      `couple_memo_ai_schedule_${n}`,
      `couple_memo_ai_done_${n}`,
      `couple_memo_ta_sync_to_chat_${n}`,
      `couple_memo_ai_comment_budget_${n}`,
      `couple_memo_ai_comment_pending_${n}`,
      `couple_memo_ai_comment_pending_last_updated_${n}`,
      `couple_memo_ai_comment_retry_limit_${n}`,
      `couple_memo_ta_view_min_interval_ms_${n}`,
      `couple_memo_ui_theme_id_${n}`,
      `couple_memo_ai_comment_inflight_${n}`,
      `couple_memo_ai_comment_usage_${n}`,
      `couple_memo_ai_comment_retry_${n}`,
      `couple_ledger_${n}`,
      `couple_ledger_categories_${n}`,
      `couple_ledger_challenge_${n}`,
      `couple_listen_together_history_${n}`,
      `couple_space_signals_dice_bluff_state_${n}`,
      `couple_space_signals_dice_bluff_archives_${n}`,
    ];
  for (const c of r)
    try {
      await be.remove(c);
    } catch {}
  let i = [];
  try {
    i = await be.getAllKeys();
  } catch {
    i = [];
  }
  const o = [
    `phone_app_trace_today_${n}_`,
    `phone_app_plan_${n}_`,
    `couple_memo_peek_cooldown_${n}_`,
  ];
  for (const c of i)
    if (typeof c == "string") {
      if (o.some((d) => c.startsWith(d))) {
        try {
          await be.remove(c);
        } catch {}
        continue;
      }
      if (
        c.endsWith(`_${n}`) &&
        (c.startsWith("phone_app_") || c.startsWith("couple_"))
      )
        try {
          await be.remove(c);
        } catch {}
    }
  try {
    const c = await be.get("phone_app_pinned_contact_ids", []);
    Array.isArray(c) &&
      c.some((d) => String(d) === n) &&
      (await be.set(
        "phone_app_pinned_contact_ids",
        c.filter((d) => String(d) !== n),
      ));
  } catch {}
  if (a.length > 0)
    try {
      const c = (await be.get(Iw)) || {};
      let d = !1;
      (a.forEach((u) => {
        c[u] && (delete c[u], (d = !0));
      }),
        d && (await be.set(Iw, c)));
    } catch {}
  try {
    const c = await be.get("meet_app_archives");
    if (Array.isArray(c)) {
      const d = c.filter((u) => String(u == null ? void 0 : u.contactId) !== n);
      d.length !== c.length && (await be.set("meet_app_archives", d));
    }
  } catch {}
  try {
    const c = await be.get("meet_app_active_contact_id");
    c != null &&
      String(c) === n &&
      (await be.set("meet_app_active_contact_id", null));
  } catch {}
  try {
    const c = await be.get("meet_app_stories");
    if (c && typeof c == "object" && c[n] !== void 0) {
      const d = { ...c };
      (delete d[n], await be.set("meet_app_stories", d));
    }
  } catch {}
  try {
    const c = await be.get(Ew);
    if (c && typeof c == "object" && c[n] !== void 0) {
      const d = { ...c };
      (delete d[n], await be.set(Ew, d));
    }
  } catch {}
  try {
    const c = await be.get(Lw);
    if (c && typeof c == "object" && c[n] !== void 0) {
      const d = { ...c };
      (delete d[n], await be.set(Lw, d));
    }
  } catch {}
}
const iS = { apiLogs: [], clearApiLogs: () => {}, addApiLog: () => {} },
  oS = l.createContext(iS),
  lF = ({ value: t, children: s }) =>
    e.jsx(oS.Provider, { value: t || iS, children: s }),
  cF = () => l.useContext(oS);
function fm(t) {
  return String(t || "")
    .trim()
    .toLowerCase();
}
function lS(t = {}) {
  const {
      contacts: s = [],
      posterContact: n = null,
      roleBoundUser: a = {},
      appUser: r = {},
      extraNames: i = [],
    } = t,
    o = new Set(),
    c = (d) => {
      const u = fm(d);
      u && o.add(u);
    };
  for (const d of s)
    (c(d == null ? void 0 : d.name),
      c(d == null ? void 0 : d.nickname),
      c(d == null ? void 0 : d.realName));
  (n && (c(n.name), c(n.nickname), c(n.realName)),
    c(a.realName),
    c(a.name),
    c(a.nickname),
    c(a.userName),
    c(r.realName),
    c(r.name),
    c(r.nickname),
    c("用户"));
  for (const d of i) c(d);
  return o;
}
const dF = [
  {
    settingTest:
      /((父亲|爸爸|老爸|爹|爸)([^。！？\n]{0,28})?(去世|死了|已故|离世|不在(了|人世)|走了|过世|身亡)|((去世|死了|已故|离世|走了|过世)([^。！？\n]{0,20})?(父亲|爸爸|老爸|爹|爸)))/,
    nameHas: ["爸爸", "父亲", "爸", "老爸", "爹", "老爹"],
  },
  {
    settingTest:
      /((母亲|妈妈|老妈|娘|妈)([^。！？\n]{0,28})?(去世|死了|已故|离世|不在(了|人世)|走了|过世|身亡)|((去世|死了|已故|离世|走了|过世)([^。！？\n]{0,20})?(母亲|妈妈|老妈|娘|妈)))/,
    nameHas: ["妈妈", "母亲", "妈", "老妈", "娘"],
  },
  {
    settingTest:
      /((爷爷|祖父|外公|姥爷)([^。！？\n]{0,28})?(去世|死了|已故|离世|不在(了|人世)|走了|过世|身亡))/,
    nameHas: ["爷爷", "祖父", "外公", "姥爷"],
  },
  {
    settingTest:
      /((奶奶|祖母|外婆|姥姥)([^。！？\n]{0,28})?(去世|死了|已故|离世|不在(了|人世)|走了|过世|身亡))/,
    nameHas: ["奶奶", "祖母", "外婆", "姥姥"],
  },
];
function cS(t, s) {
  const n = String(s || ""),
    a = String(t || "").trim();
  if (!n || !a) return !1;
  for (const { settingTest: r, nameHas: i } of dF)
    if (r.test(n)) {
      for (const o of i) if (a.includes(o)) return !0;
    }
  return !1;
}
function Km(t, s) {
  var i, o;
  const n = lS(s),
    a = [
      (i = s.posterContact) == null ? void 0 : i.setting,
      (o = s.roleBoundUser) == null ? void 0 : o.settings,
      s.extraSettingText,
    ].filter(Boolean).join(`
`),
    r = (c) =>
      c && c.user != null
        ? typeof c.user == "string"
          ? c.user
          : c.user.name || ""
        : "";
  return (Array.isArray(t) ? t : []).filter((c) => {
    const d = String(r(c) || "").trim();
    return !(!d || n.has(fm(d)) || cS(d, a));
  });
}
function od(t) {
  if (t == null) return new Date();
  if (typeof t == "number") return new Date(t);
  const s = new Date(t);
  return Number.isNaN(s.getTime()) ? new Date() : s;
}
function Xy(t) {
  const s = t instanceof Date ? t : od(t),
    n = s.getFullYear(),
    a = String(s.getMonth() + 1).padStart(2, "0"),
    r = String(s.getDate()).padStart(2, "0");
  return `${n}-${a}-${r}`;
}
function xv(t) {
  if (!t || t.isRecalled) return "";
  const s = t.type || "text";
  if (s === "text_image" && t.content)
    return `${t.text || ""} ${t.content}`.trim();
  if (s === "voice") return (t.text || "").trim() || "[语音消息]";
  if (s === "forward_chat_card") {
    const n = (t.messages || [])
      .map((a) => (a.text || "").trim())
      .filter(Boolean)
      .join(" ");
    return `${t.text || ""} ${n}`.trim();
  }
  return s === "image" ||
    (t.contentType && String(t.contentType).startsWith("image"))
    ? (t.text || "").trim() || "[图片]"
    : (t.text || "").trim();
}
function uF(t) {
  return t
    ? t.isRecalled
      ? String(t.text || "").trim()
      : (t.type || "text") === "meme"
        ? `${t.text || ""} ${t.meaning || ""}`.trim()
        : xv(t)
    : "";
}
function Dw(t, s = 140) {
  const n = xv(t);
  if (!n) return "[无可预览内容]";
  const a = n.replace(/\s+/g, " ").trim();
  return a.length > s ? `${a.slice(0, s)}…` : a;
}
function fF(t) {
  const s = new Map();
  for (const n of t || []) {
    if (!n || n.isRecalled) continue;
    const a = Xy(od(n.timestamp));
    s.has(a) || s.set(a, { dateKey: a, messages: [], count: 0 });
    const r = s.get(a);
    (r.messages.push(n), (r.count += 1));
  }
  for (const n of s.values())
    n.messages.sort((a, r) => od(r.timestamp) - od(a.timestamp));
  return s;
}
function mF(t, s) {
  const n = (s || "").trim().toLowerCase();
  return n
    ? (t || []).filter((a) =>
        !a || a.isRecalled ? !1 : xv(a).toLowerCase().includes(n),
      )
    : [];
}
function pF(t, s) {
  const a = (new Date(t, s, 1).getDay() + 6) % 7,
    r = new Date(t, s + 1, 0).getDate(),
    i = [];
  for (let o = 0; o < a; o++) i.push(null);
  for (let o = 1; o <= r; o++) i.push(o);
  return i;
}
function $w(t) {
  return od(t == null ? void 0 : t.timestamp).toLocaleString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    month: "numeric",
    day: "numeric",
  });
}
const Fw = 30;
function ul(t, s = Fw) {
  const n = Array.isArray(t) ? t : [],
    a = Math.max(1, Math.min(200, Number(s) > 0 ? Number(s) : Fw));
  return n.slice(-a).map(uF).filter(Boolean).join(`
`);
}
function xF(t, s) {
  if (!t.useKeywords) return !0;
  if (t.keywords && String(t.keywords).trim()) {
    const n = String(t.keywords)
      .split(/[,，、\n|]+/)
      .map((a) => a.trim())
      .filter((a) => a);
    return n.length === 0 ? !0 : n.some((a) => s.includes(a.toLowerCase()));
  }
  return !0;
}
function hv(t, s = "") {
  const n = String(s || "").toLowerCase(),
    r = (Array.isArray(t.entries) ? t.entries : []).filter((i) => xF(i, n));
  return { ...t, entries: r };
}
function hF(t, s, n = "") {
  const a = String(s ?? "");
  if (!a || !Array.isArray(t)) return [];
  const r = String(n || "");
  return t
    .filter(
      (i) =>
        Array.isArray(i.boundGroupChats) &&
        i.boundGroupChats.some((o) => String(o) === a),
    )
    .map((i) => hv(i, r))
    .filter((i) => (i.entries || []).length > 0);
}
async function dS(t) {
  const s = [
    ...new Set((Array.isArray(t) ? t : []).map(String).filter(Boolean)),
  ];
  if (!s.length) return [];
  let n = [];
  try {
    n = await Promise.race([
      be.get("world_books"),
      new Promise((r, i) =>
        setTimeout(() => i(new Error("world_books_timeout")), 5e3),
      ),
    ]);
  } catch {
    return [];
  }
  if (!Array.isArray(n)) return [];
  const a = [];
  for (const r of n) {
    if (
      !r ||
      !Array.isArray(r.boundContacts) ||
      !Array.isArray(r.entries) ||
      !s.some((d) => r.boundContacts.some((u) => String(u) === String(d)))
    )
      continue;
    const o = String(r.id ?? `book_${a.length}`),
      c = String(r.title || "世界观").trim() || "世界观";
    r.entries.forEach((d, u) => {
      if (!d) return;
      const f = `${o}::${u}`;
      a.push({
        key: f,
        bookId: o,
        bookTitle: c,
        entryIndex: u,
        title: String(d.title || "条目").trim() || "条目",
        content: typeof d.content == "string" ? d.content : "",
      });
    });
  }
  return a;
}
async function Oo(t, s = "") {
  if (t == null || t === "") return [];
  const n = String(t),
    a = String(s || "");
  let r = [];
  try {
    const i = await Promise.race([
      be.get("world_books"),
      new Promise((o, c) =>
        setTimeout(() => c(new Error("world_books_timeout")), 5e3),
      ),
    ]);
    i &&
      Array.isArray(i) &&
      (r = i
        .filter(
          (c) =>
            Array.isArray(c.boundContacts) &&
            c.boundContacts.some((d) => String(d) === n),
        )
        .map((c) => hv(c, a))
        .filter((c) => c.entries.length > 0));
  } catch {}
  return r;
}
const gF = "chat_app_npc_pool_v1",
  ah = new Map(),
  bF = /(代替|替代|替用户|冒充|假装|以.?用户.?名义|代表用户)/;
function yF(t) {
  return bF.test(String(t || ""));
}
function Xp(t) {
  t == null || t === "" ? ah.clear() : ah.delete(String(t));
}
async function uS(t, s) {
  const n = String(t ?? "").trim();
  if (!n || !s) return [];
  let a = null;
  try {
    a = await s.get(gF, {});
  } catch {
    a = null;
  }
  const r = a && typeof a == "object" ? a[n] : null;
  return Array.isArray(r) ? r : [];
}
async function rh(t, s) {
  const n = String(t ?? "").trim();
  if (!n || !s) return null;
  const a = ah.get(n),
    r = Date.now();
  if (a && r - a.ts < 3e3) return a.namesLowerSet;
  const i = await uS(n, s),
    o = new Set(
      i
        .filter(
          (c) => ((c == null ? void 0 : c.status) || "active") === "active",
        )
        .map((c) =>
          String((c == null ? void 0 : c.name) ?? "")
            .trim()
            .toLowerCase(),
        )
        .filter(Boolean),
    );
  return (ah.set(n, { ts: r, namesLowerSet: o }), o);
}
async function fS(t, s) {
  const n = await uS(t, s),
    a = new Map();
  for (const r of n) {
    const i = String((r == null ? void 0 : r.name) ?? "")
      .trim()
      .toLowerCase();
    i && a.set(i, (r == null ? void 0 : r.status) || "active");
  }
  return a;
}
async function gv(t, s, n) {
  if (!Array.isArray(n) || n.length === 0) return n;
  const a = await fS(t, s);
  return a.size
    ? n.filter((r) => {
        const i = String((r == null ? void 0 : r.user) ?? "")
          .trim()
          .toLowerCase();
        if (!i) return !1;
        const o = a.get(i);
        return o === void 0 ? !0 : o === "active";
      })
    : n;
}
const Fg = new Set(),
  vF = async ({
    momentId: t,
    posterContact: s,
    momentContent: n,
    options: a = {},
    deps: r,
  }) => {
    var E, S, j, T;
    const {
        roleBoundUser: i = {},
        recentMessages: o = [],
        traceToday: c = null,
        userName: d = "用户",
        returnOnly: u = !1,
      } = a,
      {
        contacts: f,
        user: p,
        apiConfig: m,
        addApiLog: h,
        setMoments: g,
        asyncStorage: x,
        MOMENT_ROLE_SETTING_MAX: y = 3200,
        MOMENT_USER_SETTING_MAX: v = 900,
      } = r || {},
      b = [...new Set((f || []).map((I) => I.nickname || I.name))].join("、"),
      N = 2 + Math.floor(Math.random() * 4),
      w =
        a.userDisplayForPrompt ||
        i.realName ||
        i.name ||
        (p == null ? void 0 : p.realName) ||
        (p == null ? void 0 : p.name) ||
        d ||
        "用户";
    let _ = "";
    o.length > 0 &&
      (_ = o.map(
        (I) =>
          `${I.sender === "me" ? d : s.name}: ${(I.text || "").slice(0, 120)}`,
      ).join(`
`));
    let A = "";
    if ((E = c == null ? void 0 : c.pages) != null && E.length) {
      const I = c.pages.flatMap((L) =>
        (L.traces || [])
          .map((B) =>
            `${B.time || ""} ${B.location || ""} ${B.activity || ""}`.trim(),
          )
          .filter(Boolean),
      );
      I.length &&
        (A = I.slice(-6).map((L) => `- ${L}`).join(`
`));
    }
    const k = s.nickname || s.name;
    if (!(m != null && m.key)) return u ? [] : void 0;
    const C = `npc_cmt_${Date.now()}`,
      M = Date.now();
    h({
      id: C,
      timestamp: M,
      type: "request",
      scene: "moment_npc_comments",
      contact: k,
      messages: [],
      status: "pending",
    });
    try {
      const F = (
        ((T =
          (j =
            (S = (
              await (
                await fetch(Qo(m.endpoint), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${m.key}`,
                  },
                  body: JSON.stringify({
                    model: m.model || "gpt-3.5-turbo",
                    messages: [
                      {
                        role: "user",
                        content: `【任务】为以下朋友圈生成 ${N} 条 NPC 评论。

【发帖者】${k}
【朋友圈内容】${n}

【评论者来源】评论者**只能**从下列原文里**明确出现过姓名或稳定称呼**的 NPC 里选取（同事、朋友、家人等）。若某类人设写明已去世、失联或不存在，则**禁止**再以该身份出现（例如人设写父亲已故，则不得以「爸爸」「父亲」等名义评论）。**禁止**凭空捏造原文未出现的人物姓名。
【角色人设（完整片段，用于判断生死与关系，勿跳过）】
${(s.setting || "无").slice(0, y)}
【绑定用户人设】${w} ${(i.settings || "无").slice(0, v)}
【最近聊天记录】${_ || "（无）"}
【今日行踪】${A || "（无）"}

【严禁代替用户】评论者**绝不能**是聊天对象（联系人）本人，也**绝不能**是真实用户「${w}」或其任何昵称；不得生成假装用户说话的评论。排除名字：${b || "（无）"}、${w}。

【严禁 OOC】评论者须仍在世、与当前剧情可接触；禁止已故人、禁止只存在于回忆且设定上无法互动者。

要求：评论简短自然、**严格符合该 NPC 在人设中的口吻与关系**。可吐槽/羡慕/敷衍/关心等。
【严禁】emoji。只返回 JSON 数组：[{"user":"NPC名字","text":"评论内容","persona":"简短人设"},...]`,
                      },
                    ],
                    temperature: 0.7,
                    max_tokens: 500,
                  }),
                })
              ).json()
            ).choices) == null
              ? void 0
              : S[0]) == null
            ? void 0
            : j.message) == null
          ? void 0
          : T.content) || ""
      )
        .trim()
        .match(/\[[\s\S]*\]/);
      if (!F) return u ? [] : void 0;
      const D = JSON.parse(F[0]);
      if (!Array.isArray(D) || D.length === 0) return u ? [] : void 0;
      const $ = Km(D, {
          contacts: f,
          posterContact: s,
          roleBoundUser: i,
          appUser: p,
        }),
        P = (s == null ? void 0 : s.npcPoolOnlyEnabled) === !0,
        z = P && s != null && s.id ? await rh(s.id, x) : null,
        O =
          P && z
            ? $.filter((V) =>
                z.has(
                  String((V == null ? void 0 : V.user) ?? "")
                    .trim()
                    .toLowerCase(),
                ),
              )
            : $;
      if (O.length === 0) return u ? [] : void 0;
      const Z = (V) =>
          (V || "")
            .replace(
              /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
              "",
            )
            .trim(),
        K = O.slice(0, N)
          .map((V) => {
            var X;
            const ne = V.text || "",
              le = Z(ne) || ne,
              ie = (
                typeof V.user == "string"
                  ? V.user
                  : ((X = V.user) == null ? void 0 : X.name) || ""
              ).trim();
            return ie
              ? {
                  id: Date.now() + Math.random(),
                  user: ie,
                  text: le,
                  content: le,
                  replyTo: null,
                  timestamp: Date.now() - Math.random() * 6e4,
                  npcPersona: V.persona || "",
                }
              : null;
          })
          .filter(Boolean);
      let q = K;
      return (
        s != null && s.id && x && (q = await gv(s.id, x, K)),
        u ||
          g((V) =>
            V.map((ne) =>
              ne.id === t
                ? { ...ne, comments: [...(ne.comments || []), ...q] }
                : ne,
            ),
          ),
        h({
          id: C,
          status: "success",
          duration: Date.now() - M,
          response: `生成 ${q.length} 条 NPC 评论`,
        }),
        u ? q : void 0
      );
    } catch (I) {
      return (
        h({
          id: C,
          status: "error",
          duration: Date.now() - M,
          error: (I == null ? void 0 : I.message) ?? String(I),
        }),
        u ? [] : void 0
      );
    }
  },
  wF = async ({
    roleContact: t,
    roleBoundUser: s,
    traceAndPlan: n,
    deps: a,
  }) => {
    var M, E, S, j, T;
    const {
        contacts: r,
        user: i,
        apiConfig: o,
        addApiLog: c,
        setMoments: d,
        MOMENT_ROLE_SETTING_MAX: u = 3200,
        MOMENT_USER_SETTING_MAX: f = 900,
        asyncStorage: p,
      } = a || {},
      m = (t.setting || "").slice(0, u),
      h = (s.settings || "").slice(0, f),
      g = t.nickname || t.name,
      x = s.realName || s.name || "用户",
      y = [...new Set((r || []).map((I) => I.nickname || I.name))].join("、");
    let v = "";
    if (
      (E =
        (M = n == null ? void 0 : n.traceToday) == null ? void 0 : M.pages) !=
        null &&
      E.length
    ) {
      const I = n.traceToday.pages.flatMap((L) =>
        (L.traces || [])
          .map((B) =>
            `${B.time || ""} ${B.location || ""} ${B.activity || ""}`.trim(),
          )
          .filter(Boolean),
      );
      I.length &&
        (v = I.slice(-4).map((L) => `- ${L}`).join(`
`));
    }
    const b = new Date().toLocaleString("zh-CN", { hour12: !1 }),
      N = 2 + Math.floor(Math.random() * 4),
      w = (t == null ? void 0 : t.npcPoolOnlyEnabled) === !0;
    let _ = "";
    if (w && p && t != null && t.id)
      try {
        const I = await rh(t.id, p),
          L = I ? Array.from(I).slice(0, 60).join("、") : "";
        L &&
          (_ = `
【NPC池限制】本次只能从该联系人 NPC 池中选择 NPC 名字：${L}。若池为空则返回 {"skip":true}。
`);
      } catch {}
    const A = `请完成两件事，只输出一个 JSON 对象，不要 markdown、不要其它文字。${_}

【任务一】从以下内容中选 1 个 NPC（角色「${g}」和用户「${x}」之外、且在人设/行踪里**有明文依据**的人），让该 NPC 发一条朋友圈。
【角色人设（用于判断 NPC 是否在世、有何亲友）】
${m}
【绑定用户人设】${x}：${h}
【今日行踪】${v || "（无）"}
要求：返回 {"npcName":"NPC名字","npcPersona":"简短人设","content":"朋友圈文案","imageDescs":null 或 ["描述1",...]}。NPC 不能是 ${g}、${x} 或联系人（${y}）；**禁止**捏造人设里不存在的人。文案有网感、严禁 emoji。当前时间：${b}。非中文母语用双语：母语\\n[TRANSLATION:中文]。

【任务二】为该条朋友圈生成 ${N} 条 NPC 评论。评论者须为**人设/行踪原文中出现、且仍在世可互动**的其他 NPC；**禁止**已故人或人设写明不存在的亲属冒泡评论；**禁止**${x} 或任何「代替用户发言」的评论。不能是发帖者本人、${g}、联系人。严禁 emoji。

【输出格式】只输出一个 JSON：
{"npcName":"...","npcPersona":"...","content":"...","imageDescs":null 或 [],"npcComments":[{"user":"NPC名","text":"评论内容","persona":"简短人设"},...]}`;
    if (!(o != null && o.key)) return;
    const k = `npc_moment_${Date.now()}`,
      C = Date.now();
    c({
      id: k,
      timestamp: C,
      type: "request",
      scene: "moment_npc_post_with_comments",
      contact: g,
      messages: [{ role: "user", content: A }],
      status: "pending",
    });
    try {
      const L = await (
          await fetch(Qo(o.endpoint), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${o.key}`,
            },
            body: JSON.stringify({
              model: o.model || "gpt-3.5-turbo",
              messages: [{ role: "user", content: A }],
              temperature: 0.7,
              max_tokens: 1e3,
            }),
          })
        ).json(),
        B = (
          ((T =
            (j = (S = L.choices) == null ? void 0 : S[0]) == null
              ? void 0
              : j.message) == null
            ? void 0
            : T.content) || ""
        ).trim();
      if (L.error)
        throw new Error(
          L.error.message || L.error.msg || JSON.stringify(L.error),
        );
      let F = null;
      const D = B.match(/```(?:json)?\s*([\s\S]*?)```/);
      if ((D && (F = D[1].trim()), !F)) {
        const Y = B.match(/\{[\s\S]*\}/);
        Y && (F = Y[0]);
      }
      if (!F) {
        c({
          id: k,
          status: "success",
          duration: Date.now() - C,
          response: "（未返回有效 JSON）",
        });
        return;
      }
      const $ = JSON.parse(F),
        P = ($.npcName || $.name || "").trim();
      if (w && p && t != null && t.id) {
        const Y = await rh(t.id, p);
        if (!Y || Y.size === 0 || !Y.has(String(P).trim().toLowerCase()))
          return;
      }
      const z = ($.content || "").trim();
      if (!P || !z) {
        c({
          id: k,
          status: "success",
          duration: Date.now() - C,
          response: "（未生成有效 NPC 内容）",
        });
        return;
      }
      let Z =
          ((Y) =>
            (Y || "")
              .replace(
                /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
                "",
              )
              .trim())(z) || z,
        K = null,
        q = Array.isArray($.imageDescs)
          ? $.imageDescs.filter(Boolean).slice(0, 9)
          : $.imageDesc
            ? [$.imageDesc.trim()]
            : [];
      const V = Z.match(/\n?\[TRANSLATION[：:]\s*([^\]]+)\]\s*$/);
      if (V) {
        const Y = V[1].trim();
        ((K = isAcceptableRealtimeTranslation(Y) ? Y : "（译文不可用）"),
          (Z = Z.replace(/\n?\[TRANSLATION[：:][^\]]+\]\s*$/, "").trim()));
      }
      const ne = /[（(]配图(\d*)[：:]\s*([^）)]+)[）)]/g;
      let le;
      const ie = [];
      for (; (le = ne.exec(Z)) !== null; )
        ie.push({ idx: le[1] ? parseInt(le[1], 10) : 1, desc: le[2].trim() });
      ie.length > 0 &&
        (ie.sort((Y, U) => Y.idx - U.idx),
        (q = ie.slice(0, 9).map((Y) => Y.desc)),
        (Z = Z.replace(/[（(]配图\d*[：:][^）)]+[）)]/g, "").trim()));
      const X = (Y) =>
          (Y || "")
            .replace(
              /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}]/gu,
              "",
            )
            .trim(),
        je = Array.isArray($.npcComments) ? $.npcComments : [],
        xe = (Y) =>
          Y && Y.user != null
            ? typeof Y.user == "string"
              ? Y.user
              : Y.user.name || ""
            : "",
        ye = {
          ...t,
          setting: [t.setting, s.settings].filter(Boolean).join(`
`),
        };
      let R = Km(
        je.map((Y) => ({ ...Y, user: xe(Y) })),
        {
          contacts: r,
          posterContact: ye,
          roleBoundUser: s,
          appUser: i,
          extraNames: [g, x, P],
        },
      )
        .slice(0, N)
        .map((Y) => {
          var pe;
          const U = X(Y.text || "") || Y.text || "",
            ce = (
              typeof Y.user == "string"
                ? Y.user
                : ((pe = Y.user) == null ? void 0 : pe.name) || ""
            ).trim();
          return ce
            ? {
                id: Date.now() + Math.random(),
                user: ce,
                text: U,
                content: U,
                replyTo: null,
                timestamp: Date.now() - Math.random() * 6e4,
                npcPersona: Y.persona || "",
              }
            : null;
        })
        .filter(Boolean);
      t != null && t.id && p && (R = await gv(t.id, p, R));
      const oe = [
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23ffe4ec"/><ellipse cx="50" cy="55" rx="22" ry="25" fill="%23ffb6c1"/><ellipse cx="38" cy="35" rx="8" ry="12" fill="%23ffb6c1"/><ellipse cx="62" cy="35" rx="8" ry="12" fill="%23ffb6c1"/><circle cx="42" cy="38" fill="%23333"/><circle cx="58" cy="38" fill="%23333"/><ellipse cx="50" cy="58" rx="4" ry="2" fill="%23966"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23e8f5e9"/><circle cx="50" cy="52" r="28" fill="%23c8e6c9"/><ellipse cx="35" cy="42" rx="10" ry="14" fill="%23c8e6c9"/><ellipse cx="65" cy="42" rx="10" ry="14" fill="%23c8e6c9"/><circle cx="42" cy="45" fill="%23333"/><circle cx="58" cy="45" fill="%23333"/><path d="M45 62 Q50 68 55 62" stroke="%23666" fill="none" stroke-width="1.5"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23fff3e0"/><circle cx="50" cy="54" r="26" fill="%23ffe0b2"/><ellipse cx="38" cy="38" rx="9" ry="12" fill="%23ffe0b2"/><ellipse cx="62" cy="38" rx="9" ry="12" fill="%23ffe0b2"/><circle cx="42" cy="42" fill="%23333"/><circle cx="58" cy="42" fill="%23333"/><ellipse cx="50" cy="60" rx="5" ry="3" fill="%23855"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23fce4ec"/><circle cx="50" cy="52" r="25" fill="%23f8bbd0"/><path d="M30 35 Q25 25 35 30 Q38 35 30 35" fill="%23f8bbd0"/><path d="M70 35 Q75 25 65 30 Q62 35 70 35" fill="%23f8bbd0"/><circle cx="40" cy="44" fill="%23333"/><circle cx="60" cy="44" fill="%23333"/><path d="M48 58 Q50 62 52 58" stroke="%23666" fill="none" stroke-width="1"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23e1f5fe"/><circle cx="50" cy="55" r="24" fill="%23b3e5fc"/><ellipse cx="38" cy="40" rx="8" ry="11" fill="%23b3e5fc"/><ellipse cx="62" cy="40" rx="8" ry="11" fill="%23b3e5fc"/><circle cx="42" cy="43" fill="%23333"/><circle cx="58" cy="43" fill="%23333"/><ellipse cx="50" cy="62" rx="4" ry="2" fill="%23666"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23f3e5f5"/><circle cx="50" cy="53" r="26" fill="%23e1bee7"/><ellipse cx="36" cy="38" rx="9" ry="13" fill="%23e1bee7"/><ellipse cx="64" cy="38" rx="9" ry="13" fill="%23e1bee7"/><circle cx="42" cy="42" fill="%23333"/><circle cx="58" cy="42" fill="%23333"/><path d="M45 60 Q50 65 55 60" stroke="%23755" fill="none" stroke-width="1.2"/></svg>',
        ],
        ee =
          "data:image/svg+xml," +
          encodeURIComponent(oe[Math.floor(Math.random() * oe.length)]),
        H = {
          id: Date.now(),
          user: { name: P, avatar: ee },
          content: Z,
          translation: K || void 0,
          image: null,
          imageDescriptions: q.length ? q : void 0,
          likes: 0,
          comments: R,
          timestamp: Date.now(),
          time: "刚刚",
          isLiked: !1,
          roleContactId: t.id,
          anchorContactId: t.id,
          momentOwnerType: "npc",
          momentOwnerNpcName: P,
          momentOwnerNpcPersona: $.npcPersona || "",
        };
      (d((Y) => [H, ...Y]),
        c({
          id: k,
          status: "success",
          duration: Date.now() - C,
          response: `NPC「${P}」发圈 + ${R.length} 条评论`,
        }));
    } catch (I) {
      c({
        id: k,
        status: "error",
        duration: Date.now() - C,
        error: (I == null ? void 0 : I.message) ?? String(I),
      });
    }
  },
  jF = async ({ deps: t }) => {
    var y, v, b;
    const {
        chatsRef: s,
        chats: n,
        contacts: a,
        moments: r,
        momentPostingInProgressRef: i,
        lastMomentProbabilityCheckRef: o,
        asyncStorage: c,
        toDateStr: d,
        TRACE_TODAY_KEY: u,
        PLAN_KEY: f,
        getRoleBoundUser: p,
        aiPostMoment: m,
      } = t || {},
      h = (s == null ? void 0 : s.current) ?? n;
    if (
      !(h || []).some((N) => {
        var w;
        return (w = N.settings) == null ? void 0 : w.autoMomentEnabled;
      })
    )
      return;
    const x = i.current;
    for (const N of h) {
      if (!((y = N.settings) != null && y.autoMomentEnabled)) continue;
      const w = (a || []).find((I) => I.id === N.contactId);
      if (!w || x.has(w.id)) continue;
      const A = (r || []).filter((I) => {
          var L;
          return (
            ((L = I.user) == null ? void 0 : L.name) === (w.nickname || w.name)
          );
        })[0],
        k = (A == null ? void 0 : A.timestamp) || 0,
        C = k ? (Date.now() - k) / 36e5 : 999;
      if (C < 6) continue;
      const M = Date.now(),
        E = o.current[w.id] ?? 0,
        S = 30 * 60 * 1e3;
      if (M - E < S || ((o.current[w.id] = M), Math.random() >= 0.15)) continue;
      const T = C >= 24 ? `${Math.floor(C / 24)}天` : `${Math.floor(C)}小时`;
      x.add(w.id);
      try {
        const I = new Date(),
          L = d(I),
          B = d(new Date(I.getTime() - 864e5)),
          F = d(new Date(I.getTime() + 864e5)),
          [D, $, P, z] = await Promise.all([
            c.get(u(w.id, L), null),
            c.get(u(w.id, B), null),
            c.get(f(w.id, L), null),
            c.get(f(w.id, F), null),
          ]);
        let O = null;
        if ((v = D == null ? void 0 : D.pages) != null && v.length) {
          const K = D.pages[D.pages.length - 1];
          (b = K == null ? void 0 : K.traces) != null &&
            b.length &&
            (O = K.traces[K.traces.length - 1]);
        }
        const Z = (N.messages || []).slice(-15);
        await m(w, Z, {
          roleBoundUser: (p == null ? void 0 : p(w)) ?? {},
          traceAndPlanContext: {
            traceToday: D,
            traceYesterday: $,
            planToday: P,
            planTomorrow: z,
            lastTraceEntry: O,
          },
          timeSinceLastMoment: T,
        });
      } catch {
      } finally {
        x.delete(w.id);
      }
    }
  },
  NF = async ({
    moment: t,
    type: s,
    sourceUser: n,
    commentContent: a = null,
    replyToUser: r = null,
    deps: i,
  }) => {
    var xe, ye, R, oe, ee, H, Y, U, ce, pe, se, Te;
    const {
        contacts: o,
        user: c,
        chatsRef: d,
        chats: u,
        getEffectiveUser: f,
        getRoleBoundUser: p,
        callApi: m,
        setMoments: h,
        asyncStorage: g,
        toDateStr: x,
        TRACE_TODAY_KEY: y,
        PLAN_KEY: v,
        apiConfig: b,
        addApiLog: N,
      } = i || {},
      w = Math.random() * 5e3 + 2e3;
    if ((await new Promise((ke) => setTimeout(ke, w)), s === "new_post")) {
      const ke = String((t == null ? void 0 : t.id) ?? "");
      if (ke) {
        if (Fg.has(ke)) return;
        Fg.add(ke);
      }
      const W = Array.isArray(o) ? o : [],
        ue =
          (t == null ? void 0 : t.visibilityMode) === "selected"
            ? "selected"
            : "public",
        re =
          ue === "selected"
            ? new Set(
                ((t == null ? void 0 : t.visibleToContactIds) || [])
                  .map((Ae) => String(Ae ?? "").trim())
                  .filter(Boolean),
              )
            : null,
        he =
          ue === "selected"
            ? W.filter((Ae) =>
                re.has(String((Ae == null ? void 0 : Ae.id) ?? "").trim()),
              )
            : W;
      if ((ue === "selected" && he.length === 0) || !(b != null && b.key))
        return;
      const ge = (Ae) => String(Ae ?? "").trim(),
        J = ge(
          (n == null ? void 0 : n.name) ||
            (c == null ? void 0 : c.name) ||
            "用户",
        ),
        G = ge(t == null ? void 0 : t.content) || "[图片]",
        we = he.map((Ae) => {
          const te = (f == null ? void 0 : f(Ae)) || c || {},
            Se = (p == null ? void 0 : p(Ae)) ?? {};
          return {
            contactId: String(Ae.id),
            contactName: ge(Ae.remark || Ae.nickname || Ae.name),
            roleSetting: ge(Ae.setting || ""),
            boundUserName: ge(
              Se.realName ||
                Se.name ||
                (te == null ? void 0 : te.realName) ||
                (te == null ? void 0 : te.name) ||
                "用户",
            ),
            boundUserSetting: ge(Se.settings || ""),
          };
        }),
        Q = `moment_interaction_batch_${Date.now()}`,
        ve = Date.now(),
        Ve = `你在模拟一个微信朋友圈的“看见后反应”。

【朋友圈发布者】${J}
【朋友圈内容】${G}
【是否包含图片】${(t != null && t.image) || (Array.isArray(t == null ? void 0 : t.images) && t.images.length > 0) ? "是" : "否"}

【任务】为下列“可见联系人列表”生成朋友圈互动：点赞（like）与评论（comment）。
要求：
1) 评论要短、自然、像真人，严禁 emoji。
2) 每个联系人的评论必须与其【角色人设】和【绑定用户人设】一致；不要胡编朋友圈内容里没有的具体事实。
3) **每个联系人必须评论**：comment 不能为空，不许输出 "-"、"null"、"无"、"不评论" 等占位。
4) **不要输出 JSON**、不要输出 markdown、不要输出代码块（三个反引号）、不要输出反引号。
5) 只按下面的“逐行协议”输出，每个联系人一行，顺序随意，但必须覆盖所有 contactId：
格式：contactId<TAB>like<TAB>comment
其中 like 只能是 0 或 1；comment 为纯文本（不许换行、不许包含 TAB）。
示例（仅示例，不要照抄）：
123	1	好会生活
456	0	今天也要开心点

【可见联系人列表】（JSON，仅供你参考，不要原样复述）：
${JSON.stringify(
  we.map((Ae) => ({
    contactId: Ae.contactId,
    contactName: Ae.contactName,
    boundUserName: Ae.boundUserName,
    roleSetting: Ae.roleSetting || "",
    boundUserSetting: Ae.boundUserSetting || "",
  })),
  null,
  2,
)}`;
      try {
        const Ae = (fe) => {
            let He = String(fe || "").trim();
            if (!He) return "";
            const Ie = He.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
            return (
              Ie && (He = String(Ie[1] || "").trim()),
              (He = He.replace(/^\s*```(?:json)?\s*/i, "").trim()),
              (He = He.replace(/\s*```\s*$/i, "").trim()),
              (He = He.replace(/^\s*`+\s*/g, "").trim()),
              He
            );
          },
          te = (fe) => {
            const Ie = Ae(fe)
                .split(/\r?\n/g)
                .map((De) => De.trim())
                .filter(Boolean)
                .filter((De) => !/^```/.test(De)),
              Ce = (De) => {
                const at = String(De ?? "").trim();
                return !at ||
                  at === "-" ||
                  /^null$/i.test(at) ||
                  /^none$/i.test(at) ||
                  /^(不评论|不想评论|无|没有|略|skip)$/i.test(at)
                  ? ""
                  : at.replace(/\s+/g, " ").trim();
              },
              Re = [];
            for (const De of Ie) {
              if (De.includes("	")) {
                const Oe = De.split("	");
                if (Oe.length >= 3) {
                  const Qe = String(Oe[0] || "").trim(),
                    Ye = String(Oe[1] || "")
                      .trim()
                      .toLowerCase(),
                    Ze = Oe.slice(2).join("	");
                  if (!Qe) continue;
                  const Ue = Ye === "1" || Ye === "true";
                  Re.push({ contactId: Qe, like: Ue, comment: Ce(Ze) });
                  continue;
                }
              }
              const at = De.match(/^(\S+)\s+([01]|true|false)\s+(.*)$/i);
              if (at) {
                const Oe = String(at[1] || "").trim(),
                  Qe = String(at[2] || "")
                    .trim()
                    .toLowerCase(),
                  Ye = String(at[3] || "").trim();
                if (!Oe) continue;
                const Ze = Qe === "1" || Qe === "true";
                Re.push({ contactId: Oe, like: Ze, comment: Ce(Ye) });
                continue;
              }
              const ft = De.split("|")
                .map((Oe) => Oe.trim())
                .filter(Boolean);
              if (ft.length >= 3) {
                const Oe = String(ft[0] || "").trim(),
                  Qe = String(ft[1] || "")
                    .trim()
                    .toLowerCase(),
                  Ye = ft.slice(2).join(" | ");
                if (!Oe) continue;
                const Ze =
                  Qe === "1" || Qe === "true" || Qe === "like" || Qe === "yes";
                Re.push({ contactId: Oe, like: Ze, comment: Ce(Ye) });
                continue;
              }
              const vt = De.split(",")
                .map((Oe) => Oe.trim())
                .filter(Boolean);
              if (vt.length >= 3) {
                const Oe = String(vt[0] || "").trim(),
                  Qe = String(vt[1] || "")
                    .trim()
                    .toLowerCase(),
                  Ye = vt.slice(2).join(", ");
                if (!Oe) continue;
                const Ze = Qe === "1" || Qe === "true";
                Re.push({ contactId: Oe, like: Ze, comment: Ce(Ye) });
              }
            }
            return Re;
          },
          Se = Math.min(2200, Math.max(500, 140 + we.length * 60)),
          Fe = async (fe) =>
            await cr(
              b,
              {
                messages: [{ role: "user", content: fe }],
                temperature: 0.6,
                max_tokens: Se,
              },
              {
                timeoutMs: Cl,
                addApiLog: typeof N == "function" ? N : void 0,
                logScene: "moment_interaction_batch",
                logContactName: `batch(${we.length})`,
                logId: Q,
              },
            );
        let $e = "";
        try {
          if (!(we.length >= 2)) $e = await Fe(Ve);
          else {
            const He = we.map((Ce) => ({
                ...Ce,
                roleSetting: String(Ce.roleSetting || "").slice(0, 900),
                boundUserSetting: String(Ce.boundUserSetting || "").slice(
                  0,
                  360,
                ),
              })),
              Ie = Ve.replace(
                /\[\s*{\s*"contactId"[\s\S]*$/m,
                `【可见联系人列表】（JSON，仅供你参考，不要原样复述）：
${JSON.stringify(
  He.map((Ce) => ({
    contactId: Ce.contactId,
    contactName: Ce.contactName,
    boundUserName: Ce.boundUserName,
    roleSetting: Ce.roleSetting || "",
    boundUserSetting: Ce.boundUserSetting || "",
  })),
  null,
  2,
)}`,
              );
            $e = await Fe(Ie);
          }
        } catch (fe) {
          if (
            String((fe == null ? void 0 : fe.message) || "").includes(
              "EMPTY_BODY",
            ) &&
            we.length >= 2
          ) {
            const He = we.map((Ce) => ({
                ...Ce,
                roleSetting: String(Ce.roleSetting || "").slice(0, 1200),
                boundUserSetting: String(Ce.boundUserSetting || "").slice(
                  0,
                  500,
                ),
              })),
              Ie = Ve.replace(
                /\[\s*{\s*"contactId"[\s\S]*$/m,
                `【可见联系人列表】（JSON，仅供你参考，不要原样复述）：
${JSON.stringify(
  He.map((Ce) => ({
    contactId: Ce.contactId,
    contactName: Ce.contactName,
    boundUserName: Ce.boundUserName,
    roleSetting: Ce.roleSetting || "",
    boundUserSetting: Ce.boundUserSetting || "",
  })),
  null,
  2,
)}`,
              );
            $e = await Fe(Ie);
          } else throw fe;
        }
        const tt = te($e),
          Xe = new Map(we.map((fe) => [String(fe.contactId), fe])),
          ht = new Map();
        for (const fe of tt) {
          const He = String((fe == null ? void 0 : fe.contactId) ?? "").trim();
          He && ht.set(He, fe);
        }
        const Pe = [...Xe.keys()].filter((fe) => !ht.has(fe));
        if (Pe.length > 0 && ht.size > 0) {
          const fe = Pe.map((Ie) => {
              const Ce = Xe.get(Ie);
              return {
                contactId: Ce.contactId,
                contactName: Ce.contactName,
                boundUserName: Ce.boundUserName,
                roleSetting: Ce.roleSetting,
                boundUserSetting: Ce.boundUserSetting,
              };
            }),
            He = Ve.replace(
              /格式：contactId<TAB>like<TAB>comment[\s\S]*?【可见联系人列表】/m,
              `请只补全以下缺失联系人（只输出这些 contactId 的行，其他不要输出）。
要求：每个联系人必须评论（comment 不能为空）。
格式：contactId<TAB>like<TAB>comment

【可见联系人列表】`,
            ).replace(
              /\[\s*{\s*"contactId"[\s\S]*$/m,
              `【可见联系人列表】（JSON，仅供你参考，不要原样复述）：
${JSON.stringify(
  fe.map((Ie) => ({
    contactId: Ie.contactId,
    contactName: Ie.contactName,
    boundUserName: Ie.boundUserName,
    roleSetting: Ie.roleSetting || "",
    boundUserSetting: Ie.boundUserSetting || "",
  })),
  null,
  2,
)}`,
            );
          try {
            const Ie = await Fe(He),
              Ce = te(Ie);
            for (const Re of Ce) {
              const De = String(
                (Re == null ? void 0 : Re.contactId) ?? "",
              ).trim();
              De && Xe.has(De) && !ht.has(De) && ht.set(De, Re);
            }
          } catch {}
        }
        let ut = 0;
        const _t = [],
          Ee = (fe) => {
            const He = String(fe || "").trim();
            return He ? `收到，${He}也来围观一下` : "收到，也来围观一下";
          };
        for (const fe of Xe.keys()) {
          const He = ht.get(fe) || { contactId: fe, like: !1, comment: null };
          if (!Xe.has(fe)) continue;
          const Ie = (He == null ? void 0 : He.like) === !0,
            Ce = He == null ? void 0 : He.comment,
            Re = typeof Ce == "string" ? Ce.trim() : "";
          Ie && (ut += 1);
          const De = he.find((vt) => String(vt.id) === fe),
            at = (
              (De == null ? void 0 : De.nickname) ||
              (De == null ? void 0 : De.name) ||
              ((xe = Xe.get(fe)) == null ? void 0 : xe.contactName) ||
              "好友"
            ).trim(),
            ft = Re || Ee(at);
          _t.push({
            id: Date.now() + Math.random(),
            user: at,
            text: ft,
            content: ft,
            replyTo: null,
            timestamp: Date.now(),
          });
        }
        ((ut > 0 || _t.length > 0) &&
          h((fe) =>
            fe.map((He) => {
              if (He.id !== t.id) return He;
              const Ie = (He.likes || 0) + ut,
                Ce = [...(He.comments || []), ..._t];
              return { ...He, likes: Ie, comments: Ce };
            }),
          ),
          typeof N == "function" &&
            N({
              id: Q,
              status: "success",
              duration: Date.now() - ve,
              error: "",
              response: `batch ok: likes+${ut}, comments+${_t.length}
raw_len=${Ae($e).length}
raw=${(Ae($e) || "（空）").slice(0, 600)}`,
            }));
        return;
      } catch (Ae) {
        typeof N == "function" &&
          N({
            id: Q,
            status: "error",
            duration: Date.now() - ve,
            error: (Ae == null ? void 0 : Ae.message) ?? String(Ae),
          });
        return;
      } finally {
        ke && Fg.delete(ke);
      }
    }
    if (s !== "new_comment") return;
    let _ = null,
      A = !1,
      k = null,
      C = "",
      M = null;
    const E = ((ye = t.user) == null ? void 0 : ye.name) || "";
    let S = null;
    (t == null ? void 0 : t.anchorContactId) != null &&
      String(t.anchorContactId).trim() !== "" &&
      (S = o.find((ke) => String(ke.id) === String(t.anchorContactId)));
    const j = o.find(
      (ke) =>
        [ke.name, ke.nickname].filter(Boolean).includes(E) ||
        (ke.nickname || ke.name) === E,
    );
    let T = null;
    if (
      (r &&
        (T = o.find(
          (ke) =>
            [ke.name, ke.nickname].filter(Boolean).includes(r) ||
            (ke.nickname || ke.name) === r,
        )),
      !S && t.roleContactId && (S = o.find((ke) => ke.id === t.roleContactId)),
      !S && !j && !T)
    ) {
      const W = (((d == null ? void 0 : d.current) ?? u) || []).find((ue) => {
        var re;
        return (re = ue.settings) == null ? void 0 : re.autoMomentEnabled;
      });
      W != null && W.contactId && (S = o.find((ue) => ue.id === W.contactId));
    }
    const I = (ke) =>
      typeof (ke && ke.user) == "string"
        ? ke.user
        : (ke && ke.user && ke.user.name) || "";
    if (r != null && r !== "") {
      if (T) _ = T;
      else if (S && r !== (n && n.name)) {
        ((A = !0), (k = r));
        const ke = (t.comments || []).find((W) => I(W) === r);
        ((C = (ke == null ? void 0 : ke.npcPersona) || ""),
          (M = ((R = t.user) == null ? void 0 : R.avatar) || null),
          (_ = {
            ...S,
            id: S.id,
            name: k,
            nickname: k,
            setting: C || "角色人设世界中出现的 NPC",
            avatar: null,
          }));
      }
    } else
      j
        ? (_ = j)
        : S &&
          ((A = !0),
          (k = ((oe = t.user) == null ? void 0 : oe.name) ?? ""),
          (C = t.momentOwnerNpcPersona || ""),
          (M = ((ee = t.user) == null ? void 0 : ee.avatar) || null),
          (_ = {
            ...S,
            id: S.id,
            name: k,
            nickname: k,
            setting: C || "角色人设世界中出现的 NPC",
            avatar: M || S.avatar,
          }));
    if (!_) return;
    const L = f(_),
      B = n.name === c.name ? L.name : n.name,
      F = (p == null ? void 0 : p(_)) ?? {},
      D =
        F.realName ||
        F.name ||
        (L == null ? void 0 : L.realName) ||
        (L == null ? void 0 : L.name) ||
        "用户",
      $ = new Date(),
      P = x($),
      z = x(new Date($.getTime() - 864e5)),
      O = x(new Date($.getTime() + 864e5));
    let Z = "";
    try {
      const [ke, W, ue, re] = await Promise.all([
          g.get(y(_.id, P), null),
          g.get(y(_.id, z), null),
          g.get(v(_.id, P), null),
          g.get(v(_.id, O), null),
        ]),
        he = [];
      if (
        (he.push("【角色人设】" + (_.setting || "无")),
        he.push(
          "【用户/绑定人设】" + D + (F.settings ? "：" + F.settings : ""),
        ),
        (H = ke == null ? void 0 : ke.pages) != null && H.length)
      ) {
        const Q = ke.pages.flatMap((ve) =>
          (ve.traces || [])
            .map((Ve) =>
              `${Ve.time || ""} ${Ve.location || ""} ${Ve.activity || ""}`.trim(),
            )
            .filter(Boolean),
        );
        Q.length &&
          he.push(
            "【今日行踪】" +
              Q.slice(-6).map((ve) => `- ${ve}`).join(`
`),
          );
      }
      ((Y = ue == null ? void 0 : ue.items) != null &&
        Y.length &&
        he.push(
          "【今日计划】" +
            ue.items.map((Q) => `- ${Q.time || ""} ${Q.text || ""}`.trim())
              .join(`
`),
        ),
        (U = re == null ? void 0 : re.items) != null &&
          U.length &&
          he.push(
            "【明日计划】" +
              re.items.map((Q) => `- ${Q.time || ""} ${Q.text || ""}`.trim())
                .join(`
`),
          ));
      let ge = null;
      if ((ce = ke == null ? void 0 : ke.pages) != null && ce.length) {
        const Q = ke.pages[ke.pages.length - 1];
        (pe = Q == null ? void 0 : Q.traces) != null &&
          pe.length &&
          (ge = Q.traces[Q.traces.length - 1]);
      }
      ge &&
        he.push(
          `【当前最后一条行踪】（辅助知道自己在干嘛，勿每次原地打转） ${ge.time || ""} ${ge.location || ""} ${ge.activity || ""}`,
        );
      const J = t.timestamp || 0,
        G = J ? Math.floor((Date.now() - J) / 6e4) : 0,
        we =
          G < 60
            ? `${G}分钟`
            : G < 1440
              ? `${Math.floor(G / 60)}小时`
              : `${Math.floor(G / 1440)}天`;
      (he.push(
        "【时间流速】当前时间：" +
          $.toLocaleString("zh-CN", { hour12: !1 }) +
          "；这条朋友圈发布于约 " +
          we +
          " 前。",
      ),
        (Z =
          `
` +
          he.join(`
`) +
          `
`));
    } catch {}
    const K = ((d == null ? void 0 : d.current) ?? u).find(
      (ke) => ke.contactId === _.id,
    );
    let q = "";
    (se = K == null ? void 0 : K.messages) != null &&
      se.length &&
      (q =
        `
【最近聊天记录】（参考用，不完全依赖；角色有自己的生活）