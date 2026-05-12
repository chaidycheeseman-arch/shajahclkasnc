                      type: "button",
                      onClick: De,
                      className: `text-[0.72rem] font-mono tracking-wide transition-colors ${Ce ? "text-violet-500" : "text-gray-300 hover:text-gray-400"}`,
                      "aria-label": "切换详细日志",
                      children: "VOL.01",
                    }),
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-hidden",
                    children: e.jsx(nse, {
                      onBack: () => Ie("main"),
                      verboseEnabled: Ce,
                    }),
                  }),
                ],
              }),
            He === "notifications" && Xl(),
            He === "appearance" && ef(),
            He === "appearance-effects" && nl(),
            He === "appearance-fonts" && Oc(),
            He === "appearance-apps" && kd(),
            He === "appearance-wallpaper" && tf(),
            He === "appearance-system" && Sd(),
            He === "appearance-colors" && sf(),
            He === "voice" && _d(),
            He === "data" && nf(),
            He === "language" && Ad(),
            He === "disclaimer" && vi(),
            me && He === "gatekeeper_account" && Cd(),
          ],
        }),
        e.jsx(Os, {
          children:
            At &&
            e.jsx("div", {
              className:
                "absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm",
              children: e.jsxs(We.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className:
                  "bg-white p-8 w-full max-w-sm shadow-2xl border border-gray-200",
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-serif italic text-gray-900 mb-4",
                    children: Me.resetConfirmTitle,
                  }),
                  e.jsx("p", {
                    className: "text-gray-500 text-sm mb-8 leading-relaxed",
                    children: Me.resetConfirmDesc,
                  }),
                  e.jsxs("label", {
                    className:
                      "mb-6 flex items-start gap-3 text-left cursor-pointer",
                    children: [
                      e.jsx("input", {
                        type: "checkbox",
                        checked: Vt,
                        onChange: (Et) => qt(Et.target.checked),
                        className: "mt-1",
                      }),
                      e.jsx("span", {
                        className: "text-xs text-gray-600 leading-relaxed",
                        children:
                          "保留门禁登录状态（默认开启）。关闭后将同时退出门禁账号并清除设备识别信息。",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 min-w-0",
                    children: [
                      e.jsx(Pa, {
                        onClick: () => Jt(!1),
                        variant: "secondary",
                        className: "min-w-0 w-full px-4",
                        children: Me.cancel,
                      }),
                      e.jsx(Pa, {
                        onClick: La,
                        className:
                          "min-w-0 w-full bg-red-600 px-4 hover:bg-red-700 border-red-600",
                        children: Me.confirm,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            lt &&
            e.jsx("div", {
              className:
                "absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm",
              children: e.jsxs(We.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className:
                  "bg-white p-6 w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200",
                children: [
                  e.jsx("h3", {
                    className:
                      "text-xl font-serif italic text-gray-900 mb-1 shrink-0",
                    children: "导出数据",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-gray-500 mb-4 shrink-0",
                    children:
                      "勾选要写入备份文件的内容；未勾选的键不会出现在导出文件中。JSON 与 ZIP 内容一致，ZIP 适合大备份。",
                  }),
                  os &&
                    e.jsx("p", {
                      className:
                        "text-xs text-amber-800 bg-amber-50 border border-amber-100 px-3 py-2 mb-3 rounded-sm shrink-0",
                      children:
                        "正在准备备份文件，数据较多时可能需要数十秒，请勿关闭此窗口…",
                    }),
                  e.jsx("div", {
                    className: "flex-1 min-h-0 overflow-y-auto mb-4",
                    children: e.jsx("div", {
                      className: nr(os && "pointer-events-none opacity-50"),
                      children: oa(Ht, is),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col gap-2 shrink-0",
                    children: [
                      e.jsxs(Pa, {
                        onClick: Ea,
                        loading: os,
                        className: "w-full",
                        children: [e.jsx(Ta, { size: 14 }), " 导出为 JSON"],
                      }),
                      e.jsxs(Pa, {
                        onClick: Fn,
                        loading: os,
                        variant: "secondary",
                        className: "w-full",
                        children: [e.jsx(Ta, { size: 14 }), " 导出为 ZIP"],
                      }),
                      e.jsx(Pa, {
                        onClick: () => it(!1),
                        disabled: os,
                        variant: "secondary",
                        className: "w-full",
                        children: Me.cancel,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            pt &&
            e.jsx("div", {
              className:
                "absolute inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/20 backdrop-blur-sm",
              children: e.jsxs(We.div, {
                initial: { scale: 0.96, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.96, opacity: 0 },
                className:
                  "flex max-h-[min(90vh,640px)] w-full min-h-0 max-w-lg flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-2xl",
                children: [
                  e.jsxs("div", {
                    className:
                      "shrink-0 border-b border-gray-100 px-4 pb-3 pt-4 sm:px-5 sm:pt-5",
                    children: [
                      e.jsx("h3", {
                        className: "text-xl font-serif italic text-gray-900",
                        children: "GitHub 云备份",
                      }),
                      e.jsx("p", {
                        className: "mt-1 text-xs text-gray-500 leading-relaxed",
                        children:
                          "数据存到你自己的 GitHub 私人仓库，大文件会自动拆成小份上传。",
                      }),
                      e.jsxs("button", {
                        type: "button",
                        onClick: () => xt(!0),
                        className:
                          "mt-3 flex w-full items-center justify-center gap-2 rounded-sm border-2 border-gray-900 bg-[#FDFBF7] px-3 py-3 text-sm font-bold tracking-wide text-gray-900 transition-colors hover:bg-gray-900 hover:text-white active:scale-[0.99]",
                        children: [
                          e.jsx(ui, { size: 18, strokeWidth: 2 }),
                          "零基础图文教程（推荐先看）",
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "mt-2 text-center text-[0.65rem] leading-relaxed text-gray-400",
                        children:
                          "第一次用？先点上面按钮，按教程在电脑上完成 GitHub 操作，再回来填下面三格。",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-4 py-3 sm:px-5 touch-pan-y",
                    children: [
                      Qn
                        ? e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-[0.65rem] uppercase tracking-wider text-gray-400 mb-1",
                                    children: "仓库 owner/repo",
                                  }),
                                  e.jsx("input", {
                                    type: "text",
                                    className:
                                      "w-full border border-gray-200 px-3 py-2 text-sm font-mono bg-white",
                                    placeholder: "例如 myname/phone-backup",
                                    value: fn.repo,
                                    onChange: (Et) =>
                                      Rn((Ms) => ({
                                        ...Ms,
                                        repo: Et.target.value,
                                      })),
                                    autoComplete: "off",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-[0.65rem] uppercase tracking-wider text-gray-400 mb-1",
                                    children: "分支",
                                  }),
                                  e.jsx("input", {
                                    type: "text",
                                    className:
                                      "w-full border border-gray-200 px-3 py-2 text-sm font-mono bg-white",
                                    placeholder: "main",
                                    value: fn.branch,
                                    onChange: (Et) =>
                                      Rn((Ms) => ({
                                        ...Ms,
                                        branch: Et.target.value,
                                      })),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-[0.65rem] uppercase tracking-wider text-gray-400 mb-1",
                                    children: "Personal Access Token",
                                  }),
                                  e.jsx("input", {
                                    type: "password",
                                    className:
                                      "w-full border border-gray-200 px-3 py-2 text-sm font-mono bg-white",
                                    placeholder: "ghp_… 或 Fine-grained token",
                                    value: fn.token,
                                    onChange: (Et) =>
                                      Rn((Ms) => ({
                                        ...Ms,
                                        token: Et.target.value,
                                      })),
                                    autoComplete: "off",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "border-t border-gray-100 pt-3 mt-1 space-y-3",
                                children: [
                                  e.jsx(Fi, {
                                    checked: !!fn.scheduleEnabled,
                                    onChange: (Et) =>
                                      Rn((Ms) => ({
                                        ...Ms,
                                        scheduleEnabled: Et,
                                      })),
                                    label:
                                      "每日定时备份（需保持本应用页面打开）",
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("label", {
                                        className:
                                          "block text-[0.65rem] uppercase tracking-wider text-gray-400 mb-1",
                                        children: "定时时刻（本地时间）",
                                      }),
                                      e.jsx("input", {
                                        type: "time",
                                        className:
                                          "w-full border border-gray-200 px-3 py-2 text-sm font-mono bg-white disabled:opacity-40",
                                        value: fn.scheduleTime || "03:00",
                                        onChange: (Et) =>
                                          Rn((Ms) => ({
                                            ...Ms,
                                            scheduleTime:
                                              Et.target.value || "03:00",
                                          })),
                                        disabled: !fn.scheduleEnabled,
                                      }),
                                    ],
                                  }),
                                  fn.lastScheduledBackupDay
                                    ? e.jsxs("p", {
                                        className:
                                          "text-[0.65rem] text-gray-400",
                                        children: [
                                          "上次定时备份日期：",
                                          fn.lastScheduledBackupDay,
                                        ],
                                      })
                                    : null,
                                  e.jsxs("p", {
                                    className:
                                      "text-[0.65rem] text-gray-400 leading-relaxed",
                                    children: [
                                      "到达设定本地时间且当日尚未备份时，会自动上传（全部分区）；约每 5 秒检查一次，回到本页或网络恢复时也会再试；上传失败会自动重试多次。每天最多成功备份一次；若当日已成功过，需次日才会再跑。调试可在控制台查看",
                                      " ",
                                      e.jsx("span", {
                                        className: "font-mono text-[0.6rem]",
                                        children:
                                          "window.__PHONE_GITHUB_SCHEDULE__",
                                      }),
                                      "。请保持本应用页面打开，并打开「每日定时备份」开关。",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(Pa, {
                                variant: "secondary",
                                className: "w-full",
                                onClick: En,
                                loading: Es,
                                disabled: Es,
                                children: "测试连接",
                              }),
                            ],
                          })
                        : e.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "加载配置中…",
                          }),
                      e.jsx("p", {
                        className: "text-xs text-gray-600 mb-2 mt-4 shrink-0",
                        children:
                          "手动上传时使用下列分区（与本地 ZIP 全量导出一致）",
                      }),
                      e.jsx("div", {
                        className: nr(
                          "pb-1",
                          (Es || !Qn) && "pointer-events-none opacity-50",
                        ),
                        children: oa(Rs, Rt),
                      }),
                      Hs
                        ? e.jsx("p", {
                            className:
                              "text-xs text-amber-800 bg-amber-50 border border-amber-100 px-3 py-2 mt-3 rounded-sm",
                            children: Hs,
                          })
                        : null,
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex shrink-0 flex-col gap-2 border-t border-gray-100 bg-white px-4 py-3 sm:px-5",
                    children: [
                      e.jsxs(Pa, {
                        onClick: Vn,
                        loading: Es,
                        disabled: Es || !Qn,
                        className: "w-full",
                        children: [e.jsx(Ta, { size: 14 }), " 上传到 GitHub"],
                      }),
                      e.jsxs(Pa, {
                        onClick: wa,
                        loading: Es,
                        disabled: Es || !Qn,
                        variant: "secondary",
                        className: "w-full",
                        children: [
                          e.jsx(Or, { size: 14 }),
                          " 从 GitHub 选择备份并导入",
                        ],
                      }),
                      e.jsx(Pa, {
                        onClick: () => !Es && qe(!1),
                        disabled: Es,
                        variant: "secondary",
                        className: "w-full",
                        children: Me.cancel,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, { children: dt && e.jsx(tse, { onClose: () => xt(!1) }) }),
        e.jsx(Os, {
          children:
            zt &&
            Cs &&
            e.jsx(Xte, {
              owner: Cs.owner,
              repo: Cs.repo,
              branch: Cs.branch,
              token: Cs.token,
              onClose: () => {
                (ms(!1), us(null));
              },
              onConfirm: ia,
            }),
        }),
        e.jsx(Os, {
          children:
            St &&
            e.jsx("div", {
              className:
                "absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm",
              children: e.jsxs(We.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className:
                  "bg-white p-6 w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200",
                children: [
                  e.jsx("h3", {
                    className:
                      "text-xl font-serif italic text-gray-900 mb-1 shrink-0",
                    children: "导入数据",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-gray-500 mb-4 shrink-0",
                    children:
                      bt === "zip"
                        ? "已识别 ZIP 分包备份。下方勾选要写入本机的分区；未勾选的条目不会写入。"
                        : "已识别 JSON 单文件备份（与旧版兼容）。下方勾选要写入的分区。",
                  }),
                  ys &&
                    e.jsx("p", {
                      className:
                        "text-xs text-amber-800 bg-amber-50 border border-amber-100 px-3 py-2 mb-3 rounded-sm shrink-0",
                      children: "正在写入数据，请勿关闭此窗口…",
                    }),
                  e.jsx("div", {
                    className: "flex-1 min-h-0 overflow-y-auto mb-4",
                    children: e.jsx("div", {
                      className: nr(ys && "pointer-events-none opacity-50"),
                      children: oa(rt, ze),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 min-w-0 shrink-0",
                    children: [
                      e.jsx(Pa, {
                        onClick: () => {
                          (Cr(), Be(!1));
                        },
                        disabled: ys,
                        variant: "secondary",
                        className: "min-w-0 w-full px-4",
                        children: Me.cancel,
                      }),
                      e.jsx(Pa, {
                        onClick: zs,
                        loading: ys,
                        className: "min-w-0 w-full px-4",
                        children: Me.confirm,
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
        e.jsx(Os, {
          children:
            Lt &&
            e.jsx("div", {
              className:
                "absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm",
              children: e.jsxs(We.div, {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                className:
                  "bg-white p-8 w-full max-w-sm shadow-2xl border border-gray-200",
                children: [
                  e.jsx("h3", {
                    className: "text-xl font-serif italic text-gray-900 mb-2",
                    children: "重置聊天主题",
                  }),
                  e.jsx("p", {
                    className: "text-gray-500 text-sm mb-6 leading-relaxed",
                    children:
                      "选择一个联系人，将仅把该联系人的聊天窗口主题切回默认（保留其他预设）。",
                  }),
                  e.jsx("div", {
                    className: "max-h-[46vh] overflow-y-auto pr-1 mb-6",
                    children:
                      Li.length === 0
                        ? e.jsx("div", {
                            className: "text-sm text-gray-500",
                            children: "暂无可重置的联系人",
                          })
                        : e.jsx("div", {
                            className: "space-y-2",
                            children: Li.map((Et) => {
                              const Ms = String(js) === String(Et.id);
                              return e.jsx(
                                "button",
                                {
                                  onClick: () => cs(Et.id),
                                  className: [
                                    "w-full text-left px-4 py-3 border rounded-xl transition-colors",
                                    Ms
                                      ? "bg-gray-900 text-white border-gray-900"
                                      : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50",
                                  ].join(" "),
                                  children: e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className: "truncate",
                                        children: Ba(Et),
                                      }),
                                      Ms &&
                                        e.jsx(On, {
                                          size: 16,
                                          className: "shrink-0",
                                        }),
                                    ],
                                  }),
                                },
                                Et.id,
                              );
                            }),
                          }),
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 min-w-0",
                    children: [
                      e.jsx(Pa, {
                        onClick: () => Qt(!1),
                        variant: "secondary",
                        className: "min-w-0 w-full px-4",
                        children: Me.cancel,
                      }),
                      e.jsx(Pa, {
                        onClick: Nn,
                        loading: Ne,
                        className: [
                          "min-w-0 w-full px-4",
                          js ? "" : "opacity-60 cursor-not-allowed",
                        ].join(" "),
                        children: "确认重置",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  Dy = {},
  x2 = () =>
    typeof import.meta < "u" && Dy != null && Dy.VITE_AMAP_WEB_KEY
      ? void 0
      : typeof window < "u"
        ? window.__AMAP_WEB_KEY__
        : "";
function z1(t) {
  if (!t || typeof t != "string") return !1;
  const s = t
    .trim()
    .split(",")
    .map((n) => parseFloat(n, 10));
  return s.length === 2 && s.every((n) => !Number.isNaN(n));
}
async function $y(t, s = "") {
  const n = x2();
  if (!n) return [];
  const a = (t || "").trim();
  if (!a) return [];
  try {
    const r = new URLSearchParams({ key: n, keywords: a, datatype: "all" });
    s && r.set("city", s);
    const o = await (
      await fetch(
        `https://restapi.amap.com/v3/assistant/inputtips?${r.toString()}`,
      )
    ).json();
    return o.status !== "1" || !Array.isArray(o.tips)
      ? []
      : o.tips
          .filter((c) => c.location && c.name)
          .map((c) => ({
            name: c.name,
            address: c.address || c.district || "",
            location: c.location,
            district: c.district || c.address || "",
          }));
  } catch {
    return [];
  }
}
async function R1(t, s) {
  var c;
  const n = `https://restapi.amap.com/v3/geocode/geo?key=${encodeURIComponent(t)}&address=${encodeURIComponent(s)}`,
    i = (c = (await (await fetch(n)).json()).geocodes) == null ? void 0 : c[0];
  if (!(i != null && i.location)) return null;
  const o =
    (i.city && Array.isArray(i.city) ? i.city[0] : i.city) || i.province || "";
  return { location: i.location, city: String(o || "").trim() };
}
async function M5(t, s, n) {
  var o, c, d, u;
  const a = `https://restapi.amap.com/v3/direction/driving?key=${encodeURIComponent(t)}&origin=${encodeURIComponent(s)}&destination=${encodeURIComponent(n)}&extensions=all`,
    i = await (await fetch(a)).json();
  return i.status !== "1" ||
    !(
      (u =
        (d =
          (c = (o = i.route) == null ? void 0 : o.paths) == null
            ? void 0
            : c[0]) == null
          ? void 0
          : d.steps) != null && u.length
    )
    ? []
    : i.route.paths[0].steps.map((f, p) => {
        var m, h;
        return {
          title:
            ((m = f.instruction) == null
              ? void 0
              : m.replace(/<[^>]+>/g, "").slice(0, 20)) || `步骤${p + 1}`,
          desc:
            ((h = f.instruction) == null
              ? void 0
              : h.replace(/<[^>]+>/g, "")) ||
            f.road ||
            "",
        };
      });
}
function lse(t) {
  if (t == null || t === "") return "";
  const s = Number(t);
  return Number.isNaN(s)
    ? ""
    : s >= 1e3
      ? `约${(s / 1e3).toFixed(1)}公里`
      : `约${Math.round(s)}米`;
}
function Vf(t) {
  if (!t) return "";
  const s = Array.isArray(t) ? t[0] : t;
  return s != null && s.name && typeof s.name == "string" ? s.name.trim() : "";
}
async function cse(t, s, n, a = "北京", r = {}) {
  var C, M, E, S;
  const i = a || "北京",
    o = new Date(),
    c =
      r.date ??
      `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(2, "0")}-${String(o.getDate()).padStart(2, "0")}`,
    d =
      r.time ??
      `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`,
    f = `https://restapi.amap.com/v3/direction/transit/integrated?${new URLSearchParams({ key: t, origin: s, destination: n, city: i, extensions: "all", date: c, time: d }).toString()}`,
    m = await (await fetch(f)).json();
  if (
    m.status !== "1" ||
    !(
      (S =
        (E =
          (M = (C = m.route) == null ? void 0 : C.transits) == null
            ? void 0
            : M[0]) == null
          ? void 0
          : E.segments) != null && S.length
    )
  )
    return [];
  const h = [],
    g = (j) => (j || "").replace(/<[^>]+>/g, "").trim();
  function x(j) {
    var L, B, F, D, $, P, z, O;
    if (!j) return "";
    const T = Vf(
      j.entrance ||
        ((L = j.bus) == null ? void 0 : L.entrance) ||
        ((B = j.railway) == null ? void 0 : B.entrance),
    );
    if (T) return `至${T}进站`;
    const I =
      ((D = (F = j.bus) == null ? void 0 : F.departure_stop) == null
        ? void 0
        : D.name) ??
      ((P = ($ = j.railway) == null ? void 0 : $.departure_stop) == null
        ? void 0
        : P.name) ??
      ((z = j.bus) == null ? void 0 : z.departure_stop) ??
      ((O = j.railway) == null ? void 0 : O.departure_stop);
    return I ? `至${I}` : "";
  }
  function y(j, T, I) {
    let L = g(j == null ? void 0 : j.instruction);
    !L &&
      Array.isArray(j == null ? void 0 : j.steps) &&
      j.steps.length &&
      (L =
        j.steps
          .map(($) => g($.instruction))
          .filter(Boolean)
          .join("，") || "");
    const B = lse(j == null ? void 0 : j.distance);
    L && B && !/公里|米/.test(L)
      ? (L = `${L}（${B}）`)
      : L || (L = B ? `步行${B}` : "步行一段");
    const F = I[T + 1],
      D = x(F);
    return D
      ? `${L}${L.endsWith("。") ? "" : "，"}${D}`
      : F
        ? L
        : `${L}${L.endsWith("。") ? "" : "，"}至目的地`;
  }
  function v(j) {
    if (!j || typeof j != "string") return "";
    const T = j.match(
      /(?:乘坐|坐|乘)?\s*(S\d+号线?|\d+号线|[一二三四五六七八九十\d]+号线|[\u4e00-\u9fa5]+\d*路)/i,
    );
    return T ? T[1].trim() : "";
  }
  let b = "",
    N = "";
  function w(j, T, I) {
    var Z, K, q;
    let L =
      (j == null ? void 0 : j.name) ||
      (j == null ? void 0 : j.busname) ||
      ((Z = j == null ? void 0 : j.transport) == null ? void 0 : Z.name) ||
      (j != null && j.type ? `${j.type}` : "") ||
      "";
    const B =
        ((K = j.departure_stop) == null ? void 0 : K.name) ?? j.departure_stop,
      F = ((q = j.arrival_stop) == null ? void 0 : q.name) ?? j.arrival_stop,
      D = j.via_num,
      $ = I ? Vf((T == null ? void 0 : T.entrance) || j.entrance) : "",
      P = Vf((T == null ? void 0 : T.exit) || j.exit);
    (P && (b = P), F && (N = F));
    let z = g(j.instruction);
    (z ||
      (B && F
        ? (z =
            D != null && D !== ""
              ? `从${B}上车，${D}站后在${F}下车`
              : `从${B}到${F}`)
        : (z = L ? `乘坐${L}` : "乘车")),
      L || (L = v(z) || v(j == null ? void 0 : j.instruction) || "公交/地铁"));
    const O = [];
    ($ && O.push(`从${$}进站`),
      O.push(z),
      P && O.push(`从${P}出站`),
      D != null && D !== "" && !/站|站后/.test(z) && O.push(`共${D}站`),
      h.push({ title: String(L).trim() || "公交/地铁", desc: O.join("；") }));
  }
  const _ = m.route.transits[0].segments;
  _.forEach((j, T) => {
    var P, z, O, Z;
    j.walking && h.push({ title: "步行", desc: y(j.walking, T, _) });
    const I = j.buslines ?? ((P = j.bus) == null ? void 0 : P.buslines),
      L = j.bus || j.transit,
      B = (Array.isArray(I) && I.length) || (L && typeof L == "object"),
      F = _[T + 1],
      D =
        F &&
        (T + 2 < _.length ||
          !!(
            F.bus ||
            F.transit ||
            F.railway ||
            (F.buslines && F.buslines.length)
          ));
    if (Array.isArray(I) && I.length)
      I.forEach((K, q) => {
        var le;
        w(K, j, q === 0);
        const V =
          ((le = K.arrival_stop) == null ? void 0 : le.name) ?? K.arrival_stop;
        Vf(j.exit || K.exit) &&
          V &&
          D &&
          q === I.length - 1 &&
          h.push({ title: "下车", desc: `${V}站下车，站内换乘` });
      });
    else if (L && typeof L == "object") {
      w(L, j, !0);
      const K =
        ((z = L.arrival_stop) == null ? void 0 : z.name) ?? L.arrival_stop;
      Vf(j.exit || L.exit) &&
        K &&
        D &&
        h.push({ title: "下车", desc: `${K}站下车，站内换乘` });
    }
    if (B) return;
    const $ = j.railway;
    if ($ && typeof $ == "object") {
      const K =
        ((O = $.arrival_stop) == null ? void 0 : O.name) ?? $.arrival_stop;
      K && (N = K);
      const q = $.name || $.trip || "",
        V =
          /地铁|号线|轨交|metro/i.test(q) ||
          ($.type && /地铁|轨交/i.test(String($.type))),
        ne = v(q) || v(g($.instruction)) || q,
        le =
          ((Z = $.departure_stop) == null ? void 0 : Z.name) ??
          $.departure_stop;
      let ie = g($.instruction);
      if ((!ie && le && K && (ie = `${le} → ${K}`), V)) {
        const X = ne ? `地铁 · ${ne}` : "地铁";
        ((ie = ie ? `正在乘坐中：${ie}` : "正在乘坐中"),
          h.push({ title: X, desc: ie }));
      } else h.push({ title: "正在乘坐中", desc: ie || "当前乘车中" });
    }
  });
  const A = h[h.length - 1],
    k = A && /公交|地铁|火车|城际|号线|正在乘坐中/.test(A.title);
  if (h.length && k)
    ((A.title = "抵达终点"),
      (A.desc = [N, b ? `从${b}出站` : ""].filter(Boolean).join("，")));
  else if (h.length >= 2) {
    const j = h[h.length - 2];
    A.title === "步行" &&
      j &&
      /公交|地铁|火车|城际|号线|正在乘坐中/.test(j.title) &&
      ((j.title = "抵达终点"),
      (j.desc = [N, b ? `从${b}出站` : ""].filter(Boolean).join("，")));
  }
  if (h.length && b) {
    const j = h[h.length - 1];
    j.title === "步行" &&
      !/出站|出口|号口/.test(j.desc) &&
      (j.desc = `从${b}出站后，${j.desc}`);
  }
  return h.length ? h : [{ title: "公交", desc: "暂无公交路线" }];
}
async function dse(t, s, n) {
  var o, c, d, u;
  const a = `https://restapi.amap.com/v3/direction/walking?key=${encodeURIComponent(t)}&origin=${encodeURIComponent(s)}&destination=${encodeURIComponent(n)}`,
    i = await (await fetch(a)).json();
  return i.status !== "1" ||
    !(
      (u =
        (d =
          (c = (o = i.route) == null ? void 0 : o.paths) == null
            ? void 0
            : c[0]) == null
          ? void 0
          : d.steps) != null && u.length
    )
    ? []
    : i.route.paths[0].steps.map((f, p) => {
        var m, h;
        return {
          title:
            ((m = f.instruction) == null
              ? void 0
              : m.replace(/<[^>]+>/g, "").slice(0, 20)) || `步骤${p + 1}`,
          desc:
            ((h = f.instruction) == null
              ? void 0
              : h.replace(/<[^>]+>/g, "")) ||
            f.road ||
            "",
        };
      });
}
function d0(t, s, n) {
  const a = {
    metro: [
      { title: "Entrance", desc: `从 ${s} 进站，接受安检。` },
      { title: "Platform", desc: "前往站台，搭乘地铁。" },
      { title: "Ride", desc: "途径数站，注意听报站。" },
      { title: "Arrive", desc: `抵达 ${n} 站。` },
      { title: "Exit", desc: "推荐使用有扶梯的出口。" },
    ],
    bus: [
      { title: "Walk", desc: `前往 ${s} 附近公交站。` },
      { title: "Wait", desc: "等车时注意安全。" },
      { title: "Board", desc: "上车请刷卡或投币。" },
      { title: "Alight", desc: `在 ${n} 站下车。` },
      { title: "Walk", desc: "步行至目的地。" },
    ],
    walk: [
      { title: "Start", desc: `从 ${s} 出发。` },
      { title: "Route", desc: "沿导航路线步行。" },
      { title: "Arrive", desc: `抵达 ${n}。` },
    ],
    car: [
      { title: "Depart", desc: `从 ${s} 出发。` },
      { title: "Route", desc: "按导航行驶，注意限速。" },
      { title: "Arrive", desc: `抵达 ${n}。` },
    ],
  };
  return (a[t] || a.car).map((r) => ({ ...r, reminder: "" }));
}
async function T5(t, s, n, a = {}) {
  const r = x2(),
    i = (t || "").trim(),
    o = (s || "").trim();
  if (!i || !o) return d0(n || "car", i || "起点", o || "终点");
  if (!r) return d0(n, i, o);
  try {
    let c = z1(i) ? i : null,
      d = z1(o) ? o : null,
      u = "";
    if (!c) {
      const f = await R1(r, i);
      f && ((c = f.location), (u = f.city || ""));
    }
    if (!d) {
      const f = await R1(r, o);
      f && (d = f.location);
    }
    return !c || !d
      ? d0(n, i, o)
      : n === "car"
        ? await M5(r, c, d)
        : n === "walk"
          ? await dse(r, c, d)
          : n === "metro" || n === "bus"
            ? await cse(r, c, d, u || "北京", a)
            : await M5(r, c, d);
  } catch {
    return d0(n, i, o);
  }
}
async function use(t, s = {}) {
  const n = x2(),
    a = s.radius ?? 5e3,
    r = s.types ?? "050000";
  let i = (t || "").trim();
  if (!i) return [];
  if (!n) return [];
  try {
    if (!z1(i)) {
      const f = await R1(n, i);
      if (!f) return [];
      i = f.location;
    }
    const o = [],
      c = 25;
    let d = 1,
      u = !0;
    for (; u; ) {
      const f = new URLSearchParams({
          key: n,
          location: i,
          radius: String(a),
          types: r,
          offset: String(c),
          page: String(d),
          extensions: "base",
        }),
        m = await (
          await fetch(
            `https://restapi.amap.com/v3/place/around?${f.toString()}`,
          )
        ).json();
      if (m.status !== "1" || !Array.isArray(m.pois)) break;
      const h = m.pois
        .filter((g) => g.name && g.location)
        .map((g) => ({
          name: g.name,
          address: g.address || g.pname + g.cityname + (g.adname || "") || "",
          location: g.location,
          type: g.type || "",
        }));
      (o.push(...h), h.length < c || o.length >= 200 ? (u = !1) : (d += 1));
    }
    return o;
  } catch {
    return [];
  }
}
const I5 = (t, s) => `phone_app_trace_today_${t}_${s}`,
  E5 = (t) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`,
  L5 = (t) => `yesterday_bureau_draft_${t}`,
  D5 = (t) => `yesterday_bureau_tickets_${t}`,
  Fy = (t) => `yesterday_bureau_dining_addresses_${t}`,
  $5 = (t) => `yesterday_bureau_dining_saved_${t}`,
  F5 = (t) => `yesterday_bureau_dining_draft_${t}`,
  zy = (t) =>
    t === "metro"
      ? "ph-train"
      : t === "bus"
        ? "ph-bus"
        : t === "walk"
          ? "ph-person-simple-walk"
          : "ph-car",
  fse = (t) => {
    const s = (t == null ? void 0 : t.title) || "";
    return s === "抵达终点"
      ? "ph-flag-checkered"
      : s === "下车"
        ? "ph-sign-out"
        : s === "正在乘坐中"
          ? "ph-train-simple"
          : s === "步行"
            ? "ph-person-simple-walk"
            : /地铁|号线/.test(s)
              ? "ph-train"
              : /公交|路/.test(s)
                ? "ph-bus"
                : "ph-circle";
  };
function mse({ onClose: t }) {
  var ct, Kt, fs, gt, ae;
  const s = vn(),
    n =
      (s == null ? void 0 : s.contactsPublic) ??
      (s == null ? void 0 : s.contacts) ??
      [],
    a = (s == null ? void 0 : s.chats) ?? [],
    r = s == null ? void 0 : s.getRoleBoundUser,
    i = s == null ? void 0 : s.callApi,
    o = (s == null ? void 0 : s.user) ?? { name: "用户", settings: "" },
    c = l.useMemo(() => [...new Map(n.map((nt) => [nt.id, nt])).values()], [n]),
    [d, u] = l.useState("home"),
    [f, p] = l.useState(null),
    [m, h] = l.useState(0),
    [g, x] = l.useState(0),
    [y, v] = l.useState("Hannam"),
    [b, N] = l.useState(""),
    [w, _] = l.useState(""),
    [A, k] = l.useState(""),
    [C, M] = l.useState([]),
    [E, S] = l.useState([]),
    [j, T] = l.useState(null),
    [I, L] = l.useState([]),
    [B, F] = l.useState(!1),
    [D, $] = l.useState(!1),
    [P, z] = l.useState(!1),
    [O, Z] = l.useState(null),
    [K, q] = l.useState(null),
    [V, ne] = l.useState(!1),
    [le, ie] = l.useState(!1),
    X = l.useRef(null),
    je = l.useRef(null),
    xe = l.useRef(null),
    ye = l.useRef(null),
    R = l.useRef(null),
    oe = l.useRef(null),
    [ee, H] = l.useState(""),
    [Y, U] = l.useState(""),
    [ce, pe] = l.useState([]),
    [se, Te] = l.useState(""),
    [ke, W] = l.useState([]),
    [ue, re] = l.useState(!1),
    [he, ge] = l.useState(!1),
    [J, G] = l.useState(null),
    [we, Q] = l.useState([]),
    [ve, Ve] = l.useState(!1),
    [Ae, te] = l.useState(!1),
    [Se, Fe] = l.useState(null),
    [$e, tt] = l.useState(5e3),
    Xe = l.useRef(null),
    ht = l.useRef(null),
    Pe = l.useRef(null),
    ut = l.useRef(!1),
    _t = ["metro", "bus", "walk", "car"][g];
  (l.useEffect(() => {
    if (!f) return;
    (pe([]),
      Q([]),
      (async () => {
        const [It, Xt, bs, ss, _s] = await Promise.all([
          be.get(L5(f.id), null),
          be.get(D5(f.id), null),
          be.get(Fy(f.id), null),
          be.get($5(f.id), null),
          be.get(F5(f.id), null),
        ]);
        (It
          ? (v(It.start ?? "Hannam"),
            N(It.end ?? ""),
            _(It.startLocation ?? ""),
            k(It.endLocation ?? ""))
          : (v("Hannam"), N(""), _(""), k("")),
          L(Array.isArray(Xt) ? Xt : []),
          pe(Array.isArray(bs) ? bs : []),
          Q(Array.isArray(ss) ? ss : []),
          _s
            ? (H(_s.address ?? ""),
              U(_s.addressLocation ?? ""),
              Te(_s.mealType ?? ""),
              tt(typeof _s.radius == "number" ? _s.radius : 5e3))
            : (H(""), U(""), Te(""), tt(5e3)),
          te(!1),
          G(null),
          Fe(null));
      })());
  }, [f == null ? void 0 : f.id]),
    l.useEffect(
      () =>
        f
          ? ((() => {
              (clearTimeout(X.current),
                (X.current = setTimeout(async () => {
                  await be.set(L5(f.id), {
                    start: y,
                    end: b,
                    startLocation: w,
                    endLocation: A,
                  });
                }, 500)));
            })(),
            () => clearTimeout(X.current))
          : void 0,
      [f == null ? void 0 : f.id, y, b, w, A],
    ),
    l.useEffect(
      () =>
        f
          ? ((() => {
              (clearTimeout(je.current),
                (je.current = setTimeout(async () => {
                  await be.set(F5(f.id), {
                    address: ee,
                    addressLocation: Y,
                    mealType: se,
                    radius: $e,
                  });
                }, 500)));
            })(),
            () => clearTimeout(je.current))
          : void 0,
      [f == null ? void 0 : f.id, ee, Y, se, $e],
    ));
  const Ee = (nt) => {
      (p(nt), u("main"));
    },
    fe = () => {
      (u("home"), p(null));
    },
    He = (nt) => {
      x(nt);
    },
    Ie = async () => {
      var _s, qs, Bs, Js;
      if (!f || !i || !r) {
        (Z({
          start: y || "Hannam",
          end: b || "Seongsu",
          mode: _t,
          date: new Date()
            .toLocaleDateString("en-US", { month: "short", day: "numeric" })
            .toUpperCase(),
          icon: zy(_t),
          steps: [
            {
              title: "提示",
              desc: "请先在聊天中配置 API，并确保已选择角色。",
              reminder: "",
            },
          ],
        }),
          F(!0),
          $(!0));
        return;
      }
      const nt = (y == null ? void 0 : y.trim()) || "Hannam",
        It = (b == null ? void 0 : b.trim()) || "Seongsu",
        Xt = w || nt,
        bs = A || It;
      z(!0);
      let ss = [
        { title: "生成失败", desc: "请检查网络与 API 配置。", reminder: "" },
      ];
      try {
        const Xs = await T5(Xt, bs, _t),
          gn = r(f) || {},
          sn = gn.name || (o == null ? void 0 : o.name) || "TA",
          ln = a.find((qt) => qt.contactId === f.id),
          rn =
            ((Bs =
              (qs =
                (_s = ln == null ? void 0 : ln.messages) == null
                  ? void 0
                  : _s.slice(-20)) == null
                ? void 0
                : qs.map(
                    (qt) =>
                      `${qt.sender === "me" ? sn : f.name}: ${(qt.text || "").slice(0, 100)}`,
                  )) == null
              ? void 0
              : Bs.join(`
`)) || "无",
          wt = E5(new Date()),
          xs = await be.get(I5(f.id, wt), null);
        let ot = "无";
        if ((Js = xs == null ? void 0 : xs.pages) != null && Js.length) {
          const qt = xs.pages.flatMap((Lt) =>
            (Lt.traces || [])
              .map((Qt) =>
                `${Qt.time || ""} ${Qt.location || ""} ${Qt.activity || ""}`.trim(),
              )
              .filter(Boolean),
          );
          qt.length &&
            (ot = qt.slice(-8).join(`
`));
        }
        const Ft = [
            {
              sender: "user",
              text: `【路线步骤】（真实地图导航结果，不要修改，仅需为每条写一句「提醒与叮嘱」）
${Xs.map((qt, Lt) => `步骤${Lt + 1} title:${qt.title} desc:${qt.desc}`).join(`
`)}

【最近聊天】
${rn}

【今日行踪】
${ot}

请直接返回 JSON：{"steps":[{"reminder":"一句话提醒或叮嘱"},...]}，steps 数量与上面步骤条数一致，不要 markdown。`,
              type: "text",
            },
          ],
          es = { name: sn, settings: gn.settings || "" },
          At = await i(
            Ft,
            f,
            "yesterday_bureau_route",
            {},
            [],
            [],
            [],
            !1,
            "",
            es,
          );
        let Jt = Xs.map((qt) => ({ ...qt, reminder: "" }));
        if (At && typeof At == "string") {
          const qt = At.match(/\{[\s\S]*\}/);
          if (qt)
            try {
              const Lt = JSON.parse(qt[0]);
              Array.isArray(Lt.steps) &&
                (Jt = Xs.map((Qt, js) => {
                  var cs;
                  return {
                    ...Qt,
                    reminder:
                      ((cs = Lt.steps[js]) == null ? void 0 : cs.reminder) ||
                      "",
                  };
                }));
            } catch {}
        }
        const Vt = new Date();
        (Z({
          start: nt,
          end: It,
          mode: _t,
          date: Vt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }).toUpperCase(),
          icon: zy(_t),
          steps: Jt,
          routeParams: { originInput: Xt, destInput: bs, mode: _t },
          updatedAt: Vt.getTime(),
        }),
          F(!0),
          $(!0));
      } catch {
        (Z({
          start: nt,
          end: It,
          mode: _t,
          date: new Date()
            .toLocaleDateString("en-US", { month: "short", day: "numeric" })
            .toUpperCase(),
          icon: zy(_t),
          steps: ss,
        }),
          F(!0),
          $(!0));
      } finally {
        z(!1);
      }
    },
    Ce = async () => {
      if (!(O != null && O.routeParams) || le) return;
      const { originInput: nt, destInput: It, mode: Xt } = O.routeParams,
        bs = new Date(),
        ss = `${bs.getFullYear()}-${String(bs.getMonth() + 1).padStart(2, "0")}-${String(bs.getDate()).padStart(2, "0")}`,
        _s = `${String(bs.getHours()).padStart(2, "0")}:${String(bs.getMinutes()).padStart(2, "0")}`;
      ie(!0);
      try {
        const qs = await T5(nt, It, Xt, { date: ss, time: _s }),
          Bs = O.steps || [],
          Js = qs.map((Xs, gn) => {
            var sn;
            return {
              ...Xs,
              reminder: ((sn = Bs[gn]) == null ? void 0 : sn.reminder) ?? "",
            };
          });
        Z((Xs) => ({ ...Xs, steps: Js, updatedAt: bs.getTime() }));
      } catch {
      } finally {
        ie(!1);
      }
    };
  ((oe.current = Ce),
    l.useEffect(() => {
      if (!(!B || !(O != null && O.routeParams)))
        return (
          (R.current = setInterval(
            () => {
              var nt;
              return (nt = oe.current) == null ? void 0 : nt.call(oe);
            },
            5 * 60 * 1e3,
          )),
          () => {
            R.current && clearInterval(R.current);
          }
        );
    }, [B, O == null ? void 0 : O.routeParams]));
  const Re = () => {
      (F(!1), $(!1), q(null));
    },
    De = async () => {
      if (!(!O || !f)) {
        ne(!0);
        try {
          const It = [
            { ...O, id: Date.now(), createdAt: Date.now(), contactId: f.id },
            ...I,
          ];
          (await be.set(D5(f.id), It), L(It), Re());
        } catch {
        } finally {
          ne(!1);
        }
      }
    },
    at = (nt) => {
      h(nt);
    },
    ft = (nt) => {
      if ((clearTimeout(xe.current), !(nt != null && nt.trim()))) {
        M([]);
        return;
      }
      xe.current = setTimeout(async () => {
        const It = await $y(nt);
        (M(It), T("start"));
      }, 300);
    },
    vt = (nt) => {
      if ((clearTimeout(xe.current), !(nt != null && nt.trim()))) {
        S([]);
        return;
      }
      xe.current = setTimeout(async () => {
        const It = await $y(nt);
        (S(It), T("end"));
      }, 300);
    },
    Oe = (nt) => {
      (v(nt.name), _(nt.location), M([]), T(null));
    },
    Qe = (nt) => {
      (N(nt.name), k(nt.location), S([]), T(null));
    },
    Ye = (nt) => {
      if ((clearTimeout(Xe.current), !(nt != null && nt.trim()))) {
        W([]);
        return;
      }
      Xe.current = setTimeout(async () => {
        const It = await $y(nt);
        (W(It), re(!0));
      }, 300);
    },
    Ze = (nt) => {
      (H(nt.name), U(nt.location), W([]), re(!1));
    },
    Ue = async () => {
      re(!1);
      const nt = ee == null ? void 0 : ee.trim(),
        It = Y == null ? void 0 : Y.trim();
      if (!nt || !f) return;
      const Xt = [
        ...ce.filter((bs) => bs.name !== nt),
        { id: Date.now(), name: nt, address: nt, location: It || "" },
      ];
      (pe(Xt), await be.set(Fy(f.id), Xt));
    },
    me = (nt) => {
      (H(nt.name), U(nt.location || ""));
    },
    jt = async (nt) => {
      if (!f) return;
      const It = ce.filter((Xt) => Xt.id !== nt.id);
      (pe(It), await be.set(Fy(f.id), It));
    },
    Gt = async () => {
      var It, Xt, bs, ss;
      if (!f || !i || !r) {
        G({ error: "请先在聊天中配置 API 并选择角色。" });
        return;
      }
      const nt = Y || ee;
      if (!(nt != null && nt.trim())) {
        G({ error: "请选择或输入地址。" });
        return;
      }
      (ge(!0), G(null));
      try {
        let _s = await use(nt, { radius: $e });
        if (_s.length === 0) {
          const Qt = (nt || "").slice(0, 20);
          _s = [
            {
              name: `${Qt}附近·风味小馆`,
              address: Qt,
              location: "",
              type: "中餐",
            },
            {
              name: `${Qt}附近·咖啡馆`,
              address: Qt,
              location: "",
              type: "咖啡",
            },
            {
              name: `${Qt}附近·简餐店`,
              address: Qt,
              location: "",
              type: "简餐",
            },
            {
              name: `${Qt}附近·茶餐厅`,
              address: Qt,
              location: "",
              type: "茶餐厅",
            },
            {
              name: `${Qt}附近·火锅/烧烤`,
              address: Qt,
              location: "",
              type: "火锅",
            },
            {
              name: `${Qt}附近·西餐/酒吧`,
              address: Qt,
              location: "",
              type: "西餐",
            },
            {
              name: `${Qt}附近·日料/韩料`,
              address: Qt,
              location: "",
              type: "日韩料理",
            },
          ];
        }
        const qs = r(f) || {},
          Bs = qs.name || (o == null ? void 0 : o.name) || "TA",
          Js = a.find((Qt) => Qt.contactId === f.id),
          Xs =
            ((bs =
              (Xt =
                (It = Js == null ? void 0 : Js.messages) == null
                  ? void 0
                  : It.slice(-20)) == null
                ? void 0
                : Xt.map(
                    (Qt) =>
                      `${Qt.sender === "me" ? Bs : f.name}: ${(Qt.text || "").slice(0, 100)}`,
                  )) == null
              ? void 0
              : bs.join(`
`)) || "无",
          gn = E5(new Date()),
          sn = await be.get(I5(f.id, gn), null);
        let ln = "无";
        if ((ss = sn == null ? void 0 : sn.pages) != null && ss.length) {
          const Qt = sn.pages.flatMap((js) =>
            (js.traces || [])
              .map((cs) =>
                `${cs.time || ""} ${cs.location || ""} ${cs.activity || ""}`.trim(),
              )
              .filter(Boolean),
          );
          Qt.length &&
            (ln = Qt.slice(-8).join(`
`));
        }
        const rn = new Date(),
          wt = rn.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long",
          }),
          xs = rn.toLocaleTimeString("zh-CN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !1,
          }),
          ot = rn.getHours(),
          st =
            ot >= 5 && ot < 9
              ? "早晨"
              : ot >= 9 && ot < 11
                ? "上午"
                : ot >= 11 && ot < 14
                  ? "中午"
                  : ot >= 14 && ot < 17
                    ? "下午"
                    : ot >= 17 && ot < 21
                      ? "傍晚/晚上"
                      : "夜间/凌晨",
          $t = `【当前时间】${wt} ${xs}（${st}）`,
          Ft = _s
            .slice(0, 80)
            .map((Qt) => `${Qt.name}	${Qt.address || ""}	${Qt.type || ""}`).join(`
`),
          es =
            se.trim() ||
            "（用户未填，请根据当前时间推断：早晨→早饭，中午→午饭，下午→下午茶，傍晚/晚上→晚饭，夜间/凌晨→夜宵）",
          Jt = [
            {
              sender: "user",
              text: `${$t}
【场景与需求】${es}
（可能是餐次如午饭/晚饭/夜宵，或场所如清吧/酒吧/酒店/超市，或人数如 3 人、口味如吃辣/爱吃甜等，请综合理解）
【附近场所列表】（来自地图 API，请严格从中选 3 家推荐）
${Ft}

【最近聊天】
${Xs}

【今日行踪】
${ln}

请直接返回唯一 JSON：{"recommendations":[{"name":"店名","reason":"推荐理由"},...]}，共 3 条，name 必须来自上面列表。不要 markdown 代码块。`,
              type: "text",
            },
          ],
          Vt = { name: Bs, settings: qs.settings || "" },
          qt = await i(
            Jt,
            f,
            "yesterday_bureau_dining",
            {},
            [],
            [],
            [],
            !1,
            "",
            Vt,
          );
        let Lt = [];
        if (qt && typeof qt == "string") {
          let Qt = qt.trim();
          Qt = Qt.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");
          const js = (cs) =>
            (Array.isArray(cs) ? cs : [])
              .filter(
                (Ne) =>
                  Ne &&
                  (Ne.name != null ||
                    Ne.reason != null ||
                    Ne.店名 != null ||
                    Ne.推荐理由 != null),
              )
              .slice(0, 3)
              .map((Ne) => ({
                name: String(Ne.name ?? Ne.shop ?? Ne.店名 ?? "").trim(),
                reason: String(
                  Ne.reason ?? Ne.推荐理由 ?? Ne.desc ?? "",
                ).trim(),
              }));
          try {
            const cs = Qt.match(/\{[\s\S]*\}/),
              Ne = Qt.match(/\[[\s\S]*\]/);
            let Je = null,
              St = "";
            (cs &&
              ((St = cs[0].replace(/,(\s*[}\]])/g, "$1")),
              (Je = JSON.parse(St)),
              (Lt = js(
                Je.recommendations ??
                  Je.list ??
                  Je.data ??
                  (Array.isArray(Je) ? Je : []),
              ))),
              Lt.length === 0 &&
                Ne &&
                ((St = Ne[0].replace(/,(\s*[}\]])/g, "$1")),
                (Je = JSON.parse(St)),
                (Lt = js(Je))));
          } catch {}
        }
        Lt.length
          ? (G({ recommendations: Lt, addressName: ee }), te(!0))
          : G({ error: "推荐解析失败，请重试。" });
      } catch {
        G({ error: "生成失败，请检查网络与 API。" });
      } finally {
        ge(!1);
      }
    },
    Pt = async () => {
      var nt;
      if (
        !(
          !(
            (nt = J == null ? void 0 : J.recommendations) != null && nt.length
          ) || !f
        )
      ) {
        Ve(!0);
        try {
          const Xt = [
            {
              id: Date.now(),
              mealType: se,
              addressName: J.addressName || ee,
              date: new Date().toLocaleDateString("zh-CN", {
                month: "short",
                day: "numeric",
              }),
              recommendations: J.recommendations,
            },
            ...we,
          ];
          (await be.set($5(f.id), Xt), Q(Xt), te(!1));
        } catch {
        } finally {
          Ve(!1);
        }
      }
    },
    Wt = () => {
      te(!1);
    };
  return (
    l.useEffect(() => {
      const nt = (It) => {
        (ye.current && !ye.current.contains(It.target) && T(null),
          ht.current && !ht.current.contains(It.target) && re(!1));
      };
      return (
        document.addEventListener("mousedown", nt),
        () => document.removeEventListener("mousedown", nt)
      );
    }, []),
    e.jsxs("div", {
      className: "yesterday-bureau fixed inset-0 z-40 flex flex-col",
      children: [
        e.jsxs("div", {
          id: "page-home",
          className: `page flex flex-col justify-start px-8 z-10 ${d === "home" ? "active" : ""}`,
          style: {
            paddingTop: "calc(env(safe-area-inset-top) + 45px)",
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingLeft: "max(2rem, env(safe-area-inset-left))",
            paddingRight: "max(2rem, env(safe-area-inset-right))",
          },
          children: [
            e.jsxs("header", {
              className: "mb-10",
              children: [
                e.jsx("p", {
                  className:
                    "text-[9px] tracking-[0.5em] text-[#A1A1AA] uppercase mb-4 pl-1",
                  children: "收藏 07",
                }),
                e.jsxs("h1", {
                  className:
                    "text-4xl font-serif-display italic text-[#595450] tracking-tight cursor-pointer hover:opacity-80 transition-opacity",
                  onClick: t,
                  children: ["Yesterday", e.jsx("br", {}), "Bureau."],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-6 overflow-y-auto pr-1",
              style: { maxHeight: "calc(4 * 104px + 3 * 24px)" },
              children: [
                c.length === 0 &&
                  e.jsx("p", {
                    className: "text-sm text-[#9CA3AF] italic",
                    children: "暂无联系人，请先在聊天中添加角色。",
                  }),
                c.map((nt) =>
                  e.jsxs(
                    "div",
                    {
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (It) => It.key === "Enter" && Ee(nt),
                      onClick: () => Ee(nt),
                      className:
                        "glass-panel p-6 rounded-[24px] flex items-center gap-5 cursor-pointer hover:bg-white transition-colors group",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] flex-shrink-0 rounded-full overflow-hidden bg-[#F2F2F0] shadow-inner border border-white [&>img]:object-cover [&>img]:object-center",
                          children: e.jsx("img", {
                            src:
                              nt.avatar ||
                              `https://api.dicebear.com/7.x/notionists/svg?seed=${nt.id}`,
                            alt: "",
                            className:
                              "w-full h-full opacity-70 group-hover:opacity-100 transition-opacity grayscale-[0.2]",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className:
                                "font-serif-display text-xl text-[#595450]",
                              children: nt.nickname || nt.name,
                            }),
                            e.jsxs("p", {
                              className:
                                "text-[10px] text-[#9CA3AF] tracking-widest uppercase mt-2 line-clamp-1",
                              children: [
                                (nt.signature || "").slice(0, 40),
                                (nt.signature || "").length > 40 ? "…" : "",
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    nt.id,
                  ),
                ),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          id: "page-main",
          className: `page flex flex-col h-full bg-[#F7F7F5] z-20 ${d === "main" ? "active" : ""}`,
          children: [
            e.jsxs("div", {
              className:
                "bg-[#F7F7F5]/90 backdrop-blur-md sticky top-0 z-30 transition-all",
              style: {
                paddingTop: "env(safe-area-inset-top)",
                paddingLeft: "env(safe-area-inset-left)",
                paddingRight: "env(safe-area-inset-right)",
              },
              children: [
                e.jsx("div", {
                  className: "top-marquee",
                  children: e.jsx("div", {
                    className: "top-marquee-content",
                    children:
                      "Seoul Weather Alert: Light Mist in Gangnam • Humidity 82% • Traffic: Smooth on Banpo Bridge • Coffee Intake: Recommended • Seoul Weather Alert: Light Mist in Gangnam • Humidity 82% • Traffic: Smooth on Banpo Bridge • Coffee Intake: Recommended •",
                  }),
                }),
                e.jsxs("div", {
                  className: "px-6 py-5 flex justify-between items-center",
                  children: [
                    e.jsx("button", {
                      type: "button",
                      onClick: fe,
                      className:
                        "w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#E5E5E0] transition-colors",
                      children: e.jsx("i", {
                        className: "ph ph-arrow-left text-xl text-[#595450]",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-center",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[9px] tracking-[0.3em] font-medium text-[#B0B0A8] uppercase",
                          children: "档案",
                        }),
                        e.jsx("span", {
                          className:
                            "font-serif-display text-lg text-[#595450]",
                          children: new Date().toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-full bg-[#E5E5E0] overflow-hidden border border-white",
                      children: e.jsx("img", {
                        alt: "",
                        className:
                          "w-full h-full opacity-80 grayscale-[0.3] object-cover",
                        src:
                          (f == null ? void 0 : f.avatar) ||
                          `https://api.dicebear.com/7.x/notionists/svg?seed=${(f == null ? void 0 : f.id) || ""}`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "px-6 mb-8 mt-2",
              style: {
                paddingLeft: "max(1.5rem, env(safe-area-inset-left))",
                paddingRight: "max(1.5rem, env(safe-area-inset-right))",
              },
              children: e.jsxs("div", {
                className: "tab-capsule",
                children: [
                  e.jsx("div", {
                    className: "tab-pill",
                    style: { transform: `translateX(${m * 100}%)` },
                  }),
                  e.jsx("div", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (nt) => nt.key === "Enter" && at(0),
                    onClick: () => at(0),
                    className: `tab-btn ${m === 0 ? "active" : ""}`,
                    children: "出行",
                  }),
                  e.jsx("div", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (nt) => nt.key === "Enter" && at(1),
                    onClick: () => at(1),
                    className: `tab-btn ${m === 1 ? "active" : ""}`,
                    children: "觅食",
                  }),
                  e.jsx("div", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (nt) => nt.key === "Enter" && at(2),
                    onClick: () => at(2),
                    className: `tab-btn ${m === 2 ? "active" : ""}`,
                    children: "穿搭",
                  }),
                ],
              }),
            }),
            e.jsxs("main", {
              className:
                "flex-1 px-6 relative overflow-y-auto no-scrollbar pb-32",
              style: {
                paddingLeft: "max(1.5rem, env(safe-area-inset-left))",
                paddingRight: "max(1.5rem, env(safe-area-inset-right))",
                paddingBottom: "calc(8rem + env(safe-area-inset-bottom))",
              },
              children: [
                e.jsxs("section", {
                  id: "sec-travel",
                  className:
                    "space-y-8 transition-opacity duration-500 w-full px-6",
                  style: {
                    display: m === 0 ? "block" : "none",
                    opacity: m === 0 ? 1 : 0,
                    position: m === 0 ? "relative" : "absolute",
                    left: m === 0 ? void 0 : 0,
                    visibility: m === 0 ? "visible" : "hidden",
                  },
                  children: [
                    e.jsxs("div", {
                      ref: ye,
                      className:
                        "bg-white rounded-[24px] p-8 shadow-sm border border-white relative",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-8",
                          children: [
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF] pl-1 font-medium",
                                  htmlFor: "inp-start",
                                  children: "Start",
                                }),
                                e.jsx("input", {
                                  id: "inp-start",
                                  type: "text",
                                  value: y,
                                  onChange: (nt) => {
                                    (v(nt.target.value),
                                      _(""),
                                      ft(nt.target.value));
                                  },
                                  onFocus: () => C.length > 0 && T("start"),
                                  className: "input-minimal",
                                  placeholder: "输入起点，如：南京",
                                  autoComplete: "off",
                                }),
                                j === "start" &&
                                  C.length > 0 &&
                                  e.jsx("ul", {
                                    className:
                                      "absolute left-0 right-0 top-full mt-1 bg-white border border-[#E5E5E0] rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto no-scrollbar",
                                    children: C.map((nt, It) =>
                                      e.jsxs(
                                        "li",
                                        {
                                          role: "button",
                                          tabIndex: 0,
                                          onKeyDown: (Xt) =>
                                            Xt.key === "Enter" && Oe(nt),
                                          onClick: () => Oe(nt),
                                          className:
                                            "px-4 py-3 text-left hover:bg-[#F7F7F5] border-b border-[#E5E5E0] last:border-b-0 cursor-pointer",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "font-serif text-sm text-[#595450]",
                                              children: nt.name,
                                            }),
                                            nt.address &&
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] text-[#9CA3AF] mt-0.5",
                                                children: nt.address,
                                              }),
                                          ],
                                        },
                                        `${nt.location}-${It}`,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF] pl-1 font-medium",
                                  htmlFor: "inp-end",
                                  children: "End",
                                }),
                                e.jsx("input", {
                                  id: "inp-end",
                                  type: "text",
                                  value: b,
                                  onChange: (nt) => {
                                    (N(nt.target.value),
                                      k(""),
                                      vt(nt.target.value));
                                  },
                                  onFocus: () => E.length > 0 && T("end"),
                                  placeholder: "输入目的地，如：南京南站",
                                  className: "input-minimal",
                                  autoComplete: "off",
                                }),
                                j === "end" &&
                                  E.length > 0 &&
                                  e.jsx("ul", {
                                    className:
                                      "absolute left-0 right-0 top-full mt-1 bg-white border border-[#E5E5E0] rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto no-scrollbar",
                                    children: E.map((nt, It) =>
                                      e.jsxs(
                                        "li",
                                        {
                                          role: "button",
                                          tabIndex: 0,
                                          onKeyDown: (Xt) =>
                                            Xt.key === "Enter" && Qe(nt),
                                          onClick: () => Qe(nt),
                                          className:
                                            "px-4 py-3 text-left hover:bg-[#F7F7F5] border-b border-[#E5E5E0] last:border-b-0 cursor-pointer",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "font-serif text-sm text-[#595450]",
                                              children: nt.name,
                                            }),
                                            nt.address &&
                                              e.jsx("div", {
                                                className:
                                                  "text-[10px] text-[#9CA3AF] mt-0.5",
                                                children: nt.address,
                                              }),
                                          ],
                                        },
                                        `${nt.location}-${It}`,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mt-10",
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF] pl-1 block mb-4 font-medium",
                              children: "Transport",
                            }),
                            e.jsxs("div", {
                              className: "mode-control-bar",
                              children: [
                                e.jsx("div", {
                                  className: "mode-slider",
                                  style: {
                                    transform: `translateX(${g * 100}%)`,
                                  },
                                }),
                                e.jsx("div", {
                                  role: "button",
                                  tabIndex: 0,
                                  onKeyDown: (nt) =>
                                    nt.key === "Enter" && He(0),
                                  onClick: () => He(0),
                                  className: `mode-btn ${g === 0 ? "active" : ""}`,
                                  children: e.jsx("i", {
                                    className: "ph ph-train text-lg",
                                  }),
                                }),
                                e.jsx("div", {
                                  role: "button",
                                  tabIndex: 0,
                                  onKeyDown: (nt) =>
                                    nt.key === "Enter" && He(1),
                                  onClick: () => He(1),
                                  className: `mode-btn ${g === 1 ? "active" : ""}`,
                                  children: e.jsx("i", {
                                    className: "ph ph-bus text-lg",
                                  }),
                                }),
                                e.jsx("div", {
                                  role: "button",
                                  tabIndex: 0,
                                  onKeyDown: (nt) =>
                                    nt.key === "Enter" && He(2),
                                  onClick: () => He(2),
                                  className: `mode-btn ${g === 2 ? "active" : ""}`,
                                  children: e.jsx("i", {
                                    className:
                                      "ph ph-person-simple-walk text-lg",
                                  }),
                                }),
                                e.jsx("div", {
                                  role: "button",
                                  tabIndex: 0,
                                  onKeyDown: (nt) =>
                                    nt.key === "Enter" && He(3),
                                  onClick: () => He(3),
                                  className: `mode-btn ${g === 3 ? "active" : ""}`,
                                  children: e.jsx("i", {
                                    className: "ph ph-car text-lg",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      type: "button",
                      onClick: Ie,
                      disabled: P,
                      className: "btn-scan group",
                      children: [
                        e.jsx("span", {
                          className:
                            "btn-text text-white/50 group-hover:text-white transition-colors",
                          children: P ? "生成中…" : "[ + ] &nbsp; 生成清单",
                        }),
                        e.jsx("i", {
                          className: "ph ph-printer text-white btn-icon",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "pt-6",
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-[9px] tracking-[0.3em] text-[#B0B0A8] uppercase mb-5 pl-2 font-medium",
                          children: "历史",
                        }),
                        e.jsxs("div", {
                          id: "saved-list",
                          className: "space-y-4",
                          children: [
                            I.length === 0 &&
                              e.jsxs("div", {
                                id: "empty-state",
                                className: "text-center py-10 opacity-40",
                                children: [
                                  e.jsx("i", {
                                    className:
                                      "ph ph-files text-2xl mb-3 text-[#D4D4D0]",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "font-serif text-xs text-[#9CA3AF] italic",
                                    children: "暂无已存档计划。",
                                  }),
                                ],
                              }),
                            I.map((nt) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "glass-panel p-4 rounded-[16px] flex justify-between items-center card-enter mb-3 group cursor-pointer hover:bg-white transition-colors border border-white",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-10 h-10 rounded-full bg-[#EEEEEC] flex items-center justify-center text-[#9CA3AF]",
                                          children: e.jsx("i", {
                                            className: `ph ${nt.icon} text-lg`,
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "text-[9px] text-[#9CA3AF] uppercase tracking-[0.2em] font-medium",
                                              children: [
                                                nt.date,
                                                " • ",
                                                nt.mode,
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "font-serif text-sm text-[#595450] mt-0.5",
                                              children: [
                                                nt.start,
                                                " ",
                                                e.jsx("span", {
                                                  className:
                                                    "text-[#D4D4D0] mx-1",
                                                  children: "→",
                                                }),
                                                " ",
                                                nt.end,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("i", {
                                      className:
                                        "ph ph-check-circle text-[#D4D4D0] opacity-0 group-hover:opacity-100 transition-opacity",
                                    }),
                                  ],
                                },
                                nt.id,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("section", {
                  id: "sec-dining",
                  className:
                    "space-y-8 transition-opacity duration-500 w-full px-6",
                  style: {
                    display: m === 1 ? "block" : "none",
                    opacity: m === 1 ? 1 : 0,
                    position: m === 1 ? "relative" : "absolute",
                    left: m === 1 ? void 0 : 0,
                    visibility: m === 1 ? "visible" : "hidden",
                  },
                  children: [
                    e.jsx("div", {
                      ref: ht,
                      className:
                        "bg-white rounded-[24px] p-8 shadow-sm border border-white relative",
                      children: e.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF] pl-1 font-medium",
                                htmlFor: "inp-dining-addr",
                                children: "我的位置",
                              }),
                              e.jsx("input", {
                                id: "inp-dining-addr",
                                type: "text",
                                value: ee,
                                onChange: (nt) => {
                                  (H(nt.target.value),
                                    U(""),
                                    Ye(nt.target.value));
                                },
                                onFocus: () => ke.length > 0 && re(!0),
                                className: "input-minimal",
                                placeholder: "输入地址，如：南京南站",
                                autoComplete: "off",
                              }),
                              ue &&
                                ke.length > 0 &&
                                e.jsx("ul", {
                                  className:
                                    "absolute left-0 right-0 top-full mt-1 bg-white border border-[#E5E5E0] rounded-xl shadow-lg z-50 max-h-48 overflow-y-auto no-scrollbar",
                                  children: ke.map((nt, It) =>
                                    e.jsxs(
                                      "li",
                                      {
                                        role: "button",
                                        tabIndex: 0,
                                        onKeyDown: (Xt) =>
                                          Xt.key === "Enter" && Ze(nt),
                                        onClick: () => Ze(nt),
                                        className:
                                          "px-4 py-3 text-left hover:bg-[#F7F7F5] border-b border-[#E5E5E0] last:border-b-0 cursor-pointer",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "font-serif text-sm text-[#595450]",
                                            children: nt.name,
                                          }),
                                          nt.address &&
                                            e.jsx("div", {
                                              className:
                                                "text-[10px] text-[#9CA3AF] mt-0.5",
                                              children: nt.address,
                                            }),
                                        ],
                                      },
                                      `${nt.location}-${It}`,
                                    ),
                                  ),
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "relative z-[60] flex items-center gap-2 min-w-0",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                onClick: (nt) => {
                                  (nt.preventDefault(),
                                    nt.stopPropagation(),
                                    Ue());
                                },
                                disabled: !(ee != null && ee.trim()),
                                className:
                                  "text-[10px] uppercase tracking-wider text-[#595450] border border-[#E5E5E0] px-3 py-1.5 rounded-lg hover:bg-[#F7F7F5] disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0",
                                children: "保存此地址",
                              }),
                              ce.length > 0 &&
                                e.jsx("div", {
                                  className:
                                    "flex-1 min-w-0 overflow-x-auto overflow-y-hidden pb-1 no-scrollbar dining-saved-addresses-scroll",
                                  children: e.jsx("div", {
                                    className: "flex gap-2 min-w-min",
                                    children: ce.map((nt) =>
                                      e.jsx(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => {
                                            if (ut.current) {
                                              ut.current = !1;
                                              return;
                                            }
                                            me(nt);
                                          },
                                          onContextMenu: (It) => {
                                            (It.preventDefault(), jt(nt));
                                          },
                                          onTouchStart: () => {
                                            ((ut.current = !1),
                                              (Pe.current = setTimeout(() => {
                                                ((ut.current = !0), jt(nt));
                                              }, 500)));
                                          },
                                          onTouchEnd: () => {
                                            Pe.current &&
                                              (clearTimeout(Pe.current),
                                              (Pe.current = null));
                                          },
                                          onTouchMove: () => {
                                            Pe.current &&
                                              (clearTimeout(Pe.current),
                                              (Pe.current = null));
                                          },
                                          onMouseDown: () => {
                                            ((ut.current = !1),
                                              (Pe.current = setTimeout(() => {
                                                ((ut.current = !0), jt(nt));
                                              }, 600)));
                                          },
                                          onMouseUp: () => {
                                            Pe.current &&
                                              (clearTimeout(Pe.current),
                                              (Pe.current = null));
                                          },
                                          onMouseLeave: () => {
                                            Pe.current &&
                                              (clearTimeout(Pe.current),
                                              (Pe.current = null));
                                          },
                                          className: `text-[10px] px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 whitespace-nowrap ${ee === nt.name ? "border-[#595450] bg-[#F0F0EE] text-[#595450]" : "border-[#E5E5E0] hover:bg-[#F7F7F5] text-[#9CA3AF]"}`,
                                          children: nt.name,
                                        },
                                        nt.id,
                                      ),
                                    ),
                                  }),
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF] pl-1 font-medium block mb-2",
                                children: "距离范围",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-mono-code text-[#9CA3AF] flex-shrink-0 whitespace-nowrap min-w-[3rem]",
                                    children:
                                      $e >= 1e3 ? `${$e / 1e3} km` : `${$e} m`,
                                  }),
                                  e.jsx("input", {
                                    type: "range",
                                    min: 500,
                                    max: 3e4,
                                    step: 500,
                                    value: $e,
                                    onChange: (nt) =>
                                      tt(Number(nt.target.value)),
                                    className: "dining-range-slider",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-[9px] uppercase tracking-[0.2em] text-[#9CA3AF] pl-1 font-medium block mb-2",
                                children: "场景与需求",
                              }),
                              e.jsx("input", {
                                type: "text",
                                value: se,
                                onChange: (nt) => Te(nt.target.value),
                                className: "input-minimal",
                                placeholder:
                                  "午饭、清吧、酒吧、酒店、超市；可补充人数（如 3 人）、口味（吃辣、爱吃甜）等",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("button", {
                      type: "button",
                      onClick: Gt,
                      disabled: he,
                      className: "btn-scan group w-full",
                      children: [
                        e.jsx("span", {
                          className:
                            "btn-text text-white/50 group-hover:text-white transition-colors",
                          children: he ? "生成中…" : "[ + ] &nbsp; 生成推荐",
                        }),
                        e.jsx("i", {
                          className:
                            "ph ph-magnifying-glass text-white btn-icon",
                        }),
                      ],
                    }),
                    (J == null ? void 0 : J.error) &&
                      e.jsx("div", {
                        className:
                          "bg-white rounded-[24px] p-6 border border-[#E5E5E0]",
                        children: e.jsx("p", {
                          className: "font-serif text-sm text-[#9CA3AF] italic",
                          children: J.error,
                        }),
                      }),
                    e.jsxs("div", {
                      className: "pt-4 pb-8",
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-[9px] tracking-[0.3em] text-[#B0B0A8] uppercase mb-4 pl-2 font-medium",
                          children: "历史推荐",
                        }),
                        e.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            we.length === 0 &&
                              e.jsxs("div", {
                                className: "text-center py-8 opacity-40",
                                children: [
                                  e.jsx("i", {
                                    className:
                                      "ph ph-coffee text-2xl mb-2 text-[#D4D4D0]",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "font-serif text-xs text-[#9CA3AF] italic",
                                    children: "暂无保存的推荐",
                                  }),
                                ],
                              }),
                            we.map((nt) => {
                              var Xt;
                              const It = Se === nt.id;
                              return e.jsxs(
                                "div",
                                {
                                  role: "button",
                                  tabIndex: 0,
                                  onClick: () =>
                                    Fe((bs) => (bs === nt.id ? null : nt.id)),
                                  onKeyDown: (bs) =>
                                    bs.key === "Enter" &&
                                    Fe((ss) => (ss === nt.id ? null : nt.id)),
                                  className:
                                    "glass-panel rounded-[16px] border border-white hover:bg-white transition-colors overflow-hidden cursor-pointer",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "p-4 flex items-center justify-between gap-2",
                                      children: [
                                        e.jsxs("span", {
                                          className:
                                            "text-[9px] text-[#9CA3AF] uppercase tracking-wider font-medium min-w-0 truncate",
                                          children: [
                                            nt.date,
                                            " · ",
                                            nt.mealType || "—",
                                          ],
                                        }),
                                        e.jsx("i", {
                                          className: `ph text-[#9CA3AF] transition-transform flex-shrink-0 ${It ? "ph-caret-up" : "ph-caret-down"}`,
                                        }),
                                      ],
                                    }),
                                    It &&
                                      e.jsxs("div", {
                                        className:
                                          "px-4 pb-4 pt-0 border-t border-[#E5E5E0]/60",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "text-[9px] text-[#9CA3AF] uppercase tracking-wider mt-3 mb-2",
                                            children: nt.addressName,
                                          }),
                                          e.jsx("div", {
                                            className: "space-y-2",
                                            children:
                                              (Xt = nt.recommendations) == null
                                                ? void 0
                                                : Xt.slice(0, 3).map((bs, ss) =>
                                                    e.jsxs(
                                                      "div",
                                                      {
                                                        className:
                                                          "font-serif text-sm text-[#595450]",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "font-medium text-[#595450]",
                                                            children: bs.name,
                                                          }),
                                                          e.jsxs("span", {
                                                            className:
                                                              "text-[#9CA3AF] italic",
                                                            children: [
                                                              " — ",
                                                              bs.reason,
                                                            ],
                                                          }),
                                                        ],
                                                      },
                                                      ss,
                                                    ),
                                                  ),
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                nt.id,
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("section", {
                  id: "sec-outfit",
                  className:
                    "transition-opacity duration-500 w-full px-6 text-center pt-10",
                  style: {
                    display: m === 2 ? "block" : "none",
                    opacity: m === 2 ? 1 : 0,
                    position: m === 2 ? "relative" : "absolute",
                    left: m === 2 ? void 0 : 0,
                    visibility: m === 2 ? "visible" : "hidden",
                  },
                  children: [
                    e.jsx("i", {
                      className:
                        "ph ph-coat-hanger text-3xl text-[#D4D4D0] mb-4",
                    }),
                    e.jsx("p", {
                      className: "font-serif text-[#9CA3AF] italic",
                      children: "造型师离线。",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          id: "printer-layer",
          className: `printer-overlay ${B ? "active" : ""} ${D ? "printing-active" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "路线票据",
          style: {
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          },
          children: [
            e.jsxs("div", {
              className: "ticket-paper",
              children: [
                e.jsx("div", { className: "rip-edge-top" }),
                e.jsxs("div", {
                  className: "ticket-header",
                  children: [
                    e.jsxs("div", {
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: (nt) => nt.key === "Enter" && Re(),
                      onClick: Re,
                      className: "ticket-action flex items-center gap-1",
                      children: [e.jsx("i", { className: "ph ph-x" }), " ESC"],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("i", {
                          className: "ph ph-ticket text-[#D4D4D0]",
                        }),
                        e.jsx("span", {
                          className: "font-mono-code text-[9px] text-[#D4D4D0]",
                          children: "NO.04",
                        }),
                        (O == null ? void 0 : O.updatedAt) != null &&
                          e.jsxs("span", {
                            className:
                              "font-mono-code text-[8px] text-[#9CA3AF]",
                            children: [
                              "更新于",
                              " ",
                              new Date(O.updatedAt).toLocaleTimeString(
                                "zh-CN",
                                { hour: "2-digit", minute: "2-digit" },
                              ),
                            ],
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (O == null ? void 0 : O.routeParams) &&
                          e.jsxs("button", {
                            type: "button",
                            disabled: le,
                            onClick: Ce,
                            className:
                              "ticket-action flex items-center gap-1 text-[#595450] disabled:opacity-50",
                            children: [
                              le
                                ? "…"
                                : e.jsx("i", {
                                    className: "ph ph-arrow-clockwise",
                                  }),
                              " 刷新",
                            ],
                          }),
                        e.jsxs("div", {
                          role: "button",
                          tabIndex: 0,
                          onKeyDown: (nt) => nt.key === "Enter" && !V && De(),
                          onClick: () => !V && De(),
                          className: `ticket-action flex items-center gap-1 ${V ? "opacity-60 pointer-events-none" : "text-[#595450]"}`,
                          children: [
                            V ? "保存中…" : "保存",
                            " ",
                            e.jsx("i", { className: "ph ph-check" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "ticket-body",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-start mb-6",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("h2", {
                              className:
                                "text-3xl font-serif-display text-[#595450]",
                              children: ["Route", e.jsx("br", {}), "Plan."],
                            }),
                            e.jsx("div", {
                              className:
                                "text-[9px] font-mono-code text-[#9CA3AF] mt-1",
                              children: "HUMIDITY: 85% / MIST",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-right",
                          children: [
                            e.jsxs("div", {
                              className:
                                "text-4xl font-serif-display text-[#595450] flex items-start justify-end gap-1",
                              children: [
                                "19",
                                e.jsx("span", {
                                  className: "text-sm mt-1",
                                  children: "°",
                                }),
                              ],
                            }),
                            O &&
                              e.jsx("i", {
                                className: `ph ${O.icon} text-xl text-[#9CA3AF] mt-1`,
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      id: "route-timeline",
                      className: "py-4",
                      children:
                        (ct = O == null ? void 0 : O.steps) == null
                          ? void 0
                          : ct.map((nt, It) =>
                              nt.title === "正在乘坐中"
                                ? e.jsxs(
                                    "div",
                                    {
                                      className: "timeline-riding-tip",
                                      children: [
                                        e.jsx("div", {
                                          className: "timeline-line",
                                        }),
                                        e.jsx("div", {
                                          className: "timeline-tip-dot",
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "riding-tip-card cursor-pointer hover:opacity-90",
                                          role: "button",
                                          tabIndex: 0,
                                          onClick: () =>
                                            q(
                                              (K == null ? void 0 : K.index) ===
                                                It
                                                ? null
                                                : { index: It, step: nt },
                                            ),
                                          onKeyDown: (Xt) =>
                                            Xt.key === "Enter" &&
                                            q(
                                              (K == null ? void 0 : K.index) ===
                                                It
                                                ? null
                                                : { index: It, step: nt },
                                            ),
                                          children: [
                                            e.jsxs("div", {
                                              className: "riding-tip-label",
                                              children: [
                                                e.jsx("i", {
                                                  className:
                                                    "ph ph-train-simple text-[10px] text-[#9CA3AF]",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[9px] font-mono-code text-[#9CA3AF] uppercase tracking-wider",
                                                  children: "正在乘坐中",
                                                }),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "font-serif text-sm text-[#595450] leading-snug",
                                              children: nt.desc,
                                            }),
                                            nt.reminder &&
                                              e.jsxs("div", {
                                                className:
                                                  "riding-tip-reminder",
                                                children: [
                                                  "提醒：",
                                                  nt.reminder,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    It,
                                  )
                                : e.jsxs(
                                    "div",
                                    {
                                      role: "button",
                                      tabIndex: 0,
                                      className:
                                        "timeline-item cursor-pointer hover:opacity-90",
                                      onClick: () =>
                                        q(
                                          (K == null ? void 0 : K.index) === It
                                            ? null
                                            : { index: It, step: nt },
                                        ),
                                      onKeyDown: (Xt) =>
                                        Xt.key === "Enter" &&
                                        q(
                                          (K == null ? void 0 : K.index) === It
                                            ? null
                                            : { index: It, step: nt },
                                        ),
                                      children: [
                                        e.jsx("div", {
                                          className: "timeline-line",
                                        }),
                                        e.jsx("div", {
                                          className: `timeline-dot ${It === 0 || It === O.steps.length - 1 ? "fill" : ""}`,
                                          children:
                                            It !== 0 &&
                                            It !== O.steps.length - 1 &&
                                            e.jsx("div", {
                                              className:
                                                "w-1 h-1 bg-[#595450] rounded-full",
                                            }),
                                        }),
                                        e.jsxs("div", {
                                          className: "flex-1",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 mb-0.5",
                                              children: [
                                                e.jsx("i", {
                                                  className: `ph ${fse(nt)} text-[10px] text-[#9CA3AF]`,
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[9px] font-mono-code text-[#9CA3AF] uppercase tracking-wider",
                                                  children: nt.title,
                                                }),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "font-serif text-sm text-[#595450] leading-snug",
                                              children: nt.desc,
                                            }),
                                            nt.reminder &&
                                              e.jsxs("div", {
                                                className:
                                                  "text-[10px] text-[#9CA3AF] mt-1 italic",
                                                children: [
                                                  "提醒：",
                                                  nt.reminder,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    It,
                                  ),
                            ),
                    }),
                    e.jsxs("div", {
                      className: "mt-8 text-center",
                      children: [
                        e.jsx("i", {
                          className: "ph ph-seal-check text-3xl text-[#E5E5E0]",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[8px] font-mono-code text-[#E5E5E0] mt-2 tracking-widest",
                          children: "VERIFIED BY SYSTEM",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            K &&
              e.jsx("div", {
                className:
                  "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/30",
                onClick: () => q(null),
                role: "presentation",
                children: e.jsxs("div", {
                  className:
                    "glass-panel rounded-2xl p-6 max-w-sm w-full shadow-xl border border-white",
                  onClick: (nt) => nt.stopPropagation(),
                  role: "dialog",
                  "aria-label": "角色提醒与叮嘱",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between items-start mb-3",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[9px] font-mono-code text-[#9CA3AF] uppercase",
                          children: (Kt = K.step) == null ? void 0 : Kt.title,
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => q(null),
                          className:
                            "p-1 -m-1 rounded-full hover:bg-[#E5E5E0] transition-colors",
                          children: e.jsx("i", {
                            className: "ph ph-x text-lg text-[#595450]",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "font-serif text-sm text-[#595450] leading-relaxed",
                      children: (fs = K.step) == null ? void 0 : fs.desc,
                    }),
                    ((gt = K.step) == null ? void 0 : gt.reminder) &&
                      e.jsxs("div", {
                        className: "mt-4 pt-4 border-t border-[#E5E5E0]",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[9px] uppercase tracking-wider text-[#9CA3AF] mb-1",
                            children: "提醒与叮嘱",
                          }),
                          e.jsx("p", {
                            className:
                              "font-serif text-sm text-[#595450] italic",
                            children: K.step.reminder,
                          }),
                        ],
                      }),
                  ],
                }),
              }),
          ],
        }),
        e.jsx("div", {
          id: "dining-layer",
          className: `printer-overlay ${Ae ? "active" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "美食推荐",
          style: {
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          },
          children: e.jsxs("div", {
            className: "ticket-paper",
            children: [
              e.jsx("div", { className: "rip-edge-top" }),
              e.jsxs("div", {
                className: "ticket-header",
                children: [
                  e.jsxs("div", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (nt) => nt.key === "Enter" && Wt(),
                    onClick: Wt,
                    className: "ticket-action flex items-center gap-1",
                    children: [
                      e.jsx("i", { className: "ph ph-arrow-left" }),
                      " 返回",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("i", {
                        className: "ph ph-fork-knife text-[#D4D4D0]",
                      }),
                      e.jsxs("span", {
                        className: "font-mono-code text-[9px] text-[#D4D4D0]",
                        children: [
                          se ? se.slice(0, 12) : "推荐",
                          se && se.length > 12 ? "…" : "",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    role: "button",
                    tabIndex: 0,
                    onKeyDown: (nt) => {
                      var It;
                      return (
                        nt.key === "Enter" &&
                        !ve &&
                        ((It = J == null ? void 0 : J.recommendations) == null
                          ? void 0
                          : It.length) &&
                        Pt()
                      );
                    },
                    onClick: () => {
                      var nt;
                      return (
                        ((nt = J == null ? void 0 : J.recommendations) == null
                          ? void 0
                          : nt.length) && Pt()
                      );
                    },
                    className: `ticket-action flex items-center gap-1 ${ve ? "opacity-60 pointer-events-none" : "text-[#595450]"}`,
                    children: [
                      ve ? "保存中…" : "保存",
                      " ",
                      e.jsx("i", { className: "ph ph-check" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "ticket-body",
                children: [
                  (J == null ? void 0 : J.addressName) &&