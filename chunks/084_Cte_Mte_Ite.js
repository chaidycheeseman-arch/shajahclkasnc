              const xt = Array.isArray(dt) ? dt : [];
              for (const zt of xt) await jh(zt.id, zt.file);
              continue;
            }
            if (qe === "__localStorage_app_patch__") {
              const xt = typeof dt == "object" && dt ? dt : {};
              for (const [zt, ms] of Object.entries(xt))
                if (!(ms == null || j5(zt)))
                  try {
                    localStorage.setItem(zt, String(ms));
                  } catch {}
              continue;
            }
            await be.set(qe, dt);
          }
      },
      it = async (pt) => {
        var dt, xt;
        const qe =
          (xt =
            (dt = pt == null ? void 0 : pt.target) == null
              ? void 0
              : dt.files) == null
            ? void 0
            : xt[0];
        if (qe && ((pt.target.value = ""), !ye)) {
          (R(!0), x(""));
          try {
            const zt = await qe.text(),
              ms = JSON.parse(zt);
            (await lt(ms),
              alert("导入成功，页面将刷新（已自动跳过门禁登录态与设备标识）。"),
              window.location.reload());
          } catch (zt) {
            x(
              `导入失败：${String((zt == null ? void 0 : zt.message) || zt || "未知错误")}`,
            );
          } finally {
            R(!1);
          }
        }
      },
      Ht = () => {
        var pt;
        (pt = xe.current) == null || pt.click();
      },
      is = () => {
        ye || ee(!0);
      },
      os = () => {
        ((ne.current = 0), n("unknown"), ce("login"), x(""));
      },
      as = () => {
        var xt, zt, ms, Cs;
        const pt = AM(),
          qe =
            typeof navigator < "u" &&
            !!((xt = navigator.serviceWorker) != null && xt.controller);
        let dt = !1;
        try {
          dt = !!(
            (ms =
              (zt = window.matchMedia) == null
                ? void 0
                : zt.call(window, "(display-mode: standalone)")) != null &&
            ms.matches
          );
        } catch {}
        return [
          `time=${new Date().toISOString()}`,
          `origin=${typeof location < "u" ? location.origin : ""}`,
          "channel=main",
          "VITE_DISABLE_PWA=",
          `standalone=${dt}`,
          `sw=${qe ? "controlled" : "none"}`,
          `idb has=${pt.hasIndexedDB} degraded_left_s=${pt.degradedSecondsLeft} open_timeout_ms=${pt.openTimeoutMs}`,
          `status=${s} authCap=${ie.current} disclaimer=${String(te)}`,
          `user=${((Cs = H == null ? void 0 : H.id) == null ? void 0 : Cs.slice(0, 8)) ?? "—"} device=${(r == null ? void 0 : r.slice(0, 8)) ?? "—"} slot=${(I == null ? void 0 : I.slice(0, 8)) ?? "—"}`,
          "--- log ---",
        ].join(`
`);
      },
      vs = vt
        ? e.jsxs("div", {
            className:
              "fixed bottom-0 left-0 right-0 z-[10020] max-h-[42vh] flex flex-col bg-slate-900 text-slate-100 shadow-[0_-4px_24px_rgba(0,0,0,0.35)] border-t border-slate-600",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-shrink-0 items-center justify-between gap-2 px-3 py-2 border-b border-slate-700 bg-slate-800/95",
                children: [
                  e.jsx("span", {
                    className: "text-xs font-medium text-slate-200",
                    children: "门禁诊断",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        className:
                          "rounded-lg bg-slate-600 px-2 py-1 text-[0.6875rem] text-white active:opacity-90",
                        onClick: () => {
                          var qe;
                          const pt = `${as()}
${at.join(`
`)}`;
                          (qe = navigator.clipboard) == null ||
                            qe.writeText(pt).then(
                              () => Ye("已复制诊断到剪贴板"),
                              () => Ye("复制失败（可长按文本框手动复制）"),
                            );
                        },
                        children: "复制全部",
                      }),
                      e.jsx("button", {
                        type: "button",
                        className:
                          "rounded-lg border border-slate-500 px-2 py-1 text-[0.6875rem] text-slate-200",
                        onClick: () => Oe(!1),
                        children: "收起",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "min-h-0 overflow-y-auto px-3 py-2 font-mono text-[0.625rem] leading-relaxed whitespace-pre-wrap break-all select-text",
                children: `${as()}
${at.join(`
`)}`,
              }),
              e.jsx("p", {
                className:
                  "flex-shrink-0 px-3 py-1.5 text-[0.625rem] text-slate-500 bg-slate-950/80 font-sans",
                children:
                  "地址后加 ?gate_diag=1 可常驻打开。日志含 [门禁·…] 各环节（登录/注册/设备满/选设备/RPC）；复制全部发给开发者即可对症排查。",
              }),
            ],
          })
        : null;
    if (s === "approved") {
      const pt = () => {
        (be.set(y5, !0), Se(!0));
      };
      return te === null
        ? e.jsx($1.Provider, {
            value: { revokeCurrentDevice: Le },
            children: e.jsxs("div", {
              className:
                "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFAFA] gap-3",
              children: [
                e.jsx(Sn, {
                  size: 28,
                  className: "animate-spin text-slate-400",
                }),
                e.jsx("p", {
                  className: "text-xs text-slate-400",
                  children: "加载中…",
                }),
                e.jsx("button", {
                  type: "button",
                  className:
                    "text-[0.6875rem] text-slate-400 underline underline-offset-2",
                  onClick: () => {
                    (Oe(!0), Ye("免责声明加载：用户打开诊断"));
                  },
                  children: "卡住？查看诊断",
                }),
                vs,
              ],
            }),
          })
        : e.jsxs($1.Provider, {
            value: { revokeCurrentDevice: Le },
            children: [
              te === !1 && e.jsx(dte, { onAgree: pt }),
              te === !0 ? t : null,
            ],
          });
    }
    const ts = Q != null && Q > 0 ? `${Q}px` : "100dvh",
      ys = { height: ts, minHeight: ts };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className:
            "fixed top-0 left-0 right-0 z-[9999] bg-[#FAFAFA] flex flex-col items-center justify-center font-sans text-slate-900 overflow-y-auto overflow-x-hidden p-0",
          style: ys,
          children: [
            e.jsxs(We.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              className:
                "w-full max-w-sm px-8 flex flex-col items-center text-center",
              children: [
                e.jsxs("div", {
                  className: "mb-8 p-5 bg-slate-50 rounded-full shadow-sm",
                  children: [
                    s === "loading" &&
                      e.jsx(Sn, {
                        size: 24,
                        className: "animate-spin text-slate-400",
                      }),
                    s === "error" &&
                      e.jsx(gp, {
                        size: 24,
                        className: "text-amber-500",
                        strokeWidth: 1.5,
                      }),
                    s === "unknown" &&
                      e.jsx(lr, {
                        size: 24,
                        className: "text-slate-900",
                        strokeWidth: 1.5,
                      }),
                    s === "pending" &&
                      e.jsx(Dr, {
                        size: 24,
                        className: "text-amber-500",
                        strokeWidth: 1.5,
                      }),
                    s === "device_selection_required" &&
                      e.jsx(Ah, {
                        size: 24,
                        className: "text-slate-900",
                        strokeWidth: 1.5,
                      }),
                    (s === "rejected" ||
                      s === "revoked" ||
                      s === "banned" ||
                      s === "expired" ||
                      s === "device_blocked") &&
                      e.jsx(aT, {
                        size: 24,
                        className: "text-rose-500",
                        strokeWidth: 1.5,
                      }),
                  ],
                }),
                s === "loading" &&
                  e.jsxs("div", {
                    className: "mb-4 w-full max-w-sm space-y-1 px-2",
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-slate-500",
                        children: "正在验证门禁与设备…",
                      }),
                      e.jsx("button", {
                        type: "button",
                        className:
                          "text-[0.6875rem] text-slate-400 underline underline-offset-2",
                        onClick: () => {
                          (Oe(!0), Ye("用户点击：打开诊断（loading）"));
                        },
                        children: "长时间转圈？点这里查看诊断 / 复制日志",
                      }),
                    ],
                  }),
                e.jsxs(Os, {
                  mode: "wait",
                  children: [
                    s === "error" &&
                      e.jsxs(
                        We.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                          className: "w-full",
                          children: [
                            e.jsx("h1", {
                              className:
                                "text-2xl font-serif font-medium mb-3 tracking-tight text-slate-900",
                              children: "无法连接验证服务",
                            }),
                            e.jsx("p", {
                              className:
                                "text-slate-500 text-sm leading-relaxed mb-6",
                              children:
                                "请检查网络或稍后再试。若长时间如此，请确认部署环境已配置 Supabase 地址与密钥。",
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col gap-3",
                              children: [
                                e.jsx("button", {
                                  type: "button",
                                  onClick: Jt,
                                  disabled: ye,
                                  className:
                                    "w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition",
                                  children: "重试",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: is,
                                  disabled: ye,
                                  className:
                                    "text-xs text-slate-500 hover:text-slate-700 underline underline-offset-4 disabled:opacity-50",
                                  children: "数据导入/导出",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: os,
                                  className:
                                    "w-full border border-slate-200 text-slate-700 rounded-xl py-3 text-sm font-medium hover:bg-slate-50 transition",
                                  children: "返回登录界面",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: ns,
                                  className:
                                    "text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4",
                                  children: "重新登录（不清除本机数据）",
                                }),
                              ],
                            }),
                          ],
                        },
                        "gate-error",
                      ),
                    s === "unknown" &&
                      e.jsxs(
                        We.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                          className: "w-full",
                          children: [
                            e.jsx("h1", {
                              className:
                                "text-3xl font-serif font-medium mb-2 tracking-tight text-slate-900",
                              children: "Private Space",
                            }),
                            e.jsx("p", {
                              className:
                                "text-slate-400 text-xs mb-2 font-medium tracking-[0.2em] uppercase",
                              children: "Identity Verification",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-slate-500 text-xs mb-6 text-left leading-relaxed",
                              children: [
                                "请使用",
                                e.jsx("strong", {
                                  className: "text-slate-700",
                                  children: "已注册的邮箱与密码",
                                }),
                                "登录。新用户请向管理员索取激活码后，在下方「使用激活码注册」完成注册。",
                              ],
                            }),
                            y &&
                              e.jsxs("div", {
                                className:
                                  "mb-6 bg-amber-50 border border-amber-100 rounded-xl p-3 text-left flex items-start gap-3",
                                children: [
                                  e.jsx(V2, {
                                    size: 16,
                                    className:
                                      "text-amber-500 flex-shrink-0 mt-0.5",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-amber-800 leading-relaxed whitespace-pre-wrap",
                                    children: y,
                                  }),
                                ],
                              }),
                            U === "login" &&
                              e.jsxs("div", {
                                className: "w-full space-y-4 text-left",
                                children: [
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx(Ac, {
                                        size: 16,
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                      }),
                                      e.jsx("input", {
                                        type: "email",
                                        autoComplete: "email",
                                        value: W,
                                        onChange: (pt) => ue(pt.target.value),
                                        placeholder: "邮箱（如 QQ 邮箱）",
                                        className:
                                          "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx(lr, {
                                        size: 16,
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                      }),
                                      e.jsx("input", {
                                        type: "password",
                                        autoComplete: "current-password",
                                        value: re,
                                        onChange: (pt) => he(pt.target.value),
                                        placeholder: "密码",
                                        className:
                                          "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                                      }),
                                    ],
                                  }),
                                  g &&
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-rose-500 font-medium",
                                      children: g,
                                    }),
                                  e.jsxs("button", {
                                    type: "button",
                                    disabled: m || !W.trim() || !re,
                                    onClick: St,
                                    className:
                                      "w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                      m
                                        ? e.jsx(Sn, {
                                            size: 16,
                                            className: "animate-spin",
                                          })
                                        : e.jsx(NE, { size: 16 }),
                                      "登录",
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className: "text-center pt-1",
                                    children: e.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        (x(""), ke(!0));
                                      },
                                      className:
                                        "text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4 decoration-slate-300",
                                      children: "使用激活码注册新账号",
                                    }),
                                  }),
                                  e.jsx("p", {
                                    className: "text-center pt-0.5",
                                    children: e.jsx("button", {
                                      type: "button",
                                      onClick: () => {
                                        (x(""), se(!0));
                                      },
                                      className:
                                        "text-[0.6875rem] text-slate-400/80 hover:text-slate-600 transition-colors",
                                      children: "暂无激活码？申请协助",
                                    }),
                                  }),
                                ],
                              }),
                            U === "register" &&
                              e.jsxs("div", {
                                className: "w-full space-y-4 text-left",
                                children: [
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      (ce("login"), x(""));
                                    },
                                    className:
                                      "text-xs text-slate-400 hover:text-slate-600 mb-1",
                                    children: "← 返回登录",
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx(Ac, {
                                        size: 16,
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                      }),
                                      e.jsx("input", {
                                        type: "email",
                                        autoComplete: "email",
                                        value: W,
                                        onChange: (pt) => ue(pt.target.value),
                                        placeholder:
                                          "邮箱（用于登录，支持 QQ 邮箱）",
                                        className:
                                          "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [
                                      e.jsxs("div", {
                                        className: "relative",
                                        children: [
                                          e.jsx(wr, {
                                            size: 16,
                                            className:
                                              "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                          }),
                                          e.jsx("input", {
                                            type: "text",
                                            inputMode: "numeric",
                                            autoComplete: "username",
                                            value: G,
                                            onChange: (pt) =>
                                              we(pt.target.value),
                                            placeholder:
                                              "QQ 号（将作为门禁内展示名）",
                                            className:
                                              "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[0.6875rem] text-slate-400 leading-relaxed",
                                        children:
                                          "请填写真实 QQ 号，便于管理员核对；该号码会作为你在本站的展示标识。",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx(lr, {
                                        size: 16,
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                      }),
                                      e.jsx("input", {
                                        type: "password",
                                        autoComplete: "new-password",
                                        value: re,
                                        onChange: (pt) => he(pt.target.value),
                                        placeholder: "密码（至少 8 位）",
                                        className:
                                          "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx(lr, {
                                        size: 16,
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                      }),
                                      e.jsx("input", {
                                        type: "password",
                                        autoComplete: "new-password",
                                        value: ge,
                                        onChange: (pt) => J(pt.target.value),
                                        placeholder: "确认密码",
                                        className:
                                          "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx(J2, {
                                        size: 16,
                                        className:
                                          "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                                      }),
                                      e.jsx("input", {
                                        type: "text",
                                        autoComplete: "off",
                                        value: f,
                                        onChange: (pt) => p(pt.target.value),
                                        placeholder: "激活码（至少 8 位）",
                                        className:
                                          "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all uppercase tracking-wider",
                                      }),
                                    ],
                                  }),
                                  g &&
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-rose-500 font-medium",
                                      children: g,
                                    }),
                                  e.jsxs("button", {
                                    type: "button",
                                    disabled:
                                      m ||
                                      !W.trim() ||
                                      !G.trim() ||
                                      !re ||
                                      !f.trim(),
                                    onClick: Be,
                                    className:
                                      "w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: [
                                      m
                                        ? e.jsx(Sn, {
                                            size: 16,
                                            className: "animate-spin",
                                          })
                                        : e.jsx(J2, { size: 16 }),
                                      "注册并进入",
                                    ],
                                  }),
                                ],
                              }),
                            e.jsx("div", {
                              className: "mt-6 text-center",
                              children: e.jsx("button", {
                                type: "button",
                                onClick: is,
                                disabled: ye || m,
                                className:
                                  "text-xs text-slate-500 hover:text-slate-700 underline underline-offset-4 disabled:opacity-50",
                                children: "数据导入/导出",
                              }),
                            }),
                          ],
                        },
                        "apply-form",
                      ),
                    s === "pending" &&
                      e.jsxs(
                        We.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                          className: "w-full",
                          children: [
                            e.jsx("h1", {
                              className:
                                "text-2xl font-serif font-medium mb-4 tracking-tight",
                              children: "审核中",
                            }),
                            e.jsx("p", {
                              className:
                                "text-slate-400 text-sm leading-relaxed mb-8",
                              children: "请等待管理员验证你的身份。",
                            }),
                            y &&
                              e.jsxs("div", {
                                className:
                                  "mb-6 bg-amber-50 border border-amber-100 rounded-xl p-3 text-left flex items-start gap-3",
                                children: [
                                  e.jsx(V2, {
                                    size: 16,
                                    className:
                                      "text-amber-500 flex-shrink-0 mt-0.5",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-amber-800 leading-relaxed whitespace-pre-wrap",
                                    children: y,
                                  }),
                                ],
                              }),
                            e.jsxs("div", {
                              className:
                                "inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full mb-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-xs text-slate-500 font-mono tracking-wider",
                                  children: o,
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: Ge,
                              className:
                                "text-xs text-slate-400 hover:text-slate-600 underline decoration-slate-200 underline-offset-4 block mx-auto cursor-pointer touch-manipulation py-2",
                              children: "取消",
                            }),
                          ],
                        },
                        "pending",
                      ),
                    s === "device_selection_required" &&
                      e.jsxs(
                        We.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                          className: "w-full",
                          children: [
                            e.jsx("h1", {
                              className:
                                "text-2xl font-serif font-medium mb-4 tracking-tight text-slate-900",
                              children: "登录设备已满",
                            }),
                            e.jsx("p", {
                              className:
                                "text-slate-500 text-sm leading-relaxed mb-5",
                              children:
                                "当前账号最多同时登录 3 台设备。请选择要下线的一台设备，然后继续在本机登录。",
                            }),
                            e.jsxs("div", {
                              className:
                                "text-left space-y-2 mb-5 max-h-48 overflow-y-auto",
                              children: [
                                w.map((pt) =>
                                  e.jsxs(
                                    "label",
                                    {
                                      className:
                                        "flex items-start gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50",
                                      children: [
                                        e.jsx("input", {
                                          type: "radio",
                                          name: "replace-device",
                                          value: pt.id,
                                          checked: E === pt.id,
                                          onChange: () => S(pt.id),
                                          className: "mt-1",
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-sm text-slate-800 break-all",
                                              children: pt.title,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs text-slate-400 mt-1",
                                              children: [
                                                "设备ID: ",
                                                pt.id.slice(0, 12),
                                                "...",
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-slate-400 mt-1",
                                              children: xs(pt.lastActive),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    pt.id,
                                  ),
                                ),
                                w.length === 0 &&
                                  e.jsx("div", {
                                    className:
                                      "rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-500",
                                    children:
                                      "暂未读取到可替换设备列表。请先点下方“重新检测”，若仍失败请把错误信息发给管理员。",
                                  }),
                              ],
                            }),
                            g &&
                              e.jsx("p", {
                                className:
                                  "text-xs text-rose-500 font-medium mb-3",
                                children: g,
                              }),
                            e.jsxs("div", {
                              className: "flex flex-col gap-3",
                              children: [
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: qt,
                                  disabled: j || !E,
                                  className:
                                    "w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition disabled:opacity-50",
                                  children: [
                                    j
                                      ? e.jsx(Sn, {
                                          size: 16,
                                          className: "animate-spin inline",
                                        })
                                      : null,
                                    "确认替换并在本机登录",
                                  ],
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: Vt,
                                  disabled: j,
                                  className:
                                    "w-full border border-slate-200 text-slate-600 rounded-xl py-3 text-sm font-medium hover:bg-slate-50 transition disabled:opacity-50",
                                  children: "重新检测设备列表",
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: Lt,
                                  disabled: j,
                                  className:
                                    "text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4",
                                  children: "取消，返回登录页",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "mt-5 text-center",
                              children: e.jsx("button", {
                                type: "button",
                                onClick: is,
                                disabled: ye || j,
                                className:
                                  "text-xs text-slate-500 hover:text-slate-700 underline underline-offset-4 disabled:opacity-50",
                                children: "数据导入/导出",
                              }),
                            }),
                          ],
                        },
                        "device-selection",
                      ),
                    (s === "rejected" ||
                      s === "revoked" ||
                      s === "banned" ||
                      s === "expired" ||
                      s === "device_blocked") &&
                      e.jsxs(
                        We.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -10 },
                          className: "w-full",
                          children: [
                            e.jsx("h1", {
                              className:
                                "text-2xl font-serif font-medium mb-4 tracking-tight text-rose-500",
                              children:
                                s === "banned"
                                  ? "账号已封禁"
                                  : s === "expired"
                                    ? "访问已过期"
                                    : s === "revoked"
                                      ? "访问已撤销"
                                      : s === "device_blocked"
                                        ? "此设备无法访问"
                                        : "申请未通过",
                            }),
                            e.jsx("p", {
                              className: "text-slate-400 text-sm mb-4",
                              children:
                                s === "banned"
                                  ? "您的账号已被管理员封禁。"
                                  : s === "expired"
                                    ? "您的访问已过期。"
                                    : s === "revoked"
                                      ? "您的访问已被撤销。"
                                      : s === "device_blocked"
                                        ? "当前设备已被管理员从门禁列表中移除。"
                                        : "您的申请未被通过。",
                            }),
                            b
                              ? e.jsxs("div", {
                                  className:
                                    "mb-6 text-left bg-amber-50 border border-amber-100 rounded-xl p-3",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-amber-800 font-medium mb-1",
                                      children:
                                        s === "device_blocked"
                                          ? "说明："
                                          : "管理员理由：",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-amber-900 whitespace-pre-wrap",
                                      children: b,
                                    }),
                                  ],
                                })
                              : null,
                            s === "device_blocked" &&
                              e.jsxs("div", {
                                className: "flex flex-col gap-3 mb-4",
                                children: [
                                  e.jsxs("button", {
                                    type: "button",
                                    onClick: Vt,
                                    disabled: m,
                                    className:
                                      "w-full bg-slate-900 text-white rounded-xl py-3 text-sm font-medium hover:bg-slate-800 active:scale-[0.98] transition disabled:opacity-50",
                                    children: [
                                      m
                                        ? e.jsx(Sn, {
                                            size: 16,
                                            className: "animate-spin inline",
                                          })
                                        : null,
                                      "重新检测（管理员解除限制后）",
                                    ],
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: async () => {
                                      (await Wa.auth.signOut(),
                                        await _s(),
                                        n("unknown"),
                                        ce("login"));
                                    },
                                    className:
                                      "text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4",
                                    children: "退出登录",
                                  }),
                                ],
                              }),
                            s !== "banned" &&
                              s !== "device_blocked" &&
                              e.jsx("div", {
                                className:
                                  "flex flex-col items-center justify-center gap-4",
                                children: e.jsxs("div", {
                                  className:
                                    "flex flex-col sm:flex-row items-center gap-4",
                                  children: [
                                    e.jsxs("button", {
                                      type: "button",
                                      onClick: _e,
                                      disabled: m,
                                      className:
                                        "text-sm font-medium text-slate-900 border-b border-slate-900 pb-1 hover:opacity-70 transition-opacity cursor-pointer touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                      children: [
                                        m
                                          ? e.jsx(Sn, {
                                              size: 14,
                                              className: "animate-spin",
                                            })
                                          : null,
                                        "同一 ID 重新申请",
                                      ],
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: ns,
                                      className:
                                        "text-sm font-medium text-slate-400 border-b border-slate-300 pb-1 hover:text-slate-600 transition-opacity cursor-pointer touch-manipulation",
                                      children: "重新登录后再申请",
                                    }),
                                  ],
                                }),
                              }),
                            e.jsx("div", {
                              className: "mt-5 text-center",
                              children: e.jsx("button", {
                                type: "button",
                                onClick: is,
                                disabled: ye,
                                className:
                                  "text-xs text-slate-500 hover:text-slate-700 underline underline-offset-4 disabled:opacity-50",
                                children: "数据导入/导出",
                              }),
                            }),
                          ],
                        },
                        "rejected",
                      ),
                  ],
                }),
              ],
            }),
            e.jsx("input", {
              ref: xe,
              type: "file",
              accept: ".json,application/json",
              className: "hidden",
              onChange: (pt) => {
                it(pt);
              },
            }),
            oe &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[10001] flex items-center justify-center bg-black/20 p-4 backdrop-blur-sm",
                children: [
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "关闭",
                    className: "absolute inset-0",
                    onClick: () => ee(!1),
                  }),
                  e.jsxs("div", {
                    className:
                      "relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-xl",
                    children: [
                      e.jsx("h3", {
                        className: "text-base font-medium text-slate-900",
                        children: "数据导入/导出",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-2 text-xs text-slate-500 leading-relaxed",
                        children:
                          "仅处理业务数据，不包含登录态、设备标识与门禁状态。",
                      }),
                      e.jsxs("div", {
                        className: "mt-4 flex flex-col gap-3",
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            onClick: async () => {
                              (await ze(), ee(!1));
                            },
                            disabled: ye,
                            className:
                              "w-full border border-slate-200 text-slate-700 rounded-xl py-3 text-sm font-medium hover:bg-slate-50 transition disabled:opacity-50 flex items-center justify-center gap-2",
                            children: [
                              ye
                                ? e.jsx(Sn, {
                                    size: 14,
                                    className: "animate-spin",
                                  })
                                : e.jsx(Eu, { size: 14 }),
                              "导出数据",
                            ],
                          }),
                          e.jsxs("button", {
                            type: "button",
                            onClick: () => {
                              (Ht(), ee(!1));
                            },
                            disabled: ye,
                            className:
                              "w-full border border-slate-200 text-slate-700 rounded-xl py-3 text-sm font-medium hover:bg-slate-50 transition disabled:opacity-50 flex items-center justify-center gap-2",
                            children: [
                              ye
                                ? e.jsx(Sn, {
                                    size: 14,
                                    className: "animate-spin",
                                  })
                                : e.jsx(Ta, { size: 14 }),
                              "导入数据",
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => ee(!1),
                            className:
                              "text-xs text-slate-400 hover:text-slate-600 underline underline-offset-4",
                            children: "取消",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            Te &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[10000] flex items-center justify-center bg-black/10 p-4 backdrop-blur-md sm:p-6",
                children: [
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "关闭",
                    className: "absolute inset-0",
                    onClick: () => ke(!1),
                  }),
                  e.jsxs(We.div, {
                    initial: { scale: 0.96, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { type: "spring", stiffness: 260, damping: 26 },
                    className:
                      "relative z-10 w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl text-left",
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-medium text-slate-900 mb-3",
                        children: "注册前请确认",
                      }),
                      e.jsxs("p", {
                        className:
                          "text-sm text-slate-600 leading-relaxed mb-6",
                        children: [
                          "请",
                          e.jsx("strong", {
                            className: "text-slate-800",
                            children: "牢记",
                          }),
                          "你即将填写的",
                          e.jsx("strong", {
                            className: "text-slate-800",
                            children: "邮箱",
                          }),
                          "与",
                          e.jsx("strong", {
                            className: "text-slate-800",
                            children: "登录密码",
                          }),
                          "。后续进入本站均需使用同一邮箱与密码登录；若遗忘且无法自助验证，将无法正常使用账号。",
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-3",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: () => ke(!1),
                            className:
                              "w-full sm:w-auto rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50",
                            children: "取消",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => {
                              (ke(!1), ce("register"));
                            },
                            className:
                              "w-full sm:w-auto rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-slate-800",
                            children: "我已记住，继续注册",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            pe &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[10000] flex items-center justify-center bg-black/10 p-4 backdrop-blur-md sm:p-6",
                children: [
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "关闭",
                    className: "absolute inset-0",
                    onClick: () => se(!1),
                  }),
                  e.jsxs(We.div, {
                    initial: { scale: 0.96, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { type: "spring", stiffness: 260, damping: 26 },
                    className:
                      "relative z-10 w-full max-w-[360px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between border-b border-slate-100 px-4 py-3",
                        children: [
                          e.jsx("span", {
                            className: "text-sm font-medium text-slate-800",
                            children: "申请协助访问",
                          }),
                          e.jsx("button", {
                            type: "button",
                            "aria-label": "关闭",
                            onClick: () => se(!1),
                            className:
                              "flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700",
                            children: e.jsx(Ts, { size: 16, strokeWidth: 1.5 }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "max-h-[min(70vh,480px)] overflow-y-auto px-4 pb-4 pt-3 text-left",
                        children: [
                          Ve.length > 0 &&
                            e.jsxs("div", {
                              className:
                                "mb-4 bg-slate-50 border border-slate-100 rounded-xl p-3",
                              children: [
                                e.jsxs("p", {
                                  className:
                                    "text-xs text-slate-500 mb-1 flex items-center gap-1",
                                  children: [
                                    e.jsx(G1, { size: 12 }),
                                    "上次申请：以 ",
                                    Ve[0].name,
                                    " 于",
                                    " ",
                                    Ve[0].submittedAt
                                      ? new Date(
                                          Ve[0].submittedAt,
                                        ).toLocaleString()
                                      : "",
                                    " 提交",
                                  ],
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: bt,
                                  className:
                                    "text-xs text-slate-600 underline hover:text-slate-800",
                                  children: "用上次信息预填姓名与理由",
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "relative mb-3",
                            children: [
                              e.jsx(wr, {
                                size: 16,
                                className:
                                  "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",
                              }),
                              e.jsx("input", {
                                type: "search",
                                autoComplete: "off",
                                value: o,
                                onChange: (pt) => c(pt.target.value),
                                placeholder: "输入你的qq号加qq昵称",
                                className:
                                  "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "relative mb-3",
                            children: [
                              e.jsx(vu, {
                                size: 16,
                                className:
                                  "absolute left-3 top-3 text-slate-400",
                              }),
                              e.jsx("textarea", {
                                value: d,
                                onChange: (pt) => u(pt.target.value),
                                placeholder: "访问理由（如：新设备）",
                                className:
                                  "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all resize-none h-24",
                              }),
                            ],
                          }),
                          g &&
                            e.jsx("p", {
                              className:
                                "text-xs text-rose-500 font-medium mb-2",
                              children: g,
                            }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => $e(!0),
                            className:
                              "w-full border border-slate-200 bg-white text-slate-800 rounded-xl py-3 text-sm font-medium hover:bg-slate-50 active:scale-[0.98] transition-all",
                            children: "阅读说明并提交",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            Fe &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[10001] flex items-center justify-center bg-black/10 p-4 backdrop-blur-md sm:p-6",
                children: [
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "关闭",
                    className: "absolute inset-0",
                    onClick: () => $e(!1),
                  }),
                  e.jsxs(We.div, {
                    initial: { scale: 0.92, opacity: 0, rotateX: 8 },
                    animate: { scale: 1, opacity: 1, rotateX: 0 },
                    transition: { type: "spring", stiffness: 220, damping: 22 },
                    className:
                      "relative z-10 flex h-[min(88vh,620px)] w-full max-w-[360px] flex-col overflow-hidden rounded-[32px] border border-white/60 bg-[#FDFBF9] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]",
                    children: [
                      e.jsxs("div", {
                        className:
                          "pointer-events-none absolute inset-0 overflow-hidden",
                        children: [
                          e.jsx("div", {
                            className: "absolute inset-0 opacity-[0.03]",
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            },
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-20 -right-20 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-rose-200/35 to-orange-100/35 blur-3xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-36 -left-20 h-56 w-56 animate-pulse rounded-full bg-gradient-to-tr from-blue-200/25 to-purple-100/25 blur-3xl",
                            style: { animationDelay: "1.5s" },
                          }),
                          e.jsx("div", {
                            className:
                              "pointer-events-none absolute -bottom-6 -right-2 select-none font-serif text-[6.25rem] italic leading-none text-black/[0.04]",
                            children: "Gate",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        "aria-label": "关闭",
                        onClick: () => $e(!1),
                        className:
                          "absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/80 bg-white/70 text-gray-500 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-gray-800",
                        children: e.jsx(Ts, { size: 16, strokeWidth: 1.5 }),
                      }),
                      e.jsxs("div", {
                        ref: Ee,
                        className:
                          "relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-7 sm:px-8 sm:pt-8",
                        children: [
                          e.jsxs("div", {
                            className: "mb-6 flex flex-col pr-10",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[0.625rem] font-bold uppercase tracking-[0.3em] text-gray-400",
                                children: "访问说明",
                              }),
                              e.jsx("span", {
                                className:
                                  "mt-1 font-mono text-[0.625rem] text-gray-300",
                                children: "MANUAL REVIEW",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "relative mb-6",
                            children: [
                              e.jsxs("h2", {
                                className:
                                  "flex flex-wrap items-baseline gap-x-1 font-serif text-2xl tracking-tight text-gray-900 sm:text-3xl",
                                children: [
                                  e.jsx("span", {
                                    className: "inline-block",
                                    children: "人工",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "inline-block -rotate-6 italic text-gray-500",
                                    children: "审核",
                                  }),
                                  e.jsx("span", {
                                    className: "inline-block translate-y-px",
                                    children: "须知",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute right-0 top-1 h-px w-12 bg-gray-900",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "relative pl-5",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute bottom-0 left-0 top-0 w-px bg-gray-100",
                              }),
                              e.jsx("p", {
                                className:
                                  "mb-4 text-[0.625rem] font-bold uppercase tracking-widest text-gray-900",
                                children: "请完整阅读",
                              }),
                              e.jsx("div", {
                                className: "space-y-5",
                                children: yte.map((pt, qe) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "space-y-2",
                                      children: [
                                        e.jsxs("p", {
                                          className:
                                            "text-[0.625rem] font-bold uppercase tracking-widest text-gray-500",
                                          children: [qe + 1, " · ", pt.title],
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-sm font-serif leading-relaxed text-gray-600",
                                          children: pt.body,
                                        }),
                                      ],
                                    },
                                    pt.title,
                                  ),
                                ),
                              }),
                              e.jsx("p", {
                                className:
                                  "mt-6 text-xs leading-relaxed text-gray-400",
                                children:
                                  "请向下滑动至文末；提交入口出现后，仍需自打开本说明起满 10 秒方可点击提交。",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            ref: fe,
                            className: "h-4 w-full shrink-0",
                            "aria-hidden": !0,
                          }),
                          e.jsx(Os, {
                            children:
                              tt &&
                              e.jsxs(
                                We.div,
                                {
                                  ref: He,
                                  initial: { opacity: 0, y: 12 },
                                  animate: { opacity: 1, y: 0 },
                                  transition: {
                                    duration: 0.28,
                                    ease: [0.16, 1, 0.3, 1],
                                  },
                                  className:
                                    "mt-2 border-t border-gray-100/90 pt-6",
                                  children: [
                                    (!o.trim() || !d.trim()) &&
                                      e.jsx("p", {
                                        className:
                                          "mb-4 text-center text-xs text-amber-800/90",
                                        children:
                                          "请先在申请弹窗中填写姓名与访问理由",
                                      }),
                                    o.trim() &&
                                      d.trim() &&
                                      !ht &&
                                      e.jsxs("p", {
                                        className:
                                          "mb-4 text-center text-xs text-amber-800/90",
                                        children: [
                                          "请完整阅读说明，还需等待 ",
                                          ut,
                                          " 秒后可提交",
                                        ],
                                      }),
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col items-stretch gap-3",
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          disabled:
                                            m || !o.trim() || !d.trim() || !ht,
                                          onClick: Qt,
                                          className: [
                                            "group flex w-full items-center justify-center gap-2 rounded-full py-3 pl-7 pr-3 text-[0.625rem] font-bold uppercase tracking-widest transition-all",
                                            !m && o.trim() && d.trim() && ht
                                              ? "bg-gray-900 text-white hover:pl-8"
                                              : "cursor-not-allowed bg-gray-200 text-gray-400",
                                          ].join(" "),
                                          children: m
                                            ? e.jsx(Sn, {
                                                size: 16,
                                                className: "animate-spin",
                                              })
                                            : e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("span", {
                                                    children:
                                                      "提交人工审核申请",
                                                  }),
                                                  e.jsx("div", {
                                                    className:
                                                      "flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white group-hover:text-gray-900",
                                                    children: e.jsx(Kn, {
                                                      size: 14,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                        }),
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: () => $e(!1),
                                          className:
                                            "text-center text-[0.6875rem] text-gray-400 transition hover:text-gray-600",
                                          children: "关闭",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "manual-actions",
                              ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ct.open &&
              e.jsxs("div", {
                className:
                  "fixed inset-0 z-[10002] flex items-center justify-center bg-black/10 p-4 backdrop-blur-md sm:p-6",
                children: [
                  e.jsx("button", {
                    type: "button",
                    "aria-label": "关闭",
                    className: "absolute inset-0",
                    disabled: m,
                    onClick: () => !m && ae(),
                  }),
                  e.jsxs(We.div, {
                    initial: { scale: 0.94, opacity: 0, rotateX: 6 },
                    animate: { scale: 1, opacity: 1, rotateX: 0 },
                    transition: { type: "spring", stiffness: 240, damping: 24 },
                    className:
                      "relative z-10 w-full max-w-[360px] overflow-hidden rounded-[32px] border border-white/60 bg-[#FDFBF9] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]",
                    children: [
                      e.jsxs("div", {
                        className:
                          "pointer-events-none absolute inset-0 overflow-hidden",
                        children: [
                          e.jsx("div", {
                            className: "absolute inset-0 opacity-[0.03]",
                            style: {
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            },
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-rose-200/30 to-amber-100/30 blur-3xl",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -bottom-4 -left-8 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-200/20 to-purple-100/15 blur-3xl",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "relative z-10 px-7 pb-7 pt-8 text-left sm:px-8",
                        children: [
                          e.jsx("p", {
                            className:
                              "mb-3 text-[0.625rem] font-bold uppercase tracking-[0.28em] text-gray-400",
                            children: "请确认",
                          }),
                          e.jsx("h3", {
                            className:
                              "font-serif text-2xl leading-snug tracking-tight text-gray-900",
                            children: ct.title,
                          }),
                          e.jsxs("div", {
                            className: "relative mt-5 pl-5",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute bottom-0 left-0 top-0 w-px bg-gray-100",
                              }),
                              (Vs = ct.sections) != null && Vs.length
                                ? e.jsx("div", {
                                    className: "space-y-4",
                                    children: ct.sections.map((pt, qe) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className: "space-y-1.5",
                                          children: [
                                            e.jsxs("p", {
                                              className:
                                                "text-[0.625rem] font-bold uppercase tracking-widest text-gray-500",
                                              children: [
                                                qe + 1,
                                                " · ",
                                                pt.title,
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-sm font-serif leading-relaxed text-gray-600",
                                              children: pt.body,
                                            }),
                                          ],
                                        },
                                        `${pt.title}-${qe}`,
                                      ),
                                    ),
                                  })
                                : e.jsx("p", {
                                    className:
                                      "text-sm font-serif leading-relaxed text-gray-600",
                                    children: ct.message,
                                  }),
                            ],
                          }),
                          ct.minWaitMs > 0 &&
                            !jt &&
                            e.jsxs("p", {
                              className:
                                "mt-4 text-center text-xs text-amber-800/90",
                              children: [
                                "请完整阅读上述说明，还需等待 ",
                                Pt,
                                " 秒后可确认",
                              ],
                            }),
                          e.jsxs("div", {
                            className:
                              "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4",
                            children: [
                              e.jsx("button", {
                                type: "button",
                                disabled: m,
                                onClick: ae,
                                className:
                                  "order-2 w-full rounded-full border border-gray-200 bg-white/80 py-3 text-[0.625rem] font-bold uppercase tracking-widest text-gray-600 transition hover:bg-white disabled:opacity-50 sm:order-1 sm:w-auto sm:min-w-[120px]",
                                children: "再检查一下",
                              }),
                              e.jsx("button", {
                                type: "button",
                                disabled: m || !jt,
                                onClick: () => ct.onConfirm(),
                                className: [
                                  "group order-1 flex w-full items-center justify-center gap-2 rounded-full py-3 pl-6 pr-3 text-[0.625rem] font-bold uppercase tracking-widest transition sm:order-2 sm:w-auto",
                                  m || !jt
                                    ? "cursor-not-allowed bg-gray-200 text-gray-400"
                                    : "bg-gray-900 text-white hover:pl-7",
                                ].join(" "),
                                children: m
                                  ? e.jsx(Sn, {
                                      size: 16,
                                      className: "animate-spin",
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("span", { children: "确认" }),
                                        e.jsx("div", {
                                          className:
                                            "flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white group-hover:text-gray-900",
                                          children: e.jsx(Kn, { size: 14 }),
                                        }),
                                      ],
                                    }),
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
        vs,
      ],
    });
  };
function F0(...t) {
  return Fc($c(t));
}
const wte = ({ className: t, color: s }) =>
    e.jsxs("svg", {
      width: "19",
      height: "13",
      viewBox: "0 0 19 13",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      style: { color: s },
      children: [
        e.jsx("rect", {
          x: "1",
          y: "4",
          width: "3",
          height: "3",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "6",
          y: "3",
          width: "3",
          height: "4",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "11",
          y: "2",
          width: "3",
          height: "5",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "16",
          y: "0",
          width: "3",
          height: "7",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "1",
          y: "9",
          width: "3",
          height: "3",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "6",
          y: "9",
          width: "3",
          height: "3",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "11",
          y: "9",
          width: "3",
          height: "3",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
        e.jsx("rect", {
          x: "16",
          y: "9",
          width: "3",
          height: "3",
          rx: "1.5",
          ry: "1.5",
          fill: "currentColor",
        }),
      ],
    }),
  jte = ({ className: t, level: s }) =>
    e.jsxs("div", {
      className: F0("relative w-[28px] h-[13px]", t),
      children: [
        e.jsxs("div", {
          className:
            "relative w-[24px] h-[13px] rounded-[4px] overflow-hidden bg-[#A9A9A9]",
          children: [
            e.jsx("div", {
              className: "absolute inset-y-0 left-0 bg-black",
              style: { width: `${Math.max(0, Math.min(100, s))}%` },
            }),
            e.jsx("span", {
              className:
                "absolute inset-0 z-[1] flex items-center justify-center text-[13px] font-extrabold leading-none text-white",
              children: Math.max(0, Math.min(100, s)),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute left-[25px] top-1/2 -translate-y-1/2 w-[2px] h-[4px] bg-[#A9A9A9] rounded-r-full z-[2]",
        }),
      ],
    }),
  Nte = "max(3.75rem, 56px)",
  kte = ({
    isIslandExpanded: t,
    setIsIslandExpanded: s,
    showStatusBar: n,
    showDynamicIsland: a,
    themeColor: r,
    extendSafeArea: i = !1,
  }) => {
    const [o, c] = l.useState(""),
      [d, u] = l.useState(80);
    return (
      l.useEffect(() => {
        const f = () => {
          const g = new Date(),
            x = g.getHours().toString().padStart(2, "0"),
            y = g.getMinutes().toString().padStart(2, "0");
          c(`${x}:${y}`);
        };
        f();
        const p = 6e4 - (Date.now() % 6e4);
        let m;
        const h = setTimeout(() => {
          (f(), (m = setInterval(f, 6e4)));
        }, p);
        return () => {
          (clearTimeout(h), m && clearInterval(m));
        };
      }, []),
      l.useEffect(() => {
        let f = null,
          p = !1,
          m = () => {};
        const h = () => {
          !f || p || u(Math.round((f.level ?? 0.8) * 100));
        };
        if (
          !(typeof navigator > "u" || typeof navigator.getBattery != "function")
        )
          return (
            navigator
              .getBattery()
              .then((g) => {
                p ||
                  ((f = g),
                  h(),
                  typeof g.addEventListener == "function"
                    ? (g.addEventListener("levelchange", h),
                      (m = () => {
                        typeof g.removeEventListener == "function" &&
                          g.removeEventListener("levelchange", h);
                      }))
                    : g &&
                      typeof g == "object" &&
                      "onlevelchange" in g &&
                      ((g.onlevelchange = h),
                      (m = () => {
                        g.onlevelchange === h && (g.onlevelchange = null);
                      })));
              })
              .catch(() => {}),
            () => {
              ((p = !0), m());
            }
          );
      }, []),
      !n && !a
        ? null
        : e.jsxs("div", {
            className: F0(
              "absolute top-0 left-0 right-0 flex justify-between items-center px-8 pt-[2px] z-[70] font-medium text-[0.9375rem] pointer-events-none",
              !i && "h-14",
            ),
            style: {
              color: r.statusBar,
              ...(i && {
                paddingTop: "2px",
                height: "3.5rem",
                minHeight: "3.5rem",
              }),
            },
            children: [
              e.jsx("div", {
                className: "w-1/3 flex justify-start",
                children:
                  n &&
                  e.jsx("span", {
                    className: "font-semibold tracking-wide text-[1rem]",
                    children: o,
                  }),
              }),
              a &&
                e.jsx("div", {
                  className: F0(
                    "absolute left-1/2 -translate-x-1/2 top-[2px] bg-black rounded-[1.25rem] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto cursor-pointer z-50",
                    t
                      ? "w-[21.25rem] h-[11.25rem] rounded-[2rem]"
                      : "w-[7.5rem] h-[2.1875rem]",
                  ),
                  onClick: () => s(!t),
                  children: e.jsx("div", {
                    className: "relative w-full h-full overflow-hidden",
                    children: e.jsx("div", {
                      className: F0(
                        "w-full h-full flex flex-col items-center justify-center text-white p-6 transition-all duration-300",
                        t
                          ? "opacity-100 delay-100 scale-100"
                          : "opacity-0 scale-90 pointer-events-none",
                      ),
                      children: e.jsxs("div", {
                        className: "flex items-center gap-4 w-full",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center",
                            children: e.jsx(vr, { size: 24 }),
                          }),
                          e.jsxs("div", {
                            className: "flex-1",
                            children: [
                              e.jsx("div", {
                                className:
                                  "h-2 w-20 bg-white/20 rounded-full mb-2",
                              }),
                              e.jsx("div", {
                                className: "h-2 w-32 bg-white/10 rounded-full",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-3",
                            children: [
                              e.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-white/20",
                              }),
                              e.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-white",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              e.jsx("div", {
                className: "w-1/3 flex justify-end items-center gap-2",
                children:
                  n &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(wte, { color: r.statusBar }),
                      e.jsx("span", {
                        className:
                          "-ml-0.5 text-[0.95rem] font-semibold leading-none tracking-tight",
                        children: "5G",
                      }),
                      e.jsx(jte, { className: "-ml-0.5", level: d }),
                    ],
                  }),
              }),
            ],
          })
    );
  },
  k5 = {
    en: {
      settings: "Settings",
      back: "Back",
      search: "Search settings...",
      apiConfig: "API Configuration",
      apiSubtitle: "Endpoint, Keys, Models",
      voiceSettings: "Voice Settings",
      voiceSubtitle: "TTS Provider, Voice ID",
      dataMgmt: "Data Management",
      dataSubtitle: "Backup, Restore, Reset",
      appearance: "Appearance",
      appearanceSubtitle: "Fonts, Icons, Wallpaper, Colors",
      language: "Language",
      languageSubtitle: "System Language",
      connection: "Connection",
      modelSelection: "Model Selection",
      parameters: "Parameters",
      presets: "Presets",
      provider: "Provider",
      elevenlabsConfig: "ElevenLabs Config",
      minimaxConfig: "Minimax Config",
      backupRestore: "Backup & Restore",
      resetData: "Reset Data",
      resetDesc: "Clear all data and restore to factory settings.",
      resetBtn: "Reset All Data",
      cancel: "Cancel",
      confirm: "Confirm",
      resetConfirmTitle: "Reset Data?",
      resetConfirmDesc:
        "This action cannot be undone. All your settings and presets will be lost.",
      fetchModels: "Fetch Models",
      testConnection: "Test Connection",
      save: "Save",
      export: "Export Backup",
      import: "Import Backup",
      endpoint: "Endpoint",
      apiKey: "API Key",
      model: "Model",
      temperature: "Temperature",
      voiceId: "Voice ID",
      groupId: "Group ID",
      service: "Service",
      newPreset: "New Preset Name",
      noPresets: "No presets saved",
      fonts: "Fonts",
      appCustomization: "App Customization",
      wallpaper: "Wallpaper",
      systemUI: "System UI",
      colors: "Colors",
      customFontUrl: "Custom Font URL",
      uploadFont: "Upload Font File",
      resetFont: "Reset to Default Font",
      selectApp: "Select App",
      appName: "App Name",
      iconUrl: "Icon Image URL",
      uploadIcon: "Upload Icon Image",
      apply: "Apply",
      testing: "Testing...",
      success: "Success",
      failed: "Failed",
      uploadWallpaper: "Upload Wallpaper",
      wallpaperUrl: "Wallpaper URL",
      resetWallpaper: "Reset Wallpaper",
      showStatusBar: "Show Status Bar",
      showHomeIndicator: "Show Home Indicator",
      showDynamicIsland: "Show Dynamic Island",
      statusBarColor: "Status Bar Color",
      appIconColor: "App Icon Color",
      appNameColor: "App Name Color",
      fontSize: "Font Size",
      fontPresets: "Font Presets",
      saveFontPreset: "Save Font Preset",
      fontPresetName: "Preset Name",
      showPhoneCase: "Show Phone Case",
      phoneCaseSize: "Phone Case Size",
      phoneCaseWidth: "Border Width",
      showDock: "Show Dock",
      widgetEditor: "Widget Editor",
      editWidget: "Edit Widget",
      replaceWithWidget: "Replace with Widget",
      widgetSize: "Widget Size",
      widgetCode: "Widget CSS/HTML",
      savePreset: "Save Preset",
      loadPreset: "Load Preset",
      exportWidget: "Export Widget",
      importWidget: "Import Widget",
      deletePreset: "Delete Preset",
      htmlContent: "HTML Content",
      cssStyles: "CSS Styles",
      preview: "Preview",
      globalEffects: "Global Effects",
      weatherEffects: "Weather Effects",
      customCSS: "Custom CSS",
      snow: "Snow",
      rain: "Rain",
      none: "None",
      resetWidget: "Reset Widget",
      weatherConfig: "Weather Config",
      city: "City",
      anniversary: "Anniversary",
      anniversaryConfig: "Anniversary Config",
      blurStyle: "Blur Style",
      glass: "Glass",
      heavyBlur: "Heavy Blur",
      uploadPhoto: "Upload Photo",
      deleteWidget: "Delete Widget",
      deleteConfirm: "Delete this widget?",
      uiStyle: "UI Style",
      minimal: "Minimal",
      aurora: "Pink",
      profile: "Profile",
      editName: "Edit Name",
      chatSettings: "Chat Settings",
      chatSettingsSubtitle: "Context & Memory",
      contextMemory: "Context & Memory",
      momentsLimit: "Moments Limit",
      momentsLimitDesc: "Number of recent moments to include in AI context.",
      contextLimit: "Context Limit",
      contextLimitDesc: "Number of recent messages to include in AI context.",
      autoSummary: "Auto Summary",
      enableAutoSummary: "Enable Auto Summary",
      summaryThreshold: "Summary Threshold",
      summaryThresholdDesc:
        "Automatically summarize chat history every {n} messages.",
      notifications: "Notifications",
      enableSystemNotifications: "Enable System Notifications",
      testNotification: "Test Notification",
      testNotificationTitle: "Test Notification",
      testNotificationBody:
        "This is a test notification from your virtual phone.",
      notificationPermissionDenied:
        "Notification permission denied. Please enable it in your browser settings.",
    },
    zh: {
      settings: "设置",
      back: "返回",
      search: "搜索设置...",
      apiConfig: "API 配置",
      apiSubtitle: "端点, 密钥, 模型",
      voiceSettings: "语音设置",
      voiceSubtitle: "TTS 提供商, 语音 ID",
      dataMgmt: "数据管理",
      dataSubtitle: "备份, 恢复, 重置",
      appearance: "外观设置",
      appearanceSubtitle: "字体, 图标, 壁纸, 颜色",
      language: "语言",
      languageSubtitle: "系统语言",
      connection: "连接",
      modelSelection: "模型选择",
      parameters: "参数",
      presets: "预设",
      provider: "提供商",
      elevenlabsConfig: "ElevenLabs 配置",
      minimaxConfig: "Minimax 配置",
      backupRestore: "备份与恢复",
      resetData: "重置数据",
      resetDesc: "清除所有数据并恢复出厂设置。",
      resetBtn: "重置所有数据",
      cancel: "取消",
      confirm: "确认",
      resetConfirmTitle: "重置数据？",
      resetConfirmDesc: "此操作无法撤销。您的所有设置和预设都将丢失。",
      fetchModels: "获取模型",
      testConnection: "测试连接",
      save: "保存",
      export: "导出备份",
      import: "导入备份",
      endpoint: "端点",
      apiKey: "API 密钥",
      model: "模型",
      temperature: "温度",
      voiceId: "语音 ID",
      groupId: "组 ID",
      service: "服务",
      newPreset: "新预设名称",
      noPresets: "暂无预设",
      fonts: "字体",
      appCustomization: "App 自定义",
      wallpaper: "壁纸设置",
      systemUI: "系统界面",
      colors: "颜色设置",
      customFontUrl: "自定义字体 URL",
      uploadFont: "上传字体文件",
      resetFont: "恢复默认字体",
      selectApp: "选择 App",
      appName: "App 名称",
      iconUrl: "图标图片 URL",
      uploadIcon: "上传图标图片",
      apply: "应用",
      testing: "测试中...",
      success: "成功",
      failed: "失败",
      uploadWallpaper: "上传壁纸",
      wallpaperUrl: "壁纸 URL",
      resetWallpaper: "恢复默认壁纸",
      showStatusBar: "显示状态栏",
      showHomeIndicator: "显示底部横条",
      showDynamicIsland: "显示灵动岛",
      statusBarColor: "状态栏颜色",
      appIconColor: "App 图标颜色",
      appNameColor: "App 名字颜色",
      fontSize: "字体大小",
      fontPresets: "字体预设",
      saveFontPreset: "保存字体预设",
      fontPresetName: "预设名称",
      showPhoneCase: "显示手机外壳",
      phoneCaseSize: "手机外壳尺寸",
      phoneCaseWidth: "边框宽度",
      showDock: "显示底栏 (Dock)",
      widgetEditor: "小组件编辑器",
      editWidget: "编辑小组件",
      replaceWithWidget: "替换为小组件",
      widgetSize: "小组件尺寸",
      widgetCode: "小组件代码",
      savePreset: "保存预设",
      loadPreset: "加载预设",
      exportWidget: "导出小组件",
      importWidget: "导入小组件",
      deletePreset: "删除预设",
      htmlContent: "HTML 内容",
      cssStyles: "CSS 样式",
      preview: "预览",
      globalEffects: "全局美化",
      weatherEffects: "天气特效",
      customCSS: "自定义 CSS",
      snow: "下雪",
      rain: "下雨",
      none: "无",
      resetWidget: "重置小组件",
      weatherConfig: "天气配置",
      city: "城市",
      anniversary: "纪念日",
      anniversaryConfig: "纪念日配置",
      blurStyle: "模糊风格",
      glass: "毛玻璃",
      heavyBlur: "高斯模糊",
      uploadPhoto: "上传照片",
      deleteWidget: "删除小组件",
      deleteConfirm: "确定删除此小组件吗？",
      uiStyle: "UI 风格",
      minimal: "极简风格",
      aurora: "粉嫩风格",
      profile: "个人资料",
      editName: "修改昵称",
      chatSettings: "聊天设置",
      chatSettingsSubtitle: "上下文与记忆",
      contextMemory: "上下文与记忆",
      momentsLimit: "朋友圈限制",
      momentsLimitDesc: "包含在 AI 上下文中的最近朋友圈数量。",
      contextLimit: "上下文限制",
      contextLimitDesc: "包含在 AI 上下文中的最近消息数量。",
      autoSummary: "自动总结",
      enableAutoSummary: "启用自动总结",
      summaryThreshold: "总结阈值",
      summaryThresholdDesc: "每 {n} 条消息自动总结聊天记录。",
      notifications: "通知设置",
      enableSystemNotifications: "启用系统通知",
      testNotification: "测试通知",
      testNotificationTitle: "测试通知",
      testNotificationBody: "这是来自虚拟手机的测试通知。",
      notificationPermissionDenied: "通知权限被拒绝。请在浏览器设置中启用。",
    },
    ko: {
      settings: "설정",
      back: "뒤로",
      search: "설정 검색...",
      apiConfig: "API 구성",
      apiSubtitle: "엔드포인트, 키, 모델",
      voiceSettings: "음성 설정",
      voiceSubtitle: "TTS 제공자, 음성 ID",
      dataMgmt: "데이터 관리",
      dataSubtitle: "백업, 복원, 초기화",
      appearance: "화면 설정",
      appearanceSubtitle: "글꼴, 아이콘, 배경화면, 색상",
      language: "언어",
      languageSubtitle: "시스템 언어",
      connection: "연결",
      modelSelection: "모델 선택",
      parameters: "매개변수",
      presets: "프리셋",
      provider: "제공자",
      elevenlabsConfig: "ElevenLabs 설정",
      minimaxConfig: "Minimax 설정",
      backupRestore: "백업 및 복원",
      resetData: "데이터 초기화",
      resetDesc: "모든 데이터를 지우고 공장 설정으로 복원합니다.",
      resetBtn: "모든 데이터 초기화",
      cancel: "취소",
      confirm: "확인",
      resetConfirmTitle: "데이터 초기화?",
      resetConfirmDesc:
        "이 작업은 되돌릴 수 없습니다. 모든 설정과 프리셋이 손실됩니다.",
      fetchModels: "모델 가져오기",
      testConnection: "연결 테스트",
      save: "저장",
      export: "백업 내보내기",
      import: "백업 가져오기",
      endpoint: "엔드포인트",
      apiKey: "API 키",
      model: "모델",
      temperature: "온도",
      voiceId: "음성 ID",
      groupId: "그룹 ID",
      service: "서비스",
      newPreset: "새 프리셋 이름",
      noPresets: "저장된 프리셋 없음",
      fonts: "글꼴",
      appCustomization: "앱 사용자 지정",
      wallpaper: "배경화면",
      systemUI: "시스템 UI",
      colors: "색상",
      customFontUrl: "사용자 지정 글꼴 URL",
      uploadFont: "글꼴 파일 업로드",
      resetFont: "기본 글꼴로 초기화",
      selectApp: "앱 선택",
      appName: "앱 이름",
      iconUrl: "아이콘 이미지 URL",
      uploadIcon: "아이콘 이미지 업로드",
      apply: "적용",
      testing: "테스트 중...",
      success: "성공",
      failed: "실패",
      uploadWallpaper: "배경화면 업로드",
      wallpaperUrl: "배경화면 URL",
      resetWallpaper: "배경화면 초기화",
      showStatusBar: "상태 표시줄 표시",
      showHomeIndicator: "홈 표시기 표시",
      showDynamicIsland: "다이내믹 아일랜드 표시",
      statusBarColor: "상태 표시줄 색상",
      appIconColor: "앱 아이콘 색상",
      appNameColor: "앱 이름 색상",
      fontSize: "글꼴 크기",
      fontSizeAffectsChatApp: "채팅 페이지 글자 크기에 영향",
      fontPresets: "글꼴 프리셋",
      saveFontPreset: "글꼴 프리셋 저장",
      fontPresetName: "프리셋 이름",
      showPhoneCase: "휴대폰 케이스 표시",
      phoneCaseSize: "휴대폰 케이스 크기",
      phoneCaseWidth: "테두리 너비",
      showDock: "Dock 표시",
      widgetEditor: "위젯 편집기",
      editWidget: "위젯 편집",
      replaceWithWidget: "위젯으로 교체",
      widgetSize: "위젯 크기",
      widgetCode: "위젯 코드",
      savePreset: "프리셋 저장",
      loadPreset: "프리셋 불러오기",
      exportWidget: "위젯 내보내기",
      importWidget: "위젯 가져오기",
      deletePreset: "프리셋 삭제",
      htmlContent: "HTML 내용",
      cssStyles: "CSS 스타일",
      preview: "미리보기",
      globalEffects: "전역 효과",
      weatherEffects: "날씨 효과",
      customCSS: "사용자 정의 CSS",
      snow: "눈",
      rain: "비",
      none: "없음",
      resetWidget: "위젯 초기화",
      weatherConfig: "날씨 설정",
      city: "도시",
      anniversary: "기념일",
      anniversaryConfig: "기념일 설정",
      blurStyle: "블러 스타일",
      glass: "유리",
      heavyBlur: "강한 블러",
      uploadPhoto: "사진 업로드",
      deleteWidget: "위젯 삭제",
      deleteConfirm: "이 위젯을 삭제하시겠습니까?",
      uiStyle: "UI 스타일",
      minimal: "미니멀",
      aurora: "오로라",
      profile: "프로필",
      editName: "이름 수정",
      chatSettings: "채팅 설정",
      chatSettingsSubtitle: "컨텍스트 및 메모리",
      contextMemory: "컨텍스트 및 메모리",
      momentsLimit: "모멘트 제한",
      momentsLimitDesc: "AI 컨텍스트에 포함할 최근 모멘트 수.",
      contextLimit: "컨텍스트 제한",
      contextLimitDesc: "AI 컨텍스트에 포함할 최근 메시지 수.",
      autoSummary: "자동 요약",
      enableAutoSummary: "자동 요약 활성화",
      summaryThreshold: "요약 임계값",
      summaryThresholdDesc: "{n} 메시지마다 채팅 기록을 자동으로 요약합니다.",
      notifications: "알림",
      enableSystemNotifications: "시스템 알림 활성화",
      testNotification: "알림 테스트",
      testNotificationTitle: "알림 테스트",
      testNotificationBody: "가상 휴대폰에서 보낸 테스트 알림입니다.",
      notificationPermissionDenied:
        "알림 권한이 거부되었습니다. 브라우저 설정에서 활성화해주세요.",
    },
    ja: {
      settings: "設定",
      back: "戻る",
      search: "設定を検索...",
      apiConfig: "API設定",
      apiSubtitle: "エンドポイント, キー, モデル",
      voiceSettings: "音声設定",
      voiceSubtitle: "TTSプロバイダー, 音声ID",
      dataMgmt: "データ管理",
      dataSubtitle: "バックアップ, 復元, リセット",
      appearance: "外観",
      appearanceSubtitle: "フォント, アイコン, 壁紙, 色",
      language: "言語",
      languageSubtitle: "システム言語",
      connection: "接続",
      modelSelection: "モデル選択",
      parameters: "パラメータ",
      presets: "プリセット",
      provider: "プロバイダー",
      elevenlabsConfig: "ElevenLabs設定",
      minimaxConfig: "Minimax設定",
      backupRestore: "バックアップと復元",
      resetData: "データリセット",
      resetDesc: "すべてのデータを消去し、工場出荷時の設定に戻します。",
      resetBtn: "すべてのデータをリセット",
      cancel: "キャンセル",
      confirm: "確認",
      resetConfirmTitle: "データをリセットしますか？",
      resetConfirmDesc:
        "この操作は取り消せません。すべての設定とプリセットが失われます。",
      fetchModels: "モデルを取得",
      testConnection: "接続テスト",
      save: "保存",
      export: "バックアップをエクスポート",
      import: "バックアップをインポート",
      endpoint: "エンドポイント",
      apiKey: "APIキー",
      model: "モデル",
      temperature: "温度",
      voiceId: "音声ID",
      groupId: "グループID",
      service: "サービス",
      newPreset: "新しいプリセット名",
      noPresets: "保存されたプリセットはありません",
      fonts: "フォント",
      appCustomization: "アプリのカスタマイズ",
      wallpaper: "壁紙",
      systemUI: "システムUI",
      colors: "色",
      customFontUrl: "カスタムフォントURL",
      uploadFont: "フォントファイルをアップロード",
      resetFont: "デフォルトフォントに戻す",
      selectApp: "アプリを選択",
      appName: "アプリ名",
      iconUrl: "アイコン画像URL",
      uploadIcon: "アイコン画像をアップロード",
      apply: "適用",
      testing: "テスト中...",
      success: "成功",
      failed: "失敗",
      uploadWallpaper: "壁紙をアップロード",
      wallpaperUrl: "壁紙URL",
      resetWallpaper: "壁紙をリセット",
      showStatusBar: "ステータスバーを表示",
      showHomeIndicator: "ホームインジケーターを表示",
      showDynamicIsland: "ダイナミックアイランドを表示",
      statusBarColor: "ステータスバーの色",
      appIconColor: "アプリアイコンの色",
      appNameColor: "アプリ名の色",
      fontSize: "フォントサイズ",
      fontPresets: "フォントプリセット",
      saveFontPreset: "フォントプリセットを保存",
      fontPresetName: "プリセット名",
      showPhoneCase: "スマホケースを表示",
      phoneCaseSize: "スマホケースサイズ",
      phoneCaseWidth: "ボーダー幅",
      showDock: "Dockを表示",
      widgetEditor: "ウィジェットエディタ",
      editWidget: "ウィジェットを編集",
      replaceWithWidget: "ウィジェットに置換",
      widgetSize: "ウィジェットサイズ",
      widgetCode: "ウィジェットコード",
      savePreset: "プリセットを保存",
      loadPreset: "プリセットを読み込む",
      exportWidget: "ウィジェットをエクスポート",
      importWidget: "ウィジェットをインポート",
      deletePreset: "プリセットを削除",
      htmlContent: "HTMLコンテンツ",
      cssStyles: "CSSスタイル",
      preview: "プレビュー",
      globalEffects: "グローバル効果",
      weatherEffects: "天気効果",
      customCSS: "カスタムCSS",
      snow: "雪",
      rain: "雨",
      none: "なし",
      resetWidget: "ウィジェットをリセット",
      weatherConfig: "天気設定",
      city: "都市",
      anniversary: "記念日",
      anniversaryConfig: "記念日設定",
      blurStyle: "ブラースタイル",
      glass: "ガラス",
      heavyBlur: "強いブラー",
      uploadPhoto: "写真をアップロード",
      deleteWidget: "ウィジェットを削除",
      deleteConfirm: "このウィジェットを削除しますか？",
      uiStyle: "UIスタイル",
      minimal: "ミニマル",
      aurora: "オーロラ",
      profile: "プロフィール",
      editName: "名前を編集",
      chatSettings: "チャット設定",
      chatSettingsSubtitle: "コンテキストとメモリ",
      contextMemory: "コンテキストとメモリ",
      momentsLimit: "モーメント制限",
      momentsLimitDesc: "AIコンテキストに含める最近のモーメント数。",
      contextLimit: "コンテキスト制限",
      contextLimitDesc: "AIコンテキストに含める最近のメッセージ数。",
      autoSummary: "自動要約",
      enableAutoSummary: "自動要約を有効化",
      summaryThreshold: "要約しきい値",
      summaryThresholdDesc:
        "{n} メッセージごとにチャット履歴を自動的に要約します。",
      notifications: "通知",
      enableSystemNotifications: "システム通知を有効化",
      testNotification: "通知テスト",
      testNotificationTitle: "通知テスト",
      testNotificationBody: "これは仮想電話からのテスト通知です。",
      notificationPermissionDenied:
        "通知権限が拒否されました。ブラウザの設定で有効にしてください。",
    },
  },
  Ste = "0.0.73",
  _te = { version: Ste },
  F1 = _te.version,
  Ate = [
    "vinyl_cover_",
    "vinyl_top_text_",
    "vinyl_main_text_",
    "vinyl_bottom_text_",
    "acetate_2x2_base_",
    "acetate_2x2_film_title_",
    "acetate_2x2_text_",
    "photo_frame_airdrop_avatar_",
    "photo_frame_airdrop_img_",
    "photo_frame_airdrop_name_",
    "profile_card_4x4_bg_",
    "profile_card_4x4_avatar_",
    "profile_card_4x4_name_",
    "profile_card_4x4_sig_",
    "capsule_2x1_bg_",
    "capsule_2x1_contact_",
    "studio_gallery_4x2_img1_",
    "studio_gallery_4x2_img2_",
    "studio_gallery_4x2_title_",
    "studio_gallery_4x2_desc_",
    "photo_frame_img_",
    "photo_frame_caption_",
  ];
function Cte(t) {
  return typeof t == "string" && Ate.some((s) => t.startsWith(s));
}
async function Mte() {
  const s = (await be.getAllKeys()).filter(Cte);
  await Promise.all(s.map((n) => be.remove(n)));
}
async function a6() {
  (await Mte(), await be.remove("phone_widgetData"));
}
async function S5() {
  (await a6(),
    await be.remove("phone_layout_items"),
    await be.remove("phone_layout_items_cyber_zen_v9"));
}
const Tte = "https://api.github.com";
let _5 = Promise.resolve();
function Ite(t) {
  const s = _5.then(() => t());
  return (
    (_5 = s.then(
      () => {},
      () => {},
    )),
    s
  );
}
const Ete = 20 * 1024 * 1024,
  r6 = "phone-github-chunked-backup-v1",
  i6 = "phone-github-latest-v1";
function Lte(t = new Date()) {
  const s = t,
    n = (r) => String(r).padStart(2, "0"),
    a = String(s.getMilliseconds()).padStart(3, "0");
  return `backup-${s.getFullYear()}-${n(s.getMonth() + 1)}-${n(s.getDate())}-${n(s.getHours())}-${n(s.getMinutes())}-${n(s.getSeconds())}-${a}`;
}
const Dte = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};
function xg(t) {
  return String(t || "")
    .split("/")
    .filter(Boolean)
    .map(encodeURIComponent)
    .join("/");
}
function o6(t) {
  const s = new Uint8Array(t || new ArrayBuffer(0));
  let n = "";
  const a = 32768;
  for (let r = 0; r < s.byteLength; r += a)
    n += String.fromCharCode.apply(
      null,
      s.subarray(r, Math.min(r + a, s.byteLength)),
    );
  return btoa(n);
}
async function l6(t) {
  const s = await crypto.subtle.digest("SHA-256", t);
  return Array.from(new Uint8Array(s))
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("");
}
function z0(t) {
  const n = String(t || "")
    .trim()
    .replace(/^https?:\/\/github\.com\//i, "")
    .replace(/\.git$/i, "")
    .split("/")
    .filter(Boolean);
  if (n.length !== 2) throw new Error("仓库格式应为 owner/repo");
  return { owner: n[0], repo: n[1] };
}
async function Zu(t, s, n, a) {
  const r = await fetch(`${Tte}${s}`, {
      method: t,
      headers: {
        ...Dte,
        Authorization: `Bearer ${n}`,
        ...(a ? { "Content-Type": "application/json" } : {}),
      },
      body: a ? JSON.stringify(a) : void 0,
    }),
    i = await r.text();
  let o = null;
  try {
    o = i ? JSON.parse(i) : null;
  } catch {
    o = null;
  }
  if (!r.ok) {
    const c = (o && o.message) || i || r.statusText;
    throw new Error(`GitHub ${r.status}: ${c}`);
  }
  return o;
}
async function $te(t, s, n) {
  await Zu(
    "GET",
    `/repos/${encodeURIComponent(t)}/${encodeURIComponent(s)}`,
    n,
  );
}
async function p2(t, s, n, a, r) {
  const i = `/repos/${encodeURIComponent(t)}/${encodeURIComponent(s)}/contents/${xg(n)}?ref=${encodeURIComponent(r)}`;
  return Zu("GET", i, a);
}
async function Fte(t, s, n, a) {
  const r = await Zu(
    "GET",
    `/repos/${encodeURIComponent(t)}/${encodeURIComponent(s)}/git/blobs/${encodeURIComponent(n)}`,
    a,
  );
  if (!r || r.encoding !== "base64" || typeof r.content != "string")
    throw new Error("GitHub 返回的 blob 格式异常");
  const i = atob(r.content.replace(/\s/g, "")),
    o = new Uint8Array(i.length);
  for (let c = 0; c < i.length; c++) o[c] = i.charCodeAt(c);
  return o.buffer;
}
async function _h(t, s, n, a, r) {
  const i = await p2(t, s, n, a, r);
  if (!i || i.type !== "file") throw new Error("路径不是文件或不存在");
  if (i.content && typeof i.content == "string" && i.encoding === "base64") {
    const o = atob(i.content.replace(/\s/g, "")),
      c = new Uint8Array(o.length);
    for (let d = 0; d < o.length; d++) c[d] = o.charCodeAt(d);
    return c.buffer;
  }
  if (!i.sha) throw new Error("无法获取文件 SHA（权限或路径错误）");
  return Fte(t, s, i.sha, a);
}
async function zte(t, s, n, a, r, i, o, c) {
  const d = { message: o, content: a, branch: i };
  c && (d.sha = c);
  const u = `/repos/${encodeURIComponent(t)}/${encodeURIComponent(s)}/contents/${xg(n)}`;
  return Zu("PUT", u, r, d);
}
async function c6(t, s, n, a, r, i, o) {
  let c = null;
  try {
    const u = await p2(t, s, n, r, i);
    u && u.type === "file" && u.sha && (c = u.sha);
  } catch {
    c = null;
  }
  const d = o6(a);
  return zte(t, s, n, d, r, i, o, c);
}
function d6(t) {
  const s = new TextEncoder().encode(JSON.stringify(t));
  return s.byteOffset === 0 && s.byteLength === s.buffer.byteLength
    ? s.buffer
    : s.slice().buffer;
}
async function Rte(t, s, n, a, r, i, o) {
  return c6(t, s, n, d6(a), r, i, o);
}
async function Pte(t, s, n, a, r, i, o) {
  const c = `/repos/${encodeURIComponent(t)}/${encodeURIComponent(s)}/contents/${xg(n)}`,
    d = 20;
  for (let u = 1; u <= d; u++) {
    let f = null;
    try {
      const m = await p2(t, s, n, r, i);
      m && m.type === "file" && m.sha && (f = m.sha);
    } catch {
      f = null;
    }
    const p = {
      message: `cloud backup latest -> ${o}`,
      content: o6(d6(a)),
      branch: i,
    };
    f && (p.sha = f);
    try {
      await Zu("PUT", c, r, p);
      return;
    } catch (m) {
      const h = (m == null ? void 0 : m.message) || String(m);
      if ((/\b409\b/.test(h) || /does not match/i.test(h)) && u < d) {
        await new Promise((x) => setTimeout(x, 120 + u * 100));
        continue;
      }
      throw m;
    }
  }
}
function u6(t) {
  return Ite(() => Ote(t));
}
async function Ote(t) {
  const {
      owner: s,
      repo: n,
      branch: a,
      token: r,
      zipBlob: i,
      basePrefix: o = "phone-cloud-backups",
      onProgress: c,
    } = t,
    d = Lte(),
    u = `${o.replace(/\/+$/, "")}/${d}`,
    f = new Date().toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !1,
    }),
    p = await i.arrayBuffer(),
    m = p.byteLength,
    h = Ete,
    g = Math.max(1, Math.ceil(m / h)),
    x = [];
  for (let N = 0, w = 0; w < m; N++, w += h) {
    const _ = Math.min(w + h, m),
      A = p.slice(w, _),
      k = await l6(A),
      C = `part-${String(N).padStart(5, "0")}.bin`,
      M = `${u}/${C}`;
    (await c6(s, n, M, A, r, a, `cloud backup ${d} ${C}`),
      x.push({ index: N, file: C, byteLength: A.byteLength, sha256: k }),
      c == null || c({ phase: "part", current: N + 1, total: g }),
      N < g - 1 && (await new Promise((E) => setTimeout(E, 80))));
  }
  const y = {
    format: r6,
    version: 1,
    createdAt: new Date().toISOString(),
    runId: d,
    folder: u,
    backupTitle: f,
    zipBaseName: "full-backup.zip",
    originalByteLength: m,
    chunkBytes: h,
    parts: x,
  };
  (c == null || c({ phase: "manifest", current: 1, total: 1 }),
    await Rte(
      s,
      n,
      `${u}/manifest.json`,
      y,
      r,
      a,
      `cloud backup manifest ${d}`,
    ));
  const v = `${o.replace(/\/+$/, "")}/latest.json`,
    b = {
      format: i6,
      version: 1,
      updatedAt: new Date().toISOString(),
      runId: d,
      folder: u,
      manifestPath: `${u}/manifest.json`,
    };
  return (
    c == null || c({ phase: "latest", current: 1, total: 1 }),
    await Pte(s, n, v, b, r, a, d),
    { runId: d, folder: u, manifest: y }
  );
}
async function Bte(t) {
  const {
      owner: s,
      repo: n,
      branch: a,
      token: r,
      basePrefix: i = "phone-cloud-backups",
    } = t,
    o = i.replace(/\/+$/, ""),
    c = await Zu(
      "GET",
      `/repos/${encodeURIComponent(s)}/${encodeURIComponent(n)}/contents/${xg(o)}?ref=${encodeURIComponent(a)}`,
      r,
    );
  if (!Array.isArray(c)) throw new Error("备份目录不存在或不是文件夹");
  let d = null;
  try {
    const p = await _h(s, n, `${o}/latest.json`, r, a),
      m = JSON.parse(new TextDecoder().decode(p));
    m.format === i6 && m.manifestPath && (d = m.manifestPath);
  } catch {
    d = null;
  }
  const u = c
    .filter((p) => p.type === "dir" && /^(run-|backup-)/.test(p.name))
    .sort((p, m) => m.name.localeCompare(p.name))
    .slice(0, 80);
  return (
    await Promise.all(
      u.map(async (p) => {
        const m = `${o}/${p.name}/manifest.json`;
        let h = null,
          g = null,
          x = null;
        try {
          const y = await _h(s, n, m, r, a),
            v = JSON.parse(new TextDecoder().decode(y));
          ((h = v.createdAt || null),
            (g =
              typeof v.originalByteLength == "number"
                ? v.originalByteLength
                : null),
            (x = typeof v.backupTitle == "string" ? v.backupTitle : null));
        } catch {}
        return {
          manifestPath: m,
          runId: p.name,
          createdAt: h,
          backupTitle: x,
          byteSize: g,
          isLatest: d === m,
        };
      }),
    )
  ).filter((p) => p.manifestPath);
}
async function Ute(t) {
  const {
      owner: s,
      repo: n,
      branch: a,
      token: r,
      manifestPath: i,
      onProgress: o,
    } = t,
    c = await _h(s, n, i, r, a),
    d = JSON.parse(new TextDecoder().decode(c));
  if (d.format !== r6 || !Array.isArray(d.parts))
    throw new Error("manifest.json 格式不正确");
  const u = i.replace(/\/?manifest\.json$/, ""),
    f = [],
    p = d.parts.length;
  for (let x = 0; x < d.parts.length; x++) {
    const y = d.parts[x],
      v = `${u}/${y.file}`,
      b = await _h(s, n, v, r, a);
    if (y.sha256 && (await l6(b)) !== y.sha256)
      throw new Error(`分块校验失败：${y.file}`);
    (f.push(b),
      o == null || o({ phase: "part", current: x + 1, total: p }),
      x < d.parts.length - 1 && (await new Promise((N) => setTimeout(N, 50))));
  }
  const m = f.reduce((x, y) => x + y.byteLength, 0),
    h = new Uint8Array(m);
  let g = 0;
  for (const x of f) (h.set(new Uint8Array(x), g), (g += x.byteLength));
  return new Blob([h], { type: "application/zip" });
}
async function fl(t) {
  try {
    return await t;
  } catch {
    return null;
  }
}
async function Gte() {
  typeof window > "u" ||
    ("caches" in window &&
      (await fl(
        (async () => {
          const t = await caches.keys();
          await Promise.all(t.map((s) => caches.delete(s)));
        })(),
      )),
    "serviceWorker" in navigator &&
      (await fl(
        (async () => {
          const t = await navigator.serviceWorker.getRegistrations();
          await Promise.all(t.map((s) => s.unregister()));
        })(),
      )));
}
async function Hte(t) {
  typeof indexedDB > "u" ||
    (await fl(
      new Promise((s) => {
        const n = indexedDB.deleteDatabase(t);
        ((n.onsuccess = () => s()),
          (n.onerror = () => s()),
          (n.onblocked = () => s()));
      }),
    ));
}
async function Wte() {
  if (typeof indexedDB > "u") return;
  const t = new Set();
  (typeof indexedDB.databases == "function" &&
    ((await fl(indexedDB.databases())) || []).forEach((n) => {
      n != null && n.name && t.add(n.name);
    }),
    [
      "AppDatabase",
      "ChatApp_Audio",
      "july-ovo-single-custom-prompt-presets",
      "music_app_db",
      "MailAppDB",
    ].forEach((s) => t.add(s)),
    await Promise.all(Array.from(t).map((s) => Hte(s))));
}
function Yte() {
  if (typeof window > "u") return { local: [], session: [] };
  const t = [],
    s = [];
  try {
    for (let n = 0; n < window.localStorage.length; n++) {
      const a = window.localStorage.key(n);
      a &&
        (a.includes("auth-token") &&
          t.push([a, window.localStorage.getItem(a)]),
        a === "d-ai_asyncStorage:device_id" &&
          t.push([a, window.localStorage.getItem(a)]));
    }
  } catch {}
  try {
    const n = window.sessionStorage.getItem("gatekeeper_ui_approved"),
      a = window.sessionStorage.getItem("d-ai_gate_web_device_id");
    (n != null && s.push(["gatekeeper_ui_approved", n]),
      a != null && s.push(["d-ai_gate_web_device_id", a]));
  } catch {}
  return { local: t, session: s };
}
async function f6() {
  const t = Yte(),
    s = [...t.local],
    n = new Set(s.map(([a]) => a));
  try {
    const a = await CM();
    for (const r of a) {
      if (n.has(r)) continue;
      const i = await MM(r);
      i != null && i !== "" && (s.push([r, i]), n.add(r));
    }
  } catch {}
  return { local: s, session: t.session };
}
async function Vte(t) {
  if (typeof window > "u") return;
  const s = Array.isArray(t == null ? void 0 : t.local) ? t.local : [],
    n = Array.isArray(t == null ? void 0 : t.session) ? t.session : [],
    a = /^sb-[\w-]+-auth-token$/;
  try {
    for (const [r, i] of s)
      !r ||
        i == null ||
        (a.test(r)
          ? await TM(r, String(i))
          : window.localStorage.setItem(r, String(i)));
  } catch {}
  try {
    for (const [r, i] of n)
      !r || i == null || window.sessionStorage.setItem(r, String(i));
  } catch {}
}
function m6(t) {
  return t && Array.isArray(t.local) && Array.isArray(t.session);
}
async function Jte(t = {}) {
  var n;
  if (typeof window > "u") return;
  const s = m6(t.precomputedSnapshot) ? t.precomputedSnapshot : await f6();
  try {
    const a = new Set(s.local.map(([i]) => i)),
      r = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const o = window.localStorage.key(i);
      o && r.push(o);
    }
    r.forEach((i) => {
      a.has(i) || window.localStorage.removeItem(i);
    });
  } catch {}
  try {
    (n = window.sessionStorage) == null || n.clear();
  } catch {}
  await Vte(s);
}
function Kte() {
  var t, s;
  if (!(typeof window > "u")) {
    try {
      (t = window.localStorage) == null || t.clear();
    } catch {}
    try {
      (s = window.sessionStorage) == null || s.clear();
    } catch {}
  }
}
function qte() {
  try {
    const t = new URL(window.location.href);
    (t.searchParams.set("_reset", String(Date.now())),
      window.location.replace(t.toString()));
  } catch {
    window.location.reload();
  }
}
async function Qte(t = {}) {
  const s = (t == null ? void 0 : t.preserveGatekeeper) !== !1;
  let n = null;
  (s && (n = await fl(f6())),
    await fl(a6()),
    await fl(be.clear()),
    await fl(Gte()),
    await fl(Wte()),
    s ? await fl(Jte({ precomputedSnapshot: m6(n) ? n : null })) : Kte(),
    qte());
}