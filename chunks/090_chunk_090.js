  U5 = 350,
  ine = ({ isActive: t, onSingleClick: s, onDoubleClick: n }) => {
    const a = l.useRef(0),
      r = l.useRef(null),
      i = () => {
        const o = Date.now();
        if (o - a.current <= U5) {
          (r.current && (clearTimeout(r.current), (r.current = null)),
            (a.current = 0),
            n == null || n());
          return;
        }
        ((a.current = o),
          (r.current = setTimeout(() => {
            ((r.current = null), s == null || s());
          }, U5)));
      };
    return e.jsx("div", {
      role: "button",
      tabIndex: 0,
      "aria-label": "Home indicator: double-tap to open Control Center",
      className: Xi(
        "absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full z-[100] cursor-pointer transition-colors duration-300 active:scale-95",
        t ? "bg-black" : "bg-white/50 hover:bg-white/80",
      ),
      onClick: i,
    });
  },
  one = ({ isOpen: t, onClose: s, version: n, content: a }) =>
    t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[100] flex items-center justify-center bg-black/10 backdrop-blur-md p-6",
          children: e.jsxs(We.div, {
            initial: { scale: 0.9, opacity: 0, rotateX: 10 },
            animate: { scale: 1, opacity: 1, rotateX: 0 },
            transition: { type: "spring", stiffness: 200, damping: 20 },
            className:
              "relative w-full max-w-[340px] bg-[#FDFBF9] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/60",
            children: [
              e.jsxs("div", {
                className:
                  "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                  e.jsx("div", {
                    className: "absolute inset-0 opacity-[0.03]",
                    style: {
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    },
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-rose-200/40 to-orange-100/40 rounded-full blur-3xl animate-pulse",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-40 -left-20 w-56 h-56 bg-gradient-to-tr from-blue-200/30 to-purple-100/30 rounded-full blur-3xl animate-pulse",
                    style: { animationDelay: "2s" },
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -bottom-10 -right-4 text-[120px] font-serif italic text-black/[0.03] leading-none select-none pointer-events-none",
                    children: n,
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "relative z-10 p-8 flex flex-col h-full min-h-[400px]",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between items-start mb-8",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase",
                            children: "版本",
                          }),
                          e.jsxs("span", {
                            className:
                              "text-[10px] font-mono text-gray-300 mt-1",
                            children: ["NO. ", n.replace(/\./g, "")],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center",
                        children: e.jsx(Xn, {
                          size: 14,
                          className: "text-gray-400",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8 relative",
                    children: [
                      e.jsxs("h2", {
                        className:
                          "text-4xl font-serif text-gray-900 leading-[0.9] tracking-tight",
                        children: [
                          "New",
                          e.jsx("br", {}),
                          e.jsx("span", {
                            className: "italic text-gray-400",
                            children: "更新",
                          }),
                          e.jsx("br", {}),
                          "Available.",
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-12 h-[1px] bg-gray-900",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex-1 relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute left-0 top-0 bottom-0 w-[1px] bg-gray-100",
                      }),
                      e.jsxs("div", {
                        className: "pl-6 py-2",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs font-bold tracking-widest text-gray-900 uppercase mb-3",
                            children: "更新日志",
                          }),
                          e.jsxs("p", {
                            className:
                              "text-sm text-gray-600 font-serif leading-relaxed italic",
                            children: ['"', a, '"'],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-8 pt-6 border-t border-gray-100 flex justify-between items-center",
                    children: [
                      e.jsx("span", {
                        className: "text-[10px] font-mono text-gray-400",
                        children: "JULY AND JOOGEUM",
                      }),
                      e.jsxs("button", {
                        onClick: s,
                        className:
                          "group flex items-center gap-2 pl-6 py-2 pr-2 bg-gray-900 rounded-full text-white transition-all hover:pr-4",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] font-bold tracking-widest uppercase",
                            children: "探索",
                          }),
                          e.jsx("div", {
                            className:
                              "w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-colors",
                            children: e.jsx(Kn, { size: 12 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
function lne({ currentPage: t, pagesContainerRef: s, children: n }) {
  const { reduceMotion: a } = Yu(),
    [r, i] = l.useState(!1);
  l.useEffect(() => {
    const u = window.matchMedia("(prefers-reduced-motion: reduce)"),
      f = () => i(!!u.matches);
    return (
      f(),
      u.addEventListener("change", f),
      () => u.removeEventListener("change", f)
    );
  }, []);
  const o = `${-t * 50}%`,
    c = r ? "0s" : a ? "0.38s" : "0.52s",
    d = r
      ? "linear"
      : a
        ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        : "cubic-bezier(0.16, 1, 0.3, 1)";
  return e.jsx("div", {
    ref: s,
    className: "flex-1 relative overflow-hidden min-w-0 w-full isolate",
    children: e.jsx("div", {
      className: "flex h-full w-[200%] flex-row will-change-transform",
      style: {
        transform: `translate3d(${o}, 0, 0)`,
        transition: `transform ${c} ${d}`,
      },
      children: n,
    }),
  });
}
function mne() {
  const [t, s, n] = Qa("phone_language", "zh"),
    [a, r, i] = Qa("phone_fontConfig", { type: "default" }),
    [o, c, d] = Qa("phone_appCustomizations", {}),
    [u, f, p] = Qa("phone_wallpaper", ""),
    [m, h, g] = Qa("phone_showStatusBar", !1),
    [x, y, v] = Qa("phone_showHomeIndicator", !0),
    [b, N, w] = Qa("phone_showDynamicIsland", !1),
    [_, A, k] = Qa("phone_themeColor", {
      statusBar: "#000000",
      appIcon: "#000000",
      appName: "#000000",
    }),
    [C, M, E] = Qa("phone_fontSize", 12),
    [S, j, T] = Qa("phone_fontPresets", []),
    [I, L, B] = Qa("phone_showPhoneCase", !1),
    [F, D, $] = Qa("phone_caseColor", "#ffffff"),
    [P, z, O] = Qa("phone_caseWidth", 6),
    [Z, K] = Qa("phone_caseSize", { width: 393, height: 852 }),
    [q, V, ne] = Qa("phone_showDock", !0),
    [le, ie, X] = Qa("phone_blurStyle", "glass"),
    [je, xe, ye] = Qa("phone_weatherEffect", "none"),
    [R, oe, ee] = Qa("phone_globalCss", ""),
    [H, Y, U] = Qa("phone_chatUiTheme", "apricot"),
    [ce, pe] = l.useState(!1),
    [se, Te] = l.useState(null),
    [ke, W] = l.useState(!1),
    [ue, re] = l.useState(null),
    [he, ge, J] = Qa("phone_widgetData", {}),
    [G, we] = l.useState(0);
  l.useEffect(() => {
    if (!J) return;
    const de = z5("widget-profile-card");
    de != null &&
      de.html &&
      ge((Me) => {
        const et = Me["widget-profile-card"],
          Ct = (et == null ? void 0 : et.html) != null ? String(et.html) : "",
          Dt = Ct.includes("pc4-preset-v2");
        return !Ct.trim() ||
          (!Dt &&
            (Ct.includes("与聊天") ||
              Ct.includes("与我的资料同步") ||
              Ct.includes("我的资料同步") ||
              Ct.includes("聊天 · 我的资料") ||
              Ct.includes("小组件 · 仅保存在") ||
              Ct.includes("小组件 · 我的资料") ||
              Ct.includes("个性签名（与聊天") ||
              Ct.includes("个性签名（在桌面卡片上点击编辑）")))
          ? {
              ...Me,
              "widget-profile-card": {
                name: u0["widget-profile-card"],
                size: de.size || "4x4",
                html: de.html,
                css: typeof de.css == "string" ? de.css : "",
              },
            }
          : Me;
      });
  }, [J, ge]);
  const [Q, ve] = l.useState(!1),
    [Ve, Ae] = l.useState({ version: "", content: "" }),
    [te, Se] = l.useState(null),
    Fe = l.useRef(null),
    [$e, tt, Xe] = Qa("phone_uiStyle", "cyber-zen"),
    ht = "cyber-zen",
    Pe = tt,
    [ut, _t, Ee] = Qa("phone_userProfile", { name: "User", avatar: "" });
  l.useEffect(() => {
    Ee &&
      ut.avatar ===
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" &&
      _t((de) => ({ ...de, avatar: "" }));
  }, [Ee, ut, _t]);
  const [fe, He, Ie] = Qa("phone_apiConfig", {
      endpoint: "",
      key: "",
      model: "",
      temperature: 0.7,
      networkStableModeEnabled: !1,
      chatPreferStreamEnabled: !1,
      backupEndpoint: "",
      backupKey: "",
      backupModel: "",
      backupTemperature: 0.7,
      backupEndpointAutoSwitchEnabled: !1,
      novelImageKey: "",
      novelImageEndpoint: "",
    }),
    [Ce, Re, De] = Qa("phone_chatConfig", {
      momentsLimit: 5,
      contextLimit: 100,
      autoSummaryEnabled: !1,
      summaryThreshold: 20,
    }),
    [at, ft, vt] = Qa("phone_presets", []),
    [Oe, Qe, Ye] = Qa("phone_ttsConfig", {
      provider: "elevenlabs",
      elevenlabs: { key: "", voiceId: "" },
      minimax: { groupId: "", apiKey: "" },
    }),
    [Ze, Ue] = Qa("phone_amapWebKey", "");
  (l.useEffect(() => {
    typeof window < "u" && (window.__AMAP_WEB_KEY__ = Ze || "");
  }, [Ze]),
    l.useEffect(() => {
      (async () => {
        (await be.get("settings_keep_alive", !1)) && DS(!0);
      })();
    }, []),
    l.useEffect(() => {
      const de = () => {
          B5();
        },
        Me = setInterval(de, 6e4);
      de();
      const et = () => {
          (typeof document < "u" && document.visibilityState !== "visible") ||
            de();
        },
        Ct = () => {
          de();
        };
      (document.addEventListener("visibilitychange", et),
        window.addEventListener("focus", et),
        window.addEventListener("pageshow", et),
        window.addEventListener("online", Ct));
      let Dt;
      const Mt = () => {
        (clearTimeout(Dt),
          (Dt = setTimeout(() => {
            B5();
          }, 400)));
      };
      return (
        window.addEventListener("phone-github-cloud-config-changed", Mt),
        () => {
          (clearInterval(Me),
            clearTimeout(Dt),
            document.removeEventListener("visibilitychange", et),
            window.removeEventListener("focus", et),
            window.removeEventListener("pageshow", et),
            window.removeEventListener("online", Ct),
            window.removeEventListener(
              "phone-github-cloud-config-changed",
              Mt,
            ));
        }
      );
    }, []),
    l.useEffect(() => {
      const de = (Me) => {
        const et = Me.detail;
        !et ||
          typeof et.ok != "boolean" ||
          (et.ok
            ? Se({
                ok: !0,
                folder: et.folder,
                runId: et.runId,
                backupTitle: et.backupTitle,
              })
            : Se({ ok: !1, error: et.error || "未知错误" }));
      };
      return (
        window.addEventListener("phone-github-scheduled-backup", de),
        () => window.removeEventListener("phone-github-scheduled-backup", de)
      );
    }, []));
  const me = "main",
    jt = "";
  l.useEffect(() => {
    (async () => {
      try {
        const Me = F1,
          et = await be.get("last_viewed_version");
        if (Me !== et) {
          const Ct = P5.find((Dt) => Dt.version === Me) || P5[0];
          Ct && (Ae({ version: Me, content: Ct.content }), ve(!0));
        }
      } catch {}
    })();
  }, [me, jt]);
  const Gt = async () => {
      (ve(!1), await be.set("last_viewed_version", F1));
    },
    Pt = l.useRef(null),
    Wt = l.useRef(null),
    ct = l.useRef(null),
    Kt = l.useRef(null),
    fs = l.useRef(0),
    [gt, ae] = l.useState(0),
    [nt, It] = l.useState(!1),
    Xt = l.useRef(null),
    bs = l.useRef(null),
    ss = l.useRef(null),
    _s = l.useRef(null),
    qs = l.useRef(!1),
    Bs = l.useCallback(
      (de) => {
        de === gt ||
          nt ||
          (It(!0),
          ae(de),
          Xt.current && clearTimeout(Xt.current),
          (Xt.current = setTimeout(() => {
            (It(!1), (Xt.current = null));
          }, 620)));
      },
      [gt, nt],
    ),
    Js = (de) => {
      if (
        ((Pt.current = de.targetTouches[0].clientX),
        (ct.current = de.targetTouches[0].clientY),
        (Wt.current = null),
        (Kt.current = null),
        (fs.current = performance.now()),
        (_s.current = null),
        (qs.current = !1),
        de.touches.length === 2
          ? (bs.current = {
              y1: de.touches[0].clientY,
              y2: de.touches[1].clientY,
            })
          : (bs.current = null),
        de.touches.length === 1)
      ) {
        const Me = de.currentTarget.getBoundingClientRect();
        de.targetTouches[0].clientY - Me.top < 80 &&
          (ss.current = setTimeout(() => {
            (W(!0), navigator.vibrate && navigator.vibrate(50));
          }, 500));
      }
    },
    Xs = (de) => {
      if (
        ((Wt.current = de.targetTouches[0].clientX),
        (Kt.current = de.targetTouches[0].clientY),
        Pt.current !== null && ct.current !== null)
      ) {
        const Me = Wt.current - Pt.current,
          et = Kt.current - ct.current;
        if (!_s.current) {
          const Ct = Math.abs(Me),
            Dt = Math.abs(et);
          (Ct > 8 || Dt > 8) && (_s.current = Ct > Dt ? "x" : "y");
        }
        !Ke && _s.current === "x" && de.preventDefault();
      }
      if (
        (ss.current &&
          Math.hypot(
            de.targetTouches[0].clientX - Pt.current,
            de.targetTouches[0].clientY - ct.current,
          ) > 10 &&
          (clearTimeout(ss.current), (ss.current = null)),
        bs.current && de.touches.length === 2)
      ) {
        const Me = de.touches[0].clientY,
          et = de.touches[1].clientY,
          Ct = Me - bs.current.y1,
          Dt = et - bs.current.y2;
        Ct > 60 &&
          Dt > 60 &&
          (W(!0),
          (bs.current = null),
          navigator.vibrate && navigator.vibrate(50));
      }
    },
    gn = () => {
      if (
        (ss.current && (clearTimeout(ss.current), (ss.current = null)),
        ct.current !== null && Kt.current !== null && ct.current - Kt.current,
        !Ke &&
          !qs.current &&
          _s.current === "x" &&
          Pt.current !== null &&
          Wt.current !== null)
      ) {
        const de = Pt.current - Wt.current,
          Me = Math.max(1, performance.now() - fs.current),
          ws = Math.abs(de) / Me >= 0.42 ? 28 : 56,
          Ls = de > ws,
          Ot = de < -ws;
        (Ls && gt === 0 && (Bs(1), (qs.current = !0)),
          Ot && gt === 1 && (Bs(0), (qs.current = !0)));
      }
      ((Pt.current = null),
        (Wt.current = null),
        (ct.current = null),
        (Kt.current = null),
        (fs.current = 0),
        (bs.current = null),
        (_s.current = null),
        (qs.current = !1));
    },
    sn = (de) => {
      if (Fe.current) {
        const Me = Fe.current.getBoundingClientRect(),
          et = de.clientX - Me.left,
          Ct = de.clientY - Me.top;
        (Fe.current.style.setProperty("--mouse-x", `${et}px`),
          Fe.current.style.setProperty("--mouse-y", `${Ct}px`));
      }
    };
  (l.useEffect(
    () => () => {
      Xt.current && (clearTimeout(Xt.current), (Xt.current = null));
    },
    [],
  ),
    l.useEffect(() => {
      const de = document.documentElement;
      if (a.type === "custom" && a.url) {
        de.style.setProperty(
          "--phone-font-ui",
          "'CustomFont', system-ui, sans-serif",
        );
        const Me = document.createElement("style");
        return (
          (Me.innerHTML = `
        @font-face {
          font-family: 'CustomFont';
          src: url('${a.url}');
        }
        body, .font-sans, .font-serif, .font-mono {
          font-family: 'CustomFont', sans-serif !important;
        }
      `),
          document.head.appendChild(Me),
          () => {
            (de.style.removeProperty("--phone-font-ui"),
              document.head.removeChild(Me));
          }
        );
      }
      de.style.removeProperty("--phone-font-ui");
    }, [a]));
  const ln = "phone-app-px-text-scale",
    rn = "phone-app-font-decl-scale",
    wt = 16,
    xs = (de) => {
      const Me = document.body || document.head || document.documentElement;
      !Me || !de || Me.appendChild(de);
    };
  l.useEffect(() => {
    let de = document.getElementById(ln);
    de || ((de = document.createElement("style")), (de.id = ln), xs(de));
    const Me = (rs) =>
        typeof Hi < "u" && typeof Hi.escape == "function"
          ? `.${Hi.escape(rs)}`
          : `.${rs.replace(/\[/g, "\\[").replace(/\]/g, "\\]")}`,
      et = ".phone-font-scale-root",
      Ct = [];
    for (let rs = 8; rs <= 64; rs += 0.5) {
      const gs = Number.isInteger(rs) ? String(rs) : rs.toFixed(1),
        ps = `text-[${gs}px]`;
      (Ct.push(
        `${et} ${Me(ps)} { font-size: calc(${gs}px * var(--app-font-scale, 1)) !important; }`,
      ),
        Ct.push(
          `${et} [style*="font-size: ${gs}px"], ${et} [style*="font-size:${gs}px"] { font-size: calc(${gs}px * var(--app-font-scale, 1)) !important; }`,
        ));
    }
    (xs(de),
      (de.textContent = Ct.join(`
`)));
    let Dt = document.getElementById(rn);
    Dt || ((Dt = document.createElement("style")), (Dt.id = rn), xs(Dt));
    const Mt = (rs) =>
        rs
          .split(",")
          .map((gs) => gs.trim())
          .filter(Boolean)
          .map((gs) => `${et} ${gs}`)
          .join(", "),
      Ut = (rs) => {
        var ps, Is;
        const gs = [];
        for (const As of Array.from(rs || []))
          if (As) {
            if (As.type === CSSRule.STYLE_RULE) {
              const Ks = String(As.selectorText || "").trim();
              if (
                !Ks ||
                /(^|[\s>+~.#:[\]-])(chat-|icity-|message-card|forward-chat|ta-|gasha-)/i.test(
                  Ks,
                )
              )
                continue;
              const on = Mt(Ks);
              if (!on) continue;
              const tn = String(
                  ((ps = As.style) == null
                    ? void 0
                    : ps.getPropertyValue("font-size")) || "",
                ).trim(),
                dn = /^(-?[0-9]+(?:\.[0-9]+)?)px$/.exec(tn);
              if (dn) {
                const Fn = dn[1];
                gs.push(
                  `${on} { font-size: calc(${Fn}px * var(--app-font-scale, 1)) !important; }`,
                );
                continue;
              }
              const yn = /^(-?[0-9]+(?:\.[0-9]+)?)rem$/.exec(tn);
              if (yn) {
                const Fn = yn[1];
                gs.push(
                  `${on} { font-size: calc(${Fn}rem * var(--app-font-scale, 1)) !important; }`,
                );
                continue;
              }
              const va = String(
                  ((Is = As.style) == null
                    ? void 0
                    : Is.getPropertyValue("font")) || "",
                ).trim(),
                Bn = /(?:^|\s)(-?[0-9]+(?:\.[0-9]+)?)px(?:\s*\/|\s)/.exec(va);
              if (Bn) {
                const Fn = Bn[1];
                gs.push(
                  `${on} { font-size: calc(${Fn}px * var(--app-font-scale, 1)) !important; }`,
                );
                continue;
              }
              const Ea = /(?:^|\s)(-?[0-9]+(?:\.[0-9]+)?)rem(?:\s*\/|\s)/.exec(
                va,
              );
              if (Ea) {
                const Fn = Ea[1];
                gs.push(
                  `${on} { font-size: calc(${Fn}rem * var(--app-font-scale, 1)) !important; }`,
                );
              }
              continue;
            }
            if (
              As.type === CSSRule.MEDIA_RULE ||
              As.type === CSSRule.SUPPORTS_RULE
            ) {
              const Ks = Ut(As.cssRules);
              if (!Ks.length) continue;
              As.type === CSSRule.MEDIA_RULE
                ? gs.push(`@media ${As.conditionText} {
${Ks.join(`
`)}
}`)
                : gs.push(`@supports ${As.conditionText} {
${Ks.join(`
`)}
}`);
            }
          }
        return gs;
      },
      ws = () => {
        var ps, Is, As, Ks;
        const rs = Array.from(document.styleSheets || []),
          gs = [];
        for (const on of rs) {
          const tn = String(
              ((ps = on == null ? void 0 : on.ownerNode) == null
                ? void 0
                : ps.id) || "",
            ),
            dn = String(
              ((As =
                (Is = on == null ? void 0 : on.ownerNode) == null
                  ? void 0
                  : Is.getAttribute) == null
                ? void 0
                : As.call(Is, "data-vite-dev-id")) || "",
            ),
            yn = String(
              (on == null ? void 0 : on.href) ||
                ((Ks = on == null ? void 0 : on.ownerNode) == null
                  ? void 0
                  : Ks.href) ||
                "",
            );
          if (
            !(
              tn === ln ||
              tn === rn ||
              tn === "chat-app-beautify-custom-profile"
            ) &&
            !(
              tn.startsWith("chat-app-") ||
              /[\\/]src[\\/]apps[\\/]ChatApp[\\/]/i.test(dn) ||
              /[\\/]src[\\/]apps[\\/]ChatApp[\\/]/i.test(yn)
            )
          )
            try {
              gs.push(...Ut(on.cssRules));
            } catch {}
        }
        (xs(Dt),
          (Dt.textContent = gs.join(`
`)));
      };
    ws();
    const Ls = (rs) => {
        if (
          !rs ||
          rs.nodeType !== Node.ELEMENT_NODE ||
          (rs.tagName !== "STYLE" && rs.tagName !== "LINK")
        )
          return !1;
        const gs = String(rs.id || "");
        return gs !== ln && gs !== rn;
      },
      Ot = new MutationObserver((rs) => {
        rs.some((ps) => {
          var Is;
          return ps.type === "characterData"
            ? Ls((Is = ps.target) == null ? void 0 : Is.parentElement)
            : ps.type === "childList"
              ? Array.from(ps.addedNodes || []).some(Ls) ||
                Array.from(ps.removedNodes || []).some(Ls)
              : !1;
        }) && ws();
      });
    return (
      Ot.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        characterData: !0,
      }),
      () => {
        Ot.disconnect();
      }
    );
  }, []);
  const st = Uy.map((de) => {
      var Mt;
      const Me = (Mt = o[de.id]) == null ? void 0 : Mt.name,
        et = ad[de.id][t] || ad[de.id].en,
        Ct = new Set(["抖音", "Douyin", "douyin", "抖音短视频"]);
      let Dt = Me || et;
      return (
        de.id === "douyin" && Me && Ct.has(String(Me).trim()) && (Dt = et),
        { ...de, name: Dt }
      );
    }),
    $t = (de, Me) => {
      const et = [...de];
      for (; et.length < ex; ) et.push(`${zr}${Me}-${et.length}`);
      return et;
    },
    Ft = {
      "page-0": $t(
        [
          "chat",
          "notes",
          "calendar",
          "clock",
          "couple",
          "book",
          "ai_phone",
          "meet",
        ],
        0,
      ),
      "page-1": $t(["mail", "camera", "calculator"], 1),
      dock: ["settings", "messages", "photos", "phone"],
    },
    es = [
      "ai_phone",
      "couple",
      "widget-photo-frame-tr",
      "douyin",
      "camera",
      "widget-photo-frame-bl",
      "meet",
      "book",
      "calculator",
      "reading",
      `${zr}0-tail-0`,
      `${zr}0-tail-1`,
      `${zr}0-tail-2`,
      `${zr}0-tail-3`,
      `${zr}0-tail-4`,
    ],
    At = () => {
      const et = [
        "widget-profile-card",
        ...["echo", "leting", "bubble", "meihua_share", "encounter", "help"],
        "widget-capsule-status-2x1",
      ];
      for (; et.length < 13; ) et.push(`${zr}1-${et.length}`);
      return et;
    },
    Jt = {
      "page-0": ["widget-photo-frame", ...es],
      "page-1": At(),
      dock: ["settings", "chat", "mail", "phone"],
    };
  Qa("phone_layout_items", Ft);
  const [Vt, qt, Lt] = Qa("phone_layout_items_cyber_zen_v9", Jt),
    Qt = Vt,
    js = qt,
    cs = Lt;
  l.useEffect(() => {
    var de;
    if (cs) {
      let Me = !1;
      const et = { ...Qt },
        Ct = new Set();
      if (!et.dock || et.dock.length !== 4) {
        const Ut = [...(et.dock || []).slice(0, 4)];
        for (; Ut.length < 4; ) Ut.push(`${zr}dock-${Date.now()}-${Ut.length}`);
        ((et.dock = Ut), (Me = !0));
      }
      if (
        (["dock", "page-0", "page-1"].forEach((Mt) => {
          et[Mt] &&
            (et[Mt] = et[Mt].map((Ut, ws) => {
              let Ls = Ut === "photos_dock" ? "photos" : Ut;
              if (Ls === "music")
                return ((Me = !0), `${zr}${Mt}-${ws}-${Date.now()}`);
              if (Ls === "weather")
                return ((Me = !0), `${zr}${Mt}-${ws}-${Date.now()}`);
              if (Ls === "desktop_placeholder")
                return ((Me = !0), `${zr}${Mt}-${ws}-${Date.now()}`);
              if (!Ls.startsWith("widget-") && !Ls.startsWith(zr)) {
                if (Ct.has(Ls))
                  return ((Me = !0), `${zr}${Mt}-${ws}-${Date.now()}`);
                Ct.add(Ls);
              }
              return (Ls !== Ut && (Me = !0), Ls);
            }));
        }),
        !et["page-1"] || !Array.isArray(et["page-1"]))
      ) {
        et["page-1"] = [];
        for (let Mt = 0; Mt < ex; Mt++) et["page-1"].push(`${zr}1-${Mt}`);
        Me = !0;
      }
      const Dt = et["page-1"];
      Dt &&
        Dt.length === 28 &&
        !((de = Dt[0]) != null && de.startsWith("widget-")) &&
        Dt.slice(0, 16).every((Mt) =>
          Mt == null ? void 0 : Mt.startsWith(zr),
        ) &&
        Dt[16] === "echo" &&
        Dt[17] === "leting" &&
        Dt[18] === "bubble" &&
        Dt[19] === "meihua_share" &&
        Dt[20] === "help" &&
        ((et["page-1"] = At()), (Me = !0));
      {
        const Mt = Object.values(et)
            .flat()
            .some((ws) => ws === "reading"),
          Ut = Array.isArray(et["page-0"]) ? [...et["page-0"]] : null;
        if (!Mt && Ut) {
          const ws = Ut.findIndex((Ls) => Ls === "calculator");
          if (ws !== -1 && ws + 1 < Ut.length) {
            const Ls = Ut[ws + 1];
            typeof Ls == "string" &&
              Ls.startsWith(zr) &&
              ((Ut[ws + 1] = "reading"), (et["page-0"] = Ut), (Me = !0));
          }
        }
      }
      ([
        "ai_phone",
        "meet",
        "echo",
        "leting",
        "bubble",
        "meihua_share",
        "encounter",
        "help",
        "reading",
      ].forEach((Mt) => {
        if (
          !Object.values(et)
            .flat()
            .some((ws) => ws === Mt)
        ) {
          let ws = !1;
          const Ls =
            Mt === "help"
              ? ["page-1", "page-0"]
              : Mt === "echo" ||
                  Mt === "leting" ||
                  Mt === "bubble" ||
                  Mt === "meihua_share" ||
                  Mt === "encounter"
                ? ["page-1", "page-0"]
                : ["page-0", "page-1"];
          for (const Ot of Ls) {
            if (!et[Ot]) continue;
            if (Mt === "echo" && Ot === "page-1" && et[Ot].length > 1) {
              const gs = et[Ot][1];
              if (gs && gs.startsWith(zr)) {
                ((et[Ot] = [...et[Ot]]),
                  (et[Ot][1] = Mt),
                  (Me = !0),
                  (ws = !0));
                break;
              }
            }
            const rs = et[Ot].findIndex((gs) => gs.startsWith(zr));
            if (rs !== -1) {
              ((et[Ot] = [...et[Ot]]), (et[Ot][rs] = Mt), (Me = !0), (ws = !0));
              break;
            }
          }
          if (!ws) {
            const Ot = Ls[0];
            (et[Ot]
              ? et[Ot].push(Mt)
              : (et["page-0"] || (et["page-0"] = []), et["page-0"].push(Mt)),
              (Me = !0));
          }
        }
      }),
        Me && js(et));
      return;
    }
  }, [cs, ht]);
  const Ne = (de) => {
      var Ct, Dt;
      if (de.startsWith("widget-")) {
        if (zd[de]) {
          const Mt = zd[de],
            Ut = he[de],
            ws =
              Mt.component === "ProfileCard4x4" ||
              Mt.component === "CapsuleStatus2x1" ||
              Mt.component === "StudioGallery4x2" ||
              Mt.component === "PhotoFrame" ||
              Mt.component === "AcetateOverlay2x2";
          if (
            Ut &&
            typeof Ut.html == "string" &&
            Ut.html.trim().length > 0 &&
            (!ws || Ut.customHtmlOverride === !0)
          )
            return {
              id: de,
              isWidget: !0,
              widgetData: {
                type: "custom",
                size: Ut.size || Mt.size,
                html: Ut.html,
                css: typeof Ut.css == "string" ? Ut.css : "",
              },
            };
          const Ot = (Ut == null ? void 0 : Ut.component) || Mt.component;
          return {
            id: de,
            isWidget: !0,
            widgetData: {
              ...Mt,
              type: "builtin",
              component: Ot,
              ...(Ut != null && Ut.size ? { size: Ut.size } : {}),
              designSize: Mt.size,
            },
          };
        }
        return {
          id: de,
          isWidget: !0,
          widgetData: he[de] || {
            size: "1x1",
            html: "<div>小组件</div>",
            css: "",
          },
        };
      }
      if (de.startsWith(zr)) return { id: de, isEmpty: !0 };
      let Me = de;
      if ((de === "photos_dock" && (Me = "photos"), Me === "weather"))
        return { id: de, isEmpty: !0 };
      const et = st.find((Mt) => Mt.id === Me);
      return et
        ? {
            ...et,
            id: de,
            customIcon: (Ct = o[Me]) == null ? void 0 : Ct.iconUrl,
            removeRounded: (Dt = o[Me]) == null ? void 0 : Dt.removeRounded,
          }
        : { id: de, isEmpty: !0 };
    },
    Je = (de) => {
      if (!de) return null;
      if (zd[de]) {
        const Me = zd[de],
          et = he[de] || {},
          Ct = et.component || Me.component,
          Dt = z5(de);
        if (et.customHtmlOverride === !0)
          return {
            ...Me,
            id: de,
            size: (et == null ? void 0 : et.size) ?? Me.size,
            designSize: Me.size,
            name: et.name || u0[de] || Me.component,
            html:
              (et.html != null && String(et.html).trim()
                ? et.html
                : Dt == null
                  ? void 0
                  : Dt.html) || "",
            css:
              et.css !== void 0 ? et.css : (Dt == null ? void 0 : Dt.css) || "",
            extraData: {},
          };
        if (Dt) {
          const Mt = et.html && String(et.html).trim().length > 0;
          return {
            ...Me,
            id: de,
            size: (et == null ? void 0 : et.size) ?? Me.size,
            designSize: Me.size,
            name: et.name || u0[de] || Me.component,
            html: Mt ? et.html : Dt.html,
            css: Mt && et.css !== void 0 ? et.css : Dt.css,
            extraData: { type: "builtin", component: Ct },
          };
        }
        return {
          ...Me,
          id: de,
          size: (et == null ? void 0 : et.size) ?? Me.size,
          designSize: Me.size,
          name: u0[de] || Me.component,
          html: `<div class="builtin-widget-placeholder">内置小组件：${Ct}</div>`,
          css: ".builtin-widget-placeholder { display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 12px; }",
          extraData: { type: "builtin", component: Ct },
        };
      }
      return { ...he[de], id: de };
    },
    [St, Be] = l.useMemo(() => {
      const de = Qt["page-0"] || [],
        Me = Qt["page-1"] || [],
        et = de.indexOf("help"),
        Ct = Me.indexOf("help"),
        Dt = Me.indexOf("meihua_share"),
        Mt = Dt >= 0 ? Dt + 1 : -1;
      return et >= 0 && Mt >= 0 && Mt < Me.length
        ? [
            de.map((Ut, ws) => (ws === et ? Me[Mt] : Ut)),
            Me.map((Ut, ws) => (ws === Mt ? "help" : Ut)),
          ]
        : Ct >= 0 && Ct !== Mt && Mt >= 0 && Mt < Me.length
          ? [
              de,
              Me.map((Ut, ws) =>
                ws === Mt ? "help" : ws === Ct ? Me[Mt] : Ut,
              ),
            ]
          : [de, Me];
    }, [Qt]),
    [Ke, Nt] = l.useState(null),
    [bt, ns] = l.useState(null),
    [Ge, Le] = l.useState([]),
    [_e, yt] = l.useState(null);
  l.useEffect(() => {
    const Me = new URLSearchParams(window.location.search).get("jilu_creator");
    if (!Me || !Me.trim()) return;
    const et = st.find((Dt) => Dt.id === "meihua_share");
    et && Nt({ ...et, initialCreatorId: Me.trim().toLowerCase() });
    const Ct = new URL(window.location.href);
    (Ct.searchParams.delete("jilu_creator"),
      window.history.replaceState(
        {},
        "",
        Ct.pathname + (Ct.search || "") || "?",
      ));
  }, []);
  const [rt, ze] = l.useState(null),
    [lt, it] = l.useState(null),
    Ht = l.useRef(null),
    is = l.useRef(null),
    os = l.useRef(null),
    as = l.useRef(null),
    [vs, ts] = l.useState(!1),
    [ys, Vs] = l.useState(!1),
    [pt, qe] = l.useState(!1),
    dt = l.useCallback(() => {
      var Me;
      window.dispatchEvent(
        new CustomEvent("phone_open_chat_with_contact", {
          detail: { contactId: io },
        }),
      );
      const de = Uy.find((et) => et.id === "chat");
      de &&
        (Nt({ ...de, name: (Me = ad.chat) == null ? void 0 : Me.zh }), Vs(!0));
    }, []),
    xt = l.useCallback(() => {
      qe(!0);
    }, []);
  l.useEffect(() => {
    const de = (Me) => {
      var Ut;
      const {
        appId: et,
        helpTutorialId: Ct,
        openHelpAssistant: Dt,
      } = Me.detail || {};
      if (et === "chat" && Dt) {
        xt();
        return;
      }
      if (et !== "help") return;
      Ct &&
        (sessionStorage.setItem("help_pending_tutorial_id", String(Ct)),
        window.dispatchEvent(new CustomEvent("phone_help_tutorial_pending")));
      const Mt = Uy.find((ws) => ws.id === "help");
      Mt &&
        (Nt({ ...Mt, name: (Ut = ad.help) == null ? void 0 : Ut.zh }), Vs(!0));
    };
    return (
      window.addEventListener("phone_launch_app", de),
      () => window.removeEventListener("phone_launch_app", de)
    );
  }, [xt]);
  const zt = Ph(
      ju(T3, { activationConstraint: { distance: 14 } }),
      ju(I3, { activationConstraint: { delay: 220, tolerance: 10 } }),
    ),
    ms = l.useCallback((de) => {
      const Me = s9(de);
      return Me.length > 0 ? Me : y3(de);
    }, []),
    Cs = (de) => {
      (ze(de.active.id), Vs(!0), (os.current = null));
      const Me = Ht.current;
      if (Me) {
        const Mt = (Me.clientWidth - 48) / 4,
          Ut = (Me.clientHeight - 6 * 24) / 7;
        it({ w: Mt, h: Ut });
      } else it(null);
      const et = (Ct) => {
        const Dt = is.current;
        if (!Dt) return;
        const Mt = Dt.getBoundingClientRect(),
          Ut = Ct.clientX,
          ws = 0.05,
          Ls = Ut < Mt.left + Mt.width * ws,
          Ot = Ut > Mt.right - Mt.width * ws,
          rs = Ls ? 0 : Ot ? 1 : null;
        if (rs === null) {
          os.current = null;
          return;
        }
        os.current !== rs && ((os.current = rs), Bs(rs));
      };
      (window.addEventListener("pointermove", et, { passive: !0 }),
        (as.current = () => window.removeEventListener("pointermove", et)));
    },
    us = (de) => {
      var ws;
      const { active: Me, over: et } = de;
      if (!et) return;
      const Ct = Rt(Me.id),
        Dt = Rt(et.id) || et.id;
      if (!Ct || !Dt || Ct === Dt) return;
      const Mt = (Ls) => Ls === "page-0" || Ls === "page-1",
        Ut = ((ws = Qt[Dt]) == null ? void 0 : ws.indexOf(et.id)) ?? 0;
      if (Mt(Ct) && Mt(Dt)) {
        js((Ls) => {
          const Ot = (Ls[Ct] || []).filter((Is) => Is !== Me.id),
            rs = [...(Ls[Dt] || [])],
            gs = rs.indexOf(Me.id);
          gs !== -1 && rs.splice(gs, 1);
          const ps = Math.min(Ut, rs.length);
          return (rs.splice(ps, 0, Me.id), { ...Ls, [Ct]: Ot, [Dt]: rs });
        });
        return;
      }
      js((Ls) => {
        const Ot = [...Ls[Ct]],
          rs = [...Ls[Dt]],
          gs = Ot.indexOf(Me.id),
          ps = rs.indexOf(et.id),
          Is = Ot[gs];
        return (
          (Ot[gs] = rs[ps]),
          (rs[ps] = Is),
          { ...Ls, [Ct]: Ot, [Dt]: rs }
        );
      });
    },
    Rs = (de) => {
      const { active: Me, over: et } = de;
      if (!et) {
        (ze(null), Vs(!1));
        return;
      }
      const Ct = Rt(Me.id),
        Dt = Rt(et.id) || et.id;
      if (Ct && Dt && Ct === Dt) {
        const Mt = Qt[Ct].indexOf(Me.id),
          Ut = Qt[Dt].indexOf(et.id);
        Mt !== Ut &&
          js((ws) => {
            const Ls = [...ws[Ct]],
              Ot = Ls[Mt];
            return ((Ls[Mt] = Ls[Ut]), (Ls[Ut] = Ot), { ...ws, [Ct]: Ls });
          });
      }
      (ze(null),
        Vs(!1),
        it(null),
        as.current && (as.current(), (as.current = null)));
    },
    Rt = (de) =>
      de in Qt
        ? de
        : Object.keys(Qt).find(
            (Me) => Array.isArray(Qt[Me]) && Qt[Me].includes(de),
          ),
    Es = (de) => {
      if (
        de.id !== "desktop_placeholder" &&
        !rt &&
        !de.isEmpty &&
        !de.isWidget
      ) {
        if ((bt == null ? void 0 : bt.id) === de.id) ur();
        else {
          const Me = Ge.findIndex((et) => et.id === de.id);
          if (Me !== -1) {
            const et = [...Ge];
            (et.splice(Me, 1), Ke && et.push(Ke), Le(et), Nt(de));
          } else Nt(de);
        }
        Vs(!0);
      }
    },
    nn = (de) => {
      (re(de.id), Te(null), pe(!0));
    },
    Hs = l.useCallback(() => {
      (pe(!1), Te(null));
    }, []),
    cn = l.useCallback(() => {
      (re(null), Te(null), pe(!0));
    }, []),
    fn = l.useCallback(() => {
      (re("widget-profile-card"), Te(null), pe(!0));
    }, []),
    Rn = l.useCallback(() => {
      (re("widget-capsule-status-2x1"), Te("library"), pe(!0));
    }, []),
    Qn = (de) => {
      const Me = ue && ue.startsWith("widget-") ? ue : `widget-${Date.now()}`,
        et =
          ue && zd[ue]
            ? {
                name: de.name,
                size: de.size,
                html: de.html,
                css: de.css,
                customHtmlOverride: de.customHtmlOverride === !0,
                ...(de.type === "builtin" && de.component
                  ? { type: de.type, component: de.component }
                  : {}),
              }
            : de;
      if ((ge((Ct) => ({ ...Ct, [Me]: et })), ue)) {
        if (Me !== ue) {
          const Ct = Rt(ue);
          Ct &&
            js((Dt) => ({
              ...Dt,
              [Ct]: Dt[Ct].map((Mt) => (Mt === ue ? Me : Mt)),
            }));
        }
      } else {
        let Ct = null,
          Dt = -1;
        const Mt = gt === 0 ? "page-0" : "page-1",
          Ut = gt === 0 ? "page-1" : "page-0",
          ws = [Mt, Ut];
        for (const Ls of ws)
          if (Qt[Ls]) {
            const Ot = Qt[Ls].findIndex((rs) => rs.startsWith(zr));
            if (Ot !== -1) {
              ((Ct = Ls), (Dt = Ot));
              break;
            }
          }
        (!Ct && Qt[Mt] && Qt[Mt].length < ex
          ? ((Ct = Mt), (Dt = Qt[Mt].length))
          : !Ct &&
            Qt[Ut] &&
            Qt[Ut].length < ex &&
            ((Ct = Ut), (Dt = Qt[Ut].length)),
          Ct != null &&
            Dt >= 0 &&
            js((Ls) => {
              const Ot = [...Ls[Ct]];
              return ((Ot[Dt] = Me), { ...Ls, [Ct]: Ot });
            }));
      }
      (pe(!1), re(null), Te(null));
    },
    ra = l.useCallback(() => {
      (ge({}), we((de) => de + 1));
    }, [ge]),
    _a = (de) => {
      de &&
        (ue === de && (pe(!1), re(null), Te(null)),
        js((Me) => {
          const et = { ...Me };
          let Ct = !1;
          return (
            Object.keys(et).forEach((Dt) => {
              if (Array.isArray(et[Dt])) {
                const Mt = et[Dt].indexOf(de);
                if (Mt !== -1) {
                  const Ut = [...et[Dt]],
                    ws = Dt === "dock" ? "dock" : Dt.split("-")[1] || "0";
                  ((Ut[Mt] =
                    `${zr}${ws}-${Date.now()}-${Math.floor(Math.random() * 1e3)}`),
                    (et[Dt] = Ut),
                    (Ct = !0));
                }
              }
            }),
            Ct ? et : Me
          );
        }),
        ge((Me) => {
          const et = { ...Me };
          return (delete et[de], et);
        }));
    },
    Ya = () => {
      (Nt(null), Vs(!1));
    },
    Fr = () => {
      const de = st.find((Me) => Me.id === "chat");
      de && Es(de);
    },
    kr = (de, Me) => {
      yt({ contactId: de, pageIndex: Me ?? 0 });
      const et = st.find((Ct) => Ct.id === "ai_phone");
      et && Es(et);
    },
    Oa = () => {
      Ke && (bt && Le((de) => [...de, bt]), ns(Ke), Nt(null));
    },
    ur = () => {
      if (bt)
        if (Ke) {
          const de = Ke;
          (Nt(bt), ns(de));
        } else (Nt(bt), ns(null));
    },
    mi = () => {
      if (Ke && bt) {
        const de = Ke;
        (Nt(bt), ns(de));
      }
    },
    ti = () => {
      bt && (Le((de) => [...de, bt]), ns(null));
    },
    pi = () => {
      (Ke ? Oa() : bt && ti(), W(!1));
    },
    ii = () => {
      (Nt(null), ns(null), Le([]), Vs(!1), W(!1));
    },
    Br =
      n &&
      i &&
      d &&
      p &&
      g &&
      v &&
      w &&
      k &&
      E &&
      T &&
      B &&
      $ &&
      O &&
      ne &&
      X &&
      ye &&
      ee &&
      U &&
      J &&
      Xe &&
      Ee &&
      Ie &&
      De &&
      vt &&
      Ye &&
      cs,
    kt = [
      ...Ge.map((de, Me) => ({
        ...de,
        mode: "background",
        instanceKey: de.id,
      })),
      bt ? { ...bt, mode: "floating", instanceKey: bt.id } : null,
      Ke ? { ...Ke, mode: "full", instanceKey: Ke.id } : null,
    ].filter(Boolean),
    Tt = (Number(C) || wt) / wt,
    Yt =
      typeof document < "u" &&
      document.documentElement.getAttribute("data-android-pwa") === "true";
  return e.jsx(bP, {
    children: e.jsx($P, {
      apiConfig: fe,
      chatConfig: Ce,
      ttsConfig: Oe,
      onInboundVoiceCallConnected: () => {
        const de = st.find((Me) => Me.id === "phone");
        de && Es(de);
      },
      children: e.jsxs(aO, {
        children: [
          e.jsx(GP, {}),
          e.jsx(ZP, {}),
          e.jsx(sO, {}),
          e.jsx(fW, {
            children: e.jsx(vte, {
              children: Br
                ? e.jsxs("div", {
                    ref: Fe,
                    onMouseMove: sn,
                    className: Xi(
                      "flex bg-[#F7F9FC] font-sans select-none relative",
                      I
                        ? "min-h-screen p-8 overflow-auto"
                        : "h-screen w-screen p-0 overflow-hidden",
                      Yt && !I && "h-[100dvh] min-h-[100dvh]",
                    ),
                    children: [
                      e.jsx(rne, {}),
                      e.jsx(Bse, {}),
                      e.jsxs("div", {
                        ref: Fe,
                        onTouchStart: Js,
                        onTouchMove: Xs,
                        onTouchEnd: gn,
                        className: Xi(
                          "phone-font-scale-root relative overflow-hidden bg-cover bg-center transition-all duration-300 m-auto",
                          I
                            ? "rounded-[55px] shadow-2xl ring-1 ring-black/5"
                            : "w-full h-full rounded-none border-none shadow-none",
                          !u &&
                            "bg-gradient-to-br from-[#f9f5f6] via-[#fcf0f4] to-[#f9f5f6]",
                        ),
                        style: {
                          backgroundImage: u ? `url(${u})` : void 0,
                          borderWidth: I ? `${P}px` : "0px",
                          borderColor: I ? F : "transparent",
                          borderStyle: "solid",
                          width: I ? `${Z.width}px` : "100%",
                          height: I ? `${Z.height}px` : "100%",
                          "--phone-font-scale": String(Tt),
                          "--app-font-scale": String(Tt),
                        },
                        children: [
                          e.jsx(kte, {
                            isIslandExpanded: vs,
                            setIsIslandExpanded: ts,
                            showStatusBar: m,
                            showDynamicIsland: b,
                            themeColor: _,
                            extendSafeArea: !I,
                          }),
                          e.jsx(one, {
                            isOpen: Q,
                            onClose: Gt,
                            version: Ve.version,
                            content: Ve.content,
                          }),
                          te &&
                            e.jsx("div", {
                              className:
                                "absolute inset-0 z-[220] flex items-center justify-center bg-black/35 p-4 pointer-events-auto",
                              children: e.jsxs("div", {
                                className:
                                  "w-full max-w-[min(100%,20rem)] rounded-xl border border-gray-200 bg-white p-5 shadow-2xl",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-center font-serif text-lg italic text-gray-900",
                                    children: te.ok
                                      ? "定时云备份成功"
                                      : "定时云备份失败",
                                  }),
                                  te.ok
                                    ? e.jsxs("p", {
                                        className:
                                          "mt-3 text-center text-sm leading-relaxed text-gray-700",
                                        children: [
                                          te.backupTitle &&
                                            e.jsx("span", {
                                              className:
                                                "block font-medium text-gray-900",
                                              children: te.backupTitle,
                                            }),
                                          e.jsx("span", {
                                            className:
                                              "mt-2 block text-xs text-gray-500 break-all font-mono",
                                            children: te.runId,
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "mt-2 block text-xs text-gray-400",
                                            children:
                                              "已上传到 GitHub 私有仓库",
                                          }),
                                        ],
                                      })
                                    : e.jsx("p", {
                                        className:
                                          "mt-3 text-center text-sm leading-relaxed text-red-700 break-words",
                                        children: te.error,
                                      }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => Se(null),
                                    className:
                                      "mt-5 w-full rounded-lg bg-gray-900 py-3 text-sm font-bold tracking-widest text-white hover:bg-gray-800",
                                    children: "知道了",
                                  }),
                                ],
                              }),
                            }),
                          je === "snow" && e.jsx(Pse, {}),
                          je === "rain" && e.jsx(Ose, {}),
                          R && e.jsx("style", { children: R }),
                          H && e.jsx("style", { children: m$(H) }),
                          e.jsxs("div", {
                            className: Xi(
                              "h-full w-full flex flex-col justify-between",
                              I ? "pt-16 px-5 pb-28" : "pt-12 px-4 pb-20",
                            ),
                            style: I
                              ? void 0
                              : { paddingTop: "max(3rem, 56px)" },
                            onMouseMove: sn,
                            onContextMenu: (de) => de.preventDefault(),
                            children: [
                              e.jsx(Os, {
                                children:
                                  ce &&
                                  e.jsx(Tse, {
                                    isOpen: ce,
                                    onClose: Hs,
                                    onSave: Qn,
                                    onDelete: _a,
                                    initialData: Je(ue),
                                    initialPanelTab: se,
                                    language: t,
                                    uiStyle: ht,
                                    showHomeIndicator: x,
                                    showStatusBar: m,
                                    editingWidgetId: ue,
                                    renderBuiltinPreview: (de, Me) => {
                                      var Dt, Mt;
                                      const Ct =
                                        (ue &&
                                          ((Dt = zd[ue]) == null
                                            ? void 0
                                            : Dt.size)) ||
                                        ((Mt = R0(Me.component)) == null
                                          ? void 0
                                          : Mt.defaultSize) ||
                                        Me.designSize ||
                                        Me.size;
                                      return e.jsx(B1, {
                                        designSize: Ct,
                                        size: Me.size || "1x1",
                                        children: e.jsx(U1, {
                                          id: de,
                                          widgetData: Me,
                                          onBuiltinProfileOpenStudio:
                                            de === "widget-profile-card"
                                              ? fn
                                              : void 0,
                                          onBuiltinCapsuleOpenLibrary:
                                            de === "widget-capsule-status-2x1"
                                              ? Rn
                                              : void 0,
                                        }),
                                      });
                                    },
                                  }),
                              }),
                              e.jsxs(Gh, {
                                sensors: zt,
                                collisionDetection: ms,
                                onDragStart: Cs,
                                onDragOver: us,
                                onDragEnd: Rs,
                                children: [
                                  e.jsxs(lne, {
                                    currentPage: gt,
                                    pagesContainerRef: is,
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "min-w-0 flex-[0_0_50%] h-full overflow-hidden px-1 box-border",
                                        children: e.jsx(du, {
                                          id: "page-0",
                                          items: Qt["page-0"],
                                          strategy: dm,
                                          children: e.jsx("div", {
                                            ref: Ht,
                                            className: Xi(
                                              "grid grid-cols-4 grid-rows-7 gap-x-4 h-full content-start",
                                              "gap-y-5 pt-1.5",
                                            ),
                                            children: Qt["page-0"].map(
                                              (de, Me) => {
                                                const et = St[Me],
                                                  Ct = Ne(et);
                                                return e.jsx(
                                                  By,
                                                  {
                                                    ...Ct,
                                                    onClick: () => Es(Ct),
                                                    onEdit: () => nn(Ct),
                                                    themeColor: _,
                                                    isDockItem: !1,
                                                    isOpen:
                                                      (Ke == null
                                                        ? void 0
                                                        : Ke.id) ===
                                                      (Ct == null
                                                        ? void 0
                                                        : Ct.id),
                                                    blurStyle: le,
                                                    uiStyle: ht,
                                                    appCustomizations: o,
                                                    onBuiltinProfileOpenStudio:
                                                      (Ct == null
                                                        ? void 0
                                                        : Ct.id) ===
                                                      "widget-profile-card"
                                                        ? fn
                                                        : void 0,
                                                    onBuiltinCapsuleOpenLibrary:
                                                      (Ct == null
                                                        ? void 0
                                                        : Ct.id) ===
                                                      "widget-capsule-status-2x1"
                                                        ? Rn
                                                        : void 0,
                                                  },
                                                  `page-0-${Me}-${G}`,
                                                );
                                              },
                                            ),
                                          }),
                                        }),
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "min-w-0 flex-[0_0_50%] h-full overflow-hidden px-1 box-border",
                                        children: e.jsx(du, {
                                          id: "page-1",
                                          items: Qt["page-1"],
                                          strategy: dm,
                                          children: e.jsx("div", {
                                            className: Xi(
                                              "grid grid-cols-4 grid-rows-7 gap-x-4 h-full content-start",
                                              "gap-y-5 pt-1.5",
                                            ),
                                            children: Qt["page-1"].map(
                                              (de, Me) => {
                                                const et = Be[Me],
                                                  Ct = Ne(et);
                                                return e.jsx(
                                                  By,
                                                  {
                                                    ...Ct,
                                                    onClick: () => Es(Ct),
                                                    onEdit: () => nn(Ct),
                                                    themeColor: _,
                                                    isDockItem: !1,
                                                    isOpen:
                                                      (Ke == null
                                                        ? void 0
                                                        : Ke.id) ===
                                                      (Ct == null
                                                        ? void 0
                                                        : Ct.id),
                                                    blurStyle: le,
                                                    uiStyle: ht,
                                                    appCustomizations: o,
                                                    onBuiltinProfileOpenStudio:
                                                      (Ct == null
                                                        ? void 0
                                                        : Ct.id) ===
                                                      "widget-profile-card"
                                                        ? fn
                                                        : void 0,
                                                    onBuiltinCapsuleOpenLibrary:
                                                      (Ct == null
                                                        ? void 0
                                                        : Ct.id) ===
                                                      "widget-capsule-status-2x1"
                                                        ? Rn
                                                        : void 0,
                                                  },
                                                  `page-1-${Me}-${G}`,
                                                );
                                              },
                                            ),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: Xi(
                                      "absolute bottom-7 left-4 right-4 z-30 overflow-hidden transition-all duration-300",
                                      q
                                        ? "h-24 rounded-[32px] grid grid-cols-4 gap-4 px-4 items-center"
                                        : "h-[76px] rounded-[32px] grid grid-cols-4 gap-4 px-4 items-center",
                                      q
                                        ? "bg-white/10 backdrop-blur-xl border-t border-white/20"
                                        : "bg-transparent",
                                    ),
                                    children: [
                                      q && le === "glass" && ht !== "cyber-zen",
                                      e.jsx(du, {
                                        id: "dock",
                                        items: Qt.dock,
                                        strategy: dm,
                                        children: Qt.dock.map((de) => {
                                          var Me;
                                          return e.jsx(
                                            By,
                                            {
                                              ...Ne(de),
                                              onClick: () => Es(Ne(de)),
                                              onEdit: () => nn(Ne(de)),
                                              themeColor: _,
                                              isDockItem: !0,
                                              isOpen:
                                                (Ke == null
                                                  ? void 0
                                                  : Ke.id) ===
                                                ((Me = Ne(de)) == null
                                                  ? void 0
                                                  : Me.id),
                                              blurStyle: le,
                                              uiStyle: ht,
                                              appCustomizations: o,
                                            },
                                            `${de}-${G}`,
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsx(cD, {
                                    dropAnimation: {
                                      duration: 160,
                                      easing:
                                        "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
                                      sideEffects: R3({
                                        styles: { active: { opacity: "0.6" } },
                                      }),
                                    },
                                    children: rt
                                      ? (() => {
                                          var Is, As;
                                          const de = Ne(rt);
                                          if (de.isEmpty) return null;
                                          const Me = 16,
                                            et = 24,
                                            Ct =
                                              (o == null
                                                ? void 0
                                                : o.globalIconSize) ?? 62,
                                            Dt =
                                              (lt == null ? void 0 : lt.w) ??
                                              Ct,
                                            Mt =
                                              (lt == null ? void 0 : lt.h) ??
                                              Ct,
                                            Ut =
                                              de.isWidget &&
                                              ((Is = de.widgetData) == null
                                                ? void 0
                                                : Is.size),
                                            ws =
                                              ((As = de.widgetData) == null
                                                ? void 0
                                                : As.size) || "1x1",
                                            [Ls, Ot] = ws
                                              .split("x")
                                              .map(Number),
                                            rs = Ut
                                              ? Ls * Dt + (Ls - 1) * Me
                                              : Ct,
                                            gs = Ut
                                              ? Ot * Mt + (Ot - 1) * et
                                              : Ct,
                                            ps = {
                                              width: rs,
                                              height: gs,
                                              minWidth: rs,
                                              minHeight: gs,
                                            };
                                          return e.jsx("div", {
                                            className:
                                              "bg-white/50 backdrop-blur-md rounded-[16px] flex items-center justify-center shadow-2xl border border-white/30 z-50 overflow-hidden touch-none will-change-transform",
                                            style: ps,
                                            children: Ut
                                              ? e.jsx("div", {
                                                  className: "w-full h-full",
                                                  children:
                                                    de.widgetData.type ===
                                                    "builtin"
                                                      ? e.jsx(B1, {
                                                          designSize:
                                                            de.widgetData
                                                              .designSize ||
                                                            de.widgetData.size,
                                                          size:
                                                            de.widgetData
                                                              .size || "1x1",
                                                          children: e.jsx(U1, {
                                                            id: de.id,
                                                            widgetData:
                                                              de.widgetData,
                                                            onBuiltinProfileOpenStudio:
                                                              de.id ===
                                                              "widget-profile-card"
                                                                ? fn
                                                                : void 0,
                                                            onBuiltinCapsuleOpenLibrary:
                                                              de.id ===
                                                              "widget-capsule-status-2x1"
                                                                ? Rn
                                                                : void 0,
                                                          }),
                                                        })
                                                      : e.jsx(h2, {
                                                          html: de.widgetData
                                                            .html,
                                                          css: de.widgetData
                                                            .css,
                                                          className:
                                                            "w-full h-full",
                                                        }),
                                                })
                                              : e.jsx(e.Fragment, {
                                                  children: de.customIcon
                                                    ? e.jsx("img", {
                                                        src: de.customIcon,
                                                        alt: de.name,
                                                        draggable: !1,
                                                        onDragStart: (Ks) =>
                                                          Ks.preventDefault(),
                                                        className:
                                                          "w-full h-full object-cover pointer-events-none select-none",
                                                        style: {
                                                          WebkitUserDrag:
                                                            "none",
                                                          WebkitTouchCallout:
                                                            "none",
                                                        },
                                                      })
                                                    : (() => {
                                                        const Ks =
                                                          de == null
                                                            ? void 0
                                                            : de.icon;
                                                        return Ks
                                                          ? e.jsx(Ks, {
                                                              size: 30,
                                                              strokeWidth: 1.5,
                                                              style: {
                                                                color:
                                                                  _.appIcon,
                                                              },
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                            })
                                                          : null;
                                                      })(),
                                                }),
                                          });
                                        })()
                                      : null,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "absolute bottom-[158px] left-0 right-0 flex justify-center gap-2 z-20",
                                children: [
                                  e.jsx("div", {
                                    className: Xi(
                                      "w-[6px] h-[6px] rounded-full transition-colors cursor-pointer",
                                      gt === 0 ? "bg-black" : "bg-gray-300",
                                    ),
                                    onClick: () => ae(0),
                                  }),
                                  e.jsx("div", {
                                    className: Xi(
                                      "w-[6px] h-[6px] rounded-full transition-colors cursor-pointer",
                                      gt === 1 ? "bg-black" : "bg-gray-300",
                                    ),
                                    onClick: () => ae(1),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(o_, {
                            isOpen:
                              (Ke == null ? void 0 : Ke.id) === "leting" ||
                              (bt == null ? void 0 : bt.id) === "leting",
                            mode:
                              (Ke == null ? void 0 : Ke.id) === "leting"
                                ? "full"
                                : (bt == null ? void 0 : bt.id) === "leting"
                                  ? "floating"
                                  : "background",
                            showPhoneCase: I,
                            onClose: () => {
                              (bt == null ? void 0 : bt.id) === "leting"
                                ? ti()
                                : Ya();
                            },
                            onOpen: () => {
                              const de = st.find((Me) => Me.id === "leting");
                              de &&
                                ((bt == null ? void 0 : bt.id) === "leting"
                                  ? ur()
                                  : Nt(de),
                                Vs(!0));
                            },
                          }),
                          e.jsx(Os, {
                            children: kt.map(
                              (de) =>
                                de.id !== "leting" &&
                                e.jsx(
                                  pse,
                                  {
                                    app: de,
                                    mode: de.mode,
                                    onInteract: mi,
                                    constraintsRef: Fe,
                                    onOpenHelpAssistantChat: xt,
                                    onClose: () => {
                                      (de.mode === "full" && Ya(),
                                        de.mode === "floating" && ti(),
                                        de.mode === "background" &&
                                          Le((Me) =>
                                            Me.filter((et) => et.id !== de.id),
                                          ));
                                    },
                                    phoneTracePayload: _e,
                                    onConsumeTracePayload: () => yt(null),
                                    language: t,
                                    setLanguage: s,
                                    fontConfig: a,
                                    setFontConfig: r,
                                    appCustomizations: o,
                                    setAppCustomizations: c,
                                    allApps: st.filter((Me) =>
                                      kS.includes(Me.id),
                                    ),
                                    wallpaper: u,
                                    setWallpaper: f,
                                    showStatusBar: m,
                                    setShowStatusBar: h,
                                    showHomeIndicator: x,
                                    setShowHomeIndicator: y,
                                    showDynamicIsland: b,
                                    setShowDynamicIsland: N,
                                    themeColor: _,
                                    setThemeColor: A,
                                    fontSize: C,
                                    setFontSize: M,
                                    fontPresets: S,
                                    setFontPresets: j,
                                    showPhoneCase: I,
                                    setShowPhoneCase: L,
                                    caseColor: F,
                                    setCaseColor: D,
                                    caseWidth: P,
                                    setCaseWidth: z,
                                    caseSize: Z,
                                    setCaseSize: K,
                                    showDock: q,
                                    setShowDock: V,
                                    weatherEffect: je,
                                    setWeatherEffect: xe,
                                    globalCss: R,
                                    setGlobalCss: oe,
                                    blurStyle: le,
                                    setBlurStyle: ie,
                                    uiStyle: ht,
                                    setUiStyle: Pe,
                                    userProfile: ut,
                                    setUserProfile: _t,
                                    apiConfig: fe,
                                    setApiConfig: He,
                                    chatConfig: Ce,
                                    setChatConfig: Re,
                                    presets: at,
                                    setPresets: ft,
                                    ttsConfig: Oe,
                                    setTtsConfig: Qe,
                                    amapWebKey: Ze,
                                    setAmapWebKey: Ue,
                                    onResetDesktopWidgetUserContent: ra,
                                  },
                                  de.instanceKey,
                                ),
                            ),
                          }),
                          e.jsx(Ise, {
                            open: pt,
                            onClose: () => qe(!1),
                            onConfirmOpenChat: dt,
                          }),
                          e.jsx(xse, {
                            isOpen: ke,
                            onClose: () => W(!1),
                            activeApp: Ke,
                            floatingApp: bt,
                            onToggleFloating: pi,
                            onGoHome: ii,
                            chatUiTheme: H,
                            onThemeChange: Y,
                            onOpenWidgetStudio: () => {
                              (cn(), W(!1));
                            },
                          }),
                          e.jsx(ane, { onOpenChat: Fr, onOpenTrace: kr }),
                          !ce &&
                            x &&
                            e.jsx(ine, {
                              isActive: !!(ys || Ke),
                              onSingleClick: () => Ke && Ya(),
                              onDoubleClick: () => W(!0),
                            }),
                        ],
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className:
                      "h-screen w-screen flex items-center justify-center bg-[#F7F9FC]",
                    children: e.jsxs("div", {
                      className: "flex flex-col items-center gap-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-12 h-12 border-4 border-black/10 border-t-black rounded-full animate-spin",
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm font-medium text-gray-400 uppercase tracking-widest",
                          children: "系统加载中...",
                        }),
                      ],
                    }),
                  }),
            }),
          }),
        ],
      }),
    }),
  });
}
export { mne as default };
