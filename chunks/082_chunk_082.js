      [c, d] = l.useState(_y),
      [u, f] = l.useState(0),
      [p, m] = l.useState(null),
      [h, g] = l.useState("list"),
      [x, y] = l.useState("mine"),
      [v, b] = l.useState("pink"),
      [N, w] = l.useState({}),
      [_, A] = l.useState({}),
      [k, C] = l.useState(0),
      [M, E] = l.useState(""),
      [S, j] = l.useState(null),
      [T, I] = l.useState(""),
      [L, B] = l.useState(null),
      [F, D] = l.useState(""),
      [$, P] = l.useState(""),
      [z, O] = l.useState(!1),
      [Z, K] = l.useState({ width: 390, height: 760 }),
      [q, V] = l.useState(0),
      [ne, le] = l.useState([0]),
      [ie, X] = l.useState(!1),
      [je, xe] = l.useState(null),
      [ye, R] = l.useState(() => {
        const Ne = lu(uc, {});
        return Ne && typeof Ne == "object" && !Array.isArray(Ne) ? Ne : {};
      }),
      [oe, ee] = l.useState({}),
      [H, Y] = l.useState(""),
      [U, ce] = l.useState({}),
      [pe, se] = l.useState({}),
      [Te, ke] = l.useState(!1),
      [W, ue] = l.useState(() => {
        const Ne = lu(Hf, {});
        return Ne && typeof Ne == "object" && !Array.isArray(Ne) ? Ne : {};
      }),
      [re, he] = l.useState(!1),
      [ge] = l.useState(() => Math.floor(Math.random() * 1e6)),
      [J, G] = l.useState("primary"),
      [we, Q] = l.useState(""),
      [ve, Ve] = l.useState(!1),
      Ae = l.useRef(null),
      te = l.useRef(null),
      Se = l.useRef(null),
      Fe = l.useRef(null),
      $e = l.useRef(null),
      tt = l.useRef(null),
      Xe = l.useRef(null),
      ht = l.useRef(!1),
      Pe = l.useRef(!1),
      ut = l.useRef(null),
      _t = l.useRef({}),
      Ee = l.useRef({}),
      fe = l.useRef(null),
      He = l.useRef(null),
      Ie = l.useRef(!1),
      Ce = l.useRef({}),
      Re = l.useRef("");
    (l.useEffect(() => {
      let Ne = !0;
      return (
        (async () => {
          const St = Array.isArray(a)
            ? a.filter((bt) => !u5(bt) && !Kl(bt))
            : [];
          if (St.length > 0) {
            const bt = d5(St);
            if (Ne && bt.length) {
              d(bt);
              return;
            }
          }
          const Be = await be.get("chat_app_contacts"),
            Ke = Array.isArray(Be) && Be.length ? Be : _y,
            Nt = d5(Ke.filter((bt) => !u5(bt) && !Kl(bt)));
          Ne && d(Nt.length ? Nt : _y);
        })(),
        () => {
          Ne = !1;
        }
      );
    }, [a]),
      l.useEffect(() => {
        let Ne = !0;
        return (
          (async () => {
            const St = await be.get(Hf, {});
            Ne &&
              (St && typeof St == "object" && !Array.isArray(St)
                ? ((Ce.current = St), ue(St))
                : (Ce.current = {}),
              he(!0));
          })(),
          () => {
            Ne = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        let Ne = !0;
        return (
          (async () => {
            const St = await be.get(c5, {});
            Ne &&
              St &&
              typeof St == "object" &&
              !Array.isArray(St) &&
              (Ee.current = St);
          })(),
          () => {
            Ne = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        let Ne = !0;
        return (
          (async () => {
            const St = await be.get(i0, {});
            Ne && St && typeof St == "object" && !Array.isArray(St) && ce(St);
          })(),
          () => {
            Ne = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        let Ne = !0;
        return (
          (async () => {
            const St = await be.get(r0, {});
            Ne && St && typeof St == "object" && !Array.isArray(St) && A(St);
          })(),
          () => {
            Ne = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        let Ne = !0;
        return (
          (async () => {
            const St = await be.get(uc, {});
            Ne &&
              St &&
              typeof St == "object" &&
              !Array.isArray(St) &&
              R((Be) => ({ ...(Be || {}), ...St }));
          })(),
          () => {
            Ne = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        let Ne = !0;
        return (
          (async () => {
            const St = await be.get(a0, {});
            Ne && St && typeof St == "object" && !Array.isArray(St) && w(St);
          })(),
          () => {
            Ne = !1;
          }
        );
      }, []),
      l.useEffect(() => {
        u > c.length - 1 && f(0);
      }, [c, u]));
    const De = `0${u + 1}`,
      at = l.useMemo(() => c, [c]),
      ft = (Ne) => {
        if (Ne === u) return;
        const Je = u;
        (m(Je),
          f(Ne),
          Ae.current && window.clearTimeout(Ae.current),
          (Ae.current = window.setTimeout(() => {
            m((St) => (St === Je ? null : St));
          }, 800)));
      };
    (l.useEffect(
      () => () => {
        (Ae.current && window.clearTimeout(Ae.current),
          te.current && window.clearTimeout(te.current),
          Xe.current && window.clearTimeout(Xe.current),
          fe.current && window.clearTimeout(fe.current),
          He.current && window.clearTimeout(He.current));
      },
      [],
    ),
      l.useEffect(() => {
        h !== "bookReader" && ((Re.current = ""), xe(null));
      }, [h]));
    const vt = (Ne) => {
        (Q(Ne),
          Ve(!0),
          te.current && window.clearTimeout(te.current),
          (te.current = window.setTimeout(() => Ve(!1), 2e3)));
      },
      Oe = at[u] || null,
      Qe = Oe != null && Oe.id ? String(Oe.id) : "",
      Ye = `${Qe}::${x}`,
      Ze = l.useMemo(() => {
        const Ne = N == null ? void 0 : N[Qe];
        return !Ne || !Array.isArray(Ne.notes) ? [] : Ne.notes;
      }, [N, Qe]),
      Ue = l.useMemo(() => {
        const Ne = _ == null ? void 0 : _[Qe];
        return !Ne || !Array.isArray(Ne.books)
          ? []
          : Ne.books.map((Je) => {
              const St = `${String(Qe)}::${String((Je == null ? void 0 : Je.id) || "")}`,
                Be = ye == null ? void 0 : ye[St];
              if (!Be || typeof Be != "object") return Je;
              const Ke = Array.isArray(Be.annotations)
                ? Be.annotations
                : Je.annotations;
              return {
                ...Je,
                annotations: Ke,
                annotationChunkIndex:
                  Number.isFinite(Number(Be.annotationChunkIndex)) &&
                  Number(Be.annotationChunkIndex) >= 0
                    ? Math.floor(Number(Be.annotationChunkIndex))
                    : Number(Je.annotationChunkIndex || 0),
              };
            });
      }, [_, Qe, ye]),
      me = l.useMemo(() => Ue.find((Ne) => Ne.id === M) || null, [Ue, M]),
      jt = l.useMemo(() => {
        var Ke;
        if (!Qe || !(me != null && me.id)) return 0;
        const Ne = W == null ? void 0 : W[Qe],
          Je = Ne == null ? void 0 : Ne[me.id],
          St = Number(
            Je && typeof Je == "object" && !Array.isArray(Je) ? Je.ratio : Je,
          );
        if (Number.isFinite(St)) return Math.max(0, Math.min(1, St));
        const Be = Number(
          ((Ke = me == null ? void 0 : me.readingProgress) == null
            ? void 0
            : Ke.ratio) || 0,
        );
        return Number.isFinite(Be) ? Math.max(0, Math.min(1, Be)) : 0;
      }, [
        me == null ? void 0 : me.id,
        (js = me == null ? void 0 : me.readingProgress) == null
          ? void 0
          : js.ratio,
        Qe,
        W,
      ]),
      Gt = l.useMemo(() => {
        if (!Qe || !(me != null && me.id)) return null;
        const Ne = W == null ? void 0 : W[Qe],
          Je = Ne == null ? void 0 : Ne[me.id];
        if (!Je || typeof Je != "object" || Array.isArray(Je)) return null;
        const St = Number(Je.pageIndex);
        return Number.isFinite(St) && St >= 0 ? Math.floor(St) : null;
      }, [me == null ? void 0 : me.id, Qe, W]),
      Pt = l.useMemo(
        () =>
          `${String((me == null ? void 0 : me.id) || "")}::${String(F || "").trim()}`,
        [me == null ? void 0 : me.id, F],
      ),
      Wt = async (Ne, Je, St = {}) => {
        var yt;
        if (!Qe || !Ne) return;
        const { immediate: Be = !1, pageIndex: Ke = null } = St || {},
          Nt = Number.isFinite(Je) ? Math.max(0, Math.min(1, Je)) : 0,
          bt = Number.isFinite(Ke) && Ke >= 0 ? Math.floor(Ke) : null,
          ns = Ce.current || {},
          Ge = (yt = ns == null ? void 0 : ns[Qe]) == null ? void 0 : yt[Ne],
          Le =
            Ge &&
            typeof Ge == "object" &&
            !Array.isArray(Ge) &&
            Number.isFinite(Ge.pageIndex)
              ? Math.floor(Ge.pageIndex)
              : null,
          _e = {
            ...ns,
            [Qe]: {
              ...((ns == null ? void 0 : ns[Qe]) || {}),
              [Ne]: {
                ratio: Nt,
                pageIndex: bt ?? Le ?? 0,
                updatedAt: new Date().toISOString(),
              },
            },
          };
        if (
          ((Ce.current = _e),
          ue(_e),
          sd(Hf, _e),
          fe.current && window.clearTimeout(fe.current),
          !Be)
        ) {
          fe.current = window.setTimeout(() => {
            be.set(Hf, _e);
          }, 260);
          return;
        }
        await be.set(Hf, _e);
      };
    l.useEffect(() => {
      const Ne = () => {
        K({
          width: Math.max(320, window.innerWidth || 390),
          height: Math.max(560, window.innerHeight || 760),
        });
      };
      return (
        Ne(),
        window.addEventListener("resize", Ne),
        () => window.removeEventListener("resize", Ne)
      );
    }, []);
    const ct = async (Ne) => {
        try {
          const Je = (await be.get(l5, [])) || [],
            St = [
              ...(Array.isArray(Je) ? Je : []),
              {
                id: `reading-api-log-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                at: new Date().toISOString(),
                contactId: Qe || "",
                contactName: (Oe == null ? void 0 : Oe.remark) || "",
                ...Ne,
              },
            ].slice(-500);
          await be.set(l5, St);
        } catch {}
      },
      Kt = (Ne) =>
        Array.isArray(Ne)
          ? Ne.slice(0, 4)
              .map((Je, St) => ({
                id:
                  Je != null && Je.id
                    ? String(Je.id)
                    : `note-${Date.now()}-${St}`,
                bookName: String(
                  (Je == null ? void 0 : Je.bookName) ||
                    (Je == null ? void 0 : Je.title) ||
                    "",
                ).trim(),
                bookNameZh: String(
                  (Je == null ? void 0 : Je.bookNameZh) ||
                    (Je == null ? void 0 : Je.titleZh) ||
                    "",
                ).trim(),
                author: String((Je == null ? void 0 : Je.author) || "").trim(),
                authorZh: String(
                  (Je == null ? void 0 : Je.authorZh) || "",
                ).trim(),
                readingDate: String(
                  (Je == null ? void 0 : Je.readingDate) ||
                    (Je == null ? void 0 : Je.date) ||
                    "",
                ).trim(),
                chapter: String(
                  (Je == null ? void 0 : Je.chapter) || "",
                ).trim(),
                quote: String(
                  (Je == null ? void 0 : Je.quote) ||
                    (Je == null ? void 0 : Je.excerpt) ||
                    "",
                ).trim(),
                quoteZh: String(
                  (Je == null ? void 0 : Je.quoteZh) ||
                    (Je == null ? void 0 : Je.excerptZh) ||
                    "",
                ).trim(),
                note: String(
                  (Je == null ? void 0 : Je.note) ||
                    (Je == null ? void 0 : Je.commentary) ||
                    "",
                ).trim(),
                noteZh: String(
                  (Je == null ? void 0 : Je.noteZh) ||
                    (Je == null ? void 0 : Je.commentaryZh) ||
                    "",
                ).trim(),
              }))
              .filter((Je) => Je.bookName || Je.author || Je.quote || Je.note)
          : [],
      fs = (Ne) => {
        const St = (n || [])
            .filter(
              (Ke) =>
                String((Ke == null ? void 0 : Ke.contactId) || "") ===
                  String(Ne) && !(Ke != null && Ke.isGroup),
            )
            .slice()
            .sort((Ke, Nt) => {
              var Ge, Le, _e, yt;
              const bt = new Date(
                (Ke == null ? void 0 : Ke.updatedAt) ||
                  ((Le =
                    (Ge = Ke == null ? void 0 : Ke.messages) == null
                      ? void 0
                      : Ge[Ke.messages.length - 1]) == null
                    ? void 0
                    : Le.timestamp) ||
                  0,
              ).getTime();
              return (
                new Date(
                  (Nt == null ? void 0 : Nt.updatedAt) ||
                    ((yt =
                      (_e = Nt == null ? void 0 : Nt.messages) == null
                        ? void 0
                        : _e[Nt.messages.length - 1]) == null
                      ? void 0
                      : yt.timestamp) ||
                    0,
                ).getTime() - bt
              );
            })[0],
          Be = ((St == null ? void 0 : St.messages) || [])
            .filter(
              (Ke) =>
                Ke && Ke.type !== "system" && String(Ke.text || "").trim(),
            )
            .slice(-24);
        return Be.length
          ? Be.map(
              (Ke) =>
                `${Ke.sender === "me" ? "我" : "TA"}：${String(Ke.text || "").trim()}`,
            ).join(`
`)
          : "（暂无最近单聊记录）";
      },
      gt = (Ne) => {
        var Be;
        if (!Ne) return !1;
        const Je = (n || []).filter(
          (Ke) =>
            String((Ke == null ? void 0 : Ke.contactId) || "") === String(Ne) &&
            !(Ke != null && Ke.isGroup),
        );
        if (!Je.length) return !1;
        const St = Je.slice().sort((Ke, Nt) => {
          var Ge, Le, _e, yt;
          const bt = new Date(
            (Ke == null ? void 0 : Ke.updatedAt) ||
              ((Le =
                (Ge = Ke == null ? void 0 : Ke.messages) == null
                  ? void 0
                  : Ge[Ke.messages.length - 1]) == null
                ? void 0
                : Le.timestamp) ||
              0,
          ).getTime();
          return (
            new Date(
              (Nt == null ? void 0 : Nt.updatedAt) ||
                ((yt =
                  (_e = Nt == null ? void 0 : Nt.messages) == null
                    ? void 0
                    : _e[Nt.messages.length - 1]) == null
                  ? void 0
                  : yt.timestamp) ||
                0,
            ).getTime() - bt
          );
        })[0];
        return !!(
          (Be = St == null ? void 0 : St.settings) != null &&
          Be.translationEnabled
        );
      },
      ae = (Ne) => {
        const Je = String(Ne || "").trim();
        if (!Je) return null;
        try {
          return JSON.parse(Je);
        } catch {
          const St =
            Je.match(/```json\s*([\s\S]*?)```/i) ||
            Je.match(/```([\s\S]*?)```/);
          if (St != null && St[1])
            try {
              return JSON.parse(St[1].trim());
            } catch {
              return null;
            }
          return null;
        }
      },
      nt = async () => {
        var ns;
        if (!Oe) return;
        if (!(r != null && r.endpoint) || !(r != null && r.key)) {
          vt("请先在设置里配置 API");
          return;
        }
        if (Te) return;
        ke(!0);
        const Ne =
            ((s == null ? void 0 : s.contacts) || []).find(
              (Ge) =>
                String((Ge == null ? void 0 : Ge.id) || "") === String(Oe.id),
            ) || Oe,
          Je = (typeof i == "function" ? i(Ne) : null) || {},
          St =
            (Je == null ? void 0 : Je.realName) ||
            (Je == null ? void 0 : Je.name) ||
            "用户",
          Be = (Je == null ? void 0 : Je.settings) || "无",
          Ke = (Ne == null ? void 0 : Ne.setting) || "无",
          Nt = gt(Ne == null ? void 0 : Ne.id),
          bt = fs(Ne == null ? void 0 : Ne.id);
        vt("读书笔记生成中");
        try {
          const Ge = `你是阅读编辑助手。请基于给定角色上下文，生成4篇该角色的读书笔记。

【角色名】${(Ne == null ? void 0 : Ne.remark) || (Ne == null ? void 0 : Ne.nickname) || (Ne == null ? void 0 : Ne.name) || "未知角色"}
【角色人设】${Ke}
【绑定用户人设（仅该角色绑定，非全局）】${St}：${Be}
【最近单聊记录】
${bt}
【该角色会话是否开启实时翻译】${Nt ? "是" : "否"}

输出要求：
1) 仅输出 JSON，不要任何解释。
2) JSON 格式：{"notes":[{"bookName":"","bookNameZh":"","author":"","authorZh":"","readingDate":"","chapter":"","quote":"","quoteZh":"","note":"","noteZh":""}]}
3) 必须返回4条 notes。
4) 书籍选择必须严格符合角色人设（兴趣、行业、年龄、经历、价值观），禁止与角色人设明显冲突；笔记观点与语言风格也必须符合该角色人设。
5) 阅读时间可以是过去任意真实时间，不必局限于最近日期。
6) 笔记必须是角色在“当时第一次读到该摘抄时”的当下感悟，使用当时语气，禁止“想当年/后来回看”式回忆口吻；只有明确设定为二刷/重读时，才允许写后来再读的新感受。
7) 同一本书允许在不同时间重复出现，但感悟应随时间与处境变化而不同。
8) 内容要贴合角色人设与聊天语气，书名、作者、阅读时间、摘抄、章节、笔记都要完整可信。
9) 若该角色会话开启了实时翻译：bookName/author/quote/note 用外语原文，对应的 bookNameZh/authorZh/quoteZh/noteZh 给中文翻译；若未开启：bookName/author/quote/note 用中文，bookNameZh/authorZh/quoteZh/noteZh 可留空。`;
          await ct({
            action: "generate_notes_start",
            promptPreview: Ge.slice(0, 300),
          });
          const Le = await cr(
            r,
            {
              temperature:
                typeof (r == null ? void 0 : r.temperature) == "number"
                  ? r.temperature
                  : 0.7,
              messages: [{ role: "user", content: Ge }],
            },
            {
              addApiLog: o,
              logScene: "reading",
              logContactName:
                (Ne == null ? void 0 : Ne.remark) ||
                (Ne == null ? void 0 : Ne.nickname) ||
                (Ne == null ? void 0 : Ne.name) ||
                "",
            },
          );
          await ct({
            action: "generate_notes_success",
            responsePreview: String(Le || "").slice(0, 300),
          });
          const _e = ae(Le),
            yt = Kt((_e == null ? void 0 : _e.notes) || []);
          if (yt.length !== 4) throw new Error("生成结果数量不足 4 条");
          const rt = Array.isArray(
              (ns = N == null ? void 0 : N[Qe]) == null ? void 0 : ns.notes,
            )
              ? N[Qe].notes
              : [],
            ze = yt,
            lt = {
              ...N,
              [Qe]: {
                updatedAt: new Date().toISOString(),
                notes: [...ze, ...rt],
              },
            };
          (w(lt),
            await be.set(a0, lt),
            C(0),
            vt(ze.length > 0 ? `已新增${ze.length}篇` : "无新增内容"));
        } catch (Ge) {
          (await ct({
            action: "generate_notes_error",
            error: String(
              (Ge == null ? void 0 : Ge.message) || Ge || "unknown",
            ),
          }),
            vt("刷新失败"));
        } finally {
          ke(!1);
        }
      },
      It = async (Ne) => {
        var St, Be;
        const Je =
          (Be =
            (St = Ne == null ? void 0 : Ne.target) == null
              ? void 0
              : St.files) == null
            ? void 0
            : Be[0];
        if (!(!Je || !Qe || !Ze[k]))
          try {
            const Ke = await f5(Je),
              Nt = Ze.map((ns, Ge) =>
                Ge === k ? { ...ns, coverUrl: Ke } : ns,
              ),
              bt = {
                ...N,
                [Qe]: {
                  ...((N == null ? void 0 : N[Qe]) || {}),
                  updatedAt: new Date().toISOString(),
                  notes: Nt,
                },
              };
            (w(bt), await be.set(a0, bt), vt("封面已更新"));
          } catch {
            vt("封面上传失败");
          } finally {
            Ne != null && Ne.target && (Ne.target.value = "");
          }
      },
      Xt = async (Ne) => {
        var St, Be, Ke, Nt;
        const Je =
          (Be =
            (St = Ne == null ? void 0 : Ne.target) == null
              ? void 0
              : St.files) == null
            ? void 0
            : Be[0];
        if (!(!Je || !Qe))
          try {
            vt("正在解码");
            const bt = Fee(Je),
              ns = (await be.get(o5, {})) || {};
            let Ge = String(
                ((Ke = ns == null ? void 0 : ns[bt]) == null
                  ? void 0
                  : Ke.text) || "",
              ),
              Le = String(
                ((Nt = ns == null ? void 0 : ns[bt]) == null
                  ? void 0
                  : Nt.encoding) || "",
              );
            if (!Ge) {
              const ze = await Je.arrayBuffer(),
                lt = $ee(ze);
              if (
                ((Ge = String((lt == null ? void 0 : lt.text) || "")),
                (Le = String((lt == null ? void 0 : lt.encoding) || "")),
                Ge)
              ) {
                const it = {
                  ...ns,
                  [bt]: {
                    text: Ge,
                    encoding: Le,
                    updatedAt: new Date().toISOString(),
                  },
                };
                await be.set(o5, it);
              }
            }
            if (!Ge || E1(Ge) > Math.max(12e3, Ge.length * 0.9)) {
              vt("解码失败，请更换 TXT 编码");
              return;
            }
            const _e = zee(Ge),
              yt = _e[0] || Je.name.replace(/\.txt$/i, ""),
              rt = {
                id: `book-${Date.now()}`,
                title: yt.slice(0, 40) || Je.name.replace(/\.txt$/i, ""),
                author: "",
                coverUrl: "",
                content: Ge,
                sourceEncoding: Le || "unknown",
                paragraphs: _e,
                importedAt: new Date().toISOString(),
              };
            (j(rt), g("bookEditor"), vt("解码成功"));
          } catch {
            vt("TXT 导入失败");
          } finally {
            Ne != null && Ne.target && (Ne.target.value = "");
          }
      },
      bs = async (Ne) => {
        var St, Be;
        const Je =
          (Be =
            (St = Ne == null ? void 0 : Ne.target) == null
              ? void 0
              : St.files) == null
            ? void 0
            : Be[0];
        if (!(!Je || !S))
          try {
            const Ke = await f5(Je);
            j((Nt) => Nt && { ...Nt, coverUrl: Ke });
          } catch {
            vt("封面上传失败");
          } finally {
            Ne != null && Ne.target && (Ne.target.value = "");
          }
      },
      ss = async () => {
        var Ke;
        if (!S || !Qe) return;
        const Ne = String(S.title || "").trim();
        if (!Ne) {
          vt("请填写书名");
          return;
        }
        const Je = { ...S, title: Ne, author: String(S.author || "").trim() },
          St = Array.isArray(
            (Ke = _ == null ? void 0 : _[Qe]) == null ? void 0 : Ke.books,
          )
            ? _[Qe].books
            : [],
          Be = {
            ..._,
            [Qe]: { updatedAt: new Date().toISOString(), books: [...St, Je] },
          };
        (A(Be),
          await be.set(r0, Be),
          j(null),
          y("mine"),
          g("detail"),
          vt("导入成功"));
      },
      _s = async (Ne) => {
        var bt;
        if (!Qe || !Ne) return;
        const St = (
            Array.isArray(
              (bt = _ == null ? void 0 : _[Qe]) == null ? void 0 : bt.books,
            )
              ? _[Qe].books
              : []
          ).filter((ns) => ns.id !== Ne),
          Be = {
            ..._,
            [Qe]: {
              ...((_ == null ? void 0 : _[Qe]) || {}),
              updatedAt: new Date().toISOString(),
              books: St,
            },
          };
        (A(Be), await be.set(r0, Be));
        const Ke = `${String(Qe)}::${String(Ne)}`,
          Nt = ye && typeof ye == "object" ? { ...ye } : {};
        (Object.prototype.hasOwnProperty.call(Nt, Ke) &&
          (delete Nt[Ke], R(Nt), sd(uc, Nt), await be.set(uc, Nt)),
          I(""),
          vt("已删除"));
      },
      qs = async (Ne) => {
        var Ke;
        if (((Pe.current = !1), !Qe || Ne == null || Ne < 0)) return;
        const Je = Array.isArray(
          (Ke = N == null ? void 0 : N[Qe]) == null ? void 0 : Ke.notes,
        )
          ? N[Qe].notes
          : [];
        if (Ne >= Je.length) return;
        const St = Je.filter((Nt, bt) => bt !== Ne),
          Be = {
            ...N,
            [Qe]: {
              ...((N == null ? void 0 : N[Qe]) || {}),
              updatedAt: new Date().toISOString(),
              notes: St,
            },
          };
        (w(Be),
          await be.set(a0, Be),
          B(null),
          C((Nt) => {
            const bt = St.length;
            return bt === 0
              ? 0
              : Nt === Ne
                ? Math.max(0, Math.min(Nt, bt - 1))
                : Nt > Ne
                  ? Nt - 1
                  : Nt;
          }),
          vt("已删除"));
      },
      Bs = (Ne) => {
        Ne == null ||
          Ne < 0 ||
          (Xe.current && window.clearTimeout(Xe.current),
          (Xe.current = window.setTimeout(() => {
            ((Pe.current = !0), B(Ne));
          }, 550)));
      },
      Js = () => {
        Xe.current && (window.clearTimeout(Xe.current), (Xe.current = null));
      },
      Xs = async (Ne) => {
        if (Ne != null && Ne.id) {
          if (ht.current) {
            ht.current = !1;
            return;
          }
          if (Qe) {
            const Je = `${String(Qe)}::${String(Ne.id)}`;
            try {
              const St = await be.get(uc, {}),
                Be =
                  St && typeof St == "object" && !Array.isArray(St)
                    ? St
                    : lu(uc, {}),
                Ke = Be && typeof Be == "object" ? Be[Je] : null;
              Ke &&
                typeof Ke == "object" &&
                (R((Nt) => ({ ...(Nt || {}), [Je]: Ke })),
                (Array.isArray(Ke.annotations) ||
                  Number.isFinite(Number(Ke.annotationChunkIndex))) &&
                  A((Nt) => {
                    var Ge;
                    const bt = Array.isArray(
                      (Ge = Nt == null ? void 0 : Nt[Qe]) == null
                        ? void 0
                        : Ge.books,
                    )
                      ? Nt[Qe].books
                      : [];
                    if (!bt.length) return Nt;
                    const ns = bt.map((Le) =>
                      Le.id === Ne.id
                        ? {
                            ...Le,
                            annotations: Array.isArray(Ke.annotations)
                              ? Ke.annotations
                              : Le.annotations,
                            annotationChunkIndex: Number.isFinite(
                              Number(Ke.annotationChunkIndex),
                            )
                              ? Math.max(
                                  0,
                                  Math.floor(Number(Ke.annotationChunkIndex)),
                                )
                              : Number(Le.annotationChunkIndex || 0),
                          }
                        : Le,
                    );
                    return {
                      ...(Nt || {}),
                      [Qe]: {
                        ...((Nt == null ? void 0 : Nt[Qe]) || {}),
                        books: ns,
                      },
                    };
                  }));
            } catch {}
          }
          (E(Ne.id), g("bookReader"));
        }
      },
      gn = (Ne) => {
        Ne &&
          (Xe.current && window.clearTimeout(Xe.current),
          (Xe.current = window.setTimeout(() => {
            ((ht.current = !0), I(Ne));
          }, 550)));
      },
      sn = () => {
        Xe.current && (window.clearTimeout(Xe.current), (Xe.current = null));
      },
      ln = (Ne) => {
        var ns;
        const Je = String((Ne == null ? void 0 : Ne.text) || "").trim(),
          St = String((Ne == null ? void 0 : Ne.textZh) || "").trim(),
          Be = String((Ne == null ? void 0 : Ne.note) || "").trim(),
          Ke = String((Ne == null ? void 0 : Ne.noteZh) || "").trim();
        (D(Je), P(St), G("primary"));
        const Nt = `${String((me == null ? void 0 : me.id) || "")}::${Je}`,
          bt = (ns = U == null ? void 0 : U[Qe]) == null ? void 0 : ns[Nt];
        if ((!Array.isArray(bt) || !bt.length) && Be && Qe) {
          const Ge = {
              ...((U == null ? void 0 : U[Qe]) || {}),
              [Nt]: [
                {
                  id: `comment-seed-${Date.now()}`,
                  name: (Oe == null ? void 0 : Oe.remark) || "读者",
                  role: "Critic",
                  date: "Now",
                  text: Be,
                  textZh: Ke,
                  replies: [],
                },
              ],
            },
            Le = { ...U, [Qe]: Ge };
          (ce(Le), be.set(i0, Le));
        }
        (O(!0), Y(""));
      },
      rn = () => {
        (O(!1), Y(""));
      },
      wt = ((cs = U == null ? void 0 : U[Qe]) == null ? void 0 : cs[Pt]) || [
        {
          id: "comment-1",
          name: (Oe == null ? void 0 : Oe.remark) || "读者",
          role: "Critic",
          date: "FEB. 22",
          text: "这种冷漠并非真正的无情，而是对繁琐社交礼仪的一种生理性排斥。",
          replies: [],
        },
      ],
      xs = 90,
      ot = 64,
      st = 24,
      $t = 32,
      Ft = 16,
      es = 2,
      At = 18,
      Jt = l.useMemo(() => {
        const Ne = Math.min(768, Z.width) - $t * 2,
          Je = Math.max(240, Ne),
          St = Math.max(240, Z.height - xs - ot - st * 2 - At);
        return { safeContentWidth: Je, availableHeight: St };
      }, [Z.height, Z.width]);
    (l.useEffect(() => {
      if (!re || h !== "bookReader" || !(me != null && me.id)) return;
      const Ne = Re.current !== me.id,
        Je = String((me == null ? void 0 : me.content) || "");
      if (!Je) {
        (le([0]), Ne && ((Re.current = me.id), V(0)));
        return;
      }
      const St = `${me.id}::${Je.length}::${Jt.safeContentWidth}::${Jt.availableHeight}`,
        Be = Ee.current[St],
        Ke = jt;
      if (Array.isArray(Be) && Be.length > 1) {
        if ((le(Be), Ne)) {
          const _e = Math.max(1, Be.length - 1),
            yt =
              Gt != null
                ? Math.max(0, Math.min(_e - 1, Gt))
                : Math.round(Ke * Math.max(0, _e - 1));
          ((Ie.current = !0),
            (Re.current = me.id),
            window.setTimeout(() => {
              V(yt);
            }, 60));
        }
        return;
      }
      const Nt = document.createElement("div");
      ((Nt.style.position = "fixed"),
        (Nt.style.left = "-99999px"),
        (Nt.style.top = "0"),
        (Nt.style.width = `${Jt.safeContentWidth}px`),
        (Nt.style.maxWidth = `${Jt.safeContentWidth}px`),
        (Nt.style.fontSize = `${Ft}px`),
        (Nt.style.lineHeight = String(es)),
        (Nt.style.textAlign = "justify"),
        (Nt.style.whiteSpace = "pre-wrap"),
        (Nt.style.wordBreak = "break-word"),
        (Nt.style.overflowWrap = "anywhere"),
        (Nt.style.visibility = "hidden"),
        (Nt.style.pointerEvents = "none"),
        document.body.appendChild(Nt));
      const bt = (_e) => {
          const yt = Je.length - _e;
          if (yt <= 0) return 0;
          let rt = 50,
            ze = Math.min(yt, Math.max(80, Math.min(2e3, yt))),
            lt = Math.min(rt, yt);
          for (
            ;
            ze < yt &&
            ((Nt.innerText = Je.substr(_e, ze)),
            !(Nt.scrollHeight > Jt.availableHeight));
          ) {
            const it = Math.min(yt, Math.max(ze + 1, ze * 2));
            if (it === ze) break;
            ze = it;
          }
          for (; rt <= ze; ) {
            const it = Math.floor((rt + ze) / 2);
            ((Nt.innerText = Je.substr(_e, it)),
              Nt.scrollHeight <= Jt.availableHeight
                ? ((lt = it), (rt = it + 1))
                : (ze = it - 1));
          }
          return Math.max(1, Math.min(yt, lt));
        },
        ns = [0];
      let Ge = 0,
        Le = 0;
      for (; Ge < Je.length && Le < 1e5; ) {
        const _e = bt(Ge),
          yt = Math.min(Je.length, Ge + Math.max(1, _e));
        if ((ns.push(yt), yt <= Ge)) break;
        ((Ge = yt), (Le += 1));
      }
      if (
        (document.body.removeChild(Nt),
        (Ee.current[St] = ns),
        He.current && window.clearTimeout(He.current),
        (He.current = window.setTimeout(() => {
          be.set(c5, Ee.current);
        }, 220)),
        le(ns),
        Ne)
      ) {
        const _e = Math.max(1, ns.length - 1),
          yt =
            Gt != null
              ? Math.max(0, Math.min(_e - 1, Gt))
              : Math.round(Ke * Math.max(0, _e - 1));
        ((Ie.current = !0),
          (Re.current = me.id),
          window.setTimeout(() => {
            V(yt);
          }, 60));
      }
    }, [
      re,
      h,
      me == null ? void 0 : me.id,
      me == null ? void 0 : me.content,
      Gt,
      jt,
      Jt.availableHeight,
      Jt.safeContentWidth,
    ]),
      l.useEffect(() => {
        if (h !== "bookReader") return;
        const Ne = Math.max(1, ne.length - 1);
        V((Je) => Math.max(0, Math.min(Je, Ne - 1)));
      }, [h, ne.length]),
      l.useEffect(() => {
        if (h !== "bookReader" || !(me != null && me.id)) return;
        if (Ie.current) {
          Ie.current = !1;
          return;
        }
        const Ne = Math.max(1, ne.length - 1),
          Je = Ne > 1 ? Math.max(0, Math.min(1, q / (Ne - 1))) : 0;
        Wt(me.id, Je, { pageIndex: q });
      }, [h, me == null ? void 0 : me.id, q, ne.length]),
      l.useEffect(() => {
        if (h !== "bookReader" || !(me != null && me.id)) return;
        const Ne = () => {
            const St = Math.max(1, ne.length - 1),
              Be = Math.max(0, Math.min(q, St - 1)),
              Ke = St > 1 ? Math.max(0, Math.min(1, Be / (St - 1))) : 0;
            Wt(me.id, Ke, { pageIndex: Be, immediate: !0 });
          },
          Je = () => {
            document.visibilityState === "hidden" && Ne();
          };
        return (
          window.addEventListener("pagehide", Ne),
          document.addEventListener("visibilitychange", Je),
          () => {
            (window.removeEventListener("pagehide", Ne),
              document.removeEventListener("visibilitychange", Je));
          }
        );
      }, [me == null ? void 0 : me.id, h, q, ne.length]),
      l.useEffect(() => {
        var Be;
        if (!z || !Qe || !Pt) return;
        const Ne = (Be = U == null ? void 0 : U[Qe]) == null ? void 0 : Be[Pt];
        if (Array.isArray(Ne) && Ne.length) return;
        const Je = { ...((U == null ? void 0 : U[Qe]) || {}), [Pt]: wt },
          St = { ...U, [Qe]: Je };
        (ce(St), be.set(i0, St));
      }, [z, Qe, Pt]),
      l.useEffect(() => {
        var St;
        if (h !== "detail") return;
        const Ne = ut.current;
        if (!Ne) return;
        if (x === "his") {
          window.requestAnimationFrame(() => {
            Ne.scrollTop = 0;
          });
          return;
        }
        const Je = Number(((St = _t.current) == null ? void 0 : St[Ye]) || 0);
        window.requestAnimationFrame(() => {
          Ne.scrollTop = Math.max(0, Je);
        });
      }, [h, Ye, Ze.length, Ue.length, x]),
      l.useEffect(() => {
        x !== "his" && B(null);
      }, [x]));
    const Vt = async (Ne) => {
        if (!Qe || !Pt) return;
        const Je = { ...((U == null ? void 0 : U[Qe]) || {}), [Pt]: Ne },
          St = { ...U, [Qe]: Je };
        (ce(St), await be.set(i0, St));
      },
      qt = async (Ne) => {
        const Je = String(oe[Ne] || "").trim();
        if (!Je) return;
        const St = wt.map((Be) =>
          Be.id === Ne
            ? {
                ...Be,
                replies: [
                  ...(Be.replies || []),
                  {
                    id: `reply-${Date.now()}`,
                    name: "Me",
                    role: "Author",
                    text: Je,
                    red: !1,
                    date: "Just Now",
                  },
                ],
              }
            : Be,
        );
        (await Vt(St),
          ee((Be) => ({ ...Be, [Ne]: "" })),
          Y(""),
          se((Be) => ({ ...Be, [Ne]: !0 })));
        try {
          const Be =
              ((s == null ? void 0 : s.contacts) || []).find(
                (lt) =>
                  String((lt == null ? void 0 : lt.id) || "") ===
                  String((Oe == null ? void 0 : Oe.id) || ""),
              ) || Oe,
            Ke = (typeof i == "function" ? i(Be) : null) || {},
            Nt =
              (Ke == null ? void 0 : Ke.realName) ||
              (Ke == null ? void 0 : Ke.name) ||
              "用户",
            bt = (Ke == null ? void 0 : Ke.settings) || "无",
            ns = (Be == null ? void 0 : Be.setting) || "无",
            Ge = fs(Be == null ? void 0 : Be.id),
            Le = St.find((lt) => lt.id === Ne),
            _e = gt(Be == null ? void 0 : Be.id),
            yt = [
              `原摘抄：${F}`,
              `原批注：${_e && J === "zh" ? (Le == null ? void 0 : Le.textZh) || (Le == null ? void 0 : Le.text) || "" : (Le == null ? void 0 : Le.text) || ""}`,
              ...((Le == null ? void 0 : Le.replies) || []).map(
                (lt) =>
                  `${lt.name || "Guest"}(${lt.role || ""})：${String(_e && J === "zh" ? lt.textZh || lt.text || "" : lt.text || "").trim()}`,
              ),
            ].join(`
`);
          let rt = {
            text: "确是如此。这种疏离感才是全书最迷人的地方。",
            textZh: "",
          };
          if (r != null && r.endpoint && r != null && r.key) {
            const lt = `你在进行“笔谈”回复。请基于上下文，以该角色语气给出一句自然、简短、贴合摘抄与讨论上下文的回复。

【角色名】${(Be == null ? void 0 : Be.remark) || (Be == null ? void 0 : Be.nickname) || (Be == null ? void 0 : Be.name) || "未知角色"}
【角色人设】${ns}
【绑定用户人设（仅该角色绑定，非全局）】${Nt}：${bt}
【最近单聊记录】
${Ge}
【本次讨论引用】
${yt}
【用户刚发送】${Je}
【该角色会话是否开启实时翻译】${_e ? "是" : "否"}

要求：
1) ${_e ? '仅输出 JSON，格式 {"text":"","textZh":""}；text 为外语原文，textZh 为中文翻译。' : "仅输出回复正文，不要解释。"}
2) 保持角色口吻，不超过60字。`;
            await ct({
              action: "discussion_reply_start",
              promptPreview: lt.slice(0, 300),
            });
            const it = await cr(
              r,
              {
                temperature:
                  typeof (r == null ? void 0 : r.temperature) == "number"
                    ? r.temperature
                    : 0.7,
                messages: [{ role: "user", content: lt }],
              },
              {
                addApiLog: o,
                logScene: "reading",
                logContactName:
                  (Be == null ? void 0 : Be.remark) ||
                  (Be == null ? void 0 : Be.nickname) ||
                  (Be == null ? void 0 : Be.name) ||
                  "",
              },
            );
            if (
              (await ct({
                action: "discussion_reply_success",
                responsePreview: String(it || "").slice(0, 300),
              }),
              _e)
            ) {
              const Ht = ae(it),
                is = String((Ht == null ? void 0 : Ht.text) || "").trim(),
                os = String((Ht == null ? void 0 : Ht.textZh) || "").trim();
              is && (rt = { text: is, textZh: os });
            } else {
              const Ht = String(it || "")
                .replace(/```[\s\S]*?```/g, "")
                .trim();
              Ht && (rt = { text: Ht, textZh: "" });
            }
          }
          const ze = St.map((lt) =>
            lt.id === Ne
              ? {
                  ...lt,
                  replies: [
                    ...(lt.replies || []),
                    {
                      id: `reply-role-${Date.now()}`,
                      name: (Oe == null ? void 0 : Oe.remark) || "Guest",
                      role: "Guest",
                      text: rt.text,
                      textZh: rt.textZh,
                      red: !0,
                      date: "Just Now",
                    },
                  ],
                }
              : lt,
          );
          await Vt(ze);
        } catch (Be) {
          await ct({
            action: "discussion_reply_error",
            error: String(
              (Be == null ? void 0 : Be.message) || Be || "unknown",
            ),
          });
        } finally {
          se((Ke) => ({ ...Ke, [Ne]: !1 }));
          const Be = tt.current;
          Be && Be.scrollTo({ top: Be.scrollHeight, behavior: "smooth" });
        }
      },
      Lt = async (Ne, Je, St) => {
        var ns;
        if (!Qe || !Ne) return;
        const Ke = (
            Array.isArray(
              (ns = _ == null ? void 0 : _[Qe]) == null ? void 0 : ns.books,
            )
              ? _[Qe].books
              : []
          ).map((Ge) =>
            Ge.id === Ne
              ? {
                  ...Ge,
                  annotations: Je,
                  annotationChunkIndex:
                    typeof St == "number"
                      ? St
                      : Number(Ge.annotationChunkIndex || 0),
                }
              : Ge,
          ),
          Nt = {
            ..._,
            [Qe]: {
              ...((_ == null ? void 0 : _[Qe]) || {}),
              updatedAt: new Date().toISOString(),
              books: Ke,
            },
          },
          bt = {
            ...(ye || {}),
            [`${String(Qe)}::${String(Ne)}`]: {
              annotations: Je,
              annotationChunkIndex: Math.max(0, Number(St || 0)),
              updatedAt: new Date().toISOString(),
            },
          };
        (A(Nt), R(bt), sd(uc, bt), await be.set(r0, Nt), await be.set(uc, bt));
      },
      Qt = async () => {
        if (!(!(me != null && me.id) || !Oe)) {
          if (!(r != null && r.endpoint) || !(r != null && r.key)) {
            vt("请先在设置里配置 API");
            return;
          }
          if (!ie) {
            (X(!0), vt("正在生成标注"));
            try {
              const Ne =
                  ((s == null ? void 0 : s.contacts) || []).find(
                    (ys) =>
                      String((ys == null ? void 0 : ys.id) || "") ===
                      String(Oe.id),
                  ) || Oe,
                Je = (typeof i == "function" ? i(Ne) : null) || {},
                St =
                  (Je == null ? void 0 : Je.realName) ||
                  (Je == null ? void 0 : Je.name) ||
                  "用户",
                Be = (Je == null ? void 0 : Je.settings) || "无",
                Ke = (Ne == null ? void 0 : Ne.setting) || "无",
                Nt = fs(Ne == null ? void 0 : Ne.id),
                bt = gt(Ne == null ? void 0 : Ne.id),
                ns = String((me == null ? void 0 : me.content) || ""),
                Ge = Math.max(1, (Array.isArray(ne) ? ne.length : 1) - 1),
                Le = Math.max(0, Math.min(Number(q || 0), Ge - 1)),
                _e = Number((ne == null ? void 0 : ne[Le]) ?? 0),
                yt = _e + Cy,
                rt = ns.slice(_e, yt);
              if (!rt.trim()) {
                (vt("已没有可生成的新段落"), X(!1));
                return;
              }
              const ze = `你是文学阅读批注助手。请读取给定上下文，输出10条“可被划线的原文句子 + 角色当下笔记”。

【角色名】${(Ne == null ? void 0 : Ne.remark) || (Ne == null ? void 0 : Ne.nickname) || (Ne == null ? void 0 : Ne.name) || "未知角色"}
【角色人设】${Ke}
【绑定用户人设（仅该角色绑定，非全局）】${St}：${Be}
【最近单聊记录】
${Nt}
【阅读定位】当前在第 ${Le + 1} 页，从该页起向后截取 ${Cy} 字
【小说内容（从当前页起向后${Cy}字窗口）】
${rt}
【该角色会话是否开启实时翻译】${bt ? "是" : "否"}

输出要求：
1) 仅输出 JSON。
2) ${bt ? '格式：{"annotations":[{"text":"","textZh":"","note":"","noteZh":""}]}，其中 text/note 为外语原文，textZh/noteZh 为中文翻译。' : '格式：{"annotations":[{"text":"","note":""}]}'}
3) 必须返回10条，text 必须是当前给定小说内容中可精确匹配的连续片段。
4) note 为角色口吻下的即时阅读批注，不要总结全文。`;
              await ct({
                action: "generate_annotations_start",
                pageIndex: Le,
                startOffset: _e,
                promptPreview: ze.slice(0, 300),
              });
              const lt = await cr(
                r,
                {
                  temperature:
                    typeof (r == null ? void 0 : r.temperature) == "number"
                      ? r.temperature
                      : 0.7,
                  messages: [{ role: "user", content: ze }],
                },
                {
                  addApiLog: o,
                  logScene: "reading",
                  logContactName:
                    (Ne == null ? void 0 : Ne.remark) ||
                    (Ne == null ? void 0 : Ne.nickname) ||
                    (Ne == null ? void 0 : Ne.name) ||
                    "",
                },
              );
              await ct({
                action: "generate_annotations_success",
                pageIndex: Le,
                startOffset: _e,
                responsePreview: String(lt || "").slice(0, 300),
              });
              const it = ae(lt),
                Ht = Array.isArray(it == null ? void 0 : it.annotations)
                  ? it.annotations
                      .map((ys, Vs) => ({
                        id: `anno-${Date.now()}-${Vs}`,
                        text: String(
                          (ys == null ? void 0 : ys.text) || "",
                        ).trim(),
                        textZh: String(
                          (ys == null ? void 0 : ys.textZh) || "",
                        ).trim(),
                        note: String(
                          (ys == null ? void 0 : ys.note) || "",
                        ).trim(),
                        noteZh: String(
                          (ys == null ? void 0 : ys.noteZh) || "",
                        ).trim(),
                      }))
                      .filter(
                        (ys) =>
                          ys.text &&
                          ys.note &&
                          String(me.content || "").includes(ys.text),
                      )
                      .slice(0, 10)
                  : [];
              if (Ht.length < 1) throw new Error("no annotations");
              const is = Array.isArray(me == null ? void 0 : me.annotations)
                  ? me.annotations
                  : [],
                os = is.length,
                as = new Set(
                  is.map(
                    (ys) =>
                      `${String(ys.text || "")}::${String(ys.note || "")}`,
                  ),
                ),
                vs = [...is];
              Ht.forEach((ys) => {
                const Vs = `${String(ys.text || "")}::${String(ys.note || "")}`;
                as.has(Vs) || (as.add(Vs), vs.push(ys));
              });
              const ts = vs.length - os;
              (await Lt(me.id, vs, _e), xe({ added: ts, returned: Ht.length }));
            } catch (Ne) {
              (await ct({
                action: "generate_annotations_error",
                error: String(
                  (Ne == null ? void 0 : Ne.message) || Ne || "unknown",
                ),
              }),
                vt("标注生成失败"));
            } finally {
              X(!1);
            }
          }
        }
      };
    if (h === "bookEditor")
      return e.jsxs("div", {
        className: "h-full bg-[#FDFBF7] text-[#1A1A1A]",
        children: [
          e.jsxs("header", {
            className:
              "pt-14 px-6 pb-4 flex items-center justify-between border-b border-[#A23A33]/10",
            children: [
              e.jsx("button", {
                type: "button",
                className: "w-11 h-11 flex items-center justify-center",
                onClick: () => {
                  (j(null), g("detail"));
                },
                "aria-label": "返回",
                children: e.jsx("div", {
                  className:
                    "w-2.5 h-2.5 border-l-[1.5px] border-b-[1.5px] border-[#A23A33] rotate-45",
                }),
              }),
              e.jsx("h2", {
                className: "text-sm tracking-widest",
                children: "编辑导入",
              }),
              e.jsx("button", {
                type: "button",
                className: "text-[11px] tracking-[0.2em] text-[#A23A33]",
                onClick: ss,
                children: "保存",
              }),
            ],
          }),
          e.jsxs("main", {
            className: "px-8 py-8 space-y-6",
            children: [
              e.jsx("input", {
                ref: $e,
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: bs,
              }),
              e.jsx("button", {
                type: "button",
                className:
                  "w-36 aspect-[3/4] border border-[#A23A33]/20 bg-white/70 flex items-center justify-center overflow-hidden",
                onClick: () => {
                  var Ne;
                  return (Ne = $e.current) == null ? void 0 : Ne.click();
                },
                children:
                  S != null && S.coverUrl
                    ? e.jsx("img", {
                        src: S.coverUrl,
                        alt: "cover",
                        className: "w-full h-full object-cover",
                      })
                    : e.jsx("span", {
                        className:
                          "text-[10px] tracking-[0.2em] text-[#A23A33]/70",
                        children: "上传封面",
                      }),
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsx("input", {
                    className:
                      "w-full bg-white border border-[#A23A33]/20 px-4 py-3 text-sm outline-none",
                    placeholder: "书名",
                    value: (S == null ? void 0 : S.title) || "",
                    onChange: (Ne) =>
                      j((Je) => ({ ...(Je || {}), title: Ne.target.value })),
                  }),
                  e.jsx("input", {
                    className:
                      "w-full bg-white border border-[#A23A33]/20 px-4 py-3 text-sm outline-none",
                    placeholder: "作者",
                    value: (S == null ? void 0 : S.author) || "",
                    onChange: (Ne) =>
                      j((Je) => ({ ...(Je || {}), author: Ne.target.value })),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    if (h === "bookReader" && me) {
      const Ne = Math.max(1, ne.length - 1),
        Je = Math.max(0, Math.min(q, Ne - 1)),
        St = String(me.content || ""),
        Be = ne[Je] ?? 0,
        Ke = ne[Je + 1] ?? St.length,
        Nt = St.slice(Be, Ke),
        bt = String(Nt || "")
          .replace(
            /\r\n/g,
            `
