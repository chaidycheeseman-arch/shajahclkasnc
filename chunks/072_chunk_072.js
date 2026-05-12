            contact: U,
            effectiveUser: r,
            messagesToApi: [{ sender: "me", text: Ce }],
            addApiLog: a,
            scene: "chat",
          });
          let De = null;
          try {
            const at = Re.match(/\{[\s\S]*\}/);
            at ? (De = JSON.parse(at[0])) : (De = JSON.parse(Re));
          } catch {
            De = { text: Re, isEnd: !1 };
          }
          return De;
        } catch {
          return {
            text: "（时空通讯受到干扰，只能听到沙沙的杂音... 请重试）",
            isEnd: !1,
          };
        }
      },
      ge = async (Pe) => {
        z(!0);
        try {
          const ut = `
用户写下了这段心事/故事，试图将其具象化为一个物品丢入时空缝隙：
"${Pe}"

请根据这段文字的情感色彩和内容，将其转化为一个具体的物品或抽象的概念。
例如：
- 悲伤的故事 -> "未干的泪痕" 或 "蓝色的雨云"
- 愤怒的故事 -> "燃烧的荆棘"
- 怀旧的故事 -> "生锈的八音盒"

要求生成严格的 JSON 格式数据（不要包含Markdown代码块标记，只返回纯JSON）：
{
  "name": "物品/概念名称",
  "icon": "emoji",
  "rarity": "N" | "R" | "SR",
  "description": "对这个具象化物品的唯美描述",
  "value": number, // 给予用户的回馈金币 (10-100)
  "reply": "系统对这次转化的简短评价（如：'这是一个沉重的故事，时空因它而颤抖。'）"
}
`,
            _t = await pc({
              apiConfig: n,
              contact: U,
              effectiveUser: r,
              messagesToApi: [{ sender: "me", text: ut }],
              addApiLog: a,
              scene: "chat",
            });
          let Ee = null;
          try {
            const fe = _t.match(/\{[\s\S]*\}/);
            fe ? (Ee = JSON.parse(fe[0])) : (Ee = JSON.parse(_t));
          } catch {
            Ee = {
              name: "模糊的思绪",
              icon: "💭",
              rarity: "N",
              description: "一段无法被完全解析的记忆碎片。",
              value: 15,
              reply: "你的声音已消散在风中。",
            };
          }
          return (L((fe) => fe + (Ee.value || 10)), { success: !0, data: Ee });
        } catch {
          const _t = {
            name: "未寄出的信",
            icon: "📫",
            rarity: "N",
            description:
              "由于某种阻力，你的心事没能传达给时空彼岸，只留下了这一纸空文。",
            value: 5,
            reply: "信号丢失... 请稍后再试。",
          };
          return (L((Ee) => Ee + _t.value), { success: !0, data: _t });
        } finally {
          z(!1);
        }
      },
      J = async (Pe) => {},
      G = async () => {
        var Pe;
        M(!0);
        try {
          const ut = y || [],
            _t = 3 + Math.floor(Math.random() * 3),
            Ee = [],
            fe = Date.now();
          for (let He = 0; He < _t; He++) {
            const Ie =
              ut.length > 0 ? ut[Math.floor(Math.random() * ut.length)] : null;
            let Ce = "",
              Re = "";
            const De = (Ie && (Ie.nickname || Ie.name)) || "某人";
            if (n != null && n.endpoint && n != null && n.key && Ie) {
              const vt = `请以角色「${Ie.nickname || Ie.name}」的身份，写一封简短的私信给用户（收信人）。要求：
1. 第一行只写信的简短标题（5～15 字），例如「春日小札」「一封迟到的回信」。
2. 空一行后写正文，50～150 字，温暖、私人化，像真的在写信。只输出信正文，不要称呼、不要「此致敬礼」等套话，可多段、用换行分隔。`;
              try {
                const Oe = await pc({
                  apiConfig: n,
                  contact: Ie,
                  effectiveUser: {},
                  messagesToApi: [
                    {
                      sender: "me",
                      text: vt,
                      timestamp: new Date().toISOString(),
                    },
                  ],
                  addApiLog: a,
                  scene: "system_generation",
                });
                if (Oe && typeof Oe == "string") {
                  const Qe = Oe.trim().replace(
                    /\n{3,}/g,
                    `

`,
                  );
                  if (
                    Qe &&
                    Qe !== "请先在设置中配置API。" &&
                    Qe !== "抱歉，我暂时无法回复。"
                  ) {
                    const Ye = Qe.indexOf(`

`);
                    if (Ye > 0)
                      ((Re = Qe.slice(0, Ye).trim().slice(0, 30)),
                        (Ce = Qe.slice(Ye + 2).trim()));
                    else {
                      const Ze =
                        ((Pe = Qe.split(`
`)[0]) == null
                          ? void 0
                          : Pe.trim()) || "";
                      Ze.length <= 20
                        ? ((Re = Ze),
                          (Ce = Qe.slice(Ze.length).trim().replace(/^\n+/, "")))
                        : ((Ce = Qe),
                          (Re =
                            Qe.slice(0, 15).trim() +
                            (Qe.length > 15 ? "…" : "")));
                    }
                  }
                }
              } catch {}
            }
            (Ce || (Ce = "展信佳。最近天气不错，愿你一切顺心。"),
              Re ||
                (Re =
                  Ce.slice(0, 12).trim() + (Ce.length > 12 ? "…" : "") ||
                  "无题"));
            const at = new Date(),
              ft = at.getMonth() + 1 + "月" + at.getDate() + "日";
            Ee.push({
              id: "letter_" + fe + "_" + He,
              title: Re,
              content: Ce,
              signature: De,
              lunarDate: ft,
              date: at.toLocaleDateString("zh-CN"),
              fromContactId: Ie == null ? void 0 : Ie.id,
            });
          }
          Ee.length > 0 &&
            (_((He) => {
              const Ie = [
                ...Ee,
                ...He.filter((Ce) => !Ee.some((Re) => Re.id === Ce.id)),
              ];
              return (Sa("inboxLetters", Ie), Ie);
            }),
            N((He) => {
              const Ie = { ...He };
              return (
                Ee.forEach((Ce) => {
                  var De;
                  const Re =
                    Ce.fromContactId ||
                    ((De = ut.find(
                      (at) => (at.nickname || at.name) === Ce.signature,
                    )) == null
                      ? void 0
                      : De.id);
                  if (Re) {
                    const at = Ie[Re] || [];
                    Ie[Re] = [Ce, ...at.filter((ft) => ft.id !== Ce.id)];
                  }
                }),
                Sa("letters", Ie),
                Ie
              );
            }));
        } catch {
        } finally {
          M(!1);
        }
      },
      we = (Pe, ut) =>
        (Pe || []).find(
          (_t) => String(_t == null ? void 0 : _t.id) === String(ut),
        ),
      Q = l.useCallback(() => {
        if (!X) return;
        const Pe = xe.current,
          ut = Date.now(),
          _t = y || [],
          Ee = Pe.filter((Ie) => {
            const Ce = Number(Ie.deliverTime);
            return !(
              Number.isNaN(Ce) ||
              Ce <= 0 ||
              Ce > ut ||
              (Ie.recipientId != null &&
                Ie.recipientId !== "" &&
                Ie.recipientId !== "self" &&
                (Ie.fromContactId == null || Ie.fromContactId === void 0) &&
                _t.length === 0)
            );
          });
        if (Ee.length === 0) return;
        const fe = new Set(Ee.map((Ie) => Ie.id)),
          He = Pe.filter((Ie) => !fe.has(Ie.id));
        (k(He),
          (xe.current = He),
          Sa("pendingLetters", He),
          (async () => {
            for (const Ie of Ee) {
              const Ce =
                Ie.lunarDate ||
                new Date().getMonth() + 1 + "月" + new Date().getDate() + "日";
              if (Ie.fromContactId != null) {
                const Re = {
                  id: Ie.id,
                  title:
                    Ie.title ||
                    (Ie.content || "").slice(0, 12).trim() +
                      ((Ie.content || "").length > 12 ? "…" : "") ||
                    "",
                  content: Ie.content || "展信佳。",
                  signature: Ie.signature || "某人",
                  lunarDate: Ce,
                  fromContactId: Ie.fromContactId,
                };
                (_((De) => {
                  const at = [Re, ...De];
                  return (Sa("inboxLetters", at), at);
                }),
                  N((De) => {
                    const at = {
                      ...De,
                      [Ie.fromContactId]: [Re, ...(De[Ie.fromContactId] || [])],
                    };
                    return (Sa("letters", at), at);
                  }));
                continue;
              }
              if (Ie.recipientId && Ie.recipientId !== "self") {
                const Re = we(_t, Ie.recipientId);
                let De = "展信佳。你的来信收到了，愿你一切安好。",
                  at = "回信",
                  ft = Ie.toName || "TA",
                  vt = Ie.recipientId;
                if (
                  Re &&
                  ((ft = Re.nickname || Re.name || ft),
                  (vt = Re.id),
                  n != null && n.endpoint && n != null && n.key)
                ) {
                  const Qe = (o == null ? void 0 : o(Re)) || {},
                    Ye = `用户给角色「${Re.nickname || Re.name}」写了一封信，内容如下：

${(Ie.content || "").slice(0, 500)}

请以角色身份写一封回信给用户。要求：50～150 字，温暖、私人化，像真的在回信。第一行只写回信标题（5～15 字），空一行后写正文。不要称呼与套话，可多段换行。`;
                  try {
                    const Ze = await pc({
                      apiConfig: n,
                      contact: Re,
                      effectiveUser: Qe,
                      messagesToApi: [
                        {
                          sender: "me",
                          text: Ye,
                          timestamp: new Date().toISOString(),
                        },
                      ],
                      addApiLog: a,
                      scene: "system_generation",
                    });
                    if (Ze && typeof Ze == "string") {
                      const Ue = Ze.trim().replace(
                        /\n{3,}/g,
                        `

`,
                      );
                      if (
                        Ue &&
                        Ue !== "请先在设置中配置API。" &&
                        Ue !== "抱歉，我暂时无法回复。"
                      ) {
                        const me = Ue.indexOf(`

`);
                        me > 0
                          ? ((at = Ue.slice(0, me).trim().slice(0, 30)),
                            (De = Ue.slice(me + 2).trim()))
                          : ((De = Ue),
                            (at =
                              Ue.slice(0, 12).trim() +
                                (Ue.length > 12 ? "…" : "") || "回信"));
                      }
                    }
                  } catch {}
                }
                const Oe = {
                  id:
                    "letter_" +
                    Date.now() +
                    "_" +
                    Math.random().toString(36).slice(2, 8),
                  title: at,
                  content: De,
                  signature: ft,
                  lunarDate: Ce,
                  date: new Date().toLocaleDateString("zh-CN"),
                  fromContactId: vt,
                  isReply: !0,
                  userLetterContent: (Ie.content || "").trim(),
                };
                (_((Qe) => {
                  const Ye = [Oe, ...Qe];
                  return (Sa("inboxLetters", Ye), Ye);
                }),
                  N((Qe) => {
                    const Ye = vt,
                      Ze = { ...Qe, [Ye]: [Oe, ...(Qe[Ye] || [])] };
                    return (Sa("letters", Ze), Ze);
                  }));
              }
            }
          })());
      }, [X, y, n, o, a]);
    l.useEffect(() => {
      if (!X) return;
      Q();
      const Pe = setInterval(Q, 5e3);
      return () => clearInterval(Pe);
    }, [X, Q]);
    const ve = (Pe) => {
        (_((ut) => {
          const _t = ut.filter((Ee) => Ee.id !== Pe);
          return (Sa("inboxLetters", _t), _t);
        }),
          N((ut) => {
            const _t = { ...ut };
            return (
              Object.keys(_t).forEach((Ee) => {
                _t[Ee] = _t[Ee].filter((fe) => fe.id !== Pe);
              }),
              Sa("letters", _t),
              _t
            );
          }));
      },
      Ve = (Pe, ut, _t) => {
        var Ie, Ce;
        const Ee = new Date(),
          fe =
            ut === "self"
              ? "未来的自己"
              : ((Ie = (y || []).find((Re) => Re.id === ut)) == null
                  ? void 0
                  : Ie.nickname) ||
                ((Ce = (y || []).find((Re) => Re.id === ut)) == null
                  ? void 0
                  : Ce.name) ||
                "未知",
          He = {
            id: "pending_" + Date.now(),
            deliverTime: typeof _t == "number" ? _t : Ee.getTime(),
            content: Pe || "展信佳。",
            to: ut === "self" ? "self" : "user",
            toName: fe,
            signature: (r == null ? void 0 : r.name) || "我",
            lunarDate: Ee.getMonth() + 1 + "月" + Ee.getDate() + "日",
            fromContactId: void 0,
            recipientId: ut,
          };
        k((Re) => {
          const De = [...Re, He];
          return (Sa("pendingLetters", De), De);
        });
      },
      Ae = (Pe) => {
        (h(Pe), Y("contactLetters"));
      },
      te = (Pe) => {
        if ((x(Pe), Pe != null && Pe.fromContactId)) {
          const ut = (y || []).find((_t) => _t.id === Pe.fromContactId);
          ut && h(ut);
        }
        Y("letter");
      },
      Se = (Pe, ut) => {
        ((R.current = !0),
          H((_t) => {
            const Ee = { ..._t, [Pe]: ut };
            return (Sa("theme", Ee), Ee);
          }));
      },
      Fe = async (Pe, ut) => {
        if (Pe === "paper" && ut) {
          const _t = `paper_${Date.now()}`;
          await jh(_t, ut);
          const Ee = URL.createObjectURL(ut),
            fe = {
              id: "custom",
              name: "自定义",
              color: "#ffffff",
              texture: "none",
              isCustom: !0,
            };
          (H((He) => {
            He.customPaperUrl && URL.revokeObjectURL(He.customPaperUrl);
            const Ie = {
              ...He,
              paper: fe,
              customPaperId: _t,
              customPaperUrl: Ee,
            };
            return (Sa("theme", Ie), Ie);
          }),
            (R.current = !0));
        } else if (Pe === "font" && ut) {
          const _t =
              (ut.name || "自定义字体").replace(/\.[^.]+$/, "") || "自定义",
            Ee = `mail_font_${Date.now()}`;
          await jh(Ee, ut);
          const fe = URL.createObjectURL(ut),
            Ie = {
              id: `custom_font_${Date.now()}`,
              name: _t,
              family: `"${_t}", serif`,
              url: fe,
              isCustom: !0,
              fontBlobId: Ee,
            };
          (H((Ce) => {
            const Re = [...(Ce.customFonts || []), Ie],
              De = { ...Ce, font: Ie, customFonts: Re };
            return (Sa("theme", De), De);
          }),
            (R.current = !0));
        }
      },
      $e = async (Pe, ut) => {
        if (!(Pe != null && Pe.trim())) return !1;
        const _t = `custom_font_${Date.now()}`,
          Ee = (ut && ut.trim()) || "网络字体",
          fe = {
            id: _t,
            name: Ee,
            family: `"${Ee}", serif`,
            url: Pe.trim(),
            isCustom: !0,
          };
        return (
          H((He) => {
            const Ie = [...(He.customFonts || []), fe],
              Ce = { ...He, font: fe, customFonts: Ie };
            return (Sa("theme", Ce), Ce);
          }),
          (R.current = !0),
          !0
        );
      },
      tt = async () => [],
      Xe = async () => ({ bottle: {}, replies: [] }),
      ht = async () => {};
    return e.jsx(GC.Provider, {
      value: {
        currentView: d,
        previousView: f,
        navigateTo: Y,
        selectedChar: m,
        selectChar: Ae,
        selectedLetter: g,
        setSelectedLetter: x,
        theme: ee,
        updateTheme: Se,
        handleCustomUpload: Fe,
        handleCustomFontUrl: $e,
        contacts: y,
        letters: b,
        inboxLetters: w,
        isLoadingLetters: C,
        fetchLetters: J,
        fetchNewLetters: G,
        deleteLetter: ve,
        openLetter: te,
        pendingLetters: A,
        sendTimeCapsule: Ve,
        arrivedLetter: E,
        closeArrivalModal: oe,
        onClose: s,
        inventory: j,
        coins: I,
        shopLevel: B,
        isScavenging: P,
        appraisalHistory: O,
        scavengeItem: ke,
        identifyItem: W,
        sellItem: ue,
        discardItem: re,
        sendItem: ge,
        continueStory: he,
        marketNews: K,
        commissions: V,
        factionReputation: le,
        refreshMarketNews: ce,
        refreshCommissions: pe,
        completeCommission: se,
        craftItems: Te,
        fishBottle: tt,
        throwBottle: Xe,
        replyBottle: ht,
        savedBottles: [],
      },
      children: t,
    });
  },
  sl = () => {
    const t = l.useContext(GC);
    if (!t) throw new Error("useMail must be used within a MailProvider");
    return t;
  };
