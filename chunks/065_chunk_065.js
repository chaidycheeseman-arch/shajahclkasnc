                                        })
                                      : e.jsxs("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center p-2 text-center text-xs text-gray-400",
                                          children: [
                                            (typeof (y.content || y.caption) ==
                                            "string"
                                              ? y.content || y.caption || ""
                                              : ((v = y.content) == null
                                                  ? void 0
                                                  : v.text) ||
                                                ((b = y.content) == null
                                                  ? void 0
                                                  : b.zh) ||
                                                ((N = y.caption) == null
                                                  ? void 0
                                                  : N.text) ||
                                                ((w = y.caption) == null
                                                  ? void 0
                                                  : w.zh) ||
                                                "" ||
                                                ""
                                            ).substring(0, 20),
                                            "...",
                                          ],
                                        }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute bottom-1 left-1 flex items-center space-x-1 text-white text-xs drop-shadow-md",
                                      children: [
                                        e.jsx(xr, { size: 12, fill: "white" }),
                                        e.jsx("span", {
                                          children: y.stats.likes,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                y.id,
                              );
                            }),
                          })
                        : e.jsxs("div", {
                            className:
                              "py-20 flex flex-col items-center text-gray-400",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-sm font-medium text-black mb-2",
                                children: "暂无作品",
                              }),
                              e.jsx("div", {
                                className: "text-xs",
                                children: "发布你的第一条作品",
                              }),
                            ],
                          })),
                    d === "likes" &&
                      (h.length > 0
                        ? e.jsx("div", {
                            className: "grid grid-cols-3 gap-[1px]",
                            children: h.map((y) => {
                              var v, b, N, w, _;
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "aspect-[3/4] bg-gray-100 relative cursor-pointer",
                                  onClick: () => s && s(y.id),
                                  children: [
                                    y.mediaUrl || y.cover
                                      ? e.jsx("img", {
                                          src: y.mediaUrl || y.cover,
                                          className:
                                            "w-full h-full object-cover",
                                          alt: "cover",
                                        })
                                      : e.jsxs("div", {
                                          className:
                                            "absolute inset-0 flex items-center justify-center p-2 text-center text-xs text-gray-400",
                                          children: [
                                            (typeof (y.content || y.caption) ==
                                            "string"
                                              ? y.content || y.caption || ""
                                              : ((v = y.content) == null
                                                  ? void 0
                                                  : v.text) ||
                                                ((b = y.content) == null
                                                  ? void 0
                                                  : b.zh) ||
                                                ((N = y.caption) == null
                                                  ? void 0
                                                  : N.text) ||
                                                ((w = y.caption) == null
                                                  ? void 0
                                                  : w.zh) ||
                                                "" ||
                                                ""
                                            ).substring(0, 20),
                                            "...",
                                          ],
                                        }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute bottom-1 left-1 flex items-center space-x-1 text-white text-xs drop-shadow-md",
                                      children: [
                                        e.jsx(zn, {
                                          size: 12,
                                          fill: "white",
                                          strokeWidth: 0,
                                        }),
                                        e.jsx("span", {
                                          children:
                                            ((_ = y.stats) == null
                                              ? void 0
                                              : _.likes) ?? 0,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                y.id,
                              );
                            }),
                          })
                        : e.jsx("div", {
                            className:
                              "py-20 flex flex-col items-center text-gray-400",
                            children: e.jsx("div", {
                              className: "text-sm",
                              children: "暂无喜欢",
                            }),
                          })),
                    d === "live" &&
                      (g.length > 0
                        ? e.jsx("div", {
                            className: "flex flex-col gap-2 px-1",
                            children: g.map((y) =>
                              e.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => (a == null ? void 0 : a(y)),
                                  className:
                                    "flex gap-3 w-full text-left rounded-xl overflow-hidden bg-gray-50 border border-gray-100 active:bg-gray-100 p-2",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-[5.5rem] aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shrink-0",
                                      children: y.coverDataUrl
                                        ? e.jsx("img", {
                                            src: y.coverDataUrl,
                                            className:
                                              "w-full h-full object-cover",
                                            alt: "",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-full h-full bg-gradient-to-br from-gray-200 to-gray-300",
                                          }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "min-w-0 flex-1 py-0.5 flex flex-col justify-center",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "text-sm font-medium text-black line-clamp-2",
                                          children: y.title || "未命名直播",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "text-xs text-gray-400 mt-1 tabular-nums",
                                          children: y.endedAt
                                            ? new Date(
                                                y.endedAt,
                                              ).toLocaleString()
                                            : "",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                y.id,
                              ),
                            ),
                          })
                        : e.jsx("div", {
                            className:
                              "py-20 flex flex-col items-center text-gray-400",
                            children: e.jsx("div", {
                              className: "text-sm",
                              children: "暂无直播记录",
                            }),
                          })),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  Of = (t) =>
    t ? (t > 1e4 ? (t / 1e4).toFixed(1) + "万" : t.toString()) : "0",
  kq = ({
    userId: t,
    onBack: s,
    onVideoClick: n,
    onChatClick: a,
    onOpenLiveRecord: r,
  }) => {
    const {
        videos: i,
        npcs: o,
        updateNpc: c,
        following: d,
        friends: u,
        toggleFollow: f,
        generateNpcHistory: p,
        npcVideos: m,
        npcLikedVideos: h,
        setNpcLikedVideosFor: g,
        npcFollowingLists: x,
        setNpcFollowingListFor: y,
        injectDouyinMemory: v,
        getNpcProfile: b,
        contacts: N,
        getRoleBoundUser: w,
        userPersona: _,
        userPresets: A,
        getCoverForVideo: k,
        ensureCoverAssignments: C,
        getAuthorAvatar: M,
        getAuthorBackground: E,
      } = ei(),
      { generateNpcLikedVideos: S, generateNpcFollowingList: j } = l2(),
      [T, I] = l.useState("works"),
      [L, B] = l.useState(null),
      [F, D] = l.useState([]),
      [$, P] = l.useState([]),
      [z, O] = l.useState(!1);
    l.useRef(null);
    const [Z, K] = l.useState(!1),
      [q, V] = l.useState(!1),
      [ne, le] = l.useState([]),
      [ie, X] = l.useState(!1),
      je = l.useRef(null),
      [xe, ye] = l.useState([]),
      R = l.useRef(b),
      oe = l.useRef(p);
    l.useEffect(() => {
      ((R.current = b), (oe.current = p));
    }, [b, p]);
    const ee = l.useMemo(() => {
        var he;
        if (!t) return [];
        const W = [
            ...(Array.isArray(i) ? i : []),
            ...(Array.isArray(m == null ? void 0 : m[t]) ? m[t] : []),
          ],
          ue = new Set(),
          re = [];
        for (const ge of W) {
          const J =
              (he = ge == null ? void 0 : ge.author) == null ? void 0 : he.id,
            G = ge == null ? void 0 : ge.id;
          !G || J !== t || ue.has(G) || (ue.add(G), re.push(ge));
        }
        return re;
      }, [t, i, m]),
      H = l.useMemo(() => {
        var he;
        if (!t) return "";
        const W = [
            ...(Array.isArray(i) ? i : []),
            ...(Array.isArray(m == null ? void 0 : m[t]) ? m[t] : []),
          ],
          ue = new Set(),
          re = [];
        for (const ge of W) {
          const J =
              (he = ge == null ? void 0 : ge.author) == null ? void 0 : he.id,
            G = ge == null ? void 0 : ge.id;
          !G || J !== t || ue.has(G) || (ue.add(G), re.push(String(G)));
        }
        return (re.sort(), re.join(","));
      }, [t, i, m]),
      Y = l.useRef(ee);
    Y.current = ee;
    const U = l.useMemo(
      () =>
        (Array.isArray(F) ? F : []).filter((ue) => {
          var re;
          return (
            ((re = ue == null ? void 0 : ue.author) == null
              ? void 0
              : re.id) === t
          );
        }),
      [F, t],
    );
    l.useEffect(() => {
      if (!t || !C) return;
      const W = U.map((re) => re.id),
        ue = $.map((re) => re.id);
      (W.length && C(t, W), ue.length && C(t, ue));
    }, [t, U, $]);
    const ce = (W) => {
      var he;
      const ue = (he = W.target.files) == null ? void 0 : he[0];
      if (!ue || !L) return;
      const re = new FileReader();
      ((re.onloadend = () => {
        const ge = re.result;
        if (!ge) return;
        const J = { ...L, cover: ge };
        (B(J), typeof c == "function" && c(J));
        try {
          W.target.value = "";
        } catch {}
      }),
        re.readAsDataURL(ue));
    };
    (l.useEffect(() => {
      (async () => {
        var ue, re;
        if (t) {
          X(!0);
          try {
            const he = await ((ue = R.current) == null
                ? void 0
                : ue.call(R, t)),
              ge = Y.current;
            if (he)
              if ((B(he), ge.length > 0)) D(ge);
              else if (he._profileVideos && he._profileVideos.length > 0)
                D(he._profileVideos);
              else {
                const J = await ((re = oe.current) == null
                  ? void 0
                  : re.call(oe, he));
                D(Array.isArray(J) ? J : []);
              }
          } catch {
          } finally {
            X(!1);
          }
        }
      })();
    }, [t, H]),
      l.useEffect(() => {
        if (!t) return;
        const W = h == null ? void 0 : h[t];
        Array.isArray(W) && W.length > 0 && P(W);
      }, [t, h]),
      l.useEffect(() => {
        if (!t) return;
        const W = x == null ? void 0 : x[t];
        Array.isArray(W) && W.length > 0 && le(W);
      }, [t, x]),
      l.useEffect(() => {
        if (!t) return;
        let W = !1;
        return (
          (async () => {
            try {
              const ue = await u2();
              if (W) return;
              const re = (ue || []).filter(
                (he) =>
                  he &&
                  he.hostKind === "npc" &&
                  String(he.npcHostId) === String(t),
              );
              ye(re);
            } catch {
              W || ye([]);
            }
          })(),
          () => {
            W = !0;
          }
        );
      }, [t, T]));
    const pe = async () => {
        if ((K(!0), !(ne.length > 0 || q || !L))) {
          V(!0);
          try {
            let W = "";
            if (
              L.knowsUserIdentity === !0 &&
              L.sourceType === "contact" &&
              L.contactId
            ) {
              const he = (N || []).find((J) => J.id === L.contactId),
                ge = he && typeof w == "function" ? w(he) : {};
              W = String((ge == null ? void 0 : ge.settings) || "").slice(
                0,
                400,
              );
            } else if (
              L.knowsUserIdentity === !0 &&
              Array.isArray(L.boundUserPresets) &&
              L.boundUserPresets.length
            ) {
              const he = (A || []).find(
                (ge) =>
                  String(ge == null ? void 0 : ge.id) ===
                  String(L.boundUserPresets[0]),
              );
              W = String(
                (he == null ? void 0 : he.douyinPersona) ||
                  (_ == null ? void 0 : _.douyinPersona) ||
                  "",
              ).slice(0, 400);
            }
            const re = (
              (await j(
                { name: L.name, bio: L.bio, style: L.style },
                { boundUserPersona: W },
              )) || []
            )
              .slice(0, 30)
              .map((he, ge) => {
                const J = he.name || `momo_${ge + 1}`,
                  G = he.avatarStyle || "micah";
                return {
                  id: he.id || `follow_${t}_${Date.now()}_${ge}`,
                  name: J,
                  avatar: `https://api.dicebear.com/7.x/${G}/svg?seed=${J}`,
                  bio: he.bio || "",
                  isOfficial: !!he.isOfficial,
                };
              });
            (le(re), typeof y == "function" && y(t, re));
          } finally {
            V(!1);
          }
        }
      },
      se = async () => {
        if (!(!L || z)) {
          O(!0);
          try {
            let W = "";
            if (
              L.knowsUserIdentity === !0 &&
              L.sourceType === "contact" &&
              L.contactId
            ) {
              const he = (N || []).find((J) => J.id === L.contactId),
                ge = he && typeof w == "function" ? w(he) : {};
              W = String((ge == null ? void 0 : ge.settings) || "").slice(
                0,
                400,
              );
            } else if (
              L.knowsUserIdentity === !0 &&
              Array.isArray(L.boundUserPresets) &&
              L.boundUserPresets.length
            ) {
              const he = (A || []).find(
                (ge) =>
                  String(ge == null ? void 0 : ge.id) ===
                  String(L.boundUserPresets[0]),
              );
              W = String(
                (he == null ? void 0 : he.douyinPersona) ||
                  (_ == null ? void 0 : _.douyinPersona) ||
                  "",
              ).slice(0, 400);
            }
            const re = (
              (await S(
                { name: L.name, bio: L.bio, style: L.style },
                { boundUserPersona: W },
              )) || []
            )
              .slice(0, 2)
              .map((he, ge) => {
                const J = he.author || {},
                  G = J.name || `momo_${ge + 1}`,
                  we = J.id || `like_author_${Date.now()}_${ge}`,
                  Q = J.avatarStyle || "micah",
                  ve = (Ae, te) => {
                    if (Ae === L.name) {
                      const Fe = L.contactId
                        ? (N || []).find(($e) => $e.id === L.contactId)
                        : null;
                      return (
                        L.avatar ||
                        (Fe == null ? void 0 : Fe.portrait) ||
                        (Fe == null ? void 0 : Fe.avatar) ||
                        `https://api.dicebear.com/7.x/avataaars/svg?seed=${Ae}`
                      );
                    }
                    const Se = (o || []).find((Fe) => Fe.name === Ae);
                    if (Se != null && Se.contactId) {
                      const Fe = (N || []).find(($e) => $e.id === Se.contactId);
                      if (Fe) return Fe.portrait || Fe.avatar;
                    }
                    return Se != null && Se.avatar
                      ? Se.avatar
                      : `https://api.dicebear.com/7.x/${te || "micah"}/svg?seed=${Ae}`;
                  },
                  Ve = (Array.isArray(he.comments) ? he.comments : []).map(
                    (Ae, te) => {
                      var Xe;
                      const Se = Ae.user || "momo",
                        Fe = ve(Se, Ae.avatarStyle),
                        $e =
                          Se === L.name
                            ? t
                            : ((Xe = (o || []).find((ht) => ht.name === Se)) ==
                              null
                                ? void 0
                                : Xe.id) || `temp_user_${Se}`,
                        tt = (Ae.replies || []).map((ht, Pe) => ({
                          id: Date.now() + ge * 1e5 + te * 1e3 + Pe,
                          user: {
                            name: ht.user || "网友",
                            avatar: ve(ht.user || "网友", ht.avatarStyle),
                            id: `temp_reply_${ge}_${te}_${Pe}`,
                          },
                          content: ht.content || "",
                          likes: ht.likes || 0,
                          timestamp:
                            Date.now() - Math.floor(Math.random() * 18e5),
                          location: ht.location || "未知",
                          isLiked: !1,
                        }));
                      return {
                        id: Date.now() + ge * 1e5 + te,
                        user: { name: Se, avatar: Fe, id: $e },
                        content: Ae.content || "",
                        likes: Ae.likes || 0,
                        timestamp: Date.now() - Math.floor(Math.random() * 1e7),
                        location: Ae.location || "未知",
                        replyCount: Ae.replyCount ?? tt.length,
                        isLiked: !1,
                        replies: tt,
                      };
                    },
                  );
                return {
                  id: `liked_${t}_${Date.now()}_${ge}_${Math.random().toString(16).slice(2)}`,
                  type: "text",
                  scenes:
                    Array.isArray(he.scenes) && he.scenes.length > 0
                      ? he.scenes
                      : [{ visual: he.caption, subtitle: he.caption }],
                  caption: he.caption || "",
                  content: he.caption || "",
                  author: {
                    id: we,
                    name: G,
                    avatar: `https://api.dicebear.com/7.x/${Q}/svg?seed=${G}`,
                    isFollowing: !1,
                  },
                  stats: {
                    ...(he.stats || {
                      likes: 1200,
                      comments: 20,
                      shares: 5,
                      favorites: 2,
                      views: 12e3,
                    }),
                    comments: Ve.length,
                  },
                  bgm: {
                    name: "",
                    author: "",
                    url: null,
                    cover: null,
                    disabled: !0,
                  },
                  isLiked: !1,
                  isFavorited: !1,
                  comments: Ve,
                };
              });
            P((he) => {
              const ge = [...he, ...re];
              return (
                typeof g == "function" && g(t, ge),
                typeof v == "function" &&
                  L != null &&
                  L.name &&
                  re.length > 0 &&
                  v(
                    t,
                    L.name,
                    "liked_video",
                    `点赞了 ${re.length} 条视频`,
                  ).catch(() => {}),
                ge
              );
            });
          } finally {
            O(!1);
          }
        }
      };
    if ((l.useEffect(() => {}, [T]), !L))
      return ie
        ? e.jsx("div", {
            className:
              "h-full w-full bg-black flex items-center justify-center text-white",
            children: "加载中...",
          })
        : e.jsxs("div", {
            className:
              "h-full w-full bg-white flex flex-col items-center justify-center p-6 text-center text-black",
            children: [
              e.jsx("p", {
                className: "text-gray-600 mb-4",
                children: "暂时无法加载该用户主页",
              }),
              typeof s == "function" &&
                e.jsx("button", {
                  type: "button",
                  onClick: s,
                  className:
                    "px-4 py-2 rounded-full bg-[#03CCD9] text-white text-sm",
                  children: "返回",
                }),
            ],
          });
    const Te = d.includes(t),
      ke = u.includes(t);
    return e.jsxs("div", {
      className: "h-full w-full bg-white text-black relative z-50",
      children: [
        e.jsxs("div", {
          className:
            "absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-14 px-4 pb-2 pointer-events-none",
          children: [
            e.jsx("button", {
              onClick: s,
              className:
                "w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-auto",
              children: e.jsx(un, { size: 24, className: "text-white" }),
            }),
            e.jsx("div", {
              className: "flex items-center space-x-3 pointer-events-auto",
              children: e.jsx("button", {
                type: "button",
                className:
                  "w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center",
                onClick: () => {
                  var W;
                  return (W = je.current) == null ? void 0 : W.click();
                },
                children: e.jsx(pr, { size: 20, className: "text-white" }),
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "h-full w-full overflow-y-auto no-scrollbar",
          children: [
            (() => {
              const W =
                  (typeof M == "function" ? M(t) : null) ||
                  (L == null ? void 0 : L.avatar),
                ue =
                  (typeof E == "function" ? E(t) : null) ||
                  (L == null ? void 0 : L.cover) ||
                  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              return e.jsxs("div", {
                className: "relative w-full h-[220px]",
                children: [
                  e.jsx("input", {
                    ref: je,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: ce,
                  }),
                  e.jsx("img", {
                    src: ue,
                    alt: "cover",
                    className: "w-full h-full object-cover",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60",
                  }),
                  e.jsxs("div", {
                    className:
                      "absolute bottom-8 left-4 right-4 z-10 flex items-center space-x-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-[84px] h-[84px] rounded-full border-2 border-white/80 overflow-hidden bg-gray-200 flex-shrink-0",
                        children: W
                          ? e.jsx("img", {
                              src: W,
                              alt: L.name,
                              className: "w-full h-full object-cover",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-purple-500 to-pink-500",
                              children: (L.name || "?")[0],
                            }),
                      }),
                      e.jsx("div", {
                        className: "flex-1 min-w-0",
                        children: e.jsx("h1", {
                          className:
                            "text-white text-[22px] font-bold truncate drop-shadow-md",
                          children: L.name,
                        }),
                      }),
                    ],
                  }),
                ],
              });
            })(),
            e.jsxs("div", {
              className:
                "px-4 relative -mt-4 bg-white rounded-t-2xl pt-5 min-h-[500px]",
              children: [
                e.jsxs("div", {
                  className: "flex items-center space-x-6 mb-4 text-[15px]",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-1",
                      children: [
                        e.jsx("span", {
                          className: "font-bold text-black",
                          children: Of(L.likes),
                        }),
                        e.jsx("span", {
                          className: "text-gray-500 text-xs",
                          children: "获赞",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center space-x-1 cursor-pointer",
                      onClick: pe,
                      children: [
                        e.jsx("span", {
                          className: "font-bold text-black",
                          children: Of(L.following),
                        }),
                        e.jsx("span", {
                          className: "text-black text-xs",
                          children: "关注",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center space-x-1",
                      children: [
                        e.jsx("span", {
                          className: "font-bold text-black",
                          children: Of(L.followers),
                        }),
                        e.jsx("span", {
                          className: "text-gray-500 text-xs",
                          children: "粉丝",
                        }),
                      ],
                    }),
                  ],
                }),
                Z &&
                  e.jsx("div", {
                    className:
                      "fixed inset-0 z-[80] bg-black/40 flex items-end sm:items-center justify-center",
                    onClick: () => K(!1),
                    children: e.jsxs("div", {
                      className:
                        "w-full sm:w-[520px] bg-white rounded-t-2xl sm:rounded-2xl p-6 shadow-2xl",
                      onClick: (W) => W.stopPropagation(),
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "font-serif text-lg font-bold text-[#2c2c2c]",
                              children: "TA 的关注",
                            }),
                            e.jsx("button", {
                              onClick: () => K(!1),
                              className:
                                "text-[#2c2c2c] hover:opacity-60 transition-opacity",
                              children: e.jsx(Ts, { size: 18 }),
                            }),
                          ],
                        }),
                        q
                          ? e.jsx("div", {
                              className:
                                "py-10 text-center text-[#999] text-sm font-serif",
                              children: "正在生成关注列表...",
                            })
                          : e.jsxs("div", {
                              className:
                                "max-h-[60vh] overflow-y-auto space-y-3",
                              children: [
                                ne.map((W) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-3 p-3 border border-[#f0f0f0] rounded-lg",
                                      children: [
                                        e.jsx("img", {
                                          src: W.avatar,
                                          className:
                                            "w-10 h-10 rounded-full object-cover",
                                          alt: W.name,
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0 flex-1",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "font-serif text-sm font-bold text-[#2c2c2c] truncate",
                                              children: [
                                                W.name,
                                                " ",
                                                W.isOfficial &&
                                                  e.jsx("span", {
                                                    className:
                                                      "ml-1 text-[10px] bg-[#2b5ae1] text-white px-1 rounded-[2px]",
                                                    children: "官",
                                                  }),
                                              ],
                                            }),
                                            W.bio &&
                                              e.jsx("div", {
                                                className:
                                                  "text-[11px] text-[#888] mt-1 truncate",
                                                children: W.bio,
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    W.id,
                                  ),
                                ),
                                ne.length === 0 &&
                                  e.jsx("div", {
                                    className:
                                      "py-10 text-center text-[#999] text-sm font-serif",
                                    children: "暂无关注",
                                  }),
                              ],
                            }),
                      ],
                    }),
                  }),
                e.jsxs("div", {
                  className: "mb-4",
                  children: [
                    L.signature &&
                      e.jsx("div", {
                        className:
                          "text-gray-900 text-sm mb-3 leading-relaxed whitespace-pre-wrap",
                        children: L.signature,
                      }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-gray-100 px-2 py-1 rounded-[2px] text-xs text-gray-500 flex items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "bg-gray-400 text-[10px] px-1 rounded mr-1 text-white",
                              children: "IP",
                            }),
                            L.location,
                          ],
                        }),
                        L.age &&
                          e.jsxs("div", {
                            className:
                              "bg-gray-100 px-2 py-1 rounded-[2px] text-xs text-gray-500",
                            children: [L.age, "岁"],
                          }),
                        L.school &&
                          e.jsx("div", {
                            className:
                              "bg-gray-100 px-2 py-1 rounded-[2px] text-xs text-gray-500",
                            children: L.school,
                          }),
                        (Array.isArray(L.tags)
                          ? L.tags
                          : String(L.tags || "")
                              .split(/[,\s，、]+/)
                              .filter(Boolean)
                        )
                          .slice(0, 8)
                          .map((W, ue) =>
                            e.jsx(
                              "div",
                              {
                                className:
                                  "bg-gray-100 px-2 py-1 rounded-[2px] text-xs text-gray-500",
                                children: W,
                              },
                              `${W}_${ue}`,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-2 mb-6 mt-4",
                  children: ke
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("button", {
                            className:
                              "flex-1 h-9 bg-gray-100 rounded-[4px] text-gray-800 font-medium text-sm flex items-center justify-center gap-1",
                            onClick: () => a && a(L),
                            children: [
                              e.jsx(ri, {
                                size: 16,
                                className:
                                  "rotate-[-45deg] -mt-1 text-[#03CCD9]",
                                strokeWidth: 2.25,
                              }),
                              "发私信",
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            className:
                              "w-9 h-9 bg-gray-100 rounded-[4px] flex items-center justify-center text-gray-700",
                            onClick: () => f(t),
                            "aria-label": "取消关注",
                            children: e.jsx(u3, {
                              size: 17,
                              strokeWidth: 2.25,
                            }),
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("button", {
                            type: "button",
                            className: `flex-1 h-9 rounded-lg font-medium text-sm flex items-center justify-center gap-1.5 transition-colors ${Te ? "bg-[#03CCD9]/12 text-[#03CCD9] border border-[#03CCD9]/45" : "bg-[#03CCD9] text-white shadow-[0_2px_10px_rgba(3,204,217,0.35)]"}`,
                            onClick: () => f(t),
                            children: Te
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(Lh, {
                                      size: 17,
                                      strokeWidth: 2.25,
                                      className: "shrink-0",
                                    }),
                                    "已关注",
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(wu, {
                                      size: 17,
                                      strokeWidth: 2.25,
                                      className: "shrink-0",
                                    }),
                                    "关注",
                                  ],
                                }),
                          }),
                          e.jsx("button", {
                            className:
                              "w-9 h-9 bg-gray-100 rounded-[4px] flex items-center justify-center text-gray-800",
                            onClick: () => a && a(L),
                            children: e.jsx(ri, {
                              size: 19,
                              className: "text-[#03CCD9]",
                              strokeWidth: 2.25,
                              fill: "none",
                            }),
                          }),
                        ],
                      }),
                }),
                e.jsx("div", {
                  className: "border-b border-gray-100 mb-1",
                  children: e.jsxs("div", {
                    className: "flex items-center space-x-6",
                    children: [
                      e.jsxs("div", {
                        className: `pb-3 relative cursor-pointer ${T === "works" ? "text-black font-medium" : "text-gray-500"}`,
                        onClick: () => I("works"),
                        children: [
                          e.jsxs("span", { children: ["作品 ", U.length] }),
                          T === "works" &&
                            e.jsx("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-[2px] bg-[#03CCD9]",
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: `pb-3 relative cursor-pointer ${T === "likes" ? "text-black font-medium" : "text-gray-500"}`,
                        onClick: () => I("likes"),
                        onDoubleClick: () => {
                          (I("likes"), se());
                        },
                        children: [
                          e.jsxs("span", { children: ["喜欢 ", $.length] }),
                          T === "likes" &&
                            e.jsx("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-[2px] bg-[#03CCD9]",
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: `pb-3 relative cursor-pointer ${T === "live" ? "text-black font-medium" : "text-gray-500"}`,
                        onClick: () => I("live"),
                        children: [
                          e.jsxs("span", { children: ["直播 ", xe.length] }),
                          T === "live" &&
                            e.jsx("div", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-[2px] bg-[#03CCD9]",
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "grid grid-cols-3 gap-[1px] -mx-4",
                  children:
                    T === "works"
                      ? ie
                        ? e.jsx("div", {
                            className:
                              "col-span-3 py-10 text-center text-gray-400 text-sm",
                            children: "正在生成历史作品...",
                          })
                        : U.length > 0
                          ? U.map((W, ue) => {
                              var he, ge, J, G;
                              const re =
                                (k == null ? void 0 : k(t, W.id, ue)) ||
                                W.cover;
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "aspect-[3/4] bg-gray-100 relative cursor-pointer",
                                  onClick: () => n && n(W.id, U),
                                  children: [
                                    re
                                      ? e.jsx("img", {
                                          src: re,
                                          className:
                                            "w-full h-full object-cover",
                                          alt: "cover",
                                        })
                                      : e.jsxs("div", {
                                          className:
                                            "w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-400 p-2 text-center",
                                          children: [
                                            (typeof (W.content || W.caption) ==
                                            "string"
                                              ? W.content || W.caption || ""
                                              : ((he = W.content) == null
                                                  ? void 0
                                                  : he.text) ||
                                                ((ge = W.content) == null
                                                  ? void 0
                                                  : ge.zh) ||
                                                ((J = W.caption) == null
                                                  ? void 0
                                                  : J.text) ||
                                                ((G = W.caption) == null
                                                  ? void 0
                                                  : G.zh) ||
                                                "" ||
                                                ""
                                            ).substring(0, 10),
                                            "...",
                                          ],
                                        }),
                                    ue < 3 &&
                                      e.jsx("div", {
                                        className:
                                          "absolute top-1 left-1 bg-[#03CCD9] rounded-[3px] p-[3px] flex items-center justify-center shadow-sm",
                                        title: "置顶",
                                        children: e.jsx(W0, {
                                          size: 11,
                                          className: "text-white",
                                          strokeWidth: 2.5,
                                        }),
                                      }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute bottom-1 left-1 flex items-center space-x-1 text-white text-xs drop-shadow-md",
                                      children: [
                                        e.jsx(zn, {
                                          size: 12,
                                          fill: "transparent",
                                          strokeWidth: 2,
                                        }),
                                        e.jsx("span", {
                                          children: Of(W.stats.likes),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                W.id,
                              );
                            })
                          : e.jsx("div", {
                              className:
                                "col-span-3 py-20 flex flex-col items-center text-gray-400",
                              children: e.jsx("div", {
                                className: "text-sm",
                                children: "暂无作品",
                              }),
                            })
                      : T === "likes"
                        ? z
                          ? e.jsx("div", {
                              className:
                                "col-span-3 py-10 text-center text-gray-400 text-sm",
                              children: "正在生成喜欢的视频...",
                            })
                          : $.length > 0
                            ? $.map((W, ue) => {
                                var he, ge, J, G;
                                const re =
                                  (k == null ? void 0 : k(t, W.id, ue)) ||
                                  W.cover;
                                return e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "aspect-[3/4] bg-gray-100 relative cursor-pointer",
                                    onClick: () => n && n(W.id, $),
                                    children: [
                                      re
                                        ? e.jsx("img", {
                                            src: re,
                                            className:
                                              "w-full h-full object-cover",
                                            alt: "cover",
                                          })
                                        : e.jsxs("div", {
                                            className:
                                              "w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-400 p-2 text-center",
                                            children: [
                                              (typeof (
                                                W.content || W.caption
                                              ) == "string"
                                                ? W.content || W.caption || ""
                                                : ((he = W.content) == null
                                                    ? void 0
                                                    : he.text) ||
                                                  ((ge = W.content) == null
                                                    ? void 0
                                                    : ge.zh) ||
                                                  ((J = W.caption) == null
                                                    ? void 0
                                                    : J.text) ||
                                                  ((G = W.caption) == null
                                                    ? void 0
                                                    : G.zh) ||
                                                  "" ||
                                                  ""
                                              ).substring(0, 10),
                                              "...",
                                            ],
                                          }),
                                      e.jsxs("div", {
                                        className:
                                          "absolute bottom-1 left-1 flex items-center space-x-1 text-white text-xs drop-shadow-md",
                                        children: [
                                          e.jsx(zn, {
                                            size: 12,
                                            fill: "transparent",
                                            strokeWidth: 2,
                                          }),
                                          e.jsx("span", {
                                            children: Of(W.stats.likes),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  W.id,
                                );
                              })
                            : e.jsx("div", {
                                className:
                                  "col-span-3 py-20 flex flex-col items-center text-gray-400",
                                children: e.jsx("div", {
                                  className: "text-sm",
                                  children: "暂无喜欢",
                                }),
                              })
                        : xe.length > 0
                          ? xe.map((W) => {
                              const ue = W.endedAt ? new Date(W.endedAt) : null,
                                re = ue
                                  ? `${ue.getMonth() + 1}/${ue.getDate()} ${String(ue.getHours()).padStart(2, "0")}:${String(ue.getMinutes()).padStart(2, "0")}`
                                  : "";
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "aspect-[3/4] bg-gray-100 relative cursor-pointer",
                                  onClick: () => (r == null ? void 0 : r(W)),
                                  children: [
                                    W.coverDataUrl
                                      ? e.jsx("img", {
                                          src: W.coverDataUrl,
                                          className:
                                            "w-full h-full object-cover",
                                          alt: "",
                                        })
                                      : e.jsx("div", {
                                          className:
                                            "w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center p-2",
                                          children: e.jsx("span", {
                                            className:
                                              "text-[11px] text-white/90 text-center line-clamp-4",
                                            children: W.title || "直播",
                                          }),
                                        }),
                                    e.jsxs("div", {
                                      className:
                                        "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent pt-8 pb-1.5 px-1.5",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-[11px] text-white font-medium truncate drop-shadow-sm",
                                          children: W.title || "直播",
                                        }),
                                        re
                                          ? e.jsx("p", {
                                              className:
                                                "text-[9px] text-white/75 tabular-nums",
                                              children: re,
                                            })
                                          : null,
                                      ],
                                    }),
                                  ],
                                },
                                W.id,
                              );
                            })
                          : e.jsx("div", {
                              className:
                                "col-span-3 py-20 flex flex-col items-center text-gray-400",
                              children: e.jsx("div", {
                                className: "text-sm",
                                children: "暂无直播记录",
                              }),
                            }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Sq = ({
    onEditProfile: t,
    onVideoClick: s,
    onChatClick: n,
    isOtherUser: a = !1,
    userId: r = null,
    onBack: i,
    onClose: o,
    onOpenLiveRecord: c,
  }) => {
    const { currentUser: d } = ei();
    return r === "me" || r === (d == null ? void 0 : d.id) || (!r && !a)
      ? e.jsx(Nq, {
          onEditProfile: t,
          onVideoClick: s,
          onClose: o,
          onOpenLiveRecord: c,
        })
      : e.jsx(kq, {
          userId: r,
          onBack: i,
          onVideoClick: s,
          onChatClick: n,
          onOpenLiveRecord: c,
        });
  },
  _q = ({ className: t }) =>
    e.jsxs("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinejoin: "round",
      className: t,
      "aria-hidden": !0,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5" }),
        e.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.5" }),
        e.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.5" }),
        e.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.5" }),
      ],
    }),
  Aq = ({ className: t }) =>
    e.jsxs("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinejoin: "round",
      className: t,
      "aria-hidden": !0,
      children: [
        e.jsx("rect", { x: "2", y: "5", width: "14", height: "14", rx: "2" }),
        e.jsx("path", {
          d: "M10 9.5l4 2.5-4 2.5v-5z",
          fill: "currentColor",
          stroke: "none",
        }),
      ],
    }),
  Cq = ({ className: t }) =>
    e.jsxs("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: t,
      "aria-hidden": !0,
      children: [
        e.jsx("circle", { cx: "12", cy: "8", r: "4" }),
        e.jsx("path", { d: "M4 20v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" }),
      ],
    }),
  Mq = [
    { id: "comprehensive", label: "综合", Icon: _q },
    { id: "video", label: "视频", Icon: Aq },
    { id: "user", label: "用户", Icon: Cq },
  ],
  x4 = (t) => {
    var n, a;
    const s =
      (t == null ? void 0 : t.caption) ||
      (t == null ? void 0 : t.content) ||
      ((a = (n = t == null ? void 0 : t.scenes) == null ? void 0 : n[0]) == null
        ? void 0
        : a.visual) ||
      "";
    if (s && typeof s == "object") {
      const r = s.text || s.foreign || s.en || "",
        i = s.zh || s.cn || s.translation || "";
      return [r, i].filter(Boolean).join(`
`);
    }
    return s == null ? "" : String(s);
  },
  Tq = ({
    onClose: t,
    onVideoClick: s,
    isOpen: n,
    onUserClick: a,
    onViewProfile: r,
  }) => {
    const {
        allVideos: i,
        npcs: o,
        searchAndGenerateVideos: c,
        toggleFollow: d,
        following: u,
        hotSearches: f,
        registerSearchUserStubs: p,
        refreshHotSearchesFromNpcs: m,
      } = ei(),
      [h, g] = l.useState(""),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(!1),
      [N, w] = l.useState("comprehensive"),
      [_, A] = l.useState(!1),
      [k, C] = l.useState({ videos: [], users: [] });
    l.useEffect(() => {
      p(k.users || []);
    }, [k.users, p]);
    const M = async () => {
        if (!(_ || typeof m != "function")) {
          A(!0);
          try {
            await m();
          } finally {
            A(!1);
          }
        }
      },
      E = () =>
        e.jsxs("div", {
          className: "grid grid-cols-2 gap-1 p-1",
          children: [
            k.videos.map((j) => {
              var T, I;
              return e.jsxs(
                "div",
                {
                  className:
                    "relative aspect-[3/4] bg-gray-100 rounded-sm overflow-hidden cursor-pointer",
                  onClick: () => s && s(j),
                  children: [
                    j.cover || ((T = j.bgm) != null && T.cover)
                      ? e.jsx("img", {
                          src:
                            j.cover || ((I = j.bgm) == null ? void 0 : I.cover),
                          className: "w-full h-full object-cover",
                          alt: "cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full bg-gray-800 flex items-center justify-center p-2",
                          children: e.jsx("p", {
                            className:
                              "text-white text-xs line-clamp-4 text-center opacity-70",
                            children: x4(j),
                          }),
                        }),
                    e.jsxs("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-white text-sm line-clamp-2 mb-1 font-medium",
                          children: x4(j),
                        }),
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center space-x-1",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-4 h-4 rounded-full bg-gray-300 overflow-hidden cursor-pointer",
                                  onClick: (L) => {
                                    (L.stopPropagation(), r && r(j.author.id));
                                  },
                                  children:
                                    j.author.avatar &&
                                    e.jsx("img", {
                                      src: j.author.avatar,
                                      className: "w-full h-full object-cover",
                                      alt: "avatar",
                                    }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-xs text-gray-200 truncate max-w-[60px]",
                                  children: j.author.name,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center space-x-0.5 text-gray-200",
                              children: [
                                e.jsx(xr, { size: 10, fill: "currentColor" }),
                                e.jsx("span", {
                                  className: "text-xs",
                                  children: j.stats.likes,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                j.id,
              );
            }),
            k.videos.length === 0 &&
              !x &&
              e.jsx("div", {
                className: "col-span-2 py-10 text-center text-gray-400 text-sm",
                children: "未找到相关视频",
              }),
          ],
        }),
      S = () =>
        e.jsxs("div", {
          className: "flex flex-col",
          children: [
            k.users.map((j) => {
              const T = u == null ? void 0 : u.includes(j.id);
              return e.jsxs(
                "div",
                {
                  className:
                    "flex items-center p-4 border-b border-gray-50 cursor-pointer active:bg-gray-50",
                  onClick: () => {
                    r ? r(j.id) : a && a(j.id);
                  },
                  children: [
                    e.jsxs("div", {
                      className: "relative mr-3",
                      children: [
                        e.jsx("img", {
                          src: j.avatar,
                          className: "w-12 h-12 rounded-full object-cover",
                          alt: j.name,
                        }),
                        j.isOfficial &&
                          e.jsx("div", {
                            className:
                              "absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-0.5 border-2 border-white",
                            children: e.jsx("svg", {
                              width: "8",
                              height: "8",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "4",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: e.jsx("polyline", {
                                points: "20 6 9 17 4 12",
                              }),
                            }),
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            e.jsx("span", {
                              className: "font-medium text-[15px] mr-1",
                              children: j.name,
                            }),
                            j.relation &&
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-[#03CCD9] bg-[#03CCD9]/12 px-1 rounded-[2px] font-medium",
                                children: j.relation,
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-xs text-gray-500 truncate mt-0.5",
                          children: [
                            "抖音号：",
                            j.id,
                            " · 粉丝 ",
                            j.fans || Math.floor(Math.random() * 1e4),
                          ],
                        }),
                        e.jsx("div", {
                          className: "text-xs text-gray-400 truncate mt-1",
                          children: j.bio,
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: `w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all active:scale-95 ${T ? "bg-gray-100 text-gray-500 border border-gray-200/80" : "bg-[#03CCD9] text-white shadow-[0_2px_10px_rgba(3,204,217,0.4)]"}`,
                      onClick: (I) => {
                        (I.stopPropagation(), d(j.id));
                      },
                      "aria-label": T ? "已关注" : "关注",
                      title: T ? "已关注" : "关注",
                      children: T
                        ? e.jsx(Lh, {
                            size: 18,
                            strokeWidth: 2.25,
                            className: "text-current",
                            "aria-hidden": !0,
                          })
                        : e.jsx(wu, {
                            size: 18,
                            strokeWidth: 2.25,
                            className: "text-current",
                            "aria-hidden": !0,
                          }),
                    }),
                  ],
                },
                j.id,
              );
            }),
            k.users.length === 0 &&
              e.jsx("div", {
                className: "py-10 text-center text-gray-400 text-sm",
                children: "未找到相关用户",
              }),
          ],
        });
    return e.jsxs("div", {
      className:
        "absolute inset-0 bg-white z-50 flex flex-col animate-in slide-in-from-right duration-300 pt-14",
      style: { display: n ? "flex" : "none" },
      children: [
        e.jsxs("div", {
          className: "flex items-center px-2 py-2 border-b border-gray-100",
          children: [
            e.jsx("button", {
              onClick: t,
              className: "p-2",
              children: e.jsx(un, { size: 24, className: "text-gray-800" }),
            }),
            e.jsxs("div", {
              className: "flex-1 relative mx-2 pointer-events-none select-none",
              children: [
                e.jsx("div", {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",
                  children: e.jsx(pr, { size: 16 }),
                }),
                e.jsx("input", {
                  type: "search",
                  autoComplete: "off",
                  readOnly: !0,
                  tabIndex: -1,
                  value: h,
                  placeholder: "搜索你感兴趣的内容...",
                  className:
                    "w-full bg-gray-100 text-black text-sm rounded-[4px] py-2 pl-9 pr-8 border border-transparent transition-colors cursor-default",
                }),
                h &&
                  e.jsx("span", {
                    className:
                      "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 p-1 pointer-events-none",
                    children: e.jsx(Ts, { size: 14 }),
                  }),
              ],
            }),
            e.jsx("span", {
              className:
                "px-3 py-1 text-[#03CCD9] font-medium text-sm pointer-events-none select-none",
              children: "搜索",
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto bg-white",
          children: v
            ? e.jsxs("div", {
                className: "flex flex-col h-full",
                children: [
                  e.jsx("div", {
                    className:
                      "flex items-center border-b border-gray-100 px-2",
                    children: Mq.map(({ id: j, label: T, Icon: I }) => {
                      const L = N === j;
                      return e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => w(j),
                          className: `flex-1 py-3 flex flex-col items-center justify-center gap-0.5 relative ${L ? "text-[#03CCD9]" : "text-gray-400"}`,
                          "aria-label": T,
                          title: T,
                          children: [
                            e.jsx(I, {
                              className: L ? "text-[#03CCD9]" : "text-gray-400",
                            }),
                            e.jsx("span", {
                              className: "sr-only",
                              children: T,
                            }),
                            L &&
                              e.jsx("div", {
                                className:
                                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#03CCD9] rounded-full",
                              }),
                          ],
                        },
                        j,
                      );
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 overflow-y-auto",
                    children: [
                      x &&
                        e.jsxs("div", {
                          className:
                            "p-4 text-center text-gray-500 text-sm flex items-center justify-center space-x-2",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-4 h-4 border-2 border-[#03CCD9] border-t-transparent rounded-full animate-spin",
                            }),
                            e.jsx("span", { children: "正在生成相关内容..." }),
                          ],
                        }),
                      N === "comprehensive" &&
                        e.jsxs(e.Fragment, {
                          children: [
                            k.users.length > 0 &&
                              e.jsx("div", {
                                className: "mb-2 border-b border-gray-50 pb-2",
                                children: S(),
                              }),
                            E(),
                          ],
                        }),
                      N === "video" && E(),
                      N === "user" && S(),
                    ],
                  }),
                ],
              })
            : e.jsx("div", {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "mb-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-3",
                      children: [
                        e.jsx("span", {
                          className: "text-sm font-bold text-gray-900",
                          children: "啾音热搜",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: M,
                          disabled: _,
                          className:
                            "w-7 h-7 rounded-full flex items-center justify-center text-[#03CCD9] bg-[#03CCD9]/10 hover:bg-[#03CCD9]/18 active:opacity-80 disabled:opacity-50 transition-colors",
                          "aria-label": "根据居民传记刷新热搜",
                          title: "根据居民传记刷新热搜",
                          children: e.jsx(Or, {
                            size: 14,
                            strokeWidth: 2.25,
                            className: _ ? "animate-spin" : "",
                            "aria-hidden": !0,
                          }),
                        }),
                      ],
                    }),
                    f && f.length > 0
                      ? e.jsx("div", {
                          className: "space-y-4",
                          children: f.map((j, T) =>
                            e.jsxs(
                              "div",
                              {
                                className: "flex items-start cursor-default",
                                children: [
                                  e.jsx("span", {
                                    className: `w-5 text-sm font-bold mr-3 text-center tabular-nums ${T < 3 ? "text-[#03CCD9]" : "text-gray-400"}`,
                                    children: j.rank || T + 1,
                                  }),
                                  e.jsx("div", {
                                    className: "flex-1 min-w-0",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-1.5",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[15px] text-gray-900 truncate",
                                          children: j.keyword,
                                        }),
                                        j.isHot &&
                                          e.jsx("span", {
                                            className:
                                              "inline-flex items-center justify-center w-[22px] h-[22px] rounded-md bg-[#03CCD9]/14 text-[#03CCD9] shrink-0",
                                            title: "热门",
                                            "aria-label": "热门",
                                            children: e.jsx(II, {
                                              size: 13,
                                              className: "text-[#03CCD9]",
                                              fill: "currentColor",
                                              strokeWidth: 0,
                                              "aria-hidden": !0,
                                            }),
                                          }),
                                      ],
                                    }),
                                  }),
                                  e.jsxs("span", {
                                    className: "text-xs text-gray-400",
                                    children: [
                                      Math.floor(Math.random() * 1e3),
                                      "w",
                                    ],
                                  }),
                                ],
                              },
                              `${j.keyword}-${T}`,
                            ),
                          ),
                        })
                      : e.jsx("div", {
                          className: "py-8 text-center text-gray-400 text-sm",
                          children:
                            "暂无热搜，点击右上角刷新将根据居民人物传记生成",
                        }),
                  ],
                }),
              }),
        }),
      ],
    });
  },
  Oi = ({ text: t }) => {
    const [s, n] = l.useState(!1);
    return e.jsxs("div", {
      className: "relative inline-block ml-2",
      children: [
        e.jsx("button", {
          onClick: () => n(!s),
          className: "text-[#ccc] hover:text-[#2c2c2c] transition-colors",
          children: e.jsx(gp, { size: 14 }),
        }),
        s &&
          e.jsxs("div", {
            className:
              "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-[#2c2c2c] text-white text-xs p-3 rounded-lg shadow-xl z-50 animate-fade-in",
            children: [
              t,
              e.jsx("div", {
                className:
                  "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2c2c2c]",
              }),
            ],
          }),
      ],
    });
  },
  Uo = ({
    label: t,
    value: s,
    onChange: n,
    type: a = "text",
    placeholder: r,
    tooltip: i,
  }) =>
    e.jsxs("div", {
      className: "group mb-8",
      children: [
        e.jsxs("label", {
          className:
            "flex items-center font-serif text-sm text-[#888] mb-2 group-focus-within:text-[#2c2c2c] transition-colors",
          children: [t, i && e.jsx(Oi, { text: i })],
        }),
        e.jsx("input", {
          type: a,
          value: s,
          onChange: n,
          placeholder: r,
          className:
            "w-full bg-transparent border-b border-[#e5e5e5] py-2 text-lg text-[#2c2c2c] font-serif placeholder-[#ddd] outline-none focus:border-[#2c2c2c] transition-colors",
        }),
      ],
    }),
  Ux = ({ title: t, children: s, onSave: n, onClose: a }) =>
    e.jsxs("div", {
      className: "absolute inset-0 z-50 flex flex-col bg-[#fdfbf7]",
      children: [
        e.jsxs("div", {
          className:
            "pt-14 pb-4 px-6 border-b border-[#f0f0f0] flex justify-between items-center bg-[#fffcf9] z-10",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx("button", {
                  onClick: a,
                  className: "hover:opacity-60 transition-opacity",
                  children: e.jsx(un, {
                    size: 24,
                    className: "text-[#2c2c2c]",
                  }),
                }),
                e.jsx("span", {
                  className:
                    "font-serif text-xl font-bold text-[#2c2c2c] tracking-wide",
                  children: t,
                }),
              ],
            }),
            e.jsx("button", {
              onClick: n,
              className:
                "px-4 py-1.5 bg-[#2c2c2c] text-[#fdfbf7] text-xs font-medium tracking-wider hover:bg-black transition-colors rounded-sm",
              children: "保存",
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto p-6 bg-[#fffcf9]",
          children: s,
        }),
      ],
    }),
  Iq = ["恐怖", "浪漫", "搞笑", "温馨", "忧郁"],
  Eq = () => ({ 恐怖: [], 浪漫: [], 搞笑: [], 温馨: [], 忧郁: [] }),
  DC = ({ library: t, setLibrary: s, adding: n, setAdding: a }) => {
    const r = (c) => {
        const d = (n.url || "").trim();
        if (!d) return;
        const u = Array.isArray(t[c]) ? t[c] : [];
        (s({
          ...t,
          [c]: [
            ...u,
            {
              id: Date.now() + Math.random(),
              name: (n.name || "BGM").trim() || "BGM",
              author: (n.author || "未知").trim() || "未知",
              url: d,
            },
          ],
        }),
          a({ cat: null, url: "", name: "", author: "" }));
      },
      i = (c, d) => {
        var p, m;
        const u =
          (m =
            (p = d == null ? void 0 : d.target) == null ? void 0 : p.files) ==
          null
            ? void 0
            : m[0];
        if (!u || !u.type.startsWith("audio/")) return;
        const f = new FileReader();
        ((f.onload = () => {
          const h = Array.isArray(t[c]) ? t[c] : [];
          s({
            ...t,
            [c]: [
              ...h,
              {
                id: Date.now() + Math.random(),
                name: u.name.replace(/\.[^.]*$/, "") || "BGM",
                author: "未知",
                url: f.result,
              },
            ],
          });
        }),
          f.readAsDataURL(u),
          (d.target.value = ""));
      },
      o = (c, d) => {
        const u = (t[c] || []).filter((f) => f.id !== d);
        s({ ...t, [c]: u });
      };
    return e.jsx("div", {
      className: "space-y-6",
      children: Iq.map((c) =>
        e.jsxs(
          "div",
          {
            className: "border-b border-[#e8e6e3] pb-5 last:border-0 last:pb-0",
            children: [
              e.jsx("div", {
                className:
                  "text-[11px] font-medium tracking-[0.2em] text-[#888] uppercase mb-3",
                children: c,
              }),
              e.jsxs("div", {
                className: "flex flex-wrap gap-2 items-center",
                children: [
                  e.jsx("input", {
                    type: "text",
                    placeholder: "名称",
                    value: n.cat === c ? n.name : "",
                    onChange: (d) => a((u) => ({ ...u, name: d.target.value })),
                    onFocus: () => a((d) => ({ ...d, cat: c })),
                    className:
                      "w-20 border-0 border-b border-[#e0ddda] bg-transparent px-0 py-1.5 text-[13px] text-[#2c2c2c] font-serif placeholder-[#bbb] outline-none focus:border-[#2c2c2c] transition-colors",
                  }),
                  e.jsx("input", {
                    type: "text",
                    placeholder: "作者",
                    value: n.cat === c ? n.author : "",
                    onChange: (d) =>
                      a((u) => ({ ...u, author: d.target.value })),
                    className:
                      "w-20 border-0 border-b border-[#e0ddda] bg-transparent px-0 py-1.5 text-[13px] text-[#2c2c2c] font-serif placeholder-[#bbb] outline-none focus:border-[#2c2c2c] transition-colors",
                  }),
                  e.jsx("input", {
                    type: "text",
                    placeholder: "URL",
                    value: n.cat === c ? n.url : "",
                    onChange: (d) =>
                      a((u) => ({ ...u, url: d.target.value, cat: c })),
                    className:
                      "flex-1 min-w-[100px] border-0 border-b border-[#e0ddda] bg-transparent px-0 py-1.5 text-[13px] text-[#2c2c2c] font-serif placeholder-[#bbb] outline-none focus:border-[#2c2c2c] transition-colors",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => r(c),
                    className:
                      "text-[11px] tracking-wider text-[#2c2c2c] border border-[#2c2c2c] px-3 py-1.5 hover:bg-[#2c2c2c] hover:text-white transition-colors",
                    children: "添加",
                  }),
                  e.jsxs("label", {
                    className:
                      "text-[11px] tracking-wider text-[#666] border border-[#d8d6d3] px-3 py-1.5 cursor-pointer hover:border-[#2c2c2c] hover:text-[#2c2c2c] transition-colors inline-flex items-center gap-1",
                    children: [
                      e.jsx(Ta, { size: 12 }),
                      "上传",
                      e.jsx("input", {
                        type: "file",
                        accept: "audio/*",
                        className: "hidden",
                        onChange: (d) => i(c, d),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("ul", {
                className: "mt-3 space-y-1",
                children: (t[c] || []).map((d) =>
                  e.jsxs(
                    "li",
                    {
                      className:
                        "flex items-center justify-between text-[13px] font-serif text-[#2c2c2c] py-1.5 border-b border-[#f2f0ee] last:border-0",
                      children: [
                        e.jsx("span", {
                          className: "truncate",
                          children: d.name || "BGM",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => o(c, d.id),
                          className:
                            "text-[#999] hover:text-[#c00] p-1 transition-colors",
                          children: e.jsx(_n, { size: 12 }),
                        }),
                      ],
                    },
                    d.id,
                  ),
                ),
              }),
            ],
          },
          c,
        ),
      ),
    });
  },
  Lq = ({ library: t, setLibrary: s }) => {
    const [n, a] = l.useState({ cat: null, url: "", name: "", author: "" }),
      [r, i] = l.useState(!0);
    return e.jsxs("div", {
      className: "py-6 border-b border-[#e8e6e3]",
      children: [
        e.jsxs("button", {
          type: "button",
          onClick: () => i((o) => !o),
          className: "w-full flex items-center justify-between text-left group",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("div", {
                  className:
                    "text-[11px] font-medium tracking-[0.25em] text-[#888] uppercase",
                  children: "Background Music",
                }),
                e.jsx("div", {
                  className:
                    "font-serif text-[17px] text-[#2c2c2c] mt-1 tracking-wide",
                  children: "添加通用背景音乐",
                }),
                e.jsx("p", {
                  className: "text-[12px] text-[#999] mt-1 font-serif",
                  children:
                    "按分类上传或填写 URL，生成视频时从对应分类随机选取",
                }),
              ],
            }),
            e.jsx(aa, {
              size: 18,
              className: `text-[#999] shrink-0 transition-transform duration-200 ${r ? "rotate-180" : ""} group-hover:text-[#2c2c2c]`,
            }),
          ],
        }),
        r &&
          e.jsx("div", {
            className: "mt-6 pl-0",
            children: e.jsx(DC, {
              library: t,
              setLibrary: s,
              adding: n,
              setAdding: a,
            }),
          }),
      ],
    });
  },
  Dq = ({
    localSettings: t,
    setLocalSettings: s,
    clearAllData: n,
    bgmLibrary: a,
    setBgmLibrary: r,
  }) =>
    e.jsxs("div", {
      className: "space-y-10",
      children: [
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsx("label", {
              className: "block font-serif text-sm text-[#888]",
              children: "每轮生成数量",
            }),
            e.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                e.jsx("input", {
                  type: "range",
                  min: "1",
                  max: "10",
                  value: t.batchSize,
                  onChange: (i) =>
                    s((o) => ({ ...o, batchSize: parseInt(i.target.value) })),
                  className:
                    "flex-1 h-[2px] bg-[#e5e5e5] appearance-none cursor-pointer accent-[#2c2c2c]",
                }),
                e.jsx("span", {
                  className:
                    "font-serif text-4xl font-bold text-[#2c2c2c] w-12 text-center",
                  children: t.batchSize.toString().padStart(2, "0"),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
          children: [
            e.jsxs("span", {
              className: "font-serif text-lg text-[#2c2c2c] flex items-center",
              children: [
                "启用背景音乐",
                e.jsx(Oi, {
                  text: "开启后，生成视频会从下方「通用背景音乐库」按分类选取 BGM，不调用外部 API。请按分类（恐怖/浪漫/搞笑/温馨/忧郁）上传或添加音乐 URL。",
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () =>
                s((i) => ({
                  ...i,
                  enableBGM: i.enableBGM === void 0 ? !1 : !i.enableBGM,
                })),
              className: `w-12 h-6 rounded-full transition-colors relative ${t.enableBGM !== !1 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
              children: e.jsx("div", {
                className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.enableBGM !== !1 ? "left-7" : "left-1"}`,
              }),
            }),
          ],
        }),
        t.enableBGM !== !1 &&
          a &&
          r &&
          e.jsx(Lq, { library: a, setLibrary: r }),
        e.jsxs("div", {
          className: "grid grid-cols-2 gap-8",
          children: [
            e.jsx(Uo, {
              label: "最少评论数",
              type: "number",
              value: t.commentRange[0],
              onChange: (i) =>
                s((o) => ({
                  ...o,
                  commentRange: [
                    parseInt(i.target.value) || 0,
                    o.commentRange[1],
                  ],
                })),
            }),
            e.jsx(Uo, {
              label: "最多评论数",
              type: "number",
              value: t.commentRange[1],
              onChange: (i) =>
                s((o) => ({
                  ...o,
                  commentRange: [
                    o.commentRange[0],
                    parseInt(i.target.value) || 0,
                  ],
                })),
            }),
          ],
        }),
        e.jsx(Uo, {
          label: "历史记录上限",
          type: "number",
          value: t.historyLimit,
          onChange: (i) =>
            s((o) => ({ ...o, historyLimit: parseInt(i.target.value) })),
        }),
        e.jsx(Uo, {
          label: "NPC 主页作品生成数量",
          type: "number",
          value: t.npcHistoryCount,
          onChange: (i) =>
            s((o) => ({ ...o, npcHistoryCount: parseInt(i.target.value) })),
          tooltip: "当进入 NPC 主页时，自动生成的历史作品数量。",
        }),
        e.jsx("div", {
          className: "pt-8 border-t border-[#f0f0f0]",
          children: e.jsxs("button", {
            onClick: () => n && n(),
            className:
              "text-xs font-bold tracking-widest text-[#999] hover:text-[#d00] transition-colors flex items-center gap-2",
            children: [e.jsx(_n, { size: 14 }), "清空所有数据"],
          }),
        }),
      ],
    }),
  $q = ({
    localSettings: t,
    setLocalSettings: s,
    worldPresets: n,
    addWorldPreset: a,
    deleteWorldPreset: r,
  }) => {
    const [i, o] = l.useState(""),
      c = n || [],
      d = () => {
        i.trim() &&
          a &&
          (a({
            name: i,
            worldSetting: t.worldSetting,
            promptTemplate: t.promptTemplate,
          }),
          o(""));
      },
      u = (f) => {
        s((p) => ({
          ...p,
          worldSetting: f.worldSetting,
          promptTemplate: f.promptTemplate,
        }));
      };
    return e.jsxs("div", {
      className: "space-y-12",
      children: [
        e.jsxs("div", {
          className: "relative pt-4",
          children: [
            e.jsxs("label", {
              className:
                "absolute -top-3 left-0 bg-[#fffcf9] pr-2 font-serif text-sm text-[#2c2c2c] font-bold flex items-center gap-2",
              children: [e.jsx(bu, { size: 14 }), " 已存档预设"],
            }),
            e.jsxs("div", {
              className: "border-l-2 border-[#e5e5e5] pl-6 space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex gap-4 items-end",
                  children: [
                    e.jsx("div", {
                      className: "flex-1 group",
                      children: e.jsx("input", {
                        type: "text",
                        value: i,
                        onChange: (f) => o(f.target.value),
                        placeholder: "新预设名称",
                        className:
                          "w-full bg-transparent border-b border-[#e5e5e5] py-2 text-sm font-serif placeholder-[#ddd] outline-none focus:border-[#2c2c2c] transition-colors",
                      }),
                    }),
                    e.jsx("button", {
                      onClick: d,
                      className:
                        "text-xs font-bold tracking-widest text-[#2c2c2c] hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5",
                      children: "保存当前",
                    }),
                  ],
                }),
                c.length > 0 &&
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: c.map((f) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "group flex items-center justify-between p-3 bg-white border border-[#f0f0f0] hover:border-[#2c2c2c] transition-all cursor-pointer",
                          onClick: () => u(f),
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(X5, {
                                  size: 14,
                                  className:
                                    "text-[#888] group-hover:text-[#2c2c2c]",
                                }),
                                e.jsx("span", {
                                  className:
                                    "font-serif text-sm text-[#444] group-hover:text-[#2c2c2c]",
                                  children: f.name,
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: (p) => {
                                (p.stopPropagation(), r && r(f.id));
                              },
                              className:
                                "opacity-0 group-hover:opacity-100 text-[#ddd] hover:text-red-500 transition-all",
                              children: e.jsx(Ts, { size: 14 }),
                            }),
                          ],
                        },
                        f.id,
                      ),
                    ),
                  }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx("label", {
              className:
                "absolute -top-3 left-0 bg-[#fffcf9] pr-2 font-serif text-sm text-[#2c2c2c] font-bold",
              children: "世界观设定",
            }),
            e.jsx("textarea", {
              value: t.worldSetting,
              onChange: (f) =>
                s((p) => ({ ...p, worldSetting: f.target.value })),
              className:
                "w-full min-h-[200px] bg-transparent border border-[#e5e5e5] p-6 text-base leading-relaxed text-[#444] font-serif outline-none focus:border-[#2c2c2c] transition-colors resize-none",
              placeholder:
                "在此定义你的世界规则，例如：这是一个全员猫咪的赛博朋克世界...",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx("label", {
              className:
                "absolute -top-3 left-0 bg-[#fffcf9] pr-2 font-serif text-sm text-[#2c2c2c] font-bold",
              children: "提示词模板",
            }),
            e.jsx("textarea", {
              value: t.promptTemplate,
              onChange: (f) =>
                s((p) => ({ ...p, promptTemplate: f.target.value })),
              className:
                "w-full min-h-[150px] bg-transparent border border-[#e5e5e5] p-6 text-base leading-relaxed text-[#444] font-serif outline-none focus:border-[#2c2c2c] transition-colors resize-none",
              placeholder: "自定义生成视频文案的提示词模板...",
            }),
          ],
        }),
      ],
    });
  },
  Fq = ({ children: t, className: s = "" }) =>
    e.jsx("h1", {
      className: `font-serif text-4xl font-bold tracking-tight text-[#2c2c2c] ${s}`,
      children: t,
    }),
  Gx = ({ title: t, subtitle: s, icon: n, onClick: a, index: r }) => {
    const i = r % 2 === 0 ? -3 : 3,
      o = r % 2 === 0 ? 0 : 20;
    return e.jsxs("div", {
      onClick: a,
      className:
        "group relative w-full aspect-[3/4] bg-white rounded-[2px] shadow-xl cursor-pointer overflow-hidden transition-all duration-500 hover:z-10 hover:scale-105 hover:shadow-2xl",
      style: { transform: `rotate(${i}deg) translateY(${o}px)` },
      children: [
        e.jsx("div", {
          className: "absolute inset-3 border border-[#e5e5e5] opacity-50",
        }),
        e.jsxs("div", {
          className:
            "absolute inset-0 flex flex-col items-center justify-center p-6 text-center",
          children: [
            e.jsx("div", {
              className:
                "w-14 h-14 mb-4 text-[#2c2c2c] opacity-80 group-hover:scale-110 transition-transform duration-500",
              children: n,
            }),
            e.jsx("h3", {
              className: "font-serif text-xl font-bold text-[#2c2c2c] mb-2",
              children: t,
            }),
            e.jsx("p", {
              className:
                "font-sans text-[10px] text-[#888] tracking-widest uppercase",
              children: s,
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "absolute bottom-4 left-0 right-0 text-center font-serif text-[#ddd] text-xs",
          children: ["NO.0", r + 1],
        }),
      ],
    });
  },
  zq = ({
    localUserPersona: t,
    setLocalUserPersona: s,
    userPresets: n,
    addUserPreset: a,
    deleteUserPreset: r,
    chatUser: i,
    chatUserPresets: o,
  }) => {
    const [c, d] = l.useState(""),
      u = n || [],
      f = () => {
        c.trim() && a && (a({ name: c, ...t }), d(""));
      },
      p = (h) => {
        s({
          ...t,
          douyinPersona: h.douyinPersona,
          isPublicFigure: h.isPublicFigure,
          sourcePresetId: h.id,
        });
      },
      m = (h) => {
        s((g) => ({ ...g, name: h.name, avatar: h.avatar }));
      };
    return e.jsxs("div", {
      className: "space-y-12",
      children: [
        e.jsxs("div", {
          className: "relative pt-4",
          children: [
            e.jsxs("label", {
              className:
                "absolute -top-3 left-0 bg-[#fffcf9] pr-2 font-serif text-sm text-[#2c2c2c] font-bold flex items-center gap-2",
              children: [e.jsx(bu, { size: 14 }), " 档案预设"],
            }),
            e.jsxs("div", {
              className: "border-l-2 border-[#e5e5e5] pl-6 space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex gap-4 items-end",
                  children: [
                    e.jsx("div", {
                      className: "flex-1 group",
                      children: e.jsx("input", {
                        type: "text",
                        value: c,
                        onChange: (h) => d(h.target.value),
                        placeholder: "输入预设名称...",
                        className:
                          "w-full bg-transparent border-b border-[#e5e5e5] py-2 text-sm font-serif placeholder-[#ddd] outline-none focus:border-[#2c2c2c] transition-colors",
                      }),
                    }),
                    e.jsx("button", {
                      onClick: f,
                      className:
                        "text-xs font-bold tracking-widest text-[#2c2c2c] hover:text-black border-b border-transparent hover:border-black transition-all pb-0.5",
                      children: "保存当前",
                    }),
                  ],
                }),
                u.length > 0 &&
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: u.map((h) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "group flex items-center justify-between p-3 bg-white border border-[#f0f0f0] hover:border-[#2c2c2c] transition-all cursor-pointer",
                          onClick: () => p(h),
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(X5, {
                                  size: 14,
                                  className:
                                    "text-[#888] group-hover:text-[#2c2c2c]",
                                }),
                                e.jsx("span", {
                                  className:
                                    "font-serif text-sm text-[#444] group-hover:text-[#2c2c2c]",
                                  children: h.name,
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: (g) => {
                                (g.stopPropagation(), r && r(h.id));
                              },
                              className:
                                "opacity-0 group-hover:opacity-100 text-[#ddd] hover:text-red-500 transition-all",
                              children: e.jsx(Ts, { size: 14 }),
                            }),
                          ],
                        },
                        h.id,
                      ),
                    ),
                  }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("label", {
              className:
                "flex items-center font-serif text-sm text-[#2c2c2c] font-bold",
              children: [
                "基本人设",
                e.jsx(Oi, {
                  text: "选择一个基础身份。你可以使用当前聊天APP的身份，或从聊天APP的预设中选择。",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex items-center gap-6 p-6 border border-[#e5e5e5] bg-white relative rounded-xl",
              children: [
                e.jsx("img", {
                  src:
                    t.avatar ||
                    (i == null ? void 0 : i.avatar) ||
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=me",
                  className:
                    "w-20 h-20 object-cover rounded-full border-2 border-gray-100",
                  alt: "User",
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h3", {
                      className: "font-serif text-2xl font-bold text-[#2c2c2c]",
                      children: t.name || (i == null ? void 0 : i.name) || "我",
                    }),
                    e.jsx("p", {
                      className:
                        "font-sans text-xs text-[#888] tracking-widest mt-1",
                      children: "CURRENT SELECTION",
                    }),
                  ],
                }),
              ],
            }),
            o &&
              o.length > 0 &&
              e.jsxs("div", {
                className: "flex gap-3 overflow-x-auto pb-2 no-scrollbar",
                children: [
                  e.jsxs("div", {
                    onClick: () =>
                      m({
                        name: i == null ? void 0 : i.name,
                        avatar: i == null ? void 0 : i.avatar,
                      }),
                    className:
                      "flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full border-2 border-transparent group-hover:border-[#2c2c2c] overflow-hidden transition-all",
                        children: e.jsx("img", {
                          src: i == null ? void 0 : i.avatar,
                          className: "w-full h-full object-cover",
                          alt: "Current",
                        }),
                      }),
                      e.jsx("span", {
                        className:
                          "text-xs text-[#888] group-hover:text-[#2c2c2c]",
                        children: "当前用户",
                      }),
                    ],
                  }),
                  o.map((h) =>
                    e.jsxs(
                      "div",
                      {
                        onClick: () => m(h),
                        className:
                          "flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full border-2 border-transparent group-hover:border-[#2c2c2c] overflow-hidden transition-all",
                            children: e.jsx("img", {
                              src: h.avatar,
                              className: "w-full h-full object-cover",
                              alt: h.name,
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs text-[#888] group-hover:text-[#2c2c2c] max-w-[60px] truncate",
                            children: h.name,
                          }),
                        ],
                      },
                      h.id,
                    ),
                  ),
                ],
              }),
          ],
        }),
        e.jsxs("div", {
          className: "relative",
          children: [
            e.jsxs("label", {
              className:
                "absolute -top-3 left-0 bg-[#fffcf9] pr-2 font-serif text-sm text-[#2c2c2c] font-bold flex items-center",
              children: [
                "互联网人设",
                e.jsx(Oi, {
                  text: "你在抖音上对外展示的形象，例如：宠物博主、情感博主等。这将影响陌生人对你的评论。",
                }),
              ],
            }),
            e.jsx("textarea", {
              value: t.douyinPersona,
              onChange: (h) => s({ ...t, douyinPersona: h.target.value }),
              className:
                "w-full min-h-[120px] bg-transparent border border-[#e5e5e5] p-6 text-base leading-relaxed text-[#444] font-serif outline-none focus:border-[#2c2c2c] transition-colors resize-none",
              placeholder: "例如：一个热爱生活、喜欢分享美食的探店博主...",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex items-center justify-between py-4 border-b border-[#e5e5e5]",
          children: [
            e.jsxs("span", {
              className: "font-serif text-lg text-[#2c2c2c] flex items-center",
              children: [
                "公众人物",
                e.jsx(Oi, {
                  text: "开启后，抖音上的用户将默认知道你的真实姓名、性别、年龄等基础信息。",
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => s({ ...t, isPublicFigure: !t.isPublicFigure }),
              className: `w-12 h-6 rounded-full transition-colors relative ${t.isPublicFigure ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
              children: e.jsx("div", {
                className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${t.isPublicFigure ? "left-7" : "left-1"}`,
              }),
            }),
          ],
        }),
      ],
    });
  },
  Rq = ({
    residentOnlyNpcs: t,
    onAddNpc: s,
    setEditingNpc: n,
    deleteNpc: a,
    updateNpc: r,
    contacts: i = [],
  }) =>
    e.jsxs("div", {
      className: "space-y-8",
      children: [
        e.jsx("div", {
          onClick: s,
          className:
            "w-full py-4 border border-dashed border-[#ccc] text-[#888] font-serif text-sm tracking-widest hover:border-[#2c2c2c] hover:text-[#2c2c2c] transition-colors cursor-pointer text-center",
          children: "+ 添加新角色",
        }),
        e.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
          children: t.map((o) => {
            const c = o.contactId ? i.find((u) => u.id === o.contactId) : null,
              d =
                o.avatar ||
                (c == null ? void 0 : c.portrait) ||
                (c == null ? void 0 : c.avatar) ||
                `https://api.dicebear.com/7.x/avataaars/svg?seed=${o.name}`;
            return e.jsxs(
              "div",
              {
                className:
                  "group relative bg-white border border-[#f0f0f0] p-4 hover:shadow-lg transition-all duration-300",
                children: [
                  e.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-16 h-16 bg-[#f8f8fa] overflow-hidden transition-all duration-500",
                        children: e.jsx("img", {
                          src: d,
                          className: "w-full h-full object-cover",
                          alt: o.name,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("h4", {
                            className:
                              "font-serif font-bold text-lg text-[#2c2c2c] truncate",
                            children: o.name,
                          }),
                          e.jsx("p", {
                            className:
                              "font-sans text-xs text-[#888] mt-1 line-clamp-2",
                            children: o.bio || "No description",
                          }),
                          e.jsxs("div", {
                            className: "mt-2 flex items-center gap-2 flex-wrap",
                            children: [
                              e.jsx("span", {
                                className: `text-[10px] px-2 py-0.5 rounded-full border ${o.sourceType === "contact" ? "border-[#2c2c2c] text-[#2c2c2c]" : "border-[#e5e5e5] text-[#888]"}`,
                                children:
                                  o.sourceType === "contact"
                                    ? "通讯录好友"
                                    : "NPC",
                              }),
                              o.includeInVideoRefresh === !1
                                ? e.jsx("span", {
                                    className:
                                      "text-[10px] px-2 py-0.5 rounded-full border border-amber-700/40 text-amber-900/80 bg-amber-50",
                                    children: "已暂停刷新视频",
                                  })
                                : null,
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "mt-3 flex items-center justify-between border-t border-[#f0f0f0] pt-3",
                            onClick: (u) => u.stopPropagation(),
                            children: [
                              e.jsxs("span", {
                                className:
                                  "text-[11px] text-[#555] font-serif flex items-center gap-1",
                                children: [
                                  "参与刷新视频",
                                  e.jsx(Oi, {
                                    text: "关闭后：首页刷新视频时不会以该居民为博主生成新视频。不影响评论区（若已开「是否评论」）。默认开启。",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () =>
                                  r == null
                                    ? void 0
                                    : r({
                                        ...o,
                                        includeInVideoRefresh:
                                          o.includeInVideoRefresh === !1,
                                      }),
                                className: `w-11 h-6 rounded-full transition-colors relative shrink-0 ${o.includeInVideoRefresh !== !1 ? "bg-[#2c2c2c]" : "bg-[#e5e5e5]"}`,
                                "aria-pressed": o.includeInVideoRefresh !== !1,
                                children: e.jsx("span", {
                                  className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${o.includeInVideoRefresh !== !1 ? "left-6" : "left-1"}`,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2",
                    children: [
                      e.jsx("button", {
                        onClick: () => n(o),
                        className:
                          "p-1.5 bg-[#2c2c2c] text-white hover:bg-black",
                        children: e.jsx(ml, { size: 12 }),
                      }),
                      e.jsx("button", {
                        onClick: () => a && a(o.id),
                        className:
                          "p-1.5 bg-[#d00] text-white hover:bg-red-700",
                        children: e.jsx(_n, { size: 12 }),
                      }),
                    ],
                  }),
                ],
              },
              o.id,
            );
          }),
        }),
      ],
    }),
  Pq = ({
    editingNpc: t,
    setEditingNpc: s,
    handleSaveNpc: n,
    userPresets: a,
    coverLibraries: r = {},
    setCoverLibraries: i,
    contacts: o = [],
    exclusiveBgmLibraries: c = {},
    setExclusiveBgmLibraries: d,
    chatAppChats: u = [],
  }) => {
    const f = l.useRef(null),
      p = l.useRef(null),
      m = t == null ? void 0 : t.id,
      h = (m && r[m]) || [],
      g = t != null && t.contactId ? o.find((T) => T.id === t.contactId) : null,
      x =
        (t == null ? void 0 : t.avatar) ||
        (g == null ? void 0 : g.portrait) ||
        (g == null ? void 0 : g.avatar),
      [y, v] = l.useState({ cat: null, url: "", name: "", author: "" }),
      [b, N] = l.useState(!0),
      [w, _] = l.useState(!0),
      A = (() => {
        const T = (t == null ? void 0 : t.contactId) || m;
        return T
          ? (u || []).filter(
              (I) =>
                (!I.isGroup && I.contactId === T) ||
                (I.isGroup && (I.memberIds || []).includes(T)),
            )
          : [];
      })(),
      k = Array.isArray(t == null ? void 0 : t.linkedChatIds)
        ? t.linkedChatIds
        : [],
      C = (T) => {
        const I = k.includes(T) ? k.filter((L) => L !== T) : [...k, T];
        s({ ...t, linkedChatIds: I });
      },
      M = (m && c[m]) || Eq(),
      E = (T) => {
        !m || !d || d((I) => ({ ...I, [m]: T }));
      },
      S = (T) => {
        const I = T.target.files[0];
        if (I) {
          const L = new FileReader();
          ((L.onloadend = () => {
            s({ ...t, avatar: L.result });
            try {
              T.target.value = "";
            } catch {}
          }),
            L.readAsDataURL(I));
        }
      },
      j = (T) => {
        const L = (t.boundUserPresets || []).includes(T);
        s({ ...t, boundUserPresets: L ? [] : [T] });
      };
    return e.jsxs("div", {
      className: "absolute inset-0 z-[60] bg-white flex flex-col",
      children: [
        e.jsxs("div", {
          className:
            "pt-14 pb-4 px-6 flex justify-between items-center border-b border-[#2c2c2c]",
          children: [
            e.jsx("h2", {
              className: "font-serif text-xl font-bold text-[#2c2c2c]",
              children: "角色档案",
            }),
            e.jsx("button", {
              onClick: () => s(null),
              children: e.jsx(Ts, {
                size: 24,
                className:
                  "text-[#2c2c2c] hover:rotate-90 transition-transform",
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 overflow-y-auto p-6 space-y-8",
          children: e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className: "flex gap-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "w-24 h-24 bg-[#f0f0f0] flex-shrink-0 border border-[#2c2c2c] relative group cursor-pointer overflow-hidden",
                    onClick: () => {
                      var T;
                      return (T = f.current) == null ? void 0 : T.click();
                    },
                    children: [
                      e.jsx("img", {
                        src:
                          x ||
                          `https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`,
                        className: "w-full h-full object-cover",
                        alt: "preview",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                        children: e.jsx(Ta, {
                          size: 20,
                          className: "text-white",
                        }),
                      }),
                      e.jsx("input", {
                        type: "file",
                        ref: f,
                        className: "hidden",
                        accept: "image/*",
                        onChange: S,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex-1 space-y-6",
                    children: [
                      e.jsx(Uo, {
                        label: "网名",
                        value: t.name,
                        onChange: (T) => s({ ...t, name: T.target.value }),
                      }),
                      e.jsxs("div", {
                        className: "group mb-8",
                        children: [
                          e.jsx("label", {
                            className:
                              "block font-serif text-sm text-[#888] mb-2",
                            children: "头像 (点击左侧上传或输入URL)",
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: t.avatar,
                            onChange: (T) =>
                              s({ ...t, avatar: T.target.value }),
                            placeholder: "https://...",
                            className:
                              "w-full bg-transparent border-b border-[#e5e5e5] py-2 text-lg text-[#2c2c2c] font-serif placeholder-[#ddd] outline-none focus:border-[#2c2c2c] transition-colors",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("label", {
                    className: "block font-serif text-sm text-[#888]",
                    children: "人物传记",
                  }),
                  e.jsx("textarea", {
                    value: t.bio,
                    onChange: (T) => s({ ...t, bio: T.target.value }),
                    className:
                      "w-full h-32 bg-transparent border border-[#e5e5e5] p-4 text-base font-serif outline-none focus:border-[#2c2c2c] transition-colors resize-none",