`,
          )
          .replace(
            /\r/g,
            `
`,
          ),
        ns = Pee(bt),
        Ge = Ne > 1 ? Je / (Ne - 1) : 0,
        Le = gt(Oe == null ? void 0 : Oe.id),
        _e = Array.isArray(me.annotations) ? me.annotations : [],
        yt = Ree(bt, _e),
        rt = (ze, lt, it, Ht) => {
          if (!ze) return ze;
          const is = yt
            .filter((vs) => vs.end > lt && vs.start < it)
            .map((vs) => ({
              ann: vs.ann,
              rs: Math.max(lt, vs.start),
              re: Math.min(it, vs.end),
            }))
            .filter((vs) => vs.re > vs.rs)
            .sort((vs, ts) => vs.rs - ts.rs);
          if (!is.length) return ze;
          let os = 0;
          const as = [];
          return (
            is.forEach((vs, ts) => {
              var pt;
              const ys = vs.rs - lt,
                Vs = vs.re - lt;
              (os < ys &&
                as.push(
                  e.jsx(
                    "span",
                    { children: ze.slice(os, ys) },
                    `${Ht}-plain-${ts}-${os}`,
                  ),
                ),
                as.push(
                  e.jsx(
                    "span",
                    {
                      className:
                        "border-b-[1.5px] border-[#A23A33] pb-[2px] cursor-pointer",
                      onClick: (qe) => {
                        (qe.stopPropagation(), ln(vs.ann));
                      },
                      children: ze.slice(ys, Vs),
                    },
                    `${Ht}-ann-${((pt = vs.ann) == null ? void 0 : pt.id) || ts}-${ys}`,
                  ),
                ),
                (os = Vs));
            }),
            os < ze.length &&
              as.push(
                e.jsx("span", { children: ze.slice(os) }, `${Ht}-tail-${os}`),
              ),
            as
          );
        };
      return e.jsxs("div", {
        className:
          "selection:bg-[#A23A33]/10 bg-[#FDFBF7] text-[#1A1A1A] h-full overflow-hidden",
        children: [
          e.jsx("header", {
            className:
              "fixed top-0 left-0 right-0 z-[100] h-[90px] pt-8 bg-[rgba(253,251,247,0.96)] backdrop-blur-[10px]",
            children: e.jsxs("div", {
              className: "px-6 flex justify-between items-center h-full",
              children: [
                e.jsx("div", {
                  className: "flex items-center",
                  children: e.jsx("button", {
                    onClick: async () => {
                      (await Wt(me.id, Ge, { immediate: !0, pageIndex: Je }),
                        g("detail"));
                    },
                    className: "w-11 h-11 flex items-center justify-center",
                    "aria-label": "返回",
                    children: e.jsx("div", {
                      className:
                        "w-2.5 h-2.5 border-l-[1.5px] border-b-[1.5px] border-[#A23A33] rotate-45",
                    }),
                  }),
                }),
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("p", {
                      className: "text-[9px] tracking-[0.4em] text-gray-400",
                      children: "READING NOW",
                    }),
                    e.jsx("h2", {
                      className: "text-sm font-semibold tracking-widest mt-1",
                      children: me.title,
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "w-11 h-11 flex items-center justify-center",
                  children: e.jsx("img", {
                    src: Oe == null ? void 0 : Oe.avatar,
                    alt: "Avatar",
                    className: `w-8 h-8 rounded-full border border-[#A23A33]/15 object-cover shrink-0 cursor-pointer ${ie ? "animate-spin" : ""}`,
                    style: { aspectRatio: "1 / 1" },
                    onClick: Qt,
                  }),
                }),
              ],
            }),
          }),
          e.jsx("main", {
            className:
              "max-w-screen-md mx-auto px-8 pt-[114px] pb-[88px] h-full overflow-hidden",
            children: e.jsx("article", {
              className:
                "leading-[2] text-[1rem] text-justify relative z-20 h-full overflow-hidden",
              children: ns.map((ze, lt) =>
                e.jsx(
                  "p",
                  {
                    className: "mb-3 indent-[2em]",
                    children: rt(ze.text, ze.start, ze.end, lt),
                  },
                  `${lt}-${ze.text.slice(0, 12)}`,
                ),
              ),
            }),
          }),
          e.jsx("footer", {
            className:
              "fixed bottom-0 left-0 right-0 z-[105] h-16 bg-[rgba(253,251,247,0.97)] backdrop-blur-[8px]",
            children: e.jsxs("div", {
              className:
                "max-w-screen-md mx-auto h-full px-6 flex items-center justify-between",
              children: [
                e.jsx("button", {
                  type: "button",
                  className: `text-[11px] tracking-[0.2em] ${Je <= 0 ? "text-[#A23A33]/35" : "text-[#A23A33]/85"}`,
                  onClick: () => V((ze) => Math.max(0, ze - 1)),
                  disabled: Je <= 0,
                  children: "上一页",
                }),
                e.jsxs("p", {
                  className: "text-[11px] tracking-[0.3em] text-[#A23A33]/85",
                  children: ["第 ", String(Je + 1), " / ", String(Ne), " 页"],
                }),
                e.jsx("button", {
                  type: "button",
                  className: `text-[11px] tracking-[0.2em] ${Je >= Ne - 1 ? "text-[#A23A33]/35" : "text-[#A23A33]/85"}`,
                  onClick: () => V((ze) => Math.min(Ne - 1, ze + 1)),
                  disabled: Je >= Ne - 1,
                  children: "下一页",
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: `fixed bottom-0 left-0 right-0 h-[85vh] bg-[rgba(255,255,255,0.98)] backdrop-blur-[30px] border-t border-[rgba(162,58,51,0.08)] rounded-t-[32px] shadow-[0_-20px_40px_rgba(0,0,0,0.05)] transition-transform duration-500 ${z ? "translate-y-0" : "translate-y-full"} z-[150]`,
            children: [
              e.jsxs("div", {
                className:
                  "px-10 pt-10 pb-4 flex justify-between items-baseline",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-2xl font-light italic",
                        children: "Marginalia",
                      }),
                      e.jsx("p", {
                        className:
                          "text-[8px] tracking-[0.3em] text-gray-400 mt-1 uppercase",
                        children: "辑录 · 笔谈",
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: rn,
                    className: "w-10 h-10 flex items-center justify-center",
                    "aria-label": "关闭",
                    children: e.jsxs("div", {
                      className: "relative w-4 h-4 rotate-45",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute w-full h-[1px] bg-gray-300 top-1/2",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute h-full w-[1px] bg-gray-300 left-1/2",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                ref: tt,
                className: "px-10 overflow-y-auto h-[calc(85vh-120px)] pb-32",
                children: [
                  e.jsx("div", {
                    className: "mb-10 mt-4 border-l border-gray-100 pl-4",
                    children: e.jsxs("p", {
                      className: `text-sm text-gray-400 italic ${Le ? "cursor-pointer" : ""}`,
                      onClick: () =>
                        Le && G((ze) => (ze === "primary" ? "zh" : "primary")),
                      children: ["“", (Le && J === "zh" && $) || F, "”"],
                    }),
                  }),
                  e.jsx("div", {
                    className: "space-y-8",
                    children: wt.map((ze) =>
                      e.jsxs(
                        "div",
                        {
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-start mb-2",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[8px] tracking-[0.1em] text-[#A23A33] border border-[#A23A33] px-1 py-[1px] mr-[6px] uppercase",
                                      children: ze.role,
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-bold tracking-widest uppercase",
                                      children: ze.name,
                                    }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: "text-[8px] text-gray-300",
                                  children: ze.date,
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: `text-[15px] leading-relaxed italic ${Le ? "cursor-pointer" : ""}`,
                              onClick: () =>
                                Le &&
                                G((lt) =>
                                  lt === "primary" ? "zh" : "primary",
                                ),
                              children:
                                (Le && J === "zh" && ze.textZh) || ze.text,
                            }),
                            e.jsxs("div", {
                              className: "mt-3",
                              children: [
                                (ze.replies || []).map((lt) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "relative mt-6 mb-2 ml-6",
                                      children: [
                                        lt.red
                                          ? e.jsx("span", {
                                              className:
                                                "absolute left-[-1rem] top-[-1.5rem] w-[1.5px] h-[calc(100%+1.5rem)] bg-[#A23A33]/40",
                                            })
                                          : e.jsx(e.Fragment, {
                                              children: e.jsx("span", {
                                                className:
                                                  "absolute left-[-1rem] top-[-1.5rem] w-[1rem] h-[2.2rem] border-l-[1.5px] border-b-[1.5px] border-[#E5E7EB] rounded-bl-[8px]",
                                              }),
                                            }),
                                        e.jsxs("div", {
                                          className:
                                            "flex justify-between items-center mb-1",
                                          children: [
                                            e.jsxs("div", {
                                              className: "flex items-center",
                                              children: [
                                                e.jsx("span", {
                                                  className: `text-[8px] tracking-[0.1em] border px-1 py-[1px] mr-[6px] uppercase ${(lt.red, "text-[#A23A33] border-[#A23A33]")}`,
                                                  children:
                                                    lt.role ||
                                                    (lt.red
                                                      ? "Critic"
                                                      : "Author"),
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[9px] tracking-widest uppercase text-gray-500",
                                                  children: lt.name,
                                                }),
                                              ],
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[8px] text-gray-300",
                                              children: lt.date,
                                            }),
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className: `text-sm text-gray-600 leading-relaxed italic ${Le ? "cursor-pointer" : ""}`,
                                          onClick: () =>
                                            Le &&
                                            G((it) =>
                                              it === "primary"
                                                ? "zh"
                                                : "primary",
                                            ),
                                          children:
                                            (Le && J === "zh" && lt.textZh) ||
                                            lt.text,
                                        }),
                                        e.jsx("div", {
                                          className: "flex justify-end mt-1",
                                          children: e.jsx("button", {
                                            type: "button",
                                            className:
                                              "text-[9px] tracking-[0.1em] text-[#A23A33] opacity-60 hover:opacity-100 uppercase",
                                            onClick: () => Y(ze.id),
                                            children: "Reply",
                                          }),
                                        }),
                                      ],
                                    },
                                    lt.id,
                                  ),
                                ),
                                (pe == null ? void 0 : pe[ze.id]) &&
                                  e.jsxs("div", {
                                    className: "relative mt-6 mb-2 ml-6",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "absolute left-[-1rem] top-[-1.5rem] w-[1.5px] h-[calc(100%+1.5rem)] bg-[#A23A33]/40",
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-[12px] text-gray-400 italic",
                                        children: [
                                          e.jsx("span", {
                                            className:
                                              "w-1.5 h-1.5 rounded-full bg-[#A23A33]/50 animate-bounce [animation-delay:-0.2s]",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "w-1.5 h-1.5 rounded-full bg-[#A23A33]/50 animate-bounce [animation-delay:-0.1s]",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "w-1.5 h-1.5 rounded-full bg-[#A23A33]/50 animate-bounce",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex justify-end mt-2",
                              children: e.jsx("button", {
                                type: "button",
                                className:
                                  "text-[10px] tracking-[0.1em] text-[#A23A33] opacity-60 hover:opacity-100 uppercase",
                                onClick: () => Y(ze.id),
                                children: "Reply",
                              }),
                            }),
                            H === ze.id &&
                              e.jsxs("div", {
                                className: "relative mt-4 ml-6",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "absolute left-[-1rem] top-[-1.5rem] w-[1rem] h-[2.2rem] border-l-[1.5px] border-b-[1.5px] border-[#E5E7EB] rounded-bl-[8px]",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                      e.jsx("input", {
                                        className:
                                          "bg-[#F9F9F9] border-[0.5px] border-[#EEE] rounded-[12px] px-4 py-3 text-[14px] outline-none focus:border-[#A23A33] focus:bg-white italic",
                                        placeholder: "书写你的见解...",
                                        value: oe[ze.id] || "",
                                        onChange: (lt) =>
                                          ee((it) => ({
                                            ...it,
                                            [ze.id]: lt.target.value,
                                          })),
                                        autoFocus: !0,
                                      }),
                                      e.jsxs("div", {
                                        className: "flex justify-end gap-4",
                                        children: [
                                          e.jsx("button", {
                                            type: "button",
                                            className:
                                              "text-[10px] tracking-[0.1em] text-gray-400 uppercase",
                                            onClick: () => Y(""),
                                            children: "Cancel",
                                          }),
                                          e.jsx("button", {
                                            type: "button",
                                            className:
                                              "text-[10px] tracking-[0.1em] text-[#A23A33] font-bold uppercase",
                                            onClick: () => qt(ze.id),
                                            children: "Send",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        },
                        ze.id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          je &&
            e.jsx("div", {
              className:
                "fixed inset-0 z-[200] bg-black/35 backdrop-blur-[2px] flex items-center justify-center px-6",
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "reading-annotation-success-title",
              onClick: () => xe(null),
              children: e.jsxs("div", {
                className:
                  "w-full max-w-sm rounded-2xl border border-[#A23A33]/15 bg-[#fffdf8] p-6 shadow-xl",
                onClick: (ze) => ze.stopPropagation(),
                children: [
                  e.jsx("p", {
                    id: "reading-annotation-success-title",
                    className:
                      "text-sm font-medium tracking-wide text-[#1A1A1A] mb-2",
                    children: "笔谈生成成功",
                  }),
                  e.jsxs("p", {
                    className: "text-[13px] text-stone-600 leading-relaxed",
                    children: [
                      "本次新增",
                      " ",
                      e.jsx("span", {
                        className: "font-semibold text-[#A23A33] tabular-nums",
                        children: je.added,
                      }),
                      " ",
                      "条笔谈。",
                      je.returned !== je.added
                        ? e.jsxs("span", {
                            className:
                              "block mt-2 text-[11px] text-stone-500 leading-snug",
                            children: [
                              "模型本轮返回 ",
                              je.returned,
                              " 条，与已有完全重复的未重复写入。",
                            ],
                          })
                        : null,
                    ],
                  }),
                  e.jsx("button", {
                    type: "button",
                    className:
                      "mt-5 w-full rounded-xl bg-[#A23A33] py-2.5 text-[12px] tracking-[0.2em] text-white active:opacity-90",
                    onClick: () => xe(null),
                    children: "知道了",
                  }),
                ],
              }),
            }),
        ],
      });
    }
    if (h === "noteDetail") {
      const Ne = v === "dark-red",
        Je = v === "pink",
        St = Ze[k] || {},
        Be = gt(Oe == null ? void 0 : Oe.id),
        Ke =
          Be && J === "zh"
            ? St.bookNameZh || St.bookName || ""
            : St.bookName || "",
        Nt =
          Be && J === "zh" ? St.authorZh || St.author || "" : St.author || "",
        bt = Be && J === "zh" ? St.quoteZh || St.quote || "" : St.quote || "",
        ns = Be && J === "zh" ? St.noteZh || St.note || "" : St.note || "",
        Ge = {
          vol: String(k + 1).padStart(3, "0"),
          date: St.readingDate || "",
          watermark: St.bookName || "",
          quotes: bt ? [bt] : [],
          note: ns,
          title: Ke,
          author: Nt,
          coverUrl: St.coverUrl || "",
        };
      return e.jsxs("div", {
        className: `note-detail-root h-full overflow-hidden flex justify-start items-center py-5 pl-0 pr-5 box-border ${Ne ? "theme-dark-red" : Je ? "theme-pink" : "theme-default"}`,
        children: [
          e.jsx("style", {
            children: `
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&family=Noto+Sans+SC:wght@300;400;500&display=swap');
          .note-detail-root {
            --bg-body: #f4f4f4;
            --book-cover: #939fa3;
            --book-paper: #ffffff;
            --card-bg: #fdfdfb;
            --text-heading: #1f2937;
            --text-main: #4b5563;
            --text-muted: #9ca3af;
            --text-light: #e5e7eb;
            --border-line: #e5e7eb;
            --accent: #939fa3;
            --shadow-color: rgba(0,0,0,0.15);
            --paper-edge: rgba(0,0,0,0.05);
            --grid-color: rgba(0,0,0,0.015);
            background-color: var(--bg-body);
            font-family: 'Noto Sans SC', sans-serif;
            margin: 0;
            min-height: 100%;
            transition: background-color 0.5s ease;
          }
          .note-detail-root.theme-dark-red {
            --bg-body: #1a1a1a; --book-cover: #5a1818; --book-paper: #222222; --card-bg: #2a2a2a;
            --text-heading: #f3f4f6; --text-main: #d1d5db; --text-muted: #888888;
            --text-light: #444444; --border-line: #3f3f3f; --accent: #8b0000;
            --shadow-color: rgba(0,0,0,0.5); --paper-edge: rgba(255,255,255,0.05); --grid-color: rgba(255,255,255,0.01);
          }
          .note-detail-root.theme-pink {
            --bg-body: #fdf2f4; --book-cover: #d9a0a8; --book-paper: #fff5f7; --card-bg: #fff0f3;
            --text-heading: #6b4c5a; --text-main: #8e707d; --text-muted: #b89ca8;
            --text-light: #f0d8e0; --border-line: #efd0d9; --accent: #d9a0a8;
            --shadow-color: rgba(217, 160, 168, 0.3); --paper-edge: rgba(0,0,0,0.03); --grid-color: rgba(217, 160, 168, 0.05);
          }
          .text-color-heading { color: var(--text-heading); transition: color 0.5s ease; }
          .text-color-main { color: var(--text-main); transition: color 0.5s ease; }
          .text-color-muted { color: var(--text-muted); transition: color 0.5s ease; }
          .text-color-light { color: var(--text-light); transition: color 0.5s ease; }
          .bg-color-paper { background-color: var(--book-paper); transition: background-color 0.5s ease; }
          .bg-color-card { background-color: var(--card-bg); transition: background-color 0.5s ease; }
          .border-color-light { border-color: var(--border-line); transition: border-color 0.5s ease; }
          .bg-color-border { background-color: var(--border-line); transition: background-color 0.5s ease; }
          .bottom-gradient { background: linear-gradient(to top, var(--book-paper), transparent); }
          .gradient-text {
            background-image: linear-gradient(120deg, var(--text-heading) 0%, var(--accent) 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; display: inline-block;
          }
          .book-frame {
            position: relative; width: 100%; max-width: 720px; background: var(--book-cover);
            padding: 12px 14px 12px 4px; border-radius: 4px 16px 16px 4px;
            box-shadow: 25px 25px 60px var(--shadow-color), inset -2px 0 5px rgba(0,0,0,0.1), inset 6px 0 12px rgba(255,255,255,0.15);
            border-left: 1px solid rgba(0,0,0,0.2); transition: all 0.5s ease;
            height: calc(100vh - 40px);
            max-height: calc(100% - 40px);
            box-sizing: border-box;
            overflow: visible;
          }
          .book-frame::after {
            content: ''; position: absolute; left: 3px; top: 0; bottom: 0; width: 4px;
            background: linear-gradient(to right, rgba(0,0,0,0.2), rgba(255,255,255,0.05), rgba(0,0,0,0.1)); z-index: 20; pointer-events: none;
          }
          .side-tab {
            position: absolute; right: -8px; width: 26px; height: 60px; border-radius: 0 6px 6px 0;
            box-shadow: 3px 2px 8px var(--shadow-color); z-index: 30; border-left: 2px solid rgba(255,255,255,0.2);
            transition: transform 0.3s ease; cursor: pointer;
          }
          .inner-page-container {
            background-color: var(--book-paper);
            background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
            background-size: 20px 20px; border-radius: 2px 4px 4px 2px; height: 100%;
            overflow: hidden; position: relative;
            box-shadow: -4px 0 15px rgba(0,0,0,0.08), 2px 0 0 0 var(--book-paper), 3px 0 0 0 var(--paper-edge), 5px 0 0 0 var(--book-paper), 6px 0 0 0 var(--paper-edge);
            transition: all 0.5s ease; margin-right: 10px;
          }
          .page-content-wrapper { height: 100%; overflow-y: auto; scrollbar-width: none; }
          .page-content-wrapper::-webkit-scrollbar { display: none; }
          .watermark {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg);
            font-family: serif; font-size: 8rem; color: var(--text-light); opacity: 0.08;
            white-space: nowrap; pointer-events: none; z-index: 0; user-select: none;
          }
          .content-padding { padding: 20px 40px 50px 0; position: relative; z-index: 10; }
          .header-section, .book-overview, .quotes-section, .summary-section, .note-title-section { padding-left: 40px; }
          .serif { font-family: 'Noto Serif SC', serif; }
          .custom-section-title { display: flex; align-items: center; gap: 12px; margin-bottom: 0.75rem; }
          .title-text { font-family: 'Noto Serif SC', serif; font-size: 16px; font-weight: 700; letter-spacing: 0.25em; }
          .title-dot { width: 4px; height: 4px; border-radius: 50%; background-color: var(--accent); }
          .title-line { flex: 1; height: 1px; background: linear-gradient(to right, var(--border-line), transparent); }
          .note-card {
            background-color: var(--card-bg); border: 1px solid var(--border-line); padding: 24px;
            display: block; box-shadow: 2px 5px 15px var(--shadow-color); border-radius: 4px;
            margin-right: -30px; position: relative; transform: rotate(-1.5deg); transition: all 0.4s ease;
          }
          .note-card:hover { transform: rotate(0deg) translateY(-2px); box-shadow: 4px 8px 25px var(--shadow-color); }
          .avatar-frame { padding: 3px; border: 1px dashed var(--text-muted); background: var(--book-paper); }
          .note-avatar-image { width: 80px; height: 97px; background: var(--border-line); display: flex; align-items: center; justify-content: center; opacity: 0.8; }
          .note-avatar-float { float: right; width: 90px; margin-left: 12px; margin-bottom: 8px; }
          .note-card-main::after { content: ''; display: block; clear: both; }
          .art-title-container { position: relative; display: inline-block; }
          .art-decoration { position: absolute; top: -10px; left: -15px; z-index: -1; font-size: 40px; font-family: serif; }
        .profile-card-body { height: 100%; display: flex; flex-direction: column; justify-content: center; padding-top: 56px; }
        `,
          }),
          e.jsxs("div", {
            className: "book-frame",
            children: [
              e.jsx("input", {
                ref: Se,
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: It,
              }),
              e.jsx("button", {
                className: "side-tab",
                onClick: () => b("default"),
                style: {
                  top: "100px",
                  background:
                    "linear-gradient(135deg, #606d80 0%, #4a5568 100%)",
                },
                title: "莫兰迪蓝",
                "aria-label": "莫兰迪蓝",
              }),
              e.jsx("button", {
                className: "side-tab",
                onClick: () => b("dark-red"),
                style: {
                  top: "170px",
                  background:
                    "linear-gradient(135deg, #5a1818 0%, #3a0f0f 100%)",
                },
                title: "经典黑红",
                "aria-label": "经典黑红",
              }),
              e.jsx("button", {
                className: "side-tab",
                onClick: () => b("pink"),
                style: {
                  top: "240px",
                  background:
                    "linear-gradient(135deg, #d9a0a8 0%, #c48b90 100%)",
                },
                title: "柔和粉色",
                "aria-label": "柔和粉色",
              }),
              e.jsxs("div", {
                className: "inner-page-container",
                children: [
                  e.jsx("div", {
                    className: "watermark",
                    children: Ge.watermark,
                  }),
                  e.jsx("div", {
                    className: "page-content-wrapper",
                    children: e.jsxs("div", {
                      className: "content-padding",
                      children: [
                        e.jsxs("header", {
                          className:
                            "header-section flex justify-between items-baseline mb-4",
                          children: [
                            e.jsxs("div", {
                              className: "art-title-container",
                              children: [
                                e.jsx("span", {
                                  className: "art-decoration text-color-light",
                                  children: "“",
                                }),
                                e.jsx("h1", {
                                  onClick: () => g("detail"),
                                  className:
                                    "text-3xl serif font-bold tracking-widest relative gradient-text cursor-pointer",
                                  children: "阅读笔记",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "text-right text-[10px] text-color-muted",
                              children: [
                                e.jsxs("p", {
                                  className: "italic",
                                  children: ["VOL. ", Ge.vol],
                                }),
                                e.jsx("p", { children: Ge.date }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("section", {
                          className:
                            "book-overview flex gap-8 mb-6 items-center",
                          children: [
                            e.jsx("div", {
                              className: "w-24 shrink-0",
                              children: e.jsx("button", {
                                className:
                                  "bg-color-paper p-1 border border-color-light shadow-md transform -rotate-1 w-full text-left",
                                onClick: () => {
                                  var Le;
                                  return (Le = Se.current) == null
                                    ? void 0
                                    : Le.click();
                                },
                                "aria-label": "上传封面",
                                children: e.jsx("div", {
                                  className:
                                    "aspect-[3/4] bg-color-card flex items-center justify-center overflow-hidden",
                                  children: Ge.coverUrl
                                    ? e.jsx("img", {
                                        src: Ge.coverUrl,
                                        alt: Ge.title || "cover",
                                        className: "w-full h-full object-cover",
                                      })
                                    : e.jsxs("div", {
                                        className: "text-center p-4",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-4 h-[1px] bg-color-border mx-auto mb-2",
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-[9px] serif font-bold text-color-muted leading-tight break-words",
                                            children:
                                              (Ge.title || "").slice(0, 12) ||
                                              "未命名",
                                          }),
                                        ],
                                      }),
                                }),
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col",
                              children: [
                                e.jsx("h2", {
                                  className: `serif text-lg font-bold text-color-heading ${Be ? "cursor-pointer" : ""}`,
                                  onClick: () =>
                                    Be &&
                                    G((Le) =>
                                      Le === "primary" ? "zh" : "primary",
                                    ),
                                  children: Ge.title ? `《${Ge.title}》` : "",
                                }),
                                e.jsx("p", {
                                  className: `text-xs text-color-muted mt-2 italic ${Be ? "cursor-pointer" : ""}`,
                                  onClick: () =>
                                    Be &&
                                    G((Le) =>
                                      Le === "primary" ? "zh" : "primary",
                                    ),
                                  children: Ge.author,
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("section", {
                          className: "quotes-section mb-4",
                          children: [
                            e.jsxs("div", {
                              className: "custom-section-title",
                              children: [
                                e.jsx("div", { className: "title-dot" }),
                                e.jsx("span", {
                                  className: "title-text gradient-text",
                                  children: "摘抄",
                                }),
                                e.jsx("div", { className: "title-line" }),
                              ],
                            }),
                            e.jsx("div", {
                              className: `serif text-sm leading-loose text-color-main pl-6 border-l-2 border-color-light ${Be ? "cursor-pointer" : ""}`,
                              onClick: () =>
                                Be &&
                                G((Le) =>
                                  Le === "primary" ? "zh" : "primary",
                                ),
                              children: Ge.quotes.map((Le, _e) =>
                                e.jsx(
                                  "p",
                                  { className: "mb-2", children: Le },
                                  `q-${_e}`,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("section", {
                          className: "mb-4",
                          children: [
                            e.jsx("div", {
                              className: "note-title-section",
                              children: e.jsxs("div", {
                                className: "custom-section-title",
                                children: [
                                  e.jsx("div", { className: "title-dot" }),
                                  e.jsx("span", {
                                    className: "title-text gradient-text",
                                    children: "笔记",
                                  }),
                                  e.jsx("div", { className: "title-line" }),
                                ],
                              }),
                            }),
                            e.jsx("div", {
                              className: "note-card",
                              children: e.jsxs("div", {
                                className:
                                  "note-card-main serif text-sm leading-loose text-color-main relative pr-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "absolute -top-4 -left-2 text-6xl text-color-light opacity-40 font-serif leading-none",
                                    children: '"',
                                  }),
                                  e.jsx("div", {
                                    className: "note-avatar-float",
                                    children: e.jsx("div", {
                                      className: "avatar-frame mt-2 z-10",
                                      children: e.jsx("div", {
                                        className: "note-avatar-image",
                                        children:
                                          Oe != null && Oe.avatar
                                            ? e.jsx("img", {
                                                src: Oe.avatar,
                                                alt:
                                                  (Oe == null
                                                    ? void 0
                                                    : Oe.remark) || "",
                                                className:
                                                  "w-full h-full object-cover",
                                              })
                                            : e.jsxs("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                className: "text-color-muted",
                                                strokeWidth: "1.2",
                                                children: [
                                                  e.jsx("path", {
                                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
                                                  }),
                                                  e.jsx("circle", {
                                                    cx: "12",
                                                    cy: "7",
                                                    r: "4",
                                                  }),
                                                ],
                                              }),
                                      }),
                                    }),
                                  }),
                                  e.jsx("p", {
                                    className: `indent-8 z-10 relative ${Be ? "cursor-pointer" : ""}`,
                                    onClick: () =>
                                      Be &&
                                      G((Le) =>
                                        Le === "primary" ? "zh" : "primary",
                                      ),
                                    children: Ge.note,
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-right mt-4 pr-1 text-[11px] italic text-color-muted",
                                    children: [
                                      "by ",
                                      (Oe == null ? void 0 : Oe.remark) || "",
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
                  e.jsx("div", {
                    className:
                      "sticky bottom-0 left-0 right-0 h-16 bottom-gradient pointer-events-none",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    if (h === "detail") {
      const Ne = x === "mine";
      return e.jsxs("div", {
        ref: ut,
        className:
          "read-level-two h-full overflow-y-auto overflow-x-hidden bg-[#FDFBF7] text-[#1A1A1A] pb-40",
        onScroll: (Je) => {
          x !== "his" && (_t.current[Ye] = Je.currentTarget.scrollTop);
        },
        children: [
          e.jsx("style", {
            children: `
          @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;400;600;900&family=Noto+Sans+SC:wght@100;300;400;500&display=swap');
          .read-level-two {
            --paper: #FDFBF7;
            --accent: #A23A33;
            --ink: #1A1A1A;
            --line: rgba(162, 58, 51, 0.15);
            --shadow-subtle: rgba(0, 0, 0, 0.04);
            font-family: 'Noto Sans SC', sans-serif;
            -webkit-font-smoothing: antialiased;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .read-level-two::-webkit-scrollbar { display: none; }
          .read-level-two .serif { font-family: 'Noto Serif SC', serif; }
          .read-level-two .safe-top-extra { padding-top: calc(env(safe-area-inset-top, 44px) + 32px); }
          .read-level-two .glass-nav {
            background: linear-gradient(to bottom, rgba(253, 251, 247, 0.98) 0%, rgba(253, 251, 247, 0.95) 40%, rgba(253, 251, 247, 0) 100%);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
            pointer-events: none;
          }
          .read-level-two .nav-content { pointer-events: auto; }
          .read-level-two .art-frame {
            background: #FFFFFF;
            padding: 8px;
            box-shadow: 0 2px 4px var(--shadow-subtle), 0 12px 28px -8px rgba(0, 0, 0, 0.08);
            transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .read-level-two .note-card {
            background: #FFFFFF;
            position: relative;
            border: 1px solid rgba(0,0,0,0.03);
            box-shadow: -8px 8px 0px rgba(162, 58, 51, 0.08);
            transition: all 0.5s ease;
          }
          .read-level-two .note-card::after {
            content: '';
            position: absolute;
            top: 0; right: 0; width: 3px; height: 100%;
            background: var(--accent);
          }
          .read-level-two .tab-btn {
            position: relative;
            letter-spacing: 0.3em;
            transition: all 0.4s ease;
          }
          .read-level-two .tab-btn.active { color: var(--accent); font-weight: 500; }
          .read-level-two .tab-btn::after {
            content: '';
            position: absolute; bottom: -8px; left: 50%;
            width: 0; height: 1.5px; background: var(--accent);
            transform: translateX(-50%);
            transition: width 0.4s ease;
          }
          .read-level-two .tab-btn.active::after { width: 12px; }
          .read-level-two .btn-custom { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; }
          .read-level-two .btn-back-line {
            width: 11px; height: 11px;
            border-left: 1.5px solid var(--accent);
            border-bottom: 1.5px solid var(--accent);
            transform: rotate(45deg);
          }
          .read-level-two .watermark-num {
            position: absolute;
            font-size: 8rem;
            color: var(--accent);
            opacity: 0.04;
            line-height: 1;
            z-index: -1;
            font-weight: 600;
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .read-level-two .reveal { animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        `,
          }),
          e.jsx("header", {
            className: "safe-top-extra fixed top-0 w-full z-50 glass-nav h-40",
            children: e.jsxs("div", {
              className: "nav-content px-6 flex justify-between items-center",
              children: [
                e.jsx("button", {
                  onClick: () => {
                    g("list");
                  },
                  className: "btn-custom -ml-2",
                  "aria-label": "返回",
                  children: e.jsx("div", { className: "btn-back-line" }),
                }),
                e.jsxs("div", {
                  className: "flex space-x-12 ml-2",
                  children: [
                    e.jsx("button", {
                      onClick: () => y("mine"),
                      className: `tab-btn text-[11px] ${Ne ? "active" : "text-gray-400"}`,
                      children: "珍藏",
                    }),
                    e.jsx("button", {
                      onClick: () => y("his"),
                      className: `tab-btn text-[11px] ${Ne ? "text-gray-400" : "active"}`,
                      children: "推荐",
                    }),
                  ],
                }),
                Ne
                  ? e.jsx("button", {
                      onClick: () => {
                        var Je;
                        return (Je = Fe.current) == null ? void 0 : Je.click();
                      },
                      className: "btn-custom -mr-1",
                      "aria-label": "导入",
                      children: e.jsxs("div", {
                        className: "relative w-4 h-4",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute w-full h-[1.5px] bg-[#A23A33] top-1/2 -translate-y-1/2",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute h-full w-[1.5px] bg-[#A23A33] left-1/2 -translate-x-1/2",
                          }),
                        ],
                      }),
                    })
                  : e.jsx("button", {
                      onClick: nt,
                      className: "btn-custom -mr-1",
                      "aria-label": "刷新",
                      disabled: Te,
                      children: e.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        className: `w-4 h-4 text-[#A23A33] ${Te ? "animate-spin" : ""}`,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.8",
                        children: [
                          e.jsx("path", { d: "M20 12a8 8 0 1 1-2.34-5.66" }),
                          e.jsx("path", { d: "M20 4v6h-6" }),
                        ],
                      }),
                    }),
              ],
            }),
          }),
          e.jsx("section", {
            className: "mt-48 px-10 mb-16 relative reveal",
            children: e.jsxs("div", {
              className: "relative pl-6 py-2",
              children: [
                e.jsx("div", {
                  className:
                    "absolute left-0 top-0 bottom-0 w-[2px] bg-[#A23A33]",
                }),
                e.jsx("span", {
                  className:
                    "block text-[9px] tracking-[0.4em] text-[#A23A33] mb-3 font-light uppercase",
                  children: Ne ? "Collection · 04" : "Reading Notes",
                }),
                e.jsx("h1", {
                  className: "serif text-4xl font-normal tracking-[0.05em]",
                  children: Ne ? "私人辑录" : "阅读笔记",
                }),
              ],
            }),
          }),
          e.jsxs("main", {
            className: Ne ? "px-8 space-y-32" : "px-8 space-y-12",
            children: [
              e.jsx("input", {
                ref: Fe,
                type: "file",
                accept: ".txt,text/plain",
                className: "hidden",
                onChange: Xt,
              }),
              Ne
                ? (Ue.length ? Ue : []).map((Je, St) => {
                    const Be = St % 2 === 0,
                      Ke = String(St + 1).padStart(2, "0");
                    return e.jsxs(
                      "article",
                      {
                        className: `relative flex flex-col ${Be ? "items-start" : "items-end"} reveal`,
                        style: { animationDelay: `${St * 0.1}s` },
                        children: [
                          e.jsx("div", {
                            className: `watermark-num serif ${Be ? "-left-4 -top-8" : "-right-4 -top-8"}`,
                            children: Ke,
                          }),
                          e.jsx("div", {
                            className: `relative w-[75%] z-10 ${Be ? "ml-4" : "mr-4"}`,
                            children: e.jsx("div", {
                              className:
                                "art-frame aspect-[3/4] cursor-pointer",
                              onMouseDown: () => gn(Je.id),
                              onMouseUp: sn,
                              onMouseLeave: sn,
                              onTouchStart: () => gn(Je.id),
                              onTouchEnd: sn,
                              onTouchCancel: sn,
                              onClick: () => Xs(Je),
                              children: e.jsx("div", {
                                className:
                                  "w-full h-full relative overflow-hidden",
                                children: Je.coverUrl
                                  ? e.jsx("img", {
                                      src: Je.coverUrl,
                                      className:
                                        "absolute inset-0 w-full h-full object-cover",
                                      alt: "cover",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.2em] text-[#A23A33]/50",
                                      children: "无封面",
                                    }),
                              }),
                            }),
                          }),
                          e.jsxs("div", {
                            className: `w-[85%] bg-white/85 backdrop-blur-md p-6 shadow-sm border border-[#A23A33]/10 z-20 ${Be ? "ml-12 -mt-16 text-left" : "mr-12 -mt-16 text-right"}`,
                            children: [
                              e.jsxs("div", {
                                className: `flex items-center ${Be ? "justify-start" : "justify-end"} gap-3 mb-4`,
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] tracking-[0.2em] text-gray-400 uppercase font-light",
                                    children: String(Je.importedAt || "").slice(
                                      0,
                                      10,
                                    ),
                                  }),
                                  e.jsx("div", {
                                    className: "w-4 h-[1px] bg-[#A23A33]/30",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] tracking-[0.2em] text-[#A23A33] uppercase",
                                    children: "TXT",
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                className:
                                  "serif text-[1.4rem] font-medium mb-1 leading-snug cursor-pointer",
                                onMouseDown: () => gn(Je.id),
                                onMouseUp: sn,
                                onMouseLeave: sn,
                                onTouchStart: () => gn(Je.id),
                                onTouchEnd: sn,
                                onTouchCancel: sn,
                                onClick: () => Xs(Je),
                                children: Je.title,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[11px] tracking-widest text-gray-500 font-light mt-2",
                                children: Je.author || "佚名",
                              }),
                            ],
                          }),
                        ],
                      },
                      `${Je.title}-${St}`,
                    );
                  })
                : Ze.map((Je, St) => {
                    const Be = gt(Oe == null ? void 0 : Oe.id),
                      Ke = Be ? Je.bookName || Je.bookNameZh : Je.bookName,
                      Nt = Be ? Je.author || Je.authorZh : Je.author,
                      bt = Be ? Je.quote || Je.quoteZh : Je.quote;
                    return e.jsxs(
                      "div",
                      {
                        className: "note-card p-6 reveal cursor-pointer",
                        style: { animationDelay: `${St * 0.1}s` },
                        onMouseDown: () => Bs(St),
                        onMouseUp: Js,
                        onMouseLeave: Js,
                        onTouchStart: () => Bs(St),
                        onTouchEnd: Js,
                        onTouchCancel: Js,
                        onClick: () => {
                          if (Pe.current) {
                            Pe.current = !1;
                            return;
                          }
                          (C(St), G("primary"), g("noteDetail"));
                        },
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-start mb-6",
                            children: [
                              e.jsx("div", {
                                className:
                                  "px-2 py-1 bg-[#A23A33]/5 text-[#A23A33] text-[8px] tracking-widest",
                                children: Je.readingDate,
                              }),
                              e.jsxs("div", {
                                className: "text-right",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] font-medium text-gray-800 leading-none mb-1",
                                    children: Ke,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[8px] text-gray-400 scale-90 origin-right italic",
                                    children: Nt,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "serif text-[13px] leading-relaxed text-gray-600 mb-6 py-4 border-y border-dashed border-gray-100",
                            children: ["“", bt, "”"],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[9px] text-[#A23A33]/60 tracking-widest font-light",
                                children: Je.chapter,
                              }),
                              e.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-1 h-1 rounded-full bg-gray-200",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-1 h-1 rounded-full bg-gray-200",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      `${Je.bookName}-${St}`,
                    );
                  }),
              Ne &&
                Ue.length === 0 &&
                e.jsx("div", {
                  className:
                    "px-4 py-20 text-center text-[11px] tracking-[0.25em] text-[#A23A33]/60",
                  children: "暂无导入书籍",
                }),
            ],
          }),
          T &&
            e.jsx("div", {
              className:
                "fixed inset-0 z-[120] bg-black/30 backdrop-blur-[2px] flex items-center justify-center px-6",
              children: e.jsxs("div", {
                className:
                  "w-full max-w-md bg-white rounded-2xl border border-[#A23A33]/10 p-5 shadow-xl",
                children: [
                  e.jsx("p", {
                    className: "text-sm tracking-[0.08em] text-[#1A1A1A] mb-5",
                    children: "删除这本书？删除后不可恢复。",
                  }),
                  e.jsxs("div", {
                    className: "flex justify-end gap-4",
                    children: [
                      e.jsx("button", {
                        className: "text-[11px] tracking-[0.2em] text-gray-400",
                        onClick: () => I(""),
                        children: "取消",
                      }),
                      e.jsx("button", {
                        className:
                          "text-[11px] tracking-[0.2em] text-[#A23A33]",
                        onClick: () => _s(T),
                        children: "删除",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          L != null &&
            e.jsx("div", {
              className:
                "fixed inset-0 z-[120] bg-black/30 backdrop-blur-[2px] flex items-center justify-center px-6",
              children: e.jsxs("div", {
                className:
                  "w-full max-w-md bg-white rounded-2xl border border-[#A23A33]/10 p-5 shadow-xl",
                children: [
                  e.jsx("p", {
                    className: "text-sm tracking-[0.08em] text-[#1A1A1A] mb-5",
                    children: "删除这条读书笔记？删除后不可恢复。",
                  }),
                  e.jsxs("div", {
                    className: "flex justify-end gap-4",
                    children: [
                      e.jsx("button", {
                        className: "text-[11px] tracking-[0.2em] text-gray-400",
                        onClick: () => {
                          ((Pe.current = !1), B(null));
                        },
                        children: "取消",
                      }),
                      e.jsx("button", {
                        className:
                          "text-[11px] tracking-[0.2em] text-[#A23A33]",
                        onClick: () => qs(L),
                        children: "删除",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          e.jsx("div", {
            className: `fixed bottom-12 left-1/2 -translate-x-1/2 px-8 py-3 bg-[#1A1A1A]/90 backdrop-blur-md text-white rounded-sm text-[10px] tracking-[0.4em] transition-all duration-700 z-[100] pointer-events-none shadow-xl border border-white/10 ${ve ? "opacity-100" : "opacity-0"}`,
            children: we || "数据同步中",
          }),
        ],
      });
    }
    return e.jsxs("div", {
      id: "readCharSelectView",
      children: [
        e.jsx("style", {
          children: `
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Inter:wght@200;300;400;500&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        :root {
          --orbit-bg: #F8F8F8;
          --orbit-ink: #111111;
          --orbit-accent: #B05E59;
          --orbit-paper: #FFFEFA;
        }
        .serif-display { font-family: 'Italiana', serif; }
        .serif-text { font-family: 'Cormorant Garamond', serif; }
        .mono { font-family: 'Space Mono', monospace; }
        #readCharSelectView {
          background-color: var(--orbit-bg) !important;
          color: var(--orbit-ink);
          font-family: 'Inter', sans-serif;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        @media (min-width: 768px) { #readCharSelectView { flex-direction: row; } }
        .bg-watermark {
          position: absolute; top: 50%; left: 60%; transform: translate(-50%, -50%);
          font-size: 25vh; font-family: 'Italiana', serif; color: rgba(0,0,0,0.02); pointer-events: none; z-index: 0; line-height: 0.8;
        }
        .nav-item {
          position: relative; padding: 1rem 0; cursor: pointer; transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          opacity: 0.4; display: flex; align-items: center; gap: 1rem; white-space: nowrap; z-index: 50;
        }
        .nav-item.active { opacity: 1; transform: translateX(15px); color: var(--orbit-accent); }
        .nav-line { width: 0px; height: 1px; background: var(--orbit-ink); transition: width 0.4s ease; }
        .nav-item.active .nav-line { width: 30px; background: var(--orbit-accent); }
        .gallery-stage { perspective: 1000px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; position: relative; }
        .profile-card {
          width: 85%; max-width: 320px; height: auto; min-height: 460px;
          background: var(--orbit-paper); box-shadow: 0 10px 30px -5px rgba(0,0,0,0.1);
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) translateX(40px) rotateY(-5deg);
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1); opacity: 0; pointer-events: none;
          display: flex; flex-direction: column; padding: 2rem 1.5rem; border-radius: 4px;
        }
        .profile-card.active { opacity: 1; transform: translate(-50%, -50%) translateX(0) rotateY(0); z-index: 10; pointer-events: auto; }
        .profile-card.exit { opacity: 0; transform: translate(-50%, -50%) translateX(-30px) scale(0.95); }
        .bookmark {
          position: absolute; top: 0; right: 1.5rem; width: 20px; height: 45px; background: var(--orbit-accent); z-index: 20;
        }
        .bookmark::after {
          content: ''; position: absolute; bottom: -8px; left: 0;
          border-left: 10px solid var(--orbit-accent); border-right: 10px solid var(--orbit-accent); border-bottom: 8px solid transparent;
        }
        .quote-text {
          display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical;
          overflow: hidden; white-space: normal; word-wrap: break-word;
          line-height: 1.4; color: black; font-size: 1.15rem;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `,
        }),
        e.jsx("div", {
          className: "bg-watermark",
          id: "bg-index",
          children: De,
        }),
        e.jsx("aside", {
          className:
            "order-2 md:order-1 w-full md:w-64 flex-shrink-0 bg-transparent z-30 flex flex-col justify-center h-24 md:h-full border-black/5",
          children: e.jsx("div", {
            className:
              "flex flex-row md:flex-col overflow-x-auto items-center md:items-start px-6 py-0 md:pl-10 gap-8 md:gap-4 no-scrollbar h-full md:h-auto",
            children: at.map((Ne, Je) =>
              e.jsxs(
                "div",
                {
                  className: `nav-item ${Je === u ? "active" : ""}`,
                  onClick: () => ft(Je),
                  children: [
                    e.jsx("div", { className: "nav-line" }),
                    e.jsx("span", {
                      className: "mono text-xs font-bold",
                      children: `0${Je + 1}`,
                    }),
                    e.jsx("span", {
                      className: "serif-display text-xl md:text-2xl",
                      children: Ne.remark,
                    }),
                  ],
                },
                `${Ne.id}-${Je}`,
              ),
            ),
          }),
        }),
        e.jsxs("main", {
          className:
            "order-1 md:order-2 flex-1 h-full relative z-10 overflow-hidden",
          children: [
            e.jsx("div", {
              className: "absolute top-6 left-6 hidden md:block z-20",
              children: e.jsx("h2", {
                className:
                  "serif-display text-2xl italic tracking-wider text-gray-400",
                children: "Archive.",
              }),
            }),
            e.jsx("div", {
              className: "gallery-stage",
              children: at.map((Ne, Je) => {
                var Nt;
                const St =
                  (Nt =
                    N == null
                      ? void 0
                      : N[String((Ne == null ? void 0 : Ne.id) || "")]) == null
                    ? void 0
                    : Nt.notes;
                let Be = I1[Je % I1.length];
                if (Array.isArray(St) && St.length > 0) {
                  const bt =
                      (Oee(Ne == null ? void 0 : Ne.id) + ge + Je) % St.length,