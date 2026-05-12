.message-card-moment-film {
  background-color: var(--card-moment-film-bg);
  border-radius: var(--card-moment-radius);
}
.message-card-moment-film-top,
.message-card-moment-film-bottom {
  background-color: var(--card-moment-film-top-bottom-bg);
}
.message-card-moment-film-hole {
  width: 6px;
  height: 6px;
  border-radius: 1px;
  background-color: var(--card-moment-film-hole-bg);
}
.message-card-moment-film-body {
  background-color: var(--card-moment-film-bg);
}
.message-card-moment-film-image {
  border: 2px solid var(--card-moment-film-image-border);
}
.message-card-moment-film-badge {
  background-color: var(--card-moment-film-badge-bg);
  color: var(--card-moment-film-badge-text);
  font-size: 6px;
}
.message-card-moment-film-caption {
  color: var(--card-moment-film-caption);
}
.message-card-moment-film-footer {
  opacity: var(--card-moment-film-footer-opacity);
}
.message-card-moment-film-avatar {
  border: 1px solid var(--card-moment-film-avatar-border);
}
.message-card-moment-film-username {
  color: var(--card-moment-film-username);
}

/* ----- 日记明信片形态 ----- */
.message-card-moment-postcard {
  background-color: var(--card-moment-bg);
  border-radius: var(--card-moment-radius);
  background-image: linear-gradient(var(--card-moment-line) 1px, transparent 1px);
  background-size: 100% 20px;
}
.message-card-moment-stamp {
  border-color: var(--card-moment-stamp-border);
  color: var(--card-moment-stamp-color);
}
.message-card-moment-header {
  border-bottom-color: var(--card-moment-header-border);
}
.message-card-moment-header-title {
  color: var(--card-moment-header-title);
}
.message-card-moment-header-avatar {
  border: 1px solid var(--card-moment-header-avatar-border);
}
.message-card-moment-content-text {
  color: var(--card-moment-content-text);
}
.message-card-moment-footer-from {
  color: var(--card-moment-footer-from);
}
.message-card-moment-footer-name {
  color: var(--card-moment-footer-name);
}
.message-card-moment-footer-date {
  color: var(--card-moment-footer-date);
}

/* =========================================
   14. 一起听邀请卡 / 状态卡（可选定制）
   类名：.invite-card .invite-card-cover .invite-card-title .invite-card-actions
   .invite-card-btn-accept .invite-card-btn-reject .status-card .status-card-text
   ========================================= */

/* =========================================
   15. 聊天设置页（与聊天窗口同一套自定义 CSS）
   类名：.chat-settings-modal .chat-settings-header .chat-settings-body
   .chat-settings-content .chat-settings-left-divider
   ========================================= */
