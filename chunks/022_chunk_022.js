                                          size: 16,
                                          className:
                                            "text-gray-300 group-hover:text-black transition-colors shrink-0",
                                        }),
                                  ],
                                }),
                              },
                              G.id,
                            ),
                          ),
                          q.length === 0 &&
                            !ie &&
                            Z &&
                            e.jsx("p", {
                              className:
                                "text-center text-xs text-gray-300 mt-4",
                              children: "没有结果",
                            }),
                        ],
                      }),
                      je &&
                        e.jsx("p", {
                          className: "mt-4 text-xs text-red-500 font-mono",
                          children: je,
                        }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Tj = co("leting"),
  GO = ({
    onClose: t,
    isOpen: s,
    onOpen: n,
    mode: a = "full",
    showPhoneCase: r = !1,
  }) => {
    var He;
    const {
        fetchLyric: i,
        fetchMusicUrl: o,
        fetchSongDetail: c,
        user: d,
      } = Ii(),
      [u, f] = l.useState("local"),
      [p, m] = l.useState(null),
      [h, g] = l.useState(!1),
      [x, y] = l.useState(0),
      [v, b] = l.useState(0),
      [N, w] = l.useState("list"),
      [_, A] = l.useState([]),
      [k, C] = l.useState(!1),
      [M, E] = l.useState(!1),
      [S, j] = l.useState(!1),
      [T, I] = l.useState(!0),
      [L, B] = Yn("music_floating_style", 0),
      [F, D] = Yn("music_custom_styles", []),
      [$, P] = l.useState(!1),
      [z, O] = Yn("music_app_bg", null),
      [Z, K] = Yn("music_app_bg_blur", 0),
      [q, V] = l.useState(!1),
      ne = l.useRef(null),
      [le, ie] = l.useState(!1),
      [X, je] = l.useState(!1),
      [xe, ye] = l.useState({ mode: "full" }),
      R = l.useRef(null),
      oe = l.useRef(null),
      ee = l.useRef(null),
      H = l.useRef(!1),
      Y = l.useRef(null),
      U = l.useRef(0),
      [ce, pe] = l.useState([]),
      [se, Te] = l.useState(-1),
      [ke, W] = l.useState(!1),
      ue = l.useRef(null),
      [re, he] = l.useState(!1),
      [ge, J] = l.useState(null),
      G = l.useRef(null);
    l.useEffect(() => {
      s && I(!0);
    }, [s]);
    const we = () =>
      a === "floating"
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
        : a === "background"
          ? { display: "none" }
          : {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 50,
            };
    (l.useEffect(() => {
      p &&
        R.current &&
        (h ? R.current.play().catch((Ie) => {}) : R.current.pause());
    }, [h, p]),
      l.useEffect(() => {
        if (p != null && p.lrc_data) {
          const Ie = p.lrc_data
            .split(
              `
`,
            )
            .map((Ce) => {
              const Re = Ce.match(
                /\[(\d{1,2}):(\d{1,2})(?:\.(\d{1,3}))?\](.*)/,
              );
              if (Re) {
                const De = parseInt(Re[1]),
                  at = parseInt(Re[2]),
                  ft = Re[3] || "0",
                  vt = parseInt(ft.padEnd(3, "0").substring(0, 3));
                return { time: De * 60 + at + vt / 1e3, text: Re[4] };
              }
              return null;
            })
            .filter(Boolean);
          pe(Ie);
        } else pe([]);
      }, [p]),
      l.useEffect(() => {
        const Ie = ce.findIndex((Ce, Re) => {
          const De = ce[Re + 1];
          return x >= Ce.time && (!De || x < De.time);
        });
        Te(Ie);
      }, [x, ce]),
      l.useEffect(() => {
        if (!ke && se !== -1 && ee.current && k && M) {
          const Ie = ee.current.children[se];
          if (Ie) {
            const Ce = ee.current,
              Re = Ie.offsetTop,
              De = Ie.offsetHeight,
              at = Ce.clientHeight;
            Ce.scrollTo({ top: Re - at / 2 + De / 2, behavior: "smooth" });
          }
        }
      }, [se, ke, k, M]));
    const Q = () => {
        (W(!0),
          ue.current && clearTimeout(ue.current),
          (ue.current = setTimeout(() => {
            W(!1);
          }, 3e3)));
      },
      ve = (Ie, Ce, Re) => {
        (Re.stopPropagation(),
          R.current &&
            ((R.current.currentTime = Ce.time),
            h || (R.current.play().catch(console.error), g(!0))),
          J(Ie),
          G.current && clearTimeout(G.current),
          (G.current = setTimeout(() => {
            J(null);
          }, 3e3)));
      },
      Ve = (Ie) => {
        (G.current && clearTimeout(G.current), J(Ie));
      },
      Ae = () => {
        J(null);
      },
      te = async () => {
        if (!p || !d || re || p.source !== "netease_user") return;
        const [Ie, Ce] = await Promise.all([
          be.get("netease_api_url"),
          be.get("netease_cookie"),
        ]);
        if (!(!Ie || !Ce))
          try {
            (await fetch(
              `${Ie}/scrobble?id=${p.platformId}&sourceid=0&time=${Math.floor(x)}&cookie=${encodeURIComponent(Ce)}`,
            ),
              he(!0));
          } catch {}
      },
      Se = async (Ie, Ce) => {
        if ((p == null ? void 0 : p.id) === Ie.id) {
          g(!h);
          return;
        }
        (Ce && A(Ce),
          R.current && R.current.pause(),
          m({ ...Ie, url: null }),
          g(!0),
          he(!1));
        try {
          let Re = null,
            De = Ie.cover,
            at = Ie.lrc_data;
          if (Ie.source === "netease_user") {
            const ft = o(Ie.platformId);
            let vt = Promise.resolve(null);
            (!De || De.includes("default")) && (vt = c(Ie.platformId));
            let Oe = Promise.resolve({ lrc: at });
            (!at || at.trim().length === 0) && (Oe = i(Ie.platformId));
            const [Qe, Ye, Ze] = await Promise.all([ft, vt, Oe]);
            ((Re = Qe),
              Ye && Ye.length > 0 && (De = Ye[0].al.picUrl),
              Ze && Ze.lrc && (at = Ze.lrc));
          } else if (
            Ie.source === "local" &&
            Ie.fileBlob &&
            Ie.fileBlob instanceof Blob
          ) {
            if (Y.current) {
              try {
                URL.revokeObjectURL(Y.current);
              } catch {}
              Y.current = null;
            }
            ((Re = URL.createObjectURL(Ie.fileBlob)), (Y.current = Re));
          } else Ie.url && (Re = Ie.url);
          Re
            ? m((ft) => ({
                ...ft,
                url: Re,
                cover: De || ft.cover,
                lrc_data: at || "",
              }))
            : alert(`无法播放「${Ie.title}」。请检查网络或登录状态。`);
        } catch (Re) {
          alert(`Error playing "${Ie.title}": ${Re.message}`);
        }
      },
      Fe = l.useRef(Se);
    ((Fe.current = Se),
      l.useEffect(() => {
        const Ie = (Ce) => {
          const { song: Re, queue: De } = Ce.detail || {};
          Re && Fe.current(Re, De ?? [Re]);
        };
        return (
          window.addEventListener(Xm, Ie),
          () => window.removeEventListener(Xm, Ie)
        );
      }, []),
      l.useEffect(() => {
        const Ie = () => {
          g((Ce) => Ce && !1);
        };
        return (
          window.addEventListener(bm, Ie),
          () => window.removeEventListener(bm, Ie)
        );
      }, []),
      l.useEffect(() => {
        window.dispatchEvent(
          new CustomEvent(ep, {
            detail: {
              songId: (p == null ? void 0 : p.id) ?? null,
              isPlaying: h,
            },
          }),
        );
      }, [h, p == null ? void 0 : p.id]));
    const $e = () => {
        if (!p || _.length === 0) return;
        if (N === "single") {
          ((R.current.currentTime = 0), R.current.play());
          return;
        }
        const Ce = (_.findIndex((Re) => Re.id === p.id) + 1) % _.length;
        Se(_[Ce]);
      },
      tt = () => {
        if (!p || _.length === 0) return;
        const Ce =
          (_.findIndex((Re) => Re.id === p.id) - 1 + _.length) % _.length;
        Se(_[Ce]);
      },
      Xe = async (Ie) => {
        const Ce = Ie.target.files[0];
        if (Ce && p) {
          const Re = new FileReader();
          ((Re.onloadend = async () => {
            const De = Re.result,
              at = { ...p, cover: De };
            (m(at), await Tj.addSong(at), j(!1));
          }),
            Re.readAsDataURL(Ce));
        }
      },
      ht = (Ie) => {
        const Ce = Ie.target.files[0];
        if (Ce) {
          const Re = new FileReader();
          ((Re.onloadend = () => {
            (O(Re.result), V(!1));
          }),
            Re.readAsDataURL(Ce));
        }
      },
      Pe = () => {
        (O(null), V(!1));
      },
      ut = (Ie) => {
        const Ce = parseInt(Ie.target.value);
        K(Ce);
      },
      _t = (Ie) => {
        B(Ie);
      },
      Ee = (Ie) => {
        D(Ie);
      },
      fe = (Ie) => {
        if (!Ie) return "00:00";
        const Ce = Math.floor(Ie / 60),
          Re = Math.floor(Ie % 60);
        return `${Ce.toString().padStart(2, "0")}:${Re.toString().padStart(2, "0")}`;
      };
    return e.jsxs("div", {
      className: "absolute inset-0 z-50 pointer-events-none",
      children: [
        e.jsx("audio", {
          ref: R,
          src: p == null ? void 0 : p.url,
          onTimeUpdate: () => {
            if (!R.current) return;
            const Ie = Date.now();
            if (Ie - U.current < 100) return;
            U.current = Ie;
            const Ce = R.current.currentTime,
              Re = R.current.duration;
            (y(Ce),
              b(Re || 0),
              !re && p && (Ce > 60 || (Re > 0 && Ce > Re / 2)) && te());
          },
          onEnded: () => {
            const Ie = R.current;
            if (!Ie) return;
            const Ce = Ie.duration,
              Re = Ie.currentTime;
            Number.isNaN(Ce) || Ce <= 0 || (Re >= Ce - 0.5 && $e());
          },
        }),
        e.jsx(Os, {
          children:
            !s &&
            h &&
            T &&
            p &&
            e.jsx(uO, {
              text: (He = ce[se]) == null ? void 0 : He.text,
              songInfo: p,
              onOpen: n,
              onClose: () => I(!1),
              isPlaying: h,
              styleId: L,
              customStyles: F,
            }),
        }),
        e.jsxs(We.div, {
          className:
            "w-full h-full bg-white flex flex-col overflow-hidden font-sans text-black selection:bg-black selection:text-white pointer-events-auto",
          style: we(),
          initial: !1,
          animate: {
            opacity: s ? 1 : 0,
            scale: s ? (a === "floating" ? 0.25 : 1) : 0.95,
            borderRadius: a === "floating" ? "40px" : "0px",
            pointerEvents: s ? "auto" : "none",
            x: a === "full" ? 0 : void 0,
            y: a === "full" ? 0 : void 0,
          },
          transition: { duration: 0.3, ease: "easeInOut" },
          drag: s && a === "floating",
          dragMomentum: !1,
          dragElastic: 0.1,
          onDragStart: () => {
            H.current = !0;
          },
          onDragEnd: () => {
            setTimeout(() => {
              H.current = !1;
            }, 100);
          },
          onClick: (Ie) => {
            !H.current && a === "floating" && n && n();
          },
          children: [
            a === "floating" &&
              e.jsx("div", {
                className:
                  "absolute inset-0 z-[100] cursor-pointer bg-transparent",
              }),
            a === "floating" &&
              e.jsx("button", {
                className:
                  "absolute top-8 right-8 z-[110] w-24 h-24 bg-black/40 text-white/90 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 hover:bg-black/60 transition-colors shadow-sm",
                onClick: (Ie) => {
                  (Ie.stopPropagation(), t());
                },
                onPointerDown: (Ie) => Ie.stopPropagation(),
                children: e.jsx(Ts, { size: 48, strokeWidth: 2.5 }),
              }),
            e.jsx("div", {
              className: "flex-1 relative overflow-hidden min-h-0",
              children:
                u === "local"
                  ? e.jsx(zO, {
                      onPlaySong: Se,
                      activeSong: p,
                      isPlaying: h,
                      onSwitchToCloud: () => f("cloud"),
                      neteaseUser: d,
                      onBackToDesktop: t,
                      onOpenLetingData: (Ie) => {
                        (ye(
                          (Ie == null ? void 0 : Ie.mode) ===
                            "local_playlist" && Ie.playlistId
                            ? Ie
                            : { mode: "full" },
                        ),
                          je(!0));
                      },
                      onLocalSongDeleted: (Ie) => {
                        if (
                          (A((Ce) => Ce.filter((Re) => Re.id !== Ie)),
                          (p == null ? void 0 : p.id) === Ie)
                        ) {
                          if (Y.current) {
                            try {
                              URL.revokeObjectURL(Y.current);
                            } catch {}
                            Y.current = null;
                          }
                          (m(null), g(!1));
                        }
                      },
                    })
                  : e.jsx(UO, {
                      onPlaySong: Se,
                      activeSong: p,
                      isPlaying: h,
                      onSwitchToLocal: () => f("local"),
                      onOpenLetingData: () => je(!0),
                    }),
            }),
            e.jsx("div", {
              className:
                "absolute bottom-6 left-1/2 -translate-x-1/2 z-50 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 p-4",
              children: e.jsx("button", {
                onClick: t,
                className:
                  "w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors",
                children: e.jsx(vp, { size: 20 }),
              }),
            }),
            e.jsx(Os, {
              children:
                p &&
                !k &&
                e.jsxs(We.div, {
                  initial: { y: 100, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: 100, opacity: 0 },
                  className:
                    "absolute bottom-8 left-6 right-6 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-full p-2 pr-6 flex items-center z-40 cursor-pointer",
                  onClick: () => C(!0),
                  children: [
                    e.jsxs("div", {
                      className: `w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden relative shadow-md shrink-0 ${h ? "animate-spin-slow" : ""}`,
                      style: { animationDuration: "4s" },
                      children: [
                        e.jsx("img", {
                          src: bl(p.cover),
                          alt: "",
                          className: "w-full h-full object-cover",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute w-3 h-3 bg-white rounded-full border-2 border-gray-300 z-10",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex-1 ml-3 min-w-0",
                      children: [
                        e.jsx("h4", {
                          className: "text-xs font-bold truncate",
                          children: p.title,
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-gray-500 truncate font-mono",
                          children: p.artist,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3 ml-4",
                      onClick: (Ie) => Ie.stopPropagation(),
                      children: [
                        e.jsx("button", {
                          onClick: () => g(!h),
                          className:
                            "w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all",
                          children: h
                            ? e.jsx(Sl, { size: 12, fill: "currentColor" })
                            : e.jsx(xr, {
                                size: 12,
                                fill: "currentColor",
                                className: "ml-0.5",
                              }),
                        }),
                        e.jsx("button", {
                          onClick: $e,
                          className:
                            "text-black hover:scale-110 transition-transform",
                          children: e.jsx(J0, {
                            size: 16,
                            fill: "currentColor",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "absolute bottom-0 left-6 right-6 h-0.5 bg-gray-100 overflow-hidden rounded-full",
                      children: e.jsx("div", {
                        className:
                          "h-full bg-black transition-all duration-100",
                        style: { width: `${(x / v) * 100}%` },
                      }),
                    }),
                  ],
                }),
            }),
            e.jsx(Os, {
              children:
                k &&
                p &&
                e.jsxs(We.div, {
                  initial: { y: "100%" },
                  animate: { y: 0 },
                  exit: { y: "100%" },
                  transition: { type: "spring", damping: 25, stiffness: 200 },
                  className:
                    "absolute inset-0 bg-white z-[100] flex flex-col text-black overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className: "absolute inset-0 z-0",
                      children: z
                        ? e.jsxs(We.div, {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 0.5 },
                            className: "absolute inset-0",
                            children: [
                              e.jsx("img", {
                                src: z,
                                className:
                                  "w-full h-full object-cover transition-all duration-300",
                                style: { filter: `blur(${Z}px)` },
                                alt: "自定义背景",
                              }),
                              e.jsx("div", {
                                className: "absolute inset-0 bg-white/30",
                              }),
                            ],
                          })
                        : e.jsxs(
                            We.div,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 1 },
                              className: "absolute inset-0",
                              children: [
                                e.jsx("img", {
                                  src: bl(p.cover),
                                  className:
                                    "w-full h-full object-cover blur-3xl opacity-30 scale-125",
                                  alt: "",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-white/60 backdrop-blur-3xl",
                                }),
                              ],
                            },
                            p.cover,
                          ),
                    }),
                    e.jsxs("div", {
                      className:
                        "px-6 pt-12 pb-4 flex items-center justify-center relative z-30",
                      children: [
                        e.jsx("div", {
                          className: "absolute left-6 z-20",
                          children: e.jsx("button", {
                            onClick: () => C(!1),
                            className:
                              "w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md hover:bg-white/80 transition-colors shadow-sm",
                            children: e.jsx(aa, {
                              size: 24,
                              className: "text-black",
                            }),
                          }),
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-[0.2em] uppercase text-black/40",
                              children: "正在播放",
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs font-medium text-black/60 mt-1",
                              children: "乐听",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "absolute right-6 flex items-center gap-3 z-20",
                          children: e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx("button", {
                                onClick: (Ie) => {
                                  (Ie.preventDefault(),
                                    Ie.stopPropagation(),
                                    j(!S));
                                },
                                className:
                                  "w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md hover:bg-white/80 transition-colors shadow-sm",
                                children: e.jsx(jl, {
                                  size: 24,
                                  className: "text-black",
                                }),
                              }),
                              e.jsx(Os, {
                                children:
                                  S &&
                                  e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className: "fixed inset-0 z-[25]",
                                        onClick: (Ie) => {
                                          (Ie.stopPropagation(), j(!1));
                                        },
                                      }),
                                      e.jsx(We.div, {
                                        initial: {
                                          opacity: 0,
                                          scale: 0.9,
                                          y: 10,
                                        },
                                        animate: { opacity: 1, scale: 1, y: 0 },
                                        exit: { opacity: 0, scale: 0.9, y: 10 },
                                        className:
                                          "absolute right-0 top-full mt-4 w-56 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[120]",
                                        children: e.jsxs("div", {
                                          className: "py-1",
                                          children: [
                                            e.jsxs("button", {
                                              onClick: (Ie) => {
                                                (Ie.stopPropagation(),
                                                  P(!0),
                                                  j(!1));
                                              },
                                              className:
                                                "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-3 text-gray-700 hover:text-black transition-colors",
                                              children: [
                                                e.jsx(_o, { size: 16 }),
                                                e.jsx("span", {
                                                  className: "font-medium",
                                                  children: "歌词样式",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("button", {
                                              onClick: (Ie) => {
                                                (Ie.stopPropagation(),
                                                  ie(!0),
                                                  j(!1));
                                              },
                                              className:
                                                "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-3 text-gray-700 hover:text-black transition-colors",
                                              children: [
                                                e.jsx(_c, { size: 16 }),
                                                e.jsx("span", {
                                                  className: "font-medium",
                                                  children: "编辑封面链接",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("button", {
                                              onClick: (Ie) => {
                                                var Ce;
                                                (Ie.stopPropagation(),
                                                  (Ce = oe.current) == null ||
                                                    Ce.click(),
                                                  j(!1));
                                              },
                                              className:
                                                "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-3 text-gray-700 hover:text-black transition-colors",
                                              children: [
                                                e.jsx(Za, { size: 16 }),
                                                e.jsx("span", {
                                                  className: "font-medium",
                                                  children: "Upload Cover",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                              e.jsx("input", {
                                type: "file",
                                ref: oe,
                                className: "hidden",
                                accept: "image/*",
                                onChange: Xe,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "flex-1 flex flex-col items-center justify-center px-4 relative z-10",
                      children: e.jsx(Os, {
                        mode: "wait",
                        children: M
                          ? e.jsx(
                              We.div,
                              {
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 20 },
                                className:
                                  "w-full h-full max-h-[55vh] overflow-y-auto scrollbar-hide text-center py-12 cursor-pointer mask-image-gradient",
                                ref: ee,
                                onClick: () => E(!1),
                                onWheel: Q,
                                onTouchMove: Q,
                                style: {
                                  maskImage:
                                    "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
                                },
                                children:
                                  ce.length > 0
                                    ? ce.map((Ie, Ce) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center justify-center w-full py-3 cursor-pointer relative",
                                            onMouseEnter: () => Ve(Ce),
                                            onMouseLeave: Ae,
                                            onClick: (Re) => ve(Ce, Ie, Re),
                                            children: [
                                              e.jsx("div", {
                                                className: `absolute left-0 w-8 flex justify-center transition-opacity duration-300 ${ge === Ce ? "opacity-100" : "opacity-0"}`,
                                                children: e.jsx("span", {
                                                  className:
                                                    "text-[9px] font-mono text-black/30 tracking-wider",
                                                  children: fe(Ie.time),
                                                }),
                                              }),
                                              e.jsx("div", {
                                                className: `w-full mx-8 py-1 rounded-md transition-colors duration-300 ${ge === Ce ? "bg-black/[0.04]" : ""}`,
                                                children: e.jsx(We.p, {
                                                  animate: {
                                                    scale: Ce === se ? 1 : 0.95,
                                                    opacity:
                                                      Ce === se ? 1 : 0.5,
                                                    filter:
                                                      Ce === se
                                                        ? "blur(0px)"
                                                        : "blur(0.3px)",
                                                  },
                                                  className: `text-lg font-medium transition-colors duration-300 text-center px-1 ${Ce === se ? "text-black" : "text-black/60"}`,
                                                  children: Ie.text,
                                                }),
                                              }),
                                              e.jsx("div", {
                                                className: `absolute right-0 w-8 flex justify-center transition-opacity duration-300 ${ge === Ce ? "opacity-100" : "opacity-0"}`,
                                                children: e.jsx(xr, {
                                                  size: 11,
                                                  fill: "currentColor",
                                                  className:
                                                    "text-black/40 hover:text-black/80 transition-colors",
                                                }),
                                              }),
                                            ],
                                          },
                                          Ce,
                                        ),
                                      )
                                    : e.jsxs("div", {
                                        className:
                                          "flex flex-col items-center justify-center h-full text-black/40",
                                        children: [
                                          e.jsx(vr, {
                                            size: 48,
                                            className: "mb-4 opacity-50",
                                          }),
                                          e.jsx("p", { children: "暂无歌词" }),
                                        ],
                                      }),
                              },
                              "lyrics",
                            )
                          : e.jsxs(
                              We.div,
                              {
                                initial: {
                                  opacity: 0,
                                  scale: 0.9,
                                  filter: "blur(10px)",
                                },
                                animate: {
                                  opacity: 1,
                                  scale: 1,
                                  filter: "blur(0px)",
                                },
                                exit: {
                                  opacity: 0,
                                  scale: 0.9,
                                  filter: "blur(10px)",
                                },
                                transition: { duration: 0.4 },
                                className:
                                  "w-full aspect-square max-w-sm relative cursor-pointer group",
                                onClick: () => E(!0),
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-black/10 rounded-[2rem] transform translate-y-4 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500",
                                  }),
                                  e.jsxs(We.div, {
                                    className:
                                      "w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-white/20 bg-white",
                                    animate: { scale: h ? 1 : 0.95 },
                                    transition: {
                                      duration: 0.5,
                                      ease: "easeInOut",
                                    },
                                    children: [
                                      e.jsx("img", {
                                        src: bl(p.cover),
                                        alt: "",
                                        className: "w-full h-full object-cover",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              "cover",
                            ),
                      }),
                    }),
                    e.jsxs("div", {
                      className: "px-8 pb-12 pt-8 relative z-10",
                      children: [
                        e.jsxs("div", {
                          className: "mb-8",
                          children: [
                            e.jsxs("div", {
                              className: "flex justify-between items-end mb-4",
                              children: [
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0 mr-4",
                                  children: [
                                    e.jsx(
                                      We.h2,
                                      {
                                        initial: { opacity: 0, y: 10 },
                                        animate: { opacity: 1, y: 0 },
                                        className:
                                          "text-3xl font-bold truncate text-black mb-1",
                                        children: p.title,
                                      },
                                      p.title,
                                    ),
                                    e.jsx(
                                      We.p,
                                      {
                                        initial: { opacity: 0, y: 10 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { delay: 0.1 },
                                        className:
                                          "text-lg text-black/60 font-medium truncate",
                                        children: p.artist,
                                      },
                                      p.artist,
                                    ),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx("button", {
                                      onClick: () => V(!q),
                                      className:
                                        "p-2 rounded-full hover:bg-black/5 transition-colors text-black/40 hover:text-black",
                                      children: e.jsx(ea, { size: 24 }),
                                    }),
                                    e.jsx(Os, {
                                      children:
                                        q &&
                                        e.jsxs(e.Fragment, {
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "fixed inset-0 z-[130]",
                                              onClick: () => V(!1),
                                            }),
                                            e.jsx(We.div, {
                                              initial: {
                                                opacity: 0,
                                                scale: 0.9,
                                                y: 10,
                                              },
                                              animate: {
                                                opacity: 1,
                                                scale: 1,
                                                y: 0,
                                              },
                                              exit: {
                                                opacity: 0,
                                                scale: 0.9,
                                                y: 10,
                                              },
                                              className:
                                                "absolute right-0 bottom-full mb-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[135]",
                                              children: e.jsxs("div", {
                                                className: "py-1",
                                                children: [
                                                  e.jsxs("button", {
                                                    onClick: () => {
                                                      var Ie;
                                                      ((Ie = ne.current) ==
                                                        null || Ie.click(),
                                                        V(!1));
                                                    },
                                                    className:
                                                      "w-full px-4 py-3 text-left text-sm hover:bg-gray-50 flex items-center gap-3 text-gray-700 hover:text-black transition-colors",
                                                    children: [
                                                      e.jsx(Za, { size: 16 }),
                                                      e.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children: "设置背景",
                                                      }),
                                                    ],
                                                  }),
                                                  z &&
                                                    e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsxs("div", {
                                                          className:
                                                            "px-4 py-2 border-t border-gray-100",
                                                          children: [
                                                            e.jsxs("div", {
                                                              className:
                                                                "flex justify-between text-[10px] text-gray-400 mb-1 uppercase tracking-wider font-medium",
                                                              children: [
                                                                e.jsx("span", {
                                                                  children:
                                                                    "模糊",
                                                                }),
                                                                e.jsxs("span", {
                                                                  children: [
                                                                    Z,
                                                                    "px",
                                                                  ],
                                                                }),
                                                              ],
                                                            }),
                                                            e.jsx("input", {
                                                              type: "range",
                                                              min: "0",
                                                              max: "50",
                                                              value: Z,
                                                              onChange: ut,
                                                              className:
                                                                "w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black",
                                                            }),
                                                          ],
                                                        }),
                                                        e.jsxs("button", {
                                                          onClick: Pe,
                                                          className:
                                                            "w-full px-4 py-3 text-left text-sm hover:bg-red-50 flex items-center gap-3 text-red-500 hover:text-red-600 transition-colors border-t border-gray-100",
                                                          children: [
                                                            e.jsx(_n, {
                                                              size: 16,
                                                            }),
                                                            e.jsx("span", {
                                                              className:
                                                                "font-medium",
                                                              children:
                                                                "Clear Background",
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
                                    e.jsx("input", {
                                      type: "file",
                                      ref: ne,
                                      className: "hidden",
                                      accept: "image/*",
                                      onChange: ht,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "h-1 w-full bg-gray-100 rounded-full relative cursor-pointer group mb-1",
                              onClick: (Ie) => {
                                const Ce =
                                    Ie.currentTarget.getBoundingClientRect(),
                                  Re = (Ie.clientX - Ce.left) / Ce.width;
                                R.current && (R.current.currentTime = Re * v);
                              },
                              children: e.jsx("div", {
                                className:
                                  "absolute top-0 left-0 h-full bg-black rounded-full",
                                style: { width: `${(x / v) * 100}%` },
                                children: e.jsx("div", {
                                  className:
                                    "absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-black rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity",
                                }),
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-[10px] font-medium text-gray-400 font-mono",
                              children: [
                                e.jsx("span", { children: fe(x) }),
                                e.jsx("span", { children: fe(v) }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between max-w-md mx-auto",
                          children: [
                            e.jsx("button", {
                              onClick: () =>
                                w((Ie) => (Ie === "list" ? "single" : "list")),
                              className: `p-2 rounded-full transition-all backdrop-blur-md border border-white/20 shadow-sm ${N === "single" ? "bg-black/5 text-black" : "bg-white/30 text-black/40 hover:bg-white/50 hover:text-black"}`,
                              children:
                                N === "single"
                                  ? e.jsx(Z1, { size: 20 })
                                  : e.jsx(X1, { size: 20 }),
                            }),
                            e.jsx("button", {
                              onClick: tt,
                              className:
                                "p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-black hover:bg-white/50 transition-all hover:scale-110 active:scale-95 shadow-sm",
                              children: e.jsx(sv, {
                                size: 32,
                                fill: "currentColor",
                              }),
                            }),
                            e.jsx("button", {
                              onClick: () => g(!h),
                              className:
                                "w-20 h-20 bg-white/40 backdrop-blur-xl border border-white/30 text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl hover:bg-white/50",
                              children: h
                                ? e.jsx(Sl, { size: 32, fill: "currentColor" })
                                : e.jsx(xr, {
                                    size: 32,
                                    fill: "currentColor",
                                    className: "ml-1",
                                  }),
                            }),
                            e.jsx("button", {
                              onClick: $e,
                              className:
                                "p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-black hover:bg-white/50 transition-all hover:scale-110 active:scale-95 shadow-sm",
                              children: e.jsx(J0, {
                                size: 32,
                                fill: "currentColor",
                              }),
                            }),
                            e.jsx("button", {
                              className:
                                "p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-black/40 hover:bg-white/50 hover:text-black transition-colors shadow-sm",
                              children: e.jsx(ev, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            }),
            e.jsxs(Os, {
              children: [
                $ &&
                  e.jsx(AO, {
                    isOpen: $,
                    onClose: () => P(!1),
                    currentStyle: L,
                    customStyles: F,
                    onUpdateCustomStyles: Ee,
                    onSelect: (Ie) => {
                      (_t(Ie), P(!1));
                    },
                  }),
                le &&
                  e.jsx(We.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className:
                      "absolute inset-0 z-[150] bg-white/90 backdrop-blur-xl flex flex-col p-8 items-center justify-center",
                    onClick: () => ie(!1),
                    children: e.jsxs("div", {
                      className:
                        "bg-white p-6 rounded-2xl shadow-2xl max-w-md w-full",
                      onClick: (Ie) => Ie.stopPropagation(),
                      children: [
                        e.jsx("h3", {
                          className: "text-lg font-bold mb-4",
                          children: "编辑封面链接",
                        }),
                        e.jsx("input", {
                          type: "text",
                          defaultValue: p == null ? void 0 : p.cover,
                          className:
                            "w-full bg-gray-50 p-4 rounded-lg text-xs font-mono text-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-black",
                          onKeyDown: async (Ie) => {
                            if (Ie.key === "Enter") {
                              const Ce = Ie.target.value;
                              if (Ce && p) {
                                const Re = { ...p, cover: Ce };
                                (m(Re), await Tj.addSong(Re), ie(!1));
                              }
                            }
                          },
                        }),
                        e.jsx("div", {
                          className: "flex justify-end",
                          children: e.jsx("button", {
                            onClick: () => ie(!1),
                            className:
                              "px-4 py-2 text-gray-500 hover:text-black text-sm font-medium",
                            children: "取消",
                          }),
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-gray-400 mt-2 text-center",
                          children: "按 Enter 保存",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            e.jsx(SO, {
              isOpen: X,
              onClose: () => {
                (je(!1), ye({ mode: "full" }));
              },
              backupContext: xe,
              compactLayout: r || a === "floating",
            }),
          ],
        }),
      ],
    });
  },
  o_ = (t) => e.jsx(GO, { ...t }),
  Kl = (t) => (!t || Si(t) ? !1 : t.hideFromCrossApps === !0);
function Ij(t, s = {}) {
  if (t == null) return "";
  const n = !!s.preferZh;
  if (typeof t == "string") return t.trim();
  if (typeof t == "object" && !Array.isArray(t)) {
    const a = t.voice ?? t.voice_native,
      r = t.zh ?? t.voice_zh ?? t.translation;
    return n && r != null && String(r).trim() !== ""
      ? String(r).trim()
      : a != null && String(a).trim() !== ""
        ? String(a).trim()
        : "";
  }
  return String(t ?? "").trim();
}
function l_(t) {
  if (t == null || t === "") return { voice: "", zh: "" };
  if (typeof t == "string") {
    const n = t.trim();
    return { voice: n, zh: n };
  }
  if (typeof t == "object" && !Array.isArray(t)) {
    const n = String(t.voice ?? t.voice_native ?? "").trim(),
      a = String(t.zh ?? t.voice_zh ?? t.translation ?? "").trim();
    return !n && !a ? { voice: "", zh: "" } : { voice: n || a, zh: a || n };
  }
  const s = String(t).trim();
  return { voice: s, zh: s };
}
function HO(t, s = {}) {
  const { voice: n, zh: a } = l_(t);
  return !!s.preferZh ? a || n : n || a;
}
function Yi({
  value: t,
  className: s = "",
  voiceClassName: n = "italic",
  zhClassName: a = "",
  toggleable: r = !0,
  forceZhOnly: i = !1,
}) {
  const { voice: o, zh: c } = l_(t);
  if (!o && !c) return null;
  if (i) {
    const x = (c || o || "").trim();
    return x
      ? e.jsx("span", {
          className: s,
          children: e.jsx("span", { className: a || n || "", children: x }),
        })
      : null;
  }
  const d = !o || !c || o === c,
    [u, f] = l.useState(!1),
    p = l.useCallback(
      (x) => {
        !r || d || (x.stopPropagation(), f((y) => !y));
      },
      [r, d],
    ),
    m = l.useCallback(
      (x) => {
        !r ||
          d ||
          ((x.key === "Enter" || x.key === " ") && (x.preventDefault(), p(x)));
      },
      [r, d, p],
    );
  if (d)
    return e.jsx("span", {
      className: s,
      children: e.jsx("span", { className: n, children: o || c }),
    });
  const h = u,
    g = h ? a || "not-italic" : n;
  return e.jsxs("span", {
    role: "button",
    tabIndex: 0,
    className:
      `${s} ${r ? "cursor-pointer select-none rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-current/35" : ""}`.trim(),
    onClick: p,
    onKeyDown: m,
    title: h ? "点击显示原文" : "点击显示中文翻译",
    children: [
      e.jsx("span", { className: g, children: h ? c : o }),
      e.jsx("span", {
        className:
          "block text-[0.65rem] opacity-45 mt-1 font-sans not-italic tracking-wide",
        children: h ? "译文 · 点击切回原文" : "原文 · 点击显示译文",
      }),
    ],
  });
}
function pd(t, s, n, a = 20) {
  const r = typeof n == "function" ? n(s) || {} : {},
    i = String(r.realName || r.name || "用户").trim() || "用户",
    o =
      String(
        (s == null ? void 0 : s.nickname) ||
          (s == null ? void 0 : s.name) ||
          "角色",
      ).trim() || "角色",
    c = Array.isArray(t) ? t.slice(-a) : [];
  return c.length
    ? c.map((d) => `${d.sender === "me" ? i : o}: ${d.text}`).join(`
`)
    : "无";
}
function yi(t) {
  if (!t || typeof t != "string") return !1;
  const s = t.toLowerCase();
  return /外国人|日本人|韩国人|美国人|英国人|法国人|欧洲|西方|海外|洋|母语[^中]|english|japanese|korean|不说中文|外语|非中文/.test(
    s,
  );
}
const c_ = `【心声双语（统一结构）】
凡本指令中标注为「心声双语」的字段，必须输出 **JSON 对象**（禁止只用纯字符串），且**仅**含两键：
{ "voice": "…", "zh": "…" }
- **voice**：该角色在人设下的**母语/日常口语**心声，**1～3 句**（可一段内连续表达，句间用标点）；**TTS/朗读只使用本字段**。
- **zh**：与 voice **同义**的**简体中文**，给用户阅读；可略调语序以自然，不得增删关键信息。
- 人设为**中文母语**时，voice 与 zh 可相同，或 voice 更口语、zh 略书面，须同源同义。`,
  WO = `【语言与界面】
- 除下列「心声双语」字段外，标题、说明、叙事、枚举以外的展示文案以**简体中文**为主。
${c_}
- **豁免**（须与前端约定一致时可保留英文）：mood（happy/sad/calm 等）、music_style、evidence_type、部分 category 键名；**真实外文歌名、艺人名、URL** 等专有名词。
- 不要整段只用非中文敷衍叙事；中文为主，豁免项仅为例外。`,
  YO = `【语言与界面（灵魂电台）】
${c_}
- **monologue**（每频道一条）：**心声双语**对象 { voice, zh }；朗读仅用 voice。
- **除 monologue 外**的所有字符串（event、ambience 等）一律**简体中文**。
- **track_name / artist**：须与曲库行或真实曲目一致时可保留原文（含非中文歌名）。`,
  VO = `【语言与界面】
- 所有用户可见文案一律使用**简体中文**。
- 不要输出英文段落、不要附带“原文/译文/translation”等双语结构或标签。
- 专有名词（真实歌名/艺人名/URL）可保留原文；除此之外不要输出整句外文。`,
  JO = `【语言与界面（灵魂电台）】
- 除 track_name / artist（真实曲目可保留原文）外，所有字符串一律**简体中文**。
- 不要输出“心声双语”、不要输出 { voice, zh }、不要出现“原文/译文/translation”等提示。`;
function ql(t, s = "standard") {
  const n = yi(t);
  return s === "radio" ? (n ? YO : JO) : n ? WO : VO;
}
const KO = "meet_app_settings",
  qO = "meet_app_offline_summaries";
async function QO(t, s) {
  const n = await be.get(qO),
    a = Array.isArray(n == null ? void 0 : n[t]) ? n[t] : [];
  if (a.length === 0) return [];
  const r = (s == null ? void 0 : s.selectedOfflineMemoryIds) || [];
  return Array.isArray(r) && r.length > 0
    ? r
        .map((i) => {
          var o;
          return (o = a.find((c) => (c == null ? void 0 : c.id) === i)) == null
            ? void 0
            : o.content;
        })
        .filter(Boolean)
    : a.map((i) => (i == null ? void 0 : i.content)).filter(Boolean);
}
async function Ql(t) {
  if (!t) return "";
  const s = await be.get(KO),
    n = s == null ? void 0 : s[t];
  if (!n || !n.shareMemory) return "";
  const a = await QO(t, n).catch(() => []);
  return a.length === 0
    ? ""
    : `【线下记忆】
${a.map((r) => String(r).trim()).join(`

`)}`;
}
const Ej = ({ page: t, contact: s }) => {
    const {
        type: n,
        title: a,
        content: r,
        page_content: i,
        images: o,
        stats: c,
        ai_comment: d,
        url: u,
      } = t,
      f = r || i,
      p =
        typeof f == "string"
          ? f
          : Array.isArray(f)
            ? f.join(`
`)
            : String(f || ""),
      m = yi((s == null ? void 0 : s.setting) || "");
    return n === "social"
      ? e.jsxs("div", {
          className: "bg-white min-h-full pb-24 font-sans",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-4 py-3 sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-gray-50",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
                      children: e.jsx("div", {
                        className:
                          "w-full h-full rounded-full border-2 border-white bg-white overflow-hidden flex items-center justify-center bg-gray-100",
                        children: e.jsx(wr, {
                          size: 16,
                          className: "text-gray-400",
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-sm font-semibold text-gray-900 leading-none",
                          children: ["用户_", Math.floor(Math.random() * 1e3)],
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] text-gray-500 mt-0.5 font-medium",
                          children: "赞助",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(jl, { size: 20, className: "text-gray-900" }),
              ],
            }),
            e.jsx("div", {
              className:
                "w-full bg-gradient-to-br from-gray-100 to-gray-200 relative aspect-[4/5] flex items-center justify-center",
              children: e.jsxs("div", {
                className: "text-center p-8",
                children: [
                  e.jsx(Za, {
                    size: 48,
                    className: "mx-auto mb-4 text-gray-300",
                  }),
                  e.jsx("p", {
                    className:
                      "text-xs font-bold uppercase tracking-widest text-gray-400",
                    children: "视觉内容",
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "px-4 py-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsx(zn, {
                          size: 26,
                          className:
                            "text-gray-900 hover:text-[#ed4956] transition-colors cursor-pointer hover:fill-[#ed4956]",
                          strokeWidth: 1.5,
                        }),
                        e.jsx(Ar, {
                          size: 26,
                          className: "text-gray-900 -rotate-90",
                          strokeWidth: 1.5,
                        }),
                        e.jsx(Yl, {
                          size: 26,
                          className: "text-gray-900",
                          strokeWidth: 1.5,
                        }),
                      ],
                    }),
                    e.jsx(bu, {
                      size: 26,
                      className: "text-gray-900",
                      strokeWidth: 1.5,
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className: "text-sm font-bold text-gray-900 mb-2",
                  children: [(c == null ? void 0 : c.likes) || 892, " 赞"],
                }),
                e.jsxs("div", {
                  className: "text-sm text-gray-900 leading-relaxed mb-2",
                  children: [
                    e.jsxs("span", {
                      className: "font-bold mr-2",
                      children: ["用户_", Math.floor(Math.random() * 1e3)],
                    }),
                    p,
                  ],
                }),
                d &&
                  e.jsx("div", {
                    className: "mt-3 pt-3 border-t border-gray-50",
                    children: e.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-6 h-6 rounded-full overflow-hidden shrink-0 border border-gray-100",
                          children: e.jsx("img", {
                            src: s == null ? void 0 : s.avatar,
                            className: "w-full h-full object-cover",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsxs("p", {
                              className: "text-sm",
                              children: [
                                e.jsx("span", {
                                  className: "font-bold text-gray-900 mr-2",
                                  children: s == null ? void 0 : s.name,
                                }),
                                e.jsx(Yi, {
                                  value: d,
                                  className: "text-gray-700",
                                  voiceClassName: "text-gray-700",
                                  forceZhOnly: !m,
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex items-center gap-3 mt-1",
                              children: e.jsx("span", {
                                className:
                                  "text-[10px] text-gray-400 font-medium",
                                children: "回复",
                              }),
                            }),
                          ],
                        }),
                        e.jsx(zn, {
                          size: 12,
                          className: "text-gray-400 mt-1",
                        }),
                      ],
                    }),
                  }),
                e.jsx("p", {
                  className:
                    "text-[10px] text-gray-400 mt-3 uppercase tracking-wide font-medium",
                  children: "2 小时前",
                }),
              ],
            }),
          ],
        })
      : n === "product"
        ? e.jsxs("div", {
            className: "bg-white min-h-full pb-24 font-sans",
            children: [
              e.jsxs("div", {
                className:
                  "relative w-full h-[65vh] bg-[#f5f5f5] flex items-center justify-center",
                children: [
                  e.jsxs("div", {
                    className: "text-center",
                    children: [
                      e.jsx("h1", {
                        className:
                          "text-6xl font-serif italic text-gray-200 mb-4",
                        children: "商品",
                      }),
                      e.jsx("div", {
                        className:
                          "w-32 h-32 border-2 border-gray-200 rounded-full mx-auto flex items-center justify-center",
                        children: e.jsx(md, {
                          size: 32,
                          className: "text-gray-300",
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/5 to-transparent",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-4 right-4 bg-white/90 backdrop-blur-md text-black px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm",
                    children: "新季度",
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "px-8 py-8 -mt-10 relative bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]",
                children: [
                  e.jsx("div", {
                    className: "w-12 h-1 bg-gray-200 rounded-full mx-auto mb-8",
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between items-start mb-6",
                    children: [
                      e.jsxs("div", {
                        className: "flex-1 pr-4",
                        children: [
                          e.jsx("h1", {
                            className:
                              "text-3xl font-serif font-medium text-gray-900 mb-2 leading-tight",
                            children: a,
                          }),
                          e.jsxs("p", {
                            className:
                              "text-xs text-gray-400 uppercase tracking-widest",
                            children: [
                              "编号 ",
                              Math.floor(Math.random() * 1e5),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-light text-gray-900",
                        children: (c == null ? void 0 : c.price) || "$299",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex gap-4 mb-8 border-b border-gray-100 pb-1",
                    children: ["描述", "详情", "配送"].map((h, g) =>
                      e.jsx(
                        "button",
                        {
                          className: `pb-3 text-xs font-bold uppercase tracking-widest transition-colors ${g === 0 ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-gray-600"}`,
                          children: h,
                        },
                        h,
                      ),
                    ),
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm text-gray-600 leading-loose font-light mb-10",
                    children: p,
                  }),
                  d &&
                    e.jsxs("div", {
                      className:
                        "mb-10 bg-[#f8f8f8] p-5 rounded-2xl flex gap-4 items-start relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute -right-4 -top-4 text-6xl text-black/5 font-serif",
                          children: '"',
                        }),
                        e.jsx("div", {
                          className:
                            "w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm z-10",
                          children: e.jsx("img", {
                            src: s == null ? void 0 : s.avatar,
                            className: "w-full h-full object-cover",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "relative z-10",
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1",
                              children: [
                                s == null ? void 0 : s.name,
                                " 的推荐",
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "text-sm text-gray-800 font-serif leading-relaxed",
                              children: e.jsx(Yi, {
                                value: d,
                                voiceClassName: "italic",
                                forceZhOnly: !m,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "flex gap-4 items-center sticky bottom-8",
                    children: [
                      e.jsx("button", {
                        className:
                          "w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors bg-white shadow-sm",
                        children: e.jsx(zn, { size: 22, strokeWidth: 1.5 }),
                      }),
                      e.jsxs("button", {
                        className:
                          "flex-1 bg-black text-white h-14 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all",
                        children: [e.jsx(md, { size: 16 }), "加入购物袋"],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : e.jsx("div", {
            className:
              "bg-[#fffbf7] min-h-full pb-24 font-serif text-[#1a1a1a]",
            children: e.jsxs("div", {
              className: "px-8 pt-12 pb-8",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 mb-6",
                  children: [
                    e.jsx("span", { className: "w-8 h-[1px] bg-black/20" }),
                    e.jsx("p", {
                      className:
                        "text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-400",
                      children: "编辑",
                    }),
                  ],
                }),
                e.jsx("h1", {
                  className:
                    "text-4xl font-medium leading-[1.15] mb-8 text-gray-900",
                  children: a,
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between border-t border-b border-[#1a1a1a]/10 py-5 mb-10",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center",
                          children: e.jsx(wr, {
                            size: 16,
                            className: "text-gray-400",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "font-sans",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-wider text-gray-900",
                              children: "主编",
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-gray-400 mt-0.5",
                              children:
                                (c == null ? void 0 : c.read_time) ||
                                "5 分钟阅读",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-4 text-gray-400",
                      children: [
                        e.jsx(Yl, {
                          size: 18,
                          className:
                            "hover:text-black transition-colors cursor-pointer",
                        }),
                        e.jsx(bu, {
                          size: 18,
                          className:
                            "hover:text-black transition-colors cursor-pointer",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mb-10 relative group border-l-2 border-black/10 pl-6 py-4",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-2xl font-serif italic text-gray-400 mb-2",
                      children: "精选故事",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] font-sans text-gray-400 uppercase tracking-wider",
                      children: "阅读下方",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "prose prose-lg max-w-none text-gray-800 leading-[2] font-light",
                  children: p
                    .split(
                      `
`,
                    )
                    .map((h, g) =>
                      e.jsx(
                        "p",
                        {
                          className: `mb-8 ${g === 0 ? "first-letter:text-6xl first-letter:font-serif first-letter:font-medium first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]" : ""}`,
                          children: h,
                        },
                        g,
                      ),
                    ),
                }),
                d &&
                  e.jsxs("div", {
                    className:
                      "mt-16 bg-white p-8 border border-[#1a1a1a]/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#1a1a1a] text-white flex items-center justify-center rounded-full text-2xl font-serif",
                        children: '"',
                      }),
                      e.jsx("div", {
                        className:
                          "text-xl text-gray-900 text-center leading-relaxed mb-6",
                        children: e.jsx(Yi, {
                          value: d,
                          voiceClassName: "italic",
                          forceZhOnly: !m,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex justify-center items-center gap-2",
                        children: [
                          e.jsx("div", {
                            className: "w-6 h-6 rounded-full overflow-hidden",
                            children: e.jsx("img", {
                              src: s == null ? void 0 : s.avatar,
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          e.jsxs("p", {
                            className:
                              "font-sans text-[10px] font-bold uppercase tracking-wider text-gray-400",
                            children: ["来自 ", s == null ? void 0 : s.name],
                          }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", {
                  className: "mt-16 flex justify-center",
                  children: e.jsx("div", {
                    className: "w-2 h-2 bg-gray-300 rounded-full",
                  }),
                }),
              ],
            }),
          });
  },
  ZO = ({ contact: t, onBack: s, apiConfig: n }) => {
    var O;
    const {
        getEffectiveUser: a,
        getRoleBoundUser: r,
        chats: i,
        moments: o,
        addApiLog: c,
        apiConfig: d,
      } = vn(),
      u = n ?? d,
      f = yi((t == null ? void 0 : t.setting) || ""),
      [p, m] = l.useState([]),
      [h, g] = l.useState(null),
      [x, y] = l.useState(!1),
      v = l.useRef(!1);
    l.useEffect(() => {
      (async () => {
        const [K, q] = await Promise.all([
          be.get(`phone_app_browser_history_${t.id}`),
          be.get(`phone_app_browser_analysis_${t.id}`),
        ]);
        (K != null && m(K), q != null && g(q));
      })();
    }, [t.id]);
    const [b, N] = l.useState(null),
      [w, _] = l.useState("page"),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(!1),
      [E, S] = l.useState([]),
      [j, T] = l.useState(-1);
    (l.useEffect(() => {
      p.length > 0 && be.set(`phone_app_browser_history_${t.id}`, p);
    }, [p, t.id]),
      l.useEffect(() => {
        h && be.set(`phone_app_browser_analysis_${t.id}`, h);
      }, [h, t.id]));
    const I = (Z) => {
        const K = E.slice(0, j + 1);
        (K.push(Z), S(K), T(K.length - 1), N(Z));
      },
      L = () => {
        if (j > 0) {
          const Z = j - 1;
          (T(Z), N(E[Z]));
        }
      },
      B = () => {
        if (j < E.length - 1) {
          const Z = j + 1;
          (T(Z), N(E[Z]));
        }
      },
      F = (Z, K) => {
        (Z.stopPropagation(), m((q) => q.filter((V) => V.id !== K)));
      },
      D = 5e3,
      $ = 2147483647,
      P = async () => {
        if (v.current) return;
        ((v.current = !0), y(!0));
        const Z = async () => {
          if (!u || !u.key) throw new Error("请先在设置中配置 API Key");
          const q = ((a == null ? void 0 : a(t)) ?? {}).settings || "无",
            V = i == null ? void 0 : i.find((H) => H.contactId === t.id),
            ne = pd(V == null ? void 0 : V.messages, t, r, 20),
            le =
              (o == null
                ? void 0
                : o
                    .filter((H) => H.user.name === t.name)
                    .slice(0, 5)
                    .map((H) => `[${H.time}] ${H.content}`).join(`
`)) || "无",
            ie = await Promise.race([
              Ql(t.id),
              new Promise((H, Y) =>
                setTimeout(() => Y(new Error("timeout")), D),
              ),
            ]).catch(() => ""),
            X = t.setting || "",
            je = yi(X),
            xe = ql(X, "standard"),
            ye = `
[系统指令：生成浏览器历史记录及行为分析]
请以你的角色身份（${t.name}），根据你的人设、最近的聊天记录和朋友圈动态，生成你最近的浏览器搜索和浏览记录，并生成一份行为分析报告。
用户设定：${q}。

参考上下文：
【最近聊天】：
${ne}

【最近朋友圈】：
${le}

【线下/遇见记忆总结】（若已开启记忆互通，请融入生成内容）
${ie || "无"}

要求：
${xe}

${je ? '【心声字段】每条 history 的 **ai_comment**、以及 analysis 中的 **insight**，须为心声双语对象 { "voice", "zh" }。analysis.big_data_analysis 仍为简体中文客观短评，不必双语。' : "【心声字段】history 的 **ai_comment** 与 analysis 的 **insight** 一律输出**简体中文字符串**（不要输出 JSON 对象、不要英文、不要“原文/译文/translation”标签）。analysis.big_data_analysis 仍为简体中文客观短评。"}

1. 生成【至少 10 条】历史记录。
2. 记录类型包括：搜索 (search) 和 网页浏览 (visit)。
3. 对于网页浏览 (visit)，必须生成详细的页面内容，用于模拟浏览器展示。
4. page_type 可选值：article (文章/新闻), product (商品), social (社交帖子), forum (论坛讨论)。
5. 必须结合上下文！如果聊天中提到了某个话题，可能会去搜索相关内容。
6. 偶尔可以包含一条“无痕模式”记录 (is_incognito: true)。
7. 无论是搜索还是访问网页，都必须包含 **ai_comment**（心声双语 { "voice", "zh" }），表达你当时的心声或吐槽。
8. 同时生成一份 "analysis" 对象，包含：
   - screen_time: 屏幕使用时间 (如 "6h 12m")
   - curiosity_score: 好奇心指数 (0-100)
   - categories: 兴趣分布数组，包含 name（简体中文类别名）和 percent (总和100%)
   - insight: **心声双语** { "voice", "zh" }，基于这些记录的深度心理独白或自我反思（不要提到"AI"或"分析"；总长度与原先「约 80 字」相当）
   - big_data_analysis: 模拟浏览器大数据算法对该用户的画像分析结论，客观、理性、精准。【字数控制在 50 字左右】

9. 格式返回 JSON 对象：
{
  "history": [
    { 
      "time": "10:30", 
      "type": "search", 
      "content": "搜索关键词", 
      "ai_comment": "...",
      "is_incognito": false
    },
    {
      "time": "10:35",
      "type": "visit",
      "title": "页面标题",
      "url": "website.com/page",
      "page_type": "article", 
      "content": "详细的页面正文内容...",
      "stats": { "read_time": "5 min", "likes": 100, "price": "$99" },
      "ai_comment": { "voice": "…", "zh": "…" },
      "is_incognito": false
    }
  ],
  "analysis": {
    "screen_time": "...",
    "curiosity_score": 85,
    "categories": [
      { "name": "购物", "percent": 40 },
      { "name": "社交", "percent": 30 },
      { "name": "艺术", "percent": 30 }
    ],
    "insight": { "voice": "…", "zh": "…" },
    "big_data_analysis": "..."
  }
}
`,
            R = await cr(
              u,
              {
                messages: [
                  { role: "system", content: `你现在是 ${t.name}。${X}` },
                  { role: "user", content: ye },
                ],
                temperature: 0.7,
              },
              {
                addApiLog: c,
                logScene: "浏览器",
                logContactName: (t == null ? void 0 : t.name) || "",
                timeoutMs: $,
              },
            );
          let oe = [],
            ee = null;
          try {
            const H = R.match(/\{[\s\S]*\}/);
            if (H) {
              const Y = JSON.parse(H[0]);
              Y.history
                ? ((oe = Y.history), (ee = Y.analysis))
                : Array.isArray(Y) && (oe = Y);
            } else {
              const Y = R.match(/\[[\s\S]*\]/);
              Y && (oe = JSON.parse(Y[0]));
            }
          } catch {}
          if (oe.length > 0) {
            const H = oe.map((Y, U) => ({
              ...Y,
              id: Date.now() + U,
              date: new Date().toLocaleDateString(),
            }));
            m((Y) => [...H, ...Y]);
          }
          ee && g(ee);
        };
        try {
          await Z();
        } catch (K) {
          alert((K == null ? void 0 : K.message) || "生成失败");
        } finally {
          ((v.current = !1), y(!1));
        }
      },
      z = () => {
        window.confirm("确定要清空所有浏览记录吗？") && m([]);
      };
    return e.jsxs("div", {
      className:
        "h-full flex flex-col relative overflow-hidden bg-[#f2f2f7] font-sans text-[#1a1a1a]",
      children: [
        e.jsxs("div", {
          className:
            "pt-14 px-4 pb-3 flex items-center gap-3 relative z-10 bg-[#f2f2f7]/90 backdrop-blur-xl",
          children: [
            e.jsx("button", {
              onClick: s,
              className:
                "p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors",
              children: e.jsx(un, { size: 24, className: "text-[#007AFF]" }),
            }),
            e.jsxs("div", {
              onClick: P,
              className:
                "flex-1 h-10 bg-white rounded-xl flex items-center px-3 gap-2 cursor-pointer active:scale-95 transition-transform shadow-sm border border-black/5",
              children: [
                e.jsx("span", {
                  className: "text-[10px] font-bold text-black/30",
                  children: "AA",
                }),
                e.jsxs("div", {
                  className: "flex-1 flex items-center justify-center gap-1",
                  children: [
                    e.jsx(lr, { size: 10, className: "text-black/40" }),
                    e.jsx("span", {
                      className: "text-sm text-black font-medium",
                      children: "google.com",
                    }),
                  ],
                }),
                x
                  ? e.jsx(Sn, {
                      size: 14,
                      className: "animate-spin text-black/40",
                    })
                  : e.jsx(Ai, { size: 14, className: "text-black/40" }),
              ],
            }),
            e.jsx("button", {
              onClick: () => M(!0),
              className:
                "p-2 -mr-2 hover:bg-black/5 rounded-full transition-colors text-[#007AFF]",
              children: e.jsx(AT, { size: 24 }),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "flex-1 overflow-y-auto relative z-0 no-scrollbar px-4 pb-32",
          children:
            p.length === 0
              ? e.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center h-[60vh] text-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-24 h-24 bg-white rounded-[28px] flex items-center justify-center mb-8 shadow-lg border border-black/5",
                      children: e.jsx(Lu, {
                        size: 40,
                        className: "text-[#007AFF]",
                        strokeWidth: 1.5,
                      }),
                    }),
                    e.jsx("h2", {
                      className: "text-2xl font-bold text-black mb-3",
                      children: "开始浏览",
                    }),
                    e.jsxs("p", {
                      className:
                        "text-sm text-gray-500 leading-relaxed max-w-[240px]",
                      children: ["从 ", t.name, " 的视角探索数字世界。"],
                    }),
                    e.jsx("button", {
                      onClick: P,
                      className:
                        "mt-10 px-8 py-3.5 bg-[#007AFF] text-white rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform active:scale-95",
                      children: "生成浏览记录",
                    }),
                  ],
                })
              : e.jsxs("div", {
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between mb-4 px-1 mt-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-xl font-bold text-black",
                          children: "收藏",
                        }),
                        e.jsx("button", {
                          onClick: z,
                          className:
                            "text-sm font-medium text-[#007AFF] hover:opacity-70 transition-opacity",
                          children: "清空",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: p.map((Z, K) => {
                        var q;
                        return e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 },
                            transition: { delay: K * 0.05 },
                            onClick: () => Z.type === "visit" && I(Z),
                            className: `relative group rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 aspect-[3/4] ${Z.type === "visit" ? "cursor-pointer hover:shadow-md transition-all" : ""}`,
                            children: [
                              e.jsx("button", {
                                onClick: (V) => F(V, Z.id),
                                className:
                                  "absolute top-2 right-2 w-6 h-6 bg-black/10 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center z-20 transition-colors opacity-0 group-hover:opacity-100",
                                children: e.jsx(Ts, { size: 12 }),
                              }),
                              Z.type === "search"
                                ? e.jsxs("div", {
                                    className:
                                      "h-full flex flex-col p-5 bg-gradient-to-br from-gray-50 to-white overflow-hidden",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex justify-between items-start mb-4 flex-shrink-0",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center",
                                            children: e.jsx(pr, {
                                              size: 14,
                                              className: "text-blue-500",
                                            }),
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[10px] font-mono text-gray-400",
                                            children: Z.time,
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex-1 overflow-y-auto no-scrollbar min-h-0",
                                        children: [
                                          e.jsxs("p", {
                                            className:
                                              "text-lg font-serif italic text-gray-900 leading-tight mb-4",
                                            children: ['"', Z.content, '"'],
                                          }),
                                          Z.ai_comment &&
                                            e.jsxs("div", {
                                              className: "relative pb-2",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "absolute -top-2 -left-1 text-2xl text-gray-200 font-serif",
                                                  children: '"',
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "text-[11px] text-gray-500 leading-relaxed relative z-10 pl-2 border-l-2 border-blue-100",
                                                  children: e.jsx(Yi, {
                                                    value: Z.ai_comment,
                                                    voiceClassName: "italic",
                                                    forceZhOnly: !f,
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-full h-full bg-gray-50 flex items-center justify-center",
                                        children:
                                          Z.page_type === "product"
                                            ? e.jsx(md, {
                                                size: 32,
                                                className: "text-gray-300",
                                              })
                                            : Z.page_type === "social"
                                              ? e.jsx(zn, {
                                                  size: 32,
                                                  className: "text-gray-300",
                                                })
                                              : e.jsx(ro, {
                                                  size: 32,
                                                  className: "text-gray-300",
                                                }),
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md shadow-sm z-10 border border-black/5",
                                        children:
                                          Z.page_type === "product"
                                            ? e.jsx(md, {
                                                size: 10,
                                                className: "text-black",
                                              })
                                            : Z.page_type === "social"
                                              ? e.jsx(zn, {
                                                  size: 10,
                                                  className: "text-black",
                                                })
                                              : e.jsx(ro, {
                                                  size: 10,
                                                  className: "text-black",
                                                }),
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white via-white/90 to-transparent pt-8",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-xs font-bold line-clamp-2 leading-tight text-black",
                                            children: Z.title,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-[10px] text-gray-500 mt-1 font-medium",
                                            children:
                                              ((q = Z.url) == null
                                                ? void 0
                                                : q.split("/")[0]) || "web.com",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                            ],
                          },
                          Z.id,
                        );
                      }),
                    }),
                  ],
                }),
        }),
        e.jsxs("div", {
          className:
            "bg-[#f2f2f2]/90 backdrop-blur-xl border-t border-gray-300/50 px-6 py-3 flex justify-between items-center relative z-20 pb-8",
          children: [
            e.jsx(un, {
              size: 24,
              className: `${j > 0 ? "text-[#007AFF]" : "text-gray-300"} active:opacity-50 transition-opacity`,
              onClick: L,
            }),
            e.jsx(un, {
              size: 24,
              className: `${j < E.length - 1 ? "text-[#007AFF]" : "text-gray-300"} rotate-180 active:opacity-50 transition-opacity`,
              onClick: B,
            }),
            e.jsx(Yl, {
              size: 24,
              className: "text-[#007AFF] active:opacity-50 transition-opacity",
              onClick: () => alert("Shared!"),
            }),
            e.jsx(ui, {
              size: 24,
              className: `active:opacity-50 transition-opacity ${A ? "fill-[#007AFF] text-[#007AFF]" : "text-[#007AFF]"}`,
              onClick: () => k(!A),
            }),
            e.jsx(Bm, {
              size: 24,
              className: "text-[#007AFF] active:opacity-50 transition-opacity",
              onClick: () => _("tabs"),
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            C &&
            e.jsxs(We.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 z-50 bg-[#f2f2f7]/80 backdrop-blur-xl flex flex-col",
              onClick: () => M(!1),
              children: [
                e.jsxs("div", {
                  className:
                    "pt-14 px-6 pb-4 flex justify-between items-center",
                  children: [
                    e.jsx("h2", {
                      className: "text-2xl font-serif italic text-gray-900",
                      children: "每日洞察",
                    }),
                    e.jsx("button", {
                      onClick: () => M(!1),
                      className:
                        "w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors",
                      children: e.jsx(Ts, { size: 16 }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto px-6 pb-12 no-scrollbar",
                  onClick: (Z) => Z.stopPropagation(),
                  children: [
                    e.jsxs("div", {
                      className:
                        "relative h-64 w-full flex items-center justify-center mb-8",
                      children: [
                        e.jsx(We.div, {
                          initial: { scale: 0.8, opacity: 0 },
                          animate: { scale: 1, opacity: 1 },
                          transition: { duration: 1, ease: "easeOut" },
                          className:
                            "w-48 h-48 rounded-full bg-gradient-to-tr from-pink-200 via-purple-200 to-indigo-200 blur-2xl opacity-80 absolute",
                        }),
                        e.jsxs(We.div, {
                          animate: {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0],
                          },
                          transition: {
                            duration: 8,
                            repeat: 1 / 0,
                            ease: "easeInOut",
                          },
                          className:
                            "w-40 h-40 rounded-full bg-gradient-to-bl from-white/80 to-white/20 backdrop-blur-md shadow-xl border border-white/50 flex flex-col items-center justify-center relative z-10",
                          children: [
                            e.jsx("span", {
                              className: "text-4xl font-bold text-gray-800",
                              children:
                                (h == null ? void 0 : h.curiosity_score) || 0,
                            }),
                            e.jsx("span", {
                              className:
                                "text-[10px] uppercase tracking-widest text-gray-500 mt-1",
                              children: "好奇心",
                            }),
                          ],
                        }),
                        e.jsxs(We.div, {
                          initial: { x: -20, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: { delay: 0.3 },
                          className:
                            "absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm border border-white/50",
                          children: [
                            e.jsx("p", {
                              className: "text-[10px] text-gray-400 uppercase",
                              children: "活跃度",
                            }),
                            e.jsx("p", {
                              className: "text-sm font-bold text-gray-800",
                              children:
                                (h == null ? void 0 : h.screen_time) || "0h",
                            }),
                          ],
                        }),
                        e.jsxs(We.div, {
                          initial: { x: 20, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: { delay: 0.4 },
                          className:
                            "absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm border border-white/50",
                          children: [
                            e.jsx("p", {
                              className: "text-[10px] text-gray-400 uppercase",
                              children: "记录数",
                            }),
                            e.jsx("p", {
                              className: "text-sm font-bold text-gray-800",
                              children: p.length,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mb-10",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center",
                          children: "兴趣",
                        }),
                        e.jsx("div", {
                          className: "flex flex-wrap justify-center gap-3",
                          children:
                            ((O = h == null ? void 0 : h.categories) == null
                              ? void 0
                              : O.map((Z, K) =>
                                  e.jsxs(
                                    We.div,
                                    {
                                      initial: { scale: 0 },
                                      animate: { scale: 1 },
                                      transition: { delay: 0.5 + K * 0.1 },
                                      className: `px-4 py-2 rounded-full text-xs font-medium border ${K === 0 ? "bg-black text-white border-black" : "bg-white text-gray-600 border-gray-200"}`,
                                      children: [
                                        Z.name,
                                        " ",
                                        e.jsxs("span", {
                                          className: "opacity-60 ml-1",
                                          children: [Z.percent, "%"],
                                        }),
                                      ],
                                    },
                                    K,
                                  ),
                                )) ||
                            e.jsx("div", {
                              className: "text-xs text-gray-400",
                              children: "暂无数据",
                            }),
                        }),
                      ],
                    }),
                    e.jsxs(We.div, {
                      initial: { y: 20, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.7 },
                      className:
                        "bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6 relative overflow-hidden",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-wider text-gray-400",
                              children: "系统分析",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs text-gray-600 leading-relaxed font-mono",
                          children:
                            (h == null ? void 0 : h.big_data_analysis) ||
                            "行为建模所需数据不足...",
                        }),
                      ],
                    }),
                    e.jsxs(We.div, {
                      initial: { y: 20, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.8 },
                      className:
                        "bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300",
                        }),
                        e.jsx(Xn, {
                          className: "w-6 h-6 text-yellow-400 mb-4",
                        }),
                        e.jsx("div", {
                          className:
                            "text-lg font-serif text-gray-800 leading-relaxed",
                          children:
                            h != null && h.insight
                              ? e.jsx(Yi, {
                                  value: h.insight,
                                  voiceClassName: "italic",
                                  forceZhOnly: !f,
                                })
                              : e.jsx("span", {
                                  className: "italic",
                                  children: "探索网页以揭示你的数字灵魂...",
                                }),
                        }),
                        e.jsxs("div", {
                          className: "mt-6 flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full overflow-hidden border border-gray-100",
                              children: e.jsx("img", {
                                src: t.avatar,
                                className: "w-full h-full object-cover",
                              }),
                            }),
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-wider text-gray-400",
                              children: "内心独白",
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
        e.jsx(Os, {
          children:
            b &&
            e.jsx(We.div, {
              initial: { y: "100%" },
              animate: { y: 0 },
              exit: { y: "100%" },
              transition: { type: "spring", damping: 25, stiffness: 200 },
              className: "absolute inset-0 z-50 bg-white flex flex-col",
              children:
                w === "tabs"
                  ? e.jsxs("div", {
                      className: "flex-1 bg-[#f2f2f7] p-6 pt-14 flex flex-col",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between items-center mb-6",
                          children: [
                            e.jsx("h2", {
                              className: "text-black text-xl font-bold",
                              children: "标签",
                            }),
                            e.jsx("button", {
                              onClick: () => _("page"),
                              className: "text-[#007AFF] font-semibold",
                              children: "完成",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-2 gap-4",
                          children: e.jsxs("div", {
                            onClick: () => _("page"),
                            className:
                              "aspect-[3/5] bg-white rounded-xl overflow-hidden relative transform scale-100 hover:scale-105 transition-transform border-2 border-[#007AFF] shadow-lg",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 pointer-events-none transform scale-[0.4] origin-top-left w-[250%] h-[250%]",
                                children: e.jsx(Ej, { page: b, contact: t }),
                              }),
                              e.jsxs("div", {
                                className:
                                  "absolute top-2 left-2 right-2 flex justify-between items-center",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full truncate max-w-[80px]",
                                    children: b.title,
                                  }),
                                  e.jsx("button", {
                                    onClick: (Z) => {
                                      (Z.stopPropagation(), N(null), _("page"));
                                    },
                                    className:
                                      "w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-black hover:bg-red-500 hover:text-white transition-colors",
                                    children: e.jsx(Ts, { size: 12 }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-[#f2f2f7]/90 backdrop-blur-xl border-b border-gray-300/50 pt-14 px-4 pb-3 flex items-center justify-between z-50",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex-1 bg-white h-9 rounded-lg flex items-center justify-center gap-2 px-3 mx-2 shadow-sm border border-black/5",
                              children: [
                                e.jsx(lr, {
                                  size: 10,
                                  className: "text-black/40",
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-xs font-medium text-black truncate max-w-[150px]",
                                  children: b.url || "example.com",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => N(null),
                              className: "text-[#007AFF] font-semibold text-sm",
                              children: "完成",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "flex-1 overflow-y-auto bg-white relative no-scrollbar",
                          children: e.jsx(Ej, { page: b, contact: t }),
                        }),
                        e.jsxs("div", {
                          className:
                            "bg-[#f2f2f2]/90 backdrop-blur-xl border-t border-gray-300/50 px-6 py-3 flex justify-between items-center pb-8",
                          children: [
                            e.jsx(un, {
                              size: 24,
                              className: `${j > 0 ? "text-[#007AFF]" : "text-gray-300"} active:opacity-50 transition-opacity`,
                              onClick: L,
                            }),
                            e.jsx(un, {
                              size: 24,
                              className: `${j < E.length - 1 ? "text-[#007AFF]" : "text-gray-300"} rotate-180 active:opacity-50 transition-opacity`,
                              onClick: B,
                            }),
                            e.jsx(Yl, {
                              size: 24,
                              className:
                                "text-[#007AFF] active:opacity-50 transition-opacity",
                              onClick: () => alert("Shared!"),
                            }),
                            e.jsx(ui, {
                              size: 24,
                              className: `active:opacity-50 transition-opacity ${A ? "fill-[#007AFF] text-[#007AFF]" : "text-[#007AFF]"}`,
                              onClick: () => k(!A),
                            }),
                            e.jsx(Bm, {
                              size: 24,
                              className:
                                "text-[#007AFF] active:opacity-50 transition-opacity",
                              onClick: () => _("tabs"),
                            }),
                          ],
                        }),
                      ],
                    }),
            }),
        }),
      ],
    });
  };
function u1(t) {
  return [].concat(t);
}
function Cv(t) {
  return t.startsWith(":");
}
function d_(t) {
  return (
    qh(t) &&
    (t === "*" || (t.length > 1 && ":>~.+*".includes(t.slice(0, 1))) || p_(t))
  );
}
function u_(t, s) {
  return (qh(s) || typeof s == "number") && !m_(t) && !Cv(t) && !f_(t);
}
function f_(t) {
  return t.startsWith("@media");
}
function XO(t) {
  return t === ".";
}
function m_(t) {
  return t === "--";
}
function qh(t) {
  return t + "" === t;
}
function p_(t) {
  return qh(t) && (t.startsWith("&") || Cv(t));
}
function ph(t, s = "") {
  return t.filter(Boolean).join(s);
}
function x_(t, s) {
  let n = 0;
  if (s.length === 0) return n.toString();
  for (let a = 0; a < s.length; a++) {
    const r = s.charCodeAt(a);
    ((n = (n << 5) - n + r), (n = n & n));
  }
  return `${t ?? "cl"}_${n.toString(36)}`;
}
function e7(t, s) {
  return t === "content" ? `"${s}"` : s;
}
function t7(t) {
  return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Lj(t, s) {
  return `${t}:${s}`;
}
function s7(t) {
  return t ? `.${t}` : "";
}
function n7(t, s) {
  return t
    ? `${t}
${s}`
    : s;
}
var h_ = class g_ {
  constructor(s, n, a, r) {
    ((this.sheet = s),
      (this.property = n),
      (this.value = a),
      (this.selector = r),
      (this.property = n),
      (this.value = a),
      (this.joined = Lj(n, a)));
    const i = this.selector.preconditions.concat(this.selector.postconditions);
    ((this.hash = this.selector.hasConditions
      ? this.selector.scopeClassName
      : x_(this.sheet.name, this.joined)),
      (this.key = ph([this.joined, i, this.hash])));
  }
  toString() {
    let s = f1(this.selector.preconditions, { right: this.hash });
    return (
      (s = f1(this.selector.postconditions, { left: s })),
      `${s} {${g_.genRule(this.property, this.value)}}`
    );
  }
  static genRule(s, n) {
    const a = t7(s);
    return Lj(a, e7(s, n)) + ";";
  }
};
function f1(t, { left: s = "", right: n = "" } = {}) {
  const a = t.reduce(
    (r, i) => (Cv(i) ? r + i : p_(i) ? r + i.slice(1) : ph([r, i], " ")),
    s,
  );
  return ph([a, s7(n)], " ");
}
var a7 = class j0 {
    constructor(s, n = null, { preconditions: a, postconditions: r } = {}) {
      ((this.sheet = s),
        (this.preconditions = []),
        (this.scopeClassName = null),
        (this.scopeName = null),
        (this.postconditions = []),
        (this.preconditions = a ? u1(a) : []),
        (this.postconditions = r ? u1(r) : []),
        this.setScope(n));
    }
    setScope(s) {
      return s
        ? (this.scopeClassName ||
            ((this.scopeName = s),
            (this.scopeClassName = x_(this.sheet.name, s + this.sheet.count))),
          this)
        : this;
    }
    get hasConditions() {
      return this.preconditions.length > 0 || this.postconditions.length > 0;
    }
    addScope(s) {
      return new j0(this.sheet, s, {
        preconditions: this.preconditions,
        postconditions: this.postconditions,
      });
    }
    addPrecondition(s) {
      return new j0(this.sheet, this.scopeClassName, {
        postconditions: this.postconditions,
        preconditions: this.preconditions.concat(s),
      });
    }
    addPostcondition(s) {
      return new j0(this.sheet, this.scopeClassName, {
        preconditions: this.preconditions,
        postconditions: this.postconditions.concat(s),
      });
    }
    createRule(s, n) {
      return new h_(this.sheet, s, n, this);
    }
  },
  r7 = class {
    constructor(t, s) {
      ((this.name = t),
        (this.rootNode = s),
        (this.storedStyles = {}),
        (this.storedClasses = {}),
        (this.style = ""),
        (this.count = 0),
        (this.id = `flairup-${t}`),
        (this.styleTag = this.createStyleTag()));
    }
    getStyle() {
      return this.style;
    }
    append(t) {
      this.style = n7(this.style, t);
    }
    apply() {
      (this.count++, this.styleTag && (this.styleTag.innerHTML = this.style));
    }
    isApplied() {
      return !!this.styleTag;
    }
    createStyleTag() {
      if (typeof document > "u" || this.isApplied() || this.rootNode === null)
        return this.styleTag;
      const t = document.createElement("style");
      return (
        (t.type = "text/css"),
        (t.id = this.id),
        (this.rootNode ?? document.head).appendChild(t),
        t
      );
    }
    addRule(t) {
      const s = this.storedClasses[t.key];
      return qh(s)
        ? s
        : ((this.storedClasses[t.key] = t.hash),
          (this.storedStyles[t.hash] = [t.property, t.value]),
          this.append(t.toString()),
          t.hash);
    }
  };
function Mv(t, s) {
  for (const n in t) s(n.trim(), t[n]);
}
function Ca(...t) {
  const s = t.reduce(
    (n, a) => (
      a instanceof Set
        ? n.push(...a)
        : typeof a == "string"
          ? n.push(a)
          : Array.isArray(a)
            ? n.push(Ca(...a))
            : typeof a == "object" &&
              Object.entries(a).forEach(([r, i]) => {
                i && n.push(r);
              }),
      n
    ),
    [],
  );
  return ph(s, " ").trim();
}
function i7(t, s) {
  const n = new r7(t, s);
  return {
    create: a,
    getStyle: n.getStyle.bind(n),
    isApplied: n.isApplied.bind(n),
  };
  function a(r) {
    const i = {};
    return (
      b_(n, r, new a7(n)).forEach(([c, d, u]) => {
        Qh(n, d, u).forEach((f) => {
          o(c, f);
        });
      }),
      n.apply(),
      i
    );
    function o(c, d) {
      ((i[c] = i[c] ?? new Set()), i[c].add(d));
    }
  }
}
function b_(t, s, n) {
  const a = [];
  return (
    Mv(s, (r, i) => {
      if (d_(r))
        return b_(t, i, n.addPrecondition(r)).forEach((o) => a.push(o));
      a.push([r, s[r], n.addScope(r)]);
    }),
    a
  );
}
function Qh(t, s, n) {
  const a = new Set();
  return (
    Mv(s, (r, i) => {
      let o = [];
      if (d_(r)) o = Qh(t, i, n.addPostcondition(r));
      else if (XO(r)) o = u1(i);
      else if (f_(r)) o = l7(t, i, r, n);
      else if (m_(r)) o = o7(t, i, n);
      else if (u_(r, i)) {
        const c = n.createRule(r, i);
        (t.addRule(c), a.add(c.hash));
      }
      return y_(o, a);
    }),
    a
  );
}
function y_(t, s) {
  return (t.forEach((n) => s.add(n)), s);
}
function o7(t, s, n) {
  const a = new Set(),
    r = [];
  if (
    (Mv(s, (i, o) => {
      if (u_(i, o)) {
        r.push(h_.genRule(i, o));
        return;
      }
      const c = Qh(t, o ?? {}, n);
      y_(c, a);
    }),
    !n.scopeClassName)
  )