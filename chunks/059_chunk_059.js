        user: n,
        createChat: a,
        sendMessage: r,
        getRoleBoundUser: i,
        chats: o = [],
        updateContact: c,
        apiConfig: d,
        addApiLog: u,
      } = vn(),
      f = s,
      {
        generateVideoWithComments: p,
        generateVideosWithCommentsBatch: m,
        simulatePostReaction: h,
        searchContent: g,
        generateResidentHotSearches: x,
        isGenerating: y,
        generateNpcHistoryVideos: v,
        generateNpcReply: b,
        generateNearbyRolePrivateReplyWithAffection: N,
        batchCheckFollowBack: w,
        followAddressBookContact: _,
        generateStrangerPasserDmLine: A,
      } = l2(),
      [k, C] = l.useState([]),
      [M, E] = l.useState([]),
      [S, j] = l.useState([]),
      [T, I] = l.useState([]),
      [L, B] = l.useState([]),
      [F, D] = l.useState("recommend"),
      [$, P] = l.useState([]),
      [z, O] = l.useState(0),
      [Z, K] = l.useState(0),
      [q, V] = l.useState(!0),
      [ne, le] = l.useState(!1),
      [ie, X] = l.useState(null),
      [je, xe] = l.useState([]),
      [ye, R] = l.useState([]),
      [oe, ee] = l.useState([]),
      [H, Y] = l.useState(!1),
      [U, ce] = l.useState(null),
      [pe, se] = l.useState(!1),
      [Te, ke] = l.useState(null),
      [W, ue] = l.useState(!1),
      [re, he] = l.useState(!1),
      [ge, J] = l.useState(""),
      G = l.useCallback((kt) => {
        !Array.isArray(kt) ||
          kt.length === 0 ||
          E((Tt) => {
            const Yt = Array.isArray(Tt) ? Tt : [];
            let de = !1;
            const Me = new Map(
                Yt.map((Dt) => [Dt == null ? void 0 : Dt.id, Dt]),
              ),
              et = new Map();
            for (const Dt of kt) {
              if (
                !Dt ||
                Dt.type !== "comment" ||
                !Dt.videoId ||
                !Me.has(Dt.videoId)
              )
                continue;
              const Mt = et.get(Dt.videoId) || [];
              (Mt.push(Dt), et.set(Dt.videoId, Mt));
            }
            if (et.size === 0) return Tt;
            const Ct = Yt.map((Dt) => {
              var rs, gs;
              if (!(Dt != null && Dt.id)) return Dt;
              const Mt = et.get(Dt.id);
              if (!Mt || Mt.length === 0) return Dt;
              const Ut = Array.isArray(Dt.comments) ? Dt.comments : [],
                ws = new Set(
                  Ut.map((ps) => String((ps == null ? void 0 : ps.id) ?? "")),
                ),
                Ls = new Set(
                  Ut.map((ps) => {
                    var Is, As;
                    return `${String(((Is = ps == null ? void 0 : ps.user) == null ? void 0 : Is.id) || ((As = ps == null ? void 0 : ps.user) == null ? void 0 : As.name) || "")}::${String((ps == null ? void 0 : ps.content) || "")}`;
                  }),
                ),
                Ot = [];
              for (const ps of Mt) {
                const Is = String(ps.id ?? ""),
                  As = `${String(((rs = ps == null ? void 0 : ps.user) == null ? void 0 : rs.id) || ((gs = ps == null ? void 0 : ps.user) == null ? void 0 : gs.name) || "")}::${String((ps == null ? void 0 : ps.content) || "")}`;
                (Is && ws.has(Is)) ||
                  Ls.has(As) ||
                  Ot.push({
                    id: ps.id ?? Date.now(),
                    user: ps.user || {
                      name: "网友",
                      avatar: null,
                      id: `temp_user_${Date.now()}`,
                    },
                    content: ps.content || "",
                    likes: 0,
                    timestamp:
                      typeof ps.timestamp == "number"
                        ? ps.timestamp
                        : Date.now(),
                    location: "未知",
                    replyCount: 0,
                    isLiked: !1,
                    replies: [],
                  });
              }
              return Ot.length === 0
                ? Dt
                : ((de = !0), { ...Dt, comments: [...Ot, ...Ut] });
            });
            return de ? Ct : Tt;
          });
      }, []),
      [we, Q] = l.useState(nu),
      [ve, Ve] = l.useState([]),
      [Ae, te] = l.useState({}),
      [Se, Fe] = l.useState({}),
      [$e, tt] = l.useState({}),
      [Xe, ht] = l.useState({}),
      [Pe, ut] = l.useState({}),
      [_t, Ee] = l.useState({}),
      [fe, He] = l.useState({}),
      [Ie, Ce] = l.useState({}),
      [Re, De] = l.useState({}),
      [at, ft] = l.useState({}),
      vt = l.useRef({}),
      Oe = l.useRef({}),
      Qe = l.useRef({}),
      Ye = l.useRef({}),
      Ze = l.useRef({}),
      Ue = l.useRef([]),
      me = l.useRef([]);
    (l.useEffect(() => {
      Qe.current = Se || {};
    }, [Se]),
      l.useEffect(() => {
        Ye.current = $e || {};
      }, [$e]),
      l.useEffect(() => {
        Ze.current = _t || {};
      }, [_t]),
      l.useEffect(() => {
        Ue.current = je || [];
      }, [je]),
      l.useEffect(() => {
        me.current = ye || [];
      }, [ye]));
    const jt = l.useRef({}),
      Gt = l.useRef({});
    (l.useEffect(() => {
      jt.current = Pe || {};
    }, [Pe]),
      l.useEffect(() => {
        Gt.current = Xe || {};
      }, [Xe]));
    const [Pt, Wt] = l.useState([]),
      [ct, Kt] = l.useState({}),
      [fs, gt] = l.useState({}),
      [ae, nt] = l.useState({
        name: "",
        avatar: "",
        douyinPersona: "",
        isPublicFigure: !1,
        sourcePresetId: null,
      }),
      [It, Xt] = l.useState([]),
      [bs, ss] = l.useState([]),
      [_s, qs] = l.useState({
        恐怖: [],
        浪漫: [],
        搞笑: [],
        温馨: [],
        忧郁: [],
      }),
      [Bs, Js] = l.useState({}),
      [Xs, gn] = l.useState({}),
      sn = l.useRef({}),
      ln = l.useRef({}),
      rn = l.useCallback((kt) => {
        if (!Array.isArray(kt) || kt.length === 0) return;
        const Tt = { ...ln.current };
        for (const Yt of kt)
          Yt != null &&
            Yt.id &&
            (Tt[Yt.id] = {
              id: Yt.id,
              name: Yt.name || "用户",
              avatar: Yt.avatar,
              bio: Yt.bio || "",
              signature: Yt.signature || Yt.bio || "",
              style: Yt.style,
              relation: Yt.relation,
              fans: Yt.fans,
              isOfficial: !!Yt.isOfficial,
              douyinId: Yt.douyinId,
              sourceType: Yt.sourceType,
              contactId: Yt.contactId,
            });
        ln.current = Tt;
      }, []),
      wt = l.useRef({}),
      [xs, ot] = l.useState({});
    (l.useEffect(() => {
      const kt = (Tt) => {
        var Ct, Dt;
        const Yt = String(
          ((Ct = Tt.detail) == null ? void 0 : Ct.contactId) || "",
        );
        if (!Yt) return;
        const de = (Dt = Tt.detail) == null ? void 0 : Dt.contact,
          Me = new Set(
            [Yt, de == null ? void 0 : de.douyinId].filter(Boolean).map(String),
          );
        (xe((Mt) => (Mt || []).filter((Ut) => !Me.has(String(Ut)))),
          R((Mt) => (Mt || []).filter((Ut) => !Me.has(String(Ut)))),
          ee((Mt) =>
            (Mt || []).filter(
              (Ut) => Ut && !Me.has(String(Ut.contactId || "")),
            ),
          ));
        let et = [];
        (Ve((Mt) => {
          const Ut = Mt || [];
          return (
            (et = Ut.filter(
              (ws) => ws.contactId && Me.has(String(ws.contactId)),
            ).map((ws) => String(ws.id))),
            Ut.filter((ws) => !ws.contactId || !Me.has(String(ws.contactId)))
          );
        }),
          requestAnimationFrame(() => {
            if (!et.length) return;
            const Mt = new Set(et);
            (te((Ut) => {
              const ws = { ...(Ut || {}) };
              return (Mt.forEach((Ls) => delete ws[Ls]), ws);
            }),
              Kt((Ut) => {
                const ws = { ...(Ut || {}) };
                return (Mt.forEach((Ls) => delete ws[Ls]), ws);
              }),
              gt((Ut) => {
                const ws = { ...(Ut || {}) };
                return (Mt.forEach((Ls) => delete ws[Ls]), ws);
              }),
              Js((Ut) => {
                const ws = { ...(Ut || {}) };
                return (Mt.forEach((Ls) => delete ws[Ls]), ws);
              }),
              gn((Ut) => {
                const ws = { ...(Ut || {}) };
                return (Mt.forEach((Ls) => delete ws[Ls]), ws);
              }),
              ot((Ut) => {
                const ws = { ...(Ut || {}) };
                return (Mt.forEach((Ls) => delete ws[Ls]), ws);
              }));
          }),
          Fe((Mt) => {
            const Ut = { ...(Mt || {}) };
            return (Me.forEach((ws) => delete Ut[ws]), Ut);
          }),
          He((Mt) => {
            const Ut = { ...(Mt || {}) };
            return (Me.forEach((ws) => delete Ut[ws]), Ut);
          }));
      };
      return (
        window.addEventListener(Jl, kt),
        () => window.removeEventListener(Jl, kt)
      );
    }, []),
      l.useRef(null),
      l.useEffect(() => {
        if (!W) return;
        const kt = sn.current || {},
          Tt = {},
          Yt = {};
        let de = !1;
        const Me = (et, Ct, Dt) => {
          const Mt = (Ct || []).filter(Boolean).map(String),
            Ut = [],
            ws = new Set();
          for (const ps of Mt) ws.has(ps) || (ws.add(ps), Ut.push(ps));
          if (Dt <= 0 || Ut.length === 0) return {};
          const Ls = (ps, Is) => {
              const As = ps.length;
              if (As === 0) return ps;
              const Ks = ((Is % As) + As) % As;
              return ps.slice(Ks).concat(ps.slice(0, Ks));
            },
            Ot = Array.from({ length: Dt }, (ps, Is) => Is),
            rs = {},
            gs = Math.ceil(Ut.length / Dt);
          for (let ps = 0; ps < gs; ps++) {
            const Is = ps === 0 ? Ot : Ls(Ot, ps),
              As = ps * Dt,
              Ks = Math.min(As + Dt, Ut.length);
            for (let on = As; on < Ks; on++) rs[Ut[on]] = Is[on - As];
          }
          return rs;
        };
        (Object.entries(Bs || {}).forEach(([et, Ct]) => {
          var rs;
          const Dt = Array.isArray(Ct) ? Ct.length : 0;
          Tt[et] = Dt;
          const Mt = kt[et];
          if (Mt === void 0 || Mt === Dt) return;
          if (Dt === 0) {
            Xs[et] && ((Yt[et] = {}), (de = !0));
            return;
          }
          const Ut = Xs[et] || {},
            ws = (rs = wt.current) == null ? void 0 : rs[et],
            Ls = Array.isArray(ws) && ws.length > 0 ? ws : Object.keys(Ut),
            Ot = Me(et, Ls, Dt);
          ((Yt[et] = Ot), (de = !0));
        }),
          (sn.current = Tt),
          de && gn((et) => ({ ...et, ...Yt })));
      }, [Bs, W]),
      l.useEffect(() => {
        (async () => {
          var wa;
          const Tt = await be.get("video_app_user");
          if (Tt) X(Tt);
          else {
            const ia = {
              id: "me",
              name: (n == null ? void 0 : n.name) || "我",
              avatar: (n == null ? void 0 : n.avatar) || null,
              followers: 0,
              following: 0,
              coins: 100,
              settings: { autoPlay: !0, bgmEnabled: !0, saveHistory: !1 },
            };
            (X(ia), await be.set("video_app_user", ia));
          }
          const Yt = await be.get("video_app_following");
          Yt != null && xe(Array.isArray(Yt) ? Yt : []);
          const de = await be.get("video_app_friends");
          de != null && R(Array.isArray(de) ? de : []);
          const Me = await be.get("video_app_recent_share_targets");
          Me && Array.isArray(Me) && ee(Me);
          const et = await be.get("video_app_settings");
          if (et && typeof et == "object") {
            const { dayMode: ia, ...oa } = et;
            Q({ ...nu, ...oa });
          } else (await be.set("video_app_settings", nu), Q(nu));
          const Ct = await be.get("video_app_npcs");
          if (Ct != null) {
            const ia = Array.isArray(Ct) ? Ct : [];
            if (ia.length > 0) {
              const oa =
                  (await be.get("video_app_last_update_time")) || Date.now(),
                La = Date.now();
              if ((La - oa) / (1e3 * 60 * 60) > 1) {
                const ja = ia.map((Ei) => {
                  if (Math.random() > 0.7) {
                    const Li = 1 + Math.random() * 0.05;
                    return {
                      ...Ei,
                      followers: Math.floor((Ei.followers || 1e3) * Li),
                      likes: Math.floor((Ei.likes || 5e3) * Li),
                    };
                  }
                  return Ei;
                });
                (Ve(ja), await be.set("video_app_last_update_time", La));
              } else Ve(ia);
            } else (Ve([]), await be.set("video_app_npcs", []));
          } else
            (await be.set("video_app_npcs", Vk),
              Ve(Vk),
              await be.set("video_app_last_update_time", Date.now()));
          const Mt = await be.get("video_app_world_presets");
          Mt != null && Wt(Array.isArray(Mt) ? Mt : []);
          const Ut = await be.get("video_app_user_persona");
          if (Ut && typeof Ut == "object") {
            const { realLifeFriends: ia, ...oa } = Ut;
            nt(oa);
          }
          const ws = await be.get("video_app_user_presets");
          ws != null && Xt(Array.isArray(ws) ? ws : []);
          const Ls = await be.get("video_app_notifications");
          Ls != null && P(Array.isArray(Ls) ? Ls : []);
          const Ot = await be.get("video_app_hot_searches");
          Array.isArray(Ot) && Ot.length > 0 && B(Ot);
          const rs = await be.get("video_app_npc_videos");
          rs && te(rs);
          const gs = await be.get("video_app_npc_liked_videos");
          gs && typeof gs == "object" && Kt(gs);
          const ps = await be.get("video_app_npc_following_lists");
          ps && typeof ps == "object" && gt(ps);
          const Is = await be.get("video_app_bgm_library");
          Is && typeof Is == "object" && qs(Is);
          const As = await be.get("video_app_cover_libraries");
          As && typeof As == "object" && Js(As);
          const Ks = await be.get("video_app_video_cover_assignments");
          Ks && typeof Ks == "object" && gn(Ks);
          const on = await be.get("video_app_exclusive_bgm_libraries");
          on && typeof on == "object" && ot(on);
          const tn = await be.get("video_app_private_chats");
          tn && Fe(tn);
          const dn = await be.get("video_app_stranger_chat_peers");
          dn && typeof dn == "object" && tt(dn);
          const yn = await be.get("video_app_stranger_dm_unlocked");
          yn && typeof yn == "object" && Ee(yn);
          const va = await be.get("video_app_nearby_truth_profiles");
          va && typeof va == "object" && ht(va);
          let Bn = {};
          const Ea = await be.get(Wk);
          if (Ea && typeof Ea == "object" && !Array.isArray(Ea))
            for (const ia of Object.values(Ea)) {
              if (!ia || typeof ia != "object") continue;
              const oa = sy(Am({ ...ia }));
              oa && (Bn[oa.id] = oa);
            }
          try {
            const ia = await be.get(VJ);
            if ((wa = ia == null ? void 0 : ia.cards) != null && wa.length)
              for (const oa of ia.cards) {
                const La = sy(Am({ ...oa }));
                La && (Bn[La.id] = La);
              }
          } catch {}
          Object.keys(Bn).length > 0 && ut(Bn);
          const Fn = await be.get(Yk);
          Fn && typeof Fn == "object" && !Array.isArray(Fn) && Ce(Fn);
          let ha = await be.get("video_app_videos");
          if (ha && Array.isArray(ha) && ha.length > 0) {
            const ia =
              (et == null ? void 0 : et.historyLimit) || nu.historyLimit;
            (ha.length > ia && (ha = ha.slice(-ia)), C(ha));
          }
          let Cr = await be.get("video_app_my_videos");
          Cr && Array.isArray(Cr) && E(Cr);
          const hr = await be.get("video_app_active_index"),
            ar = await be.get("video_app_play_mode"),
            zs =
              typeof ar == "string" &&
              ["recommend", "works", "search", "npc_works"].includes(ar)
                ? ar
                : "recommend";
          D(zs);
          const En =
              zs === "recommend"
                ? (ha && ha.length) || 0
                : (zs === "works" && Cr && Cr.length) || 0,
            Vn = typeof hr == "number" ? hr : 0;
          O(En > 0 ? Math.max(0, Math.min(Vn, En - 1)) : 0);
          const sa = await be.get("video_app_last_recommend_index");
          (typeof sa == "number" && sa >= 0 && K(sa), ue(!0));
        })();
      }, [n]),
      l.useEffect(() => {
        if (!W) return;
        const kt = setTimeout(() => {
          const Tt = we.historyLimit || 50,
            Yt = k.length > Tt ? k.slice(-Tt) : k;
          be.set("video_app_videos", Yt);
        }, 1e3);
        return () => clearTimeout(kt);
      }, [k, W, we.historyLimit]),
      l.useEffect(() => {
        W && be.set("video_app_my_videos", M);
      }, [M, W]),
      l.useEffect(() => {
        W && be.set("video_app_following", je);
      }, [je, W]),
      l.useEffect(() => {
        W && be.set("video_app_friends", ye);
      }, [ye, W]),
      l.useEffect(() => {
        W && be.set("video_app_recent_share_targets", oe);
      }, [oe, W]),
      l.useEffect(() => {
        W && be.set("video_app_settings", we);
      }, [we, W]),
      l.useEffect(() => {
        W &&
          (be.set("video_app_npcs", ve),
          be.set("video_app_npcs_ever_saved", !0));
      }, [ve, W]),
      l.useEffect(() => {
        W && be.set("video_app_world_presets", Pt);
      }, [Pt, W]),
      l.useEffect(() => {
        W && be.set("video_app_user_persona", ae);
      }, [ae, W]),
      l.useEffect(() => {
        W && be.set("video_app_user_presets", It);
      }, [It, W]),
      l.useEffect(() => {
        W && be.set("video_app_notifications", $);
      }, [$, W]),
      l.useEffect(() => {
        W && G($);
      }, [$, W, G]),
      l.useEffect(() => {
        W && be.set("video_app_hot_searches", L);
      }, [L, W]),
      l.useEffect(() => {
        W && be.set("video_app_npc_videos", Ae);
      }, [Ae, W]),
      l.useEffect(() => {
        W && be.set("video_app_npc_liked_videos", ct);
      }, [ct, W]),
      l.useEffect(() => {
        W && be.set("video_app_npc_following_lists", fs);
      }, [fs, W]),
      l.useEffect(() => {
        W && be.set("video_app_bgm_library", _s);
      }, [_s, W]),
      l.useEffect(() => {
        W && be.set("video_app_cover_libraries", Bs);
      }, [Bs, W]),
      l.useEffect(() => {
        W && be.set("video_app_video_cover_assignments", Xs);
      }, [Xs, W]),
      l.useEffect(() => {
        W && be.set("video_app_exclusive_bgm_libraries", xs);
      }, [xs, W]));
    const st = (kt, Tt) => {
        kt && Kt((Yt) => ({ ...Yt, [kt]: Array.isArray(Tt) ? Tt : [] }));
      },
      $t = (kt, Tt) => {
        kt && gt((Yt) => ({ ...Yt, [kt]: Array.isArray(Tt) ? Tt : [] }));
      },
      Ft = "chat_app_douyin_memories",
      es = 30,
      At = async (kt, Tt, Yt, de) => {
        if (!kt || !Tt || !de) return;
        const Me = (ve || []).find((et) => et.id === kt);
        if (
          !(
            !Me ||
            Me.linkMemory !== !0 ||
            !Array.isArray(Me.linkedChatIds) ||
            Me.linkedChatIds.length === 0
          )
        )
          try {
            const et = (await be.get(Ft)) || {};
            for (const Ct of Me.linkedChatIds) {
              const Dt = et[Ct] || [];
              (Dt.push({
                npcId: kt,
                npcName: Tt,
                at: Date.now(),
                type: Yt,
                summary: String(de).slice(0, 500),
              }),
                Dt.sort((Mt, Ut) => Ut.at - Mt.at),
                (et[Ct] = Dt.slice(0, es)));
            }
            await be.set(Ft, et);
          } catch {}
      };
    (l.useEffect(() => {
      W && be.set("video_app_private_chats", Se);
    }, [Se, W]),
      l.useEffect(() => {
        W && be.set("video_app_stranger_chat_peers", $e);
      }, [$e, W]),
      l.useEffect(() => {
        W && be.set("video_app_stranger_dm_unlocked", _t);
      }, [_t, W]),
      l.useEffect(() => {
        W && be.set("video_app_nearby_truth_profiles", Xe);
      }, [Xe, W]),
      l.useEffect(() => {
        W && be.set(Wk, Pe);
      }, [Pe, W]),
      l.useEffect(() => {
        W && be.set(Yk, Ie);
      }, [Ie, W]),
      l.useEffect(() => {
        W && be.set("video_app_active_index", z);
      }, [z, W]),
      l.useEffect(() => {
        W && F === "recommend" && K(z);
      }, [z, F, W]),
      l.useEffect(() => {
        W && be.set("video_app_last_recommend_index", Z);
      }, [Z, W]),
      l.useEffect(() => {
        W && be.set("video_app_play_mode", F);
      }, [F, W]));
    const Jt = (kt) => Q(kt),
      Vt = (kt) => Ve((Tt) => [...Tt, kt]),
      qt = (kt) => Ve((Tt) => Tt.map((Yt) => (Yt.id === kt.id ? kt : Yt))),
      Lt = (kt) => Ve((Tt) => Tt.filter((Yt) => Yt.id !== kt));
    l.useEffect(() => {
      const kt = new Map((ve || []).map((Yt) => [Yt.id, Yt])),
        Tt = (Yt) =>
          (Yt || []).map((de) => {
            const Me = de == null ? void 0 : de.author;
            if (!(Me != null && Me.id)) return de;
            const et = kt.get(Me.id);
            if (!et) return de;
            const Ct = et.name ?? Me.name,
              Dt = et.avatar ?? Me.avatar,
              Mt = et.contactId ?? Me.contactId,
              Ut = et.douyinId ?? Me.douyinId,
              ws = et.knowsUserIdentity === !0,
              Ls = et.isBilingual === !0;
            return Me.name === Ct &&
              Me.avatar === Dt &&
              Me.contactId === Mt &&
              String(Me.douyinId || "") === String(Ut || "") &&
              (Me.knowsUserIdentity === !0) === ws &&
              (Me.isBilingual === !0) === Ls
              ? de
              : {
                  ...de,
                  author: {
                    ...Me,
                    name: Ct,
                    avatar: Dt,
                    contactId: Mt,
                    douyinId: Ut,
                    knowsUserIdentity: ws,
                    isBilingual: Ls,
                  },
                };
          });
      (C((Yt) => Tt(Yt)),
        E((Yt) => Tt(Yt)),
        I((Yt) => Tt(Yt)),
        j((Yt) => Tt(Yt)),
        te((Yt) => {
          if (!Yt || typeof Yt != "object") return Yt;
          let de = !1;
          const Me = { ...Yt };
          for (const [et, Ct] of Object.entries(Yt)) {
            if (!Array.isArray(Ct) || Ct.length === 0) continue;
            const Dt = Tt(Ct);
            Dt !== Ct && ((Me[et] = Dt), (de = !0));
          }
          return de ? Me : Yt;
        }));
    }, [ve]);
    const Qt = (kt) =>
        Wt((Tt) => [...Tt, { ...kt, id: Date.now().toString() }]),
      js = (kt) => Wt((Tt) => Tt.filter((Yt) => Yt.id !== kt)),
      cs = (kt) => {
        if (!kt || typeof kt != "object") return;
        const { realLifeFriends: Tt, ...Yt } = kt;
        nt(Yt);
      },
      Ne = (kt) => {
        const { realLifeFriends: Tt, ...Yt } = kt || {};
        Xt((de) => [...de, { ...Yt, id: Date.now().toString() }]);
      },
      Je = (kt) => Xt((Tt) => Tt.filter((Yt) => Yt.id !== kt)),
      St = async () => {
        (C([]),
          E([]),
          await be.remove("video_app_videos"),
          await be.remove("video_app_my_videos"),
          xt(!0));
      },
      Be = async (kt, Tt, Yt = null, de = "text", Me = null) => {
        const et = Se[kt] || [];
        if (
          !et.some((Mt) => Mt && !Mt.isMe && Mt.type !== "system") &&
          et.filter((Ut) => Ut && Ut.isMe).length >= 3
        ) {
          const Ut = {
            id: Date.now(),
            type: "system",
            text: "对方未回复前最多发 3 条私信，回复后再继续聊～",
            timestamp: Date.now(),
          };
          Fe((ws) => ({ ...ws, [kt]: [...(ws[kt] || []), Ut] }));
          return;
        }
        const Dt = {
          id: Date.now(),
          type: de || "text",
          isMe: !0,
          text: typeof Tt == "string" ? Tt : "",
          timestamp: Date.now(),
          ...(Yt ? { replyTo: Yt } : {}),
          ...(Me && typeof Me == "object" ? Me : {}),
        };
        (Fe((Mt) => ({ ...Mt, [kt]: [...(Mt[kt] || []), Dt] })),
          Ye.current[kt] && Ee((Mt) => ({ ...Mt, [kt]: !0 })));
      },
      Ke = l.useCallback((kt, Tt, Yt = "text", de = null) => {
        const Me = String(kt || "").trim();
        if (!Me) return;
        const et = {
          id: Date.now() + Math.floor(Math.random() * 1e3),
          type: Yt || "text",
          isMe: !1,
          text: typeof Tt == "string" ? Tt : "",
          timestamp: Date.now(),
          ...(de && typeof de == "object" ? de : {}),
        };
        (Fe((Dt) => ({ ...Dt, [Me]: [...(Dt[Me] || []), et] })),
          Ye.current[Me] && Ee((Dt) => ({ ...Dt, [Me]: !0 })),
          !!(jt.current[Me] || Gt.current[Me]) &&
            queueMicrotask(() => {
              (De((Dt) => ({ ...Dt, [Me]: !0 })),
                ft((Dt) => ({ ...Dt, [Me]: !1 })));
            }));
      }, []),
      Nt = l.useCallback(
        async (kt) => {
          var et, Ct;
          const Tt = String(kt || "").trim();
          if (!Tt) return "";
          const Yt = Array.isArray(Se == null ? void 0 : Se[Tt]) ? Se[Tt] : [];
          if (Yt.length === 0) return "暂无聊天记录可总结。";
          const de =
              String(
                ((et = Pe == null ? void 0 : Pe[Tt]) == null
                  ? void 0
                  : et.name) ||
                  ((Ct = $e == null ? void 0 : $e[Tt]) == null
                    ? void 0
                    : Ct.name) ||
                  "对方",
              ).trim() || "对方",
            Me = Yt.slice(-80)
              .map(
                (Dt) =>
                  `${Dt != null && Dt.isMe ? "我" : de}：${String((Dt == null ? void 0 : Dt.text) || "").trim()}`,
              )
              .filter(Boolean)
              .join(
                `
`,
              )
              .slice(0, 8e3);
          if (!(d != null && d.endpoint) || !(d != null && d.key))
            return Me.slice(0, 420).trim() || "暂无可用内容。";
          try {
            const Dt = await cr(
              d,
              {
                messages: [
                  {
                    role: "system",
                    content: `你是聊天记录总结助手。请将私聊记录整理为可复制阅读的简明总结。
要求：
1) 只用中文；
2) 按四段输出：关系阶段、关键信息点、双方情绪与立场、建议下一句怎么接；
3) 220-520 字；
4) 只输出正文，不要 JSON，不要 Markdown 代码块。`,
                  },
                  {
                    role: "user",
                    content: `【聊天对象】${de}
【最近聊天记录】
${Me}`,
                  },
                ],
                temperature: 0.45,
                max_tokens: 900,
              },
              {
                addApiLog: u,
                logScene: "encounter_summary",
                logContactName: de,
              },
            );
            return String(Dt || "").trim();
          } catch {
            return "总结失败，请稍后重试。";
          }
        },
        [Se, Pe, $e, d, u],
      ),
      bt = l.useCallback((kt, Tt) => {
        const Yt = String(kt || "").trim();
        if (!Yt) return;
        const de = {
          name: String((Tt == null ? void 0 : Tt.name) || Yt).slice(0, 40),
          avatar: String((Tt == null ? void 0 : Tt.avatar) || ""),
        };
        ((Ye.current = { ...(Ye.current || {}), [Yt]: de }),
          tt((Me) => ({ ...(Me || {}), [Yt]: de })));
      }, []),
      ns = l.useCallback((kt, Tt) => {
        const Yt = String(kt || "").trim(),
          de = String(Tt || "").trim();
        !Yt || !de || ht((Me) => ({ ...(Me || {}), [Yt]: de }));
      }, []),
      Ge = l.useCallback(
        (kt) => {
          const Tt = String(kt || "").trim();
          return (Tt && (Xe == null ? void 0 : Xe[Tt])) || null;
        },
        [Xe],
      ),
      Le = l.useCallback((kt) => {
        !Array.isArray(kt) ||
          kt.length === 0 ||
          ut((Tt) => {
            const Yt = { ...(Tt || {}) };
            for (const de of kt) {
              if (!de || typeof de != "object") continue;
              const Me = sy(Am({ ...de }));
              Me && (Yt[Me.id] = Me);
            }
            return Yt;
          });
      }, []),
      _e = l.useCallback(
        (kt) => {
          const Tt = String(kt || "").trim();
          return (Tt && (Pe == null ? void 0 : Pe[Tt])) || null;
        },
        [Pe],
      ),
      yt = (kt) => {
        const Tt = Number(kt);
        return Number.isFinite(Tt)
          ? Math.max(-10, Math.min(10, Math.round(Tt)))
          : 0;
      },
      rt = (kt) => {
        const Tt = Number(kt);
        return !Number.isFinite(Tt) || Tt === 0
          ? 1
          : Tt > 0
            ? Math.max(1, Math.round(Tt))
            : Math.min(-1, Math.round(Tt));
      },
      ze = (kt, Tt = null, Yt = "") => {
        const de = String(kt || "").trim(),
          Me =
            `${String((Tt == null ? void 0 : Tt.tag) || "")} ${String((Tt == null ? void 0 : Tt.bio) || "")} ${String((Tt == null ? void 0 : Tt.intent) || "")} ${String(Yt || "")}`.toLowerCase();
        if (!de) {
          const Ct = `${Me}|empty`;
          let Dt = 0;
          for (let Mt = 0; Mt < Ct.length; Mt += 1)
            Dt = (Dt * 33 + Ct.charCodeAt(Mt)) % 9973;
          return Dt % 2 === 0 ? 1 : -1;
        }
        let et = 0;
        if (
          (de.length >= 8 && (et += 1),
          de.length >= 20 && (et += 1),
          /谢谢|喜欢|爱你|支持|抱抱|想你|太好了|真棒|在乎|理解|辛苦了|加油/.test(
            de,
          ) && (et += 3),
          /一起|见面|约|聊聊|继续|认真|真诚|信任|尊重|关心/.test(de) &&
            (et += 2),
          /认真|稳定|长期|慢慢来|边界|尊重/.test(de) &&
            /慢热|谨慎|边界|安全感|理性|防备/.test(Me) &&
            (et += 2),
          /直说|冲|马上|现在就|刺激|暧昧|撩/.test(de) &&
            /主动|外向|直球|热情|健谈/.test(Me) &&
            (et += 2),
          /查户口|控制|命令|听我的|必须/.test(de) &&
            /慢热|谨慎|边界|独立|理性/.test(Me) &&
            (et -= 3),
          /忽冷忽热|随便|都行|无所谓/.test(de) &&
            /缺爱|依赖|渴望陪伴|敏感/.test(Me) &&
            (et -= 2),
          /呵呵|滚|烦|闭嘴|讨厌|无语|骗|傻|垃圾|有病|神经/.test(de) &&
            (et -= 4),
          /别回|拉黑|算了|随便你|不想聊|没兴趣/.test(de) && (et -= 3),
          de.length <= 2 && (et -= 1),
          de.length >= 40 && (et += 1),
          et === 0)
        ) {
          const Ct = `${de}|${Me}`;
          let Dt = 0;
          for (let Mt = 0; Mt < Ct.length; Mt += 1)
            Dt = (Dt * 33 + Ct.charCodeAt(Mt)) % 9973;
          et = Dt % 2 === 0 ? 1 : -1;
        }
        return rt(yt(et));
      },
      lt = l.useCallback(
        (kt) => {
          const Tt = String(kt || "").trim();
          if (!Tt) return 0;
          const Yt = Ie == null ? void 0 : Ie[Tt];
          return typeof Yt == "number" && !Number.isNaN(Yt)
            ? Math.max(-100, Math.min(100, Yt))
            : 0;
        },
        [Ie],
      ),
      it = l.useCallback((kt) => lt(kt) >= 70, [lt]),
      Ht = l.useCallback((kt, Tt) => {
        const Yt = String(kt || "").trim();
        Yt &&
          ((vt.current = { ...(vt.current || {}), [Yt]: yt(Tt) }),
          ft((de) => ({ ...de, [Yt]: !1 })));
      }, []),
      is = l.useCallback((kt, Tt) => {
        const Yt = String(kt || "").trim();
        if (!Yt) return;
        const Me = rt(yt(Tt));
        Ce((Ct) => {
          const Dt = typeof Ct[Yt] == "number" ? Ct[Yt] : 0,
            Mt = Math.max(-100, Math.min(100, Dt + Me));
          return { ...Ct, [Yt]: Mt };
        });
        const et = { ...(vt.current || {}) };
        (delete et[Yt],
          (vt.current = et),
          De((Ct) => ({ ...Ct, [Yt]: !1 })),
          ft((Ct) => ({ ...Ct, [Yt]: !1 })));
      }, []),
      os = l.useCallback(() => {}, []),
      as = (kt, Tt) => {
        if (!kt || !Array.isArray(Tt) || Tt.length === 0) return;
        const Yt = new Set(Tt);
        Fe((de) => {
          const et = (de[kt] || []).filter((Ct) => !Yt.has(Ct.id));
          return { ...de, [kt]: et };
        });
      },
      vs = (kt, Tt, Yt) => {
        !kt ||
          !Tt ||
          Fe((de) => {
            const et = (de[kt] || []).map((Ct) =>
              Ct.id === Tt ? { ...Ct, ...Yt } : Ct,
            );
            return { ...de, [kt]: et };
          });
      },
      ts = async (kt) => {
        var gs, ps, Is, As, Ks, on;
        if (fe != null && fe[kt]) return;
        const Tt = ve.find((tn) => tn.id === kt),
          Yt = Tt ? null : _e(kt);
        if (Yt) {
          const tn = String(
              Yt.name || ((gs = $e[kt]) == null ? void 0 : gs.name) || "对方",
            ).trim(),
            dn = (((ps = Qe.current) == null ? void 0 : ps[kt]) || []).slice(
              -120,
            ),
            yn = dn.length ? dn[dn.length - 1] : null,
            va = yn ? String(yn.text || "").trim() : "",
            Bn = [...dn]
              .reverse()
              .find((zs) => zs && zs.isMe && zs.type !== "system"),
            Ea = Bn && Bn.id != null ? String(Bn.id) : "";
          String(((Is = Oe.current) == null ? void 0 : Is[kt]) || "");
          const Fn =
              Bn != null && Bn.replyTo
                ? dn.find(
                    (zs) =>
                      zs &&
                      zs.id === Bn.replyTo &&
                      zs.type === "shared_video" &&
                      zs.sharedVideo,
                  )
                : null,
            ha = dn
              .slice(-12)
              .map((zs) => {
                const En =
                    zs != null && zs.isMe
                      ? (ie == null ? void 0 : ie.name) || "我"
                      : tn,
                  Vn = String((zs == null ? void 0 : zs.text) || "")
                    .replace(/(\|\||｜｜)/g, " ")
                    .trim();
                return Vn ? `${En}: ${Vn}` : null;
              })
              .filter(Boolean).join(`
`),
            Cr = dn
              .filter((zs) => zs && !zs.isMe && zs.type === "text")
              .slice(-3)
              .map((zs) => String(zs.text || "").trim())
              .filter(Boolean)
              .join(" | ")
              .slice(0, 300),
            hr =
              (As = Fn == null ? void 0 : Fn.sharedVideo) != null && As.metaText
                ? `

【用户刚刚分享并正在回复的视频（重要：用于理解语境，不要每句都提）】
${Fn.sharedVideo.metaText}
`
                : "",
            ar = `请基于最近对话继续往下聊（不要复述上一轮）。

【最近对话】
${ha || "(无)"}

【禁止复述你刚刚说过的结尾】
${Cr || "(无)"}

${va ? `最新一条内容：${va}` : "用户未发新消息，也要自然推进。"}${hr}`;
          (He((zs) => ({ ...zs, [kt]: !0 })),
            setTimeout(
              () => {
                (async () => {
                  var zs, En;
                  try {
                    const Vn = (
                        ((zs = Qe.current) == null ? void 0 : zs[kt]) || []
                      ).slice(-100),
                      sa = String(
                        (ae == null ? void 0 : ae.douyinPersona) || "",
                      )
                        .trim()
                        .slice(0, 900),
                      { replyText: wa, affectionDelta: ia } = await N(
                        {
                          publicCard: Yt,
                          truthPersonaXml: Ge(kt) || "",
                          characterName: tn,
                          publicUserPersona: sa,
                          latestUserMessage: String(
                            (Bn == null ? void 0 : Bn.text) || "",
                          ),
                        },
                        ar,
                        Vn,
                      ),
                      oa = (Ba) =>
                        String(Ba || "")
                          .replace(
                            /\*Revised\s*Message\s*\d*[：:]*[^*]*\*/gi,
                            "",
                          )
                          .replace(/\*[^*]*修正[^*]*\*/gi, "")
                          .replace(/\*[^*]*Revised[^*]*\*/gi, "")
                          .trim(),
                      La = oa(
                        String(wa || "")
                          .replace(/｜｜/g, "||")
                          .replace(/\|\s*\|\s*/g, "||"),
                      );
                    let Zn = La.split(/\s*\|\|\s*/g)
                      .map((Ba) => Ba.trim())
                      .filter(Boolean)
                      .map((Ba) =>
                        oa(String(Ba || "").replace(/(\|\||｜｜)/g, "")),
                      )
                      .filter((Ba) => Ba && Ba.length > 1)
                      .slice(0, 10);
                    if (Zn.length < 5) {
                      const Ba = La.replace(/(\|\||｜｜)/g, " ")
                        .split(/[。！？!?；;]\s*/g)
                        .map((Mr) => Mr.trim())
                        .filter(Boolean);
                      Zn = [...Zn, ...Ba]
                        .map((Mr) =>
                          oa(String(Mr || "").replace(/(\|\||｜｜)/g, "")),
                        )
                        .filter((Mr) => Mr && Mr.length > 1)
                        .slice(0, 10);
                    }
                    if (Zn.length < 3) {
                      const Ba = La.trim(),
                        Mr = Ba.split(/[。！？!?]\s*/)
                          .map((kn) => kn.trim())
                          .filter(Boolean),
                        Nn = (Mr.length ? Mr : Ba ? [Ba] : [])
                          .map((kn) => String(kn || "").trim())
                          .filter(Boolean);
                      Zn = [...Zn, ...Nn]
                        .map((kn) =>
                          oa(String(kn || "").replace(/(\|\||｜｜)/g, "")),
                        )
                        .filter((kn) => kn && kn.length > 1)
                        .slice(0, 10);
                    }
                    if (((Zn = Zn.slice(0, 10)), Zn.length >= 2)) {
                      const Ba = Zn[Zn.length - 1] || "";
                      String(Ba).trim().length <= 2 &&
                        ((Zn[Zn.length - 2] =
                          `${Zn[Zn.length - 2]}${String(Ba).trim()}`),
                        (Zn = Zn.slice(0, -1)));
                    }
                    const ja = (Ba) =>
                      String(Ba || "")
                        .replace(/\s*\[TRANS:\s*[^\]]*$/gi, "")
                        .trim();
                    if (Zn.length < 4)
                      throw new Error(
                        "Nearby API reply must contain 4-10 bubbles",
                      );
                    const Ei = Zn[0],
                      Li = String(
                        Yt.avatar ||
                          ((En = $e[kt]) == null ? void 0 : En.avatar) ||
                          "",
                      ).trim();
                    Zn.forEach((Ba, Mr) => {
                      setTimeout(
                        () => {
                          let Nn = String(Ba || "")
                            .replace(/(\|\||｜｜)/g, "")
                            .trim();
                          Nn = ja(Nn);
                          const kn = {
                            id: Date.now() + Mr + 1,
                            type: "text",
                            isMe: !1,
                            text: Nn || "…",
                            timestamp: Date.now(),
                          };
                          if (
                            (Fe((Ln) => ({
                              ...Ln,
                              [kt]: [...(Ln[kt] || []), kn],
                            })),
                            Mr === 0)
                          ) {
                            const Ln = rt(
                              yt(
                                Number.isFinite(Number(ia))
                                  ? Number(ia)
                                  : ze(
                                      String(
                                        (Bn == null ? void 0 : Bn.text) || "",
                                      ),
                                      Yt,
                                      Ge(kt) || "",
                                    ),
                              ),
                            );
                            (Ce((fa) => {
                              const Fa = typeof fa[kt] == "number" ? fa[kt] : 0,
                                gr = Math.max(-100, Math.min(100, Fa + Ln));
                              return { ...fa, [kt]: gr };
                            }),
                              Ea &&
                                (Oe.current = {
                                  ...(Oe.current || {}),
                                  [kt]: Ea,
                                }));
                            const ua = {
                              id: Date.now(),
                              type: "message",
                              user: { name: tn, avatar: Li },
                              content: Ei,
                              timestamp: Date.now(),
                              read: !1,
                            };
                            P((fa) => [ua, ...fa]);
                          }
                          Mr === Zn.length - 1 &&
                            (He((Ln) => ({ ...Ln, [kt]: !1 })),
                            De((Ln) => ({ ...Ln, [kt]: !1 })),
                            ft((Ln) => ({ ...Ln, [kt]: !1 })));
                        },
                        350 * Mr + Math.floor(Math.random() * 120),
                      );
                    });
                  } catch {
                    He((sa) => ({ ...sa, [kt]: !1 }));
                  }
                })();
              },
              800 + Math.random() * 600,
            ));
          return;
        }
        if (!Tt) return;
        const de = (((Ks = Qe.current) == null ? void 0 : Ks[kt]) || []).slice(
            -120,
          ),
          Me = de.length ? de[de.length - 1] : null,
          et = Me ? String(Me.text || "").trim() : "",
          Ct = [...de]
            .reverse()
            .find((tn) => tn && tn.isMe && tn.type !== "system"),
          Dt =
            Ct != null && Ct.replyTo
              ? de.find(
                  (tn) =>
                    tn &&
                    tn.id === Ct.replyTo &&
                    tn.type === "shared_video" &&
                    tn.sharedVideo,
                )
              : null,
          Mt = de
            .slice(-12)
            .map((tn) => {
              const dn =
                  tn != null && tn.isMe
                    ? (ie == null ? void 0 : ie.name) || "我"
                    : (Tt == null ? void 0 : Tt.name) || "TA",
                yn = String((tn == null ? void 0 : tn.text) || "")
                  .replace(/(\|\||｜｜)/g, " ")
                  .trim();
              return yn ? `${dn}: ${yn}` : null;
            })
            .filter(Boolean).join(`
`),
          Ut = de
            .filter((tn) => tn && !tn.isMe && tn.type === "text")
            .slice(-3)
            .map((tn) => String(tn.text || "").trim())
            .filter(Boolean)
            .join(" | ")
            .slice(0, 300),
          ws =
            (on = Dt == null ? void 0 : Dt.sharedVideo) != null && on.metaText
              ? `

【用户刚刚分享并正在回复的视频（重要：用于理解语境，不要每句都提）】
${Dt.sharedVideo.metaText}
`
              : "",
          Ls = `请基于最近对话继续往下聊（不要复述上一轮）。

【最近对话】
${Mt || "(无)"}

【禁止复述你刚刚说过的结尾】
${Ut || "(无)"}

${et ? `最新一条内容：${et}` : "用户未发新消息，也要自然推进。"}${ws}`;
        if (
          (() => {
            if (Tt.knowsUserIdentity === !0) return !0;
            const tn = String(et || Ls || "");
            let dn = 0.25;
            return (
              tn.length >= 12 && (dn += 0.15),
              /认识|记得|上次|之前|我们|你还|你是不是|老熟人|绑定/.test(tn) &&
                (dn += 0.2),
              /互关|回关|关注你|关注我/.test(tn) && (dn += 0.15),
              /喜欢|支持|夸|太棒|太好看|好爱|想你/.test(tn) && (dn += 0.1),
              (dn = Math.max(0.05, Math.min(0.75, dn))),
              Math.random() < dn
            );
          })() &&
          !ye.includes(kt)
        ) {
          (xe((yn) => (yn.includes(kt) ? yn : [...yn, kt])),
            R((yn) => (yn.includes(kt) ? yn : [...yn, kt])));
          const tn = {
            id: Date.now(),
            type: "follow",
            user: { id: kt, name: Tt.name, avatar: Tt.avatar },
            content: "回关了你",
            timestamp: Date.now(),
            read: !1,
          };
          P((yn) => [tn, ...yn]);
          const dn = {
            id: `sys-followback-${Date.now()}`,
            type: "system",
            isMe: !1,
            text: `${Tt.name} 回关了你`,
            timestamp: Date.now(),
          };
          Fe((yn) => ({ ...yn, [kt]: [...(yn[kt] || []), dn] }));
        }
        (He((tn) => ({ ...tn, [kt]: !0 })),
          setTimeout(
            async () => {
              var tn;
              try {
                const dn = (
                    ((tn = Qe.current) == null ? void 0 : tn[kt]) || []
                  ).slice(-100),
                  yn = (Nn) =>
                    Nn == null
                      ? ""
                      : typeof Nn == "string"
                        ? Nn
                        : Nn.text ||
                          Nn.foreign ||
                          Nn.en ||
                          Nn.zh ||
                          Nn.cn ||
                          "" ||
                          "",
                  va = (Nn, kn = 3) =>
                    (Array.isArray(Nn) ? Nn : [])
                      .slice()
                      .sort(
                        (fa, Fa) =>
                          ((Fa == null ? void 0 : Fa.id) || 0) -
                          ((fa == null ? void 0 : fa.id) || 0),
                      )
                      .slice(0, kn)
                      .map((fa) => {
                        const Fa = yn(
                          (fa == null ? void 0 : fa.caption) ||
                            (fa == null ? void 0 : fa.content) ||
                            "",
                        );
                        return Fa ? `- ${Fa.slice(0, 60)}` : null;
                      })
                      .filter(Boolean).join(`
`),
                  Bn =
                    Array.isArray(Ae == null ? void 0 : Ae[kt]) &&
                    Ae[kt].length > 0
                      ? Ae[kt]
                      : (k || [])
                          .filter((Nn) => {
                            var kn;
                            return (
                              ((kn = Nn == null ? void 0 : Nn.author) == null
                                ? void 0
                                : kn.id) === kt
                            );
                          })
                          .slice(-5),
                  Ea = (M || []).slice(-5),
                  Fn = va(Bn, 3),
                  ha = va(Ea, 3),
                  Cr =
                    (Fn
                      ? `【你自己账号最近发过的视频】
${Fn}
`
                      : "") +
                    (ha
                      ? `【用户主页最近发过的视频】
${ha}
`
                      : "");
                let hr = "",
                  ar = "";
                try {
                  const Nn = String(
                    (ae == null ? void 0 : ae.douyinPersona) || "",
                  ).trim();
                  if (
                    (Tt == null ? void 0 : Tt.sourceType) === "contact" &&
                    Tt != null &&
                    Tt.contactId
                  ) {
                    const kn = f.find((ua) => ua.id === Tt.contactId),
                      Ln =
                        (kn == null ? void 0 : kn.boundUserPresetId) &&
                        (It || []).find(
                          (ua) =>
                            String(ua == null ? void 0 : ua.id) ===
                            String(kn.boundUserPresetId),
                        );
                    ar = String(
                      (Ln == null ? void 0 : Ln.douyinPersona) || Nn || "",
                    ).slice(0, 500);
                  } else if (
                    Array.isArray(Tt == null ? void 0 : Tt.boundUserPresets) &&
                    Tt.boundUserPresets.length > 0
                  ) {
                    const kn = (It || []).find(
                      (Ln) =>
                        String(Ln == null ? void 0 : Ln.id) ===
                        String(Tt.boundUserPresets[0]),
                    );
                    ar = String(
                      (kn == null ? void 0 : kn.douyinPersona) || Nn || "",
                    ).slice(0, 500);
                  } else ar = Nn.slice(0, 500);
                  if ((Tt == null ? void 0 : Tt.knowsUserIdentity) === !0) {
                    const kn =
                        Tt != null && Tt.contactId
                          ? f.find((ua) => ua.id === Tt.contactId)
                          : null,
                      Ln = kn && typeof i == "function" ? i(kn) : {};
                    hr = String(
                      (Ln == null ? void 0 : Ln.settings) || "",
                    ).slice(0, 500);
                  }
                } catch {}
                let zs = "";
                try {
                  if (
                    (Tt == null ? void 0 : Tt.knowsUserIdentity) === !0 &&
                    Tt.linkMemory === !0 &&
                    Array.isArray(Tt.linkedChatIds) &&
                    Tt.linkedChatIds.length > 0
                  ) {
                    const Nn = (await be.get("chat_app_douyin_memories")) || {},
                      kn = Tt.linkedChatIds.flatMap((Ln) => Nn[Ln] || []);
                    (kn.sort((Ln, ua) => (ua.at || 0) - (Ln.at || 0)),
                      (zs = kn
                        .slice(0, 12)
                        .map(
                          (Ln) => `- ${Ln.npcName || Tt.name}: ${Ln.summary}`,
                        ).join(`
`)));
                  }
                } catch {}
                const En = (Nn) => {
                    const Ln = String(Nn || "")
                      .trim()
                      .split(/\s*\|\|\s*/g)
                      .map((fa) => fa.trim())
                      .filter(Boolean);
                    return Ln.length === 0
                      ? !1
                      : Ln.filter((fa) => /\[TRANS:[^\]]+\]/.test(fa)).length /
                          Ln.length >=
                          0.7;
                  },
                  Vn = () => `

【格式纠错（必须严格执行）】你刚才输出未按双语格式。请重新输出 5-10 条消息，用 || 分隔。每条格式必须为：外语原文[TRANS:中文翻译]。外语原文部分禁止出现中文字符；中文只能出现在 [TRANS:...] 里。只输出正文，不要任何说明。`,
                  sa = (Nn = "") =>
                    b(
                      {
                        ...Tt,
                        knowsUserIdentity: Tt.knowsUserIdentity === !0,
                        boundUserPersona: hr,
                        publicUserPersona: ar,
                        linkedMemories: zs,
                        videoMemories: Cr,
                        sharedVideoContext: (() => {
                          var Fa;
                          if (!(Dt != null && Dt.sharedVideo)) return "";
                          const kn = Dt.sharedVideo,
                            Ln =
                              ((Fa = kn == null ? void 0 : kn.author) == null
                                ? void 0
                                : Fa.id) && String(kn.author.id) === String(kt),
                            ua = Array.isArray(
                              kn == null ? void 0 : kn.comments,
                            )
                              ? kn.comments
                              : [],
                            fa =
                              ua.some(
                                (gr) =>
                                  String(
                                    (gr == null ? void 0 : gr.user) || "",
                                  ).trim() ===
                                  String(
                                    (Tt == null ? void 0 : Tt.name) || "",
                                  ).trim(),
                              ) ||
                              ua.some(
                                (gr) =>
                                  Array.isArray(
                                    gr == null ? void 0 : gr.replies,
                                  ) &&
                                  gr.replies.some(
                                    (po) =>
                                      String(
                                        (po == null ? void 0 : po.user) || "",
                                      ).trim() ===
                                      String(
                                        (Tt == null ? void 0 : Tt.name) || "",
                                      ).trim(),
                                  ),
                              );
                          return `【分享视频判断】这是${Ln ? "你自己" : "别人"}的视频。
【你是否在该视频下评论/回复过】${fa ? "是（你曾在评论区出现过）" : "否（未检测到你在评论区发言）"}`;
                        })(),
                        isBilingual: Tt.isBilingual === !0,
                      },
                      Ls + (Nn || ""),
                      dn,
                    );
                let wa = await sa("");
                (Tt == null ? void 0 : Tt.isBilingual) === !0 &&
                  !En(wa) &&
                  (wa = await sa(Vn()));
                const ia = (Nn) => {
                  const kn = String(Nn || "").replace(/｜｜/g, "||"),
                    Ln = [],
                    ua = /([^\[\]\n\r]+?)\s*\[TRANS:\s*([^\]\n\r]+)\]/g;
                  let fa;
                  for (; (fa = ua.exec(kn)); ) {
                    const Fa = String(fa[1] || "").trim(),
                      gr = String(fa[2] || "").trim();
                    !Fa || !gr || Ln.push(`${Fa}[TRANS:${gr}]`);
                  }
                  return Ln.length >= 3 ? Ln.join("||") : String(Nn || "");
                };
                (Tt == null ? void 0 : Tt.isBilingual) === !0 && (wa = ia(wa));
                const oa = (Nn) =>
                    String(Nn || "")
                      .replace(/\*Revised\s*Message\s*\d*[：:]*[^*]*\*/gi, "")
                      .replace(/\*[^*]*修正[^*]*\*/gi, "")
                      .replace(/\*[^*]*Revised[^*]*\*/gi, "")
                      .trim(),
                  La = oa(
                    String(wa || "")
                      .replace(/｜｜/g, "||")
                      .replace(/\|\s*\|\s*/g, "||"),
                  );
                let ja = La.split(/\s*\|\|\s*/g)
                  .map((Nn) => Nn.trim())
                  .filter(Boolean)
                  .map((Nn) => oa(String(Nn || "").replace(/(\|\||｜｜)/g, "")))
                  .filter((Nn) => Nn && Nn.length > 1)
                  .slice(0, 10);
                if (ja.length < 5) {
                  const Nn = La.replace(/(\|\||｜｜)/g, " ")
                    .split(/[。！？!?；;]\s*/g)
                    .map((kn) => kn.trim())
                    .filter(Boolean);
                  ja = [...ja, ...Nn]
                    .map((kn) =>
                      oa(String(kn || "").replace(/(\|\||｜｜)/g, "")),
                    )
                    .filter((kn) => kn && kn.length > 1)
                    .slice(0, 10);
                }
                if (ja.length < 3) {
                  const Nn = La.trim(),
                    kn = Nn.split(/[。！？!?]\s*/)
                      .map((ua) => ua.trim())
                      .filter(Boolean),
                    Ln = (kn.length ? kn : Nn ? [Nn] : [])
                      .map((ua) => String(ua || "").trim())
                      .filter(Boolean);
                  ja = [...ja, ...Ln]
                    .map((ua) =>
                      oa(String(ua || "").replace(/(\|\||｜｜)/g, "")),
                    )
                    .filter((ua) => ua && ua.length > 1)
                    .slice(0, 10);
                }
                if (ja.length < 3) {
                  const Nn = ["收到", "我懂了", "你具体想怎么做？"];
                  ja = [...ja, ...Nn].slice(0, 3);
                }
                const Ei = ja.reduce(
                  (Nn, kn) => Nn + String(kn || "").length,
                  0,
                );
                if (ja.length === 5 && Ei < 120) {
                  const Nn = [
                    "对了，你刚刚那句我还想追问一下，你具体是怎么想的？",
                    "我这边也有个小想法，想听听你更偏哪种。",
                    "你现在方便的话，给我说细一点，我好接着往下聊。",
                  ];
                  ja = [...ja, ...Nn].slice(0, 8);
                }
                if (ja.length >= 2) {
                  const Nn = ja[ja.length - 1] || "";
                  String(Nn).trim().length <= 2 &&
                    ((ja[ja.length - 2] =
                      `${ja[ja.length - 2]}${String(Nn).trim()}`),
                    (ja = ja.slice(0, -1)));
                }
                const Li = (Nn) =>
                    String(Nn || "")
                      .replace(/\s*\[TRANS:\s*[^\]]*$/gi, "")
                      .trim(),
                  Ba = ja[0] || "收到～",
                  Mr = Tt.isBilingual === !0;
                ja.forEach((Nn, kn) => {
                  setTimeout(
                    () => {
                      let Ln = String(Nn || "")
                          .replace(/(\|\||｜｜)/g, "")
                          .trim(),
                        ua;
                      if (Mr) {
                        const Fa = Ln.match(/\s*\[TRANS:\s*([^\]]+)\]\s*$/i);
                        Fa &&
                          ((ua = Fa[1].trim()),
                          (Ln = Ln.replace(
                            /\s*\[TRANS:\s*[^\]]+\]\s*$/i,
                            "",
                          ).trim()));
                      }
                      Ln = Li(Ln);
                      const fa = {
                        id: Date.now() + kn + 1,
                        type: "text",
                        isMe: !1,
                        text: Ln || "…",
                        ...(ua ? { translation: ua } : {}),
                        timestamp: Date.now(),
                      };
                      if (
                        (Fe((Fa) => ({ ...Fa, [kt]: [...(Fa[kt] || []), fa] })),
                        kn === 0)
                      ) {
                        At(
                          Tt.id,
                          Tt.name,
                          "private_message",
                          String(Nn).slice(0, 200) || "(私信回复)",
                        ).catch(() => {});
                        const Fa = {
                          id: Date.now(),
                          type: "message",
                          user: { name: Tt.name, avatar: Tt.avatar },
                          content: Ba,
                          timestamp: Date.now(),
                          read: !1,
                        };
                        P((gr) => [Fa, ...gr]);
                      }
                      kn === ja.length - 1 && He((Fa) => ({ ...Fa, [kt]: !1 }));
                    },
                    350 * kn + Math.floor(Math.random() * 120),
                  );
                });
              } catch {
                He((yn) => ({ ...yn, [kt]: !1 }));
              }
            },
            800 + Math.random() * 600,
          ));
      },
      ys = (kt) =>
        kt == null
          ? ""
          : typeof kt == "string"
            ? kt
            : typeof kt == "object"
              ? kt.text ||
                kt.foreign ||
                kt.en ||
                kt.zh ||
                kt.cn ||
                kt.translation ||
                ""
              : String(kt),
      Vs = async (kt, Tt, Yt, de, Me = []) => {
        var ha, Cr, hr, ar;
        if (!kt) return null;
        let et = kt;
        Array.isArray(et) &&
          (et =
            et.find(
              (zs) =>
                zs &&
                (zs.video || zs.videos || zs.scenes || zs.caption || zs.author),
            ) || et[0]);
        for (let zs = 0; zs < 3; zs++) {
          const En =
            (et &&
              typeof et == "object" &&
              (et.data || et.result || et.payload)) ||
            null;
          if (!En || typeof En != "object") break;
          et = En;
        }
        if (et && typeof et.video == "string")
          try {
            const zs = JSON.parse(et.video);
            zs && typeof zs == "object" && (et = { ...et, video: zs });
          } catch {}
        if (
          et &&
          !et.video &&
          Array.isArray(et.videos) &&
          et.videos.length > 0
        ) {
          const zs = et.videos[0] || {},
            En = Array.isArray(et.comments) ? et.comments : null;
          et = {
            video: {
              scenes: zs.scenes || [],
              caption: zs.caption || zs.content || "",
              author: zs.author || et.author || {},
              bgmKeyword: zs.bgmKeyword || et.bgmKeyword,
              stats: zs.stats ||
                et.stats || {
                  likes: 100,
                  comments: 10,
                  shares: 5,
                  favorites: 1,
                },
            },
            comments: En || (Array.isArray(zs.comments) ? zs.comments : []),
            hotSearches: Array.isArray(et.hotSearches) ? et.hotSearches : [],
          };
        }
        if (!et || !et.video) return null;
        const { video: Ct, comments: Dt, hotSearches: Mt } = et;
        Mt && Array.isArray(Mt) && B(Mt);
        const Ut = (zs, En) => {
            const Vn = Yt.find((sa) => sa.name === zs);
            if (Vn != null && Vn.avatar) return Vn.avatar;
            if (Vn != null && Vn.contactId) {
              const sa = f.find((wa) => wa.id === Vn.contactId);
              if (sa) return sa.portrait || sa.avatar;
            }
            return `https://api.dicebear.com/7.x/avataaars/svg?seed=${En || zs}`;
          },
          ws = (zs) => {
            const En = Yt.find((Vn) => Vn.name === zs);
            return En ? En.id : `temp_user_${zs}`;
          },
          Ls = (zs) => {
            const En = String(zs || "").trim();
            return En
              ? /(用户|楼主|本人|博主本人|作者本人|user|User|USER)/.test(En)
              : !0;
          },
          Ot = new Set(
            (Array.isArray(Me) ? Me : [])
              .map((zs) =>
                String((zs == null ? void 0 : zs.boundUserName) || "").trim(),
              )
              .filter(Boolean),
          ),
          rs = (zs) => {
            if (zs == null) return "";
            if (typeof zs == "string") return zs;
            if (typeof zs == "object") {
              const En = zs.text || zs.foreign || zs.en || "",
                Vn = zs.zh || zs.cn || zs.translation || "";
              return `${En}
${Vn}`.trim();
            }
            return String(zs);
          },
          gs = (zs) => {
            const En = String(zs || "");
            if (!En) return !1;
            for (const Vn of Ot) if (Vn && En.includes(Vn)) return !0;
            return !1;
          },
          ps = (zs) => {
            const En = String(zs || "").trim();
            return !(!En || Ls(En) || Ot.has(En));
          },
          Is = (zs) => !gs(rs(zs)),
          on = (Array.isArray(Dt) ? Dt : [])
            .filter(
              (zs) =>
                ps(zs == null ? void 0 : zs.user) &&
                Is(zs == null ? void 0 : zs.content),
            )
            .map((zs) => ({
              ...zs,
              replies: (Array.isArray(zs == null ? void 0 : zs.replies)
                ? zs.replies
                : []
              ).filter(
                (En) =>
                  ps(En == null ? void 0 : En.user) &&
                  Is(En == null ? void 0 : En.content),
              ),
            }))
            .map((zs, En) => ({
              id: Date.now() + En + Math.random(),
              user: {
                name: zs.user,
                avatar: Ut(zs.user, zs.user),
                id: ws(zs.user),
              },
              content: zs.content,
              likes: zs.likes || 0,
              timestamp: Date.now() - Math.floor(Math.random() * 36e5),
              location: zs.ip_location || "未知",
              replyCount: (zs.replies || []).length,
              isLiked: !1,
              replies: (zs.replies || []).map((Vn, sa) => ({
                id: Date.now() + En + sa + 1e3,
                user: {
                  name: Vn.user,
                  avatar: Ut(Vn.user, Vn.user),
                  id: ws(Vn.user),
                },
                content: Vn.content,
                likes: Vn.likes || 0,
                timestamp: Date.now() - Math.floor(Math.random() * 18e5),
                location: zs.ip_location || "未知",
                isLiked: !1,
              })),
            }));
        let tn = { name: "原声", author: "未知", url: null, cover: null };
        if (de.enableBGM !== !1) {
          const zs = String(Ct.bgmKeyword || "").toLowerCase(),
            En = ["恐怖", "浪漫", "搞笑", "温馨", "忧郁"],
            sa = /恐怖|惊悚|灵异|阴森/.test(zs)
              ? "恐怖"
              : /浪漫|爱情|甜蜜|恋爱/.test(zs)
                ? "浪漫"
                : /搞笑|沙雕|幽默|欢快|轻松/.test(zs)
                  ? "搞笑"
                  : /温馨|治愈|温暖|亲情|治愈/.test(zs)
                    ? "温馨"
                    : /忧郁|悲伤|伤感|抒情/.test(zs)
                      ? "忧郁"
                      : null,
            wa =
              (Tt == null ? void 0 : Tt.useExclusiveBgm) === !0 &&
              Tt != null &&
              Tt.id
                ? xs[Tt.id]
                : null,
            oa =
              wa && En.some((Zn) => Array.isArray(wa[Zn]) && wa[Zn].length > 0)
                ? wa
                : _s || {};
          let La =
            sa && Array.isArray(oa[sa]) && oa[sa].length > 0 ? oa[sa] : null;
          if (!La || La.length === 0) {
            for (const Zn of En)
              if (Array.isArray(oa[Zn]) && oa[Zn].length > 0) {
                La = oa[Zn];
                break;
              }
          }
          if (La && La.length > 0) {
            const Zn = La[Math.floor(Math.random() * La.length)];
            tn = {
              name: Zn.name || "自定义BGM",
              author: Zn.author || "未知",
              url: Zn.url || null,
              cover: Zn.cover || null,
            };
          } else tn = { name: "原声", author: "未知", url: null, cover: null };
        }
        const dn = on.reduce((zs, En) => {
            var Vn;
            return (
              zs + 1 + (((Vn = En.replies) == null ? void 0 : Vn.length) || 0)
            );
          }, 0),
          yn = f.find(
            (zs) =>
              zs.id === (Tt == null ? void 0 : Tt.contactId) ||
              zs.id === (Tt == null ? void 0 : Tt.id) ||
              zs.douyinId === (Tt == null ? void 0 : Tt.id),
          ),
          va = yn ? yn.portrait || yn.avatar : null,
          Bn = Tt
            ? va ||
              Tt.avatar ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${Tt.id || Tt.name}`
            : (ha = Ct.author) != null && ha.avatarStyle
              ? `https://api.dicebear.com/7.x/${Ct.author.avatarStyle}/svg?seed=${Ct.author.name}`
              : null,
          Ea = (Ct == null ? void 0 : Ct.stats) || {
            likes: 100,
            shares: 5,
            favorites: 1,
          };
        return {
          id:
            typeof crypto < "u" && typeof crypto.randomUUID == "function"
              ? crypto.randomUUID()
              : `${Date.now()}_${Math.random().toString(36).slice(2, 11)}_${Math.random().toString(36).slice(2, 11)}`,
          type: "text",
          scenes: Ct.scenes || [
            {
              visual: Ct.script || Ct.content,
              subtitle: Ct.script || Ct.content,
            },
          ],
          caption: Ct.caption || Ct.content,
          author: {
            id: Tt
              ? Tt.id
              : ((Cr = Ct.author) == null ? void 0 : Cr.id) ||
                `user_${Date.now()}`,
            name: Tt ? Tt.name : (hr = Ct.author) == null ? void 0 : hr.name,
            avatar: Bn,
            contactId: (Tt == null ? void 0 : Tt.contactId) || void 0,
            knowsUserIdentity:
              (Tt == null ? void 0 : Tt.knowsUserIdentity) === !0,
            isFollowing: je.includes(
              Tt ? Tt.id : (ar = Ct.author) == null ? void 0 : ar.id,
            ),
            isBilingual: (Tt == null ? void 0 : Tt.isBilingual) === !0,
          },
          stats: {
            likes: Number.isFinite(Ea.likes) ? Ea.likes : 100,
            comments: dn,
            shares: Number.isFinite(Ea.shares) ? Ea.shares : 5,
            favorites: Number.isFinite(Ea.favorites) ? Ea.favorites : 1,
            views: Math.floor(
              (Number.isFinite(Ea.likes) ? Ea.likes : 100) *
                (10 + Math.random() * 20),
            ),
          },
          bgm: tn,
          isLiked: !1,
          isFavorited: !1,
          comments: on,
        };
      },
      pt = async (kt) => {
        if (!kt || !kt.id) return;
        if (Ae[kt.id] && Ae[kt.id].length > 0) return Ae[kt.id];
        const Tt = we.npcHistoryCount || 5,
          Yt = await v(kt, Tt);
        if (Yt && Yt.length > 0) {
          const de = Yt.map((Me, et) => ({
            ...Me,
            id: Date.now() + et + Math.random(),
            type: "text",
            scenes: Me.scenes || [{ visual: Me.content, subtitle: Me.content }],
            caption: Me.caption || Me.content,
            author: {
              id: kt.id,
              name: kt.name,
              avatar: kt.avatar,
              contactId: kt.contactId,
              douyinId: kt.douyinId,
              knowsUserIdentity: kt.knowsUserIdentity === !0,
              isBilingual: kt.isBilingual === !0,
              isFollowing: je.includes(kt.id),
            },
            stats: {
              likes: Me.likes || Math.floor(Math.random() * 1e4) + 100,
              comments: (Me.comments || []).length,
              shares: Math.floor(Math.random() * 500) + 10,
              favorites: Math.floor(Math.random() * 200) + 5,
              views: Math.floor(Math.random() * 5e4) + 1e3,
            },
            bgm: { name: "推荐配乐", author: "未知", url: null, cover: null },
            isLiked: !1,
            isFavorited: !1,
            comments: (Me.comments || []).map((Ct, Dt) => ({
              id: Date.now() + et + Dt + 1e4,
              user: {
                name: Ct.user,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Ct.user}`,
              },
              content: Ct.content,
              likes: Ct.likes || 0,
              timestamp: Date.now() - Math.floor(Math.random() * 864e5 * 30),
              location: "未知",
              replyCount: 0,
              replies: [],
            })),
          }));
          return (
            te((Me) => ({ ...Me, [kt.id]: de })),
            await At(
              kt.id,
              kt.name,
              "video_post",
              `发布了 ${de.length} 条新视频`,
            ),
            de
          );
        }
        return [];
      },
      qe = async (kt) => {
        if (!kt) return { videos: [], users: [] };
        const Tt = ve || [];
        try {
          const Yt = await g(kt, {
            worldSetting: we.worldSetting,
            promptTemplate: we.promptTemplate,
          });
          if (!Yt) return { videos: [], users: [] };
          const { videos: de, users: Me, hotSearches: et } = Yt;
          et && Array.isArray(et) && B(et);
          const Ct = [];
          if (de && Array.isArray(de))
            for (const Mt of de) {
              const Ut = Mt.scenes || [
                  { visual: Mt.content, subtitle: Mt.content },
                ],
                ws = Mt.caption || Mt.content,
                Ls = {
                  video: {
                    ...Mt,
                    scenes: Ut,
                    caption: ws,
                    bgmKeyword: Mt.bgmKeyword,
                  },
                  comments: Mt.comments || [],
                };
              let Ot = null;
              Mt.author &&
                Mt.author.isOfficial &&
                (Ot = {
                  id: Mt.author.id || `official_${Date.now()}_${Math.random()}`,
                  name: Mt.author.name,
                  avatar: `https://api.dicebear.com/7.x/${Mt.author.avatarStyle || "initials"}/svg?seed=${Mt.author.name}`,
                  isOfficial: !0,
                });
              const rs = await Vs(Ls, Ot, Tt, we);
              rs &&
                (Mt.author &&
                  (rs.author = {
                    ...rs.author,
                    name: Mt.author.name,
                    isOfficial: Mt.author.isOfficial,
                  }),
                Ct.push(rs));
            }
          const Dt = (Me || []).map((Mt) => ({
            id: Mt.id || `user_${Date.now()}_${Math.random()}`,
            name: Mt.name,
            avatar: `https://api.dicebear.com/7.x/${Mt.avatarStyle || "avataaars"}/svg?seed=${Mt.name}`,
            bio: Mt.bio || Mt.relation,
            isOfficial: Mt.isOfficial,
            relation: Mt.relation,
            fans: Mt.fans,
          }));
          return { videos: Ct, users: Dt, hotSearches: et };
        } catch {
          return { videos: [], users: [], hotSearches: [] };
        }
      },
      dt = l.useCallback(async () => {
        var de;
        const kt = Jk(ve).map((Me) => ({
          name: Me == null ? void 0 : Me.name,
          bio: String(zf(Me, f) || "").trim(),
          style: String((Me == null ? void 0 : Me.style) || "").trim(),
        }));
        if (!kt.length) return !1;
        const Tt = await x(kt, {
          worldSetting: we.worldSetting,
          promptTemplate: we.promptTemplate,
        });
        if (!((de = Tt == null ? void 0 : Tt.hotSearches) != null && de.length))
          return !1;
        const Yt = Tt.hotSearches
          .map((Me, et) => ({
            keyword: String(Me.keyword || "").trim(),
            isHot: !!Me.isHot,
            rank:
              typeof Me.rank == "number" && !Number.isNaN(Me.rank)
                ? Me.rank
                : et + 1,
          }))
          .filter((Me) => Me.keyword);
        return (Yt.sort((Me, et) => Me.rank - et.rank), B(Yt), !0);
      }, [ve, f, we.worldSetting, we.promptTemplate, x]),
      xt = async (kt = !1, Tt = we, Yt = ve) => {
        var ws, Ls, Ot, rs;
        if (y || re) return;
        (he(!0), J(""));
        const de = (Tt == null ? void 0 : Tt.batchSize) || 5,
          Me = Yt || [],
          et = Jk(Me),
          Ct = ae,
          Dt = (Me || [])
            .filter((gs) => gs && gs.canComment === !0)
            .slice(0, 12)
            .map((gs) => {
              let ps = "",
                Is = "";
              if (
                gs.knowsUserIdentity === !0 &&
                gs.sourceType === "contact" &&
                gs.contactId
              ) {
                const As = (f || []).find((on) => on.id === gs.contactId),
                  Ks = As && typeof i == "function" ? i(As) : {};
                ((ps = (Ks == null ? void 0 : Ks.name) || ""),
                  (Is = String((Ks == null ? void 0 : Ks.settings) ?? "").slice(
                    0,
                    400,
                  )));
              } else if (
                gs.knowsUserIdentity === !0 &&
                Array.isArray(gs.boundUserPresets) &&
                gs.boundUserPresets.length
              ) {
                const As = (It || []).find(
                  (Ks) =>
                    String(Ks == null ? void 0 : Ks.id) ===
                    String(gs.boundUserPresets[0]),
                );
                Is = String(
                  (As == null ? void 0 : As.douyinPersona) ||
                    (Ct == null ? void 0 : Ct.douyinPersona) ||
                    "",
                ).slice(0, 400);
              }
              return {
                name: gs.name,
                rolePersona: String(zf(gs, f) || "").slice(0, 500),
                style: String(gs.style || "").slice(0, 200),
                boundUserName: ps,
                boundUserPersona: Is,
                isBilingual: gs.isBilingual === !0,
                knowsUserIdentity: gs.knowsUserIdentity === !0,
              };
            }),
          Mt = [],
          Ut = et.length > 0;
        if (!Ut) {
          (Me.length > 0 &&
            J(
              "所有居民均已关闭「参与刷新视频」。请在设置 → 居民登记处为至少一位居民打开该开关。",
            ),
            he(!1));
          return;
        }
        try {
          const gs = (ps) => ({ selectedNpc: et[ps % et.length] });
          if (de > 1 && typeof m == "function") {
            const ps = Array.from({ length: de })
                .map((As, Ks) => gs(Ks).selectedNpc)
                .filter(Boolean),
              Is = 2;
            for (let As = 0; As < ps.length; As += Is) {
              const Ks = ps.slice(As, As + Is),
                on = await m({
                  count: Ks.length,
                  worldSetting: Tt.worldSetting,
                  npcProfiles: Ks.map((dn) => ({
                    id: dn.id,
                    name: dn.name,
                    bio: zf(dn, f),
                    style: dn.style,
                    isBilingual: dn.isBilingual === !0,
                    knowsUserIdentity: dn.knowsUserIdentity === !0,
                  })),
                  userPersona: Ct,
                  promptTemplate: Tt.promptTemplate,
                  commentCountRange: Tt.commentRange,
                  npcList: Me,
                  residentCommenters: Dt,
                });
              on != null &&
                on.hotSearches &&
                Array.isArray(on.hotSearches) &&
                B(on.hotSearches);
              const tn = Array.isArray(on == null ? void 0 : on.videos)
                ? on.videos
                : [];
              for (let dn = 0; dn < tn.length; dn++) {
                const yn = tn[dn] || {},
                  va =
                    yn.npcId ||
                    ((Ls =
                      (ws = yn == null ? void 0 : yn.video) == null
                        ? void 0
                        : ws.author) == null
                      ? void 0
                      : Ls.id) ||
                    ((Ot = Ks[dn]) == null ? void 0 : Ot.id),
                  Bn = Ks.find((ha) => ha.id === va) || Ks[dn];
                if (!Bn) continue;
                const Ea = {
                    video: yn.video || yn,
                    comments: Array.isArray(yn.comments)
                      ? yn.comments
                      : Array.isArray(
                            (rs = yn.video) == null ? void 0 : rs.comments,
                          )
                        ? yn.video.comments
                        : [],
                    hotSearches: Array.isArray(
                      on == null ? void 0 : on.hotSearches,
                    )
                      ? on.hotSearches
                      : [],
                  },
                  Fn = await Vs(Ea, Bn, Me, Tt, Dt);
                Fn
                  ? Mt.push(Fn)
                  : J(
                      (ha) =>
                        ha ||
                        "生成成功但解析失败：视频格式不符合预期，已跳过。",
                    );
              }
            }
          } else
            for (let ps = 0; ps < de; ps++) {
              let Is = null;
              if ((Ut && (Is = gs(ps).selectedNpc), !!Is))
                try {
                  const As = await p({
                      worldSetting: Tt.worldSetting,
                      npcProfile: { ...Is, bio: zf(Is, f) },
                      userPersona: Ct,
                      promptTemplate: Tt.promptTemplate,
                      commentCountRange: Tt.commentRange,
                      npcList: Me,
                      residentCommenters: Dt,
                      bilingual: (Is == null ? void 0 : Is.isBilingual) === !0,
                    }),
                    Ks = await Vs(As, Is, Me, Tt, Dt);
                  Ks
                    ? Mt.push(Ks)
                    : J(
                        (on) =>
                          on ||
                          "生成成功但解析失败：视频格式不符合预期，已跳过。",
                      );
                } catch {
                  J((Ks) => Ks || "生成失败：请稍后重试（可查看 API 日志）。");
                }
            }
          Mt.length > 0 &&
            (kt
              ? (C((ps) => {
                  const Is = Array.isArray(ps) ? ps : [],
                    As = Array.isArray(Mt) ? Mt : [],
                    Ks = [],
                    on = new Set();
                  for (const dn of As) {
                    const yn = dn == null ? void 0 : dn.id;
                    !yn || on.has(yn) || (on.add(yn), Ks.push(dn));
                  }
                  for (const dn of Is) {
                    const yn = dn == null ? void 0 : dn.id;
                    !yn || on.has(yn) || (on.add(yn), Ks.push(dn));
                  }
                  const tn =
                    ((Tt == null ? void 0 : Tt.historyLimit) ??
                      (we == null ? void 0 : we.historyLimit)) ||
                    50;
                  return Ks.length > tn ? Ks.slice(0, tn) : Ks;
                }),
                D("recommend"),
                O(0))
              : C((ps) => [...ps, ...Mt]));
        } finally {
          he(!1);
        }
        return (
          Mt.length === 0 &&
            J(
              (gs) =>
                gs ||
                "生成完成但没有可显示的新视频：可能是返回格式异常或被过滤。",
            ),
          Mt
        );
      };
    l.useEffect(() => {
      const kt =
        F === "recommend"
          ? (k || []).length
          : F === "works"
            ? (M || []).length
            : F === "npc_works"
              ? (T || []).length
              : (S || []).length;
      kt <= 0 || (z > kt - 1 && O(kt - 1), z < 0 && O(0));
    }, [F, k.length, M.length, T.length, S.length]);
    const zt = (kt) => {
        const Tt = (Yt) =>
          Yt.map((de) =>
            de.id === kt
              ? {
                  ...de,
                  isLiked: !de.isLiked,
                  stats: {
                    ...de.stats,
                    likes: de.isLiked ? de.stats.likes - 1 : de.stats.likes + 1,
                  },
                }
              : de,
          );
        (C((Yt) => Tt(Yt)), E((Yt) => Tt(Yt)));
      },
      ms = (kt, Tt) => {
        const Yt = (de) => (de.id === kt ? { ...de, ...Tt } : de);
        (C((de) => de.map(Yt)),
          E((de) => de.map(Yt)),
          I((de) => de.map(Yt)),
          j((de) => de.map(Yt)));
      },
      Cs = async (kt) => {
        xe((Yt) => {
          const de = Yt.includes(kt);
          let Me;
          if (de)
            ((Me = Yt.filter((et) => et !== kt)),
              R((et) => et.filter((Ct) => Ct !== kt)));
          else {
            Me = [...Yt, kt];
            const et = kt;
            queueMicrotask(() => {
              Ye.current[et] && Ee((Ct) => ({ ...Ct, [et]: !0 }));
            });
          }
          return (ie && ur({ following: Me.length }), Me);
        });
        const Tt = (Yt) =>
          Yt.map((de) =>
            de.author.id === kt
              ? {
                  ...de,
                  author: { ...de.author, isFollowing: !de.author.isFollowing },
                }
              : de,
          );
        (C((Yt) => Tt(Yt)), E((Yt) => Tt(Yt)));
      },
      us = async (kt, Tt = !1) => {
        const Yt = f.find((Me) => Me.id === kt);
        if (Yt) {
          const Me = ve.find(
            (et) =>
              et &&
              et.sourceType === "contact" &&
              String(et.contactId) === String(Yt.id),
          );
          if (Me) return us(Me.id, Tt);
        }
        let de = ve.find((Me) => Me.id === kt);
        if (!de) {
          const Me = ln.current[kt];
          Me && (de = { ...Me, isTemp: !0 });
        }
        if (!de && !Tt) {
          const Me = [...k, ...S, ...M].find((et) => et.author.id === kt);
          if (Me)
            de = {
              id: Me.author.id,
              name: Me.author.name,
              avatar: Me.author.avatar,
              isTemp: !0,
            };
          else if (kt && kt.startsWith("temp_user_")) {
            const et = kt.replace("temp_user_", "");
            de = {
              id: kt,
              name: et,
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${et}`,
              isTemp: !0,
            };
          }
        }
        if (!de) {
          if (kt == null || kt === "") return null;
          const Me = String(kt);
          let et = "用户";
          (Me.startsWith("temp_user_")
            ? (et = Me.slice(11).trim() || et)
            : Me.length <= 24 && !/^[0-9a-f-]{36}$/i.test(Me)
              ? (et = Me)
              : (et = `用户${Me.slice(-6)}`),
            (de = {
              id: kt,
              name: et,
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(Me)}`,
              isTemp: !0,
              bio: "",
            }));
        }
        if (!de.douyinId || !de.location || !de.isEnriched) {
          const Me = de.id
              .split("")
              .reduce((Ut, ws) => Ut + ws.charCodeAt(0), 0),
            et = (Ut = 0) => {
              const ws = Math.sin(Me + Ut) * 1e4;
              return ws - Math.floor(ws);
            },
            Ct = [
              "北京",
              "上海",
              "广东",
              "浙江",
              "四川",
              "江苏",
              "湖南",
              "重庆",
              "山东",
              "河南",
            ],
            Dt = [
              "日常",
              "搞笑",
              "知识",
              "剧情",
              "颜值",
              "才艺",
              "萌宠",
              "美食",
              "旅行",
              "健身",
            ],
            Mt = {
              ...de,
              douyinId: de.douyinId || `DY${Math.floor(et(1) * 9e7) + 1e7}`,
              location: de.location || Ct[Math.floor(et(2) * Ct.length)],
              age: de.age || Math.floor(et(3) * 30) + 18,
              style: de.style || Dt[Math.floor(et(4) * Dt.length)],
              bio: de.bio || "这个用户很神秘，还没有简介...",
              followers: de.followers || Math.floor(et(5) * 1e6) + 1e3,
              following: de.following || Math.floor(et(6) * 200) + 10,
              likes: de.likes || Math.floor(et(7) * 5e6) + 1e4,
              isEnriched: !0,
            };
          return (
            ve.find((Ut) => Ut.id === kt) &&
              Ve((Ut) => Ut.map((ws) => (ws.id === kt ? Mt : ws))),
            Mt
          );
        }
        return de;
      },
      Rs = (kt) => {
        const Tt = kt.douyinId || kt.id;
        if (je.includes(Tt)) return;
        (xe((de) => [...de, Tt]),
          ss((de) => [...de, { id: Tt, contact: { ...kt } }]));
        const Yt = (de) =>
          de.map((Me) =>
            Me.author && (Me.author.id === Tt || Me.author.id === kt.id)
              ? { ...Me, author: { ...Me.author, isFollowing: !0 } }
              : Me,
          );
        (C((de) => Yt(de)),
          E((de) => Yt(de)),
          ie && ur({ following: je.length + 1 }));
      },
      Rt = async () => {
        if (bs.length === 0) {
          ss([]);
          return;
        }
        const kt = new Set(je),
          Tt = bs.filter((Dt) => kt.has(Dt.id));
        if ((ss([]), Tt.length === 0)) return;
        const Yt = Tt.map(({ id: Dt, contact: Mt }) => {
            const Ut = ve.find(
                (Ot) =>
                  Ot &&
                  Ot.sourceType === "contact" &&
                  String(Ot.contactId) === String(Mt.id),
              ),
              Ls =
                (Ut == null ? void 0 : Ut.knowsUserIdentity) === !0 &&
                typeof i == "function"
                  ? i(Mt)
                  : {};
            return {
              id: Dt,
              name: Mt.name || Mt.nickname || "未知",
              avatar: Mt.avatar,
              setting: Mt.setting || "",
              boundUserName: Ls.name,
              boundUserSettings: Ls.settings || "",
            };
          }),
          de = {
            name:
              ae.name ||
              (n == null ? void 0 : n.name) ||
              (ie == null ? void 0 : ie.name) ||
              "用户",
            douyinPersona: ae.douyinPersona || "",
          },
          { followBackIds: Me } = await w(Yt, de);
        if (!Me || Me.length === 0) return;
        const et = new Map(Tt.map((Dt) => [Dt.id, Dt.contact])),
          Ct = Me.map((Dt) => {
            var Ls, Ot;
            const Mt = et.get(Dt),
              Ut = Mt
                ? Mt.name || Mt.nickname
                : (Ls = ve.find((rs) => rs.id === Dt)) == null
                  ? void 0
                  : Ls.name,
              ws = Mt
                ? Mt.avatar
                : (Ot = ve.find((rs) => rs.id === Dt)) == null
                  ? void 0
                  : Ot.avatar;
            return {
              id: `follow_${Dt}_${Date.now()}`,
              type: "follow",
              user: { id: Dt, name: Ut || "TA", avatar: ws || null },
              content: "回关了你",
              timestamp: Date.now(),
              read: !1,
            };
          });
        (R((Dt) => {
          const Mt = [...Dt];
          return (
            Me.forEach((Ut) => {
              Mt.includes(Ut) || Mt.push(Ut);
            }),
            Mt
          );
        }),
          Ct.length > 0 && P((Dt) => [...Ct, ...Dt]),
          Fe((Dt) => {
            const Mt = { ...Dt };
            return (
              Me.forEach((Ut) => {
                const ws = Mt[Ut] || [];
                Mt[Ut] = [
                  ...ws,
                  {
                    id: `friend_${Date.now()}_${Ut}`,
                    type: "text",
                    isMe: !1,
                    text: "你们已成为朋友",
                    timestamp: Date.now(),
                  },
                ];
              }),
              Mt
            );
          }));
      },
      Es = async (kt) => {
        if (!(kt != null && kt.id)) return { ok: !1, message: "无效联系人" };
        const Tt = String(kt.douyinId || kt.id),
          Yt = ve.find(
            (gs) =>
              gs &&
              gs.sourceType === "contact" &&
              String(gs.contactId) === String(kt.id),
          ),
          de = (Yt == null ? void 0 : Yt.id) || `npc_contact_${kt.id}`;
        if (je.includes(de) || je.includes(Tt) || je.includes(String(kt.id)))
          return { ok: !0, skipped: !0 };
        const Ct =
            (Yt == null ? void 0 : Yt.knowsUserIdentity) === !0 &&
            typeof i == "function"
              ? i(kt)
              : {},
          Dt = {
            name:
              ae.name ||
              (n == null ? void 0 : n.name) ||
              (ie == null ? void 0 : ie.name) ||
              "用户",
            douyinPersona: ae.douyinPersona || "",
          };
        let Mt;
        try {
          Mt = await _(kt, Dt, Ct);
        } catch {
          return { ok: !1, message: "关注失败，请稍后重试" };
        }
        xe((gs) => {
          const ps = new Set(
              [Tt, String(kt.id)].filter(
                (Ks) => Ks && String(Ks) !== String(de),
              ),
            ),
            Is = gs.filter((Ks) => !ps.has(Ks));
          if (Is.includes(de)) return gs;
          const As = [...Is, de];
          return (ie && ur({ following: As.length }), As);
        });
        const Ut = kt.portrait || kt.avatar || "";
        Ve((gs) => {
          const ps = [...(gs || [])],
            Is = ps.findIndex(
              (tn) =>
                tn &&
                tn.sourceType === "contact" &&
                String(tn.contactId) === String(kt.id),
            ),
            As = Is >= 0 ? ps[Is] : null,
            on = {
              ...(As || {}),
              id: de,
              name: Mt.douyinName || kt.name || kt.nickname || "TA",
              douyinId: kt.douyinId || Tt,
              avatar:
                ((As == null ? void 0 : As.avatar) || Ut || "").trim() ||
                (As == null ? void 0 : As.avatar),
              cover: (As == null ? void 0 : As.cover) || kt.background || "",
              bio: String(kt.setting || ""),
              style: Mt.style || "日常",
              signature: Mt.signature || "",
              location:
                Mt.location || (As == null ? void 0 : As.location) || "",
              age: Mt.age ?? (As == null ? void 0 : As.age),
              school: Mt.school || (As == null ? void 0 : As.school) || "",
              tags:
                Array.isArray(Mt.tags) && Mt.tags.length
                  ? Mt.tags
                  : (As == null ? void 0 : As.tags) || [],
              likes: Mt.likes ?? (As == null ? void 0 : As.likes),
              followers: Mt.followers ?? (As == null ? void 0 : As.followers),
              following: Mt.following ?? (As == null ? void 0 : As.following),
              boundUserPresets:
                Array.isArray(As == null ? void 0 : As.boundUserPresets) &&
                As.boundUserPresets.length
                  ? [...As.boundUserPresets]
                  : [],
              canComment: (As == null ? void 0 : As.canComment) === !0,
              isBilingual: (As == null ? void 0 : As.isBilingual) === !0,
              knowsUserIdentity:
                (As == null ? void 0 : As.knowsUserIdentity) === !0,
              useExclusiveBgm:
                (As == null ? void 0 : As.useExclusiveBgm) === !0,
              linkMemory: (As == null ? void 0 : As.linkMemory) === !0,
              linkedChatIds: Array.isArray(
                As == null ? void 0 : As.linkedChatIds,
              )
                ? [...As.linkedChatIds]
                : [],
              sourceType: "contact",
              contactId: kt.id,
            };
          return (Is >= 0 ? (ps[Is] = on) : ps.push(on), ps);
        });
        const ws = Mt.douyinId && String(Mt.douyinId).trim();
        if (ws && typeof c == "function" && ws !== String(kt.douyinId || ""))
          try {
            c(kt.id, { douyinId: ws });
          } catch {}
        const Ls = Mt.douyinName || kt.name || kt.nickname || "TA",
          Ot = "我们已互相关注，可以开始聊天了";
        Mt.followBack &&
          (R((gs) => {
            const ps = new Set(
                [Tt, String(kt.id)].filter(
                  (As) => As && String(As) !== String(de),
                ),
              ),
              Is = gs.filter((As) => !ps.has(As));
            return Is.includes(de) ? gs : [...Is, de];
          }),
          P((gs) => [
            {
              id: `follow_addr_${Date.now()}_${de}`,
              type: "follow",
              user: { id: de, name: Ls, avatar: Ut || null, contactId: kt.id },
              content: "回关了你",
              timestamp: Date.now(),
              read: !1,
            },
            ...gs,
          ]),
          Fe((gs) => {
            const ps = { ...gs },
              Is = ps[Tt] || ps[String(kt.id)] || [],
              As = ps[de] || [],
              Ks = As.length ? As : Is;
            return (
              Is.length &&
                Tt !== de &&
                (delete ps[Tt],
                String(kt.id) !== Tt &&
                  String(kt.id) !== de &&
                  delete ps[String(kt.id)]),
              Ks.some(
                (tn) =>
                  (tn == null ? void 0 : tn.type) === "system" &&
                  String((tn == null ? void 0 : tn.text) || "").includes(
                    "互相关注",
                  ),
              )
                ? ((ps[de] = Ks),
                  Is.length && Tt !== de && delete ps[Tt],
                  String(kt.id) !== Tt &&
                    String(kt.id) !== de &&
                    delete ps[String(kt.id)],
                  ps)
                : ((ps[de] = [
                    {
                      id: `sys-mutual-${Date.now()}`,
                      type: "system",
                      isMe: !1,
                      text: Ot,
                      timestamp: Date.now() - 1,
                    },
                    ...Ks,
                  ]),
                  ps)
            );
          }));
        const rs = (gs) =>
          (gs || []).map((ps) =>
            ps.author &&
            (String(ps.author.id) === de ||
              String(ps.author.id) === Tt ||
              String(ps.author.id) === String(kt.id))
              ? { ...ps, author: { ...ps.author, isFollowing: !0 } }
              : ps,
          );
        return (
          C((gs) => rs(gs)),
          E((gs) => rs(gs)),
          { ok: !0, followBack: !!Mt.followBack }
        );
      },
      nn = (kt) => {
        if (!(kt != null && kt.id)) return;
        const Tt = String(kt.douyinId || kt.id),
          Yt = ve.find(
            (Ct) =>
              Ct &&
              Ct.sourceType === "contact" &&
              String(Ct.contactId) === String(kt.id),
          ),
          de = (Yt == null ? void 0 : Yt.id) || `npc_contact_${kt.id}`,
          Me = new Set([de, Tt, String(kt.id)].filter(Boolean));
        (xe((Ct) => {
          const Dt = Ct.filter((Mt) => !Me.has(String(Mt)));
          return (ie && ur({ following: Dt.length }), Dt);
        }),
          R((Ct) => Ct.filter((Dt) => !Me.has(String(Dt)))));
        const et = (Ct) =>
          (Ct || []).map((Dt) =>
            Dt.author &&
            (Me.has(String(Dt.author.id)) ||
              Me.has(String(Dt.author.douyinId || "")) ||
              String(Dt.author.id) === String(kt.id))
              ? { ...Dt, author: { ...Dt.author, isFollowing: !1 } }
              : Dt,
          );
        (C((Ct) => et(Ct)), E((Ct) => et(Ct)));
      },
      Hs = (kt) => {
        const Tt = String(kt || "").trim();
        if (!Tt) return { ok: !1, message: "请输入抖音号" };
        const Yt = f.find((Me) => Me.douyinId === Tt || Me.id === Tt);
        if (!Yt) return { ok: !1, message: "未找到该用户" };
        const de = Yt.douyinId || Yt.id;
        return de === (ie == null ? void 0 : ie.id) ||
          de ===
            ((ie == null ? void 0 : ie.douyinId) ||
              ((ie == null ? void 0 : ie.id) === "me"
                ? "38088145210"
                : ie == null
                  ? void 0
                  : ie.id))
          ? { ok: !1, message: "不能添加自己" }
          : je.includes(de) && ye.includes(de)
            ? { ok: !0, message: "已是好友" }
            : (xe((Me) => (Me.includes(de) ? Me : [...Me, de])),
              R((Me) => (Me.includes(de) ? Me : [...Me, de])),
              P((Me) => [
                {
                  id: `dy_${Date.now()}`,
                  type: "follow",
                  user: { name: Yt.name || Yt.nickname, avatar: Yt.avatar },
                  content: "已添加为抖音好友",
                  timestamp: Date.now(),
                  read: !1,
                },
                ...Me,
              ]),
              Fe((Me) => {
                const et = Me[de] || [];
                return {
                  ...Me,
                  [de]: [
                    ...et,
                    {
                      id: `sys_${Date.now()}`,
                      type: "text",
                      isMe: !1,
                      text: "你们已成为朋友",
                      timestamp: Date.now(),
                    },
                  ],
                };
              }),
              {
                ok: !0,
                message: `已与 ${Yt.name || Yt.nickname} 成为抖音好友`,
              });
      },
      cn = async () => {
        const kt = await be.get("douyin_chat_accept_friends");
        !Array.isArray(kt) ||
          kt.length === 0 ||
          (await be.set("douyin_chat_accept_friends", []),
          kt.forEach(({ contactId: Tt }) => {
            const Yt = f.find((Me) => Me.id === Tt || Me.douyinId === Tt);
            if (!Yt) return;
            const de = Yt.douyinId || Yt.id;
            (xe((Me) => (Me.includes(de) ? Me : [...Me, de])),
              R((Me) => (Me.includes(de) ? Me : [...Me, de])),
              P((Me) => [
                {
                  id: `dy_accept_${Date.now()}_${de}`,
                  type: "follow",
                  user: {
                    id: de,
                    name: Yt.name || Yt.nickname,
                    avatar: Yt.avatar,
                  },
                  content: "回关了你",
                  timestamp: Date.now(),
                  read: !1,
                },
                ...Me,
              ]),
              Fe((Me) => {
                const et = Me[de] || [];
                return {
                  ...Me,
                  [de]: [
                    ...et,
                    {
                      id: `friend_${Date.now()}_${de}`,
                      type: "text",
                      isMe: !1,
                      text: "你们已成为朋友",
                      timestamp: Date.now(),
                    },
                  ],
                };
              }));
          }));
      },
      fn = (kt) => {
        if (!kt) return;
        const Tt = Date.now();
        ee((Yt) =>
          [
            { contactId: kt, timestamp: Tt },
            ...Yt.filter((Me) => Me.contactId !== kt),
          ].slice(0, 10),
        );
      };
    l.useEffect(() => {
      !W || !(f != null && f.length) || cn();
    }, [W, f]);
    const Rn = (kt) => {
        const Tt =
          f.find((de) => de.id === kt || de.douyinId === kt) ||
          ve.find((de) => de.id === kt);
        if (!Tt) return;
        const Yt = {
          id: Date.now(),
          type: "system",
          user: { name: "系统通知", avatar: null },
          content: `你催更了 ${Tt.name}，对方已收到提醒`,
          timestamp: Date.now(),
          read: !1,
        };
        P((de) => [Yt, ...de]);
      },
      Qn = (kt) => {
        re || (ce(kt), Y(!0));
      },
      ra = (kt) => {
        if (!kt) return null;
        const Tt = ve.find(
          (Yt) =>
            Yt && (Yt.id === kt || Yt.douyinId === kt || Yt.contactId === kt),
        );
        if (Tt != null && Tt.avatar) return Tt.avatar;
        if (Tt != null && Tt.contactId) {
          const Yt = f.find((de) => de.id === Tt.contactId);
          if (Yt) return Yt.portrait || Yt.avatar || null;
        }
        return null;
      },
      _a = (kt) => {
        if (!kt) return null;
        const Tt = ve.find(
          (Yt) =>
            Yt && (Yt.id === kt || Yt.douyinId === kt || Yt.contactId === kt),
        );
        if (Tt != null && Tt.cover) return Tt.cover;
        if (Tt != null && Tt.contactId) {
          const Yt = f.find((de) => de.id === Tt.contactId);
          if (Yt) return Yt.background || null;
        }
        return null;
      },
      Ya = () => {
        (Y(!1), setTimeout(() => ce(null), 300));
      },
      Fr = (kt) => {
        (ke(kt), se(!0));
      },
      kr = () => {
        (se(!1), setTimeout(() => ke(null), 300));
      },
      Oa = async (kt) => {
        if (kt) {
          (C((Tt) => (Tt || []).filter((Yt) => Yt.id !== kt)),
            E((Tt) => (Tt || []).filter((Yt) => Yt.id !== kt)),
            j((Tt) => (Tt || []).filter((Yt) => Yt.id !== kt)),
            I((Tt) => (Tt || []).filter((Yt) => Yt.id !== kt)),
            te((Tt) => {
              const Yt = { ...(Tt || {}) };
              return (
                Object.keys(Yt).forEach((de) => {
                  const Me = Array.isArray(Yt[de]) ? Yt[de] : [];
                  Yt[de] = Me.filter((et) => et.id !== kt);
                }),
                Yt
              );
            }),
            gn((Tt) => {
              const Yt = { ...(Tt || {}) };
              return (
                Object.keys(Yt).forEach((de) => {
                  const Me = Yt[de] || {};
                  if (Me && typeof Me == "object") {
                    const et = { ...Me };
                    (Object.keys(et).forEach((Ct) => {
                      String(Ct) === String(kt) && delete et[Ct];
                    }),
                      (Yt[de] = et));
                  }
                }),
                Yt
              );
            }),
            Te === kt && kr());
          try {
            const Tt = (await be.get("video_app_videos")) || [],
              Yt = (await be.get("video_app_my_videos")) || [];
            (await be.set(
              "video_app_videos",
              (Array.isArray(Tt) ? Tt : []).filter(
                (de) => (de == null ? void 0 : de.id) !== kt,
              ),
            ),
              await be.set(
                "video_app_my_videos",
                (Array.isArray(Yt) ? Yt : []).filter(
                  (de) => (de == null ? void 0 : de.id) !== kt,
                ),
              ));
          } catch {}
        }
      },
      ur = async (kt) => {
        if (!ie) return;
        const Tt = { ...ie, ...kt };
        (X(Tt), await be.set("video_app_user", Tt));
      },
      mi = async (kt) => {
        var Me, et;
        let Tt = kt;
        const Yt =
            ((Me = kt.author) == null ? void 0 : Me.id) ===
            (ie == null ? void 0 : ie.id),
          de =
            ((et = kt.bgm) == null ? void 0 : et.url) &&
            String(kt.bgm.url).trim();
        if (Yt && we.enableBGM !== !1 && _s && !de) {
          const Ct = Object.values(_s)
            .flat()
            .filter((Dt) => Dt && Dt.url);
          if (Ct.length > 0) {
            const Dt = Ct[Math.floor(Math.random() * Ct.length)];
            Tt = {
              ...kt,
              bgm: {
                name: Dt.name || "BGM",
                author: Dt.author || "未知",
                url: Dt.url,
                cover: Dt.cover || null,
              },
            };
          }
        }
        ((kt = Tt),
          E((Ct) => [kt, ...Ct]),
          setTimeout(() => {
            E((Ct) =>
              Ct.map((Dt) =>
                Dt.id === kt.id
                  ? {
                      ...Dt,
                      stats: {
                        ...Dt.stats,
                        views: Math.floor(Math.random() * 50) + 10,
                        likes: Math.floor(Math.random() * 5),
                      },
                    }
                  : Dt,
              ),
            );
          }, 2e3),
          setTimeout(async () => {
            try {
              const Ct = (ve || [])
                  .filter((Ut) => Ut && Ut.canComment === !0)
                  .slice(0, 12)
                  .map((Ut) => {
                    let ws = "",
                      Ls = "";
                    if (
                      Ut.knowsUserIdentity === !0 &&
                      Ut.sourceType === "contact" &&
                      Ut.contactId
                    ) {
                      const Ot = (f || []).find((gs) => gs.id === Ut.contactId),
                        rs = Ot && typeof i == "function" ? i(Ot) : {};
                      ((ws = (rs == null ? void 0 : rs.name) || ""),
                        (Ls = String(
                          (rs == null ? void 0 : rs.settings) ?? "",
                        ).slice(0, 400)));
                    } else if (
                      Ut.knowsUserIdentity === !0 &&
                      Array.isArray(Ut.boundUserPresets) &&
                      Ut.boundUserPresets.length
                    ) {
                      const Ot = (It || []).find(
                        (rs) =>
                          String(rs == null ? void 0 : rs.id) ===
                          String(Ut.boundUserPresets[0]),
                      );
                      Ls = String(
                        (Ot == null ? void 0 : Ot.douyinPersona) ||
                          (ae == null ? void 0 : ae.douyinPersona) ||
                          "",
                      ).slice(0, 400);
                    }
                    return {