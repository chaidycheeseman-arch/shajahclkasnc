                artist: Q.artist,
                album: Q.album,
                cover: Q.cover,
                url: null,
                lrc_data: Ae,
                source: "local",
                platformId: null,
                fileBlob: G,
              }
            );
          });
          await Sj(se, FO, (G) => go.addSong(G));
          const Te = (G) =>
              (G || "")
                .replace(/\.(lrc|lyr)$/i, "")
                .trim()
                .toLowerCase(),
            ke = new Set(
              ce
                .map((G) => {
                  const we = G.name
                      .replace(/\.[^/.]+$/, "")
                      .trim()
                      .toLowerCase(),
                    Q = pe.find((ve) => sb(we, Te(ve.name)));
                  return Q ? Te(Q.name) : null;
                })
                .filter(Boolean),
            ),
            W = pe.filter((G) => !ke.has(Te(G.name)));
          let ue = 0;
          const re = await go.getSongsByPlaylist(U.id);
          for (const G of W) {
            const we = d1(Te(G.name)),
              Q = re.find((Ve) => sb(Ve.title, Te(G.name)));
            if (!Q) continue;
            const ve = await G.text();
            (await go.addSong({ ...Q, lrc_data: ve }), (ue += 1));
          }
          const he = await go.getSongsByPlaylist(U.id);
          x(he);
          const ge = se.filter((G) => G.lrc_data && G.lrc_data.trim()).length;
          let J = "";
          (se.length > 0 &&
            (J =
              ge > 0
                ? `成功导入 ${se.length} 首歌曲，其中 ${ge} 首带歌词。`
                : `成功导入 ${se.length} 首歌曲。`),
            ue > 0 &&
              (J +=
                (J ? " " : "") +
                (se.length > 0
                  ? `并为 ${ue} 首已有歌曲补上歌词。`
                  : `已为 ${ue} 首已有歌曲补上歌词。`)),
            J && alert(J));
        } catch {
          alert("导入过程中发生错误，请检查文件或控制台。");
        } finally {
          M(!1);
        }
      };
    return e.jsxs("div", {
      className: "w-full h-full flex flex-col min-h-0",
      children: [
        e.jsxs("div", {
          className:
            "pt-16 px-8 pb-6 flex items-start justify-between bg-white z-20",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("h1", {
                  className:
                    "text-5xl font-light tracking-tighter cursor-pointer hover:opacity-80 transition-opacity",
                  onClick: () => (o == null ? void 0 : o()),
                  children: [
                    "乐听",
                    e.jsx("span", { className: "text-red-500", children: "." }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-xs font-mono text-gray-400 mt-2 uppercase tracking-widest",
                  children:
                    d === "detail" ? (m == null ? void 0 : m.name) : "本地曲库",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex gap-2 items-center flex-wrap justify-end",
              children: [
                d === "detail" &&
                  e.jsx("button", {
                    onClick: () => u("home"),
                    className:
                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                    children: e.jsx(Xr, { size: 20 }),
                  }),
                r
                  ? e.jsx("button", {
                      onClick: a,
                      className:
                        "w-8 h-8 rounded-full overflow-hidden border border-gray-200 hover:ring-2 hover:ring-red-500 hover:ring-offset-2 transition-all",
                      children: e.jsx("img", {
                        src: bl(r.avatarUrl),
                        alt: "",
                        className: "w-full h-full object-cover",
                      }),
                    })
                  : e.jsx("button", {
                      onClick: a,
                      className:
                        "px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-full hover:bg-gray-50 transition-colors",
                      children: "登录",
                    }),
                e.jsx("button", {
                  onClick: ye,
                  disabled: C,
                  className:
                    "group flex items-center justify-center gap-2 px-4 py-2 w-20 bg-black text-white rounded-full hover:bg-gray-800 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed",
                  children: C
                    ? e.jsx(Sn, { size: 14, className: "animate-spin" })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("span", {
                            className: "text-xs font-medium",
                            children: "添加",
                          }),
                          e.jsx(ea, { size: 14 }),
                        ],
                      }),
                }),
                e.jsx("input", {
                  type: "file",
                  ref: $,
                  className: "hidden",
                  accept: "",
                  multiple: !0,
                  onChange: ee,
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: `flex-1 min-h-0 px-8 pb-32 ${d === "home" ? "overflow-y-auto scrollbar-hide" : "flex flex-col overflow-hidden"}`,
          children: [
            d === "home" &&
              e.jsxs("section", {
                className: "mb-12",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between mb-6 border-b border-gray-100 pb-2",
                    children: [
                      e.jsx("h2", {
                        className: "text-lg font-medium leading-tight",
                        children: "歌单",
                      }),
                      e.jsxs("div", {
                        className:
                          "inline-flex h-4 min-h-[1rem] items-center gap-1.5 text-xs font-mono text-gray-400 tabular-nums leading-none",
                        children: [
                          c &&
                            e.jsx("button", {
                              type: "button",
                              onClick: () => c({ mode: "full" }),
                              className:
                                "flex h-4 w-4 shrink-0 items-center justify-center p-0 text-inherit hover:text-black transition-colors",
                              title: "乐听整库导入/导出",
                              "aria-label": "乐听整库备份",
                              children: e.jsx(Wl, {
                                className: "h-3.5 w-3.5 shrink-0",
                                strokeWidth: 1.75,
                                "aria-hidden": !0,
                              }),
                            }),
                          e.jsxs("span", {
                            className: "flex items-center leading-none",
                            children: [
                              "01 — ",
                              f.length.toString().padStart(2, "0"),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      e.jsxs(We.div, {
                        whileHover: { y: -4 },
                        onClick: () => {
                          (L(""), F(null), v(!0));
                        },
                        className:
                          "aspect-square bg-gray-50 p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden border-2 border-dashed border-gray-200 hover:border-gray-400 transition-colors",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-start",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-mono text-[10px] text-gray-500",
                                children: "#新建",
                              }),
                              e.jsx(ea, {
                                size: 16,
                                className:
                                  "text-gray-400 group-hover:text-black transition-colors",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            children: e.jsx("h3", {
                              className:
                                "text-2xl font-light leading-none mb-1 text-gray-400 group-hover:text-black transition-colors",
                              children: "Create",
                            }),
                          }),
                        ],
                      }),
                      f.map((U, ce) => {
                        const pe = Aj[ce % Aj.length];
                        return e.jsxs(
                          We.div,
                          {
                            whileHover: { y: -4 },
                            onClick: () => le(U),
                            className: `aspect-square ${pe.bg} p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden`,
                            children: [
                              U.cover &&
                                e.jsx("img", {
                                  src: bl(U.cover),
                                  alt: "",
                                  className:
                                    "absolute inset-0 w-full h-full object-cover",
                                }),
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-start relative z-10",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-mono text-[10px] text-gray-500",
                                    children: pe.tag,
                                  }),
                                  e.jsx("button", {
                                    onClick: (se) => ne(se, U),
                                    className:
                                      "opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500",
                                    children: e.jsx(_n, { size: 16 }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "relative z-10",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-2xl font-light leading-none mb-1 truncate",
                                    children: U.name,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "h-0.5 w-0 group-hover:w-8 bg-black transition-all duration-300",
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "absolute -bottom-4 -right-4 text-9xl font-bold text-black/5 pointer-events-none select-none",
                                children: ce + 1,
                              }),
                            ],
                          },
                          U.id,
                        );
                      }),
                    ],
                  }),
                ],
              }),
            d === "detail" &&
              e.jsxs("section", {
                className: "flex flex-col flex-1 min-h-0",
                children: [
                  e.jsxs("div", {
                    className:
                      "shrink-0 flex items-center justify-between mb-6 border-b border-gray-100 pb-2",
                    children: [
                      e.jsx("h2", {
                        className: "text-lg font-medium leading-tight",
                        children: "曲目",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex h-4 min-h-[1rem] items-center gap-4 text-xs font-mono text-gray-400 tabular-nums leading-none",
                        children: [
                          e.jsx("button", {
                            onClick: () => {
                              (L(m.name), F(m.cover), N(!0));
                            },
                            className:
                              "flex items-center leading-none hover:text-black transition-colors",
                            children: "编辑",
                          }),
                          e.jsx("button", {
                            onClick: (U) => ne(U, m),
                            className:
                              "flex items-center leading-none hover:text-red-500 transition-colors",
                            children: "删除",
                          }),
                          c &&
                            m &&
                            e.jsx("button", {
                              type: "button",
                              onClick: () =>
                                c({
                                  mode: "local_playlist",
                                  playlistId: m.id,
                                  playlistName: m.name,
                                }),
                              className:
                                "flex h-4 w-4 shrink-0 items-center justify-center p-0 text-inherit hover:text-black transition-colors",
                              title: "当前歌单曲目导入/导出",
                              "aria-label": "当前歌单备份",
                              children: e.jsx(Wl, {
                                className: "h-3.5 w-3.5 shrink-0",
                                strokeWidth: 1.75,
                                "aria-hidden": !0,
                              }),
                            }),
                          e.jsxs("span", {
                            className: "flex items-center leading-none",
                            children: [g.length, " 首"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.length === 0
                    ? e.jsx("div", {
                        className:
                          "py-12 flex flex-col items-center justify-center text-gray-400",
                        children: e.jsx("span", {
                          className:
                            "text-xs font-mono uppercase tracking-widest mb-2",
                          children: "歌单为空",
                        }),
                      })
                    : e.jsx("div", {
                        ref: P,
                        className:
                          "flex-1 min-h-0 overflow-y-auto scrollbar-hide -mx-2 px-2",
                        onScroll: X,
                        children: e.jsx("div", {
                          style: { height: g.length * vf },
                          children: e.jsx("div", {
                            style: { paddingTop: O.start * vf },
                            children: g
                              .slice(O.start, O.end)
                              .map((U) =>
                                e.jsxs(
                                  We.div,
                                  {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    transition: { duration: 0.12 },
                                    onClick: () => t(U, g),
                                    className:
                                      "group flex items-center border-b border-gray-50 hover:bg-gray-50 px-2 -mx-2 transition-colors cursor-pointer box-border",
                                    style: { height: vf },
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "w-10 h-10 shrink-0 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors relative overflow-hidden",
                                        children: [
                                          U.cover
                                            ? e.jsx("img", {
                                                src: bl(U.cover),
                                                alt: "",
                                                className:
                                                  "w-full h-full object-cover",
                                              })
                                            : e.jsx(bp, { size: 18 }),
                                          (s == null ? void 0 : s.id) ===
                                            U.id &&
                                            n &&
                                            e.jsx("div", {
                                              className:
                                                "absolute inset-0 bg-black/40 flex items-center justify-center",
                                              children: e.jsxs("div", {
                                                className:
                                                  "flex gap-0.5 items-end h-3",
                                                children: [
                                                  e.jsx(We.div, {
                                                    animate: {
                                                      height: [4, 12, 4],
                                                    },
                                                    transition: {
                                                      repeat: 1 / 0,
                                                      duration: 0.5,
                                                    },
                                                    className: "w-0.5 bg-white",
                                                  }),
                                                  e.jsx(We.div, {
                                                    animate: {
                                                      height: [8, 4, 12],
                                                    },
                                                    transition: {
                                                      repeat: 1 / 0,
                                                      duration: 0.6,
                                                    },
                                                    className: "w-0.5 bg-white",
                                                  }),
                                                  e.jsx(We.div, {
                                                    animate: {
                                                      height: [12, 8, 4],
                                                    },
                                                    transition: {
                                                      repeat: 1 / 0,
                                                      duration: 0.7,
                                                    },
                                                    className: "w-0.5 bg-white",
                                                  }),
                                                ],
                                              }),
                                            }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex-1 ml-4 min-w-0 mr-4 py-1",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: e.jsx("h4", {
                                              className: `text-sm font-medium truncate ${(s == null ? void 0 : s.id) === U.id ? "text-red-500" : ""}`,
                                              children: U.title,
                                            }),
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-[10px] font-mono text-gray-400 mt-0.5 truncate",
                                            children: U.artist,
                                          }),
                                        ],
                                      }),
                                      e.jsx("button", {
                                        onClick: (ce) => je(ce, U.id),
                                        className:
                                          "w-8 h-8 shrink-0 flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100",
                                        children: e.jsx(_n, { size: 14 }),
                                      }),
                                    ],
                                  },
                                  U.id,
                                ),
                              ),
                          }),
                        }),
                      }),
                ],
              }),
          ],
        }),
        e.jsxs(Os, {
          children: [
            (y || b) &&
              e.jsxs(We.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "absolute inset-0 z-[150] bg-white/90 backdrop-blur-xl flex flex-col p-8",
                children: [
                  e.jsx("div", {
                    className: "flex justify-end",
                    children: e.jsx("button", {
                      onClick: () => {
                        (v(!1), N(!1));
                      },
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: e.jsx(Ts, { size: 24 }),
                    }),
                  }),
                  e.jsxs("div", {
                    className:
                      "flex-1 flex flex-col justify-center max-w-sm mx-auto w-full",
                    children: [
                      e.jsx("h3", {
                        className: "text-3xl font-light mb-8",
                        children: b ? "编辑歌单" : "新建歌单",
                      }),
                      e.jsxs("div", {
                        className: "flex justify-center mb-8",
                        children: [
                          e.jsxs("div", {
                            onClick: () => {
                              var U;
                              return (U = D.current) == null
                                ? void 0
                                : U.click();
                            },
                            className:
                              "w-40 h-40 bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden relative group border-2 border-dashed border-gray-200 hover:border-black transition-colors",
                            children: [
                              B
                                ? e.jsx("img", {
                                    src: B,
                                    alt: "",
                                    className: "w-full h-full object-cover",
                                  })
                                : e.jsx(Za, {
                                    className: "text-gray-300",
                                    size: 32,
                                  }),
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition-colors",
                                children: e.jsx("span", {
                                  className:
                                    "opacity-0 group-hover:opacity-100 text-xs font-mono bg-white px-2 py-1",
                                  children: "UPLOAD",
                                }),
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "file",
                            ref: D,
                            className: "hidden",
                            accept: "image/*",
                            onChange: xe,
                          }),
                        ],
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: I,
                        onChange: (U) => L(U.target.value),
                        placeholder: "歌单名称",
                        className:
                          "w-full py-4 bg-transparent border-b-2 border-gray-200 text-2xl font-light placeholder-gray-300 focus:outline-none focus:border-black transition-colors rounded-none text-center",
                        autoFocus: !0,
                      }),
                      e.jsx("button", {
                        onClick: b ? V : q,
                        className:
                          "mt-12 w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors",
                        children: "保存",
                      }),
                    ],
                  }),
                ],
              }),
            A &&
              e.jsx(TO, {
                isOpen: A,
                onClose: () => {
                  (S([]), T([]), k(!1));
                },
                onImport: R,
                onShowTutorial: oe,
                pendingMusicCount: E.length,
                pendingLrcCount: j.length,
                onContinueAdd: H,
                onFinishImport: Y,
              }),
            w &&
              e.jsx(IO, {
                isOpen: w,
                onClose: () => _(!1),
                onConfirm: () => {
                  var U;
                  (_(!1), (U = $.current) == null || U.click());
                },
              }),
          ],
        }),
      ],
    });
  },
  RO = ({ content: t, onClose: s }) =>
    e.jsx("div", {
      className:
        "absolute inset-0 z-[210] bg-black/50 flex items-center justify-center p-4",
      onClick: s,
      children: e.jsxs("div", {
        className:
          "bg-white rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto",
        onClick: (n) => n.stopPropagation(),
        children: [
          e.jsx("h3", {
            className: "text-lg font-bold mb-4",
            children: "MIT 许可证（原文）",
          }),
          e.jsx("pre", {
            className:
              "text-xs text-gray-600 whitespace-pre-wrap font-mono bg-gray-50 p-4 rounded-lg",
            children: t,
          }),
          e.jsx("button", {
            onClick: s,
            className:
              "mt-4 w-full bg-black text-white py-2 rounded-lg font-semibold",
            children: "关闭",
          }),
        ],
      }),
    }),
  PO = ({ isOpen: t, onClose: s }) => {
    const [n, a] = l.useState(null);
    if (!t) return null;
    const i = [
      {
        icon: e.jsx(Z5, { size: 20, className: "text-black" }),
        title: "网易云音乐 API",
        name: "网易云 API（增强版）",
        url: "https://github.com/neteasecloudmusicapienhanced/api-enhanced",
        desc: "提供稳定可靠的网易云音乐接口服务",
        license: `The MIT License (MIT)

Copyright (c) 2013-2022 Binaryify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`,
      },
    ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(We.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "absolute inset-0 z-[200] bg-white/90 backdrop-blur-xl flex flex-col p-8",
          onClick: s,
          children: [
            e.jsx("div", {
              className: "flex justify-end",
              children: e.jsx("button", {
                onClick: s,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: e.jsx(Ts, { size: 24 }),
              }),
            }),
            e.jsxs("div", {
              className:
                "flex-1 flex flex-col justify-center max-w-sm mx-auto w-full",
              children: [
                e.jsxs(We.div, {
                  initial: { y: 20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { delay: 0.1 },
                  className: "mb-12 text-center",
                  children: [
                    e.jsxs("h3", {
                      className: "text-4xl font-light tracking-tighter mb-2",
                      children: [
                        "鸣谢",
                        e.jsx("span", {
                          className: "text-red-500",
                          children: ".",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-xs font-mono text-gray-400 uppercase tracking-widest",
                      children: "特别鸣谢",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-6",
                  children: i.map((o, c) =>
                    e.jsx(
                      We.div,
                      {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        transition: { delay: 0.2 + c * 0.1 },
                        className: "group block",
                        children: e.jsxs("div", {
                          className:
                            "flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-colors",
                              children: o.icon,
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center mb-1",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-mono text-gray-400 uppercase tracking-wider",
                                      children: o.title,
                                    }),
                                    e.jsx("a", {
                                      href: o.url,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      onClick: (d) => d.stopPropagation(),
                                      children: e.jsx(V1, {
                                        size: 12,
                                        className:
                                          "text-gray-300 group-hover:text-black transition-colors",
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("h4", {
                                  className:
                                    "text-lg font-bold text-black mb-1",
                                  children: o.name,
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-gray-500 mb-2",
                                  children: o.desc,
                                }),
                                o.license &&
                                  e.jsxs("button", {
                                    onClick: (d) => {
                                      (d.stopPropagation(), a(o.license));
                                    },
                                    className:
                                      "text-[10px] font-semibold text-gray-400 flex items-center gap-1 hover:text-black transition-colors",
                                    children: [
                                      e.jsx(ro, { size: 12 }),
                                      "查看许可证",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      },
                      c,
                    ),
                  ),
                }),
                e.jsx(We.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.5 },
                  className: "mt-12 text-center",
                  children: e.jsxs("p", {
                    className:
                      "text-[10px] font-mono text-gray-300 flex items-center justify-center gap-2",
                    children: [
                      "MADE WITH ",
                      e.jsx(zn, {
                        size: 10,
                        className: "text-red-500 fill-current",
                      }),
                      " BY JUJOO",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        n && e.jsx(RO, { content: n, onClose: () => a(null) }),
      ],
    });
  },
  OO = ({ isOpen: t, onClose: s }) => {
    const [n, a] = l.useState(0),
      [r, i] = l.useState("vercel"),
      [o, c] = l.useState(!1),
      d = "https://github.com/neteasecloudmusicapienhanced/api-enhanced",
      u = () => {
        (navigator.clipboard.writeText(d), c(!0), setTimeout(() => c(!1), 2e3));
      };
    if (!t) return null;
    const f = [
      {
        title: "准备工作",
        content: e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("p", {
              className: "text-sm text-gray-600 leading-relaxed",
              children: [
                "为了安全地登录网易云音乐并防止 IP 被封锁，你需要部署自己的 API 实例。 本教程基于开源项目",
                " ",
                e.jsx("a", {
                  href: d,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-black font-bold underline",
                  children: "api-enhanced",
                }),
                "。",
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 gap-4",
              children: [
                e.jsxs("div", {
                  className: "p-4 bg-gray-50 rounded-xl border border-gray-100",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs font-bold uppercase tracking-wider text-gray-400 mb-2",
                      children: "需要账号",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold mb-1",
                      children: "GitHub",
                    }),
                    e.jsx("p", {
                      className: "text-xs text-gray-500 mb-3",
                      children: "用于复制代码仓库。",
                    }),
                    e.jsxs("a", {
                      href: "https://github.com",
                      target: "_blank",
                      className: "text-xs font-bold underline",
                      children: ["注册 GitHub ", "->"],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-4 bg-gray-50 rounded-xl border border-gray-100",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs font-bold uppercase tracking-wider text-gray-400 mb-2",
                      children: "需要账号",
                    }),
                    e.jsx("p", {
                      className: "text-sm font-bold mb-1",
                      children: "Vercel（推荐）",
                    }),
                    e.jsx("p", {
                      className: "text-xs text-gray-500 mb-3",
                      children: "用于免费部署 API。",
                    }),
                    e.jsxs("a", {
                      href: "https://vercel.com",
                      target: "_blank",
                      className: "text-xs font-bold underline",
                      children: ["注册 Vercel ", "->"],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      },
      {
        title: "Get Code",
        content: e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className: "bg-black text-white p-6 rounded-2xl",
              children: [
                e.jsx("p", {
                  className: "text-sm font-bold mb-2",
                  children: "Fork 项目",
                }),
                e.jsx("p", {
                  className: "text-xs text-gray-400 mb-6",
                  children: "将原项目 Fork (复制) 到你的 GitHub 账号。",
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "flex-1 bg-white/10 p-3 rounded-lg font-mono text-[10px] truncate text-gray-300",
                      children: d,
                    }),
                    e.jsx("button", {
                      onClick: u,
                      className:
                        "p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors",
                      children: o
                        ? e.jsx(On, { size: 16 })
                        : e.jsx(Ao, { size: 16 }),
                    }),
                  ],
                }),
                e.jsxs("a", {
                  href: d,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "w-full py-3 bg-white text-black rounded-xl text-xs font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2",
                  children: ["打开 GitHub 并 Fork ", e.jsx(V1, { size: 12 })],
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-xs text-gray-400 text-center",
              children:
                '点击上方按钮打开 GitHub，然后点击右上角的 "Fork" 按钮。',
            }),
          ],
        }),
      },
      {
        title: "部署",
        content: e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className: "flex p-1 bg-gray-100 rounded-xl",
              children: [
                e.jsx("button", {
                  onClick: () => i("vercel"),
                  className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${r === "vercel" ? "bg-white shadow-sm text-black" : "text-gray-400 hover:text-gray-600"}`,
                  children: "Vercel (推荐)",
                }),
                e.jsx("button", {
                  onClick: () => i("tencent"),
                  className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${r === "tencent" ? "bg-white shadow-sm text-black" : "text-gray-400 hover:text-gray-600"}`,
                  children: "腾讯云",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-xs text-center text-gray-400",
              children: "请从上方选择一种部署方式 (二选一)",
            }),
            r === "vercel"
              ? e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("div", {
                      className: "space-y-3",
                      children: [
                        "在 Vercel 官网点击 New Project。",
                        "导入你刚刚 Fork 的 api-enhanced 项目。",
                        "在配置页面直接点击 Deploy。",
                        "等待部署完成后，点击 Continue to Dashboard。",
                        "复制分配的域名 (如 xxx.vercel.app)。",
                      ].map((p, m) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-xs font-mono text-black font-bold mt-0.5",
                                children: (m + 1).toString().padStart(2, "0"),
                              }),
                              e.jsx("p", {
                                className: "text-xs text-gray-600",
                                children: p,
                              }),
                            ],
                          },
                          m,
                        ),
                      ),
                    }),
                    e.jsx("p", {
                      className: "text-[10px] text-gray-400 text-center",
                      children:
                        "* 如果在国内无法访问 Vercel 域名，建议绑定国内备案域名。",
                    }),
                  ],
                })
              : e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("div", {
                      className: "space-y-3",
                      children: [
                        "进入腾讯云 Serverless 控制台，点击新建应用。",
                        "选择 Web 应用 -> Express 框架。",
                        "上传方式选择代码仓库，授权 GitHub 并选择 Fork 的项目。",
                        "启动文件填入下方代码。",
                        "点击完成，等待部署。在资源列表的 API 网关中找到 URL。",
                      ].map((p, m) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-start gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-xs font-mono text-black font-bold mt-0.5",
                                children: (m + 1).toString().padStart(2, "0"),
                              }),
                              e.jsx("p", {
                                className: "text-xs text-gray-600",
                                children: p,
                              }),
                            ],
                          },
                          m,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      className: "bg-black text-white p-3 rounded-xl",
                      children: [
                        e.jsx("p", {
                          className: "text-[10px] font-mono text-gray-400 mb-1",
                          children: "启动文件内容:",
                        }),
                        e.jsx("pre", {
                          className:
                            "text-[10px] font-mono overflow-x-auto whitespace-pre",
                          children:
                            "#!/bin/bash export PORT=9000 /var/lang/node16/bin/node app.js",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-[10px] text-red-400 text-center",
                      children: "* 腾讯云 Serverless 可能会产生少量费用。",
                    }),
                  ],
                }),
          ],
        }),
      },
      {
        title: "连接",
        content: e.jsxs("div", {
          className: "space-y-6 text-center py-8",
          children: [
            e.jsx("div", {
              className:
                "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4",
              children: e.jsx(On, { size: 32 }),
            }),
            e.jsx("h4", {
              className: "text-xl font-bold",
              children: "可以连接了",
            }),
            e.jsxs("p", {
              className: "text-sm text-gray-600",
              children: [
                "回到登录界面，将复制的 URL 粘贴到输入框中，点击 ",
                e.jsx("span", {
                  className: "font-bold text-black",
                  children: "下一步",
                }),
                " ",
                "即可开始登录。",
              ],
            }),
            e.jsx("button", {
              onClick: s,
              className:
                "w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors mt-4",
              children: "完成",
            }),
          ],
        }),
      },
    ];
    return e.jsxs(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "absolute inset-0 z-[160] bg-white/90 backdrop-blur-xl flex items-center justify-center p-8",
      onClick: s,
      children: [
        e.jsx("div", {
          className: "flex justify-end absolute top-8 right-8 z-20",
          children: e.jsx("button", {
            onClick: s,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: e.jsx(Ts, { size: 24 }),
          }),
        }),
        e.jsxs(We.div, {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
          className:
            "w-full max-w-md flex flex-col h-[600px] bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100",
          onClick: (p) => p.stopPropagation(),
          children: [
            e.jsxs("div", {
              className: "px-8 pt-8 pb-4",
              children: [
                e.jsxs("p", {
                  className:
                    "text-xs font-mono text-gray-400 uppercase tracking-widest mb-2",
                  children: ["第 ", n + 1, " 步，共 ", f.length, " 步"],
                }),
                e.jsxs("h3", {
                  className: "text-3xl font-light tracking-tighter",
                  children: [
                    f[n].title,
                    e.jsx("span", { className: "text-red-500", children: "." }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "flex-1 px-8 py-4 overflow-y-auto scrollbar-hide relative",
              children: e.jsx(Os, {
                mode: "wait",
                initial: !1,
                children: e.jsx(
                  We.div,
                  {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { duration: 0.2 },
                    layout: !1,
                    children: f[n].content,
                  },
                  n === 2 ? `2-${r}` : String(n),
                ),
              }),
            }),
            n < f.length - 1 &&
              e.jsxs("div", {
                className:
                  "p-8 pt-4 border-t border-gray-50 flex justify-between items-center bg-white",
                children: [
                  e.jsx("button", {
                    onClick: () => a(Math.max(0, n - 1)),
                    disabled: n === 0,
                    className: `p-2 rounded-full transition-colors ${n === 0 ? "text-gray-200 cursor-not-allowed" : "text-black hover:bg-gray-100"}`,
                    children: e.jsx(un, { size: 24 }),
                  }),
                  e.jsx("div", {
                    className: "flex gap-2",
                    children: f.map((p, m) =>
                      e.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full transition-colors ${m === n ? "bg-black" : "bg-gray-200"}`,
                        },
                        m,
                      ),
                    ),
                  }),
                  e.jsx("button", {
                    onClick: () => a(Math.min(f.length - 1, n + 1)),
                    className:
                      "p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-black/20",
                    children: e.jsx(Kn, { size: 24 }),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  BO = ({ isOpen: t, onClose: s, onLoginSuccess: n }) => {
    const { loginByPhone: a, loginByEmail: r, sendCaptcha: i } = Ii(),
      [o, c] = l.useState("input"),
      [d, u] = l.useState(""),
      [f, p] = l.useState(!1);
    l.useEffect(() => {
      (async () => {
        const ye = await be.get("netease_api_url");
        ye && u(ye);
      })();
    }, []);
    const [m, h] = l.useState("phone"),
      [g, x] = l.useState(!1),
      [y, v] = l.useState(""),
      [b, N] = l.useState(""),
      [w, _] = l.useState("loading"),
      [A, k] = l.useState(""),
      C = l.useRef(null),
      M = l.useRef(""),
      [E, S] = l.useState(""),
      [j, T] = l.useState(""),
      [I, L] = l.useState("86"),
      [B, F] = l.useState(""),
      [D, $] = l.useState(!1),
      [P, z] = l.useState(0),
      [O, Z] = l.useState("");
    (l.useEffect(
      () => (
        t &&
          (d && d.trim() !== "" ? (c("login"), m === "qr" && V()) : c("input")),
        () => K()
      ),
      [t],
    ),
      l.useEffect(() => {
        o === "login" && m === "qr" ? V() : K();
      }, [m, o]),
      l.useEffect(() => {
        let xe;
        return (
          P > 0 &&
            (xe = setInterval(() => {
              z((ye) => ye - 1);
            }, 1e3)),
          () => clearInterval(xe)
        );
      }, [P]));
    const K = () => {
        C.current && (clearInterval(C.current), (C.current = null));
      },
      q = () => {
        if (!d.trim()) {
          alert("请填写 API 地址");
          return;
        }
        (be.set("netease_api_url", d.trim()), c("login"), h("phone"));
      },
      V = async () => {
        const xe = d.trim();
        if (xe) {
          (_("loading"), k("正在加载二维码…"), K());
          try {
            const ye = await Pi.loginQrKey(xe);
            if (!ye.data || !ye.data.unikey)
              throw new Error("获取二维码密钥失败");
            const R = ye.data.unikey;
            M.current = R;
            const oe = await Pi.loginQrCreate(xe, R);
            if (!oe.data || !oe.data.qrimg) throw new Error("生成二维码失败");
            (N(oe.data.qrimg),
              _("waiting"),
              k("请使用网易云音乐 App 扫码"),
              ne(R, xe));
          } catch {
            (_("error"), k("无法连接 API"));
          }
        }
      },
      ne = (xe, ye) => {
        C.current = setInterval(async () => {
          try {
            let R = await Pi.loginQrCheck(ye, xe),
              oe = R.code;
            (oe === 502 &&
              ((R = await Pi.loginQrCheck(ye, xe, !0)), (oe = R.code)),
              oe === 800
                ? (_("expired"), k("QR Code Expired"), K())
                : oe === 801
                  ? (_("waiting"), k("请使用网易云音乐 App 扫码"))
                  : oe === 802
                    ? (_("scanned"), k("请在手机上确认登录"))
                    : oe === 803 &&
                      (_("success"),
                      k("Login Successful!"),
                      K(),
                      R.cookie
                        ? je(R.cookie)
                        : (_("error"), k("登录失败：未收到 Cookie"))));
          } catch {}
        }, 3e3);
      },
      le = async (xe) => {
        var R;
        if ((xe.preventDefault(), !E)) return;
        (x(!0), v(""));
        const ye = await a(E, D ? "" : j, I, D ? B : "", d);
        if ((x(!1), ye.success)) {
          const oe = ye.data.profile || {
            userId: ((R = ye.data.account) == null ? void 0 : R.id) || 0,
            nickname: "用户",
          };
          (n(oe, ye.data.cookie, d), setTimeout(s, 500));
        } else v(ye.msg);
      },
      ie = async () => {
        if (!E) {
          v("请输入手机号");
          return;
        }
        v("");
        try {
          const xe = d.trim();
          if (xe) {
            const ye = await Pi.sentCaptcha(xe, E, I);
            ye.code === 200
              ? (z(60), alert("验证码已发送"))
              : v(ye.message || "发送验证码失败");
          } else
            (await i(E, I))
              ? (z(60), alert("验证码已发送"))
              : v("发送验证码失败");
        } catch {
          v("发送验证码失败");
        }
      },
      X = async (xe) => {
        var R;
        if ((xe.preventDefault(), !O || !j)) return;
        (x(!0), v(""));
        const ye = await r(O, j, d);
        if ((x(!1), ye.success)) {
          const oe = ye.data.profile || {
            userId: ((R = ye.data.account) == null ? void 0 : R.id) || 0,
            nickname: "用户",
          };
          (n(oe, ye.data.cookie, d), setTimeout(s, 500));
        } else v(ye.msg);
      },
      je = async (xe) => {
        const ye = d.trim();
        try {
          const R = await Pi.loginStatus(ye, xe);
          (R.data && R.data.profile
            ? n(R.data.profile, xe, ye)
            : R.data && R.data.account
              ? n({ userId: R.data.account.id, nickname: "User" }, xe, ye)
              : n({ userId: 0, nickname: "用户" }, xe, ye),
            setTimeout(s, 1e3));
        } catch {
          (n({ userId: 0, nickname: "用户" }, xe, ye), setTimeout(s, 1e3));
        }
      };
    return t
      ? e.jsxs(We.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "absolute inset-0 z-[150] bg-white/90 backdrop-blur-xl flex items-center justify-center p-8",
          onClick: s,
          children: [
            e.jsx("div", {
              className: "flex justify-end absolute top-8 right-8",
              children: e.jsx("button", {
                onClick: s,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: e.jsx(Ts, { size: 24 }),
              }),
            }),
            e.jsxs(We.div, {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.9, opacity: 0 },
              className: "w-full max-w-sm flex flex-col items-center",
              onClick: (xe) => xe.stopPropagation(),
              children: [
                e.jsxs("div", {
                  className: "mb-8 text-center",
                  children: [
                    e.jsxs("h3", {
                      className: "text-4xl font-light tracking-tighter mb-2",
                      children: [
                        "登录",
                        e.jsx("span", {
                          className: "text-red-500",
                          children: ".",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-xs font-mono text-gray-400 uppercase tracking-widest",
                      children: "Netease Cloud Music",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "w-full",
                  children:
                    o === "input"
                      ? e.jsxs("div", {
                          className: "w-full",
                          children: [
                            e.jsxs("div", {
                              className: "mb-8",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 block",
                                  children: "API 地址",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: d,
                                  onChange: (xe) => u(xe.target.value),
                                  placeholder: "https://your-api.vercel.app",
                                  className:
                                    "w-full py-3 bg-transparent border-b border-gray-200 text-lg font-light focus:outline-none focus:border-black transition-colors rounded-none",
                                  autoFocus: !0,
                                }),
                                e.jsx("p", {
                                  className: "text-[10px] text-gray-400 mt-2",
                                  children: "需要部署自己的 API 实例以防止风控",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: q,
                              className:
                                "w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors mb-4",
                              children: "Next",
                            }),
                            e.jsxs("button", {
                              onClick: () => p(!0),
                              className:
                                "text-xs text-gray-400 hover:text-black flex items-center justify-center gap-1 mx-auto transition-colors",
                              children: [
                                e.jsx(xl, { size: 12 }),
                                e.jsx("span", { children: "如何部署 API?" }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className: "flex flex-col items-center w-full",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex w-full border-b border-gray-100 mb-8",
                              children: [
                                e.jsxs("button", {
                                  onClick: () => h("qr"),
                                  className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${m === "qr" ? "text-black border-b-2 border-black" : "text-gray-300 hover:text-gray-500"}`,
                                  children: [e.jsx(xc, { size: 14 }), " 扫码"],
                                }),
                                e.jsxs("button", {
                                  onClick: () => h("phone"),
                                  className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${m === "phone" ? "text-black border-b-2 border-black" : "text-gray-300 hover:text-gray-500"}`,
                                  children: [e.jsx(Ah, { size: 14 }), " 手机"],
                                }),
                                e.jsxs("button", {
                                  onClick: () => h("email"),
                                  className: `flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${m === "email" ? "text-black border-b-2 border-black" : "text-gray-300 hover:text-gray-500"}`,
                                  children: [e.jsx(Ac, { size: 14 }), " 邮箱"],
                                }),
                              ],
                            }),
                            m === "qr" &&
                              e.jsxs("div", {
                                className: "w-full flex flex-col items-center",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "w-64 h-64 bg-gray-50 flex items-center justify-center overflow-hidden relative mb-8",
                                    children: [
                                      w === "loading" &&
                                        e.jsx(Sn, {
                                          size: 32,
                                          className:
                                            "animate-spin text-gray-300",
                                        }),
                                      w === "expired" &&
                                        e.jsxs("div", {
                                          className:
                                            "absolute inset-0 bg-white/90 flex flex-col items-center justify-center",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-xs font-mono text-gray-400 mb-4",
                                              children: "QR CODE EXPIRED",
                                            }),
                                            e.jsx("button", {
                                              onClick: V,
                                              className:
                                                "p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors",
                                              children: e.jsx(Or, { size: 20 }),
                                            }),
                                          ],
                                        }),
                                      w === "error" &&
                                        e.jsxs("div", {
                                          className:
                                            "absolute inset-0 bg-white/90 flex flex-col items-center justify-center px-8 text-center",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-red-500 mb-4 font-mono",
                                              children: A,
                                            }),
                                            e.jsx("button", {
                                              onClick: V,
                                              className:
                                                "text-xs font-bold underline hover:text-gray-600",
                                              children: "重试",
                                            }),
                                          ],
                                        }),
                                      w === "success" &&
                                        e.jsxs("div", {
                                          className:
                                            "absolute inset-0 bg-white/90 flex flex-col items-center justify-center text-green-500",
                                          children: [
                                            e.jsx(On, {
                                              size: 48,
                                              className: "mb-4",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs font-bold tracking-widest uppercase",
                                              children: "成功",
                                            }),
                                          ],
                                        }),
                                      b &&
                                        e.jsx("img", {
                                          src: b,
                                          alt: "QR Code",
                                          className: `w-full h-full object-contain p-4 transition-opacity duration-300 ${w === "expired" ? "opacity-20" : "opacity-100"}`,
                                        }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className: `text-xs font-mono ${w === "success" ? "text-green-500" : "text-gray-400"}`,
                                    children: A,
                                  }),
                                ],
                              }),
                            m === "phone" &&
                              e.jsxs("form", {
                                onSubmit: le,
                                className: "w-full space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      e.jsx("input", {
                                        type: "text",
                                        value: I,
                                        onChange: (xe) => L(xe.target.value),
                                        placeholder: "+86",
                                        className:
                                          "w-16 py-3 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-black text-center",
                                      }),
                                      e.jsx("input", {
                                        type: "text",
                                        value: E,
                                        onChange: (xe) => S(xe.target.value),
                                        placeholder: "手机号",
                                        className:
                                          "flex-1 py-3 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-black",
                                      }),
                                    ],
                                  }),
                                  D
                                    ? e.jsxs("div", {
                                        className: "flex gap-2",
                                        children: [
                                          e.jsx("input", {
                                            type: "text",
                                            value: B,
                                            onChange: (xe) =>
                                              F(xe.target.value),
                                            placeholder: "验证码",
                                            className:
                                              "flex-1 py-3 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-black",
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: ie,
                                            disabled: P > 0,
                                            className:
                                              "px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-gray-100 hover:bg-gray-200 disabled:opacity-50 transition-colors rounded",
                                            children: P > 0 ? `${P}s` : "发送",
                                          }),
                                        ],
                                      })
                                    : e.jsx("input", {
                                        type: "password",
                                        value: j,
                                        onChange: (xe) => T(xe.target.value),
                                        placeholder: "密码",
                                        className:
                                          "w-full py-3 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-black",
                                      }),
                                  e.jsx("div", {
                                    className:
                                      "flex justify-between items-center pt-2",
                                    children: e.jsx("button", {
                                      type: "button",
                                      onClick: () => $(!D),
                                      className:
                                        "text-[10px] text-gray-400 hover:text-black transition-colors uppercase tracking-widest",
                                      children: D ? "使用密码" : "使用验证码",
                                    }),
                                  }),
                                  e.jsxs("button", {
                                    type: "submit",
                                    disabled: g,
                                    className:
                                      "w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2",
                                    children: [
                                      g &&
                                        e.jsx(Sn, {
                                          size: 14,
                                          className: "animate-spin",
                                        }),
                                      "登录",
                                    ],
                                  }),
                                ],
                              }),
                            m === "email" &&
                              e.jsxs("form", {
                                onSubmit: X,
                                className: "w-full space-y-4",
                                children: [
                                  e.jsx("input", {
                                    type: "email",
                                    value: O,
                                    onChange: (xe) => Z(xe.target.value),
                                    placeholder: "邮箱 (@163.com)",
                                    className:
                                      "w-full py-3 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-black",
                                  }),
                                  e.jsx("input", {
                                    type: "password",
                                    value: j,
                                    onChange: (xe) => T(xe.target.value),
                                    placeholder: "密码",
                                    className:
                                      "w-full py-3 bg-transparent border-b border-gray-200 text-sm font-light focus:outline-none focus:border-black",
                                  }),
                                  e.jsxs("button", {
                                    type: "submit",
                                    disabled: g,
                                    className:
                                      "w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-8",
                                    children: [
                                      g &&
                                        e.jsx(Sn, {
                                          size: 14,
                                          className: "animate-spin",
                                        }),
                                      "登录",
                                    ],
                                  }),
                                ],
                              }),
                            y &&
                              e.jsx("p", {
                                className:
                                  "text-xs text-red-500 font-mono mt-4 text-center",
                                children: y,
                              }),
                            e.jsxs("div", {
                              className:
                                "w-full flex justify-between items-end border-t border-gray-100 pt-4 mt-8",
                              children: [
                                e.jsxs("div", {
                                  className: "text-left overflow-hidden mr-4",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] font-mono text-gray-300 mb-1 uppercase tracking-widest",
                                      children: "API 地址",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-light truncate max-w-[200px]",
                                      children: d,
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  onClick: () => {
                                    (K(), c("input"));
                                  },
                                  className:
                                    "text-[10px] font-bold text-black hover:text-gray-600 transition-colors uppercase tracking-widest",
                                  children: "更换",
                                }),
                              ],
                            }),
                          ],
                        }),
                }),
              ],
            }),
            e.jsx(Os, {
              children:
                f &&
                e.jsx(
                  OO,
                  { isOpen: f, onClose: () => p(!1) },
                  "netease-deploy-tutorial",
                ),
            }),
          ],
        })
      : null;
  },
  Cj = co("leting"),
  Mj = [
    { bg: "bg-stone-100", tag: "#VIBE" },
    { bg: "bg-zinc-100", tag: "#CHILL" },
    { bg: "bg-orange-50", tag: "#FRESH" },
    { bg: "bg-blue-50", tag: "#DEEP" },
    { bg: "bg-red-50", tag: "#HOT" },
    { bg: "bg-green-50", tag: "#PURE" },
  ],
  UO = ({
    onPlaySong: t,
    activeSong: s,
    isPlaying: n,
    onSwitchToLocal: a,
    onOpenLetingData: r,
  }) => {
    const {
        fetchUserPlaylists: i,
        fetchPlaylistDetail: o,
        fetchRecommendSongs: c,
        fetchSongDetail: d,
        search: u,
        loginSuccess: f,
        apiEndpoint: p,
        updatePlaylistPlayCount: m,
        isBuffering: h,
        user: g,
        cookie: x,
        logout: y,
      } = Ii(),
      [v, b] = l.useState("home"),
      [N, w] = l.useState([]),
      [_, A] = l.useState([]),
      [k, C] = l.useState(null),
      [M, E] = l.useState([]),
      [S, j] = l.useState(!1),
      [T, I] = l.useState(!1),
      [L, B] = l.useState(!1),
      [F, D] = l.useState(!1),
      [$, P] = l.useState(""),
      [z, O] = l.useState(""),
      [Z, K] = l.useState(""),
      [q, V] = l.useState([]),
      [ne, le] = l.useState("play"),
      [ie, X] = l.useState(!1),
      [je, xe] = l.useState(""),
      ye = new Date(),
      R = ye.getDate(),
      oe = ye.toLocaleDateString("zh-CN", { weekday: "short" });
    (ye.toLocaleDateString("zh-CN", { month: "short" }),
      l.useEffect(() => {
        g && p && (ee(), H(), Y());
      }, [g, p]),
      l.useEffect(() => {
        if (N.length > 0 && !z && g) {
          const G = N.find((we) => we.creatorId === g.userId);
          G && O(G.platformId);
        }
      }, [N, g, z]));
    const ee = async () => {
        if (g)
          try {
            const G = await i(g.userId);
            G &&
              w(
                G.map((we) => ({
                  id: `ne_${we.id}`,
                  platformId: we.id,
                  name: we.name,
                  cover: we.coverImgUrl,
                  trackCount: we.trackCount,
                  creator: we.creator.nickname,
                  creatorId: we.creator.userId,
                  source: "netease_user",
                })),
              );
          } catch {}
      },
      H = async () => {
        if (!(!p || !g || !x))
          try {
            const we = await (
              await fetch(
                `${p}/user/detail?uid=${g.userId}&cookie=${encodeURIComponent(x)}`,
              )
            ).json();
            if (we) {
              const Q = {
                ...g,
                level: we.level,
                listenSongs: we.listenSongs,
                createTime: we.createTime,
                ...(we.profile
                  ? {
                      followeds: we.profile.followeds,
                      follows: we.profile.follows,
                      eventCount: we.profile.eventCount,
                      playlistCount: we.profile.playlistCount,
                      playlistBeSubscribedCount:
                        we.profile.playlistBeSubscribedCount,
                    }
                  : {}),
              };
              f(Q, null, null);
            }
          } catch {}
      },
      Y = async () => {
        if (!(!p || !g || !x))
          try {
            const we = await (
              await fetch(
                `${p}/likelist?uid=${g.userId}&cookie=${encodeURIComponent(x)}`,
              )
            ).json();
            we.ids && A(we.ids);
          } catch {}
      },
      U = (G, we, Q) => {
        (f(G, we, Q), j(!1));
      },
      ce = () => {
        confirm("确定退出网易云登录吗？") && (w([]), y());
      },
      pe = async () => {
        if (g) {
          X(!0);
          try {
            const G = await c();
            if (G && G.length > 0) {
              const we = G.map((Q) => ({
                id: `ne_${Q.id}`,
                platformId: Q.id,
                platform: "netease",
                title: Q.name,
                artist: Q.ar.map((ve) => ve.name).join(" / "),
                cover: Q.al.picUrl,
                album: Q.al.name,
                duration: Q.dt / 1e3,
                source: "netease_user",
              }));
              (E(we),
                C({
                  id: "daily_recommend",
                  name: "每日推荐",
                  cover: we[0].cover,
                  source: "netease_user",
                }),
                b("detail"),
                t(we[0], we));
            } else alert("暂无推荐歌曲，请稍后再试。");
          } catch {
            alert("获取每日推荐失败");
          } finally {
            X(!1);
          }
        }
      },
      se = async () => {
        if (!(!g || _.length === 0)) {
          X(!0);
          try {
            const G = _.slice(0, 100).join(","),
              we = await d(G);
            if (we && we.length > 0) {
              const Q = we.map((ve) => ({
                id: `ne_${ve.id}`,
                platformId: ve.id,
                platform: "netease",
                title: ve.name,
                artist: ve.ar.map((Ve) => Ve.name).join(" / "),
                cover: ve.al.picUrl,
                album: ve.al.name,
                duration: ve.dt / 1e3,
                source: "netease_user",
              }));
              (E(Q),
                C({
                  id: "liked_songs",
                  name: "我喜欢的音乐",
                  cover: Q[0].cover,
                  source: "netease_user",
                }),
                b("detail"),
                t(Q[0], Q));
            }
          } catch {
            alert("Failed to fetch liked songs");
          } finally {
            X(!1);
          }
        }
      },
      Te = async (G) => {
        if ((G.preventDefault(), !!$.trim())) {
          if (p && x)
            try {
              (await fetch(
                `${p}/playlist/create?name=${encodeURIComponent($)}&cookie=${encodeURIComponent(x)}`,
              ),
                await ee());
            } catch {
              alert("在网易云创建歌单失败");
            }
          (B(!1), P(""));
        }
      },
      ke = async (G, we) => {
        if (
          (G == null || G.stopPropagation(),
          !!confirm(`Delete playlist "${we.name}"?`) && !(!p || !x))
        )
          try {
            (we.creatorId === g.userId
              ? await fetch(
                  `${p}/playlist/delete?id=${we.platformId}&cookie=${encodeURIComponent(x)}`,
                )
              : await fetch(
                  `${p}/playlist/subscribe?t=2&id=${we.platformId}&cookie=${encodeURIComponent(x)}`,
                ),
              await ee(),
              (k == null ? void 0 : k.id) === we.id && (b("home"), C(null)));
          } catch {
            alert("操作失败");
          }
      },
      W = async (G) => {
        (C(G), X(!0), b("detail"));
        try {
          const we = await Cj.getNeteaseCache(`playlist_${G.platformId}`);
          we && (E(we), X(!1));
        } catch {}
        try {
          m(G.platformId);
          const we = await o(G.platformId);
          if (we) {
            const Q = we.map((ve) => ({
              id: `ne_${ve.id}`,
              platformId: ve.id,
              platform: "netease",
              title: ve.name,
              artist: ve.ar.map((Ve) => Ve.name).join(" / "),
              cover: ve.al.picUrl,
              album: ve.al.name,
              duration: ve.dt / 1e3,
              source: "netease_user",
            }));
            (E(Q), await Cj.setNeteaseCache(`playlist_${G.platformId}`, Q));
          }
        } catch {
        } finally {
          X(!1);
        }
      },
      ue = (G) => {
        let we = "未知";
        (Array.isArray(G.artist)
          ? typeof G.artist[0] == "string"
            ? (we = G.artist.join(" / "))
            : G.artist[0] &&
              G.artist[0].name &&
              (we = G.artist.map((ve) => ve.name).join(" / "))
          : typeof G.artist == "string" && (we = G.artist),
          !G.artist &&
            (G.ar || G.artists) &&
            (we = G.ar
              ? G.ar.map((ve) => ve.name).join(" / ")
              : G.artists
                ? G.artists.map((ve) => ve.name).join(" / ")
                : "未知"));
        const Q =
          typeof G.album == "string"
            ? G.album
            : G.al
              ? G.al.name
              : G.album
                ? G.album.name
                : "";
        return {
          id: G.id,
          name: G.name,
          artist: we,
          album: Q,
          pic_id: G.pic_id || (G.al ? G.al.picId : null),
          cover: G.cover || (G.al ? G.al.picUrl : null),
          duration: G.dt != null ? G.dt / 1e3 : 0,
          source: "netease",
        };
      },
      re = async (G) => {
        if ((G.preventDefault(), !!Z.trim())) {
          if (!p) {
            xe("请先配置 API 地址");
            return;
          }
          (X(!0), xe(""), V([]));
          try {
            const we = await u(Z.trim());
            we && we.length > 0 ? V(we.map(ue)) : xe("未找到结果");
          } catch {
            xe("搜索失败");
          } finally {
            X(!1);
          }
        }
      },
      he = (G) => ({
        id: `ne_${G.id}`,
        platformId: G.id,
        platform: "netease",
        title: G.name,
        artist: G.artist,
        cover: G.cover,
        album: G.album,
        duration: G.duration ?? 0,
        source: "netease_user",
      }),
      ge = (G) => {
        if (!q.length) return;
        const we = q.map(he),
          Q = we.findIndex((ve) => ve.platformId === G.id);
        Q < 0 || (t(we[Q], we), K(""), V([]), I(!1));
      },
      J = async (G) => {
        if ((X(!0), xe(""), !g)) {
          (xe("加入歌单请先登录网易云"), X(!1));
          return;
        }
        if (p && g && G.source === "netease")
          try {
            if (z) {
              if (
                (await fetch(
                  `${p}/playlist/tracks?op=add&pid=${z}&tracks=${G.id}&cookie=${encodeURIComponent(x)}&timestamp=${Date.now()}`,
                ),
                (k == null ? void 0 : k.platformId) === z)
              ) {
                const we = await o(z);
                if (we) {
                  const Q = we.map((ve) => ({
                    id: `ne_${ve.id}`,
                    platformId: ve.id,
                    platform: "netease",
                    title: ve.name,
                    artist: ve.ar.map((Ve) => Ve.name).join(" / "),
                    cover: ve.al.picUrl,
                    album: ve.al.name,
                    duration: ve.dt / 1e3,
                    source: "netease_user",
                  }));
                  E(Q);
                }
              }
              (K(""), V([]), I(!1));
            } else xe("未选择目标歌单");
          } catch {
            xe("添加歌曲失败");
          } finally {
            X(!1);
          }
        else X(!1);
      };
    return e.jsxs("div", {
      className: "w-full h-full flex flex-col",
      children: [
        e.jsxs("div", {
          className:
            "pt-16 px-8 pb-6 flex items-start justify-between bg-white z-20",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className:
                    "text-5xl font-light tracking-tighter cursor-pointer hover:opacity-80 transition-opacity",
                  onClick: v === "detail" ? () => b("home") : () => D(!0),
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: (G) =>
                    G.key === "Enter" && (v === "detail" ? b("home") : D(!0)),
                  children: "Netease",
                }),
                e.jsx("p", {
                  className:
                    "text-xs font-mono text-gray-400 mt-2 uppercase tracking-widest",
                  children:
                    v === "detail"
                      ? k == null
                        ? void 0
                        : k.name
                      : "Cloud Music",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex gap-2 items-center flex-wrap justify-end",
              children: [
                v === "detail"
                  ? e.jsx("button", {
                      onClick: () => b("home"),
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      "aria-label": "返回上一级",
                      children: e.jsx(Xr, { size: 20 }),
                    })
                  : e.jsx("button", {
                      onClick: a,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      "aria-label": "切换到本地",
                      children: e.jsx(Xr, { size: 20 }),
                    }),
                r &&
                  e.jsx("button", {
                    type: "button",
                    onClick: () => r(),
                    className:
                      "inline-flex shrink-0 items-center justify-center p-0 m-0 leading-none text-gray-400 hover:text-black transition-colors",
                    title: "乐听整库导入/导出（非单首）",
                    "aria-label": "乐听整库备份",
                    children: e.jsx(Wl, {
                      size: 18,
                      strokeWidth: 1.75,
                      className: "block",
                      "aria-hidden": !0,
                    }),
                  }),
                p &&
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      (K(""), V([]), xe(""), le("play"), I(!0));
                    },
                    className:
                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                    title: "搜索全站单曲",
                    "aria-label": "搜索全站单曲",
                    children: e.jsx(pr, { size: 20 }),
                  }),
                g &&
                  e.jsx("button", {
                    onClick: ce,
                    className:
                      "p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full transition-colors",
                    children: e.jsx(SE, { size: 20 }),
                  }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 overflow-y-auto px-8 pb-32 scrollbar-hide relative",
          children: [
            e.jsx(Os, {
              children:
                ie &&
                v === "home" &&
                e.jsx(We.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className:
                    "absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-[2px]",
                  children: e.jsx("div", {
                    className: "bg-white p-4 rounded-full shadow-xl",
                    children: e.jsx(Sn, {
                      size: 24,
                      className: "animate-spin text-black",
                    }),
                  }),
                }),
            }),
            v === "home" &&
              e.jsx("section", {
                children: g
                  ? p
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("div", {
                            className: "flex flex-col items-center mb-12 pt-8",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "relative w-32 h-32 mb-6 group cursor-default",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 rounded-full border border-stone-100 scale-110 group-hover:scale-125 transition-transform duration-700",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "absolute inset-0 rounded-full border border-stone-50 scale-125 opacity-50 group-hover:scale-150 transition-transform duration-1000",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-stone-200/50 relative z-10",
                                    children: e.jsx("img", {
                                      src: bl(g.avatarUrl),
                                      alt: "",
                                      className:
                                        "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                    }),
                                  }),
                                  g.level &&
                                    e.jsxs("div", {
                                      className:
                                        "absolute -right-1 bottom-2 z-20 bg-stone-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border-[3px] border-white shadow-lg",
                                      children: ["Lv.", g.level],
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "text-center mb-8",
                                children: [
                                  e.jsx("h2", {
                                    className:
                                      "text-3xl font-light tracking-tighter text-stone-800 mb-2",
                                    children: g.nickname,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] font-mono text-stone-300 tracking-[0.4em] uppercase",
                                    children: "网易云音乐",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-center gap-8 mb-8 w-full px-4",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center group cursor-default",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-xl font-light text-gray-900 group-hover:scale-110 transition-transform",
                                        children: N.length,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[9px] text-stone-400 uppercase tracking-widest mt-1 font-medium",
                                        children: "歌单",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "w-px h-8 bg-stone-100",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center group cursor-default",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-xl font-light text-gray-900 group-hover:scale-110 transition-transform",
                                        children: g.listenSongs || 0,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[9px] text-stone-400 uppercase tracking-widest mt-1 font-medium",
                                        children: "听歌",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "w-px h-8 bg-stone-100",
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "flex flex-col items-center group cursor-default",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-xl font-light text-gray-900 group-hover:scale-110 transition-transform",
                                        children: g.followeds || 0,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[9px] text-stone-400 uppercase tracking-widest mt-1 font-medium",
                                        children: "粉丝",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "border-t border-stone-100 mt-4 mb-6",
                            children: e.jsx("div", {
                              className: "flex justify-center",
                              children: e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 pt-3 border-t border-black -mt-px px-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-bold tracking-widest uppercase text-black",
                                    children: "歌单",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[10px] font-medium text-stone-400 ml-1",
                                    children: N.length,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs(We.div, {
                                whileHover: { y: -4 },
                                onClick: pe,
                                className:
                                  "aspect-square bg-white border border-stone-100 p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-md transition-all",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-start",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex flex-col",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "font-mono text-[10px] text-stone-400 uppercase tracking-widest",
                                            children: "每日",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "font-mono text-[10px] text-stone-400 uppercase tracking-widest",
                                            children: "推荐",
                                          }),
                                        ],
                                      }),
                                      ie
                                        ? e.jsx(Sn, {
                                            size: 16,
                                            className:
                                              "animate-spin text-stone-300",
                                          })
                                        : e.jsx(Iu, {
                                            size: 16,
                                            className:
                                              "text-stone-300 group-hover:text-black transition-colors",
                                          }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "relative flex flex-col items-center justify-center flex-1",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-6xl font-light tracking-tighter text-stone-800 group-hover:scale-110 transition-transform duration-500",
                                        children: R,
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-8 h-0.5 bg-stone-100 my-2 group-hover:bg-black transition-colors",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] font-bold text-stone-300 uppercase tracking-[0.3em] group-hover:text-stone-500 transition-colors",
                                        children: oe,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs(We.div, {
                                whileHover: { y: -4 },
                                onClick: se,
                                className:
                                  "aspect-square bg-gradient-to-br from-red-500 to-red-600 p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden text-white shadow-lg shadow-red-500/20",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-start relative z-10",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "font-mono text-[10px] opacity-80",
                                        children: "歌单",
                                      }),
                                      e.jsx(zn, {
                                        size: 16,
                                        fill: "currentColor",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "relative z-10",
                                    children: [
                                      e.jsx("h3", {
                                        className:
                                          "text-2xl font-bold leading-none mb-1",
                                        children: "Liked Songs",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "text-[10px] font-mono opacity-80",
                                        children: [_.length, " tracks"],
                                      }),
                                    ],
                                  }),
                                  e.jsx(zn, {
                                    size: 120,
                                    className:
                                      "absolute -bottom-4 -right-4 text-white/10 pointer-events-none",
                                    fill: "currentColor",
                                  }),
                                ],
                              }),
                              e.jsxs(We.div, {
                                whileHover: { y: -4 },
                                onClick: () => {
                                  (P(""), O(""), B(!0));
                                },
                                className:
                                  "aspect-square bg-red-50 p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden border-2 border-dashed border-red-200 hover:border-red-400 transition-colors",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex justify-between items-start",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "font-mono text-[10px] text-red-500",
                                        children: "#网易云",
                                      }),
                                      e.jsx(ea, {
                                        size: 16,
                                        className:
                                          "text-red-400 group-hover:text-red-600 transition-colors",
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    children: e.jsx("h3", {
                                      className:
                                        "text-2xl font-light leading-none mb-1 text-red-400 group-hover:text-red-600 transition-colors",
                                      children: "Create",
                                    }),
                                  }),
                                ],
                              }),
                              N.map((G, we) => {
                                const Q = Mj[(we + 3) % Mj.length];
                                return e.jsxs(
                                  We.div,
                                  {
                                    whileHover: { y: -4 },
                                    onClick: () => W(G),
                                    className: `aspect-square ${Q.bg} p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden`,
                                    children: [
                                      G.cover &&
                                        e.jsx("img", {
                                          src: bl(G.cover),
                                          alt: "",
                                          className:
                                            "absolute inset-0 w-full h-full object-cover",
                                        }),
                                      e.jsxs("div", {
                                        className:
                                          "flex justify-between items-start relative z-10",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "font-mono text-[10px] text-white/80 bg-black/20 backdrop-blur-sm px-1.5 py-0.5 rounded",
                                            children: "网易云",
                                          }),
                                          e.jsx("button", {
                                            onClick: (ve) => ke(ve, G),
                                            className:
                                              "opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 bg-white/80 rounded-full p-1",
                                            children: e.jsx(_n, { size: 14 }),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "relative z-10",
                                        children: [
                                          e.jsx("h3", {
                                            className:
                                              "text-xl font-light leading-tight mb-1 truncate text-white drop-shadow-md",
                                            children: G.name,
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-[10px] font-mono text-white/80 drop-shadow-md",
                                            children: [G.trackCount, " tracks"],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  G.id,
                                );
                              }),
                            ],
                          }),
                        ],
                      })
                    : e.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center py-20 text-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6",
                            children: e.jsx(vr, {
                              size: 32,
                              className: "text-gray-400",
                            }),
                          }),
                          e.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: "需要配置 API",
                          }),
                          e.jsx("p", {
                            className: "text-gray-400 text-sm mb-8 max-w-xs",
                            children: "请先填写可用的 API 地址后再继续使用。",
                          }),
                          e.jsx("button", {
                            onClick: () => j(!0),
                            className:
                              "px-8 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors",
                            children: "去配置",
                          }),
                        ],
                      })
                  : e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center h-full min-h-[60vh] relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center pointer-events-none",
                          children: e.jsx("div", {
                            className:
                              "w-96 h-96 bg-red-500/5 rounded-full blur-[100px] animate-pulse",
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "relative z-10 flex flex-col items-center text-center",
                          children: [
                            e.jsxs(We.div, {
                              initial: { scale: 0.8, opacity: 0 },
                              animate: { scale: 1, opacity: 1 },
                              transition: { duration: 0.8, ease: "easeOut" },
                              className: "mb-10 relative",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-red-500/20 blur-2xl rounded-full",
                                }),
                                e.jsx(vr, {
                                  size: 64,
                                  className:
                                    "text-red-500 relative z-10 drop-shadow-sm",
                                  strokeWidth: 1,
                                }),
                              ],
                            }),
                            e.jsx(We.h3, {
                              initial: { y: 20, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { delay: 0.2 },
                              className:
                                "text-5xl font-thin tracking-tighter mb-4 text-black",
                              children: "网易云音乐",
                            }),
                            e.jsxs(We.p, {
                              initial: { y: 20, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { delay: 0.3 },
                              className:
                                "text-stone-400 text-xs font-mono uppercase tracking-widest mb-12 max-w-xs leading-relaxed",
                              children: [
                                "登录后即可同步",
                                e.jsx("br", {}),
                                "你的歌单与收藏",
                              ],
                            }),
                            e.jsx(We.button, {
                              initial: { y: 20, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { delay: 0.4 },
                              onClick: () => j(!0),
                              className:
                                "group relative px-10 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0",
                              children: "登录",
                            }),
                          ],
                        }),
                      ],
                    }),
              }),
            v === "detail" &&
              e.jsxs("section", {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between mb-6 border-b border-gray-100 pb-2",
                    children: [
                      e.jsx("h2", {
                        className: "text-lg font-medium leading-tight",
                        children: "曲目",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex h-4 min-h-[1rem] items-center gap-4 text-xs font-mono text-gray-400 tabular-nums leading-none",
                        children: [
                          e.jsx("button", {
                            onClick: (G) => ke(G, k),
                            className:
                              "flex items-center leading-none hover:text-red-500 transition-colors",
                            children: "删除",
                          }),
                          r &&
                            e.jsx("button", {
                              type: "button",
                              onClick: () => r(),
                              className:
                                "flex h-4 w-4 shrink-0 items-center justify-center p-0 text-inherit hover:text-black transition-colors",
                              title: "乐听整库导入/导出（非单首）",
                              "aria-label": "乐听整库备份",
                              children: e.jsx(Wl, {
                                className: "h-3.5 w-3.5 shrink-0",
                                strokeWidth: 1.75,
                                "aria-hidden": !0,
                              }),
                            }),
                          e.jsxs("span", {
                            className: "flex items-center leading-none",
                            children: [ie ? "…" : M.length, " 首"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  ie
                    ? e.jsx("div", {
                        className: "space-y-0",
                        children: [...Array(8)].map((G, we) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center py-4 border-b border-gray-50 px-2 -mx-2 animate-pulse",
                              children: [
                                e.jsx("div", {
                                  className: "w-10 h-10 bg-gray-100 mr-4",
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 space-y-2",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "h-3 bg-gray-100 rounded w-1/3",
                                    }),
                                    e.jsx("div", {
                                      className: "h-2 bg-gray-50 rounded w-1/4",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            we,
                          ),
                        ),
                      })
                    : M.length === 0
                      ? e.jsx("div", {
                          className:
                            "py-12 flex flex-col items-center justify-center text-gray-400",
                          children: e.jsx("span", {
                            className:
                              "text-xs font-mono uppercase tracking-widest mb-2",
                            children: "歌单为空",
                          }),
                        })
                      : e.jsx("div", {
                          className: "space-y-0",
                          children: M.map((G, we) =>
                            e.jsxs(
                              We.div,
                              {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { delay: we * 0.03 },
                                onClick: () => t(G, M),
                                className:
                                  "group flex items-center py-4 border-b border-gray-50 hover:bg-gray-50 px-2 -mx-2 transition-colors cursor-pointer",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors relative overflow-hidden",
                                    children: [
                                      G.cover
                                        ? e.jsx("img", {
                                            src: bl(G.cover),
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover",
                                          })
                                        : e.jsx(bp, { size: 18 }),
                                      (s == null ? void 0 : s.id) === G.id &&
                                        (n || h) &&
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 bg-black/40 flex items-center justify-center",
                                          children: h
                                            ? e.jsx(Sn, {
                                                size: 16,
                                                className:
                                                  "animate-spin text-white",
                                              })
                                            : e.jsxs("div", {
                                                className:
                                                  "flex gap-0.5 items-end h-3",
                                                children: [
                                                  e.jsx(We.div, {
                                                    animate: {
                                                      height: [4, 12, 4],
                                                    },
                                                    transition: {
                                                      repeat: 1 / 0,
                                                      duration: 0.5,
                                                    },
                                                    className: "w-0.5 bg-white",
                                                  }),
                                                  e.jsx(We.div, {
                                                    animate: {
                                                      height: [8, 4, 12],
                                                    },
                                                    transition: {
                                                      repeat: 1 / 0,
                                                      duration: 0.6,
                                                    },
                                                    className: "w-0.5 bg-white",
                                                  }),
                                                  e.jsx(We.div, {
                                                    animate: {
                                                      height: [12, 8, 4],
                                                    },
                                                    transition: {
                                                      repeat: 1 / 0,
                                                      duration: 0.7,
                                                    },
                                                    className: "w-0.5 bg-white",
                                                  }),
                                                ],
                                              }),
                                        }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex-1 ml-4 min-w-0 mr-4",
                                    children: [
                                      e.jsx("div", {
                                        className: "flex items-center gap-2",
                                        children: e.jsx("h4", {
                                          className: `text-sm font-medium truncate ${(s == null ? void 0 : s.id) === G.id ? "text-red-500" : ""}`,
                                          children: G.title,
                                        }),
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] font-mono text-gray-400 mt-0.5",
                                        children: G.artist,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              G.id,
                            ),
                          ),
                        }),
                ],
              }),
          ],
        }),
        F && e.jsx(PO, { isOpen: F, onClose: () => D(!1) }),
        e.jsxs(Os, {
          children: [
            S &&
              e.jsx(BO, {
                isOpen: S,
                onClose: () => j(!1),
                onLoginSuccess: U,
                onSwitchToLocal: a,
              }),
            L &&
              e.jsxs(We.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "absolute inset-0 z-[150] bg-white/90 backdrop-blur-xl flex flex-col p-8",
                children: [
                  e.jsx("div", {
                    className: "flex justify-end",
                    children: e.jsx("button", {
                      onClick: () => B(!1),
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: e.jsx(Ts, { size: 24 }),
                    }),
                  }),
                  e.jsxs("div", {
                    className:
                      "flex-1 flex flex-col justify-center max-w-sm mx-auto w-full",
                    children: [
                      e.jsx("h3", {
                        className: "text-3xl font-light mb-8",
                        children: "New Netease Playlist",
                      }),
                      e.jsx("input", {
                        type: "text",
                        value: $,
                        onChange: (G) => P(G.target.value),
                        placeholder: "歌单名称",
                        className:
                          "w-full py-4 bg-transparent border-b-2 border-gray-200 text-2xl font-light placeholder-gray-300 focus:outline-none focus:border-black transition-colors rounded-none text-center",
                        autoFocus: !0,
                      }),
                      e.jsx("button", {
                        onClick: Te,
                        className:
                          "mt-12 w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors",
                        children: "创建",
                      }),
                    ],
                  }),
                ],
              }),
            T &&
              e.jsxs(We.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "absolute inset-0 z-[150] bg-white/90 backdrop-blur-xl flex flex-col p-8",
                children: [
                  e.jsx("div", {
                    className: "flex justify-end",
                    children: e.jsx("button", {
                      onClick: () => I(!1),
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: e.jsx(Ts, { size: 24 }),
                    }),
                  }),
                  e.jsxs("div", {
                    className:
                      "flex-1 flex flex-col justify-center max-w-sm mx-auto w-full",
                    children: [
                      e.jsx("h3", {
                        className: "text-3xl font-light mb-4",
                        children: "搜索网易云",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-stone-400 font-mono mb-6",
                        children: "全站单曲（cloudsearch），与歌单内过滤无关",
                      }),
                      e.jsxs("div", {
                        className: "flex p-1 bg-gray-100 rounded-xl mb-6",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            onClick: () => {
                              (le("play"), xe(""));
                            },
                            className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${ne === "play" ? "bg-white shadow-sm text-black" : "text-gray-400"}`,
                            children: "试听播放",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => {
                              (le("import"), xe(""));
                            },
                            className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${ne === "import" ? "bg-white shadow-sm text-black" : "text-gray-400"}`,
                            children: "加入歌单",
                          }),
                        ],
                      }),
                      ne === "import" &&
                        e.jsxs("div", {
                          className: "mb-8",
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2 block",
                              children: "目标歌单",
                            }),
                            e.jsx("select", {
                              value: z,
                              onChange: (G) => O(G.target.value),
                              className:
                                "w-full py-2 bg-transparent border-b border-gray-200 text-lg font-light focus:outline-none focus:border-black rounded-none",
                              children: N.map((G) =>
                                e.jsx(
                                  "option",
                                  { value: G.platformId, children: G.name },
                                  G.platformId,
                                ),
                              ),
                            }),
                          ],
                        }),
                      e.jsxs("form", {
                        onSubmit: re,
                        className: "relative mb-4",
                        children: [
                          e.jsx("input", {
                            type: "text",
                            value: Z,
                            onChange: (G) => K(G.target.value),
                            placeholder: "搜索歌曲...",
                            className:
                              "w-full py-4 bg-transparent border-b-2 border-gray-200 text-2xl font-light placeholder-gray-300 focus:outline-none focus:border-black transition-colors rounded-none",
                            autoFocus: !0,
                            disabled: ie,
                          }),
                          e.jsx("button", {
                            type: "submit",
                            disabled: ie,
                            className:
                              "absolute right-0 bottom-4 text-sm font-bold uppercase tracking-widest hover:text-gray-600 flex items-center gap-2 disabled:opacity-50",
                            children: ie
                              ? e.jsx(Sn, {
                                  size: 14,
                                  className: "animate-spin",
                                })
                              : e.jsx("span", { children: "搜索" }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex-1 overflow-y-auto -mx-4 px-4 max-h-[300px] scrollbar-hide",
                        children: [
                          q.map((G) =>
                            e.jsx(
                              "div",
                              {
                                onClick: () => (ne === "play" ? ge(G) : J(G)),
                                className:
                                  "py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer group",
                                children: e.jsxs("div", {
                                  className:
                                    "flex justify-between items-center",
                                  children: [
                                    e.jsxs("div", {
                                      className: "min-w-0 flex-1 mr-4",
                                      children: [
                                        e.jsx("h4", {
                                          className:
                                            "text-sm font-medium truncate group-hover:text-black transition-colors",
                                          children: G.name,
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-xs text-gray-400 truncate",
                                          children: [G.artist, " — ", G.album],
                                        }),
                                      ],
                                    }),
                                    ne === "play"
                                      ? e.jsx(vr, {
                                          size: 16,
                                          className:
                                            "text-gray-300 group-hover:text-black transition-colors shrink-0",
                                        })
                                      : e.jsx(ea, {