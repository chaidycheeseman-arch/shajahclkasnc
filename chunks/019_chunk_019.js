                songInfo: s,
                isHovered: d,
                onClose: a,
                isPlaying: r,
              }),
            i === 4 &&
              e.jsx(cO, { text: t, songInfo: s, isHovered: d, onClose: a }),
            i === 5 &&
              e.jsx(dO, { text: t, songInfo: s, isHovered: d, onClose: a }),
            p &&
              e.jsxs("div", {
                className: "relative w-[400px] h-[200px]",
                children: [
                  e.jsx("style", {
                    children: `
              #floating-${p.id} {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
              }
              ${p.css}
            `,
                  }),
                  e.jsx("div", {
                    id: `floating-${p.id}`,
                    dangerouslySetInnerHTML: {
                      __html: p.html.replace(
                        /{{text}}/g,
                        t || (s == null ? void 0 : s.title) || "Music",
                      ),
                    },
                  }),
                  e.jsx(Os, {
                    children:
                      d &&
                      e.jsx(We.button, {
                        initial: { opacity: 0, scale: 0.8 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.8 },
                        onClick: (m) => {
                          (m.stopPropagation(), a());
                        },
                        onPointerDown: (m) => m.stopPropagation(),
                        className:
                          "absolute -top-3 -right-3 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-black z-50",
                        children: e.jsx(Ts, { size: 12 }),
                      }),
                  }),
                ],
              }),
          ],
        }),
        e.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400&family=Tenor+Sans&display=swap');
        .font-serif { font-family: 'Noto Serif KR', serif; }
        .font-mono { font-family: 'Tenor Sans', sans-serif; }
      `,
          },
        }),
      ],
    });
  };
function Av() {
  if (typeof navigator > "u") return !1;
  const t = navigator.userAgent || "";
  return /iPad|iPhone|iPod/i.test(t)
    ? !0
    : navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function w0() {
  if (typeof navigator > "u" || Av()) return !1;
  const t = navigator.userAgent || "";
  return /^((?!chrome|android|crios|fxios|edgios|opr\/|edg\/|micromessenger).)*safari/i.test(
    t,
  );
}
function fO() {
  if (Av()) return !0;
  if (typeof navigator > "u") return !1;
  const t = navigator.userAgent || "";
  return /^((?!chrome|android|crios|fxios|edgios|opr\/|edg\/|micromessenger).)*safari/i.test(
    t,
  );
}
function mO(t, s, n) {
  const a = document.createElement("div");
  (a.setAttribute("role", "dialog"),
    a.setAttribute("aria-modal", "true"),
    (a.style.cssText = [
      "position:fixed",
      "inset:0",
      "z-index:2147483647",
      "background:rgba(0,0,0,.5)",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "padding:20px",
      "box-sizing:border-box",
    ].join(";")));
  const r = document.createElement("div");
  r.style.cssText = [
    "background:#fff",
    "border-radius:14px",
    "padding:22px 20px",
    "max-width:360px",
    "width:100%",
    "text-align:center",
    "font-family:-apple-system,BlinkMacSystemFont,system-ui,sans-serif",
    "box-shadow:0 12px 40px rgba(0,0,0,.2)",
  ].join(";");
  const i = document.createElement("p");
  ((i.textContent = "备份已准备好"),
    (i.style.cssText =
      "margin:0 0 8px;font-size:18px;font-weight:600;color:#111;"));
  const o = document.createElement("p");
  ((o.textContent =
    "轻触下方按钮。若未自动保存，请在打开方式中选「存储到文件」，或通过分享发送到微信等。"),
    (o.style.cssText =
      "margin:0 0 18px;font-size:14px;color:#555;line-height:1.45;"));
  const c = document.createElement("a");
  ((c.href = t),
    (c.download = s),
    c.setAttribute("download", s),
    (c.textContent = "保存「" + s + "」"),
    (c.style.cssText = [
      "display:block",
      "padding:14px 16px",
      "background:#111",
      "color:#fff",
      "border-radius:10px",
      "text-decoration:none",
      "font-size:15px",
      "font-weight:600",
      "word-break:break-all",
    ].join(";")));
  const d = document.createElement("button");
  ((d.type = "button"),
    (d.textContent = "关闭"),
    (d.style.cssText =
      "margin-top:14px;padding:10px 16px;font-size:15px;color:#666;background:transparent;border:none;width:100%;"));
  let u = !1;
  const f = () => {
    if (!u) {
      u = !0;
      try {
        document.body.removeChild(a);
      } catch {}
      try {
        n();
      } catch {}
    }
  };
  (d.addEventListener("click", f),
    a.addEventListener("click", (p) => {
      p.target === a && f();
    }),
    c.addEventListener("click", () => {
      setTimeout(f, 3e3);
    }),
    r.appendChild(i),
    r.appendChild(o),
    r.appendChild(c),
    r.appendChild(d),
    a.appendChild(r),
    document.body.appendChild(a));
}
function ym(t, s, n = {}) {
  const { iosBlankWindow: a = null } = n,
    r = URL.createObjectURL(t),
    i = (o) => {
      setTimeout(() => {
        try {
          URL.revokeObjectURL(r);
        } catch {}
      }, o);
    };
  if (Av()) {
    (async () => {
      try {
        a && !a.closed && a.close();
      } catch {}
      try {
        if (typeof navigator < "u" && navigator.share && navigator.canShare) {
          const o = new File([t], s, {
            type: t.type || "application/octet-stream",
          });
          if (navigator.canShare({ files: [o] })) {
            (await navigator.share({ files: [o], title: s }), i(0));
            return;
          }
        }
      } catch (o) {
        o && o.name;
      }
      mO(r, s, () => i(0));
    })();
    return;
  }
  if (a && !a.closed)
    try {
      ((a.location.href = r), i(12e4));
      return;
    } catch {}
  if (fO()) {
    if (window.open(r, "_blank", "noopener,noreferrer")) {
      i(12e4);
      return;
    }
    (alert(
      "无法打开新标签页。请关闭弹窗拦截后重试；或在浏览器设置中允许本站打开新标签页后再导出。",
    ),
      i(0));
    return;
  }
  try {
    const o = document.createElement("a");
    ((o.href = r),
      (o.download = s),
      (o.rel = "noopener"),
      o.setAttribute("download", s),
      (o.style.cssText =
        "position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;"),
      document.body.appendChild(o),
      requestAnimationFrame(() => {
        try {
          o.dispatchEvent(
            new MouseEvent("click", {
              bubbles: !0,
              cancelable: !0,
              view: window,
            }),
          );
        } catch {
          try {
            o.click();
          } catch {}
        }
        try {
          document.body.removeChild(o);
        } catch {}
      }),
      i(6e4));
  } catch {
    (alert("无法触发下载，请尝试更换浏览器或使用系统分享。"), i(0));
  }
}
function pO(t, s) {
  return typeof s == "bigint" ? s.toString() : s;
}
function tp(t, s) {
  try {
    return JSON.stringify(t, pO, s);
  } catch (n) {
    throw new Error(
      `备份数据无法序列化为 JSON：${(n == null ? void 0 : n.message) || n}`,
    );
  }
}
const QS = "ai_phone_leting_backup",
  ZS = 1,
  XS = "ai_phone_leting_playlist_backup",
  e_ = 1,
  t_ = [
    "leting_api_endpoint",
    "leting_user",
    "leting_cookie",
    "music_floating_style",
    "music_custom_styles",
    "music_app_bg",
    "music_app_bg_blur",
    "netease_api_url",
    "netease_cookie",
  ],
  jj = 32768;
async function xO(t) {
  if (!t || !(t instanceof Blob)) return null;
  const s = await t.arrayBuffer(),
    n = new Uint8Array(s);
  let a = "";
  for (let r = 0; r < n.length; r += jj)
    a += String.fromCharCode.apply(null, n.subarray(r, r + jj));
  return {
    __letingBlob: !0,
    mime: t.type || "application/octet-stream",
    b64: btoa(a),
  };
}
function hO(t) {
  if (!t || !t.__letingBlob || typeof t.b64 != "string") return null;
  try {
    const s = atob(t.b64),
      n = new Uint8Array(s.length);
    for (let a = 0; a < s.length; a++) n[a] = s.charCodeAt(a);
    return new Blob([n], { type: t.mime || "audio/mpeg" });
  } catch {
    return null;
  }
}
async function s_(t) {
  const { fileBlob: s, ...n } = t;
  let a = null;
  return (s instanceof Blob && (a = await xO(s)), { ...n, fileBlob: a });
}
function n_(t) {
  if (!t || typeof t != "object") return t;
  const { fileBlob: s, ...n } = t,
    a = s && s.__letingBlob ? hO(s) : null;
  return { ...n, fileBlob: a };
}
function a_(t) {
  return (
    t &&
    typeof t == "object" &&
    t.kind === QS &&
    t.version === ZS &&
    t.indexedDb &&
    typeof t.indexedDb == "object"
  );
}
function r_(t) {
  return (
    t &&
    typeof t == "object" &&
    t.kind === XS &&
    t.version === e_ &&
    Array.isArray(t.songs)
  );
}
function gO(t) {
  return (
    (t || "playlist")
      .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_")
      .trim()
      .slice(0, 48) || "playlist"
  );
}
async function bO() {
  const t = await hP(),
    s = await Promise.all(t.songs.map((a) => s_(a))),
    n = {};
  for (const a of t_) {
    const r = await be.get(a);
    r != null && (n[a] = r);
  }
  return {
    kind: QS,
    version: ZS,
    exportedAt: new Date().toISOString(),
    indexedDb: {
      playlists: t.playlists,
      songs: s,
      neteaseCache: t.neteaseCache,
    },
    asyncStorage: n,
  };
}
function yO(t, s = {}) {
  const n = new Blob([JSON.stringify(t, null, 2)], {
      type: "application/json",
    }),
    a = `leting-backup-${new Date().toISOString().slice(0, 10)}.json`;
  ym(n, a, s);
}
async function vO(t) {
  if (!a_(t)) throw new Error("不是有效的乐听备份文件");
  const {
      playlists: s = [],
      songs: n = [],
      neteaseCache: a = [],
    } = t.indexedDb,
    r = n.map(n_);
  await gP({ playlists: s, songs: r, neteaseCache: a });
  const i =
    t.asyncStorage && typeof t.asyncStorage == "object" ? t.asyncStorage : {};
  for (const o of t_)
    Object.prototype.hasOwnProperty.call(i, o) && (await be.set(o, i[o]));
}
async function wO(t) {
  const s = co("leting"),
    a = (await s.getAllPlaylists()).find((o) => o.id === t);
  if (!a) throw new Error("歌单不存在");
  const r = await s.getSongsByPlaylist(t),
    i = await Promise.all(r.map((o) => s_(o)));
  return {
    kind: XS,
    version: e_,
    exportedAt: new Date().toISOString(),
    sourcePlaylistId: t,
    playlist: a,
    songs: i,
  };
}
function jO(t, s = {}) {
  var o;
  const n = new Blob([tp(t, 2)], { type: "application/json" }),
    a = new Date().toISOString().slice(0, 10),
    i = `leting-playlist-${gO((o = t.playlist) == null ? void 0 : o.name)}-${a}.json`;
  ym(n, i, s);
}
async function NO(t, s) {
  if (!r_(t)) throw new Error("不是有效的单歌单备份文件");
  if (!s || typeof s != "string") throw new Error("缺少目标歌单");
  const n = co("leting");
  if (!(await n.getAllPlaylists()).some((i) => i.id === s))
    throw new Error("目标歌单不存在");
  await n.deleteSongsByPlaylistId(s);
  let r = 0;
  for (const i of t.songs) {
    const o = n_(i);
    if (!o || typeof o != "object") continue;
    const c = `local_import_${Date.now()}_${r++}_${Math.random().toString(36).slice(2, 10)}`;
    await n.addSong({ ...o, id: c, playlistId: s });
  }
}
const kO = { mode: "full" },
  SO = ({
    isOpen: t,
    onClose: s,
    compactLayout: n = !0,
    backupContext: a = kO,
  }) => {
    const [r, i] = l.useState(!1),
      [o, c] = l.useState(""),
      d = l.useRef(null),
      u = (a == null ? void 0 : a.mode) === "local_playlist" && !!a.playlistId,
      f = async () => {
        var v, b, N, w, _, A;
        (i(!0), c("正在导出…"));
        const y = w0() ? window.open("about:blank", "_blank") : null;
        try {
          if (u) {
            const k = await wO(a.playlistId);
            (jO(k, { iosBlankWindow: y }),
              alert(`已导出歌单「${a.playlistName || ((v = k.playlist) == null ? void 0 : v.name) || ""}」中的 ${((b = k.songs) == null ? void 0 : b.length) ?? 0} 首曲目。
