                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          }),
          M &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("button", {
                  type: "button",
                  className: "absolute inset-0 bg-black/25 z-[70]",
                  onClick: () => E(!1),
                  "aria-label": "关闭菜单",
                }),
                e.jsx("div", {
                  className:
                    "absolute right-3 top-16 z-[71] w-44 rounded-2xl bg-white shadow-xl border border-gray-100 py-2",
                  children: e.jsx("div", {
                    className: "px-4 py-2 text-sm text-gray-500",
                    children: "暂无更多设置",
                  }),
                }),
              ],
            }),
        ],
      })
    );
  },
  dq = [
    {
      id: "jiligululu",
      name: "叽哩咕噜噜",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jili",
    },
    {
      id: "gulujiji",
      name: "咕噜叽叽（懒惰版）",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gulu",
    },
  ],
  uq = ({ tag: t, onClose: s, onSelect: n }) => {
    const [a, r] = l.useState("");
    return e.jsx("div", {
      className:
        "absolute inset-0 z-[60] bg-black/50 flex flex-col justify-end animate-in fade-in duration-200",
      children: e.jsxs("div", {
        className:
          "bg-white rounded-t-2xl h-[80%] w-full flex flex-col animate-in slide-in-from-bottom duration-300",
        children: [
          e.jsx("div", {
            className: "w-full flex justify-center pt-3 pb-1",
            children: e.jsx("div", {
              className: "w-10 h-1 bg-gray-300 rounded-full",
            }),
          }),
          e.jsxs("div", {
            className:
              "text-center font-bold text-[17px] py-3 border-b border-gray-100 relative",
            children: [
              "添加“",
              t,
              "”",
              e.jsx("button", {
                onClick: s,
                className: "absolute right-4 top-1/2 -translate-y-1/2 p-1",
                children: e.jsx(Ts, { size: 20, className: "text-gray-400" }),
              }),
            ],
          }),
          e.jsx("div", {
            className: "px-4 py-3",
            children: e.jsxs("div", {
              className: "bg-gray-100 rounded-md flex items-center px-3 py-2",
              children: [
                e.jsx(pr, { size: 16, className: "text-gray-400 mr-2" }),
                e.jsx("input", {
                  type: "text",
                  placeholder: "搜索用户",
                  className:
                    "bg-transparent border-none outline-none text-sm w-full placeholder-gray-400",
                  value: a,
                  onChange: (i) => r(i.target.value),
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "flex-1 overflow-y-auto px-4",
            children: dq.map((i) =>
              e.jsxs(
                "div",
                {
                  className: "flex items-center justify-between py-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        e.jsx("img", {
                          src: i.avatar,
                          alt: i.name,
                          className: "w-10 h-10 rounded-full bg-gray-200",
                        }),
                        e.jsx("span", {
                          className: "font-medium text-[15px]",
                          children: i.name,
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: () => n(i),
                      className:
                        "bg-[#fe2c55] text-white text-sm font-medium px-5 py-1.5 rounded-[4px]",
                      children: "添加",
                    }),
                  ],
                },
                i.id,
              ),
            ),
          }),
        ],
      }),
    });
  },
  fq = ({ field: t, initialValue: s, onClose: n, onSave: a }) => {
    const [r, i] = l.useState(s || ""),
      o = () => {
        (a(r), n());
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 bg-white z-[60] flex flex-col animate-in slide-in-from-right duration-300 pt-12",
      children: [
        e.jsxs("div", {
          className:
            "h-12 flex items-center justify-between px-4 border-b border-gray-100 flex-shrink-0",
          children: [
            e.jsx("button", {
              onClick: n,
              children: e.jsx(un, { size: 24, className: "text-black" }),
            }),
            e.jsxs("span", {
              className: "font-bold text-[17px]",
              children: ["修改", t.label],
            }),
            e.jsx("button", {
              type: "button",
              onClick: o,
              className:
                "p-1 text-[#03CCD9] hover:opacity-80 active:opacity-70",
              "aria-label": "保存",
              children: e.jsx(oo, { size: 22, strokeWidth: 2.25 }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "p-4",
          children:
            t.id === "gender"
              ? e.jsx("div", {
                  className: "flex flex-col space-y-2",
                  children: ["男", "女", "不展示"].map((c) =>
                    e.jsx(
                      "button",
                      {
                        onClick: () => i(c),
                        className: `p-3 rounded-lg text-left ${r === c ? "bg-gray-100 font-bold" : "bg-white"}`,
                        children: c,
                      },
                      c,
                    ),
                  ),
                })
              : e.jsxs("div", {
                  className: "bg-gray-100 rounded-md p-3 flex items-center",
                  children: [
                    e.jsx("input", {
                      type: "text",
                      value: r,
                      onChange: (c) => i(c.target.value),
                      className:
                        "bg-transparent w-full outline-none text-[15px]",
                      autoFocus: !0,
                    }),
                    r &&
                      e.jsx("button", {
                        onClick: () => i(""),
                        children: e.jsx(Ts, {
                          size: 16,
                          className: "text-gray-400",
                        }),
                      }),
                  ],
                }),
        }),
      ],
    });
  },
  mq = ({ initialBio: t, onClose: s, onSave: n }) => {
    const [a, r] = l.useState(t || ""),
      [i, o] = l.useState(!1),
      [c, d] = l.useState(""),
      u = l.useRef(null),
      f = [
        "朋友",
        "恋人",
        "闺蜜",
        "兄弟",
        "家人",
        "饭搭子",
        "小宝贝",
        "理想型",
        "永远的神",
        "搬砖兄弟",
        "共创伙伴",
        "喜欢的达人",
        "开黑小伙伴",
      ];
    l.useEffect(() => {
      u.current && (u.current.innerText = a);
    }, []);
    const p = (g) => {
        (d(g), o(!0));
      },
      m = (g) => {
        const x = c ? `${c}：` : "",
          y = `@${g.name} `;
        if (u.current) {
          if ((u.current.focus(), x)) {
            const N = document.createTextNode(x);
            h(N);
          }
          const v = document.createElement("span");
          ((v.style.color = "#2b5aed"),
            (v.innerText = y),
            (v.contentEditable = "false"),
            h(v));
          const b = document.createTextNode(" ");
          (h(b), r(u.current.innerText));
        }
        o(!1);
      },
      h = (g) => {
        const x = window.getSelection();
        if (x.rangeCount > 0) {
          const y = x.getRangeAt(0);
          (y.deleteContents(),
            y.insertNode(g),
            y.setStartAfter(g),
            y.setEndAfter(g),
            x.removeAllRanges(),
            x.addRange(y));
        } else u.current && u.current.appendChild(g);
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 bg-white z-[60] flex flex-col animate-in slide-in-from-right duration-300 pt-12",
      children: [
        e.jsxs("div", {
          className:
            "h-12 flex items-center justify-between px-4 border-b border-gray-100 flex-shrink-0",
          children: [
            e.jsx("button", {
              onClick: s,
              children: e.jsx(un, { size: 24, className: "text-black" }),
            }),
            e.jsx("span", {
              className: "font-bold text-[17px]",
              children: "修改简介",
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => {
                var g;
                return n(
                  ((g = u.current) == null ? void 0 : g.innerText) || "",
                );
              },
              className:
                "p-1 text-[#03CCD9] hover:opacity-80 active:opacity-70",
              "aria-label": "保存",
              children: e.jsx(oo, { size: 22, strokeWidth: 2.25 }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "p-4",
          children: e.jsx("div", {
            ref: u,
            contentEditable: !0,
            className: "w-full min-h-[100px] text-[15px] outline-none",
            onInput: (g) => r(g.currentTarget.innerText),
          }),
        }),
        e.jsx("div", {
          className: "mt-4 px-4",
          children: e.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: f.map((g) =>
              e.jsxs(
                "button",
                {
                  onClick: () => p(g),
                  className:
                    "bg-gray-100 px-3 py-1.5 rounded-[4px] text-xs text-gray-600 font-medium flex items-center",
                  children: [
                    g,
                    " ",
                    e.jsx(ea, { size: 10, className: "ml-1" }),
                  ],
                },
                g,
              ),
            ),
          }),
        }),
        i && e.jsx(uq, { tag: c, onClose: () => o(!1), onSelect: m }),
      ],
    });
  },
  pq = ({ onClose: t }) => {
    var h, g;
    const { currentUser: s, updateUserProfile: n } = ei(),
      [a, r] = l.useState(null),
      i = l.useRef(null),
      o = l.useRef(null),
      c = [
        { id: "name", label: "名字", value: s.name },
        { id: "bio", label: "简介", value: s.signature },
        { id: "gender", label: "性别", value: s.gender },
        { id: "location", label: "所在地", value: s.location },
      ],
      d = c.filter((x) => x.value && x.value.trim() !== "").length,
      u = Math.round((d / c.length) * 100),
      f = (x) => {
        r(x.id);
      },
      p = (x, y) => {
        const v = {};
        (x === "bio" ? (v.signature = y) : (v[x] = y), n(v), r(null));
      },
      m = (x, y) => {
        const v = x.target.files[0];
        if (v) {
          const b = new FileReader();
          ((b.onloadend = () => {
            const N = {};
            (y === "avatar" && (N.avatar = b.result),
              y === "cover" && (N.cover = b.result),
              n(N));
          }),
            b.readAsDataURL(v));
        }
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 bg-white z-[60] overflow-y-auto no-scrollbar flex flex-col animate-in slide-in-from-bottom duration-300",
      children: [
        e.jsx("input", {
          type: "file",
          ref: i,
          className: "hidden",
          accept: "image/*",
          onChange: (x) => m(x, "avatar"),
        }),
        e.jsx("input", {
          type: "file",
          ref: o,
          className: "hidden",
          accept: "image/*",
          onChange: (x) => m(x, "cover"),
        }),
        a === "bio"
          ? e.jsx(mq, {
              initialBio: s.signature,
              onClose: () => r(null),
              onSave: (x) => p("bio", x),
            })
          : a &&
            e.jsx(fq, {
              field: c.find((x) => x.id === a),
              initialValue:
                (h = c.find((x) => x.id === a)) == null ? void 0 : h.value,
              onClose: () => r(null),
              onSave: (x) => p(a, x),
            }),
        e.jsxs("div", {
          className: "flex-1 overflow-y-auto no-scrollbar flex flex-col",
          children: [
            e.jsxs("div", {
              className: "relative h-[200px] w-full flex-shrink-0",
              children: [
                e.jsx("img", {
                  src:
                    s.cover ||
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  alt: "cover",
                  className: "w-full h-full object-cover",
                }),
                e.jsx("div", { className: "absolute inset-0 bg-black/20" }),
                e.jsxs("div", {
                  className:
                    "absolute top-0 left-0 right-0 pt-14 px-4 flex justify-between items-center z-10",
                  children: [
                    e.jsx("button", {
                      onClick: t,
                      className: "w-8 h-8 flex items-center justify-center",
                      children: e.jsx(un, {
                        size: 28,
                        className: "text-white",
                      }),
                    }),
                    e.jsxs("button", {
                      onClick: () => {
                        var x;
                        return (x = o.current) == null ? void 0 : x.click();
                      },
                      className:
                        "flex items-center space-x-1 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-[4px] text-white text-xs active:scale-95 transition-transform",
                      children: [
                        e.jsx(qo, { size: 14 }),
                        e.jsx("span", { children: "更换封面" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex-1 bg-white relative -mt-4 rounded-t-2xl px-5 pt-12 min-h-[500px]",
              children: [
                e.jsxs("div", {
                  className:
                    "absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center",
                  children: [
                    e.jsxs("div", {
                      className:
                        "relative w-[84px] h-[84px] rounded-full border-[3px] border-white overflow-hidden bg-gray-200 mb-2 cursor-pointer active:scale-95 transition-transform",
                      onClick: () => {
                        var x;
                        return (x = i.current) == null ? void 0 : x.click();
                      },
                      children: [
                        s.avatar
                          ? e.jsx("img", {
                              src: s.avatar,
                              alt: "avatar",
                              className:
                                "w-full h-full object-cover opacity-80",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center text-gray-400 bg-gray-100 text-2xl font-bold",
                              children: (g = s.name) == null ? void 0 : g[0],
                            }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-black/30 flex flex-col items-center justify-center",
                          children: e.jsx(qo, {
                            size: 24,
                            className: "text-white mb-1",
                          }),
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-black",
                      children: "更换头像",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "absolute top-4 right-4 flex flex-col items-end",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-1 bg-gray-100 rounded-full mb-1 overflow-hidden",
                      children: e.jsx("div", {
                        className:
                          "h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500",
                        style: { width: `${u}%` },
                      }),
                    }),
                    e.jsxs("span", {
                      className: "text-[10px] text-black font-medium",
                      children: ["资料完成度 ", u, "%"],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "mt-6 space-y-8",
                  children: c.map((x, y) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center justify-between cursor-pointer active:opacity-70 transition-opacity",
                        onClick: () => f(x),
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[15px] text-gray-500 w-16 flex-shrink-0",
                            children: x.label,
                          }),
                          e.jsx("div", {
                            className:
                              "flex-1 mx-4 text-[15px] truncate text-right sm:text-left",
                            children: x.value
                              ? e.jsx("span", {
                                  className: "text-black font-medium",
                                  children: x.value,
                                })
                              : null,
                          }),
                          e.jsx(Kn, {
                            size: 16,
                            className: "text-gray-300 flex-shrink-0",
                          }),
                        ],
                      },
                      y,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  xq = ({ size: t = 36, className: s }) =>
    e.jsxs("svg", {
      width: t,
      height: t,
      viewBox: "0 0 48 48",
      fill: "currentColor",
      className: s,
      children: [
        e.jsx("path", {
          d: "M24 4C14.0589 4 6 11.1634 6 20C6 24.9249 8.68629 29.3333 12.8627 32.1373C12.5765 33.9541 11.8627 36.6275 10.5 38.5C13.8889 38.3333 17.5 37 19.8627 34.8627C21.1863 35.1373 22.5686 35.3333 24 35.3333C33.9411 35.3333 42 28.1699 42 19.3333C42 10.4967 33.9411 4 24 4Z",
          fill: "white",
        }),
        e.jsx("circle", { cx: "15", cy: "20", r: "2", fill: "#161823" }),
        e.jsx("circle", { cx: "24", cy: "20", r: "2", fill: "#161823" }),
        e.jsx("circle", { cx: "33", cy: "20", r: "2", fill: "#161823" }),
      ],
    }),
  hq = ({ size: t = 36, className: s }) =>
    e.jsx("svg", {
      width: t,
      height: t,
      viewBox: "0 0 48 48",
      fill: "currentColor",
      className: s,
      children: e.jsx("path", {
        d: "M26.5 16V9.5C26.5 7.5 28.8 6.5 30.2 7.9L43.3 21.4C44.1 22.2 44.1 23.5 43.3 24.3L30.2 37.8C28.8 39.2 26.5 38.2 26.5 36.2V29.8C16.5 29.8 9.5 33.8 5.5 40.8C4.8 42.1 2.8 41.6 3.2 40.2C6.5 28.8 14.5 16 26.5 16Z",
        fill: "white",
        stroke: "white",
        strokeWidth: "1.5",
        strokeLinejoin: "round",
      }),
    }),
  LC = ({ video: t, isActive: s, onAvatarClick: n }) => {
    var X, je, xe, ye, R, oe, ee;
    const {
        toggleLike: a,
        toggleFollow: r,
        openCommentSection: i,
        openShare: o,
        currentUser: c,
        getAuthorAvatar: d,
        isLoadingMore: u,
        suspendFeedBgm: f,
      } = ei(),
      m =
        (typeof d == "function"
          ? d((X = t.author) == null ? void 0 : X.id)
          : null) || ((je = t.author) == null ? void 0 : je.avatar),
      [h, g] = l.useState(t.isLiked),
      [x, y] = l.useState(t.stats.likes),
      [v, b] = l.useState(!0),
      [N, w] = l.useState([]),
      _ = l.useRef(null),
      [A, k] = l.useState(0),
      [C, M] = l.useState(0),
      E = (H) =>
        H == null
          ? ""
          : typeof H == "string"
            ? H
            : (H && (H.text || H.foreign || H.en || H.zh || H.cn || "")) || "",
      S = (H) =>
        H == null
          ? ""
          : typeof H == "string"
            ? H
            : typeof H == "object"
              ? E(H)
              : String(H),
      j = pn.useMemo(() => {
        if (t.scenes && t.scenes.length > 0) return t.scenes;
        const H = t.script || t.content || "",
          Y = E(H);
        return String(Y)
          .split(/[。！？\n]+/)
          .filter((ce) => ce.trim().length > 0)
          .map((ce) => ({ visual: ce, subtitle: ce }));
      }, [t.scenes, t.script, t.content]),
      [T, I] = l.useState(!1),
      [L, B] = l.useState(!1),
      [F, D] = l.useState(!1),
      $ = c && t.author.id === c.id,
      P = (() => {
        var ce;
        const H = String(
            ((ce = t == null ? void 0 : t.author) == null ? void 0 : ce.name) ||
              "",
          ),
          Y = /[A-Za-z]/.test(H),
          U = /[\u4e00-\u9fff]/.test(H);
        return Y && !U;
      })(),
      z = pn.useMemo(() => {
        if (!$) return [];
        const H = [];
        return (
          (t.caption || t.content) &&
            H.push({
              id: "caption",
              user: t.author,
              content: t.caption || t.content,
              isCaption: !0,
              timestamp: "2023-12-14",
            }),
          t.comments &&
            t.comments.length > 0 &&
            t.comments.forEach((Y) => {
              (H.push(Y),
                Y.replies &&
                  Y.replies.length > 0 &&
                  Y.replies.slice(0, 2).forEach((U) => {
                    H.push({ ...U, isReply: !0, replyTo: Y.user.name });
                  }));
            }),
          H
        );
      }, [$, t]),
      O = l.useRef(null),
      [Z, K] = l.useState(!1);
    (l.useEffect(() => {
      (g(t.isLiked), y(t.stats.likes));
    }, [t]),
      l.useEffect(() => {
        s
          ? (b(!0),
            k(0),
            M(0),
            I(!1),
            B(!1),
            O.current &&
              ((O.current.currentTime = 0),
              f ? O.current.pause() : O.current.play().catch((H) => {})))
          : (b(!1), O.current && O.current.pause());
      }, [s, f]),
      l.useEffect(() => {
        if (O.current) {
          if (f) {
            O.current.pause();
            return;
          }
          v && s ? O.current.play().catch((H) => {}) : O.current.pause();
        }
      }, [v, s, f]),
      l.useEffect(() => {
        O.current && (O.current.muted = Z);
      }, [Z]));
    const q = () => {
      if (O.current && s && !f && O.current.duration > 60) {
        const H = 0.2 + Math.random() * 0.2;
        O.current.currentTime = O.current.duration * H;
      }
    };
    (l.useEffect(() => {
      let H;
      return (
        s &&
          v &&
          !f &&
          (H = setInterval(() => {
            k((Y) => (Y >= 100 ? 0 : Y + 0.5));
          }, 100)),
        () => clearInterval(H)
      );
    }, [s, v, f]),
      l.useEffect(() => {
        let H;
        return (
          s &&
            v &&
            !f &&
            j.length > 0 &&
            (H = setTimeout(() => {
              M((U) => (U + 1) % j.length);
            }, 3e3)),
          () => clearTimeout(H)
        );
      }, [s, v, f, C, j]));
    const V = () => {
        (a(t.id), g(!h), y((H) => (h ? H - 1 : H + 1)));
      },
      ne = (H) => {
        if ((H.stopPropagation(), L)) {
          B(!1);
          return;
        }
        const Y = H.currentTarget.getBoundingClientRect(),
          U = H.clientX - Y.left,
          ce = H.clientY - Y.top;
        _.current
          ? (clearTimeout(_.current), (_.current = null), le(U, ce))
          : (_.current = setTimeout(() => {
              (b((pe) => !pe), (_.current = null));
            }, 250));
      },
      le = (H, Y) => {
        h || V();
        const U = {
          id: Date.now(),
          x: H,
          y: Y,
          angle: Math.random() * 30 - 15,
        };
        (w((ce) => [...ce, U]),
          setTimeout(() => {
            w((ce) => ce.filter((pe) => pe.id !== U.id));
          }, 1e3));
      },
      ie = (H) => (H >= 1e4 ? (H / 1e4).toFixed(1) + "w" : H);
    return e.jsxs("div", {
      className: "relative w-full h-full bg-black overflow-hidden select-none",
      onClick: ne,
      children: [
        e.jsx("div", {
          className: `absolute inset-0 flex items-center justify-center ${$ ? "bg-black" : "bg-gray-900"}`,
          children:
            t.type === "image"
              ? e.jsxs("div", {
                  className: "w-full h-full relative",
                  children: [
                    t.mediaUrl || t.cover
                      ? e.jsx("img", {
                          src: t.mediaUrl || t.cover,
                          className: "w-full h-full object-contain",
                          alt: "",
                        })
                      : e.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center text-white/60 text-sm",
                          children: "无图片内容",
                        }),
                    !$ &&
                      (t.mediaUrl || t.cover) &&
                      e.jsx("div", {
                        className:
                          "absolute inset-0 -z-10 bg-cover bg-center blur-3xl opacity-50 scale-110",
                        style: {
                          backgroundImage: `url(${t.mediaUrl || t.cover})`,
                        },
                      }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("div", {
                      className:
                        "w-full h-full bg-gradient-to-b from-gray-800 to-black opacity-50 absolute inset-0",
                    }),
                    e.jsx("div", {
                      className:
                        "w-full px-8 text-center z-0 transition-opacity duration-500",
                      children: e.jsx("div", {
                        className:
                          "text-lg font-bold text-white mb-4 leading-relaxed whitespace-pre-wrap opacity-90 animate-fade-in",
                        style: { textShadow: "0 2px 4px rgba(0,0,0,0.8)" },
                        children: E(
                          (xe = j[C]) == null ? void 0 : xe.visual,
                        ).replace(/^(视频内容|画面|场景)[：:]\s*/, ""),
                      }),
                    }),
                    e.jsx("div", {
                      className:
                        "absolute bottom-[160px] left-0 right-0 px-4 text-center z-10 pointer-events-none flex flex-col items-center gap-1.5",
                      children: (() => {
                        var U;
                        const H = (U = j[C]) == null ? void 0 : U.subtitle,
                          Y = (ce) =>
                            E(ce).replace(/^(视频内容|画面|场景)[：:]\s*/, "");
                        if (
                          H &&
                          typeof H == "object" &&
                          (H.zh || H.cn || H.translation)
                        ) {
                          const ce = H.text || H.foreign || H.en || "",
                            pe = H.zh || H.cn || H.translation || "";
                          return e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "inline-block bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg",
                                children: e.jsx("p", {
                                  className:
                                    "text-white/90 text-[13px] font-medium shadow-sm animate-fade-in",
                                  children: Y(ce),
                                }),
                              }),
                              pe &&
                                e.jsx("div", {
                                  className:
                                    "inline-block bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/30",
                                  children: e.jsx("p", {
                                    className:
                                      "text-gray-900 text-[13px] font-medium shadow-sm animate-fade-in",
                                    children: Y(pe),
                                  }),
                                }),
                            ],
                          });
                        }
                        return e.jsx("div", {
                          className:
                            "inline-block bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg",
                          children: e.jsx("p", {
                            className:
                              "text-white/90 text-[13px] font-medium shadow-sm animate-fade-in",
                            children: Y(H),
                          }),
                        });
                      })(),
                    }),
                  ],
                }),
        }),
        ((ye = t.bgm) == null ? void 0 : ye.url) &&
          e.jsx("audio", {
            ref: O,
            src: t.bgm.url,
            loop: !0,
            muted: Z,
            onLoadedMetadata: q,
          }),
        !v &&
          e.jsx("div", {
            className:
              "absolute inset-0 flex items-center justify-center z-20 pointer-events-none",
            children: e.jsx(xr, {
              size: 64,
              className:
                "text-white/60 fill-white/60 animate-in fade-in zoom-in duration-200",
              strokeWidth: 0,
            }),
          }),
        N.map((H) =>
          e.jsx(
            "div",
            {
              className: "absolute pointer-events-none z-30",
              style: {
                left: H.x,
                top: H.y,
                transform: `translate(-50%, -50%) rotate(${H.angle}deg)`,
              },
              children: e.jsx(zn, {
                size: 80,
                className:
                  "text-[#03CCD9] fill-[#03CCD9] animate-double-tap-heart",
                strokeWidth: 0,
              }),
            },
            H.id,
          ),
        ),
        e.jsx("div", {
          className: `absolute left-0 right-0 h-[2px] bg-white/20 z-20 transition-all duration-300 ${$ ? "bottom-[80px]" : "bottom-[1px]"}`,
          style: { bottom: $ ? "max(80px, 6rem)" : "max(1px, 0.125rem)" },
          children: e.jsx("div", {
            className:
              "h-full bg-white/80 transition-all duration-100 ease-linear relative",
            style: { width: `${A}%` },
            children: e.jsx("div", {
              className:
                "absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-sm",
            }),
          }),
        }),
        !L &&
          e.jsxs("div", {
            className: `absolute right-2 flex flex-col items-center space-y-[14px] z-10 w-[60px] transition-all duration-300 ${$ ? "bottom-[90px]" : "bottom-[10px]"}`,
            style: { bottom: $ ? "max(90px, 6.5rem)" : "max(10px, 1rem)" },
            onClick: (H) => H.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "relative mb-2",
                onClick: () => n && n(t.author.id),
                children: [
                  e.jsx("div", {
                    className:
                      "w-[48px] h-[48px] rounded-full border border-white overflow-hidden bg-gray-700 shadow-lg",
                    children: m
                      ? e.jsx("img", {
                          src: m,
                          alt: t.author.name,
                          className: "w-full h-full object-cover",
                        })
                      : e.jsx("div", {
                          className:
                            "w-full h-full flex items-center justify-center text-white font-bold text-xl bg-gradient-to-br from-purple-500 to-pink-500",
                          children:
                            ((oe = (R = t.author) == null ? void 0 : R.name) ==
                            null
                              ? void 0
                              : oe[0]) || "?",
                        }),
                  }),
                  !$ &&
                    !t.author.isFollowing &&
                    e.jsx("div", {
                      className:
                        "absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#03CCD9] rounded-full w-5 h-5 flex items-center justify-center cursor-pointer shadow-sm",
                      onClick: (H) => {
                        (H.stopPropagation(), r(t.author.id));
                      },
                      children: e.jsx(qo, {
                        size: 8,
                        className: "text-white",
                        strokeWidth: 2.25,
                      }),
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col items-center space-y-1",
                onClick: V,
                children: [
                  e.jsx(zn, {
                    size: 36,
                    className: `transition-all active:scale-75 drop-shadow-lg ${h ? "fill-[#03CCD9] text-[#03CCD9]" : "text-white fill-white"}`,
                    strokeWidth: h ? 0 : 1.5,
                  }),
                  e.jsx("span", {
                    className:
                      "text-white text-[13px] font-medium drop-shadow-md",
                    children: ie(x),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: `flex flex-col items-center space-y-1 ${u ? "opacity-50 pointer-events-none" : "cursor-pointer"}`,
                onClick: () => !u && i(t.id),
                children: [
                  e.jsx(xq, {
                    size: 40,
                    className: "text-white drop-shadow-lg",
                  }),
                  e.jsx("span", {
                    className:
                      "text-white text-[13px] font-medium drop-shadow-md",
                    children: ie(t.stats.comments),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col items-center space-y-1",
                children: [
                  e.jsx(Gi, {
                    size: 38,
                    className: "text-white fill-white drop-shadow-lg",
                    strokeWidth: 0,
                  }),
                  e.jsx("span", {
                    className:
                      "text-white text-[13px] font-medium drop-shadow-md",
                    children: ie(t.stats.favorites),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col items-center space-y-1",
                onClick: () => o(t.id),
                children: [
                  $
                    ? e.jsx(jl, {
                        size: 36,
                        className: "text-white drop-shadow-lg",
                      })
                    : e.jsx(hq, {
                        size: 36,
                        className: "text-white drop-shadow-lg",
                      }),
                  e.jsx("span", {
                    className:
                      "text-white text-[13px] font-medium drop-shadow-md",
                    children: $ ? "更多" : ie(t.stats.shares),
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "mt-4 relative cursor-pointer active:scale-90 transition-transform",
                onClick: (H) => {
                  (H.stopPropagation(), K(!Z));
                },
                children: e.jsx("div", {
                  className: `w-[48px] h-[48px] rounded-full bg-[#161616] border-[8px] border-[#161616] flex items-center justify-center overflow-hidden ${s && v && !Z ? "animate-spin-slow" : ""}`,
                  children: e.jsxs("div", {
                    className:
                      "w-full h-full bg-gradient-to-tr from-gray-700 to-gray-900 rounded-full flex items-center justify-center relative",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 rounded-full border border-white/10",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-[2px] rounded-full border border-white/5",
                      }),
                      (ee = t.bgm) != null && ee.cover
                        ? e.jsx("img", {
                            src: t.bgm.cover,
                            alt: "music",
                            className: "w-full h-full object-cover",
                          })
                        : m
                          ? e.jsx("img", {
                              src: m,
                              alt: "author",
                              className: "w-6 h-6 rounded-full object-cover",
                            })
                          : e.jsx("div", {
                              className: "w-5 h-5 bg-white/20 rounded-full",
                            }),
                      Z &&
                        e.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] z-10",
                          children: e.jsx(xr, {
                            size: 16,
                            className: "text-white/90 fill-white/90 ml-0.5",
                            strokeWidth: 0,
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        e.jsxs("div", {
          className: `absolute left-0 right-[80px] z-10 pl-3 pb-2 text-white transition-all duration-300 ${$ ? "bottom-[80px]" : "bottom-[10px]"}`,
          style: { bottom: $ ? "max(80px, 6rem)" : "max(10px, 1rem)" },
          children: [
            $ &&
              e.jsx("div", {
                className:
                  "mb-2 h-[180px] overflow-hidden relative mask-image-linear-gradient mt-4",
                children: e.jsx("div", {
                  className: `flex flex-col items-start space-y-3 ${z.length > 3 ? "animate-float-scroll" : ""}`,
                  children: [...z, ...(z.length > 3 ? z : [])].map((H, Y) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-black/30 backdrop-blur-md rounded-xl px-3 py-2 text-[13px] text-white/90 inline-flex items-start gap-2 max-w-[90%] shadow-sm border border-white/5",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 border border-white/10",
                            children: e.jsx("img", {
                              src: H.user.avatar,
                              className: "w-full h-full object-cover",
                              alt: H.user.name,
                            }),
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 opacity-70 text-xs mb-0.5",
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: H.user.name,
                                  }),
                                  H.isCaption &&
                                    e.jsxs("span", {
                                      children: ["· ", H.timestamp],
                                    }),
                                  H.isReply &&
                                    e.jsxs("span", {
                                      children: ["回复 ", H.replyTo],
                                    }),
                                ],
                              }),
                              e.jsx("span", {
                                className: "leading-snug break-words",
                                children: S(H.content),
                              }),
                            ],
                          }),
                        ],
                      },
                      `${H.id}-${Y}`,
                    ),
                  ),
                }),
              }),
            !L &&
              e.jsx("div", {
                className: "mb-3",
                children: e.jsx("button", {
                  type: "button",
                  onClick: (H) => {
                    (H.stopPropagation(), B(!0));
                  },
                  className:
                    "w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-black/30 transition-colors",
                  "aria-label": "全屏",
                  children: e.jsx(TE, { size: 16, className: "text-white/90" }),
                }),
              }),
            !$ &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className: "font-bold text-[17px] mb-2 drop-shadow-md",
                    children: ["@", t.author.name],
                  }),
                  e.jsx("div", {
                    className: "mb-3 relative",
                    children: e.jsxs("div", {
                      className: `text-[15px] leading-snug drop-shadow-md whitespace-pre-wrap transition-all duration-300 ${T ? "" : "line-clamp-2"}`,
                      onClick: (H) => {
                        (H.stopPropagation(), I(!T));
                      },
                      children: [
                        (() => {
                          const H = t.caption || t.content;
                          if (H && typeof H == "object") {
                            const Y = H.text || H.foreign || H.en || "",
                              U = H.zh || H.cn || H.translation || "";
                            return e.jsxs("span", {
                              children: [
                                Y,
                                !!U &&
                                  e.jsx(e.Fragment, {
                                    children: F
                                      ? e.jsx("span", {
                                          className: "block mt-1 text-white/80",
                                          children: U,
                                        })
                                      : e.jsx("button", {
                                          type: "button",
                                          className:
                                            "ml-2 text-[12px] font-semibold text-white/90 underline underline-offset-2",
                                          onClick: (ce) => {
                                            (ce.stopPropagation(),
                                              D(!0),
                                              I(!0));
                                          },
                                          children: "翻译",
                                        }),
                                  }),
                              ],
                            });
                          }
                          return e.jsx("span", { children: H });
                        })(),
                        e.jsx("span", {
                          className: "ml-2 font-bold text-white/90",
                          children: P ? "#AI Video" : "#AI视频",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            !$ &&
              t.bgm &&
              !t.bgm.disabled &&
              t.bgm.name &&
              e.jsxs("div", {
                className: "flex items-center space-x-2 opacity-90 w-2/3",
                children: [
                  e.jsx(vr, { size: 14 }),
                  e.jsx("div", {
                    className: "overflow-hidden flex-1",
                    children: e.jsxs("div", {
                      className:
                        "whitespace-nowrap animate-marquee text-[14px] font-medium",
                      children: [
                        t.bgm.name,
                        " - ",
                        t.bgm.author,
                        "      ",
                        t.bgm.name,
                        " - ",
                        t.bgm.author,
                      ],
                    }),
                  }),
                ],
              }),
          ],
        }),
        $ &&
          e.jsxs("div", {
            className:
              "absolute bottom-6 left-0 right-0 h-[50px] flex items-center justify-between px-4 text-white/90 text-xs z-20",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-1 text-gray-400",
                children: [
                  e.jsx(xr, { size: 12, fill: "currentColor" }),
                  e.jsxs("span", {
                    children: [ie(t.stats.views || 0), "浏览"],
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "flex items-center gap-1 bg-[#252525] px-3 py-1.5 rounded-sm text-gray-300 font-medium",
                children: e.jsx("span", { children: "公开" }),
              }),
            ],
          }),
      ],
    });
  },
  gq = ({
    contact: t,
    onFollow: s,
    onUnfollow: n,
    isFollowing: a,
    isMutual: r,
    isBusy: i,
  }) =>
    e.jsxs("div", {
      className: "flex items-center justify-between py-3",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            e.jsx("div", {
              className:
                "w-12 h-12 rounded-full overflow-hidden bg-gray-800 shrink-0",
              "aria-hidden": !0,
              children:
                t.portrait || t.avatar
                  ? e.jsx("img", {
                      src: t.portrait || t.avatar,
                      alt: t.name,
                      className: "w-full h-full object-cover",
                    })
                  : e.jsx("div", {
                      className:
                        "w-full h-full flex items-center justify-center text-white text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-500",
                      children: (t.name || "?")[0],
                    }),
            }),
            e.jsxs("div", {
              className: "flex flex-col min-w-0",
              children: [
                e.jsx("span", {
                  className: "text-white text-[15px] font-medium truncate",
                  children: t.name || t.nickname || "未命名",
                }),
                e.jsx("span", {
                  className: "text-gray-500 text-[12px] truncate",
                  children: "聊天 App 联系人",
                }),
              ],
            }),
          ],
        }),
        r
          ? e.jsxs("div", {
              className: "flex items-center gap-2 shrink-0",
              children: [
                e.jsxs("div", {
                  className:
                    "px-2.5 py-1.5 rounded-[4px] text-[13px] font-medium bg-gray-800 text-gray-300 flex items-center gap-1.5",
                  children: [e.jsx(Lh, { className: "w-4 h-4" }), "互关"],
                }),
                e.jsx("button", {
                  type: "button",
                  disabled: i,
                  onClick: () => (n == null ? void 0 : n(t)),
                  className:
                    "px-3 py-1.5 rounded-[4px] text-[13px] font-medium bg-white/10 text-white/90 active:opacity-80 disabled:opacity-40",
                  children: "取关",
                }),
              ],
            })
          : e.jsx("button", {
              type: "button",
              disabled: i,
              onClick: () => (a ? (n == null ? void 0 : n(t)) : s(t)),
              className: `px-4 py-1.5 rounded-[4px] text-[13px] font-medium transition-colors shrink-0 ${i ? "bg-gray-700 text-gray-500" : a ? "bg-gray-800 text-gray-300 active:bg-gray-700" : "bg-[#fe2c55] text-white active:bg-[#d61e42]"}`,
              children: i ? "…" : a ? "已关注" : "关注",
            }),
      ],
    }),
  bq = ({ onSubViewChange: t, onViewProfile: s }) => {
    const {
        friends: n,
        following: a,
        flushPendingFollowsFromFriends: r,
        followContactFromAddressBook: i,
        unfollowContactFromAddressBook: o,
        processDouyinChatAcceptFriends: c,
        npcs: d,
        videos: u,
        activeVideoIndex: f,
        setActiveVideoIndex: p,
        isPlaying: m,
        setIsPlaying: h,
        contacts: g,
      } = ei(),
      [x, y] = l.useState(!1),
      [v, b] = l.useState(null);
    (l.useEffect(() => {
      c();
    }, []),
      l.useEffect(() => {
        t && t(x);
      }, [x, t]));
    const N = u.filter((M) => n.includes(M.author.id)),
      w = Array.isArray(g) ? g : [],
      _ = (M, E) => {
        if (!Array.isArray(M) || !E) return !1;
        const S = M.map(String),
          j = (d || []).find(
            (L) =>
              L &&
              L.sourceType === "contact" &&
              String(L.contactId) === String(E.id),
          ),
          T = String((j == null ? void 0 : j.id) || `npc_contact_${E.id}`);
        if (S.includes(T)) return !0;
        const I = E.douyinId != null && String(E.douyinId).trim();
        return I && S.includes(I) ? !0 : S.includes(String(E.id)) ? !!j : !1;
      },
      A = async (M) => {
        if (!v) {
          b(M.id);
          try {
            await i(M);
          } catch {
          } finally {
            b(null);
          }
        }
      },
      k = (M) => {
        v || o(M);
      },
      C = () => {
        (r(), y(!1));
      };
    return N.length > 0
      ? e.jsxs("div", {
          className: "h-full w-full bg-black relative",
          children: [
            e.jsx("div", {
              className:
                "absolute top-0 left-0 right-0 z-20 flex justify-center items-center px-4 pt-14 pb-2 bg-gradient-to-b from-black/50 to-transparent pointer-events-none",
              children: e.jsx("div", {
                className: "flex flex-col items-center",
                children: e.jsx("span", {
                  className: "text-white font-medium text-lg",
                  children: "朋友",
                }),
              }),
            }),
            e.jsx("div", {
              className:
                "h-full w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar",
              children: N.map((M, E) =>
                e.jsx(
                  "div",
                  {
                    className: "h-full w-full snap-start relative",
                    children: e.jsx(LC, {
                      video: M,
                      isActive: E === f,
                      isPlaying: m,
                      togglePlay: () => h(!m),
                      onAvatarClick: s,
                    }),
                  },
                  M.id,
                ),
              ),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "h-full w-full bg-black text-white flex flex-col",
          children: [
            e.jsx("div", {
              className:
                "relative flex justify-center items-center px-4 pt-14 pb-2",
              children: e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  e.jsx("span", {
                    className: "text-white font-medium text-lg",
                    children: "朋友",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[10px] text-white/60 font-normal bg-white/10 px-1.5 rounded",
                    children: "开发中",
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto px-4",
              children: e.jsxs("div", {
                className: "flex flex-col items-center mt-10 mb-12",
                children: [
                  e.jsx("h2", {
                    className: "text-[17px] font-medium mb-2 tracking-wide",
                    children: "发现通讯录朋友",
                  }),
                  e.jsx("p", {
                    className:
                      "text-gray-500 text-[13px] mb-8 text-center max-w-[280px]",
                    children:
                      "展示聊天 App 中已有联系人；关注后将同步居民档案，互关后可发私信",
                  }),
                  e.jsxs("button", {
                    type: "button",
                    onClick: () => y(!0),
                    className:
                      "w-[200px] h-11 rounded-xl bg-[#03CCD9] text-white font-medium text-[15px] shadow-[0_4px_16px_rgba(3,204,217,0.45)] flex items-center justify-center gap-2 active:opacity-90 active:scale-[0.98] transition-all",
                    children: [
                      e.jsx(K1, {
                        size: 19,
                        strokeWidth: 2.25,
                        className: "text-white shrink-0",
                        "aria-hidden": !0,
                      }),
                      "查看",
                    ],
                  }),
                ],
              }),
            }),
            x &&
              e.jsxs("div", {
                className:
                  "absolute inset-0 z-50 bg-black flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-200",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-4 pt-14 pb-4 border-b border-white/10",
                    children: [
                      e.jsx("h2", {
                        className: "text-white text-lg font-medium",
                        children: "通讯录好友",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: C,
                        className: "p-2",
                        children: e.jsx(Ts, {
                          className: "text-white w-6 h-6",
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-y-auto px-4 py-2",
                    children:
                      w.length > 0
                        ? w.map((M) =>
                            e.jsx(
                              gq,
                              {
                                contact: M,
                                onFollow: A,
                                onUnfollow: k,
                                isFollowing: _(a, M),
                                isMutual: _(n, M),
                                isBusy: v === M.id,
                              },
                              M.id,
                            ),
                          )
                        : e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center h-60 text-gray-500",
                            children: [
                              e.jsx("p", { children: "暂无联系人" }),
                              e.jsx("p", {
                                className: "text-xs mt-2 text-center px-4",
                                children: "请先在聊天 App 中添加角色",
                              }),
                            ],
                          }),
                  }),
                ],
              }),
          ],
        });
  },
  m4 = ({ onViewProfile: t }) => {
    const {
        videos: s,
        activeVideoIndex: n,
        setActiveVideoIndex: a,
        loadMoreVideos: r,
        isCommentSectionOpen: i,
        setIsCommentSectionOpen: o,
        isLoadingMore: c,
        playMode: d,
        setPlayMode: u,
        lastVideoGenerationError: f,
      } = ei(),
      p = l.useRef(null),
      m = l.useRef(!1),
      [h, g] = l.useState(0),
      [x, y] = l.useState(0),
      [v, b] = l.useState(!1),
      N = (C) => {
        i || (g(C.touches[0].clientY), b(!0));
      },
      w = (C) => {
        if (i || !v) return;
        const E = C.touches[0].clientY - h;
        (n === 0 && E > 0) || (n === s.length - 1 && E < 0) ? y(E * 0.3) : y(E);
      },
      _ = async () => {
        if (d !== "recommend") return;
        const C = s.length,
          M = await r();
        Array.isArray(M) && M.length > 0 && a(C);
      },
      A = () => {
        if (!v) return;
        b(!1);
        const C = window.innerHeight * 0.15;
        (x > C && n > 0
          ? a((M) => M - 1)
          : x < -C &&
            (n < s.length - 1 ? a((M) => M + 1) : d !== "recommend" || _()),
          y(0));
      },
      k = (C) => {
        m.current ||
          i ||
          Math.abs(C.deltaY) < 30 ||
          ((m.current = !0),
          C.deltaY > 0
            ? n < s.length - 1
              ? a((M) => M + 1)
              : d === "recommend" && _()
            : n > 0 && a((M) => M - 1),
          setTimeout(() => {
            m.current = !1;
          }, 800));
      };
    return (
      l.useEffect(() => {
        o(!1);
      }, [n, o]),
      l.useEffect(() => {
        const C = (M) => {
          i ||
            (M.key === "ArrowDown"
              ? n < s.length - 1
                ? a((E) => E + 1)
                : d === "recommend" && _()
              : M.key === "ArrowUp" && n > 0 && a((E) => E - 1));
        };
        return (
          window.addEventListener("keydown", C),
          () => window.removeEventListener("keydown", C)
        );
      }, [n, s.length, d, _, a]),
      s.length === 0
        ? e.jsxs("div", {
            className:
              "h-full w-full bg-black flex flex-col items-center justify-center text-white relative",
            children: [
              e.jsxs("div", {
                className: "text-center space-y-6 z-10",
                children: [
                  e.jsx("h1", {
                    className: "text-3xl font-bold tracking-wider mb-2",
                    children: "JIUYIN SIM",
                  }),
                  e.jsx("p", {
                    className: "text-gray-400 text-sm mb-8",
                    children: "定制你的专属短视频世界",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => r(!0),
                    disabled: c,
                    className:
                      "inline-flex items-center gap-3 pl-3 pr-9 py-2.5 rounded-full font-bold text-lg tracking-wide bg-[#03CCD9] text-white border-2 border-[#03CCD9] shadow-[0_8px_32px_rgba(3,204,217,0.35)] transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:brightness-100",
                    children: c
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(Sn, {
                              className: "animate-spin shrink-0",
                              size: 22,
                              strokeWidth: 2.25,
                            }),
                            e.jsx("span", { children: "生成中..." }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("span", {
                              className:
                                "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/15 ring-2 ring-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]",
                              "aria-hidden": !0,
                              children: e.jsx(xr, {
                                size: 24,
                                className: "text-white fill-white ml-0.5",
                                strokeWidth: 0,
                              }),
                            }),
                            e.jsx("span", { children: "开始体验" }),
                          ],
                        }),
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-black via-[#1a1a1a] to-black opacity-80",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20",
              }),
            ],
          })
        : e.jsxs("div", {
            ref: p,
            className:
              "h-full w-full bg-black overflow-hidden relative touch-none",
            onWheel: k,
            onTouchStart: N,
            onTouchMove: w,
            onTouchEnd: A,
            onTouchCancel: () => {
              (b(!1), y(0));
            },
            children: [
              e.jsx("div", {
                className: `h-full w-full ${v ? "" : "transition-transform duration-300 ease-out"}`,
                style: { transform: `translateY(calc(-${n * 100}% + ${x}px))` },
                children: s.map((C, M) =>
                  e.jsx(
                    "div",
                    {
                      className: "h-full w-full relative",
                      children:
                        Math.abs(n - M) <= 1 &&
                        e.jsx(LC, {
                          video: C,
                          isActive: n === M,
                          onAvatarClick: t,
                        }),
                    },
                    C.id,
                  ),
                ),
              }),
              c &&
                e.jsxs("div", {
                  className:
                    "absolute bottom-20 left-1/2 -translate-x-1/2 z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 text-white text-xs pointer-events-none",
                  children: [
                    e.jsx(Sn, { size: 14, className: "animate-spin" }),
                    e.jsx("span", { children: "AI 正在生成新内容..." }),
                  ],
                }),
              !c &&
                f &&
                e.jsx("div", {
                  className:
                    "absolute bottom-20 left-1/2 -translate-x-1/2 z-50 bg-red-600/90 px-4 py-2 rounded-full backdrop-blur-md text-white text-xs",
                  children: f,
                }),
            ],
          })
    );
  },
  p4 = ({ children: t, onDelete: s }) => {
    const n = jM(0),
      a = NM(n, [-100, -50], [1, 0]);
    return e.jsxs("div", {
      className: "relative overflow-hidden bg-white",
      children: [
        e.jsx(We.div, {
          className:
            "absolute top-0 bottom-0 right-0 w-[80px] bg-red-500 flex items-center justify-center text-white z-0",
          style: { opacity: a },
          onClick: s,
          children: e.jsx(_n, { size: 20 }),
        }),
        e.jsx(We.div, {
          className: "relative z-10 bg-white",
          drag: "x",
          dragConstraints: { left: -80, right: 0 },
          dragElastic: 0.1,
          onDragEnd: (r, { offset: i, velocity: o }) => {
            i.x < -40;
          },
          style: { x: n },
          children: t,
        }),
      ],
    });
  },
  yq = ({ onChatClick: t, onSubViewChange: s, onVideoClick: n }) => {
    const {
        currentUser: a,
        notifications: r,
        setNotifications: i,
        privateChats: o,
        npcs: c,
        following: d = [],
        toggleFollow: u,
      } = ei(),
      { contactsPublic: f } = vn(),
      p = f,
      [m, h] = l.useState(null),
      g = r.filter((C) => C.type === "follow"),
      x = r.filter((C) => ["like", "comment", "favorite"].includes(C.type)),
      y = g.filter((C) => !C.read).length,
      v = x.filter((C) => !C.read).length,
      b = (C) => {
        var S, j, T;
        const M = [
            (S = C == null ? void 0 : C.user) == null ? void 0 : S.id,
            (j = C == null ? void 0 : C.user) == null ? void 0 : j.douyinId,
            (T = C == null ? void 0 : C.user) == null ? void 0 : T.contactId,
          ].filter(Boolean),
          E = M.find((I) => !d.includes(I)) || M[0];
        E && u(E);
      },
      N = (() => {
        const C = [];
        return (
          o &&
            Object.entries(o).forEach(([M, E]) => {
              if (!Array.isArray(E) || E.length === 0) return;
              const S = E[E.length - 1],
                j = (c || []).find(
                  (L) =>
                    L && (L.id === M || L.douyinId === M || L.contactId === M),
                ),
                T = (f || []).find(
                  (L) =>
                    L.id === M ||
                    L.douyinId === M ||
                    L.id === (j == null ? void 0 : j.contactId),
                ),
                I = j
                  ? {
                      id: j.id,
                      name: j.name,
                      avatar:
                        j.avatar ||
                        (T == null ? void 0 : T.portrait) ||
                        (T == null ? void 0 : T.avatar),
                    }
                  : T
                    ? {
                        id: T.douyinId || T.id,
                        name: T.name || T.nickname,
                        avatar: T.portrait || T.avatar,
                      }
                    : null;
              I &&
                C.push({
                  id: M,
                  type: "user",
                  avatar: I.avatar,
                  title: I.name,
                  subtitle: S.text,
                  time: new Date(S.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  }),
                  timestamp: S.timestamp,
                  user: I,
                });
            }),
          C.sort((M, E) => (E.timestamp || 0) - (M.timestamp || 0))
        );
      })(),
      w = (C) => {
        (h(C), s && s(!0));
        const M =
            C === "followers" ? ["follow"] : ["like", "comment", "favorite"],
          E = r.map((S) =>
            M.includes(S.type) && !S.read ? { ...S, read: !0 } : S,
          );
        (i(E), be.set("video_app_notifications", E));
      },
      _ = (C) => {
        const M =
            C === "followers" ? ["follow"] : ["like", "comment", "favorite"],
          E = r.filter((S) => !M.includes(S.type));
        (i(E), be.set("video_app_notifications", E));
      },
      A = (C) => {
        const M = r.filter((E) => E.id !== C);
        (i(M), be.set("video_app_notifications", M));
      },
      k = [
        {
          id: "me",
          name: "发日常",
          isMe: !0,
          avatar:
            (a == null ? void 0 : a.avatar) ||
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        },
      ];
    return m === "followers"
      ? e.jsxs("div", {
          className:
            "h-full w-full bg-white text-black flex flex-col animate-slide-left",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-4 pt-14 pb-3 border-b border-gray-100 group",
              children: [
                e.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    e.jsx("button", {
                      onClick: () => {
                        (h(null), s && s(!1));
                      },
                      className: "-ml-2 p-2",
                      children: e.jsx(un, { size: 24 }),
                    }),
                    e.jsxs("div", {
                      className: "ml-2 flex items-end gap-1.5",
                      children: [
                        e.jsx("span", {
                          className: "text-[17px] font-bold",
                          children: "新关注",
                        }),
                        e.jsx("span", {
                          className: "text-[11px] text-gray-400 pb-[1px]",
                          children: "仅展示，不可点击",
                        }),
                      ],
                    }),
                  ],
                }),
                g.length > 0 &&
                  e.jsx("button", {
                    onClick: () => _("followers"),
                    className:
                      "p-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: e.jsx(_n, { size: 20 }),
                  }),
              ],
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto",
              children:
                g.length > 0
                  ? g.map((C) =>
                      e.jsx(
                        p4,
                        {
                          onDelete: () => A(C.id),
                          children: e.jsxs("div", {
                            className:
                              "flex items-center px-4 py-4 active:bg-gray-50",
                            children: [
                              (() => {
                                var I, L, B, F, D;
                                const M = [
                                    (I = C == null ? void 0 : C.user) == null
                                      ? void 0
                                      : I.id,
                                    (L = C == null ? void 0 : C.user) == null
                                      ? void 0
                                      : L.douyinId,
                                    (B = C == null ? void 0 : C.user) == null
                                      ? void 0
                                      : B.contactId,
                                  ].filter(Boolean),
                                  E = (c || []).find(
                                    ($) =>
                                      $ &&
                                      M.some(
                                        (P) =>
                                          $.id === P ||
                                          $.douyinId === P ||
                                          $.contactId === P,
                                      ),
                                  ),
                                  S = (p || []).find(
                                    ($) =>
                                      ($ &&
                                        M.some(
                                          (P) => $.id === P || $.douyinId === P,
                                        )) ||
                                      ((E == null ? void 0 : E.contactId) &&
                                        $.id === E.contactId),
                                  ),
                                  j =
                                    (E == null ? void 0 : E.avatar) ||
                                    (S == null ? void 0 : S.portrait) ||
                                    (S == null ? void 0 : S.avatar) ||
                                    ((F = C == null ? void 0 : C.user) == null
                                      ? void 0
                                      : F.avatar),
                                  T =
                                    (E == null ? void 0 : E.name) ||
                                    (S == null ? void 0 : S.name) ||
                                    (S == null ? void 0 : S.nickname) ||
                                    ((D = C == null ? void 0 : C.user) == null
                                      ? void 0
                                      : D.name) ||
                                    "avatar";
                                return e.jsx("img", {
                                  src: j,
                                  className:
                                    "w-12 h-12 rounded-full object-cover mr-3",
                                  alt: T,
                                });
                              })(),
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx("div", {
                                    className: "font-medium text-[15px]",
                                    children: (() => {
                                      var j, T, I, L;
                                      const M = [
                                          (j = C == null ? void 0 : C.user) ==
                                          null
                                            ? void 0
                                            : j.id,
                                          (T = C == null ? void 0 : C.user) ==
                                          null
                                            ? void 0
                                            : T.douyinId,
                                          (I = C == null ? void 0 : C.user) ==
                                          null
                                            ? void 0
                                            : I.contactId,
                                        ].filter(Boolean),
                                        E = (c || []).find(
                                          (B) =>
                                            B &&
                                            M.some(
                                              (F) =>
                                                B.id === F ||
                                                B.douyinId === F ||
                                                B.contactId === F,
                                            ),
                                        ),
                                        S = (p || []).find(
                                          (B) =>
                                            (B &&
                                              M.some(
                                                (F) =>
                                                  B.id === F ||
                                                  B.douyinId === F,
                                              )) ||
                                            ((E == null
                                              ? void 0
                                              : E.contactId) &&
                                              B.id === E.contactId),
                                        );
                                      return (
                                        (E == null ? void 0 : E.name) ||
                                        (S == null ? void 0 : S.name) ||
                                        (S == null ? void 0 : S.nickname) ||
                                        ((L = C == null ? void 0 : C.user) ==
                                        null
                                          ? void 0
                                          : L.name)
                                      );
                                    })(),
                                  }),
                                  e.jsxs("div", {
                                    className: "text-xs text-gray-500 mt-0.5",
                                    children: [
                                      "关注了你 ·",
                                      " ",
                                      new Date(C.timestamp).toLocaleTimeString(
                                        [],
                                        { hour: "2-digit", minute: "2-digit" },
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              (() => {
                                var S, j, T;
                                return [
                                  (S = C == null ? void 0 : C.user) == null
                                    ? void 0
                                    : S.id,
                                  (j = C == null ? void 0 : C.user) == null
                                    ? void 0
                                    : j.douyinId,
                                  (T = C == null ? void 0 : C.user) == null
                                    ? void 0
                                    : T.contactId,
                                ]
                                  .filter(Boolean)
                                  .some((I) => d.includes(I))
                                  ? e.jsx("div", {
                                      className:
                                        "w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 border border-gray-200",
                                      children: e.jsx(Lh, { size: 16 }),
                                    })
                                  : e.jsx("button", {
                                      type: "button",
                                      onClick: () => b(C),
                                      className:
                                        "bg-[#fe2c55] text-white text-xs px-4 py-1.5 rounded-[4px] font-medium active:bg-[#d61e42]",
                                      children: "回关",
                                    });
                              })(),
                            ],
                          }),
                        },
                        C.id,
                      ),
                    )
                  : e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center h-64 text-gray-400",
                      children: [
                        e.jsx(Vi, { size: 48, className: "mb-2 opacity-20" }),
                        e.jsx("span", {
                          className: "text-sm",
                          children: "暂无新关注",
                        }),
                      ],
                    }),
            }),
          ],
        })
      : m === "interactions"
        ? e.jsxs("div", {
            className:
              "h-full w-full bg-white text-black flex flex-col animate-slide-left",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between px-4 pt-14 pb-3 border-b border-gray-100 group",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          (h(null), s && s(!1));
                        },
                        className: "-ml-2 p-2",
                        children: e.jsx(un, { size: 24 }),
                      }),
                      e.jsxs("div", {
                        className: "ml-2 flex items-end gap-1.5",
                        children: [
                          e.jsx("span", {
                            className: "text-[17px] font-bold",
                            children: "互动消息",
                          }),
                          e.jsx("span", {
                            className: "text-[11px] text-gray-400 pb-[1px]",
                            children: "仅展示，不可点击",
                          }),
                        ],
                      }),
                    ],
                  }),
                  x.length > 0 &&
                    e.jsx("button", {
                      onClick: () => _("interactions"),
                      className:
                        "p-2 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      children: e.jsx(_n, { size: 20 }),
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children:
                  x.length > 0
                    ? x.map((C) =>
                        e.jsx(
                          p4,
                          {
                            onDelete: () => A(C.id),
                            children: e.jsxs("div", {
                              className:
                                "flex items-start px-4 py-4 active:bg-gray-50 cursor-pointer",
                              onClick: () => {
                                C.videoId && n && n(C.videoId);
                              },
                              children: [
                                (() => {
                                  var I, L, B, F, D;
                                  const M = [
                                      (I = C == null ? void 0 : C.user) == null
                                        ? void 0
                                        : I.id,
                                      (L = C == null ? void 0 : C.user) == null
                                        ? void 0
                                        : L.douyinId,
                                      (B = C == null ? void 0 : C.user) == null
                                        ? void 0
                                        : B.contactId,
                                    ].filter(Boolean),
                                    E = (c || []).find(
                                      ($) =>
                                        $ &&
                                        M.some(
                                          (P) =>
                                            $.id === P ||
                                            $.douyinId === P ||
                                            $.contactId === P,
                                        ),
                                    ),
                                    S = (p || []).find(
                                      ($) =>
                                        ($ &&
                                          M.some(
                                            (P) =>
                                              $.id === P || $.douyinId === P,
                                          )) ||
                                        ((E == null ? void 0 : E.contactId) &&
                                          $.id === E.contactId),
                                    ),
                                    j =
                                      (E == null ? void 0 : E.avatar) ||
                                      (S == null ? void 0 : S.portrait) ||
                                      (S == null ? void 0 : S.avatar) ||
                                      ((F = C == null ? void 0 : C.user) == null
                                        ? void 0
                                        : F.avatar),
                                    T =
                                      (E == null ? void 0 : E.name) ||
                                      (S == null ? void 0 : S.name) ||
                                      (S == null ? void 0 : S.nickname) ||
                                      ((D = C == null ? void 0 : C.user) == null
                                        ? void 0
                                        : D.name) ||
                                      "avatar";
                                  return e.jsx("img", {
                                    src: j,
                                    className:
                                      "w-10 h-10 rounded-full object-cover mr-3",
                                    alt: T,
                                  });
                                })(),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsxs("div", {
                                      className: "text-[14px]",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-medium text-gray-900 mr-1",
                                          children: (() => {
                                            var j, T, I, L;
                                            const M = [
                                                (j =
                                                  C == null
                                                    ? void 0
                                                    : C.user) == null
                                                  ? void 0
                                                  : j.id,
                                                (T =
                                                  C == null
                                                    ? void 0
                                                    : C.user) == null
                                                  ? void 0
                                                  : T.douyinId,
                                                (I =
                                                  C == null
                                                    ? void 0
                                                    : C.user) == null
                                                  ? void 0
                                                  : I.contactId,
                                              ].filter(Boolean),
                                              E = (c || []).find(
                                                (B) =>
                                                  B &&
                                                  M.some(
                                                    (F) =>
                                                      B.id === F ||
                                                      B.douyinId === F ||
                                                      B.contactId === F,
                                                  ),
                                              ),
                                              S = (p || []).find(
                                                (B) =>
                                                  (B &&
                                                    M.some(
                                                      (F) =>
                                                        B.id === F ||
                                                        B.douyinId === F,
                                                    )) ||
                                                  ((E == null
                                                    ? void 0
                                                    : E.contactId) &&
                                                    B.id === E.contactId),
                                              );
                                            return (
                                              (E == null ? void 0 : E.name) ||
                                              (S == null ? void 0 : S.name) ||
                                              (S == null
                                                ? void 0
                                                : S.nickname) ||
                                              ((L =
                                                C == null ? void 0 : C.user) ==
                                              null
                                                ? void 0
                                                : L.name)
                                            );
                                          })(),
                                        }),
                                        e.jsx("span", {
                                          className: "text-gray-600",
                                          children:
                                            C.type === "like"
                                              ? "赞了你的作品"
                                              : C.type === "comment"
                                                ? "评论了你的作品"
                                                : "收藏了你的作品",
                                        }),
                                      ],
                                    }),
                                    C.content &&
                                      C.type === "comment" &&
                                      e.jsx("div", {
                                        className:
                                          "text-[14px] text-gray-900 mt-1 border-l-2 border-gray-200 pl-2 py-1",
                                        children: C.content,
                                      }),
                                    e.jsx("div", {
                                      className: "text-xs text-gray-400 mt-1.5",
                                      children: new Date(
                                        C.timestamp,
                                      ).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }),
                                    }),
                                  ],
                                }),
                                C.videoCover &&
                                  e.jsx("div", {
                                    className:
                                      "w-10 h-10 bg-gray-100 rounded-[2px] ml-3 flex-shrink-0 overflow-hidden",
                                    children: e.jsx("img", {
                                      src: C.videoCover,
                                      className: "w-full h-full object-cover",
                                      alt: "cover",
                                    }),
                                  }),
                              ],
                            }),
                          },
                          C.id,
                        ),
                      )
                    : e.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center h-64 text-gray-400",
                        children: [
                          e.jsx(Ar, { size: 48, className: "mb-2 opacity-20" }),
                          e.jsx("span", {
                            className: "text-sm",
                            children: "暂无互动消息",
                          }),
                        ],
                      }),
              }),
            ],
          })
        : e.jsxs("div", {
            className: "h-full w-full bg-white text-black flex flex-col",
            children: [
              e.jsx("div", {
                className:
                  "flex justify-center items-center px-4 pt-14 pb-2 bg-white z-10",
                children: e.jsx("h1", {
                  className: "text-[17px] font-bold",
                  children: "消息",
                }),
              }),
              e.jsxs("div", {
                className: "flex-1 overflow-y-auto pb-20",
                children: [
                  e.jsx("div", {
                    className:
                      "flex space-x-4 px-4 py-4 overflow-x-auto no-scrollbar pt-8",
                    children: k.map((C) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex flex-col items-center space-y-1 min-w-[64px]",
                          children: [
                            e.jsx("div", {
                              className: "relative",
                              children: C.isMe
                                ? e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "absolute -top-7 left-0 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-gray-100 z-10 flex items-center justify-center max-w-[min(240px,calc(100vw-32px))] min-w-0",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "text-[12px] text-gray-600 font-medium block w-full min-w-0 whitespace-nowrap overflow-hidden text-ellipsis text-left",
                                            children:
                                              (
                                                (a == null
                                                  ? void 0
                                                  : a.signature) || ""
                                              ).trim() || "暂无个性签名",
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute -bottom-1 left-7 w-2.5 h-2.5 bg-white border-b border-r border-gray-100 rotate-45",
                                          }),
                                        ],
                                      }),
                                      e.jsx("img", {
                                        src: C.avatar,
                                        alt: C.name,
                                        className:
                                          "w-14 h-14 rounded-full object-cover",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute -bottom-[2px] -right-[2px] bg-white rounded-full p-[2px]",
                                        children: e.jsx("div", {
                                          className:
                                            "bg-[#03CCD9] rounded-full w-[18px] h-[18px] flex items-center justify-center",
                                          children: e.jsx(qo, {
                                            size: 9,
                                            className: "text-white",
                                            strokeWidth: 2.25,
                                          }),
                                        }),
                                      }),
                                    ],
                                  })
                                : e.jsx("div", {
                                    className: "relative",
                                    children: e.jsx("img", {
                                      src: C.avatar,
                                      alt: C.name,
                                      className:
                                        "w-14 h-14 rounded-full object-cover",
                                    }),
                                  }),
                            }),
                            e.jsx("span", {
                              className:
                                "text-xs text-gray-600 font-medium truncate w-16 text-center",
                              children: C.name,
                            }),
                          ],
                        },
                        C.id,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center px-4 py-3 active:bg-gray-50 transition-colors cursor-pointer",
                        onClick: () => w("followers"),
                        children: [
                          e.jsx("div", {
                            className: "relative mr-3 flex-shrink-0",
                            children: e.jsx("div", {
                              className:
                                "w-12 h-12 rounded-full bg-[#03CCD9] flex items-center justify-center",
                              children: e.jsx(wu, {
                                size: 26,
                                className: "text-white",
                                strokeWidth: 2,
                                "aria-hidden": !0,
                              }),
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "flex-1 min-w-0 flex flex-col justify-center h-12 border-b border-gray-50",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center mb-0.5",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[16px] font-medium text-black",
                                    children: "新关注我的",
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs text-gray-400",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[14px] text-gray-500 truncate",
                                    children:
                                      g.length > 0
                                        ? `${g[0].user.name} 等人关注了你`
                                        : "暂无新关注",
                                  }),
                                  y > 0 &&
                                    e.jsx("div", {
                                      className:
                                        "bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full flex-shrink-0 min-w-[16px] text-center",
                                      children: y,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center px-4 py-3 active:bg-gray-50 transition-colors cursor-pointer",
                        onClick: () => w("interactions"),
                        children: [
                          e.jsx("div", {
                            className: "relative mr-3 flex-shrink-0",
                            children: e.jsx("div", {
                              className:
                                "w-12 h-12 rounded-full bg-[#03CCD9] flex items-center justify-center",
                              children: e.jsx(q1, {
                                size: 24,
                                className: "text-white",
                                strokeWidth: 2,
                                "aria-hidden": !0,
                              }),
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "flex-1 min-w-0 flex flex-col justify-center h-12 border-b border-gray-50",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center mb-0.5",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[16px] font-medium text-black",
                                    children: "互动消息",
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs text-gray-400",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[14px] text-gray-500 truncate",
                                    children:
                                      x.length > 0
                                        ? `${x[0].user.name} ${x[0].type === "like" ? "赞了你" : "评论了你"}`
                                        : "暂无新互动",
                                  }),
                                  v > 0 &&
                                    e.jsx("div", {
                                      className:
                                        "bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full flex-shrink-0 min-w-[16px] text-center",
                                      children: v,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      N.map((C) => {
                        var I, L, B;
                        const M = [
                            (I = C == null ? void 0 : C.user) == null
                              ? void 0
                              : I.id,
                            (L = C == null ? void 0 : C.user) == null
                              ? void 0
                              : L.douyinId,
                            (B = C == null ? void 0 : C.user) == null
                              ? void 0
                              : B.contactId,
                            C == null ? void 0 : C.id,
                          ].filter(Boolean),
                          E = (c || []).find(
                            (F) =>
                              F &&
                              M.some(
                                (D) =>
                                  F.id === D ||
                                  F.douyinId === D ||
                                  F.contactId === D,
                              ),
                          ),
                          S = (p || []).find(
                            (F) =>
                              F &&
                              (M.some((D) => F.id === D || F.douyinId === D) ||
                                ((E == null ? void 0 : E.contactId) &&
                                  F.id === E.contactId)),
                          ),
                          j =
                            (E == null ? void 0 : E.avatar) ||
                            (S == null ? void 0 : S.portrait) ||
                            (S == null ? void 0 : S.avatar) ||
                            C.avatar,
                          T =
                            (E == null ? void 0 : E.name) ||
                            (S == null ? void 0 : S.name) ||
                            (S == null ? void 0 : S.nickname) ||
                            C.title;
                        return e.jsx(
                          "div",
                          {
                            className: "relative cursor-pointer",
                            onClick: () =>
                              t &&
                              t(C.user || { name: T, avatar: j, id: C.id }),
                            children: e.jsxs("div", {
                              className:
                                "flex items-start px-4 py-3 active:bg-gray-50 transition-colors",
                              children: [
                                e.jsx("div", {
                                  className: "relative mr-3 flex-shrink-0",
                                  children: e.jsx("img", {
                                    src: j,
                                    alt: T,
                                    className:
                                      "w-12 h-12 rounded-full object-cover border border-gray-100",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex-1 min-w-0 flex flex-col justify-center h-12 border-b border-gray-50",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between items-center mb-0.5",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center",
                                          children: [
                                            e.jsx("span", {
                                              className:
                                                "text-[16px] font-medium text-black truncate",
                                              children: T,
                                            }),
                                            C.tag &&
                                              e.jsx("span", {
                                                className:
                                                  "ml-2 px-1.5 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-sm",
                                                children: C.tag,
                                              }),
                                          ],
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-xs text-gray-400 flex-shrink-0 ml-2",
                                          children: C.time,
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "flex justify-between items-center",
                                      children: e.jsx("p", {
                                        className:
                                          "text-[14px] text-gray-500 truncate pr-4",
                                        children: C.subtitle,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          C.id,
                        );
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
  },
  vq = (t) => {
    if (!t) return "";
    const s = new Date(t),
      n = s.getMonth() + 1,
      a = s.getDate(),
      r = [
        "摩羯座",
        "水瓶座",
        "双鱼座",
        "白羊座",
        "金牛座",
        "双子座",
        "巨蟹座",
        "狮子座",
        "处女座",
        "天秤座",
        "天蝎座",
        "射手座",
        "摩羯座",
      ];
    return a < [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22][n - 1]
      ? r[n - 1]
      : r[n];
  },
  wq = (t) => {
    if (!t) return "";
    const s = new Date(t),
      n = new Date();
    let a = n.getFullYear() - s.getFullYear();
    const r = n.getMonth() - s.getMonth();
    return ((r < 0 || (r === 0 && n.getDate() < s.getDate())) && a--, a + "岁");
  },
  jq = (t) =>
    !t || !String(t).trim()
      ? null
      : t
          .split(/(@[^\s\u200b]+)/g)
          .map((n, a) =>
            n.startsWith("@")
              ? e.jsx(
                  "span",
                  { className: "text-[#2b5aed] mr-1", children: n },
                  a,
                )
              : n,
          ),
  Nq = ({
    onEditProfile: t,
    onVideoClick: s,
    onClose: n,
    onOpenLiveRecord: a,
  }) => {
    var x;
    const { currentUser: r, myVideos: i, videos: o, friends: c } = ei(),
      [d, u] = l.useState("works"),
      [f, p] = l.useState([]),
      m = i.filter((y) => {
        var v;
        return (
          ((v = y.author) == null ? void 0 : v.id) ===
          (r == null ? void 0 : r.id)
        );
      }),
      h = (() => {
        const y = (o || []).filter((N) => N.isLiked),
          v = (i || []).filter((N) => N.isLiked),
          b = new Set();
        return [...y, ...v].filter((N) =>
          b.has(N.id) ? !1 : (b.add(N.id), !0),
        );
      })();
    l.useEffect(() => {
      let y = !1;
      return (
        (async () => {
          const v = await u2();
          y || p(Array.isArray(v) ? v : []);
        })(),
        () => {
          y = !0;
        }
      );
    }, []);
    const g = l.useMemo(() => f.filter((y) => y && y.hostKind !== "npc"), [f]);
    return r
      ? e.jsxs("div", {
          className:
            "h-full w-full bg-white text-black overflow-y-auto no-scrollbar relative",
          children: [
            e.jsxs("div", {
              className: "relative h-[220px] w-full",
              children: [
                e.jsx("img", {
                  src:
                    r.cover ||
                    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                  alt: "cover",
                  className: "w-full h-full object-cover",
                }),
                e.jsx("div", { className: "absolute inset-0 bg-black/20" }),
                e.jsx("div", {
                  className:
                    "absolute top-0 left-0 right-0 pt-14 px-4 flex justify-end items-start z-20 text-white",
                  children: e.jsx("button", {
                    type: "button",
                    className:
                      "w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border-0 p-0 text-white scale-90 origin-right",
                    onClick: n,
                    "aria-label": "关闭",
                    children: e.jsx(EE, { size: 16 }),
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "absolute bottom-3 left-4 right-4 flex items-center z-10",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-[84px] h-[84px] rounded-full border-2 border-white overflow-hidden mr-3 flex-shrink-0 bg-gray-200",
                      children: r.avatar
                        ? e.jsx("img", {
                            src: r.avatar,
                            alt: r.name,
                            className: "w-full h-full object-cover",
                          })
                        : e.jsx("div", {
                            className:
                              "w-full h-full flex items-center justify-center text-white font-bold text-3xl bg-gradient-to-br from-purple-500 to-pink-500",
                            children: (x = r.name) == null ? void 0 : x[0],
                          }),
                    }),
                    e.jsx("div", {
                      className: "flex-1 min-w-0",
                      children: e.jsx("div", {
                        className: "flex items-center mb-1",
                        children: e.jsx("h1", {
                          className:
                            "text-white text-[22px] font-bold drop-shadow-md truncate",
                          children: r.name,
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "relative bg-white -mt-6 rounded-t-2xl px-4 pt-4 pb-24 min-h-[500px] z-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-start justify-between mb-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex space-x-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "font-bold text-lg text-black leading-none mb-1",
                              children: m.reduce(
                                (y, v) => y + v.stats.likes,
                                0,
                              ),
                            }),
                            e.jsx("span", {
                              className: "text-gray-500 text-xs",
                              children: "获赞",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "font-bold text-lg text-black leading-none mb-1",
                              children: c.length,
                            }),
                            e.jsx("span", {
                              className: "text-gray-500 text-xs",
                              children: "互关",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "font-bold text-lg text-black leading-none mb-1",
                              children: r.following,
                            }),
                            e.jsx("span", {
                              className: "text-black text-xs",
                              children: "关注",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "font-bold text-lg text-black leading-none mb-1",
                              children: r.followers,
                            }),
                            e.jsx("span", {
                              className: "text-gray-500 text-xs",
                              children: "粉丝",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className:
                        "w-9 h-9 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-gray-800 active:opacity-80",
                      onClick: t,
                      "aria-label": "编辑主页",
                      children: e.jsx(_l, {
                        size: 17,
                        strokeWidth: 2,
                        className: "text-gray-700",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mb-6",
                  children: [
                    (r.signature || "").trim()
                      ? e.jsx("div", {
                          className: "text-gray-800 text-sm mb-3",
                          children: e.jsx("span", {
                            className: "line-clamp-2",
                            children: jq(r.signature),
                          }),
                        })
                      : e.jsx("div", { className: "mb-3" }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        r.gender
                          ? e.jsx("div", {
                              className:
                                "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500 flex items-center",
                              children: r.gender,
                            })
                          : e.jsxs("div", {
                              className:
                                "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500 flex items-center",
                              children: [
                                e.jsx(ea, { size: 12, className: "mr-1" }),
                                "添加性别等标签",
                              ],
                            }),
                        r.birthday &&
                          e.jsx("div", {
                            className:
                              "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500",
                            children: wq(r.birthday),
                          }),
                        r.location &&
                          e.jsx("div", {
                            className:
                              "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500",
                            children: r.location,
                          }),
                        r.birthday &&
                          e.jsx("div", {
                            className:
                              "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500",
                            children: vq(r.birthday),
                          }),
                        !r.location &&
                          !r.birthday &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500",
                                children: "北京",
                              }),
                              e.jsx("div", {
                                className:
                                  "bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-500",
                                children: "双子座",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "sticky top-0 bg-white z-20 border-b border-gray-100 -mx-4 px-4",
                  children: e.jsx("div", {
                    className: "flex items-center justify-around h-12 px-2",
                    children: [
                      {
                        label: "作品",
                        key: "works",
                        badge: m.length > 0 ? m.length : "",
                      },
                      { label: "喜欢", key: "likes", badge: "" },
                      {
                        label: "直播",
                        key: "live",
                        badge: g.length > 0 ? g.length : "",
                      },
                    ].map(({ label: y, key: v, badge: b }) => {
                      const N = d === v;
                      return e.jsxs(
                        "div",
                        {
                          className: `relative flex flex-col items-center justify-center h-full cursor-pointer px-3 ${N ? "text-black font-bold" : "text-gray-500"}`,
                          onClick: () => u(v),
                          children: [
                            e.jsxs("span", {
                              className: "text-[15px]",
                              children: [y, b !== "" ? b : ""],
                            }),
                            N &&
                              e.jsx("div", {
                                className:
                                  "absolute bottom-0 w-8 h-[2px] bg-[#03CCD9] rounded-full",
                              }),
                          ],
                        },
                        v,
                      );
                    }),
                  }),
                }),
                e.jsxs("div", {
                  className: "-mx-4 mt-1 min-h-[300px]",
                  children: [
                    d === "works" &&
                      (m.length > 0
                        ? e.jsx("div", {
                            className: "grid grid-cols-3 gap-[1px]",
                            children: m.map((y) => {
                              var v, b, N, w;
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