                    e.jsxs("p", {
                      className:
                        "text-[9px] font-mono-code text-[#9CA3AF] uppercase tracking-wider mb-4",
                      children: ["位置 · ", J.addressName],
                    }),
                  e.jsx("div", {
                    className: "space-y-6",
                    children:
                      (ae = J == null ? void 0 : J.recommendations) == null
                        ? void 0
                        : ae.map((nt, It) =>
                            e.jsx(
                              "div",
                              {
                                className:
                                  "glass-panel p-6 rounded-[20px] border border-[#E5E5E0]",
                                children: e.jsxs("div", {
                                  className: "flex items-start gap-3",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-mono-code text-[#9CA3AF] w-6 flex-shrink-0",
                                      children: String(It + 1).padStart(2, "0"),
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "font-serif-display text-[#595450] text-lg",
                                          children: nt.name,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "font-serif text-sm text-[#9CA3AF] mt-3 leading-relaxed italic whitespace-pre-line",
                                          children: nt.reason,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
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
        }),
      ],
    })
  );
}
function mc(...t) {
  return Fc($c(t));
}
const pse = ({
  app: t,
  onClose: s,
  phoneTracePayload: n,
  onConsumeTracePayload: a,
  language: r,
  setLanguage: i,
  fontConfig: o,
  setFontConfig: c,
  appCustomizations: d,
  setAppCustomizations: u,
  allApps: f,
  wallpaper: p,
  setWallpaper: m,
  showStatusBar: h,
  setShowStatusBar: g,
  showHomeIndicator: x,
  setShowHomeIndicator: y,
  showDynamicIsland: v,
  setShowDynamicIsland: b,
  themeColor: N,
  setThemeColor: w,
  fontSize: _,
  setFontSize: A,
  fontPresets: k,
  setFontPresets: C,
  showPhoneCase: M,
  setShowPhoneCase: E,
  caseColor: S,
  setCaseColor: j,
  caseWidth: T,
  setCaseWidth: I,
  caseSize: L,
  setCaseSize: B,
  showDock: F,
  setShowDock: D,
  weatherEffect: $,
  setWeatherEffect: P,
  globalCss: z,
  setGlobalCss: O,
  blurStyle: Z,
  setBlurStyle: K,
  uiStyle: q,
  setUiStyle: V,
  userProfile: ne,
  setUserProfile: le,
  apiConfig: ie,
  setApiConfig: X,
  chatConfig: je,
  setChatConfig: xe,
  presets: ye,
  setPresets: R,
  ttsConfig: oe,
  setTtsConfig: ee,
  amapWebKey: H,
  setAmapWebKey: Y,
  onResetDesktopWidgetUserContent: U,
  mode: ce = "full",
  onInteract: pe,
  constraintsRef: se,
  onOpenHelpAssistantChat: Te,
}) => {
  const ke = vn(),
    {
      systemNotificationEnabled: W,
      toggleSystemNotification: ue,
      sendSystemNotification: re,
      setActiveChatId: he,
    } = ke || {},
    ge = l.useRef(!1),
    J = () =>
      ce === "floating"
        ? {
            position: "absolute",
            top: "80px",
            right: "20px",
            width: "393px",
            height: "600px",
            transformOrigin: "top right",
            zIndex: 60,
            borderRadius: "40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
            pointerEvents: "auto",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
          }
        : ce === "background"
          ? { display: "none" }
          : {};
  return e.jsxs(We.div, {
    layoutId: void 0,
    className: mc(
      "absolute inset-0 z-40 flex flex-col overflow-hidden w-full h-full",
      q === "aurora" ? "bg-white" : "bg-[#F7F9FC]",
    ),
    style: J(),
    initial: { opacity: 1, borderRadius: 0 },
    animate: {
      borderRadius: ce === "floating" ? "40px" : 0,
      opacity: 1,
      scale: ce === "floating" ? 0.25 : 1,
      x: ce === "full" ? 0 : void 0,
      y: ce === "full" ? 0 : void 0,
    },
    exit: { opacity: 0, transition: { duration: 0 } },
    transition: { duration: 0 },
    drag: ce === "floating",
    dragMomentum: !1,
    dragElastic: 0.1,
    onDragStart: () => {
      ge.current = !0;
    },
    onDragEnd: () => {
      setTimeout(() => {
        ge.current = !1;
      }, 100);
    },
    onClick: (G) => {
      !ge.current && ce === "floating" && pe && pe();
    },
    children: [
      q === "aurora" &&
        e.jsxs("div", {
          className:
            "absolute inset-0 bg-[#FDFBFB] z-0 overflow-hidden pointer-events-none",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000",
            }),
            e.jsx("div", {
              className:
                "absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-[60px] opacity-50 animate-blob animation-delay-4000",
            }),
          ],
        }),
      ce === "floating" &&
        e.jsx("div", {
          className: "absolute inset-0 z-[100] cursor-pointer bg-transparent",
        }),
      ce === "floating" &&
        e.jsx("button", {
          className:
            "absolute top-8 right-8 z-[110] w-24 h-24 bg-black/40 text-white/90 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors shadow-sm",
          onClick: (G) => {
            (G.stopPropagation(), s());
          },
          onPointerDown: (G) => G.stopPropagation(),
          children: e.jsx(Ts, { size: 48, strokeWidth: 2.5 }),
        }),
      e.jsx("div", {
        className: "relative z-10 flex flex-col h-full",
        children:
          t.id === "settings"
            ? e.jsx(ose, {
                onClose: s,
                language: r,
                setLanguage: i,
                fontConfig: o,
                setFontConfig: c,
                appCustomizations: d,
                setAppCustomizations: u,
                allApps: f,
                wallpaper: p,
                setWallpaper: m,
                showStatusBar: h,
                setShowStatusBar: g,
                showHomeIndicator: x,
                setShowHomeIndicator: y,
                showDynamicIsland: v,
                setShowDynamicIsland: b,
                themeColor: N,
                setThemeColor: w,
                fontSize: _,
                setFontSize: A,
                fontPresets: k,
                setFontPresets: C,
                showPhoneCase: M,
                setShowPhoneCase: E,
                caseColor: S,
                setCaseColor: j,
                caseWidth: T,
                setCaseWidth: I,
                caseSize: L,
                setCaseSize: B,
                showDock: F,
                setShowDock: D,
                weatherEffect: $,
                setWeatherEffect: P,
                globalCss: z,
                setGlobalCss: O,
                blurStyle: Z,
                setBlurStyle: K,
                uiStyle: q,
                setUiStyle: V,
                userProfile: ne,
                setUserProfile: le,
                apiConfig: ie,
                setApiConfig: X,
                chatConfig: je,
                setChatConfig: xe,
                presets: ye,
                setPresets: R,
                ttsConfig: oe,
                setTtsConfig: ee,
                amapWebKey: H,
                setAmapWebKey: Y,
                onResetDesktopWidgetUserContent: U,
                systemNotificationEnabled: W,
                toggleSystemNotification: ue,
                sendSystemNotification: re,
              })
            : t.id === "chat"
              ? e.jsx("div", {
                  className: "flex flex-col h-full min-h-0",
                  children: e.jsx("div", {
                    className: "flex-1 min-h-0 overflow-hidden relative",
                    children: e.jsx(nV, {
                      apiConfig: ie,
                      chatConfig: je,
                      onClose: s,
                      showPhoneCase: M,
                      caseSize: L,
                    }),
                  }),
                })
              : t.id === "book"
                ? e.jsx("div", {
                    className: "flex flex-col h-full",
                    children: e.jsx("div", {
                      className: "flex-1 overflow-hidden relative",
                      children: e.jsx(eH, { onClose: s }),
                    }),
                  })
                : t.id === "ai_phone"
                  ? e.jsx("div", {
                      className: "flex flex-col h-full",
                      children: e.jsx("div", {
                        className: "flex-1 overflow-hidden relative",
                        children: e.jsx(JG, {
                          onClose: s,
                          apiConfig: ie,
                          initialTracePayload: n,
                          onConsumeTracePayload: a,
                          showPhoneCase: M,
                          caseSize: L,
                          fontConfig: o,
                        }),
                      }),
                    })
                  : t.id === "phone"
                    ? e.jsx("div", {
                        className: "flex flex-col h-full",
                        children: e.jsx("div", {
                          className: "flex-1 overflow-hidden relative",
                          children: e.jsx(uee, { onClose: s }),
                        }),
                      })
                    : t.id === "couple"
                      ? e.jsx("div", {
                          className: "flex flex-col h-full",
                          children: e.jsx("div", {
                            className: "flex-1 overflow-hidden relative",
                            children: e.jsx(FJ, {
                              onClose: s,
                              appWindowMode: ce,
                              fontConfig: o,
                            }),
                          }),
                        })
                      : t.id === "meet"
                        ? e.jsx("div", {
                            className: "flex flex-col h-full",
                            children: e.jsx("div", {
                              className: "flex-1 overflow-hidden relative",
                              children: e.jsx(AX, {
                                children: e.jsx(IX, {
                                  onClose: s,
                                  wallpaper: p,
                                }),
                              }),
                            }),
                          })
                        : t.id === "douyin"
                          ? e.jsx("div", {
                              className: "flex flex-col h-full",
                              children: e.jsx("div", {
                                className: "flex-1 overflow-hidden relative",
                                children: e.jsx(Wq, {
                                  onClose: s,
                                  showPhoneCase: M,
                                  caseSize: L,
                                }),
                              }),
                            })
                          : t.id === "encounter"
                            ? e.jsx("div", {
                                className: "flex flex-col h-full",
                                children: e.jsx("div", {
                                  className: "flex-1 overflow-hidden relative",
                                  children: e.jsx(YQ, {
                                    onClose: s,
                                    showPhoneCase: M,
                                    caseSize: L,
                                  }),
                                }),
                              })
                            : t.id === "mail"
                              ? e.jsx("div", {
                                  className: "flex flex-col h-full",
                                  children: e.jsx("div", {
                                    className:
                                      "flex-1 overflow-hidden relative",
                                    children: e.jsx(bX, { onClose: s }),
                                  }),
                                })
                              : t.id === "camera"
                                ? e.jsx("div", {
                                    className: "flex flex-col h-full",
                                    children: e.jsx("div", {
                                      className:
                                        "flex-1 overflow-hidden relative",
                                      children: e.jsx(Tee, { onClose: s }),
                                    }),
                                  })
                                : t.id === "calculator"
                                  ? e.jsx("div", {
                                      className: "flex flex-col h-full",
                                      children: e.jsx("div", {
                                        className:
                                          "flex-1 overflow-hidden relative",
                                        children: e.jsx(ZX, { onClose: s }),
                                      }),
                                    })
                                  : t.id === "reading"
                                    ? e.jsx("div", {
                                        className: "flex flex-col h-full",
                                        children: e.jsx("div", {
                                          className:
                                            "flex-1 overflow-hidden relative",
                                          children: e.jsx(Gee, { onClose: s }),
                                        }),
                                      })
                                    : t.id === "weather"
                                      ? e.jsx("div", {
                                          className: "flex flex-col h-full",
                                          children: e.jsx("div", {
                                            className:
                                              "flex-1 overflow-hidden relative",
                                            children: e.jsx(mse, {
                                              onClose: s,
                                            }),
                                          }),
                                        })
                                      : t.id === "echo"
                                        ? e.jsx("div", {
                                            className: "flex flex-col h-full",
                                            children: e.jsx("div", {
                                              className:
                                                "flex-1 overflow-hidden relative",
                                              children: e.jsx(IZ, {
                                                onClose: s,
                                              }),
                                            }),
                                          })
                                        : t.id === "leting"
                                          ? e.jsx("div", {
                                              className: "flex flex-col h-full",
                                              children: e.jsx("div", {
                                                className:
                                                  "flex-1 overflow-hidden relative",
                                                children: e.jsx(o_, {
                                                  onClose: s,
                                                  isOpen: !0,
                                                  onOpen: () => {},
                                                  showPhoneCase: M,
                                                }),
                                              }),
                                            })
                                          : t.id === "bubble"
                                            ? e.jsx("div", {
                                                className:
                                                  "flex flex-col h-full",
                                                children: e.jsx("div", {
                                                  className:
                                                    "flex-1 overflow-hidden relative",
                                                  children: e.jsx(vH, {
                                                    onClose: s,
                                                  }),
                                                }),
                                              })
                                            : t.id === "meihua_share"
                                              ? e.jsx("div", {
                                                  className:
                                                    "flex flex-col h-full",
                                                  children: e.jsx("div", {
                                                    className:
                                                      "flex-1 overflow-hidden relative",
                                                    children: e.jsx(GX, {
                                                      onClose: s,
                                                      initialCreatorId:
                                                        t.initialCreatorId,
                                                    }),
                                                  }),
                                                })
                                              : t.id === "help"
                                                ? e.jsx("div", {
                                                    className:
                                                      "flex flex-col h-full",
                                                    children: e.jsx("div", {
                                                      className:
                                                        "flex-1 overflow-hidden relative",
                                                      children: e.jsx(BZ, {
                                                        onClose: s,
                                                        onOpenHelpAssistantChat:
                                                          Te,
                                                      }),
                                                    }),
                                                  })
                                                : e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsxs(We.div, {
                                                        initial: {
                                                          opacity: 0,
                                                          y: -20,
                                                        },
                                                        animate: {
                                                          opacity: 1,
                                                          y: 0,
                                                        },
                                                        exit: { opacity: 0 },
                                                        transition: {
                                                          delay: 0.1,
                                                        },
                                                        className: mc(
                                                          "pt-14 px-6 pb-4 flex items-center justify-between sticky top-0 z-10",
                                                          q === "aurora"
                                                            ? "bg-white/40 backdrop-blur-md border-b border-white/50"
                                                            : "bg-white/80 backdrop-blur-md border-b border-slate-100",
                                                        ),
                                                        children: [
                                                          e.jsx("button", {
                                                            onClick: s,
                                                            className: mc(
                                                              "p-2 -ml-2 rounded-full transition-colors",
                                                              q === "aurora"
                                                                ? "hover:bg-pink-50 text-pink-600"
                                                                : "hover:bg-slate-50 text-black",
                                                            ),
                                                            children: e.jsx(
                                                              un,
                                                              {
                                                                size: 24,
                                                                className:
                                                                  "currentColor",
                                                              },
                                                            ),
                                                          }),
                                                          e.jsx("h1", {
                                                            className: mc(
                                                              "text-lg text-black",
                                                              q === "aurora"
                                                                ? "font-serif font-medium"
                                                                : "font-bold",
                                                            ),
                                                            children: t.name,
                                                          }),
                                                          e.jsx("div", {
                                                            className: "w-10",
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsxs(We.div, {
                                                        initial: { opacity: 0 },
                                                        animate: { opacity: 1 },
                                                        exit: { opacity: 0 },
                                                        transition: {
                                                          delay: 0.2,
                                                        },
                                                        className:
                                                          "flex-1 p-6 overflow-y-auto no-scrollbar pb-10 flex flex-col items-center justify-center text-center",
                                                        children: [
                                                          e.jsx("div", {
                                                            className: mc(
                                                              "w-24 h-24 rounded-[24px] flex items-center justify-center mb-6",
                                                              q === "aurora"
                                                                ? "bg-white/40 backdrop-blur-md border border-white/50"
                                                                : "bg-slate-100",
                                                            ),
                                                            children: (() => {
                                                              const G = t.icon;
                                                              return e.jsx(G, {
                                                                size: 48,
                                                                className: mc(
                                                                  "opacity-50",
                                                                  q === "aurora"
                                                                    ? "text-slate-600"
                                                                    : "text-slate-400",
                                                                ),
                                                              });
                                                            })(),
                                                          }),
                                                          e.jsx("h2", {
                                                            className: mc(
                                                              "text-xl font-bold mb-2",
                                                              q === "aurora"
                                                                ? "text-slate-800"
                                                                : "text-slate-900",
                                                            ),
                                                            children: t.name,
                                                          }),
                                                          e.jsx("p", {
                                                            className: mc(
                                                              "text-sm max-w-[200px]",
                                                              q === "aurora"
                                                                ? "text-slate-500"
                                                                : "text-slate-400",
                                                            ),
                                                            children:
                                                              "此应用正在开发中，敬请期待...",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
      }),
    ],
  });
};
function xse({
  isOpen: t,
  onClose: s,
  activeApp: n,
  floatingApp: a,
  backgroundApps: r = [],
  onToggleFloating: i,
  onOpenWidgetStudio: o,
  onGoHome: c,
  chatUiTheme: d = "apricot",
  onThemeChange: u,
}) {
  const [m, h] = l.useState(300),
    [g, x] = l.useState(450),
    [y, v] = l.useState(200),
    [b, N] = l.useState(380),
    [w, _] = l.useState(null),
    [A, k] = l.useState(new Date()),
    C = l.useRef(null);
  (l.useRef(null),
    l.useEffect(() => {
      const L = setInterval(() => {
        k(new Date());
      }, 1e3);
      return () => clearInterval(L);
    }, []),
    l.useEffect(() => {
      const L = (B) => {
        w && B.preventDefault();
      };
      return (
        document.addEventListener("touchmove", L, { passive: !1 }),
        () => document.removeEventListener("touchmove", L)
      );
    }, [w]));
  const M = (L) => Math.round(((L - 150) / 500) * 100),
    E = (L, B) => {
      (L.currentTarget.setPointerCapture(L.pointerId), _(B));
    },
    S = (L, B, F) => {
      if (w !== B || !C.current) return;
      const D = C.current.getBoundingClientRect();
      let $ = L.clientY - D.top;
      (($ = Math.max(150, Math.min(650, $))), F($));
    },
    j = (L, B) => {
      switch (
        (L.currentTarget.releasePointerCapture(L.pointerId), _(null), B)
      ) {
        case "floating":
          i && i();
          break;
        case "home":
          c && (c(), s && s());
          break;
        case "widget":
          o && (o(), s && s());
          break;
        case "theme":
          if (u) {
            const D = (Dg.indexOf(d) + 1) % Dg.length;
            u(Dg[D]);
          }
          break;
      }
    },
    T = (L, B) => {
      const F = M(L),
        D = 40 + (F / 100) * 30;
      return {
        width: `${D}px`,
        height: `${D}px`,
        boxShadow: `0 ${10 + F / 5}px ${20 + F / 2}px rgba(0,0,0,0.08), inset 0 4px 10px rgba(255,255,255,0.8), 0 0 ${20 + F}px ${B}`,
      };
    },
    I = !!a;
  return e.jsx(Os, {
    children:
      t &&
      e.jsxs(We.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className:
          "fixed inset-0 z-[110] bg-[#E5E2DC]/90 backdrop-blur-sm flex items-center justify-center selection:bg-[#D4CFC7]",
        onClick: s,
        children: [
          e.jsx("style", {
            dangerouslySetInnerHTML: {
              __html: `
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@200;300;400&display=swap');
            .font-serif { font-family: 'Cormorant Garamond', serif; }
            .font-sans { font-family: 'Montserrat', sans-serif; }
            
            /* 昂贵的丝绸/特种纸肌理 */
            .bg-silk-texture {
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
            }
          `,
            },
          }),
          e.jsxs(We.div, {
            ref: C,
            initial: { y: 50, opacity: 0, scale: 0.95 },
            animate: { y: 0, opacity: 1, scale: 1 },
            exit: { y: 50, opacity: 0, scale: 0.95 },
            transition: { type: "spring", damping: 25, stiffness: 300 },
            onClick: (L) => L.stopPropagation(),
            className:
              "relative w-full h-full bg-[#F7F5F0] overflow-hidden touch-none",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-silk-texture pointer-events-none z-0",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none",
                style: {
                  background: `
                  radial-gradient(circle at 20% ${m}px, rgba(188, 204, 220, ${0.1 + M(m) / 250}), transparent 40%),
                  radial-gradient(circle at 40% ${g}px, rgba(253, 224, 160, ${0.1 + M(g) / 250}), transparent 40%),
                  radial-gradient(circle at 60% ${y}px, rgba(246, 185, 185, ${0.1 + M(y) / 250}), transparent 40%),
                  radial-gradient(circle at 80% ${b}px, rgba(200, 230, 201, ${0.1 + M(b) / 250}), transparent 40%)
                `,
                },
              }),
              e.jsxs("header", {
                className:
                  "absolute top-12 w-full text-center z-10 pointer-events-none",
                children: [
                  e.jsx("p", {
                    className:
                      "font-sans text-[0.625rem] tracking-[0.4em] text-[#9A958E] mb-2",
                    children: "控制中心",
                  }),
                  e.jsx("h1", {
                    className:
                      "font-serif italic text-3xl font-light text-[#4A4743]",
                    children: "绿洲",
                  }),
                ],
              }),
              e.jsxs("svg", {
                className:
                  "absolute inset-0 w-full h-full pointer-events-none z-10",
                children: [
                  e.jsx("defs", {
                    children: e.jsxs("linearGradient", {
                      id: "line-grad",
                      x1: "0%",
                      y1: "0%",
                      x2: "0%",
                      y2: "100%",
                      children: [
                        e.jsx("stop", {
                          offset: "0%",
                          stopColor: "rgba(180, 175, 165, 0)",
                        }),
                        e.jsx("stop", {
                          offset: "20%",
                          stopColor: "rgba(180, 175, 165, 0.4)",
                        }),
                        e.jsx("stop", {
                          offset: "100%",
                          stopColor: "rgba(180, 175, 165, 0.8)",
                        }),
                      ],
                    }),
                  }),
                  e.jsx("line", {
                    x1: "20%",
                    y1: "0",
                    x2: "20%",
                    y2: m,
                    stroke: "url(#line-grad)",
                    strokeWidth: "1.5",
                  }),
                  e.jsx("line", {
                    x1: "40%",
                    y1: "0",
                    x2: "40%",
                    y2: g,
                    stroke: "url(#line-grad)",
                    strokeWidth: "1.5",
                  }),
                  e.jsx("line", {
                    x1: "60%",
                    y1: "0",
                    x2: "60%",
                    y2: y,
                    stroke: "url(#line-grad)",
                    strokeWidth: "1.5",
                  }),
                  e.jsx("line", {
                    x1: "80%",
                    y1: "0",
                    x2: "80%",
                    y2: b,
                    stroke: "url(#line-grad)",
                    strokeWidth: "1.5",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "absolute z-20 flex flex-col items-center",
                style: {
                  left: "20%",
                  top: `${m}px`,
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  e.jsx(We.div, {
                    animate: w === "floating" ? {} : { y: [0, -4, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 3,
                      ease: "easeInOut",
                    },
                    onPointerDown: (L) => E(L, "floating"),
                    onPointerMove: (L) => S(L, "floating", h),
                    onPointerUp: (L) => j(L, "floating"),
                    className: `rounded-full bg-white/30 backdrop-blur-xl border border-white/80 cursor-ns-resize flex items-center justify-center transition-transform duration-200 ${w === "floating" ? "scale-95" : "scale-100 hover:scale-105"}`,
                    style: T(
                      m,
                      I
                        ? "rgba(100, 149, 237, 0.6)"
                        : "rgba(188, 204, 220, 0.4)",
                    ),
                    children: I
                      ? e.jsx(Kf, { size: 20, className: "text-[#7A746C]" })
                      : e.jsx(Om, { size: 20, className: "text-[#7A746C]" }),
                  }),
                  e.jsx("span", {
                    className:
                      "absolute top-full mt-4 font-sans text-[0.625rem] tracking-[0.2em] text-[#A8A39C] pointer-events-none whitespace-nowrap",
                    children: "小窗",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "absolute z-20 flex flex-col items-center",
                style: {
                  left: "40%",
                  top: `${g}px`,
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  e.jsx(We.div, {
                    animate: w === "home" ? {} : { y: [0, -5, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                    onPointerDown: (L) => E(L, "home"),
                    onPointerMove: (L) => S(L, "home", x),
                    onPointerUp: (L) => j(L, "home"),
                    className: `rounded-full bg-white/30 backdrop-blur-xl border border-white/80 cursor-ns-resize flex items-center justify-center transition-transform duration-200 ${w === "home" ? "scale-95" : "scale-100 hover:scale-105"}`,
                    style: T(g, "rgba(253, 224, 160, 0.4)"),
                    children: e.jsx(vp, {
                      size: 20,
                      className: "text-[#7A746C]",
                    }),
                  }),
                  e.jsx("span", {
                    className:
                      "absolute top-full mt-4 font-sans text-[0.625rem] tracking-[0.2em] text-[#A8A39C] pointer-events-none whitespace-nowrap",
                    children: "主桌面",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "absolute z-20 flex flex-col items-center",
                style: {
                  left: "60%",
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  e.jsx(We.div, {
                    animate: w === "widget" ? {} : { y: [0, -3, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 2.8,
                      ease: "easeInOut",
                      delay: 1,
                    },
                    onPointerDown: (L) => E(L, "widget"),
                    onPointerMove: (L) => S(L, "widget", v),
                    onPointerUp: (L) => j(L, "widget"),
                    className: `rounded-full bg-white/30 backdrop-blur-xl border border-white/80 cursor-ns-resize flex items-center justify-center transition-transform duration-200 ${w === "widget" ? "scale-95" : "scale-100 hover:scale-105"}`,
                    style: T(y, "rgba(246, 185, 185, 0.4)"),
                    children: e.jsx(Bm, {
                      size: 20,
                      className: "text-[#7A746C]",
                    }),
                  }),
                  e.jsx("span", {
                    className:
                      "absolute top-full mt-4 font-sans text-[0.625rem] tracking-[0.2em] text-[#A8A39C] pointer-events-none whitespace-nowrap",
                    children: "小组件",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "absolute z-20 flex flex-col items-center",
                style: {
                  left: "80%",
                  top: `${b}px`,
                  transform: "translate(-50%, -50%)",
                },
                children: [
                  e.jsx(We.div, {
                    animate: w === "theme" ? {} : { y: [0, -6, 0] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 4,
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                    onPointerDown: (L) => E(L, "theme"),
                    onPointerMove: (L) => S(L, "theme", N),
                    onPointerUp: (L) => j(L, "theme"),
                    className: `rounded-full bg-white/30 backdrop-blur-xl border border-white/80 cursor-ns-resize flex items-center justify-center transition-transform duration-200 ${w === "theme" ? "scale-95" : "scale-100 hover:scale-105"}`,
                    style: T(b, "rgba(200, 230, 201, 0.4)"),
                    children: e.jsx(_o, {
                      size: 20,
                      className: "text-[#7A746C]",
                    }),
                  }),
                  e.jsx("span", {
                    className:
                      "absolute top-full mt-4 font-sans text-[0.625rem] tracking-[0.2em] text-[#A8A39C] pointer-events-none whitespace-nowrap",
                    children: "主题",
                  }),
                ],
              }),
              e.jsxs("footer", {
                className: "absolute bottom-10 left-0 w-full px-12 z-10",
                children: [
                  e.jsx("div", {
                    className:
                      "w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4CFC7] to-transparent mb-6 opacity-50 pointer-events-none",
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between items-end",
                    children: [
                      e.jsxs("div", {
                        className:
                          "font-serif text-[#8B867E] pointer-events-none",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-widest mb-1 opacity-80",
                            children: A.toLocaleDateString("zh-CN", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            }),
                          }),
                          e.jsx("p", {
                            className: "text-2xl font-light italic",
                            children: A.toLocaleTimeString("zh-CN", {
                              hour: "2-digit",
                              minute: "2-digit",
                            }),
                          }),
                        ],
                      }),
                      e.jsx(We.div, {
                        onClick: s,
                        whileHover: {
                          scale: 1.5,
                          boxShadow: "0 0 15px #B2B9A1",
                        },
                        whileTap: { scale: 0.9 },
                        className:
                          "w-3 h-3 rounded-full bg-[#B2B9A1] shadow-[0_0_8px_#B2B9A1] animate-pulse cursor-pointer relative group",
                        children: e.jsx("span", {
                          className:
                            "absolute -top-6 left-1/2 -translate-x-1/2 text-[0.625rem] text-[#8B867E] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
                          children: "关闭",
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
  });
}
const h2 = ({ html: t, css: s, className: n, style: a }) => {
    const r = l.useRef(null),
      i = l.useRef(null);
    return (
      l.useEffect(() => {
        if (!r.current) return;
        i.current || (i.current = r.current.attachShadow({ mode: "open" }));
        const o = i.current,
          d = `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      /* 
         在 Shadow DOM 中，html 和 body 标签可能不会像主文档那样表现。
         我们重置它们以适应容器。
      */
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
    
${s || ""}`;
        o.innerHTML = `<style>${d}</style>${t || ""}`;
      }, [t, s]),
      e.jsx("div", { ref: r, className: n, style: a })
    );
  },
  hse = `<div class="sg-root">
  <div class="sg-glow sg-glow-tr"></div>
  <div class="sg-glow sg-glow-bl"></div>
  <div class="sg-noise"></div>
  <div class="sg-line-top"></div>
  <span class="sg-corner sg-c-tl"></span><span class="sg-corner sg-c-tr"></span>
  <span class="sg-corner sg-c-bl"></span><span class="sg-corner sg-c-br"></span>
  <span class="sg-ref">Ref · 04</span>

  <div class="sg-left">
    <div class="sg-grid"></div>
    <div class="sg-line-v"></div>
    <div class="sg-inset-dash"></div>
    <div class="sg-bind"></div><div class="sg-bind2"></div>
    <div class="sg-holes"><span></span><span></span><span></span></div>
    <span class="sg-mark-tr"></span><span class="sg-mark-bl"></span>
    <div class="sg-arc"></div>
    <span class="sg-vol">Vol</span><span class="sg-dots">···</span>

    <div class="sg-content">
      <div class="sg-badge">
        <span class="sg-crosshair" aria-hidden="true">⌖</span>
        <span class="sg-title" contenteditable="true" spellcheck="false">STUDIO LOG</span>
      </div>
      <p class="sg-desc" contenteditable="true" spellcheck="false">Documenting the silent spaces. Where light meets architecture.</p>
    </div>
  </div>

  <div class="sg-right">
    <div class="sg-rline"></div>
    <div class="sg-card sg-card-back">
      <div class="sg-photo" style="background-image:url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&amp;q=80&amp;auto=format&amp;fit=crop');"></div>
      <span class="sg-label">IMG 01</span>
    </div>
    <div class="sg-card sg-card-front">
      <div class="sg-tape"></div>
      <div class="sg-photo" style="background-image:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&amp;q=80&amp;auto=format&amp;fit=crop');"></div>
      <span class="sg-label">IMG 02</span>
    </div>
  </div>
</div>`,
  gse = `/* 完整样式表：与上方 HTML 的 class 对应，可改颜色、间距、圆角等 */
* { box-sizing: border-box; }
.sg-root {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.55);
  background: rgba(255,255,255,0.48);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 15px 40px -15px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.75), inset 0 1px 0 rgba(255,255,255,0.9);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  color: #1a1b1e;
}
.sg-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.sg-glow-tr {
  background: radial-gradient(ellipse 70% 50% at 92% 6%, rgba(253,242,248,0.22), transparent 52%);
}
.sg-glow-bl {
  background: radial-gradient(circle at 8% 94%, rgba(252,231,243,0.14), transparent 42%);
}
.sg-noise {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  pointer-events: none;
  z-index: 0;
  mix-blend-mode: multiply;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100,100,110,0.1) 2px, rgba(100,100,110,0.1) 3px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(100,100,110,0.07) 2px, rgba(100,100,110,0.07) 3px);
  background-size: 5px 5px;
}
.sg-line-top {
  position: absolute;
  top: 0;
  left: 32px;
  right: 32px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(251,113,133,0.2), transparent);
  z-index: 5;
  pointer-events: none;
}
.sg-corner {
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 5;
  pointer-events: none;
  border-color: rgba(163,163,163,0.35);
  border-style: solid;
  border-width: 0;
}
.sg-c-tl { top: 8px; left: 8px; border-top-width: 1px; border-left-width: 1px; }
.sg-c-tr { top: 8px; right: 8px; border-top-width: 1px; border-right-width: 1px; }
.sg-c-bl { bottom: 8px; left: 8px; border-bottom-width: 1px; border-left-width: 1px; border-color: rgba(212,212,212,0.45); }
.sg-c-br { bottom: 8px; right: 8px; border-bottom-width: 1px; border-right-width: 1px; border-color: rgba(255,228,230,0.5); }
.sg-ref {
  position: absolute;
  bottom: 6px;
  right: 8px;
  font-family: ui-monospace, monospace;
  font-size: 5px;
  letter-spacing: 0.35em;
  color: rgba(115,115,115,0.45);
  text-transform: uppercase;
  z-index: 5;
  pointer-events: none;
}
.sg-left {
  position: relative;
  width: 45%;
  flex-shrink: 0;
  min-width: 0;
  min-height: 0;
  padding: 8px 6px 8px 8px;
  border-right: 1px solid rgba(255,255,255,0.45);
  background: linear-gradient(180deg, rgba(252,252,253,0.38), rgba(253,242,248,0.12));
  backdrop-filter: blur(12px);
  overflow: hidden;
  z-index: 1;
}
.sg-grid {
  position: absolute;
  inset: 0;
  opacity: 0.55;
  pointer-events: none;
  background-image: linear-gradient(rgba(241,242,244,0.9) 1px, transparent 1px);
  background-size: 100% 24px;
  background-position: 0 8px;
}
.sg-line-v {
  position: absolute;
  left: 0;
  top: 25%;
  bottom: 25%;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(255,228,230,0.35), transparent);
  pointer-events: none;
}
.sg-inset-dash {
  position: absolute;
  inset: 5px;
  border: 1px dashed rgba(163,163,163,0.22);
  border-radius: 2px;
  pointer-events: none;
  z-index: 2;
}
.sg-bind, .sg-bind2 {
  position: absolute;
  left: 6px;
  top: 22%;
  bottom: 18%;
  width: 1px;
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(180deg, transparent, rgba(163,163,163,0.35), transparent);
}
.sg-bind2 { left: 9px; opacity: 0.5; }
.sg-holes {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 2;
  pointer-events: none;
}
.sg-holes span {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 1px solid rgba(163,163,163,0.35);
  background: rgba(255,255,255,0.35);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
}
.sg-mark-tr {
  position: absolute;
  right: 8px;
  top: 14%;
  width: 8px;
  height: 8px;
  border-top: 1px solid rgba(163,163,163,0.35);
  border-right: 1px solid rgba(163,163,163,0.35);
  z-index: 2;
  pointer-events: none;
}
.sg-mark-bl {
  position: absolute;
  left: 12px;
  bottom: 14%;
  width: 8px;
  height: 8px;
  border-bottom: 1px solid rgba(251,182,193,0.35);
  border-left: 1px solid rgba(251,182,193,0.35);
  z-index: 2;
  pointer-events: none;
}
.sg-arc {
  position: absolute;
  right: -1px;
  top: 8%;
  width: 40px;
  height: 40px;
  border-radius: 100% 0 0 0;
  border-left: 1px solid rgba(212,212,212,0.35);
  border-top: 1px solid rgba(212,212,212,0.35);
  box-shadow: inset 1px 1px 0 rgba(255,255,255,0.35);
  pointer-events: none;
  z-index: 2;
}
.sg-vol {
  position: absolute;
  left: 8px;
  top: 10%;
  font-family: ui-monospace, monospace;
  font-size: 4px;
  letter-spacing: 0.45em;
  color: rgba(115,115,115,0.45);
  text-transform: uppercase;
  z-index: 2;
  pointer-events: none;
}
.sg-dots {
  position: absolute;
  left: 8px;
  bottom: 10%;
  font-size: 4px;
  color: rgba(115,115,115,0.4);
  z-index: 2;
  pointer-events: none;
}
.sg-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 14% 4px 0 12px;
  min-height: 0;
}
.sg-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  max-width: 100%;
  padding: 2px 6px;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,241,242,0.45);
  margin-bottom: 8px;
}
.sg-crosshair {
  font-size: 10px;
  color: #a0a5af;
  line-height: 1;
}
.sg-title {
  font-family: ui-monospace, monospace;
  font-size: 6px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #55575a;
  text-transform: uppercase;
  outline: none;
  min-width: 0;
}
.sg-desc {
  margin: 4px 0 0;
  font-family: Georgia, "Times New Roman", serif;
  font-style: italic;
  font-size: 9px;
  line-height: 1.55;
  color: #1a1b1e;
  outline: none;
  flex: 1;
  min-height: 0;
  overflow: auto;
}
.sg-right {
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.28), rgba(253,242,248,0.15));
  backdrop-filter: blur(12px);
  padding: 6px 8px;
  z-index: 1;
}
.sg-rline {
  position: absolute;
  top: 16px;
  bottom: 16px;
  right: 0;
  width: 1px;
  background: linear-gradient(180deg, transparent, rgba(255,228,230,0.25), transparent);
  pointer-events: none;
}
.sg-card {
  position: absolute;
  border: 1px solid rgba(255,255,255,0.5);
  padding: 4px;
  backdrop-filter: blur(8px);
}
.sg-card-back {
  left: 6%;
  top: 9%;
  width: 44%;
  aspect-ratio: 6/7;
  max-height: 76%;
  background: rgba(248,249,250,0.75);
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  transition: transform 0.7s ease;
}
.sg-card-front {
  right: 5%;
  bottom: 9%;
  width: 44%;
  aspect-ratio: 6/7;
  max-height: 76%;
  background: rgba(255,255,255,0.7);
  box-shadow: 0 10px 20px rgba(0,0,0,0.06);
  transition: transform 0.7s ease;
  z-index: 2;
}
.sg-root:hover .sg-card-back { transform: rotate(-2deg); }
.sg-root:hover .sg-card-front { transform: translate(8px, -8px); }
.sg-photo {
  width: 100%;
  height: calc(100% - 14px);
  background-size: cover;
  background-position: center;
}
.sg-label {
  display: block;
  font-family: ui-monospace, monospace;
  font-size: 6px;
  letter-spacing: 0.25em;
  color: rgba(132,138,150,0.8);
  text-align: center;
  margin-top: 2px;
  text-transform: uppercase;
}
.sg-tape {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(4deg);
  width: min(52%, 56px);
  height: 10px;
  z-index: 3;
  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  clip-path: polygon(1% 0, 99% 1%, 100% 98%, 0% 100%);
}`,
  bse = `<!-- 完整 HTML/CSS 可自由修改；保存后替换桌面该格预览 -->
<div class="ad-root">
  <div class="ad-ring ad-ring-1"></div>
  <div class="ad-ring ad-ring-2"></div>
  <div class="ad-card">
    <div class="ad-avatar-wrap">
      <div class="ad-avatar" style="background-image:url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;q=80&amp;auto=format&amp;fit=crop');"></div>
      <div class="ad-badge"><span class="ad-arrow">↗</span></div>
    </div>
    <div class="ad-name" contenteditable="true" spellcheck="false">STUDIO MAC</div>
    <p class="ad-sub">Wants to share a photo</p>
    <div class="ad-preview">
      <div class="ad-preview-img" style="background-image:url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&amp;q=80&amp;auto=format&amp;fit=crop');"></div>
    </div>
    <div class="ad-actions">
      <span class="ad-btn ad-decline">Decline</span>
      <span class="ad-btn ad-accept">Accept</span>
    </div>
  </div>
</div>`,
  yse = `* { box-sizing: border-box; }
.ad-root {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  padding: 4px 2px;
  font-family: ui-sans-serif, system-ui, sans-serif;
  overflow: hidden;
}
.ad-ring {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(251,182,193,0.35);
  pointer-events: none;
  animation: ad-ping 3s cubic-bezier(0,0,0.2,1) infinite;
}
.ad-ring-1 {
  width: min(74%, 76px);
  aspect-ratio: 1;
  max-height: 54%;
}
.ad-ring-2 {
  width: min(54%, 52px);
  aspect-ratio: 1;
  max-height: 38%;
  animation-delay: 1s;
}
@keyframes ad-ping {
  0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.15; transform: translate(-50%, -50%) scale(1.05); }
}
.ad-card {
  position: relative;
  z-index: 2;
  width: 92%;
  max-width: 196px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 10px 8px;
  transition: transform 0.7s ease;
}
.ad-root:hover .ad-card {
  transform: rotateY(10deg);
}
.ad-avatar-wrap {
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}
.ad-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}
.ad-badge {
  position: absolute;
  bottom: -2px;
  right: -2px;
  padding: 2px;
  border-radius: 50%;
  background: #fff5f8;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.ad-arrow {
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fda4af;
  color: white;
  font-size: 10px;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
.ad-name {
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 10px;
  color: rgba(136,19,55,0.85);
  outline: none;
}
.ad-sub {
  margin: 0;
  font-family: ui-monospace, monospace;
  font-size: 6px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(190,18,60,0.45);
  text-align: center;
  line-height: 1.3;
}
.ad-preview {
  width: 100%;
  height: 3.35rem;
  min-height: 3.35rem;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 1px;
  border: 1px solid rgba(255,228,230,0.65);
  background: #fff5f8;
  margin-top: -6px;
}
.ad-preview-img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-size: cover;
  background-position: top center;
}
.ad-actions {
  display: flex;
  width: 100%;
  gap: 8px;
  margin-top: 2px;
}
.ad-btn {
  flex: 1;
  text-align: center;
  padding: 8px 4px;
  border-radius: 8px;
  font-size: 8px;
  font-weight: 700;
  line-height: 1;
  cursor: default;
}
.ad-decline {
  background: #fff1f2;
  color: rgba(136,19,55,0.45);
}
.ad-accept {
  background: #fda4af;
  color: rgba(136,19,55,0.65);
  box-shadow: 0 1px 4px rgba(251,113,133,0.2);
}`,
  vse = `<div class="ac-root">
  <div class="ac-base">
    <div class="ac-base-inner" style="background-image:url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&amp;q=80&amp;auto=format&amp;fit=crop');"></div>
    <span class="ac-base-label">BASE</span>
  </div>
  <div class="ac-film">
    <span class="ac-num">01</span>
    <div class="ac-text-block">
      <span class="ac-line1" contenteditable="true" spellcheck="false">透明胶片</span>
      <div class="ac-rule"></div>
      <span class="ac-line2" contenteditable="true" spellcheck="false">OVERLAY</span>
    </div>
    <div class="ac-tape"></div>
  </div>
</div>`,
  wse = `* { box-sizing: border-box; }
.ac-root {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: visible;
  padding: 2px 4px 2px 0;
  transform: translateX(-6px);
  font-family: ui-sans-serif, system-ui, sans-serif;
}
.ac-base {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 82%;
  height: 70%;
  background: #fff;
  padding: 1px;
  border: 1px solid #e2e4e9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transform: rotate(4deg);
  transform-origin: bottom right;
  z-index: 0;
  transition: transform 0.7s ease;
}
.ac-root:hover .ac-base { transform: rotate(6deg); }
.ac-base-inner {
  width: 100%;
  height: calc(100% - 12px);
  background-size: cover;
  background-position: center;
}
.ac-base-label {
  display: block;
  font-family: ui-monospace, monospace;
  font-size: 6px;
  letter-spacing: 0.3em;
  color: rgba(132,138,150,0.65);
  text-align: center;
  margin-top: 2px;
  text-transform: uppercase;
}
.ac-film {
  position: absolute;
  top: 10%;
  left: 14%;
  width: 57%;
  height: 49%;
  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 4px 12px -6px rgba(0,0,0,0.08);
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  transform: rotate(-3deg);
  transition: transform 0.7s ease;
  min-height: 0;
}
.ac-root:hover .ac-film {
  transform: rotate(-2deg) translateY(-2px);
}
.ac-num {
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 10px;
  line-height: 1;
  color: #a0a5af;
  user-select: none;
}
.ac-text-block {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2px;
}
.ac-line1 {
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 6px;
  line-height: 1.2;
  letter-spacing: 0.06em;
  color: #5c616a;
  outline: none;
}
.ac-rule {
  width: 14px;
  height: 1px;
  background: #a0a5af;
  margin-bottom: 1px;
}
.ac-line2 {
  font-family: ui-monospace, monospace;
  font-size: 5px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #1a1b1e;
  text-transform: uppercase;
  outline: none;
}
.ac-tape {
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%) rotate(6deg);
  width: 20px;
  height: 4px;
  background: rgba(255,255,255,0.4);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  clip-path: polygon(1% 0, 99% 1%, 100% 98%, 0% 100%);
  z-index: 11;
  background-image: linear-gradient(to right, rgba(0,0,0,0.02), transparent);
}`,
  jse = `<div class="pc4-root" data-preset="pc4-preset-v2">
  <div class="pc4-banner">
    <div class="pc4-banner-fade"></div>
  </div>
  <div class="pc4-sheet">
    <div class="pc4-avatar-wrap" aria-hidden="true">
      <div class="pc4-avatar-inner">
        <div class="pc4-avatar-placeholder">
          <span class="pc4-avatar-line">点头像</span>
          <span class="pc4-avatar-line">上传</span>
        </div>
      </div>
    </div>
    <h2 class="pc4-name pc4-name-empty">点击设置网名</h2>
    <p class="pc4-sig pc4-sig-empty">点击设置个性签名</p>
  </div>
</div>`,
  Nse = `* { box-sizing: border-box; }
.pc4-root {
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", Helvetica, Arial, sans-serif;
}
.pc4-banner {
  position: relative;
  flex: 0 0 45%;
  min-height: 0;
  background: linear-gradient(135deg, #cbd5e1 0%, #94a3b8 100%);
  background-size: cover;
  background-position: center;
}
.pc4-banner-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  pointer-events: none;
}
.pc4-sheet {
  position: relative;
  z-index: 10;
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: -24px;
  padding: 4.75rem 1.25rem 1rem;
  background: #fff;
  border-radius: 24px 24px 0 0;
}
.pc4-avatar-wrap {
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 4px solid #fff;
  background: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.pc4-avatar-inner {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.pc4-avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0 8px;
}
.pc4-avatar-line {
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: #a3a3a3;
}
.pc4-name {
  margin: 0.25rem 0 0.375rem;
  padding: 0;
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: 700;
  color: #1a1a1a;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pc4-name-empty {
  font-weight: 400;
  color: #a3a3a3;
}
.pc4-sig {
  margin: 0;
  max-width: 90%;
  min-height: 2.75rem;
  font-size: 0.875rem;
  line-height: 1.375;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pc4-sig-empty {
  color: #a3a3a3;
}`,
  kse = `<div class="cap2-root" data-preset="cap2-v1">
  <div class="cap2-pill">
    <div class="cap2-dec cap2-dec1"></div>
    <div class="cap2-dec cap2-dec2"></div>
    <div class="cap2-av"></div>
    <div class="cap2-info">
      <div class="cap2-badge"><span class="cap2-dot"></span>在线中</div>
      <div class="cap2-name">昵称</div>
      <div class="cap2-time">00:00:00</div>
    </div>
  </div>
</div>`,
  Sse = `* { box-sizing: border-box; }
.cap2-root {
  width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", sans-serif;
}
.cap2-pill {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 9999px;
  overflow: hidden;
  padding: 4px 6px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.28);
}
.cap2-dec {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}
.cap2-dec1 { width: 40px; height: 40px; top: -18%; right: -10%; }
.cap2-dec2 { width: 28px; height: 28px; bottom: -12%; left: 32%; }
.cap2-av {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: min(28%, 52px);
  aspect-ratio: 1;
  max-height: calc(100% - 8px);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  border: 2px solid #fff;
}
.cap2-info {
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6px;
  padding-right: 4px;
}
.cap2-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  max-width: 100%;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 7px;
  font-weight: 600;
  color: #171717;
  margin-bottom: 3px;
}
.cap2-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 4px #22c55e;
}
.cap2-name {
  font-size: 12px;
  font-weight: 600;
  color: #171717;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.85);
}
.cap2-time {
  margin-top: 2px;
  font-family: ui-monospace, monospace;
  font-size: 9px;
  color: #171717;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
}`,
  Fm = [
    {
      name: "工作室胶片（主桌面 4×2）",
      size: "4x2",
      html: hse,
      css: gse,
      extraData: { type: "builtin", component: "StudioGallery4x2" },
    },
    {
      name: "隔空投送（右上 2×2）",
      size: "2x2",
      html: bse,
      css: yse,
      extraData: { type: "builtin", component: "PhotoFrame" },
    },
    {
      name: "透明胶片叠层（左下 2×2）",
      size: "2x2",
      html: vse,
      css: wse,
      extraData: { type: "builtin", component: "AcetateOverlay2x2" },
    },
    {
      name: "我的资料（4×4）",
      size: "4x4",
      html: jse,
      css: Nse,
      extraData: { type: "builtin", component: "ProfileCard4x4" },
    },
    {
      name: "胶囊状态（2×1）",
      size: "2x1",
      html: kse,
      css: Sse,
      extraData: { type: "builtin", component: "CapsuleStatus2x1" },
    },
  ],
  u0 = {
    "widget-photo-frame": "工作室胶片（主桌面）",
    "widget-photo-frame-tr": "隔空投送（右上）",
    "widget-photo-frame-bl": "透明胶片叠层（左下）",
    "widget-profile-card": "我的资料（4×4）",
    "widget-capsule-status-2x1": "胶囊状态（2×1）",
  };
function z5(t) {
  const s = {
    "widget-photo-frame": 0,
    "widget-photo-frame-tr": 1,
    "widget-photo-frame-bl": 2,
    "widget-profile-card": 3,
    "widget-capsule-status-2x1": 4,
  }[t];
  return s !== void 0 ? Fm[s] : null;
}
const P1 = [
  { component: "LiquidOrb", label: "禅 · 心流球", defaultSize: "2x2" },
  { component: "TypoCalendar", label: "字体日历", defaultSize: "2x2" },
  { component: "StatusPill", label: "状态胶囊条", defaultSize: "4x1" },
  { component: "VinylArchive", label: "黑胶档案", defaultSize: "4x2" },
  {
    component: "StudioGallery4x2",
    label: "工作室胶片（相册）",
    defaultSize: "4x2",
  },
  {
    component: "PhotoFrame",
    label: "相框 / 隔空投送",
    hint: "2×2 为右上隔空投送样式，4×2 为宽屏相框",
    defaultSize: "2x2",
  },
  { component: "AcetateOverlay2x2", label: "透明胶片叠层", defaultSize: "2x2" },
  { component: "ProfileCard4x4", label: "我的资料卡", defaultSize: "4x4" },
  { component: "CapsuleStatus2x1", label: "胶囊状态", defaultSize: "2x1" },
];
function R0(t) {
  return P1.find((s) => s.component === t) || null;
}
function O1(...t) {
  return Fc($c(t));
}
const _se = ({ className: t, color: s }) =>
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
  Ase = ({ className: t, level: s }) =>
    e.jsxs("div", {
      className: O1("relative w-[28px] h-[13px]", t),
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
  Cse = ({
    isIslandExpanded: t,
    setIsIslandExpanded: s,
    showStatusBar: n,
    showDynamicIsland: a,
    themeColor: r,
  }) => {
    const [i, o] = l.useState(""),
      [c, d] = l.useState(80);
    return (
      l.useEffect(() => {
        const u = () => {
          const h = new Date(),
            g = h.getHours().toString().padStart(2, "0"),
            x = h.getMinutes().toString().padStart(2, "0");
          o(`${g}:${x}`);
        };
        u();
        const f = 6e4 - (Date.now() % 6e4);
        let p;
        const m = setTimeout(() => {
          (u(), (p = setInterval(u, 6e4)));
        }, f);
        return () => {
          (clearTimeout(m), p && clearInterval(p));
        };
      }, []),
      l.useEffect(() => {
        let u = null,
          f = !1,
          p = () => {};
        const m = () => {
          !u || f || d(Math.round((u.level ?? 0.8) * 100));
        };
        if (
          !(typeof navigator > "u" || typeof navigator.getBattery != "function")
        )
          return (
            navigator
              .getBattery()
              .then((h) => {
                f ||
                  ((u = h),
                  m(),
                  typeof h.addEventListener == "function"
                    ? (h.addEventListener("levelchange", m),
                      (p = () => {
                        typeof h.removeEventListener == "function" &&
                          h.removeEventListener("levelchange", m);
                      }))
                    : h &&
                      typeof h == "object" &&
                      "onlevelchange" in h &&
                      ((h.onlevelchange = m),
                      (p = () => {
                        h.onlevelchange === m && (h.onlevelchange = null);
                      })));
              })
              .catch(() => {}),
            () => {
              ((f = !0), p());
            }
          );
      }, []),
      !n && !a
        ? null
        : e.jsxs("div", {
            className:
              "absolute top-0 left-0 right-0 h-14 flex justify-between items-center px-8 pt-[2px] z-[70] font-medium text-[0.9375rem] pointer-events-none",
            style: { color: r.statusBar },
            children: [
              e.jsx("div", {
                className: "w-1/3 flex justify-start",
                children:
                  n &&
                  e.jsx("span", {
                    className: "font-semibold tracking-wide text-[1rem]",
                    children: i,
                  }),
              }),
              a &&
                e.jsx("div", {
                  className: O1(
                    "absolute left-1/2 -translate-x-1/2 top-[2px] bg-black rounded-[20px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-auto cursor-pointer z-50",
                    t
                      ? "w-[340px] h-[180px] rounded-[32px]"
                      : "w-[120px] h-[35px]",
                  ),
                  onClick: () => s(!t),
                  children: e.jsx("div", {
                    className: "relative w-full h-full overflow-hidden",
                    children: e.jsx("div", {
                      className: O1(
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
                      e.jsx(_se, { color: r.statusBar }),
                      e.jsx("span", {
                        className:
                          "-ml-0.5 text-[0.95rem] font-semibold leading-none tracking-tight",
                        children: "5G",
                      }),
                      e.jsx(Ase, { className: "-ml-0.5", level: c }),
                    ],
                  }),
              }),
            ],
          })
    );
  },
  Mse = "chat_app_chatList_widgetCapsuleHidden";
function fd(...t) {
  return Fc($c(t));
}
const Ry = [
    ...Fm,
    {
      name: "极简时钟",
      size: "2x2",
      html: `<div class="ins-clock">
  <div class="time">10:42</div>
  <div class="date">Wednesday, Oct 24</div>
  <div class="divider"></div>
  <div class="weather">
    <span>Sunny</span>
    <span>24°C</span>
  </div>
</div>`,
      css: `.ins-clock {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 32px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #1a1a1a;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.03);
}
.time {
  font-size: 56px;
  font-weight: 300;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 8px;
}
.date {
  font-size: 13px;
  font-weight: 500;
  color: #8e8e93;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.divider {
  width: 24px;
  height: 2px;
  background: #1a1a1a;
  margin: 16px 0;
  border-radius: 2px;
}
.weather {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
}`,
      extraData: { type: "builtin", component: "MinimalClock" },
    },
    {
      name: "照片相框",
      size: "2x2",
      html: `<div class="ins-photo">
  <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=500&auto=format&fit=crop" alt="Aesthetic" />
  <div class="overlay">
    <div class="text">Moments</div>
  </div>
</div>`,
      css: `.ins-photo {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
}
.ins-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
}
.text {
  color: white;
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 18px;
  letter-spacing: 1px;
}`,
    },
  ],
  R5 = ({ onClick: t, icon: s, className: n }) =>
    e.jsx("button", {
      onClick: t,
      className: fd(
        "w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 text-gray-600 shadow-sm hover:bg-white hover:text-gray-900 hover:shadow-md transition-all active:scale-95",
        n,
      ),
      children: e.jsx(s, { size: 18, strokeWidth: 2 }),
    }),
  Py = ({ active: t, onClick: s, label: n }) =>
    e.jsxs("button", {
      onClick: s,
      className: fd(
        "relative px-4 py-2 text-sm font-medium transition-colors z-10",
        t ? "text-gray-900" : "text-gray-400 hover:text-gray-600",
      ),
      children: [
        n,
        t &&
          e.jsx(We.div, {
            layoutId: "activeTab",
            className:
              "absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100 -z-10",
            transition: { type: "spring", stiffness: 400, damping: 30 },
          }),
      ],
    }),
  f0 = ({
    label: t,
    value: s,
    onChange: n,
    placeholder: a,
    type: r = "text",
    icon: i,
  }) =>
    e.jsxs("div", {
      className: "space-y-1.5",
      children: [
        e.jsx("label", {
          className:
            "text-[0.6875rem] font-semibold text-gray-400 uppercase tracking-wider ml-1",
          children: t,
        }),
        e.jsxs("div", {
          className: "relative group",
          children: [
            i &&
              e.jsx(i, {
                size: 16,
                className:
                  "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-900 transition-colors",
              }),
            e.jsx("input", {
              type: r,
              value: s,
              onChange: n,
              placeholder: a,
              className: fd(
                "w-full bg-gray-50/50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:bg-white outline-none transition-all py-3.5 shadow-sm",
                i ? "pl-10 pr-4" : "px-4",
              ),
            }),
          ],
        }),
      ],
    }),
  Jf = ({
    onClick: t,
    icon: s,
    label: n,
    variant: a = "default",
    disabled: r,
  }) =>
    e.jsxs("button", {
      onClick: t,
      disabled: r,
      className: fd(
        "flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-sm transition-all active:scale-95 w-full",
        a === "primary" &&
          "bg-gray-900 text-white shadow-md hover:bg-black hover:shadow-lg",
        a === "default" &&
          "bg-white text-gray-700 border border-gray-200 shadow-sm hover:border-gray-300 hover:bg-gray-50",
        a === "danger" &&
          "bg-red-50 text-red-600 border border-red-100 hover:bg-red-100",
        r && "opacity-50 cursor-not-allowed pointer-events-none",
      ),
      children: [s && e.jsx(s, { size: 18, strokeWidth: 2 }), n],
    }),
  Tse = ({
    isOpen: t,
    onClose: s,
    onSave: n,
    onDelete: a,
    initialData: r,
    language: i,
    showStatusBar: o,
    initialPanelTab: c,
    uiStyle: d,
    editingWidgetId: u,
    renderBuiltinPreview: f,
  }) => {
    var Q;
    const [p, m] = l.useState("design"),
      [h, g] = l.useState(!0),
      [x, y] = l.useState(!1),
      [v, b] = l.useState((r == null ? void 0 : r.name) || "新小组件"),
      [N, w] = l.useState((r == null ? void 0 : r.size) || "2x2"),
      [_, A] = l.useState(2),
      [k, C] = l.useState(2),
      [M, E] = l.useState(
        (r == null ? void 0 : r.html) || '<div class="my-widget">你好</div>',
      ),
      [S, j] = l.useState(
        (r == null ? void 0 : r.css) ||
          `.my-widget {
  background: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}`,
      ),
      [T, I] = l.useState(() =>
        r != null && r.extraData && Object.keys(r.extraData).length
          ? { ...r.extraData }
          : r != null && r.type
            ? { type: r.type, component: r.component }
            : {},
      ),
      [L, B] = l.useState(1),
      F = l.useRef(null),
      [D, $, P] = Yn("widget_presets", Ry),
      [z, O, Z] = Yn("widget_presets_removed_builtins", []),
      [K, q] = l.useState(""),
      [V, ne] = l.useState(""),
      [le, ie] = l.useState(!1),
      [X, je] = l.useState(""),
      [xe, ye] = l.useState(!1),
      [R, oe] = l.useState(!1);
    (l.useEffect(() => {
      if (!P || !Z) return;
      const ve = [...D],
        Ve = Ry.filter(
          (Ae) => !ve.find((te) => te.name === Ae.name) && !z.includes(Ae.name),
        );
      Ve.length > 0 && (ve.unshift(...Ve), $(ve));
    }, [P, Z]),
      l.useEffect(() => {
        !P ||
          !Z ||
          $((ve) => {
            let Ve = !1;
            const Ae = ve.map((te) => {
              const Se = Fm.find((tt) => tt.name === te.name);
              if (!Se) return te;
              const Fe = String(te.html || "");
              return Se.name === "我的资料（4×4）" &&
                (!Fe.includes("pc4-preset-v2") ||
                  Fe.includes("资料同步") ||
                  !Fe.includes("pc4-root"))
                ? ((Ve = !0), { ...Se })
                : te;
            });
            return Ve ? Ae : ve;
          });
      }, [P, Z]),
      l.useEffect(() => {
        !P ||
          !Z ||
          $((ve) => {
            let Ve = !1;
            const Ae = ve.map((te) => {
              var Fe, $e;
              const Se = Fm.find((tt) => tt.name === te.name);
              return !(
                (Fe = Se == null ? void 0 : Se.extraData) != null &&
                Fe.component
              ) ||
                (($e = te.extraData) == null ? void 0 : $e.component) ===
                  Se.extraData.component
                ? te
                : ((Ve = !0), { ...te, extraData: { ...Se.extraData } });
            });
            return Ve ? Ae : ve;
          });
      }, [P, Z]),
      l.useEffect(() => {
        if (!t) return;
        if (!r) {
          (b("新小组件"),
            w("2x2"),
            E('<div class="my-widget">你好</div>'),
            j(
              ".my-widget { display: flex; align-items: center; justify-content: center; height: 100%; }",
            ),
            I({}),
            A(2),
            C(2));
          return;
        }
        (b(r.name || "新小组件"),
          w(r.size || "2x2"),
          E(r.html || '<div class="my-widget">你好</div>'),
          j(
            r.css ||
              ".my-widget { display: flex; align-items: center; justify-content: center; height: 100%; }",
          ),
          I(() =>
            r.extraData && Object.keys(r.extraData).length
              ? { ...r.extraData }
              : r.type === "builtin" && r.component
                ? { type: r.type, component: r.component }
                : {},
          ));
        const [ve, Ve] = (r.size || "2x2").split("x").map(Number);
        (A(ve), C(Ve));
      }, [t, r]),
      l.useEffect(() => {
        !t ||
          !c ||
          (c !== "design" && c !== "code" && c !== "library") ||
          (m(c), g(!0));
      }, [t, c]),
      l.useEffect(() => {
        w(`${_}x${k}`);
      }, [_, k]),
      l.useEffect(() => {
        const ve = () => {
          if (!F.current) return;
          const Ae = N || "2x2",
            [te, Se] = Ae.split("x").map(Number),
            Fe = d === "cyber-zen" ? 20 : 24,
            $e = 62,
            tt = te * $e + (te - 1) * 16,
            Xe = Se * $e + (Se - 1) * Fe,
            ht = F.current.clientWidth,
            Pe = h ? window.innerHeight * 0.5 : 100,
            ut = window.innerHeight - Pe,
            _t = 40,
            Ee = ht - _t,
            fe = ut - _t,
            He = Ee / tt,
            Ie = fe / Xe,
            Ce = Math.min(Math.min(He, Ie), 1.5);
          B(Ce);
        };
        ve();
        const Ve = setTimeout(ve, 100);
        return (
          window.addEventListener("resize", ve),
          () => {
            (window.removeEventListener("resize", ve), clearTimeout(Ve));
          }
        );
      }, [N, h, d]),
      l.useEffect(() => {
        const ve = M.includes("countdown-widget");
        ie(ve);
        const Ve = M.includes("weather-card");
        if ((ye(Ve), ve))
          try {
            const te = new DOMParser().parseFromString(M, "text/html"),
              Se = te.querySelector(".countdown-widget"),
              Fe = te.querySelector(".title");
            if (Se) {
              let $e = Se.getAttribute("data-target") || "";
              ($e && $e.length === 10 && ($e += "T00:00"), q($e));
            }
            Fe && ne(Fe.textContent || "");
          } catch {}
        if (Ve)
          try {
            const Se = new DOMParser()
              .parseFromString(M, "text/html")
              .querySelector(".weather-city");
            Se && je(Se.textContent || "");
          } catch {}
      }, [M]));
    const ee = (ve) => {
        const Ve = Fm.find((Fe) => Fe.name === ve.name),
          Ae = Ve ? { ...Ve } : ve;
        (b(Ae.name), w(Ae.size || "2x2"));
        const [te, Se] = (Ae.size || "2x2").split("x").map(Number);
        (A(te),
          C(Se),
          E(Ae.html),
          j(Ae.css),
          I(Ae.extraData || {}),
          m("design"),
          g(!1));
      },
      H = (ve, Ve) => {
        try {
          const te = new DOMParser().parseFromString(M, "text/html"),
            Se = te.querySelector(".countdown-widget"),
            Fe = te.querySelector(".title");
          if (
            (Se && ve && Se.setAttribute("data-target", ve),
            Fe && Ve !== void 0 && (Fe.textContent = Ve),
            ve)
          ) {
            const Xe = new Date(ve) - new Date();
            if (Xe > 0) {
              const ht = Math.floor(Xe / 864e5),
                Pe = Math.floor((Xe % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
                ut = Math.floor((Xe % (1e3 * 60 * 60)) / (1e3 * 60)),
                _t = te.querySelector(".days"),
                Ee = te.querySelector(".hours"),
                fe = te.querySelector(".mins");
              (_t && (_t.textContent = ht.toString().padStart(2, "0")),
                Ee && (Ee.textContent = Pe.toString().padStart(2, "0")),
                fe && (fe.textContent = ut.toString().padStart(2, "0")));
            }
          }
          (E(te.body.innerHTML), q(ve), ne(Ve));
        } catch {}
      },
      Y = (ve, Ve, Ae) => {
        try {
          const Se = new DOMParser().parseFromString(M, "text/html"),
            Fe = Se.querySelector(".weather-city"),
            $e = Se.querySelector(".weather-temp"),
            tt = Se.querySelector(".weather-desc");
          (Fe && (Fe.textContent = ve),
            $e && Ve && ($e.textContent = `${Math.round(Ve)}°`),
            tt && Ae && (tt.textContent = Ae),
            E(Se.body.innerHTML),
            je(ve));
        } catch {}
      },
      U = () => {
        (oe(!0),
          navigator.geolocation
            ? navigator.geolocation.getCurrentPosition(
                async (ve) => {
                  try {
                    const { latitude: Ve, longitude: Ae } = ve.coords,
                      Se = await (
                        await fetch(
                          `https://api.open-meteo.com/v1/forecast?latitude=${Ve}&longitude=${Ae}&current=temperature_2m,weather_code&timezone=auto`,
                        )
                      ).json();
                    let Fe = "Local";
                    try {
                      const ht = await (
                        await fetch(
                          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Ve}&lon=${Ae}`,
                        )
                      ).json();
                      Fe =
                        ht.address.city ||
                        ht.address.town ||
                        ht.address.village ||
                        ht.address.suburb ||
                        "Local";
                    } catch {}
                    const $e = Se.current.weather_code;
                    let tt = "Clear";
                    ($e > 0 && $e < 3
                      ? (tt = "Cloudy")
                      : $e >= 3 && $e < 50
                        ? (tt = "Foggy")
                        : $e >= 50 && $e < 80
                          ? (tt = "Rainy")
                          : $e >= 80 && (tt = "Storm"),
                      Y(Fe, Se.current.temperature_2m, tt));
                  } catch {
                    alert("Failed to fetch weather data");
                  } finally {
                    oe(!1);
                  }
                },
                () => {
                  (alert("Location access denied."), oe(!1));
                },
              )
            : (alert("Geolocation not supported"), oe(!1)));
      },
      ce = (ve) => {
        const Ve = ve.target.files[0];
        if (Ve) {
          const Ae = new FileReader();
          ((Ae.onload = (te) => {
            try {
              const Se = JSON.parse(te.target.result);
              if ((Se.name && b(Se.name), Se.size)) {
                w(Se.size);
                const [Fe, $e] = (Se.size || "2x2").split("x").map(Number);
                (A(Fe), C($e));
              }
              (Se.html && E(Se.html),
                Se.css && j(Se.css),
                Se.extraData && Object.keys(Se.extraData).length
                  ? I(Se.extraData)
                  : Se.type === "builtin" && Se.component
                    ? I({ type: "builtin", component: Se.component })
                    : I({}));
            } catch {
              alert("Invalid JSON file");
            }
          }),
            Ae.readAsText(Ve));
        }
      },
      pe = () => {
        const ve = { name: v, size: N, html: M, css: S, extraData: T },
          Ve = new Blob([JSON.stringify(ve, null, 2)], {
            type: "application/json",
          }),
          Ae = URL.createObjectURL(Ve),
          te = document.createElement("a");
        ((te.href = Ae),
          (te.download = `${v.replace(/\s+/g, "-").toLowerCase()}.json`),
          document.body.appendChild(te),
          te.click(),
          document.body.removeChild(te),
          URL.revokeObjectURL(Ae));
      },
      se = () => {
        const ve = {
          name: v.trim() || "未命名小组件",
          size: N,
          html: M,
          css: S,
          extraData: T || {},
          userAdded: !0,
        };
        ($((Ve) => [...Ve, ve]), m("library"), g(!0));
      },
      Te = (ve, Ve) => {
        if ((Ve.stopPropagation(), !window.confirm("从库中移除此小组件？")))
          return;
        const Ae = D[ve],
          te = Ry.some((Se) => Se.name === (Ae == null ? void 0 : Ae.name));
        ($((Se) => Se.filter((Fe, $e) => $e !== ve)),
          te &&
            Ae != null &&
            Ae.name &&
            O((Se) => (Se.includes(Ae.name) ? Se : [...Se, Ae.name])));
      },
      [ke, W] = (N || "2x2").split("x").map(Number),
      ue = d === "cyber-zen" ? 20 : 24,
      re = 62,
      he = ke * re + (ke - 1) * 16,
      ge = W * re + (W - 1) * ue,
      J =
        (T == null ? void 0 : T.type) === "builtin" &&
        !!(T != null && T.component),
      G = l.useMemo(
        () => (u && u.startsWith("widget-") ? u : "__widget_editor_preview__"),
        [u],
      ),
      we = (ve) => {
        const Ve = R0(ve),
          Ae = (Ve == null ? void 0 : Ve.defaultSize) || N;
        if (
          (I({ type: "builtin", component: ve }), Ve != null && Ve.defaultSize)
        ) {
          w(Ae);
          const [te, Se] = Ae.split("x").map(Number);
          (A(te), C(Se));
        }
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-[100] flex flex-col bg-[#f8f9fa] font-sans overflow-hidden",
      children: [
        e.jsx(Cse, { showStatusBar: o, themeColor: { statusBar: "#000000" } }),
        e.jsx("div", {
          className: "absolute inset-0 pointer-events-none opacity-[0.03]",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          },
        }),
        e.jsxs("div", {
          className:
            "absolute top-0 left-0 right-0 p-4 pt-14 flex justify-between items-center z-20 pointer-events-none",
          children: [
            e.jsx(R5, {
              onClick: s,
              icon: un,
              className: "pointer-events-auto",
            }),
            e.jsx("div", {
              className:
                "bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/50 shadow-sm pointer-events-auto",
              children: e.jsx("span", {
                className: "text-xs font-bold text-gray-800 tracking-wide",
                children: "工作室",
              }),
            }),
            e.jsx(R5, {
              onClick: () => {
                const ve = {
                  name: v,
                  size: N,
                  html: M,
                  css: S,
                  customHtmlOverride: !J,
                };
                (J &&
                  Object.assign(ve, {
                    type: "builtin",
                    component: T.component,
                  }),
                  n(ve));
              },
              icon: On,
              className: "pointer-events-auto text-gray-900",
            }),
          ],
        }),
        e.jsxs("div", {
          ref: F,
          className:
            "absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out pt-14",
          style: { paddingBottom: h ? "50vh" : "100px" },
          children: [
            e.jsx("div", {
              className: "absolute inset-0 opacity-[0.05]",
              style: {
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              },
            }),
            e.jsxs(We.div, {
              layout: !0,
              style: { width: he, height: ge, scale: L },
              className: "relative origin-center transition-all duration-500",
              children: [
                e.jsx("div", {
                  className:
                    "w-full h-full rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-black/5 bg-white/50 backdrop-blur-sm overflow-hidden",
                  children:
                    J && f
                      ? e.jsx("div", {
                          className: "h-full w-full min-h-0 min-w-0",
                          "data-widget-interactive": !0,
                          children: f(G, {
                            type: "builtin",
                            component: T.component,
                            size: N,
                          }),
                        })
                      : e.jsx(h2, {
                          html: M,
                          css: S,
                          className: "w-full h-full",
                        }),
                }),
                e.jsxs("div", {
                  className:
                    "absolute -bottom-10 left-1/2 -translate-x-1/2 text-[0.625rem] font-medium text-gray-400 bg-white px-3 py-1.5 rounded-full border border-gray-100 shadow-sm whitespace-nowrap",
                  children: [he, " × ", ge],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(We.div, {
          initial: !1,
          animate: { height: h ? "75vh" : "80px", y: 0 },
          transition: { type: "spring", damping: 25, stiffness: 200 },
          className:
            "absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-gray-100 flex flex-col z-30",
          children: [
            e.jsx("div", {
              className:
                "h-10 flex items-center justify-center cursor-pointer shrink-0",
              onClick: () => g(!h),
              children: e.jsx("div", {
                className: "w-12 h-1.5 bg-gray-200 rounded-full",
              }),
            }),
            e.jsx("div", {
              className: "px-6 pb-4 shrink-0 flex justify-center",
              children: e.jsxs("div", {
                className: "bg-gray-100/80 p-1 rounded-full flex relative",
                children: [
                  e.jsx(Py, {
                    active: p === "design",
                    onClick: () => {
                      (m("design"), g(!0));
                    },
                    label: "设计",
                  }),
                  e.jsx(Py, {
                    active: p === "code",
                    onClick: () => {
                      (m("code"), g(!0));
                    },
                    label: "代码",
                  }),
                  e.jsx(Py, {
                    active: p === "library",
                    onClick: () => {
                      (m("library"), g(!0));
                    },
                    label: "库",
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-6 pb-32 overscroll-contain",
              children: e.jsx(Os, {
                mode: "wait",
                children:
                  h &&
                  e.jsxs(