      z &&
        be.get(z, []).then((Ze) => {
          x(Array.isArray(Ze) ? Ze : []);
        });
    };
  (l.useEffect(() => {
    if (!z) {
      x([]);
      return;
    }
    Ie();
  }, [z]),
    l.useEffect(() => {
      if (!O) {
        (ye(""), oe(3));
        return;
      }
      let Ze = !1;
      return (
        be.get(O, null).then((Ue) => {
          if (Ze) return;
          const me = Ue == null ? void 0 : Ue.timeHM;
          ye(typeof me == "string" ? me : "");
          const jt = Math.floor(
            Number((Ue == null ? void 0 : Ue.retryCount) ?? 3),
          );
          oe(Number.isFinite(jt) ? Math.max(1, Math.min(5, jt)) : 3);
        }),
        () => {
          Ze = !0;
        }
      );
    }, [O]),
    l.useEffect(() => {
      if (!Z) {
        H(!1);
        return;
      }
      let Ze = !1;
      return (
        be
          .get(Z, !1)
          .then((Ue) => {
            Ze || H(!!Ue);
          })
          .catch(() => {}),
        () => {
          Ze = !0;
        }
      );
    }, [Z]),
    l.useEffect(() => {
      if (!K) {
        S("2");
        return;
      }
      let Ze = !1;
      return (
        be.get(K, null).then((Ue) => {
          if (Ze) return;
          const me = Number(Ue),
            jt = Number.isFinite(me)
              ? Math.max(0, Math.min(20, Math.floor(me)))
              : 2;
          S(String(jt));
        }),
        () => {
          Ze = !0;
        }
      );
    }, [K]),
    l.useEffect(() => {
      if (!ne) {
        T("2");
        return;
      }
      let Ze = !1;
      return (
        be.get(ne, null).then((Ue) => {
          if (Ze) return;
          const me = Number(Ue),
            jt = Number.isFinite(me)
              ? Math.max(0, Math.min(10, Math.floor(me)))
              : 2;
          T(String(jt));
        }),
        () => {
          Ze = !0;
        }
      );
    }, [ne]),
    l.useEffect(() => {
      if (!le) {
        L("60");
        return;
      }
      let Ze = !1;
      return (
        be.get(le, 60 * 1e3).then((Ue) => {
          if (Ze) return;
          const me = Number(Ue);
          if (!Number.isFinite(me) || me < 0) {
            L("60");
            return;
          }
          const jt = Math.floor(me / 1e3);
          L(String(Math.max(0, jt)));
        }),
        () => {
          Ze = !0;
        }
      );
    }, [le]),
    l.useEffect(() => {
      if (!ie) {
        F(0);
        return;
      }
      let Ze = !1;
      return (
        be
          .get(ie, "white")
          .then((Ue) => {
            if (Ze) return;
            const me = typeof Ue == "string" ? Ue : "white",
              jt = Ex.findIndex((Gt) => Gt.id === me);
            F(jt >= 0 ? jt : 0);
          })
          .catch(() => {}),
        () => {
          Ze = !0;
        }
      );
    }, [ie]),
    l.useEffect(() => {
      if (!P) return;
      const Ze = (Ue) => {
        var me;
        ((me = Ue == null ? void 0 : Ue.detail) == null
          ? void 0
          : me.contactId) === P && Ie();
      };
      return (
        window.addEventListener(oh, Ze),
        () => window.removeEventListener(oh, Ze)
      );
    }, [P, z]));
  const Ce = l.useMemo(() => g.filter((Ze) => Ze.author === n), [g, n]),
    Re = l.useMemo(() => {
      const Ze = new Map(),
        Ue = g.filter(
          (me) =>
            (me == null ? void 0 : me.author) === "ta" &&
            (me == null ? void 0 : me.replyToMemoId) != null,
        );
      for (const me of Ue) {
        const jt = String(me.replyToMemoId),
          Gt = Ze.get(jt) || [];
        (Gt.push(me), Ze.set(jt, Gt));
      }
      for (const [me, jt] of Ze.entries())
        (jt.sort(
          (Gt, Pt) =>
            ((Pt == null ? void 0 : Pt.createdAt) ||
              (Pt == null ? void 0 : Pt.updatedAt) ||
              0) -
            ((Gt == null ? void 0 : Gt.createdAt) ||
              (Gt == null ? void 0 : Gt.updatedAt) ||
              0),
        ),
          Ze.set(me, jt));
      return Ze;
    }, [g]),
    De = (Ze) => {
      (c(Ze), (he.current = "preview"), i("unveiling"), u(12));
      const Ue = 12,
        me = 2e3;
      let jt = 0;
      const Gt = performance.now(),
        Pt = (Wt) => {
          const ct = Math.min(1, (Wt - Gt) / me),
            Kt = Ue * (1 - ct);
          if (ct >= 1) {
            (u(0),
              setTimeout(() => {
                if (
                  (Ze == null ? void 0 : Ze.type) === "private" &&
                  (Ze == null ? void 0 : Ze.author) === "ta"
                ) {
                  const fs = ht(Ze == null ? void 0 : Ze.content, null);
                  (p(fs.previewText), h(fs.style), (W.current = Date.now()));
                  const gt =
                    (ue.current.get(Ze == null ? void 0 : Ze.id) || 0) + 1;
                  (ue.current.set(Ze == null ? void 0 : Ze.id, gt),
                    i("preview"));
                } else i("success");
              }, 300));
            return;
          }
          (u(Kt), (jt = window.requestAnimationFrame(Pt)), (ge.current = jt));
        };
      (ge.current && window.cancelAnimationFrame(ge.current),
        (jt = window.requestAnimationFrame(Pt)),
        (ge.current = jt));
    },
    at = () => {
      if (!o) return;
      if (
        !(
          (o == null ? void 0 : o.type) === "private" &&
          (o == null ? void 0 : o.author) === "ta"
        )
      ) {
        i("success");
        return;
      }
      ((he.current = "continue"), (J.current += 1));
      const Ze = Date.now();
      ((re.current = re.current.filter((Wt) => Ze - Wt < 1e4)),
        re.current.push(Ze),
        i("unveiling"),
        u(12));
      const Ue = 12,
        me = 2e3;
      let jt = 0;
      const Gt = performance.now(),
        Pt = (Wt) => {
          const ct = Math.min(1, (Wt - Gt) / me),
            Kt = Ue * (1 - ct);
          if (ct >= 1) {
            (u(0),
              setTimeout(() => {
                (async () => {
                  const fs = o,
                    gt = s == null ? void 0 : s.id;
                  if (!fs || !gt) {
                    i("success");
                    return;
                  }
                  const ae = Date.now() - (W.current || Date.now()),
                    nt = ae,
                    It = ae,
                    Xt = ue.current.get(fs == null ? void 0 : fs.id) || 0,
                    bs = re.current.length || 0,
                    ss = `couple_memo_peek_cooldown_${gt}_${fs == null ? void 0 : fs.id}`,
                    _s = await be.get(ss, null);
                  if (typeof _s == "number" && Date.now() - _s < we) {
                    i("success");
                    return;
                  }
                  const { pCaught: Bs } = _t({
                    memo: fs,
                    dtPreview: nt,
                    dtContinue: It,
                    reopenCount: Xt,
                    continueBurst: bs,
                  });
                  if (!(Math.random() < Bs)) {
                    i("success");
                    return;
                  }
                  be.set(ss, Date.now()).catch(() => {});
                  const Xs = Ee({
                    dtPreview: nt,
                    dtContinue: It,
                    reopenCount: Xt,
                    continueBurst: bs,
                  });
                  (i("caught"), He({ memo: fs, riskReasons: Xs }));
                })();
              }, 300));
            return;
          }
          (u(Kt), (jt = window.requestAnimationFrame(Pt)), (ge.current = jt));
        };
      (ge.current && window.cancelAnimationFrame(ge.current),
        (jt = window.requestAnimationFrame(Pt)),
        (ge.current = jt));
    },
    ft = () => {
      (i("idle"), p(""), h("emotion"), setTimeout(() => c(null), 500));
    },
    vt = () => {
      if (!y) return;
      const Ze = y.id;
      (x((Ue) => {
        const me = Ue.filter((jt) => jt.id !== Ze);
        return (z && be.set(z, me).catch(() => {}), me);
      }),
        q &&
          be
            .get(q, [])
            .then((Ue) => {
              const jt = (Array.isArray(Ue) ? Ue : []).filter(
                (Gt) => String(Gt) !== String(Ze),
              );
              return be.set(q, jt);
            })
            .then(() => {
              window.dispatchEvent(
                new CustomEvent(lh, { detail: { contactId: String(P || "") } }),
              );
            })
            .catch(() => {}),
        o && o.id === Ze && ft(),
        v(null));
    },
    Oe = () => {
      const Ze = String(w || "").trim(),
        Ue = String(A || "").trim();
      if (!Ze && !Ue) return;
      const me = Date.now(),
        jt = new Date();
      (x((Gt) => {
        const Pt = `编号.${String(Gt.length + 10).padStart(3, "0")}`,
          ct = [
            {
              id: me,
              serial: Pt,
              author: "me",
              type: C,
              privacyLevel: C === "private" ? 3 : void 0,
              date: "今天",
              time: jt.toLocaleTimeString("zh-CN", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              title: Ze || "无标题记录",
              content: Ue,
              source: "user",
              createdAt: Date.now(),
              updatedAt: Date.now(),
            },
            ...Gt,
          ];
        return (z && be.set(z, ct).catch(() => {}), ct);
      }),
        q &&
          be
            .get(q, [])
            .then((Gt) => {
              const Pt = Array.isArray(Gt) ? Gt : [];
              return Pt.some((Wt) => String(Wt) === String(me))
                ? Pt
                : [me, ...Pt].slice(0, 50);
            })
            .then((Gt) => be.set(q, Gt))
            .then(() => (V ? be.set(V, Date.now()) : Promise.resolve()))
            .then(() => {
              window.dispatchEvent(
                new CustomEvent(lh, { detail: { contactId: String(P || "") } }),
              );
            })
            .catch(() => {}),
        N(!1),
        _(""),
        k(""),
        M("daily"));
    },
    Qe = () => {
      if (!O) return;
      const Ze = String(xe || "").trim(),
        Ue = /^(\d{1,2}):(\d{2})$/.exec(Ze);
      if (!Ue) {
        alert("请先选择一个正确的时间（HH:MM）");
        return;
      }
      const me = Number(Ue[1]),
        jt = Number(Ue[2]);
      if (
        !Number.isFinite(me) ||
        me < 0 ||
        me > 23 ||
        !Number.isFinite(jt) ||
        jt < 0 ||
        jt > 59
      ) {
        alert("时间格式不正确");
        return;
      }
      const Gt = `${String(me).padStart(2, "0")}:${String(jt).padStart(2, "0")}`,
        Pt = Math.floor(Number(R)),
        Wt = Number.isFinite(Pt) ? Math.max(1, Math.min(5, Pt)) : 3,
        ct = Math.max(0, Math.min(20, Math.floor(Number(E))));
      if (
        (be
          .set(O, { timeHM: Gt, retryCount: Wt, updatedAt: Date.now() })
          .then(() => {
            window.dispatchEvent(
              new CustomEvent(t1, { detail: { contactId: String(P || "") } }),
            );
          })
          .catch(() => {}),
        K && be.set(K, ct).catch(() => {}),
        ne)
      ) {
        const Kt = Math.max(0, Math.min(10, Math.floor(Number(j))));
        be.set(ne, Kt).catch(() => {});
      }
      if (le) {
        const Kt = I,
          fs = Kt === "" ? 0 : Math.floor(Number(Kt)),
          ae = (Number.isFinite(fs) ? Math.max(0, fs) : 0) * 1e3;
        be.set(le, ae).catch(() => {});
      }
      je(!1);
    };
  return e.jsx("div", {
    className:
      "memo-theme-root relative h-full w-full bg-[var(--bg-out)] flex font-sans text-[var(--text-main)] selection:bg-zinc-800 selection:text-white transition-colors duration-500",
    style: (Ye = Ex[B]) == null ? void 0 : Ye.vars,
    children: e.jsxs("div", {
      className:
        "h-full w-full bg-[var(--bg-app)] overflow-hidden relative flex flex-col",
      children: [
        e.jsx("div", {
          className: "absolute inset-0 pointer-events-none opacity-[0.3]",
          style: {
            backgroundImage: "radial-gradient(#a1a1aa 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          },
        }),
        e.jsx("div", {
          className:
            "absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-overlay",
          style: {
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")',
          },
        }),
        e.jsxs("div", {
          className:
            "relative z-10 px-6 pt-12 pb-3 flex justify-between items-center bg-[var(--bg-app)] border-b border-[var(--border-main)]/60",
          children: [
            e.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [
                e.jsx("span", {
                  className:
                    "text-[9px] font-mono tracking-widest text-[var(--text-muted)] uppercase",
                  children: "档案 // 卷2",
                }),
                e.jsx(ey, { onClick: () => je(!0) }),
              ],
            }),
            e.jsx("span", {
              className:
                "text-[9px] font-mono tracking-[0.2em] text-[var(--text-light)] uppercase",
              children: "编号-092",
            }),
          ],
        }),
        e.jsxs("header", {
          className:
            "relative z-10 px-6 pt-4 pb-4 bg-[var(--bg-app)] grid grid-cols-[auto_1fr_auto] items-center border-b border-[var(--border-sub)]",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: t,
              className:
                "p-2 -ml-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors",
              "aria-label": "返回",
              children: e.jsx(un, { className: "w-5 h-5", strokeWidth: 1.5 }),
            }),
            e.jsxs("div", {
              className:
                "flex space-x-1 bg-[var(--accent-bg)]/60 p-1 rounded-full border border-[var(--border-main)]/50 backdrop-blur-sm justify-self-center",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => a("me"),
                  className: `px-6 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] transition-all duration-500 ${n === "me" ? "bg-[var(--bg-card)] shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-[var(--text-main)] border border-[var(--border-main)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)] border border-transparent"}`,
                  children: "我的",
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => a("ta"),
                  className: `px-6 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] transition-all duration-500 ${n === "ta" ? "bg-[var(--bg-card)] shadow-[0_2px_10px_rgba(0,0,0,0.06)] text-[var(--text-main)] border border-[var(--border-main)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)] border border-transparent"}`,
                  children: "对方",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative justify-self-end",
              children: [
                e.jsx("button", {
                  type: "button",
                  onClick: () => $((Ze) => !Ze),
                  "aria-label": "切换 UI 主题色",
                  "aria-expanded": D,
                  className:
                    "p-2 -mr-2 text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors relative",
                  children: e.jsx(xc, {
                    className: "w-5 h-5",
                    strokeWidth: 1.5,
                  }),
                }),
                D &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("div", {
                        className: "fixed inset-0 z-40",
                        onClick: () => $(!1),
                      }),
                      e.jsx("div", {
                        className:
                          "absolute right-0 top-10 w-auto bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-main)] p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-50 flex gap-3 transform origin-top-right animate-in fade-in zoom-in-95 duration-200",
                        children: Ex.map((Ze, Ue) =>
                          e.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                (F(Ue),
                                  $(!1),
                                  ie && be.set(ie, Ex[Ue].id).catch(() => {}));
                              },
                              className: `w-6 h-6 rounded-full border border-[var(--border-main)] transition-transform hover:scale-110 ${B === Ue ? "ring-2 ring-[var(--text-muted)] ring-offset-2 ring-offset-[var(--bg-card)]" : ""}`,
                              style: { backgroundColor: Ze.color },
                              title: Ze.name,
                            },
                            Ze.id,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "px-8 pt-6 pb-8 bg-[var(--bg-app)] relative overflow-hidden border-b border-[var(--border-main)]/80",
          children: [
            e.jsx(QM, {
              className:
                "absolute -right-4 -top-8 w-48 h-48 text-zinc-400/25 rotate-45",
              strokeWidth: 0.5,
            }),
            e.jsx("div", {
              className:
                "absolute right-6 top-10 text-[120px] font-serif italic text-zinc-500/20 leading-none select-none pointer-events-none",
              children: n === "me" ? "01" : "02",
            }),
            e.jsxs("div", {
              className: "relative z-10 flex flex-col",
              children: [
                e.jsx("h1", {
                  className:
                    "text-4xl font-serif italic tracking-tight text-[var(--text-main)]",
                  children: n === "me" ? "我的心声。" : "秘密花园。",
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3 my-5",
                  children: [
                    e.jsx("div", {
                      className: "w-8 h-[2px] bg-[var(--text-main)]",
                    }),
                    n === "me"
                      ? e.jsxs("button", {
                          type: "button",
                          onClick: () => N(!0),
                          className:
                            "flex items-center gap-2 group cursor-pointer",
                          "aria-label": "新增备忘录",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors duration-300",
                              children: "新增记录",
                            }),
                            e.jsx("div", {
                              className:
                                "w-5 h-5 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] group-hover:bg-[var(--text-main)] group-hover:border-[var(--text-main)] transition-all duration-300 shadow-sm",
                              children: e.jsx(ea, {
                                className:
                                  "w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--inverse)] transition-colors duration-300",
                                strokeWidth: 2,
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-[10px] text-[var(--text-muted)] font-mono tracking-[0.2em] uppercase",
                  children: n === "me" ? "被分类的回声" : "受限的心事展示",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "relative z-10 flex-1 overflow-y-auto px-5 py-6 pb-32 custom-scrollbar bg-[var(--bg-app)]",
          children: e.jsx("div", {
            className: "space-y-6",
            children: Ce.map((Ze) =>
              e.jsxs(
                "div",
                {
                  className: `relative p-6 rounded-[24px] transition-all duration-500 group ${Ze.type === "private" ? "bg-[var(--bg-card)] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-[var(--border-main)] cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1" : "bg-[var(--bg-card)] shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-[var(--border-sub)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5"} ${Number(Ze.aiEditCount) > 0 ? "ring-2 ring-rose-200/30" : ""}`,
                  children: [
                    e.jsxs("div", {
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-1 h-1 rounded-full bg-[var(--text-main)]",
                        }),
                        e.jsx("div", {
                          className:
                            "w-1 h-1 rounded-full bg-[var(--text-main)]",
                        }),
                        e.jsx("div", {
                          className:
                            "w-1 h-1 rounded-full bg-[var(--text-main)]",
                        }),
                      ],
                    }),
                    Ze.type === "private"
                      ? e.jsxs("div", {
                          onClick: () => De(Ze),
                          className: "relative overflow-hidden pl-4",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center mb-6",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[9px] font-mono text-[var(--text-muted)] tracking-[0.15em] uppercase border border-[var(--border-main)]/80 px-2 py-0.5 rounded-sm bg-[var(--accent-bg)]",
                                      children: Ze.serial,
                                    }),
                                    Number(Ze.aiEditCount) > 0
                                      ? e.jsxs("span", {
                                          className:
                                            "text-[9px] font-mono tracking-[0.15em] uppercase border border-[var(--border-main)]/60 px-2 py-0.5 rounded-sm bg-[var(--accent-bg)]/70 text-[var(--text-light)]",
                                          children: [
                                            "AI 编辑 ",
                                            Ze.aiEditCount,
                                            " 次",
                                            Ze.aiLastEditedAt
                                              ? ` · ${$e(Ze.aiLastEditedAt)}`
                                              : "",
                                          ],
                                        })
                                      : null,
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center space-x-1.5 text-[var(--text-light)]",
                                  children: [
                                    e.jsx(lr, {
                                      className: "w-3.5 h-3.5",
                                      strokeWidth: 1.5,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[9px] font-mono tracking-[0.2em] uppercase",
                                      children: "已加密",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "relative rounded-xl overflow-hidden bg-[var(--accent-bg)]/50 p-4 border border-[var(--border-sub)]",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center opacity-[0.04] z-0",
                                  children: e.jsx(Bi, {
                                    className: "w-32 h-32",
                                    strokeWidth: 0.5,
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.02)_50%)] bg-[length:100%_4px] z-0 pointer-events-none",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[14px] leading-relaxed text-[var(--text-main)] blur-[6px] opacity-30 select-none relative z-10 text-center font-serif italic py-2",
                                  children:
                                    "这是一段非常温柔的占位符文字，用来模拟被隐藏的私密心事。字数稍微长一点，展示排版质感。",
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-[var(--bg-card)]/40 backdrop-blur-md",
                                  children: e.jsxs("div", {
                                    className:
                                      "bg-[var(--bg-card)] px-6 py-3 rounded-full flex items-center space-x-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[var(--border-main)]/50 transform scale-95 group-hover:scale-100 transition-transform duration-500",
                                    children: [
                                      e.jsx(J1, {
                                        className:
                                          "w-4 h-4 text-[var(--text-main)]",
                                        strokeWidth: 1.5,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-[11px] font-mono font-medium text-[var(--text-main)] tracking-[0.1em] uppercase",
                                        children: "解锁",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-6 pt-4 border-t border-dashed border-[var(--border-main)] flex justify-between items-center pr-4",
                              onClick: (Ue) => Ue.stopPropagation(),
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-mono tracking-widest text-[var(--text-light)]",
                                  children: "已归档",
                                }),
                                e.jsxs("button", {
                                  type: "button",
                                  onClick: (Ue) => {
                                    (Ue.stopPropagation(), v(Ze));
                                  },
                                  className:
                                    "text-[11px] text-[var(--text-muted)] flex items-center gap-1.5 tracking-widest transition-colors duration-200",
                                  "aria-label": "抹除备忘录",
                                  title: "抹除",
                                  children: [
                                    e.jsx(_n, {
                                      className: "w-3.5 h-3.5",
                                      strokeWidth: 1.5,
                                    }),
                                    e.jsx("span", {
                                      className: "tracking-widest",
                                      children: "抹除",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n === "me"
                              ? (() => {
                                  const Ue = Re.get(String(Ze.id)) || [];
                                  return Ue.length === 0
                                    ? null
                                    : e.jsxs("p", {
                                        className:
                                          "mt-4 text-[11px] text-[var(--text-light)] font-mono tracking-[0.05em] text-center opacity-70",
                                        children: [
                                          "TA 留言已加密（",
                                          Ue.length,
                                          " 条），请解锁查看",
                                        ],
                                      });
                                })()
                              : null,
                          ],
                        })
                      : e.jsxs("div", {
                          className: "pl-4",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-start mb-4",
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[9px] font-mono text-[var(--text-light)] tracking-[0.2em] uppercase mb-1",
                                      children: Ze.serial,
                                    }),
                                    e.jsxs("span", {
                                      className:
                                        "text-[10px] font-medium text-[var(--text-muted)] tracking-wider uppercase",
                                      children: [
                                        Ze.date,
                                        " ",
                                        e.jsx("span", {
                                          className:
                                            "text-[var(--border-main)] mx-1",
                                          children: "/",
                                        }),
                                        " ",
                                        Ze.time,
                                      ],
                                    }),
                                    Number(Ze.aiEditCount) > 0 &&
                                    Ze.aiLastEditedAt
                                      ? e.jsxs("span", {
                                          className:
                                            "text-[9px] font-mono tracking-[0.2em] uppercase mt-2 text-[var(--text-light)]",
                                          children: [
                                            "最近 AI 编辑 ",
                                            Fe(Ze.aiLastEditedAt),
                                          ],
                                        })
                                      : null,
                                  ],
                                }),
                                Ze.type === "private" &&
                                  e.jsx("div", {
                                    className:
                                      "w-6 h-6 rounded-full bg-[var(--accent-bg)]/80 flex items-center justify-center border border-[var(--border-main)]/80",
                                    children: e.jsx(lr, {
                                      className:
                                        "w-3 h-3 text-[var(--text-muted)]",
                                      strokeWidth: 1.5,
                                    }),
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("h3", {
                                  className:
                                    "text-[18px] font-serif italic tracking-tight text-[var(--text-main)] mb-3",
                                  children: Ze.title,
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[14px] leading-[1.8] text-[var(--text-muted)] font-light whitespace-pre-wrap",
                                  children: tt(Ze.content),
                                }),
                                Ze.aiLastEditReason
                                  ? e.jsxs("p", {
                                      className:
                                        "mt-3 text-[11px] leading-relaxed text-[var(--text-light)] font-light whitespace-pre-wrap",
                                      children: [
                                        "AI心声：",
                                        Ze.aiLastEditReason,
                                      ],
                                    })
                                  : null,
                                n === "me"
                                  ? (() => {
                                      const Ue = Re.get(String(Ze.id)) || [];
                                      return Ue.length === 0
                                        ? null
                                        : e.jsxs("div", {
                                            className:
                                              "mt-5 pt-4 border-t border-dashed border-[var(--border-main)]",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 mb-3",
                                                children: [
                                                  e.jsx(Xn, {
                                                    className:
                                                      "w-3.5 h-3.5 text-[var(--text-muted)]",
                                                    strokeWidth: 1.5,
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-[10px] font-mono tracking-widest text-[var(--text-light)] uppercase",
                                                    children: "TA 留言",
                                                  }),
                                                  e.jsxs("span", {
                                                    className:
                                                      "text-[10px] text-[var(--text-muted)]",
                                                    children: [
                                                      "(",
                                                      Ue.length,
                                                      ")",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className: "space-y-3",
                                                children: Ue.map((me) =>
                                                  e.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "p-4 rounded-xl bg-[var(--accent-bg)]/40 border border-[var(--border-sub)]",
                                                      children: [
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex items-center gap-2 mb-2",
                                                          children: [
                                                            me.type ===
                                                            "private"
                                                              ? e.jsx(lr, {
                                                                  className:
                                                                    "w-3.5 h-3.5 text-[var(--text-muted)]",
                                                                  strokeWidth: 1.5,
                                                                })
                                                              : null,
                                                            e.jsx("span", {
                                                              className:
                                                                "text-[10px] font-mono tracking-widest text-[var(--text-light)]",
                                                              children:
                                                                me.serial ||
                                                                "留言",
                                                            }),
                                                          ],
                                                        }),
                                                        e.jsx("h4", {
                                                          className:
                                                            "text-[14px] font-serif italic text-[var(--text-main)] mb-2",
                                                          children:
                                                            me.title ||
                                                            "无标题留言",
                                                        }),
                                                        e.jsx("p", {
                                                          className:
                                                            "text-[13px] leading-[1.8] text-[var(--text-muted)] font-light whitespace-pre-wrap",
                                                          children: me.content,
                                                        }),
                                                      ],
                                                    },
                                                    me.id,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          });
                                    })()
                                  : null,
                                Ze.author === "me" || Ze.author === "ta"
                                  ? e.jsxs("div", {
                                      className:
                                        "mt-6 pt-4 border-t border-dashed border-[var(--border-main)] flex justify-between items-center",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] font-mono tracking-widest text-[var(--text-light)]",
                                          children: "已归档",
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: (Ue) => {
                                            (Ue.stopPropagation(), v(Ze));
                                          },
                                          className:
                                            "text-[11px] text-[var(--text-muted)] flex items-center gap-1.5 tracking-widest transition-colors duration-200",
                                          "aria-label": "抹除备忘录",
                                          title: "抹除",
                                          children: [
                                            e.jsx(_n, {
                                              className: "w-3.5 h-3.5",
                                              strokeWidth: 1.5,
                                            }),
                                            e.jsx("span", {
                                              className: "tracking-widest",
                                              children: "抹除",
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                  ],
                },
                Ze.id,
              ),
            ),
          }),
        }),
        b
          ? e.jsxs("div", {
              className:
                "absolute inset-0 z-[40] transition-all duration-500 overflow-hidden opacity-100 pointer-events-auto",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-[var(--bg-app)]/95 backdrop-blur-2xl",
                }),
                e.jsxs("div", {
                  className:
                    "relative h-full flex flex-col pt-12 px-8 pb-8 z-10",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex justify-between items-center mb-10 border-b border-[var(--border-main)] pb-4",
                      children: [
                        e.jsxs("span", {
                          className:
                            "text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] flex items-center space-x-2",
                          children: [
                            e.jsx(H0, {
                              className: "w-3.5 h-3.5 mr-1",
                              strokeWidth: 1.5,
                            }),
                            "撰写新归档",
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => N(!1),
                          className:
                            "w-8 h-8 rounded-full bg-[var(--accent-bg)] flex items-center justify-center text-[var(--text-muted)] transition-colors border border-[var(--border-sub)]",
                          "aria-label": "关闭",
                          title: "关闭",
                          children: e.jsx(Ts, {
                            className: "w-4 h-4",
                            strokeWidth: 1.5,
                          }),
                        }),
                      ],
                    }),
                    e.jsx("input", {
                      type: "text",
                      placeholder: "输入标题.",
                      value: w,
                      onChange: (Ze) => _(Ze.target.value),
                      className:
                        "bg-transparent text-3xl font-serif font-bold tracking-tight text-[var(--text-main)] outline-none mb-8 placeholder:text-[var(--text-light)]",
                    }),
                    e.jsxs("div", {
                      className: "relative flex-1 flex flex-col",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--border-main)]",
                        }),
                        e.jsx("textarea", {
                          placeholder: "记录你的思绪...",
                          value: A,
                          onChange: (Ze) => k(Ze.target.value),
                          className:
                            "bg-transparent text-[15px] leading-[2.2] text-[var(--text-muted)] font-light resize-none outline-none flex-1 pl-6 placeholder:text-[var(--text-light)] custom-scrollbar",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-6 flex items-center justify-between pt-6 border-t border-[var(--border-sub)]",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () =>
                            M((Ze) => (Ze === "daily" ? "private" : "daily")),
                          className:
                            "flex items-center space-x-2 text-[11px] tracking-[0.2em] transition-colors",
                          children: [
                            C === "private"
                              ? e.jsx(lr, {
                                  className: "w-4 h-4",
                                  strokeWidth: 1.5,
                                })
                              : e.jsx(Um, {
                                  className: "w-4 h-4",
                                  strokeWidth: 1.5,
                                }),
                            e.jsx("span", {
                              children:
                                C === "private" ? "设为私密" : "设为公开",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: Oe,
                          className:
                            "px-8 py-3.5 bg-[var(--text-main)] text-[var(--inverse)] text-[12px] tracking-[0.2em] rounded-full opacity-90 transition-all shadow-lg",
                          children: "保存归档",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null,
        y
          ? e.jsxs("div", {
              className:
                "absolute inset-0 z-[50] flex items-center justify-center transition-all duration-300 opacity-100 pointer-events-auto",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-[var(--bg-out)]/60 backdrop-blur-md",
                  onClick: () => v(null),
                }),
                e.jsxs("div", {
                  className:
                    "bg-[var(--bg-card)] border border-[var(--border-main)] p-8 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative z-10 w-4/5 max-w-[320px] flex flex-col items-center text-center transform transition-transform duration-500 scale-100",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 border border-red-100 shadow-inner",
                      children: e.jsx(_n, {
                        className: "w-6 h-6 text-red-500",
                        strokeWidth: 1.5,
                      }),
                    }),
                    e.jsx("h3", {
                      className:
                        "text-2xl font-bold tracking-tight text-[var(--text-main)] mb-3",
                      children: "确认抹除记录？",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[13px] text-[var(--text-muted)] mb-8 font-light leading-relaxed",
                      children: "此记录将从归档数据库中被永久删除，无法恢复。",
                    }),
                    e.jsxs("div", {
                      className: "flex gap-3 w-full",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: () => v(null),
                          className:
                            "flex-1 py-3.5 border border-[var(--border-main)] rounded-full text-[12px] text-[var(--text-muted)] tracking-widest transition-colors",
                          children: "取消",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: vt,
                          className:
                            "flex-1 py-3.5 bg-red-500 text-white rounded-full text-[12px] tracking-widest shadow-[0_8px_20px_rgba(239,68,68,0.25)] transition-colors",
                          children: "确认抹除",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null,
        X
          ? e.jsxs("div", {
              className:
                "absolute inset-0 z-[45] transition-all duration-300 overflow-hidden opacity-100 pointer-events-auto",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-[var(--bg-out)]/60 backdrop-blur-md",
                  onClick: () => je(!1),
                }),
                e.jsxs("div", {
                  className:
                    "relative h-full flex flex-col pt-12 px-8 pb-8 z-10",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex justify-between items-center mb-8 border-b border-[var(--border-main)] pb-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[10px] font-mono tracking-[0.2em] text-[var(--text-muted)] uppercase",
                          children: "TA 备忘录自动更新",
                        }),
                        e.jsx("button", {
                          type: "button",
                          onClick: () => {
                            (je(!1), U(null));
                          },
                          className:
                            "w-8 h-8 rounded-full bg-[var(--accent-bg)] flex items-center justify-center text-[var(--text-muted)] transition-colors border border-[var(--border-sub)]",
                          "aria-label": "关闭",
                          title: "关闭",
                          children: e.jsx(Ts, {
                            className: "w-4 h-4",
                            strokeWidth: 1.5,
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex-1 overflow-y-auto pr-2 flex flex-col",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between gap-3 mb-3",
                          children: [
                            e.jsx("label", {
                              className:
                                "text-[12px] text-[var(--text-muted)] font-mono tracking-[0.12em] uppercase",
                              children: "每天更新时间",
                            }),
                            e.jsx(Ae, { helpKey: "memo_setting_auto_time" }),
                          ],
                        }),
                        e.jsx("input", {
                          type: "time",
                          value: xe,
                          onChange: (Ze) => ye(Ze.target.value),
                          className:
                            "w-full bg-[var(--bg-card)]/80 border border-[var(--border-main)] rounded-2xl px-4 py-4 text-[15px] outline-none",
                        }),
                        e.jsx(te, {
                          helpKey: "memo_setting_auto_time",
                          children:
                            "设置后，每天到此时间，TA 会读取你们当天在聊天里的内容，并追加备忘录。历史内容会永久保留。",
                        }),
                        e.jsx("div", {
                          className:
                            "mt-7 pt-6 border-t border-[var(--border-sub)]",
                          children: e.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-4",
                            children: [
                              e.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between gap-3",
                                    children: [
                                      e.jsx("label", {
                                        className:
                                          "text-[12px] text-[var(--text-muted)] font-mono tracking-[0.12em] uppercase block",
                                        children: "TA 备忘录同步到聊天",
                                      }),
                                      e.jsx(Ae, {
                                        helpKey: "memo_setting_sync_to_chat",
                                      }),
                                    ],
                                  }),
                                  e.jsx(te, {
                                    helpKey: "memo_setting_sync_to_chat",
                                    children:
                                      "开启后，TA 在聊天回复时会参考自己已记录的备忘录内容，保持偏好一致。",
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => {
                                  const Ze = !ee;
                                  (H(Ze), Z && be.set(Z, Ze).catch(() => {}));
                                },
                                className: `relative h-7 w-14 rounded-full transition-colors duration-200 border border-[var(--border-main)]/60 ${ee ? "bg-rose-200/70" : "bg-[var(--bg-card)]/70"}`,
                                "aria-label": "切换 TA 备忘录同步到聊天",
                                "aria-pressed": ee,
                                children: e.jsx("span", {
                                  className: `absolute top-1 left-1 h-5 w-5 rounded-full bg-[var(--bg-card)] shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-transform duration-200 ${ee ? "translate-x-7" : "translate-x-0"}`,
                                }),
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className: "mt-7",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between gap-3 mb-3",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[12px] text-[var(--text-muted)] font-mono tracking-[0.12em] uppercase mb-3 block",
                                  children: "TA 查看备忘录最小间隔（秒）",
                                }),
                                e.jsx(Ae, {
                                  helpKey: "memo_setting_ta_min_interval",
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "number",
                              inputMode: "numeric",
                              min: 0,
                              step: 5,
                              value: I,
                              onChange: (Ze) => {
                                const Ue = Ze.target.value;
                                if (Ue === "") {
                                  L("");
                                  return;
                                }
                                const me = Number(Ue);
                                Number.isFinite(me) &&
                                  L(String(Math.max(0, Math.floor(me))));
                              },
                              className:
                                "w-full bg-[var(--bg-card)]/80 border border-[var(--border-main)] rounded-2xl px-4 py-4 text-[15px] outline-none",
                            }),
                            e.jsx(te, {
                              helpKey: "memo_setting_ta_min_interval",
                              children:
                                "用于避免用户刚保存一条备忘录后，TA 立刻发起多次读取/写回 API。你设置的间隔越大，越“沉得住气”。`0` 表示不限制。",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mt-7",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between gap-3 mb-3",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[12px] text-[var(--text-muted)] font-mono tracking-[0.12em] uppercase block",
                                  children: "失败后最多尝试次数",
                                }),
                                e.jsx(Ae, {
                                  helpKey: "memo_setting_retry_count",
                                }),
                              ],
                            }),
                            e.jsx("select", {
                              value: R,
                              onChange: (Ze) => oe(Number(Ze.target.value)),
                              className:
                                "w-full bg-[var(--bg-card)]/80 border border-[var(--border-main)] rounded-2xl px-4 py-4 text-[15px] outline-none",
                              children: [1, 2, 3, 4, 5].map((Ze) =>
                                e.jsx(
                                  "option",
                                  { value: Ze, children: Ze },
                                  Ze,
                                ),
                              ),
                            }),
                            e.jsx(te, {
                              helpKey: "memo_setting_retry_count",
                              children:
                                "如果这次没能整理成功，会在同一时间点再试，直到成功或达到你设置的次数。",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mt-7",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between gap-3 mb-3",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[12px] text-[var(--text-muted)] font-mono tracking-[0.12em] uppercase block",
                                  children:
                                    "AI 留言（写回用户备忘录）每天最多触发次数",
                                }),
                                e.jsx(Ae, {
                                  helpKey: "memo_setting_comment_limit",
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "number",
                              inputMode: "numeric",
                              value: E,
                              onChange: (Ze) => {
                                const Ue = Ze.target.value;
                                if (Ue === "") {
                                  S("");
                                  return;
                                }
                                /^\d+$/.test(Ue) && S(Ue);
                              },
                              className:
                                "w-full bg-[var(--bg-card)]/80 border border-[var(--border-main)] rounded-2xl px-4 py-4 text-[15px] outline-none",
                            }),
                            e.jsx(te, {
                              helpKey: "memo_setting_comment_limit",
                              children:
                                "只对“新增了用户备忘录后”触发的 API 写回生效。每天限制越低，AI 留言越少。",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mt-7",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between gap-3 mb-3",
                              children: [
                                e.jsx("label", {
                                  className:
                                    "text-[12px] text-[var(--text-muted)] font-mono tracking-[0.12em] uppercase block",
                                  children: "AI 留言失败后最多重试次数",
                                }),
                                e.jsx(Ae, {
                                  helpKey: "memo_setting_comment_retry",
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              type: "number",
                              inputMode: "numeric",
                              value: j,
                              onChange: (Ze) => {
                                const Ue = Ze.target.value;
                                if (Ue === "") {
                                  T("");
                                  return;
                                }
                                /^\d+$/.test(Ue) && T(Ue);
                              },
                              className:
                                "w-full bg-[var(--bg-card)]/80 border border-[var(--border-main)] rounded-2xl px-4 py-4 text-[15px] outline-none",
                            }),
                            e.jsx(te, {
                              helpKey: "memo_setting_comment_retry",
                              children:
                                "达到上限后，该条待留言的备忘录会从 pending 队列移除，避免无限后台重试。`0` 表示不重试。",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "mt-auto pt-6 flex gap-3",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              onClick: () => {
                                (je(!1), U(null));
                              },
                              className:
                                "flex-1 py-3.5 border border-[var(--border-main)] rounded-full text-[12px] text-[var(--text-muted)] tracking-widest transition-colors",
                              children: "取消",
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: Qe,
                              className:
                                "flex-1 py-3.5 bg-[var(--text-main)] text-[var(--inverse)] rounded-full text-[12px] tracking-widest shadow-lg transition-colors",
                              children: "确认设置",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : null,
        e.jsxs("div", {
          className: `absolute inset-0 z-50 transition-all duration-700 overflow-hidden ${r !== "idle" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
          children: [
            e.jsx("div", {
              className: "absolute inset-0 bg-[#FAFAFA]/95 backdrop-blur-2xl",
            }),
            e.jsxs("div", {
              className: `absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-700 ${r === "unveiling" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
              children: [
                e.jsxs("div", {
                  className:
                    "relative w-32 h-32 flex items-center justify-center mb-10",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute inset-0 rounded-full border-[0.5px] border-zinc-400/30 animate-[spin_6s_linear_infinite]",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-4 rounded-full border-[0.5px] border-zinc-400/30 animate-[spin_4s_linear_infinite_reverse]",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-8 bg-zinc-200/30 rounded-full animate-ping",
                      style: { animationDuration: "3s" },
                    }),
                    e.jsx("div", {
                      className:
                        "relative w-12 h-12 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center justify-center border border-zinc-200",
                      children: e.jsx(Mc, {
                        className: "w-5 h-5 text-zinc-800 animate-pulse",
                        strokeWidth: 1.5,
                      }),
                    }),
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase animate-pulse mb-8",
                  children: "解密中…",
                }),
                e.jsxs("div", {
                  className: "w-full max-w-[200px] space-y-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "h-[1px] bg-zinc-400/50 w-full transition-all duration-75",
                      style: { filter: `blur(${d}px)`, opacity: 0.8 - d / 24 },
                    }),
                    e.jsx("div", {
                      className:
                        "h-[1px] bg-zinc-400/50 w-4/5 transition-all duration-75",
                      style: { filter: `blur(${d}px)`, opacity: 0.8 - d / 24 },
                    }),
                    e.jsx("div", {
                      className:
                        "h-[1px] bg-zinc-400/50 w-3/5 transition-all duration-75",
                      style: { filter: `blur(${d}px)`, opacity: 0.8 - d / 24 },
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: `absolute inset-0 min-h-0 flex flex-col transition-all duration-700 transform ${r === "preview" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`,
              children: e.jsxs("div", {
                className:
                  "flex-1 min-h-0 w-full h-full bg-white flex flex-col relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -left-10 top-20 text-[200px] font-serif italic text-zinc-50 leading-none select-none pointer-events-none",
                    children: "只",
                  }),
                  e.jsxs("div", {
                    className:
                      "px-8 pt-12 pb-6 flex justify-between items-center border-b border-zinc-100 relative z-10 shrink-0",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          e.jsxs("span", {
                            className:
                              "text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500 flex items-center gap-2",
                            children: [
                              e.jsx(Xn, {
                                className: "w-3 h-3 text-zinc-400 mr-1",
                                strokeWidth: 1.5,
                              }),
                              "预览完成",
                            ],
                          }),
                          o != null && o.privacyLevel
                            ? e.jsxs("span", {
                                className: "text-[10px] text-zinc-500 mt-2",
                                children: [
                                  "私密等级：",
                                  ve(o.privacyLevel),
                                  " / 5",
                                ],
                              })
                            : null,
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: ft,
                        className:
                          "w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors border border-zinc-200",
                        "aria-label": "关闭",
                        children: e.jsx(Ts, {
                          className: "w-4 h-4",
                          strokeWidth: 1.5,
                        }),
                      }),
                    ],
                  }),
                  o
                    ? e.jsxs("div", {
                        className:
                          "flex-1 min-h-0 overflow-y-auto overscroll-contain px-10 pt-12 pb-4 relative z-10 custom-scrollbar",
                        children: [
                          e.jsxs("div", {
                            className: "mb-8",
                            children: [
                              e.jsxs("span", {
                                className:
                                  "inline-block px-2 py-1 bg-zinc-900 text-[9px] font-mono text-white tracking-[0.2em] uppercase mb-4",
                                children: ["编号：", o.serial],
                              }),
                              e.jsx("h2", {
                                className:
                                  "text-3xl font-serif italic tracking-tight text-zinc-900 leading-tight",
                                children: o.title,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "relative pl-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute left-0 top-2 bottom-2 w-[2px] bg-zinc-200",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[15px] leading-[2.2] text-zinc-600 font-light text-justify",
                                children: f || "（精彩片段正在加载…）",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  e.jsxs("div", {
                    className:
                      "shrink-0 pb-10 pt-6 px-10 bg-white/90 backdrop-blur border-t border-zinc-100/50",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between items-center text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(ey, {}), " 继续看"],
                          }),
                          e.jsx("span", { children: "可能会被发现" }),
                        ],
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: at,
                        className:
                          "mt-6 w-full px-8 py-4 bg-[var(--text-main)] text-[var(--inverse)] text-[12px] tracking-[0.2em] rounded-full opacity-95 transition-all shadow-lg hover:opacity-100",
                        children: "继续看",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: `absolute inset-0 min-h-0 flex flex-col transition-all duration-1000 transform ${r === "success" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}`,
              children: e.jsxs("div", {
                className:
                  "flex-1 min-h-0 w-full h-full bg-white flex flex-col relative overflow-hidden",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute -left-10 top-20 text-[200px] font-serif italic text-zinc-50 leading-none select-none pointer-events-none",
                    children: "解",
                  }),
                  e.jsxs("div", {
                    className:
                      "px-8 pt-12 pb-6 flex justify-between items-center border-b border-zinc-100 relative z-10 shrink-0",
                    children: [
                      e.jsx("div", {
                        className: "flex flex-col",
                        children: e.jsxs("span", {
                          className:
                            "text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500 flex items-center space-x-2",
                          children: [
                            e.jsx(Xn, {
                              className: "w-3 h-3 text-zinc-400 mr-1",
                              strokeWidth: 1.5,
                            }),
                            "解锁成功",
                          ],
                        }),
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: ft,
                        className:
                          "w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors border border-zinc-200",
                        children: e.jsx(Um, {
                          className: "w-4 h-4",
                          strokeWidth: 1.5,
                        }),
                      }),
                    ],
                  }),
                  r === "success" &&
                    o &&
                    e.jsxs("div", {
                      className:
                        "flex-1 min-h-0 overflow-y-auto overscroll-contain px-10 pt-12 pb-4 relative z-10 custom-scrollbar",
                      children: [
                        e.jsxs("div", {
                          className: "mb-10",
                          children: [
                            e.jsxs("span", {
                              className:
                                "inline-block px-2 py-1 bg-zinc-900 text-[9px] font-mono text-white tracking-[0.2em] uppercase mb-6",
                              children: ["编号：", o.serial],
                            }),
                            e.jsx("h2", {
                              className:
                                "text-4xl font-serif italic tracking-tight text-zinc-900 leading-tight",
                              children: o.title,
                            }),
                            Number(o.aiEditCount) > 0 && o.aiLastEditedAt
                              ? e.jsxs("p", {
                                  className:
                                    "mt-3 text-[12px] font-mono text-zinc-500 tracking-widest uppercase",
                                  children: [
                                    "AI 编辑 ",
                                    o.aiEditCount,
                                    " 次 · ",
                                    Fe(o.aiLastEditedAt),
                                  ],
                                })
                              : null,
                            o.aiLastEditReason
                              ? e.jsxs("p", {
                                  className:
                                    "mt-2 text-[12px] text-zinc-500 leading-relaxed font-light whitespace-pre-wrap",
                                  children: ["AI心声：", o.aiLastEditReason],
                                })
                              : null,
                          ],
                        }),
                        e.jsxs("div", {
                          className: "relative pl-6",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute left-0 top-2 bottom-2 w-[2px] bg-zinc-200",
                            }),
                            e.jsx("p", {
                              className:
                                "text-[15px] leading-[2.2] text-zinc-600 font-light text-justify whitespace-pre-wrap",
                              children: tt(o.content),
                            }),
                          ],
                        }),
                        n === "me" && o.author === "me" && o.type === "private"
                          ? (() => {
                              const Ze = Re.get(String(o.id)) || [];
                              return Ze.length === 0
                                ? null
                                : e.jsxs("div", {
                                    className:
                                      "mt-10 pt-6 border-t border-zinc-200",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 mb-4",
                                        children: [
                                          e.jsx(Xn, {
                                            className: "w-4 h-4 text-zinc-500",
                                            strokeWidth: 1.5,
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[10px] font-mono tracking-widest text-zinc-400 uppercase",
                                            children: "TA 留言",
                                          }),
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className: "space-y-6",
                                        children: Ze.map((Ue) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              children: [
                                                e.jsx("h4", {
                                                  className:
                                                    "text-[16px] font-serif italic text-zinc-900 mb-2",
                                                  children:
                                                    Ue.title || "无标题留言",
                                                }),
                                                e.jsx("p", {
                                                  className:
                                                    "text-[14px] leading-[2] text-zinc-600 font-light whitespace-pre-wrap",
                                                  children: Ue.content,
                                                }),
                                              ],
                                            },
                                            Ue.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  });
                            })()
                          : null,
                      ],
                    }),
                  r === "success" &&
                    o &&
                    e.jsx("div", {
                      className:
                        "shrink-0 pb-10 pt-6 px-10 bg-white/90 backdrop-blur border-t border-zinc-100/50",
                      children: e.jsxs("div", {
                        className:
                          "flex justify-between items-center text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(ey, {}), " ", o.date],
                          }),
                          e.jsx("span", { children: "文件末尾" }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            e.jsx("div", {
              className: `absolute inset-0 flex flex-col transition-all duration-700 transform ${r === "caught" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`,
              children: e.jsxs("div", {
                className:
                  "flex-1 w-full h-full bg-[#FCFAFA] p-10 flex flex-col items-center justify-start text-center relative overflow-hidden border-t-[8px] border-rose-100",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-rose-100/40 rounded-full blur-[80px] pointer-events-none",
                  }),
                  o
                    ? e.jsxs("div", {
                        className:
                          "w-full max-w-[420px] relative z-10 mb-8 text-left",
                        children: [
                          e.jsxs("span", {
                            className:
                              "inline-block px-2 py-1 bg-zinc-900 text-[9px] font-mono text-white tracking-[0.2em] uppercase mb-4",
                            children: ["编号：", o.serial],
                          }),
                          e.jsx("h2", {
                            className:
                              "text-3xl font-serif italic tracking-tight text-zinc-900 leading-tight mb-4",
                            children: o.title,
                          }),
                          e.jsxs("div", {
                            className:
                              "relative pl-6 max-h-[30vh] overflow-y-auto custom-scrollbar",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute left-0 top-1 bottom-1 w-[2px] bg-rose-200",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[15px] leading-[2.2] text-zinc-600 font-light text-justify",
                                children: f || "（精彩片段正在加载…）",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  e.jsx("div", {
                    className:
                      "w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 relative z-10 border border-rose-100 shadow-[0_20px_60px_rgba(255,228,230,0.8)]",
                    children: e.jsx(gp, {
                      className: "w-10 h-10 text-rose-400",
                      strokeWidth: 1,
                    }),
                  }),
                  e.jsx("h2", {
                    className:
                      "text-3xl font-serif italic tracking-tight text-zinc-900 mb-4 relative z-10",
                    children: "提示。",
                  }),
                  e.jsxs("p", {
                    className:
                      "text-[13px] leading-[1.8] text-zinc-500 font-light mb-12 max-w-[260px] relative z-10",
                    children: [
                      "系统警报触发。",
                      e.jsx("br", {}),
                      "对方刚刚收到了一条提示，知道你正在试图了解这个小秘密。",
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: ft,
                    className:
                      "px-10 py-4 bg-zinc-900 text-white text-[11px] font-mono tracking-[0.2em] uppercase rounded-full hover:bg-zinc-800 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 relative z-10",
                    children: "轻轻关闭",
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("style", {
          dangerouslySetInnerHTML: {
            __html: `
          @keyframes spin_6s_linear_infinite {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spin_4s_linear_infinite_reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          
          .custom-scrollbar::-webkit-scrollbar { display: none; }
          .custom-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `,
          },
        }),
      ],
    }),
  });
}
const ty = co("leting"),
  EJ = {
    user_next: "user_next",
    user_prev: "user_prev",
    user_pick: "user_pick",
    char_next: "char_next",
    char_prev: "char_prev",
    ended: "ended",
    auto_skip_fail: "auto_skip_fail",
  };
function Ok(t, s) {
  const n = t && typeof t == "object" ? t : {};
  return `请在回复中自然体现当前正在同一「一起听」会话中；勿编造未发生的切歌。
${nR(n, s || {})}
${aR(n)}`;
}
const LJ = ({
    contact: t,
    onBack: s,
    entryWelcomeSessionKey: n,
    playEntryWelcomeTts: a = !1,
    showPhoneCase: r = !1,
    caseSize: i = null,
    appWindowMode: o = "full",
  }) => {
    const {
        fetchUserPlaylists: c,
        fetchPlaylistDetail: d,
        fetchLyric: u,
        user: f,
      } = Ii(),
      {
        chats: p,
        setChats: m,
        createChat: h,
        callApi: g,
        getRoleBoundUser: x,
        triggerAiReply: y,
        receiveMessage: v,
        sendMessage: b,
        updateMessage: N,
        favorites: w,
        apiConfig: _,
        startListenTogether: A,
        endListenTogether: k,
      } = vn(),
      { getSpace: C, updateSpace: M } = Bu(),
      { registerTrackChangeListener: E, bgmTrackInfo: S } = ZA(),
      j = l.useRef(S);
    l.useEffect(() => {
      j.current = S;
    }, [S]);
    const T = l.useRef(!1),
      I = l.useRef(!1),
      L = l.useRef(null),
      B = l.useRef(p);
    l.useEffect(() => {
      B.current = p;
    }, [p]);
    const [F, D] = l.useState(!1),
      [$, P] = l.useState(null),
      [z, O] = l.useState([]),
      [Z, K] = l.useState(!1);
    (l.useEffect(() => {
      let te = !1;
      return (
        (async () => {
          const Se = await Qm(t.id),
            Fe = C(t.id),
            $e = Array.isArray(Fe == null ? void 0 : Fe.listenTogetherHistory)
              ? Fe.listenTogetherHistory
              : [];
          let tt = Array.isArray(Se) ? Se : [];
          if ($e.length > 0) {
            if (tt.length === 0) tt = await Kw(t.id, $e.slice(-200));
            else {
              const Xe = new Set(
                  tt.map((Pe) => (Pe == null ? void 0 : Pe.id)).filter(Boolean),
                ),
                ht = [...tt];
              for (const Pe of $e)
                Pe != null &&
                  Pe.id &&
                  !Xe.has(Pe.id) &&
                  (ht.push(Pe), Xe.add(Pe.id));
              (ht.sort((Pe, ut) => (Pe.at || 0) - (ut.at || 0)),
                (tt = await Kw(t.id, ht.slice(-200))));
            }
            M(t.id, { listenTogetherHistory: [] });
          }
          te || O(tt);
        })(),
        () => {
          te = !0;
        }
      );
    }, [t.id]),
      l.useEffect(() => {
        if (!$) return;
        const te = window.setTimeout(() => P(null), 5200);
        return () => window.clearTimeout(te);
      }, [$]));
    const q = C(t.id),
      V = _v(q == null ? void 0 : q.startDate);
    (l.useEffect(() => {
      (q != null && q.listenTogetherActive) || K(!1);
    }, [q == null ? void 0 : q.listenTogetherActive]),
      l.useEffect(() => {
        if (!(q != null && q.listenTogetherActive)) return;
        const te = S;
        if (!(te != null && te.title)) return;
        const Se = q.listenTogetherSongPlayCounts;
        if (Object.keys(Se && typeof Se == "object" ? Se : {}).length > 0)
          return;
        const $e = v0(te);
        M(t.id, { listenTogetherSongPlayCounts: { [$e]: 1 } });
      }, [
        q == null ? void 0 : q.listenTogetherActive,
        q == null ? void 0 : q.listenTogetherSongPlayCounts,
        S,
        t.id,
        M,
      ]));
    const ne = l.useCallback(() => {
        const te = C(t.id);
        if (!(te != null && te.listenTogetherActive)) return;
        const Se = j.current;
        if (!(Se != null && Se.title)) return;
        const Fe = v0(Se),
          $e = { ...(te.listenTogetherSongPlayCounts || {}) };
        (($e[Fe] = ($e[Fe] || 0) + 1),
          M(t.id, { listenTogetherSongPlayCounts: $e }));
      }, [t.id, C, M]),
      le = l.useCallback(
        ({ playerAction: te } = {}) => {
          const Se = te === "changePlaylist" ? 420 : 120;
          window.setTimeout(() => {
            ne();
            const Fe =
                te === "next"
                  ? "char_next"
                  : te === "prev"
                    ? "char_prev"
                    : "char_playlist",
              $e = j.current,
              tt =
                String(
                  (t == null ? void 0 : t.nickname) ??
                    (t == null ? void 0 : t.name) ??
                    (t == null ? void 0 : t.remarkName) ??
                    "",
                ).trim() || "TA",
              Xe = Jw(Fe, {
                characterName: tt,
                trackTitle: $e == null ? void 0 : $e.title,
                trackArtist: $e == null ? void 0 : $e.artist,
              });
            (async () => {
              const ht = await Vc(t.id, [sx(Fe, Xe)]);
              O(ht);
            })();
          }, Se);
        },
        [ne, t, C],
      ),
      ie = (q == null ? void 0 : q.prismUi) || {},
      X = (x == null ? void 0 : x(t)) ?? {},
      je = t == null ? void 0 : t.avatar,
      xe = X == null ? void 0 : X.avatar,
      ye = (te) => {
        M(t.id, { prismUi: te });
      },
      R = async () => {
        if (T.current) return;
        const te = C(t.id);
        if (!(te != null && te.listenTogetherActive)) {
          ((T.current = !0), P(null), D(!0));
          try {
            const Se = !!(_ != null && _.endpoint && _ != null && _.key),
              $e = await AV({
                contact: t,
                getLatestMessages: (tt) => {
                  var Xe, ht;
                  return (
                    ((ht =
                      (Xe = B.current) == null
                        ? void 0
                        : Xe.find((Pe) => Pe.contactId === tt)) == null
                      ? void 0
                      : ht.messages) ?? []
                  );
                },
                createChat: h,
                getRoleBoundUser: x,
                callApi: g,
                receiveMessage: v,
                apiConfigured: Se,
              });
            if (!$e.ok) {
              P(
                $e.error === "api_not_configured"
                  ? "请先在设置中配置 API"
                  : "邀请处理失败，请检查网络后重试",
              );
              return;
            }
            if ($e.agree) {
              const tt = h(t.id),
                Xe = Array.isArray($e.acceptBubbleLines)
                  ? $e.acceptBubbleLines
                  : [],
                ht = Date.now(),
                Pe = sx("session_start", dh.session_start);
              ((Pe.at = ht), (Pe.id = `lt_${ht}_0000_sys_start`));
              const ut = Xe.map((Ee, fe) => ({
                  id: `lt_${ht}_${String(fe + 1).padStart(4, "0")}_ta`,
                  at: ht,
                  from: "ta",
                  text: String(Ee || "").trim(),
                })).filter((Ee) => Ee.text),
                _t = await Vc(t.id, [Pe, ...ut]);
              (O(_t),
                M(t.id, {
                  listenTogetherActive: !0,
                  listenTogetherBubbleLines: Xe,
                  listenTogetherSongPlayCounts: {},
                }),
                A == null ||
                  A(
                    tt,
                    { id: "couple_space_listen", name: "一起听", tracks: [] },
                    t.id,
                  ));
            }
          } catch {
            P("邀请处理失败，请稍后重试");
          } finally {
            ((T.current = !1), D(!1));
          }
        }
      },
      oe = (te) => {
        if (te !== !1) return;
        (k == null || k(),
          (async () => {
            try {
              const $e = sx("session_end", dh.session_end),
                tt = await Vc(t.id, [$e]);
              O(tt);
            } catch {}
          })(),
          M(t.id, {
            listenTogetherActive: !1,
            listenTogetherBubbleLines: [],
            listenTogetherUserBubble: "",
            listenTogetherSongPlayCounts: {},
          }));
        const Se = !!(_ != null && _.endpoint && _ != null && _.key),
          Fe = ($e) => {
            var tt, Xe;
            return (
              ((Xe =
                (tt = B.current) == null
                  ? void 0
                  : tt.find((ht) => ht.contactId === $e)) == null
                ? void 0
                : Xe.messages) ?? []
            );
          };
        (async () => {
          try {
            await NV({
              contact: t,
              getLatestMessages: Fe,
              createChat: h,
              getRoleBoundUser: x,
              callApi: g,
              receiveMessage: v,
              apiConfigured: Se,
              loadListenTogetherHistory: Qm,
            });
          } catch {}
        })();
      },
      ee = async (te) => {
        const Se = String(te || "").trim();
        if ((M(t.id, { listenTogetherUserBubble: te }), !Se)) return;
        const Fe = await Vc(t.id, [
          { id: `lt_${Date.now()}_u`, at: Date.now(), from: "user", text: Se },
        ]);
        O(Fe);
      },
      H = l.useCallback(async () => {
        var Se;
        const te = (Se = C(t.id)) == null ? void 0 : Se.prismBgm;
        if (!(te != null && te.playlistId)) return !1;
        try {
          if (te.source === "local") {
            const $e = ((await ty.getAllPlaylists()) || []).filter(
              (ht) =>
                (ht == null ? void 0 : ht.id) &&
                String(ht.id) !== String(te.playlistId),
            );
            if (!$e.length) return !1;
            const tt = $e[Math.floor(Math.random() * $e.length)],
              Xe = await ty.getSongsByPlaylist(tt.id);
            return Xe != null && Xe.length
              ? (M(t.id, {
                  prismBgm: {
                    source: "local",
                    playlistId: String(tt.id),
                    playlistName: tt.name || "本地歌单",
                  },
                }),
                !0)
              : !1;
          }
          if (te.source === "netease" && f != null && f.userId && c && d) {
            const $e = ((await c(f.userId)) || []).filter(
              (Pe) => String(Pe.id) !== String(te.playlistId),
            );
            if (!$e.length) return !1;
            const tt = $e[Math.floor(Math.random() * $e.length)],
              Xe = await d(tt.id);
            if (!(Xe != null && Xe.length)) return !1;
            const ht = Xe.map((Pe) => ({
              id: `ne_${Pe.id}`,
              platformId: Pe.id,
              platform: "netease",
              title: Pe.name,
              artist: Pe.ar.map((ut) => ut.name).join(" / "),
              cover: Pe.al.picUrl,
              album: Pe.al.name,
              duration: Pe.dt / 1e3,
              source: "netease_user",
            }));
            return (
              await ty.setNeteaseCache(`playlist_${tt.id}`, ht),
              M(t.id, {
                prismBgm: {
                  source: "netease",
                  playlistId: String(tt.id),
                  playlistName: tt.name || "网易云歌单",
                },
              }),
              !0
            );
          }
        } catch {}
        return !1;
      }, [t.id, d, c, C, f, M]),
      Y = async ({
        userBubbleText: te,
        playlistLabel: Se,
        trackTitle: Fe,
        trackArtist: $e,
        trackPlatformId: tt = null,
        lyricLinesBlock: Xe = "",
      }) => {
        const ht = !!(_ != null && _.endpoint && _ != null && _.key),
          Pe = (Ce) => {
            var Re, De;
            return (
              ((De =
                (Re = B.current) == null
                  ? void 0
                  : Re.find((at) => at.contactId === Ce)) == null
                ? void 0
                : De.messages) ?? []
            );
          },
          ut = Math.random() < 0.58,
          _t = { title: Fe, artist: $e, platformId: tt ?? null },
          Ee = C(t.id),
          fe =
            Ee != null &&
            Ee.listenTogetherSongPlayCounts &&
            typeof Ee.listenTogetherSongPlayCounts == "object"
              ? Ee.listenTogetherSongPlayCounts
              : {},
          He = Ok(fe, _t),
          Ie = await vk({
            contact: t,
            getLatestMessages: Pe,
            getRoleBoundUser: x,
            callApi: g,
            apiConfigured: ht,
            playlistLabel: Se,
            trackTitle: Fe,
            trackArtist: $e,
            userBubbleText: te,
            allowDjInteraction: ut,
            sessionPlayContext: He,
            lyricLinesBlock: Xe,
          });
        if (Ie.ok) {
          const Ce = Array.isArray(Ie.lines) ? Ie.lines : [],
            Re = Date.now(),
            De = Ce.map((ft, vt) => ({
              id: `lt_${Re}_${String(vt + 1).padStart(4, "0")}_r`,
              at: Re,
              from: "ta",
              text: String(ft || "").trim(),
            })).filter((ft) => ft.text),
            at = await Vc(t.id, De);
          (O(at), M(t.id, { listenTogetherBubbleLines: Ce }));
        }
        return Ie;
      },
      U = l.useCallback(
        (te, Se) => {
          const Fe = EJ[te];
          if (!Fe) return;
          const $e = C(t.id);
          $e != null &&
            $e.listenTogetherActive &&
            (I.current ||
              (L.current && clearTimeout(L.current),
              (L.current = window.setTimeout(() => {
                ((L.current = null),
                  (async () => {
                    var ht, Pe, ut;
                    if (I.current) return;
                    const tt = !!(
                      _ != null &&
                      _.endpoint &&
                      _ != null &&
                      _.key
                    );
                    if (!tt) return;
                    const Xe = C(t.id);
                    if (Xe != null && Xe.listenTogetherActive) {
                      ((I.current = !0), K(!0));
                      try {
                        const _t = {
                            title: (Se == null ? void 0 : Se.title) || "",
                            artist: (Se == null ? void 0 : Se.artist) || "",
                            platformId:
                              (Se == null ? void 0 : Se.platformId) != null
                                ? Se.platformId
                                : null,
                          },
                          Ee = v0(_t),
                          fe = { ...(Xe.listenTogetherSongPlayCounts || {}) };
                        ((fe[Ee] = (fe[Ee] || 0) + 1),
                          M(t.id, { listenTogetherSongPlayCounts: fe }));
                        const He = sR(t, x),
                          Ie =
                            String(
                              (t == null ? void 0 : t.nickname) ??
                                (t == null ? void 0 : t.name) ??
                                (t == null ? void 0 : t.remarkName) ??
                                "",
                            ).trim() || "TA",
                          Ce = Jw(Fe, {
                            userName: He,
                            characterName: Ie,
                            trackTitle: _t.title,
                            trackArtist: _t.artist,
                          }),
                          Re = sx(Fe, Ce),
                          De = Re.at;
                        let at = "";
                        if (_t.platformId != null && typeof u == "function")
                          try {
                            const Ze = await u(_t.platformId),
                              Ue =
                                typeof (Ze == null ? void 0 : Ze.lrc) ==
                                "string"
                                  ? Ze.lrc
                                  : typeof (Ze == null ? void 0 : Ze.lrc) ==
                                        "object" &&
                                      (ht = Ze == null ? void 0 : Ze.lrc) !=
                                        null &&
                                      ht.lyric
                                    ? Ze.lrc.lyric
                                    : "";
                            if (typeof Ue == "string" && Ue.trim()) {
                              const me = Ue.split(/\r?\n/)
                                .map((jt) =>
                                  jt.replace(/^\[[^\]]+\]\s*/g, "").trim(),
                                )
                                .filter(Boolean);
                              at = [...new Set(me)].slice(0, 28).join(`
`);
                            }
                          } catch {}
                        const ft = Ok(fe, _t),
                          vt = (Ze) => {
                            var Ue, me;
                            return (
                              ((me =
                                (Ue = B.current) == null
                                  ? void 0
                                  : Ue.find((jt) => jt.contactId === Ze)) ==
                              null
                                ? void 0
                                : me.messages) ?? []
                            );
                          },
                          Oe =
                            ((ut =
                              (Pe = Xe == null ? void 0 : Xe.prismBgm) == null
                                ? void 0
                                : Pe.playlistName) == null
                              ? void 0
                              : ut.trim()) || "一起听",
                          Qe =
                            typeof (Xe == null
                              ? void 0
                              : Xe.listenTogetherUserBubble) == "string"
                              ? Xe.listenTogetherUserBubble
                              : "",
                          Ye = await vk({
                            contact: t,
                            getLatestMessages: vt,
                            getRoleBoundUser: x,
                            callApi: g,
                            apiConfigured: tt,
                            playlistLabel: Oe,
                            trackTitle: _t.title,
                            trackArtist: _t.artist,
                            userBubbleText: Qe,
                            allowDjInteraction: !1,
                            trackEventReason: te,
                            sessionPlayContext: ft,
                            lyricLinesBlock: at,
                          });
                        if (Ye.ok) {
                          const Ze = Array.isArray(Ye.lines) ? Ye.lines : [],
                            Ue = Ze.map((jt, Gt) => ({
                              id: `lt_${De}_${String(Gt + 1).padStart(4, "0")}_tauto`,
                              at: De,
                              from: "ta",
                              text: String(jt || "").trim(),
                            })).filter((jt) => jt.text),
                            me = await Vc(t.id, [Re, ...Ue]);
                          (O(me), M(t.id, { listenTogetherBubbleLines: Ze }));
                        } else {
                          const Ze = await Vc(t.id, [Re]);
                          O(Ze);
                        }
                      } catch {
                      } finally {
                        ((I.current = !1), K(!1));
                      }
                    }
                  })());
              }, 360))));
        },
        [
          _ == null ? void 0 : _.endpoint,
          _ == null ? void 0 : _.key,
          g,
          t,
          u,
          x,
          C,
          M,
        ],
      );
    l.useEffect(() => {
      if (!(q != null && q.listenTogetherActive)) return;
      const te = E == null ? void 0 : E(U);
      return () => {
        (te == null || te(),
          L.current && (clearTimeout(L.current), (L.current = null)));
      };
    }, [q == null ? void 0 : q.listenTogetherActive, E, U]);
    const [ce, pe] = l.useState("map"),
      [se, Te] = l.useState(null),
      [ke, W] = l.useState(!1),
      [ue, re] = l.useState(null),
      he = ce === "feature" && !!se,
      ge = l.useCallback(() => ({}), []),
      J = (te) => {
        switch (te) {
          case "ledger":
            pe("ledger");
            break;
          case "chat": {
            try {
              const Se = h == null ? void 0 : h(t.id);
              re(Se || null);
            } catch {
              re(null);
            }
            W(!0);
            break;
          }
          case "listen_together":
            R();
            break;
          case "room":
            break;
          case "diary":
            pe("memo");
            break;
          case "memory_rewrite":
          case "season_journey":
            (Te(te), pe("feature"));
            break;
        }
      },
      G = () => {
        ce === "ledger" || ce === "memo" || ce === "feature"
          ? (pe("map"), Te(null))
          : s();
      },
      we = l.useCallback(
        ({
          featureId: te,
          title: Se,
          summary: Fe,
          cardType: $e = "",
          cardPayload: tt = null,
        }) => {
          const Xe = h == null ? void 0 : h(t.id);
          if (!Xe) return;
          const ht = [
              `【情侣空间】${Se || "罗盘功能"}`,
              String(Fe || "").trim(),
            ].filter(Boolean),
            Pe =
              $e ||
              (te === "memory_rewrite"
                ? "memory_rewrite_summary"
                : te === "season_journey"
                  ? "season_summary"
                  : "text"),
            ut =
              Pe === "memory_rewrite_summary"
                ? {
                    featureId: "memory_rewrite",
                    memoryRewriteCard: {
                      cardType: "rewrite_summary",
                      ...(tt && typeof tt == "object" ? tt : {}),
                    },
                  }
                : {};
          b == null ||
            b(
              Xe,
              ht.join(`
`),
              null,
              Pe,
              ut,
            );
        },
        [t.id, h, b],
      ),
      Q = l.useCallback(
        async (te) => {
          const Se = Array.isArray(te)
            ? te.map(($e) => String($e || "").trim()).filter(Boolean)
            : [];
          if (Se.length === 0) return;
          const Fe = h == null ? void 0 : h(t.id);
          Fe && (await (v == null ? void 0 : v(Fe, Se.join("||"))));
        },
        [t.id, h, v],
      ),
      ve = l.useCallback((te) => {
        var Se, Fe;
        return (
          ((Fe =
            (Se = B.current) == null
              ? void 0
              : Se.find(($e) => $e.contactId === te)) == null
            ? void 0
            : Fe.messages) ?? []
        );
      }, []),
      Ve = l.useCallback(
        (te) => {
          const Se = (x == null ? void 0 : x(te)) ?? {},
            Fe =
              V >= 180
                ? "稳定深化期"
                : V >= 60
                  ? "磨合稳定期"
                  : V > 0
                    ? "升温期"
                    : "初识期";
          return {
            roleName:
              (te == null ? void 0 : te.name) ||
              (te == null ? void 0 : te.remarkName) ||
              (te == null ? void 0 : te.nickname) ||
              "TA",
            roleSetting: (te == null ? void 0 : te.setting) || "",
            userName: (Se == null ? void 0 : Se.name) || "用户",
            userSetting: (Se == null ? void 0 : Se.settings) || "",
            styleAnchor:
              (te == null ? void 0 : te.personalityStyle) ||
              (te == null ? void 0 : te.speechStyle) ||
              (te == null ? void 0 : te.style) ||
              "克制自然，少形容词，多动作细节",
            toneBlacklist: ["油腻情话", "夸张誓言", "过度亲密称呼"],
            relationshipState: Fe,
            eventSourcePolicy: "hybrid",
          };
        },
        [V, x],
      ),
      Ae = l.useCallback(async (te, Se = []) => {
        const Fe = te == null ? void 0 : te.id;
        if (!Fe) return [];
        try {
          const $e = ul(Array.isArray(Se) ? Se : []);
          return await Oo(Fe, $e);
        } catch {
          return [];
        }
      }, []);
    return e.jsxs("div", {
      className:
        "flex h-full min-h-0 w-full flex-col overflow-hidden bg-[#FDFBF7] relative",
      children: [
        e.jsx(dV, {
          open: F,
          avatar: t.avatar,
          name: t.nickname || t.name,
          message: "正在邀请他…",
          onClose: () => D(!1),
        }),
        $
          ? e.jsx("div", {
              className:
                "pointer-events-auto absolute left-3 right-3 top-[4.25rem] z-[79] rounded-xl border border-amber-200/80 bg-amber-50/95 px-3 py-2 text-center text-xs text-amber-900 shadow-sm backdrop-blur-sm",
              children: $,
            })
          : null,
        e.jsxs("div", {
          className: "relative min-h-0 flex-1 overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                ce === "map"
                  ? "absolute inset-0 h-full w-full"
                  : "pointer-events-none absolute inset-0 h-full w-full opacity-0 invisible",
              "aria-hidden": ce !== "map",
              children: e.jsx(
                wV,
                {
                  onNavigate: J,
                  onBack: G,
                  taAvatar: je,
                  userAvatar: xe,
                  daysTogether: V,
                  prismUi: ie,
                  onUpdatePrismUi: ye,
                  prismBgm: (q == null ? void 0 : q.prismBgm) ?? null,
                  onUpdatePrismBgm: (te) => M(t.id, { prismBgm: te }),
                  coverWelcomeTts:
                    (q == null ? void 0 : q.coverWelcomeTts) ?? null,
                  onUpdateCoverWelcomeTts: (te) =>
                    M(t.id, { coverWelcomeTts: te }),
                  skipCoverTransition:
                    (q == null ? void 0 : q.skipCoverTransition) === !0,
                  onUpdateSkipCoverTransition: (te) =>
                    M(t.id, { skipCoverTransition: !!te }),
                  entryWelcomeSessionKey: n,
                  playEntryWelcomeTts: a,
                  chatFavorites: w,
                  chats: p,
                  listenTogetherActive:
                    (q == null ? void 0 : q.listenTogetherActive) === !0,
                  listenTogetherBubbleLines: Array.isArray(
                    q == null ? void 0 : q.listenTogetherBubbleLines,
                  )
                    ? q.listenTogetherBubbleLines
                    : [],
                  onListenTogetherToggle: oe,
                  listenTogetherUserBubble:
                    typeof (q == null ? void 0 : q.listenTogetherUserBubble) ==
                    "string"
                      ? q.listenTogetherUserBubble
                      : "",
                  onListenTogetherUserBubbleChange: ee,
                  onListenTogetherReceive: Y,
                  onCyclePrismBgmPlaylist: H,
                  listenTogetherHistory: z,
                  listenTogetherTrackReactLoading: Z,
                  onListenTogetherAfterCharacterTrackChange: le,
                  appWindowMode: o,
                  menuBadges: ge(),
                },
                t.id,
              ),
            }),
            ce === "ledger"
              ? e.jsx("div", {
                  className:
                    "absolute inset-0 z-[2] h-full w-full bg-[#FDFBF7]",
                  children: e.jsx(TJ, { onBack: G, contact: t }),
                })
              : null,
            ce === "memo"
              ? e.jsx("div", {
                  className:
                    "absolute inset-0 z-[2] h-full w-full bg-[#FDFBF7]",
                  children: e.jsx(IJ, { onBack: G, contact: t }),
                })
              : null,
            he
              ? e.jsx("div", {
                  className:
                    "absolute inset-0 z-[3] h-full w-full bg-[#FDFBF7]",
                  children: e.jsx(_J, {
                    featureId: se,
                    contact: t,
                    space: q,
                    onBack: G,
                    onUpdateSpace: (te) => M(t.id, te),
                    onPushFeatureSummary: we,
                    runtime: {
                      callApi: g,
                      getRoleBoundUser: x,
                      getPersonaSnapshot: Ve,
                      getWorldBooksContext: Ae,
                      getLatestMessages: ve,
                      emitRoleDialogue: Q,
                      createChat: h,
                      sendMessage: b,
                      triggerAiReply: y,
                      updateMessage: N,
                    },
                  }),
                })
              : null,
          ],
        }),
        e.jsx(GA, {
          show: ke,
          onClose: () => W(!1),
          contact: t,
          chatId: ue,
          chats: p,
          callApi: g,
          getRoleBoundUser: x,
          receiveMessage: v,
          sendMessage: b,
          setChats: m,
          showPhoneCase: !1,
        }),
      ],
    });
  },
  DJ = ({ onSelect: t, onClose: s }) => {
    const { spaces: n } = Bu(),
      { contactsPublic: a, user: r } = vn(),
      i = Array.isArray(a) ? a.filter((g) => !Kl(g)) : [],
      [o, c] = l.useState(null),
      d = l.useMemo(
        () =>
          [...i].sort((g, x) => {
            const y = n[g.id],
              v = n[x.id];
            return (y == null ? void 0 : y.status) === "active" &&
              (v == null ? void 0 : v.status) !== "active"
              ? -1
              : (y == null ? void 0 : y.status) !== "active" &&
                  (v == null ? void 0 : v.status) === "active"
                ? 1
                : 0;
          }),
        [i, n],
      ),
      u = d.length,
      f = (g) => {
        const x = n[g.id],
          y = (x == null ? void 0 : x.status) === "active",
          v = g.id.split("").reduce((A, k) => A + k.charCodeAt(0), 0),
          b = (v % 100) / 100,
          N = ((v * 13) % 100) / 100;
        let w;
        b < 0.4
          ? (w = 80 + (b / 0.4) * 30)
          : b < 0.7
            ? (w = 130 + ((b - 0.4) / 0.3) * 30)
            : (w = 180 + ((b - 0.7) / 0.3) * 40);
        let _ = 50 + N * 20;
        if (y && x != null && x.startDate) {
          const A = Math.floor((Date.now() - x.startDate) / 864e5);
          _ += Math.min(A, 40);
        } else y && (_ += 10);
        return { radius: w, size: _ };
      },
      p = (g, x) => {
        (g.stopPropagation(), o === x.id ? t(x) : c(x.id));
      },
      m = () => {
        c(null);
      },
      h = l.useMemo(
        () =>
          Array.from({ length: 30 }).map((g, x) => ({
            id: x,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 3 + 2,
          })),
        [],
      );
    return e.jsxs("div", {
      className:
        "h-full w-full bg-[#0a0a0f] relative overflow-hidden flex flex-col",
      onClick: m,
      children: [
        e.jsx("style", {
          children: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `,
        }),
        e.jsxs("div", {
          className: "absolute inset-0 overflow-hidden pointer-events-none",
          children: [
            e.jsx(We.div, {
              animate: { scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] },
              transition: { duration: 8, repeat: 1 / 0, ease: "easeInOut" },
              className:
                "absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-900/20 rounded-full blur-[100px]",
            }),
            e.jsx(We.div, {
              animate: { scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] },
              transition: {
                duration: 10,
                repeat: 1 / 0,
                ease: "easeInOut",
                delay: 1,
              },
              className:
                "absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-900/20 rounded-full blur-[100px]",
            }),
          ],
        }),
        e.jsx("div", {
          className: "absolute inset-0 pointer-events-none",
          children: h.map((g) =>
            e.jsx(
              We.div,
              {
                className: "absolute bg-white rounded-full",
                style: {
                  left: `${g.x}%`,
                  top: `${g.y}%`,
                  width: g.size,
                  height: g.size,
                },
                animate: { opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] },
                transition: {
                  duration: g.duration,
                  repeat: 1 / 0,
                  delay: g.delay,
                  ease: "easeInOut",
                },
              },
              g.id,
            ),
          ),
        }),
        e.jsxs("div", {
          className:
            "relative z-10 px-6 pt-12 pb-4 flex items-center justify-between pointer-events-none",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className:
                    "text-2xl font-serif italic text-white/90 tracking-wide",
                  children: "Galaxy",
                }),
                e.jsx("p", {
                  className:
                    "text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1",
                  children: "Select your universe",
                }),
              ],
            }),
            e.jsx("button", {
              onClick: (g) => {
                (g.stopPropagation(), s());
              },
              className:
                "pointer-events-auto text-[10px] font-medium text-white/60 hover:text-white uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all backdrop-blur-sm",
              children: "Close",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "flex-1 relative flex items-center justify-center perspective-1000",
          children: [
            e.jsxs("div", {
              className:
                "absolute inset-0 flex items-center justify-center pointer-events-none",
              children: [
                e.jsx("div", {
                  className:
                    "absolute w-[440px] h-[440px] rounded-full border border-white/5 opacity-50",
                }),
                e.jsx("div", {
                  className:
                    "absolute w-[320px] h-[320px] rounded-full border border-white/5 opacity-30",
                }),
                e.jsx("div", {
                  className:
                    "absolute w-[200px] h-[200px] rounded-full border border-white/5 opacity-20",
                }),
                d.map((g) => {
                  const { radius: x } = f(g);
                  return e.jsx(
                    "div",
                    {
                      className: "absolute rounded-full border border-white/5",
                      style: { width: x * 2, height: x * 2 },
                    },
                    `orbit-${g.id}`,
                  );
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative z-0",
              children: [
                e.jsx(We.div, {
                  animate: { scale: [1, 1.5], opacity: [0.3, 0] },
                  transition: { duration: 2, repeat: 1 / 0 },
                  className:
                    "absolute inset-0 rounded-full border border-white/20",
                }),
                e.jsx(We.div, {
                  animate: { scale: [1, 2], opacity: [0.2, 0] },
                  transition: { duration: 3, repeat: 1 / 0, delay: 0.5 },
                  className:
                    "absolute inset-0 rounded-full border border-white/10",
                }),
                e.jsx(We.div, {
                  animate: {
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.2)",
                      "0 0 40px rgba(255,255,255,0.4)",
                      "0 0 20px rgba(255,255,255,0.2)",
                    ],
                  },
                  transition: { duration: 3, repeat: 1 / 0 },
                  className:
                    "w-24 h-24 rounded-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md shadow-2xl flex items-center justify-center relative z-10 p-1 border border-white/20",
                  children: e.jsxs("div", {
                    className:
                      "w-full h-full rounded-full overflow-hidden bg-black relative shadow-inner",
                    children: [
                      r != null && r.avatar
                        ? e.jsx("img", {
                            src: r.avatar,
                            alt: "Me",
                            className: "w-full h-full object-cover opacity-90",
                          })
                        : e.jsx("div", {
                            className:
                              "w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center",
                            children: e.jsx("span", {
                              className:
                                "text-xs font-serif italic text-white/50",
                              children: "Me",
                            }),
                          }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBoNHYxSDB6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-30 pointer-events-none",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none",
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)] rounded-full pointer-events-none",
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-white/20 blur-3xl rounded-full -z-10",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center pointer-events-none",
              children: d.map((g, x) => {
                const { radius: y, size: v } = f(g),
                  b = n[g.id],
                  N = (b == null ? void 0 : b.status) === "active",
                  w = o === g.id,
                  _ = (x / u) * 360 + x * 15;
                return e.jsx(
                  "div",
                  {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    style: { transform: `rotate(${_}deg)` },
                    children: e.jsxs("div", {