本地音频以 Base64 内嵌，文件可能较大，请耐心等待下载。`));
          } else {
            const k = await bO();
            (yO(k, { iosBlankWindow: y }),
              alert(`已导出 ${((w = (N = k.indexedDb) == null ? void 0 : N.playlists) == null ? void 0 : w.length) ?? 0} 个歌单、${((A = (_ = k.indexedDb) == null ? void 0 : _.songs) == null ? void 0 : A.length) ?? 0} 首曲目记录。
本地音频以 Base64 内嵌，文件可能较大，请耐心等待下载。`));
          }
          s();
        } catch (k) {
          (y && !y.closed && y.close(),
            alert(`导出失败：${k.message || "未知错误"}`));
        } finally {
          (i(!1), c(""));
        }
      },
      p = () => {
        var y;
        (y = d.current) == null || y.click();
      },
      m = async (y) => {
        var N;
        const v = y.target,
          b = (N = v.files) == null ? void 0 : N[0];
        if (!b) {
          v.value = "";
          return;
        }
        (i(!0), c("正在读取…"));
        try {
          const w = await b.text(),
            _ = JSON.parse(w);
          if (u) {
            if (!r_(_)) {
              alert(
                "不是单歌单备份文件（请使用歌单详情页导出的 leting-playlist-*.json）。",
              );
              return;
            }
            if (
              !window.confirm(
                "导入将清空当前歌单内的全部曲目，并用备份中的曲目替换。不会影响其他歌单或网易云缓存。是否继续？",
              )
            )
              return;
            (c("正在写入…"),
              await NO(_, a.playlistId),
              alert("导入成功，页面将刷新。"),
              window.location.reload());
            return;
          }
          if (!a_(_)) {
            alert(
              "不是乐听整库备份文件（请使用本页导出的 leting-backup-*.json）。",
            );
            return;
          }
          if (
            !window.confirm(
              "导入将覆盖当前乐听内的本地歌单、曲目、网易云缓存，并覆盖乐听相关的设置项（API、登录、歌词样式与背景等）。是否继续？",
            )
          )
            return;
          (c("正在写入…"),
            await vO(_),
            alert("导入成功，页面将刷新。"),
            window.location.reload());
        } catch (w) {
          alert(`导入失败：${w.message || "文件无效"}`);
        } finally {
          ((v.value = ""), i(!1), c(""));
        }
      },
      h = n ? "p-4" : "p-6 sm:p-10",
      g = n ? "max-w-[min(100%,20rem)]" : "max-w-lg",
      x = n ? "text-3xl" : "text-4xl sm:text-5xl";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("input", {
          ref: d,
          type: "file",
          accept: "application/json,.json",
          className: "hidden",
          onChange: m,
        }),
        e.jsx(Os, {
          children:
            t &&
            e.jsxs(We.div, {
              className:
                "absolute inset-0 z-[160] flex items-center justify-center pointer-events-auto",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.25 },
              children: [
                e.jsx(We.div, {
                  "aria-hidden": !0,
                  className: "absolute inset-0 bg-black/40 backdrop-blur-md",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: r ? void 0 : s,
                }),
                e.jsx(We.div, {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": "leting-data-title",
                  initial: { opacity: 0, y: 16, scale: 0.97 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: 12, scale: 0.98 },
                  transition: { type: "spring", damping: 28, stiffness: 320 },
                  className: `relative z-10 mx-auto w-full ${g} ${h}`,
                  onClick: (y) => y.stopPropagation(),
                  children: e.jsxs("div", {
                    className:
                      "relative overflow-hidden rounded-[1.75rem] border border-gray-200/90 bg-white/95 backdrop-blur-2xl shadow-[0_24px_80px_-12px_rgba(0,0,0,0.16)] ring-1 ring-white/70 ring-inset",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-red-500/90 to-transparent opacity-80",
                      }),
                      e.jsx("div", {
                        className: "px-6 pt-7 pb-2 sm:px-8 sm:pt-8",
                        children: e.jsxs("div", {
                          className: "flex items-start justify-between gap-3",
                          children: [
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]",
                                  children: "乐听 · 备份",
                                }),
                                e.jsxs("h2", {
                                  id: "leting-data-title",
                                  className: `${x} font-light tracking-tighter text-black mt-2 leading-none`,
                                  children: [
                                    "数据",
                                    e.jsx("span", {
                                      className: "text-red-500",
                                      children: ".",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs font-mono text-gray-400 mt-3 uppercase tracking-widest",
                                  children: u
                                    ? "当前歌单 · 仅曲目"
                                    : "整库 · 非单首",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: r ? void 0 : s,
                              disabled: r,
                              className:
                                "shrink-0 p-2.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors disabled:opacity-40",
                              "aria-label": "关闭",
                              children: e.jsx(Ts, {
                                size: 22,
                                strokeWidth: 1.5,
                              }),
                            }),
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "mx-6 sm:mx-8 border-b border-gray-100",
                      }),
                      e.jsxs("div", {
                        className: "px-6 py-6 sm:px-8 sm:py-8",
                        children: [
                          e.jsxs("div", {
                            className: "flex gap-3 mb-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-11 h-11 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0",
                                children: e.jsx(Wl, {
                                  size: 20,
                                  className: "text-gray-700",
                                  strokeWidth: 1.5,
                                }),
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-gray-600 leading-relaxed pt-0.5",
                                children: u
                                  ? e.jsx(e.Fragment, {
                                      children:
                                        "导出或恢复当前本地歌单内的曲目数据（含内嵌音频）。不改变歌单名称与封面，也不影响其他歌单、网易云与乐听设置。",
                                    })
                                  : e.jsx(e.Fragment, {
                                      children:
                                        "导出或恢复全部本地歌单与曲目、网易云缓存，以及 API、登录状态、浮动歌词样式与播放背景。与系统设置里的全量备份无关。",
                                    }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs(We.button, {
                                type: "button",
                                disabled: r,
                                onClick: f,
                                whileTap: { scale: r ? 1 : 0.98 },
                                className:
                                  "w-full py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors disabled:opacity-45 disabled:cursor-not-allowed flex items-center justify-center gap-2.5",
                                children: [
                                  r
                                    ? e.jsx(Sn, {
                                        size: 16,
                                        className: "animate-spin",
                                      })
                                    : e.jsx(BM, { size: 16, strokeWidth: 2 }),
                                  r ? o || "处理中…" : "导出 JSON",
                                ],
                              }),
                              e.jsxs(We.button, {
                                type: "button",
                                disabled: r,
                                onClick: p,
                                whileTap: { scale: r ? 1 : 0.98 },
                                className:
                                  "w-full py-3.5 rounded-full border border-gray-200 bg-white text-xs font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-50 transition-colors disabled:opacity-45 disabled:cursor-not-allowed flex items-center justify-center gap-2.5",
                                children: [
                                  e.jsx(YM, { size: 16, strokeWidth: 2 }),
                                  "导入备份",
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
            }),
        }),
      ],
    });
  },
  Nj = [
    "어둠 속에 벨벳처럼 깔린 밤",
    "在月色如水的长街漫步",
    "每一片落叶都是寄往秋天的情书",
    "我们的故事被晚风吹散又重聚",
    "这一刻 只有呼吸声最清晰",
  ],
  _O = ({ isOpen: t, onClose: s, onSave: n, initialData: a }) => {
    const [r, i] = l.useState((a == null ? void 0 : a.name) || "我的样式"),
      [o, c] = l.useState(
        (a == null ? void 0 : a.html) ||
          `<div class="lyrics-container">
  <div class="text">{{text}}</div>