var HC = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ (function (t, s) {
  (function (n) {
    t.exports = n();
  })(function () {
    return (function n(a, r, i) {
      function o(u, f) {
        if (!r[u]) {
          if (!a[u]) {
            var p = typeof kc == "function" && kc;
            if (!f && p) return p(u, !0);
            if (c) return c(u, !0);
            var m = new Error("Cannot find module '" + u + "'");
            throw ((m.code = "MODULE_NOT_FOUND"), m);
          }
          var h = (r[u] = { exports: {} });
          a[u][0].call(
            h.exports,
            function (g) {
              var x = a[u][1][g];
              return o(x || g);
            },
            h,
            h.exports,
            n,
            a,
            r,
            i,
          );
        }
        return r[u].exports;
      }
      for (var c = typeof kc == "function" && kc, d = 0; d < i.length; d++)
        o(i[d]);
      return o;
    })(
      {
        1: [
          function (n, a, r) {
            var i = n("./utils"),
              o = n("./support"),
              c =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            ((r.encode = function (d) {
              for (
                var u,
                  f,
                  p,
                  m,
                  h,
                  g,
                  x,
                  y = [],
                  v = 0,
                  b = d.length,
                  N = b,
                  w = i.getTypeOf(d) !== "string";
                v < d.length;
              )
                ((N = b - v),
                  (p = w
                    ? ((u = d[v++]),
                      (f = v < b ? d[v++] : 0),
                      v < b ? d[v++] : 0)
                    : ((u = d.charCodeAt(v++)),
                      (f = v < b ? d.charCodeAt(v++) : 0),
                      v < b ? d.charCodeAt(v++) : 0)),
                  (m = u >> 2),
                  (h = ((3 & u) << 4) | (f >> 4)),
                  (g = 1 < N ? ((15 & f) << 2) | (p >> 6) : 64),
                  (x = 2 < N ? 63 & p : 64),
                  y.push(
                    c.charAt(m) + c.charAt(h) + c.charAt(g) + c.charAt(x),
                  ));
              return y.join("");
            }),
              (r.decode = function (d) {
                var u,
                  f,
                  p,
                  m,
                  h,
                  g,
                  x = 0,
                  y = 0,
                  v = "data:";
                if (d.substr(0, v.length) === v)
                  throw new Error(
                    "Invalid base64 input, it looks like a data url.",
                  );
                var b,
                  N = (3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, "")).length) / 4;
                if (
                  (d.charAt(d.length - 1) === c.charAt(64) && N--,
                  d.charAt(d.length - 2) === c.charAt(64) && N--,
                  N % 1 != 0)
                )
                  throw new Error("Invalid base64 input, bad content length.");
                for (
                  b = o.uint8array ? new Uint8Array(0 | N) : new Array(0 | N);
                  x < d.length;
                )
                  ((u =
                    (c.indexOf(d.charAt(x++)) << 2) |
                    ((m = c.indexOf(d.charAt(x++))) >> 4)),
                    (f =
                      ((15 & m) << 4) | ((h = c.indexOf(d.charAt(x++))) >> 2)),
                    (p = ((3 & h) << 6) | (g = c.indexOf(d.charAt(x++)))),
                    (b[y++] = u),
                    h !== 64 && (b[y++] = f),
                    g !== 64 && (b[y++] = p));
                return b;
              }));
          },
          { "./support": 30, "./utils": 32 },
        ],
        2: [
          function (n, a, r) {
            var i = n("./external"),
              o = n("./stream/DataWorker"),
              c = n("./stream/Crc32Probe"),
              d = n("./stream/DataLengthProbe");
            function u(f, p, m, h, g) {
              ((this.compressedSize = f),
                (this.uncompressedSize = p),
                (this.crc32 = m),
                (this.compression = h),
                (this.compressedContent = g));
            }
            ((u.prototype = {
              getContentWorker: function () {
                var f = new o(i.Promise.resolve(this.compressedContent))
                    .pipe(this.compression.uncompressWorker())
                    .pipe(new d("data_length")),
                  p = this;
                return (
                  f.on("end", function () {
                    if (this.streamInfo.data_length !== p.uncompressedSize)
                      throw new Error("Bug : uncompressed data size mismatch");
                  }),
                  f
                );
              },
              getCompressedWorker: function () {
                return new o(i.Promise.resolve(this.compressedContent))
                  .withStreamInfo("compressedSize", this.compressedSize)
                  .withStreamInfo("uncompressedSize", this.uncompressedSize)
                  .withStreamInfo("crc32", this.crc32)
                  .withStreamInfo("compression", this.compression);
              },
            }),
              (u.createWorkerFrom = function (f, p, m) {
                return f
                  .pipe(new c())
                  .pipe(new d("uncompressedSize"))
                  .pipe(p.compressWorker(m))
                  .pipe(new d("compressedSize"))
                  .withStreamInfo("compression", p);
              }),
              (a.exports = u));
          },
          {
            "./external": 6,
            "./stream/Crc32Probe": 25,
            "./stream/DataLengthProbe": 26,
            "./stream/DataWorker": 27,
          },
        ],
        3: [
          function (n, a, r) {
            var i = n("./stream/GenericWorker");
            ((r.STORE = {
              magic: "\0\0",
              compressWorker: function () {
                return new i("STORE compression");
              },
              uncompressWorker: function () {
                return new i("STORE decompression");
              },
            }),
              (r.DEFLATE = n("./flate")));
          },
          { "./flate": 7, "./stream/GenericWorker": 28 },
        ],
        4: [
          function (n, a, r) {
            var i = n("./utils"),
              o = (function () {
                for (var c, d = [], u = 0; u < 256; u++) {
                  c = u;
                  for (var f = 0; f < 8; f++)
                    c = 1 & c ? 3988292384 ^ (c >>> 1) : c >>> 1;
                  d[u] = c;
                }
                return d;
              })();
            a.exports = function (c, d) {
              return c !== void 0 && c.length
                ? i.getTypeOf(c) !== "string"
                  ? (function (u, f, p, m) {
                      var h = o,
                        g = m + p;
                      u ^= -1;
                      for (var x = m; x < g; x++)
                        u = (u >>> 8) ^ h[255 & (u ^ f[x])];
                      return -1 ^ u;
                    })(0 | d, c, c.length, 0)
                  : (function (u, f, p, m) {
                      var h = o,
                        g = m + p;
                      u ^= -1;
                      for (var x = m; x < g; x++)
                        u = (u >>> 8) ^ h[255 & (u ^ f.charCodeAt(x))];
                      return -1 ^ u;
                    })(0 | d, c, c.length, 0)
                : 0;
            };
          },
          { "./utils": 32 },
        ],
        5: [
          function (n, a, r) {
            ((r.base64 = !1),
              (r.binary = !1),
              (r.dir = !1),
              (r.createFolders = !0),
              (r.date = null),
              (r.compression = null),
              (r.compressionOptions = null),
              (r.comment = null),
              (r.unixPermissions = null),
              (r.dosPermissions = null));
          },
          {},
        ],
        6: [
          function (n, a, r) {
            var i = null;
            ((i = typeof Promise < "u" ? Promise : n("lie")),
              (a.exports = { Promise: i }));
          },
          { lie: 37 },
        ],
        7: [
          function (n, a, r) {
            var i =
                typeof Uint8Array < "u" &&
                typeof Uint16Array < "u" &&
                typeof Uint32Array < "u",
              o = n("pako"),
              c = n("./utils"),
              d = n("./stream/GenericWorker"),
              u = i ? "uint8array" : "array";
            function f(p, m) {
              (d.call(this, "FlateWorker/" + p),
                (this._pako = null),
                (this._pakoAction = p),
                (this._pakoOptions = m),
                (this.meta = {}));
            }
            ((r.magic = "\b\0"),
              c.inherits(f, d),
              (f.prototype.processChunk = function (p) {
                ((this.meta = p.meta),
                  this._pako === null && this._createPako(),
                  this._pako.push(c.transformTo(u, p.data), !1));
              }),
              (f.prototype.flush = function () {
                (d.prototype.flush.call(this),
                  this._pako === null && this._createPako(),
                  this._pako.push([], !0));
              }),
              (f.prototype.cleanUp = function () {
                (d.prototype.cleanUp.call(this), (this._pako = null));
              }),
              (f.prototype._createPako = function () {
                this._pako = new o[this._pakoAction]({
                  raw: !0,
                  level: this._pakoOptions.level || -1,
                });
                var p = this;
                this._pako.onData = function (m) {
                  p.push({ data: m, meta: p.meta });
                };
              }),
              (r.compressWorker = function (p) {
                return new f("Deflate", p);
              }),
              (r.uncompressWorker = function () {
                return new f("Inflate", {});
              }));
          },
          { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
        ],
        8: [
          function (n, a, r) {
            function i(h, g) {
              var x,
                y = "";
              for (x = 0; x < g; x++)
                ((y += String.fromCharCode(255 & h)), (h >>>= 8));
              return y;
            }
            function o(h, g, x, y, v, b) {
              var N,
                w,
                _ = h.file,
                A = h.compression,
                k = b !== u.utf8encode,
                C = c.transformTo("string", b(_.name)),
                M = c.transformTo("string", u.utf8encode(_.name)),
                E = _.comment,
                S = c.transformTo("string", b(E)),
                j = c.transformTo("string", u.utf8encode(E)),
                T = M.length !== _.name.length,
                I = j.length !== E.length,
                L = "",
                B = "",
                F = "",
                D = _.dir,
                $ = _.date,
                P = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
              (g && !x) ||
                ((P.crc32 = h.crc32),
                (P.compressedSize = h.compressedSize),
                (P.uncompressedSize = h.uncompressedSize));
              var z = 0;
              (g && (z |= 8), k || (!T && !I) || (z |= 2048));
              var O = 0,
                Z = 0;
              (D && (O |= 16),
                v === "UNIX"
                  ? ((Z = 798),
                    (O |= (function (q, V) {
                      var ne = q;
                      return (
                        q || (ne = V ? 16893 : 33204),
                        (65535 & ne) << 16
                      );
                    })(_.unixPermissions, D)))
                  : ((Z = 20),
                    (O |= (function (q) {
                      return 63 & (q || 0);
                    })(_.dosPermissions))),
                (N = $.getUTCHours()),
                (N <<= 6),
                (N |= $.getUTCMinutes()),
                (N <<= 5),
                (N |= $.getUTCSeconds() / 2),
                (w = $.getUTCFullYear() - 1980),
                (w <<= 4),
                (w |= $.getUTCMonth() + 1),
                (w <<= 5),
                (w |= $.getUTCDate()),
                T &&
                  ((B = i(1, 1) + i(f(C), 4) + M),
                  (L += "up" + i(B.length, 2) + B)),
                I &&
                  ((F = i(1, 1) + i(f(S), 4) + j),
                  (L += "uc" + i(F.length, 2) + F)));
              var K = "";
              return (
                (K += `
\0`),
                (K += i(z, 2)),
                (K += A.magic),
                (K += i(N, 2)),
                (K += i(w, 2)),
                (K += i(P.crc32, 4)),
                (K += i(P.compressedSize, 4)),
                (K += i(P.uncompressedSize, 4)),
                (K += i(C.length, 2)),
                (K += i(L.length, 2)),
                {
                  fileRecord: p.LOCAL_FILE_HEADER + K + C + L,
                  dirRecord:
                    p.CENTRAL_FILE_HEADER +
                    i(Z, 2) +
                    K +
                    i(S.length, 2) +
                    "\0\0\0\0" +
                    i(O, 4) +
                    i(y, 4) +
                    C +
                    L +
                    S,
                }
              );
            }
            var c = n("../utils"),
              d = n("../stream/GenericWorker"),
              u = n("../utf8"),
              f = n("../crc32"),
              p = n("../signature");
            function m(h, g, x, y) {
              (d.call(this, "ZipFileWorker"),
                (this.bytesWritten = 0),
                (this.zipComment = g),
                (this.zipPlatform = x),
                (this.encodeFileName = y),
                (this.streamFiles = h),
                (this.accumulate = !1),
                (this.contentBuffer = []),
                (this.dirRecords = []),
                (this.currentSourceOffset = 0),
                (this.entriesCount = 0),
                (this.currentFile = null),
                (this._sources = []));
            }
            (c.inherits(m, d),
              (m.prototype.push = function (h) {
                var g = h.meta.percent || 0,
                  x = this.entriesCount,
                  y = this._sources.length;
                this.accumulate
                  ? this.contentBuffer.push(h)
                  : ((this.bytesWritten += h.data.length),
                    d.prototype.push.call(this, {
                      data: h.data,
                      meta: {
                        currentFile: this.currentFile,
                        percent: x ? (g + 100 * (x - y - 1)) / x : 100,
                      },
                    }));
              }),
              (m.prototype.openedSource = function (h) {
                ((this.currentSourceOffset = this.bytesWritten),
                  (this.currentFile = h.file.name));
                var g = this.streamFiles && !h.file.dir;
                if (g) {
                  var x = o(
                    h,
                    g,
                    !1,
                    this.currentSourceOffset,
                    this.zipPlatform,
                    this.encodeFileName,
                  );
                  this.push({ data: x.fileRecord, meta: { percent: 0 } });
                } else this.accumulate = !0;
              }),
              (m.prototype.closedSource = function (h) {
                this.accumulate = !1;
                var g = this.streamFiles && !h.file.dir,
                  x = o(
                    h,
                    g,
                    !0,
                    this.currentSourceOffset,
                    this.zipPlatform,
                    this.encodeFileName,
                  );
                if ((this.dirRecords.push(x.dirRecord), g))
                  this.push({
                    data: (function (y) {
                      return (
                        p.DATA_DESCRIPTOR +
                        i(y.crc32, 4) +
                        i(y.compressedSize, 4) +
                        i(y.uncompressedSize, 4)
                      );
                    })(h),
                    meta: { percent: 100 },
                  });
                else
                  for (
                    this.push({ data: x.fileRecord, meta: { percent: 0 } });
                    this.contentBuffer.length;
                  )
                    this.push(this.contentBuffer.shift());
                this.currentFile = null;
              }),
              (m.prototype.flush = function () {
                for (
                  var h = this.bytesWritten, g = 0;
                  g < this.dirRecords.length;
                  g++
                )
                  this.push({
                    data: this.dirRecords[g],
                    meta: { percent: 100 },
                  });
                var x = this.bytesWritten - h,
                  y = (function (v, b, N, w, _) {
                    var A = c.transformTo("string", _(w));
                    return (
                      p.CENTRAL_DIRECTORY_END +
                      "\0\0\0\0" +
                      i(v, 2) +
                      i(v, 2) +
                      i(b, 4) +
                      i(N, 4) +
                      i(A.length, 2) +
                      A
                    );
                  })(
                    this.dirRecords.length,
                    x,
                    h,
                    this.zipComment,
                    this.encodeFileName,
                  );
                this.push({ data: y, meta: { percent: 100 } });
              }),
              (m.prototype.prepareNextSource = function () {
                ((this.previous = this._sources.shift()),
                  this.openedSource(this.previous.streamInfo),
                  this.isPaused
                    ? this.previous.pause()
                    : this.previous.resume());
              }),
              (m.prototype.registerPrevious = function (h) {
                this._sources.push(h);
                var g = this;
                return (
                  h.on("data", function (x) {
                    g.processChunk(x);
                  }),
                  h.on("end", function () {
                    (g.closedSource(g.previous.streamInfo),
                      g._sources.length ? g.prepareNextSource() : g.end());
                  }),
                  h.on("error", function (x) {
                    g.error(x);
                  }),
                  this
                );
              }),
              (m.prototype.resume = function () {
                return (
                  !!d.prototype.resume.call(this) &&
                  (!this.previous && this._sources.length
                    ? (this.prepareNextSource(), !0)
                    : this.previous ||
                        this._sources.length ||
                        this.generatedError
                      ? void 0
                      : (this.end(), !0))
                );
              }),
              (m.prototype.error = function (h) {
                var g = this._sources;
                if (!d.prototype.error.call(this, h)) return !1;
                for (var x = 0; x < g.length; x++)
                  try {
                    g[x].error(h);
                  } catch {}
                return !0;
              }),
              (m.prototype.lock = function () {
                d.prototype.lock.call(this);
                for (var h = this._sources, g = 0; g < h.length; g++)
                  h[g].lock();
              }),
              (a.exports = m));
          },
          {
            "../crc32": 4,
            "../signature": 23,
            "../stream/GenericWorker": 28,
            "../utf8": 31,
            "../utils": 32,
          },
        ],
        9: [
          function (n, a, r) {
            var i = n("../compressions"),
              o = n("./ZipFileWorker");
            r.generateWorker = function (c, d, u) {
              var f = new o(d.streamFiles, u, d.platform, d.encodeFileName),
                p = 0;
              try {
                (c.forEach(function (m, h) {
                  p++;
                  var g = (function (b, N) {
                      var w = b || N,
                        _ = i[w];
                      if (!_)
                        throw new Error(
                          w + " is not a valid compression method !",
                        );
                      return _;
                    })(h.options.compression, d.compression),
                    x =
                      h.options.compressionOptions ||
                      d.compressionOptions ||
                      {},
                    y = h.dir,
                    v = h.date;
                  h._compressWorker(g, x)
                    .withStreamInfo("file", {
                      name: m,
                      dir: y,
                      date: v,
                      comment: h.comment || "",
                      unixPermissions: h.unixPermissions,
                      dosPermissions: h.dosPermissions,
                    })
                    .pipe(f);
                }),
                  (f.entriesCount = p));
              } catch (m) {
                f.error(m);
              }
              return f;
            };
          },
          { "../compressions": 3, "./ZipFileWorker": 8 },
        ],
        10: [
          function (n, a, r) {
            function i() {
              if (!(this instanceof i)) return new i();
              if (arguments.length)
                throw new Error(
                  "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.",
                );
              ((this.files = Object.create(null)),
                (this.comment = null),
                (this.root = ""),
                (this.clone = function () {
                  var o = new i();
                  for (var c in this)
                    typeof this[c] != "function" && (o[c] = this[c]);
                  return o;
                }));
            }
            (((i.prototype = n("./object")).loadAsync = n("./load")),
              (i.support = n("./support")),
              (i.defaults = n("./defaults")),
              (i.version = "3.10.1"),
              (i.loadAsync = function (o, c) {
                return new i().loadAsync(o, c);
              }),
              (i.external = n("./external")),
              (a.exports = i));
          },
          {
            "./defaults": 5,
            "./external": 6,
            "./load": 11,
            "./object": 15,
            "./support": 30,
          },
        ],
        11: [
          function (n, a, r) {
            var i = n("./utils"),
              o = n("./external"),
              c = n("./utf8"),
              d = n("./zipEntries"),
              u = n("./stream/Crc32Probe"),
              f = n("./nodejsUtils");
            function p(m) {
              return new o.Promise(function (h, g) {
                var x = m.decompressed.getContentWorker().pipe(new u());
                x.on("error", function (y) {
                  g(y);
                })
                  .on("end", function () {
                    x.streamInfo.crc32 !== m.decompressed.crc32
                      ? g(new Error("Corrupted zip : CRC32 mismatch"))
                      : h();
                  })
                  .resume();
              });
            }
            a.exports = function (m, h) {
              var g = this;
              return (
                (h = i.extend(h || {}, {
                  base64: !1,
                  checkCRC32: !1,
                  optimizedBinaryString: !1,
                  createFolders: !1,
                  decodeFileName: c.utf8decode,
                })),
                f.isNode && f.isStream(m)
                  ? o.Promise.reject(
                      new Error(
                        "JSZip can't accept a stream when loading a zip file.",
                      ),
                    )
                  : i
                      .prepareContent(
                        "the loaded zip file",
                        m,
                        !0,
                        h.optimizedBinaryString,
                        h.base64,
                      )
                      .then(function (x) {
                        var y = new d(h);
                        return (y.load(x), y);
                      })
                      .then(function (x) {
                        var y = [o.Promise.resolve(x)],
                          v = x.files;
                        if (h.checkCRC32)
                          for (var b = 0; b < v.length; b++) y.push(p(v[b]));
                        return o.Promise.all(y);
                      })
                      .then(function (x) {
                        for (
                          var y = x.shift(), v = y.files, b = 0;
                          b < v.length;
                          b++
                        ) {
                          var N = v[b],
                            w = N.fileNameStr,
                            _ = i.resolve(N.fileNameStr);
                          (g.file(_, N.decompressed, {
                            binary: !0,
                            optimizedBinaryString: !0,
                            date: N.date,
                            dir: N.dir,
                            comment: N.fileCommentStr.length
                              ? N.fileCommentStr
                              : null,
                            unixPermissions: N.unixPermissions,
                            dosPermissions: N.dosPermissions,
                            createFolders: h.createFolders,
                          }),
                            N.dir || (g.file(_).unsafeOriginalName = w));
                        }
                        return (
                          y.zipComment.length && (g.comment = y.zipComment),
                          g
                        );
                      })
              );
            };
          },
          {
            "./external": 6,
            "./nodejsUtils": 14,
            "./stream/Crc32Probe": 25,
            "./utf8": 31,
            "./utils": 32,
            "./zipEntries": 33,
          },
        ],
        12: [
          function (n, a, r) {
            var i = n("../utils"),
              o = n("../stream/GenericWorker");
            function c(d, u) {
              (o.call(this, "Nodejs stream input adapter for " + d),
                (this._upstreamEnded = !1),
                this._bindStream(u));
            }
            (i.inherits(c, o),
              (c.prototype._bindStream = function (d) {
                var u = this;
                ((this._stream = d).pause(),
                  d
                    .on("data", function (f) {
                      u.push({ data: f, meta: { percent: 0 } });
                    })
                    .on("error", function (f) {
                      u.isPaused ? (this.generatedError = f) : u.error(f);
                    })
                    .on("end", function () {
                      u.isPaused ? (u._upstreamEnded = !0) : u.end();
                    }));
              }),
              (c.prototype.pause = function () {
                return (
                  !!o.prototype.pause.call(this) && (this._stream.pause(), !0)
                );
              }),
              (c.prototype.resume = function () {
                return (
                  !!o.prototype.resume.call(this) &&
                  (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                );
              }),
              (a.exports = c));
          },
          { "../stream/GenericWorker": 28, "../utils": 32 },
        ],
        13: [
          function (n, a, r) {
            var i = n("readable-stream").Readable;
            function o(c, d, u) {
              (i.call(this, d), (this._helper = c));
              var f = this;
              c.on("data", function (p, m) {
                (f.push(p) || f._helper.pause(), u && u(m));
              })
                .on("error", function (p) {
                  f.emit("error", p);
                })
                .on("end", function () {
                  f.push(null);
                });
            }
            (n("../utils").inherits(o, i),
              (o.prototype._read = function () {
                this._helper.resume();
              }),
              (a.exports = o));
          },
          { "../utils": 32, "readable-stream": 16 },
        ],
        14: [
          function (n, a, r) {
            a.exports = {
              isNode: typeof Buffer < "u",
              newBufferFrom: function (i, o) {
                if (Buffer.from && Buffer.from !== Uint8Array.from)
                  return Buffer.from(i, o);
                if (typeof i == "number")
                  throw new Error('The "data" argument must not be a number');
                return new Buffer(i, o);
              },
              allocBuffer: function (i) {
                if (Buffer.alloc) return Buffer.alloc(i);
                var o = new Buffer(i);
                return (o.fill(0), o);
              },
              isBuffer: function (i) {
                return Buffer.isBuffer(i);
              },
              isStream: function (i) {
                return (
                  i &&
                  typeof i.on == "function" &&
                  typeof i.pause == "function" &&
                  typeof i.resume == "function"
                );
              },
            };
          },
          {},
        ],
        15: [
          function (n, a, r) {
            function i(_, A, k) {
              var C,
                M = c.getTypeOf(A),
                E = c.extend(k || {}, f);
              ((E.date = E.date || new Date()),
                E.compression !== null &&
                  (E.compression = E.compression.toUpperCase()),
                typeof E.unixPermissions == "string" &&
                  (E.unixPermissions = parseInt(E.unixPermissions, 8)),
                E.unixPermissions && 16384 & E.unixPermissions && (E.dir = !0),
                E.dosPermissions && 16 & E.dosPermissions && (E.dir = !0),
                E.dir && (_ = v(_)),
                E.createFolders && (C = y(_)) && b.call(this, C, !0));
              var S = M === "string" && E.binary === !1 && E.base64 === !1;
              ((k && k.binary !== void 0) || (E.binary = !S),
                ((A instanceof p && A.uncompressedSize === 0) ||
                  E.dir ||
                  !A ||
                  A.length === 0) &&
                  ((E.base64 = !1),
                  (E.binary = !0),
                  (A = ""),
                  (E.compression = "STORE"),
                  (M = "string")));
              var j = null;
              j =
                A instanceof p || A instanceof d
                  ? A
                  : g.isNode && g.isStream(A)
                    ? new x(_, A)
                    : c.prepareContent(
                        _,
                        A,
                        E.binary,
                        E.optimizedBinaryString,
                        E.base64,
                      );
              var T = new m(_, j, E);
              this.files[_] = T;
            }
            var o = n("./utf8"),
              c = n("./utils"),
              d = n("./stream/GenericWorker"),
              u = n("./stream/StreamHelper"),
              f = n("./defaults"),
              p = n("./compressedObject"),
              m = n("./zipObject"),
              h = n("./generate"),
              g = n("./nodejsUtils"),
              x = n("./nodejs/NodejsStreamInputAdapter"),
              y = function (_) {
                _.slice(-1) === "/" && (_ = _.substring(0, _.length - 1));
                var A = _.lastIndexOf("/");
                return 0 < A ? _.substring(0, A) : "";
              },
              v = function (_) {
                return (_.slice(-1) !== "/" && (_ += "/"), _);
              },
              b = function (_, A) {
                return (
                  (A = A !== void 0 ? A : f.createFolders),
                  (_ = v(_)),
                  this.files[_] ||
                    i.call(this, _, null, { dir: !0, createFolders: A }),
                  this.files[_]
                );
              };
            function N(_) {
              return Object.prototype.toString.call(_) === "[object RegExp]";
            }
            var w = {
              load: function () {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                );
              },
              forEach: function (_) {
                var A, k, C;
                for (A in this.files)
                  ((C = this.files[A]),
                    (k = A.slice(this.root.length, A.length)) &&
                      A.slice(0, this.root.length) === this.root &&
                      _(k, C));
              },
              filter: function (_) {
                var A = [];
                return (
                  this.forEach(function (k, C) {
                    _(k, C) && A.push(C);
                  }),
                  A
                );
              },
              file: function (_, A, k) {
                if (arguments.length !== 1)
                  return ((_ = this.root + _), i.call(this, _, A, k), this);
                if (N(_)) {
                  var C = _;
                  return this.filter(function (E, S) {
                    return !S.dir && C.test(E);
                  });
                }
                var M = this.files[this.root + _];
                return M && !M.dir ? M : null;
              },
              folder: function (_) {
                if (!_) return this;
                if (N(_))
                  return this.filter(function (M, E) {
                    return E.dir && _.test(M);
                  });
                var A = this.root + _,
                  k = b.call(this, A),
                  C = this.clone();
                return ((C.root = k.name), C);
              },
              remove: function (_) {
                _ = this.root + _;
                var A = this.files[_];
                if (
                  (A ||
                    (_.slice(-1) !== "/" && (_ += "/"), (A = this.files[_])),
                  A && !A.dir)
                )
                  delete this.files[_];
                else
                  for (
                    var k = this.filter(function (M, E) {
                        return E.name.slice(0, _.length) === _;
                      }),
                      C = 0;
                    C < k.length;
                    C++
                  )
                    delete this.files[k[C].name];
                return this;
              },
              generate: function () {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                );
              },
              generateInternalStream: function (_) {
                var A,
                  k = {};
                try {
                  if (
                    (((k = c.extend(_ || {}, {
                      streamFiles: !1,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: o.utf8encode,
                    })).type = k.type.toLowerCase()),
                    (k.compression = k.compression.toUpperCase()),
                    k.type === "binarystring" && (k.type = "string"),
                    !k.type)
                  )
                    throw new Error("No output type specified.");
                  (c.checkSupport(k.type),
                    (k.platform !== "darwin" &&
                      k.platform !== "freebsd" &&
                      k.platform !== "linux" &&
                      k.platform !== "sunos") ||
                      (k.platform = "UNIX"),
                    k.platform === "win32" && (k.platform = "DOS"));
                  var C = k.comment || this.comment || "";
                  A = h.generateWorker(this, k, C);
                } catch (M) {
                  (A = new d("error")).error(M);
                }
                return new u(A, k.type || "string", k.mimeType);
              },
              generateAsync: function (_, A) {
                return this.generateInternalStream(_).accumulate(A);
              },
              generateNodeStream: function (_, A) {
                return (
                  (_ = _ || {}).type || (_.type = "nodebuffer"),
                  this.generateInternalStream(_).toNodejsStream(A)
                );
              },
            };
            a.exports = w;
          },
          {
            "./compressedObject": 2,
            "./defaults": 5,
            "./generate": 9,
            "./nodejs/NodejsStreamInputAdapter": 12,
            "./nodejsUtils": 14,
            "./stream/GenericWorker": 28,
            "./stream/StreamHelper": 29,
            "./utf8": 31,
            "./utils": 32,
            "./zipObject": 35,
          },
        ],
        16: [
          function (n, a, r) {
            a.exports = n("stream");
          },
          { stream: void 0 },
        ],
        17: [
          function (n, a, r) {
            var i = n("./DataReader");
            function o(c) {
              i.call(this, c);
              for (var d = 0; d < this.data.length; d++) c[d] = 255 & c[d];
            }
            (n("../utils").inherits(o, i),
              (o.prototype.byteAt = function (c) {
                return this.data[this.zero + c];
              }),
              (o.prototype.lastIndexOfSignature = function (c) {
                for (
                  var d = c.charCodeAt(0),
                    u = c.charCodeAt(1),
                    f = c.charCodeAt(2),
                    p = c.charCodeAt(3),
                    m = this.length - 4;
                  0 <= m;
                  --m
                )
                  if (
                    this.data[m] === d &&
                    this.data[m + 1] === u &&
                    this.data[m + 2] === f &&
                    this.data[m + 3] === p
                  )
                    return m - this.zero;
                return -1;
              }),
              (o.prototype.readAndCheckSignature = function (c) {
                var d = c.charCodeAt(0),
                  u = c.charCodeAt(1),
                  f = c.charCodeAt(2),
                  p = c.charCodeAt(3),
                  m = this.readData(4);
                return d === m[0] && u === m[1] && f === m[2] && p === m[3];
              }),
              (o.prototype.readData = function (c) {
                if ((this.checkOffset(c), c === 0)) return [];
                var d = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), d);
              }),
              (a.exports = o));
          },
          { "../utils": 32, "./DataReader": 18 },
        ],
        18: [
          function (n, a, r) {
            var i = n("../utils");
            function o(c) {
              ((this.data = c),
                (this.length = c.length),
                (this.index = 0),
                (this.zero = 0));
            }
            ((o.prototype = {
              checkOffset: function (c) {
                this.checkIndex(this.index + c);
              },
              checkIndex: function (c) {
                if (this.length < this.zero + c || c < 0)
                  throw new Error(
                    "End of data reached (data length = " +
                      this.length +
                      ", asked index = " +
                      c +
                      "). Corrupted zip ?",
                  );
              },
              setIndex: function (c) {
                (this.checkIndex(c), (this.index = c));
              },
              skip: function (c) {
                this.setIndex(this.index + c);
              },
              byteAt: function () {},
              readInt: function (c) {
                var d,
                  u = 0;
                for (
                  this.checkOffset(c), d = this.index + c - 1;
                  d >= this.index;
                  d--
                )
                  u = (u << 8) + this.byteAt(d);
                return ((this.index += c), u);
              },
              readString: function (c) {
                return i.transformTo("string", this.readData(c));
              },
              readData: function () {},
              lastIndexOfSignature: function () {},
              readAndCheckSignature: function () {},
              readDate: function () {
                var c = this.readInt(4);
                return new Date(
                  Date.UTC(
                    1980 + ((c >> 25) & 127),
                    ((c >> 21) & 15) - 1,
                    (c >> 16) & 31,
                    (c >> 11) & 31,
                    (c >> 5) & 63,
                    (31 & c) << 1,
                  ),
                );
              },
            }),
              (a.exports = o));
          },
          { "../utils": 32 },
        ],
        19: [
          function (n, a, r) {
            var i = n("./Uint8ArrayReader");
            function o(c) {
              i.call(this, c);
            }
            (n("../utils").inherits(o, i),
              (o.prototype.readData = function (c) {
                this.checkOffset(c);
                var d = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), d);
              }),
              (a.exports = o));
          },
          { "../utils": 32, "./Uint8ArrayReader": 21 },
        ],
        20: [
          function (n, a, r) {
            var i = n("./DataReader");
            function o(c) {
              i.call(this, c);
            }
            (n("../utils").inherits(o, i),
              (o.prototype.byteAt = function (c) {
                return this.data.charCodeAt(this.zero + c);
              }),
              (o.prototype.lastIndexOfSignature = function (c) {
                return this.data.lastIndexOf(c) - this.zero;
              }),
              (o.prototype.readAndCheckSignature = function (c) {
                return c === this.readData(4);
              }),
              (o.prototype.readData = function (c) {
                this.checkOffset(c);
                var d = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), d);
              }),
              (a.exports = o));
          },
          { "../utils": 32, "./DataReader": 18 },
        ],
        21: [
          function (n, a, r) {
            var i = n("./ArrayReader");
            function o(c) {
              i.call(this, c);
            }
            (n("../utils").inherits(o, i),
              (o.prototype.readData = function (c) {
                if ((this.checkOffset(c), c === 0)) return new Uint8Array(0);
                var d = this.data.subarray(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), d);
              }),
              (a.exports = o));
          },
          { "../utils": 32, "./ArrayReader": 17 },
        ],
        22: [
          function (n, a, r) {
            var i = n("../utils"),
              o = n("../support"),
              c = n("./ArrayReader"),
              d = n("./StringReader"),
              u = n("./NodeBufferReader"),
              f = n("./Uint8ArrayReader");
            a.exports = function (p) {
              var m = i.getTypeOf(p);
              return (
                i.checkSupport(m),
                m !== "string" || o.uint8array
                  ? m === "nodebuffer"
                    ? new u(p)
                    : o.uint8array
                      ? new f(i.transformTo("uint8array", p))
                      : new c(i.transformTo("array", p))
                  : new d(p)
              );
            };
          },
          {
            "../support": 30,
            "../utils": 32,
            "./ArrayReader": 17,
            "./NodeBufferReader": 19,
            "./StringReader": 20,
            "./Uint8ArrayReader": 21,
          },
        ],
        23: [
          function (n, a, r) {
            ((r.LOCAL_FILE_HEADER = "PK"),
              (r.CENTRAL_FILE_HEADER = "PK"),
              (r.CENTRAL_DIRECTORY_END = "PK"),
              (r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07"),
              (r.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
              (r.DATA_DESCRIPTOR = "PK\x07\b"));
          },
          {},
        ],
        24: [
          function (n, a, r) {
            var i = n("./GenericWorker"),
              o = n("../utils");
            function c(d) {
              (i.call(this, "ConvertWorker to " + d), (this.destType = d));
            }
            (o.inherits(c, i),
              (c.prototype.processChunk = function (d) {
                this.push({
                  data: o.transformTo(this.destType, d.data),
                  meta: d.meta,
                });
              }),
              (a.exports = c));
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        25: [
          function (n, a, r) {
            var i = n("./GenericWorker"),
              o = n("../crc32");
            function c() {
              (i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0));
            }
            (n("../utils").inherits(c, i),
              (c.prototype.processChunk = function (d) {
                ((this.streamInfo.crc32 = o(
                  d.data,
                  this.streamInfo.crc32 || 0,
                )),
                  this.push(d));
              }),
              (a.exports = c));
          },
          { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
        ],
        26: [
          function (n, a, r) {
            var i = n("../utils"),
              o = n("./GenericWorker");
            function c(d) {
              (o.call(this, "DataLengthProbe for " + d),
                (this.propName = d),
                this.withStreamInfo(d, 0));
            }
            (i.inherits(c, o),
              (c.prototype.processChunk = function (d) {
                if (d) {
                  var u = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = u + d.data.length;
                }
                o.prototype.processChunk.call(this, d);
              }),
              (a.exports = c));
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        27: [
          function (n, a, r) {
            var i = n("../utils"),
              o = n("./GenericWorker");
            function c(d) {
              o.call(this, "DataWorker");
              var u = this;
              ((this.dataIsReady = !1),
                (this.index = 0),
                (this.max = 0),
                (this.data = null),
                (this.type = ""),
                (this._tickScheduled = !1),
                d.then(
                  function (f) {
                    ((u.dataIsReady = !0),
                      (u.data = f),
                      (u.max = (f && f.length) || 0),
                      (u.type = i.getTypeOf(f)),
                      u.isPaused || u._tickAndRepeat());
                  },
                  function (f) {
                    u.error(f);
                  },
                ));
            }
            (i.inherits(c, o),
              (c.prototype.cleanUp = function () {
                (o.prototype.cleanUp.call(this), (this.data = null));
              }),
              (c.prototype.resume = function () {
                return (
                  !!o.prototype.resume.call(this) &&
                  (!this._tickScheduled &&
                    this.dataIsReady &&
                    ((this._tickScheduled = !0),
                    i.delay(this._tickAndRepeat, [], this)),
                  !0)
                );
              }),
              (c.prototype._tickAndRepeat = function () {
                ((this._tickScheduled = !1),
                  this.isPaused ||
                    this.isFinished ||
                    (this._tick(),
                    this.isFinished ||
                      (i.delay(this._tickAndRepeat, [], this),
                      (this._tickScheduled = !0))));
              }),
              (c.prototype._tick = function () {
                if (this.isPaused || this.isFinished) return !1;
                var d = null,
                  u = Math.min(this.max, this.index + 16384);
                if (this.index >= this.max) return this.end();
                switch (this.type) {
                  case "string":
                    d = this.data.substring(this.index, u);
                    break;
                  case "uint8array":
                    d = this.data.subarray(this.index, u);
                    break;
                  case "array":
                  case "nodebuffer":
                    d = this.data.slice(this.index, u);
                }
                return (
                  (this.index = u),
                  this.push({
                    data: d,
                    meta: {
                      percent: this.max ? (this.index / this.max) * 100 : 0,
                    },
                  })
                );
              }),
              (a.exports = c));
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        28: [
          function (n, a, r) {
            function i(o) {
              ((this.name = o || "default"),
                (this.streamInfo = {}),
                (this.generatedError = null),
                (this.extraStreamInfo = {}),
                (this.isPaused = !0),
                (this.isFinished = !1),
                (this.isLocked = !1),
                (this._listeners = { data: [], end: [], error: [] }),
                (this.previous = null));
            }
            ((i.prototype = {
              push: function (o) {
                this.emit("data", o);
              },
              end: function () {
                if (this.isFinished) return !1;
                this.flush();
                try {
                  (this.emit("end"), this.cleanUp(), (this.isFinished = !0));
                } catch (o) {
                  this.emit("error", o);
                }
                return !0;
              },
              error: function (o) {
                return (
                  !this.isFinished &&
                  (this.isPaused
                    ? (this.generatedError = o)
                    : ((this.isFinished = !0),
                      this.emit("error", o),
                      this.previous && this.previous.error(o),
                      this.cleanUp()),
                  !0)
                );
              },
              on: function (o, c) {
                return (this._listeners[o].push(c), this);
              },
              cleanUp: function () {
                ((this.streamInfo =
                  this.generatedError =
                  this.extraStreamInfo =
                    null),
                  (this._listeners = []));
              },
              emit: function (o, c) {
                if (this._listeners[o])
                  for (var d = 0; d < this._listeners[o].length; d++)
                    this._listeners[o][d].call(this, c);
              },
              pipe: function (o) {
                return o.registerPrevious(this);
              },
              registerPrevious: function (o) {
                if (this.isLocked)
                  throw new Error(
                    "The stream '" + this + "' has already been used.",
                  );
                ((this.streamInfo = o.streamInfo),
                  this.mergeStreamInfo(),
                  (this.previous = o));
                var c = this;
                return (
                  o.on("data", function (d) {
                    c.processChunk(d);
                  }),
                  o.on("end", function () {
                    c.end();
                  }),
                  o.on("error", function (d) {
                    c.error(d);
                  }),
                  this
                );
              },
              pause: function () {
                return (
                  !this.isPaused &&
                  !this.isFinished &&
                  ((this.isPaused = !0),
                  this.previous && this.previous.pause(),
                  !0)
                );
              },
              resume: function () {
                if (!this.isPaused || this.isFinished) return !1;
                var o = (this.isPaused = !1);
                return (
                  this.generatedError &&
                    (this.error(this.generatedError), (o = !0)),
                  this.previous && this.previous.resume(),
                  !o
                );
              },
              flush: function () {},
              processChunk: function (o) {
                this.push(o);
              },
              withStreamInfo: function (o, c) {
                return (
                  (this.extraStreamInfo[o] = c),
                  this.mergeStreamInfo(),
                  this
                );
              },
              mergeStreamInfo: function () {
                for (var o in this.extraStreamInfo)
                  Object.prototype.hasOwnProperty.call(
                    this.extraStreamInfo,
                    o,
                  ) && (this.streamInfo[o] = this.extraStreamInfo[o]);
              },
              lock: function () {
                if (this.isLocked)
                  throw new Error(
                    "The stream '" + this + "' has already been used.",
                  );
                ((this.isLocked = !0), this.previous && this.previous.lock());
              },
              toString: function () {
                var o = "Worker " + this.name;
                return this.previous ? this.previous + " -> " + o : o;
              },
            }),
              (a.exports = i));
          },
          {},
        ],
        29: [
          function (n, a, r) {
            var i = n("../utils"),
              o = n("./ConvertWorker"),
              c = n("./GenericWorker"),
              d = n("../base64"),
              u = n("../support"),
              f = n("../external"),
              p = null;
            if (u.nodestream)
              try {
                p = n("../nodejs/NodejsStreamOutputAdapter");
              } catch {}
            function m(g, x) {
              return new f.Promise(function (y, v) {
                var b = [],
                  N = g._internalType,
                  w = g._outputType,
                  _ = g._mimeType;
                g.on("data", function (A, k) {
                  (b.push(A), x && x(k));
                })
                  .on("error", function (A) {
                    ((b = []), v(A));
                  })
                  .on("end", function () {
                    try {
                      var A = (function (k, C, M) {
                        switch (k) {
                          case "blob":
                            return i.newBlob(
                              i.transformTo("arraybuffer", C),
                              M,
                            );
                          case "base64":
                            return d.encode(C);
                          default:
                            return i.transformTo(k, C);
                        }
                      })(
                        w,
                        (function (k, C) {
                          var M,
                            E = 0,
                            S = null,
                            j = 0;
                          for (M = 0; M < C.length; M++) j += C[M].length;
                          switch (k) {
                            case "string":
                              return C.join("");
                            case "array":
                              return Array.prototype.concat.apply([], C);
                            case "uint8array":
                              for (
                                S = new Uint8Array(j), M = 0;
                                M < C.length;
                                M++
                              )
                                (S.set(C[M], E), (E += C[M].length));
                              return S;
                            case "nodebuffer":
                              return Buffer.concat(C);
                            default:
                              throw new Error(
                                "concat : unsupported type '" + k + "'",
                              );
                          }
                        })(N, b),
                        _,
                      );
                      y(A);
                    } catch (k) {
                      v(k);
                    }
                    b = [];
                  })
                  .resume();
              });
            }
            function h(g, x, y) {
              var v = x;
              switch (x) {
                case "blob":
                case "arraybuffer":
                  v = "uint8array";
                  break;
                case "base64":
                  v = "string";
              }
              try {
                ((this._internalType = v),
                  (this._outputType = x),
                  (this._mimeType = y),
                  i.checkSupport(v),
                  (this._worker = g.pipe(new o(v))),
                  g.lock());
              } catch (b) {
                ((this._worker = new c("error")), this._worker.error(b));
              }
            }
            ((h.prototype = {
              accumulate: function (g) {
                return m(this, g);
              },
              on: function (g, x) {
                var y = this;
                return (
                  g === "data"
                    ? this._worker.on(g, function (v) {
                        x.call(y, v.data, v.meta);
                      })
                    : this._worker.on(g, function () {
                        i.delay(x, arguments, y);
                      }),
                  this
                );
              },
              resume: function () {
                return (i.delay(this._worker.resume, [], this._worker), this);
              },
              pause: function () {
                return (this._worker.pause(), this);
              },
              toNodejsStream: function (g) {
                if (
                  (i.checkSupport("nodestream"),
                  this._outputType !== "nodebuffer")
                )
                  throw new Error(
                    this._outputType + " is not supported by this method",
                  );
                return new p(
                  this,
                  { objectMode: this._outputType !== "nodebuffer" },
                  g,
                );
              },
            }),
              (a.exports = h));
          },
          {
            "../base64": 1,
            "../external": 6,
            "../nodejs/NodejsStreamOutputAdapter": 13,
            "../support": 30,
            "../utils": 32,
            "./ConvertWorker": 24,
            "./GenericWorker": 28,
          },
        ],
        30: [
          function (n, a, r) {
            if (
              ((r.base64 = !0),
              (r.array = !0),
              (r.string = !0),
              (r.arraybuffer =
                typeof ArrayBuffer < "u" && typeof Uint8Array < "u"),
              (r.nodebuffer = typeof Buffer < "u"),
              (r.uint8array = typeof Uint8Array < "u"),
              typeof ArrayBuffer > "u")
            )
              r.blob = !1;
            else {
              var i = new ArrayBuffer(0);
              try {
                r.blob = new Blob([i], { type: "application/zip" }).size === 0;
              } catch {
                try {
                  var o = new (
                    self.BlobBuilder ||
                    self.WebKitBlobBuilder ||
                    self.MozBlobBuilder ||
                    self.MSBlobBuilder
                  )();
                  (o.append(i),
                    (r.blob = o.getBlob("application/zip").size === 0));
                } catch {
                  r.blob = !1;
                }
              }
            }
            try {
              r.nodestream = !!n("readable-stream").Readable;
            } catch {
              r.nodestream = !1;
            }
          },
          { "readable-stream": 16 },
        ],
        31: [
          function (n, a, r) {
            for (
              var i = n("./utils"),
                o = n("./support"),
                c = n("./nodejsUtils"),
                d = n("./stream/GenericWorker"),
                u = new Array(256),
                f = 0;
              f < 256;
              f++
            )
              u[f] =
                252 <= f
                  ? 6
                  : 248 <= f
                    ? 5
                    : 240 <= f
                      ? 4
                      : 224 <= f
                        ? 3
                        : 192 <= f
                          ? 2
                          : 1;
            u[254] = u[254] = 1;
            function p() {
              (d.call(this, "utf-8 decode"), (this.leftOver = null));
            }
            function m() {
              d.call(this, "utf-8 encode");
            }
            ((r.utf8encode = function (h) {
              return o.nodebuffer
                ? c.newBufferFrom(h, "utf-8")
                : (function (g) {
                    var x,
                      y,
                      v,
                      b,
                      N,
                      w = g.length,
                      _ = 0;
                    for (b = 0; b < w; b++)
                      ((64512 & (y = g.charCodeAt(b))) == 55296 &&
                        b + 1 < w &&
                        (64512 & (v = g.charCodeAt(b + 1))) == 56320 &&
                        ((y = 65536 + ((y - 55296) << 10) + (v - 56320)), b++),
                        (_ += y < 128 ? 1 : y < 2048 ? 2 : y < 65536 ? 3 : 4));
                    for (
                      x = o.uint8array ? new Uint8Array(_) : new Array(_),
                        b = N = 0;
                      N < _;
                      b++
                    )
                      ((64512 & (y = g.charCodeAt(b))) == 55296 &&
                        b + 1 < w &&
                        (64512 & (v = g.charCodeAt(b + 1))) == 56320 &&
                        ((y = 65536 + ((y - 55296) << 10) + (v - 56320)), b++),
                        y < 128
                          ? (x[N++] = y)
                          : (y < 2048
                              ? (x[N++] = 192 | (y >>> 6))
                              : (y < 65536
                                  ? (x[N++] = 224 | (y >>> 12))
                                  : ((x[N++] = 240 | (y >>> 18)),
                                    (x[N++] = 128 | ((y >>> 12) & 63))),
                                (x[N++] = 128 | ((y >>> 6) & 63))),
                            (x[N++] = 128 | (63 & y))));
                    return x;
                  })(h);
            }),
              (r.utf8decode = function (h) {
                return o.nodebuffer
                  ? i.transformTo("nodebuffer", h).toString("utf-8")
                  : (function (g) {
                      var x,
                        y,
                        v,
                        b,
                        N = g.length,
                        w = new Array(2 * N);
                      for (x = y = 0; x < N; )
                        if ((v = g[x++]) < 128) w[y++] = v;
                        else if (4 < (b = u[v]))
                          ((w[y++] = 65533), (x += b - 1));
                        else {
                          for (
                            v &= b === 2 ? 31 : b === 3 ? 15 : 7;
                            1 < b && x < N;
                          )
                            ((v = (v << 6) | (63 & g[x++])), b--);
                          1 < b
                            ? (w[y++] = 65533)
                            : v < 65536
                              ? (w[y++] = v)
                              : ((v -= 65536),
                                (w[y++] = 55296 | ((v >> 10) & 1023)),
                                (w[y++] = 56320 | (1023 & v)));
                        }
                      return (
                        w.length !== y &&
                          (w.subarray
                            ? (w = w.subarray(0, y))
                            : (w.length = y)),
                        i.applyFromCharCode(w)
                      );
                    })(
                      (h = i.transformTo(
                        o.uint8array ? "uint8array" : "array",
                        h,
                      )),
                    );
              }),
              i.inherits(p, d),
              (p.prototype.processChunk = function (h) {
                var g = i.transformTo(
                  o.uint8array ? "uint8array" : "array",
                  h.data,
                );
                if (this.leftOver && this.leftOver.length) {
                  if (o.uint8array) {
                    var x = g;
                    ((g = new Uint8Array(x.length + this.leftOver.length)).set(
                      this.leftOver,
                      0,
                    ),
                      g.set(x, this.leftOver.length));
                  } else g = this.leftOver.concat(g);
                  this.leftOver = null;
                }
                var y = (function (b, N) {
                    var w;
                    for (
                      (N = N || b.length) > b.length && (N = b.length),
                        w = N - 1;
                      0 <= w && (192 & b[w]) == 128;
                    )
                      w--;
                    return w < 0 || w === 0 ? N : w + u[b[w]] > N ? w : N;
                  })(g),
                  v = g;
                (y !== g.length &&
                  (o.uint8array
                    ? ((v = g.subarray(0, y)),
                      (this.leftOver = g.subarray(y, g.length)))
                    : ((v = g.slice(0, y)),
                      (this.leftOver = g.slice(y, g.length)))),
                  this.push({ data: r.utf8decode(v), meta: h.meta }));
              }),
              (p.prototype.flush = function () {
                this.leftOver &&
                  this.leftOver.length &&
                  (this.push({ data: r.utf8decode(this.leftOver), meta: {} }),
                  (this.leftOver = null));
              }),
              (r.Utf8DecodeWorker = p),
              i.inherits(m, d),
              (m.prototype.processChunk = function (h) {
                this.push({ data: r.utf8encode(h.data), meta: h.meta });
              }),
              (r.Utf8EncodeWorker = m));
          },
          {
            "./nodejsUtils": 14,
            "./stream/GenericWorker": 28,
            "./support": 30,
            "./utils": 32,
          },
        ],
        32: [
          function (n, a, r) {
            var i = n("./support"),
              o = n("./base64"),
              c = n("./nodejsUtils"),
              d = n("./external");
            function u(x) {
              return x;
            }
            function f(x, y) {
              for (var v = 0; v < x.length; ++v) y[v] = 255 & x.charCodeAt(v);
              return y;
            }
            (n("setimmediate"),
              (r.newBlob = function (x, y) {
                r.checkSupport("blob");
                try {
                  return new Blob([x], { type: y });
                } catch {
                  try {
                    var v = new (
                      self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder
                    )();
                    return (v.append(x), v.getBlob(y));
                  } catch {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              }));
            var p = {
              stringifyByChunk: function (x, y, v) {
                var b = [],
                  N = 0,
                  w = x.length;
                if (w <= v) return String.fromCharCode.apply(null, x);
                for (; N < w; )
                  (y === "array" || y === "nodebuffer"
                    ? b.push(
                        String.fromCharCode.apply(
                          null,
                          x.slice(N, Math.min(N + v, w)),
                        ),
                      )
                    : b.push(
                        String.fromCharCode.apply(
                          null,
                          x.subarray(N, Math.min(N + v, w)),
                        ),
                      ),
                    (N += v));
                return b.join("");
              },
              stringifyByChar: function (x) {
                for (var y = "", v = 0; v < x.length; v++)
                  y += String.fromCharCode(x[v]);
                return y;
              },
              applyCanBeUsed: {
                uint8array: (function () {
                  try {
                    return (
                      i.uint8array &&
                      String.fromCharCode.apply(null, new Uint8Array(1))
                        .length === 1
                    );
                  } catch {
                    return !1;
                  }
                })(),
                nodebuffer: (function () {
                  try {
                    return (
                      i.nodebuffer &&
                      String.fromCharCode.apply(null, c.allocBuffer(1))
                        .length === 1
                    );
                  } catch {
                    return !1;
                  }
                })(),
              },
            };
            function m(x) {
              var y = 65536,
                v = r.getTypeOf(x),
                b = !0;
              if (
                (v === "uint8array"
                  ? (b = p.applyCanBeUsed.uint8array)
                  : v === "nodebuffer" && (b = p.applyCanBeUsed.nodebuffer),
                b)
              )
                for (; 1 < y; )
                  try {
                    return p.stringifyByChunk(x, v, y);
                  } catch {
                    y = Math.floor(y / 2);
                  }
              return p.stringifyByChar(x);
            }
            function h(x, y) {
              for (var v = 0; v < x.length; v++) y[v] = x[v];
              return y;
            }
            r.applyFromCharCode = m;
            var g = {};
            ((g.string = {
              string: u,
              array: function (x) {
                return f(x, new Array(x.length));
              },
              arraybuffer: function (x) {
                return g.string.uint8array(x).buffer;
              },
              uint8array: function (x) {
                return f(x, new Uint8Array(x.length));
              },
              nodebuffer: function (x) {
                return f(x, c.allocBuffer(x.length));
              },
            }),
              (g.array = {
                string: m,
                array: u,
                arraybuffer: function (x) {
                  return new Uint8Array(x).buffer;
                },
                uint8array: function (x) {
                  return new Uint8Array(x);
                },
                nodebuffer: function (x) {
                  return c.newBufferFrom(x);
                },
              }),
              (g.arraybuffer = {
                string: function (x) {
                  return m(new Uint8Array(x));
                },
                array: function (x) {
                  return h(new Uint8Array(x), new Array(x.byteLength));
                },
                arraybuffer: u,
                uint8array: function (x) {
                  return new Uint8Array(x);
                },
                nodebuffer: function (x) {
                  return c.newBufferFrom(new Uint8Array(x));
                },
              }),
              (g.uint8array = {
                string: m,
                array: function (x) {
                  return h(x, new Array(x.length));
                },
                arraybuffer: function (x) {
                  return x.buffer;
                },
                uint8array: u,
                nodebuffer: function (x) {
                  return c.newBufferFrom(x);
                },
              }),
              (g.nodebuffer = {
                string: m,
                array: function (x) {
                  return h(x, new Array(x.length));
                },
                arraybuffer: function (x) {
                  return g.nodebuffer.uint8array(x).buffer;
                },
                uint8array: function (x) {
                  return h(x, new Uint8Array(x.length));
                },
                nodebuffer: u,
              }),
              (r.transformTo = function (x, y) {
                if (((y = y || ""), !x)) return y;
                r.checkSupport(x);
                var v = r.getTypeOf(y);
                return g[v][x](y);
              }),
              (r.resolve = function (x) {
                for (var y = x.split("/"), v = [], b = 0; b < y.length; b++) {
                  var N = y[b];
                  N === "." ||
                    (N === "" && b !== 0 && b !== y.length - 1) ||
                    (N === ".." ? v.pop() : v.push(N));
                }
                return v.join("/");
              }),
              (r.getTypeOf = function (x) {
                return typeof x == "string"
                  ? "string"
                  : Object.prototype.toString.call(x) === "[object Array]"
                    ? "array"
                    : i.nodebuffer && c.isBuffer(x)
                      ? "nodebuffer"
                      : i.uint8array && x instanceof Uint8Array
                        ? "uint8array"
                        : i.arraybuffer && x instanceof ArrayBuffer
                          ? "arraybuffer"
                          : void 0;
              }),
              (r.checkSupport = function (x) {
                if (!i[x.toLowerCase()])
                  throw new Error(x + " is not supported by this platform");
              }),
              (r.MAX_VALUE_16BITS = 65535),
              (r.MAX_VALUE_32BITS = -1),
              (r.pretty = function (x) {
                var y,
                  v,
                  b = "";
                for (v = 0; v < (x || "").length; v++)
                  b +=
                    "\\x" +
                    ((y = x.charCodeAt(v)) < 16 ? "0" : "") +
                    y.toString(16).toUpperCase();
                return b;
              }),
              (r.delay = function (x, y, v) {
                setImmediate(function () {
                  x.apply(v || null, y || []);
                });
              }),
              (r.inherits = function (x, y) {
                function v() {}
                ((v.prototype = y.prototype), (x.prototype = new v()));
              }),
              (r.extend = function () {
                var x,
                  y,
                  v = {};
                for (x = 0; x < arguments.length; x++)
                  for (y in arguments[x])
                    Object.prototype.hasOwnProperty.call(arguments[x], y) &&
                      v[y] === void 0 &&
                      (v[y] = arguments[x][y]);
                return v;
              }),
              (r.prepareContent = function (x, y, v, b, N) {
                return d.Promise.resolve(y)
                  .then(function (w) {
                    return i.blob &&
                      (w instanceof Blob ||
                        ["[object File]", "[object Blob]"].indexOf(
                          Object.prototype.toString.call(w),
                        ) !== -1) &&
                      typeof FileReader < "u"
                      ? new d.Promise(function (_, A) {
                          var k = new FileReader();
                          ((k.onload = function (C) {
                            _(C.target.result);
                          }),
                            (k.onerror = function (C) {
                              A(C.target.error);
                            }),
                            k.readAsArrayBuffer(w));
                        })
                      : w;
                  })
                  .then(function (w) {
                    var _ = r.getTypeOf(w);
                    return _
                      ? (_ === "arraybuffer"
                          ? (w = r.transformTo("uint8array", w))
                          : _ === "string" &&
                            (N
                              ? (w = o.decode(w))
                              : v &&
                                b !== !0 &&
                                (w = (function (A) {
                                  return f(
                                    A,
                                    i.uint8array
                                      ? new Uint8Array(A.length)
                                      : new Array(A.length),
                                  );
                                })(w))),
                        w)
                      : d.Promise.reject(
                          new Error(
                            "Can't read the data of '" +
                              x +
                              "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                          ),
                        );
                  });
              }));
          },
          {
            "./base64": 1,
            "./external": 6,
            "./nodejsUtils": 14,
            "./support": 30,
            setimmediate: 54,
          },
        ],
        33: [
          function (n, a, r) {
            var i = n("./reader/readerFor"),
              o = n("./utils"),
              c = n("./signature"),
              d = n("./zipEntry"),
              u = n("./support");
            function f(p) {
              ((this.files = []), (this.loadOptions = p));
            }
            ((f.prototype = {
              checkSignature: function (p) {
                if (!this.reader.readAndCheckSignature(p)) {
                  this.reader.index -= 4;
                  var m = this.reader.readString(4);
                  throw new Error(
                    "Corrupted zip or bug: unexpected signature (" +
                      o.pretty(m) +
                      ", expected " +
                      o.pretty(p) +
                      ")",
                  );
                }
              },
              isSignature: function (p, m) {
                var h = this.reader.index;
                this.reader.setIndex(p);
                var g = this.reader.readString(4) === m;
                return (this.reader.setIndex(h), g);
              },
              readBlockEndOfCentral: function () {
                ((this.diskNumber = this.reader.readInt(2)),
                  (this.diskWithCentralDirStart = this.reader.readInt(2)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                  (this.centralDirRecords = this.reader.readInt(2)),
                  (this.centralDirSize = this.reader.readInt(4)),
                  (this.centralDirOffset = this.reader.readInt(4)),
                  (this.zipCommentLength = this.reader.readInt(2)));
                var p = this.reader.readData(this.zipCommentLength),
                  m = u.uint8array ? "uint8array" : "array",
                  h = o.transformTo(m, p);
                this.zipComment = this.loadOptions.decodeFileName(h);
              },
              readBlockZip64EndOfCentral: function () {
                ((this.zip64EndOfCentralSize = this.reader.readInt(8)),
                  this.reader.skip(4),
                  (this.diskNumber = this.reader.readInt(4)),
                  (this.diskWithCentralDirStart = this.reader.readInt(4)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                  (this.centralDirRecords = this.reader.readInt(8)),
                  (this.centralDirSize = this.reader.readInt(8)),
                  (this.centralDirOffset = this.reader.readInt(8)),
                  (this.zip64ExtensibleData = {}));
                for (var p, m, h, g = this.zip64EndOfCentralSize - 44; 0 < g; )
                  ((p = this.reader.readInt(2)),
                    (m = this.reader.readInt(4)),
                    (h = this.reader.readData(m)),
                    (this.zip64ExtensibleData[p] = {
                      id: p,
                      length: m,
                      value: h,
                    }));
              },
              readBlockZip64EndOfCentralLocator: function () {
                if (
                  ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                  (this.relativeOffsetEndOfZip64CentralDir =
                    this.reader.readInt(8)),
                  (this.disksCount = this.reader.readInt(4)),
                  1 < this.disksCount)
                )
                  throw new Error("Multi-volumes zip are not supported");
              },
              readLocalFiles: function () {
                var p, m;
                for (p = 0; p < this.files.length; p++)
                  ((m = this.files[p]),
                    this.reader.setIndex(m.localHeaderOffset),
                    this.checkSignature(c.LOCAL_FILE_HEADER),
                    m.readLocalPart(this.reader),
                    m.handleUTF8(),
                    m.processAttributes());
              },
              readCentralDir: function () {
                var p;
                for (
                  this.reader.setIndex(this.centralDirOffset);
                  this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);
                )
                  ((p = new d(
                    { zip64: this.zip64 },
                    this.loadOptions,
                  )).readCentralPart(this.reader),
                    this.files.push(p));
                if (
                  this.centralDirRecords !== this.files.length &&
                  this.centralDirRecords !== 0 &&
                  this.files.length === 0
                )
                  throw new Error(
                    "Corrupted zip or bug: expected " +
                      this.centralDirRecords +
                      " records in central dir, got " +
                      this.files.length,
                  );
              },
              readEndOfCentral: function () {
                var p = this.reader.lastIndexOfSignature(
                  c.CENTRAL_DIRECTORY_END,
                );
                if (p < 0)
                  throw this.isSignature(0, c.LOCAL_FILE_HEADER)
                    ? new Error(
                        "Corrupted zip: can't find end of central directory",
                      )
                    : new Error(
                        "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                      );
                this.reader.setIndex(p);
                var m = p;
                if (
                  (this.checkSignature(c.CENTRAL_DIRECTORY_END),
                  this.readBlockEndOfCentral(),
                  this.diskNumber === o.MAX_VALUE_16BITS ||
                    this.diskWithCentralDirStart === o.MAX_VALUE_16BITS ||
                    this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS ||
                    this.centralDirRecords === o.MAX_VALUE_16BITS ||
                    this.centralDirSize === o.MAX_VALUE_32BITS ||
                    this.centralDirOffset === o.MAX_VALUE_32BITS)
                ) {
                  if (
                    ((this.zip64 = !0),
                    (p = this.reader.lastIndexOfSignature(
                      c.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                    )) < 0)
                  )
                    throw new Error(
                      "Corrupted zip: can't find the ZIP64 end of central directory locator",
                    );
                  if (
                    (this.reader.setIndex(p),
                    this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                    this.readBlockZip64EndOfCentralLocator(),
                    !this.isSignature(
                      this.relativeOffsetEndOfZip64CentralDir,
                      c.ZIP64_CENTRAL_DIRECTORY_END,
                    ) &&
                      ((this.relativeOffsetEndOfZip64CentralDir =
                        this.reader.lastIndexOfSignature(
                          c.ZIP64_CENTRAL_DIRECTORY_END,
                        )),
                      this.relativeOffsetEndOfZip64CentralDir < 0))
                  )
                    throw new Error(
                      "Corrupted zip: can't find the ZIP64 end of central directory",
                    );
                  (this.reader.setIndex(
                    this.relativeOffsetEndOfZip64CentralDir,
                  ),
                    this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),
                    this.readBlockZip64EndOfCentral());
                }
                var h = this.centralDirOffset + this.centralDirSize;
                this.zip64 &&
                  ((h += 20), (h += 12 + this.zip64EndOfCentralSize));
                var g = m - h;
                if (0 < g)
                  this.isSignature(m, c.CENTRAL_FILE_HEADER) ||
                    (this.reader.zero = g);
                else if (g < 0)
                  throw new Error(
                    "Corrupted zip: missing " + Math.abs(g) + " bytes.",
                  );
              },
              prepareReader: function (p) {
                this.reader = i(p);
              },
              load: function (p) {
                (this.prepareReader(p),
                  this.readEndOfCentral(),
                  this.readCentralDir(),
                  this.readLocalFiles());
              },
            }),
              (a.exports = f));
          },
          {
            "./reader/readerFor": 22,
            "./signature": 23,
            "./support": 30,
            "./utils": 32,
            "./zipEntry": 34,
          },
        ],
        34: [
          function (n, a, r) {
            var i = n("./reader/readerFor"),
              o = n("./utils"),
              c = n("./compressedObject"),
              d = n("./crc32"),
              u = n("./utf8"),
              f = n("./compressions"),
              p = n("./support");
            function m(h, g) {
              ((this.options = h), (this.loadOptions = g));
            }
            ((m.prototype = {
              isEncrypted: function () {
                return (1 & this.bitFlag) == 1;
              },
              useUTF8: function () {
                return (2048 & this.bitFlag) == 2048;
              },
              readLocalPart: function (h) {
                var g, x;
                if (
                  (h.skip(22),
                  (this.fileNameLength = h.readInt(2)),
                  (x = h.readInt(2)),
                  (this.fileName = h.readData(this.fileNameLength)),
                  h.skip(x),
                  this.compressedSize === -1 || this.uncompressedSize === -1)
                )
                  throw new Error(
                    "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                  );
                if (
                  (g = (function (y) {
                    for (var v in f)
                      if (
                        Object.prototype.hasOwnProperty.call(f, v) &&
                        f[v].magic === y
                      )
                        return f[v];
                    return null;
                  })(this.compressionMethod)) === null
                )
                  throw new Error(
                    "Corrupted zip : compression " +
                      o.pretty(this.compressionMethod) +
                      " unknown (inner file : " +
                      o.transformTo("string", this.fileName) +
                      ")",
                  );
                this.decompressed = new c(
                  this.compressedSize,
                  this.uncompressedSize,
                  this.crc32,
                  g,
                  h.readData(this.compressedSize),