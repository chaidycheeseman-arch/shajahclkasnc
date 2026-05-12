function Zte(...t) {
  return Fc($c(t));
}
function Xte({
  onClose: t,
  owner: s,
  repo: n,
  branch: a,
  token: r,
  onConfirm: i,
}) {
  const [o, c] = l.useState([]),
    [d, u] = l.useState(!1),
    [f, p] = l.useState(null),
    [m, h] = l.useState(null);
  l.useEffect(() => {
    let x = !1;
    return (
      (async () => {
        (u(!0), p(null));
        try {
          const v = await Bte({ owner: s, repo: n, branch: a, token: r });
          if (x) return;
          c(v);
          const b = v.find((N) => N.isLatest) || v[0];
          h((b == null ? void 0 : b.manifestPath) ?? null);
        } catch (v) {
          x || p((v == null ? void 0 : v.message) || String(v));
        } finally {
          x || u(!1);
        }
      })(),
      () => {
        x = !0;
      }
    );
  }, [s, n, a, r]);
  const g = (x) => {
    const y =
        typeof x.backupTitle == "string" && x.backupTitle.trim()
          ? x.backupTitle.trim()
          : null,
      v =
        x.createdAt &&
        (() => {
          try {
            return new Date(x.createdAt).toLocaleString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            });
          } catch {
            return x.createdAt;
          }
        })(),
      b =
        typeof x.byteSize == "number"
          ? ` · 约 ${(x.byteSize / 1024 / 1024).toFixed(1)} MB`
          : "",
      N = x.isLatest ? "（当前 latest 指向）" : "";
    return `${y || v || x.runId}${b}${N}`;
  };
  return e.jsx(We.div, {
    role: "dialog",
    "aria-modal": "true",
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className:
      "absolute inset-0 z-[56] flex items-center justify-center p-3 sm:p-4 bg-black/35 backdrop-blur-sm",
    onClick: (x) => {
      x.target === x.currentTarget && t();
    },
    children: e.jsxs(We.div, {
      initial: { scale: 0.96, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.96, opacity: 0 },
      onClick: (x) => x.stopPropagation(),
      className:
        "flex max-h-[min(85vh,560px)] w-full max-w-md flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-2xl",
      children: [
        e.jsxs("div", {
          className: "shrink-0 border-b border-gray-100 px-4 py-3",
          children: [
            e.jsx("h3", {
              className: "font-serif text-lg italic text-gray-900",
              children: "选择要恢复的备份",
            }),
            e.jsxs("p", {
              className: "mt-1 text-[0.7rem] leading-relaxed text-gray-500",
              children: [
                "以下为仓库 ",
                e.jsx("span", {
                  className: "font-mono text-xs",
                  children: "phone-cloud-backups",
                }),
                " 中的历史记录，选一条下载并导入。",
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "min-h-0 flex-1 overflow-y-auto px-4 py-3",
          children: [
            d &&
              e.jsxs("div", {
                className:
                  "flex items-center justify-center gap-2 py-10 text-sm text-gray-500",
                children: [
                  e.jsx(Or, { size: 16, className: "animate-spin" }),
                  "正在拉取备份列表…",
                ],
              }),
            !d &&
              f &&
              e.jsx("p", {
                className:
                  "rounded-md border border-red-100 bg-red-50 px-3 py-2 text-sm text-red-800",
                children: f,
              }),
            !d &&
              !f &&
              o.length === 0 &&
              e.jsx("p", {
                className: "py-8 text-center text-sm text-gray-500",
                children: "暂无历史备份，请先在本地上传至少一次。",
              }),
            !d &&
              !f &&
              o.length > 0 &&
              e.jsx("ul", {
                className: "space-y-2",
                children: o.map((x) =>
                  e.jsx(
                    "li",
                    {
                      children: e.jsxs("label", {
                        className: Zte(
                          "flex cursor-pointer items-start gap-3 rounded-sm border px-3 py-2.5 transition-colors",
                          m === x.manifestPath
                            ? "border-gray-900 bg-gray-50"
                            : "border-gray-200 hover:border-gray-400",
                        ),
                        children: [
                          e.jsx("input", {
                            type: "radio",
                            name: "github-backup-run",
                            className: "mt-1",
                            checked: m === x.manifestPath,
                            onChange: () => h(x.manifestPath),
                          }),
                          e.jsxs("span", {
                            className:
                              "min-w-0 flex-1 text-left text-[0.8125rem] leading-snug text-gray-800",
                            children: [
                              g(x),
                              e.jsx("span", {
                                className:
                                  "mt-0.5 block font-mono text-[0.65rem] text-gray-400",
                                children: x.runId,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    x.manifestPath,
                  ),
                ),
              }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex shrink-0 flex-col gap-2 border-t border-gray-100 px-4 py-3",
          children: [
            e.jsx("button", {
              type: "button",
              disabled: d || !!f || !m || o.length === 0,
              onClick: () => m && i(m),
              className:
                "w-full rounded-sm bg-gray-900 py-3 text-sm font-bold tracking-widest text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40",
              children: "拉取并导入",
            }),
            e.jsx("button", {
              type: "button",
              onClick: t,
              className:
                "w-full rounded-sm border border-gray-200 py-3 text-sm font-bold tracking-widest text-gray-600 hover:border-gray-900 hover:text-gray-900",
              children: "取消",
            }),
          ],
        }),
      ],
    }),
  });
}
function ese(...t) {
  return Fc($c(t));
}
function Xd({ n: t }) {
  return e.jsx("span", {
    className:
      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white",
    children: t,
  });
}
function c0({ children: t, variant: s = "info" }) {
  return e.jsx("div", {
    className: ese(
      "rounded-md border px-3 py-2.5 text-[0.8125rem] leading-relaxed",
      s === "warn" && "border-amber-200 bg-amber-50 text-amber-950",
      s === "ok" && "border-emerald-200 bg-emerald-50 text-emerald-950",
      s === "info" && "border-gray-200 bg-gray-50 text-gray-800",
    ),
    children: t,
  });
}
function tse({ onClose: t }) {
  return (
    l.useEffect(() => {
      const s = (n) => {
        n.key === "Escape" && t();
      };
      return (
        window.addEventListener("keydown", s),
        () => window.removeEventListener("keydown", s)
      );
    }, [t]),
    e.jsx(We.div, {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "github-backup-tutorial-title",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
      className:
        "absolute inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black/45 backdrop-blur-md",
      onClick: (s) => {
        s.target === s.currentTarget && t();
      },
      children: e.jsxs(We.div, {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
        transition: { duration: 0.2 },
        onClick: (s) => s.stopPropagation(),
        className:
          "flex max-h-[min(90vh,720px)] min-h-0 w-full max-w-lg flex-col overflow-hidden rounded-sm border border-gray-200 bg-[#FDFBF7] shadow-2xl sm:max-w-xl",
        children: [
          e.jsxs("div", {
            className:
              "flex shrink-0 items-center gap-2 border-b border-gray-100 px-3 py-3 sm:px-4",
            children: [
              e.jsxs("button", {
                type: "button",
                onClick: t,
                className:
                  "flex items-center gap-1 rounded-sm px-2 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900",
                children: [e.jsx(un, { size: 18, strokeWidth: 2 }), "返回"],
              }),
              e.jsxs("div", {
                className: "min-w-0 flex-1 text-center",
                children: [
                  e.jsx("h2", {
                    id: "github-backup-tutorial-title",
                    className:
                      "font-serif text-base italic text-gray-900 sm:text-lg",
                    children: "云备份教程",
                  }),
                  e.jsx("p", {
                    className:
                      "truncate text-[0.65rem] uppercase tracking-widest text-gray-400",
                    children: "零基础 · 照着点就行",
                  }),
                ],
              }),
              e.jsx("div", { className: "w-14 shrink-0", "aria-hidden": !0 }),
            ],
          }),
          e.jsxs("div", {
            className:
              "min-h-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-4 py-4 sm:px-5 touch-pan-y [-webkit-overflow-scrolling:touch]",
            children: [
              e.jsxs("div", {
                className:
                  "mb-6 flex items-start gap-2 rounded-md border border-blue-100 bg-blue-50/80 px-3 py-2.5 text-[0.8125rem] leading-relaxed text-blue-950",
                children: [
                  e.jsx(ui, {
                    size: 18,
                    className: "mt-0.5 shrink-0 text-blue-700",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-medium text-blue-900",
                        children: "这份教程写给完全没碰过代码的你",
                      }),
                      e.jsxs("p", {
                        className: "mt-1 text-blue-900/90",
                        children: [
                          "你只要会「打开网站 → 点按钮 → 复制粘贴」，就能完成。下面每一步都写好了要点的",
                          e.jsx("strong", { children: "字长什么样" }),
                          "，请慢慢来，不要跳步。",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "space-y-3",
                children: [
                  e.jsxs("h3", {
                    className:
                      "flex items-center gap-2 text-sm font-bold text-gray-900",
                    children: [
                      e.jsx(s3, { size: 16, className: "text-amber-500" }),
                      "先弄明白：我们在干什么？",
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-[0.8125rem] leading-relaxed text-gray-700",
                    children: [
                      "可以把 ",
                      e.jsx("strong", { children: "GitHub" }),
                      " 想成网上的一个",
                      e.jsx("strong", { children: "带锁的小仓库" }),
                      "：你的备份文件放在里面，只有你的账号能打开。 本应用",
                      e.jsx("strong", { children: "不会" }),
                      "把你的数据发到我们的服务器，而是发到",
                      e.jsx("strong", { children: "你自己" }),
                      "在 GitHub 上的私有空间里。",
                    ],
                  }),
                  e.jsxs(c0, {
                    children: [
                      e.jsx("span", {
                        className: "font-medium text-gray-900",
                        children: "你要做的只有三件事：",
                      }),
                      e.jsx("br", {}),
                      "① 在 GitHub 建一个「私人小仓库」→ ② 领一把「钥匙」（Token）→ ③ 把仓库名字和钥匙填回本应用。",
                    ],
                  }),
                ],
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsx("section", {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(Xd, { n: 1 }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1 space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-sm font-bold text-gray-900",
                          children: "打开 GitHub 并登录",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[0.8125rem] leading-relaxed text-gray-700",
                          children:
                            "用电脑或手机浏览器打开下面这个网址（建议收藏）：",
                        }),
                        e.jsxs("a", {
                          href: "https://github.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-flex items-center gap-1.5 break-all rounded border border-gray-200 bg-white px-2 py-1.5 text-xs font-mono text-gray-800 hover:border-gray-400",
                          children: [
                            "https://github.com",
                            e.jsx(V1, { size: 12, className: "shrink-0" }),
                          ],
                        }),
                        e.jsxs("ul", {
                          className:
                            "list-inside list-disc space-y-1 text-[0.8125rem] text-gray-700",
                          children: [
                            e.jsxs("li", {
                              children: [
                                "若",
                                e.jsx("strong", { children: "没有账号" }),
                                "：点页面上的 ",
                                e.jsx("strong", { children: "Sign up" }),
                                "（注册），按提示用邮箱注册即可。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "若",
                                e.jsx("strong", { children: "已有账号" }),
                                "：点 ",
                                e.jsx("strong", { children: "Sign in" }),
                                "（登录）。",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsx("section", {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(Xd, { n: 2 }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1 space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-sm font-bold text-gray-900",
                          children: "新建一个「私人」仓库（很重要）",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[0.8125rem] leading-relaxed text-gray-700",
                          children: "登录成功后，按顺序找按钮：",
                        }),
                        e.jsxs("ol", {
                          className:
                            "list-decimal space-y-2 pl-4 text-[0.8125rem] leading-relaxed text-gray-700",
                          children: [
                            e.jsxs("li", {
                              children: [
                                "看网页",
                                e.jsx("strong", { children: "右上角" }),
                                "，有一个 ",
                                e.jsx("strong", { children: "「+」" }),
                                " 号，用鼠标点它。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "在弹出来的菜单里，点 ",
                                e.jsx("strong", { children: "New repository" }),
                                "（新建仓库）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "在 ",
                                e.jsx("strong", {
                                  children: "Repository name",
                                }),
                                "（仓库名称）那一栏，随便起一个英文名，例如",
                                " ",
                                e.jsx("span", {
                                  className:
                                    "rounded bg-gray-100 px-1 font-mono text-xs",
                                  children: "my-phone-backup",
                                }),
                                "（只能用字母、数字、短横线，不要空格）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "往下找到 ",
                                e.jsx("strong", { children: "Private" }),
                                "（私有），点选它——这样别人看不到你的备份。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "其他选项",
                                e.jsx("strong", { children: "不用管" }),
                                "，直接拉到最下面，点绿色的 ",
                                e.jsx("strong", {
                                  children: "Create repository",
                                }),
                                "（创建仓库）。",
                              ],
                            }),
                          ],
                        }),
                        e.jsx(c0, {
                          variant: "ok",
                          children: e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(q5, {
                                size: 16,
                                className: "mt-0.5 shrink-0 text-emerald-600",
                              }),
                              e.jsxs("span", {
                                children: [
                                  "创建成功后，你会看到一个新页面，可能写着「Quick setup」之类——",
                                  e.jsx("strong", { children: "没关系" }),
                                  "，说明仓库已经建好了。",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsx("section", {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(Xd, { n: 3 }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1 space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-sm font-bold text-gray-900",
                          children: "抄下「网名/仓库名」（填回本应用第一格）",
                        }),
                        e.jsxs("p", {
                          className:
                            "text-[0.8125rem] leading-relaxed text-gray-700",
                          children: [
                            "请看浏览器最上面",
                            e.jsx("strong", { children: "地址栏" }),
                            "里的一长串网址，形状像这样：",
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "rounded-md border border-dashed border-gray-300 bg-white px-2 py-2 font-mono text-[0.7rem] leading-snug text-gray-800 break-all sm:text-xs",
                          children: [
                            "https://github.com/",
                            e.jsx("span", {
                              className: "text-red-600",
                              children: "你的网名",
                            }),
                            "/",
                            e.jsx("span", {
                              className: "text-blue-600",
                              children: "仓库名",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "text-[0.8125rem] leading-relaxed text-gray-700",
                          children: [
                            "你要抄给本应用的，是中间",
                            e.jsx("strong", { children: "红色" }),
                            "和",
                            e.jsx("strong", { children: "蓝色" }),
                            "这两段，中间加",
                            e.jsx("strong", { children: "一个斜杠 /" }),
                            "，变成：",
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "rounded-md bg-gray-900 px-3 py-2 text-center font-mono text-sm text-white",
                          children: "你的网名/仓库名",
                        }),
                        e.jsxs("p", {
                          className: "text-[0.8125rem] text-gray-600",
                          children: [
                            "例如网名是 ",
                            e.jsx("span", {
                              className: "font-mono",
                              children: "xiaoming",
                            }),
                            "，仓库名是",
                            " ",
                            e.jsx("span", {
                              className: "font-mono",
                              children: "my-phone-backup",
                            }),
                            "，你就填：",
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "rounded-md bg-gray-100 px-3 py-2 text-center font-mono text-sm",
                          children: "xiaoming/my-phone-backup",
                        }),
                        e.jsx(c0, {
                          variant: "warn",
                          children: e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(W5, {
                                size: 16,
                                className: "mt-0.5 shrink-0 text-amber-700",
                              }),
                              e.jsxs("span", {
                                children: [
                                  "不要填成网址整行，也不要多空格。只填「网名/仓库名」这",
                                  e.jsx("strong", { children: "一段" }),
                                  "。",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsx("section", {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(Xd, { n: 4 }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1 space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-sm font-bold text-gray-900",
                          children: "制作「钥匙」Token（填回本应用第三格）",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[0.8125rem] leading-relaxed text-gray-700",
                          children:
                            "Token 就像一把钥匙，让本应用有权往你的私人仓库里放文件。按下面做（推荐「细粒度」钥匙，更安全）：",
                        }),
                        e.jsxs("ol", {
                          className:
                            "list-decimal space-y-2 pl-4 text-[0.8125rem] leading-relaxed text-gray-700",
                          children: [
                            e.jsxs("li", {
                              children: [
                                "点网页",
                                e.jsx("strong", { children: "右上角你的头像" }),
                                "。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "点 ",
                                e.jsx("strong", { children: "Settings" }),
                                "（设置）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "左侧菜单滑到最下面，找到 ",
                                e.jsx("strong", {
                                  children: "Developer settings",
                                }),
                                "（开发者设置），点进去。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "点 ",
                                e.jsx("strong", {
                                  children: "Personal access tokens",
                                }),
                                " → 再点 ",
                                e.jsx("strong", {
                                  children: "Fine-grained tokens",
                                }),
                                "（细粒度令牌）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "点绿色的 ",
                                e.jsx("strong", {
                                  children: "Generate new token",
                                }),
                                "（生成新令牌）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                e.jsx("strong", { children: "Token name" }),
                                " 随便写个名字，例如 ",
                                e.jsx("span", {
                                  className: "font-mono",
                                  children: "phone-backup",
                                }),
                                "。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                e.jsx("strong", { children: "Expiration" }),
                                "（过期时间）可以选 No expiration（永不过期）或选一个很长的日期——过期后要重新做一把钥匙。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                e.jsx("strong", {
                                  children: "Repository access",
                                }),
                                "：选 ",
                                e.jsx("strong", {
                                  children: "Only select repositories",
                                }),
                                "，然后在下面只勾选你",
                                e.jsx("strong", {
                                  children: "刚才建的那个私人仓库",
                                }),
                                "。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "往下找到 ",
                                e.jsx("strong", {
                                  children: "Repository permissions",
                                }),
                                "（仓库权限），找到 ",
                                e.jsx("strong", { children: "Contents" }),
                                "，改成",
                                " ",
                                e.jsx("strong", { children: "Read and write" }),
                                "（读和写）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "其他不用改，拉到最下面，点 ",
                                e.jsx("strong", { children: "Generate token" }),
                                "（生成）。",
                              ],
                            }),
                            e.jsxs("li", {
                              children: [
                                "页面会出现",
                                e.jsx("strong", { children: "一长串英文字母" }),
                                "——这就是 Token。",
                                e.jsx("strong", { children: "马上复制" }),
                                "保存到记事本，关闭页面后",
                                e.jsx("strong", {
                                  children: "再也看不到第二次",
                                }),
                                "。",
                              ],
                            }),
                          ],
                        }),
                        e.jsx(c0, {
                          variant: "warn",
                          children: e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(lr, {
                                size: 16,
                                className: "mt-0.5 shrink-0 text-amber-800",
                              }),
                              e.jsx("span", {
                                children:
                                  "不要把 Token 发给陌生人，不要发到公开群聊。它就像家门钥匙，谁拿到谁就能动你的仓库。",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsx("section", {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(Xd, { n: 5 }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1 space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-sm font-bold text-gray-900",
                          children: "回到本应用，把三格填好",
                        }),
                        e.jsx("div", {
                          className:
                            "overflow-hidden rounded-md border border-gray-200 text-left text-[0.8125rem]",
                          children: e.jsxs("table", {
                            className: "w-full border-collapse",
                            children: [
                              e.jsx("thead", {
                                children: e.jsxs("tr", {
                                  className:
                                    "bg-gray-100 text-left text-xs text-gray-600",
                                  children: [
                                    e.jsx("th", {
                                      className:
                                        "border-b border-gray-200 px-2 py-2",
                                      children: "这一格叫什么",
                                    }),
                                    e.jsx("th", {
                                      className:
                                        "border-b border-gray-200 px-2 py-2",
                                      children: "填什么",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs("tbody", {
                                className: "text-gray-800",
                                children: [
                                  e.jsxs("tr", {
                                    children: [
                                      e.jsx("td", {
                                        className:
                                          "border-b border-gray-100 px-2 py-2 font-medium",
                                        children: "仓库",
                                      }),
                                      e.jsxs("td", {
                                        className:
                                          "border-b border-gray-100 px-2 py-2",
                                        children: [
                                          "第 3 步抄的 ",
                                          e.jsx("span", {
                                            className: "font-mono text-xs",
                                            children: "网名/仓库名",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("tr", {
                                    children: [
                                      e.jsx("td", {
                                        className:
                                          "border-b border-gray-100 px-2 py-2 font-medium",
                                        children: "分支",
                                      }),
                                      e.jsxs("td", {
                                        className:
                                          "border-b border-gray-100 px-2 py-2",
                                        children: [
                                          "一般填 ",
                                          e.jsx("span", {
                                            className: "font-mono text-xs",
                                            children: "main",
                                          }),
                                          "（除非你记得建仓库时选的是别的名字）",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("tr", {
                                    children: [
                                      e.jsx("td", {
                                        className: "px-2 py-2 font-medium",
                                        children: "Token",
                                      }),
                                      e.jsx("td", {
                                        className: "px-2 py-2",
                                        children: "第 4 步复制的那一长串",
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
                  ],
                }),
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsx("section", {
                className: "space-y-4",
                children: e.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    e.jsx(Xd, { n: 6 }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1 space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-sm font-bold text-gray-900",
                          children: "先测试，再上传",
                        }),
                        e.jsxs("ol", {
                          className:
                            "list-decimal space-y-1.5 pl-4 text-[0.8125rem] leading-relaxed text-gray-700",
                          children: [
                            e.jsxs("li", {
                              children: [
                                "点 ",
                                e.jsx("strong", { children: "测试连接" }),
                                "。若提示成功，说明仓库和钥匙都对。",
                              ],
                            }),
                            e.jsx("li", {
                              children:
                                "在下方勾选你想备份的内容（不懂就保持全选）。",
                            }),
                            e.jsxs("li", {
                              children: [
                                "点 ",
                                e.jsx("strong", { children: "上传到 GitHub" }),
                                "。第一次可能要等一会儿，不要关页面。",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "text-[0.8125rem] text-gray-600",
                          children: [
                            "你也可以登录 GitHub，打开自己的仓库，看到里面多了一个",
                            " ",
                            e.jsx("span", {
                              className: "font-mono text-xs",
                              children: "phone-cloud-backups",
                            }),
                            " 文件夹，就说明成功了。",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("hr", { className: "my-6 border-gray-100" }),
              e.jsxs("section", {
                className: "space-y-2",
                children: [
                  e.jsx("h3", {
                    className: "text-sm font-bold text-gray-900",
                    children: "如果报错了，先看这里",
                  }),
                  e.jsxs("ul", {
                    className:
                      "space-y-2 text-[0.8125rem] leading-relaxed text-gray-700",
                    children: [
                      e.jsxs("li", {
                        children: [
                          e.jsx("strong", { children: "401" }),
                          "：钥匙（Token）错了、过期了、或复制时多了空格。重新做一把 Token 试试。",
                        ],
                      }),
                      e.jsxs("li", {
                        children: [
                          e.jsx("strong", { children: "404" }),
                          "：仓库名字写错了，或还没成功上传过。检查「网名/仓库名」是否和网址里一致。",
                        ],
                      }),
                      e.jsxs("li", {
                        children: [
                          e.jsx("strong", { children: "上传很慢" }),
                          "：数据多时要切成很多小文件，是正常的，耐心等。",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "shrink-0 border-t border-gray-100 bg-white/90 px-4 py-3",
            children: e.jsx("button", {
              type: "button",
              onClick: t,
              className:
                "w-full rounded-sm bg-gray-900 py-3 text-sm font-bold tracking-widest text-white transition-colors hover:bg-gray-800",
              children: "我看完了，去填写",
            }),
          }),
        ],
      }),
    })
  );
}
function wo(t) {
  if (t == null) return "";
  if (typeof t == "string") return t;
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return String(t);
  }
}
function sse(t) {
  if (t == null) return "";
  if (typeof t == "string") return t;
  if (typeof t == "object")
    try {
      return JSON.stringify(t, null, 2);
    } catch {
      return String(t);
    }
  return String(t);
}
const nse = ({ verboseEnabled: t = !1 }) => {
    const { apiLogs: s, clearApiLogs: n } = cF(),
      [a, r] = l.useState(null),
      [i, o] = l.useState(null),
      c = (h) => {
        r(a === h ? null : h);
      },
      d = (h) => new Date(h).toLocaleTimeString(),
      u = (h) => {
        switch (h) {
          case "success":
            return e.jsx(K5, { size: 16, className: "text-green-500" });
          case "error":
            return e.jsx(Mh, { size: 16, className: "text-red-500" });
          default:
            return e.jsx(Dr, {
              size: 16,
              className: "text-yellow-500 animate-pulse",
            });
        }
      },
      f = async (h, g) => {
        const x = String(g || "").trim();
        if (x)
          try {
            (await navigator.clipboard.writeText(x),
              o(h),
              window.setTimeout(() => o(null), 900));
          } catch {
            try {
              window.prompt("复制下面内容（Cmd/Ctrl+C）：", x);
            } catch {}
          }
      },
      p = (h, g, x, y, v) =>
        e.jsxs("div", {
          className: "flex items-center justify-between gap-2 mb-1.5",
          children: [
            e.jsx("div", {
              className: `text-[0.833333rem] font-bold uppercase tracking-wider ${g}`,
              children: h,
            }),
            e.jsxs("button", {
              type: "button",
              onClick: (b) => {
                (b.stopPropagation(), f(x, v));
              },
              className: `inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[0.833333rem] font-bold transition active:scale-[0.98] ${g} hover:bg-black/5`,
              "aria-label": `复制 ${y}`,
              children: [e.jsx(Ao, { size: 12 }), i === x ? "已复制" : "复制"],
            }),
          ],
        }),
      m = (h) =>
        [
          h != null && h.response ? String(h.response || "") : "",
          wo(h == null ? void 0 : h.requestMeta),
          String((h == null ? void 0 : h.flowTrace) || ""),
          wo(h == null ? void 0 : h.responseMeta),
          String((h == null ? void 0 : h.error) || ""),
          wo(
            (h != null && h.failureReasonCode) ||
              (h != null && h.failureReasonTitle) ||
              (h != null && h.failureReasonHint) ||
              (h != null && h.failureReasonEvidence)
              ? {
                  code: h.failureReasonCode || null,
                  title: h.failureReasonTitle || null,
                  hint: h.failureReasonHint || null,
                  evidence: h.failureReasonEvidence || null,
                }
              : null,
          ),
          wo(h == null ? void 0 : h.networkDiagnostics),
        ]
          .map((x) => String(x || "").trim())
          .filter(Boolean).join(`
`);
    return e.jsxs("div", {
      className: "h-full flex flex-col",
      children: [
        e.jsx("div", {
          className: "px-4 py-2 flex justify-end items-center gap-2",
          children: e.jsxs("button", {
            type: "button",
            onClick: n,
            className:
              "flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors",
            children: [e.jsx(_n, { size: 14 }), "清空日志"],
          }),
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto px-4 pb-4 space-y-3",
          children:
            s.length === 0
              ? e.jsx("div", {
                  className: "text-center text-gray-400 mt-20",
                  children: e.jsx("p", { children: "暂无 API 调用记录" }),
                })
              : s.map((h) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md",
                      children: [
                        e.jsxs("div", {
                          className:
                            "p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-colors",
                          onClick: () => c(h.id),
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-3 overflow-hidden",
                              children: [
                                u(h.status),
                                e.jsxs("div", {
                                  className: "flex flex-col min-w-0",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-bold text-sm text-gray-800",
                                          children: h.scene,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[0.833333rem] font-medium px-1.5 py-0.5 bg-gray-100 rounded text-gray-500",
                                          children: h.duration
                                            ? `${h.duration}ms`
                                            : h.status === "pending"
                                              ? "正在调取"
                                              : "...",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "text-xs text-gray-500 truncate mt-0.5",
                                      children: [
                                        d(h.timestamp),
                                        " • ",
                                        h.contact,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            a === h.id
                              ? e.jsx(hp, {
                                  size: 16,
                                  className: "shrink-0 text-gray-400",
                                })
                              : e.jsx(aa, {
                                  size: 16,
                                  className: "shrink-0 text-gray-400",
                                }),
                          ],
                        }),
                        a === h.id &&
                          e.jsxs("div", {
                            className:
                              "px-4 pb-4 pt-0 border-t border-gray-50 bg-gray-50/30",
                            children: [
                              e.jsx("div", {
                                className: "mt-3 flex justify-end",
                                children: e.jsxs("button", {
                                  type: "button",
                                  onClick: (g) => {
                                    (g.stopPropagation(),
                                      f(`full:${h.id}`, m(h)));
                                  },
                                  className:
                                    "inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[0.833333rem] font-bold text-gray-700 transition hover:bg-gray-100 active:scale-[0.98]",
                                  "aria-label": "复制整条详细日志",
                                  children: [
                                    e.jsx(Ao, { size: 12 }),
                                    i === `full:${h.id}`
                                      ? "整条已复制"
                                      : "复制整条详细日志",
                                  ],
                                }),
                              }),
                              h.response &&
                                e.jsxs("div", {
                                  className: "mt-3",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between gap-2 mb-1.5",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-[0.833333rem] font-bold text-green-600 uppercase tracking-wider",
                                          children: "Response",
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: (g) => {
                                            (g.stopPropagation(),
                                              f(`resp:${h.id}`, h.response));
                                          },
                                          className:
                                            "inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[0.833333rem] font-bold text-green-700 transition hover:bg-green-50 active:scale-[0.98]",
                                          "aria-label": "复制 Response",
                                          children: [
                                            e.jsx(Ao, { size: 12 }),
                                            i === `resp:${h.id}`
                                              ? "已复制"
                                              : "复制",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "bg-white p-3 rounded-lg border border-green-100 text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed shadow-sm max-h-[min(70vh,520px)] overflow-y-auto",
                                      children: sse(h.response),
                                    }),
                                  ],
                                }),
                              t &&
                                e.jsxs(e.Fragment, {
                                  children: [
                                    h.requestMeta &&
                                      e.jsxs("div", {
                                        className: "mt-3",
                                        children: [
                                          p(
                                            "RequestMeta",
                                            "text-indigo-600",
                                            `requestMeta:${h.id}`,
                                            "RequestMeta",
                                            wo(h.requestMeta),
                                          ),
                                          e.jsx("div", {
                                            className:
                                              "bg-white p-3 rounded-lg border border-indigo-100 text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed shadow-sm max-h-[min(70vh,520px)] overflow-y-auto",
                                            children: wo(h.requestMeta),
                                          }),
                                        ],
                                      }),
                                    h.flowTrace &&
                                      e.jsxs("div", {
                                        className: "mt-3",
                                        children: [
                                          p(
                                            "FlowTrace",
                                            "text-sky-600",
                                            `flowTrace:${h.id}`,
                                            "FlowTrace",
                                            String(h.flowTrace || ""),
                                          ),
                                          e.jsx("div", {
                                            className:
                                              "bg-white p-3 rounded-lg border border-sky-100 text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed shadow-sm max-h-[min(70vh,520px)] overflow-y-auto",
                                            children: String(h.flowTrace || ""),
                                          }),
                                        ],
                                      }),
                                    h.responseMeta &&
                                      e.jsxs("div", {
                                        className: "mt-3",
                                        children: [
                                          p(
                                            "ResponseMeta",
                                            "text-emerald-600",
                                            `responseMeta:${h.id}`,
                                            "ResponseMeta",
                                            wo(h.responseMeta),
                                          ),
                                          e.jsx("div", {
                                            className:
                                              "bg-white p-3 rounded-lg border border-emerald-100 text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed shadow-sm max-h-[min(70vh,520px)] overflow-y-auto",
                                            children: wo(h.responseMeta),
                                          }),
                                        ],
                                      }),
                                    h.error &&
                                      e.jsxs("div", {
                                        className: "mt-3",
                                        children: [
                                          p(
                                            "Error",
                                            "text-red-600",
                                            `error:${h.id}`,
                                            "Error",
                                            String(h.error || ""),
                                          ),
                                          e.jsx("div", {
                                            className:
                                              "bg-red-50 p-3 rounded-lg border border-red-100 text-xs text-red-700 font-mono whitespace-pre-wrap break-words leading-relaxed shadow-sm",
                                            children: String(h.error || ""),
                                          }),
                                        ],
                                      }),
                                    (h.failureReasonCode ||
                                      h.failureReasonTitle ||
                                      h.failureReasonHint ||
                                      h.failureReasonEvidence) &&
                                      e.jsxs("div", {
                                        className: "mt-3",
                                        children: [
                                          p(
                                            "FailureReason",
                                            "text-orange-600",
                                            `failureReason:${h.id}`,
                                            "FailureReason",
                                            wo({
                                              code: h.failureReasonCode || null,
                                              title:
                                                h.failureReasonTitle || null,
                                              hint: h.failureReasonHint || null,
                                              evidence:
                                                h.failureReasonEvidence || null,
                                            }),
                                          ),
                                          e.jsx("div", {
                                            className:
                                              "bg-white p-3 rounded-lg border border-orange-100 text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed shadow-sm max-h-[min(70vh,520px)] overflow-y-auto",
                                            children: wo({
                                              code: h.failureReasonCode || null,
                                              title:
                                                h.failureReasonTitle || null,
                                              hint: h.failureReasonHint || null,
                                              evidence:
                                                h.failureReasonEvidence || null,
                                            }),
                                          }),
                                        ],
                                      }),
                                    h.networkDiagnostics &&
                                      e.jsxs("div", {
                                        className: "mt-3",
                                        children: [
                                          p(
                                            "NetworkDiagnostics",
                                            "text-amber-700",
                                            `networkDiagnostics:${h.id}`,
                                            "NetworkDiagnostics",
                                            wo(h.networkDiagnostics),
                                          ),
                                          e.jsx("div", {
                                            className:
                                              "bg-white p-3 rounded-lg border border-amber-100 text-xs text-gray-800 whitespace-pre-wrap font-mono leading-relaxed shadow-sm max-h-[min(70vh,520px)] overflow-y-auto",
                                            children: wo(h.networkDiagnostics),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              !h.response &&
                                e.jsx("div", {
                                  className:
                                    "mt-3 text-xs text-gray-500 text-center py-2",
                                  children: "本次调用暂无返回内容",
                                }),
                            ],
                          }),
                      ],
                    },
                    h.id,
                  ),
                ),
        }),
      ],
    });
  },
  A5 = "chat_api_logs_verbose_enabled",
  C5 = "chat_api_logs_verbose_enabled_session",
  ase = "jujoo2568";
function nr(...t) {
  return Fc($c(t));
}
const rse = (t) => {
    const s = atob(String(t || "")),
      n = new Uint8Array(s.length);
    for (let a = 0; a < s.length; a++) n[a] = s.charCodeAt(a);
    return n.buffer;
  },
  ise = (t) => t === "device_id" || t.startsWith("gatekeeper_"),
  hi = ({
    title: t,
    subtitle: s,
    onClose: n,
    onBack: a,
    showStatusBar: r,
    showPhoneCase: i,
    titleExtra: o = null,
  }) =>
    e.jsxs("div", {
      className:
        "sticky top-0 z-20 flex min-w-0 items-end justify-between gap-4 border-b border-gray-900/5 bg-[#FDFBF7]/95 px-8 pb-6 backdrop-blur-md",
      style: { paddingTop: r && !i ? Nte : "3.75rem" },
      children: [
        e.jsxs("div", {
          className: "flex min-w-0 flex-1 flex-col gap-2 pr-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                a &&
                  e.jsxs("button", {
                    onClick: a,
                    className:
                      "hover:opacity-60 transition-opacity group flex items-center gap-1",
                    children: [
                      e.jsx(un, {
                        size: 14,
                        className:
                          "text-gray-400 group-hover:text-gray-900 transition-colors",
                      }),
                      e.jsx("span", {
                        className:
                          "text-[0.833333rem] font-bold tracking-widest text-gray-400 uppercase group-hover:text-gray-900 transition-colors",
                        children: "返回",
                      }),
                    ],
                  }),
                !a &&
                  e.jsx("p", {
                    className:
                      "text-[0.833333rem] font-bold tracking-[0.2em] text-gray-400 uppercase",
                    children: s || "系统配置",
                  }),
              ],
            }),
            e.jsxs("div", {
              className: "flex min-w-0 items-baseline gap-4",
              children: [
                e.jsx("h1", {
                  className:
                    "m-0 min-w-0 flex-1 text-4xl font-serif italic tracking-tight text-gray-900",
                  children: a
                    ? e.jsx("button", {
                        type: "button",
                        onClick: a,
                        className:
                          "m-0 max-w-full w-auto min-w-0 cursor-pointer border-0 bg-transparent p-0 text-left font-inherit italic tracking-tight text-gray-900 break-words transition-opacity hover:opacity-70",
                        children: t,
                      })
                    : t,
                }),
                e.jsx("div", {
                  className: "h-[1px] flex-1 bg-gray-200 hidden sm:block",
                }),
                o ||
                  e.jsx("span", {
                    className:
                      "text-[0.833333rem] font-mono text-gray-300 hidden sm:block",
                    children: "VOL.01",
                  }),
              ],
            }),
          ],
        }),
        n &&
          e.jsx("button", {
            onClick: n,
            className:
              "group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-all duration-500 hover:border-gray-900 hover:bg-gray-900 hover:text-white",
            children: e.jsx(Ts, {
              size: 20,
              className:
                "group-hover:rotate-90 transition-transform duration-500",
            }),
          }),
      ],
    }),
  tr = ({ number: t, title: s, children: n }) =>
    e.jsxs("div", {
      className: "space-y-8 mb-16 relative",
      children: [
        e.jsxs("div", {
          className:
            "flex items-baseline gap-4 px-2 border-b border-gray-100 pb-4 mb-6",
          children: [
            e.jsx("span", {
              className:
                "text-5xl font-serif text-gray-100 absolute -top-8 -left-4 -z-10 select-none",
              children: t,
            }),
            e.jsxs("span", {
              className:
                "text-sm font-bold tracking-[0.2em] uppercase text-gray-900 flex items-center gap-2",
              children: [
                e.jsx("span", {
                  className: "w-1.5 h-1.5 bg-gray-900 rounded-full",
                }),
                s,
              ],
            }),
          ],
        }),
        e.jsx("div", { className: "space-y-4", children: n }),
      ],
    }),
  Da = ({ children: t, className: s, onClick: n }) =>
    e.jsxs("div", {
      onClick: n,
      className: nr(
        "bg-white p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group",
        n && "cursor-pointer hover:-translate-y-1",
        s,
      ),
      children: [
        e.jsx("div", {
          className:
            "absolute top-0 left-0 w-full h-[2px] bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
        }),
        t,
      ],
    }),
  ji = ({
    label: t,
    value: s,
    onChange: n,
    placeholder: a,
    type: r = "text",
  }) =>
    e.jsxs("div", {
      className: "space-y-3 group",
      children: [
        t &&
          e.jsx("label", {
            className:
              "text-[0.833333rem] font-bold tracking-widest text-gray-400 uppercase group-focus-within:text-gray-900 transition-colors",
            children: t,
          }),
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx("input", {
              type: r,
              value: s,
              onChange: (i) => n(i.target.value),
              placeholder: a,
              className:
                "w-full bg-gray-50/50 border-b border-gray-200 text-sm py-3 px-2 outline-none font-serif placeholder-gray-300 focus:border-gray-900 focus:bg-white transition-all",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-0 left-0 w-full h-[1px] bg-gray-900 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500",
            }),
          ],
        }),
      ],
    }),
  Ly = ({ label: t, value: s, options: n, onChange: a }) =>
    e.jsxs("div", {
      className: "space-y-3 group",
      children: [
        t &&
          e.jsx("label", {
            className:
              "text-[0.833333rem] font-bold tracking-widest text-gray-400 uppercase group-focus-within:text-gray-900 transition-colors",
            children: t,
          }),
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx("select", {
              value: s,
              onChange: (r) => a(r.target.value),
              className:
                "w-full bg-gray-50/50 border-b border-gray-200 text-sm py-3 px-2 outline-none font-serif appearance-none cursor-pointer hover:border-gray-900 hover:bg-white transition-all pr-8",
              children: n.map((r) =>
                e.jsx(
                  "option",
                  {
                    value: typeof r == "object" ? r.value : r,
                    children: typeof r == "object" ? r.label : r,
                  },
                  typeof r == "object" ? r.value : r,
                ),
              ),
            }),
            e.jsx(aa, {
              size: 14,
              className:
                "absolute right-2 top-4 text-gray-400 pointer-events-none group-hover:text-gray-900 transition-colors",
            }),
          ],
        }),
      ],
    }),
  Fi = ({ checked: t, onChange: s, label: n }) =>
    e.jsxs("div", {
      className:
        "flex justify-between items-center gap-3 min-w-0 group cursor-pointer",
      onClick: () => s(!t),
      children: [
        n &&
          e.jsx("span", {
            className:
              "text-sm font-serif text-gray-800 italic group-hover:text-black transition-colors min-w-0 flex-1 pr-2",
            children: n,
          }),
        e.jsxs("div", {
          className: "flex items-center gap-3 shrink-0",
          children: [
            e.jsx("span", {
              className: nr(
                "text-[0.833333rem] font-bold tracking-widest uppercase transition-colors",
                t ? "text-gray-900" : "text-gray-300",
              ),
              children: t ? "ON" : "OFF",
            }),
            e.jsx("div", {
              className: nr(
                "w-14 h-7 rounded-full border flex items-center px-1 transition-all duration-500",
                t
                  ? "border-gray-900 bg-gray-900"
                  : "border-gray-200 bg-transparent group-hover:border-gray-400",
              ),
              children: e.jsx("div", {
                className: nr(
                  "w-4 h-4 rounded-full transition-all duration-500 shadow-sm",
                  t ? "bg-white translate-x-7" : "bg-gray-300",
                ),
              }),
            }),
          ],
        }),
      ],
    }),
  Pa = ({
    children: t,
    onClick: s,
    loading: n,
    disabled: a,
    variant: r = "primary",
    className: i,
  }) =>
    e.jsxs("button", {
      type: "button",
      onClick: s,
      disabled: n || a,
      className: nr(
        "min-w-0 px-8 py-4 text-[0.833333rem] tracking-[0.2em] font-bold uppercase transition-all active:scale-95 flex items-center justify-center gap-3 relative overflow-hidden group text-center whitespace-normal [word-break:break-word]",
        r === "primary"
          ? "bg-gray-900 text-white"
          : "border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900",
        n && "opacity-70 cursor-not-allowed",
        i,
      ),
      children: [
        r === "primary" &&
          e.jsx("div", {
            className:
              "pointer-events-none absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
          }),
        e.jsx("span", {
          className: nr(
            "inline-flex items-center justify-center transition-opacity",
            n ? "opacity-100" : "opacity-0",
          ),
          children: e.jsx(Or, { size: 14, className: nr(n && "animate-spin") }),
        }),
        t,
      ],
    }),
  fc = ({
    value: t,
    min: s,
    max: n,
    step: a,
    onChange: r,
    label: i,
    valueLabel: o,
  }) =>
    e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className:
            "flex justify-between gap-3 min-w-0 text-[0.833333rem] tracking-widest text-gray-400 uppercase",
          children: [
            e.jsx("span", { className: "min-w-0 break-words", children: i }),
            e.jsx("span", {
              className: "font-mono text-gray-900 shrink-0 tabular-nums",
              children: o || t,
            }),
          ],
        }),
        e.jsxs("div", {
          className: "relative h-6 flex items-center",
          children: [
            e.jsx("div", {
              className:
                "absolute inset-0 flex justify-between px-1 pointer-events-none opacity-20",
              children: [...Array(11)].map((c, d) =>
                e.jsx("div", { className: "w-[1px] h-2 bg-gray-900" }, d),
              ),
            }),
            e.jsx("input", {
              type: "range",
              min: s,
              max: n,
              step: a,
              value: t,
              onChange: (c) => r(parseFloat(c.target.value)),
              className:
                "w-full h-[2px] bg-gray-200 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-110 transition-all",
            }),
          ],
        }),
      ],
    }),
  ose = ({
    onClose: t,
    language: s,
    setLanguage: n,
    fontConfig: a,
    setFontConfig: r,
    appCustomizations: i,
    setAppCustomizations: o,
    allApps: c,
    wallpaper: d,
    setWallpaper: u,
    showStatusBar: f,
    setShowStatusBar: p,
    showHomeIndicator: m,
    setShowHomeIndicator: h,
    showDynamicIsland: g,
    setShowDynamicIsland: x,
    themeColor: y,
    setThemeColor: v,
    fontSize: b,
    setFontSize: N,
    fontPresets: w,
    setFontPresets: _,
    showPhoneCase: A,
    setShowPhoneCase: k,
    caseColor: C,
    setCaseColor: M,
    caseWidth: E,
    setCaseWidth: S,
    caseSize: j,
    setCaseSize: T,
    showDock: I,
    setShowDock: L,
    weatherEffect: B,
    setWeatherEffect: F,
    globalCss: D,
    setGlobalCss: $,
    blurStyle: P,
    setBlurStyle: z,
    uiStyle: O,
    setUiStyle: Z,
    userProfile: K,
    setUserProfile: q,
    apiConfig: V,
    setApiConfig: ne,
    chatConfig: le = {},
    setChatConfig: ie,
    presets: X,
    setPresets: je,
    ttsConfig: xe,
    setTtsConfig: ye,
    amapWebKey: R = "",
    setAmapWebKey: oe = () => {},
    onResetDesktopWidgetUserContent: ee,
    systemNotificationEnabled: H,
    toggleSystemNotification: Y,
    sendSystemNotification: U,
  }) => {
    const ce = vn(),
      {
        voices: pe = [],
        fetchVoices: se = () => {},
        notificationStrategy: Te = "last",
        setNotificationStrategy: ke = () => {},
        soundEnabled: W = !1,
        setSoundEnabled: ue = () => {},
        sendSoundKey: re = "default",
        setSendSoundKey: he = () => {},
        receiveSoundKey: ge = "default",
        setReceiveSoundKey: J = () => {},
        clickSoundKey: G = "default",
        setClickSoundKey: we = () => {},
        blockedInviteRingtoneKey: Q = "default",
        setBlockedInviteRingtoneKey: ve = () => {},
        clickGlowEnabled: Ve = !1,
        setClickGlowEnabled: Ae = () => {},
        clickGlowAsset: te = "",
        setClickGlowAsset: Se = () => {},
        chats: Fe = [],
        contacts: $e = [],
        updateChatSettings: tt = () => {},
        activeChatId: Xe = null,
      } = ce || {},
      [ht, Pe] = Yn("settings_keep_alive", !1),
      [ut, _t] = l.useState(!1),
      [Ee, fe] = l.useState(""),
      [He, Ie] = l.useState("main"),
      [Ce, Re] = l.useState(() => {
        try {
          const Et = localStorage.getItem(A5);
          if (Et === "1" || Et === "0") return Et === "1";
        } catch {}
        try {
          return sessionStorage.getItem(C5) === "1";
        } catch {
          return !1;
        }
      }),
      De = () => {
        const Et = window.prompt("输入调试口令以切换详细日志：", "");
        if (Et == null) return;
        if (String(Et).trim() !== ase) {
          window.alert("口令错误");
          return;
        }
        const Ms = !Ce;
        Re(Ms);
        try {
          localStorage.setItem(A5, Ms ? "1" : "0");
        } catch {}
        try {
          sessionStorage.setItem(C5, Ms ? "1" : "0");
        } catch {}
        window.alert(Ms ? "已开启详细日志" : "已关闭详细日志");
      },
      [at, ft] = l.useState(""),
      [vt, Oe] = l.useState(!1),
      [Qe, Ye] = l.useState(""),
      [Ze, Ue] = l.useState(!1),
      me = l.useContext($1),
      [jt, Gt] = l.useState(V.model ? [V.model] : []),
      [Pt, Wt] = l.useState(V.backupModel ? [V.backupModel] : []),
      [ct, Kt] = l.useState(!1),
      [fs, gt] = l.useState(!1),
      [ae, nt] = l.useState(null),
      [It, Xt] = l.useState(null),
      [bs, ss] = l.useState(!1),
      [_s, qs] = l.useState(!1),
      [Bs, Js] = l.useState(null),
      [Xs, gn] = l.useState(null),
      [sn, ln] = l.useState(null),
      [rn, wt] = l.useState(null),
      [xs, ot] = l.useState(null),
      [st, $t] = l.useState(null),
      [Ft, es] = l.useState(""),
      [At, Jt] = l.useState(!1),
      [Vt, qt] = l.useState(!0),
      [Lt, Qt] = l.useState(!1),
      [js, cs] = l.useState(null),
      [Ne, Je] = l.useState(!1),
      [St, Be] = l.useState(!1),
      [Ke, Nt] = l.useState(null),
      [bt, ns] = l.useState(null),
      [Ge, Le] = l.useState(null),
      [_e, yt] = l.useState([]),
      [rt, ze] = l.useState(() => Ro()),
      [lt, it] = l.useState(!1),
      [Ht, is] = l.useState(() => Ro()),
      [os, as] = l.useState(!1),
      [vs, ts] = l.useState(!1),
      [ys, Vs] = l.useState(!1),
      [pt, qe] = l.useState(!1),
      [dt, xt] = l.useState(!1),
      [zt, ms] = l.useState(!1),
      [Cs, us] = l.useState(null),
      [Rs, Rt] = l.useState(() => Ro()),
      [Es, nn] = l.useState(!1),
      [Hs, cn] = l.useState(""),
      [fn, Rn, Qn] = Yn("settings_github_cloud_v1", {
        repo: "",
        token: "",
        branch: "main",
        scheduleEnabled: !1,
        scheduleTime: "03:00",
        lastScheduledBackupDay: "",
      });
    l.useEffect(() => {
      !Qn ||
        typeof window > "u" ||
        window.dispatchEvent(
          new CustomEvent("phone-github-cloud-config-changed"),
        );
    }, [Qn, fn.scheduleEnabled, fn.scheduleTime]);
    const ra = l.useId(),
      _a = l.useMemo(
        () => ({
          backupImport: `${ra}-backup-import`,
          avatar: `${ra}-avatar`,
          font: `${ra}-font`,
          appIcon: `${ra}-app-icon`,
          wallpaper: `${ra}-wallpaper`,
        }),
        [ra],
      ),
      [Ya, Fr] = l.useState(""),
      [kr, Oa] = l.useState(""),
      [ur, mi] = l.useState(""),
      [ti, pi] = l.useState(!1),
      [ii, Br] = l.useState(""),
      [kt, Tt] = l.useState(""),
      [Yt, de] = l.useState(""),
      Me = k5[s] || k5.en,
      et = l.useMemo(
        () =>
          [
            {
              id: "api",
              num: "01",
              title: Me.apiConfig,
              sub: "神经网络",
              icon: LL,
            },
            {
              id: "api_logs",
              num: "02",
              title: "API 日志",
              sub: "系统日志",
              icon: d3,
            },
            {
              id: "notifications",
              num: "03",
              title: Me.notifications,
              sub: "感知系统",
              icon: B0,
            },
            {
              id: "appearance",
              num: "04",
              title: Me.appearance,
              sub: "视觉皮层",
              icon: _o,
            },
            {
              id: "voice",
              num: "05",
              title: Me.voiceSettings,
              sub: "声带",
              icon: Ji,
            },
            {
              id: "data",
              num: "06",
              title: Me.dataMgmt,
              sub: "记忆库",
              icon: Wl,
            },
            {
              id: "language",
              num: "07",
              title: Me.language,
              sub: "语言中心",
              icon: H5,
            },
            ...(me
              ? [
                  {
                    id: "gatekeeper_account",
                    num: "08",
                    title: "访问与账号",
                    sub: "门禁与访问",
                    icon: lr,
                  },
                ]
              : []),
            {
              id: "disclaimer",
              num: me ? "09" : "08",
              title: "免责声明",
              sub: "法律与使用须知",
              icon: ro,
            },
          ].filter(Boolean),
        [Me, me],
      ),
      Ct = l.useMemo(() => {
        const Et = et.map((Us) => ({
            viewId: Us.id,
            title: Us.title,
            subtitle: Us.sub,
            breadcrumb: Us.title,
            keywords: [Us.sub, Us.id].filter(Boolean),
          })),
          Ms = [
            {
              viewId: "appearance-effects",
              title: Me.globalEffects,
              subtitle: "视觉皮层",
              breadcrumb: `${Me.appearance} · ${Me.globalEffects}`,
              keywords: ["全局效果", "效果", "天气", "css", "雪花", "雨"],
            },
            {
              viewId: "appearance-fonts",
              title: Me.fonts,
              subtitle: "视觉皮层",
              breadcrumb: `${Me.appearance} · ${Me.fonts}`,
              keywords: ["字体", "排版", "字号"],
            },
            {
              viewId: "appearance-apps",
              title: Me.appCustomization,
              subtitle: "视觉皮层",
              breadcrumb: `${Me.appearance} · ${Me.appCustomization}`,
              keywords: ["应用布局", "图标", "桌面", "布局"],
            },
            {
              viewId: "appearance-wallpaper",
              title: Me.wallpaper,
              subtitle: "视觉皮层",
              breadcrumb: `${Me.appearance} · ${Me.wallpaper}`,
              keywords: ["壁纸", "背景", "桌面背景"],
            },
            {
              viewId: "appearance-system",
              title: Me.systemUI,
              subtitle: "视觉皮层",
              breadcrumb: `${Me.appearance} · ${Me.systemUI}`,
              keywords: ["系统界面", "状态栏", "灵动岛", "底部横条"],
            },
            {
              viewId: "appearance-colors",
              title: Me.colors,
              subtitle: "视觉皮层",
              breadcrumb: `${Me.appearance} · ${Me.colors}`,
              keywords: ["主题色", "颜色", "配色"],
            },
          ];
        return [...Et, ...Ms];
      }, [et, Me]),
      Dt = l.useMemo(() => {
        const Et = at.trim().toLowerCase();
        return Et
          ? Ct.filter(
              (Ms) =>
                Ms.title.toLowerCase().includes(Et) ||
                Ms.subtitle.toLowerCase().includes(Et) ||
                Ms.breadcrumb.toLowerCase().includes(Et) ||
                Ms.keywords.some((Us) => Us && Us.toLowerCase().includes(Et)),
            )
          : [];
      }, [at, Ct]);
    (l.useEffect(() => Wz(_t), []),
      l.useEffect(() => {
        (async () => {
          const Ms = await be.get("device_id");
          Ms && fe(Ms);
        })();
      }, []));
    const Mt = (Et) => {
        (Pe(Et), DS(Et));
      },
      Ut = () => {
        H
          ? U(Me.testNotificationTitle, Me.testNotificationBody)
          : alert(Me.notificationPermissionDenied);
      },
      ws = (Et) => {
        if (!Et) return null;
        const Ms =
          Et.data && Array.isArray(Et.data)
            ? Et.data
            : Array.isArray(Et)
              ? Et
              : null;
        return !Ms || !Ms.length
          ? null
          : Ms.map((Us) =>
              typeof Us == "string" ? Us : (Us.id ?? Us.model ?? Us.name),
            ).filter(Boolean);
      },
      Ls = 15e3,
      Ot = async ({
        endpoint: Et,
        key: Ms,
        setLoading: Us,
        setSuccessMessage: bn,
        currentModels: en,
        setModelList: wn,
      }) => {
        if (!Et || !Ms) return;
        Us(!0);
        const Gn = async (Mn, la) => {
          const Va = await fetch(Mn, {
            headers: { Authorization: `Bearer ${Ms}` },
            signal: la,
          });
          if (!Va.ok) return { ok: !1, status: Va.status, res: Va };
          const za = await Va.json();
          return { ok: !0, parsed: ws(za), res: Va };
        };
        try {
          for (let Mn = 0; Mn <= 1; Mn++) {
            const la = new AbortController(),
              Va = setTimeout(() => la.abort(), Ls);
            try {
              let za = T$(Et);
              if (!za) break;
              let ga = await Gn(za, la.signal);
              if (ga.ok) {
                (clearTimeout(Va),
                  ga.parsed && ga.parsed.length > 0
                    ? (wn(ga.parsed),
                      bn(`已成功获取 ${ga.parsed.length} 个模型`),
                      setTimeout(() => bn(null), 4e3))
                    : en.length === 0 &&
                      (wn(["gpt-4", "gpt-3.5-turbo", "claude-3-opus"]),
                      bn("已加载默认模型列表"),
                      setTimeout(() => bn(null), 4e3)));
                return;
              }
              if (
                ga.status === 404 &&
                Mn === 0 &&
                (clearTimeout(Va),
                Yh(Et) && ((ga = await Gn(I$(Et), la.signal)), ga.ok))
              ) {
                ga.parsed && ga.parsed.length > 0
                  ? (wn(ga.parsed),
                    bn(`已成功获取 ${ga.parsed.length} 个模型`),
                    setTimeout(() => bn(null), 4e3))
                  : en.length === 0 &&
                    (wn(["gpt-4", "gpt-3.5-turbo", "claude-3-opus"]),
                    bn("已加载默认模型列表"),
                    setTimeout(() => bn(null), 4e3));
                return;
              }
              throw (
                clearTimeout(Va),
                new Error(
                  ga.res
                    ? `HTTP ${ga.status} ${ga.res.statusText}`
                    : "请求失败",
                )
              );
            } catch (za) {
              clearTimeout(Va);
              const ga = (za == null ? void 0 : za.name) === "AbortError";
              if (
                (ga || (za == null ? void 0 : za.name) === "TypeError") &&
                Mn < 1
              ) {
                await new Promise((Yr) => setTimeout(Yr, 1200));
                continue;
              }
              const oi = ga
                ? "请求超时，请检查网络或 API 地址"
                : ((za == null ? void 0 : za.message) ?? String(za));
              (alert(`获取模型列表失败: ${oi}
您可以直接手动输入模型 ID。`),
                en.length === 0 &&
                  wn(["gpt-4", "gpt-3.5-turbo", "claude-3-opus"]));
              return;
            }
          }
          en.length === 0 && wn(["gpt-4", "gpt-3.5-turbo", "claude-3-opus"]);
        } finally {
          Us(!1);
        }
      },
      rs = async () =>
        Ot({
          endpoint: V.endpoint,
          key: V.key,
          setLoading: Kt,
          setSuccessMessage: nt,
          currentModels: jt,
          setModelList: Gt,
        }),
      gs = async () =>
        Ot({
          endpoint: V.backupEndpoint,
          key: (V.backupKey || V.key || "").trim(),
          setLoading: gt,
          setSuccessMessage: Xt,
          currentModels: Pt,
          setModelList: Wt,
        }),
      ps = 45e3,
      Is = async ({
        endpoint: Et,
        key: Ms,
        model: Us,
        setTesting: bn,
        setStatus: en,
        setError: wn,
        setSuccessMessage: Gn,
        successLabel: Mn = "连接成功，聊天接口响应正常",
      }) => {
        var ga, fr, oi, Yr;
        if (!Et || !Ms) return;
        (bn(!0), en(null), wn(null), Gn(null));
        const la = new AbortController(),
          Va = setTimeout(() => la.abort(), ps),
          za = Qo(Et);
        if (!za) {
          (en("failed"), wn("API 地址无效"), bn(!1));
          return;
        }
        try {
          const Tr = await fetch(za, {
            method: "POST",
            signal: la.signal,
            headers: {
              Authorization: `Bearer ${Ms}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: Us || "gpt-3.5-turbo",
              messages: [{ role: "user", content: "Hi" }],
              max_tokens: 10,
            }),
          });
          clearTimeout(Va);
          const Io = await Tr.text();
          let rr;
          try {
            rr = Io ? JSON.parse(Io) : null;
          } catch {
            (en("failed"), wn(`HTTP ${Tr.status}，响应不是合法 JSON`), bn(!1));
            return;
          }
          if (!Tr.ok) {
            const al =
              ((ga = rr == null ? void 0 : rr.error) == null
                ? void 0
                : ga.message) ||
              (rr == null ? void 0 : rr.message) ||
              (rr == null ? void 0 : rr.error) ||
              (Io == null ? void 0 : Io.slice(0, 200)) ||
              `${Tr.status} ${Tr.statusText}`;
            (en("failed"), wn(al), bn(!1));
            return;
          }
          if (rr != null && rr.error) {
            (en("failed"),
              wn(rr.error.message || rr.error.code || JSON.stringify(rr.error)),
              bn(!1));
            return;
          }
          if (
            ((Yr =
              (oi =
                (fr = rr == null ? void 0 : rr.choices) == null
                  ? void 0
                  : fr[0]) == null
                ? void 0
                : oi.message) == null
              ? void 0
              : Yr.content) === void 0 &&
            !Array.isArray(rr == null ? void 0 : rr.choices)
          ) {
            (en("failed"), wn("接口返回格式异常，缺少 choices"), bn(!1));
            return;
          }
          (en("success"), wn(null), Gn(Mn));
        } catch (Tr) {
          if ((clearTimeout(Va), en("failed"), Tr.name === "AbortError"))
            wn(`请求超时（${ps / 1e3} 秒），若接口较慢可稍后重试`);
          else {
            const Io = (Tr == null ? void 0 : Tr.message) ?? String(Tr);
            wn(Io || "网络错误（如 CORS、证书或无法连接）");
          }
        } finally {
          bn(!1);
        }
      },
      As = async () =>
        Is({
          endpoint: V.endpoint,
          key: V.key,
          model: V.model,
          setTesting: ss,
          setStatus: Js,
          setError: ln,
          setSuccessMessage: ot,
          successLabel: "主 API 站连接成功",
        }),
      Ks = async () =>
        Is({
          endpoint: V.backupEndpoint,
          key: (V.backupKey || V.key || "").trim(),
          model: V.backupModel || V.model,
          setTesting: qs,
          setStatus: gn,
          setError: wt,
          setSuccessMessage: $t,
          successLabel: "备用 API 站连接成功",
        }),
      on = () => {
        Ft && (je([...X, { name: Ft, config: { ...V } }]), es(""));
      },
      tn = (Et) => {
        ne(Et.config);
      },
      dn = (Et) => {
        const Ms = [...X];
        (Ms.splice(Et, 1), je(Ms));
      },
      yn = () => {
        const Et = Yt.trim();
        Et && (_([...w, { name: Et, config: { ...a, fontSize: b } }]), de(""));
      },
      va = (Et) => {
        const Ms = [...w];
        (Ms.splice(Et, 1), _(Ms));
      },
      Bn = (Et) => {
        const Ms = (Et == null ? void 0 : Et.config) || {},
          Us = Ms.fontSize,
          { fontSize: bn, ...en } = Ms;
        (en.type === "custom" && en.url
          ? (r({ type: "custom", url: en.url }), Br(en.url))
          : (r({ type: "default" }), Br("")),
          typeof Us == "number" && !Number.isNaN(Us) && N(Us));
      },
      Ea = async () => {
        if (!Object.values(Ht).some(Boolean)) {
          alert("请至少勾选一个要导出的分区");
          return;
        }
        const Et = w0() ? window.open("about:blank", "_blank") : null;
        as(!0);
        try {
          const Ms = await m2(),
            Us = t6(Ms, Ht),
            bn = new Blob([tp(Us, 2)], { type: "application/json" }),
            en = `full-backup-${new Date().toISOString().slice(0, 10)}.json`;
          (ym(bn, en, { iosBlankWindow: Et }), it(!1));
        } catch (Ms) {
          (Et && !Et.closed && Et.close(),
            alert(
              "导出失败：" + ((Ms == null ? void 0 : Ms.message) || String(Ms)),
            ));
        } finally {
          as(!1);
        }
      },
      Fn = async () => {
        if (!Object.values(Ht).some(Boolean)) {
          alert("请至少勾选一个要导出的分区");
          return;
        }
        const Et = w0() ? window.open("about:blank", "_blank") : null;
        as(!0);
        try {
          const Ms = await D1(Ht),
            Us = `full-backup-${new Date().toISOString().slice(0, 10)}.zip`;
          (ym(Ms, Us, { iosBlankWindow: Et }), it(!1));
        } catch (Ms) {
          (Et && !Et.closed && Et.close(),
            alert(
              "导出失败：" + ((Ms == null ? void 0 : Ms.message) || String(Ms)),
            ));
        } finally {
          as(!1);
        }
      },
      ha = async () => {
        const Et = w0() ? window.open("about:blank", "_blank") : null;
        as(!0);
        try {
          const Ms = {
              phone_wallpaper: await be.get("phone_wallpaper", ""),
              phone_layout_items: await be.get("phone_layout_items", null),
              phone_layout_items_cyber_zen_v9: await be.get(
                "phone_layout_items_cyber_zen_v9",
                null,
              ),
              phone_widgetData: await be.get("phone_widgetData", {}),
              phone_appCustomizations: await be.get(
                "phone_appCustomizations",
                {},
              ),
              phone_uiStyle: await be.get("phone_uiStyle", "cyber-zen"),
              exportedAt: new Date().toISOString(),
            },
            Us = new Blob([tp(Ms, 2)], { type: "application/json" }),
            bn = `desktop-wallpaper-widgets-${new Date().toISOString().slice(0, 10)}.json`;
          ym(Us, bn, { iosBlankWindow: Et });
        } catch (Ms) {
          (Et && !Et.closed && Et.close(),
            alert(
              "导出失败：" + ((Ms == null ? void 0 : Ms.message) || String(Ms)),
            ));
        } finally {
          as(!1);
        }
      },
      Cr = () => {
        (Nt(null), ns(null), Le(null), yt([]), ze(Ro()));
      },
      hr = async (Et, Ms, Us) => {
        if (ise(Et)) return;
        if (Et === mp) {
          if (!Us.chat_audio) return;
          try {
            const en = Ms,
              wn = Array.isArray(en == null ? void 0 : en.items)
                ? en.items
                : [];
            if (wn.length) {
              const { saveAudio: Gn } = await Dd(
                async () => {
                  const { saveAudio: Mn } = await Promise.resolve().then(
                    () => Rd,
                  );
                  return { saveAudio: Mn };
                },
                void 0,
              );
              for (const Mn of wn) {
                if (!Mn || !Mn.key || !Mn.base64) continue;
                const la = rse(Mn.base64),
                  Va = new Blob([la], { type: Mn.type || "audio/mpeg" });
                await Gn(String(Mn.key), Va);
              }
            }
          } catch {}
          return;
        }
        if (Et === mg) {
          if (!Us.chat_single_prompt) return;
          try {
            const en = Ms,
              wn = Array.isArray(en == null ? void 0 : en.rows) ? en.rows : [];
            if (typeof indexedDB < "u") {
              const Gn = "july-ovo-single-custom-prompt-presets",
                la = "presets",
                Va = await new Promise((za, ga) => {
                  const fr = indexedDB.open(Gn, 1);
                  ((fr.onerror = () => ga(fr.error)),
                    (fr.onsuccess = () => za(fr.result)),
                    (fr.onupgradeneeded = (oi) => {
                      const Yr = oi.target.result;
                      Yr.objectStoreNames.contains(la) ||
                        Yr.createObjectStore(la, { keyPath: "id" });
                    }));
                });
              await new Promise((za, ga) => {
                const fr = Va.transaction(la, "readwrite"),
                  oi = fr.objectStore(la);
                for (const Yr of wn) !Yr || Yr.id == null || oi.put(Yr);
                ((fr.oncomplete = () => za()),
                  (fr.onerror = () => ga(fr.error)));
              });
            }
          } catch {}
          return;
        }
        if (Et === "__localStorage_app_patch__") {
          const en = Ms;
          if (
            typeof en == "object" &&
            en &&
            typeof window < "u" &&
            window.localStorage
          )
            for (const [wn, Gn] of Object.entries(en)) {
              if (Gn == null) continue;
              const Mn = e6(wn);
              if (!(!Mn || !Us[Mn]))
                try {
                  localStorage.setItem(wn, String(Gn));
                } catch {}
            }
          return;
        }
        if (Et === "mail_app_db_settings") {
          if (!Us.mail) return;
          const en = Ms;
          if (Array.isArray(en))
            for (const wn of en) await Sa(wn.key, wn.value);
          return;
        }
        if (Et === "mail_app_db_files") {
          if (!Us.mail) return;
          const en = Ms;
          if (Array.isArray(en)) for (const wn of en) await jh(wn.id, wn.file);
          return;
        }
        const bn = XC(Et);
        !bn || !Us[bn] || (await be.set(Et, Ms));
      },
      ar = (Et) => {
        var bn;
        const Ms = Et.target,
          Us = (bn = Ms.files) == null ? void 0 : bn[0];
        if (!Us) {
          Ms.value = "";
          return;
        }
        (async () => {
          try {
            let wn =
              Us.name.toLowerCase().endsWith(".zip") ||
              Us.type === "application/zip" ||
              Us.type === "application/x-zip-compressed";
            if (!wn && typeof Us.size == "number" && Us.size >= 2)
              try {
                const Mn = new Uint8Array(await Us.slice(0, 4).arrayBuffer());
                Mn[0] === 80 && Mn[1] === 75 && (wn = !0);
              } catch {}
            if (wn) {
              const Mn = await Us.arrayBuffer(),
                la = await fp.loadAsync(Mn),
                Va = la.file("manifest.json");
              if (!Va) {
                alert("无效的 ZIP 备份：缺少 manifest.json");
                return;
              }
              const za = JSON.parse(await Va.async("string"));
              if (za.format !== L1 || !Array.isArray(za.keys)) {
                alert("无效的 ZIP 备份：格式不匹配或缺少 keys");
                return;
              }
              const ga = za.keys;
              for (let fr = 0; fr < ga.length; fr++)
                if (!la.file(`entries/${String(fr).padStart(6, "0")}.json`)) {
                  alert(
                    `ZIP 备份不完整：缺少 entries/${String(fr).padStart(6, "0")}.json`,
                  );
                  return;
                }
              (Le(la), yt(ga), ns("zip"), Nt(null), ze(Ro()), Be(!0));
              return;
            }
            const Gn = new FileReader();
            ((Gn.onload = (Mn) => {
              try {
                const la = JSON.parse(Mn.target.result);
                (Le(null), yt([]), ns("json"), Nt(la), ze(Ro()), Be(!0));
              } catch {
                alert("无法解析备份文件，请确认是有效的 JSON");
              }
            }),
              (Gn.onerror = () => alert("读取文件失败")),
              Gn.readAsText(Us));
          } catch {
            alert("导入预处理失败，请重试或使用 JSON 单文件备份");
          } finally {
            Ms.value = "";
          }
        })();
      },
      zs = async () => {
        if (!Object.values(rt).some(Boolean)) {
          alert("请至少勾选一个要导入的分区");
          return;
        }
        Vs(!0);
        try {
          if (bt === "zip" && Ge && _e.length)
            try {
              for (let Et = 0; Et < _e.length; Et++) {
                const Ms = _e[Et],
                  Us = Ge.file(`entries/${String(Et).padStart(6, "0")}.json`);
                if (!Us) continue;
                const bn = await Us.async("string"),
                  en = JSON.parse(bn);
                await hr(Ms, en, rt);
              }
            } catch (Et) {
              alert(
                "ZIP 导入失败：" +
                  ((Et == null ? void 0 : Et.message) || String(Et)),
              );
              return;
            }
          else if (bt === "json" && Ke)
            for (const Et of Object.keys(Ke)) await hr(Et, Ke[Et], rt);
          else return;
          (alert(`Import successful. The app will reload.
门禁与设备识别键已自动跳过，避免账号与设备错配。`),
            Cr(),
            Be(!1),
            window.location.reload());
        } finally {
          Vs(!1);
        }
      },
      En = async () => {
        var Et, Ms;
        if (
          !((Et = fn == null ? void 0 : fn.repo) != null && Et.trim()) ||
          !((Ms = fn == null ? void 0 : fn.token) != null && Ms.trim())
        ) {
          alert("请填写仓库 owner/repo 与 Token");
          return;
        }
        nn(!0);
        try {
          const { owner: Us, repo: bn } = z0(fn.repo);
          (await $te(Us, bn, fn.token.trim()), alert("连接成功：可访问该仓库"));
        } catch (Us) {
          alert(
            "连接失败：" + ((Us == null ? void 0 : Us.message) || String(Us)),
          );
        } finally {
          nn(!1);
        }
      },
      Vn = async () => {
        var en, wn;
        if (
          !((en = fn == null ? void 0 : fn.repo) != null && en.trim()) ||
          !((wn = fn == null ? void 0 : fn.token) != null && wn.trim())
        ) {
          alert("请填写仓库 owner/repo 与 Token");
          return;
        }
        if (!Object.values(Rs).some(Boolean)) {
          alert("请至少勾选一个要备份的分区");
          return;
        }
        let Et, Ms;
        try {
          ({ owner: Et, repo: Ms } = z0(fn.repo));
        } catch (Gn) {
          alert((Gn == null ? void 0 : Gn.message) || String(Gn));
          return;
        }
        const Us = fn.token.trim(),
          bn = (fn.branch || "main").trim() || "main";
        (nn(!0), cn("正在打包…"));
        try {
          const Gn = await D1(Rs);
          (cn("正在分块上传…"),
            await u6({
              owner: Et,
              repo: Ms,
              branch: bn,
              token: Us,
              zipBlob: Gn,
              onProgress: ({ phase: Mn, current: la, total: Va }) => {
                cn(
                  Mn === "part"
                    ? `上传分块 ${la}/${Va}`
                    : Mn === "manifest"
                      ? "写入 manifest…"
                      : "更新 latest 指针…",
                );
              },
            }),
            alert("已上传到 GitHub（私有仓 phone-cloud-backups 目录）"),
            qe(!1));
        } catch (Gn) {
          alert(
            "上传失败：" + ((Gn == null ? void 0 : Gn.message) || String(Gn)),
          );
        } finally {
          (nn(!1), cn(""));
        }
      },
      sa = async (Et) => {
        const Ms = await Et.arrayBuffer(),
          Us = await fp.loadAsync(Ms),
          bn = Us.file("manifest.json");
        if (!bn) {
          alert("无效的 ZIP 备份：缺少 manifest.json");
          return;
        }
        const en = JSON.parse(await bn.async("string"));
        if (en.format !== L1 || !Array.isArray(en.keys)) {
          alert("无效的 ZIP 备份：格式不匹配或缺少 keys");
          return;
        }
        const wn = en.keys;
        for (let Gn = 0; Gn < wn.length; Gn++)
          if (!Us.file(`entries/${String(Gn).padStart(6, "0")}.json`)) {
            alert(
              `ZIP 备份不完整：缺少 entries/${String(Gn).padStart(6, "0")}.json`,
            );
            return;
          }
        (Le(Us), yt(wn), ns("zip"), Nt(null), ze(Ro()), qe(!1), Be(!0));
      },
      wa = () => {
        var Et, Ms;
        if (
          !((Et = fn == null ? void 0 : fn.repo) != null && Et.trim()) ||
          !((Ms = fn == null ? void 0 : fn.token) != null && Ms.trim())
        ) {
          alert("请填写仓库 owner/repo 与 Token");
          return;
        }
        try {
          const { owner: Us, repo: bn } = z0(fn.repo),
            en = fn.token.trim(),
            wn = (fn.branch || "main").trim() || "main";
          (us({ owner: Us, repo: bn, branch: wn, token: en }), ms(!0));
        } catch (Us) {
          alert((Us == null ? void 0 : Us.message) || String(Us));
        }
      },
      ia = async (Et) => {
        if (!Cs || !Et) return;
        const { owner: Ms, repo: Us, branch: bn, token: en } = Cs;
        (ms(!1), us(null), nn(!0), cn("正在从 GitHub 下载…"));
        try {
          const wn = await Ute({
            owner: Ms,
            repo: Us,
            branch: bn,
            token: en,
            manifestPath: Et,
            onProgress: ({ current: Gn, total: Mn }) => {
              cn(`下载分块 ${Gn}/${Mn}`);
            },
          });
          await sa(wn);
        } catch (wn) {
          alert(
            "从 GitHub 拉取失败：" +
              ((wn == null ? void 0 : wn.message) || String(wn)),
          );
        } finally {
          (nn(!1), cn(""));
        }
      },
      oa = (Et, Ms) => {
        const Us = Xee(),
          bn = Us.every((Mn) => !!Et[Mn]),
          en = Us.every((Mn) => !Et[Mn]),
          wn = Us.every((Mn) => !!Et[Mn] === m5.includes(Mn)),
          Gn = (Mn) =>
            nr(
              "flex min-h-[2.5rem] flex-col items-center justify-center rounded-sm border px-1 py-1.5 text-center font-medium leading-tight transition-colors active:scale-[0.98]",
              Mn
                ? "border-gray-900 bg-gray-900 text-white hover:bg-gray-800 hover:border-gray-800"
                : "border-gray-200 bg-white text-gray-800 hover:border-gray-900 hover:bg-gray-50",
            );
        return e.jsxs("div", {
          className:
            "space-y-5 max-h-[min(52vh,420px)] overflow-y-auto pr-1 text-left",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-3 gap-1.5",
              children: [
                e.jsx("button", {
                  type: "button",
                  className: nr(Gn(bn), "text-[0.833333rem]"),
                  onClick: () => Ms(Ro()),
                  children: "全选",
                }),
                e.jsx("button", {
                  type: "button",
                  className: nr(Gn(en), "text-[0.833333rem]"),
                  onClick: () =>
                    Ms(Object.fromEntries(Us.map((Mn) => [Mn, !1]))),
                  children: "全不选",
                }),
                e.jsxs("button", {
                  type: "button",
                  className: nr(Gn(wn), "text-[0.75rem]"),
                  onClick: () => {
                    const Mn = {};
                    for (const la of Us) Mn[la] = m5.includes(la);
                    Ms(Mn);
                  },
                  children: [
                    e.jsx("span", { className: "block", children: "仅聊天" }),
                    e.jsx("span", {
                      className: nr(
                        "mt-px block text-[0.666667rem] font-normal leading-tight",
                        wn ? "text-gray-400" : "text-gray-500",
                      ),
                      children: "含各细分项",
                    }),
                  ],
                }),
              ],
            }),
            pg.map((Mn) =>
              e.jsxs(
                "div",
                {
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[0.833333rem] font-semibold text-gray-400 uppercase tracking-wider mb-2",
                      children: Mn.title,
                    }),
                    e.jsx("div", {
                      className: "space-y-2",
                      children: Mn.sections.map(
                        ({ id: la, label: Va, hint: za }) =>
                          e.jsxs(
                            "label",
                            {
                              className:
                                "flex items-start gap-3 p-3 border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors rounded-lg",
                              children: [
                                e.jsx("div", {
                                  className: nr(
                                    "w-5 h-5 shrink-0 mt-0.5 border border-gray-300 flex items-center justify-center transition-colors",
                                    Et[la]
                                      ? "bg-gray-900 border-gray-900"
                                      : "bg-white",
                                  ),
                                  children:
                                    Et[la] &&
                                    e.jsx(On, {
                                      size: 12,
                                      className: "text-white",
                                    }),
                                }),
                                e.jsx("input", {
                                  type: "checkbox",
                                  checked: !!Et[la],
                                  onChange: (ga) =>
                                    Ms({ ...Et, [la]: ga.target.checked }),
                                  className: "hidden",
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "font-serif italic text-gray-900 text-sm",
                                      children: Va,
                                    }),
                                    za
                                      ? e.jsx("div", {
                                          className:
                                            "text-[0.916667rem] text-gray-500 mt-0.5 leading-relaxed",
                                          children: za,
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            },
                            la,
                          ),
                      ),
                    }),
                  ],
                },
                Mn.id,
              ),
            ),
          ],
        });
      },
      La = async () => {
        Jt(!1);
        try {
          (ee == null || ee(), await Qte({ preserveGatekeeper: Vt }));
        } catch (Et) {
          (Jt(!0),
            alert(
              `重置失败：${(Et == null ? void 0 : Et.message) || String(Et)}`,
            ));
        }
      },
      [Zn, ja] = l.useState(!1),
      Ei = async () => {
        if (
          !Zn &&
          window.confirm(
            "确定要重置「遇见」聊天页面样式吗？这不会删除聊天内容。",
          )
        ) {
          ja(!0);
          try {
            const Et = "meet_app_settings",
              Ms = await be.get(Et, {}),
              Us = Ms && typeof Ms == "object" ? Ms : {},
              bn = {};
            for (const [en, wn] of Object.entries(Us)) {
              const Gn = wn && typeof wn == "object" ? wn : {};
              bn[en] = {
                ...Gn,
                backgroundImage: null,
                backgroundBlur: 0,
                overlayOpacity: 0.5,
                fontSize: 18,
                customFontUrl: "",
                enableCustomCSS: !1,
                customCSS: "",
                activePresetId: "default",
              };
            }
            (await be.set(Et, bn), alert("已重置「遇见」聊天页面样式。"));
          } catch {
            alert("重置失败，请重试。");
          } finally {
            ja(!1);
          }
        }
      },
      Li = l.useMemo(() => {
        const Et = new Map(($e || []).map((en) => [String(en.id), en])),
          Ms = new Set();
        (Fe || []).forEach((en) => {
          !en ||
            en.isGroup ||
            en.contactId == null ||
            String(en.contactId).trim() === "" ||
            Ms.add(String(en.contactId));
        });
        const Us = Array.from(Ms)
            .map((en) => Et.get(en))
            .filter(Boolean),
          bn = (en) => en.remark || en.nickname || en.name || "";
        return (Us.sort((en, wn) => bn(en).localeCompare(bn(wn))), Us);
      }, [$e, Fe]),
      Ba = (Et) =>
        (Et == null ? void 0 : Et.remark) ||
        (Et == null ? void 0 : Et.nickname) ||
        (Et == null ? void 0 : Et.name) ||
        "未命名",
      Mr = () => {
        const Et = (Fe || []).find(
          (Ms) => (Ms == null ? void 0 : Ms.id) === Xe,
        );
        (cs((Et == null ? void 0 : Et.contactId) ?? null), Qt(!0));
      },
      Nn = async () => {
        if (!js) {
          alert("请先选择要重置的联系人。");
          return;
        }
        Je(!0);
        try {
          const Et = String(js),
            Ms = (Fe || []).filter(
              (Us) =>
                Us &&
                !Us.isGroup &&
                Us.contactId != null &&
                String(Us.contactId) === Et,
            );
          if (Ms.length === 0) {
            alert("未找到该联系人的聊天窗口（可能尚未创建会话）。");
            return;
          }
          (Ms.forEach((Us) => {
            Us != null && Us.id && tt(Us.id, { activePresetId: "default" });
          }),
            Qt(!1));
        } finally {
          Je(!1);
        }
      },
      kn = async (Et, Ms, Us = {}) => {
        const bn = Et.target.files[0];
        if (bn)
          try {
            if (Us != null && Us.compressImageBeforeUse) {
              const en = await $r(bn, 1024, 0.82);
              Ms(en);
            } else {
              const en = new FileReader();
              ((en.onload = (wn) => Ms(wn.target.result)),
                en.readAsDataURL(bn));
            }
          } finally {
            Et != null && Et.target && (Et.target.value = "");
          }
      },
      Ln = (Et) => {
        kn(Et, (Ms) => q({ ...K, avatar: Ms }));
      },
      ua = () => {
        const Et = prompt(Me.editName, K.name);
        Et && q({ ...K, name: Et });
      },
      fa = () => {
        ii && r({ type: "custom", url: ii });
      },
      Fa = () => {
        Ya && o({ ...i, [Ya]: { name: kr, iconUrl: ur, removeRounded: ti } });
      },
      gr = () => {
        kt && u(kt);
      },
      po = () =>
        e.jsxs(We.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "flex flex-col h-full",
          children: [
            e.jsx(hi, {
              showStatusBar: f,
              showPhoneCase: A,
              title: "设置",
              subtitle: "控制中心 · 第一卷",
              onClose: t,
            }),
            e.jsxs("div", {
              className: "flex-1 overflow-y-auto no-scrollbar pb-20",
              children: [
                e.jsx("div", {