</div>`,
      ),
      [d, u] = l.useState(
        (a == null ? void 0 : a.css) ||
          `.lyrics-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
}

.text {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  font-family: serif;
}`,
      ),
      [f, p] = l.useState("html"),
      [m, h] = l.useState(0);
    l.useEffect(() => {
      const v = setInterval(() => {
        h((b) => (b + 1) % Nj.length);
      }, 3e3);
      return () => clearInterval(v);
    }, []);
    const g = () => {
        r.trim() && (n({ name: r, html: o, css: d }), s());
      },
      x = o.replace(/{{text}}/g, Nj[m]),
      y = `
    #editor-preview {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    ${d}
  `;
    return t
      ? e.jsxs(We.div, {
          initial: { opacity: 0, y: "100%" },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: "100%" },
          transition: { type: "spring", damping: 25, stiffness: 200 },
          className: "absolute inset-0 z-[250] bg-[#F2F1EF] flex flex-col",
          children: [
            e.jsxs("div", {
              className:
                "px-6 pt-12 pb-4 flex justify-between items-center bg-white/50 backdrop-blur-md border-b border-neutral-200 shrink-0",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-2xl font-light text-neutral-800 tracking-tight",
                      children: "样式编辑",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] text-neutral-400 mt-1 tracking-widest uppercase",
                      children: "自定义歌词展示效果",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: s,
                  className:
                    "w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors",
                  children: e.jsx(Ts, {
                    size: 18,
                    className: "text-neutral-600",
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex-1 flex flex-col overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "h-[35%] p-6 flex flex-col items-center justify-center bg-[#E5E3DF] relative overflow-hidden shrink-0",
                  children: [
                    e.jsx("div", {
                      className: "absolute inset-0 bg-black/5 blur-[100px]",
                    }),
                    e.jsx("div", {
                      className:
                        "relative z-10 w-full h-full bg-transparent rounded-xl shadow-lg overflow-hidden border border-white/20",
                      children: e.jsxs("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center",
                        children: [
                          e.jsx("style", { children: y }),
                          e.jsx("div", {
                            id: "editor-preview",
                            dangerouslySetInnerHTML: { __html: x },
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex-1 flex flex-col bg-white border-t border-neutral-200 overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className: "p-4 border-b border-neutral-100 shrink-0",
                      children: e.jsx("input", {
                        type: "text",
                        value: r,
                        onChange: (v) => i(v.target.value),
                        className:
                          "w-full text-lg font-light text-neutral-800 placeholder-neutral-300 outline-none bg-transparent",
                        placeholder: "风格名称",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex border-b border-neutral-100 shrink-0",
                      children: [
                        e.jsx("button", {
                          onClick: () => p("html"),
                          className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${f === "html" ? "bg-neutral-50 text-black border-b-2 border-black" : "text-neutral-400 hover:text-neutral-600"}`,
                          children: "HTML",
                        }),
                        e.jsx("button", {
                          onClick: () => p("css"),
                          className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${f === "css" ? "bg-neutral-50 text-black border-b-2 border-black" : "text-neutral-400 hover:text-neutral-600"}`,
                          children: "CSS",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex-1 relative",
                      children: e.jsx("textarea", {
                        value: f === "html" ? o : d,
                        onChange: (v) =>
                          f === "html" ? c(v.target.value) : u(v.target.value),
                        className:
                          "absolute inset-0 w-full h-full p-4 font-mono text-xs text-neutral-700 bg-neutral-50 resize-none outline-none leading-relaxed",
                        spellCheck: "false",
                        placeholder:
                          f === "html"
                            ? "<div>{{text}}</div>"
                            : ".class { color: red; }",
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "p-4 border-t border-neutral-200 bg-white flex justify-between items-center shrink-0",
                      children: [
                        e.jsx("span", {
                          className: "text-[10px] text-neutral-400",
                          children:
                            f === "html"
                              ? "歌词文本使用占位符 {{text}}"
                              : "样式作用于歌词容器内",
                        }),
                        e.jsxs("button", {
                          onClick: g,
                          className:
                            "px-6 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2",
                          children: [e.jsx(On, { size: 14 }), "保存"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  rc = [
    "푸른 달빛이 스며드는 방",
    "微风拂过那个有些怀旧的午后",
    "所有的情绪在旋律里悄悄降落",
    "像是在无声电影里 遇见了初雪",
    "让这份安静 成为我们的秘密",
  ],
  kj = ({
    styleId: t,
    isActive: s,
    onClick: n,
    customStyle: a,
    onDelete: r,
  }) => {
    const [i, o] = l.useState(0),
      [c, d] = l.useState(0),
      [u, f] = l.useState(!1);
    if (
      (l.useEffect(() => {
        if (!s) return;
        const p = setInterval(() => {
          (o((m) => (m + 1) % rc.length), d(0));
        }, 3e3);
        return () => clearInterval(p);
      }, [s]),
      l.useEffect(() => {
        if (!s) return;
        const p = setInterval(() => {
          d((m) => Math.min(m + 1, 100));
        }, 30);
        return () => clearInterval(p);
      }, [i, s]),
      a)
    ) {
      const p = a.html.replace(/{{text}}/g, rc[i]),
        m = `
      #preview-${a.id} {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      ${a.css}
    `;
      return e.jsxs("div", {
        onClick: n,
        className: `relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border-2 group ${s ? "border-black shadow-2xl scale-[1.02]" : "border-transparent shadow-md hover:scale-[1.01]"}`,
        children: [
          e.jsx("div", {
            className: "absolute inset-0 bg-[#F2F1EF]",
            children: e.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center p-4",
              children: e.jsxs("div", {
                className:
                  "scale-[0.6] origin-center w-full h-full flex items-center justify-center",
                children: [
                  e.jsx("style", { children: m }),
                  e.jsx("div", {
                    id: `preview-${a.id}`,
                    dangerouslySetInnerHTML: { __html: p },
                  }),
                ],
              }),
            }),
          }),
          s &&
            e.jsx("div", {
              className:
                "absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg z-10",
              children: e.jsx(On, { size: 16 }),
            }),
          e.jsx("div", {
            className:
              "absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-neutral-600 z-10",
            children: a.name,
          }),
          e.jsx("button", {
            onClick: (h) => {
              (h.stopPropagation(),
                window.confirm("确定删除该自定义样式吗？") && r(a.id));
            },
            className:
              "absolute top-4 left-4 w-8 h-8 bg-white/80 backdrop-blur-md text-red-500 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 z-10",
            children: e.jsx(_n, { size: 14 }),
          }),
        ],
      });
    }
    return e.jsxs("div", {
      onClick: n,
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      className: `relative w-full aspect-video rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border-2 ${s ? "border-black shadow-2xl scale-[1.02]" : "border-transparent shadow-md hover:scale-[1.01]"}`,
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 bg-[#EBE9E4]",
          children: [
            e.jsx("div", { className: "absolute inset-0 bg-[#E5E2DC]" }),
            t === 1 &&
              e.jsxs("div", {
                className: "absolute inset-0",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-indigo-100 blur-[80px] rounded-full animate-pulse",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-orange-50 blur-[60px] rounded-full animate-pulse",
                  }),
                ],
              }),
            t === 4 &&
              e.jsxs("div", {
                className:
                  "absolute inset-0 z-10 opacity-20 pointer-events-none",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 left-[-10%] w-[40%] h-[200%] bg-black/10 blur-[60px] rotate-[25deg]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-0 left-[20%] w-[5%] h-[200%] bg-black/10 blur-[40px] rotate-[25deg]",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-0 left-[35%] w-[8%] h-[200%] bg-black/10 blur-[50px] rotate-[25deg]",
                  }),
                ],
              }),
            t >= 3 &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-[5%] right-[15%] w-[45%] h-[60%] bg-[#DDE2E5] blur-[100px] rounded-full opacity-40 animate-pulse",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-[5%] left-[5%] w-[40%] h-[50%] bg-[#E5DDD8] blur-[120px] rounded-full opacity-50",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/canvas-orange.png')] opacity-10",
                  }),
                ],
              }),
          ],
        }),
        e.jsx("div", {
          className: "absolute inset-0 flex items-center justify-center p-4",
          children: e.jsxs("div", {
            className: "scale-[0.5] origin-center w-full flex justify-center",
            children: [
              t === 0 &&
                e.jsx("div", {
                  className:
                    "relative p-1 bg-neutral-200/50 backdrop-blur-sm shadow-2xl min-w-[400px]",
                  children: e.jsxs("div", {
                    className:
                      "relative p-8 bg-white border border-neutral-300",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between items-start mb-6",
                        children: [
                          e.jsxs("div", {
                            className: "flex flex-col text-left",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[9px] font-mono text-neutral-400 tracking-tighter",
                                children: "EST. 2024 / SEOUL",
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[11px] font-serif italic text-neutral-800",
                                children: "No. 05 Ethereal",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-3 text-neutral-300",
                            children: [
                              e.jsx(lr, { size: 12 }),
                              e.jsx(Co, { size: 12 }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "py-2 text-center",
                        children: e.jsx("h2", {
                          className:
                            "text-2xl font-serif text-neutral-800 tracking-tight leading-loose whitespace-nowrap",
                          children: rc[i],
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-8 pt-4 border-t border-neutral-100 flex justify-between items-end",
                        children: [
                          e.jsxs("div", {
                            className: "space-y-1 text-left",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[8px] text-neutral-400 tracking-widest uppercase",
                                children: "Mood Profile",
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  e.jsx(p3, {
                                    size: 12,
                                    className: "text-neutral-300",
                                  }),
                                  e.jsx($h, {
                                    size: 12,
                                    className: "text-neutral-300",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "text-right",
                            children: e.jsx("p", {
                              className:
                                "text-[10px] font-serif italic text-neutral-500",
                              children: "Autumn Echoes",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              t === 1 &&
                e.jsx("div", {
                  className:
                    "relative py-16 px-12 flex items-center justify-center min-w-[400px]",
                  children: e.jsxs("div", {
                    className: "relative text-center space-y-4",
                    children: [
                      e.jsx("div", {
                        className: "w-8 h-[1px] bg-neutral-300 mx-auto",
                      }),
                      e.jsx("h2", {
                        className:
                          "text-3xl font-extralight text-neutral-800 tracking-[0.2em] leading-relaxed drop-shadow-sm whitespace-nowrap",
                        children: rc[i],
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] text-neutral-400 tracking-[0.4em] uppercase font-light",
                        children: "Atmospheric Resonance",
                      }),
                    ],
                  }),
                }),
              t === 2 &&
                e.jsxs("div", {
                  className: "relative p-12 min-w-[400px]",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[0.5px] border-neutral-300/30 rounded-full",
                    }),
                    e.jsx("svg", {
                      className:
                        "absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] -rotate-90",
                      children: e.jsx("circle", {
                        cx: "150",
                        cy: "150",
                        r: "149",
                        fill: "none",
                        stroke: "#404040",
                        strokeWidth: "1.5",
                        strokeDasharray: "936",
                        strokeDashoffset: 936 - (936 * c) / 100,
                        className:
                          "transition-all duration-300 ease-linear opacity-20",
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "relative pl-12 flex flex-col items-start gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-4 opacity-30",
                          children: [
                            e.jsx(l3, { size: 14 }),
                            e.jsx("span", {
                              className:
                                "text-[10px] tracking-[0.5em] font-light",
                              children: "BROADCASTING",
                            }),
                          ],
                        }),
                        e.jsx("h2", {
                          className:
                            "text-4xl font-light text-neutral-800 tracking-tight whitespace-nowrap",
                          children: rc[i],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-6 mt-4",
                          children: [
                            e.jsxs("span", {
                              className: "text-[10px] text-neutral-400",
                              children: ["0", i + 1],
                            }),
                            e.jsx("div", {
                              className: "flex gap-1",
                              children: [...Array(5)].map((p, m) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `w-1 h-1 rounded-full ${m === i ? "bg-neutral-800" : "bg-neutral-200"}`,
                                  },
                                  m,
                                ),
                              ),
                            }),
                            e.jsx(ea, {
                              size: 12,
                              className: "text-neutral-400",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              t === 3 &&
                e.jsx("div", {
                  className:
                    "relative group p-10 bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2px] w-[500px]",
                  children: e.jsxs("div", {
                    className: "flex gap-10 items-center",
                    children: [
                      e.jsxs("div", {
                        className: "relative flex-shrink-0",
                        children: [
                          e.jsx("div", {
                            className: `w-32 h-32 rounded-full border border-neutral-200 p-1 transition-transform duration-[5s] linear ${s ? "rotate-180" : "rotate-0"}`,
                            children: e.jsxs("div", {
                              className:
                                "w-full h-full rounded-full bg-[#F5F5F3] flex items-center justify-center relative overflow-hidden",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-8 h-8 rounded-full border border-neutral-200 bg-white z-10",
                                }),
                                e.jsx(bp, {
                                  size: 60,
                                  className:
                                    "text-neutral-100 absolute rotate-45",
                                }),
                                e.jsx("svg", {
                                  className:
                                    "absolute inset-0 w-full h-full -rotate-90",
                                  children: e.jsx("circle", {
                                    cx: "64",
                                    cy: "64",
                                    r: "62",
                                    fill: "none",
                                    stroke: "#A3A3A3",
                                    strokeWidth: "1",
                                    strokeDasharray: "390",
                                    strokeDashoffset: 390 - (390 * c) / 100,
                                    className: "opacity-40",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity",
                            children: e.jsx(Co, {
                              size: 10,
                              className: "text-neutral-400",
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex-grow space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsxs("span", {
                                className:
                                  "text-[10px] font-mono tracking-widest text-neutral-400",
                                children: ["ARCHIVE / NO. ", i + 1],
                              }),
                              e.jsx("div", {
                                className: "h-[0.5px] flex-grow bg-neutral-200",
                              }),
                            ],
                          }),
                          e.jsx("h2", {
                            className:
                              "text-3xl font-serif text-neutral-800 tracking-tight leading-snug whitespace-nowrap",
                            children: rc[i],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex justify-between items-end opacity-40",
                            children: [
                              e.jsx("p", {
                                className: "text-[10px] italic font-serif",
                                children: "Aura of the night - Edit.",
                              }),
                              e.jsx(lr, { size: 12 }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              t === 4 &&
                e.jsxs("div", {
                  className: "relative py-12 px-6 w-[450px]",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute -left-4 top-1/2 -translate-y-1/2 w-full h-[85%] bg-white/20 border border-white/30 backdrop-blur-md rotate-[-2deg] rounded-sm",
                    }),
                    e.jsxs("div", {
                      className:
                        "relative p-12 bg-white/60 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-white/80 rounded-[4px] flex flex-col overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-[-20px] right-[-10px] opacity-[0.08] pointer-events-none rotate-[15deg]",
                          children: e.jsxs("svg", {
                            width: "240",
                            height: "320",
                            viewBox: "0 0 240 320",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              e.jsx("path", {
                                d: "M120 300C120 300 110 220 160 160C210 100 230 40 230 40M120 300C120 300 130 220 80 160C30 100 10 40 10 40M120 300V20",
                                stroke: "currentColor",
                                strokeWidth: "1",
                                className: "text-neutral-900",
                              }),
                              e.jsx("circle", {
                                cx: "160",
                                cy: "160",
                                r: "3",
                                fill: "currentColor",
                              }),
                              e.jsx("circle", {
                                cx: "80",
                                cy: "160",
                                r: "3",
                                fill: "currentColor",
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-30",
                          children: [
                            e.jsx("div", {
                              className: "w-[1px] h-12 bg-neutral-400",
                            }),
                            e.jsx("span", {
                              className:
                                "[writing-mode:vertical-rl] text-[8px] tracking-[0.6em] font-serif uppercase",
                              children: "Index_Herbarium",
                            }),
                            e.jsx("div", {
                              className: "w-[1px] h-12 bg-neutral-400",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "pl-8",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center mb-12",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    e.jsx(t3, {
                                      size: 14,
                                      className: "text-neutral-400 rotate-45",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] tracking-[0.5em] text-neutral-400 font-light uppercase",
                                      children: "Collection 02.",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex flex-col items-end",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-mono tracking-tighter text-neutral-400 leading-none mb-1",
                                      children: "27.01.2026",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "w-10 h-[0.5px] bg-neutral-200",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "relative mb-16",
                              children: [
                                e.jsx("h2", {
                                  className:
                                    "text-[2rem] font-serif font-extralight text-neutral-800 tracking-wide leading-[1.8] italic whitespace-nowrap",
                                  children: rc[i],
                                }),
                                e.jsx("div", {
                                  className: "mt-6",
                                  children: e.jsx("p", {
                                    className:
                                      "text-[11px] text-neutral-300 font-serif italic",
                                    children:
                                      "— Silent thoughts in the afternoon sun.",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex justify-between items-center",
                              children: [
                                e.jsx("div", {
                                  className: "flex items-center gap-8",
                                  children: e.jsxs("div", {
                                    className: "flex flex-col",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-[8px] text-neutral-300 tracking-[0.2em] mb-1 uppercase",
                                        children: "Atmosphere",
                                      }),
                                      e.jsx("div", {
                                        className: "flex gap-1.5",
                                        children: [...Array(5)].map((p, m) =>
                                          e.jsx(
                                            "div",
                                            {
                                              className: `w-1 h-1 rounded-full ${m <= i ? "bg-neutral-400" : "bg-neutral-200"}`,
                                            },
                                            m,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-6 opacity-50",
                                  children: [
                                    e.jsx(Um, { size: 14 }),
                                    e.jsx(Yl, { size: 14 }),
                                    e.jsx(jl, { size: 14 }),
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
                        "absolute bottom-6 right-10 opacity-10 flex flex-col items-end rotate-[-5deg]",
                      children: [
                        e.jsxs("span", {
                          className:
                            "text-[2rem] font-black italic leading-none",
                          children: ["0", i + 1],
                        }),
                        e.jsx("span", {
                          className: "text-[8px] tracking-widest font-mono",
                          children: "SERIES_ECHO",
                        }),
                      ],
                    }),
                  ],
                }),
              t === 5 &&
                e.jsxs("div", {
                  className:
                    "relative px-20 py-16 w-[500px] bg-white/80 backdrop-blur-md rounded-lg shadow-xl",
                  children: [
                    e.jsxs("div", {
                      className:
                        "absolute left-0 top-0 bottom-0 w-8 border-r border-neutral-300 flex flex-col justify-between py-10",
                      children: [
                        e.jsx("span", {
                          className: "text-[8px] rotate-90 text-neutral-400",
                          children: "FRAME 002",
                        }),
                        e.jsx("span", {
                          className: "text-[8px] rotate-90 text-neutral-400",
                          children: "LENS 35MM",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-12",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-baseline gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-2 h-2 rounded-full bg-neutral-800 animate-pulse",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] tracking-[0.8em] text-neutral-400 uppercase font-light",
                              children: "Dialogue Recording",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute -top-6 -left-4 text-5xl font-black text-black/[0.02] select-none uppercase italic tracking-tighter",
                              children: "Narrative Flow",
                            }),
                            e.jsx("h2", {
                              className:
                                "text-4xl font-serif text-neutral-800 tracking-wide leading-[1.8] drop-shadow-sm whitespace-nowrap",
                              children: rc[i],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex justify-between items-center pt-8 border-t border-neutral-200/50",
                          children: [
                            e.jsxs("div", {
                              className: "flex gap-4",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "px-3 py-1 border border-neutral-300 rounded-full text-[9px] text-neutral-500 font-mono tracking-tighter",
                                  children: ["SCENE_0", i + 1],
                                }),
                                e.jsx("div", {
                                  className:
                                    "px-3 py-1 bg-neutral-800 text-white rounded-full text-[9px] font-mono tracking-tighter",
                                  children: "TAKE_05",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex gap-6 opacity-50",
                              children: [
                                e.jsx(Xn, {
                                  size: 14,
                                  className: "text-yellow-600/40",
                                }),
                                e.jsx(jl, {
                                  size: 14,
                                  className: "text-neutral-300",
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
        }),
        s &&
          e.jsx("div", {
            className:
              "absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center shadow-lg z-10",
            children: e.jsx(On, { size: 16 }),
          }),
        e.jsxs("div", {
          className:
            "absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-neutral-600 z-10",
          children: [
            t === 0 && "香氛标签",
            t === 1 && "流光",
            t === 2 && "极简弧线",
            t === 3 && "唱片档案",
            t === 4 && "标本手记",
            t === 5 && "电影剧本",
          ],
        }),
        e.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400&family=Tenor+Sans&display=swap');
        .font-serif { font-family: 'Noto Serif KR', serif; }
        .font-mono { font-family: 'Tenor Sans', sans-serif; }
      `,
          },
        }),
      ],
    });
  },
  AO = ({
    isOpen: t,
    onClose: s,
    currentStyle: n,
    onSelect: a,
    customStyles: r = [],
    onUpdateCustomStyles: i,
  }) => {
    const [o, c] = l.useState(!1);
    if (!t) return null;
    const d = (f) => {
        const p = {
          id: `custom_${Date.now()}`,
          name: f.name,
          html: f.html,
          css: f.css,
          createdAt: Date.now(),
        };
        (i([...r, p]), c(!1));
      },
      u = (f) => {
        const p = r.filter((m) => m.id !== f);
        (i(p), n === f && a(0));
      };
    return e.jsxs(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "absolute inset-0 z-[200] bg-[#F2F1EF] flex flex-col",
      children: [
        e.jsxs("div", {
          className: "px-8 pt-16 pb-6 flex justify-between items-center",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h2", {
                  className:
                    "text-3xl font-light text-neutral-800 tracking-tight",
                  children: "歌词样式",
                }),
                e.jsx("p", {
                  className:
                    "text-xs text-neutral-400 mt-2 tracking-widest uppercase",
                  children: "选择一种风格",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex gap-3",
              children: [
                e.jsx("button", {
                  onClick: () => c(!0),
                  className:
                    "w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors",
                  children: e.jsx(ea, {
                    size: 20,
                    className: "text-neutral-600",
                  }),
                }),
                e.jsx("button", {
                  onClick: s,
                  className:
                    "w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors",
                  children: e.jsx(Ts, {
                    size: 20,
                    className: "text-neutral-600",
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-8 pb-12",
          children: e.jsxs("div", {
            className: "grid grid-cols-1 gap-8 max-w-2xl mx-auto",
            children: [
              [0, 1, 2, 3, 4, 5].map((f) =>
                e.jsx(
                  kj,
                  { styleId: f, isActive: n === f, onClick: () => a(f) },
                  f,
                ),
              ),
              r.map((f) =>
                e.jsx(
                  kj,
                  {
                    styleId: f.id,
                    customStyle: f,
                    isActive: n === f.id,
                    onClick: () => a(f.id),
                    onDelete: u,
                  },
                  f.id,
                ),
              ),
            ],
          }),
        }),
        e.jsxs("div", {
          className:
            "px-8 py-6 bg-white/50 backdrop-blur-md border-t border-neutral-200 flex justify-between items-center",
          children: [
            e.jsx("span", {
              className:
                "text-[10px] text-neutral-400 tracking-widest uppercase",
              children: "为听歌氛围而设计",
            }),
            e.jsx("button", {
              onClick: s,
              className:
                "px-8 py-3 bg-neutral-900 text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-black transition-colors",
              children: "应用样式",
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            o &&
            e.jsx(_O, {
              isOpen: o,
              onClose: () => c(!1),
              onSave: d,
              initialData: {
                name: "我的歌词样式",
                html: `<div class="lyrics-container">
  <div class="text">{{text}}</div>
</div>`,
                css: `.lyrics-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
}

.text {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  font-family: serif;
}`,
              },
            }),
        }),
      ],
    });
  };
function kc(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var i_ = { exports: {} };
(function (t, s) {
  var n = n || {};
  ((n.scope = {}),
    (n.ASSUME_ES5 = !1),
    (n.ASSUME_NO_NATIVE_MAP = !1),
    (n.ASSUME_NO_NATIVE_SET = !1),
    (n.defineProperty =
      n.ASSUME_ES5 || typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, r, i) {
            a != Array.prototype && a != Object.prototype && (a[r] = i.value);
          }),
    (n.getGlobal = function (a) {
      return typeof window < "u" && window === a
        ? a
        : typeof Nc < "u" && Nc != null
          ? Nc
          : a;
    }),
    (n.global = n.getGlobal(Nc)),
    (n.polyfill = function (a, r, i, o) {
      if (r) {
        for (i = n.global, a = a.split("."), o = 0; o < a.length - 1; o++) {
          var c = a[o];
          (c in i || (i[c] = {}), (i = i[c]));
        }
        ((a = a[a.length - 1]),
          (o = i[a]),
          (r = r(o)),
          r != o &&
            r != null &&
            n.defineProperty(i, a, {
              configurable: !0,
              writable: !0,
              value: r,
            }));
      }
    }),
    n.polyfill(
      "Object.setPrototypeOf",
      function (a) {
        return (
          a ||
          (typeof "".__proto__ != "object"
            ? null
            : function (r, i) {
                if (((r.__proto__ = i), r.__proto__ !== i))
                  throw new TypeError(r + " is not extensible");
                return r;
              })
        );
      },
      "es6",
      "es5",
    ),
    (n.objectCreate =
      n.ASSUME_ES5 || typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var r = function () {};
            return ((r.prototype = a), new r());
          }),
    (n.construct =
      (typeof Reflect < "u" && Reflect.construct) ||
      function (a, r, i) {
        return (
          i === void 0 && (i = a),
          (i = n.objectCreate(i.prototype || Object.prototype)),
          Function.prototype.apply.call(a, i, r) || i
        );
      }),
    n.polyfill(
      "Reflect.construct",
      function (a) {
        return a || n.construct;
      },
      "es6",
      "es3",
    ),
    (function (a) {
      t.exports = a();
    })(function () {
      return (function () {
        function a(r, i, o) {
          function c(f, p) {
            if (!i[f]) {
              if (!r[f]) {
                var m = typeof kc == "function" && kc;
                if (!p && m) return m(f, !0);
                if (d) return d(f, !0);
                throw (
                  (p = Error("Cannot find module '" + f + "'")),
                  (p.code = "MODULE_NOT_FOUND"),
                  p
                );
              }
              ((p = i[f] = { exports: {} }),
                r[f][0].call(
                  p.exports,
                  function (h) {
                    return c(r[f][1][h] || h);
                  },
                  p,
                  p.exports,
                  a,
                  r,
                  i,
                  o,
                ));
            }
            return i[f].exports;
          }
          for (var d = typeof kc == "function" && kc, u = 0; u < o.length; u++)
            c(o[u]);
          return c;
        }
        return a;
      })()(
        {
          1: [function (a, r, i) {}, {}],
          2: [
            function (a, r, i) {
              r.exports = XMLHttpRequest;
            },
            {},
          ],
          3: [
            function (a, r, i) {
              function o(y) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (v) {
                          return typeof v;
                        }
                      : function (v) {
                          return v &&
                            typeof Symbol == "function" &&
                            v.constructor === Symbol &&
                            v !== Symbol.prototype
                            ? "symbol"
                            : typeof v;
                        }),
                  o(y)
                );
              }
              function c(y, v) {
                for (var b = 0; b < v.length; b++) {
                  var N = v[b];
                  ((N.enumerable = N.enumerable || !1),
                    (N.configurable = !0),
                    "value" in N && (N.writable = !0),
                    Object.defineProperty(y, N.key, N));
                }
              }
              function d(y, v, b) {
                return (v && c(y.prototype, v), b && c(y, b), y);
              }
              function u(y, v) {
                if (typeof v != "function" && v !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((y.prototype = Object.create(v && v.prototype, {
                  constructor: { value: y, writable: !0, configurable: !0 },
                })),
                  v && f(y, v));
              }
              function f(y, v) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (b, N) {
                      return ((b.__proto__ = N), b);
                    }),
                  f(y, v)
                );
              }
              function p(y) {
                var v = h();
                return function () {
                  var b = g(y);
                  if (v) {
                    var N = g(this).constructor;
                    b = Reflect.construct(b, arguments, N);
                  } else b = b.apply(this, arguments);
                  return (
                    (b =
                      !b || (o(b) !== "object" && typeof b != "function")
                        ? m(this)
                        : b),
                    b
                  );
                };
              }
              function m(y) {
                if (y === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return y;
              }
              function h() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function g(y) {
                return (
                  (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (v) {
                        return v.__proto__ || Object.getPrototypeOf(v);
                      }),
                  g(y)
                );
              }
              function x(y, v, b) {
                return (
                  v in y
                    ? Object.defineProperty(y, v, {
                        value: b,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (y[v] = b),
                  y
                );
              }
              ((a = (function (y) {
                function v(N) {
                  if (!(this instanceof v))
                    throw new TypeError("Cannot call a class as a function");
                  var w = b.call(this);
                  return (
                    x(m(w), "_array", void 0),
                    x(m(w), "_size", void 0),
                    (w._array = N),
                    (w._size = N.length),
                    (w._isInitialized = !0),
                    w
                  );
                }
                u(v, y);
                var b = p(v);
                return (
                  d(
                    v,
                    [
                      {
                        key: "init",
                        value: function (N) {
                          setTimeout(N.onSuccess, 0);
                        },
                      },
                      {
                        key: "loadRange",
                        value: function (N, w) {
                          setTimeout(w.onSuccess, 0);
                        },
                      },
                      {
                        key: "getByteAt",
                        value: function (N) {
                          if (N >= this._array.length)
                            throw Error(
                              "Offset " + N + " hasn't been loaded yet.",
                            );
                          return this._array[N];
                        },
                      },
                    ],
                    [
                      {
                        key: "canReadFile",
                        value: function (N) {
                          return (
                            Array.isArray(N) ||
                            (typeof Buffer == "function" && Buffer.isBuffer(N))
                          );
                        },
                      },
                    ],
                  ),
                  v
                );
              })(a("./MediaFileReader"))),
                (r.exports = a));
            },
            { "./MediaFileReader": 11 },
          ],
          4: [
            function (a, r, i) {
              function o(v) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (b) {
                          return typeof b;
                        }
                      : function (b) {
                          return b &&
                            typeof Symbol == "function" &&
                            b.constructor === Symbol &&
                            b !== Symbol.prototype
                            ? "symbol"
                            : typeof b;
                        }),
                  o(v)
                );
              }
              function c(v, b) {
                for (var N = 0; N < b.length; N++) {
                  var w = b[N];
                  ((w.enumerable = w.enumerable || !1),
                    (w.configurable = !0),
                    "value" in w && (w.writable = !0),
                    Object.defineProperty(v, w.key, w));
                }
              }
              function d(v, b, N) {
                return (b && c(v.prototype, b), N && c(v, N), v);
              }
              function u(v, b) {
                if (typeof b != "function" && b !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((v.prototype = Object.create(b && b.prototype, {
                  constructor: { value: v, writable: !0, configurable: !0 },
                })),
                  b && f(v, b));
              }
              function f(v, b) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (N, w) {
                      return ((N.__proto__ = w), N);
                    }),
                  f(v, b)
                );
              }
              function p(v) {
                var b = h();
                return function () {
                  var N = g(v);
                  if (b) {
                    var w = g(this).constructor;
                    N = Reflect.construct(N, arguments, w);
                  } else N = N.apply(this, arguments);
                  return (
                    (N =
                      !N || (o(N) !== "object" && typeof N != "function")
                        ? m(this)
                        : N),
                    N
                  );
                };
              }
              function m(v) {
                if (v === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return v;
              }
              function h() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function g(v) {
                return (
                  (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (b) {
                        return b.__proto__ || Object.getPrototypeOf(b);
                      }),
                  g(v)
                );
              }
              function x(v, b, N) {
                return (
                  b in v
                    ? Object.defineProperty(v, b, {
                        value: N,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (v[b] = N),
                  v
                );
              }
              var y = a("./ChunkedFileData");
              ((a = (function (v) {
                function b(w) {
                  if (!(this instanceof b))
                    throw new TypeError("Cannot call a class as a function");
                  var _ = N.call(this);
                  return (
                    x(m(_), "_blob", void 0),
                    x(m(_), "_fileData", void 0),
                    (_._blob = w),
                    (_._fileData = new y()),
                    _
                  );
                }
                u(b, v);
                var N = p(b);
                return (
                  d(
                    b,
                    [
                      {
                        key: "_init",
                        value: function (w) {
                          ((this._size = this._blob.size),
                            setTimeout(w.onSuccess, 1));
                        },
                      },
                      {
                        key: "loadRange",
                        value: function (w, _) {
                          var A = this,
                            k = (
                              this._blob.slice ||
                              this._blob.mozSlice ||
                              this._blob.webkitSlice
                            ).call(this._blob, w[0], w[1] + 1),
                            C = new FileReader();
                          ((C.onloadend = function (M) {
                            ((M = new Uint8Array(C.result)),
                              A._fileData.addData(w[0], M),
                              _.onSuccess());
                          }),
                            (C.onerror = C.onabort =
                              function (M) {
                                _.onError &&
                                  _.onError({ type: "blob", info: C.error });
                              }),
                            C.readAsArrayBuffer(k));
                        },
                      },
                      {
                        key: "getByteAt",
                        value: function (w) {
                          return this._fileData.getByteAt(w);
                        },
                      },
                    ],
                    [
                      {
                        key: "canReadFile",
                        value: function (w) {
                          return (
                            (typeof Blob < "u" && w instanceof Blob) ||
                            (typeof File < "u" && w instanceof File)
                          );
                        },
                      },
                    ],
                  ),
                  b
                );
              })(a("./MediaFileReader"))),
                (r.exports = a));
            },
            { "./ChunkedFileData": 5, "./MediaFileReader": 11 },
          ],
          5: [
            function (a, r, i) {
              function o(d, u) {
                for (var f = 0; f < u.length; f++) {
                  var p = u[f];
                  ((p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(d, p.key, p));
                }
              }
              function c(d, u, f) {
                return (u && o(d.prototype, u), f && o(d, f), d);
              }
              ((a = (function () {
                function d() {
                  if (!(this instanceof d))
                    throw new TypeError("Cannot call a class as a function");
                  ("_fileData" in this
                    ? Object.defineProperty(this, "_fileData", {
                        value: void 0,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (this._fileData = void 0),
                    (this._fileData = []));
                }
                return (
                  c(
                    d,
                    [
                      {
                        key: "addData",
                        value: function (u, f) {
                          var p = u + f.length - 1,
                            m = this._getChunkRange(u, p);
                          if (m.startIx === -1)
                            this._fileData.splice(m.insertIx || 0, 0, {
                              offset: u,
                              data: f,
                            });
                          else {
                            var h = this._fileData[m.startIx],
                              g = this._fileData[m.endIx];
                            p = p < g.offset + g.data.length - 1;
                            var x = { offset: Math.min(u, h.offset), data: f };
                            (u > h.offset &&
                              ((u = this._sliceData(h.data, 0, u - h.offset)),
                              (x.data = this._concatData(u, f))),
                              p &&
                                ((u = this._sliceData(
                                  x.data,
                                  0,
                                  g.offset - x.offset,
                                )),
                                (x.data = this._concatData(u, g.data))),
                              this._fileData.splice(
                                m.startIx,
                                m.endIx - m.startIx + 1,
                                x,
                              ));
                          }
                        },
                      },
                      {
                        key: "_concatData",
                        value: function (u, f) {
                          if (
                            typeof ArrayBuffer < "u" &&
                            ArrayBuffer.isView &&
                            ArrayBuffer.isView(u)
                          ) {
                            var p = new u.constructor(u.length + f.length);
                            return (p.set(u, 0), p.set(f, u.length), p);
                          }
                          return u.concat(f);
                        },
                      },
                      {
                        key: "_sliceData",
                        value: function (u, f, p) {
                          return u.slice ? u.slice(f, p) : u.subarray(f, p);
                        },
                      },
                      {
                        key: "_getChunkRange",
                        value: function (u, f) {
                          for (
                            var p, m, h = -1, g = -1, x = 0, y = 0;
                            y < this._fileData.length &&
                            ((m = this._fileData[y].offset),
                            (p = m + this._fileData[y].data.length),
                            !(f < m - 1));
                            y++, x = y
                          )
                            if (u <= p + 1 && f >= m - 1) {
                              h = y;
                              break;
                            }
                          if (h === -1)
                            return { startIx: -1, endIx: -1, insertIx: x };
                          for (
                            y = h;
                            y < this._fileData.length &&
                            ((m = this._fileData[y].offset),
                            (p = m + this._fileData[y].data.length),
                            f >= m - 1 && (g = y),
                            !(f <= p + 1));
                            y++
                          );
                          return (
                            g === -1 && (g = h),
                            { startIx: h, endIx: g }
                          );
                        },
                      },
                      {
                        key: "hasDataRange",
                        value: function (u, f) {
                          for (var p = 0; p < this._fileData.length; p++) {
                            var m = this._fileData[p];
                            if (f < m.offset) break;
                            if (u >= m.offset && f < m.offset + m.data.length)
                              return !0;
                          }
                          return !1;
                        },
                      },
                      {
                        key: "getByteAt",
                        value: function (u) {
                          for (var f, p = 0; p < this._fileData.length; p++) {
                            var m = this._fileData[p].offset,
                              h = m + this._fileData[p].data.length - 1;
                            if (u >= m && u <= h) {
                              f = this._fileData[p];
                              break;
                            }
                          }
                          if (f) return f.data[u - f.offset];
                          throw Error(
                            "Offset " + u + " hasn't been loaded yet.",
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "NOT_FOUND",
                        get: function () {
                          return -1;
                        },
                      },
                    ],
                  ),
                  d
                );
              })()),
                (r.exports = a));
            },
            {},
          ],
          6: [
            function (a, r, i) {
              function o(N) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (w) {
                          return typeof w;
                        }
                      : function (w) {
                          return w &&
                            typeof Symbol == "function" &&
                            w.constructor === Symbol &&
                            w !== Symbol.prototype
                            ? "symbol"
                            : typeof w;
                        }),
                  o(N)
                );
              }
              function c(N, w) {
                for (var _ = 0; _ < w.length; _++) {
                  var A = w[_];
                  ((A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    "value" in A && (A.writable = !0),
                    Object.defineProperty(N, A.key, A));
                }
              }
              function d(N, w, _) {
                return (w && c(N.prototype, w), _ && c(N, _), N);
              }
              function u(N, w) {
                if (typeof w != "function" && w !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((N.prototype = Object.create(w && w.prototype, {
                  constructor: { value: N, writable: !0, configurable: !0 },
                })),
                  w && f(N, w));
              }
              function f(N, w) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (_, A) {
                      return ((_.__proto__ = A), _);
                    }),
                  f(N, w)
                );
              }
              function p(N) {
                var w = h();
                return function () {
                  var _ = g(N);
                  if (w) {
                    var A = g(this).constructor;
                    _ = Reflect.construct(_, arguments, A);
                  } else _ = _.apply(this, arguments);
                  return (
                    (_ =
                      !_ || (o(_) !== "object" && typeof _ != "function")
                        ? m(this)
                        : _),
                    _
                  );
                };
              }
              function m(N) {
                if (N === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return N;
              }
              function h() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function g(N) {
                return (
                  (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (w) {
                        return w.__proto__ || Object.getPrototypeOf(w);
                      }),
                  g(N)
                );
              }
              function x(N, w, _) {
                return (
                  w in N
                    ? Object.defineProperty(N, w, {
                        value: _,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (N[w] = _),
                  N
                );
              }
              var y = [4, 132],
                v = [6, 134],
                b =
                  "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(
                    ";",
                  );
              ((a = (function (N) {
                function w() {
                  if (!(this instanceof w))
                    throw new TypeError("Cannot call a class as a function");
                  for (
                    var A = arguments.length, k = Array(A), C = 0;
                    C < A;
                    C++
                  )
                    k[C] = arguments[C];
                  return (
                    (A = _.call.apply(_, [this].concat(k))),
                    x(m(A), "_commentOffset", void 0),
                    x(m(A), "_pictureOffset", void 0),
                    A
                  );
                }
                u(w, N);
                var _ = p(w);
                return (
                  d(
                    w,
                    [
                      {
                        key: "_loadData",
                        value: function (A, k) {
                          var C = this;
                          A.loadRange([4, 7], {
                            onSuccess: function () {
                              C._loadBlock(A, 4, k);
                            },
                          });
                        },
                      },
                      {
                        key: "_loadBlock",
                        value: function (A, k, C) {
                          var M = this,
                            E = A.getByteAt(k),
                            S = A.getInteger24At(k + 1, !0);
                          if (y.indexOf(E) !== -1) {
                            var j = k + 4;
                            A.loadRange([j, j + S], {
                              onSuccess: function () {
                                ((M._commentOffset = j),
                                  M._nextBlock(A, k, E, S, C));
                              },
                            });
                          } else
                            v.indexOf(E) !== -1
                              ? ((j = k + 4),
                                A.loadRange([j, j + S], {
                                  onSuccess: function () {
                                    ((M._pictureOffset = j),
                                      M._nextBlock(A, k, E, S, C));
                                  },
                                }))
                              : M._nextBlock(A, k, E, S, C);
                        },
                      },
                      {
                        key: "_nextBlock",
                        value: function (A, k, C, M, E) {
                          var S = this;
                          127 < C
                            ? S._commentOffset
                              ? E.onSuccess()
                              : E.onError({
                                  type: "loadData",
                                  info: "Comment block could not be found.",
                                })
                            : A.loadRange([k + 4 + M, k + 4 + 4 + M], {
                                onSuccess: function () {
                                  S._loadBlock(A, k + 4 + M, E);
                                },
                              });
                        },
                      },
                      {
                        key: "_parseData",
                        value: function (A, k) {
                          var C =
                            A.getLongAt(this._commentOffset, !1) +
                            (this._commentOffset + 4);
                          ((k = A.getLongAt(C, !1)), (C += 4));
                          for (var M, E, S, j, T, I, L = 0; L < k; L++) {
                            var B = A.getLongAt(C, !1),
                              F = A.getStringWithCharsetAt(
                                C + 4,
                                B,
                                "utf-8",
                              ).toString(),
                              D = F.indexOf("=");
                            switch (
                              ((F = [F.slice(0, D), F.slice(D + 1)]),
                              F[0].toUpperCase())
                            ) {
                              case "TITLE":
                                M = F[1];
                                break;
                              case "ARTIST":
                                E = F[1];
                                break;
                              case "ALBUM":
                                S = F[1];
                                break;
                              case "TRACKNUMBER":
                                j = F[1];
                                break;
                              case "GENRE":
                                T = F[1];
                            }
                            C += 4 + B;
                          }
                          return (
                            this._pictureOffset &&
                              ((I = A.getLongAt(this._pictureOffset, !0)),
                              (k = this._pictureOffset + 4),
                              (C = A.getLongAt(k, !0)),
                              (L = k + 4),
                              (k = A.getStringAt(L, C)),
                              (C = L + C),
                              (L = A.getLongAt(C, !0)),
                              (B = C + 4),
                              (C = A.getStringWithCharsetAt(
                                B,
                                L,
                                "utf-8",
                              ).toString()),
                              (L = B + L + 16),
                              (B = A.getLongAt(L, !0)),
                              (A = A.getBytesAt(L + 4, B, !0)),
                              (I = {
                                format: k,
                                type: b[I],
                                description: C,
                                data: A,
                              })),
                            {
                              type: "FLAC",
                              version: "1",
                              tags: {
                                title: M,
                                artist: E,
                                album: S,
                                track: j,
                                genre: T,
                                picture: I,
                              },
                            }
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "getTagIdentifierByteRange",
                        value: function () {
                          return { offset: 0, length: 4 };
                        },
                      },
                      {
                        key: "canReadTagFormat",
                        value: function (A) {
                          return (
                            String.fromCharCode.apply(String, A.slice(0, 4)) ===
                            "fLaC"
                          );
                        },
                      },
                    ],
                  ),
                  w
                );
              })(a("./MediaTagReader"))),
                (r.exports = a));
            },
            { "./MediaTagReader": 12 },
          ],
          7: [
            function (a, r, i) {
              function o(x) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (y) {
                          return typeof y;
                        }
                      : function (y) {
                          return y &&
                            typeof Symbol == "function" &&
                            y.constructor === Symbol &&
                            y !== Symbol.prototype
                            ? "symbol"
                            : typeof y;
                        }),
                  o(x)
                );
              }
              function c(x, y) {
                for (var v = 0; v < y.length; v++) {
                  var b = y[v];
                  ((b.enumerable = b.enumerable || !1),
                    (b.configurable = !0),
                    "value" in b && (b.writable = !0),
                    Object.defineProperty(x, b.key, b));
                }
              }
              function d(x, y, v) {
                return (y && c(x.prototype, y), v && c(x, v), x);
              }
              function u(x, y) {
                if (typeof y != "function" && y !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((x.prototype = Object.create(y && y.prototype, {
                  constructor: { value: x, writable: !0, configurable: !0 },
                })),
                  y && f(x, y));
              }
              function f(x, y) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (v, b) {
                      return ((v.__proto__ = b), v);
                    }),
                  f(x, y)
                );
              }
              function p(x) {
                var y = m();
                return function () {
                  var v = h(x);
                  if (y) {
                    var b = h(this).constructor;
                    v = Reflect.construct(v, arguments, b);
                  } else v = v.apply(this, arguments);
                  if (!v || (o(v) !== "object" && typeof v != "function")) {
                    if (this === void 0)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    v = this;
                  }
                  return v;
                };
              }
              function m() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function h(x) {
                return (
                  (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (y) {
                        return y.__proto__ || Object.getPrototypeOf(y);
                      }),
                  h(x)
                );
              }
              ((i = a("./MediaTagReader")),
                a("./MediaFileReader"),
                (a = (function (x) {
                  function y() {
                    if (!(this instanceof y))
                      throw new TypeError("Cannot call a class as a function");
                    return v.apply(this, arguments);
                  }
                  u(y, x);
                  var v = p(y);
                  return (
                    d(
                      y,
                      [
                        {
                          key: "_loadData",
                          value: function (b, N) {
                            var w = b.getSize();
                            b.loadRange([w - 128, w - 1], N);
                          },
                        },
                        {
                          key: "_parseData",
                          value: function (b, N) {
                            var w = b.getSize() - 128,
                              _ = b
                                .getStringWithCharsetAt(w + 3, 30)
                                .toString(),
                              A = b
                                .getStringWithCharsetAt(w + 33, 30)
                                .toString(),
                              k = b
                                .getStringWithCharsetAt(w + 63, 30)
                                .toString(),
                              C = b
                                .getStringWithCharsetAt(w + 93, 4)
                                .toString(),
                              M = b.getByteAt(w + 97 + 28);
                            if (
                              ((N = b.getByteAt(w + 97 + 29)), M == 0 && N != 0)
                            ) {
                              var E = "1.1";
                              M = b
                                .getStringWithCharsetAt(w + 97, 28)
                                .toString();
                            } else
                              ((E = "1.0"),
                                (M = b
                                  .getStringWithCharsetAt(w + 97, 30)
                                  .toString()),
                                (N = 0));
                            return (
                              (b = b.getByteAt(w + 97 + 30)),
                              (b = {
                                type: "ID3",
                                version: E,
                                tags: {
                                  title: _,
                                  artist: A,
                                  album: k,
                                  year: C,
                                  comment: M,
                                  genre: 255 > b ? g[b] : "",
                                },
                              }),
                              N && (b.tags.track = N),
                              b
                            );
                          },
                        },
                      ],
                      [
                        {
                          key: "getTagIdentifierByteRange",
                          value: function () {
                            return { offset: -128, length: 128 };
                          },
                        },
                        {
                          key: "canReadTagFormat",
                          value: function (b) {
                            return (
                              String.fromCharCode.apply(
                                String,
                                b.slice(0, 3),
                              ) === "TAG"
                            );
                          },
                        },
                      ],
                    ),
                    y
                  );
                })(i)));
              var g =
                "Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(
                  ";",
                );
              r.exports = a;
            },
            { "./MediaFileReader": 11, "./MediaTagReader": 12 },
          ],
          8: [
            function (a, r, i) {
              function o(x, y) {
                for (var v = 0; v < y.length; v++) {
                  var b = y[v];
                  ((b.enumerable = b.enumerable || !1),
                    (b.configurable = !0),
                    "value" in b && (b.writable = !0),
                    Object.defineProperty(x, b.key, b));
                }
              }
              function c(x, y, v) {
                return (v && o(x, v), x);
              }
              function d(x) {
                switch (x) {
                  case 0:
                    x = "iso-8859-1";
                    break;
                  case 1:
                    x = "utf-16";
                    break;
                  case 2:
                    x = "utf-16be";
                    break;
                  case 3:
                    x = "utf-8";
                    break;
                  default:
                    x = "iso-8859-1";
                }
                return x;
              }
              function u(x, y, v, b) {
                var N = v.getStringWithCharsetAt(x + 1, y - 1, b);
                return (
                  (x = v.getStringWithCharsetAt(
                    x + 1 + N.bytesReadCount,
                    y - 1 - N.bytesReadCount,
                    b,
                  )),
                  { user_description: N.toString(), data: x.toString() }
                );
              }
              a("./MediaFileReader");
              var f = a("./StringUtils"),
                p = a("./ArrayFileReader"),
                m = {
                  BUF: "Recommended buffer size",
                  CNT: "Play counter",
                  COM: "Comments",
                  CRA: "Audio encryption",
                  CRM: "Encrypted meta frame",
                  ETC: "Event timing codes",
                  EQU: "Equalization",
                  GEO: "General encapsulated object",
                  IPL: "Involved people list",
                  LNK: "Linked information",
                  MCI: "Music CD Identifier",
                  MLL: "MPEG location lookup table",
                  PIC: "Attached picture",
                  POP: "Popularimeter",
                  REV: "Reverb",