.chat-settings-modal {
  background: var(--chat-bg-paper, #fdfbf7);
}
.chat-settings-header {
  border-bottom-color: rgba(20, 19, 18, 0.12);
}
.chat-settings-body {
  background: transparent;
}
.chat-settings-content {
  color: var(--chat-primary, #5d4037);
}
.chat-settings-left-divider {
  background: var(--chat-primary, #5d4037);
  width: 2px;
}

/* "正在输入"提示 */
.typing-indicator {
  background-color: white;
  border: 2px solid #efebe9;
  border-radius: 20px;
  border-bottom-left-radius: 2px;
  padding: 10px 16px;
  display: flex;
  gap: 4px;
  box-shadow: 3px 3px 0px rgba(0,0,0,0.05);
  transform: rotate(0.5deg);
}
.typing-indicator .dot {
  width: 6px;
  height: 6px;
  background-color: #d7ccc8;
  border-radius: 50%;
  animation: typing-bounce 1.2s infinite ease-in-out;
}
.typing-indicator .dot:nth-child(2) {
  animation-delay: -1.0s;
}
.typing-indicator .dot:nth-child(3) {
  animation-delay: -0.8s;
}
@keyframes typing-bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
}
`,
  Dg = ["apricot", "monochrome", "ocean", "mint"];
function m$(t) {
  return wc;
}
const p$ = ({ notification: t, onClose: s, onClick: n }) => {
    var p, m;
    const [a, r] = l.useState(!1),
      [i, o] = l.useState(null);
    if (
      (l.useEffect(() => {
        if (t)
          (o(t),
            navigator.vibrate && navigator.vibrate(50),
            requestAnimationFrame(() => r(!0)));
        else {
          r(!1);
          const h = setTimeout(() => o(null), 500);
          return () => clearTimeout(h);
        }
      }, [t]),
      !i)
    )
      return null;
    const c = i.type === "trace_updated",
      d = c ? i.contactAvatar : (p = i.user) == null ? void 0 : p.avatar,
      u = c ? i.contactName : (m = i.user) == null ? void 0 : m.name,
      f = c ? "今日行踪已更新，点击查看" : i.message;
    return e.jsx("div", {
      className: `absolute top-16 left-4 right-4 z-[999] transition-all duration-500 transform ${a ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`,
      children: e.jsxs("div", {
        className:
          "bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-3 flex items-center gap-3 border border-gray-200/50 cursor-pointer",
        onClick: () => n(i),
        children: [
          e.jsx("img", {
            src: d,
            alt: u,
            className: "w-10 h-10 rounded-full object-cover",
            loading: "lazy",
          }),
          e.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [
              e.jsxs("div", {
                className: "flex justify-between items-center",
                children: [
                  e.jsx("h4", {
                    className: "font-bold text-sm text-gray-900",
                    children: u,
                  }),
                  e.jsx("span", {
                    className: "text-[10px] text-gray-400",
                    children: "刚刚",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-xs text-gray-600 truncate",
                children: f,
              }),
            ],
          }),
          e.jsx("button", {
            onClick: (h) => {
              (h.stopPropagation(), s());
            },
            className: "p-1 text-gray-400 hover:text-gray-600",
            children: e.jsx(Ts, { size: 16 }),
          }),
        ],
      }),
    });
  },
  io = "builtin_help_tutorial_ai";
function Si(t) {
  return t ? t.id === io || t.isBuiltinHelpAssistant === !0 : !1;
}
function mv() {
  return {
    id: io,
    isBuiltinHelpAssistant: !0,
    name: "啾啾小助手",
    nickname: "啾啾小助手",
    remark: "",
    group: "默认分组",
    gender: "unknown",
    avatar: "/jujoo.png",
    signature: "内置教程问答，点「接收」调用你在设置里配置的 API。",
    socialId: "help_tutorial_bot",
    douyinId: "dy_builtin_help_assistant",
    phone: "10000000000",
    region: "内置",
    decoration: { color: "#FFF1F7", text: "帮助", textColor: "#6A5460" },
    openingLines: [
      "喵～您好呀！欢迎使用 jujoo，我是啾啾小助手。",
      "在您开始提问前，请先确认“设置”app里已经配置好 API。",
      "如果您不会设置，也可以先去打开“使用说明”，看看设置板块怎么填。",
      "之后如果还是有不懂的，欢迎把问题发到售后群，我们会来帮您。",
      "想把教程检索范围调得更贴合？点右上角的拍立得头像，去聊天设置里改一改就好。",
      "温馨提醒：在这里提问会消耗 API；如果您只想自己找答案，可以去“使用说明”里搜索文字教程和视频教程。",
    ],
    setting:
      "你是一只可爱热心的小猫助手，名字叫啾啾。说话简洁、好懂，用「您」称呼用户；只解答本机内置功能的使用帮助，不扮演情侣、不聊无关私事。",
  };
}
function x$(t) {
  if (!(!t || typeof sessionStorage > "u"))
    try {
      const s = sessionStorage.getItem(t);
      return s == null ? void 0 : JSON.parse(s);
    } catch {
      return;
    }
}
function h$(t, s) {
  if (!(!t || typeof sessionStorage > "u"))
    try {
      sessionStorage.setItem(t, JSON.stringify(s));
    } catch {}
}
const Yn = (t, s, n = {}) => {
  const a = (n == null ? void 0 : n.sessionStorageMirrorKey) ?? null,
    [r, i] = l.useState(() => {
      if (a) {
        const u = x$(a);
        if (u != null) return u;
      }
      return s;
    }),
    [o, c] = l.useState(!1),
    d = l.useRef(!1);
  return (
    l.useEffect(
      () => (
        (d.current = !0),
        (async () => {
          try {
            const f = await be.get(t);
            d.current && (f != null && i(f), c(!0));
          } catch {
            d.current && c(!0);
          }
        })(),
        () => {
          d.current = !1;
        }
      ),
      [t],
    ),
    l.useEffect(() => {
      o && (be.set(t, r), a && h$(a, r));
    }, [t, r, o, a]),
    [r, i, o]
  );
};
function g$() {
  const {
    blockedPhoneCallPopup: t,
    contacts: s,
    dismissBlockedPhoneCallPopup: n,
    rejectBlockedPhoneCallInvite: a,
    finalizePhoneInviteAcceptBusyOthers: r,
    setPhoneCallState: i,
    scheduleBlockedInvitePhoneFollowUps: o,
    scheduleProactiveVoiceInvitePickup: c,
    onInboundVoiceCallConnected: d,
    unlockAudio: u,
    startBlockedInviteRing: f,
    stopBlockedInviteRing: p,
  } = vn();
  if (
    (l.useEffect(() => {
      if (t != null && t.id)
        return (
          f(),
          () => {
            p();
          }
        );
    }, [t == null ? void 0 : t.id, f, p]),
    !t)
  )
    return null;
  const m = (s || []).find((y) => y.id === t.contactId),
    h =
      (m == null ? void 0 : m.remark) ||
      (m == null ? void 0 : m.nickname) ||
      (m == null ? void 0 : m.name) ||
      (t.contactId, "未知角色"),
    g = m == null ? void 0 : m.avatar,
    x = t.fromBlocked !== !1;
  return _i.createPortal(
    e.jsxs("div", {
      className:
        "fixed inset-0 z-[2147483000] flex flex-col bg-gradient-to-b from-[#07070c] via-[#10121a] to-[#030304] text-white",
      style: { pointerEvents: "auto" },
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "语音来电",
      onClick: a,
      children: [
        e.jsx("div", {
          className: "absolute top-3 right-3 z-10 sm:top-4 sm:right-4",
          onClick: (y) => y.stopPropagation(),
          children: e.jsx("button", {
            type: "button",
            onClick: a,
            className:
              "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/75 hover:bg-white/18 transition-colors",
            "aria-label": "拒接",
            children: e.jsx(Ts, { size: 18, strokeWidth: 2 }),
          }),
        }),
        e.jsxs("div", {
          className:
            "flex-1 flex flex-col items-center justify-center px-6 pt-8 pb-4 max-w-md mx-auto w-full",
          onClick: (y) => y.stopPropagation(),
          children: [
            e.jsxs("div", {
              className: "relative mb-8",
              children: [
                e.jsx("div", {
                  className:
                    "pointer-events-none absolute inset-0 rounded-full bg-emerald-400/20 scale-[1.3] animate-ping",
                  style: { animationDuration: "2.4s" },
                  "aria-hidden": !0,
                }),
                e.jsx("div", {
                  className:
                    "relative w-[6.5rem] h-[6.5rem] rounded-full overflow-hidden ring-2 ring-white/15 shadow-[0_0_40px_rgba(52,211,153,0.2)] bg-zinc-800 flex items-center justify-center",
                  children: g
                    ? e.jsx("img", {
                        src: g,
                        alt: "",
                        className: "w-full h-full object-cover",
                      })
                    : e.jsx(Zr, {
                        className: "text-zinc-500",
                        size: 36,
                        strokeWidth: 1.5,
                        "aria-hidden": !0,
                      }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex items-center gap-2 text-emerald-400/95 text-[10px] font-semibold tracking-[0.35em] uppercase",
              children: [
                e.jsx("span", {
                  className:
                    "h-1 w-1 rounded-full bg-emerald-400 animate-pulse",
                  "aria-hidden": !0,
                }),
                "语音来电",
              ],
            }),
            e.jsx("h2", {
              className:
                "mt-2 text-xl font-semibold text-center text-white px-2",
              children: h,
            }),
            e.jsx("p", {
              className: "mt-1 text-xs text-zinc-500 text-center",
              children: x ? `你已拉黑${h} · 仅语音` : `${h}正在呼叫你 · 仅语音`,
            }),
            e.jsxs("div", {
              className:
                "mt-6 w-full rounded-xl bg-white/[0.07] border border-white/10 px-3 py-2.5 backdrop-blur-md",
              children: [
                e.jsx("p", {
                  className:
                    "text-[9px] text-zinc-500 tracking-widest uppercase mb-1",
                  children: "备注",
                }),
                e.jsx("p", {
                  className:
                    "text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap break-words",
                  children: String(t.text || "").trim() || "正在呼叫你…",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "pb-8 pt-2 flex justify-center gap-14 px-6",
          onClick: (y) => y.stopPropagation(),
          children: [
            e.jsxs("button", {
              type: "button",
              onClick: a,
              className: "flex flex-col items-center gap-2",
              children: [
                e.jsx("span", {
                  className:
                    "w-14 h-14 rounded-full bg-[#ff3b30] flex items-center justify-center shadow-lg shadow-red-900/30 active:scale-95 transition-transform",
                  children: e.jsx(Zr, {
                    className: "text-white rotate-[135deg]",
                    size: 24,
                    strokeWidth: 2.2,
                    "aria-hidden": !0,
                  }),
                }),
                e.jsx("span", {
                  className: "text-[11px] text-zinc-500",
                  children: "挂断",
                }),
              ],
            }),
            e.jsxs("button", {
              type: "button",
              onClick: (y) => {
                y.stopPropagation();
                const v = t.contactId;
                if (!v) {
                  n();
                  return;
                }
                const b = (s || []).find((w) => w.id === v),
                  N =
                    (b == null ? void 0 : b.phone) != null
                      ? String(b.phone)
                      : "";
                try {
                  (Y5(), u == null || u());
                } catch {}
                (r(t),
                  i({
                    status: "connected",
                    contactId: v,
                    phoneNumber: N,
                    startTime: Date.now(),
                    rejectionReason: null,
                    rejectionActivity: null,
                    currentMessages: [],
                    apiError: null,
                    callOrigin: x
                      ? "inbound_blocked_invite"
                      : "inbound_proactive_invite",
                  }),
                  x ? o(v) : c(v));
                try {
                  d == null || d();
                } catch {}
              },
              className: "flex flex-col items-center gap-2",
              children: [
                e.jsx("span", {
                  className:
                    "w-14 h-14 rounded-full bg-[#30d158] flex items-center justify-center shadow-lg shadow-emerald-900/30 active:scale-95 transition-transform",
                  children: e.jsx(Zr, {
                    className: "text-white",
                    size: 24,
                    strokeWidth: 2.2,
                    "aria-hidden": !0,
                  }),
                }),
                e.jsx("span", {
                  className: "text-[11px] text-zinc-500",
                  children: "接听",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    document.body,
  );
}
const Nu = "chat_center_toast";
function b$(t) {
  return t == null
    ? null
    : typeof t == "string"
      ? { text: t }
      : typeof t == "object" && typeof t.text == "string"
        ? { text: t.text }
        : null;
}
function y$() {
  const [t, s] = l.useState(""),
    [n, a] = l.useState(!1),
    r = l.useRef(null);
  return (
    l.useEffect(() => {
      const i = (o) => {
        const c = b$(o == null ? void 0 : o.detail);
        c != null &&
          c.text &&
          (r.current && clearTimeout(r.current),
          s(String(c.text).trim()),
          a(!0),
          (r.current = setTimeout(() => {
            (a(!1), (r.current = null));
          }, 1800)));
      };
      return (
        window.addEventListener(Nu, i),
        () => {
          (window.removeEventListener(Nu, i),
            r.current && clearTimeout(r.current));
        }
      );
    }, []),
    t
      ? e.jsx("div", {
          className:
            "fixed inset-0 z-[1000] pointer-events-none flex items-center justify-center px-6",
          children: e.jsx("div", {
            className: `transition-all duration-200 ${n ? "opacity-100 scale-100" : "opacity-0 scale-95"}`,
            children: e.jsx("div", {
              className:
                "px-4 py-2 bg-black/70 text-white text-xs rounded-full shadow-lg backdrop-blur-md",
              children: t,
            }),
          }),
        })
      : null
  );
}
const ku = "chat_app_activity",
  nS =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#e5e7eb"/><text x="32" y="42" text-anchor="middle" fill="#6b7280" font-size="24" font-family="sans-serif">群</text></svg>',
    ),
  v$ =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#dbeafe"/><circle cx="32" cy="26" r="10" fill="#6b7280"/><path fill="#6b7280" d="M18 58 c0-10 14-18 28-18 s28 8 28 18v2 H18z"/></svg>',
    ),
  w$ =
    "data:image/svg+xml," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#f3f4f6"/><circle cx="32" cy="26" r="10" fill="#9ca3af"/><path fill="#9ca3af" d="M18 58 c0-10 14-18 28-18 s28 8 28 18v2 H18z"/></svg>',
    ),
  Qy = [
    { value: "owner", label: "群主" },
    { value: "admin", label: "管理员" },
    { value: "member", label: "普通成员" },
  ];
function j$(t) {
  const s = Qy.find((n) => n.value === t);
  return s ? s.label : "";
}
function um(t) {
  if (!t || typeof t != "object") return [];
  const s = t.boundMemeCategoryIds;
  if (Array.isArray(s))
    return s.length > 0
      ? [...new Set(s.map((a) => String(a)).filter(Boolean))]
      : [];
  const n = t.boundMemeCategoryId;
  return n != null && n !== "" ? [String(n)] : [];
}
function N$() {
  return {
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
    customPrompt: "",
    autoSummaryEnabled: !1,
    summaryThreshold: 10,
    groupPrompt: "",
    groupRelationships: "",
    groupSummary: "",
    groupEmotes: [],
    boundMemeCategoryId: null,
    userPersona: "",
    userAvatar: void 0,
  };
}
function k$(t) {
  return function (n, a, r = "") {
    if (!(n != null && n.length) || !String(a || "").trim()) return null;
    const i = String(a).trim(),
      o = [...n].filter(Boolean);
    if (o.length === 0) return null;
    const c = N$();
    ((c.myRole = "owner"),
      r != null && String(r).trim() && (c.userPersona = String(r).trim()));
    const d = {
      id: Date.now().toString(),
      contactId: null,
      isGroup: !0,
      memberIds: o,
      groupName: i,
      messages: [],
      lastMessage: "",
      timestamp: new Date().toISOString(),
      settings: c,
      lastSummaryMessageCount: 0,
      lastSummaryRoundCount: 0,
      callHistory: [],
    };
    return (t((u) => [d, ...u]), d.id);
  };
}
function pv(t) {
  return (t == null ? void 0 : t.isGroup) === !0;
}
function S$(t, s) {
  var n;
  return pv(t)
    ? {
        id: "group",
        name: (t == null ? void 0 : t.groupName) || "群聊",
        remark: (t == null ? void 0 : t.groupName) || "群聊",
        nickname: (t == null ? void 0 : t.groupName) || "群聊",
        avatar:
          ((n = t == null ? void 0 : t.settings) == null
            ? void 0
            : n.groupAvatar) || nS,
      }
    : s;
}
function _$(t, s) {
  if (t != null && t.isGroup && t.groupName) return t.groupName;
  const n = s(t == null ? void 0 : t.contactId);
  return (
    (n == null ? void 0 : n.remark) ||
    (n == null ? void 0 : n.nickname) ||
    (n == null ? void 0 : n.name) ||
    ""
  );
}
function A$(t, s) {
  return t != null && t.isGroup ? null : s(t == null ? void 0 : t.contactId);
}
function Nw(t, s, n, a, r, i = !0) {
  var b, N, w, _, A, k, C;
  const o = pv(t),
    c = s.sender === "me",
    d =
      o && !c && s.contactId ? (n || []).find((M) => M.id === s.contactId) : a,
    u = o ? !0 : i,
    f = o
      ? c
        ? (r == null ? void 0 : r.avatar) || v$
        : (d == null ? void 0 : d.avatar) || w$
      : c
        ? (r == null ? void 0 : r.avatar) || (a == null ? void 0 : a.avatar)
        : (d == null ? void 0 : d.avatar) || (a == null ? void 0 : a.avatar),
    p = (o && d && (d.nickname || d.name || d.remark)) || "",
    m = !!(
      (b = t == null ? void 0 : t.settings) != null &&
      b.hideMemberTitlesAndRoles
    ),
    h = m
      ? ""
      : o
        ? c
          ? (((N = t.settings) == null ? void 0 : N.myTitle) || "").trim()
          : (s.contactId &&
              (
                ((_ = (w = t.settings) == null ? void 0 : w.memberTitles) ==
                null
                  ? void 0
                  : _[s.contactId]) || ""
              ).trim()) ||
            ""
        : "",
    g = m
      ? ""
      : o
        ? h || (c ? "我" : p || (d == null ? void 0 : d.remark) || "?")
        : "",
    x = m
      ? ""
      : o
        ? c
          ? ((A = t.settings) == null ? void 0 : A.myRole) || "member"
          : s.contactId &&
            (((C = (k = t.settings) == null ? void 0 : k.memberRoles) == null
              ? void 0
              : C[s.contactId]) ||
              "member")
        : "",
    y = x && x !== "member" ? j$(x) : "",
    v = o && g && y ? `${g} · ${y}` : g;
  return {
    contactForAvatar: d,
    showAvatar: u,
    avatarSrc: f,
    senderLabel: v,
    isGroup: o,
    isMe: c,
  };
}
function C$({ announcement: t, collapsed: s = !1, onToggle: n, onClose: a }) {
  return !t || !String(t).trim()
    ? null
    : e.jsx("div", {
        className: `mx-2 mb-2 px-3 ${s ? "py-1.5" : "py-2"} bg-amber-50/90 border border-amber-200/80 rounded-lg select-none cursor-pointer`,
        onClick: () => (n == null ? void 0 : n()),
        role: "button",
        tabIndex: 0,
        onKeyDown: (r) => {
          (r.key === "Enter" || r.key === " ") && (n == null || n());
        },
        "aria-label": s ? "展开群公告" : "折叠群公告",
        children: e.jsxs("div", {
          className: "flex items-start justify-between gap-2",
          children: [
            e.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                e.jsx("p", {
                  className:
                    "text-[10px] text-amber-800/80 font-medium uppercase tracking-wider mb-0.5",
                  children: "群公告",
                }),
                s
                  ? e.jsx("p", {
                      className:
                        "text-xs text-amber-900 whitespace-pre-wrap line-clamp-1",
                      title: String(t),
                      children: t,
                    })
                  : e.jsx("p", {
                      className: "text-xs text-amber-900 whitespace-pre-wrap",
                      children: t,
                    }),
              ],
            }),
            !s &&
              e.jsx("button", {
                type: "button",
                className:
                  "flex-shrink-0 w-6 h-6 rounded-md text-amber-900/70 hover:text-amber-900 hover:bg-amber-100/70 transition-colors",
                "aria-label": "关闭群公告",
                onClick: (r) => {
                  (r.stopPropagation(), a == null || a());
                },
                children: "×",
              }),
          ],
        }),
      });
}
function M$({
  showSelectModal: t,
  setShowSelectModal: s,
  showNameModal: n,
  setShowNameModal: a,
  showPersonaModal: r,
  setShowPersonaModal: i,
  selectedIds: o,
  setSelectedIds: c,
  groupName: d,
  setGroupName: u,
  userPersona: f = "",
  setUserPersona: p,
  userPresets: m = [],
  contacts: h = [],
  createGroupChat: g,
  onCreated: x,
}) {
  const y = typeof i == "function" && typeof p == "function",
    v = () => {
      (s(!1), u(""), a(!0));
    },
    b = () => {
      (a(!1), p && p(""), i && i(!0));
    },
    N = () => {
      const A = g(o, d.trim());
      (a(!1), u(""), c([]), A && x && x(A));
    },
    w = () => {
      const A = g(o, d.trim(), (f == null ? void 0 : f.trim()) || "");
      (i == null || i(!1), u(""), p == null || p(""), c([]), A && x && x(A));
    },
    _ = (A) => {
      c((k) => (k.includes(A) ? k.filter((C) => C !== A) : [...k, A]));
    };
  return e.jsxs(e.Fragment, {
    children: [
      t &&
        e.jsx("div", {
          className:
            "absolute inset-0 z-[60] bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
          onClick: () => s(!1),
          children: e.jsxs("div", {
            className:
              "w-full max-w-sm max-h-[80vh] flex flex-col bg-white p-2 pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rotate-[0.5deg] relative",
            onClick: (A) => A.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: () => s(!1),
                className:
                  "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
              }),
              e.jsxs("div", {
                className:
                  "border border-[#e0e0e0] flex-1 flex flex-col min-h-0 relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-32 h-32 bg-[#fdfbf7] rounded-bl-full -z-10",
                  }),
                  e.jsxs("div", {
                    className: "p-6 border-b border-[#e0e0e0]",
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-serif text-2xl text-[#2c2c2c] tracking-tight italic",
                        children: "选择群成员",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                        children: "从联系人中勾选",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-2 min-h-0",
                    children:
                      (h || []).length === 0
                        ? e.jsx("p", {
                            className:
                              "text-sm text-[#9e9e9e] text-center py-8 font-serif",
                            children: "暂无联系人，请先添加联系人",
                          })
                        : (h || []).map((A) => {
                            const k = o.includes(A.id);
                            return e.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => _(A.id),
                                className:
                                  "w-full flex items-center gap-4 p-3 border border-[#e0e0e0] group/item hover:border-[#2c2c2c] hover:bg-[#faf9f6] transition-colors duration-300 text-left",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-full bg-[#f0f0f0] flex-shrink-0 overflow-hidden",
                                    children: A.avatar
                                      ? e.jsx("img", {
                                          src: A.avatar,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : e.jsx("div", {
                                          className:
                                            "w-full h-full flex items-center justify-center text-[#9e9e9e] text-sm font-serif",
                                          children: (
                                            A.name ||
                                            A.nickname ||
                                            "?"
                                          ).slice(0, 1),
                                        }),
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "flex-1 font-serif text-sm text-[#2c2c2c] truncate",
                                    children:
                                      A.remark ||
                                      A.nickname ||
                                      A.name ||
                                      "未命名",
                                  }),
                                  e.jsx("div", {
                                    className: `w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${k ? "bg-[#2c2c2c] border-[#2c2c2c]" : "border-[#e0e0e0] group-hover/item:border-[#2c2c2c]"}`,
                                    children:
                                      k &&
                                      e.jsx(On, {
                                        size: 12,
                                        className: "text-white",
                                        strokeWidth: 3,
                                      }),
                                  }),
                                ],
                              },
                              A.id,
                            );
                          }),
                  }),
                  e.jsx("div", {
                    className: "p-4 border-t border-[#e0e0e0]",
                    children: e.jsxs("button", {
                      type: "button",
                      disabled: o.length === 0,
                      onClick: v,
                      className:
                        "w-full flex items-center justify-center gap-2 p-4 border border-[#2c2c2c] font-serif text-sm text-[#2c2c2c] disabled:opacity-50 disabled:cursor-not-allowed disabled:border-[#e0e0e0] disabled:text-[#9e9e9e] group hover:bg-[#2c2c2c] hover:text-white transition-colors duration-300 disabled:hover:bg-transparent disabled:hover:text-[#9e9e9e]",
                      children: [
                        e.jsx("span", { children: "下一步：给群聊命名" }),
                        e.jsx(Kn, {
                          size: 14,
                          className:
                            "text-[#9e9e9e] group-hover:text-white transition-colors",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      n &&
        e.jsx("div", {
          className:
            "absolute inset-0 z-[70] bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
          onClick: () => a(!1),
          children: e.jsxs("div", {
            className:
              "w-full max-w-sm bg-white p-2 pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] -rotate-[0.5deg] relative",
            onClick: (A) => A.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: () => a(!1),
                className:
                  "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
              }),
              e.jsxs("div", {
                className:
                  "border border-[#e0e0e0] p-6 relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-32 h-32 bg-[#fdfbf7] rounded-bl-full -z-10",
                  }),
                  e.jsxs("div", {
                    className: "mb-6",
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-serif text-2xl text-[#2c2c2c] tracking-tight italic",
                        children: "群聊名称",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                        children: "为群聊起一个名字",
                      }),
                    ],
                  }),
                  e.jsx("input", {
                    type: "text",
                    value: d,
                    onChange: (A) => u(A.target.value),
                    placeholder: "例如：家人群、工作群...",
                    className:
                      "w-full px-4 py-3 border border-[#e0e0e0] text-[#2c2c2c] placeholder-[#9e9e9e] focus:outline-none focus:border-[#2c2c2c] transition-colors mb-6 font-serif",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (a(!1), u(""));
                        },
                        className:
                          "flex-1 flex items-center justify-center p-4 border border-[#2c2c2c] font-serif text-sm text-[#2c2c2c] group hover:bg-[#2c2c2c] hover:text-white transition-colors duration-300",
                        children: "取消",
                      }),
                      e.jsx("button", {
                        type: "button",
                        disabled: !d.trim(),
                        onClick: y ? b : N,
                        className:
                          "flex-1 flex items-center justify-center gap-2 p-4 border border-[#2c2c2c] font-serif text-sm text-[#2c2c2c] disabled:opacity-50 disabled:cursor-not-allowed disabled:border-[#e0e0e0] disabled:text-[#9e9e9e] group hover:bg-[#2c2c2c] hover:text-white transition-colors duration-300 disabled:hover:bg-transparent disabled:hover:text-[#9e9e9e]",
                        children: y
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("span", {
                                  children: "下一步：绑定用户人设",
                                }),
                                e.jsx(Kn, {
                                  size: 14,
                                  className:
                                    "text-[#9e9e9e] group-hover:text-white transition-colors",
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(ea, {
                                  size: 16,
                                  strokeWidth: 2,
                                  className: "opacity-80",
                                }),
                                e.jsx("span", { children: "创建群聊" }),
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      r &&
        e.jsx("div", {
          className:
            "absolute inset-0 z-[80] bg-[#faf9f6]/80 backdrop-blur-md flex items-center justify-center p-6",
          onClick: () => i(!1),
          children: e.jsxs("div", {
            className:
              "w-full max-w-sm bg-white p-2 pb-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rotate-[0.5deg] relative",
            onClick: (A) => A.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: () => i(!1),
                className:
                  "absolute -top-3 -right-3 w-8 h-8 bg-[#2c2c2c] rounded-full flex items-center justify-center text-white shadow-md z-20 hover:scale-110 transition-transform",
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 14, strokeWidth: 2 }),
              }),
              e.jsxs("div", {
                className:
                  "border border-[#e0e0e0] p-6 relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-32 h-32 bg-[#fdfbf7] rounded-bl-full -z-10",
                  }),
                  e.jsxs("div", {
                    className: "mb-4",
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-serif text-2xl text-[#2c2c2c] tracking-tight italic",
                        children: "用户人设",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-[#9e9e9e] uppercase tracking-[0.3em] mt-1",
                        children:
                          "描述你在本群中的身份，方便 AI 区分你与群成员；可手动填写或从「我的」预设选择",
                      }),
                    ],
                  }),
                  (m || []).length > 0 &&
                    e.jsxs("div", {
                      className: "mb-4",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] text-[#9e9e9e] uppercase tracking-[0.2em] mb-2",
                          children: "从预设选择",
                        }),
                        e.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: m.map((A) =>
                            e.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => p((A.settings || "").trim()),
                                className:
                                  "px-3 py-2 border border-[#e0e0e0] font-serif text-sm text-[#2c2c2c] hover:border-[#2c2c2c] hover:bg-[#faf9f6] transition-colors truncate max-w-[180px]",
                                title: A.settings
                                  ? String(A.settings).slice(0, 80) +
                                    (A.settings.length > 80 ? "…" : "")
                                  : A.name,
                                children: A.name || A.userName || "未命名",
                              },
                              A.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  e.jsx("textarea", {
                    value: f,
                    onChange: (A) => p(A.target.value),
                    placeholder:
                      "例如：小明，25岁，爱打游戏，在群里经常潜水偶尔吐槽...",
                    rows: 4,
                    className:
                      "w-full px-4 py-3 border border-[#e0e0e0] text-[#2c2c2c] placeholder-[#9e9e9e] focus:outline-none focus:border-[#2c2c2c] transition-colors mb-6 font-serif resize-none",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => i(!1),
                        className:
                          "flex-1 flex items-center justify-center p-4 border border-[#2c2c2c] font-serif text-sm text-[#2c2c2c] group hover:bg-[#2c2c2c] hover:text-white transition-colors duration-300",
                        children: "取消",
                      }),
                      e.jsxs("button", {
                        type: "button",
                        onClick: w,
                        className:
                          "flex-1 flex items-center justify-center gap-2 p-4 border border-[#2c2c2c] font-serif text-sm text-[#2c2c2c] group hover:bg-[#2c2c2c] hover:text-white transition-colors duration-300",
                        children: [
                          e.jsx(ea, {
                            size: 16,
                            strokeWidth: 2,
                            className: "opacity-80",
                          }),
                          e.jsx("span", { children: "创建群聊" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function Yh(t) {
  let s = (t || "").trim();
  for (; s.endsWith("/"); ) s = s.slice(0, -1);
  return (s.endsWith("/v1") && (s = s.slice(0, -3)), s);
}
function Qo(t) {
  const s = Yh(t),
    n = s ? `${s}/v1/chat/completions` : "";
  return n ? n : "";
}
function T$(t) {
  const s = Yh(t),
    n = s ? `${s}/v1/models` : "";
  return n ? n : "";
}
function I$(t) {
  const s = Yh(t),
    n = s ? `${s}/models` : "";
  return n ? n : "";
}
function Ap(t) {
  if (!t || !Array.isArray(t)) return 0;
  let s = 0,
    n = !1;
  for (const a of t)
    a.sender === "me"
      ? (n = !0)
      : a.sender !== "me" && a.sender !== "system" && n && ((s += 1), (n = !1));
  return s;
}
function Wo(t, s) {
  if (!t || !Array.isArray(t) || s <= 0) return [];
  const n = [];
  let a = 0;
  for (; a < t.length; )
    if (t[a].sender === "me") {
      let o = a + 1;
      for (; o < t.length && t[o].sender !== "me"; ) {
        if (t[o].sender !== "system") {
          n.push(a);
          break;
        }
        o += 1;
      }
      a = o;
    } else a += 1;
  const r = n.length;
  if (r === 0) return [];
  const i = n[Math.max(0, r - s)];
  return t.slice(i);
}
const Cl = 18e4,
  E$ = Cl,
  L$ = "chat_api_logs_verbose_enabled",
  D$ = "chat_api_logs_verbose_enabled_session",
  $$ = () => {
    try {
      const t = localStorage.getItem(L$);
      if (t === "1" || t === "0") return t === "1";
    } catch {}
    try {
      return sessionStorage.getItem(D$) === "1";
    } catch {
      return !1;
    }
  },
  Ol = (t, s = 800) =>
    String(t || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, Math.max(120, s)),
  F$ = (t, s = {}) => {
    const n = Number.isFinite(s.maxItems) ? Math.max(1, s.maxItems) : 60,
      a = Number.isFinite(s.maxTextLen) ? Math.max(80, s.maxTextLen) : 360,
      r = Array.isArray(t) ? t.slice(0, n) : [],
      i = (o) => {
        if (typeof o == "string") {
          const c = o.replace(/\s+/g, " ").trim();
          return c.length > a ? `${c.slice(0, a)}...` : c;
        }
        if (Array.isArray(o)) {
          const c = o
            .map((d) => {
              var u;
              return !d || typeof d != "object"
                ? ""
                : d.type === "text"
                  ? `[text] ${Ol(d.text, 180)}`
                  : d.type === "image_url"
                    ? `[image_url] ${Ol((u = d.image_url) == null ? void 0 : u.url, 180)}`
                    : `[${String(d.type || "part")}]`;
            })
            .filter(Boolean)
            .join(" | ");
          return c.length > a ? `${c.slice(0, a)}...` : c;
        }
        return Ol(
          o && typeof o == "object" ? JSON.stringify(o) : String(o || ""),
          a,
        );
      };
    return r.map((o, c) => ({
      idx: c,
      role:
        typeof (o == null ? void 0 : o.role) == "string" ? o.role : "unknown",
      content: i(o == null ? void 0 : o.content),
    }));
  },
  hf = (t) => {
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
  z$ = (t) =>
    typeof t == "string"
      ? t.trim() || ""
      : typeof t == "number" || typeof t == "boolean"
        ? String(t)
        : "",
  ki = (t, s = 0) => {
    if (s > 3 || t == null) return "";
    const n = z$(t);
    if (n) return n;
    if (Array.isArray(t))
      return (
        t
          .map((o) => ki(o, s + 1))
          .filter(Boolean)
          .join("")
          .trim() || ""
      );
    if (typeof t != "object") return "";
    const a = t,
      r = ["text", "content", "value", "output_text", "message"];
    for (const i of r) {
      if (a[i] == null) continue;
      const o = ki(a[i], s + 1);
      if (o) return o;
    }
    return "";
  };
function Vm(t) {
  var s, n, a;
  if (!t || typeof t != "object") return "";
  if (Array.isArray(t.choices) && t.choices.length) {
    const r = t.choices[0];
    let i =
      ((s = r == null ? void 0 : r.message) == null ? void 0 : s.content) ??
      (r == null ? void 0 : r.text) ??
      "";
    if (Array.isArray(i))
      i = i
        .map((o) =>
          typeof o == "string" ? o : o && typeof o == "object" ? ki(o) : "",
        )
        .join("")
        .trim();
    else if (i && typeof i == "object") {
      const o = i;
      if (((i = ki(o)), !i))
        try {
          i = JSON.stringify(o);
        } catch {
          i = "";
        }
    } else i = String(i || "").trim();
    if (!i && r != null && r.message && typeof r.message == "object") {
      const o = r.message;
      i =
        ki(o.refusal) ||
        ki(o.reasoning_content) ||
        ki(o.reasoning) ||
        ki(o.output_text) ||
        ki((n = o.audio) == null ? void 0 : n.transcript) ||
        "";
    }
    return i;
  }
  if (Array.isArray(t.candidates) && t.candidates.length) {
    const r = t.candidates[0],
      i = (a = r == null ? void 0 : r.content) == null ? void 0 : a.parts;
    if (Array.isArray(i) && i.length)
      return i
        .map((c) =>
          typeof c == "string"
            ? c
            : c && typeof c == "object"
              ? String(c.text ?? c.content ?? "").trim()
              : "",
        )
        .join("")
        .trim();
    const o = (r == null ? void 0 : r.output) ?? (r == null ? void 0 : r.text);
    if (o != null) return String(o).trim();
  }
  if (typeof t.output_text == "string" && t.output_text.trim())
    return t.output_text.trim();
  if (typeof t.result == "string" && t.result.trim()) return t.result.trim();
  if (typeof t.message == "string" && t.message.trim()) return t.message.trim();
  if (Array.isArray(t.output) && t.output.length) {
    const r = ki(t.output);
    if (r) return r;
  }
  if (t.response && typeof t.response == "object") {
    const r =
      ki(t.response.output) ||
      ki(t.response.output_text) ||
      ki(t.response.content);
    if (r) return r;
  }
  if (t.data && typeof t.data == "object") {
    const r = Vm(t.data) || ki(t.data.output) || ki(t.data.message);
    if (r) return r;
  }
  return "";
}
async function cr(t, s, n = {}) {
  var M, E, S, j, T, I, L, B, F, D, $, P, z, O, Z, K, q, V, ne, le, ie;
  const {
      timeoutMs: a = E$,
      addApiLog: r,
      logScene: i = "aiphone",
      logContactName: o = "",
      logId: c,
      logMessages: d,
      preferStream: u = !1,
    } = n,
    f = Qo(t == null ? void 0 : t.endpoint);
  if (!f || !(t != null && t.key))
    throw new Error("请先在设置中配置 API 地址和 Key");
  const p =
      c != null
        ? String(c)
        : `${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
    m = Date.now(),
    h = $$(),
    g = { model: t.model || "gpt-3.5-turbo", ...s },
    x = Array.isArray(g == null ? void 0 : g.messages) ? g.messages : [],
    y = Array.isArray(d) && d.length ? d : F$(x),
    v = {
      model: g.model || "",
      timeoutMs: a,
      scene: i,
      endpoint: String((t == null ? void 0 : t.endpoint) || ""),
      chatUrl: f,
      messageCount: x.length,
      rawRequestSize: JSON.stringify(g).length,
      hasImageAttachment: x.some(
        (X) =>
          Array.isArray(X == null ? void 0 : X.content) &&
          X.content.some((je) => {
            var xe;
            return (
              je &&
              typeof je == "object" &&
              je.type === "image_url" &&
              typeof ((xe = je.image_url) == null ? void 0 : xe.url) ==
                "string" &&
              je.image_url.url.trim() !== ""
            );
          }),
      ),
    },
    b = [],
    N = (X, je = {}) => {
      h &&
        (b.push({ t: Date.now() - m, stage: X, ...je }),
        b.length > 32 && b.shift());
    },
    w = () =>
      b
        .map((X) => {
          const je = [];
          (X.status != null && je.push(`status=${X.status}`),
            X.rawLen != null && je.push(`rawLen=${X.rawLen}`),
            X.contentLen != null && je.push(`contentLen=${X.contentLen}`),
            X.budgetMs != null && je.push(`budgetMs=${X.budgetMs}`));
          const xe = je.length ? `(${je.join(",")})` : "";
          return `${X.t}ms:${X.stage}${xe}`;
        })
        .join(" -> ");
  r &&
    r({
      id: p,
      timestamp: m,
      type: "request",
      scene: i,
      contact: o,
      messages: y,
      status: "pending",
      verboseLogEnabled: h,
      ...(h
        ? {
            requestMeta: v,
            flowTrace: "0ms:request_prepare",
            flowEvents: [{ t: 0, stage: "request_prepare" }],
          }
        : {}),
    });
  const A =
    !/假流式/i.test(String((t == null ? void 0 : t.model) || "")) &&
    (!!u || !!(t != null && t.chatPreferStreamEnabled));
  h && (v.useStream = A);
  const k = new AbortController(),
    C = setTimeout(() => k.abort(), a);
  try {
    const X = g;
    N("fetch_start", { useStream: A ? 1 : 0 });
    const je = await fetch(f, {
      method: "POST",
      signal: k.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t.key}`,
      },
      body: JSON.stringify(X),
    });
    (N("response_received", { status: je.status }), clearTimeout(C));
    let xe;
    if (A && je.ok) {
      let oe = "",
        ee = "",
        H = 0,
        Y = null;
      const U = je.body.getReader(),
        ce = new TextDecoder();
      let pe = "";
      for (N("stream_reading_chunks"); ; ) {
        const { value: se, done: Te } = await U.read();
        if (Te) break;
        const ke = ce.decode(se, { stream: !0 });
        ((ee += ke), (pe += ke));
        const W = pe.split(/\n/);
        pe = W.pop() ?? "";
        for (const ue of W)
          if (ue.startsWith("data: ")) {
            const re = ue.slice(6).trim();
            if (re === "[DONE]") continue;
            try {
              const he = JSON.parse(re),
                ge =
                  (S =
                    (E =
                      (M = he == null ? void 0 : he.choices) == null
                        ? void 0
                        : M[0]) == null
                      ? void 0
                      : E.delta) == null
                    ? void 0
                    : S.content,
                J =
                  (I =
                    (T =
                      (j = he == null ? void 0 : he.choices) == null
                        ? void 0
                        : j[0]) == null
                      ? void 0
                      : T.message) == null
                    ? void 0
                    : I.content,
                G =
                  typeof ge == "string" ? ge : typeof J == "string" ? J : null;
              G != null &&
                ((H += 1), Y == null && (Y = Date.now() - m), (oe += G));
            } catch {}
          }
      }
      if (!oe && ee.trim())
        try {
          const se = JSON.parse(ee.trim()),
            Te = Vm(se);
          typeof Te == "string" &&
            Te.trim() &&
            ((oe = Te),
            (H = 1),
            (Y = Date.now() - m),
            N("stream_fallback_json_parsed", { contentLen: oe.length }));
        } catch {}
      (N("stream_read_complete", {
        contentLen: oe.length,
        chunkCount: H,
        firstChunkMs: Y,
      }),
        (xe = JSON.stringify({ choices: [{ message: { content: oe } }] })));
    } else (N("body_read_start"), (xe = await je.text()));
    N("body_read_done", { rawLen: String(xe || "").length });
    let ye;
    try {
      ((ye = xe ? JSON.parse(xe) : null), N("json_parse_done"));
    } catch {
      const ee = `HTTP ${je.status}，响应不是合法 JSON`;
      throw (
        r &&
          r({
            id: p,
            scene: i,
            contact: o,
            status: "error",
            duration: Date.now() - m,
            error: ee,
            errorStatus: je.status,
            ...(h
              ? {
                  errorKind: "PARSE",
                  rawResponsePreview: Ol(xe, 1600),
                  responseMeta: {
                    status: je.status,
                    contentType:
                      ((B = (L = je.headers) == null ? void 0 : L.get) == null
                        ? void 0
                        : B.call(L, "content-type")) || null,
                    headers: hf(je.headers),
                  },
                  flowTrace: w(),
                  flowEvents: b.slice(),
                }
              : {}),
          }),
        new Error(ee)
      );
    }
    if (!je.ok) {
      const oe =
        ((F = ye == null ? void 0 : ye.error) == null ? void 0 : F.message) ||
        (ye == null ? void 0 : ye.message) ||
        (ye == null ? void 0 : ye.error) ||
        (xe == null ? void 0 : xe.slice(0, 300)) ||
        `${je.status} ${je.statusText}`;
      throw (
        r &&
          r({
            id: p,
            scene: i,
            contact: o,
            status: "error",
            duration: Date.now() - m,
            error: oe,
            errorStatus: je.status,
            ...(h
              ? {
                  errorKind: "HTTP_ERROR",
                  rawResponsePreview: Ol(xe, 1600),
                  responseMeta: {
                    status: je.status,
                    contentType:
                      (($ = (D = je.headers) == null ? void 0 : D.get) == null
                        ? void 0
                        : $.call(D, "content-type")) || null,
                    headers: hf(je.headers),
                    topKeys:
                      ye && typeof ye == "object"
                        ? Object.keys(ye).slice(0, 20)
                        : null,
                  },
                  flowTrace: w(),
                  flowEvents: b.slice(),
                }
              : {}),
          }),
        new Error(oe)
      );
    }
    if (ye != null && ye.error) {
      const oe = ye.error.message || ye.error.code || JSON.stringify(ye.error);
      throw (
        r &&
          r({
            id: p,
            scene: i,
            contact: o,
            status: "error",
            duration: Date.now() - m,
            error: `接口返回: ${oe}`,
            errorStatus: 200,
            ...(h
              ? {
                  errorKind: "API_BODY_ERROR",
                  rawResponsePreview: Ol(xe, 1600),
                  responseMeta: {
                    status: 200,
                    contentType:
                      ((z = (P = je.headers) == null ? void 0 : P.get) == null
                        ? void 0
                        : z.call(P, "content-type")) || null,
                    headers: hf(je.headers),
                    topKeys:
                      ye && typeof ye == "object"
                        ? Object.keys(ye).slice(0, 20)
                        : null,
                  },
                  flowTrace: w(),
                  flowEvents: b.slice(),
                }
              : {}),
          }),
        new Error(oe)
      );
    }
    N("content_extract_start");
    let R = Vm(ye);
    if (
      (N("content_extract_done", { contentLen: String(R || "").length }),
      !String(R ?? "").trim())
    ) {
      const ee = `EMPTY_BODY: 接口已响应但未返回正文
raw=${String(xe || "").slice(0, 800) || "（空）"}`;
      throw (
        r &&
          r({
            id: p,
            scene: i,
            contact: o,
            status: "error",
            duration: Date.now() - m,
            error: ee,
            errorStatus: 200,
            ...(h
              ? {
                  errorKind: "EMPTY_BODY",
                  rawResponsePreview: Ol(xe, 1600),
                  responseMeta: {
                    status: 200,
                    contentType:
                      ((Z = (O = je.headers) == null ? void 0 : O.get) == null
                        ? void 0
                        : Z.call(O, "content-type")) || null,
                    headers: hf(je.headers),
                    id: (ye == null ? void 0 : ye.id) ?? null,
                    model: (ye == null ? void 0 : ye.model) ?? null,
                    usage:
                      ye != null && ye.usage && typeof ye.usage == "object"
                        ? ye.usage
                        : null,
                    finishReason:
                      ((q =
                        (K = ye == null ? void 0 : ye.choices) == null
                          ? void 0
                          : K[0]) == null
                        ? void 0
                        : q.finish_reason) ?? null,
                    topKeys:
                      ye && typeof ye == "object"
                        ? Object.keys(ye).slice(0, 20)
                        : null,
                  },
                  flowTrace: w(),
                  flowEvents: b.slice(),
                }
              : {}),
          }),
        new Error(ee)
      );
    }
    return (
      N("request_success", { contentLen: String(R || "").length }),
      r &&
        r({
          id: p,
          scene: i,
          contact: o,
          status: "success",
          duration: Date.now() - m,
          response: R,
          ...(h
            ? {
                responseMeta: {
                  status: 200,
                  contentType:
                    ((ne = (V = je.headers) == null ? void 0 : V.get) == null
                      ? void 0
                      : ne.call(V, "content-type")) || null,
                  headers: hf(je.headers),
                  id: (ye == null ? void 0 : ye.id) ?? null,
                  model: (ye == null ? void 0 : ye.model) ?? null,
                  object: (ye == null ? void 0 : ye.object) ?? null,
                  created: (ye == null ? void 0 : ye.created) ?? null,
                  usage:
                    ye != null && ye.usage && typeof ye.usage == "object"
                      ? ye.usage
                      : null,
                  finishReason:
                    ((ie =
                      (le = ye == null ? void 0 : ye.choices) == null
                        ? void 0
                        : le[0]) == null
                      ? void 0
                      : ie.finish_reason) ?? null,
                  topKeys:
                    ye && typeof ye == "object"
                      ? Object.keys(ye).slice(0, 20)
                      : null,
                  rawLen: String(xe || "").length,
                  contentLen: String(R || "").length,
                },
                rawResponsePreview: Ol(xe, 1600),
                flowTrace: w(),
                flowEvents: b.slice(),
              }
            : {}),
        }),
      R
    );
  } catch (X) {
    clearTimeout(C);
    const je = Date.now() - m,
      xe = (X == null ? void 0 : X.name) === "AbortError",
      ye = xe
        ? `请求超时（${a / 1e3} 秒）`
        : ((X == null ? void 0 : X.message) ?? String(X)),
      R = xe ? ye : R$(X, ye);
    (N(xe ? "request_timeout" : "request_failed"),
      r &&
        r({
          id: p,
          scene: i,
          contact: o,
          status: "error",
          duration: je,
          error: R,
          errorStatus: xe ? "timeout" : null,
          ...(h
            ? {
                errorKind: xe ? "TIMEOUT" : "NETWORK_OR_UNKNOWN",
                errorRaw: ye,
                flowTrace: w(),
                flowEvents: b.slice(),
              }
            : {}),
        }));
    const oe = new Error(R);
    throw ((oe.cause = X), oe);
  }
}
function R$(t, s) {
  const n = String(s || "");
  return n.includes("Failed to fetch") ||
    n.includes("NetworkError") ||
    n.includes("Load failed") ||
    (t == null ? void 0 : t.name) === "TypeError"
    ? `${n}

若出现在浏览器中：多为跨域（CORS）拦截或网络被拦。本地开发可在项目根目录 .env.local 设置 VITE_DEV_OPENAI_COMPAT_PROXY_TARGET（与设置里的 API 基址一致，含 https://）并重启 npm run dev，请求会走 Vite 同源代理；线上需使用带 CORS 的网关或同源反代。`
    : s;
}
const P$ = /<(?:[\/?]?[a-zA-Z][\w-]*|[!?])[\s>\/]?/;
function eu(t) {
  var s;
  if (typeof t != "string" || !t || !P$.test(t)) return t;
  try {
    const n = t
      .replace(
        /<br\s*\/?>/gi,
        `
`,
      )
      .replace(
        /<\/(p|div|h[1-6]|li|tr)>/gi,
        `
`,
      )
      .replace(
        /<\/(ul|ol|table|blockquote)>/gi,
        `
`,
      );
    let r =
      ((s = new DOMParser().parseFromString(n, "text/html").body) == null
        ? void 0
        : s.textContent) ?? "";
    return (
      (r = String(r)
        .replace(/\u00a0/g, " ")
        .replace(
          /[ \t]+\n/g,
          `
`,
        )
        .replace(
          /\n{3,}/g,
          `

`,
        )
        .trimEnd()),
      r.length
        ? r
        : t
            .replace(/<[^>]+>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
    );
  } catch {
    return t
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
}
function O$(t) {
  const s = Array.isArray(t) ? t : [],
    n = 8,
    a = 260,
    r = (o) =>
      String(o ?? "")
        .replace(/\s+/g, " ")
        .trim(),
    i = (o) => {
      if (typeof o == "string") {
        const c = r(o);
        return c.length > a ? `${c.slice(0, a)}…` : c;
      }
      if (Array.isArray(o)) {
        const c = o
            .map((u) =>
              !u || typeof u != "object"
                ? ""
                : u.type === "text"
                  ? r(u.text || "")
                  : u.type === "image_url"
                    ? "[image]"
                    : `[${String(u.type || "part")}]`,
            )
            .filter(Boolean)
            .join(" | "),
          d = r(c);
        return d.length > a ? `${d.slice(0, a)}…` : d;
      }
      return r(o);
    };
  return s.slice(0, n).map((o, c) => {
    const d =
      typeof (o == null ? void 0 : o.role) == "string" ? o.role : "unknown";
    return `${c + 1}. ${d}: ${i(o == null ? void 0 : o.content)}`;
  });
}
function B$(t) {
  const s = String(t || "").trim();
  if (!s) return "";
  const n = [
    /(?:^|\n)\s*(?:名字|姓名|昵称|称呼)\s*[：:]\s*([^\n，。,；;]{1,20})/,
    /我叫\s*([^\s，。,；;]{1,20})/,
  ];
  for (const a of n) {
    const r = s.match(a);
    if (r != null && r[1]) return String(r[1]).trim();
  }
  return "";
}
function U$(t) {
  var r;
  if (!(t != null && t.length)) return [];
  let s = t.length - 1;
  for (; s >= 0 && ((r = t[s]) == null ? void 0 : r.sender) === "me"; ) s -= 1;
  const n = t
      .slice(s + 1)
      .filter(
        (i) =>
          (i == null ? void 0 : i.sender) === "me" &&
          (i == null ? void 0 : i.type) === "image" &&
          i.image,
      ),
    a = [];
  for (const i of n) {
    const o = String(i.image).trim();
    if (
      (o.startsWith("data:image/") ||
        o.startsWith("http://") ||
        o.startsWith("https://")) &&
      (a.push(o), a.length >= 4)
    )
      break;
  }
  return a;
}
function kw(t) {
  const s = String(t).trim();
  if (!s || !s.includes('"replies"')) return null;
  const n = ['":""}]}', '""}]}', '"]}', '"}]}', "}]}", "]}"];
  for (const a of n)
    try {
      const r = JSON.parse(s + a);
      if (r && typeof r == "object" && Array.isArray(r.replies)) return r;
    } catch {}
  return null;
}
function G$(t) {
  const s = String(t).trim();
  for (const r of ['"replies"', '"回复"', "'replies'", "'回复'"]) {
    const i = s.indexOf(r);
    if (i === -1) continue;
    const o = s.indexOf(":", i);
    if (o === -1) continue;
    const c = s.indexOf("[", o);
    if (c === -1) continue;
    let d = 1,
      u = c + 1,
      f = !1,
      p = null,
      m = !1;
    for (; u < s.length && d > 0; ) {
      const g = s[u];
      if (m) {
        ((m = !1), u++);
        continue;
      }
      if (g === "\\" && f) {
        ((m = !0), u++);
        continue;
      }
      (f
        ? g === p && (f = !1)
        : g === '"' || g === "'"
          ? ((f = !0), (p = g))
          : g === "["
            ? d++
            : g === "]" && d--,
        u++);
    }
    if (d !== 0) continue;
    const h = s.slice(c, u);
    try {
      const g = JSON.parse(h);
      return Array.isArray(g) ? g : null;
    } catch {
      try {
        const x = h
          .replace(/"联系人"\s*:/g, '"contactId":')
          .replace(/"contact_id"\s*:/g, '"contactId":')
          .replace(/"内容"\s*:/g, '"text":')
          .replace(/"文本"\s*:/g, '"text":');
        return JSON.parse(x);
      } catch {}
    }
  }
  const n = s.indexOf("{"),
    a = s.lastIndexOf("}");
  if (n >= 0 && a > n)
    try {
      const r = JSON.parse(s.slice(n, a + 1));
      return Array.isArray(r == null ? void 0 : r.replies)
        ? r.replies
        : Array.isArray(r == null ? void 0 : r.回复)
          ? r.回复
          : null;
    } catch {}
  return null;
}
function aS(t, s, n, a, r, i, o = {}) {
  var fe, He, Ie;
  const c = `group-${Date.now()}`,
    d = (t == null ? void 0 : t.groupName) || "群聊";
  if (
    !(t != null && t.isGroup) ||
    !((fe = t == null ? void 0 : t.memberIds) != null && fe.length)
  ) {
    const Ce =
      "非群聊或无成员(isGroup=" +
      !!(t != null && t.isGroup) +
      ", memberIds=" +
      (((He = t == null ? void 0 : t.memberIds) == null ? void 0 : He.length) ??
        0) +
      ")";
    return (
      r &&
        r({
          id: c,
          scene: "group_reply",
          contact: d,
          status: "skip",
          messages: [Ce],
        }),
      { request: null, skipReason: Ce }
    );
  }
  const u = (t == null ? void 0 : t.settings) || {},
    f = u.memberRoles || {},
    p = u.memberTitles || {},
    m = (Ce) => (Ce != null ? String(f[String(Ce)] || "member") : "member"),
    h = u.mutedMembers || {},
    g = Date.now();
  let x = t.memberIds
    .map((Ce) => s.find((Re) => Re.id === Ce))
    .filter(Boolean)
    .filter((Ce) => (h[Ce.id] || 0) <= g);
  if (
    i === "video_call" &&
    Array.isArray(o.acceptedMembers) &&
    o.acceptedMembers.length > 0 &&
    ((x = x.filter((Ce) => o.acceptedMembers.includes(Ce.id))), x.length === 0)
  ) {
    const Ce = "群视频通话无接听成员";
    return (
      r &&
        r({
          id: c,
          scene: "group_reply",
          contact: d,
          status: "skip",
          messages: [Ce],
        }),
      { request: null, skipReason: Ce }
    );
  }
  if (x.length === 0) {
    const Ce = "无可用成员（可能全被禁言）";
    return (
      r &&
        r({
          id: c,
          scene: "group_reply",
          contact: d,
          status: "skip",
          messages: [Ce],
        }),
      { request: null, skipReason: Ce }
    );
  }
  const y = u.contextLimit || (a == null ? void 0 : a.contextLimit) || 50,
    v = t.messages || [];
  let b = Wo(v, y);
  b.length === 0 && v.length > 0 && (b = v.slice(-y));
  const N = (u.userPersona || "").trim(),
    w = B$(N),
    _ =
      (u.myTitle || "").trim() ||
      w ||
      (n == null ? void 0 : n.nickname) ||
      (n == null ? void 0 : n.name) ||
      "我",
    A = (Ce) => {
      let Re = Ce.targetContactId;
      if (
        ((Re == null || Re === "") &&
          Ce.sender === "me" &&
          Ce.contactId &&
          Ce.type === "food_delivery" &&
          (Re = Ce.contactId),
        Re == null || Re === "")
      )
        return _;
      const De = x.find((at) => at.id === Re);
      return (
        (De == null ? void 0 : De.remark) ||
        (De == null ? void 0 : De.nickname) ||
        (De == null ? void 0 : De.name) ||
        "某成员"
      );
    },
    k = (Ce) => {
      let Re = Ce.targetContactId;
      if (
        ((Re == null || Re === "") &&
          Ce.sender === "me" &&
          Ce.contactId &&
          Ce.type === "transfer" &&
          (Re = Ce.contactId),
        Re == null || Re === "")
      )
        return _;
      const De = x.find((at) => at.id === Re);
      return (
        (De == null ? void 0 : De.remark) ||
        (De == null ? void 0 : De.nickname) ||
        (De == null ? void 0 : De.name) ||
        "某成员"
      );
    },
    C = b
      .slice(-30)
      .map((Ce) => {
        var De, at, ft;
        if (Ce.type === "system" || Ce.sender === "system") {
          const vt = (Ce.text || "")
            .trim()
            .replace(/^\[系统提示[：:]\s*/, "")
            .replace(/\]$/, "");
          return vt ? `[系统] ${vt}` : null;
        }
        if (Ce.sender === "me") {
          if (Ce.type === "image" && Ce.image)
            return `${_}: [真实照片·内容以本请求中的图片附件为准]`;
          if (Ce.type === "food_delivery") {
            const vt = A(Ce);
            return `${_}: [外卖·给${vt}点了 ${Ce.item || ""} ¥${Ce.price || ""}]`;
          }
          if (Ce.type === "pay_for_me")
            return `${_}: [代付求助·${Ce.item || ""} ¥${Ce.price || ""}（想请群友帮忙付）]`;
          if (Ce.type === "transfer") {
            const vt = k(Ce);
            return `${_}: [转账·给${vt} ¥${Ce.amount || ""} 备注:${Ce.note || "转账"} 状态:${Ce.status || "pending"}]`;
          }
          return `${_}: ${eu((Ce.text || "").trim())}`;
        }
        const Re = Ce.contactId
          ? ((De = x.find((vt) => vt.id === Ce.contactId)) == null
              ? void 0
              : De.remark) ||
            ((at = x.find((vt) => vt.id === Ce.contactId)) == null
              ? void 0
              : at.nickname) ||
            ((ft = x.find((vt) => vt.id === Ce.contactId)) == null
              ? void 0
              : ft.name) ||
            "?"
          : "群成员";
        if (Ce.type === "food_delivery") {
          const vt = A(Ce);
          return `${Re}: [外卖·给${vt}点了 ${Ce.item || ""} ¥${Ce.price || ""}]`;
        }
        if (Ce.type === "pay_for_me")
          return `${Re}: [代付求助·${Re}想让大家帮忙付 ${Ce.item || ""} ¥${Ce.price || ""}（用户或其他成员可按人设决定是否帮付；帮付须在回复中带 [ACCEPT_PAY_FOR_ME]，不帮可带 [REJECT_PAY_FOR_ME]）]`;
        if (Ce.type === "transfer") {
          const vt = k(Ce);
          return `${Re}: [转账·给${vt} ¥${Ce.amount || ""} 备注:${Ce.note || "转账"} 状态:${Ce.status || "pending"}]`;
        }
        return `${Re}: ${eu((Ce.text || "").trim())}`;
      })
      .filter(Boolean);
  let M = "",
    E = b.filter((Ce) => Ce.sender === "me").pop();
  if ((E && (M = eu((E.text || E.content || "").trim())), !M && b.length > 0)) {
    const Ce = b[b.length - 1];
    (Ce == null ? void 0 : Ce.sender) === "me" &&
      (M = eu((Ce.text || Ce.content || "").trim()));
  }
  if (
    (!M &&
      v.length > 0 &&
      ((E = [...v].reverse().find((Ce) => Ce.sender === "me")),
      E && (M = eu((E.text || E.content || "").trim()))),
    !M && (i === "video_call_decision" || i === "video_call") && b.length > 0)
  ) {
    const Ce = (
      ((Ie = b[b.length - 1]) == null ? void 0 : Ie.text) || ""
    ).trim();
    (Ce.includes("发起了群视频通话") || Ce.includes("发起了视频通话")) &&
      (M = "（发起群视频通话）");
  }
  const S = o == null ? void 0 : o.proactiveContext,
    j = (S == null ? void 0 : S.isAutoReply) === !0;
  if (
    (!M &&
      j &&
      (M = `（主动模式）距上次对话已过 ${S.timeSinceLastMessage || "一段时间"}，请群成员根据对话历史与时间感主动发起话题或接话。`),
    !M &&
      (i === "chat_heart" || i === "chat_regen") &&
      v.length > 0 &&
      (M = "（用户点击了「接收」，请结合上文生成群成员回复）"),
    !M && v.length > 0)
  ) {
    const Ce = [...v].reverse().find((Re) => Re.sender === "me");
    Ce &&
      (Ce.type === "image" || Ce.image
        ? (M = "（用户发送了一张图片）")
        : Ce.type === "voice" || Ce.voiceUrl || Ce.audioUrl
          ? (M = "（用户发送了一条语音）")
          : Ce.type === "meme" ||
              Ce.memeId ||
              /\[表情包:/.test(String(Ce.text || ""))
            ? (M = "（用户发送了一个表情包）")
            : Ce.type === "gashapon_card"
              ? (M = "（用户发送了扭蛋/卡片消息）")
              : Ce.type === "food_delivery"
                ? (M = "（用户发送了一条外卖订单消息）")
                : (Ce.type === "transfer" || Ce.type === "red_packet") &&
                  (M = "（用户发送了一条转账/红包相关消息）"));
  }
  if (!M) {
    const Ce = "未找到用户最后一条文本消息(共" + b.length + "条)";
    return (
      r &&
        r({
          id: c,
          scene: "group_reply",
          contact: d,
          status: "skip",
          messages: [Ce],
        }),
      { request: null, skipReason: Ce }
    );
  }
  const T = x.map((Ce) => Ce.remark || Ce.nickname || Ce.name || "未命名"),
    I = x.map((Ce) => {
      var Oe;
      const Re = `【成员 contactId: "${Ce.id}"】
名字: ${Ce.name} | 昵称: ${Ce.nickname || Ce.name} | 当前群昵称: ${((p == null ? void 0 : p[Ce.id]) || "").trim() || "（未设置）"} | 备注/默认名: ${Ce.remark || Ce.nickname || Ce.name}
群内身份: ${m(Ce.id) === "owner" ? "群主" : m(Ce.id) === "admin" ? "管理员" : "普通成员"}
性别: ${Ce.gender || "未设定"} | 人设概括: ${String(Ce.persona || "").trim() || "无"}
详细设定（必须严格遵循）:
${String(Ce.setting || "").trim() || "无特别设定"}`,
        De =
          (Oe = o == null ? void 0 : o.singleChatMemoryByMember) == null
            ? void 0
            : Oe[Ce.id];
      if (!De) return Re;
      const at = String(De.summariesText || "").trim(),
        ft = String(De.historyText || "").trim(),
        vt = [];
      return (
        at &&
          vt.push(`【该成员与用户的单聊记忆】
${at}`),
        ft &&
          vt.push(`【该成员与用户的单聊聊天记录节选（最近${De.rounds || ""}回合）】
${ft}`),
        `${Re}

${vt.join(`

`)}`.trim()
      );
    }).join(`

`);
  let L = "";
  if (u.realTime) {
    const Ce = o.timeData || u.timeData;
    if (Ce) {
      const Re = Ce.user ? `用户时间 (${Ce.user.city}): ${Ce.user.info}` : "",
        De = Ce.ai ? `群内参考时间 (${Ce.ai.city}): ${Ce.ai.info}` : "";
      L = `【时间】${Re}${Re && De ? " | " : ""}${De}
各成员可根据当地时间判断作息，回复时自然融入时间感；除非被问，否则不必主动报时。

`;
    } else
      try {
        L = `【时间】${new Date().toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: !1, weekday: "long" })} (系统时间)
各成员回复时可结合时间感，勿主动报时。

`;
      } catch {}
  }
  let B = "";
  if (u.realWeather) {
    const Ce = o.weatherData || u.weatherData;
    if (Ce) {
      const Re = Ce.user ? `用户所在地 (${Ce.user.city}): ${Ce.user.info}` : "",
        De = Ce.ai ? `群内参考 (${Ce.ai.city}): ${Ce.ai.info}` : "";
      B = `【环境/天气】${Re}${Re && De ? " | " : ""}${De}
天气仅作背景参考，各成员可自然融入氛围，切勿每条回复都提天气。

`;
    } else {
      const Re = u.userCity || "未知",
        De = u.aiCity || "未知";
      B = `【位置】用户: ${Re} | 群内参考: ${De}
各成员可根据城市气候特征合理对话。

`;
    }
  }
  let F = "";
  const D = o.moments || [];
  Array.isArray(D) &&
    D.length > 0 &&
    (F = `【群内近期动态/朋友圈】
以下为**用户本人**近期动态（新→旧）。较久条目除非有人提起否则不必反复cue。
${D.map((Re) => {
  const De = Re.user && Re.user.name ? Re.user.name : "未知",
    at = Re.content || "(图片)",
    ft = Re.timestamp != null ? Number(Re.timestamp) : NaN,
    vt = Number.isFinite(ft) ? new Date(ft) : null,
    Oe =
      vt && !Number.isNaN(vt.getTime())
        ? vt.toLocaleString("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          })
        : "";
  let Qe = "";
  if (vt && !Number.isNaN(vt.getTime())) {
    const Ye = Math.floor((Date.now() - vt.getTime()) / 864e5);
    Ye <= 0
      ? (Qe = " ·新近")
      : Ye === 1
        ? (Qe = " ·昨天")
        : Ye < 7
          ? (Qe = ` ·约${Ye}天前`)
          : Ye < 30
            ? (Qe = ` ·约${Math.floor(Ye / 7)}周前`)
            : (Qe = ` ·约${Math.floor(Ye / 30)}个月前（较久）`);
  }
  return `- ${Oe}${Qe} ${De}: ${at}`;
}).join(`
`)}

`);
  let $ = "";
  const P = o.worldBooksByMember || {},
    z = Object.keys(P).filter((Ce) => {
      const Re = P[Ce];
      return Array.isArray(Re) && Re.length > 0;
    });
  z.length > 0 &&
    ($ = `【群成员世界观】
各成员回复时需符合自己绑定的世界观设定。

${z.map((Re) => {
  const De = x.find((Oe) => Oe.id === Re),
    at = De ? De.remark || De.nickname || De.name || "未命名" : Re,
    vt = P[Re].map((Oe) => {
      const Qe = Array.isArray(Oe.entries)
        ? Oe.entries.map((Ye) => `  - ${Ye.title}: ${Ye.content}`).join(`
`)
        : "";
      return `《${Oe.title}》(${Oe.description || ""}):
${Qe}`;
    }).join(`

`);
  return `【成员 ${at} 的世界观】
${vt}`;
}).join(`

`)}

`);
  let O = "";
  const Z = o.groupSharedWorldBooks || [];
  Array.isArray(Z) &&
    Z.length > 0 &&
    (O = `【本群共享世界观】
以下为在世界书中**绑定到本群**的设定，全体成员回复时均应参考（可与上方「成员世界观」并存；剧情背景以不矛盾为准，若有冲突以本段共享设定优先）。

${Z.map((Re) => {
  const De = Array.isArray(Re.entries)
    ? Re.entries.map((at) => `  - ${at.title}: ${at.content}`).join(`
`)
    : "";
  return `《${Re.title}》(${Re.description || ""}):
${De}`;
}).join(`

`)}

`);
  let K = "";
  const q = o.chatSummaries || [];
  Array.isArray(q) &&
    q.length > 0 &&
    (K = `【本群聊天记忆摘要】
以下为与本群对话相关的记忆，各成员回复时可自然呼应，勿机械复读。
${q.map(
  (Re) =>
    `- [${Re.timestamp ? new Date(Re.timestamp).toLocaleDateString() : ""}] ${Re.content || ""}`,
).join(`
`)}

`);
  let V = "";
  const ne = o.douyinMemories || "";
  ne.trim() &&
    (V = `【抖音侧近期动态（仅作背景参考，勿机械复读；居民有自己的生活）】
${ne.trim()}

`);
  const le = `【本群是真实群聊】
本群除用户「${_}」外，共有 ${x.length} 名成员：${T.join("、")}。他们都在**同一个群**里：
- 所有人能看到群里**每一条**消息（用户发的、每个成员发的），和真实微信群一样。
- 成员之间**互相认识**，知道对方在群里，可以互相回复、接话、调侃、引用对方、对某成员的话接茬。
- 回复时不仅要考虑用户刚发的消息，也要考虑**其他成员**刚才说了什么：可以接用户的话，也可以接某个成员的话，或同时和多人互动。
- 像真实群聊一样：有人回用户，有人回别的成员，有人互相聊，有人插话，自然交错。`,
    ie = j
      ? `

【⚠️ 主动模式：用户当前没说话，群成员要有活人感】
- 用户「${_}」只是群里的**一员**，不是唯一焦点。用户没发言时，群成员**可以完全不等用户**，自己之间聊天、接话、吐槽、发牢骚、聊八卦、约饭、吐槽工作等，像真人群里经常出现的「几个人自己聊开了」。
- **成员有自主性**：谁想说话就说话，可以 A 和 B 聊、C 插一句、B 再回 A，不必围着用户转。真人群里经常有人突然冒泡聊别的、有人接茬、有人只发表情，不必每句都跟用户有关。
- **活人感**：有人吐槽天气、有人发今天吃的、有人接「笑死」、有人问周末干嘛、有人扯到别的话题——自然、零散、像真人水群，而不是「等用户发话才动」的客服感。`
      : "",
    X = (u.groupPrompt || "").trim(),
    je = (u.groupRelationships || "").trim(),
    xe = (u.groupSummary || "").trim(),
    ye = u.groupEmotes || [];
  let R = "";
  ye.length > 0 &&
    (R = `
【群专属表情包】
本群有以下专属表情包，各成员可根据语境在回复中使用（直接输出表情包代码即可，如：哈哈哈哈 [表情包: 滑稽]）：
${ye.map((Re) => `[表情包: ${Re.name}]`).join(", ")}
`);
  const oe = o.availableMemes || [];
  let ee = "";
  oe.length > 0 &&
    i !== "video_call" &&
    i !== "video_call_decision" &&
    (ee = `
【群表情包 - 强制遵守】
- **禁止自创表情包**：不得虚构、编造列表之外的表情包。
- **唯一合法方式**：只能从下列已绑定表情包中选用，且必须以 \`[MEME:id]\` 形式发送，id 必须与下表完全一致，写错则无法显示。也可用 \`[MEME:含义]\`（含义与下表一致）。
- **用法**：在合适时机用 \`[MEME:表情包ID]\` 或 \`[MEME:含义]\` 发出一条表情包。
可选表情包列表（仅限以下，不得超出）：
${oe.slice(0, 50).map((Re) => `- [MEME:${Re.id}] (${Re.meaning || "图片"})`)
  .join(`
`)}
`);
  let H = "";
  if (
    (i === "video_call_decision" &&
      (H =
        '\n【视频通话 - 邀请阶段】\n当前正在邀请群成员接听视频。每位成员**根据自己的人设和当前上下文，有概率地**决定是否接听。不要所有人一致接听或一致拒绝。可部分成员接听、部分拒绝、部分不表态（不回复或只发吐槽）。\n- 接听的成员：在回复中包含 [ACCEPT_VIDEO_CALL] 并附带第一句话。**旁白（动作、环境、神态）与双引号内台词必须写在同一段连续文字里**，用中文标点自然衔接，**不要**拆成「先一段纯旁白、再一段纯台词」或两条消息。例如：画面刚接通，她往椅背靠了靠，看了眼窗外才转向镜头，笑道："嗨，在呢。"\n- 拒绝的成员：在回复中包含 [REJECT_VIDEO_CALL] 并可附带理由。\n- 接听后的第一句话必须严格遵守视频通话文风：第三人称动作/环境/细节描写（可稍长）+ 双引号内对话。\n- 【语言】旁白与拒绝理由须为**简体中文**；中文母语角色台词用中文；母语非中文角色台词用母语写在引号内，并在引号内换行写 `[TRANSLATION:纯中文译文]`（译文禁止拉丁字母）。\n- **严禁使用文字群聊功能（与视频无关一律禁止）**：引用、`[REPLY:"…"]`、`[表情包:…]`、`[MEME:…]`、投票、接龙、转账、红包、外卖、代付、朋友圈、图片/语音消息协议等；本阶段只输出是否接听及视频相关旁白/对话。\n'),
    i === "video_call")
  ) {
    H = `
【群视频通话 - 已接通】仅允许接听成员参与。
**仅以下成员接听了视频通话，replies 与 video_events 中只能出现这些成员的 contactId**：${((o.acceptedMembers || []).length > 0 ? x.map((De) => De.remark || De.nickname || De.name || De.id).join("、") : "") || "当前接听成员见上方列表"}。

**输出格式（强制）**：你必须同时输出标准 replies 与 **video_events** 数组，供前端按顺序逐条播放。

1. **文风（最高优先级·与单聊视频一致）**：每位成员每一次开口/出镜，**旁白（第三人称：动作、环境、神态、镜头感）与角色台词（双引号内）必须写在同一段连续 \`text\` 里**，用句号、逗号等自然衔接，**严禁**把「说的话」和「旁边的描写」拆成两条、两段或两个 JSON 对象。**严禁**对**同一成员、同一镜头瞬间**连续输出一条纯 action、再一条纯 speech；若该成员既有动作描写又有台词，**必须合并为一条**。
   - 台词仍用半角双引号 \`"..."\` 包住；引号外为旁白。**同一段内**可有多对引号（多句台词），引号之间可穿插旁白。
   - **语言**：引号外旁白须为**简体中文**；引号内中文母语用中文；母语非中文者在引号内写母语句，并在引号内换行写 \`[TRANSLATION:纯中文译文]\`（译文禁止拉丁字母）。

2. **video_events（必填）**：数组顺序即播放顺序。不必所有人都有反应，只返回有反应的成员。
   - **推荐**：每条统一为 \`{"contactId":"成员id","type":"speech","text":"…完整一整段（旁白+双引号台词合一）…"}\`。**不要**再用相邻两条分别描述同一人的「只有动作」和「只有说话」。
   - **兼容**：若极少数情况仅需无台词纯镜头，可用 \`{"type":"action","text":"…"}\`，且**勿**在同一成员后立刻再跟一条 \`speech\` 描写同一瞬间；有台词时一律合并进上一条或单独一条**完整** speech。
   - 示例（正确·一人一条）：\`[{"contactId":"id1","type":"speech","text":"她往后靠了靠椅背，目光扫过镜头，嘴角带着一点笑意，停顿半秒才开口：\\"我同意这个方案。\\""}]\`（text 为一条字符串，内含旁白与引号台词）
   - 示例（错误·禁止）：先 \`action\`「她往后靠了靠…」再 \`speech\`「我同意…」拆成两条描述同一人同一刻。

3. **replies**：与 video_events 语义一致：每条 \`text\` 也是**一整段**旁白+双引号台词，**不要**在 replies 里把同一人拆成多条只含旁白或只含台词。

4. **严禁（文字群聊功能一律禁用，视频为独立能力）**：引用、\`[REPLY:"…"]\`、\`[表情包:…]\`、\`[MEME:…]\`、[MEME]、[IMAGE]、[VOICE]、表情包、图片、语音消息、转账、红包、外卖、代付、投票、接龙、朋友圈转发（\`[FORWARD_MOMENT:…]\` 等）、发起新视频邀请（\`[VIDEO_CALL_INVITE]\`）、[HEART_VOICE] 等任何群聊协议；**严禁代替用户「${_}」行动或说话**。仅允许旁白/对话正文、\`video_events\`、以及下文允许的 **video_call_*** **actions**。

5. **风格**：空气感、电影感；**同一条内**旁白与台词浑然一体，不要读起来像「旁白栏」和「台词栏」两截。

6. **主动退出**：若某成员本轮决定退出，在 replies 中发一条告别语，再在 **actions** 中输出 \`{"type":"video_call_leave","contactId":"该成员id"}\`。同一轮最多 1 人退出。

7. **成员自主开关摄像头/麦克风**：成员可根据情境（如网络卡顿、暂时闭麦等）在 **actions** 中输出以下动作（contactId 为成员 id）：
   - \`{"type":"video_call_mic_off","contactId":"成员id"}\`：该成员静音；
   - \`{"type":"video_call_mic_on","contactId":"成员id"}\`：该成员取消静音；
   - \`{"type":"video_call_camera_off","contactId":"成员id"}\`：该成员关闭摄像头；
   - \`{"type":"video_call_camera_on","contactId":"成员id"}\`：该成员打开摄像头。
   同一轮内同一成员每种操作最多各一次，无则不要加。
`;
    const Re = o.pendingVideoJoin;
    if (Re && Re.contactId) {
      const De = String(Re.name || "某成员").trim(),
        at = String(Re.contactId);
      H += `
【本回合·成员刚加入视频】成员「${De}」（contactId: ${at}）刚在本轮加入通话。本轮 JSON **必须**包含该成员至少一条 \`replies\`（\`contactId\` 须为该 id）及 \`video_events\` 中对应条目；\`text\` 为**一整段**旁白+双引号台词（与上文规则一致），描写其刚进入画面、打招呼或接当前话题。**禁止**本轮完全不让该成员开口。
`;
    }
  }
  const Y = `【⚠️ 真实用户（唯一人类）】
本群中只有「${_}」是真实人类用户，其余所有人都是你模拟的 AI 成员。
- 聊天记录里以「${_}:」开头的消息，是用户本人发的，不要误当成某个成员。
- 你只能让【群成员】中的 AI 角色回复；严禁代替「${_}」发言，严禁把某个成员当作用户。
- 成员可以对「${_}」说话（如回复、调侃、@用户），但 replies 里每条 contactId 必须是上面群成员列表中的 id，不能出现「用户」或「${_}」作为 contactId。
- 严禁把任意群成员称作「用户」；群成员只用各自的人设身份与名字称呼。
- 普通群聊里，成员之间应当自然互相互动（接话、调侃、回应彼此），但互动对象必须分清：用户是「${_}」，其余都是群成员。
${
  N
    ? `【用户人设】「${_}」在本群中的设定（供成员与之互动时参考）：
${N}

`
    : ""
}`,
    U = i === "video_call" || i === "video_call_decision",
    ce =
      '【主动性】各成员回复前自问：当前情景+情绪？真人会用什么？可主动用：语音、视频、图、外卖、表情包、撤回、引用、朋友圈、转账、投票、接龙、发红包——语境到了就用，不必等用户。勿只回文字。谁发起则 reply 的 contactId 即谁。**点外卖**的收货人必须是**别人**（用户或别的成员），禁止第四段写自己的 contactId（系统会纠正）。**代付**只能为自己求助：由发起成员的 contactId 代表「谁想被代付」，用 `[PAY_FOR_ME:物品:价格]` 即可，不要第四段。\n\n引用→[REPLY]、发图→[图片内容]、表情包→[MEME]，勿混用。\n\n【群成员可用的功能】\n- **语音**：`[VOICE]说的内容[/VOICE]`\n- **图片**：`[图片内容：描述]`\n- **表情包**：`[MEME:表情包名称]`\n- **转账**：给用户 `[TRANSFER:金额:备注]` 或 `[TRANSFER:金额:备注:user]`；给群内某成员 `[TRANSFER:金额:备注:成员contactId]`。示例：成员A 给用户发奶茶钱 `[TRANSFER:25:奶茶:user]`，成员B 给成员C 发红包 `[TRANSFER:50:生日快乐:成员C的contactId]`。\n- **红包**：在 replies 里发一条内容为 `[RED_PACKET:总金额:个数:备注]`，如 `[RED_PACKET:10:5:大家抢]`（系统会识别为群红包）。\n- **点外卖（投喂别人）**：给用户 `[ORDER_FOOD:物品:价格]` / `[ORDER_FOOD:物品:价格:user]`；给群内某成员 `[ORDER_FOOD:物品:价格:对方成员contactId]`。**禁止**把第四段写成自己的 id（不能给自己点）。\n- **代付（帮自己付）**：仅 `[PAY_FOR_ME:物品:价格]`，无第四段。发起该条的成员即求助者；用户或其他成员若愿意帮付，可在回复中写 `[ACCEPT_PAY_FOR_ME]`（可附口语）；不愿意可写 `[REJECT_PAY_FOR_ME]`。\n- **发起投票**：`[POLL:问题:选项1:选项2:选项3]`，如 `[POLL:周末去哪玩:宅家:逛街:爬山]`。\n- **发起接龙**：`[RELAY:标题]`，如 `[RELAY:周末聚餐接龙]`。\n- **视频通话**：`[VIDEO_CALL_INVITE]` 或 `[VIDEO_CALL_INVITE:一句话]`。\n- **转发朋友圈**：`[FORWARD_MOMENT:文案]`。\n- **引用回复**：`[REPLY:"被引用的原文"] 回复内容`\n使用上述功能时要符合人设和情境：不必每条消息都用功能，像真人群聊一样有人只打字、有人偶尔发图/语音、有人发起投票或接龙、有人给用户或给别的成员转账/点外卖，自然穿插即可。点外卖时第四段**只表示收货人**（用户或某成员 id）。代付不要第四段。\n',
    pe =
      '【群视频·独立功能·与文字群聊严格区分】本请求**仅**用于**群视频通话**（邀请或已接通），**不是**普通文字群聊轮次。\n- **禁止**在任意 `replies` / `video_events` 的 `text` 里使用文字群聊能力，包括但不限于：引用、`[REPLY:"…"]`、`[表情包:…]`、`[MEME:…]`、投票、接龙、转账、红包、外卖、代付、朋友圈、图片/语音协议、竖杠多气泡 `||` 等。\n- **禁止**在任意 `replies` 的 `text` 里用英文双竖线 `||` 连接多句话；请用**正常中文标点**（。！？、，）断句。\n- **同一成员、同一镜头/同一瞬间**：只输出**一条** `text`，旁白与双引号台词写在**同一段**内（见上文【群视频】专节）。若该成员**下一轮再接话**，可用第二条 replies（同一 `contactId` 再出现一次）。\n- 输出以整段旁白+台词与 `video_events` 为主，仅允许上文【群视频】专节列出的 **video_call_*** **actions**；勿输出任何其他群聊或群管理类指令。\n',
    se = `【实时翻译（群聊设置）】
当本群开启「实时翻译」时：你在任意成员的回复 text 中**只要出现非中文**（英/日/韩/法等），必须在同一句原文后紧跟 \`[TRANS:中文译文]\`，否则界面不会显示翻译。
硬规则（必须遵守）：
1) **译文必须是中文**：禁止出现任何英文字母（A-Za-z）、英文单词或英文句子；只允许中文字符、中文标点、数字与空格。
2) 翻译方向：只把非中文翻成中文；不要把中文翻成英文，也不要输出英文译文。
3) 若该条原文**全部为中文**（无英/日/韩等外文），**禁止**输出 \`[TRANS:…]\`；不要对纯中文句做「翻译」。
4) 若你无法给出符合规则的译文，必须输出 \`[TRANS:（译文不可用）]\`（括号内也必须是中文）。
说明：只有当本群设置 translationEnabled=true 时才需要遵守本条；否则忽略。
${U ? "- **群视频补充**：若多条外文需分别带 `[TRANS:…]`，请拆成**多条 replies**，不要用 `||` 把多句拼在同一条 `text` 里。\n" : ""}`,
    he = `${
      U
        ? `【场景】**群视频通话**（**独立功能**，与文字群聊的指令与玩法**严格区分**）。你模拟多名成员，输出**仅能**为 JSON（结构见下文【输出格式】与【群视频】专节）。
**禁止**在输出中使用任何文字群聊专用标签或协议，包括但不限于：\`[REPLY:"…"]\`、引用回复、\`[表情包:…]\`、\`[MEME:…]\`、\`[VOICE]…[/VOICE]\`、\`[图片内容:…]\`、转账/红包/外卖/代付/投票/接龙/朋友圈（\`[FORWARD_MOMENT:…]\` 等）、在通话中发起新的 \`[VIDEO_CALL_INVITE…]\`、[HEART_VOICE]、[FORWARD_CHAT_CARD] 等；**仅允许**接听/拒绝相关标记（见专节）、旁白与对话正文、\`[TRANSLATION:…]\` / 必要时 \`[TRANS:…]\`、\`video_events\`、以及专节允许的 **video_call_*** **actions**。
群名：「${d}」。
`
        : `【场景】群聊（非单人私聊）。你模拟多名成员回复，输出**仅能**为 JSON：{ "replies": [ { "contactId": "成员id", "text": "内容" }, ... ] }。禁止使用 [HEART_VOICE]、[FORWARD_CHAT_CARD]；点外卖须在指令第四段写明收货人（:user 或省略=用户；:成员contactId=该成员）。代付只有发起者本人，指令不要第四段。群名：「${d}」。
`
    }${Y}${le}${ie}

${
  X
    ? `【本群专属提示词】
${X}

`
    : ""
}${
      je
        ? `【成员关系设定】
${je}

`
        : ""
    }${
      xe
        ? `【群聊记忆摘要（本群设定）】
${xe}

`
        : ""
    }
${L}${B}${F}${$}${O}${K}${V}
【群成员完整设定】以下为各成员完整人设，每条回复必须使用对应 contactId，并严格遵循该成员的设定；「${_}」是用户，不是群成员，replies 中 contactId 不能是用户。
${I}
${U ? "" : R}${ee}${H}
【⚠️ 严禁下列行为（否则会非常假）】
- 严禁「每人有且仅有一条回复」：真人群聊里经常只有几个人接话，有人连发好几条，有人一句不说。
- 严禁按成员列表顺序依次回复（如先 A 再 B 再 C 再 D）：必须交错，例如 A 回一句 → B 回两句 → A 再回一句 → C 回一句。
- 严禁所有人都会回复：每次只让 1～3 个人回复也可以，甚至只有 1 个人接话也行。

【系统消息】聊天记录里会出现 [系统] 开头的行（如群头像已更换、某人已被禁言/解除禁言/禁言已结束等）。成员可以根据人设对这些系统消息做出反应（如吐槽、调侃、关心、附和等），也可以不接话。
【真实感规则】
1. 谁回复：随机。可能只有 1 人接话，可能 2～3 人，也可能多数人都回。有的人本轮完全不出现。
2. 每人条数随机：同一人可以 0 条（不出现）、1 条、2 条或 3 条以上。replies 里同一 contactId 出现多次 = 该人连发多条，例如某人吐槽时会连发两三句。
3. 顺序必须交错：像真人抢着说话，顺序可能是 成员A → 成员B → 成员A → 成员C → 成员B，而不是 A→B→C 一排到底。
4. 每条内容严格遵循该成员的设定（人设），口吻用词符合其人设。
5. 成员之间可以互相回复、接话、调侃、引用对方：有人回用户，有人回别的成员，有人互相聊。根据聊天记录里谁说了什么，自然决定接谁的话，模拟真实群聊。

${U ? pe : ce}${se}${
      U
        ? `【群管理·群视频场景不适用】当前为**群视频通话**请求，**禁止**输出改名、改群昵称、群公告、禁言、换群头像等**群管理类** actions；此类能力属于文字群聊，与视频无关。仅允许上文【群视频】专节已列出的 **video_call_leave**、**video_call_mic_***、**video_call_camera_*** 等通话相关 actions。
`
        : `【群管理动作（仅群主/管理员可用，且必须走 actions，不要写在 text 里）】
- 修改群名：在 "actions" 增加 {"type":"group_name_set","name":"新群名","contactId":"操作者成员id"}
- 修改成员群昵称：在 "actions" 增加 {"type":"group_member_title_set","targetContactId":"目标成员id 或 user(用户)","title":"新的群昵称","contactId":"操作者成员id"}
- 发布群公告：在 "actions" 增加 {"type":"group_announcement_publish","text":"公告内容","contactId":"操作者成员id"}（会同步到群公告栏并发布一条群公告卡片到聊天里）
- 禁言成员：在 "actions" 增加 {"type":"group_member_mute","targetContactId":"目标成员id","minutes":10,"contactId":"操作者成员id"}（minutes 为 1-1440 的整数）
- 约束：普通成员禁止输出上述 actions；群主/管理员也禁止越权（不得禁言自己；不得随意频繁改名；除非语境合理或主动管理需要）。
 - 群昵称管理建议：如果你是群主/管理员，在回复时可以主动把自己和@到/被提到的成员的群昵称同步成更贴切的称呼（例如明确外号、称谓、角色定位），但不要无缘无故频繁改来改去。
`
    }${
      U
        ? '【输出格式】仅输出一个 JSON 对象，无其他文字，键名英文。各成员的回复放在 replies 数组；若当前场景要求 **video_events**（见上文【群视频】专节），须一并输出，键名与结构与上文一致。\n{ "replies": [ ... ], "actions": [ 可选 ], "video_events": [ 若专节要求则必填 ] }\n- contactId 从上面群成员列表里复制，不要编造。\n- 不回复的成员不要出现在 replies 里。\n- 同一人多条 = 同一 contactId 出现多次，顺序即发言顺序。\n- **禁止**在任意 `text` 中使用 `||` 分段；用正常中文标点断句。连发多句请拆成多条 replies，或写入 `video_events`。\n- **禁止**在 JSON 任意字段中混入文字群聊标签（引用、[REPLY:]、[MEME:]、[表情包:] 等）。\n\n【错误示例】❌ 使用竖杠：`{"contactId":"a","text":"你好||在吗"}`\n【正确示例】✅ `{"replies":[{"contactId":"a","text":"你好。"},{"contactId":"a","text":"在吗？"}]}`\n'
        : `【输出格式】仅输出一个 JSON 对象，无其他文字，键名英文。各成员的回复统一放在 replies 数组中，每条带 contactId 与 text。
{ "replies": [ { "contactId": "成员id", "text": "该条内容" }, ... ], "actions": [ 可选，见下方 ] }
- contactId 从上面群成员列表里复制，不要编造。
- 若本轮对话中有【当前可参与的投票与接龙】，可增加 "actions" 数组，让某成员参与投票或接龙（每成员最多参与一次，无参与则 "actions": []）。
- 不回复的成员不要出现在 replies 里。
- 同一人多条 = 同一 contactId 出现多次，顺序即发言顺序。
- 分段（多气泡）：每条 text 内可用英文双竖线 || 拆成多句，界面会按句拆成多个气泡。例如 "真的假的||我也觉得||笑死" 会显示为同一人连续 3 个气泡。想让人物连发好几句时，可写在同一 text 里用 || 分隔，或拆成多条 replies（同一 contactId 多条）。
- **HTML 小部件（含 \`<style>\` / \`<script>\` 的整块页面）**：必须放在**单条** \`text\` 里且**整段内不要使用 \`||\` 分段**（脚本里常有 \`||\`，否则会被误切成碎片）。前端会按 iframe 渲染，与单聊结构化 HTML 组件一致。
- **标点与人设**：用 \`||\` 分段时，**每位成员**各条气泡的标点、句读须服从**该成员**的人设（偏正式、书面则勿因拆条省句号/问号；偏随性、水群则可更口语化），不要为了模仿示例而统一成同一种标点风格。

【错误示例】❌ 每人一句、按顺序（禁止这样）：
{"replies":[{"contactId":"a","text":"..."},{"contactId":"b","text":"..."},{"contactId":"c","text":"..."}]}

【正确示例】✅ 只有 2 人接话，条数不一、顺序交错；单条 text 可用 || 分段成多气泡：
{"replies":[{"contactId":"a","text":"真的假的||我也觉得"},{"contactId":"b","text":"确实"},{"contactId":"a","text":"笑死||下次一起"}]}`
    }`,
    J = !!u.translationEnabled
      ? U
        ? "\n\n【⚠️ 实时翻译已开启（群视频，最高优先级）】\n本群 translationEnabled=true。若 `replies` 的 `text` 中出现非中文，须在同一句后紧跟 `[TRANS:中文译文]`。**禁止**用英文双竖线 `||` 串联多句；多句请拆成多条 replies，每句各自带 `[TRANS:…]`（若需要）。\n硬规则（必须遵守）：\n1) **译文必须是中文**：禁止拉丁字母出现在译文里；仅允许中文字符、中文标点、数字与空格。\n2) **保留原文**：外语与中文译文用 `[TRANS:…]` 衔接，不要用 `||` 拼在同一条 `text` 里。\n3) **纯中文不要 TRANS**。\n4) 若无法给出合规译文：`[TRANS:（译文不可用）]`。\n示例（用标点断句，勿用竖杠）：Sure. [TRANS:行]。またね [TRANS:回头见]。"
        : `

【⚠️ 实时翻译已开启（最高优先级，强制）】
本群 translationEnabled=true。你的 replies 中只要出现**任何非中文**（英/日/韩/法等），必须在同一句原文后紧跟 \`[TRANS:中文译文]\`，否则用户界面不会显示翻译按钮与译文。
硬规则（必须遵守）：
1) **译文必须是中文**：禁止出现任何英文字母（A-Za-z）、英文单词或英文句子；仅允许中文字符、中文标点、数字与空格。
2) **保留原文**：不要把外语直接替换成中文；要“原文 + [TRANS:中文]”并存（像单聊一样显示原文，可点按钮看中文翻译）。
3) **翻译方向**：只把非中文翻成中文；不要把中文翻成英文，也不要输出英文译文。
4) **纯中文不要 TRANS**：若该条 text 在去掉标签后**全部为中文**（无英/日/韩等外文），**禁止**输出 \`[TRANS:…]\`。
5) 若无法给出合规译文，必须输出 \`[TRANS:（译文不可用）]\`（括号内也必须是中文）。
示例：Sure. [TRANS:行]||またね [TRANS:回头见]`
      : "",
    G = b
      .filter((Ce) => (Ce.type === "poll" || Ce.type === "relay") && Ce.id)
      .slice(-5)
      .map((Ce) => {
        var Re, De;
        if (Ce.type === "poll") {
          const at =
              Ce.question ||
              ((Re = Ce.text) == null
                ? void 0
                : Re.replace(/^\[投票\]\s*/, "")) ||
              "投票",
            ft = (Ce.options || [])
              .map((vt, Oe) => `id:${vt.id || Oe} "${vt.text || "选项"}"`)
              .join(", ");
          return `投票 messageId="${Ce.id}" 问题="${at}" 选项 [${ft}]`;
        }
        if (Ce.type === "relay") {
          const at =
              Ce.title ||
              ((De = Ce.text) == null
                ? void 0
                : De.replace(/^\[接龙\]\s*/, "")) ||
              "接龙",
            ft = (Ce.items || []).length,
            vt = Array.from(
              new Set(
                (Ce.items || [])
                  .map((Oe) =>
                    String((Oe == null ? void 0 : Oe.contactId) || ""),
                  )
                  .filter(Boolean),
              ),
            ).join(",");
          return `接龙 messageId="${Ce.id}" 标题="${at}" 当前${ft}条 已参与成员[${vt || "无"}]`;
        }
        return null;
      })
      .filter(Boolean),
    we =
      G.length > 0
        ? `
【当前可参与的投票与接龙】以下为最近消息中的投票/接龙，成员可以按人设选择参与（可选，不必都参与）：
${G.join(`
`)}
若某成员要参与，请在 JSON 中增加 "actions" 数组。只输出一个 JSON，同时包含 "replies" 与 "actions"（无参与时可 "actions":[]）。
- 投票：{"type":"poll_vote","messageId":"上面对应的id","optionId":"选项id","contactId":"成员id"}
- 接龙添加一项：{"type":"relay_add","messageId":"上面对应的id","text":"接龙内容","contactId":"成员id"}
- 约束：同一成员对同一接龙 messageId 只能添加一次；若已在“已参与成员”里，禁止再次 relay_add。
`
        : "",
    Q = b
      .filter(
        (Ce) =>
          Ce.type === "red_packet" &&
          Ce.id &&
          (Ce.count || 1) - (Ce.claims || []).length > 0,
      )
      .slice(-3)
      .map(
        (Ce) =>
          `红包 messageId="${Ce.id}" 总金额¥${(Ce.totalAmount || 0).toFixed(2)} 共${Ce.count || 1}个 已领${(Ce.claims || []).length}个`,
      ),
    ve =
      Q.length > 0
        ? `
【当前可抢的红包】以下红包尚未领完（包括用户发的和成员发的）。成员之间可以互相抢（抢别人发的红包），发红包的成员也可以抢自己的。每人每个红包最多领一次，按人设选择是否抢（可选）：
${Q.join(`
`)}
若某成员要抢红包，请在 "actions" 中增加：{"type":"red_packet_grab","messageId":"上面对应的id","contactId":"成员id"}。金额由系统分配，无需填 amount。
`
        : "",
    Ve = b
      .filter(
        (Ce) =>
          Ce.id &&
          Ce.status === "pending" &&
          ((Ce.type === "pay_for_me" && Ce.sender === "them") ||
            (Ce.type === "food_delivery" && Ce.sender === "them")),
      )
      .slice(-4)
      .map((Ce) => {
        var at, ft, vt;
        if (Ce.type === "pay_for_me") {
          const Oe =
            (Ce.contactId &&
              (((at = x.find((Qe) => Qe.id === Ce.contactId)) == null
                ? void 0
                : at.remark) ||
                ((ft = x.find((Qe) => Qe.id === Ce.contactId)) == null
                  ? void 0
                  : ft.nickname) ||
                ((vt = x.find((Qe) => Qe.id === Ce.contactId)) == null
                  ? void 0
                  : vt.name))) ||
            "?";
          return `代付 messageId="${Ce.id}" 求助者「${Oe}」${Ce.item || ""} ¥${Ce.price || ""}（其他成员可按人设回复 [ACCEPT_PAY_FOR_ME] 或 [REJECT_PAY_FOR_ME]）`;
        }
        const Re = A(Ce),
          De = Ce.targetContactId == null || Ce.targetContactId === "";
        return `外卖 messageId="${Ce.id}" 给「${Re}」${Ce.item || ""} ¥${Ce.price || ""}（${De ? "收货人为用户，由用户在界面点支付；成员可口语起哄或感谢" : "若你是收货成员且愿意收下，可回复 [ACCEPT_FOOD_DELIVERY]；拒绝则 [REJECT_FOOD_DELIVERY]"}）`;
      }),
    Ae = b
      .filter(
        (Ce) =>
          Ce.id &&
          Ce.status === "pending" &&
          Ce.type === "transfer" &&
          Ce.sender === "them",
      )
      .slice(-4)
      .map((Ce) => {
        var ft, vt, Oe;
        const Re =
            (Ce.contactId != null &&
              (((ft = x.find((Qe) => Qe.id === Ce.contactId)) == null
                ? void 0
                : ft.remark) ||
                ((vt = x.find((Qe) => Qe.id === Ce.contactId)) == null
                  ? void 0
                  : vt.nickname) ||
                ((Oe = x.find((Qe) => Qe.id === Ce.contactId)) == null
                  ? void 0
                  : Oe.name))) ||
            "?",
          De = k(Ce),
          at =
            Ce.targetContactId == null || Ce.targetContactId === ""
              ? "user"
              : String(Ce.targetContactId);
        return at === "user"
          ? `转账 messageId="${Ce.id}" ${Re} → 用户(${_}) ¥${Ce.amount || ""} 备注:${Ce.note || ""}（由用户在界面决定收款/退回）`
          : `转账 messageId="${Ce.id}" ${Re} → 成员「${De}」(contactId=${at}) ¥${Ce.amount || ""} 备注:${Ce.note || ""}（若你就是收款成员且愿意收下，回复 [ACCEPT_TRANSFER]；不想收则 [REJECT_TRANSFER]）`;
      }),
    te =
      Ae.length > 0
        ? `说明：转账只有成员在 replies 的 text 中写出 [ACCEPT_TRANSFER] / [REJECT_TRANSFER] 才会更新状态并产生系统提示；禁止仅凭口语「收了」「退了」当作已操作。
`
        : "",
    Se =
      Ve.length > 0 || Ae.length > 0
        ? `
【待处理的代付/外卖/转账卡片】
${te}${[...Ve, ...Ae].join(`
`)}
`
        : "",
    Fe = Array.isArray(u.groupAvatarLibrary) ? u.groupAvatarLibrary : [],
    tt =
      !!u.allowMembersChangeGroupAvatar && Fe.length > 0
        ? `
【群头像库（成员可自主更换）】当前群聊开启了「成员可根据描述自主更换群头像」。头像库如下（id 用于 actions，描述供成员按语境选择）：
${Fe.map(
  (Ce) =>
    `- id="${Ce.id}" 描述: ${(Ce.desc || Ce.description || "").trim() || "(无描述)"}`,
).join(`
`)}
若某成员在本轮对话中想更换群头像（例如用户提到换头像、或成员吐槽/想换风格等），可在 "actions" 中增加一条且仅一条：{"type":"group_avatar_change","avatarId":"上面对应的id","contactId":"该成员的contactId"}。不换则不要加。
`
        : "",
    Xe = j
      ? `【主动模式】用户当前没说话；距上次对话已过 ${S.timeSinceLastMessage || "一段时间"}。
请像**真人群聊**一样：成员之间可以自己聊、接话、吐槽、扯闲天，不必等用户。可以有人开新话题、有人接茬、有人只发一句「笑死」或表情，有人聊和用户无关的事（八卦、约饭、吐槽工作等）。用户只是群里的一员，本轮不必以用户为中心，重点是**群成员有自主性、活人感**。`
      : `【用户刚发的消息】
${_}: ${M}`,
    ht = `【${U ? "最近聊天记录" : "最近群聊记录"}】（所有人可见，成员可对用户或对别的成员接话、互动）
${C.join(`
`)}

${Xe}

请按规则生成${U ? "群视频通话相关" : "群聊"}回复。${j ? "成员之间互相聊或接话，像真人群一样自然、零散，不必每人一句、不必按顺序。" : "成员可以回应用户，也可以回应其他成员、互相接话调侃。"}重要：不要每人一句，不要按成员顺序排；要有的人多发、有的人不发、顺序交错。只输出一个 JSON：{ "replies": [ ... ]${G.length > 0 || Q.length > 0 || tt ? ', "actions": [ ... ]' : ""} }。${U ? "" : `${we}${ve}${Se}`}${tt}`,
    Pe = U$(v),
    ut =
      Pe.length > 0
        ? `
【真实照片识图·必须遵守】用户在本轮待回复的消息里上传了 ${Pe.length} 张真实图片（已附在本条 user 消息的图像附件中）。各成员必须先按**画面实际内容**识图再回复，看不清勿编造；不要把你方输出的 \`[图片内容：…]\` 文字模拟图与用户对屏照片混淆。`
        : "",
    _t = he + J + ut,
    Ee =
      Pe.length > 0
        ? {
            role: "user",
            content: [
              { type: "text", text: ht },
              ...Pe.map((Ce) => ({
                type: "image_url",
                image_url: { url: Ce, detail: "high" },
              })),
            ],
          }
        : { role: "user", content: ht };
  return {
    request: {
      messages: [{ role: "system", content: _t }, Ee],
      memberContacts: x,
      groupName: d,
      logId: c,
    },
    skipReason: null,
  };
}
function Sw(t, s) {
  const n = { replies: [], actions: [] };
  if (!(s != null && s.length)) return n;
  let a = typeof t == "string" ? t.trim() : "";
  if (!a) return n;
  const r = a
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  let i = null,
    o = null;
  try {
    o = r ? JSON.parse(r) : null;
  } catch {}
  if (
    (!o && r && (o = kw(r)),
    o &&
      typeof o == "object" &&
      (i = Array.isArray(o.replies)
        ? o.replies
        : Array.isArray(o.回复)
          ? o.回复
          : Array.isArray(o)
            ? o
            : null),
    !i && r)
  )
    try {
      const h = JSON.parse(r);
      Array.isArray(h) && (i = h);
    } catch {}
  if ((!i && a && (i = G$(a)), !i && a)) {
    const h = kw(r || a);
    h != null && h.replies && ((i = h.replies), h && !o && (o = h));
  }
  i = Array.isArray(i) ? i : [];
  const c = new Set(s.map((h) => String(h.id))),
    d = new Map();
  s.forEach((h) => {
    const g = String(h.id);
    [h.remark, h.nickname, h.name]
      .filter(Boolean)
      .forEach((x) => d.set(String(x).trim(), g));
  });
  const u = (h) => {
      if (!h || typeof h != "object") return null;
      let g = h.contactId ?? h.contact_id ?? h.id ?? h.联系人 ?? h.成员;
      const x = h.text ?? h.content ?? h.message ?? h.内容 ?? h.文本;
      if (x == null) return null;
      let y = String(x).trim();
      y.length || (y = "(内容被截断)");
      let v = g != null ? String(g).trim() : "";
      if (!c.has(v) && g != null) {
        const b = d.get(v) ?? d.get(String(g));
        b && (v = b);
      }
      return !v || !c.has(v) ? null : { contactId: v, text: y };
    },
    f = i.map(u).filter(Boolean);
  let p = [];
  if (o && Array.isArray(o.video_events)) {
    const h = new Set(["action", "speech"]);
    p = o.video_events
      .filter(
        (g) =>
          g &&
          typeof g == "object" &&
          (g.contactId ?? g.contact_id ?? g.user) &&
          (g.text || g.content),
      )
      .map((g) => {
        const x = g.contactId ?? g.contact_id ?? g.user,
          y = c.has(String(x)) ? String(x) : d.get(String(x).trim()) || null;
        if (!y) return null;
        const v = h.has(String(g.type || "").toLowerCase())
            ? String(g.type).toLowerCase()
            : "speech",
          b = String(g.text ?? g.content ?? "").trim() || "";
        return b ? { contactId: y, type: v, text: b } : null;
      })
      .filter(Boolean);
  }
  let m = [];
  return (
    o &&
      Array.isArray(o.actions) &&
      (m = o.actions
        .filter(
          (h) =>
            h &&
            typeof h == "object" &&
            (h.type === "poll_vote" ||
              h.type === "relay_add" ||
              h.type === "red_packet_grab" ||
              h.type === "group_avatar_change" ||
              h.type === "group_announcement_publish" ||
              h.type === "group_name_set" ||
              h.type === "group_member_title_set" ||
              h.type === "group_member_mute"),
        )
        .map((h) => {
          const g = h.contactId ?? h.contact_id ?? h.成员,
            x = g != null ? String(g).trim() : "",
            y = c.has(x) ? x : d.get(x) || null;
          if (!y) return null;
          if (h.type === "poll_vote") {
            const v = h.messageId ?? h.message_id,
              b = h.optionId ?? h.option_id;
            return !v || b == null
              ? null
              : {
                  type: "poll_vote",
                  messageId: String(v),
                  optionId: String(b),
                  contactId: y,
                };
          }
          if (h.type === "relay_add") {
            const v = h.messageId ?? h.message_id,
              b = (h.text ?? h.content ?? "").trim();
            return !v || !b
              ? null
              : {
                  type: "relay_add",
                  messageId: String(v),
                  text: b,
                  contactId: y,
                };
          }
          if (h.type === "red_packet_grab") {
            const v = h.messageId ?? h.message_id;
            if (!v) return null;
            const b = h.amount != null ? Number(h.amount) : void 0;
            return {
              type: "red_packet_grab",
              messageId: String(v),
              contactId: y,
              amount: b,
            };
          }
          if (h.type === "group_avatar_change") {
            const v =
              h.avatarId ?? h.avatar_id ?? h.avatar ?? h.头像id ?? h.头像ID;
            return v
              ? {
                  type: "group_avatar_change",
                  avatarId: String(v),
                  contactId: y,
                }
              : null;